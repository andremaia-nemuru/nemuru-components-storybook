import r from"./_baseMatches.js";import t from"./_baseMatchesProperty.js";import o from"./identity.js";import e from"./isArray.js";import p from"./property.js";var s=function(s){return"function"==typeof s?s:null==s?o:"object"==typeof s?e(s)?t(s[0],s[1]):r(s):p(s)};export{s as default};