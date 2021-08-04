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
    "revision": "79c84a692b81d5fa3527e73a7eb907e0"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "4eb0bf2ed474c992167bdccd72b2e829"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "3bc32a4ca21b76308e273c1ec9ea3e1b"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "51f28c01650a35c056e45a46106f31a2"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "1661a6d33baee251fce8843d95ece58a"
  },
  {
    "url": "02_java/index.html",
    "revision": "6353a1c10df87728ebebc7b9f6bd3a82"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "0e58ff2dd52414f0fbc64df4d3abb64b"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "caabee64c86ee117e6f2a9a8a958cc19"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "a91d39cf454a7e4f730f6e3ed7b55634"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "58c3e2b1dfed2334823ef14685b1642c"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "e2b11e6c4ce94f8ef63268cb6fda841b"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "b0c9b7d83fd251d18d7856be05ed31ad"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "8e77711114feca1e0bbfa8861bf23e48"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "2bba35da3cba1557718368b73b8c975a"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "a2e2d9756305b427851cd19bfbd5297f"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "033e014848bac106be35d474aafbbbca"
  },
  {
    "url": "404.html",
    "revision": "4ed4015ec22392c7c43294dd825cf103"
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
    "url": "assets/js/13.194a1dcf.js",
    "revision": "f02c3e883f0e8f055875b0eff5d659a6"
  },
  {
    "url": "assets/js/14.83526831.js",
    "revision": "4fce1260cfb042f3c598ba3ddf71fbf8"
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
    "url": "assets/js/app.88131a52.js",
    "revision": "e1aff84e9ac6019e9515dd485a45a781"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "40117b46ee2fa8f4718ab363f71138ec"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "a0b48f1a1695668f1625ae50bf993d18"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "4f434b47d6cbc215a4f4a4c26e4260f0"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "3ae3fc1a18e4ae3ccb90e7ee3097c640"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "42331cf5abf7ba6b86f25556db10f98a"
  },
  {
    "url": "home.html",
    "revision": "8d9df8c8b8343040f128a23d5009bd23"
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
    "revision": "5c87bc29767aa1ddb399e10a5747dea5"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "68dcd4b010712927dc22ac6d44ea7f7a"
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
