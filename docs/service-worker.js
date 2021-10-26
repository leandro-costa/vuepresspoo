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
    "revision": "4c769ffc4c488e18308f94f4bc296985"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "abb60489c7acacae275d8a013e3ece4e"
  },
  {
    "url": "02_java/index.html",
    "revision": "0f5846dd1657a9680237275606748cb3"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "b823d99079b92caa8acdafeb96440c84"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "944b4770b41d556148aaa3621a2cf22d"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "44b0cbdfca86219d0ea7169a9b713941"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "b8e5bc5fdb3d919e22d37c7e91d98936"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "0903e97646cbb72c6cdb0eac0916fef6"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "6792c21aa37c80b00db8c0e87d0d0300"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "d2327d0790b847b22b0c1b52fd482e9f"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "9d080d860ee2b1104b7edfdab9d166d2"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "5e55210cb7323d5b36b8bb1baf5343de"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "de6b409deb59cde4b6f907e32966b314"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "747dff3e33a890a5c552284474ecfe2c"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "5ce925c0515da7d72d339a514f1f0ed2"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "3e59a23e7197b38a290fa67181d4eb6c"
  },
  {
    "url": "06_threads/index.html",
    "revision": "c4f21f715f95f8b559acddab2bca2498"
  },
  {
    "url": "404.html",
    "revision": "24a040f8df3c0411b12971c7f101757b"
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
    "url": "assets/js/12.dea38362.js",
    "revision": "0b9583feecad8ac266f6214b2c3a1e26"
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
    "url": "assets/js/17.3225336b.js",
    "revision": "fdedca003c1e33ada0d62a02e7502f0d"
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
    "url": "assets/js/33.5b01375e.js",
    "revision": "e34e2cf65b805cafd1997cf140ad73b9"
  },
  {
    "url": "assets/js/34.e456af4c.js",
    "revision": "4d1a9d2abc3ebc5b21a77567264730b1"
  },
  {
    "url": "assets/js/35.1d84ef15.js",
    "revision": "a98a4eacaf52735b70c3f7db0c92dcbe"
  },
  {
    "url": "assets/js/36.bf99f49b.js",
    "revision": "adf80be38ee6f51d8af998d4cd0c64b8"
  },
  {
    "url": "assets/js/37.f38ed7c9.js",
    "revision": "b2eca79cb01b4230404064955645c676"
  },
  {
    "url": "assets/js/38.3542002d.js",
    "revision": "a66a9042e94e7d50f4bf18d6d8dcd16e"
  },
  {
    "url": "assets/js/39.31938578.js",
    "revision": "3922c22779ad3e1e297b205c556f0088"
  },
  {
    "url": "assets/js/4.9e85cc4f.js",
    "revision": "af7a881cf1e111f2bf3b0b520b468d15"
  },
  {
    "url": "assets/js/40.5517eb9b.js",
    "revision": "27e0e34c70f56705bdc6e5419bc7bb40"
  },
  {
    "url": "assets/js/41.834d869e.js",
    "revision": "21ab148d1758fe236df12e7987aeacbc"
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
    "url": "assets/js/9.5e5b4a97.js",
    "revision": "7790c693a3965f1d9636b1bc16b06c2b"
  },
  {
    "url": "assets/js/app.da80e19a.js",
    "revision": "8b0157e5304c8287d6a0ef3ae66489dd"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "1b3a919d2aff522f0c52f7e631049f9f"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "836cc1b743a1972eedba9b215c8a92a0"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "3cfdb248ce156867d9e7a8e41836a5ba"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "11dbfa42f9cf4c39cead724c251ec1db"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "e6ddfc8ba19e07100dc0348be8832dbb"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "155708608e0fd5e49db8b999e7d27643"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "c0db03b94c794ed3400a77f63dcb547e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "abebc3081f87a258723c798e58798310"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "bc9391a3f5385b35d7a5fafc5a3f0e1e"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "15a02d4f958d15ac977258a5fc837f48"
  },
  {
    "url": "home.html",
    "revision": "f6da5b15c448bf9f3a099f847d0c3fcc"
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
    "revision": "92dd383b88fd5d1d90d6aa0e3c5814b6"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "3b1c4998bcfa6f4b8a8505cf652ec38d"
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
