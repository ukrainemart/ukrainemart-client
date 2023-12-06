import{_ as y}from"./CreateProduct.vue.a34ae480.js";import{a as x,f as I,d,c as s,n as S}from"./entry.d432d75f.js";import{x as A,a as p,M as E,N as $,u as n,k as h}from"./swiper-vue.f46bfc32.js";import"./ButtonOpacity.e4e6d7f8.js";import"./nuxt-link.fc736840.js";import"./cn.a642df04.js";import"./InputOutlineValidate.vue.1255097e.js";import"./InputOutline.vue.b9067def.js";import"./index.esm.e92ec572.js";import"./index.60551811.js";import"./SelectOutline.vue.2f32a90e.js";import"./AlertTextDanger.4f460cf9.js";import"./ArrowDown.9dde8cf9.js";import"./nuxt-icon.7af2e3ef.js";import"./ButtonText.vue.13b1f294.js";import"./Icon.0cf09460.js";import"./tw-merge.990907b6.js";import"./ui.config.0c2c5f3d.js";import"./index.f16d6b9a.js";import"./micro-task.e6324d92.js";import"./open-closed.aab629dd.js";import"./use-resolve-button-type.cdfcde6b.js";import"./disposables.2015928c.js";import"./TextPortalPrimary.8196a2ff.js";import"./TextareaOutline.vue.8f0284de.js";import"./Cross.5d7f8d73.js";import"./Delete.e768c945.js";import"./ButtonPrimary.vue.6637110e.js";import"./ProfilePage.vue.fb6a1d70.js";import"./useMultiLang.c00b72e8.js";const ot=A({__name:"[product_id]",setup(U){const m=x(),{t:l}=I(),u=p(""),_=p(""),t=p({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[],unitId:""}),v=p({}),c=m.params.product_id,f=()=>{d(`${s()}/product/show/${c}`).then(i=>{var r,o;const e=i.data.value;console.log(e),t.value.categoryId=String(e.category_id),t.value.descriptionEn=e.description_en,t.value.descriptionUa=e.description_ua,t.value.descriptionEn=e.description_en,t.value.titleEn=e.title_en,t.value.titleUa=e.title_ua,t.value.productImages=((r=e.images)==null?void 0:r.map(a=>a.path))||[],t.value.priceType=e.price_type,t.value.unitId=e.prices[0].unit_id||"",e.price_type==="fixed"&&t.value.fixedPrice&&(t.value.fixedPrice.amount=String(e.prices[0].min_amount)||"",t.value.fixedPrice.price=String(e.prices[0].price)||"",t.value.fixedPrice.unitId=((o=e==null?void 0:e.prices[0])==null?void 0:o.unit_id)||""),e.price_type==="variated"&&(t.value.variatedPrices=e.prices.map(a=>({id:a.id,minAmount:String(a.min_amount),maxAmount:String(a.max_amount),price:String(a.price),unitId:e.prices[0].unit_id})))})},g=()=>{const i=new FormData;i.append("title_ua",t.value.titleUa),i.append("title_en",t.value.titleEn),i.append("description_ua",t.value.descriptionUa),i.append("description_en",t.value.descriptionEn),i.append("category_id",`${t.value.categoryId}`),i.append("price_type",t.value.priceType),t.value.priceType==="fixed"&&t.value.fixedPrice&&(i.append("amount",t.value.fixedPrice.amount),i.append("price",t.value.fixedPrice.price),i.append("unit_id",t.value.fixedPrice.unitId)),t.value.priceType==="variated"&&t.value.variatedPrices.length>0&&i.append("price_variations",JSON.stringify(t.value.variatedPrices.map(r=>({minAmount:r.minAmount,maxAmount:r.maxAmount,price:r.price,unitId:r.unitId}))));const{productImages:e}=t.value;return e.forEach((r,o)=>{const a=`product_images[${o+1}]`;i.append(a,r)}),i},P=()=>{d(`${s()}/product/update/${c}`,{method:"POST",body:g()}).then(i=>{S("/profile/my_products"),console.log(i)}).catch(i=>{u.value=l("fill_in_all_fields"),console.log(i)})};return f(),(i,e)=>{const r=y;return E(),$(r,{inputs:n(t),"onUpdate:inputs":e[0]||(e[0]=o=>h(t)?t.value=o:null),product:n(v),error:n(u),message:n(_),title:i.$t("add_product.edit_product"),labelButtonSubmit:i.$t("add_product.edit_product"),onActionSubmit:P},null,8,["inputs","product","error","message","title","labelButtonSubmit"])}}});export{ot as default};