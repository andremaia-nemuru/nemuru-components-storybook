import t from"../utils.js";import e from"../helpers/buildURL.js";import r from"./InterceptorManager.js";import o from"./dispatchRequest.js";import s from"./mergeConfig.js";import i from"../helpers/validator.js";var n=i.validators;function a(t){this.defaults=t,this.interceptors={request:new r,response:new r}}a.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;void 0!==r&&i.assertOptions(r,{silentJSONParsing:n.transitional(n.boolean),forcedJSONParsing:n.transitional(n.boolean),clarifyTimeoutError:n.transitional(n.boolean)},!1);var a=[],f=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(f=f&&t.synchronous,a.unshift(t.fulfilled,t.rejected))}));var h,u=[];if(this.interceptors.response.forEach((function(t){u.push(t.fulfilled,t.rejected)})),!f){var l=[o,void 0];for(Array.prototype.unshift.apply(l,a),l=l.concat(u),h=Promise.resolve(e);l.length;)h=h.then(l.shift(),l.shift());return h}for(var p=e;a.length;){var c=a.shift(),d=a.shift();try{p=c(p)}catch(t){d(t);break}}try{h=o(p)}catch(t){return Promise.reject(t)}for(;u.length;)h=h.then(u.shift(),u.shift());return h},a.prototype.getUri=function(t){return t=s(this.defaults,t),e(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},t.forEach(["delete","get","head","options"],(function(t){a.prototype[t]=function(e,r){return this.request(s(r||{},{method:t,url:e,data:(r||{}).data}))}})),t.forEach(["post","put","patch"],(function(t){a.prototype[t]=function(e,r,o){return this.request(s(o||{},{method:t,url:e,data:r}))}}));var f=a;export{f as default};
