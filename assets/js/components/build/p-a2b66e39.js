import{b as r,d as n,e as t,g as e,h as o,i as u,c as i,j as a,k as f,o as c,l as v,m as s,r as d,U as b,n as l,p,a as j,q as m,s as y,t as O,S as w}from"./p-edbeee69.js";var g=Object.create,x=function(){function n(){}return function(t){if(!r(t))return{};if(g)return g(t);n.prototype=t;var e=new n;return n.prototype=void 0,e}}();function h(r,n,t){switch(t.length){case 0:return r.call(n);case 1:return r.call(n,t[0]);case 2:return r.call(n,t[0],t[1]);case 3:return r.call(n,t[0],t[1],t[2])}return r.apply(n,t)}var _,A,k,S=Date.now,q=(_=n?function(r,t){return n(r,"toString",{configurable:!0,enumerable:!1,value:(e=t,function(){return e}),writable:!0});var e}:t,A=0,k=0,function(){var r=S(),n=16-(r-k);if(k=r,n>0){if(++A>=800)return arguments[0]}else A=0;return _.apply(void 0,arguments)}),D=Object.prototype.hasOwnProperty;function F(r,n,t){var u=r[n];D.call(r,n)&&e(u,t)&&(void 0!==t||n in r)||o(r,n,t)}var M=Math.max;function U(n,t,o){if(!r(o))return!1;var a=typeof t;return!!("number"==a?u(o)&&i(t,o.length):"string"==a&&t in o)&&e(o[t],n)}var z=Object.prototype.hasOwnProperty;function B(n){return u(n)?f(n,!0):function(n){if(!r(n))return function(r){var n=[];if(null!=r)for(var t in Object(r))n.push(t);return n}(n);var t=a(n),e=[];for(var o in n)("constructor"!=o||!t&&z.call(n,o))&&e.push(o);return e}(n)}var C=c(Object.getPrototypeOf,Object),E=Function.prototype.toString,G=Object.prototype.hasOwnProperty,H=E.call(Object),I="object"==typeof exports&&exports&&!exports.nodeType&&exports;I&&"object"==typeof module&&module&&!module.nodeType&&module;function J(r,n,t){(void 0!==t&&!e(r[n],t)||void 0===t&&!(n in r))&&o(r,n,t)}function K(r,n){if(("constructor"!==n||"function"!=typeof r[n])&&"__proto__"!=n)return r[n]}function L(n,t,e,i,f,c,d){var O=K(n,e),w=K(t,e),g=d.get(w);if(g)J(n,e,g);else{var h,_=c?c(O,w,e+"",n,t,d):void 0,A=void 0===_;if(A){var k=j(w),S=!k&&l(w),q=!k&&!S&&p(w);_=w,k||S||q?j(O)?_=O:v(h=O)&&u(h)?_=function(r,n){var t=-1,e=r.length;for(n||(n=Array(e));++t<e;)n[t]=r[t];return n}(O):S?(A=!1,_=w.slice()):q?(A=!1,_=function(r,n){var t,e,o=n?(e=new(t=r.buffer).constructor(t.byteLength),new b(e).set(new b(t)),e):r.buffer;return new r.constructor(o,r.byteOffset,r.length)}(w,!0)):_=[]:function(r){if(!v(r)||"[object Object]"!=s(r))return!1;var n=C(r);if(null===n)return!0;var t=G.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&E.call(t)==H}(w)||m(w)?(_=O,m(O)?_=function(r){return function(r,n,t){var e=!t;t||(t={});for(var u=-1,i=n.length;++u<i;){var a=n[u],f=void 0;void 0===f&&(f=r[a]),e?o(t,a,f):F(t,a,f)}return t}(r,B(r))}(O):r(O)&&!y(O)||(_=function(r){return"function"!=typeof r.constructor||a(r)?{}:x(C(r))}(w))):A=!1}A&&(d.set(w,_),f(_,w,i,c,d),d.delete(w)),J(n,e,_)}}function N(n,t,e,o,u){n!==t&&O(t,(function(i,a){if(u||(u=new w),r(i))L(n,t,a,e,N,o,u);else{var f=o?o(K(n,a),i,a+"",n,t,u):void 0;void 0===f&&(f=i),J(n,a,f)}}),B)}var P,Q=(P=function(r,n,t){N(r,n,t)},function(r,n){return q(function(r,n,t){return n=M(void 0===n?r.length-1:n,0),function(){for(var e=arguments,o=-1,u=M(e.length-n,0),i=Array(u);++o<u;)i[o]=e[n+o];o=-1;for(var a=Array(n+1);++o<n;)a[o]=e[o];return a[n]=t(i),h(r,this,a)}}(r,n,t),r+"")}((function(r,n){var t=-1,e=n.length,o=e>1?n[e-1]:void 0,u=e>2?n[2]:void 0;for(o=P.length>3&&"function"==typeof o?(e--,o):void 0,u&&U(n[0],n[1],u)&&(o=e<3?void 0:o,e=1),r=Object(r);++t<e;){var i=n[t];i&&P(r,i,t)}return r})));export{F as a,C as g,U as i,B as k,Q as m}