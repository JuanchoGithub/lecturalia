
const CACHE_NAME = 'lectura-app-v1';
// List of files that make up the app shell - updated to match .tsx/.ts project structure
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/lib/gemini.ts',
  '/components/StorySelection.tsx',
  '/components/ReadingView.tsx',
  '/components/QuizView.tsx',
  '/components/ResultsView.tsx',
  '/components/PasswordModal.tsx',
  '/components/ParentDashboard.tsx',
  '/components/GradeSelection.tsx',
  '/components/SummaryView.tsx',
  '/components/ui/Card.tsx',
  '/components/ui/Button.tsx',
  '/components/ui/ProgressBar.tsx',
  '/data/stories/index.ts',
  '/data/definitions/index.ts',
  'https://cdn.tailwindcss.com'
];

// Install event: cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Opening cache and caching the app shell');
        const requests = urlsToCache.map(url => new Request(url, {cache: 'reload'}));
        return cache.addAll(requests);
      }).catch(error => {
        console.error('Service Worker: Failed to cache app shell.', error);
      })
  );
});

// Fetch event: serve from cache first, then network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          (response) => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(error => {
          console.error('Service Worker: Fetch failed.', error);
        });
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});