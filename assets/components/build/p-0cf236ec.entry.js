import{r as t,c as i,h as s,H as h,a as o}from"./p-d8297fdb.js";import{b as e,d as a,e as r,s as n}from"./p-ae086eeb.js";import{d as l,c as d,b as c,t as f,a as u,s as m,f as p}from"./p-d099ae82.js";import{c as g}from"./p-70de8434.js";import{B as b}from"./p-afec7fc6.js";import"./p-a6008498.js";const w="spx-share",x=class{constructor(s){t(this,s),this.spxShareDidLoad=i(this,"spxShareDidLoad",7),this.display=l,this.fontSize=d,this.fontSizeMax=1.4,this.fontSizeMin=1,this.itemBorderRadius=c,this.itemFilterHover="brightness(110%) saturate(120%)",this.itemGap="0.5em",this.itemGapMin=.4,this.itemGapMax=1,this.itemPadding="0.5em",this.itemPaddingMin=.5,this.itemPaddingMax=1.2,this.itemSize="1em",this.itemSizeMin=.7,this.itemSizeMax=1,this.itemTransitionDuration=f,this.itemTransitionTimingFunction=u,this.styling="default",this.target="_blank",this.theme="default"}componentDidLoad(){e({el:this.el}),this.spxShareDidLoad.emit({target:"document"})}componentWillUpdate(){a(this.el)}render(){const{css:t}=g(this.el.shadowRoot),i=r({display:n(w,"display",this.display)}),o=("default"===this.styling||"fluid"===this.styling)&&t({fontSize:n(w,"font-size",this.fontSize),display:"grid",gridAutoFlow:this.vertical?"row":"column",gridAutoColumns:!this.vertical&&"max-content",gridAutoRows:this.vertical&&"max-content",gridGap:m(w,"item-gap",this.itemGap,this.itemGapMin,this.itemGapMax,this.styling)}),e="default"===this.styling||"fluid"===this.styling?t(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"content-box",cursor:"pointer",width:m(w,"item-size",this.itemSize,this.itemSizeMin,this.itemSizeMax,this.styling),height:m(w,"item-size",this.itemSize,this.itemSizeMin,this.itemSizeMax,this.styling),padding:m(w,"item-padding",this.itemPadding,this.itemPaddingMin,this.itemPaddingMax,this.styling),borderRadius:n(w,"item-border-radius",this.itemBorderRadius),color:n(w,"item-color",this.itemColor),background:n(w,"item-background",this.itemBackground),transitionProperty:"filter, box-shadow",transitionDuration:n(w,"item-transition-duration",this.itemTransitionDuration),transitionTimingFunction:n(w,"item-transition-timing-function",this.itemTransitionTimingFunction),"&:hover":{filter:n(w,"item-filter-hover",this.itemFilterHover)},svg:{height:"100%"}},p)):this.classItem,a=t({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#1877F2",color:"outline"===this.theme||"minimal"===this.theme?"#1877F2":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #1877F2"}),l=t({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#1DA1F2",color:"outline"===this.theme||"minimal"===this.theme?"#1DA1F2":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #1DA1F2"}),d=t({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#c6c6c6",color:"outline"===this.theme||"minimal"===this.theme?"#c6c6c6":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #c6c6c6"}),c=t({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#25D366",color:"outline"===this.theme||"minimal"===this.theme?"#25D366":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #25D366"});return s(h,{class:i},s("div",{class:o},[{className:a,href:"https://www.facebook.com/sharer/sharer.php?u=",icon:"logo-facebook"},{className:l,href:"https://www.twitter.com/share?url=",icon:"logo-twitter"},{className:c,href:"https://web.whatsapp.com/send?text=",icon:"logo-whatsapp"},{className:d,href:"mailto:?body=",icon:"mail"}].map((i=>s(b,{class:t([e,i.className]),href:i.href+window.location.href,target:this.target},s("spx-icon",{icon:i.icon}))))))}get el(){return o(this)}};export{x as spx_share}