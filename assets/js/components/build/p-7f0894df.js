const s=(s,t,P)=>{new MutationObserver((s=>{s.forEach((()=>{P()}))})).observe(s,t)},t=t=>{t.setAttribute("has-loaded",""),"SPX-TYPEWRITER"!==t.tagName&&"SPX-ANIMATE"!==t.tagName&&"SPX-LIGHTBOX"!==t.tagName&&"SPX-DOCS"!==t.tagName&&"SPX-CODE"!==t.tagName&&s(t,{childList:!0},(function(){t.reload()}))};export{t as g,s as m}