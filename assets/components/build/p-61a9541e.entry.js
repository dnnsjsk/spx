import{r as t,c as s,h as i,H as e,a as o}from"./p-d8297fdb.js";import{b as h,d as n,e as r,s as a}from"./p-ae086eeb.js";const c="http://www.w3.org/2000/svg";class u{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function l(t,s,i,e,o){return{type:"path",ops:m(t,s,i,e,o)}}function f(t,s,i){const e=(t||[]).length;if(e>2){const o=[];for(let s=0;s<e-1;s++)o.push(...m(t[s][0],t[s][1],t[s+1][0],t[s+1][1],i));return s&&o.push(...m(t[e-1][0],t[e-1][1],t[0][0],t[0][1],i)),{type:"path",ops:o}}return 2===e?l(t[0][0],t[0][1],t[1][0],t[1][1],i):{type:"path",ops:[]}}function d(t,s,i,e,o){return function(t,s){return f(t,!0,s)}([[t,s],[t+i,s],[t+i,s+e],[t,s+e]],o)}function p(t,s,i,e,o){return function(t,s,i,e){const[o,h]=v(e.increment,t,s,e.rx,e.ry,1,e.increment*b(.1,b(.4,1,i),i),i);let n=k(o,null,i);if(!i.disableMultiStroke){const[o]=v(e.increment,t,s,e.rx,e.ry,1.5,0,i),h=k(o,null,i);n=n.concat(h)}return{estimatedPoints:h,opset:{type:"path",ops:n}}}(t,s,o,function(t,s,i){const e=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(s/2,2))/2)),o=Math.max(i.curveStepCount,i.curveStepCount/Math.sqrt(200)*e),h=2*Math.PI/o;let n=Math.abs(t/2),r=Math.abs(s/2);const a=1-i.curveFitting;return n+=w(n*a,i),r+=w(r*a,i),{increment:h,rx:n,ry:r}}(i,e,o)).opset}function g(t){return t.randomizer||(t.randomizer=new u(t.seed||0)),t.randomizer.next()}function b(t,s,i,e=1){return i.roughness*e*(g(i)*(s-t)+t)}function w(t,s,i=1){return b(-t,t,s,i)}function m(t,s,i,e,o,h=!1){const n=h?o.disableMultiStrokeFill:o.disableMultiStroke,r=M(t,s,i,e,o,!0,!1);if(n)return r;const a=M(t,s,i,e,o,!0,!0);return r.concat(a)}function M(t,s,i,e,o,h,n){const r=Math.pow(t-i,2)+Math.pow(s-e,2),a=Math.sqrt(r);let c=1;c=a<200?1:a>500?.4:-.0016668*a+1.233334;let u=o.maxRandomnessOffset||0;u*u*100>r&&(u=a/10);const l=u/2,f=.2+.2*g(o);let d=o.bowing*o.maxRandomnessOffset*(e-s)/200,p=o.bowing*o.maxRandomnessOffset*(t-i)/200;d=w(d,o,c),p=w(p,o,c);const b=[],m=()=>w(l,o,c),M=()=>w(u,o,c);return h&&b.push(n?{op:"move",data:[t+m(),s+m()]}:{op:"move",data:[t+w(u,o,c),s+w(u,o,c)]}),b.push(n?{op:"bcurveTo",data:[d+t+(i-t)*f+m(),p+s+(e-s)*f+m(),d+t+2*(i-t)*f+m(),p+s+2*(e-s)*f+m(),i+m(),e+m()]}:{op:"bcurveTo",data:[d+t+(i-t)*f+M(),p+s+(e-s)*f+M(),d+t+2*(i-t)*f+M(),p+s+2*(e-s)*f+M(),i+M(),e+M()]}),b}function k(t,s,i){const e=t.length,o=[];if(e>3){const h=[],n=1-i.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let s=1;s+2<e;s++){const i=t[s];h[0]=[i[0],i[1]],h[1]=[i[0]+(n*t[s+1][0]-n*t[s-1][0])/6,i[1]+(n*t[s+1][1]-n*t[s-1][1])/6],h[2]=[t[s+1][0]+(n*t[s][0]-n*t[s+2][0])/6,t[s+1][1]+(n*t[s][1]-n*t[s+2][1])/6],h[3]=[t[s+1][0],t[s+1][1]],o.push({op:"bcurveTo",data:[h[1][0],h[1][1],h[2][0],h[2][1],h[3][0],h[3][1]]})}if(s&&2===s.length){const t=i.maxRandomnessOffset;o.push({op:"lineTo",data:[s[0]+w(t,i),s[1]+w(t,i)]})}}else 3===e?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===e&&o.push(...m(t[0][0],t[0][1],t[1][0],t[1][1],i));return o}function v(t,s,i,e,o,h,n,r){const a=[],c=[],u=w(.5,r)-Math.PI/2;c.push([w(h,r)+s+.9*e*Math.cos(u-t),w(h,r)+i+.9*o*Math.sin(u-t)]);for(let n=u;n<2*Math.PI+u-.01;n+=t){const t=[w(h,r)+s+e*Math.cos(n),w(h,r)+i+o*Math.sin(n)];a.push(t),c.push(t)}return c.push([w(h,r)+s+e*Math.cos(u+2*Math.PI+.5*n),w(h,r)+i+o*Math.sin(u+2*Math.PI+.5*n)]),c.push([w(h,r)+s+.98*e*Math.cos(u+n),w(h,r)+i+.98*o*Math.sin(u+n)]),c.push([w(h,r)+s+.9*e*Math.cos(u+.5*n),w(h,r)+i+.9*o*Math.sin(u+.5*n)]),[c,a]}function y(t,s){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:s}}function x(t,s,i,e,o,h){const n=[];let r=i.strokeWidth||2;const a=function(t){const s=t.padding;if(s||0===s){if("number"==typeof s)return[s,s,s,s];if(Array.isArray(s)){const t=s;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(i),u=void 0===i.animate||!!i.animate,g=i.iterations||2,b=i.rtl?1:0,w=y("single",h);switch(i.type){case"underline":{const t=s.y+s.h+a[2];for(let i=b;i<g+b;i++)n.push(i%2?l(s.x+s.w,t,s.x,t,w):l(s.x,t,s.x+s.w,t,w));break}case"strike-through":{const t=s.y+s.h/2;for(let i=b;i<g+b;i++)n.push(i%2?l(s.x+s.w,t,s.x,t,w):l(s.x,t,s.x+s.w,t,w));break}case"box":{const t=s.x-a[3],i=s.y-a[0],e=s.w+(a[1]+a[3]),o=s.h+(a[0]+a[2]);for(let s=0;s<g;s++)n.push(d(t,i,e,o,w));break}case"bracket":{const t=Array.isArray(i.brackets)?i.brackets:i.brackets?[i.brackets]:["right"],e=s.x-2*a[3],o=s.x+s.w+2*a[1],h=s.y-2*a[0],r=s.y+s.h+2*a[2];for(const i of t){let t;switch(i){case"bottom":t=[[e,s.y+s.h],[e,r],[o,r],[o,s.y+s.h]];break;case"top":t=[[e,s.y],[e,h],[o,h],[o,s.y]];break;case"left":t=[[s.x,h],[e,h],[e,r],[s.x,r]];break;case"right":t=[[s.x+s.w,h],[o,h],[o,r],[s.x+s.w,r]]}t&&n.push(f(t,!1,w))}break}case"crossed-off":{const t=s.x,i=s.y,e=t+s.w,o=i+s.h;for(let s=b;s<g+b;s++)n.push(s%2?l(e,o,t,i,w):l(t,i,e,o,w));for(let s=b;s<g+b;s++)n.push(s%2?l(t,o,e,i,w):l(e,i,t,o,w));break}case"circle":{const t=y("double",h),i=s.w+(a[1]+a[3]),e=s.h+(a[0]+a[2]),o=s.x-a[3]+i/2,r=s.y-a[0]+e/2,c=Math.floor(g/2),u=g-2*c;for(let s=0;s<c;s++)n.push(p(o,r,i,e,t));for(let t=0;t<u;t++)n.push(p(o,r,i,e,w));break}case"highlight":{const t=y("highlight",h);r=.95*s.h;const i=s.y+s.h/2;for(let e=b;e<g+b;e++)n.push(e%2?l(s.x+s.w,i,s.x,i,t):l(s.x,i,s.x+s.w,i,t));break}}if(n.length){const s=function(t){const s=[];for(const i of t){let t="";for(const e of i.ops){const i=e.data;switch(e.op){case"move":t.trim()&&s.push(t.trim()),t=`M${i[0]} ${i[1]} `;break;case"bcurveTo":t+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":t+=`L${i[0]} ${i[1]} `}}t.trim()&&s.push(t.trim())}return s}(n),h=[],a=[];let l=0;const f=(t,s,i)=>t.setAttribute(s,i);for(const e of s){const s=document.createElementNS(c,"path");if(f(s,"d",e),f(s,"fill","none"),f(s,"stroke",i.color||"currentColor"),f(s,"stroke-width",""+r),u){const t=s.getTotalLength();h.push(t),l+=t}t.appendChild(s),a.push(s)}if(u){let t=0;for(let s=0;s<a.length;s++){const i=h[s],n=l?o*(i/l):0,r=e+t,c=a[s].style;c.strokeDashoffset=""+i,c.strokeDasharray=""+i,c.animation=`rough-notation-dash ${n}ms ease-out ${r}ms forwards`,t+=n}}}}class ${constructor(t,s){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout((()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()}),400))},this._e=t,this._config=JSON.parse(JSON.stringify(s)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(c,"svg");t.setAttribute("class","rough-annotation");const s=t.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";const i="highlight"===this._config.type;if(this._e.insertAdjacentElement(i?"beforebegin":"afterend",t),this._state="not-showing",i){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver((t=>{for(const s of t)s.contentRect&&this._resizeListener()}))),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let s=0;s<t.length;s++)if(!this.isSameRect(t[s],this._lastSizes[s]))return!0}return!1}isSameRect(t,s){const i=(t,s)=>Math.round(t)===Math.round(s);return i(t.x,s.x)&&i(t.y,s.y)&&i(t.w,s.w)&&i(t.h,s.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then((()=>{this.isShowing()&&this.show(),delete this.pendingRefresh})))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,s){let i=this._config;s&&(i=JSON.parse(JSON.stringify(this._config)),i.animate=!1);const e=this.rects();let o=0;e.forEach((t=>o+=t.w));const h=i.animationDuration||800;let n=0;for(let s=0;s<e.length;s++){const r=h*(e[s].w/o);x(t,e[s],i,n+this._animationDelay,r,this._seed),n+=r}this._lastSizes=e,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const s=this._e.getClientRects();for(let i=0;i<s.length;i++)t.push(this.svgRect(this._svg,s[i]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,s){const i=t.getBoundingClientRect();return{x:(s.x||s.left)-(i.x||i.left),y:(s.y||s.top)-(i.y||i.top),w:s.width,h:s.height}}}function S(t,s){return new $(t,s)}function N(t){let s=0;for(const i of t){const t=i;t._animationDelay=s,s+=0===t.animationDuration?0:t.animationDuration||800}const i=[...t];return{show(){for(const t of i)t.show()},hide(){for(const t of i)t.hide()}}}const O=class{constructor(i){t(this,i),this.spxNotationDidLoad=s(this,"spxNotationDidLoad",7),this.animation=!0,this.animationDuration=800,this.autoplay=!0,this.brackets="left, right",this.color="var(--spx-color-gray-100)",this.display="inline-block",this.iterations=1,this.multiline=!0,this.strokeWidth=1,this.type="underline",this.annotate=()=>{const t=[],s={animate:this.animation,animationDuration:this.animationDuration,type:"underline"===this.type?"underline":"box"===this.type?"box":"circle"===this.type?"circle":"highlight"===this.type?"highlight":"strike-through"===this.type?"strike-through":"crossed-off"===this.type?"crossed-off":"bracket",color:this.color,strokeWidth:this.strokeWidth,multiline:this.multiline,iterations:this.iterations,padding:this.padding,brackets:this.brackets};this.group?this.el.querySelectorAll("[data-spx-notation]").forEach((i=>{const e={},o=i.getAttribute("data-spx-notation").replaceAll(":","").replaceAll(", "," ").split(" ");for(let t=0;t<o.length;t+=2)e[o[t]]=isNaN(Number(o[t+1]))?o[t+1]:Number(o[t+1]);t.push(S(i,Object.assign(Object.assign({},s),e)))})):this.annotation=S(this.el.querySelector(":scope > span > span"),s),this.delay?setTimeout((()=>{this.group?N(t).show():this.annotation.show()}),this.delay):this.group?N(t).show():this.annotation.show()}}componentDidLoad(){h({el:this.el}),(this.el.querySelector(":scope > span > span")&&this.el.querySelector(":scope > span > span").innerHTML.length>0||this.group)&&this.autoplay&&this.annotate(),this.spxNotationDidLoad.emit({target:"document"})}componentWillUpdate(){n(this.el)}async clear(){this.annotation.remove()}async hide(){this.annotation.hide()}async redraw(){this.annotation&&this.annotation.remove(),this.group||this.annotate()}async show(){this.annotate()}render(){const t=r({display:a("spx-notation","display",this.display),position:"relative"}),s=r({position:"relative",display:"inline-block"});return i(e,{class:t},this.group?i("slot",null):i("span",{class:s},i("span",{class:s},i("slot",null))))}get el(){return o(this)}};export{O as spx_notation}