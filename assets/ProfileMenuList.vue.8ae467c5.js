import{x as c,M as i,X as u,Y as t,Z as r,N as f,O as n,a1 as h,a2 as k,u as m,I as s,_ as p}from"./swiper-vue.19093444.js";import{_ as C}from"./ButtonText.vue.f8119a4b.js";import{y as g}from"./entry.0e2ccb48.js";import{c as w}from"./cn.a642df04.js";import y from"./Logout.2a726cec.js";const M={class:"flex items-center gap-[6px] md:gap-[8px] xl:gap-[10px]"},$={class:"flex h-[34px] w-[34px] items-center justify-center rounded-[50%] bg-black md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"},B={class:"text-[18px] font-medium uppercase text-white md:text-[22px] xl:text-[26px]"},N={class:"text-[12px] font-medium md:text-[16px] xl:text-[20px]"},j=c({__name:"UserIconName",props:{name:{}},setup(x){return(a,e)=>(i(),u("div",M,[t("div",$,[t("span",B,r(a.name[0]),1)]),t("p",N,r(a.name),1)]))}}),b=c({__name:"ProfileMenuLink",props:{to:{}},setup(x){const a=g();return(e,o)=>{const _=C;return i(),f(_,{to:e.to,class:k(("cn"in e?e.cn:m(w))("max-w-[211px] py-[10px] text-left text-status_gray hover:text-black md:py-[12px] xl:py-[15px]",{"!text-black":m(a).path===e.to}))},{default:n(()=>[h(e.$slots,"default")]),_:3},8,["to","class"])}}}),v={class:"mt-[25px] md:mt-[48px] xl:mt-[55px]"},L=t("span",null,"Вийти",-1),z=c({__name:"ProfileMenuList",emits:["switchMenu"],setup(x,{emit:a}){const e=a,o=()=>{e("switchMenu",!1)};return(_,P)=>{const l=b,d=y;return i(),u("ul",null,[t("li",null,[s(l,{to:"/profile",onClick:o},{default:n(()=>[p("Особисті дані")]),_:1})]),t("li",null,[s(l,{onClick:o},{default:n(()=>[p("Мої замовлення")]),_:1})]),t("li",null,[s(l,{onClick:o},{default:n(()=>[p("Мої замовлення")]),_:1})]),t("li",null,[s(l,{onClick:o},{default:n(()=>[p("Мої замовлення")]),_:1})]),t("li",null,[s(l,{to:"/profile/create_company",onClick:o},{default:n(()=>[p("Подати заявку на створення компанії")]),_:1})]),t("li",null,[s(l,{onClick:o},{default:n(()=>[p("Мої товари")]),_:1})]),t("li",v,[s(l,{class:"flex gap-[5px] xl:gap-[10px]",onClick:o},{default:n(()=>[s(d,{class:"!h-[11px] !w-[12px] xl:!h-[18px] xl:!w-[20px]"}),L]),_:1})])])}}});export{j as _,z as a};