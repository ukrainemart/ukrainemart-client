import{_ as y}from"./CreateProduct.vue.760835e5.js";import{b as x,f as I,e as d,c as s,n as S}from"./entry.b834c369.js";import{x as A,a as o,M as E,N as $,u as p,k as h}from"./swiper-vue.01371f92.js";import"./ButtonOpacity.a1310f8e.js";import"./nuxt-link.b08126aa.js";import"./cn.a642df04.js";import"./InputOutline.vue.6e797599.js";import"./index.44e48c92.js";import"./AlertTextDanger.9728a987.js";import"./SelectMenu.9d413e3b.js";import"./ArrowDown.923b677b.js";import"./nuxt-icon.c6ac3867.js";import"./ButtonText.vue.b336c5e6.js";import"./Icon.e87529c1.js";import"./tw-merge.59a9a854.js";import"./ui.config.8de05e6c.js";import"./index.41f836bf.js";import"./usePopper.40a35113.js";import"./micro-task.1b13e225.js";import"./open-closed.b39cf687.js";import"./use-resolve-button-type.49b213cd.js";import"./disposables.8a1a5baa.js";import"./TextPortalPrimary.0ce1d847.js";import"./TextareaOutline.vue.9d243a38.js";import"./Cross.b13ec1e1.js";import"./Delete.28b18bb7.js";import"./ButtonPrimary.vue.47ae25b0.js";import"./ProfilePage.vue.730a39fd.js";import"./useMultiLang.fa1173b1.js";const re=A({__name:"[product_id]",setup(U){const m=x(),{t:l}=I(),n=o(""),_=o(""),e=o({titleUa:"",titleEn:"",descriptionUa:"",descriptionEn:"",categoryId:"",priceType:"",fixedPrice:{amount:"",price:"",unitId:""},variatedPrices:[],productImages:[]}),v=o({}),u=m.params.product_id,f=()=>{d(`${s()}/product/show/${u}`).then(t=>{var r;const i=t.data.value;console.log(i),e.value.categoryId=String(i.category_id),e.value.descriptionEn=i.description_en,e.value.descriptionUa=i.description_ua,e.value.descriptionEn=i.description_en,e.value.titleEn=i.title_en,e.value.titleUa=i.title_ua,e.value.productImages=((r=i.images)==null?void 0:r.map(a=>a.path))||[],e.value.priceType=i.price_type,i.price_type==="fixed"&&e.value.fixedPrice&&(e.value.fixedPrice.amount=String(i.prices[0].min_amount)||"",e.value.fixedPrice.price=String(i.prices[0].price)||"",e.value.fixedPrice.unitId=String(i.prices[0].unit_id)||""),i.price_type==="variated"&&(e.value.variatedPrices=i.prices.map(a=>({id:a.id,minAmount:String(a.min_amount),maxAmount:String(a.max_amount),price:String(a.price),unitId:String(a.unit_id)})))})},g=()=>{const t=new FormData;t.append("title_ua",e.value.titleUa),t.append("title_en",e.value.titleEn),t.append("description_ua",e.value.descriptionUa),t.append("description_en",e.value.descriptionEn),t.append("category_id",`${e.value.categoryId}`),t.append("price_type",e.value.priceType),e.value.priceType==="fixed"&&e.value.fixedPrice&&(t.append("amount",e.value.fixedPrice.amount),t.append("price",e.value.fixedPrice.price),t.append("unit_id",e.value.fixedPrice.unitId)),e.value.priceType==="variated"&&e.value.variatedPrices.length>0&&t.append("price_variations",JSON.stringify(e.value.variatedPrices.map(r=>({minAmount:r.minAmount,maxAmount:r.maxAmount,price:r.price,unitId:r.unitId}))));const{productImages:i}=e.value;return i.forEach((r,a)=>{const c=`product_images[${a+1}]`;t.append(c,r)}),t},P=()=>{d(`${s()}/product/update/${u}`,{method:"POST",body:g()}).then(t=>{S("/profile/my_products"),console.log(t)}).catch(t=>{n.value=l("fill_in_all_fields"),console.log(t)})};return f(),(t,i)=>{const r=y;return E(),$(r,{inputs:p(e),"onUpdate:inputs":i[0]||(i[0]=a=>h(e)?e.value=a:null),product:p(v),error:p(n),message:p(_),title:t.$t("add_product.edit_product"),labelButtonSubmit:t.$t("add_product.edit_product"),onActionSubmit:P},null,8,["inputs","product","error","message","title","labelButtonSubmit"])}}});export{re as default};