/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01_paradigmas/01_introducao.html",
    "revision": "051a7e42d84ab0c3afac776f808ad36e"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "997b83311b5eb2726fda3b4af04d4a7c"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "0e96489d5d8ba3853d4320b9d9b4ffb9"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "63424cdd0c746ccb89c78baefee361dc"
  },
  {
    "url": "02_java/index.html",
    "revision": "c225645218f2b0783f6525e7b26611cb"
  },
  {
    "url": "404.html",
    "revision": "3cd1b74ef27a92bffc666537ce88eb18"
  },
  {
    "url": "assets/css/0.styles.0105b20d.css",
    "revision": "f8a8e8e2e6ec860fb5ad1a81a243ed6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb04149e.js",
    "revision": "cb2905725bfcc3de9514ccfa99022349"
  },
  {
    "url": "assets/js/11.4b81de4d.js",
    "revision": "d69eedc4edbf348e663202ff094cc696"
  },
  {
    "url": "assets/js/12.9f070988.js",
    "revision": "200b8ba5bcde155e961df4fdb8b8f513"
  },
  {
    "url": "assets/js/13.c789313c.js",
    "revision": "71469533648ba1327eddebccd8e9d761"
  },
  {
    "url": "assets/js/14.3581f008.js",
    "revision": "18f099e4feee0cfe9e80c00a8c568cda"
  },
  {
    "url": "assets/js/15.22aec8bb.js",
    "revision": "5b4635013013ada9803265c7d691c795"
  },
  {
    "url": "assets/js/16.da98232e.js",
    "revision": "d8cfa60a3cc980f0e5c1385ac57858b6"
  },
  {
    "url": "assets/js/17.c1dc7228.js",
    "revision": "d696fad63ba01bb1f7af52d3c3585b04"
  },
  {
    "url": "assets/js/2.42578c1c.js",
    "revision": "ffd1b4a378c20b0a5711f29dde728c66"
  },
  {
    "url": "assets/js/3.e0590093.js",
    "revision": "a1494ad7cd6a2121b6d073c7b3c4611d"
  },
  {
    "url": "assets/js/4.74c5d91a.js",
    "revision": "03254874bce94e47094b4df2177ebb9d"
  },
  {
    "url": "assets/js/5.da33bc20.js",
    "revision": "50e8b5b2b3d76744ab945a5c9d650565"
  },
  {
    "url": "assets/js/6.9a284c71.js",
    "revision": "a8c426387bd38659abb351d96ae4e082"
  },
  {
    "url": "assets/js/7.759f25a6.js",
    "revision": "d6b99783abaf9fb5f1e3dd2476b5219b"
  },
  {
    "url": "assets/js/8.57d62207.js",
    "revision": "e07c16156cbd284fd5bf8f32dd45d8dd"
  },
  {
    "url": "assets/js/9.17da1784.js",
    "revision": "d6dc812de2614e0d9f65ea7a849f68c7"
  },
  {
    "url": "assets/js/app.2960fc2d.js",
    "revision": "fdadf479b331fcc4c138cf42d9b24403"
  },
  {
    "url": "icon-192x192.png",
    "revision": "5ece80f031902e56942acad6fb63133d"
  },
  {
    "url": "icon-256x256.png",
    "revision": "43304b267b884bcbc582bc60bb3e16c8"
  },
  {
    "url": "icon-384x384.png",
    "revision": "67a9c81ecdf0ba691d4e38fffa903a11"
  },
  {
    "url": "icon-512x512.png",
    "revision": "efbd3ec066773aeba25d9a5248e9217e"
  },
  {
    "url": "index.html",
    "revision": "461472ed4f97c8025f6d107aaf0ef261"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
