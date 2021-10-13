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
    "revision": "641a2b43548621447cd2ce16b0d339a4"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "b8e841ed38a89be55f8ef84103ce2383"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "b378fa8efbc0922d3d83ef42c0e1f635"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "afbc9b2fbd3f5c47e66ee8dfc436643e"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "36dd0ab378b0e5f118ecfb0600ac437e"
  },
  {
    "url": "02_java/index.html",
    "revision": "023006fdeabcec5888741cea0262d9b1"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "594c5cbc2535b4fe95a1e715e0979565"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "b021670f22095c1729d9dc93b8411072"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "1d4683986881f6707f40704dbc7e5a2c"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "ba891a73af17d70aa9693ec1da81b084"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "04764a2450313f3bda7513f27031b4bf"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "07d607a2d8aeeba4f3dd5579bad04f75"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "650e04467a5dbd0ec3a8c8565c3b29fb"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "2182af913c1b49a522227fccaa7e7ff5"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "c7e7ee2bc5ef558fb8cf5aaa23c56262"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "9495d12fe1bdcc82039ec16d1fbe55d5"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "da6a96ad92dd5281444be11226f742c8"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "99cdf6787f478e1e96352a97a1f99a83"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "2a981c565d912c6094c4107ed7932a46"
  },
  {
    "url": "06_threads/index.html",
    "revision": "95aa6ccd4df4ad2b831b865206f387ff"
  },
  {
    "url": "404.html",
    "revision": "6c87a5bffde2c7970bfd7328188f91a4"
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
    "url": "assets/js/12.a50a46a9.js",
    "revision": "37f2d7f9841097510db93dee1496f8dc"
  },
  {
    "url": "assets/js/13.fd3965e1.js",
    "revision": "aeb6643fc3d1f84c180a81d9cf386479"
  },
  {
    "url": "assets/js/14.0a06750f.js",
    "revision": "dfbbc37afa87177dfabe4f519436c9d3"
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
    "url": "assets/js/24.977233b8.js",
    "revision": "c31b5cb657b3e1b40ef8990245783807"
  },
  {
    "url": "assets/js/25.30590f35.js",
    "revision": "10760c1e341ddf229f815f22008eb33f"
  },
  {
    "url": "assets/js/26.f400d7fa.js",
    "revision": "8262e0f6bb9bf232fd5af2f2700be93e"
  },
  {
    "url": "assets/js/27.76e5ef69.js",
    "revision": "2d0bcada5cdd50fe540bd68ea99407cc"
  },
  {
    "url": "assets/js/28.7a560311.js",
    "revision": "4d0a842f351ceff40b8b3a0d44e63969"
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
    "url": "assets/js/39.60622868.js",
    "revision": "2592563b9a7a00bc84b4cd0a6495e027"
  },
  {
    "url": "assets/js/4.3e32741f.js",
    "revision": "305906ead6340d473ce5c2f68486ddf5"
  },
  {
    "url": "assets/js/40.8c03eb5a.js",
    "revision": "36c176f81639c0606a0a9265351075fa"
  },
  {
    "url": "assets/js/41.1e9e2a56.js",
    "revision": "e3273306a6e7949fba7034b5925949d6"
  },
  {
    "url": "assets/js/42.639af4a5.js",
    "revision": "f5baa91f0bb658f82860cda0b9454e31"
  },
  {
    "url": "assets/js/43.436d0857.js",
    "revision": "fecc62584ba42fc6f4dc43fae0a546f7"
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
    "url": "assets/js/9.37f8b311.js",
    "revision": "0cab83a4101caa9424141221a8ade726"
  },
  {
    "url": "assets/js/app.1249d0f8.js",
    "revision": "99442548819e2a37f34485ba6f1298eb"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "ff5f875fc8191aa51d5b2c08aedac514"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "a2228fad91dc2fbb51ba79e05c89379e"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "8d2a1ac3959c8f636aebd0fe3b8322d0"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "18c2a1ee917cba82b37df5ed5f3b54a2"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "cd10a6839a2f977967832c71694c787c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "c5e4b40f9a91268469d982d66669c62b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "115a9a149f2aee870f7dafb6dd3586e9"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "7594ec19ba7d47ec80ce068c6dcc1fa4"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "0a1971b0c620f3c41ccefa71d627adb7"
  },
  {
    "url": "home.html",
    "revision": "35d3cd79d0929be191e3d0b8ffe56706"
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
    "revision": "303bd331fbc33a32c4e73d56957bf1ef"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "cb234df8b4c88aaeab49bf23d4f8a3a3"
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
