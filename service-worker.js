/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2018/10/15/记不住快捷键怎么办/index.html","fa17525412bdfe43c2bfe22a9e712918"],["/2018/10/16/教你如何构建Mojave动态壁纸/index.html","fb7fd9e70fcd1b40057b984e863b35ce"],["/2018/10/16/镜音len-刹月华/index.html","2a34adde548b3b987f27e38e7214e6b2"],["/2018/10/16/镜音len-朋克/index.html","4c4639981c9516dae2924d4f809f52f8"],["/2018/10/18/从js数组重查找出重复元素的方法/index.html","8d23f69966e0545c4e6d4256a476e6d6"],["/2018/10/23/情侣日常1/index.html","c4b58cdf3af487f643018065ba718486"],["/2018/10/23/浏览器实现扫码枪/index.html","6e05fa1d926b4986991c9228d8a440d2"],["/2018/11/01/学js很简单，就是有点头冷0/index.html","bc14a3a28705944572366dbaee135257"],["/2018/11/07/学js很简单，就是有点头冷1/index.html","17c1e0cda0a5be30389ae73d867ba44a"],["/2018/11/09/vscode插件分享/index.html","307e57dfecf64147f1ce4afcafc4d9c4"],["/2018/11/13/小微企业验证码破解/index.html","6e53b6c4283577478a11f5e2b49e5d80"],["/2018/11/18/电视直播源分享/index.html","f24d667d393078e81c25bb9f6e0290f2"],["/2018/12/04/android导致文字偏上的问题/index.html","7f0937fb4edbbc3380883b3f5a3736ea"],["/2018/12/15/RTAC86U刷机指南/index.html","31662fd78fecae8cc23a1ab2162c59f7"],["/2019/01/03/我们是怎么从ng迁移到vue的/index.html","83e107f63b65c9b812cfba1787747251"],["/2019/02/11/Mac前端上手指南/index.html","da99b6c187ecb707319fab8fe28e30b6"],["/2019/03/29/axios如何中断请求/index.html","85ba1aba62dad7764b961d1a4befb3e3"],["/2019/04/10/有关前端和pdf相关的几件事/index.html","f9e5f35218c2089f48e3dec010751a23"],["/2019/06/05/如何删除除了Master之外的所有分支/index.html","b2b7b27f0bf6b81371309e701effc804"],["/2019/06/10/一次node内存泄漏排查和解决/index.html","43d56620e858f5fc92458bf3f1b1a1aa"],["/2019/06/15/一次node内存泄漏调查/index.html","d855511521e97b83d50a4174ca417dfe"],["/2019/07/09/Android如何直接投屏到电脑/index.html","03866a6ad77f1f588f9cbc7603a9906e"],["/2019/07/09/上传app卡在通过App store进行鉴定/index.html","210d1922ba5858c7a36281790b92f652"],["/2019/07/12/正则/index.html","fbdc6e103586ff0a53153516109eabcb"],["/2019/08/15/umi.js约定式路由如何生成breadcrumbs/index.html","83cb91195f1fd145a78b89ecee28735b"],["/2019/08/15/vscode在debugger的时候如何加载插件/index.html","ec95965bc255fb41eb49556b9d60b392"],["/2019/08/15/webpack正确的引入pdfjs/index.html","3fc663655b7ada34cade70ce2f6082d5"],["/2019/09/04/axios兜底错误处理/index.html","027829f3ab6fa7530b7ecf7ad8601a3e"],["/2019/09/09/纯css实现table表头吸顶/index.html","5d753747678872e91d32b48c8e9f30b1"],["/2019/09/23/自动给表格空单元格补上字符串/index.html","dde9d2c01597784f6ea9f963115933d2"],["/2019/10/11/react-route4实现prompt自定义样式/index.html","cc37d2d193081af538ae216d7628ad87"],["/2019/10/18/postgresql 全文搜索引擎/index.html","20b7c7b52fb74a6956514c5bd755e728"],["/2019/10/18/文字超过x行后补上省略号的几种办法/index.html","d2846ac8efd66ef468b719052a71e391"],["/2019/10/29/一次Rem莫名失效的解决/index.html","f55d7caa44d71f2fb0253b4559d62813"],["/404.html","3fd5643eba6956557ca6d7fd66f204c5"],["/about/index.html","ff19f40b0d50dc2a1a6f74c2e2daf8a6"],["/archives/2018/10/index.html","9c41d1f7198f9ded18628643d77cc251"],["/archives/2018/11/index.html","57f99d40464f7f556b8623ba4ff0181b"],["/archives/2018/12/index.html","e85c17e0e92ed72ad45ccbd107428db3"],["/archives/2018/index.html","3b655f613bd95245d578bd921b8c92d8"],["/archives/2018/page/2/index.html","b4773687ad0e2ae0cf387a1adac469ff"],["/archives/2019/01/index.html","30e78cb94a942a303148a8ff96824236"],["/archives/2019/02/index.html","94833bc616f268fe1cdb63fc9c171ea1"],["/archives/2019/03/index.html","f65cacce28c582a968f251586defd360"],["/archives/2019/04/index.html","379313f9be5f16304820f2f1c38ee910"],["/archives/2019/06/index.html","0848a04478ca5f566e2d1dc5eccd0f6d"],["/archives/2019/07/index.html","791d08bc2e5f1553a2622a073b359108"],["/archives/2019/08/index.html","6bfbe7220f0a671a9accccdb2eb50347"],["/archives/2019/09/index.html","0da54f51e6f1a8ea9a00d382e4d5b6bf"],["/archives/2019/10/index.html","077e73f75885ebed7549e6f04b95a231"],["/archives/2019/index.html","21abead68e1bab9593249ee08d10663e"],["/archives/2019/page/2/index.html","0b8fc1090371479d4e9453606b9ad36c"],["/archives/index.html","28739bd84e15a006f8596b7101b39a86"],["/archives/page/2/index.html","def3437a745b37bb4f6c47582ab722bb"],["/archives/page/3/index.html","b7289290f3a23bea3dd646e57204f590"],["/archives/page/4/index.html","90c0f37bca258062c0c8090c0db0cada"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["/assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["/assets/logo-36.png","aa6a7574015183e2f0d2909257aafcdb"],["/assets/logo-48.png","c829a3cb549ebc078d2c9399265f6c07"],["/assets/logo-64.png","2e741bdca8508c9f679cc56916606d19"],["/categories/Cos/index.html","1c3586b6b2ebdd5aade2fc7a2fce3c71"],["/categories/前端/index.html","dbf1ceb1341adb39c79ec8a4986fd03f"],["/categories/可以公开的情报/index.html","c3ff0d6a5c1a556b2c307dfbadabdef4"],["/categories/可以公开的情报/page/2/index.html","23f698f262186bb00f2d3aae6b44c7fb"],["/categories/可以公开的情报/page/3/index.html","53080702f6533713cb6ec3ed88d4cba5"],["/categories/学习笔记/index.html","d994c6d37cc6dcf97772bc6643ab9db8"],["/categories/开发的捷径/index.html","f3a95339c973488131ea7c0108ab4475"],["/categories/祉华/index.html","3212971bde514e55aeccdc5f6a33084f"],["/css/mobile.css","511024a40ae747834eaeccc8d4316933"],["/css/style.css","e93a0562640d232d2d55c11d9743e05a"],["/font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["/font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["/font/Source Sans Pro.woff2","2e1e934a85462e0e8b754a6317ccaa6f"],["/font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["/font/SourceCodePro-Regular.ttf.woff2","f43ea4c5ac35312e1fc76a6b6a2e06f0"],["/index.html","3d527853353ba5b3edd0a648ce3d38ee"],["/lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["/page/2/index.html","1902923f4ba18001a1b734fba2a1b7ef"],["/page/3/index.html","05646cf07243b1c46e57802307d57609"],["/page/4/index.html","fb6e1243361e7ff679dec0c46e96b7b8"],["/scripts/main.js","9ec2c9ad23633703a1ba0f3116429b29"],["/scripts/search.js","358f72ee3a1244cfdc0c08a1d4e6708c"],["/scripts/share.js","16fc99a429a991124caac13e6397c5a7"],["/tags/MAC/index.html","570f7ffb3e30935f0feb85ca221c0026"],["/tags/OSX/index.html","e40890b195ccb5104d0299e496f23259"],["/tags/RTAC86U/index.html","54c3ae5ca095c07b79a7c765265f3787"],["/tags/android/index.html","c0cb763a68d4287b4c515e43e805d99f"],["/tags/angularJs/index.html","30e78cb94a942a303148a8ff96824236"],["/tags/axios/index.html","9a8ddf2c2c4bde1b3aeb15f6d88a5c21"],["/tags/chrome/index.html","56b1282794eec43e6bd5b7a1b141a503"],["/tags/cos/index.html","1c3586b6b2ebdd5aade2fc7a2fce3c71"],["/tags/css/index.html","2b668b080337fd44d13ad1bf5f608c7b"],["/tags/ecmascript/index.html","36ba3e209fcce3a4be5245cb9cdfe989"],["/tags/font-size/index.html","8b8a7ffffc475e74906bf26e4f9e9375"],["/tags/gfw/index.html","54c3ae5ca095c07b79a7c765265f3787"],["/tags/html5/index.html","5e21d55cb399f88e4ef9061f7d3d5d73"],["/tags/ios/index.html","5e496de68675e4bd7543e3552f0740c8"],["/tags/javascript/index.html","621d2191768be3dcf1ec74e418f4e2ed"],["/tags/js/index.html","c6f6821d235acd816a07ab235ff3e96b"],["/tags/line-height/index.html","953de9f30645ed4e43fa8370b8e9d259"],["/tags/mojave/index.html","d0db90e94208bc1104e6fb091bc79763"],["/tags/ng/index.html","30e78cb94a942a303148a8ff96824236"],["/tags/overflow/index.html","9af4c56a86e2ddc21b4efffd74735ac9"],["/tags/pdf/index.html","379313f9be5f16304820f2f1c38ee910"],["/tags/postgresql/index.html","9ae8c285adb8fc1e4da7d6958b9c58ee"],["/tags/promise/index.html","9a8ddf2c2c4bde1b3aeb15f6d88a5c21"],["/tags/prompt/index.html","c58d2790b828615a3af32dd48ebff8cd"],["/tags/react-route/index.html","c58d2790b828615a3af32dd48ebff8cd"],["/tags/react/index.html","c58d2790b828615a3af32dd48ebff8cd"],["/tags/rem/index.html","d617cf13e5f6101f047f06124960a789"],["/tags/sticky/index.html","e6a9b9f05b9310284be2e3cf760a0006"],["/tags/umi-js/index.html","514c819ea06d6190957c04072ea47f64"],["/tags/vscode/index.html","68a3295be00077eb82c9ab4766efd1a5"],["/tags/vue/index.html","a981af185a7cfe0ee612e6298c462b67"],["/tags/上手指南/index.html","791d2751d802ce2443bd9b02490f4685"],["/tags/乳酸菌/index.html","54c3ae5ca095c07b79a7c765265f3787"],["/tags/前端/index.html","9e1157c1c57730dc8fc0211f0b3595c9"],["/tags/前端/page/2/index.html","21c28616cde28b79d68762387961fe71"],["/tags/动态壁纸/index.html","d0db90e94208bc1104e6fb091bc79763"],["/tags/单元格/index.html","1f90e632585ade56942878a6696317c7"],["/tags/可以公开的情报/index.html","d8d14a5bbd721e9afd72a7a00d51c085"],["/tags/吸顶/index.html","e6a9b9f05b9310284be2e3cf760a0006"],["/tags/学习/index.html","3feb9a7edb334af16eadc7df1a9b7fa7"],["/tags/开发/index.html","d8d14a5bbd721e9afd72a7a00d51c085"],["/tags/扫码枪/index.html","5e21d55cb399f88e4ef9061f7d3d5d73"],["/tags/技巧/index.html","36ba3e209fcce3a4be5245cb9cdfe989"],["/tags/插件/index.html","54c3ae5ca095c07b79a7c765265f3787"],["/tags/搜索引擎/index.html","9ae8c285adb8fc1e4da7d6958b9c58ee"],["/tags/教程/index.html","445cf8e639d94becde2a4cbba1ac1900"],["/tags/数据库/index.html","9ae8c285adb8fc1e4da7d6958b9c58ee"],["/tags/数组/index.html","36ba3e209fcce3a4be5245cb9cdfe989"],["/tags/日常/index.html","3212971bde514e55aeccdc5f6a33084f"],["/tags/省略号/index.html","9af4c56a86e2ddc21b4efffd74735ac9"],["/tags/祉华/index.html","3212971bde514e55aeccdc5f6a33084f"],["/tags/笔记/index.html","89b32ce59d9deba3f626608376ec5a44"],["/tags/约定式路由/index.html","514c819ea06d6190957c04072ea47f64"],["/tags/经验/index.html","d21ba83fca5909b0806921f5d05cc795"],["/tags/补全/index.html","1f90e632585ade56942878a6696317c7"],["/tags/表格/index.html","eece8827d14ac5d77d1c54ee72599aae"],["/tags/记录/index.html","3feb9a7edb334af16eadc7df1a9b7fa7"],["/tags/超过x行/index.html","9af4c56a86e2ddc21b4efffd74735ac9"],["/tags/路由/index.html","514c819ea06d6190957c04072ea47f64"],["/tags/软件推荐/index.html","ae40d9ee0f5b85d231bad1eed81b9e40"],["/tags/迁移/index.html","30e78cb94a942a303148a8ff96824236"],["/tags/退出校验/index.html","c58d2790b828615a3af32dd48ebff8cd"],["/tags/错误处理/index.html","9a8ddf2c2c4bde1b3aeb15f6d88a5c21"],["/tags/镜音/index.html","1c3586b6b2ebdd5aade2fc7a2fce3c71"],["/tags/镜音len/index.html","1c3586b6b2ebdd5aade2fc7a2fce3c71"],["/tags/面包屑/index.html","514c819ea06d6190957c04072ea47f64"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"mizuka-blog.oss-cn-shanghai.aliyuncs.com"});




