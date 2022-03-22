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
    "url": "01_paradigmas/index.html",
    "revision": "9146808d28665e250e5d1baf323437d1"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "428a7910802d9b0073b7cb9884968b5d"
  },
  {
    "url": "02_java/index.html",
    "revision": "b9e07fbd07d7fefbea5a00f527f45480"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "399183cf0938c294e45b0ef9a90e306c"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "872746d9a1beb3e761f8bac0e9fbbe71"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "f4ece90d513f3b3f11b57b8eb90ec6b6"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "91dbe113ba2ded17c6148d9bc4f8a335"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "142d9de664cd21c0d315448ff9f24617"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "880cd94af87c78a50cc229753701173f"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "cda8b6d9f003c1e32a1fe58bf2d1b0e5"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "924778500f7c59ecd5db632e948045e2"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "a927462e53367ff378ee1cdf0ea06b57"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "6a8c7b9cb7c0ccdc066bf63d9e09ffd1"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "f11631494fe5aac3be52d975f8ee203e"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "d5b24b42c9bb5de501d53bbeb0370526"
  },
  {
    "url": "06_threads/index.html",
    "revision": "3f270cb923b4c71b2826d429e0e94f7c"
  },
  {
    "url": "404.html",
    "revision": "155cfc2e80bf9b69109db78dc5a3257e"
  },
  {
    "url": "assets/css/0.styles.fe2619a7.css",
    "revision": "5b6f6b3622d75df436a9c1810d03ebfd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.78d57f82.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.b7039460.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.0e35ce3e.js",
    "revision": "134f21628fb80b991002b6a6dc94e807"
  },
  {
    "url": "assets/js/13.dc61533c.js",
    "revision": "fcff63ab95edcd0106a5937094488076"
  },
  {
    "url": "assets/js/14.7ca1862e.js",
    "revision": "6b48515f35d4b4718ce25674f0b66c8b"
  },
  {
    "url": "assets/js/15.0efde943.js",
    "revision": "cb0ce36f6bc904862b9a1aaa93a2e1a8"
  },
  {
    "url": "assets/js/16.74ec3d79.js",
    "revision": "b57fc6babd53e508b1fa41dd326076c2"
  },
  {
    "url": "assets/js/17.5f5c7de5.js",
    "revision": "4498ca578e8c1aa7130cc292b6f312a5"
  },
  {
    "url": "assets/js/18.10f1c80a.js",
    "revision": "045c06f2ff15c876606009e4bd5d0a66"
  },
  {
    "url": "assets/js/19.24ce0223.js",
    "revision": "1f4afffa5190e0c56da96170b6c7dcb3"
  },
  {
    "url": "assets/js/2.3ac662f1.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.75399a50.js",
    "revision": "efc8f3ce6c0b5a1c26103eedc9fd9fbf"
  },
  {
    "url": "assets/js/21.07790d9d.js",
    "revision": "965ee62ada6480d020c65c79ff2aeb5f"
  },
  {
    "url": "assets/js/22.3992ba58.js",
    "revision": "3a884bf41e216c9f8b77f61a998a2b0d"
  },
  {
    "url": "assets/js/23.b8f46a1c.js",
    "revision": "c2e6dce521c5a5450e67cc1db163dcf3"
  },
  {
    "url": "assets/js/24.228cce00.js",
    "revision": "7704a4d3e6527de97086c50db5f54ed5"
  },
  {
    "url": "assets/js/25.807f5f9e.js",
    "revision": "c60a30614395769da6aa0f05e49e8725"
  },
  {
    "url": "assets/js/26.3c175da7.js",
    "revision": "e3677481668f967972bfc363b23e2506"
  },
  {
    "url": "assets/js/27.9400d3f7.js",
    "revision": "8bd448d3e4dbd198bff45daa44453d29"
  },
  {
    "url": "assets/js/28.54c724c1.js",
    "revision": "126c4b3f6ad636575d1d5288d604464a"
  },
  {
    "url": "assets/js/29.fb47ce2f.js",
    "revision": "375af4c4ace7d9be0b8925f343aab4ed"
  },
  {
    "url": "assets/js/3.d3a2ab93.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.b851c1ea.js",
    "revision": "02a8261d84174464f7e58b8562972e2f"
  },
  {
    "url": "assets/js/31.2d00a758.js",
    "revision": "ba86f807ac362f17be96ac034505bbda"
  },
  {
    "url": "assets/js/32.3b6e49e5.js",
    "revision": "f0f1b0319ad7285c5e277015bca9d60b"
  },
  {
    "url": "assets/js/33.8bfb5c6e.js",
    "revision": "97080223662703a9f9292e3f59e6ed2f"
  },
  {
    "url": "assets/js/34.7e21646a.js",
    "revision": "e4dd9ef544014ad7b2d7dc394105ba74"
  },
  {
    "url": "assets/js/35.96a67f9c.js",
    "revision": "70d58ec6ab2f0623cb1682c48c7dcc20"
  },
  {
    "url": "assets/js/36.bf4a1c45.js",
    "revision": "e6af6ca9c80ab55c297efef791226558"
  },
  {
    "url": "assets/js/37.330f75b3.js",
    "revision": "7cfb7f3d861906d839893c3f34e7a2d0"
  },
  {
    "url": "assets/js/38.e8fb87e7.js",
    "revision": "eba77e658ad7c3a16a960d47ca4177e5"
  },
  {
    "url": "assets/js/39.cdd678aa.js",
    "revision": "555583575cb6ae24f8e4d160cc0ad7aa"
  },
  {
    "url": "assets/js/4.0458222d.js",
    "revision": "1ca49aca16ecb8cf0d5e26ebf5496e34"
  },
  {
    "url": "assets/js/40.d4658e42.js",
    "revision": "bea1e2087d6eaa13954231b8f4cfb316"
  },
  {
    "url": "assets/js/41.57525ad5.js",
    "revision": "0978b1ea200a9b69325f20d767a75a65"
  },
  {
    "url": "assets/js/42.d4dde262.js",
    "revision": "0fc18c1e4fb46466eb76f3b92b9735e7"
  },
  {
    "url": "assets/js/43.4572602d.js",
    "revision": "8f68c2b1e69808e3f14ba462a7d722e9"
  },
  {
    "url": "assets/js/44.c5e476cb.js",
    "revision": "1d862bad498afc11fadbe454fbaf610a"
  },
  {
    "url": "assets/js/45.f8f01d24.js",
    "revision": "9c76b737bfa4575d931b6d336a18bf8d"
  },
  {
    "url": "assets/js/46.f0acae7e.js",
    "revision": "1ccbaa38c9aae3b20323f1a602f305d5"
  },
  {
    "url": "assets/js/5.a07ae67d.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.5ce0bf89.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.b35e2896.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.65860218.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.2472c6ed.js",
    "revision": "f26fa9889c2fb8acb7f00ad5d99e3eb2"
  },
  {
    "url": "assets/js/app.7ac55ea6.js",
    "revision": "280cff9f303a49f6249fe781097f1159"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "f54d131220612e5bf47c21bcada4ea99"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "70578962a40daef36991c8a1bc9a2360"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "bde7aca3a2188d3167a2cf7e744820f6"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "a3ffc5df8562761b108f3af4b77a8922"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "247a4d6a1462339934fbe79d38072015"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "56acf78c869ee344b38ab8da191b1160"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "4b79724c63f8a5f955eb5be47d116db9"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "ad7f4c19937e3f2f5ee99487d0f3fdbb"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "661b050e29089b2b0dda40074cc09df3"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "e2a4b2dd7ed07a7a4d8903e43763df83"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "743426d20d2a4f1754fdf3f93bc54e3e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "89a63558bb0054acf769e02f6516a8b5"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "662cbc4f8825defd6e30e76708f34779"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "7758ba7e0ddd8e971f9858e67c51225c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "a160cb5ee105be3a58627615ce8a4ba6"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "471daca0392e22c97260d3aaaf4d37c6"
  },
  {
    "url": "home.html",
    "revision": "18e6ca1259eee127e3dcf995d66b85d1"
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
    "revision": "8bd776bfa4cf3e9d74bae03dc4673213"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "cde8db03b5bfe6d965795ef222abc7e1"
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
