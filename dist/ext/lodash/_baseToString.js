import r from"./_Symbol.js";import o from"./_arrayMap.js";import t from"./isArray.js";import i from"./isSymbol.js";var f=r?r.prototype:void 0,a=f?f.toString:void 0;var m=function r(f){if("string"==typeof f)return f;if(t(f))return o(f,r)+"";if(i(f))return a?a.call(f):"";var m=f+"";return"0"==m&&1/f==-Infinity?"-0":m};export{m as default};