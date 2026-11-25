
const CACHE_NAME = "ict-exam-hub-v1";

const CORE_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./grades.html",
    "./grade.js",
    "./papers.html",
    "./papers.js",
    "./paper-list.html",
    "./paper-list.js",
    "./notes/grade-6.html",
    "./notes/grade-7.html",
    "./notes/grade-8.html",
    "./notes/grade-9.html",
    "./notes/grade-10.html",
    "./notes/grade-11.html",
    "./notes/lesson.html",
    "./notes/lesson.js"
];

// Install
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CORE_FILES))
    );

    self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );

    self.clients.claim();
});

// Fetch
self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    const requestURL = new URL(event.request.url);

    if (requestURL.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then(cachedFile => {

            if (cachedFile) {
                return cachedFile;
            }

            return fetch(event.request)
                .then(response => {

                    if (response.ok) {
                        const copy = response.clone();

                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, copy);
                        });
                    }

                    return response;
                })
                .catch(() => {
                    if (event.request.mode === "navigate") {
                        return caches.match("./index.html");
                    }
                });

        })
    );
});
