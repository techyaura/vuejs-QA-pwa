(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15656274"],{c812:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-12 t-int-tags"},[i("div",{staticClass:"page-content page-content-user-profile"},[i("div",{staticClass:"user-profile-widget"},[i("div",{staticClass:"widget widget_social"},[i("h3",{staticClass:"widget_title",staticStyle:{"margin-bottom":"50px"}},[t._v("TAGS")]),t.spinner.status?i("div",[t._m(0)]):t._e(),t._l(t.tags,function(s){return i("div",{key:s.tag,staticClass:"col-sm-6 col-md-4",attrs:{data:s}},[i("router-link",{attrs:{to:{name:"interviewTag",params:{slug:s.slug||s.tag}}}},[i("div",{staticClass:"thumbnail"},[i("div",{staticClass:"caption",staticStyle:{"background-color":"#cccc","text-align":"center"}},[i("h3",[t._v(t._s(t._f("capitalize")(s.tag)))]),i("span",{staticClass:"count"},[t._v("X "+t._s(s.count))]),i("p")])])])],1)})],2),i("br")])])])},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ph-item"},[i("div",{staticClass:"ph-col-12"},[i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})]),i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})]),i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})]),i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})]),i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})]),i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})]),i("div",{staticClass:"ph-row"},[i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"}),i("div",{staticClass:"ph-col-2 big empty"}),i("div",{staticClass:"ph-col-2 big"})])])])}],l=i("1b62"),e={name:"InterviewTag",mixins:[l["b"],l["e"],l["a"]],created:function(){document.title=this.title("Articles Tags")},data:function(){return{tags:[]}},mounted:function(){this.getTags()},methods:{getTags:function(){var t=this;this.$http.get("".concat(this.$BASE_URL,"api/v1/tag/question")).then(function(s){t.tags=s.data.data,t.spinner.status=!1})}}},o=e,p=(i("dda5"),i("2877")),d=Object(p["a"])(o,a,c,!1,null,"19bb16cf",null);s["default"]=d.exports},dda5:function(t,s,i){"use strict";var a=i("e19b"),c=i.n(a);c.a},e19b:function(t,s,i){}}]);