import{B as g}from"./TableImg.513742d5.js";import{T as C}from"./BasicForm.0ba2e15f.js";import{u as x}from"./useTable.6e5baa13.js";import{g as _,d as B}from"./dept.2ea41d4f.js";import{P as E}from"./index.ea14bdae.js";import T from"./CompanyTree.1a3efee0.js";import{_ as F,h as w}from"./index.e84e956c.js";import{b as y}from"./index.c505e96f.js";import{D as S,c as D,s as M}from"./DeptModal.aa26643e.js";import{A as k,r as v,a0 as o,B as P,a1 as A,a6 as l,w as i,u as I,ae as R}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                *//* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";import"./company.54be1035.js";import"./index.b01bb303.js";import"./personal.2ea6ac2c.js";import"./OrgTree.e1eb4fc9.js";const{createMessage:W}=w(),$=k({name:"DeptManagement",components:{BasicTable:g,PageWrapper:E,CompanyTree:T,DeptModal:S,TableAction:C},setup(){const[t,{openModal:s,setModalProps:r}]=y(),d=v({}),[h,{reload:n}]=x({title:"\u5217\u8868",api:_,columns:D,formConfig:{labelWidth:120,schemas:M,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function p(){var e;r({title:"\u65B0\u589E\u90E8\u95E8"}),s(!0,{record:{companyId:(e=I(d))==null?void 0:e.id},isUpdate:!1})}function c(e,u){u.stopPropagation(),r({title:"\u4FEE\u6539\u90E8\u95E8"}),s(!0,{record:e,isUpdate:!0})}function m(e,u){u.stopPropagation(),r({title:"\u65B0\u589E\u3010"+e.name+"\u3011\u7684\u5B50\u90E8\u95E8"}),e={pid:e.id},s(!0,{record:e,isUpdate:!0})}function f(e){if(e.children&&e.children.length>0){W.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}B([e.id]).then(u=>{n()})}function b(){n()}function j(){n()}function a(e){d.value=e,n({searchInfo:{companyId:e?e.id:""}})}return{registerTable:h,registerModal:t,handleCreate:p,handleEdit:c,handleCreateChild:m,handleDelete:f,handleSuccess:j,handleSelect:a,doSearch:b}}}),H=R("\u65B0\u589E");function N(t,s,r,d,h,n){const p=o("CompanyTree"),c=o("a-button"),m=o("TableAction"),f=o("BasicTable"),b=o("DeptModal"),j=o("PageWrapper");return P(),A(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:l(()=>[i(p,{class:"w-1/4 xl:w-1/5",onSelect:t.handleSelect},null,8,["onSelect"]),i(f,{onRegister:t.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:l(()=>[i(c,{type:"primary",onClick:t.handleCreate},{default:l(()=>[H]),_:1},8,["onClick"])]),action:l(({record:a})=>[i(m,{actions:[{tooltip:"\u6DFB\u52A0\u5B50\u90E8\u95E8",icon:"ant-design:plus-outlined",onClick:t.handleCreateChild.bind(null,a)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,a)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(b,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var ye=F($,[["render",N]]);export{ye as default};