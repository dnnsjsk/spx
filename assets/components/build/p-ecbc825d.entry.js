import{r as p,c as o,h as e,a as x}from"./p-509d707c.js";import{s,k as t,q as r}from"./p-3b2c546a.js";import{g as c}from"./p-580e945a.js";const i="spx-mockup";let a=class{constructor(e){p(this,e),this.spxMockupDidLoad=o(this,"spxMockupDidLoad",7),this.colorGalaxyS8="black",this.colorGooglePixel="silver",this.colorIpadPro="silver",this.colorIphone8="silver",this.colorMacbook="silver",this.colorMacbookPro="silver",this.imagePosition="50% 50%",this.sizeMax=.6,this.sizeMin=.3,this.type="iphone-8",this.handleResize=()=>{const p=100*(window.innerWidth-r.minWidthPx)/(r.maxWidthPx-r.minWidthPx),o=window.innerWidth<=r.minWidthPx?this.sizeMin:window.innerWidth>=r.maxWidthPx?this.sizeMax:this.sizeMin+(this.sizeMax-this.sizeMin)/100*p;this.mockup.style.transform="scale("+o+")",this.parent.style.height=this.mockup.offsetHeight/1*o+"px",this.parent.style.width=this.mockup.offsetWidth/1*o+"px"}}attributesChanged(p,o,e){s(this.el,i,e,p)}onResize(){this.handleResize()}componentDidLoad(){this.parent=this.el.shadowRoot.querySelector(".spx-mockup-wrap"),this.mockup=this.el.shadowRoot.querySelector(".spx-mockup"),this.handleResize(),t({el:this.el,tag:i,props:["imagePosition"]}),this.spxMockupDidLoad.emit({target:"document"})}componentWillUpdate(){c(this.el)}componentDidUpdate(){this.handleResize()}render(){const p="galaxy-s8"===this.type?this.colorGalaxyS8:"google-pixel"===this.type?this.colorGooglePixel:"ipad-pro"===this.type?this.colorIpadPro:"iphone-8"===this.type?this.colorIphone8:"macbook"===this.type?this.colorMacbook:"macbook-pro"===this.type?this.colorMacbookPro:null;return e("div",{class:"inner spx-mockup-wrap"},e("div",{class:"spx-mockup spx-mockup-"+this.type+" "+(null!==p&&"spx-mockup-"+p)},e("div",{class:"spx-mockup-frame"},e("div",{class:"spx-mockup-content"},this.src?e("img",{src:this.src,alt:""}):e("div",{innerHTML:this.el.innerHTML}))),e("div",{class:"spx-mockup-stripe"}),e("div",{class:"spx-mockup-header"}),e("div",{class:"spx-mockup-sensors"}),e("div",{class:"spx-mockup-btns"}),e("div",{class:"spx-mockup-power"}),"iphone-x"===this.type&&e("div",{class:"spx-mockup-home"})))}get el(){return x(this)}static get watchers(){return{imagePosition:["attributesChanged"]}}};a.style=':host{display:var(--spx-mockup-display, block)}.inner{position:relative;max-width:100%}img{width:100%;height:100%;object-fit:cover;object-position:var(--spx-mockup-image-position, 50% 50%)}.spx-mockup,.spx-mockup::before,.spx-mockup::after,.spx-mockup *,.spx-mockup *::before,.spx-mockup *::after{box-sizing:border-box;display:block}.spx-mockup{position:relative;transform:scale(1);transform-origin:left top;z-index:1}.spx-mockup .spx-mockup-frame{z-index:1}.spx-mockup .spx-mockup-content{background-color:#fff;background-position:center center;background-size:cover;object-fit:cover;position:relative;overflow:hidden;height:100%;width:100%}.spx-mockup .spx-mockup-content script{display:none}.spx-mockup-iphone-x{height:868px;width:428px}.spx-mockup-iphone-x .spx-mockup-frame{background:#222;border-radius:68px;box-shadow:inset 0 0 2px 2px #c8cacb, inset 0 0 0 7px #e2e3e4;height:868px;padding:28px;width:428px}.spx-mockup-iphone-x .spx-mockup-content{border-radius:40px;height:812px;width:375px}.spx-mockup-iphone-x .spx-mockup-stripe::after,.spx-mockup-iphone-x .spx-mockup-stripe::before{border:solid rgba(51, 51, 51, 0.25);border-width:0 7px;content:"";height:7px;left:0;position:absolute;width:100%;z-index:9}.spx-mockup-iphone-x .spx-mockup-stripe::after{top:85px}.spx-mockup-iphone-x .spx-mockup-stripe::before{bottom:85px}.spx-mockup-iphone-x .spx-mockup-header{background:#222;border-bottom-left-radius:20px;border-bottom-right-radius:20px;height:30px;left:50%;margin-left:-102px;position:absolute;top:28px;width:204px}.spx-mockup-iphone-x .spx-mockup-header::after,.spx-mockup-iphone-x .spx-mockup-header::before{content:"";height:10px;position:absolute;top:0;width:10px}.spx-mockup-iphone-x .spx-mockup-header::after{background:radial-gradient(circle at bottom left, transparent 0, transparent 75%, #222 75%, #222 100%);left:-10px}.spx-mockup-iphone-x .spx-mockup-header::before{background:radial-gradient(circle at bottom right, transparent 0, transparent 75%, #222 75%, #222 100%);right:-10px}.spx-mockup-iphone-x .spx-mockup-sensors::after,.spx-mockup-iphone-x .spx-mockup-sensors::before{content:"";position:absolute}.spx-mockup-iphone-x .spx-mockup-sensors::after{background:#444;border-radius:3px;height:6px;left:50%;margin-left:-25px;top:32px;width:50px}.spx-mockup-iphone-x .spx-mockup-sensors::before{background:#444;border-radius:50%;height:14px;left:50%;margin-left:40px;top:28px;width:14px}.spx-mockup-iphone-x .spx-mockup-btns{background:#c8cacb;height:32px;left:-3px;position:absolute;top:115px;width:3px}.spx-mockup-iphone-x .spx-mockup-btns::after,.spx-mockup-iphone-x .spx-mockup-btns::before{background:#c8cacb;content:"";height:62px;left:0;position:absolute;width:3px}.spx-mockup-iphone-x .spx-mockup-btns::after{top:60px}.spx-mockup-iphone-x .spx-mockup-btns::before{top:140px}.spx-mockup-iphone-x .spx-mockup-power{background:#c8cacb;height:100px;position:absolute;right:-3px;top:200px;width:3px}.spx-mockup-iphone-8{height:871px;width:419px}.spx-mockup-iphone-8 .spx-mockup-frame{background:#fff;border-radius:68px;box-shadow:inset 0 0 0 2px #c8cacb, inset 0 0 0 7px #e2e3e4;height:871px;padding:102px 22px;width:419px}.spx-mockup-iphone-8 .spx-mockup-content{border:2px solid #222;border-radius:4px;height:667px;width:375px}.spx-mockup-iphone-8 .spx-mockup-stripe::after,.spx-mockup-iphone-8 .spx-mockup-stripe::before{border:solid rgba(51, 51, 51, 0.15);border-width:0 7px;content:"";height:6px;left:0;position:absolute;width:100%;z-index:9}.spx-mockup-iphone-8 .spx-mockup-stripe::after{top:68px}.spx-mockup-iphone-8 .spx-mockup-stripe::before{bottom:68px}.spx-mockup-iphone-8 .spx-mockup-header{border:2px solid #c8cacb;border-radius:50%;bottom:25px;height:58px;left:50%;margin-left:-29px;position:absolute;width:58px}.spx-mockup-iphone-8 .spx-mockup-sensors{background:#666;border-radius:3px;height:6px;left:50%;margin-left:-38px;position:absolute;top:52px;width:76px}.spx-mockup-iphone-8 .spx-mockup-sensors::after,.spx-mockup-iphone-8 .spx-mockup-sensors::before{background:#666;border-radius:50%;content:"";position:absolute}.spx-mockup-iphone-8 .spx-mockup-sensors::after{height:10px;left:50%;margin-left:-5px;top:-25px;width:10px}.spx-mockup-iphone-8 .spx-mockup-sensors::before{height:12px;left:-42px;margin-top:-6px;top:50%;width:12px}.spx-mockup-iphone-8 .spx-mockup-btns{background:#c8cacb;height:30px;left:-3px;position:absolute;top:102px;width:3px}.spx-mockup-iphone-8 .spx-mockup-btns::after,.spx-mockup-iphone-8 .spx-mockup-btns::before{background:#c8cacb;content:"";height:56px;left:0;position:absolute;width:3px}.spx-mockup-iphone-8 .spx-mockup-btns::after{top:62px}.spx-mockup-iphone-8 .spx-mockup-btns::before{top:132px}.spx-mockup-iphone-8 .spx-mockup-power{background:#c8cacb;height:80px;position:absolute;right:-2px;top:160px;width:3px}.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-frame{box-shadow:inset 0 0 0 2px #e4b08a, inset 0 0 0 7px #f7e8dd}.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-header{border-color:#e4b08a}.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-btns,.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-btns::after,.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-btns::before{background:#e4b08a}.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-power{background:#e4b08a}.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-frame{background:#222;box-shadow:inset 0 0 0 2px #74747a, inset 0 0 0 7px #9b9ba0}.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-stripe::after,.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-stripe::before{border-color:rgba(204, 204, 204, 0.35)}.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-btns,.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-btns::after,.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-btns::before{background:#74747a}.spx-mockup-google-pixel-2-xl{height:832px;width:404px}.spx-mockup-google-pixel-2-xl .spx-mockup-frame{background:#121212;border-radius:36px;box-shadow:inset 0 0 0 2px #cfcfcf, inset 0 0 0 7px #9c9c9c;height:832px;padding:56px 22px;width:404px}.spx-mockup-google-pixel-2-xl .spx-mockup-content{border-radius:27px;height:720px;width:360px}.spx-mockup-google-pixel-2-xl .spx-mockup-header{height:832px;left:50%;margin-left:-150px;position:absolute;top:0;width:300px}.spx-mockup-google-pixel-2-xl .spx-mockup-header::after,.spx-mockup-google-pixel-2-xl .spx-mockup-header::before{background:#333;border-radius:3px;content:"";height:6px;left:50%;margin-left:-73px;margin-top:-3px;position:absolute;width:146px}.spx-mockup-google-pixel-2-xl .spx-mockup-header::after{top:24px}.spx-mockup-google-pixel-2-xl .spx-mockup-header::before{bottom:28px}.spx-mockup-google-pixel-2-xl .spx-mockup-sensors{background:#333;border-radius:7px;height:14px;left:54px;margin-top:-7px;position:absolute;top:36px;width:14px}.spx-mockup-google-pixel-2-xl .spx-mockup-btns{background:#cfcfcf;height:102px;position:absolute;right:-3px;top:306px;width:3px}.spx-mockup-google-pixel-2-xl .spx-mockup-power{background:#cfcfcf;height:58px;position:absolute;right:-3px;top:194px;width:3px}.spx-mockup-google-pixel{height:744px;width:360px}.spx-mockup-google-pixel .spx-mockup-frame{background:#f7f7f8;border-radius:54px;box-shadow:inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4, inset 0 0 0 10px white;height:744px;padding:82px 18px 86px 18px;width:360px}.spx-mockup-google-pixel .spx-mockup-content{border:2px solid #222;border-radius:2px;height:576px;width:324px}.spx-mockup-google-pixel .spx-mockup-stripe{border-top:6px solid rgba(51, 51, 51, 0.15);bottom:0;left:254px;position:absolute;top:0;width:8px}.spx-mockup-google-pixel .spx-mockup-stripe::after,.spx-mockup-google-pixel .spx-mockup-stripe::before{border:solid rgba(51, 51, 51, 0.15);border-width:0 6px;content:"";height:10px;left:-254px;position:absolute;width:360px;z-index:9}.spx-mockup-google-pixel .spx-mockup-stripe::after{top:60px}.spx-mockup-google-pixel .spx-mockup-stripe::before{bottom:46px}.spx-mockup-google-pixel .spx-mockup-sensors{background:#ddd;border-radius:2.5px;height:5px;left:50%;margin-left:-39px;margin-top:-2.5px;position:absolute;top:41px;width:78px}.spx-mockup-google-pixel .spx-mockup-sensors::after,.spx-mockup-google-pixel .spx-mockup-sensors::before{background:#333;border-radius:6px;content:"";position:absolute}.spx-mockup-google-pixel .spx-mockup-sensors::after{height:12px;left:50%;margin-left:-14px;top:21.5px;width:28px}.spx-mockup-google-pixel .spx-mockup-sensors::before{height:10px;left:-81px;margin-top:-5px;top:50%;width:10px}.spx-mockup-google-pixel .spx-mockup-btns{background:#c8cacb;height:102px;position:absolute;right:-2px;top:298px;width:3px}.spx-mockup-google-pixel .spx-mockup-power{background:#c8cacb;height:50px;position:absolute;right:-2px;top:184px;width:3px}.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-frame{background:#211d1c;box-shadow:inset 0 0 0 2px #363635, inset 0 0 0 6px #6a6967, inset 0 0 0 10px #3d3533}.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-stripe,.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-stripe::after,.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-stripe::before{border-color:rgba(13, 13, 13, 0.35)}.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-sensors{background:#444}.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-sensors::after{background:#0d0d0d}.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-btns,.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-btns::after,.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-btns::before{background:#363635}.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-power{background:#363635}.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-frame{box-shadow:inset 0 0 0 2px #2a5aff, inset 0 0 0 6px #7695ff, inset 0 0 0 10px white}.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-btns,.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-btns::after,.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-btns::before{background:#2a5aff}.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-power{background:#2a5aff}.spx-mockup-galaxy-s8{height:828px;width:380px}.spx-mockup-galaxy-s8 .spx-mockup-frame{background:#222;border:solid #cfcfcf;border-radius:55px;border-width:5px 0;box-shadow:inset 0 0 0 2px #9c9c9c;height:828px;padding:48px 10px 40px 10px;width:380px}.spx-mockup-galaxy-s8 .spx-mockup-content{border:2px solid #222;border-radius:34px;height:740px;width:360px}.spx-mockup-galaxy-s8 .spx-mockup-stripe::after,.spx-mockup-galaxy-s8 .spx-mockup-stripe::before{border:solid rgba(51, 51, 51, 0.15);border-width:5px 0;content:"";height:828px;position:absolute;top:0;width:6px;z-index:9}.spx-mockup-galaxy-s8 .spx-mockup-stripe::after{left:48px}.spx-mockup-galaxy-s8 .spx-mockup-stripe::before{right:48px}.spx-mockup-galaxy-s8 .spx-mockup-sensors{background:#666;border-radius:3px;height:6px;left:50%;margin-left:-24px;margin-top:-3px;position:absolute;top:32px;width:48px}.spx-mockup-galaxy-s8 .spx-mockup-sensors::after,.spx-mockup-galaxy-s8 .spx-mockup-sensors::before{background:#666;border-radius:50%;content:"";position:absolute;top:50%}.spx-mockup-galaxy-s8 .spx-mockup-sensors::after{box-shadow:-192px 0 #333, -174px 0 #333, -240px 0 #333;height:8px;margin-top:-4px;right:-90px;width:8px}.spx-mockup-galaxy-s8 .spx-mockup-sensors::before{box-shadow:186px 0 #666;height:12px;left:-90px;margin-top:-6px;width:12px}.spx-mockup-galaxy-s8 .spx-mockup-btns{background:#9c9c9c;border-radius:3px 0 0 3px;height:116px;left:-3px;position:absolute;top:144px;width:3px}.spx-mockup-galaxy-s8 .spx-mockup-btns::after{background:#9c9c9c;border-radius:3px 0 0 3px;content:"";height:54px;left:0;position:absolute;top:164px;width:3px}.spx-mockup-galaxy-s8 .spx-mockup-power{background:#9c9c9c;border-radius:0 3px 3px 0;height:54px;position:absolute;right:-3px;top:260px;width:3px}.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-frame{border-color:#a3c5e8;box-shadow:inset 0 0 0 2px #5192d4}.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-stripe::after,.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-stripe::before{border-color:rgba(255, 255, 255, 0.35)}.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-btns,.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-btns::after{background:#5192d4}.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-power{background:#5192d4}.spx-mockup-ipad-pro{height:804px;width:560px}.spx-mockup-ipad-pro .spx-mockup-frame{background:#fff;border-radius:38px;box-shadow:inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4;height:804px;padding:62px 25px;width:560px}.spx-mockup-ipad-pro .spx-mockup-content{border:2px solid #222;border-radius:2px;height:680px;width:510px}.spx-mockup-ipad-pro .spx-mockup-header{border:2px solid #c8cacb;border-radius:50%;bottom:17px;height:34px;left:50%;margin-left:-17px;position:absolute;width:34px}.spx-mockup-ipad-pro .spx-mockup-sensors{background:#666;border-radius:50%;height:10px;left:50%;margin-left:-5px;margin-top:-5px;position:absolute;top:34px;width:10px}.spx-mockup-ipad-pro.spx-mockup-gold .spx-mockup-frame{box-shadow:inset 0 0 0 2px #e4b08a, inset 0 0 0 6px #f7e8dd}.spx-mockup-ipad-pro.spx-mockup-gold .spx-mockup-header{border-color:#e4b08a}.spx-mockup-ipad-pro.spx-mockup-rosegold .spx-mockup-frame{box-shadow:inset 0 0 0 2px #f6a69a, inset 0 0 0 6px #facfc9}.spx-mockup-ipad-pro.spx-mockup-rosegold .spx-mockup-header{border-color:#f6a69a}.spx-mockup-ipad-pro.spx-mockup-spacegray .spx-mockup-frame{background:#222;box-shadow:inset 0 0 0 2px #818187, inset 0 0 0 6px #9b9ba0}.spx-mockup-ipad-pro.spx-mockup-spacegray .spx-mockup-header{border-color:#818187}.spx-mockup-surface-pro{height:394px;width:561px}.spx-mockup-surface-pro .spx-mockup-frame{background:#0d0d0d;border-radius:10px;box-shadow:inset 0 0 0 2px #c8c8c8;height:394px;margin:0 auto;padding:26px 24px;width:561px}.spx-mockup-surface-pro .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:342px;width:513px}.spx-mockup-surface-pro .spx-mockup-btns::after,.spx-mockup-surface-pro .spx-mockup-btns::before{background:#c8c8c8;content:"";height:2px;position:absolute;top:-2px}.spx-mockup-surface-pro .spx-mockup-btns::after{left:48px;width:26px}.spx-mockup-surface-pro .spx-mockup-btns::before{left:94px;width:48px}.spx-mockup-surface-pro .spx-mockup-sensors{background:#333;border-radius:50%;height:6px;left:50%;margin-left:-3px;margin-top:-3px;position:absolute;top:14px;width:6px}.spx-mockup-surface-book{height:424px;width:728px}.spx-mockup-surface-book .spx-mockup-frame{background:#0d0d0d;border-radius:12px;box-shadow:inset 0 0 0 2px #c8c8c8;height:408px;margin:0 auto;padding:24px 22px;position:relative;width:584px}.spx-mockup-surface-book .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:360px;width:540px}.spx-mockup-surface-book .spx-mockup-btns::after,.spx-mockup-surface-book .spx-mockup-btns::before{background:#c8c8c8;content:"";height:2px;position:absolute;top:-2px}.spx-mockup-surface-book .spx-mockup-btns::after{left:122px;width:20px}.spx-mockup-surface-book .spx-mockup-btns::before{left:168px;width:44px}.spx-mockup-surface-book .spx-mockup-power{background:linear-gradient(to bottom, #eee, #c8c8c8);border:solid #c8c8c8;border-radius:2px;border-width:0 2px;height:12px;margin-top:4px;position:relative;width:728px}.spx-mockup-surface-book .spx-mockup-power::after,.spx-mockup-surface-book .spx-mockup-power::before{content:"";position:absolute}.spx-mockup-surface-book .spx-mockup-power::after{background:radial-gradient(circle at center, #eee 0, #eee 95%, #a2a1a1 100%);border-radius:0 0 6px 6px;height:8px;left:50%;margin-left:-125px;top:0;width:250px;z-index:1}.spx-mockup-surface-book .spx-mockup-power::before{background:linear-gradient(to bottom, #eee, #c8c8c8);border-radius:2px 2px 0 0;bottom:12px;height:8px;left:50%;margin-left:-292px;width:584px}.spx-mockup-macbook-pro{height:444px;width:740px}.spx-mockup-macbook-pro .spx-mockup-frame{background:#0d0d0d;border-radius:20px;box-shadow:inset 0 0 0 2px #c8cacb;height:428px;margin:0 auto;padding:29px 19px 39px 19px;position:relative;width:614px}.spx-mockup-macbook-pro .spx-mockup-frame::after{background:#272626;border-radius:0 0 20px 20px;bottom:2px;content:"";height:26px;left:2px;position:absolute;width:610px}.spx-mockup-macbook-pro .spx-mockup-frame::before{bottom:10px;color:#c8cacb;content:"MacBook Pro";font-size:12px;height:16px;left:50%;line-height:16px;margin-left:-100px;position:absolute;text-align:center;width:200px;z-index:1}.spx-mockup-macbook-pro .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:360px;width:576px}.spx-mockup-macbook-pro .spx-mockup-power{background:#e2e3e4;border:solid #d5d6d8;border-radius:2px 2px 0 0;border-width:2px 4px 0 4px;height:14px;margin-top:-10px;position:relative;width:740px;z-index:9}.spx-mockup-macbook-pro .spx-mockup-power::after,.spx-mockup-macbook-pro .spx-mockup-power::before{content:"";position:absolute}.spx-mockup-macbook-pro .spx-mockup-power::after{background:#d5d6d8;border-radius:0 0 10px 10px;box-shadow:inset 0 0 4px 2px #babdbf;height:10px;left:50%;margin-left:-60px;top:-2px;width:120px}.spx-mockup-macbook-pro .spx-mockup-power::before{background:#a0a3a7;border-radius:0 0 180px 180px/0 0 12px 12px;box-shadow:inset 0 -2px 6px 0 #474a4d;height:12px;left:-4px;margin:0 auto;top:10px;width:740px}.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-frame{box-shadow:inset 0 0 0 2px #767a7d}.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-power{background:#909496;border-color:#767a7d}.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-power::after{background:#83878a;box-shadow:inset 0 0 4px 2px #6a6d70}.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-power::before{background:#515456;box-shadow:inset 0 -2px 6px 0 black}.spx-mockup-macbook{height:432px;width:740px}.spx-mockup-macbook .spx-mockup-frame{background:#0d0d0d;border-radius:20px;box-shadow:inset 0 0 0 2px #c8cacb;height:428px;margin:0 auto;padding:29px 19px 39px 19px;position:relative;width:614px}.spx-mockup-macbook .spx-mockup-frame::after{background:#272626;border-radius:0 0 20px 20px;bottom:2px;content:"";height:26px;left:2px;position:absolute;width:610px}.spx-mockup-macbook .spx-mockup-frame::before{bottom:10px;color:#c8cacb;content:"MacBook";font-size:12px;height:16px;left:50%;line-height:16px;margin-left:-100px;position:absolute;text-align:center;width:200px;z-index:1}.spx-mockup-macbook .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:360px;width:576px}.spx-mockup-macbook .spx-mockup-power{background:#e2e3e4;border:solid #d5d6d8;border-radius:2px 2px 0 0;border-width:0 4px;height:4px;margin-top:-10px;position:relative;width:740px;z-index:9}.spx-mockup-macbook .spx-mockup-power::after,.spx-mockup-macbook .spx-mockup-power::before{content:"";position:absolute}.spx-mockup-macbook .spx-mockup-power::after{background:radial-gradient(circle at center, #e2e3e4 0, #e2e3e4 85%, #a0a3a7 100%);border:solid #adb0b3;border-width:0 2px;height:4px;left:50%;margin-left:-60px;width:120px}.spx-mockup-macbook .spx-mockup-power::before{background:#a0a3a7;border-radius:0 0 180px 180px/0 0 10px 10px;box-shadow:inset 0 -2px 6px 0 #474a4d;height:10px;left:-4px;margin:0 auto;top:4px;width:740px}.spx-mockup-macbook.spx-mockup-gold .spx-mockup-frame{box-shadow:inset 0 0 0 2px #edccb4}.spx-mockup-macbook.spx-mockup-gold .spx-mockup-power{background:#f7e8dd;border-color:#edccb4}.spx-mockup-macbook.spx-mockup-gold .spx-mockup-power::after{background:radial-gradient(circle at center, #f7e8dd 0, #f7e8dd 85%, #dfa276 100%);border-color:#e4b08a}.spx-mockup-macbook.spx-mockup-gold .spx-mockup-power::before{background:#edccb4;box-shadow:inset 0 -2px 6px 0 #83491f}.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-frame{box-shadow:inset 0 0 0 2px #f6a69a}.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-power{background:#facfc9;border-color:#f6a69a}.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-power::after{background:radial-gradient(circle at center, #facfc9 0, #facfc9 85%, #ef6754 100%);border-color:#f6a69a}.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-power::before{background:#f6a69a;box-shadow:inset 0 -2px 6px 0 #851b0c}.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-frame{box-shadow:inset 0 0 0 2px #767a7d}.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-power{background:#909496;border-color:#767a7d}.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-power::after{background:radial-gradient(circle at center, #909496 0, #909496 85%, #515456 100%);border-color:#5d6163}.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-power::before{background:#515456;box-shadow:inset 0 -2px 6px 0 black}.spx-mockup-surface-studio{height:506px;width:640px}.spx-mockup-surface-studio .spx-mockup-frame{background:#0d0d0d;border-radius:10px;box-shadow:inset 0 0 0 2px black;height:440px;padding:20px;width:640px}.spx-mockup-surface-studio .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:400px;width:600px}.spx-mockup-surface-studio .spx-mockup-stripe{background:#444;border-radius:0 0 2px 2px;bottom:0;height:4px;left:50%;margin-left:-117px;position:absolute;width:234px}.spx-mockup-surface-studio .spx-mockup-stripe::after,.spx-mockup-surface-studio .spx-mockup-stripe::before{content:"";left:50%;position:absolute;top:-75px}.spx-mockup-surface-studio .spx-mockup-stripe::after{border:6px solid #d5d6d8;border-radius:0 0 18px 18px;border-top:0;box-shadow:inset 0 0 0 4px #c8cacb;height:60px;margin-left:-140px;width:280px;z-index:-1}.spx-mockup-surface-studio .spx-mockup-stripe::before{border:15px solid #e2e3e4;border-radius:0 0 4px 4px;border-top:0;height:70px;margin-left:-150px;width:300px;z-index:-2}.spx-mockup-surface-studio .spx-mockup-power{background:#eff0f0;border:solid #e2e3e4;border-radius:0 0 2px 2px;border-width:0 4px 2px 4px;height:32px;margin:30px auto 0 auto;position:relative;width:250px}.spx-mockup-surface-studio .spx-mockup-power::after{background:#adb0b3;content:"";height:2px;left:-4px;position:absolute;top:4px;width:250px}.spx-mockup-imac-pro{height:484px;width:624px}.spx-mockup-imac-pro .spx-mockup-frame{background:#0d0d0d;border-radius:18px;box-shadow:inset 0 0 0 2px #080808;height:428px;padding:24px 24px 80px 24px;position:relative;width:624px}.spx-mockup-imac-pro .spx-mockup-frame::after{background:#2f2e33;border-radius:0 0 18px 18px;bottom:2px;content:"";height:54px;left:2px;position:absolute;width:620px}.spx-mockup-imac-pro .spx-mockup-frame::before{bottom:15px;color:#0d0d0d;content:"";font-size:24px;height:24px;left:50%;line-height:24px;margin-left:-100px;position:absolute;text-align:center;width:200px;z-index:9}.spx-mockup-imac-pro .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:324px;width:576px}.spx-mockup-imac-pro .spx-mockup-power::after,.spx-mockup-imac-pro .spx-mockup-power::before{content:""}.spx-mockup-imac-pro .spx-mockup-power::after{background:#222225;border-radius:2px;height:6px;margin:0 auto;position:relative;width:180px}.spx-mockup-imac-pro .spx-mockup-power::before{border:solid transparent;border-bottom-color:#333;border-width:0 8px 50px 8px;height:50px;margin:0 auto;position:relative;width:130px}.spx-mockup-apple-watch{height:234px;max-width:300px}.spx-mockup-apple-watch .spx-mockup-frame{background:#0d0d0d;border-radius:40px;box-shadow:inset 0 0 2px 2px #adb0b3, inset 0 0 0 6px #e2e3e4, inset 0 0 0 8px #e2e3e4;height:234px;padding:32px;position:relative;width:200px}.spx-mockup-apple-watch .spx-mockup-frame::after{border-radius:30px;box-shadow:inset 0 0 25px 0 rgba(255, 255, 255, 0.75);content:"";height:216px;left:9px;position:absolute;top:9px;width:182px}.spx-mockup-apple-watch .spx-mockup-content{border:2px solid #121212;border-radius:2px;height:170px;width:136px}';export{a as spx_mockup}