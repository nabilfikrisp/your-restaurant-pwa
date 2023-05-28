import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

// https://www.dicoding.com/academies/219/discussions/255835
registerRoute(
  // eslint-disable-next-line prefer-regex-literals
  new RegExp('^https://restaurant-api.dicoding.dev'),
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});
