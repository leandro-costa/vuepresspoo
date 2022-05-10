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
    "revision": "a0c9810ee7d27f5b416a063d41bfbef6"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "ddbf95e01543a669b974edd684d7619e"
  },
  {
    "url": "02_java/index.html",
    "revision": "53796dbac75d02c2170f2e26016c5d9c"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "1cfe1083f281454a0a3e8107d2ee8013"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "ed3d6678ca62d99dfd10e9e699c112af"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "57b54bf7f97fc10dab6f579d1cb980a1"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "e97061853dcaae3edecf55ba8f49631d"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "a3e6fa5d3d376442df594219e39aa166"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "50872cb74b51a9485e4682503a891bbf"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "603e6041d5c6c652b2622313b0350874"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "ddd4dd254e2d165efab1873a5c25e721"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "1843032e2c43738b4f995011adcb4a9b"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "b76fc19c951b13e1ab66c312a2a14905"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "1dbaa0fba942c51ca35b3753c35af328"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "fbdd11dca9592ad4988527ea2cc0cfb8"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "d4558a01ec29133c77f7e7cdc5aa2f99"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "e2a738c8a686ccb58ad0bc1eebf34751"
  },
  {
    "url": "06_threads/index.html",
    "revision": "b50d8ab2a18fde9b8363cdf03df72738"
  },
  {
    "url": "404.html",
    "revision": "37004ddce55f4590155a3c418fe1812b"
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
    "url": "assets/js/37.b4e87f3a.js",
    "revision": "372a5165ca109a7b456f014a961d03be"
  },
  {
    "url": "assets/js/38.48b4a875.js",
    "revision": "982774b4efed03bbfff0b815c289d130"
  },
  {
    "url": "assets/js/39.79b0c460.js",
    "revision": "6273f7a0cf8000d38e429a3765e8d837"
  },
  {
    "url": "assets/js/4.ae9d79c7.js",
    "revision": "c88ff480c8d8e1b300c9428b4a06efab"
  },
  {
    "url": "assets/js/40.4b8c24f8.js",
    "revision": "cd2a06902c7f6106c560ed5c2fd3f894"
  },
  {
    "url": "assets/js/41.48500b17.js",
    "revision": "a085235a82dead2b66b2d71c3a6bd183"
  },
  {
    "url": "assets/js/42.65c7b7ff.js",
    "revision": "36fe6e1631d4fbc2b2add81b9c85c07f"
  },
  {
    "url": "assets/js/43.bb5143e3.js",
    "revision": "0420f0802897cd9fe103fde282f87587"
  },
  {
    "url": "assets/js/44.052315b8.js",
    "revision": "e152f28582dae1a43fb33386d3c31d0c"
  },
  {
    "url": "assets/js/45.1ff4bf8c.js",
    "revision": "ea4027d3b65e0bf20a7033172e8c40f6"
  },
  {
    "url": "assets/js/46.c1e88b17.js",
    "revision": "c0f52e60db42118cf9203eabbfe99746"
  },
  {
    "url": "assets/js/47.ed948bea.js",
    "revision": "b9b1ad77b6361c67e686a5ceb79aa00f"
  },
  {
    "url": "assets/js/48.d4cb4d4c.js",
    "revision": "88767b84c0bb288285a3f72495b1f4e4"
  },
  {
    "url": "assets/js/49.2699ca00.js",
    "revision": "94ae06516c5375b2c7c8c46b7799acc0"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/50.ff033066.js",
    "revision": "314086af98b5e9565d6f07f4a70830b2"
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
    "url": "assets/js/9.8d4deb1d.js",
    "revision": "867e689b0a47582ebc1ade3daf2b24c0"
  },
  {
    "url": "assets/js/app.c6f8549d.js",
    "revision": "2b5f6d8e3e6528db5edc24bc1c78e91f"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "2adfe12dd429cc9adffc6ffbc1872b00"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "e3ad31bfd253e8ac4ecffac119defa2f"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "b0f6a25dcb5e62ac4707219f74ef2c2f"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "50fc49c14657265d47a485244247b802"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "844e3bfe9618adb10ec43f9d4f0ec071"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "3598c4acb071fb4e21c971d7ffdd86ff"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "9e63632891b834da9c872c775a71ab5f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "637deb874c410f9358018719086b22e9"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "3958e232348fd15a848d785945ba3f77"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "987200604455c7ea7013a67d8a60b367"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "44ea051f0572e0b65bf24c2a67b6a405"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "b5b63ae2d29e5c5fd2ba5f2c11221d3e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "1fbd4fe347066f373bef7b9463f6e071"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "60b8c3a0454d30b0b197f5639a8b80d6"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "5bf2da27aaa8711a1d92aef98f339725"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "790a7830b9ee5fa1aa1f9247230184b0"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "2ae00766373300f17bb08504adb4bf56"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "3251a22bf176da60eaf14dbdf9f2f2c5"
  },
  {
    "url": "home.html",
    "revision": "f6f3ae1e09feeb64e766e8e530ea4579"
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
    "revision": "e62692f03599bc269552de8f50a917f5"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "cc8b071e437f3737c4a32f34ab5f996b"
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
