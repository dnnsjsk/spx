import{r as t,h as s,H as i,a}from"./p-e1defc51.js";import{c as o}from"./p-cfbebfdc.js";import{s as r}from"./p-33315b75.js";import"./p-a1c5e2d4.js";import"./p-3333ff2d.js";import"./p-d1ae8003.js";import"./p-5cc7fca6.js";import"./p-6cdc03eb.js";import{g as n}from"./p-9e5127cc.js";import{s as e}from"./p-23c5690f.js";import{a as p,c}from"./p-8066be7a.js";import{h}from"./p-c8a95e9e.js";import"./p-55eff329.js";const m="spx-section-header",d=class{constructor(s){t(this,s),this.backdropFilter="blur(10px)",this.background="rgba(255,255,255,0.85)",this.logoMaxHeight="50px",this.navigationAlign="center",this.spaceX="var(--spx-space-md)",this.zIndex=102}onScroll(){this.backgroundScroll&&(this.bgScroll=window.scrollY>this.backgroundScroll)}componentDidLoad(){n(this.el),this.onScroll(),e(this.el)}render(){const t=o({maxHeight:r(m,"logo-max-height",this.logoMaxHeight),width:"auto !important"}),a=o({background:this.backgroundScroll&&!this.bgScroll?"none":r(m,"background",this.background),backdropFilter:this.backgroundScroll&&!this.bgScroll?"none":r(m,"backdrop-filter",this.backdropFilter),position:this.position,width:"100%",display:h.bpMobile||"right"===this.navigationAlign?"flex":"grid",gridTemplateColumns:"160px 1fr 160px",alignItems:"center",padding:r(m,"padding",this.spaceX)+" "+h.spaceXsm,zIndex:this.zIndex,transitionProperty:"background",transitionDuration:r(m,"transition-duration",p),transitionTimingFunction:r(m,"transition-timing-function",c),"*":{fontFamily:h.fontFamilySecondary+" !important"}}),n=o({justifySelf:"center",marginLeft:h.bpMobile?"var(--spx-space-md)":"right"===this.navigationAlign&&!h.bpMobile&&"auto",marginRight:"right"===this.navigationAlign&&"var(--spx-space-xl)"}),e=o({justifySelf:"end",marginLeft:h.bpMobile&&"auto"}),d=o({display:"block",maxWidth:"max-content"});return s(i,{class:a},s("div",null,s("a",{href:this.logoLink,class:d},s("img",h.bpMobile?{class:t,src:this.logoSrcMobile,alt:"logo"}:{class:t,src:this.logoSrc,alt:"logo"}))),s("div",{class:n},s("slot",{name:"navigation"})),s("div",{class:e},s("slot",{name:"buttons"})),s("slot",null))}get el(){return a(this)}};export{d as spx_section_header}