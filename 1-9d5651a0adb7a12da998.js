(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(144),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(151),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var s=n(49);n.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(140),c=n(145),u={color:c.g,backgroundColor:c.e},m={color:c.g,backgroundColor:c.f},s={color:c.e,backgroundColor:c.g},d={color:c.a,backgroundColor:c.g},f=l.a.a.withConfig({displayName:"button__StButton",componentId:"r1rucv-0"})(["background-color:",";color:",";padding:0.3em 3em;text-decoration:none;"],function(e){return e.theme.backgroundColor},function(e){return e.theme.color}),g=function(e){var t=e.to,n=e.children,a=e.theme;return r.a.createElement(f,{theme:a,href:t},n)};g.defaultProps={theme:u},g.propTypes={theme:i.a.oneOf([u,m,s,d]),to:i.a.string.isRequired};var h=n(142);n.d(t,"f",function(){return w}),n.d(t,"e",function(){return b}),n.d(t,"b",function(){return C}),n.d(t,"g",function(){return y}),n.d(t,"a",function(){return x}),n.d(t,"d",function(){return v}),n.d(t,"c",function(){return k}),n.d(t,"h",function(){return S});var p=Object(h.withPrefix)("/kids.jpg"),E=Object(h.withPrefix)("/heroimage.jpg"),w={backgroundColor:c.e,color:c.g,titleColor:c.g,buttonTheme:s},b={backgroundColor:c.d,color:c.a,titleColor:c.f,buttonTheme:m},C={backgroundColor:c.c,color:c.a,titleColor:c.a,buttonTheme:u},y={backgroundColor:c.g,color:c.a,titleColor:c.a,buttonTheme:u},x={backgroundColor:c.d,color:c.b,titleColor:c.a,buttonTheme:u},v={backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"transparent",background:"url("+p+")",color:c.g,titleColor:c.g,buttonTheme:d,padding:"3rem"},k={backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"transparent",background:"url("+E+") no-repeat bottom right",color:c.g,titleColor:c.g,buttonTheme:d,padding:"3rem",additionalMdRules:"\n  @media (max-width: 575px) {\n    background-position-x: -750px;\n  }\n  "},_=l.a.div.withConfig({displayName:"infoblock__StContainer",componentId:"xbey43-0"})(["display:flex;flex-direction:column;align-items:center;padding:6rem 2rem;background:",";background-color:",";background-repeat:",";background-size:",";width:",";color:",";justify-content:",";height:100%;",""],function(e){return e.theme.background?e.theme.background:"none"},function(e){return e.theme.backgroundColor},function(e){return e.theme.backgroundRepeat?e.theme.backgroundRepeat:"initial"},function(e){return e.theme.backgroundSize?e.theme.backgroundSize:"initial"},function(e){return e.width},function(e){return e.theme.color},function(e){return e.justifyContent||"space-between"},function(e){return e.additionalMdRules}),j=l.a.h1.withConfig({displayName:"infoblock__StTitle",componentId:"xbey43-1"})(["color:",";font-weight:",";font-size:",";text-align:center;margin-bottom:0;"],function(e){return e.theme.titleColor},function(e){return e.isHeroImage?"900":"500"},function(e){return e.isHeroImage?"4.25rem":"3.25rem"}),I=l.a.div.withConfig({displayName:"infoblock__StContent",componentId:"xbey43-2"})(["margin:",";max-width:",";font-size:",";line-height:",";text-align:",";"],function(e){return e.disableMargin?"initial":"4rem 0"},function(e){return e.isHeroImage?"35rem":"unset"},function(e){return e.isHeroImage?"1.3rem":"1.2rem"},function(e){return e.isHeroImage?"1.5rem":"1.4rem"},function(e){return e.isHeroImage?"center":"initial"}),S=function(e){var t=e.title,n=e.width,a=e.content,o=e.theme,i=e.action,l=e.anchorLink,c=e.isHeroImage,u=e.justifyContent,m=null!==i?r.a.createElement(g,{theme:o.buttonTheme,to:i.to},i.text):null;return r.a.createElement(_,{width:n,theme:o,id:l,justifyContent:u,additionalMdRules:o.additionalMdRules},r.a.createElement(j,{isHeroImage:c,theme:o},t),r.a.createElement(I,{isHeroImage:c,disableMargin:e.disableMargin},a),m)};S.defaultProps={width:"100%",theme:w,isHeroImage:!1},S.propTpyes={disableMargin:i.a.bool,bgColor:i.a.oneOf([c.g,c.d,c.e,c.f]).isRequired,title:i.a.string.isRequired,content:i.a.node.isRequired,width:i.a.string,justifyContent:i.a.string,theme:i.a.oneOf([w,b,C]),action:i.a.shape({text:i.a.string.isRequired,to:i.a.string.isRequired}),anchorLink:i.a.string,isHeroImage:i.a.bool}},145:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"b",function(){return u});var a="#ffffff",r="#f2f1f7",o="#000000",i="#fce6e7",l="#2e2262",c="#e30613",u="#e20613"},146:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={text:"Kostenlos anmelden!",to:"https://www.eventbrite.de/e/speakonf-die-erste-speaker-unkonferenz-in-rheinmain-registrierung-54697506715"}},149:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=n(140).a.span.withConfig({displayName:"bold__StBold",componentId:"sc-91zdlv-0"})(["font-weight:normal;"])},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(143),i=n(140),l=n(141),c=i.a.p.withConfig({displayName:"paragraph__StParagraph",componentId:"sc-1bkqqmt-0"})(["font-size:1.3rem;"]),u=n(142);n.d(t,"b",function(){return w}),n.d(t,"a",function(){return b}),n.d(t,"c",function(){return C});var m=Object(i.a)(l.Grid).withConfig({displayName:"infoblock_when_where__StGrid",componentId:"sc-7utvkw-0"})(["height:100%;"]),s={xs:2,sm:2,md:2,lg:2},d={xs:10,sm:10,md:10,lg:10},f=Object(u.withPrefix)("/icons/Kalender.svg"),g=Object(u.withPrefix)("/icons/Ort.svg"),h=Object(i.a)(l.Row).withConfig({displayName:"infoblock_when_where__StRow",componentId:"sc-7utvkw-1"})(["align-items:center;"]),p=r.a.createElement(m,{fluid:!0},r.a.createElement(h,null,r.a.createElement(l.Col,s,r.a.createElement("img",{alt:"Kalendar icon",src:f,style:{width:"2rem"}})),r.a.createElement(l.Col,d,r.a.createElement(c,null,"Sa. 16. Mai 2020 ",r.a.createElement("br",null),"10:00 Uhr bis 17:00 Uhr")))),E=r.a.createElement(m,{fluid:!0},r.a.createElement(l.Row,null,r.a.createElement(l.Col,s,r.a.createElement("img",{alt:"Globus icon",src:g,style:{width:"2rem"}})),r.a.createElement(l.Col,d,r.a.createElement(c,null,"cosee GmbH ",r.a.createElement("br",null),"Mina-Rees-Straße 8",r.a.createElement("br",null),"64295 Darmstadt")))),w="wann",b={title:"Wann?",content:p,theme:o.f,action:{text:"Kalendereintrag",to:"calendar.ics"},anchorLink:w},C={title:"Wo?",content:E,theme:o.b,action:{text:"Karte",to:"https://goo.gl/maps/fX1AfbSmFv82"},anchorLink:"wo"}},151:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},153:function(e,t,n){"use strict";n.d(t,"a",function(){return x}),n.d(t,"b",function(){return v});var a=n(7),r=n.n(a),o=n(51),i=n.n(o),l=n(0),c=n.n(l),u=n(140),m=n(141),s=n(171),d=n.n(s),f=u.a.div.withConfig({displayName:"countdown__StCountDownContainer",componentId:"j755x4-0"})(["display:flex;flex-direction:column;"]),g=Object(u.a)(m.Col).attrs({xs:12,className:"hidden-md hidden-lg hidden-xl"}).withConfig({displayName:"countdown__VSpacer",componentId:"j755x4-1"})(["height:20px;"]),h=u.a.div.withConfig({displayName:"countdown__StCountDownContainerField",componentId:"j755x4-2"})(["display:flex;flex-direction:column;align-items:center;"]),p=Object(u.a)(m.Row).withConfig({displayName:"countdown__StCenteredRow",componentId:"j755x4-3"})(["justify-content:center;"]),E=u.a.p.withConfig({displayName:"countdown__StExpiredText",componentId:"j755x4-4"})(["font-size:3rem;font-weight:normal;"]),w=u.a.span.withConfig({displayName:"countdown__CountDownValue",componentId:"j755x4-5"})(["font-size:3.5rem;line-height:3.5rem;font-weight:bold;"]),b=u.a.span.withConfig({displayName:"countdown__CountDownDescription",componentId:"j755x4-6"})(["font-size:1.5rem;"]),C=Object(u.a)(m.Grid).withConfig({displayName:"countdown__StGrid",componentId:"j755x4-7"})([""]),y={xs:9,sm:6,md:3,lg:2},x="countdown",v=function(e){function t(t){var n;(n=e.call(this,t)||this).getTimeLeft=n.getTimeLeft.bind(i()(i()(n))),n.then=d.a.tz("2020-05-16 10:00:00","Europe/Berlin");var a=n.getTimeLeft(),r=a.delta,o=a.daysLeft,l=a.hoursLeft,c=a.minutesLeft,u=a.secondsLeft;return r>0&&(n.countDownTimer=setInterval(n.getTimeLeft,1e3)),n.state={expired:r<=0,daysLeft:o,hoursLeft:l,minutesLeft:c,secondsLeft:u},n}r()(t,e);var n=t.prototype;return n.getTimeLeft=function(){var e=d()().tz("Europe/Berlin"),t=this.then-e,n=0,a=0,r=0,o=0;if(t>0){var i=t/1e3,l=i/60,c=l/60,u=c/24;o=parseInt(i%60),r=parseInt(l%60),a=parseInt(c%24),n=Math.floor(u)}return this.setState({expired:t<=0,daysLeft:n,hoursLeft:a,minutesLeft:r,secondsLeft:o}),{delta:t,daysLeft:n,hoursLeft:a,minutesLeft:r,secondsLeft:o}},n.componentWillUnmount=function(){this.countDownTimer&&clearInterval(this.countDownTimer)},n.render=function(){var e=c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Col,y,c.a.createElement(f,{id:x},c.a.createElement(h,null,c.a.createElement(w,null,this.state.daysLeft),c.a.createElement(b,null,"Tage")))),c.a.createElement(g,null),c.a.createElement(m.Col,y,c.a.createElement(f,null,c.a.createElement(h,null,c.a.createElement(w,null,this.state.hoursLeft),c.a.createElement(b,null,"Stunden")))),c.a.createElement(g,null),c.a.createElement(m.Col,y,c.a.createElement(f,null,c.a.createElement(h,null,c.a.createElement(w,null,this.state.minutesLeft),c.a.createElement(b,null,"Minuten")))),c.a.createElement(g,null),c.a.createElement(m.Col,y,c.a.createElement(f,null,c.a.createElement(h,null,c.a.createElement(w,null,this.state.secondsLeft),c.a.createElement(b,null,"Sekunden"))))),t=this.state.expired?c.a.createElement(E,null,"Juhuuu, es ist SpeaKonf!"):e;return c.a.createElement(C,null,c.a.createElement(p,null,t))},t}(c.a.Component)},155:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=n(141),i=n(156),l=n(143),c=n(146),u="was-ist-eine-unkonf",m={md:6,lg:3},s={title:"Was ist eine UnKonf?",content:r.a.createElement(o.Grid,{fluid:!0},r.a.createElement(o.Row,null,r.a.createElement(o.Col,m,r.a.createElement(i.a,{icon:"/icons/Barcamp.svg",content:r.a.createElement("div",null,"Eine UnKonf funktioniert ähnlich wie ein Barcamp.")})),r.a.createElement(o.Col,m,r.a.createElement(i.a,{icon:"/icons/Herz.svg",content:r.a.createElement("div",null,"Zu Beginn stimmen die Teilnehmenden über das Programm ab.")})),r.a.createElement(o.Col,m,r.a.createElement(i.a,{icon:"/icons/Sprecher.svg",content:r.a.createElement("div",null,"Jede teilnehmende Person ist potentielle Sprecherin oder Sprecher.")})),r.a.createElement(o.Col,m,r.a.createElement(i.a,{icon:"/icons/Wissen.svg",content:r.a.createElement("div",null,"Vorträge, Workshops, Diskussionsrunden oder jegliche andere Form des Wissensaustauschs sind denkbar.")})))),theme:l.f,action:c.a,anchorLink:u}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(142),c=n(140),u=c.a.div.withConfig({displayName:"icontextblock__StContainer",componentId:"jp1qed-0"})(["margin-bottom:2rem;"]),m=c.a.img.withConfig({displayName:"icontextblock__StImg",componentId:"jp1qed-1"})(["height:4rem;margin-bottom:0.5rem;"]),s=function(e){var t=Object(l.withPrefix)(e.icon);return r.a.createElement(u,null,r.a.createElement("div",null,r.a.createElement(m,{src:t})),r.a.createElement("div",null,e.content))};s.propTypes={icon:i.a.string.isRequired,content:i.a.node.isRequired}},157:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return s});var a=n(141),r=n(156),o=n(143),i=n(0),l=n.n(i),c=n(146),u={md:6,lg:4},m="wer-darf-mitmachen",s={title:"Wer darf mitmachen?",content:l.a.createElement(a.Grid,{fluid:!0},l.a.createElement(a.Row,null,l.a.createElement(a.Col,u,l.a.createElement(r.a,{icon:"/icons/Hase.svg",content:l.a.createElement("div",null,"Egal ob alter Konferenzhase oder Neuling auf den Bühnen dieser Welt, jeder Teilnehmer ist willkommen!")})),l.a.createElement(a.Col,u,l.a.createElement(r.a,{icon:"/icons/Erfahrungen.svg",content:l.a.createElement("div",null,"Dein Erfahrungsstand spielt keine Rolle. Es ist nicht wichtig, wie viele Jahre du bereits programmierst.")})),l.a.createElement(a.Col,u,l.a.createElement(r.a,{icon:"/icons/Fachgebiete.svg",content:l.a.createElement("div",null,"Wir kommen aus der IT-Branche, freuen uns jedoch auch über Teilnehmer/ innen anderer Fachgebiete.")})))),theme:o.e,action:c.a,anchorLink:m}},158:function(e,t,n){"use strict";n.d(t,"b",function(){return b}),n.d(t,"a",function(){return C});var a=n(0),r=n.n(a),o=n(143),i=n(140),l=n(141),c=n(142),u=n(149),m=Object(c.withPrefix)("/logo/cosee.png"),s=Object(c.withPrefix)("/logo/accso.png"),d=Object(c.withPrefix)("/logo/Bitexpert.png"),f=Object(c.withPrefix)("/logo/dpunkt.png"),g=i.a.img.withConfig({displayName:"infoblock_our_sponsors__StImage",componentId:"kyliul-0"})(["max-width:240px;"]),h=Object(i.a)(l.Row).withConfig({displayName:"infoblock_our_sponsors__StRow",componentId:"kyliul-1"})(["margin-bottom:3rem;"]),p={xs:12,xsOffset:0,sm:6,smOffset:0,md:4,mdOffset:2,lg:4,lgOffset:2},E={xs:12,xsOffset:0,sm:6,smOffset:0,md:4,mdOffset:1,lg:4,lgOffset:1},w=r.a.createElement(l.Grid,null,r.a.createElement(h,null,r.a.createElement(l.Col,p,r.a.createElement(g,{src:m})),r.a.createElement(l.Col,E,r.a.createElement("p",null,r.a.createElement(u.a,null,"cosee")," ist unser Gastgeber und hat uns diese Webseite gebaut und umgesetzt."))),r.a.createElement(h,null,r.a.createElement(l.Col,p,r.a.createElement(g,{src:s})),r.a.createElement(l.Col,E,r.a.createElement("p",null,r.a.createElement(u.a,null,"Accso")," versorgt uns mit leckerem Essen."))),r.a.createElement(h,null,r.a.createElement(l.Col,p,r.a.createElement(g,{src:d})),r.a.createElement(l.Col,E,r.a.createElement("p",null,r.a.createElement(u.a,null,"bitExpert")," verwaltet unsere Social Media-Accounts und hostet unsere Domain."))),r.a.createElement(l.Row,null,r.a.createElement(l.Col,p,r.a.createElement(g,{src:f})),r.a.createElement(l.Col,E,r.a.createElement("p",null,r.a.createElement(u.a,null,"dpunkt")," stellt uns Bücher für unsere Verlosung zur Verfügung.")))),b="sponsors",C={title:"Unsere Sponsoren",content:w,action:null,theme:o.g,anchorLink:b}},159:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),o=n(143),i=n(146),l=r.a.createElement("p",null,"Melde dich jetzt kostenlos an und nimm an der kommenden UnKonf teil!"),c=i.a,u="anmeldung",m={title:"Wir freuen uns auf deinen Besuch!",content:l,action:c,theme:o.d,anchorLink:u}},160:function(e,t,n){"use strict";var a=n(183),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(184),u=n.n(c),m=n(142),s=Object(m.withPrefix)("/icons/fav32.png");function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(m.StaticQuery,{query:f,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},link:[{rel:"shortcut icon",type:"image/jpg",href:""+s}],title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var f="1025518380"},162:function(e,t,n){"use strict";var a=n(163),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(140),u=n(142),m=n(145),s=n(141),d=n(153),f=n(155),g=n(157),h=n(150),p=n(158),E=n(159),w=Object(c.a)(s.Grid).withConfig({displayName:"navigation__StGrid",componentId:"sc-1anu8yn-0"})(["align-items:center;width:100%;"]),b=Object(c.a)(s.Row).withConfig({displayName:"navigation__StRow",componentId:"sc-1anu8yn-1"})(["justify-content:space-between;font-size:0.8rem;"]),C=Object(c.a)(s.Col).withConfig({displayName:"navigation__StCol",componentId:"sc-1anu8yn-2"})(["white-space:nowrap;"]),y=c.a.a.withConfig({displayName:"navigation__StLink",componentId:"sc-1anu8yn-3"})(["text-decoration:none;color:",";"],m.e),x=function(){return o.a.createElement(w,{fluid:!0},o.a.createElement(b,null,o.a.createElement(C,null,o.a.createElement(y,{href:"#"+d.a},"Countdown")),o.a.createElement(C,null,o.a.createElement(y,{href:"#"+f.a},"Info")),o.a.createElement(C,null,o.a.createElement(y,{href:"#"+g.b},"Für wen?")),o.a.createElement(C,null,o.a.createElement(y,{href:"#"+h.b},"Wann & Wo?")),o.a.createElement(C,null,o.a.createElement(y,{href:"#"+p.b},"Sponsoren")),o.a.createElement(C,null,o.a.createElement(y,{href:"#"+E.b},"Anmeldung"))))},v=Object(u.withPrefix)("/logo_v2.svg"),k=c.a.div.withConfig({displayName:"header__StHeaderContainer",componentId:"bu4x9d-0"})(["background:",";max-width:1200px;max-height:5rem;margin:0 auto;"],m.g),_=c.a.img.withConfig({displayName:"header__StImage",componentId:"bu4x9d-1"})(["margin:0;padding:0;max-height:5rem;width:10rem;"]),j=Object(c.a)(s.Col).attrs({className:"hidden-xs hidden-sm"}).withConfig({displayName:"header__StCol",componentId:"bu4x9d-2"})(["align-self:center;"]),I=Object(c.a)(s.Row).withConfig({displayName:"header__StRow",componentId:"bu4x9d-3"})(["max-height:5rem;"]),S=c.a.div.withConfig({displayName:"header__StLogoContainer",componentId:"bu4x9d-4"})(["display:flex;justify-content:center;height:90px;"]),O={xs:12,sm:12,md:3,lg:3},R={md:9,lg:9},N=function(){return o.a.createElement(k,null,o.a.createElement(s.Grid,{fluid:!0},o.a.createElement(I,null,o.a.createElement(s.Col,O,o.a.createElement(S,null,o.a.createElement(_,{src:v}))),o.a.createElement(j,R,o.a.createElement(x,null)))))};N.propTypes={siteTitle:l.a.string},N.defaultProps={siteTitle:""};var L=N,T=(n(182),Object(u.withPrefix)("/icons/Twitter.svg")),z=Object(u.withPrefix)("/icons/Mail.svg"),q=c.a.div.withConfig({displayName:"footer__FooterContainer",componentId:"nglzew-0"})(["background-color:#191919;color:white;"]),P=c.a.img.withConfig({displayName:"footer__IconImage",componentId:"nglzew-1"})(["width:100%;max-height:80px;"]),G=Object(c.a)(s.Row).withConfig({displayName:"footer__CenteredRow",componentId:"nglzew-2"})(["justify-content:center;"]),M=c.a.div.withConfig({displayName:"footer__CenteredTextContainer",componentId:"nglzew-3"})(["width:100%;display:flex;justify-content:center;padding:0 2rem;"]),D=Object(c.a)(s.Col).withConfig({displayName:"footer__InfoBoxCol",componentId:"nglzew-4"})(["margin-bottom:20px;hyphens:manual;"]),H=c.a.div.withConfig({displayName:"footer__VSpacer",componentId:"nglzew-5"})(["height:","px;"],function(e){return 15*e.factor}),W=c.a.a.withConfig({displayName:"footer__ContactLink",componentId:"nglzew-6"})(["text-decoration:none;color:white;"]),B=function(e){e.data;var t={xs:2,xsOffset:0,sm:2,smOffset:0,md:1,mdOffset:0,lg:1,lgOffset:0},n={xs:9,xsOffset:3,sm:8,smOffset:4,md:3,mdOffset:1,lg:3,lgOffset:1},a={xs:9,xsOffset:3,sm:8,smOffset:4,md:3,mdOffset:1,lg:3,lgOffset:1};return o.a.createElement(q,null,o.a.createElement(s.Grid,{fluid:!0},o.a.createElement(H,{factor:5}),o.a.createElement(s.Row,null,o.a.createElement(D,n,o.a.createElement("div",null,o.a.createElement("strong",null,"Kontakt:"),o.a.createElement("br",null),o.a.createElement(W,{href:"mailto:melanie@jug-da.de"},"melanie@jug-da.de"),o.a.createElement("br",null),o.a.createElement(W,{href:"mailto:falk@jug-da.de"},"falk@jug-da.de"))),o.a.createElement(D,n,o.a.createElement("strong",null,"Veranstaltungsort:"),o.a.createElement("br",null),"cosee GmbH",o.a.createElement("br",null),"Mina-Rees-Straße. 8",o.a.createElement("br",null),"64295 Darmstadt"),o.a.createElement(D,n,o.a.createElement("strong",null,"Fotografien:"),o.a.createElement("br",null),"Alex Litvin (Unsplash)",o.a.createElement("br",null),"Bernd Rücker")),o.a.createElement(s.Row,null,o.a.createElement(D,a,o.a.createElement("strong",null,o.a.createElement(W,{href:"https://www.jug-da.de/impressum/"},"Impressum")),o.a.createElement("br",null),o.a.createElement("strong",null,o.a.createElement(W,{href:"https://www.jug-da.de/datenschutz/"},"Daten­schutz­erklärung"))),o.a.createElement(D,a,"Website made by ",o.a.createElement("br",null),o.a.createElement("strong",null,"© cosee 2019"))),o.a.createElement(H,{factor:5}),o.a.createElement(G,null,o.a.createElement(M,null,o.a.createElement("p",null,"Eine Veranstaltung des iJUG e.V., organisiert durch die JUG Darmstadt."))),o.a.createElement(H,{factor:3}),o.a.createElement(G,null,o.a.createElement(s.Col,t,o.a.createElement("a",{href:"https://www.twitter.com/JUG_DA"},o.a.createElement(P,{src:T}))),o.a.createElement(s.Col,t,o.a.createElement("a",{href:"mailto:info@jug-da.de"},o.a.createElement(P,{src:z})))),o.a.createElement(H,{factor:3})))},K=c.a.div.withConfig({displayName:"layout__StContent",componentId:"sc-1dguz4-0"})(["max-width:","px;min-width:","px;margin:0 auto;padding-top:0;background:",";"],1200,300,m.g),U=function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(K,null,t,o.a.createElement(B,null)))},data:a})};U.propTypes={children:l.a.node.isRequired};t.a=U},163:function(e){e.exports={data:{site:{siteMetadata:{title:"SpeaKonf"}}}}},166:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(68),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},182:function(e,t,n){},183:function(e){e.exports={data:{site:{siteMetadata:{title:"SpeaKonf",description:"SpeaKonf",author:"@coseeaner"}}}}}}]);
//# sourceMappingURL=1-9d5651a0adb7a12da998.js.map