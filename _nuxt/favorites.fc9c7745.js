import{_ as l}from"./CardProduct.vue.33e3cadb.js";import{_ as f}from"./AlertProfileEmpty.81a77e9e.js";import{_ as u}from"./ProfilePage.vue.7d267b32.js";import{h as d}from"./entry.d0273f68.js";import{u as x}from"./useTitle.42c79226.js";import{x as g,l as v,M as t,N as o,O as p,u as i,X as n,H as y,a3 as h,_ as k,Z as F}from"./swiper-vue.f6db05b8.js";import"./Hearth.21ac8377.js";import"./nuxt-icon.568de6b0.js";import"./HearthBg.9e202cfb.js";import"./isLoggedIn.4e962236.js";import"./cn.a642df04.js";import"./nuxt-link.b8da881a.js";import"./useMultiLang.c767e2d5.js";import"./index.510b78c9.js";const C={key:0,class:"grid grid-cols-12 gap-x-[25px] gap-y-5 md:gap-x-[32px] md:gap-y-10 4xl:gap-x-[44px] 4xl:gap-y-[60px]"},Z=g({__name:"favorites",setup(P){const e=d();x("favorites");const r=v(()=>e.favorites);return(()=>e.fetchFavorites())(),(a,B)=>{const m=l,c=f,_=u;return t(),o(_,{title:a.$t("favorites")},{default:p(()=>[i(r).length>0?(t(),n("div",C,[(t(!0),n(y,null,h(i(r),s=>(t(),o(m,{key:s.id,class:"col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3",product:s},null,8,["product"]))),128))])):(t(),o(c,{key:1},{default:p(()=>[k(F(a.$t("profile.there_are_no_products_your_favorites_yet")),1)]),_:1}))]),_:1},8,["title"])}}});export{Z as default};