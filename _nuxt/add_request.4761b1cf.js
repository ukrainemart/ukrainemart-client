import{_ as n}from"./CreateRequest.vue.e1c4a07a.js";import{u}from"./useTitle.52fd5c6a.js";import{f as m,g as c,d as l,n as _}from"./entry.b8ed7877.js";import{x as d,a as r,M as f,N as v,u as i}from"./swiper-vue.f6db05b8.js";import{w as y}from"./index.510b78c9.js";import"./InputOutlineValidate.vue.5d36667f.js";import"./InputOutline.vue.c6b085b1.js";import"./index.esm.121b9214.js";import"./cn.a642df04.js";import"./ButtonPrimary.vue.f56ed4af.js";import"./nuxt-link.8d97af9c.js";import"./TextareaOutlineValidate.vue.431a8c2b.js";import"./SelectOutline.vue.6c5b521a.js";import"./AlertTextDanger.d541e9ef.js";import"./ArrowDown.e7899781.js";import"./nuxt-icon.66759bf2.js";import"./ButtonText.vue.08f0dc6f.js";import"./Icon.f861aeb4.js";import"./tw-merge.2278534d.js";import"./ui.config.1d1b193b.js";import"./index.ebafeb8e.js";import"./micro-task.ab13cabb.js";import"./open-closed.4de15d71.js";import"./use-resolve-button-type.74e369d1.js";import"./disposables.5dd660ff.js";import"./TextPortalPrimary.2cd0fe8c.js";import"./TextareaOutline.vue.35217704.js";import"./useMultiLang.93dea094.js";import"./Calendar.18c2f5bb.js";import"./ButtonTextOpacity.vue.9103e1e6.js";import"./ProfilePage.vue.aae45a3d.js";const X=d({__name:"add_request",setup(g){u("profile.my_requests.add_request");const{t:p}=m(),o=r(""),t=r({title:"",categoryId:null,description:"",country:"",count:null,countType:"",activeBefore:""});y(t,()=>{console.log(t.value)});const a=()=>{c(`${l()}/importRequest/create`,{method:"POST",body:{title:t.value.title,category_id:t.value.categoryId,description:t.value.description,country:t.value.country,count:t.value.count,count_type:String(t.value.countType),active_before:t.value.activeBefore}}).then(e=>{e.data.value.status===1&&_("/profile/my_requests")}).catch(e=>{o.value=p("validation_inputs.try_again"),console.log(e)})};return(e,q)=>{const s=n;return f(),v(s,{inputs:i(t),error:i(o),title:`${e.$t("profile.my_requests.add_request")}`,onActionSubmit:a},null,8,["inputs","error","title"])}}});export{X as default};
