import{r as s,c as t,h as r,H as i,g as o}from"./p-dfe31926.js";import{g as a,c as e}from"./p-9403a412.js";import{s as p}from"./p-37718fa8.js";import{s as n}from"./p-79354b51.js";import"./p-e862da1c.js";const h=class{constructor(r){s(this,r),this.spxGroupDidLoad=t(this,"spxGroupDidLoad",7),this.display="block"}componentDidLoad(){a(this.el),this.forwardAttributes(),new MutationObserver((s=>{s.forEach((()=>{this.forwardAttributes()}))})).observe(this.el,{attributes:!0}),this.spxGroupDidLoad.emit({target:"document"})}forwardAttributes(){const s=(s=>Array.prototype.slice.call(this.el.querySelectorAll("*")).filter((function(t){return t.tagName.match(s)})))(this.target?new RegExp(this.target,"i"):/^spx/i);for(let t,r=0,i=this.el.attributes,o=i.length;r<o;r++)t=i[r],n(t.nodeName,"g-")&&s.forEach((s=>{s.setAttribute(t.nodeName.substring(2),t.nodeValue)}))}async reload(){this.componentDidLoad()}render(){const s=e({display:p("spx-group","display",this.display)});return r(i,{class:s},r("slot",null))}get el(){return o(this)}};export{h as spx_group}