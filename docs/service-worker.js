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
    "revision": "79299a2b4a05c0d41ee34d784c410f82"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3986e9eef609a5c8c553cf3f272ee046"
  },
  {
    "url": "02_java/index.html",
    "revision": "0fe3355be80d6aedbd29932652f961bb"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "326121368ab359ae94ce7bf5e27bc04e"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "af3d83ebffc7cc79f1556bc599a0b701"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "03cb6315971cb9590b62edd9b5ab4c48"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "7f10cf75a3fb0898ead620ff057f3362"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "055b058044fd61cf6ff1fa0af8bf80de"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "19db352f0b643f34fa5a5a3c3aa79d32"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "da28720b1079025c30fa1b066366b7bc"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "fa0476f01ed6b37e35e64f57d33048da"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "eefc2702f4894a6886e800308cf634f2"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "1290adcfd9568b09dce1798e2503b7a1"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "f550b4ade7ffcfec2f608845c66ddc11"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "58798476eec24d35eb2b020d3db80a9b"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "d6d1c2edd363517dbd29e73c6188d62d"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "2e2aac282d902a635a4e29aa325290da"
  },
  {
    "url": "06_Generics/index.html",
    "revision": "229716a18966f5bcbbd42f8e86962eb3"
  },
  {
    "url": "07_APIData/index.html",
    "revision": "73171bc795c3b2ec101fe20faac2de5b"
  },
  {
    "url": "07_Streams/index.html",
    "revision": "1f2f7ef024d8cc2ebd9218c06ce7b7cb"
  },
  {
    "url": "09_threads/index.html",
    "revision": "4d071f7f2aecacb744c60808004e2fdc"
  },
  {
    "url": "404.html",
    "revision": "fa0078373fb7f0df5cc4ab3b634301e4"
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
    "url": "assets/js/26.357284b6.js",
    "revision": "6834a6a43a69dd3bbc4fd5e2b6d80d8b"
  },
  {
    "url": "assets/js/27.102a295f.js",
    "revision": "fd4728646c8c66fb029bac9dd423d844"
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
    "url": "assets/js/32.06061fec.js",
    "revision": "2ebd3142805edcabde8b637a4ce0bffc"
  },
  {
    "url": "assets/js/33.9635bc2a.js",
    "revision": "8200304f0a59205ed45f6c088d8db326"
  },
  {
    "url": "assets/js/34.ca376438.js",
    "revision": "76d16cd81af16750e1d0df9312d0d9b1"
  },
  {
    "url": "assets/js/35.77670290.js",
    "revision": "0095c88105c2c69017a3ba9b2bb52a40"
  },
  {
    "url": "assets/js/36.34b898b4.js",
    "revision": "a42a1dee84f17e5de9e0477fd5913d38"
  },
  {
    "url": "assets/js/37.7daf4d30.js",
    "revision": "12a1285ca33922c91cd194b84c5cc25d"
  },
  {
    "url": "assets/js/38.1515dbd6.js",
    "revision": "53745444e40323e83f3ccf08925ac716"
  },
  {
    "url": "assets/js/39.7149a88a.js",
    "revision": "c9f80139241566326e050ac1010f1d08"
  },
  {
    "url": "assets/js/4.d8a305cb.js",
    "revision": "016a90a68127d50d8cd5a3d9a571a4ec"
  },
  {
    "url": "assets/js/40.d771ffce.js",
    "revision": "ab94ad15ee01d8bffafd86da4867daec"
  },
  {
    "url": "assets/js/41.e0480cc2.js",
    "revision": "0572863308926e7625f4899056772697"
  },
  {
    "url": "assets/js/42.be4e1a2f.js",
    "revision": "c050bdaff98dfdb7c629094ac6060bc2"
  },
  {
    "url": "assets/js/43.121eb857.js",
    "revision": "2ca80b6d3c3e0dc48e9e8d6972cf01e0"
  },
  {
    "url": "assets/js/44.bf304baf.js",
    "revision": "34b5bb587b69be5d2f927f59637a8ced"
  },
  {
    "url": "assets/js/45.3091eb24.js",
    "revision": "7d0e1b60749b102469e4a996751bfb9d"
  },
  {
    "url": "assets/js/46.b14c4419.js",
    "revision": "31e79808fda5d23a93521e9f9c626d95"
  },
  {
    "url": "assets/js/47.dbfe60cb.js",
    "revision": "62c7c8cf3de64ea626cfc5c0ee9f5704"
  },
  {
    "url": "assets/js/48.44bdca9c.js",
    "revision": "7957495fc5319865bffe42fd2034947a"
  },
  {
    "url": "assets/js/49.2c2ad7d2.js",
    "revision": "cadafa25e6e2d7a6fdf71142461cb613"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/50.3ae2f745.js",
    "revision": "12a1af9ba28cd2515e725b8009810d33"
  },
  {
    "url": "assets/js/51.b5e494c1.js",
    "revision": "baedc2a7500538d89a7edd0945be2398"
  },
  {
    "url": "assets/js/52.d1dba01a.js",
    "revision": "1be1d8b20596972ea96dc73e5afa2907"
  },
  {
    "url": "assets/js/53.a567ebca.js",
    "revision": "f07d292e8cea3d600c3410fbb43f6079"
  },
  {
    "url": "assets/js/54.9993b8d2.js",
    "revision": "70fbad74c16fac3bedb5cde1d67cd5fb"
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
    "url": "assets/js/9.9104792a.js",
    "revision": "662c06e25903f3fc9bd3fd416e3a779a"
  },
  {
    "url": "assets/js/app.6c0c96ef.js",
    "revision": "d4523a49b16a85a32c32b631ec606fed"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "da781ad5accb51d84d6fa179b573ae97"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "4a2129cf37d33b8ae05a79fe985d58fc"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "017603b8de0ee6e5cc3fe55d88e3f5c3"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "e8e64be87711ea1cc329d8fa097b2600"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "59fcd93cb6c3e6b2559380722d8ae37d"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "54fa711481c3371ab3a936c14a163a25"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "b6ec4e0fe487a77cc1c116339b132f40"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "de4308b67c97d90b7c5648320ee6afe1"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "c9381d615b79dbc57bb2a6385fc89c4f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "386c45fb1b37123b1f84265bdc1419bd"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "60b4bb59cd2b75b0caf9e5019a4a957b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "405c20f62be7870188df7c819b31cd08"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "efeb8a7dee321342aed00b9da1a61088"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "02c9f5f92477a535e1206be9bd351e67"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "2674f2e6c0d91e2406768ff80efdee29"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "b2db785adacfafac2920bb47b28e92a2"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "a6e4d212b97f33619f46f699b0da3e51"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "ae76994e6f0a7f726547916d96f84ca7"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "d8f515682824c05bf7701da141afdf64"
  },
  {
    "url": "home.html",
    "revision": "aa2907a3c42a49197e3c5d990b95538c"
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
    "revision": "3e39b63bd5ed2659d8633c3732d76277"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "972f8ecf03fd741669043e3136843d7a"
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
