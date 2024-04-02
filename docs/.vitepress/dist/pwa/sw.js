const CACHE_PREFIX = 'V8'; 
const CACHE_NAME = `${CACHE_PREFIX}-offline`;

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.add(new Request('/offf.html'));
    })());
    console.log(`${CACHE_PREFIX} Install`);
});

self.addEventListener("activate", () => {
    clients.claim();
    console.log(`${CACHE_PREFIX} Active`);
});

self.addEventListener("fetch", (event) => {
    console.log(`${CACHE_PREFIX} Fetching: ${event.request.url}, Mode: ${event.request.mode}`);
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }
                    return await fetch(event.request);
                } catch (e) {
                    const cache = await caches.open(CACHE_NAME);
                    return await cache.match('/offf.html');
                }
            })()
        );
    }
});
