import{J as f,b6 as u,M as p,cd as a,Z as S,jO as d}from"./index-8or3xOo5.js";import{g as i,f as y,W as x,E as O,U as h,D as J,R as N,u as B,s as P}from"./dataUtils-CF-EwAk8.js";import{m as g,j as w,_ as b,h as k}from"./RasterSymbolizer-DNHjtABB.js";import{T as v}from"./rasterFunctionHelper-D2shY9_m.js";import{w as z,j as D,a as T}from"./rasterProjectionHelper-D6YNGEbj.js";import{a as $,y as j,c as F}from"./PolynomialTransform-BtD3OdLO.js";import"./_commonjsHelpers-DCkdB7M8.js";var c;let l=c=class extends ${constructor(){super(...arguments),this.type="identity"}clone(){return new c}};f([u({IdentityXform:"identity"})],l.prototype,"type",void 0),l=c=f([p("esri.layers.support.rasterTransforms.IdentityTransform")],l);const I=l,E={GCSShiftXform:F,IdentityXform:I,PolynomialXform:j};function G(n){if(!(n==null?void 0:n.type))return null;const t=E[n==null?void 0:n.type];if(t){const s=new t;return s.read(n),s}return null}class H{convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=y(t,e.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(e){const t=i.fromJSON(e.pixelBlock),s=g(t);return Promise.resolve(s)}async decode(e){const t=await w(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(t!=null?t.toJSON():null)}async updateSymbolizer(e){var t;this.symbolizer=b.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=v(e.rasterFunctionJSON)}async process(e){var s;const t=this.rasterFunction.process({extent:a.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map(o=>o!=null?i.fromJSON(o):null),primaryPixelSizes:(s=e.primaryPixelSizes)==null?void 0:s.map(o=>o!=null?S.fromJSON(o):null),primaryRasterIds:e.primaryRasterIds});return t!=null?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t==null?void 0:t.toJSON())}estimateStatisticsHistograms(e){const t=k(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=x(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,e.useBilinear===!1);return t&&t.forEach((s,o)=>{t.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(t)}clipTile(e){const t=i.fromJSON(e.pixelBlock),s=O({...e,pixelBlock:t});return Promise.resolve(s==null?void 0:s.toJSON())}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(m=>m?new i(m):null),s=h(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,r=s;return e.coefs&&(r=J(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=N(e.destDimension,e.gcsGrid),r=B(r,e.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await P(e.meshType,e.simulationSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=a.fromJSON(e.projectedExtent),s=a.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new d({steps:e.datumTransformationSteps})),(e.includeGCSGrid||z(t.spatialReference,s.spatialReference,o))&&await D();const r=e.rasterTransform?G(e.rasterTransform):null;return T({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{H as default};
