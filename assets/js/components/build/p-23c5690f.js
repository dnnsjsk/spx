import{c as n}from"./p-cfbebfdc.js";import{i as t}from"./p-5cc7fca6.js";import{r as c}from"./p-55eff329.js";var r=Object.prototype.hasOwnProperty;function o(n,t){return null!=n&&r.call(n,t)}function e(n,c){return null!=n&&t(n,c,o)}const s=t=>{const r={};Array.prototype.slice.call(t.closest("spx-container").attributes).forEach((function(n){r[n.name]=n.value}));const o={};Array.prototype.slice.call(t.attributes).forEach((function(n){o[n.name]=n.value}));const s={},a=t;new MutationObserver(o=>{o.forEach(o=>{if(e(r,o.attributeName)&&"class"!==o.attributeName){s["--spx-container-"+o.attributeName]=t.getAttribute(o.attributeName);const r=n(Object.assign(Object.assign({},s),{label:"container"}));c(t,"container"),t.classList.add(r)}})}).observe(a,{attributes:!0}),Object.keys(o).forEach(o=>{if(e(r,o)&&"class"!==o){s["--spx-container-"+o]=t.getAttribute(o);const r=n(Object.assign(Object.assign({},s),{label:"container"}));c(t,"container"),t.classList.add(r)}})};export{s}