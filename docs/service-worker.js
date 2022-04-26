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
    "revision": "77ee1f61339a1c73443297855796ebb9"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "4e0572e3cefefda29136a58f39244687"
  },
  {
    "url": "02_java/index.html",
    "revision": "a700121c527132143b8560d79bd2633a"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "691ed9b9863c69f258b9910f7bfe18c6"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "3f782ca14c1caff9f729b67305bc0671"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "390a290b9547165c9f28e61f11d7f2b7"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "1e84455ad69d6addbaf7acada62f01bf"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "b43bb59c56c21cc5fceed3de74d763d7"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "f2aae51b54c707e49baa7beedc221335"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "bcefde4a5a7dacec30e69c68d39d9371"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "cbd909761d023ac62c6db40eaf23dbfa"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "621227cecf0b7fa6648317c12b60e460"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "cf7b033ff8c4a664ce05933ac92a386c"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "cb8a395c6fa250c249506b8056d39275"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "e664df0aaf2d42fe034850d6c4175d24"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "7e4fd9c6bfc4a7db6b5d4732b5224d5f"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "0bd2111f1137bf7d77950cfcd169ec49"
  },
  {
    "url": "06_threads/index.html",
    "revision": "4fdbec0c7f33f9653837223d4fb02050"
  },
  {
    "url": "404.html",
    "revision": "19b1bb72e981ccfe2e9d557e0344bd68"
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
    "url": "assets/js/app.b30b1b23.js",
    "revision": "6091d76dbb081e0bbad4759e117605df"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "2c3ac881ee97c09a8ab667a959ba6cac"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "17aa53b4f849f44a65b8fd5a4cee4b4c"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "8742d594a8527e395dbf821886643429"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "5fb45bb93486bd4cf1b2086032fc616a"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "ef8e48a9d6e9438442f582629ea22b43"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "18c942dade0557d3d3a43af2cb215040"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "aec78cf483226974e5dbe6580a6c86b7"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "d419c65ccc09b8365f6bcf856e4f5799"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "18ad925416046b45b60c1aa2897ffd5c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "5671ec000a43192fe38279f62a38d771"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "39064f150964c647408e010d19e654a5"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "d69aed3ca6bb5e6436b75c0754954f17"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "cba2e38bc2b1634b72c961c72e8b8682"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "690419d502799fe70dd0f10204fa713e"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "ea1fdc549f2fbb370e4ac48f75ae864c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "2a57eb82b445a23bd5dc4e66afe2cae1"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "415a82244e56d8b000ee5e853b8d7f47"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "a5cf0556a0029534b59182110f694cb8"
  },
  {
    "url": "home.html",
    "revision": "42b1e879f153b484d5f384e6b76c4099"
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
    "revision": "d5865da14fa296ce5aeb78c58c822453"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "c321fda89593c8242bc192ffea0cbce4"
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
