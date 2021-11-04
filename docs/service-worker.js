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
    "revision": "df4114ce001a6278cea30876f54b5d6a"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "d3d3f23ad6eec035ed62330864875d83"
  },
  {
    "url": "02_java/index.html",
    "revision": "a6b16a30d72e6efebb9d851e5b6a3aa3"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "f80567a14af8c880cf55ae9eb5bb219d"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "a640d2626191851cb508dd7496f3fb19"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "3692a4f13cc0ba25c336ccf941b23549"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "a74b79a26faf1193d3c1446f6660f3ad"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "bbb8ee08486e95e7c95a89b402e33bbf"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "d3e64ffea1899fd8a2bb5855790926da"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "52257e81705c2e3d0f2d5a582a2822f6"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "95a41ead84d48545a6d0caddcc94f6e8"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "c1d62dcd38d604c32cf9df2e6cabd469"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "27859f910a45e2f88fc72a007d1300bf"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "5078893dd034687e6c7aa89da18b757a"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "3b2683a23e5e1cee6768e0b1a4b35b20"
  },
  {
    "url": "06_threads/index.html",
    "revision": "9b37cb2619dfe249c8e11101a60c9e1f"
  },
  {
    "url": "404.html",
    "revision": "fd22d90f160e0b9be37685edde714f07"
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
    "url": "assets/js/11.7c3a7863.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.2fe9f5c3.js",
    "revision": "943a9b4c79c832871b9b46bb80fcf5e0"
  },
  {
    "url": "assets/js/13.3024d40a.js",
    "revision": "2e7511858d5a31e9624a0186a0da415e"
  },
  {
    "url": "assets/js/14.7947702a.js",
    "revision": "6b48515f35d4b4718ce25674f0b66c8b"
  },
  {
    "url": "assets/js/15.43a3b478.js",
    "revision": "cb0ce36f6bc904862b9a1aaa93a2e1a8"
  },
  {
    "url": "assets/js/16.d8390ca9.js",
    "revision": "cd93fec75327f348f11997daa77f9ab1"
  },
  {
    "url": "assets/js/17.39c6a797.js",
    "revision": "4498ca578e8c1aa7130cc292b6f312a5"
  },
  {
    "url": "assets/js/18.a6a66d33.js",
    "revision": "045c06f2ff15c876606009e4bd5d0a66"
  },
  {
    "url": "assets/js/19.cc5ed8a7.js",
    "revision": "1f4afffa5190e0c56da96170b6c7dcb3"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.048985f1.js",
    "revision": "2156a52dbd32e77471df7cc6fd0f5e07"
  },
  {
    "url": "assets/js/21.45adf415.js",
    "revision": "965ee62ada6480d020c65c79ff2aeb5f"
  },
  {
    "url": "assets/js/22.aa493398.js",
    "revision": "3980ecbdacd9551a3d6ebcb3ce1a840e"
  },
  {
    "url": "assets/js/23.d1bf4d55.js",
    "revision": "c2e6dce521c5a5450e67cc1db163dcf3"
  },
  {
    "url": "assets/js/24.c4e9449b.js",
    "revision": "7704a4d3e6527de97086c50db5f54ed5"
  },
  {
    "url": "assets/js/25.7526fdf1.js",
    "revision": "55f6b6eaa22ed013159c2f899db6b345"
  },
  {
    "url": "assets/js/26.c57801b3.js",
    "revision": "0ccca23ef1e0db84fe0466159f665c41"
  },
  {
    "url": "assets/js/27.d236aa3c.js",
    "revision": "2e35766db8aa66542c56ffaf3b56dcf2"
  },
  {
    "url": "assets/js/28.a8d09e80.js",
    "revision": "19229f2ab954316d48bb385178157cee"
  },
  {
    "url": "assets/js/29.253f97d5.js",
    "revision": "c7bbbab68ede3d542ccaff8ed1b38ff3"
  },
  {
    "url": "assets/js/3.ec25fcd2.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.8a430fc8.js",
    "revision": "1cd4b592982c0cc8cb6b012243754a9d"
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
    "url": "assets/js/33.21a00006.js",
    "revision": "b33c73ac4f872e172d03203cd1166e41"
  },
  {
    "url": "assets/js/34.9de4a761.js",
    "revision": "86e91efcafec4d9bb978785b0675fc5f"
  },
  {
    "url": "assets/js/35.d4f3cdfb.js",
    "revision": "a736941307cbef8ce8f36a6b0c0125ef"
  },
  {
    "url": "assets/js/36.b11c0b59.js",
    "revision": "b0057cd63f8a3868ed69a78a2aa808c3"
  },
  {
    "url": "assets/js/37.c0c494e3.js",
    "revision": "39809d3b1dd038d9909bd34b4ba98a99"
  },
  {
    "url": "assets/js/38.00c7227c.js",
    "revision": "54dd3c0674945371c0aa5d9365d38dc2"
  },
  {
    "url": "assets/js/39.bc1cc0b3.js",
    "revision": "0599a6f9df0294251ff4e1b6ce15877c"
  },
  {
    "url": "assets/js/4.676b4c9b.js",
    "revision": "82398d7da3621fe72ab1cc90af13a25e"
  },
  {
    "url": "assets/js/40.8bbe1cf9.js",
    "revision": "8957052f84ba737358ab7ea733895d80"
  },
  {
    "url": "assets/js/41.60849ede.js",
    "revision": "b64e40fa2cae017f3548e74a5f5ed043"
  },
  {
    "url": "assets/js/42.957f8086.js",
    "revision": "a8bb9472bafe1b330175da1f63326ea2"
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
    "url": "assets/js/9.2bfc82bd.js",
    "revision": "c320be0eaff109446c03547a250ba958"
  },
  {
    "url": "assets/js/app.412c2051.js",
    "revision": "64aaab477f1254043937b5c92089a40c"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "c5282808d9405d3a0c8542565455a440"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "636800cbf3cdc5c24ed8ed352faa3ffd"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "3beba647dea8254afb954112071ef466"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "43f621ed58296ce7c57783d50530b967"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "0a0c7cbf7e082ce4d80625a0e2f29e9c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "ed293b33b45acda7e240fbb833adcec6"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "c750c23633f1fdd7dc8a85f91894b7db"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "e24ca440fa20d24dc794446d2bb776a8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "33f7899dcd3778189d9d3c783953f4ca"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "67da384aaa70938dbc7ad0e48a37e085"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "88456b968c2f770676552ce673dc0d6e"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "2b53720f7bd4d83ab03573d5bab0f90a"
  },
  {
    "url": "home.html",
    "revision": "34975b43b28c630b841a804f96fb91cf"
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
    "revision": "d9f53a5896d3ab848a77278d8df4b7a1"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "d22e25357ae01b56a983111c08bf609d"
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
