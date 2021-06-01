import{_ as e}from"./TableImg.8375efce.js";import{f as o}from"./BasicForm.d46fdf93.js";import{u as t}from"./useTable.035abbde.js";import{g as n,d as i}from"./app.c0d4f7cb.js";import{c as s,s as r}from"./app.data.802da367.js";import a from"./AppModal.0dc1dc93.js";import d from"./SecretKeyModal.0dc9e49a.js";import{b as c}from"./useModal.8b30048f.js";import{k as l,K as p,o as m,n as u,q as f,Q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.02d3ecdf.js";import"./index.10276049.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";/* empty css              */var h=l({name:"App",components:{BasicTable:e,TableAction:o,AppModal:a,SecretKeyModal:d},setup(){const[e,{openModal:o}]=c(),[a,{openModal:d,setModalProps:l}]=c(),[p,{reload:m}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:100,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:p,registerModal:e,registerSecretKeyModal:a,handleCloseFunc:function(){return m(),Promise.resolve(!0)},handleCreate:function(){o(!0,{isUpdate:!1})},handleEditSecretKey:function(e){d(!0,{record:e,isUpdate:!0}),l({title:`修改【${e.name}】的密钥`,showOkBtn:!1,cancelText:"关闭"})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((()=>{m()}))},handleSuccess:function(){m()},handleUpdateSecretKeySuccess:function(){m()}}}});const S=j(" 新增 ");h.render=function(e,o,t,n,i,s){const r=p("a-button"),a=p("TableAction"),d=p("BasicTable"),c=p("AppModal"),l=p("SecretKeyModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[S])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(a,{actions:[{title:"编辑密钥",icon:"ant-design:eye-outlined",onClick:e.handleEditSecretKey.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),f(l,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])};export default h;