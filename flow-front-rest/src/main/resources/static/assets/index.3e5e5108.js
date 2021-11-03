var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&l(e,o,t[o]);if(n)for(var o of n(t))s.call(t,o)&&l(e,o,t[o]);return e};import{c as i,x as c,ad as u,p as d,w as f}from"./index.b41e2c0e.js";import{y as g,B as p,F as h,v as m,a3 as v,K as y,r as C,Y as b,u as H,Q as F,bm as x,j as $,o as j,Z as w,a0 as P,az as O,an as S,a1 as R,a6 as _,a8 as k,J as B,a7 as E}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              */import{o as W}from"./onMountedOrActivated.c01d8630.js";import{u as L}from"./useWindowSizeFn.308e6090.js";import{a as A}from"./useContentViewHeight.16e0f08b.js";var I=g({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=i("page-footer"),{getCalcContentWidth:t}=c();return{prefixCls:e,getCalcContentWidth:t}}});const z=y()(((e,t,o,n,r,s)=>(p(),h("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[m("div",{class:`${e.prefixCls}__left`},[v(e.$slots,"left",{},void 0,!0)],2),v(e.$slots,"default",{},void 0,!0),m("div",{class:`${e.prefixCls}__right`},[v(e.$slots,"right",{},void 0,!0)],2)],6))));I.render=z,I.__scopeId="data-v-7fd791c4";function D(e,t,o,n,r=C(0)){const s=C(null),{footerHeightRef:l}=A();let a={useLayoutFooter:!0};function i(e){return null==e?null:e instanceof HTMLDivElement?e:e.$el}function c(){return c=this,d=null,f=function*(){if(!e.value)return;yield b();const c=i(H(t));if(!c)return;const{bottomIncludeBody:d}=u(c);let f=0;o.forEach((e=>{var t,o;f+=null!=(o=null==(t=i(H(e)))?void 0:t.offsetHeight)?o:0}));let g=0;n.forEach((e=>{g+=function(e){var t,o;let n=0;const r="0px";let s=r,l=r;if(e){const n=getComputedStyle(e);s=null!=(t=null==n?void 0:n.marginBottom)?t:r,l=null!=(o=null==n?void 0:n.marginTop)?o:r}return s&&(n+=Number(s.replace(/[^\d]/g,""))),l&&(n+=Number(l.replace(/[^\d]/g,""))),n}(i(H(e)))}));let p=d-H(l)-H(r)-f-g;const h=()=>{var e;null==(e=a.elements)||e.forEach((e=>{var t,o;p+=null!=(o=null==(t=i(H(e)))?void 0:t.offsetHeight)?o:0}))};a.useLayoutFooter&&H(l),h(),s.value=p},new Promise(((e,t)=>{var o=e=>{try{r(f.next(e))}catch(o){t(o)}},n=e=>{try{r(f.throw(e))}catch(o){t(o)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,n);r((f=f.apply(c,d)).next())}));var c,d,f}return W((()=>{b((()=>{c()}))})),L((()=>{c()}),50,{immediate:!0}),F((()=>[l.value]),(()=>{c()}),{flush:"post",immediate:!0}),{redoHeight:function(){b((()=>{c()}))},setCompensation:e=>{a=e},contentHeight:s}}var M=g({name:"PageWrapper",components:{PageFooter:I,PageHeader:x},inheritAttrs:!1,props:{title:d.string,dense:d.bool,ghost:d.bool,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool,contentClass:d.string,fixedHeight:d.bool},setup(e,{slots:n}){const r=C(null),s=C(null),l=C(null),c=C(null),{prefixCls:u}=i("page-wrapper"),d=$((()=>e.contentFullHeight)),{redoHeight:f,setCompensation:g,contentHeight:p}=D(d,r,[s,c],[l]);g({useLayoutFooter:!0,elements:[c]});const h=$((()=>[u,{[`${u}--dense`]:e.dense}])),m=$((()=>(null==n?void 0:n.leftFooter)||(null==n?void 0:n.rightFooter))),v=$((()=>Object.keys(j(n,"default","leftFooter","rightFooter","headerContent")))),y=$((()=>{const{contentFullHeight:n,contentStyle:r,fixedHeight:s}=e;if(!n)return a({},r);const l=`${H(p)}px`;return a((i=a({},r),t(i,o({minHeight:l}))),s?{height:l}:{});var i})),b=$((()=>{const{contentBackground:t,contentClass:o}=e;return[`${u}-content`,o,{[`${u}-content-bg`]:t}]}));return F((()=>[m.value]),(()=>{f()}),{flush:"post",immediate:!0}),{getContentStyle:y,wrapperRef:r,headerRef:s,contentRef:l,footerRef:c,getClass:h,getHeaderSlots:v,prefixCls:u,getShowFooter:m,omit:j,getContentClass:b}}});M.render=function(e,t,o,n,r,s){const l=w("PageHeader"),a=w("PageFooter");return p(),h("div",{class:e.getClass,ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(p(),h(l,P({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),O({default:R((()=>[e.content?(p(),h(_,{key:0},[k(B(e.content),1)],64)):v(e.$slots,"headerContent",{key:1})])),_:2},[S(e.getHeaderSlots,(t=>({name:t,fn:R((o=>[v(e.$slots,t,o)]))})))]),1040,["ghost","title"])):E("",!0),m("div",{class:["overflow-hidden",e.getContentClass],style:e.getContentStyle,ref:"contentRef"},[v(e.$slots,"default")],6),e.getShowFooter?(p(),h(a,{key:1,ref:"footerRef"},{left:R((()=>[v(e.$slots,"leftFooter")])),right:R((()=>[v(e.$slots,"rightFooter")])),_:3},512)):E("",!0)],2)},f(I);const N=f(M);export{N as P};