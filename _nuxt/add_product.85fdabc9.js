import{_ as l}from"./CreateProduct.vue.c18d6a77.js";import{u as _}from"./useTitle.6e6a4239.js";import{f,g as v,d as g,n as y}from"./entry.47cb1d8b.js";import{x as P,a,M as I,N as x,u as p,k as A}from"./swiper-vue.6ff25394.js";import"./ButtonOpacity.3a8cfaea.js";import"./nuxt-link.7ca564fd.js";import"./cn.a642df04.js";import"./InputOutlineValidate.vue.d6507b3d.js";import"./InputOutline.vue.f60f7b71.js";import"./index.esm.c957c8ec.js";import"./index.a747a02a.js";import"./ButtonPrimary.vue.b1335e2b.js";import"./TextareaOutlineValidate.vue.3687006c.js";import"./SelectOutline.vue.67988694.js";import"./AlertTextDanger.938dac13.js";import"./ArrowDown.407c56ad.js";import"./nuxt-icon.e9b5f913.js";import"./ButtonText.vue.6372f6bd.js";import"./Icon.52cb19a9.js";import"./tw-merge.a11ed528.js";import"./ui.config.c3166feb.js";import"./index.cfab472a.js";import"./micro-task.301beeda.js";import"./open-closed.8da97601.js";import"./use-resolve-button-type.c7514531.js";import"./disposables.b301c1d0.js";import"./TextPortalPrimary.d5be0b7d.js";import"./TextareaOutline.vue.f3b71610.js";import"./Cross.b0eb22a4.js";import"./Delete.884a6dbd.js";import"./ProfilePage.vue.30f71284.js";import"./useMultiLang.f3664185.js";const it=P({__name:"add_product",setup(T){_("add_product.add_product");const{t:d}=f(),n=a(""),u=a(""),e=a({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[],unitId:""}),m=()=>{const t=new FormData;t.append("title_ua",e.value.titleUa),t.append("title_en",e.value.titleEn),t.append("description_ua",e.value.descriptionUa),t.append("description_en",e.value.descriptionEn),t.append("category_id",`${e.value.categoryId}`),t.append("price_type",e.value.priceType),e.value.priceType==="fixed"&&e.value.fixedPrice&&(t.append("amount",e.value.fixedPrice.amount),t.append("price",e.value.fixedPrice.price),t.append("unit_id",e.value.fixedPrice.unitId)),e.value.priceType==="variated"&&e.value.variatedPrices.length>0&&t.append("price_variations",JSON.stringify(e.value.variatedPrices.map(i=>({minAmount:i.minAmount,maxAmount:i.maxAmount,price:i.price,unitId:i.unitId}))));const{productImages:r}=e.value;return r.forEach((i,o)=>{const s=`product_images[${o+1}]`;t.append(s,i)}),t},c=()=>{v(`${g()}/product/create`,{method:"POST",body:m()}).then(t=>{t.data.value.status===1&&y("/profile/my_products"),console.log(t)}).catch(t=>{n.value=d("fill_in_all_fields"),console.log(t)})};return(t,r)=>{const i=l;return I(),x(i,{inputs:p(e),"onUpdate:inputs":r[0]||(r[0]=o=>A(e)?e.value=o:null),error:p(n),message:p(u),title:t.$t("add_product.add_product"),labelButtonSubmit:t.$t("add_product.add_product"),onActionSubmit:c},null,8,["inputs","error","message","title","labelButtonSubmit"])}}});export{it as default};
