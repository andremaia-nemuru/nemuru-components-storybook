import t from"../utils.js";var e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],r=function(r){var i,o,n,a={};return r?(t.forEach(r.split("\n"),(function(r){if(n=r.indexOf(":"),i=t.trim(r.substr(0,n)).toLowerCase(),o=t.trim(r.substr(n+1)),i){if(a[i]&&e.indexOf(i)>=0)return;a[i]="set-cookie"===i?(a[i]?a[i]:[]).concat([o]):a[i]?a[i]+", "+o:o}})),a):a};export{r as default};