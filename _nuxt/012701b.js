(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{771:function(t,e,n){"use strict";n.r(e);n(30);var o=n(125),l={};l.setup=function(t,e){var n=Object(o.e)(!1),l=Object(o.e)(null),c=function(){var t=Object(o.e)(window.innerHeight),e=Object(o.e)(window.innerWidth);return window.addEventListener("resize",(function(){t.value=window.innerHeight,e.value=window.innerWidth})),{windowHeight:t,windowWidth:e}}(),r=c.windowWidth;return Object.assign({showDetailDialog:n,detail:l,windowWidth:r},{showDetail:function(marker){n.value=!0,l.value=marker.name}})};var c=l,r=n(1),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{style:{width:7*t.windowWidth/8+"px","max-width":"700px"},attrs:{visible:t.showDetailDialog,header:"Detail",modal:!0,"dismissable-mask":!0},on:{"update:visible":function(e){t.showDetailDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("Button",{staticClass:"p-button-text",attrs:{label:"Close",icon:"pi pi-times",autofocus:""},on:{click:function(e){t.showDetailDialog=!1}}})]},proxy:!0}])},[n("div",{staticClass:"flex align-items-center justify-content-center"},[n("i",{staticClass:"pi pi-exclamation-triangle mr-3",staticStyle:{"font-size":"2rem"}}),t._v(" "),n("span",[t._v(t._s(t.detail))])])])}),[],!1,null,null,null);e.default=component.exports}}]);