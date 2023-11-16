import{c as U}from"./cn.a642df04.js";import{x as h,a as b,b as O,M as _,X as g,Y as a,a2 as I,u as i,l as D,N as C,O as n,I as t,k as V,a1 as M,H as N,a4 as R,Z as y,a6 as w,a7 as $,_ as P,ah as W}from"./swiper-vue.c9be8dfa.js";import{_ as q,a as E}from"./useFormGroup.5cf41cb2.js";import{_ as S,a as T}from"./SelectMenu.7fe12838.js";import{_ as H}from"./TextareaOutline.vue.01d6194c.js";import{_ as X}from"./TextPortalPrimary.4b8fa177.js";import Y from"./Cross.da509859.js";import{_ as Z}from"./micro-task.f6690357.js";import{_ as G,c as J,d as K}from"./entry.a620eb8f.js";import{_ as Q}from"./ButtonPrimary.vue.a53b8092.js";import{_ as ee}from"./ProfilePage.vue.9da86213.js";import"./ui.config.66d15b8c.js";import"./ArrowDown.81850d1b.js";import"./nuxt-icon.096b23a3.js";import"./ButtonText.vue.922a9802.js";import"./nuxt-link.e1f5776a.js";import"./Icon.8318d49b.js";import"./tw-merge.95cfae96.js";import"./index.f086c3a9.js";import"./usePopper.7ef6469c.js";import"./open-closed.d7b2328e.js";const te={class:"relative flex w-fit overflow-hidden rounded-[5px] border border-black md:rounded-[7px] xl:rounded-[10px]"},le=h({__name:"LangSwitcherInputs",props:{modelValue:{}},emits:["update:modelValue"],setup(f,{emit:p}){const l=b("ua"),r=e=>{l.value=e},u=p,d=()=>{u("update:modelValue",l.value)};return O(l,()=>{d()}),d(),(e,o)=>(_(),g("div",te,[a("span",{class:I(("cn"in e?e.cn:i(U))("absolute top-0 h-full w-[50%] rounded-[3px] bg-black duration-200 md:rounded-[5px] xl:rounded-[7px]",{"translate-x-[100%]":i(l)==="en"}))},null,2),a("button",{class:I(("cn"in e?e.cn:i(U))("text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":i(l)==="ua"})),onClick:o[0]||(o[0]=c=>r("ua"))}," ua ",2),a("button",{class:I(("cn"in e?e.cn:i(U))("text_xs  relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":i(l)==="en"})),onClick:o[1]||(o[1]=c=>r("en"))}," en ",2)]))}}),ae=h({__name:"SelectOutline",setup(f){const p=[{id:1,name:"Wade"},{id:2,name:"Arlene"},{id:3,name:"Devon"},{id:4,name:"Tom Cook"}],l=b(p[0].id),r=D(()=>p.find(u=>u.id===l.value));return(u,d)=>{const e=S,o=T;return _(),C(o,{modelValue:i(l),"onUpdate:modelValue":d[0]||(d[0]=c=>V(l)?l.value=c:null),options:p,"value-attribute":"id","option-attribute":"name",class:"input_outline !p-0",uiMenu:{background:"bg-background-primary",container:"!top-0 !left-0 !transform-none",rounded:"rounded-[10px] md:rounded-[20px]",padding:"p-0",base:"border border-black py-[5px] md:py-[10px] !pt-[30px] md:!pt-[40px]",option:{base:"input_outline_text",padding:"px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]",active:"bg-[#D9D9D9] rounded-none",selectedIcon:{base:"hidden"}}}},{default:n(({open:c})=>{var m;return[t(e,{class:"input_outline_text input_outline_padding relative z-40 w-full justify-between !px-[9px] text-[7px] normal-case md:!px-[14px] xl:!px-[19px]",label:(m=i(r))==null?void 0:m.name,open:c},null,8,["label","open"])]}),_:1},8,["modelValue"])}}}),oe={class:"input_outline flex items-stretch !p-0"},ne=["value"],pe=h({__name:"PriceInputOutline",props:{modelValue:{}},emits:["update:modelValue"],setup(f,{emit:p}){const l=p,r=o=>{const c=o.target.value;l("update:modelValue",c)},u=[{id:1,name:"Wade"},{id:2,name:"Arlene"},{id:3,name:"Devon"},{id:4,name:"Tom"}],d=b(u[0].id),e=D(()=>u.find(o=>o.id===d.value));return(o,c)=>{const m=S,s=T;return _(),g("div",oe,[a("input",{value:o.modelValue,type:"number",class:"input_without_arrow input_outline_padding w-full basis-full bg-transparent focus:outline-none",onInput:r},null,40,ne),t(s,{modelValue:i(d),"onUpdate:modelValue":c[0]||(c[0]=x=>V(d)?d.value=x:null),options:u,"value-attribute":"id","option-attribute":"name",class:"border-l border-black",uiMenu:{background:"bg-background-primary",padding:"p-0",base:"py-[5px] md:py-[10px]",option:{base:"",padding:"px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]",active:"bg-[#D9D9D9] rounded-none",selectedIcon:{base:"hidden"}}}},{default:n(({open:x})=>{var v;return[t(m,{class:"input_outline_padding normal-case 4xl:!text-[14px]",label:(v=i(e))==null?void 0:v.name,open:x},null,8,["label","open"])]}),_:1},8,["modelValue"])])}}}),se={};function de(f,p){const l=Y,r=Z;return _(),C(r,{class:"flex items-center gap-[10px] text-[7px] md:text-[10px] xl:text-[14px]"},{default:n(()=>[a("span",null,[t(l)]),a("span",null,[M(f.$slots,"default")])]),_:3})}const ie=G(se,[["render",de]]),ue=h({__name:"InputFile",props:{typeInput:{},multiple:{type:Boolean}},emits:["updateInput"],setup(f,{emit:p}){const l=f,r=p,u=b(null),d=()=>{const e=u.value.files[0];e.value=e,r("updateInput",e.value,l==null?void 0:l.typeInput)};return(e,o)=>(_(),g("input",{id:"inp_file_popup",ref_key:"fileUpload",ref:u,class:"input_photo",type:"file",name:"inp_file_popup",onChange:o[0]||(o[0]=c=>d())},null,544))}}),re={class:"grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4"},ce={class:"absolute left-0 top-0 z-10 h-full w-full"},me=["src"],xe={class:"relative h-0 overflow-hidden rounded-[3px] bg-[#D9D9D9] pt-[100%] md:rounded-[5px] xl:rounded-[10px]"},_e={class:"absolute left-0 top-0 z-10 h-full w-full cursor-pointer"},fe={class:"absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"},be=a("span",{class:"relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-black after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-black md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"},null,-1),ge={class:"text_xs font-medium"},he=h({__name:"AddingPhoto",props:{modelValue:{}},emits:["update:modelValue"],setup(f,{emit:p}){const l=b([]),r=D(()=>l.value.map(o=>URL.createObjectURL(o.value))),u=p,d=()=>{u("update:modelValue",l.value)},e=o=>{l.value=[...l.value,o]};return O(l,()=>{d()}),d(),(o,c)=>{const m=ue;return _(),g("div",re,[(_(!0),g(N,null,R(i(r),(s,x)=>(_(),g("div",{key:x,class:"relative h-0 overflow-hidden pt-[100%] md:rounded-[5px] xl:rounded-[10px]"},[a("div",ce,[a("img",{src:s,class:"block h-full w-full object-cover",alt:""},null,8,me)])]))),128)),a("div",xe,[a("label",_e,[t(m,{multiple:"",class:"hidden",onUpdateInput:e})]),a("div",fe,[be,a("p",ge,y(o.$t("add_photo")),1)])])])}}}),ve=["onSubmit"],we={class:"flex flex-col items-start gap-[25px] md:gap-[40px] xl:gap-[100px] 2xl:flex-row 3xl:gap-[141px]"},$e={class:"flex w-full max-w-[700px] flex-col 2xl:basis-[50%] 4xl:basis-[60%]"},ye={class:"mt-[15px] flex flex-col gap-[15px] md:mt-[20px] xl:mt-[26px] xl:gap-[25px]"},Ve={class:"mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]"},ke={class:"flex items-center gap-[20px] md:gap-[35px]"},Ue={class:"flex items-center gap-[20px] md:gap-[35px]"},Ie={class:"mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]"},Pe={class:"grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]"},De={class:"col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3"},Ce={class:"flex items-center"},Oe={class:"col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2"},Se={class:"flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]"},Te={class:"w-full 2xl:basis-[50%] 4xl:basis-[40%]"},Be={class:"mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]"},lt=h({__name:"add_product",setup(f){const p=b(),l=b([]),r=b(1),u=()=>{const e=new FormData;return e.append("title_ua","Test Product"),e.append("title_en","Test Product"),e.append("description_ua","Test Product"),e.append("description_en","Test Product"),e.append("category_id",r.value),e.append("product_type","fixed"),e.append("product_images",l.value),e},d=()=>{J(`${K()}/product/create`,{method:"POST",body:u()}).then(e=>{console.log(e)})};return(e,o)=>{const c=le,m=q,s=E,x=ae,v=H,B=X,A=pe,L=ie,z=he,j=Q,F=ee;return _(),C(F,{title:e.$t("add_product.add_product")},{default:n(()=>[a("form",{action:"#",onSubmit:W(d,["prevent"])},[a("div",we,[a("div",$e,[t(c,{modelValue:i(p),"onUpdate:modelValue":o[0]||(o[0]=k=>V(p)?p.value=k:null)},null,8,["modelValue"]),a("div",ye,[w(t(s,{label:e.$t("add_product.enter_your_product_name")+":"},{default:n(()=>[t(m)]),_:1},8,["label"]),[[$,i(p)==="ua"]]),w(t(s,{label:e.$t("add_product.enter_your_product_name")+":"},{default:n(()=>[t(m)]),_:1},8,["label"]),[[$,i(p)==="en"]]),t(s,{label:e.$t("add_product.select_category")+":"},{default:n(()=>[t(x)]),_:1},8,["label"]),w(t(s,{label:e.$t("add_product.enter_product_description")+":"},{default:n(()=>[t(v,{class:"min-h-[120px] md:min-h-[179px]"})]),_:1},8,["label"]),[[$,i(p)==="ua"]]),w(t(s,{label:e.$t("add_product.enter_product_description")+":"},{default:n(()=>[t(v,{class:"min-h-[120px] md:min-h-[179px]"})]),_:1},8,["label"]),[[$,i(p)==="en"]])]),a("div",Ve,[a("div",ke,[t(s,{label:e.$t("add_product.minimum_order")+":"},{default:n(()=>[t(m,{class:"max-w-[110px] md:max-w-[220px] xl:max-w-[200px]"})]),_:1},8,["label"]),t(s,{label:e.$t("add_product.unit_measurement")+":"},{default:n(()=>[t(x,{class:"max-w-[70px] md:max-w-[110px]"})]),_:1},8,["label"])]),a("div",Ue,[t(s,{label:e.$t("add_product.type_packaging")+":",class:"w-full max-w-[150px] md:max-w-[310px] xl:max-w-[235px]"},{default:n(()=>[t(x)]),_:1},8,["label"]),t(s,{class:"w-full",label:e.$t("add_product.expiration_date")+":"},{default:n(()=>[t(m)]),_:1},8,["label"])])]),a("div",Ie,[a("h5",null,[t(B,{class:"xl:!text-[20px]"},{default:n(()=>[P(y(e.$t("price")),1)]),_:1})]),a("div",Pe,[a("div",De,[t(s,{label:e.$t("quantity")},{default:n(()=>[a("div",Ce,[t(s,{label:e.$t("from")+":",class:"!flex-row items-center !text-black"},{default:n(()=>[t(m,{class:"w-full max-w-[70px] md:max-w-[110px]"})]),_:1},8,["label"]),t(s,{label:e.$t("to")+":",class:"ml-[10px] !flex-row items-center !text-black md:ml-[20px]"},{default:n(()=>[t(m,{class:"w-full max-w-[70px] md:max-w-[110px]"})]),_:1},8,["label"])])]),_:1},8,["label"]),t(s,{label:e.$t("add_product.unit_measurement")+":",class:"ml-[10px] justify-items-start md:ml-[20px]"},{default:n(()=>[t(x,{class:"max-w-[90px] md:max-w-[110px]"})]),_:1},8,["label"])]),a("div",Oe,[t(s,{class:"relative z-50 4xl:max-w-[220px]",label:e.$t("add_product.enter_price")+":"},{default:n(()=>[t(A)]),_:1},8,["label"])])]),t(s,{label:e.$t("add_product.select_price_format")+":"},{default:n(()=>[a("div",Se,[t(x,{class:"w-full max-w-[130px] md:max-w-[220px] xl:max-w-[200px]"}),t(L,null,{default:n(()=>[P(y(e.$t("add_product.add_new_price")),1)]),_:1})])]),_:1},8,["label"])])]),a("div",Te,[t(z,{modelValue:i(l),"onUpdate:modelValue":o[1]||(o[1]=k=>V(l)?l.value=k:null)},null,8,["modelValue"])])]),a("div",Be,[t(j,{type:"submit"},{default:n(()=>[P(y(e.$t("add_product.add_product")),1)]),_:1})])],40,ve)]),_:1},8,["title"])}}});export{lt as default};
