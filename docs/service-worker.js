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
    "revision": "0b069c8a1c150aaeb7386ac1ca99fc11"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "18ba0c3443deaaa1c9195e385fdbefe3"
  },
  {
    "url": "02_java/index.html",
    "revision": "7f65b250ce7a70575a0bb49dd06dddab"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "55058e3cbe4859a4333ad900e06f876a"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "c93401a8558a18921c2634ec93296279"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "45f9453e94597c7629464fca38f1d5a9"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "cf7a701f9bc7eb4292d9ad64de921241"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "b4bcdd8d698a95a10b4599f8725f6be1"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "1f3e1898e917cbf2a89040b22283a3a8"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "6ff6da957931f13fddfe33a2f0e08883"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "3e4142c7b574742f52d66af793eb4351"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "22300e5ad345d35108e896742105a210"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "74d53fd12c6771b20ec0972ddcb5375b"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "0ce8cef8712c9b67847ca196ada55c7e"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "b1f96f20e6b6f882257a3af5503bc3dc"
  },
  {
    "url": "06_threads/index.html",
    "revision": "7f603dbe6cc2c408b1098a6767bd45ca"
  },
  {
    "url": "404.html",
    "revision": "cf220c04413d56921b001493ecbd9209"
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
    "url": "assets/js/10.78d57f82.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.b7039460.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.c83f26e6.js",
    "revision": "8b19b183aed5f6ddc13c9080f5ae5b66"
  },
  {
    "url": "assets/js/13.94ed1481.js",
    "revision": "2e7511858d5a31e9624a0186a0da415e"
  },
  {
    "url": "assets/js/14.7ca1862e.js",
    "revision": "6b48515f35d4b4718ce25674f0b66c8b"
  },
  {
    "url": "assets/js/15.0efde943.js",
    "revision": "cb0ce36f6bc904862b9a1aaa93a2e1a8"
  },
  {
    "url": "assets/js/16.ddcce68d.js",
    "revision": "cd93fec75327f348f11997daa77f9ab1"
  },
  {
    "url": "assets/js/17.5f5c7de5.js",
    "revision": "4498ca578e8c1aa7130cc292b6f312a5"
  },
  {
    "url": "assets/js/18.10f1c80a.js",
    "revision": "045c06f2ff15c876606009e4bd5d0a66"
  },
  {
    "url": "assets/js/19.24ce0223.js",
    "revision": "1f4afffa5190e0c56da96170b6c7dcb3"
  },
  {
    "url": "assets/js/2.3ac662f1.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.75399a50.js",
    "revision": "efc8f3ce6c0b5a1c26103eedc9fd9fbf"
  },
  {
    "url": "assets/js/21.07790d9d.js",
    "revision": "965ee62ada6480d020c65c79ff2aeb5f"
  },
  {
    "url": "assets/js/22.3992ba58.js",
    "revision": "3a884bf41e216c9f8b77f61a998a2b0d"
  },
  {
    "url": "assets/js/23.b8f46a1c.js",
    "revision": "c2e6dce521c5a5450e67cc1db163dcf3"
  },
  {
    "url": "assets/js/24.228cce00.js",
    "revision": "7704a4d3e6527de97086c50db5f54ed5"
  },
  {
    "url": "assets/js/25.807f5f9e.js",
    "revision": "c60a30614395769da6aa0f05e49e8725"
  },
  {
    "url": "assets/js/26.3c175da7.js",
    "revision": "e3677481668f967972bfc363b23e2506"
  },
  {
    "url": "assets/js/27.9400d3f7.js",
    "revision": "8bd448d3e4dbd198bff45daa44453d29"
  },
  {
    "url": "assets/js/28.54c724c1.js",
    "revision": "126c4b3f6ad636575d1d5288d604464a"
  },
  {
    "url": "assets/js/29.fb47ce2f.js",
    "revision": "375af4c4ace7d9be0b8925f343aab4ed"
  },
  {
    "url": "assets/js/3.d3a2ab93.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.b851c1ea.js",
    "revision": "02a8261d84174464f7e58b8562972e2f"
  },
  {
    "url": "assets/js/31.2ef18896.js",
    "revision": "087da037842c696da105381d49b0e41a"
  },
  {
    "url": "assets/js/32.24c7fd05.js",
    "revision": "4ad43e42014a1e506e8df3ce7bb15087"
  },
  {
    "url": "assets/js/33.1e488a47.js",
    "revision": "2689648226124979f4363e9cb61ddc0f"
  },
  {
    "url": "assets/js/34.7e21646a.js",
    "revision": "e4dd9ef544014ad7b2d7dc394105ba74"
  },
  {
    "url": "assets/js/35.1ea3a8de.js",
    "revision": "ad1b8508a55b6268dc9518c5544bb6d5"
  },
  {
    "url": "assets/js/36.bae60a9c.js",
    "revision": "3b36ad8839900157828dea468bed40ee"
  },
  {
    "url": "assets/js/37.d7775ef8.js",
    "revision": "d5dd2dd4ff1948c3db58a44449fe3acd"
  },
  {
    "url": "assets/js/38.06e6c4dc.js",
    "revision": "0775c54ff1a57bd997d21c87dd6f7b74"
  },
  {
    "url": "assets/js/39.cf5bfab7.js",
    "revision": "60cc772504ae9485eec5a4458e47c1d5"
  },
  {
    "url": "assets/js/4.e53a5258.js",
    "revision": "92c2783ca20b4f5b0d0d7e329faffdf7"
  },
  {
    "url": "assets/js/40.c35b4b6b.js",
    "revision": "3f20fcfe0b2b1f23ab19e0c27f9eef92"
  },
  {
    "url": "assets/js/41.c0e555aa.js",
    "revision": "eddc7919b9adb1a1afc00e07091bdbdb"
  },
  {
    "url": "assets/js/42.5a094cc5.js",
    "revision": "cacb75413f86ffde95b4cd6787be9078"
  },
  {
    "url": "assets/js/43.974313f3.js",
    "revision": "88b8b476149335f1cf24b31430cf9042"
  },
  {
    "url": "assets/js/44.b05f407f.js",
    "revision": "0cc014bd1ee424f6da2599dec9859ece"
  },
  {
    "url": "assets/js/45.d2d8f916.js",
    "revision": "0e4a8b16051d32a2cb0a06521965929c"
  },
  {
    "url": "assets/js/5.a07ae67d.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.5ce0bf89.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.b35e2896.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.65860218.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.484feae2.js",
    "revision": "36d773f0d1bc22caf0c09d570e23f5c6"
  },
  {
    "url": "assets/js/app.5557201d.js",
    "revision": "a0c63e64863dada1a25b8abe980f7687"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "cf04dfea310a9313b66637d95444d003"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "0764eba5a440c8cbd4c924a0bd54b556"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "b3d861c64285d49e430bf625220396a0"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "de33c6af9189cc9c7d72b5106842fbf9"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "c37f33a0373935dc4faaedfa9726d302"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "1af4d00dbd563977ceb204bc938fa1bf"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "f780de93dd395ff4a4c25b984f2177fb"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "5336f1832479abfc95739b9e411e7b5b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "5f89b2feaa52baf6a29ec26a71e547ae"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "b3e6bcd308d23d2416b59074e639975f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "4dbd76cc827ef27a36278fc0b4418b88"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "bad6124a06b34a5b03fbeb5d70df7e1a"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "c972679cc96ddfb73af607b6be78378c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "fd2ccf854a2bb9c16f88c6038e59d7ab"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "dc19cc38e7ddce548b59acdaa05ddd85"
  },
  {
    "url": "home.html",
    "revision": "6aef31193d2e888c75ad2d14230b8342"
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
    "revision": "34f51b1e5b3d90a689622136dcd43d7a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "5ba134cbe38060c62bd705256116675b"
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
