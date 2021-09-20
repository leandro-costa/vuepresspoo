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
    "revision": "efaf651d9970c345edf5d3cc6185b6e4"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "29388dfc35b89e110951424e7f653eb2"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "5e80ef7fe0fdde4fad821c2cca8a3fff"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "d6ecaa9b06f58724ac075ef8c289266f"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "95fb7b5f49087e1f7ba0a3297969114f"
  },
  {
    "url": "02_java/index.html",
    "revision": "0107da813699c1f181361dd09ac90010"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "5b6b1a1b5d0342c99bdd341a0a19a0fa"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "e4714ae8acb50af283d6e04cb1d888e7"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "d73005b4386c1697a03b703224af000e"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "302a7cf6a2154d27d8944a8b91ca4876"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "399cca35cedd3b3bf18ecb571f2b0075"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "baa17a66bbbb5e8d0dc505015b4526d6"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "b835e3a6ee5b15569a6e9a5b6fbb1636"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "804f52bbaf9b07dd5870665aec1ce871"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "f16557a3a16f56e4c2e9e130f3da8638"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "59977f960205ca2fd8e1528997ff2220"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "8374114195cda5e1a9fb925b17729b87"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "36d5ec14edf9e5d08fe03ef44fd11faa"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "0f8dd9e791799b16317731fd234a7b71"
  },
  {
    "url": "404.html",
    "revision": "78b0dbca875c077c74b01b1d51388607"
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
    "url": "assets/js/24.fccbdf31.js",
    "revision": "f29c90e9faffba5e84323a433a3281c9"
  },
  {
    "url": "assets/js/25.30435c12.js",
    "revision": "205ea1a579410e2c09e53a2807d3a233"
  },
  {
    "url": "assets/js/26.09b99bd3.js",
    "revision": "64d97e409bafac4f3dc4e8854fe09dd7"
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
    "url": "assets/js/31.093872c8.js",
    "revision": "41bf130e9f148df9b8fb33bc32fbf1b5"
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
    "url": "assets/js/app.16c87845.js",
    "revision": "5f759418a8b8a4224181cec50107a8a9"
  },
  {
    "url": "avaliacao/index.html",
    "revision": "46e74a9577cf3a8f70974638d3151376"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "eb16560a8aa5f319de7dac583d862b9b"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "4c34349cb0f71025b606d4fc4a587edf"
  },
  {
    "url": "category/avaliacao/index.html",
    "revision": "f51ad8d30ed76beb39c3ce881c4a6fa5"
  },
  {
    "url": "category/index.html",
    "revision": "d25641a1a0b20fa7cca648c0c961b368"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "04f7c28cda9d810c3fe77ca817aa616e"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "e3823352a5511ff394810a527ae2c71b"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "986ef07f78a7dc16c7ea063aa353e413"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "b5caa4a3185d3ee6d633673a27b224fe"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "2395a7af1998a5f511a077ab182e4576"
  },
  {
    "url": "Exercicios/index.html",
    "revision": "e4364db4739d4bab5f193d89f4fb7db3"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "050c3ac946b52b41d5289ed4404d6001"
  },
  {
    "url": "home.html",
    "revision": "9ef797eed1aa0795c1ea754391d407e6"
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
    "revision": "407b9164de6301dcf3679befda4e4889"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "0532b77d122afe6723515360b4eb9687"
  },
  {
    "url": "tag/index.html",
    "revision": "b92fe855f03ab483ac9a5de74f934ad8"
  },
  {
    "url": "tag/poo/index.html",
    "revision": "82f7670abe02a02ae90e01bed779a0e7"
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
