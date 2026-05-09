import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

import apiRouter from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(join(__dirname, '../public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1h' : 0,
  etag: true
}));

// API
app.use('/api/v1', rateLimiter, apiRouter);

// SPA fallback
app.get('*', (_req, res) =>
  res.sendFile(join(__dirname, '../public/index.html'))
);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`[tv-guide] http://localhost:${PORT}  env=${process.env.NODE_ENV || 'development'}`)
);

export default app;
