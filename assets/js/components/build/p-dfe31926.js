let e,t,n,l=!1,o=!1,s=!1,c=!1,r=!1;const i="undefined"!=typeof window?window:{},a=i.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),$=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=h(e,n),c=p(t,o),r=m(n);f.ael(s,l,c,r),(t.o=t.o||[]).push((()=>f.rel(s,l,c,r)))}))},p=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){ue(e)}},h=(e,t)=>4&t?a:8&t?i:e,m=e=>0!=(2&e),w="http://www.w3.org/1999/xlink",b=new WeakMap,y=(e,t)=>"sc-"+(t&&32&e.t?e.$+"-"+t:e.$),g=e=>he.push(e),v={},j=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!j(l))&&(l+=""),s&&c?r[r.length-1].p+=l:r.push(s?S(null,l):l),c=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const a=S(e,null);return a.h=t,r.length>0&&(a.m=r),a.g=o,a},S=(e,t)=>({t:0,v:e,p:t,j:null,m:null,h:null,g:null}),O={},C=(e,t,n,l,o,s)=>{if(n!==l){let c=fe(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=x(n),s=x(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const i=j(l);if((c||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let a=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,a=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(w,t):e.removeAttribute(t)):(!c||4&s||o)&&!i&&(l=!0===l?"":l,a?e.setAttributeNS(w,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):fe(i,r)?r.slice(2):r[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)}},M=/\s/,x=e=>e?e.split(M):[],R=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.h||v,c=t.h||v;for(l in s)l in c||C(o,l,s[l],void 0,n,t.t);for(l in c)C(o,l,s[l],c[l],n,t.t)},L=(o,r,i,f)=>{let u,d,$,p=r.m[i],h=0;if(l||(s=!0,"slot"===p.v&&(e&&f.classList.add(e+"-s"),p.t|=p.m?2:1)),null!==p.p)u=p.j=a.createTextNode(p.p);else if(1&p.t)u=p.j=a.createTextNode("");else{if(c||(c="svg"===p.v),u=p.j=a.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&p.t?"slot-fb":p.v),c&&"foreignObject"===p.v&&(c=!1),R(null,p,c),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),p.m)for(h=0;h<p.m.length;++h)d=L(o,p,h,u),d&&u.appendChild(d);"svg"===p.v?c=!1:"foreignObject"===u.tagName&&(c=!0)}return u["s-hn"]=n,3&p.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=p.g||"",$=o&&o.m&&o.m[i],$&&$.v===p.v&&o.j&&P(o.j,!1)),u},P=(e,t)=>{f.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(E(o).insertBefore(o,D(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&P(o,t)}f.t&=-2},T=(e,t,l,o,s,c)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=L(null,l,s,e),r&&(o[s].j=r,i.insertBefore(r,D(t))))},U=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,V(l),o=!0,s["s-ol"]?s["s-ol"].remove():P(s,!0),s.remove())},W=(e,t)=>e.v===t.v&&("slot"!==e.v||e.g===t.g),D=e=>e&&e["s-ol"]||e,E=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const n=t.j=e.j,l=e.m,o=t.m,s=t.v,r=t.p;let i;null===r?(c="svg"===s||"foreignObject"!==s&&c,"slot"===s||R(e,t,c),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],a=t[r],f=l.length-1,u=l[0],d=l[f];for(;s<=r&&c<=f;)null==i?i=t[++s]:null==a?a=t[--r]:null==u?u=l[++c]:null==d?d=l[--f]:W(i,u)?(A(i,u),i=t[++s],u=l[++c]):W(a,d)?(A(a,d),a=t[--r],d=l[--f]):W(i,d)?("slot"!==i.v&&"slot"!==d.v||P(i.j.parentNode,!1),A(i,d),e.insertBefore(i.j,a.j.nextSibling),i=t[++s],d=l[--f]):W(a,u)?("slot"!==i.v&&"slot"!==d.v||P(a.j.parentNode,!1),A(a,u),e.insertBefore(a.j,i.j),a=t[--r],u=l[++c]):(o=L(t&&t[c],n,c,e),u=l[++c],o&&E(i.j).insertBefore(o,D(i.j)));s>r?T(e,null==l[f+1]?null:l[f+1].j,n,l,c,f):c>f&&U(t,s,r)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),T(n,null,t,o,0,o.length-1)):null!==l&&U(l,0,l.length-1),c&&"svg"===s&&(c=!1)):(i=n["s-cr"])?i.parentNode.textContent=r:e.p!==r&&(n.data=r)},F=e=>{let t,n,l,o,s,c,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c=r[o].nodeType,r[o]["s-hn"]!==t["s-hn"]||""!==s){if(1===c&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){t.hidden=!0;break}F(t)}},H=[],N=e=>{let t,n,l,s,c,r,i=0,a=e.childNodes,f=a.length;for(;i<f;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(q(n,s)?(c=H.find((e=>e.k===n)),o=!0,n["s-sn"]=n["s-sn"]||s,c?c.S=t:H.push({S:t,k:n}),n["s-sr"]&&H.map((e=>{q(e.k,n["s-sn"])&&(c=H.find((e=>e.k===n)),c&&!e.S&&(e.S=c.S))}))):H.some((e=>e.k===n))||H.push({k:n}));1===t.nodeType&&N(t)}},q=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,V=e=>{e.h&&e.h.ref&&e.h.ref(null),e.m&&e.m.map(V)},_=e=>re(e).O,z=(e,t,n)=>{const l=_(e);return{emit:e=>B(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},B=(e,t,n)=>{const l=f.ce(t,n);return e.dispatchEvent(l),l},G=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.C=t)))},I=(e,t)=>{if(e.t|=16,!(4&e.t))return G(e,e.M),je((()=>J(e,t)));e.t|=512},J=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>Z(n,e,t))),e.u=null),l=Z(n,"componentWillLoad")):l=Z(n,"componentWillUpdate"),ee(l,(()=>K(e,n,t)))},K=async(e,t,n)=>{const l=e.O,o=l["s-rc"];n&&(e=>{const t=e.R,n=e.O,l=t.t,o=((e,t,n)=>{let l=y(t,n),o=pe.get(l);if(e=11===e.nodeType?e:a,o)if("string"==typeof o){let t,n=b.get(e=e.head||e);n||b.set(e,n=new Set),n.has(l)||(t=a.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.L);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);Q(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>X(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Q=(c,r)=>{try{r=r.render(),c.t&=-17,c.t|=2,((c,r)=>{const i=c.O,u=c.R,d=c.P||S(null,null),$=(e=>e&&e.v===O)(r)?r:k(null,null,r);if(n=i.tagName,u.T&&($.h=$.h||{},u.T.map((([e,t])=>$.h[t]=i[e]))),$.v=null,$.t|=4,c.P=$,$.j=d.j=i.shadowRoot||i,e=i["s-sc"],t=i["s-cr"],l=0!=(1&u.t),o=!1,A(d,$),f.t|=1,s){let e,t,n,l,o,s;N($.j);let c=0;for(;c<H.length;c++)e=H[c],t=e.k,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(c=0;c<H.length;c++)if(e=H[c],t=e.k,e.S){for(l=e.S.parentNode,o=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&F($.j),f.t&=-2,H.length=0})(c,r)}catch(e){ue(e,c.O)}return null},X=e=>{const t=e.O,n=e.i,l=e.M;Z(n,"componentDidRender"),64&e.t?Z(n,"componentDidUpdate"):(e.t|=64,te(t),Z(n,"componentDidLoad"),e.U(t),l||Y()),e.W(t),e.C&&(e.C(),e.C=void 0),512&e.t&&ve((()=>I(e,!1))),e.t&=-517},Y=()=>{te(a.documentElement),ve((()=>B(i,"appload",{detail:{namespace:"spx"}})))},Z=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ue(e)}},ee=(e,t)=>e&&e.then?e.then(t):t(),te=e=>e.classList.add("hydrated"),ne=(e,t,n)=>{if(t.D){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.D),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>re(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=re(e),s=o.O,c=o.F.get(t),r=o.t,i=o.i;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.D[t][0]),!(8&r&&void 0!==c||n===c)&&(o.F.set(t,n),i)){if(l.A&&128&r){const e=l.A[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){ue(e,s)}}))}2==(18&r)&&I(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=re(this);return n.H.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){f.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.T.push([e,o]),o}))}}return e},le=e=>{Z(e,"connectedCallback")},oe=(e,t={})=>{const n=[],l=t.exclude||[],o=i.customElements,s=a.head,c=s.querySelector("meta[charset]"),r=a.createElement("style"),u=[];let p,h=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],$:t[1],D:t[2],N:t[3]};s.D=t[2],s.N=t[3],s.T=[],s.A={};const c=s.$,r=class extends HTMLElement{constructor(e){super(e),ae(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),h?u.push(this):f.jmp((()=>(e=>{if(0==(1&f.t)){const t=re(e),n=t.R,l=()=>{};if(1&t.t)$(e,t,n.N),le(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){G(t,t.M=n);break}}n.D&&Object.entries(n.D).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=$e(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.A=o.watchers,ne(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){ue(e)}t.t&=-9,t.t|=128,e(),le(t.i)}if(o.style){let l=o.style;"string"!=typeof l&&(l=l[t.L=(e=>he.map((t=>t(e))).find((e=>!!e)))(e)]);const s=y(n,t.L);if(!pe.has(s)){const e=()=>{};((e,t,n)=>{let l=pe.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,pe.set(e,l)})(s,l,!!(1&n.t)),e()}}}const s=t.M,c=()=>I(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(e,t,n)}l()}})(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=re(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),Z(t,"disconnectedCallback")}})()))}componentOnReady(){return re(this).q}};s.V=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,ne(r,s,1)))})))),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),h=!1,u.length?u.map((e=>e.connectedCallback())):f.jmp((()=>p=setTimeout(Y,30)))},se=e=>{const t=new URL(e,f.l);return t.origin!==i.location.origin?t.href:t.pathname},ce=new WeakMap,re=e=>ce.get(e),ie=(e,t)=>ce.set(t.i=e,t),ae=(e,t)=>{const n={t:0,O:e,R:t,F:new Map};return n.H=new Promise((e=>n.W=e)),n.q=new Promise((e=>n.U=e)),e["s-p"]=[],e["s-rc"]=[],$(e,n,t.N),ce.set(e,n)},fe=(e,t)=>t in e,ue=(e,t)=>(0,console.error)(e,t),de=new Map,$e=e=>{const t=e.$.replace(/-/g,"_"),n=e.V,l=de.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(de.set(n,e),e[t])),ue)},pe=new Map,he=[],me=[],we=[],be=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&f.t?ve(ge):f.raf(ge))},ye=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ue(e)}e.length=0},ge=()=>{ye(me),ye(we),(r=me.length>0)&&f.raf(ge)},ve=e=>u().then(e),je=be(we,!0);export{O as H,se as a,oe as b,z as c,_ as g,k as h,u as p,ie as r,g as s}