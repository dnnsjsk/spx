import{r as s,c as t,h as i,a as h}from"./p-509d707c.js";import{k as r}from"./p-a922d5af.js";import{g as o}from"./p-580e945a.js";import{g as a}from"./p-2a7439a1.js";import"./p-ddbac711.js";const l=class{constructor(i){s(this,i),this.spxScrollspyDidLoad=t(this,"spxScrollspyDidLoad",7),this.links=[],this.navClass="spx-scrollspy__nav--active",this.target="a",this.threshold=.5,this.rootMargin="0px",this.urlChange=!1}componentDidLoad(){this.init(),r({el:this.el}),this.spxScrollspyDidLoad.emit({target:"document"})}componentWillUpdate(){o(this.el)}init(){var s;this.links=[],null===(s=this.observer)||void 0===s||s.disconnect(),this.el.querySelectorAll(this.target).forEach((s=>{this.links.push(s.getAttribute("href"))})),this.observer=new IntersectionObserver((s=>{s.forEach((s=>{if(s.isIntersecting){const t=s.target.id;this.el.querySelectorAll(`${this.target}:not([href="#${t}"])`).forEach((s=>{s.classList.remove(this.navClass)})),this.el.querySelector(`[href="#${t}"]`).classList.add(this.navClass),this.urlChange&&history.replaceState(null,null,`#${t}`)}}))}),{rootMargin:this.rootMargin,threshold:this.threshold}),a(this.el).querySelectorAll(this.links.toString()).forEach((s=>{s&&this.observer.observe(s)}))}render(){return i("slot",null)}get el(){return h(this)}};l.style=":host{display:var(--spx-scrollspy-display, block)}";export{l as spx_scrollspy}