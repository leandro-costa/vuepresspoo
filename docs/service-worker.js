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
    "revision": "bae9fd1eeebf5b01408226105ec32678"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "0cf497de4d2ae5545a6ce6d129026270"
  },
  {
    "url": "02_java/index.html",
    "revision": "34ba48b0adeabf4fcadc6f169ef1132e"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "f7d048b33f4fce00a10f474a7839f9ad"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "6124a9ad3e8f4e4fe2ee60d88ec0913b"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "b145f0d10fdb24c71f977d3b4eddb495"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "e087c60d68ea130bc7e845556c308c51"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "6868b32ff335c38d6f2d173042de829c"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "efc346d47a4d870703e7886e770b4f7b"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "b3058283ccaacd44802d01e519c7c816"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "824a735c19576fc3869512e315b476fa"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "a28d05f7dd085182a4a6db7d71eff5b5"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "979d7cfbd8a27c4a408fe740747bf55d"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "285a385051066d1d4a81fece2991d3dc"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "17bef309a3a6b5a87066bd49520b3c88"
  },
  {
    "url": "06_threads/index.html",
    "revision": "e05ab301ff3c1b8dff9976a6f8da92a8"
  },
  {
    "url": "404.html",
    "revision": "88de9e3efcd695a502c1fc7cc5da124b"
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
    "url": "assets/js/12.7110d215.js",
    "revision": "547e25a8a70fa9db079d05b5921dea7c"
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
    "url": "assets/js/22.6ec41f81.js",
    "revision": "3980ecbdacd9551a3d6ebcb3ce1a840e"
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
    "url": "assets/js/25.7e7d6678.js",
    "revision": "55f6b6eaa22ed013159c2f899db6b345"
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
    "url": "assets/js/36.15c01e63.js",
    "revision": "a043eddcb03715669330030da42d6e2a"
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
    "url": "assets/js/39.e0c02bfa.js",
    "revision": "2592563b9a7a00bc84b4cd0a6495e027"
  },
  {
    "url": "assets/js/4.3e32741f.js",
    "revision": "305906ead6340d473ce5c2f68486ddf5"
  },
  {
    "url": "assets/js/40.2e2570d7.js",
    "revision": "c4e69d3c0f58041d9f3f990aa5987778"
  },
  {
    "url": "assets/js/41.2cfea0e5.js",
    "revision": "e3273306a6e7949fba7034b5925949d6"
  },
  {
    "url": "assets/js/42.5a9a0936.js",
    "revision": "f5baa91f0bb658f82860cda0b9454e31"
  },
  {
    "url": "assets/js/43.436d0857.js",
    "revision": "fecc62584ba42fc6f4dc43fae0a546f7"
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
    "url": "assets/js/9.11f427a9.js",
    "revision": "0cab83a4101caa9424141221a8ade726"
  },
  {
    "url": "assets/js/app.34c2286c.js",
    "revision": "1af8e387d5a07361bcbcda9b3ce5d495"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "94242994b8044aca450d294ff942dd52"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "262275189616585910fd4e99d21be5da"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "24cb7eb7d3ef3728b8f1240b97e550c1"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "4f040f388cbbd89d4fa01de6294a4f9f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "be545a594fb0e1fbbadaa435ca8cef7e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "f5cc43a60003a343e840c1155ee736da"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "b1c87e050507512d57e8a949ce794c2d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "aef6f6aa0f51e763dfec11ce9583c2a4"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "bd40d937b70072dab23c0216af2af55e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "6c62326da1b912c1a6f1bd41d27af9cc"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "02f7e1f1073223d9748cd8c40a8cb251"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "d8d93194f2958d71b29d6b35ae39ddef"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "aae40640b3efcaf8f148d4523efbce6d"
  },
  {
    "url": "home.html",
    "revision": "df63de0fc292ff7b60a1e3e08605f953"
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
    "revision": "76ad56deb5e3cfa0f0414f19003a8611"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "91569d9947e4118ff6b0f8acf6862b0f"
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
