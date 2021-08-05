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
    "revision": "75d79849e87dd868ce321d4cc96b5c3e"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "971ddaf7e3a7767317794435bfc6f614"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "bc96eadde9a4ab9a8e3578bb797a2717"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "1f4dacea486db5619d11ac02ff2c3222"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "80082f12dced44cd88672e6b438a5fdd"
  },
  {
    "url": "02_java/index.html",
    "revision": "379e641095048489ebdd046934f9ab8c"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "c1c57140e6d1eb2359e1e7810753d0ff"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "f7f14ca4f148ffd848e59f446ed97db9"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "4906da13e12507308bc63c794b46cd6c"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "f00962d77b90ea22ceecab27c5052697"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "5508dd9bd68cb8ce7de777b9dc408d79"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "a09f106a68f3356d3fa3ee4ca0494955"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "7f8fabdb91cd07dae700fb1853ad95dd"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "ced9891775dc81a3b7225efdac8a0703"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "b2ade4498bc9d81998581026fbda9299"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "41ddbd89a47e69a32fc0fb3c737b910e"
  },
  {
    "url": "404.html",
    "revision": "19c4aebdf50175a824b33a9967f60f3f"
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
    "url": "assets/js/14.08e266d2.js",
    "revision": "57d8de6a37e0522ec980b1475b09c288"
  },
  {
    "url": "assets/js/15.5ca6e5f0.js",
    "revision": "e31a1b46912855938109350159d73679"
  },
  {
    "url": "assets/js/16.b82bbeda.js",
    "revision": "26b46c86259f989eb468d43409b01c0e"
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
    "url": "assets/js/28.bbed0f96.js",
    "revision": "9c4eb67ba8fec6e1733258d8c13dd524"
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
    "url": "assets/js/31.5773f73d.js",
    "revision": "bc9ca7be63161319fc938157683c85a7"
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
    "url": "assets/js/app.993d9e82.js",
    "revision": "b9acfa2b3e9013b9d31cd148e7e74ff1"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "320d48bc68b431f7546aa82188815e45"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "cebe09e17661aefec3cd8f54ef8a8b4e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "49c1c465b89531a4d19124e3f3e26e19"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "58064f5c93cdb07216fadfa3c425dc36"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "270e335ff20bcaea163ef1c0602d8102"
  },
  {
    "url": "home.html",
    "revision": "c06b4a0133e5a9b2586a19267371dc0f"
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
    "revision": "839777238b329474e4b1216229c39755"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "6f794db39ce09d4f31a91531c3eff52e"
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
