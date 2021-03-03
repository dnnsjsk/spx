import{a as o,r as i,h as t,H as n,g as s,c as r}from"./p-6c77ad03.js";import{c as e}from"./p-4353a1fe.js";import{s as c}from"./p-9f54bbf7.js";import{s as l}from"./p-d12de105.js";import{g as a}from"./p-7f0894df.js";let h;const d=(o,i,t,n,s)=>(t="ios"===(t&&m(t))?"ios":"md",n&&"ios"===t?o=m(n):s&&"md"===t?o=m(s):(o||!i||u(i)||(o=i),p(o)&&(o=m(o))),p(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null),f=o=>p(o)&&(o=o.trim(),u(o))?o:null,u=o=>o.length>0&&/(\/|\.)/.test(o),p=o=>"string"==typeof o,m=o=>o.toLowerCase(),g=o=>{if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(let i=0;i<o.attributes.length;i++){const t=o.attributes[i].value;if(p(t)&&0===t.toLowerCase().indexOf("on"))return!1}for(let i=0;i<o.childNodes.length;i++)if(!g(o.childNodes[i]))return!1}return!0},w=new Map,v=new Map,b=class{constructor(o){i(this,o),this.isVisible=!1,this.mode=y(),this.lazy=!1,this.sanitize=!0}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(o,i,t){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const n=this.io=new window.IntersectionObserver((o=>{o[0].isIntersecting&&(n.disconnect(),this.io=void 0,t())}),{rootMargin:i});n.observe(o)}else t()}loadIcon(){if(this.isVisible){const i=(i=>{let t=f(i.src);if(t)return t;if(t=d(i.name,i.icon,i.mode,i.ios,i.md),t)return n=t,(()=>{if("undefined"==typeof window)return new Map;if(!h){const o=window;o.Ionicons=o.Ionicons||{},h=o.Ionicons.map=o.Ionicons.map||new Map}return h})().get(n)||o(`svg/${n}.svg`);var n;if(i.icon){if(t=f(i.icon),t)return t;if(t=f(i.icon[i.mode]),t)return t}return null})(this);i&&(w.has(i)?this.svgContent=w.get(i):((o,i)=>{let t=v.get(o);if(!t){if("undefined"==typeof fetch||"undefined"==typeof document)return w.set(o,""),Promise.resolve();t=fetch(o).then((t=>{if(t.ok)return t.text().then((t=>{t&&!1!==i&&(t=(o=>{const i=document.createElement("div");i.innerHTML=o;for(let o=i.childNodes.length-1;o>=0;o--)"svg"!==i.childNodes[o].nodeName.toLowerCase()&&i.removeChild(i.childNodes[o]);const t=i.firstElementChild;if(t&&"svg"===t.nodeName.toLowerCase()){const o=t.getAttribute("class")||"";if(t.setAttribute("class",(o+" s-ion-icon").trim()),g(t))return i.innerHTML}return""})(t)),w.set(o,t||"")}));w.set(o,"")})),v.set(o,t)}return t})(i,this.sanitize).then((()=>this.svgContent=w.get(i))))}if(!this.ariaLabel&&"true"!==this.ariaHidden){const o=d(this.name,this.icon,this.mode,this.ios,this.md);o&&(this.ariaLabel=o.replace(/\-/g," "))}}render(){const o=this.mode||"md",i=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return t(n,{role:"img",class:Object.assign(Object.assign({[o]:!0},x(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":!!i&&"rtl"===this.el.ownerDocument.dir})},t("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return s(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}},y=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",x=o=>o?{"ion-color":!0,[`ion-color-${o}`]:!0}:null;b.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";const k=class{constructor(o){i(this,o),this.spxIconDidLoad=r(this,"spxIconDidLoad",7),this.color="inherit",this.type="ionicons",this.size="1em",this.sizeMin=.8,this.sizeMax=1,this.styling="default"}componentDidLoad(){a(this.el),this.spxIconDidLoad.emit({target:"document"})}render(){const o=e({display:"inline-flex",alignItems:"center",justifyContent:"center"}),i=e({color:c("spx-icon","color",this.color),fontSize:l("spx-icon","size",this.size,this.sizeMin,this.sizeMax,this.styling)}),s=e({fontSize:"0.7em"});return t(n,{class:o},"ionicons"===this.type?t("ion-icon",{name:this.icon,class:i}):"caret"===this.type?t("i",{class:s},"▼"):null)}get el(){return s(this)}};export{b as ion_icon,k as spx_icon}