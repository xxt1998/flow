var I=Object.defineProperty;var B=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(u,o,e)=>o in u?I(u,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[o]=e,E=(u,o)=>{for(var e in o||(o={}))j.call(o,e)&&h(u,e,o[e]);if(B)for(var e of B(o))y.call(o,e)&&h(u,e,o[e]);return u};var p=(u,o,e)=>new Promise((l,a)=>{var d=t=>{try{r(e.next(t))}catch(i){a(i)}},n=t=>{try{r(e.throw(t))}catch(i){a(i)}},r=t=>t.done?l(t.value):Promise.resolve(t.value).then(d,n);r((e=e.apply(u,o)).next())});import{B as M,a as v}from"./index.309f7e13.js";import{B as A}from"./BasicForm.bfb70ce4.js";import{u as x}from"./useForm.9d0149a6.js";import{c as C,s as N}from"./jobGrade.18fb44eb.js";import{F as P}from"./constantEnum.82824ec7.js";import{_ as q}from"./index.aeb7d9f7.js";import{A as S,r as R,u as F,j as k,a0 as b,B as $,a1 as G,a6 as V,w as J,a4 as O}from"./vendor.5879c5ca.js";const ue=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left"},{title:"\u6392\u5E8F\u53F7",dataIndex:"orderNo",width:100,align:"left"}],oe=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],L=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}]},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",show:!0},{field:"typeId",label:"\u7C7B\u578BID",required:!1,component:"Input",show:!1},{field:"typeCode",label:"\u7C7B\u522B\u7F16\u7801",required:!1,component:"Input",show:!1},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber",show:!0}],T=S({name:"JobGradeModal",components:{BasicModal:M,BasicForm:A},emits:["success","register"],setup(u,{emit:o}){const e=R(!0),[l,{resetFields:a,updateSchema:d,setFieldsValue:n,validate:r}]=x({labelWidth:100,schemas:L,showActionButtonGroup:!1}),t=s=>[{trigger:"blur",validator:(m,g)=>g?C({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(f=>f?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(f=>Promise.reject(f)):Promise.resolve()}],[i,{setModalProps:c,closeModal:w}]=v(s=>p(this,null,function*(){yield a(),c({confirmLoading:!1}),e.value=!!(s==null?void 0:s.isUpdate);let m=s.record;yield d([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(P.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...t({id:F(e)&&m&&m.id||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&n(E({},s.record))})),D=k(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return p(this,null,function*(){try{c({confirmLoading:!0});const s=yield r();yield N(s),w(),o("success")}finally{c({confirmLoading:!1})}})}return{registerModal:i,registerForm:l,getTitle:D,handleSubmit:_}}});function U(u,o,e,l,a,d){const n=b("BasicForm"),r=b("BasicModal");return $(),G(r,O(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:V(()=>[J(n,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var W=q(T,[["render",U]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{W as J,se as a,ue as c,oe as s};