import{r as t,c as s,h as i,a as e}from"./p-509d707c.js";import{m as r,s as a,o,k as h}from"./p-1ea45254.js";import{g as d}from"./p-580e945a.js";const n="spx-iframe",l=class{constructor(i){t(this,i),this.spxIframeDidLoad=s(this,"spxIframeDidLoad",7),this.loaderBackground="var(--spx-color-gray-900)",this.loaderColor="#ffffff",this.loaderBorderRadius="var(--spx-border-radius)",this.loaderPadding="0.8em",this.minHeight="400px",this.size="1440px",this.src="https://spx.dev",this.setHeight=()=>{const t=()=>{void 0===this.el.shadowRoot.querySelector("iframe").contentWindow.document.body||null===this.el.shadowRoot.querySelector("iframe").contentWindow.document.body?setTimeout(t,100):this.iframe.style.height=this.el.shadowRoot.querySelector("iframe").contentWindow.document.body.scrollHeight+"px"};t()},this.setUpMutationObserver=()=>{r(this.el.shadowRoot.querySelector("iframe").contentWindow.document.body,{attributes:!0,childList:!0,subtree:!0},(()=>{this.setHeight(),setTimeout((()=>this.setHeight()),500)}))},this.handleResize=()=>{if(this.parent&&this.iframe){const t=this.parent.offsetWidth/this.iframe.offsetWidth;this.iframe.style.transform="scale(calc(("+t+"))",this.parentHeight=this.parent.offsetHeight,this.iframe.style.height=this.parentHeight/t+"px"}}}attributesChanged(t,s,i){a(this.el,n,i,t)}onResize(){this.handleResize(),this.fit&&this.setHeight()}componentDidLoad(){this.lazy&&new o({unobserve_entered:!0,unobserve_completed:!0,callback_loaded:()=>{setTimeout((()=>{this.fit&&(this.setHeight(),this.setUpMutationObserver()),this.handleResize()}),10)}},this.el.shadowRoot.querySelectorAll("[data-src]")),this.iframe=this.el.shadowRoot.querySelector("iframe"),this.parent=this.el.shadowRoot.querySelector(".inner"),this.el.shadowRoot.querySelector("iframe").onload=()=>{this.loaded=!0,this.lazy||this.handleResize()},this.fit&&!this.lazy&&(this.setHeight(),this.setUpMutationObserver()),h({el:this.el,tag:n,props:["loaderBackground","loaderBorderRadius","loaderColor","loaderPadding","minHeight"]}),this.spxIframeDidLoad.emit({target:"document"})}componentWillUpdate(){d(this.el)}componentDidUpdate(){this.handleResize()}render(){return i("div",{class:"inner"},i("iframe",{style:{width:this.size},ref:t=>this.iframe=t,tabindex:"-1",src:this.lazy?"":this.src,"data-src":this.lazy&&this.src}),!this.loaded&&i("div",{class:"loader"},i("spx-icon",{type:"loader"})))}get el(){return e(this)}static get watchers(){return{loaderBackground:["attributesChanged"],loaderBorderRadius:["attributesChanged"],loaderColor:["attributesChanged"],loaderPadding:["attributesChanged"],minHeight:["attributesChanged"]}}};l.style=":host{display:var(--spx-iframe-display, block)}.inner{height:100%;width:100%;position:relative;min-height:var(--spx-iframe-min-heigt, 400px)}iframe{border:none;transform-origin:left top;position:absolute}.loader{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%) scale(2);padding:var(--spx-iframe-loader-padding, 0.8em);background:var(--spx-iframe-loader-background, var(--spx-color-gray-900));color:var(--spx-iframe-loader-color, #ffffff);border-radius:var(--spx-iframe-loader-border-radius, var(--spx-border-radius))}";export{l as spx_iframe}