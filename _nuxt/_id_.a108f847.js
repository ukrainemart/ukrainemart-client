import{a as H,_ as R}from"./ProductTitle.vue.1c3eb3e5.js";import{x as h,M as s,N as i,O as p,X as m,H as v,a2 as k,Y as t,a9 as M,aa as q,u as a,ab as Y,ac as Z,I as o,a1 as E,_ as r,Z as w,a3 as y,a as S,ad as G}from"./swiper-vue.01371f92.js";import{a as J,d as K,e as Q,_ as W}from"./Tabs.vue.0622cadc.js";import N from"./Envelop.1748c814.js";import{_ as tt}from"./ButtonPrimary.vue.274fa7f5.js";import{_ as V,b as et,e as ot,c as I}from"./entry.e0c7b772.js";import{u as st}from"./useMultiLang.ea36a99c.js";import{_ as A}from"./TextPortalPrimary.9f42d605.js";import pt from"./MapMarker.2eb14c55.js";import nt from"./Checkmark.b81f30dd.js";import{_ as lt}from"./ButtonOutline.vue.fbcb7d34.js";import{_ as at}from"./nuxt-link.f99c15df.js";import{u as ct}from"./useApi.14439c2e.js";import"./BreadcrumbArrow.09e7b969.js";import"./nuxt-icon.cd460385.js";import"./cn.a642df04.js";import"./Agriculture.e6c82182.js";import"./ButtonOpacity.0b1ac2e4.js";import"./Electronics.cd9db407.js";import"./Medicine.a3144fde.js";import"./Fertilizers.5ad663c8.js";import"./AutoPart.999ea542.js";import"./Building.0c9eac30.js";import"./ArrowRightSecond.df164071.js";import"./CardProduct.vue.e97050fa.js";import"./ArrowNext.36db389f.js";import"./TitleNamu.7c22992e.js";import"./index.41f836bf.js";import"./index.44e48c92.js";import"./ui.config.065aa9c3.js";import"./micro-task.1b13e225.js";import"./use-resolve-button-type.49b213cd.js";const rt={class:"h-full"},_t=["src"],dt=h({__name:"ProductSideSlider",props:{slides:{},breakpoints:{},showAll:{type:Boolean},type:{},centeredSlides:{type:Boolean}},setup(_){return(e,c)=>{const n=M,l=q;return s(),i(l,{direction:"vertical",breakpoints:{834:{slidesPerView:6},1400:{slidesPerView:4}},class:"product_side_swiper",centeredSlidesBounds:"",pagination:{clickable:!0}},{default:p(()=>[(s(!0),m(v,null,k(e.slides,d=>(s(),i(n,{key:d,class:""},{default:p(()=>[t("div",rt,[t("img",{src:d.path,alt:"",class:"h-full w-full cursor-pointer object-cover"},null,8,_t)])]),_:2},1024))),128))]),_:1})}}});const it={class:"w-full"},xt=["src"],mt=h({__name:"ProductSlider",props:{slides:{}},setup(_){return(e,c)=>{const n=M,l=q;return s(),i(l,{modules:["SwiperScrollbar"in e?e.SwiperScrollbar:a(Y),"SwiperThumbs"in e?e.SwiperThumbs:a(Z)],scrollbar:{enabled:!0,draggable:!0,dragSize:36},class:"products_swiper product_swiper"},{default:p(()=>[(s(!0),m(v,null,k(e.slides,d=>(s(),i(n,{key:d,class:"!flex"},{default:p(()=>[t("div",it,[t("img",{src:d.path,alt:"",class:"h-[440px] w-full object-cover md:h-[435px] 2xl:h-[584px]"},null,8,xt)])]),_:2},1024))),128))]),_:1},8,["modules"])}}});const ut={},ft={class:"flex items-center gap-[7px] leading-[inherit] md:gap-[10px]"};function ht(_,e){const c=N,n=tt;return s(),i(n,{styles:"px-[28px] py-[10px] md:px-[38px] md:py-[12px] 2xl:px-[54px] 2xl:py-[17px]"},{default:p(()=>[t("span",ft,[o(c,{class:"h-[10px] w-[13px] text-white transition-colors duration-100 ease-in group-hover:text-black md:h-[13px] md:w-[17px] 2xl:h-[15px] 2xl:w-[19px]",fontControlled:!1}),E(_.$slots,"default")])]),_:3})}const gt=V(ut,[["render",ht]]),bt={class:"mb-[70px] md:mb-0"},wt={class:"mb-5"},yt={key:0},$t={key:1,class:"flex gap-x-[20px] md:gap-x-[30px] xl:gap-x-[40px]"},St={class:"text-[9px] font-medium text-status_gray md:text-[13px] xl:text-[18px]"},vt={class:"text-[18px] font-semibold md:text-[24px] xl:text-[30px]"},kt={class:"mb-[15px] flex flex-col gap-2.5 md:mb-[28px] md:gap-[12px] 2xl:gap-5"},Pt={class:"flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]"},Ct=t("span",{class:"text-status_gray"},"10 кг",-1),Bt={class:"flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]"},Tt=t("span",{class:"text-status_gray"},"Мішок",-1),Ut={class:"flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]"},It=t("span",{class:"text-status_gray"},"200 кг",-1),Mt={class:"flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]"},qt=t("span",{class:"text-status_gray"},"24 місяці",-1),Et={class:"flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]"},Nt=t("span",{class:"text-status_gray"},w(""),-1),Vt=h({__name:"ProductInfo",props:{product:{}},setup(_){return(e,c)=>{var g,b;const n=H,l=J,d=gt;return s(),m("div",bt,[o(n,{styles:"mb-[15px] md:mb-[17px] 2xl:mb-5 text-[17px] md:text-[24px] 2xl:text-[30px]"},{default:p(()=>[r(w(("useMultiLang"in e?e.useMultiLang:a(st))(e.product,"title")),1)]),_:1}),t("div",wt,[((g=e.product)==null?void 0:g.price_type)==="fixed"?(s(),m("div",yt,w(e.product.prices[0].price)+"$",1)):y("",!0),((b=e.product)==null?void 0:b.price_type)==="variated"?(s(),m("ul",$t,[(s(!0),m(v,null,k(e.product.prices,(u,$)=>(s(),m("li",{key:$,class:"flex flex-col gap-y-[3px] md:gap-y-[4px] xl:gap-y-[5px]"},[t("span",St,w(`${u.min_amount}-${u.max_amount} kg`),1),t("span",vt,w(u.price)+"$ ",1)]))),128))])):y("",!0)]),t("ul",kt,[t("li",Pt,[o(l,null,{default:p(()=>[r(" Мінімальне замовлення: "),Ct]),_:1})]),t("li",Bt,[o(l,null,{default:p(()=>[r(" Тип пакування: "),Tt]),_:1})]),t("li",Ut,[o(l,null,{default:p(()=>[r(" Доступно: "),It]),_:1})]),t("li",Mt,[o(l,null,{default:p(()=>[r(" Термін придатності: "),qt]),_:1})]),t("li",Et,[o(l,null,{default:p(()=>[r(" Формат доставки: "),Nt]),_:1})])]),o(d,null,{default:p(()=>[r("Зв’язатися")]),_:1})])}}}),At=h({__name:"TabExporter",props:{content:{}},setup(_){return(e,c)=>{const n=A;return s(),i(n,{class:"leading-[15px] md:leading-[20px] 2xl:leading-[24px]"},{default:p(()=>[r(w(e.content)+" Завдячуючи цьому, таке борошно містить ту ж кількість вітамінів, мінеральних і поживних речовин та клітковини, як і цільні органічні зерна жита. Довгий час житнє борошно використовувалось тільки для промислового випікання чорного хліба. Однак, сьогодні воно все частіше з'являється на домашній кухні – з нього можна зробити печиво, млинці, оладки, пироги, перепічку та інші смаколики. Зазвичай до житнього борошна додають високосортне пшеничне борошно, так як житнє борошно містить менше клітковини, що позначається на пекарських якостях. При замовленні від 500 кг, ціни обговорюються окремо. ",1)]),_:1})}}}),Lt=h({__name:"TabProduct",props:{product:{}},setup(_){return(e,c)=>{const n=A;return s(),i(n,{class:"leading-[15px] md:leading-[20px] 2xl:leading-[24px]"},{default:p(()=>[r(" description ")]),_:1})}}}),Dt=h({__name:"ProductDetails",setup(_){const e=[{label:"Про товар",content:Lt,data:"qwdqdqd"},{label:"Про експортера",content:At,data:"qwdqdqd"}];return(c,n)=>{const l=K;return s(),i(l,{items:e,ui:{wrapper:"overflow-hidden mb-[25px] text-[12px] md:mb-[100px] md:text-[16px]"}})}}}),Ot={},jt={class:"flex items-center gap-[7px] leading-[inherit] md:gap-[10px]"};function Ft(_,e){const c=N,n=lt;return s(),i(n,{styles:"px-[28px] py-[10px] md:px-[38px] md:py-[12px] 2xl:px-[54px] 2xl:py-[17px]"},{default:p(()=>[t("span",jt,[o(c,{class:"h-[10px] w-[13px] text-black transition-colors duration-100 ease-in group-hover:text-white md:h-[13px] md:w-[17px] 2xl:h-[15px] 2xl:w-[19px]",fontControlled:!1}),E(_.$slots,"default")])]),_:3})}const Xt=V(Ot,[["render",Ft]]),zt={class:"mb-[70px] flex h-fit w-full flex-col rounded-[5px] bg-white px-[15px] py-5 md:mb-[50px] md:flex-row md:rounded-[7px] md:px-[30px] 2xl:mb-0 2xl:w-auto 2xl:flex-col 2xl:rounded-[10px] 2xl:pb-[15px] 2xl:pt-[30px]"},Ht={class:"mb-[13px] md:mb-0 md:mr-[50px] 2xl:mb-[30px] 2xl:mr-0"},Rt={class:"mb-[5px] text-[12px] font-medium md:mb-[7px] md:text-[16px] 2xl:mb-[12px] 2xl:text-[20px]"},Yt={class:"mb-5 md:mb-0 md:grow 2xl:mb-[30px]"},Zt={class:"mb-[7px] flex items-center gap-[5px] md:mb-[10px] md:gap-[7px] 2xl:mb-[16px] 2xl:gap-[10px]"},Gt=t("p",{class:"text-[8px] font-medium md:text-[10px] 2xl:text-[14px]"}," Полтава, Полтавська обл., Україна ",-1),Jt={class:"flex items-center gap-[5px] md:gap-[7px] 2xl:gap-[10px]"},Kt=t("p",{class:"text-[8px] font-medium md:text-[10px] 2xl:text-[14px]"}," Верифікований користувач ",-1),Qt={class:"flex flex-col items-center gap-[8px] md:gap-[10px]"},Wt=h({__name:"SellerInfo",props:{product:{}},setup(_){return(e,c)=>{var b,u;const n=pt,l=nt,d=Xt,g=at;return s(),m("div",zt,[t("div",Ht,[t("p",Rt,w((u=(b=e.product)==null?void 0:b.company)==null?void 0:u.title),1)]),t("div",Yt,[t("div",Zt,[o(n,{fonControlled:!1,class:"h-[12px] w-[8px] md:h-[15px] md:w-[10px] 2xl:h-5 2xl:w-[14px]"}),Gt]),t("div",Jt,[o(l,{fonControlled:!1,class:"h-[6px] w-[8px] text-transparent md:h-[8px] md:w-[10px] 2xl:h-[9px] 2xl:w-[12px]"}),Kt])]),t("div",Qt,[o(d,null,{default:p(()=>[r("Зв’язатися")]),_:1}),o(g,{to:"/",class:"text-[10px] font-medium text-status_gray underline underline-offset-1 md:text-[14px]"},{default:p(()=>[r(" Відкрити контакт ")]),_:1})])])}}}),te={class:"pb-[70px] md:pb-[100px] 2xl:pb-[130px]"},ee={class:"container grid 2xl:grid-cols-[1fr_min-content] 2xl:gap-x-5"},oe={class:"flex w-full flex-col md:flex-row md:gap-x-5 xl:w-fit 2xl:gap-x-10"},se={class:"mb-[20px] flex gap-[5px] md:mb-[35px] 2xl:mb-[80px] 2xl:gap-[10px]"},Le=h({__name:"[id]",async setup(_){let e,c;const l=et().params.id,d=S(null),g=S(null),b=S([]),u=f=>{g.value=f},$=f=>{d.value=f},{data:x}=([e,c]=G(()=>ot(`${I()}/product/show/${l}`)),e=await e,c(),e);return(async()=>{try{const f=await ct(`${I()}/product/list`);b.value=f}catch(f){console.error(f)}})(),(f,ne)=>{var C,B,T,U;const L=R,D=dt,O=mt,j=Vt,F=Dt,X=Wt,P=Q,z=W;return s(),m("div",te,[o(L),t("div",ee,[t("div",oe,[t("div",se,[o(D,{class:"!hidden md:!block",slides:(C=a(x))==null?void 0:C.images,onSwiper:u},null,8,["slides"]),o(O,{thumbs:{swiper:a(g)},slides:(B=a(x))==null?void 0:B.images,onSwiper:$},null,8,["thumbs","slides"])]),o(j,{product:a(x)},null,8,["product"])]),o(F,{class:"md:order-2 2xl:col-span-2"}),o(X,{product:a(x)},null,8,["product"])]),a(x)&&a(x).product_company.length>0?(s(),i(P,{key:0,products:(T=a(x))==null?void 0:T.product_company,class:"!pt-0"},{title:p(()=>[r(" Інші товари від цього продавця ")]),_:1},8,["products"])):y("",!0),a(x)&&a(x).product_same_category.length>0?(s(),i(P,{key:1,products:(U=a(x))==null?void 0:U.product_same_category},{title:p(()=>[r(" Інші товари з цієї категорії ")]),_:1},8,["products"])):y("",!0),o(z)])}}});export{Le as default};
