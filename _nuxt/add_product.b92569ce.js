import{_ as l}from"./CreateProduct.vue.760835e5.js";import{f,e as _,c as v,n as g}from"./entry.b834c369.js";import{x as y,a as o,M as P,N as x,u as p,k as I}from"./swiper-vue.01371f92.js";import"./ButtonOpacity.a1310f8e.js";import"./nuxt-link.b08126aa.js";import"./cn.a642df04.js";import"./InputOutline.vue.6e797599.js";import"./index.44e48c92.js";import"./AlertTextDanger.9728a987.js";import"./SelectMenu.9d413e3b.js";import"./ArrowDown.923b677b.js";import"./nuxt-icon.c6ac3867.js";import"./ButtonText.vue.b336c5e6.js";import"./Icon.e87529c1.js";import"./tw-merge.59a9a854.js";import"./ui.config.8de05e6c.js";import"./index.41f836bf.js";import"./usePopper.40a35113.js";import"./micro-task.1b13e225.js";import"./open-closed.b39cf687.js";import"./use-resolve-button-type.49b213cd.js";import"./disposables.8a1a5baa.js";import"./TextPortalPrimary.0ce1d847.js";import"./TextareaOutline.vue.9d243a38.js";import"./Cross.b13ec1e1.js";import"./Delete.28b18bb7.js";import"./ButtonPrimary.vue.47ae25b0.js";import"./ProfilePage.vue.730a39fd.js";import"./useMultiLang.fa1173b1.js";const Y=y({__name:"add_product",setup(A){const{t:u}=f(),n=o(""),d=o(""),e=o({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[]}),c=()=>{const t=new FormData;t.append("title_ua",e.value.titleUa),t.append("title_en",e.value.titleEn),t.append("description_ua",e.value.descriptionUa),t.append("description_en",e.value.descriptionEn),t.append("category_id",`${e.value.categoryId}`),t.append("price_type",e.value.priceType),e.value.priceType==="fixed"&&e.value.fixedPrice&&(t.append("amount",e.value.fixedPrice.amount),t.append("price",e.value.fixedPrice.price),t.append("unit_id",e.value.fixedPrice.unitId)),e.value.priceType==="variated"&&e.value.variatedPrices.length>0&&t.append("price_variations",JSON.stringify(e.value.variatedPrices.map(i=>({minAmount:i.minAmount,maxAmount:i.maxAmount,price:i.price,unitId:i.unitId}))));const{productImages:r}=e.value;return r.forEach((i,a)=>{const s=`product_images[${a+1}]`;t.append(s,i)}),t},m=()=>{_(`${v()}/product/create`,{method:"POST",body:c()}).then(t=>{t.data.value.status===1&&g("/profile/my_products"),console.log(t)}).catch(t=>{n.value=u("fill_in_all_fields"),console.log(t)})};return(t,r)=>{const i=l;return P(),x(i,{inputs:p(e),"onUpdate:inputs":r[0]||(r[0]=a=>I(e)?e.value=a:null),error:p(n),message:p(d),title:t.$t("add_product.add_product"),labelButtonSubmit:t.$t("add_product.add_product"),onActionSubmit:m},null,8,["inputs","error","message","title","labelButtonSubmit"])}}});export{Y as default};