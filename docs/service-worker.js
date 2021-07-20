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
    "revision": "28dc790c2a27c34c311b0d6f63de9846"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "e85466072561ee1f1e03ba4cb385f2bf"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "c467ff988b1b07b431806d3ffb34bc60"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "d26dbb946251cca046691e37fdc7d094"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "526a27a952cd3855c47f105ec068c743"
  },
  {
    "url": "02_java/index.html",
    "revision": "aed825b94c08e5ebdadb2b8dfd3d68fa"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "57ca2e2d8b1b64feb52c425789e2c88b"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "0da95f5a79412589e000c0e9316c821a"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "576fef0816c8ef47ed7fb637b65346ca"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "bfa665e78d0ed6b265bf20ea0b54b2a5"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "d8ded183b1a8274924235b7502ca0b19"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "ec195e55c2a7f413e229b821fd40c7fd"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "a667d146e16fb3348493049e07463d5f"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "91fa65a3dfadf969ee3e5546885df36b"
  },
  {
    "url": "404.html",
    "revision": "4d24f88574c863606ea6ef3b38efc2da"
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
    "url": "assets/js/12.420385a4.js",
    "revision": "98eeed3ca705c53e55302a2333a6cba6"
  },
  {
    "url": "assets/js/13.03ac556b.js",
    "revision": "7951237895c4e60eeb0abc1fd54ea893"
  },
  {
    "url": "assets/js/14.beba5f01.js",
    "revision": "f6540a477bdd41dc90bf9cc46c96cec8"
  },
  {
    "url": "assets/js/15.69ddde05.js",
    "revision": "e97ae0c246066384afbc2e16c4f61a76"
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
    "url": "assets/js/21.86d1b194.js",
    "revision": "5398db116835aab78c0f9b78baf33253"
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
    "url": "assets/js/app.b613d567.js",
    "revision": "e50540713eb337b5f487721f694bd2c6"
  },
  {
    "url": "home.html",
    "revision": "3b711c95e03628893cf1d042523d33b4"
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
    "revision": "b07ea268b1b4a94e037112837ef003f6"
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
