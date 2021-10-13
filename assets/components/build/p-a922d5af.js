import{d as n,f as t}from"./p-509d707c.js";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function r(n,t,e){return n(e={path:t,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}function i(n,t,e,o=!1){const r=new MutationObserver((n=>{n.forEach((n=>{e(n),o&&r.disconnect()}))}));r.observe(n,t)}var u=r((function(n){n.exports=function(){function n(){return(n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),i=t&&window.devicePixelRatio>1,u={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(t){return n({},u,t)},s=function(n,t){var e,o="LazyLoad::Initialized",r=new n(t);try{e=new CustomEvent(o,{detail:{instance:r}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:r})}window.dispatchEvent(e)},f="loading",a="loaded",l="applied",d="error",b="native",v=function(n,t){return n.getAttribute("data-"+t)},p=function(n){return v(n,"ll-status")},g=function(n,t){return function(n,t,e){var o="data-ll-status";null!==e?n.setAttribute(o,e):n.removeAttribute(o)}(n,0,t)},h=function(n){return g(n,null)},y=function(n){return null===p(n)},m=function(n){return p(n)===b},w=[f,a,l,d],_=function(n,t,e,o){n&&(void 0===o?void 0===e?n(t):n(t,e):n(t,e,o))},O=function(n,t){r?n.classList.add(t):n.className+=(n.className?" ":"")+t},j=function(n,t){r?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},I=function(n){return n.llTempImage},M=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},x=function(n,t){n&&(n.loadingCount+=t)},E=function(n,t){n&&(n.toLoadCount=t)},z=function(n){for(var t,e=[],o=0;t=n.children[o];o+=1)"SOURCE"===t.tagName&&e.push(t);return e},N=function(n,t,e){e&&n.setAttribute(t,e)},k=function(n,t){n.removeAttribute(t)},$=function(n){return!!n.llOriginalAttrs},A=function(n){if(!$(n)){var t={};t.src=n.getAttribute("src"),t.srcset=n.getAttribute("srcset"),t.sizes=n.getAttribute("sizes"),n.llOriginalAttrs=t}},C=function(n){if($(n)){var t=n.llOriginalAttrs;N(n,"src",t.src),N(n,"srcset",t.srcset),N(n,"sizes",t.sizes)}},R=function(n,t){N(n,"sizes",v(n,t.data_sizes)),N(n,"srcset",v(n,t.data_srcset)),N(n,"src",v(n,t.data_src))},D=function(n){k(n,"src"),k(n,"srcset"),k(n,"sizes")},P=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&z(e).forEach(t)},T={IMG:function(n,t){P(n,(function(n){A(n),R(n,t)})),A(n),R(n,t)},IFRAME:function(n,t){N(n,"src",v(n,t.data_src))},VIDEO:function(n,t){!function(n){z(n).forEach((function(n){N(n,"src",v(n,t.data_src))}))}(n),N(n,"poster",v(n,t.data_poster)),N(n,"src",v(n,t.data_src)),n.load()}},G=function(n,t){var e=T[n.tagName];e&&e(n,t)},L=function(n,t,e){x(e,1),O(n,t.class_loading),g(n,f),_(t.callback_loading,n,e)},F=["IMG","IFRAME","VIDEO"],S=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||_(n.callback_finish,t)},U=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},V=function(n,t,e){n.removeEventListener(t,e)},q=function(n){return!!n.llEvLisnrs},W=function(n){if(q(n)){var t=n.llEvLisnrs;for(var e in t)V(n,e,t[e]);delete n.llEvLisnrs}},H=function(n,t,e){!function(n){delete n.llTempImage}(n),x(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),j(n,t.class_loading),t.unobserve_completed&&M(n,e)},J=function(n,t,e){var o=I(n)||n;q(o)||function(n,t,e){q(n)||(n.llEvLisnrs={}),U(n,"VIDEO"===n.tagName?"loadeddata":"load",t),U(n,"error",e)}(o,(function(){!function(n,t,e,o){var r=m(t);H(t,e,o),O(t,e.class_loaded),g(t,a),_(e.callback_loaded,t,o),r||S(e,o)}(0,n,t,e),W(o)}),(function(){!function(n,t,e,o){var r=m(t);H(t,e,o),O(t,e.class_error),g(t,d),_(e.callback_error,t,o),r||S(e,o)}(0,n,t,e),W(o)}))},K=function(n,t,e){!function(n){return F.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),J(n,t,e),function(n,t,e){var o=v(n,t.data_bg),r=v(n,t.data_bg_hidpi),u=i&&r?r:o;u&&(n.style.backgroundImage='url("'.concat(u,'")'),I(n).setAttribute("src",u),L(n,t,e))}(n,t,e),function(n,t,e){var o=v(n,t.data_bg_multi),r=v(n,t.data_bg_multi_hidpi),u=i&&r?r:o;u&&(n.style.backgroundImage=u,function(n,t,e){O(n,t.class_applied),g(n,l),t.unobserve_completed&&M(n,t),_(t.callback_applied,n,e)}(n,t,e))}(n,t,e)}(n,t,e):function(n,t,e){J(n,t,e),G(n,t),L(n,t,e)}(n,t,e)},B=["IMG","IFRAME","VIDEO"],Q=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},X=function(n){return Array.prototype.slice.call(n)},Y=function(n){return n.container.querySelectorAll(n.elements_selector)},Z=function(n){return function(n){return p(n)===d}(n)},nn=function(n,t){return function(n){return X(n).filter(y)}(n||Y(t))},tn=function(n,e){var r=c(n);this._settings=r,this.loadingCount=0,function(n,t){o&&!Q(n)&&(t._observer=new IntersectionObserver((function(e){!function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,o){var r=function(n){return w.indexOf(p(n))>=0}(n);g(n,"entered"),O(n,e.class_entered),j(n,e.class_exited),function(n,t,e){t.unobserve_entered&&M(n,e)}(n,e,o),_(e.callback_enter,n,t,o),r||K(n,e,o)}(n.target,n,t,e):function(n,t,e,o){y(n)||(O(n,e.class_exited),function(n,t,e,o){e.cancel_on_exit&&function(n){return p(n)===f}(n)&&"IMG"===n.tagName&&(W(n),function(n){P(n,(function(n){D(n)})),D(n)}(n),function(n){P(n,(function(n){C(n)})),C(n)}(n),j(n,e.class_loading),x(o,-1),h(n),_(e.callback_cancel,n,t,o))}(n,t,e,o),_(e.callback_exit,n,t,o))}(n.target,n,t,e)}))}(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(r,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=Y(n),X(e).filter(Z)).forEach((function(t){j(t,n.class_error),h(t)})),t.update()}(n,e)}))}(r,this),this.update(e)};return tn.prototype={update:function(n){var t,r,i=this._settings,u=nn(n,i);E(this,u.length),!e&&o?Q(i)?function(n,t,e){n.forEach((function(n){-1!==B.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),J(n,t,e),G(n,t),g(n,b)}(n,t,e)})),E(e,0)}(u,i,this):(r=u,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,r)):this.loadAll(u)},destroy:function(){this._observer&&this._observer.disconnect(),Y(this._settings).forEach((function(n){delete n.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;nn(n,e).forEach((function(n){M(n,t),K(n,e,t)}))}},tn.load=function(n,t){var e=c(t);K(n,e)},tn.resetStatus=function(n){h(n)},t&&function(n,t){if(t)if(t.length)for(var e,o=0;e=t[o];o+=1)s(n,e);else s(n,t)}(tn,window.lazyLoadOptions),tn}()}));function c(n){n.condition&&new u({unobserve_entered:!0,unobserve_completed:!0},n.el.shadowRoot.querySelectorAll("[data-src]"))}function s(n){return n.split("").map(((n,t)=>n.toUpperCase()===n?`${0!==t?"-":""}${n.toLowerCase()}`:n)).join("")}function f(n,t,e,o){n.style.setProperty(`--${t}-${s(e)}`,o)}var a="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),b=d.Symbol,v=Object.prototype,p=v.hasOwnProperty,g=v.toString,h=b?b.toStringTag:void 0,y=Object.prototype.toString,m=b?b.toStringTag:void 0;function w(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":m&&m in Object(n)?function(n){var t=p.call(n,h),e=n[h];try{n[h]=void 0;var o=!0}catch(n){}var r=g.call(n);return o&&(t?n[h]=e:delete n[h]),r}(n):function(n){return y.call(n)}(n)}function _(n){return null!=n&&"object"==typeof n}function O(n){return"symbol"==typeof n||_(n)&&"[object Symbol]"==w(n)}var j=Array.isArray,I=b?b.prototype:void 0,M=I?I.toString:void 0;function x(n){if("string"==typeof n)return n;if(j(n))return function(n,t){for(var e=-1,o=null==n?0:n.length,r=Array(o);++e<o;)r[e]=t(n[e],e,n);return r}(n,x)+"";if(O(n))return M?M.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}var E=/\s/,z=/^\s+/;function N(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}var k=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,A=/^0o[0-7]+$/i,C=parseInt;function R(n){return n?1/0===(n=function(n){if("number"==typeof n)return n;if(O(n))return NaN;if(N(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=N(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;var e;n=(e=n)?e.slice(0,function(n){for(var t=n.length;t--&&E.test(n.charAt(t)););return t}(e)+1).replace(z,""):e;var o=$.test(n);return o||A.test(n)?C(n.slice(2),o?2:8):k.test(n)?NaN:+n}(n))||-1/0===n?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}function D(n){var t=R(n),e=t%1;return t==t?e?t-e:t:0}function P(n){return null==n?"":x(n)}function T(n,t,e){var o,r;return n=P(n),e=null==e?0:(o=D(e),0,r=n.length,o==o&&(void 0!==r&&(o=o<=r?o:r),o=o>=0?o:0),o),t=x(t),n.slice(e,e+t.length)==t}const G=n=>!("isConnected"in n)||n.isConnected,L=(()=>{let n;return(...t)=>{n&&clearTimeout(n),n=setTimeout((()=>{n=0,(n=>{for(let t of n.keys())n.set(t,n.get(t).filter(G))})(...t)}),2e3)}})(),F=(e,o)=>{const r=((n,t=((n,t)=>n!==t))=>{let e=new Map(Object.entries(null!=n?n:{}));const o={dispose:[],get:[],set:[],reset:[]},r=()=>{e=new Map(Object.entries(null!=n?n:{})),o.reset.forEach((n=>n()))},i=n=>(o.get.forEach((t=>t(n))),e.get(n)),u=(n,r)=>{const i=e.get(n);t(r,i,n)&&(e.set(n,r),o.set.forEach((t=>t(n,r,i))))},c="undefined"==typeof Proxy?{}:new Proxy(n,{get:(n,t)=>i(t),ownKeys:()=>Array.from(e.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(n,t)=>e.has(t),set:(n,t,e)=>(u(t,e),!0)}),s=(n,t)=>(o[n].push(t),()=>{((n,t)=>{const e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.length--)})(o[n],t)});return{state:c,get:i,set:u,on:s,onChange:(t,e)=>{const o=s("set",((n,o)=>{n===t&&e(o)})),r=s("reset",(()=>e(n[t])));return()=>{o(),r()}},use:(...n)=>n.forEach((n=>{n.set&&s("set",n.set),n.get&&s("get",n.get),n.reset&&s("reset",n.reset)})),dispose:()=>{o.dispose.forEach((n=>n())),r()},reset:r,forceUpdate:n=>{const t=e.get(n);o.set.forEach((e=>e(n,t,t)))}}})(e,o);return(({on:e})=>{const o=new Map;"function"==typeof n&&(e("dispose",(()=>{o.clear()})),e("get",(t=>{const e=n();e&&((n,t,e)=>{const o=n.get(t);o?o.includes(e)||o.push(e):n.set(t,[e])})(o,t,e)})),e("set",(n=>{const e=o.get(n);e&&o.set(n,e.filter(t)),L(o)})),e("reset",(()=>{o.forEach((n=>n.forEach(t))),L(o)})))})(r),r},{state:S,onChange:U}=F({base:16,bp:[],minWidthPx:640,maxWidthPx:1536});let V=null;function q(n){const t={};for(let e,o=0,r=n.el.attributes,i=r.length;o<i;o++)if(e=r[o],T(e.nodeName,"bp-")){const o=JSON.parse(n.el.getAttribute(e.nodeName)),r={};Object.keys(o).forEach((t=>{r[t]=n.el.getAttribute(t)})),t[e.nodeName.replace("bp-","")]=[o,r]}const e=new Map;e.set(n.el,t),Object.values(t).length>=1&&(S.bp=[...S.bp,...e]),n.cb&&i(n.el,Object.assign({childList:!0},n.mutations),(t=>{n.cb(t)})),n.props&&n.props.forEach((t=>{f(n.el,n.tag,t,n.el.getAttribute(s(t)))})),c({el:n.el,condition:n.lazy})}U("bp",(()=>{null!==V&&V.disconnect(),S.bp.length>=1&&(V=new ResizeObserver((n=>{n.forEach((n=>{S.bp.forEach((function(t){const e=Object.keys(t[1]);e.forEach(((o,r)=>{const i=e.indexOf(o)+1,u=e[i],c=n.contentRect.width;Object.entries(t[1][o][0]).forEach((([n,s])=>{const f=t[1][o][1][n];c>=Number(o)&&i&&c<Number(u)||r+1===e.length&&c>=Number(o)?"string"==typeof s&&t[0].getAttribute(n)!==s&&t[0].setAttribute(n,s):c<Number(e[0])&&t[0].getAttribute(n)!==f&&t[0].setAttribute(n,f)}))}))}))}))})),V.observe(document.body))}));export{b as S,e as a,w as b,r as c,_ as d,j as e,a as f,O as g,D as h,N as i,o as j,q as k,F as l,T as m,i as n,u as o,c as p,S as q,d as r,f as s,P as t}