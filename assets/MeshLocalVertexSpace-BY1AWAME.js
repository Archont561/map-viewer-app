import{b3 as n,ab as a,J as r,b6 as i,K as l,M as p,ac as c}from"./index-8or3xOo5.js";var s;let e=s=class extends n.ClonableMixin(a){constructor(t){super(t),this.type="georeferenced",this.origin=null}};e.absolute=new s,r([i({georeferenced:"georeferenced"},{readOnly:!0})],e.prototype,"type",void 0),r([l({type:[Number],nonNullable:!1,json:{write:!0}})],e.prototype,"origin",void 0),e=s=r([p("esri.geometry.support.MeshGeoreferencedVertexSpace")],e);const y=e;let o=class extends n.ClonableMixin(a){constructor(t){super(t),this.type="local",this.origin=c()}};r([i({local:"local"},{readOnly:!0})],o.prototype,"type",void 0),r([l({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"origin",void 0),o=r([p("esri.geometry.support.MeshLocalVertexSpace")],o);const d=o;export{d as a,y as n};
