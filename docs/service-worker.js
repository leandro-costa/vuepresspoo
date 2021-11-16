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
    "revision": "ec3513a5afe22a9fd7c851449469a652"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "28b1309447db42e58514480ab75a66ff"
  },
  {
    "url": "02_java/index.html",
    "revision": "4bafdcf5ac469e1b0b13eed9e95d60ca"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "07fe8d8ce46db39376b6260f5474657c"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "b0599404257596bc8303d02cbb0a27a8"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "69126df882e00dca98e1114d216a35be"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "dfdbcf757bfe0ee180278430bd8985f5"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "8869f87332c93e9ed06331d854a1d18c"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "7e5967865086b6be055167bd6b15da70"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "c681e9f70825ce22646b190b7be7c131"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "010a3665251255c7ff52f0b4d1ef2da2"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "24d2946f66614847d91b528182ff8866"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "efbbaa262204d90b0c1e05b9be478b23"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "21bc94d317ede2198e376544a08b832b"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "cb7d2cc5fa00eccfa4a9397f4bdaffad"
  },
  {
    "url": "06_threads/index.html",
    "revision": "153398ef177b4fab3b568e7749dec4c2"
  },
  {
    "url": "404.html",
    "revision": "049e1451dbfead1b5310efeeabec1b70"
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
    "url": "assets/js/14.8384c287.js",
    "revision": "6f2ffb2aad8eacdf9f3ff67ae6958b46"
  },
  {
    "url": "assets/js/15.1588b318.js",
    "revision": "51f17512eb56dfcfc96b0679b1981158"
  },
  {
    "url": "assets/js/16.3ed250eb.js",
    "revision": "877e956e77120c47ab5b4f23a3a1d305"
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
    "url": "assets/js/20.771a6d27.js",
    "revision": "d2bb683e76f77de2af83c92c3db7b3e5"
  },
  {
    "url": "assets/js/21.c3f7cb87.js",
    "revision": "694d7496684e882d0dbcc4c3d4296756"
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
    "url": "assets/js/27.46c4be53.js",
    "revision": "fd1e012c9485ed4efbfa26ca0868c54c"
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
    "url": "assets/js/app.21489f66.js",
    "revision": "2966262351a118ddc23b9da49dcf1db5"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "3cfc4943e6439fb4efee426ff2e26f15"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "f5dffd2ea350f3baeadd99992a7319c2"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "891446171a53a42f3ff524090c32496a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "423bc62ad9755ae0239871d18d60ecb6"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "fe7b8fd0e1be4a232ddab25a4ee346be"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "cc75235c5752d6589a420e9f96671d5b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "3f5cd93300b7f7729ad2e8462e0ccc21"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "8ffa0e952a7901d53e7a28acea5ee43e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "0ad07c73fe00fb5dfb1f6b8a9fc47e07"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "714f8acb981e339679e0fef29f6a6eda"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "c2fd27fccd99126e26ed8c1f29219fc2"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "aba12579af1847a9f6d08fe4e0a7c650"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "e45ba76d9fa9ee8e5f8c8ebb0fc557ff"
  },
  {
    "url": "home.html",
    "revision": "a1623c562e33d6c3611bd1bcc7638c93"
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
    "revision": "824ef825a6e893e18fabf5dcdd157799"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "bd2239bed619de8642637092e1db9968"
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
