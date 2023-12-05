import{_ as l}from"./CreateProduct.vue.0a336a62.js";import{f,d as _,c as v,n as g}from"./entry.418ab3a2.js";import{x as y,a as o,M as P,N as x,u as p,k as I}from"./swiper-vue.aabf7ec7.js";import"./ButtonOpacity.2cdcb588.js";import"./nuxt-link.d90343f1.js";import"./cn.a642df04.js";import"./InputOutline.vue.141d1230.js";import"./useFormGroup.75d3afbb.js";import"./index.6165fb67.js";import"./AlertTextDanger.811dc11f.js";import"./SelectMenu.d62117b0.js";import"./ArrowDown.15c86de3.js";import"./nuxt-icon.51fd6738.js";import"./ButtonText.vue.7d38fe91.js";import"./Icon.b68907de.js";import"./tw-merge.d0709155.js";import"./ui.config.e5bcb653.js";import"./use-resolve-button-type.70e492d1.js";import"./micro-task.525ba7d0.js";import"./open-closed.0816ab40.js";import"./disposables.bfda3bab.js";import"./TextPortalPrimary.ccfa4ec7.js";import"./TextareaOutline.vue.2b9b415c.js";import"./Cross.5cd64a51.js";import"./Delete.6aefc21b.js";import"./ButtonPrimary.vue.a72c7243.js";import"./ProfilePage.vue.1e0f334d.js";import"./useMultiLang.b329251b.js";const X=y({__name:"add_product",setup(A){const{t:u}=f(),n=o(""),d=o(""),e=o({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[]}),c=()=>{const t=new FormData;t.append("title_ua",e.value.titleUa),t.append("title_en",e.value.titleEn),t.append("description_ua",e.value.descriptionUa),t.append("description_en",e.value.descriptionEn),t.append("category_id",`${e.value.categoryId}`),t.append("price_type",e.value.priceType),e.value.priceType==="fixed"&&e.value.fixedPrice&&(t.append("amount",e.value.fixedPrice.amount),t.append("price",e.value.fixedPrice.price),t.append("unit_id",e.value.fixedPrice.unitId)),e.value.priceType==="variated"&&e.value.variatedPrices.length>0&&t.append("price_variations",JSON.stringify(e.value.variatedPrices.map(i=>({minAmount:i.minAmount,maxAmount:i.maxAmount,price:i.price,unitId:i.unitId}))));const{productImages:r}=e.value;return r.forEach((i,a)=>{const s=`product_images[${a+1}]`;t.append(s,i)}),t},m=()=>{_(`${v()}/product/create`,{method:"POST",body:c()}).then(t=>{t.data.value.status===1&&g("/profile/my_products"),console.log(t)}).catch(t=>{n.value=u("fill_in_all_fields"),console.log(t)})};return(t,r)=>{const i=l;return P(),x(i,{inputs:p(e),"onUpdate:inputs":r[0]||(r[0]=a=>I(e)?e.value=a:null),error:p(n),message:p(d),title:t.$t("add_product.add_product"),labelButtonSubmit:t.$t("add_product.add_product"),onActionSubmit:m},null,8,["inputs","error","message","title","labelButtonSubmit"])}}});export{X as default};
