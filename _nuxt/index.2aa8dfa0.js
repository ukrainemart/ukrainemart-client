import{_ as L,a as z}from"./InputOutline.vue.6e797599.js";import{_ as G}from"./SelectOutline.vue.d479f5c9.js";import{_ as H}from"./TextareaOutline.vue.9d243a38.js";import{_ as J}from"./PhoneInputOutline.vue.d8626b4b.js";import{_ as j}from"./TextPortalPrimary.fd622f52.js";import{_ as M,g as q,f as E,c as N}from"./entry.08147536.js";import{M as u,N as c,O as l,a1 as F,x as X,l as $,a as x,X as K,u as a,I as t,a3 as g,_ as b,Z as U,Y as I}from"./swiper-vue.01371f92.js";import{_ as Y}from"./ButtonPrimary.vue.5f742824.js";import{_ as Q}from"./InputOutlinePassword.vue.f9b7c76e.js";import{u as D}from"./useApi.87bba5a7.js";import{_ as R}from"./ProfilePage.vue.aa36dc58.js";import{u as W}from"./useMultiLang.252cc7ce.js";import"./index.44e48c92.js";import"./cn.a642df04.js";import"./SelectMenu.1c729e41.js";import"./ArrowDown.714756f4.js";import"./nuxt-icon.2fff82bc.js";import"./ButtonText.vue.a096dcf1.js";import"./nuxt-link.a33d74ae.js";import"./Icon.d131e72a.js";import"./tw-merge.5a659e7d.js";import"./ui.config.df5ebea0.js";import"./index.41f836bf.js";import"./usePopper.40a35113.js";import"./micro-task.1b13e225.js";import"./open-closed.b39cf687.js";import"./use-resolve-button-type.49b213cd.js";import"./disposables.8a1a5baa.js";import"./ShowPassword.27ed75bd.js";import"./HiddenPassword.c0653bdc.js";import"./ButtonOpacity.8fb83ae9.js";const ee={};function ae(V,v){const f=j;return u(),c(f,{class:"!text-[#319F43]"},{default:l(()=>[F(V.$slots,"default")]),_:3})}const Z=M(ee,[["render",ae]]),oe={};function se(V,v){const f=j;return u(),c(f,{class:"text-status_red"},{default:l(()=>[F(V.$slots,"default")]),_:3})}const te=M(oe,[["render",se]]),le={class:"mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"},ne={class:"col-span-2 flex justify-center"},re=X({__name:"ProfileChangePassword",setup(V){const v=q(),{t:f}=E(),r=$(()=>v.isPassword),d=x(""),w=x(""),e=x({oldPassword:"",newPassword:"",newConfPassword:""}),h=()=>{w.value="",d.value="",D(`${N()}/user/password/change`,{method:"POST",body:{old_password:e.value.oldPassword,new_password:e.value.newPassword,new_c_password:e.value.newConfPassword}}).then(m=>{if(m.status===1)return w.value=f("password_successfully_changed"),e.value.oldPassword="",e.value.newPassword="",e.value.newConfPassword="",!1;if(m.status===0)return d.value=f("the_old_password_is_wrong"),!1})},C=()=>{D(`${N()}/user/password/set`,{method:"POST",body:{new_password:e.value.newPassword,new_c_password:e.value.newConfPassword}})},B=()=>{if(r)return h(),!1;C()};return(m,y)=>{const o=Q,s=L,_=te,p=Z,P=Y;return u(),K("div",le,[a(r)?(u(),c(s,{key:0,class:"row-span-1",label:m.$t("password_change.old_password")+":"},{default:l(()=>[t(o,{modelValue:a(e).oldPassword,"onUpdate:modelValue":y[0]||(y[0]=i=>a(e).oldPassword=i)},null,8,["modelValue"])]),_:1},8,["label"])):g("",!0),t(s,{class:"row-span-1",label:(a(r)?m.$t("password_change.new_password"):m.$t("password"))+":"},{default:l(()=>[t(o,{modelValue:a(e).newPassword,"onUpdate:modelValue":y[1]||(y[1]=i=>a(e).newPassword=i)},null,8,["modelValue"])]),_:1},8,["label"]),t(s,{class:"row-span-1",label:m.$t("repeatPassword")+":"},{default:l(()=>[t(o,{modelValue:a(e).newConfPassword,"onUpdate:modelValue":y[2]||(y[2]=i=>a(e).newConfPassword=i)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(_,{key:1},{default:l(()=>[b(U(a(d)),1)]),_:1})):g("",!0),a(w)?(u(),c(p,{key:2},{default:l(()=>[b(U(a(w)),1)]),_:1})):g("",!0),I("div",ne,[t(P,{class:"w-fit",onClick:B},{default:l(()=>[b(U(a(r)?m.$t("change_password"):m.$t("password_change.set_password")),1)]),_:1})])])}}}),pe={class:"max-w-[1190px]"},me={class:"grid grid-cols-1 gap-y-[15px] sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[84px] md:gap-y-[20px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"},Ee=X({__name:"index",setup(V){const v=q(),{t:f}=E(),r=$(()=>v.user),d=$(()=>v.isCompany),w=x(""),e=x({name:"",lastName:"",phone:"",email:"",companyTitle:"",companyCategory:"",companyDescription:""}),h=x([]),C=$(()=>h.value.map(o=>({id:o.id,title:W(o,"title")}))),B=$(()=>{const o=C.value.find(s=>s.id===+e.value.companyCategory);return o==null?void 0:o.title}),m=()=>{var o,s,_,p,P,i,T,k,O,S;if(e.value.name=((o=r.value)==null?void 0:o.name)||"",e.value.phone=((s=r.value)==null?void 0:s.phone)||"",e.value.lastName=((_=r.value)==null?void 0:_.last_name)||"",e.value.email=((p=r.value)==null?void 0:p.email)||"",e.value.companyTitle=((i=(P=r.value)==null?void 0:P.company)==null?void 0:i.title)||"",e.value.companyDescription=((k=(T=r.value)==null?void 0:T.company)==null?void 0:k.description)||"",e.value.companyCategory=String((S=(O=r.value)==null?void 0:O.company)==null?void 0:S.category_id)||"",!d.value)return!1;D(`${N()}/category/parents`).then(A=>{h.value=A})},y=()=>{const o={name:e.value.name,last_name:e.value.lastName,phone:e.value.phone,email:e.value.email};d.value&&Object.assign(o,{company_title:e.value.companyTitle,company_category:e.value.companyCategory,company_description:e.value.companyDescription}),D(`${N()}/user/changeInfo`,{method:"POST",body:o}).then(s=>{s.status===1&&(w.value=f("profile.the_data_has_been_updated"))})};return m(),(o,s)=>{const _=z,p=L,P=G,i=H,T=J,k=Z,O=Y,S=re,A=R;return u(),c(A,{title:o.$t("profile.personal_data")},{default:l(()=>[I("div",pe,[I("div",me,[t(p,{label:o.$t("name")+":",class:"col-span-2 sm:col-span-1"},{default:l(()=>[t(_,{modelValue:a(e).name,"onUpdate:modelValue":s[0]||(s[0]=n=>a(e).name=n)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(p,{key:0,label:o.$t("name_company")+":",class:"col-span-2 sm:col-span-1"},{default:l(()=>[t(_,{modelValue:a(e).companyTitle,"onUpdate:modelValue":s[1]||(s[1]=n=>a(e).companyTitle=n)},null,8,["modelValue"])]),_:1},8,["label"])):g("",!0),t(p,{label:o.$t("last_name")+":",class:"col-span-2 sm:col-span-1"},{default:l(()=>[t(_,{modelValue:a(e).lastName,"onUpdate:modelValue":s[2]||(s[2]=n=>a(e).lastName=n)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(p,{key:1,for:"",label:o.$t("category")+":",class:"col-span-2 sm:col-span-1"},{default:l(()=>[t(P,{modelValue:a(e).companyCategory,"onUpdate:modelValue":s[3]||(s[3]=n=>a(e).companyCategory=n),currentValue:a(B),options:a(C),"value-attribute":"id","option-attribute":"title"},null,8,["modelValue","currentValue","options"])]),_:1},8,["label"])):g("",!0),t(p,{label:o.$t("email")+":",class:"col-span-2 sm:col-span-1"},{default:l(()=>[t(_,{modelValue:a(e).email,"onUpdate:modelValue":s[4]||(s[4]=n=>a(e).email=n)},null,8,["modelValue"])]),_:1},8,["label"]),a(d)?(u(),c(p,{key:2,label:o.$t("description_of_your_company")+":",class:"col-span-2 row-span-2 sm:col-span-1"},{default:l(()=>[t(i,{modelValue:a(e).companyDescription,"onUpdate:modelValue":s[5]||(s[5]=n=>a(e).companyDescription=n),class:"!h-[90px] md:!h-[119px] xl:!h-[152px]"},null,8,["modelValue"])]),_:1},8,["label"])):g("",!0),t(p,{label:o.$t("phone_number")+":",class:"col-span-2 sm:col-span-1"},{default:l(()=>[t(T,{modelValue:a(e).phone,"onUpdate:modelValue":s[6]||(s[6]=n=>a(e).phone=n)},null,8,["modelValue"])]),_:1},8,["label"]),a(w)?(u(),c(k,{key:3,class:"col-span-2"},{default:l(()=>[b(U(a(w)),1)]),_:1})):g("",!0),t(O,{class:"col-span-2 w-fit justify-self-center",onClick:y},{default:l(()=>[b(U(o.$t("save_changes")),1)]),_:1}),t(S)])])]),_:1},8,["title"])}}});export{Ee as default};
