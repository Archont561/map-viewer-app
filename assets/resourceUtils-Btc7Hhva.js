import{a7 as p}from"./index-8or3xOo5.js";import{u as d}from"./basicInterfaces-CZwQPxTp.js";class L{constructor(n){this.data=n,this.type="encoded-mesh-texture",this.encoding=d.KTX2_ENCODING}}function l(e){return(e==null?void 0:e.type)==="encoded-mesh-texture"}async function w(e){const n=new Blob([e]),o=await n.text();return JSON.parse(o)}async function v(e,n){if(n===d.KTX2_ENCODING)return new L(e);const o=new Blob([e],{type:n});let r=URL.createObjectURL(o);switch(n){case"image/jpeg":r+="#.jpg";break;case"image/png":r+="#.png"}const t=new Image;if(p("esri-iPhone"))return new Promise((c,m)=>{const s=()=>{i(),c(t)},a=u=>{i(),m(u)},i=()=>{URL.revokeObjectURL(r),t.removeEventListener("load",s),t.removeEventListener("error",a)};t.addEventListener("load",s),t.addEventListener("error",a),t.src=r});try{t.src=r,await t.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(r),t}export{l as n,v as o,w as r,L as t};
