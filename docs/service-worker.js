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
    "revision": "7b76508bc7615737658b2dfc338c3a8a"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "f1de28021f74e807cf74748947a99e85"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "f109a149beede18e1afba9600a4877cb"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "00395cf40ee3a906f644facf93ed8b8b"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "9a061d7ff0a6f85e05af002082cf199b"
  },
  {
    "url": "02_java/index.html",
    "revision": "5f0c95d64e441a12f11b499de147087a"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "ba33546ea5c169103be42ce1e6ace66d"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "b393bb28bcdffc9be768896946cf951d"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "d29c13ba558119db9a11e5a3cae7cdcb"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "e2f4c71ab31a74db3e7d87a0f8a05f46"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "21fb23615a9044bc7ad2ecdf57eb289f"
  },
  {
    "url": "404.html",
    "revision": "68d38beb22e4c36fddc1d80631bad428"
  },
  {
    "url": "assets/css/0.styles.4906be8b.css",
    "revision": "90abca03589baefdadcded681ebf108c"
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
    "url": "assets/js/19.8fbefa78.js",
    "revision": "1c1c47452e4e435041b770345660c59d"
  },
  {
    "url": "assets/js/2.1a81747f.js",
    "revision": "4669f56f32995eb1657cb3aaab5ad7f7"
  },
  {
    "url": "assets/js/20.1125be1d.js",
    "revision": "c260ab598de923e9051a1bd786cf39df"
  },
  {
    "url": "assets/js/21.38f8d194.js",
    "revision": "35916d7f28d2ef05d4dbe89b25706015"
  },
  {
    "url": "assets/js/22.9761eec9.js",
    "revision": "65efdee41f9f234556fb3368d80491f9"
  },
  {
    "url": "assets/js/23.f7866bb4.js",
    "revision": "f47a5c3360c16d016306705099764f2d"
  },
  {
    "url": "assets/js/24.c1c699c3.js",
    "revision": "0ed659e86518f08db49d40fbeb3fa99d"
  },
  {
    "url": "assets/js/3.f67ca266.js",
    "revision": "a2c6e0a36d374a4953c6e6f72115e839"
  },
  {
    "url": "assets/js/4.1cd94bdc.js",
    "revision": "eeb7497142d219e73cb6bd8955d705bc"
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
    "url": "assets/js/9.d6c1e3a0.js",
    "revision": "187c63681761f8ced9e3231b1cb6c086"
  },
  {
    "url": "assets/js/app.47c8a0ed.js",
    "revision": "7c06675919184e929b2d4d57626e6b09"
  },
  {
    "url": "home.html",
    "revision": "9d8743afd63e95d36ff34decdee4ebbe"
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
    "revision": "c03c6e7a7922f199f7ab458e21bb9cfd"
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
