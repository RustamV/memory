(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{17:function(A,I,g){A.exports={grid:"Grid_grid__24U5p"}},20:function(A,I,g){A.exports={timer:"Timer_timer__3uqam"}},21:function(A,I,g){A.exports={select:"Select_select__sqDQU"}},3:function(A,I,g){A.exports={game:"Game_game__1BEQM",sider:"Game_sider__1WoH7",moves:"Game_moves__2n2V_",size:"Game_size__2iIGz",speed:"Game_speed__3MkOk",startButton:"Game_startButton__1VuC-",modal:"Game_modal__2mRbH",overlay:"Game_overlay__30vNx",header:"Game_header__tCX3R",content:"Game_content__1QC1c"}},38:function(A,I,g){},39:function(A,I,g){"use strict";g.r(I);var Q=g(1),e=g.n(Q),C=g(12),t=g.n(C),j=g(4),n=g(2),E=g(6),B={sizeOptions:[{id:0,label:"4x4",value:{width:4,height:4}},{id:1,label:"4x5",value:{width:4,height:5}},{id:2,label:"5x6",value:{width:5,height:6}},{id:3,label:"6x6",value:{width:6,height:6}}],speedOptions:[{id:0,label:"Fast",value:1e3},{id:1,label:"Normal",value:2e3},{id:2,label:"Slow",value:3e3}],content:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s"]},a=function(A){for(var I,g,Q=A.length;Q;I=Math.floor(Math.random()*Q),g=A[--Q],A[Q]=A[I],A[I]=g);return A},c=g(17),s=g.n(c),i=g(0),o=B.content,w=function(A){var I=A.setMovesCount,g=A.gameStatus,e=A.setGameStatus,C=A.size,t=A.speed,B=A.startGame,c=C.value,w=c.width,r=c.height,M=function(){for(var A=[],I=function(){var A=Object(E.a)(o).splice(0,w*r/2);return a([].concat(Object(E.a)(A),Object(E.a)(A)))}(),g=0;g<w;g++)for(var Q=0;Q<r;Q++){var e=g*r+Q;A.push({id:e,content:I[e],isActive:!1,isOpened:!1})}return A},D=Object(Q.useState)(M()),u=Object(n.a)(D,2),l=u[0],b=u[1],O=Object(Q.useState)([]),f=Object(n.a)(O,2),m=f[0],h=f[1],v=Object(Q.useState)(0),p=Object(n.a)(v,2),G=p[0],_=p[1],k=function(){B(),b(M()),h([]),_(0)};Object(Q.useEffect)((function(){"not-started"===g&&k()}),[g]),Object(Q.useEffect)((function(){k()}),[C,t]);var R=function(A){return l.find((function(I){return I.id===A}))};Object(Q.useEffect)((function(){G/2===w*r&&e("stopped")}),[G]);var x=function(){h([]),b((function(A){return A.map((function(A){return A.isActive?Object(j.a)(Object(j.a)({},A),{},{isActive:!1}):A}))}))},Z=function(A){"not-started"===g&&e("started"),1===m.length&&(I((function(A){return A+1})),setTimeout((function(){x()}),t.value)),m.length<2&&(1===m.length&&m[0]===A?x():(h((function(I){return[].concat(Object(E.a)(I),[A])})),b((function(I){return I.map((function(I){return A===I.id||m[0]===I.id?1===m.length&&S([].concat(Object(E.a)(m),[A]))?(_((function(A){return++A})),Object(j.a)(Object(j.a)({},I),{},{isOpened:!0})):Object(j.a)(Object(j.a)({},I),{},{isActive:!0}):I}))}))))},S=function(A){if(2===A.length){var I=R(A[0]),g=R(A[1]);if(I&&g)return I.content===g.content}return!1};return Object(i.jsx)("div",{className:s.a.grid,style:{gridTemplateColumns:"repeat(".concat(w,", minmax(40px, 100px))")},children:l.map((function(A){return Object(i.jsx)(d,Object(j.a)(Object(j.a)({},A),{},{onClick:function(){return Z(A.id)},speed:t}),A.id)}))})},r=g(8),M=g(5),D=g.n(M),u=g(18),l=g.n(u),d=function(A){var I=A.content,g=A.isActive,Q=A.isOpened,e=A.onClick;A.speed;return Object(i.jsxs)("div",{className:l()(D.a.cell,Object(r.a)({},D.a.flipped,Q||g)),onClick:e,children:[Object(i.jsxs)("div",{className:D.a.inner,children:[Object(i.jsx)("div",{className:D.a.front,children:""}),Object(i.jsx)("div",{className:D.a.back,children:I})]}),Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAAAXNSR0IArs4c6QAAENRJREFUeJzt2cFNA0EUREEWEeOcJ7SJwuktVzgaye8LuSqCvj71tda6P/h39t7TEwAARp1zpifwB5/TAwAAgPchQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgMy11rqnR7zK3nt6AgAAPO2cMz3hZTwgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAACZ6/F43NMjAACA9+ABAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACBzrbXu6RGvsveengAAAPzgAQEAADICBAAAyAgQAAAgI0AAAIDM1/QAAADgt3PO9ISX8YAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGSutdY9PYLn7b2nJwAAjDrnTE/gDzwgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABA5hvmIx1j4VgtLgAAAABJRU5ErkJggg==",alt:""})]})},b=g(19),O=g.n(b),f=g(3),m=g.n(f),h=B.sizeOptions,v=B.speedOptions,p=function(){var A=Object(Q.useState)(h[0]),I=Object(n.a)(A,2),g=I[0],e=I[1],C=Object(Q.useState)(v[0]),t=Object(n.a)(C,2),j=t[0],E=t[1],B=Object(Q.useState)(0),a=Object(n.a)(B,2),c=a[0],s=a[1],o=Object(Q.useState)("not-started"),r=Object(n.a)(o,2),M=r[0],D=r[1],u=Object(Q.useState)(!1),l=Object(n.a)(u,2),d=l[0],b=l[1];Object(Q.useEffect)((function(){"stopped"===M&&b(!0)}),[M]);var f=function(){s(0),D("not-started")},p=function(){b(!1)};return Object(i.jsxs)("div",{className:m.a.game,children:[Object(i.jsxs)("div",{className:m.a.sider,children:[Object(i.jsxs)("div",{className:m.a.moves,children:[Object(i.jsx)("span",{children:"Moves:"}),Object(i.jsx)("span",{children:c})]}),Object(i.jsx)(k,{gameStatus:M}),Object(i.jsxs)("div",{className:m.a.size,children:[Object(i.jsx)("span",{children:"Size:"}),Object(i.jsx)(Z,{options:h,onChange:function(A){var I,g=null!==(I=h.find((function(I){return I.id===+A.target.value})))&&void 0!==I?I:h[0];e(g)}})]}),Object(i.jsxs)("div",{className:m.a.speed,children:[Object(i.jsx)("span",{children:"Speed:"}),Object(i.jsx)(Z,{options:v,onChange:function(A){var I,g=null!==(I=v.find((function(I){return I.id===+A.target.value})))&&void 0!==I?I:v[0];E(g)}})]}),Object(i.jsx)("button",{onClick:f,className:m.a.startButton,children:"start"})]}),Object(i.jsx)(w,{setMovesCount:s,gameStatus:M,setGameStatus:D,size:g,speed:j,startGame:f}),Object(i.jsxs)(O.a,{isOpen:d,onRequestClose:p,className:m.a.modal,overlayClassName:m.a.overlay,children:[Object(i.jsxs)("div",{className:m.a.header,children:[Object(i.jsx)("h2",{children:"Congratulations!"}),Object(i.jsx)("div",{onClick:p,children:"X"})]}),Object(i.jsxs)("div",{className:m.a.content,children:[Object(i.jsx)("span",{children:"Your result:"}),Object(i.jsx)("span",{children:c})]})]})]})},G=g(20),_=g.n(G),k=function(A){var I=A.gameStatus,g=Object(Q.useState)(0),e=Object(n.a)(g,2),C=e[0],t=e[1],j=Object(Q.useState)(new Date),E=Object(n.a)(j,2),B=E[0],a=E[1];return Object(Q.useEffect)((function(){var A=setTimeout((function(){return"started"===I&&t((function(A){return++A})),void a(new Date)}),1e3);return function(){clearTimeout(A)}}),[B,I]),Object(Q.useEffect)((function(){"started"!==I&&"not-started"!==I||t(0)}),[I]),Object(i.jsxs)("div",{className:_.a.timer,children:[Object(i.jsx)("span",{children:"Timer:"}),Object(i.jsx)("span",{children:C})]})},R=g(21),x=g.n(R),Z=function(A){var I=A.options,g=A.onChange;return Object(i.jsx)("select",{onChange:g,className:x.a.select,children:I.map((function(A){return Object(i.jsx)("option",{value:A.id,children:A.label},A.id)}))})};g(38);t.a.render(Object(i.jsx)(e.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))},5:function(A,I,g){A.exports={cell:"Cell_cell__2a7NT",flipped:"Cell_flipped__3SyFG",inner:"Cell_inner__2kN-3",front:"Cell_front__2PQPF",back:"Cell_back__3PO-E"}}},[[39,1,2]]]);
//# sourceMappingURL=main.b5bec959.chunk.js.map