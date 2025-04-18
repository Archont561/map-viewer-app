const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VideoController-B7RlPnaj.js","assets/index-8or3xOo5.js","assets/index-P-wQHtU5.css","assets/mat3f64-q3fE-ZOt.js","assets/spatialReferenceEllipsoidUtils-BBTpM6eu.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/mediaLayerUtils-Y5ulghSj.js","assets/utils-BEoX_gYk.js","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/saveUtils-XIipkJL1.js","assets/resourceUtils-BaUcYiX4.js","assets/resourceUtils-COb_S9PD.js"])))=>i.map(i=>d[i]);
import{b3 as _e,fL as J,n as W,J as s,M as _,ab as be,b7 as ae,Z as h,jq as V,gm as b,s as R,nz as Ge,hz as x,bF as ce,nA as Y,mg as me,nB as q,K as l,f6 as K,fB as X,cd as ue,aO as qe,nC as ye,jy as ze,fr as Be,cC as F,f1 as ke,f5 as Se,gI as Ie,bH as De,dq as Fe,fp as ge,ft as Oe,fq as Je,fs as $e,kN as pe,fu as de,nD as Ke,a0 as Ee,e_ as Qe,cb as Ze,_ as Me,iD as ve,bG as Xe,eo as Ye,l$ as et,eU as Pe,nE as tt,mD as nt,dS as ot,N as rt,V as ne,a1 as st,d3 as it,e4 as lt,B as at,cE as ct,jp as ut,l7 as pt,dg as dt,dh as ht,f3 as ft,f4 as mt,g4 as yt,iB as ee,di as gt,eR as vt}from"./index-8or3xOo5.js";import{p as I,j as Le,n as Pt,e as wt,m as xt,c as oe}from"./mediaLayerUtils-DFPrpUFb.js";import{t as Rt,e as re}from"./mat3f64-q3fE-ZOt.js";import{p as _t}from"./resourceExtension-Vs43hgH5.js";import{o as bt}from"./BoundsStore-D-mwheK-.js";import"./normalizeUtilsSync-CdDXGXFT.js";import"./PooledRBush-ao18fH3d.js";let le=class extends _e{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=J(e,t);return n?null:n||o?o:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};le=s([_("esri.layers.support.GeoreferenceBase")],le);const Q=le,se=re(),d=b();let k=class extends be{};s([l({type:Number,json:{write:{isRequired:!0}}})],k.prototype,"x",void 0),s([l({type:Number,json:{write:{isRequired:!0}}})],k.prototype,"y",void 0),k=s([_("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],k);let D=class extends _e{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],D.prototype,"sourcePoint",void 0),s([l({type:h})],D.prototype,"mapPoint",void 0),D=s([_("esri.layers.support.ControlPointsGeoreference.ControlPoint")],D);let P=class extends be.JSONSupportMixin(Q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=ae.fromJSON(t.spatialReference),n=Rt(...t.coefficients,1);return e.map(r=>(V(d,r.x,r.y),I(d,d,n),{sourcePoint:r,mapPoint:new h({x:d[0],y:d[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new R("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(se);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return Et(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[r,i,a,c]]}=e,u={sourcePoint:x(0,n),mapPoint:new h({x:r[0],y:r[1],spatialReference:t})},p={sourcePoint:x(0,0),mapPoint:new h({x:i[0],y:i[1],spatialReference:t})},f={sourcePoint:x(o,0),mapPoint:new h({x:a[0],y:a[1],spatialReference:t})},v={sourcePoint:x(o,n),mapPoint:new h({x:c[0],y:c[1],spatialReference:t})};y(u)&&y(p)&&y(f)&&y(v)&&(we(se,u,p,f,v),this.controlPoints=this.controlPoints.map(({sourcePoint:S})=>(V(d,S.x,S.y),I(d,d,se),{sourcePoint:S,mapPoint:new h({x:d[0],y:d[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Ge(re(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;V(d,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return I(d,d,this.transform),new h({x:d[0],y:d[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=J(e,t).geometry)==null?null:(V(d,e.x,e.y),I(d,d,this.inverseTransform),x(d[0],d[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[r,i,a,c]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,p=this._projectControlPoint(i,u),f=this._projectControlPoint(a,u),v=this._projectControlPoint(c,u);if(!p.valid||!f.valid||!v.valid||!y(p.controlPoint))return null;e==null&&(e=re());let S=null;return S=y(f.controlPoint)&&y(v.controlPoint)?we(e,r,p.controlPoint,f.controlPoint,v.controlPoint):y(f.controlPoint)?It(e,r,p.controlPoint,f.controlPoint):St(e,r,p.controlPoint),S.every(Ue=>Ue===0)?null:S}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:r,pending:i}=J(n,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return(e==null?void 0:e.sourcePoint)!=null&&e.mapPoint!=null}s([l({type:[D],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[k],isRequired:!0},coefficients:{type:[Number],isRequired:!0},spatialReference:{type:ae,isRequired:!0}}}}})],P.prototype,"controlPoints",void 0),s([K("controlPoints")],P.prototype,"readControlPoints",null),s([X("controlPoints")],P.prototype,"writeControlPoints",null),s([l({clonable:!1})],P.prototype,"coords",null),s([l({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],P.prototype,"height",void 0),s([l({readOnly:!0})],P.prototype,"inverseTransform",null),s([l({readOnly:!0})],P.prototype,"transform",null),s([l({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],P.prototype,"width",void 0),P=s([_("esri.layers.support.ControlPointsGeoreference")],P);const O=b(),$=b(),C=b(),j=b(),E=b(),M=b(),A=b(),H=b(),te=Math.PI/2;function L(e,t,o){V(e,o.sourcePoint.x,o.sourcePoint.y),V(t,o.mapPoint.x,o.mapPoint.y)}function St(e,t,o){return L(O,E,t),L($,M,o),q(C,$,O,te),q(j,O,$,te),q(A,M,E,-te),q(H,E,M,-te),he(e,O,$,C,j,E,M,A,H)}function It(e,t,o,n){return L(O,E,t),L($,M,o),L(C,A,n),me(j,O,$,.5),q(j,C,j,Math.PI),me(H,E,M,.5),q(H,A,H,Math.PI),he(e,O,$,C,j,E,M,A,H)}function we(e,t,o,n,r){return L(O,E,t),L($,M,o),L(C,A,n),L(j,H,r),he(e,O,$,C,j,E,M,A,H)}const Ot=new Array(8).fill(0),$t=new Array(8).fill(0);function xe(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function he(e,t,o,n,r,i,a,c,u){return Le(e,xe(Ot,t,o,n,r),xe($t,i,a,c,u))}function Et(e,t,o,n){const r=Y(0,o),i=Y(0,0),a=Y(t,0),c=Y(t,o);return I(r,r,e),I(i,i,e),I(a,a,e),I(c,c,e),new ce({rings:[[r,i,a,c,r]],spatialReference:n})}const Z=P,z=b();let T=class extends Q{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:o,bottomRight:n}=this;if(e==null||t==null||o==null||n==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),o=this.projectOrWarn(o,r),n=this.projectOrWarn(n,r),t==null||o==null||n==null?null:new ce({rings:[[[o.x,o.y],[e.x,e.y],[t.x,t.y],[n.x,n.y],[o.x,o.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const o=t.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;const{rings:[[n,r,i,a]]}=e;this.bottomLeft=new h({x:n[0],y:n[1],spatialReference:o}),this.topLeft=new h({x:r[0],y:r[1],spatialReference:o}),this.topRight=new h({x:i[0],y:i[1],spatialReference:o}),this.bottomRight=new h({x:a[0],y:a[1],spatialReference:o})}toSourceNormalized(e){const{topLeft:t,topRight:o,bottomRight:n,bottomLeft:r}=this;if(e==null||t==null||o==null||n==null||r==null)return null;const i=t.spatialReference;e=e.normalize();const a=J(e,i).geometry;if(a==null)return null;V(z,a.x,a.y);const c=Le(re(),[t.x,t.y,r.x,r.y,o.x,o.y,n.x,n.y],[0,0,0,1,1,0,1,1]);return I(z,z,c),x(z[0],z[1])}};s([l({clonable:!1})],T.prototype,"coords",null),s([l({type:h})],T.prototype,"bottomLeft",void 0),s([l({type:h})],T.prototype,"bottomRight",void 0),s([l({type:h})],T.prototype,"topLeft",void 0),s([l({type:h})],T.prototype,"topRight",void 0),T=s([_("esri.layers.support.CornersGeoreference")],T);const Mt=T;let U=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=ie(a,c,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),(e==null?void 0:e.extent)==null)return;const{rings:[[o,n,r]],extent:{center:{x:i,y:a}}}=e,c=qe(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=ie(i,a,-c),[p,f]=u(o[0],o[1]),[v,S]=u(r[0],r[1]);this.extent=new ue({xmin:p,ymin:f,xmax:v,ymax:S,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:r,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const p=J(e,u).geometry;if(p==null)return null;let f=p.x,v=p.y;return o&&([f,v]=ie(c.x,c.y,-o)(f,v)),x(ye(f,n,i,0,1),ye(v,a,r,0,1))}};function ie(e,t,o){const n=ze(o),r=Math.cos(n),i=Math.sin(n);return(a,c)=>[r*(a-e)+i*(c-t)+e,r*(c-t)-i*(a-e)+t]}s([l({clonable:!1})],U.prototype,"coords",null),s([l({type:ue})],U.prototype,"extent",void 0),s([l({type:Number})],U.prototype,"rotation",void 0),U=s([_("esri.layers.support.ExtentAndRotationGeoreference")],U);const Lt=U;function Tt(e){return(e==null?void 0:e.type)==="media"}function Te(e,t){const o=Be(t);return Tt(e)&&!!e.portalItem&&o!=null&&o>F.PORTAL_ITEM}function jt(e,t,o){var p;if(!e||e.type==="control-points")return e;const{coords:n}=e;if(((p=n==null?void 0:n.rings[0])==null?void 0:p.length)!==5)return null;const[r,i,a,c]=n.rings[0],{spatialReference:u}=n;return new Z({controlPoints:[{mapPoint:new h({x:r[0],y:r[1],spatialReference:u}),sourcePoint:x(0,o)},{mapPoint:new h({x:i[0],y:i[1],spatialReference:u}),sourcePoint:x(0,0)},{mapPoint:new h({x:a[0],y:a[1],spatialReference:u}),sourcePoint:x(t,0)},{mapPoint:new h({x:c[0],y:c[1],spatialReference:u}),sourcePoint:x(t,o)}],width:t,height:o})}function je(e,t,o){return{enabled:!Te(o==null?void 0:o.layer,o==null?void 0:o.origin),ignoreOrigin:!0}}const He={json:{name:"url",type:String,write:{overridePolicy:je}}},Ne={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:je}}},Ht={types:{key:"type",base:Q,typeMap:{"control-points":Z,corners:Mt,"extent-and-rotation":Lt}},json:{types:{key:"type",base:Q,typeMap:{"control-points":Z}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let N=class extends ke.NumericIdentifiableMixin(Se(Ie)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Z.fromJSON(e)}writeGeoreference(e,t,o,n){var a;const r=(a=n==null?void 0:n.resources)==null?void 0:a.pendingOperations,i=()=>{var u;const c=jt(this.georeference,this.contentWidth,this.contentHeight);if(c){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),((u=c.controlPoints)==null?void 0:u.length)!==4&&(n==null?void 0:n.messages))return void n.messages.push(new R("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[o]=c.write({},n)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[o]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=o,r.y*=n,r)}};s([l(Ht)],N.prototype,"georeference",void 0),s([K("georeference")],N.prototype,"readGeoreference",null),s([X("georeference")],N.prototype,"writeGeoreference",null),s([l({json:{read:!1,write:!1}})],N.prototype,"opacity",void 0),N=s([_("esri.layers.support.MediaElementBase")],N);const fe=N;var Ve;let w=class extends fe{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this[Ve]=!0,this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=De(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new R("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return Fe(o.url,n)}writeImage(t,o,n,r){if(t==null)return;const i=r==null?void 0:r.portalItem,a=r==null?void 0:r.resources;if(!i||!a)return void(typeof t=="string"&&(o[n]=ge(t,r)));const c=Nt(t)?t:null;if(c){if(Oe(c)==null)return void(o[n]=c);const u=ge(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Je.NO);if(i&&u&&!$e(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",a.pendingOperations.push(Vt(t).then(u=>{const p=At(u,i);o[n]=p.itemRelativeUrl,a.toAdd.push({resource:p,content:{type:"blob",blob:u},compress:!1,finish:f=>{this.image=f.url}})}))}};Ve=Pt,s([l()],w.prototype,"animationOptions",void 0),s([l({readOnly:!0})],w.prototype,"content",void 0),s([l({readOnly:!0})],w.prototype,"contentWidth",null),s([l({readOnly:!0})],w.prototype,"contentHeight",null),s([l(He)],w.prototype,"image",void 0),s([K("image",["url"])],w.prototype,"readImage",null),s([X("image")],w.prototype,"writeImage",null),s([l(Ne)],w.prototype,"type",void 0),w=s([_("esri.layers.support.ImageElement")],w);const Ce=w;function Nt(e){return typeof e=="string"&&!pe(e)&&!de(e)}async function Vt(e){return typeof e=="string"?pe(e)?Ke(e):(await Ee(e,{responseType:"blob"})).data:new Promise(t=>Ct(e).toBlob(t))}function Ct(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function At(e,t){const o=Qe(),n=`${Ze("media",o)}.${_t({type:"blob",blob:e})}`;return t.resourceFromPath(n)}var Ae;let g=class extends fe{constructor(t){super(t),this.autoplay=!0,this.content=null,this.controller=null,this.type="video",this[Ae]=!0}load(){const t=this.video;return typeof t=="string"?this.addResolvingPromise(Promise.all([this._preProcessVideoUrl(t),Me(()=>import("./VideoController-B7RlPnaj.js").then(o=>o.V),__vite__mapDeps([0,1,2,3,4,5]))]).then(async([o,{default:n}])=>{this.controller=new n,this.controller.playerUrl=o,await ve(()=>{var r;return(r=this.controller)==null?void 0:r.element}),this.controller.loop=!0,this.controller.muted=!0,this.controller.playsInline=!0,this.controller.crossOrigin="anonymous",await ve(()=>{var r;return((r=this.controller)==null?void 0:r.state)==="can-play"}),await this.controller.play(),this.autoplay||this.controller.pause(),this._set("content",this.controller.element)})):t instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)})):this.addResolvingPromise(Promise.reject(new R("video-element:invalid-video-type","Invalid video type",{video:t}))),Promise.resolve(this)}get contentWidth(){var t;return((t=this.content)==null?void 0:t.videoWidth)??0}get contentHeight(){var t;return((t=this.content)==null?void 0:t.videoHeight)??0}get currentTime(){var t;return(t=this.controller)==null?void 0:t.currentTime}set currentTime(t){var n;if(!this.controller)return;const o=Xe(t,0,this.controller.duration);(n=this.controller)==null||n.setCurrentTime(o)}get duration(){var t;return(t=this.controller)==null?void 0:t.duration}set video(t){this.loadStatus==="not-loaded"?this._set("video",t):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(t,o,n,r){if(!t)return void((r==null?void 0:r.messages)&&r.messages.push(new R("video-element:unsupported-video","video source is missing")));const i=Wt(t)?t:null;if(!i)return void((r==null?void 0:r.messages)&&r.messages.push(new R("video-element:unsupported-video","video source must be an absolute url")));!$e(i)&&(r!=null&&r.blockedRelativeUrls)&&r.blockedRelativeUrls.push(i);const a=Ye(i);Oe(a)?r!=null&&r.messages&&r.messages.push(new R("video-element:unsupported-video","video source cannot be an item resource")):o[n]=a}async _preProcessVideoUrl(t){if(et(t))return Pe(t);try{return await Ee(t,{method:"head"}),t}catch{return Pe(t,!0)}}_loadVideo(t){return new Promise((o,n)=>{const r=tt(t,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?t.play().then(o,n):o()});this.addHandles(r,"canplay"),t.crossOrigin!=="anonymous"&&(t.crossOrigin="anonymous",de(t.src)||(t.src=t.src))})}};Ae=wt,s([l()],g.prototype,"autoplay",void 0),s([l({readOnly:!0})],g.prototype,"content",void 0),s([l({readOnly:!0})],g.prototype,"contentWidth",null),s([l({readOnly:!0})],g.prototype,"contentHeight",null),s([l()],g.prototype,"controller",void 0),s([l({type:Number})],g.prototype,"currentTime",null),s([l({type:Number})],g.prototype,"duration",null),s([l(He)],g.prototype,"video",null),s([X("video")],g.prototype,"writeVideo",null),s([l(Ne)],g.prototype,"type",void 0),g=s([_("esri.layers.support.VideoElement")],g);const We=g;function Wt(e){return typeof e=="string"&&!pe(e)&&!de(e)}const Ut={key:"type",defaultKeyValue:"image",base:fe,typeMap:{image:Ce,video:We}},Re=ne.ofType(Ut);let G=class extends Ie.LoadableMixin(nt.EsriPromiseMixin(ot.EventedAccessor)){constructor(e){super(e),this._index=new bt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new xt({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const i=rt(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new Re}async load(e){if(st(e),!this.spatialReference){const t=this.elements.find(o=>{var n;return((n=o.georeference)==null?void 0:n.coords)!=null});this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",it(e,this._get("elements"),Re))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await lt(e.spatialReference,this.spatialReference,null,t);const o=at(e.spatialReference,this.spatialReference)?e:ct(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const i of n)this._index.forEachInBounds(ut(i),({normalizedCoords:a,element:c})=>{a!=null&&pt(i,a)&&r.push(c)});return r.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=o!=null;this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],G.prototype,"elements",null),s([l({readOnly:!0})],G.prototype,"fullExtent",null),s([l()],G.prototype,"spatialReference",null),G=s([_("esri.layers.support.LocalMediaElementSource")],G);const B=G;let m=class extends dt(ht(ft(mt(Se(gt))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=yt(async(t,o,n)=>{const{save:r,saveAs:i}=await Me(()=>import("./mediaLayerUtils-Y5ulghSj.js"),__vite__mapDeps([6,7,1,2,8,9,10,11,12]));switch(t){case ee.SAVE:return r(this,o);case ee.SAVE_AS:return i(this,n,o)}}),this.source=new B}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new R("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const o=this._getSourceOverride(t,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),this.setAtOrigin("source",o,"web-scene"),t=o);const n=oe(t)?new B({elements:new ne([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference),await n.load(e),this.spatialReference=n.spatialReference}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),this.effectiveSource!==this.source&&((t=this.source)==null||t.destroy())}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}get source(){return this._get("source")}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new B({elements:new ne(e)}):e instanceof ne?new B({elements:e}):e:null}readSource(e,t,o){if("itemId"in t&&t.itemId)return;const n=this._createSource(t);return n==null||n.read(t,o),n}writeSource(e,t,o,n){if(e&&e instanceof B){const r=e.elements.length;if(r!==1)return void((n==null?void 0:n.messages)&&n.messages.push(new R("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}oe(e)?e.write(t,n):n!=null&&n.messages&&(e?n.messages.push(new R("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):n.messages.push(new R("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ee.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Ce;case"video":return new We}return null}_getSourceOverride(e,t){if(oe(e)&&this.originIdOf("source")===F.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===F.WEB_MAP||this.originIdOf("georeference")===F.WEB_SCENE)){const o=e.toJSON(),n=this._createSource(o);return n.read({...o},{origin:"portal-item"}),n.read({georeference:t},{origin:"web-map"}),n.read({georeference:t},{origin:"web-scene"}),n}return null}};s([l({readOnly:!0})],m.prototype,"effectiveSource",void 0),s([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],m.prototype,"georeference",void 0),s([K("web-document","georeference")],m.prototype,"readGeoreference",null),s([l({type:String})],m.prototype,"copyright",void 0),s([l({readOnly:!0})],m.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],m.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:Z}},overridePolicy(e,t,o){return{enabled:!0,allowNull:!1,ignoreOrigin:Te(this,o==null?void 0:o.origin)&&oe(e)&&!!e.georeference&&e.originIdOf("georeference")>F.PORTAL_ITEM}}}}})],m.prototype,"source",null),s([vt("source")],m.prototype,"castSource",null),s([K("source",["url"])],m.prototype,"readSource",null),s([X("source")],m.prototype,"writeSource",null),s([l()],m.prototype,"spatialReference",void 0),s([l({readOnly:!0})],m.prototype,"type",void 0),m=s([_("esri.layers.MediaLayer")],m);const Qt=m;export{Qt as default};
