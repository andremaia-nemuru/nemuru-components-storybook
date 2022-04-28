function r(r){if(r)return r.replace(/\s/g,"").toUpperCase()}function t(r){return r&&r.replace(/_/g," ")}function n(r){return r.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function e(r){return new Intl.NumberFormat("ca-CA",{minimumFractionDigits:2,maximumFractionDigits:2}).format(r)}function i(r,t){var n=0===Number((r%1).toFixed(2)),e=void 0===t?n?0:2:t;return new Intl.NumberFormat("ca-CA",{style:"currency",currency:"EUR",minimumFractionDigits:e,maximumFractionDigits:e}).format(r)}function u(r,t){return i(r,t).replace("€","").trim()}function o(r){return new Intl.NumberFormat("es-ES",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format(r)}function c(r){return r?Number(r.replace(/\./g,"").replace(/,/g,".").slice(0,-2)):null}var a=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=r/1e3;return n>=1e3?"".concat((n/1e3).toFixed(t),"M"):n<1?r.toFixed(t):"".concat(n.toFixed(t),"K")},m=function(r){return r.split(" ").map((function(r){return r[0].toUpperCase()+r.substring(1)})).join(" ")};export{m as capitalizeEachWord,a as formatAmountForDisplay,r as formatDeleteSpacesInStringAndUpperCase,i as formatMoney,u as formatMoneyNum,e as formatNumber,o as formatPercent,t as formatSnakecaseToSpaces,n as normalizeText,c as parseStringAmountWithUnitToNumber};