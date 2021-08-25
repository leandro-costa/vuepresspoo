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
    "revision": "09ad914d497e25839d501f65d40ed3c7"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "80639bcbf309e39ab0639bdcb893a165"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "67c6a224f56f46a8e6405c4477e2125e"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "02b0cee6a86fcb4f81997a3870532030"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "84035fd22eaba3e810a7b587514204b2"
  },
  {
    "url": "02_java/index.html",
    "revision": "2a17ea154dab592a80611bfdcb74280d"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "21b548ccb61798fa0a410e61ea9dcfd7"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "9534f21944a5d28728aa7631b165c367"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "4f282fa9235180ae69ea8ddb2841756a"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "ba4b262c65df04f4ecd7ced36bcb0fc7"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "45ed487ad1177bf9f540e7affd93ecf7"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "05e766561b7df400b8f7fe41ee94fabe"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "fd37c010584852799b1d6f309177a2d1"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "a83f6b99c53f88cfee2261d833b6a7e1"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "afa9b994a5bfadd71717a6076e71652e"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "7412c4a366465c5c85a46203d00e5100"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "fda9c193322fb754afed03c1564f49e7"
  },
  {
    "url": "404.html",
    "revision": "c39dd2084f26c0e7c4aafb868a8ffbe5"
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
    "url": "assets/js/19.4ddb4cce.js",
    "revision": "0a85bbae55baefdc8ab951e90a8ca985"
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
    "url": "assets/js/24.fc24f47a.js",
    "revision": "654e55548d0f758c5d651d6b973ab3e4"
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
    "url": "assets/js/28.3a31e347.js",
    "revision": "0b0a82af0030b02b1749a7489565a568"
  },
  {
    "url": "assets/js/29.ce844c0d.js",
    "revision": "375af4c4ace7d9be0b8925f343aab4ed"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.a0018d25.js",
    "revision": "b34d6d8a3361bdb9466a0e3fac4823b8"
  },
  {
    "url": "assets/js/31.97513f0a.js",
    "revision": "15a9ac0110d2d83bd6530e48af68926b"
  },
  {
    "url": "assets/js/32.dc632ce1.js",
    "revision": "391bd66c5d743801911f5f9210a60970"
  },
  {
    "url": "assets/js/33.3d4fa2da.js",
    "revision": "a9a50064bab4a675a512ebe6ad264567"
  },
  {
    "url": "assets/js/34.b0639435.js",
    "revision": "df919351d511f2a7f124d87f2a9ad2ee"
  },
  {
    "url": "assets/js/35.0b528102.js",
    "revision": "d78d5ea616613e2cc3275f47db41feda"
  },
  {
    "url": "assets/js/36.2c18367d.js",
    "revision": "c5414f37442bf7a66c70a2a7951c7a97"
  },
  {
    "url": "assets/js/37.d4ccce3d.js",
    "revision": "4ea6d3c4f8239eed9b5a7d0339570c67"
  },
  {
    "url": "assets/js/4.5ecba947.js",
    "revision": "5c6dd0aa53553271f8c5179645e36d38"
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
    "url": "assets/js/9.f833c9a5.js",
    "revision": "dc2a1e9cfe65648bd71f4d272a140b95"
  },
  {
    "url": "assets/js/app.f7902571.js",
    "revision": "534a3bcf0abe798543962718ad13e650"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "6566ce5e90a786617a1bf7d5baf003b7"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "b9a50f89a1a78554750f41345c6d7383"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "e652220560b2fbb53768403725d8aa1e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "5e9795af39434341f79f6c3a079fb675"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "4acebb68b3c361a1103da35e8f4b8301"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "7637220b47804867609ab0cb243213fb"
  },
  {
    "url": "home.html",
    "revision": "952264f86902bf620e8da5a24efc0af8"
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
    "revision": "96d4797d2e3aa06b603a2c3d9a8c9557"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "62fcb3137c457b3a2c6b96fa7ecf5c9b"
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
