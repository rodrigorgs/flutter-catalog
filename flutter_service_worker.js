'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fc9e63210512312bbeda9e0ec5a63342",
"index.html": "6dd3b79dc98a95a6db60a89820b6bd79",
"/": "6dd3b79dc98a95a6db60a89820b6bd79",
"main.dart.js": "26746679d4214977df7524be2939beb7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a217b40b77ef29a88b193dfb900d9266",
".git/config": "8950d801c26a8a0a3a8fed5b55b559c0",
".git/objects/6a/e0d3382f9bd2045c8474cfc9384925ae0a4c76": "14fc7c7da6b91e093b0bfba260cbf58d",
".git/objects/6a/96a0c67ef7518f9bcacbf6a7664e13b2e20a7d": "12b7721c4750a721f2bf6f235de4231f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/716010971d1fb25b15f470c748c9015ae3eb08": "db0b4d937a35e33752eb4768345f46e3",
".git/objects/0e/fcfbac7fd2e0e273deb48409af76a678f73187": "6bef15ba19ecb7c42f22e6a21e036fbe",
".git/objects/60/e876713fa7bf3deadc2a894b8cc0ece6be9261": "e081fe089160703bc1f876b1941451f6",
".git/objects/34/f860cc4f4b04183246e2be86d850095c7f6fc1": "3e4a9ec7a4abd23cbc7e17846ef7841d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/b192a3f27c6a16e3719808b5bbfe96355383a8": "e8d50994d28e08afed018a623855bfcc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fb/fa15a91122f1cc6b36b7047b6ec38a5ae69056": "df7d7711ac93c831e54c69eea7ca5623",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/20/73eecaca64d45b773f5f67982534776f0a70f8": "b7d9b62d34f98872f5c777ff0f134584",
".git/objects/7d/3bfd83cf52f04cdcffdb12243d593f6d120b83": "4f52c5d1d956ad83f049479c0e4d5998",
".git/objects/89/4623289d6da2a8d278e88aba153a6309217f7a": "6ff08b15abfe047e9e12d51319fad611",
".git/objects/1f/c97227be7f86ba96ba850e765aa78dd2e4d55d": "897349abe438cfb9268028674ab2e9a7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/72/f9fbd08467b45594e8ab69977bcd084e0b9dbb": "f8d5eececc9cf495cfb1dea120169ab4",
".git/objects/43/74f5a0f1f6cd458ce43eea19e14135dc668ca5": "227b4e5070ddddae25277d76d36e7fe7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/1da0d1e00e8683cd92f343bb971b189492b96f": "160b61b5da11a46c484e6ec5445d70d3",
".git/objects/36/ebbca66a1702865b535a2ad7042e563c3f6071": "7250c5b4abc83ac6efc41e75e1b0d9ec",
".git/objects/5d/01048a925f3ab8e1cbc84b4ec48c40962dd25d": "9dc43e82004288c1d7baba5ad7fc5847",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/5b/e07b95bf457b3b7e27c3831811822fb7f94435": "12fa46fa282b28644069414859aa4e5b",
".git/objects/37/76e06288c71a226d7357d459cde1a513b70117": "dc40cf2227c0ad0dfb58683896de99b8",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/25aa3c793ed7fe78394b682ffdc377f4d8fa34": "fb6384634591a71806ce839bb355d898",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/c548a527c058bd9b2189c1c267dbc258e33012": "e5cf607aa1ba4733601420de16a0b237",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/3702084428757eabccbd66dc9601bd266ab3ff": "9e8e27ffe0a02ea04fd181c5694cb874",
".git/objects/cc/2768669974bb38006eca3d698405ccb7374936": "7a6cb05602ee983b54ee38a20dcd0679",
".git/objects/f0/2abc7b3af75f4a1c47169b66a58e9f2c7eb1c6": "aab3dd6ef22b14f61667a05a9d40affe",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/c2/6aec547c9f7c95691621a6f5544823cc7c5bf1": "252a2e6bf8cdfa45ab9e7f38a31dc03c",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/4a/df58f1a786aa252c496f59bddf6cc8aeafdf09": "78787539e232d0665fa6a17790b2d440",
".git/objects/8c/4fda8df471cb268932b34203505fe5bed22d8c": "d8b0d7cf78f71434518ac64c68fd389c",
".git/objects/1d/5eb26055569b19b5cf394fdb4ad36195958969": "d7d5dd48365284a49d92e5f6e68ee0fe",
".git/objects/71/97e1019933a0c495f5f6b1ca2c495e074f9b1b": "9430a74a00803e6640d33caf9906429e",
".git/objects/8b/606a52acb8cd86498a1a04040301a27f2d08b9": "d55d7714956c19ed39ecf98a19aea174",
".git/objects/22/41f1f89a1d2c3d3cd961fbc412a9dec8bc5268": "bff41e98be42358cc0e7664f450e7abb",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e872ccb2488e59bbf12f977ebc0bc645",
".git/logs/refs/heads/main": "e872ccb2488e59bbf12f977ebc0bc645",
".git/logs/refs/remotes/origin/main": "5e97983adbf69deb70f7e39462174074",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7acd10ca2ea8a379062c635634504c31",
".git/refs/remotes/origin/main": "7acd10ca2ea8a379062c635634504c31",
".git/index": "c925b3bc8c6d07e8e1dce4afd8e7bc89",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "99d44406c1529c1be600871ca25f226f",
"assets/NOTICES": "196f436d0688fdce4a0c541073e11a6d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/exemplo2.dart": "51943b268904e9af835923fddbd59c26",
"assets/lib/container_com_filho.dart": "9eb12ff4578e25e24f9a4282c817a957",
"assets/lib/col_min.dart": "d735a48df572bbe89128750abf793408",
"assets/lib/widget_raiz.dart": "793cda244fcfd305c7667b7161d37f02",
"assets/lib/container_padding.dart": "14603d518fbc64e1e17d2bf65c1ea823",
"assets/lib/col_main_align.dart": "921de6f89d629c469ab8bcb619aaf906",
"assets/lib/col_unbound.dart": "3907559b83acda272a4a4de5c9232d57",
"assets/lib/col_expanded.dart": "1a16113f1a4792b51937a60553cf01b4",
"assets/lib/col_flex.dart": "9c389d862126700475e67d5284c4f4a6",
"assets/lib/col_flexible.dart": "f35e1653e9ee53424486d9203d1213e0",
"assets/lib/main.dart": "7cc2c41e3eef97f9d05cc22b38600968",
"assets/lib/sandbox.dart": "019fd06a18526c92bbce04bbb2ac39b4",
"assets/lib/col_intro.dart": "b3ca3be4b7d3206c9d50f929d928c0e0",
"assets/lib/exports.dart": "dbfd68c21f796fb8185cf861b750966e",
"assets/lib/col_cross.dart": "5b268d45400cfb25cd0ccb35deb11957",
"assets/lib/container_sem_filho.dart": "58515a3592682bddbb0cb1c2a45dee8b",
"assets/lib/exemplo1.dart": "35ae5ec196fff126270aef6a9a4f3fdc",
"assets/AssetManifest.bin": "4de913c36a6150f1bead0a8c6e52ea58",
"assets/fonts/MaterialIcons-Regular.otf": "97246418586ccf4e09cbaf35d81c0ee1",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
