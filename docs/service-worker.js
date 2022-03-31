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
    "revision": "d0c1c6cb6c0ec4e4ddc362bb0a67db8d"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "1ee4bf3144a58e6938e0ebe1582fe79b"
  },
  {
    "url": "02_java/index.html",
    "revision": "6d2f2d932cd7068d344e81ed001bda6d"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "a54f3fe2dd07aa127262972d1834544a"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "859a9f7e314089c40bf20e52d151f2a6"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "ea226e2aeb4941715761a37268074cfd"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "122f522951696958d009c08f88f3c387"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "21cd413fb01b588ac85d1c89129b7787"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "9c5d28c26b258fd40b80cf100453ffd9"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "f775761818c77539489073a116732c69"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "4c37e9a07afd720818389d2e5dc74877"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "b4a43c47e0bef40f0726b3eac7ea0d10"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "2cc8aaf199b271a27da2df7aa941defc"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "d67c553a05b88da9d8edcbd5f0f012ef"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "0a321edba78c7a0261d8f6ea12cd3459"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "d8b65f12d287ad229d13852e48e16d05"
  },
  {
    "url": "06_threads/index.html",
    "revision": "0cf5b429b7d7a5b1d796ee50083b1f95"
  },
  {
    "url": "404.html",
    "revision": "2ef8d04e025371a8e5ec869d874fafd9"
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
    "url": "assets/js/15.5af9ecaa.js",
    "revision": "31de7f34c82c2d1bb247fb35d41423fc"
  },
  {
    "url": "assets/js/16.0bc4fade.js",
    "revision": "f37868649947f852522d9b1c7ad3c83e"
  },
  {
    "url": "assets/js/17.a7b72ce8.js",
    "revision": "d75924dcd26059ca37228d0b734b720e"
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
    "url": "assets/js/34.e2f53942.js",
    "revision": "100b7209cd42323a1fcead6c9ad20c62"
  },
  {
    "url": "assets/js/35.ef9b656c.js",
    "revision": "5762168f8cbaae9333162b0694f80e62"
  },
  {
    "url": "assets/js/36.5e703132.js",
    "revision": "3487a4cdcb16150bc6ed654604dfd568"
  },
  {
    "url": "assets/js/37.4f85445e.js",
    "revision": "ac146f3c5c85353bf8f6cdb661b5192f"
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
    "url": "assets/js/app.aa956180.js",
    "revision": "68b2828d13f5e2f9b9158b489cbfab8e"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "302436186d5ca867a3e871c48234f54e"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "3193deebce4160999f6b35bd3d76b5ba"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "9e8ab869836de1bf8158eafcf0a94a5b"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "a91ff18510530391e984f266184afb59"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "af71086e70ea315787e3aa296bd004bd"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "14dd2fa7ccc992775cbab53fc6f3017d"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "9c36125e757071bb0d313bda4f86204b"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "5f0a751c84e1f76f8f6707d7f65f0541"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "b6b2c28fdfd91ce857380de63b191e51"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "d9227be41738a8a79b637c905033c1fb"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "5615e28dfb54f8812c2a30982ca61b68"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "ad3b5eadf7c09030bf96aa72e6a07996"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "2f38cceb18bd55fb0992684fc816404f"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "ff9cac0e335a1fa30d4939b604997655"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "6cdfae98aecb042d53d84cadae026f1b"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "774dd9d25348e7486f3bb6eb4aec29ab"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "1494fa0fe2ec17ba38e5ab8ea6b860aa"
  },
  {
    "url": "home.html",
    "revision": "4a7e5d3a885ac2d5f6dac84531ea4ef0"
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
    "revision": "2bdc69da7c4085c3061f1f608d6c4f80"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "a706274afbc57a47453716ca11ae6ffe"
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
