import{_ as T}from"./TextPortalPrimary.119a79d4.js";import{_ as P,m as E,e as S,t as G,g as B,d as O}from"./entry.e5b52a8c.js";import{M as m,N as y,O as d,a1 as R,x as U,t as A,i as z,l as F,X as $,Y as _,a7 as J,ah as X,L as Y,_ as q,Z as C,a4 as x,a2 as b,b as Z,a as h,r as H,u as t,I as i,k as K}from"./swiper-vue.67144f5d.js";import{t as Q}from"./tw-merge.ed5ef1ca.js";import{u as W,r as ee}from"./ui.config.0deaf6d3.js";import{u as ae}from"./uid.12f507af.js";import{u as te,a as le,_ as oe,c as ne,b as se,d as re,e as ie,F as ue}from"./index.esm.bcc532d3.js";import{_ as pe}from"./InputOutline.vue.e68acffd.js";import{_ as de}from"./PhoneInputOutline.vue.b65cad57.js";import{_ as me}from"./TextareaOutline.vue.c95a53de.js";import{w as ce}from"./index.101b1fe2.js";import{_ as _e}from"./ProfilePage.vue.8736dab9.js";import"./cn.a642df04.js";import"./ButtonPrimary.vue.3da1f691.js";import"./nuxt-link.d582eca9.js";import"./ButtonText.vue.5d8e7e3a.js";const fe={};function ye(e,r){const n=T;return m(),y(n,{class:"inline-block rounded-[12px] border border-[#319F43] bg-[#C5ECAD] p-[15px] text-center text-[#319F43] md:rounded-[15px] md:px-[23px] md:py-[20px] xl:rounded-[25px] xl:px-[25px] xl:py-[28px]"},{default:d(()=>[R(e.$slots,"default")]),_:3})}const be=P(fe,[["render",ye]]),k=E(S.ui.strategy,S.ui.radio,ee),ge=U({inheritAttrs:!1,props:{id:{type:String,default:()=>ae()},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>k.default.color,validator(e){return S.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:n,attrs:u}=W("radio",A(e,"ui"),k,A(e,"class")),c=z("radio-group",null),{emitFormChange:a,color:p,name:g}=c??te(e,k),l=F({get(){return e.modelValue},set(f){r("update:modelValue",f),r("change",f),c||a()}}),o=F(()=>Q(G(n.value.base,n.value.background,n.value.border,n.value.ring.replaceAll("{color}",p.value),n.value.color.replaceAll("{color}",p.value)),e.inputClass));return{ui:n,attrs:u,pick:l,name:g,inputClass:o}}}),ve={class:"flex items-center h-5"},Ve=["id","name","required","value","disabled"],$e={key:0,class:"ms-3 inline-flex items-center"},xe=["for"];function he(e,r,n,u,c,a){return m(),$("div",{class:x(e.ui.wrapper)},[_("div",ve,[J(_("input",Y({id:e.id,"onUpdate:modelValue":r[0]||(r[0]=p=>e.pick=p),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:["form-radio",e.inputClass]},e.attrs),null,16,Ve),[[X,e.pick]])]),e.label||e.$slots.label?(m(),$("div",$e,[_("label",{for:e.id,class:x(e.ui.label)},[R(e.$slots,"label",{},()=>[q(C(e.label),1)]),e.required?(m(),$("span",{key:0,class:x(e.ui.required)},"*",2)):b("",!0)],10,xe),e.help?(m(),$("p",{key:0,class:x(e.ui.help)},C(e.help),3)):b("",!0)])):b("",!0)],2)}const Ce=P(ge,[["render",he]]),Ue=U({__name:"Radio",props:{ui:{}},setup(e){return(r,n)=>{const u=Ce;return m(),y(u,{class:"ui_radio",ui:{wrapper:"items-center",border:"!border-black",background:"bg-transparent",color:"!text-transparent",label:"font-medium text-[12px] md:text-[14px]",...r.ui}},null,8,["ui"])}}});const ke=U({__name:"CompanySendValidationBtn",props:{inputs:{},modelValue:{},loading:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:r}){const n=e,u=r,c=l=>{u("update:modelValue",l)},{value:a,errorMessage:p}=le("createCompany",{},{validateOnValueUpdate:!1}),g=()=>{n.inputs.phone&&n.inputs.name&&n.inputs.code&&n.inputs.description?a.value=!0:a.value=!1};return Z(p,()=>{c(p.value||"")}),ce(()=>n.inputs,()=>{g()}),(l,o)=>{const f=oe;return m(),y(f,{loading:l.loading,type:"submit",class:"mt-[25px] md:mt-[45px]"},{default:d(()=>[q(C(l.$t("send_request")),1)]),_:1},8,["loading"])}}}),Se=ne().shape({createCompany:se().required("fill_in_all_fields").oneOf([!0],"fill_in_all_fields")}),qe={class:"grid max-w-[1110px] gap-[15px] md:gap-[20px] xl:grid-cols-2 xl:gap-x-[80px] xl:gap-y-[15px]"},we={class:"col-span-2 flex items-center gap-[15px] xl:gap-[25px]"},Be={class:"flex items-center gap-[25px]"},Xe=U({__name:"create_company",setup(e){const r=h("noCreate"),n=h(!1),u=h(""),c=h(!1),a=H({name:"",phone:"",code:"",description:"",experience:"no",type:"exporter"}),p=()=>{B(`${O()}/company/request/check`).then(l=>(n.value=!0,l.data.value.status?(l.data.value.status==="0"&&(r.value="moderation"),!1):(r.value="noCreate",!1)))},g=()=>{c.value=!0,B(`${O()}/company/request`,{method:"POST",body:{title:a.name,phone:+a.phone,legal_code:+a.code,description:a.description,type:a.type}}).then(()=>{p(),c.value=!1})};return p(),(l,o)=>{const f=be,V=Ue,w=pe,v=re,N=de,I=me,M=ie,j=ke,D=ue,L=_e;return t(n)?(m(),y(L,{key:0,title:l.$t("create_company.application_submission")},{default:d(()=>[t(r)==="moderation"?(m(),y(f,{key:0},{default:d(()=>[q(C(l.$t("create_company.your_application_moderated")),1)]),_:1})):b("",!0),t(r)==="noCreate"?(m(),y(D,{key:1,"validation-schema":"validationCreateCompany"in l?l.validationCreateCompany:t(Se),onSubmit:g},{default:d(()=>[_("div",null,[_("div",qe,[_("div",we,[i(V,{modelValue:t(a).type,"onUpdate:modelValue":o[0]||(o[0]=s=>t(a).type=s),value:"importer",label:l.$t("importer")},null,8,["modelValue","label"]),i(V,{modelValue:t(a).type,"onUpdate:modelValue":o[1]||(o[1]=s=>t(a).type=s),value:"exporter",label:l.$t("exporter")},null,8,["modelValue","label"])]),i(v,{class:"",label:l.$t("create_company.name_legal_entity")+":"},{default:d(()=>[i(w,{modelValue:t(a).name,"onUpdate:modelValue":o[2]||(o[2]=s=>t(a).name=s),required:""},null,8,["modelValue"])]),_:1},8,["label"]),i(v,{label:l.$t("create_company.enter_edrpou_code")+":",type:"text",class:""},{default:d(()=>[i(w,{modelValue:t(a).code,"onUpdate:modelValue":o[3]||(o[3]=s=>t(a).code=s),type:"number",required:""},null,8,["modelValue"])]),_:1},8,["label"]),i(v,{label:l.$t("create_company.contact_person_number")+":",class:"self-start xl:row-span-1"},{default:d(()=>[i(N,{modelValue:t(a).phone,"onUpdate:modelValue":o[4]||(o[4]=s=>t(a).phone=s)},null,8,["modelValue"])]),_:1},8,["label"]),i(v,{label:l.$t("create_company.describe_plan_using_platform")+":",class:"xl:row-span-2"},{default:d(()=>[i(I,{modelValue:t(a).description,"onUpdate:modelValue":o[5]||(o[5]=s=>t(a).description=s),class:"h-[125px] md:h-[159px] xl:h-[147px]"},null,8,["modelValue"])]),_:1},8,["label"]),i(v,{for:"",label:l.$t("create_company.have__experience_export_import"),class:"xl:row-span-1"},{default:d(()=>[_("div",Be,[i(V,{modelValue:t(a).experience,"onUpdate:modelValue":o[6]||(o[6]=s=>t(a).experience=s),value:"yes",label:l.$t("yes")},null,8,["modelValue","label"]),i(V,{modelValue:t(a).experience,"onUpdate:modelValue":o[7]||(o[7]=s=>t(a).experience=s),value:"no",label:l.$t("no")},null,8,["modelValue","label"])])]),_:1},8,["label"])]),i(M,{class:"mt-[10px] xl:mt-[30px]",error:t(u)},null,8,["error"]),i(j,{modelValue:t(u),"onUpdate:modelValue":o[8]||(o[8]=s=>K(u)?u.value=s:null),loading:t(c),inputs:t(a)},null,8,["modelValue","loading","inputs"])])]),_:1},8,["validation-schema"])):b("",!0)]),_:1},8,["title"])):b("",!0)}}});export{Xe as default};
