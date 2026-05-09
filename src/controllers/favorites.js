import { query } from '../config/database.js';

async function upsertUser(deviceId) {
  const { rows } = await query(
    `INSERT INTO users (device_id) VALUES ($1)
     ON CONFLICT (device_id) DO UPDATE SET device_id = EXCLUDED.device_id
     RETURNING id`,
    [deviceId]
  );
  return rows[0].id;
}

export async function getFavorites(req, res, next) {
  try {
    const { deviceId } = req.params;
    const { rows } = await query(`
      SELECT c.id, c.slug, c.name, c.logo_bg, c.logo_fg, c.category, c.subcategories
      FROM favorites f
      JOIN users    u ON u.id = f.user_id
      JOIN channels c ON c.id = f.channel_id
      WHERE u.device_id = $1
      ORDER BY f.created_at
    `, [deviceId]);
    res.json({ data: rows });
  } catch (err) { next(err); }
}

export async function addFavorite(req, res, next) {
  try {
    const { deviceId, channelId } = req.body;
    if (!deviceId || !channelId) {
      return res.status(400).json({ error: 'deviceId and channelId are required' });
    }
    const userId = await upsertUser(deviceId);
    await query(
      `INSERT INTO favorites (user_id, channel_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`,
      [userId, channelId]
    );
    res.status(201).json({ success: true });
  } catch (err) { next(err); }
}

export async function removeFavorite(req, res, next) {
  try {
    const { deviceId, channelId } = req.body;
    await query(`
      DELETE FROM favorites f
      USING users u
      WHERE f.user_id = u.id
        AND u.device_id = $1
        AND f.channel_id = $2
    `, [deviceId, channelId]);
    res.json({ success: true });
  } catch (err) { next(err); }
}
