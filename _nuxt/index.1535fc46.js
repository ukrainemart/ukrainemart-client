import{a as S,_ as B}from"./InputOutline.vue.9e1f9fb4.js";import{_ as F}from"./SelectOutline.vue.b6b019c8.js";import{_ as X}from"./TextareaOutline.vue.576e552b.js";import{_ as Y}from"./PhoneInputOutline.vue.56d28d67.js";import{_ as Z}from"./TextPortalPrimary.2b13390c.js";import{_ as q,g as I,f as z,c as D}from"./entry.db17a787.js";import{M as r,N as d,O as s,a1 as H,x as A,l as f,X as J,u as a,I as l,a3 as y,Y as P,_ as N,Z as T,a as C}from"./swiper-vue.33fa7a2f.js";import{_ as L}from"./ButtonPrimary.vue.38b2810f.js";import{_ as K}from"./ProfilePage.vue.805a84f3.js";import{u as Q}from"./useMultiLang.ed4950c2.js";import{u as O}from"./useApi.ba86656b.js";import"./index.8d4c6482.js";import"./cn.a642df04.js";import"./SelectMenu.eb746063.js";import"./ArrowDown.5ac36dc9.js";import"./nuxt-icon.2fb03c0d.js";import"./ButtonText.vue.6539bff7.js";import"./nuxt-link.870819f1.js";import"./open-closed.1bd85e86.js";import"./ui.config.23297fa3.js";import"./micro-task.649043b7.js";import"./disposables.48db5984.js";import"./use-resolve-button-type.7011a3ea.js";const R={};function W(w,_){const i=Z;return r(),d(i,{class:"!text-[#319F43]"},{default:s(()=>[H(w.$slots,"default")]),_:3})}const ee=q(R,[["render",W]]),ae={class:"mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"},oe={class:"col-span-2 flex justify-center"},te=A({__name:"ProfileChangePassword",setup(w){const _=I(),i=f(()=>_.isGoogleUser);return(n,g)=>{const u=S,e=B,x=L;return r(),J("div",ae,[a(i)?y("",!0):(r(),d(e,{key:0,class:"row-span-1",label:n.$t("password_change.old_password")+":"},{default:s(()=>[l(u)]),_:1},8,["label"])),l(e,{class:"row-span-1",label:(a(i)?n.$t("password"):n.$t("password_change.new_password"))+":"},{default:s(()=>[l(u)]),_:1},8,["label"]),l(e,{class:"row-span-1",label:n.$t("repeatPassword")+":"},{default:s(()=>[l(u)]),_:1},8,["label"]),P("div",oe,[l(x,{class:"w-fit"},{default:s(()=>[N(T(a(i)?n.$t("password_change.set_password"):n.$t("change_password")),1)]),_:1})])])}}}),le={class:"max-w-[1190px]"},se={class:"grid grid-cols-1 gap-y-[15px] sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[84px] md:gap-y-[20px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"},Te=A({__name:"index",setup(w){const _=I(),{t:i}=z(),n=f(()=>_.user),g=f(()=>_.isCompany),u=C(""),e=C({name:"",lastName:"",phone:"",email:"",companyTitle:"",companyCategory:"",companyDescription:""}),x=C([]),k=f(()=>x.value.map(o=>({id:o.id,title:Q(o,"title")}))),j=f(()=>{const o=k.value.find(t=>t.id===+e.value.companyCategory);return o==null?void 0:o.title}),G=()=>{O(`${D()}/category/parents`).then(o=>{var t,c,m,v,$,b,V,U,h;x.value=o,e.value.name=((t=n.value)==null?void 0:t.name)||"",e.value.phone=((c=n.value)==null?void 0:c.phone)||"",e.value.lastName=((m=n.value)==null?void 0:m.last_name)||"",e.value.email=((v=n.value)==null?void 0:v.email)||"",e.value.companyTitle=((b=($=n.value)==null?void 0:$.company)==null?void 0:b.title)||"",e.value.companyDescription=((U=(V=n.value)==null?void 0:V.company)==null?void 0:U.description)||"",e.value.companyCategory=String((h=n.value)==null?void 0:h.company.category_id)||""})},M=()=>{O(`${D()}/user/changeInfo`,{method:"POST",body:{name:e.value.name,last_name:e.value.lastName,phone:e.value.phone,email:e.value.email,company_title:e.value.companyTitle,company_category:e.value.companyCategory,company_description:e.value.companyDescription}}).then(o=>{o.status===1&&(u.value=i("profile.the_data_has_been_updated"))})};return G(),(o,t)=>{const c=S,m=B,v=F,$=X,b=Y,V=ee,U=L,h=te,E=K;return r(),d(E,{title:o.$t("profile.personal_data")},{default:s(()=>[P("div",le,[P("div",se,[l(m,{label:o.$t("name")+":",class:"col-span-2 sm:col-span-1"},{default:s(()=>[l(c,{modelValue:a(e).name,"onUpdate:modelValue":t[0]||(t[0]=p=>a(e).name=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(g)?(r(),d(m,{key:0,label:o.$t("name_company")+":",class:"col-span-2 sm:col-span-1"},{default:s(()=>[l(c,{modelValue:a(e).companyTitle,"onUpdate:modelValue":t[1]||(t[1]=p=>a(e).companyTitle=p)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),l(m,{label:o.$t("last_name")+":",class:"col-span-2 sm:col-span-1"},{default:s(()=>[l(c,{modelValue:a(e).lastName,"onUpdate:modelValue":t[2]||(t[2]=p=>a(e).lastName=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(g)?(r(),d(m,{key:1,for:"",label:o.$t("category")+":",class:"col-span-2 sm:col-span-1"},{default:s(()=>[l(v,{modelValue:a(e).companyCategory,"onUpdate:modelValue":t[3]||(t[3]=p=>a(e).companyCategory=p),currentValue:a(j),options:a(k),"value-attribute":"id","option-attribute":"title"},null,8,["modelValue","currentValue","options"])]),_:1},8,["label"])):y("",!0),l(m,{label:o.$t("email")+":",class:"col-span-2 sm:col-span-1"},{default:s(()=>[l(c,{modelValue:a(e).email,"onUpdate:modelValue":t[4]||(t[4]=p=>a(e).email=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(g)?(r(),d(m,{key:2,label:o.$t("description_of_your_company")+":",class:"col-span-2 row-span-2 sm:col-span-1"},{default:s(()=>[l($,{modelValue:a(e).companyDescription,"onUpdate:modelValue":t[5]||(t[5]=p=>a(e).companyDescription=p),class:"!h-[90px] md:!h-[119px] xl:!h-[152px]"},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),l(m,{label:o.$t("phone_number")+":",class:"col-span-2 sm:col-span-1"},{default:s(()=>[l(b,{modelValue:a(e).phone,"onUpdate:modelValue":t[6]||(t[6]=p=>a(e).phone=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(u)?(r(),d(V,{key:3,class:"col-span-2"},{default:s(()=>[N(T(a(u)),1)]),_:1})):y("",!0),l(U,{class:"col-span-2 w-fit justify-self-center",onClick:M},{default:s(()=>[N(T(o.$t("save_changes")),1)]),_:1}),l(h)])])]),_:1},8,["title"])}}});export{Te as default};
