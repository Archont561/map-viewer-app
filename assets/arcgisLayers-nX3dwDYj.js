const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GroupLayer-D8GUEFM-.js","assets/index-8or3xOo5.js","assets/index-P-wQHtU5.css","assets/layersCreator-D33A7XE_.js","assets/loadUtils-C_3ISeHN.js","assets/fetchService-CyCbTked.js","assets/associatedFeatureServiceUtils-Bughe53f.js","assets/lazyLayerLoader-DL_8_1_P.js","assets/portalLayers-CPGCVra0.js","assets/saveUtils-XIipkJL1.js"])))=>i.map(i=>d[i]);
import{_ as C,d as _,s as v,h as F,I as $,q as N,g as P}from"./index-8or3xOo5.js";import{s as V}from"./associatedFeatureServiceUtils-Bughe53f.js";import{a as f,i as S,t as J}from"./fetchService-CyCbTked.js";import{a as k}from"./lazyLayerLoader-DL_8_1_P.js";const x={FeatureLayer:!0,SceneLayer:!0};async function B(a){const{properties:s,url:e}=a,t={...s,url:e},l=await M(e,s==null?void 0:s.customParameters),{Constructor:r,layerId:o,sourceJSON:u,parsedUrl:c,layers:y,tables:d}=l;if(y.length+d.length===0)return o!=null&&(t.layerId=o),u!=null&&(t.sourceJSON=u),new r(t);const m=new(await C(async()=>{const{default:w}=await import("./GroupLayer-D8GUEFM-.js");return{default:w}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))).default({title:c.title});return await E(m,l,t),m}function O(a,s){return a?a.find(({id:e})=>e===s):null}function T(a,s,e,t,l){const r={...l,layerId:s};return a!=null&&(r.url=a),e!=null&&(r.sourceJSON=e),"sublayerTitleMode"in t.prototype&&(r.sublayerTitleMode="service-name"),new t(r)}async function E(a,s,e){const t=s.sublayerConstructorProvider;for(const{id:l,serverUrl:r}of s.layers){const o=O(s.sublayerInfos,l),u=T(r,l,o,(o&&(t==null?void 0:t(o)))??s.Constructor,e);a.add(u)}if(s.tables.length){const l=await h("FeatureLayer");s.tables.forEach(({id:r,serverUrl:o})=>{const u=T(o,r,O(s.tableInfos,r),l,e);a.tables.add(u)})}}async function M(a,s){var d,m,w,b,I,g,L;let e=_(a);if(e==null&&(e=await D(a,s)),e==null)throw new v("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const{serverType:t,sublayer:l}=e;let r;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},u=t==="FeatureServer",c=t==="SceneServer",y={parsedUrl:e,Constructor:null,layerId:u||c?l??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":if(l!=null){const{type:n}=await f(a,{customParameters:s});switch(r="FeatureLayer",n){case"Catalog Layer":r="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new v("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else r=await q(a,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await f(a,{customParameters:s}),{tileInfo:i,cacheType:p}=n;r=i?((d=i==null?void 0:i.format)==null?void 0:d.toUpperCase())!=="LERC"||p&&p.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await f(e.url.path,{customParameters:s});if(r="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")r="VoxelLayer";else if(i!=null&&i.length){const p=(m=i[0])==null?void 0:m.layerType;p!=null&&P[p]!=null&&(r=P[p])}}break}case"3DTilesServer":throw new v("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(r="FeatureLayer",l!=null){const n=await f(a,{customParameters:s});y.sourceJSON=n,r=S(n.type)}break;default:r=o[t]}if(x[r]&&l==null){const n=await G(a,t,s);if(u&&(y.sublayerInfos=n.layerInfos,y.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)y.layers=n.layers,y.tables=n.tables,u&&((w=n.layerInfos)!=null&&w.length)&&(y.sublayerConstructorProvider=await A(n.layerInfos));else if(u||c){const i=((b=n.layerInfos)==null?void 0:b[0])??((I=n.tableInfos)==null?void 0:I[0]);if(y.layerId=((g=n.layers[0])==null?void 0:g.id)??((L=n.tables[0])==null?void 0:L.id),y.sourceJSON=i,u){const p=i==null?void 0:i.type;r=S(p)}}}return y.Constructor=await h(r),y}async function D(a,s){var u;const e=await f(a,{customParameters:s});let t=null,l=null;const r=e.type;if(r==="Feature Layer"||r==="Table"?(t="FeatureServer",l=e.id??null):r==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":U(e)?(t="SceneServer",l=e.id):e.hasOwnProperty("layers")&&U((u=e.layers)==null?void 0:u[0])&&(t="SceneServer"),!t)return null;const o=l!=null?F(a):null;return{title:o!=null&&e.name||N(a),serverType:t,sublayer:l,url:{path:o!=null?o.serviceUrl:$(a).path}}}function U(a){return a!=null&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&typeof a.id=="number"}async function G(a,s,e){let t,l,r=!1;switch(s){case"FeatureServer":{const c=await J(a,{customParameters:e});r=!!c.layersJSON,t=c.layersJSON||c.serviceJSON;break}case"SceneServer":{const c=await R(a,e);t=c.serviceInfo,l=c.tableServerUrl;break}default:t=await f(a,{customParameters:e})}const o=t==null?void 0:t.layers,u=t==null?void 0:t.tables;return{layers:(o==null?void 0:o.map(c=>({id:c.id})).reverse())||[],tables:(u==null?void 0:u.map(c=>({serverUrl:l,id:c.id})).reverse())||[],layerInfos:r?o:[],tableInfos:r?u:[]}}async function R(a,s){var l;const e=await f(a,{customParameters:s});if(!((l=e.layers)==null?void 0:l[0]))return{serviceInfo:e};try{const{serverUrl:r}=await V(a),o=await f(r,{customParameters:s}).catch(()=>null);return o&&(e.tables=o.tables),{serviceInfo:e,tableServerUrl:r}}catch{return{serviceInfo:e}}}async function h(a){return(0,k[a])()}async function q(a,s){return(await f(a,{customParameters:s})).tileInfo}async function A(a){if(!a.length)return;const s=new Set,e=[];for(const{type:r}of a)s.has(r)||(s.add(r),e.push(h(S(r))));const t=await Promise.all(e),l=new Map;return Array.from(s).forEach((r,o)=>{l.set(r,t[o])}),r=>l.get(r.type)}export{B as fromUrl};
