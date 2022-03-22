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
    "revision": "d8cbfea2713a51fb71664765015211e8"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "4333aa57c4c2d7c58ca637af8bde3070"
  },
  {
    "url": "02_java/index.html",
    "revision": "45b229f2174a2fe4e9f8d4ad65839013"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "1c992f1587cade8a43119de0e5869c61"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "5f7b01331d11e2a089f88ae157d713b1"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "a256efe1757e59a78afa1969c2be4d48"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "e2bbe04627da4f0847573c3fb5be83e3"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "74505c3b323226430898448a6d59c6bf"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "0fb1218526e6e0123bec2ba08b6ace15"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "42b95e9329821c111d7df04e45ae47b4"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "62ba1e555811ff8b8b41c37ea930e37d"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "250d255034b13c05ae020736222fd034"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "6d150143f00f53ef132e06bca8c525a8"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "02a6a10a6ef2bce34a60ce0963a0dd02"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "575b73d6d405f48cbb8da88cfd8b0c7b"
  },
  {
    "url": "06_threads/index.html",
    "revision": "7d6241dd6da63bec568b90a4bddc65aa"
  },
  {
    "url": "404.html",
    "revision": "bea9dffdd1283cb8ad79288850350e59"
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
    "url": "assets/js/12.1e68bd05.js",
    "revision": "354ad433329237d9c5093237d47883dc"
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
    "url": "assets/js/app.3010ec77.js",
    "revision": "6352138d7b4893278435d0c44efb16fb"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "565a1d58c6e033523886488ff7079795"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "30fda67610a8c4601697a4f8ae155bb8"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "8bc88e3fc95f6e5e1f3f1c44eee2fbeb"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "907c4e70a759b14e9c40dad7fc5a5d23"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "47cc476cb1be0b6dfce35c73a7f11f86"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "2ad6a8ee95f166228ea23d9c8e147443"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "cedd025c89801564e4a21f78b7ca5718"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "969b66bb1bb14a4ae1a5905f0b548ca7"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "160deb9e0f54704aab50b5a9962b22d0"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "4a4997b0506860fcd280ff9801acece6"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "511a5405fdf16ee323f109c3de602e8d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "a0cd878f7da9ad3c0a04babdf980e6fe"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "1d813cf007309da491cb24f197fad665"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "62e0580903dbc0b1cf6718ce39178840"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "b98771376ad0be7998020bbac4ba297c"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "1725a0f6f28a27b58e7e3eb7adb8494d"
  },
  {
    "url": "home.html",
    "revision": "3e37254c340c328d7e348f5056a99a1c"
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
    "revision": "3dc9fec5c339622fde27c7442acdca64"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "5932eff9d2398e5b81d67da94e4e07af"
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
