import{j1 as N,j2 as m,gY as x,cU as d,j3 as a,cW as b,cR as C,j4 as A,j5 as T,j6 as l,bJ as D,gX as B,j7 as O,h3 as R,j8 as f,n as S}from"./index-8or3xOo5.js";import{E as M}from"./VertexArrayObject-DXaudcNg.js";class X{constructor(t,e,i=e){this.internalFormat=t,this.width=e,this.height=i,this.multisampled=!1,this.samples=1}}function w(s){return s.width<=0||s.height<=0||s.internalFormat==null?0:s.width*s.height*N(s.internalFormat)}class U{constructor(t,e){this._context=t,this._descriptor=e,this.type=m.RenderBuffer,this._context.instanceCounter.increment(x.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:r,height:n,internalFormat:h,multisampled:c}=e;c?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,h,r,n):i.renderbufferStorage(i.RENDERBUFFER,h,r,n),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get usedMemory(){return w(this._descriptor)}resize(t,e){const i=this._descriptor;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(x.Renderbuffer,this),this._context=null)}}const P=()=>S.getLogger("esri.views.webgl.FramebufferObject");class _{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(x.FramebufferObject,this);const r=p(e)?e:new d(this._context,e);if(this._colorAttachments.set(a.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(a.COLOR_ATTACHMENT0),i!=null)if(H(i))this._depthStencilTexture=p(i)?i:new d(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const n=L(i)?i:new U(this._context,i);this._depthStencilBuffer=n,this._validateRenderBufferDescriptor(n.descriptor)}}dispose(){var e,i;if(this._colorAttachments.size===0&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((r,n)=>{var h;return(h=this.detachColorTexture(n))==null?void 0:h.dispose()}),(e=this.detachDepthStencilBuffer())==null||e.dispose(),(i=this.detachDepthStencilTexture())==null||i.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(x.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(a.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){var e;const t=this._colorAttachments.get(a.COLOR_ATTACHMENT0);return((e=t==null?void 0:t.descriptor)==null?void 0:e.width)??0}get height(){var e;const t=this._colorAttachments.get(a.COLOR_ATTACHMENT0);return((e=t==null?void 0:t.descriptor)==null?void 0:e.height)??0}get usedMemory(){var t;return[...this._colorAttachments].reduce((e,[i,r])=>e+r.usedMemory,((t=this.depthStencil)==null?void 0:t.usedMemory)??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&p(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=a.COLOR_ATTACHMENT0){var r;if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),(r=this.detachColorTexture(e))==null||r.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=a.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const i=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(i)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=a.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case m.Texture:return this._attachDepthStencilTexture(t);case m.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){var i;if(t==null)return;const e=t.descriptor;e.pixelFormat!==b.DEPTH_STENCIL&&e.pixelFormat!==b.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==C.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,A)),(i=this._depthStencilTexture)==null||i.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,A),this._context.bindFramebuffer(e)}return this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(t==null)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(T.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(t.descriptor);i.framebufferRenderbuffer(T.FRAMEBUFFER,r,i.RENDERBUFFER,null),this._context.bindFramebuffer(e)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,n,h,c){(t<0||e<0||n<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=c.descriptor;c.descriptor.target!==l.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((o==null?void 0:o.width)==null||(o==null?void 0:o.height)==null||t+i>this.width||e+r>this.height||n+i>o.width||h+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,g=u.bindTexture(c,d.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(l.TEXTURE_2D,0,n,h,t,e,i,r),u.bindTexture(g,d.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,n,h,c){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),c||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,n,h,c)}async readPixelsAsync(t,e,i,r,n,h,c){const{gl:o}=this._context,u=M.createPixelPack(this._context,D.STREAM_READ,c.byteLength);this._context.bindBuffer(u);const g=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),o.readPixels(t,e,i,r,n,h,0),this._context.unbindBuffer(B.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(g),await u.getSubDataAsync(c),u.dispose()}resize(t,e){var r,n;if(this.width===t&&this.height===e)return;const i={width:t,height:e};E(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(h=>h.resize(i.width,i.height)),(r=this._depthStencilTexture)==null||r.resize(i.width,i.height),this._initialized&&(E(i,this._context.parameters.maxRenderbufferSize),(n=this._depthStencilBuffer)==null||n.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=T.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach((r,n)=>this._framebufferTexture2D(r.glName,n,F(r),t)),this._depthStencilBuffer){const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,r,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,F(this._depthStencilTexture),t);O()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=a.COLOR_ATTACHMENT0,i=l.TEXTURE_2D,r=T.FRAMEBUFFER,n=0){this._context.gl.framebufferTexture2D(r,e,i,t,n)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(T.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=R(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=R(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==l.TEXTURE_2D&&t.target!==l.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),E(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){E(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case f.DEPTH_COMPONENT16:case f.DEPTH_COMPONENT24:case f.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case f.DEPTH24_STENCIL8:case f.DEPTH32F_STENCIL8:case f.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case f.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(_._MAX_COLOR_ATTACHMENTS===-1){const{gl:i}=this._context;_._MAX_COLOR_ATTACHMENTS=i.getParameter(i.MAX_COLOR_ATTACHMENTS)}const e=t-a.COLOR_ATTACHMENT0;e+1>_._MAX_COLOR_ATTACHMENTS&&S.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${_._MAX_COLOR_ATTACHMENTS} color attachments`)}}function p(s){return s!=null&&"type"in s&&s.type===m.Texture}function L(s){return s!=null&&"type"in s&&s.type===m.RenderBuffer}function H(s){return p(s)||s!=null&&"pixelFormat"in s}function E(s,t){const e=Math.max(s.width,s.height);if(e>t){P().warn(`Resizing FBO attachment size ${s.width}x${s.height} to device limit ${t}`);const i=t/e;return s.width=Math.round(s.width*i),s.height=Math.round(s.height*i),!1}return!0}function F(s){return s.descriptor.target===l.TEXTURE_CUBE_MAP?l.TEXTURE_CUBE_MAP_POSITIVE_X:l.TEXTURE_2D}_._MAX_COLOR_ATTACHMENTS=-1;export{X as i,U as s,_ as x};
