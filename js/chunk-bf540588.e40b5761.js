(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf540588"],{"0bac":function(e,t,a){"use strict";a("4391")},2532:function(e,t,a){"use strict";var n=a("23e7"),c=a("5a34"),o=a("1d80"),r=a("ab13");n({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(o(this)).indexOf(c(e),arguments.length>1?arguments[1]:void 0)}})},"3d4f":function(e,t,a){"use strict";var n=function(e){return{all:e=e||new Map,on:function(t,a){var n=e.get(t);n?n.push(a):e.set(t,[a])},off:function(t,a){var n=e.get(t);n&&(a?n.splice(n.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var n=e.get(t);n&&n.slice().map((function(e){e(a)})),(n=e.get("*"))&&n.slice().map((function(e){e(t,a)}))}}},c=n();t["a"]=c},"3dfc":function(e,t,a){e.exports=a.p+"img/404.07fc063f.png"},4391:function(e,t,a){},"44e7":function(e,t,a){var n=a("861d"),c=a("c6b6"),o=a("b622"),r=o("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==c(e))}},"5a34":function(e,t,a){var n=a("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"8cdb":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=a("3dfc"),o=a.n(c),r={class:"nav-header"},i=Object(n["createVNode"])("main",{id:"main",class:"container-fulid text-center bg-primary"},[Object(n["createVNode"])("div",{class:"container pt-8 pb-4 content position-relative"},[Object(n["createVNode"])("div",{class:"col position-relative"},[Object(n["createVNode"])("figure",{class:"ms-4 mb-0"},[Object(n["createVNode"])("img",{src:o.a,alt:"404",class:"img-fluid"})])]),Object(n["createVNode"])("h2",{class:"fs-xl text-light"},"404"),Object(n["createVNode"])("p",{class:"fs-4 text-light"},"對不起，找不到您想前往的頁面…")])],-1);function s(e,t,a,c,o,s){var l=Object(n["resolveComponent"])("Navbar"),d=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("header",r,[Object(n["createVNode"])(l)]),i,Object(n["createVNode"])(d)],64)}var l=a("d178"),d=a("fd2d"),u={components:{Navbar:l["a"],Footer:d["a"]}};a("0bac");u.render=s;t["default"]=u},"9fe6":function(e,t,a){"use strict";a("caad"),a("2532"),a("a434");t["a"]={methods:{saveLocalStorage:function(e){var t=JSON.stringify(e);localStorage.setItem("Favorite",t)},getLocalStorage:function(){return JSON.parse(localStorage.getItem("Favorite"))},addMyFavorite:function(e){this.myFavorite.includes(e)?this.myFavorite.splice(this.myFavorite.indexOf(e),1):this.myFavorite.push(e),this.saveLocalStorage(this.myFavorite),this.emitter.emit("update-favorite")}}}},a434:function(e,t,a){"use strict";var n=a("23e7"),c=a("23cb"),o=a("a691"),r=a("50c4"),i=a("7b0b"),s=a("65f0"),l=a("8418"),d=a("1dde"),u=d("splice"),b=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var a,n,d,u,m,g,O=i(this),h=r(O.length),j=c(e,h),N=arguments.length;if(0===N?a=n=0:1===N?(a=0,n=h-j):(a=N-2,n=f(b(o(t),0),h-j)),h+a-n>p)throw TypeError(v);for(d=s(O,n),u=0;u<n;u++)m=j+u,m in O&&l(d,u,O[m]);if(d.length=n,a<n){for(u=j;u<h-n;u++)m=u+n,g=u+a,m in O?O[g]=O[m]:delete O[g];for(u=h;u>h-n+a;u--)delete O[u-1]}else if(a>n)for(u=h-n;u>j;u--)m=u+n-1,g=u+a-1,m in O?O[g]=O[m]:delete O[g];for(u=0;u<a;u++)O[u+j]=arguments[u+2];return O.length=h-n+a,d}})},ab13:function(e,t,a){var n=a("b622"),c=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[c]=!1,"/./"[e](t)}catch(n){}}return!1}},caad:function(e,t,a){"use strict";var n=a("23e7"),c=a("4d64").includes,o=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d178:function(e,t,a){"use strict";var n=a("7a23"),c={class:"\n      navbar navbar-expand-lg navbar-dark\n      bg-dark\n      position-fixed\n      header-nav\n      w-100\n      nav-bar\n    ",style:{"z-index":"10"}},o={class:"container-fluid"},r={class:"w-auto"},i=Object(n["createVNode"])("img",{src:"https://i.imgur.com/p7Vsu83.png",alt:"WECARD",width:"50",class:"d-inline-block align-text-top"},null,-1),s={class:"navbar-nav ms-auto d-lg-none pe-2 flex-row align-items-center"},l={key:0,class:"nav-item me-3"},d={class:"material-icons position-relative h1"},u=Object(n["createTextVNode"])(" favorite "),b={key:0,class:"\n                  position-absolute\n                  top-0\n                  start-100\n                  translate-middle\n                  badge\n                  rounded-pill\n                  bg-secondary\n                  font-monospace\n                  lh-xs\n                "},f=Object(n["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),p={class:"nav-item me-2"},v={class:"material-icons position-relative h1"},m=Object(n["createTextVNode"])(" shopping_cart "),g={key:0,class:"\n                  position-absolute\n                  top-0\n                  start-100\n                  translate-middle\n                  badge\n                  rounded-pill\n                  bg-secondary\n                  font-monospace\n                  lh-xs\n                "},O=Object(n["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),h=Object(n["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},N={class:"navbar-nav align-items-center"},x={class:"nav-item"},V=Object(n["createTextVNode"])("首頁"),y={class:"nav-item"},k=Object(n["createTextVNode"])("主打商品"),F={class:"nav-item"},w=Object(n["createTextVNode"])("最新消息"),C={key:0,class:"nav-item text-center d-none d-lg-block"},B={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},S=Object(n["createTextVNode"])(" favorite "),T={key:0,class:"\n                    position-absolute\n                    top-0\n                    start-100\n                    translate-middle\n                    badge\n                    rounded-pill\n                    bg-secondary\n                    font-monospace\n                    lh-xs\n                  "},_=Object(n["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),I={class:"nav-item text-center d-none d-lg-block"},D={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},L=Object(n["createTextVNode"])(" shopping_cart "),E={key:0,class:"\n                    position-absolute\n                    top-0\n                    start-100\n                    translate-middle\n                    badge\n                    rounded-pill\n                    bg-secondary\n                    font-monospace\n                    lh-xs\n                  "},M=Object(n["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1);function A(e,t,a,A,J,z){var P=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("nav",c,[Object(n["createVNode"])("div",o,[Object(n["createVNode"])("h1",r,[Object(n["createVNode"])(P,{class:"navbar-brand",to:"/"},{default:Object(n["withCtx"])((function(){return[i]})),_:1})]),Object(n["createVNode"])("ul",s,[J.myFavorite.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])("li",l,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("span",d,[u,J.myFavorite.length?(Object(n["openBlock"])(),Object(n["createBlock"])("span",b,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(J.myFavorite.length)+" ",1),f])):Object(n["createCommentVNode"])("",!0)])]})),_:1})])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("li",p,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("span",v,[m,J.cartItems?(Object(n["openBlock"])(),Object(n["createBlock"])("span",g,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(J.cartItems)+" ",1),O])):Object(n["createCommentVNode"])("",!0)])]})),_:1})])]),h,Object(n["createVNode"])("div",j,[Object(n["createVNode"])("ul",N,[Object(n["createVNode"])("li",x,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none fs-4",to:"/"},{default:Object(n["withCtx"])((function(){return[V]})),_:1})]),Object(n["createVNode"])("li",y,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none fs-4",to:"/products"},{default:Object(n["withCtx"])((function(){return[k]})),_:1})]),Object(n["createVNode"])("li",F,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none fs-4",to:"/articles"},{default:Object(n["withCtx"])((function(){return[w]})),_:1})]),J.myFavorite.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])("li",C,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("span",B,[S,J.myFavorite.length?(Object(n["openBlock"])(),Object(n["createBlock"])("span",T,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(J.myFavorite.length)+" ",1),_])):Object(n["createCommentVNode"])("",!0)])]})),_:1})])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("li",I,[Object(n["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("span",D,[L,J.cartItems?(Object(n["openBlock"])(),Object(n["createBlock"])("span",E,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(J.cartItems)+" ",1),M])):Object(n["createCommentVNode"])("",!0)])]})),_:1})])])])])])}a("99af"),a("159b");var J=a("3d4f"),z=a("9fe6"),P={data:function(){return{cartItems:"",favoriteProduct:[],myFavorite:this.getLocalStorage()||[]}},mixins:[z["a"]],methods:{getCartItem:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("sean6","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartItems=t.data.data.carts.length)})).catch((function(e){return e}))},getFavorite:function(){var e=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.myFavorite.length>0&&this.myFavorite.forEach((function(t){var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("sean6","/product/").concat(t);e.$http.get(a).then((function(t){t.data.success&&e.favoriteProduct.push(t.data.product)})).catch((function(e){return e}))}))}},mounted:function(){var e=this;this.getCartItem(),this.getFavorite(),J["a"].on("update-cart",(function(){e.getCartItem()})),J["a"].on("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))},unmounted:function(){var e=this;J["a"].off("update-cart",(function(){e.getCartItem()})),J["a"].off("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))}};P.render=A;t["a"]=P},fd2d:function(e,t,a){"use strict";var n=a("7a23"),c={class:"\n      bg-dark\n      fs-7\n      p-3\n      text-center\n      position-relative\n      d-flex d-sm-block\n      flex-column\n    "},o={class:"position-absolute top-0 end-0"},r=Object(n["createVNode"])("span",{class:"material-icons"}," account_box ",-1),i=Object(n["createVNode"])("small",{class:"text-light copyRight"},[Object(n["createTextVNode"])("© 2021 "),Object(n["createVNode"])("a",{class:"text-link text-decoration-none",href:"#",target:"_blank"},"WeCard"),Object(n["createTextVNode"])(" All rights reserved")],-1);function s(e,t){var a=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("footer",c,[Object(n["createVNode"])("div",o,[Object(n["createVNode"])(a,{class:"text-link",to:"/login"},{default:Object(n["withCtx"])((function(){return[r]})),_:1})]),i])}const l={};l.render=s;t["a"]=l}}]);
//# sourceMappingURL=chunk-bf540588.e40b5761.js.map