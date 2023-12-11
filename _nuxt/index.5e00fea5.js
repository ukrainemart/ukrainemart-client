import{_ as _e}from"./Search.vue.756f1c26.js";import{_ as be,a as F,b as ve}from"./Tabs.vue.79eaf0f9.js";import{_ as z,c as Z,d as ee,P as ye,i as he,m as K,e as O,t as A,f as $e}from"./entry.65dcdd48.js";import{x as y,a as k,z as te,l as $,G as ne,j as ae,w as Ie,i as oe,M as b,X as P,Y as v,Z as I,I as m,a1 as B,u as c,N as x,O as f,_ as L,a2 as j,a4 as D,L as M,U as xe,P as le,Q as se,t as R,a5 as T,H as ke,a3 as Se,a6 as J,J as Ce,a7 as we,a8 as Le}from"./swiper-vue.f6db05b8.js";import{_ as Be}from"./SectionProductsSlider.vue.0a8b64f1.js";import{_ as De}from"./SectionRequestsImporters.vue.776e4c93.js";import{_ as V}from"./nuxt-link.b771d29d.js";import{u as w}from"./useMultiLang.b1d8a82f.js";import{c as ie}from"./cn.a642df04.js";import{_ as Oe}from"./ButtonOpacity.e49509d2.js";import{_ as H}from"./Icon.f4e2042c.js";import{t as Pe}from"./tw-merge.3a9921c0.js";import{b as re,u as ue,a as Ue,o as Ee}from"./ui.config.1ed3e921.js";import{t as W,u as X,o as U,H as Q,N as Y,a as E}from"./micro-task.ab13cabb.js";import{c as Me,l as q,p as ze}from"./open-closed.4de15d71.js";import{b as je}from"./use-resolve-button-type.74e369d1.js";import{u as qe}from"./useTitle.d23c5750.js";import"./Search.03f0bfa5.js";import"./nuxt-icon.d25099ad.js";import"./SearchMobileMenu.a4964cef.js";import"./useApi.3db40126.js";import"./index.510b78c9.js";import"./SearchLinkArrow.efd6060c.js";import"./index.ebafeb8e.js";import"./TextPortalPrimary.4c58392b.js";import"./ArrowNext.e605a923.js";import"./TitleNamu.74ef0c5e.js";import"./CardProduct.vue.a10de9f5.js";import"./Hearth.b43565a0.js";import"./HearthBg.67379cd5.js";import"./isLoggedIn.8693487c.js";import"./useVariables.0298316b.js";import"./RequestImportersItem.vue.d5eb618b.js";import"./TextPortalPrimaryXl.e338396a.js";import"./ButtonOutline.vue.943bd646.js";var He=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(He||{});let ce=Symbol("DisclosureContext");function G(e){let t=oe(ce,null);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,G),o}return t}let de=Symbol("DisclosurePanelContext");function Ae(){return oe(de,null)}let Te=y({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:o}){let a=k(e.defaultOpen?0:1),n=k(null),r=k(null),s={buttonId:k(`headlessui-disclosure-button-${W()}`),panelId:k(`headlessui-disclosure-panel-${W()}`),disclosureState:a,panel:n,button:r,toggleDisclosure(){a.value=X(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(i){s.closeDisclosure();let p=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?U(i):U(s.button):U(s.button))();p==null||p.focus()}};return te(ce,s),Me($(()=>X(a.value,{0:q.Open,1:q.Closed}))),()=>{let{defaultOpen:i,...p}=e,_={open:a.value===0,close:s.close};return Q({theirProps:p,ourProps:{},slot:_,slots:t,attrs:o,name:"Disclosure"})}}}),Ne=y({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:o,expose:a}){let n=G("DisclosureButton"),r=Ae(),s=$(()=>r===null?!1:r.value===n.panelId.value);ne(()=>{s.value||e.id!==null&&(n.buttonId.value=e.id)}),ae(()=>{s.value||(n.buttonId.value=null)});let i=k(null);a({el:i,$el:i}),s.value||Ie(()=>{n.button.value=i.value});let p=je($(()=>({as:e.as,type:t.type})),i);function _(){var l;e.disabled||(s.value?(n.toggleDisclosure(),(l=U(n.button))==null||l.focus()):n.toggleDisclosure())}function u(l){var g;if(!e.disabled)if(s.value)switch(l.key){case E.Space:case E.Enter:l.preventDefault(),l.stopPropagation(),n.toggleDisclosure(),(g=U(n.button))==null||g.focus();break}else switch(l.key){case E.Space:case E.Enter:l.preventDefault(),l.stopPropagation(),n.toggleDisclosure();break}}function d(l){switch(l.key){case E.Space:l.preventDefault();break}}return()=>{var l;let g={open:n.disclosureState.value===0},{id:h,...S}=e,ge=s.value?{ref:i,type:p.value,onClick:_,onKeydown:u}:{id:(l=n.buttonId.value)!=null?l:h,ref:i,type:p.value,"aria-expanded":n.disclosureState.value===0,"aria-controls":n.disclosureState.value===0||U(n.panel)?n.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:_,onKeydown:u,onKeyup:d};return Q({ourProps:ge,theirProps:S,slot:g,attrs:t,slots:o,name:"DisclosureButton"})}}}),Re=y({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:o,expose:a}){let n=G("DisclosurePanel");ne(()=>{e.id!==null&&(n.panelId.value=e.id)}),ae(()=>{n.panelId.value=null}),a({el:n.panel,$el:n.panel}),te(de,n.panelId);let r=ze(),s=$(()=>r!==null?(r.value&q.Open)===q.Open:n.disclosureState.value===0);return()=>{var i;let p={open:n.disclosureState.value===0,close:n.close},{id:_,...u}=e,d={id:(i=n.panelId.value)!=null?i:_,ref:n.panel};return Q({ourProps:d,theirProps:u,slot:p,attrs:t,slots:o,features:Y.RenderStrategy|Y.Static,visible:s.value,name:"DisclosurePanel"})}}});const Fe={},Ke={class:"flex h-header-sm flex-col lg:h-header-lg 4xl:h-header-4xl"},Ve={class:"flex flex-1 flex-col items-center justify-center px-5 text-center"},Qe={class:"mb-2.5 font-namu text-[55px] font-light leading-[66px] text-black md:mb-[13px] md:text-[95px] md:leading-[114px] lg:mb-[15px] lg:text-[130px] lg:leading-[156px]"},Ge={class:"mx-auto mb-[15px] max-w-[1182px] text-[10px] font-medium text-black md:mb-[30px] md:text-[14px] lg:mb-10 lg:text-[17px]"};function Je(e,t){const o=_e,a=be;return b(),P("div",Ke,[v("div",Ve,[v("h1",Qe,I(e.$t("logo")),1),v("p",Ge,I(e.$t("companyDescription")),1),m(o,{isExample:!0})]),m(a)])}const We=z(Fe,[["render",Je]]),Xe={class:"group relative flex items-end overflow-hidden rounded-[8px] px-[15px] py-[30px] md:px-[25px] md:py-[35px] 4xl:px-[40px] 4xl:py-[50px]"},Ye=v("div",{class:"absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent"},null,-1),Ze=["src","alt"],et={class:"relative z-10 text-[17px] text-white md:text-[24px] 4xl:text-[30px]"},tt=y({__name:"PopularCategoryItem",props:{image:{},altImage:{},link:{}},setup(e){return(t,o)=>{const a=V;return b(),P("div",Xe,[m(a,{class:"absolute left-0 top-0 z-50 h-full w-full",to:t.link},null,8,["to"]),Ye,v("img",{class:"absolute left-0 top-0 h-full w-full object-cover duration-hover group-hover:scale-105",src:t.image,alt:t.altImage},null,8,Ze),v("h2",et,[B(t.$slots,"default")])])}}}),nt={class:"grid min-h-[560px] grid-rows-4 gap-[20px] md:grid-cols-2 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"},at=y({__name:"SectionPopularCategories",setup(e){const t=k([]);return(()=>{const{data:a}=Z(`${ee()}/category/popular`,"$rPEFne8qs6");t.value=a.value,console.log(t.value)})(),(a,n)=>{const r=tt,s=F;return c(t)&&c(t).length>=4?(b(),x(s,{key:0},{title:f(()=>[L(I(a.$t("popularCategory")),1)]),content:f(()=>{var i,p,_,u,d,l,g,h;return[v("div",nt,[m(r,{link:`/category/${(i=c(t)[0])==null?void 0:i.id}`,image:(p=c(t)[0])==null?void 0:p.image,altImage:("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[0],"title"),class:"md:row-span-2 4xl:row-span-2"},{default:f(()=>[L(I(("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[0],"title")),1)]),_:1},8,["link","image","altImage"]),m(r,{link:`/category/${(_=c(t)[1])==null?void 0:_.id}`,image:(u=c(t)[1])==null?void 0:u.image,altImage:("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[1],"title"),class:"md:row-span-3"},{default:f(()=>[L(I(("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[1],"title")),1)]),_:1},8,["link","image","altImage"]),m(r,{link:`/category/${(d=c(t)[2])==null?void 0:d.id}`,image:(l=c(t)[2])==null?void 0:l.image,altImage:("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[2],"title"),class:"md:row-span-2 4xl:row-span-3"},{default:f(()=>[L(I(("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[2],"title")),1)]),_:1},8,["link","image","altImage"]),m(r,{link:`/category/${(g=c(t)[3])==null?void 0:g.id}`,image:(h=c(t)[3])==null?void 0:h.image,altImage:("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[3],"title"),class:"md:row-span-1 4xl:row-span-2"},{default:f(()=>[L(I(("useMultiLang"in a?a.useMultiLang:c(w))(c(t)[3],"title")),1)]),_:1},8,["link","image","altImage"])])]}),_:1})):j("",!0)}}}),ot=y({__name:"IconOpeningCross",props:{open:{type:Boolean}},setup(e){return(t,o)=>(b(),P("span",{class:D(("cn"in t?t.cn:c(ie))("relative block h-[12px] w-[12px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-[1px] before:w-full before:bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:m-auto after:h-[1px] after:w-full after:rotate-90 after:bg-black after:duration-200 md:h-[16px] md:w-[16px] 4xl:h-[20px] 4xl:w-[20px] 4xl:before:h-[2px] 4xl:after:h-[2px]",{"after:rotate-0":t.open}))},null,2))}}),lt=y({inheritAttrs:!1,props:{...V.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function t(o,a,{isActive:n,isExactActive:r}){return e.active?e.activeClass:e.exactQuery&&!he(o.query,a.query)||e.exactHash&&o.hash!==a.hash?e.inactiveClass:e.exact&&r||!e.exact&&n?e.activeClass:e.inactiveClass}return{resolveLinkClass:t}}}),st=["href","aria-disabled","role","rel","target","onClick"];function it(e,t,o,a,n,r){const s=V;return e.to?(b(),x(s,M({key:1},e.$props,{custom:""}),{default:f(({route:i,href:p,target:_,rel:u,navigate:d,isActive:l,isExactActive:g,isExternal:h})=>[v("a",M(e.$attrs,{href:e.disabled?void 0:p,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:u,target:_,class:e.resolveLinkClass(i,e._.provides[ye]||e.$route,{isActive:l,isExactActive:g}),onClick:S=>!h&&d(S)}),[B(e.$slots,"default",le(se({isActive:e.exact?g:l})))],16,st)]),_:3},16)):(b(),x(xe(e.as),M({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:f(()=>[B(e.$slots,"default")]),_:3},16,["disabled","class"]))}const pe=z(lt,[["render",it]]),C=K(O.ui.strategy,O.ui.button,re),rt=y({components:{UIcon:H,ULink:pe},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>C.default.size,validator(e){return Object.keys(C.size).includes(e)}},color:{type:String,default:()=>C.default.color,validator(e){return[...O.ui.colors,...Object.keys(C.color)].includes(e)}},variant:{type:String,default:()=>C.default.variant,validator(e){return[...Object.keys(C.variant),...Object.values(C.color).flatMap(t=>Object.keys(t))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>C.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:t}){const{ui:o,attrs:a}=ue("button",R(e,"ui"),C),n=$(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),r=$(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),s=$(()=>e.square||!t.default&&!e.label),i=$(()=>{var g,h;const l=((h=(g=o.value.color)==null?void 0:g[e.color])==null?void 0:h[e.variant])||o.value.variant[e.variant];return Pe(A(o.value.base,o.value.font,o.value.rounded,o.value.size[e.size],o.value.gap[e.size],e.padded&&o.value[s.value?"square":"padding"][e.size],l==null?void 0:l.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),p=$(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),_=$(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),u=$(()=>A(o.value.icon.base,o.value.icon.size[e.size],e.loading&&"animate-spin")),d=$(()=>A(o.value.icon.base,o.value.icon.size[e.size],e.loading&&!n.value&&"animate-spin"));return{attrs:a,isLeading:n,isTrailing:r,isSquare:s,buttonClass:i,leadingIconName:p,trailingIconName:_,leadingIconClass:u,trailingIconClass:d}}});function ut(e,t,o,a,n,r){const s=H,i=pe;return b(),x(i,M({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:f(()=>[B(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(b(),x(s,{key:0,name:e.leadingIconName,class:D(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):j("",!0)]),B(e.$slots,"default",{},()=>[e.label?(b(),P("span",{key:0,class:D([e.truncate?"text-left break-all line-clamp-1":""])},I(e.label),3)):j("",!0)]),B(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(b(),x(s,{key:0,name:e.trailingIconName,class:D(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):j("",!0)])]),_:3},16,["type","disabled","class"])}const me=z(rt,[["render",ut]]),N=K(O.ui.strategy,O.ui.accordion,Ue),ct=K(O.ui.strategy,O.ui.button,re),dt=y({components:{HDisclosure:Te,HDisclosureButton:Ne,HDisclosurePanel:Re,UIcon:H,UButton:me},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>N.default.openIcon},closeIcon:{type:String,default:()=>N.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:o}=ue("accordion",R(e,"ui"),N,R(e,"class")),a=$(()=>ct),n=k([]);function r(u,d){!e.items[u].closeOthers&&e.multiple||n.value.forEach(l=>{l.open&&l.close(d.target)})}function s(u,d){u.style.height="0",u.offsetHeight,u.style.height=u.scrollHeight+"px",u.addEventListener("transitionend",d,{once:!0})}function i(u){u.style.height=u.scrollHeight+"px",u.offsetHeight}function p(u){u.style.height="auto"}function _(u,d){u.style.height="0",u.addEventListener("transitionend",d,{once:!0})}return{ui:t,uiButton:a,attrs:o,buttonRefs:n,closeOthers:r,omit:Ee,onEnter:s,onBeforeLeave:i,onAfterEnter:p,onLeave:_}}});function pt(e,t,o,a,n,r){const s=H,i=me,p=T("HDisclosureButton"),_=T("HDisclosurePanel"),u=T("HDisclosure");return b(),P("div",{class:D(e.ui.wrapper)},[(b(!0),P(ke,null,Se(e.items,(d,l)=>(b(),x(u,{key:l,"default-open":e.defaultOpen||d.defaultOpen},{default:f(({open:g,close:h})=>[m(p,{ref_for:!0,ref:()=>e.buttonRefs[l]={open:g,close:h},as:"template",disabled:d.disabled,onClick:S=>e.closeOthers(l,S),onKeydown:[J(S=>e.closeOthers(l,S),["enter"]),J(S=>e.closeOthers(l,S),["space"])]},{default:f(()=>[B(e.$slots,"default",{item:d,index:l,open:g,close:h},()=>[m(i,le(se({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(d,["slot","disabled","content","defaultOpen"])})),{trailing:f(()=>[m(s,{name:g&&e.closeIcon?e.closeIcon:e.openIcon,class:D([g&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[d.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),m(Ce,M(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:f(()=>[we(v("div",null,[m(_,{class:D([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:f(()=>[B(e.$slots,d.slot||"item",{item:d,index:l,open:g,close:h},()=>[L(I(d.content),1)])]),_:2},1032,["class"])],512),[[Le,g]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["default-open"]))),128))],2)}const mt=z(dt,[["render",pt]]),fe=y({__name:"Accordion",props:{items:{}},setup(e){return(t,o)=>{const a=ot,n=Oe,r=mt;return b(),x(r,{ui:{wrapper:"",item:{base:"font-medium text-[12px] md:text-[16px] border-b border-black 4xl:text-[20px]",color:"text-black",padding:"pt-[15px]"}},items:t.items},{default:f(({item:s,open:i})=>[m(n,{class:D(("cn"in t?t.cn:c(ie))("flex w-full items-center justify-between  py-[20px] text-left text-[16px] font-semibold !duration-0 md:text-[17px] 4xl:border-b-[2px] 4xl:py-[25px]",{"border-b border-black":!i})),ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{default:f(()=>[v("span",null,I(s.label),1),m(a,{open:i},null,8,["open"])]),_:2},1032,["class"])]),_:1},8,["items"])}}}),ft=y({__name:"AccordionFaqExporters",setup(e){const t=[{label:"Що таке Ukrainemart?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які товари можна експортувати?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"У які країни можна експортувати товари?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Які вимоги до якості товарів для експорту?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."},{label:"Як проходить доставка та митниця при експорті?",content:"Це перша в Україні В2В платформа, через яку українські експортери можуть продавати свої товари міжнародним імпортерам."}];return(o,a)=>{const n=fe;return b(),x(n,{items:t})}}}),gt=y({__name:"AccordionFaqImporters",setup(e){const t=[{label:"1. What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"2. Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"3. Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"4. Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}];return(o,a)=>{const n=fe;return b(),x(n,{items:t})}}}),_t=y({__name:"SectionFaq",setup(e){const{t}=$e(),o=[{label:t("forExporters"),content:ft},{label:t("forImporters"),content:gt}];return(a,n)=>{const r=ve,s=F;return b(),x(s,{class:"bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"},{title:f(()=>[L(I(a.$t("faq")),1)]),content:f(()=>[m(r,{items:o,class:""})]),_:1})}}}),bt=""+new URL("partners_ministerstvo.1adc8e28.png",import.meta.url).href,vt=""+new URL("partners_promyslova_palate.4463c173.png",import.meta.url).href,yt={},ht={class:"m-auto block w-fit"},$t=v("div",{class:"mt-[40px] flex items-center justify-center gap-[50px] lg:flex-row lg:gap-[150px]"},[v("div",null,[v("img",{class:"w-full max-w-[700px]",src:bt,alt:""})]),v("div",null,[v("img",{class:"w-full max-w-[480px]",src:vt,alt:""})])],-1);function It(e,t){const o=F;return b(),x(o,{class:"lg:!pb-[100px] lg:!pt-[130xp] xl:!pb-[178px]"},{title:f(()=>[v("span",ht,I(e.$t("ourPartners")),1)]),content:f(()=>[$t]),_:1})}const xt=z(yt,[["render",It]]),ln=y({__name:"index",setup(e){qe("home");const t=k([]),o=k([]);return(async()=>{try{const r=(await Z(`${ee()}/main_page`,"$pqtWcjQkdb")).data.value;t.value=r==null?void 0:r.products,o.value=r==null?void 0:r.importRequests}catch(n){console.error(n)}})(),(n,r)=>{const s=We,i=Be,p=De,_=at,u=_t,d=xt;return b(),P("div",null,[m(s),m(i,{products:c(t)},{title:f(()=>[L(I(n.$t("goodsFromUaExporters")),1)]),_:1},8,["products"]),m(p,{title:n.$t("requestsFromIntlImporters"),requests:c(o)},null,8,["title","requests"]),m(_),m(u),m(d)])}}});export{ln as default};
