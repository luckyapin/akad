(function(e){function t(t){for(var o,a,c=t[0],s=t[1],r=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(d.length)d.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i={app:0},l=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0b2cd964":"642c11d4","chunk-18ca7248":"1dfbff3d","chunk-2d0abf5f":"573dd5b7","chunk-2d0bdf77":"489e12d9","chunk-5e1602a4":"6c11e433","chunk-6c33bfb2":"c076ed5f","chunk-b7cc3d00":"cbe7c8eb"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-6c33bfb2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0b2cd964":"31d6cfe0","chunk-18ca7248":"31d6cfe0","chunk-2d0abf5f":"31d6cfe0","chunk-2d0bdf77":"31d6cfe0","chunk-5e1602a4":"31d6cfe0","chunk-6c33bfb2":"3d3be771","chunk-b7cc3d00":"31d6cfe0"}[e]+".css",i=s.p+o,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var r=l[c],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===o||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){r=d[c],u=r.getAttribute("data-href");if(u===o||u===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||i,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete a[e],h.parentNode.removeChild(h),n(l)},h.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=l);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/akad/",s.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var h=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d35":function(e,t,n){e.exports=n.p+"img/history.62ba2176.jpg"},"3fc1":function(e,t,n){n("7db0"),$(document).ready((function(){$(".burger").click((function(){$(".burger__menu").slideToggle(300),$(".burger").toggleClass("burger__active")})),$(".portfolio").hover((function(){$(".portfolio-menu").slideDown(200)}),(function(){$(".portfolio-menu").slideUp(200)})),$(".blog").hover((function(){$(".blog-menu").slideDown(200)}),(function(){$(".blog-menu").slideUp(200)})),$(".links li").click((function(){$(".link").removeClass("choosen"),$(this).find(".link").toggleClass("choosen")})),$(".email").focus((function(){$(this).parent().find(".email-text").addClass("active")})),$(".email").blur((function(){$(this).parent().find(".email-text").removeClass("active")}))}))},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={id:"app"};function i(e,t,n,i,l,c){var s=Object(o["y"])("router-view");return Object(o["q"])(),Object(o["d"])("div",a,[(Object(o["q"])(),Object(o["d"])(Object(o["z"])(c.layout),null,{default:Object(o["F"])((function(){return[Object(o["h"])(s)]})),_:1}))])}var l={class:""},c=Object(o["f"])('<nav><div class="header wow animate__fadeInUpSmall"><a href="" class="logo">AKAD.</a><div class="menu"><div class="burger"><span></span></div><div class="burger__menu"><ul class="menu__list"><li><a href="/" class="menu__link">Home</a></li><li><a href="/about" class="menu__link">about us</a></li><li><a href="/services" class="menu__link">services</a></li><li class="portfolio"><a href="/portfolio" class="menu__link">portfolio</a><div class="portfolio__menu"><ul class="portfolio-menu"><li><a href="/portfolio" class="menu__link">portfolio list</a></li><li><a href="/portfolio/single" class="menu__link">singe project 1</a></li><li><a href="/portfolio/second" class="menu__link">singe project 2</a></li></ul></div></li><li class="blog"><a href="/blog" class="menu__link">blog</a><div class="blog__menu"><ul class="blog-menu"><li><a href="/blog" class="menu__link">posts list</a></li><li><a href="/blog/post" class="menu__link">single post</a></li></ul></div></li><li><a href="/contact" class="menu__link">contact us</a></li></ul></div></div></div></nav>',1),s=Object(o["f"])('<div class="newsletter wow animate__fadeInUpSmall"><div class="text"><div class="title">YOU THINK WE&#39;RE COOL? LET&#39;S WORK TOGETHER</div><input type="button" value="get in touch" class="getIt"></div><div class="form"><div class="title">STAY INFORMED WITH OUR NEWSLETTER</div><div class="sutitle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div><div class="input-email"><input type="text" name="" id="" placeholder="" class="email"><span class="email-text">your email</span></div><input type="button" value="send" class="send"></div></div>',1),r={class:"wow animate__fadeInUpSmall"},u=Object(o["f"])('<ul class="links"><li class=""><a href="" class="link">home</a></li><li class=""><a href="" class="link">about us </a></li><li class=""><a href="" class="link">services</a></li><li class=""><a href="" class="link">portfolio</a></li><li class=""><a href="" class="link">blog</a></li><li class=""><a href="" class="link">contact us</a></li></ul>',1),d={class:"createBy"},h=Object(o["h"])("div",{class:"title"},"Created by akhouad 2016. All Rights Reserved",-1);function b(e,t,n,a,i,b){var p=Object(o["y"])("router-view"),m=Object(o["y"])("Socials");return Object(o["q"])(),Object(o["d"])("div",l,[c,Object(o["h"])(p),s,Object(o["h"])("footer",r,[u,Object(o["h"])("div",d,[h,Object(o["h"])(m)])])])}var p=n("e44c"),m=n("bc1b"),f=n.n(m),O={name:"main-layout",components:{Socials:p["a"]},mounted:function(){new f.a.WOW({live:!0,boxClass:"wow",animateClass:"animate__animated",offset:30,mobile:!0}).init()}};O.render=b;var g=O,j={computed:{layout:function(){return console.log(this.$route.meta),"mainLayout"}},components:{mainLayout:g}};n("754f");j.render=i;var v=j,k=n("9483");Object(k["a"])("".concat("/akad/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var y=n("6c02"),w=(n("bb51"),[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))},meta:{layout:"mainLayout"}},{path:"/about",name:"about",component:function(){return n.e("chunk-0b2cd964").then(n.bind(null,"754b"))},meta:{layout:"mainLayout"}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-6c33bfb2").then(n.bind(null,"44b5"))},meta:{layout:"mainLayout"}},{path:"/blog/post",name:"post",component:function(){return n.e("chunk-b7cc3d00").then(n.bind(null,"95a6"))},meta:{layout:"mainLayout"}},{path:"/blog",name:"blog",component:function(){return n.e("chunk-5e1602a4").then(n.bind(null,"68b7"))},meta:{layout:"mainLayout"}},{path:"/portfolio",name:"portfolio",component:function(){return n.e("chunk-2d0bdf77").then(n.bind(null,"2df5"))},meta:{layout:"mainLayout"}},{path:"/portfolio/single",name:"single",component:function(){return n.e("chunk-18ca7248").then(n.bind(null,"de03"))},meta:{layout:"mainLayout"}},{path:"/services",name:"services",component:function(){return n.e("chunk-2d0abf5f").then(n.bind(null,"1802"))},meta:{layout:"mainLayout"}}]),_=Object(y["a"])({history:Object(y["b"])("/akad/"),routes:w}),M=_,C=n("5502"),x=Object(C["a"])({state:{},mutations:{},actions:{},modules:{}});n("6885"),n("77ed"),n("518a");Object(o["c"])(v).use(x).use(M).mount("#app")},6603:function(e,t,n){},"754f":function(e,t,n){"use strict";n("6603")},bb51:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=n("1d35"),i=n.n(a),l=Object(o["f"])('<div class="site__header wow animate__fadeInUpSmall"><div class="site-hero"><div class="hero"><div class="suptitle">we’re</div><div class="title">creative agency</div><div class="subtitle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></div></div></div>',1),c={class:"container"},s=Object(o["h"])("div",{class:"history wow animate__fadeInUpSmall"},[Object(o["h"])("div",{class:"image"},[Object(o["h"])("img",{src:i.a,alt:""})]),Object(o["h"])("div",{class:"text"},[Object(o["h"])("div",{class:"title"},"HISTORY OF AGENCY"),Object(o["h"])("div",{class:"content"}," Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore. "),Object(o["h"])("div",{class:"button"},[Object(o["h"])("input",{type:"button",value:"read more"})])])],-1),r=Object(o["h"])("div",{class:"whyChooseUs"},[Object(o["h"])("div",{class:"text wow animate__fadeInUpSmall"},[Object(o["h"])("div",{class:"title"},"why choose us"),Object(o["h"])("div",{class:"subtitle"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),Object(o["h"])("div",{class:"link wow animate__fadeInUp"},[Object(o["h"])("div",{class:"content"},[Object(o["h"])("div",{class:"blocks"},[Object(o["h"])("div",{class:"icon"},[Object(o["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[Object(o["h"])("title",null,"Infinite"),Object(o["h"])("path",{d:"M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"})])]),Object(o["h"])("div",{class:"title"},"unlimited options"),Object(o["h"])("ul",{class:"links"},[Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Branding")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Design & Copywriting")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Concept development")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"User Experience")])])]),Object(o["h"])("div",{class:"blocks"},[Object(o["h"])("div",{class:"icon"},[Object(o["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[Object(o["h"])("title",null,"Shuffle"),Object(o["h"])("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"}),Object(o["h"])("path",{d:"M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})])]),Object(o["h"])("div",{class:"title"},"DESIGN & DEVELOPMENT"),Object(o["h"])("ul",{class:"links"},[Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Information architecture")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Interface design")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Product Design")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Integrated ad Companies")])])]),Object(o["h"])("div",{class:"blocks"},[Object(o["h"])("div",{class:"icon"},[Object(o["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[Object(o["h"])("title",null,"Cart"),Object(o["h"])("circle",{cx:"176",cy:"416",r:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(o["h"])("circle",{cx:"400",cy:"416",r:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(o["h"])("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M48 80h64l48 272h256"}),Object(o["h"])("path",{d:"M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})])]),Object(o["h"])("div",{class:"title"},"e-commerce"),Object(o["h"])("ul",{class:"links"},[Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Prototyping")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Technical Consulting")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Web applications")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Quality testing")])])]),Object(o["h"])("div",{class:"blocks"},[Object(o["h"])("div",{class:"icon"},[Object(o["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[Object(o["h"])("title",null,"Options"),Object(o["h"])("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"}),Object(o["h"])("circle",{cx:"336",cy:"128",r:"32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(o["h"])("circle",{cx:"176",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(o["h"])("circle",{cx:"336",cy:"384",r:"32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})])]),Object(o["h"])("div",{class:"title"},"CUSTOMIZABLE DESIGN"),Object(o["h"])("ul",{class:"links"},[Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Information architecture")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Interface design")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Product Design")]),Object(o["h"])("li",{class:"link"},[Object(o["h"])("a",{href:""},"Integrated ad Companies")])])])]),Object(o["h"])("div",{class:"image"})])],-1);function u(e,t,n,a,i,u){var d=Object(o["y"])("works");return Object(o["q"])(),Object(o["d"])("div",null,[l,Object(o["h"])("div",c,[s,r,Object(o["h"])(d)])])}n("3fc1");var d=n("d1d3"),h=n("bc1b"),b=n.n(h),p={name:"Home",mounted:function(){new b.a.WOW({live:!0,boxClass:"wow",animateClass:"animate__animated",offset:30,mobile:!0}).init()},components:{works:d["a"]}};p.render=u;t["default"]=p},d1d3:function(e,t,n){"use strict";var o=n("7a23"),a={class:"ourPortfolio"},i=Object(o["h"])("div",{class:"text wow animate__fadeInUpSmall"},[Object(o["h"])("div",{class:"title"},"our portfolio"),Object(o["h"])("div",{class:"subtitle"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),l={class:"content"},c={class:"categories wow animate__fadeInLeft"},s=Object(o["h"])("div",{class:"title"},"choose category",-1),r={class:"links"},u=Object(o["h"])("label",{for:"All"},"All",-1),d=Object(o["h"])("br",null,null,-1),h=Object(o["h"])("label",{for:"Photography"},"Photography",-1),b=Object(o["h"])("br",null,null,-1),p=Object(o["h"])("label",{for:"webdesign"},"webdesign",-1),m=Object(o["h"])("br",null,null,-1),f=Object(o["h"])("label",{for:"logo"},"logo",-1),O=Object(o["h"])("br",null,null,-1),g=Object(o["h"])("label",{for:"graphics"},"graphics",-1),j=Object(o["h"])("br",null,null,-1),v=Object(o["h"])("label",{for:"advertising"},"advertising",-1),k=Object(o["h"])("br",null,null,-1),y=Object(o["h"])("label",{for:"fashion"},"fashion",-1),w={class:"title"},_={class:"category"};function M(e,t,n,M,C,x){return Object(o["q"])(),Object(o["d"])("div",a,[i,Object(o["h"])("div",l,[Object(o["h"])("div",c,[s,Object(o["h"])("div",r,[Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"All",value:"All","onUpdate:modelValue":t[1]||(t[1]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),u,d,Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"Photography",value:"Photography","onUpdate:modelValue":t[2]||(t[2]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),h,b,Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"webdesign",value:"webdesign","onUpdate:modelValue":t[3]||(t[3]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),p,m,Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"logo",value:"logo","onUpdate:modelValue":t[4]||(t[4]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),f,O,Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"graphics",value:"graphics","onUpdate:modelValue":t[5]||(t[5]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),g,j,Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"advertising",value:"advertising","onUpdate:modelValue":t[6]||(t[6]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),v,k,Object(o["G"])(Object(o["h"])("input",{type:"radio",id:"fashion",value:"fashion","onUpdate:modelValue":t[7]||(t[7]=function(e){return C.picked=e})},null,512),[[o["D"],C.picked]]),y])]),Object(o["h"])("ul",{class:"blocks",style:"grid-template-rows: repeat("+Math.ceil(x.pick.length/3)+", 150px) "},[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(x.pick,(function(e){return Object(o["q"])(),Object(o["d"])("li",{class:[e.class,"wow animate__fadeIn"],key:e.title},[Object(o["h"])("img",{src:e.image,alt:""},null,8,["src"]),Object(o["h"])("span",w,Object(o["B"])(e.title),1),Object(o["h"])("span",_,Object(o["B"])(e.category),1)],2)})),128))],4)])])}n("4de4");var C=n("bc1b"),x=n.n(C),B={mounted:function(){new x.a.WOW({live:!0,boxClass:"wow",animateClass:"animate__animated",offset:30,mobile:!0}).init()},data:function(){return{all:[{title:"Brave Man",category:"All",class:"block2 ",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"Photography",class:"block1 ",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"webdesign",class:"block2",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"logo",class:"block2",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"graphics",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"Photography",class:"block2",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"logo",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"graphics",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"Photography",class:"block2",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"Photography",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"Photography",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"advertising",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"Photography",class:"block2",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"advertising",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"fashion",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"advertising",class:"block2",image:"https://picsum.photos/800/500?random="+Math.random()},{title:"Brave Man",category:"fashion",class:"block1",image:"https://picsum.photos/800/500?random="+Math.random()}],picked:"All"}},computed:{pick:function(e){var t=e.picked;return this.all.filter((function(e){return e.category==t||"All"==t}))}}};B.render=M;t["a"]=B},e44c:function(e,t,n){"use strict";var o=n("7a23"),a={class:"social"},i={href:"#"},l={href:"#"},c={href:"#"},s={href:"#"},r={href:"#"},u={href:"#"};function d(e,t){var n=Object(o["y"])("ion-icon");return Object(o["q"])(),Object(o["d"])("ul",a,[Object(o["h"])("li",null,[Object(o["h"])("a",i,[Object(o["h"])(n,{name:"logo-facebook"})])]),Object(o["h"])("li",null,[Object(o["h"])("a",l,[Object(o["h"])(n,{name:"logo-twitter"})])]),Object(o["h"])("li",null,[Object(o["h"])("a",c,[Object(o["h"])(n,{name:"logo-youtube"})])]),Object(o["h"])("li",null,[Object(o["h"])("a",s,[Object(o["h"])(n,{name:"logo-linkedin"})])]),Object(o["h"])("li",null,[Object(o["h"])("a",r,[Object(o["h"])(n,{name:"logo-pinterest"})])]),Object(o["h"])("li",null,[Object(o["h"])("a",u,[Object(o["h"])(n,{name:"logo-instagram"})])])])}const h={};h.render=d;t["a"]=h}});
//# sourceMappingURL=app.57674107.js.map