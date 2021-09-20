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
    "revision": "c3bc4ddbfa203a755a10dbecc39209e5"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "53cc7484ccd4395da362a3e48b2e7077"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "2eebf902b641219f9102f8c7706e5647"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "cefcbcb2120d586ab4d4968686e52808"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "ba6eb29984f929d30ba5ec6acbbcf124"
  },
  {
    "url": "02_java/index.html",
    "revision": "6051ba4335aa10ff5ec2e5270164a3d9"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "768730bf6dcd234ffbf73c71bbc02a8c"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "3b467e71488bbcc712b60a46b5fb93a7"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "614fdfda03cda5da6c6f68172385b24d"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "5c19f0b64bb3266e4609e1133b7f76aa"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "65eebf4053ea3597942eaca08061663c"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "1ef37642a6088582e51f60847a5bfc16"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "7c4ea9c9bbbe9b31bc18512cba157c17"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "538c4218f7dd10912b1a048e1fc8aaad"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "2a353086e21842586e1483ee6c02c7a3"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "6f5bb328688873e3284b670dae47fb84"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "878808dd0e897d147568231449684620"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "8612aff87bf562b673924c0478e97e8b"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "54dd185fb686e77cfb5a075c7e1f4ee1"
  },
  {
    "url": "404.html",
    "revision": "b78f814c1c98e559f62f0e6fa0eff5e2"
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
    "url": "assets/js/30.49e7fb6b.js",
    "revision": "ce3c3be550f64c3df6be0017e7440aff"
  },
  {
    "url": "assets/js/31.e33ed8a6.js",
    "revision": "092dc71c7b76f655a51b5876651fe281"
  },
  {
    "url": "assets/js/32.15adec5d.js",
    "revision": "07ca9a047f9d3ca28d6bf652fb8a15e8"
  },
  {
    "url": "assets/js/33.ce915391.js",
    "revision": "97080223662703a9f9292e3f59e6ed2f"
  },
  {
    "url": "assets/js/34.a7972150.js",
    "revision": "e4dd9ef544014ad7b2d7dc394105ba74"
  },
  {
    "url": "assets/js/35.d4f3cdfb.js",
    "revision": "a736941307cbef8ce8f36a6b0c0125ef"
  },
  {
    "url": "assets/js/36.b11c0b59.js",
    "revision": "b0057cd63f8a3868ed69a78a2aa808c3"
  },
  {
    "url": "assets/js/37.bb214a5d.js",
    "revision": "5b28fe8a465c8b68c46d6f4d1573f08d"
  },
  {
    "url": "assets/js/38.077ce5a5.js",
    "revision": "a5fefe250678a7edbd242995996b3850"
  },
  {
    "url": "assets/js/39.31938578.js",
    "revision": "3922c22779ad3e1e297b205c556f0088"
  },
  {
    "url": "assets/js/4.9e85cc4f.js",
    "revision": "af7a881cf1e111f2bf3b0b520b468d15"
  },
  {
    "url": "assets/js/40.5517eb9b.js",
    "revision": "27e0e34c70f56705bdc6e5419bc7bb40"
  },
  {
    "url": "assets/js/41.834d869e.js",
    "revision": "21ab148d1758fe236df12e7987aeacbc"
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
    "url": "assets/js/9.5e5b4a97.js",
    "revision": "7790c693a3965f1d9636b1bc16b06c2b"
  },
  {
    "url": "assets/js/app.9dfa0201.js",
    "revision": "8ae9f03ae92e1cc011fdaca7552f84dc"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "760f54a3de4050661b642e887f5b4db2"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "36091da93d2b33ba012e19146d16ea6d"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "8ffb0d653fb9ce98a8a743549cddff67"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "04726f90ffabd0ca42ba3c53c3bd5e1a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "8f04241137050e9df2fa9e135a55906e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "3250df50013fedd302b117cea75ccd8d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "e46657bcbc3aefaf68e3da7c157a0e4d"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "6d0c636fcd30dcbb38c54aa734247d6f"
  },
  {
    "url": "home.html",
    "revision": "4918d86435cd998677da02c831dab4d0"
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
    "revision": "3d86dc584fd631fe0f27b97f4a451d1c"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "43f81594060f6bdf321cb370986c99c1"
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
