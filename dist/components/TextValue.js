import e from'./../ext/@babel/runtime/helpers/esm/extends.js';import r from'./../ext/@babel/runtime/helpers/esm/defineProperty.js';import t from"react";import{Typography as o}from"@material-ui/core";import n from"@material-ui/core/styles/useTheme";import{formatSnakecaseToSpaces as l}from"../utils/formatters.js";function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(r){var a=r.tId,s=r.lowerCased,c=r.upperCased,p=r.dynamicDataTexts,m=r.capitalized,u=r.trueResult,f=r.originalTextId,y=r.typography,b=r.strong,O=r.small,d=r.translation,j=n().palette;if(!d&&u)return null;if(!d&&f)return a;var g=d||a;if(c&&(g=l(g).toUpperCase()),(s||!d&&a)&&(g=l(g).toLowerCase()),(m||!d&&a)&&(g=g.charAt(0).toUpperCase()+g.slice(1)),p)for(var h=Array.isArray(p)?p:[p],v=0;v<=h.length-1;v+=1)g=g.replace("$v".concat(v+1),h[v]);b&&(g=t.createElement("strong",null,g)),O&&(g=t.createElement("small",null,g));var P=y,w={};return P&&("title"===P.color&&(delete P.color,w=i(i({},w),{},{color:j.text.title})),g=t.createElement(o,e({},P,{style:w}),g)),g}export{s as default};
