import 'regenerator-runtime';

import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
 event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
 console.log(event.request, 'jaran');
 event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
 console.log(event.request);

 event.respondWith(CacheHelper.revalidateCache(event.request));
});
