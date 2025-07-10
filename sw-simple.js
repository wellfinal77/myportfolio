// Service Worker simplificado para teste
console.log('Service Worker carregado');

self.addEventListener('install', event => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  console.log('Fetch:', event.request.url);
}); 