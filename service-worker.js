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

var precacheConfig = [["/2018/10/15/记不住快捷键怎么办/index.html","de7208322a74bc754ddee4e4530162c4"],["/2018/10/16/教你如何构建Mojave动态壁纸/index.html","9f448915c069fcdfe5bcc06b0ec257be"],["/2018/10/16/镜音len-刹月华/index.html","b5d8ff132514ecb9cf3546622b36d447"],["/2018/10/16/镜音len-朋克/index.html","1da3c35ed8bbbfa2b1f9db95f982a422"],["/2018/10/18/从js数组重查找出重复元素的方法/index.html","e74048fbba06fa9bb8d1b9edf7a5021c"],["/2018/10/23/情侣日常1/index.html","371ac77bb4fcd6a3334879055f4f81a1"],["/2018/11/01/学js很简单，就是有点头冷0/index.html","9a7e9c902dc9ed3e79acadcbe2533b6d"],["/2018/11/07/学js很简单，就是有点头冷1/index.html","ca992a9b18a57a2aafaf2def5d9aa55d"],["/2018/11/09/vscode插件分享/index.html","cfd741215d3558649ebbe4d36295de46"],["/2018/11/13/小微企业验证码破解/index.html","4465d366766f50da922ca0d771aafe7b"],["/2018/11/18/电视直播源分享/index.html","4e59a2116d3aea7abc2912da2b800fba"],["/2018/12/04/android导致文字偏上的问题/index.html","c95eefc961de9e27e1af2dc04088455c"],["/2018/12/15/RTAC86U刷机指南/index.html","5a24708d0457787fb5bd7325f6eac626"],["/2019/01/03/我们是怎么从ng迁移到vue的/index.html","bba89c77a5b79f49113c828d7dea3872"],["/2019/02/11/Mac前端上手指南/index.html","8e8f21507c3f45a79e4ee39e49235b60"],["/2019/03/29/axios如何中断请求/index.html","345788e8f378173885b9cd180b5a9f27"],["/2019/04/10/有关前端和pdf相关的几件事/index.html","34eff717b97ce16b35bca0ddadd41ee8"],["/2019/06/05/如何删除除了Master之外的所有分支/index.html","9594768cac22f69a81346dfa840455cb"],["/2019/06/10/一次node内存泄漏排查和解决/index.html","679785ff16eb5541d627fa880bd0f44a"],["/2019/06/15/一次node内存泄漏调查/index.html","6c33fab9fd2e0c6c2c1d6d6c0fc101cf"],["/2019/07/09/Android如何直接投屏到电脑/index.html","a9e9939b01dbd5a08e0a0c583c7ddb5e"],["/2019/07/09/上传app卡在通过App store进行鉴定/index.html","5c7b3d55089a06f8c7185124406cd799"],["/2019/07/12/正则/index.html","40f9f4728384e4b7f4bc402def47146d"],["/2019/08/15/umi.js约定式路由如何生成breadcrumbs/index.html","93e746d35f81a23f957748038e3810b1"],["/2019/08/15/vscode在debugger的时候如何加载插件/index.html","79f5aaad9d9e021f59c29c68697ede27"],["/2019/09/04/axios兜底错误处理/index.html","a0d290f3dad57662395309e894c2ba06"],["/2019/09/09/纯css实现table表头吸顶/index.html","173c618b6fab740087f065b152b8236c"],["/2019/09/23/自动给表格空单元格补上字符串/index.html","95702fe0b99834e480bb2f7245c6be2c"],["/2019/10/11/react-route4实现prompt自定义样式/index.html","d3ecc0733a957a5e08d888c720e1ac5d"],["/2019/10/18/RN2Flutter/index.html","1e690a6d89f26840df4e1085ccc1ca39"],["/2019/10/18/webpack正确的引入pdfjs/index.html","d119f9d9fb54131bce9bc730842fab9e"],["/2019/10/18/文字超过x行后补上省略号的几种办法/index.html","29e7e0204ceaa7f88d7825997a32188e"],["/404.html","6e4f5b1d1c199e3197507cf37474cd69"],["/about/index.html","40e7278315b166eb2e40ed4fc9ff8d77"],["/archives/2018/10/index.html","05e57595ee7c6dc8f3f6023c7d67a6cc"],["/archives/2018/11/index.html","a5fe0fc8b55d99b4adcfcddc97985e24"],["/archives/2018/12/index.html","81c6a72b419e68204942f52930b82279"],["/archives/2018/index.html","781bdcdc09cdb0544038edb5583954a7"],["/archives/2018/page/2/index.html","9113aa4760cef34444a8170c5cd5d298"],["/archives/2019/01/index.html","beeac74ba8c66474a70bc10f42add234"],["/archives/2019/02/index.html","8c42c874b0388e99848c45cd83a9f199"],["/archives/2019/03/index.html","59ecfbd940b179bc8bd9f0f66c034be8"],["/archives/2019/04/index.html","fb2509c4a2f88399f08cfa9fa36e04f8"],["/archives/2019/06/index.html","2ace43d7ceff4a14ca67dda4becac78c"],["/archives/2019/07/index.html","ccba198c205a874e5b89d36676d43b07"],["/archives/2019/08/index.html","921c77db0dc3f8ce46d099c80c5c7830"],["/archives/2019/09/index.html","d36aec60b6fe47627fb21210968ce8e1"],["/archives/2019/10/index.html","3211da35de235b8328f7163c202016a1"],["/archives/2019/index.html","be8a0d6c89d89dcdd9543d1773bc8e4d"],["/archives/2019/page/2/index.html","65f331a5467654bb2df7f5a326a411b4"],["/archives/index.html","5ec44627c88fde724de5ef18c806ec9e"],["/archives/page/2/index.html","0090a0147c9025e416688fbfd648b4be"],["/archives/page/3/index.html","9f3533ab7d8b230af26404c40472fd3a"],["/archives/page/4/index.html","27e886c76e7123e12db32d8d9962216e"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["/assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["/assets/logo-36.png","aa6a7574015183e2f0d2909257aafcdb"],["/assets/logo-48.png","c829a3cb549ebc078d2c9399265f6c07"],["/assets/logo-64.png","2e741bdca8508c9f679cc56916606d19"],["/categories/Cos/index.html","23f12099cf58ca610b1eee1c6e9cfeb8"],["/categories/前端/index.html","71eb54db0a316113e30b888bb5374358"],["/categories/可以公开的情报/index.html","b2e1c49ea20c9205d96659c4d9fd5a09"],["/categories/可以公开的情报/page/2/index.html","532c71eb061157c803da941bfdc3ae50"],["/categories/学习笔记/index.html","f3667ed268cf3ca1ba593da8afbd0b8b"],["/categories/开发的捷径/index.html","fcff19a9ee9d632d69fb35997a4c869e"],["/categories/祉华/index.html","76338b18c44f08a798ba7ba39547ccda"],["/css/mobile.css","511024a40ae747834eaeccc8d4316933"],["/css/style.css","e93a0562640d232d2d55c11d9743e05a"],["/font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["/font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["/font/Source Sans Pro.woff2","2e1e934a85462e0e8b754a6317ccaa6f"],["/font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["/font/SourceCodePro-Regular.ttf.woff2","f43ea4c5ac35312e1fc76a6b6a2e06f0"],["/index.html","890a66bc559a152cfdeb6362591aaea8"],["/lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["/page/2/index.html","88ec149d72ad7730b9633c62b63237e9"],["/page/3/index.html","b7cef95b9c8d603b2e146fc4690a730d"],["/page/4/index.html","b65076215d96517837aca78e46e86a55"],["/scripts/main.js","9ec2c9ad23633703a1ba0f3116429b29"],["/scripts/search.js","358f72ee3a1244cfdc0c08a1d4e6708c"],["/scripts/share.js","16fc99a429a991124caac13e6397c5a7"],["/tags/MAC/index.html","8e7969ede8a661e6d8d9ba98744ca455"],["/tags/OSX/index.html","4ea318a096e1ad408f73a3825c2cea56"],["/tags/RTAC86U/index.html","661000704415380ab5823dd826f381a1"],["/tags/android/index.html","9384d86a40e4531261633121c7da4fbd"],["/tags/angularJs/index.html","beeac74ba8c66474a70bc10f42add234"],["/tags/axios/index.html","abddafa376ef2002cf863922d5a1e20f"],["/tags/chrome/index.html","b666f02f58cb898d1d1b2b7a7bd4eb78"],["/tags/cos/index.html","23f12099cf58ca610b1eee1c6e9cfeb8"],["/tags/css/index.html","6710f790bc64926b129897999d05ce12"],["/tags/ecmascript/index.html","eae9803909c501f6d11bf8bdf4c9bd26"],["/tags/font-size/index.html","61a0f5909b8e6c98643997caaa55e215"],["/tags/gfw/index.html","661000704415380ab5823dd826f381a1"],["/tags/ios/index.html","fae0bde2cb9df331aaed33f38c2c9e84"],["/tags/javascript/index.html","8bb33f003fa43a3a79d8c7bc21aae029"],["/tags/js/index.html","cc1b51e5465fdaeab36baf6545838eb6"],["/tags/line-height/index.html","61a0f5909b8e6c98643997caaa55e215"],["/tags/mojave/index.html","4540002cbe68e4896576c721c2718563"],["/tags/ng/index.html","beeac74ba8c66474a70bc10f42add234"],["/tags/overflow/index.html","b57e4d56ab3c6a96fe65095a51ce8786"],["/tags/pdf/index.html","fb2509c4a2f88399f08cfa9fa36e04f8"],["/tags/promise/index.html","abddafa376ef2002cf863922d5a1e20f"],["/tags/prompt/index.html","23370937bf621801552c1b58d24f73cc"],["/tags/react-route/index.html","23370937bf621801552c1b58d24f73cc"],["/tags/react/index.html","23370937bf621801552c1b58d24f73cc"],["/tags/sticky/index.html","1a190fc00dc5f8b72c3fa6a8467e8116"],["/tags/umi-js/index.html","cda9836eef48de22cd3398251286dfe2"],["/tags/vscode/index.html","ba803e90eb6fa5f94c5a4d15d21be53a"],["/tags/vue/index.html","beeac74ba8c66474a70bc10f42add234"],["/tags/上手指南/index.html","295c98728b955986c62a5db13ea19cc8"],["/tags/乳酸菌/index.html","661000704415380ab5823dd826f381a1"],["/tags/前端/index.html","35cca78a652307767f64af2eb3120c1f"],["/tags/前端/page/2/index.html","f043a095e920b2c731db9f043a399bc5"],["/tags/动态壁纸/index.html","4540002cbe68e4896576c721c2718563"],["/tags/单元格/index.html","26d294b0f4b542d1e2560c3262d7fca2"],["/tags/可以公开的情报/index.html","09de0acc4a6ef20729ce3d17e3b10b8f"],["/tags/吸顶/index.html","1a190fc00dc5f8b72c3fa6a8467e8116"],["/tags/学习/index.html","e4e27ba4f885147ad08ccff2816cf4c6"],["/tags/开发/index.html","09de0acc4a6ef20729ce3d17e3b10b8f"],["/tags/技巧/index.html","eae9803909c501f6d11bf8bdf4c9bd26"],["/tags/插件/index.html","661000704415380ab5823dd826f381a1"],["/tags/教程/index.html","ac45c21f8e536105c9ec2812cc0ddc16"],["/tags/数组/index.html","eae9803909c501f6d11bf8bdf4c9bd26"],["/tags/日常/index.html","76338b18c44f08a798ba7ba39547ccda"],["/tags/省略号/index.html","b57e4d56ab3c6a96fe65095a51ce8786"],["/tags/祉华/index.html","76338b18c44f08a798ba7ba39547ccda"],["/tags/笔记/index.html","d07d13ac5d5fe6db4e4d6ec0840d8201"],["/tags/约定式路由/index.html","cda9836eef48de22cd3398251286dfe2"],["/tags/经验/index.html","3dc0bc0c3f933ee0a3853575427eaeff"],["/tags/补全/index.html","26d294b0f4b542d1e2560c3262d7fca2"],["/tags/表格/index.html","d50138ba784c8bcfff183a65a7ba2b5e"],["/tags/记录/index.html","e4e27ba4f885147ad08ccff2816cf4c6"],["/tags/超过x行/index.html","b57e4d56ab3c6a96fe65095a51ce8786"],["/tags/路由/index.html","cda9836eef48de22cd3398251286dfe2"],["/tags/软件推荐/index.html","d8220826ff14af5ca727107397d6d093"],["/tags/迁移/index.html","beeac74ba8c66474a70bc10f42add234"],["/tags/退出校验/index.html","23370937bf621801552c1b58d24f73cc"],["/tags/错误处理/index.html","abddafa376ef2002cf863922d5a1e20f"],["/tags/镜音/index.html","23f12099cf58ca610b1eee1c6e9cfeb8"],["/tags/镜音len/index.html","23f12099cf58ca610b1eee1c6e9cfeb8"],["/tags/面包屑/index.html","cda9836eef48de22cd3398251286dfe2"]];
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




