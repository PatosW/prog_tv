const CACHE = 'tv-guide-v1';
const ASSETS = [
  '/tv-guide-israel/',
  '/tv-guide-israel/index.html',
  '/tv-guide-israel/manifest.json',
  '/tv-guide-israel/icons/icon-192.png',
  '/tv-guide-israel/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
