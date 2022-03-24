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
    "revision": "cd8fb6372c43b6dafb49038622b9cf8f"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "da7c05e11dc57c39a8e41c9dcb5db179"
  },
  {
    "url": "02_java/index.html",
    "revision": "cc4f312e47662f16d5d829a5360963ee"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "6699b8e0ce25aded12e0d923594048da"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "865247ef113761ed76b6cf96ef922277"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "be50beeb376d779120ff6df2ec4dd242"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "462e365b001875a3c91d9406422461b2"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "bc88a519a06e355446dc9fc9ba6f9fb9"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "970ad0f3dcc71c4ab70cf52e0bca6251"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "df5fd78fb4696444e2f969f52ed0e467"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "c90e31562162c1ac16cacbcc48f906f6"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "c16fb2139d5a0a8cf93e688ad0c4f4d1"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "c0300c0f7d63fdc893f3279fe324124c"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "139dc8716c7a6557375b014d63a414ac"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "ed87c245564ceac32e9f9f094ed2d648"
  },
  {
    "url": "06_threads/index.html",
    "revision": "0b0aea00939e9820d3b26632f772da95"
  },
  {
    "url": "404.html",
    "revision": "3395d43cc833ba1a9a97494475f2d4da"
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
    "url": "assets/js/10.c03d63ce.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.2bbf0a3d.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.0e22810f.js",
    "revision": "6211f641853862de7e1100f257cc83ee"
  },
  {
    "url": "assets/js/13.dd5315c4.js",
    "revision": "fcff63ab95edcd0106a5937094488076"
  },
  {
    "url": "assets/js/14.f5d19c76.js",
    "revision": "6b48515f35d4b4718ce25674f0b66c8b"
  },
  {
    "url": "assets/js/15.bdde2879.js",
    "revision": "cb0ce36f6bc904862b9a1aaa93a2e1a8"
  },
  {
    "url": "assets/js/16.8c3fb28c.js",
    "revision": "b57fc6babd53e508b1fa41dd326076c2"
  },
  {
    "url": "assets/js/17.b6b92f24.js",
    "revision": "4498ca578e8c1aa7130cc292b6f312a5"
  },
  {
    "url": "assets/js/18.ab64f072.js",
    "revision": "045c06f2ff15c876606009e4bd5d0a66"
  },
  {
    "url": "assets/js/19.887254db.js",
    "revision": "1f4afffa5190e0c56da96170b6c7dcb3"
  },
  {
    "url": "assets/js/2.4b73ac34.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.3fc34fe8.js",
    "revision": "efc8f3ce6c0b5a1c26103eedc9fd9fbf"
  },
  {
    "url": "assets/js/21.04685408.js",
    "revision": "965ee62ada6480d020c65c79ff2aeb5f"
  },
  {
    "url": "assets/js/22.39e2bfcb.js",
    "revision": "3a884bf41e216c9f8b77f61a998a2b0d"
  },
  {
    "url": "assets/js/23.6ec27e08.js",
    "revision": "c2e6dce521c5a5450e67cc1db163dcf3"
  },
  {
    "url": "assets/js/24.3a07fcb9.js",
    "revision": "7704a4d3e6527de97086c50db5f54ed5"
  },
  {
    "url": "assets/js/25.fd010e94.js",
    "revision": "c60a30614395769da6aa0f05e49e8725"
  },
  {
    "url": "assets/js/26.1b340225.js",
    "revision": "e3677481668f967972bfc363b23e2506"
  },
  {
    "url": "assets/js/27.e3cd9305.js",
    "revision": "8bd448d3e4dbd198bff45daa44453d29"
  },
  {
    "url": "assets/js/28.fa29b6b7.js",
    "revision": "126c4b3f6ad636575d1d5288d604464a"
  },
  {
    "url": "assets/js/29.529b1753.js",
    "revision": "375af4c4ace7d9be0b8925f343aab4ed"
  },
  {
    "url": "assets/js/3.2dbd240a.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.797fdc39.js",
    "revision": "02a8261d84174464f7e58b8562972e2f"
  },
  {
    "url": "assets/js/31.8d456c6e.js",
    "revision": "ba86f807ac362f17be96ac034505bbda"
  },
  {
    "url": "assets/js/32.fbc48e74.js",
    "revision": "f0f1b0319ad7285c5e277015bca9d60b"
  },
  {
    "url": "assets/js/33.63199dc8.js",
    "revision": "97080223662703a9f9292e3f59e6ed2f"
  },
  {
    "url": "assets/js/34.9d581e68.js",
    "revision": "e4dd9ef544014ad7b2d7dc394105ba74"
  },
  {
    "url": "assets/js/35.2562bfe3.js",
    "revision": "96a825e26cd74755b31830c56dbccc98"
  },
  {
    "url": "assets/js/36.31cc3022.js",
    "revision": "70aced2940d7505e49a5424a1a85372b"
  },
  {
    "url": "assets/js/37.ea204beb.js",
    "revision": "2beddb3faad580d1c465fe57baf52f07"
  },
  {
    "url": "assets/js/38.339ede51.js",
    "revision": "e24ee152529b7b83b4c3c87ae12058a8"
  },
  {
    "url": "assets/js/39.bb17f8ba.js",
    "revision": "3a9e9bd966d4aa29bf37e1cb3c45ebe1"
  },
  {
    "url": "assets/js/4.33d66a2a.js",
    "revision": "45d5d0ad7ca617cd4e2ca6d466104c85"
  },
  {
    "url": "assets/js/40.c7dd15c5.js",
    "revision": "8320bbc0cacfcbedbd51fe2dffc0fb3d"
  },
  {
    "url": "assets/js/41.5f0ff2e8.js",
    "revision": "1882d5ad99f219f469047a43ff627560"
  },
  {
    "url": "assets/js/42.76efe00b.js",
    "revision": "dcae6aef6423d93c0568b6d3dbdca62d"
  },
  {
    "url": "assets/js/43.5ea671be.js",
    "revision": "73976151fef7e17a4af12290d9bee39c"
  },
  {
    "url": "assets/js/44.7ee07274.js",
    "revision": "7069546024d3a5fe3c21162b878d91ba"
  },
  {
    "url": "assets/js/45.d222dca3.js",
    "revision": "9a7a1194ce0df806d2495df344a3aa95"
  },
  {
    "url": "assets/js/46.1a190ec5.js",
    "revision": "c9d5187b65438b8edf48f8015dfb52c9"
  },
  {
    "url": "assets/js/47.ae2f8ed4.js",
    "revision": "c88e71a07e68f7d97cbfe83dbf2b86b4"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.da04edcd.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.626b1fa9.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.f964060c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.1917b4cb.js",
    "revision": "4a1cd0da66c25b9ad98876a78af31a8e"
  },
  {
    "url": "assets/js/app.a53dc02e.js",
    "revision": "da1a90320e365851594a990369bf862d"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "adcac31bafaac35a383e2a5a31e5d620"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "28b33c22bded36619753bb9ef12abace"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "18467579232213b0add3afaf571a5b2a"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "ce9330ae2fe70fa859e8657685ab1e56"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "e955153ff6c8f3203599613d00a5ca59"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "9480c18ea1cc260f498a4df7310bad4a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "377e6525aefed45856850596115bd178"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "640716969caf0537407a808f8b440d18"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "ef94bbcd5dd45b23b33a3efab9afb8e4"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "cb4d007b07f8e58d7d05771b05bfde2c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "0e1376994051b9fd63a9b80ff01f86ad"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "d958c9685baac2e4fb5f16fe3a5966b3"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "e66e9fd6f43aeea239e2fe55f529ccb1"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "094a54e4e8644dac093a0bc4869e01b2"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "74232ea5a2ab2e3fe928549c65323fdf"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "1f639ccf996bf7e99dee333d78b90c04"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "c943d97ca4d4e2e3a8a99f68256a3a4b"
  },
  {
    "url": "home.html",
    "revision": "e9efb7405a1d2316b5897e1629e0814b"
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
    "revision": "67b524c2b58f80fc998dd5799d8ced27"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "038d52dae577bd90e122aa9a26971369"
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
