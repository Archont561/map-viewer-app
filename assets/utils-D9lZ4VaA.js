import{dE as a}from"./index-8or3xOo5.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */const r="calcite-list",o="calcite-list-item-group",c="calcite-list-item";function n(s){var i;const t=(i=s.parentElement)==null?void 0:i.closest(c);t&&(t.open=!0,n(t))}function u(s){const t=s.assignedElements({flatten:!0}),i=t.filter(e=>e==null?void 0:e.matches(o)).map(e=>Array.from(e.querySelectorAll(c))).flat(),l=t.filter(e=>e==null?void 0:e.matches(c));return{lists:t.filter(e=>e==null?void 0:e.matches(r)),items:i.concat(l)}}function f(s){const t=s.assignedElements({flatten:!0}).filter(i=>i.matches(c));t.forEach(i=>{i.setPosition=t.indexOf(i)+1,i.setSize=t.length})}function E(s,t=!1){if(!a())return 0;const i=t?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(i,s,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function h(s){return s.tagName==="CALCITE-LIST-ITEM"}export{o as a,r as c,E as d,u as f,f as h,c as i,n as o,h as p};
