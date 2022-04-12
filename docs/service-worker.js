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
    "revision": "7bff1ed5481873e96c9d17af5960959c"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "2018733b2c462667da1666514f33ec33"
  },
  {
    "url": "02_java/index.html",
    "revision": "8bf00302ca169e4d2742ed9d7bd338a1"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "c4afc2c193d81f90f86412a2d8a4db02"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "63dfd47b7080313460c201b526f50552"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "54182186717c544b704c7ac8a1e3930f"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "6904e94ded9b6afb9775daec0bedca88"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "ce5ee3117c331ab0ebf75914887c7c28"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "6e04a454253740890111843cec8f9f8d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "53b47e37f0f1cd0be63ea6fc09edb4f2"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "c4140c7bdafbaeb6100c65730a6ee6d7"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "fd6d877fbbab4e243286d7b2402dc2e5"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "d840e6a3f228b83eec909591a9b341b5"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "e9c61bdf43ec4e9bba612518b993e7cc"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "511ab773734154452fca395ec6f51995"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "1de804fca1aa9bf19d93557c7f001001"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "7553f83de13602d61710471faa362817"
  },
  {
    "url": "06_threads/index.html",
    "revision": "87f7944cdd8f522316f02560335a1f99"
  },
  {
    "url": "404.html",
    "revision": "e4c6b5bbfc207bf1f71cf6259bfc8a77"
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
    "url": "assets/js/13.cbb87a48.js",
    "revision": "d5fe63d8f321c094acf69ea1ecc2ead2"
  },
  {
    "url": "assets/js/14.76876bac.js",
    "revision": "951718a771bf8f49b080bda9fe9e36b3"
  },
  {
    "url": "assets/js/15.c385a5af.js",
    "revision": "8eabeac17798bad12c8fe9b4e88c4c64"
  },
  {
    "url": "assets/js/16.249eb907.js",
    "revision": "5e9d39b27333b68fb5a029bfe21a1989"
  },
  {
    "url": "assets/js/17.2c68b152.js",
    "revision": "b4c252db26b8e8fa8d1d177fc2f5b7fe"
  },
  {
    "url": "assets/js/18.19957246.js",
    "revision": "e2e9d38da80acdba25f5c8e3295c2885"
  },
  {
    "url": "assets/js/19.90a221c3.js",
    "revision": "042c6ccbdaf0e4d03693a81c1e777471"
  },
  {
    "url": "assets/js/2.4b73ac34.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.4cd42019.js",
    "revision": "a273a519c67ed5588693c3e9ffb5410c"
  },
  {
    "url": "assets/js/21.40ece0a0.js",
    "revision": "4f28ec3da54b4225283e3d8b09936313"
  },
  {
    "url": "assets/js/22.4c9b94e0.js",
    "revision": "752c24564774b0dd466b9d7b874150f7"
  },
  {
    "url": "assets/js/23.ece060a2.js",
    "revision": "6326018c84aca7736f15f5f90855dcb1"
  },
  {
    "url": "assets/js/24.1bb53b61.js",
    "revision": "e98b75343c57fd328d26ffc3fab5427d"
  },
  {
    "url": "assets/js/25.c119997f.js",
    "revision": "7c8e245b441862e7c50e8cd1c5826122"
  },
  {
    "url": "assets/js/26.4c08ca27.js",
    "revision": "eb3ae32e7cc2a68185e9b448a9c7d18c"
  },
  {
    "url": "assets/js/27.9490b41f.js",
    "revision": "6797aa9ca342f8117d2573fb6571124c"
  },
  {
    "url": "assets/js/28.6bdc3638.js",
    "revision": "9eb8d12b24899bb3bc0e8a92d32574cf"
  },
  {
    "url": "assets/js/29.921a32f0.js",
    "revision": "9239c89532065ca29fc4c9d0c342b532"
  },
  {
    "url": "assets/js/3.2dbd240a.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.8aa0f8b7.js",
    "revision": "a63ddfcc559c849d751ec1dffe2b6b48"
  },
  {
    "url": "assets/js/31.f4ccfe76.js",
    "revision": "092dc71c7b76f655a51b5876651fe281"
  },
  {
    "url": "assets/js/32.bdebfe3d.js",
    "revision": "a1cd23d0dcf64297a7a3eb92fcf4bc75"
  },
  {
    "url": "assets/js/33.6036deff.js",
    "revision": "5c994c2b413a4f7577304b9a354a033f"
  },
  {
    "url": "assets/js/34.02c64381.js",
    "revision": "76f42efff029db9581d7c87e2c9acf90"
  },
  {
    "url": "assets/js/35.c1ccfcbe.js",
    "revision": "1d075780862ec86555e96ad759537c78"
  },
  {
    "url": "assets/js/36.e54b15ce.js",
    "revision": "3b07c7cd5939f07af1cdf3b6fce2b70b"
  },
  {
    "url": "assets/js/37.b4e87f3a.js",
    "revision": "372a5165ca109a7b456f014a961d03be"
  },
  {
    "url": "assets/js/38.48b4a875.js",
    "revision": "982774b4efed03bbfff0b815c289d130"
  },
  {
    "url": "assets/js/39.79b0c460.js",
    "revision": "6273f7a0cf8000d38e429a3765e8d837"
  },
  {
    "url": "assets/js/4.ae9d79c7.js",
    "revision": "c88ff480c8d8e1b300c9428b4a06efab"
  },
  {
    "url": "assets/js/40.4b8c24f8.js",
    "revision": "cd2a06902c7f6106c560ed5c2fd3f894"
  },
  {
    "url": "assets/js/41.48500b17.js",
    "revision": "a085235a82dead2b66b2d71c3a6bd183"
  },
  {
    "url": "assets/js/42.65c7b7ff.js",
    "revision": "36fe6e1631d4fbc2b2add81b9c85c07f"
  },
  {
    "url": "assets/js/43.bb5143e3.js",
    "revision": "0420f0802897cd9fe103fde282f87587"
  },
  {
    "url": "assets/js/44.052315b8.js",
    "revision": "e152f28582dae1a43fb33386d3c31d0c"
  },
  {
    "url": "assets/js/45.1ff4bf8c.js",
    "revision": "ea4027d3b65e0bf20a7033172e8c40f6"
  },
  {
    "url": "assets/js/46.c1e88b17.js",
    "revision": "c0f52e60db42118cf9203eabbfe99746"
  },
  {
    "url": "assets/js/47.ed948bea.js",
    "revision": "b9b1ad77b6361c67e686a5ceb79aa00f"
  },
  {
    "url": "assets/js/48.d4cb4d4c.js",
    "revision": "88767b84c0bb288285a3f72495b1f4e4"
  },
  {
    "url": "assets/js/49.2699ca00.js",
    "revision": "94ae06516c5375b2c7c8c46b7799acc0"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/50.ff033066.js",
    "revision": "314086af98b5e9565d6f07f4a70830b2"
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
    "url": "assets/js/9.8d4deb1d.js",
    "revision": "867e689b0a47582ebc1ade3daf2b24c0"
  },
  {
    "url": "assets/js/app.02fd7ce5.js",
    "revision": "d2672e664c9b06745d8ada951d871f4e"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "6cc94edee0b03bd72ea1fa4780531980"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "27d621358cfc8fd55a789cd04dae70ae"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "ac3b75b38f5685ac96b207f79cdc1bd7"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "7e4d1101fd3e170cbbd42982e02b7c77"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "36a853527ff5163fbc605aae4046347a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "5eb948ae717211737ad1d393222cffb4"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "5e3862598d93460b78d2c636e2da8f7b"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "3e92f96949edb2ad8378b668158eb611"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "24543752ba5eac99516742f4861d58c8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "990c53eb2269548585559ef6cc1ba9c3"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "f5928934ca5379df0f4b7db7aced0c36"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "817a3cdd8fc27464ec0d3268e050ca97"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "ba3087242d548b0b17b444304bd9345b"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "555b97adce09a651a2c34dd895d3d361"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "f4e27c7f5bf040ac60c741de3c40a97c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "6b69956188fc1c0d529eb02a2372c0de"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "e1b83158ccdc838d8c122a613e11da4b"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "9f4e64b2eea1a8d722bd9fe1b9db850b"
  },
  {
    "url": "home.html",
    "revision": "008297f86baa4bd675928e2a0524712d"
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
    "revision": "eefcf2ec7134178e0e6c049aa0be8993"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "7b802b9a58073f2feae34e81bb83ab24"
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
