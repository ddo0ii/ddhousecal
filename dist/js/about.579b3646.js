(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0231":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c975"),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fb6a"),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("acd8"),core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__["a"]={name:"HelloWorld",data:function(){return{drawer:null,drawerRight:null,right:!1,left:!1,items:[{title:"General Calculator",icon:"mdi-view-dashboard",to:{path:"/"}},{title:"Scientific Calculator",icon:"mdi-image",to:{path:"/science"}},{title:"Others",icon:"mdi-help-box"}],previous:null,current:"",operator:null,operatorClicked:!1}},methods:{clear:function(){this.current=""},sign:function(){this.current="-"===this.current.charAt(0)?this.current.slice(1):"-".concat(this.current)},append:function(t){this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current="".concat(this.current).concat(t)},dot:function(){-1===this.current.indexOf(".")&&this.append(".")},setPrevious:function(){this.previous=this.current},percent:function(){this.current="".concat(parseFloat(this.current)/100)},equal:function equal(){this.current=eval(this.current),this.previous=null},pequal:function(){this.current="".concat(this.operator(parseFloat(this.current),parseFloat(this.previous)))},piyo:function(){this.operator=function(t){return Math.PI*t},this.setPrevious(),this.equal()},rad:function(){this.operator=function(t){return 180*t/Math.PI},this.setPrevious(),this.pequal()},xdivide:function(){this.operator=function(t){return 1/t},this.setPrevious(),this.pequal()},xtpow:function(){this.operator=function(t){return Math.pow(t,2)},this.setPrevious(),this.pequal()},xypow:function(){this.operator=function(t,i){return Math.pow(i,t)},this.setPrevious()},abs:function(){this.operator=function(t){return Math.abs(t)},this.setPrevious(),this.pequal()},juste:function(){this.operator=function(t){return t*Math.E},this.setPrevious(),this.pequal()}}}},"25d0":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{attrs:{id:"inspire"}},[e("v-card",[e("v-app-bar",{attrs:{app:"app",color:"white",flat:"flat"}},[e("v-app-bar-nav-icon",{on:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Calculator")]),e("v-spacer"),e("v-btn",{attrs:{icon:"icon"}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1),e("v-navigation-drawer",{attrs:{app:"app"},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",{attrs:{flat:"flat"}},[e("v-list-item",{on:{click:function(i){i.stopPropagation(),t.left=!t.left}}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" Calculator ")]),e("v-list-item-subtitle",[t._v(" subtext ")])],1)],1),e("v-divider"),t._l(t.items,(function(i){return e("v-list-item",{key:i.title,attrs:{link:"link"}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(i.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(i.title))])],1)],1)}))],2)],1),e("v-content",[e("v-divider"),e("v-container"),e("v-container",[e("v-layout",{attrs:{column:"column",row:"row"}},[e("div",{staticClass:"calculator"},[e("div"),e("div",{staticClass:"display"},[e("p",{staticClass:"text-end"},[t._v(" "+t._s(t.current||"0")+" ")])]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.clear}},[t._v("C")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.clear}},[t._v("rad")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.sqrt(")}}},[t._v("root")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("(")}}},[t._v("(")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){t.append(")")}}},[t._v(")")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.percent}},[t._v("%")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("/")}}},[t._v("÷")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.sin(")}}},[t._v("sin")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.cos(")}}},[t._v("cos")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.tan(")}}},[t._v("tan")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("7")}}},[t._v("7")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("8")}}},[t._v("8")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("9")}}},[t._v("9")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("*")}}},[t._v("x")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.log(")}}},[t._v("ln")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.log10(")}}},[t._v("log")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.xdivide}},[t._v("1/x")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("4")}}},[t._v("4")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("5")}}},[t._v("5")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("6")}}},[t._v("6")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("-")}}},[t._v("-")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("Math.exp(")}}},[t._v("e^x")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("xtpow")}}},[t._v("x^2")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("xypow")}}},[t._v("x^y")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("1")}}},[t._v("1")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("2")}}},[t._v("2")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("3")}}},[t._v("3")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("+")}}},[t._v("+")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.abs}},[t._v("|x|")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.piyo}},[t._v("PI")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.juste}},[t._v("e")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.sign}},[t._v("+/-")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:function(i){return t.append("0")}}},[t._v("0")]),e("v-btn",{staticClass:"btn",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.dot}},[t._v(".")]),e("v-btn",{staticClass:"btn operator",attrs:{"min-height":"60",tile:"tile",color:"white"},on:{click:t.equal}},[t._v("=")])],1)])],1)],1)],1)],1)},r=[],a=e("0231"),o=a["a"],c=(e("c078"),e("2877")),s=e("6544"),l=e.n(s),_=e("7496"),u=e("40dc"),h=e("5bc1"),p=e("8336"),v=e("b0af"),b=e("a523"),d=e("a75b"),f=e("ce7e"),m=e("132d"),w=e("a722"),C=e("8860"),k=e("da13"),g=e("5d23"),E=e("34c3"),M=e("f774"),P=e("2fa4"),O=e("2a7f"),D=Object(c["a"])(o,n,r,!1,null,"785cd698",null);i["default"]=D.exports;l()(D,{VApp:_["a"],VAppBar:u["a"],VAppBarNavIcon:h["a"],VBtn:p["a"],VCard:v["a"],VContainer:b["a"],VContent:d["a"],VDivider:f["a"],VIcon:m["a"],VLayout:w["a"],VList:C["a"],VListItem:k["a"],VListItemContent:g["a"],VListItemIcon:E["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:M["a"],VSpacer:P["a"],VToolbarTitle:O["a"]})},ac1d:function(t,i,e){},c078:function(t,i,e){"use strict";var n=e("ac1d"),r=e.n(n);r.a}}]);
//# sourceMappingURL=about.579b3646.js.map