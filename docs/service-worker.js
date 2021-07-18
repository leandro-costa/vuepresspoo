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
    "revision": "0715a4c27322e856fc7e70a7ad8d9a7e"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "9d97df3835b90b7c2acd81026a7799ef"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "8f6fe45cd13fc049492d12f9e5abd407"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "1e0beb0af6ab8477b3b98898e330e1d9"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "104e366a2cae187fe7b8cb2696084fd4"
  },
  {
    "url": "02_java/index.html",
    "revision": "6466614a6573427c1f0b17ff81a8bb26"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "be8a414b9f4ff9bdcbf96b945fa91d9c"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "dcc1af6c3502410b5cdd9f88c1d0116f"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "dfa8dc5fe9f524bffe4475213252e43c"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "f2f2b81bfc19e53849110d161fab70cf"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "b45f15bdc4668cf9a57ba550198cdcef"
  },
  {
    "url": "404.html",
    "revision": "696c99b31785768b84408828c0694fbc"
  },
  {
    "url": "assets/css/0.styles.49a07c00.css",
    "revision": "de4da789d15b24f56d7a3628c5a3eaef"
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
    "url": "assets/js/18.09ec5039.js",
    "revision": "58771c50e1bfd7ec9c315a340f86273c"
  },
  {
    "url": "assets/js/19.5c0bff71.js",
    "revision": "6144e386270b5090d808f050737d276e"
  },
  {
    "url": "assets/js/2.468e579c.js",
    "revision": "498733eab51c926380cae90b265d3e47"
  },
  {
    "url": "assets/js/20.b28787ae.js",
    "revision": "87d871d3ffdd785ac0b0aa587991ad5f"
  },
  {
    "url": "assets/js/21.8d9fcb72.js",
    "revision": "8071dff431bcd0af3306cefcb491e146"
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
    "url": "assets/js/5.c2c6ef18.js",
    "revision": "dcbf4e748e25cab17dbaa88977cd71f7"
  },
  {
    "url": "assets/js/6.760fbf61.js",
    "revision": "d4386f68ea03b22f06bc5370541680cd"
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
    "url": "assets/js/app.cd3ffe3a.js",
    "revision": "252048dcc8af47fd650616b7b805ed25"
  },
  {
    "url": "home.html",
    "revision": "68453f1742c40f1ae9cad88056358953"
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
    "revision": "53c8f3e7e39ccef0dda7c9e8572f7eb7"
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
