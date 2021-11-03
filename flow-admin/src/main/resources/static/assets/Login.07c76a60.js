import{A as e,a as o,b as s,u as r,c as t,d as l,e as i}from"./index.514e05b1.js";import n from"./LoginForm.cf44f148.js";import a from"./ForgetPasswordForm.89433e38.js";import m from"./RegisterForm.6607065d.js";import x from"./MobileForm.574c115f.js";import p from"./QrCodeForm.58943113.js";import{z as d,j as c,Z as f,D as g,F as u,a8 as w,w as h,J as F}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.1c0272f2.js";import"./index.6b57f630.js";import"./index.ceaa815e.js";import"./index.43d51a23.js";import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";var b=d({name:"Login",components:{AppLogo:e,LoginForm:n,ForgetPasswordForm:a,RegisterForm:m,MobileForm:x,QrCodeForm:p,AppLocalePicker:o,AppDarkModeToggle:s},props:{sessionTimeout:{type:Boolean}},setup(){const e=r(),{prefixCls:o}=t("login"),{t:s}=i(),n=l();return{t:s,prefixCls:o,title:c((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:n.getShowPicker}}});const j={class:"-enter-x xl:hidden"},v={class:"container relative h-full py-2 mx-auto sm:px-10"},y={class:"flex h-full"},L={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},k={class:"my-auto"},T={class:"mt-10 font-medium text-white -enter-x"},C={class:"inline-block mt-4 text-3xl"},A={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},P={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"};b.render=function(e,o,s,r,t,l){const i=f("AppLocalePicker"),n=f("AppDarkModeToggle"),a=f("AppLogo"),m=f("LoginForm"),x=f("ForgetPasswordForm"),p=f("RegisterForm"),d=f("MobileForm"),c=f("QrCodeForm");return g(),u("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[!e.sessionTimeout&&e.showLocale?(g(),u(i,{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):w("",!0),e.sessionTimeout?w("",!0):(g(),u(n,{key:1,class:"absolute top-3 right-7 enter-x"})),h("span",j,[h(a,{alwaysShowTitle:!0})]),h("div",v,[h("div",y,[h("div",L,[h(a,{class:"-enter-x"}),h("div",k,[h("img",{alt:e.title,src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),h("div",T,[h("span",C,F(e.t("sys.login.signInTitle")),1)]),h("div",A,F(e.t("sys.login.signInDesc")),1)])]),h("div",P,[h("div",{class:[`${e.prefixCls}-form`,"\r\n              relative\r\n              w-full\r\n              px-5\r\n              py-8\r\n              mx-auto\r\n              my-auto\r\n              rounded-md\r\n              shadow-md\r\n              xl:ml-16 xl:bg-transparent\r\n              sm:px-8\r\n              xl:p-4 xl:shadow-none\r\n              sm:w-3/4\r\n              lg:w-2/4\r\n              xl:w-auto\r\n              enter-x\r\n            "]},[h(m),h(x),h(p),h(d),h(c)],2)])])])],2)};export default b;