var e=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var r=e.prototype;return r.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var r=function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r}(this);this.container.insertBefore(r,0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling),this.tags.push(r)}var a=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(a);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);t.insertRule(e,i?0:t.cssRules.length)}catch(e){}}else a.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();function r(e){function r(e,r,t){var i=r.trim().split(k);r=i;var n=i.length,s=e.length;switch(s){case 0:case 1:var c=0;for(e=0===s?"":e[0]+" ";c<n;++c)r[c]=a(e,r[c],t).trim();break;default:var o=c=0;for(r=[];c<n;++c)for(var f=0;f<s;++f)r[o++]=a(e[f]+" ",i[c],t).trim()}return r}function a(e,r,a){var t=r.charCodeAt(0);switch(33>t&&(t=(r=r.trim()).charCodeAt(0)),t){case 38:return r.replace(d,"$1"+e.trim());case 58:return e.trim()+r.replace(d,"$1"+e.trim());default:if(0<1*a&&0<r.indexOf("\f"))return r.replace(d,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+r}function t(e,r,a,n){var s=e+";",c=2*r+3*a+4*n;if(944===c){e=s.indexOf(":",9)+1;var o=s.substring(e,s.length-1).trim();return o=s.substring(0,e).trim()+o+";",1===G||2===G&&i(o,1)?"-webkit-"+o+o:o}if(0===G||2===G&&!i(s,1))return s;switch(c){case 1015:return 97===s.charCodeAt(10)?"-webkit-"+s+s:s;case 951:return 116===s.charCodeAt(3)?"-webkit-"+s+s:s;case 963:return 110===s.charCodeAt(5)?"-webkit-"+s+s:s;case 1009:if(100!==s.charCodeAt(4))break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(45===s.charCodeAt(8))return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(z,"$1-webkit-$2")+s;break;case 932:if(45===s.charCodeAt(4))switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(99!==s.charCodeAt(8))break;return"-webkit-box-pack"+(o=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+s+"-ms-flex-pack"+o+s;case 1005:return b.test(s)?s.replace(l,":-webkit-")+s.replace(l,":-moz-")+s:s;case 1e3:switch(r=(o=s.substring(13).trim()).indexOf("-")+1,o.charCodeAt(0)+o.charCodeAt(r)){case 226:o=s.replace(y,"tb");break;case 232:o=s.replace(y,"tb-rl");break;case 220:o=s.replace(y,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+o+s;case 1017:if(-1===s.indexOf("sticky",9))break;case 975:switch(r=(s=e).length-10,c=(o=(33===s.charCodeAt(r)?s.substring(0,r):s).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|o.charCodeAt(7))){case 203:if(111>o.charCodeAt(8))break;case 115:s=s.replace(o,"-webkit-"+o)+";"+s;break;case 207:case 102:s=s.replace(o,"-webkit-"+(102<c?"inline-":"")+"box")+";"+s.replace(o,"-webkit-"+o)+";"+s.replace(o,"-ms-"+o+"box")+";"+s}return s+";";case 938:if(45===s.charCodeAt(5))switch(s.charCodeAt(6)){case 105:return o=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+o+"-ms-flex-"+o+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(x,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(x,"")+s}break;case 973:case 989:if(45!==s.charCodeAt(3)||122===s.charCodeAt(4))break;case 931:case 953:if(!0===S.test(e))return 115===(o=e.substring(e.indexOf(":")+1)).charCodeAt(0)?t(e.replace("stretch","fill-available"),r,a,n).replace(":fill-available",":stretch"):s.replace(o,"-webkit-"+o)+s.replace(o,"-moz-"+o.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(102===s.charCodeAt(5)?"-ms-"+s:"")+s,211===a+n&&105===s.charCodeAt(13)&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+s}return s}function i(e,r){var a=e.indexOf(1===r?":":"{"),t=e.substring(0,3!==r?a:10);return a=e.substring(a+1,e.length-1),I(2!==r?t:t.replace($,"$1"),a,r)}function n(e,r){var a=t(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return a!==r+";"?a.replace(p," or ($1)").substring(4):"("+r+")"}function s(e,r,a,t,i,n,s,c,f,u){for(var l,b=0,v=r;b<_;++b)switch(l=R[b].call(o,e,v,a,t,i,n,s,c,f,u)){case void 0:case!1:case!0:case null:break;default:v=l}if(v!==r)return v}function c(e){return void 0!==(e=e.prefix)&&(I=null,e?"function"!=typeof e?G=1:(G=2,I=e):G=0),c}function o(e,a){var c=e;if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<_){var o=s(-1,a,c,c,C,A,0,0,0,0);void 0!==o&&"string"==typeof o&&(a=o)}var l=function e(a,c,o,l,b){for(var v,k,d,y,p,x=0,$=0,S=0,z=0,R=0,I=0,W=d=v=0,M=0,N=0,D=0,F=0,H=o.length,L=H-1,P="",Z="",q="",B="";M<H;){if(k=o.charCodeAt(M),M===L&&0!==$+z+S+x&&(0!==$&&(k=47===$?10:47),z=S=x=0,H++,L++),0===$+z+S+x){if(M===L&&(0<N&&(P=P.replace(u,"")),0<P.trim().length)){switch(k){case 32:case 9:case 59:case 13:case 10:break;default:P+=o.charAt(M)}k=59}switch(k){case 123:for(v=(P=P.trim()).charCodeAt(0),d=1,F=++M;M<H;){switch(k=o.charCodeAt(M)){case 123:d++;break;case 125:d--;break;case 47:switch(k=o.charCodeAt(M+1)){case 42:case 47:e:{for(W=M+1;W<L;++W)switch(o.charCodeAt(W)){case 47:if(42===k&&42===o.charCodeAt(W-1)&&M+2!==W){M=W+1;break e}break;case 10:if(47===k){M=W+1;break e}}M=W}}break;case 91:k++;case 40:k++;case 34:case 39:for(;M++<L&&o.charCodeAt(M)!==k;);}if(0===d)break;M++}switch(d=o.substring(F,M),0===v&&(v=(P=P.replace(f,"").trim()).charCodeAt(0)),v){case 64:switch(0<N&&(P=P.replace(u,"")),k=P.charCodeAt(1)){case 100:case 109:case 115:case 45:N=c;break;default:N=j}if(F=(d=e(c,N,d,k,b+1)).length,0<_&&(p=s(3,d,N=r(j,P,D),c,C,A,F,k,b,l),P=N.join(""),void 0!==p&&0===(F=(d=p.trim()).length)&&(k=0,d="")),0<F)switch(k){case 115:P=P.replace(g,n);case 100:case 109:case 45:d=P+"{"+d+"}";break;case 107:d=(P=P.replace(w,"$1 $2"))+"{"+d+"}",d=1===G||2===G&&i("@"+d,3)?"@-webkit-"+d+"@"+d:"@"+d;break;default:d=P+d,112===l&&(Z+=d,d="")}else d="";break;default:d=e(c,r(c,P,D),d,l,b+1)}q+=d,d=D=N=W=v=0,P="",k=o.charCodeAt(++M);break;case 125:case 59:if(1<(F=(P=(0<N?P.replace(u,""):P).trim()).length))switch(0===W&&(v=P.charCodeAt(0),45===v||96<v&&123>v)&&(F=(P=P.replace(" ",":")).length),0<_&&void 0!==(p=s(1,P,c,a,C,A,Z.length,l,b,l))&&0===(F=(P=p.trim()).length)&&(P="\0\0"),v=P.charCodeAt(0),k=P.charCodeAt(1),v){case 0:break;case 64:if(105===k||99===k){B+=P+o.charAt(M);break}default:58!==P.charCodeAt(F-1)&&(Z+=t(P,v,k,P.charCodeAt(2)))}D=N=W=v=0,P="",k=o.charCodeAt(++M)}}switch(k){case 13:case 10:47===$?$=0:0===1+v&&107!==l&&0<P.length&&(N=1,P+="\0"),0<_*E&&s(0,P,c,a,C,A,Z.length,l,b,l),A=1,C++;break;case 59:case 125:if(0===$+z+S+x){A++;break}default:switch(A++,y=o.charAt(M),k){case 9:case 32:if(0===z+x+$)switch(R){case 44:case 58:case 9:case 32:y="";break;default:32!==k&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===z+$+x&&(N=D=1,y="\f"+y);break;case 108:if(0===z+$+x+O&&0<W)switch(M-W){case 2:112===R&&58===o.charCodeAt(M-3)&&(O=R);case 8:111===I&&(O=I)}break;case 58:0===z+$+x&&(W=M);break;case 44:0===$+S+z+x&&(N=1,y+="\r");break;case 34:case 39:0===$&&(z=z===k?0:0===z?k:z);break;case 91:0===z+$+S&&x++;break;case 93:0===z+$+S&&x--;break;case 41:0===z+$+x&&S--;break;case 40:if(0===z+$+x){if(0===v)switch(2*R+3*I){case 533:break;default:v=1}S++}break;case 64:0===$+S+z+x+W+d&&(d=1);break;case 42:case 47:if(!(0<z+x+S))switch($){case 0:switch(2*k+3*o.charCodeAt(M+1)){case 235:$=47;break;case 220:F=M,$=42}break;case 42:47===k&&42===R&&F+2!==M&&(33===o.charCodeAt(F+2)&&(Z+=o.substring(F,M+1)),y="",$=0)}}0===$&&(P+=y)}I=R,R=k,M++}if(0<(F=Z.length)){if(N=c,0<_&&void 0!==(p=s(2,Z,N,a,C,A,F,l,b,l))&&0===(Z=p).length)return B+Z+q;if(Z=N.join(",")+"{"+Z+"}",0!=G*O){switch(2!==G||i(Z,2)||(O=0),O){case 111:Z=Z.replace(m,":-moz-$1")+Z;break;case 112:Z=Z.replace(h,"::-webkit-input-$1")+Z.replace(h,"::-moz-$1")+Z.replace(h,":-ms-input-$1")+Z}O=0}}return B+Z+q}(j,c,a,0,0);return 0<_&&void 0!==(o=s(-2,l,c,c,C,A,l.length,0,0,0))&&(l=o),O=0,A=C=1,l}var f=/^\0+/g,u=/[\0\r\f]/g,l=/: */g,b=/zoo|gra/,v=/([,: ])(transform)/g,k=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,m=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,g=/\(\s*(.*)\s*\)/g,p=/([\s\S]*?);/g,x=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,A=1,C=1,O=0,G=1,j=[],R=[],_=0,I=null,E=0;return o.use=function e(r){switch(r){case void 0:case null:_=R.length=0;break;default:if("function"==typeof r)R[_++]=r;else if("object"==typeof r)for(var a=0,t=r.length;a<t;++a)e(r[a]);else E=0|!!r}return e},o.set=c,void 0!==e&&c(e),o}function a(e){e&&n.current.insert(e+"}")}var t,i,n={current:null},s=function(e,r,t,i,s,c,o,f,u,l){switch(e){case 1:switch(r.charCodeAt(0)){case 64:return n.current.insert(r+";"),"";case 108:if(98===r.charCodeAt(2))return""}break;case 2:if(0===f)return r+"/*|*/";break;case 3:switch(f){case 102:case 112:return n.current.insert(t[0]+r),"";default:return r+(0===l?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(a)}},c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=/[A-Z]|^ms/g,f=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},b=(t=function(e){return u(e)?e:e.replace(o,"-$&").toLowerCase()},i={},function(e){return void 0===i[e]&&(i[e]=t(e)),i[e]}),v=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(f,(function(e,r,a){return d={name:r,styles:a,next:d},r}))}return 1===c[e]||u(e)||"number"!=typeof r||0===r?r:r+"px"};function k(e,r,a,t){if(null==a)return"";if(void 0!==a.__emotion_styles)return a;switch(typeof a){case"boolean":return"";case"object":if(1===a.anim)return d={name:a.name,styles:a.styles,next:d},a.name;if(void 0!==a.styles){var i=a.next;if(void 0!==i)for(;void 0!==i;)d={name:i.name,styles:i.styles,next:d},i=i.next;return a.styles+";"}return function(e,r,a){var t="";if(Array.isArray(a))for(var i=0;i<a.length;i++)t+=k(e,r,a[i],!1);else for(var n in a){var s=a[n];if("object"!=typeof s)null!=r&&void 0!==r[s]?t+=n+"{"+r[s]+"}":l(s)&&(t+=b(n)+":"+v(n,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=r&&void 0!==r[s[0]]){var c=k(e,r,s,!1);switch(n){case"animation":case"animationName":t+=b(n)+":"+c+";";break;default:t+=n+"{"+c+"}"}}else for(var o=0;o<s.length;o++)l(s[o])&&(t+=b(n)+":"+v(n,s[o])+";")}return t}(e,r,a);case"function":if(void 0!==e){var n=d,s=a(e);return d=n,k(e,r,s,t)}}if(null==r)return a;var c=r[a];return void 0===c||t?a:c}var d,w=/label:\s*([^\s;\n{]+)\s*;/g,h=function(e,r,a){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var t=!0,i="";d=void 0;var n=e[0];null==n||void 0===n.raw?(t=!1,i+=k(a,r,n,!1)):i+=n[0];for(var s=1;s<e.length;s++)i+=k(a,r,e[s],46===i.charCodeAt(i.length-1)),t&&(i+=n[s]);w.lastIndex=0;for(var c,o="";null!==(c=w.exec(i));)o+="-"+c[1];return{name:function(e){for(var r,a=0,t=0,i=e.length;i>=4;++t,i-=4)r=1540483477*(65535&(r=255&e.charCodeAt(t)|(255&e.charCodeAt(++t))<<8|(255&e.charCodeAt(++t))<<16|(255&e.charCodeAt(++t))<<24))+(59797*(r>>>16)<<16),a=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&a)+(59797*(a>>>16)<<16);switch(i){case 3:a^=(255&e.charCodeAt(t+2))<<16;case 2:a^=(255&e.charCodeAt(t+1))<<8;case 1:a=1540483477*(65535&(a^=255&e.charCodeAt(t)))+(59797*(a>>>16)<<16)}return(((a=1540483477*(65535&(a^=a>>>13))+(59797*(a>>>16)<<16))^a>>>15)>>>0).toString(36)}(i)+o,styles:i,next:d}};function m(e,r,a){var t="";return a.split(" ").forEach((function(a){void 0!==e[a]?r.push(e[a]):t+=a+" "})),t}var y=function(e,r,a){var t=e.key+"-"+r.name;if(!1===a&&void 0===e.registered[t]&&(e.registered[t]=r.styles),void 0===e.inserted[r.name]){var i=r;do{e.insert("."+t,i,e.sheet,!0),i=i.next}while(void 0!==i)}};function g(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function p(e,r,a){var t=[],i=m(e,t,a);return t.length<2?a:i+r(t)}var x=function e(r){for(var a="",t=0;t<r.length;t++){var i=r[t];if(null!=i){var n=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))n=e(i);else for(var s in n="",i)i[s]&&s&&(n&&(n+=" "),n+=s);break;default:n=i}n&&(a&&(a+=" "),a+=n)}}return a},$=function(){var a=function(a){void 0===a&&(a={});var t,i=a.key||"css";void 0!==a.prefix&&(t={prefix:a.prefix});var c,o=new r(t),f={};c=a.container||document.head;var u,l=document.querySelectorAll("style[data-emotion-"+i+"]");Array.prototype.forEach.call(l,(function(e){e.getAttribute("data-emotion-"+i).split(" ").forEach((function(e){f[e]=!0})),e.parentNode!==c&&c.appendChild(e)})),o.use(a.stylisPlugins)(s),u=function(e,r,a,t){var i=r.name;n.current=a,o(e,r.styles),t&&(b.inserted[i]=!0)};var b={key:i,sheet:new e({key:i,container:c,nonce:a.nonce,speedy:a.speedy}),nonce:a.nonce,inserted:f,registered:{},insert:u};return b}(void 0);a.sheet.speedy=function(e){this.isSpeedy=e},a.compat=!0;var t=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var i=h(r,a.registered,void 0);return y(a,i,!1),a.key+"-"+i.name};return{css:t,cx:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return p(a.registered,t,x(r))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var i=h(r,a.registered);g(a,i)},keyframes:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var i=h(r,a.registered),n="animation-"+i.name;return g(a,{name:i.name,styles:"@keyframes "+n+"{"+i.styles+"}"}),n},hydrate:function(e){e.forEach((function(e){a.inserted[e]=!0}))},flush:function(){a.registered={},a.inserted={},a.sheet.flush()},sheet:a.sheet,cache:a,getRegisteredStyles:m.bind(null,a.registered),merge:p.bind(null,a.registered,t)}}(),S=$.keyframes,z=$.css;export{z as c,S as k}