import{a$ as B,b8 as We,b9 as we,ba as Qe,D as et,aL as He,bb as Ue,b0 as Se,_ as K,k as se,e as W,B as yt,bc as mt,c as tt,n as bt,bd as St,I as xt,U as At,z as Dt,aO as pe,av as Ne,Q as Pe,be as Lt,ap as Ye,bf as Ct,a6 as H,bg as wt,aH as fe,an as rt,bh as $e,f as je,bi as Pt,a2 as at,bj as It,bk as le,ab as Tt,bl as Gt,ae as _t,g as j,a3 as nt,G as Ot,aP as Rt,H as kt,bm as Nt,bn as Ie,bo as Bt,ah as Te,u as Ge,bp as Mt,x as Vt,bq as $,q as it,br as zt,aS as ge,aj as xe,ai as Et,aD as Ft,ao as Wt,ak as Ht,bs as Ut,aB as ot,aR as Yt,aF as $t,p as jt,j as Xt,bt as qt,bu as Zt,bv as Kt,at as Jt,bw as Qt}from"./index-D0xXknh8.js";function lt(a,r,t,e,n,o,i,v){var c=n-a,s=o-r,l=t-a,f=e-r,h=Math.sqrt(l*l+f*f);l/=h,f/=h;var g=c*l+s*f,u=g/h;u*=h;var p=i[0]=a+u*l,d=i[1]=r+u*f;return Math.sqrt((p-n)*(p-n)+(d-o)*(d-o))}var X=new B,I=new B,N=new B,q=new B,U=new B,de=[],M=new B;function er(a,r){if(r<=180&&r>0){r=r/180*Math.PI,X.fromArray(a[0]),I.fromArray(a[1]),N.fromArray(a[2]),B.sub(q,X,I),B.sub(U,N,I);var t=q.len(),e=U.len();if(!(t<.001||e<.001)){q.scale(1/t),U.scale(1/e);var n=q.dot(U),o=Math.cos(r);if(o<n){var i=lt(I.x,I.y,N.x,N.y,X.x,X.y,de);M.fromArray(de),M.scaleAndAdd(U,i/Math.tan(Math.PI-r));var v=N.x!==I.x?(M.x-I.x)/(N.x-I.x):(M.y-I.y)/(N.y-I.y);if(isNaN(v))return;v<0?B.copy(M,I):v>1&&B.copy(M,N),M.toArray(a[1])}}}}function tr(a,r,t){if(t<=180&&t>0){t=t/180*Math.PI,X.fromArray(a[0]),I.fromArray(a[1]),N.fromArray(a[2]),B.sub(q,I,X),B.sub(U,N,I);var e=q.len(),n=U.len();if(!(e<.001||n<.001)){q.scale(1/e),U.scale(1/n);var o=q.dot(r),i=Math.cos(t);if(o<i){var v=lt(I.x,I.y,N.x,N.y,X.x,X.y,de);M.fromArray(de);var c=Math.PI/2,s=Math.acos(U.dot(r)),l=c+s-t;if(l>=c)B.copy(M,N);else{M.scaleAndAdd(U,v/Math.tan(Math.PI/2-l));var f=N.x!==I.x?(M.x-I.x)/(N.x-I.x):(M.y-I.y)/(N.y-I.y);if(isNaN(f))return;f<0?B.copy(M,I):f>1&&B.copy(M,N)}M.toArray(a[1])}}}}function Ae(a,r,t,e){var n=t==="normal",o=n?a:a.ensureState(t);o.ignore=r;var i=e.get("smooth");i&&i===!0&&(i=.3),o.shape=o.shape||{},i>0&&(o.shape.smooth=i);var v=e.getModel("lineStyle").getLineStyle();n?a.useStyle(v):o.style=v}function rr(a,r){var t=r.smooth,e=r.points;if(e)if(a.moveTo(e[0][0],e[0][1]),t>0&&e.length>=3){var n=Ue(e[0],e[1]),o=Ue(e[1],e[2]);if(!n||!o){a.lineTo(e[1][0],e[1][1]),a.lineTo(e[2][0],e[2][1]);return}var i=Math.min(n,o)*t,v=Se([],e[1],e[0],i/n),c=Se([],e[1],e[2],i/o),s=Se([],v,c,.5);a.bezierCurveTo(v[0],v[1],v[0],v[1],s[0],s[1]),a.bezierCurveTo(c[0],c[1],c[0],c[1],e[2][0],e[2][1])}else for(var l=1;l<e.length;l++)a.lineTo(e[l][0],e[l][1])}function ar(a,r,t){var e=a.getTextGuideLine(),n=a.getTextContent();if(!n){e&&a.removeTextGuideLine();return}for(var o=r.normal,i=o.get("show"),v=n.ignore,c=0;c<We.length;c++){var s=We[c],l=r[s],f=s==="normal";if(l){var h=l.get("show"),g=f?v:we(n.states[s]&&n.states[s].ignore,v);if(g||!we(h,i)){var u=f?e:e&&e.states[s];u&&(u.ignore=!0),e&&Ae(e,!0,s,l);continue}e||(e=new Qe,a.setTextGuideLine(e),!f&&(v||!i)&&Ae(e,!0,"normal",r.normal),a.stateProxy&&(e.stateProxy=a.stateProxy)),Ae(e,!1,s,l)}}if(e){et(e.style,t),e.style.fill=null;var p=o.get("showAbove"),d=a.textGuideLineConfig=a.textGuideLineConfig||{};d.showAbove=p||!1,e.buildPath=rr}}function nr(a,r){r=r||"labelLine";for(var t={normal:a.getModel(r)},e=0;e<He.length;e++){var n=He[e];t[n]=a.getModel([n,r])}return t}var ir=function(a,r){if(r==="all")return{type:"all",title:a.getLocaleModel().get(["legend","selector","all"])};if(r==="inverse")return{type:"inverse",title:a.getLocaleModel().get(["legend","selector","inverse"])}},_e=function(a){K(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=r.type,t.layoutMode={type:"box",ignoreSize:!0},t}return r.prototype.init=function(t,e,n){this.mergeDefaultAndTheme(t,n),t.selected=t.selected||{},this._updateSelector(t)},r.prototype.mergeOption=function(t,e){a.prototype.mergeOption.call(this,t,e),this._updateSelector(t)},r.prototype._updateSelector=function(t){var e=t.selector,n=this.ecModel;e===!0&&(e=t.selector=["all","inverse"]),se(e)&&W(e,function(o,i){pe(o)&&(o={type:o}),e[i]=yt(o,ir(n,o.type))})},r.prototype.optionUpdated=function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&this.get("selectedMode")==="single"){for(var e=!1,n=0;n<t.length;n++){var o=t[n].get("name");if(this.isSelected(o)){this.select(o),e=!0;break}}!e&&this.select(t[0].get("name"))}},r.prototype._updateData=function(t){var e=[],n=[];t.eachRawSeries(function(c){var s=c.name;n.push(s);var l;if(c.legendVisualProvider){var f=c.legendVisualProvider,h=f.getAllNames();t.isSeriesFiltered(c)||(n=n.concat(h)),h.length?e=e.concat(h):l=!0}else l=!0;l&&mt(c)&&e.push(c.name)}),this._availableNames=n;var o=this.get("data")||e,i=tt(),v=bt(o,function(c){return(pe(c)||Ne(c))&&(c={name:c}),i.get(c.name)?null:(i.set(c.name,!0),new St(c,this,this.ecModel))},this);this._data=xt(v,function(c){return!!c})},r.prototype.getData=function(){return this._data},r.prototype.select=function(t){var e=this.option.selected,n=this.get("selectedMode");if(n==="single"){var o=this._data;W(o,function(i){e[i.get("name")]=!1})}e[t]=!0},r.prototype.unSelect=function(t){this.get("selectedMode")!=="single"&&(this.option.selected[t]=!1)},r.prototype.toggleSelected=function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},r.prototype.allSelect=function(){var t=this._data,e=this.option.selected;W(t,function(n){e[n.get("name",!0)]=!0})},r.prototype.inverseSelect=function(){var t=this._data,e=this.option.selected;W(t,function(n){var o=n.get("name",!0);e.hasOwnProperty(o)||(e[o]=!0),e[o]=!e[o]})},r.prototype.isSelected=function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&At(this._availableNames,t)>=0},r.prototype.getOrient=function(){return this.get("orient")==="vertical"?{index:1,name:"vertical"}:{index:0,name:"horizontal"}},r.type="legend.plain",r.dependencies=["series"],r.defaultOption={z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,symbolRotate:"inherit",symbolKeepAspect:!0,inactiveColor:"#ccc",inactiveBorderColor:"#ccc",inactiveBorderWidth:"auto",itemStyle:{color:"inherit",opacity:"inherit",borderColor:"inherit",borderWidth:"auto",borderCap:"inherit",borderJoin:"inherit",borderDashOffset:"inherit",borderMiterLimit:"inherit"},lineStyle:{width:"auto",color:"inherit",inactiveColor:"#ccc",inactiveWidth:2,opacity:"inherit",type:"inherit",cap:"inherit",join:"inherit",dashOffset:"inherit",miterLimit:"inherit"},textStyle:{color:"#333"},selectedMode:!0,selector:!1,selectorLabel:{show:!0,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:"sans-serif",color:"#666",borderWidth:1,borderColor:"#666"},emphasis:{selectorLabel:{show:!0,color:"#eee",backgroundColor:"#666"}},selectorPosition:"auto",selectorItemGap:7,selectorButtonGap:10,tooltip:{show:!1}},r}(Dt),te=j,Oe=W,ve=nt,st=function(a){K(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=r.type,t.newlineDisabled=!1,t}return r.prototype.init=function(){this.group.add(this._contentGroup=new ve),this.group.add(this._selectorGroup=new ve),this._isFirstRender=!0},r.prototype.getContentGroup=function(){return this._contentGroup},r.prototype.getSelectorGroup=function(){return this._selectorGroup},r.prototype.render=function(t,e,n){var o=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),!!t.get("show",!0)){var i=t.get("align"),v=t.get("orient");(!i||i==="auto")&&(i=t.get("left")==="right"&&v==="vertical"?"right":"left");var c=t.get("selector",!0),s=t.get("selectorPosition",!0);c&&(!s||s==="auto")&&(s=v==="horizontal"?"end":"start"),this.renderInner(i,t,e,n,c,v,s);var l=t.getBoxLayoutParams(),f={width:n.getWidth(),height:n.getHeight()},h=t.get("padding"),g=Pe(l,f,h),u=this.layoutInner(t,i,g,o,c,s),p=Pe(et({width:u.width,height:u.height},l),f,h);this.group.x=p.x-u.x,this.group.y=p.y-u.y,this.group.markRedraw(),this.group.add(this._backgroundEl=Lt(u,t))}},r.prototype.resetInner=function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl),this.getSelectorGroup().removeAll()},r.prototype.renderInner=function(t,e,n,o,i,v,c){var s=this.getContentGroup(),l=tt(),f=e.get("selectedMode"),h=[];n.eachRawSeries(function(g){!g.get("legendHoverLink")&&h.push(g.id)}),Oe(e.getData(),function(g,u){var p=g.get("name");if(!this.newlineDisabled&&(p===""||p===`
`)){var d=new ve;d.newline=!0,s.add(d);return}var y=n.getSeriesByName(p)[0];if(!l.get(p))if(y){var m=y.getData(),b=m.getVisual("legendLineStyle")||{},L=m.getVisual("legendIcon"),x=m.getVisual("style"),A=this._createItem(y,p,u,g,e,t,b,x,L,f,o);A.on("click",te(Xe,p,null,o,h)).on("mouseover",te(Re,y.name,null,o,h)).on("mouseout",te(ke,y.name,null,o,h)),n.ssr&&A.eachChild(function(D){var S=Ye(D);S.seriesIndex=y.seriesIndex,S.dataIndex=u,S.ssrType="legend"}),l.set(p,!0)}else n.eachRawSeries(function(D){if(!l.get(p)&&D.legendVisualProvider){var S=D.legendVisualProvider;if(!S.containName(p))return;var C=S.indexOfName(p),w=S.getItemVisual(C,"style"),z=S.getItemVisual(C,"legendIcon"),O=Ct(w.fill);O&&O[3]===0&&(O[3]=.2,w=H(H({},w),{fill:wt(O,"rgba")}));var G=this._createItem(D,p,u,g,e,t,{},w,z,f,o);G.on("click",te(Xe,null,p,o,h)).on("mouseover",te(Re,null,p,o,h)).on("mouseout",te(ke,null,p,o,h)),n.ssr&&G.eachChild(function(F){var _=Ye(F);_.seriesIndex=D.seriesIndex,_.dataIndex=u,_.ssrType="legend"}),l.set(p,!0)}},this)},this),i&&this._createSelector(i,e,o,v,c)},r.prototype._createSelector=function(t,e,n,o,i){var v=this.getSelectorGroup();Oe(t,function(s){var l=s.type,f=new fe({style:{x:0,y:0,align:"center",verticalAlign:"middle"},onclick:function(){n.dispatchAction({type:l==="all"?"legendAllSelect":"legendInverseSelect"})}});v.add(f);var h=e.getModel("selectorLabel"),g=e.getModel(["emphasis","selectorLabel"]);rt(f,{normal:h,emphasis:g},{defaultText:s.title}),$e(f)})},r.prototype._createItem=function(t,e,n,o,i,v,c,s,l,f,h){var g=t.visualDrawType,u=i.get("itemWidth"),p=i.get("itemHeight"),d=i.isSelected(e),y=o.get("symbolRotate"),m=o.get("symbolKeepAspect"),b=o.get("icon");l=b||l||"roundRect";var L=or(l,o,c,s,g,d,h),x=new ve,A=o.getModel("textStyle");if(je(t.getLegendIcon)&&(!b||b==="inherit"))x.add(t.getLegendIcon({itemWidth:u,itemHeight:p,icon:l,iconRotate:y,itemStyle:L.itemStyle,lineStyle:L.lineStyle,symbolKeepAspect:m}));else{var D=b==="inherit"&&t.getData().getVisual("symbol")?y==="inherit"?t.getData().getVisual("symbolRotate"):y:0;x.add(lr({itemWidth:u,itemHeight:p,icon:l,iconRotate:D,itemStyle:L.itemStyle,lineStyle:L.lineStyle,symbolKeepAspect:m}))}var S=v==="left"?u+5:-5,C=v,w=i.get("formatter"),z=e;pe(w)&&w?z=w.replace("{name}",e??""):je(w)&&(z=w(e));var O=d?A.getTextColor():o.get("inactiveColor");x.add(new fe({style:Pt(A,{text:z,x:S,y:p/2,fill:O,align:C,verticalAlign:"middle"},{inheritColor:O})}));var G=new at({shape:x.getBoundingRect(),style:{fill:"transparent"}}),F=o.getModel("tooltip");return F.get("show")&&It({el:G,componentModel:i,itemName:e,itemTooltipOption:F.option}),x.add(G),x.eachChild(function(_){_.silent=!0}),G.silent=!f,this.getContentGroup().add(x),$e(x),x.__legendDataIndex=n,x},r.prototype.layoutInner=function(t,e,n,o,i,v){var c=this.getContentGroup(),s=this.getSelectorGroup();le(t.get("orient"),c,t.get("itemGap"),n.width,n.height);var l=c.getBoundingRect(),f=[-l.x,-l.y];if(s.markRedraw(),c.markRedraw(),i){le("horizontal",s,t.get("selectorItemGap",!0));var h=s.getBoundingRect(),g=[-h.x,-h.y],u=t.get("selectorButtonGap",!0),p=t.getOrient().index,d=p===0?"width":"height",y=p===0?"height":"width",m=p===0?"y":"x";v==="end"?g[p]+=l[d]+u:f[p]+=h[d]+u,g[1-p]+=l[y]/2-h[y]/2,s.x=g[0],s.y=g[1],c.x=f[0],c.y=f[1];var b={x:0,y:0};return b[d]=l[d]+u+h[d],b[y]=Math.max(l[y],h[y]),b[m]=Math.min(0,h[m]+g[1-p]),b}else return c.x=f[0],c.y=f[1],this.group.getBoundingRect()},r.prototype.remove=function(){this.getContentGroup().removeAll(),this._isFirstRender=!0},r.type="legend.plain",r}(Tt);function or(a,r,t,e,n,o,i){function v(d,y){d.lineWidth==="auto"&&(d.lineWidth=y.lineWidth>0?2:0),Oe(d,function(m,b){d[b]==="inherit"&&(d[b]=y[b])})}var c=r.getModel("itemStyle"),s=c.getItemStyle(),l=a.lastIndexOf("empty",0)===0?"fill":"stroke",f=c.getShallow("decal");s.decal=!f||f==="inherit"?e.decal:Gt(f,i),s.fill==="inherit"&&(s.fill=e[n]),s.stroke==="inherit"&&(s.stroke=e[l]),s.opacity==="inherit"&&(s.opacity=(n==="fill"?e:t).opacity),v(s,e);var h=r.getModel("lineStyle"),g=h.getLineStyle();if(v(g,t),s.fill==="auto"&&(s.fill=e.fill),s.stroke==="auto"&&(s.stroke=e.fill),g.stroke==="auto"&&(g.stroke=e.fill),!o){var u=r.get("inactiveBorderWidth"),p=s[l];s.lineWidth=u==="auto"?e.lineWidth>0&&p?2:0:s.lineWidth,s.fill=r.get("inactiveColor"),s.stroke=r.get("inactiveBorderColor"),g.stroke=h.get("inactiveColor"),g.lineWidth=h.get("inactiveWidth")}return{itemStyle:s,lineStyle:g}}function lr(a){var r=a.icon||"roundRect",t=_t(r,0,0,a.itemWidth,a.itemHeight,a.itemStyle.fill,a.symbolKeepAspect);return t.setStyle(a.itemStyle),t.rotation=(a.iconRotate||0)*Math.PI/180,t.setOrigin([a.itemWidth/2,a.itemHeight/2]),r.indexOf("empty")>-1&&(t.style.stroke=t.style.fill,t.style.fill="#fff",t.style.lineWidth=2),t}function Xe(a,r,t,e){ke(a,r,t,e),t.dispatchAction({type:"legendToggleSelect",name:a??r}),Re(a,r,t,e)}function ct(a){for(var r=a.getZr().storage.getDisplayList(),t,e=0,n=r.length;e<n&&!(t=r[e].states.emphasis);)e++;return t&&t.hoverLayer}function Re(a,r,t,e){ct(t)||t.dispatchAction({type:"highlight",seriesName:a,name:r,excludeSeriesId:e})}function ke(a,r,t,e){ct(t)||t.dispatchAction({type:"downplay",seriesName:a,name:r,excludeSeriesId:e})}function sr(a){var r=a.findComponents({mainType:"legend"});r&&r.length&&a.filterSeries(function(t){for(var e=0;e<r.length;e++)if(!r[e].isSelected(t.name))return!1;return!0})}function oe(a,r,t){var e={},n=a==="toggleSelected",o;return t.eachComponent("legend",function(i){n&&o!=null?i[o?"select":"unSelect"](r.name):a==="allSelect"||a==="inverseSelect"?i[a]():(i[a](r.name),o=i.isSelected(r.name));var v=i.getData();W(v,function(c){var s=c.get("name");if(!(s===`
`||s==="")){var l=i.isSelected(s);e.hasOwnProperty(s)?e[s]=e[s]&&l:e[s]=l}})}),a==="allSelect"||a==="inverseSelect"?{selected:e}:{name:r.name,selected:e}}function cr(a){a.registerAction("legendToggleSelect","legendselectchanged",j(oe,"toggleSelected")),a.registerAction("legendAllSelect","legendselectall",j(oe,"allSelect")),a.registerAction("legendInverseSelect","legendinverseselect",j(oe,"inverseSelect")),a.registerAction("legendSelect","legendselected",j(oe,"select")),a.registerAction("legendUnSelect","legendunselected",j(oe,"unSelect"))}function ut(a){a.registerComponentModel(_e),a.registerComponentView(st),a.registerProcessor(a.PRIORITY.PROCESSOR.SERIES_FILTER,sr),a.registerSubTypeDefaulter("legend",function(){return"plain"}),cr(a)}var ur=function(a){K(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=r.type,t}return r.prototype.setScrollDataIndex=function(t){this.option.scrollDataIndex=t},r.prototype.init=function(t,e,n){var o=Ot(t);a.prototype.init.call(this,t,e,n),qe(this,t,o)},r.prototype.mergeOption=function(t,e){a.prototype.mergeOption.call(this,t,e),qe(this,this.option,t)},r.type="legend.scroll",r.defaultOption=Rt(_e.defaultOption,{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800}),r}(_e);function qe(a,r,t){var e=a.getOrient(),n=[1,1];n[e.index]=0,kt(r,t,{type:"box",ignoreSize:!!n})}var Ze=nt,De=["width","height"],Le=["x","y"],gr=function(a){K(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=r.type,t.newlineDisabled=!0,t._currentIndex=0,t}return r.prototype.init=function(){a.prototype.init.call(this),this.group.add(this._containerGroup=new Ze),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new Ze)},r.prototype.resetInner=function(){a.prototype.resetInner.call(this),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},r.prototype.renderInner=function(t,e,n,o,i,v,c){var s=this;a.prototype.renderInner.call(this,t,e,n,o,i,v,c);var l=this._controllerGroup,f=e.get("pageIconSize",!0),h=se(f)?f:[f,f];u("pagePrev",0);var g=e.getModel("pageTextStyle");l.add(new fe({name:"pageText",style:{text:"xx/xx",fill:g.getTextColor(),font:g.getFont(),verticalAlign:"middle",align:"center"},silent:!0})),u("pageNext",1);function u(p,d){var y=p+"DataIndex",m=Nt(e.get("pageIcons",!0)[e.getOrient().name][d],{onclick:Ie(s._pageGo,s,y,e,o)},{x:-h[0]/2,y:-h[1]/2,width:h[0],height:h[1]});m.name=p,l.add(m)}},r.prototype.layoutInner=function(t,e,n,o,i,v){var c=this.getSelectorGroup(),s=t.getOrient().index,l=De[s],f=Le[s],h=De[1-s],g=Le[1-s];i&&le("horizontal",c,t.get("selectorItemGap",!0));var u=t.get("selectorButtonGap",!0),p=c.getBoundingRect(),d=[-p.x,-p.y],y=Bt(n);i&&(y[l]=n[l]-p[l]-u);var m=this._layoutContentAndController(t,o,y,s,l,h,g,f);if(i){if(v==="end")d[s]+=m[l]+u;else{var b=p[l]+u;d[s]-=b,m[f]-=b}m[l]+=p[l]+u,d[1-s]+=m[g]+m[h]/2-p[h]/2,m[h]=Math.max(m[h],p[h]),m[g]=Math.min(m[g],p[g]+d[1-s]),c.x=d[0],c.y=d[1],c.markRedraw()}return m},r.prototype._layoutContentAndController=function(t,e,n,o,i,v,c,s){var l=this.getContentGroup(),f=this._containerGroup,h=this._controllerGroup;le(t.get("orient"),l,t.get("itemGap"),o?n.width:null,o?null:n.height),le("horizontal",h,t.get("pageButtonItemGap",!0));var g=l.getBoundingRect(),u=h.getBoundingRect(),p=this._showController=g[i]>n[i],d=[-g.x,-g.y];e||(d[o]=l[s]);var y=[0,0],m=[-u.x,-u.y],b=we(t.get("pageButtonGap",!0),t.get("itemGap",!0));if(p){var L=t.get("pageButtonPosition",!0);L==="end"?m[o]+=n[i]-u[i]:y[o]+=u[i]+b}m[1-o]+=g[v]/2-u[v]/2,l.setPosition(d),f.setPosition(y),h.setPosition(m);var x={x:0,y:0};if(x[i]=p?n[i]:g[i],x[v]=Math.max(g[v],u[v]),x[c]=Math.min(0,u[c]+m[1-o]),f.__rectSize=n[i],p){var A={x:0,y:0};A[i]=Math.max(n[i]-u[i]-b,0),A[v]=x[v],f.setClipPath(new at({shape:A})),f.__rectSize=A[i]}else h.eachChild(function(S){S.attr({invisible:!0,silent:!0})});var D=this._getPageInfo(t);return D.pageIndex!=null&&Te(l,{x:D.contentPosition[0],y:D.contentPosition[1]},p?t:null),this._updatePageInfoView(t,D),x},r.prototype._pageGo=function(t,e,n){var o=this._getPageInfo(e)[t];o!=null&&n.dispatchAction({type:"legendScroll",scrollDataIndex:o,legendId:e.id})},r.prototype._updatePageInfoView=function(t,e){var n=this._controllerGroup;W(["pagePrev","pageNext"],function(l){var f=l+"DataIndex",h=e[f]!=null,g=n.childOfName(l);g&&(g.setStyle("fill",h?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),g.cursor=h?"pointer":"default")});var o=n.childOfName("pageText"),i=t.get("pageFormatter"),v=e.pageIndex,c=v!=null?v+1:0,s=e.pageCount;o&&i&&o.setStyle("text",pe(i)?i.replace("{current}",c==null?"":c+"").replace("{total}",s==null?"":s+""):i({current:c,total:s}))},r.prototype._getPageInfo=function(t){var e=t.get("scrollDataIndex",!0),n=this.getContentGroup(),o=this._containerGroup.__rectSize,i=t.getOrient().index,v=De[i],c=Le[i],s=this._findTargetItemIndex(e),l=n.children(),f=l[s],h=l.length,g=h?1:0,u={contentPosition:[n.x,n.y],pageCount:g,pageIndex:g-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!f)return u;var p=L(f);u.contentPosition[i]=-p.s;for(var d=s+1,y=p,m=p,b=null;d<=h;++d)b=L(l[d]),(!b&&m.e>y.s+o||b&&!x(b,y.s))&&(m.i>y.i?y=m:y=b,y&&(u.pageNextDataIndex==null&&(u.pageNextDataIndex=y.i),++u.pageCount)),m=b;for(var d=s-1,y=p,m=p,b=null;d>=-1;--d)b=L(l[d]),(!b||!x(m,b.s))&&y.i<m.i&&(m=y,u.pagePrevDataIndex==null&&(u.pagePrevDataIndex=y.i),++u.pageCount,++u.pageIndex),y=b;return u;function L(A){if(A){var D=A.getBoundingRect(),S=D[c]+A[c];return{s:S,e:S+D[v],i:A.__legendDataIndex}}}function x(A,D){return A.e>=D&&A.s<=D+o}},r.prototype._findTargetItemIndex=function(t){if(!this._showController)return 0;var e,n=this.getContentGroup(),o;return n.eachChild(function(i,v){var c=i.__legendDataIndex;o==null&&c!=null&&(o=v),c===t&&(e=v)}),e??o},r.type="legend.scroll",r}(st);function vr(a){a.registerAction("legendScroll","legendscroll",function(r,t){var e=r.scrollDataIndex;e!=null&&t.eachComponent({mainType:"legend",subType:"scroll",query:r},function(n){n.setScrollDataIndex(e)})})}function hr(a){Ge(ut),a.registerComponentModel(ur),a.registerComponentView(gr),vr(a)}function Pr(a){Ge(ut),Ge(hr)}var Ke=Math.PI*2,he=Math.PI/180;function gt(a,r){return Pe(a.getBoxLayoutParams(),{width:r.getWidth(),height:r.getHeight()})}function vt(a,r){var t=gt(a,r),e=a.get("center"),n=a.get("radius");se(n)||(n=[0,n]);var o=$(t.width,r.getWidth()),i=$(t.height,r.getHeight()),v=Math.min(o,i),c=$(n[0],v/2),s=$(n[1],v/2),l,f,h=a.coordinateSystem;if(h){var g=h.dataToPoint(e);l=g[0]||0,f=g[1]||0}else se(e)||(e=[e,e]),l=$(e[0],o)+t.x,f=$(e[1],i)+t.y;return{cx:l,cy:f,r0:c,r:s}}function pr(a,r,t){r.eachSeriesByType(a,function(e){var n=e.getData(),o=n.mapDimension("value"),i=gt(e,t),v=vt(e,t),c=v.cx,s=v.cy,l=v.r,f=v.r0,h=-e.get("startAngle")*he,g=e.get("endAngle"),u=e.get("padAngle")*he;g=g==="auto"?h-Ke:-g*he;var p=e.get("minAngle")*he,d=p+u,y=0;n.each(o,function(E){!isNaN(E)&&y++});var m=n.getSum(o),b=Math.PI/(m||y)*2,L=e.get("clockwise"),x=e.get("roseType"),A=e.get("stillShowZeroSum"),D=n.getDataExtent(o);D[0]=0;var S=L?1:-1,C=[h,g],w=S*u/2;Mt(C,!L),h=C[0],g=C[1];var z=ht(e);z.startAngle=h,z.endAngle=g,z.clockwise=L;var O=Math.abs(g-h),G=O,F=0,_=h;if(n.setLayout({viewRect:i,r:l}),n.each(o,function(E,V){var P;if(isNaN(E)){n.setItemLayout(V,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:L,cx:c,cy:s,r0:f,r:x?NaN:l});return}x!=="area"?P=m===0&&A?b:E*b:P=O/y,P<d?(P=d,G-=d):F+=E;var k=_+S*P,R=0,T=0;u>P?(R=_+S*P/2,T=R):(R=_+w,T=k-w),n.setItemLayout(V,{angle:P,startAngle:R,endAngle:T,clockwise:L,cx:c,cy:s,r0:f,r:x?Vt(E,D,[f,l]):l}),_=k}),G<Ke&&y)if(G<=.001){var Y=O/y;n.each(o,function(E,V){if(!isNaN(E)){var P=n.getItemLayout(V);P.angle=Y;var k=0,R=0;Y<u?(k=h+S*(V+1/2)*Y,R=k):(k=h+S*V*Y+w,R=h+S*(V+1)*Y-w),P.startAngle=k,P.endAngle=R}})}else b=G/F,_=h,n.each(o,function(E,V){if(!isNaN(E)){var P=n.getItemLayout(V),k=P.angle===d?d:E*b,R=0,T=0;k<u?(R=_+S*k/2,T=R):(R=_+w,T=_+S*k-w),P.startAngle=R,P.endAngle=T,_+=S*k}})})}var ht=it();function fr(a){return{seriesType:a,reset:function(r,t){var e=t.findComponents({mainType:"legend"});if(!(!e||!e.length)){var n=r.getData();n.filterSelf(function(o){for(var i=n.getName(o),v=0;v<e.length;v++)if(!e[v].isSelected(i))return!1;return!0})}}}}var dr=Math.PI/180;function Je(a,r,t,e,n,o,i,v,c,s){if(a.length<2)return;function l(p){for(var d=p.rB,y=d*d,m=0;m<p.list.length;m++){var b=p.list[m],L=Math.abs(b.label.y-t),x=e+b.len,A=x*x,D=Math.sqrt((1-Math.abs(L*L/y))*A),S=r+(D+b.len2)*n,C=S-b.label.x,w=b.targetTextWidth-C*n;pt(b,w,!0),b.label.x=S}}function f(p){for(var d={list:[],maxY:0},y={list:[],maxY:0},m=0;m<p.length;m++)if(p[m].labelAlignTo==="none"){var b=p[m],L=b.label.y>t?y:d,x=Math.abs(b.label.y-t);if(x>=L.maxY){var A=b.label.x-r-b.len2*n,D=e+b.len,S=Math.abs(A)<D?Math.sqrt(x*x/(1-A*A/D/D)):D;L.rB=S,L.maxY=x}L.list.push(b)}l(d),l(y)}for(var h=a.length,g=0;g<h;g++)if(a[g].position==="outer"&&a[g].labelAlignTo==="labelLine"){var u=a[g].label.x-s;a[g].linePoints[1][0]+=u,a[g].label.x=s}zt(a,c,c+i)&&f(a)}function yr(a,r,t,e,n,o,i,v){for(var c=[],s=[],l=Number.MAX_VALUE,f=-Number.MAX_VALUE,h=0;h<a.length;h++){var g=a[h].label;Ce(a[h])||(g.x<r?(l=Math.min(l,g.x),c.push(a[h])):(f=Math.max(f,g.x),s.push(a[h])))}for(var h=0;h<a.length;h++){var u=a[h];if(!Ce(u)&&u.linePoints){if(u.labelStyleWidth!=null)continue;var g=u.label,p=u.linePoints,d=void 0;u.labelAlignTo==="edge"?g.x<r?d=p[2][0]-u.labelDistance-i-u.edgeDistance:d=i+n-u.edgeDistance-p[2][0]-u.labelDistance:u.labelAlignTo==="labelLine"?g.x<r?d=l-i-u.bleedMargin:d=i+n-f-u.bleedMargin:g.x<r?d=g.x-i-u.bleedMargin:d=i+n-g.x-u.bleedMargin,u.targetTextWidth=d,pt(u,d)}}Je(s,r,t,e,1,n,o,i,v,f),Je(c,r,t,e,-1,n,o,i,v,l);for(var h=0;h<a.length;h++){var u=a[h];if(!Ce(u)&&u.linePoints){var g=u.label,p=u.linePoints,y=u.labelAlignTo==="edge",m=g.style.padding,b=m?m[1]+m[3]:0,L=g.style.backgroundColor?0:b,x=u.rect.width+L,A=p[1][0]-p[2][0];y?g.x<r?p[2][0]=i+u.edgeDistance+x+u.labelDistance:p[2][0]=i+n-u.edgeDistance-x-u.labelDistance:(g.x<r?p[2][0]=g.x+u.labelDistance:p[2][0]=g.x-u.labelDistance,p[1][0]=p[2][0]+A),p[1][1]=p[2][1]=g.y}}}function pt(a,r,t){if(t===void 0&&(t=!1),a.labelStyleWidth==null){var e=a.label,n=e.style,o=a.rect,i=n.backgroundColor,v=n.padding,c=v?v[1]+v[3]:0,s=n.overflow,l=o.width+(i?0:c);if(r<l||t){var f=o.height;if(s&&s.match("break")){e.setStyle("backgroundColor",null),e.setStyle("width",r-c);var h=e.getBoundingRect();e.setStyle("width",Math.ceil(h.width)),e.setStyle("backgroundColor",i)}else{var g=r-c,u=r<l?g:t?g>a.unconstrainedWidth?null:g:null;e.setStyle("width",u)}var p=e.getBoundingRect();o.width=p.width;var d=(e.style.margin||0)+2.1;o.height=p.height+d,o.y-=(o.height-f)/2}}}function Ce(a){return a.position==="center"}function mr(a){var r=a.getData(),t=[],e,n,o=!1,i=(a.get("minShowLabelAngle")||0)*dr,v=r.getLayout("viewRect"),c=r.getLayout("r"),s=v.width,l=v.x,f=v.y,h=v.height;function g(A){A.ignore=!0}function u(A){if(!A.ignore)return!0;for(var D in A.states)if(A.states[D].ignore===!1)return!0;return!1}r.each(function(A){var D=r.getItemGraphicEl(A),S=D.shape,C=D.getTextContent(),w=D.getTextGuideLine(),z=r.getItemModel(A),O=z.getModel("label"),G=O.get("position")||z.get(["emphasis","label","position"]),F=O.get("distanceToLabelLine"),_=O.get("alignTo"),Y=$(O.get("edgeDistance"),s),E=O.get("bleedMargin"),V=z.getModel("labelLine"),P=V.get("length");P=$(P,s);var k=V.get("length2");if(k=$(k,s),Math.abs(S.endAngle-S.startAngle)<i){W(C.states,g),C.ignore=!0,w&&(W(w.states,g),w.ignore=!0);return}if(u(C)){var R=(S.startAngle+S.endAngle)/2,T=Math.cos(R),Z=Math.sin(R),re,ce,Be,ue;e=S.cx,n=S.cy;var J=G==="inside"||G==="inner";if(G==="center")re=S.cx,ce=S.cy,ue="center";else{var ye=(J?(S.r+S.r0)/2*T:S.r*T)+e,me=(J?(S.r+S.r0)/2*Z:S.r*Z)+n;if(re=ye+T*3,ce=me+Z*3,!J){var Me=ye+T*(P+c-S.r),Ve=me+Z*(P+c-S.r),ze=Me+(T<0?-1:1)*k,Ee=Ve;_==="edge"?re=T<0?l+Y:l+s-Y:re=ze+(T<0?-F:F),ce=Ee,Be=[[ye,me],[Me,Ve],[ze,Ee]]}ue=J?"center":_==="edge"?T>0?"right":"left":T>0?"left":"right"}var ae=Math.PI,Q=0,ne=O.get("rotate");if(Ne(ne))Q=ne*(ae/180);else if(G==="center")Q=0;else if(ne==="radial"||ne===!0){var ft=T<0?-R+ae:-R;Q=ft}else if(ne==="tangential"&&G!=="outside"&&G!=="outer"){var ee=Math.atan2(T,Z);ee<0&&(ee=ae*2+ee);var dt=Z>0;dt&&(ee=ae+ee),Q=ee-ae}if(o=!!Q,C.x=re,C.y=ce,C.rotation=Q,C.setStyle({verticalAlign:"middle"}),J){C.setStyle({align:ue});var be=C.states.select;be&&(be.x+=C.x,be.y+=C.y)}else{var ie=C.getBoundingRect().clone();ie.applyTransform(C.getComputedTransform());var Fe=(C.style.margin||0)+2.1;ie.y-=Fe/2,ie.height+=Fe,t.push({label:C,labelLine:w,position:G,len:P,len2:k,minTurnAngle:V.get("minTurnAngle"),maxSurfaceAngle:V.get("maxSurfaceAngle"),surfaceNormal:new B(T,Z),linePoints:Be,textAlign:ue,labelDistance:F,labelAlignTo:_,edgeDistance:Y,bleedMargin:E,rect:ie,unconstrainedWidth:ie.width,labelStyleWidth:C.style.width})}D.setTextConfig({inside:J})}}),!o&&a.get("avoidLabelOverlap")&&yr(t,e,n,c,s,h,l,f);for(var p=0;p<t.length;p++){var d=t[p],y=d.label,m=d.labelLine,b=isNaN(y.x)||isNaN(y.y);if(y){y.setStyle({align:d.textAlign}),b&&(W(y.states,g),y.ignore=!0);var L=y.states.select;L&&(L.x+=y.x,L.y+=y.y)}if(m){var x=d.linePoints;b||!x?(W(m.states,g),m.ignore=!0):(er(x,d.minTurnAngle),tr(x,d.surfaceNormal,d.maxSurfaceAngle),m.setShape({points:x}),y.__hostTarget.textGuideLineConfig={anchor:new B(x[0][0],x[0][1])})}}}var br=function(a){K(r,a);function r(t,e,n){var o=a.call(this)||this;o.z2=2;var i=new fe;return o.setTextContent(i),o.updateData(t,e,n,!0),o}return r.prototype.updateData=function(t,e,n,o){var i=this,v=t.hostModel,c=t.getItemModel(e),s=c.getModel("emphasis"),l=t.getItemLayout(e),f=H(ge(c.getModel("itemStyle"),l,!0),l);if(isNaN(f.startAngle)){i.setShape(f);return}if(o){i.setShape(f);var h=v.getShallow("animationType");v.ecModel.ssr?(xe(i,{scaleX:0,scaleY:0},v,{dataIndex:e,isFrom:!0}),i.originX=f.cx,i.originY=f.cy):h==="scale"?(i.shape.r=l.r0,xe(i,{shape:{r:l.r}},v,e)):n!=null?(i.setShape({startAngle:n,endAngle:n}),xe(i,{shape:{startAngle:l.startAngle,endAngle:l.endAngle}},v,e)):(i.shape.endAngle=l.startAngle,Te(i,{shape:{endAngle:l.endAngle}},v,e))}else Et(i),Te(i,{shape:f},v,e);i.useStyle(t.getItemVisual(e,"style")),Ft(i,c);var g=(l.startAngle+l.endAngle)/2,u=v.get("selectedOffset"),p=Math.cos(g)*u,d=Math.sin(g)*u,y=c.getShallow("cursor");y&&i.attr("cursor",y),this._updateLabel(v,t,e),i.ensureState("emphasis").shape=H({r:l.r+(s.get("scale")&&s.get("scaleSize")||0)},ge(s.getModel("itemStyle"),l)),H(i.ensureState("select"),{x:p,y:d,shape:ge(c.getModel(["select","itemStyle"]),l)}),H(i.ensureState("blur"),{shape:ge(c.getModel(["blur","itemStyle"]),l)});var m=i.getTextGuideLine(),b=i.getTextContent();m&&H(m.ensureState("select"),{x:p,y:d}),H(b.ensureState("select"),{x:p,y:d}),Wt(this,s.get("focus"),s.get("blurScope"),s.get("disabled"))},r.prototype._updateLabel=function(t,e,n){var o=this,i=e.getItemModel(n),v=i.getModel("labelLine"),c=e.getItemVisual(n,"style"),s=c&&c.fill,l=c&&c.opacity;rt(o,Ht(i),{labelFetcher:e.hostModel,labelDataIndex:n,inheritColor:s,defaultOpacity:l,defaultText:t.getFormattedLabel(n,"normal")||e.getName(n)});var f=o.getTextContent();o.setTextConfig({position:null,rotation:null}),f.attr({z2:10});var h=t.get(["label","position"]);if(h!=="outside"&&h!=="outer")o.removeTextGuideLine();else{var g=this.getTextGuideLine();g||(g=new Qe,this.setTextGuideLine(g)),ar(this,nr(i),{stroke:s,opacity:Ut(v.get(["lineStyle","opacity"]),l,1)})}},r}(ot),Sr=function(a){K(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.ignoreLabelLineUpdate=!0,t}return r.prototype.render=function(t,e,n,o){var i=t.getData(),v=this._data,c=this.group,s;if(!v&&i.count()>0){for(var l=i.getItemLayout(0),f=1;isNaN(l&&l.startAngle)&&f<i.count();++f)l=i.getItemLayout(f);l&&(s=l.startAngle)}if(this._emptyCircleSector&&c.remove(this._emptyCircleSector),i.count()===0&&t.get("showEmptyCircle")){var h=ht(t),g=new ot({shape:H(vt(t,n),h)});g.useStyle(t.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=g,c.add(g)}i.diff(v).add(function(u){var p=new br(i,u,s);i.setItemGraphicEl(u,p),c.add(p)}).update(function(u,p){var d=v.getItemGraphicEl(p);d.updateData(i,u,s),d.off("click"),c.add(d),i.setItemGraphicEl(u,d)}).remove(function(u){var p=v.getItemGraphicEl(u);Yt(p,t,u)}).execute(),mr(t),t.get("animationTypeUpdate")!=="expansion"&&(this._data=i)},r.prototype.dispose=function(){},r.prototype.containPoint=function(t,e){var n=e.getData(),o=n.getItemLayout(0);if(o){var i=t[0]-o.cx,v=t[1]-o.cy,c=Math.sqrt(i*i+v*v);return c<=o.r&&c>=o.r0}},r.type="pie",r}($t);function xr(a,r,t){r=se(r)&&{coordDimensions:r}||H({encodeDefine:a.getEncode()},r);var e=a.getSource(),n=jt(e,r).dimensions,o=new Xt(n,a);return o.initData(e,t),o}var Ar=function(){function a(r,t){this._getDataWithEncodedVisual=r,this._getRawData=t}return a.prototype.getAllNames=function(){var r=this._getRawData();return r.mapArray(r.getName)},a.prototype.containName=function(r){var t=this._getRawData();return t.indexOfName(r)>=0},a.prototype.indexOfName=function(r){var t=this._getDataWithEncodedVisual();return t.indexOfName(r)},a.prototype.getItemVisual=function(r,t){var e=this._getDataWithEncodedVisual();return e.getItemVisual(r,t)},a}(),Dr=it(),Lr=function(a){K(r,a);function r(){return a!==null&&a.apply(this,arguments)||this}return r.prototype.init=function(t){a.prototype.init.apply(this,arguments),this.legendVisualProvider=new Ar(Ie(this.getData,this),Ie(this.getRawData,this)),this._defaultLabelLine(t)},r.prototype.mergeOption=function(){a.prototype.mergeOption.apply(this,arguments)},r.prototype.getInitialData=function(){return xr(this,{coordDimensions:["value"],encodeDefaulter:j(qt,this)})},r.prototype.getDataParams=function(t){var e=this.getData(),n=Dr(e),o=n.seats;if(!o){var i=[];e.each(e.mapDimension("value"),function(c){i.push(c)}),o=n.seats=Zt(i,e.hostModel.get("percentPrecision"))}var v=a.prototype.getDataParams.call(this,t);return v.percent=o[t]||0,v.$vars.push("percent"),v},r.prototype._defaultLabelLine=function(t){Kt(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},r.type="series.pie",r.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,endAngle:"auto",padAngle:0,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},r}(Jt);function Cr(a){return{seriesType:a,reset:function(r,t){var e=r.getData();e.filterSelf(function(n){var o=e.mapDimension("value"),i=e.get(o,n);return!(Ne(i)&&!isNaN(i)&&i<0)})}}}function Ir(a){a.registerChartView(Sr),a.registerSeriesModel(Lr),Qt("pie",a.registerAction),a.registerLayout(j(pr,"pie")),a.registerProcessor(fr("pie")),a.registerProcessor(Cr("pie"))}export{Pr as a,Ir as i};