import{_ as e}from"./TableImg.4a5f8f0f.js";import"./BasicForm.7c543d71.js";import{u as i}from"./useTable.a87cba2e.js";import{getBasicColumns as o,getTreeTableData as s}from"./tableData.83d6955e.js";import{j as t,K as r,o as a,m as d,n,Q as p,Y as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.42b3028e.js";import"./index.29a0a4fb.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.44f8140f.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a100a250.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.e5b0725d.js";/* empty css              *//* empty css              *//* empty css              */import"./download.173d4fef.js";import"./base64Conver.bb012c73.js";import"./index.186d815d.js";var l=t({components:{BasicTable:e},setup(){const[e,{expandAll:t,collapseAll:r}]=i({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:o(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:t,collapseAll:r}}});const c={class:"p-4"},f=m("展开全部"),j=m("折叠全部");l.render=function(e,i,o,s,t,m){const l=r("a-button"),b=r("BasicTable");return a(),d("div",c,[n(b,{onRegister:e.register},{toolbar:p((()=>[n(l,{type:"primary",onClick:e.expandAll},{default:p((()=>[f])),_:1},8,["onClick"]),n(l,{type:"primary",onClick:e.collapseAll},{default:p((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;