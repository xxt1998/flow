import{c as e}from"./index.734d8392.js";import{b as r}from"./index.d57de2e6.js";import{k as s,bN as t,K as i,o as n,n as o,V as a,ah as c,q as d}from"./vendor.9d9efc92.js";import"./useDrawer.1cefc237.js";/* empty css              *//* empty css              */import"./createAsyncComponent.ed3ddf1d.js";import"./useFrameKeepAlive.3781e3fa.js";var p=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&r(s.event,e)}}}});p.render=function(e,r,s,t,p,l){const f=i("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,c(e.colorList||[],(r=>(n(),o("span",{key:r,onClick:s=>e.handleClick(r),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===r}],style:{background:r}},[d(f)],14,["onClick"])))),128))],2)};export default p;