import{eW as m,I as p,am as F,a0 as f,cb as E,ec as x,eX as a}from"./index-8or3xOo5.js";import{t as j}from"./query-CDDoMS_j.js";const c="Layer does not support extent calculation.";function O(o,e){var s,y;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=x(n),r.inSR=a(n.spatialReference)),(s=t.topFilter)!=null&&s.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=a(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:u,end:i}=l;u==null&&i==null||(r.time=u===i?u:`${u??"null"},${i??"null"}`),delete t.timeExtent}return r}async function S(o,e,n,t){const r=await d(o,e,"json",t);return m(e,n,r.data),r}async function I(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function R(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(c);if(r.hasOwnProperty("count"))throw new Error(c);return t})}function h(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const s=typeof o=="string"?p(o):o,y=e.geometry?[e.geometry]:[];return t.responseType="json",F(y,null,t).then(l=>{const u=l==null?void 0:l[0];u!=null&&((e=e.clone()).geometry=u);const i=j({...s.query,f:n,...r,...O(e,r)});return f(E(s.path,"queryTopFeatures"),{...t,query:{...i,...t.query}})})}export{h as c,R as d,I as m,S as p};
