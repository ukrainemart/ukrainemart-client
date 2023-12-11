import{_ as Z}from"./InputOutline.vue.f60f7b71.js";import{c as z,f as E,h as G,d as L,_ as j,F as H}from"./index.esm.c957c8ec.js";import{_ as J}from"./SelectOutline.vue.67988694.js";import{_ as K}from"./TextareaOutline.vue.f3b71610.js";import{_ as Q}from"./PhoneInputOutline.vue.dd743b9c.js";import{_ as W}from"./TextPortalPrimary.d5be0b7d.js";import{_ as X,j as F,f as M,d as O}from"./entry.47cb1d8b.js";import{M as u,N as c,O as n,a1 as ee,x as R,l as b,a as w,Y as k,u as a,I as t,a2 as y,_ as C,Z as U}from"./swiper-vue.6ff25394.js";import{_ as ae}from"./InputOutlinePassword.vue.041e1e62.js";import{b as oe}from"./AlertTextDanger.938dac13.js";import{u as N}from"./useApi.25ba2ecd.js";import{_ as se}from"./ProfilePage.vue.30f71284.js";import{u as te}from"./useTitle.6e6a4239.js";import{u as ne}from"./useMultiLang.f3664185.js";import"./cn.a642df04.js";import"./index.a747a02a.js";import"./ButtonPrimary.vue.b1335e2b.js";import"./nuxt-link.7ca564fd.js";import"./ButtonTextOpacity.vue.7d1c852e.js";import"./ButtonText.vue.6372f6bd.js";import"./ShowPassword.f5ef6fa5.js";import"./nuxt-icon.e9b5f913.js";import"./HiddenPassword.c854e78b.js";import"./ButtonOpacity.3a8cfaea.js";import"./ArrowDown.407c56ad.js";import"./Icon.52cb19a9.js";import"./tw-merge.a11ed528.js";import"./ui.config.c3166feb.js";import"./index.cfab472a.js";import"./micro-task.301beeda.js";import"./open-closed.8da97601.js";import"./use-resolve-button-type.c7514531.js";import"./disposables.b301c1d0.js";const le={};function re(D,$){const v=W;return u(),c(v,{class:"!text-[#319F43]"},{default:n(()=>[ee(D.$slots,"default")]),_:3})}const Y=X(le,[["render",re]]),me=z().shape({old_password:E().required("password_required").trim().min(6,"password_length_min").max(22,"password_length_max"),newPassword:E().required("password_required").trim().min(6,"password_length_min").max(22,"password_length_max"),newConfPassword:E().oneOf([G("newPassword")],"password_match").required("password_confirmation")}),pe={class:"mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"},de={class:"col-span-2 flex justify-center"},ie=R({__name:"ProfileChangePassword",setup(D){const $=F(),{t:v}=M(),m=b(()=>$.isPassword),d=w(""),f=w(""),_=w(!1),e=w({oldPassword:"",newPassword:"",newConfPassword:""}),g=w(!1),T=()=>{g.value=!0},q=()=>{_.value=!0,f.value="",d.value="",N(`${O()}/user/password/change`,{method:"POST",body:{old_password:e.value.oldPassword,new_password:e.value.newPassword,new_c_password:e.value.newConfPassword}}).then(o=>{if(o.status===1)return f.value=v("password_successfully_changed"),e.value.oldPassword="",e.value.newPassword="",e.value.newConfPassword="",g.value=!1,_.value=!1,!1;if(o.status===0)return d.value=v("the_old_password_is_wrong"),!1})},I=()=>{_.value=!0,N(`${O()}/user/password/set`,{method:"POST",body:{new_password:e.value.newPassword,new_c_password:e.value.newConfPassword}}).then(()=>{_.value=!1})},A=()=>{if(m)return q(),!1;I()};return(o,s)=>{const p=ae,l=L,P=oe,h=Y,x=j,V=H;return u(),c(V,{action:"#","validation-schema":"validationChangePassword"in o?o.validationChangePassword:a(me),onInvalidSubmit:T,onSubmit:A},{default:n(()=>[k("div",pe,[a(m)?(u(),c(l,{key:0,class:"row-span-1",label:o.$t("password_change.old_password")+":"},{default:n(()=>[t(p,{modelValue:a(e).oldPassword,"onUpdate:modelValue":s[0]||(s[0]=i=>a(e).oldPassword=i),showPasswordError:a(g),name:"old_password"},null,8,["modelValue","showPasswordError"])]),_:1},8,["label"])):y("",!0),t(l,{class:"row-span-1",label:(a(m)?o.$t("password_change.new_password"):o.$t("password"))+":"},{default:n(()=>[t(p,{modelValue:a(e).newPassword,"onUpdate:modelValue":s[1]||(s[1]=i=>a(e).newPassword=i),showPasswordError:a(g),name:"newPassword"},null,8,["modelValue","showPasswordError"])]),_:1},8,["label"]),t(l,{class:"row-span-1",label:o.$t("repeatPassword")+":"},{default:n(()=>[t(p,{modelValue:a(e).newConfPassword,"onUpdate:modelValue":s[2]||(s[2]=i=>a(e).newConfPassword=i),showPasswordError:a(g),name:"newConfPassword"},null,8,["modelValue","showPasswordError"])]),_:1},8,["label"]),a(d)?(u(),c(P,{key:1},{default:n(()=>[C(U(a(d)),1)]),_:1})):y("",!0),a(f)?(u(),c(h,{key:2},{default:n(()=>[C(U(a(f)),1)]),_:1})):y("",!0),k("div",de,[t(x,{loading:a(_),type:"submit",class:"w-fit"},{default:n(()=>[C(U(a(m)?o.$t("change_password"):o.$t("password_change.set_password")),1)]),_:1},8,["loading"])])])]),_:1},8,["validation-schema"])}}}),ue={class:"max-w-[1190px]"},ce={class:"grid grid-cols-1 gap-y-[15px] sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[84px] md:gap-y-[20px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"},Ge=R({__name:"index",setup(D){const $=F(),{t:v}=M();te("profile.personal_data");const m=b(()=>$.user),d=b(()=>$.isCompany),f=w(""),_=w(!1),e=w({name:"",lastName:"",phone:"",email:"",companyTitle:"",companyCategory:"",companyDescription:""}),g=w([]),T=b(()=>g.value.map(o=>({id:o.id,title:ne(o,"title")}))),q=b(()=>{const o=T.value.find(s=>s.id===+e.value.companyCategory);return o==null?void 0:o.title}),I=()=>{var o,s,p,l,P,h,x,V,i,S;if(e.value.name=((o=m.value)==null?void 0:o.name)||"",e.value.phone=((s=m.value)==null?void 0:s.phone)||"",e.value.lastName=((p=m.value)==null?void 0:p.last_name)||"",e.value.email=((l=m.value)==null?void 0:l.email)||"",e.value.companyTitle=((h=(P=m.value)==null?void 0:P.company)==null?void 0:h.title)||"",e.value.companyDescription=((V=(x=m.value)==null?void 0:x.company)==null?void 0:V.description)||"",e.value.companyCategory=String((S=(i=m.value)==null?void 0:i.company)==null?void 0:S.category_id)||"",!d.value)return!1;N(`${O()}/category/parents`).then(B=>{g.value=B})},A=()=>{_.value=!0;const o={name:e.value.name,last_name:e.value.lastName,phone:e.value.phone,email:e.value.email};d.value&&Object.assign(o,{company_title:e.value.companyTitle,company_category:e.value.companyCategory,company_description:e.value.companyDescription}),N(`${O()}/user/changeInfo`,{method:"POST",body:o}).then(s=>{s.status===1&&(f.value=v("profile.the_data_has_been_updated"),_.value=!1)})};return I(),(o,s)=>{const p=Z,l=L,P=J,h=K,x=Q,V=Y,i=j,S=ie,B=se;return u(),c(B,{title:o.$t("profile.personal_data")},{default:n(()=>[k("div",ue,[k("div",ce,[t(l,{label:o.$t("name")+":",class:"col-span-2 sm:col-span-1"},{default:n(()=>[t(p,{modelValue:a(e).name,"onUpdate:modelValue":s[0]||(s[0]=r=>a(e).name=r)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(l,{key:0,label:o.$t("name_company")+":",class:"col-span-2 sm:col-span-1"},{default:n(()=>[t(p,{modelValue:a(e).companyTitle,"onUpdate:modelValue":s[1]||(s[1]=r=>a(e).companyTitle=r)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),t(l,{label:o.$t("last_name")+":",class:"col-span-2 sm:col-span-1"},{default:n(()=>[t(p,{modelValue:a(e).lastName,"onUpdate:modelValue":s[2]||(s[2]=r=>a(e).lastName=r)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(l,{key:1,for:"",label:o.$t("category")+":",class:"col-span-2 sm:col-span-1"},{default:n(()=>[t(P,{modelValue:a(e).companyCategory,"onUpdate:modelValue":s[3]||(s[3]=r=>a(e).companyCategory=r),currentValue:a(q),options:a(T),"value-attribute":"id","option-attribute":"title"},null,8,["modelValue","currentValue","options"])]),_:1},8,["label"])):y("",!0),t(l,{label:o.$t("email")+":",class:"col-span-2 sm:col-span-1"},{default:n(()=>[t(p,{modelValue:a(e).email,"onUpdate:modelValue":s[4]||(s[4]=r=>a(e).email=r)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(l,{key:2,label:o.$t("description_of_your_company")+":",class:"col-span-2 row-span-2 sm:col-span-1"},{default:n(()=>[t(h,{modelValue:a(e).companyDescription,"onUpdate:modelValue":s[5]||(s[5]=r=>a(e).companyDescription=r),class:"!h-[90px] md:!h-[119px] xl:!h-[152px]"},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),t(l,{label:o.$t("phone_number")+":",class:"col-span-2 sm:col-span-1"},{default:n(()=>[t(x,{modelValue:a(e).phone,"onUpdate:modelValue":s[6]||(s[6]=r=>a(e).phone=r)},null,8,["modelValue"])]),_:1},8,["label"]),a(f)?(u(),c(V,{key:3,class:"col-span-2"},{default:n(()=>[C(U(a(f)),1)]),_:1})):y("",!0),t(i,{loading:a(_),class:"col-span-2 w-fit justify-self-center",onClick:A},{default:n(()=>[C(U(o.$t("save_changes")),1)]),_:1},8,["loading"]),t(S)])])]),_:1},8,["title"])}}});export{Ge as default};
