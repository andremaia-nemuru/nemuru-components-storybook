var t={hydrate:function(t){var a=new Date(t);if(Number.isNaN(a.getTime())||!t)return{isoFormat:void 0,dateNumberFormat:void 0,dayNumberFormat:void 0,timeStamp:void 0,sortableDate:void 0,readableDate:void 0};var e=a.getMonth()+1,r=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getDate()).padStart(2,"0");return{isoFormat:a,dateNumberFormat:a.getDate(),dayNumberFormat:a.getDay(),timeStamp:a.getTime(),sortableDate:"".concat(a.getFullYear(),"/").concat(r,"/").concat(o),readableDate:"".concat(a.getDate(),"/").concat(e,"/").concat(a.getFullYear())}},dehydrate:function(t){if(t){var a=new Date(t),e=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0");return"".concat(a.getFullYear(),"-").concat(e,"-").concat(r,"T00:00:00+00:00")}},dehydrateFromEuropeanShortDate:function(t){if(t){var a=t.split("/"),e=a[2].padStart(2,"0"),r=a[1].padStart(2,"0"),o=a[0].padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o,"T00:00:00+00:00")}}};export{t as FormatDateMapper};