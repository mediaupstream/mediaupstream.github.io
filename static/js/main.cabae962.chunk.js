(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t(35)},27:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),l=(t(27),t(39)),i=t(40),m=t(19),u=t(7),s=t(6),f=t(2);function p(){var e=Object(u.a)(["\n  z-index: 100;\n  background: ",";\n  background-size: cover;\n"]);return p=function(){return e},e}function d(){var e=Object(u.a)(["\n  transform-style: preserve-3d;\n  z-index: 100;\n\n  position: relative;\n  background: ",';\n  padding-bottom: 0;\n  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.4);\n\n  & > * {\n    z-index: 200;\n    transform: translateZ(1px);\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: repeating-radial-gradient(\n      circle at 15%,\n      #333,\n      #333 10px,\n      #eee 0,\n      #eee 20px\n    );\n    opacity: 0.1;\n    pointer-events: none;\n    z-index: 1;\n  }\n']);return d=function(){return e},e}function b(){var e=Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.4;\n  display: inline-block;\n  transform-origin: top left;\n  transition: transform 0.2s linear, opacity 0.2s linear;\n  &:hover, &:active, &:focus {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n"]);return b=function(){return e},e}function x(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border-top: 8px dotted ",";\n  height: 2px;\n  opacity: 0.1;\n"]);return x=function(){return e},e}var g="#353940",h="#76818E",E=[{name:"Instagram",url:"https://www.instagram.com/am.id.a/"},{name:"Github",url:"https://github.com/mediaupstream"}],y=[{name:"Emoji Encoder",url:"/emoji-encode"},{name:"Lines",url:"/sandbox/lines"},{name:"Color Box",url:"/color-box"},{name:"Cube Draw",url:"/sandbox/cube-draw/"}],w=function(e){return r.a.createElement(f.Box,Object.assign({px:[4,4,5],py:[3,4],mx:[-4,-4,-5],my:0},e))},v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Social:"}),E.map(function(e){return r.a.createElement(j,{fontSize:2,key:e.name},r.a.createElement(k,{href:e.url,color:"#fff",target:"_blank",py:2,style:{display:"block",whiteSpace:"nowrap"}},e.name))}))},k=(Object(s.default)(f.Box).attrs({as:"hr",my:3})(x(),g),Object(s.default)(function(e){return r.a.createElement(f.Link,Object.assign({color:"#1f769d"},e))})(b())),j=function(e){return r.a.createElement(f.Text,Object.assign({fontWeight:300,color:h},e))},O=function(e){return r.a.createElement(f.Heading,Object.assign({color:g,fontWeight:400},e))},B=Object(s.default)(f.Box)(d(),g),z=Object(s.default)(f.Box)(p(),function(e){return"url(".concat(e.bgImage,")")}),S=function(){var e=r.a.useState(Math.round(8*Math.random())||1),n=Object(m.a)(e,2),t=n[0],a=n[1],o="/img/bg/".concat("islandi","/").concat(t,".jpeg");return r.a.createElement(f.Flex,{flexWrap:"wrap",style:{height:"100vh"}},r.a.createElement(z,Object.assign({width:[1,1,4/9]},{bgImage:o},{py:7,onClick:function(){a(function(e){return e<8?e+1:1})}})),r.a.createElement(B,{px:[4,4,5],width:[1,1,5/9]},r.a.createElement(w,{bg:"#fff",py:["2rem","5rem"]},r.a.createElement(f.Box,{pr:"3.5rem"},r.a.createElement("img",{alt:"profile avatar",src:"/img/profile.jpg",style:{width:100,borderRadius:600,marginBottom:"2rem"}})),r.a.createElement(f.Box,{width:[1,1,5/7]},r.a.createElement(O,{fontSize:5},"Media Upstream"),r.a.createElement(j,{py:2,fontSize:4},"Building the Modern Web"),r.a.createElement(j,{py:2,fontSize:3,lineHeight:1.4},"Media Upstream is the personal brand for Minneapolis based software engineer Derek Anderson"),r.a.createElement(j,{py:2,fontSize:3,lineHeight:1.4},"His work has contributed to the success of a variety of clients and startups such as: Target.com, Axiom.co, FrontendMasters.com, and more"))),r.a.createElement(w,{bg:g},r.a.createElement(f.Flex,{alignItems:"top",flexDirection:["column","row"]},r.a.createElement(f.Box,{pr:"3.5rem"},r.a.createElement(j,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Experiments:"}),y.map(function(e){return r.a.createElement(f.Box,{key:e.url},r.a.createElement(k,{target:"_blank",href:e.url,py:2,color:"#fff",style:{display:"block",whiteSpace:"nowrap"}},e.name))})),r.a.createElement(f.Box,null,r.a.createElement(v,null))))))},T=t(37);function W(){var e=Object(u.a)(["\n  text-decoration: none;\n  transition: all 0.24s linear;\n  border: 0px solid pink;\n  transform: scale(1);\n  &:hover {\n    background-color: #333;\n    transform: scale(1.4);\n    border: 40px solid pink;\n  }\n"]);return W=function(){return e},e}var M=Object(s.default)(f.Text).attrs({href:"/",bg:"#777",color:"#fff",px:3,py:2,children:"back"})(W()),F=function(e){return r.a.createElement(f.Text,{my:4},r.a.createElement(T.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(M,null)))},I=function(){return r.a.createElement(f.Flex,{bg:"#f3f1eb",style:{width:"100vw",height:"100vh"}},r.a.createElement(f.Box,{m:"auto"},r.a.createElement(f.Text,null,"it"),r.a.createElement(f.Text,null,"may"),r.a.createElement(f.Text,null,"be"),r.a.createElement(f.Text,null,"that"),r.a.createElement(f.Text,null,"you"),r.a.createElement(f.Text,null,"are"),r.a.createElement(f.Text,null,"lost"),r.a.createElement(F,null)))},D=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:S}),r.a.createElement(i.a,{component:I}))},H=function(){return r.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(38);c.a.render(r.a.createElement(C.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.cabae962.chunk.js.map