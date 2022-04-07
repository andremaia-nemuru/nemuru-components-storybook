import e from'./../ext/@babel/runtime/helpers/esm/toConsumableArray.js';import a from'./../ext/@babel/runtime/helpers/esm/objectWithoutProperties.js';import t from"react";import i from"prop-types";import{Box as s}from"@material-ui/core";import r from'./../ext/react-chartjs-2/es/index.js';var o=["chartDataset","chartDatasets","chartLabels","chartMaxValue","barBackgroundColor","barThickness","maintainAspectRatio","displayLegend","displayGridLines","xAxesFontSize","yAxesFontSize","yAxisTicksCallback","defaultTicksStepSize","defaultTicksMaxValue"];function n(i){var n=i.chartDataset,l=i.chartDatasets,c=i.chartLabels,d=i.chartMaxValue,u=i.barBackgroundColor,p=void 0===u?"lightgrey":u,b=i.barThickness,m=void 0===b?8:b,k=i.maintainAspectRatio,x=void 0!==k&&k,y=i.displayLegend,f=void 0!==y&&y,h=i.displayGridLines,A=void 0!==h&&h,g=i.xAxesFontSize,S=void 0===g?10:g,T=i.yAxesFontSize,v=void 0===T?10:T,z=i.yAxisTicksCallback,L=void 0===z?function(e){return e}:z,C=i.defaultTicksStepSize,R=void 0===C?500:C,j=i.defaultTicksMaxValue,F=void 0===j?2e4:j,M=a(i,o);n&&(l=[n]);var V={labels:c,datasets:[].concat(e(l),[{label:"greyBars",barThickness:m,backgroundColor:p,data:n.data.map((function(e){return d-e}))}])},D={maintainAspectRatio:x,legend:{display:f},tooltips:{filter:function(e){return 0===e.datasetIndex}},scales:{xAxes:[{stacked:!0,gridLines:{display:A},ticks:{fontSize:S}}],yAxes:[{stacked:!0,ticks:{beginAtZero:!0,stepSize:d>0?d/4:R,max:d>0?d:F,callback:L,fontSize:v},gridLines:{display:A}}]}};return t.createElement(s,M,t.createElement(r,{type:"bar",data:V,options:D}))}n.propTypes={chartDataset:i.object.isRequired,chartLabels:i.arrayOf(i.string).isRequired,chartMaxValue:i.number.isRequired,barBackgroundColor:i.string,barThickness:i.number,maintainAspectRatio:i.bool,displayLegend:i.bool,displayGridLines:i.bool,xAxesFontSize:i.number,yAxesFontSize:i.number,yAxisTicksCallback:i.func,defaultTicksStepSize:i.number,defaultTicksMaxValue:i.number};export{n as default};
