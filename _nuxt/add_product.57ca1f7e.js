import{_ as l}from"./CreateProduct.vue.f461229b.js";import{f,g as _,d as v,n as g}from"./entry.e709a5f9.js";import{x as y,a,M as P,N as I,u as p,k as x}from"./swiper-vue.67144f5d.js";import"./ButtonOpacity.efa18c0f.js";import"./nuxt-link.a103915b.js";import"./cn.a642df04.js";import"./InputOutlineValidate.vue.40a94bdc.js";import"./InputOutline.vue.e68acffd.js";import"./index.esm.1f0151d2.js";import"./ButtonPrimary.vue.a0e1b31c.js";import"./index.101b1fe2.js";import"./useFormGroup.82c3328b.js";import"./SelectOutline.vue.720b172b.js";import"./SelectMenu.95df7c3c.js";import"./ArrowDown.d2b4d25e.js";import"./nuxt-icon.2658f0dd.js";import"./ButtonText.vue.4f4731cc.js";import"./Icon.4145e07a.js";import"./tw-merge.9e1ad637.js";import"./ui.config.99a72688.js";import"./index.a74f4e4f.js";import"./micro-task.4a381607.js";import"./open-closed.89ccc2fd.js";import"./use-resolve-button-type.23e66368.js";import"./disposables.6e00b73e.js";import"./TextareaOutline.vue.c95a53de.js";import"./TextPortalPrimary.220fde3b.js";import"./Cross.65a98b51.js";import"./Delete.1327916b.js";import"./AlertTextDanger.dd4aa406.js";import"./ProfilePage.vue.4877c82e.js";import"./useMultiLang.7603b8a7.js";const et=y({__name:"add_product",setup(A){const{t:u}=f(),n=a(""),d=a(""),e=a({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[],unitId:""}),m=()=>{const t=new FormData;t.append("title_ua",e.value.titleUa),t.append("title_en",e.value.titleEn),t.append("description_ua",e.value.descriptionUa),t.append("description_en",e.value.descriptionEn),t.append("category_id",`${e.value.categoryId}`),t.append("price_type",e.value.priceType),e.value.priceType==="fixed"&&e.value.fixedPrice&&(t.append("amount",e.value.fixedPrice.amount),t.append("price",e.value.fixedPrice.price),t.append("unit_id",e.value.fixedPrice.unitId)),e.value.priceType==="variated"&&e.value.variatedPrices.length>0&&t.append("price_variations",JSON.stringify(e.value.variatedPrices.map(i=>({minAmount:i.minAmount,maxAmount:i.maxAmount,price:i.price,unitId:i.unitId}))));const{productImages:r}=e.value;return r.forEach((i,o)=>{const s=`product_images[${o+1}]`;t.append(s,i)}),t},c=()=>{_(`${v()}/product/create`,{method:"POST",body:m()}).then(t=>{t.data.value.status===1&&g("/profile/my_products"),console.log(t)}).catch(t=>{n.value=u("fill_in_all_fields"),console.log(t)})};return(t,r)=>{const i=l;return P(),I(i,{inputs:p(e),"onUpdate:inputs":r[0]||(r[0]=o=>x(e)?e.value=o:null),error:p(n),message:p(d),title:t.$t("add_product.add_product"),labelButtonSubmit:t.$t("add_product.add_product"),onActionSubmit:c},null,8,["inputs","error","message","title","labelButtonSubmit"])}}});export{et as default};
