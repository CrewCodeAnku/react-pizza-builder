(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[24],{186:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},72:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},78:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},79:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var u=n(186);function a(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?Object(u.a)(t):e}function i(t){return function(){var e,n=r(t);if(o()){var c=r(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return a(this,e)}}},80:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},919:function(t,e,n){"use strict";n.r(e);var r=n(72),o=n(78),c=n(80),u=n(79),a=n(0),i=n.n(a),f=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={codevalue:""},o}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"d-flex align-items-center flex-column justify-content-center w-100"},i.a.createElement("div",{className:"bg-white rounded box-shadow p-5 h-100 align-items-center w-50 mt-5"},i.a.createElement("label",null,"Paste your code below"),i.a.createElement("textarea",{onChange:function(e){t.setState({codevalue:e.target.value})},id:"w3review",name:"w3review",rows:"4",cols:"50"})),this.state.codevalue?i.a.createElement("div",{className:"bg-white rounded box-shadow p-5 h-100 align-items-center w-100 mt-5"},i.a.createElement("div",{className:"w-100 demodisplay",dangerouslySetInnerHTML:{__html:this.state.codevalue}})):null)}}]),n}(a.Component);e.default=f}}]);
//# sourceMappingURL=24.643a2206.chunk.js.map