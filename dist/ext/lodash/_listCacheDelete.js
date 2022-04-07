import r from"./_assocIndexOf.js";var t=Array.prototype.splice;var a=function(a){var e=this.__data__,o=r(e,a);return!(o<0)&&(o==e.length-1?e.pop():t.call(e,o,1),--this.size,!0)};export{a as default};
