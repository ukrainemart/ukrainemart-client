import Je from"./Home.c84060e7.js";import{_ as ie}from"./ButtonOpacity.844a88a9.js";import{x as M,M as a,N as v,O as s,Y as c,a1 as F,Z as _,l as q,a7 as be,a4 as C,u as n,aj as Ze,a2 as b,I as o,a8 as Xe,J as Qe,a as B,X as y,_ as x,H as R,i as Y,a3 as ee,G as et,j as tt,k as ye,t as ae,ap as ot,L as se,r as $e,b as he,z as K}from"./swiper-vue.67144f5d.js";import we from"./SearchMobileMenu.85d6d2f3.js";import nt from"./Favorites.9196b5ca.js";import lt from"./User.f78406c1.js";import{_ as at,a as st}from"./ProfileMenuList.vue.8d9ca9ea.js";import{j as oe,_ as z,n as re,b as it,f as ue,m as Ce,e as J,t as te,F as rt,c as ut,d as pt,l as ct}from"./entry.61833fc9.js";import{c as H}from"./cn.a642df04.js";import{i as A}from"./isLoggedIn.48746300.js";import{_ as pe}from"./nuxt-link.3f77bc6c.js";import{_ as Z}from"./ButtonPrimary.vue.61ff6df6.js";import{_ as ne}from"./ButtonText.vue.445911d6.js";import{b as dt,a as mt}from"./SideModal.vue.dc5906f6.js";import gt from"./ArrowNext.7495b0d5.js";import ke from"./ArrowDown.8ea42960.js";import{u as N}from"./useMultiLang.402b7490.js";import{u as ce}from"./index.a74f4e4f.js";import{u as de}from"./useVariables.0298316b.js";import _t from"./Hearth.b98f5180.js";import{_ as ft,a as xt,b as Me,c as Le}from"./AlertTextDanger.95d251bc.js";import{_ as me}from"./TitleNamu.06a76880.js";import{_ as Se}from"./InputOutlineValidate.vue.855e84db.js";import{u as ht,c as Ue,e as W,_ as Ae,F as Ie,g as vt}from"./index.esm.98f1c623.js";import{_ as Be}from"./InputOutlinePassword.vue.94ea0c94.js";import{t as Te}from"./tw-merge.d6bb7cf5.js";import{f as bt,u as Ve,g as yt}from"./ui.config.4c4a6835.js";import{u as $t}from"./uid.12f507af.js";import wt from"./Google.82a39b5b.js";import{_ as Ct}from"./ButtonOutline.vue.fd508921.js";import{_ as Pe}from"./Icon.79bf77af.js";import kt from"./CheckmarkRounded.f824ae88.js";import{_ as Mt}from"./Modal.vue.ca86af77.js";import Lt from"./Viber.536ff7e6.js";import St from"./Facebook.150b2730.js";import Ut from"./Instagram.40175561.js";const At={class:"h-[22px] w-[22px] text-black"},It={class:"text-[7px] font-medium text-black md:text-[10px]"},Bt=M({__name:"MobileMenuItem",props:{label:{}},setup(t){return(l,u)=>{const e=ie;return a(),v(e,{class:"flex flex-col items-center gap-[3px]"},{default:s(()=>[c("span",At,[F(l.$slots,"default")]),c("span",It,_(l.label),1)]),_:3})}}}),Tt=M({__name:"MobileProfile",props:{isOpen:{type:Boolean}},emits:["switchMenu"],setup(t,{emit:l}){const u=l,e=g=>{u("switchMenu",g)},r=oe(),i=q(()=>r.user);return(g,m)=>{const f=at,d=st;return a(),v(Qe,{name:"page"},{default:s(()=>{var h;return[be(c("div",{class:"fixed left-0 top-0 z-[10] flex h-full w-full flex-col justify-end bg-dark-transparent",onClick:m[1]||(m[1]=w=>e(!1))},[c("div",{class:C(("cn"in g?g.cn:n(H))("delay-300s relative translate-y-[100%]  rounded-t-[20px] bg-white p-[30px] duration-200 md:px-[40px]",{"translate-y-[0%]":g.isOpen})),onClick:m[0]||(m[0]=Ze(()=>{},["stop"]))},[n(i)?(a(),v(f,{key:0,name:(h=n(i))==null?void 0:h.name},null,8,["name"])):b("",!0),o(d,{class:"mt-[20px] md:mt-[26px]",onSwitchMenu:e})],2)],512),[[Xe,g.isOpen]])]}),_:1})}}});const Vt=z(Tt,[["__scopeId","data-v-fb0e7950"]]),Pt={class:"fixed bottom-0 left-0 flex h-mobile-menu w-full items-center justify-between rounded-t-[20px] bg-white px-[20px] lg:hidden"},Ot=M({__name:"MobileMenuBottom",emits:["openAuth","toggleCatalogModal"],setup(t,{emit:l}){const u=l,e=()=>{u("openAuth")},r=B(!1),i=f=>{r.value=f},g=()=>A()?(i(!0),!1):(A()||e(),!1),m=()=>{if(A())return re("/profile/favorites"),!1;e()};return(f,d)=>{const h=Je,w=Bt,j=we,S=nt,L=lt,I=Vt;return a(),y("div",Pt,[o(w,{to:"/",label:f.$t("home")},{default:s(()=>[o(h,{class:"!h-full !w-full"})]),_:1},8,["label"]),o(w,{label:f.$t("catalog"),onClick:d[0]||(d[0]=U=>f.$emit("toggleCatalogModal"))},{default:s(()=>[o(j,{class:"!h-full !w-full"})]),_:1},8,["label"]),o(w,{label:f.$t("favorites"),onClick:m},{default:s(()=>[o(S,{class:"!h-full !w-full"})]),_:1},8,["label"]),o(w,{label:f.$t("myAccount"),onClick:g},{default:s(()=>[o(L,{class:"!h-full !w-full"})]),_:1},8,["label"]),("isLoggedIn"in f?f.isLoggedIn:n(A))()?(a(),v(I,{key:0,isOpen:n(r),onSwitchMenu:i},null,8,["isOpen"])):b("",!0)])}}}),Oe=M({__name:"Logo",props:{styles:{}},setup(t){return(l,u)=>{const e=pe;return a(),v(e,{to:"/",class:C(("cn"in l?l.cn:n(H))("font-namu text-[20px] font-light leading-[24px] text-black 2xl:text-[27px] 2xl:leading-[32px] 4xl:text-[35px] 4xl:leading-[42px]",l.styles))},{default:s(()=>[x(_(l.$t("logo")),1)]),_:1},8,["class"])}}}),ge=M({__name:"ButtonTextUnderline",props:{styles:{}},setup(t){return(l,u)=>{const e=ne;return a(),v(e,{styles:("cn"in l?l.cn:n(H))("relative before:absolute before:bottom-[-3px] before:bg-black before:transition-all before:duration-100 before:h-[2px] before:ease-in md:hover:before:w-full before:left-2 before:w-0 before:content-['']",l.styles)},{default:s(()=>[F(l.$slots,"default")]),_:3},8,["styles"])}}}),jt=["src","alt"],qt={class:"flex flex-1 items-center gap-x-[10px] truncate"},zt=["src","alt"],Et={class:"catalog_text"},Rt=["src","alt"],Ht=["src","alt"],Nt=M({__name:"CatalogItem",props:{category:{},isSelectedCategory:{type:Boolean},viewport:{},variant:{}},emits:["showChildren","handleLinkClick"],setup(t,{emit:l}){const u=l;return(e,r)=>{const i=pe,g=ke;return a(),y(R,null,[!e.category.children.length&&e.viewport==="mobile"?(a(),v(i,{key:0,to:`/category/${e.category.id}`,class:C(["catalog_item",{"bg-[#1111111f]":e.isSelectedCategory}]),onClick:r[0]||(r[0]=m=>u("handleLinkClick",e.category))},{default:s(()=>[c("div",{class:C(("cn"in e?e.cn:n(H))("flex w-full items-center gap-x-[5px] truncate md:gap-x-[10px] lg:flex-col lg:gap-y-[10px]",{"lg:max-w-[80px]":e.variant==="image"}))},[e.variant==="image"&&e.category.image?(a(),y("img",{key:0,class:"h-[35px] w-[35px] rounded-full object-cover md:h-[45px] md:w-[45px] lg:h-[80px] lg:w-[80px]",src:e.category.image,alt:("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")},null,8,jt)):b("",!0),c("span",{class:C(("cn"in e?e.cn:n(H))("catalog_text",{"lg:text-center":e.variant==="image"}))},_(("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")),3)],2)]),_:1},8,["to","class"])):b("",!0),e.category.children.length&&e.viewport==="mobile"?(a(),y("button",{key:1,type:"button",class:C(["catalog_item",{"bg-[#1111111f]":e.isSelectedCategory}]),onClick:r[1]||(r[1]=m=>u("showChildren",e.category))},[c("div",qt,[e.variant==="logo"&&e.category.logo?(a(),y("img",{key:0,class:"h-[20px] w-[20px] object-cover",src:e.category.logo,alt:("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")},null,8,zt)):b("",!0),c("span",Et,_(("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")),1)]),o(g,{fontControlled:!1,class:"ml-2 h-full w-[10px] -rotate-90 text-transparent"})],2)):b("",!0),e.viewport!=="mobile"?(a(),v(i,{key:2,to:`/category/${e.category.id}`,class:C(["catalog_item",{"bg-[#1111111f]":e.isSelectedCategory}]),onClick:r[2]||(r[2]=m=>u("handleLinkClick",e.category))},{default:s(()=>{var m,f;return[c("div",{class:C(("cn"in e?e.cn:n(H))("flex items-center truncate",{"flex-1 gap-x-[10px] ":e.variant==="logo","w-full gap-x-[5px] md:gap-x-[10px] lg:max-w-[80px] lg:flex-col lg:gap-y-[10px]":e.variant==="image"}))},[e.variant==="image"&&e.category.image&&((m=e.category.image)==null?void 0:m.length)>0?(a(),y("img",{key:0,class:"h-[80px] w-[80px] rounded-full object-cover",src:e.category.image,alt:("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")},null,8,Rt)):b("",!0),e.variant==="logo"&&e.category.logo&&((f=e.category.logo)==null?void 0:f.length)>0?(a(),y("img",{key:1,class:"h-[20px] w-[20px] object-cover",src:e.category.logo,alt:("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")},null,8,Ht)):b("",!0),c("span",{class:C(("cn"in e?e.cn:n(H))("catalog_text",{"lg:text-center":e.variant==="image"}))},_(("useMultiLang"in e?e.useMultiLang:n(N))(e.category,"title")),3)],2),e.category.children.length?(a(),v(g,{key:0,fontControlled:!1,class:"ml-2 h-full w-[10px] -rotate-90 text-transparent"})):b("",!0)]}),_:1},8,["to","class"])):b("",!0)],64)}}});const Ft={key:0,class:"flex flex-col items-start"},Dt={class:"catalog_text"},Gt={key:1,class:"container grid grid-cols-[max-content_max-content_1fr] gap-4 2xl:gap-[30px]"},Wt={class:"categories_container max-w-[350px]"},Kt=["onMouseover"],Yt={key:0,class:"categories_container max-w-[350px]"},Jt=["onMouseover"],Zt={key:1,class:"categories_container flex flex-wrap content-start"},Xt=1,Qt=2,je=M({__name:"Catalog",props:{toggleCatalogModal:{type:Function},closeCatalog:{type:Function}},setup(t){const l=t,u=it(),e=B([]),r=B(0),i=B(null),{width:g}=ce(),{BREAKPOINTS_LG:m}=de(),f=Y("parentCategories"),{currentCategories:d,updateCurrentCategories:h}=Y("currentCategories"),{selectedParentCategory:w,updateParentCategory:j}=Y("selectedParentCategory"),{selectedChildCategory:S,updateChildCategory:L}=Y("selectedChildCategory"),I=k=>{e.value.push(k),i.value=k,h(k.children),r.value+=1},U=()=>{e.value.pop(),e.value.length>0?(h(e.value[e.value.length-1].children),i.value=e.value[e.value.length-1]):(h(f.value),i.value=null),r.value-=1},T=k=>{j(k),L(k.children[0])},D=k=>L(k),P=k=>{g.value<m&&l.toggleCatalogModal(),g.value>=m&&l.closeCatalog(),u.push(`/category/${k.id}`)};return(k,O)=>{const V=gt,le=pe,p=Nt;return n(g)<n(m)?(a(),y("div",Ft,[n(e).length>0?(a(),y("button",{key:0,class:"mb-[5px] flex items-center gap-x-[10px] text-[12px] leading-[15px] text-status_gray transition-colors duration-100 ease-linear hover:text-black md:text-[14px] md:leading-[17px]",onClick:U},[o(V,{fontControlled:!1,class:"h-full w-[10px] rotate-180 text-transparent"}),x(" Назад ")])):b("",!0),n(i)!==null?(a(),v(le,{key:1,to:`/category/${n(i).id}`,class:"catalog_item !w-fit underline underline-offset-1",onClick:O[0]||(O[0]=$=>P(n(i)))},{default:s(()=>[c("span",Dt," Все в "+_(("useMultiLang"in k?k.useMultiLang:n(N))(n(i),"title")),1)]),_:1},8,["to"])):b("",!0),(a(!0),y(R,null,ee(n(d),$=>(a(),v(p,{key:$.id,category:$,viewport:"mobile",variant:n(r)===Qt?"image":n(r)===Xt?"logo":null,onHandleLinkClick:P,onShowChildren:I},null,8,["category","variant"]))),128))])):(a(),y("div",Gt,[c("ul",Wt,[(a(!0),y(R,null,ee(n(f),$=>{var G;return a(),y("li",{key:$.id,onMouseover:X=>T($)},[o(p,{category:$,isSelectedCategory:((G=n(w))==null?void 0:G.id)===$.id,onHandleLinkClick:P},null,8,["category","isSelectedCategory"])],40,Kt)}),128))]),n(w)&&n(w).children&&n(w).children.length>0?(a(),y("ul",Yt,[(a(!0),y(R,null,ee(n(w).children,$=>{var G;return a(),y("li",{key:$.id,onMouseover:X=>D($)},[o(p,{category:$,isSelectedCategory:((G=n(S))==null?void 0:G.id)===$.id,selectedParentCategory:n(w),variant:"logo",onHandleLinkClick:P},null,8,["category","isSelectedCategory","selectedParentCategory"])],40,Jt)}),128))])):b("",!0),n(S)&&n(S).children&&n(S).children.length>0?(a(),y("ul",Zt,[(a(!0),y(R,null,ee(n(S).children,$=>(a(),y("li",{key:$.id,class:"h-fit"},[o(p,{category:$,variant:"image",onHandleLinkClick:P},null,8,["category"])]))),128))])):b("",!0)]))}}});const eo={},to={class:"flex items-center gap-[5px] md:gap-[7px] 4xl:gap-[10px]"};function oo(t,l){const u=ke,e=ne;return a(),v(e,null,{default:s(()=>[c("span",to,[F(t.$slots,"default"),o(u,{class:"h-1 w-2 text-transparent md:h-[5px] md:w-[10px] 4xl:h-[6px] 4xl:w-3",fontControlled:!1})])]),_:3})}const qe=z(eo,[["render",oo]]),no={class:"flex gap-[48px]"},lo={class:"mt-[30px] rounded-b-3xl bg-background-primary pb-[50px] shadow-xl 2xl:pb-[70px]"},ao=M({__name:"SubHeader",props:{isLogo:{type:Boolean},toggleCatalogModal:{type:Function}},setup(t){const{isCatalogHovered:l,updateIsCatalogHovered:u}=Y("isCatalogHovered"),{width:e}=ce(),{BREAKPOINTS_LG:r}=de(),i=()=>u(!0),g=()=>u(!1);return et(()=>window.addEventListener("scroll",g)),tt(()=>window.removeEventListener("scroll",g)),(m,f)=>{const d=je,h=ge,w=qe;return a(),y("div",no,[o(h,{styles:"md:hover:text-status_red md:hover:before:bg-status_red",onMouseover:i,onMouseleave:g},{default:s(()=>[x(_(m.$t("catalog"))+" ",1),n(e)>=n(r)&&n(l)?(a(),y("div",{key:0,class:C(("cn"in m?m.cn:n(H))("fixed inset-x-0 z-[200] text-black",{"top-[110px] 4xl:top-[145px]":m.isLogo,"top-[60px] 4xl:top-[80px]":!m.isLogo}))},[c("div",lo,[o(d,{toggleCatalogModal:m.toggleCatalogModal,closeCatalog:g},null,8,["toggleCatalogModal"])])],2)):b("",!0)]),_:1}),o(w,null,{default:s(()=>[x(_(m.$t("forUaExporters")),1)]),_:1}),o(w,null,{default:s(()=>[x(_(m.$t("forIntlImporters")),1)]),_:1})])}}}),ze=M({__name:"LangSwitcher",props:{isMobile:{type:Boolean}},setup(t){const{locale:l}=ue(),u=["ua","en"],e=q(()=>u.filter(r=>r!==l.value));return(r,i)=>{const g=ft,m=xt;return a(),v(m,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=f=>ye(l)?l.value=f:null),options:n(e),uiMenu:{background:r.isMobile?"bg-white dark:bg-white left-[-5px]":"bg-transparent dark:bg-transparent",ring:"ring-0",shadow:"shadow-transparent",padding:r.isMobile?"p-[5px]":"p-0",option:{base:"uppercase cursor-pointer font-medium text-[12px] leading-[15px] md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6",padding:"p-0",active:"bg-transparent dark:bg-transparent text-black",inactive:"text-status_gray"}},class:"w-fit"},{default:s(({open:f})=>[o(g,{label:n(l),open:f},null,8,["label","open"])]),_:1},8,["modelValue","options","uiMenu"])}}}),so={class:"my-[25px] flex flex-col gap-[15px]"},io=M({__name:"BurgerMenu",props:{isActive:{type:Boolean}},emits:["switchAuth"],setup(t,{emit:l}){const u=l,e=(r,i)=>{u("switchAuth",r,i)};return(r,i)=>{const g=Oe,m=ze,f=qe,d=Z,h=ge;return a(),y("div",{class:C(("cn"in r?r.cn:n(H))("fixed inset-x-0 -top-burger-menu-sm z-40 h-fit rounded-b-[10px] bg-white px-5 py-[25px] text-black transition-all delay-0 duration-[250ms] ease-linear md:-top-burger-menu-md md:px-10 md:py-[30px] xl:hidden",{"top-0 md:top-0":r.isActive}))},[o(g),c("ul",so,[c("li",null,[o(m,{isMobile:""})]),c("li",null,[o(f,null,{default:s(()=>[x(_(r.$t("forUaExporters")),1)]),_:1})]),c("li",null,[o(f,null,{default:s(()=>[x(_(r.$t("forIntlImporters")),1)]),_:1})])]),("isLoggedIn"in r?r.isLoggedIn:n(A))()?b("",!0):(a(),v(d,{key:0,styles:"mx-auto block mb-[15px]",onClick:i[0]||(i[0]=w=>e(!0,"login"))},{default:s(()=>[x(_(r.$t("login")),1)]),_:1})),("isLoggedIn"in r?r.isLoggedIn:n(A))()?b("",!0):(a(),v(h,{key:1,styles:"mx-auto",onClick:i[1]||(i[1]=w=>e(!0,"register"))},{default:s(()=>[x(_(r.$t("signup")),1)]),_:1})),("isLoggedIn"in r?r.isLoggedIn:n(A))()?(a(),v(d,{key:2,styles:"mx-auto block w-fit mb-[15px]",to:"/profile"},{default:s(()=>[x(_(r.$t("profile.profile")),1)]),_:1})):b("",!0)],2)}}}),ve=Ce(J.ui.strategy,J.ui.checkbox,bt),ro=M({inheritAttrs:!1,props:{id:{type:String,default:()=>$t()},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>ve.default.color,validator(t){return J.ui.colors.includes(t)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(t,{emit:l}){const{ui:u,attrs:e}=Ve("checkbox",ae(t,"ui"),ve,ae(t,"class")),{emitFormChange:r,color:i,name:g,inputId:m}=ht(t),f=q({get(){return t.modelValue},set(w){l("update:modelValue",w)}}),d=w=>{l("change",w),r()},h=q(()=>Te(te(u.value.base,u.value.rounded,u.value.background,u.value.border,u.value.ring.replaceAll("{color}",i.value),u.value.color.replaceAll("{color}",i.value)),t.inputClass));return{ui:u,attrs:e,toggle:f,inputId:m,name:g,inputClass:h,onChange:d}}}),uo={class:"flex items-center h-5"},po=["id","name","required","value","disabled","checked","indeterminate"],co={key:0,class:"ms-3 text-sm"},mo=["for"];function go(t,l,u,e,r,i){return a(),y("div",{class:C(t.ui.wrapper)},[c("div",uo,[be(c("input",se({id:t.inputId,"onUpdate:modelValue":l[0]||(l[0]=g=>t.toggle=g),name:t.name,required:t.required,value:t.value,disabled:t.disabled,checked:t.checked,indeterminate:t.indeterminate,type:"checkbox",class:["form-checkbox",t.inputClass]},t.attrs,{onChange:l[1]||(l[1]=(...g)=>t.onChange&&t.onChange(...g))}),null,16,po),[[ot,t.toggle]])]),t.label||t.$slots.label?(a(),y("div",co,[c("label",{for:t.inputId,class:C(t.ui.label)},[F(t.$slots,"label",{},()=>[x(_(t.label),1)]),t.required?(a(),y("span",{key:0,class:C(t.ui.required)},"*",2)):b("",!0)],10,mo),t.help?(a(),y("p",{key:0,class:C(t.ui.help)},_(t.help),3)):b("",!0)])):b("",!0)],2)}const _o=z(ro,[["render",go]]),Ee=M({__name:"Checkbox",props:{ui:{}},setup(t){return(l,u)=>{const e=_o;return a(),v(e,{ui:{border:"border-black",color:"!text-black",background:"bg-transparent",...l.ui},class:"text-black"},null,8,["ui"])}}}),fo={};function xo(t,l){const u=wt,e=Ct;return a(),v(e,{type:"button",class:"fill_revert_layer mt-[10px] md:mt-[14px] 4xl:mt-[15px]",to:("useUrl"in t?t.useUrl:n(rt))()+"/auth/google"},{default:s(()=>[o(u),c("span",null,[F(t.$slots,"default")])]),_:3},8,["to"])}const Re=z(fo,[["render",xo]]),ho=Ue().shape({email:W().required("validation_inputs.required"),password:W().required("password_required").trim().min(6,"password_length_min").max(22,"password_length_max")}),vo={class:"flex flex-col"},bo={class:"flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]"},yo={class:"mt-[14px] flex items-center justify-between md:mt-[20px]"},$o={class:"mt-[15px] flex items-center justify-center gap-[5px] text-[7px] font-medium md:mt-[22px] md:text-[10px] xl:mt-[20px] xl:text-[14px]"},wo=M({__name:"Login",emits:["switchTypeAuth","switchModal"],setup(t,{emit:l}){const u=oe(),{t:e}=ue(),r=l,i=B(""),g=d=>{r("switchTypeAuth",d)},m=$e({email:"",password:""}),f=async()=>{const d=await u.login(m);console.log(d),d||(i.value=e("validation_inputs.try_again"))};return(d,h)=>{const w=me,j=Se,S=Ae,L=Be,I=Ee,U=ne,T=Me,D=Z,P=Re,k=Ie;return a(),y(R,null,[o(w,{class:"mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"},{default:s(()=>[x(_(d.$t("authorization")),1)]),_:1}),o(k,{"validation-schema":"validationLogin"in d?d.validationLogin:n(ho),action:"#",onSubmit:f},{default:s(()=>[c("div",vo,[c("div",bo,[o(S,{label:`${d.$t("email")}:`,type:"text",class:"!text-status_gray"},{default:s(()=>[o(j,{modelValue:n(m).email,"onUpdate:modelValue":h[0]||(h[0]=O=>n(m).email=O),name:"email",tabindex:"1"},null,8,["modelValue"])]),_:1},8,["label"]),o(S,{for:"",label:`${d.$t("password")}:`,class:"!text-status_gray"},{default:s(()=>[o(L,{modelValue:n(m).password,"onUpdate:modelValue":h[1]||(h[1]=O=>n(m).password=O),showPasswordError:!0,tabindex:"2",name:"password"},null,8,["modelValue"])]),_:1},8,["label"])]),c("div",yo,[o(S,{label:d.$t("rememberMe"),class:"!flex-row-reverse items-center justify-end"},{default:s(()=>[o(I,{tabindex:"3"})]),_:1},8,["label"]),o(U,{class:"!text-[7px] text-status_gray md:!text-[10px] xl:!text-[14px]",tabindex:"4"},{default:s(()=>[x(_(d.$t("forgotPassword")),1)]),_:1})]),o(T,{class:"mt-[20px]"},{default:s(()=>[x(_(n(i)),1)]),_:1}),o(D,{type:"submit",class:"mt-[20px] md:mt-[25px] xl:mt-[30px]",tabindex:"5"},{default:s(()=>[x(_(d.$t("login")),1)]),_:1}),o(P,{type:"button",tabindex:"6"},{default:s(()=>[x(_(d.$t("logInWithGoogle")),1)]),_:1}),c("div",$o,[c("span",null,_(d.$t("notRegistered")),1),o(U,{class:"gap-[5px] !text-[7px] font-semibold md:!text-[10px] xl:!text-[14px]",tabindex:"7",onClick:h[2]||(h[2]=O=>g("register"))},{default:s(()=>[x(_(d.$t("signup")),1)]),_:1})])])]),_:1},8,["validation-schema"])],64)}}}),Co=Ce(J.ui.strategy,J.ui.divider,yt),ko=M({components:{UIcon:Pe,UAvatar:Le},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:"solid",validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(t){const{ui:l,attrs:u}=Ve("divider",ae(t,"ui"),Co),e=q(()=>t.orientation==="horizontal"),r=q(()=>Te(te(l.value.wrapper.base,e.value?l.value.wrapper.horizontal:l.value.wrapper.vertical),t.class)),i=q(()=>te(l.value.container.base,e.value?l.value.container.horizontal:l.value.container.vertical)),g=q(()=>{const m={solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}[t.type];return te(l.value.border.base,e.value?l.value.border.horizontal:l.value.border.vertical,e.value?l.value.border.size.horizontal:l.value.border.size.vertical,m)});return{ui:l,attrs:u,wrapperClass:r,containerClass:i,borderClass:g}}});function Mo(t,l,u,e,r,i){const g=Pe,m=Le;return a(),y("div",se({class:t.wrapperClass},t.attrs),[c("div",{class:C(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(a(),y(R,{key:0},[c("div",{class:C(t.containerClass)},[F(t.$slots,"default",{},()=>[t.label?(a(),y("span",{key:0,class:C(t.ui.label)},_(t.label),3)):t.icon?(a(),v(g,{key:1,name:t.icon,class:C(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(a(),v(m,se({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):b("",!0)])],2),c("div",{class:C(t.borderClass)},null,2)],64)):b("",!0)],16)}const Lo=z(ko,[["render",Mo]]),So=M({__name:"UiDivider",props:{label:{},ui:{}},setup(t){return(l,u)=>{const e=Lo;return a(),v(e,{ui:{...l.ui,label:"text-black text-[7px] 4xl:text-[14px] md:text-[10px]",border:{base:"border-black"}},label:l.label},null,8,["ui","label"])}}}),Uo=Ue().shape({name:W().required("validation_inputs.required"),email:W().required("validation_inputs.required"),password:W().required("password_required").trim().min(6,"password_length_min").max(22,"password_length_max"),c_password:W().oneOf([vt("password")],"password_match").required("password_confirmation")}),Ao={class:"flex flex-col"},Io={class:"flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]"},Bo={class:"mt-[14px] flex items-center justify-between md:mt-[20px]"},To={class:"mt-[15px] flex items-center justify-center gap-[5px] text-[7px] font-medium md:mt-[22px] md:text-[10px] xl:mt-[20px] xl:text-[14px]"},Vo=M({__name:"Register",emits:["switchTypeAuth"],setup(t,{emit:l}){const{t:u}=ue(),e=oe(),r=l,i=$e({name:"",email:"",password:"",c_password:""}),g=B(""),m=d=>{r("switchTypeAuth",d)},f=()=>{e.register(i).then(d=>{d.data.value.status===2?m("successRegister"):g.value=u("validation_inputs.try_again")})};return(d,h)=>{const w=me,j=Re,S=So,L=Se,I=Ae,U=Be,T=Ee,D=Me,P=Z,k=ne,O=Ie;return a(),y(R,null,[o(w,{class:"mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"},{default:s(()=>[x(_(d.$t("registration")),1)]),_:1}),o(j,{type:"button"},{default:s(()=>[x(_(d.$t("logInWithGoogle")),1)]),_:1}),o(S,{label:"або",class:"my-[10px] w-[100px] self-center md:my-[17px] md:w-[139px] xl:my-[15px] xl:w-[181px]"}),o(O,{action:"#","validation-schema":"validationRegister"in d?d.validationRegister:n(Uo),onSubmit:f},{default:s(()=>[c("div",Ao,[c("div",Io,[o(I,{label:`${d.$t("name")}:`,type:"text",class:"!text-status_gray"},{default:s(()=>[o(L,{modelValue:n(i).name,"onUpdate:modelValue":h[0]||(h[0]=V=>n(i).name=V),name:"name",tabindex:"1",required:""},null,8,["modelValue"])]),_:1},8,["label"]),o(I,{label:`${d.$t("email")}:`,type:"email",class:"!text-status_gray"},{default:s(()=>[o(L,{modelValue:n(i).email,"onUpdate:modelValue":h[1]||(h[1]=V=>n(i).email=V),name:"email",tabindex:"2",required:""},null,8,["modelValue"])]),_:1},8,["label"]),o(I,{for:"",label:`${d.$t("password")}:`,class:"!text-status_gray"},{default:s(()=>[o(U,{modelValue:n(i).password,"onUpdate:modelValue":h[2]||(h[2]=V=>n(i).password=V),showPasswordError:!0,name:"password",tabindex:"3",required:""},null,8,["modelValue"])]),_:1},8,["label"]),o(I,{for:"",label:`${d.$t("repeatPassword")}:`,class:"!text-status_gray"},{default:s(()=>[o(U,{modelValue:n(i).c_password,"onUpdate:modelValue":h[3]||(h[3]=V=>n(i).c_password=V),showPasswordError:!0,name:"c_password",tabindex:"4",required:""},null,8,["modelValue"])]),_:1},8,["label"])]),c("div",Bo,[o(I,{label:d.$t("consentStatement"),class:"!flex-row-reverse items-center justify-end whitespace-normal"},{default:s(()=>[o(T,{required:"",tabindex:"5"})]),_:1},8,["label"])]),n(g)?(a(),v(D,{key:0,class:"mt-[7px] xl:mt-[10px]"},{default:s(()=>[x(_(n(g)),1)]),_:1})):b("",!0),o(P,{type:"submit",class:"mt-[20px] md:mt-[25px] xl:mt-[30px]",tabindex:"6"},{default:s(()=>[x(_(d.$t("signup")),1)]),_:1}),c("div",To,[c("span",null,_(d.$t("alreadyRegistered")),1),o(k,{type:"button",class:"gap-[5px] !text-[7px] font-semibold md:!text-[10px] xl:!text-[14px]",tabindex:"7",onClick:h[4]||(h[4]=V=>m("login"))},{default:s(()=>[x(_(d.$t("login")),1)]),_:1})])])]),_:1},8,["validation-schema"])],64)}}}),Po={class:"flex flex-col items-center"},Oo={class:"flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-[#C5ECAD] md:h-[80px] md:w-[80px] xl:h-[100px] xl:w-[100px]"},jo=M({__name:"SuccessRegister",emits:["switchModal"],setup(t,{emit:l}){const u=l,e=()=>{re("/"),u("switchModal",!1)};return(r,i)=>{const g=kt,m=me,f=Z;return a(),y("div",Po,[c("div",Oo,[o(g,{class:"!h-auto !w-[50%] text-transparent"})]),o(m,{class:"mt-[10px] text-center text-[23px] md:mb-[22px] md:mt-[15px] md:text-[35px] xl:mb-[25px] xl:mt-[18px] xl:text-[50px]"},{default:s(()=>[x(_(r.$t("success_register_message")),1)]),_:1}),o(f,{class:"mt-[40px] md:mt-[55px] xl:mt-[70px]",onClick:e},{default:s(()=>[x(_(r.$t("to_main_page")),1)]),_:1})])}}}),qo={class:"flex flex-col"},zo=M({__name:"Base",props:{type:{}},emits:["switchTypeAuth","switchModal"],setup(t,{emit:l}){const u=l,e=i=>{u("switchTypeAuth",i)},r=i=>{u("switchModal",i)};return(i,g)=>{const m=wo,f=Vo,d=jo,h=Mt;return a(),v(h,{ui:{width:"max-w-[490px] 2xl:max-w-[622px]",container:"items-center"}},{default:s(()=>[c("div",qo,[i.type==="login"?(a(),v(m,{key:0,onSwitchTypeAuth:e,onSwitchModal:r})):b("",!0),i.type==="register"?(a(),v(f,{key:1,onSwitchTypeAuth:e})):b("",!0),i.type==="successRegister"?(a(),v(d,{key:2,onSwitchModal:r})):b("",!0)])]),_:1})}}}),Eo={class:"sticky inset-x-0 top-0 z-[100] bg-background-primary"},Ro={class:"container mx-auto py-[25px] md:px-10 md:py-[30px] 4xl:py-10"},Ho={class:"flex justify-between lg:hidden"},No={key:1,class:"flex items-center gap-5"},Fo={class:"relative z-50 flex items-center gap-5"},Do={class:"hidden items-center justify-between lg:flex"},Go={class:"flex items-center gap-[15px] 4xl:gap-10"},Wo={class:"flex items-center gap-[15px] 4xl:gap-[30px]"},Xn=M({__name:"Header",props:{isLogo:{type:Boolean}},setup(t){const l=oe(),{width:u}=ce(),{BREAKPOINTS_LG:e}=de(),r=B(!1),i=B(!1),g=B(!1),m=B([]),f=B([]),d=B(null),h=B(null),w=q(()=>l.typeAuth),j=p=>l.switchTypeAuth(p),S=p=>l.switchAuthModal(p),L=(p,$)=>{S(p),j($)},I=p=>r.value=p,U=q(()=>m.value.filter(p=>p.parent_category===0));he(i,p=>{p===!1&&(f.value=U.value)}),he(g,p=>{p===!1&&(f.value=U.value,[d.value]=U.value,[h.value]=d.value.children)});const T=()=>i.value=!i.value,D=p=>f.value=p,P=p=>d.value=p,k=p=>h.value=p,O=p=>g.value=p,V=async()=>{try{const p=await ut(`${pt()}/catalog`,"$aDoZaetsmu");m.value=p.data.value,f.value=U.value,u.value>=e&&([d.value]=U.value,[h.value]=d.value.children)}catch(p){console.error(p)}},le=()=>{if(A())return re("/profile/favorites"),!1;L(!0,"login")};return V(),K("parentCategories",U),K("currentCategories",{currentCategories:f,updateCurrentCategories:D}),K("selectedParentCategory",{selectedParentCategory:d,updateParentCategory:P}),K("selectedChildCategory",{selectedChildCategory:h,updateChildCategory:k}),K("isCatalogHovered",{isCatalogHovered:g,updateIsCatalogHovered:O}),(p,$)=>{const G=Ot,X=Oe,Q=Z,_e=ge,fe=we,He=dt,xe=ao,Ne=_t,Fe=ie,De=ze,Ge=io,We=zo,Ke=je,Ye=mt;return a(),y(R,null,[c("header",Eo,[o(G,{onOpenAuth:$[0]||($[0]=E=>L(!0,"login")),onToggleCatalogModal:T}),c("div",Ro,[c("div",Ho,[p.isLogo?(a(),v(X,{key:0,to:"/"})):(a(),y("div",No,[("isLoggedIn"in p?p.isLoggedIn:n(A))()?b("",!0):(a(),v(Q,{key:0,onClick:$[1]||($[1]=E=>L(!0,"login"))},{default:s(()=>[x(_(p.$t("login")),1)]),_:1})),("isLoggedIn"in p?p.isLoggedIn:n(A))()?b("",!0):(a(),v(_e,{key:1,onClick:$[2]||($[2]=E=>L(!0,"register"))},{default:s(()=>[x(_(p.$t("signup")),1)]),_:1})),("isLoggedIn"in p?p.isLoggedIn:n(A))()?(a(),v(Q,{key:2,to:"/profile"},{default:s(()=>[x(_(p.$t("profile.profile")),1)]),_:1})):b("",!0)])),c("div",Fo,[p.isLogo?(a(),v(fe,{key:0,class:"h-[18px] w-[18px] text-black md:h-[23px] md:w-[23px] 4xl:h-[28px] 4xl:w-[28px]",fontControlled:!1})):b("",!0),o(He,{isActive:n(r),onClick:$[3]||($[3]=E=>I(!n(r)))},null,8,["isActive"])])]),c("div",Do,[c("div",Go,[p.isLogo?(a(),v(X,{key:0,to:"/"})):b("",!0),p.isLogo?b("",!0):(a(),v(xe,{key:1,isLogo:p.isLogo,toggleCatalogModal:T,onToggleModal:T},null,8,["isLogo"]))]),c("div",Wo,[p.isLogo?(a(),v(fe,{key:0,class:"h-5 w-[22px] text-black 4xl:h-[28px] 4xl:w-[30px]",fontControlled:!1})):b("",!0),o(Fe,{onClick:le},{default:s(()=>[o(Ne,{class:"h-5 w-[22px] text-black 4xl:h-[28px] 4xl:w-[30px]",fontControlled:!1})]),_:1}),o(De),("isLoggedIn"in p?p.isLoggedIn:n(A))()?b("",!0):(a(),v(_e,{key:1,onClick:$[4]||($[4]=E=>L(!0,"register"))},{default:s(()=>[x(_(p.$t("signup")),1)]),_:1})),("isLoggedIn"in p?p.isLoggedIn:n(A))()?b("",!0):(a(),v(Q,{key:2,onClick:$[5]||($[5]=E=>L(!0,"login"))},{default:s(()=>[x(_(p.$t("login")),1)]),_:1})),("isLoggedIn"in p?p.isLoggedIn:n(A))()?(a(),v(Q,{key:3,to:"/profile"},{default:s(()=>[x(_(p.$t("profile.profile")),1)]),_:1})):b("",!0)])]),o(Ge,{isActive:n(r),onSwitchAuth:L},null,8,["isActive"])]),o(We,{modelValue:n(l).isAuthModal,"onUpdate:modelValue":$[6]||($[6]=E=>n(l).isAuthModal=E),type:n(w),onSwitchTypeAuth:j,onSwitchModal:S},null,8,["modelValue","type"])]),p.isLogo?(a(),v(xe,{key:0,isLogo:p.isLogo,toggleCatalogModal:T,class:"container mb-[40px] hidden lg:flex"},null,8,["isLogo"])):b("",!0),n(u)<n(e)?(a(),v(Ye,{key:1,modelValue:n(i),"onUpdate:modelValue":$[7]||($[7]=E=>ye(i)?i.value=E:null),label:p.$t("catalog"),onToggleModal:T},{default:s(()=>[o(Ke,{toggleCatalogModal:T})]),_:1},8,["modelValue","label"])):b("",!0)],64)}}}),Ko={},Yo={class:"flex-1"};function Jo(t,l){const u=ct;return a(),y("div",Yo,[o(u)])}const Qn=z(Ko,[["render",Jo]]),Zo={},Xo={class:"text-[16px] text-white"};function Qo(t,l){return a(),y("p",Xo,[F(t.$slots,"default")])}const en=z(Zo,[["render",Qo]]),tn={},on={class:"my-[15px] h-px border-0 bg-[#414141]"};function nn(t,l){return a(),y("hr",on)}const ln=z(tn,[["render",nn]]),an={},sn={class:"bg-black pb-padding-b-footer-xs pt-[30px] lg:pb-[100px] lg:pt-[70px]"},rn={class:"container justify-between lg:flex"},un={class:"grid grid-cols-1 justify-between gap-[15px] md:grid-cols-3 lg:w-full lg:max-w-[80%] xl:gap-y-[30px]"},pn={class:"mt-[35px] flex flex-col items-center md:mt-[45px] lg:mt-0"},cn={class:"mt-[5px] flex max-w-[120px] justify-between gap-[25px] md:mt-[10px] lg:max-w-none 3xl:mt-[20px]"};function dn(t,l){const u=en,e=ie,r=ln,i=Lt,g=St,m=Ut;return a(),y("footer",sn,[c("div",rn,[c("ul",un,[c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("whatIsUkrainemart")),1)]),_:1})]),_:1})]),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("personalAccount")),1)]),_:1})]),_:1})]),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("signup")),1)]),_:1})]),_:1})]),o(r,{class:"md:hidden"}),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("catalog")),1)]),_:1})]),_:1})]),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("toUaExporters")),1)]),_:1})]),_:1})]),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("toIntlImporters")),1)]),_:1})]),_:1})]),o(r,{class:"md:hidden"}),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("faq")),1)]),_:1})]),_:1})]),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("contractSupport")),1)]),_:1})]),_:1})]),c("li",null,[o(e,null,{default:s(()=>[o(u,null,{default:s(()=>[x(_(t.$t("technicalSupport")),1)]),_:1})]),_:1})])]),c("div",pn,[c("h5",null,[o(u,null,{default:s(()=>[x(_(`${t.$t("ourSocialNetworks")}:`),1)]),_:1})]),c("div",cn,[o(e,{to:"/"},{default:s(()=>[o(i,{class:"!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px]"})]),_:1}),o(e,{to:"/"},{default:s(()=>[o(g,{class:"!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px]"})]),_:1}),o(e,{to:"/"},{default:s(()=>[o(m,{class:"!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px]"})]),_:1})])])])])}const el=z(an,[["render",dn]]),mn={},gn={class:"flex min-h-[100vh] flex-col"};function _n(t,l){return a(),y("div",gn,[F(t.$slots,"default")])}const tl=z(mn,[["render",_n]]);export{tl as _,Xn as a,Qn as b,el as c};
