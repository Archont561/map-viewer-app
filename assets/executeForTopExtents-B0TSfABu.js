import{a9 as n,cd as e}from"./index-8or3xOo5.js";import{d as s}from"./queryTopFeatures-CeldpYhM.js";import p from"./TopFeaturesQuery-CzgXSzM1.js";import"./query-CDDoMS_j.js";import"./pbfQueryUtils-4pMNAXQe.js";import"./pbf-D6HDYjeG.js";import"./OptimizedFeature-X86aqlxQ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function w(a,i,m){const r=n(a),o=await s(r,p.from(i),{...m}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:e.fromJSON(t)}}export{w as executeForTopExtents};
