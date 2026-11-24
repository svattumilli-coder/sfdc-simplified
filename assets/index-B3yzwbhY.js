function jd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function _d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gl={exports:{}},Es={},Yl={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),Pd=Symbol.for("react.portal"),qd=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Qd=Symbol.for("react.memo"),$d=Symbol.for("react.lazy"),wo=Symbol.iterator;function Vd(e){return e===null||typeof e!="object"?null:(e=wo&&e[wo]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xl=Object.assign,Zl={};function Cn(e,t,n){this.props=e,this.context=t,this.refs=Zl,this.updater=n||Kl}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ec(){}ec.prototype=Cn.prototype;function bi(e,t,n){this.props=e,this.context=t,this.refs=Zl,this.updater=n||Kl}var Si=bi.prototype=new ec;Si.constructor=bi;Xl(Si,Cn.prototype);Si.isPureReactComponent=!0;var Co=Array.isArray,tc=Object.prototype.hasOwnProperty,wi={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function rc(e,t,n){var r,s={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)tc.call(t,r)&&!nc.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:mr,type:e,key:a,ref:o,props:s,_owner:wi.current}}function Jd(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ci(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function Gd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ao=/\/+/g;function Ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gd(""+e.key):t.toString(36)}function Hr(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case mr:case Pd:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Ks(o,0):r,Co(s)?(n="",e!=null&&(n=e.replace(Ao,"$&/")+"/"),Hr(s,t,n,"",function(u){return u})):s!=null&&(Ci(s)&&(s=Jd(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ao,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Co(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+Ks(a,l);o+=Hr(a,t,n,c,s)}else if(c=Vd(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+Ks(a,l++),o+=Hr(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Lr(e,t,n){if(e==null)return e;var r=[],s=0;return Hr(e,r,"","",function(a){return t.call(n,a,s++)}),r}function Yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},zr={transition:null},Kd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:zr,ReactCurrentOwner:wi};function sc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Lr,forEach:function(e,t,n){Lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lr(e,function(){t++}),t},toArray:function(e){return Lr(e,function(t){return t})||[]},only:function(e){if(!Ci(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Cn;M.Fragment=qd;M.Profiler=Fd;M.PureComponent=bi;M.StrictMode=Bd;M.Suspense=zd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kd;M.act=sc;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xl({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=wi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)tc.call(t,c)&&!nc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mr,type:e.type,key:s,ref:a,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ud,_context:e},e.Consumer=e};M.createElement=rc;M.createFactory=function(e){var t=rc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Hd,render:e}};M.isValidElement=Ci;M.lazy=function(e){return{$$typeof:$d,_payload:{_status:-1,_result:e},_init:Yd}};M.memo=function(e,t){return{$$typeof:Qd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};M.unstable_act=sc;M.useCallback=function(e,t){return pe.current.useCallback(e,t)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return pe.current.useEffect(e,t)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return pe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.3.1";Yl.exports=M;var w=Yl.exports;const Xd=_d(w),Zd=jd({__proto__:null,default:Xd},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=w,tp=Symbol.for("react.element"),np=Symbol.for("react.fragment"),rp=Object.prototype.hasOwnProperty,sp=ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ap={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,t,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)rp.call(t,r)&&!ap.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:tp,type:e,key:a,ref:o,props:s,_owner:sp.current}}Es.Fragment=np;Es.jsx=ac;Es.jsxs=ac;Gl.exports=Es;var i=Gl.exports,ic={exports:{}},Ce={},oc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,k){var R=T.length;T.push(k);e:for(;0<R;){var V=R-1>>>1,Z=T[V];if(0<s(Z,k))T[V]=k,T[R]=Z,R=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var k=T[0],R=T.pop();if(R!==k){T[0]=R;e:for(var V=0,Z=T.length,Cr=Z>>>1;V<Cr;){var Ot=2*(V+1)-1,Ys=T[Ot],Dt=Ot+1,Ar=T[Dt];if(0>s(Ys,R))Dt<Z&&0>s(Ar,Ys)?(T[V]=Ar,T[Dt]=R,V=Dt):(T[V]=Ys,T[Ot]=R,V=Ot);else if(Dt<Z&&0>s(Ar,R))T[V]=Ar,T[Dt]=R,V=Dt;else break e}}return k}function s(T,k){var R=T.sortIndex-k.sortIndex;return R!==0?R:T.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,g=null,m=3,b=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var k=n(u);k!==null;){if(k.callback===null)r(u);else if(k.startTime<=T)r(u),k.sortIndex=k.expirationTime,t(c,k);else break;k=n(u)}}function S(T){if(y=!1,f(T),!v)if(n(c)!==null)v=!0,Js(A);else{var k=n(u);k!==null&&Gs(S,k.startTime-T)}}function A(T,k){v=!1,y&&(y=!1,p(O),O=-1),b=!0;var R=m;try{for(f(k),g=n(c);g!==null&&(!(g.expirationTime>k)||T&&!ce());){var V=g.callback;if(typeof V=="function"){g.callback=null,m=g.priorityLevel;var Z=V(g.expirationTime<=k);k=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(c)&&r(c),f(k)}else r(c);g=n(c)}if(g!==null)var Cr=!0;else{var Ot=n(u);Ot!==null&&Gs(S,Ot.startTime-k),Cr=!1}return Cr}finally{g=null,m=R,b=!1}}var L=!1,N=null,O=-1,D=5,E=-1;function ce(){return!(e.unstable_now()-E<D)}function Nt(){if(N!==null){var T=e.unstable_now();E=T;var k=!0;try{k=N(!0,T)}finally{k?Tn():(L=!1,N=null)}}else L=!1}var Tn;if(typeof d=="function")Tn=function(){d(Nt)};else if(typeof MessageChannel<"u"){var So=new MessageChannel,Md=So.port2;So.port1.onmessage=Nt,Tn=function(){Md.postMessage(null)}}else Tn=function(){x(Nt,0)};function Js(T){N=T,L||(L=!0,Tn())}function Gs(T,k){O=x(function(){T(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,Js(A))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var R=m;m=k;try{return T()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,k){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=m;m=T;try{return k()}finally{m=R}},e.unstable_scheduleCallback=function(T,k,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,T={id:h++,callback:k,priorityLevel:T,startTime:R,expirationTime:Z,sortIndex:-1},R>V?(T.sortIndex=R,t(u,T),n(c)===null&&T===n(u)&&(y?(p(O),O=-1):y=!0,Gs(S,R-V))):(T.sortIndex=Z,t(c,T),v||b||(v=!0,Js(A))),T},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(T){var k=m;return function(){var R=m;m=k;try{return T.apply(this,arguments)}finally{m=R}}}})(lc);oc.exports=lc;var ip=oc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=w,we=ip;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cc=new Set,Yn={};function zt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)cc.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lo={},Io={};function cp(e){return La.call(Io,e)?!0:La.call(Lo,e)?!1:lp.test(e)?Io[e]=!0:(Lo[e]=!0,!1)}function up(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dp(e,t,n,r){if(t===null||typeof t>"u"||up(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ai=/[\-:]([a-z])/g;function Li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ai,Li);se[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ai,Li);se[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ai,Li);se[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dp(t,n,s,r)&&(n=null),r||s===null?cp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ti=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Ni=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),pc=Symbol.for("react.offscreen"),To=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Xs;function _n(e){if(Xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xs=t&&t[1]||""}return`
`+Xs+e}var Zs=!1;function ea(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function pp(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Gt:return"Portal";case Ia:return"Profiler";case Ti:return"StrictMode";case Ta:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dc:return(e.displayName||"Context")+".Consumer";case uc:return(e._context.displayName||"Context")+".Provider";case Ei:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ni:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===Ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e){var t=hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=gp(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mc(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function Da(e,t){mc(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&ka(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function No(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ka(e,t,n){(t!=="number"||ts(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Pn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function fc(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Do(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mp=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){mp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var fp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function _a(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,cn=null,un=null;function ko(e){if(e=xr(e)){if(typeof qa!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Rs(t),qa(e.stateNode,e.type,t))}}function Sc(e){cn?un?un.push(e):un=[e]:cn=e}function wc(){if(cn){var e=cn,t=un;if(un=cn=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function Cc(e,t){return e(t)}function Ac(){}var ta=!1;function Lc(e,t,n){if(ta)return e(t,n);ta=!0;try{return Cc(e,t,n)}finally{ta=!1,(cn!==null||un!==null)&&(Ac(),wc())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=Rs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ba=!1;if(Ze)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ba=!1}function yp(e,t,n,r,s,a,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Un=!1,ns=null,rs=!1,Fa=null,xp={onError:function(e){Un=!0,ns=e}};function vp(e,t,n,r,s,a,o,l,c){Un=!1,ns=null,yp.apply(xp,arguments)}function bp(e,t,n,r,s,a,o,l,c){if(vp.apply(this,arguments),Un){if(Un){var u=ns;Un=!1,ns=null}else throw Error(C(198));rs||(rs=!0,Fa=u)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ro(e){if(Qt(e)!==e)throw Error(C(188))}function Sp(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Ro(s),e;if(a===r)return Ro(s),t;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=a;break}if(l===r){o=!0,r=s,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=s;break}if(l===r){o=!0,r=a,n=s;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Tc(e){return e=Sp(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ec(e);if(t!==null)return t;e=e.sibling}return null}var Nc=we.unstable_scheduleCallback,Mo=we.unstable_cancelCallback,wp=we.unstable_shouldYield,Cp=we.unstable_requestPaint,J=we.unstable_now,Ap=we.unstable_getCurrentPriorityLevel,Di=we.unstable_ImmediatePriority,Oc=we.unstable_UserBlockingPriority,ss=we.unstable_NormalPriority,Lp=we.unstable_LowPriority,Dc=we.unstable_IdlePriority,Ns=null,$e=null;function Ip(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ns,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Np,Tp=Math.log,Ep=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(Tp(e)/Ep|0)|0}var Nr=64,Or=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=qn(l):(a&=o,a!==0&&(r=qn(a)))}else o=n&~s,o!==0?r=qn(o):a!==0&&(r=qn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),s=1<<n,r|=e[n],t&=~s;return r}function Op(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Be(a),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=Op(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kc(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Be(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function ki(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var P=0;function Rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mc,Ri,jc,_c,Pc,Wa=!1,Dr=[],ht=null,gt=null,mt=null,Zn=new Map,er=new Map,lt=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jo(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function On(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=xr(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Mp(e,t,n,r,s){switch(t){case"focusin":return ht=On(ht,e,t,n,r,s),!0;case"dragenter":return gt=On(gt,e,t,n,r,s),!0;case"mouseover":return mt=On(mt,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Zn.set(a,On(Zn.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,er.set(a,On(er.get(a)||null,e,t,n,r,s)),!0}return!1}function qc(e){var t=Mt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ic(n),t!==null){e.blockedOn=t,Pc(e.priority,function(){jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=xr(n),t!==null&&Ri(t),e.blockedOn=n,!1;t.shift()}return!0}function _o(e,t,n){Qr(e)&&n.delete(t)}function jp(){Wa=!1,ht!==null&&Qr(ht)&&(ht=null),gt!==null&&Qr(gt)&&(gt=null),mt!==null&&Qr(mt)&&(mt=null),Zn.forEach(_o),er.forEach(_o)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,jp)))}function tr(e){function t(s){return Dn(s,e)}if(0<Dr.length){Dn(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Dn(ht,e),gt!==null&&Dn(gt,e),mt!==null&&Dn(mt,e),Zn.forEach(t),er.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&lt.shift()}var dn=st.ReactCurrentBatchConfig,is=!0;function _p(e,t,n,r){var s=P,a=dn.transition;dn.transition=null;try{P=1,Mi(e,t,n,r)}finally{P=s,dn.transition=a}}function Pp(e,t,n,r){var s=P,a=dn.transition;dn.transition=null;try{P=4,Mi(e,t,n,r)}finally{P=s,dn.transition=a}}function Mi(e,t,n,r){if(is){var s=Ha(e,t,n,r);if(s===null)pa(e,t,r,os,n),jo(e,r);else if(Mp(s,e,t,n,r))r.stopPropagation();else if(jo(e,r),t&4&&-1<Rp.indexOf(e)){for(;s!==null;){var a=xr(s);if(a!==null&&Mc(a),a=Ha(e,t,n,r),a===null&&pa(e,t,r,os,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else pa(e,t,r,null,n)}}var os=null;function Ha(e,t,n,r){if(os=null,e=Oi(r),e=Mt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ic(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return os=e,null}function Bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case Di:return 1;case Oc:return 4;case ss:case Lp:return 16;case Dc:return 536870912;default:return 16}default:return 16}}var ut=null,ji=null,$r=null;function Fc(){if($r)return $r;var e,t=ji,n=t.length,r,s="value"in ut?ut.value:ut.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return $r=s.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Po(){return!1}function Ae(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?kr:Po,this.isPropagationStopped=Po,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=Ae(An),yr=Q({},An,{view:0,detail:0}),qp=Ae(yr),ra,sa,kn,Os=Q({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(ra=e.screenX-kn.screenX,sa=e.screenY-kn.screenY):sa=ra=0,kn=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),qo=Ae(Os),Bp=Q({},Os,{dataTransfer:0}),Fp=Ae(Bp),Up=Q({},yr,{relatedTarget:0}),aa=Ae(Up),Wp=Q({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=Ae(Wp),zp=Q({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=Ae(zp),$p=Q({},An,{data:0}),Bo=Ae($p),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gp[e])?!!t[e]:!1}function Pi(){return Yp}var Kp=Q({},yr,{key:function(e){if(e.key){var t=Vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pi,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=Ae(Kp),Zp=Q({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=Ae(Zp),eh=Q({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pi}),th=Ae(eh),nh=Q({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Ae(nh),sh=Q({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ah=Ae(sh),ih=[9,13,27,32],qi=Ze&&"CompositionEvent"in window,Wn=null;Ze&&"documentMode"in document&&(Wn=document.documentMode);var oh=Ze&&"TextEvent"in window&&!Wn,Uc=Ze&&(!qi||Wn&&8<Wn&&11>=Wn),Uo=" ",Wo=!1;function Wc(e,t){switch(e){case"keyup":return ih.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function lh(e,t){switch(e){case"compositionend":return Hc(t);case"keypress":return t.which!==32?null:(Wo=!0,Uo);case"textInput":return e=t.data,e===Uo&&Wo?null:e;default:return null}}function ch(e,t){if(Kt)return e==="compositionend"||!qi&&Wc(e,t)?(e=Fc(),$r=ji=ut=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uc&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function zc(e,t,n,r){Sc(r),t=ls(t,"onChange"),0<t.length&&(n=new _i("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,nr=null;function dh(e){tu(e,0)}function Ds(e){var t=en(e);if(gc(t))return e}function ph(e,t){if(e==="change")return t}var Qc=!1;if(Ze){var ia;if(Ze){var oa="oninput"in document;if(!oa){var zo=document.createElement("div");zo.setAttribute("oninput","return;"),oa=typeof zo.oninput=="function"}ia=oa}else ia=!1;Qc=ia&&(!document.documentMode||9<document.documentMode)}function Qo(){Hn&&(Hn.detachEvent("onpropertychange",$c),nr=Hn=null)}function $c(e){if(e.propertyName==="value"&&Ds(nr)){var t=[];zc(t,nr,e,Oi(e)),Lc(dh,t)}}function hh(e,t,n){e==="focusin"?(Qo(),Hn=t,nr=n,Hn.attachEvent("onpropertychange",$c)):e==="focusout"&&Qo()}function gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ds(nr)}function mh(e,t){if(e==="click")return Ds(t)}function fh(e,t){if(e==="input"||e==="change")return Ds(t)}function yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:yh;function rr(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!La.call(t,s)||!Ue(e[s],t[s]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vo(e,t){var n=$o(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$o(n)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=ts();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ts(e.document)}return t}function Bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xh(e){var t=Jc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vc(n.ownerDocument.documentElement,n)){if(r!==null&&Bi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=Vo(n,a);var o=Vo(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vh=Ze&&"documentMode"in document&&11>=document.documentMode,Xt=null,za=null,zn=null,Qa=!1;function Jo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qa||Xt==null||Xt!==ts(r)||(r=Xt,"selectionStart"in r&&Bi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&rr(zn,r)||(zn=r,r=ls(za,"onSelect"),0<r.length&&(t=new _i("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},la={},Gc={};Ze&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function ks(e){if(la[e])return la[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gc)return la[e]=t[n];return e}var Yc=ks("animationend"),Kc=ks("animationiteration"),Xc=ks("animationstart"),Zc=ks("transitionend"),eu=new Map,Go="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){eu.set(e,t),zt(t,[e])}for(var ca=0;ca<Go.length;ca++){var ua=Go[ca],bh=ua.toLowerCase(),Sh=ua[0].toUpperCase()+ua.slice(1);Lt(bh,"on"+Sh)}Lt(Yc,"onAnimationEnd");Lt(Kc,"onAnimationIteration");Lt(Xc,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Zc,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Yo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bp(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;Yo(s,l,u),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;Yo(s,l,u),a=c}}}if(rs)throw e=Fa,rs=!1,Fa=null,e}function F(e,t){var n=t[Ya];n===void 0&&(n=t[Ya]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Mr]){e[Mr]=!0,cc.forEach(function(n){n!=="selectionchange"&&(wh.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,da("selectionchange",!1,t))}}function nu(e,t,n,r){switch(Bc(t)){case 1:var s=_p;break;case 4:s=Pp;break;default:s=Mi}n=s.bind(null,t,n,e),s=void 0,!Ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function pa(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Mt(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Lc(function(){var u=a,h=Oi(n),g=[];e:{var m=eu.get(e);if(m!==void 0){var b=_i,v=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":b=Xp;break;case"focusin":v="focus",b=aa;break;case"focusout":v="blur",b=aa;break;case"beforeblur":case"afterblur":b=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=th;break;case Yc:case Kc:case Xc:b=Hp;break;case Zc:b=rh;break;case"scroll":b=qp;break;case"wheel":b=ah;break;case"copy":case"cut":case"paste":b=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Fo}var y=(t&4)!==0,x=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var d=u,f;d!==null;){f=d;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,p!==null&&(S=Xn(d,p),S!=null&&y.push(ar(d,S,f)))),x)break;d=d.return}0<y.length&&(m=new b(m,v,null,n,h),g.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==Pa&&(v=n.relatedTarget||n.fromElement)&&(Mt(v)||v[et]))break e;if((b||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=u,v=v?Mt(v):null,v!==null&&(x=Qt(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=u),b!==v)){if(y=qo,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Fo,S="onPointerLeave",p="onPointerEnter",d="pointer"),x=b==null?m:en(b),f=v==null?m:en(v),m=new y(S,d+"leave",b,n,h),m.target=x,m.relatedTarget=f,S=null,Mt(h)===u&&(y=new y(p,d+"enter",v,n,h),y.target=f,y.relatedTarget=x,S=y),x=S,b&&v)t:{for(y=b,p=v,d=0,f=y;f;f=Jt(f))d++;for(f=0,S=p;S;S=Jt(S))f++;for(;0<d-f;)y=Jt(y),d--;for(;0<f-d;)p=Jt(p),f--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=Jt(y),p=Jt(p)}y=null}else y=null;b!==null&&Ko(g,m,b,y,!1),v!==null&&x!==null&&Ko(g,x,v,y,!0)}}e:{if(m=u?en(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var A=ph;else if(Ho(m))if(Qc)A=fh;else{A=gh;var L=hh}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=mh);if(A&&(A=A(e,u))){zc(g,A,n,h);break e}L&&L(e,m,u),e==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&ka(m,"number",m.value)}switch(L=u?en(u):window,e){case"focusin":(Ho(L)||L.contentEditable==="true")&&(Xt=L,za=u,zn=null);break;case"focusout":zn=za=Xt=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,Jo(g,n,h);break;case"selectionchange":if(vh)break;case"keydown":case"keyup":Jo(g,n,h)}var N;if(qi)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Kt?Wc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Uc&&n.locale!=="ko"&&(Kt||O!=="onCompositionStart"?O==="onCompositionEnd"&&Kt&&(N=Fc()):(ut=h,ji="value"in ut?ut.value:ut.textContent,Kt=!0)),L=ls(u,O),0<L.length&&(O=new Bo(O,e,null,n,h),g.push({event:O,listeners:L}),N?O.data=N:(N=Hc(n),N!==null&&(O.data=N)))),(N=oh?lh(e,n):ch(e,n))&&(u=ls(u,"onBeforeInput"),0<u.length&&(h=new Bo("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:u}),h.data=N))}tu(g,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ls(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Xn(e,n),a!=null&&r.unshift(ar(e,a,s)),a=Xn(e,t),a!=null&&r.push(ar(e,a,s))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ko(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Xn(n,a),c!=null&&o.unshift(ar(n,c,l))):s||(c=Xn(n,a),c!=null&&o.push(ar(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ch=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function Xo(e){return(typeof e=="string"?e:""+e).replace(Ch,`
`).replace(Ah,"")}function jr(e,t,n){if(t=Xo(t),Xo(e)!==t&&n)throw Error(C(425))}function cs(){}var $a=null,Va=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ga=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,Zo=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Zo<"u"?function(e){return Zo.resolve(null).then(e).catch(Th)}:Ga;function Th(e){setTimeout(function(){throw e})}function ha(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);tr(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function el(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),ze="__reactFiber$"+Ln,ir="__reactProps$"+Ln,et="__reactContainer$"+Ln,Ya="__reactEvents$"+Ln,Eh="__reactListeners$"+Ln,Nh="__reactHandles$"+Ln;function Mt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=el(e);e!==null;){if(n=e[ze])return n;e=el(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[ze]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Rs(e){return e[ir]||null}var Ka=[],tn=-1;function It(e){return{current:e}}function U(e){0>tn||(e.current=Ka[tn],Ka[tn]=null,tn--)}function q(e,t){tn++,Ka[tn]=e.current,e.current=t}var At={},le=It(At),fe=It(!1),Bt=At;function mn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function us(){U(fe),U(le)}function tl(e,t,n){if(le.current!==At)throw Error(C(168));q(le,t),q(fe,n)}function ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(C(108,hp(e)||"Unknown",s));return Q({},n,r)}function ds(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Bt=le.current,q(le,e),q(fe,fe.current),!0}function nl(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=ru(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,U(fe),U(le),q(le,e)):U(fe),q(fe,n)}var Ge=null,Ms=!1,ga=!1;function su(e){Ge===null?Ge=[e]:Ge.push(e)}function Oh(e){Ms=!0,su(e)}function Tt(){if(!ga&&Ge!==null){ga=!0;var e=0,t=P;try{var n=Ge;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Ms=!1}catch(s){throw Ge!==null&&(Ge=Ge.slice(e+1)),Nc(Di,Tt),s}finally{P=t,ga=!1}}return null}var nn=[],rn=0,ps=null,hs=0,Le=[],Ie=0,Ft=null,Ye=1,Ke="";function kt(e,t){nn[rn++]=hs,nn[rn++]=ps,ps=e,hs=t}function au(e,t,n){Le[Ie++]=Ye,Le[Ie++]=Ke,Le[Ie++]=Ft,Ft=e;var r=Ye;e=Ke;var s=32-Be(r)-1;r&=~(1<<s),n+=1;var a=32-Be(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ye=1<<32-Be(t)+s|n<<s|r,Ke=a+e}else Ye=1<<a|n<<s|r,Ke=e}function Fi(e){e.return!==null&&(kt(e,1),au(e,1,0))}function Ui(e){for(;e===ps;)ps=nn[--rn],nn[rn]=null,hs=nn[--rn],nn[rn]=null;for(;e===Ft;)Ft=Le[--Ie],Le[Ie]=null,Ke=Le[--Ie],Le[Ie]=null,Ye=Le[--Ie],Le[Ie]=null}var Se=null,be=null,W=!1,Pe=null;function iu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,be=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Ye,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,be=null,!0):!1;default:return!1}}function Xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(W){var t=be;if(t){var n=t;if(!rl(e,t)){if(Xa(e))throw Error(C(418));t=ft(n.nextSibling);var r=Se;t&&rl(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,W=!1,Se=e)}}else{if(Xa(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,Se=e}}}function sl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function _r(e){if(e!==Se)return!1;if(!W)return sl(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=be)){if(Xa(e))throw ou(),Error(C(418));for(;t;)iu(e,t),t=ft(t.nextSibling)}if(sl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Se?ft(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=be;e;)e=ft(e.nextSibling)}function fn(){be=Se=null,W=!1}function Wi(e){Pe===null?Pe=[e]:Pe.push(e)}var Dh=st.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Pr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function al(e){var t=e._init;return t(e._payload)}function lu(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function s(p,d){return p=bt(p,d),p.index=0,p.sibling=null,p}function a(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,S){return d===null||d.tag!==6?(d=Sa(f,p.mode,S),d.return=p,d):(d=s(d,f),d.return=p,d)}function c(p,d,f,S){var A=f.type;return A===Yt?h(p,d,f.props.children,S,f.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===it&&al(A)===d.type)?(S=s(d,f.props),S.ref=Rn(p,d,f),S.return=p,S):(S=es(f.type,f.key,f.props,null,p.mode,S),S.ref=Rn(p,d,f),S.return=p,S)}function u(p,d,f,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=wa(f,p.mode,S),d.return=p,d):(d=s(d,f.children||[]),d.return=p,d)}function h(p,d,f,S,A){return d===null||d.tag!==7?(d=qt(f,p.mode,S,A),d.return=p,d):(d=s(d,f),d.return=p,d)}function g(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Sa(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ir:return f=es(d.type,d.key,d.props,null,p.mode,f),f.ref=Rn(p,null,d),f.return=p,f;case Gt:return d=wa(d,p.mode,f),d.return=p,d;case it:var S=d._init;return g(p,S(d._payload),f)}if(Pn(d)||En(d))return d=qt(d,p.mode,f,null),d.return=p,d;Pr(p,d)}return null}function m(p,d,f,S){var A=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return A!==null?null:l(p,d,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ir:return f.key===A?c(p,d,f,S):null;case Gt:return f.key===A?u(p,d,f,S):null;case it:return A=f._init,m(p,d,A(f._payload),S)}if(Pn(f)||En(f))return A!==null?null:h(p,d,f,S,null);Pr(p,f)}return null}function b(p,d,f,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(f)||null,l(d,p,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ir:return p=p.get(S.key===null?f:S.key)||null,c(d,p,S,A);case Gt:return p=p.get(S.key===null?f:S.key)||null,u(d,p,S,A);case it:var L=S._init;return b(p,d,f,L(S._payload),A)}if(Pn(S)||En(S))return p=p.get(f)||null,h(d,p,S,A,null);Pr(d,S)}return null}function v(p,d,f,S){for(var A=null,L=null,N=d,O=d=0,D=null;N!==null&&O<f.length;O++){N.index>O?(D=N,N=null):D=N.sibling;var E=m(p,N,f[O],S);if(E===null){N===null&&(N=D);break}e&&N&&E.alternate===null&&t(p,N),d=a(E,d,O),L===null?A=E:L.sibling=E,L=E,N=D}if(O===f.length)return n(p,N),W&&kt(p,O),A;if(N===null){for(;O<f.length;O++)N=g(p,f[O],S),N!==null&&(d=a(N,d,O),L===null?A=N:L.sibling=N,L=N);return W&&kt(p,O),A}for(N=r(p,N);O<f.length;O++)D=b(N,p,O,f[O],S),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?O:D.key),d=a(D,d,O),L===null?A=D:L.sibling=D,L=D);return e&&N.forEach(function(ce){return t(p,ce)}),W&&kt(p,O),A}function y(p,d,f,S){var A=En(f);if(typeof A!="function")throw Error(C(150));if(f=A.call(f),f==null)throw Error(C(151));for(var L=A=null,N=d,O=d=0,D=null,E=f.next();N!==null&&!E.done;O++,E=f.next()){N.index>O?(D=N,N=null):D=N.sibling;var ce=m(p,N,E.value,S);if(ce===null){N===null&&(N=D);break}e&&N&&ce.alternate===null&&t(p,N),d=a(ce,d,O),L===null?A=ce:L.sibling=ce,L=ce,N=D}if(E.done)return n(p,N),W&&kt(p,O),A;if(N===null){for(;!E.done;O++,E=f.next())E=g(p,E.value,S),E!==null&&(d=a(E,d,O),L===null?A=E:L.sibling=E,L=E);return W&&kt(p,O),A}for(N=r(p,N);!E.done;O++,E=f.next())E=b(N,p,O,E.value,S),E!==null&&(e&&E.alternate!==null&&N.delete(E.key===null?O:E.key),d=a(E,d,O),L===null?A=E:L.sibling=E,L=E);return e&&N.forEach(function(Nt){return t(p,Nt)}),W&&kt(p,O),A}function x(p,d,f,S){if(typeof f=="object"&&f!==null&&f.type===Yt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ir:e:{for(var A=f.key,L=d;L!==null;){if(L.key===A){if(A=f.type,A===Yt){if(L.tag===7){n(p,L.sibling),d=s(L,f.props.children),d.return=p,p=d;break e}}else if(L.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===it&&al(A)===L.type){n(p,L.sibling),d=s(L,f.props),d.ref=Rn(p,L,f),d.return=p,p=d;break e}n(p,L);break}else t(p,L);L=L.sibling}f.type===Yt?(d=qt(f.props.children,p.mode,S,f.key),d.return=p,p=d):(S=es(f.type,f.key,f.props,null,p.mode,S),S.ref=Rn(p,d,f),S.return=p,p=S)}return o(p);case Gt:e:{for(L=f.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=s(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=wa(f,p.mode,S),d.return=p,p=d}return o(p);case it:return L=f._init,x(p,d,L(f._payload),S)}if(Pn(f))return v(p,d,f,S);if(En(f))return y(p,d,f,S);Pr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=s(d,f),d.return=p,p=d):(n(p,d),d=Sa(f,p.mode,S),d.return=p,p=d),o(p)):n(p,d)}return x}var yn=lu(!0),cu=lu(!1),gs=It(null),ms=null,sn=null,Hi=null;function zi(){Hi=sn=ms=null}function Qi(e){var t=gs.current;U(gs),e._currentValue=t}function ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){ms=e,Hi=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(Hi!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(ms===null)throw Error(C(308));sn=e,ms.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var jt=null;function $i(e){jt===null?jt=[e]:jt.push(e)}function uu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,$i(t)):(n.next=s.next,s.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,tt(e,n)}return s=r.interleaved,s===null?(t.next=t,$i(r)):(t.next=s.next,s.next=t),r.interleaved=t,tt(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ki(e,n)}}function il(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fs(e,t,n,r){var s=e.updateQueue;ot=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(a!==null){var g=s.baseState;o=0,h=u=c=null,l=a;do{var m=l.lane,b=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(m=t,b=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){g=v.call(b,g,m);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,m=typeof v=="function"?v.call(b,g,m):v,m==null)break e;g=Q({},g,m);break e;case 2:ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=b,c=g):h=h.next=b,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(c=g),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Wt|=o,e.lanes=o,e.memoizedState=g}}function ol(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(C(191,s));s.call(r)}}}var vr={},Ve=It(vr),or=It(vr),lr=It(vr);function _t(e){if(e===vr)throw Error(C(174));return e}function Ji(e,t){switch(q(lr,t),q(or,e),q(Ve,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}U(Ve),q(Ve,t)}function xn(){U(Ve),U(or),U(lr)}function pu(e){_t(lr.current);var t=_t(Ve.current),n=Ma(t,e.type);t!==n&&(q(or,e),q(Ve,n))}function Gi(e){or.current===e&&(U(Ve),U(or))}var H=It(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Yi(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var Gr=st.ReactCurrentDispatcher,fa=st.ReactCurrentBatchConfig,Ut=0,z=null,K=null,ee=null,xs=!1,Qn=!1,cr=0,kh=0;function ae(){throw Error(C(321))}function Ki(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Xi(e,t,n,r,s,a){if(Ut=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?_h:Ph,e=n(r,s),Qn){a=0;do{if(Qn=!1,cr=0,25<=a)throw Error(C(301));a+=1,ee=K=null,t.updateQueue=null,Gr.current=qh,e=n(r,s)}while(Qn)}if(Gr.current=vs,t=K!==null&&K.next!==null,Ut=0,ee=K=z=null,xs=!1,t)throw Error(C(300));return e}function Zi(){var e=cr!==0;return cr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?z.memoizedState=ee=e:ee=ee.next=e,ee}function De(){if(K===null){var e=z.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?z.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(C(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?z.memoizedState=ee=e:ee=ee.next=e}return ee}function ur(e,t){return typeof t=="function"?t(e):t}function ya(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=K,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var l=o=null,c=null,u=a;do{var h=u.lane;if((Ut&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=g,o=r):c=c.next=g,z.lanes|=h,Wt|=h}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=l,Ue(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,z.lanes|=a,Wt|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xa(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Ue(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function hu(){}function gu(e,t){var n=z,r=De(),s=t(),a=!Ue(r.memoizedState,s);if(a&&(r.memoizedState=s,me=!0),r=r.queue,eo(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,dr(9,fu.bind(null,n,r,s,t),void 0,null),te===null)throw Error(C(349));Ut&30||mu(n,t,s)}return s}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t={lastEffect:null,stores:null},z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,xu(t)&&vu(e)}function yu(e,t,n){return n(function(){xu(t)&&vu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function vu(e){var t=tt(e,1);t!==null&&Fe(t,e,1,-1)}function ll(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=jh.bind(null,z,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=z.updateQueue,t===null?(t={lastEffect:null,stores:null},z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bu(){return De().memoizedState}function Yr(e,t,n,r){var s=He();z.flags|=e,s.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function js(e,t,n,r){var s=De();r=r===void 0?null:r;var a=void 0;if(K!==null){var o=K.memoizedState;if(a=o.destroy,r!==null&&Ki(r,o.deps)){s.memoizedState=dr(t,n,a,r);return}}z.flags|=e,s.memoizedState=dr(1|t,n,a,r)}function cl(e,t){return Yr(8390656,8,e,t)}function eo(e,t){return js(2048,8,e,t)}function Su(e,t){return js(4,2,e,t)}function wu(e,t){return js(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Au(e,t,n){return n=n!=null?n.concat([e]):null,js(4,4,Cu.bind(null,t,e),n)}function to(){}function Lu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ki(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Iu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ki(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return Ut&21?(Ue(n,t)||(n=kc(),z.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Rh(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=fa.transition;fa.transition={};try{e(!1),t()}finally{P=n,fa.transition=r}}function Eu(){return De().memoizedState}function Mh(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nu(e))Ou(t,n);else if(n=uu(e,t,n,r),n!==null){var s=de();Fe(n,e,r,s),Du(n,t,r)}}function jh(e,t,n){var r=vt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Ou(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(s.hasEagerState=!0,s.eagerState=l,Ue(l,o)){var c=t.interleaved;c===null?(s.next=s,$i(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=uu(e,t,s,r),n!==null&&(s=de(),Fe(n,e,r,s),Du(n,t,r))}}function Nu(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ou(e,t){Qn=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ki(e,n)}}var vs={readContext:Oe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},_h={readContext:Oe,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:cl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yr(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mh.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:ll,useDebugValue:to,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=ll(!1),t=e[0];return e=Rh.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=z,s=He();if(W){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),te===null)throw Error(C(349));Ut&30||mu(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,cl(yu.bind(null,r,a,e),[e]),r.flags|=2048,dr(9,fu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(W){var n=Ke,r=Ye;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ph={readContext:Oe,useCallback:Lu,useContext:Oe,useEffect:eo,useImperativeHandle:Au,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:Iu,useReducer:ya,useRef:bu,useState:function(){return ya(ur)},useDebugValue:to,useDeferredValue:function(e){var t=De();return Tu(t,K.memoizedState,e)},useTransition:function(){var e=ya(ur)[0],t=De().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:gu,useId:Eu,unstable_isNewReconciler:!1},qh={readContext:Oe,useCallback:Lu,useContext:Oe,useEffect:eo,useImperativeHandle:Au,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:Iu,useReducer:xa,useRef:bu,useState:function(){return xa(ur)},useDebugValue:to,useDeferredValue:function(e){var t=De();return K===null?t.memoizedState=e:Tu(t,K.memoizedState,e)},useTransition:function(){var e=xa(ur)[0],t=De().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:gu,useId:Eu,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),s=vt(e),a=Xe(r,s);a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,s),t!==null&&(Fe(t,e,s,r),Jr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),s=vt(e),a=Xe(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,s),t!==null&&(Fe(t,e,s,r),Jr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=vt(e),s=Xe(n,r);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,r),t!==null&&(Fe(t,e,r,n),Jr(t,e,r))}};function ul(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(s,a):!0}function ku(e,t,n){var r=!1,s=At,a=t.contextType;return typeof a=="object"&&a!==null?a=Oe(a):(s=ye(t)?Bt:le.current,r=t.contextTypes,a=(r=r!=null)?mn(e,s):At),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function dl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function ni(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Vi(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Oe(a):(a=ye(t)?Bt:le.current,s.context=mn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ti(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&_s.enqueueReplaceState(s,s.state,null),fs(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=pp(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bh=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ss||(Ss=!0,hi=r),ri(e,t)},n}function Mu(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ri(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ri(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function pl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bh;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Zh.bind(null,e,t,n),t.then(e,e))}function hl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Fh=st.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?cu(t,null,n,r):yn(t,e.child,n,r)}function ml(e,t,n,r,s){n=n.render;var a=t.ref;return pn(t,s),r=Xi(e,t,n,r,a,s),n=Zi(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,nt(e,t,s)):(W&&n&&Fi(t),t.flags|=1,ue(e,t,r,s),t.child)}function fl(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!co(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ju(e,t,a,r,s)):(e=es(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(o,r)&&e.ref===t.ref)return nt(e,t,s)}return t.flags|=1,e=bt(a,r),e.ref=t.ref,e.return=t,t.child=e}function ju(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(rr(a,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,nt(e,t,s)}return si(e,t,n,r,s)}function _u(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(on,ve),ve|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(on,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,q(on,ve),ve|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,q(on,ve),ve|=r;return ue(e,t,s,n),t.child}function Pu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function si(e,t,n,r,s){var a=ye(n)?Bt:le.current;return a=mn(t,a),pn(t,s),n=Xi(e,t,n,r,a,s),r=Zi(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,nt(e,t,s)):(W&&r&&Fi(t),t.flags|=1,ue(e,t,n,s),t.child)}function yl(e,t,n,r,s){if(ye(n)){var a=!0;ds(t)}else a=!1;if(pn(t,s),t.stateNode===null)Kr(e,t),ku(t,n,r),ni(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ye(n)?Bt:le.current,u=mn(t,u));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&dl(t,o,r,u),ot=!1;var m=t.memoizedState;o.state=m,fs(t,r,o,s),c=t.memoizedState,l!==r||m!==c||fe.current||ot?(typeof h=="function"&&(ti(t,n,h,r),c=t.memoizedState),(l=ot||ul(t,n,l,r,m,c,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,du(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:je(t.type,l),o.props=u,g=t.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Oe(c):(c=ye(n)?Bt:le.current,c=mn(t,c));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==c)&&dl(t,o,r,c),ot=!1,m=t.memoizedState,o.state=m,fs(t,r,o,s);var v=t.memoizedState;l!==g||m!==v||fe.current||ot?(typeof b=="function"&&(ti(t,n,b,r),v=t.memoizedState),(u=ot||ul(t,n,u,r,m,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ai(e,t,n,r,a,s)}function ai(e,t,n,r,s,a){Pu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&nl(t,n,!1),nt(e,t,a);r=t.stateNode,Fh.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=yn(t,e.child,null,a),t.child=yn(t,null,l,a)):ue(e,t,l,a),t.memoizedState=r.state,s&&nl(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tl(e,t.context,!1),Ji(e,t.containerInfo)}function xl(e,t,n,r,s){return fn(),Wi(s),t.flags|=256,ue(e,t,n,r),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0};function oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,n){var r=t.pendingProps,s=H.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),q(H,s&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Bs(o,r,0,null),e=qt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=oi(n),t.memoizedState=ii,e):no(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Uh(e,t,o,r,l,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=bt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=bt(l,a):(a=qt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?oi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ii,r}return a=e.child,e=a.sibling,r=bt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function no(e,t){return t=Bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qr(e,t,n,r){return r!==null&&Wi(r),yn(t,e.child,null,n),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uh(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(C(422))),qr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=Bs({mode:"visible",children:r.children},s,0,null),a=qt(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&yn(t,e.child,null,o),t.child.memoizedState=oi(o),t.memoizedState=ii,a);if(!(t.mode&1))return qr(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(C(419)),r=va(a,r,void 0),qr(e,t,o,r)}if(l=(o&e.childLanes)!==0,me||l){if(r=te,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,tt(e,s),Fe(r,e,s,-1))}return lo(),r=va(Error(C(421))),qr(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=eg.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,be=ft(s.nextSibling),Se=t,W=!0,Pe=null,e!==null&&(Le[Ie++]=Ye,Le[Ie++]=Ke,Le[Ie++]=Ft,Ye=e.id,Ke=e.overflow,Ft=t),t=no(t,r.children),t.flags|=4096,t)}function vl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ei(e.return,t,n)}function ba(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Fu(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(ue(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vl(e,n,t);else if(e.tag===19)vl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(H,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ba(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ys(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ba(t,!0,n,null,a);break;case"together":ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wh(e,t,n){switch(t.tag){case 3:qu(t),fn();break;case 5:pu(t);break;case 1:ye(t.type)&&ds(t);break;case 4:Ji(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;q(gs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Bu(e,t,n):(q(H,H.current&1),e=nt(e,t,n),e!==null?e.sibling:null);q(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),q(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,_u(e,t,n)}return nt(e,t,n)}var Uu,li,Wu,Hu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};li=function(){};Wu=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,_t(Ve.current);var a=null;switch(n){case"input":s=Oa(e,s),r=Oa(e,r),a=[];break;case"select":s=Q({},s,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":s=Ra(e,s),r=Ra(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cs)}ja(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&F("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hh(e,t,n){var r=t.pendingProps;switch(Ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ye(t.type)&&us(),ie(t),null;case 3:return r=t.stateNode,xn(),U(fe),U(le),Yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pe!==null&&(fi(Pe),Pe=null))),li(e,t),ie(t),null;case 5:Gi(t);var s=_t(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ie(t),null}if(e=_t(Ve.current),_r(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ze]=t,r[ir]=a,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(s=0;s<Bn.length;s++)F(Bn[s],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Eo(r,a),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},F("invalid",r);break;case"textarea":Oo(r,a),F("invalid",r)}ja(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&jr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&jr(r.textContent,l,e),s=["children",""+l]):Yn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":Tr(r),No(r,a,!0);break;case"textarea":Tr(r),Do(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=cs)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ze]=t,e[ir]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(o=_a(n,r),n){case"dialog":F("cancel",e),F("close",e),s=r;break;case"iframe":case"object":case"embed":F("load",e),s=r;break;case"video":case"audio":for(s=0;s<Bn.length;s++)F(Bn[s],e);s=r;break;case"source":F("error",e),s=r;break;case"img":case"image":case"link":F("error",e),F("load",e),s=r;break;case"details":F("toggle",e),s=r;break;case"input":Eo(e,r),s=Oa(e,r),F("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Q({},r,{value:void 0}),F("invalid",e);break;case"textarea":Oo(e,r),s=Ra(e,r),F("invalid",e);break;default:s=r}ja(n,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?bc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&xc(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Kn(e,c):typeof c=="number"&&Kn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Yn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&F("scroll",e):c!=null&&Ii(e,a,c,o))}switch(n){case"input":Tr(e),No(e,r,!1);break;case"textarea":Tr(e),Do(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ln(e,!!r.multiple,a,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=_t(lr.current),_t(Ve.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[ze]=t,(a=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ze]=t,t.stateNode=r}return ie(t),null;case 13:if(U(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&be!==null&&t.mode&1&&!(t.flags&128))ou(),fn(),t.flags|=98560,a=!1;else if(a=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[ze]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),a=!1}else Pe!==null&&(fi(Pe),Pe=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?X===0&&(X=3):lo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return xn(),li(e,t),e===null&&sr(t.stateNode.containerInfo),ie(t),null;case 10:return Qi(t.type._context),ie(t),null;case 17:return ye(t.type)&&us(),ie(t),null;case 19:if(U(H),a=t.memoizedState,a===null)return ie(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Mn(a,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ys(e),o!==null){for(t.flags|=128,Mn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(H,H.current&1|2),t.child}e=e.sibling}a.tail!==null&&J()>bn&&(t.flags|=128,r=!0,Mn(a,!1),t.lanes=4194304)}else{if(!r)if(e=ys(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!W)return ie(t),null}else 2*J()-a.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=J(),t.sibling=null,n=H.current,q(H,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return oo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function zh(e,t){switch(Ui(t),t.tag){case 1:return ye(t.type)&&us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),U(fe),U(le),Yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gi(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return xn(),null;case 10:return Qi(t.type._context),null;case 22:case 23:return oo(),null;case 24:return null;default:return null}}var Br=!1,oe=!1,Qh=typeof WeakSet=="function"?WeakSet:Set,I=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function ci(e,t,n){try{n()}catch(r){$(e,t,r)}}var bl=!1;function $h(e,t){if($a=is,e=Jc(),Bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,h=0,g=e,m=null;t:for(;;){for(var b;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==a||r!==0&&g.nodeType!==3||(c=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(b=g.firstChild)!==null;)m=g,g=b;for(;;){if(g===e)break t;if(m===n&&++u===s&&(l=o),m===a&&++h===r&&(c=o),(b=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=b}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Va={focusedElem:e,selectionRange:n},is=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:je(t.type,y),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){$(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=bl,bl=!1,v}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ci(t,n,a)}s=s.next}while(s!==r)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zu(e){var t=e.alternate;t!==null&&(e.alternate=null,zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[ir],delete t[Ya],delete t[Eh],delete t[Nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Sl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cs));else if(r!==4&&(e=e.child,e!==null))for(di(e,t,n),e=e.sibling;e!==null;)di(e,t,n),e=e.sibling}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}var ne=null,_e=!1;function at(e,t,n){for(n=n.child;n!==null;)$u(e,t,n),n=n.sibling}function $u(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ns,n)}catch{}switch(n.tag){case 5:oe||an(n,t);case 6:var r=ne,s=_e;ne=null,at(e,t,n),ne=r,_e=s,ne!==null&&(_e?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(_e?(e=ne,n=n.stateNode,e.nodeType===8?ha(e.parentNode,n):e.nodeType===1&&ha(e,n),tr(e)):ha(ne,n.stateNode));break;case 4:r=ne,s=_e,ne=n.stateNode.containerInfo,_e=!0,at(e,t,n),ne=r,_e=s;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ci(n,t,o),s=s.next}while(s!==r)}at(e,t,n);break;case 1:if(!oe&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$(n,t,l)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,at(e,t,n),oe=r):at(e,t,n);break;default:at(e,t,n)}}function wl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qh),t.forEach(function(r){var s=tg.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,_e=!1;break e;case 3:ne=l.stateNode.containerInfo,_e=!0;break e;case 4:ne=l.stateNode.containerInfo,_e=!0;break e}l=l.return}if(ne===null)throw Error(C(160));$u(a,o,s),ne=null,_e=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){$(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),We(e),r&4){try{$n(3,e,e.return),Ps(3,e)}catch(y){$(e,e.return,y)}try{$n(5,e,e.return)}catch(y){$(e,e.return,y)}}break;case 1:Re(t,e),We(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Re(t,e),We(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var s=e.stateNode;try{Kn(s,"")}catch(y){$(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&mc(s,a),_a(l,o);var u=_a(l,a);for(o=0;o<c.length;o+=2){var h=c[o],g=c[o+1];h==="style"?bc(s,g):h==="dangerouslySetInnerHTML"?xc(s,g):h==="children"?Kn(s,g):Ii(s,h,g,u)}switch(l){case"input":Da(s,a);break;case"textarea":fc(s,a);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?ln(s,!!a.multiple,b,!1):m!==!!a.multiple&&(a.defaultValue!=null?ln(s,!!a.multiple,a.defaultValue,!0):ln(s,!!a.multiple,a.multiple?[]:"",!1))}s[ir]=a}catch(y){$(e,e.return,y)}}break;case 6:if(Re(t,e),We(e),r&4){if(e.stateNode===null)throw Error(C(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(y){$(e,e.return,y)}}break;case 3:if(Re(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(y){$(e,e.return,y)}break;case 4:Re(t,e),We(e);break;case 13:Re(t,e),We(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ao=J())),r&4&&wl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,Re(t,e),oe=u):Re(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(g=I=h;I!==null;){switch(m=I,b=m.child,m.tag){case 0:case 11:case 14:case 15:$n(4,m,m.return);break;case 1:an(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){$(r,n,y)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){Al(g);continue}}b!==null?(b.return=m,I=b):Al(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{s=g.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=vc("display",o))}catch(y){$(e,e.return,y)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(y){$(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),We(e),r&4&&wl(e);break;case 21:break;default:Re(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Kn(s,""),r.flags&=-33);var a=Sl(e);pi(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sl(e);di(e,l,o);break;default:throw Error(C(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vh(e,t,n){I=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var s=I,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Br;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||oe;l=Br;var u=oe;if(Br=o,(oe=c)&&!u)for(I=s;I!==null;)o=I,c=o.child,o.tag===22&&o.memoizedState!==null?Ll(s):c!==null?(c.return=o,I=c):Ll(s);for(;a!==null;)I=a,Ju(a),a=a.sibling;I=s,Br=l,oe=u}Cl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,I=a):Cl(e)}}function Cl(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ol(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ol(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&tr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}oe||t.flags&512&&ui(t)}catch(m){$(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Al(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Ll(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ps(4,t)}catch(c){$(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){$(t,s,c)}}var a=t.return;try{ui(t)}catch(c){$(t,a,c)}break;case 5:var o=t.return;try{ui(t)}catch(c){$(t,o,c)}}}catch(c){$(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Jh=Math.ceil,bs=st.ReactCurrentDispatcher,ro=st.ReactCurrentOwner,Ee=st.ReactCurrentBatchConfig,_=0,te=null,G=null,re=0,ve=0,on=It(0),X=0,pr=null,Wt=0,qs=0,so=0,Vn=null,ge=null,ao=0,bn=1/0,Je=null,Ss=!1,hi=null,xt=null,Fr=!1,dt=null,ws=0,Jn=0,gi=null,Xr=-1,Zr=0;function de(){return _&6?J():Xr!==-1?Xr:Xr=J()}function vt(e){return e.mode&1?_&2&&re!==0?re&-re:Dh.transition!==null?(Zr===0&&(Zr=kc()),Zr):(e=P,e!==0||(e=window.event,e=e===void 0?16:Bc(e.type)),e):1}function Fe(e,t,n,r){if(50<Jn)throw Jn=0,gi=null,Error(C(185));fr(e,n,r),(!(_&2)||e!==te)&&(e===te&&(!(_&2)&&(qs|=n),X===4&&ct(e,re)),xe(e,r),n===1&&_===0&&!(t.mode&1)&&(bn=J()+500,Ms&&Tt()))}function xe(e,t){var n=e.callbackNode;Dp(e,t);var r=as(e,e===te?re:0);if(r===0)n!==null&&Mo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mo(n),t===1)e.tag===0?Oh(Il.bind(null,e)):su(Il.bind(null,e)),Ih(function(){!(_&6)&&Tt()}),n=null;else{switch(Rc(r)){case 1:n=Di;break;case 4:n=Oc;break;case 16:n=ss;break;case 536870912:n=Dc;break;default:n=ss}n=nd(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(Xr=-1,Zr=0,_&6)throw Error(C(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=as(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cs(e,r);else{t=r;var s=_;_|=2;var a=Ku();(te!==e||re!==t)&&(Je=null,bn=J()+500,Pt(e,t));do try{Kh();break}catch(l){Yu(e,l)}while(!0);zi(),bs.current=a,_=s,G!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(s=Ua(e),s!==0&&(r=s,t=mi(e,s))),t===1)throw n=pr,Pt(e,0),ct(e,r),xe(e,J()),n;if(t===6)ct(e,r);else{if(s=e.current.alternate,!(r&30)&&!Gh(s)&&(t=Cs(e,r),t===2&&(a=Ua(e),a!==0&&(r=a,t=mi(e,a))),t===1))throw n=pr,Pt(e,0),ct(e,r),xe(e,J()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Rt(e,ge,Je);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=ao+500-J(),10<t)){if(as(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ga(Rt.bind(null,e,ge,Je),t);break}Rt(e,ge,Je);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Be(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jh(r/1960))-r,10<r){e.timeoutHandle=Ga(Rt.bind(null,e,ge,Je),r);break}Rt(e,ge,Je);break;case 5:Rt(e,ge,Je);break;default:throw Error(C(329))}}}return xe(e,J()),e.callbackNode===n?Gu.bind(null,e):null}function mi(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=ge,ge=n,t!==null&&fi(t)),e}function fi(e){ge===null?ge=e:ge.push.apply(ge,e)}function Gh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Ue(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~so,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Il(e){if(_&6)throw Error(C(327));hn();var t=as(e,0);if(!(t&1))return xe(e,J()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var r=Ua(e);r!==0&&(t=r,n=mi(e,r))}if(n===1)throw n=pr,Pt(e,0),ct(e,t),xe(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,ge,Je),xe(e,J()),null}function io(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(bn=J()+500,Ms&&Tt())}}function Ht(e){dt!==null&&dt.tag===0&&!(_&6)&&hn();var t=_;_|=1;var n=Ee.transition,r=P;try{if(Ee.transition=null,P=1,e)return e()}finally{P=r,Ee.transition=n,_=t,!(_&6)&&Tt()}}function oo(){ve=on.current,U(on)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lh(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&us();break;case 3:xn(),U(fe),U(le),Yi();break;case 5:Gi(r);break;case 4:xn();break;case 13:U(H);break;case 19:U(H);break;case 10:Qi(r.type._context);break;case 22:case 23:oo()}n=n.return}if(te=e,G=e=bt(e.current,null),re=ve=t,X=0,pr=null,so=qs=Wt=0,ge=Vn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}jt=null}return e}function Yu(e,t){do{var n=G;try{if(zi(),Gr.current=vs,xs){for(var r=z.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xs=!1}if(Ut=0,ee=K=z=null,Qn=!1,cr=0,ro.current=null,n===null||n.return===null){X=1,pr=t,G=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=hl(o);if(b!==null){b.flags&=-257,gl(b,o,l,a,t),b.mode&1&&pl(a,u,t),t=b,c=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(c),t.updateQueue=y}else v.add(c);break e}else{if(!(t&1)){pl(a,u,t),lo();break e}c=Error(C(426))}}else if(W&&l.mode&1){var x=hl(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),gl(x,o,l,a,t),Wi(vn(c,l));break e}}a=c=vn(c,l),X!==4&&(X=2),Vn===null?Vn=[a]:Vn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Ru(a,c,t);il(a,p);break e;case 1:l=c;var d=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xt===null||!xt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Mu(a,l,t);il(a,S);break e}}a=a.return}while(a!==null)}Zu(n)}catch(A){t=A,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Ku(){var e=bs.current;return bs.current=vs,e===null?vs:e}function lo(){(X===0||X===3||X===2)&&(X=4),te===null||!(Wt&268435455)&&!(qs&268435455)||ct(te,re)}function Cs(e,t){var n=_;_|=2;var r=Ku();(te!==e||re!==t)&&(Je=null,Pt(e,t));do try{Yh();break}catch(s){Yu(e,s)}while(!0);if(zi(),_=n,bs.current=r,G!==null)throw Error(C(261));return te=null,re=0,X}function Yh(){for(;G!==null;)Xu(G)}function Kh(){for(;G!==null&&!wp();)Xu(G)}function Xu(e){var t=td(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Zu(e):G=t,ro.current=null}function Zu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zh(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,G=null;return}}else if(n=Hh(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);X===0&&(X=5)}function Rt(e,t,n){var r=P,s=Ee.transition;try{Ee.transition=null,P=1,Xh(e,t,n,r)}finally{Ee.transition=s,P=r}return null}function Xh(e,t,n,r){do hn();while(dt!==null);if(_&6)throw Error(C(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(kp(e,a),e===te&&(G=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fr||(Fr=!0,nd(ss,function(){return hn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ee.transition,Ee.transition=null;var o=P;P=1;var l=_;_|=4,ro.current=null,$h(e,n),Vu(n,e),xh(Va),is=!!$a,Va=$a=null,e.current=n,Vh(n),Cp(),_=l,P=o,Ee.transition=a}else e.current=n;if(Fr&&(Fr=!1,dt=e,ws=s),a=e.pendingLanes,a===0&&(xt=null),Ip(n.stateNode),xe(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ss)throw Ss=!1,e=hi,hi=null,e;return ws&1&&e.tag!==0&&hn(),a=e.pendingLanes,a&1?e===gi?Jn++:(Jn=0,gi=e):Jn=0,Tt(),null}function hn(){if(dt!==null){var e=Rc(ws),t=Ee.transition,n=P;try{if(Ee.transition=null,P=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,ws=0,_&6)throw Error(C(331));var s=_;for(_|=4,I=e.current;I!==null;){var a=I,o=a.child;if(I.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:$n(8,h,a)}var g=h.child;if(g!==null)g.return=h,I=g;else for(;I!==null;){h=I;var m=h.sibling,b=h.return;if(zu(h),h===u){I=null;break}if(m!==null){m.return=b,I=m;break}I=b}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}I=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,I=o;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:$n(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,I=p;break e}I=a.return}}var d=e.current;for(I=d;I!==null;){o=I;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,I=f;else e:for(o=d;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ps(9,l)}}catch(A){$(l,l.return,A)}if(l===o){I=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,I=S;break e}I=l.return}}if(_=s,Tt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ns,e)}catch{}r=!0}return r}finally{P=n,Ee.transition=t}}return!1}function Tl(e,t,n){t=vn(n,t),t=Ru(e,t,1),e=yt(e,t,1),t=de(),e!==null&&(fr(e,1,t),xe(e,t))}function $(e,t,n){if(e.tag===3)Tl(e,e,n);else for(;t!==null;){if(t.tag===3){Tl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=vn(n,e),e=Mu(t,e,1),t=yt(t,e,1),e=de(),t!==null&&(fr(t,1,e),xe(t,e));break}}t=t.return}}function Zh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>J()-ao?Pt(e,0):so|=n),xe(e,t)}function ed(e,t){t===0&&(e.mode&1?(t=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):t=1);var n=de();e=tt(e,t),e!==null&&(fr(e,t,n),xe(e,n))}function eg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ed(e,n)}function tg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),ed(e,n)}var td;td=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Wh(e,t,n);me=!!(e.flags&131072)}else me=!1,W&&t.flags&1048576&&au(t,hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var s=mn(t,le.current);pn(t,n),s=Xi(null,t,r,e,s,n);var a=Zi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(a=!0,ds(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Vi(t),s.updater=_s,t.stateNode=s,s._reactInternals=t,ni(t,r,e,n),t=ai(null,t,r,!0,a,n)):(t.tag=0,W&&a&&Fi(t),ue(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=rg(r),e=je(r,e),s){case 0:t=si(null,t,r,e,n);break e;case 1:t=yl(null,t,r,e,n);break e;case 11:t=ml(null,t,r,e,n);break e;case 14:t=fl(null,t,r,je(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:je(r,s),si(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:je(r,s),yl(e,t,r,s,n);case 3:e:{if(qu(t),e===null)throw Error(C(387));r=t.pendingProps,a=t.memoizedState,s=a.element,du(e,t),fs(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=vn(Error(C(423)),t),t=xl(e,t,r,n,s);break e}else if(r!==s){s=vn(Error(C(424)),t),t=xl(e,t,r,n,s);break e}else for(be=ft(t.stateNode.containerInfo.firstChild),Se=t,W=!0,Pe=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===s){t=nt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Za(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Ja(r,s)?o=null:a!==null&&Ja(r,a)&&(t.flags|=32),Pu(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Za(t),null;case 13:return Bu(e,t,n);case 4:return Ji(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:je(r,s),ml(e,t,r,s,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,q(gs,r._currentValue),r._currentValue=o,a!==null)if(Ue(a.value,o)){if(a.children===s.children&&!fe.current){t=nt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Xe(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ei(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ei(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ue(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,pn(t,n),s=Oe(s),r=r(s),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,s=je(r,t.pendingProps),s=je(r.type,s),fl(e,t,r,s,n);case 15:return ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:je(r,s),Kr(e,t),t.tag=1,ye(r)?(e=!0,ds(t)):e=!1,pn(t,n),ku(t,r,s),ni(t,r,s,n),ai(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return _u(e,t,n)}throw Error(C(156,t.tag))};function nd(e,t){return Nc(e,t)}function ng(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new ng(e,t,n,r)}function co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rg(e){if(typeof e=="function")return co(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ei)return 11;if(e===Ni)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function es(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")co(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return qt(n.children,s,a,t);case Ti:o=8,s|=8;break;case Ia:return e=Te(12,n,t,s|2),e.elementType=Ia,e.lanes=a,e;case Ta:return e=Te(13,n,t,s),e.elementType=Ta,e.lanes=a,e;case Ea:return e=Te(19,n,t,s),e.elementType=Ea,e.lanes=a,e;case pc:return Bs(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uc:o=10;break e;case dc:o=9;break e;case Ei:o=11;break e;case Ni:o=14;break e;case it:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Te(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function qt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Bs(e,t,n,r){return e=Te(22,e,r,t),e.elementType=pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sg(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function uo(e,t,n,r,s,a,o,l,c){return e=new sg(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Te(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vi(a),e}function ag(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rd(e){if(!e)return At;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ye(n))return ru(e,n,t)}return t}function sd(e,t,n,r,s,a,o,l,c){return e=uo(n,r,!0,e,s,a,o,l,c),e.context=rd(null),n=e.current,r=de(),s=vt(n),a=Xe(r,s),a.callback=t??null,yt(n,a,s),e.current.lanes=s,fr(e,s,r),xe(e,r),e}function Fs(e,t,n,r){var s=t.current,a=de(),o=vt(s);return n=rd(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(s,t,o),e!==null&&(Fe(e,s,o,a),Jr(e,s,o)),o}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function El(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function po(e,t){El(e,t),(e=e.alternate)&&El(e,t)}function ig(){return null}var ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function ho(e){this._internalRoot=e}Us.prototype.render=ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Fs(e,t,null,null)};Us.prototype.unmount=ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Fs(null,e,null,null)}),t[et]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&qc(e)}};function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nl(){}function og(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var u=As(o);a.call(u)}}var o=sd(t,r,e,0,null,!1,!1,"",Nl);return e._reactRootContainer=o,e[et]=o.current,sr(e.nodeType===8?e.parentNode:e),Ht(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=As(c);l.call(u)}}var c=uo(e,0,!1,null,null,!1,!1,"",Nl);return e._reactRootContainer=c,e[et]=c.current,sr(e.nodeType===8?e.parentNode:e),Ht(function(){Fs(t,c,n,r)}),c}function Hs(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=As(o);l.call(c)}}Fs(t,o,e,s)}else o=og(n,t,e,s,r);return As(o)}Mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(ki(t,n|1),xe(t,J()),!(_&6)&&(bn=J()+500,Tt()))}break;case 13:Ht(function(){var r=tt(e,1);if(r!==null){var s=de();Fe(r,e,1,s)}}),po(e,1)}};Ri=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=de();Fe(t,e,134217728,n)}po(e,134217728)}};jc=function(e){if(e.tag===13){var t=vt(e),n=tt(e,t);if(n!==null){var r=de();Fe(n,e,t,r)}po(e,t)}};_c=function(){return P};Pc=function(e,t){var n=P;try{return P=e,t()}finally{P=n}};qa=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Rs(r);if(!s)throw Error(C(90));gc(r),Da(r,s)}}}break;case"textarea":fc(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Cc=io;Ac=Ht;var lg={usingClientEntryPoint:!1,Events:[xr,en,Rs,Sc,wc,io]},jn={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cg={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||ig,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{Ns=Ur.inject(cg),$e=Ur}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!go(t))throw Error(C(200));return ag(e,t,null,n)};Ce.createRoot=function(e,t){if(!go(e))throw Error(C(299));var n=!1,r="",s=ad;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=uo(e,1,!1,null,null,n,!1,r,s),e[et]=t.current,sr(e.nodeType===8?e.parentNode:e),new ho(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ht(e)};Ce.hydrate=function(e,t,n){if(!Ws(t))throw Error(C(200));return Hs(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!go(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=ad;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sd(t,null,e,1,n??null,s,!1,a,o),e[et]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Us(t)};Ce.render=function(e,t,n){if(!Ws(t))throw Error(C(200));return Hs(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(C(40));return e._reactRootContainer?(Ht(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Ce.unstable_batchedUpdates=io;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Hs(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(e){console.error(e)}}id(),ic.exports=Ce;var ug=ic.exports,od,Ol=ug;od=Ol.createRoot,Ol.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hr.apply(null,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const Dl="popstate";function dg(e){e===void 0&&(e={});function t(s,a){let{pathname:o="/",search:l="",hash:c=""}=$t(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),yi("",{pathname:o,search:l,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){let o=s.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let c=s.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof a=="string"?a:Ls(a))}function r(s,a){mo(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return hg(t,n,r,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pg(){return Math.random().toString(36).substr(2,8)}function kl(e,t){return{usr:e.state,key:e.key,idx:t}}function yi(e,t,n,r){return n===void 0&&(n=null),hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$t(t):t,{state:n,key:t&&t.key||r||pg()})}function Ls(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $t(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hg(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,l=pt.Pop,c=null,u=h();u==null&&(u=0,o.replaceState(hr({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function g(){l=pt.Pop;let x=h(),p=x==null?null:x-u;u=x,c&&c({action:l,location:y.location,delta:p})}function m(x,p){l=pt.Push;let d=yi(y.location,x,p);n&&n(d,x),u=h()+1;let f=kl(d,u),S=y.createHref(d);try{o.pushState(f,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;s.location.assign(S)}a&&c&&c({action:l,location:y.location,delta:1})}function b(x,p){l=pt.Replace;let d=yi(y.location,x,p);n&&n(d,x),u=h();let f=kl(d,u),S=y.createHref(d);o.replaceState(f,"",S),a&&c&&c({action:l,location:y.location,delta:0})}function v(x){let p=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof x=="string"?x:Ls(x);return d=d.replace(/ $/,"%20"),Y(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return l},get location(){return e(s,o)},listen(x){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Dl,g),c=x,()=>{s.removeEventListener(Dl,g),c=null}},createHref(x){return t(s,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:b,go(x){return o.go(x)}};return y}var Rl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rl||(Rl={}));function gg(e,t,n){return n===void 0&&(n="/"),mg(e,t,n)}function mg(e,t,n,r){let s=typeof t=="string"?$t(t):t,a=fo(s.pathname||"/",n);if(a==null)return null;let o=ld(e);fg(o);let l=null,c=Eg(a);for(let u=0;l==null&&u<o.length;++u)l=Lg(o[u],c);return l}function ld(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(Y(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=St([r,c.relativePath]),h=n.concat(c);a.children&&a.children.length>0&&(Y(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ld(a.children,t,h,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Cg(u,a.index),routesMeta:h})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of cd(a.path))s(a,o,c)}),t}function cd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=cd(r.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function fg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ag(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yg=/^:[\w-]+$/,xg=3,vg=2,bg=1,Sg=10,wg=-2,Ml=e=>e==="*";function Cg(e,t){let n=e.split("/"),r=n.length;return n.some(Ml)&&(r+=wg),t&&(r+=vg),n.filter(s=>!Ml(s)).reduce((s,a)=>s+(yg.test(a)?xg:a===""?bg:Sg),r)}function Ag(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Lg(e,t,n){let{routesMeta:r}=e,s={},a="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,h=a==="/"?t:t.slice(a.length)||"/",g=Ig({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),m=c.route;if(!g)return null;Object.assign(s,g.params),o.push({params:s,pathname:St([a,g.pathname]),pathnameBase:Dg(St([a,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(a=St([a,g.pathnameBase]))}return o}function Ig(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tg(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,h,g)=>{let{paramName:m,isOptional:b}=h;if(m==="*"){let y=l[g]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[g];return b&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Tg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Eg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ng(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?$t(e):e,a;return n?(n=pd(n),n.startsWith("/")?a=jl(n.substring(1),"/"):a=jl(n,t)):a=t,{pathname:a,search:kg(r),hash:Rg(s)}}function jl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ca(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Og(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ud(e,t){let n=Og(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dd(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=$t(e):(s=hr({},e),Y(!s.pathname||!s.pathname.includes("?"),Ca("?","pathname","search",s)),Y(!s.pathname||!s.pathname.includes("#"),Ca("#","pathname","hash",s)),Y(!s.search||!s.search.includes("#"),Ca("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=n;else{let g=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),g-=1;s.pathname=m.join("/")}l=g>=0?t[g]:"/"}let c=Ng(s,l),u=o&&o!=="/"&&o.endsWith("/"),h=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const pd=e=>e.replace(/\/\/+/g,"/"),St=e=>pd(e.join("/")),Dg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hd=["post","put","patch","delete"];new Set(hd);const jg=["get",...hd];new Set(jg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(null,arguments)}const yo=w.createContext(null),_g=w.createContext(null),Vt=w.createContext(null),zs=w.createContext(null),Et=w.createContext({outlet:null,matches:[],isDataRoute:!1}),gd=w.createContext(null);function Pg(e,t){let{relative:n}=t===void 0?{}:t;br()||Y(!1);let{basename:r,navigator:s}=w.useContext(Vt),{hash:a,pathname:o,search:l}=xd(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:St([r,o])),s.createHref({pathname:c,search:l,hash:a})}function br(){return w.useContext(zs)!=null}function Sr(){return br()||Y(!1),w.useContext(zs).location}function md(e){w.useContext(Vt).static||w.useLayoutEffect(e)}function fd(){let{isDataRoute:e}=w.useContext(Et);return e?Yg():qg()}function qg(){br()||Y(!1);let e=w.useContext(yo),{basename:t,future:n,navigator:r}=w.useContext(Vt),{matches:s}=w.useContext(Et),{pathname:a}=Sr(),o=JSON.stringify(ud(s,n.v7_relativeSplatPath)),l=w.useRef(!1);return md(()=>{l.current=!0}),w.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let g=dd(u,JSON.parse(o),a,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:St([t,g.pathname])),(h.replace?r.replace:r.push)(g,h.state,h)},[t,r,o,a,e])}function yd(){let{matches:e}=w.useContext(Et),t=e[e.length-1];return t?t.params:{}}function xd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Vt),{matches:s}=w.useContext(Et),{pathname:a}=Sr(),o=JSON.stringify(ud(s,r.v7_relativeSplatPath));return w.useMemo(()=>dd(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Bg(e,t){return Fg(e,t)}function Fg(e,t,n,r){br()||Y(!1);let{navigator:s}=w.useContext(Vt),{matches:a}=w.useContext(Et),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=Sr(),h;if(t){var g;let x=typeof t=="string"?$t(t):t;c==="/"||(g=x.pathname)!=null&&g.startsWith(c)||Y(!1),h=x}else h=u;let m=h.pathname||"/",b=m;if(c!=="/"){let x=c.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=gg(e,{pathname:b}),y=Qg(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:St([c,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:St([c,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,r);return t&&y?w.createElement(zs.Provider,{value:{location:gr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:pt.Pop}},y):y}function Ug(){let e=Gg(),t=Mg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:s},n):null,null)}const Wg=w.createElement(Ug,null);class Hg extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Et.Provider,{value:this.props.routeContext},w.createElement(gd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zg(e){let{routeContext:t,match:n,children:r}=e,s=w.useContext(yo);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Et.Provider,{value:t},r)}function Qg(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let h=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);h>=0||Y(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let g=o[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(u=h),g.route.id){let{loaderData:m,errors:b}=n,v=g.route.loader&&m[g.route.id]===void 0&&(!b||b[g.route.id]===void 0);if(g.route.lazy||v){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,g,m)=>{let b,v=!1,y=null,x=null;n&&(b=l&&g.route.id?l[g.route.id]:void 0,y=g.route.errorElement||Wg,c&&(u<0&&m===0?(Kg("route-fallback"),v=!0,x=null):u===m&&(v=!0,x=g.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,m+1)),d=()=>{let f;return b?f=y:v?f=x:g.route.Component?f=w.createElement(g.route.Component,null):g.route.element?f=g.route.element:f=h,w.createElement(zg,{match:g,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:f})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?w.createElement(Hg,{location:n.location,revalidation:n.revalidation,component:y,error:b,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var vd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vd||{}),bd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bd||{});function $g(e){let t=w.useContext(yo);return t||Y(!1),t}function Vg(e){let t=w.useContext(_g);return t||Y(!1),t}function Jg(e){let t=w.useContext(Et);return t||Y(!1),t}function Sd(e){let t=Jg(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Gg(){var e;let t=w.useContext(gd),n=Vg(),r=Sd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Yg(){let{router:e}=$g(vd.UseNavigateStable),t=Sd(bd.UseNavigateStable),n=w.useRef(!1);return md(()=>{n.current=!0}),w.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,gr({fromRouteId:t},a)))},[e,t])}const _l={};function Kg(e,t,n){_l[e]||(_l[e]=!0)}function Xg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Me(e){Y(!1)}function Zg(e){let{basename:t="/",children:n=null,location:r,navigationType:s=pt.Pop,navigator:a,static:o=!1,future:l}=e;br()&&Y(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:a,static:o,future:gr({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof r=="string"&&(r=$t(r));let{pathname:h="/",search:g="",hash:m="",state:b=null,key:v="default"}=r,y=w.useMemo(()=>{let x=fo(h,c);return x==null?null:{location:{pathname:x,search:g,hash:m,state:b,key:v},navigationType:s}},[c,h,g,m,b,v,s]);return y==null?null:w.createElement(Vt.Provider,{value:u},w.createElement(zs.Provider,{children:n,value:y}))}function em(e){let{children:t,location:n}=e;return Bg(xi(t),n)}new Promise(()=>{});function xi(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,s)=>{if(!w.isValidElement(r))return;let a=[...t,s];if(r.type===w.Fragment){n.push.apply(n,xi(r.props.children,a));return}r.type!==Me&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xi(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vi.apply(null,arguments)}function tm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function nm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rm(e,t){return e.button===0&&(!t||t==="_self")&&!nm(e)}const sm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],am="6";try{window.__reactRouterVersion=am}catch{}const im="startTransition",Pl=Zd[im];function om(e){let{basename:t,children:n,future:r,window:s}=e,a=w.useRef();a.current==null&&(a.current=dg({window:s,v5Compat:!0}));let o=a.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=w.useCallback(g=>{u&&Pl?Pl(()=>c(g)):c(g)},[c,u]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.useEffect(()=>Xg(r),[r]),w.createElement(Zg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B=w.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:u,preventScrollReset:h,viewTransition:g}=t,m=tm(t,sm),{basename:b}=w.useContext(Vt),v,y=!1;if(typeof u=="string"&&cm.test(u)&&(v=u,lm))try{let f=new URL(window.location.href),S=u.startsWith("//")?new URL(f.protocol+u):new URL(u),A=fo(S.pathname,b);S.origin===f.origin&&A!=null?u=A+S.search+S.hash:y=!0}catch{}let x=Pg(u,{relative:s}),p=um(u,{replace:o,state:l,target:c,preventScrollReset:h,relative:s,viewTransition:g});function d(f){r&&r(f),f.defaultPrevented||p(f)}return w.createElement("a",vi({},m,{href:v||x,onClick:y||a?r:d,ref:n,target:c}))});var ql;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ql||(ql={}));var Bl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bl||(Bl={}));function um(e,t){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=fd(),u=Sr(),h=xd(e,{relative:o});return w.useCallback(g=>{if(rm(g,n)){g.preventDefault();let m=r!==void 0?r:Ls(u)===Ls(h);c(e,{replace:m,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[u,c,h,r,s,n,e,a,o,l])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:o,...l},c)=>w.createElement("svg",{ref:c,...pm,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:wd("lucide",s),...l},[...o.map(([u,h])=>w.createElement(u,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const n=w.forwardRef(({className:r,...s},a)=>w.createElement(hm,{ref:a,iconNode:t,className:wd(`lucide-${dm(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=j("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=j("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=j("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=j("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=j("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=j("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=j("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=j("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=j("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=j("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=j("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=j("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=j("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=j("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=j("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=j("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=j("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=j("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=j("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=j("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=j("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=j("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=j("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=j("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=j("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=j("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=j("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=j("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=j("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=j("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=j("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=j("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=j("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=j("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=j("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),zl="sfda_progress",Am=100,Lm=150,Im=20,Wr={completedLessons:[],completedChallenges:[],quizScores:{},challengeSubmissions:{},xp:0,streakDays:0,lastVisit:new Date().toISOString(),badges:[]};function Vs(){const[e,t]=w.useState(()=>{try{const u=localStorage.getItem(zl);return u?{...Wr,...JSON.parse(u)}:Wr}catch{return Wr}});w.useEffect(()=>{localStorage.setItem(zl,JSON.stringify(e))},[e]);const n=w.useCallback(u=>{t(h=>{if(h.completedLessons.includes(u))return h;const g=h.xp+Am,m=[...h.badges];return h.completedLessons.length===0&&m.push("first-lesson"),h.completedLessons.length===4&&m.push("five-lessons"),h.completedLessons.length===9&&m.push("ten-lessons"),{...h,completedLessons:[...h.completedLessons,u],xp:g,badges:m}})},[]),r=w.useCallback((u,h)=>{t(g=>{const m=!g.completedChallenges.includes(u),b=[...g.badges];return m&&g.completedChallenges.length===0&&b.push("first-challenge"),m&&g.completedChallenges.length===4&&b.push("five-challenges"),{...g,completedChallenges:m?[...g.completedChallenges,u]:g.completedChallenges,challengeSubmissions:{...g.challengeSubmissions,[u]:h},xp:m?g.xp+Lm:g.xp,badges:b}})},[]),s=w.useCallback((u,h,g)=>{t(m=>({...m,quizScores:{...m.quizScores,[u]:Math.round(h/g*100)},xp:m.xp+h*Im}))},[]),a=w.useCallback(u=>e.completedLessons.includes(u),[e.completedLessons]),o=w.useCallback(u=>e.completedChallenges.includes(u),[e.completedChallenges]),l=()=>e.xp<500?{level:1,title:"Trailblazer Recruit",next:500}:e.xp<1500?{level:2,title:"Apex Apprentice",next:1500}:e.xp<3e3?{level:3,title:"SOQL Scholar",next:3e3}:e.xp<5e3?{level:4,title:"DML Developer",next:5e3}:e.xp<8e3?{level:5,title:"Trigger Tamer",next:8e3}:{level:6,title:"Platform Champion",next:1/0},c=w.useCallback(()=>{t(Wr)},[]);return{progress:e,completeLesson:n,completeChallenge:r,recordQuizScore:s,isLessonCompleted:a,isChallengeCompleted:o,getLevel:l,resetProgress:c}}const Ql=[{to:"/",label:"Home",icon:xm},{to:"/dashboard",label:"Dashboard",icon:vm},{to:"/apex",label:"Apex",icon:ke},{to:"/soql",label:"SOQL",icon:In},{to:"/debug",label:"Debug",icon:wr},{to:"/missions",label:"Missions",icon:rt}];function Tm(){const[e,t]=w.useState(!1),n=Sr(),{progress:r,getLevel:s}=Vs(),{level:a,title:o}=s();return i.jsxs("header",{className:"sticky top-0 z-50 glass border-b border-gray-200/60 shadow-sm",children:[i.jsx("div",{className:"max-w-6xl mx-auto px-4",children:i.jsxs("div",{className:"flex items-center h-16 gap-4",children:[i.jsxs(B,{to:"/",className:"flex items-center gap-2.5 shrink-0 group",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-sf-blue flex items-center justify-center group-hover:bg-blue-700 transition-colors",children:i.jsx(ke,{className:"w-4 h-4 text-white"})}),i.jsx("span",{className:"font-bold text-gray-900 text-sm hidden sm:block",children:"SFDC Simplified"})]}),i.jsx("nav",{className:"hidden md:flex items-center gap-1 ml-2",children:Ql.map(({to:l,label:c})=>i.jsx(B,{to:l,className:n.pathname===l?"nav-link-active":"nav-link-inactive",children:c},l))}),i.jsx("div",{className:"flex-1"}),i.jsxs(B,{to:"/dashboard",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-sf-navy to-sf-blue text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity",children:[i.jsx(qe,{className:"w-3.5 h-3.5 text-yellow-300"}),i.jsxs("span",{children:[r.xp," XP"]}),i.jsx("span",{className:"opacity-60",children:"·"}),i.jsxs("span",{children:["Lv ",a]})]}),i.jsx(B,{to:"/about",className:"btn-ghost hidden md:inline-flex p-2",children:i.jsx(Ld,{className:"w-4 h-4"})}),i.jsx("button",{onClick:()=>t(!e),className:"md:hidden btn-ghost p-2",children:e?i.jsx(Cm,{className:"w-5 h-5"}):i.jsx(Sm,{className:"w-5 h-5"})})]})}),e&&i.jsxs("div",{className:"md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1",children:[Ql.map(({to:l,label:c,icon:u})=>i.jsxs(B,{to:l,onClick:()=>t(!1),className:`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${n.pathname===l?"bg-blue-50 text-sf-blue":"text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(u,{className:"w-4 h-4"}),c]},l)),i.jsx("div",{className:"pt-2 border-t border-gray-100 mt-2",children:i.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 text-xs text-gray-500",children:[i.jsx(qe,{className:"w-3.5 h-3.5 text-yellow-500"}),i.jsxs("span",{className:"font-semibold text-gray-700",children:[r.xp," XP"]}),i.jsx("span",{children:"·"}),i.jsxs("span",{children:["Level ",a,": ",o]})]})})]})]})}function Em(){return i.jsx("footer",{className:"bg-white border-t border-gray-100 mt-auto",children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 py-8",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue flex items-center justify-center",children:i.jsx(ke,{className:"w-3.5 h-3.5 text-white"})}),i.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:"SFDC Simplified"})]}),i.jsxs("div",{className:"flex items-center gap-6 text-xs text-gray-500",children:[i.jsx(B,{to:"/about",className:"hover:text-sf-blue transition-colors",children:"About"}),i.jsx(B,{to:"/apex",className:"hover:text-sf-blue transition-colors",children:"Lessons"}),i.jsx(B,{to:"/missions",className:"hover:text-sf-blue transition-colors",children:"Missions"}),i.jsx("a",{href:"https://developer.salesforce.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-sf-blue transition-colors",children:"Salesforce Docs"})]}),i.jsx("p",{className:"text-xs text-gray-400",children:"Not affiliated with Salesforce, Inc."})]})})})}const Nm=[{icon:i.jsx(rt,{className:"w-5 h-5"}),title:"10 Structured Lessons",desc:"From variables to DML — every concept explained with real examples",color:"bg-blue-500"},{icon:i.jsx(ke,{className:"w-5 h-5"}),title:"Hands-On Challenges",desc:"Write code, get instant feedback, and learn from detailed solutions",color:"bg-violet-500"},{icon:i.jsx(In,{className:"w-5 h-5"}),title:"SOQL Explorer",desc:"Query fictional Salesforce orgs and understand data relationships",color:"bg-teal-500"},{icon:i.jsx(wr,{className:"w-5 h-5"}),title:"Debug Lab",desc:"Find and fix real bugs in broken code — governor limits and all",color:"bg-orange-500"},{icon:i.jsx(qe,{className:"w-5 h-5"}),title:"XP & Badges",desc:"Track your progress and earn badges as you level up",color:"bg-yellow-500"},{icon:i.jsx(Ed,{className:"w-5 h-5"}),title:"Project Missions",desc:"Apply what you know to real-world Salesforce business scenarios",color:"bg-pink-500"}],Om=["Apex Variables & Data Types","Strings & String Methods","Conditionals & Boolean Logic","Loops: For, While, Do-While","Lists (Apex Arrays)","Sets & Uniqueness","Maps: Key-Value Storage","Classes & Object-Oriented Apex","SOQL: Query Your Data","DML: Create, Update, Delete Records"],Dm=[{value:"10",label:"Lessons",sub:"beginner to confident"},{value:"10",label:"Challenges",sub:"with instant feedback"},{value:"5",label:"Debug Scenarios",sub:"real bugs to fix"},{value:"4",label:"Missions",sub:"real-world projects"}],km=[{num:1,label:"Understand",desc:"Read a clear explanation"},{num:2,label:"Example",desc:"See real working code"},{num:3,label:"Try It",desc:"Write code yourself"},{num:4,label:"Hint",desc:"Unstuck in one tap"},{num:5,label:"Feedback",desc:"Know why it passed or failed"},{num:6,label:"Solution",desc:"See the full solution"},{num:7,label:"Apply",desc:"Use it in a mission"}];function Rm(){return i.jsxs("div",{className:"min-h-screen",children:[i.jsxs("section",{className:"gradient-hero text-white py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 25% 50%, #fff 1px, transparent 0), radial-gradient(circle at 75% 20%, #fff 1px, transparent 0)",backgroundSize:"60px 60px"}}),i.jsxs("div",{className:"max-w-4xl mx-auto text-center relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm",children:[i.jsx(Id,{className:"w-3.5 h-3.5 text-yellow-300"}),"Free · No signup required · Start in 30 seconds"]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6",children:["Learn Salesforce",i.jsx("br",{}),i.jsx("span",{className:"text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(90deg, #FFC849, #FF5D2D)"},children:"Development"})]}),i.jsx("p",{className:"text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed",children:"The interactive learning platform built for absolute beginners. Master Apex, SOQL, and DML through guided lessons, real code challenges, and hands-on projects."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[i.jsxs(B,{to:"/apex",className:"inline-flex items-center justify-center gap-2 bg-white text-sf-blue font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Learning Free ",i.jsx(Gn,{className:"w-4 h-4"})]}),i.jsx(B,{to:"/dashboard",className:"inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors text-base backdrop-blur-sm",children:"View Dashboard"})]})]})]}),i.jsx("section",{className:"bg-sf-navy text-white py-8 px-4",children:i.jsx("div",{className:"max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",children:Dm.map(e=>i.jsxs("div",{children:[i.jsx("div",{className:"text-3xl font-extrabold text-yellow-400",children:e.value}),i.jsx("div",{className:"font-semibold text-sm mt-0.5",children:e.label}),i.jsx("div",{className:"text-xs text-blue-300 mt-0.5",children:e.sub})]},e.label))})}),i.jsx("section",{className:"py-16 px-4 bg-white",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"section-title",children:"The 7-Step Learning Cycle"}),i.jsx("p",{className:"section-subtitle",children:"Every lesson follows the same proven structure — so you never feel lost"})]}),i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3",children:km.map(e=>i.jsxs("div",{className:"flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group",children:[i.jsx("div",{className:"w-9 h-9 rounded-full bg-sf-blue text-white text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm",children:e.num}),i.jsx("div",{className:"font-semibold text-sm text-gray-900",children:e.label}),i.jsx("div",{className:"text-xs text-gray-500 leading-tight",children:e.desc})]},e.num))})]})}),i.jsx("section",{className:"py-16 px-4 bg-gray-50",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"section-title",children:"Everything You Need to Succeed"}),i.jsx("p",{className:"section-subtitle",children:"From your first variable to deploying real Apex — all in one place"})]}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Nm.map(e=>i.jsxs("div",{className:"card hover:border-sf-blue/20 group",children:[i.jsx("div",{className:`w-10 h-10 ${e.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-sm`,children:e.icon}),i.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:e.title}),i.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:e.desc})]},e.title))})]})}),i.jsx("section",{className:"py-16 px-4 bg-white",children:i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-start",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"section-title mb-2",children:"Full Apex Curriculum"}),i.jsx("p",{className:"section-subtitle mb-8",children:"10 lessons carefully sequenced from zero to job-ready Apex developer"}),i.jsxs(B,{to:"/apex",className:"btn-primary",children:["Browse All Lessons ",i.jsx(Gn,{className:"w-4 h-4"})]})]}),i.jsx("div",{className:"space-y-2",children:Om.map((e,t)=>i.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-sf-blue/10 text-sf-blue text-xs font-bold flex items-center justify-center shrink-0",children:String(t+1).padStart(2,"0")}),i.jsx("span",{className:"text-sm font-medium text-gray-700 group-hover:text-gray-900",children:e}),i.jsx(xo,{className:"w-4 h-4 text-gray-200 group-hover:text-gray-300 ml-auto"})]},e))})]})})}),i.jsx("section",{className:"gradient-hero text-white py-16 px-4",children:i.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[i.jsx(wm,{className:"w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-80"}),i.jsx("h2",{className:"text-3xl font-extrabold mb-4",children:"Ready to Write Your First Apex?"}),i.jsx("p",{className:"text-blue-100 mb-8 text-lg",children:"No Salesforce org needed. Start writing code right here, right now."}),i.jsxs(B,{to:"/lesson/apex-variables",className:"inline-flex items-center gap-2 bg-white text-sf-blue font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base",children:["Start Lesson 1: Variables ",i.jsx(Gn,{className:"w-4 h-4"})]})]})})]})}const Mm={blue:"bg-sf-blue",green:"bg-sf-green",orange:"bg-sf-orange",purple:"bg-sf-purple"},jm={sm:"h-1.5",md:"h-2.5",lg:"h-4"};function Ts({value:e,max:t=100,className:n="",color:r="blue",height:s,size:a="md",showLabel:o=!1,label:l}){const c=Math.min(100,Math.max(0,e/t*100)),u=Mm[r]??r,h=s??jm[a];return i.jsxs("div",{className:n,children:[(o||l)&&i.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l&&i.jsx("span",{className:"text-xs text-sf-gray-6",children:l}),o&&i.jsxs("span",{className:"text-xs font-medium text-sf-gray-7",children:[Math.round(c),"%"]})]}),i.jsx("div",{className:`w-full bg-sf-gray-2 rounded-full ${h} overflow-hidden`,children:i.jsx("div",{className:`${h} rounded-full ${u} transition-all duration-500 ease-out`,style:{width:`${c}%`},role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t})})]})}const Qe=[{id:"apex-variables",moduleId:"apex-basics",order:1,title:"Variables and Data Types",subtitle:"The building blocks of every Apex program",description:"Learn how to store and work with different kinds of data in Apex — from numbers and text to dates and Salesforce record IDs.",duration:20,difficulty:"beginner",tags:["apex","variables","data types"],prerequisites:[],learningObjectives:["Declare variables using primitive data types","Understand when to use Integer vs Decimal vs Long","Work with String, Boolean, Date, and ID types","Understand null values and type safety"],content:[{type:"explanation",title:"What is a Variable?",text:"A variable is a named container that holds a value your program can use and change. In Apex, every variable must have a declared type — this tells Salesforce exactly what kind of data it will store."},{type:"explanation",title:"Primitive Data Types",text:`Apex has several built-in primitive types:

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

Always use \`Trigger.oldMap.get(record.Id)\` to access the previous values.`},{type:"note",title:"When Trigger.old Is Not Available",text:"Trigger.old and Trigger.oldMap are only populated for update and delete operations — they are null on insert. Always guard with `if (Trigger.isUpdate)` before accessing them, or you will get a NullPointerException."}],quiz:[{id:"ctx-q1",question:"Which context variable gives you a Map<Id, sObject> of records BEFORE the change?",options:["Trigger.new","Trigger.oldMap","Trigger.newMap","Trigger.old"],correct:1,explanation:"Trigger.oldMap is a Map<Id, sObject> keyed by record ID containing the pre-change versions. It is available on update and delete triggers."},{id:"ctx-q2",question:'You need to run extra logic only when the Account Rating field changes from "Cold" to "Hot". Which approach is correct?',options:['if (acc.Rating == "Hot")',"if (acc.Rating != Trigger.oldMap.get(acc.Id).Rating)","if (Trigger.new.Rating != Trigger.old.Rating)",'if (Trigger.isUpdate && acc.Rating == "Hot")'],correct:1,explanation:"Compare the new record's field to the old record from Trigger.oldMap. This detects any change to Rating. Option D only checks the new value, not whether it actually changed."},{id:"ctx-q3",question:"On a before insert trigger, which context variable is NOT available?",options:["Trigger.new","Trigger.isInsert","Trigger.oldMap","Trigger.size"],correct:2,explanation:'Trigger.oldMap (and Trigger.old) are only available for update and delete operations. On insert there are no "old" values.'},{id:"ctx-q4",question:'What does acc.addError("message") do in a before trigger?',options:["Logs a message to the debug log","Prevents the record from being saved and shows the message to the user","Throws a DmlException","Creates an error log record"],correct:1,explanation:"addError() attaches a validation error to the record and prevents the DML operation from completing. The error message is shown to the user."}],challengeId:"challenge-triggers-context"}];Qe.reduce((e,t)=>(e[t.moduleId]||(e[t.moduleId]=[]),e[t.moduleId].push(t),e),{});const _m=e=>Qe.find(t=>t.id===e),Nd=[{id:"challenge-variables",lessonId:"apex-variables",title:"Build a Contact Info Card",description:"Declare the correct Apex variables to represent a Salesforce Contact record, then print a formatted summary.",difficulty:"beginner",instructions:["Declare a String variable for the contact's full name","Declare an Integer variable for their age","Declare a Decimal variable for their annual salary","Declare a Boolean variable indicating if they are a VIP customer","Declare a Date variable for their hire date using Date.newInstance()","Print a summary using System.debug()"],starterCode:`// TODO: Declare your variables here
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

System.debug(summary);`,solutionExplanation:"We declared five variables with the correct types: String for text, Integer for whole numbers, Decimal for currency (supports decimal places), Boolean for true/false, and Date using the static factory method. The summary concatenates all values into one string.",testCases:[{id:"tc1",description:"Declares a String variable",pattern:"String\\s+\\w+\\s*=\\s*'[^']+'",errorMessage:"You need to declare a String variable with a text value in single quotes."},{id:"tc2",description:"Declares an Integer variable",pattern:"Integer\\s+\\w+\\s*=\\s*\\d+",errorMessage:"You need to declare an Integer variable with a whole number value."},{id:"tc3",description:"Declares a Decimal variable",pattern:"Decimal\\s+\\w+\\s*=\\s*[\\d.]+",errorMessage:"You need to declare a Decimal variable with a decimal number."},{id:"tc4",description:"Declares a Boolean variable",pattern:"Boolean\\s+\\w+\\s*=\\s*(true|false)",errorMessage:"You need to declare a Boolean variable with a value of true or false."},{id:"tc5",description:"System.debug() prints the variable values",pattern:"System\\.debug\\([^)]*\\+",errorMessage:"Use System.debug() to print the summary — it should concatenate the variable values, not just print an empty string."}]},{id:"challenge-strings",lessonId:"apex-strings",title:"Email Address Processor",description:"Write Apex code to validate and normalize an email address from user input.",difficulty:"beginner",instructions:["Take the input email: '  JOHN.DOE@ExAmPlE.CoM  '","Trim whitespace from both ends","Convert the entire email to lowercase",`Check if the email contains an '@' character — if not, print "Invalid email"`,"Extract the username (part before @) and domain (part after @)",'Print: "Username: john.doe | Domain: example.com"'],starterCode:`String rawEmail = '  JOHN.DOE@ExAmPlE.CoM  ';

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
}`,solutionExplanation:"We chain trim() and toLowerCase() to normalize the input. Then we check for @ using contains(), find its position with indexOf(), and use substring() to split the email into username and domain parts.",testCases:[{id:"tc1",description:"Uses trim()",pattern:"\\.trim\\(\\)",errorMessage:"Use .trim() to remove leading and trailing whitespace."},{id:"tc2",description:"Uses toLowerCase()",pattern:"\\.toLowerCase\\(\\)",errorMessage:"Use .toLowerCase() to normalize the email to lowercase."},{id:"tc3",description:"Checks for @ character",pattern:"contains\\(|indexOf\\(",errorMessage:"Check if the email contains an @ character using contains() or indexOf()."},{id:"tc4",description:"Extracts username with substring()",pattern:"substring\\(\\s*0\\s*,",errorMessage:"Extract the username using .substring(0, atPos) — the part before the @."},{id:"tc5",description:"Extracts domain with substring()",pattern:"substring\\(\\s*atPos\\s*\\+\\s*1\\s*\\)",errorMessage:"Extract the domain using .substring(atPos + 1) — the part after the @."},{id:"tc6",description:"Prints username and domain with System.debug()",pattern:"System\\.debug\\([^)]*[Uu]sername[^)]*[Dd]omain",errorMessage:'Print both the username and domain using System.debug(), e.g. "Username: ... | Domain: ..."'}]},{id:"challenge-conditionals",lessonId:"apex-conditionals",title:"Opportunity Discount Calculator",description:"Write a conditional logic engine that determines the discount percentage based on deal size and account tier.",difficulty:"beginner",instructions:["Given amount = 75000 and accountTier = 'Gold'","Apply these rules:","  - Enterprise tier: 20% discount if amount > 50000, else 15%","  - Gold tier: 15% discount if amount > 50000, else 10%","  - Silver tier: 10% discount if amount > 50000, else 5%","  - All other tiers: 0% discount",'Calculate the discounted price and print: "Discount: X% | Final Price: $Y"'],starterCode:`Decimal amount = 75000;
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
System.debug('Discount: ' + discountPct + '% | Final Price: $' + finalPrice);`,solutionExplanation:"We use else if to handle each tier. For Gold with amount 75000 (> 50000), discountPct is 15. The ternary operator (condition ? valueIfTrue : valueIfFalse) is a concise shorthand for if/else.",testCases:[{id:"tc1",description:"Uses if/else if/else or switch",pattern:"if\\s*\\(|switch\\s+on",errorMessage:"Use if/else if/else statements to apply the discount rules."},{id:"tc2",description:"Checks accountTier",pattern:"accountTier",errorMessage:"Your code must check the accountTier variable."},{id:"tc3",description:"Checks amount threshold",pattern:"amount\\s*>\\s*50000",errorMessage:"You need to check if amount > 50000 to apply the higher discount."},{id:"tc4",description:"Declares finalPrice variable with formula",pattern:"Decimal\\s+finalPrice|finalPrice\\s*=\\s*amount\\s*\\*",errorMessage:"Declare a Decimal finalPrice and calculate it using the discount formula: amount * (1 - discountPct/100)."},{id:"tc5",description:"Prints discount and final price",pattern:"System\\.debug\\([^)]*[Dd]iscount",errorMessage:"Print the result with System.debug() showing both the discount and final price."}]},{id:"challenge-loops",lessonId:"apex-loops",title:"Sales Report Generator",description:"Use loops to process a list of opportunity amounts and generate a sales summary.",difficulty:"beginner",instructions:["Given the list of deal amounts: {5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000}","Use a loop to calculate: total revenue, deal count, average deal size",'Count how many deals are "large" (> 10000)',"Find the largest deal amount","Print all five results"],starterCode:`List<Decimal> dealAmounts = new List<Decimal>{
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
System.debug('Largest Deal: $' + largestDeal);`,solutionExplanation:"We use a for-each loop to process each amount. We accumulate the total, count deals, check for large deals, and track the max. Average is computed after the loop to avoid dividing inside.",testCases:[{id:"tc1",description:"Uses a loop",pattern:"for\\s*\\(",errorMessage:"Use a for or for-each loop to iterate over dealAmounts."},{id:"tc2",description:"Calculates total revenue",pattern:"totalRevenue\\s*\\+=|totalRevenue\\s*=\\s*totalRevenue\\s*\\+",errorMessage:"Accumulate amounts into totalRevenue inside the loop."},{id:"tc3",description:"Counts large deals over $10,000",pattern:"largeDealCount\\s*\\+\\+|largeDealCount\\s*\\+=\\s*1",errorMessage:"Increment largeDealCount inside the loop when amount > 10000."},{id:"tc4",description:"Tracks the largest deal with a comparison",pattern:"if\\s*\\(\\s*amount\\s*>\\s*largestDeal\\s*\\)",errorMessage:"Compare each amount to largestDeal inside the loop and update largestDeal when it is bigger."},{id:"tc5",description:"Prints all five summary results",pattern:"System\\.debug\\([^)]*averageDeal",errorMessage:"Print all results including the average deal amount using System.debug()."}]},{id:"challenge-lists",lessonId:"apex-lists",title:"Contact List Manager",description:"Build a contact list manager that filters, sorts, and summarizes a list of names.",difficulty:"beginner",instructions:["Start with this list: {'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'}","Create a new list containing only names that start with a vowel (A, E, I, O, U)","Sort the filtered list alphabetically","Print the count of filtered names and each name on a separate line"],starterCode:`List<String> contacts = new List<String>{
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
}`,solutionExplanation:"We use a Set of vowels for an efficient membership check. For each contact, we extract the first letter, uppercase it for safety, and check if it's a vowel. We then sort and print the results.",testCases:[{id:"tc1",description:"Creates a filtered list",pattern:"List<String>\\s+\\w+\\s*=\\s*new\\s+List<String>\\(\\)",errorMessage:"Create a new List<String> to hold the filtered names."},{id:"tc2",description:"Uses a loop to filter",pattern:"for\\s*\\(",errorMessage:"Use a loop to iterate through the contacts list."},{id:"tc3",description:"Checks first letter and adds vowel names",pattern:"vowelNames\\.add\\(",errorMessage:"Add matching names to vowelNames using vowelNames.add(name) inside the loop."},{id:"tc4",description:"Sorts the filtered list",pattern:"vowelNames\\.sort\\(\\)",errorMessage:"Sort the filtered list using vowelNames.sort()."},{id:"tc5",description:"Prints the count and each vowel name",pattern:"System\\.debug\\([^)]*vowelNames",errorMessage:"Print the vowelNames count and each name using System.debug()."}]},{id:"challenge-sets",lessonId:"apex-sets",title:"Tag Deduplicator",description:"Use a Set to deduplicate tags from multiple lead sources and identify which tags appear in multiple sources.",difficulty:"beginner",instructions:["You have two tag lists from different lead sources","Source A: {'vip', 'tech', 'enterprise', 'renewal', 'tech'}","Source B: {'sme', 'tech', 'startup', 'vip', 'sme'}","Create a Set of unique tags from Source A","Create a Set of unique tags from Source B","Find tags that appear in BOTH sources (intersection)","Print the unique tag counts for each source, and the shared tags"],starterCode:`List<String> sourceATags = new List<String>{'vip', 'tech', 'enterprise', 'renewal', 'tech'};
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
}`,solutionExplanation:"We use an index-based for loop to access both lists simultaneously. For each territory, we check if it already exists in the map and either add to the existing total or create a new entry. Finally, we sort the keys for consistent output.",testCases:[{id:"tc1",description:"Creates a Map<String, Decimal>",pattern:"Map<String,\\s*Decimal>",errorMessage:"Create a Map<String, Decimal> to store revenue by territory."},{id:"tc2",description:"Uses indexed for loop",pattern:"for\\s*\\(\\s*Integer\\s+i",errorMessage:"Use an indexed for loop (for Integer i = 0...) to access both lists."},{id:"tc3",description:"Uses containsKey or handles existing keys",pattern:"containsKey\\(|getOrDefault\\(",errorMessage:"Check if the territory already exists in the map before adding."},{id:"tc4",description:"Prints territory and revenue using the map",pattern:"System\\.debug\\([^)]*revenueByTerritory\\.get\\(",errorMessage:"Print each territory and its revenue using revenueByTerritory.get(key) inside a loop."}]},{id:"challenge-classes",lessonId:"apex-classes",title:"Account Credit Evaluator",description:"Build an Apex class that evaluates whether an Account qualifies for different credit tiers.",difficulty:"beginner",instructions:["Create a class called AccountCreditEvaluator","It should have properties: accountName (String), annualRevenue (Decimal), yearsInBusiness (Integer)","Add a constructor that accepts all three values","Add a method getCreditTier() that returns a String:",'  - "Platinum" if revenue >= 1M AND years >= 10','  - "Gold" if revenue >= 500K AND years >= 5','  - "Silver" if revenue >= 100K','  - "Standard" otherwise',"Add a method getSummary() that returns a formatted string","Create an instance and test it"],starterCode:`// TODO: Create AccountCreditEvaluator class with:
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
}`,solutionExplanation:"We create all Account objects first, then insert them all at once with a single DML statement. This is the bulkification pattern — one DML call for many records is far more efficient than one call per record. After insert, each account's Id is automatically populated by Salesforce.",testCases:[{id:"tc1",description:"Creates a List<Account>",pattern:"List<Account>",errorMessage:"Create a List<Account> to hold the accounts before inserting."},{id:"tc2",description:"Adds accounts to list",pattern:"\\.add\\(new\\s+Account|new\\s+Account\\(Name",errorMessage:"Add Account objects to your list."},{id:"tc3",description:"Uses single insert statement",pattern:"insert\\s+\\w+",errorMessage:'Use a single "insert list;" statement outside of any loop.'},{id:"tc4",description:"Wraps in try/catch",pattern:"try\\s*\\{|catch\\s*\\(",errorMessage:"Wrap the insert in a try/catch block to handle DmlException."},{id:"tc5",description:"Prints each account Name and Id after insert",pattern:"System\\.debug\\([^)]*\\.Name[^)]*\\.Id|System\\.debug\\([^)]*\\.Id[^)]*\\.Name",errorMessage:"Loop through the accounts after insert and print both a.Name and a.Id using System.debug()."}]},{id:"challenge-lwc-data-binding",lessonId:"lwc-data-binding",title:"Interactive Discount Calculator",description:"Build an LWC component that lets users enter a price and discount, then computes and displays the final price using getters.",difficulty:"intermediate",instructions:["Create an LWC component with properties: price (default 0), discountPct (default 0)","Add event handlers: handlePriceChange and handleDiscountChange that update the properties from input values",'Add a getter "finalPrice" that computes: price * (1 - discountPct / 100), rounded to 2 decimals','Add a getter "savings" that computes: price - finalPrice',"Display the original price, discount %, savings, and final price in the template","Use lightning-input components for the price and discount inputs"],starterCode:`// discountCalculator.js
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
}`,solutionExplanation:"In a before insert trigger, we iterate Trigger.new and directly set field values. No update DML is needed — the platform automatically saves these modified values when the transaction completes.",testCases:[{id:"tc1",description:"Declares trigger on Lead with before insert",pattern:"trigger\\s+\\w+\\s+on\\s+Lead\\s*\\(.*before\\s+insert",errorMessage:'Declare a trigger on the Lead object with the "before insert" event.'},{id:"tc2",description:"Loops through Trigger.new",pattern:"for\\s*\\(\\s*Lead\\s+\\w+\\s*:\\s*Trigger\\.new\\s*\\)",errorMessage:"Loop through Trigger.new using a for-each: for (Lead l : Trigger.new)"},{id:"tc3",description:"Sets LeadSource to Web when blank",pattern:"LeadSource\\s*=\\s*'Web'",errorMessage:"Set l.LeadSource = 'Web' when it is blank."},{id:"tc4",description:"Sets Rating to Cold when null",pattern:"Rating\\s*=\\s*'Cold'",errorMessage:"Set l.Rating = 'Cold' when it is null."},{id:"tc5",description:"Sets Company to Unknown when blank",pattern:"Company\\s*=\\s*'Unknown'",errorMessage:"Set l.Company = 'Unknown' when it is blank. No DML needed in a before trigger."}]},{id:"challenge-triggers-context",lessonId:"apex-triggers-context",title:"Opportunity Stage Change Tracker",description:"Write a trigger that detects when an Opportunity's StageName changes and stamps a custom field with the previous stage.",difficulty:"intermediate",instructions:["Create a before update trigger on Opportunity","Loop through Trigger.new","For each opportunity, get the old version from Trigger.oldMap","If StageName has changed, set the custom field Previous_Stage__c to the OLD stage name",'If StageName changed to "Closed Won", also set CloseDate to today if CloseDate is null'],starterCode:`trigger OpportunityTrigger on Opportunity (before update) {
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
}`,solutionExplanation:"We access each record's previous values via Trigger.oldMap.get(opp.Id). Comparing the new StageName to the old one detects changes. All field assignments happen directly on Trigger.new records — no extra DML needed in a before trigger.",testCases:[{id:"tc1",description:"Declares before update trigger on Opportunity",pattern:"trigger\\s+\\w+\\s+on\\s+Opportunity\\s*\\(.*before\\s+update",errorMessage:'Declare a trigger on Opportunity with "before update".'},{id:"tc2",description:"Uses Trigger.oldMap",pattern:"Trigger\\.oldMap",errorMessage:"Use Trigger.oldMap to access the previous record values."},{id:"tc3",description:"Compares StageName old vs new",pattern:"StageName\\s*!=",errorMessage:"Compare opp.StageName to old.StageName to detect a stage change."},{id:"tc4",description:"Sets Previous_Stage__c to the old stage value",pattern:"Previous_Stage__c\\s*=\\s*old\\.StageName",errorMessage:"Set opp.Previous_Stage__c = old.StageName to record the previous stage."}]},{id:"challenge-apex-exceptions",lessonId:"apex-exception-handling",title:"Build a Safe Account Lookup Service",description:"Write an AccountLookupService class that gracefully handles missing records and reports errors instead of crashing.",difficulty:"beginner",instructions:["Create a public class AccountLookupService","Add a custom inner exception class: AccountNotFoundException extending Exception","Create a static method getAccountName(Id accountId) that returns a String","Inside the method, use a try/catch block to query Account by Id","If the query returns no results (QueryException), throw AccountNotFoundException with a descriptive message",'Add a finally block that logs "Lookup complete" with System.debug',"Return the account Name on success"],starterCode:`public class AccountLookupService {

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
}`,hints:["@AuraEnabled(cacheable=true) must be on the Apex method for @wire to work","Import path: @salesforce/apex/ClassName.methodName","@wire(methodName, { paramName: '$property' }) binds the wire adapter","The $ prefix on '$recordId' makes it reactive — re-fetches when recordId changes"],solutionExplanation:"@AuraEnabled(cacheable=true) is required for @wire to call the method. The import path is @salesforce/apex/ClassName.methodName. The $ prefix on $recordId makes the wire reactive — it re-calls when recordId changes.",testCases:[{id:"tc1",description:"Apex method has @AuraEnabled(cacheable=true)",pattern:"@AuraEnabled\\(cacheable\\s*=\\s*true\\)",errorMessage:"Add @AuraEnabled(cacheable=true) to the Apex method."},{id:"tc2",description:"Apex method queries Contact",pattern:"SELECT.*FROM\\s+Contact\\s+WHERE\\s+AccountId",errorMessage:"Query Contact records filtering by AccountId = :accountId."},{id:"tc3",description:"LWC imports the Apex method",pattern:"import.*getContactsByAccount.*from\\s+'@salesforce/apex/ContactListService",errorMessage:"Import getContactsByAccount from '@salesforce/apex/ContactListService.getContactsByAccount'"},{id:"tc4",description:"Uses @wire with reactive accountId",pattern:"@wire\\s*\\(\\s*getContactsByAccount.*\\$recordId",errorMessage:"Use @wire(getContactsByAccount, { accountId: '$recordId' }) contacts;"},{id:"tc5",description:"Has hasContacts getter",pattern:"get\\s+hasContacts",errorMessage:"Add a getter hasContacts that returns true when contacts.data has records."}]}],Od=e=>Nd.find(t=>t.id===e);function Pm(){const{progress:e,getLevel:t,resetProgress:n}=Vs(),{level:r,title:s,next:a}=t(),o=e.completedLessons.length,l=e.completedChallenges.length,c=Qe.length,u=Nd.length,h=Qe.find(x=>!e.completedLessons.includes(x.id)),g=Qe.filter(x=>e.completedLessons.includes(x.id)).slice(-3).reverse(),m=a===1/0?e.xp:a,b=a===1/0?100:Math.round(e.xp/m*100),v=[{id:"apex-basics",label:"Apex Basics",path:"/apex",color:"blue",colorClass:"bg-sf-blue",icon:i.jsx(ke,{className:"w-4 h-4"})},{id:"soql",label:"SOQL",path:"/soql",color:"green",colorClass:"bg-sf-teal",icon:i.jsx(In,{className:"w-4 h-4"})},{id:"dml",label:"DML",path:"/apex",color:"orange",colorClass:"bg-sf-orange",icon:i.jsx(Hl,{className:"w-4 h-4"})}],y=[{to:"/soql",label:"SOQL Explorer",color:"text-sf-teal bg-teal-50 hover:bg-teal-100"},{to:"/debug",label:"Debug Lab",color:"text-sf-orange bg-orange-50 hover:bg-orange-100"},{to:"/missions",label:"Missions",color:"text-sf-purple bg-purple-50 hover:bg-purple-100"},{to:"/about",label:"About",color:"text-gray-600 bg-gray-50 hover:bg-gray-100"}];return i.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[i.jsxs("div",{className:"flex items-center justify-between mb-8",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:"My Dashboard"}),i.jsx("p",{className:"text-gray-500 text-sm mt-0.5",children:"Track your Salesforce learning journey"})]}),i.jsxs("button",{onClick:()=>{confirm("Reset all progress? This cannot be undone.")&&n()},className:"text-xs text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50",children:[i.jsx(vo,{className:"w-3.5 h-3.5"})," Reset progress"]})]}),i.jsxs("div",{className:"gradient-hero text-white rounded-2xl p-6 mb-6 relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-16 translate-x-16"}),i.jsxs("div",{className:"relative flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"text-blue-200 text-xs font-medium uppercase tracking-wider mb-1",children:"Current Level"}),i.jsxs("div",{className:"text-2xl font-extrabold",children:["Level ",r,": ",s]}),i.jsxs("div",{className:"flex items-center gap-3 mt-4 mb-2 text-sm text-blue-200",children:[i.jsxs("span",{className:"font-semibold text-white",children:[e.xp," XP"]}),a!==1/0&&i.jsxs("span",{children:["→ ",a," XP for Level ",r+1]})]}),i.jsx("div",{className:"w-full max-w-xs bg-white/20 rounded-full h-2 mt-1",children:i.jsx("div",{className:"bg-yellow-400 h-2 rounded-full transition-all duration-700",style:{width:`${b}%`}})})]}),i.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20",children:i.jsx(qe,{className:"w-7 h-7 text-yellow-300"})})]})]}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[{icon:i.jsx(rt,{className:"w-5 h-5 text-sf-blue"}),label:"Lessons Done",value:o,total:c},{icon:i.jsx(ke,{className:"w-5 h-5 text-violet-500"}),label:"Challenges",value:l,total:u},{icon:i.jsx(qe,{className:"w-5 h-5 text-yellow-500"}),label:"Total XP",value:e.xp,total:null},{icon:i.jsx(Ed,{className:"w-5 h-5 text-sf-purple"}),label:"Level",value:r,total:6}].map(x=>i.jsxs("div",{className:"card text-center p-5",children:[i.jsx("div",{className:"flex justify-center mb-2",children:x.icon}),i.jsx("div",{className:"text-2xl font-extrabold text-gray-900",children:x.value}),x.total!==null&&i.jsxs("div",{className:"text-xs text-gray-400",children:["of ",x.total]}),i.jsx("div",{className:"text-xs text-gray-500 mt-1",children:x.label}),x.total!==null&&i.jsx("div",{className:"mt-3",children:i.jsx(Ts,{value:x.value,max:x.total,size:"sm"})})]},x.label))}),i.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(rt,{className:"w-5 h-5 text-sf-blue"})," Continue Learning"]}),h?i.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-4",children:[i.jsx("div",{className:"text-xs font-semibold text-sf-blue uppercase tracking-wider mb-1",children:"Up Next"}),i.jsx("div",{className:"font-bold text-gray-900",children:h.title}),i.jsx("div",{className:"text-sm text-gray-500 mt-1 mb-3",children:h.description}),i.jsxs(B,{to:`/lesson/${h.id}`,className:"btn-primary text-xs px-4 py-2",children:["Start Lesson ",i.jsx(Gn,{className:"w-3.5 h-3.5"})]})]}):i.jsxs("div",{className:"success-box mb-4",children:[i.jsx("p",{className:"font-semibold text-emerald-800",children:"All lessons complete!"}),i.jsx(B,{to:"/missions",className:"btn-primary mt-3 text-xs inline-flex",children:"View Missions"})]}),g.length>0&&i.jsxs("div",{className:"space-y-1",children:[i.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",children:"Recently Completed"}),g.map(x=>i.jsxs(B,{to:`/lesson/${x.id}`,className:"flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group",children:[i.jsx(xo,{className:"w-4 h-4 text-emerald-500 shrink-0"}),i.jsx("span",{className:"text-sm text-gray-700 group-hover:text-gray-900",children:x.title}),e.quizScores[x.id]!==void 0&&i.jsxs("span",{className:"ml-auto text-xs text-gray-400",children:[e.quizScores[x.id],"%"]})]},x.id))]})]}),i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(Hl,{className:"w-5 h-5 text-sf-blue"})," Module Progress"]}),i.jsx("div",{className:"space-y-5",children:v.map(x=>{const p=Qe.filter(S=>S.moduleId===x.id),d=p.filter(S=>e.completedLessons.includes(S.id)).length,f=p.length||1;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs(B,{to:x.path,className:"flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-sf-blue transition-colors",children:[i.jsx("span",{className:`w-7 h-7 rounded-lg ${x.colorClass} text-white flex items-center justify-center`,children:x.icon}),x.label]}),i.jsxs("span",{className:"text-xs font-medium text-gray-400",children:[d,"/",p.length]})]}),i.jsx(Ts,{value:d,max:f,color:x.color,size:"sm"})]},x.id)})}),i.jsx("div",{className:"divider"}),i.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"Quick Links"}),i.jsx("div",{className:"grid grid-cols-2 gap-2",children:y.map(x=>i.jsx(B,{to:x.to,className:`text-center py-3 px-2 rounded-xl text-xs font-semibold transition-colors ${x.color}`,children:x.label},x.to))})]})]}),e.badges.length>0&&i.jsxs("div",{className:"card",children:[i.jsxs("h2",{className:"font-bold text-lg flex items-center gap-2 mb-4",children:[i.jsx(qe,{className:"w-5 h-5 text-yellow-500"})," Earned Badges"]}),i.jsx("div",{className:"flex flex-wrap gap-3",children:e.badges.map(x=>i.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl px-4 py-2.5",children:[i.jsx(qe,{className:"w-4 h-4 text-yellow-500"}),i.jsx("span",{className:"text-sm font-semibold text-yellow-800 capitalize",children:x.replace(/-/g," ")})]},x))})]})]})}function qm({difficulty:e}){const t={beginner:{label:"Beginner",class:"bg-green-100 text-green-700"},intermediate:{label:"Intermediate",class:"bg-yellow-100 text-yellow-700"},advanced:{label:"Advanced",class:"bg-red-100 text-red-700"}},{label:n,class:r}=t[e]||t.beginner;return i.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${r}`,children:n})}function Bm({lesson:e,isCompleted:t,isLocked:n=!1,quizScore:r}){const s=i.jsx("div",{className:`bg-white rounded-xl border-2 p-5 transition-all duration-200 ${n?"border-gray-100 opacity-60 cursor-not-allowed":t?"border-green-200 hover:border-green-400 hover:shadow-sf-lg cursor-pointer":"border-gray-100 hover:border-sf-blue hover:shadow-sf-lg cursor-pointer"}`,children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex-shrink-0 mt-0.5",children:n?i.jsx("div",{className:"w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center",children:i.jsx(bm,{size:16,className:"text-sf-gray-5"})}):t?i.jsx("div",{className:"w-9 h-9 rounded-full bg-green-100 flex items-center justify-center",children:i.jsx(Ne,{size:18,className:"text-sf-green"})}):i.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center",children:i.jsx(rt,{size:16,className:"text-sf-blue"})})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between gap-2",children:[i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold text-sm ${n?"text-sf-gray-5":"text-sf-gray-9"}`,children:e.title}),i.jsx("p",{className:`text-xs mt-0.5 ${n?"text-sf-gray-4":"text-sf-gray-6"}`,children:e.subtitle})]}),!n&&i.jsx(wt,{size:16,className:"text-sf-gray-4 flex-shrink-0 mt-0.5"})]}),i.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[i.jsx(qm,{difficulty:e.difficulty}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(Qs,{size:11}),e.duration," min"]}),t&&r!==void 0&&i.jsxs("span",{className:"text-xs text-sf-green font-medium",children:["Quiz: ",r,"%"]})]})]})]})});return n?s:i.jsx(B,{to:`/lesson/${e.id}`,className:"block",children:s})}function Fm(){const e=w.useContext(bo),{progress:t}=e,n=Qe.filter(c=>c.moduleId==="apex-basics"),r=Qe.filter(c=>c.moduleId==="soql"),s=Qe.filter(c=>c.moduleId==="dml"),a=[...n,...r,...s],o=a.filter(c=>t.completedLessons.includes(c.id)).length,l=a.reduce((c,u)=>c+u.duration,0);return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sf-blue text-sm mb-2",children:[i.jsx(rt,{size:14}),i.jsx(B,{to:"/dashboard",className:"hover:underline",children:"Dashboard"}),i.jsx(wt,{size:12,className:"text-sf-gray-4"}),i.jsx("span",{children:"Apex Learning Path"})]}),i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:"Salesforce Apex Learning Path"}),i.jsx("p",{className:"text-sf-gray-6 mt-1 max-w-2xl",children:"Master Apex from the ground up — from variables and data types to SOQL queries and DML operations."}),i.jsxs("div",{className:"flex items-center gap-6 mt-4",children:[i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(rt,{size:15})," ",a.length," lessons"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(Qs,{size:15})," ~",Math.round(l/60)," hours"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(Ne,{size:15,className:"text-sf-green"})," ",o," completed"]}),i.jsxs("span",{className:"flex items-center gap-1.5 text-sm text-sf-gray-6",children:[i.jsx(ke,{size:15})," ",a.filter(c=>c.challengeId).length," challenges"]})]}),i.jsx(Ts,{value:o,max:a.length,className:"mt-3 max-w-xs",showLabel:!0,label:"Overall progress"}),i.jsxs("div",{className:"flex items-center gap-3 mt-4 flex-wrap",children:[i.jsxs("div",{className:"flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:[i.jsx(In,{size:15,className:"text-yellow-500"}),i.jsxs("span",{className:"text-sm font-bold text-yellow-700",children:[t.xp," XP"]})]}),t.completedChallenges.length>0&&i.jsxs("div",{className:"flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2",children:[i.jsx(qe,{size:15,className:"text-green-600"}),i.jsxs("span",{className:"text-sm font-bold text-green-700",children:[t.completedChallenges.length," challenge",t.completedChallenges.length!==1?"s":""," cleared"]})]}),t.streakDays>0&&i.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2",children:[i.jsx("span",{className:"text-base",children:"🔥"}),i.jsxs("span",{className:"text-sm font-bold text-orange-700",children:[t.streakDays," day streak"]})]})]})]}),i.jsx(Aa,{title:"Module 1: Apex Fundamentals",description:"The essential building blocks of Apex programming.",lessons:n,progress:t,color:"bg-sf-blue"}),i.jsx(Aa,{title:"Module 2: SOQL — Querying Data",description:"Learn to retrieve Salesforce records with precision.",lessons:r,progress:t,color:"bg-sf-teal"}),i.jsx(Aa,{title:"Module 3: DML — Writing Data",description:"Create, update, and delete Salesforce records safely.",lessons:s,progress:t,color:"bg-sf-green"}),i.jsxs("div",{className:"card border-2 border-dashed border-gray-200 text-center py-8 mt-6",children:[i.jsx("div",{className:"text-3xl mb-3",children:"🚀"}),i.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-1",children:"More modules coming soon"}),i.jsx("p",{className:"text-sm text-sf-gray-5",children:"Apex Triggers, Lightning Web Components, and Integrations"})]})]})}function Aa({title:e,description:t,lessons:n,progress:r,color:s}){if(n.length===0)return null;const a=n.filter(o=>r.completedLessons.includes(o.id)).length;return i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[i.jsx("div",{className:`w-1 h-full min-h-[3rem] rounded-full ${s} flex-shrink-0 mt-1`,style:{width:4}}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h2",{className:"font-bold text-sf-gray-9",children:e}),i.jsxs("span",{className:"text-sm text-sf-gray-5",children:[a,"/",n.length]})]}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:t}),i.jsx(Ts,{value:a,max:n.length,size:"sm",className:"mt-2 max-w-[200px]"})]})]}),i.jsx("div",{className:"space-y-3 pl-4",children:n.map((o,l)=>{const c=r.completedLessons.includes(o.id),u=l>0&&!r.completedLessons.includes(n[l-1].id)&&!c;return i.jsx(Bm,{lesson:o,isCompleted:c,isLocked:u,quizScore:r.quizScores[o.id]},o.id)})})]})}function Um({questions:e,onComplete:t}){const[n,r]=w.useState(0),[s,a]=w.useState(null),[o,l]=w.useState(!1),[c,u]=w.useState([]),[h,g]=w.useState(!1),m=e[n],b=s===(m==null?void 0:m.correct),v=p=>{if(o)return;a(p),l(!0);const d=p===m.correct;u(f=>[...f,d])},y=()=>{if(n<e.length-1)r(p=>p+1),a(null),l(!1);else{const p=c.filter(Boolean).length+(s===(m==null?void 0:m.correct)?1:0);g(!0),t(p,e.length)}},x=()=>{r(0),a(null),l(!1),u([]),g(!1)};if(h){const p=c.filter(Boolean).length,d=Math.round(p/e.length*100);return i.jsxs("div",{className:"text-center py-8",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4",children:i.jsx(qe,{size:28,className:"text-yellow-600"})}),i.jsx("h3",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Quiz Complete!"}),i.jsxs("p",{className:"text-sf-gray-6 mb-1",children:["You got ",i.jsxs("span",{className:"font-semibold text-sf-gray-9",children:[p," of ",e.length]})," correct"]}),i.jsxs("div",{className:`text-3xl font-bold mt-4 mb-6 ${d>=80?"text-sf-green":d>=60?"text-yellow-500":"text-sf-red"}`,children:[d,"%"]}),d>=80?i.jsx("p",{className:"text-sf-green font-medium mb-6",children:"Excellent work! You've mastered this material."}):d>=60?i.jsx("p",{className:"text-yellow-600 font-medium mb-6",children:"Good effort! Review the explanations to strengthen your understanding."}):i.jsx("p",{className:"text-sf-red font-medium mb-6",children:"Keep studying! Review the lesson and try again."}),i.jsx("button",{onClick:x,className:"btn-secondary",children:"Retake Quiz"})]})}return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("span",{className:"text-sm text-sf-gray-6",children:["Question ",n+1," of ",e.length]}),i.jsx("div",{className:"flex gap-1",children:e.map((p,d)=>i.jsx("div",{className:`w-2 h-2 rounded-full ${d<c.length?c[d]?"bg-sf-green":"bg-sf-red":d===n?"bg-sf-blue":"bg-gray-200"}`},d))})]}),i.jsx("p",{className:"text-sf-gray-9 font-medium mb-4 leading-relaxed",children:m.question}),i.jsx("div",{className:"space-y-3 mb-4",children:m.options.map((p,d)=>{let f="w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ";return o?d===m.correct?f+="border-green-400 bg-green-50 text-sf-green":d===s&&!b?f+="border-red-400 bg-red-50 text-sf-red":f+="border-gray-100 text-sf-gray-5 cursor-not-allowed":f+="border-gray-200 hover:border-sf-blue hover:bg-blue-50 text-sf-gray-8 cursor-pointer",i.jsx("button",{className:f,onClick:()=>v(d),children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0",style:{borderColor:o&&d===m.correct?"#2E844A":o&&d===s?"#EA001E":"#C9C7C5"},children:String.fromCharCode(65+d)}),o&&d===m.correct&&i.jsx(Ne,{size:15,className:"text-sf-green flex-shrink-0"}),o&&d===s&&!b&&i.jsx(Sn,{size:15,className:"text-sf-red flex-shrink-0"}),i.jsx("span",{children:p})]})},d)})}),o&&i.jsx("div",{className:`p-4 rounded-lg mb-4 text-sm ${b?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:i.jsxs("div",{className:"flex items-start gap-2",children:[b?i.jsx(Ne,{size:16,className:"text-sf-green mt-0.5 flex-shrink-0"}):i.jsx(Sn,{size:16,className:"text-sf-red mt-0.5 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("p",{className:`font-semibold mb-1 ${b?"text-sf-green":"text-sf-red"}`,children:b?"Correct!":"Not quite."}),i.jsx("p",{className:"text-sf-gray-7",children:m.explanation})]})]})}),o&&i.jsxs("button",{onClick:y,className:"btn-primary flex items-center gap-2",children:[n<e.length-1?"Next Question":"See Results",i.jsx(wt,{size:16})]})]})}function Wm(e,t){try{if(t.outputPatterns&&t.outputPatterns.length>0){const s=t.outputPatterns.some(a=>new RegExp(a,"im").test(e));return{passed:s,message:s?"Passed":t.errorMessage}}const r=new RegExp(t.pattern,"im").test(e);return{passed:r,message:r?"Passed":t.errorMessage}}catch{return{passed:!1,message:"Test case error"}}}const Hm={beginner:{label:"Beginner",color:"text-green-600 bg-green-50 border-green-200",xp:150},intermediate:{label:"Intermediate",color:"text-yellow-600 bg-yellow-50 border-yellow-200",xp:200},advanced:{label:"Advanced",color:"text-red-600 bg-red-50 border-red-200",xp:300}};function Dd({challenge:e,isCompleted:t,onComplete:n}){const[r,s]=w.useState(e.starterCode),[a,o]=w.useState(-1),[l,c]=w.useState(!1),[u,h]=w.useState(null),[g,m]=w.useState(!1),[b,v]=w.useState(!1),[y,x]=w.useState(0),[p,d]=w.useState(!1),f=Hm[e.difficulty],S=(u==null?void 0:u.every(D=>D.passed))??!1,A=(u==null?void 0:u.filter(D=>D.passed).length)??0,L=()=>{const D=e.testCases.map((ce,Nt)=>({...Wm(r,ce),tcIndex:Nt}));h(D),m(!0),x(0);const E=D.every(ce=>ce.passed);d(E),E&&(n(r),t||(v(!0),setTimeout(()=>v(!1),3e3)))},N=()=>{s(e.starterCode),h(null),m(!1),o(-1),c(!1),v(!1),d(!1)},O=()=>{o(D=>Math.min(D+1,e.hints.length-1))};return i.jsxs("div",{className:"space-y-4",children:[b&&i.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:i.jsxs("div",{className:"xp-burst-container",children:[i.jsxs("div",{className:"xp-burst-badge",children:[i.jsx(qe,{className:"w-8 h-8 text-yellow-400 mb-1"}),i.jsxs("div",{className:"text-2xl font-black text-yellow-300",children:["+",f.xp," XP"]}),i.jsx("div",{className:"text-sm text-yellow-200 font-semibold",children:"Challenge Complete!"})]}),[...Array(12)].map((D,E)=>i.jsx("div",{className:"confetti-dot",style:{"--angle":`${E*30}deg`,"--delay":`${E*.05}s`,"--color":["#f59e0b","#10b981","#3b82f6","#ec4899","#8b5cf6"][E%5]}},E))]})}),i.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 p-4 bg-gradient-to-r from-sf-blue/5 to-sf-teal/5 border border-sf-blue/20 rounded-xl",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-sf-blue flex items-center justify-center shadow",children:i.jsx(wr,{className:"w-5 h-5 text-white"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[i.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sf-blue",children:"Coding Mission"}),i.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full border ${f.color}`,children:f.label})]}),i.jsxs("div",{className:"text-sm text-sf-gray-6",children:[e.testCases.length," test cases to pass"]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:[i.jsx(In,{className:"w-4 h-4 text-yellow-500"}),i.jsxs("span",{className:"text-sm font-bold text-yellow-700",children:["+",f.xp," XP"]}),(t||p)&&i.jsx(Ne,{className:"w-4 h-4 text-green-500 ml-1"})]})]}),i.jsxs("div",{className:"flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs text-yellow-700",children:[i.jsx($s,{size:14,className:"flex-shrink-0 mt-0.5"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Simulated validation."})," Code patterns are checked against expected structure — real Apex runs in a Salesforce org."]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-9 mb-2",children:"Instructions"}),i.jsx("ol",{className:"space-y-1",children:e.instructions.map((D,E)=>i.jsxs("li",{className:"text-sm text-sf-gray-7 flex items-start gap-2",children:[i.jsx("span",{className:"text-sf-blue font-bold flex-shrink-0 w-5 h-5 rounded-full bg-sf-blue/10 flex items-center justify-center text-xs",children:E+1}),D]},E))})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"Your Code"}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("button",{onClick:N,className:"flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors",children:[i.jsx(vo,{size:12}),"Reset"]})})]}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-10 bg-sf-gray-9 rounded-tl-lg rounded-bl-lg flex flex-col items-end pr-2 pt-4 select-none",children:r.split(`
`).map((D,E)=>i.jsx("div",{className:"text-sf-gray-5 text-xs leading-[1.7] font-mono",children:E+1},E))}),i.jsx("textarea",{value:r,onChange:D=>s(D.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg pl-12 pr-4 pt-4 pb-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue",rows:Math.max(10,r.split(`
`).length+2),spellCheck:!1,autoComplete:"off",autoCorrect:"off"})]})]}),i.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[i.jsxs("button",{onClick:L,className:"btn-primary flex items-center gap-2",children:[i.jsx(Td,{size:15}),g?"Resubmit":"Run Tests"]}),a<e.hints.length-1&&i.jsxs("button",{onClick:O,className:"flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors",children:[i.jsx(wn,{size:14}),a===-1?"Show Hint":"Next Hint"]}),i.jsxs("button",{onClick:()=>c(!l),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[l?i.jsx(Ad,{size:14}):i.jsx(Is,{size:14}),l?"Hide":"View"," Solution"]})]}),g&&u&&i.jsxs("div",{className:"border border-gray-200 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:`px-4 py-3 flex items-center justify-between ${S?"bg-green-50 border-b border-green-200":"bg-red-50 border-b border-red-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[S?i.jsx(Ne,{size:18,className:"text-green-600"}):i.jsx(Sn,{size:18,className:"text-red-500"}),i.jsx("span",{className:`font-bold ${S?"text-green-700":"text-red-600"}`,children:S?"Accepted":"Wrong Answer"})]}),i.jsxs("span",{className:"text-sm text-sf-gray-6",children:[A," / ",u.length," tests passed"]})]}),i.jsx("div",{className:"flex border-b border-gray-200 bg-gray-50 overflow-x-auto",children:u.map((D,E)=>i.jsxs("button",{onClick:()=>x(E),className:`px-4 py-2 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${y===E?"border-sf-blue text-sf-blue bg-white":"border-transparent text-sf-gray-5 hover:text-sf-gray-7"}`,children:[i.jsx("span",{className:`w-2 h-2 rounded-full ${D.passed?"bg-green-500":"bg-red-500"}`}),"Case ",E+1]},E))}),u[y]&&(()=>{const D=u[y],E=e.testCases[y];return i.jsxs("div",{className:"p-4 space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[D.passed?i.jsx(Ne,{size:14,className:"text-green-500"}):i.jsx(Sn,{size:14,className:"text-red-500"}),i.jsx("span",{className:`text-sm font-semibold ${D.passed?"text-green-700":"text-red-600"}`,children:E.description})]}),E.inputData&&i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Input"}),i.jsx("pre",{className:"bg-gray-900 text-gray-100 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:E.inputData})]}),E.expectedOutput&&i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide",children:"Expected Output"}),i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono",children:E.expectedOutput})]}),!D.passed&&i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg px-3 py-2",children:[i.jsx("div",{className:"text-xs font-semibold text-red-600 mb-0.5 uppercase tracking-wide",children:"Hint"}),i.jsx("p",{className:"text-sm text-red-700",children:D.message})]}),D.passed&&i.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg px-3 py-2",children:i.jsx("p",{className:"text-sm text-green-700 font-medium",children:"All test conditions met."})})]})})()]}),a>=0&&i.jsx("div",{className:"space-y-2",children:e.hints.slice(0,a+1).map((D,E)=>i.jsx("div",{className:"hint-box",children:i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx(wn,{size:15,className:"text-yellow-600 flex-shrink-0 mt-0.5"}),i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsxs("strong",{children:["Hint ",E+1,":"]})," ",D]})]})},E))}),l&&i.jsxs("div",{className:"border border-sf-gray-3 rounded-lg overflow-hidden",children:[i.jsx("div",{className:"bg-sf-gray-9 px-4 py-2 flex items-center justify-between",children:i.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Solution"})}),i.jsx("pre",{className:"code-block rounded-none text-sm overflow-x-auto",children:i.jsx("code",{children:e.solution})}),i.jsx("div",{className:"bg-blue-50 border-t border-blue-100 p-4",children:i.jsxs("p",{className:"text-sm text-sf-gray-7",children:[i.jsx("strong",{className:"text-sf-gray-9",children:"Explanation:"})," ",e.solutionExplanation]})})]}),p&&i.jsxs("div",{className:"success-box flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0",children:i.jsx(qe,{size:20,className:"text-yellow-500"})}),i.jsxs("div",{children:[i.jsxs("p",{className:"text-sf-green font-semibold text-sm",children:["Challenge Complete! +",f.xp," XP earned"]}),i.jsx("p",{className:"text-green-700 text-xs",children:"Your submission has been saved. Keep going!"})]})]})]})}function $l(e){return e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>")}function zm({block:e}){const t={note:i.jsx(Ld,{size:16,className:"text-sf-blue flex-shrink-0 mt-0.5"}),warning:i.jsx($s,{size:16,className:"text-orange-500 flex-shrink-0 mt-0.5"}),tip:i.jsx(wn,{size:16,className:"text-yellow-500 flex-shrink-0 mt-0.5"})},n={note:"note-box",warning:"warning-box",tip:"hint-box"};return e.type==="explanation"?i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-3",children:e.title}),i.jsx("p",{className:"text-sf-gray-7 leading-relaxed",dangerouslySetInnerHTML:{__html:$l(e.text)}})]}):e.type==="example"?i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),e.text&&i.jsx("p",{className:"text-sf-gray-7 mb-3 leading-relaxed",children:e.text}),e.code&&i.jsxs("div",{className:"rounded-xl overflow-hidden border border-gray-200",children:[i.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),i.jsx("span",{className:"text-sf-gray-5 text-xs ml-2 font-mono",children:"Apex"})]}),i.jsx("pre",{className:"code-block rounded-none overflow-x-auto",children:i.jsx("code",{children:e.code})}),e.output&&i.jsxs("div",{className:"bg-gray-800 border-t border-gray-700 px-4 py-3",children:[i.jsx("div",{className:"text-xs text-sf-gray-5 mb-1 font-mono",children:"// Output:"}),i.jsx("pre",{className:"text-green-400 text-sm font-mono whitespace-pre-wrap",children:e.output})]})]})]}):e.type==="note"||e.type==="warning"||e.type==="tip"?i.jsx("div",{className:`${n[e.type]||"note-box"} lesson-section`,children:i.jsxs("div",{className:"flex items-start gap-2",children:[t[e.type],i.jsxs("div",{children:[e.title&&i.jsx("p",{className:"font-semibold text-sm mb-1",children:e.title}),i.jsx("p",{className:"text-sm leading-relaxed",dangerouslySetInnerHTML:{__html:$l(e.text)}})]})]})}):i.jsxs("div",{className:"lesson-section",children:[e.title&&i.jsx("h3",{className:"text-lg font-semibold text-sf-gray-9 mb-2",children:e.title}),i.jsx("p",{className:"text-sf-gray-7",children:e.text})]})}function Qm(){const{lessonId:e}=yd();fd();const t=w.useContext(bo),{progress:n,completeLesson:r,recordQuizScore:s,isLessonCompleted:a}=t,[o,l]=w.useState("lesson"),[c,u]=w.useState(!1),h=_m(e||"");if(!h)return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[i.jsx("h2",{className:"text-xl font-bold text-sf-gray-9 mb-2",children:"Lesson not found"}),i.jsx(B,{to:"/apex",className:"text-sf-blue hover:underline",children:"Back to lessons"})]});const g=h.challengeId?Od(h.challengeId):null,m=a(h.id),b=!!n.quizScores[h.id],v=Qe,y=v.findIndex(A=>A.id===h.id),x=y>0?v[y-1]:null,p=y<v.length-1?v[y+1]:null,d=()=>{r(h.id)},f=(A,L)=>{s(h.id,A,L),u(!0),A===L&&r(h.id)},S=[{id:"lesson",label:"Lesson",icon:rt},{id:"quiz",label:`Quiz (${h.quiz.length}Q)`,icon:Ne},...g?[{id:"challenge",label:"Challenge",icon:ke}]:[]];return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"flex items-center gap-1 text-sm text-sf-gray-5 mb-6",children:[i.jsx(B,{to:"/apex",className:"hover:text-sf-blue",children:"Apex Path"}),i.jsx(wt,{size:13}),i.jsx("span",{className:"text-sf-gray-7",children:h.title})]}),i.jsxs("div",{className:"card mb-6",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsxs("span",{className:"text-xs font-medium text-sf-blue bg-blue-50 px-2 py-0.5 rounded",children:["Lesson ",h.order]}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(Qs,{size:11})," ",h.duration," min"]}),m&&i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-green font-medium",children:[i.jsx(Ne,{size:12})," Completed"]})]}),i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9",children:h.title}),i.jsx("p",{className:"text-sf-gray-6 mt-1",children:h.description})]}),!m&&i.jsxs("button",{onClick:d,className:"flex-shrink-0 flex items-center gap-1.5 text-sm text-sf-gray-6 border border-gray-200 hover:border-sf-green hover:text-sf-green px-3 py-1.5 rounded-lg transition-colors",children:[i.jsx(Ne,{size:14}),"Mark done"]})]}),i.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[i.jsx("p",{className:"text-xs font-semibold text-sf-gray-7 mb-2",children:"You will learn:"}),i.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1",children:h.learningObjectives.map((A,L)=>i.jsxs("li",{className:"flex items-start gap-1.5 text-xs text-sf-gray-6",children:[i.jsx("span",{className:"text-sf-blue mt-0.5",children:"•"}),A]},L))})]})]}),i.jsx("div",{className:"flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit",children:S.map(({id:A,label:L,icon:N})=>i.jsxs("button",{onClick:()=>l(A),className:`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${o===A?"bg-white text-sf-gray-9 shadow-sm":"text-sf-gray-6 hover:text-sf-gray-9"}`,children:[i.jsx(N,{size:14}),L,A==="quiz"&&b&&i.jsxs("span",{className:"text-xs text-sf-green ml-1",children:[n.quizScores[h.id],"%"]})]},A))}),o==="lesson"&&i.jsxs("div",{className:"card",children:[h.content.map((A,L)=>i.jsx(zm,{block:A},L)),i.jsx("div",{className:"pt-6 border-t border-gray-100 mt-6",children:i.jsxs("button",{onClick:()=>l("quiz"),className:"btn-primary flex items-center gap-2",children:["Take the Quiz",i.jsx(wt,{size:16})]})})]}),o==="quiz"&&i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-lg font-bold text-sf-gray-9 mb-4",children:"Knowledge Check"}),i.jsx(Um,{questions:h.quiz,lessonId:h.id,onComplete:f}),c&&g&&i.jsx("div",{className:"mt-6 pt-6 border-t border-gray-100",children:i.jsxs("button",{onClick:()=>l("challenge"),className:"btn-primary flex items-center gap-2",children:["Try the Challenge",i.jsx(ke,{size:16})]})})]}),o==="challenge"&&g&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"flex items-start justify-between mb-4",children:i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold text-sf-gray-9",children:g.title}),i.jsx("p",{className:"text-sf-gray-6 text-sm mt-1",children:g.description})]})}),i.jsx(Dd,{challenge:g,onComplete:A=>t.completeChallenge(g.id,A),isCompleted:t.isChallengeCompleted(g.id),savedCode:n.challengeSubmissions[g.id]})]}),i.jsxs("div",{className:"flex items-center justify-between mt-6",children:[x?i.jsxs(B,{to:`/lesson/${x.id}`,className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue transition-colors",children:[i.jsx(mm,{size:16}),x.title]}):i.jsx("div",{}),p&&i.jsxs(B,{to:`/lesson/${p.id}`,className:"flex items-center gap-2 text-sm text-sf-blue font-medium hover:text-sf-blue-dark",children:[p.title,i.jsx(wt,{size:16})]})]})]})}const kd=[{name:"Account",label:"Account",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Industry",type:"string"},{name:"AnnualRevenue",type:"number"},{name:"NumberOfEmployees",type:"number"},{name:"BillingCity",type:"string"},{name:"BillingState",type:"string"},{name:"Phone",type:"string"},{name:"Type",type:"string"}],records:[{Id:"001A000001",Name:"TechVentures Inc",Industry:"Technology",AnnualRevenue:5e6,NumberOfEmployees:250,BillingCity:"San Francisco",BillingState:"CA",Phone:"415-555-0101",Type:"Customer"},{Id:"001A000002",Name:"HealthFirst Corp",Industry:"Healthcare",AnnualRevenue:8e6,NumberOfEmployees:500,BillingCity:"Boston",BillingState:"MA",Phone:"617-555-0102",Type:"Customer"},{Id:"001A000003",Name:"Capital Group",Industry:"Finance",AnnualRevenue:12e6,NumberOfEmployees:800,BillingCity:"New York",BillingState:"NY",Phone:"212-555-0103",Type:"Customer"},{Id:"001A000004",Name:"RetailMax",Industry:"Retail",AnnualRevenue:3e6,NumberOfEmployees:120,BillingCity:"Chicago",BillingState:"IL",Phone:"312-555-0104",Type:"Partner"},{Id:"001A000005",Name:"ManuPro Industries",Industry:"Manufacturing",AnnualRevenue:65e5,NumberOfEmployees:400,BillingCity:"Detroit",BillingState:"MI",Phone:"313-555-0105",Type:"Customer"},{Id:"001A000006",Name:"DataStream Analytics",Industry:"Technology",AnnualRevenue:25e5,NumberOfEmployees:80,BillingCity:"Austin",BillingState:"TX",Phone:"512-555-0106",Type:"Prospect"},{Id:"001A000007",Name:"EduLearn Systems",Industry:"Education",AnnualRevenue:12e5,NumberOfEmployees:60,BillingCity:"Seattle",BillingState:"WA",Phone:"206-555-0107",Type:"Customer"},{Id:"001A000008",Name:"GreenPath Energy",Industry:"Energy",AnnualRevenue:9e6,NumberOfEmployees:350,BillingCity:"Houston",BillingState:"TX",Phone:"832-555-0108",Type:"Customer"},{Id:"001A000009",Name:"Apex Consulting",Industry:"Technology",AnnualRevenue:4e6,NumberOfEmployees:180,BillingCity:"Denver",BillingState:"CO",Phone:"303-555-0109",Type:"Partner"},{Id:"001A000010",Name:"MedDevice Corp",Industry:"Healthcare",AnnualRevenue:15e6,NumberOfEmployees:1200,BillingCity:"Minneapolis",BillingState:"MN",Phone:"612-555-0110",Type:"Customer"}]},{name:"Contact",label:"Contact",fields:[{name:"Id",type:"id"},{name:"FirstName",type:"string"},{name:"LastName",type:"string"},{name:"Email",type:"string"},{name:"Title",type:"string"},{name:"Department",type:"string"},{name:"Phone",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"003A000001",FirstName:"Sarah",LastName:"Chen",Email:"sarah.chen@techventures.com",Title:"CTO",Department:"Engineering",Phone:"415-555-1001",AccountId:"001A000001"},{Id:"003A000002",FirstName:"Michael",LastName:"Torres",Email:"mtorres@healthfirst.com",Title:"CFO",Department:"Finance",Phone:"617-555-1002",AccountId:"001A000002"},{Id:"003A000003",FirstName:"Amanda",LastName:"Johnson",Email:"ajohnson@capitalgroup.com",Title:"VP Sales",Department:"Sales",Phone:"212-555-1003",AccountId:"001A000003"},{Id:"003A000004",FirstName:"David",LastName:"Park",Email:"dpark@retailmax.com",Title:"CEO",Department:"Executive",Phone:"312-555-1004",AccountId:"001A000004"},{Id:"003A000005",FirstName:"Lisa",LastName:"Smith",Email:"lsmith@manupro.com",Title:"COO",Department:"Operations",Phone:"313-555-1005",AccountId:"001A000005"},{Id:"003A000006",FirstName:"James",LastName:"Wilson",Email:"jwilson@datastream.com",Title:"CTO",Department:"Technology",Phone:"512-555-1006",AccountId:"001A000006"},{Id:"003A000007",FirstName:"Emily",LastName:"Garcia",Email:"egarcia@edulearn.com",Title:"Director",Department:"Product",Phone:"206-555-1007",AccountId:"001A000007"},{Id:"003A000008",FirstName:"Robert",LastName:"Martinez",Email:"rmartinez@greenpath.com",Title:"CEO",Department:"Executive",Phone:"832-555-1008",AccountId:"001A000008"}]},{name:"Opportunity",label:"Opportunity",fields:[{name:"Id",type:"id"},{name:"Name",type:"string"},{name:"Amount",type:"number"},{name:"StageName",type:"string"},{name:"CloseDate",type:"date"},{name:"Probability",type:"number"},{name:"AccountId",type:"id"},{name:"OwnerId",type:"id"}],records:[{Id:"006A000001",Name:"TechVentures Platform License",Amount:85e3,StageName:"Closed Won",CloseDate:"2024-01-15",Probability:100,AccountId:"001A000001",OwnerId:"USER001"},{Id:"006A000002",Name:"HealthFirst Analytics Suite",Amount:125e3,StageName:"Closed Won",CloseDate:"2024-02-28",Probability:100,AccountId:"001A000002",OwnerId:"USER002"},{Id:"006A000003",Name:"Capital Group Premium",Amount:25e4,StageName:"Negotiation/Review",CloseDate:"2024-04-30",Probability:70,AccountId:"001A000003",OwnerId:"USER001"},{Id:"006A000004",Name:"RetailMax Expansion",Amount:45e3,StageName:"Proposal/Price Quote",CloseDate:"2024-05-15",Probability:50,AccountId:"001A000004",OwnerId:"USER003"},{Id:"006A000005",Name:"ManuPro ERP Integration",Amount:175e3,StageName:"Qualification",CloseDate:"2024-06-30",Probability:30,AccountId:"001A000005",OwnerId:"USER002"},{Id:"006A000006",Name:"DataStream Pro License",Amount:35e3,StageName:"Closed Won",CloseDate:"2024-01-31",Probability:100,AccountId:"001A000006",OwnerId:"USER003"},{Id:"006A000007",Name:"EduLearn LMS Platform",Amount:28e3,StageName:"Closed Lost",CloseDate:"2024-02-15",Probability:0,AccountId:"001A000007",OwnerId:"USER001"},{Id:"006A000008",Name:"GreenPath Smart Metering",Amount:32e4,StageName:"Negotiation/Review",CloseDate:"2024-05-31",Probability:80,AccountId:"001A000008",OwnerId:"USER002"}]},{name:"Case",label:"Case",fields:[{name:"Id",type:"id"},{name:"CaseNumber",type:"string"},{name:"Subject",type:"string"},{name:"Status",type:"string"},{name:"Priority",type:"string"},{name:"Origin",type:"string"},{name:"AccountId",type:"id"}],records:[{Id:"500A000001",CaseNumber:"00001001",Subject:"API connection timeout error",Status:"Open",Priority:"High",Origin:"Web",AccountId:"001A000001"},{Id:"500A000002",CaseNumber:"00001002",Subject:"Report export failing",Status:"In Progress",Priority:"Medium",Origin:"Email",AccountId:"001A000002"},{Id:"500A000003",CaseNumber:"00001003",Subject:"User cannot log in",Status:"Closed",Priority:"Critical",Origin:"Phone",AccountId:"001A000003"},{Id:"500A000004",CaseNumber:"00001004",Subject:"Data import questions",Status:"Open",Priority:"Low",Origin:"Web",AccountId:"001A000004"},{Id:"500A000005",CaseNumber:"00001005",Subject:"Integration sync failure",Status:"Escalated",Priority:"High",Origin:"Email",AccountId:"001A000005"}]}];function $m(e){try{const n=e.trim().replace(/\s+/g," ").toUpperCase().match(/FROM\s+(\w+)/i);if(!n)return{records:[],error:"Missing FROM clause",rowCount:0};const r=n[1],s=kd.find(v=>v.name.toUpperCase()===r.toUpperCase());if(!s)return{records:[],error:`Object '${r}' not found. Available: Account, Contact, Opportunity, Case`,rowCount:0};const a=e.match(/SELECT\s+([\s\S]+?)\s+FROM/i);if(!a)return{records:[],error:"Missing SELECT clause",rowCount:0};const l=a[1].split(",").map(v=>v.trim()),c=e.match(/LIMIT\s+(\d+)/i),u=c?parseInt(c[1]):200;let h=s.records.map(v=>({type:s.name,fields:v}));const g=e.match(/WHERE\s+([\s\S]+?)(?:\s+ORDER\s+BY|\s+LIMIT|\s+GROUP\s+BY|$)/i);if(g){const v=g[1].trim();h=Vm(h,v,s)}const m=e.match(/ORDER\s+BY\s+(\w+)(?:\s+(ASC|DESC))?/i);if(m){const v=m[1],y=(m[2]||"ASC").toUpperCase();h=h.sort((x,p)=>{const d=x.fields[v],f=p.fields[v];if(d==null&&f==null)return 0;if(d==null)return y==="ASC"?1:-1;if(f==null)return y==="ASC"?-1:1;if(typeof d=="number"&&typeof f=="number")return y==="ASC"?d-f:f-d;const S=String(d).toLowerCase(),A=String(f).toLowerCase();return y==="ASC"?S.localeCompare(A):A.localeCompare(S)})}h=h.slice(0,u);const b=h.map(v=>({type:v.type,fields:l.reduce((y,x)=>{if(x==="*"||x.toUpperCase()==="ID")y[x]=v.fields.Id||null;else{const p=Object.keys(v.fields).find(d=>d.toLowerCase()===x.toLowerCase());y[x]=p?v.fields[p]:null}return y},{})}));return{records:b,error:null,rowCount:b.length}}catch(t){return{records:[],error:`Query error: ${t instanceof Error?t.message:String(t)}`,rowCount:0}}}function Vm(e,t,n){return e.filter(r=>{try{const s=t.match(/^(\w+)\s*=\s*'([^']*)'$/i),a=t.match(/^(\w+)\s*!=\s*'([^']*)'$/i),o=t.match(/^(\w+)\s*>\s*(\d+(?:\.\d+)?)$/i),l=t.match(/^(\w+)\s*<\s*(\d+(?:\.\d+)?)$/i),c=t.match(/^(\w+)\s*>=\s*(\d+(?:\.\d+)?)$/i),u=t.match(/^(\w+)\s+LIKE\s+'([^']*)'/i),h=t.match(/^(\w+)\s+IN\s+\(([^)]+)\)/i),g=m=>{const b=Object.keys(r.fields).find(v=>v.toLowerCase()===m.toLowerCase());return b?r.fields[b]:null};if(s){const m=g(s[1]);return String(m).toLowerCase()===s[2].toLowerCase()}if(a){const m=g(a[1]);return String(m).toLowerCase()!==a[2].toLowerCase()}if(o){const m=g(o[1]);return typeof m=="number"&&m>parseFloat(o[2])}if(l){const m=g(l[1]);return typeof m=="number"&&m<parseFloat(l[2])}if(c){const m=g(c[1]);return typeof m=="number"&&m>=parseFloat(c[2])}if(u){const m=String(g(u[1])||"").toLowerCase(),b=u[2].toLowerCase().replace(/%/g,".*").replace(/_/g,".");return new RegExp("^"+b+"$").test(m)}if(h){const m=String(g(h[1])||"").toLowerCase();return h[2].split(",").map(v=>v.trim().replace(/'/g,"").toLowerCase()).includes(m)}return!0}catch{return!0}})}const Vl=[{label:"All Accounts",query:`SELECT Id, Name, Industry, AnnualRevenue
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
WHERE AccountId = '001A000001'`}];function Jm(){const[e,t]=w.useState(Vl[0].query),[n,r]=w.useState(null),[s,a]=w.useState(null),[o,l]=w.useState(0),[c,u]=w.useState(""),[h,g]=w.useState(!1),m=()=>{const y=$m(e);r(y.records),a(y.error),l(y.rowCount),u(e)},b=y=>{t(y),r(null),a(null)},v=n&&n.length>0?Object.keys(n[0].fields):[];return i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-6",children:[i.jsxs("h1",{className:"text-2xl font-bold text-sf-gray-9 flex items-center gap-2",children:[i.jsx(Wl,{size:24,className:"text-sf-teal"}),"SOQL Visual Explorer"]}),i.jsx("p",{className:"text-sf-gray-6 mt-1",children:"Write and run SOQL queries against fictional Salesforce records. See results instantly."}),i.jsxs("div",{className:"flex items-center gap-2 mt-2 text-xs bg-yellow-50 border border-yellow-200 rounded px-3 py-1.5 w-fit text-yellow-700",children:[i.jsx(Ul,{size:13}),"Simulated data only — not connected to a real Salesforce org"]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[i.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-9 text-sm mb-3",children:"Example Queries"}),i.jsx("div",{className:"space-y-1",children:Vl.map((y,x)=>i.jsx("button",{onClick:()=>b(y.query),className:"w-full text-left text-xs px-2 py-1.5 rounded hover:bg-sf-gray-1 text-sf-gray-7 hover:text-sf-blue transition-colors",children:y.label},x))})]}),i.jsxs("div",{className:"card",children:[i.jsxs("button",{className:"w-full flex items-center justify-between font-semibold text-sf-gray-9 text-sm",onClick:()=>g(!h),children:[i.jsx("span",{children:"Data Schema"}),h?i.jsx(Cd,{size:14}):i.jsx(wt,{size:14})]}),h&&i.jsx("div",{className:"mt-3 space-y-3",children:kd.map(y=>i.jsxs("div",{children:[i.jsx("div",{className:"text-xs font-semibold text-sf-blue mb-1",children:y.name}),i.jsx("div",{className:"space-y-0.5",children:y.fields.map(x=>i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-sf-gray-7 font-mono",children:x.name}),i.jsx("span",{className:"text-sf-gray-4",children:x.type})]},x.name))})]},y.name))})]})]}),i.jsxs("div",{className:"lg:col-span-3 space-y-4",children:[i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"text-sm font-medium text-sf-gray-7",children:"SOQL Query"}),i.jsx("span",{className:"text-xs text-sf-gray-4",children:"Available: Account, Contact, Opportunity, Case"})]}),i.jsx("textarea",{value:e,onChange:y=>t(y.target.value),className:"w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg p-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue text-sm",rows:6,spellCheck:!1}),i.jsxs("div",{className:"flex items-center justify-between mt-3",children:[i.jsxs("button",{onClick:m,className:"btn-primary flex items-center gap-2",children:[i.jsx(Id,{size:15}),"Run Query"]}),n!==null&&i.jsxs("span",{className:"text-sm text-sf-gray-5",children:[o," row",o!==1?"s":""," returned"]})]})]}),s&&i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-2",children:[i.jsx(Ul,{size:16,className:"text-sf-red flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("p",{className:"text-sf-red font-semibold text-sm",children:"Query Error"}),i.jsx("p",{className:"text-red-700 text-sm mt-1",children:s})]})]}),n!==null&&!s&&i.jsxs("div",{className:"card overflow-hidden p-0",children:[i.jsx("div",{className:"px-4 py-3 border-b border-gray-100 bg-sf-gray-1",children:i.jsxs("h3",{className:"font-semibold text-sf-gray-9 text-sm",children:["Results — ",o," record",o!==1?"s":""]})}),n.length===0?i.jsxs("div",{className:"text-center py-12 text-sf-gray-5",children:[i.jsx(Wl,{size:32,className:"mx-auto mb-2 opacity-30"}),i.jsx("p",{children:"No records match your query"})]}):i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm",children:[i.jsx("thead",{className:"bg-sf-gray-1 border-b border-gray-200",children:i.jsx("tr",{children:v.map(y=>i.jsx("th",{className:"text-left px-4 py-2 text-xs font-semibold text-sf-gray-7 whitespace-nowrap",children:y},y))})}),i.jsx("tbody",{className:"divide-y divide-gray-100",children:n.map((y,x)=>i.jsx("tr",{className:"hover:bg-sf-gray-1 transition-colors",children:v.map(p=>{const d=y.fields[p];return i.jsx("td",{className:"px-4 py-2 text-sf-gray-7 whitespace-nowrap max-w-[200px] truncate",children:d==null?i.jsx("span",{className:"text-sf-gray-4 italic",children:"null"}):typeof d=="boolean"?i.jsx("span",{className:d?"text-sf-green":"text-sf-red",children:String(d)}):typeof d=="number"?i.jsx("span",{className:"font-mono",children:d.toLocaleString()}):p.toLowerCase().includes("id")?i.jsx("span",{className:"font-mono text-xs text-sf-gray-5",children:String(d)}):String(d)},p)})},x))})]})})]}),n===null&&i.jsxs("div",{className:"card border-dashed border-2 border-gray-200",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-7 mb-3 text-sm",children:"SOQL Quick Reference"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sf-gray-6",children:[["Basic query","SELECT Id, Name FROM Account LIMIT 10"],["Filter with WHERE","WHERE Industry = 'Technology'"],["Multiple conditions","WHERE Amount > 50000 AND StageName = 'Closed Won'"],["Pattern matching","WHERE Name LIKE 'Tech%'"],["Sort results","ORDER BY Amount DESC"],["List of values","WHERE Industry IN ('Tech', 'Healthcare')"]].map(([y,x])=>i.jsxs("div",{children:[i.jsxs("span",{className:"font-medium text-sf-gray-8",children:[y,":"]}),i.jsx("pre",{className:"font-mono text-sf-gray-5 mt-0.5 whitespace-pre-wrap",children:x})]},y))})]})]})]})]})}const Gm=[{id:"debug-null-pointer",title:"The Mysterious Null Pointer",description:"A trigger is failing with a NullPointerException. Find the null variable and fix it safely.",bugType:"null-pointer",brokenCode:`// This code is supposed to send a welcome email to new Contacts
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
update toUpdate;`,explanation:"Two bugs: SOQL and DML both inside the loop. For 100 accounts: 100 SOQL + 100 DML = both limits exceeded. Fix: use ONE aggregate SOQL with GROUP BY to get all revenues at once, build a Map for lookups, collect updates in a List, then do ONE bulk update. This goes from 200 operations to 3."}],Rd={"null-pointer":"bg-red-100 text-red-800","governor-limit":"bg-orange-100 text-orange-800",logic:"bg-yellow-100 text-yellow-800",syntax:"bg-purple-100 text-purple-800",soql:"bg-blue-100 text-blue-800",dml:"bg-teal-100 text-teal-800"};function Ym({scenario:e,onSelect:t}){return i.jsxs("button",{className:"card text-left w-full hover:shadow-sf-lg hover:-translate-y-0.5 transition-all",onClick:t,children:[i.jsx("div",{className:"flex items-center gap-2 mb-2",children:i.jsx("span",{className:`tag ${Rd[e.bugType]||"bg-gray-100 text-gray-800"}`,children:e.bugType.replace("-"," ")})}),i.jsx("h3",{className:"font-bold mb-1",children:e.title}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description}),i.jsxs("div",{className:"flex items-center gap-1 mt-3 text-sf-blue text-sm font-medium",children:["Debug this ",i.jsx(wt,{className:"w-4 h-4"})]})]})}function Km({scenario:e,onBack:t}){const[n,r]=w.useState(!1),[s,a]=w.useState(0),[o,l]=w.useState(!1),[c,u]=w.useState(e.brokenCode),[h,g]=w.useState(!1),m=()=>{g(!0)};return i.jsxs("div",{children:[i.jsx("button",{className:"flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue mb-6 transition-colors",onClick:t,children:"← Back to scenarios"}),i.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center",children:i.jsx(Fl,{className:"w-5 h-5 text-red-600"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"text-xl font-bold",children:e.title}),i.jsx("span",{className:`tag ${Rd[e.bugType]||""}`,children:e.bugType.replace("-"," ")})]}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:e.description})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[i.jsxs("div",{children:[i.jsxs("h3",{className:"font-semibold text-sf-gray-8 mb-2 flex items-center gap-2",children:[i.jsx(Fl,{className:"w-4 h-4 text-red-500"})," Broken Code"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap border-2 border-red-300",children:e.brokenCode})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Error Message"}),i.jsx("div",{className:"bg-red-950 text-red-300 rounded-lg p-4 font-mono text-xs whitespace-pre-wrap mb-4",children:e.errorMessage}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs("button",{className:"btn-secondary text-sm flex items-center gap-2 w-full justify-center",onClick:()=>{r(!0)},children:[i.jsx(wn,{className:"w-4 h-4"}),n?`Hint ${s+1} of ${e.hints.length}`:"Get a Hint"]}),n&&i.jsxs("div",{className:"hint-box",children:[i.jsx("p",{className:"text-sm text-yellow-900",children:e.hints[s]}),s<e.hints.length-1&&i.jsx("button",{className:"text-xs text-yellow-700 underline mt-2",onClick:()=>a(b=>b+1),children:"Next hint →"})]})]})]})]}),i.jsxs("div",{className:"card mb-4",children:[i.jsx("h3",{className:"font-semibold text-sf-gray-8 mb-2",children:"Your Fix"}),i.jsx("p",{className:"text-sm text-sf-gray-6 mb-3",children:'Edit the code above to fix the bug, then click "Check My Fix":'}),i.jsxs("div",{className:"card !p-0 overflow-hidden mb-4",children:[i.jsxs("div",{className:"bg-sf-gray-8 px-4 py-2 flex items-center gap-2",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),i.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),i.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),i.jsx("span",{className:"text-sf-gray-4 text-xs ml-2",children:"fix.apex"})]}),i.jsx("textarea",{className:"code-textarea w-full bg-sf-gray-9 text-green-300 p-4 border-0 outline-none",value:c,onChange:b=>u(b.target.value),rows:14,spellCheck:!1})]}),i.jsx("button",{className:"btn-primary",onClick:m,children:"Check My Fix"}),h&&i.jsx("div",{className:"mt-3 note-box",children:i.jsx("p",{className:"text-sm text-blue-800",children:"Great effort! Compare your solution with the official fix below to see if you found the issue. Pattern-based checking cannot verify runtime correctness — review the explanation carefully."})})]}),i.jsxs("button",{className:"btn-secondary flex items-center gap-2 mb-4",onClick:()=>l(!o),children:[i.jsx(Is,{className:"w-4 h-4"}),o?"Hide Fix":"Show the Fix"]}),o&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"card border-2 border-green-300",children:[i.jsxs("h3",{className:"font-semibold text-green-800 mb-2 flex items-center gap-2",children:[i.jsx(xo,{className:"w-4 h-4"})," Fixed Code"]}),i.jsx("pre",{className:"code-block text-xs whitespace-pre-wrap",children:e.fixedCode})]}),i.jsxs("div",{className:"card border-2 border-sf-blue/30 bg-sf-blue/5",children:[i.jsx("h3",{className:"font-semibold text-sf-blue mb-2",children:"Explanation"}),i.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed",children:e.explanation})]})]})]})}function Xm(){const[e,t]=w.useState(null);return i.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:e?i.jsx(Km,{scenario:e,onBack:()=>t(null)}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Debug Lab"}),i.jsx("p",{className:"text-sf-gray-6",children:"Fix intentionally broken Apex code. Real bugs that Salesforce developers encounter every day."})]}),i.jsxs("div",{className:"flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6",children:[i.jsx($s,{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"}),i.jsx("p",{className:"text-xs text-amber-800",children:"Each scenario shows a broken class and its error message. Use the hints if needed, then reveal the fix and explanation."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Gm.map(n=>i.jsx(Ym,{scenario:n,onSelect:()=>t(n)},n.id))})]})})}const Jl=[{id:"mission-lead-routing",title:"Automate Lead Routing",company:"Acme Corporation",description:"Acme's sales team is manually assigning leads every morning — a process taking 2 hours daily. Build an Apex solution to automate it.",scenario:`Sarah, Acme's Sales Ops Manager, has given you the following requirements in a meeting:

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
}`,hints:["Start with the Healthcare override — it should be the first if-check","Use a Decimal variable with null safety: `Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;`","Chain if/else if/else for the three revenue tiers","For bulkRouteLeads, loop over the list and call routeLead() for each — don't duplicate the logic"],testCases:[{id:"tc1",description:"Defines class LeadRouter",pattern:"public\\s+class\\s+LeadRouter",errorMessage:"Your class must be named exactly `LeadRouter`.",exampleFix:"public class LeadRouter {"},{id:"tc2",description:"Defines routeLead method with correct signature",pattern:"public\\s+static\\s+String\\s+routeLead\\s*\\(",errorMessage:"You need a `public static String routeLead(Lead l)` method.",exampleFix:"public static String routeLead(Lead l) {"},{id:"tc3",description:"Handles Healthcare override",pattern:"Healthcare",errorMessage:"Your code should check for Industry == 'Healthcare' and return 'Healthcare Specialist'.",exampleFix:`if (l.Industry == 'Healthcare') {
    return 'Healthcare Specialist';
}`},{id:"tc4",description:"Handles null AnnualRevenue",pattern:"AnnualRevenue\\s*!=\\s*null|AnnualRevenue\\s*==\\s*null",errorMessage:"You must handle the case where AnnualRevenue is null.",exampleFix:"Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;"},{id:"tc5",description:"Routes by revenue tiers",pattern:"1000000|100000",errorMessage:"Your routing logic should use the revenue thresholds $100,000 and $1,000,000.",exampleFix:`if (revenue > 1000000) {
    return 'Enterprise Team';
} else if (revenue >= 100000) {
    return 'Mid-Market Team';
}`},{id:"tc6",description:"Defines bulkRouteLeads method",pattern:"public\\s+static\\s+Map.*bulkRouteLeads\\s*\\(",errorMessage:"You need a `public static Map<ID, String> bulkRouteLeads(List<Lead> leads)` method.",exampleFix:"public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {"}]},{id:"mission-account-health",title:"Account Health Score",company:"Globex Technologies",description:"Build a health scoring system that evaluates accounts based on engagement, revenue, and support history.",scenario:`The Customer Success team at Globex wants a health score for every account so they can proactively reach out to at-risk customers before they churn.

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
}`,hints:["Start with `Integer score = 100;` and subtract/add from there","For the 90-day check: `Date ninetyDaysAgo = Date.today().addDays(-90);`","Loop through cases and count High/Critical open ones, then cap with `Math.min(caseDeduction, 45)`","Use `Math.max(0, Math.min(100, score))` to clamp the final score"],testCases:[{id:"tc1",description:"Defines class AccountHealthCalculator",pattern:"public\\s+class\\s+AccountHealthCalculator",errorMessage:"Your class must be named exactly `AccountHealthCalculator`.",exampleFix:"public class AccountHealthCalculator {"},{id:"tc2",description:"Defines calculateScore method",pattern:"public\\s+static\\s+Integer\\s+calculateScore\\s*\\(",errorMessage:"You need a `public static Integer calculateScore(...)` method.",exampleFix:"public static Integer calculateScore(Account acct, List<Opportunity> opps, List<Case> cases) {"},{id:"tc3",description:"Checks for 90-day lookback on opportunities",pattern:"addDays\\s*\\(\\s*-90\\s*\\)|90",errorMessage:"You need to check whether there was a Closed Won opportunity within the last 90 days.",exampleFix:`Date ninetyDaysAgo = Date.today().addDays(-90);
if (opp.CloseDate >= ninetyDaysAgo) { ... }`},{id:"tc4",description:"Caps case deduction at 45 points",pattern:"Math\\.min\\s*\\(.*45|45.*Math\\.min",errorMessage:"The case deduction must be capped at 45 points using Math.min().",exampleFix:"score -= Math.min(caseDeduction, 45);"},{id:"tc5",description:"Clamps final score between 0 and 100",pattern:"Math\\.max|Math\\.min",errorMessage:"Clamp the final score to [0, 100] using Math.max() and Math.min().",exampleFix:"return Math.max(0, Math.min(100, score));"},{id:"tc6",description:"Defines getHealthTier method",pattern:"public\\s+static\\s+String\\s+getHealthTier\\s*\\(",errorMessage:"You need a `public static String getHealthTier(Integer score)` method.",exampleFix:`public static String getHealthTier(Integer score) {
    if (score >= 80) return 'Green';
    if (score >= 60) return 'Yellow';
    return 'Red';
}`}]},{id:"mission-data-import",title:"CSV Data Import Processor",company:"DataSync Inc",description:"Build a class that processes a CSV-formatted string of contact data, validates it, and prepares records for import.",scenario:`DataSync receives daily CSV feeds from their marketing platform with new lead data. The current process has a consultant manually cleaning data in Excel before importing. They want an Apex class to automate this.

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

You'll write the Apex class that queries and aggregates this data.`,requirements:["Create class TerritoryRollup with method getReport() returning Map<String, TerritoryMetrics>","TerritoryMetrics inner class: String territory, Decimal totalPipeline, Decimal closedWon, Decimal winRate, Map<String, Decimal> byStage","Query all Opportunities with Amount != null","Group by Territory__c field","Calculate win rate: closedWon / (closedWon + closedLost)","Handle territories with no wins or losses gracefully"],difficulty:"intermediate",skills:["SOQL","Maps","Collections","Aggregate Functions","Inner Classes"],estimatedHours:3},{id:"mission-case-escalation",title:"Auto-Escalate Support Cases",company:"TechSupport Co.",description:"Build a service that automatically escalates high-priority cases that have been open too long.",scenario:`The support manager at TechSupport Co. pulled you into a Slack call:

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
}`,hints:["Use DateTime.now().getTime() to get milliseconds since epoch. Subtract CreatedDate.getTime() to find elapsed milliseconds.","Convert milliseconds to hours: divide by 3600000 (60 * 60 * 1000).","Check priority with c.Priority == 'High' — Apex strings are compared with ==.","Collect matching cases in a separate List<Case> and return it at the end."],testCases:[{id:"tc1",description:"Defines class CaseEscalationService",pattern:"public\\s+class\\s+CaseEscalationService",errorMessage:"Class must be named exactly `CaseEscalationService`.",exampleFix:"public class CaseEscalationService {"},{id:"tc2",description:"Defines checkAndEscalate method returning List<Case>",pattern:"public\\s+static\\s+List<Case>\\s+checkAndEscalate\\s*\\(",errorMessage:"You need `public static List<Case> checkAndEscalate(List<Case> cases)`.",exampleFix:"public static List<Case> checkAndEscalate(List<Case> cases) {"},{id:"tc3",description:"Uses DateTime.now() to get current time",pattern:"DateTime\\.now\\(\\)",errorMessage:"Use DateTime.now() to capture the current moment for comparison.",exampleFix:"DateTime now = DateTime.now();"},{id:"tc4",description:"Sets Status to 'Escalated'",pattern:"Status\\s*=\\s*'Escalated'",errorMessage:"Set c.Status = 'Escalated' on matched cases.",exampleFix:"c.Status = 'Escalated';"},{id:"tc5",description:"Sets Priority to 'High' on escalated cases",pattern:"Priority\\s*=\\s*'High'",errorMessage:"Set c.Priority = 'High' when escalating.",exampleFix:"c.Priority = 'High';"}]},{id:"mission-contact-dedup",title:"Contact Deduplication Checker",company:"CleanData Corp",description:"Build a utility that identifies potential duplicate contacts by email or by name + account.",scenario:`CleanData's data steward sent you a ticket:

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
}`},{id:"tc5",description:"Defines getSummary method",pattern:"public\\s+static\\s+String\\s+getSummary\\s*\\(",errorMessage:"You need a `public static String getSummary(Map<String, List<Contact>> dupes)` method.",exampleFix:"public static String getSummary(Map<String, List<Contact>> dupes) {"}]},{id:"mission-opportunity-stage-validator",title:"Opportunity Stage Gate Validator",company:"SalesPipe Inc.",description:"Build a validator that checks whether an opportunity meets all requirements before advancing to Proposal stage.",scenario:`SalesPipe's RevOps lead sent over a Confluence doc with the new stage gate rules:

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
}`}]},{id:"mission-xp-calculator",title:"Employee XP & Level Calculator",company:"GamifyHR",description:"Build a gamification engine that calculates employee XP points, assigns levels, and tracks progress to the next tier.",scenario:`The engineering lead at GamifyHR walked you through their new employee engagement feature:

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
}`,hints:["Guard against negatives with a ternary: `Integer t = (tasks > 0) ? tasks : 0;`","getLevel() checks from highest tier down: if xp >= 600 return 'Champion', else if xp >= 300 return 'Expert', etc.","For getProgressToNextLevel, each tier has a range. For Contributor (100–299): progress = (xp - 100) / 200.0 * 100.","Champion is the max level — return 100.0 when xp >= 600, no further progress to track."],testCases:[{id:"tc1",description:"Defines class EmployeeXPCalculator",pattern:"public\\s+class\\s+EmployeeXPCalculator",errorMessage:"Class must be named exactly `EmployeeXPCalculator`.",exampleFix:"public class EmployeeXPCalculator {"},{id:"tc2",description:"calculateXP multiplies tasks by 10",pattern:"tasks?\\s*\\*\\s*10|10\\s*\\*\\s*tasks?",errorMessage:"Multiply tasks by 10 in your XP formula.",exampleFix:"return t * 10 + p * 50 + r * 25;"},{id:"tc3",description:"calculateXP multiplies projects by 50",pattern:"projects?\\s*\\*\\s*50|50\\s*\\*\\s*projects?",errorMessage:"Multiply projects by 50 in your XP formula.",exampleFix:"return t * 10 + p * 50 + r * 25;"},{id:"tc4",description:"getLevel uses 600 as Champion threshold",pattern:">=\\s*600|600\\s*<=",errorMessage:"Check xp >= 600 to identify the Champion level.",exampleFix:"if (xp >= 600) return 'Champion';"},{id:"tc5",description:"getProgressToNextLevel returns Decimal",pattern:"public\\s+static\\s+Decimal\\s+getProgressToNextLevel\\s*\\(",errorMessage:"You need `public static Decimal getProgressToNextLevel(Integer xp)`.",exampleFix:"public static Decimal getProgressToNextLevel(Integer xp) {"}]},{id:"mission-invoice-generator",title:"Invoice Line Item Calculator",company:"BillFast Ltd.",description:"Build an invoice calculator with an inner class for line items and a method that generates a full invoice summary.",scenario:`BillFast's billing team sent over their spreadsheet logic to automate:

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
// Add to map: 'discountSaved' => discountSaved`},{id:"tc5",description:"Handles negative discount gracefully",pattern:"discountPct\\s*>\\s*0|disc\\s*>\\s*0",errorMessage:"Guard against negative discount by checking discountPct > 0 before applying it.",exampleFix:"Decimal disc = (item.discountPct != null && item.discountPct > 0) ? item.discountPct : 0;"}]},{id:"mission-sla-tracker",title:"SLA Breach Detector",company:"ServiceFirst Corp",description:"Build a service that flags cases that have breached their SLA window based on priority.",scenario:`ServiceFirst's support director handed over the SLA matrix:

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
}`}]},{id:"mission-territory-assignment",title:"Sales Territory Auto-Assignment",company:"RegionSales Inc.",description:"Build a territory assigner that maps accounts to sales regions based on country and state.",scenario:`RegionSales' Sales Ops team gave you the territory mapping doc:

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
if (west.contains(s)) return 'West';`},{id:"tc5",description:"Defines bulkAssign returning Map<Id, String>",pattern:"Map<Id,\\s*String>\\s+bulkAssign\\s*\\(",errorMessage:"You need `public static Map<Id, String> bulkAssign(List<Account> accounts)`.",exampleFix:"public static Map<Id, String> bulkAssign(List<Account> accounts) {"}]},{id:"mission-renewal-reminder",title:"Subscription Renewal Reminder Builder",company:"SubManager SaaS",description:"Build a service that calculates renewal timing, urgency levels, and generates reminder messages for subscription renewals.",scenario:`SubManager's customer success lead sent over the renewal reminder spec:

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
if (days < 30) return 'High';`},{id:"tc5",description:"buildReminder returns a formatted String message",pattern:"public\\s+static\\s+String\\s+buildReminder\\s*\\(",errorMessage:"You need `public static String buildReminder(Date endDate, String tier, String customerName)`.",exampleFix:"public static String buildReminder(Date endDate, String tier, String customerName) {"}]},{id:"mission-approval-workflow",title:"Dynamic Approval Routing Engine",company:"PolicyPro Insurance",description:"Build an approval routing engine that determines who must approve a request based on department and amount thresholds.",scenario:`PolicyPro's compliance team sent over the new approval matrix:

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
}`}]},{id:"mission-commission-calculator",title:"Sales Commission Calculator",company:"CompSales Corp",description:"Build a tiered commission calculator with a quarterly accelerator for hitting quota.",scenario:`CompSales' finance team sent over the commission structure:

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
'quotaAttainment' => quotaAttainment`}]},{id:"mission-data-quality-scorer",title:"Account Data Quality Scorer",company:"DataQual Analytics",description:"Build a data quality scoring engine that grades account completeness and flags stale records.",scenario:`DataQual's data governance lead handed over the scoring rubric:

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
}`,hints:["String.isNotBlank(field) handles null, empty, and whitespace-only strings — better than != null alone.","Build the score by accumulating points with +=. Start from 0, not 100.","isStale: compare LastActivityDate to Date.today().addDays(-365). If the date is earlier (less than), it's stale.","generateQualityReport can call scoreAccount(), getMissingFields(), and isStale() internally — compose your methods."],testCases:[{id:"tc1",description:"Defines class DataQualityScorer",pattern:"public\\s+class\\s+DataQualityScorer",errorMessage:"Class must be named exactly `DataQualityScorer`.",exampleFix:"public class DataQualityScorer {"},{id:"tc2",description:"Uses String.isNotBlank() or String.isBlank() for field checks",pattern:"String\\.isNotBlank\\s*\\(|String\\.isBlank\\s*\\(",errorMessage:"Use String.isNotBlank() or String.isBlank() to check text fields.",exampleFix:"if (String.isNotBlank(acct.Phone)) score += 10;"},{id:"tc3",description:"Adds 20 points for Account Name",pattern:"score\\s*\\+=\\s*20",errorMessage:"Add 20 points for the Account Name field.",exampleFix:"if (String.isNotBlank(acct.Name)) score += 20;"},{id:"tc4",description:"isStale checks LastActivityDate against 365 days ago",pattern:"addDays\\s*\\(\\s*-365\\s*\\)",errorMessage:"Check if LastActivityDate < Date.today().addDays(-365) in isStale().",exampleFix:"return acct.LastActivityDate < Date.today().addDays(-365);"},{id:"tc5",description:"getMissingFields returns List<String>",pattern:"public\\s+static\\s+List<String>\\s+getMissingFields\\s*\\(",errorMessage:"You need `public static List<String> getMissingFields(Account acct)`.",exampleFix:"public static List<String> getMissingFields(Account acct) {"}]},{id:"mission-trigger-framework",title:"Build a Reusable Trigger Framework",company:"EnterpriseTech Solutions",description:"Build a production-grade Trigger Handler framework with a base virtual class and a concrete Lead implementation.",scenario:`EnterpriseTech's tech lead gathered the team for a Zoom:

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
insert orders;`}]}];function Zm(e,t){try{const n=new RegExp(t.pattern,"im").test(e);return{passed:n,message:n?"Passed":t.errorMessage}}catch{return{passed:!1,message:"Check error"}}}function ef(e,t){const r=t.replace(/\\[nrt]/g," ").replace(/\(\?:|\(\?=|\(\?!/g,"").replace(/[\\()[\]{}*+?^$|]/g," ").replace(/\s{2,}/g," ").trim().split(/\s+/).filter(o=>o.length>3&&/[a-zA-Z]/.test(o)).map(o=>o.toLowerCase()).slice(0,4);if(r.length===0)return[];const s=e.split(`
`),a=[];for(let o=0;o<s.length;o++){const l=s[o].trim();if(!l||l.startsWith("//"))continue;const c=l.toLowerCase();if(r.some(u=>c.includes(u))&&(a.push(`${String(o+1).padStart(3," ")} │ ${s[o]}`),a.length>=3))break}return a}function tf({mission:e}){var x;const[t,n]=w.useState(e.starterCode||`// Write your Apex class here
`),[r,s]=w.useState(null),[a,o]=w.useState(!1),[l,c]=w.useState(!1),[u,h]=w.useState(-1),g=(((x=e.testCases)==null?void 0:x.length)??0)>0,m=(r==null?void 0:r.every(p=>p.passed))??!1,b=(r==null?void 0:r.filter(p=>p.passed).length)??0,v=()=>{if(!e.testCases)return;const p=e.testCases.map(d=>Zm(t,d));s(p),o(!0)},y=()=>{n(e.starterCode||`// Write your Apex class here
`),s(null),o(!1),h(-1),c(!1)};return e.starterCode?i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("h4",{className:"font-semibold text-sf-gray-8 flex items-center gap-2",children:[i.jsx("span",{className:"w-2 h-2 rounded-full bg-sf-teal inline-block"}),"Your Apex Code"]}),i.jsxs("button",{onClick:y,className:"flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors",children:[i.jsx(vo,{size:11})," Reset"]})]}),i.jsxs("div",{className:"relative rounded-lg overflow-hidden border border-sf-gray-3",children:[i.jsxs("div",{className:"flex items-center gap-2 bg-[#1e1e2e] px-3 py-2 border-b border-gray-700",children:[i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),i.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),i.jsx("span",{className:"text-xs text-gray-500 ml-2 font-mono",children:"MyClass.apex"})]}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-10 bg-[#1a1a2a] flex flex-col items-end pr-2 pt-3 select-none z-10",children:t.split(`
`).map((p,d)=>i.jsx("div",{className:"text-gray-600 text-xs leading-[1.65] font-mono",children:d+1},d))}),i.jsx("textarea",{value:t,onChange:p=>n(p.target.value),className:"w-full bg-[#1e1e2e] text-gray-100 pl-12 pr-4 pt-3 pb-3 border-0 outline-none focus:ring-0 font-mono text-sm leading-relaxed resize-none",rows:Math.max(14,t.split(`
`).length+2),spellCheck:!1,autoComplete:"off",autoCorrect:"off",style:{minHeight:"280px"}})]})]}),i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[g&&i.jsxs("button",{onClick:v,className:"btn-primary flex items-center gap-2 text-sm",children:[i.jsx(Td,{size:14}),"Check My Code"]}),e.hints&&u<e.hints.length-1&&i.jsxs("button",{onClick:()=>h(p=>{var d;return Math.min(p+1,(((d=e.hints)==null?void 0:d.length)??1)-1)}),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors",children:[i.jsx(wn,{size:13}),u===-1?"Get a Hint":"Next Hint"]}),e.solution&&i.jsxs("button",{onClick:()=>c(p=>!p),className:"flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[l?i.jsx(Ad,{size:13}):i.jsx(Is,{size:13}),l?"Hide":"View"," Solution"]})]}),u>=0&&e.hints&&i.jsx("div",{className:"space-y-2",children:e.hints.slice(0,u+1).map((p,d)=>i.jsx("div",{className:"hint-box",children:i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx(wn,{size:13,className:"text-yellow-600 flex-shrink-0 mt-0.5"}),i.jsxs("p",{className:"text-xs text-yellow-800",children:[i.jsxs("strong",{children:["Hint ",d+1,":"]})," ",p]})]})},d))}),a&&r&&g&&i.jsxs("div",{className:"border border-gray-200 rounded-xl overflow-hidden",children:[i.jsx("div",{className:`px-4 py-3 flex items-center justify-between ${m?"bg-green-50 border-b border-green-200":"bg-red-50 border-b border-red-200"}`,children:i.jsxs("div",{className:"flex items-center gap-2",children:[m?i.jsx(Ne,{size:16,className:"text-green-600"}):i.jsx(Sn,{size:16,className:"text-red-500"}),i.jsx("span",{className:`font-bold text-sm ${m?"text-green-700":"text-red-600"}`,children:m?"All checks passed!":`${b}/${r.length} checks passed`})]})}),i.jsx("div",{className:"p-4 space-y-3",children:r.map((p,d)=>{const f=e.testCases[d];if(p.passed)return i.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-100 rounded-xl",children:[i.jsx(Ne,{size:15,className:"text-green-500 flex-shrink-0"}),i.jsx("span",{className:"font-medium text-sm text-green-700",children:f.description})]},d);const S=ef(t,f.pattern);return i.jsxs("div",{className:"border border-red-200 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-red-50 border-b border-red-100",children:[i.jsx(Sn,{size:15,className:"text-red-500 flex-shrink-0"}),i.jsx("span",{className:"font-semibold text-sm text-red-700",children:f.description})]}),i.jsxs("div",{className:"p-4 space-y-3",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1",children:[i.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400 inline-block"}),"What you wrote"]}),S.length>0?i.jsx("pre",{className:"bg-gray-900 text-orange-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto",children:S.join(`
`)}):i.jsx("div",{className:"bg-gray-900 text-gray-500 text-xs rounded-lg px-3 py-2 font-mono italic",children:"(no matching lines found — this code may be missing entirely)"})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1",children:[i.jsx("span",{className:"w-2 h-2 rounded-full bg-red-400 inline-block"}),"What went wrong"]}),i.jsx("p",{className:"text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2",children:p.message})]}),f.exampleFix&&i.jsxs("div",{children:[i.jsxs("div",{className:"text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1",children:[i.jsx("span",{className:"w-2 h-2 rounded-full bg-green-400 inline-block"}),"Try writing this instead"]}),i.jsx("pre",{className:"bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto",children:f.exampleFix})]})]})]},d)})}),m&&i.jsx("div",{className:"bg-green-50 border-t border-green-200 px-4 py-3",children:i.jsx("p",{className:"text-sm text-green-700 font-medium",children:"Great work! Compare with the official solution to see alternate approaches."})})]}),!g&&!l&&i.jsxs("div",{className:"border border-dashed border-sf-gray-3 rounded-xl p-5 text-center",children:[i.jsx("div",{className:"text-3xl mb-2",children:"💡"}),i.jsx("p",{className:"text-sm text-sf-gray-6",children:"Write your solution, then reveal the official solution to compare approaches."})]}),l&&e.solution&&i.jsxs("div",{className:"border border-sf-gray-3 rounded-xl overflow-hidden",children:[i.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1e1e2e]",children:[i.jsx(Is,{size:14,className:"text-sf-teal"}),i.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Official Solution"})]}),i.jsx("pre",{className:"bg-[#1a1a2a] text-gray-100 text-xs p-4 overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto",children:e.solution}),i.jsx("div",{className:"bg-blue-50 border-t border-blue-100 px-4 py-3",children:i.jsxs("p",{className:"text-xs text-sf-gray-7",children:[i.jsx("strong",{children:"Compare your approach:"})," There may be multiple valid solutions. The check results above highlight the key patterns to look for."]})})]})]}):i.jsxs("div",{className:"border border-dashed border-sf-gray-3 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[200px]",children:[i.jsx("div",{className:"text-3xl mb-2",children:"🚧"}),i.jsx("p",{className:"text-sm text-sf-gray-6 font-medium",children:"Editor coming soon for this mission"}),i.jsx("p",{className:"text-xs text-sf-gray-5 mt-1",children:"Build this in a Salesforce Developer Edition org in the meantime."})]})}const nf={beginner:"bg-green-100 text-green-800",intermediate:"bg-yellow-100 text-yellow-800",advanced:"bg-red-100 text-red-800"};function rf(){const[e,t]=w.useState(null),[n,r]=w.useState("all"),s=n==="all"?Jl:Jl.filter(a=>a.difficulty===n);return i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h1",{className:"text-2xl font-bold text-sf-gray-9 mb-2",children:"Project Missions"}),i.jsx("p",{className:"text-sf-gray-6",children:"Apply your Apex skills to realistic business requirements — the kind you will encounter on actual Salesforce projects."})]}),i.jsx("div",{className:"card mb-6 bg-gradient-to-r from-sf-purple/10 to-sf-blue/10 border border-sf-purple/20",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx(wr,{className:"w-5 h-5 text-sf-purple flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"font-semibold mb-1",children:"What are Missions?"}),i.jsx("p",{className:"text-sm text-sf-gray-7",children:"Each mission presents a real business problem from a fictional company. You get a scenario, specific requirements, and a starter template. Missions are designed to be completed in a real Salesforce Developer Edition org — they are not validated in the browser."})]})]})}),i.jsx("div",{className:"flex gap-2 mb-6 flex-wrap",children:["all","beginner","intermediate","advanced"].map(a=>i.jsx("button",{onClick:()=>r(a),className:`px-3 py-1 rounded-full text-sm font-medium transition-colors ${n===a?"bg-sf-blue text-white":"bg-white text-sf-gray-7 border border-sf-gray-3 hover:border-sf-blue"}`,children:a.charAt(0).toUpperCase()+a.slice(1)},a))}),i.jsx("div",{className:"space-y-4",children:s.map(a=>i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"flex items-start justify-between cursor-pointer",onClick:()=>t(e===a.id?null:a.id),children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[i.jsx("span",{className:`tag ${nf[a.difficulty]}`,children:a.difficulty}),i.jsxs("span",{className:"flex items-center gap-1 text-xs text-sf-gray-5",children:[i.jsx(Qs,{className:"w-3 h-3"})," ~",a.estimatedHours,"h"]}),i.jsx("span",{className:"text-xs text-sf-blue font-medium",children:a.company})]}),i.jsx("h3",{className:"font-bold text-lg",children:a.title}),i.jsx("p",{className:"text-sm text-sf-gray-6 mt-1",children:a.description}),i.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:a.skills.map(o=>i.jsx("span",{className:"tag bg-sf-blue/10 text-sf-blue",children:o},o))})]}),i.jsx("div",{className:"flex-shrink-0 ml-4",children:e===a.id?i.jsx(fm,{className:"w-5 h-5 text-sf-gray-5"}):i.jsx(Cd,{className:"w-5 h-5 text-sf-gray-5"})})]}),e===a.id&&i.jsx("div",{className:"mt-6 pt-6 border-t border-sf-gray-2",children:i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"space-y-5",children:[i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-8 mb-2",children:"Business Scenario"}),i.jsx("div",{className:"bg-sf-blue/5 border-l-4 border-sf-blue p-4 rounded-r-lg",children:i.jsx("p",{className:"text-sm text-sf-gray-7 leading-relaxed whitespace-pre-line",children:a.scenario})})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-sf-gray-8 mb-2",children:"Requirements"}),i.jsx("ol",{className:"space-y-2",children:a.requirements.map((o,l)=>i.jsxs("li",{className:"flex gap-3 text-sm",children:[i.jsx("span",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-sf-purple text-white text-xs flex items-center justify-center font-bold",children:l+1}),i.jsx("span",{className:"text-sf-gray-7",children:o})]},l))})]})]}),i.jsx(tf,{mission:a})]})})]},a.id))})]})}function sf(){return i.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-12",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("div",{className:"w-16 h-16 bg-sf-blue rounded-2xl flex items-center justify-center mx-auto mb-4",children:i.jsx(ke,{className:"w-8 h-8 text-white"})}),i.jsx("h1",{className:"text-3xl font-bold mb-3",children:"About SFDC Simplified"}),i.jsx("p",{className:"text-sf-gray-6 text-lg",children:"An interactive learning platform for aspiring Salesforce developers"})]}),i.jsxs("div",{className:"space-y-8",children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-3",children:"What is SFDC Simplified?"}),i.jsx("p",{className:"text-sf-gray-7 leading-relaxed",children:"SFDC Simplified is a free, browser-based learning platform designed specifically for people who are completely new to Salesforce development. Unlike documentation or video courses, every topic here follows a hands-on cycle: understand, see an example, write code, get feedback, review the solution."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"What You Will Learn"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:i.jsx(ke,{className:"w-4 h-4 text-sf-blue"}),label:"Apex Programming",desc:"Variables, classes, loops, collections"},{icon:i.jsx(In,{className:"w-4 h-4 text-sf-teal"}),label:"SOQL Queries",desc:"Query Salesforce data with precision"},{icon:i.jsx(rt,{className:"w-4 h-4 text-sf-orange"}),label:"DML Operations",desc:"Create, update, delete records safely"},{icon:i.jsx(wr,{className:"w-4 h-4 text-sf-purple"}),label:"Real Scenarios",desc:"Apply skills to business problems"}].map(e=>i.jsxs("div",{className:"flex gap-3 p-3 bg-sf-gray-1 rounded-lg",children:[i.jsx("div",{className:"flex-shrink-0 mt-0.5",children:e.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"font-medium text-sm",children:e.label}),i.jsx("div",{className:"text-xs text-sf-gray-6",children:e.desc})]})]},e.label))})]}),i.jsx("div",{className:"card border-2 border-amber-200 bg-amber-50",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx($s,{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold text-amber-900 mb-2",children:"Important Disclaimer"}),i.jsxs("p",{className:"text-amber-800 text-sm leading-relaxed",children:["SFDC Simplified is an educational learning platform and is ",i.jsx("strong",{children:"not affiliated with Salesforce, Inc."}),"The coding challenges use ",i.jsx("strong",{children:"pattern-based validation"})," in the browser — they do not compile or execute real Apex code. This means the feedback checks for the presence of correct syntax patterns, not actual runtime correctness. To test real Apex, use a ",i.jsx("a",{href:"https://developer.salesforce.com/signup",className:"underline",target:"_blank",rel:"noreferrer",children:"free Salesforce Developer Edition org"}),"."]})]})]})}),i.jsxs("div",{className:"card",children:[i.jsx("h2",{className:"text-xl font-bold mb-3",children:"How Progress is Saved"}),i.jsxs("p",{className:"text-sf-gray-7 text-sm leading-relaxed",children:["In this initial version, all progress (completed lessons, quiz scores, XP, badges) is stored in your browser's",i.jsx("code",{className:"code-inline mx-1",children:"localStorage"}),". This means it persists across sessions on the same device and browser, but is not synced across devices. A future version will support user accounts with server-side persistence."]})]}),i.jsxs("div",{className:"card text-center",children:[i.jsx(ym,{className:"w-8 h-8 text-red-400 mx-auto mb-3"}),i.jsx("h2",{className:"text-xl font-bold mb-2",children:"Get Started"}),i.jsx("p",{className:"text-sf-gray-6 mb-4",children:"Ready to become a Salesforce developer?"}),i.jsxs(B,{to:"/apex",className:"btn-primary inline-flex items-center gap-2",children:["Start Learning ",i.jsx(Gn,{className:"w-4 h-4"})]})]})]})]})}function af(){const{id:e}=yd(),{completeChallenge:t,isChallengeCompleted:n,progress:r}=Vs(),s=e?Od(e):void 0,a=s?n(s.id):!1;return s?i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[i.jsxs("nav",{className:"flex items-center gap-2 text-sm text-sf-gray-5 mb-6",children:[i.jsxs(B,{to:"/apex",className:"hover:text-sf-blue transition-colors flex items-center gap-1",children:[i.jsx(gm,{className:"w-3 h-3"})," Apex Path"]}),i.jsx("span",{children:"›"}),i.jsxs("span",{className:"text-sf-gray-7",children:["Challenge: ",s.title]})]}),i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg bg-sf-blue/10 flex items-center justify-center",children:i.jsx(ke,{className:"w-5 h-5 text-sf-blue"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold",children:s.title}),i.jsx("p",{className:"text-sf-gray-6 text-sm",children:s.description})]})]}),i.jsx(Dd,{challenge:s,onComplete:o=>t(s.id,o),isCompleted:a,savedCode:r.challengeSubmissions[s.id]})]}):i.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"Challenge not found"}),i.jsx(B,{to:"/apex",className:"btn-primary",children:"Back to Apex Path"})]})}const bo=w.createContext(null);function of(){return i.jsxs("div",{className:"max-w-xl mx-auto px-4 py-24 text-center",children:[i.jsx("div",{className:"text-6xl font-bold text-sf-gray-3 mb-4",children:"404"}),i.jsx("h2",{className:"text-xl font-bold mb-2",children:"Page not found"}),i.jsx("p",{className:"text-sf-gray-6 mb-6",children:"The page you are looking for does not exist."}),i.jsx("a",{href:"/",className:"btn-primary",children:"Go Home"})]})}function lf(){const e=Vs();return i.jsx(bo.Provider,{value:e,children:i.jsxs("div",{className:"min-h-screen flex flex-col",children:[i.jsx(Tm,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(em,{children:[i.jsx(Me,{path:"/",element:i.jsx(Rm,{})}),i.jsx(Me,{path:"/dashboard",element:i.jsx(Pm,{})}),i.jsx(Me,{path:"/apex",element:i.jsx(Fm,{})}),i.jsx(Me,{path:"/lesson/:lessonId",element:i.jsx(Qm,{})}),i.jsx(Me,{path:"/soql",element:i.jsx(Jm,{})}),i.jsx(Me,{path:"/debug",element:i.jsx(Xm,{})}),i.jsx(Me,{path:"/missions",element:i.jsx(rf,{})}),i.jsx(Me,{path:"/about",element:i.jsx(sf,{})}),i.jsx(Me,{path:"/challenge/:id",element:i.jsx(af,{})}),i.jsx(Me,{path:"*",element:i.jsx(of,{})})]})}),i.jsx(Em,{})]})})}function cf(){return i.jsx(om,{children:i.jsx(lf,{})})}od(document.getElementById("root")).render(i.jsx(w.StrictMode,{children:i.jsx(cf,{})}));
