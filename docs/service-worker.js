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
    "revision": "582f346b5c8e413c932281768db10bfb"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "90ae17fafba93afe939935265d3434bd"
  },
  {
    "url": "02_java/index.html",
    "revision": "7bf18593955ea16eedc71f609ec75320"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "afbf0464fdccf318f34c6df46c413791"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "342856b9d8bc7aee0312bd6637207011"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "fa12711090053123515574ef1976b8db"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "32158ed9bc1d4b3a5f58e06d5b0a11a9"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "cace8da197d63ae5b6892098783d6b94"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "c2a43c29d908a913570f5affde9f64d5"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "c9b18c883194638047e05b34f39bfb18"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "97b17a5002c8787ebbd7e836cfeb9b7d"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "7b8d94b6e66d7819197dc03927ef0f8e"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "cf86ecbfcc881bc3ef48f2a42bf1b192"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "eee20d71c34f57e2efdc5cfd5f1ffd33"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "23df72b0b41621293eab60513b85b5ec"
  },
  {
    "url": "06_threads/index.html",
    "revision": "4c1fa8f884eafa5ca4abb18097ff077a"
  },
  {
    "url": "404.html",
    "revision": "3daf2dd1f908fff4b35e0bb26b08a657"
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
    "url": "assets/js/app.dc597054.js",
    "revision": "d349bd5607142a033964b746eb500a63"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "e7e7f1c7a15e25888d6c2d9af6e681e4"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "e4e0595d6bed67c3849a57c9404aec9e"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "92f38d1167aa4f8a15e1dce65f4f89f2"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "8d562fd9f3f470398d80919841f26751"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "f7fc44a0ddeecab4ba5661d05b317368"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "f91c00465117d578b756bfc4018ec4dc"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "c1e8f6d62401ef6ded24c3135ef04f3f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "c99de87dcc8df3d6b256364df59fc357"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "72f56aa6311e5628adffc5324aa1033f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "57c598f5f787687160a08154da8435df"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "87d8d4728293f1767e42e7382bebca36"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "8335aab36042e4b2aa77308840acb1ec"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "500476775048a24f4a873016fdc635ea"
  },
  {
    "url": "home.html",
    "revision": "eda76fbaedfa19b23f27ef221b95131d"
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
    "revision": "4a879349870e364033978fb83085876f"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "647836f795de5fff817b3956145cf0cc"
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
