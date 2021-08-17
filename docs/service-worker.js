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
    "revision": "3e1b6943fb3cb1a4a64a08056e704611"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "1e15eb1c5f1cd1a00c04fb67c56c9150"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "781d88ad244ed9c15623d201bf2928b6"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "4489c55f4ff50794bec796985eacf996"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "b9715afc0bb69fecc8ec4af8004f5d0e"
  },
  {
    "url": "02_java/index.html",
    "revision": "84422d2ce89c88271ba786ac90e32c3c"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "813c2d15430e825df140cece5d9b7d61"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "bd7be63d1d75037c9bd4db7508cd3d5b"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "320ed9df59d613de2ab5ab6e76e8fd4e"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "4a457ac338dd1f10f236a3419178b9c6"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "568cbd9c344d9293e045bdc598629d1d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "7bbc0c521d12c1e0e5a2a2b517a66a58"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "7ab47f4e05a1a2bd490393fdda4e53c3"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "d65c03acf743a369b520cf1e704cd8eb"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "ee02a54241c20aee2fc0729cb540102a"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "878ef9b17ea13f040783b9999f358922"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "0ed052e78c67543cf166038597cc2aa9"
  },
  {
    "url": "404.html",
    "revision": "65934a0ee26142a7b4e4c7c4caa76355"
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
    "url": "assets/js/24.fc24f47a.js",
    "revision": "654e55548d0f758c5d651d6b973ab3e4"
  },
  {
    "url": "assets/js/25.74497802.js",
    "revision": "7eb1f40ca1cf4eac01da9c547ffc4c65"
  },
  {
    "url": "assets/js/26.2ebe8ed6.js",
    "revision": "d49b7e4c0f6999d1982037434b61083a"
  },
  {
    "url": "assets/js/27.0ffc53db.js",
    "revision": "bc11fb4dadc544979c6d47b8afacbf2a"
  },
  {
    "url": "assets/js/28.3a31e347.js",
    "revision": "0b0a82af0030b02b1749a7489565a568"
  },
  {
    "url": "assets/js/29.ce844c0d.js",
    "revision": "375af4c4ace7d9be0b8925f343aab4ed"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.a0018d25.js",
    "revision": "b34d6d8a3361bdb9466a0e3fac4823b8"
  },
  {
    "url": "assets/js/31.97513f0a.js",
    "revision": "15a9ac0110d2d83bd6530e48af68926b"
  },
  {
    "url": "assets/js/32.dc632ce1.js",
    "revision": "391bd66c5d743801911f5f9210a60970"
  },
  {
    "url": "assets/js/33.c45451e9.js",
    "revision": "a94a6d0cd1a1982ce4b8ebe94e2d7415"
  },
  {
    "url": "assets/js/34.611a1fdb.js",
    "revision": "80c7023e3e87b491926f1d04a2863ad8"
  },
  {
    "url": "assets/js/35.1dcb977d.js",
    "revision": "43c4eb61d9feaadaeec29050ee0aed58"
  },
  {
    "url": "assets/js/36.c2d69ab1.js",
    "revision": "b13c71e33c639b03d1005a3e0b4eca85"
  },
  {
    "url": "assets/js/4.c3217327.js",
    "revision": "8a3dd59c1ff79c3d7e6196a3d254904b"
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
    "url": "assets/js/9.09d105f8.js",
    "revision": "8ff4ab5e92ebcc78df5350e5dd2d5737"
  },
  {
    "url": "assets/js/app.8800718c.js",
    "revision": "d0c817b3841b292416f29b688243f182"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "a06d5a3e0e3b7c9eae0daca344d8d94a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "b576cd5f0cf4e6eaf0c63963d2791c1e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "dc3385763653b414b62fb4422a1fc11c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "b70b5ad2cda829f6f6252b7f243d1d14"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "7cfce962fb3c5024c5a5205d84fa4d84"
  },
  {
    "url": "home.html",
    "revision": "edca42bbd9ce70a7661ed2dccaf51c72"
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
    "revision": "cf2b2767f5d9856355e29c65045a5a2f"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "71891195e7ea0431f4757bfe72f594a7"
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
