import{_ as F}from"./TextPortalPrimary.88471c12.js";import{_ as P,m as j,a as U,t as M,c as w,d as q}from"./entry.7de112f3.js";import{M as p,N as y,O as d,a1 as C,x as b,X as _,I as u,_ as h,Y as f,t as B,i as D,l as O,a7 as L,ah as z,L as E,Z as $,a2 as v,a3 as x,a as I,r as G,b as J,u as n,ai as X}from"./swiper-vue.a0cc9e67.js";import{u as Y,a as Z,_ as H,b as K}from"./useFormGroup.9967a36d.js";import{_ as Q}from"./ButtonText.vue.491e3871.js";import{t as W}from"./tw-merge.5159c951.js";import{u as ee,r as te}from"./ui.config.8fd01ca6.js";import{_ as ae}from"./ButtonPrimary.vue.a3bf999c.js";import{_ as oe}from"./ProfilePage.vue.5b62e4fe.js";import"./nuxt-link.b16245fe.js";import"./cn.a642df04.js";const le={};function ne(e,o){const l=F;return p(),y(l,{class:"inline-block rounded-[12px] border border-[#319F43] bg-[#C5ECAD] p-[15px] text-center text-[#319F43] md:rounded-[15px] md:px-[23px] md:py-[20px] xl:rounded-[25px] xl:py-[25px] xl:py-[28px]"},{default:d(()=>[C(e.$slots,"default")]),_:3})}const se=P(le,[["render",ne]]),re=b({__name:"ButtonTextOpacity",props:{styles:{default:""}},setup(e){return(o,l)=>{const t=Q;return p(),y(t,{class:"hover:opacity-hover",styles:o.styles},{default:d(()=>[C(o.$slots,"default")]),_:3},8,["styles"])}}}),ue={class:"flex items-center rounded-[50px] border border-black bg-transparent px-[15px] text-[7px] font-medium text-black focus:outline-none md:px-[20px] md:text-[10px] xl:px-[25px] xl:text-[14px]"},pe=["value"],ie=b({__name:"PhoneInputOutline",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:o}){const l=o,t=r=>{const m=r.target.value;l("update:modelValue",m)};return(r,m)=>{const a=re;return p(),_("div",ue,[u(a,{class:"h-full border-r border-black pr-[20px]"},{default:d(()=>[h("+38")]),_:1}),f("input",{value:r.modelValue,type:"number",class:"input_without_arrow basis-full bg-transparent py-[11px] pl-[15px] focus:outline-none md:py-[14px] md:pl-[20px] xl:py-[16px] xl:pl-[25px]",onInput:t},null,40,pe)])}}}),de=["value"],me=b({__name:"TextareaOutline",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:o}){const l=o,t=r=>{const m=r.target.value;l("update:modelValue",m)};return(r,m)=>(p(),_("textarea",{value:r.modelValue,class:"resize-none rounded-[20px] border border-black bg-transparent px-[15px] py-[11px] text-[7px] font-medium text-black focus:outline-none md:rounded-[30px] md:px-[20px] md:py-[14px] md:text-[10px] xl:px-[25px] xl:py-[16px] xl:text-[14px]",onInput:t},`
<slot/>`,40,de))}}),k=j(U.ui.strategy,U.ui.radio,te),ce=b({inheritAttrs:!1,props:{id:{type:String,default:()=>Y()},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>k.default.color,validator(e){return U.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:l,attrs:t}=ee("radio",B(e,"ui"),k,B(e,"class")),r=D("radio-group",null),{emitFormChange:m,color:a,name:s}=r??Z(e,k),V=O({get(){return e.modelValue},set(c){o("update:modelValue",c),o("change",c),r||m()}}),g=O(()=>W(M(l.value.base,l.value.background,l.value.border,l.value.ring.replaceAll("{color}",a.value),l.value.color.replaceAll("{color}",a.value)),e.inputClass));return{ui:l,attrs:t,pick:V,name:s,inputClass:g}}}),_e={class:"flex items-center h-5"},fe=["id","name","required","value","disabled"],xe={key:0,class:"ms-3 inline-flex items-center"},be=["for"];function ye(e,o,l,t,r,m){return p(),_("div",{class:v(e.ui.wrapper)},[f("div",_e,[L(f("input",E({id:e.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.pick=a),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:["form-radio",e.inputClass]},e.attrs),null,16,fe),[[z,e.pick]])]),e.label||e.$slots.label?(p(),_("div",xe,[f("label",{for:e.id,class:v(e.ui.label)},[C(e.$slots,"label",{},()=>[h($(e.label),1)]),e.required?(p(),_("span",{key:0,class:v(e.ui.required)},"*",2)):x("",!0)],10,be),e.help?(p(),_("p",{key:0,class:v(e.ui.help)},$(e.help),3)):x("",!0)])):x("",!0)],2)}const ge=P(ce,[["render",ye]]),ve=b({__name:"Radio",props:{ui:{}},setup(e){return(o,l)=>{const t=ge;return p(),y(t,{class:"ui_radio",ui:{wrapper:"items-center",border:"!border-black",background:"bg-transparent",color:"!text-transparent",label:"font-medium text-[12px] md:text-[14px]",...o.ui}},null,8,["ui"])}}});const he=["onSubmit"],$e={class:"grid max-w-[1110px] gap-[15px] md:gap-[20px] xl:grid-cols-2 xl:gap-x-[80px] xl:gap-y-[15px]"},Ve={class:"flex items-center gap-[25px]"},Te=b({__name:"create_company",setup(e){const o=I("noCreate"),l=I(!1),t=G({name:"",phone:"",code:"",description:"",experience:""}),r=()=>{w(`${q()}/company/request/check`).then(a=>(l.value=!0,a.data.value.status?(a.data.value.status==="0"&&(o.value="moderation"),!1):(o.value="noCreate",!1)))},m=()=>{w(`${q()}/company/request`,{method:"POST",body:{title:t.name,phone:+t.phone,legal_code:+t.code,description:t.description}}).then(a=>{console.log(a)})};return J(t,()=>{console.log(t)}),r(),(a,s)=>{const V=se,g=H,c=K,A=ie,T=me,S=ve,N=ae,R=oe;return n(l)?(p(),y(R,{key:0,title:a.$t("create_company.application_submission")},{default:d(()=>[n(o)==="moderation"?(p(),y(V,{key:0},{default:d(()=>[h($(a.$t("create_company.your_application_moderated")),1)]),_:1})):x("",!0),n(o)==="noCreate"?(p(),_("form",{key:1,action:"#",onSubmit:X(m,["prevent"])},[f("div",null,[f("div",$e,[u(c,{class:"",label:a.$t("create_company.name_legal_entity")+":"},{default:d(()=>[u(g,{modelValue:n(t).name,"onUpdate:modelValue":s[0]||(s[0]=i=>n(t).name=i),required:""},null,8,["modelValue"])]),_:1},8,["label"]),u(c,{label:a.$t("create_company.enter_edrpou_code")+":",type:"text",class:""},{default:d(()=>[u(g,{modelValue:n(t).code,"onUpdate:modelValue":s[1]||(s[1]=i=>n(t).code=i),type:"number",required:""},null,8,["modelValue"])]),_:1},8,["label"]),u(c,{label:a.$t("create_company.contact_person_number")+":",class:"xl:row-span-1"},{default:d(()=>[u(A,{modelValue:n(t).phone,"onUpdate:modelValue":s[2]||(s[2]=i=>n(t).phone=i),required:""},null,8,["modelValue"])]),_:1},8,["label"]),u(c,{label:a.$t("create_company.describe_plan_using_platform")+":",class:"xl:row-span-2"},{default:d(()=>[u(T,{modelValue:n(t).description,"onUpdate:modelValue":s[3]||(s[3]=i=>n(t).description=i),class:"h-[125px] md:h-[159px] xl:h-[147px]"},null,8,["modelValue"])]),_:1},8,["label"]),u(c,{label:a.$t("create_company.have__experience_export_import"),class:"xl:row-span-1"},{default:d(()=>[f("div",Ve,[u(S,{modelValue:n(t).experience,"onUpdate:modelValue":s[4]||(s[4]=i=>n(t).experience=i),value:"yes",name:"name",label:a.$t("yes")},null,8,["modelValue","label"]),u(S,{modelValue:n(t).experience,"onUpdate:modelValue":s[5]||(s[5]=i=>n(t).experience=i),value:"no",name:"name",label:a.$t("no")},null,8,["modelValue","label"])])]),_:1},8,["label"])]),u(N,{type:"submit",class:"mt-[25px] md:mt-[45px]"},{default:d(()=>[h($(a.$t("send_request")),1)]),_:1})])],40,he)):x("",!0)]),_:1},8,["title"])):x("",!0)}}});export{Te as default};
