import e from"react";import{Box as t,Grid as n,Typography as r}from"@material-ui/core";import{useTheme as i}from"@material-ui/styles";import a from"./IconWithCircle.js";function l(l){var o=l.variant,c=l.isScreenXs,m=l.messageContent,p=i(),s=p.palette,d=p.customBorderRadius;return o&&m&&e.createElement(t,{container:"true",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:1},e.createElement(t,{style:{top:c?16:24,position:"relative"}},e.createElement(a,{backgroundColor:s[o.type].main,height:c?26:40,width:c?26:40,style:{fontSize:c?16:24,color:s[o.type].contrastText}},o.icon)),e.createElement(t,{container:"true",width:1,bgcolor:s[o.type].light,style:{borderRadius:d.paper,paddingTop:c?14:26,paddingBottom:10,width:"100%"}},e.createElement(n,{container:!0,justifyContent:"center",spacing:0},e.createElement(n,{item:!0},c?null:e.createElement(r,{variant:"subtitle2",align:"center",style:{color:s.text.neutral,paddingInline:"16px",paddingTop:"4px"}},e.createElement("strong",null,m.title)),e.createElement(n,{item:!0,style:{paddingInline:"16px",paddingBlock:"4px",textAlign:"center"}},e.createElement(r,{variant:"caption",align:"center",style:{color:s.text.neutral}},m.body))))))}export{l as default};
