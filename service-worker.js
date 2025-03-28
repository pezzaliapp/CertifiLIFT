// Service Worker per caching e offline
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('certifilift-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/style.css',
                '/icon/CertifiLIFT-192.png',
                '/icon/CertifiLIFT-512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
