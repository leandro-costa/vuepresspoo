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
    "revision": "e915203090f4d831a98265575c2ac8f8"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "5f4a52331e73e223de91fe278efa1fb3"
  },
  {
    "url": "02_java/index.html",
    "revision": "9554c807a41fd8f7f20e7b4a46cfc078"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "fc62ea3d94469dfd1615cb27ce80b3d7"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "73cdb51b74fb31a4005705bace7d422b"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "19e37089189c92bd12e6f419fa4f28d0"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "2e1f8b1baad0ee9480a4ea678ec25bfe"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "383c68359a67fe4ce72645d244ce919d"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "cf655d4ecd17aafc0d46e4e848127a69"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "bd3ef21b21c7fa25f9f1619bb4b2faeb"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "e174c38c694106ef93f1d3919a93d131"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "2093ca8f81fa3440beeb68c84c30fa13"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "15b742d29e6c5ce15d315e1e5e856ca4"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "7bf1e20dd6bcaf90519b19057c2110a7"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "efd44187dac4a37ed26434600f018a1b"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "b4ed24f1a4d47ac370c1cc9ce8e23260"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "eabbaf386300cddf0c8fd5927718a80f"
  },
  {
    "url": "06_threads/index.html",
    "revision": "51cb99c70d651287006e4b7dc89d824a"
  },
  {
    "url": "404.html",
    "revision": "1482ed622574006932981505d3b79675"
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
    "url": "assets/js/31.f4e26480.js",
    "revision": "ba83c57f4f869b1907c5a6ebf357c231"
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
    "url": "assets/js/app.29ae5b75.js",
    "revision": "c06d0b45fd15cb86d7bc2a5ce4bada13"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "4b560329e12159a7d4770e34568cb174"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "969aeed1f5a48eae913a9343c0f2015e"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "344ea900d1f0aab0dac4d1290f1f1bb0"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "dadcc808d550c5004cc4743a846d5dfd"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "86154f29c964733093bd8965c10fce3d"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "276fb92de3152fa4b412e9ce9f13b312"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "7c26f5f5c1727561f27f46b20f13b1cf"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "aa19aca01833ccdc80d1d2462357f337"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "2a207bd1a826de08f583e46439bcdc8d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "ced82dfb7bf57e815e5dc20700c887c9"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "f270871e80be76c1fea6a033b410d697"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "d11fa3131447b15036be754d49154ce4"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "3d95184a7c3f89d2bccfcd4fcff50eed"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "43c7229fc405e8ac369ab7db3d066032"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "2cbaf844ce7315bbd536cb1ac94e6896"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "543b66026af22860b3242d6d7cca0678"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "efb81f610bff25973c1a31fdf9a39478"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "12906f257b7092f4ebcd65fa26006864"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "ac89229c04a6e1a2f3c167c4c56d0d96"
  },
  {
    "url": "home.html",
    "revision": "4b82ff1cbeba713c9214f9c010aaa4de"
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
    "revision": "5e3c74e7607ed40bcbfe0efbed5dded2"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "e311c82b67267289faf92eca3031e6ab"
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
