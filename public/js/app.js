/**
 * App bootstrap — wires state, API calls, rendering, and clock.
 */
import { api }                  from './api.js';
import { getState, setState,
         subscribe, toggleExpanded,
         toggleFavorite, loadLocalFavorites } from './store.js';
import { renderChannelCard }    from './components/channelCard.js';
import { openModal, closeModal } from './components/modal.js';

// ── IL clock ─────────────────────────────────────────────────────────────────

function getILTime() {
  const now = new Date();
  return new Date(now.getTime() + now.getTimezoneOffset() * 60_000 + 3 * 3_600_000);
}

function updateClock() {
  const t = getILTime();
  const pad = n => String(n).padStart(2, '0');
  document.getElementById('clock').textContent =
    `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
}

setInterval(updateClock, 1_000);
updateClock();

// ── Data fetching ─────────────────────────────────────────────────────────────

async function fetchChannels() {
  const { activeTab, activeGenre, searchQuery } = getState();
  setState({ isLoading: true, error: null });

  try {
    const params = {
      category: activeTab === 'fav' ? null : activeTab,
      search:   searchQuery || null,
      genre:    activeGenre === 'all' ? null : activeGenre,
    };

    const { data } = await api.channels(params);

    let channels = data;

    // Favorites tab: filter client-side (no backend dependency for offline UX)
    if (activeTab === 'fav') {
      const { favorites } = getState();
      channels = data.filter(ch => favorites.includes(ch.id));
    }

    setState({ channels, isLoading: false });
  } catch (err) {
    setState({ isLoading: false, error: err.message });
  }
}

// ── Rendering ─────────────────────────────────────────────────────────────────

function render() {
  const { channels, isLoading, error, activeGenre, activeTab, favorites } = getState();

  const loader  = document.getElementById('loader');
  const list    = document.getElementById('channels-list');
  const empty   = document.getElementById('empty');

  loader.hidden = !isLoading;

  if (error) {
    list.innerHTML = `<div class="error-banner">⚠️ ${error} — <button onclick="location.reload()">Réessayer</button></div>`;
    empty.hidden = true;
    return;
  }

  if (isLoading) { list.innerHTML = ''; empty.hidden = true; return; }

  // Favorites tab: further filter displayed channels
  let displayed = channels;
  if (activeTab === 'fav') {
    displayed = channels.filter(ch => favorites.includes(ch.id));
  }

  if (!displayed.length) {
    list.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  list.innerHTML = displayed
    .map(ch => renderChannelCard(ch, { activeGenre }))
    .join('');
}

// Subscribe store → re-render
subscribe('channels',   render);
subscribe('isLoading',  render);
subscribe('error',      render);
subscribe('expanded',   render);
subscribe('favorites',  render);

// ── Tab / Genre / Search events ───────────────────────────────────────────────

document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t === btn);
    t.setAttribute('aria-selected', t === btn);
  });
  setState({ activeTab: btn.dataset.tab });
  fetchChannels();
});

document.getElementById('genre-filters').addEventListener('click', e => {
  const btn = e.target.closest('.gf');
  if (!btn) return;
  document.querySelectorAll('.gf').forEach(g => g.classList.toggle('active', g === btn));
  setState({ activeGenre: btn.dataset.genre });
  fetchChannels();
});

let searchDebounce;
document.getElementById('search').addEventListener('input', e => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    setState({ searchQuery: e.target.value.trim() });
    fetchChannels();
  }, 280);
});

document.getElementById('btn-refresh').addEventListener('click', () => {
  fetchChannels();
});

// ── Channel list delegation ───────────────────────────────────────────────────

document.getElementById('channels-list').addEventListener('click', e => {
  // Fav button
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    const id = Number(favBtn.dataset.fav);
    toggleFavorite(id);
    // Sync to API (fire-and-forget — no UX block on failure)
    const { deviceId, favorites } = getState();
    const isFav = favorites.includes(id);
    if (isFav) api.addFavorite(deviceId, id).catch(() => {});
    else        api.removeFavorite(deviceId, id).catch(() => {});
    return;
  }

  // Expand button or header
  const expandEl = e.target.closest('[data-expand]');
  if (expandEl) {
    toggleExpanded(Number(expandEl.dataset.expand));
    return;
  }

  // Program item → open modal
  const progItem = e.target.closest('.program-item');
  if (progItem) {
    const { channels } = getState();
    const chId   = Number(progItem.dataset.ch);
    const progId = Number(progItem.dataset.prog);
    const ch     = channels.find(c => c.id === chId);
    const prog   = ch?.programs.find(p => p.id === progId);
    if (!prog) return;
    openModal({
      title: prog.title,
      desc:  prog.description,
      meta:  `${ch.name} · ${prog.start_time}${prog.ends_at ? ' → ' + prog.ends_at : ''} · ${prog.genre}`,
    });
  }
});

// ── Boot ──────────────────────────────────────────────────────────────────────

loadLocalFavorites();
fetchChannels();

// Auto-refresh schedule every 60 seconds
setInterval(fetchChannels, 60_000);

// PWA Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
