import{A as L,bC as _,ba as $,a0 as o,B as s,a1 as c,a6 as r,D as p,ap as d,ab as m,K as a,w as y,H as i,J as l,ae as u,ad as k}from"./vendor.5879c5ca.js";/* empty css                *//* empty css               *//* empty css               */import{I as b,_ as j}from"./index.aeb7d9f7.js";import{articleList as g,actions as B}from"./data.c11e663a.js";const M=L({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,Tag:$,Icon:b},setup(){return{prefixCls:"account-center-article",list:g,actions:B}}});function N(e,T,V,A,h,w){const f=o("Tag"),C=o("ListItemMeta"),I=o("Icon"),v=o("ListItem"),x=o("List");return s(),c(x,{"item-layout":"vertical",class:a(e.prefixCls)},{default:r(()=>[(s(!0),p(m,null,d(e.list,n=>(s(),c(v,{key:n.title},{default:r(()=>[y(C,null,{description:r(()=>[i("div",{class:a(`${e.prefixCls}__content`)},l(n.content),3)]),title:r(()=>[i("p",{class:a(`${e.prefixCls}__title`)},l(n.title),3),i("div",null,[(s(!0),p(m,null,d(n.description,t=>(s(),c(f,{key:t,class:"mb-2"},{default:r(()=>[u(l(t),1)]),_:2},1024))),128))])]),_:2},1024),i("div",null,[(s(!0),p(m,null,d(e.actions,t=>(s(),p("div",{key:t.text,class:a(`${e.prefixCls}__action`)},[t.icon?(s(),c(I,{key:0,class:a(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):k("",!0),u(" "+l(t.text),1)],2))),128)),i("span",{class:a(`${e.prefixCls}__time`)},l(n.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var K=j(M,[["render",N],["__scopeId","data-v-7e92b386"]]);export{K as default};