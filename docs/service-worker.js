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
    "revision": "62beaa62c5c7cedd56fefdfd228c8d10"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "e28df30773f228645032e4f8d813dbd4"
  },
  {
    "url": "02_java/index.html",
    "revision": "fbd81601f017349b48884d183795338c"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "5b9727959b1fb56919300f4f263545d0"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "d214b39ea0b2b38f250a58a57099a67c"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "1af1922f3a2f958dec738f2e27b36bb9"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "0341fc5bd0850d2e6389380ba03053a8"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "3f494b2855e432ead18e61c5ae07f355"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "a1bbec1d5816c8401119a3bcad8f8e94"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "dbc1a549d06b28d4d9ce53a142997a48"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "5f1afbbff5501f0e98f6d7f520a6b9fd"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "aed5b4c1463ead6dbc505defd6b0be81"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "85ee513fd13beb50371a258ce3ed93e4"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "8588cf95d80dc54e07f8a165bf62eed5"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "4bf33b616e2604597fd403b7b42ed8e4"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "9b8127032affb5329f3d19797874a68a"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "408a015d426470449c2c9933f20ad6d4"
  },
  {
    "url": "06_threads/index.html",
    "revision": "9d92a32b55011df32f27fc7d1b7ccc4e"
  },
  {
    "url": "404.html",
    "revision": "8bd7e5d05efc3265057a0f9e6f85a76f"
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
    "url": "assets/js/18.19957246.js",
    "revision": "e2e9d38da80acdba25f5c8e3295c2885"
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
    "url": "assets/js/20.4cd42019.js",
    "revision": "a273a519c67ed5588693c3e9ffb5410c"
  },
  {
    "url": "assets/js/21.40ece0a0.js",
    "revision": "4f28ec3da54b4225283e3d8b09936313"
  },
  {
    "url": "assets/js/22.4c9b94e0.js",
    "revision": "752c24564774b0dd466b9d7b874150f7"
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
    "url": "assets/js/26.8d5c3db6.js",
    "revision": "78095b77a2a7422f1289f38fb7c3b1b6"
  },
  {
    "url": "assets/js/27.a3cc6c4b.js",
    "revision": "0928fec3d6c372b60263e6cc82cc00fa"
  },
  {
    "url": "assets/js/28.19661e8a.js",
    "revision": "19b46164daaad630362e4a0216e28cd7"
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
    "url": "assets/js/30.8aa0f8b7.js",
    "revision": "a63ddfcc559c849d751ec1dffe2b6b48"
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
    "url": "assets/js/36.22c7b7d2.js",
    "revision": "e5814f99f85d03dfe94776c3f29f927e"
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
    "url": "assets/js/45.da0c08cf.js",
    "revision": "a0d174e959687a7aec543b31e75fb79f"
  },
  {
    "url": "assets/js/46.ceb49603.js",
    "revision": "edc965cbc8226fcb081d9b86c4c9896f"
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
    "url": "assets/js/app.da250b93.js",
    "revision": "28cf918a16ebf24e69e0d54769936ecb"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "0cdbcc1c424a3d87414d79e03ec9010b"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "ece65436d342276506687b818344010c"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "263e3d44e03a884686d80884d326bd70"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "725b426db605264546bed0448fa233c6"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "b9fa868de17565e83d3cc12d9941e92c"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "27fa4df0aac2a0c47cc9950991e7993f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "5a86ac09389e10e3d3fe107b9723d955"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "e4c1a9e85fc13219e51c8e495c622acf"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "e428653d4ea4a917a2b541045924efa8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "ecc465f145f3eb261d45a3adfde19e31"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "88718c3c139e144466ea190dc09644a5"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "f4ddd5e4cdb7da660d2bff8cba6137cc"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "a5bd0bd78f4acedfdce9f3c38dd69ce6"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "864e642915dbbd93abc19460fb4c3f5b"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "c0036c54594a6c3fcd4d7a18a55bfd7f"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "d66da6b1a758ce2f87a3a94cade4cff1"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "52d774282e0d32b9632ab96327ff5084"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "9121b37adcc2cf817cc84b3d04d59be8"
  },
  {
    "url": "home.html",
    "revision": "f6c11889f7e3fc88ca2f0495a8912d9a"
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
    "revision": "35ab4abf6f328ca5e086e722204e9ac5"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "c3d576d53ee06ad50e0b7906f12d7a45"
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
