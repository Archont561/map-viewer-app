import{gj as s,G as v,aP as l}from"./index-8or3xOo5.js";import"./Transformation2D-B_tst7So.js";import{o as b}from"./ProjectionTransformation-PNwa5zN2.js";import"./jsonConverter-ftLMKUvy.js";import{s as d}from"./SimpleGeometryCursor-B92kdZ15.js";import{fromGeometry as p,getSpatialReference as m,toGeometry as f}from"./apiConverter-CW0ZKKfz.js";const i=new b;function j(r,e,o,n){return i.execute(r,e,o,n,null)}function M(r,e,o,n){const t=i.executeMany(new d(r),e,o,n,null);return Array.from(t)}function O(){return i.supportsCurves()}function x(r,e,o={}){let{maxAngleInDegrees:n=0,maxDeviation:t=0,unit:u}=o;const a=m(r);return u&&(e=s(e,u,a),t&&(t=s(t,u,a))),f(j(p(r),e,t,l(n)),a)}function y(r,e,o={}){let{maxAngleInDegrees:n=0,maxDeviation:t=0,unit:u}=o;const a=r.map(p),c=m(r);return u&&(e=s(e,u,c),t&&(t=s(t,u,c))),M(a,e,t,l(n)).map(_=>f(_,c)).filter(v)}const g=O(),I=Object.freeze(Object.defineProperty({__proto__:null,execute:x,executeMany:y,supportsCurves:g},Symbol.toStringTag,{value:"Module"})),P=Object.freeze(Object.defineProperty({__proto__:null,execute:x,executeMany:y,supportsCurves:g},Symbol.toStringTag,{value:"Module"}));export{P as d,I as l};
