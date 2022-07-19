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
    "revision": "09ddc8e0da6421cf1ff79a476c7901e1"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "ef6203603f6effe00ed2da1fb3aefba3"
  },
  {
    "url": "02_java/index.html",
    "revision": "b4669082bd89e21b3fc8b98870ab860f"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "0a732e2b2d45ba151537bd8d335bafd0"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "3e7a024986aa34b4a1bf05a19dc6e1e6"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "53b75b27d2a12daeaab8a9b9d1c0148b"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "41a4a61ee63eeccefcdac536519d34c5"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "6d2627388c45dc6b237b6e429848db71"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "20744e8e5de3c7157585bd9f80217a9d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "33c46306235258f7c2c56ce5ae7bb226"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "3697790566acdc005e591957f6d83992"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "b3b59d6e51e54d23af6506b6c2e936c5"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "acfcf3f981e3960298b4d7f16ad1fb9f"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "0e93ce990b4026f20c9a5fdd7d2c7f87"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "21b714a306b2ddc61f5f3d1fe5703ba2"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "a98f71813570ee9ca6562eb79ec0f808"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "e3ac195f1ea3d59708629d9399a3ec79"
  },
  {
    "url": "06_Generics/index.html",
    "revision": "49b0e11c891e1440948d77f1e0aef043"
  },
  {
    "url": "07_APIData/index.html",
    "revision": "456c0a86edde82f9527d2d1cb0069cab"
  },
  {
    "url": "07_Streams/index.html",
    "revision": "c54b4693b9cf89acae399d9a848cdfd1"
  },
  {
    "url": "09_threads/index.html",
    "revision": "363d7377955ce938274a2812908d9133"
  },
  {
    "url": "404.html",
    "revision": "2ad7e74f540470f918d5575fcee54c91"
  },
  {
    "url": "assets/css/0.styles.4885eba6.css",
    "revision": "944e60704c038a9008ba8c26ff33457c"
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
    "url": "assets/js/15.065ecb9a.js",
    "revision": "2206b3050a26370f96384b6e34ede508"
  },
  {
    "url": "assets/js/16.d954c2bc.js",
    "revision": "0f66df366051ecb7c1ab1a5b03284583"
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
    "url": "assets/js/21.ac805510.js",
    "revision": "d3cbba774890a80e197049088c19dd0d"
  },
  {
    "url": "assets/js/22.370139fd.js",
    "revision": "17aa41aa47c81f606a208d0f19f714b7"
  },
  {
    "url": "assets/js/23.48b095ff.js",
    "revision": "1b5b9a6d88e1f0a2a2565ce1b60e9e58"
  },
  {
    "url": "assets/js/24.4d812bdd.js",
    "revision": "f60d87b579f83c6291244790810c82af"
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
    "url": "assets/js/27.c34795b1.js",
    "revision": "483d3a834cc062da199a10502ac0237a"
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
    "url": "assets/js/31.6be78a16.js",
    "revision": "19c122cb3b35f5ca2c21e99f46203752"
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
    "url": "assets/js/39.2b760b06.js",
    "revision": "bf35d0e3ab2ae3bb064f0906f08948d7"
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
    "url": "assets/js/app.c8f1c91b.js",
    "revision": "58902b7a119e5e4d824fb1c336a48710"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "1e448788b5b1ab792a25fdc50e29727b"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "64dedf639677f85eeae9a7e7e2dd6741"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "27bf14ed46b58e3b706515ce67c81ba6"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "1a0d8cb048e8c7de640bc1f8fc1e73a4"
  },
  {
    "url": "Exercicios/ExercicioAbstract/index.html",
    "revision": "a3d1f00efde226891ec23fe47ea24717"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "b32daa6b63e30960c1b6e85147fa1646"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "3b65d1bd1d92206e6282376a9020f1aa"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "f8b6a8a42a7131ce5d9c8f5aa6ab03dd"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "a5862fcee2da6013fbf04a457765a1e2"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "76ad061ec7ea53e7e2292715ea113b89"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "505326fd98c507ec7ca00a87d2b52670"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "5f31a30bd08d202fba0b12e8062ba2c2"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "acfdfd525502e035d24118cb4828c804"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "f3e19575cb94b2b37a6248e8a91905aa"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "2c32f2f71f4f66499a7e645a1748e3d8"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "d2df9f77b28acb3aa0e22afaaf4614e1"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "c82adcba02a1f09e49d3deff341a31d2"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "297b1317b2371ff1066fd0ede076357e"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "91ac408c822ba417488d58671bffdf49"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "b74663f88f8a3cf6751c5afd9e7c5e69"
  },
  {
    "url": "home.html",
    "revision": "b9a4480933e0f7721c048accc0003fa7"
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
    "revision": "99dd449718e96e724eb97d0e89de6816"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "e670a898a508a89b1c8f3621e9d9e8d0"
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
