self.addEventListener('install', event => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './project.html',
        './box.html',
        './progress.html',
       
        './1.jpg',
        './2.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
