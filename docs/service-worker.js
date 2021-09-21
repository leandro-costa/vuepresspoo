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
    "revision": "5e4c82f6a6e67a006302530d2e29923e"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "0d9be81653b4fa9500f7c8f02cf253e4"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "9fc86e0532bdf417697d32bce52d468c"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "e4a01a71ef0ce80d01d87c8e451a57bf"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "7665cb9b7289e1289f62a020aef2717e"
  },
  {
    "url": "02_java/index.html",
    "revision": "abc662c6c8e887b186f4ac7c77c984bf"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "9d76999daea8c8cb68940c81fa5209ef"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "c91873b864e9819f3854cccc0be04959"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "5b9cf86110744810c91925fc0a9e9107"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "661d5691ec892403e27f091677e5402f"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "88e26a0a61bb20355886edaa0e60505f"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "028681a281b5c584aec1314ed1d1a0f4"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "5ee573acfdfea522d2cfc6ee0c392836"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "2566bae5fd5629dfc62c410510f258e7"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "37fe78b2052f8540ec42c23748716c7a"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "1935b3fed8e9fb95c9a9b8ec3491fbc9"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "028189afc8b0122315278b2973550adc"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "9f024931ca5eb284b08f7f8d4da3ce07"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "4cce92ae4a43546406485eb82ea39c15"
  },
  {
    "url": "404.html",
    "revision": "c2f2f8d8067160fa4dfcb4c35d3920d0"
  },
  {
    "url": "assets/css/0.styles.e618791d.css",
    "revision": "50748264c0a34c836ec27f7ee28150f4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3832c7ae.js",
    "revision": "a7eba6237068c6a7418ab7c21f39fd7c"
  },
  {
    "url": "assets/js/11.8320960f.js",
    "revision": "fbde35d9ce06f34ed96d4edbdfe7f6f9"
  },
  {
    "url": "assets/js/12.092b1a97.js",
    "revision": "49737beab2e70c34fe25066d0af6f5d2"
  },
  {
    "url": "assets/js/13.da0c79b7.js",
    "revision": "fa93a0886c386e45742e58383776eb0a"
  },
  {
    "url": "assets/js/14.95ab8b80.js",
    "revision": "2667a0d2307afd4729c0c2148633ed30"
  },
  {
    "url": "assets/js/15.4a05d40d.js",
    "revision": "db050bc3bc99a63565d601ca191a42f0"
  },
  {
    "url": "assets/js/16.c07065ac.js",
    "revision": "1b787da7e76512268e81d8ff25249fdf"
  },
  {
    "url": "assets/js/17.aa984ec0.js",
    "revision": "ee4b7e654abdbb69086110baec46ae7f"
  },
  {
    "url": "assets/js/18.a3f002af.js",
    "revision": "9dc65424a817ed4cbfa7a45273c0849f"
  },
  {
    "url": "assets/js/19.e938d167.js",
    "revision": "9d51535c88ce2a92b3be751980facd67"
  },
  {
    "url": "assets/js/2.1941716a.js",
    "revision": "689a07a873de99cff5088eea56834c9a"
  },
  {
    "url": "assets/js/20.04d1346f.js",
    "revision": "494da64cdf2cbe22c7f3b99588e6e801"
  },
  {
    "url": "assets/js/21.fcc97054.js",
    "revision": "6c2d0a36306c880346a53e41a51e100b"
  },
  {
    "url": "assets/js/22.07f84987.js",
    "revision": "fb954d6e29ca185987e37a654bf7a9d7"
  },
  {
    "url": "assets/js/23.99d37abb.js",
    "revision": "f570f67e015161e22efb589c38bc3605"
  },
  {
    "url": "assets/js/24.f139c97e.js",
    "revision": "18b60a3c7c59775ef0b010c9db91693d"
  },
  {
    "url": "assets/js/25.97a88b9e.js",
    "revision": "72513c672930f29148affd29b4610197"
  },
  {
    "url": "assets/js/26.8397c922.js",
    "revision": "264f9970d20025a75409494f71864e72"
  },
  {
    "url": "assets/js/27.ebdc4f36.js",
    "revision": "37aad2f711345c0ccece7fe8ed776689"
  },
  {
    "url": "assets/js/28.3689cd24.js",
    "revision": "4ad75717f172dacf99db81d663d1d669"
  },
  {
    "url": "assets/js/29.eadeb886.js",
    "revision": "8186552f54881d2969fc105bd0bca29b"
  },
  {
    "url": "assets/js/3.57e882ea.js",
    "revision": "bc96c1ee9a13fe73e2a722d1b3ad965b"
  },
  {
    "url": "assets/js/30.e4c4a8ce.js",
    "revision": "46c8a7e3f8efcfcda0933d981c460f77"
  },
  {
    "url": "assets/js/31.578089ac.js",
    "revision": "ad203ae185564e0cadcec54b78a5fdf6"
  },
  {
    "url": "assets/js/32.3c690a98.js",
    "revision": "474692226adf497c4f0dc112bb80c16c"
  },
  {
    "url": "assets/js/33.c4dd942d.js",
    "revision": "bcb0a3690ab174c71f221ce5e7840a89"
  },
  {
    "url": "assets/js/34.96165e5e.js",
    "revision": "9edc4cb8b4a1b26874f43ccc244df2ec"
  },
  {
    "url": "assets/js/4.fb7d07f3.js",
    "revision": "ff2da0f985ca161312a7a2bda16f0e6a"
  },
  {
    "url": "assets/js/5.f84105f3.js",
    "revision": "e5fe9c3c505cf29e9a27ac287a5bb94c"
  },
  {
    "url": "assets/js/6.5ce8b86c.js",
    "revision": "1a36dea4826db48369048f8f6a512367"
  },
  {
    "url": "assets/js/7.303d0856.js",
    "revision": "99f11f28b299682f083e4d8fd0450827"
  },
  {
    "url": "assets/js/8.be8878ea.js",
    "revision": "e37472f86461a95961c81a7748b33ee6"
  },
  {
    "url": "assets/js/9.94899076.js",
    "revision": "6e94acc41fbde08c98aa885df478e11a"
  },
  {
    "url": "assets/js/app.0a2d0a1e.js",
    "revision": "14c8ca9c78f69140022601b284bc9b43"
  },
  {
    "url": "avaliacao/index.html",
    "revision": "c78737e0321bcdbb93e67f8295f2fcf7"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "aac5d8407084e0444a992328e8cbddf7"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "6811f51e739e6543e3beb574bbb82839"
  },
  {
    "url": "category/avaliacao/index.html",
    "revision": "daee88a268f6d6204f08f609b32b9560"
  },
  {
    "url": "category/index.html",
    "revision": "4ce0848e668422416524f2cbfb3c917a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "1d14c1c776eb0b8b703c5b369197608c"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "4dc88a9ca6dbe307d4fa0b47b175e8ec"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "e80a61ddb6be59d904f3d33c8b623ac9"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "c8e63cd7fb44314077386607e6eaf996"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "4620ea05e0093deef123a7408576b472"
  },
  {
    "url": "Exercicios/index.html",
    "revision": "f6b225db6e4ed52265d14834c05bfbfd"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "7d6327af768e737a4c9f9d554e2d938f"
  },
  {
    "url": "home.html",
    "revision": "74ab4d07aa2c13f07a4a43b285d6d769"
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
    "revision": "4d7f0d3e7163f282317ff36ace8b5cdf"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "8342bcdfa0d7205dd3d69a500cfd4bcc"
  },
  {
    "url": "tag/index.html",
    "revision": "5ea877f79801f5f286acd4a672dfe2b4"
  },
  {
    "url": "tag/poo/index.html",
    "revision": "efb21fe11e4677488bf1a04d383b9917"
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
