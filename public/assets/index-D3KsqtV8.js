import{s as I}from"./index-Y3V9MHVj.js";import{B as A,o as i,c,r as B,m as h,t as x,a as C,n as g,b as D,d as $,s as j,e as y,f as z,g as t,h as p,u as k,w,i as E,_ as L}from"./index-CWm_1NLq.js";import{u as N,a as T}from"./index-D95rKn_q.js";import{u as V}from"./useInfoPinia-C_mWymeV.js";import"./request-ChkO45HW.js";import"./Date-D8F-ftyC.js";var H=function(o){var n=o.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}
`)},W={root:function(o){var n=o.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},X=A.extend({name:"avatar",theme:H,classes:W}),Y={name:"BaseAvatar",extends:I,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:X,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},S={name:"Avatar",extends:Y,inheritAttrs:!1,emits:["error"],methods:{onError:function(o){this.$emit("error",o)}}},q=["aria-labelledby","aria-label"],G=["src","alt"];function P(e,o,n,d,f,s){return i(),c("div",h({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[B(e.$slots,"default",{},function(){return[e.label?(i(),c("span",h({key:0,class:e.cx("label")},e.ptm("label")),x(e.label),17)):e.$slots.icon?(i(),C(D(e.$slots.icon),{key:1,class:g(e.cx("icon"))},null,8,["class"])):e.icon?(i(),c("span",h({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(i(),c("img",h({key:3,src:e.image,alt:e.ariaLabel,onError:o[0]||(o[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},e.ptm("image")),null,16,G)):$("",!0)]})],16,q)}S.render=P;const R=N(),F=T(R),J={class:"bg-surface-50 dark:bg-surface-900 h-60px w-100% flex justify-between rounded-2xl md:h-full md:w-16 md:flex-col"},K={class:"flex items-center justify-center"},O={class:"flex md:w-100% md:flex-col md:gap-4 md:p-2"},Q={class:"flex justify-between p-r-2 md:w-100% md:flex-col md:gap-4 md:p-2"},U={__name:"Nav",setup(e){const o=V(),{userAvatar:n}=j(o),d=y(""),f=y(0),s=y(0);function v(l,a){d.value=l;const b=window.innerWidth,u=window.innerHeight;f.value=a.clientX+10,s.value=a.clientY+10,f.value+100>b&&(f.value=b-100),s.value+50>u&&(s.value=u-50)}function m(){d.value=""}function M(){sessionStorage.removeItem("token"),sessionStorage.removeItem("userId"),localStorage.removeItem("token"),localStorage.removeItem("userId"),window.location.href="/"}return(l,a)=>{const b=S,u=z("router-link");return i(),c("div",J,[t("div",K,[p(b,{image:k(n).avatar,class:"ml-2 md:mt-2",size:"large",shape:"circle"},null,8,["image"])]),t("div",O,[p(u,{to:"/",class:"router-link-css",onMouseenter:a[0]||(a[0]=r=>v("首页",r)),onMouseleave:m},{default:w(()=>[t("div",{class:g(["i-carbon:home",{active:l.$route.path==="/"}])},null,2),a[8]||(a[8]=t("span",{class:"hidden"},"首页",-1))]),_:1}),p(u,{to:"/food",class:"m-x-2 md:m-x-0 router-link-css",onMouseenter:a[1]||(a[1]=r=>v("饮食",r)),onMouseleave:m},{default:w(()=>[t("div",{class:g(["i-carbon:apps",{active:l.$route.path==="/food"}])},null,2),a[9]||(a[9]=t("span",{class:"hidden"},"饮食",-1))]),_:1}),p(u,{to:"/weight",class:"router-link-css",onMouseenter:a[2]||(a[2]=r=>v("体重",r)),onMouseleave:m},{default:w(()=>[t("div",{class:g(["i-carbon-ibm-jrs",{active:l.$route.path==="/weight"}])},null,2),a[10]||(a[10]=t("span",{class:"hidden"},"体重",-1))]),_:1}),p(u,{to:"/settings",class:"router-link-css",onMouseenter:a[3]||(a[3]=r=>v("个人信息修改",r)),onMouseleave:m},{default:w(()=>[t("div",{class:g(["i-carbon:settings",{active:l.$route.path==="/settings"}])},null,2),a[11]||(a[11]=t("span",{class:"hidden"},"个人信息修改",-1))]),_:1})]),t("div",Q,[t("div",{class:"m-r-2 md:m-r-0 icon-btn router-link-css",onClick:a[4]||(a[4]=r=>("toggleDark"in l?l.toggleDark:k(F))()),onMouseenter:a[5]||(a[5]=r=>v("切换暗模式",r)),onMouseleave:m},a[12]||(a[12]=[t("div",{"i-carbon-sun":"","dark:i-carbon-moon":""},null,-1),t("span",{class:"hidden"},"切换暗模式",-1)]),32),t("div",{class:"icon-btn router-link-css",onClick:a[6]||(a[6]=r=>M()),onMouseenter:a[7]||(a[7]=r=>v("退出登陆",r)),onMouseleave:m},a[13]||(a[13]=[t("div",{class:"i-carbon:logout"},null,-1),t("span",{class:"hidden"},"退出登陆",-1)]),32)]),d.value?(i(),c("div",{key:0,style:E({top:`${s.value}px`,left:`${f.value}px`}),class:"absolute z-999 hidden rounded bg-gray-700 p-2 text-sm text-white transition-opacity duration-300 md:block"},x(d.value),5)):$("",!0)])}}},Z={},_={class:"m-5 box-border flex flex-col justify-between md:m-0 md:h-100vh md:flex-row"},aa={class:"mb-2 flex border border-blueGray rounded-xl md:m-r-2 md:mb-0 md:max-w-70px md:min-w-70px"};function ea(e,o){const n=U,d=z("router-view");return i(),c("div",_,[t("div",aa,[p(n)]),p(d)])}const ia=L(Z,[["render",ea]]);export{ia as default};
