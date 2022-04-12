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
    "revision": "e9495b176c217d0ba5b3719a1354fd06"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "e187c71fe20bae96b2127caf75311c30"
  },
  {
    "url": "02_java/index.html",
    "revision": "c0bc2b14877b4a8ceec1fd94e812aa45"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "2ee5ee6cd17802b18f84d33b9aa72578"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "579ab1919c9736bc281dfc68a97c2dc7"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "f107afa01296bc1a4dd4733e09211f50"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "abdc8dc3c8ac8b48c16dac4e9f4c9bee"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "021f1b223a0695a0b9fd0bdb98327be3"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "5a1c8552412d4597af9457e3502cdc32"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "7fbf3ef0637ea0c8a6baa351a601cd00"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "2a2907ac7062c986bd4bf0f54d11a17f"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "5167ecc7993d534644fb2cb6a816a3d3"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "339a4c520eb572dc68ace24b29da7673"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "8b8c3a354ec04ee934a0e18f79cd7ac9"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "a732e4ca4d5a4415e191203399a33b11"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "7f65d36fe25379c630f321b1e80acaa9"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "304c99eb3ca3df387f59e98d0662b797"
  },
  {
    "url": "06_threads/index.html",
    "revision": "5c84d632aaf0c4bbd84f4759f5cbd353"
  },
  {
    "url": "404.html",
    "revision": "550cbc5e1aee66a76574d3954aea1944"
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
    "url": "assets/js/app.b09d5428.js",
    "revision": "267c120912d6c8c558d0718803b612b4"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "291049593a9655ff34d46c792a826428"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "43a51f60613d6edb30f91e5c0b1e5eda"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "17fec0051cbb707559fb3d392fd2809e"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "8e37af528d25c308781cfd08a9c4926b"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "2636e7f3db53d86216e569b11fcb4e54"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "8f4393180fe08f1cbb7504de281685b2"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "4a911b9ddf472dc3c6ca32ec923075be"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "ce1975bf184191638e50d66ba1d138c7"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "8c37ba301a5d742d7ddf51c9a284280d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "3d80b6c05fe01f6160252c10301c12aa"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "9fe6aba185da429a12b99c8bdbe88e6f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "f3f06fcb5afad6f3ec65212e9276f795"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "f46b53cd0d8f6a7f0212f6ef3086b557"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "0f4cd7b31da1960a32af9bc1b0bedce6"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "2619b2c8de27d7275fa1519b9b8a2a7c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "0d65d9dcdc18366e51242df5cd86ef91"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "8add9db5123381f2a64af784e3174ec0"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "d011b629d432ade6e11d0aa69cf77248"
  },
  {
    "url": "home.html",
    "revision": "c4a9d98896ebfaeee6f2bb65a35748a4"
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
    "revision": "cbe379e7fc78d73fed51cab9c1a29367"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "e2948cd5daa66d778841baff97025adc"
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
