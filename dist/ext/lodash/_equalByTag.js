import e from"./_Symbol.js";import r from"./_Uint8Array.js";import t from"./eq.js";import a from"./_equalArrays.js";import o from"./_mapToArray.js";import s from"./_setToArray.js";var c=e?e.prototype:void 0,f=c?c.valueOf:void 0;var n=function(e,c,n,b,m,i,u){switch(n){case"[object DataView]":if(e.byteLength!=c.byteLength||e.byteOffset!=c.byteOffset)return!1;e=e.buffer,c=c.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=c.byteLength||!i(new r(e),new r(c)));case"[object Boolean]":case"[object Date]":case"[object Number]":return t(+e,+c);case"[object Error]":return e.name==c.name&&e.message==c.message;case"[object RegExp]":case"[object String]":return e==c+"";case"[object Map]":var j=o;case"[object Set]":var y=1&b;if(j||(j=s),e.size!=c.size&&!y)return!1;var p=u.get(e);if(p)return p==c;b|=2,u.set(e,c);var l=a(j(e),j(c),b,m,i,u);return u.delete(e),l;case"[object Symbol]":if(f)return f.call(e)==f.call(c)}return!1};export{n as default};
