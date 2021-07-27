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
    "revision": "3905ae34f2ec83dedefa4024ca4dc52f"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "3a79770ca7bcab79ba7f6c03ced072db"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "14f7337b98e0448c89e4e52edb117b65"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "f7c0d06108929a25e7f520681af22cb3"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "7b2a544af5df74f03a27cce34d4a01ba"
  },
  {
    "url": "02_java/index.html",
    "revision": "1582b2c1e7b90646e32b9f092ec31941"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "7514d47e2c00549a5facec62b2069c8c"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "6de458f009cfec40644161985be9e429"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "76d343363860a0f19f62fa756b86d539"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "ef6fb7fb1a2999ee9450ba0d5a972239"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "1fc11547075860ebd82a25edb404cb73"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "d393b505814b5ae2b51a380080f510f6"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "04f3b3b0eeb6519bd171c3e75f1f173e"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "2de406fabe10856d4ddb7b467e82bac0"
  },
  {
    "url": "404.html",
    "revision": "afbc7a8d7d9a0680168d462555104007"
  },
  {
    "url": "assets/css/0.styles.619f263b.css",
    "revision": "7aa05540633a7b8100e5a20ead282e52"
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
    "url": "assets/js/15.e5a736ef.js",
    "revision": "8d897424831de7188565a2248fb4676a"
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
    "url": "assets/js/24.718ffc63.js",
    "revision": "604e89dc94a6b2d57c0c2b3f27077938"
  },
  {
    "url": "assets/js/25.ab1bd8d0.js",
    "revision": "e7b5388decb3ca4e3bd8485ac3d0b2a9"
  },
  {
    "url": "assets/js/26.84e4cc99.js",
    "revision": "c8ff015287bc84ea6a834fe5119ef86a"
  },
  {
    "url": "assets/js/27.58d72acc.js",
    "revision": "fca0d71bd64110e6f2547f7b8b692f92"
  },
  {
    "url": "assets/js/28.70011c88.js",
    "revision": "b9aec8cbc929dafd9fcacb31a5475698"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.b876e5e0.js",
    "revision": "1a61ee6e28070dc71d6a8a07ba070a1b"
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
    "url": "assets/js/9.240e06f6.js",
    "revision": "5664003ff5b11b451047f449ae93b7ad"
  },
  {
    "url": "assets/js/app.b1f3dc5b.js",
    "revision": "1e52794c33b7023699fecb3a509fcf53"
  },
  {
    "url": "home.html",
    "revision": "0cf7961933da43a3930e4a5cb3ebee99"
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
    "revision": "3ff897df298af0c8cc59c35fad26acb9"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "478a431be97d093bf181e9219553590d"
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
