import t from"./_mapCacheClear.js";import e from"./_mapCacheDelete.js";import o from"./_mapCacheGet.js";import r from"./_mapCacheHas.js";import p from"./_mapCacheSet.js";function a(t){var e=-1,o=null==t?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=t,a.prototype.delete=e,a.prototype.get=o,a.prototype.has=r,a.prototype.set=p;var m=a;export{m as default};
