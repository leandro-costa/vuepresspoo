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
    "revision": "1aa71d179541c97061745ff2215f5be5"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "c80531accb17738207ba4f3ed23c69e5"
  },
  {
    "url": "02_java/index.html",
    "revision": "a5fb332811f9582a55b6e1e8183eaf31"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "16e480a4a4076043919ea28fd405682e"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "46addb372f5ad7df6eb4a8d42337785d"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "8f5c0d85941810e0185514ec335c5bdd"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "72ca763b26cb31348a07f7aff0010d1b"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "e64461d817ef04864a4e0a77c9770721"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "67cea0242ee3916df5b9a0a5fb1dc742"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "db777877db8b82298233fe1afd2ff601"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "ed2f000da162aa40ef86cf2a62293bb3"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "47e7ee7026b91983288173b335c40249"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "e70e11737263c9da60543659192e4852"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "8c06a818b8e97dfe40d29aeb68073089"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "2c95b8123c98e2acb6d6e49075bdf8a1"
  },
  {
    "url": "06_threads/index.html",
    "revision": "8d7f44ee85f6c9adaebcf97bf4ce53b1"
  },
  {
    "url": "404.html",
    "revision": "a942299b9d2b15860219650f9a43c5bb"
  },
  {
    "url": "assets/css/0.styles.59d573e8.css",
    "revision": "81a3b993a7084dba44a9dffa850198b6"
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
    "url": "assets/js/12.3042e9a2.js",
    "revision": "95469c1db19cf87fb10dcdbb0748352a"
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
    "url": "assets/js/18.7eeb52e4.js",
    "revision": "b7316b9f14a474e9ccddb52ca559176a"
  },
  {
    "url": "assets/js/19.531d2e92.js",
    "revision": "b0e12a8e56c3ce2745007ebeb9454f80"
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
    "url": "assets/js/22.38f94980.js",
    "revision": "a63d59b6e3e6c18ae28f4d5ddad417c9"
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
    "url": "assets/js/26.a54d82fe.js",
    "revision": "2b7390b5b2de350341de975ff3f61704"
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
    "url": "assets/js/40.a8295057.js",
    "revision": "351424049584dea33b4aab7ba61e28c7"
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
    "url": "assets/js/app.d5ddfad6.js",
    "revision": "f9524c869c0d18451ee2ff041f6b647d"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "ec061bf9cae382c6ba434e979a9d1c30"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "f59aaa092b40a56a30a01467f343148e"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "41ce3471e345c9b5b87886170eb973bd"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "3ffe67d644f4e8e5595f5167db0edb38"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "5314843bf66c8f587b2b8e59f3766eb9"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "d81b85db962a4c89a8f13c559304d2ed"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "390c12cf1519c13f0aa7ed76218a5370"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "bd1fa050eb6d46a6c94564bf2e86ed3c"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "dfc249e04aed5b6ae927db5e86caad44"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "2fb88f75db52c8c7f120daa1d4f931b5"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "4cb19f9e7eaa389f37827e9dc0283811"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "f2b79812f8fc7aeb8db901b5fda06e37"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "5cdbb5c8cb9a36310bcc6d91840cac1a"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "221a673df799e40ead7c199b513e84dd"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "b6075af7b9fc8797a12356c5ab556537"
  },
  {
    "url": "home.html",
    "revision": "080e595f7ecb06fa88596f11f6e1d95c"
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
    "revision": "46f34a5d394bd73b53255d6e622226be"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "ee2f4ec79c21e063a90738fc4eec7514"
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
