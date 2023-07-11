import{S as Y,i as Z,s as tt,a as S,y as Q,Q as et,h as d,c as D,z as R,b as T,A as j,g as J,d as K,B as L,q as w,r as I,k as _,l as g,m as k,n as r,R as at,C as N,D as i,u as U}from"../chunks/index.b7d4fdb2.js";import{H as st,C as lt}from"../chunks/Content.8183fcfb.js";import{b as z}from"../chunks/paths.9f15be27.js";function W(c,l,s){const e=c.slice();return e[1]=l[s],e}function nt(c){let l;return{c(){l=w("IIOT International Final 2023 Tasks")},l(s){l=I(s,"IIOT International Final 2023 Tasks")},m(s,e){T(s,l,e)},d(s){s&&d(l)}}}function X(c){let l,s,e,a=c[1].name+"",o,t,n=c[1].id+"",$,E,A,p,f,H,v,B,C,y,h,F,b,P,G;return{c(){l=_("div"),s=_("div"),e=_("h2"),o=w(a),t=w(" ("),$=w(n),E=w(")"),A=S(),p=_("div"),f=_("a"),H=w(`Statement
							`),v=_("img"),y=S(),h=_("a"),F=w(`Solutions and test data
							`),b=_("img"),G=S(),this.h()},l(u){l=g(u,"DIV",{class:!0});var m=k(l);s=g(m,"DIV",{class:!0});var V=k(s);e=g(V,"H2",{class:!0});var x=k(e);o=I(x,a),t=I(x," ("),$=I(x,n),E=I(x,")"),x.forEach(d),A=D(V),p=g(V,"DIV",{class:!0});var q=k(p);f=g(q,"A",{class:!0,href:!0,target:!0});var M=k(f);H=I(M,`Statement
							`),v=g(M,"IMG",{class:!0,src:!0,alt:!0}),M.forEach(d),y=D(q),h=g(q,"A",{class:!0,href:!0,download:!0});var O=k(h);F=I(O,`Solutions and test data
							`),b=g(O,"IMG",{class:!0,src:!0,alt:!0}),O.forEach(d),q.forEach(d),V.forEach(d),G=D(m),m.forEach(d),this.h()},h(){r(e,"class","card-title text-xl"),r(v,"class","w-6"),N(v.src,B=z+"/images/pdf.png")||r(v,"src",B),r(v,"alt","pdf"),r(f,"class","text-lg normal-case h-auto px-4 py-2 btn btn-outline grow w-fit"),r(f,"href",C=z+"/tasks/2023/"+c[1].id+"/english.pdf"),r(f,"target","_blank"),r(b,"class","w-6"),N(b.src,P=z+"/images/zip.png")||r(b,"src",P),r(b,"alt","zip"),r(h,"class","btn-disabled text-lg normal-case h-auto px-4 py-2 btn btn-outline grow w-fit"),r(h,"href","#"),r(h,"download",""),r(p,"class","card-actions items-stretch gap-4"),r(s,"class","card-body gap-4 p-8"),r(l,"class","card bg-base-200 shadow-lg border border-base-300")},m(u,m){T(u,l,m),i(l,s),i(s,e),i(e,o),i(e,t),i(e,$),i(e,E),i(s,A),i(s,p),i(p,f),i(f,H),i(f,v),i(p,y),i(p,h),i(h,F),i(h,b),i(l,G)},p(u,m){m&1&&a!==(a=u[1].name+"")&&U(o,a),m&1&&n!==(n=u[1].id+"")&&U($,n),m&1&&C!==(C=z+"/tasks/2023/"+u[1].id+"/english.pdf")&&r(f,"href",C)},d(u){u&&d(l)}}}function rt(c){let l,s=c[0].tasks,e=[];for(let a=0;a<s.length;a+=1)e[a]=X(W(c,s,a));return{c(){l=_("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){l=g(a,"DIV",{class:!0});var o=k(l);for(let t=0;t<e.length;t+=1)e[t].l(o);o.forEach(d),this.h()},h(){r(l,"class","grid w-fit grid-cols-1 md:grid-cols-2 gap-8")},m(a,o){T(a,l,o);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,null)},p(a,o){if(o&1){s=a[0].tasks;let t;for(t=0;t<s.length;t+=1){const n=W(a,s,t);e[t]?e[t].p(n,o):(e[t]=X(n),e[t].c(),e[t].m(l,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=s.length}},d(a){a&&d(l),at(e,a)}}}function ot(c){let l,s,e,a,o;return s=new st({props:{$$slots:{default:[nt]},$$scope:{ctx:c}}}),a=new lt({props:{$$slots:{default:[rt]},$$scope:{ctx:c}}}),{c(){l=S(),Q(s.$$.fragment),e=S(),Q(a.$$.fragment),this.h()},l(t){et("svelte-1hbdog2",document.head).forEach(d),l=D(t),R(s.$$.fragment,t),e=D(t),R(a.$$.fragment,t),this.h()},h(){document.title="Tasks"},m(t,n){T(t,l,n),j(s,t,n),T(t,e,n),j(a,t,n),o=!0},p(t,[n]){const $={};n&16&&($.$$scope={dirty:n,ctx:t}),s.$set($);const E={};n&17&&(E.$$scope={dirty:n,ctx:t}),a.$set(E)},i(t){o||(J(s.$$.fragment,t),J(a.$$.fragment,t),o=!0)},o(t){K(s.$$.fragment,t),K(a.$$.fragment,t),o=!1},d(t){t&&d(l),L(s,t),t&&d(e),L(a,t)}}}function it(c,l,s){let{data:e}=l;return c.$$set=a=>{"data"in a&&s(0,e=a.data)},[e]}class ht extends Y{constructor(l){super(),Z(this,l,it,ot,tt,{data:0})}}export{ht as component};
