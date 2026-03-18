const CACHE_NAME = "sushilove-v1";
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(["/", "/manifest.json"]))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((n) => Promise.all(n.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", (e) => { if (e.request.mode === "navigate") { e.respondWith(fetch(e.request).catch(() => caches.match("/"))); return; } e.respondWith(caches.match(e.request).then((c) => c || fetch(e.request))); });
