(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(36)},28:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(15),c=t.n(o),l=(t(28),t(40)),i=t(41),m=t(20),s=t(13),u=t(7),f=t(6),p=t(2);var d,b,x,h,E;var g="#353940",y="#76818E",v=[{name:"Instagram",url:"https://www.instagram.com/am.id.a/"},{name:"Github",url:"https://github.com/mediaupstream"}],w=[{name:"Emoji Encoder",url:"/emoji-encode"},{name:"Lines",url:"/sandbox/lines"},{name:"Color Box",url:"/color-box"},{name:"Cube Draw",url:"/sandbox/cube-draw/"},{name:"Axiom Pumpkin",url:"/sandbox/axiom-pumpkin"}],k=function(e){return r.a.createElement(p.Box,Object.assign({px:[4,4,5],py:[3,4],mx:[-4,-4,-5],my:0},e))},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Social:"}),v.map(function(e){return r.a.createElement(B,{fontSize:2,key:e.name},r.a.createElement(z,{href:e.url,color:"#fff",target:"_blank",py:2,style:{display:"block",whiteSpace:"nowrap"}},e.name))}))},O=(Object(f.default)(p.Box).attrs({as:"hr",my:3})(d||(d=Object(u.a)(["\n  box-sizing: border-box;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border-top: 8px dotted ",";\n  height: 2px;\n  opacity: 0.1;\n"])),g),Object(f.default)(function(e){return r.a.createElement(p.Link,e)})(b||(b=Object(u.a)(["\n  padding-left: 0.5rem;\n  text-decoration: none;\n  color: #777;\n  opacity: 0.7;\n  display: inline-block;\n  text-transform: lowercase;\n  &.active,\n  &:hover,\n  &:active,\n  &:focus {\n    opacity: 1;\n  }\n  &.active {\n    text-decoration: underline;\n  }\n"])))),z=Object(f.default)(function(e){return r.a.createElement(p.Link,Object.assign({color:"#1f769d"},e))})(x||(x=Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.4;\n  display: inline-block;\n  transform-origin: top left;\n  transition: transform 0.1s linear, opacity 0.1s linear;\n  &:hover,\n  &:active,\n  &:focus,\n  &.active {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n"]))),B=function(e){return r.a.createElement(p.Text,Object.assign({fontWeight:300,color:y},e))},S=function(e){return r.a.createElement(p.Heading,Object.assign({color:g,fontWeight:400},e))},T=Object(f.default)(p.Box)(h||(h=Object(u.a)(["\n  transform-style: preserve-3d;\n  z-index: 100;\n\n  position: relative;\n  background: ",';\n  padding-bottom: 0;\n  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.4);\n\n  & > * {\n    z-index: 200;\n    transform: translateZ(1px);\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    ',"\n    opacity: 0.1;\n    pointer-events: none;\n    z-index: 1;\n  }\n"])),g,""),W=Object(f.default)(p.Box)(E||(E=Object(u.a)(["\n  z-index: 100;\n  background: ",";\n  background-size: cover;\n  cursor: pointer;\n"])),function(e){return"url(".concat(e.bgImage,")")}),D=["\xcdsland","Desert"],M=function(){var e=r.a.useState(D[0]),n=Object(s.a)(e,2),t=n[0],a=n[1],o=r.a.useState(Math.round(8*Math.random())||1),c=Object(s.a)(o,2),l=c[0],i=c[1],u="/img/bg/".concat(t,"/").concat(l,".jpeg");return r.a.createElement(p.Flex,{flexWrap:"wrap",style:{height:"100vh"}},r.a.createElement(W,{width:[1,1,4/9],bgImage:u,py:7,onClick:function(){i(function(e){return e<8?e+1:1})}}),r.a.createElement(T,{px:[4,4,5],width:[1,1,5/9]},r.a.createElement(k,{bg:"#fff",py:["2rem","4rem"]},r.a.createElement(p.Box,{pr:"3.5rem"},r.a.createElement("img",{alt:"profile avatar",src:"/img/profile.jpg",style:{width:100,borderRadius:600,marginBottom:"2rem"}})),r.a.createElement(p.Box,{width:[1,1,5/7]},r.a.createElement(S,{fontSize:5},"Media Upstream"),r.a.createElement(B,{py:2,fontSize:4},"Building the Modern Web"),r.a.createElement(B,{py:2,fontSize:3,lineHeight:1.4},"Media Upstream is the personal brand for Minneapolis based software developer Derek Anderson"),r.a.createElement(B,{py:2,fontSize:3,lineHeight:1.4},"His work has contributed to the success of a variety of clients and startups such as: Target.com, Axiom.co, FrontendMasters.com, and more"),r.a.createElement(B,{pt:4,fontSize:2,lineHeight:1.4},r.a.createElement("span",{style:{filter:"contrast(1.5)"}},"\ud83d\udcf7")," ",D.map(function(e,n){return r.a.createElement(O,{href:"#",onClick:function(n){n.preventDefault(),a(e)},key:e,className:e===t?"active":"",children:e})})),r.a.createElement(B,{fontSize:"12px",color:"#aaa",pt:2},Object(m.a)(Array(8).keys()).map(function(e){return r.a.createElement(O,{href:"#",onClick:function(n){n.preventDefault(),i(e+1)},key:e,className:e+1===l?"active":"",children:e+1})})))),r.a.createElement(k,{bg:g,py:["2rem","4rem"]},r.a.createElement(p.Flex,{alignItems:"top",flexDirection:["row"]},r.a.createElement(p.Box,{pr:"3.5rem"},r.a.createElement(B,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Experiments:"}),w.map(function(e){return r.a.createElement(p.Box,{key:e.url},r.a.createElement(z,{target:"_blank",href:e.url,py:2,color:"#fff",style:{display:"block",whiteSpace:"nowrap"}},e.name))})),r.a.createElement(p.Box,null,r.a.createElement(j,null))))))},C=t(18),F=t(38);function H(){var e=Object(C.a)(["\n  text-decoration: none;\n  transition: all 0.24s linear;\n  border: 0px solid pink;\n  transform: scale(1);\n  &:hover {\n    background-color: #333;\n    transform: scale(1.4);\n    border: 40px solid pink;\n  }\n"]);return H=function(){return e},e}var I=Object(f.default)(p.Text).attrs({href:"/",bg:"#777",color:"#fff",px:3,py:2,children:"back"})(H()),A=function(e){return r.a.createElement(p.Text,{my:4},r.a.createElement(F.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(I,null)))},L=function(){return r.a.createElement(p.Flex,{bg:"#f3f1eb",style:{width:"100vw",height:"100vh"}},r.a.createElement(p.Box,{m:"auto"},r.a.createElement(p.Text,null,"it"),r.a.createElement(p.Text,null,"may"),r.a.createElement(p.Text,null,"be"),r.a.createElement(p.Text,null,"that"),r.a.createElement(p.Text,null,"you"),r.a.createElement(p.Text,null,"are"),r.a.createElement(p.Text,null,"lost"),r.a.createElement(A,null)))},J=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:M}),r.a.createElement(i.a,{component:L}))},N=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=t(39);c.a.render(r.a.createElement(U.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.f632ba24.chunk.js.map