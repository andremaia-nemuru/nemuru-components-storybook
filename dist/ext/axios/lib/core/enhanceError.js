var s=function(s,e,t,i,n){return s.config=e,t&&(s.code=t),s.request=i,s.response=n,s.isAxiosError=!0,s.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},s};export{s as default};