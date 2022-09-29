import{c as e,a as t}from"./p-3e8ff66b.js";var n=e((function(e){
/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
e.exports=function(){var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,i=Object.getOwnPropertyDescriptor,o=Object.freeze,a=Object.seal,l=Object.create,s="undefined"!=typeof Reflect&&Reflect,c=s.apply,f=s.construct;c||(c=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),a||(a=function(e){return e}),f||(f=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var u,m=k(Array.prototype.forEach),d=k(Array.prototype.pop),p=k(Array.prototype.push),h=k(String.prototype.toLowerCase),g=k(String.prototype.match),y=k(String.prototype.replace),v=k(String.prototype.indexOf),b=k(String.prototype.trim),x=k(RegExp.prototype.test),w=(u=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return f(u,t)});function k(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return c(e,t,r)}}function S(e,r){t&&t(e,null);for(var i=r.length;i--;){var o=r[i];if("string"==typeof o){var a=h(o);a!==o&&(n(r)||(r[i]=a),o=a)}e[o]=!0}return e}function A(t){var n=l(null),r=void 0;for(r in t)c(e,t,[r])&&(n[r]=t[r]);return n}function z(e,t){for(;null!==e;){var n=i(e,t);if(n){if(n.get)return k(n.get);if("function"==typeof n.value)return k(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var T=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),j=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),F=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=o(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),D=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),R=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),L=o(["#text"]),M=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),E=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),N=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),q=a(/<%[\s\S]*|[\s\S]*%>/gm),I=a(/^data-[\-\w.\u00B7-\uFFFF]/),C=a(/^aria-[\-\w]+$/),G=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),U=a(/^(?:\w+script|data):/i),H=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function W(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var $=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":P(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$(),n=function(t){return e(t)};if(n.version="2.3.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,s=t.Node,c=t.Element,f=t.NodeFilter,u=t.NamedNodeMap,k=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,Y=t.Text,J=t.Comment,K=t.DOMParser,Q=t.trustedTypes,X=c.prototype,Z=z(X,"cloneNode"),ee=z(X,"nextSibling"),te=z(X,"childNodes"),ne=z(X,"parentNode");if("function"==typeof l){var re=i.createElement("template");re.content&&re.content.ownerDocument&&(i=re.content.ownerDocument)}var ie=V(Q,r),oe=ie&&Be?ie.createHTML(""):"",ae=i.implementation,le=i.createNodeIterator,se=i.createDocumentFragment,ce=i.getElementsByTagName,fe=r.importNode,ue={};try{ue=A(i).documentMode?i.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof ne&&ae&&void 0!==ae.createHTMLDocument&&9!==ue;var de=N,pe=q,he=I,ge=C,ye=U,ve=H,be=G,xe=null,we=S({},[].concat(W(T),W(j),W(F),W(D),W(L))),ke=null,Se=S({},[].concat(W(M),W(E),W(_),W(B))),Ae=null,ze=null,Te=!0,je=!0,Fe=!1,Oe=!1,De=!1,Re=!1,Le=!1,Me=!1,Ee=!1,_e=!0,Be=!1,Ne=!0,qe=!0,Ie=!1,Ce={},Ge=null,Ue=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),He=null,Pe=S({},["audio","video","img","source","image","track"]),We=null,$e=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Ye="http://www.w3.org/2000/svg",Je="http://www.w3.org/1999/xhtml",Ke=Je,Qe=!1,Xe=void 0,Ze=["application/xhtml+xml","text/html"],et="text/html",tt=void 0,nt=null,rt=i.createElement("form"),it=function(e){nt&&nt===e||(e&&"object"===(void 0===e?"undefined":P(e))||(e={}),e=A(e),xe="ALLOWED_TAGS"in e?S({},e.ALLOWED_TAGS):we,ke="ALLOWED_ATTR"in e?S({},e.ALLOWED_ATTR):Se,We="ADD_URI_SAFE_ATTR"in e?S(A($e),e.ADD_URI_SAFE_ATTR):$e,He="ADD_DATA_URI_TAGS"in e?S(A(Pe),e.ADD_DATA_URI_TAGS):Pe,Ge="FORBID_CONTENTS"in e?S({},e.FORBID_CONTENTS):Ue,Ae="FORBID_TAGS"in e?S({},e.FORBID_TAGS):{},ze="FORBID_ATTR"in e?S({},e.FORBID_ATTR):{},Ce="USE_PROFILES"in e&&e.USE_PROFILES,Te=!1!==e.ALLOW_ARIA_ATTR,je=!1!==e.ALLOW_DATA_ATTR,Fe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Oe=e.SAFE_FOR_TEMPLATES||!1,De=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Ee=e.RETURN_DOM_FRAGMENT||!1,_e=!1!==e.RETURN_DOM_IMPORT,Be=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,Ne=!1!==e.SANITIZE_DOM,qe=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,Ke=e.NAMESPACE||Je,Xe=Xe=-1===Ze.indexOf(e.PARSER_MEDIA_TYPE)?et:e.PARSER_MEDIA_TYPE,tt="application/xhtml+xml"===Xe?function(e){return e}:h,Oe&&(je=!1),Ee&&(Me=!0),Ce&&(xe=S({},[].concat(W(L))),ke=[],!0===Ce.html&&(S(xe,T),S(ke,M)),!0===Ce.svg&&(S(xe,j),S(ke,E),S(ke,B)),!0===Ce.svgFilters&&(S(xe,F),S(ke,E),S(ke,B)),!0===Ce.mathMl&&(S(xe,D),S(ke,_),S(ke,B))),e.ADD_TAGS&&(xe===we&&(xe=A(xe)),S(xe,e.ADD_TAGS)),e.ADD_ATTR&&(ke===Se&&(ke=A(ke)),S(ke,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&S(We,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Ge===Ue&&(Ge=A(Ge)),S(Ge,e.FORBID_CONTENTS)),qe&&(xe["#text"]=!0),De&&S(xe,["html","head","body"]),xe.table&&(S(xe,["tbody"]),delete Ae.tbody),o&&o(e),nt=e)},ot=S({},["mi","mo","mn","ms","mtext"]),at=S({},["foreignobject","desc","title","annotation-xml"]),lt=S({},j);S(lt,F),S(lt,O);var st=S({},D);S(st,R);var ct=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Je,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Ye)return t.namespaceURI===Je?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||ot[r]):Boolean(lt[n]);if(e.namespaceURI===Ve)return t.namespaceURI===Je?"math"===n:t.namespaceURI===Ye?"math"===n&&at[r]:Boolean(st[n]);if(e.namespaceURI===Je){if(t.namespaceURI===Ye&&!at[r])return!1;if(t.namespaceURI===Ve&&!ot[r])return!1;var i=S({},["title","style","font","a","script"]);return!st[n]&&(i[n]||!lt[n])}return!1},ft=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=oe}catch(t){e.remove()}}},ut=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(Me||Ee)try{ft(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},mt=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Xe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(Ke===Je)try{t=(new K).parseFromString(o,Xe)}catch(e){}if(!t||!t.documentElement){t=ae.createDocument(Ke,"template",null);try{t.documentElement.innerHTML=Qe?"":o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),Ke===Je?ce.call(t,De?"html":"body")[0]:De?t.documentElement:a},dt=function(e){return le.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},pt=function(e){return!(e instanceof Y||e instanceof J||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof k&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ht=function(e){return"object"===(void 0===s?"undefined":P(s))?e instanceof s:e&&"object"===(void 0===e?"undefined":P(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},gt=function(e,t,r){me[e]&&m(me[e],(function(e){e.call(n,t,r,nt)}))},yt=function(e){var t=void 0;if(gt("beforeSanitizeElements",e,null),pt(e))return ft(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return ft(e),!0;var r=tt(e.nodeName);if(gt("uponSanitizeElement",e,{tagName:r,allowedTags:xe}),!ht(e.firstElementChild)&&(!ht(e.content)||!ht(e.content.firstElementChild))&&x(/<[/\w]/g,e.innerHTML)&&x(/<[/\w]/g,e.textContent))return ft(e),!0;if("select"===r&&x(/<template/i,e.innerHTML))return ft(e),!0;if(!xe[r]||Ae[r]){if(qe&&!Ge[r]){var i=ne(e)||e.parentNode,o=te(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a)i.insertBefore(Z(o[a],!0),ee(e))}return ft(e),!0}return e instanceof c&&!ct(e)?(ft(e),!0):"noscript"!==r&&"noembed"!==r||!x(/<\/no(script|embed)/i,e.innerHTML)?(Oe&&3===e.nodeType&&(t=y(t=e.textContent,de," "),t=y(t,pe," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),gt("afterSanitizeElements",e,null),!1):(ft(e),!0)},vt=function(e,t,n){if(Ne&&("id"===t||"name"===t)&&(n in i||n in rt))return!1;if(je&&!ze[t]&&x(he,t));else if(Te&&x(ge,t));else{if(!ke[t]||ze[t])return!1;if(We[t]);else if(x(be,y(n,ve,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!He[e])if(Fe&&!x(ye,y(n,ve,"")));else if(n)return!1}return!0},bt=function(e){var t=void 0,r=void 0,i=void 0,o=void 0;gt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(o=a.length;o--;){var s=(t=a[o]).name,c=t.namespaceURI;if(r=b(t.value),i=tt(s),l.attrName=i,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,gt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ut(s,e),l.keepAttr))if(x(/\/>/i,r))ut(s,e);else{Oe&&(r=y(r,de," "),r=y(r,pe," "));var f=tt(e.nodeName);if(vt(f,i,r))try{c?e.setAttributeNS(c,s,r):e.setAttribute(s,r),d(n.removed)}catch(e){}}}gt("afterSanitizeAttributes",e,null)}},xt=function e(t){var n=void 0,r=dt(t);for(gt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)gt("uponSanitizeShadowNode",n,null),yt(n)||(n.content instanceof a&&e(n.content),bt(n));gt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,i){var o=void 0,l=void 0,c=void 0,f=void 0,u=void 0;if((Qe=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ht(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===P(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ht(e))return t.toStaticHTML(e.outerHTML)}return e}if(Re||it(i),n.removed=[],"string"==typeof e&&(Ie=!1),Ie);else if(e instanceof s)1===(l=(o=mt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?o=l:o.appendChild(l);else{if(!Me&&!Oe&&!De&&-1===e.indexOf("<"))return ie&&Be?ie.createHTML(e):e;if(!(o=mt(e)))return Me?null:oe}o&&Le&&ft(o.firstChild);for(var m=dt(Ie?e:o);c=m.nextNode();)3===c.nodeType&&c===f||yt(c)||(c.content instanceof a&&xt(c.content),bt(c),f=c);if(f=null,Ie)return e;if(Me){if(Ee)for(u=se.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return _e&&(u=fe.call(r,u,!0)),u}var d=De?o.outerHTML:o.innerHTML;return Oe&&(d=y(d,de," "),d=y(d,pe," ")),ie&&Be?ie.createHTML(d):d},n.setConfig=function(e){it(e),Re=!0},n.clearConfig=function(){nt=null,Re=!1},n.isValidAttribute=function(e,t,n){nt||it({});var r=tt(e),i=tt(t);return vt(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],p(me[e],t))},n.removeHook=function(e){me[e]&&d(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}()}()}));function r(e){return n.sanitize(e)}export{r as s}