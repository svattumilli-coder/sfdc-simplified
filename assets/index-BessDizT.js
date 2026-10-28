function Od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(r,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function Rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yo={exports:{}},bs={},Go={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Dd=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),Ud=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),qd=Symbol.for("react.lazy"),Si=Symbol.iterator;function Hd(e){return e===null||typeof e!="object"?null:(e=Si&&e[Si]||e["@@iterator"],typeof e=="function"?e:null)}var Ko={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xo=Object.assign,Jo={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Jo,this.updater=n||Ko}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=Sn.prototype;function va(e,t,n){this.props=e,this.context=t,this.refs=Jo,this.updater=n||Ko}var Sa=va.prototype=new Zo;Sa.constructor=va;Xo(Sa,Sn.prototype);Sa.isPureReactComponent=!0;var wi=Array.isArray,eu=Object.prototype.hasOwnProperty,wa={current:null},tu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,s={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)eu.call(t,r)&&!tu.hasOwnProperty(r)&&(s[r]=t[r]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:pr,type:e,key:l,ref:i,props:s,_owner:wa.current}}function $d(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ni=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qd(""+e.key):t.toString(36)}function Ur(e,t,n,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case pr:case Dd:i=!0}}if(i)return i=e,s=s(i),e=r===""?"."+Gs(i,0):r,wi(s)?(n="",e!=null&&(n=e.replace(Ni,"$&/")+"/"),Ur(s,t,n,"",function(d){return d})):s!=null&&(Na(s)&&(s=$d(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(Ni,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=r===""?".":r+":",wi(e))for(var o=0;o<e.length;o++){l=e[o];var u=r+Gs(l,o);i+=Ur(l,t,n,u,s)}else if(u=Hd(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=r+Gs(l,o++),i+=Ur(l,t,n,u,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function wr(e,t,n){if(e==null)return e;var r=[],s=0;return Ur(e,r,"","",function(l){return t.call(n,l,s++)}),r}function Vd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Fr={transition:null},Yd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:wa};function ru(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Sn;O.Fragment=Md;O.Profiler=zd;O.PureComponent=va;O.StrictMode=Pd;O.Suspense=Bd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;O.act=ru;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xo({},e.props),s=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=wa.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)eu.call(t,u)&&!tu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:pr,type:e.type,key:s,ref:l,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_d,_context:e},e.Consumer=e};O.createElement=nu;O.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Fd,render:e}};O.isValidElement=Na;O.lazy=function(e){return{$$typeof:qd,_payload:{_status:-1,_result:e},_init:Vd}};O.memo=function(e,t){return{$$typeof:Wd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};O.unstable_act=ru;O.useCallback=function(e,t){return de.current.useCallback(e,t)};O.useContext=function(e){return de.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return de.current.useDeferredValue(e)};O.useEffect=function(e,t){return de.current.useEffect(e,t)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return de.current.useMemo(e,t)};O.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};O.useRef=function(e){return de.current.useRef(e)};O.useState=function(e){return de.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return de.current.useTransition()};O.version="18.3.1";Go.exports=O;var N=Go.exports;const Gd=Rd(N),Kd=Od({__proto__:null,default:Gd},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=N,Jd=Symbol.for("react.element"),Zd=Symbol.for("react.fragment"),ep=Object.prototype.hasOwnProperty,tp=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,np={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,s={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ep.call(t,r)&&!np.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Jd,type:e,key:l,ref:i,props:s,_owner:tp.current}}bs.Fragment=Zd;bs.jsx=su;bs.jsxs=su;Yo.exports=bs;var a=Yo.exports,lu={exports:{}},Ce={},au={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,A){var T=j.length;j.push(A);e:for(;0<T;){var V=T-1>>>1,Z=j[V];if(0<s(Z,A))j[V]=A,j[T]=Z,T=V;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var A=j[0],T=j.pop();if(T!==A){j[0]=T;e:for(var V=0,Z=j.length,vr=Z>>>1;V<vr;){var It=2*(V+1)-1,Ys=j[It],At=It+1,Sr=j[At];if(0>s(Ys,T))At<Z&&0>s(Sr,Ys)?(j[V]=Sr,j[At]=T,V=At):(j[V]=Ys,j[It]=T,V=It);else if(At<Z&&0>s(Sr,T))j[V]=Sr,j[At]=T,V=At;else break e}}return A}function s(j,A){var T=j.sortIndex-A.sortIndex;return T!==0?T:j.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var u=[],d=[],p=1,h=null,g=3,S=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var A=n(d);A!==null;){if(A.callback===null)r(d);else if(A.startTime<=j)r(d),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(d)}}function w(j){if(y=!1,m(j),!v)if(n(u)!==null)v=!0,Qs(b);else{var A=n(d);A!==null&&Vs(w,A.startTime-j)}}function b(j,A){v=!1,y&&(y=!1,f(I),I=-1),S=!0;var T=g;try{for(m(A),h=n(u);h!==null&&(!(h.expirationTime>A)||j&&!Te());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var Z=V(h.expirationTime<=A);A=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(u)&&r(u),m(A)}else r(u);h=n(u)}if(h!==null)var vr=!0;else{var It=n(d);It!==null&&Vs(w,It.startTime-A),vr=!1}return vr}finally{h=null,g=T,S=!1}}var E=!1,L=null,I=-1,Q=5,R=-1;function Te(){return!(e.unstable_now()-R<Q)}function Cn(){if(L!==null){var j=e.unstable_now();R=j;var A=!0;try{A=L(!0,j)}finally{A?bn():(E=!1,L=null)}}else E=!1}var bn;if(typeof c=="function")bn=function(){c(Cn)};else if(typeof MessageChannel<"u"){var vi=new MessageChannel,Td=vi.port2;vi.port1.onmessage=Cn,bn=function(){Td.postMessage(null)}}else bn=function(){x(Cn,0)};function Qs(j){L=j,E||(E=!0,bn())}function Vs(j,A){I=x(function(){j(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||S||(v=!0,Qs(b))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var T=g;g=A;try{return j()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,A){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var T=g;g=j;try{return A()}finally{g=T}},e.unstable_scheduleCallback=function(j,A,T){var V=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?V+T:V):T=V,j){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,j={id:p++,callback:A,priorityLevel:j,startTime:T,expirationTime:Z,sortIndex:-1},T>V?(j.sortIndex=T,t(d,j),n(u)===null&&j===n(d)&&(y?(f(I),I=-1):y=!0,Vs(w,T-V))):(j.sortIndex=Z,t(u,j),v||S||(v=!0,Qs(b))),j},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(j){var A=g;return function(){var T=g;g=A;try{return j.apply(this,arguments)}finally{g=T}}}})(iu);au.exports=iu;var rp=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=N,Ne=rp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou=new Set,Vn={};function qt(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)ou.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ci={},bi={};function ap(e){return Cl.call(bi,e)?!0:Cl.call(Ci,e)?!1:lp.test(e)?bi[e]=!0:(Ci[e]=!0,!1)}function ip(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function op(e,t,n,r){if(t===null||typeof t>"u"||ip(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,s,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ca=/[\-:]([a-z])/g;function ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ca,ba);se[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ca,ba);se[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ca,ba);se[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ea(e,t,n,r){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(op(t,n,s,r)&&(n=null),r||s===null?ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),cu=Symbol.for("react.context"),ja=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),La=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),du=Symbol.for("react.offscreen"),Ei=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=Ei&&e[Ei]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ks;function Rn(e){if(Ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ks=t&&t[1]||""}return`
`+Ks+e}var Xs=!1;function Js(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),l=r.stack.split(`
`),i=s.length-1,o=l.length-1;1<=i&&0<=o&&s[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(s[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||s[i]!==l[o]){var u=`
`+s[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=o);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function up(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Yt:return"Portal";case bl:return"Profiler";case ka:return"StrictMode";case El:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cu:return(e.displayName||"Context")+".Consumer";case uu:return(e._context.displayName||"Context")+".Provider";case ja:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case La:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function cp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dp(e){var t=pu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=dp(e))}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ki(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mu(e,t){t=t.checked,t!=null&&Ea(e,"checked",t,!1)}function Il(e,t){mu(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ji(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Li(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Dn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function hu(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ii(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function vu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var fp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,t){if(t){if(fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,on=null,un=null;function Ai(e){if(e=hr(e)){if(typeof Pl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Is(t),Pl(e.stateNode,e.type,t))}}function Su(e){on?un?un.push(e):un=[e]:on=e}function wu(){if(on){var e=on,t=un;if(un=on=null,Ai(e),t)for(e=0;e<t.length;e++)Ai(t[e])}}function Nu(e,t){return e(t)}function Cu(){}var Zs=!1;function bu(e,t,n){if(Zs)return e(t,n);Zs=!0;try{return Nu(e,t,n)}finally{Zs=!1,(on!==null||un!==null)&&(Cu(),wu())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Is(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var zl=!1;if(Je)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){zl=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{zl=!1}function mp(e,t,n,r,s,l,i,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var _n=!1,Jr=null,Zr=!1,_l=null,hp={onError:function(e){_n=!0,Jr=e}};function gp(e,t,n,r,s,l,i,o,u){_n=!1,Jr=null,mp.apply(hp,arguments)}function yp(e,t,n,r,s,l,i,o,u){if(gp.apply(this,arguments),_n){if(_n){var d=Jr;_n=!1,Jr=null}else throw Error(C(198));Zr||(Zr=!0,_l=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ti(e){if(Ht(e)!==e)throw Error(C(188))}function xp(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return Ti(s),e;if(l===r)return Ti(s),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=s,r=l;else{for(var i=!1,o=s.child;o;){if(o===n){i=!0,n=s,r=l;break}if(o===r){i=!0,r=s,n=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===n){i=!0,n=l,r=s;break}if(o===r){i=!0,r=l,n=s;break}o=o.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function ku(e){return e=xp(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Lu=Ne.unstable_scheduleCallback,Oi=Ne.unstable_cancelCallback,vp=Ne.unstable_shouldYield,Sp=Ne.unstable_requestPaint,Y=Ne.unstable_now,wp=Ne.unstable_getCurrentPriorityLevel,Aa=Ne.unstable_ImmediatePriority,Iu=Ne.unstable_UserBlockingPriority,es=Ne.unstable_NormalPriority,Np=Ne.unstable_LowPriority,Au=Ne.unstable_IdlePriority,Es=null,He=null;function Cp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:kp,bp=Math.log,Ep=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(bp(e)/Ep|0)|0}var Er=64,kr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var o=i&~s;o!==0?r=Mn(o):(l&=i,l!==0&&(r=Mn(l)))}else i=n&~s,i!==0?r=Mn(i):l!==0&&(r=Mn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),s=1<<n,r|=e[n],t&=~s;return r}function jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ze(l),o=1<<i,u=s[i];u===-1?(!(o&n)||o&r)&&(s[i]=jp(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tu(){var e=Er;return Er<<=1,!(Er&4194240)&&(Er=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-ze(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function Ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var P=0;function Ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,Oa,Du,Mu,Pu,Fl=!1,jr=[],ft=null,mt=null,ht=null,Kn=new Map,Xn=new Map,it=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ri(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function jn(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=hr(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Tp(e,t,n,r,s){switch(t){case"focusin":return ft=jn(ft,e,t,n,r,s),!0;case"dragenter":return mt=jn(mt,e,t,n,r,s),!0;case"mouseover":return ht=jn(ht,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Kn.set(l,jn(Kn.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Xn.set(l,jn(Xn.get(l)||null,e,t,n,r,s)),!0}return!1}function zu(e){var t=Rt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Eu(n),t!==null){e.blockedOn=t,Pu(e.priority,function(){Du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=hr(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Di(e,t,n){Br(e)&&n.delete(t)}function Op(){Fl=!1,ft!==null&&Br(ft)&&(ft=null),mt!==null&&Br(mt)&&(mt=null),ht!==null&&Br(ht)&&(ht=null),Kn.forEach(Di),Xn.forEach(Di)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Fl||(Fl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Op)))}function Jn(e){function t(s){return Ln(s,e)}if(0<jr.length){Ln(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Ln(ft,e),mt!==null&&Ln(mt,e),ht!==null&&Ln(ht,e),Kn.forEach(t),Xn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)zu(n),n.blockedOn===null&&it.shift()}var cn=rt.ReactCurrentBatchConfig,ns=!0;function Rp(e,t,n,r){var s=P,l=cn.transition;cn.transition=null;try{P=1,Ra(e,t,n,r)}finally{P=s,cn.transition=l}}function Dp(e,t,n,r){var s=P,l=cn.transition;cn.transition=null;try{P=4,Ra(e,t,n,r)}finally{P=s,cn.transition=l}}function Ra(e,t,n,r){if(ns){var s=Bl(e,t,n,r);if(s===null)cl(e,t,r,rs,n),Ri(e,r);else if(Tp(s,e,t,n,r))r.stopPropagation();else if(Ri(e,r),t&4&&-1<Ap.indexOf(e)){for(;s!==null;){var l=hr(s);if(l!==null&&Ru(l),l=Bl(e,t,n,r),l===null&&cl(e,t,r,rs,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var rs=null;function Bl(e,t,n,r){if(rs=null,e=Ia(r),e=Rt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wp()){case Aa:return 1;case Iu:return 4;case es:case Np:return 16;case Au:return 536870912;default:return 16}default:return 16}}var ut=null,Da=null,Wr=null;function Uu(){if(Wr)return Wr;var e,t=Da,n=t.length,r,s="value"in ut?ut.value:ut.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===s[l-r];r++);return Wr=s.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function Mi(){return!1}function be(e){function t(n,r,s,l,i){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Lr:Mi,this.isPropagationStopped=Mi,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=be(wn),mr=H({},wn,{view:0,detail:0}),Mp=be(mr),tl,nl,In,ks=H({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(tl=e.screenX-In.screenX,nl=e.screenY-In.screenY):nl=tl=0,In=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),Pi=be(ks),Pp=H({},ks,{dataTransfer:0}),zp=be(Pp),_p=H({},mr,{relatedTarget:0}),rl=be(_p),Up=H({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=be(Up),Bp=H({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=be(Bp),qp=H({},wn,{data:0}),zi=be(qp),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qp[e])?!!t[e]:!1}function Pa(){return Vp}var Yp=H({},mr,{key:function(e){if(e.key){var t=Hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=be(Yp),Kp=H({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_i=be(Kp),Xp=H({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Jp=be(Xp),Zp=H({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ef=be(Zp),tf=H({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=be(tf),rf=[9,13,27,32],za=Je&&"CompositionEvent"in window,Un=null;Je&&"documentMode"in document&&(Un=document.documentMode);var sf=Je&&"TextEvent"in window&&!Un,Fu=Je&&(!za||Un&&8<Un&&11>=Un),Ui=" ",Fi=!1;function Bu(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function lf(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:(Fi=!0,Ui);case"textInput":return e=t.data,e===Ui&&Fi?null:e;default:return null}}function af(e,t){if(Kt)return e==="compositionend"||!za&&Bu(e,t)?(e=Uu(),Wr=Da=ut=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!of[e.type]:t==="textarea"}function qu(e,t,n,r){Su(r),t=ss(t,"onChange"),0<t.length&&(n=new Ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fn=null,Zn=null;function uf(e){ec(e,0)}function js(e){var t=Zt(e);if(fu(t))return e}function cf(e,t){if(e==="change")return t}var Hu=!1;if(Je){var sl;if(Je){var ll="oninput"in document;if(!ll){var Wi=document.createElement("div");Wi.setAttribute("oninput","return;"),ll=typeof Wi.oninput=="function"}sl=ll}else sl=!1;Hu=sl&&(!document.documentMode||9<document.documentMode)}function qi(){Fn&&(Fn.detachEvent("onpropertychange",$u),Zn=Fn=null)}function $u(e){if(e.propertyName==="value"&&js(Zn)){var t=[];qu(t,Zn,e,Ia(e)),bu(uf,t)}}function df(e,t,n){e==="focusin"?(qi(),Fn=t,Zn=n,Fn.attachEvent("onpropertychange",$u)):e==="focusout"&&qi()}function pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(Zn)}function ff(e,t){if(e==="click")return js(t)}function mf(e,t){if(e==="input"||e==="change")return js(t)}function hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:hf;function er(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Cl.call(t,s)||!Ue(e[s],t[s]))return!1}return!0}function Hi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $i(e,t){var n=Hi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hi(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gf(e){var t=Vu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&_a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=$i(n,l);var i=$i(n,r);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yf=Je&&"documentMode"in document&&11>=document.documentMode,Xt=null,Wl=null,Bn=null,ql=!1;function Qi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||Xt==null||Xt!==Xr(r)||(r=Xt,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&er(Bn,r)||(Bn=r,r=ss(Wl,"onSelect"),0<r.length&&(t=new Ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},al={},Yu={};Je&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Ls(e){if(al[e])return al[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yu)return al[e]=t[n];return e}var Gu=Ls("animationend"),Ku=Ls("animationiteration"),Xu=Ls("animationstart"),Ju=Ls("transitionend"),Zu=new Map,Vi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){Zu.set(e,t),qt(t,[e])}for(var il=0;il<Vi.length;il++){var ol=Vi[il],xf=ol.toLowerCase(),vf=ol[0].toUpperCase()+ol.slice(1);Et(xf,"on"+vf)}Et(Gu,"onAnimationEnd");Et(Ku,"onAnimationIteration");Et(Xu,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Ju,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function Yi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yp(r,t,void 0,e),e.currentTarget=null}function ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var o=r[i],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==l&&s.isPropagationStopped())break e;Yi(s,o,d),l=u}else for(i=0;i<r.length;i++){if(o=r[i],u=o.instance,d=o.currentTarget,o=o.listener,u!==l&&s.isPropagationStopped())break e;Yi(s,o,d),l=u}}}if(Zr)throw e=_l,Zr=!1,_l=null,e}function U(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),tc(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Ar]){e[Ar]=!0,ou.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,ul("selectionchange",!1,t))}}function tc(e,t,n,r){switch(_u(t)){case 1:var s=Rp;break;case 4:s=Dp;break;default:s=Ra}n=s.bind(null,t,n,e),s=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;i=i.return}for(;o!==null;){if(i=Rt(o),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}o=o.parentNode}}r=r.return}bu(function(){var d=l,p=Ia(n),h=[];e:{var g=Zu.get(e);if(g!==void 0){var S=Ma,v=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":S=Gp;break;case"focusin":v="focus",S=rl;break;case"focusout":v="blur",S=rl;break;case"beforeblur":case"afterblur":S=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Pi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Jp;break;case Gu:case Ku:case Xu:S=Fp;break;case Ju:S=ef;break;case"scroll":S=Mp;break;case"wheel":S=nf;break;case"copy":case"cut":case"paste":S=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=_i}var y=(t&4)!==0,x=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var c=d,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=Gn(c,f),w!=null&&y.push(nr(c,w,m)))),x)break;c=c.return}0<y.length&&(g=new S(g,v,null,n,p),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Ml&&(v=n.relatedTarget||n.fromElement)&&(Rt(v)||v[Ze]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(v=n.relatedTarget||n.toElement,S=d,v=v?Rt(v):null,v!==null&&(x=Ht(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=d),S!==v)){if(y=Pi,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=_i,w="onPointerLeave",f="onPointerEnter",c="pointer"),x=S==null?g:Zt(S),m=v==null?g:Zt(v),g=new y(w,c+"leave",S,n,p),g.target=x,g.relatedTarget=m,w=null,Rt(p)===d&&(y=new y(f,c+"enter",v,n,p),y.target=m,y.relatedTarget=x,w=y),x=w,S&&v)t:{for(y=S,f=v,c=0,m=y;m;m=Vt(m))c++;for(m=0,w=f;w;w=Vt(w))m++;for(;0<c-m;)y=Vt(y),c--;for(;0<m-c;)f=Vt(f),m--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=Vt(y),f=Vt(f)}y=null}else y=null;S!==null&&Gi(h,g,S,y,!1),v!==null&&x!==null&&Gi(h,x,v,y,!0)}}e:{if(g=d?Zt(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var b=cf;else if(Bi(g))if(Hu)b=mf;else{b=pf;var E=df}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=ff);if(b&&(b=b(e,d))){qu(h,b,n,p);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Al(g,"number",g.value)}switch(E=d?Zt(d):window,e){case"focusin":(Bi(E)||E.contentEditable==="true")&&(Xt=E,Wl=d,Bn=null);break;case"focusout":Bn=Wl=Xt=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,Qi(h,n,p);break;case"selectionchange":if(yf)break;case"keydown":case"keyup":Qi(h,n,p)}var L;if(za)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Kt?Bu(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Fu&&n.locale!=="ko"&&(Kt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Kt&&(L=Uu()):(ut=p,Da="value"in ut?ut.value:ut.textContent,Kt=!0)),E=ss(d,I),0<E.length&&(I=new zi(I,e,null,n,p),h.push({event:I,listeners:E}),L?I.data=L:(L=Wu(n),L!==null&&(I.data=L)))),(L=sf?lf(e,n):af(e,n))&&(d=ss(d,"onBeforeInput"),0<d.length&&(p=new zi("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:d}),p.data=L))}ec(h,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Gn(e,n),l!=null&&r.unshift(nr(e,l,s)),l=Gn(e,t),l!=null&&r.push(nr(e,l,s))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gi(e,t,n,r,s){for(var l=t._reactName,i=[];n!==null&&n!==r;){var o=n,u=o.alternate,d=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&d!==null&&(o=d,s?(u=Gn(n,l),u!=null&&i.unshift(nr(n,u,o))):s||(u=Gn(n,l),u!=null&&i.push(nr(n,u,o)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var wf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Ki(e){return(typeof e=="string"?e:""+e).replace(wf,`
`).replace(Nf,"")}function Tr(e,t,n){if(t=Ki(t),Ki(e)!==t&&n)throw Error(C(425))}function ls(){}var Hl=null,$l=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Xi=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Xi<"u"?function(e){return Xi.resolve(null).then(e).catch(Ef)}:Vl;function Ef(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Jn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ji(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),We="__reactFiber$"+Nn,rr="__reactProps$"+Nn,Ze="__reactContainer$"+Nn,Yl="__reactEvents$"+Nn,kf="__reactListeners$"+Nn,jf="__reactHandles$"+Nn;function Rt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ji(e);e!==null;){if(n=e[We])return n;e=Ji(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[We]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Is(e){return e[rr]||null}var Gl=[],en=-1;function kt(e){return{current:e}}function F(e){0>en||(e.current=Gl[en],Gl[en]=null,en--)}function _(e,t){en++,Gl[en]=e.current,e.current=t}var bt={},oe=kt(bt),he=kt(!1),_t=bt;function mn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ge(e){return e=e.childContextTypes,e!=null}function as(){F(he),F(oe)}function Zi(e,t,n){if(oe.current!==bt)throw Error(C(168));_(oe,t),_(he,n)}function nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(C(108,cp(e)||"Unknown",s));return H({},n,r)}function is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,_t=oe.current,_(oe,e),_(he,he.current),!0}function eo(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=nc(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,F(he),F(oe),_(oe,e)):F(he),_(he,n)}var Ve=null,As=!1,pl=!1;function rc(e){Ve===null?Ve=[e]:Ve.push(e)}function Lf(e){As=!0,rc(e)}function jt(){if(!pl&&Ve!==null){pl=!0;var e=0,t=P;try{var n=Ve;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,As=!1}catch(s){throw Ve!==null&&(Ve=Ve.slice(e+1)),Lu(Aa,jt),s}finally{P=t,pl=!1}}return null}var tn=[],nn=0,os=null,us=0,Ee=[],ke=0,Ut=null,Ye=1,Ge="";function Tt(e,t){tn[nn++]=us,tn[nn++]=os,os=e,us=t}function sc(e,t,n){Ee[ke++]=Ye,Ee[ke++]=Ge,Ee[ke++]=Ut,Ut=e;var r=Ye;e=Ge;var s=32-ze(r)-1;r&=~(1<<s),n+=1;var l=32-ze(t)+s;if(30<l){var i=s-s%5;l=(r&(1<<i)-1).toString(32),r>>=i,s-=i,Ye=1<<32-ze(t)+s|n<<s|r,Ge=l+e}else Ye=1<<l|n<<s|r,Ge=e}function Ua(e){e.return!==null&&(Tt(e,1),sc(e,1,0))}function Fa(e){for(;e===os;)os=tn[--nn],tn[nn]=null,us=tn[--nn],tn[nn]=null;for(;e===Ut;)Ut=Ee[--ke],Ee[ke]=null,Ge=Ee[--ke],Ee[ke]=null,Ye=Ee[--ke],Ee[ke]=null}var we=null,Se=null,B=!1,Pe=null;function lc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function to(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,Se=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,Se=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(B){var t=Se;if(t){var n=t;if(!to(e,t)){if(Kl(e))throw Error(C(418));t=gt(n.nextSibling);var r=we;t&&to(e,t)?lc(r,n):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if(Kl(e))throw Error(C(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function no(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Or(e){if(e!==we)return!1;if(!B)return no(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=Se)){if(Kl(e))throw ac(),Error(C(418));for(;t;)lc(e,t),t=gt(t.nextSibling)}if(no(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=we?gt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=Se;e;)e=gt(e.nextSibling)}function hn(){Se=we=null,B=!1}function Ba(e){Pe===null?Pe=[e]:Pe.push(e)}var If=rt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var o=s.refs;i===null?delete o[l]:o[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ro(e){var t=e._init;return t(e._payload)}function ic(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function s(f,c){return f=St(f,c),f.index=0,f.sibling=null,f}function l(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,c,m,w){return c===null||c.tag!==6?(c=vl(m,f.mode,w),c.return=f,c):(c=s(c,m),c.return=f,c)}function u(f,c,m,w){var b=m.type;return b===Gt?p(f,c,m.props.children,w,m.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lt&&ro(b)===c.type)?(w=s(c,m.props),w.ref=An(f,c,m),w.return=f,w):(w=Kr(m.type,m.key,m.props,null,f.mode,w),w.ref=An(f,c,m),w.return=f,w)}function d(f,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Sl(m,f.mode,w),c.return=f,c):(c=s(c,m.children||[]),c.return=f,c)}function p(f,c,m,w,b){return c===null||c.tag!==7?(c=zt(m,f.mode,w,b),c.return=f,c):(c=s(c,m),c.return=f,c)}function h(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vl(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Nr:return m=Kr(c.type,c.key,c.props,null,f.mode,m),m.ref=An(f,null,c),m.return=f,m;case Yt:return c=Sl(c,f.mode,m),c.return=f,c;case lt:var w=c._init;return h(f,w(c._payload),m)}if(Dn(c)||En(c))return c=zt(c,f.mode,m,null),c.return=f,c;Rr(f,c)}return null}function g(f,c,m,w){var b=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:o(f,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Nr:return m.key===b?u(f,c,m,w):null;case Yt:return m.key===b?d(f,c,m,w):null;case lt:return b=m._init,g(f,c,b(m._payload),w)}if(Dn(m)||En(m))return b!==null?null:p(f,c,m,w,null);Rr(f,m)}return null}function S(f,c,m,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,o(c,f,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Nr:return f=f.get(w.key===null?m:w.key)||null,u(c,f,w,b);case Yt:return f=f.get(w.key===null?m:w.key)||null,d(c,f,w,b);case lt:var E=w._init;return S(f,c,m,E(w._payload),b)}if(Dn(w)||En(w))return f=f.get(m)||null,p(c,f,w,b,null);Rr(c,w)}return null}function v(f,c,m,w){for(var b=null,E=null,L=c,I=c=0,Q=null;L!==null&&I<m.length;I++){L.index>I?(Q=L,L=null):Q=L.sibling;var R=g(f,L,m[I],w);if(R===null){L===null&&(L=Q);break}e&&L&&R.alternate===null&&t(f,L),c=l(R,c,I),E===null?b=R:E.sibling=R,E=R,L=Q}if(I===m.length)return n(f,L),B&&Tt(f,I),b;if(L===null){for(;I<m.length;I++)L=h(f,m[I],w),L!==null&&(c=l(L,c,I),E===null?b=L:E.sibling=L,E=L);return B&&Tt(f,I),b}for(L=r(f,L);I<m.length;I++)Q=S(L,f,I,m[I],w),Q!==null&&(e&&Q.alternate!==null&&L.delete(Q.key===null?I:Q.key),c=l(Q,c,I),E===null?b=Q:E.sibling=Q,E=Q);return e&&L.forEach(function(Te){return t(f,Te)}),B&&Tt(f,I),b}function y(f,c,m,w){var b=En(m);if(typeof b!="function")throw Error(C(150));if(m=b.call(m),m==null)throw Error(C(151));for(var E=b=null,L=c,I=c=0,Q=null,R=m.next();L!==null&&!R.done;I++,R=m.next()){L.index>I?(Q=L,L=null):Q=L.sibling;var Te=g(f,L,R.value,w);if(Te===null){L===null&&(L=Q);break}e&&L&&Te.alternate===null&&t(f,L),c=l(Te,c,I),E===null?b=Te:E.sibling=Te,E=Te,L=Q}if(R.done)return n(f,L),B&&Tt(f,I),b;if(L===null){for(;!R.done;I++,R=m.next())R=h(f,R.value,w),R!==null&&(c=l(R,c,I),E===null?b=R:E.sibling=R,E=R);return B&&Tt(f,I),b}for(L=r(f,L);!R.done;I++,R=m.next())R=S(L,f,I,R.value,w),R!==null&&(e&&R.alternate!==null&&L.delete(R.key===null?I:R.key),c=l(R,c,I),E===null?b=R:E.sibling=R,E=R);return e&&L.forEach(function(Cn){return t(f,Cn)}),B&&Tt(f,I),b}function x(f,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Gt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Nr:e:{for(var b=m.key,E=c;E!==null;){if(E.key===b){if(b=m.type,b===Gt){if(E.tag===7){n(f,E.sibling),c=s(E,m.props.children),c.return=f,f=c;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lt&&ro(b)===E.type){n(f,E.sibling),c=s(E,m.props),c.ref=An(f,E,m),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===Gt?(c=zt(m.props.children,f.mode,w,m.key),c.return=f,f=c):(w=Kr(m.type,m.key,m.props,null,f.mode,w),w.ref=An(f,c,m),w.return=f,f=w)}return i(f);case Yt:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=s(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Sl(m,f.mode,w),c.return=f,f=c}return i(f);case lt:return E=m._init,x(f,c,E(m._payload),w)}if(Dn(m))return v(f,c,m,w);if(En(m))return y(f,c,m,w);Rr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=s(c,m),c.return=f,f=c):(n(f,c),c=vl(m,f.mode,w),c.return=f,f=c),i(f)):n(f,c)}return x}var gn=ic(!0),oc=ic(!1),cs=kt(null),ds=null,rn=null,Wa=null;function qa(){Wa=rn=ds=null}function Ha(e){var t=cs.current;F(cs),e._currentValue=t}function Jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ds=e,Wa=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(Wa!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ds===null)throw Error(C(308));rn=e,ds.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Dt=null;function $a(e){Dt===null?Dt=[e]:Dt.push(e)}function uc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,$a(t)):(n.next=s.next,s.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,et(e,n)}return s=r.interleaved,s===null?(t.next=t,$a(r)):(t.next=s.next,s.next=t),r.interleaved=t,et(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}function so(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ps(e,t,n,r){var s=e.updateQueue;at=!1;var l=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var u=o,d=u.next;u.next=null,i===null?l=d:i.next=d,i=u;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==i&&(o===null?p.firstBaseUpdate=d:o.next=d,p.lastBaseUpdate=u))}if(l!==null){var h=s.baseState;i=0,p=d=u=null,o=l;do{var g=o.lane,S=o.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,y=o;switch(g=t,S=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(S,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(S,h,g):v,g==null)break e;h=H({},h,g);break e;case 2:at=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[o]:g.push(o))}else S={eventTime:S,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(d=p=S,u=h):p=p.next=S,i|=g;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;g=o,o=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=h),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);Bt|=i,e.lanes=i,e.memoizedState=h}}function lo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(C(191,s));s.call(r)}}}var gr={},$e=kt(gr),sr=kt(gr),lr=kt(gr);function Mt(e){if(e===gr)throw Error(C(174));return e}function Va(e,t){switch(_(lr,t),_(sr,e),_($e,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}F($e),_($e,t)}function yn(){F($e),F(sr),F(lr)}function dc(e){Mt(lr.current);var t=Mt($e.current),n=Ol(t,e.type);t!==n&&(_(sr,e),_($e,n))}function Ya(e){sr.current===e&&(F($e),F(sr))}var W=kt(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function Ga(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var $r=rt.ReactCurrentDispatcher,ml=rt.ReactCurrentBatchConfig,Ft=0,q=null,X=null,ee=null,ms=!1,Wn=!1,ar=0,Af=0;function le(){throw Error(C(321))}function Ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Xa(e,t,n,r,s,l){if(Ft=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Df:Mf,e=n(r,s),Wn){l=0;do{if(Wn=!1,ar=0,25<=l)throw Error(C(301));l+=1,ee=X=null,t.updateQueue=null,$r.current=Pf,e=n(r,s)}while(Wn)}if($r.current=hs,t=X!==null&&X.next!==null,Ft=0,ee=X=q=null,ms=!1,t)throw Error(C(300));return e}function Ja(){var e=ar!==0;return ar=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?q.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(X===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?q.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(C(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?q.memoizedState=ee=e:ee=ee.next=e}return ee}function ir(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=X,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var i=s.next;s.next=l.next,l.next=i}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var o=i=null,u=null,d=l;do{var p=d.lane;if((Ft&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=h,i=r):u=u.next=h,q.lanes|=p,Bt|=p}d=d.next}while(d!==null&&d!==l);u===null?i=r:u.next=o,Ue(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,q.lanes|=l,Bt|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var i=s=s.next;do l=e(l,i.action),i=i.next;while(i!==s);Ue(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pc(){}function fc(e,t){var n=q,r=Ae(),s=t(),l=!Ue(r.memoizedState,s);if(l&&(r.memoizedState=s,me=!0),r=r.queue,Za(gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,or(9,hc.bind(null,n,r,s,t),void 0,null),te===null)throw Error(C(349));Ft&30||mc(n,t,s)}return s}function mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&xc(e)}function gc(e,t,n){return n(function(){yc(t)&&xc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function xc(e){var t=et(e,1);t!==null&&_e(t,e,1,-1)}function ao(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Rf.bind(null,q,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vc(){return Ae().memoizedState}function Qr(e,t,n,r){var s=Be();q.flags|=e,s.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Ts(e,t,n,r){var s=Ae();r=r===void 0?null:r;var l=void 0;if(X!==null){var i=X.memoizedState;if(l=i.destroy,r!==null&&Ka(r,i.deps)){s.memoizedState=or(t,n,l,r);return}}q.flags|=e,s.memoizedState=or(1|t,n,l,r)}function io(e,t){return Qr(8390656,8,e,t)}function Za(e,t){return Ts(2048,8,e,t)}function Sc(e,t){return Ts(4,2,e,t)}function wc(e,t){return Ts(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,Ts(4,4,Nc.bind(null,t,e),n)}function ei(){}function bc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ec(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kc(e,t,n){return Ft&21?(Ue(n,t)||(n=Tu(),q.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Tf(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{P=n,ml.transition=r}}function jc(){return Ae().memoizedState}function Of(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(e))Ic(t,n);else if(n=uc(e,t,n,r),n!==null){var s=ce();_e(n,e,r,s),Ac(n,t,r)}}function Rf(e,t,n){var r=vt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Ic(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,o=l(i,n);if(s.hasEagerState=!0,s.eagerState=o,Ue(o,i)){var u=t.interleaved;u===null?(s.next=s,$a(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=uc(e,t,s,r),n!==null&&(s=ce(),_e(n,e,r,s),Ac(n,t,r))}}function Lc(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ic(e,t){Wn=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}var hs={readContext:Ie,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Df={readContext:Ie,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:io,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Of.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:ao,useDebugValue:ei,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=ao(!1),t=e[0];return e=Tf.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,s=Be();if(B){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),te===null)throw Error(C(349));Ft&30||mc(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,io(gc.bind(null,r,l,e),[e]),r.flags|=2048,or(9,hc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(B){var n=Ge,r=Ye;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mf={readContext:Ie,useCallback:bc,useContext:Ie,useEffect:Za,useImperativeHandle:Cc,useInsertionEffect:Sc,useLayoutEffect:wc,useMemo:Ec,useReducer:hl,useRef:vc,useState:function(){return hl(ir)},useDebugValue:ei,useDeferredValue:function(e){var t=Ae();return kc(t,X.memoizedState,e)},useTransition:function(){var e=hl(ir)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:fc,useId:jc,unstable_isNewReconciler:!1},Pf={readContext:Ie,useCallback:bc,useContext:Ie,useEffect:Za,useImperativeHandle:Cc,useInsertionEffect:Sc,useLayoutEffect:wc,useMemo:Ec,useReducer:gl,useRef:vc,useState:function(){return gl(ir)},useDebugValue:ei,useDeferredValue:function(e){var t=Ae();return X===null?t.memoizedState=e:kc(t,X.memoizedState,e)},useTransition:function(){var e=gl(ir)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:fc,useId:jc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Os={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),s=vt(e),l=Ke(r,s);l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,s),t!==null&&(_e(t,e,s,r),Hr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),s=vt(e),l=Ke(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,s),t!==null&&(_e(t,e,s,r),Hr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=vt(e),s=Ke(n,r);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,r),t!==null&&(_e(t,e,r,n),Hr(t,e,r))}};function oo(e,t,n,r,s,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(s,l):!0}function Tc(e,t,n){var r=!1,s=bt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ie(l):(s=ge(t)?_t:oe.current,r=t.contextTypes,l=(r=r!=null)?mn(e,s):bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function uo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Qa(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Ie(l):(l=ge(t)?_t:oe.current,s.context=mn(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Zl(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Os.enqueueReplaceState(s,s.state,null),ps(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=up(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zf=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,da=r),ta(e,t)},n}function Rc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ta(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ta(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function co(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Xf.bind(null,e,t,n),t.then(e,e))}function po(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fo(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var _f=rt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?oc(t,null,n,r):gn(t,e.child,n,r)}function mo(e,t,n,r,s){n=n.render;var l=t.ref;return dn(t,s),r=Xa(e,t,n,r,l,s),n=Ja(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(B&&n&&Ua(t),t.flags|=1,ue(e,t,r,s),t.child)}function ho(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!oi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Dc(e,t,l,r,s)):(e=Kr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return tt(e,t,s)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,tt(e,t,s)}return na(e,t,n,r,s)}function Mc(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(ln,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(ln,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,_(ln,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,_(ln,ve),ve|=r;return ue(e,t,s,n),t.child}function Pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,n,r,s){var l=ge(n)?_t:oe.current;return l=mn(t,l),dn(t,s),n=Xa(e,t,n,r,l,s),r=Ja(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(B&&r&&Ua(t),t.flags|=1,ue(e,t,n,s),t.child)}function go(e,t,n,r,s){if(ge(n)){var l=!0;is(t)}else l=!1;if(dn(t,s),t.stateNode===null)Vr(e,t),Tc(t,n,r),ea(t,n,r,s),r=!0;else if(e===null){var i=t.stateNode,o=t.memoizedProps;i.props=o;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ie(d):(d=ge(n)?_t:oe.current,d=mn(t,d));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||u!==d)&&uo(t,i,r,d),at=!1;var g=t.memoizedState;i.state=g,ps(t,r,i,s),u=t.memoizedState,o!==r||g!==u||he.current||at?(typeof p=="function"&&(Zl(t,n,p,r),u=t.memoizedState),(o=at||oo(t,n,o,r,g,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cc(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:De(t.type,o),i.props=d,h=t.pendingProps,g=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ie(u):(u=ge(n)?_t:oe.current,u=mn(t,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==h||g!==u)&&uo(t,i,r,u),at=!1,g=t.memoizedState,i.state=g,ps(t,r,i,s);var v=t.memoizedState;o!==h||g!==v||he.current||at?(typeof S=="function"&&(Zl(t,n,S,r),v=t.memoizedState),(d=at||oo(t,n,d,r,g,v,u)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ra(e,t,n,r,l,s)}function ra(e,t,n,r,s,l){Pc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return s&&eo(t,n,!1),tt(e,t,l);r=t.stateNode,_f.current=t;var o=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,o,l)):ue(e,t,o,l),t.memoizedState=r.state,s&&eo(t,n,!0),t.child}function zc(e){var t=e.stateNode;t.pendingContext?Zi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zi(e,t.context,!1),Va(e,t.containerInfo)}function yo(e,t,n,r,s){return hn(),Ba(s),t.flags|=256,ue(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,t,n){var r=t.pendingProps,s=W.current,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_(W,s&1),e===null)return Xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ms(i,r,0,null),e=zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=la(n),t.memoizedState=sa,e):ti(t,i));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return Uf(e,t,i,r,o,s,n);if(l){l=r.fallback,i=t.mode,s=e.child,o=s.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(s,u),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?l=St(o,l):(l=zt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?la(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ti(e,t){return t=Ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,r){return r!==null&&Ba(r),gn(t,e.child,null,n),e=ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uf(e,t,n,r,s,l,i){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(C(422))),Dr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=Ms({mode:"visible",children:r.children},s,0,null),l=zt(l,s,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&gn(t,e.child,null,i),t.child.memoizedState=la(i),t.memoizedState=sa,l);if(!(t.mode&1))return Dr(e,t,i,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(C(419)),r=yl(l,r,void 0),Dr(e,t,i,r)}if(o=(i&e.childLanes)!==0,me||o){if(r=te,r!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|i)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,et(e,s),_e(r,e,s,-1))}return ii(),r=yl(Error(C(421))),Dr(e,t,i,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,Se=gt(s.nextSibling),we=t,B=!0,Pe=null,e!==null&&(Ee[ke++]=Ye,Ee[ke++]=Ge,Ee[ke++]=Ut,Ye=e.id,Ge=e.overflow,Ut=t),t=ti(t,r.children),t.flags|=4096,t)}function xo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jl(e.return,t,n)}function xl(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function Uc(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xo(e,n,t);else if(e.tag===19)xo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(W,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&fs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),xl(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&fs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}xl(t,!0,n,null,l);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ff(e,t,n){switch(t.tag){case 3:zc(t),hn();break;case 5:dc(t);break;case 1:ge(t.type)&&is(t);break;case 4:Va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;_(cs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?_c(e,t,n):(_(W,W.current&1),e=tt(e,t,n),e!==null?e.sibling:null);_(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Mc(e,t,n)}return tt(e,t,n)}var Fc,aa,Bc,Wc;Fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};aa=function(){};Bc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Mt($e.current);var l=null;switch(n){case"input":s=Ll(e,s),r=Ll(e,r),l=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":s=Tl(e,s),r=Tl(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ls)}Rl(n,r);var i;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var o=s[d];for(i in o)o.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(o=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(i in o)!o.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&o[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&U("scroll",e),l||o===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Wc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bf(e,t,n){var r=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ge(t.type)&&as(),ae(t),null;case 3:return r=t.stateNode,yn(),F(he),F(oe),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pe!==null&&(ma(Pe),Pe=null))),aa(e,t),ae(t),null;case 5:Ya(t);var s=Mt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Bc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ae(t),null}if(e=Mt($e.current),Or(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[We]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(s=0;s<Pn.length;s++)U(Pn[s],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ki(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":Li(r,l),U("invalid",r)}Rl(n,l),s=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,o,e),s=["children",""+o]):Vn.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":Cr(r),ji(r,l,!0);break;case"textarea":Cr(r),Ii(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ls)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[rr]=r,Fc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Dl(n,r),n){case"dialog":U("cancel",e),U("close",e),s=r;break;case"iframe":case"object":case"embed":U("load",e),s=r;break;case"video":case"audio":for(s=0;s<Pn.length;s++)U(Pn[s],e);s=r;break;case"source":U("error",e),s=r;break;case"img":case"image":case"link":U("error",e),U("load",e),s=r;break;case"details":U("toggle",e),s=r;break;case"input":ki(e,r),s=Ll(e,r),U("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),U("invalid",e);break;case"textarea":Li(e,r),s=Tl(e,r),U("invalid",e);break;default:s=r}Rl(n,s),o=s;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?vu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yn(e,u):typeof u=="number"&&Yn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&U("scroll",e):u!=null&&Ea(e,l,u,i))}switch(n){case"input":Cr(e),ji(e,r,!1);break;case"textarea":Cr(e),Ii(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?an(e,!!r.multiple,l,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ls)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Wc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Mt(lr.current),Mt($e.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(F(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Se!==null&&t.mode&1&&!(t.flags&128))ac(),hn(),t.flags|=98560,l=!1;else if(l=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[We]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),l=!1}else Pe!==null&&(ma(Pe),Pe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?J===0&&(J=3):ii())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return yn(),aa(e,t),e===null&&tr(t.stateNode.containerInfo),ae(t),null;case 10:return Ha(t.type._context),ae(t),null;case 17:return ge(t.type)&&as(),ae(t),null;case 19:if(F(W),l=t.memoizedState,l===null)return ae(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Tn(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=fs(e),i!==null){for(t.flags|=128,Tn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>vn&&(t.flags|=128,r=!0,Tn(l,!1),t.lanes=4194304)}else{if(!r)if(e=fs(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!B)return ae(t),null}else 2*Y()-l.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=W.current,_(W,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return ai(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Wf(e,t){switch(Fa(t),t.tag){case 1:return ge(t.type)&&as(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),F(he),F(oe),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ya(t),null;case 13:if(F(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(W),null;case 4:return yn(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return ai(),null;case 24:return null;default:return null}}var Mr=!1,ie=!1,qf=typeof WeakSet=="function"?WeakSet:Set,k=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function ia(e,t,n){try{n()}catch(r){$(e,t,r)}}var vo=!1;function Hf(e,t){if(Hl=ns,e=Vu(),_a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,o=-1,u=-1,d=0,p=0,h=e,g=null;t:for(;;){for(var S;h!==n||s!==0&&h.nodeType!==3||(o=i+s),h!==l||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(S=h.firstChild)!==null;)g=h,h=S;for(;;){if(h===e)break t;if(g===n&&++d===s&&(o=i),g===l&&++p===r&&(u=i),(S=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=S}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},ns=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:De(t.type,y),x);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){$(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return v=vo,vo=!1,v}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&ia(t,n,l)}s=s.next}while(s!==r)}}function Rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qc(e){var t=e.alternate;t!==null&&(e.alternate=null,qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[rr],delete t[Yl],delete t[kf],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function So(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ls));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var ne=null,Me=!1;function st(e,t,n){for(n=n.child;n!==null;)$c(e,t,n),n=n.sibling}function $c(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:ie||sn(n,t);case 6:var r=ne,s=Me;ne=null,st(e,t,n),ne=r,Me=s,ne!==null&&(Me?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Me?(e=ne,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),Jn(e)):dl(ne,n.stateNode));break;case 4:r=ne,s=Me,ne=n.stateNode.containerInfo,Me=!0,st(e,t,n),ne=r,Me=s;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ia(n,t,i),s=s.next}while(s!==r)}st(e,t,n);break;case 1:if(!ie&&(sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){$(n,t,o)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,st(e,t,n),ie=r):st(e,t,n);break;default:st(e,t,n)}}function wo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var s=Zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 5:ne=o.stateNode,Me=!1;break e;case 3:ne=o.stateNode.containerInfo,Me=!0;break e;case 4:ne=o.stateNode.containerInfo,Me=!0;break e}o=o.return}if(ne===null)throw Error(C(160));$c(l,i,s),ne=null,Me=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){$(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Fe(e),r&4){try{qn(3,e,e.return),Rs(3,e)}catch(y){$(e,e.return,y)}try{qn(5,e,e.return)}catch(y){$(e,e.return,y)}}break;case 1:Oe(t,e),Fe(e),r&512&&n!==null&&sn(n,n.return);break;case 5:if(Oe(t,e),Fe(e),r&512&&n!==null&&sn(n,n.return),e.flags&32){var s=e.stateNode;try{Yn(s,"")}catch(y){$(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&mu(s,l),Dl(o,i);var d=Dl(o,l);for(i=0;i<u.length;i+=2){var p=u[i],h=u[i+1];p==="style"?vu(s,h):p==="dangerouslySetInnerHTML"?yu(s,h):p==="children"?Yn(s,h):Ea(s,p,h,d)}switch(o){case"input":Il(s,l);break;case"textarea":hu(s,l);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?an(s,!!l.multiple,S,!1):g!==!!l.multiple&&(l.defaultValue!=null?an(s,!!l.multiple,l.defaultValue,!0):an(s,!!l.multiple,l.multiple?[]:"",!1))}s[rr]=l}catch(y){$(e,e.return,y)}}break;case 6:if(Oe(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(C(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(y){$(e,e.return,y)}}break;case 3:if(Oe(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(y){$(e,e.return,y)}break;case 4:Oe(t,e),Fe(e);break;case 13:Oe(t,e),Fe(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(si=Y())),r&4&&wo(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||p,Oe(t,e),ie=d):Oe(t,e),Fe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(k=e,p=e.child;p!==null;){for(h=k=p;k!==null;){switch(g=k,S=g.child,g.tag){case 0:case 11:case 14:case 15:qn(4,g,g.return);break;case 1:sn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){$(r,n,y)}}break;case 5:sn(g,g.return);break;case 22:if(g.memoizedState!==null){Co(h);continue}}S!==null?(S.return=g,k=S):Co(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{s=h.stateNode,d?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=xu("display",i))}catch(y){$(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){$(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Oe(t,e),Fe(e),r&4&&wo(e);break;case 21:break;default:Oe(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Yn(s,""),r.flags&=-33);var l=So(e);ca(e,l,s);break;case 3:case 4:var i=r.stateNode.containerInfo,o=So(e);ua(e,o,i);break;default:throw Error(C(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e,t,n){k=e,Vc(e)}function Vc(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var s=k,l=s.child;if(s.tag===22&&r){var i=s.memoizedState!==null||Mr;if(!i){var o=s.alternate,u=o!==null&&o.memoizedState!==null||ie;o=Mr;var d=ie;if(Mr=i,(ie=u)&&!d)for(k=s;k!==null;)i=k,u=i.child,i.tag===22&&i.memoizedState!==null?bo(s):u!==null?(u.return=i,k=u):bo(s);for(;l!==null;)k=l,Vc(l),l=l.sibling;k=s,Mr=o,ie=d}No(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,k=l):No(e)}}function No(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&lo(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lo(t,i,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Jn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ie||t.flags&512&&oa(t)}catch(g){$(t,t.return,g)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Co(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function bo(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rs(4,t)}catch(u){$(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){$(t,s,u)}}var l=t.return;try{oa(t)}catch(u){$(t,l,u)}break;case 5:var i=t.return;try{oa(t)}catch(u){$(t,i,u)}}}catch(u){$(t,t.return,u)}if(t===e){k=null;break}var o=t.sibling;if(o!==null){o.return=t.return,k=o;break}k=t.return}}var Qf=Math.ceil,gs=rt.ReactCurrentDispatcher,ni=rt.ReactCurrentOwner,Le=rt.ReactCurrentBatchConfig,M=0,te=null,G=null,re=0,ve=0,ln=kt(0),J=0,ur=null,Bt=0,Ds=0,ri=0,Hn=null,fe=null,si=0,vn=1/0,Qe=null,ys=!1,da=null,xt=null,Pr=!1,ct=null,xs=0,$n=0,pa=null,Yr=-1,Gr=0;function ce(){return M&6?Y():Yr!==-1?Yr:Yr=Y()}function vt(e){return e.mode&1?M&2&&re!==0?re&-re:If.transition!==null?(Gr===0&&(Gr=Tu()),Gr):(e=P,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e):1}function _e(e,t,n,r){if(50<$n)throw $n=0,pa=null,Error(C(185));fr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Ds|=n),J===4&&ot(e,re)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(vn=Y()+500,As&&jt()))}function ye(e,t){var n=e.callbackNode;Lp(e,t);var r=ts(e,e===te?re:0);if(r===0)n!==null&&Oi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oi(n),t===1)e.tag===0?Lf(Eo.bind(null,e)):rc(Eo.bind(null,e)),bf(function(){!(M&6)&&jt()}),n=null;else{switch(Ou(r)){case 1:n=Aa;break;case 4:n=Iu;break;case 16:n=es;break;case 536870912:n=Au;break;default:n=es}n=td(n,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yc(e,t){if(Yr=-1,Gr=0,M&6)throw Error(C(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=ts(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vs(e,r);else{t=r;var s=M;M|=2;var l=Kc();(te!==e||re!==t)&&(Qe=null,vn=Y()+500,Pt(e,t));do try{Gf();break}catch(o){Gc(e,o)}while(!0);qa(),gs.current=l,M=s,G!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(s=Ul(e),s!==0&&(r=s,t=fa(e,s))),t===1)throw n=ur,Pt(e,0),ot(e,r),ye(e,Y()),n;if(t===6)ot(e,r);else{if(s=e.current.alternate,!(r&30)&&!Vf(s)&&(t=vs(e,r),t===2&&(l=Ul(e),l!==0&&(r=l,t=fa(e,l))),t===1))throw n=ur,Pt(e,0),ot(e,r),ye(e,Y()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Ot(e,fe,Qe);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=si+500-Y(),10<t)){if(ts(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Vl(Ot.bind(null,e,fe,Qe),t);break}Ot(e,fe,Qe);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var i=31-ze(r);l=1<<i,i=t[i],i>s&&(s=i),r&=~l}if(r=s,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qf(r/1960))-r,10<r){e.timeoutHandle=Vl(Ot.bind(null,e,fe,Qe),r);break}Ot(e,fe,Qe);break;case 5:Ot(e,fe,Qe);break;default:throw Error(C(329))}}}return ye(e,Y()),e.callbackNode===n?Yc.bind(null,e):null}function fa(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=vs(e,t),e!==2&&(t=fe,fe=n,t!==null&&ma(t)),e}function ma(e){fe===null?fe=e:fe.push.apply(fe,e)}function Vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!Ue(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~ri,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Eo(e){if(M&6)throw Error(C(327));pn();var t=ts(e,0);if(!(t&1))return ye(e,Y()),null;var n=vs(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=ur,Pt(e,0),ot(e,t),ye(e,Y()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,fe,Qe),ye(e,Y()),null}function li(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(vn=Y()+500,As&&jt())}}function Wt(e){ct!==null&&ct.tag===0&&!(M&6)&&pn();var t=M;M|=1;var n=Le.transition,r=P;try{if(Le.transition=null,P=1,e)return e()}finally{P=r,Le.transition=n,M=t,!(M&6)&&jt()}}function ai(){ve=ln.current,F(ln)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&as();break;case 3:yn(),F(he),F(oe),Ga();break;case 5:Ya(r);break;case 4:yn();break;case 13:F(W);break;case 19:F(W);break;case 10:Ha(r.type._context);break;case 22:case 23:ai()}n=n.return}if(te=e,G=e=St(e.current,null),re=ve=t,J=0,ur=null,ri=Ds=Bt=0,fe=Hn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=s,r.next=i}n.pending=r}Dt=null}return e}function Gc(e,t){do{var n=G;try{if(qa(),$r.current=hs,ms){for(var r=q.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ms=!1}if(Ft=0,ee=X=q=null,Wn=!1,ar=0,ni.current=null,n===null||n.return===null){J=1,ur=t,G=null;break}e:{var l=e,i=n.return,o=n,u=t;if(t=re,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=po(i);if(S!==null){S.flags&=-257,fo(S,i,o,l,t),S.mode&1&&co(l,d,t),t=S,u=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){co(l,d,t),ii();break e}u=Error(C(426))}}else if(B&&o.mode&1){var x=po(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),fo(x,i,o,l,t),Ba(xn(u,o));break e}}l=u=xn(u,o),J!==4&&(J=2),Hn===null?Hn=[l]:Hn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Oc(l,u,t);so(l,f);break e;case 1:o=u;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xt===null||!xt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Rc(l,o,t);so(l,w);break e}}l=l.return}while(l!==null)}Jc(n)}catch(b){t=b,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Kc(){var e=gs.current;return gs.current=hs,e===null?hs:e}function ii(){(J===0||J===3||J===2)&&(J=4),te===null||!(Bt&268435455)&&!(Ds&268435455)||ot(te,re)}function vs(e,t){var n=M;M|=2;var r=Kc();(te!==e||re!==t)&&(Qe=null,Pt(e,t));do try{Yf();break}catch(s){Gc(e,s)}while(!0);if(qa(),M=n,gs.current=r,G!==null)throw Error(C(261));return te=null,re=0,J}function Yf(){for(;G!==null;)Xc(G)}function Gf(){for(;G!==null&&!vp();)Xc(G)}function Xc(e){var t=ed(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Jc(e):G=t,ni.current=null}function Jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=Bf(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Ot(e,t,n){var r=P,s=Le.transition;try{Le.transition=null,P=1,Kf(e,t,n,r)}finally{Le.transition=s,P=r}return null}function Kf(e,t,n,r){do pn();while(ct!==null);if(M&6)throw Error(C(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ip(e,l),e===te&&(G=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,td(es,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Le.transition,Le.transition=null;var i=P;P=1;var o=M;M|=4,ni.current=null,Hf(e,n),Qc(n,e),gf($l),ns=!!Hl,$l=Hl=null,e.current=n,$f(n),Sp(),M=o,P=i,Le.transition=l}else e.current=n;if(Pr&&(Pr=!1,ct=e,xs=s),l=e.pendingLanes,l===0&&(xt=null),Cp(n.stateNode),ye(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ys)throw ys=!1,e=da,da=null,e;return xs&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===pa?$n++:($n=0,pa=e):$n=0,jt(),null}function pn(){if(ct!==null){var e=Ou(xs),t=Le.transition,n=P;try{if(Le.transition=null,P=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,xs=0,M&6)throw Error(C(331));var s=M;for(M|=4,k=e.current;k!==null;){var l=k,i=l.child;if(k.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(k=d;k!==null;){var p=k;switch(p.tag){case 0:case 11:case 15:qn(8,p,l)}var h=p.child;if(h!==null)h.return=p,k=h;else for(;k!==null;){p=k;var g=p.sibling,S=p.return;if(qc(p),p===d){k=null;break}if(g!==null){g.return=S,k=g;break}k=S}}}var v=l.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}k=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,k=i;else e:for(;k!==null;){if(l=k,l.flags&2048)switch(l.tag){case 0:case 11:case 15:qn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,k=f;break e}k=l.return}}var c=e.current;for(k=c;k!==null;){i=k;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,k=m;else e:for(i=c;k!==null;){if(o=k,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rs(9,o)}}catch(b){$(o,o.return,b)}if(o===i){k=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,k=w;break e}k=o.return}}if(M=s,jt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{P=n,Le.transition=t}}return!1}function ko(e,t,n){t=xn(n,t),t=Oc(e,t,1),e=yt(e,t,1),t=ce(),e!==null&&(fr(e,1,t),ye(e,t))}function $(e,t,n){if(e.tag===3)ko(e,e,n);else for(;t!==null;){if(t.tag===3){ko(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=Rc(t,e,1),t=yt(t,e,1),e=ce(),t!==null&&(fr(t,1,e),ye(t,e));break}}t=t.return}}function Xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Y()-si?Pt(e,0):ri|=n),ye(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=ce();e=et(e,t),e!==null&&(fr(e,t,n),ye(e,n))}function Jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zc(e,n)}function Zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Zc(e,n)}var ed;ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Ff(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&sc(t,us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var s=mn(t,oe.current);dn(t,n),s=Xa(null,t,r,e,s,n);var l=Ja();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,is(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Qa(t),s.updater=Os,t.stateNode=s,s._reactInternals=t,ea(t,r,e,n),t=ra(null,t,r,!0,l,n)):(t.tag=0,B&&l&&Ua(t),ue(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=tm(r),e=De(r,e),s){case 0:t=na(null,t,r,e,n);break e;case 1:t=go(null,t,r,e,n);break e;case 11:t=mo(null,t,r,e,n);break e;case 14:t=ho(null,t,r,De(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),na(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),go(e,t,r,s,n);case 3:e:{if(zc(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,s=l.element,cc(e,t),ps(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=xn(Error(C(423)),t),t=yo(e,t,r,n,s);break e}else if(r!==s){s=xn(Error(C(424)),t),t=yo(e,t,r,n,s);break e}else for(Se=gt(t.stateNode.containerInfo.firstChild),we=t,B=!0,Pe=null,n=oc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===s){t=tt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return dc(t),e===null&&Xl(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,i=s.children,Ql(r,s)?i=null:l!==null&&Ql(r,l)&&(t.flags|=32),Pc(e,t),ue(e,t,i,n),t.child;case 6:return e===null&&Xl(t),null;case 13:return _c(e,t,n);case 4:return Va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),mo(e,t,r,s,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,i=s.value,_(cs,r._currentValue),r._currentValue=i,l!==null)if(Ue(l.value,i)){if(l.children===s.children&&!he.current){t=tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ke(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Jl(l.return,n,t),o.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Jl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ue(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dn(t,n),s=Ie(s),r=r(s),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,s=De(r,t.pendingProps),s=De(r.type,s),ho(e,t,r,s,n);case 15:return Dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),Vr(e,t),t.tag=1,ge(r)?(e=!0,is(t)):e=!1,dn(t,n),Tc(t,r,s),ea(t,r,s,n),ra(null,t,r,!0,e,n);case 19:return Uc(e,t,n);case 22:return Mc(e,t,n)}throw Error(C(156,t.tag))};function td(e,t){return Lu(e,t)}function em(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new em(e,t,n,r)}function oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ja)return 11;if(e===La)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,s,l){var i=2;if(r=e,typeof e=="function")oi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gt:return zt(n.children,s,l,t);case ka:i=8,s|=8;break;case bl:return e=je(12,n,t,s|2),e.elementType=bl,e.lanes=l,e;case El:return e=je(13,n,t,s),e.elementType=El,e.lanes=l,e;case kl:return e=je(19,n,t,s),e.elementType=kl,e.lanes=l,e;case du:return Ms(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uu:i=10;break e;case cu:i=9;break e;case ja:i=11;break e;case La:i=14;break e;case lt:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=je(i,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function zt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Ms(e,t,n,r){return e=je(22,e,r,t),e.elementType=du,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ui(e,t,n,r,s,l,i,o,u){return e=new nm(e,t,n,o,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(l),e}function rm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nd(e){if(!e)return bt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ge(n))return nc(e,n,t)}return t}function rd(e,t,n,r,s,l,i,o,u){return e=ui(n,r,!0,e,s,l,i,o,u),e.context=nd(null),n=e.current,r=ce(),s=vt(n),l=Ke(r,s),l.callback=t??null,yt(n,l,s),e.current.lanes=s,fr(e,s,r),ye(e,r),e}function Ps(e,t,n,r){var s=t.current,l=ce(),i=vt(s);return n=nd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(s,t,i),e!==null&&(_e(e,s,i,l),Hr(e,s,i)),i}function Ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ci(e,t){jo(e,t),(e=e.alternate)&&jo(e,t)}function sm(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function di(e){this._internalRoot=e}zs.prototype.render=di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ps(e,t,null,null)};zs.prototype.unmount=di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Ps(null,e,null,null)}),t[Ze]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&zu(e)}};function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lo(){}function lm(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var d=Ss(i);l.call(d)}}var i=rd(t,r,e,0,null,!1,!1,"",Lo);return e._reactRootContainer=i,e[Ze]=i.current,tr(e.nodeType===8?e.parentNode:e),Wt(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var d=Ss(u);o.call(d)}}var u=ui(e,0,!1,null,null,!1,!1,"",Lo);return e._reactRootContainer=u,e[Ze]=u.current,tr(e.nodeType===8?e.parentNode:e),Wt(function(){Ps(t,u,n,r)}),u}function Us(e,t,n,r,s){var l=n._reactRootContainer;if(l){var i=l;if(typeof s=="function"){var o=s;s=function(){var u=Ss(i);o.call(u)}}Ps(t,i,e,s)}else i=lm(n,t,e,s,r);return Ss(i)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Ta(t,n|1),ye(t,Y()),!(M&6)&&(vn=Y()+500,jt()))}break;case 13:Wt(function(){var r=et(e,1);if(r!==null){var s=ce();_e(r,e,1,s)}}),ci(e,1)}};Oa=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ce();_e(t,e,134217728,n)}ci(e,134217728)}};Du=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=ce();_e(n,e,t,r)}ci(e,t)}};Mu=function(){return P};Pu=function(e,t){var n=P;try{return P=e,t()}finally{P=n}};Pl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Is(r);if(!s)throw Error(C(90));fu(r),Il(r,s)}}}break;case"textarea":hu(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Nu=li;Cu=Wt;var am={usingClientEntryPoint:!1,Events:[hr,Zt,Is,Su,wu,li]},On={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{Es=zr.inject(im),He=zr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pi(t))throw Error(C(200));return rm(e,t,null,n)};Ce.createRoot=function(e,t){if(!pi(e))throw Error(C(299));var n=!1,r="",s=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ui(e,1,!1,null,null,n,!1,r,s),e[Ze]=t.current,tr(e.nodeType===8?e.parentNode:e),new di(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Wt(e)};Ce.hydrate=function(e,t,n){if(!_s(t))throw Error(C(200));return Us(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!pi(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",i=sd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=rd(t,null,e,1,n??null,s,!1,l,i),e[Ze]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new zs(t)};Ce.render=function(e,t,n){if(!_s(t))throw Error(C(200));return Us(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!_s(e))throw Error(C(40));return e._reactRootContainer?(Wt(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ce.unstable_batchedUpdates=li;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_s(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Us(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld)}catch(e){console.error(e)}}ld(),lu.exports=Ce;var om=lu.exports,ad,Io=om;ad=Io.createRoot,Io.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(null,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Ao="popstate";function um(e){e===void 0&&(e={});function t(s,l){let{pathname:i="/",search:o="",hash:u=""}=$t(s.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),ha("",{pathname:i,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){let i=s.document.querySelector("base"),o="";if(i&&i.getAttribute("href")){let u=s.location.href,d=u.indexOf("#");o=d===-1?u:u.slice(0,d)}return o+"#"+(typeof l=="string"?l:ws(l))}function r(s,l){fi(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return dm(t,n,r,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cm(){return Math.random().toString(36).substr(2,8)}function To(e,t){return{usr:e.state,key:e.key,idx:t}}function ha(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$t(t):t,{state:n,key:t&&t.key||r||cm()})}function ws(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $t(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dm(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:l=!1}=r,i=s.history,o=dt.Pop,u=null,d=p();d==null&&(d=0,i.replaceState(cr({},i.state,{idx:d}),""));function p(){return(i.state||{idx:null}).idx}function h(){o=dt.Pop;let x=p(),f=x==null?null:x-d;d=x,u&&u({action:o,location:y.location,delta:f})}function g(x,f){o=dt.Push;let c=ha(y.location,x,f);n&&n(c,x),d=p()+1;let m=To(c,d),w=y.createHref(c);try{i.pushState(m,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;s.location.assign(w)}l&&u&&u({action:o,location:y.location,delta:1})}function S(x,f){o=dt.Replace;let c=ha(y.location,x,f);n&&n(c,x),d=p();let m=To(c,d),w=y.createHref(c);i.replaceState(m,"",w),l&&u&&u({action:o,location:y.location,delta:0})}function v(x){let f=s.location.origin!=="null"?s.location.origin:s.location.href,c=typeof x=="string"?x:ws(x);return c=c.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let y={get action(){return o},get location(){return e(s,i)},listen(x){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Ao,h),u=x,()=>{s.removeEventListener(Ao,h),u=null}},createHref(x){return t(s,x)},createURL:v,encodeLocation(x){let f=v(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:S,go(x){return i.go(x)}};return y}var Oo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oo||(Oo={}));function pm(e,t,n){return n===void 0&&(n="/"),fm(e,t,n)}function fm(e,t,n,r){let s=typeof t=="string"?$t(t):t,l=mi(s.pathname||"/",n);if(l==null)return null;let i=id(e);mm(i);let o=null,u=km(l);for(let d=0;o==null&&d<i.length;++d)o=Cm(i[d],u);return o}function id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(l,i,o)=>{let u={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(K(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=wt([r,u.relativePath]),p=n.concat(u);l.children&&l.children.length>0&&(K(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),id(l.children,t,p,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:wm(d,l.index),routesMeta:p})};return e.forEach((l,i)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))s(l,i);else for(let u of od(l.path))s(l,i,u)}),t}function od(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return s?[l,""]:[l];let i=od(r.join("/")),o=[];return o.push(...i.map(u=>u===""?l:[l,u].join("/"))),s&&o.push(...i),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function mm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hm=/^:[\w-]+$/,gm=3,ym=2,xm=1,vm=10,Sm=-2,Ro=e=>e==="*";function wm(e,t){let n=e.split("/"),r=n.length;return n.some(Ro)&&(r+=Sm),t&&(r+=ym),n.filter(s=>!Ro(s)).reduce((s,l)=>s+(hm.test(l)?gm:l===""?xm:vm),r)}function Nm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Cm(e,t,n){let{routesMeta:r}=e,s={},l="/",i=[];for(let o=0;o<r.length;++o){let u=r[o],d=o===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",h=bm({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),g=u.route;if(!h)return null;Object.assign(s,h.params),i.push({params:s,pathname:wt([l,h.pathname]),pathnameBase:Im(wt([l,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(l=wt([l,h.pathnameBase]))}return i}function bm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Em(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],i=l.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((d,p,h)=>{let{paramName:g,isOptional:S}=p;if(g==="*"){let y=o[h]||"";i=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const v=o[h];return S&&!v?d[g]=void 0:d[g]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:i,pattern:e}}function Em(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,u)=>(r.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function km(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function jm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?$t(e):e,l;return n?(n=dd(n),n.startsWith("/")?l=Do(n.substring(1),"/"):l=Do(n,t)):l=t,{pathname:l,search:Am(r),hash:Tm(s)}}function Do(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ud(e,t){let n=Lm(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cd(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=$t(e):(s=cr({},e),K(!s.pathname||!s.pathname.includes("?"),wl("?","pathname","search",s)),K(!s.pathname||!s.pathname.includes("#"),wl("#","pathname","hash",s)),K(!s.search||!s.search.includes("#"),wl("#","search","hash",s)));let l=e===""||s.pathname==="",i=l?"/":s.pathname,o;if(i==null)o=n;else{let h=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),h-=1;s.pathname=g.join("/")}o=h>=0?t[h]:"/"}let u=jm(s,o),d=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const dd=e=>e.replace(/\/\/+/g,"/"),wt=e=>dd(e.join("/")),Im=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Am=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pd=["post","put","patch","delete"];new Set(pd);const Rm=["get",...pd];new Set(Rm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(null,arguments)}const hi=N.createContext(null),Dm=N.createContext(null),Qt=N.createContext(null),Fs=N.createContext(null),Lt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),fd=N.createContext(null);function Mm(e,t){let{relative:n}=t===void 0?{}:t;yr()||K(!1);let{basename:r,navigator:s}=N.useContext(Qt),{hash:l,pathname:i,search:o}=yd(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:wt([r,i])),s.createHref({pathname:u,search:o,hash:l})}function yr(){return N.useContext(Fs)!=null}function xr(){return yr()||K(!1),N.useContext(Fs).location}function md(e){N.useContext(Qt).static||N.useLayoutEffect(e)}function hd(){let{isDataRoute:e}=N.useContext(Lt);return e?Ym():Pm()}function Pm(){yr()||K(!1);let e=N.useContext(hi),{basename:t,future:n,navigator:r}=N.useContext(Qt),{matches:s}=N.useContext(Lt),{pathname:l}=xr(),i=JSON.stringify(ud(s,n.v7_relativeSplatPath)),o=N.useRef(!1);return md(()=>{o.current=!0}),N.useCallback(function(d,p){if(p===void 0&&(p={}),!o.current)return;if(typeof d=="number"){r.go(d);return}let h=cd(d,JSON.parse(i),l,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:wt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,i,l,e])}function gd(){let{matches:e}=N.useContext(Lt),t=e[e.length-1];return t?t.params:{}}function yd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Qt),{matches:s}=N.useContext(Lt),{pathname:l}=xr(),i=JSON.stringify(ud(s,r.v7_relativeSplatPath));return N.useMemo(()=>cd(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function zm(e,t){return _m(e,t)}function _m(e,t,n,r){yr()||K(!1);let{navigator:s}=N.useContext(Qt),{matches:l}=N.useContext(Lt),i=l[l.length-1],o=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let d=xr(),p;if(t){var h;let x=typeof t=="string"?$t(t):t;u==="/"||(h=x.pathname)!=null&&h.startsWith(u)||K(!1),p=x}else p=d;let g=p.pathname||"/",S=g;if(u!=="/"){let x=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=pm(e,{pathname:S}),y=qm(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:wt([u,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:wt([u,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,n,r);return t&&y?N.createElement(Fs.Provider,{value:{location:dr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:dt.Pop}},y):y}function Um(){let e=Vm(),t=Om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:s},n):null,null)}const Fm=N.createElement(Um,null);class Bm extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Lt.Provider,{value:this.props.routeContext},N.createElement(fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wm(e){let{routeContext:t,match:n,children:r}=e,s=N.useContext(hi);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Lt.Provider,{value:t},r)}function qm(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=(s=n)==null?void 0:s.errors;if(o!=null){let p=i.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);p>=0||K(!1),i=i.slice(0,Math.min(i.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<i.length;p++){let h=i[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:g,errors:S}=n,v=h.route.loader&&g[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||v){u=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((p,h,g)=>{let S,v=!1,y=null,x=null;n&&(S=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||Fm,u&&(d<0&&g===0?(Gm("route-fallback"),v=!0,x=null):d===g&&(v=!0,x=h.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,g+1)),c=()=>{let m;return S?m=y:v?m=x:h.route.Component?m=N.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=p,N.createElement(Wm,{match:h,routeContext:{outlet:p,matches:f,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?N.createElement(Bm,{location:n.location,revalidation:n.revalidation,component:y,error:S,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var xd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xd||{}),vd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vd||{});function Hm(e){let t=N.useContext(hi);return t||K(!1),t}function $m(e){let t=N.useContext(Dm);return t||K(!1),t}function Qm(e){let t=N.useContext(Lt);return t||K(!1),t}function Sd(e){let t=Qm(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function Vm(){var e;let t=N.useContext(fd),n=$m(),r=Sd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ym(){let{router:e}=Hm(xd.UseNavigateStable),t=Sd(vd.UseNavigateStable),n=N.useRef(!1);return md(()=>{n.current=!0}),N.useCallback(function(s,l){l===void 0&&(l={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,dr({fromRouteId:t},l)))},[e,t])}const Mo={};function Gm(e,t,n){Mo[e]||(Mo[e]=!0)}function Km(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Re(e){K(!1)}function Xm(e){let{basename:t="/",children:n=null,location:r,navigationType:s=dt.Pop,navigator:l,static:i=!1,future:o}=e;yr()&&K(!1);let u=t.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:u,navigator:l,static:i,future:dr({v7_relativeSplatPath:!1},o)}),[u,o,l,i]);typeof r=="string"&&(r=$t(r));let{pathname:p="/",search:h="",hash:g="",state:S=null,key:v="default"}=r,y=N.useMemo(()=>{let x=mi(p,u);return x==null?null:{location:{pathname:x,search:h,hash:g,state:S,key:v},navigationType:s}},[u,p,h,g,S,v,s]);return y==null?null:N.createElement(Qt.Provider,{value:d},N.createElement(Fs.Provider,{children:n,value:y}))}function Jm(e){let{children:t,location:n}=e;return zm(ga(t),n)}new Promise(()=>{});function ga(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,s)=>{if(!N.isValidElement(r))return;let l=[...t,s];if(r.type===N.Fragment){n.push.apply(n,ga(r.props.children,l));return}r.type!==Re&&K(!1),!r.props.index||!r.props.children||K(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ga(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(null,arguments)}function Zm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function eh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function th(e,t){return e.button===0&&(!t||t==="_self")&&!eh(e)}const nh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rh="6";try{window.__reactRouterVersion=rh}catch{}const sh="startTransition",Po=Kd[sh];function lh(e){let{basename:t,children:n,future:r,window:s}=e,l=N.useRef();l.current==null&&(l.current=um({window:s,v5Compat:!0}));let i=l.current,[o,u]=N.useState({action:i.action,location:i.location}),{v7_startTransition:d}=r||{},p=N.useCallback(h=>{d&&Po?Po(()=>u(h)):u(h)},[u,d]);return N.useLayoutEffect(()=>i.listen(p),[i,p]),N.useEffect(()=>Km(r),[r]),N.createElement(Xm,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:i,future:r})}const ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z=N.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:l,replace:i,state:o,target:u,to:d,preventScrollReset:p,viewTransition:h}=t,g=Zm(t,nh),{basename:S}=N.useContext(Qt),v,y=!1;if(typeof d=="string"&&ih.test(d)&&(v=d,ah))try{let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d),b=mi(w.pathname,S);w.origin===m.origin&&b!=null?d=b+w.search+w.hash:y=!0}catch{}let x=Mm(d,{relative:s}),f=oh(d,{replace:i,state:o,target:u,preventScrollReset:p,relative:s,viewTransition:h});function c(m){r&&r(m),m.defaultPrevented||f(m)}return N.createElement("a",ya({},g,{href:v||x,onClick:y||l?r:c,ref:n,target:u}))});var zo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zo||(zo={}));var _o;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_o||(_o={}));function oh(e,t){let{target:n,replace:r,state:s,preventScrollReset:l,relative:i,viewTransition:o}=t===void 0?{}:t,u=hd(),d=xr(),p=yd(e,{relative:i});return N.useCallback(h=>{if(th(h,n)){h.preventDefault();let g=r!==void 0?r:ws(d)===ws(p);u(e,{replace:g,state:s,preventScrollReset:l,relative:i,viewTransition:o})}},[d,u,p,r,s,n,e,l,i,o])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ch={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=N.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:l,iconNode:i,...o},u)=>N.createElement("svg",{ref:u,...ch,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:wd("lucide",s),...o},[...i.map(([d,p])=>N.createElement(d,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=N.forwardRef(({className:r,...s},l)=>N.createElement(dh,{ref:l,iconNode:t,className:wd(`lucide-${uh(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=D("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=D("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=D("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=D("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=D("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=D("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=D("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=D("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=D("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=D("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=D("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=D("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=D("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=D("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=D("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=D("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=D("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=D("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=D("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=D("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=D("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=D("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=D("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=D("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=D("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=D("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=D("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=D("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=D("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=D("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=D("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),qo="sfda_progress",bh=100,Eh=150,kh=20,_r={completedLessons:[],completedChallenges:[],quizScores:{},challengeSubmissions:{},xp:0,streakDays:0,lastVisit:new Date().toISOString(),badges:[]};function $s(){const[e,t]=N.useState(()=>{try{const d=localStorage.getItem(qo);return d?{..._r,...JSON.parse(d)}:_r}catch{return _r}});N.useEffect(()=>{localStorage.setItem(qo,JSON.stringify(e))},[e]);const n=N.useCallback(d=>{t(p=>{if(p.completedLessons.includes(d))return p;const h=p.xp+bh,g=[...p.badges];return p.completedLessons.length===0&&g.push("first-lesson"),p.completedLessons.length===4&&g.push("five-lessons"),p.completedLessons.length===9&&g.push("ten-lessons"),{...p,completedLessons:[...p.completedLessons,d],xp:h,badges:g}})},[]),r=N.useCallback((d,p)=>{t(h=>{const g=!h.completedChallenges.includes(d),S=[...h.badges];return g&&h.completedChallenges.length===0&&S.push("first-challenge"),g&&h.completedChallenges.length===4&&S.push("five-challenges"),{...h,completedChallenges:g?[...h.completedChallenges,d]:h.completedChallenges,challengeSubmissions:{...h.challengeSubmissions,[d]:p},xp:g?h.xp+Eh:h.xp,badges:S}})},[]),s=N.useCallback((d,p,h)=>{t(g=>({...g,quizScores:{...g.quizScores,[d]:Math.round(p/h*100)},xp:g.xp+p*kh}))},[]),l=N.useCallback(d=>e.completedLessons.includes(d),[e.completedLessons]),i=N.useCallback(d=>e.completedChallenges.includes(d),[e.completedChallenges]),o=()=>e.xp<500?{level:1,title:"Trailblazer Recruit",next:500}:e.xp<1500?{level:2,title:"Apex Apprentice",next:1500}:e.xp<3e3?{level:3,title:"SOQL Scholar",next:3e3}:e.xp<5e3?{level:4,title:"DML Developer",next:5e3}:e.xp<8e3?{level:5,title:"Trigger Tamer",next:8e3}:{level:6,title:"Platform Champion",next:1/0},u=N.useCallback(()=>{t(_r)},[]);return{progress:e,completeLesson:n,completeChallenge:r,recordQuizScore:s,isLessonCompleted:l,isChallengeCompleted:i,getLevel:o,resetProgress:u}}const Ho=[{to:"/",label:"Home",icon:yh},{to:"/dashboard",label:"Dashboard",icon:xh},{to:"/apex",label:"Apex",icon:xe},{to:"/soql",label:"SOQL",icon:Hs},{to:"/debug",label:"Debug",icon:Ws},{to:"/missions",label:"Missions",icon:nt}];function jh(){const[e,t]=N.useState(!1),n=xr(),{progress:r,getLevel:s}=$s(),{level:l,title:i}=s();return a.jsxs("header",{className:"sticky top-0 z-50 glass border-b border-gray-200/60 shadow-sm",children:[a.jsx("div",{className:"max-w-6xl mx-auto px-4",children:a.jsxs("div",{className:"flex items-center h-16 gap-4",children:[a.jsxs(z,{to:"/",className:"flex items-center gap-2.5 shrink-0 group",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg bg-sf-blue flex items-center justify-center group-hover:bg-blue-700 transition-colors",children:a.jsx(xe,{className:"w-4 h-4 text-white"})}),a.jsx("span",{className:"font-bold text-gray-900 text-sm hidden sm:block",children:"SF Dev Academy"})]}),a.jsx("nav",{className:"hidden md:flex items-center gap-1 ml-2",children:Ho.map(({to:o,label:u})=>a.jsx(z,{to:o,className:n.pathname===o?"nav-link-active":"nav-link-inactive",children:u},o))}),a.jsx("div",{className:"flex-1"}),a.jsxs(z,{to:"/dashboard",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-sf-navy to-sf-blue text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity",children:[a.jsx(pt,{className:"w-3.5 h-3.5 text-yellow-300"}),a.jsxs("span",{children:[r.xp," XP"]}),a.jsx("span",{className:"opacity-60",children:"·"}),a.jsxs("span",{children:["Lv ",l]})]}),a.jsx(z,{to:"/about",className:"btn-ghost hidden md:inline-flex p-2",children:a.jsx(bd,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>t(!e),className:"md:hidden btn-ghost p-2",children:e?a.jsx(Ch,{className:"w-5 h-5"}):a.jsx(Sh,{className:"w-5 h-5"})})]})}),e&&a.jsxs("div",{className:"md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1",children:[Ho.map(({to:o,label:u,icon:d})=>a.jsxs(z,{to:o,onClick:()=>t(!1),className:`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${n.pathname===o?"bg-blue-50 text-sf-blue":"text-gray-700 hover:bg-gray-50"}`,children:[a.jsx(d,{className:"w-4 h-4"}),u]},o)),a.jsx("div",{className:"pt-2 border-t border-gray-100 mt-2",children:a.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 text-xs text-gray-500",children:[a.jsx(pt,{className:"w-3.5 h-3.5 text-yellow-500"}),a.jsxs("span",{className:"font-semibold text-gray-700",children:[r.xp," XP"]}),a.jsx("span",{children:"·"}),a.jsxs("span",{children:["Level ",l,": ",i]})]})})]})]})}function Lh(){return a.jsx("footer",{className:"bg-white border-t border-gray-100 mt-auto",children:a.jsx("div",{className:"max-w-6xl mx-auto px-4 py-8",children:a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue flex items-center justify-center",children:a.jsx(xe,{className:"w-3.5 h-3.5 text-white"})}),a.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:"SF Dev Academy"})]}),a.jsxs("div",{className:"flex items-center gap-6 text-xs text-gray-500",children:[a.jsx(z,{to:"/about",className:"hover:text-sf-blue transition-colors",children:"About"}),a.jsx(z,{to:"/apex",className:"hover:text-sf-blue transition-colors",children:"Lessons"}),a.jsx(z,{to:"/missions",className:"hover:text-sf-blue transition-colors",children:"Missions"}),a.jsx("a",{href:"https://developer.salesforce.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-sf-blue transition-colors",children:"Salesforce Docs"})]}),a.jsx("p",{className:"text-xs text-gray-400",children:"Not affiliated with Salesforce, Inc."})]})})})}const Ih=[{icon:a.jsx(nt,{className:"w-5 h-5"}),title:"10 Structured Lessons",desc:"From variables to DML — every concept explained with real examples",color:"bg-blue-500"},{icon:a.jsx(xe,{className:"w-5 h-5"}),title:"Hands-On Challenges",desc:"Write code, get instant feedback, and learn from detailed solutions",color:"bg-violet-500"},{icon:a.jsx(Hs,{className:"w-5 h-5"}),title:"SOQL Explorer",desc:"Query fictional Salesforce orgs and understand data relationships",color:"bg-teal-500"},{icon:a.jsx(Ws,{className:"w-5 h-5"}),title:"Debug Lab",desc:"Find and fix real bugs in broken code — governor limits and all",color:"bg-orange-500"},{icon:a.jsx(pt,{className:"w-5 h-5"}),title:"XP & Badges",desc:"Track your progress and earn badges as you level up",color:"bg-yellow-500"},{icon:a.jsx(yi,{className:"w-5 h-5"}),title:"Project Missions",desc:"Apply what you know to real-world Salesforce business scenarios",color:"bg-pink-500"}],Ah=["Apex Variables & Data Types","Strings & String Methods","Conditionals & Boolean Logic","Loops: For, While, Do-While","Lists (Apex Arrays)","Sets & Uniqueness","Maps: Key-Value Storage","Classes & Object-Oriented Apex","SOQL: Query Your Data","DML: Create, Update, Delete Records"],Th=[{value:"10",label:"Lessons",sub:"beginner to confident"},{value:"10",label:"Challenges",sub:"with instant feedback"},{value:"5",label:"Debug Scenarios",sub:"real bugs to fix"},{value:"4",label:"Missions",sub:"real-world projects"}],Oh=[{num:1,label:"Understand",desc:"Read a clear explanation"},{num:2,label:"Example",desc:"See real working code"},{num:3,label:"Try It",desc:"Write code yourself"},{num:4,label:"Hint",desc:"Unstuck in one tap"},{num:5,label:"Feedback",desc:"Know why it passed or failed"},{num:6,label:"Solution",desc:"See the full solution"},{num:7,label:"Apply",desc:"Use it in a mission"}];function Rh(){return a.jsxs("div",{className:"min-h-screen",children:[a.jsxs("section",{className:"gradient-hero text-white py-20 px-4 relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 25% 50%, #fff 1px, transparent 0), radial-gradient(circle at 75% 20%, #fff 1px, transparent 0)",backgroundSize:"60px 60px"}}),a.jsxs("div",{className:"max-w-4xl mx-auto text-center relative",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm",children:[a.jsx(Ed,{className:"w-3.5 h-3.5 text-yellow-300"}),"Free · No signup required · Start in 30 seconds"]}),a.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6",children:["Learn Salesforce",a.jsx("br",{}),a.jsx("span",{className:"text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(90deg, #FFC849, #FF5D2D)"},children:"Development"})]}),a.jsx("p",{className:"text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed",children:"The interactive learning platform built for absolute beginners. Master Apex, SOQL, and DML through guided lessons, real code challenges, and hands-on projects."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[a.jsxs(z,{to:"/apex",className:"inline-flex items-center justify-center gap-2 bg-white text-sf-blue font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Learning Free ",a.jsx(Qn,{className:"w-4 h-4"})]}),a.jsx(z,{to:"/dashboard",className:"inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors text-base backdrop-blur-sm",children:"View Dashboard"})]})]})]}),a.jsx("section",{className:"bg-sf-navy text-white py-8 px-4",children:a.jsx("div",{className:"max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",children:Th.map(e=>a.jsxs("div",{children:[a.jsx("div",{className:"text-3xl font-extrabold text-yellow-400",children:e.value}),a.jsx("div",{className:"font-semibold text-sm mt-0.5",children:e.label}),a.jsx("div",{className:"text-xs text-blue-300 mt-0.5",children:e.sub})]},e.label))})}),a.jsx("section",{className:"py-16 px-4 bg-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"section-title",children:"The 7-Step Learning Cycle"}),a.jsx("p",{className:"section-subtitle",children:"Every lesson follows the same proven structure — so you never feel lost"})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3",children:Oh.map(e=>a.jsxs("div",{className:"flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group",children:[a.jsx("div",{className:"w-9 h-9 rounded-full bg-sf-blue text-white text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm",children:e.num}),a.jsx("div",{className:"font-semibold text-sm text-gray-900",children:e.label}),a.jsx("div",{className:"text-xs text-gray-500 leading-tight",children:e.desc})]},e.num))})]})}),a.jsx("section",{className:"py-16 px-4 bg-gray-50",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"section-title",children:"Everything You Need to Succeed"}),a.jsx("p",{className:"section-subtitle",children:"From your first variable to deploying real Apex — all in one place"})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Ih.map(e=>a.jsxs("div",{className:"card hover:border-sf-blue/20 group",children:[a.jsx("div",{className:`w-10 h-10 ${e.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-sm`,children:e.icon}),a.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:e.title}),a.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:e.desc})]},e.title))})]})}),a.jsx("section",{className:"py-16 px-4 bg-white",children:a.jsx("div",{className:"max-w-4xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-start",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"section-title mb-2",children:"Full Apex Curriculum"}),a.jsx("p",{className:"section-subtitle mb-8",children:"10 lessons carefully sequenced from zero to job-ready Apex developer"}),a.jsxs(z,{to:"/apex",className:"btn-primary",children:["Browse All Lessons ",a.jsx(Qn,{className:"w-4 h-4"})]})]}),a.jsx("div",{className:"space-y-2",children:Ah.map((e,t)=>a.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group",children:[a.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue/10 text-sf-blue text-xs font-bold flex items-center justify-center shrink-0",children:String(t+1).padStart(2,"0")}),a.jsx("span",{className:"text-sm font-medium text-gray-700 group-hover:text-gray-900",children:e}),a.jsx(gi,{className:"w-4 h-4 text-gray-200 group-hover:text-gray-300 ml-auto"})]},e))})]})})}),a.jsx("section",{className:"gradient-hero text-white py-16 px-4",children:a.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[a.jsx(Nh,{className:"w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-80"}),a.jsx("h2",{className:"text-3xl font-extrabold mb-4",children:"Ready to Write Your First Apex?"}),a.jsx("p",{className:"text-blue-100 mb-8 text-lg",children:"No Salesforce org needed. Start writing code right here, right now."}),a.jsxs(z,{to:"/lesson/apex-variables",className:"inline-flex items-center gap-2 bg-white text-sf-blue font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Lesson 1: Variables ",a.jsx(Qn,{className:"w-4 h-4"})]})]})})]})}const Dh={blue:"bg-sf-blue",green:"bg-sf-green",orange:"bg-sf-orange",purple:"bg-sf-purple"},Mh={sm:"h-1.5",md:"h-2.5",lg:"h-4"};function Cs({value:e,max:t=100,className:n="",color:r="blue",height:s,size:l="md",showLabel:i=!1,label:o}){const u=Math.min(100,Math.max(0,e/t*100)),d=Dh[r]??r,p=s??Mh[l];return a.jsxs("div",{className:n,children:[(i||o)&&a.jsxs("div",{className:"flex justify-between items-center mb-1",children:[o&&a.jsx("span",{className:"text-xs text-sf-gray-6",children:o}),i&&a.jsxs("span",{className:"text-xs font-medium text-sf-gray-7",children:[Math.round(u),"%"]})]}),a.jsx("div",{className:`w-full bg-sf-gray-2 rounded-full ${p} overflow-hidden`,children:a.jsx("div",{className:`${p} rounded-full ${d} transition-all duration-500 ease-out`,style:{width:`${u}%`},role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t})})]})}const qe=[{id:"apex-variables",moduleId:"apex-basics",order:1,title:"Variables and Data Types",subtitle:"The building blocks of every Apex program",description:"Learn how to store and work with different kinds of data in Apex — from numbers and text to dates and Salesforce record IDs.",duration:20,difficulty:"beginner",tags:["apex","variables","data types"],prerequisites:[],learningObjectives:["Declare variables using primitive data types","Understand when to use Integer vs Decimal vs Long","Work with String, Boolean, Date, and ID types","Understand null values and type safety"],content:[{type:"explanation",title:"What is a Variable?",text:"A variable is a named container that holds a value your program can use and change. In Apex, every variable must have a declared type — this tells Salesforce exactly what kind of data it will store."},{type:"explanation",title:"Primitive Data Types",text:`Apex has several built-in primitive types:

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
Total: 2`}],quiz:[{id:"q1",question:"What access modifier makes a method accessible only within its own class?",options:["public","protected","private","local"],correct:2,explanation:'"private" restricts access to only code within the same class.'},{id:"q2",question:"How do you call a static method named calculate() on a class named TaxHelper?",options:["new TaxHelper().calculate()","TaxHelper.calculate()","TaxHelper::calculate()","static.TaxHelper.calculate()"],correct:1,explanation:"Static methods are called on the class directly: ClassName.methodName(). No new keyword needed."},{id:"q3",question:"What is a constructor used for?",options:["To destroy an object when done","To define the return type",'To initialize an object when created with "new"',"To declare static variables"],correct:2,explanation:'A constructor runs automatically when you create a new instance with "new ClassName()". It sets up initial property values.'}],challengeId:"challenge-classes"},{id:"soql-basics",moduleId:"soql",order:9,title:"SOQL Fundamentals",subtitle:"Query your Salesforce data like a pro",description:"Learn how to write SOQL queries to read data from Salesforce objects",duration:"30 min",difficulty:"beginner",tags:["soql","queries","select","where","order by"],prerequisites:["apex-classes"],learningObjectives:["Write a basic SELECT query","Filter records with WHERE clauses","Sort and limit results","Query related objects with relationship queries","Use aggregate functions like COUNT and SUM"],content:[{type:"explanation",title:"What is SOQL?",body:`SOQL stands for Salesforce Object Query Language. It is how you read data stored in Salesforce.

Think of it like asking a question to your database:
"Give me all Accounts where the industry is Technology, sorted by name."

SOQL only reads data — it never creates, updates, or deletes records. For that, you use DML (covered in the next lesson).

SOQL looks very similar to SQL if you have seen it before, but it is designed specifically for the Salesforce data model.`},{type:"example",title:"Basic SELECT Query",body:`The simplest SOQL query has three parts:

SELECT   — which fields you want
FROM     — which object to query

\`\`\`sql
SELECT Id, Name, Industry
FROM Account
\`\`\`

This returns all Account records with their Id, Name, and Industry fields.

You can select as many fields as you need, separated by commas. Always include Id — it is the unique identifier for every record.`},{type:"example",title:"Filtering with WHERE",body:`Use WHERE to filter which records you get back.

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
\`\`\``},{type:"example",title:"Combining Conditions with AND / OR",body:`You can combine multiple conditions using AND and OR.

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
\`\`\``},{type:"example",title:"Sorting with ORDER BY",body:`Use ORDER BY to sort results. Add ASC (ascending, A→Z) or DESC (descending, Z→A).

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
\`\`\``},{type:"example",title:"Limiting Results with LIMIT",body:`LIMIT caps how many records are returned. Always use LIMIT to avoid pulling thousands of records unnecessarily.

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

LIMIT is required when running SOQL in loops (governor limits). You can query a maximum of 50,000 records per transaction.`},{type:"example",title:"NULL Checks",body:`To check if a field is empty, use = null or != null (not IS NULL like in standard SQL).

\`\`\`sql
-- Contacts without an email address
SELECT Id, FirstName, LastName
FROM Contact
WHERE Email = null

-- Opportunities that have a close date set
SELECT Id, Name, CloseDate
FROM Opportunity
WHERE CloseDate != null
\`\`\``},{type:"example",title:"Relationship Queries (Parent → Child)",body:`Salesforce records are connected. You can query related data in one query.

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

The child object name in a subquery uses the relationship name (usually the plural of the child object — Contacts, Opportunities, Cases).`},{type:"example",title:"Aggregate Functions",body:`SOQL supports aggregate functions to calculate summaries across records.

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
\`\`\``},{type:"note",title:"SOQL vs SQL — Key Differences",body:`If you know SQL, here are the important differences in SOQL:

✓ No SELECT * — you must list field names explicitly (or use Id, Name, etc.)
✓ No JOIN — use relationship queries (dot notation or subqueries) instead
✓ Use = null instead of IS NULL
✓ String values use single quotes: WHERE Name = 'Acme'
✓ Dates use a special format: WHERE CloseDate > 2024-01-01
✓ There is no DISTINCT keyword
✓ Governor limit: max 50,000 records per query, 100 queries per transaction`},{type:"tip",title:"Query Builder in This App",body:"Use the SOQL Explorer tool in this app to build and test queries visually. You can select fields, add filters, sort results, and see the matching records from the sample dataset — all without needing a real Salesforce org."}],quiz:[{id:"soql-q1",question:"What keyword do you use to filter records in a SOQL query?",options:["FILTER","WHERE","HAVING","CONDITION"],correct:1,explanation:"WHERE is used to filter which records are returned. HAVING is used to filter grouped aggregate results."},{id:"soql-q2",question:"Which query returns accounts sorted from most employees to fewest?",options:["SELECT Id, Name FROM Account SORT BY NumberOfEmployees","SELECT Id, Name FROM Account ORDER BY NumberOfEmployees DESC","SELECT Id, Name FROM Account ORDER BY NumberOfEmployees ASC","SELECT Id, Name FROM Account WHERE NumberOfEmployees > 0"],correct:1,explanation:"ORDER BY field DESC sorts in descending order (largest to smallest). ASC is ascending (smallest to largest)."},{id:"soql-q3",question:"How do you check if a field has no value in SOQL?",options:["WHERE Email IS NULL","WHERE Email = NULL","WHERE Email = null","WHERE Email == null"],correct:2,explanation:"SOQL uses = null (lowercase) to check for empty fields, unlike SQL which uses IS NULL."},{id:"soql-q4",question:"What does LIMIT 10 do in a SOQL query?",options:["Skips the first 10 records","Returns only the first 10 records","Filters records where a field is less than 10","Groups records into batches of 10"],correct:1,explanation:"LIMIT caps the number of records returned. LIMIT 10 means at most 10 records come back."}],challengeId:"challenge-soql"},{id:"apex-dml",moduleId:"dml",order:1,title:"DML: Saving Data to Salesforce",subtitle:"Insert, update, delete, and upsert records",description:"Learn how to create, modify, and delete Salesforce records using Data Manipulation Language (DML) operations in Apex.",duration:35,difficulty:"beginner",tags:["apex","dml","database","insert","update"],prerequisites:["soql-basics","apex-lists"],learningObjectives:["Use insert to create new records","Use update to modify existing records","Use delete to remove records","Use upsert to insert or update based on a key","Handle DML exceptions safely"],content:[{type:"explanation",title:"What is DML?",text:`DML (Data Manipulation Language) is how you write data to the Salesforce database. Five main DML operations:

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

Always use bulk DML (pass a List) rather than individual DML in a loop.`}],quiz:[{id:"q1",question:'After executing "insert myAccount;", what happens to myAccount.Id?',options:["It remains null","Salesforce populates it with the new record ID",'It is set to "pending"',"You must query it separately"],correct:1,explanation:"After a successful DML insert, Salesforce automatically populates the Id field on your Apex object."},{id:"q2",question:"What does upsert do differently from insert?",options:["upsert can delete records too","upsert inserts if the record does not exist, updates it if it does","upsert is faster than insert","upsert only works with custom objects"],correct:1,explanation:'"upsert" combines insert + update: if a matching record exists, it updates; otherwise, it inserts.'},{id:"q3",question:"What is the benefit of Database.insert(list, false)?",options:["It is faster","It allows partial success — some records can succeed even if others fail","It bypasses validation rules","It skips duplicate checking"],correct:1,explanation:"Database.insert(list, false) sets allOrNothing to false, allowing partial success even when some records fail."}],challengeId:"challenge-dml"}];qe.reduce((e,t)=>(e[t.moduleId]||(e[t.moduleId]=[]),e[t.moduleId].push(t),e),{});const Ph=e=>qe.find(t=>t.id===e),jd=[{id:"challenge-variables",lessonId:"apex-variables",title:"Build a Contact Info Card",description:"Declare the correct Apex variables to represent a Salesforce Contact record, then print a formatted summary.",difficulty:"beginner",instructions:["Declare a String variable for the contact's full name","Declare an Integer variable for their age","Declare a Decimal variable for their annual salary","Declare a Boolean variable indicating if they are a VIP customer","Declare a Date variable for their hire date using Date.newInstance()","Print a summary using System.debug()"],starterCode:`// TODO: Declare your variables here
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
}`,solutionExplanation:"We create all Account objects first, then insert them all at once with a single DML statement. This is the bulkification pattern — one DML call for many records is far more efficient than one call per record. After insert, each account's Id is automatically populated by Salesforce.",testCases:[{id:"tc1",description:"Creates a List<Account>",pattern:"List<Account>",errorMessage:"Create a List<Account> to hold the accounts before inserting."},{id:"tc2",description:"Adds accounts to list",pattern:"\\.add\\(new\\s+Account|new\\s+Account\\(Name",errorMessage:"Add Account objects to your list."},{id:"tc3",description:"Uses single insert statement",pattern:"insert\\s+\\w+",errorMessage:'Use a single "insert list;" statement outside of any loop.'},{id:"tc4",description:"Wraps in try/catch",pattern:"try\\s*\\{|catch\\s*\\(",errorMessage:"Wrap the insert in a try/catch block to handle DmlException."},{id:"tc5",description:"Prints account IDs after insert",pattern:"\\.Id",errorMessage:"Print each account's .Id after the insert to confirm it was populated."}]}],Ld=e=>jd.find(t=>t.id===e);function zh(){const{progress:e,getLevel:t,resetProgress:n}=$s(),{level:r,title:s,next:l}=t(),i=e.completedLessons.length,o=e.completedChallenges.length,u=qe.length,d=jd.length,p=qe.find(x=>!e.completedLessons.includes(x.id)),h=qe.filter(x=>e.completedLessons.includes(x.id)).slice(-3).reverse(),g=l===1/0?e.xp:l,S=l===1/0?100:Math.round(e.xp/g*100),v=[{id:"apex-basics",label:"Apex Basics",path:"/apex",color:"blue",colorClass:"bg-sf-blue",icon:a.jsx(xe,{className:"w-4 h-4"})},{id:"soql",label:"SOQL",path:"/soql",color:"green",colorClass:"bg-sf-teal",icon:a.jsx(Hs,{className:"w-4 h-4"})},{id:"dml",label:"DML",path:"/apex",color:"orange",colorClass:"bg-sf-orange",icon:a.jsx(Wo,{className:"w-4 h-4"})}],y=[{to:"/soql",label:"SOQL Explorer",color:"text-sf-teal bg-teal-50 hover:bg-teal-100"},{to:"/debug",label:"Debug Lab",color:"text-sf-orange bg-orange-50 hover:bg-orange-100"},{to:"/missions",label:"Missions",color:"text-sf-purple bg-purple-50 hover:bg-purple-100"},{to:"/about",label:"About",color:"text-gray-600 bg-gray-50 hover:bg-gray-100"}];return a.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[a.jsxs("div",{className:"flex items-center justify-between mb-8",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:"My Dashboard"}),a.jsx("p",{className:"text-gray-500 text-sm mt-0.5",children:"Track your Salesforce learning journey"})]}),a.jsxs("button",{onClick:()=>{confirm("Reset all progress? This cannot be undone.")&&n()},className:"text-xs text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50",children:[a.jsx(kd,{className:"w-3.5 h-3.5"})," Reset progress"]})]}),a.jsxs("div",{className:"gradient-hero text-white rounded-2xl p-6 mb-6 relative overflow-hidden",children:[a.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-16 translate-x-16"}),a.jsxs("div",{className:"relative flex items-start justify-between",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"text-blue-200 text-xs font-medium uppercase tracking-wider mb-1",children:"Current Level"}),a.jsxs("div",{className:"text-2xl font-extrabold",children:["Level ",r,": ",s]}),a.jsxs("div",{className:"flex items-center gap-3 mt-4 mb-2 text-sm text-blue-200",children:[a.jsxs("span",{className:"font-semibold text-white",children:[e.xp," XP"]}),l!==1/0&&a.jsxs("span",{children:["→ ",l," XP for Level ",r+1]})]}),a.jsx("div",{className:"w-full max-w-xs bg-white/20 rounded-full h-2 mt-1",children:a.jsx("div",{className:"bg-yellow-400 h-2 rounded-full transition-all duration-700",style:{width:`${S}%`}})})]}),a.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20",children:a.jsx(pt,{className:"w-7 h-7 text-yellow-300"})})]})]}),a.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[{icon:a.jsx(nt,{className:"w-5 h-5 text-sf-blue"}),label:"Lessons Done",value:i,total:u},{icon:a.jsx(xe,{className:"w-5 h-5 text-violet-500"}),label:"Challenges",value:o,total:d},{icon:a.jsx(pt,{className:"w-5 h-5 text-yellow-500"}),label:"Total XP",value:e.xp,total:null},{icon:a.jsx(yi,{className:"w-5 h-5 text-sf-purple"}),label:"Level",value:r,total:6}].map(x=>a.jsxs("div",{className:"card text-center p-5",children:[a.jsx("div",{className:"flex justify-center mb-2",children:x.icon}),a.jsx("div",{className:"text-2xl font-extrabold text-gray-900",children:x.value}),x.total!==null&&a.jsxs("div",{className:"text-xs text-gray-400",children:["of ",x.total]}),a.jsx("div",{className:"text-xs text-gray-500 mt-1",children:x.label}),x.total!==null&&a.jsx("div",{className:"mt-3",children:a.jsx(Cs,{value:x.value,max:x.total,size:"sm"})})]},x.label))}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[a.jsxs("div",{className:"card",children:[a.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[a.jsx(nt,{className:"w-5 h-5 text-sf-blue"})," Continue Learning"]}),p?a.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-xs font-semibold text-sf-blue uppercase tracking-wider mb-1",children:"Up Next"}),a.jsx("div",{className:"font-bold text-gray-900",children:p.title}),a.jsx("div",{className:"text-sm text-gray-500 mt-1 mb-3",children:p.description}),a.jsxs(z,{to:`/lesson/${p.id}`,className:"btn-primary text-xs px-4 py-2",children:["Start Lesson ",a.jsx(Qn,{className:"w-3.5 h-3.5"})]})]}):a.jsxs("div",{className:"success-box mb-4",children:[a.jsx("p",{className:"font-semibold text-emerald-800",children:"All lessons complete!"}),a.jsx(z,{to:"/missions",className:"btn-primary mt-3 text-xs inline-flex",children:"View Missions"})]}),h.length>0&&a.jsxs("div",{className:"space-y-1",children:[a.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",children:"Recently Completed"}),h.map(x=>a.jsxs(z,{to:`/lesson/${x.id}`,className:"flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group",children:[a.jsx(gi,{className:"w-4 h-4 text-emerald-500 shrink-0"}),a.jsx("span",{className:"text-sm text-gray-700 group-hover:text-gray-900",children:x.title}),e.quizScores[x.id]!==void 0&&a.jsxs("span",{className:"ml-auto text-xs text-gray-400",children:[e.quizScores[x.id],"%"]})]},x.id))]})]}),a.jsxs("div",{className:"card",children:[a.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[a.jsx(Wo,{className:"w-5 h-5 text-sf-blue"})," Module Progress"]}),a.jsx("div",{className:"space-y-5",children:v.map(x=>{const f=qe.filter(w=>w.moduleId===x.id),c=f.filter(w=>e.completedLessons.includes(w.id)).length,m=f.length||1;return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs(z,{to:x.path,className:"flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-sf-blue transition-colors",children:[a.jsx("span",{className:`w-7 h-7 rounded-lg ${x.colorClass} text-white flex items-center justify-center`,children:x.icon}),x.label]}),a.jsxs("span",{className:"text-xs font-medium text-gray-400",children:[c,"/",f.length]})]}),a.jsx(Cs,{value:c,max:m,color:x.color,size:"sm"})]},x.id)})}),a.jsx("div",{className:"divider"}),a.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"Quick Links"}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:y.map(x=>a.jsx(z,{to:x.to,className:`text-center py-3 px-2 rounded-xl text-xs font-semibold transition-colors ${x.color}`,children:x.label},x.to))})]})]}),e.badges.length>0&&a.jsxs("div",{className:"card",children:[a.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[a.jsx(pt,{className:"w-5 h-5 text-yellow-500"})," Earned Badges"]}),a.jsx("div",{className:"flex flex-wrap gap-3",children:e.badges.map(x=>a.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl px-4 py-2.5",children:[a.jsx(pt,{className:"w-4 h-4 text-yellow-500"}),a.jsx("span",{className:"text-sm font-semibold text-yellow-800 capitalize",children:x.replace(/-/g," ")})]},x))})]})]})}function _h({difficulty:e}){const t={beginner:{label:"Beginner",class:"bg-green-100 text-green-700"},intermediate:{label:"Intermediate",class:"bg-yellow-100 text-yellow-700"},advanced:{label:"Advanced",class:"bg-red-100 text-red-700"}},{label:n,class:r}=t[e]||t.beginner;return a.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${r}`,children:n})}function Uh({lesson:e,isCompleted:t,isLocked:n=!1,quizScore:r}){const s=a.jsx("div",{className:`bg-white rounded-xl border-2 p-5 transition-all duration-200 ${n?"border-gray-100 opacity-60 cursor-not-allowed":t?"border-green-200 hover:border-green-400 hover:shadow-sf-lg cursor-pointer":"border-gray-100 hover:border-sf-blue hover:shadow-sf-lg cursor-pointer"}`,children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"flex-shrink-0 mt-0.5",children:n?a.jsx("div",{className:"w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center",children:a.jsx(vh,{size:16,className:"text-sf-gray-5"})}):t?a.jsx("div",{className:"w-9 h-9 rounded-full bg-green-100 flex items-center justify-center",children:a.jsx(Xe,{size:18,className:"text-sf-green"})}):a.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center",children:a.jsx(nt,{size:16,className:"text-sf-blue"})})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:`font-semibold text-sm ${n?"text-sf-gray-5":"text-sf-gray-9"}`,children:e.title}),a.jsx("p",{className:`text-xs mt-0.5 ${n?"text-sf-gray-4":"text-sf-gray-6"}`,children:e.subtitle})]}),!n&&a.jsx(Nt,{size:16,className:"text-sf-gray-4 flex-shrink-0 mt-0.5"})]}),a.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[a.jsx(_h,{difficulty:e.difficulty}),a.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[a.jsx(Bs,{size:11}),e.duration," min"]}),t&&r!==void 0&&a.jsxs("span",{className:"text-xs text-sf-green font-medium",children:["Quiz: ",r,"%"]})]})]})]})});return n?s:a.jsx(z,{to:`/lesson/${e.id}`,className:"block",children:s})}function Fh(){const e=N.useContext(xi),{progress:t}=e,n=qe.filter(u=>u.moduleId==="apex-basics"),r=qe.filter(u=>u.moduleId==="soql"),s=qe.filter(u=>u.moduleId==="dml"),l=[...n,...r,...s],i=l.filter(u=>t.completedLessons.includes(u.id)).length,o=l.reduce((u,d)=>u+d.duration,0);return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sf-blue text-sm mb-2",children:[a.jsx(nt,{size:14}),a.jsx(z,{to:"/dashboard",className:"hover:underline",children:"Dashboard"}),a.jsx(Nt,{size:12,className:"text-sf-gray-4"}),a.jsx("span",{children:"Apex Learning Path"})]}),a.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:"Salesforce Apex Learning Path"}),a.jsx("p",{className:"text-sf-gray-6 mt-1 max-w-2xl",children:"Master Apex from the ground up — from variables and data types to SOQL queries and DML operations."}),a.jsxs("div",{className:"flex items-center gap-6 mt-4",children:[a.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[a.jsx(nt,{size:15})," ",l.length," lessons"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[a.jsx(Bs,{size:15})," ~",Math.round(o/60)," hours"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[a.jsx(Xe,{size:15,className:"text-sf-green"})," ",i," completed"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[a.jsx(xe,{size:15})," ",l.filter(u=>u.challengeId).length," challenges"]})]}),a.jsx(Cs,{value:i,max:l.length,className:"mt-3 max-w-xs",showLabel:!0,label:"Overall progress"})]}),a.jsx(Nl,{title:"Module 1: Apex Fundamentals",description:"The essential building blocks of Apex programming.",lessons:n,progress:t,color:"bg-sf-blue"}),a.jsx(Nl,{title:"Module 2: SOQL — Querying Data",description:"Learn to retrieve Salesforce records with precision.",lessons:r,progress:t,color:"bg-sf-teal"}),a.jsx(Nl,{title:"Module 3: DML — Writing Data",description:"Create, update, and delete Salesforce records safely.",lessons:s,progress:t,color:"bg-sf-green"}),a.jsxs("div",{className:"card border-2 border-dashed border-gray-200 text-center py-8 mt-6",children:[a.jsx("div",{className:"text-3xl mb-3",children:"🚀"}),a.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-1",children:"More modules coming soon"}),a.jsx("p",{className:"text-sm text-sf-gray-5",children:"Apex Triggers, Lightning Web Components, and Integrations"})]})]})}function Nl({title:e,description:t,lessons:n,progress:r,color:s}){if(n.length===0)return null;const l=n.filter(i=>r.completedLessons.includes(i.id)).length;return a.jsxs("div",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[a.jsx("div",{className:`w-1 h-full min-h-[3rem] rounded-full ${s} flex-shrink-0 mt-1`,style:{width:4}}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h2",{className:"font-bold text-sf-gray-9",children:e}),a.jsxs("span",{className:"text-sm text-sf-gray-5",children:[l,"/",n.length]})]}),a.jsx("p",{className:"text-sm text-sf-gray-6",children:t}),a.jsx(Cs,{value:l,max:n.length,size:"sm",className:"mt-2 max-w-[200px]"})]})]}),a.jsx("div",{className:"space-y-3 pl-4",children:n.map((i,o)=>{const u=r.completedLessons.includes(i.id),d=o>0&&!r.completedLessons.includes(n[o-1].id)&&!u;return a.jsx(Uh,{lesson:i,isCompleted:u,isLocked:d,quizScore:r.quizScores[i.id]},i.id)})})]})}function Bh({questions:e,onComplete:t}){const[n,r]=N.useState(0),[s,l]=N.useState(null),[i,o]=N.useState(!1),[u,d]=N.useState([]),[p,h]=N.useState(!1),g=e[n],S=s===(g==null?void 0:g.correct),v=f=>{if(i)return;l(f),o(!0);const c=f===g.correct;d(m=>[...m,c])},y=()=>{if(n<e.length-1)r(f=>f+1),l(null),o(!1);else{const f=u.filter(Boolean).length+(s===(g==null?void 0:g.correct)?1:0);h(!0),t(f,e.length)}},x=()=>{r(0),l(null),o(!1),d([]),h(!1)};if(p){const f=u.filter(Boolean).length,c=Math.round(f/e.length*100);return a.jsxs("div",{className:"text-center py-8",children:[a.jsx("div",{className:"w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4",children:a.jsx(pt,{size:28,className:"text-yellow-600"})}),a.jsx("h3",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Quiz Complete!"}),a.jsxs("p",{className:"text-sf-gray-6 mb-1",children:["You got ",a.jsxs("span",{className:"font-semibold text-sf-gray-9",children:[f," of ",e.length]})," correct"]}),a.jsxs("div",{className:`text-3xl font-bold mt-4 mb-6 ${c>=80?"text-sf-green":c>=60?"text-yellow-500":"text-sf-red"}`,children:[c,"%"]}),c>=80?a.jsx("p",{className:"text-sf-green font-medium mb-6",children:"Excellent work! You've mastered this material."}):c>=60?a.jsx("p",{className:"text-yellow-600 font-medium mb-6",children:"Good effort! Review the explanations to strengthen your understanding."}):a.jsx("p",{className:"text-sf-red font-medium mb-6",children:"Keep studying! Review the lesson and try again."}),a.jsx("button",{onClick:x,className:"btn-secondary",children:"Retake Quiz"})]})}return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("span",{className:"text-sm text-sf-gray-6",children:["Question ",n+1," of ",e.length]}),a.jsx("div",{className:"flex gap-1",children:e.map((f,c)=>a.jsx("div",{className:`w-2 h-2 rounded-full ${c<u.length?u[c]?"bg-sf-green":"bg-sf-red":c===n?"bg-sf-blue":"bg-gray-200"}`},c))})]}),a.jsx("p",{className:"text-sf-gray-9 font-medium mb-4 leading-relaxed",children:g.question}),a.jsx("div",{className:"space-y-3 mb-4",children:g.options.map((f,c)=>{let m="w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ";return i?c===g.correct?m+="border-green-400 bg-green-50 text-sf-green":c===s&&!S?m+="border-red-400 bg-red-50 text-sf-red":m+="border-gray-100 text-sf-gray-5 cursor-not-allowed":m+="border-gray-200 hover:border-sf-blue hover:bg-blue-50 text-sf-gray-8 cursor-pointer",a.jsx("button",{className:m,onClick:()=>v(c),children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0",style:{borderColor:i&&c===g.correct?"#2E844A":i&&c===s?"#EA001E":"#C9C7C5"},children:String.fromCharCode(65+c)}),i&&c===g.correct&&a.jsx(Xe,{size:15,className:"text-sf-green flex-shrink-0"}),i&&c===s&&!S&&a.jsx(xa,{size:15,className:"text-sf-red flex-shrink-0"}),a.jsx("span",{children:f})]})},c)})}),i&&a.jsx("div",{className:`p-4 rounded-lg mb-4 text-sm ${S?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:a.jsxs("div",{className:"flex items-start gap-2",children:[S?a.jsx(Xe,{size:16,className:"text-sf-green mt-0.5 flex-shrink-0"}):a.jsx(xa,{size:16,className:"text-sf-red mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("p",{className:`font-semibold mb-1 ${S?"text-sf-green":"text-sf-red"}`,children:S?"Correct!":"Not quite."}),a.jsx("p",{className:"text-sf-gray-7",children:g.explanation})]})]})}),i&&a.jsxs("button",{onClick:y,className:"btn-primary flex items-center gap-2",children:[n<e.length-1?"Next Question":"See Results",a.jsx(Nt,{size:16})]})]})}function $o(e){return e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>")}function Wh({block:e}){const t={note:a.jsx(bd,{size:16,className:"text-sf-blue flex-shrink-0 mt-0.5"}),warning:a.jsx(qs,{size:16,className:"text-orange-500 flex-shrink-0 mt-0.5"}),tip:a.jsx(Ns,{size:16,className:"text-yellow-500 flex-shrink-0 mt-0.5"})},n={note:"note-box",warning:"warning-box",tip:"hint-box"};return e.type==="explanation"?a.jsxs("div",{className:"lesson-section",children:[e.title&&a.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-3",children:e.title}),a.jsx("p",{className:"text-sf-gray-7 leading-relaxed",dangerouslySetInnerHTML:{__html:$o(e.text)}})]}):e.type==="example"?a.jsxs("div",{className:"lesson-section",children:[e.title&&a.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),e.text&&a.jsx("p",{className:"text-sf-gray-7 mb-3 leading-relaxed",children:e.text}),e.code&&a.jsxs("div",{className:"rounded-xl overflow-hidden border border-gray-200",children:[a.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),a.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),a.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),a.jsx("span",{className:"text-sf-gray-5 text-xs ml-2 font-mono",children:"Apex"})]}),a.jsx("pre",{className:"code-block rounded-none overflow-x-auto",children:a.jsx("code",{children:e.code})}),e.output&&a.jsxs("div",{className:"bg-gray-800 border-t border-gray-700 px-4 py-3",children:[a.jsx("div",{className:"text-xs text-sf-gray-5 mb-1 font-mono",children:"// Output:"}),a.jsx("pre",{className:"text-green-400 text-sm font-mono whitespace-pre-wrap",children:e.output})]})]})]}):e.type==="note"||e.type==="warning"||e.type==="tip"?a.jsx("div",{className:`${n[e.type]||"note-box"} lesson-section`,children:a.jsxs("div",{className:"flex items-start gap-2",children:[t[e.type],a.jsxs("div",{children:[e.title&&a.jsx("p",{className:"font-semibold text-sm mb-1",children:e.title}),a.jsx("p",{className:"text-sm leading-relaxed",dangerouslySetInnerHTML:{__html:$o(e.text)}})]})]})}):a.jsxs("div",{className:"lesson-section",children:[e.title&&a.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),a.jsx("p",{className:"text-sf-gray-7",children:e.text})]})}function qh(){const{lessonId:e}=gd();hd();const t=N.useContext(xi),{progress:n,completeLesson:r,recordQuizScore:s,isLessonCompleted:l}=t,[i,o]=N.useState("lesson"),[u,d]=N.useState(!1),p=Ph(e||"");if(!p)return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[a.jsx("h2",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Lesson not found"}),a.jsx(z,{to:"/apex",className:"text-sf-blue hover:underline",children:"Back to lessons"})]});const h=p.challengeId?Ld(p.challengeId):null,g=l(p.id),S=!!n.quizScores[p.id],v=qe,y=v.findIndex(b=>b.id===p.id),x=y>0?v[y-1]:null,f=y<v.length-1?v[y+1]:null,c=()=>{r(p.id)},m=(b,E)=>{s(p.id,b,E),d(!0),b===E&&r(p.id)},w=[{id:"lesson",label:"Lesson",icon:nt},{id:"quiz",label:`Quiz (${p.quiz.length}Q)`,icon:Xe},...h?[{id:"challenge",label:"Challenge",icon:xe}]:[]];return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"flex items-center gap-1 text-sm text-sf-gray-5 mb-6",children:[a.jsx(z,{to:"/apex",className:"hover:text-sf-blue",children:"Apex Path"}),a.jsx(Nt,{size:13}),a.jsx("span",{className:"text-sf-gray-7",children:p.title})]}),a.jsxs("div",{className:"card mb-6",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsxs("span",{className:"text-xs font-medium text-sf-blue bg-blue-50 px-2 py-0.5 rounded",children:["Lesson ",p.order]}),a.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[a.jsx(Bs,{size:11})," ",p.duration," min"]}),g&&a.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-green font-medium",children:[a.jsx(Xe,{size:12})," Completed"]})]}),a.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:p.title}),a.jsx("p",{className:"text-sf-gray-6 mt-1",children:p.description})]}),!g&&a.jsxs("button",{onClick:c,className:"flex-shrink-0 flex items-center gap-1.5 text-sm text-sf-gray-6 border border-gray-200 hover:border-sf-green hover:text-sf-green px-3 py-1.5 rounded-lg transition-colors",children:[a.jsx(Xe,{size:14}),"Mark done"]})]}),a.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[a.jsx("p",{className:"text-xs font-semibold text-sf-gray-7 mb-2",children:"You will learn:"}),a.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1",children:p.learningObjectives.map((b,E)=>a.jsxs("li",{className:"flex items-start gap-1.5 text-xs text-sf-gray-6",children:[a.jsx("span",{className:"text-sf-blue mt-0.5",children:"•"}),b]},E))})]})]}),a.jsx("div",{className:"flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit",children:w.map(({id:b,label:E,icon:L})=>a.jsxs("button",{onClick:()=>o(b),className:`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${i===b?"bg-white text-sf-gray-9 shadow-sm":"text-sf-gray-6 hover:text-sf-gray-9"}`,children:[a.jsx(L,{size:14}),E,b==="quiz"&&S&&a.jsxs("span",{className:"text-xs text-sf-green ml-1",children:[n.quizScores[p.id],"%"]})]},b))}),i==="lesson"&&a.jsxs("div",{className:"card",children:[p.content.map((b,E)=>a.jsx(Wh,{block:b},E)),a.jsx("div",{className:"pt-6 border-t border-gray-100 mt-6",children:a.jsxs("button",{onClick:()=>o("quiz"),className:"btn-primary flex items-center gap-2",children:["Take the Quiz",a.jsx(Nt,{size:16})]})})]}),i==="quiz"&&a.jsxs("div",{className:"card",children:[a.jsx("h2",{className:"text-lg font-bold text-sf-gray-9 mb-4",children:"Knowledge Check"}),a.jsx(Bh,{questions:p.quiz,lessonId:p.id,onComplete:m}),u&&h&&a.jsx("div",{className:"mt-6 pt-6 border-t border-gray-100",children:a.jsxs("button",{onClick:()=>o("challenge"),className:"btn-primary flex items-center gap-2",children:["Try the Challenge",a.jsx(xe,{size:16})]})})]}),i==="challenge"&&h&&a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"flex items-start justify-between mb-4",children:a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-sf-gray-9",children:h.title}),a.jsx("p",{className:"text-sf-gray-6 text-sm mt-1",children:h.description})]})}),a.jsxs(z,{to:`/challenge/${h.id}`,className:"btn-primary inline-flex items-center gap-2",children:["Open Full Challenge Editor",a.jsx(xe,{size:15})]})]}),a.jsxs("div",{className:"flex items-center justify-between mt-6",children:[x?a.jsxs(z,{to:`/lesson/${x.id}`,className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue transition-colors",children:[a.jsx(fh,{size:16}),x.title]}):a.jsx("div",{}),f&&a.jsxs(z,{to:`/lesson/${f.id}`,className:"flex items-center gap-2 text-sm text-sf-blue font-medium hover:text-sf-blue-dark",children:[f.title,a.jsx(Nt,{size:16})]})]})]})}const Id=[{name:"Account",label:"Account",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Industry",type:"string"},{name:"AnnualRevenue",type:"number"},{name:"NumberOfEmployees",type:"number"},{name:"BillingCity",type:"string"},{name:"BillingState",type:"string"},{name:"Phone",type:"string"},{name:"Type",type:"string"}],records:[{Id:"001A000001",Name:"TechVentures Inc",Industry:"Technology",AnnualRevenue:5e6,NumberOfEmployees:250,BillingCity:"San Francisco",BillingState:"CA",Phone:"415-555-0101",Type:"Customer"},{Id:"001A000002",Name:"HealthFirst Corp",Industry:"Healthcare",AnnualRevenue:8e6,NumberOfEmployees:500,BillingCity:"Boston",BillingState:"MA",Phone:"617-555-0102",Type:"Customer"},{Id:"001A000003",Name:"Capital Group",Industry:"Finance",AnnualRevenue:12e6,NumberOfEmployees:800,BillingCity:"New York",BillingState:"NY",Phone:"212-555-0103",Type:"Customer"},{Id:"001A000004",Name:"RetailMax",Industry:"Retail",AnnualRevenue:3e6,NumberOfEmployees:120,BillingCity:"Chicago",BillingState:"IL",Phone:"312-555-0104",Type:"Partner"},{Id:"001A000005",Name:"ManuPro Industries",Industry:"Manufacturing",AnnualRevenue:65e5,NumberOfEmployees:400,BillingCity:"Detroit",BillingState:"MI",Phone:"313-555-0105",Type:"Customer"},{Id:"001A000006",Name:"DataStream Analytics",Industry:"Technology",AnnualRevenue:25e5,NumberOfEmployees:80,BillingCity:"Austin",BillingState:"TX",Phone:"512-555-0106",Type:"Prospect"},{Id:"001A000007",Name:"EduLearn Systems",Industry:"Education",AnnualRevenue:12e5,NumberOfEmployees:60,BillingCity:"Seattle",BillingState:"WA",Phone:"206-555-0107",Type:"Customer"},{Id:"001A000008",Name:"GreenPath Energy",Industry:"Energy",AnnualRevenue:9e6,NumberOfEmployees:350,BillingCity:"Houston",BillingState:"TX",Phone:"832-555-0108",Type:"Customer"},{Id:"001A000009",Name:"Apex Consulting",Industry:"Technology",AnnualRevenue:4e6,NumberOfEmployees:180,BillingCity:"Denver",BillingState:"CO",Phone:"303-555-0109",Type:"Partner"},{Id:"001A000010",Name:"MedDevice Corp",Industry:"Healthcare",AnnualRevenue:15e6,NumberOfEmployees:1200,BillingCity:"Minneapolis",BillingState:"MN",Phone:"612-555-0110",Type:"Customer"}]},{name:"Contact",label:"Contact",fields:[{name:"Id",type:"id"},{name:"FirstName",type:"string"},{name:"LastName",type:"string"},{name:"Email",type:"string"},{name:"Title",type:"string"},{name:"Department",type:"string"},{name:"Phone",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"003A000001",FirstName:"Sarah",LastName:"Chen",Email:"sarah.chen@techventures.com",Title:"CTO",Department:"Engineering",Phone:"415-555-1001",AccountId:"001A000001"},{Id:"003A000002",FirstName:"Michael",LastName:"Torres",Email:"mtorres@healthfirst.com",Title:"CFO",Department:"Finance",Phone:"617-555-1002",AccountId:"001A000002"},{Id:"003A000003",FirstName:"Amanda",LastName:"Johnson",Email:"ajohnson@capitalgroup.com",Title:"VP Sales",Department:"Sales",Phone:"212-555-1003",AccountId:"001A000003"},{Id:"003A000004",FirstName:"David",LastName:"Park",Email:"dpark@retailmax.com",Title:"CEO",Department:"Executive",Phone:"312-555-1004",AccountId:"001A000004"},{Id:"003A000005",FirstName:"Lisa",LastName:"Smith",Email:"lsmith@manupro.com",Title:"COO",Department:"Operations",Phone:"313-555-1005",AccountId:"001A000005"},{Id:"003A000006",FirstName:"James",LastName:"Wilson",Email:"jwilson@datastream.com",Title:"CTO",Department:"Technology",Phone:"512-555-1006",AccountId:"001A000006"},{Id:"003A000007",FirstName:"Emily",LastName:"Garcia",Email:"egarcia@edulearn.com",Title:"Director",Department:"Product",Phone:"206-555-1007",AccountId:"001A000007"},{Id:"003A000008",FirstName:"Robert",LastName:"Martinez",Email:"rmartinez@greenpath.com",Title:"CEO",Department:"Executive",Phone:"832-555-1008",AccountId:"001A000008"}]},{name:"Opportunity",label:"Opportunity",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Amount",type:"number"},{name:"StageName",type:"string"},{name:"CloseDate",type:"date"},{name:"Probability",type:"number"},{name:"AccountId",type:"id"},{name:"OwnerId",type:"id"}],records:[{Id:"006A000001",Name:"TechVentures Platform License",Amount:85e3,StageName:"Closed Won",CloseDate:"2024-01-15",Probability:100,AccountId:"001A000001",OwnerId:"USER001"},{Id:"006A000002",Name:"HealthFirst Analytics Suite",Amount:125e3,StageName:"Closed Won",CloseDate:"2024-02-28",Probability:100,AccountId:"001A000002",OwnerId:"USER002"},{Id:"006A000003",Name:"Capital Group Premium",Amount:25e4,StageName:"Negotiation/Review",CloseDate:"2024-04-30",Probability:70,AccountId:"001A000003",OwnerId:"USER001"},{Id:"006A000004",Name:"RetailMax Expansion",Amount:45e3,StageName:"Proposal/Price Quote",CloseDate:"2024-05-15",Probability:50,AccountId:"001A000004",OwnerId:"USER003"},{Id:"006A000005",Name:"ManuPro ERP Integration",Amount:175e3,StageName:"Qualification",CloseDate:"2024-06-30",Probability:30,AccountId:"001A000005",OwnerId:"USER002"},{Id:"006A000006",Name:"DataStream Pro License",Amount:35e3,StageName:"Closed Won",CloseDate:"2024-01-31",Probability:100,AccountId:"001A000006",OwnerId:"USER003"},{Id:"006A000007",Name:"EduLearn LMS Platform",Amount:28e3,StageName:"Closed Lost",CloseDate:"2024-02-15",Probability:0,AccountId:"001A000007",OwnerId:"USER001"},{Id:"006A000008",Name:"GreenPath Smart Metering",Amount:32e4,StageName:"Negotiation/Review",CloseDate:"2024-05-31",Probability:80,AccountId:"001A000008",OwnerId:"USER002"}]},{name:"Case",label:"Case",fields:[{name:"Id",type:"id"},{name:"CaseNumber",type:"string"},{name:"Subject",type:"string"},{name:"Status",type:"string"},{name:"Priority",type:"string"},{name:"Origin",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"500A000001",CaseNumber:"00001001",Subject:"API connection timeout error",Status:"Open",Priority:"High",Origin:"Web",AccountId:"001A000001"},{Id:"500A000002",CaseNumber:"00001002",Subject:"Report export failing",Status:"In Progress",Priority:"Medium",Origin:"Email",AccountId:"001A000002"},{Id:"500A000003",CaseNumber:"00001003",Subject:"User cannot log in",Status:"Closed",Priority:"Critical",Origin:"Phone",AccountId:"001A000003"},{Id:"500A000004",CaseNumber:"00001004",Subject:"Data import questions",Status:"Open",Priority:"Low",Origin:"Web",AccountId:"001A000004"},{Id:"500A000005",CaseNumber:"00001005",Subject:"Integration sync failure",Status:"Escalated",Priority:"High",Origin:"Email",AccountId:"001A000005"}]}];function Hh(e){try{const n=e.trim().replace(/\s+/g," ").toUpperCase().match(/FROM\s+(\w+)/i);if(!n)return{records:[],error:"Missing FROM clause",rowCount:0};const r=n[1],s=Id.find(v=>v.name.toUpperCase()===r.toUpperCase());if(!s)return{records:[],error:`Object '${r}' not found. Available: Account, Contact, Opportunity, Case`,rowCount:0};const l=e.match(/SELECT\s+([\s\S]+?)\s+FROM/i);if(!l)return{records:[],error:"Missing SELECT clause",rowCount:0};const o=l[1].split(",").map(v=>v.trim()),u=e.match(/LIMIT\s+(\d+)/i),d=u?parseInt(u[1]):200;let p=s.records.map(v=>({type:s.name,fields:v}));const h=e.match(/WHERE\s+([\s\S]+?)(?:\s+ORDER\s+BY|\s+LIMIT|\s+GROUP\s+BY|$)/i);if(h){const v=h[1].trim();p=$h(p,v,s)}const g=e.match(/ORDER\s+BY\s+(\w+)(?:\s+(ASC|DESC))?/i);if(g){const v=g[1],y=(g[2]||"ASC").toUpperCase();p=p.sort((x,f)=>{const c=x.fields[v],m=f.fields[v];if(c==null&&m==null)return 0;if(c==null)return y==="ASC"?1:-1;if(m==null)return y==="ASC"?-1:1;if(typeof c=="number"&&typeof m=="number")return y==="ASC"?c-m:m-c;const w=String(c).toLowerCase(),b=String(m).toLowerCase();return y==="ASC"?w.localeCompare(b):b.localeCompare(w)})}p=p.slice(0,d);const S=p.map(v=>({type:v.type,fields:o.reduce((y,x)=>{if(x==="*"||x.toUpperCase()==="ID")y[x]=v.fields.Id||null;else{const f=Object.keys(v.fields).find(c=>c.toLowerCase()===x.toLowerCase());y[x]=f?v.fields[f]:null}return y},{})}));return{records:S,error:null,rowCount:S.length}}catch(t){return{records:[],error:`Query error: ${t instanceof Error?t.message:String(t)}`,rowCount:0}}}function $h(e,t,n){return e.filter(r=>{try{const s=t.match(/^(\w+)\s*=\s*'([^']*)'$/i),l=t.match(/^(\w+)\s*!=\s*'([^']*)'$/i),i=t.match(/^(\w+)\s*>\s*(\d+(?:\.\d+)?)$/i),o=t.match(/^(\w+)\s*<\s*(\d+(?:\.\d+)?)$/i),u=t.match(/^(\w+)\s*>=\s*(\d+(?:\.\d+)?)$/i),d=t.match(/^(\w+)\s+LIKE\s+'([^']*)'/i),p=t.match(/^(\w+)\s+IN\s+\(([^)]+)\)/i),h=g=>{const S=Object.keys(r.fields).find(v=>v.toLowerCase()===g.toLowerCase());return S?r.fields[S]:null};if(s){const g=h(s[1]);return String(g).toLowerCase()===s[2].toLowerCase()}if(l){const g=h(l[1]);return String(g).toLowerCase()!==l[2].toLowerCase()}if(i){const g=h(i[1]);return typeof g=="number"&&g>parseFloat(i[2])}if(o){const g=h(o[1]);return typeof g=="number"&&g<parseFloat(o[2])}if(u){const g=h(u[1]);return typeof g=="number"&&g>=parseFloat(u[2])}if(d){const g=String(h(d[1])||"").toLowerCase(),S=d[2].toLowerCase().replace(/%/g,".*").replace(/_/g,".");return new RegExp("^"+S+"$").test(g)}if(p){const g=String(h(p[1])||"").toLowerCase();return p[2].split(",").map(v=>v.trim().replace(/'/g,"").toLowerCase()).includes(g)}return!0}catch{return!0}})}const Qo=[{label:"All Accounts",query:`SELECT Id, Name, Industry, AnnualRevenue
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
WHERE AccountId = '001A000001'`}];function Qh(){const[e,t]=N.useState(Qo[0].query),[n,r]=N.useState(null),[s,l]=N.useState(null),[i,o]=N.useState(0),[u,d]=N.useState(""),[p,h]=N.useState(!1),g=()=>{const y=Hh(e);r(y.records),l(y.error),o(y.rowCount),d(e)},S=y=>{t(y),r(null),l(null)},v=n&&n.length>0?Object.keys(n[0].fields):[];return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"mb-6",children:[a.jsxs("h1",{className:"text-2xl font-bold text-sf-gray-9 flex items-center gap-2",children:[a.jsx(Bo,{size:24,className:"text-sf-teal"}),"SOQL Visual Explorer"]}),a.jsx("p",{className:"text-sf-gray-6 mt-1",children:"Write and run SOQL queries against fictional Salesforce records. See results instantly."}),a.jsxs("div",{className:"flex items-center gap-2 mt-2 text-xs bg-yellow-50 border border-yellow-200 rounded px-3 py-1.5 w-fit text-yellow-700",children:[a.jsx(Fo,{size:13}),"Simulated data only — not connected to a real Salesforce org"]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[a.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[a.jsxs("div",{className:"card",children:[a.jsx("h3",{className:"font-semibold text-sf-gray-9 text-sm mb-3",children:"Example Queries"}),a.jsx("div",{className:"space-y-1",children:Qo.map((y,x)=>a.jsx("button",{onClick:()=>S(y.query),className:"w-full text-left text-xs px-2 py-1.5 rounded hover:bg-sf-gray-1 text-sf-gray-7 hover:text-sf-blue transition-colors",children:y.label},x))})]}),a.jsxs("div",{className:"card",children:[a.jsxs("button",{className:"w-full flex items-center justify-between font-semibold text-sf-gray-9 text-sm",onClick:()=>h(!p),children:[a.jsx("span",{children:"Data Schema"}),p?a.jsx(Nd,{size:14}):a.jsx(Nt,{size:14})]}),p&&a.jsx("div",{className:"mt-3 space-y-3",children:Id.map(y=>a.jsxs("div",{children:[a.jsx("div",{className:"text-xs font-semibold text-sf-blue mb-1",children:y.name}),a.jsx("div",{className:"space-y-0.5",children:y.fields.map(x=>a.jsxs("div",{className:"flex items-center justify-between text-xs",children:[a.jsx("span",{className:"text-sf-gray-7 font-mono",children:x.name}),a.jsx("span",{className:"text-sf-gray-4",children:x.type})]},x.name))})]},y.name))})]})]}),a.jsxs("div",{className:"lg:col-span-3 space-y-4",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"SOQL Query"}),a.jsx("span",{className:"text-xs text-sf-gray-4",children:"Available: Account, Contact, Opportunity, Case"})]}),a.jsx("textarea",{value:e,onChange:y=>t(y.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg p-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue text-sm",rows:6,spellCheck:!1}),a.jsxs("div",{className:"flex items-center justify-between mt-3",children:[a.jsxs("button",{onClick:g,className:"btn-primary flex items-center gap-2",children:[a.jsx(Ed,{size:15}),"Run Query"]}),n!==null&&a.jsxs("span",{className:"text-sm text-sf-gray-5",children:[i," row",i!==1?"s":""," returned"]})]})]}),s&&a.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-2",children:[a.jsx(Fo,{size:16,className:"text-sf-red flex-shrink-0 mt-0.5"}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sf-red font-semibold text-sm",children:"Query Error"}),a.jsx("p",{className:"text-red-700 text-sm mt-1",children:s})]})]}),n!==null&&!s&&a.jsxs("div",{className:"card overflow-hidden p-0",children:[a.jsx("div",{className:"px-4 py-3 border-b border-gray-100 bg-sf-gray-1",children:a.jsxs("h3",{className:"font-semibold text-sf-gray-9 text-sm",children:["Results — ",i," record",i!==1?"s":""]})}),n.length===0?a.jsxs("div",{className:"text-center py-12 text-sf-gray-5",children:[a.jsx(Bo,{size:32,className:"mx-auto mb-2 opacity-30"}),a.jsx("p",{children:"No records match your query"})]}):a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-sf-gray-1 border-b border-gray-200",children:a.jsx("tr",{children:v.map(y=>a.jsx("th",{className:"text-left px-4 py-2 text-xs font-semibold text-sf-gray-7 whitespace-nowrap",children:y},y))})}),a.jsx("tbody",{className:"divide-y divide-gray-100",children:n.map((y,x)=>a.jsx("tr",{className:"hover:bg-sf-gray-1 transition-colors",children:v.map(f=>{const c=y.fields[f];return a.jsx("td",{className:"px-4 py-2 text-sf-gray-7 whitespace-nowrap max-w-[200px] truncate",children:c==null?a.jsx("span",{className:"text-sf-gray-4 italic",children:"null"}):typeof c=="boolean"?a.jsx("span",{className:c?"text-sf-green":"text-sf-red",children:String(c)}):typeof c=="number"?a.jsx("span",{className:"font-mono",children:c.toLocaleString()}):f.toLowerCase().includes("id")?a.jsx("span",{className:"font-mono text-xs text-sf-gray-5",children:String(c)}):String(c)},f)})},x))})]})})]}),n===null&&a.jsxs("div",{className:"card border-dashed border-2 border-gray-200",children:[a.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-3 text-sm",children:"SOQL Quick Reference"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sf-gray-6",children:[["Basic query","SELECT Id, Name FROM Account LIMIT 10"],["Filter with WHERE","WHERE Industry = 'Technology'"],["Multiple conditions","WHERE Amount > 50000 AND StageName = 'Closed Won'"],["Pattern matching","WHERE Name LIKE 'Tech%'"],["Sort results","ORDER BY Amount DESC"],["List of values","WHERE Industry IN ('Tech', 'Healthcare')"]].map(([y,x])=>a.jsxs("div",{children:[a.jsxs("span",{className:"font-medium text-sf-gray-8",children:[y,":"]}),a.jsx("pre",{className:"font-mono text-sf-gray-5 mt-0.5 whitespace-pre-wrap",children:x})]},y))})]})]})]})]})}const Vh=[{id:"debug-null-pointer",title:"The Mysterious Null Pointer",description:"A trigger is failing with a NullPointerException. Find the null variable and fix it safely.",bugType:"null-pointer",brokenCode:`// This code is supposed to send a welcome email to new Contacts
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
update toUpdate;`,explanation:"Two bugs: SOQL and DML both inside the loop. For 100 accounts: 100 SOQL + 100 DML = both limits exceeded. Fix: use ONE aggregate SOQL with GROUP BY to get all revenues at once, build a Map for lookups, collect updates in a List, then do ONE bulk update. This goes from 200 operations to 3."}],Ad={"null-pointer":"bg-red-100 text-red-800","governor-limit":"bg-orange-100 text-orange-800",logic:"bg-yellow-100 text-yellow-800",syntax:"bg-purple-100 text-purple-800",soql:"bg-blue-100 text-blue-800",dml:"bg-teal-100 text-teal-800"};function Yh({scenario:e,onSelect:t}){return a.jsxs("button",{className:"card text-left w-full hover:shadow-sf-lg hover:-translate-y-0.5 transition-all",onClick:t,children:[a.jsx("div",{className:"flex items-center gap-2 mb-2",children:a.jsx("span",{className:`tag ${Ad[e.bugType]||"bg-gray-100 text-gray-800"}`,children:e.bugType.replace("-"," ")})}),a.jsx("h3",{className:"font-bold mb-1",children:e.title}),a.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description}),a.jsxs("div",{className:"flex items-center gap-1 mt-3 text-sf-blue text-sm font-medium",children:["Debug this ",a.jsx(Nt,{className:"w-4 h-4"})]})]})}function Gh({scenario:e,onBack:t}){const[n,r]=N.useState(!1),[s,l]=N.useState(0),[i,o]=N.useState(!1),[u,d]=N.useState(e.brokenCode),[p,h]=N.useState(!1),g=()=>{h(!0)};return a.jsxs("div",{children:[a.jsx("button",{className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue mb-6 transition-colors",onClick:t,children:"← Back to scenarios"}),a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center",children:a.jsx(Uo,{className:"w-5 h-5 text-red-600"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("h2",{className:"text-xl font-bold",children:e.title}),a.jsx("span",{className:`tag ${Ad[e.bugType]||""}`,children:e.bugType.replace("-"," ")})]}),a.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"font-semibold text-sf-gray-8 mb-2 flex items-center gap-2",children:[a.jsx(Uo,{className:"w-4 h-4 text-red-500"})," Broken Code"]}),a.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap border-2 border-red-300",children:e.brokenCode})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Error Message"}),a.jsx("div",{className:"bg-red-950 text-red-300 rounded-lg p-4 font-mono text-xs whitespace-pre-wrap mb-4",children:e.errorMessage}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("button",{className:"btn-secondary text-sm flex items-center gap-2 w-full justify-center",onClick:()=>{r(!0)},children:[a.jsx(Ns,{className:"w-4 h-4"}),n?`Hint ${s+1} of ${e.hints.length}`:"Get a Hint"]}),n&&a.jsxs("div",{className:"hint-box",children:[a.jsx("p",{className:"text-sm text-yellow-900",children:e.hints[s]}),s<e.hints.length-1&&a.jsx("button",{className:"text-xs text-yellow-700 underline mt-2",onClick:()=>l(S=>S+1),children:"Next hint →"})]})]})]})]}),a.jsxs("div",{className:"card mb-4",children:[a.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Your Fix"}),a.jsx("p",{className:"text-sm text-sf-gray-6 mb-3",children:'Edit the code above to fix the bug, then click "Check My Fix":'}),a.jsxs("div",{className:"card !p-0 overflow-hidden mb-4",children:[a.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[a.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),a.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),a.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),a.jsx("span",{className:"text-sf-gray-4 text-xs ml-2",children:"fix.apex"})]}),a.jsx("textarea",{className:"code-textarea w-full bg-sf-gray-9 text-green-300 p-4 border-0 outline-none",value:u,onChange:S=>d(S.target.value),rows:14,spellCheck:!1})]}),a.jsx("button",{className:"btn-primary",onClick:g,children:"Check My Fix"}),p&&a.jsx("div",{className:"mt-3 note-box",children:a.jsx("p",{className:"text-sm text-blue-800",children:"Great effort! Compare your solution with the official fix below to see if you found the issue. Pattern-based checking cannot verify runtime correctness — review the explanation carefully."})})]}),a.jsxs("button",{className:"btn-secondary flex items-center gap-2 mb-4",onClick:()=>o(!i),children:[a.jsx(Cd,{className:"w-4 h-4"}),i?"Hide Fix":"Show the Fix"]}),i&&a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"card border-2 border-green-300",children:[a.jsxs("h3",{className:"font-semibold text-green-800 mb-2 flex items-center gap-2",children:[a.jsx(gi,{className:"w-4 h-4"})," Fixed Code"]}),a.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap",children:e.fixedCode})]}),a.jsxs("div",{className:"card border-2 border-sf-blue/30 bg-sf-blue/5",children:[a.jsx("h3",{className:"font-semibold text-sf-blue mb-2",children:"Explanation"}),a.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed",children:e.explanation})]})]})]})}function Kh(){const[e,t]=N.useState(null);return a.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:e?a.jsx(Gh,{scenario:e,onBack:()=>t(null)}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Debug Lab"}),a.jsx("p",{className:"text-sf-gray-6",children:"Fix intentionally broken Apex code. Real bugs that Salesforce developers encounter every day."})]}),a.jsxs("div",{className:"flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6",children:[a.jsx(qs,{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"}),a.jsx("p",{className:"text-xs text-amber-800",children:"Each scenario shows a broken class and its error message. Use the hints if needed, then reveal the fix and explanation."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Vh.map(n=>a.jsx(Yh,{scenario:n,onSelect:()=>t(n)},n.id))})]})})}const Vo=[{id:"mission-lead-routing",title:"Automate Lead Routing",company:"Acme Corporation",description:"Acme's sales team is manually assigning leads every morning — a process taking 2 hours daily. Build an Apex solution to automate it.",scenario:`Sarah, Acme's Sales Ops Manager, has given you the following requirements in a meeting:

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

You'll write the Apex class that queries and aggregates this data.`,requirements:["Create class TerritoryRollup with method getReport() returning Map<String, TerritoryMetrics>","TerritoryMetrics inner class: String territory, Decimal totalPipeline, Decimal closedWon, Decimal winRate, Map<String, Decimal> byStage","Query all Opportunities with Amount != null","Group by Territory__c field","Calculate win rate: closedWon / (closedWon + closedLost)","Handle territories with no wins or losses gracefully"],difficulty:"intermediate",skills:["SOQL","Maps","Collections","Aggregate Functions","Inner Classes"],estimatedHours:3}],Xh={beginner:"bg-green-100 text-green-800",intermediate:"bg-yellow-100 text-yellow-800",advanced:"bg-red-100 text-red-800"};function Jh(){const[e,t]=N.useState(null),[n,r]=N.useState("all"),s=n==="all"?Vo:Vo.filter(l=>l.difficulty===n);return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Project Missions"}),a.jsx("p",{className:"text-sf-gray-6",children:"Apply your Apex skills to realistic business requirements — the kind you will encounter on actual Salesforce projects."})]}),a.jsx("div",{className:"card mb-6 bg-gradient-to-r from-sf-purple/10 to-sf-blue/10 border border-sf-purple/20",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(Ws,{className:"w-5 h-5 text-sf-purple flex-shrink-0 mt-0.5"}),a.jsxs("div",{children:[a.jsx("div",{className:"font-semibold mb-1",children:"What are Missions?"}),a.jsx("p",{className:"text-sm text-sf-gray-7",children:"Each mission presents a real business problem from a fictional company. You get a scenario, specific requirements, and a starter template. Missions are designed to be completed in a real Salesforce Developer Edition org — they are not validated in the browser."})]})]})}),a.jsx("div",{className:"flex gap-2 mb-6 flex-wrap",children:["all","beginner","intermediate","advanced"].map(l=>a.jsx("button",{onClick:()=>r(l),className:`px-3 py-1 rounded-full text-sm font-medium transition-colors ${n===l?"bg-sf-blue text-white":"bg-white text-sf-gray-7 border border-sf-gray-3 hover:border-sf-blue"}`,children:l.charAt(0).toUpperCase()+l.slice(1)},l))}),a.jsx("div",{className:"space-y-4",children:s.map(l=>a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"flex items-start justify-between cursor-pointer",onClick:()=>t(e===l.id?null:l.id),children:[a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[a.jsx("span",{className:`tag ${Xh[l.difficulty]}`,children:l.difficulty}),a.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[a.jsx(Bs,{className:"w-3 h-3"})," ~",l.estimatedHours,"h"]}),a.jsx("span",{className:"text-xs text-sf-blue font-medium",children:l.company})]}),a.jsx("h3",{className:"font-bold text-lg",children:l.title}),a.jsx("p",{className:"text-sm text-sf-gray-6 mt-1",children:l.description}),a.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:l.skills.map(i=>a.jsx("span",{className:"tag bg-sf-blue/10 text-sf-blue",children:i},i))})]}),a.jsx("div",{className:"flex-shrink-0 ml-4",children:e===l.id?a.jsx(mh,{className:"w-5 h-5 text-sf-gray-5"}):a.jsx(Nd,{className:"w-5 h-5 text-sf-gray-5"})})]}),e===l.id&&a.jsxs("div",{className:"mt-6 pt-6 border-t border-sf-gray-2 space-y-5",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-sf-gray-8 mb-2",children:"Business Scenario"}),a.jsx("div",{className:"bg-sf-blue/5 border-l-4 border-sf-blue p-4 rounded-r-lg",children:a.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed",children:l.scenario})})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-sf-gray-8 mb-2",children:"Requirements"}),a.jsx("ol",{className:"space-y-2",children:l.requirements.map((i,o)=>a.jsxs("li",{className:"flex gap-3 text-sm",children:[a.jsx("span",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-sf-purple text-white text-xs flex items-center justify-center font-bold",children:o+1}),a.jsx("span",{className:"text-sf-gray-7",children:i})]},o))})]}),l.starterCode&&a.jsxs("div",{children:[a.jsxs("h4",{className:"font-semibold text-sf-gray-8 mb-2 flex items-center gap-2",children:[a.jsx(xe,{className:"w-4 h-4 text-sf-teal"}),"Starter Template"]}),a.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap",children:l.starterCode})]}),a.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:[a.jsxs("div",{className:"flex items-center gap-2 text-yellow-800 text-sm font-medium mb-1",children:[a.jsx(yi,{className:"w-4 h-4"})," Where to Build This"]}),a.jsxs("p",{className:"text-xs text-yellow-700",children:["This mission is designed for a real Salesforce Developer Edition org. Create one free at"," ",a.jsx("a",{href:"https://developer.salesforce.com/signup",className:"underline",target:"_blank",rel:"noreferrer",children:"developer.salesforce.com/signup"})," ","and use the Developer Console or VS Code + Salesforce Extensions."]})]})]})]},l.id))})]})}function Zh(){return a.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-12",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"w-16 h-16 bg-sf-blue rounded-2xl flex items-center justify-center mx-auto mb-4",children:a.jsx(xe,{className:"w-8 h-8 text-white"})}),a.jsx("h1",{className:"text-3xl font-bold mb-3",children:"About SF Dev Academy"}),a.jsx("p",{className:"text-sf-gray-6 text-lg",children:"An interactive learning platform for aspiring Salesforce developers"})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"card",children:[a.jsx("h2",{className:"text-xl font-bold mb-3",children:"What is SF Dev Academy?"}),a.jsx("p",{className:"text-sf-gray-7 leading-relaxed",children:"SF Dev Academy is a free, browser-based learning platform designed specifically for people who are completely new to Salesforce development. Unlike documentation or video courses, every topic here follows a hands-on cycle: understand, see an example, write code, get feedback, review the solution."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"What You Will Learn"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:a.jsx(xe,{className:"w-4 h-4 text-sf-blue"}),label:"Apex Programming",desc:"Variables, classes, loops, collections"},{icon:a.jsx(Hs,{className:"w-4 h-4 text-sf-teal"}),label:"SOQL Queries",desc:"Query Salesforce data with precision"},{icon:a.jsx(nt,{className:"w-4 h-4 text-sf-orange"}),label:"DML Operations",desc:"Create, update, delete records safely"},{icon:a.jsx(Ws,{className:"w-4 h-4 text-sf-purple"}),label:"Real Scenarios",desc:"Apply skills to business problems"}].map(e=>a.jsxs("div",{className:"flex gap-3 p-3 bg-sf-gray-1 rounded-lg",children:[a.jsx("div",{className:"flex-shrink-0 mt-0.5",children:e.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"font-medium text-sm",children:e.label}),a.jsx("div",{className:"text-xs text-sf-gray-6",children:e.desc})]})]},e.label))})]}),a.jsx("div",{className:"card border-2 border-amber-200 bg-amber-50",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(qs,{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-amber-900 mb-2",children:"Important Disclaimer"}),a.jsxs("p",{className:"text-amber-800 text-sm leading-relaxed",children:["SF Dev Academy is an educational learning platform and is ",a.jsx("strong",{children:"not affiliated with Salesforce, Inc."}),"The coding challenges use ",a.jsx("strong",{children:"pattern-based validation"})," in the browser — they do not compile or execute real Apex code. This means the feedback checks for the presence of correct syntax patterns, not actual runtime correctness. To test real Apex, use a ",a.jsx("a",{href:"https://developer.salesforce.com/signup",className:"underline",target:"_blank",rel:"noreferrer",children:"free Salesforce Developer Edition org"}),"."]})]})]})}),a.jsxs("div",{className:"card",children:[a.jsx("h2",{className:"text-xl font-bold mb-3",children:"How Progress is Saved"}),a.jsxs("p",{className:"text-sf-gray-7 text-sm leading-relaxed",children:["In this initial version, all progress (completed lessons, quiz scores, XP, badges) is stored in your browser's",a.jsx("code",{className:"code-inline mx-1",children:"localStorage"}),". This means it persists across sessions on the same device and browser, but is not synced across devices. A future version will support user accounts with server-side persistence."]})]}),a.jsxs("div",{className:"card text-center",children:[a.jsx(gh,{className:"w-8 h-8 text-red-400 mx-auto mb-3"}),a.jsx("h2",{className:"text-xl font-bold mb-2",children:"Get Started"}),a.jsx("p",{className:"text-sf-gray-6 mb-4",children:"Ready to become a Salesforce developer?"}),a.jsxs(z,{to:"/apex",className:"btn-primary inline-flex items-center gap-2",children:["Start Learning ",a.jsx(Qn,{className:"w-4 h-4"})]})]})]})]})}function eg(e,t){try{const r=new RegExp(t.pattern,"im").test(e);return{passed:r,message:r?"Passed":t.errorMessage}}catch{return{passed:!1,message:"Test case error"}}}function tg({challenge:e,isCompleted:t,savedCode:n,onComplete:r}){const[s,l]=N.useState(n||e.starterCode),[i,o]=N.useState(-1),[u,d]=N.useState(!1),[p,h]=N.useState(null),[g,S]=N.useState(!1),v=(p==null?void 0:p.every(c=>c.passed))??!1,y=()=>{const c=e.testCases.map(m=>eg(s,m));h(c),S(!0),c.every(m=>m.passed)&&r(s)},x=()=>{l(e.starterCode),h(null),S(!1),o(-1),d(!1)},f=()=>{o(c=>Math.min(c+1,e.hints.length-1))};return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs text-yellow-700",children:[a.jsx(qs,{size:14,className:"flex-shrink-0 mt-0.5"}),a.jsxs("span",{children:[a.jsx("strong",{children:"Simulated validation only."})," This checks code patterns, not actual execution. Real Apex runs in a Salesforce org."]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-sf-gray-9 mb-2",children:"Instructions"}),a.jsx("ol",{className:"space-y-1",children:e.instructions.map((c,m)=>a.jsxs("li",{className:"text-sm text-sf-gray-7 flex items-start gap-2",children:[a.jsxs("span",{className:"text-sf-blue font-bold flex-shrink-0",children:[m+1,"."]}),c]},m))})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"Your Code"}),a.jsx("div",{className:"flex items-center gap-2",children:a.jsxs("button",{onClick:x,className:"flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors",children:[a.jsx(kd,{size:12}),"Reset"]})})]}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-10 bg-sf-gray-9 rounded-tl-lg rounded-bl-lg flex flex-col items-end pr-2 pt-4 select-none",children:s.split(`
`).map((c,m)=>a.jsx("div",{className:"text-sf-gray-5 text-xs leading-[1.7] font-mono",children:m+1},m))}),a.jsx("textarea",{value:s,onChange:c=>l(c.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg pl-12 pr-4 pt-4 pb-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue",rows:Math.max(10,s.split(`
`).length+2),spellCheck:!1,autoComplete:"off",autoCorrect:"off"})]})]}),g&&p&&a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-sf-gray-9 mb-2",children:v?"✓ All tests passed!":"Test Results"}),a.jsx("div",{className:"space-y-2",children:p.map((c,m)=>{var w;return a.jsxs("div",{className:`flex items-start gap-2 p-3 rounded-lg text-sm ${c.passed?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:[c.passed?a.jsx(Xe,{size:15,className:"text-sf-green mt-0.5 flex-shrink-0"}):a.jsx(xa,{size:15,className:"text-sf-red mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsxs("span",{className:`font-medium ${c.passed?"text-sf-green":"text-sf-red"}`,children:["Test ",m+1,": ",(w=e.testCases[m])==null?void 0:w.description]}),!c.passed&&a.jsx("p",{className:"text-sf-gray-7 mt-0.5",children:c.message})]})]},m)})})]}),a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsxs("button",{onClick:y,className:"btn-primary flex items-center gap-2",children:[a.jsx(wh,{size:15}),g?"Resubmit":"Submit"]}),i<e.hints.length-1&&a.jsxs("button",{onClick:f,className:"flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors",children:[a.jsx(Ns,{size:14}),i===-1?"Show Hint":"Next Hint"]}),a.jsxs("button",{onClick:()=>d(!u),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[u?a.jsx(hh,{size:14}):a.jsx(Cd,{size:14}),u?"Hide":"View"," Solution"]})]}),i>=0&&a.jsx("div",{className:"space-y-2",children:e.hints.slice(0,i+1).map((c,m)=>a.jsx("div",{className:"hint-box",children:a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(Ns,{size:15,className:"text-yellow-600 flex-shrink-0 mt-0.5"}),a.jsxs("p",{className:"text-sm text-yellow-800",children:[a.jsxs("strong",{children:["Hint ",m+1,":"]})," ",c]})]})},m))}),u&&a.jsxs("div",{className:"border border-sf-gray-3 rounded-lg overflow-hidden",children:[a.jsx("div",{className:"bg-sf-gray-9 px-4 py-2 flex items-center justify-between",children:a.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Solution"})}),a.jsx("pre",{className:"code-block rounded-none text-sm overflow-x-auto",children:a.jsx("code",{children:e.solution})}),a.jsx("div",{className:"bg-blue-50 border-t border-blue-100 p-4",children:a.jsxs("p",{className:"text-sm text-sf-gray-7",children:[a.jsx("strong",{className:"text-sf-gray-9",children:"Explanation:"})," ",e.solutionExplanation]})})]}),(t||v)&&a.jsxs("div",{className:"success-box flex items-center gap-2",children:[a.jsx(Xe,{size:18,className:"text-sf-green flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sf-green font-semibold text-sm",children:"Challenge completed! +150 XP"}),a.jsx("p",{className:"text-green-700 text-xs",children:"Your submission has been saved."})]})]})]})}function ng(){const{id:e}=gd(),{completeChallenge:t,isChallengeCompleted:n,progress:r}=$s(),s=e?Ld(e):void 0,l=s?n(s.id):!1;return s?a.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[a.jsxs("nav",{className:"flex items-center gap-2 text-sm text-sf-gray-5 mb-6",children:[a.jsxs(z,{to:"/apex",className:"hover:text-sf-blue transition-colors flex items-center gap-1",children:[a.jsx(ph,{className:"w-3 h-3"})," Apex Path"]}),a.jsx("span",{children:"›"}),a.jsxs("span",{className:"text-sf-gray-7",children:["Challenge: ",s.title]})]}),a.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-sf-blue/10 flex items-center justify-center",children:a.jsx(xe,{className:"w-5 h-5 text-sf-blue"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold",children:s.title}),a.jsx("p",{className:"text-sf-gray-6 text-sm",children:s.description})]})]}),a.jsx(tg,{challenge:s,onComplete:i=>t(s.id,i),isCompleted:l,savedCode:r.challengeSubmissions[s.id]})]}):a.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"Challenge not found"}),a.jsx(z,{to:"/apex",className:"btn-primary",children:"Back to Apex Path"})]})}const xi=N.createContext(null);function rg(){return a.jsxs("div",{className:"max-w-xl mx-auto px-4 py-24 text-center",children:[a.jsx("div",{className:"text-6xl font-bold text-sf-gray-3 mb-4",children:"404"}),a.jsx("h2",{className:"text-xl font-bold mb-2",children:"Page not found"}),a.jsx("p",{className:"text-sf-gray-6 mb-6",children:"The page you are looking for does not exist."}),a.jsx("a",{href:"/",className:"btn-primary",children:"Go Home"})]})}function sg(){const e=$s();return a.jsx(xi.Provider,{value:e,children:a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsx(jh,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(Jm,{children:[a.jsx(Re,{path:"/",element:a.jsx(Rh,{})}),a.jsx(Re,{path:"/dashboard",element:a.jsx(zh,{})}),a.jsx(Re,{path:"/apex",element:a.jsx(Fh,{})}),a.jsx(Re,{path:"/lesson/:lessonId",element:a.jsx(qh,{})}),a.jsx(Re,{path:"/soql",element:a.jsx(Qh,{})}),a.jsx(Re,{path:"/debug",element:a.jsx(Kh,{})}),a.jsx(Re,{path:"/missions",element:a.jsx(Jh,{})}),a.jsx(Re,{path:"/about",element:a.jsx(Zh,{})}),a.jsx(Re,{path:"/challenge/:id",element:a.jsx(ng,{})}),a.jsx(Re,{path:"*",element:a.jsx(rg,{})})]})}),a.jsx(Lh,{})]})})}function lg(){return a.jsx(lh,{children:a.jsx(sg,{})})}ad(document.getElementById("root")).render(a.jsx(N.StrictMode,{children:a.jsx(lg,{})}));
