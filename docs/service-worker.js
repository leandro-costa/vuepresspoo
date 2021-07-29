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
    "revision": "db64144b4874eaf85cc1c06ec61b8239"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "2bc2f6e4dacaee99c9e29e81149f9a80"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "43f6d918285146e58a415242174574c9"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "2488789a613ddb4bad08c54bdb835606"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "e68777ae24427e57dd848f1b5467eef8"
  },
  {
    "url": "02_java/index.html",
    "revision": "6dc8a2712ee1306a4662ac1299c5d319"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "ea655d1022ab173f7e0db30cb20dd3f2"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "c7eb86dcd302dddadce016e1bf694585"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "4145d58c2d9b8020ca48b4f58a714018"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "8331442797f6a661a0b0218c7abe8a43"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "98c14597d1899d3329350a15ed68afb0"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "eebbde49704829c34c4b69cec462dd80"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "542cd44e5af433d7f54a7d7e1c5e23fa"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "44af985e6640105191239130d9c2b5f7"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "eb710280e80eda4b1bc618dd88be8dc2"
  },
  {
    "url": "404.html",
    "revision": "f416519f5af005750580a30337faba60"
  },
  {
    "url": "assets/css/0.styles.619f263b.css",
    "revision": "7aa05540633a7b8100e5a20ead282e52"
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
    "url": "assets/js/13.ae93b72d.js",
    "revision": "038c15a8a7e57ace4e9a394cb49bbc5c"
  },
  {
    "url": "assets/js/14.83526831.js",
    "revision": "4fce1260cfb042f3c598ba3ddf71fbf8"
  },
  {
    "url": "assets/js/15.d1804f7e.js",
    "revision": "1824e66e0561941d5d58abd58ca857e6"
  },
  {
    "url": "assets/js/16.b72ca2be.js",
    "revision": "ce87a01b0d4e7c5698f9be09381071f5"
  },
  {
    "url": "assets/js/17.0dc70313.js",
    "revision": "35b33b7cdc469dc6ca2452c01a6a5c53"
  },
  {
    "url": "assets/js/18.4a23eb07.js",
    "revision": "5ed771fb92d5b7940ea62f1eee793491"
  },
  {
    "url": "assets/js/19.57cb96a1.js",
    "revision": "701645de47c872591bdbff14d9a85a82"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.3f5284fa.js",
    "revision": "d4f9c0428f8bbafb102af4b48a7d90fa"
  },
  {
    "url": "assets/js/21.ea713bbb.js",
    "revision": "0151175d05dc36fcc2bbc5723bcc6f83"
  },
  {
    "url": "assets/js/22.c284fd61.js",
    "revision": "bcf822644f8a26240cbd7d9ec29040a8"
  },
  {
    "url": "assets/js/23.b920c29c.js",
    "revision": "07a5f116f7291f18ffe53e8573709d11"
  },
  {
    "url": "assets/js/24.d47b8085.js",
    "revision": "6b80c02850abd6483891f360f1844712"
  },
  {
    "url": "assets/js/25.616d91bd.js",
    "revision": "6f79069f18b6557bcc7c9d431b45e273"
  },
  {
    "url": "assets/js/26.e67f6996.js",
    "revision": "1a4ed7c13a26c08ef42cd7a663b60e02"
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
    "url": "assets/js/app.e5a5f0ff.js",
    "revision": "f54122c60c8dc671ea1152f71b3c21a0"
  },
  {
    "url": "home.html",
    "revision": "5f2921d84bb0b683145beb6ba2e9ce44"
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
    "revision": "f46af79ef953a1db2d4878b56f5b412f"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "6d738e20b0f4b0e48c5c7b4c77688742"
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
