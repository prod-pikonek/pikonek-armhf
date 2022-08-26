(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1096:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(1),a=n.n(r),o=n(1068),c=n(1069),i=n(1093),u=n(1094),f=n(1076),l=n(1077),s=n(1071),p=n(1073),d=n(1072),y=n(1064),m=n(1063),h=n(943),b=n(936),g=n.n(b),v=n(928),w=n.n(v),E=n(939),O=n(944);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var a=k(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(v,e);var t,n,r,b=S(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=b.call(this,e)).getDhcpConfig=function(){t.dhcpService.getAllDhcpConfig().then((function(e){t.setState({data:e.response.dhcp_config})}))},t.validateUrl=function(e){return!!new RegExp("((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))","i").test(e)},t.routerService=new h.a,t.dhcpService=new O.a,t.state={data:{},walled_garden:""},t}return t=v,(n=[{key:"componentDidMount",value:function(){this.getDhcpConfig()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data;return t.walled_garden,a.a.createElement(E.e,{enableReinitialize:!0,initialValues:{data:n},onSubmit:function(t,n){n.setSubmitting,g.a.fire({title:"Walled Garden",text:"Are you sure you want to update sites?",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:function(){return e.dhcpService.updateDhcpConfig(t.data).then((function(e){return e})).catch((function(e){g.a.fire("Success","Successfully updated sites.","success")}))},allowOutsideClick:function(){return!g.a.isLoading()}}).then((function(e){e.isConfirmed&&g.a.fire({title:"Success",text:e.value.message,icon:e.value.error?"error":"success"})}))}},(function(t){t.handleChange;var n=t.values;return t.isValid,t.errors,t.setFieldValue,t.setFieldError,t.setFieldTouched,a.a.createElement(o.a,null,a.a.createElement(c.a,null,a.a.createElement(i.a,null,a.a.createElement(u.a,{lg:12},a.a.createElement(E.d,null,a.a.createElement(f.a,null,a.a.createElement(l.a,null,"Add URL"),a.a.createElement(s.a,{className:"mb-8"},a.a.createElement(p.a,{placeholder:"Add a site like www.example.com, or example.com",onChange:function(t){return e.setState({walled_garden:t.target.value})}}),a.a.createElement(d.a,{addonType:"append"},a.a.createElement(y.a,{color:"success",onClick:function(t){return e.setState((function(){var t=!0;return e.validateUrl(e.state.walled_garden)&&(t=!1,n.data.ipset.push(e.state.walled_garden)),{error:t,data:n.data}}))}},"Add"))),a.a.createElement("br",null),e.state.error?a.a.createElement(m.a,{color:"danger"},"Invalid url"):"",a.a.createElement("h6",null,"Sites"),w.a.isEmpty(n.data.ipset)?a.a.createElement(m.a,null,"You have no sites."):n.data.ipset.map((function(t,r){return a.a.createElement(s.a,{className:"mb-2",key:r},a.a.createElement(p.a,{disabled:!0,placeholder:t}),a.a.createElement(d.a,{addonType:"append"},a.a.createElement(y.a,{color:"danger",onClick:function(t){return e.setState((function(e){return n.data.ipset.splice(r,1),{data:n.data}}))}},a.a.createElement("i",{className:"fa fa-trash"}))))}))),a.a.createElement(y.a,{color:"primary",className:"px-4 text-right",type:"submit"},"Update"))))))}))}}])&&C(t.prototype,n),r&&C(t,r),Object.defineProperty(t,"prototype",{writable:!1}),v}(r.Component)},150:function(e,t,n){"use strict";t.a=function(e,t){}},944:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(186),a=(n(187),n(938)),o=n(928),c=n.n(o);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"getDhcpConfig",value:function(e){return new Promise((function(t,n){r.a.http({url:a.a.DHCP_CONFIG_URL+"/"+e}).GET.then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}},{key:"removeFromDHCP",value:function(e,t){return new Promise((function(n,o){r.a.http({url:a.a.DHCP_CONFIG_URL}).GET.then((function(r){var a=r.data.response.dhcp_config,o=Object.assign({},a),i=c.a.findIndex(a.dhcp_range,{interface:e}),u=c.a.findIndex(a.dhcp_option,{interface:e}),f=c.a.findIndex(a.interface,{name:e}),l=c.a.findIndex(a.hosts,{ip:t});-1!==l&&o.hosts.splice(l,1),-1!==f&&o.interface.splice(f,1),-1!==u&&o.dhcp_option.splice(u,1),-1!==i&&o.dhcp_range.splice(i,1),n(o)})).catch((function(e){o(e)}))}))}},{key:"getAllDhcpConfig",value:function(){return new Promise((function(e,t){r.a.http({url:a.a.DHCP_CONFIG_URL}).GET.then((function(t){e(t.data)})).catch((function(e){t(e)}))}))}},{key:"updateDhcpConfig",value:function(e){return new Promise((function(t,n){r.a.http({url:a.a.DHCP_CONFIG_URL,data:e}).POST.then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}])&&i(t.prototype,n),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},946:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,c="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,u,f,l=r(t),s=r(n);if(l&&s){if((u=t.length)!=n.length)return!1;for(i=u;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(l!=s)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var y=t instanceof RegExp,m=n instanceof RegExp;if(y!=m)return!1;if(y&&m)return t.toString()==n.toString();var h=a(t);if((u=h.length)!==a(n).length)return!1;for(i=u;0!=i--;)if(!o.call(n,h[i]))return!1;if(c&&t instanceof Element&&n instanceof Element)return t===n;for(i=u;0!=i--;)if(!("_owner"===(f=h[i])&&t.$$typeof||e(t[f],n[f])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},947:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===a}(e)}(e)};var a="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function c(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function i(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||c,n.isMergeableObject=n.isMergeableObject||r;var a=Array.isArray(t);return a===Array.isArray(e)?a?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=o(e[t],n)})),Object.keys(t).forEach((function(a){n.isMergeableObject(t[a])&&e[a]?r[a]=i(e[a],t[a],n):r[a]=o(t[a],n)})),r}(e,t,n):o(t,n)}i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return i(e,n,t)}),{})};var u=i;t.a=u}}]);