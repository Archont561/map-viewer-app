import{c0 as U,c1 as z,b7 as C,dM as A,bN as G,Z as R,dN as Y,dO as v,dP as D,s as E,dQ as P}from"./index-8or3xOo5.js";import{j as S}from"./quantizationUtils-fZjQTmjb.js";import{$ as V}from"./utils-k5S5_2YL.js";import{m as j,B as L}from"./utils-BYTs0TL0.js";let f=null;const Z=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function _(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function X(e,t,n,i){const r=A(n)?G(n):null,s=r?Math.round((r.valid[1]-r.valid[0])/t.scale[0]):null;return e.map(a=>{const l=new R(a.geometry);return S(t,l,l),a.geometry=r?_(l,s??0,i[0]):l,a})}function ee(e,t=18,n,i,r){const s=new Float64Array(i*r);t=Math.round(P(t));let a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;const b=Y(n);for(const{geometry:p,attributes:I}of e){const{x:g,y:c}=p,$=Math.max(0,g-t),F=Math.max(0,c-t),M=Math.min(r,c+t),w=Math.min(i,g+t),h=+b(I);for(let m=F;m<M;m++)for(let d=$;d<w;d++){const x=m*i+d,N=D(d-g,m-c,t)*h,u=s[x]+=N;a=Math.min(a,u),l=Math.max(l,u)}}return{min:a,max:l}}function k(e){const t=Z.exec(e);if(!t)return null;const{hh:n,mm:i,ss:r,ms:s}=t.groups;return Number(n)*v.hours+Number(i)*v.minutes+Number(r)*v.seconds+Number(s||0)}async function te(e,t,n=!0){if(!t)return[];const{field:i,field2:r,field3:s,fieldDelimiter:a,fieldInfos:l,timeZone:b}=e,p=i&&(l==null?void 0:l.find(u=>u.name.toLowerCase()===i.toLowerCase())),I=!!p&&U(p),g=!!p&&V(p),c=e.valueExpression,$=e.normalizationType,F=e.normalizationField,M=e.normalizationTotal,w=[],h=e.viewInfoParams;let m=null,d=null;if(c){if(!f){const{arcadeUtils:u}=await z();f=u}f.hasGeometryOperations(c)&&await f.enableGeometryOperations(),m=f.createFunction(c),d=h?f.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new C(h.spatialReference)}):null}const x=e.fieldInfos,N=!(t[0]&&"declaredClass"in t[0]&&t[0].declaredClass==="esri.Graphic")&&x?{fields:x}:null;return t.forEach(u=>{const y=u.attributes;let o;if(c){const T=N?{...u,layer:N}:u,O=f.createExecContext(T,d,b);o=f.executeFunction(m,O)}else y&&(o=y[i],r?(o=`${j(o)}${a}${j(y[r])}`,s&&(o=`${o}${a}${j(y[s])}`)):typeof o=="string"&&n&&(g?o=o?new Date(o).getTime():null:I&&(o=o?k(o):null)));if($&&typeof o=="number"&&isFinite(o)){const T=y&&parseFloat(y[F]);o=L(o,$,T,M)}w.push(o)}),w}function ne(e){const t=e.field,n=e.normalizationType,i=e.normalizationField;let r;return n==="field"?r="(NOT "+i+" = 0)":n!=="log"&&n!=="natural-log"&&n!=="square-root"||(r=`(${t} > 0)`),r}function ie(e,t,n){const i=t!=null?e+" >= "+t:"",r=n!=null?e+" <= "+n:"";let s="";return s=i&&r?q(i,r):i||r,s?"("+s+")":""}function q(e,t){let n=e??"";return t!=null&&t&&(n=n?"("+n+") AND ("+t+")":t),n}function re(e,t){if(e&&e.spatialRelationship!=="intersects")return new E(t,"Only 'intersects' spatialRelationship is supported for featureFilter")}function oe(e,t,n){const i=B({layer:e,fields:t});if(i.length)return new E(n,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");const r=Q({layer:e,fields:t});return r.length?new E(n,"Unsupported fields: "+r.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function B(e){const t=e.layer;return e.fields.filter(n=>!t.getField(n))}function Q(e){const t=e.layer;return e.fields.filter(n=>{const i=t.getFieldUsageInfo(n);return!i||!i.supportsStatistics})}export{ne as F,k as I,re as M,ie as N,oe as T,q as U,te as b,ee as w,X as x};
