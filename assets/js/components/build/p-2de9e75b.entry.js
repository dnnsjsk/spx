import{r as t,c as i,h as n,H as s,g as o}from"./p-dfe31926.js";import{g as a,c as r}from"./p-9403a412.js";import{s as e}from"./p-37718fa8.js";import{d as c,t as d,a as h}from"./p-3dc95eea.js";import{w as u}from"./p-066c9964.js";import{s as p,a as f}from"./p-067534cf.js";import{d as l,i as v,e as g,b as m,a as x,c as b,f as y,g as j,o as w,U as O,h as k,j as T,k as _,l as A,m as D,S as B}from"./p-3c8a161f.js";import{i as S,a as F,b as L,r as z,c as R}from"./p-e862da1c.js";var C=Object.create,G=function(){function t(){}return function(i){if(!S(i))return{};if(C)return C(i);t.prototype=i;var n=new t;return t.prototype=void 0,n}}();function H(t,i,n){switch(n.length){case 0:return t.call(i);case 1:return t.call(i,n[0]);case 2:return t.call(i,n[0],n[1]);case 3:return t.call(i,n[0],n[1],n[2])}return t.apply(i,n)}var M,N,P,U=Date.now,W=(M=l?function(t,i){return l(t,"toString",{configurable:!0,enumerable:!1,value:(n=i,function(){return n}),writable:!0});var n}:v,N=0,P=0,function(){var t=U(),i=16-(t-P);if(P=t,i>0){if(++N>=800)return arguments[0]}else N=0;return M.apply(void 0,arguments)}),Y=Object.prototype.hasOwnProperty;function Z(t,i,n){var s=t[i];Y.call(t,i)&&g(s,n)&&(void 0!==n||i in t)||m(t,i,n)}var $=Math.max;var q=Object.prototype.hasOwnProperty;function E(t){return x(t)?j(t,!0):function(t){if(!S(t))return function(t){var i=[];if(null!=t)for(var n in Object(t))i.push(n);return i}(t);var i=y(t),n=[];for(var s in t)("constructor"!=s||!i&&q.call(t,s))&&n.push(s);return n}(t)}var I=w(Object.getPrototypeOf,Object),J=Function.prototype.toString,K=Object.prototype.hasOwnProperty,Q=J.call(Object),V="object"==typeof exports&&exports&&!exports.nodeType&&exports;V&&"object"==typeof module&&module&&!module.nodeType&&module;function X(t,i,n){(void 0!==n&&!g(t[i],n)||void 0===n&&!(i in t))&&m(t,i,n)}function tt(t,i){if(("constructor"!==i||"function"!=typeof t[i])&&"__proto__"!=i)return t[i]}function it(t,i,n,s,o,a,r){var e=tt(t,n),c=tt(i,n),d=r.get(c);if(d)X(t,n,d);else{var h,u=a?a(e,c,n+"",t,i,r):void 0,p=void 0===u;if(p){var f=R(c),l=!f&&k(c),v=!f&&!l&&T(c);u=c,f||l||v?R(e)?u=e:F(h=e)&&x(h)?u=function(t,i){var n=-1,s=t.length;for(i||(i=Array(s));++n<s;)i[n]=t[n];return i}(e):l?(p=!1,u=c.slice()):v?(p=!1,u=function(t,i){var n,s,o=i?(s=new(n=t.buffer).constructor(n.byteLength),new O(s).set(new O(n)),s):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}(c,!0)):u=[]:function(t){if(!F(t)||"[object Object]"!=L(t))return!1;var i=I(t);if(null===i)return!0;var n=K.call(i,"constructor")&&i.constructor;return"function"==typeof n&&n instanceof n&&J.call(n)==Q}(c)||_(c)?(u=e,_(e)?u=function(t){return function(t,i,n){var s=!n;n||(n={});for(var o=-1,a=i.length;++o<a;){var r=i[o],e=void 0;void 0===e&&(e=t[r]),s?m(n,r,e):Z(n,r,e)}return n}(t,E(t))}(e):S(e)&&!A(e)||(u=function(t){return"function"!=typeof t.constructor||y(t)?{}:G(I(t))}(c))):p=!1}p&&(r.set(c,u),o(u,c,s,a,r),r.delete(c)),X(t,n,u)}}function nt(t,i,n,s,o){t!==i&&D(i,(function(a,r){if(o||(o=new B),S(a))it(t,i,r,n,nt,s,o);else{var e=s?s(tt(t,r),a,r+"",t,i,o):void 0;void 0===e&&(e=a),X(t,r,e)}}),E)}var st,ot=(st=function(t,i,n){nt(t,i,n)},function(t,i){return W(function(t,i,n){return i=$(void 0===i?t.length-1:i,0),function(){for(var s=arguments,o=-1,a=$(s.length-i,0),r=Array(a);++o<a;)r[o]=s[i+o];o=-1;for(var e=Array(i+1);++o<i;)e[o]=s[o];return e[i]=n(r),H(t,this,e)}}(t,i,v),t+"")}((function(t,i){var n=-1,s=i.length,o=s>1?i[s-1]:void 0,a=s>2?i[2]:void 0;for(o=st.length>3&&"function"==typeof o?(s--,o):void 0,a&&function(t,i,n){if(!S(n))return!1;var s=typeof i;return!!("number"==s?x(n)&&b(i,n.length):"string"==s&&i in n)&&g(n[i],t)}(i[0],i[1],a)&&(o=s<3?void 0:o,s=1),t=Object(t);++n<s;){var r=i[n];r&&st(t,r,n)}return t})));const at="spx-docs",rt=class{constructor(n){t(this,n),this.spxDocsDidLoad=i(this,"spxDocsDidLoad",7),this.bpMobile=1024,this.gap="3rem",this.contentPaddingYMin=0,this.contentPaddingYMax=0,this.navigationGapMin=.2,this.navigationGapMax=.4,this.navigationHeadingTag="h1",this.navigationLinkFontSizeMin=.8,this.navigationLinkFontSizeMax=1,this.navigationLinkFontWeight="500",this.navigationLinkLetterSpacing="0",this.navigationLinkLineHeight="1.25",this.navigationLinkTextTransform="default",this.navigationPaddingYMin=0,this.navigationPaddingYMax=0,this.navigationTitleFontSizeMin=.8,this.navigationTitleFontSizeMax=.9,this.navigationTitleFontWeight="500",this.navigationTitleLetterSpacing="0",this.navigationTitleLineHeight="1.25",this.navigationTitleTextTransform="uppercase",this.navigationTitleMarginBottom=1,this.navigationTitleMarginBottomMin=1,this.navigationTitleMarginBottomMax=2,this.navigationTop="0",this.offsetMarginTop="",this.styling="fluid"}onResize(){this.mobile=window.innerWidth<this.bpMobile}componentWillLoad(){this.onResize()}componentDidLoad(){a(this.el),this.createNavigation(),window.location.hash&&document.querySelector(window.location.hash)&&document.querySelector(window.location.hash).scrollIntoView(),this.spxDocsDidLoad.emit({target:"document"})}createNavigation(){""!==this.content.innerHTML&&(this.content.querySelectorAll(this.navigationHeadingTag+":not([data-spx-docs-no-navigation])").forEach(((t,i)=>{const n=t.innerHTML.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"").replace(/^([-=\s]*)([a-zA-Z0-9])/gm,"$2"),s=this.uniqueId?n+"-"+i:n,o=document.createElement("a");t.setAttribute("data-spx-docs-index",String(i)),t.setAttribute("id",s),o.setAttribute("data-spx-docs-index",String(i)),o.setAttribute("href","#"+s),o.innerHTML=t.innerHTML,this.navigation.appendChild(o),u(o,document.createElement("li"))})),this.content.querySelectorAll(this.navigationHeadingTag+"[data-spx-docs-heading]:not([data-spx-docs-no-navigation])").forEach((t=>{const i=t.getAttribute("data-spx-docs-index"),n=document.createElement("span"),s=this.navigation.querySelector('[data-spx-docs-index="'+i+'"]').parentElement;if(n.innerHTML=t.getAttribute("data-spx-docs-heading"),this.navigation.insertBefore(n,s),this.separator&&"0"!==i){const i=document.createElement(this.separator);i.setAttribute("data-spx-docs-separator",""),i.setAttribute("data-spx-docs-content",t.getAttribute("data-spx-docs-heading")),i.innerHTML=t.getAttribute("data-spx-docs-heading"),this.content.appendChild(i),(o=t).parentNode.insertBefore(i,o)}var o})),this.el.querySelector("spx-scrollspy").reload())}render(){const t=r({display:this.mobile?"block":"grid",gridTemplateColumns:!this.mobile&&"minmax(0, auto) minmax(0, 1fr)",gap:e(at,"gap",this.gap),gridAutoFlow:"column"}),i=r({display:this.mobile?"none":"block",background:e(at,"navigation-background",this.navigationBackground)}),o={position:"sticky",top:e(at,"navigation-top",this.navigationTop),gridAutoRows:"max-content",height:"calc(100vh - "+this.navigationTop+")",paddingTop:p(at,"navigation-padding-y",this.navigationPaddingY,this.navigationPaddingYMin,this.navigationPaddingYMax,this.styling),paddingBottom:p(at,"navigation-padding-y",this.navigationPaddingY,this.navigationPaddingYMin,this.navigationPaddingYMax,this.styling),overflowY:"auto",ul:{display:"grid",gridGap:p(at,"navigation-gap",this.navigationGap,this.navigationGapMin,this.navigationGapMax,this.styling)},a:Object.assign(Object.assign({},c(at,"navigation-link",this.navigationLinkColor,this.navigationLinkFontSize,this.navigationLinkFontSizeMin,this.navigationLinkFontSizeMax,this.navigationLinkFontWeight,this.navigationLinkLetterSpacing,this.navigationLinkLineHeight,this.navigationLinkTextTransform,this.styling)),{width:"max-content",transitionProperty:"color",transitionDuration:e(at,"navigation-transition-duration",d),itemTransitionTimingFunction:e(at,"navigation-transition-timing-function",h)}),li:{"&:last-of-type":{marginBottom:p(at,"navigation-padding-y",this.navigationPaddingY,this.navigationPaddingYMin,this.navigationPaddingYMax,this.styling)},"&.spx-scrollspy__nav--active a":{color:e(at,"navigation-link-color-active",this.navigationLinkColorActive)}},span:Object.assign({},c(at,"navigation-title",this.navigationTitleColor,this.navigationTitleFontSize,this.navigationTitleFontSizeMin,this.navigationTitleFontSizeMax,this.navigationTitleFontWeight,this.navigationTitleLetterSpacing,this.navigationTitleLineHeight,this.navigationTitleTextTransform,this.styling)),"li + span":{display:"block",marginTop:p(at,"navigation-title-margin-bottom",this.navigationTitleMarginBottom,this.navigationTitleMarginBottomMin,this.navigationTitleMarginBottomMax,this.styling)}},a=r(ot(o,{})),u={paddingTop:e(at,"content-padding",f(at,"padding-y",this.contentPaddingYMin,this.contentPaddingYMax)),paddingBottom:e(at,"content-padding",f(at,"padding-y",this.contentPaddingYMin,this.contentPaddingYMax)),"[data-spx-docs-index]:before":{display:"block",content:'" "',marginTop:"calc("+e(at,"offset-margin-top",this.offsetMarginTop)+" * -1)",height:e(at,"offset-margin-top",this.offsetMarginTop),visibility:"hidden"},"&:last-child":{marginBottom:f(at,"content-padding-y",this.contentPaddingYMin,this.contentPaddingYMax)}},l=r(ot(u,{}));return n(s,{class:t},n("div",{class:i},n("spx-scrollspy",{display:"grid","url-change":!0,scrolling:this.scrolling,class:a},n("ul",{ref:t=>this.navigation=t}))),n("div",{ref:t=>this.content=t,class:l},n("slot",null)))}get el(){return o(this)}};export{rt as spx_docs}