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
    "revision": "04d21864467f6888d5826ae03e6ab143"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "15dd86482f204a35a76b957b019b186f"
  },
  {
    "url": "02_java/index.html",
    "revision": "f274b51e66934e2f8f394cea3615f534"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "72552c619cfc51cda6f205274b721db2"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "0b0f3f3404c427f5497e60ec2a8dd8b2"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "c1ffa918f4fddc4db8f6995c689b4b9c"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "19af7db97d588e09893e65ce80ce421c"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "59d6b5389682cc845df11ba836b6dec6"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "abd8f881f289a705ecc14a5582e6aa01"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "acfdf133f377952c23fb2f3f584f4550"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "0eeea3abf6c6a9e65c404d4f5e98c7cd"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "c6d836e6d5698902020ccb69dba64ca7"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "74c16ab05b19c34c843a5dd15fbec96d"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "3b77d43cdcf0f8832d72ad1f6633edda"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "e740e22224a97dc047674dc8941e76b9"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "73b3220cb76c868a2d30020cc8e589bc"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "e3e9018cf85425af541834cc2a4e16a1"
  },
  {
    "url": "06_threads/index.html",
    "revision": "1ebe4f7e92eadf781c287ad1bedc0531"
  },
  {
    "url": "404.html",
    "revision": "1ada247e46f00d7a8cd2627d0c1a61b0"
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
    "url": "assets/js/31.42dc55b3.js",
    "revision": "a9150e927dce18bf7eb5018b924f5428"
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
    "url": "assets/js/39.b10fc2a1.js",
    "revision": "3d2edd2e12aeb4e471de93ac3ef271a6"
  },
  {
    "url": "assets/js/4.32595d8a.js",
    "revision": "9e946e49c0bb0f30637909832a0a0df4"
  },
  {
    "url": "assets/js/40.5886e8e5.js",
    "revision": "e1ad9c92afa4f96688be2d8e7ade4064"
  },
  {
    "url": "assets/js/41.2c2f8c19.js",
    "revision": "bbcc8de19dc6d74f4a0e46ace5585d73"
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
    "url": "assets/js/app.7dbc1750.js",
    "revision": "c431b63a9570ddaf15cf971663d6c4c5"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "04644bc3021ecad209f49b3892d4024b"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "ede98bb64ae9df366f6640671cf6c74a"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "2cff11a3278fa57fe1433a6119a3ffc3"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "c602a85be276844fac9d34f20b7a628a"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "5869e97ca9a92563c7c2a56b78c4f89b"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "0e6057cc6e399b258dcf15519fbc3ce5"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "1dc38abfc1d756e82def001bf6e314d0"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "bdfced2809f4b4127ba62618a56fd307"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "8441f726ab1879130c39b8fc33c8eb9d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "c0af3c2e17206bd4152d3497b92c6e55"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "00c1e98374c191c0e9bb3a6a7dec44f1"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "5f4eee74e103182fb2c0e759e1f11feb"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "a8372915376bb624ff5a869631f7ed00"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "c2701a200e0bb3d179c03a1315af65a9"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "d8c27a51b0e62956292eaec69175125d"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "af19bf6be8f02c9ce0e72be1be97b8f8"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "e1615a70173ddfa72adb7ba1723626b9"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "7f6e08b997d20871adc276ecb80be787"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "68828bfa5201da0e68da2e0ebbce065d"
  },
  {
    "url": "home.html",
    "revision": "c0542996075d4b7de4b3ec0d589971fd"
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
    "revision": "fd1ac717e58eed3073fc55e5eaa2bf4d"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "b907ef979048bf4de8b1b9fc8239b1c6"
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
