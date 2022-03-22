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
    "revision": "81d8cfa30f43b9389fd0334362d77fff"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "efd05f206a40f1662d04e46db969af79"
  },
  {
    "url": "02_java/index.html",
    "revision": "07ca2a5b443119ac8fa988d5abfbdc3f"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "6adf7714279fd28b032d9a7f68e381b6"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "efb0b12dd6eb872aaf4b1faedee08df2"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "301c2665b127c476fe573352717bc813"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "318e75e7a82bb10c3457365f319a9969"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "3e6dcd6f69c672736286b44db71f7774"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "00b73c8987b3bf23cbcefc0269c740bd"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "2b9ce869afa9c2e014f252632c4e4d6a"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "a6d137aee48972a7e5ab053e11ae4478"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "36e551624e9c7ee36c4f2e9c83b960e8"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "1701f38e5d6585e9746a8eb5e721e4ad"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "c4ec86650de2ce6ef6a70b429528ca76"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "f40e26047959bd8f90c70d4aa723426a"
  },
  {
    "url": "06_threads/index.html",
    "revision": "2218e1bf3e3abf0a2c7e44e5bb3dd9af"
  },
  {
    "url": "404.html",
    "revision": "10b77fb5e351053b7a2e846586a51f9b"
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
    "url": "assets/js/12.8d092d53.js",
    "revision": "1856f4eef1d77614fad776962d568d1f"
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
    "url": "assets/js/app.b5e14336.js",
    "revision": "14b632f103b0b3d2b7ccdc948472e300"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "3b23e0cc0f852734be1f6e6ceedd97e6"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "4393eb86fadc1ee18e408ded9619065c"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "7656290de689c30fe6ec045934819321"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "5e465234bdc66ae70c91f25ec0a16ea7"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "1949ce66ee20f37c8b3cf824e73d3b90"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "0f0ab79db7c278370617f182fb20e253"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "854ef01505025f30fb6767ae9a04da36"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "32788f8838eadf971d588d7b5a8ba4ca"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "76fda952241ccb9c83d922cc81a1149e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "93c48ea314429e8aa1dc8a3a8381fb83"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "46c255531a98ecca27d362aca9da3548"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "3e6c162c989bca57b67e79a10a5aefb3"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "5637832e14fe310bdcf56572ad873b78"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "c0c0f7b6df51871844f888b1dea79354"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "7409a6f869783b2cb66ef04900462ebf"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "04c3d06058339699c6c841992c767db9"
  },
  {
    "url": "home.html",
    "revision": "5dee56898d076674203bcbe869f56bc6"
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
    "revision": "b0e9bccd111a8ec9b0bd7f3005af1065"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "a57881ad0e6b3a8ff69d4360309e71b1"
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
