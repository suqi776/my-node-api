import{U as g,s as O}from"./index-GpvhIDHx.js";import{R as S,a as k}from"./index-EZZ6Gnfq.js";import{s as B}from"./index-C_7Cq-Qf.js";import{B as j,Q as D,o as a,c,g as s,r as u,m as l,h,w as v,W as p,as as _,S as I,t as f,d as b,n as L,a as C,b as E,_ as K}from"./index-1Ns0RBNH.js";var q=function(n){var t=n.dt;return`
.p-fieldset {
    background: `.concat(t("fieldset.background"),`;
    border: 1px solid `).concat(t("fieldset.border.color"),`;
    border-radius: `).concat(t("fieldset.border.radius"),`;
    color: `).concat(t("fieldset.color"),`;
    padding:  `).concat(t("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(t("fieldset.legend.background"),`;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    border-width: `).concat(t("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("fieldset.legend.border.color"),`;
    padding: `).concat(t("fieldset.legend.padding"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: `).concat(t("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(t("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(t("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(t("fieldset.legend.focus.ring.width")," ").concat(t("fieldset.legend.focus.ring.style")," ").concat(t("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(t("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(t("fieldset.legend.hover.color"),`;
    background: `).concat(t("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.color"),`;
    transition: color `).concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(t("fieldset.content.padding"),`;
}
`)},F={root:function(n){var t=n.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},N=j.extend({name:"fieldset",theme:q,classes:F}),A={name:"BaseFieldset",extends:B,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:N,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},w={name:"Fieldset",extends:A,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||g()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||g()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:S},components:{PlusIcon:O,MinusIcon:k}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?m(Object(t),!0).forEach(function(o){U(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function U(e,n,t){return(n=V(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function V(e){var n=$(e,"string");return d(n)=="symbol"?n:n+""}function $(e,n){if(d(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(d(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var M=["id"],R=["id","aria-controls","aria-expanded","aria-label"],T=["id","aria-labelledby"];function x(e,n,t,o,i,r){var P=D("ripple");return a(),c("fieldset",l({class:e.cx("root")},e.ptmi("root")),[s("legend",l({class:e.cx("legend")},e.ptm("legend")),[u(e.$slots,"legend",{toggleCallback:r.toggle},function(){return[e.toggleable?b("",!0):(a(),c("span",l({key:0,id:i.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,M)),e.toggleable?p((a(),c("button",l({key:1,id:i.id+"_header",type:"button","aria-controls":i.id+"_content","aria-expanded":!i.d_collapsed,"aria-label":r.buttonAriaLabel,class:e.cx("toggleButton"),onClick:n[0]||(n[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),onKeydown:n[1]||(n[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},y(y({},e.toggleButtonProps),e.ptm("toggleButton"))),[u(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:L(e.cx("toggleIcon"))},function(){return[(a(),C(E(i.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),s("span",l({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,R)),[[P]]):b("",!0)]})],16),h(I,l({name:"p-toggleable-content"},e.ptm("transition")),{default:v(function(){return[p(s("div",l({id:i.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":i.id+"_header"},e.ptm("contentContainer")),[s("div",l({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"default")],16)],16,T),[[_,!i.d_collapsed]])]}),_:3},16)],16)}w.render=x;const z={},H={class:"card"};function Q(e,n){const t=w;return a(),c("div",H,[h(t,{legend:"Header"},{default:v(()=>n[0]||(n[0]=[s("p",{class:"m-3"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})])}const Y=K(z,[["render",Q]]);export{Y as default};
