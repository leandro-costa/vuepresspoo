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
    "revision": "1bf542b20a15033de7cd8a60c09491e6"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "412fc2d34b2cf789f01c97674a3bfa91"
  },
  {
    "url": "02_java/index.html",
    "revision": "8548ccda5ed6b581e10930ec3c3ccf20"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "e49afbe1267031358328983d4eab3a66"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "7b9f7a12f95d2e80f3d06f5bdd0477aa"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "fdbea926605a52aeba679abe71ce32f9"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "679a423ec3f6521ab57e071f213bea5e"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "1c67f82b59537bcec87d1aad8546e335"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "968e601e8cfb4046861a5bc02bf42e9c"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "161c5af21e033d357835bccc0dc5182c"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "98a884c502ff17f43c213d9994360505"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "2100c339bf144201bb16dfc7c721cb54"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "f9ffd4040c3328fcf47702a67d8732b2"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "6d9fda2ac1011e4f34aff891706f4340"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "19bacc24389e3650fa383a1b1fbe1b69"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "7c178f2cb1a6a1bb25c062cb9931c16e"
  },
  {
    "url": "06_threads/index.html",
    "revision": "98aee09e22a5039b61fbb8095dc5a634"
  },
  {
    "url": "404.html",
    "revision": "2739126cad7e5c60a9ab2821256c0b8c"
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
    "url": "assets/js/12.2cdaeee5.js",
    "revision": "91fad432cffe405f65baf953cd4a9273"
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
    "url": "assets/js/16.60aadcd5.js",
    "revision": "1996fe651254cfd9cb7b9eebbe72cd78"
  },
  {
    "url": "assets/js/17.308e309c.js",
    "revision": "c95d47f2789b9e52a6410113d00f9f83"
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
    "url": "assets/js/33.52040c80.js",
    "revision": "401d83bc71099d52fa016e42df06815f"
  },
  {
    "url": "assets/js/34.12c4d243.js",
    "revision": "51562c2eeb358ec576764a7b84537c3f"
  },
  {
    "url": "assets/js/35.40a1231e.js",
    "revision": "36a475603ab92325fe2a2f204b9291b4"
  },
  {
    "url": "assets/js/36.0e7579b9.js",
    "revision": "e0abd911681c0e25280214048afdb3e5"
  },
  {
    "url": "assets/js/37.bf1d3045.js",
    "revision": "76738f227fb41b7d95c370943139071b"
  },
  {
    "url": "assets/js/38.6fa9b425.js",
    "revision": "c1b387e0078540f6e8d82adb5ba08d95"
  },
  {
    "url": "assets/js/39.e63f69c6.js",
    "revision": "f0290ebc58105036d3a58cb3661f3e51"
  },
  {
    "url": "assets/js/4.f2d7dd10.js",
    "revision": "9c97d80452cedf1de1d3d2158b9289f0"
  },
  {
    "url": "assets/js/40.41f4f9c8.js",
    "revision": "41d7d91a8fbf4ff0792ea4741e0b3bf6"
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
    "url": "assets/js/9.34c3bb36.js",
    "revision": "0940cd9aa181dc880eb25fb427b1080a"
  },
  {
    "url": "assets/js/app.4ec1696c.js",
    "revision": "a30fe6d7807ed1df225ab19464729230"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "1c676b1aeac362b7a6334cbc622622f8"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "f0155fa3d3fbe2a336120ce27e1939fc"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "45838c5f22cd14a02d81d5e0ea07d0a1"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "136331ab1475532a83f57f71bb2d80c5"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "3a322a3d5a97103394301218e94a3c66"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "024ea0286ba4610c61bf4951c8de5cbc"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "1aebe6686ac886863baa141d358de88e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "ec16d13842cf5ce17f4bf4e7e4e55e9f"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "54e61d28c585acfb4bbd8628e8669720"
  },
  {
    "url": "home.html",
    "revision": "bc74840b48238f6166a4dc05820055fa"
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
    "revision": "22e9a63e139d5429c818f5788602c2ec"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "b8f7b0265b5628e4dbd335506c3d68da"
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
