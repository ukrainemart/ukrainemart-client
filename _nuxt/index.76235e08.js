import{_ as _e}from"./Search.vue.b93d28c4.js";import{_ as be,a as ve,b as F,c as ye,d as he}from"./Tabs.vue.1218ad95.js";import{_ as E,c as Z,d as ee,P as $e,i as Ie,m as V,e as O,t as q,f as xe}from"./entry.685740de.js";import{x as h,a as S,z as te,l as I,G as ne,j as ae,w as ke,i as oe,M as _,X as P,Y as v,Z as y,I as f,N as x,O as p,_ as C,a1 as L,u as c,a2 as z,a4 as D,L as j,U as we,P as le,Q as se,t as R,a5 as T,H as Se,a3 as Ce,a6 as J,J as Be,a7 as Le,a8 as De}from"./swiper-vue.67144f5d.js";import{_ as Oe}from"./RequestImportersItem.vue.84951df8.js";import{_ as K}from"./nuxt-link.067b9ca1.js";import{u as B}from"./useMultiLang.cda8dcb6.js";import{c as ie}from"./cn.a642df04.js";import{_ as Pe}from"./ButtonOpacity.1b008a21.js";import{_ as A}from"./Icon.eba6922e.js";import{t as Ue}from"./tw-merge.8dbf4813.js";import{b as re,u as ue,a as Ee,o as Me}from"./ui.config.25dcc714.js";import{t as W,u as X,o as U,H as Q,N as Y,a as M}from"./micro-task.4a381607.js";import{c as je,l as H,p as ze}from"./open-closed.89ccc2fd.js";import{b as He}from"./use-resolve-button-type.23e66368.js";import"./Search.b192902c.js";import"./nuxt-icon.02768808.js";import"./SearchMobileMenu.ef8c9fd8.js";import"./useApi.dcabefec.js";import"./index.cebd1f01.js";import"./SearchLinkArrow.10b8e5d1.js";import"./index.02de68b8.js";import"./TextPortalPrimary.bb16a90d.js";import"./CardProduct.vue.4c5d9975.js";import"./Hearth.bf392c25.js";import"./HearthBg.b2ed91e1.js";import"./isLoggedIn.b54395ff.js";import"./ArrowNext.d37135a6.js";import"./TitleNamu.9299d46a.js";import"./useVariables.0298316b.js";import"./TextPortalPrimaryXl.36313387.js";import"./ButtonOutline.vue.0ee882c1.js";var Ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ae||{});let ce=Symbol("DisclosureContext");function G(e){let t=oe(ce,null);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,G),o}return t}let de=Symbol("DisclosurePanelContext");function qe(){return oe(de,null)}let Te=h({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:o}){let n=S(e.defaultOpen?0:1),a=S(null),r=S(null),s={buttonId:S(`headlessui-disclosure-button-${W()}`),panelId:S(`headlessui-disclosure-panel-${W()}`),disclosureState:n,panel:a,button:r,toggleDisclosure(){n.value=X(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(i){s.closeDisclosure();let m=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?U(i):U(s.button):U(s.button))();m==null||m.focus()}};return te(ce,s),je(I(()=>X(n.value,{0:H.Open,1:H.Closed}))),()=>{let{defaultOpen:i,...m}=e,b={open:n.value===0,close:s.close};return Q({theirProps:m,ourProps:{},slot:b,slots:t,attrs:o,name:"Disclosure"})}}}),Ne=h({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:o,expose:n}){let a=G("DisclosureButton"),r=qe(),s=I(()=>r===null?!1:r.value===a.panelId.value);ne(()=>{s.value||e.id!==null&&(a.buttonId.value=e.id)}),ae(()=>{s.value||(a.buttonId.value=null)});let i=S(null);n({el:i,$el:i}),s.value||ke(()=>{a.button.value=i.value});let m=He(I(()=>({as:e.as,type:t.type})),i);function b(){var l;e.disabled||(s.value?(a.toggleDisclosure(),(l=U(a.button))==null||l.focus()):a.toggleDisclosure())}function u(l){var g;if(!e.disabled)if(s.value)switch(l.key){case M.Space:case M.Enter:l.preventDefault(),l.stopPropagation(),a.toggleDisclosure(),(g=U(a.button))==null||g.focus();break}else switch(l.key){case M.Space:case M.Enter:l.preventDefault(),l.stopPropagation(),a.toggleDisclosure();break}}function d(l){switch(l.key){case M.Space:l.preventDefault();break}}return()=>{var l;let g={open:a.disclosureState.value===0},{id:$,...k}=e,ge=s.value?{ref:i,type:m.value,onClick:b,onKeydown:u}:{id:(l=a.buttonId.value)!=null?l:$,ref:i,type:m.value,"aria-expanded":a.disclosureState.value===0,"aria-controls":a.disclosureState.value===0||U(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:b,onKeydown:u,onKeyup:d};return Q({ourProps:ge,theirProps:k,slot:g,attrs:t,slots:o,name:"DisclosureButton"})}}}),Re=h({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:o,expose:n}){let a=G("DisclosurePanel");ne(()=>{e.id!==null&&(a.panelId.value=e.id)}),ae(()=>{a.panelId.value=null}),n({el:a.panel,$el:a.panel}),te(de,a.panelId);let r=ze(),s=I(()=>r!==null?(r.value&H.Open)===H.Open:a.disclosureState.value===0);return()=>{var i;let m={open:a.disclosureState.value===0,close:a.close},{id:b,...u}=e,d={id:(i=a.panelId.value)!=null?i:b,ref:a.panel};return Q({ourProps:d,theirProps:u,slot:m,attrs:t,slots:o,features:Y.RenderStrategy|Y.Static,visible:s.value,name:"DisclosurePanel"})}}});const Fe={},Ve={class:"flex h-header-sm flex-col lg:h-header-lg 4xl:h-header-4xl"},Ke={class:"flex flex-1 flex-col items-center justify-center px-5 text-center"},Qe={class:"mb-2.5 font-namu text-[55px] font-light leading-[66px] text-black md:mb-[13px] md:text-[95px] md:leading-[114px] lg:mb-[15px] lg:text-[130px] lg:leading-[156px]"},Ge={class:"mx-auto mb-[15px] max-w-[1182px] text-[10px] font-medium text-black md:mb-[30px] md:text-[14px] lg:mb-10 lg:text-[17px]"};function Je(e,t){const o=_e,n=be;return _(),P("div",Ve,[v("div",Ke,[v("h1",Qe,y(e.$t("logo")),1),v("p",Ge,y(e.$t("companyDescription")),1),f(o,{isExample:!0})]),f(n)])}const We=E(Fe,[["render",Je]]),Xe={};function Ye(e,t){const o=Oe,n=ve;return _(),x(n,{showAll:!0,slides:[1,1,1,1,1,1,1,1],breakpoints:{375:{slidesPerView:1,spaceBetween:15},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:45}}},{title:p(()=>[C(y(e.$t("requestsFromIntlImporters")),1)]),slide:p(({slide:a})=>[f(o,{class:"mb-[20px]",item:a},null,8,["item"])]),_:1})}const Ze=E(Xe,[["render",Ye]]),et={class:"group relative flex items-end overflow-hidden rounded-[8px] px-[15px] py-[30px] md:px-[25px] md:py-[35px] 4xl:px-[40px] 4xl:py-[50px]"},tt=v("div",{class:"absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent"},null,-1),nt=["src","alt"],at={class:"relative z-10 text-[17px] text-white md:text-[24px] 4xl:text-[30px]"},ot=h({__name:"PopularCategoryItem",props:{image:{},altImage:{},link:{}},setup(e){return(t,o)=>{const n=K;return _(),P("div",et,[f(n,{class:"absolute left-0 top-0 z-50 h-full w-full",to:t.link},null,8,["to"]),tt,v("img",{class:"absolute left-0 top-0 h-full w-full object-cover duration-hover group-hover:scale-105",src:t.image,alt:t.altImage},null,8,nt),v("h2",at,[L(t.$slots,"default")])])}}}),lt={class:"grid min-h-[560px] grid-rows-4 gap-[20px] md:grid-cols-2 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"},st=h({__name:"SectionPopularCategories",setup(e){const t=S([]);return(()=>{const{data:n}=Z(`${ee()}/category/popular`,"$rPEFne8qs6");t.value=n.value,console.log(t.value)})(),(n,a)=>{const r=ot,s=F;return c(t)&&c(t).length>=4?(_(),x(s,{key:0},{title:p(()=>[C(y(n.$t("popularCategory")),1)]),content:p(()=>{var i,m,b,u,d,l,g,$;return[v("div",lt,[f(r,{link:`/category/${(i=c(t)[0])==null?void 0:i.id}`,image:(m=c(t)[0])==null?void 0:m.image,altImage:("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[0],"title"),class:"md:row-span-2 4xl:row-span-2"},{default:p(()=>[C(y(("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[0],"title")),1)]),_:1},8,["link","image","altImage"]),f(r,{link:`/category/${(b=c(t)[1])==null?void 0:b.id}`,image:(u=c(t)[1])==null?void 0:u.image,altImage:("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[1],"title"),class:"md:row-span-3"},{default:p(()=>[C(y(("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[1],"title")),1)]),_:1},8,["link","image","altImage"]),f(r,{link:`/category/${(d=c(t)[2])==null?void 0:d.id}`,image:(l=c(t)[2])==null?void 0:l.image,altImage:("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[2],"title"),class:"md:row-span-2 4xl:row-span-3"},{default:p(()=>[C(y(("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[2],"title")),1)]),_:1},8,["link","image","altImage"]),f(r,{link:`/category/${(g=c(t)[3])==null?void 0:g.id}`,image:($=c(t)[3])==null?void 0:$.image,altImage:("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[3],"title"),class:"md:row-span-1 4xl:row-span-2"},{default:p(()=>[C(y(("useMultiLang"in n?n.useMultiLang:c(B))(c(t)[3],"title")),1)]),_:1},8,["link","image","altImage"])])]}),_:1})):z("",!0)}}}),it=h({__name:"IconOpeningCross",props:{open:{type:Boolean}},setup(e){return(t,o)=>(_(),P("span",{class:D(("cn"in t?t.cn:c(ie))("relative block h-[12px] w-[12px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-[1px] before:w-full before:bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:m-auto after:h-[1px] after:w-full after:rotate-90 after:bg-black after:duration-200 md:h-[16px] md:w-[16px] 4xl:h-[20px] 4xl:w-[20px] 4xl:before:h-[2px] 4xl:after:h-[2px]",{"after:rotate-0":t.open}))},null,2))}}),rt=h({inheritAttrs:!1,props:{...K.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function t(o,n,{isActive:a,isExactActive:r}){return e.active?e.activeClass:e.exactQuery&&!Ie(o.query,n.query)||e.exactHash&&o.hash!==n.hash?e.inactiveClass:e.exact&&r||!e.exact&&a?e.activeClass:e.inactiveClass}return{resolveLinkClass:t}}}),ut=["href","aria-disabled","role","rel","target","onClick"];function ct(e,t,o,n,a,r){const s=K;return e.to?(_(),x(s,j({key:1},e.$props,{custom:""}),{default:p(({route:i,href:m,target:b,rel:u,navigate:d,isActive:l,isExactActive:g,isExternal:$})=>[v("a",j(e.$attrs,{href:e.disabled?void 0:m,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:u,target:b,class:e.resolveLinkClass(i,e._.provides[$e]||e.$route,{isActive:l,isExactActive:g}),onClick:k=>!$&&d(k)}),[L(e.$slots,"default",le(se({isActive:e.exact?g:l})))],16,ut)]),_:3},16)):(_(),x(we(e.as),j({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:p(()=>[L(e.$slots,"default")]),_:3},16,["disabled","class"]))}const pe=E(rt,[["render",ct]]),w=V(O.ui.strategy,O.ui.button,re),dt=h({components:{UIcon:A,ULink:pe},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>w.default.size,validator(e){return Object.keys(w.size).includes(e)}},color:{type:String,default:()=>w.default.color,validator(e){return[...O.ui.colors,...Object.keys(w.color)].includes(e)}},variant:{type:String,default:()=>w.default.variant,validator(e){return[...Object.keys(w.variant),...Object.values(w.color).flatMap(t=>Object.keys(t))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>w.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:t}){const{ui:o,attrs:n}=ue("button",R(e,"ui"),w),a=I(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),r=I(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),s=I(()=>e.square||!t.default&&!e.label),i=I(()=>{var g,$;const l=(($=(g=o.value.color)==null?void 0:g[e.color])==null?void 0:$[e.variant])||o.value.variant[e.variant];return Ue(q(o.value.base,o.value.font,o.value.rounded,o.value.size[e.size],o.value.gap[e.size],e.padded&&o.value[s.value?"square":"padding"][e.size],l==null?void 0:l.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),m=I(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),b=I(()=>e.loading&&!a.value?e.loadingIcon:e.trailingIcon||e.icon),u=I(()=>q(o.value.icon.base,o.value.icon.size[e.size],e.loading&&"animate-spin")),d=I(()=>q(o.value.icon.base,o.value.icon.size[e.size],e.loading&&!a.value&&"animate-spin"));return{attrs:n,isLeading:a,isTrailing:r,isSquare:s,buttonClass:i,leadingIconName:m,trailingIconName:b,leadingIconClass:u,trailingIconClass:d}}});function pt(e,t,o,n,a,r){const s=A,i=pe;return _(),x(i,j({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:p(()=>[L(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(_(),x(s,{key:0,name:e.leadingIconName,class:D(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0)]),L(e.$slots,"default",{},()=>[e.label?(_(),P("span",{key:0,class:D([e.truncate?"text-left break-all line-clamp-1":""])},y(e.label),3)):z("",!0)]),L(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(_(),x(s,{key:0,name:e.trailingIconName,class:D(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0)])]),_:3},16,["type","disabled","class"])}const me=E(dt,[["render",pt]]),N=V(O.ui.strategy,O.ui.accordion,Ee),mt=V(O.ui.strategy,O.ui.button,re),ft=h({components:{HDisclosure:Te,HDisclosureButton:Ne,HDisclosurePanel:Re,UIcon:A,UButton:me},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>N.default.openIcon},closeIcon:{type:String,default:()=>N.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:o}=ue("accordion",R(e,"ui"),N,R(e,"class")),n=I(()=>mt),a=S([]);function r(u,d){!e.items[u].closeOthers&&e.multiple||a.value.forEach(l=>{l.open&&l.close(d.target)})}function s(u,d){u.style.height="0",u.offsetHeight,u.style.height=u.scrollHeight+"px",u.addEventListener("transitionend",d,{once:!0})}function i(u){u.style.height=u.scrollHeight+"px",u.offsetHeight}function m(u){u.style.height="auto"}function b(u,d){u.style.height="0",u.addEventListener("transitionend",d,{once:!0})}return{ui:t,uiButton:n,attrs:o,buttonRefs:a,closeOthers:r,omit:Me,onEnter:s,onBeforeLeave:i,onAfterEnter:m,onLeave:b}}});function gt(e,t,o,n,a,r){const s=A,i=me,m=T("HDisclosureButton"),b=T("HDisclosurePanel"),u=T("HDisclosure");return _(),P("div",{class:D(e.ui.wrapper)},[(_(!0),P(Se,null,Ce(e.items,(d,l)=>(_(),x(u,{key:l,"default-open":e.defaultOpen||d.defaultOpen},{default:p(({open:g,close:$})=>[f(m,{ref_for:!0,ref:()=>e.buttonRefs[l]={open:g,close:$},as:"template",disabled:d.disabled,onClick:k=>e.closeOthers(l,k),onKeydown:[J(k=>e.closeOthers(l,k),["enter"]),J(k=>e.closeOthers(l,k),["space"])]},{default:p(()=>[L(e.$slots,"default",{item:d,index:l,open:g,close:$},()=>[f(i,le(se({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(d,["slot","disabled","content","defaultOpen"])})),{trailing:p(()=>[f(s,{name:g&&e.closeIcon?e.closeIcon:e.openIcon,class:D([g&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[d.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),f(Be,j(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:p(()=>[Le(v("div",null,[f(b,{class:D([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:p(()=>[L(e.$slots,d.slot||"item",{item:d,index:l,open:g,close:$},()=>[C(y(d.content),1)])]),_:2},1032,["class"])],512),[[De,g]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["default-open"]))),128))],2)}const _t=E(ft,[["render",gt]]),fe=h({__name:"Accordion",props:{items:{}},setup(e){return(t,o)=>{const n=it,a=Pe,r=_t;return _(),x(r,{ui:{wrapper:"",item:{base:"font-medium text-[12px] md:text-[16px] border-b border-black 4xl:text-[20px]",color:"text-black",padding:"pt-[15px]"}},items:t.items},{default:p(({item:s,open:i})=>[f(a,{class:D(("cn"in t?t.cn:c(ie))("flex w-full items-center justify-between  py-[20px] text-left text-[16px] font-semibold duration-0 md:text-[17px] 4xl:border-b-[2px] 4xl:py-[25px]",{"border-b border-black":!i})),ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{default:p(()=>[v("span",null,y(s.label),1),f(n,{open:i},null,8,["open"])]),_:2},1032,["class"])]),_:1},8,["items"])}}}),bt=h({__name:"AccordionFaqExporters",setup(e){const t=[{label:"Що таке Ukrainemart?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які товари можна експортувати?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"У які країни можна експортувати товари?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які вимоги до якості товарів для експорту?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Як проходить доставка та митниця при експорті?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."}];return(o,n)=>{const a=fe;return _(),x(a,{items:t})}}}),vt=h({__name:"AccordionFaqImporters",setup(e){const t=[{label:"1. What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"2. Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"3. Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"4. Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}];return(o,n)=>{const a=fe;return _(),x(a,{items:t})}}}),yt=h({__name:"SectionFaq",setup(e){const{t}=xe(),o=[{label:t("forExporters"),content:bt},{label:t("forImporters"),content:vt}];return(n,a)=>{const r=ye,s=F;return _(),x(s,{class:"bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"},{title:p(()=>[C(y(n.$t("faq")),1)]),content:p(()=>[f(r,{items:o,class:""})]),_:1})}}}),ht=""+new URL("partners_ministerstvo.1adc8e28.png",import.meta.url).href,$t=""+new URL("partners_promyslova_palate.4463c173.png",import.meta.url).href,It={},xt={class:"m-auto block w-fit"},kt=v("div",{class:"mt-[40px] flex items-center justify-center gap-[50px] lg:flex-row lg:gap-[150px]"},[v("div",null,[v("img",{class:"w-full max-w-[700px]",src:ht,alt:""})]),v("div",null,[v("img",{class:"w-full max-w-[480px]",src:$t,alt:""})])],-1);function wt(e,t){const o=F;return _(),x(o,{class:"lg:!pb-[100px] lg:!pt-[130xp] xl:!pb-[178px]"},{title:p(()=>[v("span",xt,y(e.$t("ourPartners")),1)]),content:p(()=>[kt]),_:1})}const St=E(It,[["render",wt]]),ln=h({__name:"index",setup(e){const t=S([]);return(async()=>{var n,a;try{const r=await Z(`${ee()}/main_page`,"$pqtWcjQkdb");t.value=(a=(n=r==null?void 0:r.data)==null?void 0:n.value)==null?void 0:a.products}catch(r){console.error(r)}})(),(n,a)=>{const r=We,s=he,i=Ze,m=st,b=yt,u=St;return _(),P("div",null,[f(r),f(s,{products:c(t)},{title:p(()=>[C(y(n.$t("goodsFromUaExporters")),1)]),_:1},8,["products"]),f(i),f(m),f(b),f(u)])}}});export{ln as default};
