"use strict";(self.webpackChunkkit_site=self.webpackChunkkit_site||[]).push([[2304],{2304:(n,e,r)=>{r.d(e,{cn:()=>Oe});var t=r(80),o=r(1696),c=r(4868),i=r(1160),u=r(9552),a=r(2696),d=r(9884),f=r(5536);class s{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,e=n._prev;if(e!==n)return v(e),e}enqueue(n){var e=this._sentinel;n._prev&&n._next&&v(n),n._next=e._next,e._next._prev=n,e._next=n,n._prev=e}toString(){for(var n=[],e=this._sentinel,r=e._prev;r!==e;)n.push(JSON.stringify(r,g)),r=r._prev;return"["+n.join(", ")+"]"}}function v(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function g(n,e){if("_next"!==n&&"_prev"!==n)return e}var h=i.c(1);function l(n,e){if(n.nodeCount()<=1)return[];var r=function(n,e){var r=new f.M,o=0,c=0;t.c(n.nodes(),(function(n){r.setNode(n,{v:n,in:0,out:0})})),t.c(n.edges(),(function(n){var t=r.edge(n.v,n.w)||0,i=e(n),u=t+i;r.setEdge(n.v,n.w,u),c=Math.max(c,r.node(n.v).out+=i),o=Math.max(o,r.node(n.w).in+=i)}));var i=d.c(c+o+3).map((function(){return new s})),u=o+1;return t.c(r.nodes(),(function(n){w(i,u,r.node(n))})),{graph:r,buckets:i,zeroIdx:u}}(n,e||h),o=function(n,e,r){var t,o=[],c=e[e.length-1],i=e[0];for(;n.nodeCount();){for(;t=i.dequeue();)p(n,e,r,t);for(;t=c.dequeue();)p(n,e,r,t);if(n.nodeCount())for(var u=e.length-2;u>0;--u)if(t=e[u].dequeue()){o=o.concat(p(n,e,r,t,!0));break}}return o}(r.graph,r.buckets,r.zeroIdx);return u.c(a.c(o,(function(e){return n.outEdges(e.v,e.w)})))}function p(n,e,r,o,c){var i=c?[]:void 0;return t.c(n.inEdges(o.v),(function(t){var o=n.edge(t),u=n.node(t.v);c&&i.push({v:t.v,w:t.w}),u.out-=o,w(e,r,u)})),t.c(n.outEdges(o.v),(function(t){var o=n.edge(t),c=t.w,i=n.node(c);i.in-=o,w(e,r,i)})),n.removeNode(o.v),i}function w(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function m(n){var e="greedy"===n.graph().acyclicer?l(n,function(n){return function(e){return n.edge(e).weight}}(n)):function(n){var e=[],r={},o={};function i(u){c.c(o,u)||(o[u]=!0,r[u]=!0,t.c(n.outEdges(u),(function(n){c.c(r,n.w)?e.push(n):i(n.w)})),delete r[u])}return t.c(n.nodes(),i),e}(n);t.c(e,(function(e){var r=n.edge(e);n.removeEdge(e),r.forwardName=e.name,r.reversed=!0,n.setEdge(e.w,e.v,r,o.c("rev"))}))}var b=r(9064),y=r(7488),x=r(2804),k=r(8760);const E=function(n,e,r){for(var t=-1,o=n.length;++t<o;){var c=n[t],i=e(c);if(null!=i&&(void 0===u?i==i&&!(0,k.c)(i):r(i,u)))var u=i,a=c}return a};const N=function(n,e){return n>e};var _=r(5816);const I=function(n){return n&&n.length?E(n,_.c,N):void 0};const M=function(n){var e=null==n?0:n.length;return e?n[e-1]:void 0};var R=r(8848),T=r(9985),L=r(1312);const C=function(n,e){var r={};return e=(0,L.c)(e,3),(0,T.c)(n,(function(n,t,o){(0,R.c)(r,t,e(n,t,o))})),r};var O=r(372);const P=function(n,e){return n<e};const S=function(n){return n&&n.length?E(n,_.c,P):void 0};var j=r(3936);const F=function(){return j.c.Date.now()};function G(n,e,r,t){var c;do{c=o.c(t)}while(n.hasNode(c));return r.dummy=e,n.setNode(c,r),c}function V(n){var e=new f.M({multigraph:n.isMultigraph()}).setGraph(n.graph());return t.c(n.nodes(),(function(r){n.children(r).length||e.setNode(r,n.node(r))})),t.c(n.edges(),(function(r){e.setEdge(r,n.edge(r))})),e}function B(n,e){var r,t,o=n.x,c=n.y,i=e.x-o,u=e.y-c,a=n.width/2,d=n.height/2;if(!i&&!u)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(u)*a>Math.abs(i)*d?(u<0&&(d=-d),r=d*i/u,t=d):(i<0&&(a=-a),r=a,t=a*u/i),{x:o+r,y:c+t}}function q(n){var e=a.c(d.c(z(n)+1),(function(){return[]}));return t.c(n.nodes(),(function(r){var t=n.node(r),o=t.rank;O.c(o)||(e[o][t.order]=r)})),e}function Y(n,e,r,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=r,o.order=t),G(n,"border",o,e)}function z(n){return I(a.c(n.nodes(),(function(e){var r=n.node(e).rank;if(!O.c(r))return r})))}function A(n,e){var r=F();try{return e()}finally{console.log(n+" time: "+(F()-r)+"ms")}}function D(n,e){return e()}function $(n,e,r,t,o,c){var i={width:0,height:0,rank:c,borderType:e},u=o[e][c-1],a=G(n,"border",i,r);o[e][c]=a,n.setParent(a,t),u&&n.setEdge(u,a,{weight:1})}function J(n){var e=n.graph().rankdir.toLowerCase();"bt"!==e&&"rl"!==e||function(n){t.c(n.nodes(),(function(e){Q(n.node(e))})),t.c(n.edges(),(function(e){var r=n.edge(e);t.c(r.points,Q),c.c(r,"y")&&Q(r)}))}(n),"lr"!==e&&"rl"!==e||(!function(n){t.c(n.nodes(),(function(e){U(n.node(e))})),t.c(n.edges(),(function(e){var r=n.edge(e);t.c(r.points,U),c.c(r,"x")&&U(r)}))}(n),H(n))}function H(n){t.c(n.nodes(),(function(e){K(n.node(e))})),t.c(n.edges(),(function(e){K(n.edge(e))}))}function K(n){var e=n.width;n.width=n.height,n.height=e}function Q(n){n.y=-n.y}function U(n){var e=n.x;n.x=n.y,n.y=e}function W(n){n.graph().dummyChains=[],t.c(n.edges(),(function(e){!function(n,e){var r,t,o,c=e.v,i=n.node(c).rank,u=e.w,a=n.node(u).rank,d=e.name,f=n.edge(e),s=f.labelRank;if(a===i+1)return;for(n.removeEdge(e),o=0,++i;i<a;++o,++i)f.points=[],r=G(n,"edge",t={width:0,height:0,edgeLabel:f,edgeObj:e,rank:i},"_d"),i===s&&(t.width=f.width,t.height=f.height,t.dummy="edge-label",t.labelpos=f.labelpos),n.setEdge(c,r,{weight:f.weight},d),0===o&&n.graph().dummyChains.push(r),c=r;n.setEdge(c,u,{weight:f.weight},d)}(n,e)}))}const X=function(n,e){return n&&n.length?E(n,(0,L.c)(e,2),P):void 0};function Z(n){var e={};t.c(n.sources(),(function r(t){var o=n.node(t);if(c.c(e,t))return o.rank;e[t]=!0;var i=S(a.c(n.outEdges(t),(function(e){return r(e.w)-n.edge(e).minlen})));return i!==Number.POSITIVE_INFINITY&&null!=i||(i=0),o.rank=i}))}function nn(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function en(n){var e,r,t=new f.M({directed:!1}),o=n.nodes()[0],c=n.nodeCount();for(t.setNode(o,{});rn(t,n)<c;)e=tn(t,n),r=t.hasNode(e.v)?nn(n,e):-nn(n,e),on(t,n,r);return t}function rn(n,e){return t.c(n.nodes(),(function r(o){t.c(e.nodeEdges(o),(function(t){var c=t.v,i=o===c?t.w:c;n.hasNode(i)||nn(e,t)||(n.setNode(i,{}),n.setEdge(o,i,{}),r(i))}))})),n.nodeCount()}function tn(n,e){return X(e.edges(),(function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return nn(e,r)}))}function on(n,e,r){t.c(n.nodes(),(function(n){e.node(n).rank+=r}))}var cn=r(2440),un=r(2420);const an=function(n){return function(e,r,t){var o=Object(e);if(!(0,cn.c)(e)){var c=(0,L.c)(r,3);e=(0,un.c)(e),r=function(n){return c(o[n],n,o)}}var i=n(e,r,t);return i>-1?o[c?e[i]:i]:void 0}};var dn=r(1664),fn=r(2400);const sn=function(n){var e=(0,fn.c)(n),r=e%1;return e==e?r?e-r:e:0};var vn=Math.max;const gn=an((function(n,e,r){var t=null==n?0:n.length;if(!t)return-1;var o=null==r?0:sn(r);return o<0&&(o=vn(t+o,0)),(0,dn.c)(n,(0,L.c)(e,3),o)}));var hn=r(3336);i.c(1);i.c(1);r(1376),r(7188),r(7724);var ln=r(8820);r(3584);(0,r(472).c)("length");RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var pn="\\ud800-\\udfff",wn="["+pn+"]",mn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",bn="\\ud83c[\\udffb-\\udfff]",yn="[^"+pn+"]",xn="(?:\\ud83c[\\udde6-\\uddff]){2}",kn="[\\ud800-\\udbff][\\udc00-\\udfff]",En="(?:"+mn+"|"+bn+")"+"?",Nn="[\\ufe0e\\ufe0f]?",_n=Nn+En+("(?:\\u200d(?:"+[yn,xn,kn].join("|")+")"+Nn+En+")*"),In="(?:"+[yn+mn+"?",mn,xn,kn,wn].join("|")+")";RegExp(bn+"(?="+bn+")|"+In+_n,"g");function Mn(){}function Rn(n,e,r){ln.c(e)||(e=[e]);var o=(n.isDirected()?n.successors:n.neighbors).bind(n),c=[],i={};return t.c(e,(function(e){if(!n.hasNode(e))throw new Error("Graph does not have node: "+e);Tn(n,e,"post"===r,i,o,c)})),c}function Tn(n,e,r,o,i,u){c.c(o,e)||(o[e]=!0,r||u.push(e),t.c(i(e),(function(e){Tn(n,e,r,o,i,u)})),r&&u.push(e))}Mn.prototype=new Error;r(8048);function Ln(n){n=function(n){var e=(new f.M).setGraph(n.graph());return t.c(n.nodes(),(function(r){e.setNode(r,n.node(r))})),t.c(n.edges(),(function(r){var t=e.edge(r.v,r.w)||{weight:0,minlen:1},o=n.edge(r);e.setEdge(r.v,r.w,{weight:t.weight+o.weight,minlen:Math.max(t.minlen,o.minlen)})})),e}(n),Z(n);var e,r=en(n);for(Pn(r),Cn(r,n);e=jn(r);)Gn(r,n,e,Fn(r,n,e))}function Cn(n,e){var r=function(n,e){return Rn(n,e,"post")}(n,n.nodes());r=r.slice(0,r.length-1),t.c(r,(function(r){!function(n,e,r){var t=n.node(r),o=t.parent;n.edge(r,o).cutvalue=On(n,e,r)}(n,e,r)}))}function On(n,e,r){var o=n.node(r).parent,c=!0,i=e.edge(r,o),u=0;return i||(c=!1,i=e.edge(o,r)),u=i.weight,t.c(e.nodeEdges(r),(function(t){var i,a,d=t.v===r,f=d?t.w:t.v;if(f!==o){var s=d===c,v=e.edge(t).weight;if(u+=s?v:-v,i=r,a=f,n.hasEdge(i,a)){var g=n.edge(r,f).cutvalue;u+=s?-g:g}}})),u}function Pn(n,e){arguments.length<2&&(e=n.nodes()[0]),Sn(n,{},1,e)}function Sn(n,e,r,o,i){var u=r,a=n.node(o);return e[o]=!0,t.c(n.neighbors(o),(function(t){c.c(e,t)||(r=Sn(n,e,r,t,o))})),a.low=u,a.lim=r++,i?a.parent=i:delete a.parent,r}function jn(n){return gn(n.edges(),(function(e){return n.edge(e).cutvalue<0}))}function Fn(n,e,r){var t=r.v,o=r.w;e.hasEdge(t,o)||(t=r.w,o=r.v);var c=n.node(t),i=n.node(o),u=c,a=!1;c.lim>i.lim&&(u=i,a=!0);var d=hn.c(e.edges(),(function(e){return a===Vn(n,n.node(e.v),u)&&a!==Vn(n,n.node(e.w),u)}));return X(d,(function(n){return nn(e,n)}))}function Gn(n,e,r,o){var c=r.v,i=r.w;n.removeEdge(c,i),n.setEdge(o.v,o.w,{}),Pn(n),Cn(n,e),function(n,e){var r=gn(n.nodes(),(function(n){return!e.node(n).parent})),o=function(n,e){return Rn(n,e,"pre")}(n,r);o=o.slice(1),t.c(o,(function(r){var t=n.node(r).parent,o=e.edge(r,t),c=!1;o||(o=e.edge(t,r),c=!0),e.node(r).rank=e.node(t).rank+(c?o.minlen:-o.minlen)}))}(n,e)}function Vn(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function Bn(n){switch(n.graph().ranker){case"network-simplex":default:Yn(n);break;case"tight-tree":!function(n){Z(n),en(n)}(n);break;case"longest-path":qn(n)}}Ln.initLowLimValues=Pn,Ln.initCutValues=Cn,Ln.calcCutValue=On,Ln.leaveEdge=jn,Ln.enterEdge=Fn,Ln.exchangeEdges=Gn;var qn=Z;function Yn(n){Ln(n)}var zn=r(36),An=r(460);function Dn(n){var e=G(n,"root",{},"_root"),r=function(n){var e={};function r(o,c){var i=n.children(o);i&&i.length&&t.c(i,(function(n){r(n,c+1)})),e[o]=c}return t.c(n.children(),(function(n){r(n,1)})),e}(n),o=I(zn.c(r))-1,c=2*o+1;n.graph().nestingRoot=e,t.c(n.edges(),(function(e){n.edge(e).minlen*=c}));var i=function(n){return An.c(n.edges(),(function(e,r){return e+n.edge(r).weight}),0)}(n)+1;t.c(n.children(),(function(t){$n(n,e,c,i,o,r,t)})),n.graph().nodeRankFactor=c}function $n(n,e,r,o,c,i,u){var a=n.children(u);if(a.length){var d=Y(n,"_bt"),f=Y(n,"_bb"),s=n.node(u);n.setParent(d,u),s.borderTop=d,n.setParent(f,u),s.borderBottom=f,t.c(a,(function(t){$n(n,e,r,o,c,i,t);var a=n.node(t),s=a.borderTop?a.borderTop:t,v=a.borderBottom?a.borderBottom:t,g=a.borderTop?o:2*o,h=s!==v?1:c-i[u]+1;n.setEdge(d,s,{weight:g,minlen:h,nestingEdge:!0}),n.setEdge(v,f,{weight:g,minlen:h,nestingEdge:!0})})),n.parent(u)||n.setEdge(e,d,{weight:0,minlen:c+i[u]})}else u!==e&&n.setEdge(e,u,{weight:0,minlen:r})}var Jn=r(8492);const Hn=function(n){return(0,Jn.c)(n,5)};function Kn(n,e,r){var i=function(n){var e;for(;n.hasNode(e=o.c("_root")););return e}(n),u=new f.M({compound:!0}).setGraph({root:i}).setDefaultNodeLabel((function(e){return n.node(e)}));return t.c(n.nodes(),(function(o){var a=n.node(o),d=n.parent(o);(a.rank===e||a.minRank<=e&&e<=a.maxRank)&&(u.setNode(o),u.setParent(o,d||i),t.c(n[r](o),(function(e){var r=e.v===o?e.w:e.v,t=u.edge(r,o),c=O.c(t)?0:t.weight;u.setEdge(r,o,{weight:n.edge(e).weight+c})})),c.c(a,"minRank")&&u.setNode(o,{borderLeft:a.borderLeft[e],borderRight:a.borderRight[e]}))})),u}var Qn=r(7412);const Un=function(n,e,r){for(var t=-1,o=n.length,c=e.length,i={};++t<o;){var u=t<c?e[t]:void 0;r(i,n[t],u)}return i};const Wn=function(n,e){return Un(n||[],e||[],Qn.c)};var Xn=r(2952),Zn=r(1304),ne=r(604),ee=r(360);const re=function(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n};var te=r(1180);const oe=function(n,e){if(n!==e){var r=void 0!==n,t=null===n,o=n==n,c=(0,k.c)(n),i=void 0!==e,u=null===e,a=e==e,d=(0,k.c)(e);if(!u&&!d&&!c&&n>e||c&&i&&a&&!u&&!d||t&&i&&a||!r&&a||!o)return 1;if(!t&&!c&&!d&&n<e||d&&r&&o&&!t&&!c||u&&r&&o||!i&&o||!a)return-1}return 0};const ce=function(n,e,r){for(var t=-1,o=n.criteria,c=e.criteria,i=o.length,u=r.length;++t<i;){var a=oe(o[t],c[t]);if(a)return t>=u?a:a*("desc"==r[t]?-1:1)}return n.index-e.index};const ie=function(n,e,r){e=e.length?(0,Zn.c)(e,(function(n){return(0,ln.c)(n)?function(e){return(0,ne.c)(e,1===n.length?n[0]:n)}:n})):[_.c];var t=-1;e=(0,Zn.c)(e,(0,te.c)(L.c));var o=(0,ee.c)(n,(function(n,r,o){return{criteria:(0,Zn.c)(e,(function(e){return e(n)})),index:++t,value:n}}));return re(o,(function(n,e){return ce(n,e,r)}))};var ue=r(4880),ae=r(5552);const de=(0,ue.c)((function(n,e){if(null==n)return[];var r=e.length;return r>1&&(0,ae.c)(n,e[0],e[1])?e=[]:r>2&&(0,ae.c)(e[0],e[1],e[2])&&(e=[e[0]]),ie(n,(0,Xn.c)(e,1),[])}));function fe(n,e){for(var r=0,t=1;t<e.length;++t)r+=se(n,e[t-1],e[t]);return r}function se(n,e,r){for(var o=Wn(r,a.c(r,(function(n,e){return e}))),c=u.c(a.c(e,(function(e){return de(a.c(n.outEdges(e),(function(e){return{pos:o[e.w],weight:n.edge(e).weight}})),"pos")}))),i=1;i<r.length;)i<<=1;var d=2*i-1;i-=1;var f=a.c(new Array(d),(function(){return 0})),s=0;return t.c(c.forEach((function(n){var e=n.pos+i;f[e]+=n.weight;for(var r=0;e>0;)e%2&&(r+=f[e+1]),f[e=e-1>>1]+=n.weight;s+=n.weight*r}))),s}function ve(n,e){var r={};return t.c(n,(function(n,e){var t=r[n.v]={indegree:0,in:[],out:[],vs:[n.v],i:e};O.c(n.barycenter)||(t.barycenter=n.barycenter,t.weight=n.weight)})),t.c(e.edges(),(function(n){var e=r[n.v],t=r[n.w];O.c(e)||O.c(t)||(t.indegree++,e.out.push(r[n.w]))})),function(n){var e=[];function r(n){return function(e){e.merged||(O.c(e.barycenter)||O.c(n.barycenter)||e.barycenter>=n.barycenter)&&function(n,e){var r=0,t=0;n.weight&&(r+=n.barycenter*n.weight,t+=n.weight);e.weight&&(r+=e.barycenter*e.weight,t+=e.weight);n.vs=e.vs.concat(n.vs),n.barycenter=r/t,n.weight=t,n.i=Math.min(e.i,n.i),e.merged=!0}(n,e)}}function o(e){return function(r){r.in.push(e),0==--r.indegree&&n.push(r)}}for(;n.length;){var c=n.pop();e.push(c),t.c(c.in.reverse(),r(c)),t.c(c.out,o(c))}return a.c(hn.c(e,(function(n){return!n.merged})),(function(n){return y.c(n,["vs","i","barycenter","weight"])}))}(hn.c(r,(function(n){return!n.indegree})))}function ge(n,e){var r,o=function(n,e){var r={lhs:[],rhs:[]};return t.c(n,(function(n){e(n)?r.lhs.push(n):r.rhs.push(n)})),r}(n,(function(n){return c.c(n,"barycenter")})),i=o.lhs,a=de(o.rhs,(function(n){return-n.i})),d=[],f=0,s=0,v=0;i.sort((r=!!e,function(n,e){return n.barycenter<e.barycenter?-1:n.barycenter>e.barycenter?1:r?e.i-n.i:n.i-e.i})),v=he(d,a,v),t.c(i,(function(n){v+=n.vs.length,d.push(n.vs),f+=n.barycenter*n.weight,s+=n.weight,v=he(d,a,v)}));var g={vs:u.c(d)};return s&&(g.barycenter=f/s,g.weight=s),g}function he(n,e,r){for(var t;e.length&&(t=M(e)).i<=r;)e.pop(),n.push(t.vs),r++;return r}function le(n,e,r,o){var i=n.children(e),d=n.node(e),f=d?d.borderLeft:void 0,s=d?d.borderRight:void 0,v={};f&&(i=hn.c(i,(function(n){return n!==f&&n!==s})));var g=function(n,e){return a.c(e,(function(e){var r=n.inEdges(e);if(r.length){var t=An.c(r,(function(e,r){var t=n.edge(r),o=n.node(r.v);return{sum:e.sum+t.weight*o.order,weight:e.weight+t.weight}}),{sum:0,weight:0});return{v:e,barycenter:t.sum/t.weight,weight:t.weight}}return{v:e}}))}(n,i);t.c(g,(function(e){if(n.children(e.v).length){var t=le(n,e.v,r,o);v[e.v]=t,c.c(t,"barycenter")&&(i=e,u=t,O.c(i.barycenter)?(i.barycenter=u.barycenter,i.weight=u.weight):(i.barycenter=(i.barycenter*i.weight+u.barycenter*u.weight)/(i.weight+u.weight),i.weight+=u.weight))}var i,u}));var h=ve(g,r);!function(n,e){t.c(n,(function(n){n.vs=u.c(n.vs.map((function(n){return e[n]?e[n].vs:n})))}))}(h,v);var l=ge(h,o);if(f&&(l.vs=u.c([f,l.vs,s]),n.predecessors(f).length)){var p=n.node(n.predecessors(f)[0]),w=n.node(n.predecessors(s)[0]);c.c(l,"barycenter")||(l.barycenter=0,l.weight=0),l.barycenter=(l.barycenter*l.weight+p.order+w.order)/(l.weight+2),l.weight+=2}return l}function pe(n){var e=z(n),r=we(n,d.c(1,e+1),"inEdges"),o=we(n,d.c(e-1,-1,-1),"outEdges"),i=function(n){var e={},r=hn.c(n.nodes(),(function(e){return!n.children(e).length})),o=I(a.c(r,(function(e){return n.node(e).rank}))),i=a.c(d.c(o+1),(function(){return[]})),u=de(r,(function(e){return n.node(e).rank}));return t.c(u,(function r(o){if(!c.c(e,o)){e[o]=!0;var u=n.node(o);i[u.rank].push(o),t.c(n.successors(o),r)}})),i}(n);be(n,i);for(var u,f=Number.POSITIVE_INFINITY,s=0,v=0;v<4;++s,++v){me(s%2?r:o,s%4>=2);var g=fe(n,i=q(n));g<f&&(v=0,u=Hn(i),f=g)}be(n,u)}function we(n,e,r){return a.c(e,(function(e){return Kn(n,e,r)}))}function me(n,e){var r=new f.M;t.c(n,(function(n){var o=n.graph().root,c=le(n,o,r,e);t.c(c.vs,(function(e,r){n.node(e).order=r})),function(n,e,r){var o,c={};t.c(r,(function(r){for(var t,i,u=n.parent(r);u;){if((t=n.parent(u))?(i=c[t],c[t]=u):(i=o,o=u),i&&i!==u)return void e.setEdge(i,u);u=t}}))}(n,r,c.vs)}))}function be(n,e){t.c(e,(function(e){t.c(e,(function(e,r){n.node(e).order=r}))}))}function ye(n){var e=function(n){var e={},r=0;function o(c){var i=r;t.c(n.children(c),o),e[c]={low:i,lim:r++}}return t.c(n.children(),o),e}(n);t.c(n.graph().dummyChains,(function(r){for(var t=n.node(r),o=t.edgeObj,c=function(n,e,r,t){var o,c,i=[],u=[],a=Math.min(e[r].low,e[t].low),d=Math.max(e[r].lim,e[t].lim);o=r;do{o=n.parent(o),i.push(o)}while(o&&(e[o].low>a||d>e[o].lim));c=o,o=t;for(;(o=n.parent(o))!==c;)u.push(o);return{path:i.concat(u.reverse()),lca:c}}(n,e,o.v,o.w),i=c.path,u=c.lca,a=0,d=i[a],f=!0;r!==o.w;){if(t=n.node(r),f){for(;(d=i[a])!==u&&n.node(d).maxRank<t.rank;)a++;d===u&&(f=!1)}if(!f){for(;a<i.length-1&&n.node(d=i[a+1]).minRank<=t.rank;)a++;d=i[a]}n.setParent(r,d),r=n.successors(r)[0]}}))}var xe=r(2176);const ke=function(n,e){return n&&(0,T.c)(n,(0,xe.c)(e))};var Ee=r(9004),Ne=r(7e3);const _e=function(n,e){return null==n?n:(0,Ee.c)(n,(0,xe.c)(e),Ne.c)};function Ie(n,e){var r={};return An.c(e,(function(e,o){var c=0,i=0,u=e.length,a=M(o);return t.c(o,(function(e,d){var f=function(n,e){if(n.node(e).dummy)return gn(n.predecessors(e),(function(e){return n.node(e).dummy}))}(n,e),s=f?n.node(f).order:u;(f||e===a)&&(t.c(o.slice(i,d+1),(function(e){t.c(n.predecessors(e),(function(t){var o=n.node(t),i=o.order;!(i<c||s<i)||o.dummy&&n.node(e).dummy||Me(r,t,e)}))})),i=d+1,c=s)})),o})),r}function Me(n,e,r){if(e>r){var t=e;e=r,r=t}var o=n[e];o||(n[e]=o={}),o[r]=!0}function Re(n,e,r){if(e>r){var t=e;e=r,r=t}return c.c(n[e],r)}function Te(n,e,r,o,i){var u={},a=function(n,e,r,o){var i=new f.M,u=n.graph(),a=function(n,e,r){return function(t,o,i){var u,a=t.node(o),d=t.node(i),f=0;if(f+=a.width/2,c.c(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":u=-a.width/2;break;case"r":u=a.width/2}if(u&&(f+=r?u:-u),u=0,f+=(a.dummy?e:n)/2,f+=(d.dummy?e:n)/2,f+=d.width/2,c.c(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":u=d.width/2;break;case"r":u=-d.width/2}return u&&(f+=r?u:-u),u=0,f}}(u.nodesep,u.edgesep,o);return t.c(e,(function(e){var o;t.c(e,(function(e){var t=r[e];if(i.setNode(t),o){var c=r[o],u=i.edge(c,t);i.setEdge(c,t,Math.max(a(n,e,o),u||0))}o=e}))})),i}(n,e,r,i),d=i?"borderLeft":"borderRight";function s(n,e){for(var r=a.nodes(),t=r.pop(),o={};t;)o[t]?n(t):(o[t]=!0,r.push(t),r=r.concat(e(t))),t=r.pop()}return s((function(n){u[n]=a.inEdges(n).reduce((function(n,e){return Math.max(n,u[e.v]+a.edge(e))}),0)}),a.predecessors.bind(a)),s((function(e){var r=a.outEdges(e).reduce((function(n,e){return Math.min(n,u[e.w]-a.edge(e))}),Number.POSITIVE_INFINITY),t=n.node(e);r!==Number.POSITIVE_INFINITY&&t.borderType!==d&&(u[e]=Math.max(u[e],r))}),a.successors.bind(a)),t.c(o,(function(n){u[n]=u[r[n]]})),u}function Le(n){var e,r=q(n),o=b.c(Ie(n,r),function(n,e){var r={};function o(e,o,c,i,u){var a;t.c(d.c(o,c),(function(o){a=e[o],n.node(a).dummy&&t.c(n.predecessors(a),(function(e){var t=n.node(e);t.dummy&&(t.order<i||t.order>u)&&Me(r,e,a)}))}))}return An.c(e,(function(e,r){var c,i=-1,u=0;return t.c(r,(function(t,a){if("border"===n.node(t).dummy){var d=n.predecessors(t);d.length&&(c=n.node(d[0]).order,o(r,u,a,i,c),u=a,i=c)}o(r,u,r.length,c,e.length)})),r})),r}(n,r)),c={};t.c(["u","d"],(function(i){e="u"===i?r:zn.c(r).reverse(),t.c(["l","r"],(function(r){"r"===r&&(e=a.c(e,(function(n){return zn.c(n).reverse()})));var u=("u"===i?n.predecessors:n.successors).bind(n),d=function(n,e,r,o){var c={},i={},u={};return t.c(e,(function(n){t.c(n,(function(n,e){c[n]=n,i[n]=n,u[n]=e}))})),t.c(e,(function(n){var e=-1;t.c(n,(function(n){var t=o(n);if(t.length){t=de(t,(function(n){return u[n]}));for(var a=(t.length-1)/2,d=Math.floor(a),f=Math.ceil(a);d<=f;++d){var s=t[d];i[n]===n&&e<u[s]&&!Re(r,n,s)&&(i[s]=n,i[n]=c[n]=c[s],e=u[s])}}}))})),{root:c,align:i}}(0,e,o,u),f=Te(n,e,d.root,d.align,"r"===r);"r"===r&&(f=C(f,(function(n){return-n}))),c[i+r]=f}))}));var i=function(n,e){return X(zn.c(e),(function(e){var r=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return _e(e,(function(e,o){var c=function(n,e){return n.node(e).width}(n,o)/2;r=Math.max(e+c,r),t=Math.min(e-c,t)})),r-t}))}(n,c);return function(n,e){var r=zn.c(e),o=S(r),c=I(r);t.c(["u","d"],(function(r){t.c(["l","r"],(function(t){var i,u=r+t,a=n[u];if(a!==e){var d=zn.c(a);(i="l"===t?o-S(d):c-I(d))&&(n[u]=C(a,(function(n){return n+i})))}}))}))}(c,i),function(n,e){return C(n.ul,(function(r,t){if(e)return n[e.toLowerCase()][t];var o=de(a.c(n,t));return(o[1]+o[2])/2}))}(c,n.graph().align)}function Ce(n){(function(n){var e=q(n),r=n.graph().ranksep,o=0;t.c(e,(function(e){var c=I(a.c(e,(function(e){return n.node(e).height})));t.c(e,(function(e){n.node(e).y=o+c/2})),o+=c+r}))})(n=V(n)),ke(Le(n),(function(e,r){n.node(r).x=e}))}function Oe(n,e){var r=e&&e.debugTiming?A:D;r("layout",(function(){var e=r("  buildLayoutGraph",(function(){return function(n){var e=new f.M({multigraph:!0,compound:!0}),r=ze(n.graph());return e.setGraph(b.c({},Se,Ye(r,Pe),y.c(r,je))),t.c(n.nodes(),(function(r){var t=ze(n.node(r));e.setNode(r,x.c(Ye(t,Fe),Ge)),e.setParent(r,n.parent(r))})),t.c(n.edges(),(function(r){var t=ze(n.edge(r));e.setEdge(r,b.c({},Be,Ye(t,Ve),y.c(t,qe)))})),e}(n)}));r("  runLayout",(function(){!function(n,e){e("    makeSpaceForEdgeLabels",(function(){!function(n){var e=n.graph();e.ranksep/=2,t.c(n.edges(),(function(r){var t=n.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)}))}(n)})),e("    removeSelfEdges",(function(){!function(n){t.c(n.edges(),(function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:e,label:n.edge(e)}),n.removeEdge(e)}}))}(n)})),e("    acyclic",(function(){m(n)})),e("    nestingGraph.run",(function(){Dn(n)})),e("    rank",(function(){Bn(V(n))})),e("    injectEdgeLabelProxies",(function(){!function(n){t.c(n.edges(),(function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),o={rank:(n.node(e.w).rank-t.rank)/2+t.rank,e:e};G(n,"edge-proxy",o,"_ep")}}))}(n)})),e("    removeEmptyRanks",(function(){!function(n){var e=S(a.c(n.nodes(),(function(e){return n.node(e).rank}))),r=[];t.c(n.nodes(),(function(t){var o=n.node(t).rank-e;r[o]||(r[o]=[]),r[o].push(t)}));var o=0,c=n.graph().nodeRankFactor;t.c(r,(function(e,r){O.c(e)&&r%c!=0?--o:o&&t.c(e,(function(e){n.node(e).rank+=o}))}))}(n)})),e("    nestingGraph.cleanup",(function(){!function(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,t.c(n.edges(),(function(e){n.edge(e).nestingEdge&&n.removeEdge(e)}))}(n)})),e("    normalizeRanks",(function(){!function(n){var e=S(a.c(n.nodes(),(function(e){return n.node(e).rank})));t.c(n.nodes(),(function(r){var t=n.node(r);c.c(t,"rank")&&(t.rank-=e)}))}(n)})),e("    assignRankMinMax",(function(){!function(n){var e=0;t.c(n.nodes(),(function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=I(e,t.maxRank))})),n.graph().maxRank=e}(n)})),e("    removeEdgeLabelProxies",(function(){!function(n){t.c(n.nodes(),(function(e){var r=n.node(e);"edge-proxy"===r.dummy&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))}))}(n)})),e("    normalize.run",(function(){W(n)})),e("    parentDummyChains",(function(){ye(n)})),e("    addBorderSegments",(function(){!function(n){t.c(n.children(),(function e(r){var o=n.children(r),i=n.node(r);if(o.length&&t.c(o,e),c.c(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var u=i.minRank,a=i.maxRank+1;u<a;++u)$(n,"borderLeft","_bl",r,i,u),$(n,"borderRight","_br",r,i,u)}}))}(n)})),e("    order",(function(){pe(n)})),e("    insertSelfEdges",(function(){!function(n){var e=q(n);t.c(e,(function(e){var r=0;t.c(e,(function(e,o){var c=n.node(e);c.order=o+r,t.c(c.selfEdges,(function(e){G(n,"selfedge",{width:e.label.width,height:e.label.height,rank:c.rank,order:o+ ++r,e:e.e,label:e.label},"_se")})),delete c.selfEdges}))}))}(n)})),e("    adjustCoordinateSystem",(function(){!function(n){var e=n.graph().rankdir.toLowerCase();"lr"!==e&&"rl"!==e||H(n)}(n)})),e("    position",(function(){Ce(n)})),e("    positionSelfEdges",(function(){!function(n){t.c(n.nodes(),(function(e){var r=n.node(e);if("selfedge"===r.dummy){var t=n.node(r.e.v),o=t.x+t.width/2,c=t.y,i=r.x-o,u=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:o+2*i/3,y:c-u},{x:o+5*i/6,y:c-u},{x:o+i,y:c},{x:o+5*i/6,y:c+u},{x:o+2*i/3,y:c+u}],r.label.x=r.x,r.label.y=r.y}}))}(n)})),e("    removeBorderNodes",(function(){!function(n){t.c(n.nodes(),(function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),o=n.node(r.borderBottom),c=n.node(M(r.borderLeft)),i=n.node(M(r.borderRight));r.width=Math.abs(i.x-c.x),r.height=Math.abs(o.y-t.y),r.x=c.x+r.width/2,r.y=t.y+r.height/2}})),t.c(n.nodes(),(function(e){"border"===n.node(e).dummy&&n.removeNode(e)}))}(n)})),e("    normalize.undo",(function(){!function(n){t.c(n.graph().dummyChains,(function(e){var r,t=n.node(e),o=t.edgeLabel;for(n.setEdge(t.edgeObj,o);t.dummy;)r=n.successors(e)[0],n.removeNode(e),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),e=r,t=n.node(e)}))}(n)})),e("    fixupEdgeLabelCoords",(function(){!function(n){t.c(n.edges(),(function(e){var r=n.edge(e);if(c.c(r,"x"))switch("l"!==r.labelpos&&"r"!==r.labelpos||(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}}))}(n)})),e("    undoCoordinateSystem",(function(){J(n)})),e("    translateGraph",(function(){!function(n){var e=Number.POSITIVE_INFINITY,r=0,o=Number.POSITIVE_INFINITY,i=0,u=n.graph(),a=u.marginx||0,d=u.marginy||0;function f(n){var t=n.x,c=n.y,u=n.width,a=n.height;e=Math.min(e,t-u/2),r=Math.max(r,t+u/2),o=Math.min(o,c-a/2),i=Math.max(i,c+a/2)}t.c(n.nodes(),(function(e){f(n.node(e))})),t.c(n.edges(),(function(e){var r=n.edge(e);c.c(r,"x")&&f(r)})),e-=a,o-=d,t.c(n.nodes(),(function(r){var t=n.node(r);t.x-=e,t.y-=o})),t.c(n.edges(),(function(r){var i=n.edge(r);t.c(i.points,(function(n){n.x-=e,n.y-=o})),c.c(i,"x")&&(i.x-=e),c.c(i,"y")&&(i.y-=o)})),u.width=r-e+a,u.height=i-o+d}(n)})),e("    assignNodeIntersects",(function(){!function(n){t.c(n.edges(),(function(e){var r,t,o=n.edge(e),c=n.node(e.v),i=n.node(e.w);o.points?(r=o.points[0],t=o.points[o.points.length-1]):(o.points=[],r=i,t=c),o.points.unshift(B(c,r)),o.points.push(B(i,t))}))}(n)})),e("    reversePoints",(function(){!function(n){t.c(n.edges(),(function(e){var r=n.edge(e);r.reversed&&r.points.reverse()}))}(n)})),e("    acyclic.undo",(function(){!function(n){t.c(n.edges(),(function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}}))}(n)}))}(e,r)})),r("  updateInputGraph",(function(){!function(n,e){t.c(n.nodes(),(function(r){var t=n.node(r),o=e.node(r);t&&(t.x=o.x,t.y=o.y,e.children(r).length&&(t.width=o.width,t.height=o.height))})),t.c(n.edges(),(function(r){var t=n.edge(r),o=e.edge(r);t.points=o.points,c.c(o,"x")&&(t.x=o.x,t.y=o.y)})),n.graph().width=e.graph().width,n.graph().height=e.graph().height}(n,e)}))}))}var Pe=["nodesep","edgesep","ranksep","marginx","marginy"],Se={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},je=["acyclicer","ranker","rankdir","align"],Fe=["width","height"],Ge={width:0,height:0},Ve=["minlen","weight","width","height","labeloffset"],Be={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},qe=["labelpos"];function Ye(n,e){return C(y.c(n,e),Number)}function ze(n){var e={};return t.c(n,(function(n,r){e[r.toLowerCase()]=n})),e}},360:(n,e,r)=>{r.d(e,{c:()=>c});var t=r(2816),o=r(2440);const c=function(n,e){var r=-1,c=(0,o.c)(n)?Array(n.length):[];return(0,t.c)(n,(function(n,t,o){c[++r]=e(n,t,o)})),c}},2804:(n,e,r)=>{r.d(e,{c:()=>d});var t=r(4880),o=r(3048),c=r(5552),i=r(7e3),u=Object.prototype,a=u.hasOwnProperty;const d=(0,t.c)((function(n,e){n=Object(n);var r=-1,t=e.length,d=t>2?e[2]:void 0;for(d&&(0,c.c)(e[0],e[1],d)&&(t=1);++r<t;)for(var f=e[r],s=(0,i.c)(f),v=-1,g=s.length;++v<g;){var h=s[v],l=n[h];(void 0===l||(0,o.c)(l,u[h])&&!a.call(n,h))&&(n[h]=f[h])}return n}))},9552:(n,e,r)=>{r.d(e,{c:()=>o});var t=r(2952);const o=function(n){return(null==n?0:n.length)?(0,t.c)(n,1):[]}},2696:(n,e,r)=>{r.d(e,{c:()=>u});var t=r(1304),o=r(1312),c=r(360),i=r(8820);const u=function(n,e){return((0,i.c)(n)?t.c:c.c)(n,(0,o.c)(e,3))}},7488:(n,e,r)=>{r.d(e,{c:()=>p});var t=r(604),o=r(7412),c=r(8356),i=r(748),u=r(5368),a=r(2128);const d=function(n,e,r,t){if(!(0,u.c)(n))return n;for(var d=-1,f=(e=(0,c.c)(e,n)).length,s=f-1,v=n;null!=v&&++d<f;){var g=(0,a.c)(e[d]),h=r;if("__proto__"===g||"constructor"===g||"prototype"===g)return n;if(d!=s){var l=v[g];void 0===(h=t?t(l,g,v):void 0)&&(h=(0,u.c)(l)?l:(0,i.c)(e[d+1])?[]:{})}(0,o.c)(v,g,h),v=v[g]}return n};const f=function(n,e,r){for(var o=-1,i=e.length,u={};++o<i;){var a=e[o],f=(0,t.c)(n,a);r(f,a)&&d(u,(0,c.c)(a,n),f)}return u};var s=r(3556);const v=function(n,e){return f(n,e,(function(e,r){return(0,s.c)(n,r)}))};var g=r(9552),h=r(648),l=r(9669);const p=function(n){return(0,l.c)((0,h.c)(n,void 0,g.c),n+"")}((function(n,e){return null==n?{}:v(n,e)}))},9884:(n,e,r)=>{r.d(e,{c:()=>a});var t=Math.ceil,o=Math.max;const c=function(n,e,r,c){for(var i=-1,u=o(t((e-n)/(r||1)),0),a=Array(u);u--;)a[c?u:++i]=n,n+=r;return a};var i=r(5552),u=r(2400);const a=function(n){return function(e,r,t){return t&&"number"!=typeof t&&(0,i.c)(e,r,t)&&(r=t=void 0),e=(0,u.c)(e),void 0===r?(r=e,e=0):r=(0,u.c)(r),t=void 0===t?e<r?1:-1:(0,u.c)(t),c(e,r,t,n)}}()},2400:(n,e,r)=>{r.d(e,{c:()=>l});var t=/\s/;const o=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e};var c=/^\s+/;const i=function(n){return n?n.slice(0,o(n)+1).replace(c,""):n};var u=r(5368),a=r(8760),d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,s=/^0o[0-7]+$/i,v=parseInt;const g=function(n){if("number"==typeof n)return n;if((0,a.c)(n))return NaN;if((0,u.c)(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=(0,u.c)(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=i(n);var r=f.test(n);return r||s.test(n)?v(n.slice(2),r?2:8):d.test(n)?NaN:+n};var h=1/0;const l=function(n){return n?(n=g(n))===h||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}},1696:(n,e,r)=>{r.d(e,{c:()=>c});var t=r(400),o=0;const c=function(n){var e=++o;return(0,t.c)(n)+e}}}]);