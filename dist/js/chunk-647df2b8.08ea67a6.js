(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-647df2b8"],{"024a":function(t,s,e){"use strict";var i=e("e8f3"),a=e.n(i);a.a},"41df":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-mask t-modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n           Are you sure to delete this record?\n         ")])],2),e("div",{staticClass:"modal-footer"},[t._t("footer",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal",id:"delete"},on:{click:function(s){return t.$emit("action")}}},[t._v("Delete")]),e("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(s){return t.$emit("close")}}},[t._v("Cancel")])])],2)])])])},a=[],n={name:"AppModal",methods:{close:function(){this.$emit("close")}}},o=n,r=(e("5df6"),e("2877")),c=Object(r["a"])(o,i,a,!1,null,"df24f6f0",null);s["a"]=c.exports},"51b6":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-9 t-question-detail",attrs:{itemscope:"",itemtype:"http://schema.org/QAPage"}},[t.spinner.status?e("div",{staticClass:"ph-item"},[t._m(0),t._m(1)]):t._e(),t.spinner.status?t._e():e("article",{staticClass:"question single-question question-type-normal",attrs:{itemscope:"",itemtype:"http://schema.org/Question"}},[e("h2",{staticStyle:{"font-size":"35px"},attrs:{itemprop:"name"}},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.question.name))])]),t.session.isLoggedIn&&t.question.uId===t.session.user._id?e("div",{staticClass:"question-type-main question-type-main-custom1"},[e("router-link",{staticStyle:{color:"black"},attrs:{to:{name:"questionUpdate",params:{slug:t.question.slug}}}},[t._v("EDIT")])],1):t._e(),e("div",{staticClass:"question-inner"},[e("div",[e("div",{staticClass:"clearfix"}),e("span",{staticClass:"question-category"},[e("span",{staticClass:"question-date"},[e("i",{staticClass:"icon-time"}),e("time",{attrs:{itemprop:"dateCreated",datetime:t.question.modifiedAt}},[t._v(t._s("posted "+t.timestamp(t.question)))])]),t._l(t.question.tags,function(s){return e("router-link",{key:s.name,staticClass:"anchor-space",attrs:{itemprop:"keywords",to:{name:"tagQuestion",params:{slug:s.slug}},data:s}},[e("span",{staticClass:"label label-primary"},[t._v(t._s(s.slug||s.name))])])})],2),e("span",{staticClass:"question-view"},[e("i",{staticClass:"icon-user"}),t._v("\n        "+t._s(t.question.views+" views")+"\n      ")]),e("span",{staticStyle:{float:"right"}},[e("AppClap",{attrs:{question:t.question}})],1)]),e("div",{staticClass:"clearfix"}),e("br"),e("hr"),e("div",{staticClass:"question-desc",attrs:{itemprop:"text"},domProps:{innerHTML:t._s(t.updateLandingHtml(t.question.description))}})])])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"ph-row"},[e("div",{staticClass:"ph-col-12"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ph-col-12"},[e("div",{staticClass:"ph-picture"}),e("div",{staticClass:"ph-row"},[e("div",{staticClass:"ph-col-2 big"}),e("div",{staticClass:"ph-col-2 big empty"}),e("div",{staticClass:"ph-col-2 big"}),e("div",{staticClass:"ph-col-2 big empty"}),e("div",{staticClass:"ph-col-2 big"})])])}],n=(e("a481"),e("7f7f"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"t-answer-list"},[t.spinner.status?e("div",{staticClass:"ph-item"},[t._m(0),t._m(1),t._m(2)]):t._e(),!t.spinner.status&&t.answers.length?e("div",{staticClass:"page-content",attrs:{id:"commentlist"}},[e("div",{staticClass:"boxedtitle page-title"},[e("h2",[t._v("\n        Answers (\n        "),e("span",{staticClass:"color"},[t._v(t._s(t.answers.length))]),t._v(" )\n      ")])]),e("ol",{staticClass:"commentlist clearfix"},t._l(t.answers,function(s){return e("li",{key:s._id,staticClass:"comment",attrs:{data:s,itemprop:"suggestedAnswer",itemscope:"",itemtype:"http://schema.org/Answer"}},[e("div",{staticClass:"comment-body comment-body-answered clearfix"},[e("div",{staticClass:"avatar",attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("router-link",{attrs:{to:"/@"+s.user[0].username,title:s.user[0].username}},[e("img",{attrs:{itemprop:"image",width:"60",height:"60",src:"/img/profile/"+s.user[0].avatar}})])],1),t.spinner.status?t._e():e("AppClapAnswer",{attrs:{answer:s}}),e("div",{staticClass:"comment-text"},[e("div",{staticClass:"author clearfix"},[e("div",{staticClass:"comment-author",attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("router-link",{attrs:{to:"/@"+s.user[0].username}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(s.user[0].username))])])],1),e("div",{staticClass:"comment-meta"},[e("div",{staticClass:"date"},[e("i",{staticClass:"icon-time"}),e("time",{attrs:{itemprop:"dateCreated",datetime:s.createdAt}},[t._v(t._s(t.$moment(s.createdAt).fromNow()))])])]),t.session.isLoggedIn&&s.user[0]._id===t.session.user._id?e("a",{staticClass:"question-type-main link-cursor",on:{click:function(e){return t.showModal(s)}}},[t._v("DELETE")]):t._e(),t.session.isLoggedIn&&s.user[0]._id===t.session.user._id?e("a",{staticClass:"question-report",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.updateAnswer(s)}}},[t._v("Edit")]):t._e(),e("AppModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal,action:t.trigger}},[e("span",{attrs:{slot:"body"},slot:"body"},[t._v("Are you sure to delete this answer?")])])],1),e("div",{staticClass:"text"},[e("p",{staticClass:"post-content",attrs:{itemprop:"text"},domProps:{innerHTML:t._s(s.name)}})])])],1)])}),0)]):t._e()])}),o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ph-col-2"},[e("div",{staticClass:"ph-avatar"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"ph-row"},[e("div",{staticClass:"ph-col-4"}),e("div",{staticClass:"ph-col-8 empty"}),e("div",{staticClass:"ph-col-6"}),e("div",{staticClass:"ph-col-6 empty"}),e("div",{staticClass:"ph-col-2"}),e("div",{staticClass:"ph-col-10 empty"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ph-col-12"},[e("div",{staticClass:"ph-picture"})])}],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.answer.points>=0?e("span",{staticClass:"question-favorite t-clap-answer"},[e("a",{attrs:{href:"javascript:void(0);",title:"appreciate, if you like it!"},on:{click:function(s){return t.clap()}}},[e("span",[e("svg",{staticClass:"svg-inline--fa fa-heart fa-w-16",staticStyle:{height:"10px"},attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}})])]),e("span",{staticStyle:{"padding-left":"2px"},attrs:{itemprop:"upvoteCount"}},[t._v(t._s(t.votes()))])])]):t._e()},c=[],u=e("3699"),l={name:"AppClapAnswerVue",props:["answer"],data:function(){return{points:this.answer.points||0,questionId:this.answer.qId,answerId:this.answer._id}},mixins:[u["a"]],methods:{clap:function(){var t=this;if(!this.session.isLoggedIn)return this.$router.push({name:"login",query:{redirect:"/question/".concat(this.question.slug)}}),!1;var s={};return s.qId=this.questionId,s.bonusType="ABonus",this.$http.put("".concat(this.$BASE_URL,"api/v1/vote/answer/").concat(this.answerId),s).then(function(s){t.points=s.data.data})}},computed:{votes:function(){var t=this;return function(){return t.points>0?"+ ".concat(t.points):t.points<0?"".concat(t.points):0}}}},d=l,p=(e("024a"),e("2877")),m=Object(p["a"])(d,r,c,!1,null,"f896df70",null),h=m.exports,v=e("c7a3"),f=e("41df"),w={name:"AppAnswerList",components:{AppClapAnswer:h,AppModal:f["a"]},mixins:[u["a"],v["a"]],props:["question"],data:function(){return{isModalVisible:!1,resourceId:"",answers:[],session:{},spinner:{}}},methods:{showModal:function(t){this.resourceId=t._id,this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},trigger:function(){this.isModalVisible=!1,this.removeAnswer()},list:function(){var t=this;this.$http.get("".concat(this.$BASE_URL,"api/v1/question/").concat(this.question._id,"/answer")).then(function(s){t.answers=s.data.data,t.spinner.status=!1})},removeAnswer:function(){var t=this;this.spinner.status=!0,this.$http.delete("".concat(this.$BASE_URL,"api/v1/answer/").concat(this.resourceId)).then(function(){t.list()})},updateAnswer:function(t){window.scrollTo(0,document.body.scrollHeight),this.$vueEventBus.$emit("updateAnswer",{answerId:t._id,name:t.name})}},created:function(){var t=this;this.list(),this.$vueEventBus.$on("isReRenderAnswerList",function(s){s&&t.list()})}},_=w,C=(e("bc7a"),Object(p["a"])(_,n,o,!1,null,"40c9644c",null)),g=C.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"answerEnd",staticClass:"comment-respond page-content clearfix t-answer",attrs:{id:"respond"}},[e("form",{staticClass:"comment-form",attrs:{id:"commentform"},on:{submit:function(s){return s.preventDefault(),t.onLinkClicked(s)}}},[e("div",{attrs:{id:"respond-textarea"}},[e("p",[e("label",{staticClass:"required",attrs:{for:"comment"}},[t._v("\n          "+t._s(t.updatedAnswer.name?"Update Answer":"Your Answer")+"\n          "),e("span",[t._v("*")])]),e("vue-editor",{attrs:{editorToolbar:t.customToolbar},model:{value:t.content,callback:function(s){t.content=s},expression:"content"}})],1)]),this.updatedAnswer.answerId?t._e():e("p",{staticClass:"form-submit"},[e("input",{staticClass:"button small color",attrs:{disabled:t.isPosting,name:"submit",type:"submit",id:"submit"},domProps:{value:t.isPosting?"Posting...":"Post your answer"}})]),this.updatedAnswer.answerId?e("p",{staticClass:"form-submit"},[e("input",{staticClass:"button small color",attrs:{disabled:t.isPosting,name:"submit",type:"submit",id:"submit"},domProps:{value:t.isPosting?"Updating...":"Update your answer"}})]):t._e()])])},A=[],q=e("b3e9"),$=e("fd88"),y={name:"AppAnswer",components:{VueEditor:q["VueEditor"]},mixins:[u["a"]],props:["question"],data:function(){return{updatedAnswer:{name:"",answerId:""},content:"",customToolbar:[["bold","italic","underline"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],["image","code-block"]],isPosting:!1}},created:function(){var t=this;this.$vueEventBus.$on("updateAnswer",function(s){t.updatedAnswer=s,t.content=t.updatedAnswer.name})},methods:{onLinkClicked:function(){this.session.isLoggedIn?this.handleSubmit():this.$router.push({name:"login",query:{redirect:"/question/".concat(this.$route.params.slug)}})},handleSubmit:function(){var t=this;if(!this.content.trim())return!1;if(this.isPosting=!0,this.updatedAnswer.answerId&&this.updatedAnswer.name){var s={name:this.content,aId:this.updatedAnswer.answerId};return this.$http.put("".concat(this.$BASE_URL,"api/v1/question/").concat(this.question._id,"/answer"),s).then(function(s){var e=s.data.message;t.content="",t.isPosting=!1,t.updatedAnswer={},$["a"].success(e),t.$vueEventBus.$emit("isReRenderAnswerList",!0)})}var e={name:this.content};return this.$http.post("".concat(this.$BASE_URL,"api/v1/question/").concat(this.question._id,"/answer"),e).then(function(s){var e=s.data.message;t.content="",t.isPosting=!1,$["a"].success(e),t.$vueEventBus.$emit("isReRenderAnswerList",!0)})}}},E=y,x=Object(p["a"])(E,b,A,!1,null,null,null),L=x.exports,k=e("d9ba"),I=e("1b62"),S={name:"QuestionDetail",props:["slug"],components:{AppAnswerList:g,AppAnswer:L,AppClap:k["a"]},mixins:[I["e"],I["d"],I["c"],I["a"]],data:function(){return{isValid:!1,question:{totalAnswers:"",views:""},recommendations:[]}},methods:{updateView:function(t){var s=this;this.$http.get("".concat(this.$BASE_URL,"api/v1/question/").concat(t,"/views"),{errorHandle:!1}).then(function(t){s.views=t.data.data})},removeQuestion:function(t){var s=this;this.spinner.status=!0,this.$http.delete("".concat(this.$BASE_URL,"api/v1/question/").concat(t)).then(function(){s.$router.push("/profile")})},questionDetail:function(t){var s=this;this.$http.get("".concat(this.$BASE_URL,"api/v1/question/").concat(t),{errorHandle:!1}).then(function(t){s.isValid=!0,s.question=t.data.data,document.title=s.title("".concat(s.question.name)),s.spinner.status=!1}).catch(function(){s.$router.push("/404")})},getRecommendations:function(t){var s=this;this.$http.get("".concat(this.$BASE_URL,"api/v1/question/").concat(t,"/recommendations")).then(function(t){s.recommendations=t.data.data,s.spinner.status=!1})}},created:function(){if(this.$route.params.slug){var t=this.$route.params.slug;this.updateView(t),this.questionDetail(t),this.reRenderSidebar(t)}},computed:{timestamp:function(){var t=this;return function(s){return t.$moment(s.createdAt).fromNow()}},updateLandingHtml:function(){return function(t){return t=t.replace(/<br>/g,""),t}}}},P=S,R=(e("c487"),Object(p["a"])(P,i,a,!1,null,"7b590d74",null));s["default"]=R.exports},"527e":function(t,s,e){},"567e":function(t,s,e){},"5df6":function(t,s,e){"use strict";var i=e("527e"),a=e.n(i);a.a},bc7a:function(t,s,e){"use strict";var i=e("df58"),a=e.n(i);a.a},c487:function(t,s,e){"use strict";var i=e("567e"),a=e.n(i);a.a},df58:function(t,s,e){},e8f3:function(t,s,e){}}]);