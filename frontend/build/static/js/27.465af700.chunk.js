(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[27],{239:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"h",(function(){return h})),a.d(t,"g",(function(){return g})),a.d(t,"f",(function(){return v}));var r=a(84),n=a.n(r),s=a(85),o=a(5),c=a(72),i=a(91),u=function e(){Object(c.a)(this,e),this.updateProfile=function(e,t){var a=JSON.parse(localStorage.getItem("authUser")),r={Authorization:a.token},n={userid:a.userid,name:t};return i.a.post("/updateprofile",n,{headers:r})},this.editDocument=function(e,t,a,r,n){var s={Authorization:JSON.parse(localStorage.getItem("authUser")).token},o=new FormData;return o.append("documentname",t),o.append("documenttype",a),o.append("document",r),o.append("theme",n),i.a.put("/document/".concat(e),o,{headers:s})},this.addDocument=function(e,t,a,r){var n=JSON.parse(localStorage.getItem("authUser")),s={Authorization:n.token},o=new FormData;return a.forEach((function(e){o.append("document",e)})),o.append("userid",n.userid),o.append("documentname",e),o.append("documenttype",t),o.append("theme",r),i.a.post("/document",o,{headers:s})},this.getDocument=function(){console.log("Documents service");var e={Authorization:JSON.parse(localStorage.getItem("authUser")).token};return i.a.get("/documents",{headers:e})},this.getDocumentById=function(e){var t={Authorization:JSON.parse(localStorage.getItem("authUser")).token};return i.a.get("/getdocumentbyid/".concat(e),{headers:t})},this.deleteDocument=function(e){var t={Authorization:JSON.parse(localStorage.getItem("authUser")).token};return i.a.delete("/document/".concat(e),{headers:t})},this.updateDocImage=function(e,t){console.log("Doc",t);var a={Authorization:JSON.parse(localStorage.getItem("authUser")).token},r=new FormData;return t.forEach((function(e){r.append("document",e)})),r.append("documentid",e),i.a.post("/updatedocimage/".concat(e),r,{headers:a})},this.updateBackground=function(e,t){var a={Authorization:JSON.parse(localStorage.getItem("authUser")).token},r={documentid:e,color:t};return i.a.post("/updatebackground/".concat(e),r,{headers:a})}},l=function(e,t,a,r){return function(){var c=Object(s.a)(n.a.mark((function s(c){var i,l,m,p;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=function(e){return c({type:o.c,message:e}),{success:!0,message:e}},i=function(e){return c({type:o.a,message:e}),{success:!1,error:e}},n.prev=2,c({type:o.b}),m=new u,n.next=7,m.addDocument(e,t,a,r).then((function(e){return e.data.success?l(e.data.message):i(e.data.message)}));case 7:return p=n.sent,n.abrupt("return",p);case 11:if(n.prev=11,n.t0=n.catch(2),!n.t0.response){n.next=17;break}return n.abrupt("return",i(n.t0.response.data.message));case 17:return n.abrupt("return",i("Something went wrong!"));case 18:case"end":return n.stop()}}),s,null,[[2,11]])})));return function(e){return c.apply(this,arguments)}}()},m=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e,a){return t({type:o.r,message:e,documents:a}),{success:!0,message:e}},a=function(e){return t({type:o.p,message:e}),{success:!1,error:e}},e.prev=2,t({type:o.q}),s=new u,e.next=7,s.getDocument().then((function(e){return e.data.success?r(e.data.message,e.data.data):a(e.data.message)}));case 7:return c=e.sent,e.abrupt("return",c);case 11:if(e.prev=11,e.t0=e.catch(2),!e.t0.response){e.next=17;break}return e.abrupt("return",a(e.t0.response.data.message));case 17:return e.abrupt("return",a("Something went wrong!"));case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(e,t){return a({type:o.o,message:e,documentdetail:t}),{success:!0,message:e}},r=function(e){return a({type:o.m,message:e}),{success:!1,error:e}},t.prev=2,a({type:o.n}),c=new u,t.next=7,c.getDocumentById(e).then((function(e){return e.data.success?s(e.data.message,e.data.data):r(e.data.message)}));case 7:return i=t.sent,t.abrupt("return",i);case 11:if(t.prev=11,t.t0=t.catch(2),!t.t0.response){t.next=17;break}return t.abrupt("return",r(t.t0.response.data.message));case 17:return t.abrupt("return",r("Something went wrong!"));case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(e){return a({type:o.f,message:e}),{success:!0,message:e}},r=function(e){return a({type:o.d,message:e}),{success:!1,error:e}},t.prev=2,a({type:o.e}),c=new u,t.next=7,c.deleteDocument(e).then((function(e){return e.data.success?s(e.data.message):r(e.data.message)}));case 7:return i=t.sent,t.abrupt("return",i);case 11:if(t.prev=11,t.t0=t.catch(2),!t.t0.response){t.next=17;break}return t.abrupt("return",r(t.t0.response.data.message));case 17:return t.abrupt("return",r("Something went wrong!"));case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t,a,r,c){return function(){var i=Object(s.a)(n.a.mark((function s(i){var l,m,p,d;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m=function(e){return i({type:o.i,message:e}),{success:!0,message:e}},l=function(e){return i({type:o.g,message:e}),{success:!1,error:e}},n.prev=2,i({type:o.h}),p=new u,n.next=7,p.editDocument(e,t,a,r,c).then((function(e){return e.data.success?m(e.data.message):l(e.data.message)}));case 7:return d=n.sent,n.abrupt("return",d);case 11:if(n.prev=11,n.t0=n.catch(2),!n.t0.response){n.next=17;break}return n.abrupt("return",l(n.t0.response.data.message));case 17:return n.abrupt("return",l("Something went wrong!"));case 18:case"end":return n.stop()}}),s,null,[[2,11]])})));return function(e){return i.apply(this,arguments)}}()},h=function(e,t){return function(){var a=Object(s.a)(n.a.mark((function a(r){var s,c,i,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=function(e){return r({type:o.y,message:e}),{success:!0,message:e}},s=function(e){return r({type:o.w,message:e}),{success:!1,error:e}},a.prev=2,r({type:o.x}),i=new u,a.next=7,i.updateDocImage(e,t).then((function(e){return e.data.success?c(e.data.message):s(e.data.message)}));case 7:return l=a.sent,a.abrupt("return",l);case 11:if(a.prev=11,a.t0=a.catch(2),console.log("Error",a.t0),!a.t0.response){a.next=18;break}return a.abrupt("return",s(a.t0.response.data.message));case 18:return a.abrupt("return",s("Something went wrong!"));case 19:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(e){return a.apply(this,arguments)}}()},g=function(e,t){return function(){var a=Object(s.a)(n.a.mark((function a(r){var s,c,i,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=function(e){return r({type:o.v,message:e}),{success:!0,message:e}},s=function(e){return r({type:o.t,message:e}),{success:!1,error:e}},a.prev=2,r({type:o.u}),i=new u,a.next=7,i.updateBackground(e,t).then((function(e){return e.data.success?c(e.data.message):s(e.data.message)}));case 7:return l=a.sent,a.abrupt("return",l);case 11:if(a.prev=11,a.t0=a.catch(2),!a.t0.response){a.next=17;break}return a.abrupt("return",s(a.t0.response.data.message));case 17:return a.abrupt("return",s("Something went wrong!"));case 18:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(e){return a.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:o.s,backimage:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},89:function(e,t,a){"use strict";var r=a(72),n=a(78),s=a(80),o=a(79),c=a(0),i=a.n(c),u=a(4),l=a(106),m=a(131),p=["dashboard","adddocument","editdocument","documents","cms","flipbook","photobooth"],d=["signup","signin","verify","reset","forgetpass"];t.a=function(e){var t=function(t){Object(s.a)(c,t);var a=Object(o.a)(c);function c(){return Object(r.a)(this,c),a.apply(this,arguments)}return Object(n.a)(c,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("authUser"));!e&&p.includes(window.location.pathname.split("/")[1])&&this.props.history.push(l.p),e&&d.includes(window.location.pathname.split("/")[1])&&this.props.history.push(l.d),e&&"/"===window.location.pathname&&this.props.history.push(l.d)}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),c}(i.a.Component);return Object(m.a)(u.g)(t)}},91:function(e,t,a){"use strict";var r=a(132),n=a.n(r);t.a=n.a.create({baseURL:"http://3.135.194.11:5000",responseType:"json"})},913:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(27),s=a(84),o=a.n(s),c=a(85),i=a(72),u=a(78),l=a(186),m=a(80),p=a(79),d=a(0),f=a.n(d),h=a(25),g=a(239),v=a(89),b=a(26),w=(a(138),a(184),a(363)),y=a(364),k=a.n(y),O=(a(360),a(365)),S=a.n(O),E=a(366),x=a.n(E),N=a(367),j=a.n(N);a(368);Object(w.registerPlugin)(x.a,S.a,k.a,j.a);var D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).addDocument=Object(c.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(l.a)(r),(a=r.validateField())?r.setState({isValid:!1}):r.setState({isValid:!0}),a){e.next=9;break}return e.next=6,r.props.adddocument(r.state.title,r.state.description,r.state.document,r.state.theme);case 6:(n=e.sent).success&&(b.store.addNotification({title:"Success",message:n.message,type:"default",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3,onScreen:!0}}),setTimeout((function(){t.props.history.push("/dashboard")}),1e3)),n.success||b.store.addNotification({title:"Error",message:n.error,type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3,onScreen:!0}});case 9:case"end":return e.stop()}}),e)}))),r.validateField=function(){var e=!1;if(r.state.errors)for(var t in r.state.errors)r.state.errors[t]&&(e=!0);else e=!0;return e},r.inputChangeHandler=function(e){var t={title:r.state.errors.title,description:r.state.errors.description,image:r.state.errors.image};switch(e.target.name){case"title":t.title=""===e.target.value||e.target.value.length<5?"Title must be of atleast 5 character":"";break;case"description":t.description=""===e.target.value?"Please enter document type":"";break;case"document":t.image=""===e.target.value?"Please select document":""}"document"===e.target.name?r.setState(Object(n.a)({errors:t},e.target.name,[e.target.files[0]])):r.setState(Object(n.a)({errors:t},e.target.name,e.target.value))},r.state={isMessage:!1,isShow:!1,isValid:!0,theme:"white",errors:{title:"Document Title is required",description:"Type is required",image:"Upload required files"}},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"container mb-5 bg-white rounded p-5"},f.a.createElement("div",null,f.a.createElement("div",{className:"form-group"},f.a.createElement("label",{className:"col-sm-5 control-label",htmlFor:"documenttitle"},"Document Title"),f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("input",{onChange:this.inputChangeHandler,name:"title",type:"text",className:"form-control",id:"documenttitle",placeholder:"Document Title"}),this.state.isValid?null:f.a.createElement("p",{className:"invalid-feedback"},this.state.errors&&this.state.errors.title?this.state.errors.title:""))),f.a.createElement("div",{className:"form-group"},f.a.createElement("label",{className:"col-sm-5 control-label",htmlFor:"description"},"Background theme"),f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("div",{className:"form-check"},f.a.createElement("input",{className:"form-check-input",onChange:this.inputChangeHandler,type:"radio",name:"theme",id:"exampleRadios1",value:"white",checked:!0}),f.a.createElement("label",{className:"form-check-label",htmlFor:"exampleRadios1"},"White")),f.a.createElement("div",{className:"form-check"},f.a.createElement("input",{className:"form-check-input",onChange:this.inputChangeHandler,type:"radio",name:"theme",id:"exampleRadios2",value:"black"}),f.a.createElement("label",{className:"form-check-label",htmlFor:"exampleRadios2"},"Black")))),f.a.createElement("div",{className:"form-group"},f.a.createElement("label",{className:"col-sm-5 control-label",htmlFor:"description"},"Document Type"),f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("select",{value:this.state.description,onChange:this.inputChangeHandler,name:"description",id:"description",className:"form-control"},f.a.createElement("option",{value:""},"Select type"),f.a.createElement("option",{value:"pdf"},"Pdf"),f.a.createElement("option",{value:"image"},"Image"),f.a.createElement("option",{value:"video"},"Video"),f.a.createElement("option",{value:"custom"},"Custom")),this.state.isValid?null:f.a.createElement("p",{className:"invalid-feedback"},this.state.errors&&this.state.errors.description?this.state.errors.description:""))),this.state.description?f.a.createElement("div",{className:"form-group"},f.a.createElement("label",{className:"col-sm-5 control-label",htmlFor:"image"},"Upload document"),f.a.createElement("div",{className:"col-sm-12"},"image"===this.state.description?f.a.createElement(w.FilePond,{files:this.state.document,maxFileSize:"2MB",acceptedFileTypes:["image/*"],onupdatefiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},onreorderfiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},allowMultiple:!0,allowReorder:!0,maxFiles:100,name:"files",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}):null,"video"===this.state.description?f.a.createElement(w.FilePond,{files:this.state.document,maxFileSize:"2MB",acceptedFileTypes:["video/*"],onupdatefiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},onreorderfiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},allowMultiple:!0,allowReorder:!0,maxFiles:10,name:"files",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}):null,"pdf"===this.state.description?f.a.createElement(w.FilePond,{files:this.state.document,maxFileSize:"2MB",acceptedFileTypes:"application/pdf",onupdatefiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},onreorderfiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},allowMultiple:!0,allowReorder:!0,maxFiles:1,name:"files",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}):null,"custom"===this.state.description?f.a.createElement(w.FilePond,{files:this.state.document,maxFileSize:"2MB",acceptedFileTypes:["video/*","image/*","application/pdf"],onupdatefiles:function(t){if(console.log("Hello WOrld"),t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},onreorderfiles:function(t){if(t.length>0){var a=Object(r.a)({},e.state.errors);a.image="",e.setState({errors:a,document:t.map((function(e){return e.file}))})}},allowMultiple:!0,allowReorder:!0,name:"files",labelIdle:'Drag & Drop your images, pdf, video or <span class="filepond--label-action">Browse</span>'}):null,this.state.isValid?null:f.a.createElement("p",{className:"invalid-feedback"},this.state.errors&&this.state.errors.image?this.state.errors.image:""))):null,f.a.createElement("div",{className:"form-group mt-5"},f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("button",{onClick:this.addDocument,type:"button",className:"btn btn-primary"},"Add FlipBook ",this.props.loading?f.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin",style:{fontSize:"24px"}}):null)))))}}]),a}(d.Component);t.default=Object(h.b)((function(e){return{loading:e.documentReducer.loading,error:e.documentReducer.error,message:e.documentReducer.message}}),(function(e){return{adddocument:function(t,a,r,n){return e(g.a(t,a,r,n))}}}))(Object(v.a)(D))}}]);
//# sourceMappingURL=27.465af700.chunk.js.map