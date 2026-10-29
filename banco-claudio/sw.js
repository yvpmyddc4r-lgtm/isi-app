// Serve solo perché Android la consideri un'app installabile: non salva niente.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
