(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70d5d9aa"],{b0c0:function(e,t,c){var a=c("83ab"),o=c("9bf2").f,r=Function.prototype,n=r.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in r)&&o(r,l,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})},d3e0:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),o=Object(a["createVNode"])("h2",{class:"text-center pt-4"},"完成下訂",-1),r=Object(a["createVNode"])("figure",{class:"my-5 text-center mx-auto"},[Object(a["createVNode"])("img",{class:"img-fluid",src:"https://i.imgur.com/AC7oLKq.png",alt:"step4 完成下訂"})],-1),n=Object(a["createVNode"])("h2",{class:"text-center"},"購買品項",-1),s={class:"p-table table align-middle w-md-50 mx-auto"},l=Object(a["createVNode"])("thead",{class:"p-table__foot"},[Object(a["createVNode"])("tr",{class:"text-light"},[Object(a["createVNode"])("th",{width:"40%",class:"text-center fs-7 fs-sm-6"},"商品"),Object(a["createVNode"])("th",{class:"p-table__th--num text-center fs-7 fs-sm-6"},"數量")])],-1),d={class:"p-table__body"},i={class:"d-sm-flex align-items-center"},b={class:"ps-2"},u={class:"badge bg-primary"},p={class:"fs-7 fs-sm-6"},j={class:"text-center"},O={class:"p-table__head"},m={class:"text-light"},g=Object(a["createVNode"])("td",{class:"text-end"},"總計",-1),h={class:"text-center"},f=Object(a["createVNode"])("h2",{class:"text-center"},"客戶資訊",-1),N={class:"row justify-content-center"},V={key:0,class:"col-md-6"},y=Object(a["createVNode"])("dt",null,"姓名：",-1),x=Object(a["createVNode"])("dt",null,"寄送地址：",-1),k=Object(a["createVNode"])("dt",null,"E-mail信箱：",-1),S=Object(a["createVNode"])("dt",null,"付款方式：",-1),w={class:"d-flex justify-content-center mb-4"},v={key:0,class:"material-icons animate-spin"},B=Object(a["createTextVNode"])(" 結帳付款 ");function D(e,t,c,D,_,$){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[o,r,n,Object(a["createVNode"])("table",s,[l,Object(a["createVNode"])("tbody",d,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(_.order.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("figure",i,[Object(a["createVNode"])("img",{class:"product-img",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(a["createVNode"])("figcaption",b,[Object(a["createVNode"])("span",u,Object(a["toDisplayString"])(e.product.category),1),Object(a["createVNode"])("p",p,Object(a["toDisplayString"])(e.product.title),1)])])]),Object(a["createVNode"])("td",j,Object(a["toDisplayString"])(e.qty),1)])})),128))]),Object(a["createVNode"])("tfoot",O,[Object(a["createVNode"])("tr",m,[g,Object(a["createVNode"])("td",h,Object(a["toDisplayString"])(e.$filters.currency(_.order.total))+" NTD",1)])])]),f,Object(a["createVNode"])("div",N,[_.order.user?(Object(a["openBlock"])(),Object(a["createBlock"])("dl",V,[y,Object(a["createVNode"])("dd",null,Object(a["toDisplayString"])(_.order.user.name),1),x,Object(a["createVNode"])("dd",null,Object(a["toDisplayString"])(_.order.user.address),1),k,Object(a["createVNode"])("dd",null,Object(a["toDisplayString"])(_.order.user.email),1),S,Object(a["createVNode"])("dd",null,Object(a["toDisplayString"])(_.order.user.payment_method),1)])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",w,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return $.payment()})},[3===_.loadingStatus.loadingItem?(Object(a["openBlock"])(),Object(a["createBlock"])("span",v," cached ")):Object(a["createCommentVNode"])("",!0),B])])],64)}c("99af");var _={data:function(){return{loadingStatus:{loadingItem:""},order:{}}},methods:{showAlert:function(e){this.$swal(e.data.message)},getOrder:function(){var e=this,t=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("sean6","/order/").concat(t);this.$http.get(c).then((function(t){e.order=t.data.order})).catch((function(e){console.log(e)}))},payment:function(){var e=this;this.loadingStatus.loadingItem=3;var t=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("sean6","/pay/").concat(t);this.$http.post(c).then((function(c){c.data.success&&(e.loadingStatus.loadingItem="",e.showAlert(c),e.$router.push("/cartcompleted/".concat(t)))})).catch((function(e){console.log(e)}))}},mounted:function(){console.clear(),this.getOrder()}};_.render=D;t["default"]=_}}]);
//# sourceMappingURL=chunk-70d5d9aa.37c20051.js.map