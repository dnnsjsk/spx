import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import './setVarOrClamp-21aa6296.js';
import { c as borderRadius } from './style-54a0be1c.js';
import { g as globalComponentDidLoad, m as mutationObserver } from './globalComponentDidLoad-19b7147f.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8fe71198.js';

var lazyload_min = createCommonjsModule(function (module, exports) {
!function(t,n){"object"=='object'&&"undefined"!='object'?module.exports=n():"function"==typeof undefined&&undefined.amd?undefined(n):(t=t||self).LazyLoad=n();}(commonjsGlobal,(function(){"use strict";function t(){return (t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}});}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o});}window.dispatchEvent(e);},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",p=function(t,n){return t.getAttribute(g+n)},b=function(t){return p(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i);}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===b(t)},y=function(t){return b(t)===_},A=[l,u,d,f],I=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i));},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n;},w=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"");},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t);}},x=function(t,n){t&&(t.loadingCount+=n);},z=function(t,n){t&&(t.toLoadCount=n);},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e);},M=function(t,n){t.removeAttribute(n);},R=function(t){return !!t.llOriginalAttrs},G=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n;}},T=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes);}},j=function(t,n){N(t,"sizes",p(t,n.data_sizes)),N(t,"srcset",p(t,n.data_srcset)),N(t,"src",p(t,n.data_src));},D=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes");},F=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n);},P={IMG:function(t,n){F(t,(function(t){G(t),j(t,n);})),G(t),j(t,n);},IFRAME:function(t,n){N(t,"src",p(t,n.data_src));},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",p(t,n.data_src));}));}(t),N(t,"poster",p(t,n.data_poster)),N(t,"src",p(t,n.data_src)),t.load();}},S=function(t,n){var e=P[t.tagName];e&&e(t,n);},V=function(t,n,e){x(e,1),L(t,n.class_loading),h(t,l),I(n.callback_loading,t,e);},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||I(t.callback_finish,n);},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e;},H=function(t,n,e){t.removeEventListener(n,e);},B=function(t){return !!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i);}delete t.llEvLisnrs;}},K=function(t,n,e){!function(t){delete t.llTempImage;}(t),x(e,-1),function(t){t&&(t.toLoadCount-=1);}(e),w(t,n.class_loading),n.unobserve_completed&&O(t,e);},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e);}(i,(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_loaded),h(n,u),I(e.callback_loaded,n,i),o||$(e,i);}(0,t,n,e),J(i);}),(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_error),h(n,f),I(e.callback_error,n,i),o||$(e,i);}(0,t,n,e),J(i);}));},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG");}(t),Q(t,n,e),function(t,n,e){var i=p(t,n.data_bg),o=p(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),V(t,n,e));}(t,n,e),function(t,n,e){var i=p(t,n.data_bg_multi),o=p(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,n,e){L(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),I(n.callback_applied,t,e);}(t,n,e));}(t,n,e);},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),S(t,n),V(t,n,e);}(t,n,e);},Y=["IMG","IFRAME"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){h(t,"entered"),L(t,e.class_entered),w(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e);}(t,e,i),I(e.callback_enter,t,n,i),function(t){return A.indexOf(b(t))>=0}(t)||X(t,e,i);}(t.target,t,n,e):function(t,n,e,i){E(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return b(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){F(t,(function(t){D(t);})),D(t);}(t),function(t){F(t,(function(t){T(t);})),T(t);}(t),w(t,e.class_loading),x(i,-1),m(t),I(e.callback_cancel,t,n,i));}(t,n,e,i),I(e.callback_exit,t,n,i));}(t.target,t,n,e)}));},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return b(t)===f}(t)},ot=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},rt=function(t,e){var o=c(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n);}),function(t){return {root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)));}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){w(n,t.class_error),m(n);})),n.update();}(t,e);}));}(o,this),this.update(e);};return rt.prototype={update:function(t){var n,o,r=this._settings,a=ot(t,r);z(this,a.length),!e&&i?Z(r)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){Q(t,n,e),S(t,n),h(t,_);}(t,n,e));})),z(e,0);}(a,r,this):(o=a,function(t){t.disconnect();}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n);}));}(n,o)):this.loadAll(a);},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs;})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount;},loadAll:function(t){var n=this,e=this._settings;ot(t,e).forEach((function(t){O(t,n),X(t,e,n);}));}},rt.load=function(t,n){var e=c(n);X(t,e);},rt.resetStatus=function(t){m(t);},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n);}(rt,window.lazyLoadOptions),rt}));
});

const tag = 'spx-iframe';
const SpxIframe = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxIframeDidLoad = createEvent(this, "spxIframeDidLoad", 7);
    this.display = 'block';
    this.documentBorder = 'none';
    this.documentBorderRadius = 'none';
    this.documentHeight = 'auto';
    this.documentWidth = '100%';
    /** Screen size of the site shown inside the iframe. */
    this.size = '1440px';
    /** Source for the iframe. */
    this.src = 'https://spx.dev';
    /**
     * Screen size of the site shown inside the iframe.
     * @choice 'resize', 'document', 'default'
     */
    this.type = 'resize';
  }
  onResize() {
    if (this.type === 'resize') {
      this.handleResize();
    }
    if (this.fit) {
      this.setHeight();
    }
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    /** Setup lazy loading. */
    if (this.lazy) {
      // @ts-ignore
      // eslint-disable-next-line no-unused-vars
      const lazyLoadInstance = new lazyload_min({
        unobserve_entered: true,
        unobserve_completed: true,
        callback_loaded: () => {
          setTimeout(() => {
            if (this.fit) {
              this.setHeight();
              this.setUpMutationObserver();
            }
            if (this.type === 'resize') {
              this.handleResize();
            }
          }, 10);
        },
      }, this.el.querySelectorAll('[data-src]'));
    }
    if (this.type === 'resize') {
      /** Assign states. */
      this.iframe = this.el.querySelector('iframe');
      this.parent = this.el;
      /** Wait for Iframe to load before showing content. */
      this.el.querySelector('iframe').onload = () => {
        this.loaded = true;
        if (!this.lazy) {
          this.handleResize();
        }
      };
    }
    if (this.type === 'document') {
      this.createIframeContent();
    }
    if (this.fit && !this.lazy) {
      this.setHeight();
      this.setUpMutationObserver();
    }
    this.spxIframeDidLoad.emit({ target: 'document' });
  }
  componentDidUpdate() {
    if (this.type === 'resize') {
      this.handleResize();
    }
    if (this.type === 'document') {
      this.createIframeContent();
    }
  }
  /** Fit function. */
  setHeight() {
    const set = () => {
      if (this.el.querySelector('iframe').contentWindow.document.body ===
        undefined ||
        this.el.querySelector('iframe').contentWindow.document.body === null) {
        setTimeout(set, 100);
      }
      else {
        this.iframe.style.height =
          this.el.querySelector('iframe').contentWindow.document.body
            .scrollHeight + 'px';
      }
    };
    set();
  }
  /** Set up mutation observer. */
  setUpMutationObserver() {
    mutationObserver(this.el.querySelector('iframe').contentWindow.document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    }, () => {
      this.setHeight();
      setTimeout(() => this.setHeight(), 500);
    });
  }
  /** Type: resize - function to keep src element in proportion. */
  handleResize() {
    if (this.parent && this.iframe) {
      const ratio = this.parent.offsetWidth / this.iframe.offsetWidth;
      this.iframe.style.transform = 'scale(calc((' + ratio + '))';
      this.parentHeight = this.parent.offsetHeight;
      this.iframe.style.height = this.parentHeight / ratio + 'px';
    }
  }
  /** Type: document - add all slot elements to iframe. */
  createIframeContent() {
    const doc = this.iframe.contentDocument;
    this.content.querySelectorAll('*').forEach((item) => {
      doc.body.appendChild(item);
    });
    this.content.remove();
  }
  async reload() {
    this.componentDidLoad();
  }
  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
      height: this.type === 'resize' ? '100%' : 'auto',
      width: '100%',
      position: 'relative',
      iframe: {
        width: this.type === 'default' && '100%',
      },
    });
    /** Iframe resize styles. */
    const styleIframeResize = css({
      border: 'none',
      width: this.size,
      height: '100vh',
      transformOrigin: 'left top',
      position: 'absolute',
    });
    /** Iframe document styles. */
    const styleIframeDocument = css({
      border: setVar(tag, 'document-border', this.documentBorder),
      borderRadius: setVar(tag, 'document-border-radius', this.documentBorderRadius),
      width: setVar(tag, 'document-width', this.documentWidth),
      height: setVar(tag, 'document-height', this.documentHeight),
    });
    /** Iframe styles. */
    const styleIframe = this.type === 'resize'
      ? styleIframeResize
      : this.type === 'document' && styleIframeDocument;
    /** Loader styles. */
    const styleLoader = css({
      padding: '0.8em',
      borderRadius: borderRadius,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(2)',
    });
    return (h(Host, { class: styleHost }, this.type === 'document' && (h("div", { ref: (el) => (this.content = el) }, h("slot", null))), this.type === 'resize' || this.type === 'default' ? (h("iframe", { class: styleIframe, ref: (el) => (this.iframe = el), tabindex: "-1", src: !this.lazy ? this.src : '', "data-src": this.lazy && this.src })) : (h("iframe", { class: styleIframe, ref: (el) => (this.iframe = el), tabindex: "-1" })), this.type === 'resize' && !this.loaded && (h("div", { class: styleLoader }, h("spx-loader", null)))));
  }
  get el() { return getElement(this); }
};

export { SpxIframe as spx_iframe };
