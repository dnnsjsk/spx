import{r as t,h as i,H as s,a as e}from"./p-08ffb50b.js";import{c as h}from"./p-c8a1ba51.js";import{s as o}from"./p-025a4802.js";const n=class{constructor(i){t(this,i),this.display="inline",this.outline="2px solid red",this.outlineFocus="blue",this.placeholder="Enter some text here.",this.placeholderColor="inherit",this.placeholderOpacity="0.7"}watchEditable(){this.editable?this.el.setAttribute("contenteditable","true"):this.el.removeAttribute("contenteditable")}onClickEnter(t){"Enter"===t.key&&t.preventDefault()}onClickDiscard(){this.el.parentElement.innerHTML=this.originalText,this.editable=!1}onClickSave(){this.editable=!1}onClickKeyup(){this.typeText(this.el.innerText)}componentDidLoad(){this.watchEditable(),this.originalText=this.el.innerText,this.typeText(this.originalText)}typeText(t){this.el.setAttribute("body-string","&"+this.name+"="+t+"eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqn"+(this.subfield?"parent"+this.type:this.type))}render(){const t=h({display:o("spx-edit","display",this.display),position:"relative","&[contenteditable]":{outline:this.outline,cursor:"text",":focus":{outlineColor:this.outlineFocus},":empty:before":{content:'"'+this.placeholder+' "',color:this.placeholderColor,opacity:this.placeholderOpacity}}});return i(s,{class:t},i("slot",null))}get el(){return e(this)}static get watchers(){return{editable:["watchEditable"]}}};export{n as spx_edit}