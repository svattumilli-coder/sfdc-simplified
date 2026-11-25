var wf=Object.defineProperty;var Cf=(e,t,n)=>t in e?wf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Wt=(e,t,n)=>Cf(e,typeof t!="symbol"?t+"":t,n);function Af(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Tf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fp={exports:{}},qi={},Up={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),Lf=Symbol.for("react.portal"),If=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),Mf=Symbol.for("react.memo"),_f=Symbol.for("react.lazy"),Fu=Symbol.iterator;function jf(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,zp={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=zp,this.updater=n||Wp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qp(){}Qp.prototype=Xr.prototype;function gc(e,t,n){this.props=e,this.context=t,this.refs=zp,this.updater=n||Wp}var fc=gc.prototype=new Qp;fc.constructor=gc;Hp(fc,Xr.prototype);fc.isPureReactComponent=!0;var Uu=Array.isArray,$p=Object.prototype.hasOwnProperty,yc={current:null},Vp={key:!0,ref:!0,__self:!0,__source:!0};function Gp(e,t,n){var r,s={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)$p.call(t,r)&&!Vp.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:ra,type:e,key:a,ref:o,props:s,_owner:yc.current}}function Pf(e,t){return{$$typeof:ra,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra}function qf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function Io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qf(""+e.key):t.toString(36)}function Ya(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ra:case Lf:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Io(o,0):r,Uu(s)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),Ya(s,t,n,"",function(u){return u})):s!=null&&(xc(s)&&(s=Pf(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Wu,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Uu(e))for(var c=0;c<e.length;c++){a=e[c];var l=r+Io(a,c);o+=Ya(a,t,n,l,s)}else if(l=jf(e),typeof l=="function")for(e=l.call(e),c=0;!(a=e.next()).done;)a=a.value,l=r+Io(a,c++),o+=Ya(a,t,n,l,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(e,t,n){if(e==null)return e;var r=[],s=0;return Ya(e,r,"","",function(a){return t.call(n,a,s++)}),r}function Bf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ka={transition:null},Ff={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:yc};function Jp(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ea,forEach:function(e,t,n){Ea(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ea(e,function(){t++}),t},toArray:function(e){return Ea(e,function(t){return t})||[]},only:function(e){if(!xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Xr;Y.Fragment=If;Y.Profiler=Df;Y.PureComponent=gc;Y.StrictMode=Ef;Y.Suspense=Rf;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;Y.act=Jp;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hp({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=yc.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)$p.call(t,l)&&!Vp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:ra,type:e.type,key:s,ref:a,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Of,_context:e},e.Consumer=e};Y.createElement=Gp;Y.createFactory=function(e){var t=Gp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:kf,render:e}};Y.isValidElement=xc;Y.lazy=function(e){return{$$typeof:_f,_payload:{_status:-1,_result:e},_init:Bf}};Y.memo=function(e,t){return{$$typeof:Mf,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ka.transition;Ka.transition={};try{e()}finally{Ka.transition=t}};Y.unstable_act=Jp;Y.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Y.useContext=function(e){return Ge.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Y.useId=function(){return Ge.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Y.useRef=function(e){return Ge.current.useRef(e)};Y.useState=function(e){return Ge.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ge.current.useTransition()};Y.version="18.3.1";Up.exports=Y;var b=Up.exports;const nr=Tf(b),Uf=Af({__proto__:null,default:nr},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=b,Hf=Symbol.for("react.element"),zf=Symbol.for("react.fragment"),Qf=Object.prototype.hasOwnProperty,$f=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vf={key:!0,ref:!0,__self:!0,__source:!0};function Yp(e,t,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Qf.call(t,r)&&!Vf.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Hf,type:e,key:a,ref:o,props:s,_owner:$f.current}}qi.Fragment=zf;qi.jsx=Yp;qi.jsxs=Yp;Fp.exports=qi;var i=Fp.exports,Kp={exports:{}},pt={},Xp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,q){var F=R.length;R.push(q);e:for(;0<F;){var B=F-1>>>1,$=R[B];if(0<s($,q))R[B]=q,R[F]=$,F=B;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var q=R[0],F=R.pop();if(F!==q){R[0]=F;e:for(var B=0,$=R.length,te=$>>>1;B<te;){var Ce=2*(B+1)-1,Be=R[Ce],rt=Ce+1,_t=R[rt];if(0>s(Be,F))rt<$&&0>s(_t,Be)?(R[B]=_t,R[rt]=F,B=rt):(R[B]=Be,R[Ce]=F,B=Ce);else if(rt<$&&0>s(_t,F))R[B]=_t,R[rt]=F,B=rt;else break e}}return q}function s(R,q){var F=R.sortIndex-q.sortIndex;return F!==0?F:R.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var l=[],u=[],p=1,h=null,g=3,x=!1,C=!1,S=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=R)r(u),q.sortIndex=q.expirationTime,t(l,q);else break;q=n(u)}}function T(R){if(S=!1,y(R),!C)if(n(l)!==null)C=!0,V(L);else{var q=n(u);q!==null&&re(T,q.startTime-R)}}function L(R,q){C=!1,S&&(S=!1,f(k),k=-1),x=!0;var F=g;try{for(y(q),h=n(l);h!==null&&(!(h.expirationTime>q)||R&&!K());){var B=h.callback;if(typeof B=="function"){h.callback=null,g=h.priorityLevel;var $=B(h.expirationTime<=q);q=e.unstable_now(),typeof $=="function"?h.callback=$:h===n(l)&&r(l),y(q)}else r(l);h=n(l)}if(h!==null)var te=!0;else{var Ce=n(u);Ce!==null&&re(T,Ce.startTime-q),te=!1}return te}finally{h=null,g=F,x=!1}}var E=!1,D=null,k=-1,U=5,M=-1;function K(){return!(e.unstable_now()-M<U)}function Se(){if(D!==null){var R=e.unstable_now();M=R;var q=!0;try{q=D(!0,R)}finally{q?ne():(E=!1,D=null)}}else E=!1}var ne;if(typeof m=="function")ne=function(){m(Se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,P=fe.port2;fe.port1.onmessage=Se,ne=function(){P.postMessage(null)}}else ne=function(){w(Se,0)};function V(R){D=R,E||(E=!0,ne())}function re(R,q){k=w(function(){R(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){C||x||(C=!0,V(L))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var F=g;g=q;try{return R()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=g;g=R;try{return q()}finally{g=F}},e.unstable_scheduleCallback=function(R,q,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,R){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=F+$,R={id:p++,callback:q,priorityLevel:R,startTime:F,expirationTime:$,sortIndex:-1},F>B?(R.sortIndex=F,t(u,R),n(l)===null&&R===n(u)&&(S?(f(k),k=-1):S=!0,re(T,F-B))):(R.sortIndex=$,t(l,R),C||x||(C=!0,V(L))),R},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(R){var q=g;return function(){var F=g;g=q;try{return R.apply(this,arguments)}finally{g=F}}}})(Zp);Xp.exports=Zp;var Gf=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf=b,ut=Gf;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eh=new Set,Ps={};function ur(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Ps[e]=t,e=0;e<t.length;e++)eh.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},zu={};function Kf(e){return ml.call(zu,e)?!0:ml.call(Hu,e)?!1:Yf.test(e)?zu[e]=!0:(Hu[e]=!0,!1)}function Xf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,t,n,r){if(t===null||typeof t>"u"||Xf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var bc=/[\-:]([a-z])/g;function vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bc,vc);qe[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bc,vc);qe[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bc,vc);qe[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sc(e,t,n,r){var s=qe.hasOwnProperty(t)?qe[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zf(t,n,s,r)&&(n=null),r||s===null?Kf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),th=Symbol.for("react.provider"),nh=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),rh=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function os(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Eo;function bs(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var Do=!1;function Oo(e,t){if(!e||Do)return"";Do=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,c=a.length-1;1<=o&&0<=c&&s[o]!==a[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==a[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==a[c]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=c);break}}}finally{Do=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bs(e):""}function ey(e){switch(e.tag){case 5:return bs(e.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return e=Oo(e.type,!1),e;case 11:return e=Oo(e.type.render,!1),e;case 1:return e=Oo(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ar:return"Fragment";case Cr:return"Portal";case gl:return"Profiler";case wc:return"StrictMode";case fl:return"Suspense";case yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nh:return(e.displayName||"Context")+".Consumer";case th:return(e._context.displayName||"Context")+".Provider";case Cc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ac:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function ty(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ny(e){var t=sh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oa(e){e._valueTracker||(e._valueTracker=ny(e))}function ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ih(e,t){t=t.checked,t!=null&&Sc(e,"checked",t,!1)}function vl(e,t){ih(e,t);var n=qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sl(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vs=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(vs(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qn(n)}}function oh(e,t){var n=qn(t.value),r=qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Na,ch=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){ry.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ts[t]=Ts[e]})});function uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ts.hasOwnProperty(e)&&Ts[e]?(""+t).trim():t+"px"}function dh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var sy=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(sy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ll=null;function Tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Pr=null,qr=null;function Yu(e){if(e=ia(e)){if(typeof Il!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Hi(t),Il(e.stateNode,e.type,t))}}function ph(e){Pr?qr?qr.push(e):qr=[e]:Pr=e}function hh(){if(Pr){var e=Pr,t=qr;if(qr=Pr=null,Yu(e),t)for(e=0;e<t.length;e++)Yu(t[e])}}function mh(e,t){return e(t)}function gh(){}var No=!1;function fh(e,t,n){if(No)return e(t,n);No=!0;try{return mh(e,t,n)}finally{No=!1,(Pr!==null||qr!==null)&&(gh(),hh())}}function Bs(e,t){var n=e.stateNode;if(n===null)return null;var r=Hi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var El=!1;if(on)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){El=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{El=!1}function ay(e,t,n,r,s,a,o,c,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Ls=!1,ci=null,ui=!1,Dl=null,iy={onError:function(e){Ls=!0,ci=e}};function oy(e,t,n,r,s,a,o,c,l){Ls=!1,ci=null,ay.apply(iy,arguments)}function ly(e,t,n,r,s,a,o,c,l){if(oy.apply(this,arguments),Ls){if(Ls){var u=ci;Ls=!1,ci=null}else throw Error(O(198));ui||(ui=!0,Dl=u)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ku(e){if(dr(e)!==e)throw Error(O(188))}function cy(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Ku(s),e;if(a===r)return Ku(s),t;a=a.sibling}throw Error(O(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,r=a;break}if(c===r){o=!0,r=s,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=s;break}if(c===r){o=!0,r=a,n=s;break}c=c.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function xh(e){return e=cy(e),e!==null?bh(e):null}function bh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bh(e);if(t!==null)return t;e=e.sibling}return null}var vh=ut.unstable_scheduleCallback,Xu=ut.unstable_cancelCallback,uy=ut.unstable_shouldYield,dy=ut.unstable_requestPaint,Ie=ut.unstable_now,py=ut.unstable_getCurrentPriorityLevel,Lc=ut.unstable_ImmediatePriority,Sh=ut.unstable_UserBlockingPriority,di=ut.unstable_NormalPriority,hy=ut.unstable_LowPriority,wh=ut.unstable_IdlePriority,Bi=null,Jt=null;function my(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:yy,gy=Math.log,fy=Math.LN2;function yy(e){return e>>>=0,e===0?32:31-(gy(e)/fy|0)|0}var ka=64,Ra=4194304;function Ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?r=Ss(c):(a&=o,a!==0&&(r=Ss(a)))}else o=n&~s,o!==0?r=Ss(o):a!==0&&(r=Ss(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),s=1<<n,r|=e[n],t&=~s;return r}function xy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function by(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),c=1<<o,l=s[o];l===-1?(!(c&n)||c&r)&&(s[o]=xy(c,t)):l<=t&&(e.expiredLanes|=c),a&=~c}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ch(){var e=ka;return ka<<=1,!(ka&4194240)&&(ka=64),e}function ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function vy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Nt(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function Ic(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var se=0;function Ah(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Th,Ec,Lh,Ih,Eh,Nl=!1,Ma=[],En=null,Dn=null,On=null,Fs=new Map,Us=new Map,wn=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(t.pointerId)}}function cs(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ia(t),t!==null&&Ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function wy(e,t,n,r,s){switch(t){case"focusin":return En=cs(En,e,t,n,r,s),!0;case"dragenter":return Dn=cs(Dn,e,t,n,r,s),!0;case"mouseover":return On=cs(On,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Fs.set(a,cs(Fs.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,Us.set(a,cs(Us.get(a)||null,e,t,n,r,s)),!0}return!1}function Dh(e){var t=Zn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=yh(n),t!==null){e.blockedOn=t,Eh(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ll=r,n.target.dispatchEvent(r),Ll=null}else return t=ia(n),t!==null&&Ec(t),e.blockedOn=n,!1;t.shift()}return!0}function ed(e,t,n){Xa(e)&&n.delete(t)}function Cy(){Nl=!1,En!==null&&Xa(En)&&(En=null),Dn!==null&&Xa(Dn)&&(Dn=null),On!==null&&Xa(On)&&(On=null),Fs.forEach(ed),Us.forEach(ed)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,Cy)))}function Ws(e){function t(s){return us(s,e)}if(0<Ma.length){us(Ma[0],e);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&us(En,e),Dn!==null&&us(Dn,e),On!==null&&us(On,e),Fs.forEach(t),Us.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&wn.shift()}var Br=pn.ReactCurrentBatchConfig,hi=!0;function Ay(e,t,n,r){var s=se,a=Br.transition;Br.transition=null;try{se=1,Dc(e,t,n,r)}finally{se=s,Br.transition=a}}function Ty(e,t,n,r){var s=se,a=Br.transition;Br.transition=null;try{se=4,Dc(e,t,n,r)}finally{se=s,Br.transition=a}}function Dc(e,t,n,r){if(hi){var s=kl(e,t,n,r);if(s===null)Wo(e,t,r,mi,n),Zu(e,r);else if(wy(s,e,t,n,r))r.stopPropagation();else if(Zu(e,r),t&4&&-1<Sy.indexOf(e)){for(;s!==null;){var a=ia(s);if(a!==null&&Th(a),a=kl(e,t,n,r),a===null&&Wo(e,t,r,mi,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else Wo(e,t,r,null,n)}}var mi=null;function kl(e,t,n,r){if(mi=null,e=Tc(r),e=Zn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mi=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case Lc:return 1;case Sh:return 4;case di:case hy:return 16;case wh:return 536870912;default:return 16}default:return 16}}var Tn=null,Oc=null,Za=null;function Nh(){if(Za)return Za;var e,t=Oc,n=t.length,r,s="value"in Tn?Tn.value:Tn.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return Za=s.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function td(){return!1}function ht(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_a:td,this.isPropagationStopped=td,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=ht(Zr),aa=be({},Zr,{view:0,detail:0}),Ly=ht(aa),Ro,Mo,ds,Fi=be({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ds&&(ds&&e.type==="mousemove"?(Ro=e.screenX-ds.screenX,Mo=e.screenY-ds.screenY):Mo=Ro=0,ds=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),nd=ht(Fi),Iy=be({},Fi,{dataTransfer:0}),Ey=ht(Iy),Dy=be({},aa,{relatedTarget:0}),_o=ht(Dy),Oy=be({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=ht(Oy),ky=be({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ry=ht(ky),My=be({},Zr,{data:0}),rd=ht(My),_y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Py[e])?!!t[e]:!1}function kc(){return qy}var By=be({},aa,{key:function(e){if(e.key){var t=_y[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fy=ht(By),Uy=be({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=ht(Uy),Wy=be({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Hy=ht(Wy),zy=be({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=ht(zy),$y=be({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=ht($y),Gy=[9,13,27,32],Rc=on&&"CompositionEvent"in window,Is=null;on&&"documentMode"in document&&(Is=document.documentMode);var Jy=on&&"TextEvent"in window&&!Is,kh=on&&(!Rc||Is&&8<Is&&11>=Is),ad=" ",id=!1;function Rh(e,t){switch(e){case"keyup":return Gy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Yy(e,t){switch(e){case"compositionend":return Mh(t);case"keypress":return t.which!==32?null:(id=!0,ad);case"textInput":return e=t.data,e===ad&&id?null:e;default:return null}}function Ky(e,t){if(Tr)return e==="compositionend"||!Rc&&Rh(e,t)?(e=Nh(),Za=Oc=Tn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kh&&t.locale!=="ko"?null:t.data;default:return null}}var Xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xy[e.type]:t==="textarea"}function _h(e,t,n,r){ph(r),t=gi(t,"onChange"),0<t.length&&(n=new Nc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Es=null,Hs=null;function Zy(e){$h(e,0)}function Ui(e){var t=Er(e);if(ah(t))return e}function ex(e,t){if(e==="change")return t}var jh=!1;if(on){var jo;if(on){var Po="oninput"in document;if(!Po){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),Po=typeof ld.oninput=="function"}jo=Po}else jo=!1;jh=jo&&(!document.documentMode||9<document.documentMode)}function cd(){Es&&(Es.detachEvent("onpropertychange",Ph),Hs=Es=null)}function Ph(e){if(e.propertyName==="value"&&Ui(Hs)){var t=[];_h(t,Hs,e,Tc(e)),fh(Zy,t)}}function tx(e,t,n){e==="focusin"?(cd(),Es=t,Hs=n,Es.attachEvent("onpropertychange",Ph)):e==="focusout"&&cd()}function nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(Hs)}function rx(e,t){if(e==="click")return Ui(t)}function sx(e,t){if(e==="input"||e==="change")return Ui(t)}function ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:ax;function zs(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ml.call(t,s)||!Mt(e[s],t[s]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dd(e,t){var n=ud(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ud(n)}}function qh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ix(e){var t=Bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qh(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=dd(n,a);var o=dd(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ox=on&&"documentMode"in document&&11>=document.documentMode,Lr=null,Rl=null,Ds=null,Ml=!1;function pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||Lr==null||Lr!==li(r)||(r=Lr,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&zs(Ds,r)||(Ds=r,r=gi(Rl,"onSelect"),0<r.length&&(t=new Nc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},qo={},Fh={};on&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Wi(e){if(qo[e])return qo[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fh)return qo[e]=t[n];return e}var Uh=Wi("animationend"),Wh=Wi("animationiteration"),Hh=Wi("animationstart"),zh=Wi("transitionend"),Qh=new Map,hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){Qh.set(e,t),ur(t,[e])}for(var Bo=0;Bo<hd.length;Bo++){var Fo=hd[Bo],lx=Fo.toLowerCase(),cx=Fo[0].toUpperCase()+Fo.slice(1);Un(lx,"on"+cx)}Un(Uh,"onAnimationEnd");Un(Wh,"onAnimationIteration");Un(Hh,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(zh,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function md(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ly(r,t,void 0,e),e.currentTarget=null}function $h(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],l=c.instance,u=c.currentTarget;if(c=c.listener,l!==a&&s.isPropagationStopped())break e;md(s,c,u),a=l}else for(o=0;o<r.length;o++){if(c=r[o],l=c.instance,u=c.currentTarget,c=c.listener,l!==a&&s.isPropagationStopped())break e;md(s,c,u),a=l}}}if(ui)throw e=Dl,ui=!1,Dl=null,e}function he(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(Vh(t,e,2,!1),n.add(r))}function Uo(e,t,n){var r=0;t&&(r|=4),Vh(n,e,r,t)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Qs(e){if(!e[Pa]){e[Pa]=!0,eh.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||Uo(n,!1,e),Uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pa]||(t[Pa]=!0,Uo("selectionchange",!1,t))}}function Vh(e,t,n,r){switch(Oh(t)){case 1:var s=Ay;break;case 4:s=Ty;break;default:s=Dc}n=s.bind(null,t,n,e),s=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Wo(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;c!==null;){if(o=Zn(c),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}c=c.parentNode}}r=r.return}fh(function(){var u=a,p=Tc(n),h=[];e:{var g=Qh.get(e);if(g!==void 0){var x=Nc,C=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":x=Fy;break;case"focusin":C="focus",x=_o;break;case"focusout":C="blur",x=_o;break;case"beforeblur":case"afterblur":x=_o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Hy;break;case Uh:case Wh:case Hh:x=Ny;break;case zh:x=Qy;break;case"scroll":x=Ly;break;case"wheel":x=Vy;break;case"copy":case"cut":case"paste":x=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=sd}var S=(t&4)!==0,w=!S&&e==="scroll",f=S?g!==null?g+"Capture":null:g;S=[];for(var m=u,y;m!==null;){y=m;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,f!==null&&(T=Bs(m,f),T!=null&&S.push($s(m,T,y)))),w)break;m=m.return}0<S.length&&(g=new x(g,C,null,n,p),h.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Ll&&(C=n.relatedTarget||n.fromElement)&&(Zn(C)||C[ln]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(C=n.relatedTarget||n.toElement,x=u,C=C?Zn(C):null,C!==null&&(w=dr(C),C!==w||C.tag!==5&&C.tag!==6)&&(C=null)):(x=null,C=u),x!==C)){if(S=nd,T="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=sd,T="onPointerLeave",f="onPointerEnter",m="pointer"),w=x==null?g:Er(x),y=C==null?g:Er(C),g=new S(T,m+"leave",x,n,p),g.target=w,g.relatedTarget=y,T=null,Zn(p)===u&&(S=new S(f,m+"enter",C,n,p),S.target=y,S.relatedTarget=w,T=S),w=T,x&&C)t:{for(S=x,f=C,m=0,y=S;y;y=wr(y))m++;for(y=0,T=f;T;T=wr(T))y++;for(;0<m-y;)S=wr(S),m--;for(;0<y-m;)f=wr(f),y--;for(;m--;){if(S===f||f!==null&&S===f.alternate)break t;S=wr(S),f=wr(f)}S=null}else S=null;x!==null&&gd(h,g,x,S,!1),C!==null&&w!==null&&gd(h,w,C,S,!0)}}e:{if(g=u?Er(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var L=ex;else if(od(g))if(jh)L=sx;else{L=nx;var E=tx}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=rx);if(L&&(L=L(e,u))){_h(h,L,n,p);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Sl(g,"number",g.value)}switch(E=u?Er(u):window,e){case"focusin":(od(E)||E.contentEditable==="true")&&(Lr=E,Rl=u,Ds=null);break;case"focusout":Ds=Rl=Lr=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,pd(h,n,p);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":pd(h,n,p)}var D;if(Rc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Tr?Rh(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(kh&&n.locale!=="ko"&&(Tr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Tr&&(D=Nh()):(Tn=p,Oc="value"in Tn?Tn.value:Tn.textContent,Tr=!0)),E=gi(u,k),0<E.length&&(k=new rd(k,e,null,n,p),h.push({event:k,listeners:E}),D?k.data=D:(D=Mh(n),D!==null&&(k.data=D)))),(D=Jy?Yy(e,n):Ky(e,n))&&(u=gi(u,"onBeforeInput"),0<u.length&&(p=new rd("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=D))}$h(h,t)})}function $s(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Bs(e,n),a!=null&&r.unshift($s(e,a,s)),a=Bs(e,t),a!=null&&r.push($s(e,a,s))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gd(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var c=n,l=c.alternate,u=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&u!==null&&(c=u,s?(l=Bs(n,a),l!=null&&o.unshift($s(n,l,c))):s||(l=Bs(n,a),l!=null&&o.push($s(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var dx=/\r\n?/g,px=/\u0000|\uFFFD/g;function fd(e){return(typeof e=="string"?e:""+e).replace(dx,`
`).replace(px,"")}function qa(e,t,n){if(t=fd(t),fd(e)!==t&&n)throw Error(O(425))}function fi(){}var _l=null,jl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(gx)}:ql;function gx(e){setTimeout(function(){throw e})}function Ho(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Ws(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ws(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var es=Math.random().toString(36).slice(2),Vt="__reactFiber$"+es,Vs="__reactProps$"+es,ln="__reactContainer$"+es,Bl="__reactEvents$"+es,fx="__reactListeners$"+es,yx="__reactHandles$"+es;function Zn(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[Vt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function ia(e){return e=e[Vt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Hi(e){return e[Vs]||null}var Fl=[],Dr=-1;function Wn(e){return{current:e}}function me(e){0>Dr||(e.current=Fl[Dr],Fl[Dr]=null,Dr--)}function ue(e,t){Dr++,Fl[Dr]=e.current,e.current=t}var Bn={},Qe=Wn(Bn),et=Wn(!1),ar=Bn;function Qr(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function tt(e){return e=e.childContextTypes,e!=null}function yi(){me(et),me(Qe)}function bd(e,t,n){if(Qe.current!==Bn)throw Error(O(168));ue(Qe,t),ue(et,n)}function Gh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(O(108,ty(e)||"Unknown",s));return be({},n,r)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,ar=Qe.current,ue(Qe,e),ue(et,et.current),!0}function vd(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Gh(e,t,ar),r.__reactInternalMemoizedMergedChildContext=e,me(et),me(Qe),ue(Qe,e)):me(et),ue(et,n)}var nn=null,zi=!1,zo=!1;function Jh(e){nn===null?nn=[e]:nn.push(e)}function xx(e){zi=!0,Jh(e)}function Hn(){if(!zo&&nn!==null){zo=!0;var e=0,t=se;try{var n=nn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,zi=!1}catch(s){throw nn!==null&&(nn=nn.slice(e+1)),vh(Lc,Hn),s}finally{se=t,zo=!1}}return null}var Or=[],Nr=0,bi=null,vi=0,yt=[],xt=0,ir=null,rn=1,sn="";function Kn(e,t){Or[Nr++]=vi,Or[Nr++]=bi,bi=e,vi=t}function Yh(e,t,n){yt[xt++]=rn,yt[xt++]=sn,yt[xt++]=ir,ir=e;var r=rn;e=sn;var s=32-Nt(r)-1;r&=~(1<<s),n+=1;var a=32-Nt(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,rn=1<<32-Nt(t)+s|n<<s|r,sn=a+e}else rn=1<<a|n<<s|r,sn=e}function _c(e){e.return!==null&&(Kn(e,1),Yh(e,1,0))}function jc(e){for(;e===bi;)bi=Or[--Nr],Or[Nr]=null,vi=Or[--Nr],Or[Nr]=null;for(;e===ir;)ir=yt[--xt],yt[xt]=null,sn=yt[--xt],yt[xt]=null,rn=yt[--xt],yt[xt]=null}var ct=null,lt=null,ge=!1,Et=null;function Kh(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,lt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:rn,overflow:sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,lt=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(ge){var t=lt;if(t){var n=t;if(!Sd(e,t)){if(Ul(e))throw Error(O(418));t=Nn(n.nextSibling);var r=ct;t&&Sd(e,t)?Kh(r,n):(e.flags=e.flags&-4097|2,ge=!1,ct=e)}}else{if(Ul(e))throw Error(O(418));e.flags=e.flags&-4097|2,ge=!1,ct=e}}}function wd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ba(e){if(e!==ct)return!1;if(!ge)return wd(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=lt)){if(Ul(e))throw Xh(),Error(O(418));for(;t;)Kh(e,t),t=Nn(t.nextSibling)}if(wd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ct?Nn(e.stateNode.nextSibling):null;return!0}function Xh(){for(var e=lt;e;)e=Nn(e.nextSibling)}function $r(){lt=ct=null,ge=!1}function Pc(e){Et===null?Et=[e]:Et.push(e)}var bx=pn.ReactCurrentBatchConfig;function ps(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var c=s.refs;o===null?delete c[a]:c[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Fa(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cd(e){var t=e._init;return t(e._payload)}function Zh(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function s(f,m){return f=_n(f,m),f.index=0,f.sibling=null,f}function a(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,m,y,T){return m===null||m.tag!==6?(m=Ko(y,f.mode,T),m.return=f,m):(m=s(m,y),m.return=f,m)}function l(f,m,y,T){var L=y.type;return L===Ar?p(f,m,y.props.children,T,y.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===xn&&Cd(L)===m.type)?(T=s(m,y.props),T.ref=ps(f,m,y),T.return=f,T):(T=oi(y.type,y.key,y.props,null,f.mode,T),T.ref=ps(f,m,y),T.return=f,T)}function u(f,m,y,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Xo(y,f.mode,T),m.return=f,m):(m=s(m,y.children||[]),m.return=f,m)}function p(f,m,y,T,L){return m===null||m.tag!==7?(m=sr(y,f.mode,T,L),m.return=f,m):(m=s(m,y),m.return=f,m)}function h(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ko(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Da:return y=oi(m.type,m.key,m.props,null,f.mode,y),y.ref=ps(f,null,m),y.return=f,y;case Cr:return m=Xo(m,f.mode,y),m.return=f,m;case xn:var T=m._init;return h(f,T(m._payload),y)}if(vs(m)||os(m))return m=sr(m,f.mode,y,null),m.return=f,m;Fa(f,m)}return null}function g(f,m,y,T){var L=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:c(f,m,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return y.key===L?l(f,m,y,T):null;case Cr:return y.key===L?u(f,m,y,T):null;case xn:return L=y._init,g(f,m,L(y._payload),T)}if(vs(y)||os(y))return L!==null?null:p(f,m,y,T,null);Fa(f,y)}return null}function x(f,m,y,T,L){if(typeof T=="string"&&T!==""||typeof T=="number")return f=f.get(y)||null,c(m,f,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Da:return f=f.get(T.key===null?y:T.key)||null,l(m,f,T,L);case Cr:return f=f.get(T.key===null?y:T.key)||null,u(m,f,T,L);case xn:var E=T._init;return x(f,m,y,E(T._payload),L)}if(vs(T)||os(T))return f=f.get(y)||null,p(m,f,T,L,null);Fa(m,T)}return null}function C(f,m,y,T){for(var L=null,E=null,D=m,k=m=0,U=null;D!==null&&k<y.length;k++){D.index>k?(U=D,D=null):U=D.sibling;var M=g(f,D,y[k],T);if(M===null){D===null&&(D=U);break}e&&D&&M.alternate===null&&t(f,D),m=a(M,m,k),E===null?L=M:E.sibling=M,E=M,D=U}if(k===y.length)return n(f,D),ge&&Kn(f,k),L;if(D===null){for(;k<y.length;k++)D=h(f,y[k],T),D!==null&&(m=a(D,m,k),E===null?L=D:E.sibling=D,E=D);return ge&&Kn(f,k),L}for(D=r(f,D);k<y.length;k++)U=x(D,f,k,y[k],T),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?k:U.key),m=a(U,m,k),E===null?L=U:E.sibling=U,E=U);return e&&D.forEach(function(K){return t(f,K)}),ge&&Kn(f,k),L}function S(f,m,y,T){var L=os(y);if(typeof L!="function")throw Error(O(150));if(y=L.call(y),y==null)throw Error(O(151));for(var E=L=null,D=m,k=m=0,U=null,M=y.next();D!==null&&!M.done;k++,M=y.next()){D.index>k?(U=D,D=null):U=D.sibling;var K=g(f,D,M.value,T);if(K===null){D===null&&(D=U);break}e&&D&&K.alternate===null&&t(f,D),m=a(K,m,k),E===null?L=K:E.sibling=K,E=K,D=U}if(M.done)return n(f,D),ge&&Kn(f,k),L;if(D===null){for(;!M.done;k++,M=y.next())M=h(f,M.value,T),M!==null&&(m=a(M,m,k),E===null?L=M:E.sibling=M,E=M);return ge&&Kn(f,k),L}for(D=r(f,D);!M.done;k++,M=y.next())M=x(D,f,k,M.value,T),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?k:M.key),m=a(M,m,k),E===null?L=M:E.sibling=M,E=M);return e&&D.forEach(function(Se){return t(f,Se)}),ge&&Kn(f,k),L}function w(f,m,y,T){if(typeof y=="object"&&y!==null&&y.type===Ar&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:e:{for(var L=y.key,E=m;E!==null;){if(E.key===L){if(L=y.type,L===Ar){if(E.tag===7){n(f,E.sibling),m=s(E,y.props.children),m.return=f,f=m;break e}}else if(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===xn&&Cd(L)===E.type){n(f,E.sibling),m=s(E,y.props),m.ref=ps(f,E,y),m.return=f,f=m;break e}n(f,E);break}else t(f,E);E=E.sibling}y.type===Ar?(m=sr(y.props.children,f.mode,T,y.key),m.return=f,f=m):(T=oi(y.type,y.key,y.props,null,f.mode,T),T.ref=ps(f,m,y),T.return=f,f=T)}return o(f);case Cr:e:{for(E=y.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=s(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=Xo(y,f.mode,T),m.return=f,f=m}return o(f);case xn:return E=y._init,w(f,m,E(y._payload),T)}if(vs(y))return C(f,m,y,T);if(os(y))return S(f,m,y,T);Fa(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=s(m,y),m.return=f,f=m):(n(f,m),m=Ko(y,f.mode,T),m.return=f,f=m),o(f)):n(f,m)}return w}var Vr=Zh(!0),em=Zh(!1),Si=Wn(null),wi=null,kr=null,qc=null;function Bc(){qc=kr=wi=null}function Fc(e){var t=Si.current;me(Si),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){wi=e,qc=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(qc!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(wi===null)throw Error(O(308));kr=e,wi.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var er=null;function Uc(e){er===null?er=[e]:er.push(e)}function tm(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Uc(t)):(n.next=s.next,s.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function Wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,cn(e,n)}return s=r.interleaved,s===null?(t.next=t,Uc(r)):(t.next=s.next,s.next=t),r.interleaved=t,cn(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ic(e,n)}}function Ad(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ci(e,t,n,r){var s=e.updateQueue;bn=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var l=c,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==o&&(c===null?p.firstBaseUpdate=u:c.next=u,p.lastBaseUpdate=l))}if(a!==null){var h=s.baseState;o=0,p=u=l=null,c=a;do{var g=c.lane,x=c.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var C=e,S=c;switch(g=t,x=n,S.tag){case 1:if(C=S.payload,typeof C=="function"){h=C.call(x,h,g);break e}h=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,g=typeof C=="function"?C.call(x,h,g):C,g==null)break e;h=be({},h,g);break e;case 2:bn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[c]:g.push(c))}else x={eventTime:x,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(u=p=x,l=h):p=p.next=x,o|=g;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;g=c,c=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(l=h),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);lr|=o,e.lanes=o,e.memoizedState=h}}function Td(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(O(191,s));s.call(r)}}}var oa={},Yt=Wn(oa),Gs=Wn(oa),Js=Wn(oa);function tr(e){if(e===oa)throw Error(O(174));return e}function Hc(e,t){switch(ue(Js,t),ue(Gs,e),ue(Yt,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}me(Yt),ue(Yt,t)}function Gr(){me(Yt),me(Gs),me(Js)}function rm(e){tr(Js.current);var t=tr(Yt.current),n=Cl(t,e.type);t!==n&&(ue(Gs,e),ue(Yt,n))}function zc(e){Gs.current===e&&(me(Yt),me(Gs))}var ye=Wn(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function Qc(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var ni=pn.ReactCurrentDispatcher,$o=pn.ReactCurrentBatchConfig,or=0,xe=null,ke=null,Me=null,Ti=!1,Os=!1,Ys=0,vx=0;function Fe(){throw Error(O(321))}function $c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function Vc(e,t,n,r,s,a){if(or=a,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?Ax:Tx,e=n(r,s),Os){a=0;do{if(Os=!1,Ys=0,25<=a)throw Error(O(301));a+=1,Me=ke=null,t.updateQueue=null,ni.current=Lx,e=n(r,s)}while(Os)}if(ni.current=Li,t=ke!==null&&ke.next!==null,or=0,Me=ke=xe=null,Ti=!1,t)throw Error(O(300));return e}function Gc(){var e=Ys!==0;return Ys=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?xe.memoizedState=Me=e:Me=Me.next=e,Me}function Ct(){if(ke===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Me===null?xe.memoizedState:Me.next;if(t!==null)Me=t,ke=e;else{if(e===null)throw Error(O(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Me===null?xe.memoizedState=Me=e:Me=Me.next=e}return Me}function Ks(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=ke,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var c=o=null,l=null,u=a;do{var p=u.lane;if((or&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=h,o=r):l=l.next=h,xe.lanes|=p,lr|=p}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=c,Mt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,xe.lanes|=a,lr|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Mt(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function sm(){}function am(e,t){var n=xe,r=Ct(),s=t(),a=!Mt(r.memoizedState,s);if(a&&(r.memoizedState=s,Ze=!0),r=r.queue,Jc(lm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Xs(9,om.bind(null,n,r,s,t),void 0,null),_e===null)throw Error(O(349));or&30||im(n,t,s)}return s}function im(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function om(e,t,n,r){t.value=n,t.getSnapshot=r,cm(t)&&um(e)}function lm(e,t,n){return n(function(){cm(t)&&um(e)})}function cm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function um(e){var t=cn(e,1);t!==null&&kt(t,e,1,-1)}function Ld(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:e},t.queue=e,e=e.dispatch=Cx.bind(null,xe,e),[t.memoizedState,e]}function Xs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dm(){return Ct().memoizedState}function ri(e,t,n,r){var s=$t();xe.flags|=e,s.memoizedState=Xs(1|t,n,void 0,r===void 0?null:r)}function Qi(e,t,n,r){var s=Ct();r=r===void 0?null:r;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,r!==null&&$c(r,o.deps)){s.memoizedState=Xs(t,n,a,r);return}}xe.flags|=e,s.memoizedState=Xs(1|t,n,a,r)}function Id(e,t){return ri(8390656,8,e,t)}function Jc(e,t){return Qi(2048,8,e,t)}function pm(e,t){return Qi(4,2,e,t)}function hm(e,t){return Qi(4,4,e,t)}function mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gm(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4,4,mm.bind(null,t,e),n)}function Yc(){}function fm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ym(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$c(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xm(e,t,n){return or&21?(Mt(n,t)||(n=Ch(),xe.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function Sx(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=$o.transition;$o.transition={};try{e(!1),t()}finally{se=n,$o.transition=r}}function bm(){return Ct().memoizedState}function wx(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vm(e))Sm(t,n);else if(n=tm(e,t,n,r),n!==null){var s=Ve();kt(n,e,r,s),wm(n,t,r)}}function Cx(e,t,n){var r=Mn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vm(e))Sm(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,c=a(o,n);if(s.hasEagerState=!0,s.eagerState=c,Mt(c,o)){var l=t.interleaved;l===null?(s.next=s,Uc(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=tm(e,t,s,r),n!==null&&(s=Ve(),kt(n,e,r,s),wm(n,t,r))}}function vm(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Sm(e,t){Os=Ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ic(e,n)}}var Li={readContext:wt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Ax={readContext:wt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Id,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wx.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Ld,useDebugValue:Yc,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Ld(!1),t=e[0];return e=Sx.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,s=$t();if(ge){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),_e===null)throw Error(O(349));or&30||im(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Id(lm.bind(null,r,a,e),[e]),r.flags|=2048,Xs(9,om.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=$t(),t=_e.identifierPrefix;if(ge){var n=sn,r=rn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ys++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tx={readContext:wt,useCallback:fm,useContext:wt,useEffect:Jc,useImperativeHandle:gm,useInsertionEffect:pm,useLayoutEffect:hm,useMemo:ym,useReducer:Vo,useRef:dm,useState:function(){return Vo(Ks)},useDebugValue:Yc,useDeferredValue:function(e){var t=Ct();return xm(t,ke.memoizedState,e)},useTransition:function(){var e=Vo(Ks)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:sm,useSyncExternalStore:am,useId:bm,unstable_isNewReconciler:!1},Lx={readContext:wt,useCallback:fm,useContext:wt,useEffect:Jc,useImperativeHandle:gm,useInsertionEffect:pm,useLayoutEffect:hm,useMemo:ym,useReducer:Go,useRef:dm,useState:function(){return Go(Ks)},useDebugValue:Yc,useDeferredValue:function(e){var t=Ct();return ke===null?t.memoizedState=e:xm(t,ke.memoizedState,e)},useTransition:function(){var e=Go(Ks)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:sm,useSyncExternalStore:am,useId:bm,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $i={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),s=Mn(e),a=an(r,s);a.payload=t,n!=null&&(a.callback=n),t=kn(e,a,s),t!==null&&(kt(t,e,s,r),ti(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),s=Mn(e),a=an(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=kn(e,a,s),t!==null&&(kt(t,e,s,r),ti(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Mn(e),s=an(n,r);s.tag=2,t!=null&&(s.callback=t),t=kn(e,s,r),t!==null&&(kt(t,e,r,n),ti(t,e,r))}};function Ed(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zs(n,r)||!zs(s,a):!0}function Cm(e,t,n){var r=!1,s=Bn,a=t.contextType;return typeof a=="object"&&a!==null?a=wt(a):(s=tt(t)?ar:Qe.current,r=t.contextTypes,a=(r=r!=null)?Qr(e,s):Bn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$i,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Dd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$i.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Wc(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=wt(a):(a=tt(t)?ar:Qe.current,s.context=Qr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(zl(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&$i.enqueueReplaceState(s,s.state,null),Ci(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t){try{var n="",r=t;do n+=ey(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ix=typeof WeakMap=="function"?WeakMap:Map;function Am(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ei||(Ei=!0,nc=r),$l(e,t)},n}function Tm(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){$l(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Od(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ix;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Ux.bind(null,e,t,n),t.then(e,e))}function Nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Ex=pn.ReactCurrentOwner,Ze=!1;function $e(e,t,n,r){t.child=e===null?em(t,null,n,r):Vr(t,e.child,n,r)}function Rd(e,t,n,r,s){n=n.render;var a=t.ref;return Fr(t,s),r=Vc(e,t,n,r,a,s),n=Gc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,un(e,t,s)):(ge&&n&&_c(t),t.flags|=1,$e(e,t,r,s),t.child)}function Md(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!su(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lm(e,t,a,r,s)):(e=oi(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(o,r)&&e.ref===t.ref)return un(e,t,s)}return t.flags|=1,e=_n(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lm(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(zs(a,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,un(e,t,s)}return Vl(e,t,n,r,s)}function Im(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Mr,it),it|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Mr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ue(Mr,it),it|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ue(Mr,it),it|=r;return $e(e,t,s,n),t.child}function Em(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,s){var a=tt(n)?ar:Qe.current;return a=Qr(t,a),Fr(t,s),n=Vc(e,t,n,r,a,s),r=Gc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,un(e,t,s)):(ge&&r&&_c(t),t.flags|=1,$e(e,t,n,s),t.child)}function _d(e,t,n,r,s){if(tt(n)){var a=!0;xi(t)}else a=!1;if(Fr(t,s),t.stateNode===null)si(e,t),Cm(t,n,r),Ql(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=tt(n)?ar:Qe.current,u=Qr(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||l!==u)&&Dd(t,o,r,u),bn=!1;var g=t.memoizedState;o.state=g,Ci(t,r,o,s),l=t.memoizedState,c!==r||g!==l||et.current||bn?(typeof p=="function"&&(zl(t,n,p,r),l=t.memoizedState),(c=bn||Ed(t,n,c,r,g,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,nm(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Lt(t.type,c),o.props=u,h=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=tt(n)?ar:Qe.current,l=Qr(t,l));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==h||g!==l)&&Dd(t,o,r,l),bn=!1,g=t.memoizedState,o.state=g,Ci(t,r,o,s);var C=t.memoizedState;c!==h||g!==C||et.current||bn?(typeof x=="function"&&(zl(t,n,x,r),C=t.memoizedState),(u=bn||Ed(t,n,u,r,g,C,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Gl(e,t,n,r,a,s)}function Gl(e,t,n,r,s,a){Em(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&vd(t,n,!1),un(e,t,a);r=t.stateNode,Ex.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Vr(t,e.child,null,a),t.child=Vr(t,null,c,a)):$e(e,t,c,a),t.memoizedState=r.state,s&&vd(t,n,!0),t.child}function Dm(e){var t=e.stateNode;t.pendingContext?bd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bd(e,t.context,!1),Hc(e,t.containerInfo)}function jd(e,t,n,r,s){return $r(),Pc(s),t.flags|=256,$e(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Om(e,t,n){var r=t.pendingProps,s=ye.current,a=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ue(ye,s&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ji(o,r,0,null),e=sr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Yl(n),t.memoizedState=Jl,e):Kc(t,o));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return Dx(e,t,o,r,c,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,c=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_n(s,l),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?a=_n(c,a):(a=sr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Yl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return a=e.child,e=a.sibling,r=_n(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kc(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ua(e,t,n,r){return r!==null&&Pc(r),Vr(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dx(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(O(422))),Ua(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=Ji({mode:"visible",children:r.children},s,0,null),a=sr(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Vr(t,e.child,null,o),t.child.memoizedState=Yl(o),t.memoizedState=Jl,a);if(!(t.mode&1))return Ua(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(O(419)),r=Jo(a,r,void 0),Ua(e,t,o,r)}if(c=(o&e.childLanes)!==0,Ze||c){if(r=_e,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,cn(e,s),kt(r,e,s,-1))}return ru(),r=Jo(Error(O(421))),Ua(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Wx.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,lt=Nn(s.nextSibling),ct=t,ge=!0,Et=null,e!==null&&(yt[xt++]=rn,yt[xt++]=sn,yt[xt++]=ir,rn=e.id,sn=e.overflow,ir=t),t=Kc(t,r.children),t.flags|=4096,t)}function Pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function Yo(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Nm(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if($e(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ye,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Yo(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ai(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Yo(t,!0,n,null,a);break;case"together":Yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ox(e,t,n){switch(t.tag){case 3:Dm(t),$r();break;case 5:rm(t);break;case 1:tt(t.type)&&xi(t);break;case 4:Hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ue(Si,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?Om(e,t,n):(ue(ye,ye.current&1),e=un(e,t,n),e!==null?e.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Im(e,t,n)}return un(e,t,n)}var km,Kl,Rm,Mm;km=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};Rm=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,tr(Yt.current);var a=null;switch(n){case"input":s=bl(e,s),r=bl(e,r),a=[];break;case"select":s=be({},s,{value:void 0}),r=be({},r,{value:void 0}),a=[];break;case"textarea":s=wl(e,s),r=wl(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Al(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var c=s[u];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ps.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(c=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u==="style")if(c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",e),a||c===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Mm=function(e,t,n,r){n!==r&&(t.flags|=4)};function hs(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nx(e,t,n){var r=t.pendingProps;switch(jc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return tt(t.type)&&yi(),Ue(t),null;case 3:return r=t.stateNode,Gr(),me(et),me(Qe),Qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ba(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(ac(Et),Et=null))),Kl(e,t),Ue(t),null;case 5:zc(t);var s=tr(Js.current);if(n=t.type,e!==null&&t.stateNode!=null)Rm(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ue(t),null}if(e=tr(Yt.current),Ba(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Vt]=t,r[Vs]=a,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(s=0;s<ws.length;s++)he(ws[s],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":$u(r,a),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},he("invalid",r);break;case"textarea":Gu(r,a),he("invalid",r)}Al(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&qa(r.textContent,c,e),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&qa(r.textContent,c,e),s=["children",""+c]):Ps.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Oa(r),Vu(r,a,!0);break;case"textarea":Oa(r),Ju(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=fi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Vt]=t,e[Vs]=r,km(e,t,!1,!1),t.stateNode=e;e:{switch(o=Tl(n,r),n){case"dialog":he("cancel",e),he("close",e),s=r;break;case"iframe":case"object":case"embed":he("load",e),s=r;break;case"video":case"audio":for(s=0;s<ws.length;s++)he(ws[s],e);s=r;break;case"source":he("error",e),s=r;break;case"img":case"image":case"link":he("error",e),he("load",e),s=r;break;case"details":he("toggle",e),s=r;break;case"input":$u(e,r),s=bl(e,r),he("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=be({},r,{value:void 0}),he("invalid",e);break;case"textarea":Gu(e,r),s=wl(e,r),he("invalid",e);break;default:s=r}Al(n,s),c=s;for(a in c)if(c.hasOwnProperty(a)){var l=c[a];a==="style"?dh(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ch(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qs(e,l):typeof l=="number"&&qs(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ps.hasOwnProperty(a)?l!=null&&a==="onScroll"&&he("scroll",e):l!=null&&Sc(e,a,l,o))}switch(n){case"input":Oa(e),Vu(e,r,!1);break;case"textarea":Oa(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?jr(e,!!r.multiple,a,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Mm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=tr(Js.current),tr(Yt.current),Ba(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(a=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:qa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return Ue(t),null;case 13:if(me(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&lt!==null&&t.mode&1&&!(t.flags&128))Xh(),$r(),t.flags|=98560,a=!1;else if(a=Ba(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[Vt]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else Et!==null&&(ac(Et),Et=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Re===0&&(Re=3):ru())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Gr(),Kl(e,t),e===null&&Qs(t.stateNode.containerInfo),Ue(t),null;case 10:return Fc(t.type._context),Ue(t),null;case 17:return tt(t.type)&&yi(),Ue(t),null;case 19:if(me(ye),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)hs(a,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ai(e),o!==null){for(t.flags|=128,hs(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>Yr&&(t.flags|=128,r=!0,hs(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ge)return Ue(t),null}else 2*Ie()-a.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,hs(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return nu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function kx(e,t){switch(jc(t),t.tag){case 1:return tt(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),me(et),me(Qe),Qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(me(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ye),null;case 4:return Gr(),null;case 10:return Fc(t.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var Wa=!1,He=!1,Rx=typeof WeakSet=="function"?WeakSet:Set,j=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){we(e,t,r)}}var qd=!1;function Mx(e,t){if(_l=hi,e=Bh(),Mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,c=-1,l=-1,u=0,p=0,h=e,g=null;t:for(;;){for(var x;h!==n||s!==0&&h.nodeType!==3||(c=o+s),h!==a||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===s&&(c=o),g===a&&++p===r&&(l=o),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jl={focusedElem:e,selectionRange:n},hi=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var S=C.memoizedProps,w=C.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Lt(t.type,S),w);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(T){we(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return C=qd,qd=!1,C}function Ns(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Xl(t,n,a)}s=s.next}while(s!==r)}}function Vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Vs],delete t[Bl],delete t[fx],delete t[yx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jm(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(ec(e,t,n),e=e.sibling;e!==null;)ec(e,t,n),e=e.sibling}function tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}var je=null,It=!1;function gn(e,t,n){for(n=n.child;n!==null;)Pm(e,t,n),n=n.sibling}function Pm(e,t,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Bi,n)}catch{}switch(n.tag){case 5:He||Rr(n,t);case 6:var r=je,s=It;je=null,gn(e,t,n),je=r,It=s,je!==null&&(It?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(It?(e=je,n=n.stateNode,e.nodeType===8?Ho(e.parentNode,n):e.nodeType===1&&Ho(e,n),Ws(e)):Ho(je,n.stateNode));break;case 4:r=je,s=It,je=n.stateNode.containerInfo,It=!0,gn(e,t,n),je=r,It=s;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Xl(n,t,o),s=s.next}while(s!==r)}gn(e,t,n);break;case 1:if(!He&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){we(n,t,c)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,gn(e,t,n),He=r):gn(e,t,n);break;default:gn(e,t,n)}}function Fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rx),t.forEach(function(r){var s=Hx.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:je=c.stateNode,It=!1;break e;case 3:je=c.stateNode.containerInfo,It=!0;break e;case 4:je=c.stateNode.containerInfo,It=!0;break e}c=c.return}if(je===null)throw Error(O(160));Pm(a,o,s),je=null,It=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){we(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qm(t,e),t=t.sibling}function qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ht(e),r&4){try{Ns(3,e,e.return),Vi(3,e)}catch(S){we(e,e.return,S)}try{Ns(5,e,e.return)}catch(S){we(e,e.return,S)}}break;case 1:At(t,e),Ht(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(At(t,e),Ht(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var s=e.stateNode;try{qs(s,"")}catch(S){we(e,e.return,S)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&ih(s,a),Tl(c,o);var u=Tl(c,a);for(o=0;o<l.length;o+=2){var p=l[o],h=l[o+1];p==="style"?dh(s,h):p==="dangerouslySetInnerHTML"?ch(s,h):p==="children"?qs(s,h):Sc(s,p,h,u)}switch(c){case"input":vl(s,a);break;case"textarea":oh(s,a);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?jr(s,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?jr(s,!!a.multiple,a.defaultValue,!0):jr(s,!!a.multiple,a.multiple?[]:"",!1))}s[Vs]=a}catch(S){we(e,e.return,S)}}break;case 6:if(At(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(O(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(S){we(e,e.return,S)}}break;case 3:if(At(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ws(t.containerInfo)}catch(S){we(e,e.return,S)}break;case 4:At(t,e),Ht(e);break;case 13:At(t,e),Ht(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(eu=Ie())),r&4&&Fd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||p,At(t,e),He=u):At(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(h=j=p;j!==null;){switch(g=j,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ns(4,g,g.return);break;case 1:Rr(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(S){we(r,n,S)}}break;case 5:Rr(g,g.return);break;case 22:if(g.memoizedState!==null){Wd(h);continue}}x!==null?(x.return=g,j=x):Wd(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{s=h.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=uh("display",o))}catch(S){we(e,e.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){we(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:At(t,e),Ht(e),r&4&&Fd(e);break;case 21:break;default:At(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jm(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(qs(s,""),r.flags&=-33);var a=Bd(e);tc(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,c=Bd(e);ec(e,c,o);break;default:throw Error(O(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _x(e,t,n){j=e,Bm(e)}function Bm(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var s=j,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Wa;if(!o){var c=s.alternate,l=c!==null&&c.memoizedState!==null||He;c=Wa;var u=He;if(Wa=o,(He=l)&&!u)for(j=s;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Hd(s):l!==null?(l.return=o,j=l):Hd(s);for(;a!==null;)j=a,Bm(a),a=a.sibling;j=s,Wa=c,He=u}Ud(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,j=a):Ud(e)}}function Ud(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Vi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Td(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Td(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ws(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}He||t.flags&512&&Zl(t)}catch(g){we(t,t.return,g)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Wd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Hd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vi(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(l){we(t,s,l)}}var a=t.return;try{Zl(t)}catch(l){we(t,a,l)}break;case 5:var o=t.return;try{Zl(t)}catch(l){we(t,o,l)}}}catch(l){we(t,t.return,l)}if(t===e){j=null;break}var c=t.sibling;if(c!==null){c.return=t.return,j=c;break}j=t.return}}var jx=Math.ceil,Ii=pn.ReactCurrentDispatcher,Xc=pn.ReactCurrentOwner,St=pn.ReactCurrentBatchConfig,ee=0,_e=null,De=null,Pe=0,it=0,Mr=Wn(0),Re=0,Zs=null,lr=0,Gi=0,Zc=0,ks=null,Xe=null,eu=0,Yr=1/0,tn=null,Ei=!1,nc=null,Rn=null,Ha=!1,Ln=null,Di=0,Rs=0,rc=null,ai=-1,ii=0;function Ve(){return ee&6?Ie():ai!==-1?ai:ai=Ie()}function Mn(e){return e.mode&1?ee&2&&Pe!==0?Pe&-Pe:bx.transition!==null?(ii===0&&(ii=Ch()),ii):(e=se,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e):1}function kt(e,t,n,r){if(50<Rs)throw Rs=0,rc=null,Error(O(185));sa(e,n,r),(!(ee&2)||e!==_e)&&(e===_e&&(!(ee&2)&&(Gi|=n),Re===4&&Cn(e,Pe)),nt(e,r),n===1&&ee===0&&!(t.mode&1)&&(Yr=Ie()+500,zi&&Hn()))}function nt(e,t){var n=e.callbackNode;by(e,t);var r=pi(e,e===_e?Pe:0);if(r===0)n!==null&&Xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xu(n),t===1)e.tag===0?xx(zd.bind(null,e)):Jh(zd.bind(null,e)),mx(function(){!(ee&6)&&Hn()}),n=null;else{switch(Ah(r)){case 1:n=Lc;break;case 4:n=Sh;break;case 16:n=di;break;case 536870912:n=wh;break;default:n=di}n=Vm(n,Fm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fm(e,t){if(ai=-1,ii=0,ee&6)throw Error(O(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=pi(e,e===_e?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{t=r;var s=ee;ee|=2;var a=Wm();(_e!==e||Pe!==t)&&(tn=null,Yr=Ie()+500,rr(e,t));do try{Bx();break}catch(c){Um(e,c)}while(!0);Bc(),Ii.current=a,ee=s,De!==null?t=0:(_e=null,Pe=0,t=Re)}if(t!==0){if(t===2&&(s=Ol(e),s!==0&&(r=s,t=sc(e,s))),t===1)throw n=Zs,rr(e,0),Cn(e,r),nt(e,Ie()),n;if(t===6)Cn(e,r);else{if(s=e.current.alternate,!(r&30)&&!Px(s)&&(t=Oi(e,r),t===2&&(a=Ol(e),a!==0&&(r=a,t=sc(e,a))),t===1))throw n=Zs,rr(e,0),Cn(e,r),nt(e,Ie()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Xn(e,Xe,tn);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=eu+500-Ie(),10<t)){if(pi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ql(Xn.bind(null,e,Xe,tn),t);break}Xn(e,Xe,tn);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Nt(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jx(r/1960))-r,10<r){e.timeoutHandle=ql(Xn.bind(null,e,Xe,tn),r);break}Xn(e,Xe,tn);break;case 5:Xn(e,Xe,tn);break;default:throw Error(O(329))}}}return nt(e,Ie()),e.callbackNode===n?Fm.bind(null,e):null}function sc(e,t){var n=ks;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ac(t)),e}function ac(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Px(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Mt(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Zc,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function zd(e){if(ee&6)throw Error(O(327));Ur();var t=pi(e,0);if(!(t&1))return nt(e,Ie()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=Ol(e);r!==0&&(t=r,n=sc(e,r))}if(n===1)throw n=Zs,rr(e,0),Cn(e,t),nt(e,Ie()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,Xe,tn),nt(e,Ie()),null}function tu(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Yr=Ie()+500,zi&&Hn())}}function cr(e){Ln!==null&&Ln.tag===0&&!(ee&6)&&Ur();var t=ee;ee|=1;var n=St.transition,r=se;try{if(St.transition=null,se=1,e)return e()}finally{se=r,St.transition=n,ee=t,!(ee&6)&&Hn()}}function nu(){it=Mr.current,me(Mr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hx(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yi();break;case 3:Gr(),me(et),me(Qe),Qc();break;case 5:zc(r);break;case 4:Gr();break;case 13:me(ye);break;case 19:me(ye);break;case 10:Fc(r.type._context);break;case 22:case 23:nu()}n=n.return}if(_e=e,De=e=_n(e.current,null),Pe=it=t,Re=0,Zs=null,Zc=Gi=lr=0,Xe=ks=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}er=null}return e}function Um(e,t){do{var n=De;try{if(Bc(),ni.current=Li,Ti){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ti=!1}if(or=0,Me=ke=xe=null,Os=!1,Ys=0,Xc.current=null,n===null||n.return===null){Re=1,Zs=t,De=null;break}e:{var a=e,o=n.return,c=n,l=t;if(t=Pe,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=c,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Nd(o);if(x!==null){x.flags&=-257,kd(x,o,c,a,t),x.mode&1&&Od(a,u,t),t=x,l=u;var C=t.updateQueue;if(C===null){var S=new Set;S.add(l),t.updateQueue=S}else C.add(l);break e}else{if(!(t&1)){Od(a,u,t),ru();break e}l=Error(O(426))}}else if(ge&&c.mode&1){var w=Nd(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),kd(w,o,c,a,t),Pc(Jr(l,c));break e}}a=l=Jr(l,c),Re!==4&&(Re=2),ks===null?ks=[a]:ks.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Am(a,l,t);Ad(a,f);break e;case 1:c=l;var m=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Rn===null||!Rn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var T=Tm(a,c,t);Ad(a,T);break e}}a=a.return}while(a!==null)}zm(n)}catch(L){t=L,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Wm(){var e=Ii.current;return Ii.current=Li,e===null?Li:e}function ru(){(Re===0||Re===3||Re===2)&&(Re=4),_e===null||!(lr&268435455)&&!(Gi&268435455)||Cn(_e,Pe)}function Oi(e,t){var n=ee;ee|=2;var r=Wm();(_e!==e||Pe!==t)&&(tn=null,rr(e,t));do try{qx();break}catch(s){Um(e,s)}while(!0);if(Bc(),ee=n,Ii.current=r,De!==null)throw Error(O(261));return _e=null,Pe=0,Re}function qx(){for(;De!==null;)Hm(De)}function Bx(){for(;De!==null&&!uy();)Hm(De)}function Hm(e){var t=$m(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?zm(e):De=t,Xc.current=null}function zm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kx(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,De=null;return}}else if(n=Nx(n,t,it),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Re===0&&(Re=5)}function Xn(e,t,n){var r=se,s=St.transition;try{St.transition=null,se=1,Fx(e,t,n,r)}finally{St.transition=s,se=r}return null}function Fx(e,t,n,r){do Ur();while(Ln!==null);if(ee&6)throw Error(O(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(vy(e,a),e===_e&&(De=_e=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Vm(di,function(){return Ur(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=St.transition,St.transition=null;var o=se;se=1;var c=ee;ee|=4,Xc.current=null,Mx(e,n),qm(n,e),ix(jl),hi=!!_l,jl=_l=null,e.current=n,_x(n),dy(),ee=c,se=o,St.transition=a}else e.current=n;if(Ha&&(Ha=!1,Ln=e,Di=s),a=e.pendingLanes,a===0&&(Rn=null),my(n.stateNode),nt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ei)throw Ei=!1,e=nc,nc=null,e;return Di&1&&e.tag!==0&&Ur(),a=e.pendingLanes,a&1?e===rc?Rs++:(Rs=0,rc=e):Rs=0,Hn(),null}function Ur(){if(Ln!==null){var e=Ah(Di),t=St.transition,n=se;try{if(St.transition=null,se=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,Di=0,ee&6)throw Error(O(331));var s=ee;for(ee|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var c=a.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(j=u;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:Ns(8,p,a)}var h=p.child;if(h!==null)h.return=p,j=h;else for(;j!==null;){p=j;var g=p.sibling,x=p.return;if(_m(p),p===u){j=null;break}if(g!==null){g.return=x,j=g;break}j=x}}}var C=a.alternate;if(C!==null){var S=C.child;if(S!==null){C.child=null;do{var w=S.sibling;S.sibling=null,S=w}while(S!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ns(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,j=f;break e}j=a.return}}var m=e.current;for(j=m;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=m;j!==null;){if(c=j,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Vi(9,c)}}catch(L){we(c,c.return,L)}if(c===o){j=null;break e}var T=c.sibling;if(T!==null){T.return=c.return,j=T;break e}j=c.return}}if(ee=s,Hn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Bi,e)}catch{}r=!0}return r}finally{se=n,St.transition=t}}return!1}function Qd(e,t,n){t=Jr(n,t),t=Am(e,t,1),e=kn(e,t,1),t=Ve(),e!==null&&(sa(e,1,t),nt(e,t))}function we(e,t,n){if(e.tag===3)Qd(e,e,n);else for(;t!==null;){if(t.tag===3){Qd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=Jr(n,e),e=Tm(t,e,1),t=kn(t,e,1),e=Ve(),t!==null&&(sa(t,1,e),nt(t,e));break}}t=t.return}}function Ux(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Pe&n)===n&&(Re===4||Re===3&&(Pe&130023424)===Pe&&500>Ie()-eu?rr(e,0):Zc|=n),nt(e,t)}function Qm(e,t){t===0&&(e.mode&1?(t=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):t=1);var n=Ve();e=cn(e,t),e!==null&&(sa(e,t,n),nt(e,n))}function Wx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qm(e,n)}function Hx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Qm(e,n)}var $m;$m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,Ox(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ge&&t.flags&1048576&&Yh(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;si(e,t),e=t.pendingProps;var s=Qr(t,Qe.current);Fr(t,n),s=Vc(null,t,r,e,s,n);var a=Gc();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(a=!0,xi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wc(t),s.updater=$i,t.stateNode=s,s._reactInternals=t,Ql(t,r,e,n),t=Gl(null,t,r,!0,a,n)):(t.tag=0,ge&&a&&_c(t),$e(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(si(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Qx(r),e=Lt(r,e),s){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=Rd(null,t,r,e,n);break e;case 14:t=Md(null,t,r,Lt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Lt(r,s),Vl(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Lt(r,s),_d(e,t,r,s,n);case 3:e:{if(Dm(t),e===null)throw Error(O(387));r=t.pendingProps,a=t.memoizedState,s=a.element,nm(e,t),Ci(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=Jr(Error(O(423)),t),t=jd(e,t,r,n,s);break e}else if(r!==s){s=Jr(Error(O(424)),t),t=jd(e,t,r,n,s);break e}else for(lt=Nn(t.stateNode.containerInfo.firstChild),ct=t,ge=!0,Et=null,n=em(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===s){t=un(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return rm(t),e===null&&Wl(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Pl(r,s)?o=null:a!==null&&Pl(r,a)&&(t.flags|=32),Em(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Om(e,t,n);case 4:return Hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Lt(r,s),Rd(e,t,r,s,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,ue(Si,r._currentValue),r._currentValue=o,a!==null)if(Mt(a.value,o)){if(a.children===s.children&&!et.current){t=un(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){o=a.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=an(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Hl(a.return,n,t),c.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(O(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}$e(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Fr(t,n),s=wt(s),r=r(s),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,s=Lt(r,t.pendingProps),s=Lt(r.type,s),Md(e,t,r,s,n);case 15:return Lm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Lt(r,s),si(e,t),t.tag=1,tt(r)?(e=!0,xi(t)):e=!1,Fr(t,n),Cm(t,r,s),Ql(t,r,s,n),Gl(null,t,r,!0,e,n);case 19:return Nm(e,t,n);case 22:return Im(e,t,n)}throw Error(O(156,t.tag))};function Vm(e,t){return vh(e,t)}function zx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new zx(e,t,n,r)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qx(e){if(typeof e=="function")return su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cc)return 11;if(e===Ac)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")su(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ar:return sr(n.children,s,a,t);case wc:o=8,s|=8;break;case gl:return e=vt(12,n,t,s|2),e.elementType=gl,e.lanes=a,e;case fl:return e=vt(13,n,t,s),e.elementType=fl,e.lanes=a,e;case yl:return e=vt(19,n,t,s),e.elementType=yl,e.lanes=a,e;case rh:return Ji(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case th:o=10;break e;case nh:o=9;break e;case Cc:o=11;break e;case Ac:o=14;break e;case xn:o=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=vt(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function sr(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Ji(e,t,n,r){return e=vt(22,e,r,t),e.elementType=rh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Xo(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $x(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,s,a,o,c,l){return e=new $x(e,t,n,c,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=vt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(a),e}function Vx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gm(e){if(!e)return Bn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(tt(n))return Gh(e,n,t)}return t}function Jm(e,t,n,r,s,a,o,c,l){return e=au(n,r,!0,e,s,a,o,c,l),e.context=Gm(null),n=e.current,r=Ve(),s=Mn(n),a=an(r,s),a.callback=t??null,kn(n,a,s),e.current.lanes=s,sa(e,s,r),nt(e,r),e}function Yi(e,t,n,r){var s=t.current,a=Ve(),o=Mn(s);return n=Gm(n),t.context===null?t.context=n:t.pendingContext=n,t=an(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(s,t,o),e!==null&&(kt(e,s,o,a),ti(e,s,o)),o}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function Gx(){return null}var Ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function ou(e){this._internalRoot=e}Ki.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Yi(e,t,null,null)};Ki.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){Yi(null,e,null,null)}),t[ln]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ih();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&Dh(e)}};function lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function Jx(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var u=Ni(o);a.call(u)}}var o=Jm(t,r,e,0,null,!1,!1,"",Vd);return e._reactRootContainer=o,e[ln]=o.current,Qs(e.nodeType===8?e.parentNode:e),cr(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var u=Ni(l);c.call(u)}}var l=au(e,0,!1,null,null,!1,!1,"",Vd);return e._reactRootContainer=l,e[ln]=l.current,Qs(e.nodeType===8?e.parentNode:e),cr(function(){Yi(t,l,n,r)}),l}function Zi(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var c=s;s=function(){var l=Ni(o);c.call(l)}}Yi(t,o,e,s)}else o=Jx(n,t,e,s,r);return Ni(o)}Th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ss(t.pendingLanes);n!==0&&(Ic(t,n|1),nt(t,Ie()),!(ee&6)&&(Yr=Ie()+500,Hn()))}break;case 13:cr(function(){var r=cn(e,1);if(r!==null){var s=Ve();kt(r,e,1,s)}}),iu(e,1)}};Ec=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=Ve();kt(t,e,134217728,n)}iu(e,134217728)}};Lh=function(e){if(e.tag===13){var t=Mn(e),n=cn(e,t);if(n!==null){var r=Ve();kt(n,e,t,r)}iu(e,t)}};Ih=function(){return se};Eh=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};Il=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Hi(r);if(!s)throw Error(O(90));ah(r),vl(r,s)}}}break;case"textarea":oh(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};mh=tu;gh=cr;var Yx={usingClientEntryPoint:!1,Events:[ia,Er,Hi,ph,hh,tu]},ms={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kx={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xh(e),e===null?null:e.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||Gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{Bi=za.inject(Kx),Jt=za}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(t))throw Error(O(200));return Vx(e,t,null,n)};pt.createRoot=function(e,t){if(!lu(e))throw Error(O(299));var n=!1,r="",s=Ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,r,s),e[ln]=t.current,Qs(e.nodeType===8?e.parentNode:e),new ou(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=xh(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return cr(e)};pt.hydrate=function(e,t,n){if(!Xi(t))throw Error(O(200));return Zi(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!lu(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=Ym;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Jm(t,null,e,1,n??null,s,!1,a,o),e[ln]=t.current,Qs(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ki(t)};pt.render=function(e,t,n){if(!Xi(t))throw Error(O(200));return Zi(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(O(40));return e._reactRootContainer?(cr(function(){Zi(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};pt.unstable_batchedUpdates=tu;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xi(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Zi(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function Km(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Km)}catch(e){console.error(e)}}Km(),Kp.exports=pt;var Xx=Kp.exports,Xm,Gd=Xx;Xm=Gd.createRoot,Gd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(null,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const Jd="popstate";function Zx(e){e===void 0&&(e={});function t(s,a){let{pathname:o="/",search:c="",hash:l=""}=pr(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ic("",{pathname:o,search:c,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){let o=s.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let l=s.location.href,u=l.indexOf("#");c=u===-1?l:l.slice(0,u)}return c+"#"+(typeof a=="string"?a:ki(a))}function r(s,a){cu(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return t0(t,n,r,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function e0(){return Math.random().toString(36).substr(2,8)}function Yd(e,t){return{usr:e.state,key:e.key,idx:t}}function ic(e,t,n,r){return n===void 0&&(n=null),ea({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||e0()})}function ki(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function t0(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,c=In.Pop,l=null,u=p();u==null&&(u=0,o.replaceState(ea({},o.state,{idx:u}),""));function p(){return(o.state||{idx:null}).idx}function h(){c=In.Pop;let w=p(),f=w==null?null:w-u;u=w,l&&l({action:c,location:S.location,delta:f})}function g(w,f){c=In.Push;let m=ic(S.location,w,f);n&&n(m,w),u=p()+1;let y=Yd(m,u),T=S.createHref(m);try{o.pushState(y,"",T)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(T)}a&&l&&l({action:c,location:S.location,delta:1})}function x(w,f){c=In.Replace;let m=ic(S.location,w,f);n&&n(m,w),u=p();let y=Yd(m,u),T=S.createHref(m);o.replaceState(y,"",T),a&&l&&l({action:c,location:S.location,delta:0})}function C(w){let f=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof w=="string"?w:ki(w);return m=m.replace(/ $/,"%20"),Ne(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let S={get action(){return c},get location(){return e(s,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Jd,h),l=w,()=>{s.removeEventListener(Jd,h),l=null}},createHref(w){return t(s,w)},createURL:C,encodeLocation(w){let f=C(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(w){return o.go(w)}};return S}var Kd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kd||(Kd={}));function n0(e,t,n){return n===void 0&&(n="/"),r0(e,t,n)}function r0(e,t,n,r){let s=typeof t=="string"?pr(t):t,a=uu(s.pathname||"/",n);if(a==null)return null;let o=Zm(e);s0(o);let c=null,l=f0(a);for(let u=0;c==null&&u<o.length;++u)c=h0(o[u],l);return c}function Zm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,c)=>{let l={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),p=n.concat(l);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zm(a.children,t,p,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:d0(u,a.index),routesMeta:p})};return e.forEach((a,o)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))s(a,o);else for(let l of eg(a.path))s(a,o,l)}),t}function eg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=eg(r.join("/")),c=[];return c.push(...o.map(l=>l===""?a:[a,l].join("/"))),s&&c.push(...o),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function s0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:p0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const a0=/^:[\w-]+$/,i0=3,o0=2,l0=1,c0=10,u0=-2,Xd=e=>e==="*";function d0(e,t){let n=e.split("/"),r=n.length;return n.some(Xd)&&(r+=u0),t&&(r+=o0),n.filter(s=>!Xd(s)).reduce((s,a)=>s+(a0.test(a)?i0:a===""?l0:c0),r)}function p0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function h0(e,t,n){let{routesMeta:r}=e,s={},a="/",o=[];for(let c=0;c<r.length;++c){let l=r[c],u=c===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",h=m0({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p),g=l.route;if(!h)return null;Object.assign(s,h.params),o.push({params:s,pathname:jn([a,h.pathname]),pathnameBase:b0(jn([a,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(a=jn([a,h.pathnameBase]))}return o}function m0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=g0(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((u,p,h)=>{let{paramName:g,isOptional:x}=p;if(g==="*"){let S=c[h]||"";o=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const C=c[h];return x&&!C?u[g]=void 0:u[g]=(C||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function g0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function f0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function y0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?pr(e):e,a;return n?(n=rg(n),n.startsWith("/")?a=Zd(n.substring(1),"/"):a=Zd(n,t)):a=t,{pathname:a,search:v0(r),hash:S0(s)}}function Zd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Zo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tg(e,t){let n=x0(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ng(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=pr(e):(s=ea({},e),Ne(!s.pathname||!s.pathname.includes("?"),Zo("?","pathname","search",s)),Ne(!s.pathname||!s.pathname.includes("#"),Zo("#","pathname","hash",s)),Ne(!s.search||!s.search.includes("#"),Zo("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,c;if(o==null)c=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;s.pathname=g.join("/")}c=h>=0?t[h]:"/"}let l=y0(s,c),u=o&&o!=="/"&&o.endsWith("/"),p=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||p)&&(l.pathname+="/"),l}const rg=e=>e.replace(/\/\/+/g,"/"),jn=e=>rg(e.join("/")),b0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,S0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function w0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sg=["post","put","patch","delete"];new Set(sg);const C0=["get",...sg];new Set(C0);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ta.apply(null,arguments)}const du=b.createContext(null),A0=b.createContext(null),hr=b.createContext(null),eo=b.createContext(null),zn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ag=b.createContext(null);function T0(e,t){let{relative:n}=t===void 0?{}:t;la()||Ne(!1);let{basename:r,navigator:s}=b.useContext(hr),{hash:a,pathname:o,search:c}=og(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:jn([r,o])),s.createHref({pathname:l,search:c,hash:a})}function la(){return b.useContext(eo)!=null}function ca(){return la()||Ne(!1),b.useContext(eo).location}function ig(e){b.useContext(hr).static||b.useLayoutEffect(e)}function to(){let{isDataRoute:e}=b.useContext(zn);return e?q0():L0()}function L0(){la()||Ne(!1);let e=b.useContext(du),{basename:t,future:n,navigator:r}=b.useContext(hr),{matches:s}=b.useContext(zn),{pathname:a}=ca(),o=JSON.stringify(tg(s,n.v7_relativeSplatPath)),c=b.useRef(!1);return ig(()=>{c.current=!0}),b.useCallback(function(u,p){if(p===void 0&&(p={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let h=ng(u,JSON.parse(o),a,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:jn([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,o,a,e])}function pu(){let{matches:e}=b.useContext(zn),t=e[e.length-1];return t?t.params:{}}function og(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(hr),{matches:s}=b.useContext(zn),{pathname:a}=ca(),o=JSON.stringify(tg(s,r.v7_relativeSplatPath));return b.useMemo(()=>ng(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function I0(e,t){return E0(e,t)}function E0(e,t,n,r){la()||Ne(!1);let{navigator:s}=b.useContext(hr),{matches:a}=b.useContext(zn),o=a[a.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ca(),p;if(t){var h;let w=typeof t=="string"?pr(t):t;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||Ne(!1),p=w}else p=u;let g=p.pathname||"/",x=g;if(l!=="/"){let w=l.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let C=n0(e,{pathname:x}),S=R0(C&&C.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:jn([l,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:jn([l,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return t&&S?b.createElement(eo.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:In.Pop}},S):S}function D0(){let e=P0(),t=w0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:s},n):null,null)}const O0=b.createElement(D0,null);class N0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(zn.Provider,{value:this.props.routeContext},b.createElement(ag.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k0(e){let{routeContext:t,match:n,children:r}=e,s=b.useContext(du);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(zn.Provider,{value:t},r)}function R0(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,c=(s=n)==null?void 0:s.errors;if(c!=null){let p=o.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);p>=0||Ne(!1),o=o.slice(0,Math.min(o.length,p+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let h=o[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=p),h.route.id){let{loaderData:g,errors:x}=n,C=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||C){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((p,h,g)=>{let x,C=!1,S=null,w=null;n&&(x=c&&h.route.id?c[h.route.id]:void 0,S=h.route.errorElement||O0,l&&(u<0&&g===0?(B0("route-fallback"),C=!0,w=null):u===g&&(C=!0,w=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),m=()=>{let y;return x?y=S:C?y=w:h.route.Component?y=b.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=p,b.createElement(k0,{match:h,routeContext:{outlet:p,matches:f,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?b.createElement(N0,{location:n.location,revalidation:n.revalidation,component:S,error:x,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var lg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lg||{}),cg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cg||{});function M0(e){let t=b.useContext(du);return t||Ne(!1),t}function _0(e){let t=b.useContext(A0);return t||Ne(!1),t}function j0(e){let t=b.useContext(zn);return t||Ne(!1),t}function ug(e){let t=j0(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function P0(){var e;let t=b.useContext(ag),n=_0(),r=ug();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function q0(){let{router:e}=M0(lg.UseNavigateStable),t=ug(cg.UseNavigateStable),n=b.useRef(!1);return ig(()=>{n.current=!0}),b.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ta({fromRouteId:t},a)))},[e,t])}const ep={};function B0(e,t,n){ep[e]||(ep[e]=!0)}function F0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ft(e){Ne(!1)}function U0(e){let{basename:t="/",children:n=null,location:r,navigationType:s=In.Pop,navigator:a,static:o=!1,future:c}=e;la()&&Ne(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:a,static:o,future:ta({v7_relativeSplatPath:!1},c)}),[l,c,a,o]);typeof r=="string"&&(r=pr(r));let{pathname:p="/",search:h="",hash:g="",state:x=null,key:C="default"}=r,S=b.useMemo(()=>{let w=uu(p,l);return w==null?null:{location:{pathname:w,search:h,hash:g,state:x,key:C},navigationType:s}},[l,p,h,g,x,C,s]);return S==null?null:b.createElement(hr.Provider,{value:u},b.createElement(eo.Provider,{children:n,value:S}))}function W0(e){let{children:t,location:n}=e;return I0(oc(t),n)}new Promise(()=>{});function oc(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,s)=>{if(!b.isValidElement(r))return;let a=[...t,s];if(r.type===b.Fragment){n.push.apply(n,oc(r.props.children,a));return}r.type!==ft&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oc(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lc.apply(null,arguments)}function H0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function z0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Q0(e,t){return e.button===0&&(!t||t==="_self")&&!z0(e)}const $0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],V0="6";try{window.__reactRouterVersion=V0}catch{}const G0="startTransition",tp=Uf[G0];function J0(e){let{basename:t,children:n,future:r,window:s}=e,a=b.useRef();a.current==null&&(a.current=Zx({window:s,v5Compat:!0}));let o=a.current,[c,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},p=b.useCallback(h=>{u&&tp?tp(()=>l(h)):l(h)},[l,u]);return b.useLayoutEffect(()=>o.listen(p),[o,p]),b.useEffect(()=>F0(r),[r]),b.createElement(U0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:o,future:r})}const Y0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=b.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:c,target:l,to:u,preventScrollReset:p,viewTransition:h}=t,g=H0(t,$0),{basename:x}=b.useContext(hr),C,S=!1;if(typeof u=="string"&&K0.test(u)&&(C=u,Y0))try{let y=new URL(window.location.href),T=u.startsWith("//")?new URL(y.protocol+u):new URL(u),L=uu(T.pathname,x);T.origin===y.origin&&L!=null?u=L+T.search+T.hash:S=!0}catch{}let w=T0(u,{relative:s}),f=X0(u,{replace:o,state:c,target:l,preventScrollReset:p,relative:s,viewTransition:h});function m(y){r&&r(y),y.defaultPrevented||f(y)}return b.createElement("a",lc({},g,{href:C||w,onClick:S||a?r:m,ref:n,target:l}))});var np;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(np||(np={}));var rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));function X0(e,t){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:c}=t===void 0?{}:t,l=to(),u=ca(),p=og(e,{relative:o});return b.useCallback(h=>{if(Q0(h,n)){h.preventDefault();let g=r!==void 0?r:ki(u)===ki(p);l(e,{replace:g,state:s,preventScrollReset:a,relative:o,viewTransition:c})}},[u,l,p,r,s,n,e,a,o,c])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dg=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:o,...c},l)=>b.createElement("svg",{ref:l,...eb,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:dg("lucide",s),...c},[...o.map(([u,p])=>b.createElement(u,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(e,t)=>{const n=b.forwardRef(({className:r,...s},a)=>b.createElement(tb,{ref:a,iconNode:t,className:dg(`lucide-${Z0(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=G("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=G("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=G("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=G("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=G("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=G("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=G("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=G("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=G("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=G("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=G("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=G("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=G("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=G("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=G("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=G("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=G("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=G("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=G("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=G("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=G("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=G("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=G("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=G("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=G("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=G("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=G("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=G("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=G("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=G("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=G("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=G("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),lp="sfda_progress",ub=100,db=150,pb=200,hb=20,Qa={completedLessons:[],completedChallenges:[],completedMissions:[],quizScores:{},challengeSubmissions:{},xp:0,streakDays:0,lastVisit:new Date().toISOString(),badges:[]};function so(){const[e,t]=b.useState(()=>{try{const h=localStorage.getItem(lp);return h?{...Qa,...JSON.parse(h)}:Qa}catch{return Qa}});b.useEffect(()=>{localStorage.setItem(lp,JSON.stringify(e))},[e]);const n=b.useCallback(h=>{t(g=>{if(g.completedLessons.includes(h))return g;const x=g.xp+ub,C=[...g.badges];return g.completedLessons.length===0&&C.push("first-lesson"),g.completedLessons.length===4&&C.push("five-lessons"),g.completedLessons.length===9&&C.push("ten-lessons"),{...g,completedLessons:[...g.completedLessons,h],xp:x,badges:C}})},[]),r=b.useCallback(h=>{t(g=>{var w,f;if((w=g.completedMissions)!=null&&w.includes(h))return g;const x=[...g.badges],C=((f=g.completedMissions)==null?void 0:f.length)??0;C===0&&x.push("first-mission"),C===4&&x.push("five-missions"),C===9&&x.push("ten-missions");const S=JSON.parse(localStorage.getItem("sfdc-completed-missions")||"[]");return S.includes(h)||localStorage.setItem("sfdc-completed-missions",JSON.stringify([...S,h])),{...g,completedMissions:[...g.completedMissions??[],h],xp:g.xp+pb,badges:x}})},[]),s=b.useCallback(h=>(e.completedMissions??[]).includes(h),[e.completedMissions]),a=b.useCallback((h,g)=>{t(x=>{const C=!x.completedChallenges.includes(h),S=[...x.badges];return C&&x.completedChallenges.length===0&&S.push("first-challenge"),C&&x.completedChallenges.length===4&&S.push("five-challenges"),{...x,completedChallenges:C?[...x.completedChallenges,h]:x.completedChallenges,challengeSubmissions:{...x.challengeSubmissions,[h]:g},xp:C?x.xp+db:x.xp,badges:S}})},[]),o=b.useCallback((h,g,x)=>{t(C=>({...C,quizScores:{...C.quizScores,[h]:Math.round(g/x*100)},xp:C.xp+g*hb}))},[]),c=b.useCallback(h=>e.completedLessons.includes(h),[e.completedLessons]),l=b.useCallback(h=>e.completedChallenges.includes(h),[e.completedChallenges]),u=()=>e.xp<500?{level:1,title:"Trailblazer Recruit",next:500}:e.xp<1500?{level:2,title:"Apex Apprentice",next:1500}:e.xp<3e3?{level:3,title:"SOQL Scholar",next:3e3}:e.xp<5e3?{level:4,title:"DML Developer",next:5e3}:e.xp<8e3?{level:5,title:"Trigger Tamer",next:8e3}:{level:6,title:"Platform Champion",next:1/0},p=b.useCallback(()=>{t(Qa)},[]);return{progress:e,completeLesson:n,completeChallenge:a,completeMission:r,recordQuizScore:o,isLessonCompleted:c,isChallengeCompleted:l,isMissionCompleted:s,getLevel:u,resetProgress:p}}const cp=[{to:"/",label:"Home",icon:sb},{to:"/dashboard",label:"Dashboard",icon:ab},{to:"/apex",label:"Apex",icon:dt},{to:"/soql",label:"SOQL",icon:mr},{to:"/debug",label:"Debug",icon:da},{to:"/missions",label:"Missions",icon:dn}];function mb(){const[e,t]=b.useState(!1),n=ca(),{progress:r,getLevel:s}=so(),{level:a,title:o}=s();return i.jsxs("header",{className:"sticky top-0 z-50 glass border-b border-gray-200/60 shadow-sm",children:[i.jsx("div",{className:"max-w-6xl mx-auto px-4",children:i.jsxs("div",{className:"flex items-center h-16 gap-4",children:[i.jsxs(oe,{to:"/",className:"flex items-center gap-2.5 shrink-0 group",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-sf-blue flex items-center justify-center group-hover:bg-blue-700 transition-colors",children:i.jsx(dt,{className:"w-4 h-4 text-white"})}),i.jsx("span",{className:"font-bold text-gray-900 text-sm hidden sm:block",children:"SFDC Simplified"})]}),i.jsx("nav",{className:"hidden md:flex items-center gap-1 ml-2",children:cp.map(({to:c,label:l})=>i.jsx(oe,{to:c,className:n.pathname===c?"nav-link-active":"nav-link-inactive",children:l},c))}),i.jsx("div",{className:"flex-1"}),i.jsxs(oe,{to:"/dashboard",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-sf-navy to-sf-blue text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity",children:[i.jsx(Ot,{className:"w-3.5 h-3.5 text-yellow-300"}),i.jsxs("span",{children:[r.xp," XP"]}),i.jsx("span",{className:"opacity-60",children:"·"}),i.jsxs("span",{children:["Lv ",a]})]}),i.jsx(oe,{to:"/about",className:"btn-ghost hidden md:inline-flex p-2",children:i.jsx(xg,{className:"w-4 h-4"})}),i.jsx("button",{onClick:()=>t(!e),className:"md:hidden btn-ghost p-2",children:e?i.jsx(dc,{className:"w-5 h-5"}):i.jsx(ob,{className:"w-5 h-5"})})]})}),e&&i.jsxs("div",{className:"md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1",children:[cp.map(({to:c,label:l,icon:u})=>i.jsxs(oe,{to:c,onClick:()=>t(!1),className:`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${n.pathname===c?"bg-blue-50 text-sf-blue":"text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(u,{className:"w-4 h-4"}),l]},c)),i.jsx("div",{className:"pt-2 border-t border-gray-100 mt-2",children:i.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 text-xs text-gray-500",children:[i.jsx(Ot,{className:"w-3.5 h-3.5 text-yellow-500"}),i.jsxs("span",{className:"font-semibold text-gray-700",children:[r.xp," XP"]}),i.jsx("span",{children:"·"}),i.jsxs("span",{children:["Level ",a,": ",o]})]})})]})]})}function gb(){return i.jsx("footer",{className:"bg-white border-t border-gray-100 mt-auto",children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 py-8",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue flex items-center justify-center",children:i.jsx(dt,{className:"w-3.5 h-3.5 text-white"})}),i.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:"SFDC Simplified"})]}),i.jsxs("div",{className:"flex items-center gap-6 text-xs text-gray-500",children:[i.jsx(oe,{to:"/about",className:"hover:text-sf-blue transition-colors",children:"About"}),i.jsx(oe,{to:"/apex",className:"hover:text-sf-blue transition-colors",children:"Lessons"}),i.jsx(oe,{to:"/missions",className:"hover:text-sf-blue transition-colors",children:"Missions"}),i.jsx("a",{href:"https://developer.salesforce.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-sf-blue transition-colors",children:"Salesforce Docs"})]}),i.jsx("p",{className:"text-xs text-gray-400",children:"Not affiliated with Salesforce, Inc."})]})})})}const fb=[{icon:i.jsx(dn,{className:"w-5 h-5"}),title:"10 Structured Lessons",desc:"From variables to DML — every concept explained with real examples",color:"bg-blue-500"},{icon:i.jsx(dt,{className:"w-5 h-5"}),title:"Hands-On Challenges",desc:"Write code, get instant feedback, and learn from detailed solutions",color:"bg-violet-500"},{icon:i.jsx(mr,{className:"w-5 h-5"}),title:"SOQL Explorer",desc:"Query fictional Salesforce orgs and understand data relationships",color:"bg-teal-500"},{icon:i.jsx(da,{className:"w-5 h-5"}),title:"Debug Lab",desc:"Find and fix real bugs in broken code — governor limits and all",color:"bg-orange-500"},{icon:i.jsx(Ot,{className:"w-5 h-5"}),title:"XP & Badges",desc:"Track your progress and earn badges as you level up",color:"bg-yellow-500"},{icon:i.jsx(vg,{className:"w-5 h-5"}),title:"Project Missions",desc:"Apply what you know to real-world Salesforce business scenarios",color:"bg-pink-500"}],yb=["Apex Variables & Data Types","Strings & String Methods","Conditionals & Boolean Logic","Loops: For, While, Do-While","Lists (Apex Arrays)","Sets & Uniqueness","Maps: Key-Value Storage","Classes & Object-Oriented Apex","SOQL: Query Your Data","DML: Create, Update, Delete Records"],xb=[{value:"10",label:"Lessons",sub:"beginner to confident"},{value:"10",label:"Challenges",sub:"with instant feedback"},{value:"5",label:"Debug Scenarios",sub:"real bugs to fix"},{value:"20",label:"Missions",sub:"real-world projects"}],bb=[{num:1,label:"Understand",desc:"Read a clear explanation"},{num:2,label:"Example",desc:"See real working code"},{num:3,label:"Try It",desc:"Write code yourself"},{num:4,label:"Hint",desc:"Unstuck in one tap"},{num:5,label:"Feedback",desc:"Know why it passed or failed"},{num:6,label:"Solution",desc:"See the full solution"},{num:7,label:"Apply",desc:"Use it in a mission"}];function vb(){return i.jsxs("div",{className:"min-h-screen",children:[i.jsxs("section",{className:"gradient-hero text-white py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 25% 50%, #fff 1px, transparent 0), radial-gradient(circle at 75% 20%, #fff 1px, transparent 0)",backgroundSize:"60px 60px"}}),i.jsxs("div",{className:"max-w-4xl mx-auto text-center relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm",children:[i.jsx(no,{className:"w-3.5 h-3.5 text-yellow-300"}),"Free · No signup required · Start in 30 seconds"]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6",children:["Learn Salesforce",i.jsx("br",{}),i.jsx("span",{className:"text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(90deg, #FFC849, #FF5D2D)"},children:"Development"})]}),i.jsx("p",{className:"text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed",children:"The interactive learning platform built for absolute beginners. Master Apex, SOQL, and DML through guided lessons, real code challenges, and hands-on projects."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[i.jsxs(oe,{to:"/apex",className:"inline-flex items-center justify-center gap-2 bg-white text-sf-blue font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Learning Free ",i.jsx(Ms,{className:"w-4 h-4"})]}),i.jsx(oe,{to:"/dashboard",className:"inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors text-base backdrop-blur-sm",children:"View Dashboard"})]})]})]}),i.jsx("section",{className:"bg-sf-navy text-white py-8 px-4",children:i.jsx("div",{className:"max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",children:xb.map(e=>i.jsxs("div",{children:[i.jsx("div",{className:"text-3xl font-extrabold text-yellow-400",children:e.value}),i.jsx("div",{className:"font-semibold text-sm mt-0.5",children:e.label}),i.jsx("div",{className:"text-xs text-blue-300 mt-0.5",children:e.sub})]},e.label))})}),i.jsx("section",{className:"py-16 px-4 bg-white",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"section-title",children:"The 7-Step Learning Cycle"}),i.jsx("p",{className:"section-subtitle",children:"Every lesson follows the same proven structure — so you never feel lost"})]}),i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3",children:bb.map(e=>i.jsxs("div",{className:"flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group",children:[i.jsx("div",{className:"w-9 h-9 rounded-full bg-sf-blue text-white text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm",children:e.num}),i.jsx("div",{className:"font-semibold text-sm text-gray-900",children:e.label}),i.jsx("div",{className:"text-xs text-gray-500 leading-tight",children:e.desc})]},e.num))})]})}),i.jsx("section",{className:"py-16 px-4 bg-gray-50",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"section-title",children:"Everything You Need to Succeed"}),i.jsx("p",{className:"section-subtitle",children:"From your first variable to deploying real Apex — all in one place"})]}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:fb.map(e=>i.jsxs("div",{className:"card hover:border-sf-blue/20 group",children:[i.jsx("div",{className:`w-10 h-10 ${e.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-sm`,children:e.icon}),i.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:e.title}),i.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:e.desc})]},e.title))})]})}),i.jsx("section",{className:"py-16 px-4 bg-white",children:i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-start",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"section-title mb-2",children:"Full Apex Curriculum"}),i.jsx("p",{className:"section-subtitle mb-8",children:"10 lessons carefully sequenced from zero to job-ready Apex developer"}),i.jsxs(oe,{to:"/apex",className:"btn-primary",children:["Browse All Lessons ",i.jsx(Ms,{className:"w-4 h-4"})]})]}),i.jsx("div",{className:"space-y-2",children:yb.map((e,t)=>i.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue/10 text-sf-blue text-xs font-bold flex items-center justify-center shrink-0",children:String(t+1).padStart(2,"0")}),i.jsx("span",{className:"text-sm font-medium text-gray-700 group-hover:text-gray-900",children:e}),i.jsx(Wr,{className:"w-4 h-4 text-gray-200 group-hover:text-gray-300 ml-auto"})]},e))})]})})}),i.jsx("section",{className:"gradient-hero text-white py-16 px-4",children:i.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[i.jsx(cb,{className:"w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-80"}),i.jsx("h2",{className:"text-3xl font-extrabold mb-4",children:"Ready to Write Your First Apex?"}),i.jsx("p",{className:"text-blue-100 mb-8 text-lg",children:"No Salesforce org needed. Start writing code right here, right now."}),i.jsxs(oe,{to:"/lesson/apex-variables",className:"inline-flex items-center gap-2 bg-white text-sf-blue font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Lesson 1: Variables ",i.jsx(Ms,{className:"w-4 h-4"})]})]})})]})}const Sb={blue:"bg-sf-blue",green:"bg-sf-green",orange:"bg-sf-orange",purple:"bg-sf-purple"},wb={sm:"h-1.5",md:"h-2.5",lg:"h-4"};function Mi({value:e,max:t=100,className:n="",color:r="blue",height:s,size:a="md",showLabel:o=!1,label:c}){const l=Math.min(100,Math.max(0,e/t*100)),u=Sb[r]??r,p=s??wb[a];return i.jsxs("div",{className:n,children:[(o||c)&&i.jsxs("div",{className:"flex justify-between items-center mb-1",children:[c&&i.jsx("span",{className:"text-xs text-sf-gray-6",children:c}),o&&i.jsxs("span",{className:"text-xs font-medium text-sf-gray-7",children:[Math.round(l),"%"]})]}),i.jsx("div",{className:`w-full bg-sf-gray-2 rounded-full ${p} overflow-hidden`,children:i.jsx("div",{className:`${p} rounded-full ${u} transition-all duration-500 ease-out`,style:{width:`${l}%`},role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t})})]})}const Gt=[{id:"apex-variables",moduleId:"apex-basics",order:1,title:"Variables and Data Types",subtitle:"The building blocks of every Apex program",description:"Learn how to store and work with different kinds of data in Apex — from numbers and text to dates and Salesforce record IDs.",duration:20,difficulty:"beginner",tags:["apex","variables","data types"],prerequisites:[],learningObjectives:["Declare variables using primitive data types","Understand when to use Integer vs Decimal vs Long","Work with String, Boolean, Date, and ID types","Understand null values and type safety"],content:[{type:"explanation",title:"What is a Variable?",text:"A variable is a named container that holds a value your program can use and change. In Apex, every variable must have a declared type — this tells Salesforce exactly what kind of data it will store."},{type:"explanation",title:"Primitive Data Types",text:`Apex has several built-in primitive types:

• **Integer** — whole numbers from -2 billion to 2 billion (e.g., 42, -7)
• **Long** — larger whole numbers when Integer is not big enough
• **Decimal** — numbers with decimal places, used for currency (e.g., 99.99)
• **Double** — floating-point numbers for scientific calculations
• **String** — text enclosed in single quotes
• **Boolean** — true or false only
• **Date** — a calendar date (no time)
• **DateTime** — a date with a time component
• **ID** — an 18-character Salesforce record identifier`},{type:"example",title:"Declaring Variables in Apex",text:"Here is how you declare variables of each type:",code:`// Integer — whole numbers
Integer score = 95;
Integer errorCount = 0;

// Decimal — numbers with decimal places (great for currency)
Decimal price = 149.99;
Decimal taxRate = 0.085;

// String — text in single quotes
String firstName = 'Sarah';
String greeting = 'Hello, ' + firstName + '!';

// Boolean — only true or false
Boolean isActive = true;
Boolean hasError = false;

// Date — just a calendar date
Date today = Date.today();
Date birthday = Date.newInstance(1990, 6, 15);

// DateTime — date + time
DateTime now = DateTime.now();

// ID — a Salesforce record identifier
ID accountId = '001000000000001AAA';

System.debug('Score: ' + score);
System.debug('Price: $' + price);
System.debug('Greeting: ' + greeting);
System.debug('Is Active: ' + isActive);
System.debug('Today: ' + today);`,output:`Score: 95
Price: $149.99
Greeting: Hello, Sarah!
Is Active: true
Today: 2024-01-15`},{type:"note",title:"String Concatenation with +",text:"In Apex, the + operator joins strings together. When you combine a String with a non-String (like an Integer), Apex automatically converts it. This is called implicit type conversion."},{type:"explanation",title:"Null Values",text:'A variable that has been declared but not assigned a value is null. Null means "no value" — it is different from zero or an empty string. Accessing a method on a null variable causes a NullPointerException, a very common bug in Apex.'},{type:"example",title:"Null Values and Type Defaults",text:"Understanding null is critical for writing safe Apex code:",code:`// Uninitialized variables are null
String name;
System.debug(name);         // Outputs: null
System.debug(name == null); // Outputs: true

// This would throw a NullPointerException!
// Integer len = name.length(); // ERROR!

// Safe pattern — always check for null first
if (name != null) {
    System.debug(name.length());
} else {
    System.debug('Name has no value');
}

// Assigning a value removes the null
name = 'Alex';
System.debug(name.length()); // Outputs: 4

// Boolean defaults to null (not false!)
Boolean isVIP;
System.debug(isVIP); // Outputs: null`,output:`null
true
Name has no value
4
null`},{type:"tip",title:"Use Meaningful Variable Names",text:"Always name variables to describe what they hold. Write accountName instead of a, or totalPrice instead of t. Code is read far more than it is written."},{type:"example",title:"Type Conversion",text:"Sometimes you need to convert between types. Apex provides built-in methods for this:",code:`// String to Integer
String numStr = '42';
Integer num = Integer.valueOf(numStr);
System.debug(num + 8); // Outputs: 50

// Integer to String
Integer count = 7;
String msg = 'There are ' + String.valueOf(count) + ' items';
System.debug(msg); // Outputs: There are 7 items

// String to Decimal
String priceStr = '29.95';
Decimal price = Decimal.valueOf(priceStr);
System.debug(price * 2); // Outputs: 59.90

// Date to String
Date today = Date.today();
String dateStr = String.valueOf(today);
System.debug(dateStr); // Outputs: 2024-01-15`,output:`50
There are 7 items
59.90
2024-01-15`}],quiz:[{id:"q1",question:"Which data type would you use to store a product price of $49.99?",options:["Integer","Decimal","String","Boolean"],correct:1,explanation:"Decimal is the correct choice for monetary values because it supports decimal places with precise arithmetic. Integer only stores whole numbers."},{id:"q2",question:"What is the output of: String s; System.debug(s);",options:['"" (empty string)',"0","null","An error is thrown"],correct:2,explanation:'An uninitialized String variable is null in Apex, not an empty string. Null means "no value has been assigned".'},{id:"q3",question:'What will this output? Integer x = 5; String msg = "Value: " + x; System.debug(msg);',options:["An error",'"Value: " + x',"Value: 5","Value: Integer"],correct:2,explanation:'Apex automatically converts the Integer to a String when using the + operator with a String, so the output is "Value: 5".'},{id:"q4",question:"Which is the correct way to declare a Boolean variable set to true?",options:["bool isActive = true;","Boolean isActive = true;",'Boolean isActive = "true";',"bool isActive = 1;"],correct:1,explanation:'In Apex, the correct type name is "Boolean" (capital B). The value must be the literal true or false, not a string or number.'}],challengeId:"challenge-variables"},{id:"apex-strings",moduleId:"apex-basics",order:2,title:"Working with Strings",subtitle:"Text manipulation and common String methods",description:"Master Apex String methods to search, transform, and format text — essential skills for every Salesforce developer.",duration:25,difficulty:"beginner",tags:["apex","strings","methods"],prerequisites:["apex-variables"],learningObjectives:["Use common String methods like length(), toUpperCase(), contains()","Check for null and empty strings safely","Format strings with String.format()","Split and join strings"],content:[{type:"explanation",title:"Strings in Apex",text:"A String is a sequence of characters. Salesforce uses strings constantly — account names, email addresses, error messages, JSON payloads, and more. Apex provides a rich set of built-in String methods to work with text."},{type:"example",title:"Essential String Methods",text:"These are the most common String methods you will use as a Salesforce developer:",code:`String email = '  Sarah.Connor@example.com  ';

// Trim whitespace from both ends
String trimmed = email.trim();
System.debug(trimmed); // Sarah.Connor@example.com

// Length — number of characters
System.debug(trimmed.length()); // 24

// Case conversion
System.debug(trimmed.toLowerCase()); // sarah.connor@example.com
System.debug(trimmed.toUpperCase()); // SARAH.CONNOR@EXAMPLE.COM

// Check if string contains a substring
System.debug(trimmed.contains('@')); // true
System.debug(trimmed.contains('gmail')); // false

// Check if starts or ends with something
System.debug(trimmed.startsWith('Sarah')); // true
System.debug(trimmed.endsWith('.com')); // true

// Find position of a substring (0-indexed, -1 if not found)
Integer atPos = trimmed.indexOf('@');
System.debug(atPos); // 13

// Extract part of a string
String domain = trimmed.substring(atPos + 1);
System.debug(domain); // example.com`,output:`Sarah.Connor@example.com
24
sarah.connor@example.com
SARAH.CONNOR@EXAMPLE.COM
true
false
true
true
13
example.com`},{type:"example",title:"Replace and Split",text:"Replace parts of a string or break it into pieces:",code:`String csv = 'apple,banana,cherry,date';

// Split into a List using a delimiter
List<String> fruits = csv.split(',');
System.debug(fruits.size());  // 4
System.debug(fruits[0]);      // apple
System.debug(fruits[2]);      // cherry

// Replace using regex
String phone = '(555) 123-4567';
String cleaned = phone.replaceAll('[^0-9]', '');
System.debug(cleaned); // 5551234567

// Join a list back into a string
String joined = String.join(fruits, ' | ');
System.debug(joined); // apple | banana | cherry | date`,output:`4
apple
cherry
5551234567
apple | banana | cherry | date`},{type:"note",title:"String.isBlank() vs String.isEmpty()",text:'Use String.isBlank(s) to check if a string is null, empty (""), or only whitespace. Use String.isEmpty(s) only for null and empty. isBlank() is almost always the safer choice.'},{type:"example",title:"Null-Safe String Checks",text:"Always validate strings before using them to avoid NullPointerException:",code:`String name = null;

// Good — use String.isBlank()
if (String.isBlank(name)) {
    System.debug('Name is required');
} else {
    System.debug('Name: ' + name);
}

// String.format() for structured messages
String template = 'Welcome, {0}! You have {1} new notifications.';
String message = String.format(template, new List<Object>{ 'Alex', 5 });
System.debug(message);

// Padding — useful for formatting reports
String padded = 'Hello'.leftPad(10);
System.debug('|' + padded + '|'); // |     Hello|`,output:`Name is required
Welcome, Alex! You have 5 new notifications.
|     Hello|`}],quiz:[{id:"q1",question:'What does String.isBlank(s) return for s = "   " (three spaces)?',options:["false, because it has characters","true, because spaces-only is considered blank","null","An error"],correct:1,explanation:'String.isBlank() returns true for null, empty (""), and strings that contain only whitespace.'},{id:"q2",question:'What is the output of "Hello".indexOf("x")?',options:["0","null","-1","An error"],correct:2,explanation:"indexOf() returns -1 when the substring is not found."},{id:"q3",question:"How do you get the first 5 characters of a String s?",options:["s.substring(5)","s.substring(0, 5)","s.left(5)","s.slice(0, 5)"],correct:1,explanation:"substring(startIndex, endIndex) extracts from startIndex up to (not including) endIndex. substring(0, 5) gives characters at positions 0-4."}],challengeId:"challenge-strings"},{id:"apex-conditionals",moduleId:"apex-basics",order:3,title:"Conditionals: if, else, and switch",subtitle:"Make decisions in your code",description:"Learn how to write code that makes decisions based on conditions — the foundation of business logic in Salesforce automation.",duration:25,difficulty:"beginner",tags:["apex","conditionals","logic","if-else"],prerequisites:["apex-variables"],learningObjectives:["Write if, else if, and else blocks","Use comparison operators (==, !=, >, <, >=, <=)","Combine conditions with && (AND) and || (OR)","Use switch statements for multiple-choice logic"],content:[{type:"explanation",title:"Making Decisions with if/else",text:'An if statement runs a block of code only when a condition is true. This is how you build business rules — "if the opportunity amount is over $10,000, require manager approval."'},{type:"example",title:"Basic if / else if / else",text:"Build a lead scoring system using conditionals:",code:`Integer annualRevenue = 500000;
String leadScore;

if (annualRevenue >= 1000000) {
    leadScore = 'Hot';
} else if (annualRevenue >= 250000) {
    leadScore = 'Warm';
} else if (annualRevenue >= 50000) {
    leadScore = 'Cool';
} else {
    leadScore = 'Cold';
}

System.debug('Lead Score: ' + leadScore); // Warm

Boolean isDecisionMaker = true;
Boolean hasUsedCompetitor = false;

if (annualRevenue >= 250000 && isDecisionMaker && !hasUsedCompetitor) {
    System.debug('High priority — send to enterprise team');
} else {
    System.debug('Standard nurture sequence');
}`,output:`Lead Score: Warm
High priority — send to enterprise team`},{type:"explanation",title:"Comparison Operators",text:`**==** equals | **!=** not equals | **>** greater than | **<** less than | **>=** greater than or equal | **<=** less than or equal

In Apex, use **==** to compare Strings. Apex's == for Strings is case-insensitive by default.`},{type:"example",title:"Logical Operators: AND, OR, NOT",text:"Combine conditions to express complex business rules:",code:`Boolean isPremium = true;
Boolean isOverdue = false;
Integer supportTickets = 3;

// AND: both conditions must be true
if (isPremium && supportTickets > 0) {
    System.debug('Priority support applies');
}

// OR: at least one condition must be true
if (isOverdue || supportTickets > 5) {
    System.debug('Escalate to account manager');
} else {
    System.debug('Account is in good standing');
}

// NOT: inverts a boolean
if (!isOverdue) {
    System.debug('Payment is current');
}`,output:`Priority support applies
Account is in good standing
Payment is current`},{type:"example",title:"switch Statements",text:"When checking one variable against many possible values, switch is cleaner than a long if/else chain:",code:`String opportunityStage = 'Negotiation/Review';

switch on opportunityStage {
    when 'Prospecting' {
        System.debug('Send intro materials');
    }
    when 'Qualification' {
        System.debug('Schedule discovery call');
    }
    when 'Negotiation/Review' {
        System.debug('Loop in legal team');
    }
    when 'Closed Won' {
        System.debug('Trigger onboarding workflow');
    }
    when else {
        System.debug('Unknown stage: ' + opportunityStage);
    }
}`,output:"Loop in legal team"}],quiz:[{id:"q1",question:"Integer x = 10; if (x > 5 && x < 8) outputs?",options:["A","B","Both A and B","Nothing"],correct:1,explanation:"x = 10 satisfies x > 5 but NOT x < 8. With AND (&&), both must be true. The else branch runs."},{id:"q2",question:'Which keyword is used in Apex switch statements instead of "case"?',options:["case","when","match","on"],correct:1,explanation:'Apex uses "when" in switch statements. The syntax is: switch on variable { when value { ... } }'},{id:"q3",question:"String a = 'hello'; String b = 'HELLO'; System.debug(a == b); outputs?",options:["false","true","An error","null"],correct:1,explanation:"Apex's == operator for Strings is case-insensitive, so 'hello' == 'HELLO' returns true."}],challengeId:"challenge-conditionals"},{id:"apex-loops",moduleId:"apex-basics",order:4,title:"Loops: for, while, and for-each",subtitle:"Repeat actions and process collections",description:"Learn how to repeat operations, iterate over lists, and process Salesforce records in bulk using Apex loops.",duration:30,difficulty:"beginner",tags:["apex","loops","iteration","collections"],prerequisites:["apex-variables","apex-conditionals"],learningObjectives:["Write traditional for loops with a counter","Use for-each loops to iterate over collections","Use while loops for condition-based repetition","Understand break and continue statements"],content:[{type:"explanation",title:"Why Loops?",text:"In Salesforce, you often need to process many records at once — update 500 Contacts, calculate totals across related Opportunities, or validate a list of imported Leads. Loops let you write the logic once and apply it to every item."},{type:"example",title:"Traditional for Loop",text:"Use a traditional for loop when you need a counter or want to iterate a specific number of times:",code:`// Basic counting loop
for (Integer i = 1; i <= 5; i++) {
    System.debug('Processing item #' + i);
}

// Generate multiplication table
Integer multiplier = 3;
for (Integer i = 1; i <= 5; i++) {
    System.debug(multiplier + ' x ' + i + ' = ' + (multiplier * i));
}`,output:`Processing item #1
Processing item #2
Processing item #3
Processing item #4
Processing item #5
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15`},{type:"example",title:"For-Each Loop (List Iteration)",text:"The for-each loop is the most common loop in Salesforce code:",code:`List<String> stages = new List<String>{
    'Prospecting', 'Qualification', 'Proposal',
    'Negotiation', 'Closed Won'
};

for (String stage : stages) {
    System.debug('Stage: ' + stage);
}

// Calculate total
List<Decimal> amounts = new List<Decimal>{ 1500.00, 3200.50, 800.00, 12000.00 };
Decimal total = 0;
Integer highValueCount = 0;

for (Decimal amount : amounts) {
    total += amount;
    if (amount >= 5000) {
        highValueCount++;
    }
}

System.debug('Total: $' + total);
System.debug('High-value deals: ' + highValueCount);`,output:`Stage: Prospecting
Stage: Qualification
Stage: Proposal
Stage: Negotiation
Stage: Closed Won
Total: $17500.50
High-value deals: 1`},{type:"example",title:"while Loop",text:"Use a while loop when you do not know in advance how many iterations are needed:",code:`Integer value = 1000;
Integer steps = 0;

while (value > 1) {
    value = value / 2;
    steps++;
}

System.debug('Steps to reach 1: ' + steps);
System.debug('Final value: ' + value);`,output:`Steps to reach 1: 10
Final value: 0`},{type:"example",title:"break and continue",text:"Control loop execution:",code:`List<Integer> numbers = new List<Integer>{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// continue — skip even numbers
for (Integer n : numbers) {
    if (Math.mod(n, 2) == 0) continue;
    System.debug(n);
}

// break — stop when condition is met
for (Integer n : numbers) {
    if (n == 5) break;
    System.debug(n);
}`,output:`1
3
5
7
9
1
2
3
4`},{type:"warning",title:"Governor Limits: Never Query Inside a Loop",text:'The most important rule: NEVER put a SOQL query inside a loop. Doing so can hit the 100-query limit instantly. Always query outside the loop, then iterate over the results. This is called "bulkification" and is the #1 pattern every Salesforce developer must learn.'}],quiz:[{id:"q1",question:"What is the output of: for (Integer i = 0; i < 3; i++) { System.debug(i); }",options:["1, 2, 3","0, 1, 2","0, 1, 2, 3","1, 2"],correct:1,explanation:"The loop starts at i=0, runs while i < 3, so it outputs 0, 1, 2."},{id:"q2",question:"Which statement exits a loop immediately?",options:["continue","return","break","exit"],correct:2,explanation:'"break" immediately exits the enclosing loop. "continue" skips to next iteration.'},{id:"q3",question:"Why should you never put a SOQL query inside a loop?",options:["It causes a syntax error","Salesforce limits you to 100 SOQL queries per transaction","SOQL does not work inside loops","It makes the code harder to read"],correct:1,explanation:"Salesforce governor limits allow only 100 SOQL queries per transaction. Always bulkify: query once outside, then iterate."}],challengeId:"challenge-loops"},{id:"apex-lists",moduleId:"apex-basics",order:5,title:"Lists",subtitle:"Ordered collections in Apex",description:"Learn to create, populate, and manipulate ordered lists — the most widely used collection type in Salesforce Apex.",duration:30,difficulty:"beginner",tags:["apex","lists","collections"],prerequisites:["apex-variables","apex-loops"],learningObjectives:["Create and initialize Lists","Add, remove, and access elements","Iterate over Lists with for-each","Sort and search Lists"],content:[{type:"explanation",title:"What is a List?",text:"A List is an ordered collection of items, all of the same type. Lists are zero-indexed — the first element is at index 0. They grow dynamically, so you can add as many items as needed (up to governor limits)."},{type:"example",title:"Creating and Using Lists",text:"The List class provides many methods for managing ordered collections:",code:`// Create an empty list
List<String> names = new List<String>();

// Create with initial values
List<Integer> scores = new List<Integer>{ 85, 92, 78, 96, 88 };

// Add elements
names.add('Alice');
names.add('Bob');
names.add('Charlie');

// Access by index (0-based)
System.debug(names[0]);         // Alice
System.debug(names.get(1));     // Bob

// Size
System.debug(names.size());     // 3

// Check if contains a value
System.debug(names.contains('Bob')); // true

// Remove by index
names.remove(1); // removes Bob
System.debug(names); // (Alice, Charlie)

// Clear all
names.clear();
System.debug(names.size()); // 0`,output:`Alice
Bob
3
true
(Alice, Charlie)
0`},{type:"example",title:"Sorting and Searching",text:"Sort a List in place and find items:",code:`List<Integer> nums = new List<Integer>{ 5, 2, 8, 1, 9, 3 };
nums.sort();
System.debug(nums); // (1, 2, 3, 5, 8, 9)

List<String> fruits = new List<String>{ 'Mango', 'Apple', 'Banana' };
fruits.sort();
System.debug(fruits); // (Apple, Banana, Mango)

// Find max manually
List<Integer> values = new List<Integer>{ 14, 67, 23, 89, 45 };
Integer maxVal = values[0];
for (Integer v : values) {
    if (v > maxVal) maxVal = v;
}
System.debug('Max: ' + maxVal); // Max: 89`,output:`(1, 2, 3, 5, 8, 9)
(Apple, Banana, Mango)
Max: 89`},{type:"example",title:"Lists of Salesforce Records",text:"In Salesforce, you frequently work with Lists of sObject records:",code:`List<Account> accounts = new List<Account>();

Account acct1 = new Account(Name = 'Acme Corp', Industry = 'Technology');
Account acct2 = new Account(Name = 'Globex Inc', Industry = 'Manufacturing');
Account acct3 = new Account(Name = 'Initech', Industry = 'Technology');

accounts.add(acct1);
accounts.add(acct2);
accounts.add(acct3);

for (Account a : accounts) {
    if (a.Industry == 'Technology') {
        System.debug('Tech company: ' + a.Name);
    }
}`,output:`Tech company: Acme Corp
Tech company: Initech`}],quiz:[{id:"q1",question:"What index is the FIRST element of a List in Apex?",options:["1","0","-1","It depends on the list"],correct:1,explanation:"Apex Lists are zero-indexed. The first element is at index 0, the second at index 1."},{id:"q2",question:"What does list.sort() do?",options:["Returns a new sorted list","Sorts the list in place (modifies the original)","Sorts in descending order","Throws an error for non-numeric lists"],correct:1,explanation:"list.sort() sorts the list in-place in ascending order. It modifies the original list."},{id:"q3",question:"What happens if you access list[5] on a list with 3 elements?",options:["Returns null","Returns 0","Throws a System.ListException","Returns the last element"],correct:2,explanation:"Accessing an out-of-bounds index throws a System.ListException at runtime."}],challengeId:"challenge-lists"},{id:"apex-sets",moduleId:"apex-basics",order:6,title:"Sets",subtitle:"Unique, unordered collections",description:"Learn when and how to use Sets — perfect for deduplication, membership checks, and collecting IDs in Salesforce.",duration:20,difficulty:"beginner",tags:["apex","sets","collections","deduplication"],prerequisites:["apex-lists"],learningObjectives:["Create and populate Sets","Understand why Sets prevent duplicates","Use Sets for efficient membership checks","Convert between Sets and Lists"],content:[{type:"explanation",title:"What is a Set?",text:`A Set is a collection that automatically eliminates duplicates. Unlike a List, a Set has no defined order and cannot contain the same value twice. Sets are commonly used for:

• Collecting unique IDs to query
• Deduplicating imported data
• Fast membership checks (is this ID in the set?)`},{type:"example",title:"Creating and Using Sets",text:"Sets automatically reject duplicate values:",code:`Set<String> industries = new Set<String>();

industries.add('Technology');
industries.add('Healthcare');
industries.add('Technology'); // Duplicate — ignored!
industries.add('Finance');

System.debug(industries.size());              // 3
System.debug(industries.contains('Finance')); // true
System.debug(industries.contains('Retail'));  // false

// Iterate — order is not guaranteed!
for (String ind : industries) {
    System.debug('Industry: ' + ind);
}`,output:`3
true
false
Industry: Technology
Industry: Healthcare
Industry: Finance`},{type:"example",title:"Collecting IDs for Bulk Queries",text:"One of the most common Set patterns in Salesforce:",code:`// Collect unique Account IDs from a list of Contacts
List<Contact> contacts = new List<Contact>();
contacts.add(new Contact(LastName = 'Smith', AccountId = '001000000000001'));
contacts.add(new Contact(LastName = 'Jones', AccountId = '001000000000002'));
contacts.add(new Contact(LastName = 'Brown', AccountId = '001000000000001')); // same Account!

Set<ID> accountIds = new Set<ID>();
for (Contact c : contacts) {
    accountIds.add(c.AccountId);
}

System.debug('Unique accounts to query: ' + accountIds.size()); // 2

// Now query once with all IDs (not in a loop!)
// List<Account> accounts = [SELECT Id, Name FROM Account WHERE Id IN :accountIds];`,output:"Unique accounts to query: 2"},{type:"example",title:"Converting Between Set and List",text:"Sets and Lists can be easily converted to each other:",code:`// List to Set — removes duplicates
List<String> rawTags = new List<String>{ 'vip', 'prospect', 'vip', 'hot' };
Set<String> uniqueTags = new Set<String>(rawTags);
System.debug(uniqueTags.size()); // 3

// Set to List — so you can sort or access by index
List<String> sortedTags = new List<String>(uniqueTags);
sortedTags.sort();
System.debug(sortedTags); // (hot, prospect, vip)`,output:`3
(hot, prospect, vip)`}],quiz:[{id:"q1",question:"What happens when you add a duplicate value to a Set?",options:["It throws an exception","The Set stores both copies","The new value replaces the old one","The add() call is silently ignored"],correct:3,explanation:"Sets silently ignore duplicate adds. set.add() returns false if the value already exists, size stays the same."},{id:"q2",question:"Why are Sets commonly used to collect Salesforce IDs before a SOQL query?",options:["Sets are faster to iterate than Lists","To deduplicate IDs so you only query each record once","SOQL only accepts Set types","IDs cannot be stored in Lists"],correct:1,explanation:"Using a Set ensures you query each record at most once, avoiding unnecessary governor limit usage."}],challengeId:"challenge-sets"},{id:"apex-maps",moduleId:"apex-basics",order:7,title:"Maps",subtitle:"Key-value pair collections",description:"Master Maps — one of the most powerful data structures in Apex for fast lookups and indexed access.",duration:30,difficulty:"beginner",tags:["apex","maps","collections","key-value"],prerequisites:["apex-lists","apex-sets"],learningObjectives:["Create and populate Maps","Get, put, and remove key-value pairs","Iterate over keys, values, and entries","Use Map<ID, sObject> for efficient record lookup"],content:[{type:"explanation",title:"What is a Map?",text:"A Map stores data as key → value pairs, where each key is unique. Think of it like a dictionary: you look up a word (key) to get its definition (value). Maps allow constant-time lookup, making them ideal for finding records by ID."},{type:"example",title:"Creating and Using Maps",text:"Basic Map operations:",code:`Map<String, Integer> stageOrder = new Map<String, Integer>();

stageOrder.put('Prospecting', 1);
stageOrder.put('Qualification', 2);
stageOrder.put('Proposal', 3);
stageOrder.put('Negotiation', 4);
stageOrder.put('Closed Won', 5);

// Get a value by key
Integer order = stageOrder.get('Proposal');
System.debug('Proposal is step: ' + order); // 3

// Check if key exists
System.debug(stageOrder.containsKey('Demo'));        // false
System.debug(stageOrder.containsKey('Negotiation')); // true

// Size
System.debug(stageOrder.size()); // 5

// Iterate over entries
for (String stage : stageOrder.keySet()) {
    System.debug(stage + ' -> ' + stageOrder.get(stage));
}`,output:`Proposal is step: 3
false
true
5
Prospecting -> 1
Qualification -> 2
...`},{type:"example",title:"Map<ID, Account>: The Most Important Pattern",text:"Build a Map from a SOQL query for fast record lookup:",code:`// Build a lookup map from SOQL results
// Map<ID, Account> accountMap = new Map<ID, Account>(
//   [SELECT Id, Name FROM Account LIMIT 100]
// );

// Iterate over a Map with pricing
Map<String, Decimal> prices = new Map<String, Decimal>{
    'Starter' => 29.99,
    'Professional' => 79.99,
    'Enterprise' => 299.99
};

for (String plan : prices.keySet()) {
    Decimal price = prices.get(plan);
    System.debug(plan + ': $' + price);
}

// Safe lookup with null check
Decimal startPrice = prices.get('Starter');
if (startPrice != null) {
    System.debug('Starter plan costs: $' + startPrice);
}`,output:`Starter: $29.99
Professional: $79.99
Enterprise: $299.99
Starter plan costs: $29.99`}],quiz:[{id:"q1",question:"What does map.get(key) return if the key does not exist?",options:["An empty string","0","null","It throws a KeyNotFoundException"],correct:2,explanation:"map.get(key) returns null if the key does not exist. Always check for null before using the result."},{id:"q2",question:"What is the key type in a Map<ID, Account>?",options:["Account","ID","String","sObject"],correct:1,explanation:"In Map<K, V>, the first type parameter is the key type. In Map<ID, Account>, ID is the key type."}],challengeId:"challenge-maps"},{id:"apex-classes",moduleId:"apex-basics",order:8,title:"Apex Classes and Methods",subtitle:"Organize your code into reusable units",description:"Learn how to create Apex classes with properties and methods to build organized, reusable business logic.",duration:35,difficulty:"beginner",tags:["apex","classes","methods","oop"],prerequisites:["apex-variables","apex-conditionals","apex-loops"],learningObjectives:["Create Apex classes with properties","Write methods with parameters and return values","Understand access modifiers (public, private)","Create constructors"],content:[{type:"explanation",title:"What is an Apex Class?",text:"A class is a blueprint for creating objects. It bundles related data (properties) and behavior (methods) together. In Salesforce, all Apex code lives inside classes — triggers call them, flows invoke them, and APIs use them."},{type:"example",title:"Your First Apex Class",text:"A simple class to model a pricing calculator:",code:`public class PricingCalculator {

    private Decimal basePrice;
    private Decimal discountRate;
    public String currency;

    // Constructor
    public PricingCalculator(Decimal price) {
        this.basePrice = price;
        this.discountRate = 0;
        this.currency = 'USD';
    }

    // Constructor with discount
    public PricingCalculator(Decimal price, Decimal discount) {
        this.basePrice = price;
        this.discountRate = discount;
        this.currency = 'USD';
    }

    public Decimal getFinalPrice() {
        return basePrice - (basePrice * discountRate);
    }

    public String formatPrice() {
        return currency + ' ' + getFinalPrice().setScale(2);
    }

    // Static method — doesn't need an instance
    public static Decimal applyTax(Decimal price, Decimal taxRate) {
        return price * (1 + taxRate);
    }
}

// Using the class:
PricingCalculator calc = new PricingCalculator(100.00, 0.20);
System.debug(calc.getFinalPrice());                  // 80.00
System.debug(calc.formatPrice());                    // USD 80.00
System.debug(PricingCalculator.applyTax(80, 0.08)); // 86.40`,output:`80.00
USD 80.00
86.40`},{type:"explanation",title:"Access Modifiers",text:`**public** — accessible from anywhere
**private** — only accessible within the same class
**protected** — accessible within the class and subclasses
**global** — accessible from any Apex code, including external packages

Best practice: keep properties private and expose them through methods (encapsulation).`},{type:"example",title:"Static vs Instance Members",text:"Static members belong to the class; instance members belong to each object:",code:`public class Counter {
    private Integer count;
    private static Integer totalCreated = 0;

    public Counter() {
        count = 0;
        totalCreated++;
    }

    public void increment() { count++; }
    public Integer getCount() { return count; }

    public static Integer getTotalCreated() {
        return totalCreated;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
c1.increment();
c1.increment();
c2.increment();

System.debug('c1 count: ' + c1.getCount()); // 2
System.debug('c2 count: ' + c2.getCount()); // 1
System.debug('Total: ' + Counter.getTotalCreated()); // 2`,output:`c1 count: 2
c2 count: 1
Total: 2`}],quiz:[{id:"q1",question:"What access modifier makes a method accessible only within its own class?",options:["public","protected","private","local"],correct:2,explanation:'"private" restricts access to only code within the same class.'},{id:"q2",question:"How do you call a static method named calculate() on a class named TaxHelper?",options:["new TaxHelper().calculate()","TaxHelper.calculate()","TaxHelper::calculate()","static.TaxHelper.calculate()"],correct:1,explanation:"Static methods are called on the class directly: ClassName.methodName(). No new keyword needed."},{id:"q3",question:"What is a constructor used for?",options:["To destroy an object when done","To define the return type",'To initialize an object when created with "new"',"To declare static variables"],correct:2,explanation:'A constructor runs automatically when you create a new instance with "new ClassName()". It sets up initial property values.'}],challengeId:"challenge-classes"},{id:"soql-basics",moduleId:"soql",order:9,title:"SOQL Fundamentals",subtitle:"Query your Salesforce data like a pro",description:"Learn how to write SOQL queries to read data from Salesforce objects",duration:30,difficulty:"beginner",tags:["soql","queries","select","where","order by"],prerequisites:["apex-classes"],learningObjectives:["Write a basic SELECT query","Filter records with WHERE clauses","Sort and limit results","Query related objects with relationship queries","Use aggregate functions like COUNT and SUM"],content:[{type:"explanation",title:"What is SOQL?",text:`SOQL stands for Salesforce Object Query Language. It is how you read data stored in Salesforce.

Think of it like asking a question to your database:
"Give me all Accounts where the industry is Technology, sorted by name."

SOQL only reads data — it never creates, updates, or deletes records. For that, you use DML (covered in the next lesson).

SOQL looks very similar to SQL if you have seen it before, but it is designed specifically for the Salesforce data model.`},{type:"example",title:"Basic SELECT Query",text:`The simplest SOQL query has three parts:

SELECT   — which fields you want
FROM     — which object to query

\`\`\`sql
SELECT Id, Name, Industry
FROM Account
\`\`\`

This returns all Account records with their Id, Name, and Industry fields.

You can select as many fields as you need, separated by commas. Always include Id — it is the unique identifier for every record.`},{type:"example",title:"Filtering with WHERE",text:`Use WHERE to filter which records you get back.

\`\`\`sql
SELECT Id, Name, Industry
FROM Account
WHERE Industry = 'Technology'
\`\`\`

Common comparison operators:
  =      equals
  !=     not equals
  >      greater than
  <      less than
  >=     greater than or equal
  <=     less than or equal
  LIKE   pattern matching (use % as wildcard)
  IN     matches any value in a list

Examples:

\`\`\`sql
-- Accounts with more than 500 employees
SELECT Id, Name, NumberOfEmployees
FROM Account
WHERE NumberOfEmployees > 500

-- Contacts with a Gmail address
SELECT Id, FirstName, LastName, Email
FROM Contact
WHERE Email LIKE '%@gmail.com'

-- Opportunities in specific stages
SELECT Id, Name, StageName, Amount
FROM Opportunity
WHERE StageName IN ('Prospecting', 'Qualification', 'Proposal')
\`\`\``},{type:"example",title:"Combining Conditions with AND / OR",text:`You can combine multiple conditions using AND and OR.

\`\`\`sql
-- Technology accounts with more than 100 employees
SELECT Id, Name, Industry, NumberOfEmployees
FROM Account
WHERE Industry = 'Technology'
AND NumberOfEmployees > 100

-- Accounts in Technology OR Finance
SELECT Id, Name, Industry
FROM Account
WHERE Industry = 'Technology'
OR Industry = 'Finance'
\`\`\`

Use parentheses to group conditions and control precedence:

\`\`\`sql
SELECT Id, Name, Industry, NumberOfEmployees
FROM Account
WHERE (Industry = 'Technology' OR Industry = 'Finance')
AND NumberOfEmployees > 200
\`\`\``},{type:"example",title:"Sorting with ORDER BY",text:`Use ORDER BY to sort results. Add ASC (ascending, A→Z) or DESC (descending, Z→A).

\`\`\`sql
-- Sort accounts alphabetically by name
SELECT Id, Name
FROM Account
ORDER BY Name ASC

-- Sort opportunities by amount, largest first
SELECT Id, Name, Amount
FROM Opportunity
ORDER BY Amount DESC

-- Sort by multiple fields
SELECT Id, LastName, FirstName
FROM Contact
ORDER BY LastName ASC, FirstName ASC
\`\`\``},{type:"example",title:"Limiting Results with LIMIT",text:`LIMIT caps how many records are returned. Always use LIMIT to avoid pulling thousands of records unnecessarily.

\`\`\`sql
-- Get the 10 most recently created accounts
SELECT Id, Name, CreatedDate
FROM Account
ORDER BY CreatedDate DESC
LIMIT 10

-- Get just one record
SELECT Id, Name
FROM Account
WHERE Name = 'Acme Corp'
LIMIT 1
\`\`\`

LIMIT is required when running SOQL in loops (governor limits). You can query a maximum of 50,000 records per transaction.`},{type:"example",title:"NULL Checks",text:`To check if a field is empty, use = null or != null (not IS NULL like in standard SQL).

\`\`\`sql
-- Contacts without an email address
SELECT Id, FirstName, LastName
FROM Contact
WHERE Email = null

-- Opportunities that have a close date set
SELECT Id, Name, CloseDate
FROM Opportunity
WHERE CloseDate != null
\`\`\``},{type:"example",title:"Relationship Queries (Parent → Child)",text:`Salesforce records are connected. You can query related data in one query.

CHILD TO PARENT — use dot notation to get fields from a parent record:

\`\`\`sql
-- Get contact name AND their account name in one query
SELECT Id, FirstName, LastName, Account.Name, Account.Industry
FROM Contact
WHERE Account.Industry = 'Technology'
\`\`\`

PARENT TO CHILD — use a subquery to get related child records:

\`\`\`sql
-- Get accounts and all their contacts
SELECT Id, Name,
  (SELECT Id, FirstName, LastName FROM Contacts)
FROM Account
WHERE Industry = 'Technology'
\`\`\`

The child object name in a subquery uses the relationship name (usually the plural of the child object — Contacts, Opportunities, Cases).`},{type:"example",title:"Aggregate Functions",text:`SOQL supports aggregate functions to calculate summaries across records.

\`\`\`sql
-- Count all accounts
SELECT COUNT()
FROM Account

-- Count accounts per industry
SELECT Industry, COUNT(Id)
FROM Account
GROUP BY Industry

-- Total opportunity amount per stage
SELECT StageName, SUM(Amount), COUNT(Id)
FROM Opportunity
GROUP BY StageName

-- Average employee count
SELECT AVG(NumberOfEmployees)
FROM Account
WHERE Industry = 'Technology'
\`\`\`

Available aggregate functions: COUNT(), SUM(), AVG(), MIN(), MAX()

Use GROUP BY when you want totals broken down by a field. Use HAVING to filter groups (like WHERE but for aggregates):

\`\`\`sql
-- Industries with more than 5 accounts
SELECT Industry, COUNT(Id)
FROM Account
GROUP BY Industry
HAVING COUNT(Id) > 5
\`\`\``},{type:"note",title:"SOQL vs SQL — Key Differences",text:`If you know SQL, here are the important differences in SOQL:

✓ No SELECT * — you must list field names explicitly (or use Id, Name, etc.)
✓ No JOIN — use relationship queries (dot notation or subqueries) instead
✓ Use = null instead of IS NULL
✓ String values use single quotes: WHERE Name = 'Acme'
✓ Dates use a special format: WHERE CloseDate > 2024-01-01
✓ There is no DISTINCT keyword
✓ Governor limit: max 50,000 records per query, 100 queries per transaction`},{type:"tip",title:"Query Builder in This App",text:"Use the SOQL Explorer tool in this app to build and test queries visually. You can select fields, add filters, sort results, and see the matching records from the sample dataset — all without needing a real Salesforce org."}],quiz:[{id:"soql-q1",question:"What keyword do you use to filter records in a SOQL query?",options:["FILTER","WHERE","HAVING","CONDITION"],correct:1,explanation:"WHERE is used to filter which records are returned. HAVING is used to filter grouped aggregate results."},{id:"soql-q2",question:"Which query returns accounts sorted from most employees to fewest?",options:["SELECT Id, Name FROM Account SORT BY NumberOfEmployees","SELECT Id, Name FROM Account ORDER BY NumberOfEmployees DESC","SELECT Id, Name FROM Account ORDER BY NumberOfEmployees ASC","SELECT Id, Name FROM Account WHERE NumberOfEmployees > 0"],correct:1,explanation:"ORDER BY field DESC sorts in descending order (largest to smallest). ASC is ascending (smallest to largest)."},{id:"soql-q3",question:"How do you check if a field has no value in SOQL?",options:["WHERE Email IS NULL","WHERE Email = NULL","WHERE Email = null","WHERE Email == null"],correct:2,explanation:"SOQL uses = null (lowercase) to check for empty fields, unlike SQL which uses IS NULL."},{id:"soql-q4",question:"What does LIMIT 10 do in a SOQL query?",options:["Skips the first 10 records","Returns only the first 10 records","Filters records where a field is less than 10","Groups records into batches of 10"],correct:1,explanation:"LIMIT caps the number of records returned. LIMIT 10 means at most 10 records come back."}],challengeId:"challenge-soql"},{id:"apex-dml",moduleId:"dml",order:1,title:"DML: Saving Data to Salesforce",subtitle:"Insert, update, delete, and upsert records",description:"Learn how to create, modify, and delete Salesforce records using Data Manipulation Language (DML) operations in Apex.",duration:35,difficulty:"beginner",tags:["apex","dml","database","insert","update"],prerequisites:["soql-basics","apex-lists"],learningObjectives:["Use insert to create new records","Use update to modify existing records","Use delete to remove records","Use upsert to insert or update based on a key","Handle DML exceptions safely"],content:[{type:"explanation",title:"What is DML?",text:`DML (Data Manipulation Language) is how you write data to the Salesforce database. Five main DML operations:

• **insert** — create new records
• **update** — modify existing records
• **delete** — remove records
• **upsert** — insert if new, update if exists
• **undelete** — restore deleted records from the recycle bin`},{type:"example",title:"Insert: Creating Records",text:"Create single or bulk records:",code:`// Insert a single record
Account newAcct = new Account(
    Name = 'Stellar Dynamics',
    Industry = 'Technology',
    Phone = '415-555-0100'
);
insert newAcct;
// After insert, newAcct.Id is populated!
System.debug('Created Account ID: ' + newAcct.Id);

// Bulk insert — ALWAYS prefer this
List<Contact> contacts = new List<Contact>();
for (Integer i = 1; i <= 5; i++) {
    contacts.add(new Contact(
        FirstName = 'Employee',
        LastName = String.valueOf(i),
        AccountId = newAcct.Id,
        Email = 'employee' + i + '@stellar.com'
    ));
}
insert contacts; // ONE DML statement for all 5 records
System.debug('Created ' + contacts.size() + ' contacts');`,output:`Created Account ID: 001000000000001AAA
Created 5 contacts`},{type:"example",title:"Update and Upsert",text:"Modify existing records or insert-or-update:",code:`// Update: query first, then modify, then save
List<Account> toUpdate = [SELECT Id, AnnualRevenue
                           FROM Account
                           WHERE Name = 'Stellar Dynamics'
                           LIMIT 1];

if (!toUpdate.isEmpty()) {
    toUpdate[0].AnnualRevenue = 5000000;
    update toUpdate[0];
    System.debug('Updated successfully');
}

// Upsert using an external ID field
Account extAcct = new Account(
    Name = 'Partner Co',
    External_ID__c = 'PARTNER-001'
);
upsert extAcct Account.External_ID__c;
// If External_ID__c = 'PARTNER-001' exists → update
// Otherwise → insert`,output:"Updated successfully"},{type:"example",title:"DML Exception Handling",text:"Handle failures gracefully with try/catch:",code:`try {
    Account badAcct = new Account(); // Missing required Name!
    insert badAcct;
} catch (DmlException e) {
    System.debug('DML Error: ' + e.getMessage());
}

// Database.insert with partial success
List<Account> accts = new List<Account>{
    new Account(Name = 'Good Account'),
    new Account(), // Missing name — will fail
    new Account(Name = 'Another Good One')
};

Database.SaveResult[] results = Database.insert(accts, false);
for (Integer i = 0; i < results.size(); i++) {
    if (results[i].isSuccess()) {
        System.debug('Record ' + i + ' inserted: ' + results[i].getId());
    } else {
        System.debug('Record ' + i + ' failed: ' +
            results[i].getErrors()[0].getMessage());
    }
}`,output:`DML Error: Insert failed...
Record 0 inserted: 001...
Record 1 failed: Required fields are missing: [Name]
Record 2 inserted: 001...`},{type:"warning",title:"DML Governor Limits",text:`Like SOQL, DML has strict limits:
• Max 150 DML statements per transaction
• Max 10,000 records per DML operation

Always use bulk DML (pass a List) rather than individual DML in a loop.`}],quiz:[{id:"q1",question:'After executing "insert myAccount;", what happens to myAccount.Id?',options:["It remains null","Salesforce populates it with the new record ID",'It is set to "pending"',"You must query it separately"],correct:1,explanation:"After a successful DML insert, Salesforce automatically populates the Id field on your Apex object."},{id:"q2",question:"What does upsert do differently from insert?",options:["upsert can delete records too","upsert inserts if the record does not exist, updates it if it does","upsert is faster than insert","upsert only works with custom objects"],correct:1,explanation:'"upsert" combines insert + update: if a matching record exists, it updates; otherwise, it inserts.'},{id:"q3",question:"What is the benefit of Database.insert(list, false)?",options:["It is faster","It allows partial success — some records can succeed even if others fail","It bypasses validation rules","It skips duplicate checking"],correct:1,explanation:"Database.insert(list, false) sets allOrNothing to false, allowing partial success even when some records fail."}],challengeId:"challenge-dml"},{id:"apex-exception-handling",moduleId:"apex-exceptions",order:1,title:"Exception Handling in Apex",subtitle:"Write bulletproof code that handles failures gracefully",description:"Learn how to catch and recover from runtime errors in Apex using try/catch/finally, specific exception types, and custom exceptions.",duration:25,difficulty:"beginner",tags:["apex","exceptions","try-catch","error-handling","DmlException"],prerequisites:["apex-dml"],learningObjectives:["Write try/catch/finally blocks to handle runtime errors","Catch specific exception types like DmlException and QueryException","Create custom exception classes for domain-specific errors","Use e.getMessage() and e.getStackTraceString() to log errors"],content:[{type:"explanation",title:"Real-World Business Context",text:`Exception handling prevents small errors from crashing entire transactions:

• **Bulk data imports** — when processing 200 leads, one bad record should not roll back the other 199. Catch per-record errors with Database.insert(allOrNone=false)
• **Callout failures** — if an external API is down, catch the exception, log it, and queue a retry rather than surfacing a raw error to the user
• **Validation feedback** — throw a custom exception with a business-readable message when data violates a rule, so the calling code can display it cleanly`},{type:"example",title:"try / catch / finally",text:"The basic structure for handling exceptions:",code:`public class AccountService {

    public static Account getAccount(Id accountId) {
        try {
            // Code that might throw an exception
            Account acc = [SELECT Id, Name, AnnualRevenue
                           FROM Account WHERE Id = :accountId LIMIT 1];
            System.debug('Found: ' + acc.Name);
            return acc;

        } catch (QueryException e) {
            // Runs if the SOQL query fails (e.g. record not found)
            System.debug('Query failed: ' + e.getMessage());
            System.debug('Stack trace: ' + e.getStackTraceString());
            return null;

        } catch (Exception e) {
            // Catch-all for any other exception type
            System.debug('Unexpected error: ' + e.getMessage());
            throw e; // rethrow to let the caller handle it

        } finally {
            // Always runs — regardless of success or exception
            System.debug('getAccount() completed');
        }
    }
}`,output:`getAccount() completed
// (even if an exception occurred)`},{type:"explanation",title:"Common Apex Exception Types",text:`• **DmlException** — insert/update/delete failures (required fields missing, duplicate rules violated)
• **QueryException** — SOQL issues (too many rows, no rows when exactly one expected with assignment)
• **NullPointerException** — calling a method on a null variable
• **ListException** — accessing a List index out of bounds
• **CalloutException** — HTTP callout errors
• **Exception** — the base class for all exceptions (catch-all)

Always catch the most specific exception first, then broader ones.`},{type:"example",title:"Custom Exception Classes",text:"Create domain-specific exceptions with meaningful names and messages:",code:`// Define custom exceptions — extend Exception
public class AccountService {

    public class InsufficientCreditException extends Exception {}
    public class AccountNotFoundException extends Exception {}

    public static void processOrder(Id accountId, Decimal orderAmount) {
        Account acc;
        try {
            acc = [SELECT Id, Name, CreditLimit__c
                   FROM Account WHERE Id = :accountId LIMIT 1];
        } catch (QueryException e) {
            throw new AccountNotFoundException(
                'Account not found: ' + accountId
            );
        }

        if (acc.CreditLimit__c < orderAmount) {
            throw new InsufficientCreditException(
                acc.Name + ' has insufficient credit. ' +
                'Limit: $' + acc.CreditLimit__c + ', Order: $' + orderAmount
            );
        }

        System.debug('Order approved for ' + acc.Name);
    }
}

// Caller handles specific exceptions:
try {
    AccountService.processOrder(someId, 50000);
} catch (AccountService.InsufficientCreditException e) {
    System.debug('Credit issue: ' + e.getMessage());
} catch (AccountService.AccountNotFoundException e) {
    System.debug('Not found: ' + e.getMessage());
}`,output:"Credit issue: Acme Corp has insufficient credit. Limit: $25000, Order: $50000"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this exception handling code?

\`\`\`apex
try {
    Account acc = [SELECT Id FROM Account WHERE Id = :someId LIMIT 1];
    insert acc;
} catch (Exception e) {
    System.debug(e.getMessage());
} catch (DmlException e) {
    System.debug('DML error: ' + e.getMessage());
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`The catch blocks are in the wrong order. \`catch (Exception e)\` catches ALL exceptions — including DmlException. Since Exception is the base class, it catches everything first, and the \`catch (DmlException e)\` block is dead code that can never execute.

Fixed version — most specific exception first:
\`\`\`apex
try {
    Account acc = [SELECT Id FROM Account WHERE Id = :someId LIMIT 1];
    insert acc;
} catch (QueryException e) {
    System.debug('Query error: ' + e.getMessage());
} catch (DmlException e) {
    System.debug('DML error: ' + e.getMessage());
} catch (Exception e) {
    System.debug('Unexpected: ' + e.getMessage());
}
\`\`\`

Always order catch blocks from most specific to least specific.`},{type:"tip",title:"Other Approaches",text:"**Database.insert(list, false)** (allOrNone=false) is an alternative to try/catch for DML — it returns SaveResult[] so you can check each record's success/failure without an exception being thrown. Use this for bulk operations where partial success is acceptable. Use try/catch for single-record operations or when you need to roll back the entire transaction on failure."}],quiz:[{id:"exc-q1",question:"Which code block always runs, whether an exception occurred or not?",options:["catch","try","finally","throw"],correct:2,explanation:"The finally block always executes after try and catch — it is used for cleanup code like closing connections or logging completion."},{id:"exc-q2",question:"What is wrong with this order: catch(Exception e) THEN catch(DmlException e)?",options:["Nothing — it is correct","Exception is a base class and catches everything — DmlException block is unreachable","DmlException must always be caught first","You cannot catch both Exception and DmlException"],correct:1,explanation:"Exception is the superclass of all exceptions. If listed first, it catches DmlException too, making the DmlException catch unreachable. Always list specific exceptions first."},{id:"exc-q3",question:"How do you create a custom exception class in Apex?",options:["public class MyException implements Exception {}","public class MyException extends Exception {}","public exception class MyException {}","exception MyException = new Exception();"],correct:1,explanation:"Custom exceptions extend the Exception class: public class MyException extends Exception {}. No body is required — the constructor and getMessage() are inherited."},{id:"exc-q4",question:"Which exception is thrown when you call a method on a null variable?",options:["DmlException","CalloutException","NullPointerException","ListException"],correct:2,explanation:"NullPointerException is thrown when you dereference a null value, such as calling name.length() when name is null."}],challengeId:"challenge-apex-exceptions"},{id:"apex-test-basics",moduleId:"apex-testing",order:1,title:"Writing Your First Apex Test Class",subtitle:"Ensure your code works with automated tests",description:"Learn how to write Apex test classes with @isTest, assert methods, and Test.startTest/stopTest to verify your business logic.",duration:35,difficulty:"intermediate",tags:["apex","testing","@isTest","unit-tests","coverage"],prerequisites:["apex-classes","apex-dml"],learningObjectives:["Create a test class using the @isTest annotation","Write test methods that assert expected outcomes","Use Test.startTest() and Test.stopTest() to isolate governor limits","Understand the 75% code coverage requirement for production deployment"],content:[{type:"explanation",title:"Real-World Business Context",text:`Apex tests are mandatory in Salesforce — not optional:

• **Production deployments require 75% code coverage** — Salesforce enforces this automatically; without tests, your code cannot ship
• **Regression safety** — a test suite catches when a new trigger breaks an existing feature before it reaches users
• **CI/CD pipelines** — automated deployments run tests on every pull request, catching bugs before merge
• **Refactoring confidence** — tests let you restructure code aggressively knowing the behavior is verified`},{type:"explanation",title:"Anatomy of a Test Class",text:`A test class is a regular Apex class annotated with @isTest. It never counts against your org's code limit. Test methods are annotated with @isTest (or the older @testMethod). Test classes cannot be instantiated by other code.

Key rules:
• Test data is not visible to production data and vice versa (SeeAllData=false by default)
• Tests must call real Apex code — they cannot call real external services
• Test assertions use System.assert*, System.assertEquals, System.assertNotEquals`},{type:"example",title:"Your First Test Class",text:"Test a PricingCalculator class with happy path and edge cases:",code:`@isTest
private class PricingCalculatorTest {

    @isTest
    static void testGetFinalPrice_withDiscount() {
        // Arrange
        PricingCalculator calc = new PricingCalculator(100.00, 0.20);

        // Act
        Test.startTest();
        Decimal result = calc.getFinalPrice();
        Test.stopTest();

        // Assert
        System.assertEquals(80.00, result,
            'Price with 20% discount should be 80.00');
    }

    @isTest
    static void testGetFinalPrice_noDiscount() {
        PricingCalculator calc = new PricingCalculator(50.00);
        System.assertEquals(50.00, calc.getFinalPrice(),
            'No discount should return base price');
    }

    @isTest
    static void testApplyTax() {
        Decimal taxed = PricingCalculator.applyTax(100.00, 0.08);
        System.assertEquals(108.00, taxed, '8% tax on $100 should be $108');
    }

    @isTest
    static void testFormatPrice() {
        PricingCalculator calc = new PricingCalculator(100.00, 0.10);
        String formatted = calc.formatPrice();
        System.assert(formatted.contains('90'),
            'Formatted price should contain the final amount');
    }
}`,output:"All tests pass — 4/4"},{type:"explanation",title:"Test.startTest() and Test.stopTest()",text:`Wrapping the code-under-test with Test.startTest() and Test.stopTest() gives that code a **fresh set of governor limits** — separate from the test setup code. This means:

• Your test setup (creating records) uses one limit allocation
• The code being tested uses its own fresh limits

Always wrap the actual execution you are testing between startTest/stopTest. For async Apex (future, batch, queueable), stopTest() also forces the async job to run synchronously in the test.`},{type:"example",title:"Testing DML and Database State",text:"Test that a trigger or service method correctly modifies records:",code:`@isTest
private class AccountServiceTest {

    @isTest
    static void testCreateAccount_setsDefaults() {
        // Arrange
        Account acc = new Account(Name = 'Test Corp');

        // Act
        Test.startTest();
        insert acc;
        Test.stopTest();

        // Assert — re-query to get trigger-modified values
        Account result = [SELECT Id, BillingCountry, Rating
                          FROM Account WHERE Id = :acc.Id];

        System.assertEquals('United States', result.BillingCountry,
            'Trigger should default BillingCountry');
        System.assertNotEquals(null, result.Rating,
            'Rating should be defaulted by trigger');
    }

    @isTest
    static void testCreateAccount_negativeCase() {
        // Test that missing required field throws an exception
        Account badAcc = new Account(); // Missing Name
        Boolean exceptionThrown = false;

        try {
            insert badAcc;
        } catch (DmlException e) {
            exceptionThrown = true;
            System.assert(e.getMessage().contains('Name'),
                'Error should mention the missing Name field');
        }

        System.assert(exceptionThrown, 'DmlException should have been thrown');
    }
}`,output:"All tests pass — trigger defaults verified, error case verified"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this test method?

\`\`\`apex
@isTest
static void testCalculate() {
    PricingCalculator calc = new PricingCalculator(100, 0.10);
    Decimal result = calc.getFinalPrice();
    System.assertEquals(result, 90.00); // <-- look at argument order
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:'System.assertEquals() takes arguments in the order **(expected, actual)**. The test has them reversed: `assertEquals(result, 90.00)` means "assert that result equals 90.00" — but the error message will say "expected: 95.00, actual: 90.00" if the test fails, which is backwards and confusing.\n\nFixed:\n```apex\nSystem.assertEquals(90.00, result, \'10% discount on $100 should be $90\');\n```\n\nAlways use: `assertEquals(expectedValue, actualValue, optionalMessage)`. Always include a message so failures are self-explanatory.'},{type:"tip",title:"What Code Coverage Actually Means",text:"Coverage measures which lines of code are **executed** by tests — not whether the logic is correct. 100% coverage with no assertions is worthless. Focus on asserting **outcomes** (what the code should do), not just making lines execute. A well-asserted test at 80% is worth more than a coverage-only test at 100%."}],quiz:[{id:"test-q1",question:"What is the minimum code coverage required to deploy Apex to production?",options:["50%","75%","90%","100%"],correct:1,explanation:"Salesforce requires at least 75% code coverage across all Apex code (excluding test classes) before you can deploy to production."},{id:"test-q2",question:"What does Test.startTest() do?",options:["Runs all test methods in the class","Gives the code-under-test a fresh set of governor limits","Mocks external callouts automatically","Resets the database to an empty state"],correct:1,explanation:"Test.startTest() resets the governor limit counters, so the code being tested starts with fresh limits separate from the test setup code. Test.stopTest() forces any async jobs to run synchronously."},{id:"test-q3",question:"What is the correct argument order for System.assertEquals()?",options:["(actual, expected)","(expected, actual)","(message, expected, actual)","(actual, expected, message)"],correct:1,explanation:"System.assertEquals(expected, actual) — expected value first, then the actual value from your code. The optional third argument is a failure message."},{id:"test-q4",question:"After inserting a record in a test, you want to verify a field that a trigger should have set. What must you do before asserting?",options:["Nothing — the in-memory object is updated automatically","Re-query the record from the database to get trigger-modified values","Call Test.stopTest() first","Use Trigger.new to access the modified values"],correct:1,explanation:"Triggers modify records at the database level. The in-memory Apex object from before the insert does not automatically reflect trigger changes. You must re-query to get the trigger-modified values."}],challengeId:"challenge-apex-test-basics"},{id:"apex-test-data",moduleId:"apex-testing",order:2,title:"Test Data Factories & @testSetup",subtitle:"Build reusable, isolated test data for fast, reliable tests",description:"Learn how to use @testSetup, Test Data Factory patterns, and Database.insert with partial success to write fast, clean tests.",duration:30,difficulty:"intermediate",tags:["apex","testing","test-data","@testSetup","factory-pattern"],prerequisites:["apex-test-basics"],learningObjectives:["Use @testSetup to create shared test data once per test class","Build a Test Data Factory class for reusable record creation","Understand why tests must not rely on existing org data (SeeAllData=false)","Use Database.insert(list, false) for bulk test data with error checking"],content:[{type:"explanation",title:"Real-World Business Context",text:`Test data management determines whether your test suite is fast or slow, reliable or flaky:

• **Slow test suites** are often caused by each test method re-creating dozens of records. @testSetup creates data once for the whole class, cutting runtime 60-80%
• **Flaky tests** often query existing org data with SeeAllData=true. The data changes, the test breaks. Always create your own isolated test data
• **Test Data Factories** are the standard professional pattern — a single class creates all test records consistently across hundreds of test classes`},{type:"example",title:"@testSetup — Create Data Once Per Class",text:"@testSetup runs once before any test method. All test methods in the class share the same data via fresh queries:",code:`@isTest
private class OpportunityServiceTest {

    // Runs ONCE before all test methods in this class
    @testSetup
    static void setupData() {
        Account acc = new Account(
            Name = 'Test Corp',
            Industry = 'Technology',
            AnnualRevenue = 1000000
        );
        insert acc;

        List<Opportunity> opps = new List<Opportunity>{
            new Opportunity(
                Name = 'Deal A',
                AccountId = acc.Id,
                StageName = 'Prospecting',
                CloseDate = Date.today().addDays(30)
            ),
            new Opportunity(
                Name = 'Deal B',
                AccountId = acc.Id,
                StageName = 'Closed Won',
                CloseDate = Date.today()
            )
        };
        insert opps;
    }

    @isTest
    static void testOpenOpportunities() {
        // Re-query the shared data — each test method gets a fresh db state
        List<Opportunity> open = [
            SELECT Id, Name FROM Opportunity WHERE StageName != 'Closed Won'
        ];
        System.assertEquals(1, open.size(), 'Should find 1 open opportunity');
    }

    @isTest
    static void testClosedOpportunities() {
        List<Opportunity> closed = [
            SELECT Id, Name FROM Opportunity WHERE StageName = 'Closed Won'
        ];
        System.assertEquals(1, closed.size(), 'Should find 1 closed opportunity');
    }
}`,output:"Both tests pass — data created once, queried per test"},{type:"example",title:"Test Data Factory Pattern",text:"A TestDataFactory class centralizes record creation across all your test classes:",code:`@isTest
public class TestDataFactory {

    public static Account createAccount(String name) {
        Account acc = new Account(
            Name = name,
            Industry = 'Technology',
            BillingCity = 'San Francisco'
        );
        insert acc;
        return acc;
    }

    public static List<Contact> createContacts(Account acc, Integer count) {
        List<Contact> contacts = new List<Contact>();
        for (Integer i = 0; i < count; i++) {
            contacts.add(new Contact(
                FirstName = 'Test',
                LastName = 'Contact ' + i,
                AccountId = acc.Id,
                Email = 'test' + i + '@example.com'
            ));
        }
        insert contacts;
        return contacts;
    }
}

// Usage in any test class:
@isTest
private class ContactServiceTest {
    @isTest
    static void testBulkContactProcessing() {
        Account acc = TestDataFactory.createAccount('Big Corp');
        List<Contact> contacts = TestDataFactory.createContacts(acc, 50);

        Test.startTest();
        ContactService.processAll(acc.Id);
        Test.stopTest();

        System.assertEquals(50, contacts.size(), 'Should have 50 contacts');
    }
}`,output:"Factory creates 50 contacts consistently, test focuses on logic not data setup"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this test setup?

\`\`\`apex
@isTest
private class AccountTest {

    @testSetup
    static void setupData() {
        Account acc = new Account(Name = 'Test');
        insert acc;
    }

    @isTest
    static void testAccountName() {
        // Uses the account inserted in setupData
        System.assertEquals('Test', acc.Name);
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:"The test method references `acc` which is a local variable from `setupData()` — it does not exist in `testAccountName()`. Variables declared in @testSetup are not accessible in test methods.\n\nFixed — re-query the data:\n```apex\n@isTest\nstatic void testAccountName() {\n    Account acc = [SELECT Id, Name FROM Account LIMIT 1];\n    System.assertEquals('Test', acc.Name, 'Account name should be Test');\n}\n```\n\n@testSetup inserts records to the test database. Test methods must re-query to access them."},{type:"tip",title:"SeeAllData — Why You Should Never Use It",text:"`@isTest(SeeAllData=true)` lets tests access real org data. This seems convenient but causes brittle tests: a test that passes in sandbox fails in production because the org data differs. Always create your own test data with @testSetup or in the test method itself. The only exception: tests for Chatter features, which require SeeAllData=true due to a Salesforce limitation."}],quiz:[{id:"td-q1",question:"How many times does @testSetup run per test class?",options:["Once per test method","Once per test class","Once per deploy","Every time you query data"],correct:1,explanation:"@testSetup runs once before any test method in the class executes. This shared setup makes the test class faster since data is inserted once, not once per method."},{id:"td-q2",question:"How do you access a record created in @testSetup from a test method?",options:["Via the return value of the @testSetup method","By re-querying the database inside the test method","Via a class-level variable set in @testSetup","Via Test.getSetupData()"],correct:1,explanation:"Variables in @testSetup are local to that method. Test methods access the shared records by re-querying the database. Each test method gets a database snapshot that is restored to the @testSetup state between tests."},{id:"td-q3",question:"What is the main advantage of a Test Data Factory class?",options:["It automatically generates test assertions","It provides one place to create test records so all test classes use consistent data","It speeds up tests by using cached records","It allows tests to use real production data safely"],correct:1,explanation:"A Test Data Factory centralizes record creation. When a required field is added to Account, you update one factory method instead of 50 test classes. It also ensures tests use consistent, meaningful test data."},{id:"td-q4",question:"Which annotation/attribute should you generally avoid and why?",options:["@isTest — it slows down deployments","@testSetup(SeeAllData=true) — no such annotation exists","@isTest(SeeAllData=true) — it makes tests depend on unpredictable org data","@testMethod — it was deprecated in API v28"],correct:2,explanation:"SeeAllData=true lets tests query real org data. Since org data differs between sandboxes and production, tests become environment-dependent and unreliable. Always create your own isolated test data."}],challengeId:"challenge-apex-test-data"},{id:"lwc-wire-apex",moduleId:"lwc-advanced",order:1,title:"@wire and Imperative Apex in LWC",subtitle:"Connect Lightning Web Components to Salesforce data",description:"Learn how to call Apex methods from LWC using @wire (reactive) and imperative calls, and when to use each approach.",duration:40,difficulty:"intermediate",tags:["lwc","apex","@wire","imperative","@AuraEnabled","reactive"],prerequisites:["lwc-data-binding","apex-classes","soql-basics"],learningObjectives:["Expose an Apex method to LWC using @AuraEnabled(cacheable=true)","Wire an Apex method to a component property using @wire","Call Apex imperatively for user-triggered actions (button clicks)","Handle loading and error states in the LWC template"],content:[{type:"explanation",title:"Real-World Business Context",text:`LWC components almost always need Salesforce data:

• **Account detail page** — a custom component on the Account record page shows related Cases and their recent status changes. Use @wire to reactively load Cases whenever the record page changes
• **Search component** — a user types in a search box and clicks "Find". Use an imperative Apex call triggered by the button click to run the search
• **Dashboard tile** — a component shows "Open Opportunities this Quarter." Use @wire(getOpenOpportunities) to load and reactively refresh the data

The rule: @wire for data you want loaded automatically and reactively. Imperative for data loaded on user action.`},{type:"example",title:"@AuraEnabled — Exposing Apex to LWC",text:"The Apex method must be annotated with @AuraEnabled before LWC can call it:",code:`// AccountCaseService.cls
public with sharing class AccountCaseService {

    // cacheable=true: LWC can use @wire (data is read-only)
    // Required for @wire calls
    @AuraEnabled(cacheable=true)
    public static List<Case> getOpenCases(Id accountId) {
        return [
            SELECT Id, Subject, Status, Priority, CreatedDate
            FROM Case
            WHERE AccountId = :accountId AND Status != 'Closed'
            ORDER BY CreatedDate DESC
            LIMIT 10
        ];
    }

    // No cacheable: required for methods that change data
    // Can only be called imperatively (not @wire)
    @AuraEnabled
    public static void escalateCase(Id caseId) {
        Case c = [SELECT Id, Priority FROM Case WHERE Id = :caseId];
        c.Priority = 'High';
        update c;
    }
}`,output:"Methods are now available for import in LWC JavaScript"},{type:"example",title:"@wire — Reactive Data Loading",text:"@wire calls the Apex method automatically when the component renders and re-calls when wired properties change:",code:`// accountCases.js
import { LightningElement, api, wire } from 'lwc';
import getOpenCases from '@salesforce/apex/AccountCaseService.getOpenCases';

export default class AccountCases extends LightningElement {
    @api recordId; // Automatically set when component is on a record page

    @wire(getOpenCases, { accountId: '$recordId' })
    cases; // cases.data = results array, cases.error = error object

    get hasCases() {
        return this.cases.data && this.cases.data.length > 0;
    }
}

<!-- accountCases.html -->
<template>
    <lightning-card title="Open Cases">
        <template if:true={cases.data}>
            <template if:false={hasCases}>
                <p class="slds-p-around_medium">No open cases.</p>
            </template>
            <template if:true={hasCases}>
                <template for:each={cases.data} for:item="c">
                    <p key={c.Id}>{c.Subject} — {c.Status}</p>
                </template>
            </template>
        </template>

        <template if:true={cases.error}>
            <p class="slds-text-color_error">
                Error loading cases: {cases.error.body.message}
            </p>
        </template>
    </lightning-card>
</template>`,output:"Component renders Open Cases list — reactively refreshes when recordId changes"},{type:"example",title:"Imperative Apex — User-Triggered Calls",text:"Call Apex imperatively when triggered by a button, not on page load:",code:`// caseEscalator.js
import { LightningElement, api } from 'lwc';
import escalateCase from '@salesforce/apex/AccountCaseService.escalateCase';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseEscalator extends LightningElement {
    @api caseId;
    isLoading = false;

    handleEscalate() {
        this.isLoading = true;

        escalateCase({ caseId: this.caseId })
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Case escalated to High priority',
                    variant: 'success'
                }));
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                }));
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
}

<!-- caseEscalator.html -->
<template>
    <lightning-button
        label={isLoading ? 'Escalating...' : 'Escalate Case'}
        onclick={handleEscalate}
        disabled={isLoading}>
    </lightning-button>
</template>`,output:"Button click calls Apex → success toast shown → isLoading resets"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this Apex method used with @wire?

\`\`\`apex
@AuraEnabled
public static List<Case> getOpenCases(Id accountId) {
    return [SELECT Id, Subject FROM Case WHERE AccountId = :accountId];
}
\`\`\`

And in LWC:
\`\`\`javascript
@wire(getOpenCases, { accountId: '$recordId' })
cases;
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:'The @AuraEnabled annotation is missing `cacheable=true`. When you use @wire in LWC to call an Apex method, the method MUST be annotated with `@AuraEnabled(cacheable=true)`. Without it, the @wire adapter cannot call the method and throws: "LWC component cannot call a non-cacheable method."\n\nFixed:\n```apex\n@AuraEnabled(cacheable=true)\npublic static List<Case> getOpenCases(Id accountId) {\n    return [SELECT Id, Subject FROM Case WHERE AccountId = :accountId];\n}\n```\n\nMethods with `cacheable=true` are read-only — Salesforce caches the results. For methods that modify data (insert/update/delete), do NOT use cacheable=true and call them imperatively.'},{type:"tip",title:"@wire vs Imperative — Decision Guide",text:`**Use @wire when**:
• Data should load automatically when the component renders
• Data should refresh when input properties (like recordId) change
• The Apex method is read-only (cacheable=true)
• You want Salesforce to manage caching automatically

**Use Imperative when**:
• The call is triggered by a user action (button click, form submit)
• The method modifies data (no cacheable)
• You need fine-grained control over when to fetch (e.g., after validation)
• You need to show a custom loading spinner during the call`}],quiz:[{id:"wire-q1",question:"What annotation is required on an Apex method before you can @wire it in LWC?",options:["@AuraEnabled","@AuraEnabled(cacheable=true)","@LWCEnabled","@RemoteAction"],correct:1,explanation:"@wire requires @AuraEnabled(cacheable=true) on the Apex method. The cacheable=true parameter tells the platform the method is read-only and its results can be cached. Without it, @wire cannot call the method."},{id:"wire-q2",question:"In a @wire property, how do you access the returned data?",options:["this.cases","this.cases.result","this.cases.data","this.cases.value"],correct:2,explanation:"A @wire property returns an object with two properties: .data (the successful result) and .error (any error). Always check if(this.cases.data) before using the results."},{id:"wire-q3",question:'You click a "Save" button that calls Apex to insert a record. Which approach should you use?',options:["@wire because Apex is involved","Imperative call in the button click handler","@wire with cacheable=false","@AuraEnabled with reactive=true"],correct:1,explanation:"User-triggered actions (button clicks, form submissions) should use imperative Apex calls. @wire is for reactive data that loads automatically. Additionally, insert/update/delete methods cannot use cacheable=true, which is required for @wire."},{id:"wire-q4",question:`What does the "$" prefix in @wire(getOpenCases, { accountId: '$recordId' }) mean?`,options:["It is required syntax for all @wire parameters","It makes the parameter reactive — @wire re-runs when recordId changes","It converts the value to a String","It indicates a global variable"],correct:1,explanation:"The $ prefix makes a @wire parameter reactive. When the value of recordId changes (e.g., the user navigates to a different record), @wire automatically re-calls the Apex method with the new value. Without $, the value is treated as a static string."}],challengeId:"challenge-lwc-wire"},{id:"profiles-permissions-intro",moduleId:"permission-model",order:1,title:"Profiles, Permission Sets & the Security Model",subtitle:"Control what users can see and do in Salesforce",description:"Learn how Salesforce's layered security model works — from org-wide defaults to profiles, permission sets, and sharing rules.",duration:35,difficulty:"beginner",tags:["security","profiles","permission-sets","OWD","sharing-rules","FLS"],prerequisites:["salesforce-data-model"],learningObjectives:["Explain the four layers of Salesforce security: org, object, field, record","Distinguish between Profiles and Permission Sets","Configure Org-Wide Defaults (OWD) to set the baseline record visibility","Use sharing rules to open up access above the OWD baseline"],content:[{type:"explanation",title:"Real-World Business Context",text:`The Salesforce security model answers one question: "Can this user do this thing to this record?" The answer flows through four layers:

1. **Org security** — can the user log in? (IP restrictions, login hours, MFA)
2. **Object security** — can the user see/create/edit/delete this object type? (Profile/Permission Sets)
3. **Field security** — can the user see/edit this specific field? (FLS on Profile/Permission Sets)
4. **Record security** — can the user see this specific record? (OWD + Roles + Sharing Rules)

All four layers must allow access — a single denial blocks the action.`},{type:"explanation",title:"Profiles vs Permission Sets",text:`**Profile**:
• Every user has exactly ONE profile
• Controls baseline object/field/tab access and system permissions
• Standard profiles are read-only; custom profiles are editable
• Best practice: use a minimal standard profile as the baseline

**Permission Sets**:
• A user can have MANY permission sets (additive)
• Add specific permissions ON TOP of the profile
• Permission Set Groups combine multiple sets for easier assignment
• Best practice: grant narrow, specific permissions via permission sets rather than creating many custom profiles

**Modern approach**: Use the "Minimum Access" profile as a baseline for all users, then stack permission sets for each user's specific needs.`},{type:"example",title:"Org-Wide Defaults (OWD) and Sharing",text:"OWD sets the MOST RESTRICTIVE baseline for record visibility. Sharing rules open it up:",code:`// OWD Settings (Setup > Sharing Settings):
// Account: Private      → Users only see their own accounts and those shared with them
// Contact: Controlled by Parent  → Inherits Account sharing
// Opportunity: Private  → Users only see their own opps

// Role Hierarchy (above OWD):
// VP Sales can see all Accounts owned by their direct reports
// This is automatic — no rules needed

// Sharing Rules (above Role Hierarchy):
// Rule 1: "Share All Accounts where Industry = Technology with the Technology Support team"
// Rule 2: "Share all Opportunities > $500k with the Executive team"

// Manual Sharing (Apex):
// A user can manually share a specific record with another user/group
// In Apex, use Account.share or AccountShare object:

AccountShare shareRecord = new AccountShare();
shareRecord.AccountId = accountId;
shareRecord.UserOrGroupId = userId;
shareRecord.AccountAccessLevel = 'Read';
shareRecord.OpportunityAccessLevel = 'None';
insert shareRecord;

System.debug('Account manually shared with user: ' + userId);`,output:"Account manually shared — user can now read the Account even though OWD is Private"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this security configuration?

> "To give the Sales team access to the new Project__c object, I modified the Standard User profile and checked 'Read, Create, Edit' on Project__c."

Identify the problem with this approach.`},{type:"explanation",title:"Bug Explanation & Fix",text:`Modifying the Standard User profile affects ALL users on that profile — including Support, Marketing, and Operations who should NOT have access to Project__c.

Fix — use Permission Sets:
1. Leave the Standard User profile unchanged (no access to Project__c)
2. Create a Permission Set "Sales Project Access" with Read/Create/Edit on Project__c
3. Assign this permission set ONLY to users on the Sales team

**Why this matters**: Profiles are broad — they affect everyone on that profile. Permission sets are targeted — assign exactly to the right users. This principle of least privilege is a security best practice and required for AppExchange review.`},{type:"tip",title:"The Sharing Model Flow",text:`Access flows: OWD (most restrictive baseline) → Role Hierarchy (managers see subordinates' records) → Sharing Rules (criteria-based or ownership-based) → Manual Sharing → Apex Managed Sharing.

Each layer can only OPEN UP access, never restrict below the OWD. If you need to restrict access more than OWD allows, use Teams, Territory Management, or custom sharing logic.`}],quiz:[{id:"perm-q1",question:"How many profiles can a user have?",options:["Unlimited","Up to 5","Exactly one","Two maximum"],correct:2,explanation:"Every Salesforce user has exactly one profile. Profiles define the baseline object, field, and system permissions. Additional permissions are added via permission sets, of which a user can have many."},{id:"perm-q2",question:"What do Org-Wide Defaults (OWD) control?",options:["Which fields users can see","The most restrictive baseline for who can see which records","Which apps appear in the navigation bar","The default currency for the org"],correct:1,explanation:"OWD sets the most restrictive record visibility baseline. When set to Private, users only see their own records. Sharing rules, roles, and manual sharing can then open up access above this baseline."},{id:"perm-q3",question:"Why should you use Permission Sets instead of modifying Profiles for new feature access?",options:["Permission Sets are faster to configure","Profiles cannot be changed in Salesforce","Permission Sets can be assigned to specific users without affecting everyone on the profile","Permission Sets apply to all orgs automatically"],correct:2,explanation:"Modifying a profile affects ALL users with that profile. Permission Sets can be assigned to specific users, enabling fine-grained access control without broad profile changes. This follows the principle of least privilege."},{id:"perm-q4",question:"What is the difference between FLS (Field-Level Security) and OWD?",options:["FLS controls login access; OWD controls record access","FLS controls which fields a user can see/edit; OWD controls which records a user can see","OWD is for standard objects; FLS is for custom objects","They are the same thing"],correct:1,explanation:"FLS (configured on Profile/Permission Sets) controls whether a user can see or edit a specific field on a record they already have access to. OWD controls whether the user can even see the record at all. Both must allow access for a user to view a field."}],challengeId:"challenge-permissions"},{id:"reports-dashboards-intro",moduleId:"reports-dashboards",order:1,title:"Reports, Dashboards & Analytics",subtitle:"Surface insights from Salesforce data for business decisions",description:"Learn how to build Salesforce reports and dashboards to analyze data, track KPIs, and drive business decisions without writing code.",duration:30,difficulty:"beginner",tags:["reports","dashboards","analytics","report-types","KPIs","charts"],prerequisites:["salesforce-data-model"],learningObjectives:["Distinguish between the four report types: Tabular, Summary, Matrix, and Joined","Group and summarize data using Summary reports","Build a dashboard with multiple chart components from report data","Know how report-level security (run as) affects what data dashboards show"],content:[{type:"explanation",title:"Real-World Business Context",text:`Reports and dashboards are how business leaders consume Salesforce data:

• **Sales manager daily standup** — a dashboard showing each rep's open pipeline, deals closing this quarter, and win rate vs target
• **Customer success weekly review** — a matrix report showing case volume by account and priority, identifying at-risk customers
• **Executive QBR** — a joined report combining revenue and support metrics in one view for a full customer picture
• **Automated scheduling** — a report emailed to the VP every Monday morning before the team meeting`},{type:"explanation",title:"The Four Report Types",text:`**Tabular**: Raw rows of data — like a spreadsheet. Use for export or when you need row-level detail. Cannot be used as a dashboard source.

**Summary**: Groups data by a field and shows aggregates (SUM, COUNT, AVG, MAX). Use for grouped analysis: "Opportunities by Stage" or "Cases by Owner." Can be a dashboard source.

**Matrix**: Groups by BOTH rows AND columns. Use for two-dimensional analysis: "Revenue by Quarter AND Region." Powerful for trend analysis.

**Joined**: Combines multiple report blocks in one report. Use when you need data from unrelated objects side by side: "New Accounts this Quarter" alongside "Closed Won Deals this Quarter."`},{type:"example",title:"Building a Pipeline Summary Report",text:"Create a Summary report to show pipeline by stage and owner:",code:`// In Salesforce Report Builder (no code needed):
// 1. Create New Report → Report Type: Opportunities
// 2. Add Columns: Account Name, Opportunity Name, Amount, Close Date, Owner
// 3. Group Rows By: Stage Name
// 4. Add Summary Field: SUM of Amount
// 5. Filter: Close Date = THIS QUARTER

// Result:
// ─────────────────────────────────────────
// Stage: Prospecting
//   Deal A        $45,000
//   Deal B        $12,000
//   SUBTOTAL                    $57,000
// Stage: Negotiation
//   Deal C       $200,000
//   SUBTOTAL                   $200,000
// Stage: Closed Won
//   Deal D       $150,000
//   SUBTOTAL                   $150,000
// ─────────────────────────────────────────
// TOTAL                        $407,000

// In Apex, you can query report results via the Analytics API:
// (Read-only — requires Reports & Dashboards API)
Reports.ReportResults results =
    Reports.ReportManager.runReport(reportId, true);
Reports.ReportFactWithDetails fact =
    (Reports.ReportFactWithDetails) results.getFactMap().get('T!T');
System.debug('Total rows: ' + fact.getRows().size());`,output:"Pipeline this quarter: $407,000 across 3 stages"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this dashboard configuration?

> "I created a dashboard to show the VP of Sales their team's pipeline. I set the dashboard to run as 'Me' (the admin). The VP says the dashboard shows too much data — they can see every rep's opportunities including ones from other regions they don't manage."

What setting caused this, and how do you fix it?`},{type:"explanation",title:"Bug Explanation & Fix",text:`The dashboard "Run As" setting is set to "Me" (the admin), so the dashboard runs with admin-level access — bypassing all sharing rules and showing ALL opportunities in the org.

Fixed:
• Change the dashboard "Run As" to "Running User" — each viewer sees data based on their own access
• Or set "Run As" to a specific role or user who has the appropriate access level

**Dashboard Run As options**:
- **Me**: Always runs as the admin who created it — everyone sees the same data (admin's view)
- **Running User**: Each viewer sees data they have access to — different users see different data
- **Specified User**: Always runs as a specific user — good for a "team view" shared dashboard

The VP should use "Running User" so they see only what their role hierarchy allows.`},{type:"tip",title:"Report Type vs Report",text:'A **Report Type** defines which objects and fields are available to build a report. A **Report** is a saved configuration using a Report Type. Standard report types (Accounts, Contacts, Opportunities) are pre-built. Custom Report Types (Setup > Report Types) are needed when you want to report on custom objects or specific relationships — for example, "Accounts with related Applications" for the job board data model.'}],quiz:[{id:"rpt-q1",question:"Which report type allows you to group data by both rows and columns?",options:["Tabular","Summary","Matrix","Joined"],correct:2,explanation:'Matrix reports group data by both rows and columns, enabling two-dimensional analysis like "Revenue by Quarter AND Region." They are ideal for trend analysis across two dimensions.'},{id:"rpt-q2",question:"Which report type CANNOT be used as a dashboard component source?",options:["Summary","Matrix","Tabular","Joined"],correct:2,explanation:"Tabular reports are raw row-by-row data with no grouping or aggregation. Dashboard components require aggregated data (grouped by something), so Tabular reports cannot drive dashboard charts. Use Summary or Matrix reports for dashboards."},{id:"rpt-q3",question:'A dashboard is set to "Run As: Me" (admin). What data do non-admin viewers see?',options:["Only their own records","The same data the admin sees — full org access","An error — non-admins cannot view admin dashboards","Records the admin has manually shared with them"],correct:1,explanation:`"Run As: Me" means the dashboard always executes with the creating admin's access level — everyone who views the dashboard sees the same full-access data. To show each viewer their own data, change to "Run As: Running User."`},{id:"rpt-q4",question:"Which report type would you use to show Opportunities AND Cases side by side in one report?",options:["Tabular","Summary","Matrix","Joined"],correct:3,explanation:"Joined reports combine multiple report blocks from different report types in a single report. Use Joined when you need data from unrelated objects (Opportunities AND Cases) displayed together."}],challengeId:"challenge-reports"},{id:"salesforce-deployment",moduleId:"deployment",order:1,title:"Salesforce Deployment: Sandboxes, Change Sets & SFDX",subtitle:"Ship your code safely from development to production",description:"Learn the Salesforce deployment pipeline — sandbox strategy, change sets, Salesforce CLI (sf), and CI/CD concepts for professional deployments.",duration:40,difficulty:"intermediate",tags:["deployment","sandbox","SFDX","CI-CD","change-sets","metadata"],prerequisites:["apex-testing"],learningObjectives:["Explain the sandbox hierarchy and when to use each type","Deploy metadata using change sets (declarative) and sf project deploy (CLI)","Understand what a package.xml manifest controls","Describe a basic CI/CD pipeline for Salesforce"],content:[{type:"explanation",title:"Real-World Business Context",text:`Every Salesforce change follows the same journey:

\`Developer Sandbox → QA Sandbox → UAT Sandbox → Production\`

Without a proper deployment pipeline:
• Developers overwrite each other's untested changes in production
• A broken trigger ships live and locks out 500 users
• No audit trail of what changed when

Large companies have formal CI/CD pipelines: code committed to Git triggers an automated test run, deployment to QA, and gated promotion to production.`},{type:"explanation",title:"Sandbox Types",text:`| Sandbox Type | Refresh Interval | Data | Use |
|---|---|---|---|
| Developer | 1 day | No | Individual dev work |
| Developer Pro | 1 day | No | Larger dev work, integrations |
| Partial Copy | 5 days | Subset | QA testing with real-ish data |
| Full | 29 days | All | UAT, performance testing |

**Developer sandboxes** are free and unlimited (up to your contract). **Full sandboxes** are expensive and rare — use sparingly for final pre-prod validation.`},{type:"example",title:"Deploying with Salesforce CLI (sf)",text:"The modern way to deploy — works with version-controlled metadata:",code:`# Install SF CLI: npm install @salesforce/cli --global

# Authorize your org (login via browser)
sf org login web --alias myDevSandbox

# Check which org is connected
sf org list

# Deploy a specific component
sf project deploy start --source-dir force-app/main/default/classes/AccountService.cls --target-org myDevSandbox

# Deploy with running specified tests
sf project deploy start --source-dir force-app/main/default --target-org myProd --test-level RunSpecifiedTests --tests AccountServiceTest --tests ContactTriggerHandlerTest

# Check deployment status
sf project deploy report

# Deploy all metadata in the project
sf project deploy start --source-dir force-app --target-org myProd --test-level RunLocalTests`,output:`Deploy ID: 0AfXX000000ABCDE
Status: Succeeded
Tests run: 47, Failed: 0
Code coverage: 89%`},{type:"explanation",title:"Change Sets (Declarative Deployment)",text:`Change Sets are the point-and-click alternative to CLI deployment:
1. In the source org, go to Setup > Change Sets > Outbound Change Sets
2. Create a change set, add components (Apex classes, triggers, custom objects, etc.)
3. Upload to the target org (must have a Deployment Connection configured)
4. In the target org, go to Inbound Change Sets and deploy

**When to use Change Sets**: small teams, non-technical admins, one-off configurations
**When to use CLI + Git**: developer teams, CI/CD pipelines, anything requiring version control`},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this deployment approach?

> "I developed a new trigger and handler directly in production. I tested it by inserting a few records manually. It works fine."

Identify at least 3 issues with this approach.`},{type:"explanation",title:"Bug Explanation & Fix",text:`Issues with developing directly in production:
1. **No safety net** — if the trigger has a bug, it fires on every real record and could corrupt live data
2. **No code coverage gate** — Salesforce requires 75% coverage to *deploy*, but code written directly in prod has no deployment barrier
3. **No testing isolation** — "inserting a few records manually" is not automated testing; it misses edge cases and bulk scenarios
4. **No audit trail** — no git history, no code review, no rollback mechanism
5. **Other users impacted** — if the trigger throws an exception, real users get error messages immediately

Fix: Always develop in a sandbox, write @isTest unit tests, deploy using CLI or change sets after tests pass.`},{type:"tip",title:"The .forceignore and package.xml",text:"`.forceignore` works like `.gitignore` — it tells the CLI which metadata to skip during retrieval/deployment. `package.xml` is a manifest file that explicitly lists what metadata to include in a deployment. Using `package.xml` gives you precise control over deployments without accidentally shipping every piece of metadata in your project."}],quiz:[{id:"dep-q1",question:"Which sandbox type includes ALL production data?",options:["Developer","Developer Pro","Partial Copy","Full"],correct:3,explanation:"Full sandboxes are copies of all production metadata AND data. They are used for final pre-production UAT. They are expensive (count against your sandbox licenses) and can only be refreshed every 29 days."},{id:"dep-q2",question:"What is the minimum code coverage required to deploy Apex to production via CLI?",options:["0%","50%","75%","100%"],correct:2,explanation:"Salesforce requires at least 75% code coverage across all Apex code (excluding test classes) for any production deployment. The sf deploy command will fail if coverage is below this threshold."},{id:"dep-q3",question:"What does sf project deploy start --test-level RunLocalTests do?",options:["Runs only the test classes you specify","Skips all tests","Runs all test classes in the org that do not use SeeAllData=true","Runs only the tests in your deploy package"],correct:2,explanation:"RunLocalTests runs all test classes in the org (not just in your package) that are not from managed packages. This is the typical requirement for production deployments and ensures your changes don't break existing tests."},{id:"dep-q4",question:"Which deployment method is better suited for a developer team using version control?",options:["Change Sets — they have a better UI","Salesforce CLI + Git — enables code review, CI/CD, and version history","Direct development in production","Workbench deployments"],correct:1,explanation:"Salesforce CLI + Git enables the full software development lifecycle: version history, pull requests, code review, automated CI/CD pipelines, and consistent deployments. Change sets are point-and-click and do not integrate with version control."}],challengeId:"challenge-deployment"},{id:"salesforce-data-model",moduleId:"data-model",order:1,title:"Salesforce Data Model & Schema Design",subtitle:"Design relationships and custom objects for real business problems",description:"Learn how to design a Salesforce data model using custom objects, lookup relationships, master-detail relationships, and junction objects.",duration:35,difficulty:"beginner",tags:["data-model","custom-objects","relationships","master-detail","lookup","junction-object"],prerequisites:["apex-dml"],learningObjectives:["Distinguish between Lookup and Master-Detail relationships and when to use each","Design a junction object for many-to-many relationships","Understand how roll-up summary fields work with Master-Detail relationships","Know the naming conventions for custom objects (__c) and relationship fields"],content:[{type:"explanation",title:"Real-World Business Context",text:`The data model is the foundation of every Salesforce org:

• **CRM data** — Accounts, Contacts, Opportunities have standard relationships that every Salesforce org relies on
• **Custom business objects** — a staffing company tracks "Job Openings" (parent) and "Applications" (children) in a Master-Detail relationship so deleting a Job Opening cascades to its Applications
• **Many-to-many** — a student can be enrolled in many courses, and a course has many students. Neither is the parent — a junction object (Enrollment) connects them
• **Roll-up summaries** — the total contract value on an Account sums up from child Opportunities automatically via Master-Detail`},{type:"explanation",title:"Lookup vs Master-Detail Relationships",text:`**Lookup Relationship**:
• Child record can exist without the parent (parent field is optional)
• Deleting the parent does NOT delete children (parent field becomes null)
• No roll-up summary fields
• More flexible, less tight coupling

**Master-Detail Relationship**:
• Child record REQUIRES a parent (parent field is mandatory)
• Deleting the Master CASCADES to delete all Detail records
• Enables Roll-Up Summary fields on the Master
• The Detail record inherits the sharing/security of the Master
• Cannot be changed to Lookup after records exist`},{type:"example",title:"Designing a Job Board Data Model",text:"Example: a staffing agency tracking job openings and applications:",code:`// Standard Objects (already exist):
// Account (Employer)
// Contact (Candidate)

// Custom Objects to create in Setup:

// Job_Opening__c
// Fields:
//   Title__c (Text, required)
//   Department__c (Picklist)
//   Salary_Min__c (Currency)
//   Salary_Max__c (Currency)
//   Status__c (Picklist: Open, Filled, Cancelled)
//   Employer__c (Lookup → Account) ← Lookup: Job Opening can exist without an Account

// Application__c
// Fields:
//   Candidate__c (Lookup → Contact)
//   Job_Opening__c (Master-Detail → Job_Opening__c) ← MDR: app requires a job opening
//   Applied_Date__c (Date)
//   Status__c (Picklist: Under Review, Interview Scheduled, Offer Extended, Rejected)
//   Cover_Letter__c (Long Text Area)

// Roll-Up Summary on Job_Opening__c:
//   Total_Applications__c = COUNT of Application__c records
//   (Only possible because Application → Job_Opening is Master-Detail)

// SOQL to get all applications for a job:
List<Application__c> apps = [
    SELECT Id, Candidate__c, Status__c, Applied_Date__c
    FROM Application__c
    WHERE Job_Opening__c = :jobOpeningId
    ORDER BY Applied_Date__c ASC
];`,output:"Data model: Account → (Lookup) Job_Opening__c ← (Master-Detail) Application__c"},{type:"example",title:"Junction Objects for Many-to-Many",text:"When both sides can have multiple related records, create a junction object:",code:`// Problem: A Course has many Students, a Student takes many Courses
// Neither is the parent of the other — this is many-to-many

// Solution: Enrollment__c junction object
// Fields:
//   Student__c (Master-Detail → Contact)
//   Course__c (Master-Detail → Course__c)
//   Enrollment_Date__c (Date)
//   Grade__c (Picklist: A, B, C, D, F)
//   Status__c (Picklist: Active, Dropped, Completed)

// Now you can query from either direction:
// All courses for a student:
List<Enrollment__c> myEnrollments = [
    SELECT Id, Course__r.Name, Grade__c
    FROM Enrollment__c
    WHERE Student__c = :contactId
];

// All students in a course:
List<Enrollment__c> courseRoster = [
    SELECT Id, Student__r.Name, Student__r.Email
    FROM Enrollment__c
    WHERE Course__c = :courseId
];`,output:"Junction object enables bidirectional many-to-many queries"},{type:"exercise",title:"Spot the Bug",text:`What relationship type problem exists here?

> "I created a Master-Detail relationship from Order__c to Account (Account is the Master). Now I want to delete the Account for a customer who left, but the system gives an error."

What is the issue, and what should have been used instead?`},{type:"explanation",title:"Bug Explanation & Fix",text:`The relationship type was wrong for the use case. With a Master-Detail relationship, Salesforce prevents deleting the Master if doing so would orphan Detail records — or it cascades the delete to all children.

In this case:
- Deleting the Account (Master) would cascade-delete all Order__c records (Detail) — destructive!
- If you try to delete an Account with related Order records, Salesforce may block it to prevent accidental data loss

**Fix**: Use a **Lookup** relationship instead. With a Lookup:
- Deleting the Account just sets the Account field on Order__c to null
- Order history is preserved
- You lose roll-up summaries, but order data safety is more important

**Rule of thumb**: Use Master-Detail only when the child records are meaningless without the parent (Application → Job Opening). Use Lookup when child records should survive parent deletion (Order → Account).`},{type:"tip",title:"Naming Conventions",text:"**Object API names**: Use singular noun + __c. `Job_Opening__c`, not `Job_Openings__c`. Spaces in label become underscores in API name.\n\n**Relationship field API names**: Name the field after what it points to. `Employer__c` on Job_Opening__c pointing to Account. The relationship name (used in SOQL subqueries) auto-generates from the field name.\n\n**Child relationship names**: Salesforce auto-generates the plural (Job_Openings__r on Account for the relationship from Job_Opening__c). You can customize this in the relationship field setup."}],quiz:[{id:"dm-q1",question:"What happens to Detail records when their Master record is deleted?",options:["Detail records are orphaned (parent field set to null)","Detail records are archived","Detail records are cascade-deleted","The delete operation is blocked"],correct:2,explanation:"In a Master-Detail relationship, deleting the Master record cascade-deletes all related Detail records. This is different from a Lookup where deleting the parent just nullifies the lookup field."},{id:"dm-q2",question:"Which relationship type enables Roll-Up Summary fields on the parent?",options:["Lookup","Master-Detail","Hierarchical","External Lookup"],correct:1,explanation:"Roll-Up Summary fields (COUNT, SUM, MIN, MAX) are only available on Master objects in a Master-Detail relationship. Lookup relationships do not support roll-up summaries."},{id:"dm-q3",question:"What is a junction object used for?",options:["Connecting two org namespaces","Implementing many-to-many relationships between two objects","Creating hierarchical relationships","Linking external system records"],correct:1,explanation:"A junction object has two Master-Detail relationships pointing to two different objects, enabling many-to-many relationships. For example, an Enrollment__c with Master-Detail to both Student__c and Course__c."},{id:"dm-q4",question:"You need to track Orders but want to keep Order history even if the Account is deleted. Which relationship should Order use to relate to Account?",options:["Master-Detail","Lookup","Hierarchical","Roll-Up Summary"],correct:1,explanation:"Use a Lookup relationship. With a Lookup, deleting the Account sets the Account field on Order to null — Order records are preserved. A Master-Detail would cascade-delete all Orders when the Account is deleted."}],challengeId:"challenge-data-model"},{id:"apex-trigger-handler-pattern",moduleId:"apex-design-patterns",order:1,title:"The Trigger Handler Design Pattern",subtitle:"Keep triggers thin and logic testable",description:"Learn the professional pattern for structuring Apex triggers — one trigger per object, all logic delegated to a handler class with methods per trigger event.",duration:35,difficulty:"intermediate",tags:["apex","triggers","design-patterns","handler","best-practices"],prerequisites:["apex-triggers-handler","apex-testing"],learningObjectives:["Explain why all business logic belongs in a handler class, not the trigger body","Structure a handler class with methods named by trigger event","Write a TriggerHandler base class for consistent event routing","Test trigger handler methods directly without firing the trigger"],content:[{type:"explanation",title:"Real-World Business Context",text:`Professional Salesforce teams universally use trigger handler patterns:

• **Testability** — a bare trigger can only be tested by inserting records. A handler class can be unit-tested directly with any data
• **Maintainability** — when logic grows, the handler class is the single place to look. No searching across multiple trigger files
• **One trigger per object** — multiple triggers on the same object fire in unpredictable order. One thin trigger with a handler guarantees execution order
• **Code reviews** — reviewers check the handler class, not raw trigger DML scattered everywhere`},{type:"example",title:"The Thin Trigger + Handler Pattern",text:"The trigger is 3 lines. All logic lives in the handler:",code:`// AccountTrigger.trigger — thin, just routing
trigger AccountTrigger on Account (
    before insert, before update, after insert, after update, before delete
) {
    AccountTriggerHandler handler = new AccountTriggerHandler();

    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert(Trigger.new);
        if (Trigger.isUpdate) handler.beforeUpdate(Trigger.new, Trigger.oldMap);
        if (Trigger.isDelete) handler.beforeDelete(Trigger.old);
    } else {
        if (Trigger.isInsert) handler.afterInsert(Trigger.new, Trigger.newMap);
        if (Trigger.isUpdate) handler.afterUpdate(Trigger.new, Trigger.newMap, Trigger.oldMap);
    }
}

// AccountTriggerHandler.cls — all logic here
public with sharing class AccountTriggerHandler {

    public void beforeInsert(List<Account> newAccounts) {
        setDefaultRating(newAccounts);
        validatePhoneFormat(newAccounts);
    }

    public void beforeUpdate(List<Account> newAccounts, Map<Id, Account> oldMap) {
        detectNameChange(newAccounts, oldMap);
    }

    public void afterInsert(List<Account> newAccounts, Map<Id, Account> newMap) {
        createWelcomeTask(newAccounts);
    }

    public void afterUpdate(List<Account> newAccounts, Map<Id, Account> newMap, Map<Id, Account> oldMap) {
        syncToExternalSystem(newAccounts, oldMap);
    }

    private void setDefaultRating(List<Account> accounts) {
        for (Account acc : accounts) {
            if (acc.Rating == null) acc.Rating = 'Warm';
        }
    }

    private void createWelcomeTask(List<Account> accounts) {
        List<Task> tasks = new List<Task>();
        for (Account acc : accounts) {
            tasks.add(new Task(Subject = 'Welcome call', WhatId = acc.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }

    // ... other private methods
}`,output:"Trigger fires, delegates to handler, handler tests pass without DML"},{type:"example",title:"Testing the Handler Directly",text:"Test handler methods directly — no trigger DML needed for most tests:",code:`@isTest
private class AccountTriggerHandlerTest {

    @isTest
    static void testSetDefaultRating() {
        // No insert needed — test the method directly
        List<Account> accounts = new List<Account>{
            new Account(Name = 'Test Corp', Rating = null),
            new Account(Name = 'Other Corp', Rating = 'Hot') // Should not change
        };

        Test.startTest();
        AccountTriggerHandler handler = new AccountTriggerHandler();
        handler.beforeInsert(accounts);
        Test.stopTest();

        System.assertEquals('Warm', accounts[0].Rating,
            'Null rating should default to Warm');
        System.assertEquals('Hot', accounts[1].Rating,
            'Existing rating should not be overwritten');
    }
}`,output:"Test passes — no insert needed, testing pure logic in isolation"},{type:"exercise",title:"Spot the Bug",text:`What is structurally wrong with this trigger?

\`\`\`apex
trigger ContactTrigger on Contact (before insert, after insert) {
    for (Contact c : Trigger.new) {
        if (c.Email == null) {
            c.Email = c.FirstName.toLowerCase() + '@example.com';
        }
    }
    // 50 more lines of logic...
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`All business logic is in the trigger body. This causes:
1. **Untestable in isolation** — you must insert records to test any logic
2. **NullPointerException risk** — \`c.FirstName.toLowerCase()\` throws if FirstName is null
3. **Unmaintainable** — logic mixed with routing, no separation of concerns

Fixed pattern:
\`\`\`apex
trigger ContactTrigger on Contact (before insert, after insert) {
    ContactTriggerHandler handler = new ContactTriggerHandler();
    if (Trigger.isBefore && Trigger.isInsert) handler.beforeInsert(Trigger.new);
    if (Trigger.isAfter && Trigger.isInsert) handler.afterInsert(Trigger.new, Trigger.newMap);
}
// All logic moved to ContactTriggerHandler with null checks
\`\`\``},{type:"tip",title:"The TriggerHandler Base Class",text:`Many teams implement a reusable TriggerHandler base class (popularized by Kevin O'Hara's open-source pattern). It handles the if/isBefore/isAfter routing in a base class, so each handler just overrides the event methods it cares about. This eliminates routing boilerplate in every trigger. Search "Kevin O'Hara Trigger Framework" for the full open-source implementation.`}],quiz:[{id:"thp-q1",question:"Why should all trigger logic be in a handler class, not the trigger body?",options:["Triggers have a size limit that handlers do not","Handler class methods can be called and tested directly without DML","Salesforce requires handler classes by default","Triggers run slower when they contain logic"],correct:1,explanation:"Handler class methods are plain Apex methods — they can be called directly in tests without inserting records. This makes testing faster and more precise, allowing you to test edge cases without expensive DML setup."},{id:"thp-q2",question:"How many triggers should exist per sObject?",options:["One per trigger event","As many as needed","One per object","Two maximum"],correct:2,explanation:"Best practice is one trigger per sObject (e.g., one AccountTrigger). Multiple triggers on the same object fire in an unpredictable order. One trigger with a handler class guarantees predictable execution order."},{id:"thp-q3",question:"In the handler pattern, what goes in the trigger body?",options:["All business logic","SOQL queries and DML","Only routing — instantiate handler, call appropriate handler method","Validation rules"],correct:2,explanation:"The trigger body should only route — check Trigger.isBefore/isAfter/isInsert/isUpdate etc., instantiate the handler, and call the appropriate handler method. No business logic, no SOQL, no DML in the trigger itself."},{id:"thp-q4",question:"What is the main advantage of naming handler methods after trigger events (beforeInsert, afterUpdate)?",options:["Required by Salesforce to compile correctly","Makes the code self-documenting — it is clear which event each method handles","Improves governor limit performance","Allows the trigger framework to call them automatically"],correct:1,explanation:"Naming handler methods after the trigger event (beforeInsert, afterUpdate) makes the code self-documenting. When reading the trigger, you instantly know that handler.beforeInsert() runs in the before insert context."}],challengeId:"challenge-trigger-handler-pattern"},{id:"apex-service-selector",moduleId:"apex-design-patterns",order:2,title:"Service & Selector Layer Pattern",subtitle:"Build maintainable, layered Apex architecture",description:"Learn the Service/Selector/Domain layer architecture — separating SOQL queries (Selector), business logic (Service), and record operations (Domain) for large-scale Apex development.",duration:40,difficulty:"advanced",tags:["apex","design-patterns","service-layer","selector","architecture"],prerequisites:["apex-trigger-handler-pattern","apex-sharing-security"],learningObjectives:["Explain the three-layer architecture: Service, Selector, Domain","Write a Selector class that centralizes SOQL for a given sObject","Write a Service class that orchestrates business logic","Understand why centralizing SOQL in a Selector class prevents duplicate queries"],content:[{type:"explanation",title:"Real-World Business Context",text:`As Salesforce orgs grow, you encounter copy-pasted SOQL queries for Account scattered across 30 classes — when a new required field is added, you have 30 places to update. The Service/Selector pattern solves this:

• **Large ISV applications** — Salesforce AppExchange apps use fflib (Apex Enterprise Patterns) which implements this architecture
• **Team scale** — when 10 developers touch the same org, the Selector ensures consistent SOQL across the codebase; no one duplicates queries
• **Testability** — mock the Selector in service tests to test logic without querying the database`},{type:"example",title:"The Selector Layer — Centralizing SOQL",text:"All SOQL for a given object lives in its Selector class:",code:`public with sharing class AccountSelector {

    // Every query for Account goes through this class
    // Add fields needed here — only one place to update
    private static final String BASE_FIELDS =
        'Id, Name, Industry, AnnualRevenue, Rating, BillingCity, BillingCountry, OwnerId';

    public List<Account> selectById(Set<Id> accountIds) {
        return Database.query(
            'SELECT ' + BASE_FIELDS + ' FROM Account WHERE Id IN :accountIds'
        );
    }

    public List<Account> selectByIndustry(String industry) {
        String safeIndustry = String.escapeSingleQuotes(industry);
        return Database.query(
            'SELECT ' + BASE_FIELDS +
            ' FROM Account WHERE Industry = '' + safeIndustry + '''
        );
    }

    public List<Account> selectRecentlyModified(Integer days) {
        return [
            SELECT Id, Name, Industry, AnnualRevenue, Rating,
                   BillingCity, BillingCountry, OwnerId
            FROM Account
            WHERE LastModifiedDate = LAST_N_DAYS:30
            ORDER BY LastModifiedDate DESC
        ];
    }
}`,output:"All Account SOQL in one class — add a field once, all queries update"},{type:"example",title:"The Service Layer — Business Logic",text:"The Service class calls the Selector and implements business rules:",code:`public with sharing class AccountService {

    private AccountSelector selector;

    public AccountService() {
        this.selector = new AccountSelector();
    }

    // For testing — inject a mock selector
    public AccountService(AccountSelector selector) {
        this.selector = selector;
    }

    public void upgradeToEnterpriseIfQualified(Set<Id> accountIds) {
        List<Account> accounts = selector.selectById(accountIds);
        List<Account> toUpdate = new List<Account>();

        for (Account acc : accounts) {
            if (acc.AnnualRevenue >= 1000000 && acc.Rating != 'Cold') {
                toUpdate.add(new Account(
                    Id = acc.Id,
                    Rating = 'Hot',
                    Industry = acc.Industry
                ));
            }
        }

        if (!toUpdate.isEmpty()) update toUpdate;
    }
}

// Called from trigger handler:
// AccountService svc = new AccountService();
// svc.upgradeToEnterpriseIfQualified(Trigger.newMap.keySet());`,output:"Accounts with $1M+ revenue upgraded to Hot rating — business logic isolated in service"},{type:"exercise",title:"Spot the Bug",text:`What architectural issue exists in this service class?

\`\`\`apex
public class OpportunityService {
    public void closeWonActions(Set<Id> oppIds) {
        List<Opportunity> opps = [
            SELECT Id, Name, AccountId, Amount FROM Opportunity WHERE Id IN :oppIds
        ];
        // ... 100 lines of logic
    }

    public void sendQuote(Set<Id> oppIds) {
        List<Opportunity> opps = [
            SELECT Id, Name, AccountId, Amount FROM Opportunity WHERE Id IN :oppIds
        ];
        // ... different logic, same query
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`The same SOQL query is duplicated in two methods. When a new required field (e.g., StageName) needs to be added, it must be updated in two places — which will be forgotten, causing bugs.

Fixed with a Selector:
\`\`\`apex
// OpportunitySelector.cls
public class OpportunitySelector {
    public List<Opportunity> selectById(Set<Id> ids) {
        return [SELECT Id, Name, AccountId, Amount, StageName FROM Opportunity WHERE Id IN :ids];
    }
}

// OpportunityService.cls
public class OpportunityService {
    private OpportunitySelector selector = new OpportunitySelector();

    public void closeWonActions(Set<Id> oppIds) {
        List<Opportunity> opps = selector.selectById(oppIds);
        // ... logic
    }

    public void sendQuote(Set<Id> oppIds) {
        List<Opportunity> opps = selector.selectById(oppIds);
        // ... logic
    }
}
\`\`\`

One Selector query to update, guaranteed consistency.`},{type:"tip",title:"Start Simple, Apply Patterns When They Pay Off",text:`You do not need Selectors and Services for every class. Apply them when:
• Multiple classes query the same object (Selector pays off)
• Business logic is complex enough to warrant testing without DML (Service pays off)
• The team is large enough that consistent patterns reduce coordination overhead

For simple triggers on small orgs, a good handler class is sufficient. Patterns have a cost — only apply them when the benefit exceeds that cost.`}],quiz:[{id:"ssl-q1",question:"What is the primary responsibility of a Selector class?",options:["Validating record field values","Centralizing all SOQL for a specific sObject in one place","Handling trigger routing","Managing DML operations"],correct:1,explanation:"A Selector class centralizes all SOQL queries for a given sObject. This means field lists are maintained in one place — adding a field updates all queries. It also makes testing easier since you can inject a mock Selector."},{id:"ssl-q2",question:"Which layer contains the business rules and decision logic?",options:["Trigger","Selector","Service","Domain"],correct:2,explanation:"The Service layer contains business logic — it calls the Selector to get records and applies business rules, validations, and orchestrates DML. The trigger is just routing, the Selector is just querying."},{id:"ssl-q3",question:"How does injecting a Selector into a Service class help with testing?",options:["It automatically generates test data","You can inject a mock Selector that returns known test data without hitting the database","It runs queries faster in tests","It bypasses governor limits in test context"],correct:1,explanation:"When a Service accepts a Selector via constructor injection, tests can pass a stub/mock Selector that returns controlled test data. This lets you test Service logic without DML or SOQL, making tests faster and more precise."},{id:"ssl-q4",question:"When should you apply the Service/Selector pattern?",options:["Always — on every project, regardless of size","Never — Salesforce recommends against it","When the complexity and team size justify the overhead","Only in LWC projects"],correct:2,explanation:"Architectural patterns have a cost. Apply Service/Selector when multiple classes query the same object (Selector benefit) or when logic is complex enough to test in isolation (Service benefit). For simple single-class solutions, they add unnecessary overhead."}],challengeId:"challenge-service-selector"},{id:"platform-events-intro",moduleId:"platform-events",order:1,title:"Platform Events & Change Data Capture",subtitle:"Build real-time event-driven integrations on Salesforce",description:"Learn how to publish and subscribe to Platform Events for decoupled, real-time messaging between Salesforce and external systems.",duration:35,difficulty:"advanced",tags:["platform-events","CDC","event-driven","publish-subscribe","streaming"],prerequisites:["apex-triggers-handler","apex-callouts"],learningObjectives:["Create a Platform Event object in Setup","Publish Platform Events from Apex using EventBus.publish()","Subscribe to Platform Events with an Apex trigger on the event","Understand the difference between Platform Events and Change Data Capture"],content:[{type:"explanation",title:"Real-World Business Context",text:`Platform Events enable event-driven architecture on Salesforce:

• **Decoupled integration** — instead of calling an external API synchronously (blocking the user), publish a "Order Created" event. An external system subscribes via CometD/Pub-Sub API and processes it on its own time
• **Cross-cloud notifications** — when a lead is converted in Sales Cloud, publish an event that Service Cloud subscribes to for automatic case creation
• **Durable replay** — events are retained for 72 hours. If a subscriber goes offline, it can replay missed events when it reconnects
• **Change Data Capture (CDC)** — a Salesforce-managed variant that automatically publishes events for every record change without custom code`},{type:"example",title:"Publishing a Platform Event from Apex",text:"First create an event object in Setup (Order_Shipped__e), then publish from Apex:",code:`// Platform Event objects end in "__e"
// Create in Setup > Platform Events: Order_Shipped__e
// Fields: Order_Id__c (Text), Carrier__c (Text), Tracking_Number__c (Text)

public class OrderService {

    public static void shipOrder(Id orderId, String carrier, String trackingNum) {
        // Update the order record
        Order__c ord = [SELECT Id, Status__c FROM Order__c WHERE Id = :orderId];
        ord.Status__c = 'Shipped';
        update ord;

        // Publish the event — decouples notification from business logic
        Order_Shipped__e event = new Order_Shipped__e(
            Order_Id__c = orderId,
            Carrier__c = carrier,
            Tracking_Number__c = trackingNum
        );

        // EventBus.publish returns a SaveResult
        Database.SaveResult result = EventBus.publish(event);

        if (result.isSuccess()) {
            System.debug('Order Shipped event published');
        } else {
            System.debug('Publish failed: ' + result.getErrors()[0].getMessage());
        }
    }
}`,output:"Order Shipped event published"},{type:"example",title:"Subscribing with an Apex Trigger",text:"An after insert trigger on the event object fires when events arrive:",code:`// Trigger fires for each batch of events (up to 2,000)
trigger OrderShippedTrigger on Order_Shipped__e (after insert) {

    List<Task> tasks = new List<Task>();

    for (Order_Shipped__e event : Trigger.new) {
        // Create a follow-up task for the customer
        tasks.add(new Task(
            Subject = 'Confirm delivery — Carrier: ' + event.Carrier__c,
            WhatId = event.Order_Id__c,
            ActivityDate = Date.today().addDays(7)
        ));

        System.debug('Processing shipped order: ' + event.Order_Id__c +
                     ' via ' + event.Carrier__c);
    }

    if (!tasks.isEmpty()) insert tasks;
}`,output:`Processing shipped order: a0Bxx000001234 via FedEx
// Task created for follow-up`},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this platform event publish code?

\`\`\`apex
Order_Shipped__e event = new Order_Shipped__e(
    Order_Id__c = orderId,
    Carrier__c = 'FedEx'
);
insert event; // <-- here
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:"Platform Events are published with `EventBus.publish()`, not `insert`. Using `insert` on a Platform Event throws a DML exception.\n\nFixed:\n```apex\nOrder_Shipped__e event = new Order_Shipped__e(\n    Order_Id__c = orderId,\n    Carrier__c = 'FedEx'\n);\nDatabase.SaveResult result = EventBus.publish(event);\nif (!result.isSuccess()) {\n    System.debug('Failed: ' + result.getErrors()[0].getMessage());\n}\n```\n\nAlways use `EventBus.publish()` for Platform Events."},{type:"tip",title:"Platform Events vs Change Data Capture",text:`**Platform Events**: Custom events you define and publish manually from Apex, Flow, or external systems. Use for business events ("Order Shipped", "Payment Received").

**Change Data Capture (CDC)**: Salesforce automatically publishes events whenever a record is created, updated, deleted, or undeleted. No custom Apex needed to publish — just enable CDC for an object in Setup. Use when you need to replicate Salesforce data changes to external systems.`}],quiz:[{id:"pe-q1",question:"What suffix do Platform Event API names use?",options:["__pe","__event","__e","__stream"],correct:2,explanation:"Platform Event objects use the __e suffix (e.g., Order_Shipped__e). This is similar to custom objects (__c) and custom metadata (__mdt)."},{id:"pe-q2",question:"Which method publishes a Platform Event from Apex?",options:["insert event","EventBus.publish(event)","Platform.send(event)","EventBus.send(event)"],correct:1,explanation:"EventBus.publish() is used to publish Platform Events. Using insert throws a DML exception. EventBus.publish() returns a SaveResult you can check for success."},{id:"pe-q3",question:"Which trigger event fires for a Platform Event subscriber trigger?",options:["before insert","after insert","after update","before update"],correct:1,explanation:'Platform Event triggers use "after insert" — this fires when new events arrive on the event bus. No other trigger events (before, update, delete) are supported for Platform Events.'},{id:"pe-q4",question:"What is the main difference between Platform Events and Change Data Capture?",options:["CDC is faster than Platform Events","Platform Events are custom business events you publish manually; CDC auto-publishes on every record change","Platform Events work with external systems; CDC is Salesforce-only","CDC requires a trigger; Platform Events do not"],correct:1,explanation:"Platform Events are custom-defined events you publish explicitly from code or Flow for business scenarios. CDC is a Salesforce-managed feature that automatically generates events for every record create/update/delete — no custom publish code needed."}],challengeId:"challenge-platform-events"},{id:"flows-invocable-methods",moduleId:"flows-automation",order:1,title:"Calling Apex from Flows with @InvocableMethod",subtitle:"Bridge declarative automation with custom Apex logic",description:"Learn how to expose Apex methods to Flows using @InvocableMethod and @InvocableVariable, enabling no-code admins to call custom Apex from Record-Triggered Flows.",duration:30,difficulty:"intermediate",tags:["flow","apex","@InvocableMethod","@InvocableVariable","automation"],prerequisites:["apex-classes","apex-dml"],learningObjectives:["Create an @InvocableMethod that Flows can call as an action","Define @InvocableVariable fields on input/output wrapper classes","Handle bulk invocations — Flows call invocable methods with a List of inputs","Know when to use Flow vs Apex for automation"],content:[{type:"explanation",title:"Real-World Business Context",text:`Flows can automate most common processes without code, but sometimes you need Apex for logic too complex for Flow:

• **External API calls** — a Record-Triggered Flow fires when an Account is updated, but HTTP callouts require Apex. Expose a callout method via @InvocableMethod so the admin-built Flow calls the Apex
• **Complex calculations** — Flow formula resources have limited math. Delegate complex pricing calculations to Apex while the admin controls the trigger and routing in Flow
• **Reusable components** — build once in Apex (@InvocableMethod), expose to any Flow across the org. Admins do not need a developer to change the trigger logic`},{type:"example",title:"Basic @InvocableMethod",text:"Expose an Apex method to Flows with the @InvocableMethod annotation:",code:`public class CreditScoreService {

    // Input wrapper — Flow passes values in via @InvocableVariable fields
    public class CreditCheckInput {
        @InvocableVariable(label='Account Id' required=true)
        public Id accountId;

        @InvocableVariable(label='Requested Credit Limit')
        public Decimal requestedLimit;
    }

    // Output wrapper — Flow receives results back
    public class CreditCheckOutput {
        @InvocableVariable(label='Approved')
        public Boolean approved;

        @InvocableVariable(label='Approved Limit')
        public Decimal approvedLimit;

        @InvocableVariable(label='Reason')
        public String reason;
    }

    // The method itself — MUST take List<Input> and return List<Output>
    @InvocableMethod(
        label='Check Credit Score'
        description='Evaluates credit score and returns approval decision'
    )
    public static List<CreditCheckOutput> checkCredit(List<CreditCheckInput> inputs) {
        List<CreditCheckOutput> outputs = new List<CreditCheckOutput>();

        for (CreditCheckInput input : inputs) {
            Account acc = [SELECT Id, AnnualRevenue FROM Account WHERE Id = :input.accountId];

            CreditCheckOutput output = new CreditCheckOutput();

            if (acc.AnnualRevenue >= input.requestedLimit * 10) {
                output.approved = true;
                output.approvedLimit = input.requestedLimit;
                output.reason = 'Revenue supports the requested limit';
            } else {
                output.approved = false;
                output.approvedLimit = acc.AnnualRevenue / 10;
                output.reason = 'Insufficient revenue for requested limit';
            }

            outputs.add(output);
        }

        return outputs;
    }
}`,output:'Flow calls "Check Credit Score" action — Apex runs and returns approved=true, approvedLimit=50000'},{type:"explanation",title:"The Bulkification Rule",text:`Flows can process multiple records at once (e.g., bulk import). When they do, the @InvocableMethod is called ONCE with a List of inputs — not once per record.

This is why:
• The method signature must be \`List<Output> method(List<Input> inputs)\` — always
• You should process all inputs in a loop and return a corresponding List of outputs
• The output list must be the same length and order as the input list

**Common mistake**: doing SOQL inside the loop for each input separately. Collect all IDs from the input list first, do one query, use a Map to match results.`},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this @InvocableMethod signature?

\`\`\`apex
@InvocableMethod(label='Send Welcome Email')
public static void sendWelcomeEmail(Contact c) {
    // Send email to c
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:"Two bugs:\n1. The parameter type must be `List<Contact>`, not `Contact` — Flows always pass a list\n2. If the method needs to return values to Flow, it must return `List<Output>` not void\n\nFixed (output-less version for email send):\n```apex\n@InvocableMethod(label='Send Welcome Email')\npublic static void sendWelcomeEmail(List<Id> contactIds) {\n    // Process the list\n    for (Id contactId : contactIds) {\n        // Send email...\n    }\n}\n```\n\nFor void methods with no output, `List<primitiveType>` or `List<InputWrapper>` as the input still required. Never a bare sObject — use an Id and re-query."},{type:"tip",title:"Flow vs Apex — When to Use Which",text:`**Use Flow (declarative)** for: standard CRUD operations, field updates, email alerts, approval processes, record creation with simple logic, anything admins need to modify without a developer.

**Use Apex (@InvocableMethod)** for: HTTP callouts, complex calculations, multi-step transactions that require precise error handling, integrations with external services, logic admins need to trigger but cannot implement in Flow formulas.

**Golden rule**: Build the trigger and routing in Flow (admin-maintainable), delegate the complex logic to Apex (developer-owned).`}],quiz:[{id:"inv-q1",question:"What is the required method signature for an @InvocableMethod?",options:["public static void method(SObject record)","public static List<Output> method(List<Input> inputs)","public void method(Input input)","@InvocableMethod can have any signature"],correct:1,explanation:"@InvocableMethod must accept a List (Flows call it in bulk) and return either void or a List. The input and output types must be wrapper classes with @InvocableVariable fields, or primitives/collections."},{id:"inv-q2",question:"Which annotation marks a field as a Flow input or output variable?",options:["@AuraEnabled","@InvocableVariable","@FlowField","@ApiVariable"],correct:1,explanation:"@InvocableVariable marks fields in a wrapper class as inputs or outputs that Flows can read and write. Add label= and required= parameters to control the Flow designer experience."},{id:"inv-q3",question:"Why must @InvocableMethod accept a List instead of a single record?",options:["It is just a convention, not a requirement","Flows can process multiple records at once — the method is called once with all inputs","Single records are not supported in Apex","Lists perform better than single objects"],correct:1,explanation:"When a Record-Triggered Flow processes a batch of records, the @InvocableMethod is called once with ALL records as a List — not once per record. This prevents governor limit issues and matches the bulkification pattern."},{id:"inv-q4",question:"What annotation do you put on the method to expose it to Flow?",options:["@AuraEnabled","@InvocableVariable","@InvocableMethod","@FlowAction"],correct:2,explanation:"@InvocableMethod on the static method makes it available as an Action in Flow Builder. Add label= and description= parameters so admins can find and understand the action in the Flow designer."}],challengeId:"challenge-invocable-method"},{id:"apex-sharing-security",moduleId:"apex-security",order:1,title:"Apex Sharing & Field-Level Security",subtitle:"Write code that respects Salesforce's security model",description:"Learn how to use with sharing, without sharing, Security.stripInaccessible(), and CRUD/FLS checks to build secure Apex code.",duration:35,difficulty:"intermediate",tags:["apex","security","sharing","FLS","CRUD","with-sharing"],prerequisites:["apex-dml","apex-triggers-handler"],learningObjectives:["Understand the difference between with sharing and without sharing","Apply Security.stripInaccessible() to enforce field-level security","Check CRUD permissions with Schema.sObjectType before DML operations","Explain when to use each sharing keyword for different use cases"],content:[{type:"explanation",title:"Real-World Business Context",text:`Apex runs in system context by default — it can bypass Salesforce's entire permission model. Without explicit security checks, a custom button running Apex could let a sales rep read executive salary data or delete records they should never touch.

• **Regulated industries** — HIPAA/PCI compliance requires that code never returns data the user is not authorized to see
• **AppExchange ISVs** — apps submitted to AppExchange undergo a security review. Code without sharing keywords fails the review
• **Multi-role orgs** — with sharing ensures that a "My Accounts" page actually shows only *my* accounts, respecting the org's sharing rules`},{type:"example",title:"with sharing vs without sharing",text:"The sharing keyword on the class determines whether record-level sharing rules are enforced:",code:`// with sharing — SOQL respects the running user's record access
// Use for most controllers and service classes
public with sharing class AccountController {
    public List<Account> getMyAccounts() {
        // Returns only accounts the running user can see per sharing rules
        return [SELECT Id, Name FROM Account LIMIT 100];
    }
}

// without sharing — SOQL ignores sharing rules (runs as system)
// Use for background jobs, integrations, or admin-only utilities
public without sharing class DataMigrationJob {
    public void migrateAll() {
        // Returns ALL accounts regardless of running user's access
        List<Account> all = [SELECT Id, Name FROM Account LIMIT 50000];
        // process all...
    }
}

// inherited sharing — inherits the sharing context of the caller
// Good for utility methods called from both with/without sharing contexts
public inherited sharing class AccountUtils {
    public static String getAccountName(Id accId) {
        return [SELECT Name FROM Account WHERE Id = :accId].Name;
    }
}`,output:`with sharing: 42 accounts (user's own)
without sharing: 15,000 accounts (all)`},{type:"example",title:"Field-Level Security with Security.stripInaccessible()",text:"Even with sharing, Apex can read fields the user cannot see in the UI. Use Security.stripInaccessible() to enforce FLS:",code:`public with sharing class SecureAccountService {

    public static List<Account> getAccountsForUser() {
        // This query could return Salary__c even if user doesn't have FLS read
        List<Account> rawAccounts = [
            SELECT Id, Name, AnnualRevenue, Salary__c
            FROM Account LIMIT 100
        ];

        // Strip fields the running user doesn't have FLS read access to
        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.READABLE,
            rawAccounts
        );

        // Return only the accessible fields
        return (List<Account>) decision.getRecords();
    }

    public static void saveAccount(Account acc) {
        // Strip fields the user doesn't have FLS write access to
        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.UPSERTABLE,
            new List<Account>{ acc }
        );
        List<Account> sanitized = (List<Account>) decision.getRecords();
        upsert sanitized;
    }
}`,output:"Returns accounts without Salary__c if user lacks FLS read on that field"},{type:"exercise",title:"Spot the Bug",text:`What security issue exists in this code?

\`\`\`apex
public class ContactService {
    public List<Contact> getAllContacts() {
        return [SELECT Id, Name, SSN__c, Salary__c FROM Contact LIMIT 1000];
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`Two security issues:
1. No sharing keyword — runs in system context, returning all Contacts regardless of user access
2. No FLS check — SSN__c and Salary__c are returned even if the user lacks FLS read on those fields

Fixed:
\`\`\`apex
public with sharing class ContactService {
    public List<Contact> getAllContacts() {
        List<Contact> contacts = [SELECT Id, Name, SSN__c, Salary__c FROM Contact LIMIT 1000];
        SObjectAccessDecision decision = Security.stripInaccessible(AccessType.READABLE, contacts);
        return (List<Contact>) decision.getRecords();
    }
}
\`\`\`

\`with sharing\` enforces record-level security. \`Security.stripInaccessible()\` enforces field-level security.`},{type:"tip",title:"The Rule of Thumb",text:"**Default to `with sharing`** for any class that runs in a user context (controllers, service classes called from triggers). Use `without sharing` explicitly and deliberately only for background jobs, admin utilities, or cases where you have intentionally decided to bypass sharing. If a utility method could be called from either context, use `inherited sharing`."}],quiz:[{id:"sec-q1",question:'What does "with sharing" enforce in Apex?',options:["Field-level security on SOQL results","Record-level sharing rules — the running user only sees records they have access to","CRUD permissions for DML operations","All Salesforce security rules including FLS and CRUD"],correct:1,explanation:'"with sharing" enforces record-level sharing rules — the same sharing rules that govern what records users see in list views. It does NOT enforce FLS or CRUD automatically; you need Security.stripInaccessible() or Schema checks for those.'},{id:"sec-q2",question:"What does Security.stripInaccessible(AccessType.READABLE, records) do?",options:["Deletes records the user cannot access","Throws an exception if any field is inaccessible","Returns a filtered record list with inaccessible fields removed","Checks CRUD permissions for read operations"],correct:2,explanation:"Security.stripInaccessible() returns an SObjectAccessDecision. Calling .getRecords() on it returns the same records but with any fields the running user lacks FLS read access to removed (set to null)."},{id:"sec-q3",question:"Which sharing keyword should a utility method use if it needs to work correctly whether called from a with sharing or without sharing context?",options:["with sharing","without sharing","inherited sharing","No keyword — default is inherited"],correct:2,explanation:'"inherited sharing" inherits the sharing context of the calling class. If called from a with sharing class, it enforces sharing; if called from without sharing, it does not. The default (no keyword) also inherits, but inherited sharing is explicit and clearer.'},{id:"sec-q4",question:'A "with sharing" class only returns 5 Accounts. The same query in "without sharing" returns 500. Why?',options:["without sharing has a higher SOQL row limit","with sharing applies field-level security that filters records","with sharing enforces the running user's record-level sharing rules","with sharing limits results to 5 by default"],correct:2,explanation:`"with sharing" enforces the running user's sharing rules. If a user owns or has explicit sharing to only 5 Accounts, with sharing returns only those 5. "without sharing" ignores sharing rules and returns all 500 records the query matches.`}],challengeId:"challenge-apex-sharing"},{id:"soql-dynamic-sosl",moduleId:"soql-advanced",order:1,title:"Dynamic SOQL & SOSL",subtitle:"Build flexible queries at runtime and search across multiple objects",description:"Learn how to build SOQL queries dynamically using Database.query(), use SOSL for cross-object full-text search, and avoid SOQL injection vulnerabilities.",duration:35,difficulty:"intermediate",tags:["soql","sosl","dynamic-soql","Database.query","search","injection"],prerequisites:["soql-basics","apex-classes"],learningObjectives:["Build and execute dynamic SOQL queries using Database.query()","Use String.escapeSingleQuotes() to prevent SOQL injection","Write SOSL queries to search across multiple objects at once","Know when to choose SOSL over SOQL for search use cases"],content:[{type:"explanation",title:"Real-World Business Context",text:`Static SOQL covers 80% of use cases, but some scenarios require building queries at runtime:

• **Search pages with optional filters** — a user can filter by Status, Owner, or Date range in any combination. Building separate static queries for every combination is impractical
• **Global search boxes** — when a user types "Acme" in a search bar, SOSL searches Contact, Account, and Lead simultaneously and returns the top matches from each
• **Dynamic report builders** — admin-configured field lists determine which columns appear in a table`},{type:"example",title:"Dynamic SOQL with Database.query()",text:"Build a query string and execute it at runtime:",code:`public class AccountSearchService {

    public static List<Account> searchAccounts(String industry, String rating) {
        // Build the base query
        String soql = 'SELECT Id, Name, Industry, Rating FROM Account WHERE Id != null';

        // Conditionally add filters
        if (String.isNotBlank(industry)) {
            // ALWAYS escape user-supplied strings to prevent SOQL injection
            soql += ' AND Industry = '' + String.escapeSingleQuotes(industry) + ''';
        }
        if (String.isNotBlank(rating)) {
            soql += ' AND Rating = '' + String.escapeSingleQuotes(rating) + ''';
        }

        soql += ' ORDER BY Name LIMIT 100';

        System.debug('Executing SOQL: ' + soql);

        // Database.query() executes a SOQL string at runtime
        return Database.query(soql);
    }
}

// Called with:
AccountSearchService.searchAccounts('Technology', 'Hot');
// Executes: SELECT Id, Name, Industry, Rating FROM Account
//           WHERE Id != null AND Industry = 'Technology' AND Rating = 'Hot'`,output:"Executing SOQL: SELECT Id, Name ... WHERE Id != null AND Industry = 'Technology' AND Rating = 'Hot'"},{type:"explanation",title:"SOQL Injection — Never Trust User Input",text:`If you concatenate user input directly into a SOQL string without escaping, an attacker can break out of your query and read any data in the org.

**Vulnerable code:**
\`\`\`apex
// If userInput is malicious, it can inject extra conditions
// returning ALL accounts the user should not see!
String soql = "SELECT Id FROM Account WHERE Name = " + userInput;
\`\`\`

**Always escape user input:**
\`\`\`apex
String safe = String.escapeSingleQuotes(userInput);
soql += ' AND Name = \\'' + safe + '\\'';
\`\`\`

String.escapeSingleQuotes() escapes any single quotes in the input so they cannot break out of the string literal.`},{type:"example",title:"SOSL — Search Across Multiple Objects",text:"SOSL searches the full-text search index across multiple objects simultaneously:",code:`// SOSL syntax: FIND {searchTerm} IN ALL FIELDS RETURNING ObjectName(fields)
List<List<SObject>> results = [
    FIND :searchTerm
    IN ALL FIELDS
    RETURNING
        Account (Id, Name, Phone),
        Contact (Id, FirstName, LastName, Email),
        Lead (Id, Name, Company)
    LIMIT 10
];

// Results come back as a list of lists — one list per object
List<Account> accounts = (List<Account>) results[0];
List<Contact> contacts = (List<Contact>) results[1];
List<Lead> leads = (List<Lead>) results[2];

System.debug('Found ' + accounts.size() + ' accounts');
System.debug('Found ' + contacts.size() + ' contacts');
System.debug('Found ' + leads.size() + ' leads');`,output:`Found 3 accounts
Found 7 contacts
Found 2 leads`},{type:"exercise",title:"Spot the Bug",text:`What security vulnerability exists in this dynamic SOQL?

\`\`\`apex
public static List<Contact> findByName(String lastName) {
    String soql = 'SELECT Id, Name FROM Contact WHERE LastName = \\'' + lastName + '\\'';
    return Database.query(soql);
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:"This is a **SOQL injection vulnerability**. If `lastName` contains a single quote (e.g., `O'Brien`), it breaks the query syntax. Worse, a malicious input like `' OR IsDeleted = false AND LastName != '` could return records it should not.\n\nFixed:\n```apex\npublic static List<Contact> findByName(String lastName) {\n    String safeLastName = String.escapeSingleQuotes(lastName);\n    String soql = 'SELECT Id, Name FROM Contact WHERE LastName = \\'' + safeLastName + '\\'';\n    return Database.query(soql);\n}\n```\n\nAlways call `String.escapeSingleQuotes()` on any user-controlled string before embedding it in a dynamic SOQL query."},{type:"tip",title:"SOSL vs SOQL — When to Use Which",text:`**SOQL**: Use for structured queries with known filters. Returns exact field matches. Fast for filtering by specific field values. Use when you know the object and fields.

**SOSL**: Use for full-text search across multiple objects. Searches the search index (like a search engine). Great for search boxes where the user types keywords and you want results from Account, Contact, and Lead at once. SOSL cannot be used in triggers — only controllers and service classes.`}],quiz:[{id:"dsoql-q1",question:"Which method executes a SOQL query string built at runtime?",options:["SOQL.execute()","Database.query()","Apex.query()","String.soql()"],correct:1,explanation:"Database.query(soqlString) takes a SOQL string and executes it, returning a List<SObject>. You can cast the result to your specific type."},{id:"dsoql-q2",question:"Which method prevents SOQL injection from user-supplied strings?",options:["String.sanitize()","String.escapeSingleQuotes()","Database.escape()","SOQL.sanitize()"],correct:1,explanation:"String.escapeSingleQuotes() escapes single quote characters in a string so they cannot break out of a SOQL string literal. Always call this on any user-provided input before concatenating it into a dynamic SOQL query."},{id:"dsoql-q3",question:"What does SOSL return?",options:["A single List<SObject>","A Map<String, List<SObject>>","A List<List<SObject>> — one inner list per returned object type","A List<String> of matching record IDs"],correct:2,explanation:"SOSL returns a List<List<SObject>>. Each inner list corresponds to one of the RETURNING clauses. results[0] is the first object, results[1] is the second, etc. Cast each to the appropriate type."},{id:"dsoql-q4",question:"In which context can SOSL NOT be used?",options:["Visualforce controllers","Apex triggers","Service classes","Batch Apex execute() method"],correct:1,explanation:"SOSL cannot be used in Apex triggers. Use SOQL in triggers. SOSL is designed for search use cases in controllers and service classes."}],challengeId:"challenge-soql-dynamic"},{id:"apex-future-queueable",moduleId:"async-apex",order:1,title:"Future Methods & Queueable Apex",subtitle:"Run long-running operations outside the main transaction",description:"Learn when and how to use @future methods and Queueable Apex to defer work, make callouts from triggers, and chain asynchronous jobs.",duration:35,difficulty:"intermediate",tags:["apex","async","@future","queueable","asynchronous"],prerequisites:["apex-callouts","apex-governor-limits"],learningObjectives:["Use @future(callout=true) to make HTTP callouts from a trigger context","Understand the limitations of @future (no sObjects, no chaining)","Implement the Queueable interface for more flexible async execution","Chain Queueable jobs using System.enqueueJob()"],content:[{type:"explanation",title:"Real-World Business Context",text:`Triggers run synchronously — the user waits for them to complete before seeing their record saved. Async Apex moves slow work out of the user's critical path:

• **Callout from trigger** — after a Contact is created, sync an external CRM without slowing down the save. Use @future(callout=true)
• **Heavy data processing** — recalculating aggregate values on thousands of related records. Use Queueable so the user is not blocked
• **Chained jobs** — Step 1 fetches data, Step 2 processes it, Step 3 sends a notification. Queueable jobs can enqueue the next step when finished`},{type:"example",title:"@future Methods",text:"@future runs a static method in a separate transaction with its own governor limits:",code:`public class ExternalCrmService {

    // callout=true is required to make HTTP requests from async context
    @future(callout=true)
    public static void syncContact(Id contactId) {
        // Fresh governor limits — separate from the trigger that called this
        Contact c = [SELECT Id, FirstName, LastName, Email
                     FROM Contact WHERE Id = :contactId LIMIT 1];

        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:CRM_API/contacts');
        req.setMethod('POST');
        req.setBody(JSON.serialize(c));

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() != 200) {
            System.debug('CRM sync failed: ' + res.getBody());
        }
    }
}

// Called from trigger:
trigger ContactTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        ExternalCrmService.syncContact(c.Id); // Enqueues async job
    }
}`,output:"Trigger completes instantly — CRM sync runs in background"},{type:"explanation",title:"@future Limitations",text:`• **No sObject parameters** — you cannot pass Contact c to a @future method. Pass Id contactId instead and re-query inside
• **No chaining** — a @future method cannot call another @future method
• **No tracking** — you cannot monitor or cancel a @future job
• **Max 50 per transaction** — you can enqueue at most 50 @future calls per transaction

When you need more control, use Queueable.`},{type:"example",title:"Queueable Apex",text:"Queueable gives you a job ID, the ability to chain, and sObject support:",code:`public class ContactSyncJob implements Queueable, Database.AllowsCallouts {

    private List<Id> contactIds;

    public ContactSyncJob(List<Id> contactIds) {
        this.contactIds = contactIds;
    }

    public void execute(QueueableContext ctx) {
        List<Contact> contacts = [
            SELECT Id, FirstName, LastName, Email
            FROM Contact WHERE Id IN :contactIds
        ];

        for (Contact c : contacts) {
            HttpRequest req = new HttpRequest();
            req.setEndpoint('callout:CRM_API/contacts/' + c.Id);
            req.setMethod('PUT');
            req.setBody(JSON.serialize(c));
            new Http().send(req);
        }

        // Chain another job when this one finishes
        System.enqueueJob(new NotificationJob(contactIds));
    }
}

// Enqueue from trigger:
trigger ContactTrigger on Contact (after update) {
    List<Id> ids = new List<Id>(Trigger.newMap.keySet());
    System.enqueueJob(new ContactSyncJob(ids));
}`,output:"Job ID returned — can monitor in Setup > Apex Jobs"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this @future method signature?

\`\`\`apex
@future
public static void processContact(Contact c) {
    System.debug(c.Name);
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`@future methods cannot accept sObject parameters (Contact, Account, etc.) because the data could change between when the method is enqueued and when it actually executes.

Fixed — pass the Id and re-query inside:
\`\`\`apex
@future
public static void processContact(Id contactId) {
    Contact c = [SELECT Id, Name FROM Contact WHERE Id = :contactId LIMIT 1];
    System.debug(c.Name);
}
\`\`\`

Always pass primitive types (Id, String, Integer, List<Id>) to @future methods, never sObjects.`},{type:"tip",title:"When to Use Which",text:`**@future**: simplest option for fire-and-forget operations. Use when you just need to defer a callout or simple operation. No chaining, no monitoring.

**Queueable**: use when you need to pass complex data, chain jobs, or track job status. Implements an interface so it is more code but far more flexible.

**Batch Apex**: use for processing 50,000+ records. Covered in the next lesson.`}],quiz:[{id:"fut-q1",question:"What annotation do you need to make an HTTP callout from a @future method?",options:["@future(async=true)","@future(callout=true)","@future(http=true)","@future"],correct:1,explanation:"@future(callout=true) enables HTTP callouts from the async method. Without callout=true, any attempt to make an HTTP request will throw a CalloutException."},{id:"fut-q2",question:"Why can @future methods not accept sObject parameters?",options:["sObjects are too large to serialize","The sObject data could change between enqueue time and execution time","Apex does not support serialization of sObjects","@future only supports primitive types by design"],correct:1,explanation:"@future methods are queued and may execute seconds or minutes later. The sObject you pass might be stale or changed by another transaction. Pass an Id and re-query inside the method to get the current state."},{id:"fut-q3",question:"What interface does a Queueable class implement?",options:["Runnable","Queueable","AsyncApex","Schedulable"],correct:1,explanation:"Queueable classes implement the Queueable interface and must have an execute(QueueableContext ctx) method. To make callouts, also implement Database.AllowsCallouts."},{id:"fut-q4",question:"How do you chain one Queueable job to run after another?",options:["Use @future inside the execute() method","Call System.enqueueJob(new NextJob()) at the end of execute()","Use System.schedule() inside execute()","Queueable jobs cannot be chained"],correct:1,explanation:"At the end of a Queueable execute() method, call System.enqueueJob(new NextJob()) to enqueue the next job. This creates a chain where each job starts after the previous one completes."}],challengeId:"challenge-apex-future-queueable"},{id:"apex-batch-apex",moduleId:"async-apex",order:2,title:"Batch Apex for Large Data Volumes",subtitle:"Process millions of records safely within governor limits",description:"Learn how to implement the Database.Batchable interface to process large datasets in chunks, respecting governor limits on every batch.",duration:40,difficulty:"intermediate",tags:["apex","batch","Database.Batchable","large-data-volumes","async"],prerequisites:["apex-future-queueable","apex-governor-limits"],learningObjectives:["Implement the Database.Batchable interface with start, execute, and finish methods","Understand how batch size controls memory and limit usage per chunk","Execute a batch class and monitor it in Apex Jobs","Test batch classes using Test.startTest() and Test.stopTest()"],content:[{type:"explanation",title:"Real-World Business Context",text:`Batch Apex is the standard solution for data migration and mass updates:

• **Data cleanup** — an org has 2 million Account records where \`BillingCountry\` is blank. A batch job processes 200 at a time, completing over hours without hitting limits
• **Nightly reporting** — recalculate aggregate KPI fields on all Opportunities from yesterday
• **Data migration** — after a schema change, backfill a new field on existing records

Without Batch Apex, trying to process 2 million records in a single transaction hits the 10,000 record DML limit immediately.`},{type:"example",title:"The Database.Batchable Interface",text:"A batch class implements three methods — start, execute, finish:",code:`public class AccountCountryBatch implements Database.Batchable<SObject> {

    // start() — returns the records to process (runs once)
    public Database.QueryLocator start(Database.BatchableContext ctx) {
        return Database.getQueryLocator(
            'SELECT Id, BillingCountry FROM Account WHERE BillingCountry = null'
        );
    }

    // execute() — called once per batch chunk (default: 200 records)
    public void execute(Database.BatchableContext ctx, List<Account> scope) {
        for (Account acc : scope) {
            acc.BillingCountry = 'United States';
        }
        update scope; // 1 DML per batch chunk — safe!
    }

    // finish() — called once after all batches complete
    public void finish(Database.BatchableContext ctx) {
        System.debug('Batch complete! Processed all accounts.');
        // Could send an email, trigger a follow-up job, etc.
    }
}

// Execute it:
AccountCountryBatch job = new AccountCountryBatch();
Database.executeBatch(job, 200); // 200 = records per batch chunk`,output:`Job ID: 707xx000001234AAA
// Monitor in Setup > Apex Jobs`},{type:"explanation",title:"Batch Size and Governor Limits",text:`The second argument to \`Database.executeBatch(job, batchSize)\` controls how many records are passed to each \`execute()\` call. Each chunk gets its own fresh governor limits.

• **Default**: 200 records per chunk
• **Max**: 2,000 records per chunk
• **Tune down** (50-100) if execute() does heavy SOQL or complex processing that could hit limits
• **Tune up** (1,000-2,000) if execute() is simple and you want fewer total transactions

The total records processed is not limited — Batch Apex can handle tens of millions of records.`},{type:"example",title:"Testing a Batch Class",text:"Test.stopTest() forces the batch to run synchronously in tests:",code:`@isTest
private class AccountCountryBatchTest {

    @isTest
    static void testBatchUpdatesCountry() {
        // Create test accounts without BillingCountry
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 10; i++) {
            accounts.add(new Account(Name = 'Test Account ' + i));
        }
        insert accounts;

        // Run the batch
        Test.startTest();
        AccountCountryBatch job = new AccountCountryBatch();
        Database.executeBatch(job, 200);
        Test.stopTest(); // Forces batch to complete synchronously

        // Assert results
        List<Account> updated = [
            SELECT Id, BillingCountry FROM Account WHERE BillingCountry = 'United States'
        ];
        System.assertEquals(10, updated.size(),
            'All 10 accounts should have BillingCountry set');
    }
}`,output:"Test passes — batch ran synchronously between startTest/stopTest"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this batch class execute method?

\`\`\`apex
public void execute(Database.BatchableContext ctx, List<Account> scope) {
    for (Account acc : scope) {
        acc.BillingCountry = 'United States';
        update acc; // <-- here
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`\`update acc\` inside the loop is DML-in-a-loop — with 200 records per batch, this issues 200 DML statements, hitting the 150 DML limit and throwing a LimitException.

Fixed — collect and update once:
\`\`\`apex
public void execute(Database.BatchableContext ctx, List<Account> scope) {
    for (Account acc : scope) {
        acc.BillingCountry = 'United States';
        // No DML here — just modify the in-memory object
    }
    update scope; // ONE DML statement for the whole chunk
}
\`\`\`

Batch chunks get fresh governor limits, but the same no-DML-in-loop rule still applies within each chunk.`},{type:"tip",title:"Stateful Batches",text:"By default, instance variables are reset between execute() calls. If you need to track state across chunks (e.g., count total records processed), implement `Database.Stateful` in addition to `Database.Batchable`. This lets instance variables persist between execute() invocations, at the cost of slightly higher memory usage."}],quiz:[{id:"bat-q1",question:"Which method in a batch class is called once per chunk of records?",options:["start()","execute()","finish()","process()"],correct:1,explanation:"execute() is called once per batch chunk (by default, 200 records per chunk). start() runs once to define the query, and finish() runs once after all chunks are done."},{id:"bat-q2",question:"What does Database.getQueryLocator() do in a batch start() method?",options:["Runs the SOQL query immediately and returns a List","Returns a cursor Salesforce uses to paginate through millions of records safely","Validates the SOQL syntax before execution","Limits the query to 50,000 records"],correct:1,explanation:"Database.getQueryLocator() returns a cursor-based result set. Salesforce uses it to fetch records in pages (chunks), enabling batch jobs to safely process up to 50 million records total without hitting heap or query limits."},{id:"bat-q3",question:"How do you force a batch job to run synchronously in an Apex test?",options:["Use @isTest(runBatch=true)","Call Database.executeBatch() with size=1","Wrap the executeBatch() call between Test.startTest() and Test.stopTest()","Batch jobs always run synchronously in tests"],correct:2,explanation:"Test.stopTest() forces all async work (batch, future, queueable) that was started after Test.startTest() to run synchronously before returning. This is how you assert batch results in a test."},{id:"bat-q4",question:"What interface should a batch class implement to maintain instance variable state across execute() calls?",options:["Database.Stateful","Database.Persistent","Database.Stateless","Database.AllowsCallouts"],correct:0,explanation:"By default, batch instance variables are reset between execute() calls. Implementing Database.Stateful persists instance variables across all execute() calls, allowing you to accumulate totals or track cross-chunk state."}],challengeId:"challenge-apex-batch"},{id:"apex-governor-limits",moduleId:"governor-limits",order:1,title:"Understanding Salesforce Governor Limits",subtitle:"Write efficient code that respects the platform's execution guardrails",description:"Learn why Salesforce enforces governor limits, what the most common limits are, and how to write bulkified code that never hits them.",duration:40,difficulty:"intermediate",tags:["apex","governor-limits","bulkification","SOQL-in-loops","DML-in-loops"],prerequisites:["apex-dml","apex-triggers-intro"],learningObjectives:["Explain what governor limits are and why Salesforce enforces them","Identify the most critical limits: SOQL queries, DML statements, heap size, CPU time","Recognize and fix the SOQL-in-a-loop anti-pattern","Recognize and fix the DML-in-a-loop anti-pattern","Use Limits class methods to monitor consumption at runtime"],content:[{type:"explanation",title:"Real-World Business Context",text:`Governor limits exist because Salesforce is a **multi-tenant platform** — hundreds of thousands of customers share the same infrastructure. Without limits:

• A runaway loop in one customer's code would starve every other customer's transactions
• One poorly written trigger processing 10,000 records would issue 10,000 SOQL queries and consume the entire database connection pool

Governor limits are enforced **per transaction** — not per user, not per hour. A transaction is one trigger execution, one controller method call, one Visualforce page load.`},{type:"explanation",title:"Key Governor Limits to Know",text:`| Limit | Synchronous | Asynchronous |
|---|---|---|
| SOQL queries | 100 | 200 |
| DML statements | 150 | 150 |
| Records per DML | 10,000 | 10,000 |
| Heap size | 6 MB | 12 MB |
| CPU time | 10,000 ms | 60,000 ms |
| Callouts | 100 | 100 |

The two most commonly violated are **SOQL queries** (100 limit) and **DML statements** (150 limit).`},{type:"example",title:"The SOQL-in-a-Loop Anti-Pattern",text:"This trigger hits the 100 SOQL limit when processing more than 100 records:",code:`// BAD — SOQL inside a loop
trigger ContactTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        // This runs 1 SOQL query PER contact — 200 contacts = 200 queries = LIMIT EXCEEDED!
        Account acc = [SELECT Id, Name FROM Account WHERE Id = :c.AccountId];
        System.debug('Contact belongs to: ' + acc.Name);
    }
}

// GOOD — Collect IDs first, then bulk query
trigger ContactTrigger on Contact (after insert) {
    // Step 1: Collect all AccountIds
    Set<Id> accountIds = new Set<Id>();
    for (Contact c : Trigger.new) {
        if (c.AccountId != null) {
            accountIds.add(c.AccountId);
        }
    }

    // Step 2: One SOQL query for ALL related accounts (1 query, not 200)
    Map<Id, Account> accountMap = new Map<Id, Account>(
        [SELECT Id, Name FROM Account WHERE Id IN :accountIds]
    );

    // Step 3: Use the map — no SOQL in the loop
    for (Contact c : Trigger.new) {
        Account acc = accountMap.get(c.AccountId);
        if (acc != null) {
            System.debug('Contact belongs to: ' + acc.Name);
        }
    }
}`,output:"1 SOQL query regardless of how many contacts are inserted"},{type:"example",title:"The DML-in-a-Loop Anti-Pattern",text:"Same problem with DML — collect records first, insert once:",code:`// BAD — DML inside a loop
for (Account acc : accountsToUpdate) {
    acc.Rating = 'Hot';
    update acc; // 1 DML statement per record — 200 accounts = 200 DML statements
}

// GOOD — Collect, then DML once
List<Account> toUpdate = new List<Account>();
for (Account acc : accountsToUpdate) {
    acc.Rating = 'Hot';
    toUpdate.add(acc); // No DML here
}
update toUpdate; // ONE DML statement for all records`,output:"1 DML statement regardless of list size"},{type:"example",title:"Monitoring Limits at Runtime",text:"Use the Limits class to check consumption during execution:",code:`public class LimitChecker {
    public static void checkLimits() {
        System.debug('SOQL queries used: ' + Limits.getQueries());
        System.debug('SOQL queries remaining: ' +
            (Limits.getLimitQueries() - Limits.getQueries()));
        System.debug('DML statements used: ' + Limits.getDmlStatements());
        System.debug('CPU time used (ms): ' + Limits.getCpuTime());
        System.debug('Heap size used (bytes): ' + Limits.getHeapSize());
    }
}`,output:`SOQL queries used: 3
SOQL queries remaining: 97
DML statements used: 1`},{type:"exercise",title:"Spot the Bug",text:`How many SOQL queries does this code issue when processing 50 Opportunities?

\`\`\`apex
trigger OpportunityTrigger on Opportunity (after update) {
    for (Opportunity opp : Trigger.new) {
        List<Task> tasks = [SELECT Id FROM Task WHERE WhatId = :opp.Id];
        if (tasks.isEmpty()) {
            Task t = new Task(Subject = 'Follow up', WhatId = opp.Id);
            insert t;
        }
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`This trigger issues **50 SOQL queries** (one per Opportunity) AND **up to 50 DML statements** (one insert per Opportunity). With 100 Opportunities it hits the SOQL limit.

Fixed version:
\`\`\`apex
trigger OpportunityTrigger on Opportunity (after update) {
    Set<Id> oppIds = new Set<Id>(Trigger.newMap.keySet());

    // 1 SOQL — find which opps already have tasks
    Map<Id, List<Task>> tasksByOpp = new Map<Id, List<Task>>();
    for (Task t : [SELECT Id, WhatId FROM Task WHERE WhatId IN :oppIds]) {
        if (!tasksByOpp.containsKey(t.WhatId)) tasksByOpp.put(t.WhatId, new List<Task>());
        tasksByOpp.get(t.WhatId).add(t);
    }

    // Build list of tasks to insert — no DML in loop
    List<Task> newTasks = new List<Task>();
    for (Opportunity opp : Trigger.new) {
        if (!tasksByOpp.containsKey(opp.Id)) {
            newTasks.add(new Task(Subject = 'Follow up', WhatId = opp.Id));
        }
    }
    if (!newTasks.isEmpty()) insert newTasks; // 1 DML
}
\`\`\``},{type:"tip",title:"The Golden Rule of Bulkification",text:"**Never put SOQL queries or DML statements inside a for loop.** This is the single most common cause of governor limit errors. The pattern is always: (1) collect IDs in a loop, (2) query/update outside the loop, (3) use a Map to look up results back inside the loop. If you see `[SELECT ...` or `insert`/`update`/`delete` indented inside a `for (`, that is a bug."}],quiz:[{id:"gov-q1",question:"Why does Salesforce enforce governor limits?",options:["To make Apex harder to learn","To prevent one tenant's code from consuming all shared infrastructure resources","To limit the number of records you can store","To enforce coding best practices"],correct:1,explanation:"Salesforce is multi-tenant. Without limits, one customer's runaway code could starve all other customers on the same server. Governor limits are enforced per transaction to ensure fair resource sharing."},{id:"gov-q2",question:"How many SOQL queries can a synchronous transaction execute?",options:["50","100","200","1000"],correct:1,explanation:"Synchronous Apex transactions are limited to 100 SOQL queries. Asynchronous contexts (batch, future, queueable) have a higher limit of 200."},{id:"gov-q3",question:"What is the most effective fix for SOQL-in-a-loop?",options:["Use System.debug to track queries","Use a try/catch to catch LimitException","Collect IDs in the loop, then run one SOQL query outside using WHERE Id IN :idSet","Split the loop into batches of 10"],correct:2,explanation:"Collect all needed IDs in a loop first, then issue one SOQL query with WHERE Id IN :idSet. Use a Map to look up results back inside the loop. This turns N queries into 1."},{id:"gov-q4",question:"What Apex class lets you check how many SOQL queries you have used so far?",options:["System.limits()","Limits.getQueries()","Governor.getSOQLCount()","Debug.limits()"],correct:1,explanation:"The Limits class provides methods like getQueries(), getDmlStatements(), getCpuTime(), and getHeapSize() to monitor governor limit consumption at runtime."}],challengeId:"challenge-apex-governor-limits"},{id:"lwc-data-binding",moduleId:"lwc",order:2,title:"Templates and Data Binding",subtitle:"Connect your component data to the UI",description:"Learn how to bind component data to templates, handle user events, and update the UI reactively in Lightning Web Components.",duration:30,difficulty:"intermediate",tags:["lwc","data-binding","events","reactivity","@track"],prerequisites:["lwc-intro"],learningObjectives:["Bind properties to the template using {property} syntax","Handle DOM events with onclick and oninput handlers","Use getters to compute derived values for the template","Understand when @track is needed vs not needed"],content:[{type:"explanation",title:"Real-World Business Context",text:`Data binding and event handling are the core of interactive Salesforce UIs:

• **Search/filter components** — user types in a search box, results update instantly
• **Calculators and forms** — pricing calculators where totals update as the user changes quantities
• **Multi-step wizards** — progress bar tracks the current step as the user navigates
• **Toggle panels** — expand/collapse sections on record pages`},{type:"explanation",title:"One-Way Data Binding",text:"LWC uses one-way data binding: data flows from JS to template via `{property}` expressions. When the JS property changes, the template automatically re-renders.\n\nPrimitive properties (String, Number, Boolean) are automatically reactive — when you assign a new value, the template updates. For object and array properties, you may need @track (covered below)."},{type:"example",title:"Handling Events",text:"Wire user interactions to JS methods using event handlers:",code:`// counter.js
import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {
    count = 0;
    message = '';

    handleIncrement() {
        this.count++;
        this.message = this.count > 10 ? 'Getting high!' : '';
    }

    handleDecrement() {
        if (this.count > 0) this.count--;
    }

    handleReset() {
        this.count = 0;
        this.message = '';
    }
}

<!-- counter.html -->
<template>
    <lightning-card title="Counter">
        <div class="slds-p-around_medium slds-text-align_center">
            <p class="slds-text-heading_large">{count}</p>
            <template if:true={message}>
                <p class="slds-text-color_error">{message}</p>
            </template>
            <div class="slds-m-top_small">
                <lightning-button label="−" onclick={handleDecrement}></lightning-button>
                <lightning-button label="+" onclick={handleIncrement}
                    variant="brand"></lightning-button>
                <lightning-button label="Reset" onclick={handleReset}></lightning-button>
            </div>
        </div>
    </lightning-card>
</template>`,output:"// Counter updates reactively — template re-renders on each button click"},{type:"example",title:"Input Binding and Getters",text:"Capture user input and compute derived values with getters:",code:`// priceCalculator.js
import { LightningElement } from 'lwc';

export default class PriceCalculator extends LightningElement {
    unitPrice = 0;
    quantity = 1;
    discountPct = 0;

    handlePriceChange(event) {
        this.unitPrice = parseFloat(event.target.value) || 0;
    }

    handleQuantityChange(event) {
        this.quantity = parseInt(event.target.value) || 1;
    }

    handleDiscountChange(event) {
        this.discountPct = parseFloat(event.target.value) || 0;
    }

    // Getters compute derived values — no need to store them separately
    get subtotal() {
        return (this.unitPrice * this.quantity).toFixed(2);
    }

    get discount() {
        return (this.unitPrice * this.quantity * this.discountPct / 100).toFixed(2);
    }

    get total() {
        return (this.unitPrice * this.quantity * (1 - this.discountPct / 100)).toFixed(2);
    }
}

<!-- priceCalculator.html -->
<template>
    <lightning-card title="Price Calculator">
        <div class="slds-p-around_medium">
            <lightning-input label="Unit Price" type="number"
                value={unitPrice} onchange={handlePriceChange}></lightning-input>
            <lightning-input label="Quantity" type="number"
                value={quantity} onchange={handleQuantityChange}></lightning-input>
            <lightning-input label="Discount %" type="number"
                value={discountPct} onchange={handleDiscountChange}></lightning-input>
            <div class="slds-m-top_medium">
                <p>Subtotal: \${subtotal}</p>
                <p>Discount: -\${discount}</p>
                <p><strong>Total: \${total}</strong></p>
            </div>
        </div>
    </lightning-card>
</template>`,output:"// Total updates automatically as user changes inputs"},{type:"note",title:"@track vs No Decorator",text:"In modern LWC, **primitive properties** (string, number, boolean) are reactive by default — just assign a new value and the template updates. **@track** is only needed when you mutate the INTERNAL contents of an object or array (e.g., `this.items.push(x)`). If you replace the whole object/array (`this.items = [...this.items, x]`), no @track is needed."},{type:"exercise",title:"Spot the Bug",text:`This component should show a greeting when the user types a name. What is wrong?

\`\`\`js
import { LightningElement } from 'lwc';
export default class Greeter extends LightningElement {
    name = '';
    get greeting() {
        return 'Hello, ' + name + '!';
    }
    handleChange(event) {
        this.name = event.target.value;
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:"The getter references `name` without `this.`. In a JavaScript class, properties must be accessed via `this.propertyName`. Without `this.`, JavaScript looks for a local variable named `name` (which refers to the `window.name` global) rather than the class property.\n\nFixed:\n```js\nget greeting() {\n    return 'Hello, ' + this.name + '!';\n}\n```\n\nAlways use `this.` to access class properties and methods inside a LightningElement class."},{type:"tip",title:"Other Approaches for State Management",text:"For simple local state, properties + getters work well. For complex shared state across components, consider: **LWC pubsub** (custom events bubbled up and fired through a message channel), **Lightning Message Service** (cross-DOM communication), or **@wire** to Apex (server-driven state). Start simple and reach for heavier tools only when needed."}],quiz:[{id:"db-q1",question:"How do you get the current value from a lightning-input in an event handler?",options:["event.value","event.target.value","event.detail.value","this.inputValue"],correct:1,explanation:"For standard DOM events (like change on a native input), use event.target.value. For Lightning Base Components that fire custom events, use event.detail.value."},{id:"db-q2",question:"What is a getter in LWC used for?",options:["To fetch data from Apex","To compute a value from existing properties without storing it separately","To set a property from outside the component","To subscribe to a wire adapter"],correct:1,explanation:"A getter is a computed property. It recalculates every time it is accessed and the template re-renders. Use it for derived values like totals, formatted strings, and conditional flags."},{id:"db-q3",question:"What is wrong with this event handler: handleClick() { count++; }",options:["Nothing — it is correct","Missing this. — should be this.count++","Count cannot be incremented in an event handler",'The method name must start with "on"'],correct:1,explanation:"Class properties must be accessed with this. inside class methods. Without this., JavaScript looks for a local variable named count which does not exist, leaving the property unchanged."},{id:"db-q4",question:"You have an array property items and you call this.items.push(newItem) in a method. The template does not update. What should you do?",options:["Add @track to the items property","Replace the array: this.items = [...this.items, newItem]","Both A or B would fix it","Arrays cannot be used in LWC templates"],correct:2,explanation:"Either adding @track to items or replacing the array reference triggers reactivity. Without @track, LWC does not detect mutations inside an array. Replacing the array always works because it is a new reference."}],challengeId:"challenge-lwc-data-binding"},{id:"apex-callouts",moduleId:"integrations",order:1,title:"HTTP Callouts in Apex",subtitle:"Connect Salesforce to external REST APIs",description:"Learn how to make HTTP requests from Apex to external systems, parse JSON responses, and follow Salesforce callout best practices.",duration:35,difficulty:"intermediate",tags:["apex","callouts","http","rest","json","integration"],prerequisites:["apex-classes","apex-maps"],learningObjectives:["Make GET and POST HTTP requests using HttpRequest and HttpResponse","Parse JSON responses into Apex maps and typed wrapper classes","Understand Named Credentials and Remote Site Settings","Know when to use @future(callout=true) for callouts from triggers"],content:[{type:"explanation",title:"Real-World Business Context",text:`HTTP callouts integrate Salesforce with the external world:

• **ERP sync** — after an Opportunity closes, call an SAP or NetSuite API to create an order
• **Address validation** — when a Contact is saved, call a postal service API to verify and standardize the mailing address
• **Shipping tracking** — query a FedEx/UPS REST API to update a custom field with the latest shipment status
• **Credit checks** — before a large deal closes, call a credit bureau API to verify the customer's credit score`},{type:"explanation",title:"The Callout Classes",text:`Apex provides three classes for HTTP callouts:

• **HttpRequest** — configure the method (GET/POST), endpoint URL, headers, and body
• **HttpResponse** — holds the response status code, body, and headers
• **Http** — the executor; call \`new Http().send(request)\` to make the actual call`},{type:"example",title:"Making a GET Request",text:"Retrieve data from an external REST API:",code:`public class WeatherService {

    public static Map<String, Object> getCurrentWeather(String city) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.weather.example.com/v1/current?city=' +
            EncodingUtil.urlEncode(city, 'UTF-8'));
        req.setMethod('GET');
        req.setHeader('Accept', 'application/json');
        req.setHeader('Authorization', 'Bearer MY_API_KEY');
        req.setTimeout(10000); // 10 seconds

        HttpResponse res = new Http().send(req);

        if (res.getStatusCode() == 200) {
            // Parse JSON response into a Map
            Map<String, Object> data = (Map<String, Object>)
                JSON.deserializeUntyped(res.getBody());
            return data;
        } else {
            throw new CalloutException(
                'API error: ' + res.getStatusCode() + ' ' + res.getStatus()
            );
        }
    }
}

// Usage:
Map<String, Object> weather = WeatherService.getCurrentWeather('San Francisco');
System.debug('Temperature: ' + weather.get('temperature'));`,output:"Temperature: 68"},{type:"example",title:"Making a POST Request with a JSON Body",text:"Send data to an external API:",code:`public class OrderService {

    public class OrderRequest {
        public String customerId;
        public String productCode;
        public Integer quantity;
    }

    public static String createOrder(String customerId, String productCode, Integer qty) {
        OrderRequest orderReq = new OrderRequest();
        orderReq.customerId = customerId;
        orderReq.productCode = productCode;
        orderReq.quantity = qty;

        HttpRequest req = new HttpRequest();
        // Named Credentials — keep secrets out of code
        req.setEndpoint('callout:ERP_System/api/orders');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(orderReq));

        HttpResponse res = new Http().send(req);

        if (res.getStatusCode() == 201) {
            Map<String, Object> result = (Map<String, Object>)
                JSON.deserializeUntyped(res.getBody());
            return (String) result.get('orderId');
        }
        throw new CalloutException('Order creation failed: ' + res.getStatusCode());
    }
}`,output:"// Returns the new order ID from the external system"},{type:"explanation",title:"Named Credentials and Remote Site Settings",text:"**Remote Site Settings** — before making a callout to any external URL, you must register it in Setup > Security > Remote Site Settings. Without it, Salesforce blocks the request.\n\n**Named Credentials** (preferred) — store the endpoint URL and authentication credentials in Setup. Reference them as `callout:CredentialName/path`. This keeps secrets out of Apex code, works across sandboxes, and is easier to manage."},{type:"warning",title:"Callouts from Triggers Require @future",text:`You CANNOT make a callout synchronously from a trigger because the trigger runs inside a database transaction (and callouts are I/O operations that cannot be rolled back). To call an external API from a trigger, use a @future method with callout=true:

\`\`\`apex
@future(callout=true)
public static void sendToExternalSystem(String payload) {
    // HTTP callout goes here
}
\`\`\``},{type:"exercise",title:"Spot the Bug",text:`This callout method has a bug. What is it?

\`\`\`apex
public static String fetchUser(String userId) {
    HttpRequest req = new HttpRequest();
    req.setEndpoint('https://api.example.com/users/' + userId);
    req.setMethod('GET');
    HttpResponse res = new Http().send(req);
    Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
    return (String) data.get('name');
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`The code parses the response body regardless of the HTTP status code. If the API returns a 404 or 500 error, the response body will be an error message (not valid JSON), causing a JSON parse exception. Always check the status code first:

\`\`\`apex
HttpResponse res = new Http().send(req);
if (res.getStatusCode() == 200) {
    Map<String, Object> data = (Map<String, Object>)
        JSON.deserializeUntyped(res.getBody());
    return (String) data.get('name');
}
throw new CalloutException('Failed: ' + res.getStatusCode());
\`\`\``},{type:"tip",title:"Other Approaches",text:"**JSON.deserialize(body, TypeName.class)** is cleaner than deserializeUntyped when you know the response schema — it maps JSON directly to a typed Apex class. Use deserializeUntyped only for dynamic or unknown schemas. For large integrations, consider **Platform Events** or **MuleSoft** for async, decoupled architectures."}],quiz:[{id:"call-q1",question:"Which class actually sends the HTTP request and returns a response?",options:["HttpRequest","HttpResponse","Http","Callout"],correct:2,explanation:"The Http class sends the request: HttpResponse res = new Http().send(request). HttpRequest configures what to send; HttpResponse holds what came back."},{id:"call-q2",question:"You want to make an API call when a Contact trigger fires. What must you do?",options:["Call Http.send() directly in the trigger","Use @future(callout=true) and call it from the trigger","Use a Scheduled Apex class","Callouts from triggers are not possible at all"],correct:1,explanation:"Triggers run in a DML transaction and cannot make synchronous callouts. Use @future(callout=true) to defer the callout to after the transaction commits."},{id:"call-q3",question:"What is the benefit of using Named Credentials over hardcoding an endpoint URL?",options:["Named Credentials are faster","Named Credentials store credentials securely and avoid secrets in Apex code","Named Credentials bypass Remote Site Settings","Named Credentials allow SOQL inside callouts"],correct:1,explanation:"Named Credentials keep endpoint URLs and authentication tokens in Setup rather than in code. This improves security, simplifies sandbox/production migration, and avoids exposing secrets in source control."},{id:"call-q4",question:"What HTTP status code typically indicates a successfully created resource (POST)?",options:["200 OK","201 Created","204 No Content","400 Bad Request"],correct:1,explanation:"201 Created is the standard response for a successful POST that creates a new resource. 200 OK is for successful GETs/PUTs. Always check the specific status code rather than just checking != 400."}],challengeId:"challenge-apex-callouts"},{id:"apex-triggers-handler",moduleId:"triggers",order:3,title:"The Trigger Handler Pattern",subtitle:"Write maintainable, testable trigger code",description:"Learn the trigger handler pattern — the standard Salesforce architecture that keeps trigger files thin and business logic in testable handler classes.",duration:35,difficulty:"intermediate",tags:["apex","triggers","design-patterns","handler","best-practices"],prerequisites:["apex-triggers-context"],learningObjectives:["Explain why logic should not live directly in trigger files","Create a handler class that separates trigger logic from the trigger body","Route trigger events to the correct handler methods","Write unit tests that test the handler class directly"],content:[{type:"explanation",title:"Real-World Business Context",text:`As Salesforce orgs grow, trigger files balloon with hundreds of lines of business logic, become impossible to test cleanly, and break when multiple developers edit the same file. The trigger handler pattern is used in virtually every professional Salesforce org:

• **Enterprise ISV packages** — Salesforce-recommended architecture for packaged apps
• **Large orgs** — prevents merge conflicts when multiple developers work on the same object
• **CI/CD pipelines** — handler classes are testable in isolation, making automated testing reliable`},{type:"explanation",title:"The Problem with Fat Triggers",text:`Putting business logic directly in trigger files causes problems:

• Triggers cannot be called directly from test classes — you must do DML to exercise them
• Large trigger files become hard to read and maintain
• Multiple developers working on the same trigger causes merge conflicts
• You cannot reuse logic from a trigger in other contexts (batch jobs, REST endpoints)

The solution: keep triggers as thin routing files and put all logic in a separate handler class.`},{type:"example",title:"The Handler Pattern in Practice",text:"The trigger delegates to a handler class. The handler class contains all the actual business logic:",code:`// AccountTrigger.trigger — thin routing file only
trigger AccountTrigger on Account (
    before insert, before update, after insert, after update, before delete
) {
    AccountTriggerHandler handler = new AccountTriggerHandler(Trigger.new, Trigger.oldMap);

    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert();
        if (Trigger.isUpdate) handler.beforeUpdate();
        if (Trigger.isDelete) handler.beforeDelete();
    }
    if (Trigger.isAfter) {
        if (Trigger.isInsert) handler.afterInsert();
        if (Trigger.isUpdate) handler.afterUpdate();
    }
}`,output:"// Trigger is just a router — all logic lives in the handler class"},{type:"example",title:"The Handler Class",text:"The handler class receives the trigger context data and exposes one method per event:",code:`public class AccountTriggerHandler {

    private List<Account> newRecords;
    private Map<Id, Account> oldMap;

    public AccountTriggerHandler(List<Account> newRecs, Map<Id, Account> oldMap) {
        this.newRecords = newRecs;
        this.oldMap = oldMap != null ? oldMap : new Map<Id, Account>();
    }

    public void beforeInsert() {
        for (Account acc : newRecords) {
            if (String.isBlank(acc.BillingCountry)) {
                acc.BillingCountry = 'United States';
            }
        }
    }

    public void beforeUpdate() {
        for (Account acc : newRecords) {
            Account old = oldMap.get(acc.Id);
            if (acc.Rating != old.Rating) {
                acc.Description = 'Rating changed on ' + Date.today();
            }
        }
    }

    public void afterInsert() {
        // Create related records, send notifications, etc.
        List<Task> tasks = new List<Task>();
        for (Account acc : newRecords) {
            tasks.add(new Task(Subject = 'Follow up', WhatId = acc.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }

    public void beforeDelete() { /* cleanup logic */ }
    public void afterUpdate() { /* post-update logic */ }
}`,output:"// Handler class is independently testable and reusable"},{type:"example",title:"Testing the Handler Directly",text:"The key benefit: you can test the handler class without going through the trigger:",code:`@isTest
private class AccountTriggerHandlerTest {

    @isTest
    static void testBeforeInsert_setsDefaultCountry() {
        List<Account> accounts = new List<Account>{
            new Account(Name = 'Test Corp'), // No BillingCountry
            new Account(Name = 'Other Inc', BillingCountry = 'Canada')
        };

        // Call handler directly — no DML needed to test this method!
        AccountTriggerHandler handler = new AccountTriggerHandler(accounts, null);
        handler.beforeInsert();

        System.assertEquals('United States', accounts[0].BillingCountry,
            'Should default to United States');
        System.assertEquals('Canada', accounts[1].BillingCountry,
            'Should not override existing value');
    }
}`,output:"Test passes — handler logic verified without database interaction"},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this trigger handler instantiation?

\`\`\`apex
trigger ContactTrigger on Contact (after update) {
    ContactTriggerHandler handler = new ContactTriggerHandler();
    handler.afterUpdate(Trigger.new, Trigger.oldMap);
}
\`\`\`

\`\`\`apex
public class ContactTriggerHandler {
    public void afterUpdate(List<Contact> newRecs, Map<Id, Contact> oldMap) {
        for (Contact c : Trigger.new) { // <-- look here
            // ...
        }
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:"The handler method receives `newRecs` as a parameter but then references `Trigger.new` directly inside the loop. `Trigger.new` is only valid inside a trigger context — when this method is called from a test class directly, `Trigger.new` is null and throws a NullPointerException.\n\nFixed version:\n```apex\npublic void afterUpdate(List<Contact> newRecs, Map<Id, Contact> oldMap) {\n    for (Contact c : newRecs) { // Use the parameter, not Trigger.new\n        // ...\n    }\n}\n```\n\nAlways use the passed-in parameters in handler methods, never reference Trigger.* directly."},{type:"tip",title:"Other Approaches",text:"**Trigger Framework libraries** (like Kevin O'Hara's TriggerFramework or fflib) take this pattern further with a base virtual class that provides built-in recursion prevention and automatic routing. For simple orgs, the manual handler pattern here is sufficient. For complex ISV packages, consider a full framework."}],quiz:[{id:"hand-q1",question:"What is the primary reason to use a trigger handler class instead of putting logic in the trigger body?",options:["Handler classes execute faster than trigger bodies","Handler classes can be tested independently without performing DML","Triggers are limited to 100 lines of code","Handler classes bypass governor limits"],correct:1,explanation:"The core benefit of the handler pattern is testability. Handler methods can be called directly from test classes, making tests faster and more precise without needing database operations."},{id:"hand-q2",question:"In the handler pattern, what should the trigger file contain?",options:["All business logic","Only routing — delegating to handler methods based on trigger event","SOQL queries and DML statements","The @isTest annotation"],correct:1,explanation:"The trigger should be a thin router that instantiates the handler and calls the appropriate method based on Trigger.isBefore/isAfter and Trigger.isInsert/isUpdate/etc."},{id:"hand-q3",question:"What is wrong with referencing Trigger.new directly inside a handler class method?",options:["Nothing — it always works","Trigger.new is null when the method is called from a test class directly","Trigger.new is only available in after triggers","Handler classes cannot access Trigger context"],correct:1,explanation:"Trigger context variables like Trigger.new are only valid inside an actual trigger execution. If you call the handler method from a test class, Trigger.new is null, causing a NullPointerException."}],challengeId:"challenge-triggers-handler"},{id:"lwc-intro",moduleId:"lwc",order:1,title:"Introduction to Lightning Web Components",subtitle:"Build modern Salesforce UIs with web standards",description:"Learn how Lightning Web Components work, how to structure a component, and how to render dynamic lists and conditional content.",duration:35,difficulty:"beginner",tags:["lwc","components","html","javascript","web-standards"],prerequisites:["apex-classes"],learningObjectives:["Describe the three files that make up an LWC component","Use the @api decorator to expose component properties","Render lists with the for:each directive","Show and hide content with the if:true directive"],content:[{type:"explanation",title:"Real-World Business Context",text:`Lightning Web Components power the Salesforce UI you use every day:

• **Account detail pages** — the related lists and quick action panels are LWC components
• **Custom record forms** — when standard layouts don't fit business needs, LWC builds bespoke UIs
• **Embedded dashboards** — LWC components in Experience Cloud (community) sites surface data to external users
• **Utility bar tools** — productivity components like quick case creation live in the Salesforce utility bar as LWC`},{type:"explanation",title:"What is a Lightning Web Component?",text:`LWC is Salesforce's modern UI framework built on web standards (HTML, JavaScript ES6+, CSS). Every component is a folder containing three files:

• **componentName.html** — the template (what renders on screen)
• **componentName.js** — the controller (data and behavior)
• **componentName.js-meta.xml** — the metadata (where the component can be used)

LWC components are fast (compiled to native web components), testable with Jest, and can communicate with Apex.`},{type:"example",title:"Your First LWC Component",text:"A greeting card component with a public property:",code:`<!-- greetingCard.html -->
<template>
    <lightning-card title="Welcome">
        <div class="slds-p-around_medium">
            <p>Hello, {name}!</p>
            <p>Your role: {role}</p>
        </div>
    </lightning-card>
</template>

// greetingCard.js
import { LightningElement, api } from 'lwc';

export default class GreetingCard extends LightningElement {
    @api name = 'Guest';    // Public — parent can set this
    @api role = 'User';     // Public — parent can set this

    get welcomeMessage() {
        return 'Welcome, ' + this.name + '!';
    }
}

// Usage in a parent component:
// <c-greeting-card name="Sarah" role="Administrator"></c-greeting-card>`,output:"// Renders: Hello, Sarah! / Your role: Administrator"},{type:"example",title:"Rendering Lists with for:each",text:"The for:each directive renders a list of items. The key attribute is required for performance:",code:`<!-- contactList.html -->
<template>
    <lightning-card title="Contacts">
        <ul class="slds-p-around_medium">
            <template for:each={contacts} for:item="contact">
                <li key={contact.id}>
                    {contact.name} — {contact.email}
                </li>
            </template>
        </ul>
    </lightning-card>
</template>

// contactList.js
import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts = [
        { id: '1', name: 'Alice Smith', email: 'alice@example.com' },
        { id: '2', name: 'Bob Jones',  email: 'bob@example.com' },
        { id: '3', name: 'Carol Lee',  email: 'carol@example.com' },
    ];
}`,output:"// Renders a list: Alice Smith — alice@example.com, etc."},{type:"example",title:"Conditional Rendering with if:true",text:"Show or hide sections based on a boolean property:",code:`<!-- statusBanner.html -->
<template>
    <template if:true={isLoading}>
        <lightning-spinner alternative-text="Loading..."></lightning-spinner>
    </template>

    <template if:false={isLoading}>
        <p>Data loaded! {recordCount} records found.</p>
    </template>

    <template if:true={hasError}>
        <p class="error">Error: {errorMessage}</p>
    </template>
</template>

// statusBanner.js
import { LightningElement, api } from 'lwc';

export default class StatusBanner extends LightningElement {
    @api isLoading = false;
    @api hasError = false;
    @api errorMessage = '';
    @api recordCount = 0;
}`,output:"// Shows spinner while loading, then shows record count"},{type:"exercise",title:"Spot the Bug",text:`This LWC component is supposed to display a list of product names. What is wrong?

\`\`\`html
<!-- productList.html -->
<template>
    <template for:each={products} for:item="product">
        <li>{product.name}</li>
    </template>
</template>
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:'The `<li>` element inside `for:each` is missing the required `key` attribute. Without `key`, LWC cannot efficiently update the DOM when the list changes — it throws a warning and may behave incorrectly.\n\nFixed version:\n```html\n<template for:each={products} for:item="product">\n    <li key={product.id}>{product.name}</li>\n</template>\n```\n\nThe `key` must be a unique, stable identifier — typically the record\'s Id. Never use the loop index as a key.'},{type:"note",title:"LWC vs Aura Components",text:"LWC replaced the older Aura Component framework. LWC is faster (native web components), simpler (standard JS/HTML), and Salesforce's recommended approach for all new UI development. Aura components still work but no new features are being added. If you see `<aura:component>` syntax, that is the older framework."}],quiz:[{id:"lwc-q1",question:"Which decorator makes a property settable by a parent component?",options:["@track","@wire","@api","@public"],correct:2,explanation:"@api exposes a property as a public attribute. Parent components can pass values to it via HTML attribute syntax."},{id:"lwc-q2",question:"What is required on each element inside a for:each template directive?",options:["A class attribute","A key attribute with a unique value","An id attribute","A data-index attribute"],correct:1,explanation:"Every element directly inside for:each must have a key={uniqueValue} attribute. This allows the LWC engine to efficiently update the DOM. Use the record's Id or a unique field."},{id:"lwc-q3",question:"Which directive conditionally renders an element when a property is false?",options:["if:true","if:false","if:not","show:false"],correct:1,explanation:"if:false renders the element when the bound property is falsy. if:true renders when the property is truthy."},{id:"lwc-q4",question:"What is wrong with this template: <template for:each={items}><li>{item.name}</li></template>?",options:["Nothing — it is correct","Missing for:item directive to name the loop variable","Should use ng-for instead of for:each","Lists cannot be rendered in LWC"],correct:1,explanation:'for:each requires a matching for:item="variableName" directive to define the name of the current item in the loop. Without it, {item.name} is undefined.'}],challengeId:"challenge-lwc-intro"},{id:"apex-triggers-intro",moduleId:"triggers",order:1,title:"Introduction to Apex Triggers",subtitle:"Automate Salesforce with event-driven code",description:"Learn how Apex triggers let you run custom logic automatically when records are created, updated, or deleted in Salesforce.",duration:30,difficulty:"intermediate",tags:["apex","triggers","automation","events"],prerequisites:["apex-dml"],learningObjectives:["Explain what an Apex trigger is and when it fires","Distinguish between before and after trigger events","Write a trigger that modifies records before they are saved","Understand why one trigger per object is a best practice"],content:[{type:"explanation",title:"Real-World Business Context",text:`Triggers solve real Salesforce automation needs:

• **Lead auto-assignment** — when a new Lead is inserted, automatically set the OwnerId based on the lead's region before it hits the database
• **Opportunity field defaults** — when a new Opportunity is created, default the CloseDate to 30 days from today
• **Cascade updates** — when an Account's rating changes to "Hot", update all its open Opportunities to "High Priority"

Triggers run inside the same database transaction, so they can modify records before they are committed.`},{type:"explanation",title:"What is an Apex Trigger?",text:`An Apex trigger is code that executes automatically before or after specific database events on a Salesforce object. Triggers are attached to a single sObject and fire when records of that type are inserted, updated, deleted, or undeleted.

There are two timing contexts:

• **before triggers** — run before the record is saved to the database. Use these to modify field values on the records being saved (no extra DML needed).
• **after triggers** — run after the record is saved and has an Id. Use these to update related records or perform work that needs the new record's Id.`},{type:"example",title:"Trigger Syntax",text:"The trigger keyword defines the trigger, its object, and which events it handles:",code:`trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    // Trigger.new — list of records being processed
    // Trigger.old — list of records before the change (update/delete only)

    if (Trigger.isBefore && Trigger.isInsert) {
        // Set defaults before the record is saved
        for (Account acc : Trigger.new) {
            if (acc.Rating == null) {
                acc.Rating = 'Warm';
            }
            if (String.isBlank(acc.BillingCountry)) {
                acc.BillingCountry = 'United States';
            }
        }
    }

    if (Trigger.isAfter && Trigger.isInsert) {
        // Work with newly saved records (they now have Ids)
        List<Task> welcomeTasks = new List<Task>();
        for (Account acc : Trigger.new) {
            welcomeTasks.add(new Task(
                Subject = 'Welcome call',
                WhatId = acc.Id,
                ActivityDate = Date.today().addDays(3)
            ));
        }
        insert welcomeTasks;
    }
}`,output:"// Runs automatically when Account records are inserted or updated"},{type:"explanation",title:"Trigger Events Reference",text:`You can combine any of these events in one trigger:

• **before insert** — before new records are saved
• **before update** — before existing records are updated
• **before delete** — before records are deleted
• **after insert** — after new records are saved (Ids available)
• **after update** — after existing records are updated
• **after delete** — after records are deleted (use Trigger.old)
• **after undelete** — after records are restored from the recycle bin`},{type:"warning",title:"One Trigger Per Object",text:"Salesforce allows multiple triggers on the same object, but the execution order is not guaranteed. Always create exactly ONE trigger per object and use if/else blocks or a handler class to route logic. Multiple triggers on the same object lead to unpredictable behavior."},{type:"exercise",title:"Spot the Bug",text:`The developer wants to set a default Description on new Contacts before they are saved. What is wrong with this code?

\`\`\`apex
trigger ContactTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        if (String.isBlank(c.Description)) {
            c.Description = 'New contact';
            update c;
        }
    }
}
\`\`\`

Look carefully at the trigger event and what is happening inside the loop.`},{type:"explanation",title:"Bug Explanation & Fix",text:`There are two bugs:

1. **Wrong event** — \`after insert\` runs after the record is already saved. To set a field value without an extra DML call, use \`before insert\`. In a before trigger, assignments to \`Trigger.new\` records are automatically saved.

2. **DML inside a loop** — \`update c\` inside a for loop will fire one DML per record, hitting the 150 DML limit fast.

Fixed version:

\`\`\`apex
trigger ContactTrigger on Contact (before insert) {
    for (Contact c : Trigger.new) {
        if (String.isBlank(c.Description)) {
            c.Description = 'New contact';
            // No update needed — before trigger saves automatically
        }
    }
}
\`\`\``},{type:"tip",title:"When to Use Which Event",text:"Use **before triggers** when you want to modify the record being saved — it's free (no extra DML). Use **after triggers** when you need the record's Id, or when you need to create/update other related records. Never update Trigger.new records in an after trigger — that causes recursion."}],quiz:[{id:"trig-q1",question:"You want to automatically set a default value on a field when a new record is created. Which trigger event should you use?",options:["after insert","before insert","after update","before delete"],correct:1,explanation:'Use "before insert" to modify field values before they are saved. In a before trigger, assignments to Trigger.new are automatically persisted — no extra DML needed.'},{id:"trig-q2",question:"What does Trigger.new contain?",options:["The records as they were before the change","The list of records currently being processed","Only the fields that changed","The IDs of records that will be inserted next"],correct:1,explanation:"Trigger.new is a List<sObject> containing the new versions of the records being processed. For inserts it contains the new records; for updates it contains the updated versions."},{id:"trig-q3",question:"Which statement about before triggers is TRUE?",options:["You cannot perform SOQL queries in a before trigger","Records in Trigger.new already have Ids in a before insert trigger","You can assign values to fields on Trigger.new records without calling update","Before triggers run after the record is committed to the database"],correct:2,explanation:"In a before trigger, any field assignments on Trigger.new records are automatically included when the record is saved — no explicit DML call required."},{id:"trig-q4",question:'What is wrong with calling "update c" inside a for loop over Trigger.new in a before insert trigger?',options:["Nothing — it is the correct pattern","It causes a NullPointerException because records have no Id yet","It fires unnecessary DML statements and can hit the 150 DML limit","update is not allowed in triggers"],correct:2,explanation:"DML inside a loop is a governor-limit violation waiting to happen. In a before trigger, modify Trigger.new records directly — changes are saved automatically with no extra DML."}],challengeId:"challenge-triggers-intro"},{id:"apex-triggers-context",moduleId:"triggers",order:2,title:"Trigger Context Variables",subtitle:"Access and control triggered record data",description:"Master the trigger context variables — Trigger.new, Trigger.old, Trigger.newMap, and the boolean flags — to write precise, conditional trigger logic.",duration:25,difficulty:"intermediate",tags:["apex","triggers","context","Trigger.new","Trigger.old"],prerequisites:["apex-triggers-intro"],learningObjectives:["Use Trigger.new and Trigger.old to access record data","Use Trigger.newMap and Trigger.oldMap for fast ID-based lookup","Detect field changes by comparing old and new values","Use Trigger.isInsert, Trigger.isUpdate, and Trigger.isDelete flags"],content:[{type:"explanation",title:"Real-World Business Context",text:`Trigger context variables power real automation:

• **Stage change notifications** — detect when an Opportunity StageName changes to "Closed Won" and send a Chatter post
• **Prevent field overwrites** — block users from lowering an Opportunity Amount below its previous value
• **Conditional logic by operation** — only run expensive logic on updates (not inserts) to save governor limit usage`},{type:"explanation",title:"The Context Variable Reference",text:`Salesforce exposes these variables inside every trigger:

• **Trigger.new** — List of new record versions (insert, update, undelete)
• **Trigger.old** — List of old record versions (update, delete)
• **Trigger.newMap** — Map<Id, sObject> of new records (not available on before insert)
• **Trigger.oldMap** — Map<Id, sObject> of old records (update, delete)
• **Trigger.isInsert / isUpdate / isDelete / isUndelete** — boolean flags
• **Trigger.isBefore / isAfter** — timing flags
• **Trigger.size** — number of records in this batch`},{type:"example",title:"Detecting Field Changes",text:"Compare Trigger.old and Trigger.new to run logic only when a specific field changes:",code:`trigger OpportunityTrigger on Opportunity (before update, after update) {

    if (Trigger.isBefore && Trigger.isUpdate) {
        for (Opportunity opp : Trigger.new) {
            Opportunity oldOpp = Trigger.oldMap.get(opp.Id);

            // Only run if StageName actually changed
            if (opp.StageName != oldOpp.StageName) {
                // Auto-set CloseDate when moving to Negotiation
                if (opp.StageName == 'Negotiation/Review' && opp.CloseDate == null) {
                    opp.CloseDate = Date.today().addDays(14);
                }

                // Prevent downgrading Amount
                if (opp.Amount < oldOpp.Amount) {
                    opp.addError('Amount cannot be reduced once set.');
                }
            }
        }
    }
}`,output:"// Automatically manages CloseDate and prevents amount reduction"},{type:"example",title:"Using newMap for Relationship Lookups",text:"Trigger.newMap lets you look up a specific record by ID, which is essential when processing related records:",code:`trigger ContactTrigger on Contact (after update) {

    // Collect IDs of contacts whose AccountId changed
    Set<Id> changedAccountIds = new Set<Id>();

    for (Contact c : Trigger.new) {
        Contact old = Trigger.oldMap.get(c.Id);
        if (c.AccountId != old.AccountId && c.AccountId != null) {
            changedAccountIds.add(c.AccountId);
        }
    }

    if (changedAccountIds.isEmpty()) return;

    // Query accounts once — NOT inside a loop
    Map<Id, Account> accountMap = new Map<Id, Account>(
        [SELECT Id, Name, Industry FROM Account WHERE Id IN :changedAccountIds]
    );

    // Now use newMap to match contacts to their new account
    for (Contact c : Trigger.new) {
        if (accountMap.containsKey(c.AccountId)) {
            Account acct = accountMap.get(c.AccountId);
            System.debug(c.LastName + ' moved to ' + acct.Name);
        }
    }
}`,output:"// Efficiently processes contacts that changed accounts"},{type:"exercise",title:"Spot the Bug",text:`This trigger is supposed to log a debug message only when an Account's Industry changes. What is wrong?

\`\`\`apex
trigger AccountTrigger on Account (before update) {
    for (Account acc : Trigger.new) {
        if (acc.Industry != acc.Industry) {
            System.debug('Industry changed: ' + acc.Industry);
        }
    }
}
\`\`\``},{type:"explanation",title:"Bug Explanation & Fix",text:`The condition \`acc.Industry != acc.Industry\` compares a value to itself — it is always false. The developer meant to compare the new value to the OLD value.

Fixed version:

\`\`\`apex
trigger AccountTrigger on Account (before update) {
    for (Account acc : Trigger.new) {
        Account old = Trigger.oldMap.get(acc.Id);
        if (acc.Industry != old.Industry) {
            System.debug('Industry changed from ' + old.Industry + ' to ' + acc.Industry);
        }
    }
}
\`\`\`

Always use \`Trigger.oldMap.get(record.Id)\` to access the previous values.`},{type:"note",title:"When Trigger.old Is Not Available",text:"Trigger.old and Trigger.oldMap are only populated for update and delete operations — they are null on insert. Always guard with `if (Trigger.isUpdate)` before accessing them, or you will get a NullPointerException."}],quiz:[{id:"ctx-q1",question:"Which context variable gives you a Map<Id, sObject> of records BEFORE the change?",options:["Trigger.new","Trigger.oldMap","Trigger.newMap","Trigger.old"],correct:1,explanation:"Trigger.oldMap is a Map<Id, sObject> keyed by record ID containing the pre-change versions. It is available on update and delete triggers."},{id:"ctx-q2",question:'You need to run extra logic only when the Account Rating field changes from "Cold" to "Hot". Which approach is correct?',options:['if (acc.Rating == "Hot")',"if (acc.Rating != Trigger.oldMap.get(acc.Id).Rating)","if (Trigger.new.Rating != Trigger.old.Rating)",'if (Trigger.isUpdate && acc.Rating == "Hot")'],correct:1,explanation:"Compare the new record's field to the old record from Trigger.oldMap. This detects any change to Rating. Option D only checks the new value, not whether it actually changed."},{id:"ctx-q3",question:"On a before insert trigger, which context variable is NOT available?",options:["Trigger.new","Trigger.isInsert","Trigger.oldMap","Trigger.size"],correct:2,explanation:'Trigger.oldMap (and Trigger.old) are only available for update and delete operations. On insert there are no "old" values.'},{id:"ctx-q4",question:'What does acc.addError("message") do in a before trigger?',options:["Logs a message to the debug log","Prevents the record from being saved and shows the message to the user","Throws a DmlException","Creates an error log record"],correct:1,explanation:"addError() attaches a validation error to the record and prevents the DML operation from completing. The error message is shown to the user."}],challengeId:"challenge-triggers-context"}];Gt.reduce((e,t)=>(e[t.moduleId]||(e[t.moduleId]=[]),e[t.moduleId].push(t),e),{});const Cb=e=>Gt.find(t=>t.id===e),Sg=[{id:"challenge-variables",lessonId:"apex-variables",title:"Build a Contact Info Card",description:"Declare the correct Apex variables to represent a Salesforce Contact record, then print a formatted summary.",difficulty:"beginner",instructions:["Declare a String variable for the contact's full name","Declare an Integer variable for their age","Declare a Decimal variable for their annual salary","Declare a Boolean variable indicating if they are a VIP customer","Declare a Date variable for their hire date using Date.newInstance()","Print a summary using System.debug()"],starterCode:`// TODO: Declare your variables here
// 1. String for full name (e.g., 'Jane Smith')
// 2. Integer for age (e.g., 34)
// 3. Decimal for annual salary (e.g., 85000.00)
// 4. Boolean for VIP status (e.g., true)
// 5. Date for hire date (e.g., Date.newInstance(2020, 3, 15))

// TODO: Print a formatted summary, e.g.:
// "Contact: Jane Smith | Age: 34 | Salary: $85000.00 | VIP: true"
`,hints:["Use the format: DataType variableName = value;","For String values, use single quotes: String name = 'Jane Smith';","For Decimal, include the decimal point: Decimal salary = 85000.00;","For Date, use: Date hireDate = Date.newInstance(year, month, day);","To print: System.debug('Contact: ' + name + ' | Age: ' + age);"],solution:`String fullName = 'Jane Smith';
Integer age = 34;
Decimal annualSalary = 85000.00;
Boolean isVIP = true;
Date hireDate = Date.newInstance(2020, 3, 15);

String summary = 'Contact: ' + fullName
    + ' | Age: ' + age
    + ' | Salary: $' + annualSalary
    + ' | VIP: ' + isVIP
    + ' | Hired: ' + hireDate;

System.debug(summary);`,solutionExplanation:"We declared five variables with the correct types: String for text, Integer for whole numbers, Decimal for currency (supports decimal places), Boolean for true/false, and Date using the static factory method. The summary concatenates all values into one string.",testCases:[{id:"tc1",description:"Declares a String variable",pattern:"String\\s+\\w+\\s*=\\s*'[^']+'",errorMessage:"You need to declare a String variable with a text value in single quotes."},{id:"tc2",description:"Declares an Integer variable",pattern:"Integer\\s+\\w+\\s*=\\s*\\d+",errorMessage:"You need to declare an Integer variable with a whole number value."},{id:"tc3",description:"Declares a Decimal variable",pattern:"Decimal\\s+\\w+\\s*=\\s*[\\d.]+",errorMessage:"You need to declare a Decimal variable with a decimal number."},{id:"tc4",description:"Declares a Boolean variable",pattern:"Boolean\\s+\\w+\\s*=\\s*(true|false)",errorMessage:"You need to declare a Boolean variable with a value of true or false."},{id:"tc5",description:"System.debug() prints the variable values",pattern:"System\\.debug\\(",errorMessage:"Use System.debug() to print the summary — e.g. System.debug(summary) or System.debug('Contact: ' + fullName + ...)."}],scenarios:[{id:"s1",label:"Variable Output",inputDisplay:"(no inputs — your code uses hardcoded values)",inputs:{},expectedOutput:["Contact:","Age:"]},{id:"s2",label:"All Types Present",inputDisplay:"(checks String, Integer, Decimal, Boolean, Date all declared and printed)",inputs:{},expectedOutput:["Salary:","VIP:"]}]},{id:"challenge-strings",lessonId:"apex-strings",title:"Email Address Processor",description:"Write Apex code to validate and normalize an email address from user input.",difficulty:"beginner",instructions:["Take the input email: '  JOHN.DOE@ExAmPlE.CoM  '","Trim whitespace from both ends","Convert the entire email to lowercase",`Check if the email contains an '@' character — if not, print "Invalid email"`,"Extract the username (part before @) and domain (part after @)",'Print: "Username: john.doe | Domain: example.com"'],starterCode:`String rawEmail = '  JOHN.DOE@ExAmPlE.CoM  ';

// Step 1: Trim whitespace
// Step 2: Convert to lowercase
// Step 3: Check if it contains '@'
// Step 4: Extract username and domain
// Step 5: Print the result
`,hints:["Use .trim() to remove whitespace from both ends","Use .toLowerCase() to convert to lowercase","Use .contains('@') to check if @ exists","Use .indexOf('@') to find the position of @","Use .substring(0, atPos) for username, .substring(atPos + 1) for domain"],solution:`String rawEmail = '  JOHN.DOE@ExAmPlE.CoM  ';

String email = rawEmail.trim().toLowerCase();

if (!email.contains('@')) {
    System.debug('Invalid email');
} else {
    Integer atPos = email.indexOf('@');
    String username = email.substring(0, atPos);
    String domain = email.substring(atPos + 1);
    System.debug('Username: ' + username + ' | Domain: ' + domain);
}`,solutionExplanation:"We chain trim() and toLowerCase() to normalize the input. Then we check for @ using contains(), find its position with indexOf(), and use substring() to split the email into username and domain parts.",testCases:[{id:"tc1",description:"Uses trim()",pattern:"\\.trim\\(\\)",errorMessage:"Use .trim() to remove leading and trailing whitespace."},{id:"tc2",description:"Uses toLowerCase()",pattern:"\\.toLowerCase\\(\\)",errorMessage:"Use .toLowerCase() to normalize the email to lowercase."},{id:"tc3",description:"Checks for @ character",pattern:"contains\\(|indexOf\\(",errorMessage:"Check if the email contains an @ character using contains() or indexOf()."},{id:"tc4",description:"Extracts username with substring()",pattern:"substring\\(\\s*0\\s*,",errorMessage:"Extract the username using .substring(0, atPos) — the part before the @."},{id:"tc5",description:"Extracts domain with substring()",pattern:"substring\\(\\s*atPos\\s*\\+\\s*1\\s*\\)",errorMessage:"Extract the domain using .substring(atPos + 1) — the part after the @."},{id:"tc6",description:"Prints username and domain with System.debug()",pattern:"System\\.debug\\([^)]*[Uu]sername[^)]*[Dd]omain",errorMessage:'Print both the username and domain using System.debug(), e.g. "Username: ... | Domain: ..."'}],scenarios:[{id:"s1",label:"Valid Email",inputDisplay:"rawEmail = '  JOHN.DOE@ExAmPlE.CoM  '",inputs:{},expectedOutput:["Username: john.doe","Domain: example.com"]}]},{id:"challenge-conditionals",lessonId:"apex-conditionals",title:"Opportunity Discount Calculator",description:"Write a conditional logic engine that determines the discount percentage based on deal size and account tier.",difficulty:"beginner",instructions:["Given amount = 75000 and accountTier = 'Gold'","Apply these rules:","  - Enterprise tier: 20% discount if amount > 50000, else 15%","  - Gold tier: 15% discount if amount > 50000, else 10%","  - Silver tier: 10% discount if amount > 50000, else 5%","  - All other tiers: 0% discount",'Calculate the discounted price and print: "Discount: X% | Final Price: $Y"'],starterCode:`Decimal amount = 75000;
String accountTier = 'Gold';
Decimal discountPct = 0;

// TODO: Apply discount rules using if/else if/else
// Hint: Use nested conditions or combine them with &&

// TODO: Calculate final price and print result
`,hints:["You can nest if statements: if (accountTier == 'Gold') { if (amount > 50000) { ... } }","Or combine conditions: if (accountTier == 'Gold' && amount > 50000) { ... }","To calculate final price: Decimal finalPrice = amount * (1 - discountPct / 100);","Use String.valueOf() to include numbers in debug output"],solution:`Decimal amount = 75000;
String accountTier = 'Gold';
Decimal discountPct = 0;

if (accountTier == 'Enterprise') {
    discountPct = amount > 50000 ? 20 : 15;
} else if (accountTier == 'Gold') {
    discountPct = amount > 50000 ? 15 : 10;
} else if (accountTier == 'Silver') {
    discountPct = amount > 50000 ? 10 : 5;
} else {
    discountPct = 0;
}

Decimal finalPrice = amount * (1 - discountPct / 100);
System.debug('Discount: ' + discountPct + '% | Final Price: $' + finalPrice);`,solutionExplanation:"We use else if to handle each tier. For Gold with amount 75000 (> 50000), discountPct is 15. The ternary operator (condition ? valueIfTrue : valueIfFalse) is a concise shorthand for if/else.",testCases:[{id:"tc1",description:"Uses if/else if/else or switch",pattern:"if\\s*\\(|switch\\s+on",errorMessage:"Use if/else if/else statements to apply the discount rules."},{id:"tc2",description:"Checks accountTier in a condition",pattern:"accountTier\\s*==",errorMessage:"Your code must compare accountTier using ==, e.g. accountTier == 'Gold'."},{id:"tc3",description:"Checks amount threshold",pattern:"amount\\s*>\\s*50000",errorMessage:"You need to check if amount > 50000 to apply the higher discount."},{id:"tc4",description:"Declares finalPrice variable with formula",pattern:"Decimal\\s+finalPrice|finalPrice\\s*=\\s*amount\\s*\\*",errorMessage:"Declare a Decimal finalPrice and calculate it using the discount formula: amount * (1 - discountPct/100)."},{id:"tc5",description:"Prints discount and final price",pattern:"System\\.debug\\([^)]*[Dd]iscount",errorMessage:"Print the result with System.debug() showing both the discount and final price."}],scenarios:[{id:"s1",label:"Gold tier, $75,000 → 15% off",inputDisplay:"amount = 75000, accountTier = 'Gold' (amount > 50000 → 15%)",inputs:{},expectedOutput:["Discount: 15%"]},{id:"s2",label:"Final price = $63,750",inputDisplay:"75000 × (1 − 15/100) = 63750",inputs:{},expectedOutput:["Final Price: $63750"]},{id:"s3",label:"Exact debug line",inputDisplay:"Discount: 15% | Final Price: $63750",inputs:{},expectedOutput:["Discount: 15% | Final Price: $63750"]}]},{id:"challenge-loops",lessonId:"apex-loops",title:"Sales Report Generator",description:"Use loops to process a list of opportunity amounts and generate a sales summary.",difficulty:"beginner",instructions:["Given the list of deal amounts: {5000, 12000, 3500, 25000, 15000, 47000, 1500, 33000}","Use a loop to calculate: total revenue, deal count, average deal size",'Count how many deals are "large" (> 10000)',"Find the largest deal amount","Print all five results"],starterCode:`List<Decimal> dealAmounts = new List<Decimal>{
    5000, 12000, 3500, 25000, 15000, 47000, 1500, 33000
};

// TODO: Initialize your tracking variables
Decimal totalRevenue = 0;
Integer dealCount = 0;
Integer largeDealCount = 0;
Decimal largestDeal = 0;

// TODO: Loop through dealAmounts and calculate statistics

// TODO: Calculate average (be careful about division by zero!)
Decimal averageDeal = 0;

// TODO: Print results
`,hints:["Use a for-each loop: for (Decimal amount : dealAmounts) { ... }","Add to total: totalRevenue += amount;","Increment counter: dealCount++;","Check and update max: if (amount > largestDeal) largestDeal = amount;","Average = totalRevenue / dealCount (only if dealCount > 0)"],solution:`List<Decimal> dealAmounts = new List<Decimal>{
    5000, 12000, 3500, 25000, 15000, 47000, 1500, 33000
};

Decimal totalRevenue = 0;
Integer dealCount = 0;
Integer largeDealCount = 0;
Decimal largestDeal = 0;

for (Decimal amount : dealAmounts) {
    totalRevenue += amount;
    dealCount++;
    if (amount > 10000) largeDealCount++;
    if (amount > largestDeal) largestDeal = amount;
}

Decimal averageDeal = dealCount > 0 ? totalRevenue / dealCount : 0;

System.debug('Total Revenue: $' + totalRevenue);
System.debug('Deal Count: ' + dealCount);
System.debug('Average Deal: $' + averageDeal);
System.debug('Large Deals (>$10k): ' + largeDealCount);
System.debug('Largest Deal: $' + largestDeal);`,solutionExplanation:"We use a for-each loop to process each amount. We accumulate the total, count deals, check for large deals, and track the max. Average is computed after the loop to avoid dividing inside.",testCases:[{id:"tc1",description:"Uses a loop",pattern:"for\\s*\\(",errorMessage:"Use a for or for-each loop to iterate over dealAmounts."},{id:"tc2",description:"Calculates total revenue",pattern:"totalRevenue\\s*\\+=|totalRevenue\\s*=\\s*totalRevenue\\s*\\+",errorMessage:"Accumulate amounts into totalRevenue inside the loop."},{id:"tc3",description:"Counts large deals over $10,000",pattern:"largeDealCount\\s*\\+\\+|largeDealCount\\s*\\+=\\s*1",errorMessage:"Increment largeDealCount inside the loop when amount > 10000."},{id:"tc4",description:"Tracks the largest deal with a comparison",pattern:"if\\s*\\(\\s*amount\\s*>\\s*largestDeal\\s*\\)",errorMessage:"Compare each amount to largestDeal inside the loop and update largestDeal when it is bigger."},{id:"tc5",description:"Prints all five summary results",pattern:"System\\.debug\\([^)]*averageDeal",errorMessage:"Print all results including the average deal amount using System.debug()."}],scenarios:[{id:"s1",label:"Total revenue",inputDisplay:"sum of 8 deals",inputs:{},expectedOutput:["Total Revenue: $142000"]},{id:"s2",label:"Deal count",inputDisplay:"8 deals",inputs:{},expectedOutput:["Deal Count: 8"]},{id:"s3",label:"Average deal",inputDisplay:"142000 / 8",inputs:{},expectedOutput:["Average Deal: $17750"]},{id:"s4",label:"Large deals (> $10,000)",inputDisplay:"12000, 25000, 15000, 47000, 33000",inputs:{},expectedOutput:["Large Deals (>$10k): 5"]},{id:"s5",label:"Largest deal",inputDisplay:"max of the list",inputs:{},expectedOutput:["Largest Deal: $47000"]}]},{id:"challenge-lists",lessonId:"apex-lists",title:"Contact List Manager",description:"Build a contact list manager that filters, sorts, and summarizes a list of names.",difficulty:"beginner",instructions:["Start with this list: {'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'}","Create a new list containing only names that start with a vowel (A, E, I, O, U)","Sort the filtered list alphabetically","Print the count of filtered names and each name on a separate line"],starterCode:`List<String> contacts = new List<String>{
    'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'
};

// TODO: Create filtered list of names starting with a vowel
List<String> vowelNames = new List<String>();

// TODO: Loop through contacts and add vowel-starting names to vowelNames

// TODO: Sort vowelNames alphabetically

// TODO: Print count and each name
`,hints:["Use a for-each loop to iterate over contacts","To check first letter: name.substring(0, 1) gets the first character","Check vowels: String firstLetter = name.substring(0, 1); if (firstLetter == 'A' || firstLetter == 'E' || ...)","Or use a Set: Set<String> vowels = new Set<String>{'A','E','I','O','U'}; if (vowels.contains(firstLetter))","Use vowelNames.sort() to sort alphabetically"],solution:`List<String> contacts = new List<String>{
    'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'
};

Set<String> vowels = new Set<String>{'A', 'E', 'I', 'O', 'U'};
List<String> vowelNames = new List<String>();

for (String name : contacts) {
    String firstLetter = name.substring(0, 1).toUpperCase();
    if (vowels.contains(firstLetter)) {
        vowelNames.add(name);
    }
}

vowelNames.sort();

System.debug('Vowel-starting contacts: ' + vowelNames.size());
for (String name : vowelNames) {
    System.debug(name);
}`,solutionExplanation:"We use a Set of vowels for an efficient membership check. For each contact, we extract the first letter, uppercase it for safety, and check if it's a vowel. We then sort and print the results.",testCases:[{id:"tc1",description:"Creates a filtered list and uses a loop",pattern:"for\\s*\\(",errorMessage:"Use a for or for-each loop to iterate through the contacts list."},{id:"tc2",description:"Checks the first letter of each name",pattern:"substring\\s*\\(\\s*0\\s*,\\s*1\\s*\\)",errorMessage:"Extract the first letter using .substring(0, 1) to check if it is a vowel."},{id:"tc3",description:"Checks first letter and adds vowel names",pattern:"vowelNames\\.add\\(",errorMessage:"Add matching names to vowelNames using vowelNames.add(name) inside the loop."},{id:"tc4",description:"Sorts the filtered list",pattern:"vowelNames\\.sort\\(\\)",errorMessage:"Sort the filtered list using vowelNames.sort()."},{id:"tc5",description:"Prints the count and each vowel name",pattern:"System\\.debug\\([^)]*vowelNames",errorMessage:"Print the vowelNames count and each name using System.debug()."}],scenarios:[{id:"s1",label:"Vowel Filter",inputDisplay:"contacts = ['Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson']",inputs:{},expectedOutput:["Vowel-starting contacts: 2"]},{id:"s2",label:"Names Listed",inputDisplay:"Alice and Eve should appear in sorted output",inputs:{},expectedOutput:["Alice","Eve"]}]},{id:"challenge-sets",lessonId:"apex-sets",title:"Tag Deduplicator",description:"Use a Set to deduplicate tags from multiple lead sources and identify which tags appear in multiple sources.",difficulty:"beginner",instructions:["You have two tag lists from different lead sources","Source A: {'vip', 'tech', 'enterprise', 'renewal', 'tech'}","Source B: {'sme', 'tech', 'startup', 'vip', 'sme'}","Create a Set of unique tags from Source A","Create a Set of unique tags from Source B","Find tags that appear in BOTH sources (intersection)","Print the unique tag counts for each source, and the shared tags"],starterCode:`List<String> sourceATags = new List<String>{'vip', 'tech', 'enterprise', 'renewal', 'tech'};
List<String> sourceBTags = new List<String>{'sme', 'tech', 'startup', 'vip', 'sme'};

// TODO: Create unique Set for Source A
// TODO: Create unique Set for Source B
// TODO: Find shared tags (intersection)
// TODO: Print results
`,hints:["Convert List to Set: Set<String> uniqueA = new Set<String>(sourceATags);","For intersection, copy one set then use retainAll(): Set<String> shared = new Set<String>(setA); shared.retainAll(setB);","Print set size: System.debug('Source A unique tags: ' + uniqueA.size());","Iterate a set: for (String tag : shared) { System.debug(tag); }"],solution:`List<String> sourceATags = new List<String>{'vip', 'tech', 'enterprise', 'renewal', 'tech'};
List<String> sourceBTags = new List<String>{'sme', 'tech', 'startup', 'vip', 'sme'};

Set<String> uniqueA = new Set<String>(sourceATags);
Set<String> uniqueB = new Set<String>(sourceBTags);

Set<String> shared = new Set<String>(uniqueA);
shared.retainAll(uniqueB);

System.debug('Source A unique tags: ' + uniqueA.size());
System.debug('Source B unique tags: ' + uniqueB.size());
System.debug('Shared tags: ' + shared.size());
for (String tag : shared) {
    System.debug('Shared: ' + tag);
}`,solutionExplanation:"Converting a List to a Set automatically removes duplicates. We copy uniqueA into a new Set and call retainAll() to keep only elements that are also in uniqueB — this is the set intersection operation.",testCases:[{id:"tc1",description:"Creates Set from Source A",pattern:"Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>\\(sourceATags\\)",errorMessage:"Create a Set from sourceATags to deduplicate it."},{id:"tc2",description:"Creates Set from Source B",pattern:"Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>\\(sourceBTags\\)",errorMessage:"Create a Set from sourceBTags to deduplicate it."},{id:"tc3",description:"Finds intersection using retainAll",pattern:"retainAll\\(",errorMessage:"Use retainAll() to find the intersection of the two Sets."}],scenarios:[{id:"s1",label:"Dedup Source A",inputDisplay:"sourceA = ['vip','tech','enterprise','renewal','tech'] → 4 unique tags",inputs:{},expectedOutput:["Source A unique tags: 4"]},{id:"s2",label:"Dedup Source B",inputDisplay:"sourceB = ['sme','tech','startup','vip','sme'] → 4 unique tags",inputs:{},expectedOutput:["Source B unique tags: 4"]}]},{id:"challenge-maps",lessonId:"apex-maps",title:"Territory Revenue Tracker",description:"Use a Map to aggregate total revenue by sales territory from a list of deals.",difficulty:"beginner",instructions:["You have a list of sales territories and deal amounts","Aggregate total revenue per territory using a Map<String, Decimal>","Print each territory and its total revenue, sorted by territory name"],starterCode:`List<String> territories = new List<String>{
    'West', 'East', 'West', 'Central', 'East', 'West', 'Central', 'East'
};
List<Decimal> amounts = new List<Decimal>{
    15000, 8000, 22000, 5000, 31000, 7500, 18000, 12000
};

// TODO: Create a Map<String, Decimal> to track revenue per territory
Map<String, Decimal> revenueByTerritory = new Map<String, Decimal>();

// TODO: Loop through territories and amounts simultaneously
// Hint: use a traditional for loop with index: for (Integer i = 0; i < territories.size(); i++)

// TODO: Sort and print results
`,hints:["Use an index-based for loop: for (Integer i = 0; i < territories.size(); i++)","Get both values: String territory = territories[i]; Decimal amount = amounts[i];","Check if key exists before adding: if (revenueByTerritory.containsKey(territory)) {","  revenueByTerritory.put(territory, revenueByTerritory.get(territory) + amount);","} else { revenueByTerritory.put(territory, amount); }","To sort and print: List<String> keys = new List<String>(revenueByTerritory.keySet()); keys.sort();"],solution:`List<String> territories = new List<String>{
    'West', 'East', 'West', 'Central', 'East', 'West', 'Central', 'East'
};
List<Decimal> amounts = new List<Decimal>{
    15000, 8000, 22000, 5000, 31000, 7500, 18000, 12000
};

Map<String, Decimal> revenueByTerritory = new Map<String, Decimal>();

for (Integer i = 0; i < territories.size(); i++) {
    String territory = territories[i];
    Decimal amount = amounts[i];
    if (revenueByTerritory.containsKey(territory)) {
        revenueByTerritory.put(territory, revenueByTerritory.get(territory) + amount);
    } else {
        revenueByTerritory.put(territory, amount);
    }
}

List<String> keys = new List<String>(revenueByTerritory.keySet());
keys.sort();
for (String key : keys) {
    System.debug(key + ': $' + revenueByTerritory.get(key));
}`,solutionExplanation:"We use an index-based for loop to access both lists simultaneously. For each territory, we check if it already exists in the map and either add to the existing total or create a new entry. Finally, we sort the keys for consistent output.",testCases:[{id:"tc1",description:"Uses indexed for loop to iterate both lists",pattern:"for\\s*\\(\\s*Integer\\s+i",errorMessage:"Use an indexed for loop (for (Integer i = 0; i < territories.size(); i++)) to iterate both lists together."},{id:"tc2",description:"Puts territory revenue into the map",pattern:"revenueByTerritory\\.put\\(",errorMessage:"Use revenueByTerritory.put(territory, amount) to store each territory's revenue."},{id:"tc3",description:"Uses containsKey or handles existing keys",pattern:"containsKey\\(|getOrDefault\\(",errorMessage:"Check if the territory already exists in the map before adding."},{id:"tc4",description:"Prints territory and revenue using the map",pattern:"System\\.debug\\([^)]*revenueByTerritory\\.get\\(",errorMessage:"Print each territory and its revenue using revenueByTerritory.get(key) inside a loop."}],scenarios:[{id:"s1",label:"West Territory",inputDisplay:"8 deals: West $44,500 | East $51,000 | Central $23,000",inputs:{},expectedOutput:["West","East","Central"]},{id:"s2",label:"West Total",inputDisplay:"West has deals: 15000 + 22000 + 7500 = $44,500",inputs:{},expectedOutput:["44500"]}]},{id:"challenge-classes",lessonId:"apex-classes",title:"Account Credit Evaluator",description:"Build an Apex class that evaluates whether an Account qualifies for different credit tiers.",difficulty:"beginner",instructions:["Create a class called AccountCreditEvaluator","It should have properties: accountName (String), annualRevenue (Decimal), yearsInBusiness (Integer)","Add a constructor that accepts all three values","Add a method getCreditTier() that returns a String:",'  - "Platinum" if revenue >= 1M AND years >= 10','  - "Gold" if revenue >= 500K AND years >= 5','  - "Silver" if revenue >= 100K','  - "Standard" otherwise',"Add a method getSummary() that returns a formatted string","Create an instance and test it"],starterCode:`// TODO: Create AccountCreditEvaluator class with:
// - Properties: accountName, annualRevenue, yearsInBusiness
// - Constructor(String name, Decimal revenue, Integer years)
// - String getCreditTier() method
// - String getSummary() method

// Test your class:
// AccountCreditEvaluator evaluator = new AccountCreditEvaluator('Acme Corp', 750000, 8);
// System.debug(evaluator.getCreditTier());  // Should print: Gold
// System.debug(evaluator.getSummary());
`,hints:["Start with: public class AccountCreditEvaluator {","Declare properties before the constructor: public String accountName;","Constructor: public AccountCreditEvaluator(String name, Decimal revenue, Integer years) {","In getCreditTier(), use if/else if with && to combine conditions","In getSummary(), combine properties into a formatted String"],solution:`public class AccountCreditEvaluator {

    public String accountName;
    public Decimal annualRevenue;
    public Integer yearsInBusiness;

    public AccountCreditEvaluator(String name, Decimal revenue, Integer years) {
        this.accountName = name;
        this.annualRevenue = revenue;
        this.yearsInBusiness = years;
    }

    public String getCreditTier() {
        if (annualRevenue >= 1000000 && yearsInBusiness >= 10) {
            return 'Platinum';
        } else if (annualRevenue >= 500000 && yearsInBusiness >= 5) {
            return 'Gold';
        } else if (annualRevenue >= 100000) {
            return 'Silver';
        } else {
            return 'Standard';
        }
    }

    public String getSummary() {
        return accountName + ' | Revenue: $' + annualRevenue
            + ' | Years: ' + yearsInBusiness
            + ' | Tier: ' + getCreditTier();
    }
}

AccountCreditEvaluator evaluator = new AccountCreditEvaluator('Acme Corp', 750000, 8);
System.debug(evaluator.getCreditTier());
System.debug(evaluator.getSummary());`,solutionExplanation:"The class bundles three related properties with methods to process them. getCreditTier() uses compound conditions (&&) to evaluate multiple criteria. getSummary() reuses getCreditTier() rather than duplicating the logic.",testCases:[{id:"tc1",description:"Defines class named AccountCreditEvaluator",pattern:"public\\s+class\\s+AccountCreditEvaluator",errorMessage:"Define the class with: public class AccountCreditEvaluator {"},{id:"tc2",description:"Has a constructor accepting name, revenue, years",pattern:"public\\s+AccountCreditEvaluator\\s*\\(\\s*String\\s+\\w+\\s*,\\s*Decimal\\s+\\w+\\s*,\\s*Integer\\s+\\w+",errorMessage:"Add a constructor: public AccountCreditEvaluator(String name, Decimal revenue, Integer years) { ... }"},{id:"tc3",description:"getCreditTier() returns a tier string based on revenue",pattern:"public\\s+String\\s+getCreditTier\\s*\\(\\s*\\)",errorMessage:"Add a method: public String getCreditTier() that returns Platinum, Gold, Silver, or Standard."},{id:"tc4",description:"Creates an instance of AccountCreditEvaluator with new",pattern:"new\\s+AccountCreditEvaluator\\s*\\(",errorMessage:"Create an instance with: new AccountCreditEvaluator(name, revenue, years)"}]},{id:"challenge-soql",lessonId:"soql-basics",title:"SOQL Query Builder",description:"Write the correct SOQL queries to retrieve specific sets of Salesforce records.",difficulty:"beginner",instructions:["Write a SOQL query to get the top 5 Opportunities by Amount, Closed Won only, sorted descending",'Write a SOQL query to get all Contacts whose email ends with "@techcorp.com"',"Write a SOQL query to count all Accounts per Industry using GROUP BY","Store each result in an appropriately typed variable"],starterCode:`// Query 1: Top 5 Closed Won Opportunities by Amount (descending)
// Store result in: List<Opportunity> topDeals
// TODO:


// Query 2: Contacts with email ending in @techcorp.com
// Store result in: List<Contact> techContacts
// TODO:


// Query 3: Count Accounts by Industry using aggregate query
// Store result in: AggregateResult[] industryCount
// TODO:

`,hints:["Query 1: [SELECT Id, Name, Amount FROM Opportunity WHERE StageName = 'Closed Won' ORDER BY Amount DESC LIMIT 5]","Query 2: For LIKE with ending pattern use '%@techcorp.com'","Query 3: SELECT Industry, COUNT(Id) cnt FROM Account GROUP BY Industry","Access aggregate result: String industry = (String) result.get('Industry');"],solution:`// Query 1: Top 5 Closed Won Opportunities by Amount
List<Opportunity> topDeals = [
    SELECT Id, Name, Amount, CloseDate
    FROM Opportunity
    WHERE StageName = 'Closed Won'
    ORDER BY Amount DESC
    LIMIT 5
];
System.debug('Top deals: ' + topDeals.size());

// Query 2: Contacts with techcorp.com emails
List<Contact> techContacts = [
    SELECT Id, FirstName, LastName, Email
    FROM Contact
    WHERE Email LIKE '%@techcorp.com'
    LIMIT 100
];
System.debug('Tech contacts: ' + techContacts.size());

// Query 3: Count by industry
AggregateResult[] industryCount = [
    SELECT Industry, COUNT(Id) cnt
    FROM Account
    WHERE Industry != null
    GROUP BY Industry
    ORDER BY COUNT(Id) DESC
];
for (AggregateResult ar : industryCount) {
    System.debug(ar.get('Industry') + ': ' + ar.get('cnt'));
}`,solutionExplanation:"Query 1 uses ORDER BY Amount DESC to sort largest first, LIMIT 5 caps results. Query 2 uses LIKE with % at the start to match any prefix before @techcorp.com. Query 3 uses GROUP BY with COUNT(Id) — a common pattern for reporting.",testCases:[{id:"tc1",description:"Uses ORDER BY ... DESC",pattern:"ORDER\\s+BY.+DESC",errorMessage:"Sort the Opportunities using ORDER BY Amount DESC."},{id:"tc2",description:"Uses LIMIT 5",pattern:"LIMIT\\s+5",errorMessage:"Limit the Opportunity results to 5 using LIMIT 5."},{id:"tc3",description:"Uses LIKE for email matching",pattern:"LIKE\\s+'%@",errorMessage:"Use the LIKE operator with % wildcard to match the email domain."},{id:"tc4",description:"Uses GROUP BY for aggregation",pattern:"GROUP\\s+BY",errorMessage:"Use GROUP BY with COUNT() to aggregate accounts by industry."}]},{id:"challenge-dml",lessonId:"apex-dml",title:"Bulk Account Creator",description:"Write Apex code to create 5 Account records in a single bulk DML operation and handle any errors.",difficulty:"beginner",instructions:["Create a List<Account> with 5 Account records","Each account should have: Name, Industry, Phone, and AnnualRevenue","Use industries: Technology, Healthcare, Finance, Retail, Manufacturing","Insert all 5 accounts in a SINGLE insert statement (not in a loop)","After insert, print each account's Name and newly assigned Id","Wrap the insert in try/catch to handle DmlException"],starterCode:`List<Account> accountsToCreate = new List<Account>();

// TODO: Add 5 Account records to accountsToCreate
// Each should have Name, Industry, Phone, and AnnualRevenue

// TODO: Insert all accounts in ONE statement (not in a loop)

// TODO: Print each account's Name and Id after insert

// TODO: Wrap in try/catch for DmlException
`,hints:["Create an Account: new Account(Name = 'Acme', Industry = 'Technology', Phone = '415-555-0100', AnnualRevenue = 500000)","Add to list: accountsToCreate.add(new Account(...));","Bulk insert: insert accountsToCreate; (OUTSIDE any loop!)","After insert, loop to print: for (Account a : accountsToCreate) { System.debug(a.Name + ': ' + a.Id); }","Catch DML errors: catch (DmlException e) { System.debug('Error: ' + e.getMessage()); }"],solution:`List<Account> accountsToCreate = new List<Account>{
    new Account(Name = 'TechVentures Inc', Industry = 'Technology',
                Phone = '415-555-0101', AnnualRevenue = 5000000),
    new Account(Name = 'HealthFirst Corp', Industry = 'Healthcare',
                Phone = '212-555-0102', AnnualRevenue = 8000000),
    new Account(Name = 'Capital Group', Industry = 'Finance',
                Phone = '312-555-0103', AnnualRevenue = 12000000),
    new Account(Name = 'RetailMax', Industry = 'Retail',
                Phone = '617-555-0104', AnnualRevenue = 3000000),
    new Account(Name = 'ManuPro Industries', Industry = 'Manufacturing',
                Phone = '713-555-0105', AnnualRevenue = 6500000)
};

try {
    insert accountsToCreate;
    System.debug('Successfully created ' + accountsToCreate.size() + ' accounts:');
    for (Account a : accountsToCreate) {
        System.debug(a.Name + ' -> ID: ' + a.Id);
    }
} catch (DmlException e) {
    System.debug('DML Error: ' + e.getMessage());
}`,solutionExplanation:"We create all Account objects first, then insert them all at once with a single DML statement. This is the bulkification pattern — one DML call for many records is far more efficient than one call per record. After insert, each account's Id is automatically populated by Salesforce.",testCases:[{id:"tc1",description:"Adds Account records to the list",pattern:"\\.add\\(new\\s+Account|new\\s+Account\\(Name",errorMessage:"Add Account objects to your list using accountsToCreate.add(new Account(...))."},{id:"tc2",description:"Each Account has a Name field set",pattern:"new\\s+Account\\s*\\([^)]*Name\\s*=",errorMessage:"Create Account objects with at least a Name field: new Account(Name = '...', ...)"},{id:"tc3",description:"Uses single insert statement",pattern:"insert\\s+\\w+",errorMessage:'Use a single "insert list;" statement outside of any loop.'},{id:"tc4",description:"Wraps in try/catch",pattern:"try\\s*\\{|catch\\s*\\(",errorMessage:"Wrap the insert in a try/catch block to handle DmlException."},{id:"tc5",description:"Prints each account Name and Id after insert",pattern:"System\\.debug\\([^)]*\\.Name[^)]*\\.Id|System\\.debug\\([^)]*\\.Id[^)]*\\.Name",errorMessage:"Loop through the accounts after insert and print both a.Name and a.Id using System.debug()."}]},{id:"challenge-lwc-data-binding",lessonId:"lwc-data-binding",title:"Interactive Discount Calculator",description:"Build an LWC component that lets users enter a price and discount, then computes and displays the final price using getters.",difficulty:"intermediate",instructions:["Create an LWC component with properties: price (default 0), discountPct (default 0)","Add event handlers: handlePriceChange and handleDiscountChange that update the properties from input values",'Add a getter "finalPrice" that computes: price * (1 - discountPct / 100), rounded to 2 decimals','Add a getter "savings" that computes: price - finalPrice',"Display the original price, discount %, savings, and final price in the template","Use lightning-input components for the price and discount inputs"],starterCode:`// discountCalculator.js
import { LightningElement } from 'lwc';

export default class DiscountCalculator extends LightningElement {
    // TODO: Define price and discountPct properties
    // TODO: Add handlePriceChange event handler
    // TODO: Add handleDiscountChange event handler
    // TODO: Add finalPrice getter
    // TODO: Add savings getter
}

<!-- discountCalculator.html -->
<template>
    <lightning-card title="Discount Calculator">
        <div class="slds-p-around_medium">
            <!-- TODO: Add two lightning-input fields for price and discount -->
            <!-- TODO: Display finalPrice and savings -->
        </div>
    </lightning-card>
</template>
`,hints:["Properties: price = 0; discountPct = 0;","Handler: handlePriceChange(event) { this.price = parseFloat(event.target.value) || 0; }","Getter: get finalPrice() { return (this.price * (1 - this.discountPct / 100)).toFixed(2); }","Getter: get savings() { return (this.price - this.finalPrice).toFixed(2); }",'Template input: <lightning-input type="number" label="Price" value={price} onchange={handlePriceChange}></lightning-input>'],solution:`// discountCalculator.js
import { LightningElement } from 'lwc';

export default class DiscountCalculator extends LightningElement {
    price = 0;
    discountPct = 0;

    handlePriceChange(event) {
        this.price = parseFloat(event.target.value) || 0;
    }

    handleDiscountChange(event) {
        this.discountPct = parseFloat(event.target.value) || 0;
    }

    get finalPrice() {
        return (this.price * (1 - this.discountPct / 100)).toFixed(2);
    }

    get savings() {
        return (this.price - this.finalPrice).toFixed(2);
    }
}

<!-- discountCalculator.html -->
<template>
    <lightning-card title="Discount Calculator">
        <div class="slds-p-around_medium">
            <lightning-input type="number" label="Original Price"
                value={price} onchange={handlePriceChange}></lightning-input>
            <lightning-input type="number" label="Discount %"
                value={discountPct} onchange={handleDiscountChange}></lightning-input>
            <div class="slds-m-top_medium">
                <p>Original: \${price}</p>
                <p>Savings: \${savings}</p>
                <p><strong>Final Price: \${finalPrice}</strong></p>
            </div>
        </div>
    </lightning-card>
</template>`,solutionExplanation:"Properties price and discountPct are reactive primitives. Event handlers update them via this.price = ... and this.discountPct = ..., triggering a re-render. Getters finalPrice and savings compute derived values on demand, keeping the template clean.",testCases:[{id:"tc1",description:"Has price and discountPct properties",pattern:"price\\s*=|discountPct\\s*=",errorMessage:"Define price and discountPct properties in your class."},{id:"tc2",description:"Has handlePriceChange event handler",pattern:"handlePriceChange|handlePrice",errorMessage:"Add an event handler method for price changes."},{id:"tc3",description:"Has finalPrice getter",pattern:"get\\s+finalPrice",errorMessage:"Add a getter named finalPrice to compute the discounted price."},{id:"tc4",description:"Uses event.target.value in handler",pattern:"event\\.target\\.value|event\\.detail\\.value",errorMessage:"Use event.target.value (or event.detail.value) to read the input value."}]},{id:"challenge-apex-callouts",lessonId:"apex-callouts",title:"User Profile Fetcher",description:"Write an Apex class that makes a GET callout to a mock user API, checks the status code, and parses the JSON response.",difficulty:"intermediate",instructions:["Create a class UserApiService with a static method getUserName(String userId)","Build an HttpRequest with GET method to: https://jsonplaceholder.typicode.com/users/userId","Set the Accept header to application/json","Send the request with new Http().send(req)",'If status code is 200, parse the JSON body and return the "name" field',"If status code is not 200, throw a CalloutException with a helpful message"],starterCode:`public class UserApiService {

    public static String getUserName(String userId) {
        // TODO: Create HttpRequest
        // TODO: Set endpoint, method, and headers
        // TODO: Send the request
        // TODO: Check status code
        // TODO: If 200, parse JSON and return name
        // TODO: Otherwise throw CalloutException
        return null;
    }
}
`,hints:["HttpRequest req = new HttpRequest();","req.setEndpoint('https://jsonplaceholder.typicode.com/users/' + userId);","req.setMethod('GET'); req.setHeader('Accept', 'application/json');","HttpResponse res = new Http().send(req);","if (res.getStatusCode() == 200) { Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(res.getBody()); return (String) data.get('name'); }","throw new CalloutException('Failed: ' + res.getStatusCode());"],solution:`public class UserApiService {

    public static String getUserName(String userId) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://jsonplaceholder.typicode.com/users/' + userId);
        req.setMethod('GET');
        req.setHeader('Accept', 'application/json');

        HttpResponse res = new Http().send(req);

        if (res.getStatusCode() == 200) {
            Map<String, Object> data = (Map<String, Object>)
                JSON.deserializeUntyped(res.getBody());
            return (String) data.get('name');
        }
        throw new CalloutException('API error: ' + res.getStatusCode() + ' ' + res.getStatus());
    }
}`,solutionExplanation:"We configure the request (endpoint, method, header), send it, then check the status code before parsing. deserializeUntyped returns a Map<String, Object> which we cast to access fields. The CalloutException on non-200 gives callers a clear error.",testCases:[{id:"tc1",description:"Creates an HttpRequest",pattern:"new\\s+HttpRequest\\(\\)",errorMessage:"Create an HttpRequest instance."},{id:"tc2",description:"Sets method to GET",pattern:"setMethod\\s*\\(\\s*'GET'",errorMessage:"Set the HTTP method to GET using req.setMethod('GET')."},{id:"tc3",description:"Sends request with Http().send()",pattern:"new\\s+Http\\(\\)\\.send\\(",errorMessage:"Send the request using new Http().send(req)."},{id:"tc4",description:"Checks status code 200",pattern:"getStatusCode\\(\\)\\s*==\\s*200",errorMessage:"Check if res.getStatusCode() == 200 before parsing the response body."},{id:"tc5",description:"Parses JSON response",pattern:"JSON\\.deserializeUntyped|JSON\\.deserialize",errorMessage:"Use JSON.deserializeUntyped() to parse the response body."}]},{id:"challenge-triggers-handler",lessonId:"apex-triggers-handler",title:"Build a Contact Trigger Handler",description:"Implement the trigger handler pattern for the Contact object — a thin trigger and a separate handler class.",difficulty:"intermediate",instructions:["Create a trigger named ContactTrigger on Contact for before insert and before update","The trigger should instantiate a ContactTriggerHandler and delegate to beforeInsert() or beforeUpdate()","Create class ContactTriggerHandler with a constructor that accepts List<Contact> and Map<Id,Contact>",'beforeInsert(): if Email is blank, set it to "noemail@placeholder.com"','beforeUpdate(): if Phone changed, set Description to "Phone updated on " + Date.today()'],starterCode:`// ContactTrigger.trigger
trigger ContactTrigger on Contact (before insert, before update) {
    // TODO: Instantiate ContactTriggerHandler and delegate
}

// ContactTriggerHandler.cls
public class ContactTriggerHandler {
    private List<Contact> newRecords;
    private Map<Id, Contact> oldMap;

    // TODO: Constructor
    // TODO: beforeInsert() method
    // TODO: beforeUpdate() method
}
`,hints:["Trigger body: ContactTriggerHandler h = new ContactTriggerHandler(Trigger.new, Trigger.oldMap);","Then: if (Trigger.isBefore && Trigger.isInsert) h.beforeInsert();","Constructor: this.newRecords = newRecs; this.oldMap = oldMap != null ? oldMap : new Map<Id,Contact>();","beforeInsert: for (Contact c : newRecords) { if (String.isBlank(c.Email)) c.Email = 'noemail@placeholder.com'; }","beforeUpdate: Contact old = oldMap.get(c.Id); if (c.Phone != old.Phone) c.Description = 'Phone updated on ' + Date.today();"],solution:`trigger ContactTrigger on Contact (before insert, before update) {
    ContactTriggerHandler handler = new ContactTriggerHandler(Trigger.new, Trigger.oldMap);
    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert();
        if (Trigger.isUpdate) handler.beforeUpdate();
    }
}

public class ContactTriggerHandler {
    private List<Contact> newRecords;
    private Map<Id, Contact> oldMap;

    public ContactTriggerHandler(List<Contact> newRecs, Map<Id, Contact> oldMap) {
        this.newRecords = newRecs;
        this.oldMap = oldMap != null ? oldMap : new Map<Id, Contact>();
    }

    public void beforeInsert() {
        for (Contact c : newRecords) {
            if (String.isBlank(c.Email)) {
                c.Email = 'noemail@placeholder.com';
            }
        }
    }

    public void beforeUpdate() {
        for (Contact c : newRecords) {
            Contact old = oldMap.get(c.Id);
            if (c.Phone != old.Phone) {
                c.Description = 'Phone updated on ' + Date.today();
            }
        }
    }
}`,solutionExplanation:"The trigger is a thin router that delegates to the handler class. The handler receives context data via its constructor and exposes one method per trigger event. All logic lives in the handler — making it independently testable.",testCases:[{id:"tc1",description:"Trigger instantiates the handler class",pattern:"new\\s+ContactTriggerHandler",errorMessage:"The trigger should instantiate a ContactTriggerHandler."},{id:"tc2",description:"Handler class has a constructor",pattern:"public\\s+ContactTriggerHandler\\s*\\(",errorMessage:"Add a public constructor to ContactTriggerHandler that accepts the trigger lists."},{id:"tc3",description:"beforeInsert method exists",pattern:"public\\s+void\\s+beforeInsert",errorMessage:"Add a public void beforeInsert() method to the handler."},{id:"tc4",description:"beforeUpdate method exists",pattern:"public\\s+void\\s+beforeUpdate",errorMessage:"Add a public void beforeUpdate() method to the handler."}]},{id:"challenge-lwc-intro",lessonId:"lwc-intro",title:"Product Card Component",description:"Build an LWC component that displays a list of product cards with name, price, and availability status.",difficulty:"beginner",instructions:["Create an LWC component with a products array (defined in JS)","Each product object has: id, name, price (Decimal), inStock (Boolean)","Use for:each in the template to render each product",'Show "In Stock" if inStock is true, "Out of Stock" if false (use if:true / if:false)',"Display the product name and price in each item","Use key={product.id} on the repeated element"],starterCode:`// productCards.js
import { LightningElement } from 'lwc';

export default class ProductCards extends LightningElement {
    // TODO: Define a products array with at least 3 products
    // Each product: { id, name, price, inStock }

    products = [
        // TODO: add product objects here
    ];
}

<!-- productCards.html -->
<template>
    <lightning-card title="Products">
        <div class="slds-p-around_medium">
            <!-- TODO: Use for:each to render each product -->
            <!-- Show name, price, and In Stock / Out of Stock -->
        </div>
    </lightning-card>
</template>
`,hints:["Product object: { id: '1', name: 'Widget A', price: 29.99, inStock: true }",'for:each syntax: <template for:each={products} for:item="product">',"Each repeated element needs: key={product.id}","Conditional: <template if:true={product.inStock}><span>In Stock</span></template>","Price display: {product.price}"],solution:`// productCards.js
import { LightningElement } from 'lwc';

export default class ProductCards extends LightningElement {
    products = [
        { id: '1', name: 'Widget A', price: 29.99, inStock: true },
        { id: '2', name: 'Gadget Pro', price: 149.99, inStock: false },
        { id: '3', name: 'Super Tool', price: 79.99, inStock: true },
    ];
}

<!-- productCards.html -->
<template>
    <lightning-card title="Products">
        <div class="slds-p-around_medium">
            <template for:each={products} for:item="product">
                <div key={product.id} class="slds-box slds-m-bottom_small">
                    <p><strong>{product.name}</strong></p>
                    <p>Price: \${product.price}</p>
                    <template if:true={product.inStock}>
                        <span class="slds-badge slds-badge_success">In Stock</span>
                    </template>
                    <template if:false={product.inStock}>
                        <span class="slds-badge">Out of Stock</span>
                    </template>
                </div>
            </template>
        </div>
    </lightning-card>
</template>`,solutionExplanation:"We define the products array in the JS controller and use for:each in the template to iterate it. Each product card uses if:true and if:false to show the correct stock status. The key attribute on the repeated element is required for efficient DOM updates.",testCases:[{id:"tc1",description:"Defines products array with at least one item",pattern:"products\\s*=\\s*\\[\\s*\\{",errorMessage:"Define a products array in your class with at least one product object inside: products = [{ id: ..., name: ... }]"},{id:"tc2",description:"Uses for:each directive",pattern:"for:each=\\{products\\}",errorMessage:"Use for:each={products} in the template to render the list."},{id:"tc3",description:"Uses for:item directive",pattern:"for:item=",errorMessage:'Add for:item="product" alongside for:each to name the loop variable.'},{id:"tc4",description:"Has key attribute on repeated element",pattern:"key=\\{",errorMessage:"Add key={product.id} to the element directly inside the for:each template."},{id:"tc5",description:"Uses if:true or if:false for inStock",pattern:"if:true=\\{|if:false=\\{",errorMessage:"Use if:true or if:false to conditionally show In Stock / Out of Stock."}]},{id:"challenge-triggers-intro",lessonId:"apex-triggers-intro",title:"Lead Auto-Enrichment Trigger",description:"Write a before insert trigger on Lead that sets default field values when a new Lead is created.",difficulty:"intermediate",instructions:["Create a trigger named LeadTrigger on the Lead object for before insert",`If the Lead's LeadSource is blank, set it to "Web"`,`If the Lead's Rating is null, set it to "Cold"`,`If the Lead's Company is blank, set Company to "Unknown"`,"Loop through Trigger.new and apply the defaults","Do NOT use any DML statements (before trigger saves automatically)"],starterCode:`// Write a before insert trigger on Lead
// Set defaults: LeadSource = 'Web', Rating = 'Cold', Company = 'Unknown'

trigger LeadTrigger on Lead (before insert) {
    // TODO: Loop through Trigger.new
    // TODO: Set LeadSource to 'Web' if blank
    // TODO: Set Rating to 'Cold' if null
    // TODO: Set Company to 'Unknown' if blank
}
`,hints:["Use: for (Lead l : Trigger.new) { ... }","Check blank: if (String.isBlank(l.LeadSource)) { l.LeadSource = 'Web'; }","Check null: if (l.Rating == null) { l.Rating = 'Cold'; }","No update or insert statement needed — before trigger changes are saved automatically"],solution:`trigger LeadTrigger on Lead (before insert) {
    for (Lead l : Trigger.new) {
        if (String.isBlank(l.LeadSource)) {
            l.LeadSource = 'Web';
        }
        if (l.Rating == null) {
            l.Rating = 'Cold';
        }
        if (String.isBlank(l.Company)) {
            l.Company = 'Unknown';
        }
    }
}`,solutionExplanation:"In a before insert trigger, we iterate Trigger.new and directly set field values. No update DML is needed — the platform automatically saves these modified values when the transaction completes.",testCases:[{id:"tc1",description:"Loops through Trigger.new",pattern:"for\\s*\\(\\s*Lead\\s+\\w+\\s*:\\s*Trigger\\.new\\s*\\)",errorMessage:"Loop through Trigger.new using a for-each: for (Lead l : Trigger.new)"},{id:"tc2",description:"Uses String.isBlank to check LeadSource",pattern:"String\\.isBlank\\s*\\([^)]*LeadSource|isBlank\\s*\\([^)]*LeadSource",errorMessage:"Check if LeadSource is blank using String.isBlank(l.LeadSource)."},{id:"tc3",description:"Sets LeadSource to Web when blank",pattern:"LeadSource\\s*=\\s*'Web'",errorMessage:"Set l.LeadSource = 'Web' when it is blank."},{id:"tc4",description:"Sets Rating to Cold when null",pattern:"Rating\\s*=\\s*'Cold'",errorMessage:"Set l.Rating = 'Cold' when it is null."},{id:"tc5",description:"Sets Company to Unknown when blank",pattern:"Company\\s*=\\s*'Unknown'",errorMessage:"Set l.Company = 'Unknown' when it is blank. No DML needed in a before trigger."}]},{id:"challenge-triggers-context",lessonId:"apex-triggers-context",title:"Opportunity Stage Change Tracker",description:"Write a trigger that detects when an Opportunity's StageName changes and stamps a custom field with the previous stage.",difficulty:"intermediate",instructions:["Create a before update trigger on Opportunity","Loop through Trigger.new","For each opportunity, get the old version from Trigger.oldMap","If StageName has changed, set the custom field Previous_Stage__c to the OLD stage name",'If StageName changed to "Closed Won", also set CloseDate to today if CloseDate is null'],starterCode:`trigger OpportunityTrigger on Opportunity (before update) {
    for (Opportunity opp : Trigger.new) {
        // TODO: Get the old Opportunity from Trigger.oldMap
        // TODO: Check if StageName changed
        // TODO: If changed, set Previous_Stage__c to the old StageName
        // TODO: If new stage is 'Closed Won' and CloseDate is null, set CloseDate to today
    }
}
`,hints:["Get old record: Opportunity old = Trigger.oldMap.get(opp.Id);","Check field change: if (opp.StageName != old.StageName) { ... }","Set previous stage: opp.Previous_Stage__c = old.StageName;","Set close date: if (opp.StageName == 'Closed Won' && opp.CloseDate == null) { opp.CloseDate = Date.today(); }"],solution:`trigger OpportunityTrigger on Opportunity (before update) {
    for (Opportunity opp : Trigger.new) {
        Opportunity old = Trigger.oldMap.get(opp.Id);
        if (opp.StageName != old.StageName) {
            opp.Previous_Stage__c = old.StageName;
            if (opp.StageName == 'Closed Won' && opp.CloseDate == null) {
                opp.CloseDate = Date.today();
            }
        }
    }
}`,solutionExplanation:"We access each record's previous values via Trigger.oldMap.get(opp.Id). Comparing the new StageName to the old one detects changes. All field assignments happen directly on Trigger.new records — no extra DML needed in a before trigger.",testCases:[{id:"tc1",description:"Uses Trigger.oldMap to get the old record",pattern:"Trigger\\.oldMap\\.get\\(",errorMessage:"Get the old Opportunity from Trigger.oldMap: Opportunity old = Trigger.oldMap.get(opp.Id);"},{id:"tc2",description:"Compares StageName old vs new",pattern:"StageName\\s*!=",errorMessage:"Compare opp.StageName to old.StageName to detect a stage change."},{id:"tc3",description:"Compares StageName old vs new",pattern:"StageName\\s*!=",errorMessage:"Compare opp.StageName to old.StageName to detect a stage change."},{id:"tc4",description:"Sets Previous_Stage__c to the old stage value",pattern:"Previous_Stage__c\\s*=\\s*old\\.StageName",errorMessage:"Set opp.Previous_Stage__c = old.StageName to record the previous stage."}]},{id:"challenge-apex-exceptions",lessonId:"apex-exception-handling",title:"Build a Safe Account Lookup Service",description:"Write an AccountLookupService class that gracefully handles missing records and reports errors instead of crashing.",difficulty:"beginner",instructions:["Create a public class AccountLookupService","Add a custom inner exception class: AccountNotFoundException extending Exception","Create a static method getAccountName(Id accountId) that returns a String","Inside the method, use a try/catch block to query Account by Id","If the query returns no results (QueryException), throw AccountNotFoundException with a descriptive message",'Add a finally block that logs "Lookup complete" with System.debug',"Return the account Name on success"],starterCode:`public class AccountLookupService {

    // TODO: Define custom exception class here
    // public class ??? extends Exception {}

    public static String getAccountName(Id accountId) {
        // TODO: Implement try/catch/finally
        // try: query Account WHERE Id = :accountId LIMIT 1, return acc.Name
        // catch: QueryException -> throw AccountNotFoundException
        // finally: System.debug('Lookup complete')
    }
}`,solution:`public class AccountLookupService {

    public class AccountNotFoundException extends Exception {}

    public static String getAccountName(Id accountId) {
        try {
            Account acc = [SELECT Id, Name FROM Account WHERE Id = :accountId LIMIT 1];
            return acc.Name;
        } catch (QueryException e) {
            throw new AccountNotFoundException('Account not found: ' + accountId + ' - ' + e.getMessage());
        } finally {
            System.debug('Lookup complete');
        }
    }
}`,hints:["Custom exceptions use: public class MyException extends Exception {}","Catch QueryException specifically before the generic Exception","The finally block runs even when you throw a new exception from catch","Use accountId in the AccountNotFoundException message to help debugging"],solutionExplanation:"The key insight is using specific exception types in the right order: catch QueryException for missing records, then throw a custom AccountNotFoundException so callers get a meaningful error. The finally block always executes, making it ideal for cleanup and logging.",testCases:[{id:"tc1",description:"Defines custom AccountNotFoundException",pattern:"AccountNotFoundException\\s+extends\\s+Exception",errorMessage:"Define a custom inner class: public class AccountNotFoundException extends Exception {}"},{id:"tc2",description:"Uses try block with SOQL query",pattern:"try\\s*\\{",errorMessage:"Wrap the SOQL query in a try block."},{id:"tc3",description:"Catches QueryException",pattern:"catch\\s*\\(\\s*QueryException",errorMessage:"Catch QueryException specifically to handle missing records."},{id:"tc4",description:"Throws AccountNotFoundException from catch",pattern:"throw\\s+new\\s+AccountNotFoundException",errorMessage:"Throw a new AccountNotFoundException from the catch block."},{id:"tc5",description:"Has finally block that logs Lookup complete",pattern:"finally\\s*\\{[\\s\\S]*?System\\.debug\\([^)]*[Ll]ookup",errorMessage:"Add a finally block with System.debug('Lookup complete') — it runs whether the query succeeds or fails."}]},{id:"challenge-apex-test-basics",lessonId:"apex-test-basics",title:"Write Tests for a Discount Calculator",description:"Write a complete test class for the DiscountCalculator class, covering happy path, edge cases, and verifying governor limit isolation.",difficulty:"intermediate",instructions:["Create a test class DiscountCalculatorTest annotated with @isTest","Write a test method testApplyDiscount_twentyPercent that verifies 20% discount on $100 = $80","Write a test method testApplyDiscount_noDiscount that verifies 0% discount returns the original price","Write a test method testApplyDiscount_fullDiscount that verifies 100% discount returns $0","Wrap the method-under-test call with Test.startTest() and Test.stopTest()","Use System.assertEquals(expected, actual, message) with correct argument order"],starterCode:`// The class you are testing (already exists in the org):
// public class DiscountCalculator {
//     public static Decimal applyDiscount(Decimal price, Decimal discountRate) {
//         return price * (1 - discountRate);
//     }
// }

@isTest
private class DiscountCalculatorTest {

    @isTest
    static void testApplyDiscount_twentyPercent() {
        // TODO: Test that applyDiscount(100, 0.20) == 80.00
        // Remember: Test.startTest() / Test.stopTest() around the call
        // Use System.assertEquals(expected, actual, message)
    }

    @isTest
    static void testApplyDiscount_noDiscount() {
        // TODO: Test that applyDiscount(50, 0) == 50.00
    }

    @isTest
    static void testApplyDiscount_fullDiscount() {
        // TODO: Test that applyDiscount(200, 1.0) == 0.00
    }
}`,solution:`@isTest
private class DiscountCalculatorTest {

    @isTest
    static void testApplyDiscount_twentyPercent() {
        Test.startTest();
        Decimal result = DiscountCalculator.applyDiscount(100, 0.20);
        Test.stopTest();
        System.assertEquals(80.00, result, '20% discount on $100 should be $80');
    }

    @isTest
    static void testApplyDiscount_noDiscount() {
        Test.startTest();
        Decimal result = DiscountCalculator.applyDiscount(50, 0);
        Test.stopTest();
        System.assertEquals(50.00, result, '0% discount should return the original price');
    }

    @isTest
    static void testApplyDiscount_fullDiscount() {
        Test.startTest();
        Decimal result = DiscountCalculator.applyDiscount(200, 1.0);
        Test.stopTest();
        System.assertEquals(0.00, result, '100% discount should return $0');
    }
}`,hints:["Annotate the class with @isTest and make it private","Each test method must also be annotated with @isTest and be static void","System.assertEquals(expected, actual) — expected value comes first","Wrap the DiscountCalculator.applyDiscount() call between Test.startTest() and Test.stopTest()"],solutionExplanation:"Well-structured tests follow Arrange-Act-Assert. Test.startTest() and Test.stopTest() isolate the code under test with fresh governor limits. System.assertEquals(expected, actual, message) with expected first ensures failure messages are human-readable.",testCases:[{id:"tc1",description:"Class is annotated with @isTest",pattern:"@isTest\\s+private\\s+class",errorMessage:"Annotate the class with @isTest: @isTest private class DiscountCalculatorTest {}"},{id:"tc2",description:"Uses Test.startTest()",pattern:"Test\\.startTest\\(\\)",errorMessage:"Call Test.startTest() before the code under test to give it fresh governor limits."},{id:"tc3",description:"Uses Test.stopTest()",pattern:"Test\\.stopTest\\(\\)",errorMessage:"Call Test.stopTest() after the code under test."},{id:"tc4",description:"Uses System.assertEquals",pattern:"System\\.assertEquals\\(",errorMessage:"Use System.assertEquals(expected, actual, message) to assert the results."},{id:"tc5",description:"Has at least two test methods",pattern:"@isTest[\\s\\S]*?static\\s+void\\s+test[A-Za-z]+[\\s\\S]*?@isTest[\\s\\S]*?static\\s+void\\s+test[A-Za-z]+",errorMessage:"Write at least two @isTest static void test methods."}]},{id:"challenge-apex-test-data",lessonId:"apex-test-data",title:"Build a Test Data Factory",description:"Create a reusable TestDataFactory class and use @testSetup to write an efficient test class for an AccountService.",difficulty:"intermediate",instructions:["Create a @isTest public class named TestDataFactory","Add a static method createAccount(String name) that inserts and returns an Account","Add a static method createContacts(Id accountId, Integer count) that inserts and returns a List<Contact>","Create a separate @isTest private class AccountServiceTest","Add a @testSetup method that uses TestDataFactory to create 1 Account and 3 Contacts","Write a test method that re-queries and asserts the contacts count equals 3"],starterCode:`@isTest
public class TestDataFactory {

    // TODO: static method createAccount(String name)
    // - New Account with the given name
    // - Insert it
    // - Return it

    // TODO: static method createContacts(Id accountId, Integer count)
    // - Use a loop to build a List<Contact>
    // - Set AccountId and a unique LastName for each
    // - Insert the list
    // - Return the list
}

@isTest
private class AccountServiceTest {

    @testSetup
    static void setupData() {
        // TODO: Use TestDataFactory to create 1 Account and 3 Contacts
    }

    @isTest
    static void testContactCount() {
        // TODO: Re-query contacts, assert count is 3
    }
}`,solution:`@isTest
public class TestDataFactory {

    public static Account createAccount(String name) {
        Account acc = new Account(Name = name);
        insert acc;
        return acc;
    }

    public static List<Contact> createContacts(Id accountId, Integer count) {
        List<Contact> contacts = new List<Contact>();
        for (Integer i = 0; i < count; i++) {
            contacts.add(new Contact(
                LastName = 'TestContact' + i,
                AccountId = accountId
            ));
        }
        insert contacts;
        return contacts;
    }
}

@isTest
private class AccountServiceTest {

    @testSetup
    static void setupData() {
        Account acc = TestDataFactory.createAccount('Factory Test Corp');
        TestDataFactory.createContacts(acc.Id, 3);
    }

    @isTest
    static void testContactCount() {
        List<Contact> contacts = [SELECT Id FROM Contact];
        System.assertEquals(3, contacts.size(), 'Should have 3 test contacts');
    }
}`,hints:["TestDataFactory must be annotated with @isTest to access test data creation","In createContacts, use a loop from 0 to count-1 and append i to LastName for uniqueness","In @testSetup, call TestDataFactory.createAccount() first to get an Id for contacts","In testContactCount, re-query [SELECT Id FROM Contact] — do not reuse the list from @testSetup"],solutionExplanation:"The @testSetup method runs once and inserts data into the test database. Each test method re-queries to get a fresh snapshot. The TestDataFactory pattern centralizes record creation so all test classes use consistent data.",testCases:[{id:"tc1",description:"TestDataFactory class is annotated with @isTest",pattern:"@isTest[\\s\\S]*?public\\s+class\\s+TestDataFactory",errorMessage:"Annotate TestDataFactory with @isTest."},{id:"tc2",description:"Has createAccount method that inserts and returns Account",pattern:"static\\s+Account\\s+createAccount",errorMessage:"Add a static Account createAccount(String name) method."},{id:"tc3",description:"Has createContacts method",pattern:"static\\s+List<Contact>\\s+createContacts",errorMessage:"Add a static List<Contact> createContacts(Id accountId, Integer count) method."},{id:"tc4",description:"Uses @testSetup",pattern:"@testSetup",errorMessage:"Add a @testSetup method to create shared test data once per class."},{id:"tc5",description:"Asserts contact count with assertEquals",pattern:"System\\.assertEquals\\(3",errorMessage:"Assert that the contact count equals 3 using System.assertEquals(3, contacts.size(), message)."}]},{id:"challenge-apex-governor-limits",lessonId:"apex-governor-limits",title:"Fix the Bulkification Bug",description:"Refactor a trigger that has SOQL-in-a-loop and DML-in-a-loop anti-patterns to be governor-limit safe.",difficulty:"intermediate",instructions:["Start with the given LeadTrigger that has SOQL and DML inside loops","Extract all Lead AccountId equivalents (Company field) into a Set<String>","Issue ONE SOQL query outside the loop to find matching Accounts","Build a Map<String, Account> keyed by Account Name for fast lookup","Collect new Tasks into a List<Task> inside the loop — no insert inside the loop","Insert the list once AFTER the loop"],starterCode:`// BAD version with SOQL and DML in loops — refactor this:
trigger LeadTrigger on Lead (after insert) {
    for (Lead lead : Trigger.new) {
        // BAD: SOQL in loop
        List<Account> matches = [
            SELECT Id, Name FROM Account WHERE Name = :lead.Company LIMIT 1
        ];

        if (!matches.isEmpty()) {
            Task t = new Task(
                Subject = 'Follow up with ' + lead.Name,
                WhatId = matches[0].Id
            );
            // BAD: DML in loop
            insert t;
        }
    }
}

// TODO: Rewrite this trigger to:
// 1. Collect company names from Trigger.new
// 2. ONE SOQL query: SELECT Id, Name FROM Account WHERE Name IN :companyNames
// 3. Build Map<String, Account> accountsByName
// 4. Loop through Trigger.new, build List<Task> (no insert inside loop)
// 5. ONE insert statement outside the loop`,solution:`trigger LeadTrigger on Lead (after insert) {
    // Step 1: Collect all company names
    Set<String> companyNames = new Set<String>();
    for (Lead lead : Trigger.new) {
        if (lead.Company != null) {
            companyNames.add(lead.Company);
        }
    }

    // Step 2: ONE SOQL query
    Map<String, Account> accountsByName = new Map<String, Account>();
    for (Account acc : [SELECT Id, Name FROM Account WHERE Name IN :companyNames]) {
        accountsByName.put(acc.Name, acc);
    }

    // Step 3: Build task list — no DML inside the loop
    List<Task> newTasks = new List<Task>();
    for (Lead lead : Trigger.new) {
        Account matchingAcc = accountsByName.get(lead.Company);
        if (matchingAcc != null) {
            newTasks.add(new Task(
                Subject = 'Follow up with ' + lead.Name,
                WhatId = matchingAcc.Id
            ));
        }
    }

    // Step 4: ONE DML statement
    if (!newTasks.isEmpty()) {
        insert newTasks;
    }
}`,hints:["Collect company names into a Set<String> using a first loop over Trigger.new","Use WHERE Name IN :companyNames for the bulk query","Map<String, Account> lets you look up an account by company name in O(1)","Build a List<Task> in the loop, then insert after the loop"],solutionExplanation:"The bulkification pattern: collect IDs into a Set, run one SOQL query with WHERE Id IN :set, build a Map for O(1) lookups, collect DML records in a List, and insert once after the loop. This turns N queries and N DML statements into 1 each.",testCases:[{id:"tc1",description:"Collects company names into a Set",pattern:"Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>",errorMessage:"Create a Set<String> to collect company names from Trigger.new before the SOQL query."},{id:"tc2",description:"Uses WHERE Name IN :set for bulk query",pattern:"WHERE\\s+Name\\s+IN\\s*:",errorMessage:"Use WHERE Name IN :companyNames to query all matching accounts in one SOQL call."},{id:"tc3",description:"Builds a Map for account lookup",pattern:"Map<String,\\s*Account>",errorMessage:"Build a Map<String, Account> keyed by account name for fast lookup inside the loop."},{id:"tc4",description:"Builds task list before inserting",pattern:"List<Task>\\s+\\w+\\s*=\\s*new\\s+List<Task>",errorMessage:"Create a List<Task> to collect tasks, then insert once after the loop."},{id:"tc5",description:"Single insert outside the loop",pattern:"if\\s*\\(!\\w+\\.isEmpty\\(\\)\\)\\s*\\{?\\s*insert",errorMessage:"Insert the task list once after the loop, guarded by !isEmpty() to avoid empty DML."}]},{id:"challenge-apex-future-queueable",lessonId:"apex-future-queueable",title:"Build a Queueable CRM Sync Job",description:"Implement a Queueable class that accepts a list of Contact IDs and simulates syncing them to an external CRM via HTTP callout.",difficulty:"intermediate",instructions:["Create a public class ContactSyncJob that implements Queueable and Database.AllowsCallouts","Add a private List<Id> field contactIds and a constructor that accepts it","Implement the execute(QueueableContext ctx) method","Inside execute, query the contacts by ID",'For each contact, build an HttpRequest POST to endpoint "callout:CRM_API/sync"',"Send each request and log the status code with System.debug"],starterCode:`public class ContactSyncJob implements Queueable, Database.AllowsCallouts {

    // TODO: private List<Id> contactIds field

    // TODO: Constructor that accepts List<Id>
    public ContactSyncJob(List<Id> contactIds) {
        // assign the field
    }

    // TODO: execute method
    public void execute(QueueableContext ctx) {
        // 1. Query contacts by contactIds
        // 2. For each contact, build an HttpRequest POST to 'callout:CRM_API/sync'
        //    with JSON body: JSON.serialize(c)
        // 3. Send and log the status code
    }
}`,solution:`public class ContactSyncJob implements Queueable, Database.AllowsCallouts {

    private List<Id> contactIds;

    public ContactSyncJob(List<Id> contactIds) {
        this.contactIds = contactIds;
    }

    public void execute(QueueableContext ctx) {
        List<Contact> contacts = [
            SELECT Id, FirstName, LastName, Email
            FROM Contact WHERE Id IN :contactIds
        ];

        for (Contact c : contacts) {
            HttpRequest req = new HttpRequest();
            req.setEndpoint('callout:CRM_API/sync');
            req.setMethod('POST');
            req.setBody(JSON.serialize(c));

            HttpResponse res = new Http().send(req);
            System.debug('CRM sync status: ' + res.getStatusCode());
        }
    }
}`,hints:["Implement both Queueable and Database.AllowsCallouts to allow callouts in async context","Store contactIds as a private instance field — assign it in the constructor","Use WHERE Id IN :contactIds for the bulk query","JSON.serialize(c) converts a Contact record to a JSON string for the HTTP body"],solutionExplanation:"Queueable classes implement Queueable and Database.AllowsCallouts. The execute() method re-queries using the stored IDs (never pass sObjects to async context) and processes each contact. System.enqueueJob() would chain a next job.",testCases:[{id:"tc1",description:"Implements Queueable and Database.AllowsCallouts",pattern:"implements\\s+Queueable.*Database\\.AllowsCallouts|implements\\s+Database\\.AllowsCallouts.*Queueable",errorMessage:"Implement both Queueable and Database.AllowsCallouts to enable callouts in async context."},{id:"tc2",description:"Has a List<Id> field for contactIds",pattern:"List<Id>\\s+contactIds",errorMessage:"Declare a private List<Id> contactIds field."},{id:"tc3",description:"Has execute(QueueableContext ctx) method",pattern:"void\\s+execute\\s*\\(\\s*QueueableContext",errorMessage:"Implement the execute(QueueableContext ctx) method."},{id:"tc4",description:"Queries contacts inside execute",pattern:"SELECT[\\s\\S]*?FROM\\s+Contact\\s+WHERE\\s+Id\\s+IN",errorMessage:"Query contacts using WHERE Id IN :contactIds inside execute()."},{id:"tc5",description:"Makes HTTP callout",pattern:"new\\s+Http\\(\\)\\.send|Http\\s+http.*http\\.send",errorMessage:"Make an HTTP callout using new Http().send(req) for each contact."}]},{id:"challenge-apex-batch",lessonId:"apex-batch-apex",title:"Write a Batch Job to Archive Old Cases",description:"Build a batch class that finds Cases closed more than 365 days ago and sets their IsArchived__c field to true.",difficulty:"intermediate",instructions:["Create a public class ArchiveCasesBatch that implements Database.Batchable<SObject>",'Implement start() — return a QueryLocator for Cases where Status = "Closed" and ClosedDate <= 365 days ago',"Implement execute() — set IsArchived__c = true on each Case in scope, then update scope (not in a loop)",'Implement finish() — log "Archive batch complete" with System.debug'],starterCode:`public class ArchiveCasesBatch implements Database.Batchable<SObject> {

    // TODO: start() method
    // Query: Cases WHERE Status = 'Closed' AND ClosedDate <= LAST_N_DAYS:365
    public Database.QueryLocator start(Database.BatchableContext ctx) {
        // return Database.getQueryLocator('...')
    }

    // TODO: execute() method
    // Set IsArchived__c = true on each Case
    // ONE update call after the loop
    public void execute(Database.BatchableContext ctx, List<Case> scope) {

    }

    // TODO: finish() method
    // Log 'Archive batch complete'
    public void finish(Database.BatchableContext ctx) {

    }
}`,solution:`public class ArchiveCasesBatch implements Database.Batchable<SObject> {

    public Database.QueryLocator start(Database.BatchableContext ctx) {
        return Database.getQueryLocator(
            'SELECT Id, IsArchived__c FROM Case WHERE Status = 'Closed' AND ClosedDate <= LAST_N_DAYS:365'
        );
    }

    public void execute(Database.BatchableContext ctx, List<Case> scope) {
        for (Case c : scope) {
            c.IsArchived__c = true;
        }
        update scope;
    }

    public void finish(Database.BatchableContext ctx) {
        System.debug('Archive batch complete');
    }
}`,hints:["Use Database.getQueryLocator() in start() — not a list query","LAST_N_DAYS:365 is a SOQL date literal for the last 365 days","In execute(), modify all records in the loop first, then call update scope once after","finish() receives a BatchableContext but you can ignore it if you just want to log"],solutionExplanation:"Database.getQueryLocator() in start() enables processing of millions of records. execute() receives scope (a chunk) with fresh limits — modify all records in the loop then update scope once. finish() runs after all chunks complete.",testCases:[{id:"tc1",description:"Implements Database.Batchable<SObject>",pattern:"implements\\s+Database\\.Batchable<SObject>",errorMessage:"The class must implement Database.Batchable<SObject>."},{id:"tc2",description:"start() uses Database.getQueryLocator",pattern:"Database\\.getQueryLocator",errorMessage:"Use Database.getQueryLocator() in start() to return a query cursor."},{id:"tc3",description:"Queries for Closed cases",pattern:"Status\\s*=\\s*'Closed'",errorMessage:"Filter cases with Status = 'Closed' in your SOQL query."},{id:"tc4",description:"execute() updates scope outside the loop",pattern:"update\\s+scope",errorMessage:"Call update scope once after the for loop in execute() — not inside the loop."},{id:"tc5",description:"finish() logs completion",pattern:"System\\.debug.*[Aa]rchive.*[Cc]omplete|System\\.debug.*[Cc]omplete.*[Aa]rchive",errorMessage:"In finish(), use System.debug to log that the archive batch is complete."}]},{id:"challenge-apex-sharing",lessonId:"apex-sharing-security",title:"Secure a Contact Read Service",description:"Write a ContactReadService class that enforces both record-level sharing and field-level security using with sharing and Security.stripInaccessible().",difficulty:"intermediate",instructions:["Create a public with sharing class ContactReadService","Add a static method getContacts() that returns List<Contact>","Inside the method, query Id, FirstName, LastName, and SSN__c from Contact","Apply Security.stripInaccessible(AccessType.READABLE, contacts) to enforce FLS","Return the filtered records from decision.getRecords()"],starterCode:`// TODO: Declare the class with correct sharing keyword
public class ContactReadService {

    public static List<Contact> getContacts() {
        // Step 1: Query contacts including sensitive field SSN__c
        List<Contact> contacts = [SELECT Id, FirstName, LastName, SSN__c FROM Contact LIMIT 100];

        // Step 2: Strip inaccessible fields using Security.stripInaccessible()
        // SObjectAccessDecision decision = Security.stripInaccessible(AccessType.READABLE, contacts);

        // Step 3: Return decision.getRecords() cast to List<Contact>
        return contacts; // Replace this with the sanitized list
    }
}`,solution:`public with sharing class ContactReadService {

    public static List<Contact> getContacts() {
        List<Contact> contacts = [SELECT Id, FirstName, LastName, SSN__c FROM Contact LIMIT 100];

        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.READABLE,
            contacts
        );

        return (List<Contact>) decision.getRecords();
    }
}`,hints:['Add "with sharing" between "public" and "class" in the class declaration',"Security.stripInaccessible() takes two arguments: AccessType.READABLE and your record list","The result is an SObjectAccessDecision — call .getRecords() to get the sanitized list","Cast the result: (List<Contact>) decision.getRecords()"],solutionExplanation:"with sharing enforces record-level security. Security.stripInaccessible(AccessType.READABLE, records) returns an SObjectAccessDecision — calling getRecords() gives you the same records but with any fields the user lacks FLS read access to removed.",testCases:[{id:"tc1",description:"Class uses with sharing",pattern:"public\\s+with\\s+sharing\\s+class",errorMessage:'Declare the class with "public with sharing class ContactReadService".'},{id:"tc2",description:"Queries Contact with sensitive fields",pattern:"SELECT.*SSN__c.*FROM\\s+Contact|SELECT.*FROM\\s+Contact.*SSN__c",errorMessage:"Query contacts including the SSN__c field to demonstrate FLS stripping."},{id:"tc3",description:"Uses Security.stripInaccessible",pattern:"Security\\.stripInaccessible",errorMessage:"Use Security.stripInaccessible(AccessType.READABLE, contacts) to enforce FLS."},{id:"tc4",description:"Uses AccessType.READABLE",pattern:"AccessType\\.READABLE",errorMessage:"Pass AccessType.READABLE as the first argument to Security.stripInaccessible()."},{id:"tc5",description:"Returns decision.getRecords()",pattern:"\\.getRecords\\(\\)",errorMessage:"Return decision.getRecords() cast to List<Contact> as the sanitized result."}]},{id:"challenge-soql-dynamic",lessonId:"soql-dynamic-sosl",title:"Build a Safe Dynamic Account Search",description:"Write a dynamic SOQL method that filters Accounts by optional Industry and Rating parameters, safely escaping user input.",difficulty:"intermediate",instructions:["Create a public class AccountSearchService","Add a static method search(String industry, String rating) that returns List<Account>","Start with a base SOQL string selecting Id, Name, Industry, Rating from Account","If industry is not blank, escape it and append an AND Industry filter","If rating is not blank, escape it and append an AND Rating filter","Execute with Database.query() and return the result"],starterCode:`public class AccountSearchService {

    public static List<Account> search(String industry, String rating) {
        // Base query — always valid even with no filters
        String soql = 'SELECT Id, Name, Industry, Rating FROM Account WHERE Id != null';

        // TODO: If industry is not blank:
        //   escape it with String.escapeSingleQuotes()
        //   append: AND Industry = '...'

        // TODO: If rating is not blank:
        //   escape it
        //   append: AND Rating = '...'

        soql += ' ORDER BY Name LIMIT 100';

        // TODO: Execute with Database.query() and return result
        return new List<Account>();
    }
}`,solution:`public class AccountSearchService {

    public static List<Account> search(String industry, String rating) {
        String soql = 'SELECT Id, Name, Industry, Rating FROM Account WHERE Id != null';

        if (String.isNotBlank(industry)) {
            soql += ' AND Industry = '' + String.escapeSingleQuotes(industry) + ''';
        }
        if (String.isNotBlank(rating)) {
            soql += ' AND Rating = '' + String.escapeSingleQuotes(rating) + ''';
        }

        soql += ' ORDER BY Name LIMIT 100';

        return Database.query(soql);
    }
}`,hints:["Use String.isNotBlank(industry) to check if the filter was provided","Always call String.escapeSingleQuotes() before embedding user input in SOQL","Wrap the escaped value in single quotes: ' + String.escapeSingleQuotes(industry) + '","Database.query(soql) returns List<SObject> — it can be directly assigned to List<Account>"],solutionExplanation:"The base query starts with a valid WHERE clause. String.isNotBlank() checks if filters were provided. String.escapeSingleQuotes() prevents SOQL injection. Database.query(soql) executes the string at runtime.",testCases:[{id:"tc1",description:"Starts with a valid base SOQL string",pattern:"SELECT.*FROM\\s+Account\\s+WHERE",errorMessage:"Start with a base SOQL string with a WHERE clause so it is always valid."},{id:"tc2",description:"Uses String.isNotBlank for conditional filters",pattern:"String\\.isNotBlank",errorMessage:"Use String.isNotBlank() to check if each filter parameter was provided."},{id:"tc3",description:"Escapes user input with String.escapeSingleQuotes",pattern:"String\\.escapeSingleQuotes",errorMessage:"Use String.escapeSingleQuotes() on user-supplied values to prevent SOQL injection."},{id:"tc4",description:"Executes with Database.query()",pattern:"Database\\.query\\(",errorMessage:"Execute the dynamic SOQL string using Database.query(soql)."}]},{id:"challenge-platform-events",lessonId:"platform-events-intro",title:"Publish a Payment Received Event",description:"Write an Apex class that publishes a Payment_Received__e Platform Event when an Order is marked as paid.",difficulty:"advanced",instructions:["Create a public class PaymentService","Add a static method markOrderPaid(Id orderId, Decimal amount) returning void","Inside the method, build a Payment_Received__e event with Order_Id__c = orderId and Amount__c = amount","Publish the event using EventBus.publish()","Check the SaveResult and log success or error message with System.debug"],starterCode:`public class PaymentService {

    public static void markOrderPaid(Id orderId, Decimal amount) {
        // TODO: Create a Payment_Received__e event
        // Fields: Order_Id__c (Id), Amount__c (Decimal)

        // TODO: Publish with EventBus.publish()
        // Capture the SaveResult

        // TODO: Log success or error
    }
}`,solution:`public class PaymentService {

    public static void markOrderPaid(Id orderId, Decimal amount) {
        Payment_Received__e event = new Payment_Received__e(
            Order_Id__c = orderId,
            Amount__c = amount
        );

        Database.SaveResult result = EventBus.publish(event);

        if (result.isSuccess()) {
            System.debug('Payment_Received__e published for order: ' + orderId);
        } else {
            System.debug('Publish failed: ' + result.getErrors()[0].getMessage());
        }
    }
}`,hints:["Platform Event objects end in __e (Payment_Received__e)","Use EventBus.publish(event) — not insert","EventBus.publish() returns a Database.SaveResult","Check result.isSuccess() to determine success or failure"],solutionExplanation:"Platform Events are published with EventBus.publish(), not insert. The event fields are set in the constructor. SaveResult.isSuccess() checks whether the publish succeeded and lets you log errors.",testCases:[{id:"tc1",description:"Creates a Platform Event instance",pattern:"new\\s+Payment_Received__e",errorMessage:"Create a new Payment_Received__e instance with the event fields."},{id:"tc2",description:"Sets Order_Id__c field",pattern:"Order_Id__c\\s*=\\s*orderId",errorMessage:"Set Order_Id__c = orderId on the event."},{id:"tc3",description:"Sets Amount__c field",pattern:"Amount__c\\s*=\\s*amount",errorMessage:"Set Amount__c = amount on the event."},{id:"tc4",description:"Publishes with EventBus.publish()",pattern:"EventBus\\.publish",errorMessage:"Use EventBus.publish(event) to publish the Platform Event — not insert."},{id:"tc5",description:"Checks SaveResult",pattern:"\\.isSuccess\\(\\)",errorMessage:"Check result.isSuccess() and log a message based on the outcome."}]},{id:"challenge-invocable-method",lessonId:"flows-invocable-methods",title:"Build an @InvocableMethod for Lead Scoring",description:"Create an Apex class with an @InvocableMethod that Flow can call to calculate a lead score and return the result.",difficulty:"intermediate",instructions:["Create a public class LeadScoringService","Create a public inner class LeadScoreInput with @InvocableVariable fields: leadId (Id) and industry (String)","Create a public inner class LeadScoreOutput with @InvocableVariable field: score (Integer)","Add an @InvocableMethod(label='Calculate Lead Score') static method that takes List<LeadScoreInput> and returns List<LeadScoreOutput>","Score logic: Technology = 90, Healthcare = 80, Finance = 85, default = 50"],starterCode:`public class LeadScoringService {

    // TODO: Input wrapper class with @InvocableVariable fields
    // - leadId (Id)
    // - industry (String)
    public class LeadScoreInput {

    }

    // TODO: Output wrapper class with @InvocableVariable fields
    // - score (Integer)
    public class LeadScoreOutput {

    }

    // TODO: @InvocableMethod(label='Calculate Lead Score')
    // Takes List<LeadScoreInput>, returns List<LeadScoreOutput>
    // Score: Technology=90, Healthcare=80, Finance=85, default=50
    public static List<LeadScoreOutput> calculateScore(List<LeadScoreInput> inputs) {
        List<LeadScoreOutput> outputs = new List<LeadScoreOutput>();
        // TODO: Loop inputs, calculate score, add to outputs
        return outputs;
    }
}`,solution:`public class LeadScoringService {

    public class LeadScoreInput {
        @InvocableVariable(label='Lead Id' required=true)
        public Id leadId;

        @InvocableVariable(label='Industry')
        public String industry;
    }

    public class LeadScoreOutput {
        @InvocableVariable(label='Score')
        public Integer score;
    }

    @InvocableMethod(label='Calculate Lead Score')
    public static List<LeadScoreOutput> calculateScore(List<LeadScoreInput> inputs) {
        List<LeadScoreOutput> outputs = new List<LeadScoreOutput>();

        for (LeadScoreInput input : inputs) {
            LeadScoreOutput output = new LeadScoreOutput();

            if (input.industry == 'Technology') {
                output.score = 90;
            } else if (input.industry == 'Healthcare') {
                output.score = 80;
            } else if (input.industry == 'Finance') {
                output.score = 85;
            } else {
                output.score = 50;
            }

            outputs.add(output);
        }

        return outputs;
    }
}`,hints:["Each field in the wrapper classes needs @InvocableVariable(label='...') annotation","The method parameter must be List<LeadScoreInput> — not a single input","Create a new LeadScoreOutput for each input and add it to the outputs list","Return the outputs list — it must be the same size as inputs"],solutionExplanation:"@InvocableVariable on each field makes it visible in Flow Builder. The method must accept List<Input> because Flows batch records. The score is calculated per-input inside a loop, with a LeadScoreOutput for each input.",testCases:[{id:"tc1",description:"Has @InvocableMethod annotation",pattern:"@InvocableMethod",errorMessage:"Add @InvocableMethod(label='Calculate Lead Score') to the calculateScore method."},{id:"tc2",description:"Input class has @InvocableVariable fields",pattern:"@InvocableVariable[\\s\\S]*?public\\s+Id\\s+leadId",errorMessage:"Add @InvocableVariable annotation to the leadId field in LeadScoreInput."},{id:"tc3",description:"Method takes List<LeadScoreInput>",pattern:"List<LeadScoreInput>",errorMessage:"The method must accept List<LeadScoreInput> as its parameter."},{id:"tc4",description:"Returns List<LeadScoreOutput>",pattern:"List<LeadScoreOutput>",errorMessage:"The method must return List<LeadScoreOutput>."},{id:"tc5",description:"Scores Technology industry at 90",pattern:"industry.*==.*'Technology'[\\s\\S]*?score\\s*=\\s*90|score\\s*=\\s*90[\\s\\S]*?Technology",errorMessage:"Set score = 90 when industry is 'Technology'."}]},{id:"challenge-trigger-handler-pattern",lessonId:"apex-trigger-handler-pattern",title:"Refactor to the Handler Pattern",description:"Refactor a trigger that has logic in the body into the proper thin-trigger + handler class pattern.",difficulty:"intermediate",instructions:["Create a LeadTriggerHandler class","Move the beforeInsert logic (setting default LeadSource) into a beforeInsert(List<Lead>) method on the handler","Move the afterInsert logic (creating Task) into an afterInsert(List<Lead>, Map<Id,Lead>) method","Rewrite the LeadTrigger to only route to handler methods"],starterCode:`// CURRENT (bad) trigger — logic in the body
// Refactor this to use a handler class

trigger LeadTrigger on Lead (before insert, after insert) {
    // before insert logic — set default LeadSource
    if (Trigger.isBefore && Trigger.isInsert) {
        for (Lead l : Trigger.new) {
            if (l.LeadSource == null) {
                l.LeadSource = 'Web';
            }
        }
    }

    // after insert logic — create follow-up Task
    if (Trigger.isAfter && Trigger.isInsert) {
        List<Task> tasks = new List<Task>();
        for (Lead l : Trigger.new) {
            tasks.add(new Task(Subject = 'Follow up', WhoId = l.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }
}

// TODO: Create LeadTriggerHandler class with:
// - beforeInsert(List<Lead> newLeads) method
// - afterInsert(List<Lead> newLeads, Map<Id,Lead> newMap) method
// Then rewrite LeadTrigger to use it`,solution:`public with sharing class LeadTriggerHandler {

    public void beforeInsert(List<Lead> newLeads) {
        for (Lead l : newLeads) {
            if (l.LeadSource == null) {
                l.LeadSource = 'Web';
            }
        }
    }

    public void afterInsert(List<Lead> newLeads, Map<Id, Lead> newMap) {
        List<Task> tasks = new List<Task>();
        for (Lead l : newLeads) {
            tasks.add(new Task(Subject = 'Follow up', WhoId = l.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }
}

trigger LeadTrigger on Lead (before insert, after insert) {
    LeadTriggerHandler handler = new LeadTriggerHandler();
    if (Trigger.isBefore && Trigger.isInsert) handler.beforeInsert(Trigger.new);
    if (Trigger.isAfter && Trigger.isInsert) handler.afterInsert(Trigger.new, Trigger.newMap);
}`,hints:["Create a LeadTriggerHandler class with two public methods: beforeInsert and afterInsert","beforeInsert takes List<Lead> — the method sets LeadSource = 'Web' if null","afterInsert takes List<Lead> and Map<Id, Lead> — creates Tasks","The trigger body should only instantiate the handler and call the right method"],solutionExplanation:"The thin trigger only routes — instantiating the handler and calling the right method based on Trigger context. All logic lives in the handler, making it directly testable without DML. This is the standard professional Salesforce pattern.",testCases:[{id:"tc1",description:"Handler class is defined",pattern:"class\\s+LeadTriggerHandler",errorMessage:"Create a class named LeadTriggerHandler."},{id:"tc2",description:"Handler has beforeInsert method",pattern:"void\\s+beforeInsert\\s*\\(\\s*List<Lead>",errorMessage:"Add a beforeInsert(List<Lead> newLeads) method to the handler."},{id:"tc3",description:"Handler has afterInsert method",pattern:"void\\s+afterInsert\\s*\\(\\s*List<Lead>",errorMessage:"Add an afterInsert(List<Lead> newLeads, Map<Id, Lead> newMap) method."},{id:"tc4",description:"Trigger instantiates handler",pattern:"new\\s+LeadTriggerHandler",errorMessage:"The trigger should instantiate LeadTriggerHandler and delegate to it."},{id:"tc5",description:"Trigger calls handler.beforeInsert",pattern:"handler\\.beforeInsert\\(",errorMessage:"The trigger should call handler.beforeInsert() for the before insert event."}]},{id:"challenge-service-selector",lessonId:"apex-service-selector",title:"Build an OpportunitySelector",description:"Create an OpportunitySelector class that centralizes SOQL queries for the Opportunity object.",difficulty:"advanced",instructions:["Create a public with sharing class OpportunitySelector","Add a method selectById(Set<Id> oppIds) that queries Id, Name, StageName, Amount, AccountId","Add a method selectClosedWon() that queries the same fields where StageName = 'Closed Won'","Add a method selectByAccountId(Id accountId) that queries opps for a specific Account"],starterCode:`public with sharing class OpportunitySelector {

    // TODO: selectById(Set<Id> oppIds) - returns List<Opportunity>
    // Query: SELECT Id, Name, StageName, Amount, AccountId FROM Opportunity WHERE Id IN :oppIds

    // TODO: selectClosedWon() - returns List<Opportunity>
    // Query: WHERE StageName = 'Closed Won'

    // TODO: selectByAccountId(Id accountId) - returns List<Opportunity>
    // Query: WHERE AccountId = :accountId
}`,solution:`public with sharing class OpportunitySelector {

    public List<Opportunity> selectById(Set<Id> oppIds) {
        return [
            SELECT Id, Name, StageName, Amount, AccountId
            FROM Opportunity
            WHERE Id IN :oppIds
        ];
    }

    public List<Opportunity> selectClosedWon() {
        return [
            SELECT Id, Name, StageName, Amount, AccountId
            FROM Opportunity
            WHERE StageName = 'Closed Won'
        ];
    }

    public List<Opportunity> selectByAccountId(Id accountId) {
        return [
            SELECT Id, Name, StageName, Amount, AccountId
            FROM Opportunity
            WHERE AccountId = :accountId
        ];
    }
}`,hints:["Use with sharing so queries respect the running user's record access","All three methods should select: Id, Name, StageName, Amount, AccountId","selectById uses WHERE Id IN :oppIds (Set<Id> bind variable)","selectClosedWon uses WHERE StageName = 'Closed Won'"],solutionExplanation:"Each Selector method returns List<Opportunity> with consistent field selection. with sharing ensures queries respect the running user's access. Centralizing SOQL here means adding a field requires only one change.",testCases:[{id:"tc1",description:"Class uses with sharing",pattern:"public\\s+with\\s+sharing\\s+class\\s+OpportunitySelector",errorMessage:"Declare the class as: public with sharing class OpportunitySelector"},{id:"tc2",description:"Has selectById method",pattern:"List<Opportunity>\\s+selectById\\s*\\(\\s*Set<Id>",errorMessage:"Add: public List<Opportunity> selectById(Set<Id> oppIds) method."},{id:"tc3",description:"selectById uses WHERE Id IN",pattern:"WHERE\\s+Id\\s+IN\\s*:oppIds",errorMessage:"Use WHERE Id IN :oppIds in the selectById query."},{id:"tc4",description:"Has selectClosedWon method",pattern:"List<Opportunity>\\s+selectClosedWon",errorMessage:"Add a selectClosedWon() method that queries WHERE StageName = 'Closed Won'."},{id:"tc5",description:"Has selectByAccountId method",pattern:"List<Opportunity>\\s+selectByAccountId\\s*\\(\\s*Id",errorMessage:"Add a selectByAccountId(Id accountId) method."}]},{id:"challenge-deployment",lessonId:"salesforce-deployment",title:"Write a Deployment Checklist Script",description:'Write a simple Apex class that validates an org is "deployment ready" by checking test coverage and pending DML.',difficulty:"intermediate",instructions:["Create a public class DeploymentValidator","Add a static method validateCoverage(Integer coverage) that returns Boolean","Return true if coverage >= 75, false otherwise","Add a static method getDeploymentStatus(Integer coverage, Boolean testsPass) that returns a String",'Return "Ready" if coverage >= 75 AND testsPass is true, otherwise return "Not Ready: " with a reason'],starterCode:`public class DeploymentValidator {

    // Returns true if coverage meets the production threshold
    public static Boolean validateCoverage(Integer coverage) {
        // TODO: Return true if coverage >= 75
    }

    // Returns a deployment status string
    public static String getDeploymentStatus(Integer coverage, Boolean testsPass) {
        // TODO: If coverage >= 75 AND testsPass, return 'Ready'
        // If coverage < 75, return 'Not Ready: Insufficient coverage (' + coverage + '%)'
        // If testsPass == false, return 'Not Ready: Tests are failing'
    }
}`,solution:`public class DeploymentValidator {

    public static Boolean validateCoverage(Integer coverage) {
        return coverage >= 75;
    }

    public static String getDeploymentStatus(Integer coverage, Boolean testsPass) {
        if (coverage < 75) {
            return 'Not Ready: Insufficient coverage (' + coverage + '%)';
        }
        if (!testsPass) {
            return 'Not Ready: Tests are failing';
        }
        return 'Ready';
    }
}`,hints:["validateCoverage should return a simple Boolean comparison: coverage >= 75","In getDeploymentStatus, check coverage first — it is more specific than testsPass",'Return the exact strings: "Ready" and "Not Ready: ..." to match the test cases'],solutionExplanation:"validateCoverage is a simple >= comparison. getDeploymentStatus checks the most specific condition first (coverage) then testsPass, following the pattern of handling specific cases before general ones.",testCases:[{id:"tc1",description:"Has validateCoverage method",pattern:"Boolean\\s+validateCoverage\\s*\\(\\s*Integer",errorMessage:"Add: public static Boolean validateCoverage(Integer coverage)"},{id:"tc2",description:"Returns true for coverage >= 75",pattern:"coverage\\s*>=\\s*75",errorMessage:"Return true when coverage >= 75."},{id:"tc3",description:"Has getDeploymentStatus method",pattern:"String\\s+getDeploymentStatus\\s*\\(\\s*Integer",errorMessage:"Add: public static String getDeploymentStatus(Integer coverage, Boolean testsPass)"},{id:"tc4",description:'Returns "Ready" when qualified',pattern:"return\\s+'Ready'",errorMessage:"Return 'Ready' when both coverage >= 75 and testsPass is true."},{id:"tc5",description:"Returns Not Ready message",pattern:"return\\s+'Not Ready",errorMessage:"Return a 'Not Ready: ...' message when deployment conditions are not met."}]},{id:"challenge-data-model",lessonId:"salesforce-data-model",title:"Query a Job Board Data Model",description:"Write SOQL queries against a Job Board data model (Job_Opening__c and Application__c) using relationship queries.",difficulty:"beginner",instructions:["Write a class JobBoardService with a method getOpenJobs() that queries all Job_Opening__c with Status__c = 'Open'","Write a method getApplicationsForJob(Id jobOpeningId) that returns all Application__c for the given Job Opening","Write a method getCandidateApplications(Id contactId) that returns all Application__c for a given candidate","Use SOQL relationship queries — include at least Id, Status__c, and one related field in each query"],starterCode:`public with sharing class JobBoardService {

    // TODO: Get all open job openings
    // SELECT Id, Title__c, Department__c, Status__c FROM Job_Opening__c WHERE Status__c = 'Open'
    public static List<Job_Opening__c> getOpenJobs() {

    }

    // TODO: Get all applications for a specific job opening
    // SELECT Id, Status__c, Applied_Date__c, Candidate__c FROM Application__c WHERE Job_Opening__c = :jobOpeningId
    public static List<Application__c> getApplicationsForJob(Id jobOpeningId) {

    }

    // TODO: Get all applications for a candidate (contact)
    // SELECT Id, Status__c, Applied_Date__c, Job_Opening__r.Title__c FROM Application__c WHERE Candidate__c = :contactId
    public static List<Application__c> getCandidateApplications(Id contactId) {

    }
}`,solution:`public with sharing class JobBoardService {

    public static List<Job_Opening__c> getOpenJobs() {
        return [
            SELECT Id, Title__c, Department__c, Status__c
            FROM Job_Opening__c
            WHERE Status__c = 'Open'
        ];
    }

    public static List<Application__c> getApplicationsForJob(Id jobOpeningId) {
        return [
            SELECT Id, Status__c, Applied_Date__c, Candidate__c
            FROM Application__c
            WHERE Job_Opening__c = :jobOpeningId
        ];
    }

    public static List<Application__c> getCandidateApplications(Id contactId) {
        return [
            SELECT Id, Status__c, Applied_Date__c, Job_Opening__r.Title__c
            FROM Application__c
            WHERE Candidate__c = :contactId
        ];
    }
}`,hints:["Custom object API names end in __c (Job_Opening__c, Application__c)","Relationship queries use __r instead of __c: Job_Opening__r.Title__c","Filter by lookup field using WHERE Job_Opening__c = :jobOpeningId","Make the class with sharing to enforce record-level security"],solutionExplanation:"Custom objects end in __c in SOQL. Relationship traversal uses __r instead of __c to navigate to the parent. Filtering by lookup fields uses WHERE Job_Opening__c = :id. with sharing ensures records are filtered by user access.",testCases:[{id:"tc1",description:"Has getOpenJobs method querying Job_Opening__c",pattern:"FROM\\s+Job_Opening__c\\s+WHERE\\s+Status__c",errorMessage:"Add getOpenJobs() that queries Job_Opening__c WHERE Status__c = 'Open'."},{id:"tc2",description:"Has getApplicationsForJob method",pattern:"List<Application__c>\\s+getApplicationsForJob",errorMessage:"Add getApplicationsForJob(Id jobOpeningId) returning List<Application__c>."},{id:"tc3",description:"getApplicationsForJob filters by Job_Opening__c field",pattern:"WHERE\\s+Job_Opening__c\\s*=\\s*:jobOpeningId",errorMessage:"Filter Application__c by WHERE Job_Opening__c = :jobOpeningId."},{id:"tc4",description:"Has getCandidateApplications method",pattern:"List<Application__c>\\s+getCandidateApplications",errorMessage:"Add getCandidateApplications(Id contactId) returning List<Application__c>."},{id:"tc5",description:"Uses relationship query with __r",pattern:"Job_Opening__r\\.",errorMessage:"Use a relationship query in getCandidateApplications: Job_Opening__r.Title__c"}]},{id:"challenge-permissions",lessonId:"profiles-permissions-intro",title:"Write a Permission Check Service",description:"Write a PermissionCheckService class that uses Schema.sObjectType to verify CRUD permissions before performing DML operations.",difficulty:"intermediate",instructions:["Create a public with sharing class PermissionCheckService","Add a static method canInsertAccount() that returns Boolean","Use Schema.sObjectType.Account.isCreateable() to check create permission","Add a static method canReadContact() that returns Boolean using Schema.sObjectType.Contact.isAccessible()","Add a static method safeInsertAccount(Account acc) that checks canInsertAccount() first, then inserts or throws an exception"],starterCode:`public with sharing class PermissionCheckService {

    // Returns true if the running user can create Account records
    public static Boolean canInsertAccount() {
        // TODO: return Schema.sObjectType.Account.isCreateable()
    }

    // Returns true if the running user can read Contact records
    public static Boolean canReadContact() {
        // TODO: return Schema.sObjectType.Contact.isAccessible()
    }

    // Inserts the Account only if the user has create permission
    // Throws an exception if user lacks permission
    public static void safeInsertAccount(Account acc) {
        // TODO: if !canInsertAccount() throw new System.NoAccessException()
        // Otherwise insert acc
    }
}`,solution:`public with sharing class PermissionCheckService {

    public static Boolean canInsertAccount() {
        return Schema.sObjectType.Account.isCreateable();
    }

    public static Boolean canReadContact() {
        return Schema.sObjectType.Contact.isAccessible();
    }

    public static void safeInsertAccount(Account acc) {
        if (!canInsertAccount()) {
            throw new System.NoAccessException();
        }
        insert acc;
    }
}`,hints:["Schema.sObjectType.Account.isCreateable() returns true if user has Create CRUD on Account","Schema.sObjectType.Contact.isAccessible() returns true if user has Read CRUD on Contact","In safeInsertAccount, check the permission first with an if statement","Throw new System.NoAccessException() if the user lacks permission"],solutionExplanation:"Schema.sObjectType.Account.isCreateable() checks the running user's CRUD permissions programmatically. Calling this before DML is explicit CRUD/FLS enforcement. System.NoAccessException is the standard exception for permission failures.",testCases:[{id:"tc1",description:"Has canInsertAccount method",pattern:"Boolean\\s+canInsertAccount",errorMessage:"Add: public static Boolean canInsertAccount()"},{id:"tc2",description:"Uses Schema.sObjectType.Account.isCreateable()",pattern:"Schema\\.sObjectType\\.Account\\.isCreateable\\(\\)",errorMessage:"Use Schema.sObjectType.Account.isCreateable() to check create permission."},{id:"tc3",description:"Has canReadContact method using isAccessible",pattern:"Schema\\.sObjectType\\.Contact\\.isAccessible\\(\\)",errorMessage:"Use Schema.sObjectType.Contact.isAccessible() to check read permission."},{id:"tc4",description:"Has safeInsertAccount method",pattern:"void\\s+safeInsertAccount\\s*\\(\\s*Account",errorMessage:"Add: public static void safeInsertAccount(Account acc)"},{id:"tc5",description:"Throws NoAccessException on permission failure",pattern:"throw\\s+new\\s+System\\.NoAccessException",errorMessage:"Throw new System.NoAccessException() if the user lacks insert permission."}]},{id:"challenge-reports",lessonId:"reports-dashboards-intro",title:"Build a Report Summary Class",description:"Write a ReportSummaryService class that queries opportunity pipeline data and formats it like a Summary report output.",difficulty:"beginner",instructions:["Create a public with sharing class ReportSummaryService","Add a method getPipelineByStage() that returns Map<String, Decimal>","Query Opportunities closing this quarter, group by StageName","Return a Map where each key is a StageName and the value is the total Amount for that stage"],starterCode:`public with sharing class ReportSummaryService {

    // Returns a Map of StageName -> Total Amount for opps closing this quarter
    public static Map<String, Decimal> getPipelineByStage() {
        Map<String, Decimal> pipelineByStage = new Map<String, Decimal>();

        // TODO: Query Opportunities where CloseDate = THIS_QUARTER
        // Use an aggregate query: SELECT StageName, SUM(Amount) total FROM Opportunity
        //   WHERE CloseDate = THIS_QUARTER GROUP BY StageName
        // For each AggregateResult: add StageName -> total to the map

        return pipelineByStage;
    }
}`,solution:`public with sharing class ReportSummaryService {

    public static Map<String, Decimal> getPipelineByStage() {
        Map<String, Decimal> pipelineByStage = new Map<String, Decimal>();

        for (AggregateResult ar : [
            SELECT StageName, SUM(Amount) total
            FROM Opportunity
            WHERE CloseDate = THIS_QUARTER
            GROUP BY StageName
        ]) {
            String stage = (String) ar.get('StageName');
            Decimal total = (Decimal) ar.get('total');
            pipelineByStage.put(stage, total);
        }

        return pipelineByStage;
    }
}`,hints:["Use an aggregate SOQL query with GROUP BY StageName and SUM(Amount) total","Loop over AggregateResult records to build the map","Cast results: (String) ar.get('StageName') and (Decimal) ar.get('total')","THIS_QUARTER is a SOQL date literal for opportunities closing in the current quarter"],solutionExplanation:"Aggregate SOQL with GROUP BY produces one row per group. AggregateResult.get('fieldOrAlias') returns values that must be cast to the right type. THIS_QUARTER is a SOQL date literal that evaluates to the current fiscal quarter.",testCases:[{id:"tc1",description:"Returns Map<String, Decimal>",pattern:"Map<String,\\s*Decimal>\\s+getPipelineByStage",errorMessage:"The method signature must be: public static Map<String, Decimal> getPipelineByStage()"},{id:"tc2",description:"Uses GROUP BY StageName",pattern:"GROUP\\s+BY\\s+StageName",errorMessage:"Use GROUP BY StageName in your aggregate SOQL query."},{id:"tc3",description:"Uses SUM(Amount)",pattern:"SUM\\(Amount\\)",errorMessage:"Use SUM(Amount) in the aggregate query to total up opportunity amounts."},{id:"tc4",description:"Iterates over AggregateResult",pattern:"AggregateResult",errorMessage:"Loop over AggregateResult records to extract grouped data."},{id:"tc5",description:"Puts results in the map",pattern:"pipelineByStage\\.put",errorMessage:"Add each stage and its total to the pipelineByStage map using .put(stage, total)."}]},{id:"challenge-lwc-wire",lessonId:"lwc-wire-apex",title:"Expose and Wire an Apex Method",description:"Write an Apex class with a @AuraEnabled(cacheable=true) method and the LWC JavaScript to @wire it.",difficulty:"intermediate",instructions:["Create an Apex class ContactListService with a method getContactsByAccount(Id accountId)","Annotate the method with @AuraEnabled(cacheable=true) and query Contact Id, Name, Email","In a JavaScript file, import getContactsByAccount and use @wire to call it with accountId","Expose a getter hasContacts that returns true when contacts.data has records"],starterCode:`// ContactListService.cls
public with sharing class ContactListService {

    // TODO: Add @AuraEnabled(cacheable=true) annotation
    public static List<Contact> getContactsByAccount(Id accountId) {
        // TODO: Return SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId
    }
}

// contactList.js
import { LightningElement, api, wire } from 'lwc';
// TODO: Import getContactsByAccount from apex

export default class ContactList extends LightningElement {
    @api recordId;

    // TODO: @wire getContactsByAccount with accountId: '$recordId'
    // Property name: contacts

    // TODO: Getter hasContacts — returns true if contacts.data has records
}`,solution:`// ContactListService.cls
public with sharing class ContactListService {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByAccount(Id accountId) {
        return [
            SELECT Id, Name, Email
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }
}

// contactList.js
import { LightningElement, api, wire } from 'lwc';
import getContactsByAccount from '@salesforce/apex/ContactListService.getContactsByAccount';

export default class ContactList extends LightningElement {
    @api recordId;

    @wire(getContactsByAccount, { accountId: '$recordId' })
    contacts;

    get hasContacts() {
        return this.contacts.data && this.contacts.data.length > 0;
    }
}`,hints:["@AuraEnabled(cacheable=true) must be on the Apex method for @wire to work","Import path: @salesforce/apex/ClassName.methodName","@wire(methodName, { paramName: '$property' }) binds the wire adapter","The $ prefix on '$recordId' makes it reactive — re-fetches when recordId changes"],solutionExplanation:"@AuraEnabled(cacheable=true) is required for @wire to call the method. The import path is @salesforce/apex/ClassName.methodName. The $ prefix on $recordId makes the wire reactive — it re-calls when recordId changes.",testCases:[{id:"tc1",description:"Apex method has @AuraEnabled(cacheable=true)",pattern:"@AuraEnabled\\(cacheable\\s*=\\s*true\\)",errorMessage:"Add @AuraEnabled(cacheable=true) to the Apex method."},{id:"tc2",description:"Apex method queries Contact",pattern:"SELECT[\\s\\S]*?FROM\\s+Contact\\s+WHERE\\s+AccountId",errorMessage:"Query Contact records filtering by AccountId = :accountId."},{id:"tc3",description:"LWC imports the Apex method",pattern:"import.*getContactsByAccount.*from\\s+'@salesforce/apex/ContactListService",errorMessage:"Import getContactsByAccount from '@salesforce/apex/ContactListService.getContactsByAccount'"},{id:"tc4",description:"Uses @wire with reactive accountId",pattern:"@wire\\s*\\(\\s*getContactsByAccount.*\\$recordId",errorMessage:"Use @wire(getContactsByAccount, { accountId: '$recordId' }) contacts;"},{id:"tc5",description:"Has hasContacts getter",pattern:"get\\s+hasContacts",errorMessage:"Add a getter hasContacts that returns true when contacts.data has records."}]}],wg=e=>Sg.find(t=>t.id===e);function Ab(){const{progress:e,getLevel:t,resetProgress:n}=so(),{level:r,title:s,next:a}=t(),o=e.completedLessons.length,c=e.completedChallenges.length,l=Gt.length,u=Sg.length,p=Gt.find(w=>!e.completedLessons.includes(w.id)),h=Gt.filter(w=>e.completedLessons.includes(w.id)).slice(-3).reverse(),g=a===1/0?e.xp:a,x=a===1/0?100:Math.round(e.xp/g*100),C=[{id:"apex-basics",label:"Apex Basics",path:"/apex",color:"blue",colorClass:"bg-sf-blue",icon:i.jsx(dt,{className:"w-4 h-4"})},{id:"soql",label:"SOQL",path:"/soql",color:"green",colorClass:"bg-sf-teal",icon:i.jsx(mr,{className:"w-4 h-4"})},{id:"dml",label:"DML",path:"/apex",color:"orange",colorClass:"bg-sf-orange",icon:i.jsx(uc,{className:"w-4 h-4"})}],S=[{to:"/soql",label:"SOQL Explorer",color:"text-sf-teal bg-teal-50 hover:bg-teal-100"},{to:"/debug",label:"Debug Lab",color:"text-sf-orange bg-orange-50 hover:bg-orange-100"},{to:"/missions",label:"Missions",color:"text-sf-purple bg-purple-50 hover:bg-purple-100"},{to:"/about",label:"About",color:"text-gray-600 bg-gray-50 hover:bg-gray-100"}];return i.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[i.jsxs("div",{className:"flex items-center justify-between mb-8",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:"My Dashboard"}),i.jsx("p",{className:"text-gray-500 text-sm mt-0.5",children:"Track your Salesforce learning journey"})]}),i.jsxs("button",{onClick:()=>{confirm("Reset all progress? This cannot be undone.")&&n()},className:"text-xs text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50",children:[i.jsx(ro,{className:"w-3.5 h-3.5"})," Reset progress"]})]}),i.jsxs("div",{className:"gradient-hero text-white rounded-2xl p-6 mb-6 relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-16 translate-x-16"}),i.jsxs("div",{className:"relative flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"text-blue-200 text-xs font-medium uppercase tracking-wider mb-1",children:"Current Level"}),i.jsxs("div",{className:"text-2xl font-extrabold",children:["Level ",r,": ",s]}),i.jsxs("div",{className:"flex items-center gap-3 mt-4 mb-2 text-sm text-blue-200",children:[i.jsxs("span",{className:"font-semibold text-white",children:[e.xp," XP"]}),a!==1/0&&i.jsxs("span",{children:["→ ",a," XP for Level ",r+1]})]}),i.jsx("div",{className:"w-full max-w-xs bg-white/20 rounded-full h-2 mt-1",children:i.jsx("div",{className:"bg-yellow-400 h-2 rounded-full transition-all duration-700",style:{width:`${x}%`}})})]}),i.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20",children:i.jsx(Ot,{className:"w-7 h-7 text-yellow-300"})})]})]}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[{icon:i.jsx(dn,{className:"w-5 h-5 text-sf-blue"}),label:"Lessons Done",value:o,total:l},{icon:i.jsx(dt,{className:"w-5 h-5 text-violet-500"}),label:"Challenges",value:c,total:u},{icon:i.jsx(Ot,{className:"w-5 h-5 text-yellow-500"}),label:"Total XP",value:e.xp,total:null},{icon:i.jsx(vg,{className:"w-5 h-5 text-sf-purple"}),label:"Level",value:r,total:6}].map(w=>i.jsxs("div",{className:"card text-center p-5",children:[i.jsx("div",{className:"flex justify-center mb-2",children:w.icon}),i.jsx("div",{className:"text-2xl font-extrabold text-gray-900",children:w.value}),w.total!==null&&i.jsxs("div",{className:"text-xs text-gray-400",children:["of ",w.total]}),i.jsx("div",{className:"text-xs text-gray-500 mt-1",children:w.label}),w.total!==null&&i.jsx("div",{className:"mt-3",children:i.jsx(Mi,{value:w.value,max:w.total,size:"sm"})})]},w.label))}),i.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(dn,{className:"w-5 h-5 text-sf-blue"})," Continue Learning"]}),p?i.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-4",children:[i.jsx("div",{className:"text-xs font-semibold text-sf-blue uppercase tracking-wider mb-1",children:"Up Next"}),i.jsx("div",{className:"font-bold text-gray-900",children:p.title}),i.jsx("div",{className:"text-sm text-gray-500 mt-1 mb-3",children:p.description}),i.jsxs(oe,{to:`/lesson/${p.id}`,className:"btn-primary text-xs px-4 py-2",children:["Start Lesson ",i.jsx(Ms,{className:"w-3.5 h-3.5"})]})]}):i.jsxs("div",{className:"success-box mb-4",children:[i.jsx("p",{className:"font-semibold text-emerald-800",children:"All lessons complete!"}),i.jsx(oe,{to:"/missions",className:"btn-primary mt-3 text-xs inline-flex",children:"View Missions"})]}),h.length>0&&i.jsxs("div",{className:"space-y-1",children:[i.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",children:"Recently Completed"}),h.map(w=>i.jsxs(oe,{to:`/lesson/${w.id}`,className:"flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group",children:[i.jsx(Wr,{className:"w-4 h-4 text-emerald-500 shrink-0"}),i.jsx("span",{className:"text-sm text-gray-700 group-hover:text-gray-900",children:w.title}),e.quizScores[w.id]!==void 0&&i.jsxs("span",{className:"ml-auto text-xs text-gray-400",children:[e.quizScores[w.id],"%"]})]},w.id))]})]}),i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(uc,{className:"w-5 h-5 text-sf-blue"})," Module Progress"]}),i.jsx("div",{className:"space-y-5",children:C.map(w=>{const f=Gt.filter(T=>T.moduleId===w.id),m=f.filter(T=>e.completedLessons.includes(T.id)).length,y=f.length||1;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs(oe,{to:w.path,className:"flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-sf-blue transition-colors",children:[i.jsx("span",{className:`w-7 h-7 rounded-lg ${w.colorClass} text-white flex items-center justify-center`,children:w.icon}),w.label]}),i.jsxs("span",{className:"text-xs font-medium text-gray-400",children:[m,"/",f.length]})]}),i.jsx(Mi,{value:m,max:y,color:w.color,size:"sm"})]},w.id)})}),i.jsx("div",{className:"divider"}),i.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"Quick Links"}),i.jsx("div",{className:"grid grid-cols-2 gap-2",children:S.map(w=>i.jsx(oe,{to:w.to,className:`text-center py-3 px-2 rounded-xl text-xs font-semibold transition-colors ${w.color}`,children:w.label},w.to))})]})]}),e.badges.length>0&&i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(Ot,{className:"w-5 h-5 text-yellow-500"})," Earned Badges"]}),i.jsx("div",{className:"flex flex-wrap gap-3",children:e.badges.map(w=>i.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl px-4 py-2.5",children:[i.jsx(Ot,{className:"w-4 h-4 text-yellow-500"}),i.jsx("span",{className:"text-sm font-semibold text-yellow-800 capitalize",children:w.replace(/-/g," ")})]},w))})]})]})}function Tb({difficulty:e}){const t={beginner:{label:"Beginner",class:"bg-green-100 text-green-700"},intermediate:{label:"Intermediate",class:"bg-yellow-100 text-yellow-700"},advanced:{label:"Advanced",class:"bg-red-100 text-red-700"}},{label:n,class:r}=t[e]||t.beginner;return i.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${r}`,children:n})}function Lb({lesson:e,isCompleted:t,isLocked:n=!1,quizScore:r}){const s=i.jsx("div",{className:`bg-white rounded-xl border-2 p-5 transition-all duration-200 ${n?"border-gray-100 opacity-60 cursor-not-allowed":t?"border-green-200 hover:border-green-400 hover:shadow-sf-lg cursor-pointer":"border-gray-100 hover:border-sf-blue hover:shadow-sf-lg cursor-pointer"}`,children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex-shrink-0 mt-0.5",children:n?i.jsx("div",{className:"w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center",children:i.jsx(ib,{size:16,className:"text-sf-gray-5"})}):t?i.jsx("div",{className:"w-9 h-9 rounded-full bg-green-100 flex items-center justify-center",children:i.jsx(ze,{size:18,className:"text-sf-green"})}):i.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center",children:i.jsx(dn,{size:16,className:"text-sf-blue"})})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between gap-2",children:[i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold text-sm ${n?"text-sf-gray-5":"text-sf-gray-9"}`,children:e.title}),i.jsx("p",{className:`text-xs mt-0.5 ${n?"text-sf-gray-4":"text-sf-gray-6"}`,children:e.subtitle})]}),!n&&i.jsx(Rt,{size:16,className:"text-sf-gray-4 flex-shrink-0 mt-0.5"})]}),i.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[i.jsx(Tb,{difficulty:e.difficulty}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(ua,{size:11}),e.duration," min"]}),t&&r!==void 0&&i.jsxs("span",{className:"text-xs text-sf-green font-medium",children:["Quiz: ",r,"%"]})]})]})]})});return n?s:i.jsx(oe,{to:`/lesson/${e.id}`,className:"block",children:s})}function Ib(){const e=b.useContext(io),{progress:t}=e,n=Gt.filter(l=>l.moduleId==="apex-basics"),r=Gt.filter(l=>l.moduleId==="soql"),s=Gt.filter(l=>l.moduleId==="dml"),a=[...n,...r,...s],o=a.filter(l=>t.completedLessons.includes(l.id)).length,c=a.reduce((l,u)=>l+u.duration,0);return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sf-blue text-sm mb-2",children:[i.jsx(dn,{size:14}),i.jsx(oe,{to:"/dashboard",className:"hover:underline",children:"Dashboard"}),i.jsx(Rt,{size:12,className:"text-sf-gray-4"}),i.jsx("span",{children:"Apex Learning Path"})]}),i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:"Salesforce Apex Learning Path"}),i.jsx("p",{className:"text-sf-gray-6 mt-1 max-w-2xl",children:"Master Apex from the ground up — from variables and data types to SOQL queries and DML operations."}),i.jsxs("div",{className:"flex items-center gap-6 mt-4",children:[i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(dn,{size:15})," ",a.length," lessons"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(ua,{size:15})," ~",Math.round(c/60)," hours"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(ze,{size:15,className:"text-sf-green"})," ",o," completed"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(dt,{size:15})," ",a.filter(l=>l.challengeId).length," challenges"]})]}),i.jsx(Mi,{value:o,max:a.length,className:"mt-3 max-w-xs",showLabel:!0,label:"Overall progress"}),i.jsxs("div",{className:"flex items-center gap-3 mt-4 flex-wrap",children:[i.jsxs("div",{className:"flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:[i.jsx(mr,{size:15,className:"text-yellow-500"}),i.jsxs("span",{className:"text-sm font-bold text-yellow-700",children:[t.xp," XP"]})]}),t.completedChallenges.length>0&&i.jsxs("div",{className:"flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2",children:[i.jsx(Ot,{size:15,className:"text-green-600"}),i.jsxs("span",{className:"text-sm font-bold text-green-700",children:[t.completedChallenges.length," challenge",t.completedChallenges.length!==1?"s":""," cleared"]})]}),t.streakDays>0&&i.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2",children:[i.jsx("span",{className:"text-base",children:"🔥"}),i.jsxs("span",{className:"text-sm font-bold text-orange-700",children:[t.streakDays," day streak"]})]})]})]}),i.jsx(el,{title:"Module 1: Apex Fundamentals",description:"The essential building blocks of Apex programming.",lessons:n,progress:t,color:"bg-sf-blue"}),i.jsx(el,{title:"Module 2: SOQL — Querying Data",description:"Learn to retrieve Salesforce records with precision.",lessons:r,progress:t,color:"bg-sf-teal"}),i.jsx(el,{title:"Module 3: DML — Writing Data",description:"Create, update, and delete Salesforce records safely.",lessons:s,progress:t,color:"bg-sf-green"}),i.jsxs("div",{className:"card border-2 border-dashed border-gray-200 text-center py-8 mt-6",children:[i.jsx("div",{className:"text-3xl mb-3",children:"🚀"}),i.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-1",children:"More modules coming soon"}),i.jsx("p",{className:"text-sm text-sf-gray-5",children:"Apex Triggers, Lightning Web Components, and Integrations"})]})]})}function el({title:e,description:t,lessons:n,progress:r,color:s}){if(n.length===0)return null;const a=n.filter(o=>r.completedLessons.includes(o.id)).length;return i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[i.jsx("div",{className:`w-1 h-full min-h-[3rem] rounded-full ${s} flex-shrink-0 mt-1`,style:{width:4}}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h2",{className:"font-bold text-sf-gray-9",children:e}),i.jsxs("span",{className:"text-sm text-sf-gray-5",children:[a,"/",n.length]})]}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:t}),i.jsx(Mi,{value:a,max:n.length,size:"sm",className:"mt-2 max-w-[200px]"})]})]}),i.jsx("div",{className:"space-y-3 pl-4",children:n.map((o,c)=>{const l=r.completedLessons.includes(o.id),u=c>0&&!r.completedLessons.includes(n[c-1].id)&&!l;return i.jsx(Lb,{lesson:o,isCompleted:l,isLocked:u,quizScore:r.quizScores[o.id]},o.id)})})]})}/*! @license DOMPurify 3.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.5.0/LICENSE */function up(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Eb(e){if(Array.isArray(e))return e}function Db(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,s,a,o,c=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(p){u=!0,s=p}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return c}}function Ob(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Nb(e,t){return Eb(e)||Db(e,t)||kb(e,t)||Ob()}function kb(e,t){if(e){if(typeof e=="string")return up(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?up(e,t):void 0}}const Cg=Object.entries,Rb=Object.keys,dp=Object.setPrototypeOf,Mb=Object.isFrozen,Ag=Object.getPrototypeOf,Tg=Object.getOwnPropertyDescriptor;let Oe=Object.freeze,ve=Object.seal,vn=Object.create,Lg=typeof Reflect<"u"&&Reflect,_i=Lg.apply,pc=Lg.construct;Oe||(Oe=function(t){return t});ve||(ve=function(t){return t});_i||(_i=function(t,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),a=2;a<r;a++)s[a-2]=arguments[a];return t.apply(n,s)});pc||(pc=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new t(...r)});const Tt=de(Array.prototype.forEach),_b=de(Array.prototype.lastIndexOf),pp=de(Array.prototype.pop),gs=de(Array.prototype.push),hp=de(Array.prototype.slice),jb=de(Array.prototype.splice),Hr=Array.isArray,tl=hu(Set),nl=de(Set.prototype.add),fs=de(Set.prototype.has),Pb=de(Set.prototype.delete),qb=hu(Map),mp=de(Map.prototype.get),gp=de(Map.prototype.set),en=de(String.prototype.toLowerCase),rl=de(String.prototype.toString),Bb=de(String.prototype.match),ys=de(String.prototype.replace),sl=de(String.prototype.indexOf),Fb=de(String.prototype.trim),Ub=de(Number.prototype.toString),Wb=de(Boolean.prototype.toString),fp=typeof BigInt>"u"?null:de(BigInt.prototype.toString),yp=typeof Symbol>"u"?null:de(Symbol.prototype.toString),We=de(Object.prototype.hasOwnProperty),xs=de(Object.prototype.toString),Hb=RegExp.prototype.test,Le=function(t,n){return t instanceof RegExp&&(t.lastIndex=0),_i(Hb,t,[n])},zt=hu(TypeError);function de(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return _i(e,t,r)}}function hu(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return pc(e,n)}}function Z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:en;if(dp&&dp(e,null),!Hr(t))return e;let r=t.length;for(;r--;){let s=t[r];if(typeof s=="string"){const a=n(s);a!==s&&(Mb(t)||(t[r]=a),s=a)}e[s]=!0}return e}function zb(e){for(let t=0;t<e.length;t++)We(e,t)||(e[t]=null);return e}function ji(e){const t=vn(null);for(const r of Cg(e)){var n=Nb(r,2);const s=n[0],a=n[1];We(e,s)&&(Hr(a)?t[s]=zb(a):a&&typeof a=="object"&&a.constructor===Object?t[s]=ji(a):t[s]=a)}return t}function Cs(e){const t=vn(null),n=Rb(e);let r=n.length;for(;r--;)t[n[r]]=e[n[r]];return t}function Qb(e){switch(typeof e){case"string":return e;case"number":return Ub(e);case"boolean":return Wb(e);case"bigint":return fp?fp(e):"0";case"symbol":return yp?yp(e):"Symbol()";case"undefined":return xs(e);case"function":case"object":{if(e===null)return xs(e);const t=e,n=at(t,"toString");if(typeof n=="function"){const r=n(t);return typeof r=="string"?r:xs(r)}return xs(e)}default:return xs(e)}}function at(e,t){for(;e!==null;){const r=Tg(e,t);if(r){if(r.get)return de(r.get);if(typeof r.value=="function")return de(r.value)}e=Ag(e)}function n(){return null}return n}function $b(e,t){for(;e!==null;){const n=Tg(e,t);if(n)return n.get?de(n.get):null;e=Ag(e)}return null}function Vb(e){if(!e)return!1;try{return Le(e,""),!0}catch{return!1}}const xp=Oe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),al=Oe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),il=Oe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Gb=Oe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ol=Oe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Jb=Oe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),bp=Oe(["#text"]),vp=Oe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),ll=Oe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Sp=Oe(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$a=Oe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Yb=ve(/{{[\w\W]*|^[\w\W]*}}/g),Kb=ve(/<%[\w\W]*|^[\w\W]*%>/g),Xb=ve(/\${[\w\W]*/g),wp=ve(/{{|}}|\${|<%|%>/),Zb=ve(/[^\t\n\f\r ]/),Cp=ve(/\u0000/g),ev=ve(/^data-[\-\w.\u00B7-\uFFFF]+$/),tv=ve(/^aria-[\-\w]+$/),Ap=ve(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),nv=ve(/^(?:\w+script|data):/i),rv=ve(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),sv=ve(/^html$/i),av=ve(/^[a-z][.\w]*(-[.\w]+)+$/i),cl=ve(/<[/\w!]/g),iv=ve(/<[/\w]/g),ov=ve(/<[/\w]|^-?>|--!?>|<!-$/g),lv=ve(/<\/no(script|embed|frames)/i),Tp=ve(/\/>/i),cv=ve(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),uv=ve(/^[\r\n\t ]+/),pe={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},dv=Oe(Z({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),pv=Oe(Z({},["textarea","title"])),hv=Oe(Z({},["area","base","basefont","bgsound","br","col","embed","frame","hr","img","input","keygen","link","meta","param","source","track","wbr"])),mv=function(){return typeof window>"u"?null:window},gv=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Lp=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},fn=function(t,n,r,s){return We(t,n)&&Hr(t[n])?Z(s.base?Cs(s.base):{},t[n],s.transform):r},ul=function(t,n,r){const s=We(t,n)?t[n]:void 0;return s&&typeof s=="object"?ji(s):r};function Ig(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mv();const t=N=>Ig(N);if(t.version="3.5.0",t.removed=[],!e||!e.document||e.document.nodeType!==pe.document||!e.Element)return t.isSupported=!1,t;let n=e.document;const r=n,s=r.currentScript,a=e.HTMLTemplateElement,o=e.Node,c=e.Element,l=e.NodeFilter,u=e.DOMParser,p=e.trustedTypes,h=c.prototype,g=at(h,"cloneNode"),x=at(h,"remove"),C=at(h,"removeChild"),S=at(h,"removeAttributeNode"),w=at(h,"nextSibling"),f=at(h,"childNodes"),m=at(h,"parentNode"),y=at(h,"shadowRoot"),T=at(h,"attributes"),L=o&&o.prototype?at(o.prototype,"nodeType"):null,E=o&&o.prototype?at(o.prototype,"nodeName"):null,D=o&&o.prototype?at(o.prototype,"ownerDocument"):null,k=function(d){return L?L(d):d.nodeType},U=function(d){return E?E(d):d.nodeName},M=$b(h,"namespaceURI"),K=function(d){return M?M(d):d.namespaceURI},Se=function(d){return k(d)===pe.element?T(d):null};if(typeof a=="function"){const N=n.createElement("template");N.content&&N.content.ownerDocument&&(n=N.content.ownerDocument)}let ne,fe="",P,V=!1,re=0;const R=function(){if(re>0)throw zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},q=function(d){R(),re++;try{return ne.createHTML(d)}finally{re--}},F=function(d){return ne&&uo?q(d):d},B=function(d){R(),re++;try{return ne.createScriptURL(d)}finally{re--}},$=function(){return V||(P=gv(p,s),V=!0),P},te=n,Ce=te.implementation,Be=te.createNodeIterator,rt=te.createDocumentFragment,_t=te.getElementsByTagName,ts=r.importNode;let le=Lp();t.isSupported=typeof Cg=="function"&&typeof m=="function"&&Ce&&Ce.createHTMLDocument!==void 0;const Q=Yb,J=Kb,jt=Xb,Ye=ev,mt=tv,gr=nv,ma=rv,H=av;let ae=Ap,X=null;const gt=Z({},[...xp,...al,...il,...ol,...bp]);let ce=null;const ns=Z({},[...vp,...ll,...Sp,...$a]);let st=null,hn=null,ga=null;const Pt=Object.seal(vn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let gu=!0,oo=!0,fu=!1,lo=!0,Kt=!1,Qn=!0,$n=!1,fa=!1,ya=null,xa=null,co=!1,fr=!1,ba=!1,uo=!1,yu=!0,xu=!1;const bu="user-content-";let po=!0,ho=!1,Xt=null,Vn=null,yr=!1,Gn=null;const vu=Z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Su=null;const wu=Z({},["audio","video","img","source","image","track"]);let Cu=null;const Au=Z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),va="http://www.w3.org/1998/Math/MathML",Sa="http://www.w3.org/2000/svg",qt="http://www.w3.org/1999/xhtml";let xr=qt,mo=!1,Tu=null;const Qg=Z({},[va,Sa,qt],rl),$g=Oe(Z({},["mi","mo","mn","ms","mtext"]));let go=null;const Vg=Oe(Z({},["annotation-xml"]));let fo=null;const Gg=Oe(vn(null)),Jg=Z({},["title","style","font","a","script"]);let br=null;const Yg=["application/xhtml+xml","text/html"],Kg="text/html";let Ae=null,rs=null,wa=null;const Xg=n.createElement("form"),Lu=function(d){return d instanceof RegExp||d instanceof Function},Ca=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!d||typeof d!="object")&&(d={}),d=ji(d),br=Yg.indexOf(d.PARSER_MEDIA_TYPE)===-1?Kg:d.PARSER_MEDIA_TYPE,Ae=br==="application/xhtml+xml"?rl:en,X=fn(d,"ALLOWED_TAGS",gt,{transform:Ae}),ce=fn(d,"ALLOWED_ATTR",ns,{transform:Ae}),Tu=fn(d,"ALLOWED_NAMESPACES",Qg,{transform:rl}),Cu=fn(d,"ADD_URI_SAFE_ATTR",Au,{transform:Ae,base:Au}),Su=fn(d,"ADD_DATA_URI_TAGS",wu,{transform:Ae,base:wu}),Gn=fn(d,"FORBID_CONTENTS",vu,{transform:Ae}),hn=fn(d,"FORBID_TAGS",vn(null),{transform:Ae}),ga=fn(d,"FORBID_ATTR",vn(null),{transform:Ae}),yr=We(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?ji(d.USE_PROFILES):d.USE_PROFILES:!1,gu=d.ALLOW_ARIA_ATTR!==!1,oo=d.ALLOW_DATA_ATTR!==!1,fu=d.ALLOW_UNKNOWN_PROTOCOLS||!1,lo=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Kt=d.SAFE_FOR_TEMPLATES||!1,Qn=d.SAFE_FOR_XML!==!1,$n=d.WHOLE_DOCUMENT||!1,fr=d.RETURN_DOM||!1,ba=d.RETURN_DOM_FRAGMENT||!1,uo=d.RETURN_TRUSTED_TYPE||!1,co=d.FORCE_BODY||!1,yu=d.SANITIZE_DOM!==!1,xu=d.SANITIZE_NAMED_PROPS||!1,po=d.KEEP_CONTENT!==!1,ho=d.IN_PLACE||!1,ae=Vb(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:Ap,xr=typeof d.NAMESPACE=="string"?d.NAMESPACE:qt,go=ul(d,"MATHML_TEXT_INTEGRATION_POINTS",$g),fo=ul(d,"HTML_INTEGRATION_POINTS",Vg);const v=ul(d,"CUSTOM_ELEMENT_HANDLING",Gg);if(st=vn(null),We(v,"tagNameCheck")&&Lu(v.tagNameCheck)&&(st.tagNameCheck=v.tagNameCheck),We(v,"attributeNameCheck")&&Lu(v.attributeNameCheck)&&(st.attributeNameCheck=v.attributeNameCheck),We(v,"allowCustomizedBuiltInElements")&&typeof v.allowCustomizedBuiltInElements=="boolean"&&(st.allowCustomizedBuiltInElements=v.allowCustomizedBuiltInElements),ve(st),Kt&&(oo=!1),ba&&(fr=!0),yr&&((We(d,"ALLOWED_TAGS")||We(d,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),X=Z({},bp),ce=vn(null),yr.html===!0&&(Z(X,xp),Z(ce,vp)),yr.svg===!0&&(Z(X,al),Z(ce,ll),Z(ce,$a)),yr.svgFilters===!0&&(Z(X,il),Z(ce,ll),Z(ce,$a)),yr.mathMl===!0&&(Z(X,ol),Z(ce,Sp),Z(ce,$a))),Pt.tagCheck=null,Pt.attributeCheck=null,We(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?Pt.tagCheck=d.ADD_TAGS:Hr(d.ADD_TAGS)&&(X===gt&&(X=Cs(X)),Z(X,d.ADD_TAGS,Ae))),We(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?Pt.attributeCheck=d.ADD_ATTR:Hr(d.ADD_ATTR)&&(ce===ns&&(ce=Cs(ce)),Z(ce,d.ADD_ATTR,Ae))),We(d,"ADD_FORBID_CONTENTS")&&Hr(d.ADD_FORBID_CONTENTS)&&(Gn===vu&&(Gn=Cs(Gn)),Z(Gn,d.ADD_FORBID_CONTENTS,Ae)),po&&(X["#text"]=!0),$n&&Z(X,["html","head","body"]),X.table&&(X.tbody=!0,delete hn.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const A=ne;ne=d.TRUSTED_TYPES_POLICY;try{fe=q("")}catch(I){throw ne=A,I}}else d.TRUSTED_TYPES_POLICY===null?(ne=void 0,fe=""):(ne===void 0&&(ne=$()),ne&&typeof fe=="string"&&(fe=q("")));rs=Oe(d)},Iu=Z({},[...al,...il,...Gb]),Eu=Z({},[...ol,...Jb]),Zg=function(d,v,A){return v===qt?d==="svg":v===va?d==="svg"&&(A==="annotation-xml"||go[A]):!!Iu[d]},ef=function(d,v,A){return v===qt?d==="math":v===Sa?d==="math"&&fo[A]:!!Eu[d]},tf=function(d,v,A){return v===Sa&&!fo[A]||v===va&&!go[A]?!1:!Eu[d]&&(Jg[d]||!Iu[d])},nf=function(d){const v=K(d),A=en(U(d)),I=m(d);let _=xr,W="template";return I&&k(I)===pe.element&&(_=K(I),W=en(U(I))),Tu[v]?v===Sa?Zg(A,_,W):v===va?ef(A,_,W):v===qt?tf(A,_,W):br==="application/xhtml+xml":!1},mn=function(d){gs(t.removed,{element:d}),ku(d);try{m(d).removeChild(d)}catch{if(x(d),!m(d))throw zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Du=function(d,v,A){try{S(d,v)}catch{try{d.removeAttribute(A)}catch{}}},rf=function(d){bo(d);const v=f(d);v&&Tt(hp(v),A=>{try{C(d,A)}catch{}}),k(d)===pe.element&&yo(d,!1)},vr=function(d,v,A){if(!A)try{A=v.getAttributeNode(d)}catch{A=null}if(gs(t.removed,{attribute:A||null,from:v}),A)Du(v,A,d);else try{v.removeAttribute(d)}catch{}if(d==="is")if(fr||ba)try{mn(v)}catch{}else try{v.setAttribute(d,"")}catch{}},yo=function(d,v){const A=T(d);if(A)for(let I=A.length-1;I>=0;--I){const _=A[I],W=_&&_.name;typeof W=="string"&&!(v&&ce[Ae(W)])&&Du(d,_,W)}},xo=function(d,v){let A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const I=[d];for(;I.length>0;){const _=I.pop();if(v(_)===!1)continue;if(A&&k(_)===pe.element){const z=y(_);Sr(z)&&I.push(z)}const W=f(_);if(W)for(let z=W.length-1;z>=0;--z)I.push(W[z])}},bo=function(d){xo(d,v=>{k(v)===pe.element&&yo(v,!0)})},vo=function(d){const v=[];return xo(d,A=>{v.push(A)},!0),v},sf=function(d,v){const A=tl();Tt(vo(d),I=>{k(I)===pe.element&&nl(A,I)}),Tt(v,I=>{k(I)===pe.element&&!fs(A,I)&&yo(I,!0)})},Ou=function(d,v){let A=!1;return Tt(t.removed,I=>{I.element&&(A=A||I.element===d,bo(I.element))}),sf(d,v),A},So=function(d,v){rf(d),Ou(d,v)},Nu=8,af=function(d,v){const A=Xt;let I=null;const _=()=>(I||(I=tl(),Tt(v,W=>{nl(I,W)})),I);for(let W=0;;W++){const z=vo(d),ie=[d];let Zt=!1;if(Tt(z,Ft=>{k(Ft)===pe.documentFragment?gs(ie,Ft):!Zt&&!fs(A,Ft)&&(Zt=fs(_(),Ft))}),!Zt)return;if(W>=Nu)throw zt("the tree kept changing during in-place sanitization; refusing to return it");Tt(ie,(Ft,Ut)=>{of(Ft,Ut>0,d,_())})}},of=function(d,v,A,I){const _=Aa(d);let W;for(;W=_.nextNode();)!fs(I,W)||fs(Xt,W)||(v&&Bt(le.uponSanitizeShadowNode,W,null),Ao(W,A))},lf=function(d){if(!Xt)return;nl(Xt,d);const v=mp(Vn,d);if(v!==void 0){if(v>=Nu)throw zt("the tree kept changing during in-place sanitization; refusing to return it");gp(Vn,d,v+1)}},ku=function(d){Xt&&(Pb(Xt,d),mp(Vn,d)===void 0&&gp(Vn,d,0))},Ru=function(d,v){return Qn?d==="patchsrc"?!0:d==="for"&&v!=="label"&&v!=="output":!1},cf=function(d){Qn&&xo(d,v=>{const A=k(v);if(A===pe.processingInstruction||A===pe.comment&&Le(iv,v.data)){try{x(v)}catch{}return!1}if(A===pe.element){const I=v,_=Ae(U(v));try{I.hasAttribute&&I.hasAttribute("patchsrc")&&I.removeAttribute("patchsrc"),I.hasAttribute&&I.hasAttribute("for")&&Ru("for",_)&&I.removeAttribute("for")}catch{}}return!0})},Mu=function(d){let v=null,A=null;if(co)d="<remove></remove>"+d;else{const W=Bb(d,uv);A=W&&W[0]}br==="application/xhtml+xml"&&xr===qt&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");const I=ne?q(d):d;if(xr===qt)try{v=new u().parseFromString(I,br)}catch{}if(!v||!v.documentElement){v=Ce.createDocument(xr,"template",null);try{v.documentElement.innerHTML=mo?fe:I}catch{}}const _=v.body||v.documentElement;return d&&A&&_.insertBefore(n.createTextNode(A),_.childNodes[0]||null),xr===qt?_t.call(v,$n?"html":"body")[0]:$n?v.documentElement:_},Aa=function(d){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const A=D?D(d):d.ownerDocument;return Be.call(A||d,d,(v?0:l.SHOW_ELEMENT)|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Ta=function(d){return d=ys(d,Q," "),d=ys(d,J," "),d=ys(d,jt," "),d},wo=function(d){var v;Co(d);const A=(v=d.querySelectorAll)===null||v===void 0?void 0:v.call(d,"template");A&&Tt(A,I=>{Sr(I.content)&&wo(I.content)})},uf="table,tbody,thead,tfoot,tr,colgroup",df=Z({},["caption","colgroup","col","thead","tbody","tfoot","tr","td","th","style","script","template"]),pf=function(d){var v;if(br==="application/xhtml+xml")return;const A=(v=d.querySelectorAll)===null||v===void 0?void 0:v.call(d,uf);!A||A.length===0||Tt(A,I=>{Tt(hp(f(I)),_=>{const W=k(_);if(!(W===pe.text?Le(Zb,_.data):W===pe.element&&!df[en(U(_))]))return;let z=I;for(;z&&en(U(z))!=="table";)z=z===d?null:m(z);const ie=z&&z!==d?m(z):null;if(ie)try{ie.insertBefore(_,z)}catch{}})})},Co=function(d){pf(d),d.normalize();const v=Aa(d,!0);let A=null,I=v.nextNode();for(;I;){let _=I.data;if(Le(Cp,_)&&(_=ys(_,Cp,""),I.data=_),Le(wp,_)&&(_=Ta(_),I.data=_),_&&k(I)===pe.text){if(A){const W=A.data,z=W[W.length-1]+_[0];Le(wp,z)&&(A.data=Ta(W+_[0]))}A=I}I=v.nextNode()}},La=function(d){const v=E?E(d):null;return typeof v!="string"||Ae(v)!=="form"?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||d.attributes!==T(d)||typeof d.removeAttribute!="function"||typeof d.removeAttributeNode!="function"||typeof d.getAttributeNode!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function"||d.nodeType!==L(d)||d.childNodes!==f(d)},_u=function(d){if(!L||typeof d!="object"||d===null)return null;try{const v=L(d);return typeof v=="number"?v:null}catch{return null}},Sr=function(d){return _u(d)===pe.documentFragment},ss=function(d){return _u(d)!==null};function Bt(N,d,v){N.length!==0&&Tt(N,A=>{A.call(t,d,v,rs)})}const hf=function(d,v){const A=!!hv[v],I=!!dv[v];return!A&&!I&&!pv[v]||K(d)!==qt?!1:A?d.hasChildNodes():ss(d.firstElementChild)?!0:I&&typeof d.textContent=="string"&&Le(cl,d.textContent)},mf=function(d,v,A){return!!(Qn&&A===pe.element&&d.hasChildNodes()&&!ss(d.firstElementChild)&&Le(cl,d.textContent)&&Le(cl,d.innerHTML)||Qn&&A===pe.element&&hf(d,v)||A===pe.processingInstruction||Qn&&A===pe.comment&&Le(ov,d.data))},Ia=function(d,v){if(d instanceof RegExp)return Le(d,v);if(d instanceof Function){for(var A=arguments.length,I=new Array(A>2?A-2:0),_=2;_<A;_++)I[_-2]=arguments[_];return!!d(v,...I)}return!1},gf=function(d,v,A){if(!hn[v]&&qu(v)&&Ia(st.tagNameCheck,v))return!1;if(po&&!Gn[v]&&!Gn[en(v)]){const I=m(d),_=f(d);if(_&&I){const W=_.length;for(let z=W-1;z>=0;--z){const ie=d===A?g(_[z],!0):_[z];I.insertBefore(ie,w(d))}}}return mn(d),!0},ju=function(d,v,A,I){return d.length===0?v:v===A||v===I?Cs(v):v},as=function(d,v){return d===v||m(d)!==null?!1:(ho&&bo(d),ku(d),!0)},ff=function(d,v){if(lf(d),Bt(le.beforeSanitizeElements,d,null),as(d,v))return!0;if(La(d))return mn(d),!0;const A=Ae(U(d)),I=k(d);if(X=ju(le.uponSanitizeElement,X,gt,ya),Bt(le.uponSanitizeElement,d,{tagName:A,allowedTags:X}),as(d,v))return!0;if(mf(d,A,I))return mn(d),!0;if((hn[A]||!(Pt.tagCheck instanceof Function&&Pt.tagCheck(A))&&!X[A])&&gf(d,A,v))return!0;if(I===pe.element&&!nf(d)||(A==="noscript"||A==="noembed"||A==="noframes")&&Le(lv,d.innerHTML))return mn(d),!0;if(Kt&&I===pe.text){const _=d.textContent,W=Ta(_);_!==W&&(gs(t.removed,{element:d.cloneNode()}),d.textContent=W)}return Bt(le.afterSanitizeElements,d,null),as(d,v)},Pu=function(d,v,A){if(ga[v]||Ru(v,d)||yu&&(v==="id"||v==="name")&&(A in n||A in Xg))return!1;const I=ce[v]||Pt.attributeCheck instanceof Function&&Pt.attributeCheck(v,d);if(oo&&Le(Ye,v)||gu&&Le(mt,v))return!0;if(!I)return qu(d)&&Ia(st.tagNameCheck,d)&&Ia(st.attributeNameCheck,v,d)||v==="is"&&st.allowCustomizedBuiltInElements&&Ia(st.tagNameCheck,A);if(Cu[v])return!0;const _=ys(A,ma,"");return Le(ae,_)||(v==="src"||v==="xlink:href"||v==="href")&&d!=="script"&&sl(A,"data:")===0&&Su[d]||fu&&!Le(gr,_)?!0:!A},yf=Z({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),qu=function(d){return!yf[en(d)]&&Le(H,d)},xf=function(d,v,A,I){if(ne&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!A)switch(p.getAttributeType(d,v)){case"TrustedHTML":return q(I);case"TrustedScriptURL":return B(I)}return I},bf=function(d,v,A,I){try{return A?d.setAttributeNS(A,v,I):d.setAttribute(v,I),La(d)?(mn(d),!1):!0}catch{return vr(v,d),!1}},Bu=function(d,v){return Qn&&Le(cv,v)?!0:en(d)==="attributename"&&sl(v,"href")!==-1},vf=function(d,v){if(Bt(le.beforeSanitizeAttributes,d,null),as(d,v))return;const A=Se(d);if(!A||La(d))return;ce=ju(le.uponSanitizeAttribute,ce,ns,xa);const I={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce,forceKeepAttr:void 0};let _=A.length;const W=Ae(U(d));for(;_--;){const z=A[_];if(!z)continue;const ie=z.name,Zt=z.namespaceURI,Ft=z.value,Ut=Ae(ie),Jn=Ft;let Te=ie==="value"?Jn:Fb(Jn),is=!1;if(I.attrName=Ut,I.attrValue=Te,I.keepAttr=!0,I.forceKeepAttr=void 0,Bt(le.uponSanitizeAttribute,d,I),Te=I.attrValue,xu&&(Ut==="id"||Ut==="name")&&sl(Te,bu)!==0&&(vr(ie,d,z),Te=bu+Te,is=!0),Bu(ie,Te)){vr(ie,d,z);continue}if(!I.forceKeepAttr){if(!I.keepAttr){vr(ie,d,z);continue}if(!lo&&Le(Tp,Te)){vr(ie,d,z);continue}if(Kt&&(Te=Ta(Te)),!Pu(W,Ut,Te)){vr(ie,d,z);continue}Te=xf(W,Ut,Zt,Te),Te!==Jn&&bf(d,ie,Zt,Te)&&is&&pp(t.removed)}}Bt(le.afterSanitizeAttributes,d,null),as(d,v)},Ao=function(d,v){ff(d,v),vf(d,v),Sr(d.content)&&To(d.content)},To=function(d){let v=null;const A=Aa(d);for(Bt(le.beforeSanitizeShadowDOM,d,null);v=A.nextNode();)if(Bt(le.uponSanitizeShadowNode,v,null),Ao(v,d),k(v)===pe.element){const I=y(v);Sr(I)&&(Lo(I),To(I))}Kt&&Co(d),Bt(le.afterSanitizeShadowDOM,d,null)},Lo=function(d){const v=[{node:d,shadow:null}];for(;v.length>0;){const A=v.pop();if(A.shadow){To(A.shadow);continue}const I=A.node,_=k(I)===pe.element,W=f(I);if(W)for(let z=W.length-1;z>=0;--z)v.push({node:W[z],shadow:null});if(_){const z=E?E(I):null;if(typeof z=="string"&&Ae(z)==="template"){const ie=I.content;Sr(ie)&&v.push({node:ie,shadow:null})}}if(_){const z=y(I);Sr(z)&&v.push({node:null,shadow:z},{node:z,shadow:null})}}},Sf=function(d){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},A=null,I=null,_=null,W=null;if(mo=!d,mo&&(d="<!-->"),typeof d!="string"&&!ss(d)&&(d=Qb(d),typeof d!="string"))throw zt("dirty is not a string, aborting");if(!t.isSupported)return d;fa?(X=ya,ce=xa):Ca(v),wa=rs,t.removed=[];const z=ho&&typeof d!="string"&&ss(d);let ie=[];const Zt=Xt,Ft=Vn;if(z){cf(d),ie=vo(d);const Te=U(d);if(typeof Te=="string"){const is=Ae(Te);if(!X[is]||hn[is])throw So(d,ie),zt("root node is forbidden and cannot be sanitized in-place")}if(La(d))throw So(d,ie),zt("root node is clobbered and cannot be sanitized in-place");Xt=tl(),Vn=qb()}else if(ss(d))A=Mu("<!---->"),I=A.ownerDocument.importNode(d,!0),I.nodeType===pe.element&&I.nodeName==="BODY"||I.nodeName==="HTML"?A=I:A.appendChild(I),Lo(A);else{if(!fr&&!Kt&&!$n&&d.indexOf("<")===-1)return F(d);if(A=Mu(d),!A)return fr?null:uo?fe:""}A&&co&&mn(A.firstChild);const Ut=z?d:A;try{z&&Lo(d);const Te=Aa(Ut);for(;_=Te.nextNode();)Ao(_,Ut);z&&af(d,ie)}catch(Te){throw z&&So(d,ie),Te}finally{Xt=Zt,Vn=Ft}if(z){if(Ou(d,ie))throw zt("a node selected for removal could not be safely returned; refusing to sanitize in place");return Kt&&wo(d),d}if(fr){if(Kt&&wo(A),ba)for(W=rt.call(A.ownerDocument);A.firstChild;)W.appendChild(A.firstChild);else W=A;return(ce.shadowroot||ce.shadowrootmode)&&(W=ts.call(r,W,!0)),W}Kt&&Co(A);let Jn=$n?A.outerHTML:A.innerHTML;return $n&&X["!doctype"]&&A.ownerDocument&&A.ownerDocument.doctype&&A.ownerDocument.doctype.name&&Le(sv,A.ownerDocument.doctype.name)&&(Jn="<!DOCTYPE "+A.ownerDocument.doctype.name+`>
`+Jn),F(Jn)};return t.sanitize=function(N){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const v=wa,A=X,I=ce,_=t.removed;wa=null;try{return Sf(N,d)}finally{wa=v,v&&(fa||Ca(v),X=A,ce=I,t.removed=_)}},t.setConfig=function(){let N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ca(N),fa=!0,ya=X,xa=ce},t.clearConfig=function(){rs=null,fa=!1,ya=null,xa=null,ne=P,fe=""},t.isValidAttribute=function(N,d,v){rs||Ca({});const A=Ae(N),I=Ae(d);return typeof v=="string"&&(Bu(d,v)||!lo&&Le(Tp,v))?!1:Pu(A,I,v)},t.addHook=function(N,d){typeof d=="function"&&We(le,N)&&gs(le[N],d)},t.removeHook=function(N,d){if(We(le,N)){if(d!==void 0){const v=_b(le[N],d);return v===-1?void 0:jb(le[N],v,1)[0]}return pp(le[N])}},t.removeHooks=function(N){We(le,N)&&(le[N]=[])},t.removeAllHooks=function(){le=Lp()},t}var fv=Ig();function yv({questions:e,onComplete:t}){const[n,r]=b.useState(0),[s,a]=b.useState(null),[o,c]=b.useState(!1),[l,u]=b.useState([]),[p,h]=b.useState(!1),g=e[n],x=s===(g==null?void 0:g.correct),C=f=>{if(o)return;a(f),c(!0);const m=f===g.correct;u(y=>[...y,m])},S=()=>{if(n<e.length-1)r(f=>f+1),a(null),c(!1);else{const f=l.filter(Boolean).length+(s===(g==null?void 0:g.correct)?1:0);h(!0),t(f,e.length)}},w=()=>{r(0),a(null),c(!1),u([]),h(!1)};if(p){const f=l.filter(Boolean).length,m=Math.round(f/e.length*100);return i.jsxs("div",{className:"text-center py-8",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4",children:i.jsx(Ot,{size:28,className:"text-yellow-600"})}),i.jsx("h3",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Quiz Complete!"}),i.jsxs("p",{className:"text-sf-gray-6 mb-1",children:["You got ",i.jsxs("span",{className:"font-semibold text-sf-gray-9",children:[f," of ",e.length]})," correct"]}),i.jsxs("div",{className:`text-3xl font-bold mt-4 mb-6 ${m>=80?"text-sf-green":m>=60?"text-yellow-500":"text-sf-red"}`,children:[m,"%"]}),m>=80?i.jsx("p",{className:"text-sf-green font-medium mb-6",children:"Excellent work! You've mastered this material."}):m>=60?i.jsx("p",{className:"text-yellow-600 font-medium mb-6",children:"Good effort! Review the explanations to strengthen your understanding."}):i.jsx("p",{className:"text-sf-red font-medium mb-6",children:"Keep studying! Review the lesson and try again."}),i.jsx("button",{onClick:w,className:"btn-secondary",children:"Retake Quiz"})]})}return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("span",{className:"text-sm text-sf-gray-6",children:["Question ",n+1," of ",e.length]}),i.jsx("div",{className:"flex gap-1",children:e.map((f,m)=>i.jsx("div",{className:`w-2 h-2 rounded-full ${m<l.length?l[m]?"bg-sf-green":"bg-sf-red":m===n?"bg-sf-blue":"bg-gray-200"}`},m))})]}),i.jsx("p",{className:"text-sf-gray-9 font-medium mb-4 leading-relaxed",children:g.question}),i.jsx("div",{className:"space-y-3 mb-4",children:g.options.map((f,m)=>{let y="w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ";return o?m===g.correct?y+="border-green-400 bg-green-50 text-sf-green":m===s&&!x?y+="border-red-400 bg-red-50 text-sf-red":y+="border-gray-100 text-sf-gray-5 cursor-not-allowed":y+="border-gray-200 hover:border-sf-blue hover:bg-blue-50 text-sf-gray-8 cursor-pointer",i.jsx("button",{className:y,onClick:()=>C(m),children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0",style:{borderColor:o&&m===g.correct?"#2E844A":o&&m===s?"#EA001E":"#C9C7C5"},children:String.fromCharCode(65+m)}),o&&m===g.correct&&i.jsx(ze,{size:15,className:"text-sf-green flex-shrink-0"}),o&&m===s&&!x&&i.jsx(bt,{size:15,className:"text-sf-red flex-shrink-0"}),i.jsx("span",{children:f})]})},m)})}),o&&i.jsx("div",{className:`p-4 rounded-lg mb-4 text-sm ${x?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:i.jsxs("div",{className:"flex items-start gap-2",children:[x?i.jsx(ze,{size:16,className:"text-sf-green mt-0.5 flex-shrink-0"}):i.jsx(bt,{size:16,className:"text-sf-red mt-0.5 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("p",{className:`font-semibold mb-1 ${x?"text-sf-green":"text-sf-red"}`,children:x?"Correct!":"Not quite."}),i.jsx("p",{className:"text-sf-gray-7",children:g.explanation})]})]})}),o&&i.jsxs("button",{onClick:S,className:"btn-primary flex items-center gap-2",children:[n<e.length-1?"Next Question":"See Results",i.jsx(Rt,{size:16})]})]})}function Ip(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function xv(e){if(Array.isArray(e))return e}function bv(e,t,n){return(t=Lv(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,s,a,o,c=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(p){u=!0,s=p}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return c}}function Sv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ep(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Dp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ep(Object(n),!0).forEach(function(r){bv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ep(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wv(e,t){if(e==null)return{};var n,r,s=Cv(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function Cv(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Av(e,t){return xv(e)||vv(e,t)||Iv(e,t)||Sv()}function Tv(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lv(e){var t=Tv(e,"string");return typeof t=="symbol"?t:t+""}function Iv(e,t){if(e){if(typeof e=="string")return Ip(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ip(e,t):void 0}}function Ev(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Np(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Op(Object(n),!0).forEach(function(r){Ev(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(s,a){return a(s)},r)}}function As(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return s.length>=e.length?e.apply(this,s):function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return t.apply(n,[].concat(s,c))}}}function Pi(e){return{}.toString.call(e).includes("Object")}function Ov(e){return!Object.keys(e).length}function na(e){return typeof e=="function"}function Nv(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function kv(e,t){return Pi(t)||Pn("changeType"),Object.keys(t).some(function(n){return!Nv(e,n)})&&Pn("changeField"),t}function Rv(e){na(e)||Pn("selectorType")}function Mv(e){na(e)||Pi(e)||Pn("handlerType"),Pi(e)&&Object.values(e).some(function(t){return!na(t)})&&Pn("handlersType")}function _v(e){e||Pn("initialIsRequired"),Pi(e)||Pn("initialType"),Ov(e)&&Pn("initialContent")}function jv(e,t){throw new Error(e[t]||e.default)}var Pv={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Pn=As(jv)(Pv),Va={changes:kv,selector:Rv,handler:Mv,initial:_v};function qv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Va.initial(e),Va.handler(t);var n={current:e},r=As(Uv)(n,t),s=As(Fv)(n),a=As(Va.changes)(e),o=As(Bv)(n);function c(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(p){return p};return Va.selector(u),u(n.current)}function l(u){Dv(r,s,a,o)(u)}return[c,l]}function Bv(e,t){return na(t)?t(e.current):t}function Fv(e,t){return e.current=Np(Np({},e.current),t),t}function Uv(e,t,n){return na(t)?t(e.current):Object.keys(n).forEach(function(r){var s;return(s=t[r])===null||s===void 0?void 0:s.call(t,e.current[r])}),n}var Wv={create:qv},Hv={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function zv(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return s.length>=e.length?e.apply(this,s):function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return t.apply(n,[].concat(s,c))}}}function Qv(e){return{}.toString.call(e).includes("Object")}function $v(e){return e||kp("configIsRequired"),Qv(e)||kp("configType"),e.urls?(Vv(),{paths:{vs:e.urls.monacoBase}}):e}function Vv(){console.warn(Eg.deprecation)}function Gv(e,t){throw new Error(e[t]||e.default)}var Eg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},kp=zv(Gv)(Eg),Jv={config:$v},Yv=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduceRight(function(a,o){return o(a)},s)}};function Dg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Dg(e[n],t[n]))}),Dp(Dp({},e),t)}var Kv={type:"cancelation",msg:"operation is manually canceled"};function dl(e){var t=!1,n=new Promise(function(r,s){e.then(function(a){return t?s(Kv):r(a)}),e.catch(s)});return n.cancel=function(){return t=!0},n}var Xv=["monaco"],Zv=Wv.create({config:Hv,isInitialized:!1,resolve:null,reject:null,monaco:null}),Og=Av(Zv,2),ha=Og[0],ao=Og[1];function eS(e){var t=Jv.config(e),n=t.monaco,r=wv(t,Xv);ao(function(s){return{config:Dg(s.config,r),monaco:n}})}function tS(){var e=ha(function(t){var n=t.monaco,r=t.isInitialized,s=t.resolve;return{monaco:n,isInitialized:r,resolve:s}});if(!e.isInitialized){if(ao({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),dl(pl);if(window.monaco&&window.monaco.editor)return Ng(window.monaco),e.resolve(window.monaco),dl(pl);Yv(nS,sS)(aS)}return dl(pl)}function nS(e){return document.body.appendChild(e)}function rS(e){var t=document.createElement("script");return e&&(t.src=e),t}function sS(e){var t=ha(function(r){var s=r.config,a=r.reject;return{config:s,reject:a}}),n=rS("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function aS(){var e=ha(function(n){var r=n.config,s=n.resolve,a=n.reject;return{config:r,resolve:s,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Ng(r),e.resolve(r)},function(n){e.reject(n)})}function Ng(e){ha().monaco||ao({monaco:e})}function iS(){return ha(function(e){var t=e.monaco;return t})}var pl=new Promise(function(e,t){return ao({resolve:e,reject:t})}),kg={config:eS,init:tS,__getMonacoInstance:iS},oS={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},hl=oS,lS={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},cS=lS;function uS({children:e}){return nr.createElement("div",{style:cS.container},e)}var dS=uS,pS=dS;function hS({width:e,height:t,isEditorReady:n,loading:r,_ref:s,className:a,wrapperProps:o}){return nr.createElement("section",{style:{...hl.wrapper,width:e,height:t},...o},!n&&nr.createElement(pS,null,r),nr.createElement("div",{ref:s,style:{...hl.fullWidth,...!n&&hl.hide},className:a}))}var mS=hS,Rg=b.memo(mS);function gS(e){b.useEffect(e,[])}var Mg=gS;function fS(e,t,n=!0){let r=b.useRef(!0);b.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var ot=fS;function _s(){}function _r(e,t,n,r){return yS(e,r)||xS(e,t,n,r)}function yS(e,t){return e.editor.getModel(_g(e,t))}function xS(e,t,n,r){return e.editor.createModel(t,n,r?_g(e,r):void 0)}function _g(e,t){return e.Uri.parse(t)}function bS({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:s,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:c=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:p="Loading...",options:h={},height:g="100%",width:x="100%",className:C,wrapperProps:S={},beforeMount:w=_s,onMount:f=_s}){let[m,y]=b.useState(!1),[T,L]=b.useState(!0),E=b.useRef(null),D=b.useRef(null),k=b.useRef(null),U=b.useRef(f),M=b.useRef(w),K=b.useRef(!1);Mg(()=>{let P=kg.init();return P.then(V=>(D.current=V)&&L(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>E.current?fe():P.cancel()}),ot(()=>{if(E.current&&D.current){let P=E.current.getOriginalEditor(),V=_r(D.current,e||"",r||n||"text",a||"");V!==P.getModel()&&P.setModel(V)}},[a],m),ot(()=>{if(E.current&&D.current){let P=E.current.getModifiedEditor(),V=_r(D.current,t||"",s||n||"text",o||"");V!==P.getModel()&&P.setModel(V)}},[o],m),ot(()=>{let P=E.current.getModifiedEditor();P.getOption(D.current.editor.EditorOption.readOnly)?P.setValue(t||""):t!==P.getValue()&&(P.executeEdits("",[{range:P.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),P.pushUndoStop())},[t],m),ot(()=>{var P,V;(V=(P=E.current)==null?void 0:P.getModel())==null||V.original.setValue(e||"")},[e],m),ot(()=>{let{original:P,modified:V}=E.current.getModel();D.current.editor.setModelLanguage(P,r||n||"text"),D.current.editor.setModelLanguage(V,s||n||"text")},[n,r,s],m),ot(()=>{var P;(P=D.current)==null||P.editor.setTheme(u)},[u],m),ot(()=>{var P;(P=E.current)==null||P.updateOptions(h)},[h],m);let Se=b.useCallback(()=>{var re;if(!D.current)return;M.current(D.current);let P=_r(D.current,e||"",r||n||"text",a||""),V=_r(D.current,t||"",s||n||"text",o||"");(re=E.current)==null||re.setModel({original:P,modified:V})},[n,t,s,e,r,a,o]),ne=b.useCallback(()=>{var P;!K.current&&k.current&&(E.current=D.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...h}),Se(),(P=D.current)==null||P.editor.setTheme(u),y(!0),K.current=!0)},[h,u,Se]);b.useEffect(()=>{m&&U.current(E.current,D.current)},[m]),b.useEffect(()=>{!T&&!m&&ne()},[T,m,ne]);function fe(){var V,re,R,q;let P=(V=E.current)==null?void 0:V.getModel();c||((re=P==null?void 0:P.original)==null||re.dispose()),l||((R=P==null?void 0:P.modified)==null||R.dispose()),(q=E.current)==null||q.dispose()}return nr.createElement(Rg,{width:x,height:g,isEditorReady:m,loading:p,_ref:k,className:C,wrapperProps:S})}var vS=bS;b.memo(vS);function SS(e){let t=b.useRef();return b.useEffect(()=>{t.current=e},[e]),t.current}var wS=SS,Ga=new Map;function CS({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:s,path:a,theme:o="light",line:c,loading:l="Loading...",options:u={},overrideServices:p={},saveViewState:h=!0,keepCurrentModel:g=!1,width:x="100%",height:C="100%",className:S,wrapperProps:w={},beforeMount:f=_s,onMount:m=_s,onChange:y,onValidate:T=_s}){let[L,E]=b.useState(!1),[D,k]=b.useState(!0),U=b.useRef(null),M=b.useRef(null),K=b.useRef(null),Se=b.useRef(m),ne=b.useRef(f),fe=b.useRef(),P=b.useRef(r),V=wS(a),re=b.useRef(!1),R=b.useRef(!1);Mg(()=>{let B=kg.init();return B.then($=>(U.current=$)&&k(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>M.current?F():B.cancel()}),ot(()=>{var $,te,Ce,Be;let B=_r(U.current,e||r||"",t||s||"",a||n||"");B!==(($=M.current)==null?void 0:$.getModel())&&(h&&Ga.set(V,(te=M.current)==null?void 0:te.saveViewState()),(Ce=M.current)==null||Ce.setModel(B),h&&((Be=M.current)==null||Be.restoreViewState(Ga.get(a))))},[a],L),ot(()=>{var B;(B=M.current)==null||B.updateOptions(u)},[u],L),ot(()=>{!M.current||r===void 0||(M.current.getOption(U.current.editor.EditorOption.readOnly)?M.current.setValue(r):r!==M.current.getValue()&&(R.current=!0,M.current.executeEdits("",[{range:M.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),M.current.pushUndoStop(),R.current=!1))},[r],L),ot(()=>{var $,te;let B=($=M.current)==null?void 0:$.getModel();B&&s&&((te=U.current)==null||te.editor.setModelLanguage(B,s))},[s],L),ot(()=>{var B;c!==void 0&&((B=M.current)==null||B.revealLine(c))},[c],L),ot(()=>{var B;(B=U.current)==null||B.editor.setTheme(o)},[o],L);let q=b.useCallback(()=>{var B;if(!(!K.current||!U.current)&&!re.current){ne.current(U.current);let $=a||n,te=_r(U.current,r||e||"",t||s||"",$||"");M.current=(B=U.current)==null?void 0:B.editor.create(K.current,{model:te,automaticLayout:!0,...u},p),h&&M.current.restoreViewState(Ga.get($)),U.current.editor.setTheme(o),c!==void 0&&M.current.revealLine(c),E(!0),re.current=!0}},[e,t,n,r,s,a,u,p,h,o,c]);b.useEffect(()=>{L&&Se.current(M.current,U.current)},[L]),b.useEffect(()=>{!D&&!L&&q()},[D,L,q]),P.current=r,b.useEffect(()=>{var B,$;L&&y&&((B=fe.current)==null||B.dispose(),fe.current=($=M.current)==null?void 0:$.onDidChangeModelContent(te=>{R.current||y(M.current.getValue(),te)}))},[L,y]),b.useEffect(()=>{if(L){let B=U.current.editor.onDidChangeMarkers($=>{var Ce;let te=(Ce=M.current.getModel())==null?void 0:Ce.uri;if(te&&$.find(Be=>Be.path===te.path)){let Be=U.current.editor.getModelMarkers({resource:te});T==null||T(Be)}});return()=>{B==null||B.dispose()}}return()=>{}},[L,T]);function F(){var B,$;(B=fe.current)==null||B.dispose(),g?h&&Ga.set(a,M.current.saveViewState()):($=M.current.getModel())==null||$.dispose(),M.current.dispose()}return nr.createElement(Rg,{width:x,height:C,isEditorReady:L,loading:l,_ref:K,className:S,wrapperProps:w})}var AS=CS,TS=b.memo(AS),jg=TS;class An extends Error{constructor(n,r){super(n);Wt(this,"line");this.line=r}}const LS=new Set(["==","!=","<=",">=","&&","||","++","--","+=","-=","*=","/=","=>","?.","??"]);function Pg(e){const t=[],n=e.length;let r=0,s=1,a=!1;const o=(c,l)=>{t.push({t:c,v:l,line:s,nl:a}),a=!1};for(;r<n;){const c=e[r];if(c===`
`){s++,a=!0,r++;continue}if(c===" "||c==="	"||c==="\r"){r++;continue}if(c==="/"&&e[r+1]==="/"){for(;r<n&&e[r]!==`
`;)r++;continue}if(c==="/"&&e[r+1]==="*"){const p=e.indexOf("*/",r+2);if(p<0)throw new An("Unterminated block comment",s);for(const h of e.slice(r,p+2))h===`
`&&(s++,a=!0);r=p+2;continue}if(c==="'"){let p=r+1,h="'";for(;p<n&&e[p]!=="'";){if(e[p]===`
`)throw new An("Unterminated string literal",s);if(e[p]==="\\"){h+=e[p]+(e[p+1]??""),p+=2;continue}h+=e[p],p++}if(p>=n)throw new An("Unterminated string literal",s);o("str",h+"'"),r=p+1;continue}if(c==='"')throw new An("String literals in Apex must use single quotes ('like this'), not double quotes",s);if(/[0-9]/.test(c)){const p=/^\d+(\.\d+)?([eE][+-]?\d+)?[LlDd]?/.exec(e.slice(r)),h=p?p[0]:c;o("num",h),r+=h.length;continue}if(/[A-Za-z_$]/.test(c)){let p=r+1;for(;p<n&&/[\w$]/.test(e[p]);)p++;o("id",e.slice(r,p)),r=p;continue}const l=e.slice(r,r+3);if(l==="==="||l==="!=="){o("op",l),r+=3;continue}const u=e.slice(r,r+2);if(LS.has(u)){o("op",u),r+=2;continue}if("{}()[];,.<>=+-*/%!?:&|^@~".includes(c)){o("op",c),r++;continue}throw new An(`Unexpected character '${c}'`,s)}return t}function IS(e){let t;try{t=Pg(e)}catch(a){return a instanceof An?`Compilation Error: ${a.message} (line ${a.line})`:null}const n={"{":"}","(":")","[":"]"},r={"}":"closing brace `}`",")":"closing parenthesis `)`","]":"closing bracket `]`"},s=[];for(const a of t)if(a.t==="op"){if(n[a.v])s.push(a);else if(a.v==="}"||a.v===")"||a.v==="]"){const o=s.pop();if(!o)return`Compilation Error: Unexpected ${r[a.v]} on line ${a.line} — nothing is open to close.`;if(n[o.v]!==a.v)return`Compilation Error: Expected \`${n[o.v]}\` to close \`${o.v}\` from line ${o.line}, but found \`${a.v}\` on line ${a.line}.`}}if(s.length>0){const a=s[s.length-1],o=s.filter(c=>c.v==="{").length;return o>0&&a.v==="{"?`Compilation Error: Missing ${o} closing brace${o>1?"s":""} \`}\` — the block opened on line ${a.line} is never closed.`:`Compilation Error: \`${a.v}\` opened on line ${a.line} is never closed.`}return null}const Ja=new Set(["if","else","for","while","do","return","new","throw","try","catch","finally","break","continue","switch","on","when","class","interface","enum","extends","implements","static","public","private","global","protected","final","abstract","virtual","override","null","true","false","this","super","instanceof","insert","update","delete","upsert","undelete","merge","with","without","inherited","sharing","transient","webservice","testmethod"]),ES=new Set(["public","private","global","protected","static","final","abstract","virtual","override","transient","webservice","testmethod"]),DS=new Set(["insert","update","delete","upsert","undelete"]),OS=new Set(["function","var","let","const","in","of","typeof","default","package","export","import","yield","await","arguments","eval","case","debugger"]),Rp={String:"__rt.S",Integer:"__rt.I",Long:"__rt.I",Decimal:"__rt.D",Double:"__rt.D",Boolean:"__rt.B",Date:"__rt.Date",DateTime:"__rt.DateTime",Datetime:"__rt.DateTime",System:"__rt.System",Math:"__rt.Math",Limits:"__rt.Limits",Trigger:"__rt.Trigger"},Mp={size:"__size",length:"__size",values:"__values",sort:"__sort"},_p={add:"__add",replace:"__replace",replaceall:"__replaceAll",replacefirst:"__replaceFirst",split:"__split"},Qt=e=>e.toLowerCase();class NS{constructor(t){Wt(this,"toks");Wt(this,"out",[]);Wt(this,"hoist",[]);Wt(this,"classes",new Map);Wt(this,"cur",null);Wt(this,"scopes",[]);Wt(this,"swCounter",0);this.toks=t}err(t,n){const r=this.toks[Math.min(Math.max(n,0),this.toks.length-1)];throw new An(t,r?r.line:1)}emit(t){this.out.push(t)}matching(t){const n=[],r={"(":")","[":"]","{":"}"};for(let s=t;s<this.toks.length;s++){const a=this.toks[s];if(a.t==="op"){if(r[a.v])n.push(r[a.v]);else if((a.v===")"||a.v==="]"||a.v==="}")&&(n.pop()!==a.v&&this.err(`Unexpected \`${a.v}\``,s),n.length===0))return s}}return this.err(`\`${this.toks[t].v}\` is never closed`,t)}isId(t){const n=this.toks[t];return!!n&&n.t==="id"}val(t){const n=this.toks[t];return n?n.v:""}lv(t){return Qt(this.val(t))}parseType(t){const n=this.toks[t];if(!n||n.t!=="id"||Ja.has(Qt(n.v)))return null;let r=t+1;for(;this.val(r)==="."&&this.isId(r+1);)r+=2;if(this.val(r)==="<")for(r++;;){if(this.val(r)==="?")r++;else{const s=this.parseType(r);if(s===null)return null;r=s}if(this.val(r)===","){r++;continue}if(this.val(r)===">"){r++;break}return null}for(;this.val(r)==="["&&this.val(r+1)==="]";)r+=2;return r}isDecl(t){let n=t;for(;this.lv(n)==="final";)n++;const r=this.parseType(n);if(r===null||!this.isId(r)||Ja.has(this.lv(r)))return null;const s=this.val(r+1);return s==="="||s===";"||s===","?{nameIdx:r}:null}splitTop(t,n){const r=[];let s=0,a=t;for(let o=t;o<n;o++){const c=this.toks[o];c.t==="op"&&(c.v==="("||c.v==="["||c.v==="{"?s++:c.v===")"||c.v==="]"||c.v==="}"?s--:c.v===","&&s===0&&(r.push([a,o]),a=o+1))}return(a<n||r.length>0)&&r.push([a,n]),r}findStmtEnd(t){let n=0;for(let r=t;r<this.toks.length;r++){const s=this.toks[r];if(s.t==="op"){if(s.v==="("||s.v==="["||s.v==="{")n++;else if(s.v===")"||s.v==="]"||s.v==="}")n--,n<0&&this.err("Missing ';' — statement is not terminated before this closing bracket",r-1);else if(s.v===";"&&n===0)return r}if(n===0&&r>t&&s.nl){const a=this.toks[r-1],o=a.t==="id"||a.t==="num"||a.t==="str"||a.v===")"||a.v==="]"||a.v==="++"||a.v==="--",c=s.t==="id"||s.t==="num"||s.t==="str";o&&c&&Qt(s.v)!=="instanceof"&&this.err("Missing ';' at end of statement",r-1)}}return this.err("Missing ';' — statement is not terminated",this.toks.length-1)}memberAt(t,n){let r=t;const s=new Set;for(;;){if(this.val(r)==="@"&&this.isId(r+1)){r+=2,this.val(r)==="("&&(r=this.matching(r)+1);continue}const u=this.lv(r);if(ES.has(u)){s.add(u),r++;continue}if((u==="with"||u==="without"||u==="inherited")&&this.lv(r+1)==="sharing"){r+=2;continue}break}const a=s.has("static"),o={mods:s,isStatic:a,typeStart:r,typeEnd:r,bodyOpen:-1,parenIdx:-1,nameIdx:-1},c=this.lv(r);if(c==="class"&&this.isId(r+1)){let u=r+2;for(;u<this.toks.length&&this.val(u)!=="{";)u++;return{...o,kind:"class",name:this.val(r+1),nameIdx:r+1,bodyOpen:u}}if(c==="interface"&&this.isId(r+1)){let u=r+2;for(;u<this.toks.length&&this.val(u)!=="{";)u++;return{...o,kind:"interface",name:this.val(r+1),nameIdx:r+1,bodyOpen:u}}if(c==="enum"&&this.isId(r+1)&&this.val(r+2)==="{")return{...o,kind:"enum",name:this.val(r+1),nameIdx:r+1,bodyOpen:r+2};if(a&&this.val(r)==="{")return{...o,kind:"init",name:"",bodyOpen:r};if(n&&this.isId(r)&&this.val(r)===n&&this.val(r+1)==="(")return{...o,kind:"ctor",name:n,nameIdx:r,parenIdx:r+1};const l=this.parseType(r);if(l!==null&&this.isId(l)&&!Ja.has(this.lv(l))){const u=this.val(l+1),p={...o,typeEnd:l,name:this.val(l),nameIdx:l};if(u==="(")return{...p,kind:"method",parenIdx:l+1};if(u==="="||u===";"||u===",")return{...p,kind:"field"};if(u==="{")return{...p,kind:"prop",bodyOpen:l+1}}return null}collectAll(){let t=0;for(;t<this.toks.length;){const n=this.memberAt(t,null);n&&(n.kind==="class"||n.kind==="interface"||n.kind==="enum")?t=this.collectType(n)+1:t++}}collectType(t){if(t.kind==="enum")return this.classes.set(t.name,{name:t.name,statics:new Set,insts:new Set}),this.matching(t.bodyOpen);if(t.kind==="interface")return this.matching(t.bodyOpen);const n={name:t.name,statics:new Set,insts:new Set};for(let a=t.nameIdx+1;a<t.bodyOpen;a++)this.lv(a)==="extends"&&this.isId(a+1)&&(n.parent=this.val(a+1));this.classes.set(t.name,n);const r=this.matching(t.bodyOpen);let s=t.bodyOpen+1;for(;s<r;){const a=this.memberAt(s,n.name);if(!a){s++;continue}switch(a.kind){case"class":case"interface":case"enum":s=this.collectType(a)+1;break;case"method":{(a.isStatic?n.statics:n.insts).add(a.name),s=this.matching(a.parenIdx)+1,this.val(s)==="{"?s=this.matching(s)+1:this.val(s)===";"&&s++;break}case"ctor":{s=this.matching(a.parenIdx)+1,this.val(s)==="{"&&(s=this.matching(s)+1);break}case"field":(a.isStatic?n.statics:n.insts).add(a.name),s=this.findStmtEnd(a.nameIdx)+1;break;case"prop":(a.isStatic?n.statics:n.insts).add(a.name),s=this.matching(a.bodyOpen)+1;break;case"init":s=this.matching(a.bodyOpen)+1;break}}return r}lookupMember(t){let n=this.cur;const r=new Set;for(;n&&!r.has(n.name);){if(r.add(n.name),n.statics.has(t))return"static";if(n.insts.has(t))return"inst";n=n.parent?this.classes.get(n.parent):void 0}return null}inScope(t){return this.scopes.some(n=>n.has(t))}declare(t){this.scopes.length&&this.scopes[this.scopes.length-1].add(t)}mangle(t){return OS.has(t)?t+"_":t}compile(){this.collectAll();let t=0;const n=this.toks.length;for(this.scopes.push(new Set);t<n;){const r=this.memberAt(t,null);r&&(r.kind==="class"||r.kind==="interface"||r.kind==="enum")?t=this.emitType(r,!0):t=this.emitStatement(t)}return this.out.join("")}emitType(t,n){if(t.kind==="interface")return this.matching(t.bodyOpen)+1;if(t.kind==="enum"){const p=this.matching(t.bodyOpen),h=[];for(let g=t.bodyOpen+1;g<p;g++)this.isId(g)&&h.push(this.val(g));return this.emit(`const ${t.name} = Object.freeze({ ${h.map(g=>`${g}: '${g}'`).join(", ")} });
`),p+1}const r=this.classes.get(t.name),s=this.out,a=this.cur;this.out=[],this.cur=r;let o="";r.parent&&(this.classes.has(r.parent)?o=` extends ${r.parent}`:Qt(r.parent).endsWith("exception")&&(o=" extends __rt.Exception")),this.emit(`class ${t.name}${o} {
`);const c=this.matching(t.bodyOpen);let l=t.bodyOpen+1;for(;l<c;)l=this.emitMember(l,r,!!o);this.emit(`}
`);const u=this.out.join("");if(this.out=s,this.cur=a,n){for(const p of this.hoist.splice(0))this.emit(p);this.emit(u)}else this.hoist.push(u);return c+1}emitMember(t,n,r){const s=this.memberAt(t,n.name);if(!s)return this.err(`Unexpected token '${this.val(t)}' in class body`,t);switch(s.kind){case"class":case"interface":case"enum":return this.emitType(s,!1);case"init":{this.scopes.push(new Set),this.emit("static ");const a=this.emitBlock(s.bodyOpen);return this.scopes.pop(),a}case"field":{const a=this.findStmtEnd(s.nameIdx);return this.emit(`${s.isStatic?"static ":""}${this.mangle(s.name)}`),this.val(s.nameIdx+1)==="="&&(this.emit(" = "),this.emitExpr(s.nameIdx+2,a)),this.emit(`;
`),a+1}case"prop":return this.emit(`${s.isStatic?"static ":""}${this.mangle(s.name)};
`),this.matching(s.bodyOpen)+1;case"method":case"ctor":{const a=s.parenIdx,o=this.matching(a),c=o+1;if(this.val(c)!=="{"){if(this.val(c)===";")return c+1;this.err(`Expected '{' to start the body of method '${s.name}'`,c)}this.scopes.push(new Set);const l=s.kind==="ctor";this.emit(`${s.isStatic?"static ":""}${l?"constructor":this.mangle(s.name)}(`),this.emitParams(a,o),this.emit(") ");const u=this.matching(c);let p=!1;for(let x=c;x<u;x++)this.lv(x)==="super"&&(p=!0);const h=l&&r&&!p?" super();":"",g=this.emitBlock(c,h);return this.scopes.pop(),l||!(s.typeEnd===s.typeStart+1&&this.lv(s.typeStart)==="void")&&!this.blockInfo(c).term&&this.err(`Missing return statement in method '${s.name}' — every code path must return a value`,u),g}}}emitParams(t,n){let r=t+1;const s=r;for(;r<n;){for(;this.lv(r)==="final";)r++;const a=this.parseType(r);(a===null||!this.isId(a)||a>=n)&&this.err(`Invalid parameter declaration near '${this.val(r)}'`,r),this.declare(this.val(a)),r!==s&&this.emit(", "),this.emit(this.mangle(this.val(a))),r=a+1,this.val(r)===","?r++:r<n&&this.err(`Expected ',' or ')' in parameter list but found '${this.val(r)}'`,r)}}emitBlock(t,n=""){const r=this.matching(t);this.emit("{"+n+`
`),this.scopes.push(new Set);let s=t+1;for(;s<r;)s=this.emitStatement(s);return this.scopes.pop(),this.emit(`}
`),r+1}emitStatement(t){const n=this.toks[t],r=Qt(n.v);if(n.t==="op"){if(n.v===";")return this.emit(`;
`),t+1;if(n.v==="{")return this.emitBlock(t);if(n.v==="@"){let a=t+2;return this.val(a)==="("&&(a=this.matching(a)+1),a}}if(n.t==="id"){switch(r){case"else":return this.err("Unexpected `else` — an `else` / `else if` must directly follow an `if` block (is the matching `if` missing or already closed?)",t);case"catch":case"finally":return this.err(`Unexpected \`${r}\` without a matching \`try\` block`,t);case"if":{this.val(t+1)!=="("&&this.err("Expected '(' after 'if'",t);const o=this.matching(t+1);this.emit("if ("),this.emitExpr(t+2,o),this.emit(") ");let c=this.emitStatement(o+1);return this.lv(c)==="else"&&(this.emit("else "),c=this.emitStatement(c+1)),c}case"while":{this.val(t+1)!=="("&&this.err("Expected '(' after 'while'",t);const o=this.matching(t+1);return this.emit("while ("),this.emitExpr(t+2,o),this.emit(") "),this.emitStatement(o+1)}case"do":{this.emit("do ");const o=this.emitStatement(t+1);(this.lv(o)!=="while"||this.val(o+1)!=="(")&&this.err("Expected 'while (...)' after do-block",o);const c=this.matching(o+1);return this.emit("while ("),this.emitExpr(o+2,c),this.emit(`);
`),this.val(c+1)!==";"&&this.err("Missing ';' after do-while",c),c+2}case"for":return this.emitFor(t);case"try":return this.emitTry(t);case"switch":return this.emitSwitch(t);case"return":case"throw":{const o=this.findStmtEnd(t);return this.emit(r),o>t+1&&(this.emit(" "),this.emitExpr(t+1,o)),this.emit(`;
`),o+1}case"break":case"continue":return this.val(t+1)!==";"&&this.err(`Missing ';' after '${r}'`,t),this.emit(r+`;
`),t+2}if(DS.has(r)&&(this.isId(t+1)||this.val(t+1)==="[")){const o=this.findStmtEnd(t);return this.emit(`__rt.dml('${r}', `),this.emitExpr(t+1,o),this.emit(`);
`),o+1}const a=this.isDecl(t);if(a){const o=this.findStmtEnd(t);return this.declare(this.val(a.nameIdx)),this.emit(`let ${this.mangle(this.val(a.nameIdx))} `),this.emitExpr(a.nameIdx+1,o),this.emit(`;
`),o+1}}const s=this.findStmtEnd(t);return this.emitExpr(t,s),this.emit(`;
`),s+1}emitFor(t){this.val(t+1)!=="("&&this.err("Expected '(' after 'for'",t);const n=this.matching(t+1);this.scopes.push(new Set);let r=t+2;for(;this.lv(r)==="final";)r++;const s=this.parseType(r);if(s!==null&&this.isId(s)&&this.val(s+1)===":"){const g=this.val(s);this.declare(g),this.emit(`for (const ${this.mangle(g)} of `),this.emitExpr(s+2,n),this.emit(") ");const x=this.emitStatement(n+1);return this.scopes.pop(),x}const a=[];let o=0,c=t+2;for(let g=t+2;g<n;g++){const x=this.toks[g];x.t==="op"&&(x.v==="("||x.v==="["||x.v==="{"?o++:x.v===")"||x.v==="]"||x.v==="}"?o--:x.v===";"&&o===0&&(a.push([c,g]),c=g+1))}a.push([c,n]),a.length!==3&&this.err("A 'for' loop needs three parts separated by ';'",t),this.emit("for (");const[l,u,p]=a;if(l[0]<l[1]){const g=this.isDecl(l[0]);g?(this.declare(this.val(g.nameIdx)),this.emit(`let ${this.mangle(this.val(g.nameIdx))} `),this.emitExpr(g.nameIdx+1,l[1])):this.emitExpr(l[0],l[1])}this.emit("; "),this.emitExpr(u[0],u[1]),this.emit("; "),this.emitExpr(p[0],p[1]),this.emit(") ");const h=this.emitStatement(n+1);return this.scopes.pop(),h}emitTry(t){this.val(t+1)!=="{"&&this.err("Expected '{' after 'try'",t),this.emit("try ");let n=this.emitBlock(t+1);const r=[];for(;this.lv(n)==="catch";){this.val(n+1)!=="("&&this.err("Expected '(' after 'catch'",n);const a=this.matching(n+1),o=this.parseType(n+2);(o===null||!this.isId(o)||o+1!==a)&&this.err("Invalid catch clause — expected 'catch (ExceptionType name)'",n),this.val(a+1)!=="{"&&this.err("Expected '{' after catch clause",a),r.push({type:this.val(n+2),name:this.val(o),open:a+1}),n=this.matching(a+1)+1}if(r.length){this.emit(`catch (__ex) {
const __w = __rt.wrap(__ex);
`);for(const a of r)this.emit(`if (__rt.isA(__w, '${a.type}')) `),this.scopes.push(new Set([a.name])),this.emitBlock(a.open,` const ${this.mangle(a.name)} = __w;`),this.scopes.pop(),this.emit("else ");this.emit(`{ throw __ex; }
}
`)}let s=!1;return this.lv(n)==="finally"&&(this.val(n+1)!=="{"&&this.err("Expected '{' after 'finally'",n),this.emit("finally "),n=this.emitBlock(n+1),s=!0),!r.length&&!s&&this.err("A 'try' block needs a 'catch' or 'finally'",t),n}emitSwitch(t){this.lv(t+1)!=="on"&&this.err("Expected 'switch on <expression>'",t);let n=t+2;for(;n<this.toks.length&&this.val(n)!=="{";)n++;const r=n,s=this.matching(r),a=`__sw${this.swCounter++}`;this.emit(`{ const ${a} = (`),this.emitExpr(t+2,r),this.emit(`);
`);let o=r+1,c=!0;for(;o<s;){this.lv(o)!=="when"&&this.err(`Expected 'when' inside switch but found '${this.val(o)}'`,o);let l=o+1;for(;l<s&&this.val(l)!=="{";)l++;if(this.lv(o+1)==="else")this.emit(c?"":"else "),o=this.emitBlock(l);else{const u=[];for(const[p,h]of this.splitTop(o+1,l))if(h-p===1&&this.isId(p)&&!["null","true","false"].includes(this.lv(p)))u.push(`'${this.val(p)}'`);else{const g=this.out;this.out=[],this.emitExpr(p,h),u.push(this.out.join("")),this.out=g}this.emit(`${c?"":"else "}if (__rt.swIn(${a}, [${u.join(", ")}])) `),o=this.emitBlock(l)}c=!1}return this.emit(`}
`),s+1}emitExpr(t,n){let r=t;for(;r<n;){const s=this.toks[r];if(s.t==="id"){if(Qt(s.v)==="new"){r=this.emitNew(r);continue}this.emitIdent(r),r++;continue}if(s.t==="num"){this.emit(s.v.replace(/[LlDd]$/,"")+" "),r++;continue}if(s.t==="str"){this.emit(s.v+" "),r++;continue}if(s.v==="["&&["select","find"].includes(this.lv(r+1))){r=this.matching(r)+1,this.emit("__rt.soql() ");continue}if(s.v==="("&&this.isCast(r)){r=this.matching(r)+1;continue}s.v==="=>"&&this.err("Unexpected '=>' — it is only valid inside a Map initializer { key => value }",r),this.emit(s.v+" "),r++}}isCast(t){const n=this.toks[t-1];if(n&&(n.t==="id"&&!Ja.has(Qt(n.v))||n.t==="num"||n.t==="str"||n.v===")"||n.v==="]"))return!1;const r=this.parseType(t+1);if(r===null||this.val(r)!==")")return!1;const s=this.toks[r+1];return!s||s.t==="id"&&Qt(s.v)==="instanceof"?!1:s.t==="id"||s.t==="num"||s.t==="str"||s.v==="("}emitIdent(t){const r=this.toks[t].v,s=Qt(r),a=this.toks[t-1],o=this.toks[t+1];if(!!a&&(a.v==="."||a.v==="?.")){if((o==null?void 0:o.v)==="("&&this.val(t+2)===")"&&Mp[s]){this.emit(Mp[s]+" ");return}if((o==null?void 0:o.v)==="("&&_p[s]){this.emit(_p[s]+" ");return}this.emit(r+" ");return}if(s==="null"||s==="true"||s==="false"){this.emit(s+" ");return}if(Rp[r]&&(o==null?void 0:o.v)==="."){this.emit(Rp[r]+" ");return}if(this.cur&&!this.inScope(r)){const l=this.lookupMember(r);if(l==="static"){this.emit(`${this.cur.name}.${this.mangle(r)} `);return}if(l==="inst"){this.emit(`this.${this.mangle(r)} `);return}}this.emit(this.mangle(r)+" ")}emitList(t,n){this.splitTop(t,n).filter(([s,a])=>a>s).forEach(([s,a],o)=>{o&&this.emit(", "),this.emitExpr(s,a)})}emitNew(t){const n=this.parseType(t+1);if(n===null)return this.err("Expected a type after 'new'",t);let r=this.val(t+1),s=t+2;for(;this.val(s)==="."&&this.isId(s+1);)r=this.val(s+1),s+=2;const a=Qt(r),o=this.val(n-1)==="]",c=this.val(n);if(a==="list"||o){if(c==="{"){const u=this.matching(n);return this.emit("["),this.emitList(n+1,u),this.emit("] "),u+1}if(c==="("){const u=this.matching(n);return u===n+1?this.emit("[] "):(this.emit("__rt.list("),this.emitList(n+1,u),this.emit(") ")),u+1}return this.emit("[] "),n}if(a==="set"){if(c==="{"){const u=this.matching(n);return this.emit("new Set(["),this.emitList(n+1,u),this.emit("]) "),u+1}if(c==="("){const u=this.matching(n);return this.emit("new Set("),this.emitList(n+1,u),this.emit(") "),u+1}}if(a==="map"){if(c==="{"){const u=this.matching(n);return this.emit("new Map(["),this.splitTop(n+1,u).filter(([h,g])=>g>h).forEach(([h,g],x)=>{let C=-1,S=0;for(let w=h;w<g;w++){const f=this.toks[w];if(f.t==="op"){if(f.v==="("||f.v==="["||f.v==="{")S++;else if(f.v===")"||f.v==="]"||f.v==="}")S--;else if(f.v==="=>"&&S===0){C=w;break}}}C<0&&this.err("Map initializer entries must look like 'key => value'",h),x&&this.emit(", "),this.emit("["),this.emitExpr(h,C),this.emit(", "),this.emitExpr(C+1,g),this.emit("]")}),this.emit("]) "),u+1}if(c==="("){const u=this.matching(n);return u===n+1?this.emit("new Map() "):(this.emit("__rt.mapFrom("),this.emitList(n+1,u),this.emit(") ")),u+1}}c!=="("&&this.err(`Expected '(' after 'new ${r}'`,n);const l=this.matching(n);return this.classes.has(r)?(this.emit(`new ${r}(`),this.emitList(n+1,l),this.emit(") "),l+1):a.endsWith("exception")?(this.emit(`__rt.newEx('${r}'`),l>n+1&&(this.emit(", "),this.emitList(n+1,l)),this.emit(") "),l+1):l>n+1&&this.isId(n+1)&&this.val(n+2)==="="?(this.emit("({ "),this.splitTop(n+1,l).forEach(([u,p],h)=>{(!this.isId(u)||this.val(u+1)!=="=")&&this.err(`Expected 'Field = value' inside new ${r}(...)`,u),h&&this.emit(", "),this.emit(`${this.val(u)}: `),this.emitExpr(u+2,p)}),this.emit(" }) "),l+1):(this.emit("({}) "),l+1)}blockInfo(t){const n=this.matching(t);let r=t+1,s=!1;for(;r<n;){const a=this.stmtInfo(r);a.term&&(s=!0),r=a.end}return{end:n+1,term:s}}stmtInfo(t){const n=this.lv(t);if(this.val(t)==="{")return this.blockInfo(t);if(this.val(t)==="@"){let s=t+2;return this.val(s)==="("&&(s=this.matching(s)+1),{end:s,term:!1}}if(n==="if"&&this.val(t+1)==="("){const s=this.stmtInfo(this.matching(t+1)+1);if(this.lv(s.end)==="else"){const a=this.stmtInfo(s.end+1);return{end:a.end,term:s.term&&a.term}}return{end:s.end,term:!1}}if((n==="for"||n==="while")&&this.val(t+1)==="("){const s=this.matching(t+1),a=this.stmtInfo(s+1),o=n==="while"&&s===t+3&&this.lv(t+2)==="true";return{end:a.end,term:o}}if(n==="do"){const s=this.stmtInfo(t+1);return{end:this.matching(s.end+1)+2,term:s.term}}if(n==="try"&&this.val(t+1)==="{"){const s=this.blockInfo(t+1);let a=s.end,o=!0;for(;this.lv(a)==="catch";){const l=this.matching(a+1),u=this.blockInfo(l+1);o=o&&u.term,a=u.end}let c=!1;if(this.lv(a)==="finally"){const l=this.blockInfo(a+1);c=l.term,a=l.end}return{end:a,term:s.term&&o||c}}if(n==="switch"){let s=t+1;for(;s<this.toks.length&&this.val(s)!=="{";)s++;const a=this.matching(s);let o=s+1,c=!0,l=!1;for(;o<a;)if(this.lv(o)==="when"){this.lv(o+1)==="else"&&(l=!0);let u=o+1;for(;u<a&&this.val(u)!=="{";)u++;const p=this.blockInfo(u);c=c&&p.term,o=p.end}else o++;return{end:a+1,term:l&&c}}return{end:this.findStmtEnd(t)+1,term:n==="return"||n==="throw"}}}function mu(e){try{const t=Pg(e);return t.length===0?{error:"Compilation Error: The editor is empty — write some Apex code first."}:{error:null,jsCode:new NS(t).compile()}}catch(t){return t instanceof An?{error:`Compilation Error: ${t.message} (line ${t.line})`}:{error:`Compilation Error: ${t instanceof Error?t.message:String(t)}`}}}function Fn(e){const t=IS(e);if(t)return t;const{jsCode:n,error:r}=mu(e);if(r)return r;try{return new Function("__rt",`"use strict";
${n}`),null}catch(s){if(s instanceof SyntaxError){const a=/Identifier '(\w+?)_?' has already been declared/.exec(s.message);return a?`Compilation Error: Duplicate variable: ${a[1]} — a variable with this name is already declared in this scope.`:`Compilation Error: Invalid syntax — ${s.message}.`}return null}}class js extends Error{constructor(n){super(n==null?"":String(n));Wt(this,"typeName");this.typeName=new.target.name==="ApexException"?"Exception":new.target.name}getMessage(){return this.message}getTypeName(){return this.typeName}setMessage(n){this.message=n}getCause(){return null}getStackTraceString(){return""}}function Sn(e,t){const n=new js(t);return n.typeName=e,n}function Ke(e){if(e==null)return"null";if(Array.isArray(e))return"("+e.map(Ke).join(", ")+")";if(e instanceof Set)return"{"+[...e].map(Ke).join(", ")+"}";if(e instanceof Map)return"{"+[...e.entries()].map(([t,n])=>`${Ke(t)}=${Ke(n)}`).join(", ")+"}";if(e instanceof Date)return e.toISOString().replace("T"," ").replace(/\.\d+Z$/,"");if(typeof e=="object")try{return JSON.stringify(e)}catch{return String(e)}return String(e)}function kS(e,t){return typeof e=="number"&&typeof t=="number"?e-t:String(e)<String(t)?-1:String(e)>String(t)?1:0}const hc=[];function qg(){for(const[e,t]of hc)try{delete e[t]}catch{}hc.length=0,mc=!1}let mc=!1;function RS(){if(mc)return;mc=!0;const e=(l,u,p)=>{Object.prototype.hasOwnProperty.call(l,u)||(Object.defineProperty(l,u,{value:p,configurable:!0,writable:!0,enumerable:!1}),hc.push([l,u]))},t=Array.prototype,n=Set.prototype,r=Map.prototype,s=String.prototype,a=Number.prototype,o=Date.prototype,c=Error.prototype;e(t,"__size",function(){return this.length}),e(t,"__sort",function(){this.sort(kS)}),e(t,"__add",function(l,u){if(arguments.length>=2){this.splice(l,0,u);return}return this.push(l),!0}),e(t,"get",function(l){if(l<0||l>=this.length)throw Sn("ListException",`List index out of bounds: ${l}`);return this[l]}),e(t,"set",function(l,u){if(l<0||l>=this.length)throw Sn("ListException",`List index out of bounds: ${l}`);this[l]=u}),e(t,"contains",function(l){return this.includes(l)}),e(t,"remove",function(l){return this.splice(l,1)[0]}),e(t,"isEmpty",function(){return this.length===0}),e(t,"addAll",function(l){return this.push(...Array.from(l)),!0}),e(t,"clear",function(){this.length=0}),e(t,"clone",function(){return this.slice()}),e(n,"__size",function(){return this.size}),e(n,"__add",function(l){const u=this.has(l);return this.add(l),!u}),e(n,"contains",function(l){return this.has(l)}),e(n,"remove",function(l){return this.delete(l)}),e(n,"isEmpty",function(){return this.size===0}),e(n,"addAll",function(l){let u=!1;for(const p of Array.from(l))this.has(p)||(this.add(p),u=!0);return u}),e(n,"containsAll",function(l){return Array.from(l).every(u=>this.has(u))}),e(n,"removeAll",function(l){for(const u of Array.from(l))this.delete(u);return!0}),e(n,"retainAll",function(l){const u=new Set(Array.from(l));for(const p of[...this])u.has(p)||this.delete(p);return!0}),e(n,"clone",function(){return new Set(this)}),e(r,"__size",function(){return this.size}),e(r,"__values",function(){return Array.from(this.values())}),e(r,"put",function(l,u){const p=this.get(l);return this.set(l,u),p}),e(r,"containsKey",function(l){return this.has(l)}),e(r,"keySet",function(){return new Set(this.keys())}),e(r,"isEmpty",function(){return this.size===0}),e(r,"remove",function(l){const u=this.get(l);return this.delete(l),u}),e(r,"putAll",function(l){for(const[u,p]of l)this.set(u,p)}),e(r,"clone",function(){return new Map(this)}),e(s,"__size",function(){return this.length}),e(s,"__replace",function(l,u){return this.split(l).join(u)}),e(s,"__replaceAll",function(l,u){return this.replace(new RegExp(l,"g"),u)}),e(s,"__replaceFirst",function(l,u){return this.replace(new RegExp(l),u)}),e(s,"__split",function(l){const u=this.split(new RegExp(l));for(;u.length>1&&u[u.length-1]==="";)u.pop();return u}),e(s,"contains",function(l){return this.includes(l)}),e(s,"equals",function(l){return this.valueOf()===l}),e(s,"equalsIgnoreCase",function(l){return l!=null&&this.toLowerCase()===String(l).toLowerCase()}),e(s,"containsIgnoreCase",function(l){return this.toLowerCase().includes(String(l).toLowerCase())}),e(s,"startsWithIgnoreCase",function(l){return this.toLowerCase().startsWith(String(l).toLowerCase())}),e(s,"isNumeric",function(){return/^\d+$/.test(this)}),e(s,"isBlank",function(){return this.trim()===""}),e(s,"isNotBlank",function(){return this.trim()!==""}),e(s,"capitalize",function(){return this.charAt(0).toUpperCase()+this.slice(1)}),e(s,"left",function(l){return this.slice(0,l)}),e(s,"right",function(l){return l<=0?"":this.slice(-l)}),e(s,"substringBefore",function(l){const u=this.indexOf(l);return u<0?"":this.slice(0,u)}),e(s,"substringAfter",function(l){const u=this.indexOf(l);return u<0?"":this.slice(u+l.length)}),e(s,"deleteWhitespace",function(){return this.replace(/\s+/g,"")}),e(a,"setScale",function(l){return Number(this.toFixed(l))}),e(a,"intValue",function(){return Math.trunc(this)}),e(a,"longValue",function(){return Math.trunc(this)}),e(a,"doubleValue",function(){return Number(this)}),e(a,"round",function(){return Math.round(this)}),e(a,"abs",function(){return Math.abs(this)}),e(o,"addDays",function(l){const u=new Date(this);return u.setDate(u.getDate()+l),u}),e(o,"addMonths",function(l){const u=new Date(this);return u.setMonth(u.getMonth()+l),u}),e(o,"addYears",function(l){const u=new Date(this);return u.setFullYear(u.getFullYear()+l),u}),e(o,"addHours",function(l){return new Date(this.getTime()+l*36e5)}),e(o,"addMinutes",function(l){return new Date(this.getTime()+l*6e4)}),e(o,"daysBetween",function(l){return Math.round((l.getTime()-this.getTime())/864e5)}),e(o,"date",function(){return this}),e(o,"year",function(){return this.getFullYear()}),e(o,"month",function(){return this.getMonth()+1}),e(o,"day",function(){return this.getDate()}),e(c,"getMessage",function(){return this.message})}function Bg(){RS();const e=[],t=r=>{throw Sn("AssertException",r)};return{output:e,Exception:js,newEx:Sn,wrap(r){return r instanceof js?r:r instanceof TypeError&&/null|undefined/.test(r.message)&&/Cannot (read|set)/.test(r.message)?Sn("NullPointerException","Attempt to de-reference a null object"):Sn("Exception",r instanceof Error?r.message:String(r))},isA(r,s){if(r==null)return!1;if(s==="Exception")return!0;if(r instanceof js){if(r.typeName===s)return!0;let a=Object.getPrototypeOf(r);for(;a;){if(a.constructor&&a.constructor.name===s)return!0;a=Object.getPrototypeOf(a)}}return!1},list(r){return r==null?[]:Array.from(r)},mapFrom(r){return r instanceof Map?new Map(r):new Map},swIn(r,s){return s.some(a=>a===r||typeof a=="string"&&typeof r=="string"&&a.toLowerCase()===r.toLowerCase())},soql(){return[]},dml(r,s){},Trigger:{new:[],old:[],newMap:new Map,oldMap:new Map,isInsert:!1,isUpdate:!1,isDelete:!1,isBefore:!1,isAfter:!1,size:0},S:{isBlank:r=>r==null||String(r).trim()==="",isNotBlank:r=>r!=null&&String(r).trim()!=="",isEmpty:r=>r==null||String(r)==="",isNotEmpty:r=>r!=null&&String(r)!=="",valueOf:r=>Ke(r),join:(r,s)=>Array.from(r).join(s),escapeSingleQuotes:r=>r.replace(/'/g,"\\'")},I:{valueOf:r=>{const s=Number(r);if(Number.isNaN(s))throw Sn("TypeException",`Invalid integer: ${r}`);return Math.trunc(s)},MAX_VALUE:2147483647,MIN_VALUE:-2147483648},D:{valueOf:r=>{const s=Number(r);if(Number.isNaN(s))throw Sn("TypeException",`Invalid decimal: ${r}`);return s}},B:{valueOf:r=>String(r).toLowerCase()==="true"},Date:{today:()=>{const r=new Date;return r.setHours(0,0,0,0),r},newInstance:(r,s,a)=>new Date(r,s-1,a)},DateTime:{now:()=>new Date,newInstance:(r,s,a,o=0,c=0,l=0)=>new Date(r,s-1,a,o,c,l)},Math:{abs:Math.abs,max:Math.max,min:Math.min,floor:Math.floor,ceil:Math.ceil,pow:Math.pow,sqrt:Math.sqrt,round:r=>Math.round(r),mod:(r,s)=>r%s,signum:Math.sign},System:{debug:(...r)=>{e.push(Ke(r[r.length-1]))},assertEquals:(r,s,a)=>{Ke(r)!==Ke(s)&&t(a??`Assertion Failed: Expected: ${Ke(r)}, Actual: ${Ke(s)}`)},assertNotEquals:(r,s,a)=>{Ke(r)===Ke(s)&&t(a??`Assertion Failed: Expected not: ${Ke(r)}`)},assert:(r,s)=>{r!==!0&&t(s??"Assertion Failed")},now:()=>new Date,currentTimeMillis:()=>Date.now()},Limits:{getQueries:()=>0,getLimitQueries:()=>100,getDmlStatements:()=>0,getLimitDmlStatements:()=>150}}}function Fg(e){if(e instanceof js)return`Runtime Error: System.${e.typeName}: ${e.message}`;if(e instanceof TypeError){if(/Cannot (read|set) propert/.test(e.message))return"Runtime Error: System.NullPointerException: Attempt to de-reference a null object";const t=/(?:\.|^)(\w+?)_? is not a function/.exec(e.message);return t?`Compilation Error: Method does not exist or incorrect signature: ${t[1]}()`:/is not iterable/.test(e.message)?"Runtime Error: System.NullPointerException: Attempt to iterate over a null collection":`Runtime Error: ${e.message}`}if(e instanceof ReferenceError){const t=/(\w+?)_? is not defined/.exec(e.message);return`Compilation Error: Variable does not exist: ${t?t[1]:e.message}`}return`Runtime Error: ${e instanceof Error?e.message:String(e)}`}function jp(e){const t=Fn(e);if(t)return{output:[],error:t};const{jsCode:n}=mu(e),r=Bg();try{return new Function("__rt",`"use strict";
${n}`)(r),{output:r.output,error:null}}catch(s){return{output:r.output,error:Fg(s)}}finally{qg()}}function MS(e,t){if(e===t)return!0;const n=Number(e),r=Number(t);return e!==""&&t!==""&&!Number.isNaN(n)&&!Number.isNaN(r)&&Math.abs(n-r)<1e-9}function Ug(e,t){const n=(u,p=[])=>({scenarioId:t.id,passed:!1,actualOutput:p,expectedOutput:t.expectedReturn!==void 0?[String(t.expectedReturn)]:t.expectedOutput,error:u}),r=Fn(e);if(r)return n(r);const{jsCode:s,error:a}=mu(e);if(a)return n(a);const o=Object.keys(t.inputs??{}),c=Object.values(t.inputs??{}),l=Bg();try{const u=t.methodCall?`
const __returnValue = ${t.methodCall};
return __returnValue;`:`
return undefined;`,h=new Function("__rt",...o,`"use strict";
${s}${u}`)(l,...c);if(t.expectedReturn!==void 0){const S=(h==null?"null":Ke(h)).trim(),w=String(t.expectedReturn).trim();return{scenarioId:t.id,passed:MS(S,w),actualOutput:[S],expectedOutput:[w],error:null}}const g=l.output.map(S=>String(S).trim()),x=t.expectedOutput.map(S=>S.trim()),C=x.length>0&&x.every(S=>g.some(w=>w.toLowerCase()===S.toLowerCase()));return{scenarioId:t.id,passed:C,actualOutput:g,expectedOutput:x,error:null}}catch(u){return n(Fg(u),l.output)}finally{qg()}}function _S(e){return e.split(`
`).map(t=>{const n=t.indexOf("//");return n>=0?t.substring(0,n):t}).join(`
`)}function jS(e,t){try{const n=_S(e);if(t.outputPatterns&&t.outputPatterns.length>0){const s=t.outputPatterns.some(a=>new RegExp(a,"im").test(n));return{passed:s,message:s?"Passed":t.errorMessage}}const r=new RegExp(t.pattern,"im").test(n);return{passed:r,message:r?"Passed":t.errorMessage}}catch{return{passed:!1,message:"Test case error"}}}const PS={beginner:{label:"Beginner",color:"text-green-600 bg-green-50 border-green-200",xp:150},intermediate:{label:"Intermediate",color:"text-yellow-600 bg-yellow-50 border-yellow-200",xp:200},advanced:{label:"Advanced",color:"text-red-600 bg-red-50 border-red-200",xp:300}};function Wg({challenge:e,isCompleted:t,savedCode:n,onComplete:r}){var le;const[s,a]=b.useState(n??e.starterCode),[o,c]=b.useState(-1),[l,u]=b.useState(!1),[p,h]=b.useState(null),[g,x]=b.useState(!1),[C,S]=b.useState(!1),[w,f]=b.useState(!1),[m,y]=b.useState(!1),[T,L]=b.useState(!1),E=b.useRef(0),D=b.useRef(null),[k,U]=b.useState(-1),M=k===E.current&&D.current===s,[K,Se]=b.useState(null),[ne,fe]=b.useState(0),[P,V]=b.useState(null),[re,R]=b.useState(0),q=PS[e.difficulty],F=(((le=e.scenarios)==null?void 0:le.length)??0)>0,B=(K==null?void 0:K.every(Q=>Q.passed))??!1,$=(K==null?void 0:K.filter(Q=>Q.passed).length)??0,te=(P==null?void 0:P.every(Q=>Q.passed))??!1,Ce=(P==null?void 0:P.filter(Q=>Q.passed).length)??0,Be=()=>{const Q=++E.current;D.current=s;const J=Fn(s);h(J),Se(null),V(null),x(!0),S(!0),y(!1),U(Q)},rt=()=>{const Q=++E.current;D.current=s,S(!1);const J=Fn(s);if(J){h(J),Se(null),V(null),x(!0),y(!1),U(Q);return}if(h(null),F){const jt=e.scenarios.map(mt=>Ug(s,mt));Se(jt),V(null),fe(0),x(!0),U(Q);const Ye=jt.every(mt=>mt.passed);y(Ye),Ye&&(r(s),t||(f(!0),setTimeout(()=>f(!1),3e3)))}else{const jt=e.testCases.map((mt,gr)=>({...jS(s,mt),tcIndex:gr}));V(jt),Se(null),R(0),x(!0),U(Q);const Ye=jt.every(mt=>mt.passed);y(Ye),Ye&&(r(s),t||(f(!0),setTimeout(()=>f(!1),3e3)))}},_t=()=>{a(e.starterCode),Se(null),V(null),h(null),x(!1),U(-1),D.current=null,c(-1),u(!1),f(!1),y(!1)},ts=b.useCallback(()=>{navigator.clipboard.writeText(e.solution).then(()=>{L(!0),setTimeout(()=>L(!1),2e3)})},[e.solution]);return i.jsxs("div",{className:"space-y-4",children:[w&&i.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:i.jsxs("div",{className:"xp-burst-container",children:[i.jsxs("div",{className:"xp-burst-badge",children:[i.jsx(Ot,{className:"w-8 h-8 text-yellow-400 mb-1"}),i.jsxs("div",{className:"text-2xl font-black text-yellow-300",children:["+",q.xp," XP"]}),i.jsx("div",{className:"text-sm text-yellow-200 font-semibold",children:"Challenge Complete!"})]}),[...Array(12)].map((Q,J)=>i.jsx("div",{className:"confetti-dot",style:{"--angle":`${J*30}deg`,"--delay":`${J*.05}s`,"--color":["#f59e0b","#10b981","#3b82f6","#ec4899","#8b5cf6"][J%5]}},J))]})}),i.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 p-4 bg-gradient-to-r from-sf-blue/5 to-sf-teal/5 border border-sf-blue/20 rounded-xl",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-sf-blue flex items-center justify-center shadow",children:i.jsx(da,{className:"w-5 h-5 text-white"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[i.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sf-blue",children:"Coding Challenge"}),i.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full border ${q.color}`,children:q.label}),F&&i.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full border text-purple-600 bg-purple-50 border-purple-200",children:"Live Execution"})]}),i.jsx("div",{className:"text-sm text-sf-gray-6",children:F?`${e.scenarios.length} test scenario${e.scenarios.length>1?"s":""} — your code runs live`:`${e.testCases.length} test cases to pass`})]})]}),i.jsxs("div",{className:"flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:[i.jsx(mr,{className:"w-4 h-4 text-yellow-500"}),i.jsxs("span",{className:"text-sm font-bold text-yellow-700",children:["+",q.xp," XP"]}),(t||m)&&i.jsx(ze,{className:"w-4 h-4 text-green-500 ml-1"})]})]}),F?i.jsxs("div",{className:"flex items-start gap-2 bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-xs text-purple-700",children:[i.jsx(no,{size:14,className:"flex-shrink-0 mt-0.5"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Live execution."})," Your Apex code is transpiled to JavaScript and executed — Compile checks syntax, Run Tests executes your code against real inputs."]})]}):i.jsxs("div",{className:"flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs text-yellow-700",children:[i.jsx(pa,{size:14,className:"flex-shrink-0 mt-0.5"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Structural validation."})," Code patterns are checked against expected structure — real Apex runs in a Salesforce org."]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-9 mb-2",children:"Instructions"}),i.jsx("ol",{className:"space-y-1",children:e.instructions.map((Q,J)=>i.jsxs("li",{className:"text-sm text-sf-gray-7 flex items-start gap-2",children:[i.jsx("span",{className:"text-sf-blue font-bold flex-shrink-0 w-5 h-5 rounded-full bg-sf-blue/10 flex items-center justify-center text-xs",children:J+1}),Q]},J))})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[i.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"Your Code"}),i.jsxs("button",{onClick:_t,className:"flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors",children:[i.jsx(ro,{size:12}),"Reset"]})]}),i.jsxs("div",{className:"rounded-xl overflow-hidden border border-gray-700 shadow-sm",children:[i.jsx("div",{className:"flex items-center px-3 py-2 bg-[#1a1a2a]",children:i.jsx("span",{className:"text-xs text-gray-500 font-mono",children:"MyClass.apex"})}),i.jsx(jg,{height:"380px",defaultLanguage:"java",value:s,onChange:Q=>{a(Q??""),U(-1),D.current=null,Se(null),V(null),h(null),x(!1),y(!1)},theme:"vs-dark",options:{fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineHeight:22,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",padding:{top:12,bottom:12},renderLineHighlight:"line",overviewRulerLanes:0,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6},quickSuggestions:!1,tabSize:4,insertSpaces:!0,bracketPairColorization:{enabled:!0}}})]})]}),i.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[i.jsxs("button",{onClick:Be,className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-sf-blue border-2 border-sf-blue rounded-lg hover:bg-sf-blue/5 transition-colors",children:[i.jsx(lb,{size:15}),"Compile"]}),i.jsxs("button",{onClick:rt,className:"btn-primary flex items-center gap-2",children:[i.jsx(bg,{size:15}),"Run Tests"]}),o<e.hints.length-1&&i.jsxs("button",{onClick:()=>c(Q=>Math.min(Q+1,e.hints.length-1)),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors",children:[i.jsx(Kr,{size:14}),o===-1?"Show Hint":"Next Hint"]}),i.jsxs("button",{onClick:()=>u(!l),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[l?i.jsx(yg,{size:14}):i.jsx(Ri,{size:14}),l?"Hide":"View"," Solution"]})]}),g&&C&&!p&&M&&i.jsxs("div",{className:"border border-green-300 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:"px-4 py-3 bg-green-50 flex items-center gap-2",children:[i.jsx(ze,{size:18,className:"text-green-600"}),i.jsx("span",{className:"font-bold text-green-700",children:"Compilation Successful"}),i.jsx("span",{className:"text-sm text-green-600 ml-auto",children:"No syntax errors found"})]}),i.jsxs("div",{className:"px-4 py-3 text-sm text-sf-gray-6",children:["Your code structure looks valid. Click ",i.jsx("strong",{children:"Run Tests"})," to execute your code against the test cases."]})]}),g&&p&&M&&i.jsxs("div",{className:"border border-red-300 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:"px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(bt,{size:18,className:"text-red-500"}),i.jsx("span",{className:"font-bold text-red-700",children:"Compilation Failed"})]}),i.jsxs("span",{className:"text-sm text-red-500",children:["0 / ",F?e.scenarios.length:e.testCases.length," tests ran"]})]}),i.jsxs("div",{className:"p-4 space-y-2",children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 uppercase tracking-wide mb-1",children:"Error"}),i.jsx("pre",{className:"bg-red-950/10 border border-red-200 text-red-800 text-sm rounded-lg px-3 py-2 font-mono whitespace-pre-wrap leading-relaxed",children:p}),i.jsx("p",{className:"text-xs text-sf-gray-5 pt-1",children:"Fix the syntax error above, then click Run Tests again."})]})]}),g&&!C&&!p&&K&&F&&M&&i.jsxs("div",{className:"border border-gray-200 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:`px-4 py-3 flex items-center justify-between ${B?"bg-green-50 border-b border-green-200":"bg-red-50 border-b border-red-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[B?i.jsx(ze,{size:18,className:"text-green-600"}):i.jsx(bt,{size:18,className:"text-red-500"}),i.jsx("span",{className:`font-bold ${B?"text-green-700":"text-red-600"}`,children:B?"Accepted":"Wrong Answer"})]}),i.jsxs("span",{className:"text-sm text-sf-gray-6",children:[$," / ",K.length," tests passed"]})]}),i.jsx("div",{className:"flex border-b border-gray-200 bg-gray-50 overflow-x-auto",children:K.map((Q,J)=>i.jsxs("button",{onClick:()=>fe(J),className:`px-4 py-2 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${ne===J?"border-sf-blue text-sf-blue bg-white":"border-transparent text-sf-gray-5 hover:text-sf-gray-7"}`,children:[i.jsx("span",{className:`w-2 h-2 rounded-full ${Q.passed?"bg-green-500":"bg-red-500"}`}),e.scenarios[J].label]},J))}),K[ne]&&(()=>{const Q=K[ne],J=e.scenarios[ne];return i.jsxs("div",{className:"p-4 space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[Q.passed?i.jsx(ze,{size:14,className:"text-green-500"}):i.jsx(bt,{size:14,className:"text-red-500"}),i.jsx("span",{className:`text-sm font-semibold ${Q.passed?"text-green-700":"text-red-600"}`,children:Q.passed?"All checks passed":"Output mismatch"})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Input"}),i.jsx("pre",{className:"bg-gray-900 text-gray-100 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:J.inputDisplay})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Expected Output"}),i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:J.expectedOutput.join(`
`)})]}),i.jsxs("div",{children:[i.jsx("div",{className:`text-xs font-semibold mb-1 uppercase tracking-wide ${Q.passed?"text-green-600":"text-red-600"}`,children:"Your Output"}),Q.error?i.jsx("pre",{className:"bg-gray-900 text-red-400 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:Q.error}):Q.actualOutput.length>0?i.jsx("pre",{className:`bg-gray-900 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono ${Q.passed?"text-green-300":"text-orange-300"}`,children:Q.actualOutput.join(`
`)}):i.jsx("pre",{className:"bg-gray-900 text-gray-500 text-xs rounded-lg px-3 py-2 font-mono italic",children:"(no output — make sure System.debug() is called)"})]}),!Q.passed&&!Q.error&&i.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800",children:[i.jsx("strong",{children:"Tip:"})," Compare your output with the expected output above. Make sure your System.debug() statements produce the right values."]})]})})()]}),g&&!C&&!p&&P&&!F&&M&&i.jsxs("div",{className:"border border-gray-200 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:`px-4 py-3 flex items-center justify-between ${te?"bg-green-50 border-b border-green-200":"bg-red-50 border-b border-red-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[te?i.jsx(ze,{size:18,className:"text-green-600"}):i.jsx(bt,{size:18,className:"text-red-500"}),i.jsx("span",{className:`font-bold ${te?"text-green-700":"text-red-600"}`,children:te?"Accepted":"Wrong Answer"})]}),i.jsxs("span",{className:"text-sm text-sf-gray-6",children:[Ce," / ",P.length," tests passed"]})]}),i.jsx("div",{className:"flex border-b border-gray-200 bg-gray-50 overflow-x-auto",children:P.map((Q,J)=>i.jsxs("button",{onClick:()=>R(J),className:`px-4 py-2 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${re===J?"border-sf-blue text-sf-blue bg-white":"border-transparent text-sf-gray-5 hover:text-sf-gray-7"}`,children:[i.jsx("span",{className:`w-2 h-2 rounded-full ${Q.passed?"bg-green-500":"bg-red-500"}`}),"Case ",J+1]},J))}),P[re]&&(()=>{const Q=P[re],J=e.testCases[re];return i.jsxs("div",{className:"p-4 space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[Q.passed?i.jsx(ze,{size:14,className:"text-green-500"}):i.jsx(bt,{size:14,className:"text-red-500"}),i.jsx("span",{className:`text-sm font-semibold ${Q.passed?"text-green-700":"text-red-600"}`,children:J.description})]}),J.inputData&&i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Input"}),i.jsx("pre",{className:"bg-gray-900 text-gray-100 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:J.inputData})]}),J.expectedOutput&&i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Expected Output"}),i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:J.expectedOutput})]}),!Q.passed&&i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg px-3 py-2",children:[i.jsx("div",{className:"text-xs font-semibold text-red-600 mb-0.5 uppercase tracking-wide",children:"Hint"}),i.jsx("p",{className:"text-sm text-red-700",children:Q.message})]}),Q.passed&&i.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg px-3 py-2",children:i.jsx("p",{className:"text-sm text-green-700 font-medium",children:"All test conditions met."})})]})})()]}),o>=0&&i.jsx("div",{className:"space-y-2",children:e.hints.slice(0,o+1).map((Q,J)=>i.jsx("div",{className:"hint-box",children:i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx(Kr,{size:15,className:"text-yellow-600 flex-shrink-0 mt-0.5"}),i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsxs("strong",{children:["Hint ",J+1,":"]})," ",Q]})]})},J))}),l&&i.jsxs("div",{className:"border border-sf-gray-3 rounded-lg overflow-hidden",children:[i.jsxs("div",{className:"bg-sf-gray-9 px-4 py-2 flex items-center justify-between",children:[i.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Solution"}),i.jsxs("button",{onClick:ts,className:"flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors",children:[T?i.jsx(hg,{size:12,className:"text-green-400"}):i.jsx(gg,{size:12}),T?"Copied!":"Copy"]})]}),i.jsx("pre",{className:"code-block rounded-none text-sm overflow-x-auto",children:i.jsx("code",{children:e.solution})}),i.jsx("div",{className:"bg-blue-50 border-t border-blue-100 p-4",children:i.jsxs("p",{className:"text-sm text-sf-gray-7",children:[i.jsx("strong",{className:"text-sf-gray-9",children:"Explanation:"})," ",e.solutionExplanation]})})]}),m&&i.jsxs("div",{className:"success-box flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0",children:i.jsx(Ot,{size:20,className:"text-yellow-500"})}),i.jsxs("div",{children:[i.jsxs("p",{className:"text-sf-green font-semibold text-sm",children:["Challenge Complete! +",q.xp," XP earned"]}),i.jsx("p",{className:"text-green-700 text-xs",children:"Your submission has been saved. Keep going!"})]})]})]})}function Pp(e){const t=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>");return fv.sanitize(t,{ALLOWED_TAGS:["strong","br"],ALLOWED_ATTR:[]})}function qS({block:e}){const t={note:i.jsx(xg,{size:16,className:"text-sf-blue flex-shrink-0 mt-0.5"}),warning:i.jsx(pa,{size:16,className:"text-orange-500 flex-shrink-0 mt-0.5"}),tip:i.jsx(Kr,{size:16,className:"text-yellow-500 flex-shrink-0 mt-0.5"})},n={note:"note-box",warning:"warning-box",tip:"hint-box"};return e.type==="explanation"?i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-3",children:e.title}),i.jsx("p",{className:"text-sf-gray-7 leading-relaxed",dangerouslySetInnerHTML:{__html:Pp(e.text)}})]}):e.type==="example"?i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),e.text&&i.jsx("p",{className:"text-sf-gray-7 mb-3 leading-relaxed",children:e.text}),e.code&&i.jsxs("div",{className:"rounded-xl overflow-hidden border border-gray-200",children:[i.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),i.jsx("span",{className:"text-sf-gray-5 text-xs ml-2 font-mono",children:"Apex"})]}),i.jsx("pre",{className:"code-block rounded-none overflow-x-auto",children:i.jsx("code",{children:e.code})}),e.output&&i.jsxs("div",{className:"bg-gray-800 border-t border-gray-700 px-4 py-3",children:[i.jsx("div",{className:"text-xs text-sf-gray-5 mb-1 font-mono",children:"// Output:"}),i.jsx("pre",{className:"text-green-400 text-sm font-mono whitespace-pre-wrap",children:e.output})]})]})]}):e.type==="note"||e.type==="warning"||e.type==="tip"?i.jsx("div",{className:`${n[e.type]||"note-box"} lesson-section`,children:i.jsxs("div",{className:"flex items-start gap-2",children:[t[e.type],i.jsxs("div",{children:[e.title&&i.jsx("p",{className:"font-semibold text-sm mb-1",children:e.title}),i.jsx("p",{className:"text-sm leading-relaxed",dangerouslySetInnerHTML:{__html:Pp(e.text)}})]})]})}):i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),i.jsx("p",{className:"text-sf-gray-7",children:e.text})]})}function BS(){const{lessonId:e}=pu();to();const t=b.useContext(io),{progress:n,completeLesson:r,recordQuizScore:s,isLessonCompleted:a}=t,[o,c]=b.useState("lesson"),[l,u]=b.useState(!1),p=Cb(e||"");if(!p)return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[i.jsx("h2",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Lesson not found"}),i.jsx(oe,{to:"/apex",className:"text-sf-blue hover:underline",children:"Back to lessons"})]});const h=p.challengeId?wg(p.challengeId):null,g=a(p.id),x=!!n.quizScores[p.id],C=Gt,S=C.findIndex(L=>L.id===p.id),w=S>0?C[S-1]:null,f=S<C.length-1?C[S+1]:null,m=()=>{r(p.id)},y=(L,E)=>{s(p.id,L,E),u(!0),L===E&&r(p.id)},T=[{id:"lesson",label:"Lesson",icon:dn},{id:"quiz",label:`Quiz (${p.quiz.length}Q)`,icon:ze},...h?[{id:"challenge",label:"Challenge",icon:dt}]:[]];return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"flex items-center gap-1 text-sm text-sf-gray-5 mb-6",children:[i.jsx(oe,{to:"/apex",className:"hover:text-sf-blue",children:"Apex Path"}),i.jsx(Rt,{size:13}),i.jsx("span",{className:"text-sf-gray-7",children:p.title})]}),i.jsxs("div",{className:"card mb-6",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsxs("span",{className:"text-xs font-medium text-sf-blue bg-blue-50 px-2 py-0.5 rounded",children:["Lesson ",p.order]}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(ua,{size:11})," ",p.duration," min"]}),g&&i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-green font-medium",children:[i.jsx(ze,{size:12})," Completed"]})]}),i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:p.title}),i.jsx("p",{className:"text-sf-gray-6 mt-1",children:p.description})]}),!g&&i.jsxs("button",{onClick:m,className:"flex-shrink-0 flex items-center gap-1.5 text-sm text-sf-gray-6 border border-gray-200 hover:border-sf-green hover:text-sf-green px-3 py-1.5 rounded-lg transition-colors",children:[i.jsx(ze,{size:14}),"Mark done"]})]}),i.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[i.jsx("p",{className:"text-xs font-semibold text-sf-gray-7 mb-2",children:"You will learn:"}),i.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1",children:p.learningObjectives.map((L,E)=>i.jsxs("li",{className:"flex items-start gap-1.5 text-xs text-sf-gray-6",children:[i.jsx("span",{className:"text-sf-blue mt-0.5",children:"•"}),L]},E))})]})]}),i.jsx("div",{className:"flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit",children:T.map(({id:L,label:E,icon:D})=>i.jsxs("button",{onClick:()=>c(L),className:`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${o===L?"bg-white text-sf-gray-9 shadow-sm":"text-sf-gray-6 hover:text-sf-gray-9"}`,children:[i.jsx(D,{size:14}),E,L==="quiz"&&x&&i.jsxs("span",{className:"text-xs text-sf-green ml-1",children:[n.quizScores[p.id],"%"]})]},L))}),o==="lesson"&&i.jsxs("div",{className:"card",children:[p.content.map((L,E)=>i.jsx(qS,{block:L},E)),i.jsx("div",{className:"pt-6 border-t border-gray-100 mt-6",children:i.jsxs("button",{onClick:()=>c("quiz"),className:"btn-primary flex items-center gap-2",children:["Take the Quiz",i.jsx(Rt,{size:16})]})})]}),o==="quiz"&&i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-lg font-bold text-sf-gray-9 mb-4",children:"Knowledge Check"}),i.jsx(yv,{questions:p.quiz,lessonId:p.id,onComplete:y}),l&&h&&i.jsx("div",{className:"mt-6 pt-6 border-t border-gray-100",children:i.jsxs("button",{onClick:()=>c("challenge"),className:"btn-primary flex items-center gap-2",children:["Try the Challenge",i.jsx(dt,{size:16})]})})]}),o==="challenge"&&h&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"flex items-start justify-between mb-4",children:i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold text-sf-gray-9",children:h.title}),i.jsx("p",{className:"text-sf-gray-6 text-sm mt-1",children:h.description})]})}),i.jsx(Wg,{challenge:h,onComplete:L=>t.completeChallenge(h.id,L),isCompleted:t.isChallengeCompleted(h.id),savedCode:n.challengeSubmissions[h.id]})]}),i.jsxs("div",{className:"flex items-center justify-between mt-6",children:[w?i.jsxs(oe,{to:`/lesson/${w.id}`,className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue transition-colors",children:[i.jsx(mg,{size:16}),w.title]}):i.jsx("div",{}),f&&i.jsxs(oe,{to:`/lesson/${f.id}`,className:"flex items-center gap-2 text-sm text-sf-blue font-medium hover:text-sf-blue-dark",children:[f.title,i.jsx(Rt,{size:16})]})]})]})}const Hg=[{name:"Account",label:"Account",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Industry",type:"string"},{name:"AnnualRevenue",type:"number"},{name:"NumberOfEmployees",type:"number"},{name:"BillingCity",type:"string"},{name:"BillingState",type:"string"},{name:"Phone",type:"string"},{name:"Type",type:"string"}],records:[{Id:"001A000001",Name:"TechVentures Inc",Industry:"Technology",AnnualRevenue:5e6,NumberOfEmployees:250,BillingCity:"San Francisco",BillingState:"CA",Phone:"415-555-0101",Type:"Customer"},{Id:"001A000002",Name:"HealthFirst Corp",Industry:"Healthcare",AnnualRevenue:8e6,NumberOfEmployees:500,BillingCity:"Boston",BillingState:"MA",Phone:"617-555-0102",Type:"Customer"},{Id:"001A000003",Name:"Capital Group",Industry:"Finance",AnnualRevenue:12e6,NumberOfEmployees:800,BillingCity:"New York",BillingState:"NY",Phone:"212-555-0103",Type:"Customer"},{Id:"001A000004",Name:"RetailMax",Industry:"Retail",AnnualRevenue:3e6,NumberOfEmployees:120,BillingCity:"Chicago",BillingState:"IL",Phone:"312-555-0104",Type:"Partner"},{Id:"001A000005",Name:"ManuPro Industries",Industry:"Manufacturing",AnnualRevenue:65e5,NumberOfEmployees:400,BillingCity:"Detroit",BillingState:"MI",Phone:"313-555-0105",Type:"Customer"},{Id:"001A000006",Name:"DataStream Analytics",Industry:"Technology",AnnualRevenue:25e5,NumberOfEmployees:80,BillingCity:"Austin",BillingState:"TX",Phone:"512-555-0106",Type:"Prospect"},{Id:"001A000007",Name:"EduLearn Systems",Industry:"Education",AnnualRevenue:12e5,NumberOfEmployees:60,BillingCity:"Seattle",BillingState:"WA",Phone:"206-555-0107",Type:"Customer"},{Id:"001A000008",Name:"GreenPath Energy",Industry:"Energy",AnnualRevenue:9e6,NumberOfEmployees:350,BillingCity:"Houston",BillingState:"TX",Phone:"832-555-0108",Type:"Customer"},{Id:"001A000009",Name:"Apex Consulting",Industry:"Technology",AnnualRevenue:4e6,NumberOfEmployees:180,BillingCity:"Denver",BillingState:"CO",Phone:"303-555-0109",Type:"Partner"},{Id:"001A000010",Name:"MedDevice Corp",Industry:"Healthcare",AnnualRevenue:15e6,NumberOfEmployees:1200,BillingCity:"Minneapolis",BillingState:"MN",Phone:"612-555-0110",Type:"Customer"}]},{name:"Contact",label:"Contact",fields:[{name:"Id",type:"id"},{name:"FirstName",type:"string"},{name:"LastName",type:"string"},{name:"Email",type:"string"},{name:"Title",type:"string"},{name:"Department",type:"string"},{name:"Phone",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"003A000001",FirstName:"Sarah",LastName:"Chen",Email:"sarah.chen@techventures.com",Title:"CTO",Department:"Engineering",Phone:"415-555-1001",AccountId:"001A000001"},{Id:"003A000002",FirstName:"Michael",LastName:"Torres",Email:"mtorres@healthfirst.com",Title:"CFO",Department:"Finance",Phone:"617-555-1002",AccountId:"001A000002"},{Id:"003A000003",FirstName:"Amanda",LastName:"Johnson",Email:"ajohnson@capitalgroup.com",Title:"VP Sales",Department:"Sales",Phone:"212-555-1003",AccountId:"001A000003"},{Id:"003A000004",FirstName:"David",LastName:"Park",Email:"dpark@retailmax.com",Title:"CEO",Department:"Executive",Phone:"312-555-1004",AccountId:"001A000004"},{Id:"003A000005",FirstName:"Lisa",LastName:"Smith",Email:"lsmith@manupro.com",Title:"COO",Department:"Operations",Phone:"313-555-1005",AccountId:"001A000005"},{Id:"003A000006",FirstName:"James",LastName:"Wilson",Email:"jwilson@datastream.com",Title:"CTO",Department:"Technology",Phone:"512-555-1006",AccountId:"001A000006"},{Id:"003A000007",FirstName:"Emily",LastName:"Garcia",Email:"egarcia@edulearn.com",Title:"Director",Department:"Product",Phone:"206-555-1007",AccountId:"001A000007"},{Id:"003A000008",FirstName:"Robert",LastName:"Martinez",Email:"rmartinez@greenpath.com",Title:"CEO",Department:"Executive",Phone:"832-555-1008",AccountId:"001A000008"}]},{name:"Opportunity",label:"Opportunity",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Amount",type:"number"},{name:"StageName",type:"string"},{name:"CloseDate",type:"date"},{name:"Probability",type:"number"},{name:"AccountId",type:"id"},{name:"OwnerId",type:"id"}],records:[{Id:"006A000001",Name:"TechVentures Platform License",Amount:85e3,StageName:"Closed Won",CloseDate:"2024-01-15",Probability:100,AccountId:"001A000001",OwnerId:"USER001"},{Id:"006A000002",Name:"HealthFirst Analytics Suite",Amount:125e3,StageName:"Closed Won",CloseDate:"2024-02-28",Probability:100,AccountId:"001A000002",OwnerId:"USER002"},{Id:"006A000003",Name:"Capital Group Premium",Amount:25e4,StageName:"Negotiation/Review",CloseDate:"2024-04-30",Probability:70,AccountId:"001A000003",OwnerId:"USER001"},{Id:"006A000004",Name:"RetailMax Expansion",Amount:45e3,StageName:"Proposal/Price Quote",CloseDate:"2024-05-15",Probability:50,AccountId:"001A000004",OwnerId:"USER003"},{Id:"006A000005",Name:"ManuPro ERP Integration",Amount:175e3,StageName:"Qualification",CloseDate:"2024-06-30",Probability:30,AccountId:"001A000005",OwnerId:"USER002"},{Id:"006A000006",Name:"DataStream Pro License",Amount:35e3,StageName:"Closed Won",CloseDate:"2024-01-31",Probability:100,AccountId:"001A000006",OwnerId:"USER003"},{Id:"006A000007",Name:"EduLearn LMS Platform",Amount:28e3,StageName:"Closed Lost",CloseDate:"2024-02-15",Probability:0,AccountId:"001A000007",OwnerId:"USER001"},{Id:"006A000008",Name:"GreenPath Smart Metering",Amount:32e4,StageName:"Negotiation/Review",CloseDate:"2024-05-31",Probability:80,AccountId:"001A000008",OwnerId:"USER002"}]},{name:"Case",label:"Case",fields:[{name:"Id",type:"id"},{name:"CaseNumber",type:"string"},{name:"Subject",type:"string"},{name:"Status",type:"string"},{name:"Priority",type:"string"},{name:"Origin",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"500A000001",CaseNumber:"00001001",Subject:"API connection timeout error",Status:"Open",Priority:"High",Origin:"Web",AccountId:"001A000001"},{Id:"500A000002",CaseNumber:"00001002",Subject:"Report export failing",Status:"In Progress",Priority:"Medium",Origin:"Email",AccountId:"001A000002"},{Id:"500A000003",CaseNumber:"00001003",Subject:"User cannot log in",Status:"Closed",Priority:"Critical",Origin:"Phone",AccountId:"001A000003"},{Id:"500A000004",CaseNumber:"00001004",Subject:"Data import questions",Status:"Open",Priority:"Low",Origin:"Web",AccountId:"001A000004"},{Id:"500A000005",CaseNumber:"00001005",Subject:"Integration sync failure",Status:"Escalated",Priority:"High",Origin:"Email",AccountId:"001A000005"}]}];function FS(e){try{const n=e.trim().replace(/\s+/g," ").toUpperCase().match(/FROM\s+(\w+)/i);if(!n)return{records:[],error:"Missing FROM clause",rowCount:0};const r=n[1],s=Hg.find(C=>C.name.toUpperCase()===r.toUpperCase());if(!s)return{records:[],error:`Object '${r}' not found. Available: Account, Contact, Opportunity, Case`,rowCount:0};const a=e.match(/SELECT\s+([\s\S]+?)\s+FROM/i);if(!a)return{records:[],error:"Missing SELECT clause",rowCount:0};const c=a[1].split(",").map(C=>C.trim()),l=e.match(/LIMIT\s+(\d+)/i),u=l?parseInt(l[1]):200;let p=s.records.map(C=>({type:s.name,fields:C}));const h=e.match(/WHERE\s+([\s\S]+?)(?:\s+ORDER\s+BY|\s+LIMIT|\s+GROUP\s+BY|$)/i);if(h){const C=h[1].trim();p=US(p,C,s)}const g=e.match(/ORDER\s+BY\s+(\w+)(?:\s+(ASC|DESC))?/i);if(g){const C=g[1],S=(g[2]||"ASC").toUpperCase();p=p.sort((w,f)=>{const m=w.fields[C],y=f.fields[C];if(m==null&&y==null)return 0;if(m==null)return S==="ASC"?1:-1;if(y==null)return S==="ASC"?-1:1;if(typeof m=="number"&&typeof y=="number")return S==="ASC"?m-y:y-m;const T=String(m).toLowerCase(),L=String(y).toLowerCase();return S==="ASC"?T.localeCompare(L):L.localeCompare(T)})}p=p.slice(0,u);const x=p.map(C=>({type:C.type,fields:c.reduce((S,w)=>{if(w==="*"||w.toUpperCase()==="ID")S[w]=C.fields.Id||null;else{const f=Object.keys(C.fields).find(m=>m.toLowerCase()===w.toLowerCase());S[w]=f?C.fields[f]:null}return S},{})}));return{records:x,error:null,rowCount:x.length}}catch(t){return{records:[],error:`Query error: ${t instanceof Error?t.message:String(t)}`,rowCount:0}}}function US(e,t,n){return e.filter(r=>{try{const s=t.match(/^(\w+)\s*=\s*'([^']*)'$/i),a=t.match(/^(\w+)\s*!=\s*'([^']*)'$/i),o=t.match(/^(\w+)\s*>\s*(\d+(?:\.\d+)?)$/i),c=t.match(/^(\w+)\s*<\s*(\d+(?:\.\d+)?)$/i),l=t.match(/^(\w+)\s*>=\s*(\d+(?:\.\d+)?)$/i),u=t.match(/^(\w+)\s+LIKE\s+'([^']*)'/i),p=t.match(/^(\w+)\s+IN\s+\(([^)]+)\)/i),h=g=>{const x=Object.keys(r.fields).find(C=>C.toLowerCase()===g.toLowerCase());return x?r.fields[x]:null};if(s){const g=h(s[1]);return String(g).toLowerCase()===s[2].toLowerCase()}if(a){const g=h(a[1]);return String(g).toLowerCase()!==a[2].toLowerCase()}if(o){const g=h(o[1]);return typeof g=="number"&&g>parseFloat(o[2])}if(c){const g=h(c[1]);return typeof g=="number"&&g<parseFloat(c[2])}if(l){const g=h(l[1]);return typeof g=="number"&&g>=parseFloat(l[2])}if(u){const g=String(h(u[1])||"").toLowerCase(),x=u[2].toLowerCase().replace(/%/g,".*").replace(/_/g,".");return new RegExp("^"+x+"$").test(g)}if(p){const g=String(h(p[1])||"").toLowerCase();return p[2].split(",").map(C=>C.trim().replace(/'/g,"").toLowerCase()).includes(g)}return!0}catch{return!0}})}const qp=[{label:"All Accounts",query:`SELECT Id, Name, Industry, AnnualRevenue
FROM Account
LIMIT 10`},{label:"Tech Accounts",query:`SELECT Id, Name, AnnualRevenue, BillingCity
FROM Account
WHERE Industry = 'Technology'
ORDER BY AnnualRevenue DESC`},{label:"Large Opportunities",query:`SELECT Id, Name, Amount, StageName
FROM Opportunity
WHERE Amount > 100000
ORDER BY Amount DESC`},{label:"Closed Won Deals",query:`SELECT Id, Name, Amount, CloseDate
FROM Opportunity
WHERE StageName = 'Closed Won'
ORDER BY Amount DESC
LIMIT 5`},{label:"Open Cases",query:`SELECT Id, CaseNumber, Subject, Priority
FROM Case
WHERE Status = 'Open'
ORDER BY Priority`},{label:"Contacts by Account",query:`SELECT Id, FirstName, LastName, Title, Email
FROM Contact
WHERE AccountId = '001A000001'`}];function WS(){const[e,t]=b.useState(qp[0].query),[n,r]=b.useState(null),[s,a]=b.useState(null),[o,c]=b.useState(0),[l,u]=b.useState(""),[p,h]=b.useState(!1),g=()=>{const S=FS(e);r(S.records),a(S.error),c(S.rowCount),u(e)},x=S=>{t(S),r(null),a(null)},C=n&&n.length>0?Object.keys(n[0].fields):[];return i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-6",children:[i.jsxs("h1",{className:"text-2xl font-bold text-sf-gray-9 flex items-center gap-2",children:[i.jsx(op,{size:24,className:"text-sf-teal"}),"SOQL Visual Explorer"]}),i.jsx("p",{className:"text-sf-gray-6 mt-1",children:"Write and run SOQL queries against fictional Salesforce records. See results instantly."}),i.jsxs("div",{className:"flex items-center gap-2 mt-2 text-xs bg-yellow-50 border border-yellow-200 rounded px-3 py-1.5 w-fit text-yellow-700",children:[i.jsx(ip,{size:13}),"Simulated data only — not connected to a real Salesforce org"]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[i.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-9 text-sm mb-3",children:"Example Queries"}),i.jsx("div",{className:"space-y-1",children:qp.map((S,w)=>i.jsx("button",{onClick:()=>x(S.query),className:"w-full text-left text-xs px-2 py-1.5 rounded hover:bg-sf-gray-1 text-sf-gray-7 hover:text-sf-blue transition-colors",children:S.label},w))})]}),i.jsxs("div",{className:"card",children:[i.jsxs("button",{className:"w-full flex items-center justify-between font-semibold text-sf-gray-9 text-sm",onClick:()=>h(!p),children:[i.jsx("span",{children:"Data Schema"}),p?i.jsx(cc,{size:14}):i.jsx(Rt,{size:14})]}),p&&i.jsx("div",{className:"mt-3 space-y-3",children:Hg.map(S=>i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-blue mb-1",children:S.name}),i.jsx("div",{className:"space-y-0.5",children:S.fields.map(w=>i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-sf-gray-7 font-mono",children:w.name}),i.jsx("span",{className:"text-sf-gray-4",children:w.type})]},w.name))})]},S.name))})]})]}),i.jsxs("div",{className:"lg:col-span-3 space-y-4",children:[i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"SOQL Query"}),i.jsx("span",{className:"text-xs text-sf-gray-4",children:"Available: Account, Contact, Opportunity, Case"})]}),i.jsx("textarea",{value:e,onChange:S=>t(S.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg p-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue text-sm",rows:6,spellCheck:!1}),i.jsxs("div",{className:"flex items-center justify-between mt-3",children:[i.jsxs("button",{onClick:g,className:"btn-primary flex items-center gap-2",children:[i.jsx(no,{size:15}),"Run Query"]}),n!==null&&i.jsxs("span",{className:"text-sm text-sf-gray-5",children:[o," row",o!==1?"s":""," returned"]})]})]}),s&&i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-2",children:[i.jsx(ip,{size:16,className:"text-sf-red flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("p",{className:"text-sf-red font-semibold text-sm",children:"Query Error"}),i.jsx("p",{className:"text-red-700 text-sm mt-1",children:s})]})]}),n!==null&&!s&&i.jsxs("div",{className:"card overflow-hidden p-0",children:[i.jsx("div",{className:"px-4 py-3 border-b border-gray-100 bg-sf-gray-1",children:i.jsxs("h3",{className:"font-semibold text-sf-gray-9 text-sm",children:["Results — ",o," record",o!==1?"s":""]})}),n.length===0?i.jsxs("div",{className:"text-center py-12 text-sf-gray-5",children:[i.jsx(op,{size:32,className:"mx-auto mb-2 opacity-30"}),i.jsx("p",{children:"No records match your query"})]}):i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm",children:[i.jsx("thead",{className:"bg-sf-gray-1 border-b border-gray-200",children:i.jsx("tr",{children:C.map(S=>i.jsx("th",{className:"text-left px-4 py-2 text-xs font-semibold text-sf-gray-7 whitespace-nowrap",children:S},S))})}),i.jsx("tbody",{className:"divide-y divide-gray-100",children:n.map((S,w)=>i.jsx("tr",{className:"hover:bg-sf-gray-1 transition-colors",children:C.map(f=>{const m=S.fields[f];return i.jsx("td",{className:"px-4 py-2 text-sf-gray-7 whitespace-nowrap max-w-[200px] truncate",children:m==null?i.jsx("span",{className:"text-sf-gray-4 italic",children:"null"}):typeof m=="boolean"?i.jsx("span",{className:m?"text-sf-green":"text-sf-red",children:String(m)}):typeof m=="number"?i.jsx("span",{className:"font-mono",children:m.toLocaleString()}):f.toLowerCase().includes("id")?i.jsx("span",{className:"font-mono text-xs text-sf-gray-5",children:String(m)}):String(m)},f)})},w))})]})})]}),n===null&&i.jsxs("div",{className:"card border-dashed border-2 border-gray-200",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-3 text-sm",children:"SOQL Quick Reference"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sf-gray-6",children:[["Basic query","SELECT Id, Name FROM Account LIMIT 10"],["Filter with WHERE","WHERE Industry = 'Technology'"],["Multiple conditions","WHERE Amount > 50000 AND StageName = 'Closed Won'"],["Pattern matching","WHERE Name LIKE 'Tech%'"],["Sort results","ORDER BY Amount DESC"],["List of values","WHERE Industry IN ('Tech', 'Healthcare')"]].map(([S,w])=>i.jsxs("div",{children:[i.jsxs("span",{className:"font-medium text-sf-gray-8",children:[S,":"]}),i.jsx("pre",{className:"font-mono text-sf-gray-5 mt-0.5 whitespace-pre-wrap",children:w})]},S))})]})]})]})]})}const HS=[{id:"debug-null-pointer",title:"The Mysterious Null Pointer",description:"A trigger is failing with a NullPointerException. Find the null variable and fix it safely.",bugType:"null-pointer",brokenCode:`// This code is supposed to send a welcome email to new Contacts
// But it crashes with: System.NullPointerException: Attempt to de-reference a null object

List<Contact> newContacts = Trigger.new;

for (Contact c : newContacts) {
    String emailSubject = 'Welcome to Salesforce, ' + c.FirstName + '!';

    // Build email body
    String body = 'Hi ' + c.FirstName.toUpperCase() + ',
'
        + 'Your email is: ' + c.Email.toLowerCase();

    System.debug('Sending to: ' + c.Email);
    System.debug('Subject: ' + emailSubject);
    System.debug('Body: ' + body);
}`,errorMessage:`System.NullPointerException: Attempt to de-reference a null object
  at line 8, column 24

The error occurs at: c.FirstName.toUpperCase()`,hints:["What if a Contact record has no FirstName or no Email?","Calling .toUpperCase() on a null String throws NullPointerException","Always check if a String is null (or use String.isBlank()) before calling methods on it","You can use a ternary operator: String name = c.FirstName != null ? c.FirstName : 'Friend';"],fixedCode:`List<Contact> newContacts = Trigger.new;

for (Contact c : newContacts) {
    // Null-safe defaults
    String firstName = String.isBlank(c.FirstName) ? 'Friend' : c.FirstName;
    String email = String.isBlank(c.Email) ? '' : c.Email;

    String emailSubject = 'Welcome to Salesforce, ' + firstName + '!';

    String body = 'Hi ' + firstName.toUpperCase() + ',
'
        + 'Your email is: ' + email.toLowerCase();

    if (!String.isBlank(email)) {
        System.debug('Sending to: ' + email);
        System.debug('Subject: ' + emailSubject);
        System.debug('Body: ' + body);
    }
}`,explanation:"The bug: calling .toUpperCase() and .toLowerCase() on fields that might be null. In Salesforce, optional fields like FirstName and Email can be null. The fix: use String.isBlank() to check before calling methods, and provide safe defaults using a ternary operator."},{id:"debug-soql-in-loop",title:"The SOQL Grenade",description:"This code works fine with 5 records but blows up with 200. Can you spot why?",bugType:"governor-limit",brokenCode:`// Process all Contacts and update their related Account's description
List<Contact> contacts = [SELECT Id, AccountId, LastName FROM Contact LIMIT 200];

for (Contact c : contacts) {
    // Look up the account for each contact
    Account acct = [SELECT Id, Name, Description
                    FROM Account
                    WHERE Id = :c.AccountId
                    LIMIT 1];

    if (acct != null) {
        acct.Description = 'Last updated via Contact: ' + c.LastName;
        update acct;
    }
}`,errorMessage:`System.LimitException: Too many SOQL queries: 101

The error occurs inside the loop at:
Account acct = [SELECT Id, Name FROM Account WHERE Id = :c.AccountId LIMIT 1];`,hints:["Count how many SOQL queries this code executes if contacts has 200 records","The fix: collect all AccountIds into a Set, then query ALL accounts in ONE SOQL outside the loop","Build a Map<ID, Account> from the query results for fast lookup","Then loop through contacts and look up accounts from the map (zero SOQL queries in the loop)"],fixedCode:`List<Contact> contacts = [SELECT Id, AccountId, LastName FROM Contact LIMIT 200];

// Step 1: Collect all unique Account IDs
Set<ID> accountIds = new Set<ID>();
for (Contact c : contacts) {
    if (c.AccountId != null) {
        accountIds.add(c.AccountId);
    }
}

// Step 2: Query ALL accounts in ONE SOQL statement
Map<ID, Account> accountMap = new Map<ID, Account>(
    [SELECT Id, Name, Description FROM Account WHERE Id IN :accountIds]
);

// Step 3: Build update list — NO queries in this loop!
List<Account> accountsToUpdate = new List<Account>();
for (Contact c : contacts) {
    Account acct = accountMap.get(c.AccountId);
    if (acct != null) {
        acct.Description = 'Last updated via Contact: ' + c.LastName;
        accountsToUpdate.add(acct);
    }
}

// Step 4: ONE bulk update for all accounts
if (!accountsToUpdate.isEmpty()) {
    update accountsToUpdate;
}`,explanation:"The bug: 1 SOQL query + 1 DML statement inside a loop = 200 SOQL queries + 200 DML calls for 200 contacts. Salesforce allows only 100 SOQL queries and 150 DML statements per transaction. The fix (bulkification): collect IDs → query once → use Map for O(1) lookup → bulk update."},{id:"debug-logic-error",title:"Wrong Lead Assignment",description:"Leads are getting assigned to the wrong territory. The code runs without errors but produces incorrect results.",bugType:"logic",brokenCode:`// Assign leads to territories based on annual revenue
// Expected:
//   < $50K  → 'SMB Territory'
//   $50K-$500K → 'Mid-Market Territory'
//   > $500K → 'Enterprise Territory'

Lead lead1 = new Lead(LastName = 'Smith', AnnualRevenue = 25000);
Lead lead2 = new Lead(LastName = 'Jones', AnnualRevenue = 150000);
Lead lead3 = new Lead(LastName = 'Brown', AnnualRevenue = 750000);

for (Lead l : new List<Lead>{ lead1, lead2, lead3 }) {
    String territory;

    if (l.AnnualRevenue > 500000) {
        territory = 'Enterprise Territory';
    } else if (l.AnnualRevenue > 50000) {
        territory = 'Mid-Market Territory';
    } else if (l.AnnualRevenue < 50000) {
        territory = 'SMB Territory';
    }

    System.debug(l.LastName + ' ($' + l.AnnualRevenue + ') -> ' + territory);
}`,errorMessage:`No runtime error — but the output is wrong!

Brown ($750000) -> Enterprise Territory  ✓ Correct
Jones ($150000) -> Mid-Market Territory  ✓ Correct
Smith ($25000) -> SMB Territory          ✓ Correct

Wait... what happens if AnnualRevenue = 50000 exactly?
Smith2 ($50000) -> null   ← BUG! territory is null`,hints:["What value does territory have when AnnualRevenue is exactly 50000?","The first condition is > 500000 (50000 is not > 500000)","The second condition is > 50000 (50000 is NOT > 50000)","The third condition is < 50000 (50000 is NOT < 50000)","None of the conditions match 50000! Use >= or <= to handle the boundary case"],fixedCode:`Lead lead1 = new Lead(LastName = 'Smith', AnnualRevenue = 25000);
Lead lead2 = new Lead(LastName = 'Jones', AnnualRevenue = 150000);
Lead lead3 = new Lead(LastName = 'Brown', AnnualRevenue = 750000);
Lead lead4 = new Lead(LastName = 'Edge Case', AnnualRevenue = 50000); // boundary

for (Lead l : new List<Lead>{ lead1, lead2, lead3, lead4 }) {
    String territory;

    if (l.AnnualRevenue > 500000) {
        territory = 'Enterprise Territory';
    } else if (l.AnnualRevenue >= 50000) {    // FIXED: >= instead of >
        territory = 'Mid-Market Territory';
    } else {                                   // FIXED: simple else for everything below 50K
        territory = 'SMB Territory';
    }

    System.debug(l.LastName + ' ($' + l.AnnualRevenue + ') -> ' + territory);
}`,explanation:'The bug: a boundary condition gap. When AnnualRevenue = 50000 exactly, it fails all three conditions (not > 500000, not > 50000, not < 50000). The fix: change the second condition to >= 50000, and the last condition to a plain "else" to catch everything remaining.'},{id:"debug-string-comparison",title:"The Case-Sensitive Trap",description:"An account type validation is rejecting valid inputs. Something is wrong with how strings are being compared.",bugType:"logic",brokenCode:`// Validate and process account types
List<String> inputTypes = new List<String>{
    'Customer', 'PARTNER', 'prospect', 'Reseller', 'CUSTOMER'
};

Set<String> validTypes = new Set<String>{
    'Customer', 'Partner', 'Prospect', 'Reseller', 'Competitor'
};

List<String> invalidInputs = new List<String>();
List<String> validInputs = new List<String>();

for (String input : inputTypes) {
    if (validTypes.contains(input)) {
        validInputs.add(input);
    } else {
        invalidInputs.add(input);
    }
}

System.debug('Valid: ' + validInputs);
System.debug('Invalid: ' + invalidInputs);
// Expected: all 5 should be valid (just different cases)
// Actual: only 'Customer' and 'Reseller' pass!`,errorMessage:`Logic Error — no exception thrown, but results are wrong:

Valid: (Customer, Reseller)
Invalid: (PARTNER, prospect, CUSTOMER)

'PARTNER' should be valid — it IS a partner, just uppercase!
'prospect' should be valid — it IS a prospect, just lowercase!`,hints:["Set.contains() is case-sensitive in Apex","The solution: normalize the case before checking","You could convert the input to title case, OR convert everything to uppercase/lowercase","One approach: check input.toUpperCase() against a Set of uppercase valid types","Another approach: normalize with input.toLowerCase().capitalize()"],fixedCode:`List<String> inputTypes = new List<String>{
    'Customer', 'PARTNER', 'prospect', 'Reseller', 'CUSTOMER'
};

// Normalize to uppercase for comparison
Set<String> validTypesUpper = new Set<String>{
    'CUSTOMER', 'PARTNER', 'PROSPECT', 'RESELLER', 'COMPETITOR'
};

List<String> invalidInputs = new List<String>();
List<String> validInputs = new List<String>();

for (String input : inputTypes) {
    // Normalize the input to uppercase before checking
    if (validTypesUpper.contains(input.toUpperCase())) {
        validInputs.add(input);
    } else {
        invalidInputs.add(input);
    }
}

System.debug('Valid: ' + validInputs);
System.debug('Invalid: ' + invalidInputs);
// Now all 5 pass — case-insensitive comparison`,explanation:'The bug: Set.contains() in Apex is case-sensitive for String collections (unlike the == operator). So "PARTNER" != "Partner" in a Set lookup. The fix: normalize both sides to the same case before comparison. Converting the input to uppercase and comparing against an uppercase Set is a clean pattern.'},{id:"debug-dml-in-loop",title:"The DML Bomb",description:"An nightly batch is failing halfway through with a governor limit error. Find the DML anti-pattern.",bugType:"dml",brokenCode:`// Update Account rating based on their total opportunity revenue
List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 100];

for (Account acct : accounts) {
    // Query this account's closed won opportunities
    List<Opportunity> opps = [SELECT Amount FROM Opportunity
                               WHERE AccountId = :acct.Id
                               AND StageName = 'Closed Won'];

    Decimal totalRevenue = 0;
    for (Opportunity opp : opps) {
        totalRevenue += opp.Amount;
    }

    // Update rating based on revenue
    if (totalRevenue >= 1000000) {
        acct.Rating = 'Hot';
    } else if (totalRevenue >= 100000) {
        acct.Rating = 'Warm';
    } else {
        acct.Rating = 'Cold';
    }

    update acct; // Save rating for each account
}`,errorMessage:`System.LimitException: Too many SOQL queries: 101

Error at line 6:
List<Opportunity> opps = [SELECT Amount FROM Opportunity...]

After processing 100 accounts:
- 100 SOQL queries for Opportunity lookups
- 100 DML update statements
Both limits exceeded!`,hints:["Two anti-patterns here: SOQL in a loop AND DML in a loop","Fix 1: Use an aggregate SOQL with GROUP BY AccountId to get revenue per account in one query","Fix 2: Collect all updates into a List, then do ONE bulk update outside the loop","Aggregate SOQL: SELECT AccountId, SUM(Amount) total FROM Opportunity WHERE StageName='Closed Won' GROUP BY AccountId"],fixedCode:`// Step 1: Get all accounts
List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 100];

// Step 2: ONE aggregate query to get revenue per account
Set<ID> accountIds = new Set<ID>();
for (Account a : accounts) accountIds.add(a.Id);

AggregateResult[] revenueResults = [
    SELECT AccountId, SUM(Amount) total
    FROM Opportunity
    WHERE AccountId IN :accountIds
    AND StageName = 'Closed Won'
    GROUP BY AccountId
];

// Step 3: Build revenue map from aggregate results
Map<ID, Decimal> revenueByAccount = new Map<ID, Decimal>();
for (AggregateResult ar : revenueResults) {
    ID accId = (ID) ar.get('AccountId');
    Decimal total = (Decimal) ar.get('total');
    revenueByAccount.put(accId, total);
}

// Step 4: Calculate ratings and collect updates
List<Account> toUpdate = new List<Account>();
for (Account acct : accounts) {
    Decimal revenue = revenueByAccount.containsKey(acct.Id)
        ? revenueByAccount.get(acct.Id) : 0;

    if (revenue >= 1000000) {
        acct.Rating = 'Hot';
    } else if (revenue >= 100000) {
        acct.Rating = 'Warm';
    } else {
        acct.Rating = 'Cold';
    }
    toUpdate.add(acct);
}

// Step 5: ONE bulk DML for all 100 accounts
update toUpdate;`,explanation:"Two bugs: SOQL and DML both inside the loop. For 100 accounts: 100 SOQL + 100 DML = both limits exceeded. Fix: use ONE aggregate SOQL with GROUP BY to get all revenues at once, build a Map for lookups, collect updates in a List, then do ONE bulk update. This goes from 200 operations to 3."}],zg={"null-pointer":"bg-red-100 text-red-800","governor-limit":"bg-orange-100 text-orange-800",logic:"bg-yellow-100 text-yellow-800",syntax:"bg-purple-100 text-purple-800",soql:"bg-blue-100 text-blue-800",dml:"bg-teal-100 text-teal-800"};function zS({scenario:e,onSelect:t}){return i.jsxs("button",{className:"card text-left w-full hover:shadow-sf-lg hover:-translate-y-0.5 transition-all",onClick:t,children:[i.jsx("div",{className:"flex items-center gap-2 mb-2",children:i.jsx("span",{className:`tag ${zg[e.bugType]||"bg-gray-100 text-gray-800"}`,children:e.bugType.replace("-"," ")})}),i.jsx("h3",{className:"font-bold mb-1",children:e.title}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description}),i.jsxs("div",{className:"flex items-center gap-1 mt-3 text-sf-blue text-sm font-medium",children:["Debug this ",i.jsx(Rt,{className:"w-4 h-4"})]})]})}function QS({scenario:e,onBack:t}){const[n,r]=b.useState(!1),[s,a]=b.useState(0),[o,c]=b.useState(!1),[l,u]=b.useState(e.brokenCode),[p,h]=b.useState(!1),[g,x]=b.useState(null),[C,S]=b.useState(!1),[w,f]=b.useState(null),m=()=>{const L=Fn(l);L?(x(L),f(null),h(!0),S(!1)):(x(null),f(null),h(!1),S(!0))},y=()=>{const L=Fn(l);if(L){x(L),f(null),h(!0),S(!1);return}x(null),S(!1);const E=jp(e.fixedCode),D=jp(l);f({expected:E.output,actual:D.output,error:D.error}),h(!0)},T=w!==null&&!w.error&&w.actual.join(`
`)===w.expected.join(`
`);return i.jsxs("div",{children:[i.jsx("button",{className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue mb-6 transition-colors",onClick:t,children:"← Back to scenarios"}),i.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center",children:i.jsx(sp,{className:"w-5 h-5 text-red-600"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"text-xl font-bold",children:e.title}),i.jsx("span",{className:`tag ${zg[e.bugType]||""}`,children:e.bugType.replace("-"," ")})]}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[i.jsxs("div",{children:[i.jsxs("h3",{className:"font-semibold text-sf-gray-8 mb-2 flex items-center gap-2",children:[i.jsx(sp,{className:"w-4 h-4 text-red-500"})," Broken Code"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap border-2 border-red-300",children:e.brokenCode})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Error Message"}),i.jsx("div",{className:"bg-red-950 text-red-300 rounded-lg p-4 font-mono text-xs whitespace-pre-wrap mb-4",children:e.errorMessage}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs("button",{className:"btn-secondary text-sm flex items-center gap-2 w-full justify-center",onClick:()=>{r(!0)},children:[i.jsx(Kr,{className:"w-4 h-4"}),n?`Hint ${s+1} of ${e.hints.length}`:"Get a Hint"]}),n&&i.jsxs("div",{className:"hint-box",children:[i.jsx("p",{className:"text-sm text-yellow-900",children:e.hints[s]}),s<e.hints.length-1&&i.jsx("button",{className:"text-xs text-yellow-700 underline mt-2",onClick:()=>a(L=>L+1),children:"Next hint →"})]})]})]})]}),i.jsxs("div",{className:"space-y-3 mb-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("h3",{className:"font-semibold text-sf-gray-8 flex items-center gap-2",children:[i.jsx("span",{className:"w-2 h-2 rounded-full bg-sf-teal inline-block"}),"Your Fix"]}),i.jsxs("button",{onClick:()=>{u(e.brokenCode),f(null),x(null),h(!1),S(!1)},className:"flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors",children:[i.jsx(ro,{size:11})," Reset"]})]}),i.jsxs("div",{className:"relative rounded-lg overflow-hidden border border-sf-gray-3",children:[i.jsxs("div",{className:"flex items-center gap-2 bg-[#1e1e2e] px-3 py-2 border-b border-gray-700",children:[i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),i.jsx("span",{className:"text-xs text-gray-500 ml-2 font-mono",children:"fix.apex"})]}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-10 bg-[#1a1a2a] flex flex-col items-end pr-2 pt-3 select-none z-10",children:l.split(`
`).map((L,E)=>i.jsx("div",{className:"text-gray-600 text-xs leading-[1.65] font-mono",children:E+1},E))}),i.jsx("textarea",{value:l,onChange:L=>{u(L.target.value),p&&(f(null),x(null),h(!1)),C&&S(!1)},className:"w-full bg-[#1e1e2e] text-gray-100 pl-12 pr-4 pt-3 pb-3 border-0 outline-none focus:ring-0 font-mono text-sm leading-relaxed resize-none",rows:Math.max(12,l.split(`
`).length+2),spellCheck:!1,autoComplete:"off",autoCorrect:"off",style:{minHeight:"240px"}})]})]}),i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[i.jsxs("button",{onClick:m,className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-sf-blue border-2 border-sf-blue rounded-lg hover:bg-sf-blue/5 transition-colors",children:[i.jsx(fg,{size:14})," Compile"]}),i.jsxs("button",{onClick:y,className:"btn-primary flex items-center gap-2 text-sm",children:[i.jsx(no,{size:14})," Run Tests"]})]})]}),!p&&C&&i.jsxs("div",{className:"border border-green-300 rounded-xl p-4 bg-green-50 flex items-center gap-3 mb-4",children:[i.jsx(Wr,{size:16,className:"text-green-600 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-sm text-green-700",children:"Compiled successfully"}),i.jsx("p",{className:"text-xs text-green-600 mt-0.5",children:'No syntax errors. Click "Run Tests" to compare output with the expected fix.'})]})]}),p&&g&&i.jsxs("div",{className:"border border-red-300 rounded-xl overflow-hidden mb-4",children:[i.jsxs("div",{className:"px-4 py-3 bg-red-50 border-b border-red-200 flex items-center gap-2",children:[i.jsx(bt,{size:16,className:"text-red-500"}),i.jsx("span",{className:"font-bold text-sm text-red-700",children:"Compilation Failed"})]}),i.jsxs("div",{className:"p-4",children:[i.jsx("pre",{className:"bg-red-950/10 border border-red-200 text-red-800 text-sm rounded-lg px-3 py-2 font-mono whitespace-pre-wrap",children:g}),i.jsx("p",{className:"text-xs text-sf-gray-5 mt-2",children:"Fix the syntax error above, then click Run Tests again."})]})]}),p&&w&&!g&&i.jsxs("div",{className:"border border-gray-200 rounded-xl overflow-hidden mb-4",children:[i.jsx("div",{className:`px-4 py-3 flex items-center justify-between border-b ${w.error?"bg-red-50 border-red-200":T?"bg-green-50 border-green-200":"bg-yellow-50 border-yellow-200"}`,children:i.jsxs("div",{className:"flex items-center gap-2",children:[w.error?i.jsx(bt,{size:16,className:"text-red-500"}):T?i.jsx(Wr,{size:16,className:"text-green-600"}):i.jsx(pa,{size:16,className:"text-yellow-600"}),i.jsx("span",{className:`font-bold text-sm ${w.error?"text-red-700":T?"text-green-700":"text-yellow-700"}`,children:w.error?"Runtime Error":T?"Output matches fixed code!":"Output differs from expected fix"})]})}),i.jsxs("div",{className:"p-4 space-y-3",children:[w.error&&i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg px-3 py-2",children:[i.jsx("p",{className:"text-xs font-semibold text-red-600 mb-1 uppercase tracking-wide",children:"Runtime Error"}),i.jsx("p",{className:"text-sm text-red-700 font-mono",children:w.error})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Expected Output (from fixed code)"}),w.expected.length>0?i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto",children:w.expected.join(`
`)}):i.jsx("p",{className:"text-xs text-sf-gray-5 italic bg-gray-50 border border-gray-200 rounded-lg px-3 py-2",children:"Fixed code produces no System.debug output — this bug involves SOQL/DML/Trigger logic that cannot be simulated in the browser. Review the explanation below."})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Your Output"}),w.actual.length>0?i.jsx("pre",{className:`text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto ${T?"bg-gray-900 text-green-300":"bg-gray-900 text-orange-300"}`,children:w.actual.join(`
`)}):i.jsx("p",{className:"text-xs text-sf-gray-5 italic bg-gray-50 border border-gray-200 rounded-lg px-3 py-2",children:"(no output produced)"})]})]})]}),i.jsxs("button",{className:"btn-secondary flex items-center gap-2 mb-4",onClick:()=>c(!o),children:[i.jsx(Ri,{className:"w-4 h-4"}),o?"Hide Fix":"Show the Fix"]}),o&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"card border-2 border-green-300",children:[i.jsxs("h3",{className:"font-semibold text-green-800 mb-2 flex items-center gap-2",children:[i.jsx(Wr,{className:"w-4 h-4"})," Fixed Code"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap",children:e.fixedCode})]}),i.jsxs("div",{className:"card border-2 border-sf-blue/30 bg-sf-blue/5",children:[i.jsx("h3",{className:"font-semibold text-sf-blue mb-2",children:"Explanation"}),i.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed",children:e.explanation})]})]})]})}function $S(){const[e,t]=b.useState(null);return i.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:e?i.jsx(QS,{scenario:e,onBack:()=>t(null)}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Debug Lab"}),i.jsx("p",{className:"text-sf-gray-6",children:"Fix intentionally broken Apex code. Real bugs that Salesforce developers encounter every day."})]}),i.jsxs("div",{className:"flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6",children:[i.jsx(pa,{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"}),i.jsx("p",{className:"text-xs text-amber-800",children:"Each scenario shows a broken class and its error message. Use the hints if needed, then reveal the fix and explanation."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:HS.map(n=>i.jsx(zS,{scenario:n,onSelect:()=>t(n)},n.id))})]})})}const Ee=e=>{const t=new Date;return t.setHours(0,0,0,0),t.setDate(t.getDate()-e),t},yn=e=>new Date(Date.now()-e*36e5),Dt=[{id:"mission-lead-routing",title:"Automate Lead Routing",company:"Acme Corporation",description:"Acme's sales team is manually assigning leads every morning — a process taking 2 hours daily. Build an Apex solution to automate it.",scenario:`Sarah, Acme's Sales Ops Manager, has given you the following requirements in a meeting:

"We get about 200 new leads every day. Right now someone manually reads each one and assigns it to a territory team. It takes forever. We need a system where leads are automatically routed based on:

1. Their Annual Revenue field
2. Their Industry
3. Whether they already have an open Opportunity

The territories are: SMB Team (< $100K), Mid-Market Team ($100K–$1M), Enterprise Team (> $1M)
Industry override: Any Healthcare lead goes to the Healthcare Specialist team regardless of revenue.
If a Lead converts from an existing Contact who already has an Open Opportunity, flag it as 'Existing Customer'."`,requirements:["Create an Apex class LeadRouter with a static method routeLead(Lead l) that returns the team name as a String",'Route based on AnnualRevenue: < $100K → "SMB Team", $100K–$1M → "Mid-Market Team", > $1M → "Enterprise Team"','Override routing: Any Industry = "Healthcare" lead → "Healthcare Specialist"','Handle null AnnualRevenue gracefully (default to "SMB Team")',"Create a second method bulkRouteleads(List<Lead> leads) that returns a Map<ID, String>","Write test assertions to validate each routing rule"],difficulty:"beginner",skills:["Apex Classes","Conditionals","Maps","Null Safety"],estimatedHours:2,starterCode:`public class LeadRouter {

    // Routes a single lead to a team name
    // Returns: 'SMB Team', 'Mid-Market Team', 'Enterprise Team', or 'Healthcare Specialist'
    public static String routeLead(Lead l) {
        // TODO: Implement routing logic
        return null;
    }

    // Routes multiple leads — returns Map of Lead ID -> Team Name
    public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {
        // TODO: Implement bulk routing
        return null;
    }
}`,solution:`public class LeadRouter {

    public static String routeLead(Lead l) {
        // Healthcare override — applies regardless of revenue
        if (l.Industry == 'Healthcare') {
            return 'Healthcare Specialist';
        }

        // Revenue-based routing with null safety
        Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;

        if (revenue > 1000000) {
            return 'Enterprise Team';
        } else if (revenue >= 100000) {
            return 'Mid-Market Team';
        } else {
            return 'SMB Team';
        }
    }

    public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {
        Map<ID, String> routing = new Map<ID, String>();
        for (Lead l : leads) {
            routing.put(l.Id, routeLead(l));
        }
        return routing;
    }
}`,hints:["Start with the Healthcare override — it should be the first if-check","Use a Decimal variable with null safety: `Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;`","Chain if/else if/else for the three revenue tiers","For bulkRouteLeads, loop over the list and call routeLead() for each — don't duplicate the logic"],testCases:[{id:"tc1",description:"Defines class LeadRouter",pattern:"public\\s+class\\s+LeadRouter",errorMessage:"Your class must be named exactly `LeadRouter`.",exampleFix:"public class LeadRouter {"},{id:"tc2",description:"Defines routeLead method with correct signature",pattern:"public\\s+static\\s+String\\s+routeLead\\s*\\(",errorMessage:"You need a `public static String routeLead(Lead l)` method.",exampleFix:"public static String routeLead(Lead l) {"},{id:"tc3",description:"Handles Healthcare override",pattern:"Industry\\s*==\\s*'Healthcare'",errorMessage:"Your code must check `l.Industry == 'Healthcare'` and return 'Healthcare Specialist'.",exampleFix:`if (l.Industry == 'Healthcare') {
    return 'Healthcare Specialist';
}`},{id:"tc4",description:"Handles null AnnualRevenue",pattern:"AnnualRevenue\\s*!=\\s*null|AnnualRevenue\\s*==\\s*null",errorMessage:"You must handle the case where AnnualRevenue is null.",exampleFix:"Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;"},{id:"tc5",description:"Routes by revenue tiers",pattern:"1000000|100000",errorMessage:"Your routing logic should use the revenue thresholds $100,000 and $1,000,000.",exampleFix:`if (revenue > 1000000) {
    return 'Enterprise Team';
} else if (revenue >= 100000) {
    return 'Mid-Market Team';
}`},{id:"tc6",description:"Defines bulkRouteLeads method",pattern:"public\\s+static\\s+Map.*bulkRouteLeads\\s*\\(",errorMessage:"You need a `public static Map<ID, String> bulkRouteLeads(List<Lead> leads)` method.",exampleFix:"public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {"}],scenarios:[{id:"s1",label:"Healthcare override",inputDisplay:"l = { Industry: 'Healthcare', AnnualRevenue: 500000 }",inputs:{l:{Industry:"Healthcare",AnnualRevenue:5e5,Id:"001"}},expectedOutput:["Healthcare Specialist"],expectedReturn:"Healthcare Specialist",methodCall:"LeadRouter.routeLead(l)"},{id:"s2",label:"Enterprise (> $1M)",inputDisplay:"l = { Industry: 'Technology', AnnualRevenue: 1500000 }",inputs:{l:{Industry:"Technology",AnnualRevenue:15e5,Id:"002"}},expectedOutput:["Enterprise Team"],expectedReturn:"Enterprise Team",methodCall:"LeadRouter.routeLead(l)"},{id:"s3",label:"Mid-Market ($100K–$1M)",inputDisplay:"l = { Industry: 'Finance', AnnualRevenue: 500000 }",inputs:{l:{Industry:"Finance",AnnualRevenue:5e5,Id:"003"}},expectedOutput:["Mid-Market Team"],expectedReturn:"Mid-Market Team",methodCall:"LeadRouter.routeLead(l)"},{id:"s4",label:"SMB (< $100K)",inputDisplay:"l = { Industry: 'Retail', AnnualRevenue: 50000 }",inputs:{l:{Industry:"Retail",AnnualRevenue:5e4,Id:"004"}},expectedOutput:["SMB Team"],expectedReturn:"SMB Team",methodCall:"LeadRouter.routeLead(l)"},{id:"s5",label:"Null revenue → SMB",inputDisplay:"l = { Industry: 'Other', AnnualRevenue: null }",inputs:{l:{Industry:"Other",AnnualRevenue:null,Id:"005"}},expectedOutput:["SMB Team"],expectedReturn:"SMB Team",methodCall:"LeadRouter.routeLead(l)"},{id:"s6",label:"bulkRouteLeads — mixed list",inputDisplay:`leads = [
  { Id: 'A01', Industry: 'Healthcare', AnnualRevenue: 200000 },
  { Id: 'A02', Industry: 'Tech', AnnualRevenue: 1500000 },
  { Id: 'A03', Industry: 'Retail', AnnualRevenue: 50000 }
]`,inputs:{leads:[{Id:"A01",Industry:"Healthcare",AnnualRevenue:2e5},{Id:"A02",Industry:"Technology",AnnualRevenue:15e5},{Id:"A03",Industry:"Retail",AnnualRevenue:5e4}]},expectedOutput:["Healthcare Specialist"],expectedReturn:"Healthcare Specialist",methodCall:'LeadRouter.bulkRouteLeads(leads).get("A01")'},{id:"s7",label:"bulkRouteLeads — correct size",inputDisplay:`leads = [
  { Id: 'B01', Industry: 'Finance', AnnualRevenue: 500000 },
  { Id: 'B02', Industry: 'Retail', AnnualRevenue: 20000 }
]`,inputs:{leads:[{Id:"B01",Industry:"Finance",AnnualRevenue:5e5},{Id:"B02",Industry:"Retail",AnnualRevenue:2e4}]},expectedOutput:["2"],expectedReturn:2,methodCall:"LeadRouter.bulkRouteLeads(leads).__size()"}]},{id:"mission-account-health",title:"Account Health Score",company:"Globex Technologies",description:"Build a health scoring system that evaluates accounts based on engagement, revenue, and support history.",scenario:`The Customer Success team at Globex wants a health score for every account so they can proactively reach out to at-risk customers before they churn.

The scoring model they designed:
- Base score starts at 100
- Subtract 20 points if no closed won opportunities in the last 90 days
- Subtract 15 points for each open High or Critical priority case (max deduction: 45 points)
- Add 10 points if AnnualRevenue > $1M
- Add 5 points if account was created more than 2 years ago (loyal customer bonus)
- Minimum score is 0, maximum is 100

Health tiers:
- 80-100: Green (Healthy)
- 60-79: Yellow (Monitor)
- 0-59: Red (At Risk)`,requirements:["Create class AccountHealthCalculator with method calculateScore(Account acct, List<Opportunity> opps, List<Case> cases) returning Integer","Implement all five scoring rules from the scenario",'Create method getHealthTier(Integer score) returning "Green", "Yellow", or "Red"',"Ensure score never goes below 0 or above 100","Create method generateReport(Account acct, Integer score) returning a human-readable String summary"],difficulty:"beginner",skills:["Apex Classes","Conditionals","Lists","Date Operations"],estimatedHours:2,starterCode:`public class AccountHealthCalculator {

    public static Integer calculateScore(
        Account acct,
        List<Opportunity> opps,
        List<Case> cases
    ) {
        Integer score = 100;
        // TODO: Apply each scoring rule
        return score;
    }

    public static String getHealthTier(Integer score) {
        // TODO: Return 'Green', 'Yellow', or 'Red'
        return null;
    }

    public static String generateReport(Account acct, Integer score) {
        // TODO: Return formatted summary
        return null;
    }
}`,solution:`public class AccountHealthCalculator {

    public static Integer calculateScore(
        Account acct,
        List<Opportunity> opps,
        List<Case> cases
    ) {
        Integer score = 100;
        Date ninetyDaysAgo = Date.today().addDays(-90);

        // Check for recent closed won opportunities
        Boolean hasRecentWin = false;
        for (Opportunity opp : opps) {
            if (opp.StageName == 'Closed Won' && opp.CloseDate >= ninetyDaysAgo) {
                hasRecentWin = true;
                break;
            }
        }
        if (!hasRecentWin) score -= 20;

        // Deduct for high/critical cases (max 45 points)
        Integer caseDeduction = 0;
        for (Case c : cases) {
            if (c.Status == 'Open' && (c.Priority == 'High' || c.Priority == 'Critical')) {
                caseDeduction += 15;
            }
        }
        score -= Math.min(caseDeduction, 45);

        // Revenue bonus
        if (acct.AnnualRevenue != null && acct.AnnualRevenue > 1000000) {
            score += 10;
        }

        // Loyalty bonus
        if (acct.CreatedDate != null) {
            Date twoYearsAgo = Date.today().addYears(-2);
            if (acct.CreatedDate.date() <= twoYearsAgo) {
                score += 5;
            }
        }

        // Clamp between 0 and 100
        return Math.max(0, Math.min(100, score));
    }

    public static String getHealthTier(Integer score) {
        if (score >= 80) return 'Green';
        if (score >= 60) return 'Yellow';
        return 'Red';
    }

    public static String generateReport(Account acct, Integer score) {
        String tier = getHealthTier(score);
        return 'Account: ' + acct.Name
            + ' | Score: ' + score
            + ' | Health: ' + tier
            + ' | Action: ' + (tier == 'Red' ? 'Immediate outreach required' :
                               tier == 'Yellow' ? 'Schedule check-in call' : 'Continue nurturing');
    }
}`,hints:["Start with `Integer score = 100;` and subtract/add from there","For the 90-day check: `Date ninetyDaysAgo = Date.today().addDays(-90);`","Loop through cases and count High/Critical open ones, then cap with `Math.min(caseDeduction, 45)`","Use `Math.max(0, Math.min(100, score))` to clamp the final score"],testCases:[{id:"tc1",description:"Defines class AccountHealthCalculator",pattern:"public\\s+class\\s+AccountHealthCalculator",errorMessage:"Your class must be named exactly `AccountHealthCalculator`.",exampleFix:"public class AccountHealthCalculator {"},{id:"tc2",description:"Defines calculateScore method",pattern:"public\\s+static\\s+Integer\\s+calculateScore\\s*\\(",errorMessage:"You need a `public static Integer calculateScore(...)` method.",exampleFix:"public static Integer calculateScore(Account acct, List<Opportunity> opps, List<Case> cases) {"},{id:"tc3",description:"Checks for 90-day lookback on opportunities",pattern:"addDays\\s*\\(\\s*-90\\s*\\)",errorMessage:"You need `Date.today().addDays(-90)` to get the 90-day lookback date.",exampleFix:`Date ninetyDaysAgo = Date.today().addDays(-90);
if (opp.CloseDate >= ninetyDaysAgo) { ... }`},{id:"tc4",description:"Caps case deduction at 45 points",pattern:"Math\\.min\\s*\\(.*45|45.*Math\\.min",errorMessage:"The case deduction must be capped at 45 points using Math.min().",exampleFix:"score -= Math.min(caseDeduction, 45);"},{id:"tc5",description:"Clamps final score between 0 and 100",pattern:"Math\\.max|Math\\.min",errorMessage:"Clamp the final score to [0, 100] using Math.max() and Math.min().",exampleFix:"return Math.max(0, Math.min(100, score));"},{id:"tc6",description:"Defines getHealthTier method",pattern:"public\\s+static\\s+String\\s+getHealthTier\\s*\\(",errorMessage:"You need a `public static String getHealthTier(Integer score)` method.",exampleFix:`public static String getHealthTier(Integer score) {
    if (score >= 80) return 'Green';
    if (score >= 60) return 'Yellow';
    return 'Red';
}`}],scenarios:[{id:"s1",label:"Green tier (score = 85)",inputDisplay:"score = 85",inputs:{score:85},expectedOutput:["Green"],expectedReturn:"Green",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s2",label:"Yellow tier (score = 70)",inputDisplay:"score = 70",inputs:{score:70},expectedOutput:["Yellow"],expectedReturn:"Yellow",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s3",label:"Red tier (score = 45)",inputDisplay:"score = 45",inputs:{score:45},expectedOutput:["Red"],expectedReturn:"Red",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s4",label:"Green boundary (score = 80)",inputDisplay:"score = 80",inputs:{score:80},expectedOutput:["Green"],expectedReturn:"Green",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s5",label:"Yellow boundary (score = 60)",inputDisplay:"score = 60",inputs:{score:60},expectedOutput:["Yellow"],expectedReturn:"Yellow",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s6",label:"Tier just below Yellow (score = 59)",inputDisplay:"score = 59",inputs:{score:59},expectedOutput:["Red"],expectedReturn:"Red",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s7",label:"Tier just below Green (score = 79)",inputDisplay:"score = 79",inputs:{score:79},expectedOutput:["Yellow"],expectedReturn:"Yellow",methodCall:"AccountHealthCalculator.getHealthTier(score)"},{id:"s8",label:"No wins, no cases, small account → 80",inputDisplay:"revenue 500K, created 30d ago, no opps, no cases",inputs:{acct:{Name:"A",AnnualRevenue:5e5,CreatedDate:Ee(30)},opps:[],cases:[]},expectedOutput:["80"],expectedReturn:"80",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s9",label:"Recent win keeps full score → 100",inputDisplay:"closed won 10 days ago",inputs:{acct:{Name:"A",AnnualRevenue:5e5,CreatedDate:Ee(30)},opps:[{StageName:"Closed Won",CloseDate:Ee(10)}],cases:[]},expectedOutput:["100"],expectedReturn:"100",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s10",label:"Stale win (200 days) does not count → 80",inputDisplay:"closed won 200 days ago",inputs:{acct:{Name:"A",AnnualRevenue:5e5,CreatedDate:Ee(30)},opps:[{StageName:"Closed Won",CloseDate:Ee(200)}],cases:[]},expectedOutput:["80"],expectedReturn:"80",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s11",label:"Case deduction capped at 45 → 55",inputDisplay:"4 open High/Critical cases + recent win",inputs:{acct:{Name:"A",AnnualRevenue:5e5,CreatedDate:Ee(30)},opps:[{StageName:"Closed Won",CloseDate:Ee(5)}],cases:[{Status:"Open",Priority:"High"},{Status:"Open",Priority:"High"},{Status:"Open",Priority:"Critical"},{Status:"Open",Priority:"High"}]},expectedOutput:["55"],expectedReturn:"55",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s12",label:"Bonuses clamp at 100",inputDisplay:"revenue 2M, 3-year-old account, recent win",inputs:{acct:{Name:"A",AnnualRevenue:2e6,CreatedDate:Ee(1100)},opps:[{StageName:"Closed Won",CloseDate:Ee(5)}],cases:[]},expectedOutput:["100"],expectedReturn:"100",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s13",label:"Revenue exactly $1M gets no bonus → 80",inputDisplay:"AnnualRevenue = 1,000,000, no wins",inputs:{acct:{Name:"A",AnnualRevenue:1e6,CreatedDate:Ee(30)},opps:[],cases:[]},expectedOutput:["80"],expectedReturn:"80",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s14",label:"Revenue $1,000,001 gets bonus → 90",inputDisplay:"AnnualRevenue = 1,000,001, no wins",inputs:{acct:{Name:"A",AnnualRevenue:1000001,CreatedDate:Ee(30)},opps:[],cases:[]},expectedOutput:["90"],expectedReturn:"90",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s15",label:"Null revenue; Closed Lost, Medium and Closed cases ignored → 80",inputDisplay:"null AnnualRevenue; non-qualifying opp and cases",inputs:{acct:{Name:"A",AnnualRevenue:null,CreatedDate:Ee(30)},opps:[{StageName:"Closed Lost",CloseDate:Ee(5)}],cases:[{Status:"Open",Priority:"Medium"},{Status:"Closed",Priority:"High"}]},expectedOutput:["80"],expectedReturn:"80",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s16",label:"Loyalty bonus (3-year-old account, no wins) → 85",inputDisplay:"created 1100 days ago",inputs:{acct:{Name:"A",AnnualRevenue:0,CreatedDate:Ee(1100)},opps:[],cases:[]},expectedOutput:["85"],expectedReturn:"85",methodCall:"AccountHealthCalculator.calculateScore(acct, opps, cases)"},{id:"s17",label:"Report for Green account",inputDisplay:"Acme, score 85",inputs:{acct:{Name:"Acme"},score:85},expectedOutput:["Account: Acme | Score: 85 | Health: Green | Action: Continue nurturing"],expectedReturn:"Account: Acme | Score: 85 | Health: Green | Action: Continue nurturing",methodCall:"AccountHealthCalculator.generateReport(acct, score)"},{id:"s18",label:"Report for Red account",inputDisplay:"Acme, score 59",inputs:{acct:{Name:"Acme"},score:59},expectedOutput:["Account: Acme | Score: 59 | Health: Red | Action: Immediate outreach required"],expectedReturn:"Account: Acme | Score: 59 | Health: Red | Action: Immediate outreach required",methodCall:"AccountHealthCalculator.generateReport(acct, score)"}]},{id:"mission-data-import",title:"CSV Data Import Processor",company:"DataSync Inc",description:"Build a class that processes a CSV-formatted string of contact data, validates it, and prepares records for import.",scenario:`DataSync receives daily CSV feeds from their marketing platform with new lead data. The current process has a consultant manually cleaning data in Excel before importing. They want an Apex class to automate this.

Sample CSV input:
"FirstName,LastName,Email,Phone,Company
John,Smith,john.smith@example.com,(555) 123-4567,Acme Corp
JANE,DOE,JANE.DOE@EXAMPLE.COM,5551234568,GLOBEX
Bob,,bob@,123,Initech"

Rules:
- Skip header row
- FirstName and LastName are required — skip rows missing either
- Email must contain @ — flag invalid emails but still process the row
- Phone: strip all non-numeric characters
- Normalize names to Title Case (first letter uppercase, rest lowercase)
- Company is optional — default to 'Unknown' if missing`,requirements:["Create class CSVContactProcessor with method processCSV(String csvData) returning a ProcessResult inner class","ProcessResult should contain: List<Contact> validContacts, List<String> errors, Integer processedRows, Integer skippedRows","Implement all validation and normalization rules","Phone normalization: remove all non-digit characters with replaceAll()","Name normalization: firstName[0].toUpperCase() + firstName.substring(1).toLowerCase()"],difficulty:"intermediate",skills:["String Methods","Lists","Inner Classes","Loops","Validation"],estimatedHours:3,starterCode:`public class CSVContactProcessor {

    public class ProcessResult {
        public List<Contact> validContacts = new List<Contact>();
        public List<String> errors = new List<String>();
        public Integer processedRows = 0;
        public Integer skippedRows = 0;
    }

    // Title Case: first letter upper, rest lower ('jOHN' -> 'John')
    public static String titleCase(String s) {
        // TODO
        return s;
    }

    // Remove every non-digit character ('(555) 123-4567' -> '5551234567')
    public static String normalizePhone(String phone) {
        // TODO: use replaceAll('[^0-9]', '')
        return phone;
    }

    // An email is valid if it is not blank and contains '@'
    public static Boolean isValidEmail(String email) {
        // TODO
        return true;
    }

    public static ProcessResult processCSV(String csvData) {
        ProcessResult result = new ProcessResult();
        // TODO:
        //  1. Empty/null csvData -> add error 'CSV data is empty'
        //  2. Split on newline, skip the header row and blank lines
        //  3. Skip rows missing FirstName or LastName (count in skippedRows + add error)
        //  4. Flag invalid emails (add error) but still import the row
        //  5. Normalize names + phone, default Company__c to 'Unknown'
        return result;
    }
}`,solution:`public class CSVContactProcessor {

    public class ProcessResult {
        public List<Contact> validContacts = new List<Contact>();
        public List<String> errors = new List<String>();
        public Integer processedRows = 0;
        public Integer skippedRows = 0;
    }

    public static String titleCase(String s) {
        if (String.isBlank(s)) return s;
        String t = s.trim();
        return t.substring(0, 1).toUpperCase() + t.substring(1).toLowerCase();
    }

    public static String normalizePhone(String phone) {
        if (phone == null) return '';
        return phone.replaceAll('[^0-9]', '');
    }

    public static Boolean isValidEmail(String email) {
        return String.isNotBlank(email) && email.contains('@');
    }

    public static ProcessResult processCSV(String csvData) {
        ProcessResult result = new ProcessResult();
        if (String.isBlank(csvData)) {
            result.errors.add('CSV data is empty');
            return result;
        }

        List<String> lines = csvData.split('\\n');
        // Row 0 is the header, so start at 1
        for (Integer i = 1; i < lines.size(); i++) {
            String line = lines.get(i).trim();
            if (line == '') continue;

            List<String> cols = line.split(',');
            String first = cols.size() > 0 ? cols.get(0).trim() : '';
            String last = cols.size() > 1 ? cols.get(1).trim() : '';

            if (String.isBlank(first) || String.isBlank(last)) {
                result.skippedRows++;
                result.errors.add('Row ' + i + ': FirstName and LastName are required');
                continue;
            }

            String email = cols.size() > 2 ? cols.get(2).trim() : '';
            if (!isValidEmail(email)) {
                result.errors.add('Row ' + i + ': Invalid email');
            }

            String phone = normalizePhone(cols.size() > 3 ? cols.get(3) : '');
            String company = 'Unknown';
            if (cols.size() > 4 && String.isNotBlank(cols.get(4))) {
                company = cols.get(4).trim();
            }

            Contact c = new Contact(
                FirstName = titleCase(first),
                LastName = titleCase(last),
                Email = email,
                Phone = phone,
                Company__c = company
            );
            result.validContacts.add(c);
            result.processedRows++;
        }
        return result;
    }
}`,hints:["Split the CSV with csvData.split('\\n') — row 0 is the header, so loop from i = 1","Skip blank lines before splitting them into columns","Use cols.size() > n before reading cols.get(n) — rows can be short","Title Case: s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase()","Remember: an invalid email adds an error but the row is still processed; a missing name skips the row"],scenarios:[{id:"c1",label:"Sample feed: 2 imported, 1 skipped, 1 error",inputDisplay:"3-row sample CSV (see mission)",inputs:{csv:`FirstName,LastName,Email,Phone,Company
John,Smith,john.smith@example.com,(555) 123-4567,Acme Corp
JANE,DOE,JANE.DOE@EXAMPLE.COM,5551234568,GLOBEX
Bob,,bob@,123,Initech`},expectedOutput:["2/1/1"],expectedReturn:"2/1/1",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c2",label:"Title Case: JOHN/jane names normalized",inputDisplay:"first contact FirstName",inputs:{csv:`FirstName,LastName,Email,Phone,Company
John,Smith,john.smith@example.com,(555) 123-4567,Acme Corp
JANE,DOE,JANE.DOE@EXAMPLE.COM,5551234568,GLOBEX
Bob,,bob@,123,Initech`},expectedOutput:["John"],expectedReturn:"John",methodCall:"CSVContactProcessor.processCSV(csv).validContacts[0].FirstName"},{id:"c3",label:"Title Case: JANE DOE → Jane Doe",inputDisplay:"second contact name",inputs:{csv:`FirstName,LastName,Email,Phone,Company
John,Smith,john.smith@example.com,(555) 123-4567,Acme Corp
JANE,DOE,JANE.DOE@EXAMPLE.COM,5551234568,GLOBEX
Bob,,bob@,123,Initech`},expectedOutput:["Jane Doe"],expectedReturn:"Jane Doe",methodCall:"CSVContactProcessor.processCSV(csv).validContacts[1].FirstName + ' ' + CSVContactProcessor.processCSV(csv).validContacts[1].LastName"},{id:"c4",label:"Phone stripped to digits",inputDisplay:"(555) 123-4567",inputs:{csv:`FirstName,LastName,Email,Phone,Company
John,Smith,john.smith@example.com,(555) 123-4567,Acme Corp
JANE,DOE,JANE.DOE@EXAMPLE.COM,5551234568,GLOBEX
Bob,,bob@,123,Initech`},expectedOutput:["5551234567"],expectedReturn:"5551234567",methodCall:"CSVContactProcessor.processCSV(csv).validContacts[0].Phone"},{id:"c5",label:"Company defaults to Unknown (empty column)",inputDisplay:"row ends with a trailing comma",inputs:{csv:`FirstName,LastName,Email,Phone,Company
Al,Ng,al@x.com,555,`},expectedOutput:["Unknown"],expectedReturn:"Unknown",methodCall:"CSVContactProcessor.processCSV(csv).validContacts[0].Company__c"},{id:"c6",label:"Company defaults to Unknown (column missing)",inputDisplay:"row has only 4 columns",inputs:{csv:`FirstName,LastName,Email,Phone,Company
Al,Ng,al@x.com,555`},expectedOutput:["Unknown"],expectedReturn:"Unknown",methodCall:"CSVContactProcessor.processCSV(csv).validContacts[0].Company__c"},{id:"c7",label:"Missing FirstName → row skipped",inputDisplay:",Ng,a@x.com,1,Co",inputs:{csv:`FirstName,LastName,Email,Phone,Company
,Ng,a@x.com,1,Co`},expectedOutput:["0/1/1"],expectedReturn:"0/1/1",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c8",label:"Missing LastName → row skipped",inputDisplay:"Al,,a@x.com,1,Co",inputs:{csv:`FirstName,LastName,Email,Phone,Company
Al,,a@x.com,1,Co`},expectedOutput:["0/1/1"],expectedReturn:"0/1/1",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c9",label:"Invalid email flagged but row still imported",inputDisplay:"Al,Ng,not-an-email,555,Co",inputs:{csv:`FirstName,LastName,Email,Phone,Company
Al,Ng,not-an-email,555,Co`},expectedOutput:["1/0/1"],expectedReturn:"1/0/1",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c10",label:"Header only → nothing to process",inputDisplay:"header row only",inputs:{csv:"FirstName,LastName,Email,Phone,Company"},expectedOutput:["0/0/0"],expectedReturn:"0/0/0",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c11",label:"null input → one error, no crash",inputDisplay:"csvData = null",inputs:{csv:null},expectedOutput:["0/0/1"],expectedReturn:"0/0/1",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c12",label:"Blank lines are ignored",inputDisplay:"blank line between rows",inputs:{csv:`FirstName,LastName,Email,Phone,Company

Al,Ng,a@x.com,555,Co
`},expectedOutput:["1/0/0"],expectedReturn:"1/0/0",methodCall:"((r) => r.processedRows + '/' + r.skippedRows + '/' + r.errors.length)(CSVContactProcessor.processCSV(csv))"},{id:"c13",label:"titleCase handles mixed case",inputDisplay:"mCdONALD",inputs:{},expectedOutput:["Mcdonald"],expectedReturn:"Mcdonald",methodCall:"CSVContactProcessor.titleCase('mCdONALD')"},{id:"c14",label:"normalizePhone(null) → empty string",inputDisplay:"phone = null",inputs:{},expectedOutput:[""],expectedReturn:"",methodCall:"CSVContactProcessor.normalizePhone(null)"},{id:"c15",label:"isValidEmail(null) → false",inputDisplay:"email = null",inputs:{},expectedOutput:["false"],expectedReturn:!1,methodCall:"CSVContactProcessor.isValidEmail(null)"},{id:"c16",label:"isValidEmail without @ → false",inputDisplay:"plainaddress",inputs:{},expectedOutput:["false"],expectedReturn:!1,methodCall:"CSVContactProcessor.isValidEmail('plainaddress')"}]},{id:"mission-opportunity-rollup",title:"Territory Revenue Rollup",company:"SalesPro Analytics",description:"Build a reporting utility that rolls up opportunity revenue by territory, stage, and quarter.",scenario:`SalesPro's VP of Sales wants a weekly report showing pipeline health by territory. They currently export to Excel and build pivot tables manually — a 3-hour weekly task.

The report should show:
- For each territory (custom field Territory__c on Opportunity)
- Total pipeline value by stage
- Quarter-over-quarter comparison
- Win rate (Closed Won / Total)

You'll write the Apex class that queries and aggregates this data.`,requirements:["Create class TerritoryRollup with method getReport() returning Map<String, TerritoryMetrics> (SOQL lives here)","Put the aggregation logic in buildReport(List<Opportunity> opps) so it can be tested without a database — getReport() just queries and calls it","TerritoryMetrics inner class: String territory, Decimal totalPipeline, Decimal closedWon, Decimal winRate, Map<String, Decimal> byStage","Query all Opportunities with Amount != null","Group by Territory__c field","Calculate win rate: closedWon / (closedWon + closedLost)","Handle territories with no wins or losses gracefully"],difficulty:"intermediate",skills:["SOQL","Maps","Collections","Aggregate Functions","Inner Classes"],estimatedHours:3,starterCode:`public class TerritoryRollup {

    public class TerritoryMetrics {
        public String territory;
        public Decimal totalPipeline = 0;
        public Decimal closedWon = 0;
        public Decimal closedLost = 0;
        public Decimal winRate = 0;
        public Map<String, Decimal> byStage = new Map<String, Decimal>();
    }

    public static Map<String, TerritoryMetrics> getReport() {
        // TODO: query Opportunities WHERE Amount != null, then call buildReport(opps)
        return new Map<String, TerritoryMetrics>();
    }

    // Pure aggregation — no SOQL, so it can be tested with plain lists
    public static Map<String, TerritoryMetrics> buildReport(List<Opportunity> opps) {
        Map<String, TerritoryMetrics> report = new Map<String, TerritoryMetrics>();
        // TODO:
        //  - skip opportunities with a null Amount
        //  - group by Territory__c (blank territory -> 'Unassigned')
        //  - accumulate totalPipeline, closedWon, closedLost and byStage
        //  - winRate = closedWon / (closedWon + closedLost) * 100, rounded to 1 decimal
        //    (stay at 0 when there are no closed deals — avoid dividing by zero)
        return report;
    }
}`,solution:`public class TerritoryRollup {

    public class TerritoryMetrics {
        public String territory;
        public Decimal totalPipeline = 0;
        public Decimal closedWon = 0;
        public Decimal closedLost = 0;
        public Decimal winRate = 0;
        public Map<String, Decimal> byStage = new Map<String, Decimal>();
    }

    // Queries the data, then delegates to the pure aggregation method
    public static Map<String, TerritoryMetrics> getReport() {
        List<Opportunity> opps = [
            SELECT Id, Amount, StageName, Territory__c
            FROM Opportunity
            WHERE Amount != null
        ];
        return buildReport(opps);
    }

    public static Map<String, TerritoryMetrics> buildReport(List<Opportunity> opps) {
        Map<String, TerritoryMetrics> report = new Map<String, TerritoryMetrics>();

        for (Opportunity o : opps) {
            if (o.Amount == null) continue;

            String key = String.isBlank(o.Territory__c) ? 'Unassigned' : o.Territory__c;
            if (!report.containsKey(key)) {
                TerritoryMetrics created = new TerritoryMetrics();
                created.territory = key;
                report.put(key, created);
            }

            TerritoryMetrics metrics = report.get(key);
            metrics.totalPipeline += o.Amount;

            Decimal stageTotal = 0;
            if (metrics.byStage.containsKey(o.StageName)) {
                stageTotal = metrics.byStage.get(o.StageName);
            }
            metrics.byStage.put(o.StageName, stageTotal + o.Amount);

            if (o.StageName == 'Closed Won') metrics.closedWon += o.Amount;
            if (o.StageName == 'Closed Lost') metrics.closedLost += o.Amount;
        }

        for (TerritoryMetrics tm : report.values()) {
            Decimal decided = tm.closedWon + tm.closedLost;
            if (decided > 0) {
                tm.winRate = (tm.closedWon / decided * 100).setScale(1);
            }
        }
        return report;
    }
}`,hints:["Keep the SOQL in getReport() and put all the logic in buildReport(List<Opportunity>) so you can test it","Use report.containsKey(key) before report.get(key) — create the TerritoryMetrics the first time you see a territory","Blank Territory__c should go to the 'Unassigned' bucket: String.isBlank(o.Territory__c) ? 'Unassigned' : o.Territory__c","Guard the division: only compute winRate when closedWon + closedLost > 0"],scenarios:[{id:"r1",label:"3 territories (null territory → Unassigned)",inputDisplay:"6 opps: West(3), East(2, one null Amount), blank territory(1)",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["3"],expectedReturn:3,methodCall:"TerritoryRollup.buildReport(opps).size"},{id:"r2",label:"West total pipeline = 5000",inputDisplay:"6 opps: West(3), East(2, one null Amount), blank territory(1)",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["5000"],expectedReturn:5e3,methodCall:"TerritoryRollup.buildReport(opps).get('West').totalPipeline"},{id:"r3",label:"West closed won = 3000",inputDisplay:"6 opps: West(3), East(2, one null Amount), blank territory(1)",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["3000"],expectedReturn:3e3,methodCall:"TerritoryRollup.buildReport(opps).get('West').closedWon"},{id:"r4",label:"West win rate = 75%",inputDisplay:"won 3000, lost 1000",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["75"],expectedReturn:75,methodCall:"TerritoryRollup.buildReport(opps).get('West').winRate"},{id:"r5",label:"East ignores the null Amount → 5000",inputDisplay:"6 opps: West(3), East(2, one null Amount), blank territory(1)",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["5000"],expectedReturn:5e3,methodCall:"TerritoryRollup.buildReport(opps).get('East').totalPipeline"},{id:"r6",label:"East win rate = 100%",inputDisplay:"won 5000, lost 0",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["100"],expectedReturn:100,methodCall:"TerritoryRollup.buildReport(opps).get('East').winRate"},{id:"r7",label:"Unassigned total = 700",inputDisplay:"6 opps: West(3), East(2, one null Amount), blank territory(1)",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["700"],expectedReturn:700,methodCall:"TerritoryRollup.buildReport(opps).get('Unassigned').totalPipeline"},{id:"r8",label:"No closed deals → winRate 0 (no divide-by-zero)",inputDisplay:"only a Negotiation opp",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["0"],expectedReturn:0,methodCall:"TerritoryRollup.buildReport(opps).get('Unassigned').winRate"},{id:"r9",label:"byStage tracks Closed Lost",inputDisplay:"6 opps: West(3), East(2, one null Amount), blank territory(1)",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"West"},{Amount:3e3,StageName:"Closed Won",Territory__c:"West"},{Amount:1e3,StageName:"Closed Lost",Territory__c:"West"},{Amount:5e3,StageName:"Closed Won",Territory__c:"East"},{Amount:null,StageName:"Closed Won",Territory__c:"East"},{Amount:700,StageName:"Negotiation",Territory__c:null}]},expectedOutput:["1000"],expectedReturn:1e3,methodCall:"TerritoryRollup.buildReport(opps).get('West').byStage.get('Closed Lost')"},{id:"r10",label:"Empty list → empty report",inputDisplay:"opps = []",inputs:{opps:[]},expectedOutput:["0"],expectedReturn:0,methodCall:"TerritoryRollup.buildReport(opps).size"},{id:"r11",label:"Same stage amounts accumulate",inputDisplay:"two Prospecting opps 1000 + 2500",inputs:{opps:[{Amount:1e3,StageName:"Prospecting",Territory__c:"N"},{Amount:2500,StageName:"Prospecting",Territory__c:"N"}]},expectedOutput:["3500"],expectedReturn:3500,methodCall:"TerritoryRollup.buildReport(opps).get('N').byStage.get('Prospecting')"},{id:"r12",label:"Win rate rounds to 1 decimal (1 won, 2 lost → 33.3)",inputDisplay:"won 1, lost 2",inputs:{opps:[{Amount:1,StageName:"Closed Won",Territory__c:"T"},{Amount:2,StageName:"Closed Lost",Territory__c:"T"}]},expectedOutput:["33.3"],expectedReturn:33.3,methodCall:"TerritoryRollup.buildReport(opps).get('T').winRate"},{id:"r13",label:"Zero Amount is kept (not null)",inputDisplay:"Amount = 0",inputs:{opps:[{Amount:0,StageName:"Prospecting",Territory__c:"Z"}]},expectedOutput:["1"],expectedReturn:1,methodCall:"TerritoryRollup.buildReport(opps).size"}]},{id:"mission-case-escalation",title:"Auto-Escalate Support Cases",company:"TechSupport Co.",description:"Build a service that automatically escalates high-priority cases that have been open too long.",scenario:`The support manager at TechSupport Co. pulled you into a Slack call:

"Our team keeps missing SLA windows because nobody is watching case age. I need a service that runs every hour and flags cases for escalation. The rules are simple:

- High priority cases open more than 4 hours → escalate
- Medium priority cases open more than 24 hours → escalate

Escalation means setting Status to 'Escalated' and Priority to 'High'. Return only the cases that were actually changed so we know what to audit."`,requirements:["Create class CaseEscalationService with method checkAndEscalate(List<Case> cases) returning List<Case>","Check case age by comparing CreatedDate to DateTime.now()","High priority threshold: more than 4 hours (use DateTime arithmetic)","Medium priority threshold: more than 24 hours","Set Status = 'Escalated' and Priority = 'High' on matching cases","Return only the cases that were modified; skip null CreatedDate gracefully"],difficulty:"beginner",skills:["Apex Classes","DateTime","Lists","Conditionals"],estimatedHours:2,starterCode:`public class CaseEscalationService {

    // Returns only the cases that were escalated
    public static List<Case> checkAndEscalate(List<Case> cases) {
        List<Case> escalated = new List<Case>();
        DateTime now = DateTime.now();

        for (Case c : cases) {
            // TODO: skip cases with null CreatedDate

            // TODO: calculate hours open

            // TODO: check High priority > 4 hours

            // TODO: check Medium priority > 24 hours

            // TODO: if matched, set Status and Priority, add to escalated list
        }

        return escalated;
    }
}`,solution:`public class CaseEscalationService {

    public static List<Case> checkAndEscalate(List<Case> cases) {
        List<Case> escalated = new List<Case>();
        DateTime now = DateTime.now();

        for (Case c : cases) {
            if (c.CreatedDate == null) continue;

            Long msOpen = now.getTime() - c.CreatedDate.getTime();
            Decimal hoursOpen = msOpen / 3600000.0;

            Boolean shouldEscalate = false;
            if (c.Priority == 'High' && hoursOpen > 4) {
                shouldEscalate = true;
            } else if (c.Priority == 'Medium' && hoursOpen > 24) {
                shouldEscalate = true;
            }

            if (shouldEscalate) {
                c.Status = 'Escalated';
                c.Priority = 'High';
                escalated.add(c);
            }
        }

        return escalated;
    }
}`,hints:["Use DateTime.now().getTime() to get milliseconds since epoch. Subtract CreatedDate.getTime() to find elapsed milliseconds.","Convert milliseconds to hours: divide by 3600000 (60 * 60 * 1000).","Check priority with c.Priority == 'High' — Apex strings are compared with ==.","Collect matching cases in a separate List<Case> and return it at the end."],testCases:[{id:"tc1",description:"Defines class CaseEscalationService",pattern:"public\\s+class\\s+CaseEscalationService",errorMessage:"Class must be named exactly `CaseEscalationService`.",exampleFix:"public class CaseEscalationService {"},{id:"tc2",description:"Defines checkAndEscalate method returning List<Case>",pattern:"public\\s+static\\s+List<Case>\\s+checkAndEscalate\\s*\\(",errorMessage:"You need `public static List<Case> checkAndEscalate(List<Case> cases)`.",exampleFix:"public static List<Case> checkAndEscalate(List<Case> cases) {"},{id:"tc3",description:"Uses DateTime.now() to get current time",pattern:"DateTime\\.now\\(\\)",errorMessage:"Use DateTime.now() to capture the current moment for comparison.",exampleFix:"DateTime now = DateTime.now();"},{id:"tc4",description:"Sets Status to 'Escalated'",pattern:"Status\\s*=\\s*'Escalated'",errorMessage:"Set c.Status = 'Escalated' on matched cases.",exampleFix:"c.Status = 'Escalated';"},{id:"tc5",description:"Sets Priority to 'High' on escalated cases",pattern:"Priority\\s*=\\s*'High'",errorMessage:"Set c.Priority = 'High' when escalating.",exampleFix:"c.Priority = 'High';"}],scenarios:[{id:"s1",label:"High priority (8h old)",inputDisplay:"1 High-priority case open 8 hours → should escalate",inputs:{},methodCall:"CaseEscalationService.checkAndEscalate([{Id:'001',Priority:'High',Status:'Open',CreatedDate:new Date(Date.now()-8*3600000)}]).length",expectedReturn:1,expectedOutput:["1"]},{id:"s2",label:"Medium priority (30h old)",inputDisplay:"1 Medium-priority case open 30 hours → should escalate",inputs:{},methodCall:"CaseEscalationService.checkAndEscalate([{Id:'002',Priority:'Medium',Status:'Open',CreatedDate:new Date(Date.now()-30*3600000)}]).length",expectedReturn:1,expectedOutput:["1"]},{id:"s3",label:"High priority (2h old)",inputDisplay:"1 High-priority case open only 2 hours → should NOT escalate",inputs:{},methodCall:"CaseEscalationService.checkAndEscalate([{Id:'003',Priority:'High',Status:'Open',CreatedDate:new Date(Date.now()-2*3600000)}]).length",expectedReturn:0,expectedOutput:["0"]},{id:"s4",label:"Low priority (48h)",inputDisplay:"1 Low-priority case open 48 hours → should NOT escalate",inputs:{},methodCall:"CaseEscalationService.checkAndEscalate([{Id:'004',Priority:'Low',Status:'Open',CreatedDate:new Date(Date.now()-48*3600000)}]).length",expectedReturn:0,expectedOutput:["0"]},{id:"s5",label:"Null CreatedDate",inputDisplay:"1 case with null CreatedDate → skipped (0 escalated)",inputs:{},methodCall:"CaseEscalationService.checkAndEscalate([{Id:'005',Priority:'High',Status:'Open',CreatedDate:null}]).length",expectedReturn:0,expectedOutput:["0"]}]},{id:"mission-contact-dedup",title:"Contact Deduplication Checker",company:"CleanData Corp",description:"Build a utility that identifies potential duplicate contacts by email or by name + account.",scenario:`CleanData's data steward sent you a ticket:

"Our reps keep creating duplicate contacts and it's trashing our reports. I need a utility class that takes a list of contacts and groups any potential duplicates together. Two contacts are duplicates if they share an email, OR if they have the same FirstName + LastName + AccountId.

Return a map where the key is a group identifier (the shared email, or 'firstName_lastName_accountId') and the value is the list of matching contacts. Only return groups with two or more contacts — single-contact groups aren't duplicates."`,requirements:["Create class ContactDupChecker with method findDuplicates(List<Contact> contacts) returning Map<String, List<Contact>>","Group contacts by email (case-insensitive) first; each unique email is a potential duplicate key","Also group by FirstName + LastName + AccountId using key format: firstName_lastName_accountId","Only include groups that have 2 or more contacts in the returned map",'Create method getSummary(Map<String, List<Contact>> dupes) returning a String like "3 duplicate groups found (7 contacts affected)"'],difficulty:"beginner",skills:["Maps","Lists","String Methods","Loops"],estimatedHours:2,starterCode:`public class ContactDupChecker {

    public static Map<String, List<Contact>> findDuplicates(List<Contact> contacts) {
        Map<String, List<Contact>> groups = new Map<String, List<Contact>>();

        for (Contact c : contacts) {
            // TODO: group by email (use toLowerCase for case-insensitivity)

            // TODO: group by name + accountId key
        }

        // TODO: filter out groups with only 1 contact
        Map<String, List<Contact>> dupes = new Map<String, List<Contact>>();

        return dupes;
    }

    public static String getSummary(Map<String, List<Contact>> dupes) {
        // TODO: count total contacts across all groups
        // TODO: return formatted summary string
        return null;
    }
}`,solution:`public class ContactDupChecker {

    public static Map<String, List<Contact>> findDuplicates(List<Contact> contacts) {
        Map<String, List<Contact>> groups = new Map<String, List<Contact>>();

        for (Contact c : contacts) {
            // Email grouping
            if (String.isNotBlank(c.Email)) {
                String emailKey = c.Email.toLowerCase();
                if (!groups.containsKey(emailKey)) {
                    groups.put(emailKey, new List<Contact>());
                }
                groups.get(emailKey).add(c);
            }

            // Name + account grouping
            if (String.isNotBlank(c.FirstName) && String.isNotBlank(c.LastName) && c.AccountId != null) {
                String nameKey = c.FirstName.toLowerCase() + '_' + c.LastName.toLowerCase() + '_' + c.AccountId;
                if (!groups.containsKey(nameKey)) {
                    groups.put(nameKey, new List<Contact>());
                }
                groups.get(nameKey).add(c);
            }
        }

        Map<String, List<Contact>> dupes = new Map<String, List<Contact>>();
        for (String key : groups.keySet()) {
            if (groups.get(key).size() >= 2) {
                dupes.put(key, groups.get(key));
            }
        }
        return dupes;
    }

    public static String getSummary(Map<String, List<Contact>> dupes) {
        Integer totalContacts = 0;
        for (List<Contact> group : dupes.values()) {
            totalContacts += group.size();
        }
        return dupes.size() + ' duplicate groups found (' + totalContacts + ' contacts affected)';
    }
}`,hints:["Use a Map<String, List<Contact>> to accumulate contacts under each key. Check containsKey() before adding.","For case-insensitive email matching, call c.Email.toLowerCase() before using it as a map key.","Build the name key as: c.FirstName.toLowerCase() + '_' + c.LastName.toLowerCase() + '_' + c.AccountId","After building groups, iterate keySet() and only copy entries where list.size() >= 2 into the dupes map."],testCases:[{id:"tc1",description:"Defines class ContactDupChecker",pattern:"public\\s+class\\s+ContactDupChecker",errorMessage:"Class must be named exactly `ContactDupChecker`.",exampleFix:"public class ContactDupChecker {"},{id:"tc2",description:"findDuplicates returns Map<String, List<Contact>>",pattern:"Map<String,\\s*List<Contact>>\\s+findDuplicates\\s*\\(",errorMessage:"Method must be `Map<String, List<Contact>> findDuplicates(List<Contact> contacts)`.",exampleFix:"public static Map<String, List<Contact>> findDuplicates(List<Contact> contacts) {"},{id:"tc3",description:"Uses toLowerCase() for case-insensitive email matching",pattern:"\\.toLowerCase\\(\\)",errorMessage:"Normalize email to lowercase with .toLowerCase() before using as a map key.",exampleFix:"String emailKey = c.Email.toLowerCase();"},{id:"tc4",description:"Filters groups to only those with 2+ contacts",pattern:"\\.size\\(\\)\\s*>=?\\s*2",errorMessage:"Only include groups with 2 or more contacts (size() >= 2).",exampleFix:`if (groups.get(key).size() >= 2) {
    dupes.put(key, groups.get(key));
}`},{id:"tc5",description:"Defines getSummary method",pattern:"public\\s+static\\s+String\\s+getSummary\\s*\\(",errorMessage:"You need a `public static String getSummary(Map<String, List<Contact>> dupes)` method.",exampleFix:"public static String getSummary(Map<String, List<Contact>> dupes) {"}],scenarios:[{id:"s1",label:"Summary: 2 groups, 5 contacts",inputDisplay:"dupes = { 'email@x.com': [c1,c2,c3], 'john_doe_001': [c4,c5] }",inputs:{dupes:new Map([["email@x.com",[{Id:"1"},{Id:"2"},{Id:"3"}]],["john_doe_001",[{Id:"4"},{Id:"5"}]]])},expectedOutput:["2 duplicate groups found (5 contacts affected)"],expectedReturn:"2 duplicate groups found (5 contacts affected)",methodCall:"ContactDupChecker.getSummary(dupes)"},{id:"s2",label:"Summary: 1 group, 2 contacts",inputDisplay:"dupes = { 'jane@x.com': [c1,c2] }",inputs:{dupes:new Map([["jane@x.com",[{Id:"1"},{Id:"2"}]]])},expectedOutput:["1 duplicate groups found (2 contacts affected)"],expectedReturn:"1 duplicate groups found (2 contacts affected)",methodCall:"ContactDupChecker.getSummary(dupes)"},{id:"s3",label:"Summary: empty map → 0 groups",inputDisplay:"dupes = {}",inputs:{dupes:new Map},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(dupes)"},{id:"d1",label:"Same email, different case → 1 group",inputDisplay:"a@x.com / A@X.COM",inputs:{contacts:[{Id:"1",Email:"a@x.com"},{Id:"2",Email:"A@X.COM"}]},expectedOutput:["1 duplicate groups found (2 contacts affected)"],expectedReturn:"1 duplicate groups found (2 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d2",label:"Different emails → no duplicates",inputDisplay:"two unique emails",inputs:{contacts:[{Id:"1",Email:"a@x.com"},{Id:"2",Email:"b@x.com"}]},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d3",label:"Same name + same account → 1 group",inputDisplay:"John Doe, Account 001, no emails",inputs:{contacts:[{Id:"1",FirstName:"John",LastName:"Doe",AccountId:"001"},{Id:"2",FirstName:"john",LastName:"DOE",AccountId:"001"}]},expectedOutput:["1 duplicate groups found (2 contacts affected)"],expectedReturn:"1 duplicate groups found (2 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d4",label:"Same name, different accounts → not duplicates",inputDisplay:"John Doe at two accounts",inputs:{contacts:[{Id:"1",FirstName:"John",LastName:"Doe",AccountId:"001"},{Id:"2",FirstName:"John",LastName:"Doe",AccountId:"002"}]},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d5",label:"Null / blank emails never match each other",inputDisplay:"Email null and empty string",inputs:{contacts:[{Id:"1",Email:null},{Id:"2",Email:null},{Id:"3",Email:""},{Id:"4",Email:"  "}]},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d6",label:"Null AccountId prevents name match",inputDisplay:"same name, no account",inputs:{contacts:[{Id:"1",FirstName:"Jo",LastName:"Li",AccountId:null},{Id:"2",FirstName:"Jo",LastName:"Li",AccountId:null}]},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d7",label:"Match by email AND by name → 2 groups",inputDisplay:"both rules fire",inputs:{contacts:[{Id:"1",Email:"a@x.com",FirstName:"Al",LastName:"Ng",AccountId:"1"},{Id:"2",Email:"a@x.com",FirstName:"Al",LastName:"Ng",AccountId:"1"}]},expectedOutput:["2 duplicate groups found (4 contacts affected)"],expectedReturn:"2 duplicate groups found (4 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d8",label:"Empty list → nothing",inputDisplay:"contacts = []",inputs:{contacts:[]},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"},{id:"d9",label:"Single contact is never a duplicate",inputDisplay:"one contact",inputs:{contacts:[{Id:"1",Email:"a@x.com",FirstName:"A",LastName:"B",AccountId:"1"}]},expectedOutput:["0 duplicate groups found (0 contacts affected)"],expectedReturn:"0 duplicate groups found (0 contacts affected)",methodCall:"ContactDupChecker.getSummary(ContactDupChecker.findDuplicates(contacts))"}]},{id:"mission-opportunity-stage-validator",title:"Opportunity Stage Gate Validator",company:"SalesPipe Inc.",description:"Build a validator that checks whether an opportunity meets all requirements before advancing to Proposal stage.",scenario:`SalesPipe's RevOps lead sent over a Confluence doc with the new stage gate rules:

"Before an opportunity can move to 'Proposal' stage, it must pass all of the following checks:
1. Close date must be in the future
2. Amount must be greater than zero
3. AccountId must be set
4. HasContactRole__c (custom boolean) must be true

If any check fails, the rep should see a clear error message explaining exactly what's missing. We also need a quick yes/no method they can call from a flow, and a utility to format all errors into a single string."`,requirements:["Create class StageGateValidator with method validate(Opportunity opp) returning List<String> (empty list = valid)","Check each rule separately and add a descriptive error string for each failure","Create method isReadyForProposal(Opportunity opp) returning Boolean (calls validate and checks if list is empty)",'Create method formatErrors(List<String> errors) returning errors joined by "; "',"Handle null Amount and null CloseDate gracefully (treat as failing the check)"],difficulty:"beginner",skills:["Apex Classes","Lists","Validation","Conditionals","Date Operations"],estimatedHours:2,starterCode:`public class StageGateValidator {

    public static List<String> validate(Opportunity opp) {
        List<String> errors = new List<String>();

        // TODO: Check 1 — Close date must be in the future

        // TODO: Check 2 — Amount must be > 0

        // TODO: Check 3 — AccountId must be set

        // TODO: Check 4 — HasContactRole__c must be true

        return errors;
    }

    public static Boolean isReadyForProposal(Opportunity opp) {
        // TODO: Call validate() and return true only if no errors
        return false;
    }

    public static String formatErrors(List<String> errors) {
        // TODO: Join errors with '; ' separator
        return null;
    }
}`,solution:`public class StageGateValidator {

    public static List<String> validate(Opportunity opp) {
        List<String> errors = new List<String>();

        if (opp.CloseDate == null || opp.CloseDate <= Date.today()) {
            errors.add('Close date must be a future date');
        }

        if (opp.Amount == null || opp.Amount <= 0) {
            errors.add('Amount must be greater than zero');
        }

        if (opp.AccountId == null) {
            errors.add('Opportunity must be linked to an Account');
        }

        if (opp.HasContactRole__c != true) {
            errors.add('At least one Contact Role must be associated');
        }

        return errors;
    }

    public static Boolean isReadyForProposal(Opportunity opp) {
        return validate(opp).isEmpty();
    }

    public static String formatErrors(List<String> errors) {
        return String.join(errors, '; ');
    }
}`,hints:["Build an empty List<String> errors at the start. Add a message for each failing check and return the list.","For the date check: opp.CloseDate <= Date.today() means today or in the past — that's a failure.","isReadyForProposal can be a one-liner: return validate(opp).isEmpty();","String.join(errors, '; ') concatenates a list with a separator — no loop needed."],testCases:[{id:"tc1",description:"Defines class StageGateValidator",pattern:"public\\s+class\\s+StageGateValidator",errorMessage:"Class must be named exactly `StageGateValidator`.",exampleFix:"public class StageGateValidator {"},{id:"tc2",description:"validate() returns List<String>",pattern:"public\\s+static\\s+List<String>\\s+validate\\s*\\(",errorMessage:"You need `public static List<String> validate(Opportunity opp)`.",exampleFix:"public static List<String> validate(Opportunity opp) {"},{id:"tc3",description:"Checks CloseDate against Date.today()",pattern:"Date\\.today\\(\\)",errorMessage:"Compare CloseDate to Date.today() to check if the date is in the future.",exampleFix:`if (opp.CloseDate == null || opp.CloseDate <= Date.today()) {
    errors.add('Close date must be a future date');
}`},{id:"tc4",description:"Defines isReadyForProposal returning Boolean",pattern:"public\\s+static\\s+Boolean\\s+isReadyForProposal\\s*\\(",errorMessage:"You need `public static Boolean isReadyForProposal(Opportunity opp)`.",exampleFix:`public static Boolean isReadyForProposal(Opportunity opp) {
    return validate(opp).isEmpty();
}`},{id:"tc5",description:"Uses String.join() in formatErrors",pattern:"String\\.join\\s*\\(",errorMessage:"Use String.join(errors, '; ') in formatErrors() to concatenate the list.",exampleFix:`public static String formatErrors(List<String> errors) {
    return String.join(errors, '; ');
}`}],scenarios:[{id:"s1",label:"Valid opp → ready for proposal",inputDisplay:"opp = { CloseDate: future, Amount: 50000, AccountId: '001', HasContactRole__c: true }",inputs:{opp:{CloseDate:new Date(Date.now()+30*24*60*60*1e3),Amount:5e4,AccountId:"001abc",HasContactRole__c:!0}},expectedOutput:["true"],expectedReturn:!0,methodCall:"StageGateValidator.isReadyForProposal(opp)"},{id:"s2",label:"Missing AccountId → not ready",inputDisplay:"opp = { CloseDate: future, Amount: 50000, AccountId: null, HasContactRole__c: true }",inputs:{opp:{CloseDate:new Date(Date.now()+30*24*60*60*1e3),Amount:5e4,AccountId:null,HasContactRole__c:!0}},expectedOutput:["false"],expectedReturn:!1,methodCall:"StageGateValidator.isReadyForProposal(opp)"},{id:"s3",label:"Zero amount → not ready",inputDisplay:"opp = { CloseDate: future, Amount: 0, AccountId: '001', HasContactRole__c: true }",inputs:{opp:{CloseDate:new Date(Date.now()+30*24*60*60*1e3),Amount:0,AccountId:"001abc",HasContactRole__c:!0}},expectedOutput:["false"],expectedReturn:!1,methodCall:"StageGateValidator.isReadyForProposal(opp)"},{id:"s4",label:"No contact role → not ready",inputDisplay:"opp = { CloseDate: future, Amount: 10000, AccountId: '001', HasContactRole__c: false }",inputs:{opp:{CloseDate:new Date(Date.now()+30*24*60*60*1e3),Amount:1e4,AccountId:"001abc",HasContactRole__c:!1}},expectedOutput:["false"],expectedReturn:!1,methodCall:"StageGateValidator.isReadyForProposal(opp)"},{id:"s5",label:"validate — 2 errors returned",inputDisplay:"opp with null AccountId and Amount=0 → 2 errors",inputs:{opp:{CloseDate:new Date(Date.now()+30*24*60*60*1e3),Amount:0,AccountId:null,HasContactRole__c:!0}},expectedOutput:["2"],expectedReturn:2,methodCall:"StageGateValidator.validate(opp).size()"},{id:"s6",label:"formatErrors — joins with semicolon",inputDisplay:"['Error A', 'Error B'] → 'Error A; Error B'",inputs:{errors:["Error A","Error B"]},expectedOutput:["Error A; Error B"],expectedReturn:"Error A; Error B",methodCall:"StageGateValidator.formatErrors(errors)"},{id:"s7",label:"formatErrors — empty list → empty string",inputDisplay:"[] → ''",inputs:{errors:[]},expectedOutput:[""],expectedReturn:"",methodCall:"StageGateValidator.formatErrors(errors)"}]},{id:"mission-xp-calculator",title:"Employee XP & Level Calculator",company:"GamifyHR",description:"Build a gamification engine that calculates employee XP points, assigns levels, and tracks progress to the next tier.",scenario:`The engineering lead at GamifyHR walked you through their new employee engagement feature:

"We want to give every employee an XP score based on what they've accomplished. Here's the formula:
- Each completed task = 10 XP
- Each completed project = 50 XP
- Each positive review = 25 XP

Levels:
- 0–99 XP: Rookie
- 100–299 XP: Contributor
- 300–599 XP: Expert
- 600+ XP: Champion

We also need a progress bar percentage showing how far they are to the next level. If someone enters negative numbers, just treat them as zero."`,requirements:["Create class EmployeeXPCalculator with method calculateXP(Integer tasks, Integer projects, Integer reviews) returning Integer","Formula: tasks × 10 + projects × 50 + reviews × 25; treat negatives as 0","Create method getLevel(Integer xp) returning the level name string","Create method getProgressToNextLevel(Integer xp) returning Decimal (0.0 to 100.0 percentage within current tier)","Champions at 600+ XP return 100.0 (already at max level)"],difficulty:"beginner",skills:["Apex Classes","Arithmetic","Conditionals","Decimal Math"],estimatedHours:1.5,starterCode:`public class EmployeeXPCalculator {

    public static Integer calculateXP(Integer tasks, Integer projects, Integer reviews) {
        // TODO: Treat negatives as 0
        // TODO: Return tasks*10 + projects*50 + reviews*25
        return 0;
    }

    public static String getLevel(Integer xp) {
        // Thresholds: 0=Rookie, 100=Contributor, 300=Expert, 600=Champion
        // TODO: Return level name based on xp
        return null;
    }

    public static Decimal getProgressToNextLevel(Integer xp) {
        // TODO: Return % progress within current tier (0.0 to 100.0)
        // Champion returns 100.0
        return 0.0;
    }
}`,solution:`public class EmployeeXPCalculator {

    public static Integer calculateXP(Integer tasks, Integer projects, Integer reviews) {
        Integer t = (tasks != null && tasks > 0) ? tasks : 0;
        Integer p = (projects != null && projects > 0) ? projects : 0;
        Integer r = (reviews != null && reviews > 0) ? reviews : 0;
        return t * 10 + p * 50 + r * 25;
    }

    public static String getLevel(Integer xp) {
        if (xp == null || xp < 0) xp = 0;
        if (xp >= 600) return 'Champion';
        if (xp >= 300) return 'Expert';
        if (xp >= 100) return 'Contributor';
        return 'Rookie';
    }

    public static Decimal getProgressToNextLevel(Integer xp) {
        if (xp == null || xp < 0) xp = 0;
        if (xp >= 600) return 100.0;
        if (xp >= 300) return ((xp - 300) / 300.0) * 100;
        if (xp >= 100) return ((xp - 100) / 200.0) * 100;
        return (xp / 100.0) * 100;
    }
}`,hints:["Guard against negatives with a ternary: `Integer t = (tasks > 0) ? tasks : 0;`","getLevel() checks from highest tier down: if xp >= 600 return 'Champion', else if xp >= 300 return 'Expert', etc.","For getProgressToNextLevel, each tier has a range. For Contributor (100–299): progress = (xp - 100) / 200.0 * 100.","Champion is the max level — return 100.0 when xp >= 600, no further progress to track."],testCases:[{id:"tc1",description:"Defines class EmployeeXPCalculator",pattern:"public\\s+class\\s+EmployeeXPCalculator",errorMessage:"Class must be named exactly `EmployeeXPCalculator`.",exampleFix:"public class EmployeeXPCalculator {"},{id:"tc2",description:"calculateXP multiplies tasks by 10",pattern:"tasks?\\s*\\*\\s*10|10\\s*\\*\\s*tasks?",errorMessage:"Multiply tasks by 10 in your XP formula.",exampleFix:"return t * 10 + p * 50 + r * 25;"},{id:"tc3",description:"calculateXP multiplies projects by 50",pattern:"projects?\\s*\\*\\s*50|50\\s*\\*\\s*projects?",errorMessage:"Multiply projects by 50 in your XP formula.",exampleFix:"return t * 10 + p * 50 + r * 25;"},{id:"tc4",description:"getLevel uses 600 as Champion threshold",pattern:">=\\s*600|600\\s*<=",errorMessage:"Check xp >= 600 to identify the Champion level.",exampleFix:"if (xp >= 600) return 'Champion';"},{id:"tc5",description:"getProgressToNextLevel returns Decimal",pattern:"public\\s+static\\s+Decimal\\s+getProgressToNextLevel\\s*\\(",errorMessage:"You need `public static Decimal getProgressToNextLevel(Integer xp)`.",exampleFix:"public static Decimal getProgressToNextLevel(Integer xp) {"}],scenarios:[{id:"s1",label:"XP calc: 5 tasks, 2 projects, 1 review",inputDisplay:"tasks=5, projects=2, reviews=1",inputs:{tasks:5,projects:2,reviews:1},expectedOutput:["175"],expectedReturn:175,methodCall:"EmployeeXPCalculator.calculateXP(tasks, projects, reviews)"},{id:"s2",label:"XP calc: negatives treated as 0",inputDisplay:"tasks=-1, projects=0, reviews=2",inputs:{tasks:-1,projects:0,reviews:2},expectedOutput:["50"],expectedReturn:50,methodCall:"EmployeeXPCalculator.calculateXP(tasks, projects, reviews)"},{id:"s3",label:"Level: Rookie (xp = 50)",inputDisplay:"xp = 50",inputs:{xp:50},expectedOutput:["Rookie"],expectedReturn:"Rookie",methodCall:"EmployeeXPCalculator.getLevel(xp)"},{id:"s4",label:"Level: Contributor (xp = 150)",inputDisplay:"xp = 150",inputs:{xp:150},expectedOutput:["Contributor"],expectedReturn:"Contributor",methodCall:"EmployeeXPCalculator.getLevel(xp)"},{id:"s5",label:"Level: Champion (xp = 700)",inputDisplay:"xp = 700",inputs:{xp:700},expectedOutput:["Champion"],expectedReturn:"Champion",methodCall:"EmployeeXPCalculator.getLevel(xp)"},{id:"s6",label:"Progress: Rookie 50 xp → 50%",inputDisplay:"xp = 50 (Rookie tier 0–99)",inputs:{xp:50},expectedOutput:["50"],expectedReturn:50,methodCall:"EmployeeXPCalculator.getProgressToNextLevel(xp)"},{id:"s7",label:"Progress: Contributor 200 xp → 50%",inputDisplay:"xp = 200 (Contributor tier 100–299)",inputs:{xp:200},expectedOutput:["50"],expectedReturn:50,methodCall:"EmployeeXPCalculator.getProgressToNextLevel(xp)"},{id:"s8",label:"Progress: Champion → 100%",inputDisplay:"xp = 650 → already at max",inputs:{xp:650},expectedOutput:["100"],expectedReturn:100,methodCall:"EmployeeXPCalculator.getProgressToNextLevel(xp)"}]},{id:"mission-invoice-generator",title:"Invoice Line Item Calculator",company:"BillFast Ltd.",description:"Build an invoice calculator with an inner class for line items and a method that generates a full invoice summary.",scenario:`BillFast's billing team sent over their spreadsheet logic to automate:

"Each invoice has line items. Every line item has a quantity, a unit price, and a discount percentage. The formula for a single line is:
  total = quantity × unitPrice × (1 - discount / 100)

We need a full invoice summary with three numbers:
- subtotal: sum of line totals before discount
- discountSaved: how much the customer saved from discounts
- grandTotal: sum of discounted line totals

Handle edge cases: zero quantity should be fine, negative discount should be treated as 0."`,requirements:["Create class InvoiceCalculator with an inner class LineItem (public Decimal quantity, unitPrice, discountPct)","Create method calculateLine(LineItem item) returning Decimal (discounted line total)","Create method generateInvoice(List<LineItem> items) returning Map<String, Decimal> with keys 'subtotal', 'discountSaved', 'grandTotal'","Treat negative discountPct as 0 (no discount)","subtotal = sum of (quantity × unitPrice); discountSaved = subtotal - grandTotal"],difficulty:"beginner",skills:["Inner Classes","Lists","Maps","Decimal Math","Loops"],estimatedHours:2,starterCode:`public class InvoiceCalculator {

    public class LineItem {
        public Decimal quantity;
        public Decimal unitPrice;
        public Decimal discountPct;

        public LineItem(Decimal qty, Decimal price, Decimal disc) {
            this.quantity = qty;
            this.unitPrice = price;
            this.discountPct = disc;
        }
    }

    public static Decimal calculateLine(LineItem item) {
        // TODO: Apply discount formula: qty * price * (1 - disc/100)
        // TODO: Treat negative discount as 0
        return 0;
    }

    public static Map<String, Decimal> generateInvoice(List<LineItem> items) {
        Decimal subtotal = 0;
        Decimal grandTotal = 0;

        for (LineItem item : items) {
            // TODO: accumulate subtotal (pre-discount) and grandTotal (post-discount)
        }

        // TODO: calculate discountSaved and return map
        return new Map<String, Decimal>();
    }
}`,solution:`public class InvoiceCalculator {

    public class LineItem {
        public Decimal quantity;
        public Decimal unitPrice;
        public Decimal discountPct;

        public LineItem(Decimal qty, Decimal price, Decimal disc) {
            this.quantity = qty;
            this.unitPrice = price;
            this.discountPct = disc;
        }
    }

    public static Decimal calculateLine(LineItem item) {
        Decimal disc = (item.discountPct != null && item.discountPct > 0) ? item.discountPct : 0;
        return item.quantity * item.unitPrice * (1 - disc / 100);
    }

    public static Map<String, Decimal> generateInvoice(List<LineItem> items) {
        Decimal subtotal = 0;
        Decimal grandTotal = 0;

        for (LineItem item : items) {
            subtotal += item.quantity * item.unitPrice;
            grandTotal += calculateLine(item);
        }

        Decimal discountSaved = subtotal - grandTotal;

        return new Map<String, Decimal>{
            'subtotal' => subtotal,
            'discountSaved' => discountSaved,
            'grandTotal' => grandTotal
        };
    }
}`,hints:["Inner classes in Apex are declared inside the outer class with `public class LineItem { ... }`.","The discount formula: `quantity * unitPrice * (1 - discountPct / 100)`. Guard against negative discount first.","subtotal accumulates quantity × unitPrice (pre-discount). grandTotal accumulates calculateLine() results (post-discount).","discountSaved = subtotal - grandTotal. Put all three into the map using => syntax: `'subtotal' => subtotal`."],testCases:[{id:"tc1",description:"Defines inner class LineItem",pattern:"public\\s+class\\s+LineItem",errorMessage:"You need an inner class `LineItem` inside `InvoiceCalculator`.",exampleFix:`public class LineItem {
    public Decimal quantity;
    public Decimal unitPrice;
    public Decimal discountPct;
}`},{id:"tc2",description:"calculateLine applies the discount formula",pattern:"1\\s*-\\s*disc|discountPct\\s*/\\s*100",errorMessage:"Apply the discount formula: quantity * unitPrice * (1 - discount/100).",exampleFix:"return item.quantity * item.unitPrice * (1 - disc / 100);"},{id:"tc3",description:"generateInvoice returns a map with 'grandTotal' key",pattern:"'grandTotal'",errorMessage:"The returned map must include the key 'grandTotal'.",exampleFix:`return new Map<String, Decimal>{
    'subtotal' => subtotal,
    'grandTotal' => grandTotal,
    'discountSaved' => discountSaved
};`},{id:"tc4",description:"Returns 'discountSaved' in the invoice map",pattern:"'discountSaved'",errorMessage:"The returned map must include the key 'discountSaved'.",exampleFix:`Decimal discountSaved = subtotal - grandTotal;
// Add to map: 'discountSaved' => discountSaved`},{id:"tc5",description:"Handles negative discount gracefully",pattern:"discountPct\\s*>\\s*0|disc\\s*>\\s*0",errorMessage:"Guard against negative discount by checking discountPct > 0 before applying it.",exampleFix:"Decimal disc = (item.discountPct != null && item.discountPct > 0) ? item.discountPct : 0;"}],scenarios:[{id:"s1",label:"Single line 10% off",inputDisplay:"qty=10, price=100, discount=10% → line total = 900",inputs:{},methodCall:"InvoiceCalculator.calculateLine({quantity:10,unitPrice:100,discountPct:10})",expectedReturn:900,expectedOutput:["900"]},{id:"s2",label:"Zero discount",inputDisplay:"qty=5, price=200, discount=0% → line total = 1000",inputs:{},methodCall:"InvoiceCalculator.calculateLine({quantity:5,unitPrice:200,discountPct:0})",expectedReturn:1e3,expectedOutput:["1000"]},{id:"s3",label:"Negative discount treated as 0",inputDisplay:"qty=4, price=50, discount=-10% → treated as 0%, total = 200",inputs:{},methodCall:"InvoiceCalculator.calculateLine({quantity:4,unitPrice:50,discountPct:-10})",expectedReturn:200,expectedOutput:["200"]},{id:"s4",label:"generateInvoice grandTotal",inputDisplay:"2 items: [qty=10,price=100,disc=10%] + [qty=5,price=50,disc=0%] → grandTotal=1150",inputs:{},methodCall:"InvoiceCalculator.generateInvoice([{quantity:10,unitPrice:100,discountPct:10},{quantity:5,unitPrice:50,discountPct:0}]).get('grandTotal')",expectedReturn:1150,expectedOutput:["1150"]},{id:"s5",label:"generateInvoice subtotal",inputDisplay:"2 items: [qty=10,price=100,disc=10%] + [qty=5,price=50,disc=0%] → subtotal=1250",inputs:{},methodCall:"InvoiceCalculator.generateInvoice([{quantity:10,unitPrice:100,discountPct:10},{quantity:5,unitPrice:50,discountPct:0}]).get('subtotal')",expectedReturn:1250,expectedOutput:["1250"]},{id:"s6",label:"generateInvoice discountSaved",inputDisplay:"subtotal=1250, grandTotal=1150 → discountSaved=100",inputs:{},methodCall:"InvoiceCalculator.generateInvoice([{quantity:10,unitPrice:100,discountPct:10},{quantity:5,unitPrice:50,discountPct:0}]).get('discountSaved')",expectedReturn:100,expectedOutput:["100"]}]},{id:"mission-sla-tracker",title:"SLA Breach Detector",company:"ServiceFirst Corp",description:"Build a service that flags cases that have breached their SLA window based on priority.",scenario:`ServiceFirst's support director handed over the SLA matrix:

"Every case has a priority, and each priority has a maximum response window before we're in breach:
- Critical: 2 hours
- High: 8 hours
- Medium: 24 hours
- Low: 72 hours

I need a class that can tell me whether a single case is breached, get a list of all breached cases from a batch, and produce a quick text report with the totals."`,requirements:["Create class SLATracker with method getSLAHours(String priority) returning Integer (the SLA window in hours)","Create method isBreached(Case c) returning Boolean (true if case is older than SLA window)","Create method getBreachers(List<Case> cases) returning List<Case> of only breached cases",'Create method getBreachReport(List<Case> cases) returning String like "5 of 20 cases are in breach"',"Handle unknown priority in getSLAHours by returning 72 (default to Low SLA)"],difficulty:"beginner",skills:["Apex Classes","DateTime","Maps","Conditionals","Lists"],estimatedHours:2,starterCode:`public class SLATracker {

    public static Integer getSLAHours(String priority) {
        // TODO: Return hours for Critical(2), High(8), Medium(24), Low(72)
        // Default to 72 for unknown priorities
        return 72;
    }

    public static Boolean isBreached(Case c) {
        // TODO: Compare CreatedDate + SLA hours to DateTime.now()
        return false;
    }

    public static List<Case> getBreachers(List<Case> cases) {
        // TODO: Return only breached cases
        return new List<Case>();
    }

    public static String getBreachReport(List<Case> cases) {
        // TODO: Return "X of Y cases are in breach"
        return null;
    }
}`,solution:`public class SLATracker {

    public static Integer getSLAHours(String priority) {
        if (priority == 'Critical') return 2;
        if (priority == 'High') return 8;
        if (priority == 'Medium') return 24;
        return 72;
    }

    public static Boolean isBreached(Case c) {
        if (c.CreatedDate == null) return false;
        Integer slaHours = getSLAHours(c.Priority);
        DateTime deadline = c.CreatedDate.addHours(slaHours);
        return DateTime.now() > deadline;
    }

    public static List<Case> getBreachers(List<Case> cases) {
        List<Case> breachers = new List<Case>();
        for (Case c : cases) {
            if (isBreached(c)) {
                breachers.add(c);
            }
        }
        return breachers;
    }

    public static String getBreachReport(List<Case> cases) {
        Integer breachCount = getBreachers(cases).size();
        return breachCount + ' of ' + cases.size() + ' cases are in breach';
    }
}`,hints:["getSLAHours can use a chain of if/return statements — no need for a switch or map.","To find the deadline: `DateTime deadline = c.CreatedDate.addHours(slaHours);` then compare to DateTime.now().","isBreached should return false for null CreatedDate to avoid exceptions.","getBreachers can call isBreached() in a loop — reuse your logic, don't repeat it."],testCases:[{id:"tc1",description:"Defines class SLATracker",pattern:"public\\s+class\\s+SLATracker",errorMessage:"Class must be named exactly `SLATracker`.",exampleFix:"public class SLATracker {"},{id:"tc2",description:"getSLAHours returns 2 for Critical priority",pattern:"priority\\s*==\\s*'Critical'[^}]*return\\s+2|return\\s+2[^}]*'Critical'",errorMessage:"Return 2 hours for Critical priority in getSLAHours().",exampleFix:`if (priority == 'Critical') return 2;
if (priority == 'High') return 8;`},{id:"tc3",description:"isBreached uses addHours() to calculate deadline",pattern:"\\.addHours\\s*\\(",errorMessage:"Calculate the deadline with createdDate.addHours(slaHours) and compare to DateTime.now().",exampleFix:`DateTime deadline = c.CreatedDate.addHours(slaHours);
return DateTime.now() > deadline;`},{id:"tc4",description:"getBreachers returns List<Case>",pattern:"public\\s+static\\s+List<Case>\\s+getBreachers\\s*\\(",errorMessage:"You need `public static List<Case> getBreachers(List<Case> cases)`.",exampleFix:"public static List<Case> getBreachers(List<Case> cases) {"},{id:"tc5",description:"getBreachReport returns formatted string with counts",pattern:"public\\s+static\\s+String\\s+getBreachReport\\s*\\(",errorMessage:"You need `public static String getBreachReport(List<Case> cases)` returning a summary string.",exampleFix:`public static String getBreachReport(List<Case> cases) {
    Integer breachCount = getBreachers(cases).size();
    return breachCount + ' of ' + cases.size() + ' cases are in breach';
}`}],scenarios:[{id:"s1",label:"Critical priority → 2 hours",inputDisplay:"priority = 'Critical'",inputs:{priority:"Critical"},expectedOutput:["2"],expectedReturn:2,methodCall:"SLATracker.getSLAHours(priority)"},{id:"s2",label:"High priority → 8 hours",inputDisplay:"priority = 'High'",inputs:{priority:"High"},expectedOutput:["8"],expectedReturn:8,methodCall:"SLATracker.getSLAHours(priority)"},{id:"s3",label:"Medium priority → 24 hours",inputDisplay:"priority = 'Medium'",inputs:{priority:"Medium"},expectedOutput:["24"],expectedReturn:24,methodCall:"SLATracker.getSLAHours(priority)"},{id:"s4",label:"Low priority → 72 hours",inputDisplay:"priority = 'Low'",inputs:{priority:"Low"},expectedOutput:["72"],expectedReturn:72,methodCall:"SLATracker.getSLAHours(priority)"},{id:"s5",label:"Unknown priority → 72 hours (default)",inputDisplay:"priority = 'Unknown'",inputs:{priority:"Unknown"},expectedOutput:["72"],expectedReturn:72,methodCall:"SLATracker.getSLAHours(priority)"},{id:"b1",label:"Critical case 3h old → breached",inputDisplay:"SLA 2h, age 3h",inputs:{c:{Priority:"Critical",CreatedDate:yn(3)}},expectedOutput:["true"],expectedReturn:!0,methodCall:"SLATracker.isBreached(c)"},{id:"b2",label:"Critical case 1h old → not breached",inputDisplay:"SLA 2h, age 1h",inputs:{c:{Priority:"Critical",CreatedDate:yn(1)}},expectedOutput:["false"],expectedReturn:!1,methodCall:"SLATracker.isBreached(c)"},{id:"b3",label:"High case 7h old → not breached",inputDisplay:"SLA 8h, age 7h",inputs:{c:{Priority:"High",CreatedDate:yn(7)}},expectedOutput:["false"],expectedReturn:!1,methodCall:"SLATracker.isBreached(c)"},{id:"b4",label:"High case 9h old → breached",inputDisplay:"SLA 8h, age 9h",inputs:{c:{Priority:"High",CreatedDate:yn(9)}},expectedOutput:["true"],expectedReturn:!0,methodCall:"SLATracker.isBreached(c)"},{id:"b5",label:"Low case 71h old → not breached",inputDisplay:"SLA 72h, age 71h",inputs:{c:{Priority:"Low",CreatedDate:yn(71)}},expectedOutput:["false"],expectedReturn:!1,methodCall:"SLATracker.isBreached(c)"},{id:"b6",label:"Null CreatedDate → not breached (no crash)",inputDisplay:"CreatedDate = null",inputs:{c:{Priority:"Critical",CreatedDate:null}},expectedOutput:["false"],expectedReturn:!1,methodCall:"SLATracker.isBreached(c)"},{id:"b7",label:"Report: 2 of 3 in breach",inputDisplay:"mixed list",inputs:{cases:[{Priority:"Critical",CreatedDate:yn(5)},{Priority:"High",CreatedDate:yn(1)},{Priority:"Medium",CreatedDate:yn(30)}]},expectedOutput:["2 of 3 cases are in breach"],expectedReturn:"2 of 3 cases are in breach",methodCall:"SLATracker.getBreachReport(cases)"},{id:"b8",label:"Report: empty list",inputDisplay:"cases = []",inputs:{cases:[]},expectedOutput:["0 of 0 cases are in breach"],expectedReturn:"0 of 0 cases are in breach",methodCall:"SLATracker.getBreachReport(cases)"}]},{id:"mission-territory-assignment",title:"Sales Territory Auto-Assignment",company:"RegionSales Inc.",description:"Build a territory assigner that maps accounts to sales regions based on country and state.",scenario:`RegionSales' Sales Ops team gave you the territory mapping doc:

"When a new account is created, we need to auto-assign a territory:
- USA + CA, OR, WA → 'West'
- USA + NY, NJ, MA → 'East'
- USA + TX, IL, OH → 'Central'
- USA + any other state → 'USA-Other'
- Country = Canada → 'Canada'
- Country = UK, DE, or FR → 'Europe'
- Anything else → 'International'
- Blank or null country → 'Unassigned'

Matching should work regardless of case — 'usa', 'USA', 'Us' should all match."`,requirements:["Create class TerritoryAssigner with method assignTerritory(String country, String state) returning String",'Handle null or blank country by returning "Unassigned"',"All string comparisons must be case-insensitive (use toUpperCase() or equalsIgnoreCase())","USA state matching: check if state is in a known Set for each region","Create method bulkAssign(List<Account> accounts) returning Map<Id, String>"],difficulty:"beginner",skills:["String Methods","Conditionals","Maps","Null Safety"],estimatedHours:1.5,starterCode:`public class TerritoryAssigner {

    public static String assignTerritory(String country, String state) {
        // TODO: Handle null/blank country
        if (String.isBlank(country)) return 'Unassigned';

        String c = country.toUpperCase();
        String s = (state != null) ? state.toUpperCase() : '';

        // TODO: Check USA regions using Sets
        if (c == 'USA' || c == 'US') {
            Set<String> west = new Set<String>{'CA', 'OR', 'WA'};
            // TODO: Add East and Central sets
            // TODO: Return region or 'USA-Other'
        }

        // TODO: Handle Canada, Europe, International
        return 'International';
    }

    public static Map<Id, String> bulkAssign(List<Account> accounts) {
        // TODO: Call assignTerritory for each account
        return new Map<Id, String>();
    }
}`,solution:`public class TerritoryAssigner {

    public static String assignTerritory(String country, String state) {
        if (String.isBlank(country)) return 'Unassigned';

        String c = country.toUpperCase();
        String s = (state != null) ? state.toUpperCase() : '';

        if (c == 'USA' || c == 'US') {
            Set<String> west    = new Set<String>{'CA', 'OR', 'WA'};
            Set<String> east    = new Set<String>{'NY', 'NJ', 'MA'};
            Set<String> central = new Set<String>{'TX', 'IL', 'OH'};

            if (west.contains(s))    return 'West';
            if (east.contains(s))    return 'East';
            if (central.contains(s)) return 'Central';
            return 'USA-Other';
        }

        if (c == 'CANADA' || c == 'CA') return 'Canada';

        Set<String> europe = new Set<String>{'UK', 'DE', 'FR'};
        if (europe.contains(c)) return 'Europe';

        return 'International';
    }

    public static Map<Id, String> bulkAssign(List<Account> accounts) {
        Map<Id, String> result = new Map<Id, String>();
        for (Account a : accounts) {
            result.put(a.Id, assignTerritory(a.BillingCountry, a.BillingState));
        }
        return result;
    }
}`,hints:["Call String.isBlank(country) first — it handles both null and empty strings in one check.","toUpperCase() on the country before all comparisons avoids writing case variants like 'usa', 'Usa', 'USA'.","Use a Set<String> for state lookups: `Set<String> west = new Set<String>{'CA', 'OR', 'WA'};` then `west.contains(s)`.","bulkAssign should loop over accounts and call assignTerritory(a.BillingCountry, a.BillingState) for each."],testCases:[{id:"tc1",description:"Defines class TerritoryAssigner",pattern:"public\\s+class\\s+TerritoryAssigner",errorMessage:"Class must be named exactly `TerritoryAssigner`.",exampleFix:"public class TerritoryAssigner {"},{id:"tc2",description:"Returns 'Unassigned' for blank/null country",pattern:"String\\.isBlank\\s*\\(|country\\s*==\\s*null",errorMessage:"Check for blank/null country with String.isBlank() and return 'Unassigned'.",exampleFix:"if (String.isBlank(country)) return 'Unassigned';"},{id:"tc3",description:"Uses toUpperCase() for case-insensitive matching",pattern:"\\.toUpperCase\\(\\)",errorMessage:"Normalize country and state to uppercase with .toUpperCase() before comparing.",exampleFix:`String c = country.toUpperCase();
String s = (state != null) ? state.toUpperCase() : '';`},{id:"tc4",description:"Uses Set for state region matching",pattern:"new\\s+Set<String>\\s*\\{",errorMessage:"Use Set<String> collections for West, East, and Central state lookups.",exampleFix:`Set<String> west = new Set<String>{'CA', 'OR', 'WA'};
if (west.contains(s)) return 'West';`},{id:"tc5",description:"Defines bulkAssign returning Map<Id, String>",pattern:"Map<Id,\\s*String>\\s+bulkAssign\\s*\\(",errorMessage:"You need `public static Map<Id, String> bulkAssign(List<Account> accounts)`.",exampleFix:"public static Map<Id, String> bulkAssign(List<Account> accounts) {"}],scenarios:[{id:"s1",label:"West (USA, CA)",inputDisplay:"country='USA', state='CA'",inputs:{country:"USA",state:"CA"},expectedOutput:["West"],expectedReturn:"West",methodCall:"TerritoryAssigner.assignTerritory(country, state)"},{id:"s2",label:"East (USA, NY)",inputDisplay:"country='USA', state='NY'",inputs:{country:"USA",state:"NY"},expectedOutput:["East"],expectedReturn:"East",methodCall:"TerritoryAssigner.assignTerritory(country, state)"},{id:"s3",label:"Canada",inputDisplay:"country='Canada', state=null",inputs:{country:"Canada",state:null},expectedOutput:["Canada"],expectedReturn:"Canada",methodCall:"TerritoryAssigner.assignTerritory(country, state)"},{id:"s4",label:"Europe (UK)",inputDisplay:"country='UK', state=null",inputs:{country:"UK",state:null},expectedOutput:["Europe"],expectedReturn:"Europe",methodCall:"TerritoryAssigner.assignTerritory(country, state)"},{id:"s5",label:"Unassigned (blank country)",inputDisplay:"country='', state=null",inputs:{country:"",state:null},expectedOutput:["Unassigned"],expectedReturn:"Unassigned",methodCall:"TerritoryAssigner.assignTerritory(country, state)"},{id:"s6",label:"bulkAssign — 2 accounts, correct size",inputDisplay:"2 accounts → map has 2 entries",inputs:{accounts:[{Id:"A01",BillingCountry:"USA",BillingState:"CA"},{Id:"A02",BillingCountry:"UK",BillingState:null}]},expectedOutput:["2"],expectedReturn:2,methodCall:"TerritoryAssigner.bulkAssign(accounts).__size()"},{id:"s7",label:"bulkAssign — West territory for USA/CA",inputDisplay:"accounts[0] = USA/CA → 'West'",inputs:{accounts:[{Id:"B01",BillingCountry:"USA",BillingState:"CA"},{Id:"B02",BillingCountry:"UK",BillingState:null}]},expectedOutput:["West"],expectedReturn:"West",methodCall:"TerritoryAssigner.bulkAssign(accounts).get('B01')"}]},{id:"mission-renewal-reminder",title:"Subscription Renewal Reminder Builder",company:"SubManager SaaS",description:"Build a service that calculates renewal timing, urgency levels, and generates reminder messages for subscription renewals.",scenario:`SubManager's customer success lead sent over the renewal reminder spec:

"We need to send reminder emails before subscription renewals. The timing depends on customer tier:
- Gold customers: remind 90 days before renewal
- Silver customers: remind 60 days before renewal
- Bronze customers: remind 30 days before renewal

The email urgency level depends on days remaining:
- Less than 7 days: Critical
- Less than 30 days: High
- Less than 60 days: Medium
- Anything else: Low

The reminder message should say something like: 'Dear [Name], your subscription renews in X days (urgency level). Please review your plan.'"`,requirements:["Create class RenewalReminderService with method getDaysUntilRenewal(Date endDate) returning Integer","Create method getReminderDate(Date endDate, String tier) returning Date (Gold=90 days before, Silver=60, Bronze=30)","Create method getUrgency(Date endDate) returning String urgency level","Create method buildReminder(Date endDate, String tier, String customerName) returning formatted String message","Handle null endDate in getDaysUntilRenewal by returning 0"],difficulty:"beginner",skills:["Date Operations","Conditionals","String Methods","Apex Classes"],estimatedHours:2,starterCode:`public class RenewalReminderService {

    public static Integer getDaysUntilRenewal(Date endDate) {
        // TODO: Return Date.today().daysBetween(endDate), handle null
        return 0;
    }

    public static Date getReminderDate(Date endDate, String tier) {
        // TODO: Return endDate minus lead days based on tier
        // Gold=90, Silver=60, Bronze=30
        return null;
    }

    public static String getUrgency(Date endDate) {
        // TODO: Get days remaining, return Critical/High/Medium/Low
        return 'Low';
    }

    public static String buildReminder(Date endDate, String tier, String customerName) {
        // TODO: Build message string using getDaysUntilRenewal and getUrgency
        return null;
    }
}`,solution:`public class RenewalReminderService {

    public static Integer getDaysUntilRenewal(Date endDate) {
        if (endDate == null) return 0;
        return Date.today().daysBetween(endDate);
    }

    public static Date getReminderDate(Date endDate, String tier) {
        Integer leadDays = 30;
        if (tier == 'Gold')   leadDays = 90;
        if (tier == 'Silver') leadDays = 60;
        return endDate.addDays(-leadDays);
    }

    public static String getUrgency(Date endDate) {
        Integer days = getDaysUntilRenewal(endDate);
        if (days < 7)  return 'Critical';
        if (days < 30) return 'High';
        if (days < 60) return 'Medium';
        return 'Low';
    }

    public static String buildReminder(Date endDate, String tier, String customerName) {
        Integer days = getDaysUntilRenewal(endDate);
        String urgency = getUrgency(endDate);
        return 'Dear ' + customerName + ', your subscription renews in ' + days
            + ' days (' + urgency + '). Please review your plan.';
    }
}`,hints:["Date.today().daysBetween(endDate) gives you the number of days between today and a future date.","getReminderDate: subtract lead days from endDate using endDate.addDays(-leadDays).","getUrgency checks days < 7, then < 30, then < 60 — order matters, check smallest threshold first.","buildReminder can call getDaysUntilRenewal() and getUrgency() internally — reuse your methods."],testCases:[{id:"tc1",description:"Defines class RenewalReminderService",pattern:"public\\s+class\\s+RenewalReminderService",errorMessage:"Class must be named exactly `RenewalReminderService`.",exampleFix:"public class RenewalReminderService {"},{id:"tc2",description:"getDaysUntilRenewal uses daysBetween()",pattern:"\\.daysBetween\\s*\\(",errorMessage:"Use Date.today().daysBetween(endDate) to calculate days remaining.",exampleFix:"return Date.today().daysBetween(endDate);"},{id:"tc3",description:"getReminderDate uses addDays with negative value",pattern:"\\.addDays\\s*\\(\\s*-",errorMessage:"Subtract lead days from endDate using endDate.addDays(-leadDays).",exampleFix:"return endDate.addDays(-leadDays);"},{id:"tc4",description:"getUrgency returns 'Critical' for near-deadline cases",pattern:"'Critical'",errorMessage:"getUrgency() must return 'Critical' when days < 7.",exampleFix:`if (days < 7) return 'Critical';
if (days < 30) return 'High';`},{id:"tc5",description:"buildReminder returns a formatted String message",pattern:"public\\s+static\\s+String\\s+buildReminder\\s*\\(",errorMessage:"You need `public static String buildReminder(Date endDate, String tier, String customerName)`.",exampleFix:"public static String buildReminder(Date endDate, String tier, String customerName) {"}],scenarios:[{id:"s1",label:"getUrgency Critical (<7d)",inputDisplay:"endDate = 3 days from now → urgency = 'Critical'",inputs:{},methodCall:"RenewalReminderService.getUrgency(new Date(Date.now()+3*86400000))",expectedReturn:"Critical",expectedOutput:["Critical"]},{id:"s2",label:"getUrgency High (<30d)",inputDisplay:"endDate = 15 days from now → urgency = 'High'",inputs:{},methodCall:"RenewalReminderService.getUrgency(new Date(Date.now()+15*86400000))",expectedReturn:"High",expectedOutput:["High"]},{id:"s3",label:"getUrgency Low (>60d)",inputDisplay:"endDate = 90 days from now → urgency = 'Low'",inputs:{},methodCall:"RenewalReminderService.getUrgency(new Date(Date.now()+90*86400000))",expectedReturn:"Low",expectedOutput:["Low"]},{id:"s4",label:"getReminderDate Gold (90d before)",inputDisplay:"Gold tier → reminder date = endDate minus 90 days",inputs:{},methodCall:"(() => { const end = new Date(Date.now()+180*86400000); const rem = RenewalReminderService.getReminderDate(end,'Gold'); return Math.round((end-rem)/86400000); })()",expectedReturn:90,expectedOutput:["90"]},{id:"s5",label:"getDaysUntilRenewal — 30 days from now",inputDisplay:"endDate = 30 days from now → 30",inputs:{},methodCall:"RenewalReminderService.getDaysUntilRenewal(new Date(Date.now()+30*86400000))",expectedReturn:30,expectedOutput:["30"]},{id:"s6",label:"getDaysUntilRenewal — null → 0",inputDisplay:"endDate = null → 0",inputs:{},methodCall:"RenewalReminderService.getDaysUntilRenewal(null)",expectedReturn:0,expectedOutput:["0"]},{id:"s7",label:"buildReminder — correct format",inputDisplay:"15d, Low urgency wait — actually High, name=Alice",inputs:{},methodCall:"RenewalReminderService.buildReminder(new Date(Date.now()+15*86400000),'Bronze','Alice')",expectedReturn:"Dear Alice, your subscription renews in 15 days (High). Please review your plan.",expectedOutput:["Dear Alice, your subscription renews in 15 days (High). Please review your plan."]}]},{id:"mission-approval-workflow",title:"Dynamic Approval Routing Engine",company:"PolicyPro Insurance",description:"Build an approval routing engine that determines who must approve a request based on department and amount thresholds.",scenario:`PolicyPro's compliance team sent over the new approval matrix:

"Every purchase request needs approval, but the approver depends on the department and the amount:

Finance: > $10K needs Manager, > $50K also needs VP, > $200K also needs C-Suite
Sales: > $5K needs Manager, > $25K also needs VP
HR: > $2K needs Manager

Unknown departments: always route to 'Department Manager'.

We need a method to get the highest required approver for a request, and another method that returns the full approval chain (all required approvers from lowest to highest) so we can build a multi-step flow."`,requirements:["Create class ApprovalRouter with inner class ApprovalRequest (public String department, Decimal amount, String requestorName)","Create method getApprover(ApprovalRequest req) returning String (highest required approver level)","Create method buildApprovalChain(ApprovalRequest req) returning List<String> in order: Manager, VP, C-Suite as applicable","Handle null amount as 0 (no approval required beyond Department Manager for unknown dept)",'Handle null or unknown department by routing to "Department Manager"'],difficulty:"intermediate",skills:["Inner Classes","Maps","Lists","Conditionals","Null Safety"],estimatedHours:3,starterCode:`public class ApprovalRouter {

    public class ApprovalRequest {
        public String department;
        public Decimal amount;
        public String requestorName;

        public ApprovalRequest(String dept, Decimal amt, String name) {
            this.department = dept;
            this.amount = amt;
            this.requestorName = name;
        }
    }

    public static String getApprover(ApprovalRequest req) {
        // TODO: Return highest required approver for the request
        return 'Department Manager';
    }

    public static List<String> buildApprovalChain(ApprovalRequest req) {
        // TODO: Return ordered list of all required approvers
        // e.g. ['Manager', 'VP'] or ['Manager', 'VP', 'C-Suite']
        return new List<String>();
    }
}`,solution:`public class ApprovalRouter {

    public class ApprovalRequest {
        public String department;
        public Decimal amount;
        public String requestorName;

        public ApprovalRequest(String dept, Decimal amt, String name) {
            this.department = dept;
            this.amount = amt;
            this.requestorName = name;
        }
    }

    public static String getApprover(ApprovalRequest req) {
        List<String> chain = buildApprovalChain(req);
        return chain.isEmpty() ? 'Department Manager' : chain.get(chain.size() - 1);
    }

    public static List<String> buildApprovalChain(ApprovalRequest req) {
        List<String> chain = new List<String>();
        Decimal amount = (req.amount != null) ? req.amount : 0;
        String dept = (req.department != null) ? req.department : '';

        if (dept == 'Finance') {
            if (amount > 10000)  chain.add('Manager');
            if (amount > 50000)  chain.add('VP');
            if (amount > 200000) chain.add('C-Suite');
        } else if (dept == 'Sales') {
            if (amount > 5000)  chain.add('Manager');
            if (amount > 25000) chain.add('VP');
        } else if (dept == 'HR') {
            if (amount > 2000) chain.add('Manager');
        } else {
            chain.add('Department Manager');
        }

        return chain;
    }
}`,hints:["Build the approval chain as a List<String> and add approvers in order (Manager first, then VP, then C-Suite) based on amount thresholds.","getApprover() can call buildApprovalChain() and return the last item in the list — that's the highest approver.","Guard against null amount with a ternary: `Decimal amount = (req.amount != null) ? req.amount : 0;`","Unknown departments should add 'Department Manager' to the chain without any amount checks."],testCases:[{id:"tc1",description:"Defines inner class ApprovalRequest",pattern:"public\\s+class\\s+ApprovalRequest",errorMessage:"You need an inner class `ApprovalRequest` inside `ApprovalRouter`.",exampleFix:`public class ApprovalRequest {
    public String department;
    public Decimal amount;
    public String requestorName;
}`},{id:"tc2",description:"buildApprovalChain returns List<String>",pattern:"public\\s+static\\s+List<String>\\s+buildApprovalChain\\s*\\(",errorMessage:"You need `public static List<String> buildApprovalChain(ApprovalRequest req)`.",exampleFix:"public static List<String> buildApprovalChain(ApprovalRequest req) {"},{id:"tc3",description:"Finance department uses $200K threshold for C-Suite",pattern:"200000",errorMessage:"Finance > $200,000 must route to C-Suite. Check the 200000 threshold.",exampleFix:"if (amount > 200000) chain.add('C-Suite');"},{id:"tc4",description:"Handles null amount gracefully",pattern:"req\\.amount\\s*!=\\s*null|amount\\s*!=\\s*null",errorMessage:"Null-check req.amount before using it in comparisons.",exampleFix:"Decimal amount = (req.amount != null) ? req.amount : 0;"},{id:"tc5",description:"Routes unknown departments to Department Manager",pattern:"'Department Manager'",errorMessage:"Unknown departments must route to 'Department Manager'.",exampleFix:`} else {
    chain.add('Department Manager');
}`}],scenarios:[{id:"s1",label:"Finance >$200K → C-Suite",inputDisplay:"Finance dept, $250,000 → highest approver = 'C-Suite'",inputs:{},methodCall:"ApprovalRouter.getApprover({department:'Finance',amount:250000,requestorName:'Alice'})",expectedReturn:"C-Suite",expectedOutput:["C-Suite"]},{id:"s2",label:"Finance $15K → Manager",inputDisplay:"Finance dept, $15,000 → highest approver = 'Manager'",inputs:{},methodCall:"ApprovalRouter.getApprover({department:'Finance',amount:15000,requestorName:'Bob'})",expectedReturn:"Manager",expectedOutput:["Manager"]},{id:"s3",label:"Sales $30K → VP",inputDisplay:"Sales dept, $30,000 → highest approver = 'VP'",inputs:{},methodCall:"ApprovalRouter.getApprover({department:'Sales',amount:30000,requestorName:'Carol'})",expectedReturn:"VP",expectedOutput:["VP"]},{id:"s4",label:"Unknown dept → Department Manager",inputDisplay:"Unknown dept → 'Department Manager'",inputs:{},methodCall:"ApprovalRouter.getApprover({department:'Engineering',amount:5000,requestorName:'Dave'})",expectedReturn:"Department Manager",expectedOutput:["Department Manager"]},{id:"s5",label:"buildApprovalChain Finance $300K → 3 approvers",inputDisplay:"Finance, $300,000 → ['Manager', 'VP', 'C-Suite']",inputs:{},methodCall:"ApprovalRouter.buildApprovalChain({department:'Finance',amount:300000,requestorName:'Eve'}).length",expectedReturn:3,expectedOutput:["3"]},{id:"s6",label:"buildApprovalChain Sales $30K → VP included",inputDisplay:"Sales, $30,000 → chain includes 'VP'",inputs:{},methodCall:"ApprovalRouter.buildApprovalChain({department:'Sales',amount:30000,requestorName:'Frank'}).get(1)",expectedReturn:"VP",expectedOutput:["VP"]},{id:"s7",label:"buildApprovalChain HR low amount → empty",inputDisplay:"HR, $500 → no approvers needed",inputs:{},methodCall:"ApprovalRouter.buildApprovalChain({department:'HR',amount:500,requestorName:'Grace'}).length",expectedReturn:0,expectedOutput:["0"]}]},{id:"mission-commission-calculator",title:"Sales Commission Calculator",company:"CompSales Corp",description:"Build a tiered commission calculator with a quarterly accelerator for hitting quota.",scenario:`CompSales' finance team sent over the commission structure:

"Commission rates are tiered by sale amount:
- $0–$50K: 5%
- $50K–$100K: 7%
- $100K–$200K: 10%
- Over $200K: 12%

Quarterly accelerator: if the rep has hit 100% or more of their quarterly quota, every commission that quarter gets multiplied by 1.5x.

We also need a quarterly statement that takes a list of three monthly sales figures and a monthly quota, and returns totals: totalSales, totalCommission, quotaAttainment (as a percentage), and whether the accelerator applies."`,requirements:["Create class CommissionCalculator with method getBaseRate(Decimal saleAmount) returning Decimal (e.g. 0.05 for 5%)","Create method calculateCommission(Decimal saleAmount, Decimal quotaAttainmentPct) returning Decimal","Apply 1.5x accelerator multiplier when quotaAttainmentPct >= 100","Create method getQuarterlyStatement(List<Decimal> monthlySales, Decimal monthlyQuota) returning Map<String, Decimal> with keys 'totalSales', 'totalCommission', 'quotaAttainment', 'acceleratorApplied' (1.0 if applied, 0.0 if not)","Handle null or zero saleAmount by returning 0 commission"],difficulty:"intermediate",skills:["Decimal Math","Conditionals","Lists","Maps","Loops"],estimatedHours:3,starterCode:`public class CommissionCalculator {

    public static Decimal getBaseRate(Decimal saleAmount) {
        // Thresholds: 50000=5%, 100000=7%, 200000=10%, >200000=12%
        // TODO: Return rate as decimal (e.g. 0.05)
        return 0.05;
    }

    public static Decimal calculateCommission(Decimal saleAmount, Decimal quotaAttainmentPct) {
        // TODO: Calculate base commission = saleAmount * rate
        // TODO: Apply 1.5x multiplier if quotaAttainmentPct >= 100
        return 0;
    }

    public static Map<String, Decimal> getQuarterlyStatement(
        List<Decimal> monthlySales,
        Decimal monthlyQuota
    ) {
        // TODO: sum monthlySales, calculate quota attainment
        // TODO: apply accelerator if attainment >= 100%
        // TODO: return map with totalSales, totalCommission, quotaAttainment, acceleratorApplied
        return new Map<String, Decimal>();
    }
}`,solution:`public class CommissionCalculator {

    public static Decimal getBaseRate(Decimal saleAmount) {
        if (saleAmount == null || saleAmount <= 0) return 0;
        if (saleAmount > 200000) return 0.12;
        if (saleAmount > 100000) return 0.10;
        if (saleAmount > 50000)  return 0.07;
        return 0.05;
    }

    public static Decimal calculateCommission(Decimal saleAmount, Decimal quotaAttainmentPct) {
        if (saleAmount == null || saleAmount <= 0) return 0;
        Decimal rate = getBaseRate(saleAmount);
        Decimal commission = saleAmount * rate;
        if (quotaAttainmentPct != null && quotaAttainmentPct >= 100) {
            commission *= 1.5;
        }
        return commission;
    }

    public static Map<String, Decimal> getQuarterlyStatement(
        List<Decimal> monthlySales,
        Decimal monthlyQuota
    ) {
        Decimal totalSales = 0;
        for (Decimal s : monthlySales) {
            totalSales += (s != null ? s : 0);
        }

        Decimal quarterQuota = monthlyQuota * 3;
        Decimal quotaAttainment = (quarterQuota > 0) ? (totalSales / quarterQuota * 100) : 0;
        Boolean accelerator = quotaAttainment >= 100;

        Decimal totalCommission = 0;
        for (Decimal s : monthlySales) {
            totalCommission += calculateCommission(s != null ? s : 0, quotaAttainment);
        }

        return new Map<String, Decimal>{
            'totalSales'       => totalSales,
            'totalCommission'  => totalCommission,
            'quotaAttainment'  => quotaAttainment,
            'acceleratorApplied' => accelerator ? 1.0 : 0.0
        };
    }
}`,hints:["getBaseRate: check from highest threshold down — if amount > 200000 return 0.12, else if > 100000 return 0.10, etc.","In calculateCommission, multiply commission by 1.5 when quotaAttainmentPct >= 100.","Quarterly quota = monthlyQuota × 3. QuotaAttainment % = totalSales / quarterQuota × 100.","Store acceleratorApplied as 1.0 (true) or 0.0 (false) since the map type is Decimal."],testCases:[{id:"tc1",description:"Defines class CommissionCalculator",pattern:"public\\s+class\\s+CommissionCalculator",errorMessage:"Class must be named exactly `CommissionCalculator`.",exampleFix:"public class CommissionCalculator {"},{id:"tc2",description:"getBaseRate returns 0.12 for amounts over $200K",pattern:"0\\.12",errorMessage:"Return 0.12 (12%) for sales over $200,000 in getBaseRate().",exampleFix:"if (saleAmount > 200000) return 0.12;"},{id:"tc3",description:"Applies 1.5x accelerator multiplier",pattern:"1\\.5",errorMessage:"Multiply commission by 1.5 when quotaAttainmentPct >= 100.",exampleFix:`if (quotaAttainmentPct >= 100) {
    commission *= 1.5;
}`},{id:"tc4",description:"getQuarterlyStatement returns map with 'totalCommission' key",pattern:"'totalCommission'",errorMessage:"The returned map must include the key 'totalCommission'.",exampleFix:`return new Map<String, Decimal>{
    'totalSales' => totalSales,
    'totalCommission' => totalCommission
};`},{id:"tc5",description:"getQuarterlyStatement returns 'quotaAttainment' in the map",pattern:"'quotaAttainment'",errorMessage:"The returned map must include the key 'quotaAttainment'.",exampleFix:`// Add to your map:
'quotaAttainment' => quotaAttainment`}],scenarios:[{id:"s1",label:"Rate for $30K sale (5%)",inputDisplay:"saleAmount = 30000",inputs:{saleAmount:3e4},expectedOutput:["0.05"],expectedReturn:.05,methodCall:"CommissionCalculator.getBaseRate(saleAmount)"},{id:"s2",label:"Rate for $75K sale (7%)",inputDisplay:"saleAmount = 75000",inputs:{saleAmount:75e3},expectedOutput:["0.07"],expectedReturn:.07,methodCall:"CommissionCalculator.getBaseRate(saleAmount)"},{id:"s3",label:"Rate for $150K sale (10%)",inputDisplay:"saleAmount = 150000",inputs:{saleAmount:15e4},expectedOutput:["0.1"],expectedReturn:.1,methodCall:"CommissionCalculator.getBaseRate(saleAmount)"},{id:"s4",label:"Rate for $250K sale (12%)",inputDisplay:"saleAmount = 250000",inputs:{saleAmount:25e4},expectedOutput:["0.12"],expectedReturn:.12,methodCall:"CommissionCalculator.getBaseRate(saleAmount)"},{id:"s5",label:"Zero/null sale → 0% rate",inputDisplay:"saleAmount = 0",inputs:{saleAmount:0},expectedOutput:["0"],expectedReturn:0,methodCall:"CommissionCalculator.getBaseRate(saleAmount)"},{id:"s6",label:"calculateCommission no accelerator",inputDisplay:"saleAmount=50000, quota=80% → 50000*0.05=2500",inputs:{saleAmount:5e4,quotaAttainmentPct:80},expectedOutput:["2500"],expectedReturn:2500,methodCall:"CommissionCalculator.calculateCommission(saleAmount, quotaAttainmentPct)"},{id:"s7",label:"calculateCommission with 1.5x accelerator",inputDisplay:"saleAmount=50000, quota=100% → 2500*1.5=3750",inputs:{saleAmount:5e4,quotaAttainmentPct:100},expectedOutput:["3750"],expectedReturn:3750,methodCall:"CommissionCalculator.calculateCommission(saleAmount, quotaAttainmentPct)"},{id:"s8",label:"getQuarterlyStatement acceleratorApplied flag",inputDisplay:"monthlySales=[100000,100000,100000], monthlyQuota=80000 → accelerator=1",inputs:{monthlySales:[1e5,1e5,1e5],monthlyQuota:8e4},expectedOutput:["1"],expectedReturn:1,methodCall:"CommissionCalculator.getQuarterlyStatement(monthlySales, monthlyQuota).get('acceleratorApplied')"},{id:"s9",label:"getQuarterlyStatement quotaAttainment",inputDisplay:"monthlySales=[50000,50000,50000], monthlyQuota=50000 → 100% attainment",inputs:{monthlySales:[5e4,5e4,5e4],monthlyQuota:5e4},expectedOutput:["100"],expectedReturn:100,methodCall:"CommissionCalculator.getQuarterlyStatement(monthlySales, monthlyQuota).get('quotaAttainment')"}]},{id:"mission-data-quality-scorer",title:"Account Data Quality Scorer",company:"DataQual Analytics",description:"Build a data quality scoring engine that grades account completeness and flags stale records.",scenario:`DataQual's data governance lead handed over the scoring rubric:

"We need to score every account on data completeness. Here's the point breakdown (max 100):
- Name: 20 points (required)
- Phone: 10 points
- Website: 10 points
- Industry: 15 points
- AnnualRevenue: 15 points
- BillingCity: 10 points
- BillingCountry: 10 points
- Description: 10 points

Tiers:
- 80–100: Excellent
- 60–79: Good
- Below 60: Poor

Also flag 'stale' accounts — ones where LastActivityDate is null or more than 365 days ago."`,requirements:["Create class DataQualityScorer with method scoreAccount(Account acct) returning Integer (0–100)","Add points for each present field per the scoring rubric above","Create method getMissingFields(Account acct) returning List<String> of field labels with missing data","Create method isStale(Account acct) returning Boolean (null LastActivityDate or > 365 days old)","Create method generateQualityReport(Account acct) returning String with score, tier, and missing field count"],difficulty:"intermediate",skills:["Conditionals","Lists","Date Operations","String Methods","Apex Classes"],estimatedHours:3,starterCode:`public class DataQualityScorer {

    public static Integer scoreAccount(Account acct) {
        Integer score = 0;
        // TODO: Add 20 for Name (always present if record exists, but check != null)
        // TODO: Add 10 for Phone
        // TODO: Add 10 for Website
        // TODO: Add 15 for Industry
        // TODO: Add 15 for AnnualRevenue
        // TODO: Add 10 for BillingCity
        // TODO: Add 10 for BillingCountry
        // TODO: Add 10 for Description
        return score;
    }

    public static List<String> getMissingFields(Account acct) {
        List<String> missing = new List<String>();
        // TODO: Add field label for each blank/null field
        return missing;
    }

    public static Boolean isStale(Account acct) {
        // TODO: Return true if LastActivityDate is null or > 365 days ago
        return false;
    }

    public static String generateQualityReport(Account acct) {
        // TODO: Compute score, tier, missing count — return formatted string
        return null;
    }
}`,solution:`public class DataQualityScorer {

    public static Integer scoreAccount(Account acct) {
        Integer score = 0;
        if (String.isNotBlank(acct.Name))          score += 20;
        if (String.isNotBlank(acct.Phone))          score += 10;
        if (String.isNotBlank(acct.Website))        score += 10;
        if (String.isNotBlank(acct.Industry))       score += 15;
        if (acct.AnnualRevenue != null)             score += 15;
        if (String.isNotBlank(acct.BillingCity))    score += 10;
        if (String.isNotBlank(acct.BillingCountry)) score += 10;
        if (String.isNotBlank(acct.Description))    score += 10;
        return score;
    }

    public static List<String> getMissingFields(Account acct) {
        List<String> missing = new List<String>();
        if (String.isBlank(acct.Phone))          missing.add('Phone');
        if (String.isBlank(acct.Website))        missing.add('Website');
        if (String.isBlank(acct.Industry))       missing.add('Industry');
        if (acct.AnnualRevenue == null)          missing.add('Annual Revenue');
        if (String.isBlank(acct.BillingCity))    missing.add('Billing City');
        if (String.isBlank(acct.BillingCountry)) missing.add('Billing Country');
        if (String.isBlank(acct.Description))    missing.add('Description');
        return missing;
    }

    public static Boolean isStale(Account acct) {
        if (acct.LastActivityDate == null) return true;
        return acct.LastActivityDate < Date.today().addDays(-365);
    }

    public static String generateQualityReport(Account acct) {
        Integer score = scoreAccount(acct);
        List<String> missing = getMissingFields(acct);
        String tier = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Poor';
        return 'Account: ' + acct.Name
            + ' | Score: ' + score + '/100'
            + ' | Tier: ' + tier
            + ' | Missing fields: ' + missing.size()
            + (isStale(acct) ? ' | STALE' : '');
    }
}`,hints:["String.isNotBlank(field) handles null, empty, and whitespace-only strings — better than != null alone.","Build the score by accumulating points with +=. Start from 0, not 100.","isStale: compare LastActivityDate to Date.today().addDays(-365). If the date is earlier (less than), it's stale.","generateQualityReport can call scoreAccount(), getMissingFields(), and isStale() internally — compose your methods."],testCases:[{id:"tc1",description:"Defines class DataQualityScorer",pattern:"public\\s+class\\s+DataQualityScorer",errorMessage:"Class must be named exactly `DataQualityScorer`.",exampleFix:"public class DataQualityScorer {"},{id:"tc2",description:"Uses String.isNotBlank() or String.isBlank() for field checks",pattern:"String\\.isNotBlank\\s*\\(|String\\.isBlank\\s*\\(",errorMessage:"Use String.isNotBlank() or String.isBlank() to check text fields.",exampleFix:"if (String.isNotBlank(acct.Phone)) score += 10;"},{id:"tc3",description:"Adds 20 points for Account Name",pattern:"score\\s*\\+=\\s*20",errorMessage:"Add 20 points for the Account Name field.",exampleFix:"if (String.isNotBlank(acct.Name)) score += 20;"},{id:"tc4",description:"isStale checks LastActivityDate against 365 days ago",pattern:"addDays\\s*\\(\\s*-365\\s*\\)",errorMessage:"Check if LastActivityDate < Date.today().addDays(-365) in isStale().",exampleFix:"return acct.LastActivityDate < Date.today().addDays(-365);"},{id:"tc5",description:"getMissingFields returns List<String>",pattern:"public\\s+static\\s+List<String>\\s+getMissingFields\\s*\\(",errorMessage:"You need `public static List<String> getMissingFields(Account acct)`.",exampleFix:"public static List<String> getMissingFields(Account acct) {"}],scenarios:[{id:"s1",label:"Full account = 100pts",inputDisplay:"Account with all fields populated → score = 100",inputs:{},methodCall:"DataQualityScorer.scoreAccount({Name:'Acme',Phone:'555-0100',Website:'acme.com',Industry:'Tech',AnnualRevenue:1000000,BillingCity:'SF',BillingCountry:'US',Description:'Top client'})",expectedReturn:100,expectedOutput:["100"]},{id:"s2",label:"Only Name = 20pts",inputDisplay:"Account with only Name → score = 20",inputs:{},methodCall:"DataQualityScorer.scoreAccount({Name:'Acme',Phone:null,Website:null,Industry:null,AnnualRevenue:null,BillingCity:null,BillingCountry:null,Description:null})",expectedReturn:20,expectedOutput:["20"]},{id:"s3",label:"isStale null date → true",inputDisplay:"Account with null LastActivityDate → isStale = true",inputs:{},methodCall:"DataQualityScorer.isStale({LastActivityDate:null})",expectedReturn:!0,expectedOutput:["true"]},{id:"s4",label:"isStale recent → false",inputDisplay:"Account with LastActivityDate 30 days ago → isStale = false",inputs:{},methodCall:"DataQualityScorer.isStale({LastActivityDate:new Date(Date.now()-30*86400000)})",expectedReturn:!1,expectedOutput:["false"]},{id:"q1",label:"Report: full fresh account → Excellent",inputDisplay:"score 100, not stale",inputs:{a:{Name:"Acme",Phone:"1",Website:"w",Industry:"T",AnnualRevenue:5,BillingCity:"SF",BillingCountry:"US",Description:"d",LastActivityDate:Ee(10)}},expectedOutput:["Account: Acme | Score: 100/100 | Tier: Excellent | Missing fields: 0"],expectedReturn:"Account: Acme | Score: 100/100 | Tier: Excellent | Missing fields: 0",methodCall:"DataQualityScorer.generateQualityReport(a)"},{id:"q2",label:"Report: score exactly 80 → Excellent",inputDisplay:"Name+Phone+Website+Industry+Revenue+City = 80",inputs:{a:{Name:"Acme",Phone:"1",Website:"w",Industry:"T",AnnualRevenue:5,BillingCity:"SF",BillingCountry:null,Description:null,LastActivityDate:Ee(10)}},expectedOutput:["Account: Acme | Score: 80/100 | Tier: Excellent | Missing fields: 2"],expectedReturn:"Account: Acme | Score: 80/100 | Tier: Excellent | Missing fields: 2",methodCall:"DataQualityScorer.generateQualityReport(a)"},{id:"q3",label:"Report: score exactly 60 → Good",inputDisplay:"Name+Industry+Revenue+Phone = 60",inputs:{a:{Name:"Acme",Phone:"1",Website:null,Industry:"T",AnnualRevenue:5,BillingCity:null,BillingCountry:null,Description:null,LastActivityDate:Ee(10)}},expectedOutput:["Account: Acme | Score: 60/100 | Tier: Good | Missing fields: 4"],expectedReturn:"Account: Acme | Score: 60/100 | Tier: Good | Missing fields: 4",methodCall:"DataQualityScorer.generateQualityReport(a)"},{id:"q4",label:"Report: score 50 → Poor, stale when never active",inputDisplay:"Name+Industry+Revenue, null activity",inputs:{a:{Name:"Acme",Phone:null,Website:null,Industry:"T",AnnualRevenue:5,BillingCity:null,BillingCountry:null,Description:null,LastActivityDate:null}},expectedOutput:["Account: Acme | Score: 50/100 | Tier: Poor | Missing fields: 5 | STALE"],expectedReturn:"Account: Acme | Score: 50/100 | Tier: Poor | Missing fields: 5 | STALE",methodCall:"DataQualityScorer.generateQualityReport(a)"},{id:"q5",label:"Blank strings count as missing",inputDisplay:"Phone = spaces",inputs:{a:{Name:"Acme",Phone:"   ",Website:"",Industry:null,AnnualRevenue:null,BillingCity:null,BillingCountry:null,Description:null,LastActivityDate:Ee(1)}},expectedOutput:["Account: Acme | Score: 20/100 | Tier: Poor | Missing fields: 7"],expectedReturn:"Account: Acme | Score: 20/100 | Tier: Poor | Missing fields: 7",methodCall:"DataQualityScorer.generateQualityReport(a)"},{id:"q6",label:"AnnualRevenue = 0 still counts as filled",inputDisplay:"0 is not null",inputs:{a:{Name:null,Phone:null,Website:null,Industry:null,AnnualRevenue:0,BillingCity:null,BillingCountry:null,Description:null}},expectedOutput:["15"],expectedReturn:15,methodCall:"DataQualityScorer.scoreAccount(a)"},{id:"q7",label:"Activity 364 days ago → not stale",inputDisplay:"just inside the year",inputs:{a:{LastActivityDate:Ee(364)}},expectedOutput:["false"],expectedReturn:!1,methodCall:"DataQualityScorer.isStale(a)"},{id:"q8",label:"Activity 366 days ago → stale",inputDisplay:"just outside the year",inputs:{a:{LastActivityDate:Ee(366)}},expectedOutput:["true"],expectedReturn:!0,methodCall:"DataQualityScorer.isStale(a)"}]},{id:"mission-trigger-framework",title:"Build a Reusable Trigger Framework",company:"EnterpriseTech Solutions",description:"Build a production-grade Trigger Handler framework with a base virtual class and a concrete Lead implementation.",scenario:`EnterpriseTech's tech lead gathered the team for a Zoom:

"Our triggers are a mess — logic scattered everywhere, duplicate code, no pattern. I want a proper enterprise trigger framework. Here's the design:

1. A TriggerHandler base class with virtual (overridable) methods for each trigger context: beforeInsert, afterInsert, beforeUpdate, afterUpdate.
2. A run() method on TriggerHandler that checks the Trigger context variables (Trigger.isBefore, Trigger.isInsert, etc.) and calls the right method.
3. A LeadTriggerHandler that extends TriggerHandler and overrides beforeInsert to set Lead.Rating = 'Cold' if it's currently null.
4. A trigger on Lead that calls: new LeadTriggerHandler().run();

This is the standard pattern used in production at Salesforce customers worldwide."`,requirements:["Create virtual class TriggerHandler with virtual void methods: beforeInsert(List<SObject> newList), afterInsert(List<SObject> newList, Map<Id,SObject> newMap), beforeUpdate(List<SObject> newList, Map<Id,SObject> oldMap), afterUpdate(List<SObject> newList, Map<Id,SObject> newMap, Map<Id,SObject> oldMap)","Create method run() on TriggerHandler that checks Trigger.isBefore/isAfter/isInsert/isUpdate and calls the appropriate virtual method","Create class LeadTriggerHandler extends TriggerHandler; override beforeInsert to cast newList to List<Lead> and set Rating = 'Cold' if null","Create a trigger named LeadTrigger on Lead (before insert, after insert, before update, after update) that calls: new LeadTriggerHandler().run();","All virtual methods on TriggerHandler should have empty default implementations (no-op)"],difficulty:"advanced",skills:["OOP Inheritance","Virtual Methods","Trigger Framework","Design Patterns"],estimatedHours:5,starterCode:`// TriggerHandler.cls — Base class for all trigger handlers
public virtual class TriggerHandler {

    // TODO: Add virtual void beforeInsert(List<SObject> newList)
    // TODO: Add virtual void afterInsert(List<SObject> newList, Map<Id,SObject> newMap)
    // TODO: Add virtual void beforeUpdate(List<SObject> newList, Map<Id,SObject> oldMap)
    // TODO: Add virtual void afterUpdate(List<SObject> newList, Map<Id,SObject> newMap, Map<Id,SObject> oldMap)

    public void run() {
        // TODO: Check Trigger context and call the right method
        // Use Trigger.isBefore, Trigger.isAfter, Trigger.isInsert, Trigger.isUpdate
    }
}

// LeadTriggerHandler.cls — Lead-specific logic
public class LeadTriggerHandler extends TriggerHandler {

    // TODO: Override beforeInsert
    // Cast newList to List<Lead>
    // Set Rating = 'Cold' if null
}

// LeadTrigger.trigger — Wire it up
trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {
    // TODO: Call new LeadTriggerHandler().run();
}`,solution:`// TriggerHandler.cls
public virtual class TriggerHandler {

    public virtual void beforeInsert(List<SObject> newList) {}
    public virtual void afterInsert(List<SObject> newList, Map<Id,SObject> newMap) {}
    public virtual void beforeUpdate(List<SObject> newList, Map<Id,SObject> oldMap) {}
    public virtual void afterUpdate(List<SObject> newList, Map<Id,SObject> newMap, Map<Id,SObject> oldMap) {}

    public void run() {
        if (Trigger.isBefore) {
            if (Trigger.isInsert) {
                beforeInsert(Trigger.new);
            } else if (Trigger.isUpdate) {
                beforeUpdate(Trigger.new, Trigger.oldMap);
            }
        } else if (Trigger.isAfter) {
            if (Trigger.isInsert) {
                afterInsert(Trigger.new, Trigger.newMap);
            } else if (Trigger.isUpdate) {
                afterUpdate(Trigger.new, Trigger.newMap, Trigger.oldMap);
            }
        }
    }
}

// LeadTriggerHandler.cls
public class LeadTriggerHandler extends TriggerHandler {

    public override void beforeInsert(List<SObject> newList) {
        List<Lead> leads = (List<Lead>) newList;
        for (Lead l : leads) {
            if (l.Rating == null) {
                l.Rating = 'Cold';
            }
        }
    }
}

// LeadTrigger.trigger
trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {
    new LeadTriggerHandler().run();
}`,hints:["Use `public virtual class TriggerHandler` and `public virtual void beforeInsert(...)` for the base class — virtual allows subclasses to override.","In run(), check Trigger.isBefore first, then Trigger.isInsert / Trigger.isUpdate to call the right method. Pass Trigger.new and Trigger.oldMap as arguments.","In LeadTriggerHandler, cast newList with `List<Lead> leads = (List<Lead>) newList;` before iterating.","The trigger body should be a single line: `new LeadTriggerHandler().run();` — keep all logic in the handler class."],testCases:[{id:"tc1",description:"Defines virtual class TriggerHandler",pattern:"public\\s+virtual\\s+class\\s+TriggerHandler",errorMessage:"Declare `public virtual class TriggerHandler` as the base class.",exampleFix:"public virtual class TriggerHandler {"},{id:"tc2",description:"Defines virtual beforeInsert method",pattern:"public\\s+virtual\\s+void\\s+beforeInsert\\s*\\(",errorMessage:"Add `public virtual void beforeInsert(List<SObject> newList)` to TriggerHandler.",exampleFix:"public virtual void beforeInsert(List<SObject> newList) {}"},{id:"tc3",description:"LeadTriggerHandler extends TriggerHandler",pattern:"LeadTriggerHandler\\s+extends\\s+TriggerHandler",errorMessage:"Declare `LeadTriggerHandler extends TriggerHandler`.",exampleFix:"public class LeadTriggerHandler extends TriggerHandler {"},{id:"tc4",description:"Casts newList to List<Lead> in override",pattern:"\\(List<Lead>\\)\\s*newList",errorMessage:"Cast newList to List<Lead> using `(List<Lead>) newList` in your override.",exampleFix:"List<Lead> leads = (List<Lead>) newList;"},{id:"tc5",description:"Sets Lead Rating = 'Cold' when null",pattern:"Rating\\s*=\\s*'Cold'",errorMessage:"Set l.Rating = 'Cold' when l.Rating == null in beforeInsert.",exampleFix:`if (l.Rating == null) {
    l.Rating = 'Cold';
}`},{id:"tc6",description:"Trigger calls new LeadTriggerHandler().run()",pattern:"new\\s+LeadTriggerHandler\\s*\\(\\s*\\)\\.run\\s*\\(\\s*\\)",errorMessage:"The trigger should call `new LeadTriggerHandler().run();`.",exampleFix:`trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {
    new LeadTriggerHandler().run();
}`}]},{id:"mission-batch-apex",title:"Build a Batch Apex Job",company:"DataPurge Ltd.",description:"Build a Batch Apex class that archives old leads in chunks and emails a completion summary.",scenario:`DataPurge's data team opened a Jira ticket:

"We have millions of old, unconverted leads clogging up our org. We need a Batch Apex job that:

1. Queries leads created more than 2 years ago that have NOT been converted (IsConverted = false)
2. Sets their Status to 'Archived'
3. Updates them in chunks of 200 (the batch size)
4. Tracks how many total leads were archived across all batches (use Database.Stateful)
5. When done, sends an email to ops@datapurge.com with subject 'Archive Job Complete' and a body saying how many leads were archived

Use Database.update with allOrNone=false so one bad record doesn't fail the whole batch."`,requirements:["Create class ArchiveOldLeadsJob implements Database.Batchable<SObject>, Database.Stateful","Declare a stateful Integer archivedCount = 0; to accumulate across batches","Implement start() returning Database.getQueryLocator('SELECT Id, Status FROM Lead WHERE IsConverted = false AND CreatedDate < :cutoff')","Implement execute() — set Status = 'Archived', call Database.update(scope, false), increment archivedCount","Implement finish() — send email via Messaging.SingleEmailMessage with subject 'Archive Job Complete'"],difficulty:"advanced",skills:["Batch Apex","Database.Batchable","Stateful","Email","SOQL"],estimatedHours:5,starterCode:`public class ArchiveOldLeadsJob
    implements Database.Batchable<SObject>, Database.Stateful {

    // TODO: Declare stateful counter
    public Integer archivedCount = 0;

    public Database.QueryLocator start(Database.BatchableContext bc) {
        // TODO: Calculate cutoff date (2 years ago)
        // TODO: Return query locator for old, unconverted leads
        Date cutoff = Date.today().addYears(-2);
        return Database.getQueryLocator(
            'SELECT Id, Status FROM Lead WHERE IsConverted = false' // TODO: add CreatedDate filter
        );
    }

    public void execute(Database.BatchableContext bc, List<SObject> scope) {
        // TODO: Cast scope to List<Lead>
        // TODO: Set Status = 'Archived' on each lead
        // TODO: Call Database.update(leads, false)
        // TODO: Increment archivedCount
    }

    public void finish(Database.BatchableContext bc) {
        // TODO: Build and send completion email
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        // TODO: Set toAddresses, subject, plainTextBody
        // TODO: Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
    }
}`,solution:`public class ArchiveOldLeadsJob
    implements Database.Batchable<SObject>, Database.Stateful {

    public Integer archivedCount = 0;

    public Database.QueryLocator start(Database.BatchableContext bc) {
        Date cutoff = Date.today().addYears(-2);
        return Database.getQueryLocator(
            'SELECT Id, Status FROM Lead WHERE IsConverted = false AND CreatedDate < :cutoff'
        );
    }

    public void execute(Database.BatchableContext bc, List<SObject> scope) {
        List<Lead> leads = (List<Lead>) scope;
        for (Lead l : leads) {
            l.Status = 'Archived';
        }
        Database.update(leads, false);
        archivedCount += leads.size();
    }

    public void finish(Database.BatchableContext bc) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ 'ops@datapurge.com' });
        mail.setSubject('Archive Job Complete');
        mail.setPlainTextBody('Archive job completed. Total leads archived: ' + archivedCount);
        Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
    }
}`,hints:["implements Database.Batchable<SObject>, Database.Stateful — both are required. Database.Stateful preserves instance variables across batches.","In start(), use `Date cutoff = Date.today().addYears(-2);` and reference it in the SOQL string as `:cutoff`.","In execute(), cast the scope: `List<Lead> leads = (List<Lead>) scope;`, loop to set Status, then `Database.update(leads, false)` for partial success.","In finish(), create a Messaging.SingleEmailMessage, call setToAddresses(), setSubject(), setPlainTextBody(), then Messaging.sendEmail()."],testCases:[{id:"tc1",description:"Implements Database.Batchable and Database.Stateful",pattern:"implements\\s+Database\\.Batchable.*Database\\.Stateful|implements\\s+Database\\.Stateful.*Database\\.Batchable",errorMessage:"Class must implement both Database.Batchable<SObject> and Database.Stateful.",exampleFix:`public class ArchiveOldLeadsJob
    implements Database.Batchable<SObject>, Database.Stateful {`},{id:"tc2",description:"Declares stateful archivedCount variable",pattern:"Integer\\s+archivedCount",errorMessage:"Declare a stateful `public Integer archivedCount = 0;` instance variable.",exampleFix:"public Integer archivedCount = 0;"},{id:"tc3",description:"start() uses Database.getQueryLocator",pattern:"Database\\.getQueryLocator\\s*\\(",errorMessage:"Use Database.getQueryLocator() in start() to return the batch query.",exampleFix:`return Database.getQueryLocator(
    'SELECT Id, Status FROM Lead WHERE IsConverted = false AND CreatedDate < :cutoff'
);`},{id:"tc4",description:"execute() sets Status = 'Archived'",pattern:"Status\\s*=\\s*'Archived'",errorMessage:"Set l.Status = 'Archived' in execute().",exampleFix:`for (Lead l : leads) {
    l.Status = 'Archived';
}`},{id:"tc5",description:"finish() sends email with subject 'Archive Job Complete'",pattern:"'Archive Job Complete'",errorMessage:"Set the email subject to 'Archive Job Complete' in finish().",exampleFix:"mail.setSubject('Archive Job Complete');"},{id:"tc6",description:"Uses Database.update with allOrNone=false",pattern:"Database\\.update\\s*\\(.*false",errorMessage:"Call Database.update(leads, false) for partial-success DML.",exampleFix:"Database.update(leads, false);"}]},{id:"mission-queueable-chain",title:"Queueable Apex Chain",company:"AsyncFlow Inc.",description:"Build a three-step async Queueable chain that processes leads through normalization, territory assignment, and scoring.",scenario:`AsyncFlow's architect described the lead enrichment pipeline:

"We hit governor limits processing leads synchronously. I need three Queueable jobs that chain together:

Step 1 — NormalizeLeadsJob: Trims and capitalizes FirstName and LastName (title case — first letter upper, rest lower). Chains to Step 2.

Step 2 — TerritoryAssignJob: Sets Lead.Territory__c based on Lead.Country (US → 'Americas', UK/DE/FR → 'EMEA', else → 'APAC'). Chains to Step 3.

Step 3 — LeadScoringJob: Sets Lead.Score__c to 10 × number of non-null standard fields (FirstName, LastName, Email, Phone, Company, Title, Country). No further chaining.

Each job receives a List<Id> of lead IDs in its constructor and re-queries the records it needs."`,requirements:["Create class NormalizeLeadsJob implements Queueable; constructor accepts List<Id> leadIds","In execute(), query Leads, normalize FirstName/LastName to title case, update, then chain to new TerritoryAssignJob(leadIds)","Create class TerritoryAssignJob implements Queueable; set Territory__c based on Country, chain to LeadScoringJob","Create class LeadScoringJob implements Queueable; count non-null fields and set Score__c = count * 10","Use System.enqueueJob() to chain each job to the next"],difficulty:"advanced",skills:["Queueable Apex","Async Processing","Chaining","SOQL","DML"],estimatedHours:5,starterCode:`public class NormalizeLeadsJob implements Queueable {

    private List<Id> leadIds;

    public NormalizeLeadsJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        // TODO: Query leads by leadIds
        // TODO: Normalize FirstName and LastName to title case
        //       titleCase(s) = s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()
        // TODO: Update leads
        // TODO: System.enqueueJob(new TerritoryAssignJob(leadIds))
    }
}

public class TerritoryAssignJob implements Queueable {

    private List<Id> leadIds;

    public TerritoryAssignJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        // TODO: Query leads
        // TODO: Set Territory__c: US → 'Americas', UK/DE/FR → 'EMEA', else → 'APAC'
        // TODO: Update leads
        // TODO: Chain to LeadScoringJob
    }
}

public class LeadScoringJob implements Queueable {

    private List<Id> leadIds;

    public LeadScoringJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        // TODO: Query leads
        // TODO: Count non-null fields: FirstName, LastName, Email, Phone, Company, Title, Country
        // TODO: Set Score__c = count * 10
        // TODO: Update leads (no chaining after this)
    }
}`,solution:`public class NormalizeLeadsJob implements Queueable {

    private List<Id> leadIds;

    public NormalizeLeadsJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        List<Lead> leads = [SELECT Id, FirstName, LastName FROM Lead WHERE Id IN :leadIds];
        for (Lead l : leads) {
            if (String.isNotBlank(l.FirstName)) {
                l.FirstName = l.FirstName.substring(0,1).toUpperCase() + l.FirstName.substring(1).toLowerCase();
            }
            if (String.isNotBlank(l.LastName)) {
                l.LastName = l.LastName.substring(0,1).toUpperCase() + l.LastName.substring(1).toLowerCase();
            }
        }
        update leads;
        System.enqueueJob(new TerritoryAssignJob(leadIds));
    }
}

public class TerritoryAssignJob implements Queueable {

    private List<Id> leadIds;

    public TerritoryAssignJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        List<Lead> leads = [SELECT Id, Country FROM Lead WHERE Id IN :leadIds];
        Set<String> emea = new Set<String>{'UK', 'DE', 'FR'};
        for (Lead l : leads) {
            if (l.Country == 'US') {
                l.Territory__c = 'Americas';
            } else if (emea.contains(l.Country)) {
                l.Territory__c = 'EMEA';
            } else {
                l.Territory__c = 'APAC';
            }
        }
        update leads;
        System.enqueueJob(new LeadScoringJob(leadIds));
    }
}

public class LeadScoringJob implements Queueable {

    private List<Id> leadIds;

    public LeadScoringJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        List<Lead> leads = [SELECT Id, FirstName, LastName, Email, Phone, Company, Title, Country FROM Lead WHERE Id IN :leadIds];
        for (Lead l : leads) {
            Integer count = 0;
            if (String.isNotBlank(l.FirstName)) count++;
            if (String.isNotBlank(l.LastName))  count++;
            if (String.isNotBlank(l.Email))     count++;
            if (String.isNotBlank(l.Phone))     count++;
            if (String.isNotBlank(l.Company))   count++;
            if (String.isNotBlank(l.Title))     count++;
            if (String.isNotBlank(l.Country))   count++;
            l.Score__c = count * 10;
        }
        update leads;
    }
}`,hints:["Each Queueable class needs a constructor that stores the leadIds List<Id> as an instance variable.","Title case: `s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()` — apply to both FirstName and LastName.","To chain jobs: `System.enqueueJob(new TerritoryAssignJob(leadIds));` at the end of execute().","In LeadScoringJob, increment a counter for each non-blank field and multiply by 10 for the score."],testCases:[{id:"tc1",description:"NormalizeLeadsJob implements Queueable",pattern:"NormalizeLeadsJob\\s+implements\\s+Queueable",errorMessage:"Declare `NormalizeLeadsJob implements Queueable`.",exampleFix:"public class NormalizeLeadsJob implements Queueable {"},{id:"tc2",description:"Title case normalization uses substring and toUpperCase",pattern:"substring\\s*\\(\\s*0\\s*,\\s*1\\s*\\)\\.toUpperCase",errorMessage:"Normalize to title case with: s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()",exampleFix:"l.FirstName = l.FirstName.substring(0,1).toUpperCase() + l.FirstName.substring(1).toLowerCase();"},{id:"tc3",description:"NormalizeLeadsJob chains to TerritoryAssignJob",pattern:"System\\.enqueueJob\\s*\\(\\s*new\\s+TerritoryAssignJob",errorMessage:"Chain to the next step with System.enqueueJob(new TerritoryAssignJob(leadIds)).",exampleFix:"System.enqueueJob(new TerritoryAssignJob(leadIds));"},{id:"tc4",description:"TerritoryAssignJob sets Territory__c",pattern:"Territory__c",errorMessage:"TerritoryAssignJob must set the Territory__c custom field.",exampleFix:"l.Territory__c = 'Americas'; // or 'EMEA' or 'APAC'"},{id:"tc5",description:"LeadScoringJob sets Score__c = count * 10",pattern:"Score__c\\s*=\\s*count\\s*\\*\\s*10|Score__c\\s*=\\s*\\w+\\s*\\*\\s*10",errorMessage:"Set l.Score__c = count * 10 in LeadScoringJob.",exampleFix:"l.Score__c = count * 10;"}]},{id:"mission-rest-api",title:"Build a REST API Endpoint",company:"IntegrateNow Corp",description:"Build a Salesforce REST API endpoint that returns account health data as JSON to external systems.",scenario:`IntegrateNow's integration architect sent over the API spec:

"We need a custom REST endpoint that external systems can call to fetch account health data. The endpoint:

- URL: /services/apexrest/account-health/
- Method: GET
- Query param: accountId
- Response: JSON with accountName, healthScore (100 - 15 × openCases, minimum 0), openCasesCount, status ('Healthy' if score >= 60, 'At Risk' otherwise)
- If account not found: HTTP 404

Wrap the response in a simple inner class — Salesforce will serialize it to JSON automatically."`,requirements:["Create class AccountHealthAPI annotated with @RestResource(urlMapping='/account-health/*')","@HttpGet method getAccountHealth() reads accountId from RestContext.request.params","Query Account by Id; if not found set RestContext.response.statusCode = 404 and return null","Count open Cases for the account (Status != 'Closed')","Return HealthResponse inner class with: String accountName, Integer healthScore, Integer openCasesCount, String status ('Healthy'/'At Risk')"],difficulty:"advanced",skills:["REST API","@RestResource","RestContext","JSON","SOQL"],estimatedHours:5,starterCode:`@RestResource(urlMapping='/account-health/*')
global class AccountHealthAPI {

    global class HealthResponse {
        public String accountName;
        public Integer healthScore;
        public Integer openCasesCount;
        public String status;

        public HealthResponse(String name, Integer score, Integer cases) {
            this.accountName = name;
            this.healthScore = score;
            this.openCasesCount = cases;
            this.status = score >= 60 ? 'Healthy' : 'At Risk';
        }
    }

    @HttpGet
    global static HealthResponse getAccountHealth() {
        // TODO: Read accountId from RestContext.request.params.get('accountId')
        // TODO: Query Account — if not found, set 404 and return null
        // TODO: Count open Cases (Status != 'Closed') for the account
        // TODO: Calculate healthScore = Math.max(0, 100 - 15 * openCases)
        // TODO: Return new HealthResponse(...)
        return null;
    }
}`,solution:`@RestResource(urlMapping='/account-health/*')
global class AccountHealthAPI {

    global class HealthResponse {
        public String accountName;
        public Integer healthScore;
        public Integer openCasesCount;
        public String status;

        public HealthResponse(String name, Integer score, Integer cases) {
            this.accountName = name;
            this.healthScore = score;
            this.openCasesCount = cases;
            this.status = score >= 60 ? 'Healthy' : 'At Risk';
        }
    }

    @HttpGet
    global static HealthResponse getAccountHealth() {
        String accountId = RestContext.request.params.get('accountId');

        List<Account> accounts = [SELECT Id, Name FROM Account WHERE Id = :accountId LIMIT 1];
        if (accounts.isEmpty()) {
            RestContext.response.statusCode = 404;
            return null;
        }

        Account acct = accounts[0];
        Integer openCases = [SELECT COUNT() FROM Case WHERE AccountId = :acct.Id AND Status != 'Closed'];
        Integer healthScore = Math.max(0, 100 - 15 * openCases);

        return new HealthResponse(acct.Name, healthScore, openCases);
    }
}`,hints:["Read the query param with: `String accountId = RestContext.request.params.get('accountId');`","Query with LIMIT 1 and check .isEmpty() — never assume an Id query returns a row.","Set a 404 with: `RestContext.response.statusCode = 404;` before returning null.","Count open cases with an aggregate: `[SELECT COUNT() FROM Case WHERE AccountId = :acct.Id AND Status != 'Closed']`"],testCases:[{id:"tc1",description:"Class annotated with @RestResource(urlMapping='/account-health/*')",pattern:"@RestResource\\s*\\(\\s*urlMapping\\s*=\\s*'/account-health",errorMessage:"Add @RestResource(urlMapping='/account-health/*') annotation to the class.",exampleFix:`@RestResource(urlMapping='/account-health/*')
global class AccountHealthAPI {`},{id:"tc2",description:"getAccountHealth method annotated with @HttpGet",pattern:"@HttpGet",errorMessage:"Annotate the getAccountHealth() method with @HttpGet.",exampleFix:`@HttpGet
global static HealthResponse getAccountHealth() {`},{id:"tc3",description:"Reads accountId from RestContext.request.params",pattern:"RestContext\\.request\\.params\\.get\\s*\\(",errorMessage:"Read the query param with RestContext.request.params.get('accountId').",exampleFix:"String accountId = RestContext.request.params.get('accountId');"},{id:"tc4",description:"Sets HTTP 404 when account not found",pattern:"RestContext\\.response\\.statusCode\\s*=\\s*404",errorMessage:"Set RestContext.response.statusCode = 404 when the account is not found.",exampleFix:`if (accounts.isEmpty()) {
    RestContext.response.statusCode = 404;
    return null;
}`},{id:"tc5",description:"Calculates healthScore with Math.max(0, ...)",pattern:"Math\\.max\\s*\\(\\s*0",errorMessage:"Calculate healthScore as Math.max(0, 100 - 15 * openCases) to avoid negative scores.",exampleFix:"Integer healthScore = Math.max(0, 100 - 15 * openCases);"}]},{id:"mission-platform-events",title:"Platform Event Publisher & Subscriber",company:"EventDriven Systems",description:"Build both sides of a platform event system: an Opportunity publisher and an Order trigger subscriber.",scenario:`EventDriven's integration lead outlined the event-driven architecture:

"When an Opportunity closes as Won, we want to decouple the order creation process using Platform Events. Here's the design:

1. Order_Created__e platform event (already defined) has fields: OpportunityId__c (Text), AccountId__c (Text), Amount__c (Number), Stage__c (Text).
2. A publisher class reads an Opportunity and publishes the event using EventBus.publish(). It should check whether the publish succeeded.
3. A trigger on Order_Created__e (after insert) calls a service class that creates Order__c records from the event data."`,requirements:["Create class OpportunityEventPublisher with method publishOrderEvent(Opportunity opp) that creates and publishes Order_Created__e","Set all four event fields (OpportunityId__c, AccountId__c, Amount__c, Stage__c) from the Opportunity","Check EventBus.publish() result: if !result.isSuccess() throw an exception with the error message","Create trigger OrderCreatedHandler on Order_Created__e (after insert) that calls OrderEventService.handleEvents(Trigger.new)","Create class OrderEventService with method handleEvents(List<Order_Created__e> events) that creates Order__c records"],difficulty:"advanced",skills:["Platform Events","EventBus","Triggers","DML","Error Handling"],estimatedHours:5,starterCode:`// OpportunityEventPublisher.cls
public class OpportunityEventPublisher {

    public static void publishOrderEvent(Opportunity opp) {
        // TODO: Create Order_Created__e instance
        // TODO: Set OpportunityId__c, AccountId__c, Amount__c, Stage__c
        // TODO: Call EventBus.publish(event)
        // TODO: Check result.isSuccess() — throw exception if failed
    }
}

// OrderEventService.cls
public class OrderEventService {

    public static void handleEvents(List<Order_Created__e> events) {
        List<Order__c> orders = new List<Order__c>();
        for (Order_Created__e event : events) {
            // TODO: Create an Order__c from each event's fields
            // Map: OpportunityId__c → Opportunity__c, AccountId__c → Account__c (lookup IDs)
            //      Amount__c → Amount__c, Stage__c → Status__c
        }
        // TODO: insert orders
    }
}

// OrderCreatedHandler.trigger
trigger OrderCreatedHandler on Order_Created__e (after insert) {
    // TODO: Call OrderEventService.handleEvents(Trigger.new)
}`,solution:`// OpportunityEventPublisher.cls
public class OpportunityEventPublisher {

    public static void publishOrderEvent(Opportunity opp) {
        Order_Created__e event = new Order_Created__e(
            OpportunityId__c = opp.Id,
            AccountId__c     = opp.AccountId,
            Amount__c        = opp.Amount,
            Stage__c         = opp.StageName
        );

        Database.SaveResult result = EventBus.publish(event);
        if (!result.isSuccess()) {
            throw new AuraHandledException('Failed to publish Order_Created__e: '
                + result.getErrors()[0].getMessage());
        }
    }
}

// OrderEventService.cls
public class OrderEventService {

    public static void handleEvents(List<Order_Created__e> events) {
        List<Order__c> orders = new List<Order__c>();
        for (Order_Created__e event : events) {
            orders.add(new Order__c(
                Opportunity__c = event.OpportunityId__c,
                Account__c     = event.AccountId__c,
                Amount__c      = event.Amount__c,
                Status__c      = event.Stage__c
            ));
        }
        insert orders;
    }
}

// OrderCreatedHandler.trigger
trigger OrderCreatedHandler on Order_Created__e (after insert) {
    OrderEventService.handleEvents(Trigger.new);
}`,hints:["Create the event: `Order_Created__e event = new Order_Created__e(OpportunityId__c = opp.Id, ...);`","EventBus.publish() returns a Database.SaveResult. Check result.isSuccess() — if false, read result.getErrors()[0].getMessage().","The trigger on a platform event uses `after insert` context only — platform events don't support before insert.","In handleEvents(), map event fields to Order__c fields and collect in a list, then do a single bulk insert outside the loop."],testCases:[{id:"tc1",description:"Defines class OpportunityEventPublisher",pattern:"public\\s+class\\s+OpportunityEventPublisher",errorMessage:"Class must be named exactly `OpportunityEventPublisher`.",exampleFix:"public class OpportunityEventPublisher {"},{id:"tc2",description:"Creates and publishes Order_Created__e event",pattern:"new\\s+Order_Created__e\\s*\\(",errorMessage:"Create the platform event with `new Order_Created__e(...)` and populate its fields.",exampleFix:`Order_Created__e event = new Order_Created__e(
    OpportunityId__c = opp.Id,
    AccountId__c = opp.AccountId,
    Amount__c = opp.Amount,
    Stage__c = opp.StageName
);`},{id:"tc3",description:"Uses EventBus.publish() to send the event",pattern:"EventBus\\.publish\\s*\\(",errorMessage:"Publish the event with EventBus.publish(event).",exampleFix:"Database.SaveResult result = EventBus.publish(event);"},{id:"tc4",description:"Checks publish result with isSuccess()",pattern:"\\.isSuccess\\s*\\(\\s*\\)",errorMessage:"Check the publish result: if (!result.isSuccess()) throw an exception.",exampleFix:`if (!result.isSuccess()) {
    throw new AuraHandledException('Publish failed: ' + result.getErrors()[0].getMessage());
}`},{id:"tc5",description:"Trigger calls OrderEventService.handleEvents",pattern:"OrderEventService\\.handleEvents\\s*\\(",errorMessage:"The trigger must call `OrderEventService.handleEvents(Trigger.new)`.",exampleFix:`trigger OrderCreatedHandler on Order_Created__e (after insert) {
    OrderEventService.handleEvents(Trigger.new);
}`},{id:"tc6",description:"handleEvents inserts Order__c records",pattern:"insert\\s+orders",errorMessage:"Bulk insert the Order__c records with `insert orders;` after the loop.",exampleFix:`List<Order__c> orders = new List<Order__c>();
for (Order_Created__e event : events) {
    orders.add(new Order__c(...));
}
insert orders;`}]}],VS=e=>Dt.find(t=>t.id===e),GS={beginner:{label:"Easy",cls:"text-green-600 bg-green-50 border border-green-200",dot:"bg-green-500"},intermediate:{label:"Medium",cls:"text-yellow-600 bg-yellow-50 border border-yellow-200",dot:"bg-yellow-500"},advanced:{label:"Hard",cls:"text-red-600 bg-red-50 border border-red-200",dot:"bg-red-500"}},Yn={all:Dt.length,beginner:Dt.filter(e=>e.difficulty==="beginner").length,intermediate:Dt.filter(e=>e.difficulty==="intermediate").length,advanced:Dt.filter(e=>e.difficulty==="advanced").length};function JS(){const e=to(),[t,n]=b.useState("all"),[r,s]=b.useState(""),a=()=>new Set(JSON.parse(localStorage.getItem("sfdc-completed-missions")||"[]")),[o,c]=b.useState(a);b.useEffect(()=>{const u=p=>{p.key==="sfdc-completed-missions"&&c(a())};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)},[]);const l=Dt.filter(u=>{const p=t==="all"||u.difficulty===t,h=r.toLowerCase(),g=!h||u.title.toLowerCase().includes(h)||u.company.toLowerCase().includes(h)||u.skills.some(x=>x.toLowerCase().includes(h));return p&&g});return i.jsxs("div",{className:"min-h-screen bg-gray-50",children:[i.jsx("div",{className:"bg-white border-b border-gray-200",children:i.jsx("div",{className:"max-w-6xl mx-auto px-6 py-10",children:i.jsxs("div",{className:"flex items-start justify-between gap-4 flex-wrap",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 text-sf-blue text-sm font-medium mb-2",children:[i.jsx(da,{size:14}),i.jsx("span",{children:"Project Missions"})]}),i.jsx("h1",{className:"text-3xl font-bold text-gray-900 tracking-tight",children:"Build Real Salesforce Solutions"}),i.jsx("p",{className:"text-gray-500 mt-2 max-w-xl",children:"Each mission is a realistic business problem from a fictional company. Write Apex, run tests, and ship it."})]}),i.jsxs("div",{className:"flex gap-4 flex-wrap",children:[i.jsxs("div",{className:"flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3",children:[i.jsx(mr,{size:16,className:"text-green-600"}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs text-green-600 font-medium",children:"Easy"}),i.jsx("div",{className:"text-lg font-bold text-green-700",children:Yn.beginner})]})]}),i.jsxs("div",{className:"flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3",children:[i.jsx(uc,{size:16,className:"text-yellow-600"}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs text-yellow-600 font-medium",children:"Medium"}),i.jsx("div",{className:"text-lg font-bold text-yellow-700",children:Yn.intermediate})]})]}),i.jsxs("div",{className:"flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3",children:[i.jsx(dt,{size:16,className:"text-red-600"}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs text-red-600 font-medium",children:"Hard"}),i.jsx("div",{className:"text-lg font-bold text-red-700",children:Yn.advanced})]})]})]})]})})}),i.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-6",children:[i.jsxs("div",{className:"flex gap-3 mb-5 flex-wrap items-center",children:[i.jsx("div",{className:"flex gap-1 bg-white border border-gray-200 rounded-xl p-1",children:["all","beginner","intermediate","advanced"].map(u=>i.jsx("button",{onClick:()=>n(u),className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${t===u?"bg-sf-blue text-white shadow-sm":"text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`,children:u==="all"?`All (${Yn.all})`:u==="beginner"?`Easy (${Yn.beginner})`:u==="intermediate"?`Medium (${Yn.intermediate})`:`Hard (${Yn.advanced})`},u))}),i.jsx("input",{type:"text",placeholder:"Search missions, skills, companies…",value:r,onChange:u=>s(u.target.value),className:"flex-1 min-w-48 px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-sf-blue focus:ring-1 focus:ring-sf-blue/20 placeholder:text-gray-400"})]}),i.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm",children:[i.jsxs("div",{className:"grid grid-cols-[2fr_1fr_1fr_auto] items-center px-6 py-3 border-b border-gray-100 bg-gray-50",children:[i.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Mission"}),i.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Skills"}),i.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Difficulty"}),i.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide text-right",children:"Time"})]}),l.length===0?i.jsxs("div",{className:"px-6 py-16 text-center",children:[i.jsx("div",{className:"text-4xl mb-3",children:"🔍"}),i.jsx("p",{className:"text-gray-500 font-medium",children:"No missions match your search"}),i.jsx("button",{onClick:()=>{s(""),n("all")},className:"mt-3 text-sf-blue text-sm hover:underline",children:"Clear filters"})]}):l.map((u,p)=>{const h=GS[u.difficulty];return i.jsxs("div",{onClick:()=>e(`/missions/${u.id}`),className:`grid grid-cols-[2fr_1fr_1fr_auto] items-center px-6 py-4 cursor-pointer hover:bg-blue-50/50 transition-colors group ${p<l.length-1?"border-b border-gray-100":""}`,children:[i.jsxs("div",{className:"flex items-start gap-3 min-w-0",children:[o.has(u.id)?i.jsx(Wr,{size:16,className:"mt-1 flex-shrink-0 text-green-500"}):i.jsx("span",{className:`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${h.dot}`}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("div",{className:"font-semibold text-gray-900 group-hover:text-sf-blue transition-colors truncate",children:u.title}),i.jsx("div",{className:"text-xs text-gray-400 mt-0.5",children:u.company})]})]}),i.jsxs("div",{className:"flex flex-wrap gap-1 pr-4",children:[u.skills.slice(0,2).map(g=>i.jsx("span",{className:"text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-medium",children:g},g)),u.skills.length>2&&i.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-500",children:["+",u.skills.length-2]})]}),i.jsx("div",{children:i.jsx("span",{className:`text-xs font-semibold px-2.5 py-1 rounded-lg ${h.cls}`,children:h.label})}),i.jsxs("div",{className:"flex items-center gap-3 pl-4",children:[i.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap",children:[i.jsx(ua,{size:12}),"~",u.estimatedHours,"h"]}),i.jsx(Rt,{size:16,className:"text-gray-300 group-hover:text-sf-blue transition-colors flex-shrink-0"})]})]},u.id)})]}),i.jsxs("p",{className:"text-xs text-gray-400 text-center mt-4",children:[l.length," mission",l.length!==1?"s":""," · ",o.size," completed · Click any row to open the editor"]})]})]})}function YS(e){return e.split(`
`).map(t=>{const n=t.indexOf("//");return n>=0?t.substring(0,n):t}).join(`
`)}function Bp(e,t){try{const n=new RegExp(t.pattern,"im").test(YS(e));return{passed:n,message:n?"Passed":t.errorMessage}}catch{return{passed:!1,message:"Check error"}}}function KS(e,t){const n=t.replace(/\\[nrt]/g," ").replace(/\(\?:|\(\?=|\(\?!/g,"").replace(/[\\()[\]{}*+?^$|]/g," ").replace(/\s{2,}/g," ").trim().split(/\s+/).filter(a=>a.length>3&&/[a-zA-Z]/.test(a)).map(a=>a.toLowerCase()).slice(0,4);if(n.length===0)return[];const r=e.split(`
`),s=[];for(let a=0;a<r.length;a++){const o=r[a].trim();if(!(!o||o.startsWith("//"))&&n.some(c=>o.toLowerCase().includes(c))&&(s.push(`${String(a+1).padStart(3," ")} │ ${r[a]}`),s.length>=3))break}return s}function XS({mission:e}){var gr,ma;const t=b.useContext(io),[n,r]=b.useState(e.starterCode||`// Write your Apex class here
`),[s,a]=b.useState(null),[o,c]=b.useState(null),[l,u]=b.useState(null),[p,h]=b.useState(null),[g,x]=b.useState(!1),[C,S]=b.useState(!1),[w,f]=b.useState(-1),[m,y]=b.useState(0),[T,L]=b.useState(!1),[E,D]=b.useState(!0),[k,U]=b.useState(!0),[M,K]=b.useState(200),[Se,ne]=b.useState(240),fe=b.useRef(0),P=b.useRef(null),[V,re]=b.useState(-1),R=V===fe.current&&P.current===n,q=(((gr=e.scenarios)==null?void 0:gr.length)??0)>0,F=(((ma=e.testCases)==null?void 0:ma.length)??0)>0,B=q||F,$=(o==null?void 0:o.filter(H=>H.passed).length)??0,te=(o==null?void 0:o.length)??0,Ce=te>0&&$===te;s==null||s.filter(H=>H.passed).length;const Be=(s==null?void 0:s.every(H=>H.passed))??!1,rt=R&&(g||p)&&(l||o||s||p),_t=()=>{const H=++fe.current;P.current=n;const ae=Fn(n);ae?(u(ae),c(null),a(null),x(!0),h(null)):(u(null),c(null),a(null),x(!1),h("ok")),re(H),D(!0)},ts=()=>{const H=++fe.current;P.current=n;const ae=Fn(n);if(ae){u(ae),c(null),a(null),x(!0),h(null),re(H),D(!0);return}if(u(null),h(null),q&&e.scenarios){const X=e.scenarios.map(gt=>Ug(n,gt));c(X),y(0),F&&e.testCases&&a(e.testCases.map(gt=>Bp(n,gt)))}else F&&e.testCases&&a(e.testCases.map(X=>Bp(n,X)));x(!0),re(H),D(!0)},le=()=>{r(e.starterCode||`// Write your Apex class here
`),c(null),a(null),u(null),h(null),x(!1),re(-1),P.current=null,f(-1),S(!1),y(0)},Q=b.useRef(null),J=b.useCallback(()=>{e.solution&&navigator.clipboard.writeText(e.solution).then(()=>{L(!0),Q.current&&clearTimeout(Q.current),Q.current=setTimeout(()=>L(!1),2e3)})},[e.solution]),jt=()=>{re(-1),P.current=null,c(null),a(null),u(null),x(!1),h(null)};if(!e.starterCode)return i.jsxs("div",{className:"flex flex-col items-center justify-center h-full bg-gray-50",children:[i.jsx("div",{className:"text-4xl mb-3",children:"🚧"}),i.jsx("p",{className:"text-sm text-gray-500 font-medium",children:"Editor coming soon for this mission"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Build this in a Salesforce Developer Edition org."})]});const Ye=!R||!g?null:l?"error":Ce&&(!F||Be)?"pass":"fail";b.useEffect(()=>{Ye==="pass"&&(t==null||t.completeMission(e.id))},[Ye,e.id,t]);const mt=(H,ae,X,gt=80,ce=480)=>{H.preventDefault();const ns=H.clientY,st=ga=>{const Pt=ns-ga.clientY;X(Math.max(gt,Math.min(ce,ae+Pt)))},hn=()=>{document.removeEventListener("mousemove",st),document.removeEventListener("mouseup",hn)};document.addEventListener("mousemove",st),document.addEventListener("mouseup",hn)};return i.jsxs("div",{className:"flex flex-col h-full bg-[#1e1e2e]",children:[i.jsxs("div",{className:"flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-[#1a1a2a] border-b border-gray-700",children:[i.jsx("span",{className:"text-xs text-gray-500 font-mono mr-auto",children:"MyClass.apex"}),i.jsxs("button",{onClick:le,title:"Reset to starter code",className:"flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors",children:[i.jsx(ro,{size:12})," Reset"]}),e.hints&&w<e.hints.length-1&&i.jsxs("button",{onClick:()=>f(H=>{var ae;return Math.min(H+1,(((ae=e.hints)==null?void 0:ae.length)??1)-1)}),className:"flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/30 rounded-lg transition-colors",children:[i.jsx(Kr,{size:12})," ",w===-1?"Hint":"Next Hint"]}),e.solution&&i.jsxs("button",{onClick:()=>S(H=>!H),className:"flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors",children:[C?i.jsx(yg,{size:12}):i.jsx(Ri,{size:12}),C?"Hide":"Solution"]}),i.jsx("div",{className:"w-px h-5 bg-gray-700 mx-1"}),i.jsxs("button",{onClick:_t,className:"flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sf-blue border border-sf-blue/50 rounded-lg hover:bg-sf-blue/10 transition-colors",children:[i.jsx(fg,{size:12})," Compile"]}),B&&i.jsxs("button",{onClick:ts,className:"flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-sf-blue text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm",children:[i.jsx(bg,{size:12}),q?"Run Tests":"Check"]})]}),w>=0&&e.hints&&i.jsx("div",{className:"flex-shrink-0 px-4 pt-3 space-y-2",children:e.hints.slice(0,w+1).map((H,ae)=>i.jsxs("div",{className:"flex items-start gap-2 bg-yellow-900/20 border border-yellow-700/40 rounded-lg px-3 py-2",children:[i.jsx(Kr,{size:12,className:"text-yellow-400 flex-shrink-0 mt-0.5"}),i.jsxs("p",{className:"text-xs text-yellow-200",children:[i.jsxs("span",{className:"font-semibold",children:["Hint ",ae+1,":"]})," ",H]})]},ae))}),i.jsx("div",{className:"flex-1 min-h-0",children:i.jsx(jg,{height:"100%",defaultLanguage:"java",value:n,onChange:H=>{r(H??""),jt()},theme:"vs-dark",options:{fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineHeight:22,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",padding:{top:16,bottom:16},renderLineHighlight:"line",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6,alwaysConsumeMouseWheel:!1},suggestOnTriggerCharacters:!0,quickSuggestions:!1,tabSize:4,insertSpaces:!0,formatOnPaste:!0,bracketPairColorization:{enabled:!0}},onMount:H=>{H.onDidFocusEditorText(()=>{H.updateOptions({scrollbar:{alwaysConsumeMouseWheel:!0}})}),H.onDidBlurEditorText(()=>{H.updateOptions({scrollbar:{alwaysConsumeMouseWheel:!1}})})}})}),C&&e.solution&&i.jsxs("div",{className:"flex-shrink-0 flex flex-col bg-[#1a1a2a]",style:{height:k?M:"auto"},children:[k&&i.jsx("div",{onMouseDown:H=>mt(H,M,K,80,480),className:"flex-shrink-0 h-1.5 cursor-ns-resize border-t border-gray-700 hover:border-sf-blue/60 hover:bg-sf-blue/10 transition-colors group",title:"Drag to resize",children:i.jsx("div",{className:"w-8 h-0.5 bg-gray-600 group-hover:bg-sf-blue/50 rounded-full mx-auto mt-0.5 transition-colors"})}),!k&&i.jsx("div",{className:"border-t border-gray-700"}),i.jsxs("div",{onClick:()=>U(H=>!H),className:"flex items-center justify-between px-4 py-2 flex-shrink-0 cursor-pointer hover:bg-white/5 transition-colors select-none",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Ri,{size:13,className:"text-sf-teal"}),i.jsx("span",{className:"text-xs font-medium text-gray-300",children:"Official Solution"}),k?i.jsx(cc,{size:13,className:"text-gray-500 ml-1"}):i.jsx(ap,{size:13,className:"text-gray-500 ml-1"})]}),i.jsxs("div",{className:"flex items-center gap-1.5",onClick:H=>H.stopPropagation(),children:[k&&i.jsxs("button",{onClick:J,className:"flex items-center gap-1.5 px-2 py-1 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors",children:[T?i.jsx(hg,{size:11,className:"text-green-400"}):i.jsx(gg,{size:11}),T?"Copied!":"Copy"]}),i.jsx("button",{onClick:()=>S(!1),title:"Close solution","aria-label":"Close solution",className:"p-1 text-gray-500 hover:text-gray-200 hover:bg-gray-700 rounded-md transition-colors",children:i.jsx(dc,{size:13})})]})]}),k&&i.jsx("pre",{className:"flex-1 overflow-y-auto bg-[#12121f] text-gray-200 text-xs p-4 font-mono leading-relaxed whitespace-pre-wrap min-h-0",children:e.solution})]}),rt&&i.jsxs("div",{className:"flex-shrink-0 flex flex-col bg-[#12121f]",style:{height:E?Se:"auto"},children:[E&&i.jsx("div",{onMouseDown:H=>mt(H,Se,ne,80,500),className:"flex-shrink-0 h-1.5 cursor-ns-resize border-t border-gray-700 hover:border-sf-blue/60 hover:bg-sf-blue/10 transition-colors group",title:"Drag to resize",children:i.jsx("div",{className:"w-8 h-0.5 bg-gray-600 group-hover:bg-sf-blue/50 rounded-full mx-auto mt-0.5 transition-colors"})}),!E&&i.jsx("div",{className:"border-t border-gray-700"}),i.jsxs("div",{onClick:()=>D(H=>!H),className:"flex items-center px-4 py-2.5 cursor-pointer hover:bg-white/5 transition-colors select-none flex-shrink-0",children:[i.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[Ye==="pass"&&i.jsxs(i.Fragment,{children:[i.jsx(ze,{size:14,className:"text-green-400"}),i.jsx("span",{className:"text-sm font-semibold text-green-400",children:"All tests passed"})]}),Ye==="fail"&&i.jsxs(i.Fragment,{children:[i.jsx(bt,{size:14,className:"text-red-400"}),i.jsxs("span",{className:"text-sm font-semibold text-red-400",children:[$,"/",te," tests passed"]})]}),Ye==="error"&&i.jsxs(i.Fragment,{children:[i.jsx(bt,{size:14,className:"text-red-400"}),i.jsx("span",{className:"text-sm font-semibold text-red-400",children:"Compilation failed"})]}),Ye===null&&p==="ok"&&i.jsxs(i.Fragment,{children:[i.jsx(ze,{size:14,className:"text-green-400"}),i.jsx("span",{className:"text-sm font-semibold text-green-400",children:"Compiled successfully"})]})]}),i.jsxs("div",{className:"flex items-center gap-0.5 ml-2",onClick:H=>H.stopPropagation(),children:[i.jsx("button",{onClick:()=>D(H=>!H),className:"p-1 text-gray-500 hover:text-gray-300 hover:bg-gray-700 rounded transition-colors",title:E?"Collapse":"Expand","aria-label":E?"Collapse results":"Expand results",children:E?i.jsx(cc,{size:14}):i.jsx(ap,{size:14})}),i.jsx("button",{onClick:jt,title:"Dismiss results","aria-label":"Dismiss results",className:"p-1 text-gray-500 hover:text-gray-200 hover:bg-gray-700 rounded transition-colors",children:i.jsx(dc,{size:13})})]})]}),E&&i.jsxs("div",{className:"flex-1 overflow-y-auto min-h-0",children:[!g&&p==="ok"&&i.jsx("div",{className:"px-4 pb-4",children:i.jsxs("p",{className:"text-xs text-gray-400",children:["No syntax errors found. Click ",i.jsx("span",{className:"text-sf-blue font-medium",children:"Run Tests"})," to execute all test cases."]})}),g&&l&&i.jsxs("div",{className:"px-4 pb-4 space-y-2",children:[i.jsx("pre",{className:"bg-red-950/30 border border-red-800/40 text-red-300 text-xs rounded-lg px-3 py-2 font-mono whitespace-pre-wrap",children:l}),i.jsx("p",{className:"text-xs text-gray-500",children:"Fix the syntax error above, then click Run Tests again."})]}),g&&o&&i.jsxs("div",{children:[i.jsx("div",{className:"flex overflow-x-auto border-b border-gray-700/50 px-2",children:o.map((H,ae)=>i.jsxs("button",{onClick:()=>y(ae),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${m===ae?"border-sf-blue text-sf-blue":"border-transparent text-gray-500 hover:text-gray-300"}`,children:[i.jsx("span",{className:`w-1.5 h-1.5 rounded-full flex-shrink-0 ${H.passed?"bg-green-400":"bg-red-400"}`}),e.scenarios[ae].label]},e.scenarios[ae].label))}),(()=>{const H=o[m],ae=e.scenarios[m];return i.jsxs("div",{className:"p-4 space-y-3",children:[H.error&&i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"Runtime Error"}),i.jsx("pre",{className:"bg-red-950/20 border border-red-800/30 text-red-300 text-xs rounded-lg px-3 py-2 font-mono whitespace-pre-wrap",children:H.error})]}),i.jsxs("div",{className:"grid grid-cols-[1fr_1fr] gap-3",children:[i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"Input"}),i.jsx("pre",{className:"bg-gray-900 text-blue-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto",children:ae.inputDisplay})]}),i.jsx("div",{}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"Expected"}),i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 font-mono",children:H.expectedOutput.join(`
`)})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"Your Output"}),i.jsx("pre",{className:`text-xs rounded-lg px-3 py-2 font-mono ${H.passed?"bg-gray-900 text-green-300":"bg-gray-900 text-red-300"}`,children:H.actualOutput.length>0?H.actualOutput.join(`
`):"(no output)"})]})]})]})})()]}),g&&s&&F&&i.jsxs("div",{className:"px-4 pb-4",children:[o&&i.jsx("div",{className:"mt-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Structure Checks"}),i.jsx("div",{className:"space-y-2",children:s.map((H,ae)=>{const X=e.testCases[ae];if(H.passed)return i.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-green-900/20 border border-green-800/30 rounded-lg",children:[i.jsx(ze,{size:13,className:"text-green-400 flex-shrink-0"}),i.jsx("span",{className:"text-xs text-green-300",children:X.description})]},ae);const gt=KS(n,X.pattern);return i.jsxs("div",{className:"border border-red-800/30 rounded-lg overflow-hidden",children:[i.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-red-900/20",children:[i.jsx(bt,{size:13,className:"text-red-400 flex-shrink-0"}),i.jsx("span",{className:"text-xs font-semibold text-red-300",children:X.description})]}),i.jsxs("div",{className:"px-3 py-2 space-y-2",children:[i.jsx("p",{className:"text-xs text-gray-400",children:H.message}),gt.length>0&&i.jsx("pre",{className:"bg-gray-900 text-orange-300 text-xs rounded px-3 py-1.5 font-mono overflow-x-auto",children:gt.join(`
`)}),X.exampleFix&&i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded px-3 py-1.5 font-mono overflow-x-auto",children:X.exampleFix})]})]},ae)})})]})]})]})]})}const ZS={beginner:{label:"Easy",cls:"text-green-700 bg-green-100"},intermediate:{label:"Medium",cls:"text-yellow-700 bg-yellow-100"},advanced:{label:"Hard",cls:"text-red-700 bg-red-100"}};function ew(){const{id:e}=pu(),t=to(),n=e?VS(e):null,r=n?Dt.findIndex(p=>p.id===n.id):-1,s=r>0?Dt[r-1]:null,a=r>=0&&r<Dt.length-1?Dt[r+1]:null,[o,c]=b.useState(420),l=p=>{p.preventDefault();const h=p.clientX,g=o,x=S=>{c(Math.max(280,Math.min(680,g+S.clientX-h)))},C=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",C)};if(!n)return i.jsx("div",{className:"flex items-center justify-center min-h-screen",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-5xl font-bold text-gray-200 mb-4",children:"404"}),i.jsx("p",{className:"text-gray-500 mb-6",children:"Mission not found"}),i.jsx(oe,{to:"/missions",className:"btn-primary",children:"Back to Missions"})]})});const u=ZS[n.difficulty];return i.jsxs("div",{className:"flex flex-col h-[calc(100vh-64px)] bg-gray-50 overflow-hidden",children:[i.jsxs("div",{className:"flex-shrink-0 bg-white border-b border-gray-200 px-5 py-2.5 flex items-center gap-3",children:[i.jsxs("button",{onClick:()=>t("/missions"),className:"flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors flex-shrink-0",children:[i.jsx(pg,{size:15}),i.jsx("span",{className:"hidden sm:inline",children:"Missions"})]}),i.jsx(Rt,{size:14,className:"text-gray-300 flex-shrink-0"}),i.jsx("span",{className:"font-semibold text-gray-900 truncate text-sm min-w-0",children:n.title}),i.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-md flex-shrink-0 ${u.cls}`,children:u.label}),i.jsxs("div",{className:"ml-auto flex items-center gap-2 flex-shrink-0",children:[i.jsxs("span",{className:"text-xs text-gray-400 tabular-nums hidden sm:inline",children:[r+1," / ",Dt.length]}),i.jsxs("button",{onClick:()=>s&&t(`/missions/${s.id}`),disabled:!s,title:s?s.title:void 0,className:"flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors disabled:opacity-30 disabled:cursor-not-allowed border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900",children:[i.jsx(mg,{size:13})," Prev"]}),i.jsxs("button",{onClick:()=>a&&t(`/missions/${a.id}`),disabled:!a,title:a?a.title:void 0,className:"flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-sf-blue border-sf-blue text-white hover:bg-blue-600",children:["Next ",i.jsx(Rt,{size:13})]})]})]}),i.jsxs("div",{className:"flex flex-1 min-h-0",children:[i.jsx("div",{style:{width:o},className:"flex-shrink-0 overflow-y-auto bg-white border-r border-gray-200",children:i.jsxs("div",{className:"p-6 space-y-5",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-3 text-xs text-gray-400 mb-2",children:[i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(nb,{size:12}),n.company]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(ua,{size:12}),"~",n.estimatedHours,"h"]})]}),i.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-1.5",children:n.title}),i.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:n.description})]}),i.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.skills.map(p=>i.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-medium border border-blue-100",children:p},p))}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-xs font-bold text-gray-500 uppercase tracking-widest mb-2",children:"Business Scenario"}),i.jsx("div",{className:"border-l-4 border-sf-blue pl-4",children:i.jsx("p",{className:"text-sm text-gray-700 leading-relaxed whitespace-pre-line",children:n.scenario})})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-xs font-bold text-gray-500 uppercase tracking-widest mb-3",children:"Requirements"}),i.jsx("ol",{className:"space-y-2.5",children:n.requirements.map((p,h)=>i.jsxs("li",{className:"flex gap-3 text-sm",children:[i.jsx("span",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-sf-blue/10 text-sf-blue text-xs flex items-center justify-center font-bold mt-0.5",children:h+1}),i.jsx("span",{className:"text-gray-700 leading-snug",children:p})]},h))})]})]})}),i.jsx("div",{onMouseDown:l,className:"flex-shrink-0 w-1.5 cursor-col-resize bg-gray-200 hover:bg-sf-blue/40 active:bg-sf-blue/60 transition-colors group flex flex-col items-center justify-center",title:"Drag to resize panels",children:i.jsx("div",{className:"h-8 w-0.5 rounded-full bg-gray-400 group-hover:bg-sf-blue transition-colors"})}),i.jsx("div",{className:"flex-1 min-w-0 overflow-hidden flex flex-col",children:i.jsx(XS,{mission:n})})]})]})}function tw(){return i.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-12",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("div",{className:"w-16 h-16 bg-sf-blue rounded-2xl flex items-center justify-center mx-auto mb-4",children:i.jsx(dt,{className:"w-8 h-8 text-white"})}),i.jsx("h1",{className:"text-3xl font-bold mb-3",children:"About SFDC Simplified"}),i.jsx("p",{className:"text-sf-gray-6 text-lg",children:"An interactive learning platform for aspiring Salesforce developers"})]}),i.jsxs("div",{className:"space-y-8",children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-3",children:"What is SFDC Simplified?"}),i.jsx("p",{className:"text-sf-gray-7 leading-relaxed",children:"SFDC Simplified is a free, browser-based learning platform designed specifically for people who are completely new to Salesforce development. Unlike documentation or video courses, every topic here follows a hands-on cycle: understand, see an example, write code, get feedback, review the solution."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"What You Will Learn"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:i.jsx(dt,{className:"w-4 h-4 text-sf-blue"}),label:"Apex Programming",desc:"Variables, classes, loops, collections"},{icon:i.jsx(mr,{className:"w-4 h-4 text-sf-teal"}),label:"SOQL Queries",desc:"Query Salesforce data with precision"},{icon:i.jsx(dn,{className:"w-4 h-4 text-sf-orange"}),label:"DML Operations",desc:"Create, update, delete records safely"},{icon:i.jsx(da,{className:"w-4 h-4 text-sf-purple"}),label:"Real Scenarios",desc:"Apply skills to business problems"}].map(e=>i.jsxs("div",{className:"flex gap-3 p-3 bg-sf-gray-1 rounded-lg",children:[i.jsx("div",{className:"flex-shrink-0 mt-0.5",children:e.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"font-medium text-sm",children:e.label}),i.jsx("div",{className:"text-xs text-sf-gray-6",children:e.desc})]})]},e.label))})]}),i.jsx("div",{className:"card border-2 border-amber-200 bg-amber-50",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx(pa,{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold text-amber-900 mb-2",children:"Important Disclaimer"}),i.jsxs("p",{className:"text-amber-800 text-sm leading-relaxed",children:["SFDC Simplified is an educational learning platform and is ",i.jsx("strong",{children:"not affiliated with Salesforce, Inc."}),"The coding challenges use ",i.jsx("strong",{children:"pattern-based validation"})," in the browser — they do not compile or execute real Apex code. This means the feedback checks for the presence of correct syntax patterns, not actual runtime correctness. To test real Apex, use a ",i.jsx("a",{href:"https://developer.salesforce.com/signup",className:"underline",target:"_blank",rel:"noreferrer",children:"free Salesforce Developer Edition org"}),"."]})]})]})}),i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-3",children:"How Progress is Saved"}),i.jsxs("p",{className:"text-sf-gray-7 text-sm leading-relaxed",children:["In this initial version, all progress (completed lessons, quiz scores, XP, badges) is stored in your browser's",i.jsx("code",{className:"code-inline mx-1",children:"localStorage"}),". This means it persists across sessions on the same device and browser, but is not synced across devices. A future version will support user accounts with server-side persistence."]})]}),i.jsxs("div",{className:"card text-center",children:[i.jsx(rb,{className:"w-8 h-8 text-red-400 mx-auto mb-3"}),i.jsx("h2",{className:"text-xl font-bold mb-2",children:"Get Started"}),i.jsx("p",{className:"text-sf-gray-6 mb-4",children:"Ready to become a Salesforce developer?"}),i.jsxs(oe,{to:"/apex",className:"btn-primary inline-flex items-center gap-2",children:["Start Learning ",i.jsx(Ms,{className:"w-4 h-4"})]})]})]})]})}function nw(){const{id:e}=pu(),{completeChallenge:t,isChallengeCompleted:n,progress:r}=so(),s=e?wg(e):void 0,a=s?n(s.id):!1;return s?i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[i.jsxs("nav",{className:"flex items-center gap-2 text-sm text-sf-gray-5 mb-6",children:[i.jsxs(oe,{to:"/apex",className:"hover:text-sf-blue transition-colors flex items-center gap-1",children:[i.jsx(pg,{className:"w-3 h-3"})," Apex Path"]}),i.jsx("span",{children:"›"}),i.jsxs("span",{className:"text-sf-gray-7",children:["Challenge: ",s.title]})]}),i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-sf-blue/10 flex items-center justify-center",children:i.jsx(dt,{className:"w-5 h-5 text-sf-blue"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold",children:s.title}),i.jsx("p",{className:"text-sf-gray-6 text-sm",children:s.description})]})]}),i.jsx(Wg,{challenge:s,onComplete:o=>t(s.id,o),isCompleted:a,savedCode:r.challengeSubmissions[s.id]})]}):i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"Challenge not found"}),i.jsx(oe,{to:"/apex",className:"btn-primary",children:"Back to Apex Path"})]})}const io=b.createContext(null);function rw(){return i.jsxs("div",{className:"max-w-xl mx-auto px-4 py-24 text-center",children:[i.jsx("div",{className:"text-6xl font-bold text-sf-gray-3 mb-4",children:"404"}),i.jsx("h2",{className:"text-xl font-bold mb-2",children:"Page not found"}),i.jsx("p",{className:"text-sf-gray-6 mb-6",children:"The page you are looking for does not exist."}),i.jsx("a",{href:"/",className:"btn-primary",children:"Go Home"})]})}function sw(){const e=so();return i.jsx(io.Provider,{value:e,children:i.jsxs("div",{className:"min-h-screen flex flex-col",children:[i.jsx(mb,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(W0,{children:[i.jsx(ft,{path:"/",element:i.jsx(vb,{})}),i.jsx(ft,{path:"/dashboard",element:i.jsx(Ab,{})}),i.jsx(ft,{path:"/apex",element:i.jsx(Ib,{})}),i.jsx(ft,{path:"/lesson/:lessonId",element:i.jsx(BS,{})}),i.jsx(ft,{path:"/soql",element:i.jsx(WS,{})}),i.jsx(ft,{path:"/debug",element:i.jsx($S,{})}),i.jsx(ft,{path:"/missions",element:i.jsx(JS,{})}),i.jsx(ft,{path:"/missions/:id",element:i.jsx(ew,{})}),i.jsx(ft,{path:"/about",element:i.jsx(tw,{})}),i.jsx(ft,{path:"/challenge/:id",element:i.jsx(nw,{})}),i.jsx(ft,{path:"*",element:i.jsx(rw,{})})]})}),i.jsx(gb,{})]})})}function aw(){return i.jsx(J0,{children:i.jsx(sw,{})})}Xm(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(aw,{})}));
