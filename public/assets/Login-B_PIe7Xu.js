import{f as x,b as V,e as k,a as y,g as I,c as S}from"./index-oeerBfaE.js";import{r,c as _,b as t,d as o,w as s,t as $,f as B,o as g,a8 as C}from"./index-Cvt6w_YP.js";import{a as M}from"./request-ChkO45HW.js";import"./index-D2L0KLMp.js";import"./index-Dmb-oCFB.js";const N={class:"min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"},U={class:"m-5 max-w-md w-full rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"},G={class:"mb-2 flex items-center"},K={key:0,class:"mb-2 text-red-500"},T={__name:"Login",setup(L){const u=r(""),d=r(""),m=r(!0),i=r();function p(){M.post("/login",{username:u.value,password:d.value}).then(n=>{const{token:e,userId:l}=n.data;m.value&&(localStorage.setItem("token",e),localStorage.setItem("userId",l)),sessionStorage.setItem("token",e),sessionStorage.setItem("userId",l),window.location.href="/"}).catch(n=>{i.value="登录失败：用户名或密码错误",console.error("登录失败:",n)})}return(n,e)=>{const l=k,c=y,f=I,b=x,v=V,w=S;return g(),_("div",N,[t("div",U,[e[8]||(e[8]=t("h2",{class:"mb-6 text-center text-2xl font-bold"}," 登录 ",-1)),o(b,{class:"mb-4"},{default:s(()=>[o(l,null,{default:s(()=>e[3]||(e[3]=[t("i",{class:"i-carbon-user"},null,-1)])),_:1}),o(f,{variant:"on"},{default:s(()=>[o(c,{id:"on_username",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=a=>u.value=a)},null,8,["modelValue"]),e[4]||(e[4]=t("label",{for:"on_username"},"用户名",-1))]),_:1})]),_:1}),o(b,{class:"mb-4"},{default:s(()=>[o(l,null,{default:s(()=>e[5]||(e[5]=[t("i",{class:"i-carbon-unlocked"},null,-1)])),_:1}),o(f,{variant:"on"},{default:s(()=>[o(c,{id:"on_password",modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=a=>d.value=a),type:"password",onKeydown:C(p,["enter"])},null,8,["modelValue"]),e[6]||(e[6]=t("label",{for:"on_password"},"密码",-1))]),_:1})]),_:1}),t("div",G,[e[7]||(e[7]=t("label",{for:"rememberMe"}," 记住我 ",-1)),o(v,{id:"rememberMe",modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=a=>m.value=a),class:"ml-2",binary:"",value:"记住我"},null,8,["modelValue"])]),i.value?(g(),_("div",K,$(i.value),1)):B("",!0),o(w,{class:"w-full rounded py-2",label:"登录",onClick:p})])])}}};export{T as default};