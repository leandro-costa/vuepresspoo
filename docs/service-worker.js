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
    "revision": "256f7170c273a1aa9cb5f9a7e1416f7f"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "3949dba5aea0f29ebc0455da6874e1ed"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "34511c83c2c2ccb55e2a7963e0013690"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "f7df33df20c8cd8956f7c54a0ea67645"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "06a90c5b119db15ffc913e817da6e9f0"
  },
  {
    "url": "02_java/02_if_else.html",
    "revision": "d0e6d345f7b5b25cb5a610e3306b376a"
  },
  {
    "url": "02_java/03_loops.html",
    "revision": "2164c9e84a50b871bd2bc4c426d4e070"
  },
  {
    "url": "02_java/04_escopo_bloco.html",
    "revision": "72e1491958041463f4357f5e30d61766"
  },
  {
    "url": "02_java/index.html",
    "revision": "4252f58e179b92839bcb1435d9551681"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "522b5939d63845f4373845d0bea0545f"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "f069cc13243cb149ce1a48bcd3af9689"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "09be1b293262dc9226b91d6ae8be951e"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "38e8db130c1e62f80a47192b7c6f00c6"
  },
  {
    "url": "03_conceitos_OO/05_outras_classes.html",
    "revision": "59ab5053f1759d2c05425a164fada043"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "4104204db37615d581a2c1da541baefe"
  },
  {
    "url": "404.html",
    "revision": "f98210b7ee7da5b619a82dfd16de2a85"
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
    "url": "assets/js/15.a23e3edb.js",
    "revision": "c08fe76fc955157c51322e01795f03eb"
  },
  {
    "url": "assets/js/16.a1611322.js",
    "revision": "6413e2c7e6304dd3446802cbe4b58899"
  },
  {
    "url": "assets/js/17.3db1092d.js",
    "revision": "8ebf26f1ad5dde9749bb2d11a4cdeab9"
  },
  {
    "url": "assets/js/18.4099a1c7.js",
    "revision": "05abe614bb1f81844092c6491012fae0"
  },
  {
    "url": "assets/js/19.f05da336.js",
    "revision": "ee8d7ca80f0ee48b43abecacbb4fa4d0"
  },
  {
    "url": "assets/js/2.1f6bfe3c.js",
    "revision": "43f93ed3df64bc6273b41316f2a935a5"
  },
  {
    "url": "assets/js/20.18140907.js",
    "revision": "9e59c30e4f664e54312cde9d2d42f438"
  },
  {
    "url": "assets/js/21.f5d49046.js",
    "revision": "db1c850ccb46342c1f0e7411f67af51b"
  },
  {
    "url": "assets/js/22.d1fa27a0.js",
    "revision": "b1393141a2ceb7bf7403244011f26645"
  },
  {
    "url": "assets/js/23.b22433ab.js",
    "revision": "7ae682c751205c48d88d86881e0b6bee"
  },
  {
    "url": "assets/js/24.304f9ce6.js",
    "revision": "08dfcefa0476331c7c76effb6f1ba1dc"
  },
  {
    "url": "assets/js/25.4dfc3e65.js",
    "revision": "9dcc1bcce586ccd4364670fea34fb6b7"
  },
  {
    "url": "assets/js/26.e0ca5116.js",
    "revision": "d2c956d2a0fa339049b2b2df8b64ccfe"
  },
  {
    "url": "assets/js/27.fb05b84a.js",
    "revision": "94ccb68b838061f0fb6859a809fb65dd"
  },
  {
    "url": "assets/js/3.214ec939.js",
    "revision": "b7c185e811432ed5e7d507811d4613fb"
  },
  {
    "url": "assets/js/4.7806bc0f.js",
    "revision": "e28e8a96cd41398f4a383826b6111356"
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
    "url": "assets/js/9.5d5874ab.js",
    "revision": "fe9339af19db157afb3f73d72924a9ff"
  },
  {
    "url": "assets/js/app.6144de85.js",
    "revision": "e19b2c936859dbf7b44d231237c1484b"
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
    "revision": "2d8f2f214c7032f6d700253a92781513"
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
