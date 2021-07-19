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
    "revision": "bb123dc0b3bf25f808fad8bc75e81776"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "919ff2d8c8ec666ce786fa7342b0f5b3"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "63f4fb25442573bc14430790a27a244e"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "03253d1121053d47d7580b212cbdba09"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "7f9475a209d6636aa1f641b7e1e96294"
  },
  {
    "url": "02_java/index.html",
    "revision": "1c221177eaeb3a432de7d5920816cc53"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "9a6935cf6ab145f7aeb96fb3942c47d8"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "3d88df09eb7116fcbd44436ae2d49448"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "c5f0e6dae668ff74f4eecdd2afd0f27e"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "069ec5ecb455fea760cf5e0e06c8fd5c"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "9039e54bba477891cd9726b37f4035e0"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "8cb957fcba967c2f36450c9a1a6db26f"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "517b2079af801e17ed7dd27e03348e44"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "0bd3ae741d797d43ad90da9c63ed0016"
  },
  {
    "url": "404.html",
    "revision": "6de31ea8d1c32c752282fd2700a0df34"
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
    "url": "assets/js/19.a46dcb1a.js",
    "revision": "82c3722b774e2e9a39a0169fb8a3fc72"
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
    "url": "assets/js/21.90b29812.js",
    "revision": "a7ef9dc964e7ca1b464982667f1aff30"
  },
  {
    "url": "assets/js/22.4a1fe9cd.js",
    "revision": "fd10a48cef83bff36bc7380bddfaa663"
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
    "url": "assets/js/26.ac5926c4.js",
    "revision": "6c45733b5d7c57118ed0de711d24628f"
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
    "url": "assets/js/app.d07cfd0c.js",
    "revision": "58d7eb92e136db9dc4899379295d9891"
  },
  {
    "url": "home.html",
    "revision": "f538612ef30353cce5642adec5953865"
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
    "revision": "c24d5c75cb1106884bde05caa5f3e11e"
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
