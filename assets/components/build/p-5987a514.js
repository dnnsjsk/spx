import{n as r,l as n,e as t,p as o,i as e,j as i,a as u,b as a,o as f,U as c,d as v,f as s,k as d,q as b,m as p,S as j}from"./p-41fc38cd.js";import{c as l,a as m,b as y,r as O,i as w}from"./p-07e3a719.js";var x=Object.create,_=function(){function r(){}return function(n){if(!l(n))return{};if(x)return x(n);r.prototype=n;var t=new r;return r.prototype=void 0,t}}();function g(r,n,t){switch(t.length){case 0:return r.call(n);case 1:return r.call(n,t[0]);case 2:return r.call(n,t[0],t[1]);case 3:return r.call(n,t[0],t[1],t[2])}return r.apply(n,t)}var h,A,S,k=Date.now,q=(h=r?function(n,t){return r(n,"toString",{configurable:!0,enumerable:!1,value:(o=t,function(){return o}),writable:!0});var o}:n,A=0,S=0,function(){var r=k(),n=16-(r-S);if(S=r,n>0){if(++A>=800)return arguments[0]}else A=0;return h.apply(void 0,arguments)}),D=Object.prototype.hasOwnProperty;function F(r,n,e){var i=r[n];D.call(r,n)&&t(i,e)&&(void 0!==e||n in r)||o(r,n,e)}var M=Math.max;var U=Object.prototype.hasOwnProperty;function z(r){return e(r)?a(r,!0):function(r){if(!l(r))return function(r){var n=[];if(null!=r)for(var t in Object(r))n.push(t);return n}(r);var n=u(r),t=[];for(var o in r)("constructor"!=o||!n&&U.call(r,o))&&t.push(o);return t}(r)}var B=f(Object.getPrototypeOf,Object),C=Function.prototype.toString,E=Object.prototype.hasOwnProperty,G=C.call(Object),H="object"==typeof exports&&exports&&!exports.nodeType&&exports;H&&"object"==typeof module&&module&&!module.nodeType&&module;function I(r,n,e){(void 0!==e&&!t(r[n],e)||void 0===e&&!(n in r))&&o(r,n,e)}function J(r,n){if(("constructor"!==n||"function"!=typeof r[n])&&"__proto__"!=n)return r[n]}function K(r,n,t,i,a,f,p){var j=J(r,t),O=J(n,t),x=p.get(O);if(x)I(r,t,x);else{var g,h=f?f(j,O,t+"",r,n,p):void 0,A=void 0===h;if(A){var S=w(O),k=!S&&v(O),q=!S&&!k&&s(O);h=O,S||k||q?w(j)?h=j:m(g=j)&&e(g)?h=function(r,n){var t=-1,o=r.length;for(n||(n=Array(o));++t<o;)n[t]=r[t];return n}(j):k?(A=!1,h=O.slice()):q?(A=!1,h=function(r,n){var t,o,e=n?(o=new(t=r.buffer).constructor(t.byteLength),new c(o).set(new c(t)),o):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}(O,!0)):h=[]:function(r){if(!m(r)||"[object Object]"!=y(r))return!1;var n=B(r);if(null===n)return!0;var t=E.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&C.call(t)==G}(O)||d(O)?(h=j,d(j)?h=function(r){return function(r,n,t){var e=!t;t||(t={});for(var i=-1,u=n.length;++i<u;){var a=n[i],f=void 0;void 0===f&&(f=r[a]),e?o(t,a,f):F(t,a,f)}return t}(r,z(r))}(j):l(j)&&!b(j)||(h=function(r){return"function"!=typeof r.constructor||u(r)?{}:_(B(r))}(O))):A=!1}A&&(p.set(O,h),a(h,O,i,f,p),p.delete(O)),I(r,t,h)}}function L(r,n,t,o,e){r!==n&&p(n,(function(i,u){if(e||(e=new j),l(i))K(r,n,u,t,L,o,e);else{var a=o?o(J(r,u),i,u+"",r,n,e):void 0;void 0===a&&(a=i),I(r,u,a)}}),z)}var N,P=(N=function(r,n,t){L(r,n,t)},function(r,t){return q(function(r,n,t){return n=M(void 0===n?r.length-1:n,0),function(){for(var o=arguments,e=-1,i=M(o.length-n,0),u=Array(i);++e<i;)u[e]=o[n+e];e=-1;for(var a=Array(n+1);++e<n;)a[e]=o[e];return a[n]=t(u),g(r,this,a)}}(r,t,n),r+"")}((function(r,n){var o=-1,u=n.length,a=u>1?n[u-1]:void 0,f=u>2?n[2]:void 0;for(a=N.length>3&&"function"==typeof a?(u--,a):void 0,f&&function(r,n,o){if(!l(o))return!1;var u=typeof n;return!!("number"==u?e(o)&&i(n,o.length):"string"==u&&n in o)&&t(o[n],r)}(n[0],n[1],f)&&(a=u<3?void 0:a,u=1),r=Object(r);++o<u;){var c=n[o];c&&N(r,c,o)}return r})));export{P as m}