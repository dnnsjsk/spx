import{r as t,c as s,h as i,a as o}from"./p-509d707c.js";import{k as r}from"./p-3b2c546a.js";import{g as h}from"./p-580e945a.js";import{l as a}from"./p-2544f555.js";let p=class{constructor(i){t(this,i),this.spxLightboxDidLoad=s(this,"spxLightboxDidLoad",7),this.bodyOverflow=!0,this.closeButton=!0,this.closeButtonColor="#ffffff",this.overlayBackground="rgba(0,0,0,0.8)",this.overlayBackdropFilter="var(--spx-backdrop-filter)",this.target="img",this.init=()=>{a({el:this.el,query:this.el.querySelectorAll(this.target)})}}componentDidLoad(){this.init(),r({el:this.el}),this.spxLightboxDidLoad.emit({target:"document"})}componentWillUpdate(){h(this.el)}render(){return i("slot",null)}get el(){return o(this)}};p.style=":host{display:var(--spx-lightbox-display, block)}";export{p as spx_lightbox}