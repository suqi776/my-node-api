import{s as z}from"./index-C9Pns8X0.js";import{B as S,o as l,c as u,r as M,m as f,t as w,a as B,n as g,b as C,d as y,e as b,f as k,g as t,h as v,w as h,u as D,i as I,_ as j}from"./index-DeRokeIa.js";import{u as A,a as E}from"./index-Cy5Q-nic.js";var L=function(r){var a=r.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(a("avatar.width"),`;
    height: `).concat(a("avatar.height"),`;
    font-size: `).concat(a("avatar.font.size"),`;
    background: `).concat(a("avatar.background"),`;
    border-radius: `).concat(a("avatar.border.radius"),`;
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
    font-size: `).concat(a("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(a("avatar.lg.width"),`;
    height: `).concat(a("avatar.lg.width"),`;
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(a("avatar.xl.width"),`;
    height: `).concat(a("avatar.xl.width"),`;
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(a("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(a("avatar.group.border.color"),`;
}
`)},N={root:function(r){var a=r.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},T=S.extend({name:"avatar",theme:L,classes:N}),V={name:"BaseAvatar",extends:z,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:T,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},x={name:"Avatar",extends:V,inheritAttrs:!1,emits:["error"],methods:{onError:function(r){this.$emit("error",r)}}},H=["aria-labelledby","aria-label"],W=["src","alt"];function X(n,r,a,i,c,s){return l(),u("div",f({class:n.cx("root"),"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptmi("root")),[M(n.$slots,"default",{},function(){return[n.label?(l(),u("span",f({key:0,class:n.cx("label")},n.ptm("label")),w(n.label),17)):n.$slots.icon?(l(),B(C(n.$slots.icon),{key:1,class:g(n.cx("icon"))},null,8,["class"])):n.icon?(l(),u("span",f({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):n.image?(l(),u("img",f({key:3,src:n.image,alt:n.ariaLabel,onError:r[0]||(r[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},n.ptm("image")),null,16,W)):y("",!0)]})],16,H)}x.render=X;const Y=A(),q=E(Y),G={class:"bg-surface-50 dark:bg-surface-900 h-60px w-100% flex justify-between rounded-2xl md:h-full md:w-16 md:flex-col"},P={class:"flex items-center justify-center"},F={class:"w-50% flex justify-between md:w-100% md:flex-col md:gap-4 md:p-2"},J={class:"flex flex-col p-2"},K={__name:"Nav",setup(n){const r=b(""),a=b(0),i=b(0);function c(d,e){r.value=d;const m=window.innerWidth,p=window.innerHeight;a.value=e.clientX+10,i.value=e.clientY+10,a.value+100>m&&(a.value=m-100),i.value+50>p&&(i.value=p-50)}function s(){r.value=""}function $(){sessionStorage.removeItem("token"),sessionStorage.removeItem("userId"),localStorage.removeItem("token"),localStorage.removeItem("userId"),window.location.href="/"}return(d,e)=>{const m=x,p=k("router-link");return l(),u("div",G,[t("div",P,[v(m,{image:"./icod.png",class:"ml-2 md:mt-2",size:"large",shape:"circle"})]),t("div",F,[v(p,{to:"/",class:"router-link-css",onMouseenter:e[0]||(e[0]=o=>c("首页",o)),onMouseleave:s},{default:h(()=>[t("div",{class:g(["i-carbon:home",{active:d.$route.path==="/"}])},null,2),e[7]||(e[7]=t("span",{class:"hidden"},"首页",-1))]),_:1}),v(p,{to:"/food",class:"router-link-css",onMouseenter:e[1]||(e[1]=o=>c("饮食",o)),onMouseleave:s},{default:h(()=>[t("div",{class:g(["i-carbon:apps",{active:d.$route.path==="/hi"}])},null,2),e[8]||(e[8]=t("span",{class:"hidden"},"饮食",-1))]),_:1}),v(p,{to:"/weight",class:"router-link-css",onMouseenter:e[2]||(e[2]=o=>c("体重",o)),onMouseleave:s},{default:h(()=>[t("div",{class:g(["i-carbon-ibm-jrs",{active:d.$route.path==="/weight"}])},null,2),e[9]||(e[9]=t("span",{class:"hidden"},"体重",-1))]),_:1})]),t("div",J,[t("div",{class:"router-link-css icon-btn",onClick:e[3]||(e[3]=o=>("toggleDark"in d?d.toggleDark:D(q))()),onMouseenter:e[4]||(e[4]=o=>c("切换暗模式",o)),onMouseleave:s},e[10]||(e[10]=[t("div",{"i-carbon-sun":"","dark:i-carbon-moon":""},null,-1),t("span",{class:"hidden"},"切换暗模式",-1)]),32),t("div",{class:"router-link-css icon-btn",onClick:e[5]||(e[5]=o=>$()),onMouseenter:e[6]||(e[6]=o=>c("退出登陆",o)),onMouseleave:s},e[11]||(e[11]=[t("div",{class:"i-carbon:logout"},null,-1),t("span",{class:"hidden"},"退出登陆",-1)]),32)]),r.value?(l(),u("div",{key:0,style:I({top:`${i.value}px`,left:`${a.value}px`}),class:"absolute z-999 rounded bg-gray-700 p-2 text-sm text-white transition-opacity duration-300"},w(r.value),5)):y("",!0)])}}},O={},Q={class:"m-5 box-border flex flex-col justify-between md:m-0 md:h-100vh md:flex-row"},R={class:"flex border border-blueGray rounded-xl md:m-r-2 md:max-w-70px md:min-w-70px"};function U(n,r){const a=K,i=k("router-view");return l(),u("div",Q,[t("div",R,[v(a)]),v(i)])}const ea=j(O,[["render",U]]);export{ea as default};
