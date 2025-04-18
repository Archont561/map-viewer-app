import{hx as I,gm as J,T as N,P as b,hy as X,h3 as Y,cP as k,cT as B,cU as K,cE as g,bF as Z,Z as $,hz as z,W as v,fd as Q,ch as ee,f9 as R,fb as U,U as q,N as M,J as x,K as V,M as te}from"./index-8or3xOo5.js";import{h as ie}from"./GraphicsLayer-YFyAnYj2.js";import{l as W}from"./TelemetryDisplay-CU9u_Fqs.js";import{u as re}from"./OverlayContainer-Cv-xQfXS.js";import{e as se}from"./Container-ScNChi2T.js";import{a as oe,S as ne,y as ae}from"./LayerView-ByssdWHb.js";import{t as le}from"./GraphicContainer-CtjyI-ty.js";import{A as he}from"./GraphicsView2D-C5CGfcP0.js";import"./vec3f32-nZdmKIgz.js";import"./WGLContainer-BfBDVtBf.js";import"./Utils-VCGP-SX5.js";import"./ProgramTemplate-DNs7XwPG.js";import"./VertexArrayObject-DXaudcNg.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-BXjH1gca.js";import"./OptimizedFeature-X86aqlxQ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-DPI4dwJ6.js";import"./UpdateTracking2D-DxC02jit.js";import"./BidiEngine-QXap_35O.js";import"./rasterizingUtils-y0jRd4MX.js";import"./floatRGBA-CtHz8m9E.js";import"./Rect-CUzevAry.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-BryhXjmw.js";import"./FramebufferObject-DO5BaQQp.js";import"./ShaderBuilder-C8fSy0zN.js";import"./BindType-BBwFZqyN.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-BtOuGQl9.js";import"./utils-ehcGqGxa.js";import"./layerViewUtils-VtwTz-v8.js";import"./AGraphicContainer-Bjqb5hTo.js";import"./TechniqueInstance-CBIc55RL.js";import"./TileContainer-B1X7JiJ_.js";import"./OverrideHelper-EI086iW3.js";import"./quantizationUtils-fZjQTmjb.js";import"./AttributeStore-ObFtUZGg.js";import"./queryUtils-D47NT2Zv.js";import"./json-Wa8cmqdu.js";import"./timeSupport-BXtoiJCv.js";import"./TimeOnly-BOBS3Nmy.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-CdDXGXFT.js";import"./dehydratedFeatures-kgUkNGHH.js";const C=2;class me extends se{constructor(e){super(),this.element=e,this._handles=new I,this.isWrapAround=!1,this.perspectiveTransform=J(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(N(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(X(t,"play",()=>this.requestRender()))},b))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=Y(this.texture)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:i}=e,{videoWidth:o,videoHeight:s}=t;if(o!==0&&s!==0){if(this.texture)t.paused||this.texture.setData(t);else{const n=new k;n.wrapMode=B.CLAMP_TO_EDGE,n.preMultiplyAlpha=!0,n.width=o,n.height=s,this.texture=new K(i,n,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,o){const s=this.element,n=this._getFrameInfo();if(!s||!n)return;this._initializeData(e,n,i);const{controlPoints:l,horizon:m}=n,h=Math.sqrt(l.length),p=h,{x:a,y}=e,u=this._vertices,T=l[0],P=l[h-1],F=l[(p-1)*h],j=l[(p-1)*h+h-1],O=g(m?m[0].mapPoint:T.mapPoint,i),G=g(m?m[1].mapPoint:P.mapPoint,i),f=g(F.mapPoint,i),D=g(j.mapPoint,i);this.clipGeometry=m?new oe({geometry:Z.fromJSON({rings:[[[f.x,f.y],[D.x,D.y],[G.x,G.y],[O.x,O.y],[f.x,f.y]]],spatialReference:i})}):null;for(let c=0;c<l.length;c++){const L=l[c],{sourcePoint:S,mapPoint:A}=L;if(S==null||A==null)continue;const w=g(A,i);u[c*C+0]=w.x-a,u[c*C+1]=w.y-y}let E=t;if(o){const c=Math.min(O.x,G.x,f.x,D.x),L=Math.max(O.x,G.x,f.x,D.x),{worldWidth:S,xBounds:A}=o,[w,H]=A;c<w&&L>w?E=S:L>H&&c<H&&(E=-S)}this.wrapAroundShift=E,this.isWrapAround=E!==0}draw(e,t){this.isReady&&this._vertices&&this._indices&&this._texCoords?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(e,t,i){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:o}=t,s=Math.sqrt(o.length),n=s,l=new Float32Array(C*o.length),m=new Uint16Array(2*o.length);for(let a=0;a<o.length;a++){const y=o[a],{sourcePoint:u,mapPoint:T}=y;if(u==null||T==null)continue;const P=g(T,i);l[a*C+0]=P.x-e.x,l[a*C+1]=P.y-e.y,m[2*a+0]=u.x,m[2*a+1]=u.y}const h=new Uint16Array(n*s+(n-2)*(s+2));let p=0;for(let a=0;a<n;a++){for(let y=0;y<s;y++)h[p++]=a*s+y,h[p++]=(a+1)*s+y;a<n-2&&(h[p++]=(a+1)*s+(s-1),h[p++]=(a+1)*s)}this._vertices=l,this._texCoords=m,this._indices=h}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const o=t.startX,s=t.startY,n=t.endX,l=t.endY;i=[{sourcePoint:z(o,s),mapPoint:new $(t.startLongitude,t.startLatitude)},{sourcePoint:z(n,l),mapPoint:new $(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e==null?void 0:e.length;if(!t)return[];const i=new Array(t),o=Math.max(...e.map(({x:n})=>n)),s=this.element.videoWidth/o;for(let n=0;n<t;n++){const{x:l,y:m,lat:h,lon:p}=e[n];i[n]={sourcePoint:z(l*s,-m*s),mapPoint:new $(p,h)}}return i}}const _=new ee([255,127,0]);let d=class extends ne(ae){constructor(){super(...arguments),this._graphicsLayer=new ie,this._frameOutlineGraphic=new v({symbol:new Q({outline:{type:"simple-line",color:_}})}),this._sensorTrailGraphic=new v({symbol:new R({color:_})}),this._lineOfSightGraphic=new v({symbol:new R({color:_})}),this._sensorLocationGraphic=new v({symbol:new U({color:_})}),this._frameCenterGraphic=new v({symbol:new U({color:_,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=q(this._graphicsLayer)}initialize(){var r,e,t,i,o,s;this.addHandles(M(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},b)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new W({frame:((r=this.layer.telemetryDisplay)==null?void 0:r.frame)??!1,frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((t=this.layer.telemetryDisplay)==null?void 0:t.frameOutline)??!0,lineOfSight:((i=this.layer.telemetryDisplay)==null?void 0:i.lineOfSight)??!0,sensorLocation:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorLocation)??!0,sensorTrail:((s=this.layer.telemetryDisplay)==null?void 0:s.sensorTrail)??!0})}attach(){this._overlayContainer=new re,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new he({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new le(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([M(()=>{var r,e,t,i,o,s;return[(r=this.layer.telemetryDisplay)==null?void 0:r.frame,(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(t=this.layer.telemetryDisplay)==null?void 0:t.frameOutline,(i=this.layer.telemetryDisplay)==null?void 0:i.sensorLocation,(o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail,(s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight]},()=>this._updateVisibleTelemetryElements(),b),M(()=>{var r,e,t,i,o;return[this.layer.telemetry,(r=this.visibleTelemetryElements)==null?void 0:r.frameCenter,(e=this.visibleTelemetryElements)==null?void 0:e.frameOutline,(t=this.visibleTelemetryElements)==null?void 0:t.sensorLocation,(i=this.visibleTelemetryElements)==null?void 0:i.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),b)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=q(this.graphicsView)}supportsSpatialReference(r){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(r){this.graphicsView.processUpdate(r)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:r}=this.layer,{visibleTelemetryElements:e}=this;r&&e&&(e.frameOutline&&r.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&r.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&r.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&r.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&r.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const r=new me(this.layer.videoElement);this.addAttachHandles([M(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{const{visibleTelemetryElements:e}=this;e!=null&&e.frame?(r.frameHorizonPoints=this.layer.frameHorizonPoints,r.groundControlPoints=this.layer.groundControlPoints,r.opacity=1):r.opacity=0},b)]),this._overlayContainer.addChild(r),this.view.stage.requestRender()}};x([V()],d.prototype,"graphicsView",void 0),x([V()],d.prototype,"layer",void 0),x([V()],d.prototype,"symbolColor",void 0),x([V({type:W})],d.prototype,"visibleTelemetryElements",void 0),d=x([te("esri.views.2d.layers.VideoLayerView2D")],d);const rt=d;export{rt as default};
