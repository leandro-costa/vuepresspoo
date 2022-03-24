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
    "revision": "fb2bf1a781cf550b7e34988dccbb533d"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "7a01e0a5496ae29137f5872182e5c86e"
  },
  {
    "url": "02_java/index.html",
    "revision": "47d7fb7416c72d42cf91fb9c4248f41d"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "47205c1b036af0be2e34b966a92a2de6"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "30259d9623ba635fd4bba065fef215d6"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "bfded1d0262d1b108084227e7e4c50a4"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "d0b7be53c96175b82ba9ae630b95b06d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "a7e4c009a93d6c95c2f697f7af947954"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "b3f08f0bd5707975fd5f0c322bd57c38"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "d5b8be2745d4c4e94482fa334f3907c9"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "e5ab6d1c464612089ff601bde79c392a"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "6b235f67d2d419b35cfc7d96b4829fdd"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "27748afc3a8cc789e2f3afe65926b005"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "56c3173194f6aaf3198221c3a8838939"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "0a058eb359c4a872dbbc8e38d15507d3"
  },
  {
    "url": "06_threads/index.html",
    "revision": "35f8a1f0a20840eda2a369d83e9898e6"
  },
  {
    "url": "404.html",
    "revision": "8c11497c4c3048f80fe59c1777f2907b"
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
    "url": "assets/js/12.8250326b.js",
    "revision": "6211f641853862de7e1100f257cc83ee"
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
    "url": "assets/js/31.2d00a758.js",
    "revision": "ba86f807ac362f17be96ac034505bbda"
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
    "url": "assets/js/35.6bb5b5f8.js",
    "revision": "903ddd0d238e34438fad7c8d3f893f5e"
  },
  {
    "url": "assets/js/36.bf4a1c45.js",
    "revision": "e6af6ca9c80ab55c297efef791226558"
  },
  {
    "url": "assets/js/37.70e3d553.js",
    "revision": "7cfb7f3d861906d839893c3f34e7a2d0"
  },
  {
    "url": "assets/js/38.e8fb87e7.js",
    "revision": "eba77e658ad7c3a16a960d47ca4177e5"
  },
  {
    "url": "assets/js/39.cdd678aa.js",
    "revision": "555583575cb6ae24f8e4d160cc0ad7aa"
  },
  {
    "url": "assets/js/4.0458222d.js",
    "revision": "1ca49aca16ecb8cf0d5e26ebf5496e34"
  },
  {
    "url": "assets/js/40.d4658e42.js",
    "revision": "bea1e2087d6eaa13954231b8f4cfb316"
  },
  {
    "url": "assets/js/41.57525ad5.js",
    "revision": "0978b1ea200a9b69325f20d767a75a65"
  },
  {
    "url": "assets/js/42.d4dde262.js",
    "revision": "0fc18c1e4fb46466eb76f3b92b9735e7"
  },
  {
    "url": "assets/js/43.4572602d.js",
    "revision": "8f68c2b1e69808e3f14ba462a7d722e9"
  },
  {
    "url": "assets/js/44.c5e476cb.js",
    "revision": "1d862bad498afc11fadbe454fbaf610a"
  },
  {
    "url": "assets/js/45.f8f01d24.js",
    "revision": "9c76b737bfa4575d931b6d336a18bf8d"
  },
  {
    "url": "assets/js/46.f0acae7e.js",
    "revision": "1ccbaa38c9aae3b20323f1a602f305d5"
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
    "url": "assets/js/9.2472c6ed.js",
    "revision": "f26fa9889c2fb8acb7f00ad5d99e3eb2"
  },
  {
    "url": "assets/js/app.1cc96567.js",
    "revision": "f41f2a178bd0716b1b8d44ba4bb117e7"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "5e4e5c034d17f4b5a9a0a4ca1747ec9e"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "35bde355828dd0031ba0aa93694b51ef"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "3354d8fd5012a2a5c0feb508896a7442"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "589be4992e117344f1dd6e168707172d"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "4cb6f72f7a5d6fad1c182b3faf17b9f5"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "5bcacc097f97fae98a73caa650d55db8"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "3b43a5849378e9ccfe5f5c1dd530e6dc"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "0877d86c24b1bfda79e281e8a42d182f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "4eb3217c375fe746540017f071f3438b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "0dd745bc14ab40779b5c66979f2fdeba"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "314a70b21e75e83d2661ff620a852f91"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "772fe20bdaf2a7eaad6ad41eaacc0de9"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "f4aa96c5067422cb8e861e4009fd6ef2"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "aefa67369a39a56e05060accc5aab63c"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "3b8c475dbb22ceb53c2cdb78c7e722fa"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "fb69bb19528fb50e62712cf673a16711"
  },
  {
    "url": "home.html",
    "revision": "a4763c54f95cdfd58d3647f01cf39729"
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
    "revision": "1c1fa17796cbda48fd655239d11f71e9"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "716fbf5173ae67022737c27f2278c9ed"
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
