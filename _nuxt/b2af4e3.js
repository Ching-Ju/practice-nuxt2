(window.webpackJsonp=window.webpackJsonp||[]).push([[38,22],{753:function(t,e,n){"use strict";n.r(e);n(125);var r={};r.props={cardTitle:{type:String,default:""}},r.setup=function(t,e){return{}};var l=r,o=n(1),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"flex justify-content-between align-items-center mb-2"},[n("h5",[t._v(t._s(t.cardTitle))]),t._v(" "),n("div",[t._t("cardButton")],2)]),t._v(" "),t._t("cardBody")],2)}),[],!1,null,null,null);e.default=component.exports},911:function(t,e,n){"use strict";n.r(e);var r=n(125),l={setup:function(t,e){return{lineData:Object(r.d)({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Revenue",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Sales",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]})}}},o=l,c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-style2-component",{attrs:{"card-title":"Sales Overview"},scopedSlots:t._u([{key:"cardBody",fn:function(){return[n("Chart",{attrs:{type:"line",data:t.lineData,options:t.$store.getters["appState/lineOptions"]}})]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardStyle2Component:n(753).default})}}]);