import{h as oe,_ as ae}from"./micro-task.b2c9f384.js";import{c as z}from"./cn.a642df04.js";import{x as $,a as V,b as J,M as b,X as w,Y as _,a2 as F,u as t,I as a,O as x,_ as S,N as P,i as G,l as h,a6 as C,ah as pe,k as I,a1 as se,Z as T,H as X,a4 as Y,a8 as j,r as ue,z as ie,a7 as D,ai as de}from"./swiper-vue.8b827542.js";import{_ as N,a as B}from"./useFormGroup.b728bc7d.js";import{_ as Z,a as K}from"./SelectMenu.4b2e70d4.js";import{_ as re}from"./TextareaOutline.vue.0167452f.js";import{_ as ce}from"./TextPortalPrimary.03bef076.js";import{w as L}from"./ui.config.7ed31e28.js";import{b as me,_ as _e,c as H,d as R}from"./entry.7c0ed1a0.js";import xe from"./Cross.39528423.js";import{_ as fe}from"./ButtonPrimary.vue.74191220.js";import{_ as ve}from"./ProfilePage.vue.93b48b04.js";import{u as E}from"./useMultiLang.44b0abf1.js";import"./nuxt-link.c401f309.js";import"./ArrowDown.40384ce1.js";import"./nuxt-icon.3b6385eb.js";import"./ButtonText.vue.32ecb00d.js";import"./Icon.3e038066.js";import"./tw-merge.140655a8.js";import"./index.b950ea37.js";import"./usePopper.30f6dbf5.js";import"./open-closed.7523edd9.js";const be={class:"relative flex w-fit overflow-hidden rounded-[5px] border border-black md:rounded-[7px] xl:rounded-[10px]"},ge=$({__name:"LangSwitcherInputs",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:r}){const e=V("ua"),l=s=>{e.value=s},i=r,c=()=>{i("update:modelValue",e.value)};return J(e,()=>{c()}),c(),(s,u)=>{const o=oe;return b(),w("div",be,[_("span",{class:F(("cn"in s?s.cn:t(z))("absolute top-0 h-full w-[50%] rounded-[3px] bg-black duration-200 md:rounded-[5px] xl:rounded-[7px]",{"translate-x-[100%]":t(e)==="en"}))},null,2),a(o,{class:F(("cn"in s?s.cn:t(z))("text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":t(e)==="ua"})),onClick:u[0]||(u[0]=m=>l("ua"))},{default:x(()=>[S(" ua ")]),_:1},8,["class"]),a(o,{class:F(("cn"in s?s.cn:t(z))("text_xs  relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":t(e)==="en"})),onClick:u[1]||(u[1]=m=>l("en"))},{default:x(()=>[S(" en ")]),_:1},8,["class"])])}}}),q=$({__name:"SelectOutline",props:{currentValue:{}},setup(g){return(r,e)=>{const l=Z,i=K;return b(),P(i,{class:"input_outline !p-0",uiMenu:{background:"bg-background-primary",container:"!top-0 !left-0 !transform-none",rounded:"rounded-[10px] md:rounded-[16px]",padding:"p-0",base:"border border-black py-[5px] md:py-[10px] !pt-[30px] md:!pt-[40px]",option:{base:"input_outline_text",padding:"px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]",active:"bg-[#D9D9D9] rounded-none",selectedIcon:{base:"hidden"}}}},{default:x(({open:c})=>[a(l,{style:{"text-transform":"inherit"},class:"input_outline_text input_outline_height relative z-40 w-full justify-between !px-[9px] text-[7px] normal-case md:!px-[14px] xl:!px-[19px]",label:r.currentValue,open:c},null,8,["label","open"])]),_:1})}}}),Q=$({__name:"SelectUnitMeasure",setup(g){const r=G("unitOptions");return(e,l)=>{const i=q;return b(),P(i,{options:t(r),class:"relative z-[60] max-w-[90px] md:max-w-[110px]","value-attribute":"id","option-attribute":"title"},null,8,["options"])}}}),Ve={class:"input_outline flex items-stretch !p-0"},W=$({__name:"PriceInputOutline",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:r}){const e=V(""),l=[{value:"UAH",name:"UAH"},{value:"USD",name:"USD"}],i=V(l[0].value),c=h(()=>l.find(o=>o.value===i.value)),s=r,u=()=>{const o=e.value;s("update:modelValue",o)};return(o,m)=>{const y=Z,d=K;return b(),w("div",Ve,[C(_("input",{"onUpdate:modelValue":m[0]||(m[0]=f=>I(e)?e.value=f:null),type:"number",class:"input_without_arrow input_outline_padding w-full basis-full bg-transparent focus:outline-none",onInput:u},null,544),[[pe,t(e)]]),a(d,{modelValue:t(i),"onUpdate:modelValue":m[1]||(m[1]=f=>I(i)?i.value=f:null),options:l,"value-attribute":"value","option-attribute":"name",class:"border-l border-black",uiMenu:{background:"bg-background-primary",padding:"p-0",base:"py-[5px] md:py-[10px]",option:{base:"",padding:"px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]",active:"bg-[#D9D9D9] rounded-none",selectedIcon:{base:"hidden"}}}},{default:x(({open:f})=>{var n;return[a(y,{class:"input_outline_padding input_outline_height normal-case 4xl:!text-[14px]",label:(n=t(c))==null?void 0:n.name,open:f},null,8,["label","open"])]}),_:1},8,["modelValue"])])}}}),ye={class:"grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]"},we={class:"col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3"},$e={class:"flex items-center"},Ue={class:"col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2"},he=$({__name:"InputGroupPriceGap",props:{price:{}},emits:["update:price"],setup(g,{emit:r}){const l=V({id:g.price.id,minAmount:"",maxAmount:"",price:"",unitId:""}),i=r,c=G("unitOptions"),s=h(()=>{var o;return((o=c.value)==null?void 0:o.find(m=>m.id===+l.value.unitId))||""}),u=()=>{i("update:price",l.value)};return L(l,()=>{u()}),(o,m)=>{const y=N,d=B,f=Q,n=W;return b(),w("div",ye,[_("div",we,[a(d,{label:o.$t("quantity")},{default:x(()=>[_("div",$e,[a(d,{label:o.$t("from")+":",class:"!flex-row items-center !text-black"},{default:x(()=>[a(y,{modelValue:t(l).minAmount,"onUpdate:modelValue":m[0]||(m[0]=p=>t(l).minAmount=p),type:"number",class:"w-full max-w-[70px] md:max-w-[110px]"},null,8,["modelValue"])]),_:1},8,["label"]),a(d,{label:o.$t("to")+":",class:"ml-[10px] !flex-row items-center !text-black md:ml-[20px]"},{default:x(()=>[a(y,{modelValue:t(l).maxAmount,"onUpdate:modelValue":m[1]||(m[1]=p=>t(l).maxAmount=p),type:"number",class:"w-full max-w-[70px] md:max-w-[110px]"},null,8,["modelValue"])]),_:1},8,["label"])])]),_:1},8,["label"]),a(d,{label:o.$t("add_product.unit_measurement")+":",class:"ml-[10px] justify-items-start md:ml-[20px]"},{default:x(()=>[a(f,{modelValue:t(l).unitId,"onUpdate:modelValue":m[2]||(m[2]=p=>t(l).unitId=p),currentValue:t(s).title,class:"max-w-[90px] md:max-w-[110px]"},null,8,["modelValue","currentValue"])]),_:1},8,["label"])]),_("div",Ue,[a(d,{class:"relative z-50 4xl:max-w-none",label:o.$t("add_product.enter_price")+":"},{default:x(()=>[a(n,{modelValue:t(l).price,"onUpdate:modelValue":m[3]||(m[3]=p=>t(l).price=p)},null,8,["modelValue"])]),_:1},8,["label"])])])}}}),Ie={class:"grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]"},Pe={class:"col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3"},ke={class:"flex w-full items-center"},Oe={class:"col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2"},Ce=$({__name:"InputGroupPriceFixed",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:r}){const e=V({amount:"",price:"",unitId:""}),l=G("unitOptions"),i=r,c=()=>{i("update:modelValue",e.value)},s=h(()=>{var u;return((u=l.value)==null?void 0:u.find(o=>o.id===+e.value.unitId))||""});return L(e,()=>{c()}),(u,o)=>{const m=N,y=B,d=Q,f=W;return b(),w("div",Ie,[_("div",Pe,[a(y,{label:u.$t("quantity")+":",class:"w-full"},{default:x(()=>[_("div",ke,[a(m,{modelValue:t(e).amount,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).amount=n),required:"",type:"number",class:"w-full"},null,8,["modelValue"])])]),_:1},8,["label"]),a(y,{label:u.$t("add_product.unit_measurement")+":",class:"ml-[10px] justify-items-start md:ml-[20px]"},{default:x(()=>[a(d,{modelValue:t(e).unitId,"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).unitId=n),currentValue:t(s).title,class:"max-w-[90px] md:max-w-[110px]"},null,8,["modelValue","currentValue"])]),_:1},8,["label"])]),_("div",Oe,[a(y,{class:"relative z-50 4xl:max-w-none",label:u.$t("add_product.enter_price")+":"},{default:x(()=>[a(f,{modelValue:t(e).price,"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).price=n)},null,8,["modelValue"])]),_:1},8,["label"])])])}}}),Se=$({__name:"SelectPriceVariant",props:{selected:{}},setup(g){const r=g,{t:e}=me(),l=h(()=>[{title:`${e("from")} - ${e("to")}`,value:"variated"},{title:e("fixed_price"),value:"fixed"}]),i=h(()=>{const c=l.value.find(s=>s.value===r.selected);return c==null?void 0:c.title});return(c,s)=>{const u=q;return b(),P(u,{currentValue:t(i),options:t(l),"value-attribute":"value","option-attribute":"title",class:"w-full max-w-[130px] lowercase md:max-w-[220px] xl:max-w-[200px]"},null,8,["currentValue","options"])}}}),Ae={};function De(g,r){const e=xe,l=ae;return b(),P(l,{class:"flex items-center gap-[10px] text-[7px] md:text-[10px] xl:text-[14px]"},{default:x(()=>[_("span",null,[a(e)]),_("span",null,[se(g.$slots,"default")])]),_:3})}const Te=_e(Ae,[["render",De]]),Le={class:"mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]"},Be={key:0,class:"flex flex-col gap-[15px] xl:gap-[25px]"},Me={class:"flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]"},ze=$({__name:"InputGroupPrice",props:{fixedPrice:{},variatedPrices:{},priceType:{}},emits:["update:fixedPrice","update:variatedPrices","update:priceType"],setup(g,{emit:r}){const e=r,l=d=>{e("update:fixedPrice",d)},i=d=>{console.log(d),e("update:variatedPrices",d)},c=d=>{e("update:priceType",d)},s=V(""),u=V({amount:"",price:"",unitId:""}),o=V([{id:1,minAmount:"",maxAmount:"",price:"",unitId:""}]);L(u,()=>{l(u.value)}),L(o,()=>{i(o.value)});const m=()=>{const d={id:o.value[o.value.length-1].id+1,minAmount:"",maxAmount:"",price:"",unitId:""};o.value=[...o.value,d]},y=d=>{o.value=o.value.map(f=>f.id===d.id?d:f)};return(d,f)=>{const n=ce,p=he,O=Ce,A=Se,k=Te,M=B;return b(),w("div",Le,[_("h5",null,[a(n,{class:"xl:!text-[20px]"},{default:x(()=>[S(T(d.$t("price")),1)]),_:1})]),t(s)==="variated"?(b(),w("div",Be,[(b(!0),w(X,null,Y(t(o),U=>(b(),P(p,{key:U.id,price:U,"onUpdate:price":y},null,8,["price"]))),128))])):j("",!0),t(s)==="fixed"?(b(),P(O,{key:1,modelValue:t(u),"onUpdate:modelValue":f[0]||(f[0]=U=>I(u)?u.value=U:null)},null,8,["modelValue"])):j("",!0),a(M,{label:d.$t("add_product.select_price_format")+":"},{default:x(()=>[_("div",Me,[a(A,{modelValue:t(s),"onUpdate:modelValue":f[1]||(f[1]=U=>I(s)?s.value=U:null),selected:t(s),onChange:f[2]||(f[2]=U=>c(t(s)))},null,8,["modelValue","selected"]),t(s)==="variated"?(b(),P(k,{key:0,onClick:m},{default:x(()=>[S(T(d.$t("add_product.add_new_price")),1)]),_:1})):j("",!0)])]),_:1},8,["label"])])}}}),Fe=$({__name:"InputFile",props:{typeInput:{},multiple:{type:Boolean}},emits:["updateInput"],setup(g,{emit:r}){const e=g,l=r,i=V(null),c=()=>{const s=i.value.files[0];s.value=s,l("updateInput",s.value,e==null?void 0:e.typeInput)};return(s,u)=>(b(),w("input",{id:"inp_file_popup",ref_key:"fileUpload",ref:i,class:"input_photo",type:"file",name:"inp_file_popup",onChange:u[0]||(u[0]=o=>c())},null,544))}}),je={class:"grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4"},Ge={class:"absolute left-0 top-0 z-10 h-full w-full"},Ne=["src"],qe={class:"relative h-0 overflow-hidden rounded-[3px] bg-[#D9D9D9] pt-[100%] md:rounded-[5px] xl:rounded-[10px]"},He={class:"absolute left-0 top-0 z-10 h-full w-full cursor-pointer"},Re={class:"absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"},Ee=_("span",{class:"relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-black after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-black md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"},null,-1),Je={class:"text_xs font-medium"},Xe=$({__name:"AddingPhoto",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:r}){const e=V([]),l=h(()=>e.value.map(u=>URL.createObjectURL(u.value))),i=r,c=()=>{i("update:modelValue",e.value)},s=u=>{e.value=[...e.value,u]};return J(e,()=>{c()}),c(),(u,o)=>{const m=Fe;return b(),w("div",je,[(b(!0),w(X,null,Y(t(l),(y,d)=>(b(),w("div",{key:d,class:"relative h-0 overflow-hidden pt-[100%] md:rounded-[5px] xl:rounded-[10px]"},[_("div",Ge,[_("img",{src:y,class:"block h-full w-full object-cover",alt:""},null,8,Ne)])]))),128)),_("div",qe,[_("label",He,[a(m,{multiple:"",class:"hidden",onUpdateInput:s})]),_("div",Re,[Ee,_("p",Je,T(u.$t("add_photo")),1)])])])}}}),Ye=["onSubmit"],Ze={class:"flex flex-col items-start gap-[25px] md:gap-[40px] xl:gap-[100px] 2xl:flex-row 3xl:gap-[141px]"},Ke={class:"flex w-full max-w-[700px] flex-col 2xl:basis-[50%] 4xl:basis-[60%]"},Qe={class:"mt-[15px] flex flex-col gap-[15px] md:mt-[20px] xl:mt-[26px] xl:gap-[25px]"},We={class:"w-full 2xl:basis-[50%] 4xl:basis-[40%]"},et={class:"mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]"},$t=$({__name:"add_product",setup(g){const r=V(),e=ue({title_ua:"",title_en:"",description_ua:"",description_en:"",price_type:"",categoryId:""}),l=V(),i=V([]),c=V([]),s=V(),u=h(()=>{var n,p;return((p=(n=s.value)==null?void 0:n.categories)==null?void 0:p.map(O=>({id:O.id,title:E(O,"title")})))||[]}),o=h(()=>u.value.find(n=>n.id===+e.categoryId)||""),m=h(()=>{var n;return((n=s.value)==null?void 0:n.units.map(p=>({id:p.id,title:E(p,"title")})))||[]}),y=()=>{H(`${R()}/product/actionPage`).then(n=>{s.value=n.data.value})},d=()=>{const n=new FormData;n.append("title_ua",e.title_ua),n.append("title_en",e.title_en),n.append("description_ua",e.description_ua),n.append("description_en",e.description_en),n.append("category_id",`${e.categoryId}`),n.append("price_type",e.price_type),l.value&&(n.append("amount",l.value.amount),n.append("price",l.value.price),n.append("unit_id",l.value.unitId)),i.value.length>0&&n.append("price_variations",JSON.stringify(i.value));for(const p of c.value)n.append("product_images[]",p);return n},f=()=>{H(`${R()}/product/create`,{method:"POST",body:d()}).then(n=>{console.log(n)})};return y(),ie("unitOptions",m),(n,p)=>{const O=ge,A=N,k=B,M=q,U=re,ee=ze,te=Xe,ne=fe,le=ve;return b(),P(le,{title:n.$t("add_product.add_product")},{default:x(()=>[_("form",{action:"#",onSubmit:de(f,["prevent"])},[_("div",Ze,[_("div",Ke,[a(O,{modelValue:t(r),"onUpdate:modelValue":p[0]||(p[0]=v=>I(r)?r.value=v:null)},null,8,["modelValue"]),_("div",Qe,[C(a(k,{label:n.$t("add_product.enter_your_product_name")+":"},{default:x(()=>[a(A,{modelValue:t(e).title_ua,"onUpdate:modelValue":p[1]||(p[1]=v=>t(e).title_ua=v)},null,8,["modelValue"])]),_:1},8,["label"]),[[D,t(r)==="ua"]]),C(a(k,{label:n.$t("add_product.enter_your_product_name")+":"},{default:x(()=>[a(A,{modelValue:t(e).title_en,"onUpdate:modelValue":p[2]||(p[2]=v=>t(e).title_en=v)},null,8,["modelValue"])]),_:1},8,["label"]),[[D,t(r)==="en"]]),a(k,{label:n.$t("add_product.select_category")+":"},{default:x(()=>[a(M,{modelValue:t(e).categoryId,"onUpdate:modelValue":p[3]||(p[3]=v=>t(e).categoryId=v),options:t(u),currentValue:t(o).title,"value-attribute":"id","option-attribute":"title"},null,8,["modelValue","options","currentValue"])]),_:1},8,["label"]),C(a(k,{label:n.$t("add_product.enter_product_description")+":"},{default:x(()=>[a(U,{modelValue:t(e).description_ua,"onUpdate:modelValue":p[4]||(p[4]=v=>t(e).description_ua=v),class:"min-h-[120px] md:min-h-[179px]"},null,8,["modelValue"])]),_:1},8,["label"]),[[D,t(r)==="ua"]]),C(a(k,{label:n.$t("add_product.enter_product_description")+":"},{default:x(()=>[a(U,{modelValue:t(e).description_en,"onUpdate:modelValue":p[5]||(p[5]=v=>t(e).description_en=v),class:"min-h-[120px] md:min-h-[179px]"},null,8,["modelValue"])]),_:1},8,["label"]),[[D,t(r)==="en"]])]),a(ee,{fixedPrice:t(l),"onUpdate:fixedPrice":p[6]||(p[6]=v=>I(l)?l.value=v:null),variatedPrices:t(i),"onUpdate:variatedPrices":p[7]||(p[7]=v=>I(i)?i.value=v:null),priceType:t(e).price_type,"onUpdate:priceType":p[8]||(p[8]=v=>t(e).price_type=v)},null,8,["fixedPrice","variatedPrices","priceType"])]),_("div",We,[a(te,{modelValue:t(c),"onUpdate:modelValue":p[9]||(p[9]=v=>I(c)?c.value=v:null)},null,8,["modelValue"])])]),_("div",et,[a(ne,{type:"submit"},{default:x(()=>[S(T(n.$t("add_product.add_product")),1)]),_:1})])],40,Ye)]),_:1},8,["title"])}}});export{$t as default};
