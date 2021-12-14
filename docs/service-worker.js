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
    "revision": "168377cfbef06abd0474044adc2e122e"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "bf136b67e0094888f5c08b324911e1de"
  },
  {
    "url": "02_java/index.html",
    "revision": "c7049277b031b1b653eb5d1fcbc389cd"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "732f1dbe56beba86d6807dacfddd1fec"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "ec62d37d5baa1cc713a93a70578fa697"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "78e3b29da66a23011de1b7331c3c8cd2"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "3fc11709dc2ee541cfdae5e16232243d"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "048ae46b103d02bc9d95658c73401881"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "60616c20a84628f9644d0f8a40bba392"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "b675dd495565b9a61ce8cc48510caf2e"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "2f120930ce84c6d4240bc5bfd556a587"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "aabcb5080e1c02f9b84ce2012cebc0c6"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "9239af643e86cc8cf8ccda7f029fb04a"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "6cc4f198244cc380d2594a46ef05e3b5"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "8b8f0a279003383c88a2d0c980781511"
  },
  {
    "url": "06_threads/index.html",
    "revision": "1bd3b9084968211cf27246d1bab32352"
  },
  {
    "url": "404.html",
    "revision": "927372232db99c242496fd11d8d35f2d"
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
    "url": "assets/js/12.6618e2f1.js",
    "revision": "b5fab3c03b64abe653b898b85ee3c1cc"
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
    "url": "assets/js/25.7cab39a1.js",
    "revision": "3f32ba4da43a2e745e7e14aa7ae15dd9"
  },
  {
    "url": "assets/js/26.78967123.js",
    "revision": "0ccca23ef1e0db84fe0466159f665c41"
  },
  {
    "url": "assets/js/27.afa8f215.js",
    "revision": "d789563d25ee56538a7853c4871bf75f"
  },
  {
    "url": "assets/js/28.239f5341.js",
    "revision": "19229f2ab954316d48bb385178157cee"
  },
  {
    "url": "assets/js/29.88846074.js",
    "revision": "f1a2ab8ec607e3e09005b4ca5b13f1d5"
  },
  {
    "url": "assets/js/3.d3a2ab93.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.c6f35132.js",
    "revision": "b34d6d8a3361bdb9466a0e3fac4823b8"
  },
  {
    "url": "assets/js/31.31939bd7.js",
    "revision": "b9b131c0daa4d3ddf08be1c897a0ee40"
  },
  {
    "url": "assets/js/32.d7d1cb0c.js",
    "revision": "458793661391e1d573947c68b2be13ed"
  },
  {
    "url": "assets/js/33.70c017a0.js",
    "revision": "ff3982a0cc28f66557c810545c1b1c45"
  },
  {
    "url": "assets/js/34.99027ac8.js",
    "revision": "d1f97e7fa969052fd480f621a3ff354d"
  },
  {
    "url": "assets/js/35.5bfd8f5b.js",
    "revision": "d045ec905ed5f863af234ec655865faa"
  },
  {
    "url": "assets/js/36.4fc3ddd9.js",
    "revision": "67dc376d3bdd4aee3c60a1691d9e0548"
  },
  {
    "url": "assets/js/37.b40230e5.js",
    "revision": "2f38425d06f8ca24713a74a1c85b7b79"
  },
  {
    "url": "assets/js/38.fef7514a.js",
    "revision": "2daaebc95462ed834ee64f7016e05334"
  },
  {
    "url": "assets/js/39.e9170bdb.js",
    "revision": "f25c95e9d858543f678f7aa333b0c716"
  },
  {
    "url": "assets/js/4.4438b792.js",
    "revision": "3dec6fd48a36736cab2a9e89809b89f9"
  },
  {
    "url": "assets/js/40.255f2f77.js",
    "revision": "8e785141d1557001752ff766024315d0"
  },
  {
    "url": "assets/js/41.06e3f843.js",
    "revision": "bad2a827becb681f753bc9ea3e31e0ce"
  },
  {
    "url": "assets/js/42.be07081f.js",
    "revision": "8fb19b44f37c2ec310ecb34dba589510"
  },
  {
    "url": "assets/js/43.ecd9d8a5.js",
    "revision": "765de2d435e770a8a74bf10c388335e9"
  },
  {
    "url": "assets/js/44.998da665.js",
    "revision": "6dcb11c34ebd4ce2a408612d8dfc8f3a"
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
    "url": "assets/js/9.33401198.js",
    "revision": "cdc38f44c1f6decf4bed5fd7da54a811"
  },
  {
    "url": "assets/js/app.11562df2.js",
    "revision": "0abc7c3fd14d9553c666c34d85015987"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "b614c83a16aba5d0867130fad39a80dc"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "552012fcc542b2989a5d12bca24e70c8"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "3ba167da71a0b2ca6a028957b77a7306"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "5db25118205509df0e5b13c0aa7511e2"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "0ff7dfedaf0bd3abb40022104b2d281d"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "6b8476d8ed52a5380f260f182b80a823"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "52c63c5e57414236dfce7be0a1826d1f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "d4fe2a4aa03eea159efe0ce49570a539"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "7fe1ee834d80a7ce711261b2165f8033"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "7f89dfa628639159c7e09a8f3140cd15"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "fdf960c980cafaa2959f17e9c5b884ab"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "7d8d65ad72c5ab63e92d2421a6f4a3fa"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "d4767a5fc5774313741fb77715e6bbe7"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "d6a3bf159b8852dc8ae6d56c2039c9f4"
  },
  {
    "url": "home.html",
    "revision": "ec86f20acbd25e47ca18a0f2b8bd5f19"
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
    "revision": "b9990ce9e8577d1ca54ab1ec5729f5d4"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "9607584b16f7dd2f8a994f560354a6b3"
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
