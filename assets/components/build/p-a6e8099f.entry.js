import{r as t,c as s,h as i,H as o,a as h}from"./p-509d707c.js";import{b as e}from"./p-d794404b.js";import{g as a}from"./p-580e945a.js";const l=class{constructor(i){t(this,i),this.spxClassToggleDidLoad=s(this,"spxClassToggleDidLoad",7),this.inner=!0,this.target="*",this.toggle="spx-class-toggle--active",this.createToggleArray=()=>{this.classesArray=this.toggle.replace(/ /g,",").split(",")},this.toggleClasses=()=>{this.classesArray.forEach((t=>{(this.inner?this.el:document).querySelectorAll(this.target).forEach((s=>{s.classList.contains(t)?(s.classList.remove(t),this.local&&localStorage.removeItem(this.local)):(s.classList.add(t),this.local&&localStorage.setItem(this.local,String(!0)))}))}))},this.addClasses=()=>{this.classesArray.forEach((t=>{(this.inner?this.el:document).querySelectorAll(this.target).forEach((s=>{s.classList.contains(t)?s.classList.remove(t):s.classList.add(t)}))}))}}toggleUpdate(){this.createToggleArray()}componentWillLoad(){this.createToggleArray(),this.local&&localStorage.getItem(this.local)&&this.addClasses()}componentDidLoad(){e({el:this.el}),this.spxClassToggleDidLoad.emit({target:"document"})}componentWillUpdate(){a(this.el)}render(){return i(o,{onClick:this.toggleClasses},i("slot",null))}get el(){return h(this)}static get watchers(){return{toggle:["toggleUpdate"]}}};l.style=':host{display:setVar("class-toggle", "display", block)}';export{l as spx_class_toggle}