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
    "revision": "b639ba7ade1c1c64342167790b1d4577"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "3a2b72e4954a80ccc6f3190997ed3e99"
  },
  {
    "url": "02_java/index.html",
    "revision": "c67f068d0c5840680350fe1e50627a85"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "98518acbe612cfa059603d4d831c5adb"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "66800f15a23dbd5567d015cd13b5a606"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "781dc51a438808b5b56b7f0ffc7822cb"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "18810d33259ac4621bb1cb27154b677e"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "5b6fd824cb4fe9efb822dfe29fffa100"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "0211172a1312d0449d9240ebb8691415"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "1a1d8821a648898c220b7729d20191d3"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "5b242abb593e34cc323b4026f8aa89a0"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "4581c231fa97097db9e0573ae3fba0bd"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "e8e5455750da7534835d8440faa687cb"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "030957504ae43601cc316886fb9501ea"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "eb6951474c6e35eb3d4dca89cf4f917f"
  },
  {
    "url": "06_threads/index.html",
    "revision": "418ecfed7123413ff49a05feb312bdc4"
  },
  {
    "url": "404.html",
    "revision": "0e557327748450cdfaffae6ff89ca861"
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
    "url": "assets/js/13.14443085.js",
    "revision": "f2b38b9c3156e8f01d136d511a5c8c13"
  },
  {
    "url": "assets/js/14.5a289a20.js",
    "revision": "02d5ca95bd5313f38b61ce984e6d2e0d"
  },
  {
    "url": "assets/js/15.98c3e351.js",
    "revision": "0cb070f18fc28bbe5bf7e4bd172177a4"
  },
  {
    "url": "assets/js/16.7ca51059.js",
    "revision": "c496cdfdf8c33e2440b8dba02017a72d"
  },
  {
    "url": "assets/js/17.5f083a4a.js",
    "revision": "f8991fe235dcc51582fea9c03227668b"
  },
  {
    "url": "assets/js/18.13608a7b.js",
    "revision": "15c8281b809a63cd5de47fe70888aecb"
  },
  {
    "url": "assets/js/19.0c3f6525.js",
    "revision": "b4634dbb11e9ea088a4cb1eece9c1dbb"
  },
  {
    "url": "assets/js/2.3ac662f1.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.6cbceca1.js",
    "revision": "b7dbadfd3d48ee3faeb10d9b2d5372c7"
  },
  {
    "url": "assets/js/21.c3f7cb87.js",
    "revision": "694d7496684e882d0dbcc4c3d4296756"
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
    "url": "assets/js/36.890aabe6.js",
    "revision": "70aced2940d7505e49a5424a1a85372b"
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
    "url": "assets/js/app.446d9c71.js",
    "revision": "5401500a0c975dfee3720b42b0fd7cc2"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "0168fb78e83e9aaa09c31d67a67d94cf"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "657b3ef273f169fb1e09faec9c1295e3"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "65f2d294523c195b39820bade6ad2026"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "4f77d9f7023777d7826031ff4873b551"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "90359be8e93f6b8d35a6f1799b4b3371"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "139477dd4cde8fa41731b10fd48c2808"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "cc728e084b26b70bec02a37381606a2e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "2e5a7bb25518b847a6bd5d8f514d9175"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "4b8e5b9648dbad7a2977820f5f4f3682"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "132ddf285ed9484856b1b541c8f3de1a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "96572b7a3a3f7baf777286242842ac1b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "4ed764ad822ff2c857b06053d64826a3"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "5dfa7990507e72da9e6ae7e56c62c28b"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "4194fe554d911a1772f308a492517c6c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "3190a0c2ebbf26ca108eea72adc8b18c"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "870c5ecda40345c6ad0a97f040c9b1ae"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "8eebaef4f05dbac863c123b4b602a557"
  },
  {
    "url": "home.html",
    "revision": "79e63dbe400fc722d41e08f1976b4254"
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
    "revision": "03688bc7eb440820137adf2903cd67de"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "fa03cfd4d4b8240d38151721f092bcfd"
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
