import{_ as y}from"./CreateProduct.vue.759aae76.js";import{a as x,f as I,d,c as s,n as S}from"./entry.d2478e64.js";import{x as A,a as p,M as E,N as $,u as n,k as h}from"./swiper-vue.0e9dfbd4.js";import"./ButtonOpacity.4d260cb2.js";import"./nuxt-link.acf0e312.js";import"./cn.a642df04.js";import"./InputOutlineValidate.vue.4b0b0e5d.js";import"./InputOutline.vue.5cb7e33a.js";import"./index.esm.5fb06bd4.js";import"./ArrowDown.6931777f.js";import"./nuxt-icon.8d1afb34.js";import"./ButtonText.vue.fa8df897.js";import"./Icon.b311bcbd.js";import"./tw-merge.4ec2d303.js";import"./ui.config.3934cc79.js";import"./index.9bb549ee.js";import"./index.f61e798f.js";import"./useFormGroup.6da7ee9f.js";import"./micro-task.20558dc4.js";import"./open-closed.cb93882c.js";import"./use-resolve-button-type.5c130f8f.js";import"./disposables.99c8df93.js";import"./TextPortalPrimary.75b0d602.js";import"./SelectOutline.vue.6ddec109.js";import"./TextareaOutline.vue.aa22d0f5.js";import"./Cross.60e23301.js";import"./Delete.18a29e6b.js";import"./ButtonPrimary.vue.41bc44b4.js";import"./ProfilePage.vue.958f73be.js";import"./useMultiLang.1922c6fb.js";const ot=A({__name:"[product_id]",setup(U){const m=x(),{t:l}=I(),u=p(""),_=p(""),t=p({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[],unitId:""}),v=p({}),c=m.params.product_id,f=()=>{d(`${s()}/product/show/${c}`).then(i=>{var r,o;const e=i.data.value;console.log(e),t.value.categoryId=String(e.category_id),t.value.descriptionEn=e.description_en,t.value.descriptionUa=e.description_ua,t.value.descriptionEn=e.description_en,t.value.titleEn=e.title_en,t.value.titleUa=e.title_ua,t.value.productImages=((r=e.images)==null?void 0:r.map(a=>a.path))||[],t.value.priceType=e.price_type,t.value.unitId=e.prices[0].unit_id||"",e.price_type==="fixed"&&t.value.fixedPrice&&(t.value.fixedPrice.amount=String(e.prices[0].min_amount)||"",t.value.fixedPrice.price=String(e.prices[0].price)||"",t.value.fixedPrice.unitId=((o=e==null?void 0:e.prices[0])==null?void 0:o.unit_id)||""),e.price_type==="variated"&&(t.value.variatedPrices=e.prices.map(a=>({id:a.id,minAmount:String(a.min_amount),maxAmount:String(a.max_amount),price:String(a.price),unitId:e.prices[0].unit_id})))})},g=()=>{const i=new FormData;i.append("title_ua",t.value.titleUa),i.append("title_en",t.value.titleEn),i.append("description_ua",t.value.descriptionUa),i.append("description_en",t.value.descriptionEn),i.append("category_id",`${t.value.categoryId}`),i.append("price_type",t.value.priceType),t.value.priceType==="fixed"&&t.value.fixedPrice&&(i.append("amount",t.value.fixedPrice.amount),i.append("price",t.value.fixedPrice.price),i.append("unit_id",t.value.fixedPrice.unitId)),t.value.priceType==="variated"&&t.value.variatedPrices.length>0&&i.append("price_variations",JSON.stringify(t.value.variatedPrices.map(r=>({minAmount:r.minAmount,maxAmount:r.maxAmount,price:r.price,unitId:r.unitId}))));const{productImages:e}=t.value;return e.forEach((r,o)=>{const a=`product_images[${o+1}]`;i.append(a,r)}),i},P=()=>{d(`${s()}/product/update/${c}`,{method:"POST",body:g()}).then(i=>{S("/profile/my_products"),console.log(i)}).catch(i=>{u.value=l("fill_in_all_fields"),console.log(i)})};return f(),(i,e)=>{const r=y;return E(),$(r,{inputs:n(t),"onUpdate:inputs":e[0]||(e[0]=o=>h(t)?t.value=o:null),product:n(v),error:n(u),message:n(_),title:i.$t("add_product.edit_product"),labelButtonSubmit:i.$t("add_product.edit_product"),onActionSubmit:P},null,8,["inputs","product","error","message","title","labelButtonSubmit"])}}});export{ot as default};