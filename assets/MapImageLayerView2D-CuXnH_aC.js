import{J as r,K as a,M as n,m as l,D as d,n as u,N as c,y,z as m,A as f}from"./index-8or3xOo5.js";import{r as _}from"./BitmapContainer-CQcBsw0-.js";import{S as x,y as H}from"./LayerView-ByssdWHb.js";import{A as w}from"./GraphicsView2D-C5CGfcP0.js";import{h as v}from"./HighlightGraphicContainer-KTdpKHne.js";import{_ as I}from"./ExportStrategy-DOB7_kvw.js";import{y as V}from"./ExportImageParameters-BIw_Idua.js";import{i as E}from"./timeSupport-Du8GY3sa.js";import{i as G}from"./RefreshableLayerView-i856euJv.js";import{S as P}from"./MapServiceLayerViewHelper-B-dp2-4m.js";import{r as U}from"./drapedUtils-6LewarOr.js";import"./WGLContainer-BfBDVtBf.js";import"./Utils-VCGP-SX5.js";import"./ProgramTemplate-DNs7XwPG.js";import"./VertexArrayObject-DXaudcNg.js";import"./vec3f32-nZdmKIgz.js";import"./Container-ScNChi2T.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-BXjH1gca.js";import"./OptimizedFeature-X86aqlxQ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BitmapTechnique-CYfLTPoZ.js";import"./GraphShaderModule-BryhXjmw.js";import"./FramebufferObject-DO5BaQQp.js";import"./ShaderBuilder-C8fSy0zN.js";import"./BindType-BBwFZqyN.js";import"./TechniqueType-uMFRS8dR.js";import"./layerViewUtils-VtwTz-v8.js";import"./UpdateTracking2D-DxC02jit.js";import"./BidiEngine-QXap_35O.js";import"./rasterizingUtils-y0jRd4MX.js";import"./floatRGBA-CtHz8m9E.js";import"./Rect-CUzevAry.js";import"./OverrideHelper-EI086iW3.js";import"./quantizationUtils-fZjQTmjb.js";import"./AttributeStore-ObFtUZGg.js";import"./queryUtils-D47NT2Zv.js";import"./json-Wa8cmqdu.js";import"./timeSupport-BXtoiJCv.js";import"./TimeOnly-BOBS3Nmy.js";import"./FeatureCommandQueue-DPI4dwJ6.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-BtOuGQl9.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-CdDXGXFT.js";import"./dehydratedFeatures-kgUkNGHH.js";import"./AGraphicContainer-Bjqb5hTo.js";import"./TechniqueInstance-CBIc55RL.js";import"./TileContainer-B1X7JiJ_.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BVoYztYF.js";import"./popupUtils-B0QxoZah.js";const S=i=>{let t=class extends i{initialize(){this.exportImageParameters=new V({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return E(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return r([a()],t.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],t.prototype,"floors",null),r([a({readOnly:!0})],t.prototype,"exportImageVersion",null),r([a()],t.prototype,"layer",void 0),r([a()],t.prototype,"suspended",void 0),r([a({readOnly:!0})],t.prototype,"timeExtent",null),t=r([n("esri.views.layers.MapImageLayerView")],t),t};let h=class extends S(G(x(H))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(i,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(i,t)}update(i){const t=`${this.exportImageVersion}/${i.state.id}/${i.pixelRatio}/${i.stationary}`;this._updateHash!==t&&(this._updateHash=t,this.strategy.update(i).catch(e=>{d(e)||u.getLogger(this).error(e)}),i.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(i.state.resolution)),this._highlightView.processUpdate(i)}attach(){const{imageMaxWidth:i,imageMaxHeight:t,version:e}=this.layer,s=e>=10.3,g=e>=10;this._bitmapContainer=new _,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(o,p)=>U(o,p,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(o,p)=>{this._highlightView.graphicUpdateHandler({graphic:o,property:p})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new I({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:i,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:g,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(i,t,e,s){return this.layer.fetchImage(i,t,e,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(i,t,e,s){return this.layer.fetchImageBitmap(i,t,e,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(i,t){const e=y(i);if(e.length===0)return m();const s=(t==null?void 0:t.name)??f;return this._addHighlightGraphics(e,s),m(()=>!this.destroyed&&this._removeHighlightGraphics(e,s))}_processHighlight(){var t;const i=this._getHighlights();(t=this._highlightView)==null||t.setHighlight(i)}_addHighlightGraphics(i,t){this._highlightGraphics.addMany(i),this._addHighlights(i.map(e=>e.uid),t)}_removeHighlightGraphics(i,t){this._highlightGraphics.removeMany(i),this._removeHighlights(i.map(e=>e.uid),t)}};r([a()],h.prototype,"strategy",void 0),r([a()],h.prototype,"updating",void 0),h=r([n("esri.views.2d.layers.MapImageLayerView2D")],h);const St=h;export{St as default};
