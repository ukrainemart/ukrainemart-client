import{h as oe,_ as ae}from"./micro-task.6a91432a.js";import{c as O}from"./cn.a642df04.js";import{x as V,a as v,b as N,M as x,X as h,Y as p,a2 as D,u as n,I as e,O as d,_ as P,N as y,l as A,a6 as k,ah as pe,k as U,a1 as se,H,a4 as R,Z as C,a7 as S,a8 as T,ai as ue}from"./swiper-vue.8b827542.js";import{_ as B,a as L}from"./useFormGroup.6764cfe5.js";import{_ as q,a as E}from"./SelectMenu.70f96808.js";import{_ as de}from"./TextareaOutline.vue.84076790.js";import{_ as X,b as ie,c as ce,d as re}from"./entry.79a815a5.js";import{_ as me}from"./TextPortalPrimary.aa2f96da.js";import{w as M}from"./ui.config.ca5de95e.js";import _e from"./Cross.8b3fde18.js";import{_ as xe}from"./ButtonPrimary.vue.13170ba7.js";import{_ as fe}from"./ProfilePage.vue.90ac94d5.js";import"./nuxt-link.76253321.js";import"./ArrowDown.fa1c7b21.js";import"./nuxt-icon.114d749c.js";import"./ButtonText.vue.fec56f3e.js";import"./Icon.091023fe.js";import"./tw-merge.c357b9a7.js";import"./index.a17b4998.js";import"./usePopper.d4bc8382.js";import"./open-closed.7523edd9.js";const be={class:"relative flex w-fit overflow-hidden rounded-[5px] border border-black md:rounded-[7px] xl:rounded-[10px]"},ve=V({__name:"LangSwitcherInputs",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:c}){const t=v("ua"),a=l=>{t.value=l},s=c,i=()=>{s("update:modelValue",t.value)};return N(t,()=>{i()}),i(),(l,u)=>{const m=oe;return x(),h("div",be,[p("span",{class:D(("cn"in l?l.cn:n(O))("absolute top-0 h-full w-[50%] rounded-[3px] bg-black duration-200 md:rounded-[5px] xl:rounded-[7px]",{"translate-x-[100%]":n(t)==="en"}))},null,2),e(m,{class:D(("cn"in l?l.cn:n(O))("text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":n(t)==="ua"})),onClick:u[0]||(u[0]=_=>a("ua"))},{default:d(()=>[P(" ua ")]),_:1},8,["class"]),e(m,{class:D(("cn"in l?l.cn:n(O))("text_xs  relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":n(t)==="en"})),onClick:u[1]||(u[1]=_=>a("en"))},{default:d(()=>[P(" en ")]),_:1},8,["class"])])}}}),z=V({__name:"SelectOutline",props:{currentValue:{}},setup(b){return(c,t)=>{const a=q,s=E;return x(),y(s,{class:"input_outline !p-0",uiMenu:{background:"bg-background-primary",container:"!top-0 !left-0 !transform-none",rounded:"rounded-[10px] md:rounded-[20px]",padding:"p-0",base:"border border-black py-[5px] md:py-[10px] !pt-[30px] md:!pt-[40px]",option:{base:"input_outline_text",padding:"px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]",active:"bg-[#D9D9D9] rounded-none",selectedIcon:{base:"hidden"}}}},{default:d(({open:i})=>[e(a,{style:{"text-transform":"inherit"},class:"input_outline_text input_outline_height relative z-40 w-full justify-between !px-[9px] text-[7px] normal-case md:!px-[14px] xl:!px-[19px]",label:c.currentValue,open:i},null,8,["label","open"])]),_:1})}}}),ge={};function we(b,c){const t=z;return x(),y(t,{class:"max-w-[90px] md:max-w-[110px]"})}const F=X(ge,[["render",we]]),he={class:"input_outline flex items-stretch !p-0"},Y=V({__name:"PriceInputOutline",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:c}){const t=v(""),a=[{value:"UAH",name:"UAH"},{value:"USD",name:"USD"}],s=v(a[0].value),i=A(()=>a.find(m=>m.value===s.value)),l=c,u=()=>{const m=t.value+s.value;l("update:modelValue",m)};return(m,_)=>{const $=q,o=E;return x(),h("div",he,[k(p("input",{"onUpdate:modelValue":_[0]||(_[0]=r=>U(t)?t.value=r:null),type:"number",class:"input_without_arrow input_outline_padding w-full basis-full bg-transparent focus:outline-none",onInput:u},null,544),[[pe,n(t)]]),e(o,{modelValue:n(s),"onUpdate:modelValue":_[1]||(_[1]=r=>U(s)?s.value=r:null),options:a,"value-attribute":"value","option-attribute":"name",class:"border-l border-black",uiMenu:{background:"bg-background-primary",padding:"p-0",base:"py-[5px] md:py-[10px]",option:{base:"",padding:"px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]",active:"bg-[#D9D9D9] rounded-none",selectedIcon:{base:"hidden"}}}},{default:d(({open:r})=>{var I;return[e($,{class:"input_outline_padding input_outline_height normal-case 4xl:!text-[14px]",label:(I=n(i))==null?void 0:I.name,open:r},null,8,["label","open"])]}),_:1},8,["modelValue"])])}}}),$e={class:"grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]"},Ve={class:"col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3"},ye={class:"flex items-center"},Ue={class:"col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2"},Ie=V({__name:"InputGroupPriceGap",props:{price:{}},emits:["update:price"],setup(b,{emit:c}){const a=v({id:b.price.id,minAmount:"",maxAmount:"",price:"",unitId:0}),s=c,i=()=>{s("update:price",a.value)};return M(a,()=>{i()}),(l,u)=>{const m=B,_=L,$=F,o=Y;return x(),h("div",$e,[p("div",Ve,[e(_,{label:l.$t("quantity")},{default:d(()=>[p("div",ye,[e(_,{label:l.$t("from")+":",class:"!flex-row items-center !text-black"},{default:d(()=>[e(m,{modelValue:n(a).minAmount,"onUpdate:modelValue":u[0]||(u[0]=r=>n(a).minAmount=r),type:"number",class:"w-full max-w-[70px] md:max-w-[110px]"},null,8,["modelValue"])]),_:1},8,["label"]),e(_,{label:l.$t("to")+":",class:"ml-[10px] !flex-row items-center !text-black md:ml-[20px]"},{default:d(()=>[e(m,{modelValue:n(a).maxAmount,"onUpdate:modelValue":u[1]||(u[1]=r=>n(a).maxAmount=r),type:"number",class:"w-full max-w-[70px] md:max-w-[110px]"},null,8,["modelValue"])]),_:1},8,["label"])])]),_:1},8,["label"]),e(_,{label:l.$t("add_product.unit_measurement")+":",class:"ml-[10px] justify-items-start md:ml-[20px]"},{default:d(()=>[e($,{class:"max-w-[90px] md:max-w-[110px]"})]),_:1},8,["label"])]),p("div",Ue,[e(_,{class:"relative z-50 4xl:max-w-none",label:l.$t("add_product.enter_price")+":"},{default:d(()=>[e(o,{modelValue:n(a).price,"onUpdate:modelValue":u[2]||(u[2]=r=>n(a).price=r)},null,8,["modelValue"])]),_:1},8,["label"])])])}}}),ke={class:"grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]"},Pe={class:"col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3"},Se={class:"flex w-full items-center"},Ce={class:"col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2"},Ae=V({__name:"InputGroupPriceFixed",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:c}){const t=v({amount:"",price:"",unitId:0}),a=c,s=()=>{a("update:modelValue",t.value)};return M(t,()=>{s()}),(i,l)=>{const u=B,m=L,_=F,$=Y;return x(),h("div",ke,[p("div",Pe,[e(m,{label:i.$t("quantity")+":",class:"w-full"},{default:d(()=>[p("div",Se,[e(u,{modelValue:n(t).amount,"onUpdate:modelValue":l[0]||(l[0]=o=>n(t).amount=o),type:"number",class:"w-full"},null,8,["modelValue"])])]),_:1},8,["label"]),e(m,{label:i.$t("add_product.unit_measurement")+":",class:"ml-[10px] justify-items-start md:ml-[20px]"},{default:d(()=>[e(_,{class:"max-w-[90px] md:max-w-[110px]"})]),_:1},8,["label"])]),p("div",Ce,[e(m,{class:"relative z-50 4xl:max-w-none",label:i.$t("add_product.enter_price")+":"},{default:d(()=>[e($,{modelValue:n(t).price,"onUpdate:modelValue":l[1]||(l[1]=o=>n(t).price=o)},null,8,["modelValue"])]),_:1},8,["label"])])])}}}),Oe=V({__name:"SelectPriceVariant",props:{selected:{}},setup(b){const c=b,{t}=ie(),a=A(()=>[{title:`${t("from")} - ${t("to")}`,value:"variated"},{title:t("fixed_price"),value:"fixed"}]),s=A(()=>{const i=a.value.find(l=>l.value===c.selected);return i==null?void 0:i.title});return(i,l)=>{const u=z;return x(),y(u,{currentValue:n(s),options:n(a),"value-attribute":"value","option-attribute":"title",class:"w-full max-w-[130px] lowercase md:max-w-[220px] xl:max-w-[200px]"},null,8,["currentValue","options"])}}}),De={};function Te(b,c){const t=_e,a=ae;return x(),y(a,{class:"flex items-center gap-[10px] text-[7px] md:text-[10px] xl:text-[14px]"},{default:d(()=>[p("span",null,[e(t)]),p("span",null,[se(b.$slots,"default")])]),_:3})}const Be=X(De,[["render",Te]]),Le=V({__name:"InputFile",props:{typeInput:{},multiple:{type:Boolean}},emits:["updateInput"],setup(b,{emit:c}){const t=b,a=c,s=v(null),i=()=>{const l=s.value.files[0];l.value=l,a("updateInput",l.value,t==null?void 0:t.typeInput)};return(l,u)=>(x(),h("input",{id:"inp_file_popup",ref_key:"fileUpload",ref:s,class:"input_photo",type:"file",name:"inp_file_popup",onChange:u[0]||(u[0]=m=>i())},null,544))}}),Me={class:"grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4"},ze={class:"absolute left-0 top-0 z-10 h-full w-full"},Fe=["src"],je={class:"relative h-0 overflow-hidden rounded-[3px] bg-[#D9D9D9] pt-[100%] md:rounded-[5px] xl:rounded-[10px]"},Ge={class:"absolute left-0 top-0 z-10 h-full w-full cursor-pointer"},Ne={class:"absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"},He=p("span",{class:"relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-black after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-black md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"},null,-1),Re={class:"text_xs font-medium"},qe=V({__name:"AddingPhoto",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:c}){const t=v([]),a=A(()=>t.value.map(u=>URL.createObjectURL(u.value))),s=c,i=()=>{s("update:modelValue",t.value)},l=u=>{t.value=[...t.value,u]};return N(t,()=>{i()}),i(),(u,m)=>{const _=Le;return x(),h("div",Me,[(x(!0),h(H,null,R(n(a),($,o)=>(x(),h("div",{key:o,class:"relative h-0 overflow-hidden pt-[100%] md:rounded-[5px] xl:rounded-[10px]"},[p("div",ze,[p("img",{src:$,class:"block h-full w-full object-cover",alt:""},null,8,Fe)])]))),128)),p("div",je,[p("label",Ge,[e(_,{multiple:"",class:"hidden",onUpdateInput:l})]),p("div",Ne,[He,p("p",Re,C(u.$t("add_photo")),1)])])])}}}),Ee=["onSubmit"],Xe={class:"flex flex-col items-start gap-[25px] md:gap-[40px] xl:gap-[100px] 2xl:flex-row 3xl:gap-[141px]"},Ye={class:"flex w-full max-w-[700px] flex-col 2xl:basis-[50%] 4xl:basis-[60%]"},Ze={class:"mt-[15px] flex flex-col gap-[15px] md:mt-[20px] xl:mt-[26px] xl:gap-[25px]"},Je={class:"mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]"},Ke={class:"flex items-center gap-[20px] md:gap-[35px]"},Qe={class:"flex items-center gap-[20px] md:gap-[35px]"},We={class:"mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]"},et={key:0,class:"flex flex-col gap-[15px] xl:gap-[25px]"},tt={class:"flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]"},lt={class:"w-full 2xl:basis-[50%] 4xl:basis-[40%]"},nt={class:"mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]"},Ut=V({__name:"add_product",setup(b){const c=v(),t=v([]),a=v(1),s=v(""),i=v(),l=v([{id:1,minAmount:"",maxAmount:"",price:"",unitId:0}]),u=()=>{const o={id:l.value[l.value.length-1].id+1,minAmount:"",maxAmount:"",price:"",unitId:0};l.value=[...l.value,o]},m=o=>{l.value=l.value.map(r=>r.id===o.id?o:r)},_=()=>{const f=new FormData;return f.append("title_ua","Test Product"),f.append("title_en","Test Product"),f.append("description_ua","Test Product"),f.append("description_en","Test Product"),f.append("category_id",a.value),f.append("price_type","fixed"),f.append("amount",22),f.append("price",34),f.append("unit_id",0),f.append("product_images",t.value),f},$=()=>{ce(`${re()}/product/create`,{method:"POST",body:_()}).then(o=>{console.log(o)})};return M(()=>l.value,()=>{console.log(l.value)}),(o,r)=>{const I=ve,f=B,g=L,j=z,G=de,Z=F,J=me,K=Ie,Q=Ae,W=Oe,ee=Be,te=qe,le=xe,ne=fe;return x(),y(ne,{title:o.$t("add_product.add_product")},{default:d(()=>[p("form",{action:"#",onSubmit:ue($,["prevent"])},[p("div",Xe,[p("div",Ye,[e(I,{modelValue:n(c),"onUpdate:modelValue":r[0]||(r[0]=w=>U(c)?c.value=w:null)},null,8,["modelValue"]),p("div",Ze,[k(e(g,{label:o.$t("add_product.enter_your_product_name")+":"},{default:d(()=>[e(f)]),_:1},8,["label"]),[[S,n(c)==="ua"]]),k(e(g,{label:o.$t("add_product.enter_your_product_name")+":"},{default:d(()=>[e(f)]),_:1},8,["label"]),[[S,n(c)==="en"]]),e(g,{label:o.$t("add_product.select_category")+":"},{default:d(()=>[e(j)]),_:1},8,["label"]),k(e(g,{label:o.$t("add_product.enter_product_description")+":"},{default:d(()=>[e(G,{class:"min-h-[120px] md:min-h-[179px]"})]),_:1},8,["label"]),[[S,n(c)==="ua"]]),k(e(g,{label:o.$t("add_product.enter_product_description")+":"},{default:d(()=>[e(G,{class:"min-h-[120px] md:min-h-[179px]"})]),_:1},8,["label"]),[[S,n(c)==="en"]])]),p("div",Je,[p("div",Ke,[e(g,{label:o.$t("add_product.minimum_order")+":"},{default:d(()=>[e(f,{class:"max-w-[110px] md:max-w-[220px] xl:max-w-[200px]"})]),_:1},8,["label"]),e(g,{label:o.$t("add_product.unit_measurement")+":"},{default:d(()=>[e(Z,{class:"max-w-[70px] md:max-w-[110px]"})]),_:1},8,["label"])]),p("div",Qe,[e(g,{label:o.$t("add_product.type_packaging")+":",class:"w-full max-w-[150px] md:max-w-[310px] xl:max-w-[235px]"},{default:d(()=>[e(j)]),_:1},8,["label"]),e(g,{class:"w-full",label:o.$t("add_product.expiration_date")+":"},{default:d(()=>[e(f)]),_:1},8,["label"])])]),p("div",We,[p("h5",null,[e(J,{class:"xl:!text-[20px]"},{default:d(()=>[P(C(o.$t("price")),1)]),_:1})]),n(s)==="variated"?(x(),h("div",et,[(x(!0),h(H,null,R(n(l),w=>(x(),y(K,{key:w.id,price:w,"onUpdate:price":m},null,8,["price"]))),128))])):T("",!0),n(s)==="fixed"?(x(),y(Q,{key:1,modelValue:n(i),"onUpdate:modelValue":r[1]||(r[1]=w=>U(i)?i.value=w:null)},null,8,["modelValue"])):T("",!0),e(g,{label:o.$t("add_product.select_price_format")+":"},{default:d(()=>[p("div",tt,[e(W,{modelValue:n(s),"onUpdate:modelValue":r[2]||(r[2]=w=>U(s)?s.value=w:null),selected:n(s)},null,8,["modelValue","selected"]),n(s)==="variated"?(x(),y(ee,{key:0,onClick:u},{default:d(()=>[P(C(o.$t("add_product.add_new_price")),1)]),_:1})):T("",!0)])]),_:1},8,["label"])])]),p("div",lt,[e(te,{modelValue:n(t),"onUpdate:modelValue":r[3]||(r[3]=w=>U(t)?t.value=w:null)},null,8,["modelValue"])])]),p("div",nt,[e(le,{type:"submit"},{default:d(()=>[P(C(o.$t("add_product.add_product")),1)]),_:1})])],40,Ee)]),_:1},8,["title"])}}});export{Ut as default};