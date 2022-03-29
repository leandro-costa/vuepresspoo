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
    "revision": "0c539af785f8b2b601ca13b7765d0cde"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "85b2b3d460e89b8ac29483677da0b3f8"
  },
  {
    "url": "02_java/index.html",
    "revision": "f16ac2f2508082a44d82bbfd95f6fa83"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "ae67c5651e590f1a52f54ce40c29135d"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "a09534782e1db7ebd92b85cd35770b52"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "06444610189527fd46871f421a776466"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "653275a88aafd78f1fb2df77b8d081d1"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "1fb06fc4789fd1192875147a73a357a6"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "54e4448e3734ed11fb57aa99605b161b"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "fc37a1e6d72d728fbbc5e863128ec7a9"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "4b4134c1bb065c113ba73c60acd9f071"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "1611784e263f700dd23868f444563dc6"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "ff7b8f5e86c60ac2d083b8a7b81bd1ec"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "feab4318cfd7c7ac144575c97e9e3c21"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "03914f13f27f312bad050cb532e1db0e"
  },
  {
    "url": "06_threads/index.html",
    "revision": "8401759877cb13a17023d07d9cbcd38f"
  },
  {
    "url": "404.html",
    "revision": "ae3a514793c7e315a3cd8f939f334fd2"
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
    "url": "assets/js/36.743f8ccf.js",
    "revision": "a388b952973f0c2afdc43d24e646c81c"
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
    "url": "assets/js/app.884b3cea.js",
    "revision": "6269c5786b51d50deaffa06efe7ac1c0"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "dff9d5320ad4ae847ec7b1b397e37397"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "51cc1b89b971e4ba5a14c3af1a25dcfe"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "44a5cdafd0127c3ce9fa79f15461da4e"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "a95bb2b59b4ba8760c2ff28cd941fec9"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "9216425684ce4546f2a1f39ad219af60"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "0ae8563f1a3950d9376aa01be32ffc86"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "a6fdc4e75d9bb1a021c96a43b20e4801"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "67bdd335c05ba580205d8cdc774ef169"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "0b8a867512e8153ee0cd054158366af8"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "ee2064233bf5ab283e654f94b873eb98"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "eadeca768c2f501d02d7ccf9781d7929"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "207743bf8cae95d222ba3d9a70badf5f"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "202f70e78dc79f504868b30579636e59"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "8155b57271f9addd935f21c3a9f8f2cf"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "65a6c34f0bf99590809707efcaed77b1"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "2871bb2d14efbc564221966d2b2962ff"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "f8b2584ca5ec8c603d8b4b9cf44a0fd1"
  },
  {
    "url": "home.html",
    "revision": "3e22f9aee9e07398b66a1ee94be62b70"
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
    "revision": "1ae2f491a58a9a818352a0cf3315faf4"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "debebe3fafa257603e00ba7603883249"
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
