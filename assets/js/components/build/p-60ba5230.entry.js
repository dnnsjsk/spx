import{r as s,c as t,h as o,H as e,a as i}from"./p-08ffb50b.js";import{c as a}from"./p-c8a1ba51.js";import{s as r}from"./p-025a4802.js";import"./p-edbeee69.js";import"./p-0a7dbbed.js";import"./p-a2b66e39.js";import{g as p}from"./p-947bf368.js";import{o as d}from"./p-de0f74be.js";const m=class{constructor(o){s(this,o),this.spxOffsetDidLoad=t(this,"spxOffsetDidLoad",7),this.display="block",this.target="header"}onResize(){d(this.el,this.target)}componentDidLoad(){p(this.el),this.onResize(),this.spxOffsetDidLoad.emit({target:"document"})}componentDidUpdate(){this.onResize()}async reload(){this.componentDidLoad()}render(){const s=a({display:r("spx-offset","display",this.display)});return o(e,{class:s},o("slot",null))}get el(){return i(this)}};export{m as spx_offset}