(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t(35)},27:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),l=t.n(o),i=(t(27),t(39)),c=t(40),m=t(19),u=t(7),s=t(6),d=t(2);function f(){var e=Object(u.a)(["\n  z-index: 100;\n  background: ",";\n  background-size: cover;\n"]);return f=function(){return e},e}function p(){var e=Object(u.a)(["\n  transform-style: preserve-3d;\n  z-index: 100;\n\n  position: relative;\n  background: ",';\n  padding-bottom: 0;\n  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.4);\n\n  & > * {\n    z-index: 200;\n    transform: translateZ(1px);\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: repeating-radial-gradient(\n      circle at 15%,\n      #333,\n      #333 10px,\n      #eee 0,\n      #eee 20px\n    );\n    opacity: 0.1;\n    pointer-events: none;\n    z-index: 1;\n  }\n']);return p=function(){return e},e}function g(){var e=Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  transition: transform 0.2s ease-in-out;\n  display: inline-block;\n  &:hover {\n    color: #000;\n    transform: scale(1.1) skewX(0deg);\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border-top: 8px dotted ",";\n  height: 2px;\n  opacity: 0.1;\n"]);return x=function(){return e},e}var b="#585a71",h="#e7e8ea",E="#76818E",w=[{name:"instagram",url:"https://www.instagram.com/am.id.a/"},{name:"github",url:"https://github.com/mediaupstream"},{name:"linkedin",url:"https://www.linkedin.com/in/derekanderson523/"}],k=[{name:"Emoji Encoder",url:"/emoji-encode"},{name:"Lines",url:"/sandbox/lines"},{name:"Love Growth Cash",url:"/love-growth-cash"},{name:"Color Box",url:"/color-box"},{name:"Game Grid",url:"http://northern.lights.mn/projects/game-grid-working/"},{name:"Cube Draw",url:"/sandbox/cube-draw/"},{name:"Tic Tac Toe",url:"/ttt-react-animated"}],y=function(e){return r.a.createElement(d.Box,Object.assign({px:[4,4,5],py:[3,4],mx:[-4,-4,-5],my:0},e))},v=function(e){return r.a.createElement(y,null,r.a.createElement(O,{textAlign:"center",fontSize:2},w.map(function(e){return r.a.createElement(j,{key:e.name,href:e.url,mx:3,my:1,color:"#fff",target:"_blank"},e.name)})))},j=(Object(s.default)(d.Box).attrs({as:"hr",my:3})(x(),b),Object(s.default)(function(e){return r.a.createElement(d.Link,Object.assign({color:"#1f769d"},e))})(g())),O=function(e){return r.a.createElement(d.Text,Object.assign({fontWeight:300,color:E},e))},B=function(e){return r.a.createElement(d.Heading,Object.assign({color:b,fontWeight:400},e))},T=Object(s.default)(d.Box)(p(),b),z=Object(s.default)(d.Box)(f(),function(e){return"url(".concat(e.bgImage,")")}),W=function(){var e=r.a.useState(Math.round(8*Math.random())||1),n=Object(m.a)(e,2),t=n[0],a=n[1],o="/img/bg/".concat(t,".jpeg");return r.a.createElement(d.Flex,{flexWrap:"wrap",style:{height:"100vh"}},r.a.createElement(z,Object.assign({width:[1,1,4/9]},{bgImage:o},{py:7,onClick:function(){a(function(e){return e<8?e+1:1})}})),r.a.createElement(T,{px:[4,4,5],width:[1,1,5/9]},r.a.createElement(y,{bg:"#fff",py:["2rem","5rem"]},r.a.createElement(d.Flex,{alignItems:"top",flexDirection:["column","row"]},r.a.createElement(d.Box,{pr:"3.5rem"},r.a.createElement("img",{alt:"profile avatar",src:"/img/profile.jpg",style:{width:100,borderRadius:600,marginBottom:"2rem"}})),r.a.createElement(d.Box,null,r.a.createElement(B,{fontSize:5},"Hi, I'm Derek."),r.a.createElement(O,{py:2,fontSize:4},"I create interfaces, applications, and art on the web"),r.a.createElement(O,{py:2,fontSize:3,lineHeight:1.4},"I love making digital art, hiking, exploring, and spending time with my family.")))),r.a.createElement(y,{bg:h},r.a.createElement(O,{fontWeight:200,fontSize:4,mb:2},"Previous:"),r.a.createElement(d.Flex,{flexWrap:"wrap"},["Drinkworks","Target","Frontend Masters","Invisible Friend","Jingit","Voice Hive"].map(function(e){return r.a.createElement(d.Box,{key:e,width:[.5,.5,1/3],py:2,color:"#666",children:e})}),r.a.createElement(d.Box,{width:[.5,.5,1/3],py:2},r.a.createElement(j,{href:"https://www.linkedin.com/in/derekanderson523",target:"_blank",children:"more..."})))),r.a.createElement(y,{bg:b},r.a.createElement(O,{fontWeight:200,fontSize:4,mb:2,color:"#fff",children:"Experiments:"}),r.a.createElement(d.Flex,{flexWrap:"wrap"},k.map(function(e){return r.a.createElement(d.Box,{key:e.url,width:[.5,.5,1/3]},r.a.createElement(j,{target:"_blank",href:e.url,py:2,color:"#fff",style:{display:"block"}},e.name))}))),r.a.createElement(v,null)))},I=t(37);function F(){var e=Object(u.a)(["\n  text-decoration: none;\n  transition: all 0.24s linear;\n  border: 0px solid pink;\n  transform: scale(1);\n  &:hover {\n    background-color: #333;\n    transform: scale(1.4);\n    border: 40px solid pink;\n  }\n"]);return F=function(){return e},e}var S=Object(s.default)(d.Text).attrs({href:"/",bg:"#777",color:"#fff",px:3,py:2,children:"back"})(F()),D=function(e){return r.a.createElement(d.Text,{my:4},r.a.createElement(I.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(S,null)))},C=function(){return r.a.createElement(d.Flex,{bg:"#f3f1eb",style:{width:"100vw",height:"100vh"}},r.a.createElement(d.Box,{m:"auto"},r.a.createElement(d.Text,null,"it"),r.a.createElement(d.Text,null,"may"),r.a.createElement(d.Text,null,"be"),r.a.createElement(d.Text,null,"that"),r.a.createElement(d.Text,null,"you"),r.a.createElement(d.Text,null,"are"),r.a.createElement(d.Text,null,"lost"),r.a.createElement(D,null)))},H=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{path:"/",exact:!0,component:W}),r.a.createElement(c.a,{component:C}))},G=function(){return r.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(38);l.a.render(r.a.createElement(J.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.9833f7c4.chunk.js.map