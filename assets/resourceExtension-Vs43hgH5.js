import{cc as a}from"./index-8or3xOo5.js";function m(p){return i[e(p)]||c}function e(p){return p.type==="json"?"application/json":p.type==="blob"?p.blob.type:g(p.url)}function g(p){const o=a(p);return t[o]||n}const i={},n="text/plain",c=i[n],t={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in t)i[t[p]]=p;export{m as p};
