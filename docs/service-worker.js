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
    "revision": "6d5942ce8666ca1bdbd1209528e85829"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "ecd9fe369a87bca860362f7846d20c65"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "31372437c592e46ee7f3b5d8156a7eaf"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "d72010b5b0dcc6738c83f28484326e33"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "89d3e946a89fa75c7236240fefe7d807"
  },
  {
    "url": "02_java/index.html",
    "revision": "face295d73601e1239c3eb9aa45e3179"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "117b072bd6cc9dd0224dab8dab45b2d1"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "d0de7f1c4e0c2aff817087bad2ef9d2e"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "f83fe6f2f395cb15cd8dc21582610adf"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "70db3669e3b46c3a37e7472d046c2c88"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "245afd2105a7a6d0f9640b53f9c09cf7"
  },
  {
    "url": "404.html",
    "revision": "1fbad82ff7e33cecd7b32f114f1b2eea"
  },
  {
    "url": "assets/css/0.styles.8e441b37.css",
    "revision": "1b97dca9d954cb322549d21c77585bae"
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
    "url": "assets/js/app.94be1157.js",
    "revision": "8830e7a50ac907777d1034bcf6b9c00f"
  },
  {
    "url": "home.html",
    "revision": "b66796fec0793bb13c6f3c9d2ac63d3d"
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
    "revision": "6b6563188313c35970ce077df3f6ae77"
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
