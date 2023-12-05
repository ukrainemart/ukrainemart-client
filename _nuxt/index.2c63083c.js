import pe from"./Search.e467bc4b.js";import{_ as me,a as fe,b as _e,c as V,d as ge,e as xe}from"./Tabs.vue.255b28dd.js";import{_ as B,P as be,i as he,m as Y,e as U,t as j,f as ve,c as ye}from"./entry.ea053522.js";import{x as $,a as A,z as G,l as v,G as Z,j as J,w as $e,i as W,M as f,X as C,Y as i,Z as g,I as d,_ as b,O as u,N as y,a1 as k,a4 as O,u as ee,L,U as we,P as te,Q as ne,t as R,a2 as H,a5 as N,H as Ie,a3 as Se,a6 as F,J as Ae,a7 as ke,a8 as Ce}from"./swiper-vue.0e9dfbd4.js";import{_ as Be}from"./TextPortalPrimary.2c30f7fc.js";import{_ as Oe}from"./ButtonOutline.vue.16ce41f2.js";import{c as Ue}from"./cn.a642df04.js";import{_ as Pe}from"./ButtonOpacity.409595ff.js";import{_ as z}from"./Icon.86e014ff.js";import{_ as oe}from"./nuxt-link.dd28280a.js";import{t as De}from"./tw-merge.a99c2feb.js";import{b as ae,u as se,a as Le,o as Ee}from"./ui.config.a31c9b80.js";import{t as M,u as X,o as P,H as T,N as Q,a as D}from"./micro-task.20558dc4.js";import{c as ze,l as E,p as je}from"./open-closed.cb93882c.js";import{b as He}from"./use-resolve-button-type.5c130f8f.js";import{u as Ne}from"./useApi.5a722b83.js";import"./nuxt-icon.29358471.js";import"./Agriculture.d89b0d83.js";import"./Electronics.94ba3156.js";import"./Medicine.b1a5b872.js";import"./Fertilizers.f4661867.js";import"./AutoPart.795eda5e.js";import"./Building.ee15b14d.js";import"./ArrowRightSecond.cf487e05.js";import"./CardProduct.vue.4e497635.js";import"./Hearth.ce6aa828.js";import"./HearthBg.5bd6c6b4.js";import"./isLoggedIn.757cd9ac.js";import"./useMultiLang.a65de5b2.js";import"./ArrowNext.3971130b.js";import"./TitleNamu.cde201a1.js";import"./index.9bb549ee.js";import"./index.f61e798f.js";import"./useVariables.7d1c1829.js";var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{});let le=Symbol("DisclosureContext");function K(e){let o=W(le,null);if(o===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}return o}let re=Symbol("DisclosurePanelContext");function Re(){return W(re,null)}let Ve=$({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:o,attrs:n}){let a=A(e.defaultOpen?0:1),t=A(null),p=A(null),l={buttonId:A(`headlessui-disclosure-button-${M()}`),panelId:A(`headlessui-disclosure-panel-${M()}`),disclosureState:a,panel:t,button:p,toggleDisclosure(){a.value=X(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(r){l.closeDisclosure();let _=(()=>r?r instanceof HTMLElement?r:r.value instanceof HTMLElement?P(r):P(l.button):P(l.button))();_==null||_.focus()}};return G(le,l),ze(v(()=>X(a.value,{0:E.Open,1:E.Closed}))),()=>{let{defaultOpen:r,..._}=e,h={open:a.value===0,close:l.close};return T({theirProps:_,ourProps:{},slot:h,slots:o,attrs:n,name:"Disclosure"})}}}),Ye=$({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:o,slots:n,expose:a}){let t=K("DisclosureButton"),p=Re(),l=v(()=>p===null?!1:p.value===t.panelId.value);Z(()=>{l.value||e.id!==null&&(t.buttonId.value=e.id)}),J(()=>{l.value||(t.buttonId.value=null)});let r=A(null);a({el:r,$el:r}),l.value||$e(()=>{t.button.value=r.value});let _=He(v(()=>({as:e.as,type:o.type})),r);function h(){var s;e.disabled||(l.value?(t.toggleDisclosure(),(s=P(t.button))==null||s.focus()):t.toggleDisclosure())}function c(s){var x;if(!e.disabled)if(l.value)switch(s.key){case D.Space:case D.Enter:s.preventDefault(),s.stopPropagation(),t.toggleDisclosure(),(x=P(t.button))==null||x.focus();break}else switch(s.key){case D.Space:case D.Enter:s.preventDefault(),s.stopPropagation(),t.toggleDisclosure();break}}function m(s){switch(s.key){case D.Space:s.preventDefault();break}}return()=>{var s;let x={open:t.disclosureState.value===0},{id:w,...I}=e,de=l.value?{ref:r,type:_.value,onClick:h,onKeydown:c}:{id:(s=t.buttonId.value)!=null?s:w,ref:r,type:_.value,"aria-expanded":t.disclosureState.value===0,"aria-controls":t.disclosureState.value===0||P(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:h,onKeydown:c,onKeyup:m};return T({ourProps:de,theirProps:I,slot:x,attrs:o,slots:n,name:"DisclosureButton"})}}}),Te=$({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:o,slots:n,expose:a}){let t=K("DisclosurePanel");Z(()=>{e.id!==null&&(t.panelId.value=e.id)}),J(()=>{t.panelId.value=null}),a({el:t.panel,$el:t.panel}),G(re,t.panelId);let p=je(),l=v(()=>p!==null?(p.value&E.Open)===E.Open:t.disclosureState.value===0);return()=>{var r;let _={open:t.disclosureState.value===0,close:t.close},{id:h,...c}=e,m={id:(r=t.panelId.value)!=null?r:h,ref:t.panel};return T({ourProps:m,theirProps:c,slot:_,attrs:o,slots:n,features:Q.RenderStrategy|Q.Static,visible:l.value,name:"DisclosurePanel"})}}});const Ke={},Fe={class:"flex h-header-sm flex-col overflow-x-hidden lg:h-header-lg 4xl:h-header-4xl"},Me={class:"flex flex-1 flex-col items-center justify-center px-5 text-center"},Xe={class:"mb-2.5 font-namu text-[55px] font-light leading-[66px] text-black md:mb-[13px] md:text-[95px] md:leading-[114px] lg:mb-[15px] lg:text-[130px] lg:leading-[156px]"},Qe={class:"mx-auto mb-[15px] max-w-[1182px] text-[10px] font-medium text-black md:mb-[30px] md:text-[14px] lg:mb-10 lg:text-[17px]"},Ge={class:"relative min-w-[305px] rounded-[50px] border border-solid border-black md:w-[446px] lg:w-[600px]"},Ze={for:"Search",class:"absolute right-[15px] top-1/2 -translate-y-1/2"},Je=["placeholder"],We={class:"ld:mt-[5px] ml-[18px] mt-[3px] text-left text-[7px] font-medium text-black md:mt-[7px] md:text-[13px] lg:text-[17px]"},et={class:"underline"},tt={class:"underline"};function nt(e,o){const n=pe,a=me;return f(),C("div",Fe,[i("div",Me,[i("h1",Xe,g(e.$t("logo")),1),i("p",Qe,g(e.$t("companyDescription")),1),i("div",null,[i("div",Ge,[i("label",Ze,[d(n,{fontControlled:!1,class:"!mb-0 h-[12px] w-[12px] cursor-text text-status_gray md:h-[17px] md:w-[17px] lg:h-5 lg:w-5"})]),i("input",{id:"Search",type:"search",name:"Search",placeholder:e.$t("startYourSearch"),class:"w-full bg-transparent py-[9px] pl-[15px] pr-8 text-[10px] text-black outline-none placeholder:text-status_gray md:py-[12px] md:pl-[18px] md:pr-[36px] md:text-[14px] lg:py-[15px] lg:pl-[21px] lg:pr-10 lg:text-[17px]"},null,8,Je)]),i("p",We,[b(g(`${e.$t("example")}:`)+" ",1),i("span",et,g(e.$t("grain")),1),b(" "+g(e.$t("or"))+" ",1),i("span",tt,g(e.$t("oil")),1)])])]),d(a)])}const ot=B(Ke,[["render",nt]]),at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ddPa9NwHMfx9y//k9auqbrNyqZzlIKe9CB4EhyoRwVPnnwAXnwGnr34ODwJnvQgReY/vOhJBwrbqHXSdrOWdklo0p8JeE47yLYM9jolkMOHzzf8/oh3hYUHIJ4KKHOYJBtC8Fi8Lyyux6/nyQEJPYWchEkkU1LImeNAkwj5NvmX8mNPDW17DkEo2E/aNB/tDEzaAw2vZyA9FeeMznxpSNkJyNpUgbpNyZdnFqNCxDiesLFrcuV+HKhG5iaO7GVDozoXYl3u0/ZAr9WZvVdhcbnEizcqo5BMpQaKoviDpRtsNmx+fjIptXSWVp4w9h7Sja5hXLhLGJGp1JFtfdWRHZf2d51mcQ7HVzA+r1GzKnR+GKg7Lr2+jn1pRFZSG3KK4LVs7LpP3e/zyznL6uprhoMGNt8IfZespTY07MPsrXPMbIe4QY/bfz4QtkzCjxL9+i6nr5YRW9kuY6kNVS7qbHZfYf6PrZ44hSZmUOwxqin53XmOUrXIUmpDg8Bgviix3AIrd3zW/y7j3Ryz4Lc5WdVYa5oE0VQrx9Ryt3UkB7Sju5cdhONAkyjJwZq8iG8ecUPyUfy4wSFLikmuQf8AXuOO6LpSqEsAAAAASUVORK5CYII=",st={},lt={class:"flex flex-col items-start rounded-[20px] bg-white px-[20px] py-[15px] md:p-[30px]"},rt={class:"flex items-center gap-[10px]"},it=i("img",{class:"h-[14px] w-[21px] md:h-[19px] md:w-[29px] 4xl:h-[24px] 4xl:w-[36px]",src:at,alt:"flag spain"},null,-1),ct=i("h3",{class:"mt-[5px] text-[17px] font-medium md:mt-[12px] md:text-[20px] 4xl:mt-[21px]"}," Ми потребуємо соняшникову олію ",-1),ut={class:"mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"},dt=i("span",{class:"text-status_gray"},"10-14 днів",-1),pt=i("span",{class:"text-status_gray"},"150 л",-1),mt=i("span",{class:"text-status_gray"},"до 03.11.2023 ",-1);function ft(e,o){const n=Be,a=fe,t=Oe;return f(),C("div",lt,[i("div",rt,[it,d(n,null,{default:u(()=>[b("Іспанія")]),_:1})]),ct,d(n,{class:"mt-[10px] text-status_gray 4xl:mt-[15px]"},{default:u(()=>[b(" 28.10.2023 ")]),_:1}),i("div",ut,[d(a,null,{default:u(()=>[b(g(`${e.$t("delivery")}:`)+" ",1),dt]),_:1}),d(a,null,{default:u(()=>[b(g(`${e.$t("quantity")}:`)+" ",1),pt]),_:1}),d(a,null,{default:u(()=>[b(g(`${e.$t("requestIsValid")}:`)+" ",1),mt]),_:1})]),d(t,{class:"mt-[15px] self-center md:mt-[35px] 4xl:mt-[25px]"},{default:u(()=>[b(g(e.$t("details")),1)]),_:1})])}const _t=B(st,[["render",ft]]),gt={};function xt(e,o){const n=_t,a=_e;return f(),y(a,{showAll:!0,slides:[1,1,1,1,1,1,1,1],breakpoints:{375:{slidesPerView:1,spaceBetween:15},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:45}}},{title:u(()=>[b(g(e.$t("requestsFromIntlImporters")),1)]),slide:u(({slide:t})=>[d(n,{class:"mb-[20px]",item:t},null,8,["item"])]),_:1})}const bt=B(gt,[["render",xt]]),ht=""+new URL("metal.acb3a171.jpg",import.meta.url).href,vt={class:"group relative flex items-end overflow-hidden rounded-[8px] px-[15px] py-[30px] md:px-[25px] md:py-[35px] 4xl:px-[40px] 4xl:py-[50px]"},yt=i("div",{class:"absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent"},null,-1),$t=["alt"],wt={class:"relative z-10 text-[17px] text-white md:text-[24px] 4xl:text-[30px]"},It=$({__name:"PopularCategoryItem",props:{image:{},altImage:{}},setup(e){return(o,n)=>(f(),C("div",vt,[yt,i("img",{class:"absolute left-0 top-0 h-full w-full object-cover duration-hover group-hover:hover:scale-125",src:ht,alt:o.altImage},null,8,$t),i("h2",wt,[k(o.$slots,"default")])]))}}),St={},At={class:"grid min-h-[560px] grid-rows-4 gap-[20px] md:grid-cols-2 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"};function kt(e,o){const n=It,a=V;return f(),y(a,null,{title:u(()=>[b(g(e.$t("popularCategory")),1)]),content:u(()=>[i("div",At,[d(n,{image:"assets/images/metal.jpg",altImage:"metal",class:"md:row-span-2 4xl:row-span-2"},{default:u(()=>[b(" Метал та похідні товари ")]),_:1}),d(n,{image:"~/assets/images/metal.jpg",altImage:"metal",class:"md:row-span-3"},{default:u(()=>[b(" Зернові культури ")]),_:1}),d(n,{image:"~/assets/images/metal.jpg",altImage:"metal",class:"md:row-span-2 4xl:row-span-3"},{default:u(()=>[b(" Добрива ")]),_:1}),d(n,{image:"~/assets/images/metal.jpg",altImage:"metal",class:"md:row-span-1 4xl:row-span-2"},{default:u(()=>[b(" Папір та картон ")]),_:1})])]),_:1})}const Ct=B(St,[["render",kt]]),Bt=$({__name:"IconOpeningCross",props:{open:{type:Boolean}},setup(e){return(o,n)=>(f(),C("span",{class:O(("cn"in o?o.cn:ee(Ue))("relative block h-[12px] w-[12px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-[1px] before:w-full before:bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:m-auto after:h-[1px] after:w-full after:rotate-90 after:bg-black after:duration-200 md:h-[16px] md:w-[16px] 4xl:h-[20px] 4xl:w-[20px] 4xl:before:h-[2px] 4xl:after:h-[2px]",{"after:rotate-0":o.open}))},null,2))}}),Ot=$({inheritAttrs:!1,props:{...oe.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function o(n,a,{isActive:t,isExactActive:p}){return e.active?e.activeClass:e.exactQuery&&!he(n.query,a.query)||e.exactHash&&n.hash!==a.hash?e.inactiveClass:e.exact&&p||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:o}}}),Ut=["href","aria-disabled","role","rel","target","onClick"];function Pt(e,o,n,a,t,p){const l=oe;return e.to?(f(),y(l,L({key:1},e.$props,{custom:""}),{default:u(({route:r,href:_,target:h,rel:c,navigate:m,isActive:s,isExactActive:x,isExternal:w})=>[i("a",L(e.$attrs,{href:e.disabled?void 0:_,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:c,target:h,class:e.resolveLinkClass(r,e._.provides[be]||e.$route,{isActive:s,isExactActive:x}),onClick:I=>!w&&m(I)}),[k(e.$slots,"default",te(ne({isActive:e.exact?x:s})))],16,Ut)]),_:3},16)):(f(),y(we(e.as),L({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:u(()=>[k(e.$slots,"default")]),_:3},16,["disabled","class"]))}const ie=B(Ot,[["render",Pt]]),S=Y(U.ui.strategy,U.ui.button,ae),Dt=$({components:{UIcon:z,ULink:ie},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>S.default.size,validator(e){return Object.keys(S.size).includes(e)}},color:{type:String,default:()=>S.default.color,validator(e){return[...U.ui.colors,...Object.keys(S.color)].includes(e)}},variant:{type:String,default:()=>S.default.variant,validator(e){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(o=>Object.keys(o))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>S.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:o}){const{ui:n,attrs:a}=se("button",R(e,"ui"),S),t=v(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),p=v(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),l=v(()=>e.square||!o.default&&!e.label),r=v(()=>{var x,w;const s=((w=(x=n.value.color)==null?void 0:x[e.color])==null?void 0:w[e.variant])||n.value.variant[e.variant];return De(j(n.value.base,n.value.font,n.value.rounded,n.value.size[e.size],n.value.gap[e.size],e.padded&&n.value[l.value?"square":"padding"][e.size],s==null?void 0:s.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),_=v(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),h=v(()=>e.loading&&!t.value?e.loadingIcon:e.trailingIcon||e.icon),c=v(()=>j(n.value.icon.base,n.value.icon.size[e.size],e.loading&&"animate-spin")),m=v(()=>j(n.value.icon.base,n.value.icon.size[e.size],e.loading&&!t.value&&"animate-spin"));return{attrs:a,isLeading:t,isTrailing:p,isSquare:l,buttonClass:r,leadingIconName:_,trailingIconName:h,leadingIconClass:c,trailingIconClass:m}}});function Lt(e,o,n,a,t,p){const l=z,r=ie;return f(),y(r,L({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:u(()=>[k(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(f(),y(l,{key:0,name:e.leadingIconName,class:O(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):H("",!0)]),k(e.$slots,"default",{},()=>[e.label?(f(),C("span",{key:0,class:O([e.truncate?"text-left break-all line-clamp-1":""])},g(e.label),3)):H("",!0)]),k(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(f(),y(l,{key:0,name:e.trailingIconName,class:O(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):H("",!0)])]),_:3},16,["type","disabled","class"])}const ce=B(Dt,[["render",Lt]]),q=Y(U.ui.strategy,U.ui.accordion,Le),Et=Y(U.ui.strategy,U.ui.button,ae),zt=$({components:{HDisclosure:Ve,HDisclosureButton:Ye,HDisclosurePanel:Te,UIcon:z,UButton:ce},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>q.default.openIcon},closeIcon:{type:String,default:()=>q.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:o,attrs:n}=se("accordion",R(e,"ui"),q,R(e,"class")),a=v(()=>Et),t=A([]);function p(c,m){!e.items[c].closeOthers&&e.multiple||t.value.forEach(s=>{s.open&&s.close(m.target)})}function l(c,m){c.style.height="0",c.offsetHeight,c.style.height=c.scrollHeight+"px",c.addEventListener("transitionend",m,{once:!0})}function r(c){c.style.height=c.scrollHeight+"px",c.offsetHeight}function _(c){c.style.height="auto"}function h(c,m){c.style.height="0",c.addEventListener("transitionend",m,{once:!0})}return{ui:o,uiButton:a,attrs:n,buttonRefs:t,closeOthers:p,omit:Ee,onEnter:l,onBeforeLeave:r,onAfterEnter:_,onLeave:h}}});function jt(e,o,n,a,t,p){const l=z,r=ce,_=N("HDisclosureButton"),h=N("HDisclosurePanel"),c=N("HDisclosure");return f(),C("div",{class:O(e.ui.wrapper)},[(f(!0),C(Ie,null,Se(e.items,(m,s)=>(f(),y(c,{key:s,"default-open":e.defaultOpen||m.defaultOpen},{default:u(({open:x,close:w})=>[d(_,{ref_for:!0,ref:()=>e.buttonRefs[s]={open:x,close:w},as:"template",disabled:m.disabled,onClick:I=>e.closeOthers(s,I),onKeydown:[F(I=>e.closeOthers(s,I),["enter"]),F(I=>e.closeOthers(s,I),["space"])]},{default:u(()=>[k(e.$slots,"default",{item:m,index:s,open:x,close:w},()=>[d(r,te(ne({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(m,["slot","disabled","content","defaultOpen"])})),{trailing:u(()=>[d(l,{name:x&&e.closeIcon?e.closeIcon:e.openIcon,class:O([x&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[m.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),d(Ae,L(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:u(()=>[ke(i("div",null,[d(h,{class:O([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:u(()=>[k(e.$slots,m.slot||"item",{item:m,index:s,open:x,close:w},()=>[b(g(m.content),1)])]),_:2},1032,["class"])],512),[[Ce,x]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["default-open"]))),128))],2)}const Ht=B(zt,[["render",jt]]),ue=$({__name:"Accordion",props:{items:{}},setup(e){return(o,n)=>{const a=Bt,t=Pe,p=Ht;return f(),y(p,{ui:{wrapper:"",item:{base:"font-medium text-[12px] md:text-[16px] 4xl:text-[20px]",color:"text-black",padding:"pt-[15px]"}},items:o.items},{default:u(({item:l,open:r})=>[d(t,{class:"flex w-full items-center justify-between border-b border-black py-[20px] text-left text-[16px] font-semibold md:text-[17px] 4xl:border-b-[2px] 4xl:py-[25px]",ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{default:u(()=>[i("span",null,g(l.label),1),d(a,{open:r},null,8,["open"])]),_:2},1024)]),_:1},8,["items"])}}}),Nt=$({__name:"AccordionFaqExporters",setup(e){const o=[{label:"Що таке Ukrainemart?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які товари можна експортувати?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"У які країни можна експортувати товари?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які вимоги до якості товарів для експорту?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Як проходить доставка та митниця при експорті?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."}];return(n,a)=>{const t=ue;return f(),y(t,{items:o})}}}),qt=$({__name:"AccordionFaqImporters",setup(e){const o=[{label:"1. What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"2. Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"3. Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"4. Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}];return(n,a)=>{const t=ue;return f(),y(t,{items:o})}}}),Rt=$({__name:"SectionFaq",setup(e){const{t:o}=ve(),n=[{label:o("forExporters"),content:Nt},{label:o("forImporters"),content:qt}];return(a,t)=>{const p=ge,l=V;return f(),y(l,{class:"bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"},{title:u(()=>[b(g(a.$t("faq")),1)]),content:u(()=>[d(p,{items:n,class:""})]),_:1})}}}),Vt=""+new URL("partners_ministerstvo.1adc8e28.png",import.meta.url).href,Yt=""+new URL("partners_promyslova_palate.4463c173.png",import.meta.url).href,Tt={},Kt={class:"m-auto block w-fit"},Ft=i("div",{class:"mt-[40px] flex flex-col items-center justify-center gap-[50px] lg:flex-row lg:gap-[150px]"},[i("div",null,[i("img",{class:"w-full max-w-[700px]",src:Vt,alt:""})]),i("div",null,[i("img",{class:"w-full max-w-[480px]",src:Yt,alt:""})])],-1);function Mt(e,o){const n=V;return f(),y(n,{class:"lg:!pb-[100px] lg:!pt-[130xp] xl:!pb-[178px]"},{title:u(()=>[i("span",Kt,g(e.$t("ourPartners")),1)]),content:u(()=>[Ft]),_:1})}const Xt=B(Tt,[["render",Mt]]),On=$({__name:"index",setup(e){const o=A([]);return(async()=>{try{const a=await Ne(`${ye()}/main_page`);o.value=a.products}catch(a){console.error(a)}})(),(a,t)=>{const p=ot,l=xe,r=bt,_=Ct,h=Rt,c=Xt;return f(),C("div",null,[d(p),d(l,{products:ee(o)},{title:u(()=>[b(g(a.$t("goodsFromUaExporters")),1)]),_:1},8,["products"]),d(r),d(_),d(h),d(c,{class:"hidden xl:block"})])}}});export{On as default};
