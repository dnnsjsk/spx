import{r as i,h as s,H as t,a}from"./p-e1defc51.js";import{k as o,c as n}from"./p-cfbebfdc.js";import{s as r}from"./p-33315b75.js";import"./p-a1c5e2d4.js";import"./p-3333ff2d.js";import"./p-d1ae8003.js";import"./p-5cc7fca6.js";import"./p-6cdc03eb.js";import{g as p}from"./p-9e5127cc.js";const e="spx-slideshow",m=class{constructor(s){i(this,s),this.gap="var(--spx-space-lg)",this.maxWidth="350px",this.duration="60s"}onResize(){this.offsetWidth=this.elements.offsetWidth}componentDidLoad(){p(this.el),this.elements.querySelectorAll(":scope > *").forEach(i=>{const s=i.cloneNode(!0);this.clone.appendChild(s)}),this.offsetWidth=this.elements.offsetWidth}render(){const i=o({"0%":{transform:"translate3d(0px, 0px, 0px)"},to:{transform:"translate3d(calc(-"+this.offsetWidth+"px - "+this.gap+"), 0px, 0px)"}}),a=n({display:"grid",gridAutoFlow:"column",gridAutoColumns:r(e,"max-width",this.maxWidth),gridGap:r(e,"gap",this.gap)}),p=n({animationName:i,animationDuration:r(e,"speed",this.duration),animationTimingFunction:"linear",animationIterationCount:"infinite",animationFillMode:"none",animationPlayState:"running",display:"flex",img:{maxWidth:"100%"},"& > div + div":{marginLeft:r(e,"gap",this.gap)}});return s(t,null,s("div",{class:p},s("div",{class:a,ref:i=>this.elements=i},s("slot",null)),s("div",{class:a,ref:i=>this.clone=i})))}get el(){return a(this)}};export{m as spx_slideshow}