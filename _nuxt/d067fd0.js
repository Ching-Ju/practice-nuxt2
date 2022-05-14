(window.webpackJsonp=window.webpackJsonp||[]).push([[147,14,43,44,45,46,47,48],{749:function(e,t,l){var content=l(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(10).default)("25f7a99d",content,!0,{sourceMap:!1})},750:function(e,t,l){"use strict";l.r(t);var o=l(36),r=(l(83),{props:{header:{type:String,default:null},code:{type:String,default:""},recent:{type:Boolean,default:!1},containerClass:{type:String,default:""},previewStyle:{type:String,default:""}},data:function(){return{BlockView:{PREVIEW:0,CODE:1},blockView:0}},methods:{activateView:function(e,t){this.blockView=t,e.preventDefault()},copyCode:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,navigator.clipboard.writeText(t.code);case 2:e.preventDefault();case 3:case"end":return l.stop()}}),l)})))()}}}),n=(l(751),l(1)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"block-section"},[l("div",{staticClass:"block-header"},[l("span",{staticClass:"block-title"},[l("span",[e._v(e._s(e.header))]),e._v(" "),e.recent?l("span",{staticClass:"badge-new"},[e._v("New")]):e._e()]),e._v(" "),l("div",{staticClass:"block-actions"},[l("a",{class:{"block-action-active":e.blockView===e.BlockView.PREVIEW},attrs:{tabindex:"0"},on:{click:function(t){return e.activateView(t,e.BlockView.PREVIEW)}}},[l("span",[e._v("Preview")])]),e._v(" "),l("a",{class:{"block-action-active":e.blockView===e.BlockView.CODE},attrs:{tabindex:"0"},on:{click:function(t){return e.activateView(t,e.BlockView.CODE)}}},[l("span",[e._v("Code")])]),e._v(" "),l("a",{directives:[{name:"tooltip",rawName:"v-tooltip.focus.top",value:{value:"Copied to clipboard"},expression:"{ value: 'Copied to clipboard' }",modifiers:{focus:!0,top:!0}}],staticClass:"block-action-copy",attrs:{tabindex:0},on:{click:function(t){return e.copyCode(t)}}},[l("i",{staticClass:"pi pi-copy"})])])]),e._v(" "),l("div",{staticClass:"block-content"},[l("div",{staticClass:"card"},[l("div",{directives:[{name:"show",rawName:"v-show",value:e.blockView==e.BlockView.PREVIEW,expression:"blockView == BlockView.PREVIEW"}],class:e.containerClass,style:e.previewStyle},[e._t("default")],2),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:e.blockView===e.BlockView.CODE,expression:"blockView === BlockView.CODE"}]},[l("pre",{directives:[{name:"code",rawName:"v-code"}],staticStyle:{padding:"0"}},[l("code",[e._v(e._s(e.code))])])])])])])}),[],!1,null,"50ed3c6a",null);t.default=component.exports},751:function(e,t,l){"use strict";l(749)},752:function(e,t,l){var o=l(9)(!1);o.push([e.i,".card[data-v-50ed3c6a]{margin-bottom:0;border-radius:0}.block-section[data-v-50ed3c6a]{margin-bottom:1rem}.block-header[data-v-50ed3c6a]{padding:1rem 2rem;background-color:var(--surface-section);border-top-left-radius:12px;border-top-right-radius:12px;border:1px solid var(--surface-d);display:flex;align-items:center;justify-content:space-between}.block-header .block-title[data-v-50ed3c6a]{font-weight:700;display:inline-flex;align-items:center}.block-header .block-title .badge-free[data-v-50ed3c6a]{border-radius:4px;padding:.25rem .5rem;background-color:var(--orange-500);color:#fff;margin-left:1rem;font-weight:700;font-size:.875rem}.block-header .block-actions[data-v-50ed3c6a]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:1rem}.block-header .block-actions a[data-v-50ed3c6a]{display:flex;align-items:center;margin-right:.75rem;padding:.5rem 1rem;border-radius:4px;font-weight:600;border:1px solid transparent;transition:background-color .2s;cursor:pointer}.block-header .block-actions a[data-v-50ed3c6a]:last-child{margin-right:0}.block-header .block-actions a[data-v-50ed3c6a]:not(.block-action-disabled):hover{background-color:var(--surface-c)}.block-header .block-actions a.block-action-active[data-v-50ed3c6a]{border-color:var(--primary-color);color:var(--primary-color)}.block-header .block-actions a.block-action-copy i[data-v-50ed3c6a]{color:var(--primary-color);font-size:1.25rem}.block-header .block-actions a.block-action-disabled[data-v-50ed3c6a]{opacity:.6;cursor:auto!important}.block-header .block-actions a i[data-v-50ed3c6a]{margin-right:.5rem}.block-content[data-v-50ed3c6a]{padding:0;border:1px solid var(--surface-d);border-top:0;border-bottom-left-radius:12px;border-bottom-right-radius:12px}pre[class*=language-][data-v-50ed3c6a]{margin:0!important}pre[class*=language-][data-v-50ed3c6a]:after,pre[class*=language-][data-v-50ed3c6a]:before{display:none!important}pre[class*=language-] code[data-v-50ed3c6a]{border-left:0!important;box-shadow:none!important;background:var(--surface-e)!important;margin:0;color:var(--text-color);font-size:14px;padding:0 1rem!important}pre[class*=language-] code .token.attr-name[data-v-50ed3c6a],pre[class*=language-] code .token.attr-string[data-v-50ed3c6a],pre[class*=language-] code .token.keyword[data-v-50ed3c6a],pre[class*=language-] code .token.tag[data-v-50ed3c6a]{color:#2196f3!important}pre[class*=language-] code .token.attr-value[data-v-50ed3c6a]{color:#4caf50!important}pre[class*=language-] code .token.punctuation[data-v-50ed3c6a]{color:var(--text-color)}pre[class*=language-] code .token.operator[data-v-50ed3c6a],pre[class*=language-] code .token.string[data-v-50ed3c6a]{background:transparent}@media screen and (max-width:575px){.block-header[data-v-50ed3c6a]{flex-direction:column;align-items:start}.block-header .block-actions[data-v-50ed3c6a]{margin-top:1rem;margin-left:0}}",""]),e.exports=o},833:function(e,t,l){"use strict";l.r(t);var o={setup:function(e,t){return{code:'<div class="p-fluid">\n  <div class="field">\n    <label for="name1">Name</label>\n    <InputText id="name1" type="text" />\n  </div>\n\n  <div class="field">\n    <label for="email1">Email</label>\n    <InputText id="email1" type="text" />\n  </div>\n\n  <div class="field">\n    <label for="age1">Age</label>\n    <InputText id="age1" type="text" />\n  </div>\n</div>'}}},r=o,n=l(1),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BlockViewer",{attrs:{header:"Vertical [p-fluid]",code:e.code}},[l("div",{staticClass:"p-fluid"},[l("div",{staticClass:"field"},[l("label",{attrs:{for:"name1"}},[e._v("Name")]),e._v(" "),l("InputText",{attrs:{id:"name1",type:"text"}})],1),e._v(" "),l("div",{staticClass:"field"},[l("label",{attrs:{for:"email1"}},[e._v("Email")]),e._v(" "),l("InputText",{attrs:{id:"email1",type:"text"}})],1),e._v(" "),l("div",{staticClass:"field"},[l("label",{attrs:{for:"age1"}},[e._v("Age")]),e._v(" "),l("InputText",{attrs:{id:"age1",type:"text"}})],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:l(750).default})},834:function(e,t,l){"use strict";l.r(t);var o={setup:function(e,t){return{code:'<div class="formgrid grid p-fluid">\n  <div class="field col">\n    <label for="name2">Name</label>\n    <InputText id="name2" type="text" />\n  </div>\n\n  <div class="field col">\n    <label for="email2">Email</label>\n    <InputText id="email2" type="text" />\n  </div>\n</div>'}}},r=o,n=l(1),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BlockViewer",{attrs:{header:"Vertical Grid [formgrid grid]",code:e.code}},[l("div",{staticClass:"formgrid grid p-fluid"},[l("div",{staticClass:"field col"},[l("label",{attrs:{for:"name2"}},[e._v("Name")]),e._v(" "),l("InputText",{attrs:{id:"name2",type:"text"}})],1),e._v(" "),l("div",{staticClass:"field col"},[l("label",{attrs:{for:"email2"}},[e._v("Email")]),e._v(" "),l("InputText",{attrs:{id:"email2",type:"text"}})],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:l(750).default})},835:function(e,t,l){"use strict";l.r(t);var o={setup:function(e,t){return{code:'<div class="p-fluid">\n  <div class="field grid">\n    <label for="name3" class="col-12 mb-2 md:col-2 md:mb-0">Name</label>\n    <div class="col-12 md:col-10">\n      <InputText id="name3" type="text" />\n    </div>\n  </div>\n\n  <div class="field grid">\n    <label for="email3" class="col-12 mb-2 md:col-2 md:mb-0">Email</label>\n    <div class="col-12 md:col-10">\n      <InputText id="email3" type="text" />\n    </div>\n  </div>\n</div>'}}},r=o,n=l(1),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BlockViewer",{attrs:{header:"Horizontal [field grid]",code:e.code}},[l("div",{staticClass:"p-fluid"},[l("div",{staticClass:"field grid"},[l("label",{staticClass:"col-12 mb-2 md:col-2 md:mb-0",attrs:{for:"name3"}},[e._v("Name")]),e._v(" "),l("div",{staticClass:"col-12 md:col-10"},[l("InputText",{attrs:{id:"name3",type:"text"}})],1)]),e._v(" "),l("div",{staticClass:"field grid"},[l("label",{staticClass:"col-12 mb-2 md:col-2 md:mb-0",attrs:{for:"email3"}},[e._v("Email")]),e._v(" "),l("div",{staticClass:"col-12 md:col-10"},[l("InputText",{attrs:{id:"email3",type:"text"}})],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:l(750).default})},836:function(e,t,l){"use strict";l.r(t);var o={setup:function(e,t){return{code:'<div class="formgroup-inline">\n  <div class="field">\n    <label for="firstname1" class="p-sr-only">Firstname</label>\n    <InputText id="firstname1" type="text" placeholder="Firstname" />\n  </div>\n\n  <div class="field">\n    <label for="lastname1" class="p-sr-only">Lastname</label>\n    <InputText id="lastname1" type="text" placeholder="Lastname" />\n  </div>\n\n  <Button label="Submit" />\n</div>'}}},r=o,n=l(1),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BlockViewer",{attrs:{header:"Inline [formgroup-inline]",code:e.code}},[l("div",{staticClass:"formgroup-inline"},[l("div",{staticClass:"field"},[l("label",{staticClass:"p-sr-only",attrs:{for:"firstname1"}},[e._v("Firstname")]),e._v(" "),l("InputText",{attrs:{id:"firstname1",type:"text",placeholder:"Firstname"}})],1),e._v(" "),l("div",{staticClass:"field"},[l("label",{staticClass:"p-sr-only",attrs:{for:"lastname1"}},[e._v("Lastname")]),e._v(" "),l("InputText",{attrs:{id:"lastname1",type:"text",placeholder:"Lastname"}})],1),e._v(" "),l("Button",{attrs:{label:"Submit"}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:l(750).default})},837:function(e,t,l){"use strict";l.r(t);var o={setup:function(e,t){return{code:'<div class="p-fluid">\n  <div class="field">\n    <label for="username">Username</label>\n    <InputText id="username" type="text" />\n    <small>Enter your username to reset your password.</small>\n  </div>\n</div>'}}},r=o,n=l(1),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BlockViewer",{attrs:{header:"Help Text [id= 'username']",code:e.code}},[l("div",{staticClass:"p-fluid"},[l("div",{staticClass:"field"},[l("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),l("InputText",{attrs:{id:"username",type:"text"}}),e._v(" "),l("small",[e._v("Enter your username to reset your password.")])],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:l(750).default})},838:function(e,t,l){"use strict";l.r(t);var o={setup:function(e,t){return{code:'<div class="p-fluid formgrid grid">\n  <div class="field col-12 md:col-6">\n    <label for="firstname2">Firstname</label>\n    <InputText id="firstname2" type="text" placeholder="field col-12 md:col-6" />\n  </div>\n\n  <div class="field col-12 md:col-6">\n    <label for="lastname2">Lastname</label>\n    <InputText id="lastname2" type="text" placeholder="field col-12 md:col-6" />\n  </div>\n\n  <div class="field col-12">\n    <label for="address">Address</label>\n    <Textarea id="address" rows="4" placeholder="field col-12" />\n  </div>\n\n  <div class="field col-12 md:col-6">\n    <label for="city">City</label>\n    <InputText id="city" type="text" placeholder="field col-12 md:col-6" />\n  </div>\n\n  <div class="field col-12 md:col-3">\n    <label for="state">State</label>\n    <InputText id="state" type="text" placeholder="field col-12 md:col-3" />\n  </div>\n\n  <div class="field col-12 md:col-3">\n    <label for="zip">Zip</label>\n    <InputText id="zip" type="text" placeholder="field col-12 md:col-3" />\n  </div>\n</div>'}}},r=o,n=l(1),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BlockViewer",{attrs:{header:"Advanced [formgrid grid]",code:e.code}},[l("div",{staticClass:"p-fluid formgrid grid"},[l("div",{staticClass:"field col-12 md:col-6"},[l("label",{attrs:{for:"firstname2"}},[e._v("Firstname")]),e._v(" "),l("InputText",{attrs:{id:"firstname2",type:"text",placeholder:"field col-12 md:col-6"}})],1),e._v(" "),l("div",{staticClass:"field col-12 md:col-6"},[l("label",{attrs:{for:"lastname2"}},[e._v("Lastname")]),e._v(" "),l("InputText",{attrs:{id:"lastname2",type:"text",placeholder:"field col-12 md:col-6"}})],1),e._v(" "),l("div",{staticClass:"field col-12"},[l("label",{attrs:{for:"address"}},[e._v("Address")]),e._v(" "),l("Textarea",{attrs:{id:"address",rows:"4",placeholder:"field col-12"}})],1),e._v(" "),l("div",{staticClass:"field col-12 md:col-6"},[l("label",{attrs:{for:"city"}},[e._v("City")]),e._v(" "),l("InputText",{attrs:{id:"city",type:"text",placeholder:"field col-12 md:col-6"}})],1),e._v(" "),l("div",{staticClass:"field col-12 md:col-3"},[l("label",{attrs:{for:"state"}},[e._v("State")]),e._v(" "),l("InputText",{attrs:{id:"state",type:"text",placeholder:"field col-12 md:col-3"}})],1),e._v(" "),l("div",{staticClass:"field col-12 md:col-3"},[l("label",{attrs:{for:"zip"}},[e._v("Zip")]),e._v(" "),l("InputText",{attrs:{id:"zip",type:"text",placeholder:"field col-12 md:col-3"}})],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlockViewer:l(750).default})},994:function(e,t,l){"use strict";l.r(t);var o=l(1),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"grid"},[l("div",{staticClass:"col-12 md:col-6"},[l("FormLayoutVerticalComponent"),e._v(" "),l("FormLayoutVerticalGridComponent")],1),e._v(" "),l("div",{staticClass:"col-12 md:col-6"},[l("FormLayoutHorizontalComponent"),e._v(" "),l("FormLayoutInlineComponent"),e._v(" "),l("FormLayoutHelpTextComponent")],1),e._v(" "),l("div",{staticClass:"col-12"},[l("FormLayoutAdvanceComponent")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormLayoutVerticalComponent:l(833).default,FormLayoutVerticalGridComponent:l(834).default,FormLayoutHorizontalComponent:l(835).default,FormLayoutInlineComponent:l(836).default,FormLayoutHelpTextComponent:l(837).default,FormLayoutAdvanceComponent:l(838).default})}}]);