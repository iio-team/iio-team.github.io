import{S as V,i as B,s as F,a as w,y as k,R as M,h as f,c as y,z as q,b as p,A as C,g as D,d as H,B as U,q as R,r as S,k as m,l as g,m as $,n as c,T as P,D as j,E as d,u as T}from"../chunks/index.f6098fd6.js";import{H as J,C as K}from"../chunks/Content.0b63bfdf.js";import{b}from"../chunks/paths.4d0b0199.js";function z(o,a,s){const t=o.slice();return t[1]=a[s],t}function L(o){let a;return{c(){a=R("Gallery")},l(s){a=S(s,"Gallery")},m(s,t){p(s,a,t)},d(s){s&&f(a)}}}function A(o){let a,s,t,l,n,e,r,u=o[1].title+"",_,E,v;return{c(){a=m("a"),s=m("figure"),t=m("img"),n=w(),e=m("div"),r=m("h2"),_=R(u),E=w(),this.h()},l(h){a=g(h,"A",{href:!0,class:!0});var i=$(a);s=g(i,"FIGURE",{class:!0});var G=$(s);t=g(G,"IMG",{src:!0,class:!0,alt:!0,loading:!0}),G.forEach(f),n=y(i),e=g(i,"DIV",{class:!0});var x=$(e);r=g(x,"H2",{class:!0});var I=$(r);_=S(I,u),I.forEach(f),x.forEach(f),E=y(i),i.forEach(f),this.h()},h(){j(t.src,l=b+"/"+o[1].coverUrl)||c(t,"src",l),c(t,"class","min-h-full object-cover"),c(t,"alt",""),c(t,"loading","lazy"),c(s,"class","w-full h-56 bg-base-200"),c(r,"class","card-title text-xl text-base-content"),c(e,"class","card-body bg-base-300 w-full h-14 transition-all justify-center svelte-9fa0o3"),c(a,"href",v=b+"/gallery/"+o[1].year),c(a,"class","card card-compact w-full lg:w-72 xl:w-96 bg-base-300 shadow-lg overflow-hidden border border-base-300 svelte-9fa0o3")},m(h,i){p(h,a,i),d(a,s),d(s,t),d(a,n),d(a,e),d(e,r),d(r,_),d(a,E)},p(h,i){i&1&&!j(t.src,l=b+"/"+h[1].coverUrl)&&c(t,"src",l),i&1&&u!==(u=h[1].title+"")&&T(_,u),i&1&&v!==(v=b+"/gallery/"+h[1].year)&&c(a,"href",v)},d(h){h&&f(a)}}}function N(o){let a,s=o[0].galleries,t=[];for(let l=0;l<s.length;l+=1)t[l]=A(z(o,s,l));return{c(){a=m("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){a=g(l,"DIV",{class:!0});var n=$(a);for(let e=0;e<t.length;e+=1)t[e].l(n);n.forEach(f),this.h()},h(){c(a,"class","grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ")},m(l,n){p(l,a,n);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(a,null)},p(l,n){if(n&1){s=l[0].galleries;let e;for(e=0;e<s.length;e+=1){const r=z(l,s,e);t[e]?t[e].p(r,n):(t[e]=A(r),t[e].c(),t[e].m(a,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=s.length}},d(l){l&&f(a),P(t,l)}}}function O(o){let a,s,t,l,n;return s=new J({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),l=new K({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){a=w(),k(s.$$.fragment),t=w(),k(l.$$.fragment),this.h()},l(e){M("svelte-fw82y6",document.head).forEach(f),a=y(e),q(s.$$.fragment,e),t=y(e),q(l.$$.fragment,e),this.h()},h(){document.title="Gallery"},m(e,r){p(e,a,r),C(s,e,r),p(e,t,r),C(l,e,r),n=!0},p(e,[r]){const u={};r&16&&(u.$$scope={dirty:r,ctx:e}),s.$set(u);const _={};r&17&&(_.$$scope={dirty:r,ctx:e}),l.$set(_)},i(e){n||(D(s.$$.fragment,e),D(l.$$.fragment,e),n=!0)},o(e){H(s.$$.fragment,e),H(l.$$.fragment,e),n=!1},d(e){e&&f(a),U(s,e),e&&f(t),U(l,e)}}}function Q(o,a,s){let{data:t}=a;return o.$$set=l=>{"data"in l&&s(0,t=l.data)},[t]}class Z extends V{constructor(a){super(),B(this,a,Q,O,F,{data:0})}}export{Z as component};
