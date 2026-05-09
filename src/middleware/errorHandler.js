export function errorHandler(err, req, res, _next) {
  const status = err.status ?? 500;
  const isProd = process.env.NODE_ENV === 'production';
  console.error(`[error] ${req.method} ${req.url}`, err.message);
  res.status(status).json({
    error: isProd && status === 500 ? 'Internal server error' : err.message,
  });
}
