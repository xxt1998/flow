import{_ as e}from"./TableImg.c292f6c6.js";import"./BasicForm.8dd34761.js";import{getBasicColumns as i,getBasicData as o}from"./tableData.3f3da3f1.js";import{y as a,r as n,Z as t,B as r,F as s,v as d,a2 as l,a9 as c,J as p}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";import"./index.63ccfb82.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0433a71f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";var m=a({components:{BasicTable:e},setup(){const e=n(!1),a=n(!1),t=n(!0),r=n(!0),s=n(!1);return{columns:i(),data:o(),canResize:e,loading:a,striped:t,border:r,toggleStriped:function(){t.value=!t.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){a.value=!0,setTimeout((()=>{a.value=!1,s.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:s,handleColumnChange:function(e){}}}});const u={class:"p-4"},f=c(" 开启loading ");m.render=function(e,i,o,a,n,m){const g=t("a-button"),b=t("BasicTable");return r(),s("div",u,[d(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination,onColumnsChange:e.handleColumnChange},{toolbar:l((()=>[d(g,{type:"primary",onClick:e.toggleCanResize},{default:l((()=>[c(p(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),d(g,{type:"primary",onClick:e.toggleBorder},{default:l((()=>[c(p(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),d(g,{type:"primary",onClick:e.toggleLoading},{default:l((()=>[f])),_:1},8,["onClick"]),d(g,{type:"primary",onClick:e.toggleStriped},{default:l((()=>[c(p(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])};export default m;