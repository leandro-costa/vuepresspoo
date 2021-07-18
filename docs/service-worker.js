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
    "revision": "aba8312580e4fdb0d788251e9685d5b2"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "598e82afec651587b9b16349884e1311"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "a6d2f2fbaabdaa7daa6144656de307c2"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "2039f68a01ccd8e6b88a3a6bedad82d7"
  },
  {
    "url": "02_java/index.html",
    "revision": "6b7877e9ab8c7aeeaaf38862c8f1d343"
  },
  {
    "url": "404.html",
    "revision": "269493a611908b0d6fe17be95f05ba53"
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
    "url": "assets/js/11.b1aa3a2d.js",
    "revision": "9c0c4281fdedcc28a5a81f0897127566"
  },
  {
    "url": "assets/js/12.788fd601.js",
    "revision": "e9a5d96a85d2f3a93d336301b9152b84"
  },
  {
    "url": "assets/js/13.967557b5.js",
    "revision": "3a8529a1da586c13bb2043f0088de976"
  },
  {
    "url": "assets/js/14.a3a51423.js",
    "revision": "d4c3b23f64937c34e57758511da8e478"
  },
  {
    "url": "assets/js/15.8b02c434.js",
    "revision": "21c98a3f08977e105fa96f0a09cd3ab7"
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
    "url": "assets/js/app.aee0c1d9.js",
    "revision": "a539d02e16cd232d0a4a578b340c578e"
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
    "revision": "acb3cefa84bcea417a834902261b695f"
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
