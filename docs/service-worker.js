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
    "revision": "c55528199dc88c2cd398b8b4cf8862dd"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3f24b5c7be51e3c0b7c3bb50261d3fcf"
  },
  {
    "url": "02_java/index.html",
    "revision": "9ae724569eeb5279a88690482f574dde"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "63bd674986756c0f120b233c031e198e"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "fdd36d2c0c6c414a9261dbe23f79eff3"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "a52fd7a51eba6493ad1c33666c36e679"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "bcc387a91edbd6bc7174a9f759616ab1"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "d00365146d277761c038074d824fb516"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "a4e13907afac94995b1df203fca10765"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "06574f4ffa004936b9de3301d0dc7480"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "78b36bee3ea43f2d9ee8dcf6fc3d7b7e"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "2b699e0ab7b0a4ed39c6582db2c830dc"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "2e177bcc289c101829769cc723197e03"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "2128519980cbc9bb4bd5ce08f5bf645e"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "5e024befc34f3c31b6ca7226f60d0dc8"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "2bdcabed23a870ca8b2df8df635cdaeb"
  },
  {
    "url": "06_threads/index.html",
    "revision": "f74b638904f02b6ded6ddc2c2a40dba4"
  },
  {
    "url": "404.html",
    "revision": "4019c92d2a0f9221c75de12db704b60c"
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
    "url": "assets/js/12.3870b0df.js",
    "revision": "ad8e0dfbaea2c17381aeb97e58c336db"
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
    "url": "assets/js/16.2857bef2.js",
    "revision": "abe9fcc899dd0a2e9781a8d7ff9e52dd"
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
    "url": "assets/js/app.c97ef98b.js",
    "revision": "9cc8d1d85ee592f1e2731fab9cf8f57a"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "8144a00bffbfe75c422469ccb47da956"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "87a4a1f5f25d20c9537a72307f1423e1"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "f6ac380fe92191c1a710b1747416dc36"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "9e9a38fb3eef35a4287de3d31dd5dbe8"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "b21f6a161679f0eaac9a2bbc1806c426"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "eaef3ade7d1e748192f16674409aee63"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "27f0b7c6dfd656da31045320e8544d48"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "ddad97ddca6457bb39672e1b3490439c"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "cce9ea10ee17c006dd680f74f493275b"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "fe7cf11c88e9d74cc23911c87e434fc1"
  },
  {
    "url": "home.html",
    "revision": "bc0e14a792c5b130147c58f57ea7b958"
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
    "revision": "4f1c8a224b85318f98893ad234cd11be"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "626141d167aa1235daebc66bd0104052"
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
