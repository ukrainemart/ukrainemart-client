import ge from"./Search.f75854c0.js";import{u as he}from"./useApi.0869f473.js";import{c as te,_ as L,P as be,i as ve,m as T,e as P,t as H,f as ye,g as $e}from"./entry.99ed6bb6.js";import{c as ne}from"./cn.a642df04.js";import{a as Se}from"./index.101b1fe2.js";import{x as y,a as S,z as ae,l as $,G as oe,j as se,w as we,i as le,b as Ae,M as d,X as g,I as u,Y as p,u as A,a4 as O,H as q,a3 as M,O as m,Z as h,a2 as B,_ as v,N as w,a1 as U,L as z,U as Ie,P as re,Q as ie,t as Y,a5 as N,a6 as G,J as ke,a7 as Ce,a8 as Be}from"./swiper-vue.67144f5d.js";import Oe from"./SearchLinkArrow.eba2bdd3.js";import{_ as F}from"./nuxt-link.90e52593.js";import{u as Z}from"./useMultiLang.85ec021b.js";import{o as Ue}from"./index.a74f4e4f.js";import{_ as Le,a as Pe,b as De,c as K,d as je,e as ze}from"./Tabs.vue.9f16fcc7.js";import{_ as Ee}from"./TextPortalPrimary.b66025b8.js";import{_ as Ve}from"./ButtonOutline.vue.aa04cc3f.js";import{_ as He}from"./ButtonOpacity.0409da14.js";import{_ as V}from"./Icon.ca09ca8a.js";import{t as Ne}from"./tw-merge.63d554b6.js";import{b as ce,u as ue,a as Re,o as qe}from"./ui.config.205f08dd.js";import{t as J,u as W,o as D,H as Q,N as ee,a as j}from"./micro-task.4a381607.js";import{c as Me,l as E,p as Ye}from"./open-closed.89ccc2fd.js";import{b as Te}from"./use-resolve-button-type.23e66368.js";import"./nuxt-icon.5c31d194.js";import"./Agriculture.05556774.js";import"./Electronics.731a8b0c.js";import"./Medicine.9b2a3459.js";import"./Fertilizers.5991a95d.js";import"./AutoPart.d3355c7e.js";import"./Building.7d4a3ea9.js";import"./ArrowRightSecond.f3ed40da.js";import"./CardProduct.vue.de7c0943.js";import"./Hearth.dca3353a.js";import"./HearthBg.fb8215ca.js";import"./isLoggedIn.b3258288.js";import"./ArrowNext.c01ea1c6.js";import"./TitleNamu.4453b38d.js";import"./useVariables.0298316b.js";var Fe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Fe||{});let pe=Symbol("DisclosureContext");function X(e){let t=le(pe,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,X),a}return t}let de=Symbol("DisclosurePanelContext");function Ke(){return le(de,null)}let Qe=y({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:a}){let o=S(e.defaultOpen?0:1),n=S(null),i=S(null),s={buttonId:S(`headlessui-disclosure-button-${J()}`),panelId:S(`headlessui-disclosure-panel-${J()}`),disclosureState:o,panel:n,button:i,toggleDisclosure(){o.value=W(o.value,{0:1,1:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(l){s.closeDisclosure();let f=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?D(l):D(s.button):D(s.button))();f==null||f.focus()}};return ae(pe,s),Me($(()=>W(o.value,{0:E.Open,1:E.Closed}))),()=>{let{defaultOpen:l,...f}=e,x={open:o.value===0,close:s.close};return Q({theirProps:f,ourProps:{},slot:x,slots:t,attrs:a,name:"Disclosure"})}}}),Xe=y({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:o}){let n=X("DisclosureButton"),i=Ke(),s=$(()=>i===null?!1:i.value===n.panelId.value);oe(()=>{s.value||e.id!==null&&(n.buttonId.value=e.id)}),se(()=>{s.value||(n.buttonId.value=null)});let l=S(null);o({el:l,$el:l}),s.value||we(()=>{n.button.value=l.value});let f=Te($(()=>({as:e.as,type:t.type})),l);function x(){var c;e.disabled||(s.value?(n.toggleDisclosure(),(c=D(n.button))==null||c.focus()):n.toggleDisclosure())}function r(c){var b;if(!e.disabled)if(s.value)switch(c.key){case j.Space:case j.Enter:c.preventDefault(),c.stopPropagation(),n.toggleDisclosure(),(b=D(n.button))==null||b.focus();break}else switch(c.key){case j.Space:case j.Enter:c.preventDefault(),c.stopPropagation(),n.toggleDisclosure();break}}function _(c){switch(c.key){case j.Space:c.preventDefault();break}}return()=>{var c;let b={open:n.disclosureState.value===0},{id:I,...k}=e,xe=s.value?{ref:l,type:f.value,onClick:x,onKeydown:r}:{id:(c=n.buttonId.value)!=null?c:I,ref:l,type:f.value,"aria-expanded":n.disclosureState.value===0,"aria-controls":n.disclosureState.value===0||D(n.panel)?n.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:x,onKeydown:r,onKeyup:_};return Q({ourProps:xe,theirProps:k,slot:b,attrs:t,slots:a,name:"DisclosureButton"})}}}),Ge=y({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:o}){let n=X("DisclosurePanel");oe(()=>{e.id!==null&&(n.panelId.value=e.id)}),se(()=>{n.panelId.value=null}),o({el:n.panel,$el:n.panel}),ae(de,n.panelId);let i=Ye(),s=$(()=>i!==null?(i.value&E.Open)===E.Open:n.disclosureState.value===0);return()=>{var l;let f={open:n.disclosureState.value===0,close:n.close},{id:x,...r}=e,_={id:(l=n.panelId.value)!=null?l:x,ref:n.panel};return Q({ourProps:_,theirProps:r,slot:f,attrs:t,slots:a,features:ee.RenderStrategy|ee.Static,visible:s.value,name:"DisclosurePanel"})}}});const Ze=["value","placeholder"],Je=y({__name:"SearchInput",props:{searchValue:{},isSearchActive:{type:Boolean}},emits:["updateSearchValue","updateProducts","updateCategories","updateSearchActive"],setup(e,{emit:t}){const a=e,o=t,n=async s=>{try{const l=await he(`${te()}/search/shortQuery?search=${s}`);o("updateProducts",l.products),o("updateCategories",l.categories),o("updateSearchActive",!0)}catch(l){console.error(l)}},i=Se(s=>{const f=s.target.value;o("updateSearchValue",f),f.trim().length?n(f.trim()):o("updateSearchActive",!1)},400);return Ae(()=>a.isSearchActive,s=>{s===!1&&o("updateSearchValue","")}),(s,l)=>{const f=ge;return d(),g("div",{class:O(("cn"in s?s.cn:A(ne))("relative  border border-solid border-black",{"rounded-[50px]":!s.isSearchActive,"rounded-t-[15px]":s.isSearchActive}))},[u(f,{fontControlled:!1,class:"absolute right-[15px] top-1/2 z-[-1] !mb-0 h-[12px] w-[12px] -translate-y-1/2 cursor-text text-status_gray md:h-[17px] md:w-[17px] lg:h-5 lg:w-5"}),p("input",{value:s.searchValue,type:"text",placeholder:s.$t("startYourSearch"),class:"w-full bg-transparent py-[9px] pl-[15px] pr-8 text-[12px] text-black outline-none placeholder:text-status_gray md:py-[12px] md:pl-[18px] md:pr-[36px] md:text-[16px] lg:py-[15px] lg:pl-[21px] lg:pr-10 lg:text-[17px]",onInput:l[0]||(l[0]=x=>A(i)(x))},null,40,Ze)],2)}}}),We={key:0,class:"absolute inset-x-0 rounded-b-[15px] bg-white py-[7px] text-left shadow-lg md:rounded-[20px] md:py-[18px] xl:py-[25px]"},et={key:0},tt=p("p",{class:"px_search mb-[6px] py-[6px] font-namu text-[14px] leading-[17px] md:mb-[9px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"}," Категорії ",-1),nt={class:"z-10 flex flex-col"},at={class:"text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"},ot={key:1,class:"mx-[15px] my-1 h-px bg-[#d9d9d9]"},st={key:2},lt=p("p",{class:"px_search mb-[6px] py-[6px] font-namu text-[14px] leading-[17px] md:mb-[9px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"}," Товари ",-1),rt={class:"z-10 flex flex-col"},it={class:"text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"},ct={key:3,class:"px_search py-[6px]"},ut=p("span",{class:"text-[10px] font-semibold leading-[12px] text-status_red md:text-[14px] md:leading-[17px] lg:hover:underline xl:text-[17px] xl:leading-[21px]"}," Показати всі результати ",-1),pt={key:4},dt=p("p",{class:"px_search py-[6px] text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"}," Нічого не знайдено ",-1),mt=[dt],ft=y({__name:"SearchResult",props:{isSearchActive:{type:Boolean},products:{},categories:{}},setup(e){return(t,a)=>{const o=Oe,n=F;return t.isSearchActive?(d(),g("div",We,[t.categories.length?(d(),g("div",et,[tt,p("ul",nt,[(d(!0),g(q,null,M(t.categories,i=>(d(),g("li",{key:i.id,class:""},[u(n,{to:`/category/${i.id}`,class:"px_search flex items-center justify-between py-[6px] lg:hover:bg-gray-100"},{default:m(()=>[p("span",at,h(("useMultiLang"in t?t.useMultiLang:A(Z))(i,"title")),1),u(o,{fontControlled:!1,class:"h-[11px] w-[8px] md:h-[15px] md:w-[11px] xl:h-[18px] xl:w-[13px]"})]),_:2},1032,["to"])]))),128))])])):B("",!0),t.products.length&&t.categories.length?(d(),g("div",ot)):B("",!0),t.products.length?(d(),g("div",st,[lt,p("ul",rt,[(d(!0),g(q,null,M(t.products,i=>(d(),g("li",{key:i.id,class:""},[u(n,{to:`/product/${i.id}`,class:"px_search flex items-center justify-between py-[6px] lg:hover:bg-gray-100"},{default:m(()=>[p("span",it,h(("useMultiLang"in t?t.useMultiLang:A(Z))(i,"title")),1),u(o,{fontControlled:!1,class:"h-[11px] w-[8px] md:h-[15px] md:w-[11px] xl:h-[18px] xl:w-[13px]"})]),_:2},1032,["to"])]))),128))])])):B("",!0),t.products.length||t.categories.length?(d(),g("div",ct,[u(n,{to:"/",class:"flex w-fit"},{default:m(()=>[ut]),_:1})])):B("",!0),!t.products.length&&!t.categories.length?(d(),g("div",pt,mt)):B("",!0)])):B("",!0)}}});const _t={class:"ld:mt-[5px] ml-[18px] mt-[3px] text-left text-[7px] font-medium text-black md:mt-[7px] md:text-[13px] lg:text-[17px]"},xt={class:"underline"},gt={class:"underline"},ht=y({__name:"Search",setup(e){const t=S(null),a=S(""),o=S(!1),n=S([]),i=S([]),s=r=>a.value=r,l=r=>o.value=r,f=r=>n.value=r,x=r=>i.value=r;return Ue(t,()=>l(!1)),(r,_)=>{const c=Je,b=ft;return d(),g("div",{ref_key:"searchRef",ref:t,class:"relative min-w-[305px] md:w-[446px] lg:w-[600px]"},[u(c,{searchValue:A(a),isSearchActive:A(o),onUpdateSearchValue:s,onUpdateProducts:f,onUpdateCategories:x,onUpdateSearchActive:l},null,8,["searchValue","isSearchActive"]),u(b,{isSearchActive:A(o),products:A(n),categories:A(i)},null,8,["isSearchActive","products","categories"]),p("p",_t,[v(h(`${r.$t("example")}:`)+" ",1),p("span",xt,h(r.$t("grain")),1),v(" "+h(r.$t("or"))+" ",1),p("span",gt,h(r.$t("oil")),1)])],512)}}}),bt={},vt={class:"flex h-header-sm flex-col lg:h-header-lg 4xl:h-header-4xl"},yt={class:"flex flex-1 flex-col items-center justify-center px-5 text-center"},$t={class:"mb-2.5 font-namu text-[55px] font-light leading-[66px] text-black md:mb-[13px] md:text-[95px] md:leading-[114px] lg:mb-[15px] lg:text-[130px] lg:leading-[156px]"},St={class:"mx-auto mb-[15px] max-w-[1182px] text-[10px] font-medium text-black md:mb-[30px] md:text-[14px] lg:mb-10 lg:text-[17px]"};function wt(e,t){const a=ht,o=Le;return d(),g("div",vt,[p("div",yt,[p("h1",$t,h(e.$t("logo")),1),p("p",St,h(e.$t("companyDescription")),1),u(a)]),u(o)])}const At=L(bt,[["render",wt]]),It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ddPa9NwHMfx9y//k9auqbrNyqZzlIKe9CB4EhyoRwVPnnwAXnwGnr34ODwJnvQgReY/vOhJBwrbqHXSdrOWdklo0p8JeE47yLYM9jolkMOHzzf8/oh3hYUHIJ4KKHOYJBtC8Fi8Lyyux6/nyQEJPYWchEkkU1LImeNAkwj5NvmX8mNPDW17DkEo2E/aNB/tDEzaAw2vZyA9FeeMznxpSNkJyNpUgbpNyZdnFqNCxDiesLFrcuV+HKhG5iaO7GVDozoXYl3u0/ZAr9WZvVdhcbnEizcqo5BMpQaKoviDpRtsNmx+fjIptXSWVp4w9h7Sja5hXLhLGJGp1JFtfdWRHZf2d51mcQ7HVzA+r1GzKnR+GKg7Lr2+jn1pRFZSG3KK4LVs7LpP3e/zyznL6uprhoMGNt8IfZespTY07MPsrXPMbIe4QY/bfz4QtkzCjxL9+i6nr5YRW9kuY6kNVS7qbHZfYf6PrZ44hSZmUOwxqin53XmOUrXIUmpDg8Bgviix3AIrd3zW/y7j3Ryz4Lc5WdVYa5oE0VQrx9Ryt3UkB7Sju5cdhONAkyjJwZq8iG8ecUPyUfy4wSFLikmuQf8AXuOO6LpSqEsAAAAASUVORK5CYII=",kt={},Ct={class:"flex flex-col items-start rounded-[20px] bg-white px-[20px] py-[15px] md:p-[30px]"},Bt={class:"flex items-center gap-[10px]"},Ot=p("img",{class:"h-[14px] w-[21px] md:h-[19px] md:w-[29px] 4xl:h-[24px] 4xl:w-[36px]",src:It,alt:"flag spain"},null,-1),Ut=p("h3",{class:"mt-[5px] text-[17px] font-medium md:mt-[12px] md:text-[20px] 4xl:mt-[21px]"}," Ми потребуємо соняшникову олію ",-1),Lt={class:"mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"},Pt=p("span",{class:"text-status_gray"},"10-14 днів",-1),Dt=p("span",{class:"text-status_gray"},"150 л",-1),jt=p("span",{class:"text-status_gray"},"до 03.11.2023 ",-1);function zt(e,t){const a=Ee,o=Pe,n=Ve;return d(),g("div",Ct,[p("div",Bt,[Ot,u(a,null,{default:m(()=>[v("Іспанія")]),_:1})]),Ut,u(a,{class:"mt-[10px] text-status_gray 4xl:mt-[15px]"},{default:m(()=>[v(" 28.10.2023 ")]),_:1}),p("div",Lt,[u(o,null,{default:m(()=>[v(h(`${e.$t("delivery")}:`)+" ",1),Pt]),_:1}),u(o,null,{default:m(()=>[v(h(`${e.$t("quantity")}:`)+" ",1),Dt]),_:1}),u(o,null,{default:m(()=>[v(h(`${e.$t("requestIsValid")}:`)+" ",1),jt]),_:1})]),u(n,{class:"mt-[15px] self-center md:mt-[35px] 4xl:mt-[25px]"},{default:m(()=>[v(h(e.$t("details")),1)]),_:1})])}const Et=L(kt,[["render",zt]]),Vt={};function Ht(e,t){const a=Et,o=De;return d(),w(o,{showAll:!0,slides:[1,1,1,1,1,1,1,1],breakpoints:{375:{slidesPerView:1,spaceBetween:15},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:45}}},{title:m(()=>[v(h(e.$t("requestsFromIntlImporters")),1)]),slide:m(({slide:n})=>[u(a,{class:"mb-[20px]",item:n},null,8,["item"])]),_:1})}const Nt=L(Vt,[["render",Ht]]),Rt=""+new URL("metal.acb3a171.jpg",import.meta.url).href,qt={class:"group relative flex items-end overflow-hidden rounded-[8px] px-[15px] py-[30px] md:px-[25px] md:py-[35px] 4xl:px-[40px] 4xl:py-[50px]"},Mt=p("div",{class:"absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent"},null,-1),Yt=["alt"],Tt={class:"relative z-10 text-[17px] text-white md:text-[24px] 4xl:text-[30px]"},Ft=y({__name:"PopularCategoryItem",props:{image:{},altImage:{}},setup(e){return(t,a)=>(d(),g("div",qt,[Mt,p("img",{class:"absolute left-0 top-0 h-full w-full object-cover duration-hover group-hover:hover:scale-125",src:Rt,alt:t.altImage},null,8,Yt),p("h2",Tt,[U(t.$slots,"default")])]))}}),Kt={},Qt={class:"grid min-h-[560px] grid-rows-4 gap-[20px] md:grid-cols-2 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"};function Xt(e,t){const a=Ft,o=K;return d(),w(o,null,{title:m(()=>[v(h(e.$t("popularCategory")),1)]),content:m(()=>[p("div",Qt,[u(a,{image:"assets/images/metal.jpg",altImage:"metal",class:"md:row-span-2 4xl:row-span-2"},{default:m(()=>[v(" Метал та похідні товари ")]),_:1}),u(a,{image:"~/assets/images/metal.jpg",altImage:"metal",class:"md:row-span-3"},{default:m(()=>[v(" Зернові культури ")]),_:1}),u(a,{image:"~/assets/images/metal.jpg",altImage:"metal",class:"md:row-span-2 4xl:row-span-3"},{default:m(()=>[v(" Добрива ")]),_:1}),u(a,{image:"~/assets/images/metal.jpg",altImage:"metal",class:"md:row-span-1 4xl:row-span-2"},{default:m(()=>[v(" Папір та картон ")]),_:1})])]),_:1})}const Gt=L(Kt,[["render",Xt]]),Zt=y({__name:"IconOpeningCross",props:{open:{type:Boolean}},setup(e){return(t,a)=>(d(),g("span",{class:O(("cn"in t?t.cn:A(ne))("relative block h-[12px] w-[12px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-[1px] before:w-full before:bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:m-auto after:h-[1px] after:w-full after:rotate-90 after:bg-black after:duration-200 md:h-[16px] md:w-[16px] 4xl:h-[20px] 4xl:w-[20px] 4xl:before:h-[2px] 4xl:after:h-[2px]",{"after:rotate-0":t.open}))},null,2))}}),Jt=y({inheritAttrs:!1,props:{...F.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function t(a,o,{isActive:n,isExactActive:i}){return e.active?e.activeClass:e.exactQuery&&!ve(a.query,o.query)||e.exactHash&&a.hash!==o.hash?e.inactiveClass:e.exact&&i||!e.exact&&n?e.activeClass:e.inactiveClass}return{resolveLinkClass:t}}}),Wt=["href","aria-disabled","role","rel","target","onClick"];function en(e,t,a,o,n,i){const s=F;return e.to?(d(),w(s,z({key:1},e.$props,{custom:""}),{default:m(({route:l,href:f,target:x,rel:r,navigate:_,isActive:c,isExactActive:b,isExternal:I})=>[p("a",z(e.$attrs,{href:e.disabled?void 0:f,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:r,target:x,class:e.resolveLinkClass(l,e._.provides[be]||e.$route,{isActive:c,isExactActive:b}),onClick:k=>!I&&_(k)}),[U(e.$slots,"default",re(ie({isActive:e.exact?b:c})))],16,Wt)]),_:3},16)):(d(),w(Ie(e.as),z({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:m(()=>[U(e.$slots,"default")]),_:3},16,["disabled","class"]))}const me=L(Jt,[["render",en]]),C=T(P.ui.strategy,P.ui.button,ce),tn=y({components:{UIcon:V,ULink:me},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>C.default.size,validator(e){return Object.keys(C.size).includes(e)}},color:{type:String,default:()=>C.default.color,validator(e){return[...P.ui.colors,...Object.keys(C.color)].includes(e)}},variant:{type:String,default:()=>C.default.variant,validator(e){return[...Object.keys(C.variant),...Object.values(C.color).flatMap(t=>Object.keys(t))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>C.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:t}){const{ui:a,attrs:o}=ue("button",Y(e,"ui"),C),n=$(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),i=$(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),s=$(()=>e.square||!t.default&&!e.label),l=$(()=>{var b,I;const c=((I=(b=a.value.color)==null?void 0:b[e.color])==null?void 0:I[e.variant])||a.value.variant[e.variant];return Ne(H(a.value.base,a.value.font,a.value.rounded,a.value.size[e.size],a.value.gap[e.size],e.padded&&a.value[s.value?"square":"padding"][e.size],c==null?void 0:c.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),f=$(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=$(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),r=$(()=>H(a.value.icon.base,a.value.icon.size[e.size],e.loading&&"animate-spin")),_=$(()=>H(a.value.icon.base,a.value.icon.size[e.size],e.loading&&!n.value&&"animate-spin"));return{attrs:o,isLeading:n,isTrailing:i,isSquare:s,buttonClass:l,leadingIconName:f,trailingIconName:x,leadingIconClass:r,trailingIconClass:_}}});function nn(e,t,a,o,n,i){const s=V,l=me;return d(),w(l,z({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:m(()=>[U(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(d(),w(s,{key:0,name:e.leadingIconName,class:O(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):B("",!0)]),U(e.$slots,"default",{},()=>[e.label?(d(),g("span",{key:0,class:O([e.truncate?"text-left break-all line-clamp-1":""])},h(e.label),3)):B("",!0)]),U(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(d(),w(s,{key:0,name:e.trailingIconName,class:O(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):B("",!0)])]),_:3},16,["type","disabled","class"])}const fe=L(tn,[["render",nn]]),R=T(P.ui.strategy,P.ui.accordion,Re),an=T(P.ui.strategy,P.ui.button,ce),on=y({components:{HDisclosure:Qe,HDisclosureButton:Xe,HDisclosurePanel:Ge,UIcon:V,UButton:fe},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>R.default.openIcon},closeIcon:{type:String,default:()=>R.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:a}=ue("accordion",Y(e,"ui"),R,Y(e,"class")),o=$(()=>an),n=S([]);function i(r,_){!e.items[r].closeOthers&&e.multiple||n.value.forEach(c=>{c.open&&c.close(_.target)})}function s(r,_){r.style.height="0",r.offsetHeight,r.style.height=r.scrollHeight+"px",r.addEventListener("transitionend",_,{once:!0})}function l(r){r.style.height=r.scrollHeight+"px",r.offsetHeight}function f(r){r.style.height="auto"}function x(r,_){r.style.height="0",r.addEventListener("transitionend",_,{once:!0})}return{ui:t,uiButton:o,attrs:a,buttonRefs:n,closeOthers:i,omit:qe,onEnter:s,onBeforeLeave:l,onAfterEnter:f,onLeave:x}}});function sn(e,t,a,o,n,i){const s=V,l=fe,f=N("HDisclosureButton"),x=N("HDisclosurePanel"),r=N("HDisclosure");return d(),g("div",{class:O(e.ui.wrapper)},[(d(!0),g(q,null,M(e.items,(_,c)=>(d(),w(r,{key:c,"default-open":e.defaultOpen||_.defaultOpen},{default:m(({open:b,close:I})=>[u(f,{ref_for:!0,ref:()=>e.buttonRefs[c]={open:b,close:I},as:"template",disabled:_.disabled,onClick:k=>e.closeOthers(c,k),onKeydown:[G(k=>e.closeOthers(c,k),["enter"]),G(k=>e.closeOthers(c,k),["space"])]},{default:m(()=>[U(e.$slots,"default",{item:_,index:c,open:b,close:I},()=>[u(l,re(ie({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(_,["slot","disabled","content","defaultOpen"])})),{trailing:m(()=>[u(s,{name:b&&e.closeIcon?e.closeIcon:e.openIcon,class:O([b&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[_.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),u(ke,z(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:m(()=>[Ce(p("div",null,[u(x,{class:O([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:m(()=>[U(e.$slots,_.slot||"item",{item:_,index:c,open:b,close:I},()=>[v(h(_.content),1)])]),_:2},1032,["class"])],512),[[Be,b]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["default-open"]))),128))],2)}const ln=L(on,[["render",sn]]),_e=y({__name:"Accordion",props:{items:{}},setup(e){return(t,a)=>{const o=Zt,n=He,i=ln;return d(),w(i,{ui:{wrapper:"",item:{base:"font-medium text-[12px] md:text-[16px] 4xl:text-[20px]",color:"text-black",padding:"pt-[15px]"}},items:t.items},{default:m(({item:s,open:l})=>[u(n,{class:"flex w-full items-center justify-between border-b border-black py-[20px] text-left text-[16px] font-semibold md:text-[17px] 4xl:border-b-[2px] 4xl:py-[25px]",ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{default:m(()=>[p("span",null,h(s.label),1),u(o,{open:l},null,8,["open"])]),_:2},1024)]),_:1},8,["items"])}}}),rn=y({__name:"AccordionFaqExporters",setup(e){const t=[{label:"Що таке Ukrainemart?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які товари можна експортувати?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"У які країни можна експортувати товари?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які вимоги до якості товарів для експорту?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Як проходить доставка та митниця при експорті?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."}];return(a,o)=>{const n=_e;return d(),w(n,{items:t})}}}),cn=y({__name:"AccordionFaqImporters",setup(e){const t=[{label:"1. What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"2. Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"3. Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"4. Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}];return(a,o)=>{const n=_e;return d(),w(n,{items:t})}}}),un=y({__name:"SectionFaq",setup(e){const{t}=ye(),a=[{label:t("forExporters"),content:rn},{label:t("forImporters"),content:cn}];return(o,n)=>{const i=je,s=K;return d(),w(s,{class:"bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"},{title:m(()=>[v(h(o.$t("faq")),1)]),content:m(()=>[u(i,{items:a,class:""})]),_:1})}}}),pn=""+new URL("partners_ministerstvo.1adc8e28.png",import.meta.url).href,dn=""+new URL("partners_promyslova_palate.4463c173.png",import.meta.url).href,mn={},fn={class:"m-auto block w-fit"},_n=p("div",{class:"mt-[40px] flex flex-col items-center justify-center gap-[50px] lg:flex-row lg:gap-[150px]"},[p("div",null,[p("img",{class:"w-full max-w-[700px]",src:pn,alt:""})]),p("div",null,[p("img",{class:"w-full max-w-[480px]",src:dn,alt:""})])],-1);function xn(e,t){const a=K;return d(),w(a,{class:"lg:!pb-[100px] lg:!pt-[130xp] xl:!pb-[178px]"},{title:m(()=>[p("span",fn,h(e.$t("ourPartners")),1)]),content:m(()=>[_n]),_:1})}const gn=L(mn,[["render",xn]]),Wn=y({__name:"index",setup(e){const t=S([]);return(async()=>{try{const o=await $e(`${te()}/main_page`,"$pqtWcjQkdb");t.value=o.data.value.products}catch(o){console.error(o)}})(),(o,n)=>{const i=At,s=ze,l=Nt,f=Gt,x=un,r=gn;return d(),g("div",null,[u(i),u(s,{products:A(t)},{title:m(()=>[v(h(o.$t("goodsFromUaExporters")),1)]),_:1},8,["products"]),u(l),u(f),u(x),u(r,{class:"hidden xl:block"})])}}});export{Wn as default};
