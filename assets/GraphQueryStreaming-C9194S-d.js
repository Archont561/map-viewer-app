import{ab as h,J as t,K as e,M as s,Z as v,bE as G,d5 as g,b7 as w}from"./index-8or3xOo5.js";let a=class extends h{constructor(p){super(p),this.properties=null}};t([e({json:{write:!0}})],a.prototype,"properties",void 0),a=t([s("esri.rest.knowledgeGraph.GraphObject")],a);const y=a;let i=class extends y{constructor(p){super(p),this.typeName=null,this.id=null}};t([e({type:String,json:{write:!0}})],i.prototype,"typeName",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"id",void 0),i=t([s("esri.rest.knowledgeGraph.GraphNamedObject")],i);const m=i;let u=class extends m{constructor(p){super(p),this.layoutGeometry=null}};t([e({type:v,json:{write:!0}})],u.prototype,"layoutGeometry",void 0),u=t([s("esri.rest.knowledgeGraph.Entity")],u);const P=u;let n=class extends m{constructor(r){super(r),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};t([e({type:String,json:{write:!0}})],n.prototype,"originId",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"destinationId",void 0),t([e({type:G,json:{write:!0}})],n.prototype,"layoutGeometry",void 0),n=t([s("esri.rest.knowledgeGraph.Relationship")],n);const Q=n;let c=class extends y{constructor(r){super(r)}};c=t([s("esri.rest.knowledgeGraph.ObjectValue")],c);const S=c;let l=class extends h{constructor(p){super(p),this.path=[]}};t([e({type:[y],json:{write:!0}})],l.prototype,"path",void 0),l=t([s("esri.rest.knowledgeGraph.Path")],l);const I=l;let d=class extends g{constructor(r){super(r),this.openCypherQuery=""}};t([e()],d.prototype,"openCypherQuery",void 0),d=t([s("esri.rest.knowledgeGraph.GraphQuery")],d);const j=d;let o=class extends j{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};t([e()],o.prototype,"bindParameters",void 0),t([e()],o.prototype,"bindGeometryQuantizationParameters",void 0),t([e()],o.prototype,"outputQuantizationParameters",void 0),t([e({type:w})],o.prototype,"outputSpatialReference",void 0),t([e()],o.prototype,"provenanceBehavior",void 0),o=t([s("esri.rest.knowledgeGraph.GraphQueryStreaming")],o);const f=o;export{Q as a,I as b,P as c,f as p,S as t};
