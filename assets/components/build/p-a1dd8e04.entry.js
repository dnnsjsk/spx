import{r as t,h as e,a as i}from"./p-509d707c.js";import{s,k as o}from"./p-a922d5af.js";const r=class{constructor(e){t(this,e),this.outline="2px solid red",this.outlineFocus="blue",this.placeholder="Enter some text here.",this.placeholderColor="inherit",this.placeholderOpacity="0.7",this.type="acf",this.typeText=t=>{this.el.setAttribute("body-string","&"+this.name+"="+t+spx.nonce+(this.subfield?"parent"+this.type:this.type))}}attributesChanged(t,e,i){s(this.el,"spx-edit",i,t)}onKeyDown(t){"Enter"===t.key&&t.preventDefault()}onClickDiscard(){this.el.parentElement.innerHTML=this.originalText,this.el.remove()}onClickSave(){this.text=this.container.innerText,this.el.parentElement.innerHTML=this.text,this.el.remove()}onClickKeyup(){this.typeText(this.container.innerText)}componentDidLoad(){o({el:this.el,tag:"spx-edit",attributes:["outline","outlineFocus","placeholderColor","placeholderOpacity"]}),this.originalText=this.text,this.typeText(this.text)}render(){return e("div",{class:"inner",ref:t=>this.container=t,contenteditable:this.editable,"data-placeholder":this.placeholder,innerHTML:this.text})}get el(){return i(this)}static get watchers(){return{outline:["attributesChanged"],outlineFocus:["attributesChanged"],placeholderColor:["attributesChanged"],placeholderOpacity:["attributesChanged"]}}};r.style=":host{display:var(--spx-edit-display, inline-block)}.inner[contenteditable]{outline:var(--spx-edit-outline, 2px solid red);cursor:text}.inner[contenteditable]:focus{outline-color:var(--spx-edit-outline-focus, blue)}.inner[contenteditable]:empty:before{content:attr(data-placeholder);color:var(--spx-edit-placeholder-color, inherit);opacity:var(--spx-edit-placeholder-opacity, 0.7)}";export{r as spx_edit}