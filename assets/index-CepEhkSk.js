(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Nc={exports:{}},Es={},Oc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),ip=Symbol.for("react.portal"),sp=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),up=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),hp=Symbol.for("react.lazy"),Bl=Symbol.iterator;function pp(t){return t===null||typeof t!="object"?null:(t=Bl&&t[Bl]||t["@@iterator"],typeof t=="function"?t:null)}var xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ac=Object.assign,Dc={};function Xn(t,e,n){this.props=t,this.context=e,this.refs=Dc,this.updater=n||xc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lc(){}Lc.prototype=Xn.prototype;function Oa(t,e,n){this.props=t,this.context=e,this.refs=Dc,this.updater=n||xc}var xa=Oa.prototype=new Lc;xa.constructor=Oa;Ac(xa,Xn.prototype);xa.isPureReactComponent=!0;var $l=Array.isArray,Uc=Object.prototype.hasOwnProperty,Aa={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function bc(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Uc.call(e,r)&&!Mc.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Kr,type:t,key:s,ref:o,props:i,_owner:Aa.current}}function mp(t,e){return{$$typeof:Kr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Da(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kr}function gp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hl=/\/+/g;function Gs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gp(""+t.key):e.toString(36)}function Ri(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kr:case ip:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gs(o,0):r,$l(i)?(n="",t!=null&&(n=t.replace(Hl,"$&/")+"/"),Ri(i,e,n,"",function(u){return u})):i!=null&&(Da(i)&&(i=mp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hl,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$l(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gs(s,a);o+=Ri(s,e,n,l,i)}else if(l=pp(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gs(s,a++),o+=Ri(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ai(t,e,n){if(t==null)return t;var r=[],i=0;return Ri(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pe={current:null},Pi={transition:null},yp={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Aa};function Fc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ai,forEach:function(t,e,n){ai(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ai(t,function(){e++}),e},toArray:function(t){return ai(t,function(e){return e})||[]},only:function(t){if(!Da(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Xn;D.Fragment=sp;D.Profiler=ap;D.PureComponent=Oa;D.StrictMode=op;D.Suspense=dp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;D.act=Fc;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ac({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Aa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Uc.call(e,l)&&!Mc.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Kr,type:t.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(t){return t={$$typeof:up,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lp,_context:t},t.Consumer=t};D.createElement=bc;D.createFactory=function(t){var e=bc.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:cp,render:t}};D.isValidElement=Da;D.lazy=function(t){return{$$typeof:hp,_payload:{_status:-1,_result:t},_init:vp}};D.memo=function(t,e){return{$$typeof:fp,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=Pi.transition;Pi.transition={};try{t()}finally{Pi.transition=e}};D.unstable_act=Fc;D.useCallback=function(t,e){return pe.current.useCallback(t,e)};D.useContext=function(t){return pe.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return pe.current.useDeferredValue(t)};D.useEffect=function(t,e){return pe.current.useEffect(t,e)};D.useId=function(){return pe.current.useId()};D.useImperativeHandle=function(t,e,n){return pe.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return pe.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return pe.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return pe.current.useMemo(t,e)};D.useReducer=function(t,e,n){return pe.current.useReducer(t,e,n)};D.useRef=function(t){return pe.current.useRef(t)};D.useState=function(t){return pe.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return pe.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return pe.current.useTransition()};D.version="18.3.1";Oc.exports=D;var re=Oc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=re,wp=Symbol.for("react.element"),Sp=Symbol.for("react.fragment"),Ep=Object.prototype.hasOwnProperty,kp=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ip={key:!0,ref:!0,__self:!0,__source:!0};function zc(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ep.call(e,r)&&!Ip.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wp,type:t,key:s,ref:o,props:i,_owner:kp.current}}Es.Fragment=Sp;Es.jsx=zc;Es.jsxs=zc;Nc.exports=Es;var R=Nc.exports,jc={exports:{}},Re={},Bc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var x=T.length;T.push(O);e:for(;0<x;){var q=x-1>>>1,Z=T[q];if(0<i(Z,O))T[q]=O,T[x]=Z,x=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],x=T.pop();if(x!==O){T[0]=x;e:for(var q=0,Z=T.length,si=Z>>>1;q<si;){var qt=2*(q+1)-1,Ws=T[qt],Qt=qt+1,oi=T[Qt];if(0>i(Ws,x))Qt<Z&&0>i(oi,Ws)?(T[q]=oi,T[Qt]=x,q=Qt):(T[q]=Ws,T[qt]=x,q=qt);else if(Qt<Z&&0>i(oi,x))T[q]=oi,T[Qt]=x,q=Qt;else break e}}return O}function i(T,O){var x=T.sortIndex-O.sortIndex;return x!==0?x:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,m=null,p=3,y=!1,v=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function g(T){if(w=!1,d(T),!v)if(n(l)!==null)v=!0,Hs(S);else{var O=n(u);O!==null&&Vs(g,O.startTime-T)}}function S(T,O){v=!1,w&&(w=!1,f(C),C=-1),y=!0;var x=p;try{for(d(O),m=n(l);m!==null&&(!(m.expirationTime>O)||T&&!Ue());){var q=m.callback;if(typeof q=="function"){m.callback=null,p=m.priorityLevel;var Z=q(m.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(l)&&r(l),d(O)}else r(l);m=n(l)}if(m!==null)var si=!0;else{var qt=n(u);qt!==null&&Vs(g,qt.startTime-O),si=!1}return si}finally{m=null,p=x,y=!1}}var E=!1,I=null,C=-1,U=5,A=-1;function Ue(){return!(t.unstable_now()-A<U)}function nr(){if(I!==null){var T=t.unstable_now();A=T;var O=!0;try{O=I(!0,T)}finally{O?rr():(E=!1,I=null)}}else E=!1}var rr;if(typeof c=="function")rr=function(){c(nr)};else if(typeof MessageChannel<"u"){var jl=new MessageChannel,rp=jl.port2;jl.port1.onmessage=nr,rr=function(){rp.postMessage(null)}}else rr=function(){P(nr,0)};function Hs(T){I=T,E||(E=!0,rr())}function Vs(T,O){C=P(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Hs(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var x=p;p=O;try{return T()}finally{p=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var x=p;p=T;try{return O()}finally{p=x}},t.unstable_scheduleCallback=function(T,O,x){var q=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?q+x:q):x=q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=x+Z,T={id:h++,callback:O,priorityLevel:T,startTime:x,expirationTime:Z,sortIndex:-1},x>q?(T.sortIndex=x,e(u,T),n(l)===null&&T===n(u)&&(w?(f(C),C=-1):w=!0,Vs(g,x-q))):(T.sortIndex=Z,e(l,T),v||y||(v=!0,Hs(S))),T},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(T){var O=p;return function(){var x=p;p=O;try{return T.apply(this,arguments)}finally{p=x}}}})($c);Bc.exports=$c;var Tp=Bc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=re,Ce=Tp;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,Pr={};function mn(t,e){$n(t,e),$n(t+"Capture",e)}function $n(t,e){for(Pr[t]=e,t=0;t<e.length;t++)Hc.add(e[t])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=Object.prototype.hasOwnProperty,Rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vl={},Wl={};function Pp(t){return No.call(Wl,t)?!0:No.call(Vl,t)?!1:Rp.test(t)?Wl[t]=!0:(Vl[t]=!0,!1)}function Np(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Op(t,e,n,r){if(e===null||typeof e>"u"||Np(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){se[t]=new me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];se[e]=new me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){se[t]=new me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){se[t]=new me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){se[t]=new me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){se[t]=new me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){se[t]=new me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){se[t]=new me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){se[t]=new me(t,5,!1,t.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function Ua(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(La,Ua);se[e]=new me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(La,Ua);se[e]=new me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(La,Ua);se[e]=new me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){se[t]=new me(t,1,!1,t.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){se[t]=new me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ma(t,e,n,r){var i=se.hasOwnProperty(e)?se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Op(e,n,i,r)&&(n=null),r||i===null?Pp(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mt=Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),wn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ba=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Fa=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),Ao=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),Gl=Symbol.iterator;function ir(t){return t===null||typeof t!="object"?null:(t=Gl&&t[Gl]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,Ks;function hr(t){if(Ks===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ks=e&&e[1]||""}return`
`+Ks+t}var qs=!1;function Qs(t,e){if(!t||qs)return"";qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hr(t):""}function xp(t){switch(t.tag){case 5:return hr(t.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return t=Qs(t.type,!1),t;case 11:return t=Qs(t.type.render,!1),t;case 1:return t=Qs(t.type,!0),t;default:return""}}function Do(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sn:return"Fragment";case wn:return"Portal";case Oo:return"Profiler";case ba:return"StrictMode";case xo:return"Suspense";case Ao:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wc:return(t.displayName||"Context")+".Consumer";case Vc:return(t._context.displayName||"Context")+".Provider";case Fa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case za:return e=t.displayName||null,e!==null?e:Do(t.type)||"Memo";case _t:e=t._payload,t=t._init;try{return Do(t(e))}catch{}}return null}function Ap(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Do(e);case 8:return e===ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $t(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dp(t){var e=Kc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ui(t){t._valueTracker||(t._valueTracker=Dp(t))}function qc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lo(t,e){var n=e.checked;return W({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kl(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$t(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qc(t,e){e=e.checked,e!=null&&Ma(t,"checked",e,!1)}function Uo(t,e){Qc(t,e);var n=$t(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mo(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mo(t,e.type,$t(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ql(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mo(t,e,n){(e!=="number"||Hi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pr=Array.isArray;function Dn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$t(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return W({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ql(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(pr(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$t(n)}}function Xc(t,e){var n=$t(e.value),r=$t(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xl(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ci,Jc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ci.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Nr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lp=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(t){Lp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vr[e]=vr[t]})});function Zc(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vr.hasOwnProperty(t)&&vr[t]?(""+e).trim():e+"px"}function ed(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zc(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Up=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(t,e){if(e){if(Up[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function jo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function ja(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $o=null,Ln=null,Un=null;function Yl(t){if(t=Xr(t)){if(typeof $o!="function")throw Error(_(280));var e=t.stateNode;e&&(e=Rs(e),$o(t.stateNode,t.type,e))}}function td(t){Ln?Un?Un.push(t):Un=[t]:Ln=t}function nd(){if(Ln){var t=Ln,e=Un;if(Un=Ln=null,Yl(t),e)for(t=0;t<e.length;t++)Yl(e[t])}}function rd(t,e){return t(e)}function id(){}var Xs=!1;function sd(t,e,n){if(Xs)return t(e,n);Xs=!0;try{return rd(t,e,n)}finally{Xs=!1,(Ln!==null||Un!==null)&&(id(),nd())}}function Or(t,e){var n=t.stateNode;if(n===null)return null;var r=Rs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Ho=!1;if(lt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Ho=!1}function Mp(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var yr=!1,Vi=null,Wi=!1,Vo=null,bp={onError:function(t){yr=!0,Vi=t}};function Fp(t,e,n,r,i,s,o,a,l){yr=!1,Vi=null,Mp.apply(bp,arguments)}function zp(t,e,n,r,i,s,o,a,l){if(Fp.apply(this,arguments),yr){if(yr){var u=Vi;yr=!1,Vi=null}else throw Error(_(198));Wi||(Wi=!0,Vo=u)}}function gn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function od(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jl(t){if(gn(t)!==t)throw Error(_(188))}function jp(t){var e=t.alternate;if(!e){if(e=gn(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jl(i),t;if(s===r)return Jl(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function ad(t){return t=jp(t),t!==null?ld(t):null}function ld(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ld(t);if(e!==null)return e;t=t.sibling}return null}var ud=Ce.unstable_scheduleCallback,Zl=Ce.unstable_cancelCallback,Bp=Ce.unstable_shouldYield,$p=Ce.unstable_requestPaint,Q=Ce.unstable_now,Hp=Ce.unstable_getCurrentPriorityLevel,Ba=Ce.unstable_ImmediatePriority,cd=Ce.unstable_UserBlockingPriority,Gi=Ce.unstable_NormalPriority,Vp=Ce.unstable_LowPriority,dd=Ce.unstable_IdlePriority,ks=null,Ke=null;function Wp(t){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ks,t,void 0,(t.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:qp,Gp=Math.log,Kp=Math.LN2;function qp(t){return t>>>=0,t===0?32:31-(Gp(t)/Kp|0)|0}var di=64,fi=4194304;function mr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ki(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=mr(a):(s&=o,s!==0&&(r=mr(s)))}else o=n&~i,o!==0?r=mr(o):s!==0&&(r=mr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-je(e),i=1<<n,r|=t[n],e&=~i;return r}function Qp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xp(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-je(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Qp(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fd(){var t=di;return di<<=1,!(di&4194240)&&(di=64),t}function Ys(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-je(e),t[e]=n}function Yp(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-je(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $a(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-je(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var M=0;function hd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pd,Ha,md,gd,vd,Go=!1,hi=[],Ot=null,xt=null,At=null,xr=new Map,Ar=new Map,St=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(t,e){switch(t){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":xr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(e.pointerId)}}function or(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xr(e),e!==null&&Ha(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zp(t,e,n,r,i){switch(e){case"focusin":return Ot=or(Ot,t,e,n,r,i),!0;case"dragenter":return xt=or(xt,t,e,n,r,i),!0;case"mouseover":return At=or(At,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xr.set(s,or(xr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ar.set(s,or(Ar.get(s)||null,t,e,n,r,i)),!0}return!1}function yd(t){var e=en(t.target);if(e!==null){var n=gn(e);if(n!==null){if(e=n.tag,e===13){if(e=od(n),e!==null){t.blockedOn=e,vd(t.priority,function(){md(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ni(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ko(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return e=Xr(n),e!==null&&Ha(e),t.blockedOn=n,!1;e.shift()}return!0}function tu(t,e,n){Ni(t)&&n.delete(e)}function em(){Go=!1,Ot!==null&&Ni(Ot)&&(Ot=null),xt!==null&&Ni(xt)&&(xt=null),At!==null&&Ni(At)&&(At=null),xr.forEach(tu),Ar.forEach(tu)}function ar(t,e){t.blockedOn===e&&(t.blockedOn=null,Go||(Go=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,em)))}function Dr(t){function e(i){return ar(i,t)}if(0<hi.length){ar(hi[0],t);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ot!==null&&ar(Ot,t),xt!==null&&ar(xt,t),At!==null&&ar(At,t),xr.forEach(e),Ar.forEach(e),n=0;n<St.length;n++)r=St[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)yd(n),n.blockedOn===null&&St.shift()}var Mn=mt.ReactCurrentBatchConfig,qi=!0;function tm(t,e,n,r){var i=M,s=Mn.transition;Mn.transition=null;try{M=1,Va(t,e,n,r)}finally{M=i,Mn.transition=s}}function nm(t,e,n,r){var i=M,s=Mn.transition;Mn.transition=null;try{M=4,Va(t,e,n,r)}finally{M=i,Mn.transition=s}}function Va(t,e,n,r){if(qi){var i=Ko(t,e,n,r);if(i===null)ao(t,e,r,Qi,n),eu(t,r);else if(Zp(i,t,e,n,r))r.stopPropagation();else if(eu(t,r),e&4&&-1<Jp.indexOf(t)){for(;i!==null;){var s=Xr(i);if(s!==null&&pd(s),s=Ko(t,e,n,r),s===null&&ao(t,e,r,Qi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ao(t,e,r,null,n)}}var Qi=null;function Ko(t,e,n,r){if(Qi=null,t=ja(r),t=en(t),t!==null)if(e=gn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=od(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qi=t,null}function _d(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hp()){case Ba:return 1;case cd:return 4;case Gi:case Vp:return 16;case dd:return 536870912;default:return 16}default:return 16}}var Pt=null,Wa=null,Oi=null;function wd(){if(Oi)return Oi;var t,e=Wa,n=e.length,r,i="value"in Pt?Pt.value:Pt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Oi=i.slice(t,1<r?1-r:void 0)}function xi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pi(){return!0}function nu(){return!1}function Pe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pi:nu,this.isPropagationStopped=nu,this}return W(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),e}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Pe(Yn),Qr=W({},Yn,{view:0,detail:0}),rm=Pe(Qr),Js,Zs,lr,Is=W({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lr&&(lr&&t.type==="mousemove"?(Js=t.screenX-lr.screenX,Zs=t.screenY-lr.screenY):Zs=Js=0,lr=t),Js)},movementY:function(t){return"movementY"in t?t.movementY:Zs}}),ru=Pe(Is),im=W({},Is,{dataTransfer:0}),sm=Pe(im),om=W({},Qr,{relatedTarget:0}),eo=Pe(om),am=W({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Pe(am),um=W({},Yn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cm=Pe(um),dm=W({},Yn,{data:0}),iu=Pe(dm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pm[t])?!!e[t]:!1}function Ka(){return mm}var gm=W({},Qr,{key:function(t){if(t.key){var e=fm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(t){return t.type==="keypress"?xi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vm=Pe(gm),ym=W({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Pe(ym),_m=W({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),wm=Pe(_m),Sm=W({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=Pe(Sm),km=W({},Is,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=Pe(km),Tm=[9,13,27,32],qa=lt&&"CompositionEvent"in window,_r=null;lt&&"documentMode"in document&&(_r=document.documentMode);var Cm=lt&&"TextEvent"in window&&!_r,Sd=lt&&(!qa||_r&&8<_r&&11>=_r),ou=" ",au=!1;function Ed(t,e){switch(t){case"keyup":return Tm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var En=!1;function Rm(t,e){switch(t){case"compositionend":return kd(e);case"keypress":return e.which!==32?null:(au=!0,ou);case"textInput":return t=e.data,t===ou&&au?null:t;default:return null}}function Pm(t,e){if(En)return t==="compositionend"||!qa&&Ed(t,e)?(t=wd(),Oi=Wa=Pt=null,En=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sd&&e.locale!=="ko"?null:e.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nm[t.type]:e==="textarea"}function Id(t,e,n,r){td(r),e=Xi(e,"onChange"),0<e.length&&(n=new Ga("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wr=null,Lr=null;function Om(t){Ud(t,0)}function Ts(t){var e=Tn(t);if(qc(e))return t}function xm(t,e){if(t==="change")return e}var Td=!1;if(lt){var to;if(lt){var no="oninput"in document;if(!no){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),no=typeof uu.oninput=="function"}to=no}else to=!1;Td=to&&(!document.documentMode||9<document.documentMode)}function cu(){wr&&(wr.detachEvent("onpropertychange",Cd),Lr=wr=null)}function Cd(t){if(t.propertyName==="value"&&Ts(Lr)){var e=[];Id(e,Lr,t,ja(t)),sd(Om,e)}}function Am(t,e,n){t==="focusin"?(cu(),wr=e,Lr=n,wr.attachEvent("onpropertychange",Cd)):t==="focusout"&&cu()}function Dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ts(Lr)}function Lm(t,e){if(t==="click")return Ts(e)}function Um(t,e){if(t==="input"||t==="change")return Ts(e)}function Mm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $e=typeof Object.is=="function"?Object.is:Mm;function Ur(t,e){if($e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!No.call(e,i)||!$e(t[i],e[i]))return!1}return!0}function du(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fu(t,e){var n=du(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=du(n)}}function Rd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pd(){for(var t=window,e=Hi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hi(t.document)}return e}function Qa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bm(t){var e=Pd(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fu(n,s);var o=fu(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fm=lt&&"documentMode"in document&&11>=document.documentMode,kn=null,qo=null,Sr=null,Qo=!1;function hu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||kn==null||kn!==Hi(r)||(r=kn,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Ur(Sr,r)||(Sr=r,r=Xi(qo,"onSelect"),0<r.length&&(e=new Ga("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=kn)))}function mi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var In={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},ro={},Nd={};lt&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Cs(t){if(ro[t])return ro[t];if(!In[t])return t;var e=In[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nd)return ro[t]=e[n];return t}var Od=Cs("animationend"),xd=Cs("animationiteration"),Ad=Cs("animationstart"),Dd=Cs("transitionend"),Ld=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(t,e){Ld.set(t,e),mn(e,[t])}for(var io=0;io<pu.length;io++){var so=pu[io],zm=so.toLowerCase(),jm=so[0].toUpperCase()+so.slice(1);Wt(zm,"on"+jm)}Wt(Od,"onAnimationEnd");Wt(xd,"onAnimationIteration");Wt(Ad,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Dd,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function mu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zp(r,e,void 0,t),t.currentTarget=null}function Ud(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mu(i,a,u),s=l}}}if(Wi)throw t=Vo,Wi=!1,Vo=null,t}function z(t,e){var n=e[ea];n===void 0&&(n=e[ea]=new Set);var r=t+"__bubble";n.has(r)||(Md(e,t,2,!1),n.add(r))}function oo(t,e,n){var r=0;e&&(r|=4),Md(n,t,r,e)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Mr(t){if(!t[gi]){t[gi]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||oo(n,!1,t),oo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gi]||(e[gi]=!0,oo("selectionchange",!1,e))}}function Md(t,e,n,r){switch(_d(e)){case 1:var i=tm;break;case 4:i=nm;break;default:i=Va}n=i.bind(null,e,n,t),i=void 0,!Ho||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ao(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=en(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}sd(function(){var u=s,h=ja(n),m=[];e:{var p=Ld.get(t);if(p!==void 0){var y=Ga,v=t;switch(t){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":y=vm;break;case"focusin":v="focus",y=eo;break;case"focusout":v="blur",y=eo;break;case"beforeblur":case"afterblur":y=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wm;break;case Od:case xd:case Ad:y=lm;break;case Dd:y=Em;break;case"scroll":y=rm;break;case"wheel":y=Im;break;case"copy":case"cut":case"paste":y=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=su}var w=(e&4)!==0,P=!w&&t==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Or(c,f),g!=null&&w.push(br(c,g,d)))),P)break;c=c.return}0<w.length&&(p=new y(p,v,null,n,h),m.push({event:p,listeners:w}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Bo&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[ut]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?en(v):null,v!==null&&(P=gn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=ru,g="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=su,g="onPointerLeave",f="onPointerEnter",c="pointer"),P=y==null?p:Tn(y),d=v==null?p:Tn(v),p=new w(g,c+"leave",y,n,h),p.target=P,p.relatedTarget=d,g=null,en(h)===u&&(w=new w(f,c+"enter",v,n,h),w.target=d,w.relatedTarget=P,g=w),P=g,y&&v)t:{for(w=y,f=v,c=0,d=w;d;d=vn(d))c++;for(d=0,g=f;g;g=vn(g))d++;for(;0<c-d;)w=vn(w),c--;for(;0<d-c;)f=vn(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=vn(w),f=vn(f)}w=null}else w=null;y!==null&&gu(m,p,y,w,!1),v!==null&&P!==null&&gu(m,P,v,w,!0)}}e:{if(p=u?Tn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=xm;else if(lu(p))if(Td)S=Um;else{S=Dm;var E=Am}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Lm);if(S&&(S=S(t,u))){Id(m,S,n,h);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Mo(p,"number",p.value)}switch(E=u?Tn(u):window,t){case"focusin":(lu(E)||E.contentEditable==="true")&&(kn=E,qo=u,Sr=null);break;case"focusout":Sr=qo=kn=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,hu(m,n,h);break;case"selectionchange":if(Fm)break;case"keydown":case"keyup":hu(m,n,h)}var I;if(qa)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else En?Ed(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Sd&&n.locale!=="ko"&&(En||C!=="onCompositionStart"?C==="onCompositionEnd"&&En&&(I=wd()):(Pt=h,Wa="value"in Pt?Pt.value:Pt.textContent,En=!0)),E=Xi(u,C),0<E.length&&(C=new iu(C,t,null,n,h),m.push({event:C,listeners:E}),I?C.data=I:(I=kd(n),I!==null&&(C.data=I)))),(I=Cm?Rm(t,n):Pm(t,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(h=new iu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=I))}Ud(m,e)})}function br(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Or(t,n),s!=null&&r.unshift(br(t,s,i)),s=Or(t,e),s!=null&&r.push(br(t,s,i))),t=t.return}return r}function vn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Or(n,s),l!=null&&o.unshift(br(n,l,a))):i||(l=Or(n,s),l!=null&&o.push(br(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $m=/\r\n?/g,Hm=/\u0000|\uFFFD/g;function vu(t){return(typeof t=="string"?t:""+t).replace($m,`
`).replace(Hm,"")}function vi(t,e,n){if(e=vu(e),vu(t)!==e&&n)throw Error(_(425))}function Yi(){}var Xo=null,Yo=null;function Jo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Vm=typeof clearTimeout=="function"?clearTimeout:void 0,yu=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof yu<"u"?function(t){return yu.resolve(null).then(t).catch(Gm)}:Zo;function Gm(t){setTimeout(function(){throw t})}function lo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Dr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(e)}function Dt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _u(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),We="__reactFiber$"+Jn,Fr="__reactProps$"+Jn,ut="__reactContainer$"+Jn,ea="__reactEvents$"+Jn,Km="__reactListeners$"+Jn,qm="__reactHandles$"+Jn;function en(t){var e=t[We];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ut]||n[We]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_u(t);t!==null;){if(n=t[We])return n;t=_u(t)}return e}t=n,n=t.parentNode}return null}function Xr(t){return t=t[We]||t[ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function Rs(t){return t[Fr]||null}var ta=[],Cn=-1;function Gt(t){return{current:t}}function j(t){0>Cn||(t.current=ta[Cn],ta[Cn]=null,Cn--)}function F(t,e){Cn++,ta[Cn]=t.current,t.current=e}var Ht={},ue=Gt(Ht),_e=Gt(!1),an=Ht;function Hn(t,e){var n=t.type.contextTypes;if(!n)return Ht;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function we(t){return t=t.childContextTypes,t!=null}function Ji(){j(_e),j(ue)}function wu(t,e,n){if(ue.current!==Ht)throw Error(_(168));F(ue,e),F(_e,n)}function bd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,Ap(t)||"Unknown",i));return W({},n,r)}function Zi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ht,an=ue.current,F(ue,t),F(_e,_e.current),!0}function Su(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=bd(t,e,an),r.__reactInternalMemoizedMergedChildContext=t,j(_e),j(ue),F(ue,t)):j(_e),F(_e,n)}var Ze=null,Ps=!1,uo=!1;function Fd(t){Ze===null?Ze=[t]:Ze.push(t)}function Qm(t){Ps=!0,Fd(t)}function Kt(){if(!uo&&Ze!==null){uo=!0;var t=0,e=M;try{var n=Ze;for(M=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ze=null,Ps=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(t+1)),ud(Ba,Kt),i}finally{M=e,uo=!1}}return null}var Rn=[],Pn=0,es=null,ts=0,Ne=[],Oe=0,ln=null,et=1,tt="";function Yt(t,e){Rn[Pn++]=ts,Rn[Pn++]=es,es=t,ts=e}function zd(t,e,n){Ne[Oe++]=et,Ne[Oe++]=tt,Ne[Oe++]=ln,ln=t;var r=et;t=tt;var i=32-je(r)-1;r&=~(1<<i),n+=1;var s=32-je(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,et=1<<32-je(e)+i|n<<i|r,tt=s+t}else et=1<<s|n<<i|r,tt=t}function Xa(t){t.return!==null&&(Yt(t,1),zd(t,1,0))}function Ya(t){for(;t===es;)es=Rn[--Pn],Rn[Pn]=null,ts=Rn[--Pn],Rn[Pn]=null;for(;t===ln;)ln=Ne[--Oe],Ne[Oe]=null,tt=Ne[--Oe],Ne[Oe]=null,et=Ne[--Oe],Ne[Oe]=null}var Te=null,ke=null,$=!1,ze=null;function jd(t,e){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Te=t,ke=Dt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Te=t,ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ln!==null?{id:et,overflow:tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Te=t,ke=null,!0):!1;default:return!1}}function na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ra(t){if($){var e=ke;if(e){var n=e;if(!Eu(t,e)){if(na(t))throw Error(_(418));e=Dt(n.nextSibling);var r=Te;e&&Eu(t,e)?jd(r,n):(t.flags=t.flags&-4097|2,$=!1,Te=t)}}else{if(na(t))throw Error(_(418));t.flags=t.flags&-4097|2,$=!1,Te=t}}}function ku(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Te=t}function yi(t){if(t!==Te)return!1;if(!$)return ku(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jo(t.type,t.memoizedProps)),e&&(e=ke)){if(na(t))throw Bd(),Error(_(418));for(;e;)jd(t,e),e=Dt(e.nextSibling)}if(ku(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ke=Dt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ke=null}}else ke=Te?Dt(t.stateNode.nextSibling):null;return!0}function Bd(){for(var t=ke;t;)t=Dt(t.nextSibling)}function Vn(){ke=Te=null,$=!1}function Ja(t){ze===null?ze=[t]:ze.push(t)}var Xm=mt.ReactCurrentBatchConfig;function ur(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function _i(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iu(t){var e=t._init;return e(t._payload)}function $d(t){function e(f,c){if(t){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=bt(f,c),f.index=0,f.sibling=null,f}function s(f,c,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,g){return c===null||c.tag!==6?(c=vo(d,f.mode,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function l(f,c,d,g){var S=d.type;return S===Sn?h(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Iu(S)===c.type)?(g=i(c,d.props),g.ref=ur(f,c,d),g.return=f,g):(g=Fi(d.type,d.key,d.props,null,f.mode,g),g.ref=ur(f,c,d),g.return=f,g)}function u(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=yo(d,f.mode,g),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function h(f,c,d,g,S){return c===null||c.tag!==7?(c=sn(d,f.mode,g,S),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vo(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case li:return d=Fi(c.type,c.key,c.props,null,f.mode,d),d.ref=ur(f,null,c),d.return=f,d;case wn:return c=yo(c,f.mode,d),c.return=f,c;case _t:var g=c._init;return m(f,g(c._payload),d)}if(pr(c)||ir(c))return c=sn(c,f.mode,d,null),c.return=f,c;_i(f,c)}return null}function p(f,c,d,g){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:a(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case li:return d.key===S?l(f,c,d,g):null;case wn:return d.key===S?u(f,c,d,g):null;case _t:return S=d._init,p(f,c,S(d._payload),g)}if(pr(d)||ir(d))return S!==null?null:h(f,c,d,g,null);_i(f,d)}return null}function y(f,c,d,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case li:return f=f.get(g.key===null?d:g.key)||null,l(c,f,g,S);case wn:return f=f.get(g.key===null?d:g.key)||null,u(c,f,g,S);case _t:var E=g._init;return y(f,c,d,E(g._payload),S)}if(pr(g)||ir(g))return f=f.get(d)||null,h(c,f,g,S,null);_i(c,g)}return null}function v(f,c,d,g){for(var S=null,E=null,I=c,C=c=0,U=null;I!==null&&C<d.length;C++){I.index>C?(U=I,I=null):U=I.sibling;var A=p(f,I,d[C],g);if(A===null){I===null&&(I=U);break}t&&I&&A.alternate===null&&e(f,I),c=s(A,c,C),E===null?S=A:E.sibling=A,E=A,I=U}if(C===d.length)return n(f,I),$&&Yt(f,C),S;if(I===null){for(;C<d.length;C++)I=m(f,d[C],g),I!==null&&(c=s(I,c,C),E===null?S=I:E.sibling=I,E=I);return $&&Yt(f,C),S}for(I=r(f,I);C<d.length;C++)U=y(I,f,C,d[C],g),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?C:U.key),c=s(U,c,C),E===null?S=U:E.sibling=U,E=U);return t&&I.forEach(function(Ue){return e(f,Ue)}),$&&Yt(f,C),S}function w(f,c,d,g){var S=ir(d);if(typeof S!="function")throw Error(_(150));if(d=S.call(d),d==null)throw Error(_(151));for(var E=S=null,I=c,C=c=0,U=null,A=d.next();I!==null&&!A.done;C++,A=d.next()){I.index>C?(U=I,I=null):U=I.sibling;var Ue=p(f,I,A.value,g);if(Ue===null){I===null&&(I=U);break}t&&I&&Ue.alternate===null&&e(f,I),c=s(Ue,c,C),E===null?S=Ue:E.sibling=Ue,E=Ue,I=U}if(A.done)return n(f,I),$&&Yt(f,C),S;if(I===null){for(;!A.done;C++,A=d.next())A=m(f,A.value,g),A!==null&&(c=s(A,c,C),E===null?S=A:E.sibling=A,E=A);return $&&Yt(f,C),S}for(I=r(f,I);!A.done;C++,A=d.next())A=y(I,f,C,A.value,g),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?C:A.key),c=s(A,c,C),E===null?S=A:E.sibling=A,E=A);return t&&I.forEach(function(nr){return e(f,nr)}),$&&Yt(f,C),S}function P(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===Sn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case li:e:{for(var S=d.key,E=c;E!==null;){if(E.key===S){if(S=d.type,S===Sn){if(E.tag===7){n(f,E.sibling),c=i(E,d.props.children),c.return=f,f=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Iu(S)===E.type){n(f,E.sibling),c=i(E,d.props),c.ref=ur(f,E,d),c.return=f,f=c;break e}n(f,E);break}else e(f,E);E=E.sibling}d.type===Sn?(c=sn(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=Fi(d.type,d.key,d.props,null,f.mode,g),g.ref=ur(f,c,d),g.return=f,f=g)}return o(f);case wn:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=yo(d,f.mode,g),c.return=f,f=c}return o(f);case _t:return E=d._init,P(f,c,E(d._payload),g)}if(pr(d))return v(f,c,d,g);if(ir(d))return w(f,c,d,g);_i(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,d),c.return=f,f=c):(n(f,c),c=vo(d,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return P}var Wn=$d(!0),Hd=$d(!1),ns=Gt(null),rs=null,Nn=null,Za=null;function el(){Za=Nn=rs=null}function tl(t){var e=ns.current;j(ns),t._currentValue=e}function ia(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bn(t,e){rs=t,Za=Nn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ye=!0),t.firstContext=null)}function De(t){var e=t._currentValue;if(Za!==t)if(t={context:t,memoizedValue:e,next:null},Nn===null){if(rs===null)throw Error(_(308));Nn=t,rs.dependencies={lanes:0,firstContext:t}}else Nn=Nn.next=t;return e}var tn=null;function nl(t){tn===null?tn=[t]:tn.push(t)}function Vd(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nl(e)):(n.next=i.next,i.next=n),e.interleaved=n,ct(t,r)}function ct(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wt=!1;function rl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ct(t,n)}return i=r.interleaved,i===null?(e.next=e,nl(r)):(e.next=i.next,i.next=e),r.interleaved=e,ct(t,n)}function Ai(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$a(t,n)}}function Tu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function is(t,e,n,r){var i=t.updateQueue;wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,h=u=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(p=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(y,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(y,m,p):v,p==null)break e;m=W({},m,p);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,l=m):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cn|=o,t.lanes=o,t.memoizedState=m}}function Cu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Yr={},qe=Gt(Yr),zr=Gt(Yr),jr=Gt(Yr);function nn(t){if(t===Yr)throw Error(_(174));return t}function il(t,e){switch(F(jr,e),F(zr,t),F(qe,Yr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fo(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fo(e,t)}j(qe),F(qe,e)}function Gn(){j(qe),j(zr),j(jr)}function Gd(t){nn(jr.current);var e=nn(qe.current),n=Fo(e,t.type);e!==n&&(F(zr,t),F(qe,n))}function sl(t){zr.current===t&&(j(qe),j(zr))}var H=Gt(0);function ss(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var co=[];function ol(){for(var t=0;t<co.length;t++)co[t]._workInProgressVersionPrimary=null;co.length=0}var Di=mt.ReactCurrentDispatcher,fo=mt.ReactCurrentBatchConfig,un=0,V=null,Y=null,ee=null,os=!1,Er=!1,Br=0,Ym=0;function oe(){throw Error(_(321))}function al(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$e(t[n],e[n]))return!1;return!0}function ll(t,e,n,r,i,s){if(un=s,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Di.current=t===null||t.memoizedState===null?tg:ng,t=n(r,i),Er){s=0;do{if(Er=!1,Br=0,25<=s)throw Error(_(301));s+=1,ee=Y=null,e.updateQueue=null,Di.current=rg,t=n(r,i)}while(Er)}if(Di.current=as,e=Y!==null&&Y.next!==null,un=0,ee=Y=V=null,os=!1,e)throw Error(_(300));return t}function ul(){var t=Br!==0;return Br=0,t}function Ve(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=t:ee=ee.next=t,ee}function Le(){if(Y===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=Y.next;var e=ee===null?V.memoizedState:ee.next;if(e!==null)ee=e,Y=t;else{if(t===null)throw Error(_(310));Y=t,t={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?V.memoizedState=ee=t:ee=ee.next=t}return ee}function $r(t,e){return typeof e=="function"?e(t):e}function ho(t){var e=Le(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=Y,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((un&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,V.lanes|=h,cn|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$e(r,e.memoizedState)||(ye=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,V.lanes|=s,cn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function po(t){var e=Le(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$e(s,e.memoizedState)||(ye=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Kd(){}function qd(t,e){var n=V,r=Le(),i=e(),s=!$e(r.memoizedState,i);if(s&&(r.memoizedState=i,ye=!0),r=r.queue,cl(Yd.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Hr(9,Xd.bind(null,n,r,i,e),void 0,null),te===null)throw Error(_(349));un&30||Qd(n,e,i)}return i}function Qd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xd(t,e,n,r){e.value=n,e.getSnapshot=r,Jd(e)&&Zd(t)}function Yd(t,e,n){return n(function(){Jd(e)&&Zd(t)})}function Jd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$e(t,n)}catch{return!0}}function Zd(t){var e=ct(t,1);e!==null&&Be(e,t,1,-1)}function Ru(t){var e=Ve();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:t},e.queue=t,t=t.dispatch=eg.bind(null,V,t),[e.memoizedState,t]}function Hr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ef(){return Le().memoizedState}function Li(t,e,n,r){var i=Ve();V.flags|=t,i.memoizedState=Hr(1|e,n,void 0,r===void 0?null:r)}function Ns(t,e,n,r){var i=Le();r=r===void 0?null:r;var s=void 0;if(Y!==null){var o=Y.memoizedState;if(s=o.destroy,r!==null&&al(r,o.deps)){i.memoizedState=Hr(e,n,s,r);return}}V.flags|=t,i.memoizedState=Hr(1|e,n,s,r)}function Pu(t,e){return Li(8390656,8,t,e)}function cl(t,e){return Ns(2048,8,t,e)}function tf(t,e){return Ns(4,2,t,e)}function nf(t,e){return Ns(4,4,t,e)}function rf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sf(t,e,n){return n=n!=null?n.concat([t]):null,Ns(4,4,rf.bind(null,e,t),n)}function dl(){}function of(t,e){var n=Le();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&al(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function af(t,e){var n=Le();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&al(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lf(t,e,n){return un&21?($e(n,e)||(n=fd(),V.lanes|=n,cn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ye=!0),t.memoizedState=n)}function Jm(t,e){var n=M;M=n!==0&&4>n?n:4,t(!0);var r=fo.transition;fo.transition={};try{t(!1),e()}finally{M=n,fo.transition=r}}function uf(){return Le().memoizedState}function Zm(t,e,n){var r=Mt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(t))df(e,n);else if(n=Vd(t,e,n,r),n!==null){var i=fe();Be(n,t,r,i),ff(n,e,r)}}function eg(t,e,n){var r=Mt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(t))df(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,o)){var l=e.interleaved;l===null?(i.next=i,nl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Vd(t,e,i,r),n!==null&&(i=fe(),Be(n,t,r,i),ff(n,e,r))}}function cf(t){var e=t.alternate;return t===V||e!==null&&e===V}function df(t,e){Er=os=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ff(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$a(t,n)}}var as={readContext:De,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},tg={readContext:De,useCallback:function(t,e){return Ve().memoizedState=[t,e===void 0?null:e],t},useContext:De,useEffect:Pu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Li(4194308,4,rf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Li(4194308,4,t,e)},useInsertionEffect:function(t,e){return Li(4,2,t,e)},useMemo:function(t,e){var n=Ve();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ve();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zm.bind(null,V,t),[r.memoizedState,t]},useRef:function(t){var e=Ve();return t={current:t},e.memoizedState=t},useState:Ru,useDebugValue:dl,useDeferredValue:function(t){return Ve().memoizedState=t},useTransition:function(){var t=Ru(!1),e=t[0];return t=Jm.bind(null,t[1]),Ve().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=V,i=Ve();if($){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),te===null)throw Error(_(349));un&30||Qd(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Pu(Yd.bind(null,r,s,t),[t]),r.flags|=2048,Hr(9,Xd.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ve(),e=te.identifierPrefix;if($){var n=tt,r=et;n=(r&~(1<<32-je(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Br++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ym++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ng={readContext:De,useCallback:of,useContext:De,useEffect:cl,useImperativeHandle:sf,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:ho,useRef:ef,useState:function(){return ho($r)},useDebugValue:dl,useDeferredValue:function(t){var e=Le();return lf(e,Y.memoizedState,t)},useTransition:function(){var t=ho($r)[0],e=Le().memoizedState;return[t,e]},useMutableSource:Kd,useSyncExternalStore:qd,useId:uf,unstable_isNewReconciler:!1},rg={readContext:De,useCallback:of,useContext:De,useEffect:cl,useImperativeHandle:sf,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:po,useRef:ef,useState:function(){return po($r)},useDebugValue:dl,useDeferredValue:function(t){var e=Le();return Y===null?e.memoizedState=t:lf(e,Y.memoizedState,t)},useTransition:function(){var t=po($r)[0],e=Le().memoizedState;return[t,e]},useMutableSource:Kd,useSyncExternalStore:qd,useId:uf,unstable_isNewReconciler:!1};function be(t,e){if(t&&t.defaultProps){e=W({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:W({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Os={isMounted:function(t){return(t=t._reactInternals)?gn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=fe(),i=Mt(t),s=ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lt(t,s,i),e!==null&&(Be(e,t,i,r),Ai(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=fe(),i=Mt(t),s=ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lt(t,s,i),e!==null&&(Be(e,t,i,r),Ai(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fe(),r=Mt(t),i=ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lt(t,i,r),e!==null&&(Be(e,t,r,n),Ai(e,t,r))}};function Nu(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,s):!0}function hf(t,e,n){var r=!1,i=Ht,s=e.contextType;return typeof s=="object"&&s!==null?s=De(s):(i=we(e)?an:ue.current,r=e.contextTypes,s=(r=r!=null)?Hn(t,i):Ht),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Os,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ou(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Os.enqueueReplaceState(e,e.state,null)}function oa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=De(s):(s=we(e)?an:ue.current,i.context=Hn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Os.enqueueReplaceState(i,i.state,null),is(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Kn(t,e){try{var n="",r=e;do n+=xp(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function aa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function pf(t,e,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){us||(us=!0,va=r),aa(t,e)},n}function mf(t,e,n){n=ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){aa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){aa(t,e),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ig;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yg.bind(null,t,e,n),e.then(t,t))}function Au(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Du(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ot(-1,1),e.tag=2,Lt(n,e,1))),n.lanes|=1),t)}var sg=mt.ReactCurrentOwner,ye=!1;function de(t,e,n,r){e.child=t===null?Hd(e,null,n,r):Wn(e,t.child,n,r)}function Lu(t,e,n,r,i){n=n.render;var s=e.ref;return bn(e,i),r=ll(t,e,n,r,s,i),n=ul(),t!==null&&!ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dt(t,e,i)):($&&n&&Xa(e),e.flags|=1,de(t,e,r,i),e.child)}function Uu(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_l(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gf(t,e,s,r,i)):(t=Fi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(o,r)&&t.ref===e.ref)return dt(t,e,i)}return e.flags|=1,t=bt(s,r),t.ref=e.ref,t.return=e,e.child=t}function gf(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ur(s,r)&&t.ref===e.ref)if(ye=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ye=!0);else return e.lanes=t.lanes,dt(t,e,i)}return la(t,e,n,r,i)}function vf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(xn,Ee),Ee|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(xn,Ee),Ee|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(xn,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,F(xn,Ee),Ee|=r;return de(t,e,i,n),e.child}function yf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function la(t,e,n,r,i){var s=we(n)?an:ue.current;return s=Hn(e,s),bn(e,i),n=ll(t,e,n,r,s,i),r=ul(),t!==null&&!ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dt(t,e,i)):($&&r&&Xa(e),e.flags|=1,de(t,e,n,i),e.child)}function Mu(t,e,n,r,i){if(we(n)){var s=!0;Zi(e)}else s=!1;if(bn(e,i),e.stateNode===null)Ui(t,e),hf(e,n,r),oa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=we(n)?an:ue.current,u=Hn(e,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ou(e,o,r,u),wt=!1;var p=e.memoizedState;o.state=p,is(e,r,o,i),l=e.memoizedState,a!==r||p!==l||_e.current||wt?(typeof h=="function"&&(sa(e,n,h,r),l=e.memoizedState),(a=wt||Nu(e,n,a,r,p,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Wd(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:be(e.type,a),o.props=u,m=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=De(l):(l=we(n)?an:ue.current,l=Hn(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==l)&&Ou(e,o,r,l),wt=!1,p=e.memoizedState,o.state=p,is(e,r,o,i);var v=e.memoizedState;a!==m||p!==v||_e.current||wt?(typeof y=="function"&&(sa(e,n,y,r),v=e.memoizedState),(u=wt||Nu(e,n,u,r,p,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ua(t,e,n,r,s,i)}function ua(t,e,n,r,i,s){yf(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Su(e,n,!1),dt(t,e,s);r=e.stateNode,sg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wn(e,t.child,null,s),e.child=Wn(e,null,a,s)):de(t,e,a,s),e.memoizedState=r.state,i&&Su(e,n,!0),e.child}function _f(t){var e=t.stateNode;e.pendingContext?wu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wu(t,e.context,!1),il(t,e.containerInfo)}function bu(t,e,n,r,i){return Vn(),Ja(i),e.flags|=256,de(t,e,n,r),e.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(t){return{baseLanes:t,cachePool:null,transitions:null}}function wf(t,e,n){var r=e.pendingProps,i=H.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),F(H,i&1),t===null)return ra(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ds(o,r,0,null),t=sn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=da(n),e.memoizedState=ca,t):fl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return og(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=bt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bt(a,s):(s=sn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?da(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ca,r}return s=t.child,t=s.sibling,r=bt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fl(t,e){return e=Ds({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wi(t,e,n,r){return r!==null&&Ja(r),Wn(e,t.child,null,n),t=fl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function og(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mo(Error(_(422))),wi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ds({mode:"visible",children:r.children},i,0,null),s=sn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wn(e,t.child,null,o),e.child.memoizedState=da(o),e.memoizedState=ca,s);if(!(e.mode&1))return wi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=mo(s,r,void 0),wi(t,e,o,r)}if(a=(o&t.childLanes)!==0,ye||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ct(t,i),Be(r,t,i,-1))}return yl(),r=mo(Error(_(421))),wi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_g.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ke=Dt(i.nextSibling),Te=e,$=!0,ze=null,t!==null&&(Ne[Oe++]=et,Ne[Oe++]=tt,Ne[Oe++]=ln,et=t.id,tt=t.overflow,ln=e),e=fl(e,r.children),e.flags|=4096,e)}function Fu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ia(t.return,e,n)}function go(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sf(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(de(t,e,r.children,n),r=H.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fu(t,n,e);else if(t.tag===19)Fu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F(H,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ss(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),go(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ss(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}go(e,!0,n,null,s);break;case"together":go(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ui(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=bt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ag(t,e,n){switch(e.tag){case 3:_f(e),Vn();break;case 5:Gd(e);break;case 1:we(e.type)&&Zi(e);break;case 4:il(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;F(ns,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(F(H,H.current&1),e.flags|=128,null):n&e.child.childLanes?wf(t,e,n):(F(H,H.current&1),t=dt(t,e,n),t!==null?t.sibling:null);F(H,H.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(H,H.current),r)break;return null;case 22:case 23:return e.lanes=0,vf(t,e,n)}return dt(t,e,n)}var Ef,fa,kf,If;Ef=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};kf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,nn(qe.current);var s=null;switch(n){case"input":i=Lo(t,i),r=Lo(t,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=bo(t,i),r=bo(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yi)}zo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};If=function(t,e,n,r){n!==r&&(e.flags|=4)};function cr(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lg(t,e,n){var r=e.pendingProps;switch(Ya(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return we(e.type)&&Ji(),ae(e),null;case 3:return r=e.stateNode,Gn(),j(_e),j(ue),ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ze!==null&&(wa(ze),ze=null))),fa(t,e),ae(e),null;case 5:sl(e);var i=nn(jr.current);if(n=e.type,t!==null&&e.stateNode!=null)kf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return ae(e),null}if(t=nn(qe.current),yi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[We]=e,r[Fr]=s,t=(e.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)z(gr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Kl(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":Ql(r,s),z("invalid",r)}zo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vi(r.textContent,a,t),i=["children",""+a]):Pr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":ui(r),ql(r,s,!0);break;case"textarea":ui(r),Xl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[We]=e,t[Fr]=r,Ef(t,e,!1,!1),e.stateNode=t;e:{switch(o=jo(n,r),n){case"dialog":z("cancel",t),z("close",t),i=r;break;case"iframe":case"object":case"embed":z("load",t),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)z(gr[i],t);i=r;break;case"source":z("error",t),i=r;break;case"img":case"image":case"link":z("error",t),z("load",t),i=r;break;case"details":z("toggle",t),i=r;break;case"input":Kl(t,r),i=Lo(t,r),z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),z("invalid",t);break;case"textarea":Ql(t,r),i=bo(t,r),z("invalid",t);break;default:i=r}zo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ed(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jc(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(t,l):typeof l=="number"&&Nr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",t):l!=null&&Ma(t,s,l,o))}switch(n){case"input":ui(t),ql(t,r,!1);break;case"textarea":ui(t),Xl(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$t(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Dn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Dn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ae(e),null;case 6:if(t&&e.stateNode!=null)If(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=nn(jr.current),nn(qe.current),yi(e)){if(r=e.stateNode,n=e.memoizedProps,r[We]=e,(s=r.nodeValue!==n)&&(t=Te,t!==null))switch(t.tag){case 3:vi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=e,e.stateNode=r}return ae(e),null;case 13:if(j(H),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&ke!==null&&e.mode&1&&!(e.flags&128))Bd(),Vn(),e.flags|=98560,s=!1;else if(s=yi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[We]=e}else Vn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ae(e),s=!1}else ze!==null&&(wa(ze),ze=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||H.current&1?J===0&&(J=3):yl())),e.updateQueue!==null&&(e.flags|=4),ae(e),null);case 4:return Gn(),fa(t,e),t===null&&Mr(e.stateNode.containerInfo),ae(e),null;case 10:return tl(e.type._context),ae(e),null;case 17:return we(e.type)&&Ji(),ae(e),null;case 19:if(j(H),s=e.memoizedState,s===null)return ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)cr(s,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ss(t),o!==null){for(e.flags|=128,cr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return F(H,H.current&1|2),e.child}t=t.sibling}s.tail!==null&&Q()>qn&&(e.flags|=128,r=!0,cr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ss(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),cr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return ae(e),null}else 2*Q()-s.renderingStartTime>qn&&n!==1073741824&&(e.flags|=128,r=!0,cr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Q(),e.sibling=null,n=H.current,F(H,r?n&1|2:n&1),e):(ae(e),null);case 22:case 23:return vl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ee&1073741824&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function ug(t,e){switch(Ya(e),e.tag){case 1:return we(e.type)&&Ji(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gn(),j(_e),j(ue),ol(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sl(e),null;case 13:if(j(H),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));Vn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(H),null;case 4:return Gn(),null;case 10:return tl(e.type._context),null;case 22:case 23:return vl(),null;case 24:return null;default:return null}}var Si=!1,le=!1,cg=typeof WeakSet=="function"?WeakSet:Set,k=null;function On(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(t,e,r)}else n.current=null}function ha(t,e,n){try{n()}catch(r){K(t,e,r)}}var zu=!1;function dg(t,e){if(Xo=qi,t=Pd(),Qa(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,m=t,p=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++h===r&&(l=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yo={focusedElem:t,selectionRange:n},qi=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,P=v.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?w:be(e.type,w),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(g){K(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=zu,zu=!1,v}function kr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ha(e,n,s)}i=i.next}while(i!==r)}}function xs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tf(t){var e=t.alternate;e!==null&&(t.alternate=null,Tf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[We],delete e[Fr],delete e[ea],delete e[Km],delete e[qm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cf(t){return t.tag===5||t.tag===3||t.tag===4}function ju(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ma(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yi));else if(r!==4&&(t=t.child,t!==null))for(ma(t,e,n),t=t.sibling;t!==null;)ma(t,e,n),t=t.sibling}function ga(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ga(t,e,n),t=t.sibling;t!==null;)ga(t,e,n),t=t.sibling}var ne=null,Fe=!1;function vt(t,e,n){for(n=n.child;n!==null;)Rf(t,e,n),n=n.sibling}function Rf(t,e,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ks,n)}catch{}switch(n.tag){case 5:le||On(n,e);case 6:var r=ne,i=Fe;ne=null,vt(t,e,n),ne=r,Fe=i,ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?lo(t.parentNode,n):t.nodeType===1&&lo(t,n),Dr(t)):lo(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,vt(t,e,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ha(n,e,o),i=i.next}while(i!==r)}vt(t,e,n);break;case 1:if(!le&&(On(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,e,a)}vt(t,e,n);break;case 21:vt(t,e,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,vt(t,e,n),le=r):vt(t,e,n);break;default:vt(t,e,n)}}function Bu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cg),e.forEach(function(r){var i=wg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Fe=!1;break e;case 3:ne=a.stateNode.containerInfo,Fe=!0;break e;case 4:ne=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ne===null)throw Error(_(160));Rf(s,o,i),ne=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pf(e,t),e=e.sibling}function Pf(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Me(e,t),He(t),r&4){try{kr(3,t,t.return),xs(3,t)}catch(w){K(t,t.return,w)}try{kr(5,t,t.return)}catch(w){K(t,t.return,w)}}break;case 1:Me(e,t),He(t),r&512&&n!==null&&On(n,n.return);break;case 5:if(Me(e,t),He(t),r&512&&n!==null&&On(n,n.return),t.flags&32){var i=t.stateNode;try{Nr(i,"")}catch(w){K(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qc(i,s),jo(a,o);var u=jo(a,s);for(o=0;o<l.length;o+=2){var h=l[o],m=l[o+1];h==="style"?ed(i,m):h==="dangerouslySetInnerHTML"?Jc(i,m):h==="children"?Nr(i,m):Ma(i,h,m,u)}switch(a){case"input":Uo(i,s);break;case"textarea":Xc(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Dn(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Dn(i,!!s.multiple,s.defaultValue,!0):Dn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fr]=s}catch(w){K(t,t.return,w)}}break;case 6:if(Me(e,t),He(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){K(t,t.return,w)}}break;case 3:if(Me(e,t),He(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(e.containerInfo)}catch(w){K(t,t.return,w)}break;case 4:Me(e,t),He(t);break;case 13:Me(e,t),He(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ml=Q())),r&4&&Bu(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(le=(u=le)||h,Me(e,t),le=u):Me(e,t),He(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(k=t,h=t.child;h!==null;){for(m=k=h;k!==null;){switch(p=k,y=p.child,p.tag){case 0:case 11:case 14:case 15:kr(4,p,p.return);break;case 1:On(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:On(p,p.return);break;case 22:if(p.memoizedState!==null){Hu(m);continue}}y!==null?(y.return=p,k=y):Hu(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zc("display",o))}catch(w){K(t,t.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){K(t,t.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(e,t),He(t),r&4&&Bu(t);break;case 21:break;default:Me(e,t),He(t)}}function He(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var s=ju(t);ga(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ju(t);ma(t,a,o);break;default:throw Error(_(161))}}catch(l){K(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fg(t,e,n){k=t,Nf(t)}function Nf(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Si;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=Si;var u=le;if(Si=o,(le=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Vu(i):l!==null?(l.return=o,k=l):Vu(i);for(;s!==null;)k=s,Nf(s),s=s.sibling;k=i,Si=a,le=u}$u(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):$u(t)}}function $u(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:le||xs(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:be(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cu(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cu(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}le||e.flags&512&&pa(e)}catch(p){K(e,e.return,p)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Hu(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Vu(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xs(4,e)}catch(l){K(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){K(e,i,l)}}var s=e.return;try{pa(e)}catch(l){K(e,s,l)}break;case 5:var o=e.return;try{pa(e)}catch(l){K(e,o,l)}}}catch(l){K(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var hg=Math.ceil,ls=mt.ReactCurrentDispatcher,hl=mt.ReactCurrentOwner,Ae=mt.ReactCurrentBatchConfig,L=0,te=null,X=null,ie=0,Ee=0,xn=Gt(0),J=0,Vr=null,cn=0,As=0,pl=0,Ir=null,ve=null,ml=0,qn=1/0,Je=null,us=!1,va=null,Ut=null,Ei=!1,Nt=null,cs=0,Tr=0,ya=null,Mi=-1,bi=0;function fe(){return L&6?Q():Mi!==-1?Mi:Mi=Q()}function Mt(t){return t.mode&1?L&2&&ie!==0?ie&-ie:Xm.transition!==null?(bi===0&&(bi=fd()),bi):(t=M,t!==0||(t=window.event,t=t===void 0?16:_d(t.type)),t):1}function Be(t,e,n,r){if(50<Tr)throw Tr=0,ya=null,Error(_(185));qr(t,n,r),(!(L&2)||t!==te)&&(t===te&&(!(L&2)&&(As|=n),J===4&&Et(t,ie)),Se(t,r),n===1&&L===0&&!(e.mode&1)&&(qn=Q()+500,Ps&&Kt()))}function Se(t,e){var n=t.callbackNode;Xp(t,e);var r=Ki(t,t===te?ie:0);if(r===0)n!==null&&Zl(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zl(n),e===1)t.tag===0?Qm(Wu.bind(null,t)):Fd(Wu.bind(null,t)),Wm(function(){!(L&6)&&Kt()}),n=null;else{switch(hd(r)){case 1:n=Ba;break;case 4:n=cd;break;case 16:n=Gi;break;case 536870912:n=dd;break;default:n=Gi}n=bf(n,Of.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Of(t,e){if(Mi=-1,bi=0,L&6)throw Error(_(327));var n=t.callbackNode;if(Fn()&&t.callbackNode!==n)return null;var r=Ki(t,t===te?ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ds(t,r);else{e=r;var i=L;L|=2;var s=Af();(te!==t||ie!==e)&&(Je=null,qn=Q()+500,rn(t,e));do try{gg();break}catch(a){xf(t,a)}while(!0);el(),ls.current=s,L=i,X!==null?e=0:(te=null,ie=0,e=J)}if(e!==0){if(e===2&&(i=Wo(t),i!==0&&(r=i,e=_a(t,i))),e===1)throw n=Vr,rn(t,0),Et(t,r),Se(t,Q()),n;if(e===6)Et(t,r);else{if(i=t.current.alternate,!(r&30)&&!pg(i)&&(e=ds(t,r),e===2&&(s=Wo(t),s!==0&&(r=s,e=_a(t,s))),e===1))throw n=Vr,rn(t,0),Et(t,r),Se(t,Q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Jt(t,ve,Je);break;case 3:if(Et(t,r),(r&130023424)===r&&(e=ml+500-Q(),10<e)){if(Ki(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zo(Jt.bind(null,t,ve,Je),e);break}Jt(t,ve,Je);break;case 4:if(Et(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-je(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hg(r/1960))-r,10<r){t.timeoutHandle=Zo(Jt.bind(null,t,ve,Je),r);break}Jt(t,ve,Je);break;case 5:Jt(t,ve,Je);break;default:throw Error(_(329))}}}return Se(t,Q()),t.callbackNode===n?Of.bind(null,t):null}function _a(t,e){var n=Ir;return t.current.memoizedState.isDehydrated&&(rn(t,e).flags|=256),t=ds(t,e),t!==2&&(e=ve,ve=n,e!==null&&wa(e)),t}function wa(t){ve===null?ve=t:ve.push.apply(ve,t)}function pg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$e(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Et(t,e){for(e&=~pl,e&=~As,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-je(e),r=1<<n;t[n]=-1,e&=~r}}function Wu(t){if(L&6)throw Error(_(327));Fn();var e=Ki(t,0);if(!(e&1))return Se(t,Q()),null;var n=ds(t,e);if(t.tag!==0&&n===2){var r=Wo(t);r!==0&&(e=r,n=_a(t,r))}if(n===1)throw n=Vr,rn(t,0),Et(t,e),Se(t,Q()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jt(t,ve,Je),Se(t,Q()),null}function gl(t,e){var n=L;L|=1;try{return t(e)}finally{L=n,L===0&&(qn=Q()+500,Ps&&Kt())}}function dn(t){Nt!==null&&Nt.tag===0&&!(L&6)&&Fn();var e=L;L|=1;var n=Ae.transition,r=M;try{if(Ae.transition=null,M=1,t)return t()}finally{M=r,Ae.transition=n,L=e,!(L&6)&&Kt()}}function vl(){Ee=xn.current,j(xn)}function rn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vm(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Gn(),j(_e),j(ue),ol();break;case 5:sl(r);break;case 4:Gn();break;case 13:j(H);break;case 19:j(H);break;case 10:tl(r.type._context);break;case 22:case 23:vl()}n=n.return}if(te=t,X=t=bt(t.current,null),ie=Ee=e,J=0,Vr=null,pl=As=cn=0,ve=Ir=null,tn!==null){for(e=0;e<tn.length;e++)if(n=tn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}tn=null}return t}function xf(t,e){do{var n=X;try{if(el(),Di.current=as,os){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}os=!1}if(un=0,ee=Y=V=null,Er=!1,Br=0,hl.current=null,n===null||n.return===null){J=1,Vr=e,X=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Au(o);if(y!==null){y.flags&=-257,Du(y,o,a,s,e),y.mode&1&&xu(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){xu(s,u,e),yl();break e}l=Error(_(426))}}else if($&&a.mode&1){var P=Au(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Du(P,o,a,s,e),Ja(Kn(l,a));break e}}s=l=Kn(l,a),J!==4&&(J=2),Ir===null?Ir=[s]:Ir.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=pf(s,l,e);Tu(s,f);break e;case 1:a=l;var c=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ut===null||!Ut.has(d)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=mf(s,a,e);Tu(s,g);break e}}s=s.return}while(s!==null)}Lf(n)}catch(S){e=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Af(){var t=ls.current;return ls.current=as,t===null?as:t}function yl(){(J===0||J===3||J===2)&&(J=4),te===null||!(cn&268435455)&&!(As&268435455)||Et(te,ie)}function ds(t,e){var n=L;L|=2;var r=Af();(te!==t||ie!==e)&&(Je=null,rn(t,e));do try{mg();break}catch(i){xf(t,i)}while(!0);if(el(),L=n,ls.current=r,X!==null)throw Error(_(261));return te=null,ie=0,J}function mg(){for(;X!==null;)Df(X)}function gg(){for(;X!==null&&!Bp();)Df(X)}function Df(t){var e=Mf(t.alternate,t,Ee);t.memoizedProps=t.pendingProps,e===null?Lf(t):X=e,hl.current=null}function Lf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ug(n,e),n!==null){n.flags&=32767,X=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,X=null;return}}else if(n=lg(n,e,Ee),n!==null){X=n;return}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);J===0&&(J=5)}function Jt(t,e,n){var r=M,i=Ae.transition;try{Ae.transition=null,M=1,vg(t,e,n,r)}finally{Ae.transition=i,M=r}return null}function vg(t,e,n,r){do Fn();while(Nt!==null);if(L&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yp(t,s),t===te&&(X=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ei||(Ei=!0,bf(Gi,function(){return Fn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ae.transition,Ae.transition=null;var o=M;M=1;var a=L;L|=4,hl.current=null,dg(t,n),Pf(n,t),bm(Yo),qi=!!Xo,Yo=Xo=null,t.current=n,fg(n),$p(),L=a,M=o,Ae.transition=s}else t.current=n;if(Ei&&(Ei=!1,Nt=t,cs=i),s=t.pendingLanes,s===0&&(Ut=null),Wp(n.stateNode),Se(t,Q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(us)throw us=!1,t=va,va=null,t;return cs&1&&t.tag!==0&&Fn(),s=t.pendingLanes,s&1?t===ya?Tr++:(Tr=0,ya=t):Tr=0,Kt(),null}function Fn(){if(Nt!==null){var t=hd(cs),e=Ae.transition,n=M;try{if(Ae.transition=null,M=16>t?16:t,Nt===null)var r=!1;else{if(t=Nt,Nt=null,cs=0,L&6)throw Error(_(331));var i=L;for(L|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:kr(8,h,s)}var m=h.child;if(m!==null)m.return=h,k=m;else for(;k!==null;){h=k;var p=h.sibling,y=h.return;if(Tf(h),h===u){k=null;break}if(p!==null){p.return=y,k=p;break}k=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:kr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,k=f;break e}k=s.return}}var c=t.current;for(k=c;k!==null;){o=k;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,k=d;else e:for(o=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xs(9,a)}}catch(S){K(a,a.return,S)}if(a===o){k=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,k=g;break e}k=a.return}}if(L=i,Kt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ks,t)}catch{}r=!0}return r}finally{M=n,Ae.transition=e}}return!1}function Gu(t,e,n){e=Kn(n,e),e=pf(t,e,1),t=Lt(t,e,1),e=fe(),t!==null&&(qr(t,1,e),Se(t,e))}function K(t,e,n){if(t.tag===3)Gu(t,t,n);else for(;e!==null;){if(e.tag===3){Gu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){t=Kn(n,t),t=mf(e,t,1),e=Lt(e,t,1),t=fe(),e!==null&&(qr(e,1,t),Se(e,t));break}}e=e.return}}function yg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=fe(),t.pingedLanes|=t.suspendedLanes&n,te===t&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>Q()-ml?rn(t,0):pl|=n),Se(t,e)}function Uf(t,e){e===0&&(t.mode&1?(e=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):e=1);var n=fe();t=ct(t,e),t!==null&&(qr(t,e,n),Se(t,n))}function _g(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uf(t,n)}function wg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),Uf(t,n)}var Mf;Mf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_e.current)ye=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ye=!1,ag(t,e,n);ye=!!(t.flags&131072)}else ye=!1,$&&e.flags&1048576&&zd(e,ts,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ui(t,e),t=e.pendingProps;var i=Hn(e,ue.current);bn(e,n),i=ll(null,e,r,t,i,n);var s=ul();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,we(r)?(s=!0,Zi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rl(e),i.updater=Os,e.stateNode=i,i._reactInternals=e,oa(e,r,t,n),e=ua(null,e,r,!0,s,n)):(e.tag=0,$&&s&&Xa(e),de(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ui(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Eg(r),t=be(r,t),i){case 0:e=la(null,e,r,t,n);break e;case 1:e=Mu(null,e,r,t,n);break e;case 11:e=Lu(null,e,r,t,n);break e;case 14:e=Uu(null,e,r,be(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),la(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),Mu(t,e,r,i,n);case 3:e:{if(_f(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Wd(t,e),is(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Kn(Error(_(423)),e),e=bu(t,e,r,n,i);break e}else if(r!==i){i=Kn(Error(_(424)),e),e=bu(t,e,r,n,i);break e}else for(ke=Dt(e.stateNode.containerInfo.firstChild),Te=e,$=!0,ze=null,n=Hd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){e=dt(t,e,n);break e}de(t,e,r,n)}e=e.child}return e;case 5:return Gd(e),t===null&&ra(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jo(r,i)?o=null:s!==null&&Jo(r,s)&&(e.flags|=32),yf(t,e),de(t,e,o,n),e.child;case 6:return t===null&&ra(e),null;case 13:return wf(t,e,n);case 4:return il(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wn(e,null,r,n):de(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),Lu(t,e,r,i,n);case 7:return de(t,e,e.pendingProps,n),e.child;case 8:return de(t,e,e.pendingProps.children,n),e.child;case 12:return de(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,F(ns,r._currentValue),r._currentValue=o,s!==null)if($e(s.value,o)){if(s.children===i.children&&!_e.current){e=dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ia(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}de(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bn(e,n),i=De(i),r=r(i),e.flags|=1,de(t,e,r,n),e.child;case 14:return r=e.type,i=be(r,e.pendingProps),i=be(r.type,i),Uu(t,e,r,i,n);case 15:return gf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),Ui(t,e),e.tag=1,we(r)?(t=!0,Zi(e)):t=!1,bn(e,n),hf(e,r,i),oa(e,r,i,n),ua(null,e,r,!0,t,n);case 19:return Sf(t,e,n);case 22:return vf(t,e,n)}throw Error(_(156,e.tag))};function bf(t,e){return ud(t,e)}function Sg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,n,r){return new Sg(t,e,n,r)}function _l(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Eg(t){if(typeof t=="function")return _l(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fa)return 11;if(t===za)return 14}return 2}function bt(t,e){var n=t.alternate;return n===null?(n=xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fi(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_l(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sn:return sn(n.children,i,s,e);case ba:o=8,i|=8;break;case Oo:return t=xe(12,n,e,i|2),t.elementType=Oo,t.lanes=s,t;case xo:return t=xe(13,n,e,i),t.elementType=xo,t.lanes=s,t;case Ao:return t=xe(19,n,e,i),t.elementType=Ao,t.lanes=s,t;case Gc:return Ds(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vc:o=10;break e;case Wc:o=9;break e;case Fa:o=11;break e;case za:o=14;break e;case _t:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function sn(t,e,n,r){return t=xe(7,t,r,e),t.lanes=n,t}function Ds(t,e,n,r){return t=xe(22,t,r,e),t.elementType=Gc,t.lanes=n,t.stateNode={isHidden:!1},t}function vo(t,e,n){return t=xe(6,t,null,e),t.lanes=n,t}function yo(t,e,n){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wl(t,e,n,r,i,s,o,a,l){return t=new kg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rl(s),t}function Ig(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ff(t){if(!t)return Ht;t=t._reactInternals;e:{if(gn(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(we(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(we(n))return bd(t,n,e)}return e}function zf(t,e,n,r,i,s,o,a,l){return t=wl(n,r,!0,t,i,s,o,a,l),t.context=Ff(null),n=t.current,r=fe(),i=Mt(n),s=ot(r,i),s.callback=e??null,Lt(n,s,i),t.current.lanes=i,qr(t,i,r),Se(t,r),t}function Ls(t,e,n,r){var i=e.current,s=fe(),o=Mt(i);return n=Ff(n),e.context===null?e.context=n:e.pendingContext=n,e=ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lt(i,e,o),t!==null&&(Be(t,i,o,s),Ai(t,i,o)),o}function fs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ku(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sl(t,e){Ku(t,e),(t=t.alternate)&&Ku(t,e)}function Tg(){return null}var jf=typeof reportError=="function"?reportError:function(t){console.error(t)};function El(t){this._internalRoot=t}Us.prototype.render=El.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));Ls(t,e,null,null)};Us.prototype.unmount=El.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dn(function(){Ls(null,t,null,null)}),e[ut]=null}};function Us(t){this._internalRoot=t}Us.prototype.unstable_scheduleHydration=function(t){if(t){var e=gd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<St.length&&e!==0&&e<St[n].priority;n++);St.splice(n,0,t),n===0&&yd(t)}};function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ms(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qu(){}function Cg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fs(o);s.call(u)}}var o=zf(e,r,t,0,null,!1,!1,"",qu);return t._reactRootContainer=o,t[ut]=o.current,Mr(t.nodeType===8?t.parentNode:t),dn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fs(l);a.call(u)}}var l=wl(t,0,!1,null,null,!1,!1,"",qu);return t._reactRootContainer=l,t[ut]=l.current,Mr(t.nodeType===8?t.parentNode:t),dn(function(){Ls(e,l,n,r)}),l}function bs(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=fs(o);a.call(l)}}Ls(e,o,t,i)}else o=Cg(n,e,t,i,r);return fs(o)}pd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mr(e.pendingLanes);n!==0&&($a(e,n|1),Se(e,Q()),!(L&6)&&(qn=Q()+500,Kt()))}break;case 13:dn(function(){var r=ct(t,1);if(r!==null){var i=fe();Be(r,t,1,i)}}),Sl(t,1)}};Ha=function(t){if(t.tag===13){var e=ct(t,134217728);if(e!==null){var n=fe();Be(e,t,134217728,n)}Sl(t,134217728)}};md=function(t){if(t.tag===13){var e=Mt(t),n=ct(t,e);if(n!==null){var r=fe();Be(n,t,e,r)}Sl(t,e)}};gd=function(){return M};vd=function(t,e){var n=M;try{return M=t,e()}finally{M=n}};$o=function(t,e,n){switch(e){case"input":if(Uo(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rs(r);if(!i)throw Error(_(90));qc(r),Uo(r,i)}}}break;case"textarea":Xc(t,n);break;case"select":e=n.value,e!=null&&Dn(t,!!n.multiple,e,!1)}};rd=gl;id=dn;var Rg={usingClientEntryPoint:!1,Events:[Xr,Tn,Rs,td,nd,gl]},dr={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pg={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ad(t),t===null?null:t.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ks=ki.inject(Pg),Ke=ki}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Re.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kl(e))throw Error(_(200));return Ig(t,e,null,n)};Re.createRoot=function(t,e){if(!kl(t))throw Error(_(299));var n=!1,r="",i=jf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wl(t,1,!1,null,null,n,!1,r,i),t[ut]=e.current,Mr(t.nodeType===8?t.parentNode:t),new El(e)};Re.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=ad(e),t=t===null?null:t.stateNode,t};Re.flushSync=function(t){return dn(t)};Re.hydrate=function(t,e,n){if(!Ms(e))throw Error(_(200));return bs(null,t,e,!0,n)};Re.hydrateRoot=function(t,e,n){if(!kl(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zf(e,null,t,1,n??null,i,!1,s,o),t[ut]=e.current,Mr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Us(e)};Re.render=function(t,e,n){if(!Ms(e))throw Error(_(200));return bs(null,t,e,!1,n)};Re.unmountComponentAtNode=function(t){if(!Ms(t))throw Error(_(40));return t._reactRootContainer?(dn(function(){bs(null,null,t,!1,function(){t._reactRootContainer=null,t[ut]=null})}),!0):!1};Re.unstable_batchedUpdates=gl;Re.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ms(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return bs(t,e,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(t){console.error(t)}}Bf(),jc.exports=Re;var Ng=jc.exports,$f,Qu=Ng;$f=Qu.createRoot,Qu.hydrateRoot;var Xu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Og=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,m=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(p=64)),r.push(n[h],n[m],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Og(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new xg;const p=s<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),m!==64){const v=u<<6&192|m;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ag=function(t){const e=Hf(t);return Vf.encodeByteArray(e,!0)},hs=function(t){return Ag(t).replace(/\./g,"")},Wf=function(t){try{return Vf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=()=>Dg().__FIREBASE_DEFAULTS__,Ug=()=>{if(typeof process>"u"||typeof Xu>"u")return;const t=Xu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wf(t[1]);return e&&JSON.parse(e)},Il=()=>{try{return Lg()||Ug()||Mg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gf=t=>{var e,n;return(n=(e=Il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bg=t=>{const e=Gf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kf=()=>{var t;return(t=Il())===null||t===void 0?void 0:t.config},qf=t=>{var e;return(e=Il())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hs(JSON.stringify(n)),hs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function Bg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hg(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vg(){try{return typeof indexedDB=="object"}catch{return!1}}function Wg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gg,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gt(i,a,r)}}function Kg(t,e){return t.replace(qg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qg=/\{\$([^}]+)}/g;function Qg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yu(s)&&Yu(o)){if(!ps(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xg(t,e){const n=new Yg(t,e);return n.subscribe.bind(n)}class Yg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_o),i.error===void 0&&(i.error=_o),i.complete===void 0&&(i.complete=_o);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _o(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tv(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ev(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(t){return t===Zt?void 0:t}function tv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const rv={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},iv=b.INFO,sv={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},ov=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qf{constructor(e){this.name=e,this._logLevel=iv,this._logHandler=ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const av=(t,e)=>e.some(n=>t instanceof n);let Ju,Zu;function lv(){return Ju||(Ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xf=new WeakMap,Sa=new WeakMap,Yf=new WeakMap,wo=new WeakMap,Tl=new WeakMap;function cv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ft(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xf.set(n,t)}).catch(()=>{}),Tl.set(e,t),e}function dv(t){if(Sa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sa.set(t,e)}let Ea={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fv(t){Ea=t(Ea)}function hv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(So(this),e,...n);return Yf.set(r,e.sort?e.sort():[e]),Ft(r)}:uv().includes(t)?function(...e){return t.apply(So(this),e),Ft(Xf.get(this))}:function(...e){return Ft(t.apply(So(this),e))}}function pv(t){return typeof t=="function"?hv(t):(t instanceof IDBTransaction&&dv(t),av(t,lv())?new Proxy(t,Ea):t)}function Ft(t){if(t instanceof IDBRequest)return cv(t);if(wo.has(t))return wo.get(t);const e=pv(t);return e!==t&&(wo.set(t,e),Tl.set(e,t)),e}const So=t=>Tl.get(t);function mv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ft(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ft(o.result),l.oldVersion,l.newVersion,Ft(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gv=["get","getKey","getAll","getAllKeys","count"],vv=["put","add","delete","clear"],Eo=new Map;function ec(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eo.get(e))return Eo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Eo.set(e,s),s}fv(t=>({...t,get:(e,n,r)=>ec(e,n)||t.get(e,n,r),has:(e,n)=>!!ec(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_v(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _v(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ka="@firebase/app",tc="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Qf("@firebase/app"),wv="@firebase/app-compat",Sv="@firebase/analytics-compat",Ev="@firebase/analytics",kv="@firebase/app-check-compat",Iv="@firebase/app-check",Tv="@firebase/auth",Cv="@firebase/auth-compat",Rv="@firebase/database",Pv="@firebase/database-compat",Nv="@firebase/functions",Ov="@firebase/functions-compat",xv="@firebase/installations",Av="@firebase/installations-compat",Dv="@firebase/messaging",Lv="@firebase/messaging-compat",Uv="@firebase/performance",Mv="@firebase/performance-compat",bv="@firebase/remote-config",Fv="@firebase/remote-config-compat",zv="@firebase/storage",jv="@firebase/storage-compat",Bv="@firebase/firestore",$v="@firebase/vertexai-preview",Hv="@firebase/firestore-compat",Vv="firebase",Wv="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="[DEFAULT]",Gv={[ka]:"fire-core",[wv]:"fire-core-compat",[Ev]:"fire-analytics",[Sv]:"fire-analytics-compat",[Iv]:"fire-app-check",[kv]:"fire-app-check-compat",[Tv]:"fire-auth",[Cv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Pv]:"fire-rtdb-compat",[Nv]:"fire-fn",[Ov]:"fire-fn-compat",[xv]:"fire-iid",[Av]:"fire-iid-compat",[Dv]:"fire-fcm",[Lv]:"fire-fcm-compat",[Uv]:"fire-perf",[Mv]:"fire-perf-compat",[bv]:"fire-rc",[Fv]:"fire-rc-compat",[zv]:"fire-gcs",[jv]:"fire-gcs-compat",[Bv]:"fire-fst",[Hv]:"fire-fst-compat",[$v]:"fire-vertex","fire-js":"fire-js",[Vv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,Kv=new Map,Ta=new Map;function nc(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(Ta.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Ta.set(e,t);for(const n of ms.values())nc(n,t);for(const n of Kv.values())nc(n,t);return!0}function Cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Jr("app","Firebase",qv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=Wv;function Jf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Kf()),!n)throw zt.create("no-options");const s=ms.get(i);if(s){if(ps(n,s.options)&&ps(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const o=new nv(i);for(const l of Ta.values())o.addComponent(l);const a=new Qv(n,r,o);return ms.set(i,a),a}function Zf(t=Ia){const e=ms.get(t);if(!e&&t===Ia&&Kf())return Jf();if(!e)throw zt.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let i=(r=Gv[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}Qn(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebase-heartbeat-database",Yv=1,Wr="firebase-heartbeat-store";let ko=null;function eh(){return ko||(ko=mv(Xv,Yv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wr)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),ko}async function Jv(t){try{const n=(await eh()).transaction(Wr),r=await n.objectStore(Wr).get(th(t));return await n.done,r}catch(e){if(e instanceof gt)ft.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function rc(t,e){try{const r=(await eh()).transaction(Wr,"readwrite");await r.objectStore(Wr).put(e,th(t)),await r.done}catch(n){if(n instanceof gt)ft.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(r.message)}}}function th(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=1024,ey=30*24*60*60*1e3;class ty{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ry(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ic();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ey}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ic(),{heartbeatsToSend:r,unsentEntries:i}=ny(this._heartbeatsCache.heartbeats),s=hs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ft.warn(n),""}}}function ic(){return new Date().toISOString().substring(0,10)}function ny(t,e=Zv){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?Wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sc(t){return hs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){Qn(new fn("platform-logger",e=>new yv(e),"PRIVATE")),Qn(new fn("heartbeat",e=>new ty(e),"PRIVATE")),jt(ka,tc,t),jt(ka,tc,"esm2017"),jt("fire-js","")}iy("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="firebasestorage.googleapis.com",rh="storageBucket",sy=2*60*1e3,oy=10*60*1e3,ay=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends gt{constructor(e,n,r=0){super(Io(e),`Firebase Storage: ${n} (${Io(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Io(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function Io(t){return"storage/"+t}function Rl(){const t="An unknown error occurred, please check the error payload for server response.";return new G(B.UNKNOWN,t)}function ly(t){return new G(B.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function uy(t){return new G(B.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cy(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G(B.UNAUTHENTICATED,t)}function dy(){return new G(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fy(t){return new G(B.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ih(){return new G(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sh(){return new G(B.CANCELED,"User canceled the upload/download.")}function hy(t){return new G(B.INVALID_URL,"Invalid URL '"+t+"'.")}function py(t){return new G(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function my(){return new G(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rh+"' property when initializing the app?")}function oh(){return new G(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gy(){return new G(B.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function vy(){return new G(B.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yy(t){return new G(B.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ca(t){return new G(B.INVALID_ARGUMENT,t)}function ah(){return new G(B.APP_DELETED,"The Firebase app was deleted.")}function _y(t){return new G(B.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cr(t,e){return new G(B.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fr(t){throw new G(B.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ie.makeFromUrl(e,n)}catch{return new Ie(e,"")}if(r.path==="")return r;throw py(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const h="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${m}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},w=n===nh?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",f=new RegExp(`^https?://${w}/${i}/${P}`,"i"),d=[{regex:a,indices:l,postModify:s},{regex:y,indices:v,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<d.length;g++){const S=d[g],E=S.regex.exec(e);if(E){const I=E[S.indices.bucket];let C=E[S.indices.path];C||(C=""),r=new Ie(I,C),S.postModify(r);break}}if(r==null)throw hy(e);return r}}class wy{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function m(P){i=setTimeout(()=>{i=null,t(y,l())},P)}function p(){s&&clearTimeout(s)}function y(P,...f){if(u){p();return}if(P){p(),h.call(null,P,...f);return}if(l()||o){p(),h.call(null,P,...f);return}r<64&&(r*=2);let d;a===1?(a=2,d=0):d=(r+Math.random())*1e3,m(d)}let v=!1;function w(P){v||(v=!0,p(),!u&&(i!==null?(P||(a=2),clearTimeout(i),m(0)):P||(a=1)))}return m(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function Ey(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){return t!==void 0}function Iy(t){return typeof t=="function"}function Ty(t){return typeof t=="object"&&!Array.isArray(t)}function Fs(t){return typeof t=="string"||t instanceof String}function oc(t){return Pl()&&t instanceof Blob}function Pl(){return typeof Blob<"u"}function ac(t,e,n,r){if(r<e)throw Ca(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ca(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lh(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var on;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(on||(on={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,r,i,s,o,a,l,u,h,m,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=m,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ii(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===on.NO_ERROR,l=s.getStatus();if(!a||uh(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===on.ABORT;r(!1,new Ii(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ii(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ky(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Rl();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ah():sh();o(l)}else{const l=ih();o(l)}};this.canceled_?n(!1,new Ii(!1,null,!0)):this.backoffId_=Sy(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ey(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ii{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ry(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Py(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ny(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Oy(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xy(t,e,n,r,i,s,o=!0){const a=lh(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Ny(u,e),Ry(u,n),Py(u,s),Oy(u,r),new Cy(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Dy(...t){const e=Ay();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pl())return new Blob(t);throw new G(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ly(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){if(typeof atob>"u")throw yy("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class To{constructor(e,n){this.data=e,this.contentType=n||null}}function My(t,e){switch(t){case Ge.RAW:return new To(ch(e));case Ge.BASE64:case Ge.BASE64URL:return new To(dh(t,e));case Ge.DATA_URL:return new To(Fy(e),zy(e))}throw Rl()}function ch(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function by(t){let e;try{e=decodeURIComponent(t)}catch{throw Cr(Ge.DATA_URL,"Malformed data URL.")}return ch(e)}function dh(t,e){switch(t){case Ge.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Cr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ge.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Cr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Uy(e)}catch(i){throw i.message.includes("polyfill")?i:Cr(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fh{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Cr(Ge.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jy(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Fy(t){const e=new fh(t);return e.base64?dh(Ge.BASE64,e.rest):by(e.rest)}function zy(t){return new fh(t).contentType}function jy(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){let r=0,i="";oc(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(oc(this.data_)){const r=this.data_,i=Ly(r,e,n);return i===null?null:new kt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new kt(r,!0)}}static getBlob(...e){if(Pl()){const n=e.map(r=>r instanceof kt?r.data_:r);return new kt(Dy.apply(null,n))}else{const n=e.map(o=>Fs(o)?My(Ge.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new kt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){let e;try{e=JSON.parse(t)}catch{return null}return Ty(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $y(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ph(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){return e}class ce{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Hy}}let Ti=null;function Vy(t){return!Fs(t)||t.length<2?t:ph(t)}function mh(){if(Ti)return Ti;const t=[];t.push(new ce("bucket")),t.push(new ce("generation")),t.push(new ce("metageneration")),t.push(new ce("name","fullPath",!0));function e(s,o){return Vy(o)}const n=new ce("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ce("size");return i.xform=r,t.push(i),t.push(new ce("timeCreated")),t.push(new ce("updated")),t.push(new ce("md5Hash",null,!0)),t.push(new ce("cacheControl",null,!0)),t.push(new ce("contentDisposition",null,!0)),t.push(new ce("contentEncoding",null,!0)),t.push(new ce("contentLanguage",null,!0)),t.push(new ce("contentType",null,!0)),t.push(new ce("metadata","customMetadata",!0)),Ti=t,Ti}function Wy(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ie(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Gy(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Wy(r,t),r}function gh(t,e,n){const r=hh(e);return r===null?null:Gy(t,r,n)}function Ky(t,e,n,r){const i=hh(e);if(i===null||!Fs(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,m=t.fullPath,p="/b/"+o(h)+"/o/"+o(m),y=ei(p,n,r),v=lh({alt:"media",token:u});return y+v})[0]}function vh(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class er{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){if(!t)throw Rl()}function Nl(t,e){function n(r,i){const s=gh(t,i,e);return at(s!==null),s}return n}function qy(t,e){function n(r,i){const s=gh(t,i,e);return at(s!==null),Ky(s,i,t.host,t._protocol)}return n}function ti(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=dy():i=cy():n.getStatus()===402?i=uy(t.bucket):n.getStatus()===403?i=fy(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yh(t){const e=ti(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ly(t.path)),s.serverResponse=i.serverResponse,s}return n}function Qy(t,e,n){const r=e.fullServerUrl(),i=ei(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new er(i,s,Nl(t,n),o);return a.errorHandler=yh(e),a}function Xy(t,e,n){const r=e.fullServerUrl(),i=ei(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new er(i,s,qy(t,n),o);return a.errorHandler=yh(e),a}function Yy(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _h(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Yy(null,e)),r}function Jy(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let d="";for(let g=0;g<2;g++)d=d+Math.random().toString().slice(2);return d}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=_h(e,r,i),h=vh(u,n),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",y=kt.getBlob(m,r,p);if(y===null)throw oh();const v={name:u.fullPath},w=ei(s,t.host,t._protocol),P="POST",f=t.maxUploadRetryTime,c=new er(w,P,Nl(t,n),f);return c.urlParams=v,c.headers=o,c.body=y.uploadData(),c.errorHandler=ti(e),c}class gs{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ol(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{at(!1)}return at(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Zy(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=_h(e,r,i),a={name:o.fullPath},l=ei(s,t.host,t._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=vh(o,n),p=t.maxUploadRetryTime;function y(w){Ol(w);let P;try{P=w.getResponseHeader("X-Goog-Upload-URL")}catch{at(!1)}return at(Fs(P)),P}const v=new er(l,u,y,p);return v.urlParams=a,v.headers=h,v.body=m,v.errorHandler=ti(e),v}function e_(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const h=Ol(u,["active","final"]);let m=null;try{m=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{at(!1)}m||at(!1);const p=Number(m);return at(!isNaN(p)),new gs(p,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new er(n,o,s,a);return l.headers=i,l.errorHandler=ti(e),l}const lc=256*1024;function t_(t,e,n,r,i,s,o,a){const l=new gs(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw gy();const u=l.total-l.current;let h=u;i>0&&(h=Math.min(h,i));const m=l.current,p=m+h;let y="";h===0?y="finalize":u===h?y="upload, finalize":y="upload";const v={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(m,p);if(w===null)throw oh();function P(g,S){const E=Ol(g,["active","final"]),I=l.current+h,C=r.size();let U;return E==="final"?U=Nl(e,s)(g,S):U=null,new gs(I,C,E==="final",U)}const f="POST",c=e.maxUploadRetryTime,d=new er(n,f,P,c);return d.headers=v,d.body=w.uploadData(),d.progressCallback=a||null,d.errorHandler=ti(t),d}const ge={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Co(t){switch(t){case"running":case"pausing":case"canceling":return ge.RUNNING;case"paused":return ge.PAUSED;case"success":return ge.SUCCESS;case"canceled":return ge.CANCELED;case"error":return ge.ERROR;default:return ge.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r){if(Iy(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class r_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=on.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=on.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=on.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw fr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class i_ extends r_{initXhr(){this.xhr_.responseType="text"}}function _n(){return new i_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=mh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(B.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(uh(i.status,[]))if(s)i=ih();else{this.sleepTime=Math.max(this.sleepTime*2,ay),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(B.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Zy(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,_n,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=e_(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,_n,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=lc*this._chunkMultiplier,n=new gs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=t_(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,_n,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){lc*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Qy(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,_n,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Jy(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,_n,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=sh(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Co(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new n_(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Co(this._state)){case ge.SUCCESS:yn(this._resolve.bind(null,this.snapshot))();break;case ge.CANCELED:case ge.ERROR:const n=this._reject;yn(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Co(this._state)){case ge.RUNNING:case ge.PAUSED:e.next&&yn(e.next.bind(e,this.snapshot))();break;case ge.SUCCESS:e.complete&&yn(e.complete.bind(e))();break;case ge.CANCELED:case ge.ERROR:e.error&&yn(e.error.bind(e,this._error))();break;default:e.error&&yn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this._service=e,n instanceof Ie?this._location=n:this._location=Ie.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hn(e,n)}get root(){const e=new Ie(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ph(this._location.path)}get storage(){return this._service}get parent(){const e=By(this._location.path);if(e===null)return null;const n=new Ie(this._location.bucket,e);return new hn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _y(e)}}function o_(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new s_(t,new kt(e),n)}function a_(t){t._throwIfRoot("getDownloadURL");const e=Xy(t.storage,t._location,mh());return t.storage.makeRequestWithTokens(e,_n).then(n=>{if(n===null)throw vy();return n})}function l_(t,e){const n=$y(t._location.path,e),r=new Ie(t._location.bucket,n);return new hn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){return/^[A-Za-z]+:\/\//.test(t)}function c_(t,e){return new hn(t,e)}function wh(t,e){if(t instanceof xl){const n=t;if(n._bucket==null)throw my();const r=new hn(n,n._bucket);return e!=null?wh(r,e):r}else return e!==void 0?l_(t,e):t}function d_(t,e){if(e&&u_(e)){if(t instanceof xl)return c_(t,e);throw Ca("To use ref(service, url), the first argument must be a Storage instance.")}else return wh(t,e)}function uc(t,e){const n=e==null?void 0:e[rh];return n==null?null:Ie.makeFromBucketSpec(n,t)}function f_(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:zg(i,t.app.options.projectId))}class xl{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sy,this._maxUploadRetryTime=oy,this._requests=new Set,i!=null?this._bucket=Ie.makeFromBucketSpec(i,this._host):this._bucket=uc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ie.makeFromBucketSpec(this._url,e):this._bucket=uc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ac("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ac("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hn(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new wy(ah());{const o=xy(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const cc="@firebase/storage",dc="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="storage";function h_(t,e,n){return t=Ye(t),o_(t,e,n)}function p_(t){return t=Ye(t),a_(t)}function m_(t,e){return t=Ye(t),d_(t,e)}function g_(t=Zf(),e){t=Ye(t);const r=Cl(t,Sh).getImmediate({identifier:e}),i=bg("storage");return i&&v_(r,...i),r}function v_(t,e,n,r={}){f_(t,e,n,r)}function y_(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new xl(n,r,i,e,Zn)}function __(){Qn(new fn(Sh,y_,"PUBLIC").setMultipleInstances(!0)),jt(cc,dc,""),jt(cc,dc,"esm2017")}__();var w_="firebase",S_="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(w_,S_,"app");function Al(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Eh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E_=Eh,kh=new Jr("auth","Firebase",Eh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Qf("@firebase/auth");function k_(t,...e){vs.logLevel<=b.WARN&&vs.warn(`Auth (${Zn}): ${t}`,...e)}function zi(t,...e){vs.logLevel<=b.ERROR&&vs.error(`Auth (${Zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw Dl(t,...e)}function Qe(t,...e){return Dl(t,...e)}function Ih(t,e,n){const r=Object.assign(Object.assign({},E_()),{[e]:n});return new Jr("auth","Firebase",r).create(e,{appName:t.name})}function Bt(t){return Ih(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kh.create(t,...e)}function N(t,e,...n){if(!t)throw Dl(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function pt(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I_(){return fc()==="http:"||fc()==="https:"}function fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||Bg()||"connection"in navigator)?navigator.onLine:!0}function C_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=jg()||$g()}get(){return T_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new ni(3e4,6e4);function zs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return Ch(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Th.fetch()(Ph(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ch(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R_),e);try{const i=new N_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ci(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ci(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ci(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ih(t,h,u);ht(t,h)}}catch(i){if(i instanceof gt)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function Rh(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ph(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ll(t.config,i):`${t.config.apiScheme}://${i}`}class N_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),P_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ci(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function Nh(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x_(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Ul(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Rr(Ro(i.auth_time)),issuedAtTime:Rr(Ro(i.iat)),expirationTime:Rr(Ro(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ro(t){return Number(t)*1e3}function Ul(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wf(n);return i?JSON.parse(i):(zi("Failed to decode base64 JWT payload"),null)}catch(i){return zi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hc(t){const e=Ul(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&A_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gr(t,Nh(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Oh(s.providerUserInfo):[],a=U_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pa(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function L_(t){const e=Ye(t);await ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Oh(t){return t.map(e=>{var{providerId:n}=e,r=Al(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t,e){const n=await Ch(t,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ph(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Th.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function b_(t,e){return tr(t,"POST","/v2/accounts:revokeToken",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=hc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await M_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zn;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x_(this,e)}reload(){return L_(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ys(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await Gr(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:d,emailVerified:g,isAnonymous:S,providerData:E,stsTokenManager:I}=n;N(d&&I,e,"internal-error");const C=zn.fromJSON(this.name,I);N(typeof d=="string",e,"internal-error"),yt(m,e.name),yt(p,e.name),N(typeof g=="boolean",e,"internal-error"),N(typeof S=="boolean",e,"internal-error"),yt(y,e.name),yt(v,e.name),yt(w,e.name),yt(P,e.name),yt(f,e.name),yt(c,e.name);const U=new it({uid:d,auth:e,email:p,emailVerified:g,displayName:m,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:C,createdAt:f,lastLoginAt:c});return E&&Array.isArray(E)&&(U.providerData=E.map(A=>Object.assign({},A))),P&&(U._redirectEventId=P),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new zn;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ys(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Oh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new zn;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Map;function st(t){pt(t instanceof Function,"Expected a class definition");let e=pc.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xh.type="NONE";const mc=xh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ji(this.userKey,i.apiKey,s),this.fullPersistenceKey=ji("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jn(st(mc),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||st(mc);const o=ji(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const m=it._fromJSON(e,h);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ah(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bh(e))return"Blackberry";if(Fh(e))return"Webos";if(Dh(e))return"Safari";if((e.includes("chrome/")||Lh(e))&&!e.includes("edge/"))return"Chrome";if(Mh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ah(t=he()){return/firefox\//i.test(t)}function Dh(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lh(t=he()){return/crios\//i.test(t)}function Uh(t=he()){return/iemobile/i.test(t)}function Mh(t=he()){return/android/i.test(t)}function bh(t=he()){return/blackberry/i.test(t)}function Fh(t=he()){return/webos/i.test(t)}function Ml(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F_(t=he()){var e;return Ml(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z_(){return Hg()&&document.documentMode===10}function zh(t=he()){return Ml(t)||Mh(t)||Fh(t)||bh(t)||/windows phone/i.test(t)||Uh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e=[]){let n;switch(t){case"Browser":n=gc(he());break;case"Worker":n=`${gc(he())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e={}){return tr(t,"GET","/v2/passwordPolicy",zs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=6;class H_{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new j_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nh(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ys(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(Bt(this));const n=e?Ye(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await B_(this),n=new H_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await b_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&k_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function js(t){return Ye(t)}class vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xg(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W_(t){bl=t}function G_(t){return bl.loadJS(t)}function K_(){return bl.gapiScript}function q_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){const n=Cl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ps(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function X_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Y_(t,e,n){const r=js(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Bh(e),{host:o,port:a}=J_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Z_()}function Bh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function J_(t){const e=Bh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yc(o)}}}function yc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Z_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t,e){return Rh(t,"POST","/v1/accounts:signInWithIdp",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="http://localhost";class pn extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Al(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bn(e,n)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ri{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ri{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends ri{constructor(){super("twitter.com")}static credential(e,n){return pn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return Rh(t,"POST","/v1/accounts:signUp",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),o=_c(r);return new Vt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_c(r);return new Vt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _c(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t){var e;if(nt(t.app))return Promise.reject(Bt(t));const n=js(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await t0(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends gt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _s(e,n,r,i)}}function Vh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_s._fromErrorAndOperation(t,s,e,r):s})}async function r0(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e,n=!1){const{auth:r}=t;if(nt(r.app))return Promise.reject(Bt(r));const i="reauthenticate";try{const s=await Gr(t,Vh(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Ul(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),Vt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e,n=!1){if(nt(t.app))return Promise.reject(Bt(t));const r="signIn",i=await Vh(t,r,e),s=await Vt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function o0(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function a0(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}const ws="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=1e3,u0=10;class Gh extends Wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);z_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,u0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gh.type="LOCAL";const c0=Gh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kh.type="SESSION";const qh=Kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await d0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Fl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function h0(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function p0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function g0(){return Qh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="firebaseLocalStorageDb",v0=1,Ss="firebaseLocalStorage",Yh="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $s(t,e){return t.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function y0(){const t=indexedDB.deleteDatabase(Xh);return new ii(t).toPromise()}function Na(){const t=indexedDB.open(Xh,v0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ss,{keyPath:Yh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ss)?e(r):(r.close(),await y0(),e(await Na()))})})}async function wc(t,e,n){const r=$s(t,!0).put({[Yh]:e,value:n});return new ii(r).toPromise()}async function _0(t,e){const n=$s(t,!1).get(e),r=await new ii(n).toPromise();return r===void 0?null:r.value}function Sc(t,e){const n=$s(t,!0).delete(e);return new ii(n).toPromise()}const w0=800,S0=3;class Jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>S0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(g0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await p0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await wc(e,ws,"1"),await Sc(e,ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$s(i,!1).getAll();return new ii(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jh.type="LOCAL";const E0=Jh;new ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t,e){return e?st(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends $h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function I0(t){return s0(t.auth,new zl(t),t.bypassAuthState)}function T0(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),i0(n,new zl(t),t.bypassAuthState)}async function C0(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),r0(n,new zl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return I0;case"linkViaPopup":case"linkViaRedirect":return C0;case"reauthViaPopup":case"reauthViaRedirect":return T0;default:ht(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new ni(2e3,1e4);class An extends Zh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,R0.get())};e()}}An.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="pendingRedirect",Bi=new Map;class N0 extends Zh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await O0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O0(t,e){const n=D0(e),r=A0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function x0(t,e){Bi.set(t._key(),e)}function A0(t){return st(t._redirectPersistence)}function D0(t){return ji(P0,t.config.apiKey,t.name)}async function L0(t,e,n=!1){if(nt(t.app))return Promise.reject(Bt(t));const r=js(t),i=k0(r,e),o=await new N0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=10*60*1e3;class M0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ep(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ec(e))}saveEventToCache(e){this.cachedEventUids.add(Ec(e)),this.lastProcessedEventTime=Date.now()}}function Ec(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j0=/^https?/;async function B0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await F0(t);for(const n of e)try{if($0(n))return}catch{}ht(t,"unauthorized-domain")}function $0(t){const e=Ra(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!j0.test(n))return!1;if(z0.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new ni(3e4,6e4);function kc(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V0(t){return new Promise((e,n)=>{var r,i,s;function o(){kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kc(),n(Qe(t,"network-request-failed"))},timeout:H0.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=q_("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},G_(`${K_()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $i=null,e})}let $i=null;function W0(t){return $i=$i||V0(t),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new ni(5e3,15e3),K0="__/auth/iframe",q0="emulator/auth/iframe",Q0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ll(e,q0):`https://${t.config.authDomain}/${K0}`,r={apiKey:e.apiKey,appName:t.name,v:Zn},i=X0.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zr(r).slice(1)}`}async function J0(t){const e=await W0(t),n=Xe().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:Y0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},G0.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ew=500,tw=600,nw="_blank",rw="http://localhost";class Ic{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iw(t,e,n,r=ew,i=tw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Z0),{width:r.toString(),height:i.toString(),top:s,left:o}),u=he().toLowerCase();n&&(a=Lh(u)?nw:n),Ah(u)&&(e=e||rw,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,v])=>`${p}${y}=${v},`,"");if(F_(u)&&a!=="_self")return sw(e||"",a),new Ic(null);const m=window.open(e||"",a,h);N(m,t,"popup-blocked");try{m.focus()}catch{}return new Ic(m)}function sw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="__/auth/handler",aw="emulator/auth/handler",lw=encodeURIComponent("fac");async function Tc(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zn,eventId:i};if(e instanceof Hh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof ri){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${lw}=${encodeURIComponent(l)}`:"";return`${uw(t)}?${Zr(a).slice(1)}${u}`}function uw({config:t}){return t.emulator?Ll(t,aw):`https://${t.authDomain}/${ow}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="webStorageSupport";class cw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qh,this._completeRedirectFn=L0,this._overrideRedirectResult=x0}async _openPopup(e,n,r,i){var s;pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tc(e,n,r,Ra(),i);return iw(e,o,Fl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tc(e,n,r,Ra(),i);return h0(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await J0(e),r=new M0(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Po,{type:Po},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Po];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zh()||Dh()||Ml()}}const dw=cw;var Cc="@firebase/auth",Rc="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pw(t){Qn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jh(t)},u=new V_(r,i,s,l);return X_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new fn("auth-internal",e=>{const n=js(e.getProvider("auth").getImmediate());return(r=>new fw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Cc,Rc,hw(t)),jt(Cc,Rc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=5*60,gw=qf("authIdTokenMaxAge")||mw;let Pc=null;const vw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gw)return;const i=n==null?void 0:n.token;Pc!==i&&(Pc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yw(t=Zf()){const e=Cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Q_(t,{popupRedirectResolver:dw,persistence:[E0,c0,qh]}),r=qf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=vw(s.toString());a0(n,o,()=>o(n.currentUser)),o0(n,a=>o(a))}}const i=Gf("auth");return i&&Y_(n,`http://${i}`),n}function _w(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}W_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_w().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pw("Browser");const ww={apiKey:"AIzaSyCc0o-D7WrLoYmvSlOLWwpK8oDnOleNHbQ",authDomain:"pilot-bandung.firebaseapp.com",projectId:"pilot-bandung",storageBucket:"pilot-bandung.appspot.com",messagingSenderId:"391844508499",appId:"1:391844508499:web:9789276d3e2d22624567a6"},tp=Jf(ww),Sw=yw(tp);n0(Sw).catch(t=>{console.error("Error signing in anonymously:",t)});const Ew=g_(tp),np="https://bluegill-top-dog.ngrok-free.app/v1",kw=fetch(`${np}/Jasa/Get_List_Jasa`,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"}).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).then(({data:t})=>t.map(n=>n.judul).filter(n=>n!="Direct")).catch(t=>{console.error("Error fetching data:",t)}),Iw=t=>fetch(`${np}/Testimoni/AddTestimoniData`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),mode:"cors"}).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>e).catch(e=>{console.error("Error fetching data:",e)}),Tw=async(t,e,n,r)=>{if(!t)return;const i=m_(Ew,`foto testimoni Pilot bandung/${t.name}`),s=h_(i,t);s.on("state_changed",o=>{const a=o.bytesTransferred/o.totalBytes*100;e&&e(a)},o=>{console.error("Upload failed:",o),n&&n(o)},()=>{p_(s.snapshot.ref).then(o=>{r&&r(o)})})},Cw="/untitled.png",Rw=()=>R.jsx("div",{className:"bg-yellow-200",children:R.jsxs("div",{className:"navbar max-w-2xl mx-auto px-5",children:[R.jsx("div",{className:"flex-none gap-2",children:R.jsx("div",{tabIndex:0,className:"avatar",children:R.jsx("div",{className:"w-20 rounded-lg",children:R.jsx("img",{alt:"Tailwind CSS Navbar component",src:Cw})})})}),R.jsx("a",{className:"ms-auto btn btn-ghost text-2xl xs:text-3xl sm:text-4xl md:text-5xl",children:"PILOT BANDUNG"})]})}),Pw=({children:t})=>R.jsx("div",{className:"max-w-xl mx-auto",children:R.jsx("div",{className:"m-2 bg-yellow-100 rounded-xl p-5 text-yellow-800",children:t})}),Xt=t=>R.jsxs("label",{className:`form-control w-full ${!t.fullWidth&&"max-w-xs"} mb-3`,children:[R.jsxs("div",{className:"label",children:[t.name&&R.jsx("span",{className:"label-text font-bold",children:t.name}),t.required&&R.jsx("span",{className:`label-text-alt ${t.error&&"text-red-700 font-bold scale-150"}`,children:"*"})]}),t.children,R.jsxs("div",{className:"label",children:[t.emptyWhenSubmit&&R.jsx("span",{className:"label-text-alt text-red-700 font-bold scale-105",children:"jangan di kosongkan"}),t.instruction&&R.jsx("span",{className:`label-text-alt ${t.error?"text-red-700 font-bold scale-105":""}`,children:t.instruction})]})]}),Nw=(t,e,n={nama:30,kota_asal:50,kritik_dan_saran:500})=>!(n[t]<e.length),Ow=t=>{const e=["image/jpg","image/jpeg","image/png","image/svg+xml","image/x-icon","image/gif"];let r=[];return e.includes(t.type)||r.push("type"),t.size>2097152&&r.push("size"),r},xw=(t,e)=>{switch(e.type){case"SET_VALUE":return{...t,[e.name]:{...t[e.name],value:e.value,emptyWhenSubmit:!1,error:e.error}};case"SET_ERROR":return{...t,[e.name]:{...t[e.name],error:!0}};case"CLEAR_ERROR":return{...t,[e.name]:{...t[e.name],emptyWhenSubmit:!1,error:!1}};case"RESET":return e.payload;default:return t}},Aw=t=>{const[e,n]=re.useState([]),[r,i]=re.useState(!0),[s,o]=re.useState(null);return re.useEffect(()=>{t.then(a=>{n(a),i(!1)}).catch(a=>{o(a),i(!1)})},[]),[e,r,s]},Dw=t=>{const e={nama:{value:"",error:!1,emptyWhenSubmit:!1},kota_asal:{value:"",error:!1,emptyWhenSubmit:!1},jasa:{value:"",error:!1,emptyWhenSubmit:!1},rating:{value:5,error:!1,emptyWhenSubmit:!1},kritik_dan_saran:{value:"",error:!1,emptyWhenSubmit:!1}},[n,r]=re.useReducer(xw,e);return{review:n,handleChange:a=>{const{name:l,value:u}=a.target;t(l,u)?r({type:"SET_VALUE",name:l,value:u,error:!1}):r({type:"SET_ERROR",name:l})},handleBlur:a=>{const{name:l}=a.target;r({type:"CLEAR_ERROR",name:l})},resetReview:()=>{r({type:"RESET",payload:e})}}},Lw=t=>{const[e,n]=re.useState(""),[r,i]=re.useState(0);return{progress:r,imageUrl:e,handleUploadFoto:()=>{t?Tw(t,a=>{i(a)},a=>{window.confirm(`foto gagal disimpan!.
 kirim testimoni tanpa foto?`)&&n("-")},a=>{typeof a=="string"&&n(a)}):n("-")},resetFileUpload:()=>{i(0),n("")}}},Uw=t=>{const[e,n]=re.useState(null),[r,i]=re.useState(null),[s,o]=re.useState(null),[a,l]=re.useState([]),u=re.useRef(null);return{foto:e,selectedImage:r,fileInfo:s,handleImageChoose:y=>{const v=y.target.files[0];if(v){const w=t(v);if(w.length>0){i(null),o(null),n(null),l(w);return}const P=URL.createObjectURL(v);i(P);const f=`IMG-${Math.random().toString(36).substr(2,10)}.${v.name.split(".").pop()}`,c=new File([v],f,{type:v.type});n(c),o({name:c.name,size:c.size,type:c.type}),l([])}},error:a,setError:l,resetImageUpload:()=>{n(null),i(null),o(null),l([])},fotoInputRef:u,resetFotoInput:()=>{u.current&&(u.current.value="",setTimeout(()=>{l([])},5e3))}}},Mw=()=>{const[t]=Aw(kw),{review:e,handleChange:n,handleBlur:r,resetReview:i}=Dw(Nw),{foto:s,selectedImage:o,fileInfo:a,handleImageChoose:l,error:u,setError:h,resetImageUpload:m,fotoInputRef:p,resetFotoInput:y}=Uw(Ow),{imageUrl:v,handleUploadFoto:w,resetFileUpload:P}=Lw(s),f=async d=>{const g={url_foto:d||"-",nama:e.nama.value,kota_asal:e.kota_asal.value,jasa:e.jasa.value,kritik_saran:e.kritik_dan_saran.value,rating:e.rating.value,toggle:!1};console.log(g);try{(await Iw(g)).status_code==200?(alert("review layanan telah dikirim"),i(),m(),P(),y()):alert("review layanan gagal dikirim")}catch(S){console.error("Error saat mengirim testimoni:",S),alert("maaf ada kesalahan dalam sistem")}};re.useEffect(()=>{console.log(v),v&&f(v)},[v]);const c=()=>Object.values(e).every(d=>d.value!=="");return re.useEffect(()=>{u.length>0&&y()},[u]),R.jsxs(R.Fragment,{children:[R.jsx("div",{}),R.jsx(Rw,{}),R.jsxs(Pw,{children:[R.jsx("legend",{className:"font-bold text-center p-3 text-xl",children:"Form Review Layanan"}),R.jsx("div",{className:"border-b-3 border-black my-4 border-double"}),R.jsx(Xt,{name:"Nama Pelanggan",required:!0,instruction:"maksimal 30 karakter",error:e.nama.error,emptyWhenSubmit:e.nama.emptyWhenSubmit,children:R.jsx("input",{type:"text",placeholder:"Masukkan nama pelanggan",className:"input input-bordered w-full max-w-xs",name:"nama",value:e.nama.value,onChange:n,onBlur:r})}),R.jsx(Xt,{name:"Kota Asal Pelanggan",required:!0,instruction:"maksimal 50 karakter",error:e.kota_asal.error,emptyWhenSubmit:e.kota_asal.emptyWhenSubmit,children:R.jsx("input",{type:"text",placeholder:"Masukkan kota asal anda",className:"input input-bordered w-full max-w-xs",name:"kota_asal",value:e.kota_asal.value,onChange:n,onBlur:r})}),R.jsx(Xt,{name:"Pelayanan Yang Dipakai",required:!0,emptyWhenSubmit:e.jasa.emptyWhenSubmit,children:R.jsxs("select",{className:"select select-bordered",name:"jasa",value:e.jasa.value,onChange:n,onBlur:r,children:[R.jsx("option",{value:"",disabled:!0}),t.map((d,g)=>R.jsx("option",{value:d,children:d},g))]})}),R.jsx(Xt,{name:"Rating Layanan",required:!0,emptyWhenSubmit:e.rating.emptyWhenSubmit,children:R.jsx("div",{className:"rating mx-auto",children:[1,2,3,4,5].map(d=>R.jsx("input",{type:"radio",name:"rating",className:"mask mask-star-2 bg-yellow-500",style:{width:"45px",height:"45px"},value:d,onChange:n,onBlur:r},d))})}),R.jsx(Xt,{name:"Kritik dan Saran",required:!0,instruction:"maksimal 500 karakter",fullWidth:!0,error:e.kritik_dan_saran.error,emptyWhenSubmit:e.kritik_dan_saran.emptyWhenSubmit,children:R.jsx("textarea",{className:"textarea textarea-bordered h-40",placeholder:"bagaimna komentar anda pada layanan kami?",name:"kritik_dan_saran",value:e.kritik_dan_saran.value,onChange:n,onBlur:r})}),R.jsxs(Xt,{name:"Upload foto",fullWidth:!0,children:[R.jsxs("div",{className:"flex flex-wrap justify-around items-center gap-5 mb-3",children:[o&&R.jsx("div",{children:R.jsx("img",{src:o,alt:"Selected",className:"mx-auto w-52 h-52 rounded-full shadow-md shadow-yellow-900 border-2 border-white"})}),a&&R.jsxs("div",{className:"text-xs flex flex-wrap justify-center",children:[R.jsxs("a",{className:"border-2 border-white ps-2 rounded m-0.5",children:["Nama File: ",R.jsx("strong",{className:"font-bold px-2 bg-white rounded",children:a.name})]}),R.jsxs("a",{className:"border-2 border-white ps-2 rounded m-0.5",children:["Ukuran File: ",R.jsxs("strong",{className:"font-bold px-2 bg-white rounded",children:[(a.size/1024).toFixed(2)," KB"]})]}),R.jsxs("a",{className:"border-2 border-white ps-2 rounded m-0.5",children:["Tipe File:",R.jsx("strong",{className:"font-bold px-2 bg-white rounded",children:a.type})]})]})]}),R.jsx("input",{type:"file",accept:"image/*",className:"file-input file-input-bordered",ref:p,onChange:l}),R.jsxs("div",{className:"label",children:[R.jsx("div",{className:`me-3 label-text-alt ${u.includes("type")&&"text-red-700 font-bold"}`,children:"Type file harus JPG, PNG, SVG, atau ICO."}),R.jsx("div",{className:`me-3 label-text-alt ${u.includes("size")&&"text-red-700 font-bold"}`,children:"Maksimal size: 2MB"})]})]}),R.jsx(Xt,{fullWidth:!0,children:R.jsx("button",{className:"btn btn-warning",onClick:w,disabled:!c(),children:"Kirim"})})]})]})};$f(document.getElementById("root")).render(R.jsx(re.StrictMode,{children:R.jsx(Mw,{})}));
