"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[4913],{773:function(e,r,n){n.r(r),n.d(r,{getBase64FontFace:function(){return o}});var t=n(3433),a=n(5861),u=n(7757),c=n.n(u),s=function(e){return new Promise((function(r){var n=new FileReader;n.onloadend=function(){return r(n.result)},n.readAsDataURL(e)}))},o=function(){var e=(0,a.Z)(c().mark((function e(r){var n,u,o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.from(new Set([].concat((0,t.Z)(r.querySelectorAll(".rmg-name__zh")),(0,t.Z)(r.querySelectorAll(".rmg-name__en"))).map((function(e){return e.innerHTML})).join("").replace(/[\s]/g,""))).join(""),e.next=3,document.fonts.load("80px GenYoMin TW, Vegur",n);case 3:return u=e.sent,o=Array.from(document.querySelector("link#css_share").sheet.cssRules[0].styleSheet.cssRules),i=u.reduce((function(e,r){var n,t=(n=r,o.find((function(e){var r=e.style;return r.fontFamily.replace(/^"(.+)"$/,"$1")===n.family&&r.unicodeRange===n.unicodeRange})));return t?e.find((function(e){var r=e.style,n=t.style;return r.fontFamily===n.fontFamily&&r.unicodeRange===n.unicodeRange}))?e:e.concat(t):e}),[]),e.next=8,Promise.all(i.map(function(){var e=(0,a.Z)(c().mark((function e(r){var n,t,a,u,o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=r.style.src,a=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),u=a?t.replace(/^url\(([\S]+)\).*$/,"$1"):"/uat-rail-map-generator/styles/"+(null===(n=t.match(/^url\("([\S*]+)"\)/))||void 0===n?void 0:n[1]),e.next=6,fetch(u);case 6:return o=e.sent,e.t0=s,e.next=10,o.blob();case 10:return e.t1=e.sent,e.next=13,(0,e.t0)(e.t1);case 13:return i=e.sent,e.abrupt("return",r.cssText.replace(/src:[ \w('",\-:/.)]+;/g,"src: url('".concat(i,"'); ")));case 17:return e.prev=17,e.t2=e.catch(0),console.error(e.t2),e.abrupt("return","");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=panelPreviewMTR.a81a5869.chunk.js.map