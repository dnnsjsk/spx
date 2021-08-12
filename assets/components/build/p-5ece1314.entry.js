import{r as t,c as i,h as s,H as o,a}from"./p-d8297fdb.js";import{b as n,d as h,e as d,s as r}from"./p-ae086eeb.js";import{s as p,g as c,t as e,a as m,h as g}from"./p-d099ae82.js";import{w as l}from"./p-2349d400.js";import{m as f}from"./p-5987a514.js";import"./p-a6008498.js";import"./p-41fc38cd.js";import"./p-07e3a719.js";const x="spx-block-docs",u=class{constructor(s){t(this,s),this.spxDocsDidLoad=i(this,"spxDocsDidLoad",7),this.bpMobile=1024,this.gap="3em",this.contentPaddingYMin=0,this.contentPaddingYMax=0,this.navigationGapMin=.2,this.navigationGapMax=.4,this.navigationHeadingTag="h1",this.navigationLinkFontSizeMax=1,this.navigationLinkFontSizeMin=.8,this.navigationLinkFontWeight="500",this.navigationLinkLetterSpacing="0",this.navigationLinkLineHeight="1.25",this.navigationLinkTextTransform="default",this.navigationPaddingYMin=0,this.navigationPaddingYMax=0,this.navigationTitleFontSizeMax=.9,this.navigationTitleFontSizeMin=.8,this.navigationTitleFontWeight="500",this.navigationTitleLetterSpacing="0",this.navigationTitleLineHeight="1.25",this.navigationTitleTextTransform="uppercase",this.navigationTitleMarginBottom=1,this.navigationTitleMarginBottomMin=1,this.navigationTitleMarginBottomMax=2,this.navigationTop="0",this.offsetMarginTop="",this.styling="fluid",this.createNavigation=()=>{""!==this.content.innerHTML&&(this.content.querySelectorAll(this.navigationHeadingTag+":not([data-spx-docs-no-navigation])").forEach(((t,i)=>{const s=(o=(o=t.innerHTML).toString().toLowerCase().trim(),[{to:"a",from:"[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]"},{to:"c",from:"[ÇĆĈČ]"},{to:"d",from:"[ÐĎĐÞ]"},{to:"e",from:"[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]"},{to:"g",from:"[ĜĞĢǴ]"},{to:"h",from:"[ĤḦ]"},{to:"i",from:"[ÌÍÎÏĨĪĮİỈỊ]"},{to:"j",from:"[Ĵ]"},{to:"ij",from:"[Ĳ]"},{to:"k",from:"[Ķ]"},{to:"l",from:"[ĹĻĽŁ]"},{to:"m",from:"[Ḿ]"},{to:"n",from:"[ÑŃŅŇ]"},{to:"o",from:"[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]"},{to:"oe",from:"[Œ]"},{to:"p",from:"[ṕ]"},{to:"r",from:"[ŔŖŘ]"},{to:"s",from:"[ßŚŜŞŠ]"},{to:"t",from:"[ŢŤ]"},{to:"u",from:"[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]"},{to:"w",from:"[ẂŴẀẄ]"},{to:"x",from:"[ẍ]"},{to:"y",from:"[ÝŶŸỲỴỶỸ]"},{to:"z",from:"[ŹŻŽ]"},{to:"-",from:"[·/_,:;']"}].forEach((t=>{o=o.replace(new RegExp(t.from,"gi"),t.to)})),o.replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""));var o;const a=this.uniqueId?s+"-"+i:s,n=document.createElement("a");t.setAttribute("data-spx-docs-index",String(i)),t.setAttribute("id",a),n.setAttribute("data-spx-docs-index",String(i)),n.setAttribute("href","#"+a),n.innerHTML=t.innerHTML,this.navigation.appendChild(n),l(n,document.createElement("li"))})),this.content.querySelectorAll(this.navigationHeadingTag+"[data-spx-docs-heading]:not([data-spx-docs-no-navigation])").forEach((t=>{const i=t.getAttribute("data-spx-docs-index"),s=document.createElement("span"),o=this.navigation.querySelector('[data-spx-docs-index="'+i+'"]').parentElement;if(s.innerHTML=t.getAttribute("data-spx-docs-heading"),this.navigation.insertBefore(s,o),this.separator&&"0"!==i){const i=document.createElement(this.separator);i.setAttribute("data-spx-docs-separator",""),i.setAttribute("data-spx-docs-content",t.getAttribute("data-spx-docs-heading")),i.innerHTML=t.getAttribute("data-spx-docs-heading"),this.content.appendChild(i),(a=t).parentNode.insertBefore(i,a)}var a})),this.el.querySelector("spx-scrollspy").reload())}}onResize(){this.mobile=window.innerWidth<this.bpMobile}componentWillLoad(){this.onResize()}componentDidLoad(){n({el:this.el}),this.createNavigation(),window.location.hash&&document.querySelector(window.location.hash)&&document.querySelector(window.location.hash).scrollIntoView(),this.spxDocsDidLoad.emit({target:"document"})}componentWillUpdate(){h(this.el)}render(){const t=d({display:this.mobile?"block":"grid",gridTemplateColumns:!this.mobile&&"minmax(0, auto) minmax(0, 1fr)",gap:r(x,"gap",this.gap),gridAutoFlow:"column"}),i=d({display:this.mobile?"none":"block",background:r(x,"navigation-background",this.navigationBackground)}),a={position:"sticky",top:r(x,"navigation-top",this.navigationTop),gridAutoRows:"max-content",height:"calc(100vh - "+this.navigationTop+")",paddingTop:p(x,"navigation-padding-y",this.navigationPaddingY,this.navigationPaddingYMin,this.navigationPaddingYMax,this.styling),paddingBottom:p(x,"navigation-padding-y",this.navigationPaddingY,this.navigationPaddingYMin,this.navigationPaddingYMax,this.styling),overflowY:"auto",ul:{display:"grid",gridGap:p(x,"navigation-gap",this.navigationGap,this.navigationGapMin,this.navigationGapMax,this.styling)},a:Object.assign(Object.assign({},c(x,"navigation-link",this.navigationLinkColor,this.navigationLinkFontSize,this.navigationLinkFontSizeMin,this.navigationLinkFontSizeMax,this.navigationLinkFontWeight,this.navigationLinkLetterSpacing,this.navigationLinkLineHeight,this.navigationLinkTextTransform,this.styling)),{width:"max-content",transitionProperty:"color",transitionDuration:r(x,"navigation-transition-duration",e),itemTransitionTimingFunction:r(x,"navigation-transition-timing-function",m)}),li:{"&:last-of-type":{marginBottom:p(x,"navigation-padding-y",this.navigationPaddingY,this.navigationPaddingYMin,this.navigationPaddingYMax,this.styling)},"&.spx-scrollspy__nav--active a":{color:r(x,"navigation-link-color-active",this.navigationLinkColorActive)}},span:Object.assign({},c(x,"navigation-title",this.navigationTitleColor,this.navigationTitleFontSize,this.navigationTitleFontSizeMin,this.navigationTitleFontSizeMax,this.navigationTitleFontWeight,this.navigationTitleLetterSpacing,this.navigationTitleLineHeight,this.navigationTitleTextTransform,this.styling)),"li + span":{display:"block",marginTop:p(x,"navigation-title-margin-bottom",this.navigationTitleMarginBottom,this.navigationTitleMarginBottomMin,this.navigationTitleMarginBottomMax,this.styling)}},n=d(f(a,{})),h={paddingTop:r(x,"content-padding",g(x,"padding-y",this.contentPaddingYMin,this.contentPaddingYMax)),paddingBottom:r(x,"content-padding",g(x,"padding-y",this.contentPaddingYMin,this.contentPaddingYMax)),"[data-spx-docs-index]:before":{display:"block",content:'" "',marginTop:"calc("+r(x,"offset-margin-top",this.offsetMarginTop)+" * -1)",height:r(x,"offset-margin-top",this.offsetMarginTop),visibility:"hidden"},"&:last-child":{marginBottom:g(x,"content-padding-y",this.contentPaddingYMin,this.contentPaddingYMax)}},l=d(f(h,{}));return s(o,{class:t},s("div",{class:i},s("spx-scrollspy",{display:"grid","url-change":!0,scrolling:this.scrolling,class:n},s("ul",{ref:t=>this.navigation=t}))),s("div",{ref:t=>this.content=t,class:l},s("slot",null)))}get el(){return a(this)}};export{u as spx_block_docs}