import _ from"./ShowPassword.6eee1981.js";import w from"./HiddenPassword.79ed7f6e.js";import{_ as h}from"./ButtonOpacity.a1310f8e.js";import{a as f}from"./InputOutline.vue.6e797599.js";import{x as v,a as g,M as o,X as y,Y as V,I as s,O as k,u as a,N as p}from"./swiper-vue.01371f92.js";const B={class:"relative w-full"},N=v({__name:"InputOutlinePassword",props:{modelValue:{},required:{type:Boolean},tabindex:{}},emits:["update:modelValue"],setup(b,{emit:l}){const e=g(!1),r=l,i=t=>{const n=t.target.value;r("update:modelValue",n)},u=()=>{console.log(e.value),console.log("1"),e.value=!e.value};return(t,n)=>{const c=_,d=w,m=h,x=f;return o(),y("div",B,[V("div",null,[s(m,{class:"absolute inset-y-0 right-[5px] my-auto p-[10px] md:right-[10px] xl:right-[15px]",onClick:u},{default:k(()=>[a(e)?(o(),p(c,{key:0,class:"pointer-events-none inline !h-[7px] !w-[11px] text-status_gray md:!h-[10px] md:!w-[15px] xl:!h-[15px] xl:!w-[22px]"})):(o(),p(d,{key:1,class:"pointer-events-none inline !h-[9px] !w-[11px] text-status_gray md:!h-[13px] md:!w-[15px] xl:!h-[19px] xl:!w-[22px]"}))]),_:1})]),s(x,{tabindex:t.tabindex,value:t.modelValue,required:t.required,class:"w-full pr-[26px] md:pr-[35px] xl:pr-[47px]",type:a(e)?"text":"password",onInput:i},null,8,["tabindex","value","required","type"])])}}});export{N as _};