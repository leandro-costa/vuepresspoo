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
    "revision": "fbc7c2e740df6923b537155d3d3396dd"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "387ca265a2de06988b60397b6be440a8"
  },
  {
    "url": "02_java/index.html",
    "revision": "799f8b5ea2954caf37d0ac51d84bfd82"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "1b4eb7a9782a59985e17863c2a5db7c4"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "0bd0f716db288dbda66bcaf43e5f62ee"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "8a6f5f13643b5b408bddfca7f9e10ff7"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "4115d9d99430ddf75eb1a7b3ee971bad"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "e0d3d1faf7b7cd139b35744911892be3"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "e396f2a92945cf773fd1b32d8797f7c0"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "4ff9c1bc3bc741da55c8a939f88aeeb9"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "33a0ee48083918080977f90465068a1a"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "bde7395606011f23a879e3e5f268729d"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "72b71b6f8ad457c75e40e7288e35d9d7"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "408f7ca3a232c661c59b35fbb5f12fd8"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "9423a820f347742d0d57ddee9cfe78e1"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "b76f51f56f410b09fa6dede9b320794c"
  },
  {
    "url": "06_threads/index.html",
    "revision": "e395ea28c488d641072b35cb39170b1a"
  },
  {
    "url": "404.html",
    "revision": "2394bb9b7f3a7702323b4bb5bbc85f51"
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
    "url": "assets/js/16.72d1e33c.js",
    "revision": "d6d08187e4d3a1902fc8895bdab516d6"
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
    "url": "assets/js/32.271314a3.js",
    "revision": "f44bd566906d1c37e1ec4904939599e6"
  },
  {
    "url": "assets/js/33.73937665.js",
    "revision": "48f18e080b6d836b5f021776d43caa9d"
  },
  {
    "url": "assets/js/34.5229c25a.js",
    "revision": "e22fc1e3c4add19ab958fa5c3113739a"
  },
  {
    "url": "assets/js/35.73d470a7.js",
    "revision": "49124e54331448eab107f47b93b637fa"
  },
  {
    "url": "assets/js/36.50b74c1f.js",
    "revision": "89cc28e9aa89ca849477e9af6091b36a"
  },
  {
    "url": "assets/js/37.5e4efd03.js",
    "revision": "fe2191b9dbaa6fc4f4d013a3e66a0146"
  },
  {
    "url": "assets/js/38.d375c7bf.js",
    "revision": "a8eb27061f155d351947c3e420230f4d"
  },
  {
    "url": "assets/js/39.b829617e.js",
    "revision": "ab0f435f4eb9cbc2a2828a3ce35be05e"
  },
  {
    "url": "assets/js/4.244ccdd9.js",
    "revision": "8c9b3d87e2e105f9817c338cde0f0f06"
  },
  {
    "url": "assets/js/40.6028c820.js",
    "revision": "aab233e98ae95525e3081690a5c05b9a"
  },
  {
    "url": "assets/js/41.ed8241f4.js",
    "revision": "a44065bd00f644410e4c24ec1601d922"
  },
  {
    "url": "assets/js/42.b86272c1.js",
    "revision": "30c2e2737c3b4e8a6575eb4f4b4c8f05"
  },
  {
    "url": "assets/js/43.d5364d2c.js",
    "revision": "df6d2bc6f83a4e9227fff54dc52cd109"
  },
  {
    "url": "assets/js/44.61311c30.js",
    "revision": "7b844d92bc2c22fc439b73c1577ab1bb"
  },
  {
    "url": "assets/js/45.c003761b.js",
    "revision": "e99e89f8f911e66dacc21eefa5d5277c"
  },
  {
    "url": "assets/js/46.bd8afd60.js",
    "revision": "d3b22fe47f62197250858a843ba254e6"
  },
  {
    "url": "assets/js/47.3166d847.js",
    "revision": "bc27aec910d675870cc2bd828168535a"
  },
  {
    "url": "assets/js/48.3fbef64b.js",
    "revision": "9a0ef35470c2b78582a45ab90ea917cc"
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
    "url": "assets/js/9.b1552fbf.js",
    "revision": "0a32a622a492761e37e97cc02a607c15"
  },
  {
    "url": "assets/js/app.80b7c025.js",
    "revision": "0cf25a6572dc9e5d1d89f2e4fd107b27"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "0a44978907b9958c6ebe3779f3d92832"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "7339d6696c91d457d319f5ae1311afd5"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "87cf07dd75d46604cb29acdd5505464e"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "1ca079a0517ad5330485ab881d938236"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "745079874c44f3ecaf5b54c8c6a891ee"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "e4a04b3c318cef3f183525fc810396ec"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "1a327ee8b8f8547a96576b1cbefe9be7"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "c3dcc980cebfb197c59e5497d7ffcb1f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "06c05a65c2e6e72d62dd95cb90251fac"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "df63d4290ff0d4683ce2cbdd33485791"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "8afadbb500e57f11095648dab10a0f79"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "8e499843b36b208f78c95ac7813c852a"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "805d5449e91f4f511b5bee3edec4b9dd"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "0e58c6fc2b9bf90cf9ca442e8a9cfc1a"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "e9c1e907bfe6d12581542d5cc97553c5"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "d83500f6261f510d1c9972b586b1e53e"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "a7e97619c685c33462ef3c52ca5d10a4"
  },
  {
    "url": "home.html",
    "revision": "cfca4d214b54d886b90647fa30036564"
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
    "revision": "7b03e1a9c2c612224707db2183ca28b6"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "bec5a57d69584181444ebfdf272ad570"
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
