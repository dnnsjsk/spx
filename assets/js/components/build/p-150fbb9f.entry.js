import{r as s,h as t,H as r,a as o}from"./p-e1defc51.js";import"./p-a1c5e2d4.js";import{s as c}from"./p-3333ff2d.js";const e=class{constructor(t){s(this,t),this.createSnackbar=()=>{const s=document.createElement("spx-snackbar");document.body.appendChild(s),((s,t,r)=>{const o=s.querySelectorAll(r);for(let s,e=0,n=t.attributes,a=n.length;e<a;e++)s=n[e],c(s.nodeName,r)&&o.forEach(t=>{t.setAttribute(s.nodeName.replace(r+"-",""),s.nodeValue)})})(document,this.el,"spx-snackbar")}}render(){return t(r,{onClick:this.createSnackbar},t("slot",null))}get el(){return o(this)}};export{e as spx_snackbar_toggle}