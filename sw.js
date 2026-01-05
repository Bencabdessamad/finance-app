const CACHE_NAME = 'financehome-v1';
const urlsToCache = [
  '/finance-app.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://unpkg.com/dexie@3.2.4/dist/dexie.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache.map(url => {
          // Pour les URLs externes, on les met en cache mais on ne bloque pas l'installation si ça échoue
          return fetch(url).then(response => {
            if (response.ok) {
              return cache.put(url, response);
            }
          }).catch(err => {
            console.log('Erreur de mise en cache pour:', url);
          });
        }));
      })
  );
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Stratégie de cache: Network First, puis Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si on obtient une réponse valide, on la met en cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Si le réseau échoue, on cherche dans le cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Si pas de cache, on retourne une page d'erreur basique pour les pages HTML
            if (event.request.headers.get('accept').includes('text/html')) {
              return new Response(
                `<!DOCTYPE html>
                <html lang="fr">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Mode Hors Ligne</title>
                  <style>
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      min-height: 100vh;
                      margin: 0;
                      background: #0A0E27;
                      color: white;
                      text-align: center;
                      padding: 20px;
                    }
                    .offline-message {
                      max-width: 400px;
                    }
                    h1 {
                      font-size: 48px;
                      margin-bottom: 20px;
                    }
                    p {
                      font-size: 18px;
                      color: #A0A4B8;
                    }
                  </style>
                </head>
                <body>
                  <div class="offline-message">
                    <h1>⚠</h1>
                    <h2>Mode Hors Ligne</h2>
                    <p>Cette page n'est pas disponible hors ligne. Veuillez vous reconnecter à Internet.</p>
                  </div>
                </body>
                </html>`,
                {
                  headers: { 'Content-Type': 'text/html' }
                }
              );
            }
          });
      })
  );
});

// Gestion des messages du client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});