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
    "url": "01_paradigmas/01_introducao.html",
    "revision": "2b7c4af4bf09b590db581cfb9883c8af"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "dac569034d3e9cfaac98675de12fb1c3"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "af934ce5f1b154ae7847bcff0ebee905"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "0c2c57fc15ed62ec6b7bba22cd5fb182"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "359ba7b21f489cd4d8f72f530f572739"
  },
  {
    "url": "02_java/index.html",
    "revision": "0daf81a4b70523a635048b0df8c87c93"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "1761e6d423c9145eefbd6ee4b752cb42"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "56fb6df78cd8d3d9d284140f63fc08c7"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "edf09eaa7499c82105a0c4a7e3937730"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "39b56410026a53941ec759c1cd380ed2"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "ea68b44662dc985adce5a36da276c311"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "57fafce42221b5017852fc2a18f38f0b"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "ee45a469873a0cc2eb4f83366f6bf59f"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "f877850d7943d975e8d0e792652ffba9"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "c767cf36708fd40969c86a34a1fab534"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "52a7ca42f38667b4719bff06c4fad7ba"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "c619422db053b9433738c6237ce866e7"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "77d4f27d04ea9c95bf5e2c4dfd42ca76"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "ce5fe491d4bd7d6d08e959b3eb78be07"
  },
  {
    "url": "404.html",
    "revision": "3669b4a2ad9de5bdbca7234308665f04"
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
    "url": "assets/js/11.747b6e75.js",
    "revision": "9920582233b825af4753bdd6e32df45f"
  },
  {
    "url": "assets/js/12.f81bdb42.js",
    "revision": "6747e1044d3ea075f0e9ef462f854624"
  },
  {
    "url": "assets/js/13.32e9e060.js",
    "revision": "bf5b5176080f7a0e1fc992eabd5477f8"
  },
  {
    "url": "assets/js/14.83526831.js",
    "revision": "4fce1260cfb042f3c598ba3ddf71fbf8"
  },
  {
    "url": "assets/js/15.a6b3b415.js",
    "revision": "fba6bce4c6256fd773eae003cc6a13ab"
  },
  {
    "url": "assets/js/16.9c2a40db.js",
    "revision": "94eae18ed1e133898eaf3e5a0b926fd0"
  },
  {
    "url": "assets/js/17.08411dd6.js",
    "revision": "62969358571a08361d6f2f39add91e56"
  },
  {
    "url": "assets/js/18.4a23eb07.js",
    "revision": "5ed771fb92d5b7940ea62f1eee793491"
  },
  {
    "url": "assets/js/19.a1db8bee.js",
    "revision": "e990d37edb01d129ca5597eb15803b38"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.3f5284fa.js",
    "revision": "d4f9c0428f8bbafb102af4b48a7d90fa"
  },
  {
    "url": "assets/js/21.ea713bbb.js",
    "revision": "0151175d05dc36fcc2bbc5723bcc6f83"
  },
  {
    "url": "assets/js/22.c284fd61.js",
    "revision": "bcf822644f8a26240cbd7d9ec29040a8"
  },
  {
    "url": "assets/js/23.b920c29c.js",
    "revision": "07a5f116f7291f18ffe53e8573709d11"
  },
  {
    "url": "assets/js/24.ea75aba0.js",
    "revision": "7b97e7faaa30faac80bf1bcdec552cad"
  },
  {
    "url": "assets/js/25.89b2bf6b.js",
    "revision": "cd1e995b50bd8d92acca874b578cac24"
  },
  {
    "url": "assets/js/26.f400d7fa.js",
    "revision": "8262e0f6bb9bf232fd5af2f2700be93e"
  },
  {
    "url": "assets/js/27.76e5ef69.js",
    "revision": "2d0bcada5cdd50fe540bd68ea99407cc"
  },
  {
    "url": "assets/js/28.7a560311.js",
    "revision": "4d0a842f351ceff40b8b3a0d44e63969"
  },
  {
    "url": "assets/js/29.748c2c6e.js",
    "revision": "11fd76cc6fe7939bb8568ec577d03efc"
  },
  {
    "url": "assets/js/3.ec25fcd2.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.a30b2eb3.js",
    "revision": "39d6ea3cd53928f8c504f4ec55077fa2"
  },
  {
    "url": "assets/js/31.4a39bfba.js",
    "revision": "bced48cab1205f142efa662fa78d4700"
  },
  {
    "url": "assets/js/32.a21f7e05.js",
    "revision": "ed8aa742a0c0b721e5015f4d1f5382dc"
  },
  {
    "url": "assets/js/33.1638a2ff.js",
    "revision": "2689648226124979f4363e9cb61ddc0f"
  },
  {
    "url": "assets/js/34.25342a09.js",
    "revision": "fcd6e8bff7d45b1deab309a8d86bcb3d"
  },
  {
    "url": "assets/js/35.21a058d3.js",
    "revision": "09ffcd8c17d3b9aa42f493974cdf6a62"
  },
  {
    "url": "assets/js/36.21824619.js",
    "revision": "2fdaf323d4d61bd56a6605f551b2cbe6"
  },
  {
    "url": "assets/js/37.3b949e70.js",
    "revision": "3749dff2b2fe64a4bb6c6629fa090662"
  },
  {
    "url": "assets/js/38.2b878929.js",
    "revision": "d3ab56714e36d37a5ba2221d53138a54"
  },
  {
    "url": "assets/js/39.94cf1e00.js",
    "revision": "ac41108469f8d747ca6b256c3459aa79"
  },
  {
    "url": "assets/js/4.9e85cc4f.js",
    "revision": "af7a881cf1e111f2bf3b0b520b468d15"
  },
  {
    "url": "assets/js/40.5d5a0e90.js",
    "revision": "f1a66c5deb8490cc0fa9a3208be865a2"
  },
  {
    "url": "assets/js/41.834d869e.js",
    "revision": "21ab148d1758fe236df12e7987aeacbc"
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
    "url": "assets/js/9.5e5b4a97.js",
    "revision": "7790c693a3965f1d9636b1bc16b06c2b"
  },
  {
    "url": "assets/js/app.59a7a347.js",
    "revision": "e17353b0ecfb9693453054efd327a32e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "c645cf9e904a89bd07db89414f8d91f5"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "8c00cae2b9bd3d5b6e785606e89f564d"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "e6a26cb135c69a8e8d51ec0c7edf8eeb"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "ab76f5da3e16399765ee9d577f3c4262"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "767acfbb95b8400f15846fcd77863249"
  },
  {
    "url": "Exercicios/POO_Avaliacao.html",
    "revision": "c83e1676c39ea93b88171a68b97361c7"
  },
  {
    "url": "Exercicios/POO_Avaliacao2.html",
    "revision": "1ff06e523b854c62f37aa784cd53143c"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "e0f7500f0a7c62eafe4a5f1914dc360d"
  },
  {
    "url": "home.html",
    "revision": "277b2c12663a96672b8c46eb94acfd41"
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
    "revision": "a012b1afff3fd6ac48dd269e1d6ffb2a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "6ee15fe995b3db969b4e378147426f1e"
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
