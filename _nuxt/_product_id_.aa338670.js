import{_}from"./CreateProduct.vue.cad1c636.js";import{b as f,e as p,c as n}from"./entry.b30ad9c3.js";import{x as g,a as u,M as P,N as x,u as d,k as y}from"./swiper-vue.33fa7a2f.js";import"./ButtonOpacity.23d58a61.js";import"./nuxt-link.46b33ba5.js";import"./cn.a642df04.js";import"./InputOutline.vue.5fdbfac3.js";import"./index.4ad02574.js";import"./SelectOutline.vue.efd66be3.js";import"./SelectMenu.9a591861.js";import"./ArrowDown.fc749fc9.js";import"./nuxt-icon.80dfecc9.js";import"./ButtonText.vue.291de26d.js";import"./Icon.d2c5fb2b.js";import"./tw-merge.599212d6.js";import"./ui.config.02995000.js";import"./index.7be7771f.js";import"./usePopper.b01c16ca.js";import"./micro-task.938ba259.js";import"./open-closed.36cb88d6.js";import"./use-resolve-button-type.c4fc07f0.js";import"./disposables.93342b06.js";import"./TextareaOutline.vue.576e552b.js";import"./TextPortalPrimary.b4ed48f6.js";import"./Cross.b7813bcf.js";import"./ButtonPrimary.vue.1ab3849a.js";import"./ProfilePage.vue.b0aa3dbd.js";import"./useMultiLang.3089dec7.js";const X=g({__name:"[product_id]",setup(S){const c=f(),t=u({fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[]}),o=u({}),m=c.params.product_id,s=()=>{p(`${n()}/product/show/${m}`).then(i=>{var a;const e=i.data.value;console.log(e),t.value.categoryId=String(e.category_id),t.value.descriptionEn=e.description_en,t.value.descriptionUa=e.description_ua,t.value.descriptionEn=e.description_en,t.value.titleEn=e.title_en,t.value.titleUa=e.title_ua,o.value.images=(a=e.images)==null?void 0:a.map(r=>r.path),t.value.priceType=e.price_type,e.price_type==="fixed"&&t.value.fixedPrice&&(t.value.fixedPrice.amount=String(e.prices[0].min_amount)||"",t.value.fixedPrice.price=String(e.prices[0].price)||"",t.value.fixedPrice.unitId=String(e.prices[0].unit_id)||""),e.price_type==="variated"&&(t.value.variatedPrices=e.prices.map(r=>({id:r.id,minAmount:String(r.min_amount),maxAmount:String(r.max_amount),price:String(r.price),unitId:String(r.unit_id)})))})},l=()=>{const i=new FormData;i.append("title_ua",t.value.titleUa),i.append("title_en",t.value.titleEn),i.append("description_ua",t.value.descriptionUa),i.append("description_en",t.value.descriptionEn),i.append("category_id",`${t.value.categoryId}`),i.append("price_type",t.value.priceType),t.value.priceType==="fixed"&&t.value.fixedPrice&&(i.append("amount",t.value.fixedPrice.amount),i.append("price",t.value.fixedPrice.price),i.append("unit_id",t.value.fixedPrice.unitId)),t.value.priceType==="variated"&&t.value.variatedPrices.length>0&&i.append("price_variations",JSON.stringify(t.value.variatedPrices.map(e=>({minAmount:e.minAmount,maxAmount:e.maxAmount,price:e.price,unitId:e.unitId}))));for(const e of t.value.productImages)i.append("product_images[]",e);return i},v=()=>{p(`${n()}/product/update`,{method:"POST",body:l()}).then(i=>{console.log(i)})};return s(),(i,e)=>{const a=_;return P(),x(a,{inputs:d(t),"onUpdate:inputs":e[0]||(e[0]=r=>y(t)?t.value=r:null),product:d(o),title:i.$t("add_product.edit_product"),labelButtonSubmit:i.$t("add_product.edit_product"),onActionSubmit:v},null,8,["inputs","product","title","labelButtonSubmit"])}}});export{X as default};
