import{s as L,a0 as G,ch as v,eT as A,jP as V,ae as N,aO as U,hC as q,hD as S,hE as K,cT as b,e5 as Q}from"./index-8or3xOo5.js";import{e as _}from"./mat3f64-q3fE-ZOt.js";import{w as k,m as H,i as J,f as W}from"./MeshComponent-zSHnZjj7.js";import{p as X}from"./MeshVertexAttributes-De0LPJ5Z.js";import{l as C}from"./meshVertexSpaceUtils-CR7EPQ8e.js";import{c as j,x as I,L as Y,O as E,i as P,E as Z,u as ee,T as te}from"./BufferView-DdQXvPkZ.js";import{e as re,f as oe,s as ne,u as M}from"./vec3-4MjzHz6g.js";import{n as se,u as le,c as R}from"./vec4-pyMKOAX6.js";import{e as ae}from"./types-D0PSWh4d.js";import{loadGLTF as ue}from"./loader-CEOjHQh8.js";import{n as ie,o as fe,b as ce,l as pe}from"./indexUtils-GQ5IBurw.js";import{B as me}from"./vertexSpaceConversion-Dq-35c5G.js";import{n as de}from"./resourceUtils-Btc7Hhva.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshLocalVertexSpace-BY1AWAME.js";import"./mat4f64-Dk4dwAN8.js";import"./quat-nGJs4p0O.js";import"./quatf64-aQ5IuZRd.js";import"./Indices-CC8mBMeb.js";import"./spatialReferenceEllipsoidUtils-BBTpM6eu.js";import"./computeTranslationToOriginAndRotation-CeV-Bm7c.js";import"./projectPointToVector-JHfKEPsn.js";import"./basicInterfaces-CZwQPxTp.js";function ye(e,t,r){const u=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,s=t.typedBufferStride,l=r?r.count:t.count;let a=((r==null?void 0:r.dstIndex)??0)*n,c=((r==null?void 0:r.srcIndex)??0)*s;for(let f=0;f<l;++f){for(let i=0;i<9;++i)u[a+i]=o[c+i];a+=n,c+=s}}Object.freeze(Object.defineProperty({__proto__:null,copy:ye},Symbol.toStringTag,{value:"Module"}));function ge(e,t,r){const u=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,s=t.typedBufferStride,l=r?r.count:t.count;let a=((r==null?void 0:r.dstIndex)??0)*n,c=((r==null?void 0:r.srcIndex)??0)*s;for(let f=0;f<l;++f){for(let i=0;i<16;++i)u[a+i]=o[c+i];a+=n,c+=s}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t){F(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function F(e,t,r=3,u=r){const n=t.length/u;let o=0,s=0;for(let l=0;l<n;++l)e[o]=t[s],e[o+1]=t[s+1],e[o+2]=t[s+2],o+=r,s+=u}function z(e,t,r,u,n){const o=e.typedBuffer,s=e.typedBufferStride,l=(n==null?void 0:n.count)??e.count;let a=((n==null?void 0:n.dstIndex)??0)*s;for(let c=0;c<l;++c)o[a]=t,o[a+1]=r,o[a+2]=u,a+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:F,copyView:xe,fill:z},Symbol.toStringTag,{value:"Module"}));function Te(e,t){D(e.typedBuffer,t,e.typedBufferStride)}function D(e,t,r=4){const u=t.typedBuffer,n=t.typedBufferStride,o=t.count;let s=0,l=0;for(let a=0;a<o;++a)e[s]=u[l],e[s+1]=u[l+1],e[s+2]=u[l+2],e[s+3]=u[l+3],s+=r,l+=n}function $(e,t,r,u,n,o){const s=e.typedBuffer,l=e.typedBufferStride,a=(o==null?void 0:o.count)??e.count;let c=((o==null?void 0:o.dstIndex)??0)*l;for(let f=0;f<a;++f)s[c]=t,s[c+1]=r,s[c+2]=u,s[c+3]=n,c+=l}Object.freeze(Object.defineProperty({__proto__:null,copy:D,copyView:Te,fill:$},Symbol.toStringTag,{value:"Module"}));function x(e,t){return new e(new ArrayBuffer(t*e.ElementCount*ae(e.ElementType)))}async function Ze(e,t,r){const u=new ie($e(r)),n=(await ue(u,t,r,!0)).model,o=n.lods.shift(),s=new Map,l=new Map;n.textures.forEach((g,h)=>s.set(h,Be(g))),n.materials.forEach((g,h)=>l.set(h,we(g,s)));const a=be(o);for(const g of a.parts)ve(a,g,l);const{position:c,normal:f,tangent:i,color:p,texCoord0:m}=a.vertexAttributes,d=C(e,r),B=e.spatialReference.isGeographic?C(e):d,w=me({vertexAttributes:{position:c.typedBuffer,normal:f==null?void 0:f.typedBuffer,tangent:i==null?void 0:i.typedBuffer},vertexSpace:B,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:r!=null&&r.unitConversionDisabled?void 0:"meters"});if(!w)throw new L("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${B.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:a.components,spatialReference:e.spatialReference,vertexAttributes:new X({...w,color:p==null?void 0:p.typedBuffer,uv:m==null?void 0:m.typedBuffer})}}function $e(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,u,n)=>{const o=(t==null?void 0:t(r))??r;return(await G(o,{responseType:u==="image"?"image":u==="binary"||u==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${A(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function he(e){return e!=null?e.toString():"-"}function be(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,n=new Map,o=[];for(const s of e.parts){const{position:l,normal:a,color:c,tangent:f,texCoord0:i}=s.attributes,p=`
      ${T(l,u)}/
      ${T(a,u)}/
      ${T(c,u)}/
      ${T(f,u)}/
      ${T(i,u)}/
      ${he(s.transform)}
    `;let m=!1;const d=A(n,p,()=>(m=!0,{start:t,length:l.count}));m&&(t+=l.count),a&&(r.normal=!0),c&&(r.color=!0),f&&(r.tangent=!0),i&&(r.texCoord0=!0),o.push({gltf:s,writeVertices:m,region:d})}return{vertexAttributes:{position:x(te,t),normal:r.normal?x(P,t):null,tangent:r.tangent?x(j,t):null,color:r.color?x(I,t):null,texCoord0:r.texCoord0?x(ee,t):null},parts:o,components:[]}}function Be(e){return new k({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new v(Ee(e.color,e.opacity)),u=e.emissiveFactor?new v(Me(e.emissiveFactor)):null,n=o=>o?new J({scale:o.scale?[o.scale[0],o.scale[1]]:[1,1],rotation:U(o.rotation??0),offset:o.offset?[o.offset[0],o.offset[1]]:[0,0]}):null;return new H({color:r,colorTexture:t.get(e.colorTexture),normalTexture:t.get(e.normalTexture),emissiveColor:u,emissiveTexture:t.get(e.emissiveTexture),occlusionTexture:t.get(e.occlusionTexture),alphaMode:_e(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.metallicRoughnessTexture),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function ve(e,t,r){t.writeVertices&&Se(e,t);const{indices:u,attributes:n,primitiveType:o,material:s}=t.gltf;let l=fe(u||n.position.count,o);const a=t.region.start;if(a){const c=new Uint32Array(l);for(let f=0;f<l.length;f++)c[f]+=a;l=c}e.components.push(new W({name:t.gltf.name,faces:l,material:r.get(s),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function Se(e,t){const{position:r,normal:u,tangent:n,color:o,texCoord0:s}=e.vertexAttributes,l=t.region.start,{attributes:a,transform:c}=t.gltf,f=a.position.count;if(re(r.slice(l,f),a.position,c),a.normal!=null&&u!=null){const i=q(_(),c),p=u.slice(l,f);oe(p,a.normal,i),S(i)&&ne(p,p)}else u!=null&&z(u,0,0,1,{dstIndex:l,count:f});if(a.tangent!=null&&n!=null){const i=K(_(),c),p=n.slice(l,f);se(p,a.tangent,i),S(i)&&le(p,p)}else n!=null&&$(n,0,0,1,1,{dstIndex:l,count:f});if(a.texCoord0!=null&&s!=null?ce(s.slice(l,f),a.texCoord0):s!=null&&pe(s,0,0,{dstIndex:l,count:f}),a.color!=null&&o!=null){const i=a.color,p=o.slice(l,f);if(i.elementCount===4)i instanceof j?R(p,i,1,255):(i instanceof I||i instanceof Y)&&R(p,i,1/255,255);else{$(p,255,255,255,255);const m=E.fromTypedArray(p.typedBuffer,p.typedBufferStride);i instanceof P?M(m,i,1,255):(i instanceof E||i instanceof Z)&&M(m,i,1/255,255)}}else o!=null&&$(o.slice(l,f),255,255,255,255)}function _e(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:O(e.s),vertical:O(e.t)}}function O(e){switch(e){case b.CLAMP_TO_EDGE:return"clamp";case b.MIRRORED_REPEAT:return"mirror";case b.REPEAT:return"repeat"}}function y(e){return e**(1/Q)*255}function Ee(e,t){return V(y(e[0]),y(e[1]),y(e[2]),t)}function Me(e){return N(y(e[0]),y(e[1]),y(e[2]))}export{Ze as loadGLTFMesh};
