import e from'./../../../ext/@babel/runtime/helpers/esm/defineProperty.js';import t from'./../../../ext/@babel/runtime/helpers/esm/objectWithoutProperties.js';import{useGridSlotComponentProps as r}from"@mui/x-data-grid";import n,{useEffect as o}from"react";import{Select as a,MenuItem as i}from"@material-ui/core";import p from"@material-ui/lab/Pagination";var u=["defaultOptions"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(e){var c=e.defaultOptions,s=t(e,u),m=r(),f=m.state,g=m.apiRef;o((function(){g.current.setState((function(e){return l(l({},e),{},{pagination:l(l({},e.pagination),{},{pageCount:s.tableState.totalPages})})}))}),[s.tableState.totalPages]);return n.createElement("div",{style:{display:"flex",justifyContent:"end",paddingTop:"12px"}},n.createElement(a,{defaultValue:c.rowsPerPageOptions[0],onChange:function(e){s.onChange(e.target.value)},style:{marginRight:"12px",fontSize:"0.875rem"}},c.rowsPerPageOptions.map((function(e){return n.createElement(i,{key:"keyId-".concat(e),value:e},e)}))),n.createElement(p,{size:s.isMobile?"small":"medium",color:"primary",siblingCount:s.isMobile?0:1,count:f.pagination.pageCount,page:f.pagination.page+1,onChange:function(e,t){return function(e,t){g.current.setPage(t-1)}(0,t)}}))}export{s as default};