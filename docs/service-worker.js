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
    "revision": "89ab883b20ec2887d2d43ed51d3396b8"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "11466500fd739d6923bcb86a6dc2d552"
  },
  {
    "url": "02_java/index.html",
    "revision": "ae843d425f077bc7915ec92d68ce0b1e"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "d374b13e54b9a64f79718d7fc86820e1"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "f5f0d0758416c0f699eec0b818f45705"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "f76cb7c9473cba2090671c0666fd2a4b"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "51b795ace4324cbbb46785514d4f083a"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "32ce49818bed13eec4f583a7e767223e"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "1f0b0728b6b7c7be1032188dae126cea"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "c9ebb6f177d2aa264d817f4eb76de975"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "faa7209536e65ca1a47cb9fc99cd8e7d"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "43384c60a62bcd17b2cd56a783f82e1a"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "7c6cbb83cb06151caf33252a741f9c29"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "4e31cab5581017b2291d54582429fdf4"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "33994e1d2407025129a5447c25b898d0"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "625125a266c41c37e514b9be23891266"
  },
  {
    "url": "06_threads/index.html",
    "revision": "9a31013ec5dfcdf8525c708664a4aad9"
  },
  {
    "url": "404.html",
    "revision": "b50253858b993c9fb33c4dbfdf9f69aa"
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
    "url": "assets/js/10.c03d63ce.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.2bbf0a3d.js",
    "revision": "c17a1e46bd85dff0eb022e6ae4eb6074"
  },
  {
    "url": "assets/js/12.8f3f4337.js",
    "revision": "4fab65737690ee85939c344afdd5630d"
  },
  {
    "url": "assets/js/13.21d2fb10.js",
    "revision": "4a0996d06cf79e6d93a058dc0621cebb"
  },
  {
    "url": "assets/js/14.76876bac.js",
    "revision": "951718a771bf8f49b080bda9fe9e36b3"
  },
  {
    "url": "assets/js/15.2ae733df.js",
    "revision": "3f0b21e33cd098d23a8c0eff78c469ad"
  },
  {
    "url": "assets/js/16.ee75bdc8.js",
    "revision": "4e847804594df7878f09e5987e7d822c"
  },
  {
    "url": "assets/js/17.a7b72ce8.js",
    "revision": "d75924dcd26059ca37228d0b734b720e"
  },
  {
    "url": "assets/js/18.b0c64eaf.js",
    "revision": "77890a2c200e7ee56cd5ebaa5967c5ce"
  },
  {
    "url": "assets/js/19.8e18c932.js",
    "revision": "fe0598f4f0e958b71101a7e22eff5e3c"
  },
  {
    "url": "assets/js/2.4b73ac34.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.f2395b4d.js",
    "revision": "cd3287307ef32bbb6a49f5e1c0c480c1"
  },
  {
    "url": "assets/js/21.2ec6fc4d.js",
    "revision": "0b8ee90c66224f530bb165e079d01797"
  },
  {
    "url": "assets/js/22.caa5d071.js",
    "revision": "2ca5a41e54d555a8cc1f5aaa07ad3f1c"
  },
  {
    "url": "assets/js/23.bf80fa07.js",
    "revision": "d10236a44d37a8ba285b0149693a4040"
  },
  {
    "url": "assets/js/24.6f32a9a0.js",
    "revision": "c4499c74c0a6d7fbcc6d27cad42afcc6"
  },
  {
    "url": "assets/js/25.d7b138e2.js",
    "revision": "1ac3d128df466d578bc3395a240c13eb"
  },
  {
    "url": "assets/js/26.546a3bc0.js",
    "revision": "860cd953d6b857c12b99276fcaeadb06"
  },
  {
    "url": "assets/js/27.b25a2ac4.js",
    "revision": "7de81d44c5395e79848b423c76b54e21"
  },
  {
    "url": "assets/js/28.26f36e23.js",
    "revision": "de004e9eb900491e25333ff09c97b672"
  },
  {
    "url": "assets/js/29.c7582608.js",
    "revision": "03c34a1c735fafea9c3555745a3cbf3d"
  },
  {
    "url": "assets/js/3.2dbd240a.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.fdfd6835.js",
    "revision": "b8ee2e7938a3977bf07eca5463480a1f"
  },
  {
    "url": "assets/js/31.c463b462.js",
    "revision": "b1723a1ef59ac995b0dd9baa09284ee6"
  },
  {
    "url": "assets/js/32.138d32e3.js",
    "revision": "71de6559ab9fbebf2135b5f177f42e89"
  },
  {
    "url": "assets/js/33.889add37.js",
    "revision": "5c4398a0763d0808d5dbb184414a15da"
  },
  {
    "url": "assets/js/34.929c74b6.js",
    "revision": "90d6e97faa19600b333a8fd43f756290"
  },
  {
    "url": "assets/js/35.3a2eb9f6.js",
    "revision": "e6c84b4108f2277092cad7faee9dbef9"
  },
  {
    "url": "assets/js/36.06a7128c.js",
    "revision": "455d08078c5487c6a100f5c1dafc3c63"
  },
  {
    "url": "assets/js/37.3e20dc42.js",
    "revision": "5978f74c6cff1ac2c0f6b55335300c87"
  },
  {
    "url": "assets/js/38.a303658f.js",
    "revision": "6862a291f93bccfe07dec904b5d4ac47"
  },
  {
    "url": "assets/js/39.cdd55c0e.js",
    "revision": "e59097ad0826153db1569c15b5150722"
  },
  {
    "url": "assets/js/4.f9962ee9.js",
    "revision": "86d1b57326bdf381a47bc9ce0e3e37d0"
  },
  {
    "url": "assets/js/40.ab25dd7e.js",
    "revision": "f8b22258bca55b2750c7b9508ff006a7"
  },
  {
    "url": "assets/js/41.438b8faa.js",
    "revision": "786bb5c208ffe9978a7dc35248a88158"
  },
  {
    "url": "assets/js/42.c31c9480.js",
    "revision": "410d141015efbe430060cd2148b37ea4"
  },
  {
    "url": "assets/js/43.df395a2a.js",
    "revision": "e395a6eba22ac3c6f64587656bdfbc39"
  },
  {
    "url": "assets/js/44.ddab9511.js",
    "revision": "7cae35d10d70917b8c971b014cfeb935"
  },
  {
    "url": "assets/js/45.3715f19b.js",
    "revision": "46b9ef7cc7342742fce950f710d87fb3"
  },
  {
    "url": "assets/js/46.d9eeefcc.js",
    "revision": "7df68645d9d60845e79e6cf7c4513943"
  },
  {
    "url": "assets/js/47.e21af6ac.js",
    "revision": "536a50e2228175db50d7d5d2cbe8b583"
  },
  {
    "url": "assets/js/48.d22b4840.js",
    "revision": "73f03e83478a8ef887e729d489d8d2f2"
  },
  {
    "url": "assets/js/49.82cd411f.js",
    "revision": "e807f694565b200afb93aff75f4534b9"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.da04edcd.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.626b1fa9.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.f964060c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.b0329be9.js",
    "revision": "ef2d490b345054b333c04521c2bf1d94"
  },
  {
    "url": "assets/js/app.b82b069a.js",
    "revision": "903b0cf1d0d4e2135f985990a1e75ab8"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "2a9ec39e4223257ad0e860f05cc95d81"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "eb493e40e8fe0ab2d323f3926aa36983"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "414359982c390f6c2b12429e276275ef"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "46045183f7991d124f30853e16fbfa71"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "e73dba55be6b6f7fc7d7c0a0469da68e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "fb47f72d0d146a8fd9610ee3841c8ddb"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "9201710d7e9425c848c9e48536ec4585"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "7490120872eb6a13e30363cd4e446348"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "e057986d17c5f5d2960fb25270a9d3a7"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "0df4c1469f20065c1224f6bde921612f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "379e73668d317ce9f1e44db027496f09"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "05ace5b60549a7375b9a11ebcde638b7"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "5f9c2d17300ddd529846d2ce6bf85687"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "a557bad3ee65776f356146e180ff7ca8"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "48faf0055ff62e4931e2b4b4321af4ba"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "e47250324e12f158906b1fa7c575212a"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "76a575c6457c1d3c83f9708af5115c23"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "ad4b05e106453078438f2b42b641ea07"
  },
  {
    "url": "home.html",
    "revision": "774cf4a8e8cb135ed75deacdc2444ff9"
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
    "revision": "bff608d11321ba0db57a769130da6fc9"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "fc212e9e4943c414e2a04a3547f793a3"
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
