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
    "revision": "d1d752d2384627854c32aa15c3683636"
  },
  {
    "url": "01_paradigmas/02_Linguagens.html",
    "revision": "6f886162aa5a9ed82d6fd55ffbdcbc16"
  },
  {
    "url": "01_paradigmas/03_Paradigmas.html",
    "revision": "60a6712e907881254fde9b72f8a7597f"
  },
  {
    "url": "01_paradigmas/index.html",
    "revision": "74ff0b5347c02fdd6829f6132a510d86"
  },
  {
    "url": "02_java/01_codificando.html",
    "revision": "64f661432465f3ef1d08077f1cbc3b0f"
  },
  {
    "url": "02_java/index.html",
    "revision": "a23fa84e9c1b24e6bde76431002bb483"
  },
  {
    "url": "03_conceitos_OO/01_abstracao.html",
    "revision": "3ebb3b8b65f8c723498d04d3e08baf07"
  },
  {
    "url": "03_conceitos_OO/02_objeto.html",
    "revision": "48bbf2a5061a5f9ddd93358eb702e429"
  },
  {
    "url": "03_conceitos_OO/03_classe.html",
    "revision": "6d3e2a9d501050ed8f4c212caca82922"
  },
  {
    "url": "03_conceitos_OO/04_referencia.html",
    "revision": "380f3834a65bfd8a4cf4e86b868424d3"
  },
  {
    "url": "03_conceitos_OO/05_assossiacao.html",
    "revision": "a7b214491c24159e01a8b328d57980bd"
  },
  {
    "url": "03_conceitos_OO/06_encapsulamento.html",
    "revision": "259f8ae50e7ae19462c0ae7a1f486239"
  },
  {
    "url": "03_conceitos_OO/07_pacotes.html",
    "revision": "84782fc53135c6e2b5ccfdd0700d78aa"
  },
  {
    "url": "03_conceitos_OO/index.html",
    "revision": "23ddcd5ae46069068063c2486563472f"
  },
  {
    "url": "404.html",
    "revision": "7648f22ccfb3c4038aa703561e3af906"
  },
  {
    "url": "assets/css/0.styles.b538a564.css",
    "revision": "d1b2c1d148e4bf9f1af78aeed3fdeac4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.daaad698.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.0d168330.js",
    "revision": "3ff1a815b4d8aa63490a08239a0af083"
  },
  {
    "url": "assets/js/12.c0c23d7b.js",
    "revision": "37f2d7f9841097510db93dee1496f8dc"
  },
  {
    "url": "assets/js/13.2e58e2a4.js",
    "revision": "00a6901183ed24d992773079b302ee28"
  },
  {
    "url": "assets/js/14.661e5206.js",
    "revision": "6809ebcf1eb55ea22cb09dfdd662fa6b"
  },
  {
    "url": "assets/js/15.69ddde05.js",
    "revision": "e97ae0c246066384afbc2e16c4f61a76"
  },
  {
    "url": "assets/js/16.80789376.js",
    "revision": "94eae18ed1e133898eaf3e5a0b926fd0"
  },
  {
    "url": "assets/js/17.d5bf2c07.js",
    "revision": "62969358571a08361d6f2f39add91e56"
  },
  {
    "url": "assets/js/18.19f71a14.js",
    "revision": "5ed771fb92d5b7940ea62f1eee793491"
  },
  {
    "url": "assets/js/19.1c3c985f.js",
    "revision": "f64fba9f16b33bb378e10669571d5d54"
  },
  {
    "url": "assets/js/2.8424c883.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.099c520d.js",
    "revision": "a1d21713a690a829635da86e5871660e"
  },
  {
    "url": "assets/js/21.f5121ddc.js",
    "revision": "0151175d05dc36fcc2bbc5723bcc6f83"
  },
  {
    "url": "assets/js/22.cbb7c533.js",
    "revision": "cd6f7aa2bd797160e48c3d8e76ead49e"
  },
  {
    "url": "assets/js/23.631542a4.js",
    "revision": "79e854ba5708b153620b50ea1397a134"
  },
  {
    "url": "assets/js/24.8a4394e1.js",
    "revision": "04a18a6caaa246eb4783098546f5de00"
  },
  {
    "url": "assets/js/25.0ac3a6f1.js",
    "revision": "e32e26363b51c18cbf8b233b0b664e48"
  },
  {
    "url": "assets/js/26.d20c796e.js",
    "revision": "c8ff015287bc84ea6a834fe5119ef86a"
  },
  {
    "url": "assets/js/27.44caee2d.js",
    "revision": "b6433046633cf5c937d11e240a3fa1ad"
  },
  {
    "url": "assets/js/3.14c2f7fe.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.5cbedbfb.js",
    "revision": "c5655b2581671c93114a4faf9bae624b"
  },
  {
    "url": "assets/js/5.2d02247d.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.21ddd515.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.c0459fae.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.97a4833c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.54b05eb7.js",
    "revision": "58c3a34ed6878416da40b434602bcb1b"
  },
  {
    "url": "assets/js/app.3ef44810.js",
    "revision": "4531646bdc564ed37a401332a81ec901"
  },
  {
    "url": "home.html",
    "revision": "b5e30b130238395129b40b91f79791cf"
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
    "revision": "e3dd9546dbe66bd50547718b0d985597"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
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
