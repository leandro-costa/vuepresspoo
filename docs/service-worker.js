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
    "revision": "0bdc176921986261d7d424a624840d8b"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "f16ffce3bc35992fcf21b76a91c31028"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "908260da428b4296345567e4763e7329"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "2cfea4456566930c86aeb5a509fbf55c"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "9d57cd511b7ed3b0dc935acc379be14a"
  },
  {
    "url": "02_java/index.html",
    "revision": "570c84e1b6f54a2bf5339a8f6287e9db"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "4733661348e25ca46409986a67f85749"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "36f1c35bad64616d012674956f8af8cd"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "ca305432cfcdca402264aeeecbfa26f1"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "55e4c9d98d2b06bcb7c252e12006ef38"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "c1ad451d3bfd421fed15bc89b1b68f4a"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "85e0f2b71c879eeb82d67949e1c8e262"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "9a72ba5e507be310d7d4e14bb56bad9a"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "1a4093126f39dd45eb7c47f0f9c47aa9"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "c8c47a853ec77214cbc5de68071629d3"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "d88280295b240f24b0fba065410d81aa"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "9927200bb926b2d547dcc535a6047933"
  },
  {
    "url": "404.html",
    "revision": "6e8800ed068e560c6cc135aec69579a1"
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
    "url": "assets/js/app.ce681eca.js",
    "revision": "08bf0c9a7e2aecb2fe5becb397d39939"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "ae0ba5e3315255bddaa136f8528ff2f0"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "f65e8bb273e44f18b3869fbce35ff7fa"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "de028388d75b2828c88547b65f7e9484"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "a0872316bf5dd8b5e732e3d51f880a51"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "fc4e4ca3c7b8c4e67174da2819731ea8"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "e1c1d0c2aee627ad5b8da1db8b17cdcf"
  },
  {
    "url": "home.html",
    "revision": "0d86fddc3ab839c8fae9934cdc6b411f"
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
    "revision": "c216faa92d0cc5accf9698f0f5172605"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "2de653f5d09fb2110e2800b6dcfd51ca"
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
