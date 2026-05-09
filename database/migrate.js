import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from '../src/config/database.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sql = readFileSync(join(__dirname, 'migrations/001_initial.sql'), 'utf8');

try {
  await pool.query(sql);
  console.log('[migrate] ✓ schema up to date');
} catch (err) {
  console.error('[migrate] ✗', err.message);
  process.exit(1);
} finally {
  await pool.end();
}
