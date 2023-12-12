import D from"./Hearth.21ac8377.js";import E from"./HearthBg.9e202cfb.js";import{j as H,h as z,_ as O}from"./entry.d0273f68.js";import{x as j,a as N,b as X,M as u,X as l,u as e,N as M,a4 as S,aj as Y,l as Z,O as q,Y as c,I as k,Z as p,_ as T,a2 as w}from"./swiper-vue.f6db05b8.js";import{i as G}from"./isLoggedIn.4e962236.js";import{c as V}from"./cn.a642df04.js";import{_ as J}from"./nuxt-link.b8da881a.js";import{u as x}from"./useMultiLang.c767e2d5.js";const K=["disabled"],Q=j({__name:"ButtonFavorite",props:{productId:{}},setup(d){const r=d,a=H(),t=z(),n=N(!1),s=N(!1),i=o=>a.switchTypeAuth(o),b=o=>a.switchAuthModal(o),m=async()=>{s.value=!0,await t.addToFavorites(r.productId,n)};X(n,()=>{console.log(n.value)});const _=()=>{s.value=!!t.favorites.find(o=>o.id===r.productId)},h=()=>{s.value=!1,t.removeFavorites(r.productId,n)},v=()=>{if(!G())return b(!0),i("login"),!1;if(n.value=!0,s.value)return h(),!1;m()};return _(),(o,y)=>{const f=D,g=E;return u(),l("button",{disabled:e(n),class:"group/favorites absolute right-[10%] top-[7%] w-[20%] rounded-[50%] bg-white pt-[20%] duration-hover group-hover:opacity-100 is-hover:opacity-0",onClick:Y(v,["prevent"])},[e(s)?(u(),M(g,{key:1,class:S(("cn"in o?o.cn:e(V))("absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-status_red duration-hover group-hover:text-status_red"))},null,8,["class"])):(u(),M(f,{key:0,class:S(("cn"in o?o.cn:e(V))("absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-black duration-hover group-hover/favorites:text-status_red"))},null,8,["class"]))],8,K)}}}),R={};function U(d,r){return u(),l("span",null,"₴")}const W=O(R,[["render",U]]),tt={class:"relative mb-[7px] pt-[128%] md:mb-2.5 md:pt-[127.5%] 4xl:mb-5 4xl:pt-[125%]"},et=["src","alt"],ot={class:"mb-[5px] truncate text-[13px] font-medium leading-[15px] md:text-[16px] md:leading-[20px] 4xl:mb-2.5 4xl:text-[20px] 4xl:leading-[24px]"},st={key:0},rt={key:0,class:"flex flex-col"},nt={class:"price_amount"},at={class:"price_cost"},it={key:1},ut={class:"price_amount"},ct={class:"price_cost"},gt=j({__name:"CardProduct",props:{product:{}},setup(d){const r=d,a=Z(()=>{var t,n;return r.product&&r.product.price_type==="variated"?(n=(t=r.product)==null?void 0:t.prices)==null?void 0:n.map((s,i)=>({minAmount:i===0?s.min_amount:null,minPrice:i===0?s.price:null,maxAmount:i===r.product.prices.length-1?s.max_amount:null,maxPrice:i===r.product.prices.length-1?s.price:null})):[]});return(t,n)=>{const s=Q,i=W,b=J;return u(),M(b,{to:`/product/${t.product.id}`,class:"group relative block rounded-[10px] border-[1px] border-transparent bg-white p-2.5 duration-hover hover:border-status_gray md:rounded-[15px] md:p-[15px] 4xl:rounded-[20px] 4xl:p-[20px]"},{default:q(()=>{var m,_,h,v,o,y,f,g,$,C,F,L,A,B,I,P;return[c("div",tt,[c("img",{class:"absolute left-0 top-0 h-full w-full rounded-[7px] object-cover",src:(_=(m=t.product)==null?void 0:m.main_image)==null?void 0:_.path,alt:("useMultiLang"in t?t.useMultiLang:e(x))(t.product,"title")},null,8,et)]),k(s,{productId:t.product.id},null,8,["productId"]),c("h5",ot,p(("useMultiLang"in t?t.useMultiLang:e(x))(t.product,"title")),1),t.product.prices?(u(),l("div",st,[((h=t.product)==null?void 0:h.price_type)==="fixed"?(u(),l("div",rt,[c("span",nt,p(`${(o=(v=t.product)==null?void 0:v.prices[0])==null?void 0:o.min_amount} ${("useMultiLang"in t?t.useMultiLang:e(x))((f=(y=t.product)==null?void 0:y.prices[0])==null?void 0:f.unit,"title")}`),1),c("span",at,[T(p(($=(g=t.product)==null?void 0:g.prices[0])==null?void 0:$.price),1),k(i)])])):w("",!0),((C=t.product)==null?void 0:C.price_type)==="variated"?(u(),l("div",it,[c("div",ut,p(`${(F=e(a)[0])==null?void 0:F.minAmount}-${(L=e(a)[e(a).length-1])==null?void 0:L.maxAmount} ${("useMultiLang"in t?t.useMultiLang:e(x))((B=(A=t.product)==null?void 0:A.prices[0])==null?void 0:B.unit,"title")}`),1),c("div",ct,[T(p(`${(I=e(a)[0])==null?void 0:I.minPrice}-${(P=e(a)[e(a).length-1])==null?void 0:P.maxPrice}`)+" ",1),k(i)])])):w("",!0)])):w("",!0)]}),_:1},8,["to"])}}});export{gt as _};