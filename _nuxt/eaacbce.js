(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{473:function(t,e,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("6b60cd2a",content,!0,{sourceMap:!1})},474:function(t,e,n){var map={"./contatti.jpeg":475,"./faq.jpeg":476,"./index.jpeg":477,"./referenze.jpeg":478,"./servizi.jpeg":479,"./staff.jpeg":480};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=474},475:function(t,e,n){t.exports=n.p+"img/contatti.6c532b7.jpeg"},476:function(t,e,n){t.exports=n.p+"img/faq.9d8bcef.jpeg"},477:function(t,e,n){t.exports=n.p+"img/index.9a940cb.jpeg"},478:function(t,e,n){t.exports=n.p+"img/referenze.02bed13.jpeg"},479:function(t,e,n){t.exports=n.p+"img/servizi.9806e2e.jpeg"},480:function(t,e,n){t.exports=n.p+"img/staff.f6c075f.jpeg"},481:function(t,e,n){"use strict";n(473)},482:function(t,e,n){var r=n(16)(!1);r.push([t.i,"#hero-alt .v-breadcrumbs__item{color:#fff}",""]),t.exports=r},483:function(t,e,n){"use strict";n.r(e);n(27);var r=n(71),o={name:"SectionHeroAlt",props:{title:String},data:function(){return{metaTitle:""}},metaInfo:function(){var t=this;return{changed:function(meta){return t.metaTitle=meta.titleChunk.toUpperCase()}}},provide:{heading:{align:"center"}},computed:{gradient:function(){var t="".concat(this.$vuetify.theme.themes.light.secondary,"CC"),e=Object(r.b)(Object(r.a)(t));return"to top, ".concat(e,", ").concat(e)},src:function(){return this.$route.meta.src},items:function(){return[{text:"HOME",to:"/"},{text:this.title}]}}},c=(n(481),n(13)),l=n(21),f=n.n(l),d=n(463),v=n(464),m=n(461),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-theme-provider",{attrs:{dark:""}},[r("section",{attrs:{id:"hero-alt"}},[r("base-img",{attrs:{height:t.$vuetify.breakpoint.mdAndUp?350:225,gradient:t.gradient,src:n(474)("./"+t.$route.name+".jpeg"),color:"#45516b",flat:"","max-width":"100%",tile:""}},[t.title?r("v-row",{staticClass:"ma-0 fill-height text-center",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("base-heading",{attrs:{title:t.title.toUpperCase(),space:"2",weight:"500"}}),t._v(" "),r("base-divider",{attrs:{color:"primary",dense:""}})],1)],1):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{BaseHeading:n(126).default,BaseDivider:n(225).default,BaseImg:n(184).default}),f()(component,{VCol:d.a,VRow:v.a,VThemeProvider:m.a})},490:function(t,e,n){t.exports=n.p+"img/mappa.24edce6.jpg"},491:function(t,e,n){"use strict";n.r(e);var r={metaInfo:{title:"Contatti"},data:function(){return{title:"Contatti"}}},o=n(13),c=n(21),l=n.n(c),f=n(463),d=n(472),v=n(462),m=n(464),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section-hero-alt",{attrs:{title:t.title}}),t._v(" "),r("v-container",{staticClass:"pa-12",attrs:{fluid:t.$vuetify.breakpoint.mdAndDown}},[t.$vuetify.breakpoint.mdAndUp?r("div",[r("base-title",{staticClass:"text-uppercase"},[t._v("Resta in contatto con noi")]),t._v(" "),r("base-divider",{attrs:{color:"primary"}})],1):t._e(),t._v(" "),r("v-row",[r("v-col",{staticClass:"d-flex flex-column justify-center",attrs:{cols:t.$vuetify.breakpoint.mdAndUp?5:12}},[r("base-business-contact",{attrs:{dark:!1}})],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"2"}},[r("v-divider",{attrs:{vertical:""}})],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:t.$vuetify.breakpoint.mdAndUp?5:12}},[r("base-img",{attrs:{src:n(490),"min-width":"min(300px, 70vw)","max-height":"500px",contain:""}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{SectionHeroAlt:n(483).default,BaseTitle:n(147).default,BaseDivider:n(225).default,BaseBusinessContact:n(302).default,BaseImg:n(184).default}),l()(component,{VCol:f.a,VContainer:d.a,VDivider:v.a,VRow:m.a})}}]);