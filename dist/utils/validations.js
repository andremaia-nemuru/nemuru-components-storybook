var r=/^(\d{8})([A-Za-z])$/,t=/^[XYZxyz]\d{7,8}[A-Za-z]$/,n=/^ES.{18,20}$/,e=/^(\d{4})([B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z]{3})$/,a=function(n){if(n){if(n.match(r))return"dni";if(n.match(t))return"nie"}return!1},c=function(r){return"TRWAGMYFPDXBNJZSQVHLCKE".charAt(parseInt(r,10)%23)===r.charAt(8)},i=function(r){var t=r.charAt(0);switch(t){case"X":t=0;break;case"Y":t=1;break;case"Z":t=2}return c(t+r.substr(1))},s=function(r){var t=!1;if(r){var n=r.toUpperCase().replace(/\s/,"");switch(a(n)){case"dni":t=c(n);break;case"nie":t=i(n)}}return t},u=function(r){if(!r)return!1;var t=r;return("00"===t.substring(0,2)||"+"===t.substring(0,1)||9===t.length)&&("00"===t.substring(0,2)&&(t="+".concat(r.substring(2))),9===t.length&&(t="+34".concat(r)),!(t.length<9)&&t)};export{n as CUPS_REGEX,r as DNI_REGEX,t as NIE_REGEX,e as SPANISH_LICENSE_PLATE_REGEX,a as spainIdType,c as validDNI,i as validNIE,s as validateDNIorNIE,u as validatePhoneWithPrefix};