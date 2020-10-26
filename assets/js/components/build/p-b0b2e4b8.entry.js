import{r as e,h as n,H as t,a as o}from"./p-e1defc51.js";import{c as a}from"./p-cfbebfdc.js";import{s as r}from"./p-33315b75.js";import"./p-a1c5e2d4.js";import"./p-3333ff2d.js";import"./p-d1ae8003.js";import"./p-5cc7fca6.js";import"./p-6cdc03eb.js";import{g as s}from"./p-9e5127cc.js";import{b as i}from"./p-8066be7a.js";import{c,a as l}from"./p-8f078939.js";var d=c((function(e){var n=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof a?new a(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var a,r;switch(t=t||{},o.util.type(n)){case"Object":if(r=o.util.objId(n),t[r])return t[r];for(var s in t[r]=a={},n)n.hasOwnProperty(s)&&(a[s]=e(n[s],t));return a;case"Array":return r=o.util.objId(n),t[r]?t[r]:(t[r]=a=[],n.forEach((function(n,o){a[o]=e(n,t)})),a);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(o.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var o="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(o))return!1;e=e.parentElement}return!!t}},languages:{extend:function(e,n){var t=o.util.clone(o.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var r=(a=a||o.languages)[e],s={};for(var i in r)if(r.hasOwnProperty(i)){if(i==n)for(var c in t)t.hasOwnProperty(c)&&(s[c]=t[c]);t.hasOwnProperty(i)||(s[i]=r[i])}var l=a[e];return a[e]=s,o.languages.DFS(o.languages,(function(n,t){t===l&&n!=e&&(this[n]=s)})),s},DFS:function e(n,t,a,r){r=r||{};var s=o.util.objId;for(var i in n)if(n.hasOwnProperty(i)){t.call(n,i,n[i],a||i);var c=n[i],l=o.util.type(c);"Object"!==l||r[s(c)]?"Array"!==l||r[s(c)]||(r[s(c)]=!0,e(c,t,i,r)):(r[s(c)]=!0,e(c,t,null,r))}}},plugins:{},highlightAll:function(e,n){o.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),o.hooks.run("before-all-elements-highlight",a);for(var r,s=0;r=a.elements[s++];)o.highlightElement(r,!0===n,a.callback)},highlightElement:function(t,a,r){var s=o.util.getLanguage(t),i=o.languages[s];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+s;var c=t.parentElement;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(n,"").replace(/\s+/g," ")+" language-"+s);var l={element:t,language:s,grammar:i,code:t.textContent};function d(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),r&&r.call(l.element)}if(o.hooks.run("before-sanity-check",l),!l.code)return o.hooks.run("complete",l),void(r&&r.call(l.element));if(o.hooks.run("before-highlight",l),l.grammar)if(a&&e.Worker){var u=new Worker(o.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(o.highlight(l.code,l.grammar,l.language));else d(o.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return o.hooks.run("before-tokenize",r),r.tokens=o.tokenize(r.code,r.grammar),o.hooks.run("after-tokenize",r),a.stringify(o.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var c in t)n[c]=t[c];delete n.rest}var l=new r;return s(l,l.head,e),function e(n,t,r,c,l,d){for(var u in r)if(r.hasOwnProperty(u)&&r[u]){var p=r[u];p=Array.isArray(p)?p:[p];for(var g=0;g<p.length;++g){if(d&&d.cause==u+","+g)return;var f=p[g],m=f.inside,h=!!f.lookbehind,x=!!f.greedy,b=0,k=f.alias;if(x&&!f.pattern.global){var F=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,F+"g")}for(var v=f.pattern||f,y=c.next,w=l;y!==t.tail&&!(d&&w>=d.reach);w+=y.value.length,y=y.next){var A=y.value;if(t.length>n.length)return;if(!(A instanceof a)){var $=1;if(x&&y!=t.tail.prev){if(v.lastIndex=w,!(j=v.exec(n)))break;var z=j.index+(h&&j[1]?j[1].length:0),_=j.index+j[0].length,S=w;for(S+=y.value.length;z>=S;)S+=(y=y.next).value.length;if(w=S-=y.value.length,y.value instanceof a)continue;for(var C=y;C!==t.tail&&(S<_||"string"==typeof C.value);C=C.next)$++,S+=C.value.length;$--,A=n.slice(w,S),j.index-=w}else{v.lastIndex=0;var j=v.exec(A)}if(j){h&&(b=j[1]?j[1].length:0),z=j.index+b;var D=j[0].slice(b),B=(_=z+D.length,A.slice(0,z)),E=A.slice(_),T=w+A.length;d&&T>d.reach&&(d.reach=T);var O=y.prev;B&&(O=s(t,O,B),w+=B.length),i(t,O,$),y=s(t,O,new a(u,m?o.tokenize(D,m):D,k,D)),E&&s(t,y,E),$>1&&e(n,t,r,y.prev,w,{cause:u+","+g,reach:T})}}}}}}(e,l,n,l.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(l)},hooks:{all:{},add:function(e,n){var t=o.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=o.hooks.all[e];if(t&&t.length)for(var a,r=0;a=t[r++];)a(n)}},Token:a};function a(e,n,t,o){this.type=e,this.content=n,this.alias=t,this.length=0|(o||"").length}function r(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function s(e,n,t){var o=n.next,a={value:t,prev:n,next:o};return n.next=a,o.prev=a,e.length++,a}function i(e,n,t){for(var o=n.next,a=0;a<t&&o!==e.tail;a++)o=o.next;n.next=o,o.prev=n,e.length-=a}if(e.Prism=o,a.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach((function(n){a+=e(n,t)})),a}var r={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},s=n.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),o.hooks.run("wrap",r);var i="";for(var c in r.attributes)i+=" "+c+'="'+(r.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+i+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),a=t.language,r=t.immediateClose;e.postMessage(o.highlight(t.code,o.languages[a],a)),r&&e.close()}),!1),o):o;var c=o.util.currentScript();function l(){o.manual||o.highlightAll()}if(c&&(o.filename=c.src,c.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var d=document.readyState;"loading"===d||"interactive"===d&&c&&c.defer?document.addEventListener("DOMContentLoaded",l):window.requestAnimationFrame?window.requestAnimationFrame(l):window.setTimeout(l,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=n),void 0!==l&&(l.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var o={};o["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",r)}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=window.Prism,n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",o='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',a=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+o})),e.hooks.add("before-sanity-check",(function(a){var r=a.element;if(r.matches(o)){a.code="",r.setAttribute(t,"loading");var i=r.appendChild(document.createElement("CODE"));i.textContent="Loading…";var c=r.getAttribute("data-src"),l=a.language;if("none"===l){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];l=n[d]||d}s(i,l),s(r,l);var u=e.plugins.autoloader;u&&u.loadLanguages(l);var p=new XMLHttpRequest;p.open("GET",c,!0),p.onreadystatechange=function(){4==p.readyState&&(p.status<400&&p.responseText?(r.setAttribute(t,"loaded"),i.textContent=p.responseText,e.highlightElement(i)):(r.setAttribute(t,"failed"),i.textContent=p.status>=400?"✖ Error "+p.status+" while fetching file: "+p.statusText:"✖ Error: File does not exist or is empty"))},p.send(null)}})),e.plugins.fileHighlight={highlight:function(n){for(var t,a=(n||document).querySelectorAll(o),r=0;t=a[r++];)e.highlightElement(t)}};var r=!1;e.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function s(e,n){var t=e.className;t=t.replace(a," ")+" language-"+n,e.className=t.replace(/\s+/g," ").trim()}}()}));!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,o,a,r){if(t.language===o){var s=t.tokenStack=[];t.code=t.code.replace(a,(function(e){if("function"==typeof r&&!r(e))return e;for(var a,i=s.length;-1!==t.code.indexOf(a=n(o,i));)++i;return s[i]=e,a})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,o){if(t.language===o&&t.tokenStack){t.grammar=e.languages[o];var a=0,r=Object.keys(t.tokenStack);!function s(i){for(var c=0;c<i.length&&!(a>=r.length);c++){var l=i[c];if("string"==typeof l||l.content&&"string"==typeof l.content){var d=r[a],u=t.tokenStack[d],p="string"==typeof l?l:l.content,g=n(o,d),f=p.indexOf(g);if(f>-1){++a;var m=p.substring(0,f),h=new e.Token(o,e.tokenize(u,t.grammar),"language-"+o,u),x=p.substring(f+g.length),b=[];m&&b.push.apply(b,s([m])),b.push(h),x&&b.push.apply(b,s([x])),"string"==typeof l?i.splice.apply(i,[c,1].concat(b)):l.content=b}}else l.content&&s(l.content)}return i}(t.tokens)}}}})}(Prism),function(e){e.languages.php=e.languages.extend("clike",{keyword:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,boolean:{pattern:/\b(?:false|true)\b/i,alias:"constant"},constant:[/\b[A-Z_][A-Z0-9_]*\b/,/\b(?:null)\b/i],comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),e.languages.insertBefore("php","comment",{delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"}}),e.languages.insertBefore("php","keyword",{variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),e.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var n={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,lookbehind:!0,inside:e.languages.php};e.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:n}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:n}}}),delete e.languages.php.string,e.hooks.add("before-tokenize",(function(n){/<\?/.test(n.code)&&e.languages["markup-templating"].buildPlaceholders(n,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"php")}))}(Prism),c((function(e){!function(){var n=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};function t(e){this.defaults=n({},e)}function o(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}t.prototype={setDefaults:function(e){this.defaults=n(this.defaults,e)},normalize:function(e,t){for(var o in t=n(this.defaults,t)){var a=o.replace(/-(\w)/g,(function(e,n){return n.toUpperCase()}));"normalize"!==o&&"setDefaults"!==a&&t[o]&&this[a]&&(e=this[a].call(this,e,t[o]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort((function(e,n){return e.length-n.length})),n[0].length?e.replace(RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var t=e.split("\n"),a=0;a<t.length;++a)if(!(o(t[a])<=n)){for(var r=t[a].split(/(\s+)/g),s=0,i=0;i<r.length;++i){var c=o(r[i]);(s+=c)>n&&(r[i]="\n"+r[i],s=c)}t[a]=r.join("")}return t.join("\n")}},e.exports&&(e.exports=t),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(e){var n=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var t=e.element.parentNode;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()){for(var o=t.childNodes,a="",r="",s=!1,i=0;i<o.length;++i){var c=o[i];c==e.element?s=!0:"#text"===c.nodeName&&(s?r+=c.nodeValue:a+=c.nodeValue,t.removeChild(c),--i)}e.element.children.length&&Prism.plugins.KeepMarkup?(e.element.innerHTML=n.normalize(a+e.element.innerHTML+r,e.settings),e.code=e.element.textContent):(e.code=a+e.code+r,e.code=n.normalize(e.code,e.settings))}}else e.code=n.normalize(e.code,e.settings)})))}()}));const u="spx-code",p=class{constructor(n){e(this,n),this.background="var(--spx-color-gray-900)",this.borderRadius=i,this.fontSize="clamp(12px, 1.6vw, 16px)",this.padding="var(--spx-space-lg)",this.theme="default",this.type="markup"}componentDidLoad(){s(this.el),d.highlightAll(),d.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0})}async reload(){this.componentDidLoad()}render(){const e=a({display:"block",fontSize:r(u,"font-size",this.fontSize),"*":{fontSize:r(u,"font-size",this.fontSize)},"pre, code":{borderRadius:r(u,"border-radius",this.borderRadius)},pre:{background:r(u,"background",this.background),padding:r(u,"padding",this.padding)}});return n(t,{class:e},n("pre",null,n("code",{class:"language-"+this.type},n("slot",null))))}get el(){return o(this)}};p.style={default:'spx-code code[class*=language-],spx-code pre[class*=language-]{color:#a9b7c6;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}spx-code code[class*=language-] *,spx-code pre[class*=language-] *{font-family:Consolas, Monaco, "Andale Mono", monospace !important}spx-code pre[class*=language-]::-moz-selection,spx-code pre[class*=language-] ::-moz-selection,spx-code code[class*=language-]::-moz-selection,spx-code code[class*=language-] ::-moz-selection{color:inherit;background:rgba(33, 66, 131, 0.85)}spx-code pre[class*=language-]::selection,spx-code pre[class*=language-] ::selection,spx-code code[class*=language-]::selection,spx-code code[class*=language-] ::selection{color:inherit;background:rgba(33, 66, 131, 0.85)}spx-code pre[class*=language-]{overflow:auto}spx-code .token.comment,spx-code .token.prolog,spx-code .token.cdata{color:#808080}spx-code .token.delimiter,spx-code .token.boolean,spx-code .token.keyword,spx-code .token.selector,spx-code .token.important,spx-code .token.atrule{color:#cc7832}spx-code .token.operator,spx-code .token.punctuation,spx-code .token.attr-name{color:#a9b7c6}spx-code .token.tag,spx-code .token.tag .punctuation,spx-code .token.doctype,spx-code .token.builtin{color:#e8bf6a}spx-code .token.entity,spx-code .token.number,spx-code .token.symbol{color:#6897bb}spx-code .token.property,spx-code .token.constant,spx-code .token.variable{color:#9876aa}spx-code .token.string,spx-code .token.char{color:#6a8759}spx-code .token.attr-value,spx-code .token.attr-value .punctuation{color:#a5c261}spx-code .token.attr-value .punctuation:first-child{color:#a9b7c6}spx-code .token.url{color:#287bde;text-decoration:underline}spx-code .token.function{color:#ffc66d}spx-code .token.regex{background:#364135}spx-code .token.bold{font-weight:bold}spx-code .token.italic{font-style:italic}spx-code .token.inserted{background:#294436}spx-code .token.deleted{background:#484a4a}spx-code code.language-css .token.property,spx-code code.language-css .token.property+.token.punctuation{color:#a9b7c6}spx-code code.language-css .token.id{color:#ffc66d}spx-code code.language-css .token.selector>.token.class,spx-code code.language-css .token.selector>.token.attribute,spx-code code.language-css .token.selector>.token.pseudo-class,spx-code code.language-css .token.selector>.token.pseudo-element{color:#ffc66d}',dracula:'spx-code code[class*=language-],spx-code pre[class*=language-]{color:#a9b7c6;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}spx-code code[class*=language-] *,spx-code pre[class*=language-] *{font-family:Consolas, Monaco, "Andale Mono", monospace !important}spx-code pre[class*=language-]::-moz-selection,spx-code pre[class*=language-] ::-moz-selection,spx-code code[class*=language-]::-moz-selection,spx-code code[class*=language-] ::-moz-selection{color:inherit;background:rgba(33, 66, 131, 0.85)}spx-code pre[class*=language-]::selection,spx-code pre[class*=language-] ::selection,spx-code code[class*=language-]::selection,spx-code code[class*=language-] ::selection{color:inherit;background:rgba(33, 66, 131, 0.85)}spx-code pre[class*=language-]{overflow:auto}spx-code .language-css{color:#BD93F9}spx-code .token{color:#FF79C6}spx-code .language-css .token{color:#FF79C6}spx-code .token.script{color:#F8F8F2}spx-code .token.bold{font-weight:bold}spx-code .token.italic{font-style:italic}spx-code .token.atrule,spx-code .token.attr-name,spx-code .token.attr-value{color:#50FA7B}spx-code .language-css .token.atrule{color:#BD93F9}spx-code .language-html .token.attr-value,spx-code .language-markup .token.attr-value{color:#F1FA8C}spx-code .token.boolean{color:#BD93F9}spx-code .token.builtin,spx-code .token.class-name{color:#8BE9FD}spx-code .token.comment{color:#6272A4}spx-code .token.constant{color:#BD93F9}spx-code .language-javascript .token.constant{color:#FFB86C;font-style:italic}spx-code .token.entity{color:#FF79C6}spx-code .language-css .token.entity{color:#50FA7B}spx-code .language-html .token.entity.named-entity{color:#BD93F9}spx-code .language-html .token.entity:not(.named-entity){color:#FF79C6}spx-code .language-markup .token.entity.named-entity{color:#BD93F9}spx-code .language-markup .token.entity:not(.named-entity){color:#FF79C6}spx-code .token.function{color:#50FA7B}spx-code .language-css .token.function{color:#8BE9FD}spx-code .token.important,spx-code .token.keyword{color:#FF79C6}spx-code .token.prolog{color:#F8F8F2}spx-code .token.property{color:#FFB86C}spx-code .language-css .token.property{color:#8BE9FD}spx-code .token.punctuation{color:#FF79C6}spx-code .language-css .token.punctuation{color:#FFB86C}spx-code .language-html .token.punctuation,spx-code .language-markup .token.punctuation{color:#F8F8F2}spx-code .token.selector{color:#FF79C6}spx-code .language-css .token.selector{color:#50FA7B}spx-code .token.regex{color:#FF5555}spx-code .language-css .token.rule:not(.atrule){color:#F8F8F2}spx-code .token.string{color:#F1FA8C}spx-code .token.tag{color:#FF79C6}spx-code .token.url{color:#8BE9FD}spx-code .language-css .token.url{color:#FFB86C}spx-code .token.variable{color:#6272A4}spx-code .token.number{color:#bd93f9}spx-code .token.operator{color:#8be9fd}spx-code .token.char{color:#ff879d}spx-code .token.symbol{color:#ffb86c}spx-code .token.deleted{color:#e2777a}spx-code .token.namespace{color:#e2777a}'};export{p as spx_code}