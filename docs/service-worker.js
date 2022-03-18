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
    "revision": "56a7c4c6703dff7a44baa79e74fe452e"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "1f6c39ec2fc222e8b31c920ffa260c65"
  },
  {
    "url": "02_java/index.html",
    "revision": "469fb66f40cc4cb812a78d83f5424586"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "8b081638690717e7af80b9a14e40a545"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "8b9bb6ee9a285ff6ad4a2e8868ecc729"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "a322bef86ea663765102ea86a66d05b3"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "94475f75ff86fa9bd4a63702f3fb46f1"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "ca426fb4c7f9de08af44e07e08a1201c"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "77f69d3202fb36a309590b448e6fbf81"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "035a0fadc9547c2a5a996bc7d8ae3453"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "22096c47a1529d9a3c73fed530e11914"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "1d376b02ef224240f0a693d0567f5b2c"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "e1b563c383308b7d03fa13cb06784097"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "aedb422c6b42360d5a7d686c05126989"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "02a5e71a1f64ba2ae9a1c157a927c855"
  },
  {
    "url": "06_threads/index.html",
    "revision": "d7399096dc26de867b92e1232aee4ea6"
  },
  {
    "url": "404.html",
    "revision": "33497e32fd0f174b012f1a6c1c2c6f05"
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
    "url": "assets/js/app.095b6e6c.js",
    "revision": "2d9a6751467288f8e8174bb88a0159da"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "dbbd4e07e0426622b2df4a9854183ccd"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "b57629b8596a3c82f47e303b5ffdf152"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "da4261715e7b005b6076a38c1920b4f2"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "c00290515aa9bc59fcc54e7e99846958"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "af40d04feae72874a5b062e072ecf6a1"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "1c33fc8acd83aa460a4c3fc5f00d2d9f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "49542bb92a8e5c14d6501145ee5c814f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "df9c7568783559c548477e55fba805b8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "8c79b04817667c1e6f79f464135310ea"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "f2d84eeaff8e015fffbad5651c0e055f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "281ed6761dbb4cb518ee06e1f3ef3383"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "c7dced2f4d42b99e7eb0ccc66212f7e6"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "04199d00b5007b7df83a6fb2b396cc2f"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "2bca7f0dc0a97484d0104e8b9aa7d6a8"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "2ab23ca4804f989d07f7251f6ef34ce7"
  },
  {
    "url": "home.html",
    "revision": "6d6247b9331c716933502a9d030c4d44"
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
    "revision": "7a20cd6b84f1644ca9aa63b0c1fc8eb8"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "1df2db8ddd931605f5cb53fb74ddae42"
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
