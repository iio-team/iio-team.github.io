import{S,i as V,s as j,a as E,y as C,Q as z,h,c as k,z as G,b as p,A as H,g,d as v,B as P,q as D,r as I,k as b,l as y,m as w,n as _,v as F,f as Q,R,F as $,u as J}from"../chunks/index.dc9b9336.js";import{H as K}from"../chunks/Hero.dc7ca457.js";import{C as L}from"../chunks/Content.a7c03e44.js";import{b as x}from"../chunks/paths.caa0f55d.js";import{P as M}from"../chunks/Picture.2a47c53d.js";function A(o,a,r){const n=o.slice();return n[1]=a[r],n}function N(o){let a;return{c(){a=D("Gallery")},l(r){a=I(r,"Gallery")},m(r,n){p(r,a,n)},d(r){r&&h(a)}}}function B(o){let a,r,n,t,c,e=o[1].title+"",l,s,u,m;return r=new M({props:{year:o[1].year,image:o[1].image}}),{c(){a=b("a"),C(r.$$.fragment),n=E(),t=b("div"),c=b("h2"),l=D(e),s=E(),this.h()},l(i){a=y(i,"A",{href:!0,class:!0});var f=w(a);G(r.$$.fragment,f),n=k(f),t=y(f,"DIV",{class:!0});var d=w(t);c=y(d,"H2",{class:!0});var q=w(c);l=I(q,e),q.forEach(h),d.forEach(h),s=k(f),f.forEach(h),this.h()},h(){_(c,"class","card-title text-xl text-base-content font-bold divider !my-0"),_(t,"class","card-body bg-base-300 w-full h-14 transition-all group-hover:-translate-y-2 justify-center"),_(a,"href",u=x+"/gallery/"+o[1].year),_(a,"class","group card card-compact w-full lg:w-96 h-fit bg-base-300 shadow-md overflow-hidden border border-base-300")},m(i,f){p(i,a,f),H(r,a,null),$(a,n),$(a,t),$(t,c),$(c,l),$(a,s),m=!0},p(i,f){const d={};f&1&&(d.year=i[1].year),f&1&&(d.image=i[1].image),r.$set(d),(!m||f&1)&&e!==(e=i[1].title+"")&&J(l,e),(!m||f&1&&u!==(u=x+"/gallery/"+i[1].year))&&_(a,"href",u)},i(i){m||(g(r.$$.fragment,i),m=!0)},o(i){v(r.$$.fragment,i),m=!1},d(i){i&&h(a),P(r)}}}function O(o){let a,r,n=o[0].galleries,t=[];for(let e=0;e<n.length;e+=1)t[e]=B(A(o,n,e));const c=e=>v(t[e],1,1,()=>{t[e]=null});return{c(){a=b("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){a=y(e,"DIV",{class:!0});var l=w(a);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(h),this.h()},h(){_(a,"class","grid w-full lg:w-fit grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6")},m(e,l){p(e,a,l);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(a,null);r=!0},p(e,l){if(l&1){n=e[0].galleries;let s;for(s=0;s<n.length;s+=1){const u=A(e,n,s);t[s]?(t[s].p(u,l),g(t[s],1)):(t[s]=B(u),t[s].c(),g(t[s],1),t[s].m(a,null))}for(F(),s=n.length;s<t.length;s+=1)c(s);Q()}},i(e){if(!r){for(let l=0;l<n.length;l+=1)g(t[l]);r=!0}},o(e){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)v(t[l]);r=!1},d(e){e&&h(a),R(t,e)}}}function T(o){let a,r,n,t,c;return r=new K({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),t=new L({props:{$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){a=E(),C(r.$$.fragment),n=E(),C(t.$$.fragment),this.h()},l(e){z("svelte-fw82y6",document.head).forEach(h),a=k(e),G(r.$$.fragment,e),n=k(e),G(t.$$.fragment,e),this.h()},h(){document.title="Gallery"},m(e,l){p(e,a,l),H(r,e,l),p(e,n,l),H(t,e,l),c=!0},p(e,[l]){const s={};l&16&&(s.$$scope={dirty:l,ctx:e}),r.$set(s);const u={};l&17&&(u.$$scope={dirty:l,ctx:e}),t.$set(u)},i(e){c||(g(r.$$.fragment,e),g(t.$$.fragment,e),c=!0)},o(e){v(r.$$.fragment,e),v(t.$$.fragment,e),c=!1},d(e){e&&h(a),P(r,e),e&&h(n),P(t,e)}}}function U(o,a,r){let{data:n}=a;return o.$$set=t=>{"data"in t&&r(0,n=t.data)},[n]}class te extends S{constructor(a){super(),V(this,a,U,T,j,{data:0})}}export{te as component};
