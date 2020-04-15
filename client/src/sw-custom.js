if ('function' === typeof importScripts) {

  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

  if (workbox) {
    console.log('Workbox is loaded');
    workbox.setConfig({ debug: true });

    self.addEventListener('install', () => {
      self.skipWaiting();
    });

    workbox.precaching.precacheAndRoute([]);

    const GOOGLE_FONTS_STYLESHEET = /^https:\/\/fonts\.googleapis\.com/;
    const GOOGLE_FONTS_STYLESHEET_CACHE = 'google-fonts-stylesheets';

    const GOOGLE_FONT_FILES = /^https:\/\/fonts\.gstatic\.com/;
    const GOOGLE_FONT_FILES_CACHE = 'google-fonts-webfonts';

    const MARVEL_SERIES = /\/api\/marvel\/series\/(.*)/;
    const MARVEL_SERIES_CACHE = 'marvel-series';

    const MARVEL_IMAGES = /https\:\/\/i.annihil.us(.*)\.(?:png|gif|jpg|jpeg|svg)$/;
    const MARVEL_IMAGES_CACHE = 'marvel-images';

    const SECOND = 1;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const YEAR = 365 * DAY;

    workbox.routing.registerRoute(
      GOOGLE_FONTS_STYLESHEET,
      workbox.strategies.staleWhileRevalidate({
        cacheName: GOOGLE_FONTS_STYLESHEET_CACHE,
      })
    );

    workbox.routing.registerRoute(
      GOOGLE_FONT_FILES,
      workbox.strategies.cacheFirst({
        cacheName: GOOGLE_FONT_FILES_CACHE,
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.Plugin({
            maxAgeSeconds: YEAR,
            maxEntries: 30,
          }),
        ],
      })
    );

    workbox.routing.registerRoute(
      MARVEL_SERIES,
      workbox.strategies.cacheFirst({
        cacheName: MARVEL_SERIES_CACHE,
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 5,
            maxAgeSeconds: HOUR
          })
        ]
      })
    )

    workbox.routing.registerRoute(
      MARVEL_IMAGES,
      workbox.strategies.cacheFirst({
        cacheName: MARVEL_IMAGES_CACHE,
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50,
            maxAgeSeconds: HOUR
          })
        ]
      })
    )

  } else {
    console.error('Workbox could not be loaded. No offline support');
  }
}
