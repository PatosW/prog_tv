import { getState, toggleExpanded, toggleFavorite } from '../store.js';

const BADGE_LABELS = { live: 'EN DIRECT', new: 'NOUVEAU', film: 'FILM', doc: 'DOC', sport: 'SPORT' };

function badge(b) {
  if (!b) return '';
  return `<span class="badge badge-${b}">${BADGE_LABELS[b] || b.toUpperCase()}</span>`;
}

function abbrev(name) {
  return name.replace(/[^A-ZÀ-Ÿa-zà-ÿ0-9+]/g, '').slice(0, 4).toUpperCase();
}

export function renderChannelCard(ch, { activeGenre }) {
  const { expanded, favorites } = getState();
  const isExpanded = expanded.has(ch.id);
  const isFav = favorites.includes(ch.id);

  // Current program
  const cur = ch.programs.find(p => p.is_current);

  // Apply genre filter to displayed programs
  const progs = activeGenre === 'all'
    ? ch.programs
    : ch.programs.filter(p => p.genre === activeGenre);

  const programsHTML = progs.map(p => `
    <div class="program-item${p.is_current ? ' current' : ''}"
         data-ch="${ch.id}" data-prog="${p.id}">
      <div class="prog-time">
        <div class="time">${p.start_time}</div>
        ${p.is_current ? '<div class="now-ind">▶ Maintenant</div>' : ''}
      </div>
      <div class="prog-body">
        <div class="prog-title">${p.title}</div>
        <div class="badges">${badge(p.badge)}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="channel-card" id="card-${ch.id}">
      <div class="channel-header" data-expand="${ch.id}">
        <div class="channel-logo" style="background:${ch.logo_bg};color:${ch.logo_fg}">
          ${abbrev(ch.name)}
        </div>
        <div class="channel-info">
          <div class="channel-name">${ch.name}</div>
          <div class="channel-now">
            ${cur
              ? `<span class="now-time">${cur.start_time}</span> ${cur.title}`
              : '<span>Aucun programme</span>'}
          </div>
        </div>
        <button class="fav-btn" data-fav="${ch.id}" aria-label="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
          ${isFav ? '⭐' : '☆'}
        </button>
        <button class="expand-btn" data-expand="${ch.id}" aria-expanded="${isExpanded}">
          ${isExpanded ? '▲' : '▼'}
        </button>
      </div>
      <div class="program-list${isExpanded ? ' open' : ''}" id="list-${ch.id}">
        ${progs.length ? programsHTML : '<div style="padding:10px 12px;color:#718096;font-size:13px">Aucun programme dans ce filtre</div>'}
      </div>
    </div>
  `;
}
