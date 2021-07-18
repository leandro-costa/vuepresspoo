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
    "revision": "a24c66f5aa24c3f3b7cd2dfb1b5a37c8"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "20c774cda20ad2540ff40019d4308c95"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "76bf851919e76e264ee7c47a90ae93da"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "d2c95474c19f57244c833effb412e7f1"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "92e411b6e989f23df3e3ea95b2c1a2f8"
  },
  {
    "url": "02_java/index.html",
    "revision": "830de9acd713b30976c0385dcd7ca3ce"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "c8735c19e4d7e0228ea6a316c6f48634"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "44104d684ea4c84312109e6a3b574468"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "66f2ecef525b71fe40b781e42671ce3d"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "6ca588d35a5cd22aa5ce870c28dd750b"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "07afa4e60b1b60b7facf606a47143e33"
  },
  {
    "url": "404.html",
    "revision": "1bab7a8f2f38b43e15c06df4cf310f27"
  },
  {
    "url": "assets/css/0.styles.0105b20d.css",
    "revision": "f8a8e8e2e6ec860fb5ad1a81a243ed6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb04149e.js",
    "revision": "cb2905725bfcc3de9514ccfa99022349"
  },
  {
    "url": "assets/js/11.4b81de4d.js",
    "revision": "d69eedc4edbf348e663202ff094cc696"
  },
  {
    "url": "assets/js/12.9f070988.js",
    "revision": "200b8ba5bcde155e961df4fdb8b8f513"
  },
  {
    "url": "assets/js/13.c789313c.js",
    "revision": "71469533648ba1327eddebccd8e9d761"
  },
  {
    "url": "assets/js/14.3581f008.js",
    "revision": "18f099e4feee0cfe9e80c00a8c568cda"
  },
  {
    "url": "assets/js/15.afae0bff.js",
    "revision": "d6d823f1603f7e72fcd2eefa4f3b665d"
  },
  {
    "url": "assets/js/16.69c7b986.js",
    "revision": "ce87a01b0d4e7c5698f9be09381071f5"
  },
  {
    "url": "assets/js/17.0b63e271.js",
    "revision": "35b33b7cdc469dc6ca2452c01a6a5c53"
  },
  {
    "url": "assets/js/18.7f49a367.js",
    "revision": "42727788d4b7a81e163e5fb0f69b914a"
  },
  {
    "url": "assets/js/19.055697cc.js",
    "revision": "167624a5993d011f4b42b742570b0139"
  },
  {
    "url": "assets/js/2.468e579c.js",
    "revision": "498733eab51c926380cae90b265d3e47"
  },
  {
    "url": "assets/js/20.e5d42cdd.js",
    "revision": "1f0d5629a2d6a5a814f780233d851518"
  },
  {
    "url": "assets/js/21.564604df.js",
    "revision": "48aff34db20a1e3b0dd526553ea395ff"
  },
  {
    "url": "assets/js/22.57968fea.js",
    "revision": "a8a421e80b6052722bc2c7eded1d0626"
  },
  {
    "url": "assets/js/23.e64cc2e1.js",
    "revision": "13f84487959f2c9236efab3c37798b08"
  },
  {
    "url": "assets/js/24.27d40a6c.js",
    "revision": "5bf68735c97facc4859ea17642044d20"
  },
  {
    "url": "assets/js/3.ba6e1bf2.js",
    "revision": "961dd528cf8ba99c9d4c1bc139426f49"
  },
  {
    "url": "assets/js/4.5f7fa931.js",
    "revision": "1b47fcadc90c5c80b0b40eadb65d62ad"
  },
  {
    "url": "assets/js/5.da33bc20.js",
    "revision": "50e8b5b2b3d76744ab945a5c9d650565"
  },
  {
    "url": "assets/js/6.9a284c71.js",
    "revision": "a8c426387bd38659abb351d96ae4e082"
  },
  {
    "url": "assets/js/7.759f25a6.js",
    "revision": "d6b99783abaf9fb5f1e3dd2476b5219b"
  },
  {
    "url": "assets/js/8.57d62207.js",
    "revision": "e07c16156cbd284fd5bf8f32dd45d8dd"
  },
  {
    "url": "assets/js/9.ea4e2f7f.js",
    "revision": "3114c2533a7cbea286309fa956995971"
  },
  {
    "url": "assets/js/app.595824ff.js",
    "revision": "0a5f2957145dac0add4fbd9605e730ca"
  },
  {
    "url": "home.html",
    "revision": "efb6a18e2b0eb6de19c8bef6f671291e"
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
    "revision": "a960d171c697adae068d944b846b8756"
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
