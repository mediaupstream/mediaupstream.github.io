(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(36)},28:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=(t(28),t(40)),l=t(41),m=t(20),u=t(14),s=t(7),f=t(6),p=t(2);function d(){var e=Object(s.a)(["\n  z-index: 100;\n  background: ",";\n  background-size: cover;\n  cursor: pointer;\n"]);return d=function(){return e},e}function b(){var e=Object(s.a)(["\n  transform-style: preserve-3d;\n  z-index: 100;\n\n  position: relative;\n  background: ",';\n  padding-bottom: 0;\n  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.4);\n\n  & > * {\n    z-index: 200;\n    transform: translateZ(1px);\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    \n    ',"\n    opacity: 0.1;\n    pointer-events: none;\n    z-index: 1;\n  }\n"]);return b=function(){return e},e}function x(){var e=Object(s.a)(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.4;\n  display: inline-block;\n  transform-origin: top left;\n  transition: transform 0.1s linear, opacity 0.1s linear;\n  &:hover, &:active, &:focus, &.active {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n"]);return x=function(){return e},e}function h(){var e=Object(s.a)(["\n  padding-left: 0.5rem;\n  text-decoration: none;\n  color: #777;\n  opacity: 0.7;\n  display: inline-block;\n  text-transform: lowercase;\n  &.active, &:hover, &:active, &:focus {\n    opacity: 1;\n  }\n  &.active {\n    text-decoration: underline;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  box-sizing: border-box;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border-top: 8px dotted ",";\n  height: 2px;\n  opacity: 0.1;\n"]);return g=function(){return e},e}var E="#353940",y="#76818E",v=[{name:"Instagram",url:"https://www.instagram.com/am.id.a/"},{name:"Github",url:"https://github.com/mediaupstream"}],w=[{name:"Emoji Encoder",url:"/emoji-encode"},{name:"Lines",url:"/sandbox/lines"},{name:"Color Box",url:"/color-box"},{name:"Cube Draw",url:"/sandbox/cube-draw/"}],k=function(e){return r.a.createElement(p.Box,Object.assign({px:[4,4,5],py:[3,4],mx:[-4,-4,-5],my:0},e))},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Social:"}),v.map(function(e){return r.a.createElement(B,{fontSize:2,key:e.name},r.a.createElement(z,{href:e.url,color:"#fff",target:"_blank",py:2,style:{display:"block",whiteSpace:"nowrap"}},e.name))}))},O=(Object(f.default)(p.Box).attrs({as:"hr",my:3})(g(),E),Object(f.default)(function(e){return r.a.createElement(p.Link,e)})(h())),z=Object(f.default)(function(e){return r.a.createElement(p.Link,Object.assign({color:"#1f769d"},e))})(x()),B=function(e){return r.a.createElement(p.Text,Object.assign({fontWeight:300,color:y},e))},S=function(e){return r.a.createElement(p.Heading,Object.assign({color:E,fontWeight:400},e))},T=Object(f.default)(p.Box)(b(),E,""),W=Object(f.default)(p.Box)(d(),function(e){return"url(".concat(e.bgImage,")")}),D=["\xcdsland","Desert"],M=function(){var e=r.a.useState(D[0]),n=Object(u.a)(e,2),t=n[0],a=n[1],o=r.a.useState(Math.round(8*Math.random())||1),c=Object(u.a)(o,2),i=c[0],l=c[1],s="/img/bg/".concat(t,"/").concat(i,".jpeg");return r.a.createElement(p.Flex,{flexWrap:"wrap",style:{height:"100vh"}},r.a.createElement(W,Object.assign({width:[1,1,4/9]},{bgImage:s},{py:7,onClick:function(){l(function(e){return e<8?e+1:1})}})),r.a.createElement(T,{px:[4,4,5],width:[1,1,5/9]},r.a.createElement(k,{bg:"#fff",py:["2rem","4rem"]},r.a.createElement(p.Box,{pr:"3.5rem"},r.a.createElement("img",{alt:"profile avatar",src:"/img/profile.jpg",style:{width:100,borderRadius:600,marginBottom:"2rem"}})),r.a.createElement(p.Box,{width:[1,1,5/7]},r.a.createElement(S,{fontSize:5},"Media Upstream"),r.a.createElement(B,{py:2,fontSize:4},"Building the Modern Web"),r.a.createElement(B,{py:2,fontSize:3,lineHeight:1.4},"Media Upstream is the personal brand for Minneapolis based software engineer Derek Anderson"),r.a.createElement(B,{py:2,fontSize:3,lineHeight:1.4},"His work has contributed to the success of a variety of clients and startups such as: Target.com, Axiom.co, FrontendMasters.com, and more"),r.a.createElement(B,{pt:4,fontSize:2,lineHeight:1.4},r.a.createElement("span",{style:{filter:"contrast(1.5)"}},"\ud83d\udcf7")," ",D.map(function(e,n){return r.a.createElement(O,{href:"#",onClick:function(n){n.preventDefault(),a(e)},key:e,className:e===t?"active":"",children:e})})),r.a.createElement(B,{fontSize:"12px",color:"#aaa",pt:2},Object(m.a)(Array(8).keys()).map(function(e){return r.a.createElement(O,{href:"#",onClick:function(n){n.preventDefault(),l(e+1)},key:e,className:e+1===i?"active":"",children:e+1})})))),r.a.createElement(k,{bg:E,py:["2rem","4rem"]},r.a.createElement(p.Flex,{alignItems:"top",flexDirection:["row"]},r.a.createElement(p.Box,{pr:"3.5rem"},r.a.createElement(B,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Experiments:"}),w.map(function(e){return r.a.createElement(p.Box,{key:e.url},r.a.createElement(z,{target:"_blank",href:e.url,py:2,color:"#fff",style:{display:"block",whiteSpace:"nowrap"}},e.name))})),r.a.createElement(p.Box,null,r.a.createElement(j,null))))))},C=t(38);function F(){var e=Object(s.a)(["\n  text-decoration: none;\n  transition: all 0.24s linear;\n  border: 0px solid pink;\n  transform: scale(1);\n  &:hover {\n    background-color: #333;\n    transform: scale(1.4);\n    border: 40px solid pink;\n  }\n"]);return F=function(){return e},e}var H=Object(f.default)(p.Text).attrs({href:"/",bg:"#777",color:"#fff",px:3,py:2,children:"back"})(F()),I=function(e){return r.a.createElement(p.Text,{my:4},r.a.createElement(C.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(H,null)))},A=function(){return r.a.createElement(p.Flex,{bg:"#f3f1eb",style:{width:"100vw",height:"100vh"}},r.a.createElement(p.Box,{m:"auto"},r.a.createElement(p.Text,null,"it"),r.a.createElement(p.Text,null,"may"),r.a.createElement(p.Text,null,"be"),r.a.createElement(p.Text,null,"that"),r.a.createElement(p.Text,null,"you"),r.a.createElement(p.Text,null,"are"),r.a.createElement(p.Text,null,"lost"),r.a.createElement(I,null)))},L=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:M}),r.a.createElement(l.a,{component:A}))},J=function(){return r.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(39);c.a.render(r.a.createElement(N.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.2eaf043a.chunk.js.map