import{dB as l,fZ as d,dF as o,dG as r,dI as n,dJ as c}from"./index-8or3xOo5.js";import{b as p}from"./observers-C2U8axZY.js";import{n as h}from"./resources6-C-XXGpuo.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */const i={title:"dropdown-title",separator:"dropdown-separator"},u=n`:host{display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-bold);border-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3));color:var(--calcite-dropdown-group-title-text-color, var(--calcite-color-text-2))}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3))}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`,t=class t extends l{constructor(){super(),this.mutationObserver=p("mutation",()=>this.updateItems()),this.position=-1,this.scale="m",this.selectionMode="single",this.calciteInternalDropdownItemChange=d({cancelable:!1}),this.listen("calciteInternalDropdownItemSelect",this.updateActiveItemOnChange)}connectedCallback(){var e;super.connectedCallback(),this.updateItems(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0})}willUpdate(e){e.has("selectionMode")&&(this.hasUpdated||this.selectionMode!=="single")&&this.updateItems()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}updateItems(){Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach(e=>e.selectionMode=this.selectionMode)}render(){const e=this.groupTitle?r`<span aria-hidden=true class=${o(i.title)}>${this.groupTitle}</span>`:null,a=this.position>0?r`<div class=${o(i.separator)} role=separator></div>`:null;return this.el.ariaLabel=this.groupTitle,this.el.role="group",r`<div class=${o({[h.container]:!0})}>${a}${e}<slot></slot></div>`}};t.properties={groupTitle:3,position:9,scale:3,selectionMode:3},t.shadowRootOptions={mode:"open",delegatesFocus:!0},t.styles=u;let s=t;c("calcite-dropdown-group",s);export{s as DropdownGroup};
