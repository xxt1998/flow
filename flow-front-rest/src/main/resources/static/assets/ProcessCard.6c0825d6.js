import{y as e,b6 as s,bw as t,r as a,Z as o,B as i,F as r,a1 as n,v as d,a8 as m,J as p,a0 as c}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{todoTableSchema as b,haveDownTableSchema as f,dynamicInfoItems as l}from"./data.2807e007.js";import{h as u}from"./header.d801b988.js";import{_ as j}from"./index.f77a0916.js";import{_ as I}from"./TableImg.4999f0f8.js";import"./useForm.6952a806.js";import{u as x}from"./useTable.56e0200e.js";import{a as y,b as g}from"./process.99e51905.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.308e6090.js";import"./index.f892cb46.js";import"./onMountedOrActivated.c01d8630.js";/* empty css              */import"./useSortable.121e2df4.js";/* empty css              */import"./index.d12a2c0f.js";import"./download.36d5ff94.js";import"./index.932a5062.js";const v=[{key:"todo",tab:"待办"},{key:"haveDown",tab:"已办"}];var T=e({components:{Card:s,List:t,ListItem:t.Item,ListItemMeta:t.Item.Meta,Icon:j,BasicTable:I},setup(e){const s=a("todo"),[t]=x({api:y,title:"",columns:b,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1}),[o]=x({api:g,title:"",columns:f,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1});return{items:l,onTabChange:(e,t)=>{s.value=e},headerImg:u,activeKey:s,registerTodoTable:t,registerHaveDownTable:o,tabList:v}}});const h=m("更多"),K={key:0},k={key:1};T.render=function(e,s,t,a,b,f){const l=o("a-button"),u=o("router-link"),j=o("BasicTable"),I=o("Card");return i(),r(I,c(e.$attrs,{tabList:e.tabList,activeTabKey:e.activeKey,onTabChange:s[1]||(s[1]=s=>e.onTabChange(s,"todo")),bodyStyle:"padding-top:0;"}),{tabBarExtraContent:n((()=>[d(l,{type:"link",size:"small"},{default:n((()=>[h])),_:1})])),default:n((()=>["todo"===e.activeKey?(i(),r("p",K,[d(j,{onRegister:e.registerTodoTable,class:"mt-0"},{nameRender:n((({record:e})=>[d(u,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:n((()=>[m(p(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])):(i(),r("p",k,[d(j,{onRegister:e.registerHaveDownTable},{nameRender:n((({record:e})=>[d(u,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:n((()=>[m(p(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])]))])),_:1},16,["tabList","activeTabKey"])};export default T;