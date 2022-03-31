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
    "revision": "0451e23a03430585c71c0e5c9dd7fa19"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "b1a88160ec99e3d8dd02ac51f352a66f"
  },
  {
    "url": "02_java/index.html",
    "revision": "5ea3e34a6a247b64b3cb517d2d5a9950"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "55e87fb1a5e52bfce64383ae994be661"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "cc2700c996bbee6755734a384d1332c0"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "61e0740cff0312e95d1bb9a4c85c4d5f"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "6fbe001e8e5803ec573449509a0580f4"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "c7f3d1cc1db93e4fca639db4689382ce"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "b57aee06cf1ceb390835e1d62e458a1d"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "64582c5d390672dcf6a2bbbddce881c3"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "21657d3bc77f6cf6e0d4c8dded6b7547"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "4b377d81c125fb78dda65f697887e85d"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "a2ba4b4b3ede9062a02284abe794fc91"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "b4cc47ba1e70c5c5f47d18abb7457bf8"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "b5226950d276dba236cecc9798794e46"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "edefb236e984e95c454eb5785ed74d07"
  },
  {
    "url": "06_threads/index.html",
    "revision": "5a53385bb753047f318bf27097d11f9c"
  },
  {
    "url": "404.html",
    "revision": "1d9b496d2ef1b32dbe1e1cc423aac347"
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
    "url": "assets/js/10.c03d63ce.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.2bbf0a3d.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.0e22810f.js",
    "revision": "6211f641853862de7e1100f257cc83ee"
  },
  {
    "url": "assets/js/13.dd5315c4.js",
    "revision": "fcff63ab95edcd0106a5937094488076"
  },
  {
    "url": "assets/js/14.f5d19c76.js",
    "revision": "6b48515f35d4b4718ce25674f0b66c8b"
  },
  {
    "url": "assets/js/15.a5b5f46a.js",
    "revision": "c8ec5bf112e68ed1d753159423c998cf"
  },
  {
    "url": "assets/js/16.249eb907.js",
    "revision": "5e9d39b27333b68fb5a029bfe21a1989"
  },
  {
    "url": "assets/js/17.c87e62f4.js",
    "revision": "53afbb57e03616575c595da6478cf720"
  },
  {
    "url": "assets/js/18.17ee4bf4.js",
    "revision": "ba55eeb37356371bfdcc657ef0a1fa09"
  },
  {
    "url": "assets/js/19.8e18c932.js",
    "revision": "fe0598f4f0e958b71101a7e22eff5e3c"
  },
  {
    "url": "assets/js/2.4b73ac34.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.f2395b4d.js",
    "revision": "cd3287307ef32bbb6a49f5e1c0c480c1"
  },
  {
    "url": "assets/js/21.2ec6fc4d.js",
    "revision": "0b8ee90c66224f530bb165e079d01797"
  },
  {
    "url": "assets/js/22.caa5d071.js",
    "revision": "2ca5a41e54d555a8cc1f5aaa07ad3f1c"
  },
  {
    "url": "assets/js/23.bf80fa07.js",
    "revision": "d10236a44d37a8ba285b0149693a4040"
  },
  {
    "url": "assets/js/24.6f32a9a0.js",
    "revision": "c4499c74c0a6d7fbcc6d27cad42afcc6"
  },
  {
    "url": "assets/js/25.d7b138e2.js",
    "revision": "1ac3d128df466d578bc3395a240c13eb"
  },
  {
    "url": "assets/js/26.546a3bc0.js",
    "revision": "860cd953d6b857c12b99276fcaeadb06"
  },
  {
    "url": "assets/js/27.b25a2ac4.js",
    "revision": "7de81d44c5395e79848b423c76b54e21"
  },
  {
    "url": "assets/js/28.26f36e23.js",
    "revision": "de004e9eb900491e25333ff09c97b672"
  },
  {
    "url": "assets/js/29.c7582608.js",
    "revision": "03c34a1c735fafea9c3555745a3cbf3d"
  },
  {
    "url": "assets/js/3.2dbd240a.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.fdfd6835.js",
    "revision": "b8ee2e7938a3977bf07eca5463480a1f"
  },
  {
    "url": "assets/js/31.c463b462.js",
    "revision": "b1723a1ef59ac995b0dd9baa09284ee6"
  },
  {
    "url": "assets/js/32.138d32e3.js",
    "revision": "71de6559ab9fbebf2135b5f177f42e89"
  },
  {
    "url": "assets/js/33.889add37.js",
    "revision": "5c4398a0763d0808d5dbb184414a15da"
  },
  {
    "url": "assets/js/34.929c74b6.js",
    "revision": "90d6e97faa19600b333a8fd43f756290"
  },
  {
    "url": "assets/js/35.3a2eb9f6.js",
    "revision": "e6c84b4108f2277092cad7faee9dbef9"
  },
  {
    "url": "assets/js/36.06a7128c.js",
    "revision": "455d08078c5487c6a100f5c1dafc3c63"
  },
  {
    "url": "assets/js/37.3e20dc42.js",
    "revision": "5978f74c6cff1ac2c0f6b55335300c87"
  },
  {
    "url": "assets/js/38.a303658f.js",
    "revision": "6862a291f93bccfe07dec904b5d4ac47"
  },
  {
    "url": "assets/js/39.cdd55c0e.js",
    "revision": "e59097ad0826153db1569c15b5150722"
  },
  {
    "url": "assets/js/4.f9962ee9.js",
    "revision": "86d1b57326bdf381a47bc9ce0e3e37d0"
  },
  {
    "url": "assets/js/40.f441f3ed.js",
    "revision": "eb2e2e83c0a2c334fc7104c8197709da"
  },
  {
    "url": "assets/js/41.fc34dcb3.js",
    "revision": "e9fb9a09a803e8fffec4d6bf91f37d7c"
  },
  {
    "url": "assets/js/42.a2ea522e.js",
    "revision": "b0cb135cd0b42615a7c7735a28701971"
  },
  {
    "url": "assets/js/43.df395a2a.js",
    "revision": "e395a6eba22ac3c6f64587656bdfbc39"
  },
  {
    "url": "assets/js/44.ddab9511.js",
    "revision": "7cae35d10d70917b8c971b014cfeb935"
  },
  {
    "url": "assets/js/45.3715f19b.js",
    "revision": "46b9ef7cc7342742fce950f710d87fb3"
  },
  {
    "url": "assets/js/46.d9eeefcc.js",
    "revision": "7df68645d9d60845e79e6cf7c4513943"
  },
  {
    "url": "assets/js/47.e21af6ac.js",
    "revision": "536a50e2228175db50d7d5d2cbe8b583"
  },
  {
    "url": "assets/js/48.d22b4840.js",
    "revision": "73f03e83478a8ef887e729d489d8d2f2"
  },
  {
    "url": "assets/js/49.82cd411f.js",
    "revision": "e807f694565b200afb93aff75f4534b9"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.da04edcd.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.626b1fa9.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.f964060c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.b0329be9.js",
    "revision": "ef2d490b345054b333c04521c2bf1d94"
  },
  {
    "url": "assets/js/app.48f59f42.js",
    "revision": "25945490d980c1a9976033a65126f1e7"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "781f0c5f0e03f73d70454120ee51232a"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "6b81f5af7e9bbb21021ec539941d6a17"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "c1d1ebc179eb54863552ace9a6ddf0e0"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "daa3f8fcb3990b61f381a86f527ec775"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "62955e2fef9a9eebe7ba2462510257fa"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "536948bb7d5794bd79397b23329b6517"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "6561f2e012765f677f416b3fbb923b80"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "a5b8913be16db51ed484c2a5b1093e62"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "906fe533bbc8661f7371c05756e3025c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "0c8b17e947457cad4c08b2151f608b48"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "c1e1beef08fc516c23628e0df3d40f30"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "f363a5215c88bec2ba15f352a9cca070"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "b992dc076fc26bc864f366c43449b71e"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "ef22dbd52733a83fe3211f1d0f7e9c81"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "0e5d013dd357ca867e0c308005c73e03"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "4b73d1ab7e0fe63d857547cb65c808d6"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "dce43ce4b6b318086c9e76b5b4f75037"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "e7d06a070c7a8c1d3ad46ae8d7d2185c"
  },
  {
    "url": "home.html",
    "revision": "7e1d211e5c3dc4c1a1d3b515ebcef2a8"
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
    "revision": "062e582d32889f9b1695d47c84341eee"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "00f70477e778f7c1b24c79e24ea9ea57"
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
