import o from"./Login.0819699a.js";import{c as e,f as s,N as r,X as i,b2 as t}from"./index.99f998d8.js";import{j as d,r as a,I as n,a3 as m,K as p,o as f,m as j,n as l,T as c,x as u}from"./vendor.686fd1d4.js";import"./LoginForm.1d4cd2ca.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.19e53e99.js";import"./ForgetPasswordForm.817d0f04.js";import"./index.b526d419.js";import"./RegisterForm.62700429.js";import"./index.4641642c.js";import"./MobileForm.4ee23d99.js";import"./QrCodeForm.c87d3e9b.js";import"./index.1fd78f8f.js";import"./download.9a81d061.js";import"./base64Conver.bb012c73.js";var g=d({name:"SessionTimeoutLogin",components:{Login:o},setup(){const{prefixCls:o}=e("st-login"),d=s(),p=r(),f=i(),j=a(0);return n((()=>{var o;j.value=null==(o=d.getUserInfo)?void 0:o.userId})),m((()=>{(j.value&&j.value!==d.getUserInfo.userId||f.getProjectConfig.permissionMode===t.BACK&&0===p.getLastBuildMenuTime)&&document.location.reload()})),{prefixCls:o}}});const x=u(),b=x(((o,e,s,r,i,t)=>{const d=p("Login");return f(),j(c,null,{default:x((()=>[l("div",{class:o.prefixCls},[l(d,{sessionTimeout:""})],2)])),_:1})}));g.render=b,g.__scopeId="data-v-43322cae";export default g;