"use strict";var precacheConfig=[["/portfolio/index.html","b403e0dc6ee493bcf21deb55b5f56304"],["/portfolio/static/css/main.0a04045e.css","3f6c1a70b860efc931af20783af6613f"],["/portfolio/static/js/main.21fc25ab.js","2ccc83174e32ee2f9ce8662a73f82ac3"],["/portfolio/static/media/Resume.03a60e14.pdf","03a60e147948fdad36e77098cfc57c01"],["/portfolio/static/media/WC.44aa799d.svg","44aa799dbc42829519eec7bc23c22ef9"],["/portfolio/static/media/closenav.a31ced77.svg","a31ced778fe9b82a2c50fdcc015ea7cf"],["/portfolio/static/media/desktoplogin.e9ea0d0f.png","e9ea0d0f22dbdc61c74f789bc36c3a42"],["/portfolio/static/media/home.467cb310.png","467cb3105544b4d28c96c2e849c610fb"],["/portfolio/static/media/info.36d4c3d8.png","36d4c3d839b468f6a732bbbbc970b161"],["/portfolio/static/media/managerides.0dace0e5.png","0dace0e56d71b93b6aa5b1b1ea7ef5af"],["/portfolio/static/media/manageridesclosed.551ed619.png","551ed6193224b7b219610bf7c2849adf"],["/portfolio/static/media/mobilelogin.e4abc2de.png","e4abc2de18731e4f14de06e243501fd7"],["/portfolio/static/media/opennav.ad4f4d0c.svg","ad4f4d0c8d7a2e4705b85ebacda3175b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});