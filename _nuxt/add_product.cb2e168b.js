import{_ as l}from"./CreateProduct.vue.b8656d6b.js";import{f,d as _,c as v,n as g}from"./entry.ea053522.js";import{x as y,a,M as P,N as I,u as p,k as x}from"./swiper-vue.0e9dfbd4.js";import"./ButtonOpacity.409595ff.js";import"./nuxt-link.dd28280a.js";import"./cn.a642df04.js";import"./InputOutlineValidate.vue.3dae7bc3.js";import"./InputOutline.vue.5cb7e33a.js";import"./index.esm.3ccb82fe.js";import"./ArrowDown.3979b755.js";import"./nuxt-icon.29358471.js";import"./ButtonText.vue.231f11df.js";import"./Icon.86e014ff.js";import"./tw-merge.a99c2feb.js";import"./ui.config.a31c9b80.js";import"./index.9bb549ee.js";import"./index.f61e798f.js";import"./useFormGroup.6da7ee9f.js";import"./micro-task.20558dc4.js";import"./open-closed.cb93882c.js";import"./use-resolve-button-type.5c130f8f.js";import"./disposables.99c8df93.js";import"./TextPortalPrimary.2c30f7fc.js";import"./SelectOutline.vue.39535d1e.js";import"./TextareaOutline.vue.aa22d0f5.js";import"./Cross.40acc021.js";import"./Delete.a39d9a56.js";import"./ButtonPrimary.vue.6c62fff2.js";import"./ProfilePage.vue.ac502332.js";import"./useMultiLang.a65de5b2.js";const Z=y({__name:"add_product",setup(A){const{t:u}=f(),n=a(""),d=a(""),e=a({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[],unitId:""}),m=()=>{const t=new FormData;t.append("title_ua",e.value.titleUa),t.append("title_en",e.value.titleEn),t.append("description_ua",e.value.descriptionUa),t.append("description_en",e.value.descriptionEn),t.append("category_id",`${e.value.categoryId}`),t.append("price_type",e.value.priceType),e.value.priceType==="fixed"&&e.value.fixedPrice&&(t.append("amount",e.value.fixedPrice.amount),t.append("price",e.value.fixedPrice.price),t.append("unit_id",e.value.fixedPrice.unitId)),e.value.priceType==="variated"&&e.value.variatedPrices.length>0&&t.append("price_variations",JSON.stringify(e.value.variatedPrices.map(i=>({minAmount:i.minAmount,maxAmount:i.maxAmount,price:i.price,unitId:i.unitId}))));const{productImages:r}=e.value;return r.forEach((i,o)=>{const s=`product_images[${o+1}]`;t.append(s,i)}),t},c=()=>{_(`${v()}/product/create`,{method:"POST",body:m()}).then(t=>{t.data.value.status===1&&g("/profile/my_products"),console.log(t)}).catch(t=>{n.value=u("fill_in_all_fields"),console.log(t)})};return(t,r)=>{const i=l;return P(),I(i,{inputs:p(e),"onUpdate:inputs":r[0]||(r[0]=o=>x(e)?e.value=o:null),error:p(n),message:p(d),title:t.$t("add_product.add_product"),labelButtonSubmit:t.$t("add_product.add_product"),onActionSubmit:c},null,8,["inputs","error","message","title","labelButtonSubmit"])}}});export{Z as default};
