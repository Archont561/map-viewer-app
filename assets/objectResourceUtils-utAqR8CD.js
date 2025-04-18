const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-CEOjHQh8.js","assets/index-8or3xOo5.js","assets/index-P-wQHtU5.css","assets/mat4f64-Dk4dwAN8.js","assets/quat-nGJs4p0O.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/BufferView-DdQXvPkZ.js","assets/resourceUtils-Btc7Hhva.js","assets/basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{ll as ye,lm as Te,jc as K,hm as be,k1 as oe,ad as Y,kO as ae,a0 as we,be as ie,n as ve,cT as Z,hn as le,lj as N,s as $e,_ as Re,ah as Ae,ac as G,eI as J,eq as Me,ln as X,eG as Be,aD as Oe,jQ as Se,e5 as ue,lo as Ie,hC as Pe,hD as ee,hE as Ee}from"./index-8or3xOo5.js";import{a as Ce}from"./devEnvironmentUtils-CnNDiFMM.js";import{t as z,e as ce}from"./mat3f64-q3fE-ZOt.js";import{e as _e}from"./mat4f64-Dk4dwAN8.js";import{N as fe,f as me,n as D}from"./Geometry--pbrG8S3.js";import{i as de,c as pe,x as ke,L as Fe,O as Ue,E as je}from"./BufferView-DdQXvPkZ.js";import{r as Le,n as qe,d as te,l as re}from"./vec3-4MjzHz6g.js";import{o as De,d as se}from"./vec4-pyMKOAX6.js";import{n as Ne,o as Ve,a as Ge}from"./indexUtils-GQ5IBurw.js";import{n as W}from"./resourceUtils-Btc7Hhva.js";import{t as ze}from"./NestedMap-GuqgquCN.js";import{o as We}from"./Indices-CC8mBMeb.js";import{t as He}from"./requestImageUtils-coJ9bF1e.js";import{t as F}from"./orientedBoundingBox-BwOHvb_S.js";import{e as H,i as M,n as Qe}from"./basicInterfaces-CZwQPxTp.js";import{e as C}from"./VertexAttribute-Cq4MnHjR.js";import{z as V,n as Ke,o as Ye,s as Ze,t as Je}from"./DefaultMaterial-DulvXwzb.js";import{a as ne}from"./NormalAttribute.glsl-D949FNH7.js";function j(t){if(t==null)return null;const e=t.offset!=null?t.offset:ye,n=t.rotation!=null?t.rotation:0,r=t.scale!=null?t.scale:Te,c=z(1,0,0,0,1,0,e[0],e[1],1),i=z(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),o=z(r[0],0,0,0,r[1],0,0,0,1),l=ce();return K(l,i,o),K(l,c,l),l}class Xe{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class et{constructor(e,n,r){this.name=e,this.lodThreshold=n,this.pivotOffset=r,this.stageResources=new Xe,this.numberOfVertices=0}}const B=()=>ve.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");class tt{constructor(e,n,r){this.resource=e,this.textures=n,this.cachedMemory=r}}async function rt(t,e){const n=await st(t,e),r=await lt(n.textureDefinitions??{},e);let c=0;for(const i in r)if(r.hasOwnProperty(i)){const o=r[i];c+=o!=null&&o.image?o.image.width*o.image.height*4:0}return new tt(n,r,c+be(n))}async function st(t,e){const n=e==null?void 0:e.streamDataRequester;if(n)return nt(t,n,e);const r=await ae(we(t,e));if(r.ok===!0)return r.value.data;ie(r.error),he(r.error)}async function nt(t,e,n){const r=await ae(e.request(t,"json",n));if(r.ok===!0)return r.value;ie(r.error),he(r.error.details.url)}function he(t){throw new $e("",`Request for object resource failed: ${t}`)}function ot(t){const e=t.params,n=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const o in e.vertexAttributes){const l=i[o];l!=null&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),r=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${n}'`),r=!1}t.params.material||(B().warn("Geometry requires material"),r=!1);const c=t.params.vertexAttributes;for(const i in c)c[i].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function at(t,e){var m,b;const n=new Array,r=new Array,c=new Array,i=new ze,o=t.resource,l=oe.parse(o.version||"1.0","wosr");ct.validate(l);const s=o.model.name,a=o.model.geometries,u=o.materialDefinitions??{},f=t.textures;let p=0;const h=new Map;for(let g=0;g<a.length;g++){const y=a[g];if(!ot(y))continue;const R=ut(y),T=y.params.vertexAttributes,x=[],I=d=>{if(y.params.topology==="PerAttributeArray")return null;const v=y.params.faces;for(const w in v)if(w===d)return v[w].values;return null},U=T[C.POSITION],L=U.values.length/U.valuesPerElement;for(const d in T){const v=T[d],w=v.values,A=I(d)??We(L);x.push([d,new F(w,A,v.valuesPerElement,!0)])}const O=R.texture,$=f&&f[O];if($&&!h.has(O)){const{image:d,parameters:v}=$,w=new fe(d,v);r.push(w),h.set(O,w)}const q=h.get(O),_=q?q.id:void 0,P=R.material;let S=i.get(P,O);if(S==null){const d=u[P.slice(P.lastIndexOf("/")+1)].params;d.transparency===1&&(d.transparency=0);const v=$&&$.alphaChannelUsage,w=d.transparency>0||v==="transparency"||v==="maskAndTransparency",A=$?xe($.alphaChannelUsage):void 0,Q={ambient:Y(d.diffuse),diffuse:Y(d.diffuse),opacity:1-(d.transparency||0),transparent:w,textureAlphaMode:A,textureAlphaCutoff:.33,textureId:_,doubleSided:!0,cullFace:H.None,colorMixMode:d.externalColorMixMode||"tint",textureAlphaPremultiplied:($==null?void 0:$.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(Q,e.materialParameters),S=new V(Q,e),i.set(P,O,S)}c.push(S);const E=new me(S,x);p+=((b=(m=x.find(d=>d[0]===C.POSITION))==null?void 0:m[1])==null?void 0:b.indices.length)??0,n.push(E)}return{engineResources:[{name:s,stageResources:{textures:r,materials:c,geometries:n},pivotOffset:o.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:it(n)}}function it(t){const e=le();return t.forEach(n=>{const r=n.boundingInfo;r!=null&&(N(e,r.bbMin),N(e,r.bbMax))}),e}async function lt(t,e){const n=new Array;for(const i in t){const o=t[i],l=o.images[0].data;if(!l){B().warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+l,a="/textureDefinitions/"+i,u=o.channels==="rgba"?o.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Z.REPEAT,t:Z.REPEAT},preMultiplyAlpha:xe(u)!==M.Opaque},p=e!=null&&e.disableTextures?Promise.resolve(null):He(s,e);n.push(p.then(h=>({refId:a,image:h,parameters:f,alphaChannelUsage:u})))}const r=await Promise.all(n),c={};for(const i of r)c[i.refId]=i;return c}function xe(t){switch(t){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function ut(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const ct=new oe(1,2,"wosr");async function ft(t,e){var f;const n=ge(Ce(t));if(n.fileType==="wosr"){const p=await(e.cache?e.cache.loadWOSR(n.url,e):rt(n.url,e)),{engineResources:h,referenceBoundingBox:m}=at(p,e);return{lods:h,referenceBoundingBox:m,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(n.url,e,!!e.usePBR);else{const{loadGLTF:p}=await Re(()=>import("./loader-CEOjHQh8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));r=await p(new Ne(e.streamDataRequester),n.url,e,e.usePBR)}const c=(f=r.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,i=r.meta.isEsriSymbolResource&&c!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,xt(r,c));const o=!!e.usePBR,l=r.meta.isEsriSymbolResource?{usePBR:o,isSchematic:!1,treeRendering:i,mrrFactors:Ze}:{usePBR:o,isSchematic:!1,treeRendering:!1,mrrFactors:Je},s={...e.materialParameters,treeRendering:i},{engineResources:a,referenceBoundingBox:u}=mt(r,l,s,e,n.specifiedLodIndex);return{lods:a,referenceBoundingBox:u,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function ge(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function mt(t,e,n,r,c){const i=t.model,o=new Array,l=new Map,s=new Map,a=i.lods.length,u=le();return i.lods.forEach((f,p)=>{const h=r.skipHighLods===!0&&(a>1&&p===0||a>3&&p===1)||r.skipHighLods===!1&&c!=null&&p!==c;if(h&&p!==0)return;const m=new et(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(b=>{const g=h?new V({},r):dt(i,b,m,e,n,l,s,r),{geometry:y,vertexCount:R}=pt(b,g??new V({},r)),T=y.boundingInfo;T!=null&&p===0&&(N(u,T.bbMin),N(u,T.bbMax)),g!=null&&(m.stageResources.geometries.push(y),m.numberOfVertices+=R)}),h||o.push(m)}),{engineResources:o,referenceBoundingBox:u}}function dt(t,e,n,r,c,i,o,l){var R,T;const s=t.materials.get(e.material);if(s==null)return null;const{normal:a,color:u,texCoord0:f,tangent:p}=e.attributes,h=e.material+(a?"_normal":"")+(u?"_color":"")+(f?"_texCoord0":"")+(p?"_tangent":""),m=e.attributes.texCoord0!=null,b=e.attributes.normal!=null,g=ht(s.alphaMode);if(!i.has(h)){if(m){const E=(d,v=!1)=>{if(d!=null&&!o.has(d)){const w=t.textures.get(d);if(w){const A=w.data;o.set(d,new fe(W(A)?A.data:A,{...w.parameters,preMultiplyAlpha:!W(A)&&v,encoding:W(A)?A.encoding:void 0}))}}};E(s.colorTexture,g!==M.Opaque),E(s.normalTexture),E(s.occlusionTexture),E(s.emissiveTexture),E(s.metallicRoughnessTexture)}const x=1/ue,I=s.color[0]**x,U=s.color[1]**x,L=s.color[2]**x,O=s.emissiveFactor[0]**x,$=s.emissiveFactor[1]**x,q=s.emissiveFactor[2]**x,_=s.colorTexture!=null&&m?o.get(s.colorTexture):null,P=Ke(s),S=((R=s.normalTextureTransform)==null?void 0:R.scale)!=null?(T=s.normalTextureTransform)==null?void 0:T.scale:Ie;i.set(h,new V({...r,transparent:g===M.Blend,customDepthTest:Qe.Lequal,textureAlphaMode:g,textureAlphaCutoff:s.alphaCutoff,diffuse:[I,U,L],ambient:[I,U,L],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?H.None:H.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:b?ne.Attribute:ne.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:_!=null?_.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.normalTexture!=null&&m?o.get(s.normalTexture).id:void 0,textureAlphaPremultiplied:_!=null&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:s.occlusionTexture!=null&&m?o.get(s.occlusionTexture).id:void 0,emissiveTextureId:s.emissiveTexture!=null&&m?o.get(s.emissiveTexture).id:void 0,metallicRoughnessTextureId:s.metallicRoughnessTexture!=null&&m?o.get(s.metallicRoughnessTexture).id:void 0,emissiveFactor:[O,$,q],mrrFactors:P?Ye:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:P,colorTextureTransformMatrix:j(s.colorTextureTransform),normalTextureTransformMatrix:j(s.normalTextureTransform),scale:[S[0],S[1]],occlusionTextureTransformMatrix:j(s.occlusionTextureTransform),emissiveTextureTransformMatrix:j(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:j(s.metallicRoughnessTextureTransform),...c},l))}const y=i.get(h);if(n.stageResources.materials.push(y),m){const x=I=>{I!=null&&n.stageResources.textures.push(o.get(I))};x(s.colorTexture),x(s.normalTexture),x(s.occlusionTexture),x(s.emissiveTexture),x(s.metallicRoughnessTexture)}return y}function pt(t,e){const n=t.attributes.position.count,r=Ve(t.indices||n,t.primitiveType),c=D(3*n),{typedBuffer:i,typedBufferStride:o}=t.attributes.position;Le(c,i,t.transform,3,o);const l=[[C.POSITION,new F(c,r,3,!0)]];if(t.attributes.normal!=null){const a=D(3*n),{typedBuffer:u,typedBufferStride:f}=t.attributes.normal;Pe(k,t.transform),qe(a,u,k,3,f),ee(k)&&te(a,a),l.push([C.NORMAL,new F(a,r,3,!0)])}if(t.attributes.tangent!=null){const a=D(4*n),{typedBuffer:u,typedBufferStride:f}=t.attributes.tangent;Ee(k,t.transform),De(a,u,k,4,f),ee(k)&&te(a,a,4),l.push([C.TANGENT,new F(a,r,4,!0)])}if(t.attributes.texCoord0!=null){const a=D(2*n),{typedBuffer:u,typedBufferStride:f}=t.attributes.texCoord0;Ge(a,u,2,f),l.push([C.UV0,new F(a,r,2,!0)])}const s=t.attributes.color;if(s!=null){const a=new Uint8Array(4*n);s.elementCount===4?s instanceof pe?se(a,s,1,255):(s instanceof ke||s instanceof Fe)&&se(a,s,1/255,255):(a.fill(255),s instanceof de?re(a,s.typedBuffer,1,255,4,s.typedBufferStride):(t.attributes.color instanceof Ue||t.attributes.color instanceof je)&&re(a,s.typedBuffer,1/255,255,4,t.attributes.color.typedBufferStride)),l.push([C.COLOR,new F(a,r,4,!0)])}return{geometry:new me(e,l),vertexCount:n}}const k=ce();function ht(t){switch(t){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function xt(t,e){for(let n=0;n<t.model.lods.length;++n){const r=t.model.lods[n];for(const c of r.parts){const i=c.attributes.normal;if(i==null)return;const o=c.attributes.position,l=o.count,s=G(),a=G(),u=G(),f=new Float32Array(4*l),p=new Float32Array(3*l),h=Ae(_e(),c.transform);let m=0,b=0;for(let g=0;g<l;g++){o.getVec(g,a),i.getVec(g,s),J(a,a,c.transform),Me(u,a,e.center),X(u,u,e.radius);const y=u[2],R=Be(u),T=Math.min(.45+.55*R*R,1)**ue;X(u,u,e.radius),h!==null&&J(u,u,h),Oe(u,u),n+1!==t.model.lods.length&&t.model.lods.length>1&&Se(u,u,s,y>-1?.2:Math.min(-4*y-3.8,1)),p[m]=u[0],p[m+1]=u[1],p[m+2]=u[2],m+=3,f[b]=T,f[b+1]=T,f[b+2]=T,f[b+3]=1,b+=4}c.attributes.normal=new de(p),c.attributes.color=new pe(f)}}}const kt=Object.freeze(Object.defineProperty({__proto__:null,fetch:ft,parseUrl:ge},Symbol.toStringTag,{value:"Module"}));export{ft as Y,kt as o,j as s};
