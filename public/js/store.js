/**
 * Minimal reactive store — pub/sub over a plain object.
 * No framework, no proxies, no magic.
 */

const listeners = new Map();

const state = {
  channels:     [],   // all channels from API
  activeTab:    'all',
  activeGenre:  'all',
  searchQuery:  '',
  favorites:    [],   // channel id list (local, synced with API)
  expanded:     new Set(),
  isLoading:    false,
  error:        null,
  ilTime:       null, // ISO string, updated by clock
  deviceId:     getOrCreateDeviceId(),
};

function getOrCreateDeviceId() {
  const key = 'tv-guide-device-id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function getState() { return state; }

export function setState(patch) {
  Object.assign(state, patch);
  const keys = Object.keys(patch);
  // notify subscribers
  for (const [key, fns] of listeners) {
    if (keys.some(k => key === k || key === '*')) {
      fns.forEach(fn => fn(state));
    }
  }
}

/** Subscribe to one key or '*' for any change. Returns unsubscribe fn. */
export function subscribe(key, fn) {
  if (!listeners.has(key)) listeners.set(key, new Set());
  listeners.get(key).add(fn);
  return () => listeners.get(key).delete(fn);
}

export function toggleExpanded(id) {
  const next = new Set(state.expanded);
  next.has(id) ? next.delete(id) : next.add(id);
  setState({ expanded: next });
}

export function toggleFavorite(id) {
  const favs = state.favorites.includes(id)
    ? state.favorites.filter(f => f !== id)
    : [...state.favorites, id];
  setState({ favorites: favs });
  localStorage.setItem('tv-guide-favs', JSON.stringify(favs));
}

/** Load favorites from localStorage on boot. */
export function loadLocalFavorites() {
  try {
    const raw = localStorage.getItem('tv-guide-favs');
    if (raw) setState({ favorites: JSON.parse(raw) });
  } catch (_) {}
}
