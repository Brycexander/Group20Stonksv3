(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},344:function(e,t){t.storeToken=function(e){try{localStorage.setItem("user_data",e.accessToken)}catch(t){console.log(t.message)}},t.retrieveToken=function(){var e;try{e=localStorage.getItem("user_data")}catch(t){console.log(t.message)}return e}},345:function(e,t,a){a(346).config(),t.buildPath=function(e){return"https://group20-stocksimulatorv2.herokuapp.com/"+e}},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},354:function(e,t,a){},357:function(e,t,a){},486:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),s=a.n(r),i=(a(314),a(315),a(36)),o=a.n(i),l=a(74),d=a(21),j=(a(101),a(561)),b=a(562),u=a(554),h=a(529),x=a(530),O=a(531),m=a(262),p=a(558),f=a(261),g=a(43),v=a(60),y=a.n(v),w=a(2);var D=function(){var e,t,a,c,r,s,i=Object(n.useState)(""),v=Object(d.a)(i,2),D=v[0],C=v[1],k=function(){var n=Object(l.a)(o.a.mark((function n(i){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i.preventDefault(),function(){y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/auth/register",{FirstName:e.value,LastName:t.value,Email:s.value,Login:a.value,Password:c.value,Password2:r.value}).then((function(e){var t=e.data;t.error?C(t.error):(C("OOOOOOOOOOH! :)"),window.location.href="#/")})).catch((function(e){C("Not valid")}))}();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",className:"color-nav",children:[Object(w.jsx)(j.a.Brand,{id:"change",href:"#home",children:"StockHub"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(w.jsxs)(b.a,{className:"mr-auto",children:[Object(w.jsx)(g.Link,{id:"change",className:"nav-link",to:"/Home",children:"Home"}),Object(w.jsx)(b.a.Link,{id:"change",href:"#pricing",children:"Pictures"}),Object(w.jsxs)(u.a,{title:"More Information",className:"title",id:"collasible-nav-dropdown",children:[Object(w.jsx)(u.a.Item,{href:"#action/3.1",children:"About Us"}),Object(w.jsx)(u.a.Item,{href:"#action/3.2",children:"Our mission"}),Object(w.jsx)(u.a.Item,{href:"#action/3.3",children:"Progress"}),Object(w.jsx)(u.a.Divider,{}),Object(w.jsx)(u.a.Item,{href:"#action/3.4",children:"Github"})]})]}),Object(w.jsx)(b.a,{children:Object(w.jsx)(g.Link,{id:"change",className:"nav-link",to:"/LoginPage",children:"Login"})})]})]}),Object(w.jsx)(h.a,{children:Object(w.jsx)(x.a,{className:"jumbotron",children:Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{className:"justify-content-md-center",children:Object(w.jsxs)(m.a,{className:"col-5 align-self-center",children:[Object(w.jsxs)("center",{children:["\xa0 \xa0 \xa0   ",Object(w.jsx)("h1",{className:"display-3",children:"Register"})]}),Object(w.jsxs)(p.a,{children:[Object(w.jsxs)(p.a.Row,{children:[Object(w.jsxs)(p.a.Group,{as:m.a,controlid:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"First Name"}),Object(w.jsx)(p.a.Control,{type:"firstname",placeholder:"Enter First Name",ref:function(t){return e=t}})]}),Object(w.jsxs)(p.a.Group,{as:m.a,controlid:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"Last Name"}),Object(w.jsx)(p.a.Control,{type:"lastName",placeholder:"Enter Last Name",ref:function(e){return t=e}})]})]}),Object(w.jsxs)(p.a.Group,{controlid:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"Username"}),Object(w.jsx)(p.a.Control,{type:"username",placeholder:"Enter username",ref:function(e){return a=e}})]}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsx)(p.a.Label,{children:"Email"}),Object(w.jsx)(p.a.Control,{type:"email",placeholder:"john@email.com",ref:function(e){return s=e}})]}),Object(w.jsxs)(p.a.Row,{children:[Object(w.jsxs)(p.a.Group,{as:m.a,controlId:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Enter password",ref:function(e){return c=e}})]}),Object(w.jsxs)(p.a.Group,{as:m.a,controlId:"formGridPassword",children:[Object(w.jsx)(p.a.Label,{children:"Confirm Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Confirm password",ref:function(e){return r=e}})]})]}),Object(w.jsx)("center",{children:Object(w.jsx)(f.a,{className:"color-button",type:"submit",onClick:k,children:"Submit"})}),Object(w.jsx)("center",{children:Object(w.jsx)("span",{id:"loginResult",children:D})})]})]})})})})})]})},C=a(31);a(341);var k=function(){return Object(w.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",className:"color-nav",fixed:"top",children:[Object(w.jsx)(j.a.Brand,{id:"change",href:"#home",children:"StockHub"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(w.jsxs)(b.a,{className:"mr-auto",children:[Object(w.jsx)(g.Link,{id:"change",className:"nav-link",to:"/Home",children:"Home"}),Object(w.jsx)(b.a.Link,{id:"change",href:"#pricing",children:"Pictures"}),Object(w.jsxs)(u.a,{title:"More Information",className:"title",id:"collasible-nav-dropdown",children:[Object(w.jsx)(u.a.Item,{href:"#action/3.1",children:"About Us"}),Object(w.jsx)(u.a.Item,{href:"#action/3.2",children:"Our mission"}),Object(w.jsx)(u.a.Item,{href:"#action/3.3",children:"Progress"}),Object(w.jsx)(u.a.Divider,{}),Object(w.jsx)(u.a.Item,{href:"#action/3.4",children:"Github"})]})]}),Object(w.jsx)(b.a,{children:Object(w.jsx)(g.Link,{id:"change",className:"nav-link",to:"/Register",children:"Register"})})]})]})},N=a.p+"static/media/vector-creator.573ab621.png",S=(a(342),a(556));var L=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],r=function(){return c(!1)},s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="/Reset";case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g.Link,{onClick:function(){return c(!0)},children:"Forgot Password?"}),Object(w.jsxs)(S.a,{show:a,onHide:r,children:[Object(w.jsx)(S.a.Header,{closeButton:!0,children:Object(w.jsx)(S.a.Title,{children:"Password Recovery"})}),Object(w.jsxs)(S.a.Body,{children:[" ",Object(w.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsx)(p.a.Label,{children:"Please Enter Your Email Address"}),Object(w.jsx)(p.a.Control,{type:"email",placeholder:"Enter email"})]})]}),Object(w.jsx)(S.a.Footer,{children:Object(w.jsx)(f.a,{variant:"primary",onClick:s,children:"OK"})}),Object(w.jsxs)(S.a.Body,{children:[" ",Object(w.jsxs)(p.a.Group,{controlId:"formPassword",children:[Object(w.jsx)(p.a.Label,{children:"Enter new password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Enter password"}),Object(w.jsx)(p.a.Label,{children:"Confirm new password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Enter password"}),Object(w.jsx)(p.a.Text,{className:"text-muted",children:"Please allow some time after clicking Reset"})]})]}),Object(w.jsx)(S.a.Footer,{children:Object(w.jsx)(f.a,{variant:"primary",onClick:r,children:"Reset"})})]})]})};var P=function(){var e,t,c=a(344),r=(a(345),Object(n.useState)("")),s=Object(d.a)(r,2),i=s[0],j=s[1],b=function(){var a=Object(l.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),r={Login:e.value,Password:t.value},JSON.stringify(r),console.log(e.value+" "+t.value),function(){y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/auth/login",{Login:e.value,Password:t.value}).then((function(e){var t=e.data;t.error?j("Incorrect user/password combination"):(c.storeToken(t),window.location.href="#/Landing")})).catch((function(e){j("Incorrect user/password combination")}))}();case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(w.jsxs)(O.a,{children:[Object(w.jsx)(m.a,{className:"left-side",nogutters:"true",children:Object(w.jsxs)(m.a,{lg:8,md:{span:6,offset:3},sm:12,className:"LoginBox",children:[Object(w.jsxs)(h.a,{className:"jumbotron2",children:["\xa0 \xa0",Object(w.jsx)("h1",{className:"display-3",id:"login",children:"Login"}),Object(w.jsxs)(p.a,{onSubmit:b,children:[Object(w.jsxs)(p.a.Group,{controlId:"formBasicText",children:[Object(w.jsx)(p.a.Label,{children:"Username"}),Object(w.jsx)(p.a.Control,{type:"text",placeholder:"Enter username",ref:function(t){return e=t}})]}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(w.jsx)(p.a.Label,{children:"Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Password",ref:function(e){return t=e}}),Object(w.jsx)(p.a.Text,{className:"text-muted",children:"Never share your username or password with anyone!"}),Object(w.jsx)(L,{})]}),Object(w.jsx)(f.a,{variant:"primary",type:"submit",onClick:b,className:"color-button",children:"Launch"})]}),Object(w.jsx)("span",{id:"loginResult",children:i})]}),"\xa0"]})}),Object(w.jsx)(m.a,{className:"right-side",nogutters:"true",children:Object(w.jsxs)(h.a,{children:[Object(w.jsx)("img",{src:N,width:"520",alt:"space",fluid:"true",className:"center"}),Object(w.jsx)(O.a,{className:"justify-content-md-center",children:Object(w.jsx)("h2",{className:"quote",children:"Take your investments to new heights"})})]})})]})},I=function(){return Object(w.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(k,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(P,{}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})};var T=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("h1",{children:"WE'RE IN HOME"})})};var R=function(){return Object(w.jsxs)("div",{id:"loggedInDiv",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)("span",{id:"userName",children:"Logged In As John Doe "}),Object(w.jsx)("br",{}),"\xa0 \xa0 \xa0 ",Object(w.jsx)("button",{type:"button",id:"logoutButton",class:"buttons",onClick:function(e){e.preventDefault(),alert("doLogout")},children:" Log Out "}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})};var G=function(){var e="",t="",a=Object(n.useState)(""),c=Object(d.a)(a,2),r=c[0],s=(c[1],Object(n.useState)("")),i=Object(d.a)(s,2),j=i[0],b=(i[1],Object(n.useState)("")),u=Object(d.a)(b,2),h=u[0],x=(u[1],function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),alert("addCard() "+e.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),alert("searchCard() "+t.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{id:"cardUIDiv",children:["\xa0\xa0",Object(w.jsx)("br",{}),"\xa0\xa0",Object(w.jsx)("input",{type:"text",id:"searchText",placeholder:"Card To Search For",ref:function(e){return t=e}}),"\xa0\xa0",Object(w.jsx)("button",{type:"button",id:"searchCardButton",class:"buttons",onClick:O,children:" Search Card"}),Object(w.jsx)("br",{}),Object(w.jsx)("span",{id:"cardSearchResult",children:j}),Object(w.jsx)("p",{id:"cardList",children:h}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"text",id:"cardText",placeholder:"Card To Add",ref:function(t){return e=t}}),"\xa0\xa0",Object(w.jsx)("button",{type:"button",id:"addCardButton",class:"buttons",onClick:x,children:" Add Card "}),Object(w.jsx)("br",{}),Object(w.jsx)("span",{id:"cardAddResult",children:r})]})},B=function(){return Object(w.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(k,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(R,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(G,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},E=(a(349),a(350),a(207)),A=a(287),H=a(537),F=a(51),W=a(547),U=a(560),M=a(548),J=a(489),q=a(557),K=(a(167),a(351),a(8),a(33)),z=a(541),Y=a(544),_=a(545),V=a(536),X=a(543),Q=a(532),Z=a(555),$=a(535),ee=a(565),te=(a(538),a(490)),ae=(a(540),a(566),a(546)),ne=a(567),ce=(a(264),a(265),a(285)),re=a(542),se=a(266),ie=a.n(se);var oe=[],le=[];function de(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function je(e,t){return"desc"===e?function(e,a){return de(e,a,t)}:function(e,a){return-de(e,a,t)}}function be(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var ue=[{id:"symbol",numeric:!1,disablePadding:!0,label:"Symbol"},{id:"description",numeric:!0,disablePadding:!1,label:"Name"},{id:"open",numeric:!0,disablePadding:!1,label:"Open"},{id:"high",numeric:!0,disablePadding:!1,label:"High"},{id:"low",numeric:!0,disablePadding:!1,label:"Low"},{id:"price",numeric:!0,disablePadding:!1,label:"Price"},{id:"pcurrent",numeric:!0,disablePadding:!1,label:"Previous Price"},{id:"percent",numeric:!0,disablePadding:!1,label:"Percent Change"}];function he(e){var t=e.classes,a=(e.onSelectAllClick,e.order),n=e.orderBy,c=(e.numSelected,e.rowCount,e.onRequestSort);return Object(w.jsx)(Q.a,{children:Object(w.jsx)($.a,{children:ue.map((function(e){return Object(w.jsx)(V.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a,children:Object(w.jsxs)(ee.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(r=e.id,function(e){c(e,r)}),children:[e.label,n===e.id?Object(w.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}Object(H.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(K.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}));var xe=Object(ce.a)({palette:{type:"light",primary:ie.a,secondary:{main:"#b9f6ca"}}}),Oe=Object(H.a)((function(e){return{aboveRoot:{height:"100%",width:"100%",backgroundColor:e.palette.secondary},root:{width:"80%",paddingLeft:"350px"},paper:{width:"100%",paddingLeft:"10px",marginBottom:e.spacing(2)},table:{minWidth:750,border:"10px"},visuallyHidden:{clip:"rect(0 0 0 0)",height:1,margin:1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function me(){var e=Oe(),t=c.a.useState("asc"),a=Object(d.a)(t,2),r=a[0],s=a[1],i=c.a.useState("symbol"),o=Object(d.a)(i,2),l=o[0],j=o[1],b=c.a.useState([]),u=Object(d.a)(b,2),h=u[0],x=(u[1],c.a.useState(0)),O=Object(d.a)(x,2),m=O[0],p=O[1],f=c.a.useState(!1),g=Object(d.a)(f,2),v=g[0],y=g[1],D=c.a.useState(5),C=Object(d.a)(D,2),k=C[0],N=C[1],S=k-Math.min(k,oe.length-m*k),L=Object(n.useState)(""),P=Object(d.a)(L,2),I=P[0],T=P[1],R=le.filter((function(e){return e.symbol.toLowerCase().includes(I.toLowerCase())||e.description.toLowerCase().includes(I.toLowerCase())}));return oe=[],Object(w.jsxs)(z.a,{theme:xe,children:[Object(w.jsx)(re.a,{}),Object(w.jsx)("div",{className:e.aboveRoot,children:Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsxs)("div",{className:"stock-search",children:[Object(w.jsx)("h1",{className:"stock-text"}),Object(w.jsx)("form",{children:Object(w.jsx)("input",{type:"text",placeholder:"Search",className:"stock-input",onChange:function(e){T(e.target.value)}})})]}),R.map((function(e){oe.push(e),console.log(oe)})),Object(w.jsxs)(te.a,{className:e.paper,children:[Object(w.jsx)(X.a,{className:"chart",children:Object(w.jsxs)(Y.a,{className:e.table,"aria-labelledby":"tableTitle",size:v?"small":"medium","aria-label":"enhanced table",children:[Object(w.jsx)(he,{classes:e,order:r,orderBy:l,onRequestSort:function(e,t){s(l===t&&"asc"===r?"desc":"asc"),j(t)},rowCount:oe.length}),Object(w.jsxs)(_.a,{children:[be(oe,je(r,l)).slice(m*k,m*k+k).map((function(e,t){var a="enhanced-table-checkbox-".concat(t);return Object(w.jsxs)($.a,{hover:!0,onClick:function(t){return function(e,t){var a=h.indexOf(t),n=[];-1===a?n=n.concat(h,t):0===a?n=n.concat(h.slice(1)):a===h.length-1?n=n.concat(h.slice(0,-1)):a>0&&(n=n.concat(h.slice(0,a),h.slice(a+1)))}(0,e.name)},role:"checkbox",tabIndex:-1,children:[Object(w.jsx)(V.a,{component:"th",id:a,scope:"row",padding:"none",children:e.symbol}),Object(w.jsx)(V.a,{align:"right",children:e.description}),Object(w.jsx)(V.a,{align:"right",children:e.open}),Object(w.jsx)(V.a,{align:"right",children:e.high}),Object(w.jsx)(V.a,{align:"right",children:e.low}),Object(w.jsx)(V.a,{align:"right",children:e.price}),Object(w.jsx)(V.a,{align:"right",children:e.pcurrent}),Object(w.jsx)(V.a,{align:"right",children:e.percent})]},e.name)})),S>0&&Object(w.jsx)($.a,{style:{height:(v?33:53)*S},children:Object(w.jsx)(V.a,{colSpan:6})})]})]})}),Object(w.jsx)(Z.a,{rowsPerPageOptions:[5,10,25],component:"div",count:oe.length,rowsPerPage:k,page:m,onChangePage:function(e,t){p(t)},onChangeRowsPerPage:function(e){N(parseInt(e.target.value,10)),p(0)}})]}),Object(w.jsx)(ae.a,{control:Object(w.jsx)(ne.a,{checked:v,onChange:function(e){y(e.target.checked)}}),label:"Dense padding"})]})})]})}var pe=a(267),fe=a.n(pe);var ge=function(){var e=JSON.stringify({Company:"AAPL"});!function(){var t={method:"post",url:"https://group20-stocksimulatorv2.herokuapp.com/api/stock/getChart",headers:{"Content-Type":"application/json"},data:e};y()(t).then((function(e){var t=e.data;t.error?console.log(t.error):console.log(t)})).catch((function(e){console.log(e)}))}();var t=[{name:"candle",data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}];return Object(w.jsx)("div",{id:"chart",children:Object(w.jsx)(fe.a,{options:{chart:{height:350,type:"candlestick"},title:{text:"CandleStick Chart - Category X-axis",align:"left"},annotations:{xaxis:[{x:"Oct 06 14:00",borderColor:"fff",label:{borderColor:"fff",style:{fontSize:"12px",color:"#fff",background:"fff"},orientation:"horizontal",offsetY:7,text:"Annotation Test"}}]},tooltip:{enabled:!0},xaxis:{type:"category",labels:{formatter:function(e){return e}}},yaxis:{tooltip:{enabled:!0}}},series:t,type:"candlestick",height:500,width:1e3})})};a(354);function ve(e){var t=e.children,a=e.value,n=e.index,c=(e.dir,e.className,Object(A.a)(e,["children","value","index","dir","className"]));return Object(w.jsx)("div",Object(E.a)(Object(E.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),{},{children:a===n&&Object(w.jsx)(q.a,{p:3,children:Object(w.jsx)(J.a,{children:t})})}))}var ye=Object(H.a)({root:{flexGrow:1}});function we(){var e=ye(),t=Object(F.a)(),a=c.a.useState(0),n=Object(d.a)(a,2),r=n[0],s=n[1];return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(W.a,{position:"static",color:"default",children:Object(w.jsxs)(U.a,{value:r,onChange:function(e,t){s(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",centered:!0,children:[Object(w.jsx)(M.a,{label:"Search"}),Object(w.jsx)(M.a,{label:"Chart"})]})}),Object(w.jsx)(ve,{value:r,index:0,dir:t.direction,className:"SearchTab",children:Object(w.jsx)(me,{})}),Object(w.jsx)(ve,{value:r,index:1,dir:t.direction,className:"DisplayTab",children:Object(w.jsx)(ge,{})})]})}a(355),a(357);var De=a(549),Ce=a(553),ke=a(280),Ne=a(281),Se=a(143),Le=a(139),Pe=a(288);var Ie=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{className:"display-4 chart",children:"Today"}),Object(w.jsx)("br",{}),Object(w.jsxs)(De.a,{className:"move1",width:700,height:298,data:[{name:"00:00",uv:4e3,investment:2400,amt:2400},{name:"03:00",uv:3e3,investment:1398,amt:2210},{name:"06:00",uv:2e3,investment:9800,amt:2290},{name:"09:00",uv:2780,investment:3908,amt:2e3},{name:"12:00",uv:1890,investment:4800,amt:2181},{name:"15:00",uv:2390,investment:3800,amt:2500},{name:"18:00",investment:2e3,amt:2100},{name:"21:00",investment:6e3,amt:2100},{name:"24:00",investment:1e3,amt:2100}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(w.jsx)(Ce.a,{strokeDasharray:"3 3"}),Object(w.jsx)(ke.a,{dataKey:"name"}),Object(w.jsx)(Ne.a,{}),Object(w.jsx)(Se.a,{}),Object(w.jsx)(Le.a,{}),Object(w.jsx)(Pe.a,{type:"monotone",dataKey:"investment",stroke:"#6AC94C ",activeDot:{r:8}})]})]})};var Te=a(563),Re=a(289);var Ge=function(){return Object(w.jsx)("div",{children:Object(w.jsxs)("center",{children:[Object(w.jsx)("h1",{className:"display-4 chart1",children:"Portfolio"}),Object(w.jsx)(Te.a,{width:400,height:300,children:Object(w.jsx)(Re.a,{data:[{name:"Tesla",value:100},{name:"Game Stop",value:300},{name:"AMC",value:100},{name:"Apple",value:80}],dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#A032B6",label:!0})})]})})},Be=[{id:"name",label:"Name",minWidth:170},{id:"time",label:"Time",minWidth:100},{id:"value",label:"Value",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"shares",label:"Shares",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"avg",label:"Purchase",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function Ee(e,t,a,n){return{name:e,time:t,value:a,shares:n,avg:a*n}}var Ae=[Ee("Tesla","11:45am",124,22),Ee("AMC","1:29pm",9.5,30),Ee("Game Stop","3:30am",120,7),Ee("Lululemon","6:20pm",200,2),Ee("Apple","2:14pm",167,10),Ee("Twitter","10:29am",63.9,28),Ee("Microsoft","9:50am",242.55,19),Ee("Disney","9:00am",188.9,10),Ee("GoPro","8:48am",12.5,8),Ee("Starbucks","8:39am",109.38,100),Ee("Chegg","10:00pm",88.25,12),Ee("Spotify","12:00pm",273.5,2),Ee("Chase","6:00pnm",120.2,8),Ee("Square","8:05pm",230.29,1),Ee("DOW","3:09pm",64.6,7)],He=Object(H.a)({root:{width:"100%"},container:{maxHeight:440}});function Fe(){var e=He(),t=c.a.useState(0),a=Object(d.a)(t,2),n=a[0],r=a[1],s=c.a.useState(10),i=Object(d.a)(s,2),o=i[0],l=i[1];return Object(w.jsxs)(te.a,{className:e.root,children:[Object(w.jsx)(X.a,{className:e.container,children:Object(w.jsxs)(Y.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(w.jsx)(Q.a,{children:Object(w.jsx)($.a,{children:Be.map((function(e){return Object(w.jsx)(V.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(w.jsx)(_.a,{children:Ae.slice(n*o,n*o+o).map((function(e){return Object(w.jsx)($.a,{hover:!0,role:"checkbox",tabIndex:-1,children:Be.map((function(t){var a=e[t.id];return Object(w.jsx)(V.a,{align:t.align,children:t.format&&"number"===typeof a?t.format(a):a},t.id)}))},e.code)}))})]})}),Object(w.jsx)(Z.a,{rowsPerPageOptions:[10,25,100],component:"div",count:Ae.length,rowsPerPage:o,page:n,onChangePage:function(e,t){r(t)},onChangeRowsPerPage:function(e){l(+e.target.value),r(0)}})]})}var We=function(){return Object(w.jsxs)("div",{children:[Object(w.jsxs)(j.a,{className:"color-nav",expand:"lg",children:[Object(w.jsxs)(j.a.Brand,{className:"font",children:["Welcome, ",undefined," ",undefined]}),Object(w.jsx)(b.a.Link,{className:"font",children:"Learderboard"}),Object(w.jsx)(g.Link,{className:"nav-link",to:"/Search",children:"Stocks"}),Object(w.jsx)(b.a.Link,{className:"font",children:"Settings"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(w.jsx)(b.a,{className:"mr-auto"}),Object(w.jsx)(p.a,{inline:!0,children:Object(w.jsx)(f.a,{variant:"outline-danger",onClick:function(e){e.preventDefault(),window.location.href="/"},children:"Logout"})})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)(O.a,{className:"justify-content-md-center",children:[Object(w.jsx)(m.a,{md:"auto",children:Object(w.jsx)(te.a,{children:Object(w.jsx)(Ie,{})})}),Object(w.jsx)(m.a,{md:"auto",children:Object(w.jsx)(te.a,{children:Object(w.jsx)(Ge,{})})})]}),Object(w.jsx)("br",{}),Object(w.jsx)(O.a,{className:"justify-content-md-center",children:Object(w.jsx)(m.a,{sm:10,children:Object(w.jsx)(Fe,{})})})]})};var Ue=function(){return Object(w.jsx)(g.HashRouter,{children:Object(w.jsxs)(C.g,{children:[Object(w.jsx)(C.d,{path:"/",exact:!0,children:Object(w.jsx)(I,{})}),Object(w.jsx)(C.d,{path:"/Register",exact:!0,children:Object(w.jsx)(D,{})}),Object(w.jsx)(C.d,{path:"/Home",exact:!0,children:Object(w.jsx)(T,{})}),Object(w.jsx)(C.d,{path:"/cards",exact:!0,children:Object(w.jsx)(B,{})}),Object(w.jsx)(C.d,{path:"/Search",exact:!0,children:Object(w.jsx)(we,{})}),Object(w.jsx)(C.d,{path:"/Landing",exact:!0,children:Object(w.jsx)(We,{})}),Object(w.jsx)(C.d,{path:"/Chart",exact:!0,children:Object(w.jsx)(Ie,{})}),Object(w.jsx)(C.c,{to:"/"})]})})},Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,569)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(Ue,{})}),document.getElementById("root")),Me()}},[[486,1,2]]]);
//# sourceMappingURL=main.cd264e6b.chunk.js.map