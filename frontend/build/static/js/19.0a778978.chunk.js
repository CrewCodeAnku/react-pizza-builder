(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[19],{237:function(e,t,r){"use strict";r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"e",(function(){return l})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"c",(function(){return h})),r.d(t,"a",(function(){return g}));var n=r(84),a=r.n(n),s=r(85),o=r(3),u=r(72),c=r(91),i=function e(){Object(u.a)(this,e),this.login=function(e,t){var r={email:e,password:t};return c.a.post("/login",r)},this.signup=function(e,t,r){var n={name:e,email:t,password:r};return c.a.post("/signup",n,{headers:{Url:"http://3.135.194.11:5000"}})},this.verify=function(e,t){var r={email:e,token:t};return c.a.post("/verifyemail",r)},this.forgetPass=function(e){var t={email:e};return c.a.post("/forgetpassword",t,{headers:{Url:"http://3.135.194.11:5000"}})},this.resetPass=function(e,t){var r={password:e,token:t};return c.a.post("/resetpassword",r,{headers:{Url:"http://3.135.194.11:5000"}})},this.updateProfile=function(e){var t={Authorization:JSON.parse(localStorage.getItem("authUser")).token},r={name:e};return c.a.post("/updateprofile",r,{headers:t})},this.changePassword=function(e,t){var r=JSON.parse(localStorage.getItem("authUser"));console.log("Auth",r);var n={Authorization:r.token},a={oldpassword:e,password:t,userid:r.userId};return c.a.post("/changepassword",a,{headers:n})},this.getProfile=function(){var e={Authorization:JSON.parse(localStorage.getItem("authUser")).token};return c.a.get("/profile",{headers:e})}},p=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,u,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=function(e,t,r){return n({type:o.l,idToken:e,userId:t,message:r}),{success:!0,message:r}},s=function(e){return n({type:o.j,message:e}),{success:!1,error:e}},r.prev=2,n({type:o.k}),c=new i,r.next=7,c.login(e,t).then((function(e){if(console.log("Response",e),e.data.success){var t={token:e.data.token,userid:e.data.userid};return localStorage.setItem("authUser",JSON.stringify(t)),u(e.data.token,e.data.userid,e.data.message)}return s(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n,s,u,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(e){return r({type:o.f,message:e,loading:!1}),{success:!0,message:e}},n=function(e){return r({type:o.d,message:e,loading:!1}),{success:!1,error:e}},t.prev=2,r({type:o.e}),u=new i,t.next=7,u.forgetPass(e).then((function(e){return s(e.data.message)}));case 7:return c=t.sent,t.abrupt("return",c);case 11:if(t.prev=11,t.t0=t.catch(2),!t.t0.response){t.next=17;break}return t.abrupt("return",n(t.t0.response.data.message));case 17:return t.abrupt("return",n("Something went wrong!"));case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,u,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=function(e){return n({type:o.o,message:e,loading:!1}),{success:!0,message:e}},s=function(e){return n({type:o.m,message:e,loading:!1}),{success:!1,error:e}},r.prev=2,n({type:o.n}),c=new i,r.next=7,c.resetPass(e,t).then((function(e){return u(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,u,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=function(e){return n({type:o.x,message:e,loading:!1}),{success:!0,message:e}},s=function(e){return n({type:o.v,message:e,loading:!1}),{success:!1,error:e}},r.prev=2,n({type:o.w}),c=new i,r.next=7,c.verify(e,t).then((function(e){return u(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()},m=function(e,t,r){return function(){var n=Object(s.a)(a.a.mark((function n(s){var u,c,p,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(e){return s({type:o.r,message:e,loading:!1}),{success:!0,message:e}},u=function(e){return s({type:o.p,message:e,loading:!1}),{success:!1,error:e}},n.prev=2,s({type:o.q}),p=new i,n.next=7,p.signup(e,t,r).then((function(e){return c(e.data.message)}));case 7:return d=n.sent,n.abrupt("return",d);case 11:if(n.prev=11,n.t0=n.catch(2),!n.t0.response){n.next=17;break}return n.abrupt("return",u(n.t0.response.data.data&&n.t0.response.data.data.length>0?n.t0.response.data.data[0].msg:n.t0.response.data.message));case 17:return n.abrupt("return",u("Something went wrong!"));case 18:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()},h=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var r,n,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e,r){return t({type:o.i,message:e,profiledata:r}),{success:!1,error:e}},r=function(e){return t({type:o.g,message:e}),{success:!1,error:e}},e.prev=2,t({type:o.h}),s=new i,e.next=7,s.getProfile().then((function(e){return e.data.success?n(e.data.message,e.data.data):r(e.data.message)}));case 7:return u=e.sent,e.abrupt("return",u);case 11:if(e.prev=11,e.t0=e.catch(2),!e.t0.response){e.next=17;break}return e.abrupt("return",r(e.t0.response.data.data&&e.t0.response.data.data.length>0?e.t0.response.data.data[0].msg:e.t0.response.data.message));case 17:return e.abrupt("return",r("Something went wrong!"));case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s,u,c,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=function(e){return n({type:o.c,message:e}),{success:!0,message:e}},s=function(e){return n({type:o.a,message:e}),{success:!1,error:e}},r.prev=2,n({type:o.b}),c=new i,r.next=7,c.changePassword(e,t).then((function(e){return e.data.success?u(e.data.message):s(e.data.message)}));case 7:return p=r.sent,r.abrupt("return",p);case 11:if(r.prev=11,r.t0=r.catch(2),!r.t0.response){r.next=17;break}return r.abrupt("return",s(r.t0.response.data.data&&r.t0.response.data.data.length>0?r.t0.response.data.data[0].msg:r.t0.response.data.message));case 17:return r.abrupt("return",s("Something went wrong!"));case 18:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()}},240:function(e,t,r){"use strict";var n=r(27),a=r(1),s=r(185),o=r(0);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,u=Object(o.useState)(e),c=Object(s.a)(u,2),i=c[0],p=c[1],d=Object(o.useState)(!0),l=Object(s.a)(d,2),f=l[0],m=l[1],h=Object(o.useState)(!1),g=Object(s.a)(h,2),b=g[0],v=g[1],w=Object(o.useCallback)((function(){return Object.keys(t).some((function(e){var r=t[e].required,n=i[e].value,a=i[e].error;return r&&!n||a}))}),[i,t]);Object(o.useEffect)((function(){m(!0)}),[]),Object(o.useEffect)((function(){b&&m(w())}),[i,b,w]);var y=Object(o.useCallback)((function(e){v(!0);var r=e.target.name,s=e.target.value,o="";t[r].required&&(s||(o="This is required field.")),null!==t[r].validator&&"object"===typeof t[r].validator&&s&&!t[r].validator.regEx.test(s)&&(o=t[r].validator.error),p((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({},r,{value:s,error:o}))}))}),[t]),O=Object(o.useCallback)((function(e){e.preventDefault(),w()||r(i)}),[i,r,w]);return{state:i,disable:f,handleOnChange:y,handleOnSubmit:O}}},883:function(e,t,r){e.exports={resetdiv:"ResetPass_resetdiv__3l5s-",formreset:"ResetPass_formreset__1iFFW",checkbox:"ResetPass_checkbox__2ahSh","form-control":"ResetPass_form-control__2qBrJ"}},89:function(e,t,r){"use strict";var n=r(72),a=r(78),s=r(80),o=r(79),u=r(0),c=r.n(u),i=r(4),p=r(106),d=r(131),l=["dashboard","adddocument","editdocument","documents","cms","flipbook","photobooth"],f=["signup","signin","verify","reset","forgetpass"];t.a=function(e){var t=function(t){Object(s.a)(u,t);var r=Object(o.a)(u);function u(){return Object(n.a)(this,u),r.apply(this,arguments)}return Object(a.a)(u,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("authUser"));!e&&l.includes(window.location.pathname.split("/")[1])&&this.props.history.push(p.p),e&&f.includes(window.location.pathname.split("/")[1])&&this.props.history.push(p.d),e&&"/"===window.location.pathname&&this.props.history.push(p.d)}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),u}(c.a.Component);return Object(d.a)(i.g)(t)}},91:function(e,t,r){"use strict";var n=r(132),a=r.n(n);t.a=a.a.create({baseURL:"http://3.135.194.11:5000",responseType:"json"})},926:function(e,t,r){"use strict";r.r(t);var n=r(84),a=r.n(n),s=r(85),o=r(72),u=r(78),c=r(80),i=r(79),p=r(0),d=r.n(p),l=r(25),f=r(237),m=r(883),h=r.n(m),g=r(240),b=r(17),v=function(e){var t=Object(g.a)({password:{value:"",error:""},confirmpassword:{value:"",error:""}},{password:{required:!0},confirmpassword:{required:!0}},e.method),r=t.state,n=t.handleOnChange,a=t.handleOnSubmit,s=t.disable;return d.a.createElement("form",{id:"reset-form",onSubmit:a,className:e.classes.formreset},d.a.createElement("div",{className:"bg-white rounded box-shadow p-5 h-100 justify-content-center align-items-center"},d.a.createElement("div",{className:"text-center"},d.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Reset Password")),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Password"),d.a.createElement("input",{onChange:n,type:"password",id:"password",className:"form-control",name:"password",placeholder:"Password"}),r.password.error&&d.a.createElement("p",{className:"invalid-feedback"},r.password.error)),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"confirmpassword",className:"sr-only"},"Confirm Password"),d.a.createElement("input",{onChange:n,type:"password",id:"confirmpassword",className:"form-control",name:"confirmpassword",placeholder:"Confirm Password"}),r.confirmpassword.error&&d.a.createElement("p",{className:"invalid-feedback"},r.confirmpassword.error)),d.a.createElement("button",{disabled:!(!e.loading&&!s),className:"btn btn-lg btn-primary btn-block",type:"submit"},"Reset Password",e.loading?d.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin ml-3"}):null),d.a.createElement("p",{className:"text-center"},d.a.createElement(b.b,{className:"btn",to:"/signin"},"Back to login"))))},w=r(89),y=r(26),O=(r(138),r(184),function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).resetpass=function(){var e=Object(s.a)(a.a.mark((function e(t){var r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props.match.params.token,e.next=3,n.props.resetpass(t.password.value,r);case 3:(s=e.sent).success&&y.store.addNotification({title:"Success",message:s.message,type:"default",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3,onScreen:!0}}),s.success||y.store.addNotification({title:"Error",message:s.error,type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3,onScreen:!0}});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={isMessage:!1,isValid:!0},n}return Object(u.a)(r,[{key:"render",value:function(){return d.a.createElement("div",{className:h.a.resetdiv},d.a.createElement(v,{method:this.resetpass,loading:this.props.loading,classes:h.a}))}}]),r}(p.Component));t.default=Object(l.b)((function(e){return{loading:e.authReducer.loading,error:e.authReducer.error,message:e.authReducer.message}}),(function(e){return{resetpass:function(t,r){return e(f.e(t,r))}}}))(Object(w.a)(O))}}]);
//# sourceMappingURL=19.0a778978.chunk.js.map