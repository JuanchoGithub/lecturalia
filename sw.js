
const CACHE_NAME = 'lectura-app-v1';
// List of files that make up the app shell
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/index.js',
  '/App.js',
  '/types.js',
  '/components/StorySelection.js',
  '/components/ReadingView.js',
  '/components/QuizView.js',
  '/components/ResultsView.js',
  '/components/PasswordModal.js',
  '/components/ParentDashboard.js',
  '/components/ui/Card.js',
  '/components/ui/Button.js',
  '/components/ui/ProgressBar.js',
  '/data/stories/index.js',
  '/data/definitions/index.js',
  'https://cdn.tailwindcss.com'
];

// Install event: cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Opening cache and caching the app shell');
        // Use {cache: "reload"} to bypass browser's HTTP cache for these requests.
        const requests = urlsToCache.map(url => new Request(url, {cache: 'reload'}));
        return cache.addAll(requests);
      }).catch(error => {
        console.error('Service Worker: Failed to cache app shell.', error);
      })
  );
});

// Fetch event: serve from cache first, then network
self.addEventListener('fetch', (event) => {
  // We only want to handle GET requests for http/https protocols
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If response is in cache, return it
        if (response) {
          return response;
        }

        // If not, fetch from network
        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(error => {
          console.error('Service Worker: Fetch failed; returning offline page instead.', error);
          // Optional: return a fallback offline page if a resource can't be fetched and isn't in cache
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
