(this.webpackJsonponlineorder_fe=this.webpackJsonponlineorder_fe||[]).push([[0],{154:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(134),s=n.n(r),i=(n(154),n(4)),o=n(237),l=n(232),u=n(83),j=n(142),d=n(60),h=n(59),b=n(233),f=n(231),m=function(e){var t="/login?username=".concat(e.username,"&password=").concat(e.password);return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to log in")}))},O=function(e){return fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to sign up")}))},p=n(144),g=n(9),x=u.a.Option,y=function(e){var t=e.itemId,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(g.jsx)(d.a,{title:"Add to shopping cart",children:Object(g.jsx)(h.a,{loading:r,type:"primary",icon:Object(g.jsx)(p.a,{}),onClick:function(){s(!0),function(e){return fetch("/order/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to add menu item to shopping cart")}))}(t).then((function(){return j.b.success("Successfully add item")})).catch((function(e){return j.b.error(e.message)})).finally((function(){s(!1)}))}})})},v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(i.a)(r,2),o=s[0],l=s[1],d=Object(a.useState)([]),h=Object(i.a)(d,2),m=h[0],O=h[1],p=Object(a.useState)(!1),v=Object(i.a)(p,2),S=v[0],w=v[1],C=Object(a.useState)(!1),F=Object(i.a)(C,2),I=F[0],P=F[1];return Object(a.useEffect)((function(){P(!0),fetch("/restaurants").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get restaurants");return e.json()})).then((function(e){O(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){P(!1)}))}),[]),Object(a.useEffect)((function(){var e;o&&(w(!0),(e=o,fetch("/restaurant/".concat(e,"/menu")).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get menus");return e.json()}))).then((function(e){c(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){w(!1)})))}),[o]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{value:o,onSelect:function(e){return l(e)},placeholder:"Select a restaurant",loading:I,style:{width:300},onChange:function(){},children:m.map((function(e){return Object(g.jsx)(x,{value:e.id,children:e.name},e.id)}))}),o&&Object(g.jsx)(b.b,{style:{marginTop:20},loading:S,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3},dataSource:n,renderItem:function(e){return Object(g.jsx)(b.b.Item,{children:Object(g.jsxs)(f.a,{title:e.name,extra:Object(g.jsx)(y,{itemId:e.id}),children:[Object(g.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:340,width:"100%",display:"block"}}),"Price: ".concat(e.price)]})})}})]})},S=n(14),w=n(13),C=n(17),F=n(16),I=n(234),P=n(236),k=n(239),T=n(240),E=function(e){Object(C.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={loading:!1},e.onFinish=function(t){e.setState({loading:!0}),m(t).then((function(){j.b.success("Login Successful"),e.props.onSuccess()})).catch((function(e){j.b.error(e.message)})).finally((function(){e.setState({loading:!1})}))},e.render=function(){return Object(g.jsxs)(I.a,{name:"normal_login",onFinish:e.onFinish,style:{width:300,margin:"auto"},children:[Object(g.jsx)(I.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(g.jsx)(P.a,{prefix:Object(g.jsx)(k.a,{}),placeholder:"Username"})}),Object(g.jsx)(I.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(g.jsx)(P.a.Password,{prefix:Object(g.jsx)(T.a,{}),placeholder:"Password"})}),Object(g.jsx)(I.a.Item,{children:Object(g.jsx)(h.a,{type:"primary",htmlType:"submit",loading:e.state.loading,children:"Login"})})]})},e}return Object(S.a)(n)}(c.a.Component),L=E,M=n(238),q=l.a.Text,R=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(!1),d=Object(i.a)(u,2),f=d[0],m=d[1],O=Object(a.useState)(!1),p=Object(i.a)(O,2),x=p[0],y=p[1];Object(a.useEffect)((function(){n&&(m(!0),fetch("/cart").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get shopping cart data");return e.json()})).then((function(e){l(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){m(!1)})))}),[n]);var v=function(){c(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a,{type:"primary",shape:"round",onClick:function(){c(!0)},children:"Cart"}),Object(g.jsx)(M.a,{title:"My Shopping Cart",onClose:v,visible:n,width:520,footer:Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(g.jsx)(q,{strong:!0,children:"Total price: $".concat(null===o||void 0===o?void 0:o.totalPrice)}),Object(g.jsxs)("div",{children:[Object(g.jsx)(h.a,{onClick:v,style:{marginRight:8},children:"Cancel"}),Object(g.jsx)(h.a,{onClick:function(){y(!0),fetch("/checkout").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to checkout")})).then((function(){j.b.success("Successfully checkout"),c(!1)})).catch((function(e){j.b.error(e.message)})).finally((function(){y(!1)}))},type:"primary",loading:x,disabled:f||0===(null===o||void 0===o?void 0:o.orderItemList.length),children:"Checkout"})]})]}),children:Object(g.jsx)(b.b,{loading:f,itemLayout:"horizontal",dataSource:null===o||void 0===o?void 0:o.orderItemList,renderItem:function(e){return Object(g.jsx)(b.b.Item,{children:Object(g.jsx)(b.b.Item.Meta,{title:e.menuItem.name,description:"$".concat(e.price)})})}})})]})},N=n(235),_=function(e){Object(C.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){O(t).then((function(){e.setState({displayModal:!1}),j.b.success("Successfully signed up")})).catch((function(e){j.b.error(e.message)}))},e.render=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(g.jsx)(N.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(g.jsxs)(I.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(g.jsx)(I.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(g.jsx)(P.a,{prefix:Object(g.jsx)(k.a,{}),placeholder:"Email"})}),Object(g.jsx)(I.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(g.jsx)(P.a,{prefix:Object(g.jsx)(T.a,{}),placeholder:"Password"})}),Object(g.jsx)(I.a.Item,{name:"firstName",rules:[{required:!0,message:"Please input your first name!"}],children:Object(g.jsx)(P.a,{placeholder:"firstname"})}),Object(g.jsx)(I.a.Item,{name:"lastName",rules:[{required:!0,message:"Please input your last name!"}],children:Object(g.jsx)(P.a,{placeholder:"lastname"})}),Object(g.jsx)(I.a.Item,{children:Object(g.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return Object(S.a)(n)}(c.a.Component),A=_,B=o.a.Header,H=o.a.Content,J=l.a.Title;var U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(g.jsxs)(o.a,{style:{height:"100vh"},children:[Object(g.jsx)(B,{children:Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)(J,{level:2,style:{color:"white",lineHeight:"inherit",marginBottom:0},children:"Lai Food"}),Object(g.jsx)("div",{children:n?Object(g.jsx)(R,{}):Object(g.jsx)(A,{})})]})}),Object(g.jsx)(H,{style:{padding:"50px",maxHeight:"calc(100% - 64px)",overflowY:"auto"},children:n?Object(g.jsx)(v,{}):Object(g.jsx)(L,{onSuccess:function(){return c(!0)}})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,241)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(U,{})})),$()}},[[230,1,2]]]);
//# sourceMappingURL=main.a67be7d3.chunk.js.map