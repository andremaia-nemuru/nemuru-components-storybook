var a=function(a){var e=a.name,t=a.type,p=a.payload,n=a.createdAt;window.parent.postMessage({name:e,type:t,payload:p,createdAt:n},"*")};export{a as dispatchEventToParentWindow};
