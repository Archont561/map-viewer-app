import{hX as O,G as x,b7 as v,e2 as C,hY as k}from"./index-8or3xOo5.js";import{O as F}from"./quat-nGJs4p0O.js";import{e as R}from"./quatf64-aQ5IuZRd.js";import{t as A,n as w}from"./vec3f32-nZdmKIgz.js";import{d as U,a as $,b as B}from"./PointCloudUniqueValueRenderer-B0K1ioLm.js";import{w as J,l as N,c as V,I as T}from"./I3SBinaryReader-BFolL68r.js";import{I as q}from"./orientedBoundingBox-BwOHvb_S.js";import"./mat3f64-q3fE-ZOt.js";import"./VertexAttribute-Cq4MnHjR.js";import"./mat4f64-Dk4dwAN8.js";import"./spatialReferenceEllipsoidUtils-BBTpM6eu.js";import"./computeTranslationToOriginAndRotation-CeV-Bm7c.js";import"./plane-CqxfS6v6.js";function z(a,t,l,n){const{rendererJSON:u,isRGBRenderer:m}=a;let o=null,s=null;if(t&&m)o=t;else if(t&&(u==null?void 0:u.type)==="pointCloudUniqueValueRenderer"){s=U.fromJSON(u);const e=s.colorUniqueValueInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const i=(c?c(t[r]):t[r])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(i)){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else if(t&&(u==null?void 0:u.type)==="pointCloudStretchRenderer"){s=$.fromJSON(u);const e=s.stops;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const i=c?c(t[r]):t[r],f=e.length-1;if(i<e[0].value)o[3*r]=e[0].color.r,o[3*r+1]=e[0].color.g,o[3*r+2]=e[0].color.b;else if(i>=e[f].value)o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(i<e[b].value){const p=(i-e[b-1].value)/(e[b].value-e[b-1].value);o[3*r]=e[b].color.r*p+e[b-1].color.r*(1-p),o[3*r+1]=e[b].color.g*p+e[b-1].color.g*(1-p),o[3*r+2]=e[b].color.b*p+e[b-1].color.b*(1-p);break}}}else if(t&&(u==null?void 0:u.type)==="pointCloudClassBreaksRenderer"){s=B.fromJSON(u);const e=s.colorClassBreakInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const i=c?c(t[r]):t[r];for(let f=0;f<e.length;f++)if(i>=e[f].minValue&&i<=e[f].maxValue){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else o=new Uint8Array(3*n).fill(255);if(l&&(s!=null&&s.colorModulation)){const e=s.colorModulation.minValue,c=s.colorModulation.maxValue,r=.3;for(let i=0;i<n;i++){const f=l[i],b=f>=c?1:f<=e?r:r+(1-r)*(f-e)/(c-e);o[3*i]=b*o[3*i],o[3*i+1]=b*o[3*i+1],o[3*i+2]=b*o[3*i+2]}}return o}function G(a,t){if(a.encoding==null||a.encoding===""){const l=J(t,a);if(l.vertexAttributes.position==null)return;const n=N(t,l.vertexAttributes.position),u=l.header.fields,m=[u.offsetX,u.offsetY,u.offsetZ],o=[u.scaleX,u.scaleY,u.scaleZ],s=n.length/3,e=new Float64Array(3*s);for(let c=0;c<s;c++)e[3*c]=n[3*c]*o[0]+m[0],e[3*c+1]=n[3*c+1]*o[1]+m[1],e[3*c+2]=n[3*c+2]*o[2]+m[2];return e}if(a.encoding==="lepcc-xyz")return V(t).result}function h(a,t,l){return a!=null&&a.attributeInfo.useElevation?t?X(t,l):null:a!=null&&a.attributeInfo.storageInfo?T(a.attributeInfo.storageInfo,a.buffer,l):null}function X(a,t){const l=new Float64Array(t);for(let n=0;n<t;n++)l[n]=a[3*n+2];return l}function Y(a,t,l,n,u){const m=a.length/3;let o=0;for(let s=0;s<m;s++){let e=!0;for(let c=0;c<n.length&&e;c++){const{filterJSON:r}=n[c],i=u[c].values[s];switch(r.type){case"pointCloudValueFilter":{const f=r.mode==="exclude";r.values.includes(i)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=M(r.requiredSetBits),b=M(r.requiredClearBits);((i&f)!==f||i&b)&&(e=!1);break}case"pointCloudReturnFilter":{const f=15&i,b=i>>>4&15,p=b>1,S=f===1,I=f===b;let y=!1;for(const d of r.includedReturns)if(d==="last"&&I||d==="firstOfMany"&&S&&p||d==="lastOfMany"&&I&&p||d==="single"&&!p){y=!0;break}y||(e=!1);break}}}e&&(l[o]=s,a[3*o]=a[3*s],a[3*o+1]=a[3*s+1],a[3*o+2]=a[3*s+2],t[3*o]=t[3*s],t[3*o+1]=t[3*s+1],t[3*o+2]=t[3*s+2],o++)}return o}function g(a){switch(a){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function M(a){let t=0;for(const l of a||[])t|=1<<l;return t}class E{transform(t){const l=this._transform(t),n=[l.points.buffer,l.rgb.buffer];l.pointIdFilterMap!=null&&n.push(l.pointIdFilterMap.buffer);for(const u of l.attributes)"buffer"in u.values&&O(u.values.buffer)&&u.values.buffer!==l.rgb.buffer&&n.push(u.values.buffer);return Promise.resolve({result:l,transferList:n})}_transform(t){const l=G(t.schema,t.geometryBuffer);let n=l.length/3,u=null;const m=new Array,o=h(t.primaryAttributeData,l,n);t.primaryAttributeData!=null&&o&&m.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const s=h(t.modulationAttributeData,l,n);t.modulationAttributeData!=null&&s&&m.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:s});let e=z(t.rendererInfo,o,s,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const r=t.filterAttributesData.filter(x).map(i=>{const f=h(i,l,n),b={attributeInfo:i.attributeInfo,values:f};return m.push(b),b});u=new Uint32Array(n),n=Y(l,e,u,t.filterInfo,r)}for(const r of t.userAttributesData){const i=h(r,l,n);m.push({attributeInfo:r.attributeInfo,values:i})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),_(l,n,t.elevationOffset);const c=Z(l,n,q.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:c,rgb:e,attributes:m,pointIdFilterMap:u}}}function Z(a,t,l,n,u){if(!C(a,n,0,a,u,0,t))throw new Error("Can't reproject");const m=A(l.center),o=w(),s=w(),e=A(l.halfSize);F(D,l.quaternion);const c=new Float32Array(3*t);for(let r=0;r<t;r++){let i=3*r;o[0]=a[i]-m[0],o[1]=a[i+1]-m[1],o[2]=a[i+2]-m[2],k(s,o,D),e[0]=Math.max(e[0],Math.abs(s[0])),e[1]=Math.max(e[1],Math.abs(s[1])),e[2]=Math.max(e[2],Math.abs(s[2])),c[i++]=o[0],c[i++]=o[1],c[i]=o[2]}return l.halfSize=e,c}function _(a,t,l){if(l!==0)for(let n=0;n<t;n++)a[3*n+2]+=l}const D=R();function at(){return new E}export{at as default};
