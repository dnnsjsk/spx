import{r as o,c as t,h as e,a as s}from"./p-509d707c.js";import{k as i}from"./p-a922d5af.js";import{g as c}from"./p-580e945a.js";const n=class{constructor(e){o(this,e),this.spxLightboxDidLoad=t(this,"spxLightboxDidLoad",7),this.bodyOverflow=!0,this.closeButton=!0,this.closeButtonColor="#ffffff",this.overlayBackground="rgba(0,0,0,0.8)",this.overlayBackdropFilter="var(--spx-backdrop-filter)",this.target="img",this.init=()=>{!function(o){const t=[];let e;const s=s=>{const c="clamp(30px, 4vw, 40px)";e=document.createElement("div"),e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.height="100vh",e.style.width="100vw",e.style.padding=c,e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.background=`var(--spx-lightbox-overlay-background, ${o.el.getAttribute("overlay-background")})`,e.style.backdropFilter=`var(--spx-lightbox-overlay-backdrop-filter, ${o.el.getAttribute("overlay-backdrop-filter")})`,e.style.zIndex="99999999999999999999999999999999999999";const n=document.createElement("div");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.height="100vh",n.style.width="100vw",n.style.cursor="pointer";const r=document.createElement("button");r.style.position="fixed",r.style.right="0",r.style.top="0",r.style.display="flex",r.style.justifyContent="center",r.style.alignItems="center",r.style.borderRadius="0",r.style.width=c,r.style.height=c,r.style.background="none",r.style.border="none";const l=document.createElement("spx-icon");l.setAttribute("icon","close-outline"),l.setAttribute("size","150%"),l.setAttribute("color",`var(--spx-lightbox-close-button-color, ${o.el.getAttribute("close-button-color")})`);const a=document.createElement("spx-slider");a.style.width="100%",a.setAttribute("navigation",""),t.forEach((o=>{const t=document.createElement("img");t.setAttribute("src",o),a.appendChild(t)})),a.setAttribute("start",s.target.getAttribute("data-index")),o.el.hasAttribute("spx-slider")&&Object.entries(JSON.parse(o.el.getAttribute("spx-slider"))).forEach((([o,t])=>{a.setAttribute(o,t)})),r.appendChild(l),e.appendChild(n),o.el.hasAttribute("close-button")&&"false"!==o.el.getAttribute("close-button")&&e.appendChild(r),e.appendChild(a),n.addEventListener("click",(function(){i()})),l.addEventListener("click",(function(){i()})),o.el.hasAttribute("body-overflow")&&"false"!==o.el.getAttribute("body-overflow")&&(document.body.style.overflow="hidden"),document.body.appendChild(e)},i=()=>{o.el.hasAttribute("body-overflow")&&"false"!==o.el.getAttribute("body-overflow")&&(document.body.style.overflow="auto"),e.remove()};o.query.forEach(((o,e)=>{t.push(o.getAttribute("src")),o.setAttribute("data-index",e),o.addEventListener("click",s)}))}({el:this.el,query:this.el.querySelectorAll(this.target)})}}componentDidLoad(){this.init(),i({el:this.el}),this.spxLightboxDidLoad.emit({target:"document"})}componentWillUpdate(){c(this.el)}render(){return e("slot",null)}get el(){return s(this)}};n.style=":host{display:var(--spx-lightbox-display, block)}";export{n as spx_lightbox}