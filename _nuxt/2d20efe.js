(window.webpackJsonp=window.webpackJsonp||[]).push([[151,70,71,72,73,74,75],{758:function(t,e,l){var content=l(775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(10).default)("6cd28986",content,!0,{sourceMap:!1})},774:function(t,e,l){"use strict";l(758)},775:function(t,e,l){var r=l(9)(!1);r.push([t.i,"#hero[data-v-e4e6695e]{background:linear-gradient(0deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,.2)),radial-gradient(77.36% 256.97% at 77.36%,at 57.52%,#eeefaf 0,#c3e3fa 100%);background:linear-gradient(0deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,.2)),radial-gradient(77.36% 256.97% at 77.36% 57.52%,#eeefaf 0,#c3e3fa 100%);height:700px;overflow:hidden}@media screen and (min-width:768px){#hero[data-v-e4e6695e]{-webkit-clip-path:ellipse(150% 87% at 93% 13%);clip-path:ellipse(150% 87% at 93% 13%);height:530px}}@media screen and (min-width:1300px){#hero>img[data-v-e4e6695e]{position:absolute}#hero>div>p[data-v-e4e6695e]{max-width:450px}}@media screen and (max-width:1300px){#hero[data-v-e4e6695e]{height:600px}#hero>img[data-v-e4e6695e]{position:static;transform:scale(1);margin-left:auto}#hero>div[data-v-e4e6695e]{width:100%}#hero>div>p[data-v-e4e6695e]{width:100%;max-width:100%}}",""]),t.exports=r},860:function(t,e,l){"use strict";l.r(e);var r={setup:function(t,e){return{smoothScroll:function(t){document.querySelector(t).scrollIntoView({behavior:"smooth"})}}}},n=r,c=l(1),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static"},[l("router-link",{staticClass:"flex align-items-center",attrs:{to:"/"}},[l("img",{staticClass:"mr-0 lg:mr-2",attrs:{src:t.$_r("layout/images/logo-"+t.$store.getters["appState/logoColor"]+".svg"),alt:"Sakai Logo",height:"50"}}),l("span",{staticClass:"text-900 font-medium text-2xl line-height-3 mr-8"},[t._v("SAKAI")])]),t._v(" "),l("a",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"styleclass",rawName:"v-styleclass",value:{selector:"@next",enterClass:"hidden",leaveToClass:"hidden",hideOnOutsideClick:!0},expression:"{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }"}],staticClass:"cursor-pointer block lg:hidden text-700 p-ripple"},[l("i",{staticClass:"pi pi-bars text-4xl"})]),t._v(" "),l("div",{staticClass:"surface-0 align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2",staticStyle:{top:"92%"}},[l("ul",{staticClass:"list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer"},[l("li",[l("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple",on:{click:function(e){return t.smoothScroll("#hero")}}},[l("span",[t._v("Home")])])]),t._v(" "),l("li",[l("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple",on:{click:function(e){return t.smoothScroll("#features")}}},[l("span",[t._v("Features")])])]),t._v(" "),l("li",[l("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple",on:{click:function(e){return t.smoothScroll("#highlight")}}},[l("span",[t._v("Highlight")])])]),t._v(" "),l("li",[l("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple",on:{click:function(e){return t.smoothScroll("#pricing")}}},[l("span",[t._v("Pricing")])])])]),t._v(" "),l("div",{staticClass:"flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0"},[l("Button",{staticClass:"p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500",attrs:{label:"Login"}}),t._v(" "),l("Button",{staticClass:"p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500",attrs:{label:"Register"}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports},861:function(t,e,l){"use strict";l.r(e);var r={setup:function(t,e){return{plans:[{title:"Free",buttonLabel:"Get Started",image:"layout/images/asset-tier-1.svg",pricing:0,features:["Responsive Layout","Unlimited Push Messages","50 Support Ticket","Free Shipping"]},{title:"Startup",buttonLabel:"Try Free",image:"layout/images/asset-tier-2.svg",pricing:1,features:["Responsive Layout","Unlimited Push Messages","50 Support Ticket","Free Shipping"]},{title:"Enterprise",buttonLabel:"Get a Quote",image:"layout/images/asset-tier-3.svg",pricing:999,features:["Responsive Layout","Unlimited Push Messages","50 Support Ticket","Free Shipping"]}]}}},n=r,c=l(1),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"py-4 px-4 lg:px-8 my-2 md:my-4",attrs:{id:"pricing"}},[t._m(0),t._v(" "),l("div",{staticClass:"grid justify-content-between mt-8 md:mt-0"},t._l(t.plans,(function(e,r){return l("div",{key:r,staticClass:"col-12 lg:col-4 p-0 md:p-3"},[l("div",{staticClass:"p-3 flex flex-column border-200 hover:border-cyan-200",staticStyle:{border:"2px solid","border-radius":"10px"}},[l("h3",{staticClass:"text-900 text-center"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),l("img",{staticClass:"w-10 h-10 mx-auto",attrs:{src:e.image,alt:""}}),t._v(" "),l("div",{staticClass:"my-5 text-center"},[l("span",{staticClass:"text-5xl font-bold mr-2 text-900"},[t._v("$ "+t._s(e.pricing))]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("per month")]),t._v(" "),l("Button",{staticClass:"block mx-auto mt-4 p-button-rounded border-none ml-3 font-light text-white line-height-2 bg-blue-500",attrs:{label:"Get Started"}})],1),t._v(" "),l("Divider",{staticClass:"w-full bg-surface-200"}),t._v(" "),l("ul",{staticClass:"my-5 list-none p-0 flex text-900 flex-column"},t._l(e.features,(function(e,r){return l("li",{key:r,staticClass:"py-2"},[l("i",{staticClass:"pi pi-fw pi-check text-xl text-cyan-500 mr-2"}),t._v(" "),l("span",{staticClass:"text-xl line-height-3"},[t._v(t._s(e))])])})),0)],1)])})),0)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center"},[l("h2",{staticClass:"text-900 font-normal mb-2"},[t._v("\n      Matchless Pricing\n    ")]),t._v(" "),l("span",{staticClass:"text-600 text-2xl"},[t._v("Amet consectetur adipiscing elit...")])])}],!1,null,null,null);e.default=component.exports},914:function(t,e,l){"use strict";l.r(e);l(774);var r=l(1),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid py-4 px-4 lg:px-8 relative",attrs:{id:"hero"}},[l("div",{staticClass:"mx-4 md:mx-8 mt-0 md:mt-4"},[t._m(0),t._v(" "),l("p",{staticClass:"font-normal text-2xl line-height-3 md:mt-3 text-gray-700"},[t._v("\n      Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...\n    ")]),t._v(" "),l("Button",{staticClass:"p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3",attrs:{label:"Get Started"}})],1),t._v(" "),l("img",{staticClass:"bottom-0",staticStyle:{right:"10%"},attrs:{src:"layout/images/screen-1.png",alt:"hero screen"}})])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"text-6xl font-bold text-gray-900 line-height-2"},[l("span",{staticClass:"font-light block"},[t._v("Eu sem integer")]),t._v("eget magna fermentum\n    ")])}],!1,null,"e4e6695e",null);e.default=component.exports},915:function(t,e,l){"use strict";l.r(e);var r=l(1),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8",attrs:{id:"features"}},[l("div",{staticClass:"grid justify-content-center"},[l("div",{staticClass:"col-12 text-center mt-8 mb-4"},[l("h2",{staticClass:"text-900 font-normal mb-2"},[t._v("\n        Marvelous Features\n      ")]),t._v(" "),l("span",{staticClass:"text-600 text-2xl"},[t._v("Placerat in egestas erat...")])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-yellow-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-users text-2xl text-yellow-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Easy to Use\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Posuere morbi leo urna molestie.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-cyan-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-palette text-2xl text-cyan-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Fresh Design\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Semper risus in hendrerit.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-indigo-200",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-map text-2xl text-indigo-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Well Documented\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Non arcu risus quis varius quam quisque.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-bluegray-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-id-card text-2xl text-bluegray-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Responsive Layout\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Nulla malesuada pellentesque elit.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-orange-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-star text-2xl text-orange-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Clean Code\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Condimentum lacinia quis vel eros.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-pink-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-moon text-2xl text-pink-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Dark Mode\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Convallis tellus id interdum velit laoreet.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-teal-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-shopping-cart text-2xl text-teal-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Ready to Use\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Mauris sit amet massa vitae.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-blue-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-globe text-2xl text-blue-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Modern Practices\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Elementum nibh tellus molestie nunc non.")])])])]),t._v(" "),l("div",{staticClass:"col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0"},[l("div",{staticStyle:{height:"160px",padding:"2px","border-radius":"10px",background:"linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"}},[l("div",{staticClass:"p-3 surface-card h-full",staticStyle:{"border-radius":"8px"}},[l("div",{staticClass:"flex align-items-center justify-content-center bg-purple-200 mb-3",staticStyle:{width:"3.5rem",height:"3.5rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-eye text-2xl text-purple-700"})]),t._v(" "),l("h5",{staticClass:"mb-2 text-900"},[t._v("\n            Privacy\n          ")]),t._v(" "),l("span",{staticClass:"text-600"},[t._v("Neque egestas congue quisque.")])])])]),t._v(" "),l("div",{staticClass:"col-12 mt-8 mb-8 p-2 md:p-8",staticStyle:{"border-radius":"20px",background:"linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)"}},[l("div",{staticClass:"flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0"},[l("h3",{staticClass:"text-gray-900 mb-2"},[t._v("\n          Joséphine Miller\n        ")]),t._v(" "),l("span",{staticClass:"text-gray-600 text-2xl"},[t._v("Peak Interactive")]),t._v(" "),l("p",{staticClass:"text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4",staticStyle:{"max-width":"800px"}},[t._v("\n          “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”\n        ")]),t._v(" "),l("img",{staticClass:"mt-4",attrs:{src:"layout/images/peak-logo.svg",alt:""}})])])])])}],!1,null,null,null);e.default=component.exports},916:function(t,e,l){"use strict";l.r(e);var r=l(1),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8",attrs:{id:"highlight"}},[l("div",{staticClass:"text-center"},[l("h2",{staticClass:"text-900 font-normal mb-2"},[t._v("\n      Powerful Everywhere\n    ")]),t._v(" "),l("span",{staticClass:"text-600 text-2xl"},[t._v("Amet consectetur adipiscing elit...")])]),t._v(" "),l("div",{staticClass:"grid mt-8 pb-2 md:pb-8"},[l("div",{staticClass:"flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0",staticStyle:{"border-radius":"8px"}},[l("img",{staticClass:"w-11",attrs:{src:"layout/images/mockup.png",alt:"mockup mobile"}})]),t._v(" "),l("div",{staticClass:"col-12 lg:col-6 my-auto flex flex-column lg:align-items-end lg:text-right align-items-center text-center "},[l("div",{staticClass:"flex align-items-center justify-content-center bg-purple-200",staticStyle:{width:"4.2rem",height:"4.2rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-mobile text-5xl text-purple-700"})]),t._v(" "),l("h2",{staticClass:"line-height-1 text-900 text-4xl font-normal"},[t._v("\n        Congue Quisque Egestas\n      ")]),t._v(" "),l("span",{staticClass:"text-700 text-2xl line-height-3 ml-0 md:ml-2",staticStyle:{"max-width":"650px"}},[t._v("Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.")])])]),t._v(" "),l("div",{staticClass:"grid my-8 pt-2 md:pt-8"},[l("div",{staticClass:"col-12 lg:col-6 my-auto flex flex-column lg:align-items-start align-items-center"},[l("div",{staticClass:"flex align-items-center justify-content-center bg-yellow-200",staticStyle:{width:"4.2rem",height:"4.2rem","border-radius":"10px"}},[l("i",{staticClass:"pi pi-fw pi-desktop text-5xl text-yellow-700"})]),t._v(" "),l("h2",{staticClass:"line-height-1 text-900 text-4xl font-normal"},[t._v("\n        Celerisque Eu Ultrices\n      ")]),t._v(" "),l("span",{staticClass:"text-700 text-2xl line-height-3 mr-0 md:mr-2",staticStyle:{"max-width":"650px"}},[t._v("Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.")])]),t._v(" "),l("div",{staticClass:"flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0",staticStyle:{"border-radius":"8px"}},[l("img",{staticClass:"w-11 pt-4",attrs:{src:"layout/images/mockup-desktop.png",alt:"mockup"}})])])])}],!1,null,null,null);e.default=component.exports},917:function(t,e,l){"use strict";l.r(e);var r=l(1),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"py-4 px-4 mx-0 mt-8 lg:mx-8",attrs:{id:"contact"}},[l("div",{staticClass:"grid justify-content-between"},[l("div",{staticClass:"col-12 md:col-5",staticStyle:{"margin-top":"-1.5rem"}},[l("div",{staticClass:"flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3"},[l("img",{staticClass:"mr-2",attrs:{src:t.$_r("layout/images/logo-"+t.$store.getters["appState/logoColor"]+".svg"),alt:"footer sections",width:"50",height:"50"}}),t._v(" "),l("h4",{staticClass:"font-medium text-3xl text-900"},[t._v("\n          SAKAI\n        ")])])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-12 md:col-7"},[l("div",{staticClass:"grid text-center md:text-left"},[l("div",{staticClass:"col-12 md:col-3"},[l("h4",{staticClass:"font-medium text-2xl line-height-3 mb-3 text-900"},[t._v("\n            Company\n          ")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("About Us")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("News")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Investor Relations")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Careers")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer text-700"},[t._v("Media Kit")])]),t._v(" "),l("div",{staticClass:"col-12 md:col-3 mt-4 md:mt-0"},[l("h4",{staticClass:"font-medium text-2xl line-height-3 mb-3 text-900"},[t._v("\n            Resources\n          ")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Get Started")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Learn")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer text-700"},[t._v("Case Studies")])]),t._v(" "),l("div",{staticClass:"col-12 md:col-3 mt-4 md:mt-0"},[l("h4",{staticClass:"font-medium text-2xl line-height-3 mb-3 text-900"},[t._v("\n            Community\n          ")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Discord")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Events"),l("img",{staticClass:"ml-2",attrs:{src:"layout/images/new-badge.svg"}})]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("FAQ")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer text-700"},[t._v("Blog")])]),t._v(" "),l("div",{staticClass:"col-12 md:col-3 mt-4 md:mt-0"},[l("h4",{staticClass:"font-medium text-2xl line-height-3 mb-3 text-900"},[t._v("\n            Legal\n          ")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Brand Policy")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer mb-2 text-700"},[t._v("Privacy Policy")]),t._v(" "),l("a",{staticClass:"line-height-3 text-xl block cursor-pointer text-700"},[t._v("Terms of Service")])])])])}],!1,null,null,null);e.default=component.exports},981:function(t,e,l){"use strict";l.r(e);var r={layout:"empty"},n=l(1),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"surface-0 overflow-hidden"},[l("LandingHeaderComponent"),t._v(" "),l("LandingHomeComponent"),t._v(" "),l("LandingFeatureComponent"),t._v(" "),l("LandingHighlightComponent"),t._v(" "),l("LandingPricingComponent"),t._v(" "),l("LandingFooterComponent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandingHeaderComponent:l(860).default,LandingHomeComponent:l(914).default,LandingFeatureComponent:l(915).default,LandingHighlightComponent:l(916).default,LandingPricingComponent:l(861).default,LandingFooterComponent:l(917).default})}}]);