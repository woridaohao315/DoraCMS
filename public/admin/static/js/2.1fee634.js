webpackJsonp([2],{101:function(t,a,n){var e=n(6)(n(1138),n(1477),function(t){n(1459)},"data-v-32a5f618",null);t.exports=e.exports},1138:function(t,a,n){Object.defineProperty(a,"__esModule",{value:!0});var e,r=n(1468),i=(e=r)&&e.__esModule?e:{default:e};a.default={name:"Page401",data:function(){return{errGif:i.default+"?"+ +new Date,ewizardClap:"https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",dialogVisible:!1}},methods:{back:function(){this.$route.query.noGoBack?this.$router.push({path:"/dashboard"}):this.$router.go(-1)}}}},1171:function(t,a,n){(t.exports=n(8)(!1)).push([t.i,"\n.errPage-container[data-v-32a5f618] {\n  width: 800px;\n  max-width: 100%;\n  margin: 100px auto;\n}\n.errPage-container .pan-back-btn[data-v-32a5f618] {\n    background: #008489;\n    color: #fff;\n    border: none !important;\n}\n.errPage-container .pan-gif[data-v-32a5f618] {\n    margin: 0 auto;\n    display: block;\n}\n.errPage-container .pan-img[data-v-32a5f618] {\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n}\n.errPage-container .text-jumbo[data-v-32a5f618] {\n    font-size: 60px;\n    font-weight: 700;\n    color: #484848;\n}\n.errPage-container .list-unstyled[data-v-32a5f618] {\n    font-size: 14px;\n}\n.errPage-container .list-unstyled li[data-v-32a5f618] {\n      padding-bottom: 5px;\n}\n.errPage-container .list-unstyled a[data-v-32a5f618] {\n      color: #008489;\n      text-decoration: none;\n}\n.errPage-container .list-unstyled a[data-v-32a5f618]:hover {\n        text-decoration: underline;\n}\n",""])},1459:function(t,a,n){var e=n(1171);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(16)("7547e938",e,!0,{})},1468:function(t,a,n){t.exports=n.p+"/static/img/401.089007e.gif"},1477:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"errPage-container"},[n("el-button",{staticClass:"pan-back-btn",attrs:{icon:"arrow-left"},on:{click:t.back}},[t._v("返回")]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("h1",{staticClass:"text-jumbo text-ginormous"},[t._v("Oops!")]),t._v("\n      gif来源"),n("a",{attrs:{href:"https://zh.airbnb.com/",target:"_blank"}},[t._v("airbnb")]),t._v(" 页面\n      "),n("h2",[t._v("你没有权限去该页面")]),t._v(" "),n("h6",[t._v("如有不满请联系你领导")]),t._v(" "),n("ul",{staticClass:"list-unstyled"},[n("li",[t._v("或者你可以去:")]),t._v(" "),n("li",{staticClass:"link-type"},[n("router-link",{attrs:{to:"/dashboard"}},[t._v("回首页")])],1),t._v(" "),n("li",{staticClass:"link-type"},[n("a",{attrs:{href:"https://www.html-js.cn/"}},[t._v("随便看看")])])])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("img",{attrs:{src:t.errGif,width:"313",height:"428",alt:"Girl has dropped her ice cream."}})])],1),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible,title:"随便看"},on:{"update:visible":function(a){t.dialogVisible=a}}},[n("img",{staticClass:"pan-img",attrs:{src:t.ewizardClap}})])],1)},staticRenderFns:[]}}});