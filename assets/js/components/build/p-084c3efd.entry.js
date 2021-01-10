import{r as e,c as n,h as t,H as o,a as r}from"./p-08ffb50b.js";import{c as i}from"./p-c8a1ba51.js";import{s as a}from"./p-025a4802.js";import"./p-edbeee69.js";import"./p-0a7dbbed.js";import"./p-a2b66e39.js";import{g as s}from"./p-947bf368.js";import"./p-3480a2cc.js";import{b as c}from"./p-f4890c54.js";import{c as l,a as d}from"./p-3e8ff66b.js";import{C as u}from"./p-eff684e9.js";var p=l((function(e){var n=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof r?new r(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},o.util.type(n)){case"Object":if(i=o.util.objId(n),t[i])return t[i];for(var a in t[i]=r={},n)n.hasOwnProperty(a)&&(r[a]=e(n[a],t));return r;case"Array":return i=o.util.objId(n),t[i]?t[i]:(t[i]=r=[],n.forEach((function(n,o){r[o]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(o.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var o="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(o))return!1;e=e.parentElement}return!!t}},languages:{extend:function(e,n){var t=o.util.clone(o.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||o.languages)[e],a={};for(var s in i)if(i.hasOwnProperty(s)){if(s==n)for(var c in t)t.hasOwnProperty(c)&&(a[c]=t[c]);t.hasOwnProperty(s)||(a[s]=i[s])}var l=r[e];return r[e]=a,o.languages.DFS(o.languages,(function(n,t){t===l&&n!=e&&(this[n]=a)})),a},DFS:function e(n,t,r,i){i=i||{};var a=o.util.objId;for(var s in n)if(n.hasOwnProperty(s)){t.call(n,s,n[s],r||s);var c=n[s],l=o.util.type(c);"Object"!==l||i[a(c)]?"Array"!==l||i[a(c)]||(i[a(c)]=!0,e(c,t,s,i)):(i[a(c)]=!0,e(c,t,null,i))}}},plugins:{},highlightAll:function(e,n){o.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),o.hooks.run("before-all-elements-highlight",r);for(var i,a=0;i=r.elements[a++];)o.highlightElement(i,!0===n,r.callback)},highlightElement:function(t,r,i){var a=o.util.getLanguage(t),s=o.languages[a];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+a;var c=t.parentElement;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(n,"").replace(/\s+/g," ")+" language-"+a);var l={element:t,language:a,grammar:s,code:t.textContent};function d(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),i&&i.call(l.element)}if(o.hooks.run("before-sanity-check",l),!l.code)return o.hooks.run("complete",l),void(i&&i.call(l.element));if(o.hooks.run("before-highlight",l),l.grammar)if(r&&e.Worker){var u=new Worker(o.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(o.highlight(l.code,l.grammar,l.language));else d(o.util.encode(l.code))},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return o.hooks.run("before-tokenize",i),i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),r.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var o in t)n[o]=t[o];delete n.rest}var r=new a;return s(r,r.head,e),i(e,r,n,r.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(r)},hooks:{all:{},add:function(e,n){var t=o.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=o.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:r};function r(e,n,t,o){this.type=e,this.content=n,this.alias=t,this.length=0|(o||"").length}function i(e,n,t,a,l,d){for(var u in t)if(t.hasOwnProperty(u)&&t[u]){var p=t[u];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(d&&d.cause==u+","+f)return;var g=p[f],b=g.inside,h=!!g.lookbehind,m=!!g.greedy,x=0,k=g.alias;if(m&&!g.pattern.global){var v=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,v+"g")}for(var F=g.pattern||g,y=a.next,w=l;y!==n.tail&&!(d&&w>=d.reach);w+=y.value.length,y=y.next){var A=y.value;if(n.length>e.length)return;if(!(A instanceof r)){var $=1;if(m&&y!=n.tail.prev){if(F.lastIndex=w,!(j=F.exec(e)))break;var z=j.index+(h&&j[1]?j[1].length:0),_=j.index+j[0].length,S=w;for(S+=y.value.length;z>=S;)S+=(y=y.next).value.length;if(w=S-=y.value.length,y.value instanceof r)continue;for(var C=y;C!==n.tail&&(S<_||"string"==typeof C.value);C=C.next)$++,S+=C.value.length;$--,A=e.slice(w,S),j.index-=w}else{F.lastIndex=0;var j=F.exec(A)}if(j){h&&(x=j[1]?j[1].length:0),z=j.index+x;var D=j[0].slice(x),B=(_=z+D.length,A.slice(0,z)),P=A.slice(_),E=w+A.length;d&&E>d.reach&&(d.reach=E);var T=y.prev;B&&(T=s(n,T,B),w+=B.length),c(n,T,$),y=s(n,T,new r(u,b?o.tokenize(D,b):D,k,D)),P&&s(n,y,P),$>1&&i(e,n,t,y.prev,w,{cause:u+","+f,reach:E})}}}}}}function a(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function s(e,n,t){var o=n.next,r={value:t,prev:n,next:o};return n.next=r,o.prev=r,e.length++,r}function c(e,n,t){for(var o=n.next,r=0;r<t&&o!==e.tail;r++)o=o.next;n.next=o,o.prev=n,e.length-=r}if(e.Prism=o,r.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},a=n.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(i.classes,a):i.classes.push(a)),o.hooks.run("wrap",i);var s="";for(var c in i.attributes)s+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.immediateClose;e.postMessage(o.highlight(t.code,o.languages[r],r)),i&&e.close()}),!1),o):o;var l=o.util.currentScript();function d(){o.manual||o.highlightAll()}if(l&&(o.filename=l.src,l.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var u=document.readyState;"loading"===u||"interactive"===u&&l&&l.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=n),void 0!==d&&(d.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var o={};o["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=window.Prism,n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",o='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',r=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+o})),e.hooks.add("before-sanity-check",(function(r){var i=r.element;if(i.matches(o)){r.code="",i.setAttribute(t,"loading");var s=i.appendChild(document.createElement("CODE"));s.textContent="Loading…";var c=i.getAttribute("data-src"),l=r.language;if("none"===l){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];l=n[d]||d}a(s,l),a(i,l);var u=e.plugins.autoloader;u&&u.loadLanguages(l);var p=new XMLHttpRequest;p.open("GET",c,!0),p.onreadystatechange=function(){4==p.readyState&&(p.status<400&&p.responseText?(i.setAttribute(t,"loaded"),s.textContent=p.responseText,e.highlightElement(s)):(i.setAttribute(t,"failed"),s.textContent=p.status>=400?"✖ Error "+p.status+" while fetching file: "+p.statusText:"✖ Error: File does not exist or is empty"))},p.send(null)}})),e.plugins.fileHighlight={highlight:function(n){for(var t,r=(n||document).querySelectorAll(o),i=0;t=r[i++];)e.highlightElement(t)}};var i=!1;e.fileHighlight=function(){i||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),i=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function a(e,n){var t=e.className;t=t.replace(r," ")+" language-"+n,e.className=t.replace(/\s+/g," ").trim()}}()}));!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,o,r,i){if(t.language===o){var a=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof i&&!i(e))return e;for(var r,s=a.length;-1!==t.code.indexOf(r=n(o,s));)++s;return a[s]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,o){if(t.language===o&&t.tokenStack){t.grammar=e.languages[o];var r=0,i=Object.keys(t.tokenStack);!function a(s){for(var c=0;c<s.length&&!(r>=i.length);c++){var l=s[c];if("string"==typeof l||l.content&&"string"==typeof l.content){var d=i[r],u=t.tokenStack[d],p="string"==typeof l?l:l.content,f=n(o,d),g=p.indexOf(f);if(g>-1){++r;var b=p.substring(0,g),h=new e.Token(o,e.tokenize(u,t.grammar),"language-"+o,u),m=p.substring(g+f.length),x=[];b&&x.push.apply(x,a([b])),x.push(h),m&&x.push.apply(x,a([m])),"string"==typeof l?s.splice.apply(s,[c,1].concat(x)):l.content=x}}else l.content&&a(l.content)}return s}(t.tokens)}}}})}(Prism),function(e){e.languages.php=e.languages.extend("clike",{keyword:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,boolean:{pattern:/\b(?:false|true)\b/i,alias:"constant"},constant:[/\b[A-Z_][A-Z0-9_]*\b/,/\b(?:null)\b/i],comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),e.languages.insertBefore("php","comment",{delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"}}),e.languages.insertBefore("php","keyword",{variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),e.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var n={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,lookbehind:!0,inside:e.languages.php};e.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:n}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:n}}}),delete e.languages.php.string,e.hooks.add("before-tokenize",(function(n){/<\?/.test(n.code)&&e.languages["markup-templating"].buildPlaceholders(n,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"php")}))}(Prism),Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json,l((function(e){!function(){var n=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};function t(e){this.defaults=n({},e)}function o(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}t.prototype={setDefaults:function(e){this.defaults=n(this.defaults,e)},normalize:function(e,t){for(var o in t=n(this.defaults,t)){var r=o.replace(/-(\w)/g,(function(e,n){return n.toUpperCase()}));"normalize"!==o&&"setDefaults"!==r&&t[o]&&this[r]&&(e=this[r].call(this,e,t[o]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort((function(e,n){return e.length-n.length})),n[0].length?e.replace(RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var t=e.split("\n"),r=0;r<t.length;++r)if(!(o(t[r])<=n)){for(var i=t[r].split(/(\s+)/g),a=0,s=0;s<i.length;++s){var c=o(i[s]);(a+=c)>n&&(i[s]="\n"+i[s],a=c)}t[r]=i.join("")}return t.join("\n")}},e.exports&&(e.exports=t),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(e){var n=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var t=e.element.parentNode;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()){for(var o=t.childNodes,r="",i="",a=!1,s=0;s<o.length;++s){var c=o[s];c==e.element?a=!0:"#text"===c.nodeName&&(a?i+=c.nodeValue:r+=c.nodeValue,t.removeChild(c),--s)}e.element.children.length&&Prism.plugins.KeepMarkup?(e.element.innerHTML=n.normalize(r+e.element.innerHTML+i,e.settings),e.code=e.element.textContent):(e.code=r+e.code+i,e.code=n.normalize(e.code,e.settings))}}else e.code=n.normalize(e.code,e.settings)})))}()})),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(n,t){if("PRE"===n.tagName&&n.classList.contains(e)){var o=n.querySelector(".line-numbers-rows"),r=parseInt(n.getAttribute("data-start"),10)||1,i=r+(o.children.length-1);return t<r&&(t=r),t>i&&(t=i),o.children[t-r]}},resize:function(e){i([e])},assumeViewportIndependence:!0},o=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null},r=void 0;window.addEventListener("resize",(function(){t.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,i(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))})),Prism.hooks.add("complete",(function(t){if(t.code){var o=t.element,r=o.parentNode;if(r&&/pre/i.test(r.nodeName)&&!o.querySelector(".line-numbers-rows")&&Prism.util.isActive(o,e)){o.classList.remove(e),r.classList.add(e);var a,s=t.code.match(n),c=new Array((s?s.length+1:1)+1).join("<span></span>");(a=document.createElement("span")).setAttribute("aria-hidden","true"),a.className="line-numbers-rows",a.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),t.element.appendChild(a),i([r]),Prism.hooks.run("line-numbers",t)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function i(e){if(0!=(e=e.filter((function(e){var n=o(e)["white-space"];return"pre-wrap"===n||"pre-line"===n}))).length){var t=e.map((function(e){var t=e.querySelector("code"),o=e.querySelector(".line-numbers-rows");if(t&&o){var r=e.querySelector(".line-numbers-sizer"),i=t.textContent.split(n);r||((r=document.createElement("span")).className="line-numbers-sizer",t.appendChild(r)),r.innerHTML="0",r.style.display="block";var a=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:i,lineHeights:[],oneLinerHeight:a,sizer:r}}})).filter(Boolean);t.forEach((function(e){var n=e.sizer,t=e.lines,o=e.lineHeights,r=e.oneLinerHeight;o[t.length-1]=void 0,t.forEach((function(e,t){if(e&&e.length>1){var i=n.appendChild(document.createElement("span"));i.style.display="block",i.textContent=e}else o[t]=r}))})),t.forEach((function(e){for(var n=e.sizer,t=e.lineHeights,o=0,r=0;r<t.length;r++)void 0===t[r]&&(t[r]=n.children[o++].getBoundingClientRect().height)})),t.forEach((function(e){var n=e.sizer,t=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach((function(e,n){t.children[n].style.height=e+"px"}))}))}}}();const f="spx-code",g=class{constructor(t){e(this,t),this.spxCodeDidLoad=n(this,"spxCodeDidLoad",7),this.background="var(--spx-color-gray-900)",this.borderRadius=c,this.clipboard=!0,this.clipboardButtonBackground="var(--spx-color-gray-800)",this.clipboardButtonColor="var(--spx-color-gray-400)",this.clipboardButtonFontSize="12px",this.clipboardButtonFontWeight=600,this.clipboardButtonPadding="6px 12px",this.clipboardButtonText="Copy",this.clipboardButtonTextCopied="Copied!",this.clipboardButtonTextTransform="uppercase",this.display="block",this.fontSize="clamp(12px, 1.6vw, 16px)",this.height="auto",this.lineNumbers=!0,this.lineNumbersBackground="var(--spx-color-gray-800)",this.lineNumbersColor="var(--spx-color-gray-400)",this.maxWidth="100%",this.overflow="auto",this.padding="clamp(20px, 2.4vw, 40px)",this.theme="default",this.type="markup",this.onClickClipboard=()=>{this.clipboardButton.setAttribute("data-clipboard-text",this.el.querySelector("pre").innerText),this.clipboardButton.innerText=this.clipboardButtonTextCopied,setTimeout((()=>{this.clipboardButton.innerText=this.clipboardButtonText}),5e3)}}componentDidLoad(){s(this.el),p.highlightAll(),p.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),this.clipboard&&new u(this.clipboardButton),this.spxCodeDidLoad.emit({target:"document"})}async reload(){this.componentDidLoad()}render(){const e=i({position:"relative",display:a(f,"display",this.display),fontSize:a(f,"font-size",this.fontSize),borderRadius:a(f,"border-radius",this.borderRadius),maxWidth:a(f,"max-width",this.maxWidth),"*":{fontSize:a(f,"font-size",this.fontSize)},"pre, code":{borderRadius:a(f,"border-radius",this.borderRadius)},pre:{overflow:a(f,"overflow",this.overflow),background:a(f,"background",this.background),padding:a(f,"padding",this.padding),height:a(f,"height",this.height),msOverflowStyle:this.hideScrollbar?"none":"auto",scrollbarWidth:this.hideScrollbar?"none":"auto","::-webkit-scrollbar":{display:this.hideScrollbar&&"none"},".line-numbers-rows":{top:"calc("+a(f,"padding",this.padding)+" * -1 - 2px)",paddingTop:a(f,"padding",this.padding),height:"calc("+a(f,"padding",this.padding)+" + 100%)",background:a(f,"line-numbers-background",this.lineNumbersBackground),"& > span:before":{color:a(f,"line-numbers-color",this.lineNumbersColor)},"&:before":{content:"''",display:"block",position:"absolute",left:0,width:"100%",height:"calc(100% + 2px)",zIndex:-1,background:a(f,"line-numbers-background",this.lineNumbersBackground)}}}}),n=i({position:"absolute",border:"none",right:0,top:0,cursor:"pointer",textTransform:a(f,"clipboard-button-text-transform",this.clipboardButtonTextTransform),background:a(f,"clipboard-button-background",this.clipboardButtonBackground),color:a(f,"clipboard-button-color",this.clipboardButtonColor),padding:a(f,"clipboard-button-padding",this.clipboardButtonPadding),fontSize:a(f,"clipboard-button-font-size",this.clipboardButtonFontSize),fontWeight:a(f,"clipboard-button-font-weight",this.clipboardButtonFontWeight),borderBottomLeftRadius:a(f,"border-radius",this.borderRadius),borderTopRightRadius:a(f,"border-radius",this.borderRadius)});return t(o,{class:e},t("pre",{class:this.lineNumbers&&"line-numbers"},t("code",{class:"language-"+this.type},t("slot",null))),this.clipboard&&t("button",{ref:e=>this.clipboardButton=e,class:n,onClick:this.onClickClipboard},this.clipboardButtonText))}get el(){return r(this)}};g.style={default:'spx-code pre[class*=language-].line-numbers{position:relative;padding-left:5.2em;counter-reset:linenumber}spx-code pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}spx-code .line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:calc(var(--spx-code-padding) * -1);font-size:100%;left:-5.2em;z-index:0;width:3.5em;letter-spacing:-1px;user-select:none}spx-code .line-numbers-rows>span{display:block;counter-increment:linenumber;z-index:1}spx-code .line-numbers-rows>span:before{content:counter(linenumber);display:block;padding-right:1.2em;text-align:right}spx-code code[class*=language-],spx-code pre[class*=language-]{color:#a9b7c6;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;tab-size:4;hyphens:none}spx-code code[class*=language-] *,spx-code pre[class*=language-] *{font-family:Consolas, Monaco, "Andale Mono", monospace !important}spx-code pre[class*=language-] code{display:block;position:relative}spx-code pre[class*=language-] code:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}spx-code .token.comment,spx-code .token.prolog,spx-code .token.cdata{color:#808080}spx-code .token.delimiter,spx-code .token.boolean,spx-code .token.keyword,spx-code .token.selector,spx-code .token.important,spx-code .token.atrule{color:#cc7832}spx-code .token.operator,spx-code .token.punctuation,spx-code .token.attr-name{color:#a9b7c6}spx-code .token.tag,spx-code .token.tag .punctuation,spx-code .token.doctype,spx-code .token.builtin{color:#e8bf6a}spx-code .token.entity,spx-code .token.number,spx-code .token.symbol{color:#6897bb}spx-code .token.property,spx-code .token.constant,spx-code .token.variable{color:#9876aa}spx-code .token.string,spx-code .token.char{color:#6a8759}spx-code .token.attr-value,spx-code .token.attr-value .punctuation{color:#a5c261}spx-code .token.attr-value .punctuation:first-child{color:#a9b7c6}spx-code .token.url{color:#287bde;text-decoration:underline}spx-code .token.function{color:#ffc66d}spx-code .token.regex{background:#364135}spx-code .token.bold{font-weight:bold}spx-code .token.italic{font-style:italic}spx-code .token.inserted{background:#294436}spx-code .token.deleted{background:#484a4a}spx-code code.language-css .token.property,spx-code code.language-css .token.property+.token.punctuation{color:#a9b7c6}spx-code code.language-css .token.id{color:#ffc66d}spx-code code.language-css .token.selector>.token.class,spx-code code.language-css .token.selector>.token.attribute,spx-code code.language-css .token.selector>.token.pseudo-class,spx-code code.language-css .token.selector>.token.pseudo-element{color:#ffc66d}',dracula:'spx-code pre[class*=language-].line-numbers{position:relative;padding-left:5.2em;counter-reset:linenumber}spx-code pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}spx-code .line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:calc(var(--spx-code-padding) * -1);font-size:100%;left:-5.2em;z-index:0;width:3.5em;letter-spacing:-1px;user-select:none}spx-code .line-numbers-rows>span{display:block;counter-increment:linenumber;z-index:1}spx-code .line-numbers-rows>span:before{content:counter(linenumber);display:block;padding-right:1.2em;text-align:right}spx-code code[class*=language-],spx-code pre[class*=language-]{color:#a9b7c6;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;tab-size:4;hyphens:none}spx-code code[class*=language-] *,spx-code pre[class*=language-] *{font-family:Consolas, Monaco, "Andale Mono", monospace !important}spx-code pre[class*=language-] code{display:block;position:relative}spx-code pre[class*=language-] code:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}spx-code .language-css{color:#BD93F9}spx-code .token{color:#FF79C6}spx-code .language-css .token{color:#FF79C6}spx-code .token.script{color:#F8F8F2}spx-code .token.bold{font-weight:bold}spx-code .token.italic{font-style:italic}spx-code .token.atrule,spx-code .token.attr-name,spx-code .token.attr-value{color:#50FA7B}spx-code .language-css .token.atrule{color:#BD93F9}spx-code .language-html .token.attr-value,spx-code .language-markup .token.attr-value{color:#F1FA8C}spx-code .token.boolean{color:#BD93F9}spx-code .token.builtin,spx-code .token.class-name{color:#8BE9FD}spx-code .token.comment{color:#6272A4}spx-code .token.constant{color:#BD93F9}spx-code .language-javascript .token.constant{color:#FFB86C;font-style:italic}spx-code .token.entity{color:#FF79C6}spx-code .language-css .token.entity{color:#50FA7B}spx-code .language-html .token.entity.named-entity{color:#BD93F9}spx-code .language-html .token.entity:not(.named-entity){color:#FF79C6}spx-code .language-markup .token.entity.named-entity{color:#BD93F9}spx-code .language-markup .token.entity:not(.named-entity){color:#FF79C6}spx-code .token.function{color:#50FA7B}spx-code .language-css .token.function{color:#8BE9FD}spx-code .token.important,spx-code .token.keyword{color:#FF79C6}spx-code .token.prolog{color:#F8F8F2}spx-code .token.property{color:#FFB86C}spx-code .language-css .token.property{color:#8BE9FD}spx-code .token.punctuation{color:#FF79C6}spx-code .language-css .token.punctuation{color:#FFB86C}spx-code .language-html .token.punctuation,spx-code .language-markup .token.punctuation{color:#F8F8F2}spx-code .token.selector{color:#FF79C6}spx-code .language-css .token.selector{color:#50FA7B}spx-code .token.regex{color:#FF5555}spx-code .language-css .token.rule:not(.atrule){color:#F8F8F2}spx-code .token.string{color:#F1FA8C}spx-code .token.tag{color:#FF79C6}spx-code .token.url{color:#8BE9FD}spx-code .language-css .token.url{color:#FFB86C}spx-code .token.variable{color:#6272A4}spx-code .token.number{color:#bd93f9}spx-code .token.operator{color:#8be9fd}spx-code .token.char{color:#ff879d}spx-code .token.symbol{color:#ffb86c}spx-code .token.deleted{color:#e2777a}spx-code .token.namespace{color:#e2777a}'};export{g as spx_code}