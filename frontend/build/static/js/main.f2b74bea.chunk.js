(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{256:function(e,t,a){},257:function(e,t,a){},285:function(e,t){t.storeToken=function(e){try{localStorage.setItem("user_data",e.accessToken)}catch(t){console.log(t.message)}},t.retrieveToken=function(){var e;try{e=localStorage.getItem("user_data")}catch(t){console.log(t.message)}return e}},286:function(e,t,a){a(287).config(),t.buildPath=function(e){return"https://group20-stocksimulatorv2.herokuapp.com/"+e}},290:function(e,t,a){},291:function(e,t,a){},294:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),s=a.n(r),i=(a(256),a(257),a(35)),o=a.n(i),l=a(64),j=a(25),d=(a(77),a(484)),b=a(487),u=a(482),h=a(463),m=a(464),O=a(465),x=a(219),p=a(485),f=a(218),v=a(40),g=a(2);var N=function(){var e,t,n,r,s,i,N=Object(c.useState)(""),k=Object(j.a)(N,2),y=(k[0],k[1],function(){var c=Object(l.a)(o.a.mark((function c(j){var d,b,u;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:u=function(){return(u=Object(l.a)(o.a.mark((function a(){var c,l;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={FirstName:e.value,LastName:t.value,Email:i.value,Login:n.value,Password:r.value,Password2:s.value},a.next=3,d.post("https://group20-stocksimulatorv2.herokuapp.com/api/auth/login",c);case 3:l=a.sent,console.log(l.data);case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)},b=function(){return u.apply(this,arguments)},d=a(102),b();case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}());return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(d.a,{collapseOnSelect:!0,expand:"lg",className:"color-nav",children:[Object(g.jsx)(d.a.Brand,{id:"change",href:"#home",children:"StockHub"}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(b.a,{className:"mr-auto",children:[Object(g.jsx)(v.Link,{id:"change",className:"nav-link",to:"/Home",children:"Home"}),Object(g.jsx)(b.a.Link,{id:"change",href:"#pricing",children:"Pictures"}),Object(g.jsxs)(u.a,{title:"More Information",className:"title",id:"collasible-nav-dropdown",children:[Object(g.jsx)(u.a.Item,{href:"#action/3.1",children:"About Us"}),Object(g.jsx)(u.a.Item,{href:"#action/3.2",children:"Our mission"}),Object(g.jsx)(u.a.Item,{href:"#action/3.3",children:"Progress"}),Object(g.jsx)(u.a.Divider,{}),Object(g.jsx)(u.a.Item,{href:"#action/3.4",children:"Github"})]})]}),Object(g.jsx)(b.a,{children:Object(g.jsx)(v.Link,{id:"change",className:"nav-link",to:"/LoginPage",children:"Login"})})]})]}),Object(g.jsx)(h.a,{children:Object(g.jsx)(m.a,{className:"jumbotron",children:Object(g.jsx)(h.a,{children:Object(g.jsx)(O.a,{className:"justify-content-md-center",children:Object(g.jsxs)(x.a,{className:"col-5 align-self-center",children:[Object(g.jsxs)("center",{children:["\xa0 \xa0 \xa0   ",Object(g.jsx)("h1",{className:"display-3",children:"Register"})]}),Object(g.jsxs)(p.a,{children:[Object(g.jsxs)(p.a.Row,{children:[Object(g.jsxs)(p.a.Group,{as:x.a,controlid:"formGridUser",children:[Object(g.jsx)(p.a.Label,{children:"First Name"}),Object(g.jsx)(p.a.Control,{type:"firstname",placeholder:"Enter First Name",ref:function(t){return e=t}})]}),Object(g.jsxs)(p.a.Group,{as:x.a,controlid:"formGridUser",children:[Object(g.jsx)(p.a.Label,{children:"Last Name"}),Object(g.jsx)(p.a.Control,{type:"lastName",placeholder:"Enter Last Name",ref:function(e){return t=e}})]})]}),Object(g.jsxs)(p.a.Group,{controlid:"formGridUser",children:[Object(g.jsx)(p.a.Label,{children:"Username"}),Object(g.jsx)(p.a.Control,{type:"username",placeholder:"Enter username",ref:function(e){return n=e}})]}),Object(g.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(p.a.Label,{children:"Email"}),Object(g.jsx)(p.a.Control,{type:"email",placeholder:"john@email.com",ref:function(e){return i=e}})]}),Object(g.jsxs)(p.a.Row,{children:[Object(g.jsxs)(p.a.Group,{as:x.a,controlId:"formGridUser",children:[Object(g.jsx)(p.a.Label,{children:"Password"}),Object(g.jsx)(p.a.Control,{type:"password",placeholder:"Enter password",ref:function(e){return r=e}})]}),Object(g.jsxs)(p.a.Group,{as:x.a,controlId:"formGridPassword",children:[Object(g.jsx)(p.a.Label,{children:"Confirm Password"}),Object(g.jsx)(p.a.Control,{type:"password",placeholder:"Confirm password",ref:function(e){return s=e}})]})]}),Object(g.jsx)("center",{children:Object(g.jsx)(f.a,{className:"color-button",type:"submit",onClick:y,children:"Submit"})})]})]})})})})})]})},k=a(26);a(283);var y=function(){return Object(g.jsxs)(d.a,{collapseOnSelect:!0,expand:"lg",className:"color-nav",fixed:"top",children:[Object(g.jsx)(d.a.Brand,{id:"change",href:"#home",children:"StockHub"}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(b.a,{className:"mr-auto",children:[Object(g.jsx)(v.Link,{id:"change",className:"nav-link",to:"/Home",children:"Home"}),Object(g.jsx)(b.a.Link,{id:"change",href:"#pricing",children:"Pictures"}),Object(g.jsxs)(u.a,{title:"More Information",className:"title",id:"collasible-nav-dropdown",children:[Object(g.jsx)(u.a.Item,{href:"#action/3.1",children:"About Us"}),Object(g.jsx)(u.a.Item,{href:"#action/3.2",children:"Our mission"}),Object(g.jsx)(u.a.Item,{href:"#action/3.3",children:"Progress"}),Object(g.jsx)(u.a.Divider,{}),Object(g.jsx)(u.a.Item,{href:"#action/3.4",children:"Github"})]})]}),Object(g.jsx)(b.a,{children:Object(g.jsx)(v.Link,{id:"change",className:"nav-link",to:"/Register",children:"Register"})})]})]})},w=a.p+"static/media/vector-creator.573ab621.png",L=a(220),C=a(102),S=a.n(C);var P=function(){a(285),a(286);var e,t,n=Object(c.useState)(""),r=Object(j.a)(n,2),s=r[0],i=(r[1],function(){var a=Object(l.a)(o.a.mark((function a(c){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c.preventDefault(),n={Login:e.value,Password:t.value},JSON.stringify(n),console.log(e.value+" "+t.value),function(){S.a.post("https://group20-stocksimulatorv2.herokuapp.com/api/auth/login",{Login:e.value,Password:t.value}).then((function(e){var t=e.data;t.error?alert(t.error):console.log("OOOOOOOOOOH! :)")})).catch((function(e){alert("User/Password combination incorrect")}))}();case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());return Object(g.jsxs)(O.a,{children:[Object(g.jsx)(x.a,{className:"left-side",nogutters:"true",children:Object(g.jsxs)(x.a,{lg:8,md:{span:6,offset:3},sm:12,className:"LoginBox",children:[Object(g.jsxs)(h.a,{className:"jumbotron2",children:["\xa0 \xa0",Object(g.jsx)("h1",{className:"display-3",id:"login",children:"Login"}),Object(g.jsxs)(p.a,{onSubmit:i,children:[Object(g.jsxs)(p.a.Group,{controlId:"formBasicText",children:[Object(g.jsx)(p.a.Label,{children:"Username"}),Object(g.jsx)(p.a.Control,{type:"text",placeholder:"Enter username",ref:function(t){return e=t}})]}),Object(g.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(g.jsx)(p.a.Label,{children:"Password"}),Object(g.jsx)(p.a.Control,{type:"password",placeholder:"Password",ref:function(e){return t=e}}),Object(g.jsx)(p.a.Text,{className:"text-muted",children:"Never share your username or password with anyone!"}),Object(g.jsx)(L.LinkContainer,{to:"/about",children:Object(g.jsx)(b.a.Link,{children:"Forgot Password?"})})]}),Object(g.jsx)(f.a,{variant:"primary",type:"submit",onClick:i,className:"color-button",children:"Launch"})]}),Object(g.jsx)("span",{id:"loginResult",children:s})]}),"\xa0"]})}),Object(g.jsx)(x.a,{className:"right-side",nogutters:"true",children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)("img",{src:w,width:"520",alt:"space",fluid:"true",className:"center"}),Object(g.jsx)(O.a,{className:"justify-content-md-center",children:Object(g.jsx)("h2",{className:"quote",children:"Take your investments to new heights"})})]})})]})},I=function(){return Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(y,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(P,{}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})};var T=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h1",{children:"WE'RE IN HOME"})})};var G=function(){return Object(g.jsxs)("div",{id:"loggedInDiv",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(g.jsx)("span",{id:"userName",children:"Logged In As John Doe "}),Object(g.jsx)("br",{}),"\xa0 \xa0 \xa0 ",Object(g.jsx)("button",{type:"button",id:"logoutButton",class:"buttons",onClick:function(e){e.preventDefault(),alert("doLogout")},children:" Log Out "}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})};var B=function(){var e="",t="",a=Object(c.useState)(""),n=Object(j.a)(a,2),r=n[0],s=(n[1],Object(c.useState)("")),i=Object(j.a)(s,2),d=i[0],b=(i[1],Object(c.useState)("")),u=Object(j.a)(b,2),h=u[0],m=(u[1],function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),alert("addCard() "+e.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),alert("searchCard() "+t.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{id:"cardUIDiv",children:["\xa0\xa0",Object(g.jsx)("br",{}),"\xa0\xa0",Object(g.jsx)("input",{type:"text",id:"searchText",placeholder:"Card To Search For",ref:function(e){return t=e}}),"\xa0\xa0",Object(g.jsx)("button",{type:"button",id:"searchCardButton",class:"buttons",onClick:O,children:" Search Card"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{id:"cardSearchResult",children:d}),Object(g.jsx)("p",{id:"cardList",children:h}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"text",id:"cardText",placeholder:"Card To Add",ref:function(t){return e=t}}),"\xa0\xa0",Object(g.jsx)("button",{type:"button",id:"addCardButton",class:"buttons",onClick:m,children:" Add Card "}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{id:"cardAddResult",children:r})]})},D=function(){return Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(y,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(G,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(B,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},F=(a(290),a(291),function(e){var t=e.name,a=e.image,c=e.symbol,n=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(g.jsx)("div",{className:"coin-container",children:Object(g.jsxs)("div",{className:"coin-row",children:[Object(g.jsxs)("div",{className:"coin",children:[Object(g.jsx)("img",{src:a,alt:"crypto"}),Object(g.jsx)("h1",{children:t}),Object(g.jsx)("p",{className:"coin-sympol",children:c})]}),Object(g.jsxs)("div",{className:"coin-data",children:[Object(g.jsxs)("p",{className:"coin-price",children:["$",n]}),Object(g.jsxs)("p",{className:"coin-volume",children:["$",r.toLocaleString()]}),s<0?Object(g.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(g.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(g.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})}),R=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1];Object(c.useEffect)((function(){S.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data)})).catch((function(e){return console.log(e)}))}),[]);var l=a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(g.jsxs)("div",{className:"coin-app",children:[Object(g.jsxs)("div",{className:"coin-search",children:[Object(g.jsx)("h1",{className:"coin-text",children:"Search"}),Object(g.jsx)("form",{children:Object(g.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){o(e.target.value)}})})]}),l.map((function(e){return Object(g.jsx)(F,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})},E=(a(292),a(294),a(471)),U=a(466),A=a(470),_=a(233),H=a(234),W=a(116),M=a(112),J=a(239);var K=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"display-4 chart",children:"Today"}),Object(g.jsx)("br",{}),Object(g.jsxs)(U.a,{className:"move1",width:700,height:298,data:[{name:"00:00",uv:4e3,investment:2400,amt:2400},{name:"03:00",uv:3e3,investment:1398,amt:2210},{name:"06:00",uv:2e3,investment:9800,amt:2290},{name:"09:00",uv:2780,investment:3908,amt:2e3},{name:"12:00",uv:1890,investment:4800,amt:2181},{name:"15:00",uv:2390,investment:3800,amt:2500},{name:"18:00",investment:2e3,amt:2100},{name:"21:00",investment:6e3,amt:2100},{name:"24:00",investment:1e3,amt:2100}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(g.jsx)(A.a,{strokeDasharray:"3 3"}),Object(g.jsx)(_.a,{dataKey:"name"}),Object(g.jsx)(H.a,{}),Object(g.jsx)(W.a,{}),Object(g.jsx)(M.a,{}),Object(g.jsx)(J.a,{type:"monotone",dataKey:"investment",stroke:"#6AC94C ",activeDot:{r:8}})]})]})};var $=a(488),q=a(240);var V=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("center",{children:[Object(g.jsx)("h1",{className:"display-4 chart1",children:"Portfolio"}),Object(g.jsx)($.a,{width:400,height:300,children:Object(g.jsx)(q.a,{data:[{name:"Tesla",value:100},{name:"Game Stop",value:300},{name:"AMC",value:100},{name:"Apple",value:80}],dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#A032B6",label:!0})})]})})},z=a(475),Q=a(477),X=a(481),Y=a(480),Z=a(476),ee=a(478),te=a(483),ae=a(479),ce=[{id:"name",label:"Name",minWidth:170},{id:"time",label:"Time",minWidth:100},{id:"value",label:"Value",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"shares",label:"Shares",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"avg",label:"Purchase",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function ne(e,t,a,c){return{name:e,time:t,value:a,shares:c,avg:a*c}}var re=[ne("Tesla","11:45am",124,22),ne("AMC","1:29pm",9.5,30),ne("Game Stop","3:30am",120,7),ne("Lululemon","6:20pm",200,2),ne("Apple","2:14pm",167,10),ne("Twitter","10:29am",63.9,28),ne("Microsoft","9:50am",242.55,19),ne("Disney","9:00am",188.9,10),ne("GoPro","8:48am",12.5,8),ne("Starbucks","8:39am",109.38,100),ne("Chegg","10:00pm",88.25,12),ne("Spotify","12:00pm",273.5,2),ne("Chase","6:00pnm",120.2,8),ne("Square","8:05pm",230.29,1),ne("DOW","3:09pm",64.6,7)],se=Object(z.a)({root:{width:"100%"},container:{maxHeight:440}});function ie(){var e=se(),t=n.a.useState(0),a=Object(j.a)(t,2),c=a[0],r=a[1],s=n.a.useState(10),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(g.jsxs)(E.a,{className:e.root,children:[Object(g.jsx)(Z.a,{className:e.container,children:Object(g.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(g.jsx)(ee.a,{children:Object(g.jsx)(ae.a,{children:ce.map((function(e){return Object(g.jsx)(Y.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(g.jsx)(X.a,{children:re.slice(c*o,c*o+o).map((function(e){return Object(g.jsx)(ae.a,{hover:!0,role:"checkbox",tabIndex:-1,children:ce.map((function(t){var a=e[t.id];return Object(g.jsx)(Y.a,{align:t.align,children:t.format&&"number"===typeof a?t.format(a):a},t.id)}))},e.code)}))})]})}),Object(g.jsx)(te.a,{rowsPerPageOptions:[10,25,100],component:"div",count:re.length,rowsPerPage:o,page:c,onChangePage:function(e,t){r(t)},onChangeRowsPerPage:function(e){l(+e.target.value),r(0)}})]})}var oe=function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)(d.a,{className:"color-nav",expand:"lg",children:[Object(g.jsx)(d.a.Brand,{className:"font",children:"Welcome, User"}),Object(g.jsx)(b.a.Link,{className:"font",children:"Learderboard"}),Object(g.jsx)(v.Link,{className:"nav-link",to:"/Search",children:"Stocks"}),Object(g.jsx)(b.a.Link,{className:"font",children:"Settings"}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsx)(b.a,{className:"mr-auto"}),Object(g.jsx)(p.a,{inline:!0,children:Object(g.jsx)(v.Link,{id:"logout",className:"nav-link",to:"/",children:"Logout"})})]})]}),Object(g.jsx)("br",{}),Object(g.jsxs)(O.a,{className:"justify-content-md-center",children:[Object(g.jsx)(x.a,{md:"auto",children:Object(g.jsx)(E.a,{children:Object(g.jsx)(K,{})})}),Object(g.jsx)(x.a,{md:"auto",children:Object(g.jsx)(E.a,{children:Object(g.jsx)(V,{})})})]}),Object(g.jsx)("br",{}),Object(g.jsx)(O.a,{className:"justify-content-md-center",children:Object(g.jsx)(x.a,{sm:10,children:Object(g.jsx)(ie,{})})})]})};var le=function(){return Object(g.jsx)(v.BrowserRouter,{children:Object(g.jsxs)(k.g,{children:[Object(g.jsx)(k.d,{path:"/",exact:!0,children:Object(g.jsx)(I,{})}),Object(g.jsx)(k.d,{path:"/Register",exact:!0,children:Object(g.jsx)(N,{})}),Object(g.jsx)(k.d,{path:"/Home",exact:!0,children:Object(g.jsx)(T,{})}),Object(g.jsx)(k.d,{path:"/LoginPage",exact:!0,children:Object(g.jsx)(I,{})}),Object(g.jsx)(k.d,{path:"/cards",exact:!0,children:Object(g.jsx)(D,{})}),Object(g.jsx)(k.d,{path:"/Search",exact:!0,children:Object(g.jsx)(R,{})}),Object(g.jsx)(k.d,{path:"/Landing",exact:!0,children:Object(g.jsx)(oe,{})}),Object(g.jsx)(k.d,{path:"/Chart",exact:!0,children:Object(g.jsx)(K,{})}),Object(g.jsx)(k.c,{to:"/"})]})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,490)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(le,{})}),document.getElementById("root")),je()},77:function(e,t,a){}},[[424,1,2]]]);
//# sourceMappingURL=main.f2b74bea.chunk.js.map