import{_ as V}from"./InputOutline.vue.604c4fb5.js";import{a as _,e as y}from"./index.esm.cdfce53d.js";import{c as v}from"./cn.a642df04.js";import{x as b,l as h,M as n,X as I,I as k,u as s,k as $,a4 as g,N as w,a2 as B}from"./swiper-vue.c8ff5059.js";import{w as C}from"./index.77f53ec6.js";const N={class:"relative w-full"},z=b({__name:"InputOutlineValidate",props:{modelValue:{},name:{},type:{},tabindex:{},styles:{},class:{},message:{type:Boolean,default:!0},placeholder:{default:""}},emits:["update:modelValue"],setup(r,{emit:m}){const a=r,{value:l,errorMessage:t}=_(()=>a.name);C(()=>a.modelValue,()=>{l.value=a.modelValue});const u=h(()=>`${a.class} ' ' ${a.styles} ' ' ${t.value?"!border-status_red":""}`),p=m,d=()=>{p("update:modelValue",l.value)};return(e,o)=>{const c=V,i=y;return n(),I("div",N,[k(c,{modelValue:s(l),"onUpdate:modelValue":o[0]||(o[0]=f=>$(l)?l.value=f:null),placeholder:e.placeholder,tabindex:e.tabindex,type:e.type||"text",class:g(("cn"in e?e.cn:s(v))("w-full",s(u))),name:e.name,onInput:d},null,8,["modelValue","placeholder","tabindex","type","class","name"]),e.message?(n(),w(i,{key:0,class:"absolute left-0 top-full mt-[5px] normal-case",error:s(t)},null,8,["error"])):B("",!0)])}}});export{z as _};