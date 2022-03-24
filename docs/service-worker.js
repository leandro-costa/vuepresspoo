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
    "revision": "3e6287f6aa2bc8009e7b8bbf8e1bccb1"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "f6d2c7607354c710fa17b3b8817dd6ef"
  },
  {
    "url": "02_java/index.html",
    "revision": "af727ae1a8dfd66b5e7b5f0b3ca92a03"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "d70a139d5349e8833800fb77e0bec1a8"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "33d1d72e4887c294b3262d9820eee026"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "7f3db7a80bc01c9ca6f07585a1fd23a0"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "9028762318799abbb0c93237ea95b25c"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "e54ab519670408cc780a501183e0116f"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "1093dd7cbf54d31bf866b2dc00ddfaf6"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "56605d6974f654240949acd42541757c"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "850d81a7650fea49b3efc8d81dab5865"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "104f94563a00aa6f36eee85d51b16d5d"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "c1445744c5cc969b828c6f1d3d6835d0"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "edd9b41b968acb570510689518bd074f"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "03f3db9058128cbfc767786dee7328b4"
  },
  {
    "url": "06_threads/index.html",
    "revision": "9e2daaaa539bb3936cb6b4a493500a38"
  },
  {
    "url": "404.html",
    "revision": "7828137853f29f528b22e31f01646d63"
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
    "url": "assets/js/35.031ef98d.js",
    "revision": "903ddd0d238e34438fad7c8d3f893f5e"
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
    "url": "assets/js/app.a8545e12.js",
    "revision": "8ab526f7205c9c2d4c797764026d119a"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "fc3c2f197fda42051a9d5c228a44c9a2"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "3f47daa014ea20255a006337c770ac34"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "a01d7e07f8af8689996c247e1109b3bb"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "0a7fd8af4b39c92ba309415b90bcffec"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "1bb674ae8b1794b72db5ef90448b73b0"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "83086687b7c36c42d1dd1c49ed595691"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "b07d91f2361f60196eee927f7ac69cb7"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "cf2140c7de6a0256eae5b4bf56a6c14e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "cd99bc02dff643f3a0ee9075f16fa01a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "6a2f59f45d0258119471ccb5ac469251"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "718eef951a4ba4be8d3512772bcea69b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "1d2cbccb14c0a417dde9b41e33aec411"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "62d0cdc15958d6e4d36b366e882022c1"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "c9ae048deed197306d44b2a30ad43b9b"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "69acf12615647560d4a573c5adc5994f"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "cb44d996db6c6f343bee48bc57bf19c3"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "61f25a5facd903edf953c908ee5516b1"
  },
  {
    "url": "home.html",
    "revision": "a244e3ef9da66840c3291a818eea0ab2"
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
    "revision": "2fb2493b56b2e1e58ef8d028255d4efd"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "0664658183da26b0eedb8146f54a1b51"
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
