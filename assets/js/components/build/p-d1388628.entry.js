import{r as t,c as n,h as i,H as r,g as o}from"./p-6c77ad03.js";import{c as e}from"./p-4353a1fe.js";import{g as s}from"./p-7f0894df.js";import{c as a,a as u}from"./p-3e8ff66b.js";import{w as c}from"./p-9121636f.js";import{g as f}from"./p-2afd7560.js";var h=a((function(t){t.exports=function(){function t(t,n){for(var i=t.length,r=i,o=[];i--;)o.push(n(t[r-i-1]));return o}function n(t,n){if(window.Promise)return y(t,n,arguments.length>2&&void 0!==arguments[2]&&arguments[2]);t.recalculate(!0,!0)}function i(t){var n=t.useContainerForBreakpoints?t.container.clientWidth:window.innerWidth,i={columns:t.columns};i.margin=x(t.margin)?{x:t.margin.x,y:t.margin.y}:{x:t.margin,y:t.margin};var r=Object.keys(t.breakAt);return t.mobileFirst?function(t){for(var n=t.options,i=t.responsiveOptions,r=t.keys,o=t.docWidth,e=0;e<r.length;e++){var s=parseInt(r[e],10);o>=s&&b(n.breakAt[s],i)}return i}({options:t,responsiveOptions:i,keys:r,docWidth:n}):function(t){for(var n=t.options,i=t.responsiveOptions,r=t.keys,o=t.docWidth,e=r.length-1;e>=0;e--){var s=parseInt(r[e],10);o<=s&&b(n.breakAt[s],i)}return i}({options:t,responsiveOptions:i,keys:r,docWidth:n})}function r(t){return i(t).columns}function o(t){return i(t).margin}function e(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=r(t),e=o(t).x,s=100/i;if(!n)return s;if(1===i)return"100%";var a="px";if("string"==typeof e){var u=parseFloat(e);a=e.replace(u,""),e=u}return e=(i-1)*e/i,"%"===a?s-e+"%":"calc("+s+"% - "+e+a+")"}function s(t,n){var i,s=r(t.options),a=0,u=void 0;if(1==++n)return 0;var c="px";if("string"==typeof(u=o(t.options).x)){var f=parseFloat(u,10);c=u.replace(f,""),u=f}return i=(u-(s-1)*u/s)*(n-1),a+=e(t.options,!1)*(n-1),"%"===c?a+i+"%":"calc("+a+"% + "+i+c+")"}function a(t){var n=0,i=t.container;h(t.rows,(function(t){n=t>n?t:n})),i.style.height=n+"px"}function u(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=r(t.options),u=o(t.options).y;I(t,s,i),h(n,(function(n){var i=0,r=parseInt(n.offsetHeight,10);isNaN(r)||(t.rows.forEach((function(n,r){n<t.rows[i]&&(i=r)})),n.style.position="absolute",n.style.top=t.rows[i]+"px",n.style.left=""+t.cols[i],t.rows[i]+=isNaN(r)?0:r+u,e&&(n.dataset.macyComplete=1))})),e&&(t.tmpRows=null),a(t)}function c(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=r(t.options),u=o(t.options).y;I(t,s,i),h(n,(function(n){t.lastcol===s&&(t.lastcol=0);var i=A(n,"height");i=parseInt(n.offsetHeight,10),isNaN(i)||(n.style.position="absolute",n.style.top=t.rows[t.lastcol]+"px",n.style.left=""+t.cols[t.lastcol],t.rows[t.lastcol]+=isNaN(i)?0:i+u,t.lastcol+=1,e&&(n.dataset.macyComplete=1))})),e&&(t.tmpRows=null),a(t)}var f=function t(n,i){if(!(this instanceof t))return new t(n,i);if(n&&n.nodeName)return n;if(n=n.replace(/^\s*/,"").replace(/\s*$/,""),i)return this.byCss(n,i);for(var r in this.selectors)if(i=r.split("/"),new RegExp(i[1],i[2]).test(n))return this.selectors[r](n);return this.byCss(n)};f.prototype.byCss=function(t,n){return(n||document).querySelectorAll(t)},(f.prototype.selectors={})[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},f.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},f.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var h=function(t,n){for(var i=t.length,r=i;i--;)n(t[r-i-1])},v=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.events=[],this.add(t)};v.prototype.run=function(){if(!this.running&&this.events.length>0){var t=this.events.shift();this.running=!0,t(),this.running=!1,this.run()}},v.prototype.add=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!!n&&(Array.isArray(n)?h(n,(function(n){return t.add(n)})):(this.events.push(n),void this.run()))},v.prototype.clear=function(){this.events=[]};var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.instance=t,this.data=n,this},m=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.events={},this.instance=t};m.prototype.on=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!t||!n)&&(Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(n))},m.prototype.emit=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!Array.isArray(this.events[t]))return!1;var i=new d(this.instance,n);h(this.events[t],(function(t){return t(i)}))};var l=function(t){return!("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0},p=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(t,i){if(n.complete)return l(n)?t(n):i(n);n.addEventListener("load",(function(){return l(n)?t(n):i(n)})),n.addEventListener("error",(function(){return i(n)}))})).then((function(n){i&&t.emit(t.constants.EVENT_IMAGE_LOAD,{img:n})})).catch((function(n){return t.emit(t.constants.EVENT_IMAGE_ERROR,{img:n})}))},g=function(n,i){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(i,(function(t){return p(n,t,r)}))},y=function(t,n){return Promise.all(g(t,n,arguments.length>2&&void 0!==arguments[2]&&arguments[2])).then((function(){t.emit(t.constants.EVENT_IMAGE_COMPLETE)}))},w=function(t){return function(t,n){var i=void 0;return function(){i&&clearTimeout(i),i=setTimeout(t,n)}}((function(){t.emit(t.constants.EVENT_RESIZE),t.queue.add((function(){return t.recalculate(!0,!0)}))}),100)},E=function(t){(function(t){if(t.container=f(t.options.container),t.container instanceof f||!t.container)return!!t.options.debug&&console.error("Error: Container not found");t.container.length&&(t.container=t.container[0]),t.options.container=t.container,t.container.style.position="relative"})(t),function(t){t.queue=new v,t.events=new m(t),t.rows=[],t.resizer=w(t)}(t),function(t){var i=f("img",t.container);window.addEventListener("resize",t.resizer),t.on(t.constants.EVENT_IMAGE_LOAD,(function(){return t.recalculate(!1,!1)})),t.on(t.constants.EVENT_IMAGE_COMPLETE,(function(){return t.recalculate(!0,!0)})),t.options.useOwnImageLoader||n(t,i,!t.options.waitForImages),t.emit(t.constants.EVENT_INITIALIZED)}(t)},x=function(t){return t===Object(t)&&"[object Array]"!==Object.prototype.toString.call(t)},b=function(t,n){x(t)||(n.columns=t),x(t)&&t.columns&&(n.columns=t.columns),x(t)&&t.margin&&!x(t.margin)&&(n.margin={x:t.margin,y:t.margin}),x(t)&&t.margin&&x(t.margin)&&t.margin.x&&(n.margin.x=t.margin.x),x(t)&&t.margin&&x(t.margin)&&t.margin.y&&(n.margin.y=t.margin.y)},A=function(t,n){return window.getComputedStyle(t,null).getPropertyValue(n)},I=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),t.rows.length<1&&(i=!0),i){t.rows=[],t.cols=[],t.lastcol=0;for(var r=n-1;r>=0;r--)t.rows[r]=0,t.cols[r]=s(t,r)}else if(t.tmpRows)for(t.rows=[],r=n-1;r>=0;r--)t.rows[r]=t.tmpRows[r];else for(t.tmpRows=[],r=n-1;r>=0;r--)t.tmpRows[r]=t.rows[r]},N=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=n?t.container.children:f(':scope > *:not([data-macy-complete="1"])',t.container);r=Array.from(r).filter((function(t){return null!==t.offsetParent}));var o=e(t.options);return h(r,(function(t){n&&(t.dataset.macyComplete=0),t.style.width=o})),t.options.trueOrder?(c(t,r,n,i),t.emit(t.constants.EVENT_RECALCULATED)):(u(t,r,n,i),t.emit(t.constants.EVENT_RECALCULATED))},O=function(){return!!window.Promise},j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};Array.from||(Array.from=function(t){for(var n=0,i=[];n<t.length;)i.push(t[n++]);return i});var L={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1,cancelLegacy:!1,useContainerForBreakpoints:!1};!function(){try{document.createElement("a").querySelector(":scope *")}catch(t){!function(){function t(t){return function(i){if(i&&n.test(i)){var r=this.getAttribute("id");r||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=i.replace(n,"#"+this.id);var o=t.apply(this,arguments);return null===r?this.removeAttribute("id"):r||(this.id=r),o}return t.apply(this,arguments)}}var n=/:scope\b/gi,i=t(Element.prototype.querySelector);Element.prototype.querySelector=function(t){return i.apply(this,arguments)};var r=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(t){return r.apply(this,arguments)}}()}}();var M=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;if(!(this instanceof t))return new t(n);this.options={},j(this.options,L,n),this.options.cancelLegacy&&!O()||E(this)};return M.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new M(t)},M.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return n(this,f("img",this.container),!t)},M.prototype.runOnImageLoad=function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=f("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,t),i&&this.on(this.constants.EVENT_IMAGE_LOAD,t),n(this,r,i)},M.prototype.recalculate=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return i&&this.queue.clear(),this.queue.add((function(){return N(t,n,i)}))},M.prototype.remove=function(){window.removeEventListener("resize",this.resizer),h(this.container.children,(function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style")})),this.container.removeAttribute("style")},M.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},M.prototype.on=function(t,n){this.events.on(t,n)},M.prototype.emit=function(t,n){this.events.emit(t,n)},M.prototype.constants=M.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},M}()}));const v=class{constructor(i){t(this,i),this.spxMasonryDidLoad=n(this,"spxMasonryDidLoad",7),this.columns=4,this.gap="10px"}imagesChanged(t){t&&(this.imagesArray=JSON.parse(t))}columnsChanged(){this.macyState.remove(),this.initMacy()}componentWillLoad(){this.images&&this.imagesChanged(this.images)}componentDidLoad(){s(this.el),this.bpColumns&&(this.bpColumnsObject=JSON.parse("{"+this.bpColumns.replace(/([0-9]+)/g,'"$1"')+"}")),this.initMacy(),Array.from(this.container.children).forEach((t=>{c(t,document.createElement("div"))})),this.spxMasonryDidLoad.emit({target:"document"})}componentDidUpdate(){this.reload(),this.recalc()}disconnectedCallback(){this.macyState.remove()}initMacy(){this.macyState=h({container:this.container,margin:0,mobileFirst:!0,runOnImageLoad:!0,columns:this.columns,breakAt:this.bpColumns?this.bpColumnsObject:{9999:this.columns?this.columns:4}})}async recalc(){this.macyState.recalculate()}async reload(){this.macyState.reInit()}render(){const t=e({display:"block","div > div":{padding:"var(--spx-masonry-gap, "+this.gap+") calc(var(--spx-masonry-gap, "+this.gap+") / 2) 0 calc(var(--spx-masonry-gap, "+this.gap+") / 2)",boxSizing:"border-box","*":{width:"100%",maxWidth:"100%"},img:{verticalAlign:"top"}}}),n=e({margin:"calc(var(--spx-masonry-gap, "+this.gap+") * -1) calc(var(--spx-masonry-gap, "+this.gap+") / 2 * -1) 0 calc(var(--spx-masonry-gap, "+this.gap+") / 2 * -1)"});return i(r,{class:t},i("div",{ref:t=>this.container=t,class:n},f(this.images,this.imagesSrc,this.imagesArray,this.imageSize)))}get el(){return o(this)}static get watchers(){return{images:["imagesChanged"],columns:["columnsChanged"]}}};export{v as spx_masonry}