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
    "revision": "1e7d1fd03f1dec3393cf867baf91cdff"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "741f1271ae4d745256f0571e7043b418"
  },
  {
    "url": "02_java/index.html",
    "revision": "6402781ac38b64890c15068d281fd5e4"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "ae4523a768b5bc62ea7164c93613a71b"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "11a68083bdb299c8924d1cc297e74827"
  },
  {
    "url": "03_conceitos_OO/04_dominio_aplicacao.html",
    "revision": "60db14c7d3583e33c73dd80b232def8d"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "a06fb8f4999f406f5c9af5d56d176449"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "5638773b4f0c4a1e3768c413e29cf161"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "a68122a6d3c6ec999b592fd98290e3f1"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "0c11b5b2f5c76700788c1354f19d183d"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "b2336335d3d94860ad19908378d720ae"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "13037119af23c909483c8a051f7005e1"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "3387dd2251e5ab9e2ad62329bee36874"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "c5d809249b3dfe3a05deaea20738e4ce"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "d63a06854075f183c264b71bfa93eb0c"
  },
  {
    "url": "06_threads/index.html",
    "revision": "d10ff42b0164009e5dea740a802755ee"
  },
  {
    "url": "404.html",
    "revision": "1d0aba41cfe8ebb8eef029915b553e79"
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
    "url": "assets/js/13.a80348c4.js",
    "revision": "6ce36dab8c48aa592db4a85e4ed0b9e7"
  },
  {
    "url": "assets/js/14.d515f939.js",
    "revision": "951718a771bf8f49b080bda9fe9e36b3"
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
    "url": "assets/js/17.15c3871c.js",
    "revision": "2592ec7a39e00a9b62a1aead8f402777"
  },
  {
    "url": "assets/js/18.13e53763.js",
    "revision": "fcf1fd6b1029e3ea42fa072fc514c0d6"
  },
  {
    "url": "assets/js/19.531d2e92.js",
    "revision": "b0e12a8e56c3ce2745007ebeb9454f80"
  },
  {
    "url": "assets/js/2.3ac662f1.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.7d8f8bdb.js",
    "revision": "68dcfdf9c1ce2e772805ed3c3b6e1baa"
  },
  {
    "url": "assets/js/21.c3f7cb87.js",
    "revision": "694d7496684e882d0dbcc4c3d4296756"
  },
  {
    "url": "assets/js/22.2811a8fa.js",
    "revision": "4f2715740d8aebe316e22ca7d034dd89"
  },
  {
    "url": "assets/js/23.74e43aaf.js",
    "revision": "3db844be1076254bf34e01062c0dd3cc"
  },
  {
    "url": "assets/js/24.4c19788b.js",
    "revision": "da519ff6a631a1d9fe31cc4d260ff3f4"
  },
  {
    "url": "assets/js/25.764d8cda.js",
    "revision": "9a2f831fbab9201ff14e93df2496c1ca"
  },
  {
    "url": "assets/js/26.77412ad3.js",
    "revision": "bc81231409de0a9175f8f5e1c266471f"
  },
  {
    "url": "assets/js/27.b4feb588.js",
    "revision": "2488ff9fbe96a4585bbdedc4ee380b66"
  },
  {
    "url": "assets/js/28.245709eb.js",
    "revision": "3bd57fe54235cb9ba6a7d646ebaa323b"
  },
  {
    "url": "assets/js/29.34a65b5a.js",
    "revision": "f7179046d035060f547fb03a0f398226"
  },
  {
    "url": "assets/js/3.d3a2ab93.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.cf83fc87.js",
    "revision": "427d333905d971c037f797f92e5092fd"
  },
  {
    "url": "assets/js/31.d44c1aaa.js",
    "revision": "9594fdee07bb91eadef3e7508794eafc"
  },
  {
    "url": "assets/js/32.4f59399f.js",
    "revision": "a8f26e321f06771952bcd62445d9e110"
  },
  {
    "url": "assets/js/33.be388dfd.js",
    "revision": "0ad74a066a2462e6d60e96a569c0a374"
  },
  {
    "url": "assets/js/34.1bd7c7f3.js",
    "revision": "1c09af2165ae2711b1ef4622d9390a42"
  },
  {
    "url": "assets/js/35.a0c4a9b2.js",
    "revision": "f6be983b03d407e56785cbb67db53a6f"
  },
  {
    "url": "assets/js/36.0864865b.js",
    "revision": "8e56cf96dd2f4123f81b5e68db31df0c"
  },
  {
    "url": "assets/js/37.35e2436f.js",
    "revision": "947302101be5af98972c1f95d579b57c"
  },
  {
    "url": "assets/js/38.81703fc6.js",
    "revision": "b507433e917313a66c295c1f74a8e12a"
  },
  {
    "url": "assets/js/39.52d107ad.js",
    "revision": "f0043e36406e59526106702a3c86cd54"
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
    "url": "assets/js/app.a48d5043.js",
    "revision": "b186a34b193dbff88def21a130815af3"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "00d8a2425811dff3336fd81a5cee74cb"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "03c52dbfe3fc37af9b5a774165d1e239"
  },
  {
    "url": "avaliacao/POO_Avaliacao3.html",
    "revision": "6635572ec8329047d47f64a36b81604a"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "219cae899ee27ce3cefc8ce0b8c0b71f"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "3427f754cf6da4fb77f7a142e3820a42"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "2069f398451af27b87569b1a2a590c69"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca3.html",
    "revision": "4109d15b717b95ba490e2cacb3bf5626"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "430388dc79eb8d592e81de59c4db4bee"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem2.html",
    "revision": "87b37c9638a8a175e87040027bdfb67a"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "c06e61ffacd1093c714ddd8cb0510ca9"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "b2c0d7469ee0f9be61d491d58edfbc82"
  },
  {
    "url": "Exercicios/Java/index.html",
    "revision": "25be4a512b2efd01d78245828e7dd370"
  },
  {
    "url": "Exercicios/Java/JOption.html",
    "revision": "1734a1a287266e9b0c097cec6ded24ab"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "34bc60a3a53b391806119e439218af7d"
  },
  {
    "url": "home.html",
    "revision": "7f0a0b2570d671b34f2850adef3d125f"
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
    "revision": "53bfd19199131fb3fce54d408efa1f75"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "7f2a0ed102fa1cb7fde38017b403d5af"
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
