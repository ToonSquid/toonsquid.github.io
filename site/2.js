(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{18:function(n,t,e){"use strict";e.r(t),e.d(t,"search",(function(){return r}));var o=function(n,t,e,o){return new(e=e||Promise)((function(i,r){function c(n){try{s(o.next(n))}catch(n){r(n)}}function u(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var t;n.done?i(n.value):((t=n.value)instanceof e?t:new e((function(n){n(t)}))).then(c,u)}s((o=o.apply(n,t||[])).next())}))};const i=e(17);function r(n,t){return o(this,void 0,void 0,(function*(){return(yield function(n){return o(this,void 0,void 0,(function*(){return window.toonsquid_search_index||(window.toonsquid_search_index=yield function(n){return o(this,void 0,void 0,(function*(){return new Promise((t,e)=>{const o=new XMLHttpRequest;o.onreadystatechange=()=>{var n;4===o.readyState&&(n=JSON.parse(o.responseText),n=i.Index.load(n),t(n))},o.open("GET",n),o.send()})}))}(n)),window.toonsquid_search_index}))}(t)).search(n,{})}))}}}]);