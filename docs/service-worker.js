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
    "revision": "98a07261f8863c1bc2b230baa053002b"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3d83922714e463e6924ace871f06486e"
  },
  {
    "url": "02_java/index.html",
    "revision": "02b8097830e5584941cf9cba02b92935"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "8937e37594b50c2982b04882a9ad3023"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "a1a4de62ef3ad74aa95577890da2841e"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "49c1b5bee3837d02a595db43f830296d"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "6b0ce8af86318975416b37df7d8232a8"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "80939eec5f25b43cdaabe542557a459e"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "89edd86659caf58e18b87f234ebf53f2"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "d8bc920dd96586b28c040de42e002852"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "46fdfb4a31f8781b87d529401ca27c4f"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "c71f7083011369f7b728d9e7faab0a84"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "d64fd27050bf793230d43f97d20e089c"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "89127cbe05e3a729ea30d3aca6732aae"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "6a62e3135cb27ec99e9727ddf554abeb"
  },
  {
    "url": "06_threads/index.html",
    "revision": "ee12f47f1c9b7a05bc9a98f5e06e1b25"
  },
  {
    "url": "404.html",
    "revision": "64d71c2ac12a8683d5fb6c41ed6add5e"
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
    "url": "assets/js/app.afe69fab.js",
    "revision": "3a887a82527fad1236d19a3aa278780a"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "2da37eba283518cc97f2436c6fc70865"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "a1cee1f3d6451479256a6495d984dd49"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "871c9c6aee38d371f243829fdfb9a778"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "2501672c12049198b53dabeb40a8d58a"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "f693e7c9a4adfab6058291a6ab9faf64"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "828d2f1ace18aa9e07dd50b80a7e2ca0"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "cc853429e742b15ed9257ad810713d34"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "2c493c9dca63acd27dfafe02da271c68"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "023ce337b3a487e1388bff65d1fa6033"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "5d681147f7bf44d405395dfce42d066a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "d6603882cd8628840fe459a3431f1de4"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "7d8abceec83452b048f7bb37a6679edf"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "2d528480ce65aac8d11ffe9524482e2f"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "1fc3ac0e900e9091243da6ba433ab1c8"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "338a9e6084e0c67f168a8fbc422492c0"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "bb22bd4571c0c42aeee48c11bd07618c"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "d904259fef5782dfd739ae36a5141729"
  },
  {
    "url": "home.html",
    "revision": "3f6a2817e26bdcda44c4114052183e0f"
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
    "revision": "9cff70c3a9996dee2133d35daa758279"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "d6cc014b6c9b610dc8433e58617e6227"
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
