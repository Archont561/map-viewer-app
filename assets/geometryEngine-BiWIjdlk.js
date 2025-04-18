import{g2 as n,bD as d,b7 as p}from"./index-8or3xOo5.js";import{G as t}from"./geometryEngineBase-B0ZyeKAX.js";import{hydratedAdapter as i}from"./hydrated-B0NFs9zv.js";import"./_commonjsHelpers-DCkdB7M8.js";function a(e){const r=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return r?d(p,r):p.WGS84}function R(e){return t.extendedSpatialReferenceInfo(e)}function x(e,r){return n(e),t.clip(i,a(e),e,r)}function S(e,r){return n(e),t.cut(i,a(e),e,r)}function y(e,r){return n(e),n(r),t.contains(i,a(e),e,r)}function D(e,r){return n(e),n(r),t.crosses(i,a(e),e,r)}function A(e,r,s){return n(e),n(r),t.distance(i,a(e),e,r,s)}function L(e,r){return n(e),n(r),t.equals(i,a(e),e,r)}function T(e,r){return n(e),n(r),t.intersects(i,a(e),e,r)}function V(e,r){return n(e),n(r),t.touches(i,a(e),e,r)}function b(e,r){return n(e),n(r),t.within(i,a(e),e,r)}function v(e,r){return n(e),n(r),t.disjoint(i,a(e),e,r)}function z(e,r){return n(e),n(r),t.overlaps(i,a(e),e,r)}function H(e,r,s){return n(e),n(r),t.relate(i,a(e),e,r,s)}function I(e){return n(e),t.isSimple(i,a(e),e)}function J(e){return n(e),t.simplify(i,a(e),e)}function N(e,r=!1){return t.convexHull(i,a(e),e,r)}function O(e,r){return n(r),t.difference(i,a(e),e,r)}function j(e,r){return n(r),t.symmetricDifference(i,a(e),e,r)}function q(e,r){return n(r),t.intersect(i,a(e),e,r)}function B(e){return t.union(i,a(e),e)}function C(e,r,s,c,o,f){return t.offset(i,a(e),e,r,s,c,o,f)}function E(e,r,s,c=!1){return t.buffer(i,a(e),e,r,s,c)}function G(e,r,s,c,o,f){return t.geodesicBuffer(i,a(e),e,r,s,c,o,f)}function P(e,r,s=!0){return n(e),t.nearestCoordinate(i,a(e),e,r,s)}function W(e,r){return n(e),t.nearestVertex(i,a(e),e,r)}function k(e,r,s,c){return n(e),t.nearestVertices(i,a(e),e,r,s,c)}function l(e){var r;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?((r=e.extent)==null?void 0:r.center)??null:null}function F(e,r,s){if(e==null)throw new u;const c=e.spatialReference;if((s=s??l(e))==null)throw new u;const o=e.constructor.fromJSON(t.rotate(e,r,s));return o.spatialReference=c,o}function K(e,r){if(e==null)throw new u;const s=e.spatialReference;if((r=r??l(e))==null)throw new u;const c=e.constructor.fromJSON(t.flipHorizontal(e,r));return c.spatialReference=s,c}function M(e,r){if(e==null)throw new u;const s=e.spatialReference;if((r=r??l(e))==null)throw new u;const c=e.constructor.fromJSON(t.flipVertical(e,r));return c.spatialReference=s,c}function Q(e,r,s,c){return n(e),t.generalize(i,a(e),e,r,s,c)}function U(e,r,s){return n(e),t.densify(i,a(e),e,r,s)}function X(e,r,s,c=0){return n(e),t.geodesicDensify(i,a(e),e,r,s,c)}function Y(e,r){return n(e),t.planarArea(i,a(e),e,r)}function Z(e,r){return n(e),t.planarLength(i,a(e),e,r)}function _(e,r,s){return n(e),t.geodesicArea(i,a(e),e,r,s)}function $(e,r,s){return n(e),t.geodesicLength(i,a(e),e,r,s)}function ee(e,r){return t.intersectLinesToPoints(i,a(e),e,r)}function re(e,r){t.changeDefaultSpatialReferenceTolerance(e,r)}function te(e){t.clearDefaultSpatialReferenceTolerance(e)}class u extends Error{constructor(){super("Illegal Argument Exception")}}export{E as buffer,re as changeDefaultSpatialReferenceTolerance,te as clearDefaultSpatialReferenceTolerance,x as clip,y as contains,N as convexHull,D as crosses,S as cut,U as densify,O as difference,v as disjoint,A as distance,L as equals,R as extendedSpatialReferenceInfo,K as flipHorizontal,M as flipVertical,Q as generalize,_ as geodesicArea,G as geodesicBuffer,X as geodesicDensify,$ as geodesicLength,q as intersect,ee as intersectLinesToPoints,T as intersects,I as isSimple,P as nearestCoordinate,W as nearestVertex,k as nearestVertices,C as offset,z as overlaps,Y as planarArea,Z as planarLength,H as relate,F as rotate,J as simplify,j as symmetricDifference,V as touches,B as union,b as within};
