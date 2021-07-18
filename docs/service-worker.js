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
    "revision": "432cd34a9327f0c004baf41f22f293ec"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "4e9f363e0f8fabf50eebda2d0f9e944e"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "7d5142073b3b1ab17e7692a7bec846e2"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "0b273bd99884c2633ce7ecd146b92e62"
  },
  {
    "url": "02_java/index.html",
    "revision": "f9b258de92de55f84ee7b2d24e8fd6ae"
  },
  {
    "url": "404.html",
    "revision": "5ba224f117876186dfac65abc5e22a63"
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
    "url": "assets/js/11.315f08c4.js",
    "revision": "684a7a49253173c602279ca2de5c3d30"
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
    "url": "assets/js/15.8b1cb5ae.js",
    "revision": "7ec9f6f2a0cd4ca54c48a09afa255125"
  },
  {
    "url": "assets/js/16.8dd19acf.js",
    "revision": "c4bfa03ee9ecc4e313b3e42a7c3d7990"
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
    "url": "assets/js/app.2051be17.js",
    "revision": "a3624675adee0c1f46e69cf5b2892d46"
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
    "revision": "ed57723614b44b8e7b904b14367ac324"
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
