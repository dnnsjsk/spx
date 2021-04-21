import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8fe71198.js';
import { w as wrap } from './wrap-369eca7a.js';
import { g as getGallery } from './getGallery-720e844a.js';

var macy = createCommonjsModule(function (module, exports) {
!function(t,n){"object"=='object'&&"undefined"!='object'?module.exports=n():"function"==typeof undefined&&undefined.amd?undefined(n):t.Macy=n();}(commonjsGlobal,function(){"use strict";function t(t,n){var e=void 0;return function(){e&&clearTimeout(e),e=setTimeout(t,n);}}function n(t,n){for(var e=t.length,r=e,o=[];e--;)o.push(n(t[r-e-1]));return o}function e(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(window.Promise)return A(t,n,e);t.recalculate(!0,!0);}function r(t){for(var n=t.options,e=t.responsiveOptions,r=t.keys,o=t.docWidth,i=void 0,s=0;s<r.length;s++){var a=parseInt(r[s],10);o>=a&&(i=n.breakAt[a],O(i,e));}return e}function o(t){for(var n=t.options,e=t.responsiveOptions,r=t.keys,o=t.docWidth,i=void 0,s=r.length-1;s>=0;s--){var a=parseInt(r[s],10);o<=a&&(i=n.breakAt[a],O(i,e));}return e}function i(t){var n=t.useContainerForBreakpoints?t.container.clientWidth:window.innerWidth,e={columns:t.columns};b(t.margin)?e.margin={x:t.margin.x,y:t.margin.y}:e.margin={x:t.margin,y:t.margin};var i=Object.keys(t.breakAt);return t.mobileFirst?r({options:t,responsiveOptions:e,keys:i,docWidth:n}):o({options:t,responsiveOptions:e,keys:i,docWidth:n})}function s(t){return i(t).columns}function a(t){return i(t).margin}function c(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=s(t),r=a(t).x,o=100/e;if(!n)return o;if(1===e)return "100%";var i="px";if("string"==typeof r){var c=parseFloat(r);i=r.replace(c,""),r=c;}return r=(e-1)*r/e,"%"===i?o-r+"%":"calc("+o+"% - "+r+i+")"}function u(t,n){var e=s(t.options),r=0,o=void 0,i=void 0;if(1===++n)return 0;i=a(t.options).x;var u="px";if("string"==typeof i){var l=parseFloat(i,10);u=i.replace(l,""),i=l;}return o=(i-(e-1)*i/e)*(n-1),r+=c(t.options,!1)*(n-1),"%"===u?r+o+"%":"calc("+r+"% + "+o+u+")"}function l(t){var n=0,e=t.container,r=t.rows;v(r,function(t){n=t>n?t:n;}),e.style.height=n+"px";}function p(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=s(t.options),i=a(t.options).y;M(t,o,e),v(n,function(n){var e=0,o=parseInt(n.offsetHeight,10);isNaN(o)||(t.rows.forEach(function(n,r){n<t.rows[e]&&(e=r);}),n.style.position="absolute",n.style.top=t.rows[e]+"px",n.style.left=""+t.cols[e],t.rows[e]+=isNaN(o)?0:o+i,r&&(n.dataset.macyComplete=1));}),r&&(t.tmpRows=null),l(t);}function f(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=s(t.options),i=a(t.options).y;M(t,o,e),v(n,function(n){t.lastcol===o&&(t.lastcol=0);var e=C(n,"height");e=parseInt(n.offsetHeight,10),isNaN(e)||(n.style.position="absolute",n.style.top=t.rows[t.lastcol]+"px",n.style.left=""+t.cols[t.lastcol],t.rows[t.lastcol]+=isNaN(e)?0:e+i,t.lastcol+=1,r&&(n.dataset.macyComplete=1));}),r&&(t.tmpRows=null),l(t);}var h=function t(n,e){if(!(this instanceof t))return new t(n,e);if(n&&n.nodeName)return n;if(n=n.replace(/^\s*/,"").replace(/\s*$/,""),e)return this.byCss(n,e);for(var r in this.selectors)if(e=r.split("/"),new RegExp(e[1],e[2]).test(n))return this.selectors[r](n);return this.byCss(n)};h.prototype.byCss=function(t,n){return (n||document).querySelectorAll(t)},h.prototype.selectors={},h.prototype.selectors[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},h.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},h.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var v=function(t,n){for(var e=t.length,r=e;e--;)n(t[r-e-1]);},m=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.events=[],this.add(t);};m.prototype.run=function(){if(!this.running&&this.events.length>0){var t=this.events.shift();this.running=!0,t(),this.running=!1,this.run();}},m.prototype.add=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return !!n&&(Array.isArray(n)?v(n,function(n){return t.add(n)}):(this.events.push(n),void this.run()))},m.prototype.clear=function(){this.events=[];};var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.instance=t,this.data=n,this},y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.events={},this.instance=t;};y.prototype.on=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return !(!t||!n)&&(Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(n))},y.prototype.emit=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!Array.isArray(this.events[t]))return !1;var e=new d(this.instance,n);v(this.events[t],function(t){return t(e)});};var g=function(t){return !("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0},E=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(t,e){if(n.complete)return g(n)?t(n):e(n);n.addEventListener("load",function(){return g(n)?t(n):e(n)}),n.addEventListener("error",function(){return e(n)});}).then(function(n){e&&t.emit(t.constants.EVENT_IMAGE_LOAD,{img:n});}).catch(function(n){return t.emit(t.constants.EVENT_IMAGE_ERROR,{img:n})})},w=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(e,function(n){return E(t,n,r)})},A=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Promise.all(w(t,n,e)).then(function(){t.emit(t.constants.EVENT_IMAGE_COMPLETE);})},I=function(n){return t(function(){n.emit(n.constants.EVENT_RESIZE),n.queue.add(function(){return n.recalculate(!0,!0)});},100)},N=function(t){if(t.container=h(t.options.container),t.container instanceof h||!t.container)return !!t.options.debug&&console.error("Error: Container not found");t.container.length&&(t.container=t.container[0]),t.options.container=t.container,t.container.style.position="relative";},T=function(t){t.queue=new m,t.events=new y(t),t.rows=[],t.resizer=I(t);},L=function(t){var n=h("img",t.container);window.addEventListener("resize",t.resizer),t.on(t.constants.EVENT_IMAGE_LOAD,function(){return t.recalculate(!1,!1)}),t.on(t.constants.EVENT_IMAGE_COMPLETE,function(){return t.recalculate(!0,!0)}),t.options.useOwnImageLoader||e(t,n,!t.options.waitForImages),t.emit(t.constants.EVENT_INITIALIZED);},_=function(t){N(t),T(t),L(t);},b=function(t){return t===Object(t)&&"[object Array]"!==Object.prototype.toString.call(t)},O=function(t,n){b(t)||(n.columns=t),b(t)&&t.columns&&(n.columns=t.columns),b(t)&&t.margin&&!b(t.margin)&&(n.margin={x:t.margin,y:t.margin}),b(t)&&t.margin&&b(t.margin)&&t.margin.x&&(n.margin.x=t.margin.x),b(t)&&t.margin&&b(t.margin)&&t.margin.y&&(n.margin.y=t.margin.y);},C=function(t,n){return window.getComputedStyle(t,null).getPropertyValue(n)},M=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),t.rows.length<1&&(e=!0),e){t.rows=[],t.cols=[],t.lastcol=0;for(var r=n-1;r>=0;r--)t.rows[r]=0,t.cols[r]=u(t,r);}else if(t.tmpRows){t.rows=[];for(var r=n-1;r>=0;r--)t.rows[r]=t.tmpRows[r];}else {t.tmpRows=[];for(var r=n-1;r>=0;r--)t.tmpRows[r]=t.rows[r];}},V=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=n?t.container.children:h(':scope > *:not([data-macy-complete="1"])',t.container);r=Array.from(r).filter(function(t){return null!==t.offsetParent});var o=c(t.options);return v(r,function(t){n&&(t.dataset.macyComplete=0),t.style.width=o;}),t.options.trueOrder?(f(t,r,n,e),t.emit(t.constants.EVENT_RECALCULATED)):(p(t,r,n,e),t.emit(t.constants.EVENT_RECALCULATED))},R=function(){return !!window.Promise},x=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);}return t};Array.from||(Array.from=function(t){for(var n=0,e=[];n<t.length;)e.push(t[n++]);return e});var k={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1,cancelLegacy:!1,useContainerForBreakpoints:!1};!function(){try{document.createElement("a").querySelector(":scope *");}catch(t){!function(){function t(t){return function(e){if(e&&n.test(e)){var r=this.getAttribute("id");r||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=e.replace(n,"#"+this.id);var o=t.apply(this,arguments);return null===r?this.removeAttribute("id"):r||(this.id=r),o}return t.apply(this,arguments)}}var n=/:scope\b/gi,e=t(Element.prototype.querySelector);Element.prototype.querySelector=function(t){return e.apply(this,arguments)};var r=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(t){return r.apply(this,arguments)};}();}}();var q=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;if(!(this instanceof t))return new t(n);this.options={},x(this.options,k,n),this.options.cancelLegacy&&!R()||_(this);};return q.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new q(t)},q.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,h("img",this.container),!t)},q.prototype.runOnImageLoad=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=h("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,t),n&&this.on(this.constants.EVENT_IMAGE_LOAD,t),e(this,r,n)},q.prototype.recalculate=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e&&this.queue.clear(),this.queue.add(function(){return V(t,n,e)})},q.prototype.remove=function(){window.removeEventListener("resize",this.resizer),v(this.container.children,function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style");}),this.container.removeAttribute("style");},q.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative";},q.prototype.on=function(t,n){this.events.on(t,n);},q.prototype.emit=function(t,n){this.events.emit(t,n);},q.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},q.prototype.constants=q.constants,q});
});

const SpxMasonry = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxMasonryDidLoad = createEvent(this, "spxMasonryDidLoad", 7);
    /** Number of columns. */
    this.columns = 4;
    /**
     * Gap between images.
     * @CSS
     */
    this.gap = '10px';
  }
  /** Watch images prop and parse to iteratable array. */
  imagesChanged(newValue) {
    if (newValue)
      this.imagesArray = JSON.parse(newValue);
  }
  /** Watch columns and restart Macy. */
  columnsChanged() {
    this.macyState.remove();
    this.initMacy();
  }
  componentWillLoad() {
    /** If image prop is set. */
    if (this.images) {
      this.imagesChanged(this.images);
    }
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    /** Create object for breakpoint attribute. */
    if (this.bpColumns) {
      this.bpColumnsObject = JSON.parse('{' + this.bpColumns.replace(/([0-9]+)/g, '"$1"') + '}');
    }
    /** Init Macy. */
    this.initMacy();
    /** Wrap all children in div. */
    Array.from(this.container.children).forEach((item) => {
      wrap(item, document.createElement('div'));
    });
    /** Emit event to document when Masonry finished loading. */
    this.spxMasonryDidLoad.emit({ target: 'document' });
  }
  /** After update lifecycle. */
  componentDidUpdate() {
    this.reload();
    this.recalc();
  }
  /** Remove Macy on disconnect. */
  disconnectedCallback() {
    this.macyState.remove();
  }
  /** Init Macy. */
  initMacy() {
    this.macyState = macy({
      container: this.container,
      margin: 0,
      mobileFirst: true,
      runOnImageLoad: true,
      columns: this.columns,
      breakAt: this.bpColumns
        ? this.bpColumnsObject
        : {
          9999: this.columns ? this.columns : 4,
        },
    });
  }
  /** Recalculates grid. */
  async recalc() {
    this.macyState.recalculate();
  }
  async reload() {
    this.macyState.reInit();
  }
  render() {
    /** Host styles. */
    const styleHost = css({
      display: 'block',
      /** Convert gap to correct padding for elements. */
      'div > div': {
        padding: 'var(--spx-masonry-gap, ' +
          this.gap +
          ') calc(var(--spx-masonry-gap, ' +
          this.gap +
          ') / 2) 0 calc(var(--spx-masonry-gap, ' +
          this.gap +
          ') / 2)',
        boxSizing: 'border-box',
        '*': {
          width: '100%',
          maxWidth: '100%',
        },
        img: {
          verticalAlign: 'top',
        },
      },
    });
    /** Container styles. */
    const styleContainer = css({
      /** Adjust container margin to make up for element paddings. */
      margin: 'calc(var(--spx-masonry-gap, ' +
        this.gap +
        ') * -1) calc(var(--spx-masonry-gap, ' +
        this.gap +
        ') / 2 * -1) 0 calc(var(--spx-masonry-gap, ' +
        this.gap +
        ') / 2 * -1)',
    });
    return (h(Host, { class: styleHost }, h("div", { ref: (el) => (this.container = el), class: styleContainer }, getGallery(this.images, this.imagesSrc, this.imagesArray, this.imageSize))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "images": ["imagesChanged"],
    "columns": ["columnsChanged"]
  }; }
};

export { SpxMasonry as spx_masonry };
