self.addEventListener('install', (event) => {
 console.log('Install Service worker ...');
});

self.addEventListener('activate', (event) => {
 console.log(event.request);
});

self.addEventListener('fetch', (event) => {
 console.log(event.request);

 event.respondWith(fetch(event.request));
});
