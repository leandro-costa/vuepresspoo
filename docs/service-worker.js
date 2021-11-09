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
    "revision": "4887bcfd1e97e09038305a1585d5d858"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "741021deb635d26e9aff048bb39d9898"
  },
  {
    "url": "02_java/index.html",
    "revision": "e5ada463bb37f2a9c935bb0ddb20deab"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "955d536b1a50a7d533ee7a9e5833ea76"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "4945269dde06cc0b2f50018bdef4a460"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "3001114dd3287c5e089742beacdd89fb"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "26e691cd3fc8a756151ddd0056b50bda"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "e1a62be9b51bd00e3ee2dfeea7a144cf"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "917163f1b77906e37f4b7cdf8c1e96e2"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "d06d28507c61ee17aac0479b77551a82"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "f351b82e6fca2fca96d5804242ea9119"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "deb0d89c61d720c01158916ee9e1d029"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "6f03ffcb0de00e7d1d78acaa702c373a"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "d42686b7147e4bf575387fb234b50fd5"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "f2c9bd582b76e2918262c4b2da664d39"
  },
  {
    "url": "06_threads/index.html",
    "revision": "b169e98dca955bb8b97c2ef6536827ff"
  },
  {
    "url": "404.html",
    "revision": "c3dda18c03f679bcd31e5063270f51b0"
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
    "url": "assets/js/10.7b4ca033.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.7c3a7863.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.b98239ec.js",
    "revision": "547e25a8a70fa9db079d05b5921dea7c"
  },
  {
    "url": "assets/js/13.3024d40a.js",
    "revision": "2e7511858d5a31e9624a0186a0da415e"
  },
  {
    "url": "assets/js/14.7947702a.js",
    "revision": "6b48515f35d4b4718ce25674f0b66c8b"
  },
  {
    "url": "assets/js/15.43a3b478.js",
    "revision": "cb0ce36f6bc904862b9a1aaa93a2e1a8"
  },
  {
    "url": "assets/js/16.d8390ca9.js",
    "revision": "cd93fec75327f348f11997daa77f9ab1"
  },
  {
    "url": "assets/js/17.39c6a797.js",
    "revision": "4498ca578e8c1aa7130cc292b6f312a5"
  },
  {
    "url": "assets/js/18.a6a66d33.js",
    "revision": "045c06f2ff15c876606009e4bd5d0a66"
  },
  {
    "url": "assets/js/19.cc5ed8a7.js",
    "revision": "1f4afffa5190e0c56da96170b6c7dcb3"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.29127d34.js",
    "revision": "4818dc38669962f14f637dc75c9a0f78"
  },
  {
    "url": "assets/js/21.45adf415.js",
    "revision": "965ee62ada6480d020c65c79ff2aeb5f"
  },
  {
    "url": "assets/js/22.aa493398.js",
    "revision": "3980ecbdacd9551a3d6ebcb3ce1a840e"
  },
  {
    "url": "assets/js/23.d1bf4d55.js",
    "revision": "c2e6dce521c5a5450e67cc1db163dcf3"
  },
  {
    "url": "assets/js/24.c4e9449b.js",
    "revision": "7704a4d3e6527de97086c50db5f54ed5"
  },
  {
    "url": "assets/js/25.7526fdf1.js",
    "revision": "55f6b6eaa22ed013159c2f899db6b345"
  },
  {
    "url": "assets/js/26.c57801b3.js",
    "revision": "0ccca23ef1e0db84fe0466159f665c41"
  },
  {
    "url": "assets/js/27.d236aa3c.js",
    "revision": "2e35766db8aa66542c56ffaf3b56dcf2"
  },
  {
    "url": "assets/js/28.a8d09e80.js",
    "revision": "19229f2ab954316d48bb385178157cee"
  },
  {
    "url": "assets/js/29.253f97d5.js",
    "revision": "c7bbbab68ede3d542ccaff8ed1b38ff3"
  },
  {
    "url": "assets/js/3.ec25fcd2.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.988f85d2.js",
    "revision": "dc8efa25dd33cc4a89f0f1899e1cea38"
  },
  {
    "url": "assets/js/31.97513f0a.js",
    "revision": "15a9ac0110d2d83bd6530e48af68926b"
  },
  {
    "url": "assets/js/32.dc632ce1.js",
    "revision": "391bd66c5d743801911f5f9210a60970"
  },
  {
    "url": "assets/js/33.21a00006.js",
    "revision": "b33c73ac4f872e172d03203cd1166e41"
  },
  {
    "url": "assets/js/34.9de4a761.js",
    "revision": "86e91efcafec4d9bb978785b0675fc5f"
  },
  {
    "url": "assets/js/35.d4f3cdfb.js",
    "revision": "a736941307cbef8ce8f36a6b0c0125ef"
  },
  {
    "url": "assets/js/36.b11c0b59.js",
    "revision": "b0057cd63f8a3868ed69a78a2aa808c3"
  },
  {
    "url": "assets/js/37.c0c494e3.js",
    "revision": "39809d3b1dd038d9909bd34b4ba98a99"
  },
  {
    "url": "assets/js/38.00c7227c.js",
    "revision": "54dd3c0674945371c0aa5d9365d38dc2"
  },
  {
    "url": "assets/js/39.a0742e0a.js",
    "revision": "7d9198a0c0bf0b26e3094f5a331d4db8"
  },
  {
    "url": "assets/js/4.676b4c9b.js",
    "revision": "82398d7da3621fe72ab1cc90af13a25e"
  },
  {
    "url": "assets/js/40.8bbe1cf9.js",
    "revision": "8957052f84ba737358ab7ea733895d80"
  },
  {
    "url": "assets/js/41.60849ede.js",
    "revision": "b64e40fa2cae017f3548e74a5f5ed043"
  },
  {
    "url": "assets/js/42.957f8086.js",
    "revision": "a8bb9472bafe1b330175da1f63326ea2"
  },
  {
    "url": "assets/js/5.dad11dfe.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.1ecd167c.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.38b68977.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.830e6465.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.2bfc82bd.js",
    "revision": "c320be0eaff109446c03547a250ba958"
  },
  {
    "url": "assets/js/app.302ea28b.js",
    "revision": "7b04814faceb67e13de7cad2cafdf697"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "70996f705abfc0bff4858a9b1dc57ca7"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "b8bc0db260d247b51310d18bf5a56ea6"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "3fc096ad6693d782aa4822840805b5db"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "b400322c343969dec1f18017da5fb462"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "3dad302fa6857cb94c218d4dbc35bcd1"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "8e2c25d1f94627cae6999d0a9f59df77"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "28532a7311cd1aa1c5b8b7a10077edea"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "96edf7c39532d9300522adbe61259d20"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "17cdcf517b8b4772d2d7137ca562daca"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "628e836d8151b800ba6c9a5cfe69ea5c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "08f7a394ebdb0999b701296f056e5a85"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "1511c6281e413ed71c05868b21a31622"
  },
  {
    "url": "home.html",
    "revision": "e4fae5c005e57ef60e3b12b9e27a267b"
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
    "revision": "0edea7df239d7a47ea38413a6ba30d3e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "50244d9bcaac4d01c4cb9940e9ba5672"
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
