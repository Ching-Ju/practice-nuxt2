(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14],{749:function(e,t,c){var content=c(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(10).default)("25f7a99d",content,!0,{sourceMap:!1})},750:function(e,t,c){"use strict";c.r(t);var o=c(36),n=(c(83),{props:{header:{type:String,default:null},code:{type:String,default:""},recent:{type:Boolean,default:!1},containerClass:{type:String,default:""},previewStyle:{type:String,default:""}},data:function(){return{BlockView:{PREVIEW:0,CODE:1},blockView:0}},methods:{activateView:function(e,t){this.blockView=t,e.preventDefault()},copyCode:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,navigator.clipboard.writeText(t.code);case 2:e.preventDefault();case 3:case"end":return c.stop()}}),c)})))()}}}),r=(c(751),c(1)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"block-section"},[c("div",{staticClass:"block-header"},[c("span",{staticClass:"block-title"},[c("span",[e._v(e._s(e.header))]),e._v(" "),e.recent?c("span",{staticClass:"badge-new"},[e._v("New")]):e._e()]),e._v(" "),c("div",{staticClass:"block-actions"},[c("a",{class:{"block-action-active":e.blockView===e.BlockView.PREVIEW},attrs:{tabindex:"0"},on:{click:function(t){return e.activateView(t,e.BlockView.PREVIEW)}}},[c("span",[e._v("Preview")])]),e._v(" "),c("a",{class:{"block-action-active":e.blockView===e.BlockView.CODE},attrs:{tabindex:"0"},on:{click:function(t){return e.activateView(t,e.BlockView.CODE)}}},[c("span",[e._v("Code")])]),e._v(" "),c("a",{directives:[{name:"tooltip",rawName:"v-tooltip.focus.top",value:{value:"Copied to clipboard"},expression:"{ value: 'Copied to clipboard' }",modifiers:{focus:!0,top:!0}}],staticClass:"block-action-copy",attrs:{tabindex:0},on:{click:function(t){return e.copyCode(t)}}},[c("i",{staticClass:"pi pi-copy"})])])]),e._v(" "),c("div",{staticClass:"block-content"},[c("div",{staticClass:"card"},[c("div",{directives:[{name:"show",rawName:"v-show",value:e.blockView==e.BlockView.PREVIEW,expression:"blockView == BlockView.PREVIEW"}],class:e.containerClass,style:e.previewStyle},[e._t("default")],2),e._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:e.blockView===e.BlockView.CODE,expression:"blockView === BlockView.CODE"}]},[c("pre",{directives:[{name:"code",rawName:"v-code"}],staticStyle:{padding:"0"}},[c("code",[e._v(e._s(e.code))])])])])])])}),[],!1,null,"50ed3c6a",null);t.default=component.exports},751:function(e,t,c){"use strict";c(749)},752:function(e,t,c){var o=c(9)(!1);o.push([e.i,".card[data-v-50ed3c6a]{margin-bottom:0;border-radius:0}.block-section[data-v-50ed3c6a]{margin-bottom:1rem}.block-header[data-v-50ed3c6a]{padding:1rem 2rem;background-color:var(--surface-section);border-top-left-radius:12px;border-top-right-radius:12px;border:1px solid var(--surface-d);display:flex;align-items:center;justify-content:space-between}.block-header .block-title[data-v-50ed3c6a]{font-weight:700;display:inline-flex;align-items:center}.block-header .block-title .badge-free[data-v-50ed3c6a]{border-radius:4px;padding:.25rem .5rem;background-color:var(--orange-500);color:#fff;margin-left:1rem;font-weight:700;font-size:.875rem}.block-header .block-actions[data-v-50ed3c6a]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:1rem}.block-header .block-actions a[data-v-50ed3c6a]{display:flex;align-items:center;margin-right:.75rem;padding:.5rem 1rem;border-radius:4px;font-weight:600;border:1px solid transparent;transition:background-color .2s;cursor:pointer}.block-header .block-actions a[data-v-50ed3c6a]:last-child{margin-right:0}.block-header .block-actions a[data-v-50ed3c6a]:not(.block-action-disabled):hover{background-color:var(--surface-c)}.block-header .block-actions a.block-action-active[data-v-50ed3c6a]{border-color:var(--primary-color);color:var(--primary-color)}.block-header .block-actions a.block-action-copy i[data-v-50ed3c6a]{color:var(--primary-color);font-size:1.25rem}.block-header .block-actions a.block-action-disabled[data-v-50ed3c6a]{opacity:.6;cursor:auto!important}.block-header .block-actions a i[data-v-50ed3c6a]{margin-right:.5rem}.block-content[data-v-50ed3c6a]{padding:0;border:1px solid var(--surface-d);border-top:0;border-bottom-left-radius:12px;border-bottom-right-radius:12px}pre[class*=language-][data-v-50ed3c6a]{margin:0!important}pre[class*=language-][data-v-50ed3c6a]:after,pre[class*=language-][data-v-50ed3c6a]:before{display:none!important}pre[class*=language-] code[data-v-50ed3c6a]{border-left:0!important;box-shadow:none!important;background:var(--surface-e)!important;margin:0;color:var(--text-color);font-size:14px;padding:0 1rem!important}pre[class*=language-] code .token.attr-name[data-v-50ed3c6a],pre[class*=language-] code .token.attr-string[data-v-50ed3c6a],pre[class*=language-] code .token.keyword[data-v-50ed3c6a],pre[class*=language-] code .token.tag[data-v-50ed3c6a]{color:#2196f3!important}pre[class*=language-] code .token.attr-value[data-v-50ed3c6a]{color:#4caf50!important}pre[class*=language-] code .token.punctuation[data-v-50ed3c6a]{color:var(--text-color)}pre[class*=language-] code .token.operator[data-v-50ed3c6a],pre[class*=language-] code .token.string[data-v-50ed3c6a]{background:transparent}@media screen and (max-width:575px){.block-header[data-v-50ed3c6a]{flex-direction:column;align-items:start}.block-header .block-actions[data-v-50ed3c6a]{margin-top:1rem;margin-left:0}}",""]),e.exports=o},808:function(e,t,c){"use strict";c.r(t);var o={setup:function(e,t){return{features:[{icon:"pi pi-desktop",title:"Built for Developers",content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{icon:"pi pi-lock",title:"End-to-End Encryption",content:"Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis."},{icon:"pi pi-check-circle",title:"Easy to Use",content:"Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper."},{icon:"pi pi-check-circle",title:"Fast & Global Support",content:"Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus."},{icon:"pi pi-github",title:"Open Source",content:"Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat."},{icon:"pi pi-shield",title:"Trusted Securitty",content:"Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend."}],code:'<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">\n  <div class="mb-3 font-bold text-2xl">\n    <span class="text-900">One Product, </span>\n    <span class="text-blue-600">Many Solutions</span>\n  </div>\n  <div class="text-700 text-sm mb-6">\n    Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.\n  </div>\n\n  <div class="grid">\n    <div v-for="(feature, index) in features" :key="index" class="col-12 md:col-4 mb-4 px-5">\n      <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">\n        <i :class="`${feature.icon} text-4xl text-blue-500`" />\n      </span>\n      <div class="text-900 mb-3 font-medium">\n        {{ feature.title }}\n      </div>\n      <span class="text-700 text-sm line-height-3">\n        {{ feature.content }}\n      </span>\n    </div>\n  </div>\n</div>'}}},n=o,r=c(1),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("BlockViewer",{attrs:{header:"Feature",code:e.code}},[c("div",{staticClass:"surface-section px-4 py-8 md:px-6 lg:px-8 text-center"},[c("div",{staticClass:"mb-3 font-bold text-2xl"},[c("span",{staticClass:"text-900"},[e._v("One Product, ")]),e._v(" "),c("span",{staticClass:"text-blue-600"},[e._v("Many Solutions")])]),e._v(" "),c("div",{staticClass:"text-700 text-sm mb-6"},[e._v("\n      Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.\n    ")]),e._v(" "),c("div",{staticClass:"grid"},e._l(e.features,(function(t,o){return c("div",{key:o,staticClass:"col-12 md:col-4 mb-4 px-5"},[c("span",{staticClass:"p-3 shadow-2 mb-3 inline-block surface-card",staticStyle:{"border-radius":"10px"}},[c("i",{class:t.icon+" text-4xl text-blue-500"})]),e._v(" "),c("div",{staticClass:"text-900 mb-3 font-medium"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),c("span",{staticClass:"text-700 text-sm line-height-3"},[e._v("\n          "+e._s(t.content)+"\n        ")])])})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:c(750).default})}}]);