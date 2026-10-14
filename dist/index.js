"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=u(function(g,v){
function y(e,r,a,i,p){var n,s;if(e<=0)return-1;for(n=p,s=0;s<e;s++){if(a[n]<=r)return s;n+=i}return-1}v.exports=y
});var o=u(function(k,f){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=t();function h(e,r,a,i){return O(e,r,a,i,E(e,i))}f.exports=h
});var c=u(function(w,x){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=o(),T=t();L(d,"ndarray",T);x.exports=d
});var j=require("path").join,m=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=c(),q,l=m(j(__dirname,"./native.js"));R(l)?q=_:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
