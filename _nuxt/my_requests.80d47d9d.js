import{_ as l}from"./ButtonPrimary.vue.a0e1b31c.js";import{_ as d,a as u}from"./ButtonOpacityDelete.ff13e1b5.js";import{_ as x}from"./RequestImportersItem.vue.926586fe.js";import{x as p,M as m,N as c,O as a,Y as r,I as t,_ as f,Z as q}from"./swiper-vue.67144f5d.js";import{_ as g}from"./ProfilePage.vue.4877c82e.js";import"./nuxt-link.a103915b.js";import"./entry.e709a5f9.js";import"./cn.a642df04.js";import"./Edit.bdadc4cf.js";import"./nuxt-icon.2658f0dd.js";import"./ButtonOpacity.efa18c0f.js";import"./Delete.1327916b.js";import"./TextPortalPrimary.220fde3b.js";import"./TextPortalPrimaryXl.4190cc4c.js";import"./ButtonOutline.vue.c3d0ce30.js";const y={class:"flex justify-end gap-[10px] xl:gap-[15px]"},k=p({__name:"CardMyRequest",props:{editLink:{},requestLink:{}},setup(_){return(s,i)=>{const e=d,o=u,n=x;return m(),c(n,{requestLink:s.requestLink,noButton:"",class:"!bg-[#D9D9D9]"},{buttons_action:a(()=>[r("div",y,[t(e,{to:s.editLink},null,8,["to"]),t(o)])]),_:1},8,["requestLink"])}}}),$={class:"mb-[30px] mt-[15px] grid grid-cols-12 gap-[10px] md:mb-[40px] md:mt-[30px] md:gap-[16px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] xl:gap-[30px]"},j=p({__name:"my_requests",setup(_){return(s,i)=>{const e=l,o=k,n=g;return m(),c(n,{title:`${s.$t("profile.my_requests.my_requests")}`},{default:a(()=>[t(e,{to:"add_request"},{default:a(()=>[f(q(s.$t("profile.my_requests.add_request")),1)]),_:1}),r("div",$,[t(o,{editLink:"edit_request/request_id",class:"col-span-12 md:col-span-6 xl:col-span-4"}),t(o,{class:"col-span-12 md:col-span-6 xl:col-span-4"}),t(o,{class:"col-span-12 md:col-span-6 xl:col-span-4"}),t(o,{class:"col-span-12 md:col-span-6 xl:col-span-4"}),t(o,{class:"col-span-12 md:col-span-6 xl:col-span-4"}),t(o,{class:"col-span-12 md:col-span-6 xl:col-span-4"})])]),_:1},8,["title"])}}});export{j as default};
