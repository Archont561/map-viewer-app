const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lyr3DWorker-B_aPnxFQ.js","assets/_commonjsHelpers-DCkdB7M8.js"])))=>i.map(i=>d[i]);
import{_ as T,cD as B}from"./index-8or3xOo5.js";var p,N,g,f,d,m,S,b,I,U,D,L,h,R,t;(function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"})(p||(p={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Bc7="Bc7",e.Basis="Basis",e.Etc1="Etc1",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(N||(N={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.FeatureVariable="FeatureVariable",e.NotSet="NotSet"}(g||(g={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(f||(f={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(d||(d={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(m||(m={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(S||(S={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(b||(b={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(I||(I={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(U||(U={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(D||(D={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(L||(L={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(h||(h={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.Ga8="Ga8",e.Etc1="Etc1",e.Etc2="Etc2",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Bc7="Bc7",e.NotSet="NotSet"}(R||(R={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(t||(t={}));function M(){return new Promise(e=>T(()=>import("./lyr3DWorker-B_aPnxFQ.js"),__vite__mapDeps([0,1])).then(a=>a.l).then(({default:a})=>{const n=a({locateFile:x,onRuntimeInitialized:()=>e(n)})})).catch(e=>{throw e})}function x(e){return B(`esri/libs/lyr3d/${e}`)}let s,r;async function F(e){if(await y(),e.inputs.length<1)return{result:{status:t.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const a={ptrs:[],sizes:[]};for(const i of e.inputs){const u=r._malloc(i.byteLength);new Uint8Array(r.HEAPU8.buffer,u,i.byteLength).set(new Uint8Array(i)),a.ptrs.push(u),a.sizes.push(i.byteLength)}const n=r.process(e.jobDescJson,a,e.isMissingResourceCase),c=n.status===t.Succeeded&&n.data,l=n.status===t.MissingInputs&&n.missingInputUrls.length>0;if(c){const i=n.data.slice();n.data=i}else l&&(n.jobDescJson=n.jobDescJson.slice(),n.originalInputs=e.inputs.slice());for(let i=0;i<a.ptrs.length;++i)r._free(a.ptrs[i]);const o=[];if(c)o.push(n.data.buffer);else if(l)for(const i of e.inputs)o.push(i);return{result:n,transferList:o}}function _(){r&&(r.uninitialize_lyr3d_worker_wasm(),r=null)}function y(){return r?Promise.resolve():(s||(s=M().then(e=>{r=e,r.initialize_lyr3d_worker_wasm(),s=null})),s)}export{_ as destroyWasm,y as initialize,F as process};
