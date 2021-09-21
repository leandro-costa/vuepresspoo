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
    "url": "01_paradigmas/01_introducao.html",
    "revision": "754b5b7b12fe6604b63ddb89c1bebfd5"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "607524c5a28269ac7fe7e8977cb1c851"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "7a34fb46dab2bd3327c884c188640725"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "3d5f26190ed93f50f4180e64b8b0d045"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "ae546c52cdb4c4a61941b8957282bbb3"
  },
  {
    "url": "02_java/index.html",
    "revision": "8a0b483cb2fb4c6f0401c77a82792c76"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "44f70e02a1fdfb3efada71db87ac63b1"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "2dcc7ea4266a640bfdebf8e9658c677c"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "8764fe79200e03b32b960efa19231995"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "0cb331f6b6b93acd6d66af6dc623fedd"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "6beb0eeb3643db1dc67816ae1b58c0eb"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "63920161af1acf56d08ebf3715ef97c5"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "68546952ecd9ba819e490aeb079c20b8"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "0f376b7f45e941d33e8bf222f18bf05d"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "94364af721f043678f6eb6df86268ba2"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "1dcc15dc21981d726d2276ffb0826cd7"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "bc43d35e7892c2d0ebf73d3f903ba157"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "93168d14aecfd65ded637caef4857ec7"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "b66cfc99031acd87033cb151679fbb3c"
  },
  {
    "url": "06_threads/index.html",
    "revision": "13fb69f2a3250eeb1a537abfe85f3fe2"
  },
  {
    "url": "404.html",
    "revision": "45aa4545e67f15114e2a1954c74d605b"
  },
  {
    "url": "assets/css/0.styles.59d573e8.css",
    "revision": "81a3b993a7084dba44a9dffa850198b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7b4ca033.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.508eae32.js",
    "revision": "3ff1a815b4d8aa63490a08239a0af083"
  },
  {
    "url": "assets/js/12.fe1a513b.js",
    "revision": "a157bbb88fcd7d3244a3d68e156853b0"
  },
  {
    "url": "assets/js/13.32e9e060.js",
    "revision": "bf5b5176080f7a0e1fc992eabd5477f8"
  },
  {
    "url": "assets/js/14.83526831.js",
    "revision": "4fce1260cfb042f3c598ba3ddf71fbf8"
  },
  {
    "url": "assets/js/15.a6b3b415.js",
    "revision": "fba6bce4c6256fd773eae003cc6a13ab"
  },
  {
    "url": "assets/js/16.9c2a40db.js",
    "revision": "94eae18ed1e133898eaf3e5a0b926fd0"
  },
  {
    "url": "assets/js/17.08411dd6.js",
    "revision": "62969358571a08361d6f2f39add91e56"
  },
  {
    "url": "assets/js/18.4a23eb07.js",
    "revision": "5ed771fb92d5b7940ea62f1eee793491"
  },
  {
    "url": "assets/js/19.a1db8bee.js",
    "revision": "e990d37edb01d129ca5597eb15803b38"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.3f5284fa.js",
    "revision": "d4f9c0428f8bbafb102af4b48a7d90fa"
  },
  {
    "url": "assets/js/21.ea713bbb.js",
    "revision": "0151175d05dc36fcc2bbc5723bcc6f83"
  },
  {
    "url": "assets/js/22.c284fd61.js",
    "revision": "bcf822644f8a26240cbd7d9ec29040a8"
  },
  {
    "url": "assets/js/23.b920c29c.js",
    "revision": "07a5f116f7291f18ffe53e8573709d11"
  },
  {
    "url": "assets/js/24.ea75aba0.js",
    "revision": "7b97e7faaa30faac80bf1bcdec552cad"
  },
  {
    "url": "assets/js/25.74497802.js",
    "revision": "7eb1f40ca1cf4eac01da9c547ffc4c65"
  },
  {
    "url": "assets/js/26.f660bdad.js",
    "revision": "5def0386a4086fd977bd24b102118e45"
  },
  {
    "url": "assets/js/27.0ffc53db.js",
    "revision": "bc11fb4dadc544979c6d47b8afacbf2a"
  },
  {
    "url": "assets/js/28.e3384104.js",
    "revision": "b051e0e0b7233f6db13bee9bf89f4008"
  },
  {
    "url": "assets/js/29.01198fd6.js",
    "revision": "fd6745f44382f346232afeacd835475c"
  },
  {
    "url": "assets/js/3.ec25fcd2.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.c12bb828.js",
    "revision": "8d1cc6845eddae01961bb61dc81f8045"
  },
  {
    "url": "assets/js/31.153355be.js",
    "revision": "81b5ae823e3e84fa5b23da373545005c"
  },
  {
    "url": "assets/js/32.8cf55bc4.js",
    "revision": "f5260893d25b5013701dfbee99dd4eda"
  },
  {
    "url": "assets/js/33.819ffc5d.js",
    "revision": "50ca08d2add45a5514cb555c8be02e91"
  },
  {
    "url": "assets/js/34.833d920d.js",
    "revision": "e22fc1e3c4add19ab958fa5c3113739a"
  },
  {
    "url": "assets/js/35.20c54ece.js",
    "revision": "49124e54331448eab107f47b93b637fa"
  },
  {
    "url": "assets/js/36.664f5938.js",
    "revision": "a043eddcb03715669330030da42d6e2a"
  },
  {
    "url": "assets/js/37.d4428260.js",
    "revision": "2f38425d06f8ca24713a74a1c85b7b79"
  },
  {
    "url": "assets/js/38.28181be3.js",
    "revision": "2daaebc95462ed834ee64f7016e05334"
  },
  {
    "url": "assets/js/39.ab0142e7.js",
    "revision": "289cc0a1ed794027c3ea81996837a429"
  },
  {
    "url": "assets/js/4.676b4c9b.js",
    "revision": "82398d7da3621fe72ab1cc90af13a25e"
  },
  {
    "url": "assets/js/40.8bbe1cf9.js",
    "revision": "8957052f84ba737358ab7ea733895d80"
  },
  {
    "url": "assets/js/41.60849ede.js",
    "revision": "b64e40fa2cae017f3548e74a5f5ed043"
  },
  {
    "url": "assets/js/42.957f8086.js",
    "revision": "a8bb9472bafe1b330175da1f63326ea2"
  },
  {
    "url": "assets/js/5.dad11dfe.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.1ecd167c.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.38b68977.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.830e6465.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.2bfc82bd.js",
    "revision": "c320be0eaff109446c03547a250ba958"
  },
  {
    "url": "assets/js/app.5f241f97.js",
    "revision": "a531280e2d93be0da0ee40f65264a9d3"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "5417f67cefdab123b4fa3683ccb46c12"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "aacc421eae993886263b947523e99e6a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "581c533e9f73b9c22a8193619ad85993"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "f04a63bb717cc47249697d92a1650677"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "fba81609b464429d53ec0d4364da7777"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "df718d55390d88b6be43bd4ea07cfb7e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "f1d9610a6aab3c69bd96251492b937c4"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "6d263040db7d1bd45225f55b0676f9b1"
  },
  {
    "url": "home.html",
    "revision": "d9e35317f737e4b73e782da6cd395e97"
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
    "revision": "756384e12eb7c4c2d12c86206422500d"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "8bc8b3e07df75652f513124dcd5415f8"
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
