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
    "revision": "e96acd03b5cf6fcc83dc11eaa61cce3f"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "d3a95823e16c2930836fbde0f8f89265"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "e76ffe448774d8d1edacd19b54b5125e"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "63032017a9718ff6a0301846ce942284"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3fc50ab7245f6385e35f26c15288d683"
  },
  {
    "url": "02_java/index.html",
    "revision": "f7c6f774835fd29e98dbf18766b5033b"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "39b5513c65a825a608b56f6c2af67074"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "3bfc12d992d9e13e54c4bcede00869da"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "97db1f93e876d88a02b3c849736d556a"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "794fc0b3d234d43ea646e5bbfa41ae98"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "28efa5a079c899e6a89f8aa04d2987f2"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "21c652058e3d307047ef0a101419c5b5"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "6b3c92bd915e1bbe5fb0df3fa300865a"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "ef014c86cb80ccba0dd27614f62ee8fd"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "fe2c4c01058625284b1f2a2f807b3f3f"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "89a055da2024b0cd2aaf37169826f031"
  },
  {
    "url": "404.html",
    "revision": "c437b08dcd409abeb4c973e1ea69550f"
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
    "url": "assets/js/24.a9f9b677.js",
    "revision": "214d5c07477baa8274aeb67b602804bf"
  },
  {
    "url": "assets/js/25.e014809c.js",
    "revision": "9425d7059f664ccd0b5dbc2e3ad8c5e7"
  },
  {
    "url": "assets/js/26.00c64e15.js",
    "revision": "7175ce3d1347ccdfdc49b9171413301b"
  },
  {
    "url": "assets/js/27.ddf5ec91.js",
    "revision": "8e96522b0d4c3b3979b14049c4044cf2"
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
    "url": "assets/js/31.dba220e7.js",
    "revision": "3aa2afb902ac0081d88ab7bbda998d72"
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
    "url": "assets/js/app.62123499.js",
    "revision": "064a6bf92b44a5f0a90598660d6485da"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "80209a0f16891a4a487c166b822c0abc"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "fb817f0e11227a0661c2ea68513712bf"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "fdaf4df018c4e23be7f9c40911d6a437"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "2176b5c3d4eae7cfb0e5c46b6c6d5d18"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "bbc503f27af66ab15e0e8d69bc87dba6"
  },
  {
    "url": "home.html",
    "revision": "a73ea9dcdf5e2b4a9e880c89e1da8c8e"
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
    "revision": "28752ff762bb52f37865e5b5c06ed86e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "f50ebe781c5f783d2d680f2910a3cc70"
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
