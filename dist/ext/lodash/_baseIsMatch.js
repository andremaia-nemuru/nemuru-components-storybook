import r from"./_Stack.js";import e from"./_baseIsEqual.js";var i=function(i,t,f,n){var a=f.length,o=a,u=!n;if(null==i)return!o;for(i=Object(i);a--;){var v=f[a];if(u&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++a<o;){var l=(v=f[a])[0],s=i[l],m=v[1];if(u&&v[2]){if(void 0===s&&!(l in i))return!1}else{var c=new r;if(n)var d=n(s,m,l,i,t,c);if(!(void 0===d?e(m,s,3,n,c):d))return!1}}return!0};export{i as default};
