import{r as t,c as s,h as i,H as e,a as h}from"./p-509d707c.js";import{k as o}from"./p-a922d5af.js";import{g as n}from"./p-580e945a.js";import{i as r}from"./p-ddbac711.js";const a="http://www.w3.org/2000/svg";class c{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function u(t,s,i,e,h){return{type:"path",ops:b(t,s,i,e,h)}}function f(t,s,i){const e=(t||[]).length;if(e>2){const h=[];for(let s=0;s<e-1;s++)h.push(...b(t[s][0],t[s][1],t[s+1][0],t[s+1][1],i));return s&&h.push(...b(t[e-1][0],t[e-1][1],t[0][0],t[0][1],i)),{type:"path",ops:h}}return 2===e?u(t[0][0],t[0][1],t[1][0],t[1][1],i):{type:"path",ops:[]}}function l(t,s,i,e,h){return function(t,s){return f(t,!0,s)}([[t,s],[t+i,s],[t+i,s+e],[t,s+e]],h)}function d(t,s,i,e,h){return function(t,s,i,e){const[h,o]=k(e.increment,t,s,e.rx,e.ry,1,e.increment*g(.1,g(.4,1,i),i),i);let n=M(h,null,i);if(!i.disableMultiStroke){const[h]=k(e.increment,t,s,e.rx,e.ry,1.5,0,i),o=M(h,null,i);n=n.concat(o)}return{estimatedPoints:o,opset:{type:"path",ops:n}}}(t,s,h,function(t,s,i){const e=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(s/2,2))/2)),h=Math.max(i.curveStepCount,i.curveStepCount/Math.sqrt(200)*e),o=2*Math.PI/h;let n=Math.abs(t/2),r=Math.abs(s/2);const a=1-i.curveFitting;return n+=m(n*a,i),r+=m(r*a,i),{increment:o,rx:n,ry:r}}(i,e,h)).opset}function p(t){return t.randomizer||(t.randomizer=new c(t.seed||0)),t.randomizer.next()}function g(t,s,i,e=1){return i.roughness*e*(p(i)*(s-t)+t)}function m(t,s,i=1){return g(-t,t,s,i)}function b(t,s,i,e,h,o=!1){const n=o?h.disableMultiStrokeFill:h.disableMultiStroke,r=w(t,s,i,e,h,!0,!1);if(n)return r;const a=w(t,s,i,e,h,!0,!0);return r.concat(a)}function w(t,s,i,e,h,o,n){const r=Math.pow(t-i,2)+Math.pow(s-e,2),a=Math.sqrt(r);let c=1;c=a<200?1:a>500?.4:-.0016668*a+1.233334;let u=h.maxRandomnessOffset||0;u*u*100>r&&(u=a/10);const f=u/2,l=.2+.2*p(h);let d=h.bowing*h.maxRandomnessOffset*(e-s)/200,g=h.bowing*h.maxRandomnessOffset*(t-i)/200;d=m(d,h,c),g=m(g,h,c);const b=[],w=()=>m(f,h,c),M=()=>m(u,h,c);return o&&b.push(n?{op:"move",data:[t+w(),s+w()]}:{op:"move",data:[t+m(u,h,c),s+m(u,h,c)]}),b.push(n?{op:"bcurveTo",data:[d+t+(i-t)*l+w(),g+s+(e-s)*l+w(),d+t+2*(i-t)*l+w(),g+s+2*(e-s)*l+w(),i+w(),e+w()]}:{op:"bcurveTo",data:[d+t+(i-t)*l+M(),g+s+(e-s)*l+M(),d+t+2*(i-t)*l+M(),g+s+2*(e-s)*l+M(),i+M(),e+M()]}),b}function M(t,s,i){const e=t.length,h=[];if(e>3){const o=[],n=1-i.curveTightness;h.push({op:"move",data:[t[1][0],t[1][1]]});for(let s=1;s+2<e;s++){const i=t[s];o[0]=[i[0],i[1]],o[1]=[i[0]+(n*t[s+1][0]-n*t[s-1][0])/6,i[1]+(n*t[s+1][1]-n*t[s-1][1])/6],o[2]=[t[s+1][0]+(n*t[s][0]-n*t[s+2][0])/6,t[s+1][1]+(n*t[s][1]-n*t[s+2][1])/6],o[3]=[t[s+1][0],t[s+1][1]],h.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(s&&2===s.length){const t=i.maxRandomnessOffset;h.push({op:"lineTo",data:[s[0]+m(t,i),s[1]+m(t,i)]})}}else 3===e?(h.push({op:"move",data:[t[1][0],t[1][1]]}),h.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===e&&h.push(...b(t[0][0],t[0][1],t[1][0],t[1][1],i));return h}function k(t,s,i,e,h,o,n,r){const a=[],c=[],u=m(.5,r)-Math.PI/2;c.push([m(o,r)+s+.9*e*Math.cos(u-t),m(o,r)+i+.9*h*Math.sin(u-t)]);for(let n=u;n<2*Math.PI+u-.01;n+=t){const t=[m(o,r)+s+e*Math.cos(n),m(o,r)+i+h*Math.sin(n)];a.push(t),c.push(t)}return c.push([m(o,r)+s+e*Math.cos(u+2*Math.PI+.5*n),m(o,r)+i+h*Math.sin(u+2*Math.PI+.5*n)]),c.push([m(o,r)+s+.98*e*Math.cos(u+n),m(o,r)+i+.98*h*Math.sin(u+n)]),c.push([m(o,r)+s+.9*e*Math.cos(u+.5*n),m(o,r)+i+.9*h*Math.sin(u+.5*n)]),[c,a]}function v(t,s){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:s}}function y(t,s,i,e,h,o){const n=[];let r=i.strokeWidth||2;const c=function(t){const s=t.padding;if(s||0===s){if("number"==typeof s)return[s,s,s,s];if(Array.isArray(s)){const t=s;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(i),p=void 0===i.animate||!!i.animate,g=i.iterations||2,m=i.rtl?1:0,b=v("single",o);switch(i.type){case"underline":{const t=s.y+s.h+c[2];for(let i=m;i<g+m;i++)n.push(i%2?u(s.x+s.w,t,s.x,t,b):u(s.x,t,s.x+s.w,t,b));break}case"strike-through":{const t=s.y+s.h/2;for(let i=m;i<g+m;i++)n.push(i%2?u(s.x+s.w,t,s.x,t,b):u(s.x,t,s.x+s.w,t,b));break}case"box":{const t=s.x-c[3],i=s.y-c[0],e=s.w+(c[1]+c[3]),h=s.h+(c[0]+c[2]);for(let s=0;s<g;s++)n.push(l(t,i,e,h,b));break}case"bracket":{const t=Array.isArray(i.brackets)?i.brackets:i.brackets?[i.brackets]:["right"],e=s.x-2*c[3],h=s.x+s.w+2*c[1],o=s.y-2*c[0],r=s.y+s.h+2*c[2];for(const i of t){let t;switch(i){case"bottom":t=[[e,s.y+s.h],[e,r],[h,r],[h,s.y+s.h]];break;case"top":t=[[e,s.y],[e,o],[h,o],[h,s.y]];break;case"left":t=[[s.x,o],[e,o],[e,r],[s.x,r]];break;case"right":t=[[s.x+s.w,o],[h,o],[h,r],[s.x+s.w,r]]}t&&n.push(f(t,!1,b))}break}case"crossed-off":{const t=s.x,i=s.y,e=t+s.w,h=i+s.h;for(let s=m;s<g+m;s++)n.push(s%2?u(e,h,t,i,b):u(t,i,e,h,b));for(let s=m;s<g+m;s++)n.push(s%2?u(t,h,e,i,b):u(e,i,t,h,b));break}case"circle":{const t=v("double",o),i=s.w+(c[1]+c[3]),e=s.h+(c[0]+c[2]),h=s.x-c[3]+i/2,r=s.y-c[0]+e/2,a=Math.floor(g/2),u=g-2*a;for(let s=0;s<a;s++)n.push(d(h,r,i,e,t));for(let t=0;t<u;t++)n.push(d(h,r,i,e,b));break}case"highlight":{const t=v("highlight",o);r=.95*s.h;const i=s.y+s.h/2;for(let e=m;e<g+m;e++)n.push(e%2?u(s.x+s.w,i,s.x,i,t):u(s.x,i,s.x+s.w,i,t));break}}if(n.length){const s=function(t){const s=[];for(const i of t){let t="";for(const e of i.ops){const i=e.data;switch(e.op){case"move":t.trim()&&s.push(t.trim()),t=`M${i[0]} ${i[1]} `;break;case"bcurveTo":t+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":t+=`L${i[0]} ${i[1]} `}}t.trim()&&s.push(t.trim())}return s}(n),o=[],c=[];let u=0;const f=(t,s,i)=>t.setAttribute(s,i);for(const e of s){const s=document.createElementNS(a,"path");if(f(s,"d",e),f(s,"fill","none"),f(s,"stroke",i.color||"currentColor"),f(s,"stroke-width",""+r),p){const t=s.getTotalLength();o.push(t),u+=t}t.appendChild(s),c.push(s)}if(p){let t=0;for(let s=0;s<c.length;s++){const i=o[s],n=u?h*(i/u):0,r=e+t,a=c[s].style;a.strokeDashoffset=""+i,a.strokeDasharray=""+i,a.animation=`rough-notation-dash ${n}ms ease-out ${r}ms forwards`,t+=n}}}}class x{constructor(t,s){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout((()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()}),400))},this._e=t,this._config=JSON.parse(JSON.stringify(s)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(a,"svg");t.setAttribute("class","rough-annotation");const s=t.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";const i="highlight"===this._config.type;if(this._e.insertAdjacentElement(i?"beforebegin":"afterend",t),this._state="not-showing",i){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver((t=>{for(const s of t)s.contentRect&&this._resizeListener()}))),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let s=0;s<t.length;s++)if(!this.isSameRect(t[s],this._lastSizes[s]))return!0}return!1}isSameRect(t,s){const i=(t,s)=>Math.round(t)===Math.round(s);return i(t.x,s.x)&&i(t.y,s.y)&&i(t.w,s.w)&&i(t.h,s.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then((()=>{this.isShowing()&&this.show(),delete this.pendingRefresh})))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,s){let i=this._config;s&&(i=JSON.parse(JSON.stringify(this._config)),i.animate=!1);const e=this.rects();let h=0;e.forEach((t=>h+=t.w));const o=i.animationDuration||800;let n=0;for(let s=0;s<e.length;s++){const r=o*(e[s].w/h);y(t,e[s],i,n+this._animationDelay,r,this._seed),n+=r}this._lastSizes=e,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const s=this._e.getClientRects();for(let i=0;i<s.length;i++)t.push(this.svgRect(this._svg,s[i]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,s){const i=t.getBoundingClientRect();return{x:(s.x||s.left)-(i.x||i.left),y:(s.y||s.top)-(i.y||i.top),w:s.width,h:s.height}}}function $(t,s){return new x(t,s)}function S(t){let s=0;for(const i of t){const t=i;t._animationDelay=s,s+=0===t.animationDuration?0:t.animationDuration||800}const i=[...t];return{show(){for(const t of i)t.show()},hide(){for(const t of i)t.hide()}}}const N=class{constructor(i){t(this,i),this.spxNotationDidLoad=s(this,"spxNotationDidLoad",7),this.keyframes="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",this.animation=!0,this.animationDuration=800,this.autoplay=!0,this.brackets="left, right",this.color="var(--spx-color-gray-100)",this.iterations=1,this.multiline=!0,this.strokeWidth=1,this.type="underline",this.annotate=()=>{const t=[],s={animate:this.animation,animationDuration:this.animationDuration,type:"underline"===this.type?"underline":"box"===this.type?"box":"circle"===this.type?"circle":"highlight"===this.type?"highlight":"strike-through"===this.type?"strike-through":"crossed-off"===this.type?"crossed-off":"bracket",color:this.color,strokeWidth:this.strokeWidth,multiline:this.multiline,iterations:this.iterations,padding:this.padding,brackets:this.brackets};this.group?this.el.querySelectorAll("[data-spx-notation]").forEach((i=>{const e={},h=i.getAttribute("data-spx-notation").replace(/:/g,"").replace(/, /g," ").split(" ");for(let t=0;t<h.length;t+=2)e[h[t]]=isNaN(Number(h[t+1]))?h[t+1]:Number(h[t+1]);t.push($(i,Object.assign(Object.assign({},s),e)))})):this.annotation=$(this.el.querySelector("span > span"),s),this.delay?setTimeout((()=>{this.group?S(t).show():this.annotation.show()}),this.delay):this.group?S(t).show():this.annotation.show()}}componentDidLoad(){(this.el.querySelector("span > span")&&this.el.querySelector("span > span").innerHTML.length>0||this.group)&&this.autoplay&&this.annotate(),o({el:this.el}),this.spxNotationDidLoad.emit({target:"document"})}componentWillUpdate(){n(this.el)}async clear(){this.annotation.remove()}async hide(){this.annotation.hide()}async redraw(){this.annotation&&this.annotation.remove(),this.group||this.annotate()}async show(){this.annotate()}render(){return i(e,null,r(this.el)&&i("style",null,this.keyframes),this.group?i("slot",null):i("span",null,i("span",null,i("slot",null))))}get el(){return h(this)}};N.style=":host{display:block}";export{N as spx_notation}