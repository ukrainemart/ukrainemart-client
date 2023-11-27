import D from"./Hearth.61c28977.js";import O from"./HearthBg.1f36fd33.js";import{_ as U,g as X,e as f,c as h}from"./entry.47120633.js";import{M as a,X as m,a as Y,x as Z,l as S,N as x,O as q,Y as r,u as s,aj as G,a4 as T,Z as d,_ as V,I as j,a3 as g}from"./swiper-vue.01371f92.js";import{_ as J}from"./nuxt-link.a52f80f3.js";import{u as E}from"./useMultiLang.42814600.js";import{c as H}from"./cn.a642df04.js";const K={};function Q(i,e){return a(),m("span",null,"₴")}const R=U(K,[["render",Q]]),W=X("favoritesStore",()=>{const i=Y([]);function e(){f(`${h()}/user/favorite/list`,{transform(o){return Array.isArray(o)?o.map(n=>n.product):[]}}).then(o=>{i.value=o.data.value,console.log(i.value)})}function p(o){f(`${h()}/user/favorite/add/${o}`).then(n=>{n.data.value.status===1&&e()})}function _(o){f(`${h()}/user/favorite/destroy/${o}`).then(n=>{n.data.value.status===1&&e()})}return e(),{favorites:i,fetchFavorites:e,addToFavorites:p,removeFavorites:_}}),tt={class:"relative mb-[7px] pt-[128%] md:mb-2.5 md:pt-[127.5%] 4xl:mb-5 4xl:pt-[125%]"},et=["src","alt"],ot=["onClick"],st={class:"mb-[5px] truncate text-[13px] font-medium leading-[15px] md:text-[16px] md:leading-[20px] 4xl:mb-2.5 4xl:text-[20px] 4xl:leading-[24px]"},rt={key:0},nt={key:0,class:"flex flex-col"},at={class:"price_amount"},it={class:"price_cost"},ct={key:1},ut={class:"price_amount"},lt={class:"price_cost"},xt=Z({__name:"CardProduct",props:{product:{},isFavorites:{type:Boolean}},setup(i){const e=i,p=W(),_=()=>{p.addToFavorites(e.product.id)},o=S(()=>!!p.favorites.find(t=>t.id===e.product.id)),n=()=>{p.removeFavorites(e.product.id)},I=()=>{if(o.value)return n(),!1;_()},c=S(()=>{var t,v;return e.product&&e.product.price_type==="variated"?(v=(t=e.product)==null?void 0:t.prices)==null?void 0:v.map((u,l)=>({minAmount:l===0?u.min_amount:null,minPrice:l===0?u.price:null,maxAmount:l===e.product.prices.length-1?u.max_amount:null,maxPrice:l===e.product.prices.length-1?u.price:null})):[]});return(t,v)=>{const u=D,l=O,y=R,z=J;return a(),x(z,{to:`/product/${t.product.id}`,class:"relative block rounded-[10px] bg-white p-2.5 md:rounded-[15px] md:p-[15px] 4xl:rounded-[20px] 4xl:p-[20px]"},{default:q(()=>{var b,k,F,C,$,w,A,B,M,P,L,N;return[r("div",tt,[r("img",{class:"absolute left-0 top-0 h-full w-full rounded-[7px] object-cover",src:(k=(b=t.product)==null?void 0:b.main_image)==null?void 0:k.path,alt:("useMultiLang"in t?t.useMultiLang:s(E))(t.product,"title")},null,8,et)]),r("button",{class:"group absolute right-[15%] top-[7%] w-[22%] rounded-[50%] bg-white pt-[22%]",onClick:G(I,["prevent"])},[s(o)?(a(),x(l,{key:1,class:T(("cn"in t?t.cn:s(H))("absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-status_red duration-hover group-hover:text-status_red"))},null,8,["class"])):(a(),x(u,{key:0,class:T(("cn"in t?t.cn:s(H))("absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-black duration-hover group-hover:text-status_red"))},null,8,["class"]))],8,ot),r("h5",st,d(("useMultiLang"in t?t.useMultiLang:s(E))(t.product,"title")),1),t.product.prices?(a(),m("div",rt,[((F=t.product)==null?void 0:F.price_type)==="fixed"?(a(),m("div",nt,[r("span",at,d(($=(C=t.product)==null?void 0:C.prices[0])==null?void 0:$.min_amount),1),r("span",it,[V(d((A=(w=t.product)==null?void 0:w.prices[0])==null?void 0:A.price),1),j(y)])])):g("",!0),((B=t.product)==null?void 0:B.price_type)==="variated"?(a(),m("div",ct,[r("div",ut,d(`${(M=s(c)[0])==null?void 0:M.minAmount}-${(P=s(c)[s(c).length-1])==null?void 0:P.maxAmount}`),1),r("div",lt,[V(d(`${(L=s(c)[0])==null?void 0:L.minPrice}-${(N=s(c)[s(c).length-1])==null?void 0:N.maxPrice}`)+" ",1),j(y)])])):g("",!0)])):g("",!0)]}),_:1},8,["to"])}}});export{xt as _,W as u};
