import{x as d,M as n,X as u,Y as e,Z as s,N as y,O as a,a1 as w,a2 as C,u as m,l as $,I as i,_,a3 as h}from"./swiper-vue.3ae57102.js";import{_ as M}from"./ButtonText.vue.7ecad853.js";import{d as N,j as B}from"./entry.8014e5b0.js";import{c as b}from"./cn.a642df04.js";import v from"./Logout.ea1f0d54.js";const L={class:"flex items-center gap-[6px] md:gap-[8px] xl:gap-[10px]"},S={class:"flex h-[34px] w-[34px] items-center justify-center rounded-[50%] bg-black md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"},V={class:"shrink-0 text-[18px] font-medium uppercase text-white md:text-[22px] xl:text-[26px]"},P={class:"text-[12px] font-medium md:text-[16px] xl:text-[20px]"},R=d({__name:"UserIconName",props:{name:{}},setup(f){return(o,t)=>(n(),u("div",L,[e("div",S,[e("span",V,s(o.name[0]),1)]),e("p",P,s(o.name),1)]))}}),j=d({__name:"ProfileMenuLink",props:{to:{}},setup(f){const o=N();return(t,x)=>{const p=M;return n(),y(p,{to:t.to,class:C(("cn"in t?t.cn:m(b))("py-[10px] text-left text-status_gray hover:text-black md:py-[12px] lg:max-w-[211px] xl:py-[15px] 3xl:!text-[17px]",{"!text-black":m(o).path===t.to}))},{default:a(()=>[w(t.$slots,"default")]),_:3},8,["to","class"])}}}),I={key:0},T={class:"mt-[25px] md:mt-[48px] xl:mt-[55px]"},X=d({__name:"ProfileMenuList",emits:["switchMenu"],setup(f,{emit:o}){const t=o,x=B(),p=$(()=>x.isCompany),l=()=>{t("switchMenu",!1)},k=async()=>{await x.logout(),l()};return(c,U)=>{const r=j,g=v;return n(),u("ul",null,[e("li",null,[i(r,{to:"/profile",onClick:l},{default:a(()=>[_(s(c.$t("profile.personal_data")),1)]),_:1})]),e("li",null,[i(r,{to:"/profile/create_company",onClick:l},{default:a(()=>[_(s(c.$t("profile.apply_company_creation")),1)]),_:1})]),m(p)?h("",!0):(n(),u("li",I,[m(p)?(n(),y(r,{key:0,to:"/profile/my_products",onClick:l},{default:a(()=>[_(s(c.$t("profile.my_products")),1)]),_:1})):h("",!0)])),e("li",T,[i(r,{class:"flex gap-[5px] xl:gap-[10px]",onClick:k},{default:a(()=>[i(g,{class:"!h-[11px] !w-[12px] xl:!h-[18px] xl:!w-[20px]"}),e("span",null,s(c.$t("profile.sign_out")),1)]),_:1})])])}}});export{R as _,X as a};
