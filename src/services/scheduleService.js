import { query } from '../config/database.js';
import * as cache from './cacheService.js';

/** Current time in Israel (UTC+3), timezone-offset-safe. */
export function getILTime() {
  const now = new Date();
  return new Date(now.getTime() + now.getTimezoneOffset() * 60_000 + 3 * 3_600_000);
}

function toMins(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

/** Enrich a sorted program list with is_current / ends_at. */
export function annotateSchedule(programs) {
  const il = getILTime();
  const nowMins = il.getHours() * 60 + il.getMinutes();

  return programs.map((prog, idx) => {
    const startMins = toMins(prog.start_time);
    const next = programs[idx + 1];
    const endMins = next ? toMins(next.start_time) : 24 * 60;
    return {
      ...prog,
      is_current: nowMins >= startMins && nowMins < endMins,
      ends_at: endMins === 24 * 60 ? '00:00' : next?.start_time,
    };
  });
}

/**
 * Returns all active channels with today's schedule annotated.
 * Result is cached for 60 seconds.
 */
export async function getChannelsWithSchedule({ category, search } = {}) {
  const cacheKey = `schedule:${category || 'all'}:${search || ''}`;
  const hit = cache.get(cacheKey);
  if (hit) return hit;

  // DOW in PostgreSQL: 0=Sun…6=Sat, Israel time
  const { rows } = await query(`
    SELECT
      c.id, c.slug, c.name, c.category, c.subcategories,
      c.logo_bg, c.logo_fg, c.sort_order,
      COALESCE(
        json_agg(
          json_build_object(
            'id',          p.id,
            'title',       p.title,
            'description', p.description,
            'genre',       p.genre,
            'badge',       p.badge,
            'start_time',  to_char(p.start_time, 'HH24:MI')
          ) ORDER BY p.start_time
        ) FILTER (WHERE p.id IS NOT NULL),
        '[]'
      ) AS programs
    FROM channels c
    LEFT JOIN programs p
      ON p.channel_id = c.id
      AND (
        p.day_of_week = -1
        OR p.day_of_week = EXTRACT(DOW FROM NOW() AT TIME ZONE 'Asia/Jerusalem')::int
      )
    WHERE c.active = true
      AND ($1::text IS NULL OR $1 = 'all' OR c.subcategories @> ARRAY[$1::text])
      AND ($2::text IS NULL OR c.name ILIKE '%' || $2 || '%'
           OR EXISTS (
             SELECT 1 FROM programs p2
             WHERE p2.channel_id = c.id
               AND (p2.title ILIKE '%' || $2 || '%' OR p2.description ILIKE '%' || $2 || '%')
           ))
    GROUP BY c.id
    ORDER BY c.sort_order, c.name
  `, [category || null, search || null]);

  const result = rows.map(ch => ({
    ...ch,
    programs: annotateSchedule(ch.programs),
  }));

  cache.set(cacheKey, result, 60);
  return result;
}

export async function getChannelById(id) {
  const cacheKey = `channel:${id}`;
  const hit = cache.get(cacheKey);
  if (hit) return hit;

  const { rows: ch } = await query(
    'SELECT id,slug,name,category,subcategories,logo_bg,logo_fg FROM channels WHERE id=$1 AND active=true',
    [id]
  );
  if (!ch.length) return null;

  const { rows: programs } = await query(`
    SELECT id, title, description, genre, badge, to_char(start_time,'HH24:MI') AS start_time
    FROM programs
    WHERE channel_id = $1
      AND (day_of_week = -1 OR day_of_week = EXTRACT(DOW FROM NOW() AT TIME ZONE 'Asia/Jerusalem')::int)
    ORDER BY start_time
  `, [id]);

  const result = { ...ch[0], programs: annotateSchedule(programs) };
  cache.set(cacheKey, result, 60);
  return result;
}
