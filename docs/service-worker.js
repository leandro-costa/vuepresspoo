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
    "revision": "3afd130ecc5ef6821298f5763d5e8628"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "e603365b310df2669bb1465cee2508bf"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "583b1fa19ec46656db6afc5e2fe8c00b"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "19295b140ba2485b523df13c057e3be3"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "074425b2d2cad37ac114766bb62d84f5"
  },
  {
    "url": "02_java/index.html",
    "revision": "ba6db4ad99d0578847277a57f962fb9d"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "6fb1fd2221fdb83ce2d543707c087a3e"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "e88964f19d88707beb138a849e59c2cf"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "1a1b173ab17b067876560f0fc7e3cc6b"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "2e50eca44ae883dd4f25cde5733360f5"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "4e3ab05cf0f52147215de647e25a86d9"
  },
  {
    "url": "404.html",
    "revision": "b2fd3f97776e931f973739d21c82ac8b"
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
    "url": "assets/js/13.66e3e134.js",
    "revision": "09ace47b5ae53271165938cac7ddff5a"
  },
  {
    "url": "assets/js/14.a3a51423.js",
    "revision": "d4c3b23f64937c34e57758511da8e478"
  },
  {
    "url": "assets/js/15.1f4adfa7.js",
    "revision": "7253022b09b9b1073eaf686d31ba3b67"
  },
  {
    "url": "assets/js/16.3dba3839.js",
    "revision": "e6db9b7d8b245dc9bec542af7b7a4d89"
  },
  {
    "url": "assets/js/17.7bbe660b.js",
    "revision": "251ede8c647de44f27191d8f15f1b0b5"
  },
  {
    "url": "assets/js/18.d9b22504.js",
    "revision": "e1d4cd531b93fc0254235641c0520b09"
  },
  {
    "url": "assets/js/19.56582f62.js",
    "revision": "3039be1b3d81f693ffe1841fffe7489e"
  },
  {
    "url": "assets/js/2.ed71a6aa.js",
    "revision": "498733eab51c926380cae90b265d3e47"
  },
  {
    "url": "assets/js/20.4b7b3482.js",
    "revision": "57bfbe4c7d21eecc95dcf081ea278b21"
  },
  {
    "url": "assets/js/21.498ca7f9.js",
    "revision": "a758936dc3a3e65a4bd9a069c13fe7b2"
  },
  {
    "url": "assets/js/22.5b15612f.js",
    "revision": "a9ebf92fff0a18a41d078f6f7f3a8f44"
  },
  {
    "url": "assets/js/23.48e11c4b.js",
    "revision": "2df1a3b37d871b90d71d480ae2ceb7e8"
  },
  {
    "url": "assets/js/24.27d40a6c.js",
    "revision": "5bf68735c97facc4859ea17642044d20"
  },
  {
    "url": "assets/js/3.ba6e1bf2.js",
    "revision": "961dd528cf8ba99c9d4c1bc139426f49"
  },
  {
    "url": "assets/js/4.5f7fa931.js",
    "revision": "1b47fcadc90c5c80b0b40eadb65d62ad"
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
    "url": "assets/js/9.ea4e2f7f.js",
    "revision": "3114c2533a7cbea286309fa956995971"
  },
  {
    "url": "assets/js/app.afd58e91.js",
    "revision": "cfa567a9c7dd8f124c01214508291abd"
  },
  {
    "url": "home.html",
    "revision": "8a3245286e33a504ae5a85210dbefa5f"
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
    "revision": "27cfdda021cf4dd805705eb0fdff88cf"
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
