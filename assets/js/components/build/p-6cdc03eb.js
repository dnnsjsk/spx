import{a as r,b as n,c as t,r as o,i as e}from"./p-a1c5e2d4.js";import{d as i,b as u,e as a,c as f,i as c,a as v,g as s,h as d,o as b,U as p,j,k as l,l as m,m as y,n as O,S as w}from"./p-d1ae8003.js";var g=Object.create,x=function(){function n(){}return function(t){if(!r(t))return{};if(g)return g(t);n.prototype=t;var o=new n;return n.prototype=void 0,o}}();function h(r,n,t){switch(t.length){case 0:return r.call(n);case 1:return r.call(n,t[0]);case 2:return r.call(n,t[0],t[1]);case 3:return r.call(n,t[0],t[1],t[2])}return r.apply(n,t)}var _,A,k,S=Date.now,D=(_=i?function(r,n){return i(r,"toString",{configurable:!0,enumerable:!1,value:(t=n,function(){return t}),writable:!0});var t}:u,A=0,k=0,function(){var r=S(),n=16-(r-k);if(k=r,n>0){if(++A>=800)return arguments[0]}else A=0;return _.apply(void 0,arguments)}),F=Object.prototype.hasOwnProperty;function M(r,n,t){var o=r[n];F.call(r,n)&&a(o,t)&&(void 0!==t||n in r)||f(r,n,t)}var U=Math.max;function q(n,t,o){if(!r(o))return!1;var e=typeof t;return!!("number"==e?c(o)&&v(t,o.length):"string"==e&&t in o)&&a(o[t],n)}var z=Object.prototype.hasOwnProperty;function B(n){return c(n)?d(n,!0):function(n){if(!r(n))return function(r){var n=[];if(null!=r)for(var t in Object(r))n.push(t);return n}(n);var t=s(n),o=[];for(var e in n)("constructor"!=e||!t&&z.call(n,e))&&o.push(e);return o}(n)}var C=b(Object.getPrototypeOf,Object),E=Function.prototype.toString,G=Object.prototype.hasOwnProperty,H=E.call(Object),I="object"==typeof exports&&exports&&!exports.nodeType&&exports;I&&"object"==typeof module&&module&&!module.nodeType&&module;function J(r,n,t){(void 0!==t&&!a(r[n],t)||void 0===t&&!(n in r))&&f(r,n,t)}function K(r,n){if(("constructor"!==n||"function"!=typeof r[n])&&"__proto__"!=n)return r[n]}function L(o,i,u,a,v,d,b){var O=K(o,u),w=K(i,u),g=b.get(w);if(g)J(o,u,g);else{var h,_=d?d(O,w,u+"",o,i,b):void 0,A=void 0===_;if(A){var k=e(w),S=!k&&j(w),D=!k&&!S&&l(w);_=w,k||S||D?e(O)?_=O:n(h=O)&&c(h)?_=function(r,n){var t=-1,o=r.length;for(n||(n=Array(o));++t<o;)n[t]=r[t];return n}(O):S?(A=!1,_=w.slice()):D?(A=!1,_=function(r,n){var t,o,e=n?(o=new(t=r.buffer).constructor(t.byteLength),new p(o).set(new p(t)),o):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}(w,!0)):_=[]:function(r){if(!n(r)||"[object Object]"!=t(r))return!1;var o=C(r);if(null===o)return!0;var e=G.call(o,"constructor")&&o.constructor;return"function"==typeof e&&e instanceof e&&E.call(e)==H}(w)||m(w)?(_=O,m(O)?_=function(r){return function(r,n,t){var o=!t;t||(t={});for(var e=-1,i=n.length;++e<i;){var u=n[e],a=void 0;void 0===a&&(a=r[u]),o?f(t,u,a):M(t,u,a)}return t}(r,B(r))}(O):r(O)&&!y(O)||(_=function(r){return"function"!=typeof r.constructor||s(r)?{}:x(C(r))}(w))):A=!1}A&&(b.set(w,_),v(_,w,a,d,b),b.delete(w)),J(o,u,_)}}function N(n,t,o,e,i){n!==t&&O(t,(function(u,a){if(i||(i=new w),r(u))L(n,t,a,o,N,e,i);else{var f=e?e(K(n,a),u,a+"",n,t,i):void 0;void 0===f&&(f=u),J(n,a,f)}}),B)}var P,Q=(P=function(r,n,t){N(r,n,t)},function(r,n){return D(function(r,n,t){return n=U(void 0===n?r.length-1:n,0),function(){for(var o=arguments,e=-1,i=U(o.length-n,0),u=Array(i);++e<i;)u[e]=o[n+e];e=-1;for(var a=Array(n+1);++e<n;)a[e]=o[e];return a[n]=t(u),h(r,this,a)}}(r,n,u),r+"")}((function(r,n){var t=-1,o=n.length,e=o>1?n[o-1]:void 0,i=o>2?n[2]:void 0;for(e=P.length>3&&"function"==typeof e?(o--,e):void 0,i&&q(n[0],n[1],i)&&(e=o<3?void 0:e,o=1),r=Object(r);++t<o;){var u=n[t];u&&P(r,u,t)}return r})));export{M as a,C as g,q as i,B as k,Q as m}