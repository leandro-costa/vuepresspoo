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
    "revision": "86d48beb6cc3fe4e1f5deee17b30750a"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "c1fd545fb2fc4f1a3b819e486c504528"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "5ac8166ec5ac616ec63fcc758b1ad680"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "c6112ec5ddce8e5380a567db9d8d6485"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "bd090bf136501f4fed97618e4358f464"
  },
  {
    "url": "02_java/index.html",
    "revision": "b045548bf80c2911628f405a90df4e76"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "d1f30de271487d5cce8b422464361d57"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "44ac4b2bd9df4fa47e22004409f8ef70"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "29766cb704401b790194557ecd415a65"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "243cbf7c9f038d7db291252e68d55d38"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "e8765e74d74fbee0f8252bc45ccdbf2d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "aa0f45188e8f360d44318b3a63bc2983"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "4c4950e020fcf34b0317222a0a23452b"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "aa2bcbf154126b2ea9f46c623e5c5357"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "58319e44d6664cfee1202f7b4694cf4c"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "a5203254a85c57e1c2a43cc91e020caf"
  },
  {
    "url": "404.html",
    "revision": "1292cf6f8fc1be6ad906e46e8594794e"
  },
  {
    "url": "assets/css/0.styles.59d573e8.css",
    "revision": "81a3b993a7084dba44a9dffa850198b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7b4ca033.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.508eae32.js",
    "revision": "3ff1a815b4d8aa63490a08239a0af083"
  },
  {
    "url": "assets/js/12.a50a46a9.js",
    "revision": "37f2d7f9841097510db93dee1496f8dc"
  },
  {
    "url": "assets/js/13.fd3965e1.js",
    "revision": "aeb6643fc3d1f84c180a81d9cf386479"
  },
  {
    "url": "assets/js/14.f6acb414.js",
    "revision": "573eb72cb337299157b904337971ffb0"
  },
  {
    "url": "assets/js/15.a6b3b415.js",
    "revision": "fba6bce4c6256fd773eae003cc6a13ab"
  },
  {
    "url": "assets/js/16.9c2a40db.js",
    "revision": "94eae18ed1e133898eaf3e5a0b926fd0"
  },
  {
    "url": "assets/js/17.b7add5b3.js",
    "revision": "532247c9dbdc70040e7ed4e5e0b9070e"
  },
  {
    "url": "assets/js/18.b2ba15dd.js",
    "revision": "255efc6ce415ed1f201f88a45203f554"
  },
  {
    "url": "assets/js/19.908a659a.js",
    "revision": "640f697c4f64850a0402843ced206599"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.0cb43454.js",
    "revision": "219cc5a96f47321d3135d77cdf7dc247"
  },
  {
    "url": "assets/js/21.856ff6d3.js",
    "revision": "5398db116835aab78c0f9b78baf33253"
  },
  {
    "url": "assets/js/22.6761d774.js",
    "revision": "e3f9055a87457141940b4d90aee7d380"
  },
  {
    "url": "assets/js/23.2d801b10.js",
    "revision": "2c7d82bd327c4dfa6f7a0e0e94ef9a07"
  },
  {
    "url": "assets/js/24.fc24f47a.js",
    "revision": "654e55548d0f758c5d651d6b973ab3e4"
  },
  {
    "url": "assets/js/25.74497802.js",
    "revision": "7eb1f40ca1cf4eac01da9c547ffc4c65"
  },
  {
    "url": "assets/js/26.00c64e15.js",
    "revision": "7175ce3d1347ccdfdc49b9171413301b"
  },
  {
    "url": "assets/js/27.d236aa3c.js",
    "revision": "2e35766db8aa66542c56ffaf3b56dcf2"
  },
  {
    "url": "assets/js/28.ee249a68.js",
    "revision": "38c95c098925b44512f4ce3775a169af"
  },
  {
    "url": "assets/js/29.253f97d5.js",
    "revision": "c7bbbab68ede3d542ccaff8ed1b38ff3"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.6cb8a413.js",
    "revision": "0959a251d398d60db068ebe0aa433fd2"
  },
  {
    "url": "assets/js/31.82c9670b.js",
    "revision": "f12a70cd19ce824fed26c456e4e571e2"
  },
  {
    "url": "assets/js/32.d4b496cb.js",
    "revision": "7d571306e687585d3cd4f309ee552f1b"
  },
  {
    "url": "assets/js/33.e07d0194.js",
    "revision": "f45f438e1e867c333b8059b060d1a7d2"
  },
  {
    "url": "assets/js/34.dd395955.js",
    "revision": "10fe4260818258db615a7806138d2a25"
  },
  {
    "url": "assets/js/35.6eb48dac.js",
    "revision": "b82f86d71353095a14036157c77458b6"
  },
  {
    "url": "assets/js/4.c6574830.js",
    "revision": "9701cec663c33466d22768f174875d34"
  },
  {
    "url": "assets/js/5.dad11dfe.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.1ecd167c.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.38b68977.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.830e6465.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.dc2fe418.js",
    "revision": "02a6174a0894224f31005eac16164c95"
  },
  {
    "url": "assets/js/app.4046c949.js",
    "revision": "c1fe107aedbf685b4ebc8d563d65021f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "451644997bd7d1fc4904b8ca8fb57cbc"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "149aa855c4d9b2cfbe717aa8acab5f2a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "2ace3b93d3770a1a991f8aac371c13f9"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "f1e540dc25b1cb101a33721aea9a3ad6"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "37a2134706e5e8b7c21b661061c83ebb"
  },
  {
    "url": "home.html",
    "revision": "4a4e2d9f41b6b38f5eca31557f71e445"
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
    "revision": "c1857993299e0150dd72f10475ac339a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "fc5e7c0b0784ad8e5c8a7cf57a025181"
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
