!function(e){function n(n){for(var r,u,a=n[0],s=n[1],c=n[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(p&&p(n);l.length;)l.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={1:0},i=[];var u={};var a={1507:function(){return{"./tiktoken_bg.js":{__wbindgen_object_drop_ref:function(e){return r[1506].exports.g(e)},__wbindgen_is_undefined:function(e){return r[1506].exports.f(e)},__wbg_stringify_029a979dfb73aa17:function(e){return r[1506].exports.d(e)},__wbindgen_string_get:function(e,n){return r[1506].exports.h(e,n)},__wbindgen_error_new:function(e,n){return r[1506].exports.e(e,n)},__wbg_parse_3ac95b51fc312db8:function(e,n){return r[1506].exports.b(e,n)},__wbindgen_throw:function(e,n){return r[1506].exports.i(e,n)}}}}};function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(e){return s.p+"static/js/"+({}[e]||e)+"."+{3:"55dfb220"}[e]+".chunk.js"}(e);var f=new Error;i=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,t[1](f)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return({3:[1507]}[e]||[]).forEach((function(e){var t=u[e];if(t)n.push(t);else{var r,o=a[e](),i=fetch(s.p+""+{1507:"fbeb0390ce2e09e876ae"}[e]+".module.wasm");if(o instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(i),o]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(i,o);else{r=i.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,o)}))}n.push(u[e]=r.then((function(n){return s.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="./",s.oe=function(e){throw console.error(e),e},s.w={};var c=this.webpackJsonpchatchan=this.webpackJsonpchatchan||[],f=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var p=f;t()}([]);