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
    "revision": "f49286801df27a9c776268f2f4b28c56"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "202769f81ce89f001d808eda0a20a4ff"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "ccba4c4f56e691827c4045f3e1a8120a"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "84f2cf891a66f90b2d608dacce25eaa3"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "2100657b873f20ee628d1b64dfdf83c9"
  },
  {
    "url": "02_java/index.html",
    "revision": "69823b59265d5742ece280186b478856"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "562049e9ddc9e5b56c934c0235cfe216"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "d81448db0fb48b7a73eed25747f2ed40"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "3f2b6ae834c0a41b679897ca01a52867"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "73e5f32120d4391a2a9a3a59c3b139ad"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "2cb085ac1b982a3da169b386e101f842"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "867fa64dbac9e9d5f59f8ea1e9b73167"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "7f0fc588b1c793e92dce23f658bf5dc3"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "b445472ea722c60b840a6aabeb3ad31f"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "3fd5594dbf2e9f8533c915b9e854d77f"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "6ca2e057b5b997439e90bde59b08eca6"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "1c0f7778636168d961f636087c0037bf"
  },
  {
    "url": "404.html",
    "revision": "de76665b8511e14c1b201e81ebe88b8c"
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
    "url": "assets/js/29.88c14cd2.js",
    "revision": "6bf16961880fac1b8d983d65a5713fc0"
  },
  {
    "url": "assets/js/3.1d354342.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.d8f702a2.js",
    "revision": "427d333905d971c037f797f92e5092fd"
  },
  {
    "url": "assets/js/31.e855095f.js",
    "revision": "b3e265c68bd8994d33d598ecbca6c7c9"
  },
  {
    "url": "assets/js/32.ee3c4741.js",
    "revision": "939a6469189b5d6e812ea3b0744f3157"
  },
  {
    "url": "assets/js/33.2f1e9c33.js",
    "revision": "7deac8e6e29bad54169eeea3de5a6d98"
  },
  {
    "url": "assets/js/34.ee0106c3.js",
    "revision": "86b5c4802e4282bad8c63d855d14ebd3"
  },
  {
    "url": "assets/js/35.954ac4b3.js",
    "revision": "77bfaf4a9abff9cb86df59f962b94f7d"
  },
  {
    "url": "assets/js/36.c2d69ab1.js",
    "revision": "b13c71e33c639b03d1005a3e0b4eca85"
  },
  {
    "url": "assets/js/4.c3217327.js",
    "revision": "8a3dd59c1ff79c3d7e6196a3d254904b"
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
    "url": "assets/js/9.09d105f8.js",
    "revision": "8ff4ab5e92ebcc78df5350e5dd2d5737"
  },
  {
    "url": "assets/js/app.86956e2a.js",
    "revision": "e828453cd261e28050410d0a0be01091"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "361c3afe54720928e864ac484c4d6a06"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "953a867a4254754d71155a0d806820bb"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "0ed6f9214878c787c6bb7c46521b46d1"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "504245c0ea8e82b7c74f3c66eec483ca"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "38f76d4feea0c152f5903e3bfe552f2e"
  },
  {
    "url": "home.html",
    "revision": "af5223d6c32eda2ea5e893ed89bb0914"
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
    "revision": "c33c9f1fbf6cc7c52be575bddfe44c1e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "7ce5e550a5db3d53a5032cfa1a606ad4"
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
