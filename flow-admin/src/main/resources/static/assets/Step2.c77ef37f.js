var t=(t,e,s)=>new Promise(((i,o)=>{var n=t=>{try{r(s.next(t))}catch(e){o(e)}},a=t=>{try{r(s.throw(t))}catch(e){o(e)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,a);r((s=s.apply(t,e)).next())}));import{_ as e}from"./BasicForm.4961b69c.js";import{u as s}from"./useForm.4f4a10e2.js";import{step2Schemas as i}from"./data.2505cb7f.js";import{k as o,bz as n,aV as a,bl as r,l as m,m as c,K as d,o as p,n as l,q as u,x as f,Y as b}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f36f9bca.js";import"./CountdownInput.0ef22e66.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.c70d8b8c.js";import"./useWindowSizeFn.0534066c.js";/* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";var j=o({components:{BasicForm:e,[n.name]:n,[a.name]:a,[r.name]:r,[r.Item.name]:r.Item},emits:["next","prev"],setup(e,{emit:o}){const[n,{validate:a,setProps:r}]=s({labelWidth:80,schemas:i,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:function(){return t(this,null,(function*(){o("prev")}))},submitFunc:function(){return t(this,null,(function*(){try{const t=yield a();r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),o("next",t)}),1500)}catch(t){}}))}});return{register:n}}});const x=f();m("data-v-0c66c08b");const v={class:"step2"},h=b(" ant-design@alipay.com "),g=b(" test@example.com "),_=b(" Vben "),B=b(" 500元 ");c();const F=x(((t,e,s,i,o,n)=>{const a=d("a-alert"),r=d("a-descriptions-item"),m=d("a-descriptions"),c=d("a-divider"),f=d("BasicForm");return p(),l("div",v,[u(a,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),u(m,{column:1,class:"mt-5"},{default:x((()=>[u(r,{label:"付款账户"},{default:x((()=>[h])),_:1}),u(r,{label:"收款账户"},{default:x((()=>[g])),_:1}),u(r,{label:"收款人姓名"},{default:x((()=>[_])),_:1}),u(r,{label:"转账金额"},{default:x((()=>[B])),_:1})])),_:1}),u(c),u(f,{onRegister:t.register},null,8,["onRegister"])])}));j.render=F,j.__scopeId="data-v-0c66c08b";export default j;