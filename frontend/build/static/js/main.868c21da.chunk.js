(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,t,a){},168:function(e,t){t.storeToken=function(e){try{localStorage.setItem("user_data",e.token)}catch(t){console.log(t.message)}},t.retrieveToken=function(){var e;try{e=localStorage.getItem("user_data")}catch(t){console.log(t.message)}return e}},287:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},456:function(e,t,a){a(457).config(),t.buildPath=function(e){return"https://group20-stocksimulatorv2.herokuapp.com/"+e}},460:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){},465:function(e,t,a){},600:function(e,t){},602:function(e,t){},614:function(e,t){},616:function(e,t){},644:function(e,t){},646:function(e,t){},647:function(e,t){},652:function(e,t){},654:function(e,t){},673:function(e,t){},685:function(e,t){},688:function(e,t){},705:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),o=(a(426),a(427),a(41)),s=a.n(o),l=a(84),d=a(18),j=(a(114),a(785)),b=a(786),u=a(778),h=a(751),x=a(752),m=a(753),O=a(375),p=a(782),g=a(374),f=a(46),v=a(49),y=a.n(v),w=a(2);var D=function(){var e,t,a,r,c,i,o=Object(n.useState)(""),v=Object(d.a)(o,2),D=v[0],S=v[1],C=function(){var n=Object(l.a)(s.a.mark((function n(o){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o.preventDefault(),function(){y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/auth/register",{FirstName:e.value,LastName:t.value,Email:i.value,Login:a.value,Password:r.value,Password2:c.value}).then((function(e){var t=e.data;t.error?S(t.error):(S("OOOOOOOOOOH! :)"),window.location.href="/")})).catch((function(e){S("Not valid")}))}();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",className:"color-nav",children:[Object(w.jsx)(j.a.Brand,{id:"change",href:"#home",children:"StockHub"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(w.jsxs)(b.a,{className:"mr-auto",children:[Object(w.jsx)(f.Link,{id:"change",className:"nav-link",to:"/Home",children:"Home"}),Object(w.jsx)(b.a.Link,{id:"change",href:"#pricing",children:"Pictures"}),Object(w.jsxs)(u.a,{title:"More Information",className:"title",id:"collasible-nav-dropdown",children:[Object(w.jsx)(u.a.Item,{href:"#action/3.1",children:"About Us"}),Object(w.jsx)(u.a.Item,{href:"#action/3.2",children:"Our mission"}),Object(w.jsx)(u.a.Item,{href:"#action/3.3",children:"Progress"}),Object(w.jsx)(u.a.Divider,{}),Object(w.jsx)(u.a.Item,{href:"#action/3.4",children:"Github"})]})]}),Object(w.jsx)(b.a,{children:Object(w.jsx)(f.Link,{id:"change",className:"nav-link",to:"/LoginPage",children:"Login"})})]})]}),Object(w.jsx)(h.a,{children:Object(w.jsx)(x.a,{className:"jumbotron",children:Object(w.jsx)(h.a,{children:Object(w.jsx)(m.a,{className:"justify-content-md-center",children:Object(w.jsxs)(O.a,{className:"col-5 align-self-center",children:[Object(w.jsxs)("center",{children:["\xa0 \xa0 \xa0   ",Object(w.jsx)("h1",{className:"display-3",children:"Register"})]}),Object(w.jsxs)(p.a,{children:[Object(w.jsxs)(p.a.Row,{children:[Object(w.jsxs)(p.a.Group,{as:O.a,controlid:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"First Name"}),Object(w.jsx)(p.a.Control,{type:"firstname",placeholder:"Enter First Name",ref:function(t){return e=t}})]}),Object(w.jsxs)(p.a.Group,{as:O.a,controlid:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"Last Name"}),Object(w.jsx)(p.a.Control,{type:"lastName",placeholder:"Enter Last Name",ref:function(e){return t=e}})]})]}),Object(w.jsxs)(p.a.Group,{controlid:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"Username"}),Object(w.jsx)(p.a.Control,{type:"username",placeholder:"Enter username",ref:function(e){return a=e}})]}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsx)(p.a.Label,{children:"Email"}),Object(w.jsx)(p.a.Control,{type:"email",placeholder:"john@email.com",ref:function(e){return i=e}})]}),Object(w.jsxs)(p.a.Row,{children:[Object(w.jsxs)(p.a.Group,{as:O.a,controlId:"formGridUser",children:[Object(w.jsx)(p.a.Label,{children:"Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Enter password",ref:function(e){return r=e}})]}),Object(w.jsxs)(p.a.Group,{as:O.a,controlId:"formGridPassword",children:[Object(w.jsx)(p.a.Label,{children:"Confirm Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Confirm password",ref:function(e){return c=e}})]})]}),Object(w.jsx)("center",{children:Object(w.jsx)(g.a,{className:"color-button",type:"submit",onClick:C,children:"Submit"})}),Object(w.jsx)("center",{children:Object(w.jsx)("span",{id:"loginResult",children:D})})]})]})})})})})]})},S=a(34);a(453);var C=function(){return Object(w.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",className:"color-nav",fixed:"top",children:[Object(w.jsx)(j.a.Brand,{id:"change",href:"#home",children:"StockHub"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(w.jsxs)(b.a,{className:"mr-auto",children:[Object(w.jsx)(f.Link,{id:"change",className:"nav-link",to:"/Home",children:"Home"}),Object(w.jsx)(b.a.Link,{id:"change",href:"#pricing",children:"Pictures"}),Object(w.jsxs)(u.a,{title:"More Information",className:"title",id:"collasible-nav-dropdown",children:[Object(w.jsx)(u.a.Item,{href:"#action/3.1",children:"About Us"}),Object(w.jsx)(u.a.Item,{href:"#action/3.2",children:"Our mission"}),Object(w.jsx)(u.a.Item,{href:"#action/3.3",children:"Progress"}),Object(w.jsx)(u.a.Divider,{}),Object(w.jsx)(u.a.Item,{href:"#action/3.4",children:"Github"})]})]}),Object(w.jsx)(b.a,{children:Object(w.jsx)(f.Link,{id:"change",className:"nav-link",to:"/Register",children:"Register"})})]})]})},k=a.p+"static/media/vector-creator.573ab621.png",N=(a(454),a(780));var L=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],c=function(){return r(!1)},i=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="/Reset";case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.Link,{onClick:function(){return r(!0)},children:"Forgot Password?"}),Object(w.jsxs)(N.a,{show:a,onHide:c,children:[Object(w.jsx)(N.a.Header,{closeButton:!0,children:Object(w.jsx)(N.a.Title,{children:"Password Recovery"})}),Object(w.jsxs)(N.a.Body,{children:[" ",Object(w.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsx)(p.a.Label,{children:"Please Enter Your Email Address"}),Object(w.jsx)(p.a.Control,{type:"email",placeholder:"Enter email"})]})]}),Object(w.jsx)(N.a.Footer,{children:Object(w.jsx)(g.a,{variant:"primary",onClick:i,children:"OK"})}),Object(w.jsxs)(N.a.Body,{children:[" ",Object(w.jsxs)(p.a.Group,{controlId:"formPassword",children:[Object(w.jsx)(p.a.Label,{children:"Enter new password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Enter password"}),Object(w.jsx)(p.a.Label,{children:"Confirm new password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Enter password"}),Object(w.jsx)(p.a.Text,{className:"text-muted",children:"Please allow some time after clicking Reset"})]})]}),Object(w.jsx)(N.a.Footer,{children:Object(w.jsx)(g.a,{variant:"primary",onClick:c,children:"Reset"})})]})]})};var P=function(){var e,t,r=a(168),c=(a(456),Object(n.useState)("")),i=Object(d.a)(c,2),o=i[0],j=i[1],b=function(){var a=Object(l.a)(s.a.mark((function a(n){var c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),c={Login:e.value,Password:t.value},JSON.stringify(c),console.log(e.value+" "+t.value),function(){y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/auth/login",{Login:e.value,Password:t.value}).then((function(e){var t=e.data;t.error?j("Incorrect user/password combination"):(r.storeToken(t),window.location.href="#/Landing")})).catch((function(e){j("Login invalid")}))}();case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{children:[Object(w.jsx)(O.a,{className:"left-side",nogutters:"true",children:Object(w.jsxs)(O.a,{lg:8,md:{span:6,offset:3},sm:12,className:"LoginBox",children:[Object(w.jsxs)(h.a,{className:"jumbotron2",children:["\xa0 \xa0",Object(w.jsx)("h1",{className:"display-3",id:"login",children:"Login"}),Object(w.jsxs)(p.a,{onSubmit:b,children:[Object(w.jsxs)(p.a.Group,{controlId:"formBasicText",children:[Object(w.jsx)(p.a.Label,{children:"Username"}),Object(w.jsx)(p.a.Control,{type:"text",placeholder:"Enter username",ref:function(t){return e=t}})]}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(w.jsx)(p.a.Label,{children:"Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Password",ref:function(e){return t=e}}),Object(w.jsx)(p.a.Text,{className:"text-muted",children:"Never share your username or password with anyone!"}),Object(w.jsx)(L,{})]}),Object(w.jsx)(g.a,{variant:"primary",type:"submit",onClick:b,className:"color-button",children:"Launch"})]}),Object(w.jsx)("span",{id:"loginResult",children:o})]}),"\xa0"]})}),Object(w.jsx)(O.a,{className:"right-side",nogutters:"true",children:Object(w.jsxs)(h.a,{children:[Object(w.jsx)("img",{src:k,width:"520",alt:"space",fluid:"true",className:"center"}),Object(w.jsx)(m.a,{className:"justify-content-md-center",children:Object(w.jsx)("h2",{className:"quote",children:"Take your investments to new heights"})})]})})]})},T=function(){return Object(w.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(C,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(P,{}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})};var A=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("h1",{children:"WE'RE IN HOME"})})};var I=function(){return Object(w.jsxs)("div",{id:"loggedInDiv",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)("span",{id:"userName",children:"Logged In As John Doe "}),Object(w.jsx)("br",{}),"\xa0 \xa0 \xa0 ",Object(w.jsx)("button",{type:"button",id:"logoutButton",class:"buttons",onClick:function(e){e.preventDefault(),alert("doLogout")},children:" Log Out "}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})};var B=function(){var e="",t="",a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],i=(r[1],Object(n.useState)("")),o=Object(d.a)(i,2),j=o[0],b=(o[1],Object(n.useState)("")),u=Object(d.a)(b,2),h=u[0],x=(u[1],function(){var t=Object(l.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),alert("addCard() "+e.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),m=function(){var e=Object(l.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),alert("searchCard() "+t.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{id:"cardUIDiv",children:["\xa0\xa0",Object(w.jsx)("br",{}),"\xa0\xa0",Object(w.jsx)("input",{type:"text",id:"searchText",placeholder:"Card To Search For",ref:function(e){return t=e}}),"\xa0\xa0",Object(w.jsx)("button",{type:"button",id:"searchCardButton",class:"buttons",onClick:m,children:" Search Card"}),Object(w.jsx)("br",{}),Object(w.jsx)("span",{id:"cardSearchResult",children:j}),Object(w.jsx)("p",{id:"cardList",children:h}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"text",id:"cardText",placeholder:"Card To Add",ref:function(t){return e=t}}),"\xa0\xa0",Object(w.jsx)("button",{type:"button",id:"addCardButton",class:"buttons",onClick:x,children:" Add Card "}),Object(w.jsx)("br",{}),Object(w.jsx)("span",{id:"cardAddResult",children:c})]})},R=function(){return Object(w.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(C,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(I,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(w.jsx)(B,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},E=(a(460),a(461),a(262)),F=a(400),G=a(759),H=a(59),M=a(771),W=a(784),U=a(772),J=a(708),K=a(781),z=(a(198),a(462),a(7),a(30)),V=a(763),Q=a(766),Y=a(767),q=a(758),_=a(765),$=a(754),X=a(779),Z=a(757),ee=a(789),te=(a(760),a(709)),ae=(a(762),a(790),a(768)),ne=a(791),re=(a(377),a(378),a(398)),ce=a(764),ie=a(379),oe=a.n(ie);function se(e,t,a,n,r,c,i,o){return{symbol:e=String(e),description:t=String(t),open:a,high:n,low:r,price:c,pcurrent:i,percent:o}}var le=[],de=[],je=[{symbol:"AAPL",description:"Apple"},{symbol:"MSFT",description:"Microsoft"},{symbol:"FB",description:"Facebook"},{symbol:"TSLA",description:"Tesla"},{symbol:"BABA",description:"Alibaba Group"},{symbol:"TSM",description:"Taiwan Semicounductor Manufacturing Company"},{symbol:"JPM",description:"JPMorgan Chase"},{symbol:"BAC",description:"Bank of America"},{symbol:"WMT",description:"Walmart"},{symbol:"INTC",description:"Intel"},{symbol:"CMCSA",description:"Comcast"},{symbol:"VZ",description:"Verizon"},{symbol:"XOM",description:"ExxonMobil"},{symbol:"KO",description:"The Coca-Cola Company"},{symbol:"CSCO",description:"Cisco Systems"},{symbol:"ORCL",description:"Oracle Corporation"},{symbol:"T",description:"AT&T"},{symbol:"PFE",description:"Pfizer"},{symbol:"WFC",description:"Wells Fargo"},{symbol:"C",description:"Citigroup"},{symbol:"QCOM",description:"Qualcomm"},{symbol:"BA",description:"Boeing"},{symbol:"AMAT",description:"Applied Materials"},{symbol:"JD",description:"JD.com"},{symbol:"GE",description:"General Electric"}];function be(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function ue(e,t){return"desc"===e?function(e,a){return be(e,a,t)}:function(e,a){return-be(e,a,t)}}function he(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var xe=[{id:"symbol",numeric:!1,disablePadding:!1,label:"Symbol"},{id:"description",numeric:!0,disablePadding:!1,label:"Name"},{id:"open",numeric:!0,disablePadding:!1,label:"Open"},{id:"high",numeric:!0,disablePadding:!1,label:"High"},{id:"low",numeric:!0,disablePadding:!1,label:"Low"},{id:"price",numeric:!0,disablePadding:!1,label:"Price"},{id:"pcurrent",numeric:!0,disablePadding:!1,label:"Previous Price"},{id:"percent",numeric:!0,disablePadding:!1,label:"Percent Change"}];function me(e){var t=e.classes,a=(e.onSelectAllClick,e.order),n=e.orderBy,r=(e.numSelected,e.rowCount,e.onRequestSort);return Object(w.jsx)($.a,{children:Object(w.jsx)(Z.a,{children:xe.map((function(e){return Object(w.jsx)(q.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a,children:Object(w.jsxs)(ee.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(c=e.id,function(e){r(e,c)}),children:[e.label,n===e.id?Object(w.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var c}))})})}Object(G.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(z.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}));var Oe=Object(re.a)({palette:{type:"light",primary:oe.a,secondary:{main:"#b9f6ca"}}}),pe=Object(G.a)((function(e){return{aboveRoot:{height:"100%",width:"100%",backgroundColor:e.palette.secondary},root:{width:"100%",paddingLeft:"0%"},paper:{width:"100%",paddingRight:"30px",marginBottom:e.spacing(2)},table:{minWidth:750,paddingRight:e.spacing(100),width:"100%"},visuallyHidden:{clip:"rect(0 0 0 0)",height:1,margin:1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function ge(){var e=pe(),t=r.a.useState("asc"),a=Object(d.a)(t,2),c=a[0],i=a[1],o=r.a.useState("symbol"),s=Object(d.a)(o,2),l=s[0],j=s[1],b=r.a.useState([]),u=Object(d.a)(b,2),h=u[0],x=(u[1],r.a.useState(0)),m=Object(d.a)(x,2),O=m[0],p=m[1],g=r.a.useState(!0),f=Object(d.a)(g,2),v=f[0],D=f[1],S=r.a.useState(25),C=Object(d.a)(S,2),k=C[0],N=C[1];y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/stock/search",{Query:""}).then((function(e){var t=e.data;if(t.error)console.log("Failed To Get Stocks");else{de=[];for(var a=0;a<t.length;a++)for(var n=t[a].Quote,r=n.o,c=n.h,i=n.l,o=n.c,s=n.pc,l=(o-s)/s*100,d=t[a].Company,j=0;j<je.length;j++)if(d===je[j].symbol){var b=je[j].description;de.push(se(d,b,r,c,i,o,s,l.toFixed(2)))}}})).catch((function(e){console.log("invalid")}));var L=k-Math.min(k,le.length-O*k),P=Object(n.useState)(""),T=Object(d.a)(P,2),A=T[0],I=T[1],B=de.filter((function(e){return e.symbol.toLowerCase().includes(A.toLowerCase())||e.description.toLowerCase().includes(A.toLowerCase())}));return le=[],Object(w.jsxs)(V.a,{theme:Oe,children:[Object(w.jsx)(ce.a,{}),Object(w.jsx)("div",{className:e.aboveRoot,children:Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsxs)("div",{className:"stock-search",children:[Object(w.jsx)("h1",{className:"stock-text"}),Object(w.jsx)("form",{children:Object(w.jsx)("input",{type:"text",placeholder:"Search",className:"stock-input",onChange:function(e){I(e.target.value)}})})]}),B.map((function(e){le.push(e),console.log(le)})),Object(w.jsxs)(te.a,{className:e.paper,children:[Object(w.jsx)(_.a,{className:"chart",children:Object(w.jsxs)(Q.a,{className:e.table,"aria-labelledby":"tableTitle",size:v?"small":"medium","aria-label":"enhanced table",children:[Object(w.jsx)(me,{classes:e,order:c,orderBy:l,onRequestSort:function(e,t){i(l===t&&"asc"===c?"desc":"asc"),j(t)},rowCount:le.length}),Object(w.jsxs)(Y.a,{children:[he(le,ue(c,l)).slice(O*k,O*k+k).map((function(e,t){var a="enhanced-table-checkbox-".concat(t);return Object(w.jsxs)(Z.a,{hover:!0,onClick:function(t){return function(e,t){var a=h.indexOf(t),n=[];-1===a?n=n.concat(h,t):0===a?n=n.concat(h.slice(1)):a===h.length-1?n=n.concat(h.slice(0,-1)):a>0&&(n=n.concat(h.slice(0,a),h.slice(a+1)))}(0,e.name)},role:"checkbox",tabIndex:-1,children:[Object(w.jsx)(q.a,{component:"th",id:a,scope:"row",padding:"none",children:e.symbol}),Object(w.jsx)(q.a,{align:"right",children:e.description}),Object(w.jsx)(q.a,{align:"right",children:e.open}),Object(w.jsx)(q.a,{align:"right",children:e.high}),Object(w.jsx)(q.a,{align:"right",children:e.low}),Object(w.jsx)(q.a,{align:"right",children:e.price}),Object(w.jsx)(q.a,{align:"right",children:e.pcurrent}),Object(w.jsx)(q.a,{align:"right",children:e.percent})]},e.name)})),L>0&&Object(w.jsx)(Z.a,{style:{height:(v?33:53)*L},children:Object(w.jsx)(q.a,{colSpan:6})})]})]})}),Object(w.jsx)(X.a,{rowsPerPageOptions:[5,10,25],component:"div",count:le.length,rowsPerPage:k,page:O,onChangePage:function(e,t){p(t)},onChangeRowsPerPage:function(e){N(parseInt(e.target.value,10)),p(0)}})]}),Object(w.jsx)(ae.a,{control:Object(w.jsx)(ne.a,{checked:v,onChange:function(e){D(e.target.checked)}}),label:"Dense padding"})]})})]})}var fe=a(380),ve=a.n(fe),ye=a(769),we=a(770),De=a(212);var Se=function(){var e=[{name:"candle",data:[{x:new Date(15387786e5).toDateString(),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5).toDateString(),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5).toDateString(),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6).toDateString(),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5).toDateString(),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5).toDateString(),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5).toDateString(),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5).toDateString(),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6).toDateString(),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5).toDateString(),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5).toDateString(),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5).toDateString(),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5).toDateString(),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6).toDateString(),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5).toDateString(),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5).toDateString(),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5).toDateString(),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5).toDateString(),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6).toDateString(),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5).toDateString(),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5).toDateString(),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5).toDateString(),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5).toDateString(),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7).toDateString(),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5).toDateString(),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5).toDateString(),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5).toDateString(),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5).toDateString(),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6).toDateString(),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5).toDateString(),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5).toDateString(),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5).toDateString(),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5).toDateString(),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6).toDateString(),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5).toDateString(),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5).toDateString(),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5).toDateString(),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5).toDateString(),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6).toDateString(),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5).toDateString(),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5).toDateString(),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5).toDateString(),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5).toDateString(),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6).toDateString(),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5).toDateString(),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5).toDateString(),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5).toDateString(),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5).toDateString(),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6).toDateString(),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5).toDateString(),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5).toDateString(),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5).toDateString(),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5).toDateString(),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6).toDateString(),y:[6,6,6589.14,6593.01]},{x:new Date(15388758e5).toDateString(),y:[6,6605,6592,6603.06]},{x:new Date(15388776e5).toDateString(),y:[6,6604.5,6599.09,6603.89]},{x:new Date(15388794e5).toDateString(),y:[6,6604.44,6600,6603.5]},{x:new Date(15388812e5).toDateString(),y:[6,6603.99,6597.5,6603.86]},{x:new Date(1538883e6).toDateString(),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5).toDateString(),y:[6604.98,6606,6604.07,6606]}]}],t=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},margin:{margin:"5%",marginTop:"2%",marginBottom:"0%"}}})),a=Object(re.a)({palette:{primary:De.a}}),n=t();return Object(w.jsx)(V.a,{theme:a,children:Object(w.jsx)("div",{className:n.root,children:Object(w.jsxs)(ye.a,{container:!0,spacing:3,children:[Object(w.jsx)(ye.a,{item:!0,xs:12,sm:8,children:Object(w.jsxs)(te.a,{className:n.paper,children:[Object(w.jsx)("div",{id:"chart",children:Object(w.jsx)(ve.a,{options:{chart:{height:350,offsetY:0,type:"candlestick"},title:{text:"AAPL",align:"left"},annotations:{xaxis:[{x:"Oct 06 14:00",borderColor:"fff",label:{borderColor:"fff",style:{fontSize:"12px",color:"#000",background:"fff"},orientation:"horizontal",offsetY:0,text:"Date"}}]},tooltip:{enabled:!0},xaxis:{type:"category",labels:{formatter:function(e){return e}}},yaxis:{tooltip:{enabled:!0}}},series:e,type:"candlestick",height:525,width:"100%"})}),Object(w.jsxs)(V.a,{theme:a,children:[Object(w.jsx)(we.a,{className:n.margin,mx:"auto",variant:"contained",color:"primary",children:"3 WEEKS"}),Object(w.jsx)(we.a,{className:n.margin,mx:"auto",variant:"contained",color:"primary",children:"3 MONTHS"}),Object(w.jsx)(we.a,{className:n.margin,mx:"auto",variant:"contained",color:"primary",children:"1 YEAR"})]})]})}),Object(w.jsx)(ye.a,{item:!0,xs:12,sm:4,children:Object(w.jsx)(te.a,{className:n.paper,children:"STATS"})})]})})})};a(465);function Ce(e){var t=e.children,a=e.value,n=e.index,r=(e.dir,e.className,Object(F.a)(e,["children","value","index","dir","className"]));return Object(w.jsx)("div",Object(E.a)(Object(E.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),{},{children:a===n&&Object(w.jsx)(K.a,{p:3,children:Object(w.jsx)(J.a,{children:t})})}))}var ke=Object(G.a)({root:{flexGrow:1}});function Ne(){var e=ke(),t=Object(H.a)(),a=r.a.useState(0),n=Object(d.a)(a,2),c=n[0],i=n[1];return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(M.a,{position:"static",color:"default",children:Object(w.jsxs)(W.a,{value:c,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",centered:!0,children:[Object(w.jsx)(U.a,{label:"Search"}),Object(w.jsx)(U.a,{label:"Chart"})]})}),Object(w.jsx)(Ce,{value:c,index:0,dir:t.direction,className:"SearchTab",children:Object(w.jsx)(ge,{})}),Object(w.jsx)(Ce,{value:c,index:1,dir:t.direction,className:"DisplayTab",children:Object(w.jsx)(Se,{})})]})}a(286),a(287);var Le=a(773),Pe=a(777),Te=a(393),Ae=a(394),Ie=a(166),Be=a(162),Re=a(401);var Ee=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{className:"display-4 chart",children:"Today"}),Object(w.jsx)("br",{}),Object(w.jsxs)(Le.a,{className:"move1",width:700,height:298,data:[{name:"00:00",uv:4e3,investment:2400,amt:2400},{name:"03:00",uv:3e3,investment:1398,amt:2210},{name:"06:00",uv:2e3,investment:9800,amt:2290},{name:"09:00",uv:2780,investment:3908,amt:2e3},{name:"12:00",uv:1890,investment:4800,amt:2181},{name:"15:00",uv:2390,investment:3800,amt:2500},{name:"18:00",investment:2e3,amt:2100},{name:"21:00",investment:6e3,amt:2100},{name:"24:00",investment:1e3,amt:2100}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(w.jsx)(Pe.a,{strokeDasharray:"3 3"}),Object(w.jsx)(Te.a,{dataKey:"name"}),Object(w.jsx)(Ae.a,{}),Object(w.jsx)(Ie.a,{}),Object(w.jsx)(Be.a,{}),Object(w.jsx)(Re.a,{type:"monotone",dataKey:"investment",stroke:"#6AC94C ",activeDot:{r:8}})]})]})};var Fe=a(787),Ge=a(402);var He=function(){return Object(w.jsx)("div",{children:Object(w.jsxs)("center",{children:[Object(w.jsx)("h1",{className:"display-4 chart1",children:"Portfolio"}),Object(w.jsx)(Fe.a,{width:400,height:300,children:Object(w.jsx)(Ge.a,{data:[{name:"Tesla",value:100},{name:"Game Stop",value:300},{name:"AMC",value:100},{name:"Apple",value:80}],dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#A032B6",label:!0})})]})})},Me=[{id:"name",label:"Name",minWidth:170},{id:"time",label:"Time",minWidth:100},{id:"value",label:"Value",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"shares",label:"Shares",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"avg",label:"Purchase",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}}];function We(e,t,a,n,r){return{name:e,time:t,value:a,shares:n,avg:r}}var Ue=[We("Tesla","11:90am",123,22,"3")];var Je=Object(G.a)({root:{width:"100%"},container:{maxHeight:440}});function Ke(){var e=Je(),t=r.a.useState(0),n=Object(d.a)(t,2),c=n[0],i=n[1],o=r.a.useState(10),s=Object(d.a)(o,2),l=s[0],j=s[1];return function(){var e=a(168),t=a(234),n=e.retrieveToken(),r=t.decode(n,{complete:!0});if(console.log(r),null!==r){r.payload.id,r.payload.FirstName,r.payload.LastName;var c=r.payload.Login}y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/getPortfolio",{Login:c}).then((function(e){var t=e.data;if(t.error)console.log(t.error);else{console.log(e);for(var a=e.data.StocksOwned,n=0;n<a.length;n++)console.log(a[n]),Ue.push(We(a[n].Company,a[n].Date,a[n].StockValue,a[n].Amount,a[n].TotalValue))}})).catch((function(e){console.log("Error")}))}(),Object(w.jsxs)(te.a,{className:e.root,children:[Object(w.jsx)(_.a,{className:e.container,children:Object(w.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(w.jsx)($.a,{children:Object(w.jsx)(Z.a,{children:Me.map((function(e){return Object(w.jsx)(q.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(w.jsx)(Y.a,{children:Ue.slice(c*l,c*l+l).map((function(e){return Object(w.jsx)(Z.a,{hover:!0,role:"checkbox",tabIndex:-1,children:Me.map((function(t){var a=e[t.id];return Object(w.jsx)(q.a,{align:t.align,children:t.format&&"number"===typeof a?t.format(a):a},t.id)}))},e.code)}))})]})}),Object(w.jsx)(X.a,{rowsPerPageOptions:[10,25,100],component:"div",count:Ue.length,rowsPerPage:l,page:c,onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){j(+e.target.value),i(0)}})]})}var ze=function(){var e=a(168),t=a(234),r=e.retrieveToken(),c=t.decode(r,{complete:!0});console.log(c);var i=Object(n.useState)(""),o=Object(d.a)(i,2),s=o[0],l=o[1],j=Object(n.useState)(""),b=Object(d.a)(j,2),u=b[0],h=b[1];if(null!==c){c.payload.id;var x=c.payload.FirstName,p=c.payload.LastName,g=c.payload.Login}return y.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/getPortfolio",{Login:g}).then((function(e){var t=e.data;if(t.error)console.log(t.error);else{console.log(e);var a=e.data.AccountBalance;l(a);var n=e.data.Holdings;h(n)}})).catch((function(e){console.log("Error")})),Object(w.jsxs)("center",{children:[Object(w.jsxs)("h1",{children:["Welcome, ",x," ",p]}),Object(w.jsx)("br",{}),Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(O.a,{children:[Object(w.jsx)("span",{children:"Current Cash Balance "}),Object(w.jsxs)("h2",{children:["$",s]})]}),Object(w.jsxs)(O.a,{children:[Object(w.jsx)("span",{children:"Current Holdings "}),Object(w.jsxs)("h2",{children:["$",u]})]})]})]})};var Ve=function(){var e=a(168),t=a(234),n=e.retrieveToken(),r=t.decode(n,{complete:!0});return console.log(r),Object(w.jsxs)("div",{children:[Object(w.jsxs)(j.a,{className:"color-nav",expand:"lg",children:[Object(w.jsx)(j.a.Brand,{className:"font",children:"StockHub"}),Object(w.jsx)(b.a.Link,{className:"font",children:"Learderboard"}),Object(w.jsx)(f.Link,{className:"nav-link",to:"/Search",children:"Stocks"}),Object(w.jsx)(b.a.Link,{className:"font",children:"Settings"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(w.jsx)(b.a,{className:"mr-auto"}),Object(w.jsx)(p.a,{inline:!0,children:Object(w.jsx)(g.a,{variant:"outline-danger",onClick:function(e){e.preventDefault(),localStorage.removeItem("user_data"),window.location.href="/"},children:"Logout"})})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)(m.a,{className:"justify-content-md-center",children:Object(w.jsx)(O.a,{xs:6,children:Object(w.jsx)(te.a,{children:Object(w.jsx)(ze,{})})})}),Object(w.jsx)("br",{}),Object(w.jsxs)(m.a,{className:"justify-content-md-center",children:[Object(w.jsx)(O.a,{md:"auto",children:Object(w.jsx)(te.a,{children:Object(w.jsx)(Ee,{})})}),Object(w.jsx)(O.a,{md:"auto",children:Object(w.jsx)(te.a,{children:Object(w.jsx)(He,{})})})]}),Object(w.jsx)("br",{}),Object(w.jsx)(m.a,{className:"justify-content-md-center",children:Object(w.jsx)(O.a,{sm:10,children:Object(w.jsx)(Ke,{})})}),Object(w.jsx)("br",{})]})};var Qe=function(){return Object(w.jsx)(f.HashRouter,{children:Object(w.jsxs)(S.g,{children:[Object(w.jsx)(S.d,{path:"/",exact:!0,children:Object(w.jsx)(T,{})}),Object(w.jsx)(S.d,{path:"/Register",exact:!0,children:Object(w.jsx)(D,{})}),Object(w.jsx)(S.d,{path:"/Home",exact:!0,children:Object(w.jsx)(A,{})}),Object(w.jsx)(S.d,{path:"/cards",exact:!0,children:Object(w.jsx)(R,{})}),Object(w.jsx)(S.d,{path:"/Search",exact:!0,children:Object(w.jsx)(Ne,{})}),Object(w.jsx)(S.d,{path:"/Landing",exact:!0,children:Object(w.jsx)(Ve,{})}),Object(w.jsx)(S.d,{path:"/Chart",exact:!0,children:Object(w.jsx)(Ee,{})}),Object(w.jsx)(S.c,{to:"/"})]})})},Ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,793)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(Qe,{})}),document.getElementById("root")),Ye()}},[[705,1,2]]]);
//# sourceMappingURL=main.868c21da.chunk.js.map