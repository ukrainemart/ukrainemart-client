import V from"./ShowPassword.bc13decf.js";import k from"./HiddenPassword.1161ed92.js";import{_ as P}from"./ButtonOpacity.38a0167e.js";import{_ as B}from"./InputOutline.vue.604c4fb5.js";import{a as b,e as C}from"./index.esm.cdfce53d.js";import{x as E,a as I,M as a,X as q,Y as p,I as m,O as N,u as s,N as r,k as O,a4 as U,a2 as S,H as $}from"./swiper-vue.c8ff5059.js";import{w as F}from"./index.77f53ec6.js";const H={class:"relative w-full"},j=E({__name:"InputOutlinePassword",props:{modelValue:{},required:{type:Boolean},tabindex:{},showPasswordError:{type:Boolean},name:{},placeholder:{}},emits:["update:modelValue"],setup(d,{emit:i}){const u=d,{value:o,errorMessage:n}=b(()=>u.name),t=I(!1),c=i,x=()=>{c("update:modelValue",o)};F(()=>o,()=>{x()});const _=()=>{t.value=!t.value};return(e,l)=>{const w=V,h=k,f=P,y=B,v=C;return a(),q($,null,[p("div",H,[p("div",null,[m(f,{class:"absolute inset-y-0 right-[5px] my-auto p-[10px] md:right-[10px] xl:right-[15px]",onClick:_},{default:N(()=>[s(t)?(a(),r(w,{key:0,class:"pointer-events-none inline !h-[7px] !w-[11px] text-status_gray md:!h-[10px] md:!w-[15px] xl:!h-[15px] xl:!w-[22px]"})):(a(),r(h,{key:1,class:"pointer-events-none inline !h-[9px] !w-[11px] text-status_gray md:!h-[13px] md:!w-[15px] xl:!h-[19px] xl:!w-[22px]"}))]),_:1})]),m(y,{modelValue:s(o),"onUpdate:modelValue":l[0]||(l[0]=g=>O(o)?o.value=g:null),tabindex:e.tabindex,placeholder:e.placeholder,name:e.name,required:e.required,class:U(["w-full pr-[26px] md:pr-[35px] xl:pr-[47px]",{"!border-status_red":s(n)&&e.showPasswordError}]),type:s(t)?"text":"password"},null,8,["modelValue","tabindex","placeholder","name","required","class","type"])]),e.showPasswordError?(a(),r(v,{key:0,error:s(n)},null,8,["error"])):S("",!0)],64)}}});export{j as _};