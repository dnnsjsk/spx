function o(o){const t=[];let e;const l=l=>{var n,c,s;const x="clamp(30px, 4vw, 40px)",d=o.lightbox?o.host.hasAttribute("spx-lightbox")&&JSON.parse(o.host.getAttribute("spx-lightbox"))["overlay-background"]?JSON.parse(o.host.getAttribute("spx-lightbox"))["overlay-background"]:"rgba(0,0,0,0.8)":o.el.getAttribute("overlay-background"),r=o.lightbox?o.host.hasAttribute("spx-lightbox")&&JSON.parse(o.host.getAttribute("spx-lightbox"))["overlay-backdrop-filter"]?JSON.parse(o.host.getAttribute("spx-lightbox"))["overlay-backdrop-filter"]:"var(--spx-backdrop-filter)":o.el.getAttribute("overlay-backdrop-filter"),b=o.lightbox?o.host.hasAttribute("spx-lightbox")&&JSON.parse(o.host.getAttribute("spx-lightbox"))["close-button-color"]?JSON.parse(o.host.getAttribute("spx-lightbox"))["close-button-color"]:"#ffffff":o.el.getAttribute("close-button-color"),a=o.lightbox?(null===(n=o.host)||void 0===n?void 0:n.hasAttribute("spx-lightbox-slider"))?null===(c=o.host)||void 0===c?void 0:c.getAttribute("spx-lightbox-slider"):"":o.el.getAttribute("spx-slider");e=document.createElement("div"),e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.height="100vh",e.style.width="100vw",e.style.padding=x,e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.background=`var(--spx-lightbox-overlay-background, ${d})`,e.style.backdropFilter=`var(--spx-lightbox-overlay-backdrop-filter, ${r})`,e.style.zIndex="99999999999999999999999999999999999999";const p=document.createElement("div");p.style.position="fixed",p.style.top="0",p.style.left="0",p.style.height="100vh",p.style.width="100vw",p.style.cursor="pointer";const v=document.createElement("button");v.style.position="fixed",v.style.right="0",v.style.top="0",v.style.display="flex",v.style.justifyContent="center",v.style.alignItems="center",v.style.borderRadius="0",v.style.width=x,v.style.height=x,v.style.background="none",v.style.border="none";const f=document.createElement("spx-icon");f.setAttribute("icon","close-outline"),f.setAttribute("size","150%"),f.setAttribute("color",`var(--spx-lightbox-close-button-color, ${b})`);const u=document.createElement("spx-slider");u.style.width="100%",u.setAttribute("navigation",""),t.forEach((o=>{const t=document.createElement("img");t.setAttribute("src",o),u.appendChild(t)})),u.setAttribute("start",l.target.getAttribute("data-index")),(o.el.hasAttribute("spx-slider")||(null===(s=o.host)||void 0===s?void 0:s.hasAttribute("spx-lightbox-slider")))&&Object.entries(JSON.parse(a)).forEach((([o,t])=>{u.setAttribute(o,t)})),v.appendChild(f),e.appendChild(p),o.el.hasAttribute("close-button")&&"false"!==o.el.getAttribute("close-button")&&e.appendChild(v),e.appendChild(u),p.addEventListener("click",(function(){i()})),f.addEventListener("click",(function(){i()})),o.el.hasAttribute("body-overflow")&&"false"!==o.el.getAttribute("body-overflow")&&(document.body.style.overflow="hidden"),document.body.appendChild(e)},i=()=>{o.el.hasAttribute("body-overflow")&&"false"!==o.el.getAttribute("body-overflow")&&(document.body.style.overflow="auto"),e.remove()};o.query.forEach(((o,e)=>{t.push(o.getAttribute("src")),o.setAttribute("data-index",e),o.addEventListener("click",l)}))}export{o as l}