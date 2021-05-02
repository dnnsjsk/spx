import{r as t,c as n,h as i,H as e,g as s}from"./p-dfe31926.js";import{g as o,m as r,c}from"./p-9403a412.js";import{c as u}from"./p-3dc95eea.js";import{s as a}from"./p-37718fa8.js";import{c as f,a as l}from"./p-3e8ff66b.js";import"./p-067534cf.js";var h=f((function(t){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,i=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),e=n&&"IntersectionObserver"in window,s=n&&"classList"in document.createElement("p"),o=n&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:i||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},r,n)},u=function(t,n){var i,e="LazyLoad::Initialized",s=new t(n);try{i=new CustomEvent(e,{detail:{instance:s}})}catch(t){(i=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!1,{instance:s})}window.dispatchEvent(i)},a="loading",f="loaded",l="applied",h="error",d="native",p=function(t,n){return t.getAttribute("data-"+n)},m=function(t){return p(t,"ll-status")},v=function(t,n){return function(t,n,i){var e="data-ll-status";null!==i?t.setAttribute(e,i):t.removeAttribute(e)}(t,0,n)},b=function(t){return v(t,null)},_=function(t){return null===m(t)},g=function(t){return m(t)===d},w=[a,f,l,h],z=function(t,n,i,e){t&&(void 0===e?void 0===i?t(n):t(n,i):t(n,i,e))},I=function(t,n){s?t.classList.add(n):t.className+=(t.className?" ":"")+n},x=function(t,n){s?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},E=function(t){return t.llTempImage},k=function(t,n){if(n){var i=n._observer;i&&i.unobserve(t)}},y=function(t,n){t&&(t.loadingCount+=n)},M=function(t,n){t&&(t.toLoadCount=n)},O=function(t){for(var n,i=[],e=0;n=t.children[e];e+=1)"SOURCE"===n.tagName&&i.push(n);return i},R=function(t,n,i){i&&t.setAttribute(n,i)},j=function(t,n){t.removeAttribute(n)},L=function(t){return!!t.llOriginalAttrs},C=function(t){if(!L(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},D=function(t){if(L(t)){var n=t.llOriginalAttrs;R(t,"src",n.src),R(t,"srcset",n.srcset),R(t,"sizes",n.sizes)}},A=function(t,n){R(t,"sizes",p(t,n.data_sizes)),R(t,"srcset",p(t,n.data_srcset)),R(t,"src",p(t,n.data_src))},G=function(t){j(t,"src"),j(t,"srcset"),j(t,"sizes")},T=function(t,n){var i=t.parentNode;i&&"PICTURE"===i.tagName&&O(i).forEach(n)},U={IMG:function(t,n){T(t,(function(t){C(t),A(t,n)})),C(t),A(t,n)},IFRAME:function(t,n){R(t,"src",p(t,n.data_src))},VIDEO:function(t,n){!function(t){O(t).forEach((function(t){R(t,"src",p(t,n.data_src))}))}(t),R(t,"poster",p(t,n.data_poster)),R(t,"src",p(t,n.data_src)),t.load()}},F=function(t,n){var i=U[t.tagName];i&&i(t,n)},H=function(t,n,i){y(i,1),I(t,n.class_loading),v(t,a),z(n.callback_loading,t,i)},V=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||z(t.callback_finish,n)},P=function(t,n,i){t.addEventListener(n,i),t.llEvLisnrs[n]=i},S=function(t,n,i){t.removeEventListener(n,i)},q=function(t){return!!t.llEvLisnrs},B=function(t){if(q(t)){var n=t.llEvLisnrs;for(var i in n)S(t,i,n[i]);delete t.llEvLisnrs}},J=function(t,n,i){!function(t){delete t.llTempImage}(t),y(i,-1),function(t){t&&(t.toLoadCount-=1)}(i),x(t,n.class_loading),n.unobserve_completed&&k(t,i)},K=function(t,n,i){var e=E(t)||t;q(e)||function(t,n,i){q(t)||(t.llEvLisnrs={}),P(t,"VIDEO"===t.tagName?"loadeddata":"load",n),P(t,"error",i)}(e,(function(){!function(t,n,i,e){var s=g(n);J(n,i,e),I(n,i.class_loaded),v(n,f),z(i.callback_loaded,n,e),s||$(i,e)}(0,t,n,i),B(e)}),(function(){!function(t,n,i,e){var s=g(n);J(n,i,e),I(n,i.class_error),v(n,h),z(i.callback_error,n,e),s||$(i,e)}(0,t,n,i),B(e)}))},N=function(t,n,i){!function(t){return V.indexOf(t.tagName)>-1}(t)?function(t,n,i){!function(t){t.llTempImage=document.createElement("IMG")}(t),K(t,n,i),function(t,n,i){var e=p(t,n.data_bg),s=p(t,n.data_bg_hidpi),r=o&&s?s:e;r&&(t.style.backgroundImage='url("'.concat(r,'")'),E(t).setAttribute("src",r),H(t,n,i))}(t,n,i),function(t,n,i){var e=p(t,n.data_bg_multi),s=p(t,n.data_bg_multi_hidpi),r=o&&s?s:e;r&&(t.style.backgroundImage=r,function(t,n,i){I(t,n.class_applied),v(t,l),n.unobserve_completed&&k(t,n),z(n.callback_applied,t,i)}(t,n,i))}(t,n,i)}(t,n,i):function(t,n,i){K(t,n,i),F(t,n),H(t,n,i)}(t,n,i)},Q=["IMG","IFRAME"],W=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},X=function(t){return Array.prototype.slice.call(t)},Y=function(t){return t.container.querySelectorAll(t.elements_selector)},Z=function(t){return function(t){return m(t)===h}(t)},tt=function(t,n){return function(t){return X(t).filter(_)}(t||Y(n))},nt=function(t,i){var s=c(t);this._settings=s,this.loadingCount=0,function(t,n){e&&!W(t)&&(n._observer=new IntersectionObserver((function(i){!function(t,n,i){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,i,e){v(t,"entered"),I(t,i.class_entered),x(t,i.class_exited),function(t,n,i){n.unobserve_entered&&k(t,i)}(t,i,e),z(i.callback_enter,t,n,e),function(t){return w.indexOf(m(t))>=0}(t)||N(t,i,e)}(t.target,t,n,i):function(t,n,i,e){_(t)||(I(t,i.class_exited),function(t,n,i,e){i.cancel_on_exit&&function(t){return m(t)===a}(t)&&"IMG"===t.tagName&&(B(t),function(t){T(t,(function(t){G(t)})),G(t)}(t),function(t){T(t,(function(t){D(t)})),D(t)}(t),x(t,i.class_loading),y(e,-1),b(t),z(i.callback_cancel,t,n,e))}(t,n,i,e),z(i.callback_exit,t,n,e))}(t.target,t,n,i)}))}(i,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(s,this),function(t,i){n&&window.addEventListener("online",(function(){!function(t,n){var i;(i=Y(t),X(i).filter(Z)).forEach((function(n){x(n,t.class_error),b(n)})),n.update()}(t,i)}))}(s,this),this.update(i)};return nt.prototype={update:function(t){var n,s,o=this._settings,r=tt(t,o);M(this,r.length),!i&&e?W(o)?function(t,n,i){t.forEach((function(t){-1!==Q.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,i){K(t,n,i),F(t,n),v(t,d)}(t,n,i))})),M(i,0)}(r,o,this):(s=r,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,s)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),Y(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,i=this._settings;tt(t,i).forEach((function(t){k(t,n),N(t,i,n)}))}},nt.load=function(t,n){var i=c(n);N(t,i)},nt.resetStatus=function(t){b(t)},n&&function(t,n){if(n)if(n.length)for(var i,e=0;i=n[e];e+=1)u(t,i);else u(t,n)}(nt,window.lazyLoadOptions),nt}()}));const d="spx-iframe",p=class{constructor(i){t(this,i),this.spxIframeDidLoad=n(this,"spxIframeDidLoad",7),this.display="block",this.documentBorder="none",this.documentBorderRadius="none",this.documentHeight="auto",this.documentWidth="100%",this.size="1440px",this.src="https://spx.dev",this.type="resize"}onResize(){"resize"===this.type&&this.handleResize(),this.fit&&this.setHeight()}componentDidLoad(){o(this.el),this.lazy&&new h({unobserve_entered:!0,unobserve_completed:!0,callback_loaded:()=>{setTimeout((()=>{this.fit&&(this.setHeight(),this.setUpMutationObserver()),"resize"===this.type&&this.handleResize()}),10)}},this.el.querySelectorAll("[data-src]")),"resize"===this.type&&(this.iframe=this.el.querySelector("iframe"),this.parent=this.el,this.el.querySelector("iframe").onload=()=>{this.loaded=!0,this.lazy||this.handleResize()}),"document"===this.type&&this.createIframeContent(),this.fit&&!this.lazy&&(this.setHeight(),this.setUpMutationObserver()),this.spxIframeDidLoad.emit({target:"document"})}componentDidUpdate(){"resize"===this.type&&this.handleResize(),"document"===this.type&&this.createIframeContent()}setHeight(){const t=()=>{void 0===this.el.querySelector("iframe").contentWindow.document.body||null===this.el.querySelector("iframe").contentWindow.document.body?setTimeout(t,100):this.iframe.style.height=this.el.querySelector("iframe").contentWindow.document.body.scrollHeight+"px"};t()}setUpMutationObserver(){r(this.el.querySelector("iframe").contentWindow.document.body,{attributes:!0,childList:!0,subtree:!0},(()=>{this.setHeight(),setTimeout((()=>this.setHeight()),500)}))}handleResize(){if(this.parent&&this.iframe){const t=this.parent.offsetWidth/this.iframe.offsetWidth;this.iframe.style.transform="scale(calc(("+t+"))",this.parentHeight=this.parent.offsetHeight,this.iframe.style.height=this.parentHeight/t+"px"}}createIframeContent(){const t=this.iframe.contentDocument;this.content.querySelectorAll("*").forEach((n=>{t.body.appendChild(n)})),this.content.remove()}async reload(){this.componentDidLoad()}render(){const t=c({display:a(d,"display",this.display),height:"resize"===this.type?"100%":"auto",width:"100%",position:"relative",iframe:{width:"default"===this.type&&"100%"}}),n=c({border:"none",width:this.size,height:"100vh",transformOrigin:"left top",position:"absolute"}),s=c({border:a(d,"document-border",this.documentBorder),borderRadius:a(d,"document-border-radius",this.documentBorderRadius),width:a(d,"document-width",this.documentWidth),height:a(d,"document-height",this.documentHeight)}),o="resize"===this.type?n:"document"===this.type&&s,r=c({padding:"0.8em",borderRadius:u,backgroundColor:"rgba(0, 0, 0, 0.7)",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) scale(2)"});return i(e,{class:t},"document"===this.type&&i("div",{ref:t=>this.content=t},i("slot",null)),i("iframe","resize"===this.type||"default"===this.type?{class:o,ref:t=>this.iframe=t,tabindex:"-1",src:this.lazy?"":this.src,"data-src":this.lazy&&this.src}:{class:o,ref:t=>this.iframe=t,tabindex:"-1"}),"resize"===this.type&&!this.loaded&&i("div",{class:r},i("spx-loader",null)))}get el(){return s(this)}};export{p as spx_iframe}