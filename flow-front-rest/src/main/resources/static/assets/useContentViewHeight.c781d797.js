var H=(t,i,e)=>new Promise((u,o)=>{var f=n=>{try{a(e.next(n))}catch(s){o(s)}},d=n=>{try{a(e.throw(n))}catch(s){o(s)}},a=n=>n.done?u(n.value):Promise.resolve(n.value).then(f,d);a((e=e.apply(t,i)).next())});import{C as m}from"./index.142c38e7.js";import{u as w}from"./useWindowSizeFn.e269959a.js";import{r,j as p,u as c}from"./vendor.5eb38889.js";const v=Symbol();function l(t){return m(t,v,{native:!0})}const g=r(0),h=r(0);function F(){function t(e){g.value=e}function i(e){h.value=e}return{headerHeightRef:g,footerHeightRef:h,setHeaderHeight:t,setFooterHeight:i}}function S(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(h)||0);w(()=>{t.value=window.innerHeight},100,{immediate:!0});function u(o){return H(this,null,function*(){i.value=o})}l({contentHeight:e,setPageHeight:u,pageHeight:i})}export{F as a,S as u};