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
    "revision": "27007c67a75c7ed0852398c950a6e8c6"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "d133f0655e02abe6ce96a149369e547d"
  },
  {
    "url": "02_java/index.html",
    "revision": "4fb8035c091a3854fd74034adb623d29"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "3b3a95d0908d5b43317b93c809bb9dd1"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "edbaf4501c3c85f2bc7a828727c33a32"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "7a670f6a1155ebb6c3e328fb843ef56b"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "955585e5e8fd96c4a6544a59cfff2097"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "9860f831668779b1d7279bb5e369cd85"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "169eb10acb48ff2bffa04d5291ddcae2"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "3d3e75503f26396e714c7e2c82c26c5c"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "9ba5ebece77f499516c4facf61859faa"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "37e737a2aeb21ca3d8eea16a88618161"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "392248dde97e481e128d3dfaf8637599"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "3a13eea291417c0458d97704ae337a64"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "e0176b2b59251fb4b46eb2931a041171"
  },
  {
    "url": "06_threads/index.html",
    "revision": "121ee229d16132f0347adc38b9ebd4b2"
  },
  {
    "url": "404.html",
    "revision": "bf965f827341d5c6a4968b7376cf2baf"
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
    "url": "assets/js/13.dc61533c.js",
    "revision": "fcff63ab95edcd0106a5937094488076"
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
    "url": "assets/js/16.74ec3d79.js",
    "revision": "b57fc6babd53e508b1fa41dd326076c2"
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
    "url": "assets/js/32.3b6e49e5.js",
    "revision": "f0f1b0319ad7285c5e277015bca9d60b"
  },
  {
    "url": "assets/js/33.8bfb5c6e.js",
    "revision": "97080223662703a9f9292e3f59e6ed2f"
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
    "url": "assets/js/app.0d67021c.js",
    "revision": "186d7ca9678f9403df24ac7e1ec461b5"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "671143b84e7df880cfa1c7121325f1cc"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "7bf510bbdd372eb4b0f7f02564d801a7"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "c7cb642aedd3de008568617e7556ae99"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "762971d5fbff9d6d5c3a7bae19673889"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "7e298d6cca47181245ebf11b50e99e76"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "9e9727147491b2f8d5c02ffa2f4bc7ad"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "c87c5f903ed4aff35483c8dd6c5b112e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "5553fc0c1cc154b7e8e1901c0b4bdcb7"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "9def0752d62d581ef2724f5fbd017d92"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "0eb71ba677c16706361836f9898d7abe"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "598cd42d3022ff29f04a8bb3c146c0bc"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "66efb8ea8ffad55d0c82b23ac9f61275"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "00f12b6250251198e0fcb45299c5a3a0"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "3a4fa6c9efb6ec6aab5b376a17c287a4"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "c3db52719395c44e02d16dc89f92b855"
  },
  {
    "url": "home.html",
    "revision": "189bd1bfc3a10c87aba74faf3ee3465c"
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
    "revision": "523465270385c32c3f700b336f287a98"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "5af9a8c7587b5e0a2996629375d40574"
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
