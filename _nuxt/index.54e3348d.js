import{t as O,i as W,n as I,a as S,b as w,c as E}from"./index.28714f24.js";import{a as h,b,w as A,k as z,s as N,l as g,g as T,G as _}from"./swiper-vue.aabf7ec7.js";function V(s,t,e){let i;z(e)?i={evaluating:e}:i=e||{};const{lazy:r=!1,evaluating:n=void 0,shallow:a=!0,onError:u=I}=i,c=h(!r),l=a?N(t):h(t);let o=0;return A(async f=>{if(!c.value)return;o++;const d=o;let v=!1;n&&Promise.resolve().then(()=>{n.value=!0});try{const p=await s(L=>{f(()=>{n&&(n.value=!1),v||L()})});d===o&&(l.value=p)}catch(p){u(p)}finally{n&&d===o&&(n.value=!1),v=!0}}),r?g(()=>(c.value=!0,l.value)):l}function y(s){var t;const e=w(s);return(t=e==null?void 0:e.$el)!=null?t:e}const m=W?window:void 0;function C(...s){let t,e,i,r;if(typeof s[0]=="string"||Array.isArray(s[0])?([e,i,r]=s,t=m):[t,e,i,r]=s,!t)return I;Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]);const n=[],a=()=>{n.forEach(o=>o()),n.length=0},u=(o,f,d,v)=>(o.addEventListener(f,d,v),()=>o.removeEventListener(f,d,v)),c=b(()=>[y(t),w(r)],([o,f])=>{if(a(),!o)return;const d=S(f)?{...f}:f;n.push(...e.flatMap(v=>i.map(p=>u(o,v,p,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),a()};return E(l),l}function F(){const s=h(!1);return T()&&_(()=>{s.value=!0}),s}function M(s){const t=F();return g(()=>(t.value,!!s()))}function H(s,t={}){const{window:e=m}=t,i=M(()=>e&&"matchMedia"in e&&typeof e.matchMedia=="function");let r;const n=h(!1),a=l=>{n.value=l.matches},u=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},c=A(()=>{i.value&&(u(),r=e.matchMedia(w(s)),"addEventListener"in r?r.addEventListener("change",a):r.addListener(a),n.value=r.matches)});return E(()=>{c(),u(),r=void 0}),n}function B(s,t,e={}){const{window:i=m,...r}=e;let n;const a=M(()=>i&&"ResizeObserver"in i),u=()=>{n&&(n.disconnect(),n=void 0)},c=g(()=>Array.isArray(s)?s.map(f=>y(f)):[y(s)]),l=b(c,f=>{if(u(),a.value&&i){n=new ResizeObserver(t);for(const d of f)d&&n.observe(d,r)}},{immediate:!0,flush:"post",deep:!0}),o=()=>{u(),l()};return E(o),{isSupported:a,stop:o}}function Q(s={}){const{window:t=m,initialWidth:e=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:n=!0}=s,a=h(e),u=h(i),c=()=>{t&&(n?(a.value=t.innerWidth,u.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(c(),O(c),C("resize",c,{passive:!0}),r){const l=H("(orientation: portrait)");b(l,()=>c())}return{width:a,height:u}}export{B as a,y as b,V as c,Q as u};
