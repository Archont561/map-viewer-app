import{gI as N,O as L,dp as x,b7 as C,iF as J,s as F,J as s,K as o,M as j,id as z,fh as H,fg as U,ie as V,ig as Z,dg as k,ic as K,fC as W,ih as X,dh as Y,f3 as ee,f4 as te,f2 as se,f5 as re,ii as I,ik as oe,aa as $,ij as ie,di as ae,fl as pe,cn as ne,im as le,cd as ue,eF as O,ip as de,iq as ce,io as fe,f8 as ye,is as he,Q as me,it as ge,iu as ve,iv as Se,iG as Ce,fe as we}from"./index-8or3xOo5.js";import{R as be,x as T,C as D,P as Re,O as xe,N as Fe,q as Ie,v as $e,k as Oe}from"./ogcFeatureUtils-CGF6UKLH.js";import{s as Te}from"./capabilities-B4c8vV3b.js";import"./featureConversionUtils-BXjH1gca.js";import"./OptimizedFeature-X86aqlxQ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./geojson-5QUEUqCR.js";import"./date-Ctp1FiBW.js";import"./clientSideDefaults-Bb08mqLC.js";import"./QueryEngineCapabilities-B_pTbIiR.js";import"./sourceUtils-aodyAiwr.js";let d=class extends N{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:a},layer:{apiKey:p,customParameters:l,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:n,queryParameters:{apiKey:p,customParameters:l},spatialReference:i,supportedCrs:a}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>L.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>be(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${x(t)}$`,"i");return e.conformsTo.some(a=>i.test(a))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsCurrentUser:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,supportsTrueCurve:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:Te,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var i,a,p,l,n;const t=(i=e==null?void 0:e.components)==null?void 0:i.parameters;return((p=(a=t==null?void 0:t.limit)==null?void 0:a.schema)==null?void 0:p.maximum)??((n=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:n.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??T,i=D(t);return i==null?C.WGS84:new C({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",a=e.crs??[T],p=a.includes(i)?a.filter(n=>n!==i).concat(t.crs??[]):a,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(n=>!l.test(n))}async _loadOGCServices(e,t){const i=t!=null?t.signal:null,{apiKey:a,collectionId:p,customParameters:l,fields:n,geometryType:y,hasZ:h,objectIdField:P,timeInfo:m,url:q}=e,_={fields:n==null?void 0:n.map(u=>u.toJSON()),geometryType:J.toJSON(y),hasZ:h??!1,objectIdField:P,timeInfo:m==null?void 0:m.toJSON()},c={apiKey:a,customParameters:l,signal:i},g=await Re(q,c),[w,b]=await Promise.all([xe(g,c),Fe(g,c)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new F("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=b.collections.find(({id:u})=>u===p);if(!f)throw new F("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const E=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Ie(g,c):null,R=await $e(f,_,c),A=this._getMaxRecordCount(E),M=this._getCapabilities(R.hasZ,A),Q=this._getStorageSpatialReference(f).toJSON(),B=this._getSupportedSpatialReferences(f,b),G=new RegExp(`^${x(Oe)}`,"i"),v={};for(const u of B){const S=D(u);S!=null&&(v[S]||(v[S]=u.replace(G,"")))}this.featureDefinition={capabilities:M,collection:f,layerDefinition:R,spatialReference:Q,supportedCrs:v}}};s([o()],d.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],d.prototype,"layer",void 0),s([o()],d.prototype,"type",void 0),d=s([j("esri.layers.graphics.sources.OGCFeatureSource")],d);const De=le();let r=class extends z(H(U(V(Z(k(K(W(X(Y(ee(te(se(re(ae)))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return oe(this,e)}createQuery(){return new $}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let i,a=!1;const p=(n=t==null?void 0:t.feature)==null?void 0:n.attributes,l=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return l!=null&&this.types&&(a=this.types.some(y=>{var h;return y.id==l&&(i=(h=y.domains)==null?void 0:h[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),a||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures($.from(e)||this.createQuery(),t)).then(i=>{var a;return(a=i==null?void 0:i.features)==null||a.forEach(p=>{p.layer=p.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),ie(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),s([o({type:String})],r.prototype,"copyright",void 0),s([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),s([o({type:String})],r.prototype,"displayField",void 0),s([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),s([o(pe)],r.prototype,"elevationInfo",void 0),s([o({type:[ne],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),s([o(De.fieldsIndex)],r.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:ue,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),s([o({type:O.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:O.read}}}}})],r.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),s([o({type:[ce],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:de},write:!0}}}})],r.prototype,"labelingInfo",void 0),s([o(fe)],r.prototype,"labelsVisible",void 0),s([o(ye)],r.prototype,"legendEnabled",void 0),s([o({type:Number})],r.prototype,"maxRecordCount",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),s([o(he)],r.prototype,"popupEnabled",void 0),s([o({type:me,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),s([o({types:ve,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:ge,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),s([o(Se)],r.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],r.prototype,"source",void 0),s([o({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),s([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),s([o({type:[Ce]})],r.prototype,"types",void 0),s([o(we)],r.prototype,"url",void 0),r=s([j("esri.layers.OGCFeatureLayer")],r);const Le=r;export{Le as default};
