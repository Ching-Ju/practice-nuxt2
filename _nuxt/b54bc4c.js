(window.webpackJsonp=window.webpackJsonp||[]).push([[88,22],{753:function(t,e,d){"use strict";d.r(e);d(125);var r={};r.props={cardTitle:{type:String,default:""}},r.setup=function(t,e){return{}};var c=r,o=d(1),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"card"},[d("div",{staticClass:"flex justify-content-between align-items-center mb-2"},[d("h5",[t._v(t._s(t.cardTitle))]),t._v(" "),d("div",[t._t("cardButton")],2)]),t._v(" "),t._t("cardBody")],2)}),[],!1,null,null,null);e.default=component.exports},766:function(t,e,d){var content=d(791);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(10).default)("5f0435bd",content,!0,{sourceMap:!1})},790:function(t,e,d){"use strict";d(766)},791:function(t,e,d){var r=d(9)(!1);r.push([t.i,".customer-badge[data-v-24cdd15c],.order-badge[data-v-24cdd15c],.product-badge[data-v-24cdd15c]{border-radius:var(--border-radius);padding:.25em .5rem;text-transform:uppercase;font-weight:700;font-size:12px;letter-spacing:.3px}.customer-badge.status-qualified[data-v-24cdd15c]{background:#c8e6c9;color:#256029}.customer-badge.status-unqualified[data-v-24cdd15c]{background:#ffcdd2;color:#c63737}.customer-badge.status-negotiation[data-v-24cdd15c]{background:#feedaf;color:#8a5340}.customer-badge.status-new[data-v-24cdd15c]{background:#b3e5fc;color:#23547b}.customer-badge.status-renewal[data-v-24cdd15c]{background:#eccfff;color:#694382}.customer-badge.status-proposal[data-v-24cdd15c]{background:#ffd8b2;color:#805b36}.product-badge[data-v-24cdd15c]{border-radius:var(--border-radius);padding:.25em .5rem;text-transform:uppercase;font-weight:700;font-size:12px;letter-spacing:.3px}.product-badge.status-instock[data-v-24cdd15c]{background:#c8e6c9;color:#256029}.product-badge.status-outofstock[data-v-24cdd15c]{background:#ffcdd2;color:#c63737}.product-badge.status-lowstock[data-v-24cdd15c]{background:#feedaf;color:#8a5340}.order-badge[data-v-24cdd15c]{border-radius:var(--border-radius);padding:.25em .5rem;text-transform:uppercase;font-weight:700;font-size:12px;letter-spacing:.3px}.order-badge.order-delivered[data-v-24cdd15c]{background:#c8e6c9;color:#256029}.order-badge.order-cancelled[data-v-24cdd15c]{background:#ffcdd2;color:#c63737}.order-badge.order-pending[data-v-24cdd15c]{background:#feedaf;color:#8a5340}.order-badge.order-returned[data-v-24cdd15c]{background:#eccfff;color:#694382}.product-item .product-item-content[data-v-24cdd15c]{border:1px solid var(--surface-d);border-radius:3px;margin:.3rem;text-align:center;padding:2rem 0}.product-item .product-image[data-v-24cdd15c]{width:50%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}",""]),t.exports=r},868:function(t,e,d){"use strict";d.r(e);var r={setup:function(t,e){return{carouselResponsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]}}},c=r,o=(d(790),d(1)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("card-style2-component",{attrs:{"card-title":"Carousel"},scopedSlots:t._u([{key:"cardBody",fn:function(){return[d("Carousel",{attrs:{value:t.$store.state.product.products,"num-visible":3,"num-scroll":3,circular:!0,"responsive-options":t.carouselResponsiveOptions},scopedSlots:t._u([{key:"item",fn:function(e){return[d("div",{staticClass:"product-item"},[d("div",{staticClass:"product-item-content"},[d("div",{staticClass:"mb-3"},[d("img",{staticClass:"product-image",attrs:{src:"images/product/"+e.data.image,alt:e.data.name}})]),t._v(" "),d("div",[d("h4",{staticClass:"mb-1"},[t._v("\n                "+t._s(e.data.name)+"\n              ")]),t._v(" "),d("h6",{staticClass:"mt-0 mb-3"},[t._v("\n                $"+t._s(e.data.price)+"\n              ")]),t._v(" "),d("span",{class:"product-badge status-"+e.data.inventoryStatus.toLowerCase()},[t._v(t._s(e.data.inventoryStatus))]),t._v(" "),d("div",{staticClass:"car-buttons mt-5"},[d("Button",{staticClass:"p-button p-button-rounded mr-2",attrs:{type:"button",icon:"pi pi-search"}}),t._v(" "),d("Button",{staticClass:"p-button-success p-button-rounded mr-2",attrs:{type:"button",icon:"pi pi-star-fill"}}),t._v(" "),d("Button",{staticClass:"p-button-help p-button-rounded",attrs:{type:"button",icon:"pi pi-cog"}})],1)])])])]}}])})]},proxy:!0}])})}),[],!1,null,"24cdd15c",null);e.default=component.exports;installComponents(component,{CardStyle2Component:d(753).default})}}]);