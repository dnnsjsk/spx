import{r as t,c as i,h as s,H as h,g as o}from"./p-6c77ad03.js";import{c as e}from"./p-4353a1fe.js";import{s as r}from"./p-9f54bbf7.js";import{s as a}from"./p-d12de105.js";import{f as n,c as l,t as f,a as c}from"./p-7ef7a29b.js";import{g as d}from"./p-7f0894df.js";const u="spx-share",m=class{constructor(s){t(this,s),this.spxShareDidLoad=i(this,"spxShareDidLoad",7),this.fontSize=n,this.fontSizeMin=1,this.fontSizeMax=1.4,this.itemBorderRadius=l,this.itemFilterHover="brightness(110%) saturate(120%)",this.itemGap="0.5em",this.itemGapMin=.4,this.itemGapMax=1,this.itemPadding="0.5em",this.itemPaddingMin=.5,this.itemPaddingMax=1.2,this.itemSize="1em",this.itemSizeMin=.7,this.itemSizeMax=1,this.itemTransitionDuration=f,this.itemTransitionTimingFunction=c,this.styling="default",this.target="_blank",this.theme="default"}componentDidLoad(){d(this.el),this.location=location.href,this.spxShareDidLoad.emit({target:"document"})}async reload(){this.componentDidLoad()}render(){const t=("default"===this.styling||"fluid"===this.styling)&&e({fontSize:r(u,"font-size",this.fontSize),display:"grid",gridAutoFlow:this.vertical?"row":"column",gridAutoColumns:!this.vertical&&"max-content",gridAutoRows:this.vertical&&"max-content",gridGap:a(u,"item-gap",this.itemGap,this.itemGapMin,this.itemGapMax,this.styling)}),i="default"===this.styling||"fluid"===this.styling?e({display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"content-box",cursor:"pointer",width:a(u,"item-size",this.itemSize,this.itemSizeMin,this.itemSizeMax,this.styling),height:a(u,"item-size",this.itemSize,this.itemSizeMin,this.itemSizeMax,this.styling),padding:a(u,"item-padding",this.itemPadding,this.itemPaddingMin,this.itemPaddingMax,this.styling),borderRadius:r(u,"item-border-radius",this.itemBorderRadius),color:r(u,"item-color",this.itemColor),background:r(u,"item-background",this.itemBackground),transitionProperty:"filter",transitionDuration:r(u,"item-transition-duration",this.itemTransitionDuration),transitionTimingFunction:r(u,"item-transition-timing-function",this.itemTransitionTimingFunction),"&:hover":{filter:r(u,"item-filter-hover",this.itemFilterHover)},svg:{height:"100%"}}):this.classItem,o=e({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#1877F2",color:"outline"===this.theme||"minimal"===this.theme?"#1877F2":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #1877F2"}),n=e({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#1DA1F2",color:"outline"===this.theme||"minimal"===this.theme?"#1DA1F2":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #1DA1F2"}),l=e({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#c6c6c6",color:"outline"===this.theme||"minimal"===this.theme?"#c6c6c6":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #c6c6c6"}),f=e({background:"default"!==this.theme||this.itemBackground?"default"===this.theme&&this.itemBackground?this.itemBackground:null:"#25D366",color:"outline"===this.theme||"minimal"===this.theme?"#25D366":this.itemColor?null:"#ffffff",border:"outline"===this.theme&&"1px solid #25D366"});return s(h,{class:t},s("a",{class:e([i,o]),target:this.target,href:"https://www.facebook.com/sharer/sharer.php?u="+this.location},s("spx-icon",{icon:"logo-facebook"})),s("a",{class:e([i,n]),target:this.target,href:"http://www.twitter.com/share?url="+this.location},s("spx-icon",{icon:"logo-twitter"})),s("a",{class:e([i,f]),target:this.target,href:"https://web.whatsapp.com/send?text="+this.location},s("spx-icon",{icon:"logo-whatsapp"})),s("a",{class:e([i,l]),target:this.target,href:"mailto:?body="+this.location},s("spx-icon",{icon:"mail"})))}get el(){return o(this)}};export{m as spx_share}