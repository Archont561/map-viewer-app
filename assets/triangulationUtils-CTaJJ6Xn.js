import{e as Z}from"./earcut-D9gy186-.js";import{eO as g,aP as H,cI as N,h$ as S,eK as W,i0 as X,i1 as Y,i2 as M,i3 as w}from"./index-8or3xOo5.js";import{t as b}from"./Indices-CC8mBMeb.js";import{O as $,v,M as F}from"./plane-CqxfS6v6.js";import{e as x}from"./deduplicate-Ck8yEDKa.js";function K(n,o,l){const s=P(E,n,o,l)?$(E):[0,0,1];return Math.abs(s[2])>Math.cos(H(80))?g.Z:Math.abs(s[1])>Math.abs(s[0])?g.Y:g.X}function P(n,o,l,s){const e=(i=>!Array.isArray(i[0]))(o)?(i,t)=>o[3*i+t]:(i,t)=>o[i][t],r=s?N(s)/S(s):1;return v(n,(i,t)=>W(i,e(t,0)*r,e(t,1)*r,e(t,2)),l)}const E=F();function G(n){const o=R(n.rings,n.hasZ,O.CCW_IS_HOLE,n.spatialReference),l=new Array;let s=0,e=0;for(const t of o.polygons){const h=t.count,a=t.index,A=X(o.position,3*a,3*h),d=t.holeIndices.map(f=>f-a),y=b(Z(A,d,3));l.push({position:A,faces:y}),s+=A.length,e+=y.length}const r=Q(l,s,e),i=Array.isArray(r.position)?x(r.position,3,{originalIndices:r.faces}):x(r.position.buffer,6,{originalIndices:r.faces});return r.position=Y(new Float64Array(i.buffer)),r.faces=i.indices,r}function Q(n,o,l){if(n.length===1)return n[0];const s=M(o),e=new Array(l);let r=0,i=0,t=0;for(const h of n){for(let a=0;a<h.position.length;a++)s[r++]=h.position[a];for(const a of h.faces)e[i++]=a+t;t=r/3}return{position:s,faces:b(e)}}function R(n,o,l,s){const e=n.length,r=new Array(e),i=new Array(e),t=new Array(e);let h=0;for(let u=0;u<e;++u)h+=n[u].length;let a=0,A=0,d=0;const y=M(3*h);let f=0;for(let u=e-1;u>=0;u--){const c=n[u],_=l===O.CCW_IS_HOLE&&j(c,o,s);if(_&&e!==1)r[a++]=c;else{let L=c.length;for(let p=0;p<a;++p)L+=r[p].length;const m={index:f,pathLengths:new Array(a+1),count:L,holeIndices:new Array(a)};m.pathLengths[0]=c.length,c.length>0&&(t[d++]={index:f,count:c.length}),f=_?C(c,c.length-1,-1,y,f,c.length,o):C(c,0,1,y,f,c.length,o);for(let p=0;p<a;++p){const I=r[p];m.holeIndices[p]=f,m.pathLengths[p+1]=I.length,I.length>0&&(t[d++]={index:f,count:I.length}),f=C(I,0,1,y,f,I.length,o)}a=0,m.count>0&&(i[A++]=m)}}for(let u=0;u<a;++u){const c=r[u];c.length>0&&(t[d++]={index:f,count:c.length}),f=C(c,0,1,y,f,c.length,o)}return i.length=A,t.length=d,{position:y,polygons:i,outlines:t}}function C(n,o,l,s,e,r,i){e*=3;for(let t=0;t<r;++t){const h=n[o];s[e++]=h[0],s[e++]=h[1],s[e++]=i&&h[2]?h[2]:0,o+=l}return e/3}function j(n,o,l){if(!o)return!w(n);const s=n.length-1;switch(K(n,s,l)){case g.X:return!w(n,g.Y,g.Z);case g.Y:return!w(n,g.X,g.Z);case g.Z:return!w(n,g.X,g.Y)}}var O;(function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(O||(O={}));export{R as a,K as c,G as f,O as p};
