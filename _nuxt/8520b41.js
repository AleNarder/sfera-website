(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{473:function(e,t,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("6b60cd2a",content,!0,{sourceMap:!1})},474:function(e,t,r){var map={"./contatti.jpeg":475,"./faq.jpeg":476,"./index.jpeg":477,"./referenze.jpeg":478,"./servizi.jpeg":479,"./staff.jpeg":480};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=474},475:function(e,t,r){e.exports=r.p+"img/contatti.6c532b7.jpeg"},476:function(e,t,r){e.exports=r.p+"img/faq.9d8bcef.jpeg"},477:function(e,t,r){e.exports=r.p+"img/index.9a940cb.jpeg"},478:function(e,t,r){e.exports=r.p+"img/referenze.02bed13.jpeg"},479:function(e,t,r){e.exports=r.p+"img/servizi.9806e2e.jpeg"},480:function(e,t,r){e.exports=r.p+"img/staff.f6c075f.jpeg"},481:function(e,t,r){"use strict";r(473)},482:function(e,t,r){var n=r(16)(!1);n.push([e.i,"#hero-alt .v-breadcrumbs__item{color:#fff}",""]),e.exports=n},483:function(e,t,r){"use strict";r.r(t);r(27);var n=r(71),o={name:"SectionHeroAlt",props:{title:String},data:function(){return{metaTitle:""}},metaInfo:function(){var e=this;return{changed:function(meta){return e.metaTitle=meta.titleChunk.toUpperCase()}}},provide:{heading:{align:"center"}},computed:{gradient:function(){var e="".concat(this.$vuetify.theme.themes.light.secondary,"CC"),t=Object(n.b)(Object(n.a)(e));return"to top, ".concat(t,", ").concat(t)},src:function(){return this.$route.meta.src},items:function(){return[{text:"HOME",to:"/"},{text:this.title}]}}},c=(r(481),r(13)),f=r(21),l=r.n(f),d=r(463),m=r(464),h=r(461),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-theme-provider",{attrs:{dark:""}},[n("section",{attrs:{id:"hero-alt"}},[n("base-img",{attrs:{height:e.$vuetify.breakpoint.mdAndUp?350:225,gradient:e.gradient,src:r(474)("./"+e.$route.name+".jpeg"),color:"#45516b",flat:"","max-width":"100%",tile:""}},[e.title?n("v-row",{staticClass:"ma-0 fill-height text-center",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("base-heading",{attrs:{title:e.title.toUpperCase(),space:"2",weight:"500"}}),e._v(" "),n("base-divider",{attrs:{color:"primary",dense:""}})],1)],1):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;l()(component,{BaseHeading:r(126).default,BaseDivider:r(225).default,BaseImg:r(184).default}),l()(component,{VCol:d.a,VRow:m.a,VThemeProvider:h.a})}}]);