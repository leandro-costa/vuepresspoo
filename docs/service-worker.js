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
    "revision": "eef95b76bd2e8edd194da51f2fbb8939"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "1cf9810eb3257c93060a22c61106aeab"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "2408f5a984770d827df153495a2681e6"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "2747f774ae22eebb514e1d4a4ce44c5d"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "352a7eb04e08a83fb2bedbd81efead88"
  },
  {
    "url": "02_java/index.html",
    "revision": "c012abc9a7b6186ac972ba9fd0319811"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "0ac47224fd64763133dc31b8b46ded4a"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "d3a6e84bbf4c0d65b27a520edeff9890"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "0277c76c1a673d6fde645519d9207213"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "b6eaf6a4796dc443997a20ebe84390ca"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "024817bdf1d1b801e8c53168ffe8c8f9"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "0af0715a9b78903e6b0a2bd08bfd62f9"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "e1bd8c0221c3455e9c82aceb896b964b"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "2031ec81f6ac111e0378813e653f30cc"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "19ce00c6c0ef87825851050db31b01a2"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "af5eca52004e5fe9ddc8d011a4b5ecbb"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "73253f8bbaf51b0197379c3f720795a9"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "2aa75e8242eec8b2e269750e011cb6d2"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "af504d6a226776e92476e3d44d50a496"
  },
  {
    "url": "06_threads/index.html",
    "revision": "9e61e63b8b8f1cb14ea1d1407495434c"
  },
  {
    "url": "404.html",
    "revision": "c4dd5bb6b9859c1a6243dd66f8fb5ed5"
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
    "url": "assets/js/14.08e266d2.js",
    "revision": "57d8de6a37e0522ec980b1475b09c288"
  },
  {
    "url": "assets/js/15.5ca6e5f0.js",
    "revision": "e31a1b46912855938109350159d73679"
  },
  {
    "url": "assets/js/16.b82bbeda.js",
    "revision": "26b46c86259f989eb468d43409b01c0e"
  },
  {
    "url": "assets/js/17.b7add5b3.js",
    "revision": "532247c9dbdc70040e7ed4e5e0b9070e"
  },
  {
    "url": "assets/js/18.b2ba15dd.js",
    "revision": "255efc6ce415ed1f201f88a45203f554"
  },
  {
    "url": "assets/js/19.4a986fcf.js",
    "revision": "203f80688601506cbb8aabfb03ad62eb"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.0cb43454.js",
    "revision": "219cc5a96f47321d3135d77cdf7dc247"
  },
  {
    "url": "assets/js/21.856ff6d3.js",
    "revision": "5398db116835aab78c0f9b78baf33253"
  },
  {
    "url": "assets/js/22.6761d774.js",
    "revision": "e3f9055a87457141940b4d90aee7d380"
  },
  {
    "url": "assets/js/23.2d801b10.js",
    "revision": "2c7d82bd327c4dfa6f7a0e0e94ef9a07"
  },
  {
    "url": "assets/js/24.b2a2c199.js",
    "revision": "be023a9460d0de6cab9ce4ce11f57653"
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
    "url": "assets/js/39.60622868.js",
    "revision": "2592563b9a7a00bc84b4cd0a6495e027"
  },
  {
    "url": "assets/js/4.3e32741f.js",
    "revision": "305906ead6340d473ce5c2f68486ddf5"
  },
  {
    "url": "assets/js/40.7c09b8d1.js",
    "revision": "0ec790639d271e8dcfbc64bb9aeb5a0f"
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
    "url": "assets/js/app.0364ddf9.js",
    "revision": "c9d503be91520a5dd22273a81aff9d4e"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "e51594603c18d6446a7c1331681005ec"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "37382f0878ff54bbabba49b99a8f9abd"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "8816e748ddf9503b66021458d586c8dd"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "5d8974c70a03bb959e26a12a2ed5655a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "ff4057a41f7db385f80d66a796615721"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "b168e26a3ab8a04501bbf7223f45c1d2"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "d5cc410805bf48e5869ba20d1a63b3d4"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "8ded8c47838287dad19d14ed12a09e6f"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "1de95205ab8182d4a5e196bd87d240b4"
  },
  {
    "url": "home.html",
    "revision": "0f4150613d6a957fea9a1c90bfb38dd0"
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
    "revision": "ae4f564b281ccd3298c7f52452385f1e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "35b12fc04bae2c8c42f653c3bb4fa4a3"
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
