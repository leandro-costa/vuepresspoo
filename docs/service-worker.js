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
    "revision": "fb0d4d542f609b756798723cd390876a"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3175c17b7589307cf974e584e7b6f363"
  },
  {
    "url": "02_java/index.html",
    "revision": "339c25f4b7e4abd5652dd7d345ad4562"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "86b58f42840f3e7246dc9396189d582d"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "ade539798a5ee853e0bb838976104a5f"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "98937fb5b04cc29596dc91918c91f2a7"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "7a5dbf6cc8fd726687d8be24f31afa2d"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "4421504c83b690000b3dd6a61deead7c"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "a412e7acfb49db35e40ac267482ebc56"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "4cc6c5a529157c985acdb373e7a86f69"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "530d1a2090b4e4a50a42102a58ee3173"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "746e145f53f8646b89b02a6d15d718de"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "24b95aa7d7e0b372ff69270d9e5fa151"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "d05a4d4fcad4de9a24d23ccb7f4e411d"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "2c37737786873f31808b8d60801569e3"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "b8df24a595ecc337a08c0d82e872a20a"
  },
  {
    "url": "06_threads/index.html",
    "revision": "9496a1ea8a356d03418bb8360c014572"
  },
  {
    "url": "404.html",
    "revision": "a96d10bfe5d7e4871a230906c2e5221f"
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
    "url": "assets/js/19.39944244.js",
    "revision": "4a306f34e001659f9c098a811a80cd0f"
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
    "url": "assets/js/app.68a5d76d.js",
    "revision": "c963be22a72ca3108d31a38c8fb2cb94"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "e8b36ac93eb599f17467973ac08e3be7"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "3bc4242bedf603a06e5f51df3c75dea4"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "0b47c54b9a7504fe9948e63f37750b40"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "5f5e7c563936476369c6e5b85a62ab64"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "d7cef7439d4c8e47b1637b43e9ce300c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "b64a5e46befa1a2ebfa834c5eea315b7"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "aaf9d24ad6e533ccb7a25b2885462cc3"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "d7d8529b400b9d6123abcac8f162693a"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "11326d06a111228d4733d83d56ca40a6"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "5dfd2b44b8d613803cb0bcf1ab8cb3c0"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "13ef20b8edd1f9c1f36833824876ea9d"
  },
  {
    "url": "home.html",
    "revision": "31fd601dd4c5758ba6c4435e70364e84"
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
    "revision": "17bb4344758c69fb56fb9ad55d36a00b"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "5dc461eb9c29299ea32a82a01d1e360b"
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
