const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OperatorGeodeticLength-Cs4GkvkW.js","assets/index-8or3xOo5.js","assets/index-P-wQHtU5.css","assets/Transformation2D-B_tst7So.js","assets/OperatorShapePreservingLength-TmeozzlW.js","assets/ProjectionTransformation-PNwa5zN2.js","assets/SimpleGeometryCursor-B92kdZ15.js","assets/apiConverter-CW0ZKKfz.js","assets/jsonConverter-ftLMKUvy.js"])))=>i.map(i=>d[i]);
import{_ as i,el as g,en as v,em as O,bz as P}from"./index-8or3xOo5.js";import{e as y}from"./geodeticCurveType-CirnHLSB.js";let n;function _(){return!!n&&O()}async function b(){if(!_()){const[e,r]=await Promise.all([i(()=>import("./OperatorGeodeticLength-Cs4GkvkW.js"),__vite__mapDeps([0,1,2,3,4,5,6])),i(()=>import("./ProjectionTransformation-PNwa5zN2.js").then(t=>t.aW),__vite__mapDeps([5,3,6,1,2])).then(t=>t.aG).then(({injectPe:t})=>t),g()]);n=new e.OperatorGeodeticLength,r(v)}}function L(e,r,t){return n.execute(e,r,t,null)}function E(){return n.supportsCurves()}let u,l,p,a;function c(){return!!u&&_()}async function f(){if(!c()){const[e]=await Promise.all([i(()=>import("./apiConverter-CW0ZKKfz.js"),__vite__mapDeps([7,3,5,6,1,2,8])),b()]);u=e.fromGeometry,l=e.fromSpatialReference,p=e.getSpatialReference,a=E()}}function m(e,r={}){const{curveType:t="geodesic",unit:s}=r,d=p(e);let o=L(u(e),l(d),y[t]);return o&&s&&(o=P(o,"meters",s)),o}const h=Object.freeze(Object.defineProperty({__proto__:null,execute:m,isLoaded:c,load:f,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,execute:m,isLoaded:c,load:f,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"}));export{h as f,j as g,f as m};
