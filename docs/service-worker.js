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
    "revision": "e6652e3f6085e3e1061bfcf1ae2bceb6"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "a0cd761aafcc94dd5be5f3f555b9015d"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "1dc064c5b019319eb3818a55b3b8e22a"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "8a40c5e0b035e0fba9756999cb861082"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "1f6ebc814fd7afde6f37e334a8f18f04"
  },
  {
    "url": "02_java/index.html",
    "revision": "0dd9948fe38eed1da6e03f44a19964a8"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "e16ba976807423aeb372e77b8a4d2278"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "bcce2faffa2e0072cb21ce2cf0e69262"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "987ff35d82802cf6ae0117171636d6d2"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "b1999edaa4b106b5be5c56e60501aa16"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "617296369953f172b91919412bff3057"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "248b975f3934461948d308d4ee94364e"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "1c1004b0d2312fbfad09cc4da5ffaee0"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "767cf64edce6ac0a6f2faaa862f03d12"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "01429703164f6906add7f62cc268729e"
  },
  {
    "url": "404.html",
    "revision": "5f49d3ac9571633ca3980bfe6b044561"
  },
  {
    "url": "assets/css/0.styles.83b067b6.css",
    "revision": "2d3468f60fbe7bcc2755bdab32fc7030"
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
    "url": "assets/js/15.e5a736ef.js",
    "revision": "8d897424831de7188565a2248fb4676a"
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
    "url": "assets/js/24.d1d19e5b.js",
    "revision": "68133f60fbf1c1e302db68e24939685a"
  },
  {
    "url": "assets/js/25.02340e36.js",
    "revision": "d407552588ef242f0ef37c11d7854db1"
  },
  {
    "url": "assets/js/26.32340d2b.js",
    "revision": "6023764f722d951c367cea12427daefa"
  },
  {
    "url": "assets/js/27.c0846526.js",
    "revision": "658e41a68767b14b9863b031d5c9404b"
  },
  {
    "url": "assets/js/28.43f7cfdb.js",
    "revision": "91be31b9abc8e3d8af234bb6b90e644a"
  },
  {
    "url": "assets/js/29.c3ae10b4.js",
    "revision": "695f0f68914d1a5e428a3a4ed1b83a62"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.97fbe56c.js",
    "revision": "4900343ebd96b8021aee66878b9b140b"
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
    "url": "assets/js/9.15b993f6.js",
    "revision": "9fd0c73a2d43b14639da7ea5eb85f402"
  },
  {
    "url": "assets/js/app.3c5ba220.js",
    "revision": "e97ba5ddb95fbdf388319cf18b8d3c52"
  },
  {
    "url": "home.html",
    "revision": "86684bde3c01bd9591c97479e2797855"
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
    "revision": "657fb8fedc7a62a05290260349083079"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "b9da0aa7a76cebac81055affcdcda478"
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
