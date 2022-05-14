(window.webpackJsonp=window.webpackJsonp||[]).push([[12,14],{749:function(e,t,o){var content=o(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(10).default)("25f7a99d",content,!0,{sourceMap:!1})},750:function(e,t,o){"use strict";o.r(t);var r=o(36),c=(o(83),{props:{header:{type:String,default:null},code:{type:String,default:""},recent:{type:Boolean,default:!1},containerClass:{type:String,default:""},previewStyle:{type:String,default:""}},data:function(){return{BlockView:{PREVIEW:0,CODE:1},blockView:0}},methods:{activateView:function(e,t){this.blockView=t,e.preventDefault()},copyCode:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,navigator.clipboard.writeText(t.code);case 2:e.preventDefault();case 3:case"end":return o.stop()}}),o)})))()}}}),n=(o(751),o(1)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"block-section"},[o("div",{staticClass:"block-header"},[o("span",{staticClass:"block-title"},[o("span",[e._v(e._s(e.header))]),e._v(" "),e.recent?o("span",{staticClass:"badge-new"},[e._v("New")]):e._e()]),e._v(" "),o("div",{staticClass:"block-actions"},[o("a",{class:{"block-action-active":e.blockView===e.BlockView.PREVIEW},attrs:{tabindex:"0"},on:{click:function(t){return e.activateView(t,e.BlockView.PREVIEW)}}},[o("span",[e._v("Preview")])]),e._v(" "),o("a",{class:{"block-action-active":e.blockView===e.BlockView.CODE},attrs:{tabindex:"0"},on:{click:function(t){return e.activateView(t,e.BlockView.CODE)}}},[o("span",[e._v("Code")])]),e._v(" "),o("a",{directives:[{name:"tooltip",rawName:"v-tooltip.focus.top",value:{value:"Copied to clipboard"},expression:"{ value: 'Copied to clipboard' }",modifiers:{focus:!0,top:!0}}],staticClass:"block-action-copy",attrs:{tabindex:0},on:{click:function(t){return e.copyCode(t)}}},[o("i",{staticClass:"pi pi-copy"})])])]),e._v(" "),o("div",{staticClass:"block-content"},[o("div",{staticClass:"card"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.blockView==e.BlockView.PREVIEW,expression:"blockView == BlockView.PREVIEW"}],class:e.containerClass,style:e.previewStyle},[e._t("default")],2),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.blockView===e.BlockView.CODE,expression:"blockView === BlockView.CODE"}]},[o("pre",{directives:[{name:"code",rawName:"v-code"}],staticStyle:{padding:"0"}},[o("code",[e._v(e._s(e.code))])])])])])])}),[],!1,null,"50ed3c6a",null);t.default=component.exports},751:function(e,t,o){"use strict";o(749)},752:function(e,t,o){var r=o(9)(!1);r.push([e.i,".card[data-v-50ed3c6a]{margin-bottom:0;border-radius:0}.block-section[data-v-50ed3c6a]{margin-bottom:1rem}.block-header[data-v-50ed3c6a]{padding:1rem 2rem;background-color:var(--surface-section);border-top-left-radius:12px;border-top-right-radius:12px;border:1px solid var(--surface-d);display:flex;align-items:center;justify-content:space-between}.block-header .block-title[data-v-50ed3c6a]{font-weight:700;display:inline-flex;align-items:center}.block-header .block-title .badge-free[data-v-50ed3c6a]{border-radius:4px;padding:.25rem .5rem;background-color:var(--orange-500);color:#fff;margin-left:1rem;font-weight:700;font-size:.875rem}.block-header .block-actions[data-v-50ed3c6a]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:1rem}.block-header .block-actions a[data-v-50ed3c6a]{display:flex;align-items:center;margin-right:.75rem;padding:.5rem 1rem;border-radius:4px;font-weight:600;border:1px solid transparent;transition:background-color .2s;cursor:pointer}.block-header .block-actions a[data-v-50ed3c6a]:last-child{margin-right:0}.block-header .block-actions a[data-v-50ed3c6a]:not(.block-action-disabled):hover{background-color:var(--surface-c)}.block-header .block-actions a.block-action-active[data-v-50ed3c6a]{border-color:var(--primary-color);color:var(--primary-color)}.block-header .block-actions a.block-action-copy i[data-v-50ed3c6a]{color:var(--primary-color);font-size:1.25rem}.block-header .block-actions a.block-action-disabled[data-v-50ed3c6a]{opacity:.6;cursor:auto!important}.block-header .block-actions a i[data-v-50ed3c6a]{margin-right:.5rem}.block-content[data-v-50ed3c6a]{padding:0;border:1px solid var(--surface-d);border-top:0;border-bottom-left-radius:12px;border-bottom-right-radius:12px}pre[class*=language-][data-v-50ed3c6a]{margin:0!important}pre[class*=language-][data-v-50ed3c6a]:after,pre[class*=language-][data-v-50ed3c6a]:before{display:none!important}pre[class*=language-] code[data-v-50ed3c6a]{border-left:0!important;box-shadow:none!important;background:var(--surface-e)!important;margin:0;color:var(--text-color);font-size:14px;padding:0 1rem!important}pre[class*=language-] code .token.attr-name[data-v-50ed3c6a],pre[class*=language-] code .token.attr-string[data-v-50ed3c6a],pre[class*=language-] code .token.keyword[data-v-50ed3c6a],pre[class*=language-] code .token.tag[data-v-50ed3c6a]{color:#2196f3!important}pre[class*=language-] code .token.attr-value[data-v-50ed3c6a]{color:#4caf50!important}pre[class*=language-] code .token.punctuation[data-v-50ed3c6a]{color:var(--text-color)}pre[class*=language-] code .token.operator[data-v-50ed3c6a],pre[class*=language-] code .token.string[data-v-50ed3c6a]{background:transparent}@media screen and (max-width:575px){.block-header[data-v-50ed3c6a]{flex-direction:column;align-items:start}.block-header .block-actions[data-v-50ed3c6a]{margin-top:1rem;margin-left:0}}",""]),e.exports=r},814:function(e,t,o){"use strict";o.r(t);var r=o(125),c={setup:function(e,t){return{checked:Object(r.e)(!1),code:' <div class="flex justify-content-center align-items-center">\n  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">\n    <div class="text-center mb-5">\n      <img src="images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">\n      <div class="text-900 text-3xl font-medium mb-3">\n        Welcome Back\n      </div>\n      <span class="text-600 font-medium line-height-3">Don\'t have an account?</span>\n      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>\n    </div>\n\n    <div>\n      <label for="email1" class="block text-900 font-medium mb-2">Email</label>\n      <InputText id="email1" type="text" class="w-full mb-3" />\n\n      <label for="password1" class="block text-900 font-medium mb-2">Password</label>\n      <InputText id="password1" type="password" class="w-full mb-3" />\n\n      <div class="flex align-items-center justify-content-between mb-6">\n        <div class="flex align-items-center">\n          <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2" />\n          <label for="rememberme1">Remember me</label>\n        </div>\n        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>\n      </div>\n\n      <Button label="Sign In" icon="pi pi-user" class="w-full" />\n    </div>\n  </div>\n</div>'}}},n=c,l=o(1),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("BlockViewer",{attrs:{header:"Sign-In",code:e.code}},[o("div",{staticClass:"flex justify-content-center align-items-center"},[o("div",{staticClass:"surface-card p-4 shadow-2 border-round w-full lg:w-6"},[o("div",{staticClass:"text-center mb-5"},[o("img",{staticClass:"mb-3",attrs:{src:"images/blocks/logos/hyper.svg",alt:"Image",height:"50"}}),e._v(" "),o("div",{staticClass:"text-900 text-3xl font-medium mb-3"},[e._v("\n          Welcome Back\n        ")]),e._v(" "),o("span",{staticClass:"text-600 font-medium line-height-3"},[e._v("Don't have an account?")]),e._v(" "),o("a",{staticClass:"font-medium no-underline ml-2 text-blue-500 cursor-pointer"},[e._v("Create today!")])]),e._v(" "),o("div",[o("label",{staticClass:"block text-900 font-medium mb-2",attrs:{for:"email1"}},[e._v("Email")]),e._v(" "),o("InputText",{staticClass:"w-full mb-3",attrs:{id:"email1",type:"text"}}),e._v(" "),o("label",{staticClass:"block text-900 font-medium mb-2",attrs:{for:"password1"}},[e._v("Password")]),e._v(" "),o("InputText",{staticClass:"w-full mb-3",attrs:{id:"password1",type:"password"}}),e._v(" "),o("div",{staticClass:"flex align-items-center justify-content-between mb-6"},[o("div",{staticClass:"flex align-items-center"},[o("Checkbox",{staticClass:"mr-2",attrs:{id:"rememberme1",binary:!0},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),o("label",{attrs:{for:"rememberme1"}},[e._v("Remember me")])],1),e._v(" "),o("a",{staticClass:"font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"},[e._v("Forgot password?")])]),e._v(" "),o("Button",{staticClass:"w-full",attrs:{label:"Sign In",icon:"pi pi-user"}})],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:o(750).default})}}]);