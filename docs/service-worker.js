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
    "revision": "4632de660b258df60c71161d5d2be9d5"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "74f695d3ef9efd277b80fb148e57bf95"
  },
  {
    "url": "02_java/index.html",
    "revision": "b5bfaf56a2838bc3e73d1fc8c73d4cc4"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "2aa9dddf34e579361c3fdfb56050b4f2"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "67f4d8267046e5a547a78da0d9a7310c"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "8f60f3fdb3ab34aa7dbf185d78752c79"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "7cdef2db88863297be72e05f87086cf9"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "4eed96817a751c54cccab253ea6fd493"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "e0a247992fc6cb0dad5c537652e24bb5"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "2e80ae802834f2e92c8f3963b2642969"
  },
  {
    "url": "03_conceitos_OO/08_Heranca.html",
    "revision": "f2dad56f4cd5fe72c0462ceb9ba8fd25"
  },
  {
    "url": "03_conceitos_OO/09_polimorfismo.html",
    "revision": "5383a8d27518784779c17481106c8207"
  },
  {
    "url": "03_conceitos_OO/10_abstratas_interface.html",
    "revision": "8489157b12d79f9be954631be765a4a9"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "89a157da6c9949d078e2bec0ed84bdfb"
  },
  {
    "url": "04_colecoes/index.html",
    "revision": "d9ca663f87c6293d3f447f3973c11fbf"
  },
  {
    "url": "05_Pilha_Exceptions/index.html",
    "revision": "0992add3560f8b5ed8198959aa63c596"
  },
  {
    "url": "06_threads/index.html",
    "revision": "c51e763ee7a418256f12103ffb62adcc"
  },
  {
    "url": "404.html",
    "revision": "2173b0191ebeaee91517df7c87940bb1"
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
    "url": "assets/js/11.652f5b12.js",
    "revision": "b683cfe9dede8d891548fbe5b34fca0e"
  },
  {
    "url": "assets/js/12.9537732f.js",
    "revision": "b2954422fecf4387d114201c1f233946"
  },
  {
    "url": "assets/js/13.e19e4d72.js",
    "revision": "9b3bcdb2a92a9abae80b9a37265cea1e"
  },
  {
    "url": "assets/js/14.c2baa870.js",
    "revision": "56829b43c88d9cb8af63825e5e920569"
  },
  {
    "url": "assets/js/15.39c8e3c6.js",
    "revision": "795de711e20d0dbfbe9c09771f97d121"
  },
  {
    "url": "assets/js/16.60aadcd5.js",
    "revision": "1996fe651254cfd9cb7b9eebbe72cd78"
  },
  {
    "url": "assets/js/17.308e309c.js",
    "revision": "c95d47f2789b9e52a6410113d00f9f83"
  },
  {
    "url": "assets/js/18.360495fa.js",
    "revision": "ba55eeb37356371bfdcc657ef0a1fa09"
  },
  {
    "url": "assets/js/19.39944244.js",
    "revision": "4a306f34e001659f9c098a811a80cd0f"
  },
  {
    "url": "assets/js/2.7db14258.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.a36a8934.js",
    "revision": "cd3287307ef32bbb6a49f5e1c0c480c1"
  },
  {
    "url": "assets/js/21.a19beb55.js",
    "revision": "02926485d797aa20aed46407a49f8e2c"
  },
  {
    "url": "assets/js/22.5df75ae5.js",
    "revision": "2ca5a41e54d555a8cc1f5aaa07ad3f1c"
  },
  {
    "url": "assets/js/23.3156c8e4.js",
    "revision": "59739e16475ba68f93ebefe446d4e040"
  },
  {
    "url": "assets/js/24.718ffc63.js",
    "revision": "604e89dc94a6b2d57c0c2b3f27077938"
  },
  {
    "url": "assets/js/25.8f247b02.js",
    "revision": "1ac3d128df466d578bc3395a240c13eb"
  },
  {
    "url": "assets/js/26.aaffd379.js",
    "revision": "044d1898d9cd6019a3bd4e6566880dc4"
  },
  {
    "url": "assets/js/27.b2412c5a.js",
    "revision": "90854086c86aaf0e08d46cc2d740f05e"
  },
  {
    "url": "assets/js/28.3a31e347.js",
    "revision": "0b0a82af0030b02b1749a7489565a568"
  },
  {
    "url": "assets/js/29.ce844c0d.js",
    "revision": "375af4c4ace7d9be0b8925f343aab4ed"
  },
  {
    "url": "assets/js/3.ec25fcd2.js",
    "revision": "a5a84a704ac88df526e8495427358a97"
  },
  {
    "url": "assets/js/30.a0018d25.js",
    "revision": "b34d6d8a3361bdb9466a0e3fac4823b8"
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
    "url": "assets/js/33.52040c80.js",
    "revision": "401d83bc71099d52fa016e42df06815f"
  },
  {
    "url": "assets/js/34.12c4d243.js",
    "revision": "51562c2eeb358ec576764a7b84537c3f"
  },
  {
    "url": "assets/js/35.40a1231e.js",
    "revision": "36a475603ab92325fe2a2f204b9291b4"
  },
  {
    "url": "assets/js/36.0e7579b9.js",
    "revision": "e0abd911681c0e25280214048afdb3e5"
  },
  {
    "url": "assets/js/37.4642211d.js",
    "revision": "92d0bded4a75c8748f266df24a3cce71"
  },
  {
    "url": "assets/js/38.6fa9b425.js",
    "revision": "c1b387e0078540f6e8d82adb5ba08d95"
  },
  {
    "url": "assets/js/39.e63f69c6.js",
    "revision": "f0290ebc58105036d3a58cb3661f3e51"
  },
  {
    "url": "assets/js/4.f2d7dd10.js",
    "revision": "9c97d80452cedf1de1d3d2158b9289f0"
  },
  {
    "url": "assets/js/40.41f4f9c8.js",
    "revision": "41d7d91a8fbf4ff0792ea4741e0b3bf6"
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
    "url": "assets/js/9.34c3bb36.js",
    "revision": "0940cd9aa181dc880eb25fb427b1080a"
  },
  {
    "url": "assets/js/app.59f2ba17.js",
    "revision": "315a720bb39d50f8da86f616a80523ae"
  },
  {
    "url": "avaliacao/POO_Avaliacao.html",
    "revision": "eba954d1c2b080870c76c5b42faaa868"
  },
  {
    "url": "avaliacao/POO_Avaliacao2.html",
    "revision": "6cdf041a2500608b2353a06abd0a918c"
  },
  {
    "url": "avaliacao/POO_Final.html",
    "revision": "033a1a8aa86537b18bf977bbd1f900f9"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca1.html",
    "revision": "0db8b94b26071be4486a075d042464a4"
  },
  {
    "url": "Exercicios/ExercicioHeranca/Heranca2.html",
    "revision": "e200207a1d061dc1b391c7f942e8f9a2"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem1.html",
    "revision": "cb1c41fa028b7eff50c56856c7a0b756"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem4.html",
    "revision": "acb9038028d003a554c5ec2e7da2c692"
  },
  {
    "url": "Exercicios/ExercicioModelagem/Modelagem5.html",
    "revision": "d266967bdd65bbc80fdf9c417d492ab1"
  },
  {
    "url": "Exercicios/SistemaBancario/index.html",
    "revision": "a6cb07a598aa0ccce5110c95c1a33114"
  },
  {
    "url": "home.html",
    "revision": "5497fc4c999ffe2f04f1db0a22ba1fdf"
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
    "revision": "1918db1940105cdc2d9e5d2058b94e2b"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "1d2ca4b44407f504cf5763da141a623f"
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
