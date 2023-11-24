import{x as C,t as be,l as c,M as B,X as le,Y as J,a7 as dt,ak as ct,L as he,a1 as We,_ as ft,Z as je,a4 as R,a3 as Q,N as re,a as f,w as H,G as F,j as M,y as S,H as pt,b as ue,z as N,i as P,al as vt,r as mt,s as ht,n as gt,a5 as pe,O as ee,I as $e}from"./swiper-vue.33fa7a2f.js";import{_ as qe,m as Ge,a as oe,t as bt}from"./entry.8300854b.js";import{e as yt,u as Ye,t as wt,m as Et}from"./ui.config.2bc656c0.js";import{u as St}from"./InputOutline.vue.9e1f9fb4.js";import{u as Ct}from"./uid.12f507af.js";import Tt from"./Close.4535d2a9.js";import $t from"./Burger.af9cfca0.js";import{i as ze,m as ie,f as ke,b as Ae,H as j,S as G,o as b,d as Xe,u as Y,P as ge,e as U,c as Lt,t as He,N as Be,a as Ft,j as W,T as kt}from"./micro-task.649043b7.js";import{w as At,t as Bt,o as ye,y as Pt}from"./disposables.48db5984.js";import{p as Je,l as L,C as Ot,c as Dt}from"./open-closed.13c30630.js";const Ve=Ge(oe.ui.strategy,oe.ui.checkbox,yt),Rt=C({inheritAttrs:!1,props:{id:{type:String,default:()=>Ct()},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>Ve.default.color,validator(e){return oe.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:n,attrs:l}=Ye("checkbox",be(e,"ui"),Ve,be(e,"class")),{emitFormChange:a,color:o,name:r,inputId:u}=St(e),i=c({get(){return e.modelValue},set(m){t("update:modelValue",m)}}),s=m=>{t("change",m),a()},d=c(()=>wt(bt(n.value.base,n.value.rounded,n.value.background,n.value.border,n.value.ring.replaceAll("{color}",o.value),n.value.color.replaceAll("{color}",o.value)),e.inputClass));return{ui:n,attrs:l,toggle:i,inputId:u,name:r,inputClass:d,onChange:s}}}),Ht={class:"flex items-center h-5"},Mt=["id","name","required","value","disabled","checked","indeterminate"],Nt={key:0,class:"ms-3 text-sm"},jt=["for"];function Vt(e,t,n,l,a,o){return B(),le("div",{class:R(e.ui.wrapper)},[J("div",Ht,[dt(J("input",he({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.attrs,{onChange:t[1]||(t[1]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Mt),[[ct,e.toggle]])]),e.label||e.$slots.label?(B(),le("div",Nt,[J("label",{for:e.inputId,class:R(e.ui.label)},[We(e.$slots,"label",{},()=>[ft(je(e.label),1)]),e.required?(B(),le("span",{key:0,class:R(e.ui.required)},"*",2)):Q("",!0)],10,jt),e.help?(B(),le("p",{key:0,class:R(e.ui.help)},je(e.help),3)):Q("",!0)])):Q("",!0)],2)}const _t=qe(Rt,[["render",Vt]]),Rn=C({__name:"Checkbox",props:{ui:{}},setup(e){return(t,n)=>{const l=_t;return B(),re(l,{ui:{border:"border-black",color:"!text-black",background:"bg-transparent",...t.ui},class:"text-black"},null,8,["ui"])}}}),Hn=C({__name:"ButtonBurger",props:{isActive:{type:Boolean}},setup(e){return(t,n)=>{const l=Tt,a=$t;return B(),le("button",null,[t.isActive?(B(),re(l,{key:0,fontControlled:!1,class:"h-[14px] w-[14px] md:h-[18px] md:w-[18px]"})):Q("",!0),t.isActive?Q("",!0):(B(),re(a,{key:1,fontControlled:!1,class:"h-[14px] w-[23px] md:h-[18px] md:w-[27px]"}))])}}});var ae=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ae||{});function Ut(){let e=f(0);return At("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Qe(e,t,n,l){ze.isServer||H(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}function It(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ze(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=b(n);l instanceof HTMLElement&&t.add(l)}return t}var Ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ke||{});let te=Object.assign(C({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=f(null);l({el:a,$el:a});let o=c(()=>ie(a)),r=f(!1);F(()=>r.value=!0),M(()=>r.value=!1),qt({ownerDocument:o},c(()=>r.value&&!!(e.features&16)));let u=Gt({ownerDocument:o,container:a,initialFocus:c(()=>e.initialFocus)},c(()=>r.value&&!!(e.features&2)));Yt({ownerDocument:o,container:a,containers:e.containers,previousActiveElement:u},c(()=>r.value&&!!(e.features&8)));let i=Ut();function s(h){let y=b(a);y&&(w=>w())(()=>{Y(i.value,{[ae.Forwards]:()=>{ge(y,U.First,{skipElements:[h.relatedTarget]})},[ae.Backwards]:()=>{ge(y,U.Last,{skipElements:[h.relatedTarget]})}})})}let d=f(!1);function m(h){h.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function v(h){if(!r.value)return;let y=Ze(e.containers);b(a)instanceof HTMLElement&&y.add(b(a));let w=h.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(xe(y,w)||(d.value?ge(b(a),Y(i.value,{[ae.Forwards]:()=>U.Next,[ae.Backwards]:()=>U.Previous})|U.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&G(h.target)))}return()=>{let h={},y={ref:a,onKeydown:m,onFocusout:v},{features:w,initialFocus:T,containers:Z,...$}=e;return S(pt,[!!(w&4)&&S(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Ae.Focusable}),j({ourProps:y,theirProps:{...t,...$},slot:h,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&S(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Ae.Focusable})])}}}),{features:Ke}),I=[];It(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&I[0]!==t.target&&(I.unshift(t.target),I=I.filter(n=>n!=null&&n.isConnected),I.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Wt(e){let t=f(I.slice());return ue([e],([n],[l])=>{l===!0&&n===!1?Xe(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=I.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function qt({ownerDocument:e},t){let n=Wt(t);F(()=>{H(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&G(n())},{flush:"post"})}),M(()=>{t.value&&G(n())})}function Gt({ownerDocument:e,container:t,initialFocus:n},l){let a=f(null),o=f(!1);return F(()=>o.value=!0),M(()=>o.value=!1),F(()=>{ue([t,n,l],(r,u)=>{if(r.every((s,d)=>(u==null?void 0:u[d])===s)||!l.value)return;let i=b(t);i&&Xe(()=>{var s,d;if(!o.value)return;let m=b(n),v=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===v){a.value=v;return}}else if(i.contains(v)){a.value=v;return}m?G(m):ge(i,U.First|U.NoScroll)===Lt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function Yt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var o;Qe((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!a.value)return;let u=Ze(n);b(t)instanceof HTMLElement&&u.add(b(t));let i=l.value;if(!i)return;let s=r.target;s&&s instanceof HTMLElement?xe(u,s)?(l.value=s,G(s)):(r.preventDefault(),r.stopPropagation(),G(i)):G(l.value)},!0)}function xe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Le=new Map,ne=new Map;function _e(e,t=f(!0)){H(n=>{var l;if(!t.value)return;let a=b(e);if(!a)return;n(function(){var r;if(!a)return;let u=(r=ne.get(a))!=null?r:1;if(u===1?ne.delete(a):ne.set(a,u-1),u!==1)return;let i=Le.get(a);i&&(i["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",i["aria-hidden"]),a.inert=i.inert,Le.delete(a))});let o=(l=ne.get(a))!=null?l:0;ne.set(a,o+1),o===0&&(Le.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let et=Symbol("ForcePortalRootContext");function zt(){return P(et,!1)}let Ue=C({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return N(et,e.force),()=>{let{force:l,...a}=e;return j({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Xt(e){let t=ie(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Jt=C({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=f(null),a=c(()=>ie(l)),o=zt(),r=P(tt,null),u=f(o===!0||r==null?Xt(l.value):r.resolveTarget());H(()=>{o||r!=null&&(u.value=r.resolveTarget())});let i=P(Pe,null);return F(()=>{let s=b(l);s&&i&&M(i.register(s))}),M(()=>{var s,d;let m=(s=a.value)==null?void 0:s.getElementById("headlessui-portal-root");m&&u.value===m&&u.value.children.length<=0&&((d=u.value.parentElement)==null||d.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return S(vt,{to:u.value},j({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Pe=Symbol("PortalParentContext");function Qt(){let e=P(Pe,null),t=f([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let r=t.value.indexOf(o);r!==-1&&t.value.splice(r,1),e&&e.unregister(o)}let a={register:n,unregister:l,portals:t};return[t,C({name:"PortalWrapper",setup(o,{slots:r}){return N(Pe,a),()=>{var u;return(u=r.default)==null?void 0:u.call(r)}}})]}let tt=Symbol("PortalGroupContext"),Zt=C({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=mt({resolveTarget(){return e.target}});return N(tt,l),()=>{let{target:a,...o}=e;return j({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),nt=Symbol("StackContext");var Oe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Oe||{});function Kt(){return P(nt,()=>{})}function xt({type:e,enabled:t,element:n,onUpdate:l}){let a=Kt();function o(...r){l==null||l(...r),a(...r)}F(()=>{ue(t,(r,u)=>{r?o(0,e,n):u===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),M(()=>{t.value&&o(1,e,n)}),N(nt,o)}let en=Symbol("DescriptionContext");function tn({slot:e=f({}),name:t="Description",props:n={}}={}){let l=f([]);function a(o){return l.value.push(o),()=>{let r=l.value.indexOf(o);r!==-1&&l.value.splice(r,1)}}return N(en,{register:a,slot:e,name:t,props:n}),c(()=>l.value.length>0?l.value.join(" "):void 0)}function nn(e){let t=ht(e.getSnapshot());return M(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function ln(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...o){let r=t[a].call(n,...o);r&&(n=r,l.forEach(u=>u()))}}}function an(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,o=e-a;n.style(l,"paddingRight",`${o}px`)}}}function rn(){if(!Bt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function a(r){return l.containers.flatMap(u=>u()).some(u=>u.contains(r))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let r=ye();r.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>r.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",r=>{if(r.target instanceof HTMLElement)try{let u=r.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!a(s)&&(o=s)}catch{}},!0),n.addEventListener(t,"touchmove",r=>{r.target instanceof HTMLElement&&!a(r.target)&&r.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function on(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function un(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=ln(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ye(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:un(n)},a=[rn(),an(),on()];a.forEach(({before:o})=>o==null?void 0:o(l)),a.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function sn(e,t,n){let l=nn(q),a=c(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return ue([e,t],([o,r],[u],i)=>{if(!o||!r)return;q.dispatch("PUSH",o,n);let s=!1;i(()=>{s||(q.dispatch("POP",u??o,n),s=!0)})},{immediate:!0}),a}function dn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=f(null),a=ie(l);function o(){var r;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"value"in i&&i.value instanceof HTMLElement&&u.push(i.value));if(t!=null&&t.value)for(let i of t.value)u.push(i);for(let i of(r=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?r:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(b(l))||u.some(s=>i.contains(s))||u.push(i));return u}return{resolveContainers:o,contains(r){return o().some(u=>u.contains(r))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:S(ke,{features:Ae.Hidden,ref:l})}}}var cn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(cn||{});let De=Symbol("DialogContext");function lt(e){let t=P(De,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,lt),n}return t}let ve="DC8F892D-2EBD-447C-A4C8-A03058436FF4",fn=C({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ve},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${He()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var o;let r=f(!1);F(()=>{r.value=!0});let u=f(0),i=Je(),s=c(()=>e.open===ve&&i!==null?(i.value&L.Open)===L.Open:e.open),d=f(null),m=c(()=>ie(d));if(a({el:d,$el:d}),!(e.open!==ve||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ve?void 0:e.open}`);let v=c(()=>r.value&&s.value?0:1),h=c(()=>v.value===0),y=c(()=>u.value>1),w=P(De,null)!==null,[T,Z]=Qt(),{resolveContainers:$,mainTreeNodeRef:V,MainTreeNode:se}=dn({portals:T,defaultContainers:[c(()=>{var p;return(p=E.panelRef.value)!=null?p:d.value})]}),de=c(()=>y.value?"parent":"leaf"),K=c(()=>i!==null?(i.value&L.Closing)===L.Closing:!1),Ee=c(()=>w||K.value?!1:h.value),ce=c(()=>{var p,g,k;return(k=Array.from((g=(p=m.value)==null?void 0:p.querySelectorAll("body > *"))!=null?g:[]).find(A=>A.id==="headlessui-portal-root"?!1:A.contains(b(V))&&A instanceof HTMLElement))!=null?k:null});_e(ce,Ee);let Se=c(()=>y.value?!0:h.value),Ce=c(()=>{var p,g,k;return(k=Array.from((g=(p=m.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(A=>A.contains(b(V))&&A instanceof HTMLElement))!=null?k:null});_e(Ce,Se),xt({type:"Dialog",enabled:c(()=>v.value===0),element:d,onUpdate:(p,g)=>{if(g==="Dialog")return Y(p,{[Oe.Add]:()=>u.value+=1,[Oe.Remove]:()=>u.value-=1})}});let Te=tn({name:"DialogDescription",slot:c(()=>({open:s.value}))}),z=f(null),E={titleId:z,panelRef:f(null),dialogState:v,setTitleId(p){z.value!==p&&(z.value=p)},close(){t("close",!1)}};N(De,E);let x=c(()=>!(!h.value||y.value));Pt($,(p,g)=>{E.close(),gt(()=>g==null?void 0:g.focus())},x);let O=c(()=>!(y.value||v.value!==0));Qe((o=m.value)==null?void 0:o.defaultView,"keydown",p=>{O.value&&(p.defaultPrevented||p.key===Ft.Escape&&(p.preventDefault(),p.stopPropagation(),E.close()))});let X=c(()=>!(K.value||v.value!==0||w));return sn(m,X,p=>{var g;return{containers:[...(g=p.containers)!=null?g:[],$]}}),H(p=>{if(v.value!==0)return;let g=b(d);if(!g)return;let k=new ResizeObserver(A=>{for(let fe of A){let D=fe.target.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&E.close()}});k.observe(g),p(()=>k.disconnect())}),()=>{let{id:p,open:g,initialFocus:k,...A}=e,fe={...n,ref:d,id:p,role:"dialog","aria-modal":v.value===0?!0:void 0,"aria-labelledby":z.value,"aria-describedby":Te.value},D={open:v.value===0};return S(Ue,{force:!0},()=>[S(Jt,()=>S(Zt,{target:d.value},()=>S(Ue,{force:!1},()=>S(te,{initialFocus:k,containers:$,features:h.value?Y(de.value,{parent:te.features.RestoreFocus,leaf:te.features.All&~te.features.FocusLock}):te.features.None},()=>S(Z,{},()=>j({ourProps:fe,theirProps:{...A,...n},slot:D,attrs:n,slots:l,visible:v.value===0,features:Be.RenderStrategy|Be.Static,name:"Dialog"})))))),S(se)])}}}),pn=C({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${He()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=lt("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function o(r){r.stopPropagation()}return()=>{let{id:r,...u}=e,i={id:r,ref:a.panelRef,onClick:o};return j({ourProps:i,theirProps:u,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function vn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Fe(e,...t){e&&t.length>0&&e.classList.add(...t)}function me(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Re=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Re||{});function mn(e,t){let n=ye();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[o,r]=[l,a].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return i});return o!==0?n.setTimeout(()=>t("finished"),o+r):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ie(e,t,n,l,a,o){let r=ye(),u=o!==void 0?vn(o):()=>{};return me(e,...a),Fe(e,...t,...n),r.nextFrame(()=>{me(e,...n),Fe(e,...l),r.add(mn(e,i=>(me(e,...l,...t),Fe(e,...a),u(i))))}),r.add(()=>me(e,...t,...n,...l,...a)),r.add(()=>u("cancelled")),r.dispose}function _(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Me=Symbol("TransitionContext");var hn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(hn||{});function gn(){return P(Me,null)!==null}function bn(){let e=P(Me,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function yn(){let e=P(Ne,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ne=Symbol("NestingContext");function we(e){return"children"in e?we(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function at(e){let t=f([]),n=f(!1);F(()=>n.value=!0),M(()=>n.value=!1);function l(o,r=W.Hidden){let u=t.value.findIndex(({id:i})=>i===o);u!==-1&&(Y(r,{[W.Unmount](){t.value.splice(u,1)},[W.Hidden](){t.value[u].state="hidden"}}),!we(t)&&n.value&&(e==null||e()))}function a(o){let r=t.value.find(({id:u})=>u===o);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:o,state:"visible"}),()=>l(o,W.Unmount)}return{children:t,register:a,unregister:l}}let rt=Be.RenderStrategy,ot=C({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let o=f(0);function r(){o.value|=L.Opening,t("beforeEnter")}function u(){o.value&=~L.Opening,t("afterEnter")}function i(){o.value|=L.Closing,t("beforeLeave")}function s(){o.value&=~L.Closing,t("afterLeave")}if(!gn()&&Ot())return()=>S(ut,{...e,onBeforeEnter:r,onAfterEnter:u,onBeforeLeave:i,onAfterLeave:s},l);let d=f(null),m=c(()=>e.unmount?W.Unmount:W.Hidden);a({el:d,$el:d});let{show:v,appear:h}=bn(),{register:y,unregister:w}=yn(),T=f(v.value?"visible":"hidden"),Z={value:!0},$=He(),V={value:!1},se=at(()=>{!V.value&&T.value!=="hidden"&&(T.value="hidden",w($),s())});F(()=>{let E=y($);M(E)}),H(()=>{if(m.value===W.Hidden&&$){if(v.value&&T.value!=="visible"){T.value="visible";return}Y(T.value,{hidden:()=>w($),visible:()=>y($)})}});let de=_(e.enter),K=_(e.enterFrom),Ee=_(e.enterTo),ce=_(e.entered),Se=_(e.leave),Ce=_(e.leaveFrom),Te=_(e.leaveTo);F(()=>{H(()=>{if(T.value==="visible"){let E=b(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function z(E){let x=Z.value&&!h.value,O=b(d);!O||!(O instanceof HTMLElement)||x||(V.value=!0,v.value&&r(),v.value||i(),E(v.value?Ie(O,de,K,Ee,ce,X=>{V.value=!1,X===Re.Finished&&u()}):Ie(O,Se,Ce,Te,ce,X=>{V.value=!1,X===Re.Finished&&(we(se)||(T.value="hidden",w($),s()))})))}return F(()=>{ue([v],(E,x,O)=>{z(O),Z.value=!1},{immediate:!0})}),N(Ne,se),Dt(c(()=>Y(T.value,{visible:L.Open,hidden:L.Closed})|o.value)),()=>{let{appear:E,show:x,enter:O,enterFrom:X,enterTo:p,entered:g,leave:k,leaveFrom:A,leaveTo:fe,...D}=e,it={ref:d},st={...D,...h.value&&v.value&&ze.isServer?{class:R([n.class,D.class,...de,...K])}:{}};return j({theirProps:st,ourProps:it,slot:{},slots:l,attrs:n,features:rt,visible:T.value==="visible",name:"TransitionChild"})}}}),wn=ot,ut=C({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=Je(),o=c(()=>e.show===null&&a!==null?(a.value&L.Open)===L.Open:e.show);H(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=f(o.value?"visible":"hidden"),u=at(()=>{r.value="hidden"}),i=f(!0),s={show:o,appear:c(()=>e.appear||!i.value)};return F(()=>{H(()=>{i.value=!1,o.value?r.value="visible":we(u)||(r.value="hidden")})}),N(Ne,u),N(Me,s),()=>{let d=kt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return j({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(wn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},l.default)]},attrs:{},features:rt,visible:r.value==="visible",name:"Transition"})}}});const En=Ge(oe.ui.strategy,oe.ui.modal,Et),Sn=C({components:{HDialog:fn,HDialogPanel:pn,TransitionRoot:ut,TransitionChild:ot},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:t}){const{ui:n,attrs:l}=Ye("modal",be(e,"ui"),En,be(e,"class")),a=c({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),o=c(()=>e.transition?{...n.value.transition}:{});function r(u){a.value=u,t("close")}return{ui:n,attrs:l,isOpen:a,transitionClass:o,close:r}}});function Cn(e,t,n,l,a,o){const r=pe("TransitionChild"),u=pe("HDialogPanel"),i=pe("HDialog"),s=pe("TransitionRoot");return B(),re(s,{appear:e.appear,show:e.isOpen,as:"template"},{default:ee(()=>[$e(i,he({class:e.ui.wrapper},e.attrs,{onClose:t[0]||(t[0]=d=>!e.preventClose&&e.close(d))}),{default:ee(()=>[e.overlay?(B(),re(r,he({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:ee(()=>[J("div",{class:R([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):Q("",!0),J("div",{class:R(e.ui.inner)},[J("div",{class:R([e.ui.container,!e.fullscreen&&e.ui.padding])},[$e(r,he({as:"template",appear:e.appear},e.transitionClass),{default:ee(()=>[$e(u,{class:R([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?"w-screen":e.ui.width,e.fullscreen?"h-screen":e.ui.height,e.fullscreen?"rounded-none":e.ui.rounded,e.fullscreen?"m-0":e.ui.margin])},{default:ee(()=>[We(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class"])]),_:3},8,["appear","show"])}const Mn=qe(Sn,[["render",Cn]]);export{Rn as _,Hn as a,Mn as b};
