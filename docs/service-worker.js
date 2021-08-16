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
    "revision": "792bfd4fbb2ab938825a48f6214a1af1"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "c8da6c795836b92fc3e055e76e7e5d10"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "85ba6284a7fd89d916e3ab48e529ec4f"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "557d04bc1efa042691f77f1f97334d3e"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "804348a8d0996e1b148577e13b64c8bc"
  },
  {
    "url": "02_java/index.html",
    "revision": "0d14429f586a8252b42a1286327b595c"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "c63e38605c7fc35631affcda2612dcda"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "d9ff7b526c22defaadd1db33eadc2e17"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "2e070fc29d629f3b068b48919dc9dbcd"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "0d376b06c95fdfcbe305f6bc625c6ddc"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "8cf80579f3085723a0bcf3f70a3268a4"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "a6c69f516b20a0e1299044aad6f878ae"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "eed407f2d7a032d89257a7c867dc6989"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "bef2e09eecb12175ba0163935451ab6d"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "a9c5bdf5e5a62b79db2b61f50bc7ff78"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "cad091dba3ad2fae4cbc5fffdc53ac3e"
  },
  {
    "url": "404.html",
    "revision": "e1b47360586c1583d413a5ba8d3dab67"
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
    "url": "assets/js/28.87468478.js",
    "revision": "5a33fec9b58c018de6247ea9e8f665ba"
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
    "url": "assets/js/app.dc23dc50.js",
    "revision": "15a23bf778e6b2ce9d00efc8eacd2eff"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "fd1a6de5459c9de03fc34a1bab00c813"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "e08f113ee1e25ed22555eb67835be3fa"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "7c12a6c50cbf468438597f3be467fd33"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "ff0e1bb20bbe549c8cfd3122abdf43b4"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "1597a0afb1e8f7de45cf4c7c7e8e5074"
  },
  {
    "url": "home.html",
    "revision": "b5e2f18420485c95b9fb7939714a3317"
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
    "revision": "9fb3aa008f2780626ab2d4cedbad4399"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "c5eba19ce990ff797f993709c3ea6a6e"
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
