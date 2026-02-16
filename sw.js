const CACHE='fitgauge-v1';
const urls=['/','/index.html','/profile.html','/calculators/'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(urls))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
