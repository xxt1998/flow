import{A as C,bM as F,a0 as n,B as b,a1 as x,a6 as i,w as e,ae as a}from"./vendor.5879c5ca.js";/* empty css                */import{u}from"./index.b78cb146.js";import y from"./Drawer1.f56bfc10.js";import E from"./Drawer2.15ea4637.js";import A from"./Drawer3.2606242c.js";import B from"./Drawer4.0887bdc9.js";import R from"./Drawer5.6f5b8c8b.js";import{P as k}from"./index.ea14bdae.js";import{_ as h}from"./index.e84e956c.js";/* empty css               */import"./BasicForm.0ba2e15f.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.8b70aabd.js";/* empty css                *//* empty css                */import"./index.c505e96f.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";import"./useForm.696aa965.js";/* empty css                *//* empty css                */import"./useContentViewHeight.ccc8749b.js";const v=C({components:{Alert:F,PageWrapper:k,Drawer1:y,Drawer2:E,Drawer3:A,Drawer4:B,Drawer5:R},setup(){const[r,{openDrawer:o,setDrawerProps:p}]=u(),[l,{openDrawer:j}]=u(),[g,{openDrawer:s}]=u(),[t,{openDrawer:m}]=u(),[d,{openDrawer:c}]=u();function w(){m(!0,{data:"content",info:"Info"})}function D(){o(),p({loading:!0}),setTimeout(()=>{p({loading:!1})},2e3)}return{register1:r,openDrawer1:o,register2:l,openDrawer2:j,register3:g,openDrawer3:s,register4:t,register5:d,openDrawer5:c,send:w,openDrawerLoading:D}}}),$=a(" \u6253\u5F00Drawer "),P=a(" \u6253\u5F00Drawer "),W=a(" \u6253\u5F00Drawer "),V=a(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E "),L=a(" \u6253\u5F00\u8BE6\u60C5Drawer ");function N(r,o,p,l,j,g){const s=n("Alert"),t=n("a-button"),m=n("Drawer1"),d=n("Drawer2"),c=n("Drawer3"),w=n("Drawer4"),D=n("Drawer5"),_=n("PageWrapper");return b(),x(_,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:i(()=>[e(s,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),e(t,{type:"primary",class:"my-4",onClick:r.openDrawerLoading},{default:i(()=>[$]),_:1},8,["onClick"]),e(s,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),e(t,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=f=>r.openDrawer2(!0))},{default:i(()=>[P]),_:1}),e(s,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),e(t,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=f=>r.openDrawer3(!0))},{default:i(()=>[W]),_:1}),e(s,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),e(t,{type:"primary",class:"my-4",onClick:r.send},{default:i(()=>[V]),_:1},8,["onClick"]),e(s,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),e(t,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=f=>r.openDrawer5(!0))},{default:i(()=>[L]),_:1}),e(m,{onRegister:r.register1},null,8,["onRegister"]),e(d,{onRegister:r.register2},null,8,["onRegister"]),e(c,{onRegister:r.register3},null,8,["onRegister"]),e(w,{onRegister:r.register4},null,8,["onRegister"]),e(D,{onRegister:r.register5},null,8,["onRegister"])]),_:1})}var fe=h(v,[["render",N]]);export{fe as default};