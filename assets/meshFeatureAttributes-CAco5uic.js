import{Z as n}from"./index-8or3xOo5.js";import{N as r}from"./MeshTransform-B_L3tZBe.js";function l(o,t,a=i){return new n({x:o[a.originX],y:o[a.originY],z:o[a.originZ],spatialReference:t})}function c(o,t=i){return new r({translation:[o[t.translationX],-o[t.translationZ],o[t.translationY]],rotationAxis:[o[t.rotationX],-o[t.rotationZ],o[t.rotationY]],rotationAngle:o[t.rotationDeg],scale:[o[t.scaleX],o[t.scaleZ],o[t.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{c as i,l as n};
