import{r as s,c as i,h as t,H as a,g as o}from"./p-dfe31926.js";import{s as n}from"./p-37718fa8.js";import{g as e,c as h}from"./p-9403a412.js";import{g as r}from"./p-0cbc0011.js";import{e as d}from"./p-6acfcfdc.js";const m="spx-slideshow",p=class{constructor(t){s(this,t),this.spxSlideshowDidLoad=i(this,"spxSlideshowDidLoad",7),this.display="block",this.duration="60s",this.gap="1em",this.maxWidth="350px"}imagesChanged(s){s&&(this.imagesArray=JSON.parse(s))}onResize(){this.elements&&(this.offsetWidth=this.elements.offsetWidth)}componentWillLoad(){this.images&&this.imagesChanged(this.images)}componentDidLoad(){e(this.el),this.elements.querySelectorAll(":scope > *").forEach((s=>{const i=s.cloneNode(!0);this.clone.appendChild(i)})),this.offsetWidth=this.elements.offsetWidth,this.spxSlideshowDidLoad.emit({target:"document"})}render(){const{css:s,keyframes:i}=d(this.el.shadowRoot),o=i({"0%":{transform:"translate3d(0px, 0px, 0px)"},to:{transform:"translate3d(calc(-"+this.offsetWidth+"px - "+this.gap+"), 0px, 0px)"}}),e=h({display:n(m,"display",this.display)}),p=s({overflow:n(m,"overflow",this.overflow)}),c=s({animationName:o,animationDuration:n(m,"speed",this.duration),animationTimingFunction:"linear",animationIterationCount:"infinite",animationFillMode:"none",animationPlayState:"running",display:"flex",img:{maxWidth:"100%"},"& > div + div":{marginLeft:n(m,"gap",this.gap)}}),l=s({display:"grid",gridAutoFlow:"column",gridAutoColumns:n(m,"max-width",this.maxWidth),gridGap:n(m,"gap",this.gap)});return t(a,{class:e},t("div",{class:p},t("div",{class:c},t("div",{class:l,ref:s=>this.elements=s},r(this.images,this.imagesSrc,this.imagesArray,this.imageSize)),t("div",{class:l,ref:s=>this.clone=s}))))}get el(){return o(this)}static get watchers(){return{images:["imagesChanged"]}}};export{p as spx_slideshow}