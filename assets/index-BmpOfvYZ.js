function Dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gl={exports:{}},Is={},Yl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Md=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Ud=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),So=Symbol.iterator;function Qd(e){return e===null||typeof e!="object"?null:(e=So&&e[So]||e["@@iterator"],typeof e=="function"?e:null)}var Jl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kl=Object.assign,Xl={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Xl,this.updater=n||Jl}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zl(){}Zl.prototype=Sn.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=Xl,this.updater=n||Jl}var vi=xi.prototype=new Zl;vi.constructor=xi;Kl(vi,Sn.prototype);vi.isPureReactComponent=!0;var bo=Array.isArray,ec=Object.prototype.hasOwnProperty,Si={current:null},tc={key:!0,ref:!0,__self:!0,__source:!0};function nc(e,t,n){var r,s={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ec.call(t,r)&&!tc.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:pr,type:e,key:a,ref:o,props:s,_owner:Si.current}}function zd(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function $d(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wo=/\/+/g;function Ys(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$d(""+e.key):t.toString(36)}function Fr(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case Md:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Ys(o,0):r,bo(s)?(n="",e!=null&&(n=e.replace(wo,"$&/")+"/"),Fr(s,t,n,"",function(d){return d})):s!=null&&(bi(s)&&(s=zd(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(wo,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",bo(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+Ys(a,l);o+=Fr(a,t,n,c,s)}else if(c=Qd(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+Ys(a,l++),o+=Fr(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function br(e,t,n){if(e==null)return e;var r=[],s=0;return Fr(e,r,"","",function(a){return t.call(n,a,s++)}),r}function Vd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Wr={transition:null},Gd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:Si};function rc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Sn;D.Fragment=jd;D.Profiler=qd;D.PureComponent=xi;D.StrictMode=_d;D.Suspense=Bd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd;D.act=rc;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kl({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Si.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ec.call(t,c)&&!tc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:pr,type:e.type,key:s,ref:a,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pd,_context:e},e.Consumer=e};D.createElement=nc;D.createFactory=function(e){var t=nc.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Wd,render:e}};D.isValidElement=bi;D.lazy=function(e){return{$$typeof:Hd,_payload:{_status:-1,_result:e},_init:Vd}};D.memo=function(e,t){return{$$typeof:Ud,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=t}};D.unstable_act=rc;D.useCallback=function(e,t){return de.current.useCallback(e,t)};D.useContext=function(e){return de.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return de.current.useDeferredValue(e)};D.useEffect=function(e,t){return de.current.useEffect(e,t)};D.useId=function(){return de.current.useId()};D.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return de.current.useMemo(e,t)};D.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};D.useRef=function(e){return de.current.useRef(e)};D.useState=function(e){return de.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return de.current.useTransition()};D.version="18.3.1";Yl.exports=D;var w=Yl.exports;const Yd=Rd(w),Jd=Dd({__proto__:null,default:Yd},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=w,Xd=Symbol.for("react.element"),Zd=Symbol.for("react.fragment"),ep=Object.prototype.hasOwnProperty,tp=Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,np={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,t,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ep.call(t,r)&&!np.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Xd,type:e,key:a,ref:o,props:s,_owner:tp.current}}Is.Fragment=Zd;Is.jsx=sc;Is.jsxs=sc;Gl.exports=Is;var i=Gl.exports,ac={exports:{}},Ce={},ic={exports:{}},oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,N){var k=E.length;E.push(N);e:for(;0<k;){var V=k-1>>>1,Z=E[V];if(0<s(Z,N))E[V]=N,E[k]=Z,k=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],k=E.pop();if(k!==N){E[0]=k;e:for(var V=0,Z=E.length,vr=Z>>>1;V<vr;){var Ot=2*(V+1)-1,Gs=E[Ot],Nt=Ot+1,Sr=E[Nt];if(0>s(Gs,k))Nt<Z&&0>s(Sr,Gs)?(E[V]=Sr,E[Nt]=k,V=Nt):(E[V]=Gs,E[Ot]=k,V=Ot);else if(Nt<Z&&0>s(Sr,k))E[V]=Sr,E[Nt]=k,V=Nt;else break e}}return N}function s(E,N){var k=E.sortIndex-N.sortIndex;return k!==0?k:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],p=1,m=null,f=3,S=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=E)r(d),N.sortIndex=N.expirationTime,t(c,N);else break;N=n(d)}}function b(E){if(y=!1,g(E),!v)if(n(c)!==null)v=!0,$s(I);else{var N=n(d);N!==null&&Vs(b,N.startTime-E)}}function I(E,N){v=!1,y&&(y=!1,h(O),O=-1),S=!0;var k=f;try{for(g(N),m=n(c);m!==null&&(!(m.expirationTime>N)||E&&!ke());){var V=m.callback;if(typeof V=="function"){m.callback=null,f=m.priorityLevel;var Z=V(m.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(c)&&r(c),g(N)}else r(c);m=n(c)}if(m!==null)var vr=!0;else{var Ot=n(d);Ot!==null&&Vs(b,Ot.startTime-N),vr=!1}return vr}finally{m=null,f=k,S=!1}}var A=!1,L=null,O=-1,$=5,R=-1;function ke(){return!(e.unstable_now()-R<$)}function Cn(){if(L!==null){var E=e.unstable_now();R=E;var N=!0;try{N=L(!0,E)}finally{N?In():(A=!1,L=null)}}else A=!1}var In;if(typeof u=="function")In=function(){u(Cn)};else if(typeof MessageChannel<"u"){var vo=new MessageChannel,kd=vo.port2;vo.port1.onmessage=Cn,In=function(){kd.postMessage(null)}}else In=function(){x(Cn,0)};function $s(E){L=E,A||(A=!0,In())}function Vs(E,N){O=x(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||S||(v=!0,$s(I))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var k=f;f=N;try{return E()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var k=f;f=E;try{return N()}finally{f=k}},e.unstable_scheduleCallback=function(E,N,k){var V=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?V+k:V):k=V,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=k+Z,E={id:p++,callback:N,priorityLevel:E,startTime:k,expirationTime:Z,sortIndex:-1},k>V?(E.sortIndex=k,t(d,E),n(c)===null&&E===n(d)&&(y?(h(O),O=-1):y=!0,Vs(b,k-V))):(E.sortIndex=Z,t(c,E),v||S||(v=!0,$s(I))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var N=f;return function(){var k=f;f=N;try{return E.apply(this,arguments)}finally{f=k}}}})(oc);ic.exports=oc;var rp=ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=w,we=rp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lc=new Set,Vn={};function Ht(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Co={},Io={};function ip(e){return wa.call(Io,e)?!0:wa.call(Co,e)?!1:ap.test(e)?Io[e]=!0:(Co[e]=!0,!1)}function op(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lp(e,t,n,r){if(t===null||typeof t>"u"||op(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wi=/[\-:]([a-z])/g;function Ci(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wi,Ci);se[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wi,Ci);se[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wi,Ci);se[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lp(t,n,s,r)&&(n=null),r||s===null?ip(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),Ca=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),uc=Symbol.for("react.context"),Ti=Symbol.for("react.forward_ref"),Ia=Symbol.for("react.suspense"),Aa=Symbol.for("react.suspense_list"),Ei=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),dc=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Js;function Rn(e){if(Js===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Js=t&&t[1]||""}return`
`+Js+e}var Ks=!1;function Xs(e,t){if(!e||Ks)return"";Ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function cp(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Xs(e.type,!1),e;case 11:return e=Xs(e.type.render,!1),e;case 1:return e=Xs(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Gt:return"Portal";case Ca:return"Profiler";case Ai:return"StrictMode";case Ia:return"Suspense";case Aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uc:return(e.displayName||"Context")+".Consumer";case cc:return(e._context.displayName||"Context")+".Provider";case Ti:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ei:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===Ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dp(e){var t=pc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=dp(e))}function hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function To(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gc(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function La(e,t){gc(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oa(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Eo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oa(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Mn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function mc(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function xc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=xc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var hp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Da(e,t){if(t){if(hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ma=null;function Li(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,ln=null,cn=null;function No(e){if(e=mr(e)){if(typeof ja!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Os(t),ja(e.stateNode,e.type,t))}}function Sc(e){ln?cn?cn.push(e):cn=[e]:ln=e}function bc(){if(ln){var e=ln,t=cn;if(cn=ln=null,No(e),t)for(e=0;e<t.length;e++)No(t[e])}}function wc(e,t){return e(t)}function Cc(){}var Zs=!1;function Ic(e,t,n){if(Zs)return e(t,n);Zs=!0;try{return wc(e,t,n)}finally{Zs=!1,(ln!==null||cn!==null)&&(Cc(),bc())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Os(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var _a=!1;if(Xe)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){_a=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{_a=!1}function gp(e,t,n,r,s,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Pn=!1,Xr=null,Zr=!1,qa=null,mp={onError:function(e){Pn=!0,Xr=e}};function fp(e,t,n,r,s,a,o,l,c){Pn=!1,Xr=null,gp.apply(mp,arguments)}function yp(e,t,n,r,s,a,o,l,c){if(fp.apply(this,arguments),Pn){if(Pn){var d=Xr;Pn=!1,Xr=null}else throw Error(C(198));Zr||(Zr=!0,qa=d)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ac(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ko(e){if(Qt(e)!==e)throw Error(C(188))}function xp(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return ko(s),e;if(a===r)return ko(s),t;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=a;break}if(l===r){o=!0,r=s,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=s;break}if(l===r){o=!0,r=a,n=s;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Tc(e){return e=xp(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ec(e);if(t!==null)return t;e=e.sibling}return null}var Lc=we.unstable_scheduleCallback,Do=we.unstable_cancelCallback,vp=we.unstable_shouldYield,Sp=we.unstable_requestPaint,G=we.unstable_now,bp=we.unstable_getCurrentPriorityLevel,Oi=we.unstable_ImmediatePriority,Oc=we.unstable_UserBlockingPriority,es=we.unstable_NormalPriority,wp=we.unstable_LowPriority,Nc=we.unstable_IdlePriority,As=null,He=null;function Cp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(As,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Tp,Ip=Math.log,Ap=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(Ip(e)/Ap|0)|0}var Ar=64,Tr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=jn(l):(a&=o,a!==0&&(r=jn(a)))}else o=n&~s,o!==0?r=jn(o):a!==0&&(r=jn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),s=1<<n,r|=e[n],t&=~s;return r}function Ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-qe(a),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=Ep(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kc(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Op(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-qe(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function Ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var _=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rc,ki,Mc,jc,_c,Fa=!1,Er=[],ht=null,gt=null,mt=null,Jn=new Map,Kn=new Map,ot=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ro(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function En(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=mr(t),t!==null&&ki(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function kp(e,t,n,r,s){switch(t){case"focusin":return ht=En(ht,e,t,n,r,s),!0;case"dragenter":return gt=En(gt,e,t,n,r,s),!0;case"mouseover":return mt=En(mt,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Jn.set(a,En(Jn.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,Kn.set(a,En(Kn.get(a)||null,e,t,n,r,s)),!0}return!1}function qc(e){var t=Rt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ac(n),t!==null){e.blockedOn=t,_c(e.priority,function(){Mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ma=r,n.target.dispatchEvent(r),Ma=null}else return t=mr(n),t!==null&&ki(t),e.blockedOn=n,!1;t.shift()}return!0}function Mo(e,t,n){Br(e)&&n.delete(t)}function Dp(){Fa=!1,ht!==null&&Br(ht)&&(ht=null),gt!==null&&Br(gt)&&(gt=null),mt!==null&&Br(mt)&&(mt=null),Jn.forEach(Mo),Kn.forEach(Mo)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Fa||(Fa=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Dp)))}function Xn(e){function t(s){return Ln(s,e)}if(0<Er.length){Ln(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Ln(ht,e),gt!==null&&Ln(gt,e),mt!==null&&Ln(mt,e),Jn.forEach(t),Kn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&ot.shift()}var un=rt.ReactCurrentBatchConfig,ns=!0;function Rp(e,t,n,r){var s=_,a=un.transition;un.transition=null;try{_=1,Di(e,t,n,r)}finally{_=s,un.transition=a}}function Mp(e,t,n,r){var s=_,a=un.transition;un.transition=null;try{_=4,Di(e,t,n,r)}finally{_=s,un.transition=a}}function Di(e,t,n,r){if(ns){var s=Wa(e,t,n,r);if(s===null)ua(e,t,r,rs,n),Ro(e,r);else if(kp(s,e,t,n,r))r.stopPropagation();else if(Ro(e,r),t&4&&-1<Np.indexOf(e)){for(;s!==null;){var a=mr(s);if(a!==null&&Rc(a),a=Wa(e,t,n,r),a===null&&ua(e,t,r,rs,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var rs=null;function Wa(e,t,n,r){if(rs=null,e=Li(r),e=Rt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ac(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function Pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case Oi:return 1;case Oc:return 4;case es:case wp:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var ct=null,Ri=null,Ur=null;function Fc(){if(Ur)return Ur;var e,t=Ri,n=t.length,r,s="value"in ct?ct.value:ct.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return Ur=s.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function jo(){return!1}function Ie(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Lr:jo,this.isPropagationStopped=jo,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=Ie(bn),gr=Q({},bn,{view:0,detail:0}),jp=Ie(gr),ta,na,On,Ts=Q({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(ta=e.screenX-On.screenX,na=e.screenY-On.screenY):na=ta=0,On=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),_o=Ie(Ts),_p=Q({},Ts,{dataTransfer:0}),qp=Ie(_p),Pp=Q({},gr,{relatedTarget:0}),ra=Ie(Pp),Fp=Q({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=Ie(Fp),Bp=Q({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Up=Ie(Bp),Hp=Q({},bn,{data:0}),qo=Ie(Hp),Qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$p[e])?!!t[e]:!1}function ji(){return Vp}var Gp=Q({},gr,{key:function(e){if(e.key){var t=Qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=Ie(Gp),Jp=Q({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Ie(Jp),Kp=Q({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),Xp=Ie(Kp),Zp=Q({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),eh=Ie(Zp),th=Q({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nh=Ie(th),rh=[9,13,27,32],_i=Xe&&"CompositionEvent"in window,Fn=null;Xe&&"documentMode"in document&&(Fn=document.documentMode);var sh=Xe&&"TextEvent"in window&&!Fn,Wc=Xe&&(!_i||Fn&&8<Fn&&11>=Fn),Fo=" ",Wo=!1;function Bc(e,t){switch(e){case"keyup":return rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function ah(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Wo=!0,Fo);case"textInput":return e=t.data,e===Fo&&Wo?null:e;default:return null}}function ih(e,t){if(Jt)return e==="compositionend"||!_i&&Bc(e,t)?(e=Fc(),Ur=Ri=ct=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wc&&t.locale!=="ko"?null:t.data;default:return null}}var oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oh[e.type]:t==="textarea"}function Hc(e,t,n,r){Sc(r),t=ss(t,"onChange"),0<t.length&&(n=new Mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,Zn=null;function lh(e){eu(e,0)}function Es(e){var t=Zt(e);if(hc(t))return e}function ch(e,t){if(e==="change")return t}var Qc=!1;if(Xe){var sa;if(Xe){var aa="oninput"in document;if(!aa){var Uo=document.createElement("div");Uo.setAttribute("oninput","return;"),aa=typeof Uo.oninput=="function"}sa=aa}else sa=!1;Qc=sa&&(!document.documentMode||9<document.documentMode)}function Ho(){Wn&&(Wn.detachEvent("onpropertychange",zc),Zn=Wn=null)}function zc(e){if(e.propertyName==="value"&&Es(Zn)){var t=[];Hc(t,Zn,e,Li(e)),Ic(lh,t)}}function uh(e,t,n){e==="focusin"?(Ho(),Wn=t,Zn=n,Wn.attachEvent("onpropertychange",zc)):e==="focusout"&&Ho()}function dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Es(Zn)}function ph(e,t){if(e==="click")return Es(t)}function hh(e,t){if(e==="input"||e==="change")return Es(t)}function gh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:gh;function er(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!wa.call(t,s)||!Fe(e[s],t[s]))return!1}return!0}function Qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zo(e,t){var n=Qo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qo(n)}}function $c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mh(e){var t=Vc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$c(n.ownerDocument.documentElement,n)){if(r!==null&&qi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=zo(n,a);var o=zo(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fh=Xe&&"documentMode"in document&&11>=document.documentMode,Kt=null,Ba=null,Bn=null,Ua=!1;function $o(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||Kt==null||Kt!==Kr(r)||(r=Kt,"selectionStart"in r&&qi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&er(Bn,r)||(Bn=r,r=ss(Ba,"onSelect"),0<r.length&&(t=new Mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},ia={},Gc={};Xe&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Ls(e){if(ia[e])return ia[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gc)return ia[e]=t[n];return e}var Yc=Ls("animationend"),Jc=Ls("animationiteration"),Kc=Ls("animationstart"),Xc=Ls("transitionend"),Zc=new Map,Vo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Zc.set(e,t),Ht(t,[e])}for(var oa=0;oa<Vo.length;oa++){var la=Vo[oa],yh=la.toLowerCase(),xh=la[0].toUpperCase()+la.slice(1);At(yh,"on"+xh)}At(Yc,"onAnimationEnd");At(Jc,"onAnimationIteration");At(Kc,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(Xc,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vh=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Go(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yp(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;Go(s,l,d),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;Go(s,l,d),a=c}}}if(Zr)throw e=qa,Zr=!1,qa=null,e}function F(e,t){var n=t[Va];n===void 0&&(n=t[Va]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,lc.forEach(function(n){n!=="selectionchange"&&(vh.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,ca("selectionchange",!1,t))}}function tu(e,t,n,r){switch(Pc(t)){case 1:var s=Rp;break;case 4:s=Mp;break;default:s=Di}n=s.bind(null,t,n,e),s=void 0,!_a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Rt(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Ic(function(){var d=a,p=Li(n),m=[];e:{var f=Zc.get(e);if(f!==void 0){var S=Mi,v=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":S=Yp;break;case"focusin":v="focus",S=ra;break;case"focusout":v="blur",S=ra;break;case"beforeblur":case"afterblur":S=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=_o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Xp;break;case Yc:case Jc:case Kc:S=Wp;break;case Xc:S=eh;break;case"scroll":S=jp;break;case"wheel":S=nh;break;case"copy":case"cut":case"paste":S=Up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Po}var y=(t&4)!==0,x=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var u=d,g;u!==null;){g=u;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,h!==null&&(b=Yn(u,h),b!=null&&y.push(nr(u,b,g)))),x)break;u=u.return}0<y.length&&(f=new S(f,v,null,n,p),m.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",f&&n!==Ma&&(v=n.relatedTarget||n.fromElement)&&(Rt(v)||v[Ze]))break e;if((S||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,S?(v=n.relatedTarget||n.toElement,S=d,v=v?Rt(v):null,v!==null&&(x=Qt(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=d),S!==v)){if(y=_o,b="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Po,b="onPointerLeave",h="onPointerEnter",u="pointer"),x=S==null?f:Zt(S),g=v==null?f:Zt(v),f=new y(b,u+"leave",S,n,p),f.target=x,f.relatedTarget=g,b=null,Rt(p)===d&&(y=new y(h,u+"enter",v,n,p),y.target=g,y.relatedTarget=x,b=y),x=b,S&&v)t:{for(y=S,h=v,u=0,g=y;g;g=Vt(g))u++;for(g=0,b=h;b;b=Vt(b))g++;for(;0<u-g;)y=Vt(y),u--;for(;0<g-u;)h=Vt(h),g--;for(;u--;){if(y===h||h!==null&&y===h.alternate)break t;y=Vt(y),h=Vt(h)}y=null}else y=null;S!==null&&Yo(m,f,S,y,!1),v!==null&&x!==null&&Yo(m,x,v,y,!0)}}e:{if(f=d?Zt(d):window,S=f.nodeName&&f.nodeName.toLowerCase(),S==="select"||S==="input"&&f.type==="file")var I=ch;else if(Bo(f))if(Qc)I=hh;else{I=dh;var A=uh}else(S=f.nodeName)&&S.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=ph);if(I&&(I=I(e,d))){Hc(m,I,n,p);break e}A&&A(e,f,d),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Oa(f,"number",f.value)}switch(A=d?Zt(d):window,e){case"focusin":(Bo(A)||A.contentEditable==="true")&&(Kt=A,Ba=d,Bn=null);break;case"focusout":Bn=Ba=Kt=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,$o(m,n,p);break;case"selectionchange":if(fh)break;case"keydown":case"keyup":$o(m,n,p)}var L;if(_i)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Jt?Bc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Wc&&n.locale!=="ko"&&(Jt||O!=="onCompositionStart"?O==="onCompositionEnd"&&Jt&&(L=Fc()):(ct=p,Ri="value"in ct?ct.value:ct.textContent,Jt=!0)),A=ss(d,O),0<A.length&&(O=new qo(O,e,null,n,p),m.push({event:O,listeners:A}),L?O.data=L:(L=Uc(n),L!==null&&(O.data=L)))),(L=sh?ah(e,n):ih(e,n))&&(d=ss(d,"onBeforeInput"),0<d.length&&(p=new qo("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=L))}eu(m,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Yn(e,n),a!=null&&r.unshift(nr(e,a,s)),a=Yn(e,t),a!=null&&r.push(nr(e,a,s))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yo(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=Yn(n,a),c!=null&&o.unshift(nr(n,c,l))):s||(c=Yn(n,a),c!=null&&o.push(nr(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Sh=/\r\n?/g,bh=/\u0000|\uFFFD/g;function Jo(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(bh,"")}function kr(e,t,n){if(t=Jo(t),Jo(e)!==t&&n)throw Error(C(425))}function as(){}var Ha=null,Qa=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,Ko=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof Ko<"u"?function(e){return Ko.resolve(null).then(e).catch(Ih)}:$a;function Ih(e){setTimeout(function(){throw e})}function da(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Xn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+wn,rr="__reactProps$"+wn,Ze="__reactContainer$"+wn,Va="__reactEvents$"+wn,Ah="__reactListeners$"+wn,Th="__reactHandles$"+wn;function Rt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xo(e);e!==null;){if(n=e[Ue])return n;e=Xo(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Ue]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Os(e){return e[rr]||null}var Ga=[],en=-1;function Tt(e){return{current:e}}function W(e){0>en||(e.current=Ga[en],Ga[en]=null,en--)}function P(e,t){en++,Ga[en]=e.current,e.current=t}var It={},le=Tt(It),me=Tt(!1),Pt=It;function gn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function is(){W(me),W(le)}function Zo(e,t,n){if(le.current!==It)throw Error(C(168));P(le,t),P(me,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(C(108,up(e)||"Unknown",s));return Q({},n,r)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Pt=le.current,P(le,e),P(me,me.current),!0}function el(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=nu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,W(me),W(le),P(le,e)):W(me),P(me,n)}var $e=null,Ns=!1,pa=!1;function ru(e){$e===null?$e=[e]:$e.push(e)}function Eh(e){Ns=!0,ru(e)}function Et(){if(!pa&&$e!==null){pa=!0;var e=0,t=_;try{var n=$e;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,Ns=!1}catch(s){throw $e!==null&&($e=$e.slice(e+1)),Lc(Oi,Et),s}finally{_=t,pa=!1}}return null}var tn=[],nn=0,ls=null,cs=0,Ae=[],Te=0,Ft=null,Ve=1,Ge="";function kt(e,t){tn[nn++]=cs,tn[nn++]=ls,ls=e,cs=t}function su(e,t,n){Ae[Te++]=Ve,Ae[Te++]=Ge,Ae[Te++]=Ft,Ft=e;var r=Ve;e=Ge;var s=32-qe(r)-1;r&=~(1<<s),n+=1;var a=32-qe(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ve=1<<32-qe(t)+s|n<<s|r,Ge=a+e}else Ve=1<<a|n<<s|r,Ge=e}function Pi(e){e.return!==null&&(kt(e,1),su(e,1,0))}function Fi(e){for(;e===ls;)ls=tn[--nn],tn[nn]=null,cs=tn[--nn],tn[nn]=null;for(;e===Ft;)Ft=Ae[--Te],Ae[Te]=null,Ge=Ae[--Te],Ae[Te]=null,Ve=Ae[--Te],Ae[Te]=null}var be=null,Se=null,B=!1,_e=null;function au(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Se=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Ve,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Se=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ja(e){if(B){var t=Se;if(t){var n=t;if(!tl(e,t)){if(Ya(e))throw Error(C(418));t=ft(n.nextSibling);var r=be;t&&tl(e,t)?au(r,n):(e.flags=e.flags&-4097|2,B=!1,be=e)}}else{if(Ya(e))throw Error(C(418));e.flags=e.flags&-4097|2,B=!1,be=e}}}function nl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Dr(e){if(e!==be)return!1;if(!B)return nl(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=Se)){if(Ya(e))throw iu(),Error(C(418));for(;t;)au(e,t),t=ft(t.nextSibling)}if(nl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=be?ft(e.stateNode.nextSibling):null;return!0}function iu(){for(var e=Se;e;)e=ft(e.nextSibling)}function mn(){Se=be=null,B=!1}function Wi(e){_e===null?_e=[e]:_e.push(e)}var Lh=rt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rl(e){var t=e._init;return t(e._payload)}function ou(e){function t(h,u){if(e){var g=h.deletions;g===null?(h.deletions=[u],h.flags|=16):g.push(u)}}function n(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function r(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function s(h,u){return h=St(h,u),h.index=0,h.sibling=null,h}function a(h,u,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<u?(h.flags|=2,u):g):(h.flags|=2,u)):(h.flags|=1048576,u)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,u,g,b){return u===null||u.tag!==6?(u=va(g,h.mode,b),u.return=h,u):(u=s(u,g),u.return=h,u)}function c(h,u,g,b){var I=g.type;return I===Yt?p(h,u,g.props.children,b,g.key):u!==null&&(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===at&&rl(I)===u.type)?(b=s(u,g.props),b.ref=Nn(h,u,g),b.return=h,b):(b=Jr(g.type,g.key,g.props,null,h.mode,b),b.ref=Nn(h,u,g),b.return=h,b)}function d(h,u,g,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=Sa(g,h.mode,b),u.return=h,u):(u=s(u,g.children||[]),u.return=h,u)}function p(h,u,g,b,I){return u===null||u.tag!==7?(u=qt(g,h.mode,b,I),u.return=h,u):(u=s(u,g),u.return=h,u)}function m(h,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=va(""+u,h.mode,g),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case wr:return g=Jr(u.type,u.key,u.props,null,h.mode,g),g.ref=Nn(h,null,u),g.return=h,g;case Gt:return u=Sa(u,h.mode,g),u.return=h,u;case at:var b=u._init;return m(h,b(u._payload),g)}if(Mn(u)||An(u))return u=qt(u,h.mode,g,null),u.return=h,u;Rr(h,u)}return null}function f(h,u,g,b){var I=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:l(h,u,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wr:return g.key===I?c(h,u,g,b):null;case Gt:return g.key===I?d(h,u,g,b):null;case at:return I=g._init,f(h,u,I(g._payload),b)}if(Mn(g)||An(g))return I!==null?null:p(h,u,g,b,null);Rr(h,g)}return null}function S(h,u,g,b,I){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(g)||null,l(u,h,""+b,I);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wr:return h=h.get(b.key===null?g:b.key)||null,c(u,h,b,I);case Gt:return h=h.get(b.key===null?g:b.key)||null,d(u,h,b,I);case at:var A=b._init;return S(h,u,g,A(b._payload),I)}if(Mn(b)||An(b))return h=h.get(g)||null,p(u,h,b,I,null);Rr(u,b)}return null}function v(h,u,g,b){for(var I=null,A=null,L=u,O=u=0,$=null;L!==null&&O<g.length;O++){L.index>O?($=L,L=null):$=L.sibling;var R=f(h,L,g[O],b);if(R===null){L===null&&(L=$);break}e&&L&&R.alternate===null&&t(h,L),u=a(R,u,O),A===null?I=R:A.sibling=R,A=R,L=$}if(O===g.length)return n(h,L),B&&kt(h,O),I;if(L===null){for(;O<g.length;O++)L=m(h,g[O],b),L!==null&&(u=a(L,u,O),A===null?I=L:A.sibling=L,A=L);return B&&kt(h,O),I}for(L=r(h,L);O<g.length;O++)$=S(L,h,O,g[O],b),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?O:$.key),u=a($,u,O),A===null?I=$:A.sibling=$,A=$);return e&&L.forEach(function(ke){return t(h,ke)}),B&&kt(h,O),I}function y(h,u,g,b){var I=An(g);if(typeof I!="function")throw Error(C(150));if(g=I.call(g),g==null)throw Error(C(151));for(var A=I=null,L=u,O=u=0,$=null,R=g.next();L!==null&&!R.done;O++,R=g.next()){L.index>O?($=L,L=null):$=L.sibling;var ke=f(h,L,R.value,b);if(ke===null){L===null&&(L=$);break}e&&L&&ke.alternate===null&&t(h,L),u=a(ke,u,O),A===null?I=ke:A.sibling=ke,A=ke,L=$}if(R.done)return n(h,L),B&&kt(h,O),I;if(L===null){for(;!R.done;O++,R=g.next())R=m(h,R.value,b),R!==null&&(u=a(R,u,O),A===null?I=R:A.sibling=R,A=R);return B&&kt(h,O),I}for(L=r(h,L);!R.done;O++,R=g.next())R=S(L,h,O,R.value,b),R!==null&&(e&&R.alternate!==null&&L.delete(R.key===null?O:R.key),u=a(R,u,O),A===null?I=R:A.sibling=R,A=R);return e&&L.forEach(function(Cn){return t(h,Cn)}),B&&kt(h,O),I}function x(h,u,g,b){if(typeof g=="object"&&g!==null&&g.type===Yt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wr:e:{for(var I=g.key,A=u;A!==null;){if(A.key===I){if(I=g.type,I===Yt){if(A.tag===7){n(h,A.sibling),u=s(A,g.props.children),u.return=h,h=u;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===at&&rl(I)===A.type){n(h,A.sibling),u=s(A,g.props),u.ref=Nn(h,A,g),u.return=h,h=u;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===Yt?(u=qt(g.props.children,h.mode,b,g.key),u.return=h,h=u):(b=Jr(g.type,g.key,g.props,null,h.mode,b),b.ref=Nn(h,u,g),b.return=h,h=b)}return o(h);case Gt:e:{for(A=g.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){n(h,u.sibling),u=s(u,g.children||[]),u.return=h,h=u;break e}else{n(h,u);break}else t(h,u);u=u.sibling}u=Sa(g,h.mode,b),u.return=h,h=u}return o(h);case at:return A=g._init,x(h,u,A(g._payload),b)}if(Mn(g))return v(h,u,g,b);if(An(g))return y(h,u,g,b);Rr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(n(h,u.sibling),u=s(u,g),u.return=h,h=u):(n(h,u),u=va(g,h.mode,b),u.return=h,h=u),o(h)):n(h,u)}return x}var fn=ou(!0),lu=ou(!1),us=Tt(null),ds=null,rn=null,Bi=null;function Ui(){Bi=rn=ds=null}function Hi(e){var t=us.current;W(us),e._currentValue=t}function Ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ds=e,Bi=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(Bi!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ds===null)throw Error(C(308));rn=e,ds.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Mt=null;function Qi(e){Mt===null?Mt=[e]:Mt.push(e)}function cu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Qi(t)):(n.next=s.next,s.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,et(e,n)}return s=r.interleaved,s===null?(t.next=t,Qi(r)):(t.next=s.next,s.next=t),r.interleaved=t,et(e,n)}function Qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}function sl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ps(e,t,n,r){var s=e.updateQueue;it=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(a!==null){var m=s.baseState;o=0,p=d=c=null,l=a;do{var f=l.lane,S=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(f=t,S=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){m=v.call(S,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(S,m,f):v,f==null)break e;m=Q({},m,f);break e;case 2:it=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else S={eventTime:S,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=S,c=m):p=p.next=S,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(p===null&&(c=m),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Bt|=o,e.lanes=o,e.memoizedState=m}}function al(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(C(191,s));s.call(r)}}}var fr={},Qe=Tt(fr),sr=Tt(fr),ar=Tt(fr);function jt(e){if(e===fr)throw Error(C(174));return e}function $i(e,t){switch(P(ar,t),P(sr,e),P(Qe,fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ka(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ka(t,e)}W(Qe),P(Qe,t)}function yn(){W(Qe),W(sr),W(ar)}function du(e){jt(ar.current);var t=jt(Qe.current),n=ka(t,e.type);t!==n&&(P(sr,e),P(Qe,n))}function Vi(e){sr.current===e&&(W(Qe),W(sr))}var U=Tt(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function Gi(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var zr=rt.ReactCurrentDispatcher,ga=rt.ReactCurrentBatchConfig,Wt=0,H=null,K=null,ee=null,gs=!1,Un=!1,ir=0,Oh=0;function ae(){throw Error(C(321))}function Yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Ji(e,t,n,r,s,a){if(Wt=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?Rh:Mh,e=n(r,s),Un){a=0;do{if(Un=!1,ir=0,25<=a)throw Error(C(301));a+=1,ee=K=null,t.updateQueue=null,zr.current=jh,e=n(r,s)}while(Un)}if(zr.current=ms,t=K!==null&&K.next!==null,Wt=0,ee=K=H=null,gs=!1,t)throw Error(C(300));return e}function Ki(){var e=ir!==0;return ir=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Ne(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(C(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function or(e,t){return typeof t=="function"?t(e):t}function ma(e){var t=Ne(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=K,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var l=o=null,c=null,d=a;do{var p=d.lane;if((Wt&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,H.lanes|=p,Bt|=p}d=d.next}while(d!==null&&d!==a);c===null?o=r:c.next=l,Fe(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,H.lanes|=a,Bt|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fa(e){var t=Ne(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Fe(a,t.memoizedState)||(ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function pu(){}function hu(e,t){var n=H,r=Ne(),s=t(),a=!Fe(r.memoizedState,s);if(a&&(r.memoizedState=s,ge=!0),r=r.queue,Xi(fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,lr(9,mu.bind(null,n,r,s,t),void 0,null),te===null)throw Error(C(349));Wt&30||gu(n,t,s)}return s}function gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&xu(e)}function fu(e,t,n){return n(function(){yu(t)&&xu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function xu(e){var t=et(e,1);t!==null&&Pe(t,e,1,-1)}function il(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=Dh.bind(null,H,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return Ne().memoizedState}function $r(e,t,n,r){var s=Be();H.flags|=e,s.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function ks(e,t,n,r){var s=Ne();r=r===void 0?null:r;var a=void 0;if(K!==null){var o=K.memoizedState;if(a=o.destroy,r!==null&&Yi(r,o.deps)){s.memoizedState=lr(t,n,a,r);return}}H.flags|=e,s.memoizedState=lr(1|t,n,a,r)}function ol(e,t){return $r(8390656,8,e,t)}function Xi(e,t){return ks(2048,8,e,t)}function Su(e,t){return ks(4,2,e,t)}function bu(e,t){return ks(4,4,e,t)}function wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,ks(4,4,wu.bind(null,t,e),n)}function Zi(){}function Iu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return Wt&21?(Fe(n,t)||(n=kc(),H.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Nh(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{_=n,ga.transition=r}}function Eu(){return Ne().memoizedState}function kh(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Ou(t,n);else if(n=cu(e,t,n,r),n!==null){var s=ue();Pe(n,e,r,s),Nu(n,t,r)}}function Dh(e,t,n){var r=vt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Ou(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(s.hasEagerState=!0,s.eagerState=l,Fe(l,o)){var c=t.interleaved;c===null?(s.next=s,Qi(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=cu(e,t,s,r),n!==null&&(s=ue(),Pe(n,e,r,s),Nu(n,t,r))}}function Lu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ou(e,t){Un=gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}var ms={readContext:Oe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Rh={readContext:Oe,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:ol,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kh.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:il,useDebugValue:Zi,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=il(!1),t=e[0];return e=Nh.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,s=Be();if(B){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),te===null)throw Error(C(349));Wt&30||gu(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,ol(fu.bind(null,r,a,e),[e]),r.flags|=2048,lr(9,mu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(B){var n=Ge,r=Ve;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mh={readContext:Oe,useCallback:Iu,useContext:Oe,useEffect:Xi,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:bu,useMemo:Au,useReducer:ma,useRef:vu,useState:function(){return ma(or)},useDebugValue:Zi,useDeferredValue:function(e){var t=Ne();return Tu(t,K.memoizedState,e)},useTransition:function(){var e=ma(or)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:hu,useId:Eu,unstable_isNewReconciler:!1},jh={readContext:Oe,useCallback:Iu,useContext:Oe,useEffect:Xi,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:bu,useMemo:Au,useReducer:fa,useRef:vu,useState:function(){return fa(or)},useDebugValue:Zi,useDeferredValue:function(e){var t=Ne();return K===null?t.memoizedState=e:Tu(t,K.memoizedState,e)},useTransition:function(){var e=fa(or)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:hu,useId:Eu,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ds={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),s=vt(e),a=Je(r,s);a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,s),t!==null&&(Pe(t,e,s,r),Qr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),s=vt(e),a=Je(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,s),t!==null&&(Pe(t,e,s,r),Qr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=vt(e),s=Je(n,r);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,r),t!==null&&(Pe(t,e,r,n),Qr(t,e,r))}};function ll(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(s,a):!0}function ku(e,t,n){var r=!1,s=It,a=t.contextType;return typeof a=="object"&&a!==null?a=Oe(a):(s=fe(t)?Pt:le.current,r=t.contextTypes,a=(r=r!=null)?gn(e,s):It),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ds,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function cl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},zi(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Oe(a):(a=fe(t)?Pt:le.current,s.context=gn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xa(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ds.enqueueReplaceState(s,s.state,null),ps(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=cp(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _h=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,ui=r),ei(e,t)},n}function Ru(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ei(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ei(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ul(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _h;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Jh.bind(null,e,t,n),t.then(e,e))}function dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var qh=rt.ReactCurrentOwner,ge=!1;function ce(e,t,n,r){t.child=e===null?lu(t,null,n,r):fn(t,e.child,n,r)}function hl(e,t,n,r,s){n=n.render;var a=t.ref;return dn(t,s),r=Ji(e,t,n,r,a,s),n=Ki(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(B&&n&&Pi(t),t.flags|=1,ce(e,t,r,s),t.child)}function gl(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!oo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Mu(e,t,a,r,s)):(e=Jr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(o,r)&&e.ref===t.ref)return tt(e,t,s)}return t.flags|=1,e=St(a,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(er(a,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,tt(e,t,s)}return ti(e,t,n,r,s)}function ju(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},P(an,ve),ve|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,P(an,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,P(an,ve),ve|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,P(an,ve),ve|=r;return ce(e,t,s,n),t.child}function _u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ti(e,t,n,r,s){var a=fe(n)?Pt:le.current;return a=gn(t,a),dn(t,s),n=Ji(e,t,n,r,a,s),r=Ki(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(B&&r&&Pi(t),t.flags|=1,ce(e,t,n,s),t.child)}function ml(e,t,n,r,s){if(fe(n)){var a=!0;os(t)}else a=!1;if(dn(t,s),t.stateNode===null)Vr(e,t),ku(t,n,r),Za(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Oe(d):(d=fe(n)?Pt:le.current,d=gn(t,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&cl(t,o,r,d),it=!1;var f=t.memoizedState;o.state=f,ps(t,r,o,s),c=t.memoizedState,l!==r||f!==c||me.current||it?(typeof p=="function"&&(Xa(t,n,p,r),c=t.memoizedState),(l=it||ll(t,n,l,r,f,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,uu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Me(t.type,l),o.props=d,m=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Oe(c):(c=fe(n)?Pt:le.current,c=gn(t,c));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||f!==c)&&cl(t,o,r,c),it=!1,f=t.memoizedState,o.state=f,ps(t,r,o,s);var v=t.memoizedState;l!==m||f!==v||me.current||it?(typeof S=="function"&&(Xa(t,n,S,r),v=t.memoizedState),(d=it||ll(t,n,d,r,f,v,c)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ni(e,t,n,r,a,s)}function ni(e,t,n,r,s,a){_u(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&el(t,n,!1),tt(e,t,a);r=t.stateNode,qh.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fn(t,e.child,null,a),t.child=fn(t,null,l,a)):ce(e,t,l,a),t.memoizedState=r.state,s&&el(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?Zo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zo(e,t.context,!1),$i(e,t.containerInfo)}function fl(e,t,n,r,s){return mn(),Wi(s),t.flags|=256,ce(e,t,n,r),t.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function si(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pu(e,t,n){var r=t.pendingProps,s=U.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),P(U,s&1),e===null)return Ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=js(o,r,0,null),e=qt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=si(n),t.memoizedState=ri,e):eo(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Ph(e,t,o,r,l,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=St(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=St(l,a):(a=qt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?si(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ri,r}return a=e.child,e=a.sibling,r=St(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eo(e,t){return t=js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&Wi(r),fn(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ph(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ya(Error(C(422))),Mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=js({mode:"visible",children:r.children},s,0,null),a=qt(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&fn(t,e.child,null,o),t.child.memoizedState=si(o),t.memoizedState=ri,a);if(!(t.mode&1))return Mr(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(C(419)),r=ya(a,r,void 0),Mr(e,t,o,r)}if(l=(o&e.childLanes)!==0,ge||l){if(r=te,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,et(e,s),Pe(r,e,s,-1))}return io(),r=ya(Error(C(421))),Mr(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Kh.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Se=ft(s.nextSibling),be=t,B=!0,_e=null,e!==null&&(Ae[Te++]=Ve,Ae[Te++]=Ge,Ae[Te++]=Ft,Ve=e.id,Ge=e.overflow,Ft=t),t=eo(t,r.children),t.flags|=4096,t)}function yl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ka(e.return,t,n)}function xa(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Fu(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(ce(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yl(e,n,t);else if(e.tag===19)yl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(P(U,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&hs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),xa(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}xa(t,!0,n,null,a);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fh(e,t,n){switch(t.tag){case 3:qu(t),mn();break;case 5:du(t);break;case 1:fe(t.type)&&os(t);break;case 4:$i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;P(us,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(P(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Pu(e,t,n):(P(U,U.current&1),e=tt(e,t,n),e!==null?e.sibling:null);P(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),P(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,ju(e,t,n)}return tt(e,t,n)}var Wu,ai,Bu,Uu;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ai=function(){};Bu=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,jt(Qe.current);var a=null;switch(n){case"input":s=Ea(e,s),r=Ea(e,r),a=[];break;case"select":s=Q({},s,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":s=Na(e,s),r=Na(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=as)}Da(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&F("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Uu=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wh(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return fe(t.type)&&is(),ie(t),null;case 3:return r=t.stateNode,yn(),W(me),W(le),Gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(hi(_e),_e=null))),ai(e,t),ie(t),null;case 5:Vi(t);var s=jt(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Bu(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ie(t),null}if(e=jt(Qe.current),Dr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ue]=t,r[rr]=a,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(s=0;s<_n.length;s++)F(_n[s],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":To(r,a),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},F("invalid",r);break;case"textarea":Lo(r,a),F("invalid",r)}Da(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&kr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&kr(r.textContent,l,e),s=["children",""+l]):Vn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":Cr(r),Eo(r,a,!0);break;case"textarea":Cr(r),Oo(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=as)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[rr]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ra(n,r),n){case"dialog":F("cancel",e),F("close",e),s=r;break;case"iframe":case"object":case"embed":F("load",e),s=r;break;case"video":case"audio":for(s=0;s<_n.length;s++)F(_n[s],e);s=r;break;case"source":F("error",e),s=r;break;case"img":case"image":case"link":F("error",e),F("load",e),s=r;break;case"details":F("toggle",e),s=r;break;case"input":To(e,r),s=Ea(e,r),F("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Q({},r,{value:void 0}),F("invalid",e);break;case"textarea":Lo(e,r),s=Na(e,r),F("invalid",e);break;default:s=r}Da(n,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?vc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yc(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gn(e,c):typeof c=="number"&&Gn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&F("scroll",e):c!=null&&Ii(e,a,c,o))}switch(n){case"input":Cr(e),Eo(e,r,!1);break;case"textarea":Cr(e),Oo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?on(e,!!r.multiple,a,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=as)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Uu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=jt(ar.current),jt(Qe.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(a=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(W(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Se!==null&&t.mode&1&&!(t.flags&128))iu(),mn(),t.flags|=98560,a=!1;else if(a=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Ue]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),a=!1}else _e!==null&&(hi(_e),_e=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):io())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return yn(),ai(e,t),e===null&&tr(t.stateNode.containerInfo),ie(t),null;case 10:return Hi(t.type._context),ie(t),null;case 17:return fe(t.type)&&is(),ie(t),null;case 19:if(W(U),a=t.memoizedState,a===null)return ie(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)kn(a,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=hs(e),o!==null){for(t.flags|=128,kn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return P(U,U.current&1|2),t.child}e=e.sibling}a.tail!==null&&G()>vn&&(t.flags|=128,r=!0,kn(a,!1),t.lanes=4194304)}else{if(!r)if(e=hs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!B)return ie(t),null}else 2*G()-a.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,kn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=G(),t.sibling=null,n=U.current,P(U,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Bh(e,t){switch(Fi(t),t.tag){case 1:return fe(t.type)&&is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),W(me),W(le),Gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vi(t),null;case 13:if(W(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(U),null;case 4:return yn(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return ao(),null;case 24:return null;default:return null}}var jr=!1,oe=!1,Uh=typeof WeakSet=="function"?WeakSet:Set,T=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){z(e,t,r)}else n.current=null}function ii(e,t,n){try{n()}catch(r){z(e,t,r)}}var xl=!1;function Hh(e,t){if(Ha=ns,e=Vc(),qi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,p=0,m=e,f=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==a||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)f=m,m=S;for(;;){if(m===e)break t;if(f===n&&++d===s&&(l=o),f===a&&++p===r&&(c=o),(S=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=S}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qa={focusedElem:e,selectionRange:n},ns=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Me(t.type,y),x);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(b){z(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=xl,xl=!1,v}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ii(t,n,a)}s=s.next}while(s!==r)}}function Rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[rr],delete t[Va],delete t[Ah],delete t[Th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function vl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=as));else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}function ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ci(e,t,n),e=e.sibling;e!==null;)ci(e,t,n),e=e.sibling}var ne=null,je=!1;function st(e,t,n){for(n=n.child;n!==null;)zu(e,t,n),n=n.sibling}function zu(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(As,n)}catch{}switch(n.tag){case 5:oe||sn(n,t);case 6:var r=ne,s=je;ne=null,st(e,t,n),ne=r,je=s,ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?da(e.parentNode,n):e.nodeType===1&&da(e,n),Xn(e)):da(ne,n.stateNode));break;case 4:r=ne,s=je,ne=n.stateNode.containerInfo,je=!0,st(e,t,n),ne=r,je=s;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ii(n,t,o),s=s.next}while(s!==r)}st(e,t,n);break;case 1:if(!oe&&(sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){z(n,t,l)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,st(e,t,n),oe=r):st(e,t,n);break;default:st(e,t,n)}}function Sl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uh),t.forEach(function(r){var s=Xh.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,je=!1;break e;case 3:ne=l.stateNode.containerInfo,je=!0;break e;case 4:ne=l.stateNode.containerInfo,je=!0;break e}l=l.return}if(ne===null)throw Error(C(160));zu(a,o,s),ne=null,je=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){z(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$u(t,e),t=t.sibling}function $u(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),We(e),r&4){try{Hn(3,e,e.return),Rs(3,e)}catch(y){z(e,e.return,y)}try{Hn(5,e,e.return)}catch(y){z(e,e.return,y)}}break;case 1:De(t,e),We(e),r&512&&n!==null&&sn(n,n.return);break;case 5:if(De(t,e),We(e),r&512&&n!==null&&sn(n,n.return),e.flags&32){var s=e.stateNode;try{Gn(s,"")}catch(y){z(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&gc(s,a),Ra(l,o);var d=Ra(l,a);for(o=0;o<c.length;o+=2){var p=c[o],m=c[o+1];p==="style"?vc(s,m):p==="dangerouslySetInnerHTML"?yc(s,m):p==="children"?Gn(s,m):Ii(s,p,m,d)}switch(l){case"input":La(s,a);break;case"textarea":mc(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?on(s,!!a.multiple,S,!1):f!==!!a.multiple&&(a.defaultValue!=null?on(s,!!a.multiple,a.defaultValue,!0):on(s,!!a.multiple,a.multiple?[]:"",!1))}s[rr]=a}catch(y){z(e,e.return,y)}}break;case 6:if(De(t,e),We(e),r&4){if(e.stateNode===null)throw Error(C(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(y){z(e,e.return,y)}}break;case 3:if(De(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(y){z(e,e.return,y)}break;case 4:De(t,e),We(e);break;case 13:De(t,e),We(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ro=G())),r&4&&Sl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||p,De(t,e),oe=d):De(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(m=T=p;T!==null;){switch(f=T,S=f.child,f.tag){case 0:case 11:case 14:case 15:Hn(4,f,f.return);break;case 1:sn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){z(r,n,y)}}break;case 5:sn(f,f.return);break;case 22:if(f.memoizedState!==null){wl(m);continue}}S!==null?(S.return=f,T=S):wl(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xc("display",o))}catch(y){z(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(y){z(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),We(e),r&4&&Sl(e);break;case 21:break;default:De(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Gn(s,""),r.flags&=-33);var a=vl(e);ci(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vl(e);li(e,l,o);break;default:throw Error(C(161))}}catch(c){z(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,n){T=e,Vu(e)}function Vu(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var s=T,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||jr;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||oe;l=jr;var d=oe;if(jr=o,(oe=c)&&!d)for(T=s;T!==null;)o=T,c=o.child,o.tag===22&&o.memoizedState!==null?Cl(s):c!==null?(c.return=o,T=c):Cl(s);for(;a!==null;)T=a,Vu(a),a=a.sibling;T=s,jr=l,oe=d}bl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,T=a):bl(e)}}function bl(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&al(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}al(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Xn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}oe||t.flags&512&&oi(t)}catch(f){z(t,t.return,f)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function wl(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Cl(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rs(4,t)}catch(c){z(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){z(t,s,c)}}var a=t.return;try{oi(t)}catch(c){z(t,a,c)}break;case 5:var o=t.return;try{oi(t)}catch(c){z(t,o,c)}}}catch(c){z(t,t.return,c)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var zh=Math.ceil,fs=rt.ReactCurrentDispatcher,to=rt.ReactCurrentOwner,Le=rt.ReactCurrentBatchConfig,j=0,te=null,Y=null,re=0,ve=0,an=Tt(0),X=0,cr=null,Bt=0,Ms=0,no=0,Qn=null,he=null,ro=0,vn=1/0,ze=null,ys=!1,ui=null,xt=null,_r=!1,ut=null,xs=0,zn=0,di=null,Gr=-1,Yr=0;function ue(){return j&6?G():Gr!==-1?Gr:Gr=G()}function vt(e){return e.mode&1?j&2&&re!==0?re&-re:Lh.transition!==null?(Yr===0&&(Yr=kc()),Yr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Pc(e.type)),e):1}function Pe(e,t,n,r){if(50<zn)throw zn=0,di=null,Error(C(185));hr(e,n,r),(!(j&2)||e!==te)&&(e===te&&(!(j&2)&&(Ms|=n),X===4&&lt(e,re)),ye(e,r),n===1&&j===0&&!(t.mode&1)&&(vn=G()+500,Ns&&Et()))}function ye(e,t){var n=e.callbackNode;Lp(e,t);var r=ts(e,e===te?re:0);if(r===0)n!==null&&Do(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Do(n),t===1)e.tag===0?Eh(Il.bind(null,e)):ru(Il.bind(null,e)),Ch(function(){!(j&6)&&Et()}),n=null;else{switch(Dc(r)){case 1:n=Oi;break;case 4:n=Oc;break;case 16:n=es;break;case 536870912:n=Nc;break;default:n=es}n=td(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(Gr=-1,Yr=0,j&6)throw Error(C(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=ts(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vs(e,r);else{t=r;var s=j;j|=2;var a=Ju();(te!==e||re!==t)&&(ze=null,vn=G()+500,_t(e,t));do try{Gh();break}catch(l){Yu(e,l)}while(!0);Ui(),fs.current=a,j=s,Y!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(s=Pa(e),s!==0&&(r=s,t=pi(e,s))),t===1)throw n=cr,_t(e,0),lt(e,r),ye(e,G()),n;if(t===6)lt(e,r);else{if(s=e.current.alternate,!(r&30)&&!$h(s)&&(t=vs(e,r),t===2&&(a=Pa(e),a!==0&&(r=a,t=pi(e,a))),t===1))throw n=cr,_t(e,0),lt(e,r),ye(e,G()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Dt(e,he,ze);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=ro+500-G(),10<t)){if(ts(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=$a(Dt.bind(null,e,he,ze),t);break}Dt(e,he,ze);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-qe(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zh(r/1960))-r,10<r){e.timeoutHandle=$a(Dt.bind(null,e,he,ze),r);break}Dt(e,he,ze);break;case 5:Dt(e,he,ze);break;default:throw Error(C(329))}}}return ye(e,G()),e.callbackNode===n?Gu.bind(null,e):null}function pi(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=vs(e,t),e!==2&&(t=he,he=n,t!==null&&hi(t)),e}function hi(e){he===null?he=e:he.push.apply(he,e)}function $h(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Fe(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~no,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Il(e){if(j&6)throw Error(C(327));pn();var t=ts(e,0);if(!(t&1))return ye(e,G()),null;var n=vs(e,t);if(e.tag!==0&&n===2){var r=Pa(e);r!==0&&(t=r,n=pi(e,r))}if(n===1)throw n=cr,_t(e,0),lt(e,t),ye(e,G()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,he,ze),ye(e,G()),null}function so(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(vn=G()+500,Ns&&Et())}}function Ut(e){ut!==null&&ut.tag===0&&!(j&6)&&pn();var t=j;j|=1;var n=Le.transition,r=_;try{if(Le.transition=null,_=1,e)return e()}finally{_=r,Le.transition=n,j=t,!(j&6)&&Et()}}function ao(){ve=an.current,W(an)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wh(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Fi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&is();break;case 3:yn(),W(me),W(le),Gi();break;case 5:Vi(r);break;case 4:yn();break;case 13:W(U);break;case 19:W(U);break;case 10:Hi(r.type._context);break;case 22:case 23:ao()}n=n.return}if(te=e,Y=e=St(e.current,null),re=ve=t,X=0,cr=null,no=Ms=Bt=0,he=Qn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}Mt=null}return e}function Yu(e,t){do{var n=Y;try{if(Ui(),zr.current=ms,gs){for(var r=H.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}gs=!1}if(Wt=0,ee=K=H=null,Un=!1,ir=0,to.current=null,n===null||n.return===null){X=1,cr=t,Y=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=dl(o);if(S!==null){S.flags&=-257,pl(S,o,l,a,t),S.mode&1&&ul(a,d,t),t=S,c=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(c),t.updateQueue=y}else v.add(c);break e}else{if(!(t&1)){ul(a,d,t),io();break e}c=Error(C(426))}}else if(B&&l.mode&1){var x=dl(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),pl(x,o,l,a,t),Wi(xn(c,l));break e}}a=c=xn(c,l),X!==4&&(X=2),Qn===null?Qn=[a]:Qn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Du(a,c,t);sl(a,h);break e;case 1:l=c;var u=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xt===null||!xt.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Ru(a,l,t);sl(a,b);break e}}a=a.return}while(a!==null)}Xu(n)}catch(I){t=I,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ju(){var e=fs.current;return fs.current=ms,e===null?ms:e}function io(){(X===0||X===3||X===2)&&(X=4),te===null||!(Bt&268435455)&&!(Ms&268435455)||lt(te,re)}function vs(e,t){var n=j;j|=2;var r=Ju();(te!==e||re!==t)&&(ze=null,_t(e,t));do try{Vh();break}catch(s){Yu(e,s)}while(!0);if(Ui(),j=n,fs.current=r,Y!==null)throw Error(C(261));return te=null,re=0,X}function Vh(){for(;Y!==null;)Ku(Y)}function Gh(){for(;Y!==null&&!vp();)Ku(Y)}function Ku(e){var t=ed(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Xu(e):Y=t,to.current=null}function Xu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bh(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Wh(n,t,ve),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Dt(e,t,n){var r=_,s=Le.transition;try{Le.transition=null,_=1,Yh(e,t,n,r)}finally{Le.transition=s,_=r}return null}function Yh(e,t,n,r){do pn();while(ut!==null);if(j&6)throw Error(C(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Op(e,a),e===te&&(Y=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,td(es,function(){return pn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Le.transition,Le.transition=null;var o=_;_=1;var l=j;j|=4,to.current=null,Hh(e,n),$u(n,e),mh(Qa),ns=!!Ha,Qa=Ha=null,e.current=n,Qh(n),Sp(),j=l,_=o,Le.transition=a}else e.current=n;if(_r&&(_r=!1,ut=e,xs=s),a=e.pendingLanes,a===0&&(xt=null),Cp(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ys)throw ys=!1,e=ui,ui=null,e;return xs&1&&e.tag!==0&&pn(),a=e.pendingLanes,a&1?e===di?zn++:(zn=0,di=e):zn=0,Et(),null}function pn(){if(ut!==null){var e=Dc(xs),t=Le.transition,n=_;try{if(Le.transition=null,_=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,xs=0,j&6)throw Error(C(331));var s=j;for(j|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(T=d;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Hn(8,p,a)}var m=p.child;if(m!==null)m.return=p,T=m;else for(;T!==null;){p=T;var f=p.sibling,S=p.return;if(Hu(p),p===d){T=null;break}if(f!==null){f.return=S,T=f;break}T=S}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Hn(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var u=e.current;for(T=u;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else e:for(o=u;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rs(9,l)}}catch(I){z(l,l.return,I)}if(l===o){T=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,T=b;break e}T=l.return}}if(j=s,Et(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(As,e)}catch{}r=!0}return r}finally{_=n,Le.transition=t}}return!1}function Al(e,t,n){t=xn(n,t),t=Du(e,t,1),e=yt(e,t,1),t=ue(),e!==null&&(hr(e,1,t),ye(e,t))}function z(e,t,n){if(e.tag===3)Al(e,e,n);else for(;t!==null;){if(t.tag===3){Al(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=Ru(t,e,1),t=yt(t,e,1),e=ue(),t!==null&&(hr(t,1,e),ye(t,e));break}}t=t.return}}function Jh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>G()-ro?_t(e,0):no|=n),ye(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):t=1);var n=ue();e=et(e,t),e!==null&&(hr(e,t,n),ye(e,n))}function Kh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function Xh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Zu(e,n)}var ed;ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Fh(e,t,n);ge=!!(e.flags&131072)}else ge=!1,B&&t.flags&1048576&&su(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var s=gn(t,le.current);dn(t,n),s=Ji(null,t,r,e,s,n);var a=Ki();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(a=!0,os(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zi(t),s.updater=Ds,t.stateNode=s,s._reactInternals=t,Za(t,r,e,n),t=ni(null,t,r,!0,a,n)):(t.tag=0,B&&a&&Pi(t),ce(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=eg(r),e=Me(r,e),s){case 0:t=ti(null,t,r,e,n);break e;case 1:t=ml(null,t,r,e,n);break e;case 11:t=hl(null,t,r,e,n);break e;case 14:t=gl(null,t,r,Me(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),ti(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),ml(e,t,r,s,n);case 3:e:{if(qu(t),e===null)throw Error(C(387));r=t.pendingProps,a=t.memoizedState,s=a.element,uu(e,t),ps(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=xn(Error(C(423)),t),t=fl(e,t,r,n,s);break e}else if(r!==s){s=xn(Error(C(424)),t),t=fl(e,t,r,n,s);break e}else for(Se=ft(t.stateNode.containerInfo.firstChild),be=t,B=!0,_e=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===s){t=tt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&Ja(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,za(r,s)?o=null:a!==null&&za(r,a)&&(t.flags|=32),_u(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Ja(t),null;case 13:return Pu(e,t,n);case 4:return $i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),hl(e,t,r,s,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,P(us,r._currentValue),r._currentValue=o,a!==null)if(Fe(a.value,o)){if(a.children===s.children&&!me.current){t=tt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Je(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ka(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ka(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ce(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dn(t,n),s=Oe(s),r=r(s),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,s=Me(r,t.pendingProps),s=Me(r.type,s),gl(e,t,r,s,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Vr(e,t),t.tag=1,fe(r)?(e=!0,os(t)):e=!1,dn(t,n),ku(t,r,s),Za(t,r,s,n),ni(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return ju(e,t,n)}throw Error(C(156,t.tag))};function td(e,t){return Lc(e,t)}function Zh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Zh(e,t,n,r)}function oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eg(e){if(typeof e=="function")return oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ti)return 11;if(e===Ei)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jr(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")oo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return qt(n.children,s,a,t);case Ai:o=8,s|=8;break;case Ca:return e=Ee(12,n,t,s|2),e.elementType=Ca,e.lanes=a,e;case Ia:return e=Ee(13,n,t,s),e.elementType=Ia,e.lanes=a,e;case Aa:return e=Ee(19,n,t,s),e.elementType=Aa,e.lanes=a,e;case dc:return js(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cc:o=10;break e;case uc:o=9;break e;case Ti:o=11;break e;case Ei:o=14;break e;case at:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function qt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function js(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=dc,e.lanes=n,e.stateNode={isHidden:!1},e}function va(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tg(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lo(e,t,n,r,s,a,o,l,c){return e=new tg(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ee(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(a),e}function ng(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nd(e){if(!e)return It;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(fe(n))return nu(e,n,t)}return t}function rd(e,t,n,r,s,a,o,l,c){return e=lo(n,r,!0,e,s,a,o,l,c),e.context=nd(null),n=e.current,r=ue(),s=vt(n),a=Je(r,s),a.callback=t??null,yt(n,a,s),e.current.lanes=s,hr(e,s,r),ye(e,r),e}function _s(e,t,n,r){var s=t.current,a=ue(),o=vt(s);return n=nd(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(s,t,o),e!==null&&(Pe(e,s,o,a),Qr(e,s,o)),o}function Ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function co(e,t){Tl(e,t),(e=e.alternate)&&Tl(e,t)}function rg(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function uo(e){this._internalRoot=e}qs.prototype.render=uo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));_s(e,t,null,null)};qs.prototype.unmount=uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){_s(null,e,null,null)}),t[Ze]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&qc(e)}};function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function El(){}function sg(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var d=Ss(o);a.call(d)}}var o=rd(t,r,e,0,null,!1,!1,"",El);return e._reactRootContainer=o,e[Ze]=o.current,tr(e.nodeType===8?e.parentNode:e),Ut(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Ss(c);l.call(d)}}var c=lo(e,0,!1,null,null,!1,!1,"",El);return e._reactRootContainer=c,e[Ze]=c.current,tr(e.nodeType===8?e.parentNode:e),Ut(function(){_s(t,c,n,r)}),c}function Fs(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=Ss(o);l.call(c)}}_s(t,o,e,s)}else o=sg(n,t,e,s,r);return Ss(o)}Rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Ni(t,n|1),ye(t,G()),!(j&6)&&(vn=G()+500,Et()))}break;case 13:Ut(function(){var r=et(e,1);if(r!==null){var s=ue();Pe(r,e,1,s)}}),co(e,1)}};ki=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ue();Pe(t,e,134217728,n)}co(e,134217728)}};Mc=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=ue();Pe(n,e,t,r)}co(e,t)}};jc=function(){return _};_c=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};ja=function(e,t,n){switch(t){case"input":if(La(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Os(r);if(!s)throw Error(C(90));hc(r),La(r,s)}}}break;case"textarea":mc(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};wc=so;Cc=Ut;var ag={usingClientEntryPoint:!1,Events:[mr,Zt,Os,Sc,bc,so]},Dn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ig={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{As=qr.inject(ig),He=qr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ag;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!po(t))throw Error(C(200));return ng(e,t,null,n)};Ce.createRoot=function(e,t){if(!po(e))throw Error(C(299));var n=!1,r="",s=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=lo(e,1,!1,null,null,n,!1,r,s),e[Ze]=t.current,tr(e.nodeType===8?e.parentNode:e),new uo(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ut(e)};Ce.hydrate=function(e,t,n){if(!Ps(t))throw Error(C(200));return Fs(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!po(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=sd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=rd(t,null,e,1,n??null,s,!1,a,o),e[Ze]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new qs(t)};Ce.render=function(e,t,n){if(!Ps(t))throw Error(C(200));return Fs(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(C(40));return e._reactRootContainer?(Ut(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ce.unstable_batchedUpdates=so;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Fs(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),ac.exports=Ce;var og=ac.exports,id,Ll=og;id=Ll.createRoot,Ll.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(null,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Ol="popstate";function lg(e){e===void 0&&(e={});function t(s,a){let{pathname:o="/",search:l="",hash:c=""}=zt(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),gi("",{pathname:o,search:l,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){let o=s.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let c=s.location.href,d=c.indexOf("#");l=d===-1?c:c.slice(0,d)}return l+"#"+(typeof a=="string"?a:bs(a))}function r(s,a){ho(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return ug(t,n,r,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ho(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cg(){return Math.random().toString(36).substr(2,8)}function Nl(e,t){return{usr:e.state,key:e.key,idx:t}}function gi(e,t,n,r){return n===void 0&&(n=null),ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zt(t):t,{state:n,key:t&&t.key||r||cg()})}function bs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ug(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,l=dt.Pop,c=null,d=p();d==null&&(d=0,o.replaceState(ur({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=dt.Pop;let x=p(),h=x==null?null:x-d;d=x,c&&c({action:l,location:y.location,delta:h})}function f(x,h){l=dt.Push;let u=gi(y.location,x,h);n&&n(u,x),d=p()+1;let g=Nl(u,d),b=y.createHref(u);try{o.pushState(g,"",b)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;s.location.assign(b)}a&&c&&c({action:l,location:y.location,delta:1})}function S(x,h){l=dt.Replace;let u=gi(y.location,x,h);n&&n(u,x),d=p();let g=Nl(u,d),b=y.createHref(u);o.replaceState(g,"",b),a&&c&&c({action:l,location:y.location,delta:0})}function v(x){let h=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof x=="string"?x:bs(x);return u=u.replace(/ $/,"%20"),J(h,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,h)}let y={get action(){return l},get location(){return e(s,o)},listen(x){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Ol,m),c=x,()=>{s.removeEventListener(Ol,m),c=null}},createHref(x){return t(s,x)},createURL:v,encodeLocation(x){let h=v(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:S,go(x){return o.go(x)}};return y}var kl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kl||(kl={}));function dg(e,t,n){return n===void 0&&(n="/"),pg(e,t,n)}function pg(e,t,n,r){let s=typeof t=="string"?zt(t):t,a=go(s.pathname||"/",n);if(a==null)return null;let o=od(e);hg(o);let l=null,c=Ag(a);for(let d=0;l==null&&d<o.length;++d)l=wg(o[d],c);return l}function od(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=bt([r,c.relativePath]),p=n.concat(c);a.children&&a.children.length>0&&(J(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),od(a.children,t,p,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Sg(d,a.index),routesMeta:p})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of ld(a.path))s(a,o,c)}),t}function ld(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=ld(r.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function hg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gg=/^:[\w-]+$/,mg=3,fg=2,yg=1,xg=10,vg=-2,Dl=e=>e==="*";function Sg(e,t){let n=e.split("/"),r=n.length;return n.some(Dl)&&(r+=vg),t&&(r+=fg),n.filter(s=>!Dl(s)).reduce((s,a)=>s+(gg.test(a)?mg:a===""?yg:xg),r)}function bg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function wg(e,t,n){let{routesMeta:r}=e,s={},a="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",m=Cg({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),f=c.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:bt([a,m.pathname]),pathnameBase:Lg(bt([a,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(a=bt([a,m.pathnameBase]))}return o}function Cg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ig(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:f,isOptional:S}=p;if(f==="*"){let y=l[m]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[m];return S&&!v?d[f]=void 0:d[f]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function Ig(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ho(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Ag(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ho(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function go(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Tg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?zt(e):e,a;return n?(n=dd(n),n.startsWith("/")?a=Rl(n.substring(1),"/"):a=Rl(n,t)):a=t,{pathname:a,search:Og(r),hash:Ng(s)}}function Rl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ba(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cd(e,t){let n=Eg(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ud(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=zt(e):(s=ur({},e),J(!s.pathname||!s.pathname.includes("?"),ba("?","pathname","search",s)),J(!s.pathname||!s.pathname.includes("#"),ba("#","pathname","hash",s)),J(!s.search||!s.search.includes("#"),ba("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),m-=1;s.pathname=f.join("/")}l=m>=0?t[m]:"/"}let c=Tg(s,l),d=o&&o!=="/"&&o.endsWith("/"),p=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const dd=e=>e.replace(/\/\/+/g,"/"),bt=e=>dd(e.join("/")),Lg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Og=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ng=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pd=["post","put","patch","delete"];new Set(pd);const Dg=["get",...pd];new Set(Dg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(null,arguments)}const mo=w.createContext(null),Rg=w.createContext(null),$t=w.createContext(null),Ws=w.createContext(null),Lt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),hd=w.createContext(null);function Mg(e,t){let{relative:n}=t===void 0?{}:t;yr()||J(!1);let{basename:r,navigator:s}=w.useContext($t),{hash:a,pathname:o,search:l}=yd(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:bt([r,o])),s.createHref({pathname:c,search:l,hash:a})}function yr(){return w.useContext(Ws)!=null}function xr(){return yr()||J(!1),w.useContext(Ws).location}function gd(e){w.useContext($t).static||w.useLayoutEffect(e)}function md(){let{isDataRoute:e}=w.useContext(Lt);return e?Vg():jg()}function jg(){yr()||J(!1);let e=w.useContext(mo),{basename:t,future:n,navigator:r}=w.useContext($t),{matches:s}=w.useContext(Lt),{pathname:a}=xr(),o=JSON.stringify(cd(s,n.v7_relativeSplatPath)),l=w.useRef(!1);return gd(()=>{l.current=!0}),w.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=ud(d,JSON.parse(o),a,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:bt([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,o,a,e])}function fd(){let{matches:e}=w.useContext(Lt),t=e[e.length-1];return t?t.params:{}}function yd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext($t),{matches:s}=w.useContext(Lt),{pathname:a}=xr(),o=JSON.stringify(cd(s,r.v7_relativeSplatPath));return w.useMemo(()=>ud(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function _g(e,t){return qg(e,t)}function qg(e,t,n,r){yr()||J(!1);let{navigator:s}=w.useContext($t),{matches:a}=w.useContext(Lt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=xr(),p;if(t){var m;let x=typeof t=="string"?zt(t):t;c==="/"||(m=x.pathname)!=null&&m.startsWith(c)||J(!1),p=x}else p=d;let f=p.pathname||"/",S=f;if(c!=="/"){let x=c.replace(/^\//,"").split("/");S="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=dg(e,{pathname:S}),y=Ug(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:bt([c,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:bt([c,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,r);return t&&y?w.createElement(Ws.Provider,{value:{location:dr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:dt.Pop}},y):y}function Pg(){let e=$g(),t=kg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:s},n):null,null)}const Fg=w.createElement(Pg,null);class Wg extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Lt.Provider,{value:this.props.routeContext},w.createElement(hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bg(e){let{routeContext:t,match:n,children:r}=e,s=w.useContext(mo);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Lt.Provider,{value:t},r)}function Ug(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||J(!1),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:f,errors:S}=n,v=m.route.loader&&f[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,m,f)=>{let S,v=!1,y=null,x=null;n&&(S=l&&m.route.id?l[m.route.id]:void 0,y=m.route.errorElement||Fg,c&&(d<0&&f===0?(Gg("route-fallback"),v=!0,x=null):d===f&&(v=!0,x=m.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,f+1)),u=()=>{let g;return S?g=y:v?g=x:m.route.Component?g=w.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=p,w.createElement(Bg,{match:m,routeContext:{outlet:p,matches:h,isDataRoute:n!=null},children:g})};return n&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?w.createElement(Wg,{location:n.location,revalidation:n.revalidation,component:y,error:S,children:u(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):u()},null)}var xd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xd||{}),vd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vd||{});function Hg(e){let t=w.useContext(mo);return t||J(!1),t}function Qg(e){let t=w.useContext(Rg);return t||J(!1),t}function zg(e){let t=w.useContext(Lt);return t||J(!1),t}function Sd(e){let t=zg(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function $g(){var e;let t=w.useContext(hd),n=Qg(),r=Sd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Vg(){let{router:e}=Hg(xd.UseNavigateStable),t=Sd(vd.UseNavigateStable),n=w.useRef(!1);return gd(()=>{n.current=!0}),w.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,dr({fromRouteId:t},a)))},[e,t])}const Ml={};function Gg(e,t,n){Ml[e]||(Ml[e]=!0)}function Yg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Re(e){J(!1)}function Jg(e){let{basename:t="/",children:n=null,location:r,navigationType:s=dt.Pop,navigator:a,static:o=!1,future:l}=e;yr()&&J(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:a,static:o,future:dr({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof r=="string"&&(r=zt(r));let{pathname:p="/",search:m="",hash:f="",state:S=null,key:v="default"}=r,y=w.useMemo(()=>{let x=go(p,c);return x==null?null:{location:{pathname:x,search:m,hash:f,state:S,key:v},navigationType:s}},[c,p,m,f,S,v,s]);return y==null?null:w.createElement($t.Provider,{value:d},w.createElement(Ws.Provider,{children:n,value:y}))}function Kg(e){let{children:t,location:n}=e;return _g(mi(t),n)}new Promise(()=>{});function mi(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,s)=>{if(!w.isValidElement(r))return;let a=[...t,s];if(r.type===w.Fragment){n.push.apply(n,mi(r.props.children,a));return}r.type!==Re&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mi(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(null,arguments)}function Xg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Zg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function em(e,t){return e.button===0&&(!t||t==="_self")&&!Zg(e)}const tm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nm="6";try{window.__reactRouterVersion=nm}catch{}const rm="startTransition",jl=Jd[rm];function sm(e){let{basename:t,children:n,future:r,window:s}=e,a=w.useRef();a.current==null&&(a.current=lg({window:s,v5Compat:!0}));let o=a.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},p=w.useCallback(m=>{d&&jl?jl(()=>c(m)):c(m)},[c,d]);return w.useLayoutEffect(()=>o.listen(p),[o,p]),w.useEffect(()=>Yg(r),[r]),w.createElement(Jg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const am=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q=w.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:p,viewTransition:m}=t,f=Xg(t,tm),{basename:S}=w.useContext($t),v,y=!1;if(typeof d=="string"&&im.test(d)&&(v=d,am))try{let g=new URL(window.location.href),b=d.startsWith("//")?new URL(g.protocol+d):new URL(d),I=go(b.pathname,S);b.origin===g.origin&&I!=null?d=I+b.search+b.hash:y=!0}catch{}let x=Mg(d,{relative:s}),h=om(d,{replace:o,state:l,target:c,preventScrollReset:p,relative:s,viewTransition:m});function u(g){r&&r(g),g.defaultPrevented||h(g)}return w.createElement("a",fi({},f,{href:v||x,onClick:y||a?r:u,ref:n,target:c}))});var _l;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_l||(_l={}));var ql;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ql||(ql={}));function om(e,t){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=md(),d=xr(),p=yd(e,{relative:o});return w.useCallback(m=>{if(em(m,n)){m.preventDefault();let f=r!==void 0?r:bs(d)===bs(p);c(e,{replace:f,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,p,r,s,n,e,a,o,l])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:o,...l},c)=>w.createElement("svg",{ref:c,...cm,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bd("lucide",s),...l},[...o.map(([d,p])=>w.createElement(d,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const n=w.forwardRef(({className:r,...s},a)=>w.createElement(um,{ref:a,iconNode:t,className:bd(`lucide-${lm(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=M("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=M("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=M("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=M("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=M("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=M("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=M("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=M("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=M("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=M("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=M("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=M("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=M("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=M("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=M("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=M("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=M("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=M("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=M("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=M("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=M("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=M("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=M("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=M("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=M("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=M("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=M("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=M("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=M("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=M("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=M("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=M("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ul="sfda_progress",Cm=100,Im=150,Am=20,Pr={completedLessons:[],completedChallenges:[],quizScores:{},challengeSubmissions:{},xp:0,streakDays:0,lastVisit:new Date().toISOString(),badges:[]};function zs(){const[e,t]=w.useState(()=>{try{const d=localStorage.getItem(Ul);return d?{...Pr,...JSON.parse(d)}:Pr}catch{return Pr}});w.useEffect(()=>{localStorage.setItem(Ul,JSON.stringify(e))},[e]);const n=w.useCallback(d=>{t(p=>{if(p.completedLessons.includes(d))return p;const m=p.xp+Cm,f=[...p.badges];return p.completedLessons.length===0&&f.push("first-lesson"),p.completedLessons.length===4&&f.push("five-lessons"),p.completedLessons.length===9&&f.push("ten-lessons"),{...p,completedLessons:[...p.completedLessons,d],xp:m,badges:f}})},[]),r=w.useCallback((d,p)=>{t(m=>{const f=!m.completedChallenges.includes(d),S=[...m.badges];return f&&m.completedChallenges.length===0&&S.push("first-challenge"),f&&m.completedChallenges.length===4&&S.push("five-challenges"),{...m,completedChallenges:f?[...m.completedChallenges,d]:m.completedChallenges,challengeSubmissions:{...m.challengeSubmissions,[d]:p},xp:f?m.xp+Im:m.xp,badges:S}})},[]),s=w.useCallback((d,p,m)=>{t(f=>({...f,quizScores:{...f.quizScores,[d]:Math.round(p/m*100)},xp:f.xp+p*Am}))},[]),a=w.useCallback(d=>e.completedLessons.includes(d),[e.completedLessons]),o=w.useCallback(d=>e.completedChallenges.includes(d),[e.completedChallenges]),l=()=>e.xp<500?{level:1,title:"Trailblazer Recruit",next:500}:e.xp<1500?{level:2,title:"Apex Apprentice",next:1500}:e.xp<3e3?{level:3,title:"SOQL Scholar",next:3e3}:e.xp<5e3?{level:4,title:"DML Developer",next:5e3}:e.xp<8e3?{level:5,title:"Trigger Tamer",next:8e3}:{level:6,title:"Platform Champion",next:1/0},c=w.useCallback(()=>{t(Pr)},[]);return{progress:e,completeLesson:n,completeChallenge:r,recordQuizScore:s,isLessonCompleted:a,isChallengeCompleted:o,getLevel:l,resetProgress:c}}const Hl=[{to:"/",label:"Home",icon:fm},{to:"/dashboard",label:"Dashboard",icon:ym},{to:"/apex",label:"Apex",icon:xe},{to:"/soql",label:"SOQL",icon:Qs},{to:"/debug",label:"Debug",icon:Us},{to:"/missions",label:"Missions",icon:nt}];function Tm(){const[e,t]=w.useState(!1),n=xr(),{progress:r,getLevel:s}=zs(),{level:a,title:o}=s();return i.jsxs("header",{className:"sticky top-0 z-50 glass border-b border-gray-200/60 shadow-sm",children:[i.jsx("div",{className:"max-w-6xl mx-auto px-4",children:i.jsxs("div",{className:"flex items-center h-16 gap-4",children:[i.jsxs(q,{to:"/",className:"flex items-center gap-2.5 shrink-0 group",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-sf-blue flex items-center justify-center group-hover:bg-blue-700 transition-colors",children:i.jsx(xe,{className:"w-4 h-4 text-white"})}),i.jsx("span",{className:"font-bold text-gray-900 text-sm hidden sm:block",children:"SFDC Simplified"})]}),i.jsx("nav",{className:"hidden md:flex items-center gap-1 ml-2",children:Hl.map(({to:l,label:c})=>i.jsx(q,{to:l,className:n.pathname===l?"nav-link-active":"nav-link-inactive",children:c},l))}),i.jsx("div",{className:"flex-1"}),i.jsxs(q,{to:"/dashboard",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-sf-navy to-sf-blue text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity",children:[i.jsx(pt,{className:"w-3.5 h-3.5 text-yellow-300"}),i.jsxs("span",{children:[r.xp," XP"]}),i.jsx("span",{className:"opacity-60",children:"·"}),i.jsxs("span",{children:["Lv ",a]})]}),i.jsx(q,{to:"/about",className:"btn-ghost hidden md:inline-flex p-2",children:i.jsx(Id,{className:"w-4 h-4"})}),i.jsx("button",{onClick:()=>t(!e),className:"md:hidden btn-ghost p-2",children:e?i.jsx(wm,{className:"w-5 h-5"}):i.jsx(vm,{className:"w-5 h-5"})})]})}),e&&i.jsxs("div",{className:"md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1",children:[Hl.map(({to:l,label:c,icon:d})=>i.jsxs(q,{to:l,onClick:()=>t(!1),className:`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${n.pathname===l?"bg-blue-50 text-sf-blue":"text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(d,{className:"w-4 h-4"}),c]},l)),i.jsx("div",{className:"pt-2 border-t border-gray-100 mt-2",children:i.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 text-xs text-gray-500",children:[i.jsx(pt,{className:"w-3.5 h-3.5 text-yellow-500"}),i.jsxs("span",{className:"font-semibold text-gray-700",children:[r.xp," XP"]}),i.jsx("span",{children:"·"}),i.jsxs("span",{children:["Level ",a,": ",o]})]})})]})]})}function Em(){return i.jsx("footer",{className:"bg-white border-t border-gray-100 mt-auto",children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 py-8",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue flex items-center justify-center",children:i.jsx(xe,{className:"w-3.5 h-3.5 text-white"})}),i.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:"SFDC Simplified"})]}),i.jsxs("div",{className:"flex items-center gap-6 text-xs text-gray-500",children:[i.jsx(q,{to:"/about",className:"hover:text-sf-blue transition-colors",children:"About"}),i.jsx(q,{to:"/apex",className:"hover:text-sf-blue transition-colors",children:"Lessons"}),i.jsx(q,{to:"/missions",className:"hover:text-sf-blue transition-colors",children:"Missions"}),i.jsx("a",{href:"https://developer.salesforce.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-sf-blue transition-colors",children:"Salesforce Docs"})]}),i.jsx("p",{className:"text-xs text-gray-400",children:"Not affiliated with Salesforce, Inc."})]})})})}const Lm=[{icon:i.jsx(nt,{className:"w-5 h-5"}),title:"10 Structured Lessons",desc:"From variables to DML — every concept explained with real examples",color:"bg-blue-500"},{icon:i.jsx(xe,{className:"w-5 h-5"}),title:"Hands-On Challenges",desc:"Write code, get instant feedback, and learn from detailed solutions",color:"bg-violet-500"},{icon:i.jsx(Qs,{className:"w-5 h-5"}),title:"SOQL Explorer",desc:"Query fictional Salesforce orgs and understand data relationships",color:"bg-teal-500"},{icon:i.jsx(Us,{className:"w-5 h-5"}),title:"Debug Lab",desc:"Find and fix real bugs in broken code — governor limits and all",color:"bg-orange-500"},{icon:i.jsx(pt,{className:"w-5 h-5"}),title:"XP & Badges",desc:"Track your progress and earn badges as you level up",color:"bg-yellow-500"},{icon:i.jsx(yo,{className:"w-5 h-5"}),title:"Project Missions",desc:"Apply what you know to real-world Salesforce business scenarios",color:"bg-pink-500"}],Om=["Apex Variables & Data Types","Strings & String Methods","Conditionals & Boolean Logic","Loops: For, While, Do-While","Lists (Apex Arrays)","Sets & Uniqueness","Maps: Key-Value Storage","Classes & Object-Oriented Apex","SOQL: Query Your Data","DML: Create, Update, Delete Records"],Nm=[{value:"10",label:"Lessons",sub:"beginner to confident"},{value:"10",label:"Challenges",sub:"with instant feedback"},{value:"5",label:"Debug Scenarios",sub:"real bugs to fix"},{value:"4",label:"Missions",sub:"real-world projects"}],km=[{num:1,label:"Understand",desc:"Read a clear explanation"},{num:2,label:"Example",desc:"See real working code"},{num:3,label:"Try It",desc:"Write code yourself"},{num:4,label:"Hint",desc:"Unstuck in one tap"},{num:5,label:"Feedback",desc:"Know why it passed or failed"},{num:6,label:"Solution",desc:"See the full solution"},{num:7,label:"Apply",desc:"Use it in a mission"}];function Dm(){return i.jsxs("div",{className:"min-h-screen",children:[i.jsxs("section",{className:"gradient-hero text-white py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 25% 50%, #fff 1px, transparent 0), radial-gradient(circle at 75% 20%, #fff 1px, transparent 0)",backgroundSize:"60px 60px"}}),i.jsxs("div",{className:"max-w-4xl mx-auto text-center relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm",children:[i.jsx(Ad,{className:"w-3.5 h-3.5 text-yellow-300"}),"Free · No signup required · Start in 30 seconds"]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6",children:["Learn Salesforce",i.jsx("br",{}),i.jsx("span",{className:"text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(90deg, #FFC849, #FF5D2D)"},children:"Development"})]}),i.jsx("p",{className:"text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed",children:"The interactive learning platform built for absolute beginners. Master Apex, SOQL, and DML through guided lessons, real code challenges, and hands-on projects."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[i.jsxs(q,{to:"/apex",className:"inline-flex items-center justify-center gap-2 bg-white text-sf-blue font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Learning Free ",i.jsx($n,{className:"w-4 h-4"})]}),i.jsx(q,{to:"/dashboard",className:"inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors text-base backdrop-blur-sm",children:"View Dashboard"})]})]})]}),i.jsx("section",{className:"bg-sf-navy text-white py-8 px-4",children:i.jsx("div",{className:"max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",children:Nm.map(e=>i.jsxs("div",{children:[i.jsx("div",{className:"text-3xl font-extrabold text-yellow-400",children:e.value}),i.jsx("div",{className:"font-semibold text-sm mt-0.5",children:e.label}),i.jsx("div",{className:"text-xs text-blue-300 mt-0.5",children:e.sub})]},e.label))})}),i.jsx("section",{className:"py-16 px-4 bg-white",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"section-title",children:"The 7-Step Learning Cycle"}),i.jsx("p",{className:"section-subtitle",children:"Every lesson follows the same proven structure — so you never feel lost"})]}),i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3",children:km.map(e=>i.jsxs("div",{className:"flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group",children:[i.jsx("div",{className:"w-9 h-9 rounded-full bg-sf-blue text-white text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm",children:e.num}),i.jsx("div",{className:"font-semibold text-sm text-gray-900",children:e.label}),i.jsx("div",{className:"text-xs text-gray-500 leading-tight",children:e.desc})]},e.num))})]})}),i.jsx("section",{className:"py-16 px-4 bg-gray-50",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"section-title",children:"Everything You Need to Succeed"}),i.jsx("p",{className:"section-subtitle",children:"From your first variable to deploying real Apex — all in one place"})]}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Lm.map(e=>i.jsxs("div",{className:"card hover:border-sf-blue/20 group",children:[i.jsx("div",{className:`w-10 h-10 ${e.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-sm`,children:e.icon}),i.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:e.title}),i.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:e.desc})]},e.title))})]})}),i.jsx("section",{className:"py-16 px-4 bg-white",children:i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-start",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"section-title mb-2",children:"Full Apex Curriculum"}),i.jsx("p",{className:"section-subtitle mb-8",children:"10 lessons carefully sequenced from zero to job-ready Apex developer"}),i.jsxs(q,{to:"/apex",className:"btn-primary",children:["Browse All Lessons ",i.jsx($n,{className:"w-4 h-4"})]})]}),i.jsx("div",{className:"space-y-2",children:Om.map((e,t)=>i.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue/10 text-sf-blue text-xs font-bold flex items-center justify-center shrink-0",children:String(t+1).padStart(2,"0")}),i.jsx("span",{className:"text-sm font-medium text-gray-700 group-hover:text-gray-900",children:e}),i.jsx(fo,{className:"w-4 h-4 text-gray-200 group-hover:text-gray-300 ml-auto"})]},e))})]})})}),i.jsx("section",{className:"gradient-hero text-white py-16 px-4",children:i.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[i.jsx(bm,{className:"w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-80"}),i.jsx("h2",{className:"text-3xl font-extrabold mb-4",children:"Ready to Write Your First Apex?"}),i.jsx("p",{className:"text-blue-100 mb-8 text-lg",children:"No Salesforce org needed. Start writing code right here, right now."}),i.jsxs(q,{to:"/lesson/apex-variables",className:"inline-flex items-center gap-2 bg-white text-sf-blue font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Lesson 1: Variables ",i.jsx($n,{className:"w-4 h-4"})]})]})})]})}const Rm={blue:"bg-sf-blue",green:"bg-sf-green",orange:"bg-sf-orange",purple:"bg-sf-purple"},Mm={sm:"h-1.5",md:"h-2.5",lg:"h-4"};function Cs({value:e,max:t=100,className:n="",color:r="blue",height:s,size:a="md",showLabel:o=!1,label:l}){const c=Math.min(100,Math.max(0,e/t*100)),d=Rm[r]??r,p=s??Mm[a];return i.jsxs("div",{className:n,children:[(o||l)&&i.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l&&i.jsx("span",{className:"text-xs text-sf-gray-6",children:l}),o&&i.jsxs("span",{className:"text-xs font-medium text-sf-gray-7",children:[Math.round(c),"%"]})]}),i.jsx("div",{className:`w-full bg-sf-gray-2 rounded-full ${p} overflow-hidden`,children:i.jsx("div",{className:`${p} rounded-full ${d} transition-all duration-500 ease-out`,style:{width:`${c}%`},role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t})})]})}const Ye=[{id:"apex-variables",moduleId:"apex-basics",order:1,title:"Variables and Data Types",subtitle:"The building blocks of every Apex program",description:"Learn how to store and work with different kinds of data in Apex — from numbers and text to dates and Salesforce record IDs.",duration:20,difficulty:"beginner",tags:["apex","variables","data types"],prerequisites:[],learningObjectives:["Declare variables using primitive data types","Understand when to use Integer vs Decimal vs Long","Work with String, Boolean, Date, and ID types","Understand null values and type safety"],content:[{type:"explanation",title:"What is a Variable?",text:"A variable is a named container that holds a value your program can use and change. In Apex, every variable must have a declared type — this tells Salesforce exactly what kind of data it will store."},{type:"explanation",title:"Primitive Data Types",text:`Apex has several built-in primitive types:

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

Always use \`Trigger.oldMap.get(record.Id)\` to access the previous values.`},{type:"note",title:"When Trigger.old Is Not Available",text:"Trigger.old and Trigger.oldMap are only populated for update and delete operations — they are null on insert. Always guard with `if (Trigger.isUpdate)` before accessing them, or you will get a NullPointerException."}],quiz:[{id:"ctx-q1",question:"Which context variable gives you a Map<Id, sObject> of records BEFORE the change?",options:["Trigger.new","Trigger.oldMap","Trigger.newMap","Trigger.old"],correct:1,explanation:"Trigger.oldMap is a Map<Id, sObject> keyed by record ID containing the pre-change versions. It is available on update and delete triggers."},{id:"ctx-q2",question:'You need to run extra logic only when the Account Rating field changes from "Cold" to "Hot". Which approach is correct?',options:['if (acc.Rating == "Hot")',"if (acc.Rating != Trigger.oldMap.get(acc.Id).Rating)","if (Trigger.new.Rating != Trigger.old.Rating)",'if (Trigger.isUpdate && acc.Rating == "Hot")'],correct:1,explanation:"Compare the new record's field to the old record from Trigger.oldMap. This detects any change to Rating. Option D only checks the new value, not whether it actually changed."},{id:"ctx-q3",question:"On a before insert trigger, which context variable is NOT available?",options:["Trigger.new","Trigger.isInsert","Trigger.oldMap","Trigger.size"],correct:2,explanation:'Trigger.oldMap (and Trigger.old) are only available for update and delete operations. On insert there are no "old" values.'},{id:"ctx-q4",question:'What does acc.addError("message") do in a before trigger?',options:["Logs a message to the debug log","Prevents the record from being saved and shows the message to the user","Throws a DmlException","Creates an error log record"],correct:1,explanation:"addError() attaches a validation error to the record and prevents the DML operation from completing. The error message is shown to the user."}],challengeId:"challenge-triggers-context"},{id:"soql-where-filters",moduleId:"soql",order:2,title:"WHERE Clause & Filters",subtitle:"Narrow your queries with precision",description:"Learn comparison operators, logical connectors, IN/NOT IN, LIKE, and NULL checks to filter SOQL results.",duration:25,difficulty:"beginner",tags:["SOQL","WHERE","Filters","Operators"],prerequisites:["soql-basics"],learningObjectives:["Use =, !=, <, >, <=, >= to filter records","Combine conditions with AND, OR, NOT","Filter with IN, NOT IN, and LIKE","Check for NULL values in queries"],content:[{type:"explanation",title:"Comparison Operators",text:`The WHERE clause filters records before returning them. SOQL supports standard comparison operators:

**=** (equal), **!=** (not equal), **<**, **>**, **<=**, **>=**

String values must always be wrapped in single quotes.`},{type:"example",title:"Basic Comparisons",text:"Filter accounts by industry and revenue:",code:`// Accounts in Technology with revenue > $1M
List<Account> techAccounts = [
    SELECT Id, Name, AnnualRevenue
    FROM Account
    WHERE Industry = 'Technology'
    AND AnnualRevenue > 1000000
];

// Opportunities not yet closed
List<Opportunity> open = [
    SELECT Id, Name, StageName
    FROM Opportunity
    WHERE StageName != 'Closed Won'
    AND StageName != 'Closed Lost'
];`,output:"// Returns only matching records"},{type:"explanation",title:"IN and NOT IN",text:"Use **IN** to match any value in a list — it's cleaner than chaining multiple OR conditions. **NOT IN** excludes records matching those values."},{type:"example",title:"IN / NOT IN",text:"Filter by a set of values:",code:`// Accounts in multiple industries
List<Account> targets = [
    SELECT Id, Name, Industry
    FROM Account
    WHERE Industry IN ('Technology', 'Healthcare', 'Finance')
];

// Contacts NOT in those accounts (using a subquery)
List<Contact> others = [
    SELECT Id, Name
    FROM Contact
    WHERE AccountId NOT IN :targets
];`},{type:"example",title:"LIKE — Pattern Matching",text:"LIKE uses % as a wildcard for any characters, and _ for a single character. It's case-insensitive in SOQL.",code:`// Accounts whose name starts with 'Acme'
List<Account> acme = [
    SELECT Id, Name
    FROM Account
    WHERE Name LIKE 'Acme%'
];

// Contacts with Gmail addresses
List<Contact> gmail = [
    SELECT Id, Email
    FROM Contact
    WHERE Email LIKE '%@gmail.com'
];`},{type:"example",title:"NULL Checks",text:"Check for empty fields using = null or != null (not IS NULL like in SQL):",code:`// Leads without a phone number
List<Lead> noPhone = [
    SELECT Id, Name
    FROM Lead
    WHERE Phone = null
];

// Accounts that have a website
List<Account> withSite = [
    SELECT Id, Name, Website
    FROM Account
    WHERE Website != null
];`},{type:"note",title:"Real-World Business Context",text:"Before a targeted marketing campaign, a marketing ops team needs to filter 50,000 Account records down to enterprise-tier Technology companies in the Western region. Without a precise WHERE clause, every record is returned and the campaign blast hits the wrong audience — wasting budget and annoying customers."},{type:"exercise",title:"Spot the Bug",text:`What is wrong with this SOQL query?

\`\`\`apex
List<Lead> active = [
    SELECT Id, Name, Status
    FROM Lead
    WHERE Status = Active
];
\`\`\`

The query will throw a compile error. Can you spot it?`},{type:"explanation",title:"Bug Fix Explanation",text:"String literals in SOQL must be wrapped in **single quotes**. `Active` without quotes is treated as a field name reference, which causes a compile error.\n\nFix: `WHERE Status = 'Active'`"},{type:"tip",title:"When to Use Which",text:`**=** — exact single-value match (e.g., \`Status = 'Active'\`)
**IN** — match any of several known values (e.g., \`Industry IN ('Tech', 'Finance')\`)
**LIKE** — partial text pattern match (e.g., names starting with "Acme")

Avoid LIKE on large datasets without an indexed field — it can be non-selective and slow.`}],quiz:[{id:"soql-where-q1",question:"Which operator checks whether a field has no value?",options:["= null","IS NULL","== null","NOT EXISTS"],correct:0,explanation:"SOQL uses = null (not IS NULL like SQL) to check for empty fields."},{id:"soql-where-q2",question:'What wildcard character does SOQL LIKE use for "any sequence of characters"?',options:["*","%","?","_"],correct:1,explanation:"SOQL LIKE uses % as a multi-character wildcard, and _ as a single-character wildcard — same as SQL."},{id:"soql-where-q3",question:"Which query correctly finds Accounts in either Technology or Finance?",options:["WHERE Industry = 'Technology' OR 'Finance'","WHERE Industry IN ('Technology', 'Finance')","WHERE Industry = ('Technology', 'Finance')","WHERE Industry LIKE 'Technology' OR 'Finance'"],correct:1,explanation:"IN accepts a comma-separated list of values. The other forms are invalid SOQL syntax."},{id:"soql-where-q4",question:"A query returns no results unexpectedly. The WHERE clause is `WHERE Status = Active`. What is the most likely cause?",options:["Active is not a valid status value","String literals require single quotes — Active should be 'Active'","Status is not queryable","The IN keyword should be used instead"],correct:1,explanation:"Without single quotes, SOQL treats Active as a field name reference, not a string literal — causing a compile error or empty result set."}]},{id:"soql-relationships",moduleId:"soql",order:3,title:"Relationship Queries",subtitle:"Traverse object relationships in a single query",description:"Query across parent-child relationships using dot notation and nested SELECTs to retrieve related data in one round trip.",duration:30,difficulty:"intermediate",tags:["SOQL","Relationships","Parent-Child","Joins"],prerequisites:["soql-where-filters"],learningObjectives:["Use dot notation for child-to-parent queries","Write parent-to-child queries with nested SELECT","Understand relationship names vs field names","Handle polymorphic relationships like Task.What"],content:[{type:"explanation",title:"Child-to-Parent: Dot Notation",text:"When a child record has a lookup to a parent, you can traverse the relationship using dot notation. For **standard** lookups, use the relationship name without __r (e.g., `Account.Name`). For **custom** lookups, the relationship name ends in `__r` (e.g., `Region__r.Name`)."},{type:"example",title:"Child-to-Parent Query",text:"Get Contact names and their Account's Industry:",code:`List<Contact> contacts = [
    SELECT Id, Name, Account.Name, Account.Industry
    FROM Contact
    WHERE Account.Industry = 'Technology'
];

for (Contact c : contacts) {
    System.debug(c.Name + ' works at ' + c.Account.Name);
}`,output:`// Sarah Chen works at Acme Corp
// James Wu works at Globex`},{type:"explanation",title:"Parent-to-Child: Nested SELECT",text:"To retrieve child records along with a parent, use a nested SELECT inside the parent query. The inner query uses the **child relationship name** (plural, usually). For example, Contacts on an Account use `Contacts`, Cases use `Cases`."},{type:"example",title:"Parent-to-Child Query",text:"Get all Accounts with their open Opportunities:",code:`List<Account> accounts = [
    SELECT Id, Name,
        (SELECT Id, Name, Amount, StageName
         FROM Opportunities
         WHERE StageName != 'Closed Lost')
    FROM Account
    WHERE Type = 'Customer'
];

for (Account acct : accounts) {
    System.debug(acct.Name + ' has ' + acct.Opportunities.size() + ' open opps');
}`},{type:"example",title:"Cases with Account Industry",text:"Real routing scenario — pull Cases and their Account Industry in one query:",code:`List<Case> cases = [
    SELECT Id, Subject, Priority,
           Account.Name, Account.Industry
    FROM Case
    WHERE Status = 'Open'
    ORDER BY CreatedDate DESC
    LIMIT 100
];

for (Case c : cases) {
    if (c.Account.Industry == 'Healthcare') {
        // Route to Healthcare support queue
    }
}`},{type:"note",title:"Real-World Business Context",text:"A support team needs to auto-route incoming Cases based on the Account's Industry. Without relationship queries, they'd need two separate SOQL calls: one to get Cases, another to get Account details. A single relationship query retrieves both in one governor limit hit, cutting query count in half."},{type:"exercise",title:"Spot the Bug",text:`This query is meant to get Contact names with their Account's name, but it throws an error:

\`\`\`apex
List<Contact> contacts = [
    SELECT Id, Name, Account__r.Name
    FROM Contact
];
\`\`\`

What is wrong?`},{type:"explanation",title:"Bug Fix Explanation",text:"`Account__r` is the syntax for **custom lookup fields** (fields ending in `__c`). The standard Account lookup on Contact is simply `Account` — no `__r` suffix needed.\n\nFix: `SELECT Id, Name, Account.Name FROM Contact`\n\nOnly use `__r` when you created the lookup field yourself (e.g., `My_Account__c` → `My_Account__r.Name`)."}],quiz:[{id:"soql-rel-q1",question:"What syntax retrieves a standard parent lookup field value in SOQL?",options:["Account__r.Name","Account.Name","PARENT(Account.Name)","JOIN Account ON AccountId"],correct:1,explanation:"Standard lookup relationships use dot notation without __r. Custom lookups use __r (e.g., Region__r.Name)."},{id:"soql-rel-q2",question:"In a parent-to-child (nested SELECT) query, what name do you use in the inner FROM clause?",options:["The child object API name (e.g., Contact)","The child relationship name (e.g., Contacts)","The lookup field name (e.g., AccountId)","The child sObject type (e.g., Contact__c)"],correct:1,explanation:"Parent-to-child queries use the relationship name in the nested FROM, which is typically plural (e.g., Contacts, Opportunities, Cases)."},{id:"soql-rel-q3",question:"How many levels of parent-to-child nesting does SOQL allow?",options:["1","2","5","Unlimited"],correct:0,explanation:"SOQL only allows one level of parent-to-child nesting in a single query. You cannot nest a subquery inside a subquery."},{id:"soql-rel-q4",question:"You query Task records and want the name of the related Account or Opportunity via the What field. What type of relationship is this?",options:["Standard lookup","Master-detail","Polymorphic relationship","External lookup"],correct:2,explanation:"Task.What is a polymorphic field — it can point to different object types (Account, Opportunity, etc.). Use TYPEOF in SOQL to handle these cleanly."}]},{id:"soql-aggregate",moduleId:"soql",order:4,title:"Aggregate Functions & GROUP BY",subtitle:"Summarize data directly in your query",description:"Use COUNT, SUM, AVG, MAX, MIN with GROUP BY and HAVING to produce reports and summaries without Apex loops.",duration:30,difficulty:"intermediate",tags:["SOQL","Aggregate","GROUP BY","AggregateResult"],prerequisites:["soql-relationships"],learningObjectives:["Use COUNT(), SUM(), AVG(), MAX(), MIN() in SOQL","Group results with GROUP BY","Filter grouped results with HAVING","Read results from AggregateResult[]"],content:[{type:"explanation",title:"Aggregate Functions",text:`SOQL supports five aggregate functions:

- **COUNT()** / **COUNT(fieldName)** — count records
- **SUM(fieldName)** — total a numeric field
- **AVG(fieldName)** — average of a numeric field
- **MAX(fieldName)** — largest value
- **MIN(fieldName)** — smallest value

Aggregate queries return \`AggregateResult[]\` instead of a typed list.`},{type:"example",title:"COUNT and SUM",text:"Count total leads and sum opportunity amounts:",code:`// Count all open leads
AggregateResult[] leadCount = [
    SELECT COUNT(Id) total
    FROM Lead
    WHERE IsConverted = false
];
Integer total = (Integer) leadCount[0].get('total');

// Sum pipeline by stage
AggregateResult[] pipeline = [
    SELECT StageName, SUM(Amount) totalAmount
    FROM Opportunity
    WHERE IsClosed = false
    GROUP BY StageName
];

for (AggregateResult ar : pipeline) {
    System.debug(ar.get('StageName') + ': $' + ar.get('totalAmount'));
}`,output:`// Prospecting: $450000
// Proposal: $1200000`},{type:"example",title:"GROUP BY with HAVING",text:"HAVING filters groups after aggregation — like WHERE but for grouped results:",code:`// Accounts with more than 3 open cases
AggregateResult[] heavyHitters = [
    SELECT AccountId, COUNT(Id) caseCount
    FROM Case
    WHERE Status = 'Open'
    GROUP BY AccountId
    HAVING COUNT(Id) > 3
];

for (AggregateResult ar : heavyHitters) {
    System.debug('AccountId: ' + ar.get('AccountId') + ' → ' + ar.get('caseCount') + ' open cases');
}`},{type:"example",title:"Revenue Rollup by Region",text:"Monthly closed-won revenue by region (a common reporting pattern):",code:`AggregateResult[] revenue = [
    SELECT Region__c region, SUM(Amount) totalRevenue, COUNT(Id) dealCount
    FROM Opportunity
    WHERE StageName = 'Closed Won'
    AND CALENDAR_MONTH(CloseDate) = :Date.today().month()
    AND CALENDAR_YEAR(CloseDate) = :Date.today().year()
    GROUP BY Region__c
    ORDER BY SUM(Amount) DESC
];

for (AggregateResult ar : revenue) {
    Decimal rev = (Decimal) ar.get('totalRevenue');
    System.debug(ar.get('region') + ': $' + rev.setScale(2));
}`},{type:"note",title:"Real-World Business Context",text:"A VP of Sales needs a weekly report: total closed-won revenue per region for the current month. Without aggregate SOQL, you'd query all Opportunities, loop through them in Apex, and manually sum — risking governor limits on large datasets. An aggregate query does it in a single SOQL call with no Apex loop."},{type:"exercise",title:"Spot the Bug",text:`This query is meant to show total amount per Account, but it fails:

\`\`\`apex
AggregateResult[] results = [
    SELECT AccountId, Name, SUM(Amount) total
    FROM Opportunity
    GROUP BY AccountId
];
\`\`\`

What is wrong?`},{type:"explanation",title:"Bug Fix Explanation",text:"When using GROUP BY, **every non-aggregate field in SELECT must appear in GROUP BY**. `Name` is not in the GROUP BY clause, which causes an error.\n\nFix option 1: Add `Name` to GROUP BY → `GROUP BY AccountId, Name`\nFix option 2: Remove `Name` from SELECT if you don't need it."},{type:"tip",title:"When to Use Which",text:`**Aggregate SOQL** — use when you need totals, counts, averages, or grouped summaries. Faster and uses fewer governor limits.

**Apex loop aggregation** — use when logic is too complex for SOQL (e.g., weighted averages, custom tier logic, conditional multi-pass calculations).

Default to aggregate SOQL whenever the grouping logic is straightforward.`}],quiz:[{id:"soql-agg-q1",question:"What is the return type of an aggregate SOQL query in Apex?",options:["List<SObject>","AggregateResult[]","Map<String, Object>","List<Decimal>"],correct:1,explanation:"Aggregate queries return AggregateResult[], not a typed list. Use .get('alias') to access each field value."},{id:"soql-agg-q2",question:"Which SOQL clause filters the output of a GROUP BY — similar to WHERE but applied after grouping?",options:["FILTER","WHERE","HAVING","LIMIT"],correct:2,explanation:"HAVING filters aggregated groups, while WHERE filters individual rows before grouping."},{id:"soql-agg-q3",question:"You write `SELECT AccountId, Name, SUM(Amount) FROM Opportunity GROUP BY AccountId`. What error will occur?",options:["SUM is not supported on Amount","Name must also appear in GROUP BY","GROUP BY is not valid on Opportunity","No error — the query is valid"],correct:1,explanation:"All non-aggregate fields in SELECT must be in the GROUP BY clause. Name is selected but not grouped — this causes a SOQL error."},{id:"soql-agg-q4",question:'How do you read the value of alias "totalAmount" from an AggregateResult?',options:["ar.totalAmount","ar['totalAmount']","(Decimal) ar.get('totalAmount')","ar.getField('totalAmount')"],correct:2,explanation:"AggregateResult.get() returns Object, so you must cast it. Dot notation and array syntax are not valid for AggregateResult."}]},{id:"soql-subqueries",moduleId:"soql",order:5,title:"Semi-joins, Anti-joins & Subqueries",subtitle:"Filter records based on related data",description:"Use WHERE Id IN (SELECT...) and WHERE Id NOT IN (SELECT...) to perform set-based filtering across related objects.",duration:35,difficulty:"advanced",tags:["SOQL","Subqueries","Semi-join","Anti-join"],prerequisites:["soql-aggregate"],learningObjectives:["Write semi-join queries using WHERE Id IN (SELECT...)","Write anti-join queries using WHERE Id NOT IN (SELECT...)","Understand subquery field restrictions","Identify when subqueries save governor limits vs Apex collections"],content:[{type:"explanation",title:"Semi-joins: WHERE Id IN (SELECT...)",text:`A semi-join filters a parent object by whether a matching child record **exists**. The inner SELECT must return an **Id field** (or a lookup Id field that points to the outer object).

This is equivalent to SQL's EXISTS but written as IN.`},{type:"example",title:"Semi-join: Accounts With Open Opportunities",text:"Find all Accounts that have at least one open Opportunity:",code:`List<Account> withOpenOpps = [
    SELECT Id, Name
    FROM Account
    WHERE Id IN (
        SELECT AccountId
        FROM Opportunity
        WHERE IsClosed = false
    )
];`},{type:"explanation",title:"Anti-joins: WHERE Id NOT IN (SELECT...)",text:'An anti-join filters records where **no** matching child record exists. Use this for "find all X with no Y" patterns.'},{type:"example",title:"Anti-join: Accounts With No Open Opportunities",text:"Find dormant accounts for a reactivation campaign:",code:`// Accounts with no open opportunities — reactivation targets
List<Account> dormant = [
    SELECT Id, Name, LastActivityDate
    FROM Account
    WHERE Type = 'Customer'
    AND Id NOT IN (
        SELECT AccountId
        FROM Opportunity
        WHERE IsClosed = false
    )
    ORDER BY LastActivityDate ASC NULLS FIRST
    LIMIT 200
];`},{type:"example",title:"Contacts Without Activities",text:"Find contacts who have never been emailed (no EmailMessage child records):",code:`List<Contact> neverContacted = [
    SELECT Id, Name, Email
    FROM Contact
    WHERE Id NOT IN (
        SELECT ContactId
        FROM EmailMessage
        WHERE Incoming = false
    )
    AND Email != null
];`},{type:"note",title:"Real-World Business Context",text:"A growth team wants to run a reactivation campaign targeting Customer accounts with no open pipeline. Without anti-join subqueries, they'd query all accounts, then all opportunities, build an Apex Set of AccountIds, and filter — three SOQL queries. With an anti-join, it's one query and zero Apex collections."},{type:"exercise",title:"Spot the Bug",text:`This anti-join query fails at runtime:

\`\`\`apex
List<Account> results = [
    SELECT Id, Name
    FROM Account
    WHERE Id NOT IN (
        SELECT Name
        FROM Opportunity
    )
];
\`\`\`

What is the problem?`},{type:"explanation",title:"Bug Fix Explanation",text:`The inner SELECT of a subquery **must return a relationship Id field** — not a text field like Name. The subquery is meant to return AccountId values so the outer WHERE can compare them against Account.Id.

Fix: \`SELECT AccountId FROM Opportunity\`

Only Id-type fields (Id, lookupId fields) are valid in a subquery SELECT.`}],quiz:[{id:"soql-sub-q1",question:"What type of field must appear in the SELECT of a SOQL subquery?",options:["Any text field","Only the Name field","An Id or relationship Id field","Any indexed field"],correct:2,explanation:"SOQL subqueries can only SELECT Id fields or lookup Id fields (e.g., AccountId). Selecting Name or other text fields causes a runtime error."},{id:"soql-sub-q2",question:"Which pattern finds Accounts that have NO Opportunities?",options:["WHERE Id IN (SELECT AccountId FROM Opportunity)","WHERE Id NOT IN (SELECT AccountId FROM Opportunity)","WHERE Opportunities.size() = 0","WHERE NOT EXISTS (SELECT 1 FROM Opportunity)"],correct:1,explanation:"NOT IN with a subquery is the anti-join pattern — it returns parent records with no matching child."},{id:"soql-sub-q3",question:"What is the SOQL semi-join used for?",options:["Combining two queries with UNION","Filtering records where a related child record exists","Joining two unrelated objects","Filtering by aggregate values"],correct:1,explanation:"A semi-join (WHERE Id IN (SELECT...)) filters parent records to only those where at least one matching child record exists."},{id:"soql-sub-q4",question:"What is the main advantage of an anti-join subquery over Apex-based filtering?",options:["Anti-joins bypass governor limits entirely","Anti-joins use one SOQL query instead of multiple queries and Apex collections","Anti-joins are faster than all other SOQL patterns","Anti-joins work on custom objects but not standard objects"],correct:1,explanation:"An anti-join collapses what would be 2-3 SOQL calls plus Apex Set manipulation into a single query — saving both query count and heap space."}]},{id:"soql-performance",moduleId:"soql",order:6,title:"SOQL Performance & Best Practices",subtitle:"Write queries that scale to millions of records",description:"Learn about selective queries, indexed fields, LIMIT/OFFSET, FOR UPDATE, avoiding SOQL in loops, and when to use SOSL instead.",duration:40,difficulty:"advanced",tags:["SOQL","Performance","Governor Limits","Indexes","Best Practices"],prerequisites:["soql-subqueries"],learningObjectives:["Identify selective vs non-selective queries","Use indexed fields to speed up queries","Avoid SOQL inside for loops","Use LIMIT, OFFSET, and FOR UPDATE appropriately","Know when SOSL is better than SOQL"],content:[{type:"explanation",title:"Selective Queries & Indexed Fields",text:`Salesforce executes queries differently based on **selectivity** — how many records a filter eliminates. A query is selective when it filters to less than ~10% of the table.

**Automatically indexed fields**: Id, Name, CreatedDate, SystemModstamp, RecordTypeId, OwnerId, standard lookup fields, fields marked "External ID" or "Unique".

Filtering on non-indexed fields over large tables can hit a timeout error.`},{type:"example",title:"Using Indexed Fields",text:"Prefer indexed fields in WHERE to keep queries selective:",code:`// GOOD: Filtering on OwnerId (indexed) — selective
List<Opportunity> myOpps = [
    SELECT Id, Name, Amount
    FROM Opportunity
    WHERE OwnerId = :UserInfo.getUserId()
    AND StageName != 'Closed Lost'
];

// RISKY: Filtering only on Description (not indexed, full text)
List<Account> risky = [
    SELECT Id, Name
    FROM Account
    WHERE Description LIKE '%important%'   // non-selective, can timeout
];`},{type:"explanation",title:"Never Put SOQL Inside a Loop",text:"Salesforce enforces a limit of **100 SOQL queries per transaction**. Putting a query inside a for loop burns one query per iteration — a trigger on 150 records would exceed the limit on the very first run."},{type:"example",title:"SOQL in Loop — The Classic Anti-pattern",text:"Wrong vs right way to query related data in a trigger:",code:`// BAD: 1 SOQL per Account — hits 101 limit at 101 records
trigger BadTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        Account acct = [SELECT Id, Name FROM Account WHERE Id = :c.AccountId];  // ← SOQL in loop!
        System.debug(acct.Name);
    }
}

// GOOD: 1 SOQL total — bulk-safe
trigger GoodTrigger on Contact (after insert) {
    Set<Id> accountIds = new Set<Id>();
    for (Contact c : Trigger.new) {
        if (c.AccountId != null) accountIds.add(c.AccountId);
    }

    Map<Id, Account> accountMap = new Map<Id, Account>([
        SELECT Id, Name FROM Account WHERE Id IN :accountIds
    ]);

    for (Contact c : Trigger.new) {
        Account acct = accountMap.get(c.AccountId);
        if (acct != null) System.debug(acct.Name);
    }
}`,output:"// Good pattern: 1 SOQL, handles 200 records with no issue"},{type:"example",title:"LIMIT, OFFSET, FOR UPDATE",text:"Control result size and prevent concurrent edits:",code:`// LIMIT — cap result count
List<Lead> top10 = [SELECT Id, Name FROM Lead ORDER BY CreatedDate DESC LIMIT 10];

// OFFSET — skip first N results (for pagination, max offset: 2000)
List<Lead> page2 = [SELECT Id, Name FROM Lead ORDER BY CreatedDate DESC LIMIT 10 OFFSET 10];

// FOR UPDATE — lock records to prevent concurrent modification
List<Account> locked = [
    SELECT Id, Name, AnnualRevenue
    FROM Account
    WHERE Id IN :accountIds
    FOR UPDATE
];`},{type:"note",title:"Real-World Business Context",text:"A nightly batch job querying 2 million Account records was timing out every night. The root cause: `WHERE CustomStatus__c = 'Active'` — a custom text field with no index. Adding an External ID index on CustomStatus__c made the query selective, dropping runtime from 4 minutes to 8 seconds."},{type:"exercise",title:"Spot the Bug",text:`This trigger will fail when more than 100 records are updated at once:

\`\`\`apex
trigger ContactTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        List<Case> cases = [
            SELECT Id FROM Case WHERE ContactId = :c.Id
        ];
        // process cases...
    }
}
\`\`\`

What is wrong and how do you fix it?`},{type:"explanation",title:"Bug Fix Explanation",text:`There is a SOQL query inside the for loop. With 101+ Contact records, this exceeds the 100-query limit.

**Fix**: Collect all Contact Ids first, query in bulk outside the loop, store in a Map, then loop:

\`\`\`apex
Set<Id> contactIds = new Set<Id>(Trigger.newMap.keySet());
Map<Id, List<Case>> casesByContact = new Map<Id, List<Case>>();
for (Case c : [SELECT Id, ContactId FROM Case WHERE ContactId IN :contactIds]) {
    if (!casesByContact.containsKey(c.ContactId)) casesByContact.put(c.ContactId, new List<Case>());
    casesByContact.get(c.ContactId).add(c);
}
\`\`\``},{type:"tip",title:"When to Use SOQL vs SOSL",text:"**SOQL** — use when you know the object and field, need structured results, or need relationships. Best for record retrieval and DML preparation.\n\n**SOSL (Salesforce Object Search Language)** — use when searching across multiple objects at once (e.g., global search), or doing full-text search across many fields. Returns a `List<List<SObject>>`.\n\nExample SOSL: `FIND 'Acme' IN ALL FIELDS RETURNING Account(Id, Name), Contact(Id, Name)`"}],quiz:[{id:"soql-perf-q1",question:"How many SOQL queries are allowed per Apex transaction?",options:["50","100","200","1000"],correct:1,explanation:"Salesforce allows 100 SOQL queries per synchronous transaction (200 for async). Exceeding this throws a System.LimitException."},{id:"soql-perf-q2",question:"Which fields are automatically indexed in Salesforce?",options:["All custom fields ending in __c","Id, Name, CreatedDate, OwnerId, and External ID fields","All fields in the WHERE clause of frequent queries",'Fields with the "Indexed" checkbox enabled in Setup'],correct:1,explanation:"Id, Name, CreatedDate, SystemModstamp, RecordTypeId, OwnerId, standard lookups, and fields marked External ID or Unique are auto-indexed."},{id:"soql-perf-q3",question:"What happens if you put a SOQL query inside a for loop processing 150 records?",options:["Nothing — Salesforce optimizes it automatically","A System.LimitException is thrown after 100 iterations","Only the first 100 records are processed","The transaction rolls back silently"],correct:1,explanation:"Each loop iteration fires one SOQL query. At 101 iterations, the 100-query limit is exceeded and Salesforce throws System.LimitException: Too many SOQL queries."},{id:"soql-perf-q4",question:"When should you prefer SOSL over SOQL?",options:["When querying a single object with known field values","When you need to search across multiple objects by keyword","When you need GROUP BY and aggregation","When you need to lock records with FOR UPDATE"],correct:1,explanation:"SOSL is designed for full-text keyword search across multiple objects simultaneously. SOQL is better for structured, field-specific queries on a known object."}]}];Ye.reduce((e,t)=>(e[t.moduleId]||(e[t.moduleId]=[]),e[t.moduleId].push(t),e),{});const jm=e=>Ye.find(t=>t.id===e),Ed=[{id:"challenge-variables",lessonId:"apex-variables",title:"Build a Contact Info Card",description:"Declare the correct Apex variables to represent a Salesforce Contact record, then print a formatted summary.",difficulty:"beginner",instructions:["Declare a String variable for the contact's full name","Declare an Integer variable for their age","Declare a Decimal variable for their annual salary","Declare a Boolean variable indicating if they are a VIP customer","Declare a Date variable for their hire date using Date.newInstance()","Print a summary using System.debug()"],starterCode:`// TODO: Declare your variables here
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

System.debug(summary);`,solutionExplanation:"We declared five variables with the correct types: String for text, Integer for whole numbers, Decimal for currency (supports decimal places), Boolean for true/false, and Date using the static factory method. The summary concatenates all values into one string.",testCases:[{id:"tc1",description:"Declares a String variable",pattern:"String\\s+\\w+\\s*=\\s*'[^']+'",errorMessage:"You need to declare a String variable with a text value in single quotes."},{id:"tc2",description:"Declares an Integer variable",pattern:"Integer\\s+\\w+\\s*=\\s*\\d+",errorMessage:"You need to declare an Integer variable with a whole number value."},{id:"tc3",description:"Declares a Decimal variable",pattern:"Decimal\\s+\\w+\\s*=\\s*[\\d.]+",errorMessage:"You need to declare a Decimal variable with a decimal number."},{id:"tc4",description:"Declares a Boolean variable",pattern:"Boolean\\s+\\w+\\s*=\\s*(true|false)",errorMessage:"You need to declare a Boolean variable with a value of true or false."},{id:"tc5",description:"Uses System.debug()",pattern:"System\\.debug\\(",errorMessage:"Use System.debug() to print your output."}]},{id:"challenge-strings",lessonId:"apex-strings",title:"Email Address Processor",description:"Write Apex code to validate and normalize an email address from user input.",difficulty:"beginner",instructions:["Take the input email: '  JOHN.DOE@ExAmPlE.CoM  '","Trim whitespace from both ends","Convert the entire email to lowercase",`Check if the email contains an '@' character — if not, print "Invalid email"`,"Extract the username (part before @) and domain (part after @)",'Print: "Username: john.doe | Domain: example.com"'],starterCode:`String rawEmail = '  JOHN.DOE@ExAmPlE.CoM  ';

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
}`,solutionExplanation:"We chain trim() and toLowerCase() to normalize the input. Then we check for @ using contains(), find its position with indexOf(), and use substring() to split the email into username and domain parts.",testCases:[{id:"tc1",description:"Uses trim()",pattern:"\\.trim\\(\\)",errorMessage:"Use .trim() to remove leading and trailing whitespace."},{id:"tc2",description:"Uses toLowerCase()",pattern:"\\.toLowerCase\\(\\)",errorMessage:"Use .toLowerCase() to normalize the email to lowercase."},{id:"tc3",description:"Checks for @ character",pattern:"contains\\(|indexOf\\(",errorMessage:"Check if the email contains an @ character using contains() or indexOf()."},{id:"tc4",description:"Uses substring() to extract parts",pattern:"\\.substring\\(",errorMessage:"Use .substring() to extract the username and domain."},{id:"tc5",description:"Uses System.debug()",pattern:"System\\.debug\\(",errorMessage:"Use System.debug() to print the result."}]},{id:"challenge-conditionals",lessonId:"apex-conditionals",title:"Opportunity Discount Calculator",description:"Write a conditional logic engine that determines the discount percentage based on deal size and account tier.",difficulty:"beginner",instructions:["Given amount = 75000 and accountTier = 'Gold'","Apply these rules:","  - Enterprise tier: 20% discount if amount > 50000, else 15%","  - Gold tier: 15% discount if amount > 50000, else 10%","  - Silver tier: 10% discount if amount > 50000, else 5%","  - All other tiers: 0% discount",'Calculate the discounted price and print: "Discount: X% | Final Price: $Y"'],starterCode:`Decimal amount = 75000;
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
System.debug('Discount: ' + discountPct + '% | Final Price: $' + finalPrice);`,solutionExplanation:"We use else if to handle each tier. For Gold with amount 75000 (> 50000), discountPct is 15. The ternary operator (condition ? valueIfTrue : valueIfFalse) is a concise shorthand for if/else.",testCases:[{id:"tc1",description:"Uses if/else if/else or switch",pattern:"if\\s*\\(|switch\\s+on",errorMessage:"Use if/else if/else statements to apply the discount rules."},{id:"tc2",description:"Checks accountTier",pattern:"accountTier",errorMessage:"Your code must check the accountTier variable."},{id:"tc3",description:"Checks amount threshold",pattern:"amount\\s*>\\s*50000",errorMessage:"You need to check if amount > 50000 to apply the higher discount."},{id:"tc4",description:"Calculates final price",pattern:"finalPrice|discountPct",errorMessage:"Calculate the final price after applying the discount percentage."}]},{id:"challenge-loops",lessonId:"apex-loops",title:"Sales Report Generator",description:"Use loops to process a list of opportunity amounts and generate a sales summary.",difficulty:"beginner",instructions:["Given the list of deal amounts: {5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000}","Use a loop to calculate: total revenue, deal count, average deal size",'Count how many deals are "large" (> 10000)',"Find the largest deal amount","Print all five results"],starterCode:`List<Decimal> dealAmounts = new List<Decimal>{
    5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000
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
    5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000
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
System.debug('Largest Deal: $' + largestDeal);`,solutionExplanation:"We use a for-each loop to process each amount. We accumulate the total, count deals, check for large deals, and track the max. Average is computed after the loop to avoid dividing inside.",testCases:[{id:"tc1",description:"Uses a loop",pattern:"for\\s*\\(",errorMessage:"Use a for or for-each loop to iterate over dealAmounts."},{id:"tc2",description:"Calculates total revenue",pattern:"totalRevenue\\s*\\+=|totalRevenue\\s*=\\s*totalRevenue\\s*\\+",errorMessage:"Accumulate amounts into totalRevenue inside the loop."},{id:"tc3",description:"Counts large deals",pattern:"largeDealCount|amount\\s*>\\s*10000",errorMessage:"Count how many deals have amount > 10000."},{id:"tc4",description:"Finds largest deal",pattern:"largestDeal",errorMessage:"Track the largest deal amount."}]},{id:"challenge-lists",lessonId:"apex-lists",title:"Contact List Manager",description:"Build a contact list manager that filters, sorts, and summarizes a list of names.",difficulty:"beginner",instructions:["Start with this list: {'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'}","Create a new list containing only names that start with a vowel (A, E, I, O, U)","Sort the filtered list alphabetically","Print the count of filtered names and each name on a separate line"],starterCode:`List<String> contacts = new List<String>{
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
}`,solutionExplanation:"We use a Set of vowels for an efficient membership check. For each contact, we extract the first letter, uppercase it for safety, and check if it's a vowel. We then sort and print the results.",testCases:[{id:"tc1",description:"Creates a filtered list",pattern:"List<String>\\s+\\w+\\s*=\\s*new\\s+List<String>\\(\\)",errorMessage:"Create a new List<String> to hold the filtered names."},{id:"tc2",description:"Uses a loop to filter",pattern:"for\\s*\\(",errorMessage:"Use a loop to iterate through the contacts list."},{id:"tc3",description:"Checks first letter",pattern:"substring\\(0,\\s*1\\)|charAt\\(0\\)",errorMessage:"Extract the first letter using .substring(0, 1) to check if it is a vowel."},{id:"tc4",description:"Sorts the filtered list",pattern:"\\.sort\\(\\)",errorMessage:"Sort the filtered list using .sort()."}]},{id:"challenge-sets",lessonId:"apex-sets",title:"Tag Deduplicator",description:"Use a Set to deduplicate tags from multiple lead sources and identify which tags appear in multiple sources.",difficulty:"beginner",instructions:["You have two tag lists from different lead sources","Source A: {'vip', 'tech', 'enterprise', 'renewal', 'tech'}","Source B: {'sme', 'tech', 'startup', 'vip', 'sme'}","Create a Set of unique tags from Source A","Create a Set of unique tags from Source B","Find tags that appear in BOTH sources (intersection)","Print the unique tag counts for each source, and the shared tags"],starterCode:`List<String> sourceATags = new List<String>{'vip', 'tech', 'enterprise', 'renewal', 'tech'};
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
}`,solutionExplanation:"Converting a List to a Set automatically removes duplicates. We copy uniqueA into a new Set and call retainAll() to keep only elements that are also in uniqueB — this is the set intersection operation.",testCases:[{id:"tc1",description:"Creates Set from Source A",pattern:"Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>\\(sourceATags\\)",errorMessage:"Create a Set from sourceATags to deduplicate it."},{id:"tc2",description:"Creates Set from Source B",pattern:"Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>\\(sourceBTags\\)",errorMessage:"Create a Set from sourceBTags to deduplicate it."},{id:"tc3",description:"Finds intersection using retainAll",pattern:"retainAll\\(",errorMessage:"Use retainAll() to find the intersection of the two Sets."}]},{id:"challenge-maps",lessonId:"apex-maps",title:"Territory Revenue Tracker",description:"Use a Map to aggregate total revenue by sales territory from a list of deals.",difficulty:"beginner",instructions:["You have a list of sales territories and deal amounts","Aggregate total revenue per territory using a Map<String, Decimal>","Print each territory and its total revenue, sorted by territory name"],starterCode:`List<String> territories = new List<String>{
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
}`,solutionExplanation:"We use an index-based for loop to access both lists simultaneously. For each territory, we check if it already exists in the map and either add to the existing total or create a new entry. Finally, we sort the keys for consistent output.",testCases:[{id:"tc1",description:"Creates a Map<String, Decimal>",pattern:"Map<String,\\s*Decimal>",errorMessage:"Create a Map<String, Decimal> to store revenue by territory."},{id:"tc2",description:"Uses indexed for loop",pattern:"for\\s*\\(\\s*Integer\\s+i",errorMessage:"Use an indexed for loop (for Integer i = 0...) to access both lists."},{id:"tc3",description:"Uses containsKey or handles existing keys",pattern:"containsKey\\(|getOrDefault\\(",errorMessage:"Check if the territory already exists in the map before adding."},{id:"tc4",description:"Prints results",pattern:"System\\.debug\\(",errorMessage:"Print the results for each territory."}]},{id:"challenge-classes",lessonId:"apex-classes",title:"Account Credit Evaluator",description:"Build an Apex class that evaluates whether an Account qualifies for different credit tiers.",difficulty:"beginner",instructions:["Create a class called AccountCreditEvaluator","It should have properties: accountName (String), annualRevenue (Decimal), yearsInBusiness (Integer)","Add a constructor that accepts all three values","Add a method getCreditTier() that returns a String:",'  - "Platinum" if revenue >= 1M AND years >= 10','  - "Gold" if revenue >= 500K AND years >= 5','  - "Silver" if revenue >= 100K','  - "Standard" otherwise',"Add a method getSummary() that returns a formatted string","Create an instance and test it"],starterCode:`// TODO: Create AccountCreditEvaluator class with:
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
System.debug(evaluator.getSummary());`,solutionExplanation:"The class bundles three related properties with methods to process them. getCreditTier() uses compound conditions (&&) to evaluate multiple criteria. getSummary() reuses getCreditTier() rather than duplicating the logic.",testCases:[{id:"tc1",description:"Defines a class",pattern:"public\\s+class\\s+\\w+",errorMessage:"Define a public class using: public class ClassName {"},{id:"tc2",description:"Has a constructor",pattern:"public\\s+\\w+\\s*\\([^)]+\\)\\s*\\{",errorMessage:"Add a constructor that accepts the three values."},{id:"tc3",description:"Has getCreditTier method",pattern:"getCreditTier|creditTier",errorMessage:"Add a method called getCreditTier() that returns the credit tier String."},{id:"tc4",description:"Creates an instance with new",pattern:"new\\s+\\w+\\(",errorMessage:"Create an instance of your class using the new keyword."}]},{id:"challenge-soql",lessonId:"soql-basics",title:"SOQL Query Builder",description:"Write the correct SOQL queries to retrieve specific sets of Salesforce records.",difficulty:"beginner",instructions:["Write a SOQL query to get the top 5 Opportunities by Amount, Closed Won only, sorted descending",'Write a SOQL query to get all Contacts whose email ends with "@techcorp.com"',"Write a SOQL query to count all Accounts per Industry using GROUP BY","Store each result in an appropriately typed variable"],starterCode:`// Query 1: Top 5 Closed Won Opportunities by Amount (descending)
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
}`,solutionExplanation:"We create all Account objects first, then insert them all at once with a single DML statement. This is the bulkification pattern — one DML call for many records is far more efficient than one call per record. After insert, each account's Id is automatically populated by Salesforce.",testCases:[{id:"tc1",description:"Creates a List<Account>",pattern:"List<Account>",errorMessage:"Create a List<Account> to hold the accounts before inserting."},{id:"tc2",description:"Adds accounts to list",pattern:"\\.add\\(new\\s+Account|new\\s+Account\\(Name",errorMessage:"Add Account objects to your list."},{id:"tc3",description:"Uses single insert statement",pattern:"insert\\s+\\w+",errorMessage:'Use a single "insert list;" statement outside of any loop.'},{id:"tc4",description:"Wraps in try/catch",pattern:"try\\s*\\{|catch\\s*\\(",errorMessage:"Wrap the insert in a try/catch block to handle DmlException."},{id:"tc5",description:"Prints account IDs after insert",pattern:"\\.Id",errorMessage:"Print each account's .Id after the insert to confirm it was populated."}]},{id:"challenge-lwc-data-binding",lessonId:"lwc-data-binding",title:"Interactive Discount Calculator",description:"Build an LWC component that lets users enter a price and discount, then computes and displays the final price using getters.",difficulty:"intermediate",instructions:["Create an LWC component with properties: price (default 0), discountPct (default 0)","Add event handlers: handlePriceChange and handleDiscountChange that update the properties from input values",'Add a getter "finalPrice" that computes: price * (1 - discountPct / 100), rounded to 2 decimals','Add a getter "savings" that computes: price - finalPrice',"Display the original price, discount %, savings, and final price in the template","Use lightning-input components for the price and discount inputs"],starterCode:`// discountCalculator.js
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
}`,solutionExplanation:"The trigger is a thin router that delegates to the handler class. The handler receives context data via its constructor and exposes one method per trigger event. All logic lives in the handler — making it independently testable.",testCases:[{id:"tc1",description:"Trigger instantiates the handler class",pattern:"new\\s+ContactTriggerHandler",errorMessage:"The trigger should instantiate a ContactTriggerHandler."},{id:"tc2",description:"Handler class is defined",pattern:"public\\s+class\\s+ContactTriggerHandler",errorMessage:"Define a public class named ContactTriggerHandler."},{id:"tc3",description:"beforeInsert method exists",pattern:"public\\s+void\\s+beforeInsert",errorMessage:"Add a public void beforeInsert() method to the handler."},{id:"tc4",description:"beforeUpdate method exists",pattern:"public\\s+void\\s+beforeUpdate",errorMessage:"Add a public void beforeUpdate() method to the handler."}]},{id:"challenge-lwc-intro",lessonId:"lwc-intro",title:"Product Card Component",description:"Build an LWC component that displays a list of product cards with name, price, and availability status.",difficulty:"beginner",instructions:["Create an LWC component with a products array (defined in JS)","Each product object has: id, name, price (Decimal), inStock (Boolean)","Use for:each in the template to render each product",'Show "In Stock" if inStock is true, "Out of Stock" if false (use if:true / if:false)',"Display the product name and price in each item","Use key={product.id} on the repeated element"],starterCode:`// productCards.js
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
</template>`,solutionExplanation:"We define the products array in the JS controller and use for:each in the template to iterate it. Each product card uses if:true and if:false to show the correct stock status. The key attribute on the repeated element is required for efficient DOM updates.",testCases:[{id:"tc1",description:"Defines products array in JS",pattern:"products\\s*=\\s*\\[",errorMessage:"Define a products array in your LightningElement class."},{id:"tc2",description:"Uses for:each directive",pattern:"for:each=\\{products\\}",errorMessage:"Use for:each={products} in the template to render the list."},{id:"tc3",description:"Uses for:item directive",pattern:"for:item=",errorMessage:'Add for:item="product" alongside for:each to name the loop variable.'},{id:"tc4",description:"Has key attribute on repeated element",pattern:"key=\\{",errorMessage:"Add key={product.id} to the element directly inside the for:each template."},{id:"tc5",description:"Uses if:true or if:false for inStock",pattern:"if:true=\\{|if:false=\\{",errorMessage:"Use if:true or if:false to conditionally show In Stock / Out of Stock."}]},{id:"challenge-triggers-intro",lessonId:"apex-triggers-intro",title:"Lead Auto-Enrichment Trigger",description:"Write a before insert trigger on Lead that sets default field values when a new Lead is created.",difficulty:"intermediate",instructions:["Create a trigger named LeadTrigger on the Lead object for before insert",`If the Lead's LeadSource is blank, set it to "Web"`,`If the Lead's Rating is null, set it to "Cold"`,`If the Lead's Company is blank, set Company to "Unknown"`,"Loop through Trigger.new and apply the defaults","Do NOT use any DML statements (before trigger saves automatically)"],starterCode:`// Write a before insert trigger on Lead
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
}`,solutionExplanation:"In a before insert trigger, we iterate Trigger.new and directly set field values. No update DML is needed — the platform automatically saves these modified values when the transaction completes.",testCases:[{id:"tc1",description:"Declares trigger on Lead with before insert",pattern:"trigger\\s+\\w+\\s+on\\s+Lead\\s*\\(.*before\\s+insert",errorMessage:'Declare a trigger on the Lead object with the "before insert" event.'},{id:"tc2",description:"Loops through Trigger.new",pattern:"for\\s*\\(\\s*Lead\\s+\\w+\\s*:\\s*Trigger\\.new\\s*\\)",errorMessage:"Loop through Trigger.new using a for-each: for (Lead l : Trigger.new)"},{id:"tc3",description:"Sets LeadSource default",pattern:"LeadSource\\s*=",errorMessage:"Set the LeadSource field when it is blank."},{id:"tc4",description:"Sets Rating default",pattern:"Rating\\s*=",errorMessage:"Set the Rating field when it is null."},{id:"tc5",description:"No DML statements inside the trigger",pattern:"^(?!.*\\b(insert|update|upsert)\\s+[a-z])",errorMessage:"Do not use DML inside a before insert trigger — field changes are saved automatically."}]},{id:"challenge-triggers-context",lessonId:"apex-triggers-context",title:"Opportunity Stage Change Tracker",description:"Write a trigger that detects when an Opportunity's StageName changes and stamps a custom field with the previous stage.",difficulty:"intermediate",instructions:["Create a before update trigger on Opportunity","Loop through Trigger.new","For each opportunity, get the old version from Trigger.oldMap","If StageName has changed, set the custom field Previous_Stage__c to the OLD stage name",'If StageName changed to "Closed Won", also set CloseDate to today if CloseDate is null'],starterCode:`trigger OpportunityTrigger on Opportunity (before update) {
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
}`,solutionExplanation:"We access each record's previous values via Trigger.oldMap.get(opp.Id). Comparing the new StageName to the old one detects changes. All field assignments happen directly on Trigger.new records — no extra DML needed in a before trigger.",testCases:[{id:"tc1",description:"Declares before update trigger on Opportunity",pattern:"trigger\\s+\\w+\\s+on\\s+Opportunity\\s*\\(.*before\\s+update",errorMessage:'Declare a trigger on Opportunity with "before update".'},{id:"tc2",description:"Uses Trigger.oldMap",pattern:"Trigger\\.oldMap",errorMessage:"Use Trigger.oldMap to access the previous record values."},{id:"tc3",description:"Compares StageName old vs new",pattern:"StageName\\s*!=",errorMessage:"Compare opp.StageName to old.StageName to detect a stage change."},{id:"tc4",description:"Sets Previous_Stage__c",pattern:"Previous_Stage__c\\s*=",errorMessage:"Set Previous_Stage__c to the old StageName when the stage changes."}]},{id:"challenge-apex-exceptions",lessonId:"apex-exception-handling",title:"Build a Safe Account Lookup Service",description:"Write an AccountLookupService class that gracefully handles missing records and reports errors instead of crashing.",difficulty:"beginner",instructions:["Create a public class AccountLookupService","Add a custom inner exception class: AccountNotFoundException extending Exception","Create a static method getAccountName(Id accountId) that returns a String","Inside the method, use a try/catch block to query Account by Id","If the query returns no results (QueryException), throw AccountNotFoundException with a descriptive message",'Add a finally block that logs "Lookup complete" with System.debug',"Return the account Name on success"],starterCode:`public class AccountLookupService {

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
}`,hints:["Custom exceptions use: public class MyException extends Exception {}","Catch QueryException specifically before the generic Exception","The finally block runs even when you throw a new exception from catch","Use accountId in the AccountNotFoundException message to help debugging"],solutionExplanation:"The key insight is using specific exception types in the right order: catch QueryException for missing records, then throw a custom AccountNotFoundException so callers get a meaningful error. The finally block always executes, making it ideal for cleanup and logging.",testCases:[{id:"tc1",description:"Defines custom AccountNotFoundException",pattern:"AccountNotFoundException\\s+extends\\s+Exception",errorMessage:"Define a custom inner class: public class AccountNotFoundException extends Exception {}"},{id:"tc2",description:"Uses try block with SOQL query",pattern:"try\\s*\\{",errorMessage:"Wrap the SOQL query in a try block."},{id:"tc3",description:"Catches QueryException",pattern:"catch\\s*\\(\\s*QueryException",errorMessage:"Catch QueryException specifically to handle missing records."},{id:"tc4",description:"Throws AccountNotFoundException from catch",pattern:"throw\\s+new\\s+AccountNotFoundException",errorMessage:"Throw a new AccountNotFoundException from the catch block."},{id:"tc5",description:"Has finally block with System.debug",pattern:"finally\\s*\\{[^}]*System\\.debug",errorMessage:"Add a finally block that calls System.debug to log completion."}]},{id:"challenge-apex-test-basics",lessonId:"apex-test-basics",title:"Write Tests for a Discount Calculator",description:"Write a complete test class for the DiscountCalculator class, covering happy path, edge cases, and verifying governor limit isolation.",difficulty:"intermediate",instructions:["Create a test class DiscountCalculatorTest annotated with @isTest","Write a test method testApplyDiscount_twentyPercent that verifies 20% discount on $100 = $80","Write a test method testApplyDiscount_noDiscount that verifies 0% discount returns the original price","Write a test method testApplyDiscount_fullDiscount that verifies 100% discount returns $0","Wrap the method-under-test call with Test.startTest() and Test.stopTest()","Use System.assertEquals(expected, actual, message) with correct argument order"],starterCode:`// The class you are testing (already exists in the org):
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
}`,hints:["Implement both Queueable and Database.AllowsCallouts to allow callouts in async context","Store contactIds as a private instance field — assign it in the constructor","Use WHERE Id IN :contactIds for the bulk query","JSON.serialize(c) converts a Contact record to a JSON string for the HTTP body"],solutionExplanation:"Queueable classes implement Queueable and Database.AllowsCallouts. The execute() method re-queries using the stored IDs (never pass sObjects to async context) and processes each contact. System.enqueueJob() would chain a next job.",testCases:[{id:"tc1",description:"Implements Queueable and Database.AllowsCallouts",pattern:"implements\\s+Queueable.*Database\\.AllowsCallouts|implements\\s+Database\\.AllowsCallouts.*Queueable",errorMessage:"Implement both Queueable and Database.AllowsCallouts to enable callouts in async context."},{id:"tc2",description:"Has a List<Id> field for contactIds",pattern:"List<Id>\\s+contactIds",errorMessage:"Declare a private List<Id> contactIds field."},{id:"tc3",description:"Has execute(QueueableContext ctx) method",pattern:"void\\s+execute\\s*\\(\\s*QueueableContext",errorMessage:"Implement the execute(QueueableContext ctx) method."},{id:"tc4",description:"Queries contacts inside execute",pattern:"SELECT.*FROM\\s+Contact\\s+WHERE\\s+Id\\s+IN",errorMessage:"Query contacts using WHERE Id IN :contactIds inside execute()."},{id:"tc5",description:"Makes HTTP callout",pattern:"new\\s+Http\\(\\)\\.send|Http\\s+http.*http\\.send",errorMessage:"Make an HTTP callout using new Http().send(req) for each contact."}]},{id:"challenge-apex-batch",lessonId:"apex-batch-apex",title:"Write a Batch Job to Archive Old Cases",description:"Build a batch class that finds Cases closed more than 365 days ago and sets their IsArchived__c field to true.",difficulty:"intermediate",instructions:["Create a public class ArchiveCasesBatch that implements Database.Batchable<SObject>",'Implement start() — return a QueryLocator for Cases where Status = "Closed" and ClosedDate <= 365 days ago',"Implement execute() — set IsArchived__c = true on each Case in scope, then update scope (not in a loop)",'Implement finish() — log "Archive batch complete" with System.debug'],starterCode:`public class ArchiveCasesBatch implements Database.Batchable<SObject> {

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
}`,hints:["@AuraEnabled(cacheable=true) must be on the Apex method for @wire to work","Import path: @salesforce/apex/ClassName.methodName","@wire(methodName, { paramName: '$property' }) binds the wire adapter","The $ prefix on '$recordId' makes it reactive — re-fetches when recordId changes"],solutionExplanation:"@AuraEnabled(cacheable=true) is required for @wire to call the method. The import path is @salesforce/apex/ClassName.methodName. The $ prefix on $recordId makes the wire reactive — it re-calls when recordId changes.",testCases:[{id:"tc1",description:"Apex method has @AuraEnabled(cacheable=true)",pattern:"@AuraEnabled\\(cacheable\\s*=\\s*true\\)",errorMessage:"Add @AuraEnabled(cacheable=true) to the Apex method."},{id:"tc2",description:"Apex method queries Contact",pattern:"SELECT.*FROM\\s+Contact\\s+WHERE\\s+AccountId",errorMessage:"Query Contact records filtering by AccountId = :accountId."},{id:"tc3",description:"LWC imports the Apex method",pattern:"import.*getContactsByAccount.*from\\s+'@salesforce/apex/ContactListService",errorMessage:"Import getContactsByAccount from '@salesforce/apex/ContactListService.getContactsByAccount'"},{id:"tc4",description:"Uses @wire with reactive accountId",pattern:"@wire\\s*\\(\\s*getContactsByAccount.*\\$recordId",errorMessage:"Use @wire(getContactsByAccount, { accountId: '$recordId' }) contacts;"},{id:"tc5",description:"Has hasContacts getter",pattern:"get\\s+hasContacts",errorMessage:"Add a getter hasContacts that returns true when contacts.data has records."}]}],Ld=e=>Ed.find(t=>t.id===e);function _m(){const{progress:e,getLevel:t,resetProgress:n}=zs(),{level:r,title:s,next:a}=t(),o=e.completedLessons.length,l=e.completedChallenges.length,c=Ye.length,d=Ed.length,p=Ye.find(x=>!e.completedLessons.includes(x.id)),m=Ye.filter(x=>e.completedLessons.includes(x.id)).slice(-3).reverse(),f=a===1/0?e.xp:a,S=a===1/0?100:Math.round(e.xp/f*100),v=[{id:"apex-basics",label:"Apex Basics",path:"/apex",color:"blue",colorClass:"bg-sf-blue",icon:i.jsx(xe,{className:"w-4 h-4"})},{id:"soql",label:"SOQL",path:"/soql",color:"green",colorClass:"bg-sf-teal",icon:i.jsx(Qs,{className:"w-4 h-4"})},{id:"dml",label:"DML",path:"/apex",color:"orange",colorClass:"bg-sf-orange",icon:i.jsx(Bl,{className:"w-4 h-4"})}],y=[{to:"/soql",label:"SOQL Explorer",color:"text-sf-teal bg-teal-50 hover:bg-teal-100"},{to:"/debug",label:"Debug Lab",color:"text-sf-orange bg-orange-50 hover:bg-orange-100"},{to:"/missions",label:"Missions",color:"text-sf-purple bg-purple-50 hover:bg-purple-100"},{to:"/about",label:"About",color:"text-gray-600 bg-gray-50 hover:bg-gray-100"}];return i.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[i.jsxs("div",{className:"flex items-center justify-between mb-8",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:"My Dashboard"}),i.jsx("p",{className:"text-gray-500 text-sm mt-0.5",children:"Track your Salesforce learning journey"})]}),i.jsxs("button",{onClick:()=>{confirm("Reset all progress? This cannot be undone.")&&n()},className:"text-xs text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50",children:[i.jsx(Td,{className:"w-3.5 h-3.5"})," Reset progress"]})]}),i.jsxs("div",{className:"gradient-hero text-white rounded-2xl p-6 mb-6 relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-16 translate-x-16"}),i.jsxs("div",{className:"relative flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"text-blue-200 text-xs font-medium uppercase tracking-wider mb-1",children:"Current Level"}),i.jsxs("div",{className:"text-2xl font-extrabold",children:["Level ",r,": ",s]}),i.jsxs("div",{className:"flex items-center gap-3 mt-4 mb-2 text-sm text-blue-200",children:[i.jsxs("span",{className:"font-semibold text-white",children:[e.xp," XP"]}),a!==1/0&&i.jsxs("span",{children:["→ ",a," XP for Level ",r+1]})]}),i.jsx("div",{className:"w-full max-w-xs bg-white/20 rounded-full h-2 mt-1",children:i.jsx("div",{className:"bg-yellow-400 h-2 rounded-full transition-all duration-700",style:{width:`${S}%`}})})]}),i.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20",children:i.jsx(pt,{className:"w-7 h-7 text-yellow-300"})})]})]}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[{icon:i.jsx(nt,{className:"w-5 h-5 text-sf-blue"}),label:"Lessons Done",value:o,total:c},{icon:i.jsx(xe,{className:"w-5 h-5 text-violet-500"}),label:"Challenges",value:l,total:d},{icon:i.jsx(pt,{className:"w-5 h-5 text-yellow-500"}),label:"Total XP",value:e.xp,total:null},{icon:i.jsx(yo,{className:"w-5 h-5 text-sf-purple"}),label:"Level",value:r,total:6}].map(x=>i.jsxs("div",{className:"card text-center p-5",children:[i.jsx("div",{className:"flex justify-center mb-2",children:x.icon}),i.jsx("div",{className:"text-2xl font-extrabold text-gray-900",children:x.value}),x.total!==null&&i.jsxs("div",{className:"text-xs text-gray-400",children:["of ",x.total]}),i.jsx("div",{className:"text-xs text-gray-500 mt-1",children:x.label}),x.total!==null&&i.jsx("div",{className:"mt-3",children:i.jsx(Cs,{value:x.value,max:x.total,size:"sm"})})]},x.label))}),i.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(nt,{className:"w-5 h-5 text-sf-blue"})," Continue Learning"]}),p?i.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-4",children:[i.jsx("div",{className:"text-xs font-semibold text-sf-blue uppercase tracking-wider mb-1",children:"Up Next"}),i.jsx("div",{className:"font-bold text-gray-900",children:p.title}),i.jsx("div",{className:"text-sm text-gray-500 mt-1 mb-3",children:p.description}),i.jsxs(q,{to:`/lesson/${p.id}`,className:"btn-primary text-xs px-4 py-2",children:["Start Lesson ",i.jsx($n,{className:"w-3.5 h-3.5"})]})]}):i.jsxs("div",{className:"success-box mb-4",children:[i.jsx("p",{className:"font-semibold text-emerald-800",children:"All lessons complete!"}),i.jsx(q,{to:"/missions",className:"btn-primary mt-3 text-xs inline-flex",children:"View Missions"})]}),m.length>0&&i.jsxs("div",{className:"space-y-1",children:[i.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",children:"Recently Completed"}),m.map(x=>i.jsxs(q,{to:`/lesson/${x.id}`,className:"flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group",children:[i.jsx(fo,{className:"w-4 h-4 text-emerald-500 shrink-0"}),i.jsx("span",{className:"text-sm text-gray-700 group-hover:text-gray-900",children:x.title}),e.quizScores[x.id]!==void 0&&i.jsxs("span",{className:"ml-auto text-xs text-gray-400",children:[e.quizScores[x.id],"%"]})]},x.id))]})]}),i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(Bl,{className:"w-5 h-5 text-sf-blue"})," Module Progress"]}),i.jsx("div",{className:"space-y-5",children:v.map(x=>{const h=Ye.filter(b=>b.moduleId===x.id),u=h.filter(b=>e.completedLessons.includes(b.id)).length,g=h.length||1;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs(q,{to:x.path,className:"flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-sf-blue transition-colors",children:[i.jsx("span",{className:`w-7 h-7 rounded-lg ${x.colorClass} text-white flex items-center justify-center`,children:x.icon}),x.label]}),i.jsxs("span",{className:"text-xs font-medium text-gray-400",children:[u,"/",h.length]})]}),i.jsx(Cs,{value:u,max:g,color:x.color,size:"sm"})]},x.id)})}),i.jsx("div",{className:"divider"}),i.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"Quick Links"}),i.jsx("div",{className:"grid grid-cols-2 gap-2",children:y.map(x=>i.jsx(q,{to:x.to,className:`text-center py-3 px-2 rounded-xl text-xs font-semibold transition-colors ${x.color}`,children:x.label},x.to))})]})]}),e.badges.length>0&&i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(pt,{className:"w-5 h-5 text-yellow-500"})," Earned Badges"]}),i.jsx("div",{className:"flex flex-wrap gap-3",children:e.badges.map(x=>i.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl px-4 py-2.5",children:[i.jsx(pt,{className:"w-4 h-4 text-yellow-500"}),i.jsx("span",{className:"text-sm font-semibold text-yellow-800 capitalize",children:x.replace(/-/g," ")})]},x))})]})]})}const Ql=[{id:"apex-basics",title:"Apex Basics",description:"Learn the fundamentals of the Apex programming language — variables, control flow, collections, and classes.",icon:"Code2",color:"#0176D3",lessons:["apex-variables","apex-strings","apex-conditionals","apex-loops","apex-lists","apex-sets","apex-maps","apex-classes"],estimatedHours:4},{id:"soql",title:"SOQL",description:"Master Salesforce Object Query Language to retrieve records from the Salesforce database.",icon:"Database",color:"#06A59A",lessons:["soql-basics","soql-where-filters","soql-relationships","soql-aggregate","soql-subqueries","soql-performance"],estimatedHours:6},{id:"dml",title:"DML Operations",description:"Learn how to create, update, delete, and upsert records using Data Manipulation Language.",icon:"Save",color:"#FF5D2D",lessons:["apex-dml"],estimatedHours:2},{id:"triggers",title:"Apex Triggers",description:"Automate Salesforce processes by responding to record events with Apex triggers.",icon:"Zap",color:"#9050E9",lessons:["apex-triggers-intro","apex-triggers-context","apex-triggers-handler"],estimatedHours:4},{id:"lwc",title:"Lightning Web Components",description:"Build modern Salesforce UIs with the Lightning Web Components framework.",icon:"Layout",color:"#FFC849",lessons:["lwc-intro","lwc-data-binding"],estimatedHours:4},{id:"integrations",title:"Integrations",description:"Connect Salesforce to external systems using REST APIs and callouts.",icon:"Globe",color:"#2E844A",lessons:["apex-callouts"],estimatedHours:3},{id:"apex-exceptions",title:"Exception Handling",description:"Write bulletproof Apex code that catches errors, recovers gracefully, and logs failures.",icon:"ShieldAlert",color:"#E74C3C",lessons:["apex-exception-handling"],estimatedHours:2},{id:"apex-testing",title:"Apex Testing",description:"Write automated test classes to verify your code and meet Salesforce deployment requirements.",icon:"FlaskConical",color:"#27AE60",lessons:["apex-test-basics","apex-test-data"],estimatedHours:3},{id:"governor-limits",title:"Governor Limits",description:"Understand Salesforce platform limits and write bulkified, limit-safe Apex code.",icon:"Gauge",color:"#E67E22",lessons:["apex-governor-limits"],estimatedHours:2},{id:"async-apex",title:"Asynchronous Apex",description:"Run long-running operations, process millions of records, and schedule jobs with async Apex.",icon:"Timer",color:"#8E44AD",lessons:["apex-future-queueable","apex-batch-apex"],estimatedHours:4},{id:"apex-security",title:"Apex Security & Sharing",description:"Enforce Salesforce sharing rules and field-level security in your Apex code.",icon:"Lock",color:"#2C3E50",lessons:["apex-sharing-security"],estimatedHours:2},{id:"soql-advanced",title:"Advanced SOQL",description:"Build queries dynamically at runtime and search across multiple objects with SOSL.",icon:"DatabaseZap",color:"#1ABC9C",lessons:["soql-dynamic-sosl"],estimatedHours:2},{id:"platform-events",title:"Platform Events & CDC",description:"Build real-time, event-driven integrations using Platform Events and Change Data Capture.",icon:"Radio",color:"#3498DB",lessons:["platform-events-intro"],estimatedHours:2},{id:"flows-automation",title:"Flows & Automation",description:"Automate business processes with Salesforce Flows and expose Apex logic via invocable methods.",icon:"Workflow",color:"#F39C12",lessons:["flows-invocable-methods"],estimatedHours:3},{id:"apex-design-patterns",title:"Apex Design Patterns",description:"Write scalable, maintainable Apex using proven architectural patterns used by senior developers.",icon:"Layers",color:"#6C3483",lessons:["apex-trigger-handler-pattern","apex-service-selector"],estimatedHours:4},{id:"deployment",title:"Deployment & DevOps",description:"Move Salesforce metadata safely from sandbox to production using Change Sets and SFDX.",icon:"Rocket",color:"#1A5276",lessons:["salesforce-deployment"],estimatedHours:2},{id:"data-model",title:"Salesforce Data Model",description:"Understand standard objects, custom objects, relationships, and field types in Salesforce.",icon:"LayoutList",color:"#148F77",lessons:["salesforce-data-model"],estimatedHours:2},{id:"permission-model",title:"Profiles & Permissions",description:"Control data access with Profiles, Roles, Permission Sets, and sharing rules.",icon:"UserCheck",color:"#784212",lessons:["profiles-permissions-intro"],estimatedHours:2},{id:"reports-dashboards",title:"Reports & Dashboards",description:"Build reports and dashboards to surface actionable insights from your Salesforce data.",icon:"BarChart3",color:"#1F618D",lessons:["reports-dashboards-intro"],estimatedHours:2},{id:"lwc-advanced",title:"Advanced LWC",description:"Connect Lightning Web Components to Apex, wire services, and navigate the Salesforce platform.",icon:"Sparkles",color:"#B7950B",lessons:["lwc-wire-apex"],estimatedHours:3}];function qm({difficulty:e}){const t={beginner:{label:"Beginner",class:"bg-green-100 text-green-700"},intermediate:{label:"Intermediate",class:"bg-yellow-100 text-yellow-700"},advanced:{label:"Advanced",class:"bg-red-100 text-red-700"}},{label:n,class:r}=t[e]||t.beginner;return i.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${r}`,children:n})}function Pm({lesson:e,isCompleted:t,isLocked:n=!1,quizScore:r}){const s=i.jsx("div",{className:`bg-white rounded-xl border-2 p-5 transition-all duration-200 ${n?"border-gray-100 opacity-60 cursor-not-allowed":t?"border-green-200 hover:border-green-400 hover:shadow-sf-lg cursor-pointer":"border-gray-100 hover:border-sf-blue hover:shadow-sf-lg cursor-pointer"}`,children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex-shrink-0 mt-0.5",children:n?i.jsx("div",{className:"w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center",children:i.jsx(xm,{size:16,className:"text-sf-gray-5"})}):t?i.jsx("div",{className:"w-9 h-9 rounded-full bg-green-100 flex items-center justify-center",children:i.jsx(Ke,{size:18,className:"text-sf-green"})}):i.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center",children:i.jsx(nt,{size:16,className:"text-sf-blue"})})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between gap-2",children:[i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold text-sm ${n?"text-sf-gray-5":"text-sf-gray-9"}`,children:e.title}),i.jsx("p",{className:`text-xs mt-0.5 ${n?"text-sf-gray-4":"text-sf-gray-6"}`,children:e.subtitle})]}),!n&&i.jsx(wt,{size:16,className:"text-sf-gray-4 flex-shrink-0 mt-0.5"})]}),i.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[i.jsx(qm,{difficulty:e.difficulty}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(Bs,{size:11}),e.duration," min"]}),t&&r!==void 0&&i.jsxs("span",{className:"text-xs text-sf-green font-medium",children:["Quiz: ",r,"%"]})]})]})]})});return n?s:i.jsx(q,{to:`/lesson/${e.id}`,className:"block",children:s})}const Fm={"apex-basics":"bg-sf-blue",soql:"bg-sf-teal",dml:"bg-sf-green",triggers:"bg-purple-500",lwc:"bg-yellow-500",integrations:"bg-green-600","apex-exceptions":"bg-red-500","apex-testing":"bg-emerald-500","governor-limits":"bg-orange-500","async-apex":"bg-violet-500","apex-security":"bg-slate-600","soql-advanced":"bg-teal-600","platform-events":"bg-blue-500","flows-automation":"bg-amber-500","apex-design-patterns":"bg-indigo-600",deployment:"bg-sky-700","data-model":"bg-cyan-600","permission-model":"bg-brown-600","reports-dashboards":"bg-blue-700","lwc-advanced":"bg-yellow-600"};function Wm(){const e=w.useContext(xo),{progress:t}=e,n=Ye.filter(a=>Ql.some(o=>o.id===a.moduleId&&o.lessons.length>0)),r=n.filter(a=>t.completedLessons.includes(a.id)).length,s=n.reduce((a,o)=>a+(typeof o.duration=="number"?o.duration:0),0);return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sf-blue text-sm mb-2",children:[i.jsx(nt,{size:14}),i.jsx(q,{to:"/dashboard",className:"hover:underline",children:"Dashboard"}),i.jsx(wt,{size:12,className:"text-sf-gray-4"}),i.jsx("span",{children:"Apex Learning Path"})]}),i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:"Salesforce Developer Learning Path"}),i.jsx("p",{className:"text-sf-gray-6 mt-1 max-w-2xl",children:"Master Salesforce development from the ground up — Apex, SOQL, Triggers, LWC, integrations, and beyond."}),i.jsxs("div",{className:"flex items-center gap-6 mt-4 flex-wrap",children:[i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(nt,{size:15})," ",n.length," lessons"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(Bs,{size:15})," ~",Math.round(s/60)," hours"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(Ke,{size:15,className:"text-sf-green"})," ",r," completed"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(xe,{size:15})," ",n.filter(a=>a.challengeId).length," challenges"]})]}),i.jsx(Cs,{value:r,max:n.length,className:"mt-3 max-w-xs",showLabel:!0,label:"Overall progress"})]}),Ql.map((a,o)=>{const l=Ye.filter(c=>c.moduleId===a.id);return l.length===0?null:i.jsx(Bm,{title:`Module ${o+1}: ${a.title}`,description:a.description,lessons:l,progress:t,color:Fm[a.id]??"bg-sf-blue"},a.id)})]})}function Bm({title:e,description:t,lessons:n,progress:r,color:s}){if(n.length===0)return null;const a=n.filter(o=>r.completedLessons.includes(o.id)).length;return i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[i.jsx("div",{className:`w-1 h-full min-h-[3rem] rounded-full ${s} flex-shrink-0 mt-1`,style:{width:4}}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h2",{className:"font-bold text-sf-gray-9",children:e}),i.jsxs("span",{className:"text-sm text-sf-gray-5",children:[a,"/",n.length]})]}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:t}),i.jsx(Cs,{value:a,max:n.length,size:"sm",className:"mt-2 max-w-[200px]"})]})]}),i.jsx("div",{className:"space-y-3 pl-4",children:n.map((o,l)=>{const c=r.completedLessons.includes(o.id),d=l>0&&!r.completedLessons.includes(n[l-1].id)&&!c;return i.jsx(Pm,{lesson:o,isCompleted:c,isLocked:d,quizScore:r.quizScores[o.id]},o.id)})})]})}function Um({questions:e,onComplete:t}){const[n,r]=w.useState(0),[s,a]=w.useState(null),[o,l]=w.useState(!1),[c,d]=w.useState([]),[p,m]=w.useState(!1),f=e[n],S=s===(f==null?void 0:f.correct),v=h=>{if(o)return;a(h),l(!0);const u=h===f.correct;d(g=>[...g,u])},y=()=>{if(n<e.length-1)r(h=>h+1),a(null),l(!1);else{const h=c.filter(Boolean).length+(s===(f==null?void 0:f.correct)?1:0);m(!0),t(h,e.length)}},x=()=>{r(0),a(null),l(!1),d([]),m(!1)};if(p){const h=c.filter(Boolean).length,u=Math.round(h/e.length*100);return i.jsxs("div",{className:"text-center py-8",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4",children:i.jsx(pt,{size:28,className:"text-yellow-600"})}),i.jsx("h3",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Quiz Complete!"}),i.jsxs("p",{className:"text-sf-gray-6 mb-1",children:["You got ",i.jsxs("span",{className:"font-semibold text-sf-gray-9",children:[h," of ",e.length]})," correct"]}),i.jsxs("div",{className:`text-3xl font-bold mt-4 mb-6 ${u>=80?"text-sf-green":u>=60?"text-yellow-500":"text-sf-red"}`,children:[u,"%"]}),u>=80?i.jsx("p",{className:"text-sf-green font-medium mb-6",children:"Excellent work! You've mastered this material."}):u>=60?i.jsx("p",{className:"text-yellow-600 font-medium mb-6",children:"Good effort! Review the explanations to strengthen your understanding."}):i.jsx("p",{className:"text-sf-red font-medium mb-6",children:"Keep studying! Review the lesson and try again."}),i.jsx("button",{onClick:x,className:"btn-secondary",children:"Retake Quiz"})]})}return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("span",{className:"text-sm text-sf-gray-6",children:["Question ",n+1," of ",e.length]}),i.jsx("div",{className:"flex gap-1",children:e.map((h,u)=>i.jsx("div",{className:`w-2 h-2 rounded-full ${u<c.length?c[u]?"bg-sf-green":"bg-sf-red":u===n?"bg-sf-blue":"bg-gray-200"}`},u))})]}),i.jsx("p",{className:"text-sf-gray-9 font-medium mb-4 leading-relaxed",children:f.question}),i.jsx("div",{className:"space-y-3 mb-4",children:f.options.map((h,u)=>{let g="w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ";return o?u===f.correct?g+="border-green-400 bg-green-50 text-sf-green":u===s&&!S?g+="border-red-400 bg-red-50 text-sf-red":g+="border-gray-100 text-sf-gray-5 cursor-not-allowed":g+="border-gray-200 hover:border-sf-blue hover:bg-blue-50 text-sf-gray-8 cursor-pointer",i.jsx("button",{className:g,onClick:()=>v(u),children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0",style:{borderColor:o&&u===f.correct?"#2E844A":o&&u===s?"#EA001E":"#C9C7C5"},children:String.fromCharCode(65+u)}),o&&u===f.correct&&i.jsx(Ke,{size:15,className:"text-sf-green flex-shrink-0"}),o&&u===s&&!S&&i.jsx(yi,{size:15,className:"text-sf-red flex-shrink-0"}),i.jsx("span",{children:h})]})},u)})}),o&&i.jsx("div",{className:`p-4 rounded-lg mb-4 text-sm ${S?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:i.jsxs("div",{className:"flex items-start gap-2",children:[S?i.jsx(Ke,{size:16,className:"text-sf-green mt-0.5 flex-shrink-0"}):i.jsx(yi,{size:16,className:"text-sf-red mt-0.5 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("p",{className:`font-semibold mb-1 ${S?"text-sf-green":"text-sf-red"}`,children:S?"Correct!":"Not quite."}),i.jsx("p",{className:"text-sf-gray-7",children:f.explanation})]})]})}),o&&i.jsxs("button",{onClick:y,className:"btn-primary flex items-center gap-2",children:[n<e.length-1?"Next Question":"See Results",i.jsx(wt,{size:16})]})]})}function zl(e){return e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>")}function Hm({block:e}){const t={note:i.jsx(Id,{size:16,className:"text-sf-blue flex-shrink-0 mt-0.5"}),warning:i.jsx(Hs,{size:16,className:"text-orange-500 flex-shrink-0 mt-0.5"}),tip:i.jsx(ws,{size:16,className:"text-yellow-500 flex-shrink-0 mt-0.5"})},n={note:"note-box",warning:"warning-box",tip:"hint-box"};return e.type==="explanation"?i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-3",children:e.title}),i.jsx("p",{className:"text-sf-gray-7 leading-relaxed",dangerouslySetInnerHTML:{__html:zl(e.text)}})]}):e.type==="example"?i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),e.text&&i.jsx("p",{className:"text-sf-gray-7 mb-3 leading-relaxed",children:e.text}),e.code&&i.jsxs("div",{className:"rounded-xl overflow-hidden border border-gray-200",children:[i.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),i.jsx("span",{className:"text-sf-gray-5 text-xs ml-2 font-mono",children:"Apex"})]}),i.jsx("pre",{className:"code-block rounded-none overflow-x-auto",children:i.jsx("code",{children:e.code})}),e.output&&i.jsxs("div",{className:"bg-gray-800 border-t border-gray-700 px-4 py-3",children:[i.jsx("div",{className:"text-xs text-sf-gray-5 mb-1 font-mono",children:"// Output:"}),i.jsx("pre",{className:"text-green-400 text-sm font-mono whitespace-pre-wrap",children:e.output})]})]})]}):e.type==="note"||e.type==="warning"||e.type==="tip"?i.jsx("div",{className:`${n[e.type]||"note-box"} lesson-section`,children:i.jsxs("div",{className:"flex items-start gap-2",children:[t[e.type],i.jsxs("div",{children:[e.title&&i.jsx("p",{className:"font-semibold text-sm mb-1",children:e.title}),i.jsx("p",{className:"text-sm leading-relaxed",dangerouslySetInnerHTML:{__html:zl(e.text)}})]})]})}):i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),i.jsx("p",{className:"text-sf-gray-7",children:e.text})]})}function Qm(){const{lessonId:e}=fd();md();const t=w.useContext(xo),{progress:n,completeLesson:r,recordQuizScore:s,isLessonCompleted:a}=t,[o,l]=w.useState("lesson"),[c,d]=w.useState(!1),p=jm(e||"");if(!p)return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[i.jsx("h2",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Lesson not found"}),i.jsx(q,{to:"/apex",className:"text-sf-blue hover:underline",children:"Back to lessons"})]});const m=p.challengeId?Ld(p.challengeId):null,f=a(p.id),S=!!n.quizScores[p.id],v=Ye,y=v.findIndex(I=>I.id===p.id),x=y>0?v[y-1]:null,h=y<v.length-1?v[y+1]:null,u=()=>{r(p.id)},g=(I,A)=>{s(p.id,I,A),d(!0),I===A&&r(p.id)},b=[{id:"lesson",label:"Lesson",icon:nt},{id:"quiz",label:`Quiz (${p.quiz.length}Q)`,icon:Ke},...m?[{id:"challenge",label:"Challenge",icon:xe}]:[]];return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"flex items-center gap-1 text-sm text-sf-gray-5 mb-6",children:[i.jsx(q,{to:"/apex",className:"hover:text-sf-blue",children:"Apex Path"}),i.jsx(wt,{size:13}),i.jsx("span",{className:"text-sf-gray-7",children:p.title})]}),i.jsxs("div",{className:"card mb-6",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsxs("span",{className:"text-xs font-medium text-sf-blue bg-blue-50 px-2 py-0.5 rounded",children:["Lesson ",p.order]}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(Bs,{size:11})," ",p.duration," min"]}),f&&i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-green font-medium",children:[i.jsx(Ke,{size:12})," Completed"]})]}),i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:p.title}),i.jsx("p",{className:"text-sf-gray-6 mt-1",children:p.description})]}),!f&&i.jsxs("button",{onClick:u,className:"flex-shrink-0 flex items-center gap-1.5 text-sm text-sf-gray-6 border border-gray-200 hover:border-sf-green hover:text-sf-green px-3 py-1.5 rounded-lg transition-colors",children:[i.jsx(Ke,{size:14}),"Mark done"]})]}),i.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[i.jsx("p",{className:"text-xs font-semibold text-sf-gray-7 mb-2",children:"You will learn:"}),i.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1",children:p.learningObjectives.map((I,A)=>i.jsxs("li",{className:"flex items-start gap-1.5 text-xs text-sf-gray-6",children:[i.jsx("span",{className:"text-sf-blue mt-0.5",children:"•"}),I]},A))})]})]}),i.jsx("div",{className:"flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit",children:b.map(({id:I,label:A,icon:L})=>i.jsxs("button",{onClick:()=>l(I),className:`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${o===I?"bg-white text-sf-gray-9 shadow-sm":"text-sf-gray-6 hover:text-sf-gray-9"}`,children:[i.jsx(L,{size:14}),A,I==="quiz"&&S&&i.jsxs("span",{className:"text-xs text-sf-green ml-1",children:[n.quizScores[p.id],"%"]})]},I))}),o==="lesson"&&i.jsxs("div",{className:"card",children:[p.content.map((I,A)=>i.jsx(Hm,{block:I},A)),i.jsx("div",{className:"pt-6 border-t border-gray-100 mt-6",children:i.jsxs("button",{onClick:()=>l("quiz"),className:"btn-primary flex items-center gap-2",children:["Take the Quiz",i.jsx(wt,{size:16})]})})]}),o==="quiz"&&i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-lg font-bold text-sf-gray-9 mb-4",children:"Knowledge Check"}),i.jsx(Um,{questions:p.quiz,lessonId:p.id,onComplete:g}),c&&m&&i.jsx("div",{className:"mt-6 pt-6 border-t border-gray-100",children:i.jsxs("button",{onClick:()=>l("challenge"),className:"btn-primary flex items-center gap-2",children:["Try the Challenge",i.jsx(xe,{size:16})]})})]}),o==="challenge"&&m&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"flex items-start justify-between mb-4",children:i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold text-sf-gray-9",children:m.title}),i.jsx("p",{className:"text-sf-gray-6 text-sm mt-1",children:m.description})]})}),i.jsxs(q,{to:`/challenge/${m.id}`,className:"btn-primary inline-flex items-center gap-2",children:["Open Full Challenge Editor",i.jsx(xe,{size:15})]})]}),i.jsxs("div",{className:"flex items-center justify-between mt-6",children:[x?i.jsxs(q,{to:`/lesson/${x.id}`,className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue transition-colors",children:[i.jsx(pm,{size:16}),x.title]}):i.jsx("div",{}),h&&i.jsxs(q,{to:`/lesson/${h.id}`,className:"flex items-center gap-2 text-sm text-sf-blue font-medium hover:text-sf-blue-dark",children:[h.title,i.jsx(wt,{size:16})]})]})]})}const Od=[{name:"Account",label:"Account",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Industry",type:"string"},{name:"AnnualRevenue",type:"number"},{name:"NumberOfEmployees",type:"number"},{name:"BillingCity",type:"string"},{name:"BillingState",type:"string"},{name:"Phone",type:"string"},{name:"Type",type:"string"}],records:[{Id:"001A000001",Name:"TechVentures Inc",Industry:"Technology",AnnualRevenue:5e6,NumberOfEmployees:250,BillingCity:"San Francisco",BillingState:"CA",Phone:"415-555-0101",Type:"Customer"},{Id:"001A000002",Name:"HealthFirst Corp",Industry:"Healthcare",AnnualRevenue:8e6,NumberOfEmployees:500,BillingCity:"Boston",BillingState:"MA",Phone:"617-555-0102",Type:"Customer"},{Id:"001A000003",Name:"Capital Group",Industry:"Finance",AnnualRevenue:12e6,NumberOfEmployees:800,BillingCity:"New York",BillingState:"NY",Phone:"212-555-0103",Type:"Customer"},{Id:"001A000004",Name:"RetailMax",Industry:"Retail",AnnualRevenue:3e6,NumberOfEmployees:120,BillingCity:"Chicago",BillingState:"IL",Phone:"312-555-0104",Type:"Partner"},{Id:"001A000005",Name:"ManuPro Industries",Industry:"Manufacturing",AnnualRevenue:65e5,NumberOfEmployees:400,BillingCity:"Detroit",BillingState:"MI",Phone:"313-555-0105",Type:"Customer"},{Id:"001A000006",Name:"DataStream Analytics",Industry:"Technology",AnnualRevenue:25e5,NumberOfEmployees:80,BillingCity:"Austin",BillingState:"TX",Phone:"512-555-0106",Type:"Prospect"},{Id:"001A000007",Name:"EduLearn Systems",Industry:"Education",AnnualRevenue:12e5,NumberOfEmployees:60,BillingCity:"Seattle",BillingState:"WA",Phone:"206-555-0107",Type:"Customer"},{Id:"001A000008",Name:"GreenPath Energy",Industry:"Energy",AnnualRevenue:9e6,NumberOfEmployees:350,BillingCity:"Houston",BillingState:"TX",Phone:"832-555-0108",Type:"Customer"},{Id:"001A000009",Name:"Apex Consulting",Industry:"Technology",AnnualRevenue:4e6,NumberOfEmployees:180,BillingCity:"Denver",BillingState:"CO",Phone:"303-555-0109",Type:"Partner"},{Id:"001A000010",Name:"MedDevice Corp",Industry:"Healthcare",AnnualRevenue:15e6,NumberOfEmployees:1200,BillingCity:"Minneapolis",BillingState:"MN",Phone:"612-555-0110",Type:"Customer"}]},{name:"Contact",label:"Contact",fields:[{name:"Id",type:"id"},{name:"FirstName",type:"string"},{name:"LastName",type:"string"},{name:"Email",type:"string"},{name:"Title",type:"string"},{name:"Department",type:"string"},{name:"Phone",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"003A000001",FirstName:"Sarah",LastName:"Chen",Email:"sarah.chen@techventures.com",Title:"CTO",Department:"Engineering",Phone:"415-555-1001",AccountId:"001A000001"},{Id:"003A000002",FirstName:"Michael",LastName:"Torres",Email:"mtorres@healthfirst.com",Title:"CFO",Department:"Finance",Phone:"617-555-1002",AccountId:"001A000002"},{Id:"003A000003",FirstName:"Amanda",LastName:"Johnson",Email:"ajohnson@capitalgroup.com",Title:"VP Sales",Department:"Sales",Phone:"212-555-1003",AccountId:"001A000003"},{Id:"003A000004",FirstName:"David",LastName:"Park",Email:"dpark@retailmax.com",Title:"CEO",Department:"Executive",Phone:"312-555-1004",AccountId:"001A000004"},{Id:"003A000005",FirstName:"Lisa",LastName:"Smith",Email:"lsmith@manupro.com",Title:"COO",Department:"Operations",Phone:"313-555-1005",AccountId:"001A000005"},{Id:"003A000006",FirstName:"James",LastName:"Wilson",Email:"jwilson@datastream.com",Title:"CTO",Department:"Technology",Phone:"512-555-1006",AccountId:"001A000006"},{Id:"003A000007",FirstName:"Emily",LastName:"Garcia",Email:"egarcia@edulearn.com",Title:"Director",Department:"Product",Phone:"206-555-1007",AccountId:"001A000007"},{Id:"003A000008",FirstName:"Robert",LastName:"Martinez",Email:"rmartinez@greenpath.com",Title:"CEO",Department:"Executive",Phone:"832-555-1008",AccountId:"001A000008"}]},{name:"Opportunity",label:"Opportunity",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Amount",type:"number"},{name:"StageName",type:"string"},{name:"CloseDate",type:"date"},{name:"Probability",type:"number"},{name:"AccountId",type:"id"},{name:"OwnerId",type:"id"}],records:[{Id:"006A000001",Name:"TechVentures Platform License",Amount:85e3,StageName:"Closed Won",CloseDate:"2024-01-15",Probability:100,AccountId:"001A000001",OwnerId:"USER001"},{Id:"006A000002",Name:"HealthFirst Analytics Suite",Amount:125e3,StageName:"Closed Won",CloseDate:"2024-02-28",Probability:100,AccountId:"001A000002",OwnerId:"USER002"},{Id:"006A000003",Name:"Capital Group Premium",Amount:25e4,StageName:"Negotiation/Review",CloseDate:"2024-04-30",Probability:70,AccountId:"001A000003",OwnerId:"USER001"},{Id:"006A000004",Name:"RetailMax Expansion",Amount:45e3,StageName:"Proposal/Price Quote",CloseDate:"2024-05-15",Probability:50,AccountId:"001A000004",OwnerId:"USER003"},{Id:"006A000005",Name:"ManuPro ERP Integration",Amount:175e3,StageName:"Qualification",CloseDate:"2024-06-30",Probability:30,AccountId:"001A000005",OwnerId:"USER002"},{Id:"006A000006",Name:"DataStream Pro License",Amount:35e3,StageName:"Closed Won",CloseDate:"2024-01-31",Probability:100,AccountId:"001A000006",OwnerId:"USER003"},{Id:"006A000007",Name:"EduLearn LMS Platform",Amount:28e3,StageName:"Closed Lost",CloseDate:"2024-02-15",Probability:0,AccountId:"001A000007",OwnerId:"USER001"},{Id:"006A000008",Name:"GreenPath Smart Metering",Amount:32e4,StageName:"Negotiation/Review",CloseDate:"2024-05-31",Probability:80,AccountId:"001A000008",OwnerId:"USER002"}]},{name:"Case",label:"Case",fields:[{name:"Id",type:"id"},{name:"CaseNumber",type:"string"},{name:"Subject",type:"string"},{name:"Status",type:"string"},{name:"Priority",type:"string"},{name:"Origin",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"500A000001",CaseNumber:"00001001",Subject:"API connection timeout error",Status:"Open",Priority:"High",Origin:"Web",AccountId:"001A000001"},{Id:"500A000002",CaseNumber:"00001002",Subject:"Report export failing",Status:"In Progress",Priority:"Medium",Origin:"Email",AccountId:"001A000002"},{Id:"500A000003",CaseNumber:"00001003",Subject:"User cannot log in",Status:"Closed",Priority:"Critical",Origin:"Phone",AccountId:"001A000003"},{Id:"500A000004",CaseNumber:"00001004",Subject:"Data import questions",Status:"Open",Priority:"Low",Origin:"Web",AccountId:"001A000004"},{Id:"500A000005",CaseNumber:"00001005",Subject:"Integration sync failure",Status:"Escalated",Priority:"High",Origin:"Email",AccountId:"001A000005"}]}];function zm(e){try{const n=e.trim().replace(/\s+/g," ").toUpperCase().match(/FROM\s+(\w+)/i);if(!n)return{records:[],error:"Missing FROM clause",rowCount:0};const r=n[1],s=Od.find(v=>v.name.toUpperCase()===r.toUpperCase());if(!s)return{records:[],error:`Object '${r}' not found. Available: Account, Contact, Opportunity, Case`,rowCount:0};const a=e.match(/SELECT\s+([\s\S]+?)\s+FROM/i);if(!a)return{records:[],error:"Missing SELECT clause",rowCount:0};const l=a[1].split(",").map(v=>v.trim()),c=e.match(/LIMIT\s+(\d+)/i),d=c?parseInt(c[1]):200;let p=s.records.map(v=>({type:s.name,fields:v}));const m=e.match(/WHERE\s+([\s\S]+?)(?:\s+ORDER\s+BY|\s+LIMIT|\s+GROUP\s+BY|$)/i);if(m){const v=m[1].trim();p=$m(p,v,s)}const f=e.match(/ORDER\s+BY\s+(\w+)(?:\s+(ASC|DESC))?/i);if(f){const v=f[1],y=(f[2]||"ASC").toUpperCase();p=p.sort((x,h)=>{const u=x.fields[v],g=h.fields[v];if(u==null&&g==null)return 0;if(u==null)return y==="ASC"?1:-1;if(g==null)return y==="ASC"?-1:1;if(typeof u=="number"&&typeof g=="number")return y==="ASC"?u-g:g-u;const b=String(u).toLowerCase(),I=String(g).toLowerCase();return y==="ASC"?b.localeCompare(I):I.localeCompare(b)})}p=p.slice(0,d);const S=p.map(v=>({type:v.type,fields:l.reduce((y,x)=>{if(x==="*"||x.toUpperCase()==="ID")y[x]=v.fields.Id||null;else{const h=Object.keys(v.fields).find(u=>u.toLowerCase()===x.toLowerCase());y[x]=h?v.fields[h]:null}return y},{})}));return{records:S,error:null,rowCount:S.length}}catch(t){return{records:[],error:`Query error: ${t instanceof Error?t.message:String(t)}`,rowCount:0}}}function $m(e,t,n){return e.filter(r=>{try{const s=t.match(/^(\w+)\s*=\s*'([^']*)'$/i),a=t.match(/^(\w+)\s*!=\s*'([^']*)'$/i),o=t.match(/^(\w+)\s*>\s*(\d+(?:\.\d+)?)$/i),l=t.match(/^(\w+)\s*<\s*(\d+(?:\.\d+)?)$/i),c=t.match(/^(\w+)\s*>=\s*(\d+(?:\.\d+)?)$/i),d=t.match(/^(\w+)\s+LIKE\s+'([^']*)'/i),p=t.match(/^(\w+)\s+IN\s+\(([^)]+)\)/i),m=f=>{const S=Object.keys(r.fields).find(v=>v.toLowerCase()===f.toLowerCase());return S?r.fields[S]:null};if(s){const f=m(s[1]);return String(f).toLowerCase()===s[2].toLowerCase()}if(a){const f=m(a[1]);return String(f).toLowerCase()!==a[2].toLowerCase()}if(o){const f=m(o[1]);return typeof f=="number"&&f>parseFloat(o[2])}if(l){const f=m(l[1]);return typeof f=="number"&&f<parseFloat(l[2])}if(c){const f=m(c[1]);return typeof f=="number"&&f>=parseFloat(c[2])}if(d){const f=String(m(d[1])||"").toLowerCase(),S=d[2].toLowerCase().replace(/%/g,".*").replace(/_/g,".");return new RegExp("^"+S+"$").test(f)}if(p){const f=String(m(p[1])||"").toLowerCase();return p[2].split(",").map(v=>v.trim().replace(/'/g,"").toLowerCase()).includes(f)}return!0}catch{return!0}})}const $l=[{label:"All Accounts",query:`SELECT Id, Name, Industry, AnnualRevenue
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
WHERE AccountId = '001A000001'`}];function Vm(){const[e,t]=w.useState($l[0].query),[n,r]=w.useState(null),[s,a]=w.useState(null),[o,l]=w.useState(0),[c,d]=w.useState(""),[p,m]=w.useState(!1),f=()=>{const y=zm(e);r(y.records),a(y.error),l(y.rowCount),d(e)},S=y=>{t(y),r(null),a(null)},v=n&&n.length>0?Object.keys(n[0].fields):[];return i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-6",children:[i.jsxs("h1",{className:"text-2xl font-bold text-sf-gray-9 flex items-center gap-2",children:[i.jsx(Wl,{size:24,className:"text-sf-teal"}),"SOQL Visual Explorer"]}),i.jsx("p",{className:"text-sf-gray-6 mt-1",children:"Write and run SOQL queries against fictional Salesforce records. See results instantly."}),i.jsxs("div",{className:"flex items-center gap-2 mt-2 text-xs bg-yellow-50 border border-yellow-200 rounded px-3 py-1.5 w-fit text-yellow-700",children:[i.jsx(Fl,{size:13}),"Simulated data only — not connected to a real Salesforce org"]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[i.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-9 text-sm mb-3",children:"Example Queries"}),i.jsx("div",{className:"space-y-1",children:$l.map((y,x)=>i.jsx("button",{onClick:()=>S(y.query),className:"w-full text-left text-xs px-2 py-1.5 rounded hover:bg-sf-gray-1 text-sf-gray-7 hover:text-sf-blue transition-colors",children:y.label},x))})]}),i.jsxs("div",{className:"card",children:[i.jsxs("button",{className:"w-full flex items-center justify-between font-semibold text-sf-gray-9 text-sm",onClick:()=>m(!p),children:[i.jsx("span",{children:"Data Schema"}),p?i.jsx(wd,{size:14}):i.jsx(wt,{size:14})]}),p&&i.jsx("div",{className:"mt-3 space-y-3",children:Od.map(y=>i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-blue mb-1",children:y.name}),i.jsx("div",{className:"space-y-0.5",children:y.fields.map(x=>i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-sf-gray-7 font-mono",children:x.name}),i.jsx("span",{className:"text-sf-gray-4",children:x.type})]},x.name))})]},y.name))})]})]}),i.jsxs("div",{className:"lg:col-span-3 space-y-4",children:[i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"SOQL Query"}),i.jsx("span",{className:"text-xs text-sf-gray-4",children:"Available: Account, Contact, Opportunity, Case"})]}),i.jsx("textarea",{value:e,onChange:y=>t(y.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg p-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue text-sm",rows:6,spellCheck:!1}),i.jsxs("div",{className:"flex items-center justify-between mt-3",children:[i.jsxs("button",{onClick:f,className:"btn-primary flex items-center gap-2",children:[i.jsx(Ad,{size:15}),"Run Query"]}),n!==null&&i.jsxs("span",{className:"text-sm text-sf-gray-5",children:[o," row",o!==1?"s":""," returned"]})]})]}),s&&i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-2",children:[i.jsx(Fl,{size:16,className:"text-sf-red flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("p",{className:"text-sf-red font-semibold text-sm",children:"Query Error"}),i.jsx("p",{className:"text-red-700 text-sm mt-1",children:s})]})]}),n!==null&&!s&&i.jsxs("div",{className:"card overflow-hidden p-0",children:[i.jsx("div",{className:"px-4 py-3 border-b border-gray-100 bg-sf-gray-1",children:i.jsxs("h3",{className:"font-semibold text-sf-gray-9 text-sm",children:["Results — ",o," record",o!==1?"s":""]})}),n.length===0?i.jsxs("div",{className:"text-center py-12 text-sf-gray-5",children:[i.jsx(Wl,{size:32,className:"mx-auto mb-2 opacity-30"}),i.jsx("p",{children:"No records match your query"})]}):i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm",children:[i.jsx("thead",{className:"bg-sf-gray-1 border-b border-gray-200",children:i.jsx("tr",{children:v.map(y=>i.jsx("th",{className:"text-left px-4 py-2 text-xs font-semibold text-sf-gray-7 whitespace-nowrap",children:y},y))})}),i.jsx("tbody",{className:"divide-y divide-gray-100",children:n.map((y,x)=>i.jsx("tr",{className:"hover:bg-sf-gray-1 transition-colors",children:v.map(h=>{const u=y.fields[h];return i.jsx("td",{className:"px-4 py-2 text-sf-gray-7 whitespace-nowrap max-w-[200px] truncate",children:u==null?i.jsx("span",{className:"text-sf-gray-4 italic",children:"null"}):typeof u=="boolean"?i.jsx("span",{className:u?"text-sf-green":"text-sf-red",children:String(u)}):typeof u=="number"?i.jsx("span",{className:"font-mono",children:u.toLocaleString()}):h.toLowerCase().includes("id")?i.jsx("span",{className:"font-mono text-xs text-sf-gray-5",children:String(u)}):String(u)},h)})},x))})]})})]}),n===null&&i.jsxs("div",{className:"card border-dashed border-2 border-gray-200",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-3 text-sm",children:"SOQL Quick Reference"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sf-gray-6",children:[["Basic query","SELECT Id, Name FROM Account LIMIT 10"],["Filter with WHERE","WHERE Industry = 'Technology'"],["Multiple conditions","WHERE Amount > 50000 AND StageName = 'Closed Won'"],["Pattern matching","WHERE Name LIKE 'Tech%'"],["Sort results","ORDER BY Amount DESC"],["List of values","WHERE Industry IN ('Tech', 'Healthcare')"]].map(([y,x])=>i.jsxs("div",{children:[i.jsxs("span",{className:"font-medium text-sf-gray-8",children:[y,":"]}),i.jsx("pre",{className:"font-mono text-sf-gray-5 mt-0.5 whitespace-pre-wrap",children:x})]},y))})]})]})]})]})}const Gm=[{id:"debug-null-pointer",title:"The Mysterious Null Pointer",description:"A trigger is failing with a NullPointerException. Find the null variable and fix it safely.",bugType:"null-pointer",brokenCode:`// This code is supposed to send a welcome email to new Contacts
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
update toUpdate;`,explanation:"Two bugs: SOQL and DML both inside the loop. For 100 accounts: 100 SOQL + 100 DML = both limits exceeded. Fix: use ONE aggregate SOQL with GROUP BY to get all revenues at once, build a Map for lookups, collect updates in a List, then do ONE bulk update. This goes from 200 operations to 3."}],Nd={"null-pointer":"bg-red-100 text-red-800","governor-limit":"bg-orange-100 text-orange-800",logic:"bg-yellow-100 text-yellow-800",syntax:"bg-purple-100 text-purple-800",soql:"bg-blue-100 text-blue-800",dml:"bg-teal-100 text-teal-800"};function Ym({scenario:e,onSelect:t}){return i.jsxs("button",{className:"card text-left w-full hover:shadow-sf-lg hover:-translate-y-0.5 transition-all",onClick:t,children:[i.jsx("div",{className:"flex items-center gap-2 mb-2",children:i.jsx("span",{className:`tag ${Nd[e.bugType]||"bg-gray-100 text-gray-800"}`,children:e.bugType.replace("-"," ")})}),i.jsx("h3",{className:"font-bold mb-1",children:e.title}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description}),i.jsxs("div",{className:"flex items-center gap-1 mt-3 text-sf-blue text-sm font-medium",children:["Debug this ",i.jsx(wt,{className:"w-4 h-4"})]})]})}function Jm({scenario:e,onBack:t}){const[n,r]=w.useState(!1),[s,a]=w.useState(0),[o,l]=w.useState(!1),[c,d]=w.useState(e.brokenCode),[p,m]=w.useState(!1),f=()=>{m(!0)};return i.jsxs("div",{children:[i.jsx("button",{className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue mb-6 transition-colors",onClick:t,children:"← Back to scenarios"}),i.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center",children:i.jsx(Pl,{className:"w-5 h-5 text-red-600"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"text-xl font-bold",children:e.title}),i.jsx("span",{className:`tag ${Nd[e.bugType]||""}`,children:e.bugType.replace("-"," ")})]}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[i.jsxs("div",{children:[i.jsxs("h3",{className:"font-semibold text-sf-gray-8 mb-2 flex items-center gap-2",children:[i.jsx(Pl,{className:"w-4 h-4 text-red-500"})," Broken Code"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap border-2 border-red-300",children:e.brokenCode})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Error Message"}),i.jsx("div",{className:"bg-red-950 text-red-300 rounded-lg p-4 font-mono text-xs whitespace-pre-wrap mb-4",children:e.errorMessage}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs("button",{className:"btn-secondary text-sm flex items-center gap-2 w-full justify-center",onClick:()=>{r(!0)},children:[i.jsx(ws,{className:"w-4 h-4"}),n?`Hint ${s+1} of ${e.hints.length}`:"Get a Hint"]}),n&&i.jsxs("div",{className:"hint-box",children:[i.jsx("p",{className:"text-sm text-yellow-900",children:e.hints[s]}),s<e.hints.length-1&&i.jsx("button",{className:"text-xs text-yellow-700 underline mt-2",onClick:()=>a(S=>S+1),children:"Next hint →"})]})]})]})]}),i.jsxs("div",{className:"card mb-4",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Your Fix"}),i.jsx("p",{className:"text-sm text-sf-gray-6 mb-3",children:'Edit the code above to fix the bug, then click "Check My Fix":'}),i.jsxs("div",{className:"card !p-0 overflow-hidden mb-4",children:[i.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),i.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),i.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),i.jsx("span",{className:"text-sf-gray-4 text-xs ml-2",children:"fix.apex"})]}),i.jsx("textarea",{className:"code-textarea w-full bg-sf-gray-9 text-green-300 p-4 border-0 outline-none",value:c,onChange:S=>d(S.target.value),rows:14,spellCheck:!1})]}),i.jsx("button",{className:"btn-primary",onClick:f,children:"Check My Fix"}),p&&i.jsx("div",{className:"mt-3 note-box",children:i.jsx("p",{className:"text-sm text-blue-800",children:"Great effort! Compare your solution with the official fix below to see if you found the issue. Pattern-based checking cannot verify runtime correctness — review the explanation carefully."})})]}),i.jsxs("button",{className:"btn-secondary flex items-center gap-2 mb-4",onClick:()=>l(!o),children:[i.jsx(Cd,{className:"w-4 h-4"}),o?"Hide Fix":"Show the Fix"]}),o&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"card border-2 border-green-300",children:[i.jsxs("h3",{className:"font-semibold text-green-800 mb-2 flex items-center gap-2",children:[i.jsx(fo,{className:"w-4 h-4"})," Fixed Code"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap",children:e.fixedCode})]}),i.jsxs("div",{className:"card border-2 border-sf-blue/30 bg-sf-blue/5",children:[i.jsx("h3",{className:"font-semibold text-sf-blue mb-2",children:"Explanation"}),i.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed",children:e.explanation})]})]})]})}function Km(){const[e,t]=w.useState(null);return i.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:e?i.jsx(Jm,{scenario:e,onBack:()=>t(null)}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Debug Lab"}),i.jsx("p",{className:"text-sf-gray-6",children:"Fix intentionally broken Apex code. Real bugs that Salesforce developers encounter every day."})]}),i.jsxs("div",{className:"flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6",children:[i.jsx(Hs,{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"}),i.jsx("p",{className:"text-xs text-amber-800",children:"Each scenario shows a broken class and its error message. Use the hints if needed, then reveal the fix and explanation."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Gm.map(n=>i.jsx(Ym,{scenario:n,onSelect:()=>t(n)},n.id))})]})})}const Vl=[{id:"mission-lead-routing",title:"Automate Lead Routing",company:"Acme Corporation",description:"Acme's sales team is manually assigning leads every morning — a process taking 2 hours daily. Build an Apex solution to automate it.",scenario:`Sarah, Acme's Sales Ops Manager, has given you the following requirements in a meeting:

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
}`},{id:"mission-account-health",title:"Account Health Score",company:"Globex Technologies",description:"Build a health scoring system that evaluates accounts based on engagement, revenue, and support history.",scenario:`The Customer Success team at Globex wants a health score for every account so they can proactively reach out to at-risk customers before they churn.

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
}`},{id:"mission-data-import",title:"CSV Data Import Processor",company:"DataSync Inc",description:"Build a class that processes a CSV-formatted string of contact data, validates it, and prepares records for import.",scenario:`DataSync receives daily CSV feeds from their marketing platform with new lead data. The current process has a consultant manually cleaning data in Excel before importing. They want an Apex class to automate this.

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
- Company is optional — default to 'Unknown' if missing`,requirements:["Create class CSVContactProcessor with method processCSV(String csvData) returning a ProcessResult inner class","ProcessResult should contain: List<Contact> validContacts, List<String> errors, Integer processedRows, Integer skippedRows","Implement all validation and normalization rules","Phone normalization: remove all non-digit characters with replaceAll()","Name normalization: firstName[0].toUpperCase() + firstName.substring(1).toLowerCase()"],difficulty:"intermediate",skills:["String Methods","Lists","Inner Classes","Loops","Validation"],estimatedHours:3},{id:"mission-opportunity-rollup",title:"Territory Revenue Rollup",company:"SalesPro Analytics",description:"Build a reporting utility that rolls up opportunity revenue by territory, stage, and quarter.",scenario:`SalesPro's VP of Sales wants a weekly report showing pipeline health by territory. They currently export to Excel and build pivot tables manually — a 3-hour weekly task.

The report should show:
- For each territory (custom field Territory__c on Opportunity)
- Total pipeline value by stage
- Quarter-over-quarter comparison
- Win rate (Closed Won / Total)

You'll write the Apex class that queries and aggregates this data.`,requirements:["Create class TerritoryRollup with method getReport() returning Map<String, TerritoryMetrics>","TerritoryMetrics inner class: String territory, Decimal totalPipeline, Decimal closedWon, Decimal winRate, Map<String, Decimal> byStage","Query all Opportunities with Amount != null","Group by Territory__c field","Calculate win rate: closedWon / (closedWon + closedLost)","Handle territories with no wins or losses gracefully"],difficulty:"intermediate",skills:["SOQL","Maps","Collections","Aggregate Functions","Inner Classes"],estimatedHours:3},{id:"mission-case-escalation",title:"Auto-Escalate Critical Cases",company:"TechSupport Pro",description:"Build an Apex trigger that automatically escalates Cases to High priority when they contain outage keywords or have been open too long.",scenario:`TechSupport Pro's support team is drowning in cases. Critical outages are sometimes missed because they sit in the standard queue at Normal priority. The VP of Support has mandated two auto-escalation rules:

1. Any new Case whose Subject contains the words "outage", "down", or "not working" should be immediately set to Priority = High and Status = Escalated.
2. Any existing Case that has been Open for more than 24 hours without a resolution should be escalated on the next update.

They also want an email alert sent to the queue manager whenever a case is escalated.`,requirements:["Create a trigger CaseEscalationTrigger on Case for before insert and before update events",'On insert: if Subject contains "outage", "down", or "not working" (case-insensitive), set Priority = High and Status = Escalated',"On update: if Status was Open, CreatedDate is > 24 hours ago, and Priority != High, escalate it","Create a helper class CaseEscalationService with the escalation logic (keep trigger thin)","On escalation, set a custom field Escalation_Reason__c explaining why it was escalated","Write a test class with at least 3 test methods covering each escalation path"],difficulty:"beginner",skills:["Apex Triggers","String Methods","DateTime","Trigger Context"],estimatedHours:2,starterCode:`trigger CaseEscalationTrigger on Case (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            // TODO: Check new cases for outage keywords
        }
        if (Trigger.isUpdate) {
            // TODO: Check updated cases for 24-hour rule
        }
    }
}

public class CaseEscalationService {

    public static void escalateForKeywords(List<Case> cases) {
        // TODO: Set Priority = 'High' and Status = 'Escalated'
        // for cases matching outage keywords
    }

    public static void escalateStaleOpen(List<Case> cases, Map<Id, Case> oldMap) {
        // TODO: Escalate cases open > 24 hours
    }
}`,solution:`trigger CaseEscalationTrigger on Case (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            CaseEscalationService.escalateForKeywords(Trigger.new);
        }
        if (Trigger.isUpdate) {
            CaseEscalationService.escalateForKeywords(Trigger.new);
            CaseEscalationService.escalateStaleOpen(Trigger.new, Trigger.oldMap);
        }
    }
}

public class CaseEscalationService {

    private static final Set<String> OUTAGE_KEYWORDS = new Set<String>{'outage', 'down', 'not working'};

    public static void escalateForKeywords(List<Case> cases) {
        for (Case c : cases) {
            if (c.Subject == null) continue;
            String subjectLower = c.Subject.toLowerCase();
            for (String keyword : OUTAGE_KEYWORDS) {
                if (subjectLower.contains(keyword)) {
                    c.Priority = 'High';
                    c.Status = 'Escalated';
                    c.Escalation_Reason__c = 'Keyword detected: ' + keyword;
                    break;
                }
            }
        }
    }

    public static void escalateStaleOpen(List<Case> cases, Map<Id, Case> oldMap) {
        DateTime cutoff = DateTime.now().addHours(-24);
        for (Case c : cases) {
            Case oldCase = oldMap.get(c.Id);
            if (oldCase.Status == 'Open'
                && c.Priority != 'High'
                && c.CreatedDate <= cutoff) {
                c.Priority = 'High';
                c.Status = 'Escalated';
                c.Escalation_Reason__c = 'Open for more than 24 hours without resolution';
            }
        }
    }
}`},{id:"mission-duplicate-contact-merger",title:"Duplicate Contact Merger",company:"CleanData Corp",description:"Build a service class that identifies duplicate Contacts by email and merges them, keeping the most recently modified record.",scenario:`CleanData Corp's CRM has accumulated years of data from various imports, and the Contact object has significant duplication — particularly contacts imported from different marketing tools that share the same email address. Sales reps are frustrated by seeing the same person multiple times.

Your task: build a service that can be called from a batch job or admin screen. It should:
- Find all sets of Contacts with the same Email (case-insensitive)
- For each duplicate group, keep the most recently modified Contact as the "master"
- Merge the older duplicates into the master (using the DML merge statement)
- Log results to a custom Merge_Log__c object for auditing`,requirements:["Create class ContactDuplicateMerger with a static method findDuplicates() returning Map<String, List<Contact>>","The map key is lowercase email, the value is all Contacts sharing that email","Create method mergeGroup(List<Contact> duplicates) that selects the master (most recently modified) and merges others into it","Use Apex DML merge statement: merge masterContact duplicateList","Create a Merge_Log__c record for each merge with fields: Email__c, Records_Merged__c (Integer), Master_Id__c","Handle groups of 2+ duplicates — the merge statement accepts a list"],difficulty:"intermediate",skills:["SOQL","DML merge","Maps","Sorting","Bulk Patterns"],estimatedHours:3,starterCode:`public class ContactDuplicateMerger {

    // Returns a map of email -> list of contacts with that email
    public static Map<String, List<Contact>> findDuplicates() {
        // TODO: Query all contacts with email != null
        // Group by lowercase email
        // Return only groups with 2+ contacts
        return new Map<String, List<Contact>>();
    }

    // Merge a group of duplicates — keep most recently modified as master
    public static void mergeGroup(List<Contact> duplicates) {
        if (duplicates == null || duplicates.size() < 2) return;
        // TODO: Sort by LastModifiedDate descending
        // TODO: Master = duplicates[0], rest are duplicates to merge
        // TODO: merge masterContact duplicateList
        // TODO: Create Merge_Log__c record
    }
}`},{id:"mission-approval-notifier",title:"Big Deal Chatter Alert",company:"Meridian Financial",description:"Build a trigger that posts a Chatter message when a large Opportunity moves into the Negotiation stage, alerting the Account Owner.",scenario:`Meridian Financial's sales leadership wants visibility when large deals enter the negotiation phase — this is the stage where deals can be lost to competitors, and senior leadership wants to offer support.

Requirements from the Sales Director:
- When any Opportunity with Amount > $500,000 is moved to stage "Negotiation/Review", automatically post a Chatter message on the Opportunity
- The message should @mention the Account Owner so they get a notification
- Include the deal amount and Account name in the message
- Only fire when the stage changes (not on every update)`,requirements:["Create trigger OpportunityChatterTrigger on Opportunity (after update)",'Fire only when StageName changes to "Negotiation/Review" and Amount > 500000',"Create a ConnectApi.FeedItemInput and ConnectApi.MessageBodyInput to post the Chatter message","Use ConnectApi.ChatterFeeds.postFeedElement to post on the Opportunity record feed","Include Account Name, Amount (formatted), and @mention the OwnerId in the message","Use a handler class OpportunityChatterService to keep trigger logic thin"],difficulty:"beginner",skills:["Apex Triggers","Chatter API","ConnectApi","Trigger Context Variables"],estimatedHours:2,starterCode:`trigger OpportunityChatterTrigger on Opportunity (after update) {
    // TODO: Filter opportunities where stage changed to Negotiation/Review
    // and Amount > 500000
    // Call OpportunityChatterService.postBigDealAlert(filteredOpps);
}

public class OpportunityChatterService {

    public static void postBigDealAlert(List<Opportunity> opps) {
        for (Opportunity opp : opps) {
            // TODO: Build Chatter message mentioning the Account Owner
            // TODO: Post via ConnectApi.ChatterFeeds.postFeedElement
        }
    }
}`,solution:`trigger OpportunityChatterTrigger on Opportunity (after update) {
    List<Opportunity> bigDeals = new List<Opportunity>();
    for (Opportunity opp : Trigger.new) {
        Opportunity oldOpp = Trigger.oldMap.get(opp.Id);
        if (opp.StageName == 'Negotiation/Review'
            && oldOpp.StageName != 'Negotiation/Review'
            && opp.Amount != null
            && opp.Amount > 500000) {
            bigDeals.add(opp);
        }
    }
    if (!bigDeals.isEmpty()) {
        OpportunityChatterService.postBigDealAlert(bigDeals);
    }
}

public class OpportunityChatterService {

    public static void postBigDealAlert(List<Opportunity> opps) {
        for (Opportunity opp : opps) {
            ConnectApi.FeedItemInput feedItem = new ConnectApi.FeedItemInput();
            feedItem.subjectId = opp.Id;

            ConnectApi.MessageBodyInput body = new ConnectApi.MessageBodyInput();
            body.messageSegments = new List<ConnectApi.MessageSegmentInput>();

            // Text segment
            ConnectApi.TextSegmentInput text = new ConnectApi.TextSegmentInput();
            text.text = '🚀 Big deal alert! ' + opp.Name + ' ($'
                + opp.Amount.format() + ') has entered Negotiation/Review. ';
            body.messageSegments.add(text);

            // @Mention segment for Account Owner
            ConnectApi.MentionSegmentInput mention = new ConnectApi.MentionSegmentInput();
            mention.id = opp.OwnerId;
            body.messageSegments.add(mention);

            ConnectApi.TextSegmentInput closing = new ConnectApi.TextSegmentInput();
            closing.text = ' — please coordinate with leadership for support.';
            body.messageSegments.add(closing);

            feedItem.body = body;
            ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItem);
        }
    }
}`},{id:"mission-contract-auto-renewal",title:"Contract Auto-Renewal Engine",company:"CloudSubscriptions Ltd",description:"Build a Batch Apex class that queries expiring Contracts and auto-creates renewal Opportunity records for the sales team to follow up on.",scenario:`CloudSubscriptions Ltd's renewal team manually checks for expiring contracts every Monday morning and creates renewal opportunities. This takes 3 hours a week and sometimes contracts are missed, leading to churn.

The VP of CS wants a nightly automated job that:
- Finds all Contracts expiring within the next 30 days
- Creates a renewal Opportunity for each one (if one doesn't exist already)
- Sets the Amount to the contract value and CloseDate to the contract end date
- Assigns the Opportunity to the Contract's Account Owner
- Sends a summary email to the renewals manager when the batch completes`,requirements:["Create a Batchable and Schedulable class ContractRenewalBatch implementing Database.Batchable<SObject> and Schedulable","In start(), query Contracts with EndDate between today and today+30 days and Status = Activated","In execute(), for each Contract check if a renewal Opportunity already exists (avoid duplicates)",'Create the Opportunity with Name = "Renewal: " + Contract.Name, Amount from Contract value, Stage = "Prospecting"',"In finish(), send a summary email to a hardcoded renewals manager email with counts","Schedule the batch to run nightly at midnight"],difficulty:"intermediate",skills:["Batch Apex","Schedulable","SOQL","DML","Email Services"],estimatedHours:4,starterCode:`public class ContractRenewalBatch
    implements Database.Batchable<SObject>, Schedulable {

    private String renewalsManagerEmail = 'renewals@cloudsubscriptions.com';
    private Integer renewalsCreated = 0;
    private Integer skipped = 0;

    // Schedulable interface
    public void execute(SchedulableContext sc) {
        Database.executeBatch(new ContractRenewalBatch(), 50);
    }

    // Batchable: define the query
    public Database.QueryLocator start(Database.BatchableContext bc) {
        // TODO: Query Contracts expiring in next 30 days
        return null;
    }

    // Batchable: process each batch
    public void execute(Database.BatchableContext bc, List<Contract> contracts) {
        // TODO: Create renewal opportunities where none exist
    }

    // Batchable: send summary email
    public void finish(Database.BatchableContext bc) {
        // TODO: Send email summary to renewals manager
    }
}`,solution:`public class ContractRenewalBatch
    implements Database.Batchable<SObject>, Schedulable {

    private String renewalsManagerEmail = 'renewals@cloudsubscriptions.com';
    private Integer renewalsCreated = 0;
    private Integer skipped = 0;

    public void execute(SchedulableContext sc) {
        Database.executeBatch(new ContractRenewalBatch(), 50);
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        Date today = Date.today();
        Date cutoff = today.addDays(30);
        return Database.getQueryLocator([
            SELECT Id, Name, AccountId, ContractTerm, TotalContractValue,
                   EndDate, Account.OwnerId
            FROM Contract
            WHERE Status = 'Activated'
            AND EndDate >= :today
            AND EndDate <= :cutoff
        ]);
    }

    public void execute(Database.BatchableContext bc, List<Contract> contracts) {
        Set<Id> contractAccountIds = new Set<Id>();
        for (Contract c : contracts) contractAccountIds.add(c.AccountId);

        // Check which accounts already have renewal opps
        Set<Id> alreadyHasRenewal = new Set<Id>();
        for (Opportunity opp : [
            SELECT AccountId FROM Opportunity
            WHERE AccountId IN :contractAccountIds
            AND Name LIKE 'Renewal:%'
            AND IsClosed = false
        ]) {
            alreadyHasRenewal.add(opp.AccountId);
        }

        List<Opportunity> toCreate = new List<Opportunity>();
        for (Contract c : contracts) {
            if (alreadyHasRenewal.contains(c.AccountId)) {
                skipped++;
                continue;
            }
            toCreate.add(new Opportunity(
                Name = 'Renewal: ' + c.Name,
                AccountId = c.AccountId,
                OwnerId = c.Account.OwnerId,
                Amount = c.TotalContractValue,
                CloseDate = c.EndDate,
                StageName = 'Prospecting',
                Description = 'Auto-created renewal from Contract ' + c.Id
            ));
            renewalsCreated++;
        }
        if (!toCreate.isEmpty()) insert toCreate;
    }

    public void finish(Database.BatchableContext bc) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ renewalsManagerEmail });
        mail.setSubject('Contract Renewal Batch Complete — ' + Date.today().format());
        mail.setPlainTextBody(
            'Renewal batch completed.

'
            + 'Opportunities created: ' + renewalsCreated + '
'
            + 'Skipped (already had renewal): ' + skipped
        );
        Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
    }
}`},{id:"mission-territory-assignment",title:"State-Based Territory Assigner",company:"GeoSales Inc",description:"Build an Apex invocable method called from a Flow that assigns an Account to a Territory based on BillingState using Custom Metadata.",scenario:`GeoSales Inc manages 15 sales territories mapped to US states. Currently, admins manually update a Territory__c field on every new Account. With 500 new accounts per month, this is a half-day task.

The team already uses Flow for record-triggered automation. They want to call an Apex action from Flow that:
- Accepts an Account Id
- Looks up the BillingState against a Territory_Mapping__mdt Custom Metadata table (State__c → Territory_Name__c)
- Updates the Account's Territory__c field
- Returns whether the assignment was successful`,requirements:["Create an Apex class TerritoryAssigner with an @InvocableMethod method assignTerritory(List<Id> accountIds)","Query Territory_Mapping__mdt records to build a Map<String, String> of State → Territory","For each Account, look up BillingState in the map and set Territory__c",'If BillingState is not found, set Territory__c = "Unassigned"',"Return a List<String> result indicating the territory assigned for each Account (for Flow output)","Make it bulk-safe — the Flow may call it with up to 200 records at a time"],difficulty:"intermediate",skills:["Invocable Methods","Custom Metadata","Flow Integration","SOQL","Bulk Patterns"],estimatedHours:3,starterCode:`public class TerritoryAssigner {

    @InvocableMethod(
        label='Assign Territory'
        description='Assigns Territory__c on an Account based on BillingState'
    )
    public static List<String> assignTerritory(List<Id> accountIds) {
        // TODO: Query Territory_Mapping__mdt to build state -> territory map
        // TODO: Query Accounts by accountIds
        // TODO: For each account, set Territory__c from the map
        // TODO: Update accounts
        // TODO: Return list of territory names assigned
        return new List<String>();
    }
}`},{id:"mission-survey-processor",title:"Survey Response Processor",company:"Feedback360",description:"Parse incoming survey JSON responses, persist them as custom records, and roll up average scores to the parent Campaign.",scenario:`Feedback360 collects post-event survey data via an external survey tool that sends webhook payloads to a Salesforce REST endpoint. Each payload is a JSON string containing:

{
  "campaignId": "701xx0000000001",
  "respondentEmail": "user@example.com",
  "scores": {
    "overall": 4,
    "content": 5,
    "speaker": 4,
    "venue": 3
  },
  "comment": "Great event, would attend again"
}

After parsing, Feedback360 wants the average score rolled up to a custom field Average_Survey_Score__c on the Campaign record.`,requirements:["Create class SurveyProcessor with method process(String jsonPayload) returning void","Parse JSON using JSON.deserializeUntyped() into a Map<String, Object>","Create a Survey_Response__c record with fields: Campaign__c, Respondent_Email__c, Overall_Score__c, Content_Score__c, Speaker_Score__c, Venue_Score__c, Comment__c, Average_Score__c","After inserting the response, query all Survey_Response__c for the Campaign and compute the new average","Update Campaign.Average_Survey_Score__c with the computed average","Handle malformed JSON gracefully with a try/catch that logs to a custom Error_Log__c object"],difficulty:"advanced",skills:["JSON Parsing","DML","SOQL Aggregate","Custom Objects","Error Handling"],estimatedHours:4},{id:"mission-invoice-generator",title:"Automated Invoice Generator",company:"BillingFirst",description:"Build an Apex service that takes Order records, applies discount rules from Custom Metadata, and generates Invoice__c records with line items.",scenario:`BillingFirst processes thousands of orders per month. Their billing team manually calculates discounts and creates invoice records for each order. The process involves:

1. Looking up discount tiers in a Discount_Tier__mdt table (by Account Type and quantity)
2. Applying the discount to each Order line item
3. Creating an Invoice__c header record with totals
4. Creating Invoice_Line_Item__c child records for each order product

This takes 20+ hours per month and introduces manual errors.`,requirements:["Create class InvoiceGenerator with method generateInvoices(List<Order> orders) returning List<Invoice__c>","Query OrderItem (Order Products) for each Order using a Map pattern (not SOQL in a loop)","Query Discount_Tier__mdt to build a discount lookup by Account_Type__c and Min_Quantity__c","For each Order, calculate the discounted subtotal across all line items",'Insert Invoice__c records with fields: Order__c, Account__c, Total_Amount__c, Discount_Applied__c, Status__c = "Draft"',"Insert Invoice_Line_Item__c records with: Invoice__c, Product__c, Quantity__c, Unit_Price__c, Discounted_Price__c"],difficulty:"advanced",skills:["Custom Metadata","DML","Collections","Maps","Relationships","Bulk Patterns"],estimatedHours:5},{id:"mission-chatter-digest",title:"Weekly Deal Activity Digest",company:"CollabCo",description:"Build a Scheduled Apex class that runs every Monday morning, summarizes Chatter activity on large deals, and emails Account Owners.",scenario:`CollabCo's sales managers are missing important deal conversations happening in Chatter. Important updates on $100K+ opportunities get buried.

They want a Monday 8am digest email sent to each Account Owner summarizing:
- How many Chatter posts were made on their opportunities last week
- The most recent post on each opportunity
- Opportunities with no activity last week (at risk flag)

This digest should feel like a personal update, not a bulk blast.`,requirements:["Create class ChatterDigestScheduler implementing Schedulable with execute() method","In execute(), query FeedItem records from last 7 days on Opportunities with Amount > 100000","Group FeedItems by ParentId (Opportunity Id)","For each Account Owner, build an HTML email listing their opportunities and activity counts",'Flag opportunities with no activity last week in the email (add "⚠️ No activity" badge)',"Send individual Messaging.SingleEmailMessage to each Owner using Messaging.sendEmail()"],difficulty:"intermediate",skills:["Scheduled Apex","Chatter FeedItem SOQL","Email Services","Collections","Maps"],estimatedHours:4},{id:"mission-competitor-tracker",title:"Competitor Win/Loss Dashboard Controller",company:"WinRate Analytics",description:"Build an Apex controller that powers a Lightning Web Component showing win/loss rates by competitor, broken down by quarter.",scenario:`WinRate Analytics tracks which competitors appear in lost deals using a custom CompetitorHistory__c object (fields: Opportunity__c, Competitor_Name__c, Outcome__c ["Won"/"Lost"], Close_Date__c).

The VP of Sales wants a dashboard Lightning Web Component showing:
- For each competitor: number of wins, losses, and win rate percentage
- Filtered by a date range the user selects (defaults to current year)
- Sortable by win rate descending
- Exportable as CSV

Your task is to build the AuraEnabled Apex controller that powers this LWC.`,requirements:["Create class CompetitorTrackerController with an @AuraEnabled(cacheable=true) method getStats(Date startDate, Date endDate) returning List<CompetitorStat>","CompetitorStat is an inner class with: String competitorName, Integer wins, Integer losses, Decimal winRate","Query CompetitorHistory__c where Close_Date__c is within the date range","Group results in Apex (or use aggregate SOQL) to compute wins and losses per competitor","Calculate winRate = wins / (wins + losses) * 100, rounded to 1 decimal place","Return the list sorted by winRate descending"],difficulty:"advanced",skills:["AuraEnabled","Inner Classes","SOQL Aggregate","LWC Integration","Sorting"],estimatedHours:3},{id:"mission-onboarding-checklist",title:"Customer Onboarding Task Generator",company:"CustomerFirst SaaS",description:"Build a trigger that automatically creates 5 onboarding Tasks for the Account Owner when a new Customer Account is created.",scenario:`CustomerFirst SaaS signs up new customers and needs to ensure every Account Owner follows a structured 30-day onboarding process. Currently, onboarding managers manually create task checklists — sometimes forgetting steps, often late.

When a new Account is created with Type = "Customer", automatically create 5 Task records:
1. Day 1: Send welcome email and login credentials
2. Day 3: Schedule kickoff call
3. Day 7: Confirm product setup complete
4. Day 14: First check-in call
5. Day 30: 30-day success review

Each task should be assigned to the Account Owner with the correct due date.`,requirements:["Create trigger AccountOnboardingTrigger on Account (after insert)",'Fire only for Accounts with Type = "Customer"',"Create a helper class OnboardingTaskFactory with a static method createTasks(List<Account> accounts) returning List<Task>",'Build the 5 Task records per Account with Subject, ActivityDate (CreatedDate + N days), OwnerId = Account.OwnerId, WhatId = Account.Id, Status = "Not Started"',"Insert all tasks in a single DML call (bulk-safe)","Write a test method that creates 3 Customer accounts and asserts 15 tasks are created with correct due dates"],difficulty:"beginner",skills:["Apex Triggers","DML","Date Operations","Lists","Bulk Patterns"],estimatedHours:2,starterCode:`trigger AccountOnboardingTrigger on Account (after insert) {
    // TODO: Filter for Customer accounts only
    // TODO: Call OnboardingTaskFactory.createTasks() and insert result
}

public class OnboardingTaskFactory {

    // Checklist items: [subject, daysFromNow]
    private static final List<Object[]> CHECKLIST = new List<Object[]>{
        new Object[]{'Send welcome email and login credentials', 1},
        new Object[]{'Schedule kickoff call', 3},
        new Object[]{'Confirm product setup complete', 7},
        new Object[]{'First check-in call', 14},
        new Object[]{'30-day success review', 30}
    };

    public static List<Task> createTasks(List<Account> accounts) {
        List<Task> tasks = new List<Task>();
        // TODO: For each account, create 5 tasks from CHECKLIST
        // Set ActivityDate = Date.today().addDays(N)
        // Set OwnerId = account.OwnerId
        // Set WhatId = account.Id
        return tasks;
    }
}`,solution:`trigger AccountOnboardingTrigger on Account (after insert) {
    List<Account> customers = new List<Account>();
    for (Account a : Trigger.new) {
        if (a.Type == 'Customer') customers.add(a);
    }
    if (!customers.isEmpty()) {
        List<Task> tasks = OnboardingTaskFactory.createTasks(customers);
        insert tasks;
    }
}

public class OnboardingTaskFactory {

    private static final List<Object[]> CHECKLIST = new List<Object[]>{
        new Object[]{'Send welcome email and login credentials', 1},
        new Object[]{'Schedule kickoff call', 3},
        new Object[]{'Confirm product setup complete', 7},
        new Object[]{'First check-in call', 14},
        new Object[]{'30-day success review', 30}
    };

    public static List<Task> createTasks(List<Account> accounts) {
        List<Task> tasks = new List<Task>();
        for (Account acct : accounts) {
            for (Object[] item : CHECKLIST) {
                tasks.add(new Task(
                    Subject = (String) item[0],
                    ActivityDate = Date.today().addDays((Integer) item[1]),
                    OwnerId = acct.OwnerId,
                    WhatId = acct.Id,
                    Status = 'Not Started',
                    Priority = 'Normal'
                ));
            }
        }
        return tasks;
    }
}`}],Xm={beginner:"bg-green-100 text-green-800",intermediate:"bg-yellow-100 text-yellow-800",advanced:"bg-red-100 text-red-800"};function Zm(){const[e,t]=w.useState(null),[n,r]=w.useState("all"),s=n==="all"?Vl:Vl.filter(a=>a.difficulty===n);return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Project Missions"}),i.jsx("p",{className:"text-sf-gray-6",children:"Apply your Apex skills to realistic business requirements — the kind you will encounter on actual Salesforce projects."})]}),i.jsx("div",{className:"card mb-6 bg-gradient-to-r from-sf-purple/10 to-sf-blue/10 border border-sf-purple/20",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx(Us,{className:"w-5 h-5 text-sf-purple flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"font-semibold mb-1",children:"What are Missions?"}),i.jsx("p",{className:"text-sm text-sf-gray-7",children:"Each mission presents a real business problem from a fictional company. You get a scenario, specific requirements, and a starter template. Missions are designed to be completed in a real Salesforce Developer Edition org — they are not validated in the browser."})]})]})}),i.jsx("div",{className:"flex gap-2 mb-6 flex-wrap",children:["all","beginner","intermediate","advanced"].map(a=>i.jsx("button",{onClick:()=>r(a),className:`px-3 py-1 rounded-full text-sm font-medium transition-colors ${n===a?"bg-sf-blue text-white":"bg-white text-sf-gray-7 border border-sf-gray-3 hover:border-sf-blue"}`,children:a.charAt(0).toUpperCase()+a.slice(1)},a))}),i.jsx("div",{className:"space-y-4",children:s.map(a=>i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"flex items-start justify-between cursor-pointer",onClick:()=>t(e===a.id?null:a.id),children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[i.jsx("span",{className:`tag ${Xm[a.difficulty]}`,children:a.difficulty}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(Bs,{className:"w-3 h-3"})," ~",a.estimatedHours,"h"]}),i.jsx("span",{className:"text-xs text-sf-blue font-medium",children:a.company})]}),i.jsx("h3",{className:"font-bold text-lg",children:a.title}),i.jsx("p",{className:"text-sm text-sf-gray-6 mt-1",children:a.description}),i.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:a.skills.map(o=>i.jsx("span",{className:"tag bg-sf-blue/10 text-sf-blue",children:o},o))})]}),i.jsx("div",{className:"flex-shrink-0 ml-4",children:e===a.id?i.jsx(hm,{className:"w-5 h-5 text-sf-gray-5"}):i.jsx(wd,{className:"w-5 h-5 text-sf-gray-5"})})]}),e===a.id&&i.jsxs("div",{className:"mt-6 pt-6 border-t border-sf-gray-2 space-y-5",children:[i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-8 mb-2",children:"Business Scenario"}),i.jsx("div",{className:"bg-sf-blue/5 border-l-4 border-sf-blue p-4 rounded-r-lg",children:i.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed",children:a.scenario})})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-8 mb-2",children:"Requirements"}),i.jsx("ol",{className:"space-y-2",children:a.requirements.map((o,l)=>i.jsxs("li",{className:"flex gap-3 text-sm",children:[i.jsx("span",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-sf-purple text-white text-xs flex items-center justify-center font-bold",children:l+1}),i.jsx("span",{className:"text-sf-gray-7",children:o})]},l))})]}),a.starterCode&&i.jsxs("div",{children:[i.jsxs("h4",{className:"font-semibold text-sf-gray-8 mb-2 flex items-center gap-2",children:[i.jsx(xe,{className:"w-4 h-4 text-sf-teal"}),"Starter Template"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap",children:a.starterCode})]}),i.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:[i.jsxs("div",{className:"flex items-center gap-2 text-yellow-800 text-sm font-medium mb-1",children:[i.jsx(yo,{className:"w-4 h-4"})," Where to Build This"]}),i.jsxs("p",{className:"text-xs text-yellow-700",children:["This mission is designed for a real Salesforce Developer Edition org. Create one free at"," ",i.jsx("a",{href:"https://developer.salesforce.com/signup",className:"underline",target:"_blank",rel:"noreferrer",children:"developer.salesforce.com/signup"})," ","and use the Developer Console or VS Code + Salesforce Extensions."]})]})]})]},a.id))})]})}function ef(){return i.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-12",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("div",{className:"w-16 h-16 bg-sf-blue rounded-2xl flex items-center justify-center mx-auto mb-4",children:i.jsx(xe,{className:"w-8 h-8 text-white"})}),i.jsx("h1",{className:"text-3xl font-bold mb-3",children:"About SFDC Simplified"}),i.jsx("p",{className:"text-sf-gray-6 text-lg",children:"An interactive learning platform for aspiring Salesforce developers"})]}),i.jsxs("div",{className:"space-y-8",children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-3",children:"What is SFDC Simplified?"}),i.jsx("p",{className:"text-sf-gray-7 leading-relaxed",children:"SFDC Simplified is a free, browser-based learning platform designed specifically for people who are completely new to Salesforce development. Unlike documentation or video courses, every topic here follows a hands-on cycle: understand, see an example, write code, get feedback, review the solution."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"What You Will Learn"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:i.jsx(xe,{className:"w-4 h-4 text-sf-blue"}),label:"Apex Programming",desc:"Variables, classes, loops, collections"},{icon:i.jsx(Qs,{className:"w-4 h-4 text-sf-teal"}),label:"SOQL Queries",desc:"Query Salesforce data with precision"},{icon:i.jsx(nt,{className:"w-4 h-4 text-sf-orange"}),label:"DML Operations",desc:"Create, update, delete records safely"},{icon:i.jsx(Us,{className:"w-4 h-4 text-sf-purple"}),label:"Real Scenarios",desc:"Apply skills to business problems"}].map(e=>i.jsxs("div",{className:"flex gap-3 p-3 bg-sf-gray-1 rounded-lg",children:[i.jsx("div",{className:"flex-shrink-0 mt-0.5",children:e.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"font-medium text-sm",children:e.label}),i.jsx("div",{className:"text-xs text-sf-gray-6",children:e.desc})]})]},e.label))})]}),i.jsx("div",{className:"card border-2 border-amber-200 bg-amber-50",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx(Hs,{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold text-amber-900 mb-2",children:"Important Disclaimer"}),i.jsxs("p",{className:"text-amber-800 text-sm leading-relaxed",children:["SFDC Simplified is an educational learning platform and is ",i.jsx("strong",{children:"not affiliated with Salesforce, Inc."}),"The coding challenges use ",i.jsx("strong",{children:"pattern-based validation"})," in the browser — they do not compile or execute real Apex code. This means the feedback checks for the presence of correct syntax patterns, not actual runtime correctness. To test real Apex, use a ",i.jsx("a",{href:"https://developer.salesforce.com/signup",className:"underline",target:"_blank",rel:"noreferrer",children:"free Salesforce Developer Edition org"}),"."]})]})]})}),i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-3",children:"How Progress is Saved"}),i.jsxs("p",{className:"text-sf-gray-7 text-sm leading-relaxed",children:["In this initial version, all progress (completed lessons, quiz scores, XP, badges) is stored in your browser's",i.jsx("code",{className:"code-inline mx-1",children:"localStorage"}),". This means it persists across sessions on the same device and browser, but is not synced across devices. A future version will support user accounts with server-side persistence."]})]}),i.jsxs("div",{className:"card text-center",children:[i.jsx(mm,{className:"w-8 h-8 text-red-400 mx-auto mb-3"}),i.jsx("h2",{className:"text-xl font-bold mb-2",children:"Get Started"}),i.jsx("p",{className:"text-sf-gray-6 mb-4",children:"Ready to become a Salesforce developer?"}),i.jsxs(q,{to:"/apex",className:"btn-primary inline-flex items-center gap-2",children:["Start Learning ",i.jsx($n,{className:"w-4 h-4"})]})]})]})]})}function tf(e,t){try{const r=new RegExp(t.pattern,"im").test(e);return{passed:r,message:r?"Passed":t.errorMessage}}catch{return{passed:!1,message:"Test case error"}}}function nf({challenge:e,isCompleted:t,savedCode:n,onComplete:r}){const[s,a]=w.useState(n||e.starterCode),[o,l]=w.useState(-1),[c,d]=w.useState(!1),[p,m]=w.useState(null),[f,S]=w.useState(!1),v=(p==null?void 0:p.every(u=>u.passed))??!1,y=()=>{const u=e.testCases.map(g=>tf(s,g));m(u),S(!0),u.every(g=>g.passed)&&r(s)},x=()=>{a(e.starterCode),m(null),S(!1),l(-1),d(!1)},h=()=>{l(u=>Math.min(u+1,e.hints.length-1))};return i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs text-yellow-700",children:[i.jsx(Hs,{size:14,className:"flex-shrink-0 mt-0.5"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Simulated validation only."})," This checks code patterns, not actual execution. Real Apex runs in a Salesforce org."]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-9 mb-2",children:"Instructions"}),i.jsx("ol",{className:"space-y-1",children:e.instructions.map((u,g)=>i.jsxs("li",{className:"text-sm text-sf-gray-7 flex items-start gap-2",children:[i.jsxs("span",{className:"text-sf-blue font-bold flex-shrink-0",children:[g+1,"."]}),u]},g))})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"Your Code"}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("button",{onClick:x,className:"flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors",children:[i.jsx(Td,{size:12}),"Reset"]})})]}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-10 bg-sf-gray-9 rounded-tl-lg rounded-bl-lg flex flex-col items-end pr-2 pt-4 select-none",children:s.split(`
`).map((u,g)=>i.jsx("div",{className:"text-sf-gray-5 text-xs leading-[1.7] font-mono",children:g+1},g))}),i.jsx("textarea",{value:s,onChange:u=>a(u.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg pl-12 pr-4 pt-4 pb-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue",rows:Math.max(10,s.split(`
`).length+2),spellCheck:!1,autoComplete:"off",autoCorrect:"off"})]})]}),f&&p&&i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-9 mb-2",children:v?"✓ All tests passed!":"Test Results"}),i.jsx("div",{className:"space-y-2",children:p.map((u,g)=>{var b;return i.jsxs("div",{className:`flex items-start gap-2 p-3 rounded-lg text-sm ${u.passed?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:[u.passed?i.jsx(Ke,{size:15,className:"text-sf-green mt-0.5 flex-shrink-0"}):i.jsx(yi,{size:15,className:"text-sf-red mt-0.5 flex-shrink-0"}),i.jsxs("div",{children:[i.jsxs("span",{className:`font-medium ${u.passed?"text-sf-green":"text-sf-red"}`,children:["Test ",g+1,": ",(b=e.testCases[g])==null?void 0:b.description]}),!u.passed&&i.jsx("p",{className:"text-sf-gray-7 mt-0.5",children:u.message})]})]},g)})})]}),i.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[i.jsxs("button",{onClick:y,className:"btn-primary flex items-center gap-2",children:[i.jsx(Sm,{size:15}),f?"Resubmit":"Submit"]}),o<e.hints.length-1&&i.jsxs("button",{onClick:h,className:"flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors",children:[i.jsx(ws,{size:14}),o===-1?"Show Hint":"Next Hint"]}),i.jsxs("button",{onClick:()=>d(!c),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[c?i.jsx(gm,{size:14}):i.jsx(Cd,{size:14}),c?"Hide":"View"," Solution"]})]}),o>=0&&i.jsx("div",{className:"space-y-2",children:e.hints.slice(0,o+1).map((u,g)=>i.jsx("div",{className:"hint-box",children:i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx(ws,{size:15,className:"text-yellow-600 flex-shrink-0 mt-0.5"}),i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsxs("strong",{children:["Hint ",g+1,":"]})," ",u]})]})},g))}),c&&i.jsxs("div",{className:"border border-sf-gray-3 rounded-lg overflow-hidden",children:[i.jsx("div",{className:"bg-sf-gray-9 px-4 py-2 flex items-center justify-between",children:i.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Solution"})}),i.jsx("pre",{className:"code-block rounded-none text-sm overflow-x-auto",children:i.jsx("code",{children:e.solution})}),i.jsx("div",{className:"bg-blue-50 border-t border-blue-100 p-4",children:i.jsxs("p",{className:"text-sm text-sf-gray-7",children:[i.jsx("strong",{className:"text-sf-gray-9",children:"Explanation:"})," ",e.solutionExplanation]})})]}),(t||v)&&i.jsxs("div",{className:"success-box flex items-center gap-2",children:[i.jsx(Ke,{size:18,className:"text-sf-green flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("p",{className:"text-sf-green font-semibold text-sm",children:"Challenge completed! +150 XP"}),i.jsx("p",{className:"text-green-700 text-xs",children:"Your submission has been saved."})]})]})]})}function rf(){const{id:e}=fd(),{completeChallenge:t,isChallengeCompleted:n,progress:r}=zs(),s=e?Ld(e):void 0,a=s?n(s.id):!1;return s?i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[i.jsxs("nav",{className:"flex items-center gap-2 text-sm text-sf-gray-5 mb-6",children:[i.jsxs(q,{to:"/apex",className:"hover:text-sf-blue transition-colors flex items-center gap-1",children:[i.jsx(dm,{className:"w-3 h-3"})," Apex Path"]}),i.jsx("span",{children:"›"}),i.jsxs("span",{className:"text-sf-gray-7",children:["Challenge: ",s.title]})]}),i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-sf-blue/10 flex items-center justify-center",children:i.jsx(xe,{className:"w-5 h-5 text-sf-blue"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold",children:s.title}),i.jsx("p",{className:"text-sf-gray-6 text-sm",children:s.description})]})]}),i.jsx(nf,{challenge:s,onComplete:o=>t(s.id,o),isCompleted:a,savedCode:r.challengeSubmissions[s.id]})]}):i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"Challenge not found"}),i.jsx(q,{to:"/apex",className:"btn-primary",children:"Back to Apex Path"})]})}const xo=w.createContext(null);function sf(){return i.jsxs("div",{className:"max-w-xl mx-auto px-4 py-24 text-center",children:[i.jsx("div",{className:"text-6xl font-bold text-sf-gray-3 mb-4",children:"404"}),i.jsx("h2",{className:"text-xl font-bold mb-2",children:"Page not found"}),i.jsx("p",{className:"text-sf-gray-6 mb-6",children:"The page you are looking for does not exist."}),i.jsx("a",{href:"/",className:"btn-primary",children:"Go Home"})]})}function af(){const e=zs();return i.jsx(xo.Provider,{value:e,children:i.jsxs("div",{className:"min-h-screen flex flex-col",children:[i.jsx(Tm,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(Kg,{children:[i.jsx(Re,{path:"/",element:i.jsx(Dm,{})}),i.jsx(Re,{path:"/dashboard",element:i.jsx(_m,{})}),i.jsx(Re,{path:"/apex",element:i.jsx(Wm,{})}),i.jsx(Re,{path:"/lesson/:lessonId",element:i.jsx(Qm,{})}),i.jsx(Re,{path:"/soql",element:i.jsx(Vm,{})}),i.jsx(Re,{path:"/debug",element:i.jsx(Km,{})}),i.jsx(Re,{path:"/missions",element:i.jsx(Zm,{})}),i.jsx(Re,{path:"/about",element:i.jsx(ef,{})}),i.jsx(Re,{path:"/challenge/:id",element:i.jsx(rf,{})}),i.jsx(Re,{path:"*",element:i.jsx(sf,{})})]})}),i.jsx(Em,{})]})})}function of(){return i.jsx(sm,{children:i.jsx(af,{})})}id(document.getElementById("root")).render(i.jsx(w.StrictMode,{children:i.jsx(of,{})}));
