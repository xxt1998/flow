import{_ as e}from"./BasicForm.4b5e3079.js";import{u as o}from"./useForm.c00e8219.js";import{ae as l}from"./index.734d8392.js";import{_ as n}from"./PageWrapper.d199a033.js";import{k as p,K as t,o as s,n as a,Q as i,q as r}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.b121dc3d.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var d=p({components:{BasicForm:e,CollapseContainer:l,PageWrapper:n},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[l]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:l}}});d.render=function(e,o,l,n,p,d){const c=t("BasicForm"),m=t("CollapseContainer"),f=t("PageWrapper");return s(),a(f,{title:"可折叠表单示例"},{default:i((()=>[r(m,{title:"基础收缩示例"},{default:i((()=>[r(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),r(m,{title:"超过3行自动收起",class:"mt-4"},{default:i((()=>[r(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;