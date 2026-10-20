const CACHE = 'metzquest-74c0d68e82';
const FILES = ["./","./assets/index-qo5bQKJh.js","./assets/MapScreen-9wIPxCk_.js","./assets/World-C2yu8fpK.js","./assets/cityMap-D-NnLaSb.js","./assets/rolldown-runtime-XKyaHtl9.js","./assets/three-DY7HL8bn.js","./assets/caveat-latin-500-normal-B9SDL8cy.woff2","./assets/caveat-latin-600-normal-zlTlWIYU.woff2","./assets/cormorant-garamond-latin-500-italic-Y14P-dkT.woff2","./assets/cormorant-garamond-latin-500-normal-BsRWmXhO.woff2","./assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2","./assets/index-BNAmodGy.css","./characters/camille-portrait.webp","./characters/camille.webp","./characters/ines-portrait.webp","./characters/ines.webp","./characters/leo-portrait.webp","./characters/leo.webp","./characters/lina-portrait.webp","./characters/lina.webp","./characters/odile-portrait.webp","./characters/odile.webp","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./manifest.webmanifest"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true, ignoreVary: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match('./')))
  );
});
