var cacheName = 'warrantyuptodate-pwa';
var filesToCache = [
    '/warrantydategen/',
    '/warrantydategen/index.html',
    '/warrantydategen/assets/css/vendor.css',
    '/warrantydategen/assets/css/style.css',
    '/warrantydategen/js/vendor.js',
    '/warrantydategen/js/all.js',
    '/warrantydategen/js/templates.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});