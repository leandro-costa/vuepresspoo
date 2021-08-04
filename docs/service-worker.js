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
    "revision": "0220a7fbcf0573bc282eb11e698e9b40"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "3c32a67e3ba079d4db7d016d8e2b4de2"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "715eadb93e035fdafb430e93dce193f5"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "f0136d86c21cb2c3d281686a8ea8b3d8"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "e2d82b9be8b40af4ae7eca3779d763f9"
  },
  {
    "url": "02_java/index.html",
    "revision": "a70261c9882355a4999b7f5ea3741412"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "e9191fde8da445f5c9ea1b9c907fe536"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "757ddcf364a7e001a788430477b8552e"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "ffa92f9eda28ba210426d43ac9b54737"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "50ac5cbf58def36b86701fae913992d2"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "761bdb1af78d4bceb3c3972aea624a58"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "9be9781137628524bc91f678c88d0a3c"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "3d6b282c77036c9777f34b616525e194"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "c5a40d14e59d20b2bfad92fd06ca0fde"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "f2aa04c286c8588135a2681e01a8ea14"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "ac671aade2398ab27237e8bad60d664e"
  },
  {
    "url": "404.html",
    "revision": "afbd5990c413d15a1de0044729e4a85a"
  },
  {
    "url": "assets/css/0.styles.e9d0f2cc.css",
    "revision": "87dec4ceb6199dfb7ee5e5b05f629edc"
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
    "url": "assets/js/25.d3a02b61.js",
    "revision": "b12fba7ffa7c51641548ebeeaefe4702"
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
    "url": "assets/js/31.3b75b733.js",
    "revision": "63ecd04638f5bb853ca5f22d6e4fa61a"
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
    "url": "assets/js/4.c81af1e3.js",
    "revision": "c1c4b61783cbd3b1e53d9b74183cc383"
  },
  {
    "url": "assets/js/5.eca4704c.js",
    "revision": "a5a8c1c98f776ab36df1e5150d6c4061"
  },
  {
    "url": "assets/js/6.6f01aedf.js",
    "revision": "4a321a6286073cefad4cdcd17e3847fa"
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
    "url": "assets/js/app.f966f902.js",
    "revision": "c0f944e8a11b6a0f487a5140bcdcf2cb"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "8073a9ad3e2f313215a1f5ecc9849414"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "c9423d9a89e753669ab08b3389e6a060"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "d04f47f3294da4bb215a189b5fc174bd"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "df97bd8054d070afb6888edd38977041"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "ec8c2804892656171ef4b279376506aa"
  },
  {
    "url": "home.html",
    "revision": "2d8417ffb1b5805bb87dd7ae237d2610"
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
    "revision": "23c294a558c740e61f8690563edf4b26"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "3fa5e65bc3b99eb2148779d1b05e7b27"
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
