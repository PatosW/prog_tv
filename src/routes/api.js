import { Router } from 'express';
import { listChannels, getChannel } from '../controllers/channels.js';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favorites.js';
import { getILTime } from '../services/scheduleService.js';
import { flush } from '../services/cacheService.js';

const router = Router();

/* ── Health ─────────────────────────────────────────── */
router.get('/health', (_req, res) =>
  res.json({ status: 'ok', il_time: getILTime().toISOString() })
);

/* ── Channels ───────────────────────────────────────── */
// GET /api/v1/channels?category=fr&search=tf1&genre=film
router.get('/channels', listChannels);
router.get('/channels/:id', getChannel);

/* ── Favorites ──────────────────────────────────────── */
// GET    /api/v1/favorites/:deviceId
// POST   /api/v1/favorites    { deviceId, channelId }
// DELETE /api/v1/favorites    { deviceId, channelId }
router.get('/favorites/:deviceId', getFavorites);
router.post('/favorites', addFavorite);
router.delete('/favorites', removeFavorite);

/* ── Cache flush (admin, dev only) ──────────────────── */
router.post('/cache/flush', (_req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  flush();
  res.json({ success: true });
});

export default router;
