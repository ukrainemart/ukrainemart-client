import{h as c}from"./entry.61600fec.js";function h(u,e={}){let r={};const a=c("XSRF-TOKEN");return a.value&&(r["X-XSRF-TOKEN"]=a.value),$fetch(u,{credentials:"include",...e,headers:{...r,...e==null?void 0:e.headers}})}export{h as u};