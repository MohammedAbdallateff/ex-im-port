var cacheName = 'Oslo';
var filesToCache = [
  './',
  './index.html',
  '../assets/css/vendors/bootstrap.css',
  '../assets/css/vendors/bootstrap.rtl.css',
  '../assets/css/vendors/swiper-bundle.min.css',
  '../assets/css/vendors/wow-animate.css',
  '../assets/css/dark.css',
  '../assets/css/style.css',

  '../assets/js/bootstrap/bootstrap.bundle.min.js',
  '../assets/js/bootstrap/popper.min.js',
  '../assets/js/feather/feather.min.js',
  '../assets/js/swiper-slider/swiper-bundle.min.js',
  '../assets/js/swiper-slider/swiper-custom.min.js',
  '../assets/js/active-class.js',
  '../assets/js/demo-search3.js',
  '../assets/js/grid-style.js',
  '../assets/js/here-map-route.js',
  '../assets/js/imagesloaded.pkgd.min.js',
  '../assets/js/isotop.js',
  '../assets/js/masonry.pkgd.min.js',
  '../assets/js/material-photo-gallery.min.js',
  '../assets/js/otp.js',
  '../assets/js/password-showhide.js',
  '../assets/js/range-slider.js',
  '../assets/js/script.js',
  '../assets/js/sticky-header.js',
  '../assets/js/timer.js',
  '../assets/js/user-dashboard-tab.js',
  '../assets/js/wow.js',
  '../assets/js/wow-custom.js',
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {

      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
