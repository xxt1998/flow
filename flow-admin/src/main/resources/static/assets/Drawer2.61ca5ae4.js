import{B as c,a as i}from"./index.dd6f5fe5.js";import{_ as p}from"./index.9eb02b52.js";import{A as d,a0 as o,B as _,a1 as m,a6 as t,w as u,a4 as f,ae as a}from"./vendor.7bee64cc.js";/* empty css               */const w=d({components:{BasicDrawer:c},setup(){const[e,{closeDrawer:r}]=i();return{register:e,closeDrawer:r}}}),l=a(" Drawer Info. "),D=a(" \u5185\u90E8\u5173\u95EDdrawer ");function B(e,r,b,g,h,x){const s=o("a-button"),n=o("BasicDrawer");return _(),m(n,f(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:t(()=>[l,u(s,{type:"primary",onClick:e.closeDrawer},{default:t(()=>[D]),_:1},8,["onClick"])]),_:1},16,["onRegister"])}var v=p(w,[["render",B]]);export{v as default};