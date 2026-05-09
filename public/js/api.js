/**
 * Typed API client for /api/v1.
 * All methods throw on non-2xx or network error.
 */

const BASE = '/api/v1';

async function http(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw Object.assign(new Error(err.error || 'API error'), { status: res.status });
  }
  return res.json();
}

export const api = {
  /** @returns {Promise<{data: Channel[], il_time: string, count: number}>} */
  channels: (params = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v && v !== 'all')
    ).toString();
    return http('GET', `/channels${qs ? '?' + qs : ''}`);
  },

  /** @returns {Promise<{data: Channel}>} */
  channel: (id) => http('GET', `/channels/${id}`),

  /** @returns {Promise<{data: Channel[]}>} */
  favorites: (deviceId) => http('GET', `/favorites/${encodeURIComponent(deviceId)}`),

  addFavorite: (deviceId, channelId) =>
    http('POST', '/favorites', { deviceId, channelId }),

  removeFavorite: (deviceId, channelId) =>
    http('DELETE', '/favorites', { deviceId, channelId }),

  /** @returns {Promise<{status: string}>} */
  health: () => http('GET', '/health'),
};
