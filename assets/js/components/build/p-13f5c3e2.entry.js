import{r as t,c as i,h as s,H as a,a as o}from"./p-08ffb50b.js";import{c as r}from"./p-c8a1ba51.js";import{s as n}from"./p-025a4802.js";import"./p-edbeee69.js";import"./p-0a7dbbed.js";import"./p-a2b66e39.js";import{g as e}from"./p-947bf368.js";import{s as h}from"./p-b7caa958.js";import{s as p,r as m}from"./p-3480a2cc.js";import{a as c,c as l}from"./p-f4890c54.js";const d="spx-section-header",g=class{constructor(s){t(this,s),this.spxSectionHeaderDidLoad=i(this,"spxSectionHeaderDidLoad",7),this.backdropFilter="blur(10px)",this.background="rgba(255,255,255,0.85)",this.logoMaxHeight="50px",this.navigationAlign="center",this.paddingYMin=.8,this.paddingYMax=1,this.zIndex=102}onScroll(){this.backgroundScroll&&(this.hasScrolled=window.scrollY>this.backgroundScroll)}componentDidLoad(){e(this.el),this.onScroll(),h(this.el),this.spxSectionHeaderDidLoad.emit({target:"document"})}render(){const t=r({maxHeight:n(d,"logo-max-height",this.logoMaxHeight),width:"auto !important"}),i=r({maxWidth:"2560px",background:this.backgroundScroll&&!this.hasScrolled?"none":n(d,"background",this.background),backdropFilter:this.backgroundScroll&&!this.hasScrolled?"none":n(d,"backdrop-filter",this.backdropFilter),position:this.position,width:"100%",display:p.bpMobile||"right"===this.navigationAlign?"flex":"grid",gridTemplateColumns:"160px 1fr 160px",alignItems:"center",padding:m(d,"padding-y",this.paddingYMin,this.paddingYMax)+" "+p.paddingXsm,zIndex:this.zIndex,transitionProperty:"background",transitionDuration:n(d,"transition-duration",c),transitionTimingFunction:n(d,"transition-timing-function",l),"*":{fontFamily:p.fontFamilySecondary+" !important"}}),o=r({justifySelf:"center",marginLeft:p.bpMobile?"16px":"right"===this.navigationAlign&&!p.bpMobile&&"auto",marginRight:"right"===this.navigationAlign&&"clamp(48px, 2.4vw, 80px)"}),e=r({justifySelf:"end",marginLeft:p.bpMobile&&"auto","*":{marginTop:"0 !important"}}),h=r({position:"relative"}),g=r({display:"block",maxWidth:"max-content",cursor:"pointer"});return s(a,{class:i},s("div",{class:h},s("a",{href:this.logoLink,class:g},s("img",p.bpMobile&&this.logoSrcMobile?{class:t,src:this.logoSrcMobile,alt:"logo-mobile"}:{class:t,src:this.logoSrc,alt:"logo"})),s("slot",{name:"logo-after"})),s("div",{class:o},s("slot",{name:"navigation"})),s("div",{class:e},s("slot",{name:"buttons"})),s("slot",null))}get el(){return o(this)}};export{g as spx_section_header}