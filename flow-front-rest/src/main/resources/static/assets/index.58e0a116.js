import{k as a,bm as e,r as n,K as o,o as r,n as t,P as i,q as d}from"./vendor.59fe1062.js";/* empty css              *//* empty css              *//* empty css              */import{_ as s}from"./PageWrapper.01f0bc61.js";import l from"./DynamicInfo.a5e99dd7.js";import m from"./BannerInfo.7c8a7077.js";import f from"./NoticeInfo.1f06e4b0.js";import c from"./ITWikiCard.0a29b8fe.js";import g from"./ITContactCard.553e19e9.js";import p from"./CommonDownCard.028ad29e.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.5f5fdb47.js";import"./index.21cfc268.js";import"./usePageContext.557e08ad.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.932ae6a7.js";/* empty css              *//* empty css              *//* empty css              */var y=a({components:{PageWrapper:s,DynamicInfo:l,BannerInfo:m,NoticeInfo:f,ITWikiCard:c,ITContactCard:g,CommonDownCard:p,Card:e},setup(){const a=n(!0);return setTimeout((()=>{a.value=!1}),1500),{loading:a,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const x={class:"lg:flex"},C={class:"lg:w-10/10 w-full enter-y"},b={class:"lg:flex"},v={class:"lg:w-4/10 w-full !mr-4 enter-y"},w={class:"lg:w-6/10 w-full enter-y"},S={class:"lg:flex mt-4"},T={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"};y.render=function(a,e,n,s,l,m){const f=o("BannerInfo"),c=o("NoticeInfo"),g=o("ITContactCard"),p=o("DynamicInfo"),u=o("PageWrapper");return r(),t(u,null,{default:i((()=>[d("div",x,[d("div",C,[d(f,{dataSource:a.bannerInfoItems,height:"400",class:"!my-4 enter-y",loading:a.loading},null,8,["dataSource","loading"])])]),d("div",b,[d("div",v,[d(f,{dataSource:a.bannerInfoItems,height:"270",class:"enter-y",loading:a.loading},null,8,["dataSource","loading"])]),d("div",w,[d(c,{dataSource:a.noticeInfoItems,loading:a.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),d("div",S,[d("div",T,[d(g,{loading:a.loading,class:"enter-y"},null,8,["loading"])]),d("div",D,[d(p,{dataSource:a.dynamicInfoItems,loading:a.loading,class:"enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;