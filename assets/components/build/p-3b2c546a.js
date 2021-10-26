import{d as n,f as t}from"./p-509d707c.js";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function i(n,t,e){return n(e={path:t,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}function r(n,t,e,o=!1){const i=new MutationObserver((n=>{n.forEach((n=>{e(n),o&&i.disconnect()}))}));i.observe(n,t)}var u=i((function(n){n.exports=function(){function n(){return(n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=t&&"IntersectionObserver"in window,i=t&&"classList"in document.createElement("p"),r=t&&window.devicePixelRatio>1,u={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(t){return n({},u,t)},f=function(n,t){var e,o="LazyLoad::Initialized",i=new n(t);try{e=new CustomEvent(o,{detail:{instance:i}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:i})}window.dispatchEvent(e)},a="src",s="srcset",l="sizes",d="poster",b="llOriginalAttrs",v="loading",p="loaded",g="applied",h="error",y="native",m=function(n,t){return n.getAttribute("data-"+t)},w=function(n){return m(n,"ll-status")},_=function(n,t){return function(n,t,e){var o="data-ll-status";null!==e?n.setAttribute(o,e):n.removeAttribute(o)}(n,0,t)},O=function(n){return _(n,null)},j=function(n){return null===w(n)},I=function(n){return w(n)===y},M=[v,p,g,h],E=function(n,t,e,o){n&&(void 0===o?void 0===e?n(t):n(t,e):n(t,e,o))},x=function(n,t){i?n.classList.add(t):n.className+=(n.className?" ":"")+t},A=function(n,t){i?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(n){return n.llTempImage},N=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},$=function(n,t){n&&(n.loadingCount+=t)},z=function(n,t){n&&(n.toLoadCount=t)},R=function(n){for(var t,e=[],o=0;t=n.children[o];o+=1)"SOURCE"===t.tagName&&e.push(t);return e},C=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&R(e).forEach(t)},D=function(n,t){R(n).forEach(t)},G=[a],P=[a,d],T=[a,s,l],F=function(n){return!!n[b]},L=function(n){return n[b]},V=function(n){return delete n[b]},S=function(n,t){if(!F(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[b]=e}},U=function(n,t){if(F(n)){var e=L(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},q=function(n,t,e){x(n,t.class_loading),_(n,v),e&&($(e,1),E(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},H=function(n,t){W(n,l,m(n,t.data_sizes)),W(n,s,m(n,t.data_srcset)),W(n,a,m(n,t.data_src))},J={IMG:function(n,t){C(n,(function(n){S(n,T),H(n,t)})),S(n,T),H(n,t)},IFRAME:function(n,t){S(n,G),W(n,a,m(n,t.data_src))},VIDEO:function(n,t){D(n,(function(n){S(n,G),W(n,a,m(n,t.data_src))})),S(n,P),W(n,d,m(n,t.data_poster)),W(n,a,m(n,t.data_src)),n.load()}},K=["IMG","IFRAME","VIDEO"],B=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||E(n.callback_finish,t)},Q=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},X=function(n,t,e){n.removeEventListener(t,e)},Y=function(n){return!!n.llEvLisnrs},Z=function(n){if(Y(n)){var t=n.llEvLisnrs;for(var e in t)X(n,e,t[e]);delete n.llEvLisnrs}},nn=function(n,t,e){!function(n){delete n.llTempImage}(n),$(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),A(n,t.class_loading),t.unobserve_completed&&N(n,e)},tn=function(n,t,e){var o=k(n)||n;Y(o)||function(n,t,e){Y(n)||(n.llEvLisnrs={}),Q(n,"VIDEO"===n.tagName?"loadeddata":"load",t),Q(n,"error",e)}(o,(function(){!function(n,t,e,o){var i=I(t);nn(t,e,o),x(t,e.class_loaded),_(t,p),E(e.callback_loaded,t,o),i||B(e,o)}(0,n,t,e),Z(o)}),(function(){!function(n,t,e,o){var i=I(t);nn(t,e,o),x(t,e.class_error),_(t,h),E(e.callback_error,t,o),i||B(e,o)}(0,n,t,e),Z(o)}))},en=function(n,t,e){!function(n){return K.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),tn(n,t,e),function(n){F(n)||(n[b]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var o=m(n,t.data_bg),i=m(n,t.data_bg_hidpi),u=r&&i?i:o;u&&(n.style.backgroundImage='url("'.concat(u,'")'),k(n).setAttribute(a,u),q(n,t,e))}(n,t,e),function(n,t,e){var o=m(n,t.data_bg_multi),i=m(n,t.data_bg_multi_hidpi),u=r&&i?i:o;u&&(n.style.backgroundImage=u,function(n,t,e){x(n,t.class_applied),_(n,g),e&&(t.unobserve_completed&&N(n,t),E(t.callback_applied,n,e))}(n,t,e))}(n,t,e)}(n,t,e):function(n,t,e){tn(n,t,e),function(n,t,e){var o=J[n.tagName];o&&(o(n,t),q(n,t,e))}(n,t,e)}(n,t,e)},on=function(n){n.removeAttribute(a),n.removeAttribute(s),n.removeAttribute(l)},rn=function(n){C(n,(function(n){U(n,T)})),U(n,T)},un={IMG:rn,IFRAME:function(n){U(n,G)},VIDEO:function(n){D(n,(function(n){U(n,G)})),U(n,P),n.load()}},cn=["IMG","IFRAME","VIDEO"],fn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},an=function(n){return Array.prototype.slice.call(n)},sn=function(n){return n.container.querySelectorAll(n.elements_selector)},ln=function(n){return function(n){return w(n)===h}(n)},dn=function(n,t){return function(n){return an(n).filter(j)}(n||sn(t))},bn=function(n,e){var i=c(n);this._settings=i,this.loadingCount=0,function(n,t){o&&!fn(n)&&(t._observer=new IntersectionObserver((function(e){!function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,o){var i=function(n){return M.indexOf(w(n))>=0}(n);_(n,"entered"),x(n,e.class_entered),A(n,e.class_exited),function(n,t,e){t.unobserve_entered&&N(n,e)}(n,e,o),E(e.callback_enter,n,t,o),i||en(n,e,o)}(n.target,n,t,e):function(n,t,e,o){j(n)||(x(n,e.class_exited),function(n,t,e,o){e.cancel_on_exit&&function(n){return w(n)===v}(n)&&"IMG"===n.tagName&&(Z(n),function(n){C(n,(function(n){on(n)})),on(n)}(n),rn(n),A(n,e.class_loading),$(o,-1),O(n),E(e.callback_cancel,n,t,o))}(n,t,e,o),E(e.callback_exit,n,t,o))}(n.target,n,t,e)}))}(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(i,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=sn(n),an(e).filter(ln)).forEach((function(t){A(t,n.class_error),O(t)})),t.update()}(n,e)}))}(i,this),this.update(e)};return bn.prototype={update:function(n){var t,i,r=this._settings,u=dn(n,r);z(this,u.length),!e&&o?fn(r)?function(n,t,e){n.forEach((function(n){-1!==cn.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),tn(n,t,e),function(n,t){var e=J[n.tagName];e&&e(n,t)}(n,t),_(n,y)}(n,t,e)})),z(e,0)}(u,r,this):(i=u,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,i)):this.loadAll(u)},destroy:function(){this._observer&&this._observer.disconnect(),sn(this._settings).forEach((function(n){V(n)})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;dn(n,e).forEach((function(n){N(n,t),en(n,e,t)}))},restoreAll:function(){var n=this._settings;sn(n).forEach((function(t){!function(n,t){(function(n){var t=un[n.tagName];t?t(n):function(n){if(F(n)){var t=L(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){j(n)||I(n)||(A(n,t.class_entered),A(n,t.class_exited),A(n,t.class_applied),A(n,t.class_loading),A(n,t.class_loaded),A(n,t.class_error))}(n,t),O(n),V(n)}(t,n)}))}},bn.load=function(n,t){var e=c(t);en(n,e)},bn.resetStatus=function(n){O(n)},t&&function(n,t){if(t)if(t.length)for(var e,o=0;e=t[o];o+=1)f(n,e);else f(n,t)}(bn,window.lazyLoadOptions),bn}()}));function c(n){n.condition&&new u({unobserve_entered:!0,unobserve_completed:!0},n.el.shadowRoot.querySelectorAll("[data-src]"))}function f(n){return n.split("").map(((n,t)=>n.toUpperCase()===n?`${0!==t?"-":""}${n.toLowerCase()}`:n)).join("")}function a(n,t,e,o){n.style.setProperty(`--${t}-${f(e)}`,o)}var s="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),b=d.Symbol,v=Object.prototype,p=v.hasOwnProperty,g=v.toString,h=b?b.toStringTag:void 0,y=Object.prototype.toString,m=b?b.toStringTag:void 0;function w(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":m&&m in Object(n)?function(n){var t=p.call(n,h),e=n[h];try{n[h]=void 0;var o=!0}catch(n){}var i=g.call(n);return o&&(t?n[h]=e:delete n[h]),i}(n):function(n){return y.call(n)}(n)}function _(n){return null!=n&&"object"==typeof n}function O(n){return"symbol"==typeof n||_(n)&&"[object Symbol]"==w(n)}var j=Array.isArray,I=b?b.prototype:void 0,M=I?I.toString:void 0;function E(n){if("string"==typeof n)return n;if(j(n))return function(n,t){for(var e=-1,o=null==n?0:n.length,i=Array(o);++e<o;)i[e]=t(n[e],e,n);return i}(n,E)+"";if(O(n))return M?M.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}var x=/\s/,A=/^\s+/;function k(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}var N=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,z=/^0o[0-7]+$/i,R=parseInt;function C(n){return n?1/0===(n=function(n){if("number"==typeof n)return n;if(O(n))return NaN;if(k(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=k(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;var e;n=(e=n)?e.slice(0,function(n){for(var t=n.length;t--&&x.test(n.charAt(t)););return t}(e)+1).replace(A,""):e;var o=$.test(n);return o||z.test(n)?R(n.slice(2),o?2:8):N.test(n)?NaN:+n}(n))||-1/0===n?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}function D(n){var t=C(n),e=t%1;return t==t?e?t-e:t:0}function G(n){return null==n?"":E(n)}function P(n,t,e){var o,i;return n=G(n),e=null==e?0:(o=D(e),0,i=n.length,o==o&&(void 0!==i&&(o=o<=i?o:i),o=o>=0?o:0),o),t=E(t),n.slice(e,e+t.length)==t}const T=n=>!("isConnected"in n)||n.isConnected,F=(()=>{let n;return(...t)=>{n&&clearTimeout(n),n=setTimeout((()=>{n=0,(n=>{for(let t of n.keys())n.set(t,n.get(t).filter(T))})(...t)}),2e3)}})(),L=(e,o)=>{const i=((n,t=((n,t)=>n!==t))=>{let e=new Map(Object.entries(null!=n?n:{}));const o={dispose:[],get:[],set:[],reset:[]},i=()=>{e=new Map(Object.entries(null!=n?n:{})),o.reset.forEach((n=>n()))},r=n=>(o.get.forEach((t=>t(n))),e.get(n)),u=(n,i)=>{const r=e.get(n);t(i,r,n)&&(e.set(n,i),o.set.forEach((t=>t(n,i,r))))},c="undefined"==typeof Proxy?{}:new Proxy(n,{get:(n,t)=>r(t),ownKeys:()=>Array.from(e.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(n,t)=>e.has(t),set:(n,t,e)=>(u(t,e),!0)}),f=(n,t)=>(o[n].push(t),()=>{((n,t)=>{const e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.length--)})(o[n],t)});return{state:c,get:r,set:u,on:f,onChange:(t,e)=>{const o=f("set",((n,o)=>{n===t&&e(o)})),i=f("reset",(()=>e(n[t])));return()=>{o(),i()}},use:(...n)=>{const t=n.reduce(((n,t)=>(t.set&&n.push(f("set",t.set)),t.get&&n.push(f("get",t.get)),t.reset&&n.push(f("reset",t.reset)),t.dispose&&n.push(f("dispose",t.dispose)),n)),[]);return()=>t.forEach((n=>n()))},dispose:()=>{o.dispose.forEach((n=>n())),i()},reset:i,forceUpdate:n=>{const t=e.get(n);o.set.forEach((e=>e(n,t,t)))}}})(e,o);return i.use((()=>{if("function"!=typeof n)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const o=n();o&&((n,t,e)=>{const o=n.get(t);o?o.includes(e)||o.push(e):n.set(t,[e])})(e,t,o)},set:n=>{const o=e.get(n);o&&e.set(n,o.filter(t)),F(e)},reset:()=>{e.forEach((n=>n.forEach(t))),F(e)}}})()),i},{state:V,onChange:S}=L({base:16,bp:[],minWidthPx:640,maxWidthPx:1536});let U=null;function q(n){const t={};for(let e,o=0,i=n.el.attributes,r=i.length;o<r;o++)if(e=i[o],P(e.nodeName,"bp-")){const o=JSON.parse(n.el.getAttribute(e.nodeName)),i={};Object.keys(o).forEach((t=>{i[t]=n.el.getAttribute(t)})),t[e.nodeName.replace("bp-","")]=[o,i]}const e=new Map;e.set(n.el,t),Object.values(t).length>=1&&(V.bp=[...V.bp,...e]),n.cb&&r(n.el,Object.assign({childList:!0},n.mutations),(t=>{n.cb(t)})),n.props&&n.props.forEach((t=>{a(n.el,n.tag,t,n.el.getAttribute(f(t)))})),c({el:n.el,condition:n.lazy})}S("bp",(()=>{null!==U&&U.disconnect(),V.bp.length>=1&&(U=new ResizeObserver((n=>{n.forEach((n=>{V.bp.forEach((function(t){const e=Object.keys(t[1]);e.forEach(((o,i)=>{const r=e.indexOf(o)+1,u=e[r],c=n.contentRect.width;Object.entries(t[1][o][0]).forEach((([n,f])=>{const a=t[1][o][1][n];c>=Number(o)&&r&&c<Number(u)||i+1===e.length&&c>=Number(o)?"string"==typeof f&&t[0].getAttribute(n)!==f&&t[0].setAttribute(n,f):c<Number(e[0])&&t[0].getAttribute(n)!==a&&t[0].setAttribute(n,a)}))}))}))}))})),U.observe(document.body))}));export{b as S,e as a,w as b,i as c,_ as d,j as e,s as f,O as g,D as h,k as i,o as j,q as k,L as l,P as m,r as n,u as o,c as p,V as q,d as r,a as s,G as t}