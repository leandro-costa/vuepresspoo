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
    "revision": "948b489ce1c086fc3942c8c90b5f87e5"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "101f2e49db2a52aaaaecdcba54d99b19"
  },
  {
    "url": "02_java/index.html",
    "revision": "49ec879a7daf8b4552543cfc5a2ca6b2"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "ef7a40cd4283608d167c59d2ab372587"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "e74f6779e90bf6714de42cd3ab28c4a7"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "a7868030882bca26cb8fcbe532416296"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "5dfd2f6ae8f52eec232b65918e9f890f"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "cc24bf9b821e2673295e867501104aac"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "661adff71b2802b71a460614596145f4"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "abe741a30348ad82d2336d5c6ba26ccb"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "0e162884312049d81eef64df93a4c738"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "7cacd3fca282314ae6854ce9e6a9e23a"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "e036ec74cf169c7c64f2284bb4e7a204"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "6b97f806d1254bc8634bd77e9c2b6cf3"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "2a2df4bb54174f073f2bd5fbf9cce1be"
  },
  {
    "url": "06_threads/index.html",
    "revision": "5b2901e668b883319ee7fb50ce8f51bf"
  },
  {
    "url": "404.html",
    "revision": "1d7de0a058643d339fb4c31ceb2f6dd7"
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
    "url": "assets/js/22.b7d90932.js",
    "revision": "820fe40f1ea09e99f8abd1eac0501ac0"
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
    "url": "assets/js/27.9e46cefd.js",
    "revision": "1356b02b6f2230a88841e868667dc17a"
  },
  {
    "url": "assets/js/28.245709eb.js",
    "revision": "3bd57fe54235cb9ba6a7d646ebaa323b"
  },
  {
    "url": "assets/js/29.cad2ca3a.js",
    "revision": "be4671c537b2dfc80e9bef10395fafa6"
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
    "url": "assets/js/app.ebf587db.js",
    "revision": "475f5d514a6534cfdc8ac76f7782e977"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "2933335cf5cfe96f08500a7c0e9b39c3"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "2a478103b4e4d6c723f8879f8da81aa2"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "83189d277ca4c0cffc2ea48bccdc80a8"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "a3017ede8835177c7990f96fb07a7ed1"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "eb920b4b58ff293f656203307a3b0713"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "1cd22ef93988644ddf70b4d530425206"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "9065e1d181fdbff3a0e0be4f8a59c344"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "07f977ea68265ac1c7d9ebcf6d4aae09"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "5b6517f3d0fa46b3adcf9e14f524674a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "38260040a077d144851b3b77c3522602"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "69009a2493ffadd528184370b83c2c80"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "59b2c219e41fde0fdbfbc6f5393a35ab"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "6521231d01b819247560eb00c97ed55f"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "f6c1a81a294c987da15a1e8bd67b817a"
  },
  {
    "url": "home.html",
    "revision": "e4157fcd311d27eab0c5c069a0409f1c"
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
    "revision": "d42f68ed441f7d67bbcfd6b364f8fdeb"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "12b6226f00f9ff65c2ea107178d1343b"
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
