import{b7 as a,dY as k,dZ as r,d_ as f,d$ as d,e0 as u,e1 as $}from"./index-8or3xOo5.js";const m=new a($),e=new a(d),n=new a(u),b=new a(k);function x(t){const w=c.get(t);if(w)return w;let s=m;if(t)if(t===e)s=e;else if(t===n)s=n;else{const o=t.wkid,p=t.latestWkid;if(o!=null||p!=null)r(o)||r(p)?s=e:(f(o)||f(p))&&(s=n);else{const i=t.wkt2??t.wkt;if(i){const l=i.toUpperCase();l===C?s=e:l===U&&(s=n)}}}return c.set(t,s),s}const c=new Map,C=e.wkt.toUpperCase(),U=n.wkt.toUpperCase();export{x as a,b as w};
