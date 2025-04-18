import{dS as L,ab as O,gI as _,cz as v,N as p,fz as u,iD as S,cd as d,bd as F,V as b,J as s,K as i,iE as M,f6 as h,M as g,dg as j,f2 as I,dh as N,f3 as C,f4 as K,f5 as J,d8 as P,b7 as m,q as R,be as T,di as z,fB as A,fe as V}from"./index-8or3xOo5.js";import{j as W,S as w,g as x,d as E}from"./kmlUtils-DRU7wFp6.js";var y;let a=y=class extends L.EventedMixin(O.JSONSupportMixin(_)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},u),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},u),p(()=>this.sublayers,(t,r)=>{if(r)for(const l of r)l.layer=l.parent=null;if(t)for(const l of t)l.parent=this,l.layer=this.layer},u),p(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},u)])}initialize(){S(()=>this.networkLink).then(()=>S(()=>this.visible===!0)).then(()=>this.load())}load(e){var l;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,r=this._fetchService(((l=this._get("networkLink"))==null?void 0:l.href)??"",t).then(n=>{var c;const $=W(n.sublayers);this.fullExtent=d.fromJSON($),this.sourceJSON=n;const f=F(b.ofType(y),w(y,n));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(c=this.layer)==null||c.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>E(r.data))}};s([i()],a.prototype,"description",void 0),s([i({type:d})],a.prototype,"fullExtent",void 0),s([i()],a.prototype,"id",void 0),s([i({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([i({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([i({type:b.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([i({value:null,json:{read:{source:"name",reader:e=>M(e)}}})],a.prototype,"title",void 0),s([i({value:!0})],a.prototype,"visible",null),s([h("visible",["visibility"])],a.prototype,"readVisible",null),s([i()],a.prototype,"sourceJSON",void 0),s([i()],a.prototype,"layer",void 0),a=y=s([g("esri.layers.support.KMLSublayer")],a);const k=a,q=["kml","xml"];let o=class extends j(I(N(C(K(J(z)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new P({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=m.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([p(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},u),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return w(k,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],l=e.toArray();for(;l.length;){const n=l[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&l.push(...n.sublayers.toArray())),l.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?R(this.url,q)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=l=>{l.visible&&(t.push(l),l.sublayers&&l.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(T).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=E(t.data);this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const l of r.sublayers.items)t(l),l.visible&&l.fullExtent&&(e!=null?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};s([i({readOnly:!0})],o.prototype,"allSublayers",void 0),s([i({type:m})],o.prototype,"outSpatialReference",void 0),s([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([i({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([i({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([i({})],o.prototype,"resourceInfo",void 0),s([i({type:b.ofType(k),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([A("sublayers")],o.prototype,"writeSublayers",null),s([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([i({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([i(V)],o.prototype,"url",void 0),s([i({readOnly:!0})],o.prototype,"visibleSublayers",null),s([i({type:d})],o.prototype,"extent",void 0),s([i()],o.prototype,"fullExtent",null),o=s([g("esri.layers.KMLLayer")],o);const B=o;export{B as default};
