(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[21],{237:function(e,t,r){"use strict";r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"g",(function(){return m})),r.d(t,"f",(function(){return f})),r.d(t,"c",(function(){return g})),r.d(t,"a",(function(){return h}));var n=r(84),a=r.n(n),s=r(85),u=r(3),o=r(72),c=r(91),i=function e(){Object(o.a)(this,e),this.login=function(e,t){var r={email:e,password:t};return c.a.post("/login",r)},this.signup=function(e,t,r){var n={name:e,email:t,password:r};return c.a.post("/signup",n,{headers:{Url:"http://3.135.194.11:5000"}})},this.verify=function(e,t){var r={email:e,token:t};return c.a.post("/verifyemail",r)},this.forgetPass=function(e){var t={email:e};return c.a.post("/forgetpassword",t,{headers:{Url:"http://3.135.194.11:5000"}})},this.resetPass=function(e,t){var r={password:e,token:t};return c.a.post("/resetpassword",r,{headers:{Url:"http://3.135.194.11:5000"}})},this.updateProfile=function(e){var t={Authorization:JSON.parse(localStorage.getItem("authUser")).token},r={name:e};return c.a.post("/updateprofile",r,{headers:t})},this.changePassword=function(e,t){var r=JSON.parse(localStorage.getItem("authUser"));console.log("Auth",r);var n={Authorization:r.token},a={oldpassword:e,password:t,userid:r.userId};return c.a.post("/changepassword",a,{headers:n})},this.getProfile=function(){var e={Authorization:JSON.parse(localStorage.getItem("authUser")).token};return c.a.get("/profile",{headers:e})}},p=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,o,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(e,t,r){return n({type:u.l,idToken:e,userId:t,message:r}),{success:!0,message:r}},s=function(e){return n({type:u.j,message:e}),{success:!1,error:e}},r.prev=2,n({type:u.k}),c=new i,r.next=7,c.login(e,t).then((function(e){if(console.log("Response",e),e.data.success){var t={token:e.data.token,userid:e.data.userid};return localStorage.setItem("authUser",JSON.stringify(t)),o(e.data.token,e.data.userid,e.data.message)}return s(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n,s,o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(e){return r({type:u.f,message:e,loading:!1}),{success:!0,message:e}},n=function(e){return r({type:u.d,message:e,loading:!1}),{success:!1,error:e}},t.prev=2,r({type:u.e}),o=new i,t.next=7,o.forgetPass(e).then((function(e){return s(e.data.message)}));case 7:return c=t.sent,t.abrupt("return",c);case 11:if(t.prev=11,t.t0=t.catch(2),!t.t0.response){t.next=17;break}return t.abrupt("return",n(t.t0.response.data.message));case 17:return t.abrupt("return",n("Something went wrong!"));case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,o,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(e){return n({type:u.o,message:e,loading:!1}),{success:!0,message:e}},s=function(e){return n({type:u.m,message:e,loading:!1}),{success:!1,error:e}},r.prev=2,n({type:u.n}),c=new i,r.next=7,c.resetPass(e,t).then((function(e){return o(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()},m=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,o,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(e){return n({type:u.x,message:e,loading:!1}),{success:!0,message:e}},s=function(e){return n({type:u.v,message:e,loading:!1}),{success:!1,error:e}},r.prev=2,n({type:u.w}),c=new i,r.next=7,c.verify(e,t).then((function(e){return o(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e,t,r){return function(){var n=Object(s.a)(a.a.mark((function n(s){var o,c,p,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(e){return s({type:u.r,message:e,loading:!1}),{success:!0,message:e}},o=function(e){return s({type:u.p,message:e,loading:!1}),{success:!1,error:e}},n.prev=2,s({type:u.q}),p=new i,n.next=7,p.signup(e,t,r).then((function(e){return c(e.data.message)}));case 7:return l=n.sent,n.abrupt("return",l);case 11:if(n.prev=11,n.t0=n.catch(2),!n.t0.response){n.next=17;break}return n.abrupt("return",o(n.t0.response.data.data&&n.t0.response.data.data.length>0?n.t0.response.data.data[0].msg:n.t0.response.data.message));case 17:return n.abrupt("return",o("Something went wrong!"));case 18:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()},g=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var r,n,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e,r){return t({type:u.i,message:e,profiledata:r}),{success:!1,error:e}},r=function(e){return t({type:u.g,message:e}),{success:!1,error:e}},e.prev=2,t({type:u.h}),s=new i,e.next=7,s.getProfile().then((function(e){return e.data.success?n(e.data.message,e.data.data):r(e.data.message)}));case 7:return o=e.sent,e.abrupt("return",o);case 11:if(e.prev=11,e.t0=e.catch(2),!e.t0.response){e.next=17;break}return e.abrupt("return",r(e.t0.response.data.data&&e.t0.response.data.data.length>0?e.t0.response.data.data[0].msg:e.t0.response.data.message));case 17:return e.abrupt("return",r("Something went wrong!"));case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,o,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(e){return n({type:u.c,message:e}),{success:!0,message:e}},s=function(e){return n({type:u.a,message:e}),{success:!1,error:e}},r.prev=2,n({type:u.b}),c=new i,r.next=7,c.changePassword(e,t).then((function(e){return e.data.success?o(e.data.message):s(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.data&&r.t0.response.data.data.length>0?r.t0.response.data.data[0].msg:r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()}},240:function(e,t,r){"use strict";var n=r(27),a=r(1),s=r(185),u=r(0);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=Object(u.useState)(e),c=Object(s.a)(o,2),i=c[0],p=c[1],l=Object(u.useState)(!0),d=Object(s.a)(l,2),m=d[0],f=d[1],g=Object(u.useState)(!1),h=Object(s.a)(g,2),b=h[0],v=h[1],w=Object(u.useCallback)((function(){return Object.keys(t).some((function(e){var r=t[e].required,n=i[e].value,a=i[e].error;return r&&!n||a}))}),[i,t]);Object(u.useEffect)((function(){f(!0)}),[]),Object(u.useEffect)((function(){b&&f(w())}),[i,b,w]);var y=Object(u.useCallback)((function(e){v(!0);var r=e.target.name,s=e.target.value,u="";t[r].required&&(s||(u="This is required field.")),null!==t[r].validator&&"object"===typeof t[r].validator&&s&&!t[r].validator.regEx.test(s)&&(u=t[r].validator.error),p((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({},r,{value:s,error:u}))}))}),[t]),O=Object(u.useCallback)((function(e){e.preventDefault(),w()||r(i)}),[i,r,w]);return{state:i,disable:m,handleOnChange:y,handleOnSubmit:O}}},881:function(e,t,r){e.exports={signupdiv:"SignUp_signupdiv__9rwqe",formsignup:"SignUp_formsignup___YPss",checkbox:"SignUp_checkbox__YJ75u","form-control":"SignUp_form-control__3bVFx"}},89:function(e,t,r){"use strict";var n=r(72),a=r(78),s=r(80),u=r(79),o=r(0),c=r.n(o),i=r(4),p=r(106),l=r(131),d=["dashboard","adddocument","editdocument","documents","cms","flipbook","photobooth"],m=["signup","signin","verify","reset","forgetpass"];t.a=function(e){var t=function(t){Object(s.a)(o,t);var r=Object(u.a)(o);function o(){return Object(n.a)(this,o),r.apply(this,arguments)}return Object(a.a)(o,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("authUser"));!e&&d.includes(window.location.pathname.split("/")[1])&&this.props.history.push(p.p),e&&m.includes(window.location.pathname.split("/")[1])&&this.props.history.push(p.d),e&&"/"===window.location.pathname&&this.props.history.push(p.d)}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),o}(c.a.Component);return Object(l.a)(i.g)(t)}},91:function(e,t,r){"use strict";var n=r(132),a=r.n(n);t.a=a.a.create({baseURL:"http://3.135.194.11:5000",responseType:"json"})},925:function(e,t,r){"use strict";r.r(t);var n=r(84),a=r.n(n),s=r(85),u=r(72),o=r(78),c=r(80),i=r(79),p=r(0),l=r.n(p),d=r(25),m=r(237),f=r(881),g=r.n(f),h=r(240),b=r(17),v=function(e){var t=Object(h.a)({name:{value:"",error:""},email:{value:"",error:""},password:{value:"",error:""}},{name:{required:!0},email:{required:!0,validator:{regEx:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,error:"Invalid email format."}},password:{required:!0}},e.method),r=t.state,n=t.handleOnChange,a=t.handleOnSubmit,s=t.disable;return l.a.createElement("form",{id:"signup-form",onSubmit:a,className:e.classes.formsignup},l.a.createElement("div",{className:"bg-white rounded box-shadow p-5 h-100 justify-content-center align-items-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign Up")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name",className:"sr-only"},"Name"),l.a.createElement("input",{onChange:n,name:"name",type:"text",id:"name",className:"form-control",placeholder:"Name"}),r.name.error&&l.a.createElement("p",{className:"invalid-feedback"},r.name.error)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email address"),l.a.createElement("input",{onChange:n,name:"email",type:"email",id:"email",className:"form-control",placeholder:"Email address"}),r.email.error&&l.a.createElement("p",{className:"invalid-feedback"},r.email.error)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password",className:"sr-only"},"Password"),l.a.createElement("input",{onChange:n,name:"password",type:"password",id:"password",className:"form-control",placeholder:"Password"}),r.password.error&&l.a.createElement("p",{className:"invalid-feedback"},r.password.error)),l.a.createElement("button",{disabled:!(!e.loading&&!s),className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign up",e.loading?l.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin ml-3"}):null),l.a.createElement("p",{className:"text-center"},l.a.createElement(b.b,{className:"btn",to:"/signin"},"Already have an account?"))))},w=r(89),y=r(26),O=(r(138),r(184),function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).signup=function(){var e=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.signup(t.name.value,t.email.value,t.password.value);case 2:(r=e.sent).success&&(y.store.addNotification({title:"Success",message:r.message,type:"default",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3,onScreen:!0}}),n.props.history.push("/signin")),r.success||y.store.addNotification({title:"Error",message:r.error,type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3,onScreen:!0}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={isMessage:!1,isValid:!0},n}return Object(o.a)(r,[{key:"render",value:function(){return l.a.createElement("div",{className:g.a.signupdiv},l.a.createElement(v,{method:this.signup,loading:this.props.loading,classes:g.a}))}}]),r}(p.Component));t.default=Object(d.b)((function(e){return{loading:e.authReducer.loading,error:e.authReducer.error,message:e.authReducer.message}}),(function(e){return{signup:function(t,r,n){return e(m.f(t,r,n))}}}))(Object(w.a)(O))}}]);
//# sourceMappingURL=21.3b431c69.chunk.js.map