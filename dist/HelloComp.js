!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lib=t():e.lib=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function o(e,t,n,o,r,i,s,u){var c,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=c):r&&(c=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(f.functional){f._injectStyles=c;var a=f.render;f.render=function(e,t){return c.call(t),a(e,t)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:f}}n.d(t,"a",function(){return o})},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("YOOOOOO In HelloComponent")]),this._v(" "),t("h1",[this._v("Hello "+this._s(this.name)+"!")]),this._v(" "),this._m(0)])};o._withStripped=!0;var r={props:{name:{type:String,required:!0}},data:()=>({})},i=(n(9),n(0)),s=Object(i.a)(r,o,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wave"},[this._v("div Is here "),t("h2",[this._v("in side h2")])])}],!1,null,"7a2a932f",null);s.options.__file="src/components/HelloComponent/HelloComponent.vue";t.default=s.exports},,,,function(e,t,n){"use strict";var o=n(1);n.n(o).a}])});