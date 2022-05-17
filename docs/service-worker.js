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
    "revision": "ccb77b2ea859404509d7549626d46994"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3dc7479e895d47d99b62d2bcf6b21888"
  },
  {
    "url": "02_java/index.html",
    "revision": "c99ddcf2edf5c3096bc9a834c3248732"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "5f3d48d4e9d37f176bab740cfcc76434"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "8a031a9068565734fbda661df30f3cb5"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "bbd40e68d34315b337670f9baf751e75"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "348b7ad1568b9003f2682f82c36541f0"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "86cc14d356983c8db6aabc1433bbd081"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "71f54524120c8f9769ea8a785eb09dd7"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "afb524c4af55f7abebf3b5ba8185bafd"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "debfa3fca0a9d922b0501ebb35931eef"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "9a27ece85ee2956892a7ae12321b8a8d"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "48c4e858f03b3e920c97ecbdcb89aef8"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "18581b9a6d88c2c4eb5a6bb9f08a68e6"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "f1d7d815b9af436e92b7b8528c2b596d"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "ca72173d77be0ca67ed40695fa1faa00"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "573bc49ab6de8da9487f183fb1579377"
  },
  {
    "url": "06_Generics/index.html",
    "revision": "58ca56e4f66528adc72838f7d62e877a"
  },
  {
    "url": "07_APIData/index.html",
    "revision": "432181249d22b994a2c41c95dc2e6e46"
  },
  {
    "url": "07_Streams/index.html",
    "revision": "3482cca7870f1a92d9b9ca91ad6f0b83"
  },
  {
    "url": "09_threads/index.html",
    "revision": "35b9cfbcda8fa07b25443fc7582b23f9"
  },
  {
    "url": "404.html",
    "revision": "12e21eaad4e8a7ef00b5c62e9c749d11"
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
    "url": "assets/js/26.2c1245bc.js",
    "revision": "0a32b0c06e953902a0f6097caf7dc38b"
  },
  {
    "url": "assets/js/27.d4affb5d.js",
    "revision": "b1782c07024b3af128e3d0613a452167"
  },
  {
    "url": "assets/js/28.cd1c9e98.js",
    "revision": "2bac3a9c177cb13619f7023f25a3d1a5"
  },
  {
    "url": "assets/js/29.32b2e3f1.js",
    "revision": "44e5dffe4391a24d0c158868ca6abe26"
  },
  {
    "url": "assets/js/3.2dbd240a.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.1c98479e.js",
    "revision": "d617c44e4879b440c86ee21aabc239c0"
  },
  {
    "url": "assets/js/31.ce3fca8f.js",
    "revision": "6849e0a1ba5d9f7f68331c3e92a29736"
  },
  {
    "url": "assets/js/32.d5e8a03a.js",
    "revision": "fe63d4f5665de18017fb418c23bbccf1"
  },
  {
    "url": "assets/js/33.21252948.js",
    "revision": "8766f1d7f9e2c862de1797dc26e8090d"
  },
  {
    "url": "assets/js/34.fba37c70.js",
    "revision": "312bb5dbd5c984a2e0aa26ba4cd62e07"
  },
  {
    "url": "assets/js/35.61474c35.js",
    "revision": "9ab91eb5b34b54f35d657c3f673666f2"
  },
  {
    "url": "assets/js/36.6e7172fe.js",
    "revision": "f4b530e569c382eca1323fa9a309962b"
  },
  {
    "url": "assets/js/37.cf3954d1.js",
    "revision": "f8b1520a809de01ae446247d23027a21"
  },
  {
    "url": "assets/js/38.51afb68a.js",
    "revision": "4b551aba8be5c346285089e2b5e193e4"
  },
  {
    "url": "assets/js/39.fdf2f651.js",
    "revision": "d65c52fae4c7eb24e120251667f00931"
  },
  {
    "url": "assets/js/4.214dba5a.js",
    "revision": "59843ed6c4e451b7f5dd3cc0f8fbc753"
  },
  {
    "url": "assets/js/40.c3731204.js",
    "revision": "e4e3b209b410157fcf0af0a40c4a50cf"
  },
  {
    "url": "assets/js/41.167b1bbc.js",
    "revision": "593aee6ba36d64ff2ab4e773bbcc4d25"
  },
  {
    "url": "assets/js/42.14c6536d.js",
    "revision": "b25c6c83ad6374718fc43fbaa9b3848d"
  },
  {
    "url": "assets/js/43.65a30995.js",
    "revision": "f5ece66ec48baf04cbe636bd0ae22457"
  },
  {
    "url": "assets/js/44.7747c116.js",
    "revision": "8cec5cce8e590e095bfd3644ce11449d"
  },
  {
    "url": "assets/js/45.bff911ba.js",
    "revision": "4446abe3dd512aec4f023caa461507da"
  },
  {
    "url": "assets/js/46.4cfd4f0c.js",
    "revision": "6babf2b9d1c485eefddd3659b7f3530b"
  },
  {
    "url": "assets/js/47.3310bb42.js",
    "revision": "eb0030780eba81ec31e3900399bb1e80"
  },
  {
    "url": "assets/js/48.4fa3f3b0.js",
    "revision": "cd4bf87a429b6cc86f1765744127594b"
  },
  {
    "url": "assets/js/49.262e6ff1.js",
    "revision": "85939247a85e8928d74dc40c1896f6d0"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/50.065185c4.js",
    "revision": "10e3962c8b1f2287a27f169824ceddc3"
  },
  {
    "url": "assets/js/51.a7c35eab.js",
    "revision": "2846e46d0e3366acf585d35e4764a416"
  },
  {
    "url": "assets/js/52.f33be55f.js",
    "revision": "ef6a99ad5f5cac6f88ac6f8d7368cf55"
  },
  {
    "url": "assets/js/53.fa37c7ad.js",
    "revision": "cbb481ef59331792b2a46eafa3b25395"
  },
  {
    "url": "assets/js/54.da00dde5.js",
    "revision": "3e786d620514bce136c9dfcfa00a0acb"
  },
  {
    "url": "assets/js/55.3ce47054.js",
    "revision": "2f2ff69f7c69b31a38cf30d3c6f37fd9"
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
    "url": "assets/js/9.7e0fb215.js",
    "revision": "e283197080e5ba9b93f12633b053f437"
  },
  {
    "url": "assets/js/app.83a2b346.js",
    "revision": "2021ac341e3bd56b06310751e537d072"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "dba34243922d2258e4f3c1585a17b056"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "ebe98bccc7609d93ff9d03b14b7da947"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "aaca77cd4fe40c6627bd12a97113f8e7"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "5d6f1812c41fbf1208f405eb96113aaa"
  },
  {
    "url": "Exercicios/ExercicioAbstract/index.html",
    "revision": "87ba7b7b16b6861e240b52d91101a7c6"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "424e4741e93cebf3c4e28084cdfff269"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "52cf04ca55047f9299d3efd0f45761c2"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "4b355bab5ae516c80ed5b65afb55f6f1"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "9ce6776e2f1c1ae02f5fd7920f1f7235"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "d3a6266453615ffdbcf872401e31b3da"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "1146237371e6159db594cda9ea737ad0"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "c66ef1ac64cb2d86f1373fc7033c2323"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "68ac682ed082c9f5a3c6ebd9ba1a1b94"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "9a05b6c0d6c761ab1bda201ce9f68a2c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "0026416831328e0348bbc3ffdab2d988"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "f8da55a6c41697cde91fcf42f3221956"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "ad8c0e560203cb0ccbfd7dce37daa7f2"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "7eb606ecd4e39feec96d149e17b0cd45"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "5e4e4c92f3a46ab2befb02241e50a277"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "5720f005aba37b6abccc9dbac3456660"
  },
  {
    "url": "home.html",
    "revision": "aef7f83ec4a8d84e0d5a680024c4f0b8"
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
    "revision": "15a785f36b6c30f05b9c5f3cf5505a27"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "dc23e74436f80e3159134dde128efd06"
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
