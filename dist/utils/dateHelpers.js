var t=function(t){(t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()))).setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));var e=new Date(Date.UTC(t.getUTCFullYear(),0,1)),a=Math.ceil(((t-e)/864e5+1)/7);return"".concat(a,"/").concat(t.getUTCFullYear())},e=function(t,e){var a=864e5;return Math.ceil((new Date).getTime()/a/e)-Math.ceil(t.getTime()/a/e)},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=t&&new Date(t.valueOf())||new Date;return e.setDate(e.getDate()-(e.getDay()+6)%7),e},n=function(t){return{year:t.getFullYear(),month:String(t.getMonth()+1).padStart(2,"0"),day:String(t.getDate()).padStart(2,"0")}},r=function(t){return"".concat(String(t.getMonth()+1).padStart(2,"0"),"/").concat(t.getFullYear())},o=function(t){return"".concat(t.toLocaleString("default",{month:"long"}).toUpperCase().replace(".","").substr(0,3)," ").concat(t.getFullYear().toString().substr(-2))},c=function(t){return" ".concat(t.getDate().toString()," ").concat(t.toLocaleString("default",{month:"long"}).toUpperCase().replace(".","").substr(0,3))},g=function(t,e){return"".concat(c(t),"-").concat(c(e))},u=function(t,e){var a=t.getDate();return t.setMonth(t.getMonth()+ +e),t.getDate()!=a&&t.setDate(0),t},l=function(t){var e=((new Date).getTime()-FormatDateMapper.hydrate(t).isoFormat.getTime())/31536e6;return Math.ceil(e)};export{u as addMonthsToDate,a as getCurrentWeekMonday,c as getDayAbbrName,o as getMonthAbbrName,r as getMonthYearString,e as getNumberOfPeriodInDate,t as getNumberOfWeek,g as getPeriodAbbrName,n as getYearMonthAndDay,l as getYearsSinceAutoRegistration};