(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1080:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(802),c=n(928),i=n.n(c),l=n(943);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var t,n,r,c=p(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).loading=function(){return a.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.checkFreshInstall=function(e){if(!!i.a.has(e.response.core,"fresh_install")&&e.response.core.fresh_install)return window.location.href="#/configure"},t.getMachineDetails=function(){t.routerService.getMachineDetails().then((function(e){e&&t.setState({fetching:!0,memory:e.response.memory,cpu:e.response.cpu,disk:e.response.disk},(function(){return t.checkFreshInstall(e)}))})).catch((function(e){console.error(e)}))},t.routerService=new l.a,t.state={dropdownOpen:!1,radioSelected:2,memory:{},cpu:{},disk:{},fetching:!1},t}return t=s,(n=[{key:"componentDidMount",value:function(){this.getMachineDetails()}},{key:"render",value:function(){return a.a.createElement("div",{className:"animated fadeIn"},this.state.fetching?a.a.createElement(o.y,null,a.a.createElement(o.g,{xs:"12",sm:"6",lg:"3"},a.a.createElement(o.e,{className:"text-white bg-info"},a.a.createElement(o.f,{className:"pb-0"},a.a.createElement("div",{className:"text-value"},"CPU Usage"),a.a.createElement("div",null,Math.floor(this.state.cpu.cpupercentage)+"%","/100%")),a.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}}))),a.a.createElement(o.g,{xs:"12",sm:"6",lg:"3"},a.a.createElement(o.e,{className:"text-white bg-primary"},a.a.createElement(o.f,{className:"pb-0"},a.a.createElement("div",{className:"text-value"},"Memory Usage"),a.a.createElement("div",null,this.state.memory.used,"/",this.state.memory.total)),a.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}}))),a.a.createElement(o.g,{xs:"12",sm:"6",lg:"3"},a.a.createElement(o.e,{className:"text-white bg-warning"},a.a.createElement(o.f,{className:"pb-0"},a.a.createElement("div",{className:"text-value"},"SSD Usage"),a.a.createElement("div",null,this.state.disk.used,"/",this.state.disk.total)),a.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}})))):a.a.createElement(o.y,null,a.a.createElement(o.g,null,a.a.createElement("h1",null,"Fetching data. Please wait..."))))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component);t.default=y}}]);