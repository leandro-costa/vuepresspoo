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
    "revision": "9a238269910559671562303921105297"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "94f3b900557f409756c7d931658e3f8f"
  },
  {
    "url": "02_java/index.html",
    "revision": "a44b65929d57ee4d74d9773a6a8c3d7b"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "1c577c9bb11ea92f2ba6382cc1d604ce"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "4184416a6f7c649dcdba063e7165f5d9"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "216dd24dacb4f00306f0b22a689ea65d"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "ac89fe84544629bb7efe570d6cc293aa"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "a9db711b7c22912984abae1ef6bb5527"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "9239f62fac8882efe2ef38cff65fb794"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "799f5ff41d22c81bf9e289bdbaebd28a"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "d9ab14e4c95dc4bcf78aac8929a39ce8"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "01ec532dc55b52a896cfbe954fa656fc"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "b4acb1088cc684942c0a28e70d609cba"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "f261a7f898fda31f02eb08a75f128b83"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "9c122ba8e8f024193ca9b35e3392b0bf"
  },
  {
    "url": "06_threads/index.html",
    "revision": "d73c46f48093698355581e821ae70ab5"
  },
  {
    "url": "404.html",
    "revision": "bd43a7636275441c2e4408da26a0f5c7"
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
    "url": "assets/js/36.415947d6.js",
    "revision": "0d1cf215b8576c0588bef730363ec20e"
  },
  {
    "url": "assets/js/37.3ec84fc7.js",
    "revision": "2beddb3faad580d1c465fe57baf52f07"
  },
  {
    "url": "assets/js/38.837129d4.js",
    "revision": "e24ee152529b7b83b4c3c87ae12058a8"
  },
  {
    "url": "assets/js/39.3e915e28.js",
    "revision": "3a9e9bd966d4aa29bf37e1cb3c45ebe1"
  },
  {
    "url": "assets/js/4.33d66a2a.js",
    "revision": "45d5d0ad7ca617cd4e2ca6d466104c85"
  },
  {
    "url": "assets/js/40.fbe4f930.js",
    "revision": "8320bbc0cacfcbedbd51fe2dffc0fb3d"
  },
  {
    "url": "assets/js/41.b65c3f43.js",
    "revision": "1882d5ad99f219f469047a43ff627560"
  },
  {
    "url": "assets/js/42.ea8e31f4.js",
    "revision": "dcae6aef6423d93c0568b6d3dbdca62d"
  },
  {
    "url": "assets/js/43.4078a6de.js",
    "revision": "73976151fef7e17a4af12290d9bee39c"
  },
  {
    "url": "assets/js/44.af4666f3.js",
    "revision": "7069546024d3a5fe3c21162b878d91ba"
  },
  {
    "url": "assets/js/45.a26ce99c.js",
    "revision": "9a7a1194ce0df806d2495df344a3aa95"
  },
  {
    "url": "assets/js/46.5dbf988e.js",
    "revision": "c9d5187b65438b8edf48f8015dfb52c9"
  },
  {
    "url": "assets/js/47.ae2f8ed4.js",
    "revision": "c88e71a07e68f7d97cbfe83dbf2b86b4"
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
    "url": "assets/js/9.b85343e6.js",
    "revision": "4a1cd0da66c25b9ad98876a78af31a8e"
  },
  {
    "url": "assets/js/app.d48b9c66.js",
    "revision": "134aa4b0b7e4b2de41f091fcb065374c"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "fa1f063192708ce8b3eaa9b40dad795f"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "c33f935085246df75cc7a67bbd7b7ec3"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "37d370c2ebc1c3e94268a1695b9a9d2c"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "2008f8d7e4ac205cc525a4ae2cbc5c75"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "b7bbfcefb4d97590dec7287b40e58440"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "bc6ae370c0a5068611c612483d2ce25f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "b9c0890f4af8ed660cd2e37b8ac1cafc"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "3614af7fb3b011aa08228c7f0da4cf7d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "cbadd467b594dbf5bde991cb6ff459c1"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "25c22d67b805f2a82b8f5e4c8cc18439"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "55e43c186f803d9e3132f00d5c3aad66"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "fbc4d4343c2f6921b936e0c0078f5f42"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "fbddc5dbbb34941fa013cdbd50afd8ec"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "d308ed3a03692bcb2291e23e4e3bc228"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "c3e5a8144e4c865aeee36a904d64c271"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "259921770212b7d0ef3f4ab58dd2d48c"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "604f5d1662a72f7f6da6e67b6cd1fcae"
  },
  {
    "url": "home.html",
    "revision": "4493e61be138ddd76a3dad24033c3ce8"
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
    "revision": "993be1c91839a37424ab5f5ec565d3a9"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "346721f657f335ae86e1b6e5222f3958"
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
