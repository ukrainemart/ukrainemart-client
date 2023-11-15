import{_ as x}from"./nuxt-link.061f0be4.js";import{x as j,M as E,N as F,O as _,a1 as O,X as $,al as T,y as M,H as L,a as I,G as D,w as H}from"./swiper-vue.33fd3419.js";const U=["type"],de=j({__name:"ButtonOpacity",props:{to:{},type:{}},setup(e){return(t,n)=>{const r=x;return t.to?(E(),F(r,{key:0,to:t.to,class:"cursor-pointer text-black duration-hover hover:opacity-hover"},{default:_(()=>[O(t.$slots,"default")]),_:3},8,["to"])):(E(),$("button",{key:1,type:t.type||"button",class:"cursor-pointer text-black duration-hover hover:opacity-hover"},[O(t.$slots,"default")],8,U))}}});function g(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,g),r}var C=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(C||{}),R=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(R||{});function B({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var s;let u=P(r,n),a=Object.assign(o,{props:u});if(e||t&2&&u.static)return b(a);if(t&1){let h=(s=u.unmount)==null||s?0:1;return g(h,{0(){return null},1(){return b({...o,props:{...u,hidden:!0,style:{display:"none"}}})}})}return b(a)}function b({props:e,attrs:t,slots:n,slot:r,name:o}){var s,u;let{as:a,...h}=K(e,["unmount","static"]),c=(s=n.default)==null?void 0:s.call(n,r),m={};if(r){let f=!1,p=[];for(let[d,i]of Object.entries(r))typeof i=="boolean"&&(f=!0),i===!0&&p.push(d);f&&(m["data-headlessui-state"]=p.join(" "))}if(a==="template"){if(c=A(c??[]),Object.keys(h).length>0||Object.keys(t).length>0){let[f,...p]=c??[];if(!W(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(h).concat(Object.keys(t)).map(l=>l.trim()).filter((l,y,k)=>k.indexOf(l)===y).sort((l,y)=>l.localeCompare(y)).map(l=>`  - ${l}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(l=>`  - ${l}`).join(`
`)].join(`
`));let d=P((u=f.props)!=null?u:{},h),i=T(f,d);for(let l in d)l.startsWith("on")&&(i.props||(i.props={}),i.props[l]=d[l]);return i}return Array.isArray(c)&&c.length===1?c[0]:c}return M(a,Object.assign({},h,m),{default:()=>c})}function A(e){return e.flatMap(t=>t.type===L?A(t.children):[t])}function P(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...s){let u=n[r];for(let a of u){if(o instanceof Event&&o.defaultPrevented)return;a(o,...s)}}});return t}function fe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function K(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function W(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let G=0;function V(){return++G}function pe(){return V()}var q=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(q||{});function v(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function N(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function he(e,t){let n=I(N(e.value.type,e.value.as));return D(()=>{n.value=N(e.value.type,e.value.as)}),H(()=>{var r;n.value||v(t)&&v(t)instanceof HTMLButtonElement&&!((r=v(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var X=Object.defineProperty,Y=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t,n)=>(Y(e,typeof t!="symbol"?t+"":t,n),n);class z{constructor(){S(this,"current",this.detect()),S(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let J=new z;function Q(e){if(J.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=v(e);if(t)return t.ownerDocument}return document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Z=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Z||{}),ee=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ee||{}),te=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(te||{});function ne(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var re=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(re||{});function me(e,t=0){var n;return e===((n=Q(e))==null?void 0:n.body)?!1:g(t,{0(){return e.matches(w)},1(){let r=e;for(;r!==null;){if(r.matches(w))return!0;r=r.parentElement}return!1}})}var oe=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(oe||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ve(e){e==null||e.focus({preventScroll:!0})}let ae=["textarea","input"].join(",");function se(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ae))!=null?n:!1}function ue(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),s=t(r);if(o===null||s===null)return 0;let u=o.compareDocumentPosition(s);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ye(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var s;let u=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,a=Array.isArray(e)?n?ue(e):e:ne(e);o.length>0&&a.length>1&&(a=a.filter(i=>!o.includes(i))),r=r??u.activeElement;let h=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},f=0,p=a.length,d;do{if(f>=p||f+p<=0)return 0;let i=c+f;if(t&16)i=(i+p)%p;else{if(i<0)return 3;if(i>=p)return 1}d=a[i],d==null||d.focus(m),f+=h}while(d!==u.activeElement);return t&6&&se(d)&&d.select(),2}var ie=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ie||{});let be=j({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...o}=e,s={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return B({ourProps:s,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function we(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}export{B as H,fe as K,C as N,ue as O,ye as P,ve as S,K as T,de as _,q as a,he as b,ie as c,ee as d,we as e,be as f,Z as g,J as h,re as i,R as j,Q as m,v as o,pe as t,g as u,me as w};
