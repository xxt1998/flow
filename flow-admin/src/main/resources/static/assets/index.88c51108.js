import o from"./LockPage.75715e3c.js";import{u as e}from"./lock.ffb7c980.js";import{j as t,i as r,K as s,o as a,m as n,Q as c,X as m,T as d}from"./vendor.686fd1d4.js";import"./index.f9173908.js";import"./header.d801b988.js";var f=t({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:r((()=>{var e,t;return null!=(t=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&t}))}}});f.render=function(o,e,t,r,f,i){const u=s("LockPage");return a(),n(d,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(a(),n(u,{key:0})):m("",!0)])),_:1})};export default f;