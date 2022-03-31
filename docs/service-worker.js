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
    "revision": "859138ee94b09f1374ba95c4480e6795"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3ce6e66ff7876160d3c1d76867978deb"
  },
  {
    "url": "02_java/index.html",
    "revision": "59f51354370e61b9b69170f18af36fa4"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "5db30c36868a7584b24ca4a80ef61212"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "5a291e67f5573b016ecad59060ed185f"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "481f5922304cee4fa1b2b3321c27fe05"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "508437a60fc2448a8caf7b5590941ef3"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "5493d95d5953f0df3e66fbe213f8f556"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "ab97cd66f81167879059d3ea62decbfa"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "52444d96e44f7af079bf8436e5f07599"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "29d7b3627a822a385eea96055df7a532"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "491abee4420334d18c3ce93c26d6b154"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "2964af8edb11133ba0345eca28a6acec"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "1b3b142eb52ccdbe246a724dc95b2e48"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "4b907690c1f3d9a36b75ed1b2b793282"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "51abc0c778b99473b33abdd707b83fba"
  },
  {
    "url": "06_threads/index.html",
    "revision": "3d3c6d9fb251fc12489d790e9eb79b3a"
  },
  {
    "url": "404.html",
    "revision": "2fe54b23ff4619b93fb2dcf7b660af06"
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
    "url": "assets/js/11.705c7289.js",
    "revision": "cce2f6b4531472b3cd5be7fc25bdaca7"
  },
  {
    "url": "assets/js/12.5118b01c.js",
    "revision": "41fcdb461d39a784bf3883eca996c9d6"
  },
  {
    "url": "assets/js/13.21d2fb10.js",
    "revision": "4a0996d06cf79e6d93a058dc0621cebb"
  },
  {
    "url": "assets/js/14.76876bac.js",
    "revision": "951718a771bf8f49b080bda9fe9e36b3"
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
    "url": "assets/js/40.ab25dd7e.js",
    "revision": "f8b22258bca55b2750c7b9508ff006a7"
  },
  {
    "url": "assets/js/41.438b8faa.js",
    "revision": "786bb5c208ffe9978a7dc35248a88158"
  },
  {
    "url": "assets/js/42.c31c9480.js",
    "revision": "410d141015efbe430060cd2148b37ea4"
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
    "url": "assets/js/app.e3c11a0c.js",
    "revision": "e6630b3e66bac06cfe44c3b1d61f1213"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "6de111e8a78467dd14204e4eb9c8ee3c"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "d386b9c4f90ff8e33145034984b8b290"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "22326b4179ba9d2656a02d737acac939"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "d3a4903af07dc3b2694d54add0110fef"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "d206dad67dc41452fb03a9ddffd63393"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "041c7ef5f42878c71aaa3abe978aed84"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "e8b87ef5b361306851e94e707129b5e4"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "271500595af982e850a995027a07ee53"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "3d261989db6f87984daba420da76edc8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "53b5759921f7617a95d4ccfd813a30c3"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "fefeb437577e8daa8a27a7bf9c0531b2"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "8de45abd3c2f77270b542fb5d260349c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "db02be57d73479192c11eddaf62beba3"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "24967f281165d36a82446861c4c098f5"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "1540f1b150e0fbaf7dfa2a57d7964848"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "d1ab6a788e9b366818c7e6280ee6661b"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "0fa62e709d6e4a6cdb5037700d296cc3"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "2f4e22e4474705bfc55ed06d36079ddb"
  },
  {
    "url": "home.html",
    "revision": "22a1cfeaf7d4a9aaae4ade12fc631f4b"
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
    "revision": "182ab6d9e0254e40d560ce0448df996c"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "e1f0957661dbcfc3e7ebe41c83594e54"
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
