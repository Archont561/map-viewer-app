import{a0 as m,eX as p,i4 as l,a9 as y,O as j}from"./index-8or3xOo5.js";import{t as R}from"./query-CDDoMS_j.js";import"./pbfQueryUtils-4pMNAXQe.js";import"./pbf-D6HDYjeG.js";import"./OptimizedFeature-X86aqlxQ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";function F(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=p(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function b(r,t,e){const a=await f(r,t,e),o=a.data,s=o.geometryType,n=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:n,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...a,data:c}}async function h(r,t,e){const a=await f(r,t,e,{returnCountOnly:!0}),o=a.data,s={};for(const n of o.relatedRecordGroups)n.objectId!=null&&(s[n.objectId]=n.count);return{...a,data:s}}async function f(r,t,e={},a){const o=R({...r.query,f:"json",...a,...F(t,a)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function x(r,t,e){t=l.from(t);const a=y(r);return b(a,t,e).then(o=>{const s=o.data,n={};return Object.keys(s).forEach(c=>n[c]=j.fromJSON(s[c])),n})}async function B(r,t,e){t=l.from(t);const a=y(r);return h(a,t,{...e}).then(o=>o.data)}export{x as executeRelationshipQuery,B as executeRelationshipQueryForCount};
