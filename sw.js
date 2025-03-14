const CACHE_NAME = 'carcara-health-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  'https://png.pngtree.com/png-vector/20240531/ourmid/pngtree-bird-of-prey-with-a-yellow-beak-png-image_12588694.png',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://unpkg.com/@phosphor-icons/web'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
