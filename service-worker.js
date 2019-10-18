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

var precacheConfig = [["/2018/10/15/记不住快捷键怎么办/index.html","861c71e6fe1f1578547c166ffc36e7a6"],["/2018/10/16/教你如何构建Mojave动态壁纸/index.html","eacd2bf1aba785299ff7f222b53f8308"],["/2018/10/16/镜音len-刹月华/index.html","70b2e207a4c3994908769005f2457ed9"],["/2018/10/16/镜音len-朋克/index.html","20e9ed0eaf82719f46c9a65430e3692a"],["/2018/10/18/从js数组重查找出重复元素的方法/index.html","9015f1fb1c45d0def580d643b2b25c71"],["/2018/10/23/情侣日常1/index.html","7cadeb7cfae1d938974366962ba85e14"],["/2018/11/01/学js很简单，就是有点头冷0/index.html","97b2f96018db31f7d8607077f70bd976"],["/2018/11/07/学js很简单，就是有点头冷1/index.html","bc05dd44fece180a21fc3beb8afa8cab"],["/2018/11/09/vscode插件分享/index.html","4dbbcbdf94a196a0594425295d55201c"],["/2018/11/13/小微企业验证码破解/index.html","7723ce1398ca3a19eeb234a5f1ec2e4a"],["/2018/11/18/电视直播源分享/index.html","a54650cacaceb0f3ee7cf7fda8d76687"],["/2018/12/04/android导致文字偏上的问题/index.html","ab177ac49a54b085687d9e8e465c02f3"],["/2018/12/15/RTAC86U刷机指南/index.html","0d232dca142ad2d3187604fe627d2e4e"],["/2019/01/03/我们是怎么从ng迁移到vue的/index.html","486a948b6eaa6e4b4d14c01dafbb5cf1"],["/2019/02/11/Mac前端上手指南/index.html","9089ab65b1e96400eb3b3ec418f50bf4"],["/2019/03/29/axios如何中断请求/index.html","31fb43348a2b122b9ff8daeed3fa8a26"],["/2019/04/10/有关前端和pdf相关的几件事/index.html","c986a99aff1ce471d3ae5bf615f1da0b"],["/2019/06/05/如何删除除了Master之外的所有分支/index.html","25d927198b7a6425d10428ab24f773bd"],["/2019/06/10/一次node内存泄漏排查和解决/index.html","56e072aed6db6e2afef3369ab7332a87"],["/2019/06/15/一次node内存泄漏调查/index.html","403df9e19705a1b0e21f28b94876ed19"],["/2019/07/09/Android如何直接投屏到电脑/index.html","4fa23a2cc99e0bb41855b1323f94318b"],["/2019/07/09/上传app卡在通过App store进行鉴定/index.html","83305ebe2ffdd080ecc76a0709f395dc"],["/2019/07/12/正则/index.html","e39c0f81f95fdb21683170a2bf16a84d"],["/2019/08/15/umi.js约定式路由如何生成breadcrumbs/index.html","43f7071c994b6d4a89b9a691f9b44d15"],["/2019/08/15/vscode在debugger的时候如何加载插件/index.html","a1fdd059a54fcda5544d859486d24f60"],["/2019/09/04/axios兜底错误处理/index.html","e501985b18a9cb25422b36f17e9e1627"],["/2019/09/09/纯css实现table表头吸顶/index.html","b4f860defd79cea6906f119f819e6a40"],["/2019/09/23/自动给表格空单元格补上字符串/index.html","509d1dfb15b63541770fb863d71aba83"],["/2019/10/11/react-route4实现prompt自定义样式/index.html","8aec5f6c4e953ebca4f9cc162694cece"],["/2019/10/18/RN2Flutter/index.html","07882653d442f2ac503aaaf8da89ec34"],["/2019/10/18/webpack正确的引入pdfjs/index.html","4ba71dc0938b1809ab323a7c796ec6db"],["/2019/10/18/文字超过x行后补上省略号的几种办法/index.html","176ad9bff17db7f46ab1a4e87c3d4a1a"],["/404.html","93c4c83b4b762a68f2d9f57e496b6e85"],["/about/index.html","57b3f82f8daa401da1eff69160653448"],["/archives/2018/10/index.html","174b9690b3ba1381093a157ab13a783e"],["/archives/2018/11/index.html","6eb4d4308abb090fe79c124972000d6a"],["/archives/2018/12/index.html","c8fa8d18cf3a62d10d935223abbf21c8"],["/archives/2018/index.html","d0d40cac6eb0aac2bf40ebac4a6b6268"],["/archives/2018/page/2/index.html","45b04b2b4dfb23ef2c4db9a0191262d2"],["/archives/2019/01/index.html","6c96d4dfc625897cfd9b2d17a8a9d93e"],["/archives/2019/02/index.html","110e40be56b70d48ac54575f5e95bfd4"],["/archives/2019/03/index.html","4fe024fa41fda475a45cae74ba92e558"],["/archives/2019/04/index.html","e1692a682bebebc816e03804bf0accad"],["/archives/2019/06/index.html","43327d922df3dffb8b93dadf748b9c25"],["/archives/2019/07/index.html","3a5b83c6845f5543390f13463059debc"],["/archives/2019/08/index.html","f50c0f5b722bbfda4cc288c6dc73fd83"],["/archives/2019/09/index.html","d2187870267cacc6859c474eb85c0767"],["/archives/2019/10/index.html","17c361d94f92e78edf7b903957f43d85"],["/archives/2019/index.html","39a469e95c4c69dbfb775a7623477284"],["/archives/2019/page/2/index.html","11cb8c9acedab75d185468dc6b8fba6d"],["/archives/index.html","039bb53582a84d5b28d2695f39f6fdc1"],["/archives/page/2/index.html","f9a87ff13a1f9f48c28165b2fb6f071e"],["/archives/page/3/index.html","3f19e1188552d9ad5f7b3cfbaf57167d"],["/archives/page/4/index.html","150ce1d7bf02a7a4409aced0074d4d55"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["/assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["/assets/logo-36.png","aa6a7574015183e2f0d2909257aafcdb"],["/assets/logo-48.png","c829a3cb549ebc078d2c9399265f6c07"],["/assets/logo-64.png","2e741bdca8508c9f679cc56916606d19"],["/categories/Cos/index.html","f0fb94f096878f0ef09d3d3485fa42c0"],["/categories/前端/index.html","c560784e1bce1ab53b6f79f6c733a031"],["/categories/可以公开的情报/index.html","577025dc94829097f4edbb1ddceed145"],["/categories/可以公开的情报/page/2/index.html","64b26a240b19db32033666a60441ae2b"],["/categories/学习笔记/index.html","b08f92136b97fd88b792268c91a8b551"],["/categories/开发的捷径/index.html","5f6f80e4ecbdae8004919ab7487873c2"],["/categories/祉华/index.html","f652df5b2490a1e4bf5c36c13303754b"],["/css/mobile.css","511024a40ae747834eaeccc8d4316933"],["/css/style.css","e93a0562640d232d2d55c11d9743e05a"],["/font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["/font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["/font/Source Sans Pro.woff2","2e1e934a85462e0e8b754a6317ccaa6f"],["/font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["/font/SourceCodePro-Regular.ttf.woff2","f43ea4c5ac35312e1fc76a6b6a2e06f0"],["/index.html","15a7da3272cd90b6d1601182679d4c6a"],["/lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["/page/2/index.html","9a9ac1e6ea32baf071fef9ba9bac0b78"],["/page/3/index.html","acf198368864ac07d8991e50a64eeb2f"],["/page/4/index.html","049ba304f49a6264f70c23751c6b7e4b"],["/scripts/main.js","9ec2c9ad23633703a1ba0f3116429b29"],["/scripts/search.js","358f72ee3a1244cfdc0c08a1d4e6708c"],["/scripts/share.js","16fc99a429a991124caac13e6397c5a7"],["/tags/MAC/index.html","2d16454c03f7ccd5fb294bb52933373b"],["/tags/OSX/index.html","c83fe91b7406a8d3c4c7787cfd03df32"],["/tags/RTAC86U/index.html","ba3d61459e62b137eef2ba5d69a3e473"],["/tags/android/index.html","b83ddd72584734d81694aa9b55626319"],["/tags/angularJs/index.html","6c96d4dfc625897cfd9b2d17a8a9d93e"],["/tags/axios/index.html","726a0ce1d3a015847c1fe79fbba16bf8"],["/tags/chrome/index.html","6ef0b6db0fe70f574bd67f256d95caa2"],["/tags/cos/index.html","f0fb94f096878f0ef09d3d3485fa42c0"],["/tags/css/index.html","c625cc9f1e035e4f50a5ef2933af5b08"],["/tags/ecmascript/index.html","ebcc4a915ca56178bbc9e1abda3e4869"],["/tags/font-size/index.html","a59963f3b056b0c7c525a1e6cc701016"],["/tags/gfw/index.html","ba3d61459e62b137eef2ba5d69a3e473"],["/tags/ios/index.html","61ca4c096a5bc842bdc92ee40560ccc5"],["/tags/javascript/index.html","e3e288832ce78c6896dc37c786e1ea19"],["/tags/js/index.html","00493acd3ff555272a6c7c23f6d2bbc4"],["/tags/line-height/index.html","a59963f3b056b0c7c525a1e6cc701016"],["/tags/mojave/index.html","214376ff60ded70fceb09f48ba406fd9"],["/tags/ng/index.html","6c96d4dfc625897cfd9b2d17a8a9d93e"],["/tags/overflow/index.html","fedf953175e488f5eb5d029211cb9451"],["/tags/pdf/index.html","e1692a682bebebc816e03804bf0accad"],["/tags/promise/index.html","726a0ce1d3a015847c1fe79fbba16bf8"],["/tags/prompt/index.html","0adf5fa21ccf221c3ec97024c445923f"],["/tags/react-route/index.html","0adf5fa21ccf221c3ec97024c445923f"],["/tags/react/index.html","0adf5fa21ccf221c3ec97024c445923f"],["/tags/sticky/index.html","08fd3967d8b8cf6b0523fe7f74ee840e"],["/tags/umi-js/index.html","b80ddc9e0815495df5c1265192d3e4f9"],["/tags/vscode/index.html","d0036b1594738e47b1fc928b65592573"],["/tags/vue/index.html","6c96d4dfc625897cfd9b2d17a8a9d93e"],["/tags/上手指南/index.html","90f217396df8dd85f59c7e2de92a6704"],["/tags/乳酸菌/index.html","ba3d61459e62b137eef2ba5d69a3e473"],["/tags/前端/index.html","1526ba7695e0bb2959d40c721681f22f"],["/tags/前端/page/2/index.html","e5e842afe0378557b1426200bcf53288"],["/tags/动态壁纸/index.html","214376ff60ded70fceb09f48ba406fd9"],["/tags/单元格/index.html","efeed5688c54f29348a5b0d5091934f3"],["/tags/可以公开的情报/index.html","1d599d760709f6982f38f0611e1184e4"],["/tags/吸顶/index.html","08fd3967d8b8cf6b0523fe7f74ee840e"],["/tags/学习/index.html","7f2bb383f528ffdfd858a22653630db8"],["/tags/开发/index.html","1d599d760709f6982f38f0611e1184e4"],["/tags/技巧/index.html","ebcc4a915ca56178bbc9e1abda3e4869"],["/tags/插件/index.html","ba3d61459e62b137eef2ba5d69a3e473"],["/tags/教程/index.html","a8ae8f3fe6897b5e0bb328ed1af5f373"],["/tags/数组/index.html","ebcc4a915ca56178bbc9e1abda3e4869"],["/tags/日常/index.html","f652df5b2490a1e4bf5c36c13303754b"],["/tags/省略号/index.html","fedf953175e488f5eb5d029211cb9451"],["/tags/祉华/index.html","f652df5b2490a1e4bf5c36c13303754b"],["/tags/笔记/index.html","25bb0ebfafab46079efb6b0a78df2ebe"],["/tags/约定式路由/index.html","b80ddc9e0815495df5c1265192d3e4f9"],["/tags/经验/index.html","4869fbe1aa01bb772e50ef629f1dd462"],["/tags/补全/index.html","efeed5688c54f29348a5b0d5091934f3"],["/tags/表格/index.html","2d13ff11f93a459110265b913e3cbf44"],["/tags/记录/index.html","7f2bb383f528ffdfd858a22653630db8"],["/tags/超过x行/index.html","fedf953175e488f5eb5d029211cb9451"],["/tags/路由/index.html","b80ddc9e0815495df5c1265192d3e4f9"],["/tags/软件推荐/index.html","30558bcfb663df1a5324bd831a685731"],["/tags/迁移/index.html","6c96d4dfc625897cfd9b2d17a8a9d93e"],["/tags/退出校验/index.html","0adf5fa21ccf221c3ec97024c445923f"],["/tags/错误处理/index.html","726a0ce1d3a015847c1fe79fbba16bf8"],["/tags/镜音/index.html","f0fb94f096878f0ef09d3d3485fa42c0"],["/tags/镜音len/index.html","f0fb94f096878f0ef09d3d3485fa42c0"],["/tags/面包屑/index.html","b80ddc9e0815495df5c1265192d3e4f9"]];
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




