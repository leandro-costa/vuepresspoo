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
    "revision": "3bfb3538407b1c0e552b30c356831806"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "c9a52709703fb602b7d00b5fcc464bfe"
  },
  {
    "url": "02_java/index.html",
    "revision": "0fb973a836b7d390cfe52aac510c93d4"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "424fff58eb1990bedaa38a0b95fadbde"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "34436d0077bc571c54334398c3064a6e"
  },
  {
    "url": "03_conceitos_OO/03_Construtor_sobrecarga.html",
    "revision": "df5052ec11bb2ccae55c50fafe8f5c08"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "7e15ca158e2b9b9350622d1b9c3b352c"
  },
  {
    "url": "03_conceitos_OO/04_static.html",
    "revision": "9f2b18bba30ac6a92b4979c2e38571fd"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "2cc6f3757a14e8907ef9957b1e1a9f15"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "fd0cbd1644957a8554bfb3b1678734cb"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "9e9176739cc5e09cf31c0070fc57b597"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "ddd42232b1a892b27344e3cb36fad457"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "f23d93dc0ad1bfe4f509581c34dcd1a2"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "ac2d7ccace9eeb20e13247e971e6a7d0"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "bda5f37a8de551604b02a3aa224151cd"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "4a49cca1459b925eb3151283442cfb7e"
  },
  {
    "url": "05_Exceptions/index.html",
    "revision": "3c08732ef82f88ad99c861f125a3409c"
  },
  {
    "url": "06_threads/index.html",
    "revision": "d94cbb1caa879ecd8f4c7ba13eba4778"
  },
  {
    "url": "404.html",
    "revision": "583a7257bca6b66125c7df8e0fb8642d"
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
    "url": "assets/js/12.0e22810f.js",
    "revision": "6211f641853862de7e1100f257cc83ee"
  },
  {
    "url": "assets/js/13.dd5315c4.js",
    "revision": "fcff63ab95edcd0106a5937094488076"
  },
  {
    "url": "assets/js/14.e13e4569.js",
    "revision": "94134c13c1166cca5bf5498e952b1e7c"
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
    "url": "assets/js/17.4af56083.js",
    "revision": "5e551f631054653aa4da65bc654dbd92"
  },
  {
    "url": "assets/js/18.316542e9.js",
    "revision": "861bcc3aaf020144cf316a81d913da93"
  },
  {
    "url": "assets/js/19.58ee268e.js",
    "revision": "8b264285cbffb83683cf2d0d72cc1d30"
  },
  {
    "url": "assets/js/2.4b73ac34.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.f3b5a10d.js",
    "revision": "c306e1d2fd065f081eee0d4fba5de29a"
  },
  {
    "url": "assets/js/21.c5bc2fae.js",
    "revision": "66a34e471e3696566cf2928d98fd4f16"
  },
  {
    "url": "assets/js/22.d7747ad0.js",
    "revision": "985d3a27b440f87d09086e8bf5ac4719"
  },
  {
    "url": "assets/js/23.b61b217b.js",
    "revision": "5df43f9ad081a092193d227b2207ca24"
  },
  {
    "url": "assets/js/24.e28f2041.js",
    "revision": "cfe938d5f612ebf1f4c7b64da4f435e8"
  },
  {
    "url": "assets/js/25.e7419220.js",
    "revision": "bc5485a9dceedf66620ba644ddf97838"
  },
  {
    "url": "assets/js/26.4c08ca27.js",
    "revision": "eb3ae32e7cc2a68185e9b448a9c7d18c"
  },
  {
    "url": "assets/js/27.9ae3f5d9.js",
    "revision": "b05bc7e671b6fa443fcc9edb60eafd19"
  },
  {
    "url": "assets/js/28.19661e8a.js",
    "revision": "19b46164daaad630362e4a0216e28cd7"
  },
  {
    "url": "assets/js/29.511781c4.js",
    "revision": "9e029990fe5c84726a67f9ef6f8f4d2a"
  },
  {
    "url": "assets/js/3.2dbd240a.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.5bd3bc06.js",
    "revision": "cdee0108deba0ffac187957670173013"
  },
  {
    "url": "assets/js/31.9f3ea52f.js",
    "revision": "7a880983bfabbcc51868bf7f638d53e6"
  },
  {
    "url": "assets/js/32.90b7bf69.js",
    "revision": "e7fb01bcddde779d5935e52ab5d1e9ad"
  },
  {
    "url": "assets/js/33.90aeb670.js",
    "revision": "5227c3ccf674dc1682577e6364defbeb"
  },
  {
    "url": "assets/js/34.66fac972.js",
    "revision": "ccde20ae2667497126ec446b5cc5fbc9"
  },
  {
    "url": "assets/js/35.bef85426.js",
    "revision": "d9ec1658d4e522dd64604f426f628d7d"
  },
  {
    "url": "assets/js/36.44bf2a30.js",
    "revision": "a9c68716228b4005e25dd7cac9680269"
  },
  {
    "url": "assets/js/37.0701420f.js",
    "revision": "a68bd276be1b4610ec73b5f57fdcad2f"
  },
  {
    "url": "assets/js/38.f3fef817.js",
    "revision": "c4f83e7bb79ec7aa37e0c92fd340756b"
  },
  {
    "url": "assets/js/39.50d7024f.js",
    "revision": "2ddc9f5a26457a713411991fd4ce60b6"
  },
  {
    "url": "assets/js/4.32595d8a.js",
    "revision": "9e946e49c0bb0f30637909832a0a0df4"
  },
  {
    "url": "assets/js/40.261d2b79.js",
    "revision": "bbbf5923c06ce96e2b23b59ab692cc07"
  },
  {
    "url": "assets/js/41.20fdc667.js",
    "revision": "57be5800a148cfe7dcde0f308a1dde7a"
  },
  {
    "url": "assets/js/42.2c8b99aa.js",
    "revision": "b3353c2b4b9fbf32fbbf4225fc6e3b0a"
  },
  {
    "url": "assets/js/43.2007bb87.js",
    "revision": "ddd09b048e0b097991b69155c486a502"
  },
  {
    "url": "assets/js/44.b0f9ea59.js",
    "revision": "d291aa8ed4d759adde52521203839047"
  },
  {
    "url": "assets/js/45.9c8daf55.js",
    "revision": "62cf405513bb08ac272fbb262d5830d3"
  },
  {
    "url": "assets/js/46.868604df.js",
    "revision": "78486b5ef8d03bed30c70146549f9d41"
  },
  {
    "url": "assets/js/47.66decdea.js",
    "revision": "d33add3eee49147922856177e000563c"
  },
  {
    "url": "assets/js/48.f47d6719.js",
    "revision": "37fe713ebaf83fdf3315dfcefcfccd00"
  },
  {
    "url": "assets/js/49.02a475cc.js",
    "revision": "9c5e0075896675e0d00313a477c16161"
  },
  {
    "url": "assets/js/5.8c418ca5.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/50.55ed320a.js",
    "revision": "295dd51e95a5bd295e722624c7387aeb"
  },
  {
    "url": "assets/js/51.9ea1a4c1.js",
    "revision": "0d863571b3f15411ada1271ff4883aa8"
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
    "url": "assets/js/9.940f3301.js",
    "revision": "f8e238b51995810df4c2b7a10280f367"
  },
  {
    "url": "assets/js/app.82c92b1c.js",
    "revision": "a69e138c5d971e59399ada3b15dd90ea"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "f1837f420d4406259bce37ac3a750221"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "99cd98d8484c9635d224263fe7e29108"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "ec54ad95a87d9bbc6c55d1cb30955f19"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "2e851922a3be330bbafd285860c5faae"
  },
  {
    "url": "Exercicios/ExercicioException/index.html",
    "revision": "5f1079b8e3718131074ae308a3960447"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "1cc56afe676c82273f056b1c1eeea88a"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "e490ea050e4f20c1843d0fa0b3c9b05b"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "2d3913ad82d478c0c0a3f86baf7faf2f"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "6d6c9b2b4aa47c213db57479c2288d46"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "ca4ce76172bb55949708d14d18676513"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem3.html",
    "revision": "81921a5338e960dfebfd11a6e2d66f4e"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "652b1ecfff601593c3f4eaff002b3faf"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "104720f2edb76c3adad343941dabc5fd"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5v2.html",
    "revision": "1848b9280b1bdf659c3ecb60f931720c"
  },
  {
    "url": "Exercicios/Java/Caelum.html",
    "revision": "9e6406cfd13667fc3e96f599c105f432"
  },
  {
    "url": "Exercicios/Java/ExerciciosK19.html",
    "revision": "e228c1dc00aab63c8d0e121477dda94c"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "a8a6ffcb190070ff95e16118c92659b4"
  },
  {
    "url": "Exercicios/Java/TiposPrimitivos.html",
    "revision": "1996da425246b9df71a169f2af478b7b"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "821fc5baf32cdbb72921bf675018cd6e"
  },
  {
    "url": "home.html",
    "revision": "4813566595c38b3eecac13670295ec37"
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
    "revision": "0102c4b53ee7978dd2cb8200c16e360e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "898f7d6b68698b68d45e645f05b28f2e"
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
