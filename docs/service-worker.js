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
    "revision": "8265a5d237177b09ec245b1ab68d8cdc"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "5f7e8d6425ba0c5b4d061a448761ca95"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "53671b7ee3dc4c0fa270ec37cc129668"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "d8634587ecada76db4dadeb3a0e6d86c"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "36e291253d77b5d0d09e322d5f7e13b9"
  },
  {
    "url": "02_java/index.html",
    "revision": "9f7a2379ee1a0b5bd16905babcd42a56"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "4a0cf143bb0fc59eb8672f06a1464c6e"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "929d226cef7a36bec81c39ea85fc7816"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "cd9ed7a7de816ab149d74364f49142ce"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "7aa981c55a82feca0697c00ab8d5bcc0"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "6013def0992eebcac2dd3484c44c099d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "68e921b1430b9a6ed2272ce4cfa11a63"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "fafb157862d27e2e85f1282204348998"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "edebadcb5bc350aae05d60f772bebc91"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "982f6b30234e61f357dfcd2a63faf015"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "865554bad03bbbb59cda8f7682aa49b0"
  },
  {
    "url": "404.html",
    "revision": "fd3bcf2903c3c052d7d615b63de7c442"
  },
  {
    "url": "assets/css/0.styles.83b067b6.css",
    "revision": "2d3468f60fbe7bcc2755bdab32fc7030"
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
    "url": "assets/js/19.908a659a.js",
    "revision": "640f697c4f64850a0402843ced206599"
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
    "url": "assets/js/24.a9f9b677.js",
    "revision": "214d5c07477baa8274aeb67b602804bf"
  },
  {
    "url": "assets/js/25.e014809c.js",
    "revision": "9425d7059f664ccd0b5dbc2e3ad8c5e7"
  },
  {
    "url": "assets/js/26.00c64e15.js",
    "revision": "7175ce3d1347ccdfdc49b9171413301b"
  },
  {
    "url": "assets/js/27.261ed067.js",
    "revision": "7cedca19c94d1c05df46ad9aa34f827c"
  },
  {
    "url": "assets/js/28.a38509de.js",
    "revision": "2c540bafad140cdf8205137eb9d5b954"
  },
  {
    "url": "assets/js/29.14030d86.js",
    "revision": "933367c5607e6e34c1c590113a491940"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.f7c6a0c4.js",
    "revision": "02d522b9620f4233927923cf28582194"
  },
  {
    "url": "assets/js/4.4764b7c6.js",
    "revision": "11ad946773781baa6c8d083cb96a0e01"
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
    "url": "assets/js/9.32ffaf4e.js",
    "revision": "71163a1a566e5354869b4343c493744a"
  },
  {
    "url": "assets/js/app.ee4b4f9d.js",
    "revision": "5eceff90232ad0c27a74385973f302d9"
  },
  {
    "url": "home.html",
    "revision": "b31e51884ae82d2af8c027c70ac5bc9e"
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
    "revision": "a66693c11f3efc97983890a33077817f"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "f5e0cc08b4b899b2d1505da358864884"
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
