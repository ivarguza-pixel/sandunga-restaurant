const CACHE_NAME = 'sandunga-cache-v2';
const ASSETS = [
  '/sandunga-restaurant/',
  '/sandunga-restaurant/index.html',
  '/sandunga-restaurant/menu.html',
  '/sandunga-restaurant/about.html',
  '/sandunga-restaurant/contact.html',
  '/sandunga-restaurant/assets/css/estilos.css',
  '/sandunga-restaurant/assets/js/script.js',
  '/sandunga-restaurant/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          if (e.request.url.startsWith('http')) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        });
      });
    }).catch(() => {
      if (e.request.mode === 'navigate') {
        return caches.match('/sandunga-restaurant/index.html');
      }
    })
  );
});
