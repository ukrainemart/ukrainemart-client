import{ao as S,y as j,H as P,x as A}from"./swiper-vue.33fa7a2f.js";function w(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var x=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(x||{}),F=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(F||{});function $({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var a;let s=O(r,n),i=Object.assign(o,{props:s});if(e||t&2&&s.static)return y(i);if(t&1){let h=(a=s.unmount)==null||a?0:1;return w(h,{0(){return null},1(){return y({...o,props:{...s,hidden:!0,style:{display:"none"}}})}})}return y(i)}function y({props:e,attrs:t,slots:n,slot:r,name:o}){var a,s;let{as:i,...h}=T(e,["unmount","static"]),c=(a=n.default)==null?void 0:a.call(n,r),m={};if(r){let f=!1,p=[];for(let[d,l]of Object.entries(r))typeof l=="boolean"&&(f=!0),l===!0&&p.push(d);f&&(m["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(c=E(c??[]),Object.keys(h).length>0||Object.keys(t).length>0){let[f,...p]=c??[];if(!k(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(h).concat(Object.keys(t)).map(u=>u.trim()).filter((u,v,N)=>N.indexOf(u)===v).sort((u,v)=>u.localeCompare(v)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let d=O((s=f.props)!=null?s:{},h),l=S(f,d);for(let u in d)u.startsWith("on")&&(l.props||(l.props={}),l.props[u]=d[u]);return l}return Array.isArray(c)&&c.length===1?c[0]:c}return j(i,Object.assign({},h,m),{default:()=>c})}function E(e){return e.flatMap(t=>t.type===P?E(t.children):[t])}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...a){let s=n[r];for(let i of s){if(o instanceof Event&&o.defaultPrevented)return;i(o,...a)}}});return t}function Z(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function T(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function k(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let I=0;function D(){return++I}function ee(){return D()}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});function H(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var L=Object.defineProperty,U=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(U(e,typeof t!="symbol"?t+"":t,n),n);class R{constructor(){g(this,"current",this.detect()),g(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let _=new R;function C(e){if(_.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=H(e);if(t)return t.ownerDocument}return document}let b=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var K=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(K||{}),W=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(W||{}),G=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(G||{});function V(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(b)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var q=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(q||{});function te(e,t=0){var n;return e===((n=C(e))==null?void 0:n.body)?!1:w(t,{0(){return e.matches(b)},1(){let r=e;for(;r!==null;){if(r.matches(b))return!0;r=r.parentElement}return!1}})}var B=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(B||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ne(e){e==null||e.focus({preventScroll:!0})}let X=["textarea","input"].join(",");function Y(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,X))!=null?n:!1}function z(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let s=o.compareDocumentPosition(a);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function re(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var a;let s=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,i=Array.isArray(e)?n?z(e):e:V(e);o.length>0&&i.length>1&&(i=i.filter(l=>!o.includes(l))),r=r??s.activeElement;let h=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},f=0,p=i.length,d;do{if(f>=p||f+p<=0)return 0;let l=c+f;if(t&16)l=(l+p)%p;else{if(l<0)return 3;if(l>=p)return 1}d=i[l],d==null||d.focus(m),f+=h}while(d!==s.activeElement);return t&6&&Y(d)&&d.select(),2}var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});let oe=A({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...o}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:a,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function ie(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}export{$ as H,Z as K,x as N,z as O,re as P,ne as S,T,M as a,J as b,W as c,ie as d,K as e,oe as f,_ as g,F as h,q as i,C as m,H as o,ee as t,w as u,te as w};
