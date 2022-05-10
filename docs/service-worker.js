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
    "revision": "82206bcda1149740bfa2d256517a0603"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "1a56eeed920c01932a92cb8713e98f31"
  },
  {
    "url": "02_java/index.html",
    "revision": "5b8ad22b06a7df7779ecb98f6c1a6530"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "05aa5f4bf56fa482e6284be894f04df9"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "d161b3fd5ffcb4ae70d538d7481e1f73"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "dd65036eb422b4de7761a065c4f8cc60"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "0098dd02e5f86ca1218a1d2b75d48752"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "f6a1568d1d469cc61b43d45234ab48c3"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "218a5cec407ff5f50402e053963cab94"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "c0520396f4790f4f9c63229b95df0321"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "f4fa255ed5f86abbbd8c5661b20a3264"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "3016721a859463c63197e8e96b986986"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "6738c1126e832ff91b3bf648b867f2b1"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "ac75b5328e399549447b48fe302654df"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "3f6656af5d7ab14fa69c3230c23edad5"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "07699619619cf67306f7925a03e764fb"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "80e3bc5c4b486e3fca65749b3bb4ca05"
  },
  {
    "url": "06_threads/index.html",
    "revision": "2542bd8ea16a28f6d88d0b089d5f4c01"
  },
  {
    "url": "404.html",
    "revision": "f2597fa21c79b551346a1504f366c4bb"
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
    "url": "assets/js/18.80dc01db.js",
    "revision": "a1a80dc133649a2b97a638926eedf2cc"
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
    "url": "assets/js/20.fa1ac127.js",
    "revision": "1c89cbf4afc18fd8def5cd092f73d866"
  },
  {
    "url": "assets/js/21.40ece0a0.js",
    "revision": "4f28ec3da54b4225283e3d8b09936313"
  },
  {
    "url": "assets/js/22.1aa660ce.js",
    "revision": "5fdbd299f8faff4fa2e8b91000d944d5"
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
    "url": "assets/js/30.bf897cbe.js",
    "revision": "87f2452c73765c3690f678c5f7495628"
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
    "url": "assets/js/36.84510c67.js",
    "revision": "75e65484f5e246627e52b04d974e1176"
  },
  {
    "url": "assets/js/37.977d5e56.js",
    "revision": "783494389f464cc76a906a0315302553"
  },
  {
    "url": "assets/js/38.5f2c1664.js",
    "revision": "d1cc25705c6a1c8b5137001a380a429d"
  },
  {
    "url": "assets/js/39.0238c787.js",
    "revision": "c9ba4b60a4cb4cbd5973726ce4cb255c"
  },
  {
    "url": "assets/js/4.32595d8a.js",
    "revision": "9e946e49c0bb0f30637909832a0a0df4"
  },
  {
    "url": "assets/js/40.261d2b79.js",
    "revision": "bbbf5923c06ce96e2b23b59ab692cc07"
  },
  {
    "url": "assets/js/41.20fdc667.js",
    "revision": "57be5800a148cfe7dcde0f308a1dde7a"
  },
  {
    "url": "assets/js/42.2c8b99aa.js",
    "revision": "b3353c2b4b9fbf32fbbf4225fc6e3b0a"
  },
  {
    "url": "assets/js/43.2007bb87.js",
    "revision": "ddd09b048e0b097991b69155c486a502"
  },
  {
    "url": "assets/js/44.b0f9ea59.js",
    "revision": "d291aa8ed4d759adde52521203839047"
  },
  {
    "url": "assets/js/45.9c8daf55.js",
    "revision": "62cf405513bb08ac272fbb262d5830d3"
  },
  {
    "url": "assets/js/46.868604df.js",
    "revision": "78486b5ef8d03bed30c70146549f9d41"
  },
  {
    "url": "assets/js/47.66decdea.js",
    "revision": "d33add3eee49147922856177e000563c"
  },
  {
    "url": "assets/js/48.f47d6719.js",
    "revision": "37fe713ebaf83fdf3315dfcefcfccd00"
  },
  {
    "url": "assets/js/49.02a475cc.js",
    "revision": "9c5e0075896675e0d00313a477c16161"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/50.55ed320a.js",
    "revision": "295dd51e95a5bd295e722624c7387aeb"
  },
  {
    "url": "assets/js/51.9ea1a4c1.js",
    "revision": "0d863571b3f15411ada1271ff4883aa8"
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
    "url": "assets/js/9.940f3301.js",
    "revision": "f8e238b51995810df4c2b7a10280f367"
  },
  {
    "url": "assets/js/app.d7d3df1f.js",
    "revision": "d2bfb3a5eb090b1196debf30a3e74e98"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "fa41d8a4420d7e782c77cb2192e9edef"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "f8f552f277c5396ff01ba921a62b8753"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "d454f0989d9f982f5e47b5e0acd4be9a"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "209d10c43b7ca49a8cdb52d99fd36bb5"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "e41accbe7cf5a17a481e6a9f81fa661e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "a6ca2e41d57d537becb2becbf5087358"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "249b0e001f9e5fbe7a6b4df33fc8d74f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "124ca99bab8c9a967c5d574b0df736e8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "eb49ab6c5f69f122d08e121b5dd0c2c2"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "631f7819b4498d53c567a78358b555aa"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "89d972e0514816883da025cf22ff1bec"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "8d1c93b9056690debd8242fc897219b0"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "f295bf18625b4e5ffd9046463681d438"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "2f7e6f1244b81fcc6ad18888b51bd126"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "478b03abc31934bdb4c0505b00121e1a"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "02897bacba3abc17a1d7d877533e5e62"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "64fcf79818aa2924be0c03f1b2ce54bd"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "27ee962c8423bb0aba181872f3532a7a"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "478faaacdb548cbb8a5c31aaa219201a"
  },
  {
    "url": "home.html",
    "revision": "c0c20bd2befcb502121602675e6113cf"
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
    "revision": "d2ac241216a714458e15656d87e84435"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "9460ae05a0b34280a4315fc355e68076"
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
