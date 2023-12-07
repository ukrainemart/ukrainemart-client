import{_ as y}from"./CreateProduct.vue.0e08eb8b.js";import{a as x,f as I,g as d,d as s,n as S}from"./entry.61833fc9.js";import{x as A,a as p,M as E,N as $,u as n,k as h}from"./swiper-vue.67144f5d.js";import"./ButtonOpacity.844a88a9.js";import"./nuxt-link.3f77bc6c.js";import"./cn.a642df04.js";import"./InputOutlineValidate.vue.855e84db.js";import"./InputOutline.vue.e68acffd.js";import"./index.esm.98f1c623.js";import"./index.101b1fe2.js";import"./SelectOutline.vue.ebb15f10.js";import"./AlertTextDanger.95d251bc.js";import"./ArrowDown.8ea42960.js";import"./nuxt-icon.c09d2857.js";import"./ButtonText.vue.445911d6.js";import"./Icon.79bf77af.js";import"./tw-merge.d6bb7cf5.js";import"./ui.config.4c4a6835.js";import"./index.a74f4e4f.js";import"./micro-task.4a381607.js";import"./open-closed.89ccc2fd.js";import"./use-resolve-button-type.23e66368.js";import"./disposables.6e00b73e.js";import"./TextPortalPrimary.1bf26801.js";import"./TextareaOutline.vue.c95a53de.js";import"./Cross.4ad2fc43.js";import"./Delete.6931451f.js";import"./ButtonPrimary.vue.61ff6df6.js";import"./ProfilePage.vue.e5b51bca.js";import"./useMultiLang.402b7490.js";const ot=A({__name:"[product_id]",setup(U){const m=x(),{t:l}=I(),u=p(""),_=p(""),t=p({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[],unitId:""}),v=p({}),c=m.params.product_id,f=()=>{d(`${s()}/product/show/${c}`).then(i=>{var r,o;const e=i.data.value;console.log(e),t.value.categoryId=String(e.category_id),t.value.descriptionEn=e.description_en,t.value.descriptionUa=e.description_ua,t.value.descriptionEn=e.description_en,t.value.titleEn=e.title_en,t.value.titleUa=e.title_ua,t.value.productImages=((r=e.images)==null?void 0:r.map(a=>a.path))||[],t.value.priceType=e.price_type,t.value.unitId=e.prices[0].unit_id||"",e.price_type==="fixed"&&t.value.fixedPrice&&(t.value.fixedPrice.amount=String(e.prices[0].min_amount)||"",t.value.fixedPrice.price=String(e.prices[0].price)||"",t.value.fixedPrice.unitId=((o=e==null?void 0:e.prices[0])==null?void 0:o.unit_id)||""),e.price_type==="variated"&&(t.value.variatedPrices=e.prices.map(a=>({id:a.id,minAmount:String(a.min_amount),maxAmount:String(a.max_amount),price:String(a.price),unitId:e.prices[0].unit_id})))})},g=()=>{const i=new FormData;i.append("title_ua",t.value.titleUa),i.append("title_en",t.value.titleEn),i.append("description_ua",t.value.descriptionUa),i.append("description_en",t.value.descriptionEn),i.append("category_id",`${t.value.categoryId}`),i.append("price_type",t.value.priceType),t.value.priceType==="fixed"&&t.value.fixedPrice&&(i.append("amount",t.value.fixedPrice.amount),i.append("price",t.value.fixedPrice.price),i.append("unit_id",t.value.fixedPrice.unitId)),t.value.priceType==="variated"&&t.value.variatedPrices.length>0&&i.append("price_variations",JSON.stringify(t.value.variatedPrices.map(r=>({minAmount:r.minAmount,maxAmount:r.maxAmount,price:r.price,unitId:r.unitId}))));const{productImages:e}=t.value;return e.forEach((r,o)=>{const a=`product_images[${o+1}]`;i.append(a,r)}),i},P=()=>{d(`${s()}/product/update/${c}`,{method:"POST",body:g()}).then(i=>{S("/profile/my_products"),console.log(i)}).catch(i=>{u.value=l("fill_in_all_fields"),console.log(i)})};return f(),(i,e)=>{const r=y;return E(),$(r,{inputs:n(t),"onUpdate:inputs":e[0]||(e[0]=o=>h(t)?t.value=o:null),product:n(v),error:n(u),message:n(_),title:i.$t("add_product.edit_product"),labelButtonSubmit:i.$t("add_product.edit_product"),onActionSubmit:P},null,8,["inputs","product","error","message","title","labelButtonSubmit"])}}});export{ot as default};
