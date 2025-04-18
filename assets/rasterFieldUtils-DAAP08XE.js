import{ab as Z,a8 as z,J as x,K as T,jl as S,M as K,G as Q,cn as V}from"./index-8or3xOo5.js";var k;let N=k=class extends Z{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new k({variableName:this.variableName,dimensionName:this.dimensionName,values:z(this.values),isSlice:this.isSlice})}};x([T({type:String,json:{write:!0}})],N.prototype,"variableName",void 0),x([T({type:String,json:{write:!0}})],N.prototype,"dimensionName",void 0),x([T({type:S.array(S.oneOf([S.native(Number),S.array(S.native(Number))])),json:{write:!0}})],N.prototype,"values",void 0),x([T({type:Boolean,json:{write:!0}})],N.prototype,"isSlice",void 0),N=k=x([K("esri.layers.support.DimensionalDefinition")],N);const I=N;function O(e,n,a){var i;const r=n.shift();if(a.length===0){const s=[];a.push({sliceId:-1,multidimensionalDefinition:s})}const t=a.length;for(let s=0;s<t;s++){const m=a.shift().multidimensionalDefinition;(i=r.values)==null||i.forEach(u=>{a.push({sliceId:-1,multidimensionalDefinition:[...m,{variableName:e,dimensionName:r.name,values:[u]}]})})}n.length&&O(e,n,a)}function re(e,n){const a=[];let r=0;return(n?e.variables.filter(t=>t.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((t,i)=>t.name>i.name?1:-1)).forEach(t=>{const i=[],s=[...t.dimensions].sort((m,u)=>m.name>u.name?-1:1);O(t.name,s,i),i.forEach(m=>{a.push({...m,sliceId:r++})})}),a}function le(e,n,a){let r=e;if(n&&(n=[...n].sort((t,i)=>t.dimensionName<i.dimensionName?-1:1)).forEach(({dimensionName:t,values:i,isSlice:s})=>{i.length&&(r=r.filter(m=>{const u=m.multidimensionalDefinition.find(o=>o.dimensionName===t);if(u==null)return!1;const l=u.values[0];return typeof l=="number"?typeof i[0]=="number"?i.includes(l):i.some(o=>o[0]<=l&&o[1]>=l):typeof i[0]=="number"?i.some(o=>l[0]<=o&&l[1]>=o):s?i.some(o=>o[0]===l[0]&&o[0]===l[1]):i.some(o=>o[0]>=l[0]&&o[0]<=l[1]||o[1]>=l[0]&&o[1]<=l[1]||o[0]<l[0]&&o[1]>l[1])}))}),r.length&&(a==null?void 0:a.start)!=null&&a.end!=null){const t=a.start.getTime(),i=a.end.getTime(),s=r[0].multidimensionalDefinition.findIndex(m=>m.dimensionName==="StdTime");s>-1&&(r=r.filter(m=>{const u=m.multidimensionalDefinition[s].values[0];return t<=u&&i>=u}))}return r.map(t=>t.sliceId)}function L(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function H(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function j(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function W(e,n,a){var s,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let r;if(a){const{variables:u}=n;if(u.length&&!u.includes(a))return null;const l=n.subsetDefinitions.find(o=>o.dimensionName===e.name&&o.variableName===a);if(!((m=l==null?void 0:l.values)!=null&&m.length))return e;r=j(l.values)}else{const u=n.dimensions.find(({name:l})=>l===e.name);r=u==null?void 0:u.extent}const t=r;if(!(t!=null&&t.length))return e;const i=e.values.filter(u=>L(u,t));return{...e,extent:[...t],values:i}}function R(e,n,a){var t;if(!((t=n==null?void 0:n.subsetDefinitions)!=null&&t.length))return!1;const{variables:r}=n;if(r.length&&e.some(({variableName:i})=>i&&!r.includes(i)))return!0;for(let i=0;i<e.length;i++){const s=e[i],m=n.subsetDefinitions.find(u=>(s.variableName===""||u.variableName===s.variableName)&&u.dimensionName===s.dimensionName);if(m!=null&&m.values.length){const u=j(m.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&a){if(!H(s.values,u))return!0}else if(s.values.some(l=>!L(l,u)))return!0}}return!1}function ue(e,n){if(e==null)return{isOutside:!1};const{geometry:a,timeExtent:r,multidimensionalDefinition:t}=n;let i=null;if(r!=null&&(i=X(e,r),i==null))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&a){const m=a.type==="point"?a:a.type==="extent"?a.center:a.type==="polygon"?a.centroid:null;if(m&&!s.contains(m))return{isOutside:!0}}return t!=null&&t.length&&R(t,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:a,timeExtent:i,multidimensionalDefinition:t}}}function X(e,n){const a=e.dimensions.find(({name:s})=>s==="StdTime");if(a==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:r,end:t}=n.toJSON(),i=r===t?[r]:r!=null&&t!=null?[r,t]:[r??t];return i.length===2&&(a!=null&&a.extent.length)&&(i[0]=Math.max(i[0],a.extent[0]),i[1]=Math.min(i[1],a.extent[1]??a.extent[0]),i[1]<i[0])||R([new I({variableName:"",dimensionName:"StdTime",isSlice:i.length===1,values:i})],e,!0)?null:(n.start=new Date(i[0]),n.end=new Date(i[1]??i[0]),n)}function oe(e){var s,m,u;const{rasterInfo:n,multidimensionalSubset:a}=e,{multidimensionalInfo:r}=n;if(r==null)return null;let t=(s=e.multidimensionalDefinition)!=null&&s.length?e.multidimensionalDefinition:Y(n,{multidimensionalSubset:a});if(!(t!=null&&t.length))return null;if(t.some(l=>!l.dimensionName)){const{variableName:l}=t[0],o=Y(n,{multidimensionalSubset:a,variableName:l});o==null||o.forEach(f=>{var b;const d=t==null?void 0:t.find(({dimensionName:D})=>D===f.dimensionName);(b=d==null?void 0:d.values)!=null&&b.length&&(f.values=d.values,f.isSlice=d.isSlice)}),t=o}const{timeExtent:i}=e;if(t!=null&&i!=null&&(i.start!=null||i.end!=null)){t=t.map(g=>g.clone());const l=(u=(m=r.variables.find(({name:g})=>g===t[0].variableName))==null?void 0:m.dimensions)==null?void 0:u.find(({name:g})=>g==="StdTime"),o=t.find(({dimensionName:g})=>g==="StdTime");if(!l||!o)return null;const{start:f,end:d}=i,b=f==null?null:f.getTime(),D=d==null?null:d.getTime(),h=b??D,v=D??b;if(l.values!=null){const g=l.values.filter(c=>{if(Array.isArray(c)){if(h===v)return c[0]<=h&&c[1]>=h;const p=c[0]<=h&&c[1]>h||c[0]<v&&c[1]>=v,w=c[0]>=h&&c[1]<=v||c[0]<h&&c[1]>v;return p||w}return h===v?c===h:c>=h&&c<=v});if(g.length){const c=g.sort((p,w)=>{const q=Array.isArray(p)?p[0]:p,B=Array.isArray(p)?p[1]:p,G=Array.isArray(w)?w[0]:w,J=Array.isArray(w)?w[1]:w;return h===v?q-G:Math.abs(B-v)-Math.abs(J-v)})[0];o.values=[c]}else t=null}else if(l.hasRegularIntervals&&l.extent){const[g,c]=l.extent;h>c||v<g?t=null:o.values=h===v?[h]:[Math.max(g,h),Math.min(c,v)]}}return t!=null&&R(t,a)?null:t}function _(e,n={}){var o,f;const{multidimensionalInfo:a,keyProperties:r}=e;if(a==null)return null;const{variableName:t,multidimensionalSubset:i,multidimensionalDefinition:s}=n,m=s!=null?(o=s[0])==null?void 0:o.variableName:null,u=t||m||(r==null?void 0:r.DefaultVariable);let{variables:l}=a;return(f=i==null?void 0:i.variables)!=null&&f.length&&(l=l.filter(({name:d})=>i.variables.includes(d))),u?l.find(({name:d})=>d===u)??l[0]:l[0]}function Y(e,n={}){const a=_(e,n);if(!a)return null;const r=[],{dimensions:t,name:i}=a;if(t.length===0)return[new I({variableName:i,dimensionName:"",values:[],isSlice:!0})];for(let s=0;s<t.length;s++){const m=W(t[s],n.multidimensionalSubset,i);if(!m)return null;const{values:u,extent:l}=m;let o=(u==null?void 0:u[0])??(l==null?void 0:l[0]);m.name.toLowerCase()==="stdz"&&!m.hasRanges&&l&&Math.abs(l[1])<=Math.abs(l[0])&&(o=u!=null&&u.length?u[u.length-1]:l[1]),r.push(new I({variableName:i,dimensionName:m.name,values:[o],isSlice:!n.useRangeForRangedDimensionInfo||!!m.hasRanges}))}return r}function me(e){return!!(e!=null&&e.length)&&e.some(n=>{if(n.values==null)return!0;const a=n.values.length;return a===0||a>1||!n.isSlice&&Array.isArray(n.values[0])})}function ce(e,n){var r;if(n==null||e==null)return null;let a=n.variables.map(t=>({...t}));return(r=e==null?void 0:e.variables)!=null&&r.length&&(a=a.filter(({name:t})=>e.variables.includes(t)),a.forEach(t=>{t.dimensions=t.dimensions.map(i=>W(i,e,t.name)).filter(Q)})),a}function ee(e,n){var m;const{values:a}=n;if(a!=null&&a.length){const u=Array.isArray(a[0]),l=Array.isArray(e);return u!==l?-1:u&&l?a.findIndex(o=>o[0]===e[0]&&o[1]===e[1]):a.indexOf(e)}const{extent:r}=n;if(Array.isArray(e)||!r||e<r[0]||e>r[1])return-1;const t=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-r[0])/t);const i=r[0];let s=-1;switch(((m=n.intervalUnit)==null?void 0:m.toLowerCase())||"days"){case"seconds":s=Math.round((e-i)/1e3/t);break;case"minutes":s=Math.round((e-i)/6e4/t);break;case"hours":s=Math.round((e-i)/36e5/t);break;case"days":s=Math.round((e-i)/864e5/t);break;case"months":{const u=new Date(e).getUTCFullYear()-new Date(i).getUTCFullYear(),l=new Date(i).getUTCMonth(),o=new Date(e).getUTCMonth();s=u===0?o-l:o+11-l+12*(u-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(i).getUTCFullYear())/t);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(i).getUTCFullYear())/10/t)}return s}function E(e){var s,m;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:a,unit:r}=e,t=e.interval||1,i=a?a[1]-a[0]:0;if(r!=="ISO8601")return Math.round(i/t);switch(((m=e.intervalUnit)==null?void 0:m.toLowerCase())??"seconds"){case"seconds":n=Math.round(i/1e3/t);break;case"minutes":n=Math.round(i/6e4/t);break;case"hours":n=Math.round(i/36e5/t);break;case"days":n=Math.round(i/864e5/t);break;case"months":if(a){const u=new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear(),l=new Date(a[0]).getUTCMonth(),o=new Date(a[1]).getUTCMonth();n=u===0?o-l+1:o+11-l+12*(u-1)+1}else n=0;break;case"years":n=a?Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/t):0;break;case"decades":n=a?Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/10/t):0;break;default:n=0}return n}function fe(e){var i,s;if(((i=e.extent)==null?void 0:i.length)!==2||!e.interval)return[];const{extent:[n,a],interval:r}=e;if(e.unit==="ISO8601"){const m=((s=e.intervalUnit)==null?void 0:s.toLowerCase())??"days";return["decades","years","months","days","hours","minutes","seconds"].includes(m)?ne(n,a,r,m):[]}const t=Math.round((a-n)/r);return Array.from({length:t},(m,u)=>u===t-1?a:n+u*r)}function ne(e,n,a,r){const t=[];let i=e;const s=new Date(e);for(;i<=n;)switch(t.push(i),r){case"decades":s.setUTCFullYear(s.getUTCFullYear()+10*a),i=s.getTime();break;case"years":s.setUTCFullYear(s.getUTCFullYear()+a),i=s.getTime();break;case"months":s.setUTCMonth(s.getUTCMonth()+a),i=s.getTime();break;case"days":i+=864e5*a;break;case"hours":i+=36e5*a;break;case"minutes":i+=6e4*a;break;case"seconds":i+=1e3*a}return t.length===1?t[1]=n:t[t.length-1]=n,t}function de(e,n){let a=0;const r=e[0].variableName,t=[...n.variables].sort((i,s)=>i.name>s.name?1:-1);for(let i=0;i<t.length;i++){const s=t[i],m=[...s.dimensions].sort((o,f)=>o.name>f.name?-1:1);if(s.name!==r){a+=m.map(o=>E(o)).reduce((o,f)=>o*f);continue}const u=m.map(o=>E(o)),l=m.length;for(let o=0;o<l;o++){const f=e.find(b=>b.dimensionName===m[o].name);if(f==null)return null;const d=ee(f.values[0],m[o]);if(d===-1)return null;u.shift(),a+=o===l-1?d:d*u.reduce((b,D)=>b*D)}break}return a}function he(e){return Math.round(24*(e-25569)*3600*1e3)}const te="Raster.",y="Raster.Dim.",A=".Max",$={servicePixelValue:"Raster.ServicePixelValue",rawServicePixelValue:"Raster.ServicePixelValue.Raw",itemPixelValue:"Raster.ItemPixelValue",magnitude:"Raster.Magnitude",direction:"Raster.Direction",variable:"Raster.Variable"},P=new Map([["quarters","Quarter"],["months","Month"],["weeks","Week of the year"],["days","Day of the year"]]);function M(e,n){return new V({name:e,alias:n,domain:null,editable:!1,length:50,type:"string"})}function C(e,n){return new V({name:e,alias:n,domain:null,editable:!1,type:"double"})}function ae(e,n){return new V({name:e,alias:n,domain:null,editable:!1,type:"date"})}function ve(e){return M($.servicePixelValue,e??"Service Pixel Value")}function ge(e){return M($.rawServicePixelValue,e??"Raw Service Pixel Value")}function be(){return M($.itemPixelValue,"Item Pixel Value")}function ye(e){return M(`${$.servicePixelValue}.${e}`,e)}function pe(e){return C(`${$.magnitude}`,"Magnitude"+(e?` (${e})`:""))}function we(){return C(`${$.direction}`,"Direction (°)")}function $e(e){return e.fields.filter(n=>n.type!=="oid"&&n.name.toLowerCase()!=="value").map(n=>{const a=n.clone();return a.name=`${te}${n.name}`,a})}function Ne(e){const n=new Set,a=new Set,r=new Map;return e.variables.forEach(({dimensions:t})=>{t.forEach(i=>{var s;if(i.recurring)r.set(i.name,i.unit);else{const m=((s=i.unit)==null?void 0:s.trim())==="ISO8601"?n:a;m.add(i.name),i.hasRanges&&m.add(`${i.name}${A}`)}})}),[M($.variable,"Variable"),...[...n].map(t=>ae(`${y}${t}`,F(t))),...[...a].map(t=>C(`${y}${t}`,F(t))),...[...r].map(([t,i])=>C(`${y}${t}`,ie(t,i)))]}function ie(e,n){return n=n==null?void 0:n.toLowerCase(),n&&P.has(n)?P.get(n):F(e)}function F(e){const n=e.endsWith(A),a=n?e.slice(0,-4):e,r=a==="StdTime"?"Standard Time":a==="StdZ"?"Standard Z":a;return n?`${r} Max`:r}function U(e,n){return n?new Date(e):e}function De(e,n,a){a!=null&&a.length&&(n[$.variable]=a[0].variableName,a.forEach(({dimensionName:r,values:t})=>{if(r&&(t!=null&&t.length)){const i=`${y}${r}`,s=e.find(({name:l})=>l===i);if(!s)return;const m=s.type==="date",u=t[0];if(Array.isArray(u)){if(n[`${y}${r}`]=U(u[0],m),u[1]!=null){const l=`${y}${r}${A}`;if(e.some(({name:o})=>o===l)){const o=U(u[1],m);n[l]=o}}}else n[`${y}${r}`]=U(u,m)}}))}function xe(e,n){if(n.pixelType.startsWith("f")&&e.forEach(({format:a,fieldName:r})=>{a&&r&&/^raster\.(item|service)pixelvalue/i.test(r)&&(a.places=2)}),n.multidimensionalInfo){const a=n.multidimensionalInfo.variables.flatMap(({dimensions:r})=>r);e.forEach(({format:r,fieldName:t})=>{var i;if(r&&(t!=null&&t.startsWith(y))){const s=t.slice(y.length),m=`${s}${A}`,u=a.find(({name:l})=>l===s||l===m);(i=u==null?void 0:u.values)!=null&&i.every(l=>Number.isInteger(l))&&(r.places=0)}})}}export{we as $,fe as D,de as N,De as V,le as a,$e as b,ge as c,_ as d,pe as e,oe as f,me as g,Y as h,re as i,Ne as j,xe as k,R as l,be as m,te as n,ve as o,I as p,ye as q,ue as r,y as s,$ as t,ce as v,he as w};
