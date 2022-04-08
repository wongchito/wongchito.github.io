"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[4822],{7656:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(1413),a=e(9439),s=e(5987),i=e(2791),c=e(184),o=(0,i.memo)((function(n){var t=n.passed,e=n.large?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return(0,c.jsx)("path",{d:e,fill:"#fff",strokeWidth:2,stroke:t?"#aaa":"var(--rmg-theme-colour)"})}),(function(n,t){return n.passed===t.passed&&n.large===t.large})),l=["lineNum","stnNum","passed","large"];function u(n){var t=n.lineNum,e=n.stnNum,u=n.passed,h=n.large,d=(0,s.Z)(n,l),f=(0,i.useRef)(null),m=(0,i.useRef)(null),g=(0,i.useState)({width:0}),x=(0,a.Z)(g,2),p=x[0],j=x[1],v=(0,i.useState)({width:0}),S=(0,a.Z)(v,2),y=S[0],_=S[1];(0,i.useEffect)((function(){j(f.current.getBBox()),_(m.current.getBBox())}),[t,e]);var Z=15/Math.max(15,p.width),z=2===t.length&&2===e.length?Z:15/Math.max(15,y.width);return(0,c.jsxs)("g",(0,r.Z)((0,r.Z)({},d),{},{children:[(0,c.jsx)(o,{passed:u,large:h}),(0,c.jsxs)("g",{textAnchor:"middle",fontSize:13.5,transform:h?"scale(1.4)":"",fill:u?"#aaa":"#000",children:[(0,c.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(Z,")"),children:(0,c.jsx)("text",{ref:f,className:"rmg-name__zh",children:t})}),(0,c.jsx)("g",{transform:"translate(9.25,0)scale(".concat(z,")"),children:(0,c.jsx)("text",{ref:m,className:"rmg-name__zh",children:e})})]})]}))}},3824:function(n,t,e){e.d(t,{Az:function(){return h},QE:function(){return d},ML:function(){return f},h6:function(){return m},LD:function(){return g},pS:function(){return x}});var r=e(9439),a=e(5671),s=e(3144),i=e(3433),c=e(7762),o=e(4942),l=e(1413),u=e(713),h=function(n,t,e){return Object.keys(n).reduce((function(r,a){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},a,n[a].children.reduce((function(r,s){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},s,1+t(n,s)+e(n,a)))}),{})))}),{})},d=function n(t,e,r){if(t===e)return{len:0,nodes:[t]};var a=[],s=[];Object.keys(r[t]).forEach((function(i){var c=n(i,e,r);c.len<0||(a.push(r[t][i]+c.len),c.nodes.unshift(t),s.push(c.nodes))}));var i=Math.max.apply(Math,a);return{len:i,nodes:s[a.indexOf(i)]}},f=function(n,t,e){var r=d("linestart","lineend",t);if(r.nodes.includes(n))return d(r.nodes[1],n,t).len;for(var a=e.filter((function(t){return t.includes(n)}))[0],s=n;!r.nodes.includes(s);)s=a[a.indexOf(s)-1];for(var i=n;!r.nodes.includes(i);)i=a[a.indexOf(i)+1];var c="linestart"===s,o=[];return c||"lineend"===i?c?(o[0]=0,o[1]=d(r.nodes[1],i,t).len,o[2]=d(a[1],n,t).len,o[3]=d(n,i,t).len):(o[0]=d(r.nodes[1],s,t).len,o[1]=d(s,r.nodes.slice(-2)[0],t).len,o[2]=d(s,n,t).len,o[3]=d(n,a.slice(-2)[0],t).len):(o[0]=d(r.nodes[1],s,t).len,o[1]=d(s,i,t).len,o[2]=d(s,n,t).len,o[3]=d(n,i,t).len),o[0]+o[2]*o[1]/(o[2]+o[3])},m=function(n,t,e){var r;return console.log("computing stations' states"),(0,i.Z)(new Set((r=[]).concat.apply(r,(0,i.Z)(t)))).reduce((function(r,a){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},a,a===n?0:(e===u.wA.right?function(n,t,e){var r,a=(0,c.Z)(e);try{for(a.s();!(r=a.n()).done;){var s=r.value,i=s.indexOf(n),o=s.indexOf(t);if(-1!==i&&i<o)return!0}}catch(l){a.e(l)}finally{a.f()}return!1}(n,a,t):function(n,t,e){var r,a=(0,c.Z)(e);try{for(a.s();!(r=a.n()).done;){var s=r.value,i=s.indexOf(n),o=s.indexOf(t);if(-1!==o&&o<i)return!0}}catch(l){a.e(l)}finally{a.f()}return!1}(n,a,t))?1:-1))}),{})},g=function(){function n(t){var e=this;(0,a.Z)(this,n),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(n){return 0},this.rightWideFactor=function(n){return 0},this.pathWeight=function(n,t){return e.stnList[n].children.includes(t)?1+e.rightWideFactor(n)+e.leftWideFactor(t):-1/0},this.pathTurnParams=function(n){var t=35-17.5*Math.sqrt(3),e=n-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(n){var t=e.pathTurnParams(n),r=t.tr,a=t.dx_a,s=t.dy_a,i=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(a,",").concat(s," l ").concat(i,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(a,",").concat(s)},this.pathTurnNE=function(n){var t=e.pathTurnParams(n),r=t.tr,a=t.dx_a,s=t.dy_a,i=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(a,",").concat(-s," l ").concat(i,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(a,",").concat(-s)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return(0,s.Z)(n,[{key:"getYShare",value:function(n,t){if(n in this.yShares)return this.yShares[n];if(["linestart","lineend"].includes(n)||this.stnList[n].parents.length>1||this.stnList[n].children.length>1)return this.yShares[n]=0,0;var e=this.stnList[n].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[n]=r,r}var a=0===this.stnList[e].children.indexOf(n)?1:-1;return this.yShares[n]=a,a}return this.yShares[n]=0,0}},{key:"_linePath",value:function(n,t,e,a,s,i,c,o){var l=this,u=(0,r.Z)([],3),h=u[0],d=u[1],f=u[2],m=[],g=this.pathTurnParams(i),x=g.dx_a+g.dx_l/2,p=(t[1]-t[0])/c.len*2,j=((t[1]-t[0])/c.len-2*x)/2;return j+p<0&&console.warn("SVG width too small! ".concat(j+p)),n.forEach((function(t){var r=a[t],c=s[t];if(!d&&0!==d)return h=t,f=r,d=c,void(1===n.length?m.push("M ".concat(r,",").concat(c)):e[0].includes(t)?e[0].includes(n[1])?m.push("M ".concat(r,",").concat(c)):(a[n[1]]>0&&m.push("M ".concat(r,",").concat(c+o)),s[n[1]]<0&&m.push("M ".concat(r,",").concat(c-o))):m.push("M ".concat(r,",").concat(c)));c>d?(m.push("h ".concat(0===c?r-f-p*l.leftWideFactor(t)-j-2*x:p*l.rightWideFactor(h)+j)),m.push(l.pathTurnSE(i))):c<d&&(m.push("h ".concat(0===c?r-f-p*l.leftWideFactor(t)-j-2*x:p*l.rightWideFactor(h)+j)),m.push(l.pathTurnNE(i))),m.push("H ".concat(r)),h=t,f=r,d=c})),m.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(n,t){console.log("computing y shares");var e=new this({stnList:n});return Object.keys(n).forEach((function(n){["linestart","lineend"].includes(n)||n in e.yShares||e.getYShare(n,t)})),e.yShares}},{key:"drawLine",value:function(n,t,e,r,a,s,i,c){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return n.forEach((function(h,d){var f=(h=h.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),m=h.filter((function(n){return t[n]<=0}));1===f.length&&(m=h),0===f.filter((function(n){return-1!==m.indexOf(n)})).length&&f.length&&(m[0]===h[0]?m.push(f[0]):f[0]===h[0]&&f[f.length-1]===h[h.length-1]&&m.length?(m=h,f=[]):m.unshift(f[f.length-1])),u.main.push(new o({stnList:e,criticalPath:c})._linePath(f,r,n,a,s,i,c,l)),u.pass.push(new o({stnList:e,criticalPath:c})._linePath(m,r,n,a,s,i,c,l))})),u}}]),n}(),x=function(n,t){var e={main:[],pass:[]};return n.forEach((function(n){var r=(n=n.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),a=n.filter((function(n){return t[n]<=0}));1===r.length&&(a=n),0===r.filter((function(n){return-1!==a.indexOf(n)})).length&&r.length&&(a[0]===n[0]?a.push(r[0]):r[0]===n[0]&&r[r.length-1]===n[n.length-1]&&a.length?(a=n,r=[]):a.unshift(r[r.length-1])),e.main.push(r),e.pass.push(a)})),e}},5951:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r=e(9439),a=e(5987),s=e(1413),i=e(4942),c=e(3433),o=e(2791),l=e(6541),u=e(7656),h=e(713),d=e(6169),f=e(184),m=(0,o.memo)((function(n){var t=n.lineName,e=n.commonPart,a=(0,o.useRef)(null),s=(0,o.useState)({x:0,height:0,width:0}),i=(0,r.Z)(s,2),c=i[0],l=i[1];(0,o.useEffect)((function(){a.current&&l(a.current.getBBox())}),[t.toString()]);var u=x/Math.max(x,c.width),h=(-c.x-c.width/2)*u,d=c.height*(1-u)*1.2/2;return(0,f.jsx)("g",{ref:a,transform:"translate(".concat(h,",").concat(d,")scale(").concat(u,")"),children:(0,f.jsxs)("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[e,(0,f.jsx)("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t[0].slice(e.length).trim()}),(0,f.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t[1].slice(e.length).trim()})]})})}),(function(n,t){return n.lineName.toString()===t.lineName.toString()}));function g(n){return(0,f.jsx)("rect",(0,s.Z)({x:-22.5,height:24,width:45,rx:4.5},n))}var x=42,p=(0,o.memo)((function(n){var t=n.lineName,e=n.foregroundColour,a=n.backgroundColour,s=n.passed,i=j(t),c=(0,r.Z)(i,2),l=c[0],u=c[1],d=(0,o.useRef)(null),p=(0,o.useRef)(null),S=(0,o.useState)({width:0}),y=(0,r.Z)(S,2),_=y[0],Z=y[1],z=(0,o.useState)({width:0}),w=(0,r.Z)(z,2),N=w[0],k=w[1];(0,o.useEffect)((function(){d.current&&Z(d.current.getBBox()),p.current&&k(p.current.getBBox())}),[t.toString()]);var E=x/Math.max(x,_.width),M=x/Math.max(x,N.width);return(0,f.jsxs)("g",{textAnchor:"middle",fill:s?h.AJ.white:e,children:[(0,f.jsx)(g,{fill:s?"#aaa":a}),2===l?(0,f.jsx)(m,{lineName:t,commonPart:u}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("text",{ref:d,y:v(l,"zh",E),className:"rmg-name__zh",fontSize:12,transform:"scale(".concat(E,")"),children:1===l?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:u}),(0,f.jsx)("tspan",{dy:-.7,className:"rmg-name__zh",children:t[0].slice(u.length)})]}):t[0]}),(0,f.jsx)("text",{ref:p,y:v(l,"en",M),className:"rmg-name__en",fontSize:8,transform:"scale(".concat(M,")"),children:t[1]})]})]})}),(function(n,t){return n.lineName.toString()===t.lineName.toString()&&n.foregroundColour===t.foregroundColour&&n.backgroundColour===t.backgroundColour&&n.passed===t.passed})),j=function(n){var t=n[0].match(/^(\d+)\D+$/);if(t)return[1,t[1]];var e=n.map((function(n){return n.match(/^([\w\d]+).+$/)}));return e[0]&&e[1]&&e[0][1]===e[1][1]?[2,e[0][1]]:[3,""]},v=function(n,t,e){switch(n){case 1:return("zh"===t?7.3:19.5)*(2-e);case 2:return 0;case 3:return"zh"===t?8*(2-e):19.5+47.53125*(1-e)-(1===e?0:5.5)}},S=(0,o.memo)((function(n){var t=n.stnName,e=n.onUpdate,r=(0,o.useRef)(null);return(0,o.useEffect)((function(){e&&e(r.current.getBBox())}),[t.toString()]),(0,f.jsxs)("g",{ref:r,children:[(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),(0,f.jsx)("g",{fontSize:10.5,children:t[1].split("\\").map((function(n,t){return(0,f.jsx)("text",{className:"rmg-name__en",dy:16+11*t,children:n},t)}))})]})}),(function(n,t){return n.stnName.toString()===t.stnName.toString()})),y=["stnName","onUpdate","passed"];function _(n){var t=n.stnName,e=n.onUpdate,i=n.passed,c=(0,a.Z)(n,y),l=(0,o.useRef)(null),u=(0,o.useState)({x:0,width:0}),h=(0,r.Z)(u,2),d=h[0],m=h[1];return(0,o.useEffect)((function(){var n=l.current.getBBox();m(n),e&&e(n)}),[t.toString()]),(0,f.jsxs)("g",(0,s.Z)((0,s.Z)({fill:i?"#aaa":"#000"},c),{},{children:[(0,f.jsxs)("g",{transform:"translate(0,3)",fontSize:18,children:[(0,f.jsx)("text",{textAnchor:"end",x:d.x-3,className:"rmg-name__zh",children:"("}),(0,f.jsx)("text",{textAnchor:"start",x:d.width+d.x+3,className:"rmg-name__zh",children:")"})]}),(0,f.jsxs)("g",{ref:l,textAnchor:"middle",children:[(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:t[0]}),(0,f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:t[1]})]})]}))}var Z=["passed"];function z(n){var t=n.passed,e=(0,a.Z)(n,Z);return(0,f.jsxs)("g",(0,s.Z)((0,s.Z)({textAnchor:"middle",fill:t?"#aaa":"var(--rmg-theme-colour)"},e),{},{children:[(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:"\u5feb\u8f66\u505c\u9760\u7ad9"}),(0,f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))}function w(n){var t=n.primaryName,e=n.secondaryName,a=n.stationState,s=n.flipped,i=n.express,c=(0,o.useState)({width:0}),l=(0,r.Z)(c,2),u=l[0],d=l[1],m=(0,o.useState)({x:0,width:-20}),g=(0,r.Z)(m,2),x=g[0],p=g[1],j=t[1].split("\\").length,v={g:{x:0,y:s?17.5:-20-14*j*Math.cos(-45)},StationSecondaryName:{x:(u.width+x.width/2+10)*(s?-1:1),y:2+5*(j-1)},ExpressTag:{x:(u.width+x.width+20+35)*(s?-1:1),y:2+5*(j-1)}};return(0,f.jsxs)("g",{textAnchor:s?"end":"start",fill:function(n){switch(n){case h.KR.PASSED:return"#aaa";case h.KR.CURRENT:return"#f00";case h.KR.FUTURE:return"#000"}}(a),transform:"translate(".concat(v.g.x,",").concat(v.g.y,")rotate(-45)"),children:[(0,f.jsx)(S,{stnName:t,onUpdate:d}),e&&(0,f.jsx)(_,{stnName:e,onUpdate:p,passed:a===h.KR.PASSED,transform:"translate(".concat(v.StationSecondaryName.x,",").concat(v.StationSecondaryName.y,")")}),i&&(0,f.jsx)(z,{passed:a===h.KR.PASSED,transform:"translate(".concat(v.ExpressTag.x,",").concat(v.ExpressTag.y,")")})]})}var N=["intInfos","stnState","tickRotation"],k=["intInfos","tickRotation","stnState"],E=function(n){var t=n.stnId,e=n.stnState,r=n.stnY,a=(0,d.CG)((function(n){return n.param.theme})),s=(0,d.CG)((function(n){return n.param.line_name})),i=(0,d.CG)((function(n){return n.param.line_num})),o=(0,d.CG)((function(n){return n.param.stn_list[t]})),l=2===o.parents.length||2===o.children.length,m=r>0||1===o.parents.indexOf(o.branch.left[1]||"")||1===o.children.indexOf(o.branch.right[1]||"")?180:0,g=o.name[1].split("\\").length,x=l?180===m?16+12*(g-1)*Math.cos(-45):-9:180===m?-6:(25+15*(g-1))*Math.cos(-45);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M,{intInfos:l?[[a[0],a[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"].concat((0,c.Z)(s))].concat(o.transfer.info[0]):o.transfer.info[0],stnState:e,tickRotation:m}),(0,f.jsx)(u.Z,{lineNum:i,stnNum:o.num,passed:-1===e}),(0,f.jsx)("g",{transform:"translate(".concat(-x,",0)"),children:(0,f.jsx)(w,{primaryName:o.name,secondaryName:o.secondaryName||void 0,stationState:e,flipped:180===m,express:o.services.includes(h.K9.express)})})]})},M=function(n){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(C,(0,s.Z)({strokeWidth:4},n)),(0,f.jsx)(A,(0,s.Z)({transform:"translate(0,".concat(180===n.tickRotation?-47:23,")")},n))]})},C=function(n){var t=n.intInfos,e=n.stnState,r=n.tickRotation,i=(0,a.Z)(n,N);return(0,f.jsx)("g",(0,s.Z)((0,s.Z)({},i),{},{children:t.map((function(n,a){return(0,f.jsx)("use",{xlinkHref:"#inttick",stroke:-1===e?"#aaa":n[2],transform:"translate(".concat(-2*(t.length-1)+4*a,",0)rotate(").concat(180===r?180:0,")")},a)}))}))},A=function(n){var t=n.intInfos,e=n.tickRotation,r=n.stnState,i=(0,a.Z)(n,k);return(0,f.jsx)("g",(0,s.Z)((0,s.Z)({},i),{},{children:t.map((function(n,t){return(0,f.jsx)("g",{transform:"translate(0,".concat(28*t*(180===e?-1:1),")"),children:(0,f.jsx)(p,{lineName:[n[4],n[5]],foregroundColour:n[3],backgroundColour:n[2],passed:-1===r})},t)}))}))},G=e(3824),R=function(n,t){return 2===n[t].parents.length||2===n[t].children.length?.25:0},O=function(){var n,t=(0,d.CG)((function(n){return n.helper})),e=t.branches,r=t.routes,a=t.depsStr,c=(0,d.CG)((function(n){return n.param.svgWidth})),l=(0,d.CG)((function(n){return n.param.y_pc})),u=(0,d.CG)((function(n){return n.param.padding})),m=(0,d.CG)((function(n){return n.param.branch_spacing})),g=(0,d.CG)((function(n){return n.param.direction})),x=(0,d.CG)((function(n){return n.param.line_name})),j=(0,d.CG)((function(n){return n.param.current_stn_idx})),v=(0,d.CG)((function(n){return n.param.stn_list})),S=(0,G.Az)(v,R,R),y=(0,o.useMemo)((function(){return console.log("computing x shares"),Object.keys(v).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},t,function(n,t,e){var r=(0,G.QE)("linestart","lineend",t);if(r.nodes.includes(n))return(0,G.QE)(r.nodes[1],n,t).len;for(var a=e.filter((function(t){return t.includes(n)}))[0],s=n;!r.nodes.includes(s);)s=a[a.indexOf(s)-1];for(var i=n;!r.nodes.includes(i);)i=a[a.indexOf(i)+1];var c="linestart"===s,o="lineend"===i;if(a.toString()===e[0].toString()){var l=[];return c||o?c?(l[0]=0,l[1]=(0,G.QE)(r.nodes[1],i,t).len,l[2]=(0,G.QE)(a[1],n,t).len,l[3]=(0,G.QE)(n,i,t).len):(l[0]=(0,G.QE)(r.nodes[1],s,t).len,l[1]=(0,G.QE)(s,r.nodes.slice(-2)[0],t).len,l[2]=(0,G.QE)(s,n,t).len,l[3]=(0,G.QE)(n,a.slice(-2)[0],t).len):(l[0]=(0,G.QE)(r.nodes[1],s,t).len,l[1]=(0,G.QE)(s,i,t).len,l[2]=(0,G.QE)(s,n,t).len,l[3]=(0,G.QE)(n,i,t).len),l[0]+l[2]*l[1]/(l[2]+l[3])}if(c||o)return c?(0,G.QE)(r.nodes[1],i,t).len-(0,G.QE)(n,i,t).len:(0,G.QE)(r.nodes[1],s,t).len+(0,G.QE)(s,n,t).len;var u=[];return u[0]=(0,G.QE)(r.nodes[1],s,t).len,u[1]=(0,G.QE)(s,i,t).len,u[2]=(0,G.QE)(s,n,t).len,u[3]=(0,G.QE)(n,i,t).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(t,S,e)))}),{})}),[e.toString(),JSON.stringify(S)]),_=(0,G.QE)("linestart","lineend",S),Z=(0,G.QE)(_.nodes[1],_.nodes.slice(-2)[0],S),z=g===h.wA.right?[c[h.Ht.RailMap]*u/100+65,c[h.Ht.RailMap]*(1-u/100)-20]:[c[h.Ht.RailMap]*u/100,c[h.Ht.RailMap]*(1-u/100)-65],w=Object.keys(y).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},t,z[0]+y[t]/Z.len*(z[1]-z[0])))}),{}),N=(0,o.useMemo)((function(){return console.log("computing y shares"),Object.keys(v).reduce((function(n,t){if(e[0].includes(t))return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},t,0));var r=e.slice(1).filter((function(n){return n.includes(t)}))[0];return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},t,v[r[0]].children.indexOf(r[1])?-2:2))}),{})}),[a]),k=Object.keys(N).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},t,-N[t]*m))}),{}),E=(0,o.useMemo)((function(){return(0,G.h6)(j,r,g)}),[j,g,r.toString()]),M=(0,G.pS)(e,E),C=Object.keys(M).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},t,M[t].map((function(n){return H(n,w,k)}))))}),{});return(0,f.jsxs)("g",{id:"main",style:(n={},(0,i.Z)(n,"--y-percentage",l),(0,i.Z)(n,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),n),children:[(0,f.jsx)(b,{paths:C}),(0,f.jsx)(Q,{xs:w,ys:k,stnStates:E}),(0,f.jsx)("g",{id:"line_name",style:(0,i.Z)({},"--translate-x",g===h.wA.right?"".concat(z[0]-65,"px"):"".concat(z[1]+65,"px")),children:(0,f.jsx)(p,{lineName:x,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},b=o.memo((function(n){return(0,f.jsxs)("g",{fill:"none",strokeWidth:4,children:[(0,f.jsx)("g",{stroke:"#aaa",strokeDasharray:4,children:n.paths.pass.map((function(n,t){return(0,f.jsx)("path",{d:n},t)}))}),(0,f.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:n.paths.main.map((function(n,t){return(0,f.jsx)("path",{d:n},t)}))})]})}),(function(n,t){return JSON.stringify(n.paths)===JSON.stringify(t.paths)})),H=function(n,t,e){var r,a=[];return n.forEach((function(n){var s=t[n],i=e[n];if(!r&&0!==r)return r=i,void a.push("M ".concat(s,",").concat(i));0===i?(i<r&&a.push("H ".concat(s-40),"a 40,40 0 0,0 40,-40","V ".concat(i)),i>r&&a.push("H ".concat(s-40),"a 40,40 0 0,1 40,40","V ".concat(i))):(i<r&&a.push("V ".concat(i+40),"a 40,40 0 0,1 40,-40","H ".concat(s)),i>r&&a.push("V ".concat(i-40),"a 40,40 0 0,0 40,40","H ".concat(s))),a.push("H ".concat(s)),r=i})),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")},Q=function(n){var t=n.xs,e=n.ys,r=n.stnStates,a=(0,d.CG)((function(n){return n.param.stn_list}));return(0,f.jsx)("g",{id:"stn_icons",children:Object.keys(a).filter((function(n){return!["linestart","lineend"].includes(n)})).map((function(n){return(0,f.jsx)("g",{style:{transform:"translate(".concat(t[n],"px,").concat(e[n],"px)")},children:(0,f.jsx)(E,{stnId:n,stnState:r[n],stnY:e[n]})},n)}))})},L=["destIds"],P=["destIds"],F=function(){var n=(0,d.CG)((function(n){return n.param.svgWidth})),t=(0,d.CG)((function(n){return n.param.direction})),e=(0,d.CG)((function(n){return n.param.psd_num})),r=(0,d.CG)((function(n){return n.param.info_panel_type})),a=(0,d.CG)((function(n){return n.param.notesGZMTR})),s=(0,d.CG)((function(n){return n.param.current_stn_idx})),i=(0,d.CG)((function(n){return n.param.stn_list[s]}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(T,{}),(0,f.jsx)(l.Z,{variant:r,isShowLight:r===h.p.gz2otis,isShowPSD:r===h.p.gz2otis&&e}),t===h.wA.left&&i.parents.includes("linestart")||t===h.wA.right&&i.children.includes("lineend")?(0,f.jsx)(I,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O,{}),(0,f.jsx)(W,{}),a.map((function(n,t){return(0,f.jsx)(U,{note:n},t)}))]}),r===h.p.gz2otis&&(0,f.jsx)("line",{x2:n[h.Ht.RailMap],transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},T=(0,o.memo)((function(){return(0,f.jsxs)("defs",{children:[(0,f.jsx)("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),(0,f.jsx)("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})]})})),W=function(){var n,t=(0,d.CG)((function(n){return n.helper})).routes,e=(0,d.CG)((function(n){return n.param})),r=e.direction,a=e.direction_gz_x,l=e.direction_gz_y,u=e.current_stn_idx,m=(0,o.useMemo)((function(){return(0,c.Z)(new Set(t.reduce((function(n,t){return t.includes(u)?n.concat(t.filter((function(n){return!["linestart","lineend"].includes(n)})).slice(r===h.wA.left?0:-1)[0]):n}),[]).filter((function(n){return n!==u}))))}),[u,r,t.toString()]),g={textAnchor:r===h.wA.left?"start":"end",transform:"translate(".concat(r===h.wA.left?65:-65,",-5)"),destIds:m};return(0,f.jsxs)("g",{id:"direction_gz",style:(n={},(0,i.Z)(n,"--x-percentage",a),(0,i.Z)(n,"--y-percentage",l),n),children:[(0,f.jsx)("use",{xlinkHref:"#arrow_direction",style:(0,i.Z)({},"--rotate",r===h.wA.left?"0deg":"180deg")}),2!==m.length?(0,f.jsx)(B,(0,s.Z)({},g)):(0,f.jsx)(D,(0,s.Z)({},g))]})},B=function(n){var t=n.destIds,e=(0,a.Z)(n,L),r=(0,d.CG)((function(n){return n.param.stn_list}));return(0,f.jsxs)("g",(0,s.Z)((0,s.Z)({},e),{},{children:[(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:28,children:t.map((function(n){return r[n].name[0]})).join("/")+"\u65b9\u5411"}),(0,f.jsx)("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+t.map((function(n){return r[n].name[1].replace("\\"," ")})).join("/")})]}))},D=function(n){var t=n.destIds,e=(0,a.Z)(n,P),r=(0,d.CG)((function(n){return n.param.direction})),i=(0,d.CG)((function(n){return n.param.stn_list})),l=t.map((function(n){return i[n].name[0].length})),u=Math.min.apply(Math,(0,c.Z)(l)),m=u>1&&l[0]!==l[1]?Math.abs(l[0]-l[1])/(u-1):0;return(0,f.jsxs)("g",(0,s.Z)((0,s.Z)({},e),{},{children:[t.map((function(n,t){return(0,f.jsxs)(o.Fragment,{children:[(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:25,x:r===h.wA.left?0:-75,y:42*t-21,letterSpacing:l[t]>l[1-t]?"0em":"".concat(m,"em"),children:i[n].name[0]}),(0,f.jsx)("text",{className:"rmg-name__en",fontSize:11.5,x:r===h.wA.left?0:-75,y:42*t-1,children:"Towards "+i[n].name[1].replace("\\"," ")})]},n)})),(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:28,x:r===h.wA.left?25*(Math.max.apply(Math,(0,c.Z)(l))+1):0,y:5,children:"\u65b9\u5411"})]}))},I=o.memo((function(){return(0,f.jsxs)("g",{id:"terminus_gz",textAnchor:"middle",children:[(0,f.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:"\u7ec8 \u70b9 \u7ad9"}),(0,f.jsx)("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),(0,f.jsxs)("g",{strokeWidth:8,stroke:"#000",children:[(0,f.jsx)("path",{d:"M -160,68 h -160"}),(0,f.jsx)("path",{d:"M 160,68 h 160"})]})]})})),U=o.memo((function(n){var t,e=o.useRef(null),a=o.useState({width:0,height:0,y:0}),s=(0,r.Z)(a,2),c=s[0],l=s[1];return o.useEffect((function(){return l(e.current.getBBox())}),[n.note[0],n.note[1]]),(0,f.jsxs)("g",{className:"note-box",style:(t={},(0,i.Z)(t,"--x-percentage",n.note[2]),(0,i.Z)(t,"--y-percentage",n.note[3]),t),children:[n.note[4]&&(0,f.jsx)("rect",{height:c.height+4,width:c.width+4,x:-2,y:c.y-2,fill:"none",stroke:"black",strokeWidth:.5}),(0,f.jsxs)("g",{ref:e,children:[(0,f.jsx)("g",{fontSize:16,letterSpacing:1.2,children:n.note[0].split("\n").map((function(n,t){return(0,f.jsx)("text",{className:"rmg-name__zh",y:18*t,children:n},t)}))}),(0,f.jsx)("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*n.note[0].split("\n").length,")"),children:n.note[1].split("\n").map((function(t,e){var r;return(0,f.jsx)("text",{className:"rmg-name__en",y:11*e,textLength:e<((null===(r=n.note[1].match(/\n/g))||void 0===r?void 0:r.length)||0)?c.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:t},e)}))})]})]})}),(function(n,t){return n.note.toString()===t.note.toString()}))},6541:function(n,t,e){e.d(t,{Z:function(){return h}});var r=e(1413),a=e(4942),s=e(2791),i=e(5987),c=e(713),o=e(184),l=["num","inStrip"];function u(n){var t=n.num,e=n.inStrip,a=(0,i.Z)(n,l);return(0,o.jsxs)("g",(0,r.Z)((0,r.Z)({textAnchor:"middle",fill:e?c.AJ.black:"var(--rmg-theme-fg)"},a),{},{children:[(0,o.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:e?"#fff":"var(--rmg-theme-colour)"}),(0,o.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t}),(0,o.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),(0,o.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]}))}var h=function(n){var t=function(n){switch(n){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(n.variant),e=s.useMemo((function(){switch(n.variant){case"gz1":return(0,o.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return(0,o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return(0,o.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return(0,o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return(0,o.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return(0,o.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return(0,o.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return(0,o.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return(0,o.jsx)(o.Fragment,{})}}),[n.variant]);return(0,o.jsxs)("g",{transform:"translate(0,".concat("gz4"===n.variant?-20:0,")"),children:[(0,o.jsx)("rect",{id:"strip_gz",style:(0,a.Z)({},"--height","".concat(t,"px"))}),(0,o.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:n.isShowLight&&e}),!1!==n.isShowPSD&&(0,o.jsx)(d,(0,r.Z)({},n))]})},d=s.memo((function(n){var t,e=["gz28","gz2otis","gz6","gzgf"].includes(n.variant),r=function(n){switch(n){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(n.variant);return(0,o.jsx)(u,{num:n.isShowPSD,inStrip:e,style:(t={},(0,a.Z)(t,"--psd-dy",r),(0,a.Z)(t,"transform","translate(var(--translate-x), var(--translate-y))"),(0,a.Z)(t,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),(0,a.Z)(t,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),t)})}),(function(n,t){return n.variant===t.variant&&n.isShowPSD===t.isShowPSD}))}}]);
//# sourceMappingURL=railmapGZMTR.07fef885.chunk.js.map