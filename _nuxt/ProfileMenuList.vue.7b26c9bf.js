import{x as f,M as c,X as x,Y as o,Z as e,N as $,O as n,a1 as w,a4 as M,u as _,l as h,I as a,_ as m,a3 as k}from"./swiper-vue.33fa7a2f.js";import{_ as v}from"./ButtonText.vue.baf938ef.js";import{b as N,g as b}from"./entry.d4519e22.js";import{c as B}from"./cn.a642df04.js";import L from"./Logout.beb2ed74.js";const S={class:"flex items-center gap-[6px] md:gap-[8px] xl:gap-[10px]"},V={class:"flex h-[34px] w-[34px] items-center justify-center rounded-[50%] bg-black md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"},E={class:"shrink-0 text-[18px] font-medium uppercase text-white md:text-[22px] xl:text-[26px]"},P={class:"text-[12px] font-medium md:text-[16px] xl:text-[20px]"},Y=f({__name:"UserIconName",props:{name:{}},setup(d){return(s,t)=>(c(),x("div",S,[o("div",V,[o("span",E,e(s.name[0]),1)]),o("p",P,e(s.name),1)]))}}),I=f({__name:"ProfileMenuLink",props:{to:{}},setup(d){const s=N();return(t,i)=>{const u=v;return c(),$(u,{to:t.to,class:M(("cn"in t?t.cn:_(B))("py-[10px] text-left text-status_gray hover:text-black md:py-[12px] lg:max-w-[211px] xl:py-[15px] 3xl:!text-[17px]",{"!text-black":_(s).path===t.to}))},{default:n(()=>[w(t.$slots,"default")]),_:3},8,["to","class"])}}}),T={key:0},U={key:1},j={class:"mt-[25px] md:mt-[48px] xl:mt-[55px]"},Z=f({__name:"ProfileMenuList",emits:["switchMenu"],setup(d,{emit:s}){const t=s,i=b(),u=h(()=>i.isCompany),y=h(()=>i.isExporter),p=()=>{t("switchMenu",!1)},g=async()=>{await i.logout(),p()};return(l,z)=>{const r=I,C=L;return c(),x("ul",null,[o("li",null,[a(r,{to:"/profile",onClick:p},{default:n(()=>[m(e(l.$t("profile.personal_data")),1)]),_:1})]),o("li",null,[a(r,{to:"/profile/favorites",onClick:p},{default:n(()=>[m(e(l.$t("favorites")),1)]),_:1})]),_(u)?k("",!0):(c(),x("li",T,[a(r,{to:"/profile/create_company",onClick:p},{default:n(()=>[m(e(l.$t("profile.apply_company_creation")),1)]),_:1})])),_(y)?(c(),x("li",U,[a(r,{to:"/profile/my_products",onClick:p},{default:n(()=>[m(e(l.$t("profile.my_products")),1)]),_:1})])):k("",!0),o("li",j,[a(r,{class:"flex gap-[5px] xl:gap-[10px]",onClick:g},{default:n(()=>[a(C,{class:"!h-[11px] !w-[12px] xl:!h-[18px] xl:!w-[20px]"}),o("span",null,e(l.$t("profile.sign_out")),1)]),_:1})])])}}});export{Y as _,Z as a};