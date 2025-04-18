import{nF as hn,eT as dn,z as fn,ca as yn,g6 as ke,gC as gn,d5 as st,J as u,K as c,M as Y,bz as Qt,cr as vn,pn as $n,$ as m,B as mn,ac as f,gm as P,po as bn,pp as Nn,aN as Xt,eK as V,ae as wt,ab as Me,ch as xt,N as Ln,d9 as En,eu as Ft,pq as wn,aa as xn,d6 as An,pr as Tn,lH as kn,gl as A,mf as U,n7 as Mn,ps as _e,md as ct,me as et,n8 as _n,ml as Rn,aw as dt,fk as M,az as k,hZ as E,aB as At,jE as Gt,af as nt,n5 as Sn,eq as te,eL as Re,nA as Lt,mg as Pn,jq as Se,cV as zn,pt as In,G as jn,iW as Pe,b as On,aT as qn,er as Bn,ax as Dn,jG as Hn,aJ as Un,aD as Vn,la as Fn,ow as ge,bB as Gn}from"./index-8or3xOo5.js";import{m as ee,o as ft}from"./quantityUtils-IkGF6KJ8.js";import{n as Tt,a as ze,e as zt}from"./projectVectorToVector-B0ewzOkw.js";import{N as Ct,q as ne,b as re,j as kt}from"./geodesicUtils-4eQVFg7U.js";import{l as It,M as z,Q as Wt,d as Ie,k as je,z as Cn,p as Wn,V as Yn,H as Oe,O as qe}from"./plane-CqxfS6v6.js";import{I as Zn,O as Jn,_ as Kn,$ as Qn,U as Xn}from"./sphere-CnRdzNIr.js";import{m as tr,x as er,E as nr,j as se}from"./elevationInfoUtils-DKhZyBH7.js";const rr="z",sr="r",cs={redo:sr,undo:rr,center:"Alt",constraint:"Shift",cancel:"Escape",delete:["Backspace","Delete"],complete:"Enter",vertexAdd:"f",pan:" "},ve={toggle:"Control"},ps={enterInputMode:"Tab",commit:"Enter",discard:"Escape",next:"Tab"},hs={moveUp:{key:"ArrowUp",modifier:"Shift",repeats:!0},moveDown:{key:"ArrowDown",modifier:"Shift",repeats:!0},moveLeft:{key:"ArrowLeft",modifier:"Shift",repeats:!0},moveRight:{key:"ArrowRight",modifier:"Shift",repeats:!0},scaleUp:{key:"+",modifier:"Shift"},scaleDown:{key:"-",modifier:"Shift"},factorModifier:{key:hn,continuePropagation:!0},toggleOpacity:"t",preserveAspectRatio:{key:"Shift",continuePropagation:!0},rotateIncrements:{key:"Shift",continuePropagation:!0}};let ds=class{constructor(){this._bindings=new Map}add(t,n){return this.addToggle(t,r=>{r.type==="key-down"&&n(r)})}addToggle(t,n){const r=ir.fromDefinition(t,n),s=dn(this._bindings,r.key,()=>[]);return s.push(r),fn(()=>yn(s,r))}register(t,n=ke.WIDGET){return gn([t.on("key-down",r=>this.dispatch(t.inputManager,r),n),t.on("key-up",r=>this.dispatch(t.inputManager,r),n)])}dispatch(t,n){const r=n.key,s=this._bindings.get(r);if(s)for(const i of s)i.process(t,n)}},ir=class Yt{constructor(t,n,r,s,i){this.key=t,this.modifiers=n,this.repeats=r,this.continuePropagation=s,this.callback=i}process(t,n){if(!(n.key!==this.key||"repeat"in n&&n.repeat&&!this.repeats)){for(const r of this.modifiers)if(!t.isModifierKeyDown(r))return;this.continuePropagation||n.stopPropagation(),this.callback(n)}}static fromDefinition(t,n){if(typeof t=="string")return new Yt(t,[],!1,!1,n);const{key:r,modifier:s,repeats:i,continuePropagation:a}=t;return new Yt(r,s?Array.isArray(s)?s:[s]:[],!!i,!!a,n)}},Et=class extends st{constructor(t){super(t),this.enabled=!1}};u([c({type:Boolean,nonNullable:!0})],Et.prototype,"enabled",void 0),Et=u([Y("esri.views.interactive.sketch.SketchLabelOptions")],Et);const Be=Et;let ht=class extends st{constructor(e){super(e),this.mode="absolute-height"}toJSON(){return{mode:this.mode}}};u([c({type:String,nonNullable:!0})],ht.prototype,"mode",void 0),ht=u([Y("esri.views.interactive.sketch.SketchTooltipElevationOptions")],ht);let L=class extends st{constructor(t){super(t),this.area=!0,this.coordinates=!0,this.direction=!0,this.distance=!0,this.elevation=!0,this.header=!0,this.helpMessage=!1,this.orientation=!0,this.radius=!0,this.rotation=!0,this.scale=!0,this.size=!0,this.totalLength=!0}};u([c({type:Boolean,nonNullable:!0})],L.prototype,"area",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"coordinates",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"direction",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"distance",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"elevation",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"header",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"helpMessage",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"orientation",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"radius",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"rotation",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"scale",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"size",void 0),u([c({type:Boolean,nonNullable:!0})],L.prototype,"totalLength",void 0),L=u([Y("esri.views.interactive.sketch.SketchTooltipVisibleElements")],L);const De=L;let x=class extends st{constructor(t){super(t),this.enabled=!1,this.forceEnabled=!1,this.helpMessage=null,this.helpMessageIcon=null,this.inputEnabled=!0,this.elevation=new ht,this.placement="auto",this.offset=null,this.visibleElements=new De,this.visualVariables=null,this.xyMode="auto"}get effectiveEnabled(){return this.forceEnabled||this.enabled}};u([c({type:Boolean,nonNullable:!0})],x.prototype,"enabled",void 0),u([c()],x.prototype,"forceEnabled",void 0),u([c()],x.prototype,"effectiveEnabled",null),u([c()],x.prototype,"helpMessage",void 0),u([c()],x.prototype,"helpMessageIcon",void 0),u([c({type:Boolean,nonNullable:!0})],x.prototype,"inputEnabled",void 0),u([c({type:ht,nonNullable:!0})],x.prototype,"elevation",void 0),u([c()],x.prototype,"placement",void 0),u([c()],x.prototype,"offset",void 0),u([c({type:De,nonNullable:!0})],x.prototype,"visibleElements",void 0),u([c()],x.prototype,"visualVariables",void 0),u([c()],x.prototype,"xyMode",void 0),x=u([Y("esri.views.interactive.sketch.SketchTooltipOptions")],x);const He=x;let it=class extends st{constructor(t){super(t),this.length=null,this.verticalLength=null,this.area=null}};u([c()],it.prototype,"length",void 0),u([c()],it.prototype,"verticalLength",void 0),u([c()],it.prototype,"area",void 0),it=u([Y("esri.views.interactive.sketch.Units")],it);const Mt=it;var T;function or(e,t){if(e==null||t==null)return;const n=Zt(e,t);return n!=null?ft(n,"radians","geographic"):void 0}(function(e){e.Absolute="absolute",e.Relative="relative",e.RelativeBilateral="relative-bilateral"})(T||(T={}));const Zt=(()=>{const e=f(),t=f();return(n,r)=>(V(e,n.x,n.y,n.z??0),V(t,r.x,r.y,r.z??0),ar(e,t,n.spatialReference,r.spatialReference))})(),ar=(()=>{const e=P(),t=f(),n=f();return(r,s,i,a)=>{if(m(r,s))return;const o=Ct(i),l=Ct(a);if(o&&l&&mn(o,l)&&Tt(r,i,t,o)&&Tt(s,a,n,l)){const{azimuth:h}=ne(lr,t,n,o);return h!=null?Qt(h,"degrees","radians"):void 0}e[0]=s[0]-r[0],e[1]=s[1]-r[1];let p=bn(Nn,e);return e[0]<0&&(p=cr-p),p}})();function ms(e,t,n,r=T.Absolute){if(t&&n)switch(r){case T.Absolute:return or(t,n);case T.Relative:return me($e(e,t,n),T.Relative);case T.RelativeBilateral:return me($e(e,t,n),T.RelativeBilateral)}}function $e(e,t,n){if(!e||!t||!n)return;const r=Zt(e,t),s=Zt(t,n);return r!=null&&s!=null?ft(s-r,"radians","geographic"):void 0}function me(e,t){if(e!=null)switch(t){case T.Absolute:return ur(e);case T.Relative:{const n=_t(e);let r=be.normalize(n,0,!0);return r===-180&&(r=180),ft(r,"degrees","geographic")}case T.RelativeBilateral:{const n=_t(e),r=Math.abs(be.normalize(n,0,!0));return ft(r,"degrees","geographic")}}}function ur(e){const t=_t(e),n=pr.normalize(t,0,!0);return ft(n,"degrees","geographic")}const bs=(()=>{const e=f();return(t,n,r,s,i,a="geodesic")=>{Xt(e,n);const o=_t(i);if(a==="geodesic"){const y=Ct(r);if(y&&Tt(e,r,e,y))return kt(t,e,o,s,y),t[2]=n[2],!!Tt(t,y,t,r)}const l=ee(o,"geographic","arithmetic"),p=Qt(l,"degrees","radians"),h=n[0]+s*Math.cos(p),d=n[1]+s*Math.sin(p),b=n[2];return V(t,h,d,b),!0}})();function _t(e){if(e!=null)return ee(Ue(e),e.rotationType,"geographic")}function Ns(e){if(e!=null)return ee(Ue(e),e.rotationType,"arithmetic")}function Ue(e){return Qt(e.value,e.unit,"degrees")}const lr=new re,cr=2*Math.PI,pr=vn,be=new $n(-180,180);let Z=class extends st{constructor(e){super(e),this.directionMode="relative",this.relativeDirectionIsBilateral=!1}get effectiveDirectionMode(){switch(this.directionMode){case"relative":return this.relativeDirectionIsBilateral?T.RelativeBilateral:T.Relative;case"absolute":return T.Absolute}}get displayUnits(){return this._get("displayUnits")??new Mt}set displayUnits(e){this._set("displayUnits",e)}get inputUnits(){return this._get("inputUnits")??new Mt}set inputUnits(e){this._set("inputUnits",e)}};u([c({type:String,nonNullable:!0})],Z.prototype,"directionMode",void 0),u([c({type:Boolean,nonNullable:!0})],Z.prototype,"relativeDirectionIsBilateral",void 0),u([c()],Z.prototype,"effectiveDirectionMode",null),u([c({type:Mt,nonNullable:!0})],Z.prototype,"displayUnits",null),u([c({type:Mt,nonNullable:!0})],Z.prototype,"inputUnits",null),Z=u([Y("esri.views.interactive.sketch.SketchValueOptions")],Z);const Ve=Z;let ot=class extends st{constructor(t){super(t),this.labels=new Be,this.tooltips=new He,this.values=new Ve}};u([c({nonNullable:!0,type:Be})],ot.prototype,"labels",void 0),u([c({nonNullable:!0,type:He})],ot.prototype,"tooltips",void 0),u([c({nonNullable:!0,type:Ve})],ot.prototype,"values",void 0),ot=u([Y("esri.views.interactive.sketch.SketchOptions")],ot);const Es=ot;var rt;function Fe(e,t,n){return R(e,t,n)}function R(e=0,t=0,n=0){return wt(e,t,n)}function ws(e){return e}function xs(e){return e}function Q(e,t,n){return wt(e,t,n)}function at(e){const[t,n,r]=e;return e.length>3?[t,n,r,e[3]]:[t,n,r]}function As(e){return e[3]=((e.length>3?e[3]:void 0)??rt.NONE)|rt.TARGET,e}function Ts(e){return!!(((e.length>3?e[3]:void 0)??rt.NONE)&rt.TARGET)}function Ne(e,t,{coordinateHelper:n,elevationInfo:r},s){return e?hr(n.vectorToDehydratedPoint(e,dr),t,r,s):null}function hr(e,t,n,r=R()){return r[0]=e.x,r[1]=e.y,r[2]=e.z??0,t==null||(t.type==="2d"?r[2]=0:r[2]=tr(t,e,n,se)??0),r}function ks(e,t,n){return n?(ze(n,e[0],e[1],e[2],t),n):zt(e[0],e[1],e[2],t)}function Ms(e,t,{z:n,m:r},s,i){const{spatialReference:a,elevationInfo:o}=s;let l;n==null&&r==null?l=void 0:t==null||t.type==="2d"?l=n??void 0:l=er(t,e,a,se,o)??0;const[p,h]=e;return i?ze(i,p,h,l,a):i=zt(p,h,l,a),r!=null&&(i.m=r,i.hasM=!0),i}function _s(e,t,n,r,s=R()){const[i,a]=e;return s[0]=i,s[1]=a,e.length>3&&(s[3]=e[3]??rt.NONE),(n==null?void 0:n.type)!=="3d"?(s[2]=t.value,s):(s[2]=nr(n,i,a,t.value,r,t.elevationInfo,se)??0,s)}(function(e){e[e.NONE=0]="NONE",e[e.TARGET=1]="TARGET"})(rt||(rt={}));const dr=zt(0,0,0,null);let O=class extends Me{constructor(){super(...arguments),this.enabled=!0}};u([c({type:Boolean})],O.prototype,"enabled",void 0),O=u([Y("esri.views.interactive.snapping.Settings.DefaultSnappingAlgorithm")],O);let v=class extends Me{constructor(e){super(e),this.lineSnapper=new O,this.parallelLineSnapper=new O,this.rightAngleSnapper=new O,this.rightAngleTriangleSnapper=new O,this.shortLineThreshold=15,this.distance=5,this.pointThreshold=1e-6,this.intersectionParallelLineThreshold=1e-6,this.parallelLineThreshold=1e-6,this.verticalLineThresholdMeters=.3,this.touchSensitivityMultiplier=1.5,this.pointOnLineThreshold=1e-6,this.orange=new xt([255,127,0]),this.orangeTransparent=new xt([255,127,0,.5]),this.lineHintWidthReference=3,this.lineHintWidthTarget=3,this.lineHintFadedExtensions=.3,this.parallelLineHintWidth=2,this.parallelLineHintLength=24,this.parallelLineHintOffset=1.5,this.rightAngleHintSize=24,this.rightAngleHintOutlineSize=1.5,this.satisfiesConstraintScreenThreshold=1}};u([c({type:O,constructOnly:!0,nonNullable:!0,json:{write:!0}})],v.prototype,"lineSnapper",void 0),u([c({type:O,constructOnly:!0,nonNullable:!0,json:{write:!0}})],v.prototype,"parallelLineSnapper",void 0),u([c({type:O,constructOnly:!0,nonNullable:!0,json:{write:!0}})],v.prototype,"rightAngleSnapper",void 0),u([c({type:O,constructOnly:!0,nonNullable:!0,json:{write:!0}})],v.prototype,"rightAngleTriangleSnapper",void 0),u([c({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],v.prototype,"shortLineThreshold",void 0),u([c({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],v.prototype,"distance",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],v.prototype,"pointThreshold",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],v.prototype,"intersectionParallelLineThreshold",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],v.prototype,"parallelLineThreshold",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],v.prototype,"verticalLineThresholdMeters",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],v.prototype,"touchSensitivityMultiplier",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],v.prototype,"pointOnLineThreshold",void 0),u([c({type:xt,nonNullable:!0})],v.prototype,"orange",void 0),u([c({type:xt,nonNullable:!0})],v.prototype,"orangeTransparent",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],v.prototype,"lineHintWidthReference",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],v.prototype,"lineHintWidthTarget",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],v.prototype,"lineHintFadedExtensions",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],v.prototype,"parallelLineHintWidth",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:50},json:{write:!0}})],v.prototype,"parallelLineHintLength",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],v.prototype,"parallelLineHintOffset",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:46},json:{write:!0}})],v.prototype,"rightAngleHintSize",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:6},json:{write:!0}})],v.prototype,"rightAngleHintOutlineSize",void 0),u([c({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],v.prototype,"satisfiesConstraintScreenThreshold",void 0),v=u([Y("esri.views.interactive.snapping.Settings.Defaults")],v);const Ss=new v;var ut;(function(e){e[e.FEATURE=1]="FEATURE",e[e.SELF=2]="SELF",e[e.ALL=3]="ALL"})(ut||(ut={}));const Ps=Symbol("grid-placement-graphic");function fr(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function zs(e,t){return Math.sqrt(fr(e,t))}function Is(e,t){t.sort((n,r)=>Ft(n.targetPoint,e)-Ft(r.targetPoint,e))}var Le;function js({point:e,distance:t,returnEdge:n,vertexMode:r,coordinateHelper:{spatialReference:s},filter:i},a,o){return o=o!=null?o.clone():new xn({where:"1=1"}),i&&(o.geometry=i.geometry,o.distance=i.distance,o.spatialRelationship=i.spatialRelationship,o.where=An(o.where,i.where),o.timeExtent=Tn(o.timeExtent,i.timeExtent),o.objectIds=yr(o.objectIds,i.objectIds)),{point:zt(e[0],e[1],e[2],s.toJSON()),mode:a,distance:t,returnEdge:n,vertexMode:r,query:o.toJSON()}}function yr(e,t){return e||t?t?e?Array.from(kn(new Set(e),new Set(t))):t:e:null}function Os(e,t,n){return{left:Ne(e.leftVertex.pos,t,n),right:Ne(e.rightVertex.pos,t,n)}}(function(e){e[e.TARGET=0]="TARGET",e[e.REFERENCE=1]="REFERENCE",e[e.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"})(Le||(Le={}));const Ee=Symbol("snapping-toggle");function qs(e,t=()=>{}){const n=Ln(()=>({view:e.view,snappingOptions:e.snappingOptions}),({view:r,snappingOptions:s})=>{if(e.removeHandles(Ee),!r||!s)return;const i=ke.TOOL,a=[r.on("key-down",o=>{o.key!==ve.toggle||o.repeat||(s.enabledToggled=!0,t())},i),r.on("key-up",o=>{o.key===ve.toggle&&(s.enabledToggled=!1,t())},i),r.on("pointer-move",o=>{const l=o.native.ctrlKey;s.enabledToggled!==l&&(s.enabledToggled=l,t())},i)];e.addHandles(a,Ee)},En);e.addHandles(n)}function Bs(e){var t;return wn(e)&&"utilityNetworks"in e&&!!((t=e.utilityNetworks)!=null&&t.length)}function Ht(e,t){return e[0]*t[1]-e[1]*t[0]}function gr(e,t,n){const r=ct(n,t)/et(n);return _n(e,n,r)}function Ds(e,t,n,r,s=n){return A(tt,r,n),A(Rt,t,s),gr(lt,Rt,tt),Mn(e,s,lt)}function Hs(e,t,n,r){A(tt,t,n);const s=r/_e(tt);return U(e,n,tt,s)}function Us(e,t){const n=e.start,r=e.end,s=t.start,i=t.end,a=A(tt,r,n),o=A(Ge,i,s),l=Ht(a,o);if(Math.abs(l)<=$r)return[];const p=A(Rt,n,s),h=Ht(o,p)/l,d=Ht(a,p)/l;if(h>=0){if(d>=0||t.type===$.LINE)return[U(lt,n,a,h)]}else if(e.type===$.LINE&&(d>=0||t.type===$.LINE))return[U(lt,n,a,h)];return[]}function vr(e,t,n){const r=[],s=A(tt,e.end,e.start),i=A(Ge,e.start,t),a=et(s),o=2*ct(s,i),l=o*o-4*a*(et(i)-n*n);if(l===0){const p=-o/(2*a);(e.type===$.LINE||p>=0)&&r.push(U(lt,e.start,s,p))}else if(l>0){const p=Math.sqrt(l),h=(-o+p)/(2*a);(e.type===$.LINE||h>=0)&&r.push(U(lt,e.start,s,h));const d=(-o-p)/(2*a);(e.type===$.LINE||d>=0)&&r.push(U(Rt,e.start,s,d))}return r}var $;(function(e){e[e.RAY=0]="RAY",e[e.LINE=1]="LINE"})($||($={}));const $r=1e-6,tt=P(),Ge=P(),Rt=P(),lt=P();function ie({start:e,end:t,type:n},r,s){const i=[],a=A(yt,t,e),o=A(jt,e,r),l=et(a),p=2*ct(a,o),h=p*p-4*l*(et(o)-s*s);if(h===0){const d=-p/(2*l);(n===_.PLANE||d>=0)&&i.push(U(P(),e,a,d))}else if(h>0){const d=Math.sqrt(h),b=(-p+d)/(2*l);(n===_.PLANE||b>=0)&&i.push(U(P(),e,a,b));const y=(-p-d)/(2*l);(n===_.PLANE||y>=0)&&i.push(U(P(),e,a,y))}return i}function Ce(e,t){const n=e.start,r=e.end,s=A(yt,r,n),i=V(qt,-s[1],s[0],0),a=t.start,o=t.end,l=M(ae,o,a),p=k(l,i),h=V(tn,n[0],n[1],0),d=M(en,h,a),b=k(d,i),y=dt();if(Math.abs(p)<y)return[];const N=E(nn,a,l,b/p);if(t.type===$.RAY){const w=M(Jt,N,a);if(k(w,l)<-y)return[]}if(e.type===_.HALF_PLANE){const w=Sn(jt,N,n);if(ct(w,s)<-y)return[]}return[nt(N)]}function mr(e,t){return Nr(St(ue,t[2],e),t)}function We(e,t){return Qe(St(ue,0,e),St(xr,0,t)).map(([r,s])=>Lt(r,s))}function Ye(e,t,n){return Je(e,St(ue,e[2],t),n)}function Ze(e,t,n,r=f()){const s=A(yt,e,t),i=_e(s);return U(r,t,s,i===0?1:n/i),r[2]=e[2],r}function Je(e,{start:t,end:n,type:r},s=f()){const i=M(Ot,e,t),a=M(qt,n,t),o=k(i,a)/k(a,a);return E(s,t,a,r===$.RAY?Math.max(o,0):o)}const br=(()=>{const e=f(),t=f(),n=f();return({start:r,end:s},{center:i,radius:a,normal:o,slicePlane:l})=>{const p=It(i,o,wr);if(g(Wt(p,r),0)&&g(Wt(p,s),0)){Ie(o,e,t);const d=(N,w)=>(te(n,w,i),Se(N,k(n,e),k(n,t)),N),b=vr({start:d(yt,r),end:d(jt,s),type:$.LINE},zn,a),y=[];for(const[N,w]of b){const S=Xt(f(),i);E(S,S,e,N),E(S,S,t,w),l&&!K(l,S)||y.push(S)}return y}const h=f();return je(p,r,s,h)?!g(Re(h,i),a)||l&&!K(l,h)?[]:[h]:[]}})();function Ke({start:e,end:t,type:n},r,s){const i=[],a=te(Ot,t,e),o=A(jt,e,r),l=et(a),p=2*ct(a,o),h=p*p-4*l*(et(o)-s*s);if(h===0){const d=-p/(2*l);(n===$.LINE||d>=0)&&i.push(E(f(),e,a,d))}else if(h>0){const d=Math.sqrt(h),b=(-p+d)/(2*l);(n===$.LINE||b>=0)&&i.push(E(f(),e,a,b));const y=(-p-d)/(2*l);(n===$.LINE||y>=0)&&i.push(E(f(),e,a,y))}return i}function Qe(e,t){const n=e.start,r=e.end,s=t.start,i=t.end,a=M(Ot,r,n),o=M(qt,i,s),l=M(ae,s,n),p=At(tn,a,o);if(!g(k(l,p),0))return[];const h=Gt(p);if(g(h,0))return[];const d=At(en,l,o),b=k(d,p)/h,y=E(nn,n,a,b);if(e.type===$.RAY){const N=M(Jt,y,n);if(k(a,N)<-dt())return[]}if(t.type===$.RAY){const N=M(Jt,y,s);if(k(o,N)<-dt())return[]}return[nt(y)]}function Nr({start:e,end:t,type:n},r){const s=M(Ot,r,e),i=M(qt,t,e),a=At(ae,i,s),o=Gt(a)/Gt(i),l=dt();if(o<l)switch(n){case $.LINE:return[nt(r)];case $.RAY:return k(i,s)<-l?[]:[nt(r)]}return[]}function oe(e,t,n,r){const[s,i]=e,[a,o]=n,l=a-s,p=o-i,h=l*l+p*p,d=Math.sqrt(h);if(d>t+r)return[];if(d<Math.abs(t-r))return[];if(g(d,0)&&g(t,r))return[];const b=(t*t-r*r+h)/(2*d),y=Math.sqrt(t*t-b*b),N=y*p/d,w=y*l/d,[S,X]=Pn(yt,e,n,b/d);return g(N,w)?[Lt(S,X)]:[Lt(S+N,X-w),Lt(S-N,X+w)]}function St(e,t,{start:n,end:r,type:s}){return V(e.start,n[0],n[1],t),V(e.end,r[0],r[1],t),e.type=Er[s],e}function Xe(e,t){return g(e[2],t[2])}function g(e,t){return Rn(Math.abs(e-t),0,dt())}function Lr(e,t){return t.filter(n=>K(e,n))}function K(e,t){return Cn(e,t)}var _;(function(e){e[e.PLANE=0]="PLANE",e[e.HALF_PLANE=1]="HALF_PLANE"})(_||(_={}));const Er={[_.PLANE]:$.LINE,[_.HALF_PLANE]:$.RAY},yt=P(),jt=P(),Ot=f(),qt=f(),ae=f(),tn=f(),en=f(),nn=f(),Jt=f(),wr=z(),ue={start:f(),end:f(),type:$.LINE},xr={start:f(),end:f(),type:$.LINE};class I{intersect(t){return F(this,t)}closestPoints(t){return[this.closestTo(t)]}}class gt extends I{constructor(t){super(),this.point=t}equals(t){return this===t||j(t)&&m(this.point,t.point)}closestTo(){return at(this.point)}}class le extends I{constructor(t,n,r){super(),this.start=t,this.end=n,this.lineLike={start:t,end:n,type:r}}equals(t){return this===t||B(t)&&this.lineLike.type===t.lineLike.type&&m(this.start,t.start)&&m(this.end,t.end)}closestTo(t){const n=R();return Je(t,this.lineLike,n),n}}class rn extends le{constructor(t,n){super(t,n,$.LINE)}}class Ar extends le{constructor(t,n){super(t,n,$.RAY)}}class sn extends I{constructor(t){super(),this.constraints=t}equals(t){return this===t||Kt(t)&&On(this.constraints,t.constraints,(n,r)=>n.equals(r))}closestTo(t){let n,r=1/0;for(const s of this.constraints){const i=s.closestTo(t),a=Ft(t,i);a<r&&(r=a,n=i)}return at(n??t)}closestPoints(t){return this.constraints.flatMap(n=>n===this?[]:n.closestPoints(t))}}class Tr extends I{constructor(t,n){super(),this.center=t,this.radius=n}equals(t){return this===t||H(t)&&this.center[0]===t.center[0]&&this.center[1]===t.center[1]&&this.radius===t.radius}closestTo(t){const n=R();return Ze(t,this.center,this.radius,n),n}}class ce extends I{constructor(t,n){super(),this.center=t,this.radius=n}equals(t){return this===t||C(t)&&m(this.center,t.center)&&this.radius===t.radius}closestTo(t){const n=R();return Ze(t,this.center,this.radius,n),n[2]=this.center[2],n}asCircle(){return new pe(at(this.center),this.radius,Q(0,0,1))}}class pe extends I{constructor(t,n,r,s=void 0){super(),this.center=t,this.radius=n,this.normal=r,this.slicePlane=s}equals(t){return this===t||J(t)&&m(this.center,t.center)&&m(this.normal,t.normal)&&this.radius===t.radius}closestTo(t){const{center:n,radius:r}=this;Oe(this.getPlane(kr),t,Ut);const s=M(Ut,Ut,n),i=Bn(s);if(g(i,0))return at(t);const a=r/Math.sqrt(i),o=R();E(o,n,s,a);const{slicePlane:l}=this;if(l&&!K(l,o)){const p=de(l,this);return(p==null?void 0:p.closestTo(t))??at(t)}return o}getPlane(t=z()){return It(this.center,this.normal,t)}}const Ut=f(),kr=z();class Mr extends I{constructor(t){super(),this.z=t}equals(t){return this===t||G(t)&&this.z===t.z}closestTo(t){return Q(t[0],t[1],this.z)}getPlane(t=z()){return V(we,0,0,this.z),It(we,qn,t)}}const we=f();class he extends I{constructor(t,n,r){super(),this.start=t,this.end=n,this.planeLike={start:t,end:n,type:r}}equals(t){return this===t||D(t)&&this.planeLike.type===t.planeLike.type&&m(this.start,t.start)&&m(this.end,t.end)}closestTo(t){const n=R();return Ye(t,this.planeLike,n),n}closestEndTo(t){const{start:n,end:r}=this.planeLike;return Math.sign(ct(A(_r,r,n),A(Rr,t,n)))>0?this.end:this.start}getPlane(t=z()){const n=Xt(xe,this.end);return n[2]+=1,Wn(this.start,this.end,n,t)}getSlicePlane(t=z()){const{start:n,end:r,type:s}=this.planeLike;if(s===_.PLANE)return;const i=V(xe,n[0],n[1],0),a=V(Ae,r[0],r[1],0),o=te(Ae,a,i);return It(i,o,t),t}}const _r=P(),Rr=P(),xe=f(),Ae=f();class Vs extends he{constructor(t,n){super(t,n,_.HALF_PLANE)}}class Fs extends he{constructor(t,n){super(t,n,_.PLANE)}}class Sr extends I{constructor(t,n){super(),this.sphere=Jn(t,n)}equals(t){return this===t||W(t)&&Kn(this.sphere,t.sphere)}closestTo(t){const n=R();return Qn(this.sphere,t,n),n}get center(){return Xn(this.sphere)}get radius(){return this.sphere[3]}}class Pr extends I{constructor(t,n,r){super(),this.start=t,this.end=n,this.getZ=r,this.planeLike={start:t,end:n,type:_.PLANE}}equals(t){return this===t||Pt(t)&&m(this.start,t.start)&&m(this.end,t.end)&&this.getZ===t.getZ}closestTo(t){return Br(this,t)}addIfOnTheGround(t,n){for(const r of n){const s=this.getZ(r[0],r[1])??0;g(r[2],s)&&(r[2]=s,t.push(r))}}}class zr extends I{constructor(t,n,r){super(),this._x=t,this._y=n,this._z=r}equals(t){return this===t||es(t)&&this._x===t._x&&this._y===t._y&&this._z===t._z}closestTo([t,n,r]){return Fe(this._x??t,this._y??n,this._z??r)}}class Ir extends I{constructor(t,n,r,s,i){super(),this._origin=t,this._spatialReference=n,this._distanceMeters=r,this._z=s,this._directionDegrees=i}equals(t){return this===t||ts(t)&&ge(this._origin,t._origin)&&this._spatialReference===t._spatialReference&&this._distanceMeters===t._distanceMeters&&this._z===t._z&&this._directionDegrees===t._directionDegrees}closestTo([t,n,r]){return Se(pt,t,n),ge(pt,this._origin)||this._applyDirectionAndDistance(pt),Fe(pt[0],pt[1],this._z??r)}_applyDirectionAndDistance(t){if(this._directionDegrees!=null&&this._distanceMeters!=null)kt(t,this._origin,this._directionDegrees,this._distanceMeters,this._spatialReference);else if(this._directionDegrees!=null)Or(t,this._origin,this._directionDegrees,t,this._spatialReference);else if(this._distanceMeters!=null){const{azimuth:n}=ne(jr,this._origin,t,this._spatialReference);kt(t,this._origin,n??0,this._distanceMeters,this._spatialReference)}}}const pt=[0,0],jr=new re;function Or(e,t,n,r,s){let{azimuth:i,distance:a}=ne(qr,t,r,s);i??(i=0);let o=a*Math.cos((i-n)*Gn);o=Math.max(0,o),kt(e,t,n,o,s)}const qr=new re;function Br(e,t){const n=R();return Ye(t,e.planeLike,n),n[2]=e.getZ(n[0],n[1])??an,n}function F(e,t){if(Kt(e)){const n=[];for(const r of e.constraints){const s=r.intersect(t);s&&n.push(s)}return fe(n)}if(Kt(t))return F(t,e);if(Pt(e))return Te(e,t);if(Pt(t))return Te(t,e);if(j(e)){const{point:n}=e;if(j(t))return m(n,t.point)?e:void 0;const r=t.closestTo(n);return In(r,n)?e:void 0}if(B(e)){if(j(t))return F(t,e);if(B(t))return q(Qe(e.lineLike,t.lineLike));if(G(t))return Dr(e,t);if(D(t))return q(Ce(t.planeLike,e.lineLike));if(H(t))return q(Ke(e.lineLike,t.center,t.radius));if(J(t))return q(br(e.lineLike,t));if(C(t))return Hr(e,t);if(W(t))return Ur(e,t)}else if(G(e)){if(j(t)||B(t))return F(t,e);if(G(t))return Vr(e,t);if(D(t))return Fr(e,t);if(H(t))return Gr(e,t);if(J(t))return Wr(e,t);if(C(t))return Cr(e,t);if(W(t))return Yr(e,t)}else if(D(e)){if(j(t)||B(t)||G(t))return F(t,e);if(D(t))return Vt(We(e.planeLike,t.planeLike));if(H(t))return Vt(ie(e.planeLike,t.center,t.radius));if(J(t))return Jr(e,t);if(C(t))return Zr(e,t);if(W(t))return Kr(e,t)}else if(H(e)){if(j(t)||B(t)||G(t)||D(t))return F(t,e);if(H(t))return Vt(oe(e.center,e.radius,t.center,t.radius));if(J(t))return void 0;if(C(t))return Qr(e,t);if(W(t))return void 0}else if(J(e)){if(j(t)||B(t)||G(t)||D(t)||H(t))return F(t,e);if(J(t))return void 0;if(C(t))return t.asCircle(),void 0;if(W(t))return void 0}else if(C(e)){if(j(t)||B(t)||G(t)||D(t)||H(t)||J(t))return F(t,e);if(C(t))return Xr(t,e);if(W(t))return void 0}else if(W(e)){if(j(t)||B(t)||G(t)||D(t)||H(t)||C(t))return F(t,e);if(W(t))return void 0}}const Dr=(()=>{const e=z();return(t,n)=>{const{start:r,end:s}=t;if(Xe(r,s)&&g(r[2],n.z))return t;const i=R();return je(n.getPlane(e),r,s,i)?new gt(i):void 0}})();function Hr({lineLike:e},{center:t,radius:n}){const r=t[2];return q(Ke(e,t,n).filter(s=>g(s[2],r)))}function Ur({lineLike:e},{sphere:t}){return q(Zn(t,e.start,e.end))}const de=(()=>{const e=Hn(),t=f(),n=f();return(r,s,i)=>{const{normal:a,center:o,radius:l}=s;Ie(a,t,n);const p=qe(r),h=l*k(p,t),d=l*k(p,n);Dn(e,o[0],o[1],o[2],1);const b=Un(r,e),y=Math.hypot(h,d),N=g(y,0);if(g(Wt(r,o),0)){if(N)return s;if(g(l,0))return!i||K(i,o)?new gt(at(o)):void 0;At(t,p,a),Vn(t,t);const Dt=new Array,bt=nt(o);E(bt,bt,t,l),i&&!K(i,bt)||Dt.push(bt);const Nt=nt(o);return E(Nt,Nt,t,-l),i&&!K(i,Nt)||Dt.push(Nt),q(Dt)}if(N)return;const w=-b/y;if(Math.abs(w)>1||g(w,1))return;const S=Math.atan(h/d),X=Fn(w)-S,ye=Math.PI-X,vt=new Array,$t=f();E($t,o,t,l*Math.cos(X)),E($t,$t,n,l*Math.sin(X)),vt.push($t);const mt=f();return E(mt,o,t,l*Math.cos(ye)),E(mt,mt,n,l*Math.sin(ye)),vt.push(mt),q(i?Lr(i,vt):vt)}})();function Vr(e,t){return g(e.z,t.z)?e:void 0}function Fr({z:e},{planeLike:t}){const[n,r]=t.start,[s,i]=t.end,a=Q(n,r,e),o=Q(s,i,e);return t.type===_.PLANE?new rn(a,o):new Ar(a,o)}function Gr(e,t){const[n,r]=t.center;return new ce(Q(n,r,e.z),t.radius)}function Cr(e,t){return g(t.center[2],e.z)?t:void 0}const Wr=(()=>{const e=z();return(t,n)=>de(t.getPlane(e),n,n.slicePlane)})();function Yr(e,{center:t,radius:n}){const r=Math.abs(t[2]-e.z);if(r>n&&!g(r,n))return;const s=Q(t[0],t[1],e.z),i=Math.sqrt(n**2-r**2);return g(i,0)?void 0:new ce(s,i)}const Zr=(()=>{const e=z();return(t,{center:n,radius:r})=>{const s=ie(t.planeLike,n,r),i=n[2];t.getSlicePlane(e);const a=new Array;for(const[o,l]of s){const p=[o,l,i];K(e,p)&&a.push(p)}return q(a)}})(),Jr=(()=>{const e=z(),t=z();return(n,r)=>de(n.getPlane(e),r,n.getSlicePlane(t))})(),Kr=(()=>{const e=z();return(t,{center:n,radius:r})=>{const s=t.getPlane(e),i=Yn(s,n),a=Math.abs(i);if(a>r&&!g(a,r))return;const o=Math.sqrt(r**2-i**2);if(g(o,0)){const h=R();return Oe(s,n,h),new gt(h)}const l=R(),p=nt(qe(s));return E(l,n,p,i),new pe(l,o,p,t.getSlicePlane())}})();function Qr(e,t){const n=Pe(e.center,t.center);return g(n,0)&&g(e.radius,t.radius)?t:on(oe(e.center,e.radius,t.center,t.radius),t.center[2])}function Xr(e,t){if(!Xe(e.center,t.center))return;const n=Pe(e.center,t.center);return g(n,0)&&g(e.radius,t.radius)?e:on(oe(e.center,e.radius,t.center,t.radius),e.center[2])}function Te(e,t){const{planeLike:n,getZ:r}=e,s=new Array;if(j(t))e.addIfOnTheGround(s,mr(n,t.point));else if(B(t))e.addIfOnTheGround(s,Ce(n,t.lineLike));else if(H(t))for(const[i,a]of ie(n,t.center,t.radius)){const o=r(i,a);o!=null&&s.push(wt(i,a,o))}else if(D(t)||Pt(t))for(const[i,a]of We(n,t.planeLike)){const o=r(i,a)??an;s.push(wt(i,a,o))}return q(s)}function Vt(e){return fe(e.map(([t,n])=>{const r=Q(t,n,0),s=Q(t,n,1);return new rn(r,s)}))}function q(e){return fe(e.map(t=>t?new gt(t):void 0))}function on(e,t){return q(e.map(([n,r])=>[n,r,t]))}function fe(e){if(e.length!==0)return e.length===1?e[0]??void 0:new sn(e.filter(jn))}function Kt(e){return e instanceof sn}function j(e){return e instanceof gt}function B(e){return e instanceof le}function G(e){return e instanceof Mr}function D(e){return e instanceof he}function H(e){return e instanceof Tr}function C(e){return e instanceof ce}function J(e){return e instanceof pe}function W(e){return e instanceof Sr}function Pt(e){return e instanceof Pr}function ts(e){return e instanceof Ir}function es(e){return e instanceof zr}const an=0;let Bt=class{constructor(t,n){this.isDraped=t,this.domain=n}},Cs=class un extends Bt{constructor(t,n,r,s,i=ut.ALL,a=!0,o=!0){super(s,i),this.type=t,this.lineStart=n,this.lineEnd=r,this.fadeLeft=a,this.fadeRight=o}equals(t){return t instanceof un&&this.type===t.type&&m(this.lineStart,t.lineStart)&&m(this.lineEnd,t.lineEnd)&&this.fadeLeft===t.fadeLeft&&this.fadeRight===t.fadeRight}get length(){return Re(this.lineStart,this.lineEnd)}};class ln extends Bt{constructor(t,n,r=ut.ALL){super(n,r),this.intersectionPoint=t}equals(t){return t instanceof ln&&m(this.intersectionPoint,t.intersectionPoint)}}let Ws=class cn extends Bt{constructor(t,n,r,s=ut.ALL){super(r,s),this.lineStart=t,this.lineEnd=n}equals(t){return t instanceof cn&&m(this.lineStart,t.lineStart)&&m(this.lineEnd,t.lineEnd)}};class pn extends Bt{constructor(t,n,r,s,i=ut.ALL){super(s,i),this.previousVertex=t,this.centerVertex=n,this.nextVertex=r}equals(t){return t instanceof pn&&m(this.previousVertex,t.previousVertex)&&m(this.centerVertex,t.centerVertex)&&m(this.nextVertex,t.nextVertex)}}function ns(e){return(e==null?void 0:e.type)==="graphic"}function Ys(e){return e.find(ns)??null}export{or as $,Cs as A,Le as B,ln as C,Ws as D,Is as E,pn as F,Tr as G,hr as H,Ds as I,Je as J,Ms as K,rn as L,bs as M,Ne as N,qs as O,Be as P,He as Q,Fs as R,Ve as S,ur as T,T as U,me as V,Us as W,_t as X,zr as Y,fe as Z,Mr as _,Bt as a,Ir as a0,ms as a1,j as a2,ps as a3,Ns as a4,ks as a5,_s as a6,Ts as a7,As as b,R as c,Ps as d,Q as e,Fe as f,gt as g,Bs as h,ut as i,Vs as j,zs as k,Es as l,cs as m,ws as n,Os as o,Ss as p,ar as q,$ as r,xs as s,Hs as t,fr as u,Ys as v,ds as w,hs as x,js as y,Pr as z};
