import{_ as ne,a as se}from"./ProductTitle.vue.6dc3399d.js";import{_ as U,m as D,a as j,t as ae,d as le,b as re,c as Y,e as ie}from"./entry.47120633.js";import{M as l,X as f,a1 as k,x as w,l as z,Y as s,I as p,Z as L,u as g,H as V,a2 as S,a3 as B,N as y,O as b,_ as C,t as A,L as $,a as N,a4 as I,J as ue,k as Q}from"./swiper-vue.01371f92.js";import pe from"./BreadcrumbArrowDown.16cbc752.js";import{u as q}from"./useMultiLang.42814600.js";import{u as de}from"./index.44e48c92.js";import{_ as ce,a as me}from"./ButtonBurger.vue.cb4384c4.js";import{_ as fe,a as _e}from"./InputOutline.vue.6e797599.js";import ge from"./Close.51b82424.js";import{_ as be}from"./ButtonOutline.vue.7f0740a6.js";import{_ as ve}from"./CardProduct.vue.32ecaf4f.js";import ye from"./ArrowRightSecond.262bd1f4.js";import{t as xe}from"./tw-merge.b319f1c1.js";import{k as he,u as J,t as Ce,p as $e,b as ke}from"./ui.config.134fddf7.js";import{u as Be}from"./usePopper.40a35113.js";import{_ as ee}from"./Button.375e262c.js";import{_ as we}from"./Modal.235688ff.js";import{u as Oe}from"./useApi.249f9ad9.js";import"./nuxt-link.a52f80f3.js";import"./BreadcrumbArrow.e51a5f9f.js";import"./nuxt-icon.13796cac.js";import"./cn.a642df04.js";import"./uid.12f507af.js";import"./Burger.bd116099.js";import"./Hearth.61c28977.js";import"./HearthBg.1f36fd33.js";import"./index.41f836bf.js";import"./Icon.f217963b.js";import"./micro-task.1b13e225.js";import"./disposables.8a1a5baa.js";import"./open-closed.b39cf687.js";const Pe={},Me={class:"mb-2.5 text-[12px] font-medium md:mb-[13px] md:text-[14px] lg:mb-[15px] 2xl:text-[20px]"};function ze(e,t){return l(),f("p",Me,[k(e.$slots,"default")])}const Le=U(Pe,[["render",ze]]),je={class:"mb-[7px] flex items-center gap-[2px] md:mb-2.5"},Fe={class:"breadcrumb_item"},Ne={class:"mb-[7px] ml-[14px] flex flex-col gap-y-[7px] md:mb-2.5 md:ml-2.5 md:gap-y-2.5"},Ae={key:0},Ue={class:"breadcrumb_item"},Z=1,Ve=w({__name:"CategoryBreadcrumb",props:{sameCategories:{},breadcrumb:{}},setup(e){const t=e,[d,r]=de(!1),a=z(()=>{var o;return d.value?t.sameCategories:(o=t.sameCategories)==null?void 0:o.slice(0,Z)});return(o,u)=>{var i;const n=pe;return l(),f("div",null,[s("div",je,[p(n,{fontControlled:!1,class:"h-[3px] w-[5px] rotate-90 text-transparent"}),s("p",Fe,L(("useMultiLang"in o?o.useMultiLang:g(q))(o.breadcrumb,"title")),1)]),s("ul",Ne,[(l(!0),f(V,null,S(g(a),m=>(l(),f("li",{key:m.id,class:"breadcrumb_item"},L(("useMultiLang"in o?o.useMultiLang:g(q))(m,"title")),1))),128))]),((i=o.sameCategories)==null?void 0:i.length)>Z?(l(),f("div",Ae,[s("button",{class:"ml-[14px] flex items-center gap-[3px] md:ml-2.5",onClick:u[0]||(u[0]=m=>g(r)(!g(d)))},[s("span",Ue,L(g(d)?"Hide":"Показати більше"),1),p(n,{fontControlled:!1,class:"h-[3px] w-[5px] text-transparent"})])])):B("",!0)])}}});const Se=w({__name:"CategoryCheckbox",props:{label:{}},setup(e){return(t,d)=>{const r=ce,a=fe;return l(),y(a,{label:t.label,styles:"flex-row-reverse w-fit justify-end items-center text-black text-[10px] md:text-[12px] gap-[7px] 4xl:text-[16px]"},{default:b(()=>[p(r,{"model-value":!0,ui:{base:"h-[12px] w-[12px] md:h-[13px] md:w-[13px] 4xl:h-[16px] 4xl:w-[16px]"}})]),_:1},8,["label"])}}}),Te={class:"mb-5"},Ie={class:"mb-5"},De={class:"mb-5"},Ge={class:"mb-5"},He={class:"flex gap-x-[10px] md:gap-x-[25px]"},Re=s("button",{class:"rounded-[50px] border border-solid border-black bg-black px-[30px] py-[7px] text-[12px] leading-[15px] text-white transition-colors duration-100 ease-in hover:bg-transparent hover:text-black focus:outline-none disabled:cursor-not-allowed md:px-[39.5px] md:py-[9px] md:text-[16px] md:leading-[20px]"}," Ok ",-1),te=w({__name:"CategoryFilters",props:{category:{}},setup(e){return(t,d)=>{var n,i;const r=Le,a=Ve,o=Se,u=_e;return l(),f("div",null,[s("div",Te,[p(r,null,{default:b(()=>[C("Каталог")]),_:1}),p(a,{breadcrumb:(n=t.category)==null?void 0:n.breadcrumb,sameCategories:(i=t.category)==null?void 0:i.same_categories},null,8,["breadcrumb","sameCategories"])]),s("div",Ie,[p(r,null,{default:b(()=>[C("Особливості постачальника")]),_:1}),p(o,{label:"Верифікований постачальник"})]),s("div",De,[p(r,null,{default:b(()=>[C("Особливості товару")]),_:1}),p(o,{label:"Готовий до відправки"}),p(o,{label:"Платні зразки"})]),s("div",Ge,[p(r,null,{default:b(()=>[C("Мінімальне замовлення")]),_:1}),s("div",He,[p(u,{customClass:"input_outline_category"}),Re])])])}}});const Ee={},We={class:"fill_revert_layer flex items-center gap-x-[20px] md:gap-x-[35px] 4xl:gap-x-[50px]"};function qe(e,t){const d=ge,r=be;return l(),y(r,{styles:"px-[17px] text-[10px] md:text-[12px] 4xl:text-[16px] md:px-[21px] md:py-[11px]"},{default:b(()=>[s("span",We,[k(e.$slots,"default"),p(d,{class:"h-[6px] w-[6px] stroke-black transition-colors duration-100 ease-in group-hover:stroke-white md:h-2.5 md:w-2.5",fontControlled:!1})])]),_:3})}const Je=U(Ee,[["render",qe]]),Ke={class:"flex flex-wrap gap-2.5 md:gap-5 4xl:gap-[30px]"},Xe=w({__name:"FilterTags",setup(e){const t=[{id:1,title:"tag1"},{id:2,title:"tag2tag2tag2tag2tag2tag2"},{id:3,title:"tag3"},{id:4,title:"tag4tag4tag4"},{id:5,title:"tag5tag5"}];return(d,r)=>{const a=Je;return l(),f("div",Ke,[(l(),f(V,null,S(t,o=>p(a,{key:o.id},{default:b(()=>[C(L(o.title),1)]),_:2},1024)),64))])}}}),W=D(j.ui.strategy,j.ui.kbd,he),Ye=w({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>W.default.size,validator(e){return Object.keys(W.size).includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:d}=J("kbd",A(e,"ui"),W),r=z(()=>xe(ae(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:d,kbdClass:r}}});function Ze(e,t,d,r,a,o){return l(),f("kbd",$({class:e.kbdClass},e.attrs),[k(e.$slots,"default",{},()=>[C(L(e.value),1)])],16)}const oe=U(Ye,[["render",Ze]]),Qe=D(j.ui.strategy,j.ui.tooltip,Ce),et=w({components:{UKbd:oe},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:d}=J("tooltip",A(e,"ui"),Qe,A(e,"class")),r=z(()=>le({},e.popper,t.value.popper)),[a,o]=Be(r.value),u=N(!1);let n=null,i=null;function m(){i&&(clearTimeout(i),i=null),!u.value&&(n=n||setTimeout(()=>{u.value=!0,n=null},e.openDelay))}function O(){n&&(clearTimeout(n),n=null),u.value&&(i=i||setTimeout(()=>{u.value=!1,i=null},e.closeDelay))}return{ui:t,attrs:d,popper:r,trigger:a,container:o,open:u,onMouseOver:m,onMouseLeave:O}}}),tt=s("span",{class:"mx-1 text-gray-700 dark:text-gray-200"},"·",-1);function ot(e,t,d,r,a,o){const u=oe;return l(),f("div",$({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseover:t[0]||(t[0]=(...n)=>e.onMouseOver&&e.onMouseOver(...n)),onMouseleave:t[1]||(t[1]=(...n)=>e.onMouseLeave&&e.onMouseLeave(...n))}),[k(e.$slots,"default",{open:e.open},()=>[C(" Hover ")]),e.open&&!e.prevent?(l(),f("div",{key:0,ref:"container",class:I([e.ui.container,e.ui.width])},[p(ue,$({appear:""},e.ui.transition),{default:b(()=>{var n;return[s("div",null,[e.popper.arrow?(l(),f("div",{key:0,"data-popper-arrow":"",class:I(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):B("",!0),s("div",{class:I([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[k(e.$slots,"text",{},()=>[C(L(e.text),1)]),(n=e.shortcuts)!=null&&n.length?(l(),f("span",{key:0,class:I(e.ui.shortcuts)},[tt,(l(!0),f(V,null,S(e.shortcuts,i=>(l(),y(u,{key:i,size:"xs"},{default:b(()=>[C(L(i),1)]),_:2},1024))),128))],2)):B("",!0)],2)])]}),_:3},16)],2)):B("",!0)],16)}const nt=U(et,[["render",ot]]),M=D(j.ui.strategy,j.ui.pagination,$e),st=D(j.ui.strategy,j.ui.button,ke),at=w({components:{UButton:ee},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},size:{type:String,default:()=>M.default.size,validator(e){return Object.keys(st.size).includes(e)}},activeButton:{type:Object,default:()=>M.default.activeButton},inactiveButton:{type:Object,default:()=>M.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>M.default.firstButton},lastButton:{type:Object,default:()=>M.default.lastButton},prevButton:{type:Object,default:()=>M.default.prevButton},nextButton:{type:Object,default:()=>M.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue"],setup(e,{emit:t}){const{ui:d,attrs:r}=J("pagination",A(e,"ui"),M,A(e,"class")),a=z({get(){return e.modelValue},set(_){t("update:modelValue",_)}}),o=z(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(_,v)=>v+1)),u=z(()=>{const _=o.value.length,v=a.value,T=Math.max(e.max,5),h=Math.floor((Math.min(T,_)-5)/2),P=v-h,E=v+h,K=P-1>1,X=E+1<_,c=[];if(_<=T){for(let x=1;x<=_;x++)c.push(x);return c}if(c.push(1),K&&c.push(e.divider),!X){const x=v+h+2-_;for(let F=v-h-x;F<=v-h-1;F++)c.push(F)}for(let x=Math.max(2,P);x<=Math.min(_,E);x++)c.push(x);if(!K){const x=1-(v-h-2);for(let F=v+h+1;F<=v+h+x;F++)c.push(F)}return X&&c.push(e.divider),E<_&&c.push(_),c.length>=3&&c[1]===e.divider&&c[2]===3&&(c[1]=2),c.length>=3&&c[c.length-2]===e.divider&&c[c.length-1]===c.length&&(c[c.length-2]=c.length-1),c}),n=z(()=>a.value>1),i=z(()=>a.value<o.value.length);function m(){n.value&&(a.value=1)}function O(){i.value&&(a.value=o.value.length)}function G(_){typeof _!="string"&&(a.value=_)}function H(){n.value&&a.value--}function R(){i.value&&a.value++}return{ui:d,attrs:r,currentPage:a,pages:o,displayedPages:u,canGoLastOrNext:i,canGoFirstOrPrev:n,onClickPrev:H,onClickNext:R,onClickPage:G,onClickFirst:m,onClickLast:O}}});function lt(e,t,d,r,a,o){const u=ee;return l(),f("div",$({class:e.ui.wrapper},e.attrs),[k(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(l(),y(u,$({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton,...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):B("",!0)]),k(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(l(),y(u,$({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton,...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):B("",!0)]),(l(!0),f(V,null,S(e.displayedPages,(n,i)=>(l(),y(u,$({key:`${n}-${i}`,size:e.size,label:`${n}`},n===e.currentPage?{...e.ui.default.activeButton,...e.activeButton}:{...e.ui.default.inactiveButton,...e.inactiveButton},{class:[{"pointer-events-none":typeof n=="string","z-[1]":n===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(n)}),null,16,["size","label","class","onClick"]))),128)),k(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(l(),y(u,$({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton,...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):B("",!0)]),k(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(l(),y(u,$({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton,...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):B("",!0)])],16)}const rt=U(at,[["render",lt]]);const it=["onClick"],ut=["onClick"],pt={__name:"Pagination",setup(e){const t=N(1),d=N(Array(3));return(r,a)=>{const o=ye,u=nt,n=rt;return l(),y(n,{modelValue:g(t),"onUpdate:modelValue":a[0]||(a[0]=i=>Q(t)?t.value=i:null),total:g(d).length,"page-count":1,activeButton:{color:"transparent",inactiveClass:["pagination_item","pagination_item_active"]},inactiveButton:{color:"transparent",inactiveClass:["pagination_item","pagination_item_inactive"]},ui:{wrapper:"justify-center"}},{prev:b(({onClick:i})=>[p(u,{text:"Previous page"},{default:b(()=>[s("button",{class:"rotate-180 p-[7.5px] md:p-2.5 lg:p-[12.5px]",onClick:i},[p(o,{fontControlled:!1,class:"h-[5px] w-[18px] md:h-[6px] md:w-[22px] lg:h-[8px] lg:w-[25px]"})],8,it)]),_:2},1024)]),next:b(({onClick:i})=>[p(u,{text:"Next page"},{default:b(()=>[s("button",{class:"p-[7.5px] md:p-2.5 lg:p-[12.5px]",onClick:i},[p(o,{fontControlled:!1,class:"h-[5px] w-[18px] md:h-[6px] md:w-[22px] lg:h-[8px] lg:w-[25px]"})],8,ut)]),_:2},1024)]),_:1},8,["modelValue","total"])}}},dt=pt,ct={class:"px-5 py-[25px] md:px-10 md:py-[30px]"},mt={class:"mb-[25px] flex items-center justify-between md:mb-[30px]"},ft=s("p",{class:"text-[14px] font-medium md:text-[18px]"},"Фільтри",-1),_t={type:"button",class:"inline-flex"},gt=w({__name:"CategoryFilterMenu",props:{isOpen:{type:Boolean},category:{}},setup(e){return(t,d)=>{const r=me,a=te,o=we;return l(),y(o,{ui:{wrapper:"z-[150]",container:"w-[280px] md:w-[450px] block",height:"h-screen",margin:"sm:m-0",padding:"p-0",rounded:"rounded-none",overlay:{background:"bg-black/30"}}},{default:b(()=>[s("div",ct,[s("div",mt,[ft,s("button",_t,[p(r,{isActive:!0})])]),p(a,{category:t.category},null,8,["category"])])]),_:1})}}}),bt={class:"pb-[70px] md:pb-[100px] 2xl:pb-[130px]"},vt={class:"container grid-cols-[225px_1fr] gap-x-[30px] lg:grid lg:grid-cols-[300px_1fr]"},yt={class:"mb-5"},xt={class:"mb-[15px] flex items-center justify-between md:mb-[15px]"},ht=s("button",{type:"button",class:"text-[10px] font-medium text-status_gray md:text-[12px] lg:text-[16px]"}," Очистити фільтри ",-1),Ct={class:""},$t={class:"mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] 4xl:gap-x-[44px] 4xl:gap-y-[60px]"},kt={class:""},oo=w({__name:"[id]",setup(e){const d=re().params.id,r=N(),a=N([]),o=N(!1),u=N(!0),n=async()=>{try{const m=await ie(`${Y()}/category/products/${d}`);a.value=m.data.value,u.value=!1}catch(m){console.error(m)}};return(async()=>{try{const m=await Oe(`${Y()}/category/get/${d}`);r.value=m,n()}catch(m){console.error(m)}})(),(m,O)=>{const G=ne,H=te,R=se,_=Xe,v=ve,T=dt,h=gt;return l(),f("div",bt,[p(G),s("div",vt,[s("aside",null,[p(H,{category:g(r),class:"hidden lg:block"},null,8,["category"])]),s("div",null,[s("div",yt,[p(R,{class:"mb-5 xl:mb-[30px] 2xl:mb-10"},{default:b(()=>[C(L(("useMultiLang"in m?m.useMultiLang:g(q))(g(r),"title")),1)]),_:1}),s("div",xt,[s("button",{type:"button",class:"text-[14px] font-medium md:text-[18px] lg:hidden",onClick:O[0]||(O[0]=P=>o.value=!0)}," Фільтри "),ht]),p(_)]),s("div",Ct,[s("div",$t,[(l(!0),f(V,null,S(g(a),P=>(l(),y(v,{key:P.id,product:P,class:"col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3"},null,8,["product"]))),128))])]),s("div",kt,[g(u)?B("",!0):(l(),y(T,{key:0}))])])]),p(h,{modelValue:g(o),"onUpdate:modelValue":O[1]||(O[1]=P=>Q(o)?o.value=P:null),isOpen:g(o),category:g(r),class:"lg:hidden"},null,8,["modelValue","isOpen","category"])])}}});export{oo as default};
