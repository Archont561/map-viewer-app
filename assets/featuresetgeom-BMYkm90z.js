import{a as u,r as c}from"./unitConversion-Dh8GQL-s.js";import{n as d}from"./TimeOnly-BOBS3Nmy.js";import{F as O,u as J,U as s,y as m,B as l}from"./arcade-DlzgErkh.js";import{u as f,l as w}from"./SpatialFilter-CFp3pAOM.js";import{a}from"./operatorsWorkerConnection-BsPxNfpd.js";import"./index-8or3xOo5.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-lnOILKsb.js";import"./number-DUj5yb1w.js";import"./featureConversionUtils-BXjH1gca.js";import"./OptimizedFeature-X86aqlxQ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./WhereClause-ZCkqFviu.js";function o(i){return async(r,n,e)=>{if(J(e,2,2,r,n),(e=O(e))[0]===null&&e[1]===null)return!1;if(l(e[0])){if(s(e[1]))return new w({parentfeatureset:e[0],relation:i,relationGeom:e[1]});if(e[1]===null)return new f({parentfeatureset:e[0]});throw new u(r,c.InvalidParameter,n)}if(s(e[0])){if(s(e[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":{const p=d(e[0]),t=d(e[1]);return p!=null&&t!=null&&a("intersects",[p.toJSON(),t.toJSON()])}case"esriSpatialRelIntersects":return a("intersects",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelContains":return a("contains",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelOverlaps":return a("overlaps",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelWithin":return a("within",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelTouches":return a("touches",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelCrosses":return a("crosses",[e[0].toJSON(),e[1].toJSON()])}throw new u(r,c.InvalidParameter,n)}if(l(e[1]))return new w({parentfeatureset:e[1],relation:i,relationGeom:e[0]});if(e[1]===null)return!1;throw new u(r,c.InvalidParameter,n)}if(e[0]===null){if(l(e[1]))return new f({parentfeatureset:e[1]});if(s(e[1])||e[1]===null)return!1}throw new u(r,c.InvalidParameter,n)}}function G(i){i.mode==="async"&&(i.functions.intersects=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelIntersects"))},i.functions.envelopeintersects=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelEnvelopeIntersects"))},i.signatures.push({name:"envelopeintersects",min:2,max:2}),i.functions.contains=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelContains"))},i.functions.overlaps=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelOverlaps"))},i.functions.within=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelWithin"))},i.functions.touches=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelTouches"))},i.functions.crosses=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelCrosses"))},i.functions.relate=function(r,n){return i.standardFunctionAsync(r,n,async(e,p,t)=>{if(t=O(t),J(t,3,3,r,n),s(t[0])&&s(t[1]))return a("relate",[t[0].toJSON(),t[1].toJSON(),m(t[2])]);if(s(t[0])&&t[1]===null||s(t[1])&&t[0]===null)return!1;if(l(t[0])&&t[1]===null)return new f({parentfeatureset:t[0]});if(l(t[1])&&t[0]===null)return new f({parentfeatureset:t[1]});if(l(t[0])&&s(t[1]))return t[0].relate(t[1],m(t[2]));if(l(t[1])&&s(t[0]))return t[1].relate(t[0],m(t[2]));if(t[0]===null&&t[1]===null)return!1;throw new u(r,c.InvalidParameter,n)})})}export{G as registerFunctions};
