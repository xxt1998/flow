import{_ as e}from"./TableImg.c292f6c6.js";import{g as o}from"./BasicForm.8dd34761.js";import{u as t}from"./useTable.28113166.js";import{g as i,d as n}from"./category.b9599f6f.js";import{_ as a,c as r,s}from"./CategoryModal.9ba14c5a.js";import{h as d}from"./index.63ccfb82.js";import{b as c}from"./index.0433a71f.js";import{y as l,Z as p,B as m,F as f,v as u,a2 as b,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";import"./company.b32eb009.js";const{createMessage:g}=d();var h=l({name:"Category",components:{BasicTable:e,TableAction:o,CategoryModal:a},setup(){const[e,{openModal:o,setModalProps:a}]=c(),[d,{reload:l}]=t({title:"列表",api:i,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(e){a({title:"新增流程分类"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),a({title:"修改流程分类"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),a({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?g.warning("有子节点，不能删除！"):n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const x=j(" 新增 ");h.render=function(e,o,t,i,n,a){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),c=p("CategoryModal");return m(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(s,{actions:[{tooltip:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;