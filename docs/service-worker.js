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
    "revision": "e09dfe506b08a3337091c2a8e2c05c82"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "3a1667efa41ed7d958385e0b04d42d77"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "66be6241c40cbb38d2224a854a32f7e1"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "49cc7cc7c8fe79a8b0136d0293db9d43"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "059dfe73349350f5e9b8022d0ee4579c"
  },
  {
    "url": "02_java/index.html",
    "revision": "456567fd5e0ad8bdfed012a3decbd4fe"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "5331ed93040e563644b179ab3ae6d8a6"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "8491ec4fbd8d0367a18fe49fa7bbfb28"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "7cd48c058d32e6280cfe4486efc9530f"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "b499abdf95c0c4111d5ae5112b995329"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "f6f55e50e99d279a7a2654f4250c6632"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "ab1d0914bf089027337e0b5c79fdb4f6"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "9aa2a0bcf731538a318720721a792e02"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "72426427e8c61e95992d0b75997e53e5"
  },
  {
    "url": "404.html",
    "revision": "8c3c63aa5c0a2597a13e0c3db06e52af"
  },
  {
    "url": "assets/css/0.styles.b538a564.css",
    "revision": "d1b2c1d148e4bf9f1af78aeed3fdeac4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.daaad698.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.0d168330.js",
    "revision": "3ff1a815b4d8aa63490a08239a0af083"
  },
  {
    "url": "assets/js/12.c0c23d7b.js",
    "revision": "37f2d7f9841097510db93dee1496f8dc"
  },
  {
    "url": "assets/js/13.bf750345.js",
    "revision": "2279e41a3ad6d070c721efde019f9678"
  },
  {
    "url": "assets/js/14.40b842ca.js",
    "revision": "dd2dca5e308337e9b76559d36d407319"
  },
  {
    "url": "assets/js/15.49bc92a8.js",
    "revision": "118f3729cbc498386c3ed2632217feb6"
  },
  {
    "url": "assets/js/16.3045d62b.js",
    "revision": "26b46c86259f989eb468d43409b01c0e"
  },
  {
    "url": "assets/js/17.462ce7d2.js",
    "revision": "532247c9dbdc70040e7ed4e5e0b9070e"
  },
  {
    "url": "assets/js/18.ec0c328c.js",
    "revision": "255efc6ce415ed1f201f88a45203f554"
  },
  {
    "url": "assets/js/19.a19a1915.js",
    "revision": "4f39bea95bd7f733852ef656fab56621"
  },
  {
    "url": "assets/js/2.8424c883.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.1125be1d.js",
    "revision": "c260ab598de923e9051a1bd786cf39df"
  },
  {
    "url": "assets/js/21.86d1b194.js",
    "revision": "5398db116835aab78c0f9b78baf33253"
  },
  {
    "url": "assets/js/22.70d6a500.js",
    "revision": "2f07920dcde5904c203b3c9e583356c2"
  },
  {
    "url": "assets/js/23.884f5527.js",
    "revision": "63fc28caa844c060608de4166ef96140"
  },
  {
    "url": "assets/js/24.af69bb1a.js",
    "revision": "604e89dc94a6b2d57c0c2b3f27077938"
  },
  {
    "url": "assets/js/25.c2e4c2d9.js",
    "revision": "3cc3337de388c8cfbfe5e08cb28a4868"
  },
  {
    "url": "assets/js/26.d20c796e.js",
    "revision": "c8ff015287bc84ea6a834fe5119ef86a"
  },
  {
    "url": "assets/js/27.44caee2d.js",
    "revision": "b6433046633cf5c937d11e240a3fa1ad"
  },
  {
    "url": "assets/js/3.14c2f7fe.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.5cbedbfb.js",
    "revision": "c5655b2581671c93114a4faf9bae624b"
  },
  {
    "url": "assets/js/5.2d02247d.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.21ddd515.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.c0459fae.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.97a4833c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.54b05eb7.js",
    "revision": "58c3a34ed6878416da40b434602bcb1b"
  },
  {
    "url": "assets/js/app.8f66522b.js",
    "revision": "a96b270c75c89e3165ef7bbe6c1c8600"
  },
  {
    "url": "home.html",
    "revision": "e4f48bef0b0f5dbb3c604750f2359745"
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
    "revision": "b9cf7ac6a8cf9777e5cebd1b531d3b2d"
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
