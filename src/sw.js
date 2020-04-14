var cacheName = 'warrantyuptodate-pwa';
var filesToCache = [
    '/warrantyuptodate/',
    '/warrantyuptodate/index.html',
    '/warrantyuptodate/assets/css/vendor.css',
    '/warrantyuptodate/assets/css/style.css',
    '/warrantyuptodate/js/vendor.js',
    '/warrantyuptodate/js/all.js',
    '/warrantyuptodate/js/templates.js'
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