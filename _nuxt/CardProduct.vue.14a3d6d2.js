import{_ as N}from"./entry.afa9b0b0.js";import{M as a,X as p,x as A,l as B,N as V,O as w,Y as e,u as o,Z as c,_ as C,I as P,a3 as $}from"./swiper-vue.33fa7a2f.js";import{_ as j}from"./nuxt-link.914f2595.js";import{u as L}from"./useMultiLang.a272cf06.js";const D={};function E(u,n){return a(),p("span",null,"₴")}const I=N(D,[["render",E]]),O={class:"relative mb-[7px] pt-[128%] md:mb-2.5 md:pt-[127.5%] 4xl:mb-5 4xl:pt-[125%]"},S=["src","alt"],T={class:"mb-[5px] truncate text-[13px] font-medium leading-[15px] md:text-[16px] md:leading-[20px] 4xl:mb-2.5 4xl:text-[20px] 4xl:leading-[24px]"},X={key:0,class:"flex flex-col"},Y={class:"price_amount"},Z={class:"price_cost"},q={key:1},z={class:"price_amount"},F={class:"price_cost"},Q=A({__name:"CardProduct",props:{product:{}},setup(u){const n=u,s=B(()=>n.product&&n.product.price_type==="variated"?n.product.prices.map((t,r)=>({minAmount:r===0?t.min_amount:null,minPrice:r===0?t.price:null,maxAmount:r===n.product.prices.length-1?t.max_amount:null,maxPrice:r===n.product.prices.length-1?t.price:null})):[]);return(t,r)=>{const i=I,M=j;return a(),V(M,{to:`/product/${t.product.id}`,class:"block rounded-[10px] bg-white p-2.5 md:rounded-[15px] md:p-[15px] 4xl:rounded-[20px] 4xl:p-[20px]"},{default:w(()=>{var d,l,m,_,x,f,h,g,v,b,y,k;return[e("div",O,[e("img",{class:"absolute left-0 top-0 h-full w-full rounded-[7px] object-cover",src:(l=(d=t.product)==null?void 0:d.main_image)==null?void 0:l.path,alt:("useMultiLang"in t?t.useMultiLang:o(L))(t.product,"title")},null,8,S)]),e("h5",T,c(("useMultiLang"in t?t.useMultiLang:o(L))(t.product,"title")),1),e("div",null,[((m=t.product)==null?void 0:m.price_type)==="fixed"?(a(),p("div",X,[e("span",Y,c((x=(_=t.product)==null?void 0:_.prices[0])==null?void 0:x.min_amount),1),e("span",Z,[C(c((h=(f=t.product)==null?void 0:f.prices[0])==null?void 0:h.price),1),P(i)])])):$("",!0),((g=t.product)==null?void 0:g.price_type)==="variated"?(a(),p("div",q,[e("div",z,c(`${(v=o(s)[0])==null?void 0:v.minAmount}-${(b=o(s)[o(s).length-1])==null?void 0:b.maxAmount}`),1),e("div",F,[C(c(`${(y=o(s)[0])==null?void 0:y.minPrice}-${(k=o(s)[o(s).length-1])==null?void 0:k.maxPrice}`)+" ",1),P(i)])])):$("",!0)])]}),_:1},8,["to"])}}});export{Q as _};
