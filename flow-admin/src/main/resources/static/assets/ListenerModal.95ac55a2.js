var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,a=(e,i,r)=>new Promise(((t,o)=>{var a=e=>{try{n(r.next(e))}catch(i){o(i)}},s=e=>{try{n(r.throw(e))}catch(i){o(i)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,s);n((r=r.apply(e,i)).next())}));import{B as s,a as n}from"./index.5b995397.js";import{_ as l}from"./BasicForm.ae4250e1.js";import{u as d}from"./useForm.213a5276.js";import{h as m,b as c,d as f,i as p,j as u}from"./listener.data.d62505c8.js";import{z as j,r as b,u as g,j as v,Z as y,D as x,F as h,a3 as P,w,a0 as F}from"./vendor.11d66826.js";import"./index.514e05b1.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";var O=j({name:"ListenerModal",components:{BasicModal:s,BasicForm:l},emits:["success","register"],setup(e,{emit:s}){const l=b(!0),[j,{resetFields:y,updateSchema:x,setFieldsValue:h,validate:P}]=d({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[w,{setModalProps:F,closeModal:O}]=n((e=>a(this,null,(function*(){yield y(),F({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let a=e.record;const s=yield c(),n=yield f(),d={};s.forEach((e=>{d[e.value]=e.label})),x({field:"value",label:d[a.type||"class"]}),yield x([{field:"name",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"},...(e={id:g(l)&&a&&a.id||"",field:"name",fieldValue:"",fieldName:"名称"},[{trigger:"blur",validator:(i,r)=>r?p({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}},{field:"type",componentProps:{options:s,onChange:e=>{x({field:"value",label:d[e.target.value]})}}},{field:"listenerType",componentProps:{options:n}}]),h(((e,a)=>{for(var s in a||(a={}))r.call(a,s)&&o(e,s,a[s]);if(i)for(var s of i(a))t.call(a,s)&&o(e,s,a[s]);return e})({},e.record))}))));return{registerModal:w,registerForm:j,getTitle:v((()=>g(l)?"修改":"新增")),handleSubmit:function(){return a(this,null,(function*(){try{F({confirmLoading:!0});const e=yield P();yield u(e),O(),s("success")}finally{F({confirmLoading:!1})}}))}}}});O.render=function(e,i,r,t,o,a){const s=y("BasicForm"),n=y("BasicModal");return x(),h(n,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:P((()=>[w(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default O;