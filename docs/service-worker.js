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
    "revision": "fd3d55cd09760dcd2c29215d93822e23"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "99d9580cfda8527b5d335bba5c5c6869"
  },
  {
    "url": "02_java/index.html",
    "revision": "b07e9f35e4094854d300109dcd4a82f4"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "42d53465ce721d386489bd8077e1afd4"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "80742de24cfd61f258e495c1d63fbf4b"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "4c01575402e75ba16381967fed7eeae9"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "da9c2b20c5293ffb9f9d2517489585c7"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "367f4d3abd1255b0953977ee62d6c53b"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "9aabdd9f211339c36a2bb39fe521a927"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "15b4bd83d3cefcff5af07819cc46e68e"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "db3c1f3bff6aad5b8d2bd133d5dd592d"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "4bc9aeb5ac0d113be544d31523c12d92"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "48feeb94660a2eea47dfbdcbe4c10f5b"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "a56b25d3cf6f60989b734f7bac0617f0"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "addd00088cba5d488071a293e3caa599"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "5dbed53eb06ed219d696c3aef3256281"
  },
  {
    "url": "06_threads/index.html",
    "revision": "434f5384c1f4b635b99f79e5fcb322b3"
  },
  {
    "url": "404.html",
    "revision": "3a33087d63fe9acc1c273e7ce6dac9d4"
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
    "url": "assets/js/14.c2baa870.js",
    "revision": "56829b43c88d9cb8af63825e5e920569"
  },
  {
    "url": "assets/js/15.39c8e3c6.js",
    "revision": "795de711e20d0dbfbe9c09771f97d121"
  },
  {
    "url": "assets/js/16.f928c398.js",
    "revision": "5ae38f1230a90bf50a688822e81e4bc4"
  },
  {
    "url": "assets/js/17.d161293e.js",
    "revision": "c1aad98849d4d7a5c7a40fc5a29085c1"
  },
  {
    "url": "assets/js/18.360495fa.js",
    "revision": "ba55eeb37356371bfdcc657ef0a1fa09"
  },
  {
    "url": "assets/js/19.4ca4d295.js",
    "revision": "fe0598f4f0e958b71101a7e22eff5e3c"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.a36a8934.js",
    "revision": "cd3287307ef32bbb6a49f5e1c0c480c1"
  },
  {
    "url": "assets/js/21.a19beb55.js",
    "revision": "02926485d797aa20aed46407a49f8e2c"
  },
  {
    "url": "assets/js/22.5df75ae5.js",
    "revision": "2ca5a41e54d555a8cc1f5aaa07ad3f1c"
  },
  {
    "url": "assets/js/23.3156c8e4.js",
    "revision": "59739e16475ba68f93ebefe446d4e040"
  },
  {
    "url": "assets/js/24.718ffc63.js",
    "revision": "604e89dc94a6b2d57c0c2b3f27077938"
  },
  {
    "url": "assets/js/25.8f247b02.js",
    "revision": "1ac3d128df466d578bc3395a240c13eb"
  },
  {
    "url": "assets/js/26.aaffd379.js",
    "revision": "044d1898d9cd6019a3bd4e6566880dc4"
  },
  {
    "url": "assets/js/27.b2412c5a.js",
    "revision": "90854086c86aaf0e08d46cc2d740f05e"
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
    "url": "assets/js/3.ec25fcd2.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
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
    "url": "assets/js/app.fa67e520.js",
    "revision": "e5166f58061d12d7b28b448f6a6be604"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "bd124667a92976ec6bd97a03b84f0644"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "68b990e1b98433a6910436ae9ea25ad4"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "6e0c8a577df7d3102c06aa0847755447"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "d844a6b5a3d4c72f9ff5289bd944acad"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "6368e6fb39b42ee684f7bcd3a95af006"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "2dc56e5b2db6546a635834c7ed1449ea"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "d9b683f79500cd9d6085554531e782c1"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "2f0acf72e8f8334d2a67201f3c3fd16b"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "2ed6a6cafc5299e9ac7c4ebb3e269829"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "d95fd40d3be81ba31ea7919ca348558a"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "5b9e8095502ef6e6243f49759176a7e2"
  },
  {
    "url": "home.html",
    "revision": "c7fdb8dc62015b62566c9a2e3b9291dd"
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
    "revision": "ae88c871613f9ca6aca963cdd885d13a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "586e3c3c9a50989a1da0038fd6f97313"
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
