import{_ as e}from"./TableImg.8375efce.js";import{f as o}from"./BasicForm.d46fdf93.js";import{u as t}from"./useTable.035abbde.js";import{g as i,d as n}from"./appPrivilegeValue.d66ba24b.js";import{P as a}from"./perEnum.9a5ef72f.js";import{_ as r,c as s}from"./AppPrivilegeValueModal.50eaae7b.js";import{b as d}from"./useModal.8b30048f.js";import{_ as l}from"./Authority.vue_vue&type=script&lang.124668b3.js";import{k as m,K as p,o as c,n as u,q as f,Q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.02d3ecdf.js";import"./index.10276049.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";var h=m({name:"AppPrivilegeValue",components:{BasicTable:e,TableAction:o,AppModal:r,Authority:l},setup(){const[e,{openModal:o}]=d(),[r,{reload:l}]=t({title:"列表",api:i,columns:s,canColDrag:!0,useSearchForm:!1,pagination:!1,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:a,registerTable:r,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()}}}});const g=j(" 新增 ");h.render=function(e,o,t,i,n,a){const r=p("a-button"),s=p("Authority"),d=p("TableAction"),l=p("BasicTable"),m=p("AppModal");return c(),u("div",null,[f(l,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{value:this.$options.name+":"+e.PerEnum.ADD},{default:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[g])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:b((({record:o})=>[f(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.UPDATE,title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{auth:this.$options.name+":"+e.PerEnum.DELETE,title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;