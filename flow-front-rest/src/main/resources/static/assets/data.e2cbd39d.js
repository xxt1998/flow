import{w as t,bC as a}from"./vendor.5eb38889.js";/* empty css                */const o=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"dateRange",label:"\u65F6\u95F4\u8303\u56F4",component:"RangePicker",componentProps:{placeholder:"\u9009\u62E9\u65F6\u95F4"},labelWidth:80,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"\u7CFB\u7EDF",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],l=[{title:"\u72B6\u6001",width:80,dataIndex:"processStatusName",customRender:({record:e})=>t(a,{status:"success",text:e.processStatusName},null)},{title:"\u6D41\u7A0B\u6807\u9898",dataIndex:"formName",align:"left",slots:{customRender:"nameRender"}},{title:"\u63D0\u4EA4\u4EBA",width:70,dataIndex:"startPersonName",align:"left"},{title:"\u5BA1\u6279\u65F6\u95F4",width:150,dataIndex:"startTime"},{title:"\u603B\u8017\u65F6",width:150,dataIndex:"totalTime",align:"left"},{title:"\u6240\u5C5E\u7CFB\u7EDF",width:150,dataIndex:"appName",align:"left"}];export{l as haveDownTableSchema,o as searchFormSchema};