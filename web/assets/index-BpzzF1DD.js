var S_=a=>{throw TypeError(a)};var b_=(a,e,n)=>e.has(a)||S_("Cannot "+n);var y_=(a,e,n)=>(b_(a,e,"read from private field"),n?n.call(a):e.get(a)),M_=(a,e,n)=>e.has(a)?S_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,n),mh=(a,e,n,r)=>(b_(a,e,"write to private field"),r?r.call(a,n):e.set(a,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function tE(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var gh={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function nE(){if(E_)return Ml;E_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ml.Fragment=e,Ml.jsx=n,Ml.jsxs=n,Ml}var T_;function iE(){return T_||(T_=1,gh.exports=nE()),gh.exports}var Re=iE(),vh={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function aE(){if(A_)return ut;A_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function S(O,Y,de){this.props=O,this.context=Y,this.refs=b,this.updater=de||T}S.prototype.isReactComponent={},S.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function C(){}C.prototype=S.prototype;function N(O,Y,de){this.props=O,this.context=Y,this.refs=b,this.updater=de||T}var P=N.prototype=new C;P.constructor=N,w(P,S.prototype),P.isPureReactComponent=!0;var X=Array.isArray;function z(){}var G={H:null,A:null,T:null,S:null},M=Object.prototype.hasOwnProperty;function F(O,Y,de){var ye=de.ref;return{$$typeof:a,type:O,key:Y,ref:ye!==void 0?ye:null,props:de}}function Z(O,Y){return F(O.type,Y,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function J(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return Y[de]})}var fe=/\/+/g;function H(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):Y.toString(36)}function B(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,Y,de,ye,Te){var te=typeof O;(te==="undefined"||te==="boolean")&&(O=null);var ge=!1;if(O===null)ge=!0;else switch(te){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(O.$$typeof){case a:case e:ge=!0;break;case _:return ge=O._init,U(ge(O._payload),Y,de,ye,Te)}}if(ge)return Te=Te(O),ge=ye===""?"."+H(O,0):ye,X(Te)?(de="",ge!=null&&(de=ge.replace(fe,"$&/")+"/"),U(Te,Y,de,"",function(Je){return Je})):Te!=null&&(k(Te)&&(Te=Z(Te,de+(Te.key==null||O&&O.key===Te.key?"":(""+Te.key).replace(fe,"$&/")+"/")+ge)),Y.push(Te)),1;ge=0;var Me=ye===""?".":ye+":";if(X(O))for(var Be=0;Be<O.length;Be++)ye=O[Be],te=Me+H(ye,Be),ge+=U(ye,Y,de,te,Te);else if(Be=y(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(ye=O.next()).done;)ye=ye.value,te=Me+H(ye,Be++),ge+=U(ye,Y,de,te,Te);else if(te==="object"){if(typeof O.then=="function")return U(B(O),Y,de,ye,Te);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ge}function D(O,Y,de){if(O==null)return O;var ye=[],Te=0;return U(O,ye,"","",function(te){return Y.call(de,te,Te++)}),ye}function I(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var V=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},se={map:D,forEach:function(O,Y,de){D(O,function(){Y.apply(this,arguments)},de)},count:function(O){var Y=0;return D(O,function(){Y++}),Y},toArray:function(O){return D(O,function(Y){return Y})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ut.Activity=v,ut.Children=se,ut.Component=S,ut.Fragment=n,ut.Profiler=l,ut.PureComponent=N,ut.StrictMode=r,ut.Suspense=p,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ut.__COMPILER_RUNTIME={__proto__:null,c:function(O){return G.H.useMemoCache(O)}},ut.cache=function(O){return function(){return O.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(O,Y,de){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=w({},O.props),Te=O.key;if(Y!=null)for(te in Y.key!==void 0&&(Te=""+Y.key),Y)!M.call(Y,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Y.ref===void 0||(ye[te]=Y[te]);var te=arguments.length-2;if(te===1)ye.children=de;else if(1<te){for(var ge=Array(te),Me=0;Me<te;Me++)ge[Me]=arguments[Me+2];ye.children=ge}return F(O.type,Te,ye)},ut.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ut.createElement=function(O,Y,de){var ye,Te={},te=null;if(Y!=null)for(ye in Y.key!==void 0&&(te=""+Y.key),Y)M.call(Y,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Te[ye]=Y[ye]);var ge=arguments.length-2;if(ge===1)Te.children=de;else if(1<ge){for(var Me=Array(ge),Be=0;Be<ge;Be++)Me[Be]=arguments[Be+2];Te.children=Me}if(O&&O.defaultProps)for(ye in ge=O.defaultProps,ge)Te[ye]===void 0&&(Te[ye]=ge[ye]);return F(O,te,Te)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(O){return{$$typeof:h,render:O}},ut.isValidElement=k,ut.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:I}},ut.memo=function(O,Y){return{$$typeof:m,type:O,compare:Y===void 0?null:Y}},ut.startTransition=function(O){var Y=G.T,de={};G.T=de;try{var ye=O(),Te=G.S;Te!==null&&Te(de,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(z,V)}catch(te){V(te)}finally{Y!==null&&de.types!==null&&(Y.types=de.types),G.T=Y}},ut.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ut.use=function(O){return G.H.use(O)},ut.useActionState=function(O,Y,de){return G.H.useActionState(O,Y,de)},ut.useCallback=function(O,Y){return G.H.useCallback(O,Y)},ut.useContext=function(O){return G.H.useContext(O)},ut.useDebugValue=function(){},ut.useDeferredValue=function(O,Y){return G.H.useDeferredValue(O,Y)},ut.useEffect=function(O,Y){return G.H.useEffect(O,Y)},ut.useEffectEvent=function(O){return G.H.useEffectEvent(O)},ut.useId=function(){return G.H.useId()},ut.useImperativeHandle=function(O,Y,de){return G.H.useImperativeHandle(O,Y,de)},ut.useInsertionEffect=function(O,Y){return G.H.useInsertionEffect(O,Y)},ut.useLayoutEffect=function(O,Y){return G.H.useLayoutEffect(O,Y)},ut.useMemo=function(O,Y){return G.H.useMemo(O,Y)},ut.useOptimistic=function(O,Y){return G.H.useOptimistic(O,Y)},ut.useReducer=function(O,Y,de){return G.H.useReducer(O,Y,de)},ut.useRef=function(O){return G.H.useRef(O)},ut.useState=function(O){return G.H.useState(O)},ut.useSyncExternalStore=function(O,Y,de){return G.H.useSyncExternalStore(O,Y,de)},ut.useTransition=function(){return G.H.useTransition()},ut.version="19.2.6",ut}var R_;function xm(){return R_||(R_=1,vh.exports=aE()),vh.exports}var _e=xm();const pn=tE(_e);var _h={exports:{}},El={},xh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function rE(){return C_||(C_=1,(function(a){function e(U,D){var I=U.length;U.push(D);e:for(;0<I;){var V=I-1>>>1,se=U[V];if(0<l(se,D))U[V]=D,U[I]=se,I=V;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var D=U[0],I=U.pop();if(I!==D){U[0]=I;e:for(var V=0,se=U.length,O=se>>>1;V<O;){var Y=2*(V+1)-1,de=U[Y],ye=Y+1,Te=U[ye];if(0>l(de,I))ye<se&&0>l(Te,de)?(U[V]=Te,U[ye]=I,V=ye):(U[V]=de,U[Y]=I,V=Y);else if(ye<se&&0>l(Te,I))U[V]=Te,U[ye]=I,V=ye;else break e}}return D}function l(U,D){var I=U.sortIndex-D.sortIndex;return I!==0?I:U.id-D.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],_=1,v=null,g=3,y=!1,T=!1,w=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(U){for(var D=n(m);D!==null;){if(D.callback===null)r(m);else if(D.startTime<=U)r(m),D.sortIndex=D.expirationTime,e(p,D);else break;D=n(m)}}function X(U){if(w=!1,P(U),!T)if(n(p)!==null)T=!0,z||(z=!0,J());else{var D=n(m);D!==null&&B(X,D.startTime-U)}}var z=!1,G=-1,M=5,F=-1;function Z(){return b?!0:!(a.unstable_now()-F<M)}function k(){if(b=!1,z){var U=a.unstable_now();F=U;var D=!0;try{e:{T=!1,w&&(w=!1,C(G),G=-1),y=!0;var I=g;try{t:{for(P(U),v=n(p);v!==null&&!(v.expirationTime>U&&Z());){var V=v.callback;if(typeof V=="function"){v.callback=null,g=v.priorityLevel;var se=V(v.expirationTime<=U);if(U=a.unstable_now(),typeof se=="function"){v.callback=se,P(U),D=!0;break t}v===n(p)&&r(p),P(U)}else r(p);v=n(p)}if(v!==null)D=!0;else{var O=n(m);O!==null&&B(X,O.startTime-U),D=!1}}break e}finally{v=null,g=I,y=!1}D=void 0}}finally{D?J():z=!1}}}var J;if(typeof N=="function")J=function(){N(k)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,H=fe.port2;fe.port1.onmessage=k,J=function(){H.postMessage(null)}}else J=function(){S(k,0)};function B(U,D){G=S(function(){U(a.unstable_now())},D)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(U){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var I=g;g=D;try{return U()}finally{g=I}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(U,D){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=g;g=U;try{return D()}finally{g=I}},a.unstable_scheduleCallback=function(U,D,I){var V=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=I+se,U={id:_++,callback:D,priorityLevel:U,startTime:I,expirationTime:se,sortIndex:-1},I>V?(U.sortIndex=I,e(m,U),n(p)===null&&U===n(m)&&(w?(C(G),G=-1):w=!0,B(X,I-V))):(U.sortIndex=se,e(p,U),T||y||(T=!0,z||(z=!0,J()))),U},a.unstable_shouldYield=Z,a.unstable_wrapCallback=function(U){var D=g;return function(){var I=g;g=D;try{return U.apply(this,arguments)}finally{g=I}}}})(Sh)),Sh}var w_;function sE(){return w_||(w_=1,xh.exports=rE()),xh.exports}var bh={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function oE(){if(D_)return Yn;D_=1;var a=xm();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Yn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,_)},Yn.flushSync=function(p){var m=f.T,_=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=_,r.d.f()}},Yn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Yn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Yn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Yn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Yn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Yn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Yn.requestFormReset=function(p){r.d.r(p)},Yn.unstable_batchedUpdates=function(p,m){return p(m)},Yn.useFormState=function(p,m,_){return f.H.useFormState(p,m,_)},Yn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Yn.version="19.2.6",Yn}var U_;function pS(){if(U_)return bh.exports;U_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),bh.exports=oE(),bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function lE(){if(N_)return El;N_=1;var a=sE(),e=xm(),n=pS();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),t;if(d===o)return p(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,R=u.child;R;){if(R===s){x=!0,s=u,o=d;break}if(R===o){x=!0,o=u,s=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===s){x=!0,s=d,o=u;break}if(R===o){x=!0,o=d,s=u;break}R=R.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function H(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case X:return"Suspense";case z:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case P:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return i=t.displayName||null,i!==null?i:H(t.type)||"Memo";case M:i=t._payload,t=t._init;try{return H(t(i))}catch{}}return null}var B=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},V=[],se=-1;function O(t){return{current:t}}function Y(t){0>se||(t.current=V[se],V[se]=null,se--)}function de(t,i){se++,V[se]=t.current,t.current=i}var ye=O(null),Te=O(null),te=O(null),ge=O(null);function Me(t,i){switch(de(te,i),de(Te,t),de(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?kv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=kv(i),t=Xv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(ye),de(ye,t)}function Be(){Y(ye),Y(Te),Y(te)}function Je(t){t.memoizedState!==null&&de(ge,t);var i=ye.current,s=Xv(i,t.type);i!==s&&(de(Te,t),de(ye,s))}function Ve(t){Te.current===t&&(Y(ye),Y(Te)),ge.current===t&&(Y(ge),xl._currentValue=I)}var mt,lt;function _t(t){if(mt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);mt=i&&i[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+t+lt}var zt=!1;function ft(t,i){if(!t||zt)return"";zt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ue){var le=ue}Reflect.construct(t,[],be)}else{try{be.call()}catch(ue){le=ue}t.call(be.prototype)}}else{try{throw Error()}catch(ue){le=ue}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var W=x.split(`
`),ie=R.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===ie.length)for(o=W.length-1,u=ie.length-1;1<=o&&0<=u&&W[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==ie[u]){var me=`
`+W[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{zt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?_t(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==i&&i!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return _t("Activity");default:return""}}function Vt(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ct=Object.prototype.hasOwnProperty,$=a.unstable_scheduleCallback,At=a.unstable_cancelCallback,it=a.unstable_shouldYield,St=a.unstable_requestPaint,we=a.unstable_now,sn=a.unstable_getCurrentPriorityLevel,L=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,Se=a.unstable_LowPriority,Ae=a.unstable_IdlePriority,De=a.log,Pe=a.unstable_setDisableYieldValue,he=null,pe=null;function Oe(t){if(typeof De=="function"&&Pe(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(he,t)}catch{}}var Ie=Math.clz32?Math.clz32:st,Ne=Math.log,Ue=Math.LN2;function st(t){return t>>>=0,t===0?32:31-(Ne(t)/Ue|0)|0}var ot=256,yt=262144,q=4194304;function Ce(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ce(o):(x&=R,x!==0?u=Ce(x):s||(s=R&~t,s!==0&&(u=Ce(s))))):(R=o&~d,R!==0?u=Ce(R):x!==0?u=Ce(x):s||(s=o&~t,s!==0&&(u=Ce(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function He(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Le(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Ke(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function at(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function un(t,i,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,W=t.expirationTimes,ie=t.hiddenUpdates;for(s=x&~s;0<s;){var me=31-Ie(s),be=1<<me;R[me]=0,W[me]=-1;var le=ie[me];if(le!==null)for(ie[me]=null,me=0;me<le.length;me++){var ue=le[me];ue!==null&&(ue.lane&=-536870913)}s&=~be}o!==0&&Ht(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function Ht(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ie(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function Ri(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-Ie(s),u=1<<o;u&i|t[o]&i&&(t[o]|=i),s&=~u}}function hi(t,i){var s=i&-i;return s=(s&42)!==0?1:Or(s),(s&(t.suspendedLanes|i))!==0?0:s}function Or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Uo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function No(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:h_(t.type))}function Lo(t,i){var s=D.p;try{return D.p=t,i()}finally{D.p=s}}var $n=Math.random().toString(36).slice(2),mn="__reactFiber$"+$n,Fn="__reactProps$"+$n,ha="__reactContainer$"+$n,qa="__reactEvents$"+$n,Kl="__reactListeners$"+$n,_s="__reactHandles$"+$n,Po="__reactResources$"+$n,Ya="__reactMarker$"+$n;function Oo(t){delete t[mn],delete t[Fn],delete t[qa],delete t[Kl],delete t[_s]}function ja(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ha]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Zv(t);t!==null;){if(s=t[mn])return s;t=Zv(t)}return i}t=s,s=t.parentNode}return null}function Ka(t){if(t=t[mn]||t[ha]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ir(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Za(t){var i=t[Po];return i||(i=t[Po]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function bn(t){t[Ya]=!0}var Zl=new Set,A={};function K(t,i){oe(t,i),oe(t+"Capture",i)}function oe(t,i){for(A[t]=i,t=0;t<i.length;t++)Zl.add(i[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},ze={};function Xe(t){return ct.call(ze,t)?!0:ct.call(re,t)?!1:ae.test(t)?ze[t]=!0:(re[t]=!0,!1)}function Fe(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function $e(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function We(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t,i,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ot(t){if(!t._valueTracker){var i=ht(t)?"checked":"value";t._valueTracker=Qe(t,i,""+t[i])}}function on(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=ht(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function en(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wt=/[\n"\\]/g;function $t(t){return t.replace(Wt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ke(t,i,s,o,u,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+et(i)):t.value!==""+et(i)&&(t.value=""+et(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?Mt(t,x,et(i)):s!=null?Mt(t,x,et(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function qn(t,i,s,o,u,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ot(t);return}s=s!=null?""+et(s):"",i=i!=null?""+et(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ot(t)}function Mt(t,i,s){i==="number"&&en(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Rn(t,i,s,o){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+et(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function pi(t,i,s){if(i!=null&&(i=""+et(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+et(s):""}function zi(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(B(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=et(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Ot(t)}function mi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ln(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||qt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Hi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&ln(t,u,o)}else for(var d in i)i.hasOwnProperty(d)&&ln(t,d,i[d])}function kt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fr(t){return Qa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pa(){}var df=null;function hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xs=null,Ss=null;function Vm(t){var i=Ka(t);if(i&&(t=i.stateNode)){var s=t[Fn]||null;e:switch(t=i.stateNode,i.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+$t(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var u=o[Fn]||null;if(!u)throw Error(r(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&on(o)}break e;case"textarea":pi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Rn(t,!!s.multiple,i,!1)}}}var pf=!1;function km(t,i,s){if(pf)return t(i,s);pf=!0;try{var o=t(i);return o}finally{if(pf=!1,(xs!==null||Ss!==null)&&(Bc(),xs&&(i=xs,t=Ss,Ss=xs=null,Vm(i),t)))for(i=0;i<t.length;i++)Vm(t[i])}}function Io(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Fn]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=!1;if(ma)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){mf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{mf=!1}var Ja=null,gf=null,Ql=null;function Xm(){if(Ql)return Ql;var t,i=gf,s=i.length,o,u="value"in Ja?Ja.value:Ja.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&i[s-o]===u[d-o];o++);return Ql=u.slice(t,1<o?1-o:void 0)}function Jl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ec(){return!0}function Wm(){return!1}function ii(t){function i(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ec:Wm,this.isPropagationStopped=Wm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),i}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=ii(Br),Bo=v({},Br,{view:0,detail:0}),Jb=ii(Bo),vf,_f,zo,nc=v({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(vf=t.screenX-zo.screenX,_f=t.screenY-zo.screenY):_f=vf=0,zo=t),vf)},movementY:function(t){return"movementY"in t?t.movementY:_f}}),$m=ii(nc),ey=v({},nc,{dataTransfer:0}),ty=ii(ey),ny=v({},Bo,{relatedTarget:0}),xf=ii(ny),iy=v({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=ii(iy),ry=v({},Br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sy=ii(ry),oy=v({},Br,{data:0}),qm=ii(oy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=uy[t])?!!i[t]:!1}function Sf(){return fy}var dy=v({},Bo,{key:function(t){if(t.key){var i=ly[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=ii(dy),py=v({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=ii(py),my=v({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),gy=ii(my),vy=v({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=ii(vy),xy=v({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=ii(xy),by=v({},Br,{newState:0,oldState:0}),yy=ii(by),My=[9,13,27,32],bf=ma&&"CompositionEvent"in window,Ho=null;ma&&"documentMode"in document&&(Ho=document.documentMode);var Ey=ma&&"TextEvent"in window&&!Ho,jm=ma&&(!bf||Ho&&8<Ho&&11>=Ho),Km=" ",Zm=!1;function Qm(t,i){switch(t){case"keyup":return My.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function Ty(t,i){switch(t){case"compositionend":return Jm(i);case"keypress":return i.which!==32?null:(Zm=!0,Km);case"textInput":return t=i.data,t===Km&&Zm?null:t;default:return null}}function Ay(t,i){if(bs)return t==="compositionend"||!bf&&Qm(t,i)?(t=Xm(),Ql=gf=Ja=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return jm&&i.locale!=="ko"?null:i.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ry[t.type]:i==="textarea"}function tg(t,i,s,o){xs?Ss?Ss.push(o):Ss=[o]:xs=o,i=Wc(i,"onChange"),0<i.length&&(s=new tc("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var Go=null,Vo=null;function Cy(t){Fv(t,0)}function ic(t){var i=Ir(t);if(on(i))return t}function ng(t,i){if(t==="change")return i}var ig=!1;if(ma){var yf;if(ma){var Mf="oninput"in document;if(!Mf){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Mf=typeof ag.oninput=="function"}yf=Mf}else yf=!1;ig=yf&&(!document.documentMode||9<document.documentMode)}function rg(){Go&&(Go.detachEvent("onpropertychange",sg),Vo=Go=null)}function sg(t){if(t.propertyName==="value"&&ic(Vo)){var i=[];tg(i,Vo,t,hf(t)),km(Cy,i)}}function wy(t,i,s){t==="focusin"?(rg(),Go=i,Vo=s,Go.attachEvent("onpropertychange",sg)):t==="focusout"&&rg()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Vo)}function Uy(t,i){if(t==="click")return ic(i)}function Ny(t,i){if(t==="input"||t==="change")return ic(i)}function Ly(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var gi=typeof Object.is=="function"?Object.is:Ly;function ko(t,i){if(gi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!ct.call(i,u)||!gi(t[u],i[u]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,i){var s=og(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=og(s)}}function cg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?cg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ug(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=en(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=en(t.document)}return i}function Ef(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Py=ma&&"documentMode"in document&&11>=document.documentMode,ys=null,Tf=null,Xo=null,Af=!1;function fg(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Af||ys==null||ys!==en(o)||(o=ys,"selectionStart"in o&&Ef(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xo&&ko(Xo,o)||(Xo=o,o=Wc(Tf,"onSelect"),0<o.length&&(i=new tc("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=ys)))}function zr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Ms={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionrun:zr("Transition","TransitionRun"),transitionstart:zr("Transition","TransitionStart"),transitioncancel:zr("Transition","TransitionCancel"),transitionend:zr("Transition","TransitionEnd")},Rf={},dg={};ma&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Hr(t){if(Rf[t])return Rf[t];if(!Ms[t])return t;var i=Ms[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in dg)return Rf[t]=i[s];return t}var hg=Hr("animationend"),pg=Hr("animationiteration"),mg=Hr("animationstart"),Oy=Hr("transitionrun"),Iy=Hr("transitionstart"),Fy=Hr("transitioncancel"),gg=Hr("transitionend"),vg=new Map,Cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cf.push("scrollEnd");function Gi(t,i){vg.set(t,i),K(i,[t])}var ac=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ci=[],Es=0,wf=0;function rc(){for(var t=Es,i=wf=Es=0;i<t;){var s=Ci[i];Ci[i++]=null;var o=Ci[i];Ci[i++]=null;var u=Ci[i];Ci[i++]=null;var d=Ci[i];if(Ci[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&_g(s,u,d)}}function sc(t,i,s,o){Ci[Es++]=t,Ci[Es++]=i,Ci[Es++]=s,Ci[Es++]=o,wf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Df(t,i,s,o){return sc(t,i,s,o),oc(t)}function Gr(t,i){return sc(t,null,null,i),oc(t)}function _g(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ie(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function oc(t){if(50<dl)throw dl=0,zd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ts={};function By(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,i,s,o){return new By(t,i,s,o)}function Uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,i){var s=t.alternate;return s===null?(s=vi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function xg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function lc(t,i,s,o,u,d){var x=0;if(o=t,typeof t=="function")Uf(t)&&(x=1);else if(typeof t=="string")x=kM(t,s,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case F:return t=vi(31,s,i,u),t.elementType=F,t.lanes=d,t;case w:return Vr(s.children,u,d,i);case b:x=8,u|=24;break;case S:return t=vi(12,s,i,u|2),t.elementType=S,t.lanes=d,t;case X:return t=vi(13,s,i,u),t.elementType=X,t.lanes=d,t;case z:return t=vi(19,s,i,u),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break e;case C:x=9;break e;case P:x=11;break e;case G:x=14;break e;case M:x=16,o=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),o=null}return i=vi(x,s,i,u),i.elementType=t,i.type=o,i.lanes=d,i}function Vr(t,i,s,o){return t=vi(7,t,o,i),t.lanes=s,t}function Nf(t,i,s){return t=vi(6,t,null,i),t.lanes=s,t}function Sg(t){var i=vi(18,null,null,0);return i.stateNode=t,i}function Lf(t,i,s){return i=vi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var bg=new WeakMap;function wi(t,i){if(typeof t=="object"&&t!==null){var s=bg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Vt(i)},bg.set(t,i),i)}return{value:t,source:i,stack:Vt(i)}}var As=[],Rs=0,cc=null,Wo=0,Di=[],Ui=0,er=null,Ji=1,ea="";function va(t,i){As[Rs++]=Wo,As[Rs++]=cc,cc=t,Wo=i}function yg(t,i,s){Di[Ui++]=Ji,Di[Ui++]=ea,Di[Ui++]=er,er=t;var o=Ji;t=ea;var u=32-Ie(o)-1;o&=~(1<<u),s+=1;var d=32-Ie(i)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ji=1<<32-Ie(i)+u|s<<u|o,ea=d+t}else Ji=1<<d|s<<u|o,ea=t}function Pf(t){t.return!==null&&(va(t,1),yg(t,1,0))}function Of(t){for(;t===cc;)cc=As[--Rs],As[Rs]=null,Wo=As[--Rs],As[Rs]=null;for(;t===er;)er=Di[--Ui],Di[Ui]=null,ea=Di[--Ui],Di[Ui]=null,Ji=Di[--Ui],Di[Ui]=null}function Mg(t,i){Di[Ui++]=Ji,Di[Ui++]=ea,Di[Ui++]=er,Ji=i.id,ea=i.overflow,er=t}var Bn=null,an=null,wt=!1,tr=null,Ni=!1,If=Error(r(519));function nr(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $o(wi(i,t)),If}function Eg(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[mn]=t,i[Fn]=o,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<pl.length;s++)Tt(pl[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),qn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),zi(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Gv(i.textContent,s)?(o.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),o.onScroll!=null&&Tt("scroll",i),o.onScrollEnd!=null&&Tt("scrollend",i),o.onClick!=null&&(i.onclick=pa),i=!0):i=!1,i||nr(t,!0)}function Tg(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Bn=Bn.return}}function Cs(t){if(t!==Bn)return!1;if(!wt)return Tg(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||eh(t.type,t.memoizedProps)),s=!s),s&&an&&nr(t),Tg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=Kv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=Kv(t)}else i===27?(i=an,gr(t.type)?(t=rh,rh=null,an=t):an=i):an=Bn?Pi(t.stateNode.nextSibling):null;return!0}function kr(){an=Bn=null,wt=!1}function Ff(){var t=tr;return t!==null&&(oi===null?oi=t:oi.push.apply(oi,t),tr=null),t}function $o(t){tr===null?tr=[t]:tr.push(t)}var Bf=O(null),Xr=null,_a=null;function ir(t,i,s){de(Bf,i._currentValue),i._currentValue=s}function xa(t){t._currentValue=Bf.current,Y(Bf)}function zf(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function Hf(t,i,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var W=0;W<i.length;W++)if(R.context===i[W]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),zf(d.return,s,t),o||(x=null);break e}d=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),zf(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ws(t,i,s,o){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=u.type;gi(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===ge.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(xl):t=[xl])}u=u.return}t!==null&&Hf(i,t,s,o),i.flags|=262144}function uc(t){for(t=t.firstContext;t!==null;){if(!gi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wr(t){Xr=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return Ag(Xr,t)}function fc(t,i){return Xr===null&&Wr(t),Ag(t,i)}function Ag(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},_a===null){if(t===null)throw Error(r(308));_a=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else _a=_a.next=i;return s}var zy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Hy=a.unstable_scheduleCallback,Gy=a.unstable_NormalPriority,yn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gf(){return{controller:new zy,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&Hy(Gy,function(){t.controller.abort()})}var Yo=null,Vf=0,Ds=0,Us=null;function Vy(t,i){if(Yo===null){var s=Yo=[];Vf=0,Ds=Wd(),Us={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Vf++,i.then(Rg,Rg),i}function Rg(){if(--Vf===0&&Yo!==null){Us!==null&&(Us.status="fulfilled");var t=Yo;Yo=null,Ds=0,Us=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ky(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Cg=U.S;U.S=function(t,i){fv=we(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Vy(t,i),Cg!==null&&Cg(t,i)};var $r=O(null);function kf(){var t=$r.current;return t!==null?t:tn.pooledCache}function dc(t,i){i===null?de($r,$r.current):de($r,i.pool)}function wg(){var t=kf();return t===null?null:{parent:yn._currentValue,pool:t}}var Ns=Error(r(460)),Xf=Error(r(474)),hc=Error(r(542)),pc={then:function(){}};function Dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ug(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(pa,pa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Lg(t),t;default:if(typeof i.status=="string")i.then(pa,pa);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Lg(t),t}throw Yr=i,Ns}}function qr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Yr=s,Ns):s}}var Yr=null;function Ng(){if(Yr===null)throw Error(r(459));var t=Yr;return Yr=null,t}function Lg(t){if(t===Ns||t===hc)throw Error(r(483))}var Ls=null,jo=0;function mc(t){var i=jo;return jo+=1,Ls===null&&(Ls=[]),Ug(Ls,t,i)}function Ko(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function gc(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Pg(t){function i(Q,j){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[j],Q.flags|=16):ne.push(j)}}function s(Q,j){if(!t)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function o(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function u(Q,j){return Q=ga(Q,j),Q.index=0,Q.sibling=null,Q}function d(Q,j,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<j?(Q.flags|=67108866,j):ne):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,j,ne,xe){return j===null||j.tag!==6?(j=Nf(ne,Q.mode,xe),j.return=Q,j):(j=u(j,ne),j.return=Q,j)}function W(Q,j,ne,xe){var tt=ne.type;return tt===w?me(Q,j,ne.props.children,xe,ne.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===M&&qr(tt)===j.type)?(j=u(j,ne.props),Ko(j,ne),j.return=Q,j):(j=lc(ne.type,ne.key,ne.props,null,Q.mode,xe),Ko(j,ne),j.return=Q,j)}function ie(Q,j,ne,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==ne.containerInfo||j.stateNode.implementation!==ne.implementation?(j=Lf(ne,Q.mode,xe),j.return=Q,j):(j=u(j,ne.children||[]),j.return=Q,j)}function me(Q,j,ne,xe,tt){return j===null||j.tag!==7?(j=Vr(ne,Q.mode,xe,tt),j.return=Q,j):(j=u(j,ne),j.return=Q,j)}function be(Q,j,ne){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Nf(""+j,Q.mode,ne),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ne=lc(j.type,j.key,j.props,null,Q.mode,ne),Ko(ne,j),ne.return=Q,ne;case T:return j=Lf(j,Q.mode,ne),j.return=Q,j;case M:return j=qr(j),be(Q,j,ne)}if(B(j)||J(j))return j=Vr(j,Q.mode,ne,null),j.return=Q,j;if(typeof j.then=="function")return be(Q,mc(j),ne);if(j.$$typeof===N)return be(Q,fc(Q,j),ne);gc(Q,j)}return null}function le(Q,j,ne,xe){var tt=j!==null?j.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:R(Q,j,""+ne,xe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===tt?W(Q,j,ne,xe):null;case T:return ne.key===tt?ie(Q,j,ne,xe):null;case M:return ne=qr(ne),le(Q,j,ne,xe)}if(B(ne)||J(ne))return tt!==null?null:me(Q,j,ne,xe,null);if(typeof ne.then=="function")return le(Q,j,mc(ne),xe);if(ne.$$typeof===N)return le(Q,j,fc(Q,ne),xe);gc(Q,ne)}return null}function ue(Q,j,ne,xe,tt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Q=Q.get(ne)||null,R(j,Q,""+xe,tt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case y:return Q=Q.get(xe.key===null?ne:xe.key)||null,W(j,Q,xe,tt);case T:return Q=Q.get(xe.key===null?ne:xe.key)||null,ie(j,Q,xe,tt);case M:return xe=qr(xe),ue(Q,j,ne,xe,tt)}if(B(xe)||J(xe))return Q=Q.get(ne)||null,me(j,Q,xe,tt,null);if(typeof xe.then=="function")return ue(Q,j,ne,mc(xe),tt);if(xe.$$typeof===N)return ue(Q,j,ne,fc(j,xe),tt);gc(j,xe)}return null}function qe(Q,j,ne,xe){for(var tt=null,It=null,Ze=j,gt=j=0,Ct=null;Ze!==null&&gt<ne.length;gt++){Ze.index>gt?(Ct=Ze,Ze=null):Ct=Ze.sibling;var Ft=le(Q,Ze,ne[gt],xe);if(Ft===null){Ze===null&&(Ze=Ct);break}t&&Ze&&Ft.alternate===null&&i(Q,Ze),j=d(Ft,j,gt),It===null?tt=Ft:It.sibling=Ft,It=Ft,Ze=Ct}if(gt===ne.length)return s(Q,Ze),wt&&va(Q,gt),tt;if(Ze===null){for(;gt<ne.length;gt++)Ze=be(Q,ne[gt],xe),Ze!==null&&(j=d(Ze,j,gt),It===null?tt=Ze:It.sibling=Ze,It=Ze);return wt&&va(Q,gt),tt}for(Ze=o(Ze);gt<ne.length;gt++)Ct=ue(Ze,Q,gt,ne[gt],xe),Ct!==null&&(t&&Ct.alternate!==null&&Ze.delete(Ct.key===null?gt:Ct.key),j=d(Ct,j,gt),It===null?tt=Ct:It.sibling=Ct,It=Ct);return t&&Ze.forEach(function(br){return i(Q,br)}),wt&&va(Q,gt),tt}function nt(Q,j,ne,xe){if(ne==null)throw Error(r(151));for(var tt=null,It=null,Ze=j,gt=j=0,Ct=null,Ft=ne.next();Ze!==null&&!Ft.done;gt++,Ft=ne.next()){Ze.index>gt?(Ct=Ze,Ze=null):Ct=Ze.sibling;var br=le(Q,Ze,Ft.value,xe);if(br===null){Ze===null&&(Ze=Ct);break}t&&Ze&&br.alternate===null&&i(Q,Ze),j=d(br,j,gt),It===null?tt=br:It.sibling=br,It=br,Ze=Ct}if(Ft.done)return s(Q,Ze),wt&&va(Q,gt),tt;if(Ze===null){for(;!Ft.done;gt++,Ft=ne.next())Ft=be(Q,Ft.value,xe),Ft!==null&&(j=d(Ft,j,gt),It===null?tt=Ft:It.sibling=Ft,It=Ft);return wt&&va(Q,gt),tt}for(Ze=o(Ze);!Ft.done;gt++,Ft=ne.next())Ft=ue(Ze,Q,gt,Ft.value,xe),Ft!==null&&(t&&Ft.alternate!==null&&Ze.delete(Ft.key===null?gt:Ft.key),j=d(Ft,j,gt),It===null?tt=Ft:It.sibling=Ft,It=Ft);return t&&Ze.forEach(function(eE){return i(Q,eE)}),wt&&va(Q,gt),tt}function Jt(Q,j,ne,xe){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var tt=ne.key;j!==null;){if(j.key===tt){if(tt=ne.type,tt===w){if(j.tag===7){s(Q,j.sibling),xe=u(j,ne.props.children),xe.return=Q,Q=xe;break e}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===M&&qr(tt)===j.type){s(Q,j.sibling),xe=u(j,ne.props),Ko(xe,ne),xe.return=Q,Q=xe;break e}s(Q,j);break}else i(Q,j);j=j.sibling}ne.type===w?(xe=Vr(ne.props.children,Q.mode,xe,ne.key),xe.return=Q,Q=xe):(xe=lc(ne.type,ne.key,ne.props,null,Q.mode,xe),Ko(xe,ne),xe.return=Q,Q=xe)}return x(Q);case T:e:{for(tt=ne.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===ne.containerInfo&&j.stateNode.implementation===ne.implementation){s(Q,j.sibling),xe=u(j,ne.children||[]),xe.return=Q,Q=xe;break e}else{s(Q,j);break}else i(Q,j);j=j.sibling}xe=Lf(ne,Q.mode,xe),xe.return=Q,Q=xe}return x(Q);case M:return ne=qr(ne),Jt(Q,j,ne,xe)}if(B(ne))return qe(Q,j,ne,xe);if(J(ne)){if(tt=J(ne),typeof tt!="function")throw Error(r(150));return ne=tt.call(ne),nt(Q,j,ne,xe)}if(typeof ne.then=="function")return Jt(Q,j,mc(ne),xe);if(ne.$$typeof===N)return Jt(Q,j,fc(Q,ne),xe);gc(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,j!==null&&j.tag===6?(s(Q,j.sibling),xe=u(j,ne),xe.return=Q,Q=xe):(s(Q,j),xe=Nf(ne,Q.mode,xe),xe.return=Q,Q=xe),x(Q)):s(Q,j)}return function(Q,j,ne,xe){try{jo=0;var tt=Jt(Q,j,ne,xe);return Ls=null,tt}catch(Ze){if(Ze===Ns||Ze===hc)throw Ze;var It=vi(29,Ze,null,Q.mode);return It.lanes=xe,It.return=Q,It}finally{}}}var jr=Pg(!0),Og=Pg(!1),ar=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function rr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sr(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Gt&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=oc(t),_g(t,null,s),i}return sc(t,o,i,s),oc(t)}function Zo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,Ri(t,s)}}function qf(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Yf=!1;function Qo(){if(Yf){var t=Us;if(t!==null)throw t}}function Jo(t,i,s,o){Yf=!1;var u=t.updateQueue;ar=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var W=R,ie=W.next;W.next=null,x===null?d=ie:x.next=ie,x=W;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==x&&(R===null?me.firstBaseUpdate=ie:R.next=ie,me.lastBaseUpdate=W))}if(d!==null){var be=u.baseState;x=0,me=ie=W=null,R=d;do{var le=R.lane&-536870913,ue=le!==R.lane;if(ue?(Rt&le)===le:(o&le)===le){le!==0&&le===Ds&&(Yf=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,nt=R;le=i;var Jt=s;switch(nt.tag){case 1:if(qe=nt.payload,typeof qe=="function"){be=qe.call(Jt,be,le);break e}be=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=nt.payload,le=typeof qe=="function"?qe.call(Jt,be,le):qe,le==null)break e;be=v({},be,le);break e;case 2:ar=!0}}le=R.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ie=me=ue,W=be):me=me.next=ue,x|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ue=R,R=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(W=be),u.baseState=W,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),fr|=x,t.lanes=x,t.memoizedState=be}}function Ig(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Fg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ig(s[t],i)}var Ps=O(null),vc=O(0);function Bg(t,i){t=Ca,de(vc,t),de(Ps,i),Ca=t|i.baseLanes}function jf(){de(vc,Ca),de(Ps,Ps.current)}function Kf(){Ca=vc.current,Y(Ps),Y(vc)}var _i=O(null),Li=null;function or(t){var i=t.alternate;de(gn,gn.current&1),de(_i,t),Li===null&&(i===null||Ps.current!==null||i.memoizedState!==null)&&(Li=t)}function Zf(t){de(gn,gn.current),de(_i,t),Li===null&&(Li=t)}function zg(t){t.tag===22?(de(gn,gn.current),de(_i,t),Li===null&&(Li=t)):lr()}function lr(){de(gn,gn.current),de(_i,_i.current)}function xi(t){Y(_i),Li===t&&(Li=null),Y(gn)}var gn=O(0);function _c(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ih(s)||ah(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sa=0,pt=null,Zt=null,Mn=null,xc=!1,Os=!1,Kr=!1,Sc=0,el=0,Is=null,Xy=0;function fn(){throw Error(r(321))}function Qf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!gi(t[s],i[s]))return!1;return!0}function Jf(t,i,s,o,u,d){return Sa=d,pt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=t===null||t.memoizedState===null?y0:pd,Kr=!1,d=s(o,u),Kr=!1,Os&&(d=Gg(i,s,o,u)),Hg(t),d}function Hg(t){U.H=il;var i=Zt!==null&&Zt.next!==null;if(Sa=0,Mn=Zt=pt=null,xc=!1,el=0,Is=null,i)throw Error(r(300));t===null||En||(t=t.dependencies,t!==null&&uc(t)&&(En=!0))}function Gg(t,i,s,o){pt=t;var u=0;do{if(Os&&(Is=null),el=0,Os=!1,25<=u)throw Error(r(301));if(u+=1,Mn=Zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=M0,d=i(s,o)}while(Os);return d}function Wy(){var t=U.H,i=t.useState()[0];return i=typeof i.then=="function"?tl(i):i,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(pt.flags|=1024),i}function ed(){var t=Sc!==0;return Sc=0,t}function td(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function nd(t){if(xc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}xc=!1}Sa=0,Mn=Zt=pt=null,Os=!1,el=Sc=0,Is=null}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?pt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function vn(){if(Zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=Mn===null?pt.memoizedState:Mn.next;if(i!==null)Mn=i,Zt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Mn===null?pt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var i=el;return el+=1,Is===null&&(Is=[]),t=Ug(Is,t,i),i=pt,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?y0:pd),t}function yc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===N)return zn(t)}throw Error(r(438,String(t)))}function id(t){var i=null,s=pt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=bc(),pt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=Z;return i.index++,s}function ba(t,i){return typeof i=="function"?i(t):i}function Mc(t){var i=vn();return ad(i,Zt,t)}function ad(t,i,s){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}i.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var R=x=null,W=null,ie=i,me=!1;do{var be=ie.lane&-536870913;if(be!==ie.lane?(Rt&be)===be:(Sa&be)===be){var le=ie.revertLane;if(le===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),be===Ds&&(me=!0);else if((Sa&le)===le){ie=ie.next,le===Ds&&(me=!0);continue}else be={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},W===null?(R=W=be,x=d):W=W.next=be,pt.lanes|=le,fr|=le;be=ie.action,Kr&&s(d,be),d=ie.hasEagerState?ie.eagerState:s(d,be)}else le={lane:be,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},W===null?(R=W=le,x=d):W=W.next=le,pt.lanes|=be,fr|=be;ie=ie.next}while(ie!==null&&ie!==i);if(W===null?x=d:W.next=R,!gi(d,t.memoizedState)&&(En=!0,me&&(s=Us,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=W,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function rd(t){var i=vn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);gi(d,i.memoizedState)||(En=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function Vg(t,i,s){var o=pt,u=vn(),d=wt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var x=!gi((Zt||u).memoizedState,s);if(x&&(u.memoizedState=s,En=!0),u=u.queue,ld(Wg.bind(null,o,u,t),[t]),u.getSnapshot!==i||x||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,Fs(9,{destroy:void 0},Xg.bind(null,o,u,s,i),null),tn===null)throw Error(r(349));d||(Sa&127)!==0||kg(o,i,s)}return s}function kg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=pt.updateQueue,i===null?(i=bc(),pt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Xg(t,i,s,o){i.value=s,i.getSnapshot=o,$g(i)&&qg(t)}function Wg(t,i,s){return s(function(){$g(i)&&qg(t)})}function $g(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!gi(t,s)}catch{return!0}}function qg(t){var i=Gr(t,2);i!==null&&li(i,t,2)}function sd(t){var i=Jn();if(typeof t=="function"){var s=t;if(t=s(),Kr){Oe(!0);try{s()}finally{Oe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i}function Yg(t,i,s,o){return t.baseState=s,ad(t,Zt,typeof o=="function"?o:ba)}function $y(t,i,s,o,u){if(Ac(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,jg(i,d)):(d.next=s.next,i.pending=s.next=d)}}function jg(t,i){var s=i.action,o=i.payload,u=t.state;if(i.isTransition){var d=U.T,x={};U.T=x;try{var R=s(u,o),W=U.S;W!==null&&W(x,R),Kg(t,i,R)}catch(ie){od(t,i,ie)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=s(u,o),Kg(t,i,d)}catch(ie){od(t,i,ie)}}function Kg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Zg(t,i,o)},function(o){return od(t,i,o)}):Zg(t,i,s)}function Zg(t,i,s){i.status="fulfilled",i.value=s,Qg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,jg(t,s)))}function od(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Qg(i),i=i.next;while(i!==o)}t.action=null}function Qg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Jg(t,i){return i}function e0(t,i){if(wt){var s=tn.formState;if(s!==null){e:{var o=pt;if(wt){if(an){t:{for(var u=an,d=Ni;u.nodeType!==8;){if(!d){u=null;break t}if(u=Pi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){an=Pi(u.nextSibling),o=u.data==="F!";break e}}nr(o)}o=!1}o&&(i=s[0])}}return s=Jn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jg,lastRenderedState:i},s.queue=o,s=x0.bind(null,pt,o),o.dispatch=s,o=sd(!1),d=hd.bind(null,pt,!1,o.queue),o=Jn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,s=$y.bind(null,pt,u,d,s),u.dispatch=s,o.memoizedState=t,[i,s,!1]}function t0(t){var i=vn();return n0(i,Zt,t)}function n0(t,i,s){if(i=ad(t,i,Jg)[0],t=Mc(ba)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=tl(i)}catch(x){throw x===Ns?hc:x}else o=i;i=vn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(pt.flags|=2048,Fs(9,{destroy:void 0},qy.bind(null,u,s),null)),[o,d,t]}function qy(t,i){t.action=i}function i0(t){var i=vn(),s=Zt;if(s!==null)return n0(i,s,t);vn(),i=i.memoizedState,s=vn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function Fs(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=pt.updateQueue,i===null&&(i=bc(),pt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function a0(){return vn().memoizedState}function Ec(t,i,s,o){var u=Jn();pt.flags|=t,u.memoizedState=Fs(1|i,{destroy:void 0},s,o===void 0?null:o)}function Tc(t,i,s,o){var u=vn();o=o===void 0?null:o;var d=u.memoizedState.inst;Zt!==null&&o!==null&&Qf(o,Zt.memoizedState.deps)?u.memoizedState=Fs(i,d,s,o):(pt.flags|=t,u.memoizedState=Fs(1|i,d,s,o))}function r0(t,i){Ec(8390656,8,t,i)}function ld(t,i){Tc(2048,8,t,i)}function Yy(t){pt.flags|=4;var i=pt.updateQueue;if(i===null)i=bc(),pt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function s0(t){var i=vn().memoizedState;return Yy({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function o0(t,i){return Tc(4,2,t,i)}function l0(t,i){return Tc(4,4,t,i)}function c0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function u0(t,i,s){s=s!=null?s.concat([t]):null,Tc(4,4,c0.bind(null,i,t),s)}function cd(){}function f0(t,i){var s=vn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Qf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function d0(t,i){var s=vn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Qf(i,o[1]))return o[0];if(o=t(),Kr){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[o,i],o}function ud(t,i,s){return s===void 0||(Sa&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=hv(),pt.lanes|=t,fr|=t,s)}function h0(t,i,s,o){return gi(s,i)?s:Ps.current!==null?(t=ud(t,s,o),gi(t,i)||(En=!0),t):(Sa&42)===0||(Sa&1073741824)!==0&&(Rt&261930)===0?(En=!0,t.memoizedState=s):(t=hv(),pt.lanes|=t,fr|=t,i)}function p0(t,i,s,o,u){var d=D.p;D.p=d!==0&&8>d?d:8;var x=U.T,R={};U.T=R,hd(t,!1,i,s);try{var W=u(),ie=U.S;if(ie!==null&&ie(R,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var me=ky(W,o);nl(t,i,me,yi(t))}else nl(t,i,o,yi(t))}catch(be){nl(t,i,{then:function(){},status:"rejected",reason:be},yi())}finally{D.p=d,x!==null&&R.types!==null&&(x.types=R.types),U.T=x}}function jy(){}function fd(t,i,s,o){if(t.tag!==5)throw Error(r(476));var u=m0(t).queue;p0(t,u,i,I,s===null?jy:function(){return g0(t),s(o)})}function m0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:I},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function g0(t){var i=m0(t);i.next===null&&(i=t.alternate.memoizedState),nl(t,i.next.queue,{},yi())}function dd(){return zn(xl)}function v0(){return vn().memoizedState}function _0(){return vn().memoizedState}function Ky(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=yi();t=rr(s);var o=sr(i,t,s);o!==null&&(li(o,i,s),Zo(o,i,s)),i={cache:Gf()},t.payload=i;return}i=i.return}}function Zy(t,i,s){var o=yi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ac(t)?S0(i,s):(s=Df(t,i,s,o),s!==null&&(li(s,t,o),b0(s,i,o)))}function x0(t,i,s){var o=yi();nl(t,i,s,o)}function nl(t,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ac(t))S0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,R=d(x,s);if(u.hasEagerState=!0,u.eagerState=R,gi(R,x))return sc(t,i,u,0),tn===null&&rc(),!1}catch{}finally{}if(s=Df(t,i,u,o),s!==null)return li(s,t,o),b0(s,i,o),!0}return!1}function hd(t,i,s,o){if(o={lane:2,revertLane:Wd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ac(t)){if(i)throw Error(r(479))}else i=Df(t,s,o,2),i!==null&&li(i,t,2)}function Ac(t){var i=t.alternate;return t===pt||i!==null&&i===pt}function S0(t,i){Os=xc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function b0(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,Ri(t,s)}}var il={readContext:zn,use:yc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};il.useEffectEvent=fn;var y0={readContext:zn,use:yc,useCallback:function(t,i){return Jn().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:r0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Ec(4194308,4,c0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ec(4194308,4,t,i)},useInsertionEffect:function(t,i){Ec(4,2,t,i)},useMemo:function(t,i){var s=Jn();i=i===void 0?null:i;var o=t();if(Kr){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=Jn();if(s!==void 0){var u=s(i);if(Kr){Oe(!0);try{s(i)}finally{Oe(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Zy.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var i=Jn();return t={current:t},i.memoizedState=t},useState:function(t){t=sd(t);var i=t.queue,s=x0.bind(null,pt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:cd,useDeferredValue:function(t,i){var s=Jn();return ud(s,t,i)},useTransition:function(){var t=sd(!1);return t=p0.bind(null,pt,t.queue,!0,!1),Jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=pt,u=Jn();if(wt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),tn===null)throw Error(r(349));(Rt&127)!==0||kg(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,r0(Wg.bind(null,o,d,t),[t]),o.flags|=2048,Fs(9,{destroy:void 0},Xg.bind(null,o,d,s,i),null),s},useId:function(){var t=Jn(),i=tn.identifierPrefix;if(wt){var s=ea,o=Ji;s=(o&~(1<<32-Ie(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Sc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Xy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:dd,useFormState:e0,useActionState:e0,useOptimistic:function(t){var i=Jn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=hd.bind(null,pt,!0,s),s.dispatch=i,[t,i]},useMemoCache:id,useCacheRefresh:function(){return Jn().memoizedState=Ky.bind(null,pt)},useEffectEvent:function(t){var i=Jn(),s={impl:t};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},pd={readContext:zn,use:yc,useCallback:f0,useContext:zn,useEffect:ld,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:Mc,useRef:a0,useState:function(){return Mc(ba)},useDebugValue:cd,useDeferredValue:function(t,i){var s=vn();return h0(s,Zt.memoizedState,t,i)},useTransition:function(){var t=Mc(ba)[0],i=vn().memoizedState;return[typeof t=="boolean"?t:tl(t),i]},useSyncExternalStore:Vg,useId:v0,useHostTransitionStatus:dd,useFormState:t0,useActionState:t0,useOptimistic:function(t,i){var s=vn();return Yg(s,Zt,t,i)},useMemoCache:id,useCacheRefresh:_0};pd.useEffectEvent=s0;var M0={readContext:zn,use:yc,useCallback:f0,useContext:zn,useEffect:ld,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:rd,useRef:a0,useState:function(){return rd(ba)},useDebugValue:cd,useDeferredValue:function(t,i){var s=vn();return Zt===null?ud(s,t,i):h0(s,Zt.memoizedState,t,i)},useTransition:function(){var t=rd(ba)[0],i=vn().memoizedState;return[typeof t=="boolean"?t:tl(t),i]},useSyncExternalStore:Vg,useId:v0,useHostTransitionStatus:dd,useFormState:i0,useActionState:i0,useOptimistic:function(t,i){var s=vn();return Zt!==null?Yg(s,Zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:id,useCacheRefresh:_0};M0.useEffectEvent=s0;function md(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var gd={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=yi(),u=rr(o);u.payload=i,s!=null&&(u.callback=s),i=sr(t,u,o),i!==null&&(li(i,t,o),Zo(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=yi(),u=rr(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=sr(t,u,o),i!==null&&(li(i,t,o),Zo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yi(),o=rr(s);o.tag=2,i!=null&&(o.callback=i),i=sr(t,o,s),i!==null&&(li(i,t,s),Zo(i,t,s))}};function E0(t,i,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):i.prototype&&i.prototype.isPureReactComponent?!ko(s,o)||!ko(u,d):!0}function T0(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&gd.enqueueReplaceState(i,i.state,null)}function Zr(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function A0(t){ac(t)}function R0(t){console.error(t)}function C0(t){ac(t)}function Rc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function w0(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vd(t,i,s){return s=rr(s),s.tag=3,s.payload={element:null},s.callback=function(){Rc(t,i)},s}function D0(t){return t=rr(t),t.tag=3,t}function U0(t,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){w0(i,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){w0(i,s,o),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Qy(t,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&ws(i,s,u,!0),s=_i.current,s!==null){switch(s.tag){case 31:case 13:return Li===null?zc():s.alternate===null&&dn===0&&(dn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===pc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Vd(t,o,u)),!1;case 22:return s.flags|=65536,o===pc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Vd(t,o,u)),!1}throw Error(r(435,s.tag))}return Vd(t,o,u),zc(),!1}if(wt)return i=_i.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==If&&(t=Error(r(422),{cause:o}),$o(wi(t,s)))):(o!==If&&(i=Error(r(423),{cause:o}),$o(wi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=wi(o,s),u=vd(t.stateNode,o,u),qf(t,u),dn!==4&&(dn=2)),!1;var d=Error(r(520),{cause:o});if(d=wi(d,s),fl===null?fl=[d]:fl.push(d),dn!==4&&(dn=2),i===null)return!0;o=wi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=vd(s.stateNode,o,t),qf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(dr===null||!dr.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=D0(u),U0(u,t,s,o),qf(s,u),!1}s=s.return}while(s!==null);return!1}var _d=Error(r(461)),En=!1;function Hn(t,i,s,o){i.child=t===null?Og(i,null,s,o):jr(i,t.child,s,o)}function N0(t,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Wr(i),o=Jf(t,i,s,x,d,u),R=ed(),t!==null&&!En?(td(t,i,u),ya(t,i,u)):(wt&&R&&Pf(i),i.flags|=1,Hn(t,i,o,u),i.child)}function L0(t,i,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!Uf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,P0(t,i,d,o,u)):(t=lc(s.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Ad(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:ko,s(x,o)&&t.ref===i.ref)return ya(t,i,u)}return i.flags|=1,t=ga(d,o),t.ref=i.ref,t.return=i,i.child=t}function P0(t,i,s,o,u){if(t!==null){var d=t.memoizedProps;if(ko(d,o)&&t.ref===i.ref)if(En=!1,i.pendingProps=o=d,Ad(t,u))(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,ya(t,i,u)}return xd(t,i,s,o,u)}function O0(t,i,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=i.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return I0(t,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&dc(i,d!==null?d.cachePool:null),d!==null?Bg(i,d):jf(),zg(i);else return o=i.lanes=536870912,I0(t,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(dc(i,d.cachePool),Bg(i,d),lr(),i.memoizedState=null):(t!==null&&dc(i,null),jf(),lr());return Hn(t,i,u,s),i.child}function al(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function I0(t,i,s,o,u){var d=kf();return d=d===null?null:{parent:yn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&dc(i,null),jf(),zg(i),t!==null&&ws(t,i,o,!0),i.childLanes=u,null}function Cc(t,i){return i=Dc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function F0(t,i,s){return jr(i,t.child,null,s),t=Cc(i,i.pendingProps),t.flags|=2,xi(i),i.memoizedState=null,t}function Jy(t,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=Cc(i,o),i.lanes=536870912,al(null,t);if(Zf(i),(t=an)?(t=jv(t,Ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:er!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},s=Sg(t),s.return=i,i.child=s,Bn=i,an=null)):t=null,t===null)throw nr(i);return i.lanes=536870912,null}return Cc(i,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(Zf(i),u)if(i.flags&256)i.flags&=-257,i=F0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(En||ws(t,i,s,!1),u=(s&t.childLanes)!==0,En||u){if(o=tn,o!==null&&(x=hi(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Gr(t,x),li(o,t,x),_d;zc(),i=F0(t,i,s)}else t=d.treeContext,an=Pi(x.nextSibling),Bn=i,wt=!0,tr=null,Ni=!1,t!==null&&Mg(i,t),i=Cc(i,o),i.flags|=4096;return i}return t=ga(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function wc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function xd(t,i,s,o,u){return Wr(i),s=Jf(t,i,s,o,void 0,u),o=ed(),t!==null&&!En?(td(t,i,u),ya(t,i,u)):(wt&&o&&Pf(i),i.flags|=1,Hn(t,i,s,u),i.child)}function B0(t,i,s,o,u,d){return Wr(i),i.updateQueue=null,s=Gg(i,o,s,u),Hg(t),o=ed(),t!==null&&!En?(td(t,i,d),ya(t,i,d)):(wt&&o&&Pf(i),i.flags|=1,Hn(t,i,s,d),i.child)}function z0(t,i,s,o,u){if(Wr(i),i.stateNode===null){var d=Ts,x=s.contextType;typeof x=="object"&&x!==null&&(d=zn(x)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Wf(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?zn(x):Ts,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(md(i,s,x,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&gd.enqueueReplaceState(d,d.state,null),Jo(i,o,d,u),Qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var R=i.memoizedProps,W=Zr(s,R);d.props=W;var ie=d.context,me=s.contextType;x=Ts,typeof me=="object"&&me!==null&&(x=zn(me));var be=s.getDerivedStateFromProps;me=typeof be=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ie!==x)&&T0(i,d,o,x),ar=!1;var le=i.memoizedState;d.state=le,Jo(i,o,d,u),Qo(),ie=i.memoizedState,R||le!==ie||ar?(typeof be=="function"&&(md(i,s,be,o),ie=i.memoizedState),(W=ar||E0(i,s,W,o,le,ie,x))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ie),d.props=o,d.state=ie,d.context=x,o=W):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,$f(t,i),x=i.memoizedProps,me=Zr(s,x),d.props=me,be=i.pendingProps,le=d.context,ie=s.contextType,W=Ts,typeof ie=="object"&&ie!==null&&(W=zn(ie)),R=s.getDerivedStateFromProps,(ie=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==be||le!==W)&&T0(i,d,o,W),ar=!1,le=i.memoizedState,d.state=le,Jo(i,o,d,u),Qo();var ue=i.memoizedState;x!==be||le!==ue||ar||t!==null&&t.dependencies!==null&&uc(t.dependencies)?(typeof R=="function"&&(md(i,s,R,o),ue=i.memoizedState),(me=ar||E0(i,s,me,o,le,ue,W)||t!==null&&t.dependencies!==null&&uc(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,W),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,W)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ue),d.props=o,d.state=ue,d.context=W,o=me):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,wc(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=jr(i,t.child,null,u),i.child=jr(i,null,s,u)):Hn(t,i,s,u),i.memoizedState=d.state,t=i.child):t=ya(t,i,u),t}function H0(t,i,s,o){return kr(),i.flags|=256,Hn(t,i,s,o),i.child}var Sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(t){return{baseLanes:t,cachePool:wg()}}function yd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=bi),t}function G0(t,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(u?or(i):lr(),(t=an)?(t=jv(t,Ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:er!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},s=Sg(t),s.return=i,i.child=s,Bn=i,an=null)):t=null,t===null)throw nr(i);return ah(t)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(lr(),u=i.mode,R=Dc({mode:"hidden",children:R},u),o=Vr(o,u,s,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=bd(s),o.childLanes=yd(t,x,s),i.memoizedState=Sd,al(null,o)):(or(i),Md(i,R))}var W=t.memoizedState;if(W!==null&&(R=W.dehydrated,R!==null)){if(d)i.flags&256?(or(i),i.flags&=-257,i=Ed(t,i,s)):i.memoizedState!==null?(lr(),i.child=t.child,i.flags|=128,i=null):(lr(),R=o.fallback,u=i.mode,o=Dc({mode:"visible",children:o.children},u),R=Vr(R,u,s,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,jr(i,t.child,null,s),o=i.child,o.memoizedState=bd(s),o.childLanes=yd(t,x,s),i.memoizedState=Sd,i=al(null,o));else if(or(i),ah(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ie=x.dgst;x=ie,o=Error(r(419)),o.stack="",o.digest=x,$o({value:o,source:null,stack:null}),i=Ed(t,i,s)}else if(En||ws(t,i,s,!1),x=(s&t.childLanes)!==0,En||x){if(x=tn,x!==null&&(o=hi(x,s),o!==0&&o!==W.retryLane))throw W.retryLane=o,Gr(t,o),li(x,t,o),_d;ih(R)||zc(),i=Ed(t,i,s)}else ih(R)?(i.flags|=192,i.child=t.child,i=null):(t=W.treeContext,an=Pi(R.nextSibling),Bn=i,wt=!0,tr=null,Ni=!1,t!==null&&Mg(i,t),i=Md(i,o.children),i.flags|=4096);return i}return u?(lr(),R=o.fallback,u=i.mode,W=t.child,ie=W.sibling,o=ga(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,ie!==null?R=ga(ie,R):(R=Vr(R,u,s,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,al(null,o),o=i.child,R=t.child.memoizedState,R===null?R=bd(s):(u=R.cachePool,u!==null?(W=yn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=wg(),R={baseLanes:R.baseLanes|s,cachePool:u}),o.memoizedState=R,o.childLanes=yd(t,x,s),i.memoizedState=Sd,al(t.child,o)):(or(i),s=t.child,t=s.sibling,s=ga(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function Md(t,i){return i=Dc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Dc(t,i){return t=vi(22,t,null,i),t.lanes=0,t}function Ed(t,i,s){return jr(i,t.child,null,s),t=Md(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function V0(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),zf(t.return,i,s)}function Td(t,i,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function k0(t,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=gn.current,R=(x&2)!==0;if(R?(x=x&1|2,i.flags|=128):x&=1,de(gn,x),Hn(t,i,o,s),o=wt?Wo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V0(t,s,i);else if(t.tag===19)V0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&_c(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Td(i,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&_c(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Td(i,!0,s,null,d,o);break;case"together":Td(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ya(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ws(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ga(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ga(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ad(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&uc(t)))}function eM(t,i,s){switch(i.tag){case 3:Me(i,i.stateNode.containerInfo),ir(i,yn,t.memoizedState.cache),kr();break;case 27:case 5:Je(i);break;case 4:Me(i,i.stateNode.containerInfo);break;case 10:ir(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Zf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(or(i),i.flags|=128,null):(s&i.child.childLanes)!==0?G0(t,i,s):(or(i),t=ya(t,i,s),t!==null?t.sibling:null);or(i);break;case 19:var u=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(ws(t,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return k0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),de(gn,gn.current),o)break;return null;case 22:return i.lanes=0,O0(t,i,s,i.pendingProps);case 24:ir(i,yn,t.memoizedState.cache)}return ya(t,i,s)}function X0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)En=!0;else{if(!Ad(t,s)&&(i.flags&128)===0)return En=!1,eM(t,i,s);En=(t.flags&131072)!==0}else En=!1,wt&&(i.flags&1048576)!==0&&yg(i,Wo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=qr(i.elementType),i.type=t,typeof t=="function")Uf(t)?(o=Zr(t,o),i.tag=1,i=z0(null,i,t,o,s)):(i.tag=0,i=xd(null,i,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===P){i.tag=11,i=N0(null,i,t,o,s);break e}else if(u===G){i.tag=14,i=L0(null,i,t,o,s);break e}}throw i=H(t)||t,Error(r(306,i,""))}}return i;case 0:return xd(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Zr(o,i.pendingProps),z0(t,i,o,u,s);case 3:e:{if(Me(i,i.stateNode.containerInfo),t===null)throw Error(r(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,$f(t,i),Jo(i,o,null,s);var x=i.memoizedState;if(o=x.cache,ir(i,yn,o),o!==d.cache&&Hf(i,[yn],s,!0),Qo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=H0(t,i,o,s);break e}else if(o!==u){u=wi(Error(r(424)),i),$o(u),i=H0(t,i,o,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=Pi(t.firstChild),Bn=i,wt=!0,tr=null,Ni=!0,s=Og(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(kr(),o===u){i=ya(t,i,s);break e}Hn(t,i,o,s)}i=i.child}return i;case 26:return wc(t,i),t===null?(s=t_(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,o=$c(te.current).createElement(s),o[mn]=i,o[Fn]=t,Gn(o,s,t),bn(o),i.stateNode=o):i.memoizedState=t_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Je(i),t===null&&wt&&(o=i.stateNode=Qv(i.type,i.pendingProps,te.current),Bn=i,Ni=!0,u=an,gr(i.type)?(rh=u,an=Pi(o.firstChild)):an=u),Hn(t,i,i.pendingProps.children,s),wc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((u=o=an)&&(o=DM(o,i.type,i.pendingProps,Ni),o!==null?(i.stateNode=o,Bn=i,an=Pi(o.firstChild),Ni=!1,u=!0):u=!1),u||nr(i)),Je(i),u=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,eh(u,d)?o=null:x!==null&&eh(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=Jf(t,i,Wy,null,null,s),xl._currentValue=u),wc(t,i),Hn(t,i,o,s),i.child;case 6:return t===null&&wt&&((t=s=an)&&(s=UM(s,i.pendingProps,Ni),s!==null?(i.stateNode=s,Bn=i,an=null,t=!0):t=!1),t||nr(i)),null;case 13:return G0(t,i,s);case 4:return Me(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=jr(i,null,o,s):Hn(t,i,o,s),i.child;case 11:return N0(t,i,i.type,i.pendingProps,s);case 7:return Hn(t,i,i.pendingProps,s),i.child;case 8:return Hn(t,i,i.pendingProps.children,s),i.child;case 12:return Hn(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,ir(i,i.type,o.value),Hn(t,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Wr(i),u=zn(u),o=o(u),i.flags|=1,Hn(t,i,o,s),i.child;case 14:return L0(t,i,i.type,i.pendingProps,s);case 15:return P0(t,i,i.type,i.pendingProps,s);case 19:return k0(t,i,s);case 31:return Jy(t,i,s);case 22:return O0(t,i,s,i.pendingProps);case 24:return Wr(i),o=zn(yn),t===null?(u=kf(),u===null&&(u=tn,d=Gf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Wf(i),ir(i,yn,u)):((t.lanes&s)!==0&&($f(t,i),Jo(i,null,null,s),Qo()),u=t.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ir(i,yn,o)):(o=d.cache,ir(i,yn,o),o!==u.cache&&Hf(i,[yn],s,!0))),Hn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ma(t){t.flags|=4}function Rd(t,i,s,o,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(vv())t.flags|=8192;else throw Yr=pc,Xf}else t.flags&=-16777217}function W0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!s_(i))if(vv())t.flags|=8192;else throw Yr=pc,Xf}function Uc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ee():536870912,t.lanes|=i,Gs|=i)}function rl(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function tM(t,i,s){var o=i.pendingProps;switch(Of(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),xa(yn),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Cs(i)?Ma(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ff())),rn(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(Ma(i),d!==null?(rn(i),W0(i,d)):(rn(i),Rd(i,u,null,o,s))):d?d!==t.memoizedState?(Ma(i),rn(i),W0(i,d)):(rn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ma(i),rn(i),Rd(i,u,t,o,s)),null;case 27:if(Ve(i),s=te.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Ma(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return rn(i),null}t=ye.current,Cs(i)?Eg(i):(t=Qv(u,o,s),i.stateNode=t,Ma(i))}return rn(i),null;case 5:if(Ve(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Ma(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return rn(i),null}if(d=ye.current,Cs(i))Eg(i);else{var x=$c(te.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=i,d[Fn]=o;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(Gn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ma(i)}}return rn(i),Rd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Ma(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(t=te.current,Cs(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Gv(t.nodeValue,s)),t||nr(i,!0)}else t=$c(t).createTextNode(o),t[mn]=i,i.stateNode=t}return rn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(o=Cs(i),s!==null){if(t===null){if(!o)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=i}else kr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),t=!1}else s=Ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(xi(i),i):(xi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return rn(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Cs(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mn]=i}else kr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),u=!1}else u=Ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(xi(i),i):(xi(i),null)}return xi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Uc(i,i.updateQueue),rn(i),null);case 4:return Be(),t===null&&jd(i.stateNode.containerInfo),rn(i),null;case 10:return xa(i.type),rn(i),null;case 19:if(Y(gn),o=i.memoizedState,o===null)return rn(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)rl(o,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=_c(t),d!==null){for(i.flags|=128,rl(o,!1),t=d.updateQueue,i.updateQueue=t,Uc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)xg(s,t),s=s.sibling;return de(gn,gn.current&1|2),wt&&va(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&we()>Ic&&(i.flags|=128,u=!0,rl(o,!1),i.lanes=4194304)}else{if(!u)if(t=_c(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,Uc(i,t),rl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!wt)return rn(i),null}else 2*we()-o.renderingStartTime>Ic&&s!==536870912&&(i.flags|=128,u=!0,rl(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(t=o.last,t!==null?t.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,s=gn.current,de(gn,u?s&1|2:s&1),wt&&va(i,o.treeForkCount),t):(rn(i),null);case 22:case 23:return xi(i),Kf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),s=i.updateQueue,s!==null&&Uc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&Y($r),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),xa(yn),rn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function nM(t,i){switch(Of(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xa(yn),Be(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ve(i),null;case 31:if(i.memoizedState!==null){if(xi(i),i.alternate===null)throw Error(r(340));kr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(xi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));kr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Y(gn),null;case 4:return Be(),null;case 10:return xa(i.type),null;case 22:case 23:return xi(i),Kf(),t!==null&&Y($r),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return xa(yn),null;case 25:return null;default:return null}}function $0(t,i){switch(Of(i),i.tag){case 3:xa(yn),Be();break;case 26:case 27:case 5:Ve(i);break;case 4:Be();break;case 31:i.memoizedState!==null&&xi(i);break;case 13:xi(i);break;case 19:Y(gn);break;case 10:xa(i.type);break;case 22:case 23:xi(i),Kf(),t!==null&&Y($r);break;case 24:xa(yn)}}function sl(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(R){jt(i,i.return,R)}}function cr(t,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=i;var W=s,ie=R;try{ie()}catch(me){jt(u,W,me)}}}o=o.next}while(o!==d)}}catch(me){jt(i,i.return,me)}}function q0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Fg(i,s)}catch(o){jt(t,t.return,o)}}}function Y0(t,i,s){s.props=Zr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){jt(t,i,o)}}function ol(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){jt(t,i,u)}}function ta(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){jt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){jt(t,i,u)}else s.current=null}function j0(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){jt(t,t.return,u)}}function Cd(t,i,s){try{var o=t.stateNode;EM(o,t.type,s,i),o[Fn]=i}catch(u){jt(t,t.return,u)}}function K0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gr(t.type)||t.tag===4}function wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pa));else if(o!==4&&(o===27&&gr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Dd(t,i,s),t=t.sibling;t!==null;)Dd(t,i,s),t=t.sibling}function Nc(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&gr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Nc(t,i,s),t=t.sibling;t!==null;)Nc(t,i,s),t=t.sibling}function Z0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Gn(i,o,s),i[mn]=t,i[Fn]=s}catch(d){jt(t,t.return,d)}}var Ea=!1,Tn=!1,Ud=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function iM(t,i){if(t=t.containerInfo,Qd=Jc,t=ug(t),Ef(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,R=-1,W=-1,ie=0,me=0,be=t,le=null;t:for(;;){for(var ue;be!==s||u!==0&&be.nodeType!==3||(R=x+u),be!==d||o!==0&&be.nodeType!==3||(W=x+o),be.nodeType===3&&(x+=be.nodeValue.length),(ue=be.firstChild)!==null;)le=be,be=ue;for(;;){if(be===t)break t;if(le===s&&++ie===u&&(R=x),le===d&&++me===o&&(W=x),(ue=be.nextSibling)!==null)break;be=le,le=be.parentNode}be=ue}s=R===-1||W===-1?null:{start:R,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jd={focusedElem:t,selectionRange:s},Jc=!1,Ln=i;Ln!==null;)if(i=Ln,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ln=t;else for(;Ln!==null;){switch(i=Ln,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var qe=Zr(s.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){jt(s,s.return,nt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)nh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Ln=t;break}Ln=i.return}}function J0(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(t,s),o&4&&sl(5,s);break;case 1:if(Aa(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){jt(s,s.return,x)}else{var u=Zr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){jt(s,s.return,x)}}o&64&&q0(s),o&512&&ol(s,s.return);break;case 3:if(Aa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Fg(t,i)}catch(x){jt(s,s.return,x)}}break;case 27:i===null&&o&4&&Z0(s);case 26:case 5:Aa(t,s),i===null&&o&4&&j0(s),o&512&&ol(s,s.return);break;case 12:Aa(t,s);break;case 31:Aa(t,s),o&4&&nv(t,s);break;case 13:Aa(t,s),o&4&&iv(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=dM.bind(null,s),NM(t,s))));break;case 22:if(o=s.memoizedState!==null||Ea,!o){i=i!==null&&i.memoizedState!==null||Tn,u=Ea;var d=Tn;Ea=o,(Tn=i)&&!d?Ra(t,s,(s.subtreeFlags&8772)!==0):Aa(t,s),Ea=u,Tn=d}break;case 30:break;default:Aa(t,s)}}function ev(t){var i=t.alternate;i!==null&&(t.alternate=null,ev(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Oo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,ai=!1;function Ta(t,i,s){for(s=s.child;s!==null;)tv(t,i,s),s=s.sibling}function tv(t,i,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:Tn||ta(s,i),Ta(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Tn||ta(s,i);var o=cn,u=ai;gr(s.type)&&(cn=s.stateNode,ai=!1),Ta(t,i,s),gl(s.stateNode),cn=o,ai=u;break;case 5:Tn||ta(s,i);case 6:if(o=cn,u=ai,cn=null,Ta(t,i,s),cn=o,ai=u,cn!==null)if(ai)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(s.stateNode)}catch(d){jt(s,i,d)}else try{cn.removeChild(s.stateNode)}catch(d){jt(s,i,d)}break;case 18:cn!==null&&(ai?(t=cn,qv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),js(t)):qv(cn,s.stateNode));break;case 4:o=cn,u=ai,cn=s.stateNode.containerInfo,ai=!0,Ta(t,i,s),cn=o,ai=u;break;case 0:case 11:case 14:case 15:cr(2,s,i),Tn||cr(4,s,i),Ta(t,i,s);break;case 1:Tn||(ta(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Y0(s,i,o)),Ta(t,i,s);break;case 21:Ta(t,i,s);break;case 22:Tn=(o=Tn)||s.memoizedState!==null,Ta(t,i,s),Tn=o;break;default:Ta(t,i,s)}}function nv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{js(t)}catch(s){jt(i,i.return,s)}}}function iv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{js(t)}catch(s){jt(i,i.return,s)}}function aM(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Q0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Q0),i;default:throw Error(r(435,t.tag))}}function Lc(t,i){var s=aM(t);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=hM.bind(null,t,o);o.then(u,u)}})}function ri(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=i,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(gr(R.type)){cn=R.stateNode,ai=!1;break e}break;case 5:cn=R.stateNode,ai=!1;break e;case 3:case 4:cn=R.stateNode.containerInfo,ai=!0;break e}R=R.return}if(cn===null)throw Error(r(160));tv(d,x,u),cn=null,ai=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)av(i,t),i=i.sibling}var Vi=null;function av(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(i,t),si(t),o&4&&(cr(3,t,t.return),sl(3,t),cr(5,t,t.return));break;case 1:ri(i,t),si(t),o&512&&(Tn||s===null||ta(s,s.return)),o&64&&Ea&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Vi;if(ri(i,t),si(t),o&512&&(Tn||s===null||ta(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ya]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Gn(d,o,s),d[mn]=t,bn(d),o=d;break e;case"link":var x=a_("link","href",u).get(o+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}d=u.createElement(o),Gn(d,o,s),u.head.appendChild(d);break;case"meta":if(x=a_("meta","content",u).get(o+(s.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}d=u.createElement(o),Gn(d,o,s),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=t,bn(d),o=d}t.stateNode=o}else r_(u,t.type,t.stateNode);else t.stateNode=i_(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?r_(u,t.type,t.stateNode):i_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Cd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ri(i,t),si(t),o&512&&(Tn||s===null||ta(s,s.return)),s!==null&&o&4&&Cd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ri(i,t),si(t),o&512&&(Tn||s===null||ta(s,s.return)),t.flags&32){u=t.stateNode;try{mi(u,"")}catch(qe){jt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Cd(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Ud=!0);break;case 6:if(ri(i,t),si(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(qe){jt(t,t.return,qe)}}break;case 3:if(jc=null,u=Vi,Vi=qc(i.containerInfo),ri(i,t),Vi=u,si(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{js(i.containerInfo)}catch(qe){jt(t,t.return,qe)}Ud&&(Ud=!1,rv(t));break;case 4:o=Vi,Vi=qc(t.stateNode.containerInfo),ri(i,t),si(t),Vi=o;break;case 12:ri(i,t),si(t);break;case 31:ri(i,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lc(t,o)));break;case 13:ri(i,t),si(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Oc=we()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lc(t,o)));break;case 22:u=t.memoizedState!==null;var W=s!==null&&s.memoizedState!==null,ie=Ea,me=Tn;if(Ea=ie||u,Tn=me||W,ri(i,t),Tn=me,Ea=ie,si(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||W||Ea||Tn||Qr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){W=s=i;try{if(d=W.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=W.stateNode;var be=W.memoizedProps.style,le=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){jt(W,W.return,qe)}}}else if(i.tag===6){if(s===null){W=i;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(qe){jt(W,W.return,qe)}}}else if(i.tag===18){if(s===null){W=i;try{var ue=W.stateNode;u?Yv(ue,!0):Yv(W.stateNode,!1)}catch(qe){jt(W,W.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Lc(t,s))));break;case 19:ri(i,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lc(t,o)));break;case 30:break;case 21:break;default:ri(i,t),si(t)}}function si(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(K0(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=wd(t);Nc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(mi(x,""),s.flags&=-33);var R=wd(t);Nc(t,R,x);break;case 3:case 4:var W=s.stateNode.containerInfo,ie=wd(t);Dd(t,ie,W);break;default:throw Error(r(161))}}catch(me){jt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function rv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;rv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Aa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)J0(t,i.alternate,i),i=i.sibling}function Qr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:cr(4,i,i.return),Qr(i);break;case 1:ta(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Y0(i,i.return,s),Qr(i);break;case 27:gl(i.stateNode);case 26:case 5:ta(i,i.return),Qr(i);break;case 22:i.memoizedState===null&&Qr(i);break;case 30:Qr(i);break;default:Qr(i)}t=t.sibling}}function Ra(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ra(u,d,s),sl(4,d);break;case 1:if(Ra(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){jt(o,o.return,ie)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Ig(W[u],R)}catch(ie){jt(o,o.return,ie)}}s&&x&64&&q0(d),ol(d,d.return);break;case 27:Z0(d);case 26:case 5:Ra(u,d,s),s&&o===null&&x&4&&j0(d),ol(d,d.return);break;case 12:Ra(u,d,s);break;case 31:Ra(u,d,s),s&&x&4&&nv(u,d);break;case 13:Ra(u,d,s),s&&x&4&&iv(u,d);break;case 22:d.memoizedState===null&&Ra(u,d,s),ol(d,d.return);break;case 30:break;default:Ra(u,d,s)}i=i.sibling}}function Nd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&qo(s))}function Ld(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t))}function ki(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)sv(t,i,s,o),i=i.sibling}function sv(t,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:ki(t,i,s,o),u&2048&&sl(9,i);break;case 1:ki(t,i,s,o);break;case 3:ki(t,i,s,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t)));break;case 12:if(u&2048){ki(t,i,s,o),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){jt(i,i.return,W)}}else ki(t,i,s,o);break;case 31:ki(t,i,s,o);break;case 13:ki(t,i,s,o);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?ki(t,i,s,o):ll(t,i):d._visibility&2?ki(t,i,s,o):(d._visibility|=2,Bs(t,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Nd(x,i);break;case 24:ki(t,i,s,o),u&2048&&Ld(i.alternate,i);break;default:ki(t,i,s,o)}}function Bs(t,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,R=s,W=o,ie=x.flags;switch(x.tag){case 0:case 11:case 15:Bs(d,x,R,W,u),sl(8,x);break;case 23:break;case 22:var me=x.stateNode;x.memoizedState!==null?me._visibility&2?Bs(d,x,R,W,u):ll(d,x):(me._visibility|=2,Bs(d,x,R,W,u)),u&&ie&2048&&Nd(x.alternate,x);break;case 24:Bs(d,x,R,W,u),u&&ie&2048&&Ld(x.alternate,x);break;default:Bs(d,x,R,W,u)}i=i.sibling}}function ll(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,u=o.flags;switch(o.tag){case 22:ll(s,o),u&2048&&Nd(o.alternate,o);break;case 24:ll(s,o),u&2048&&Ld(o.alternate,o);break;default:ll(s,o)}i=i.sibling}}var cl=8192;function zs(t,i,s){if(t.subtreeFlags&cl)for(t=t.child;t!==null;)ov(t,i,s),t=t.sibling}function ov(t,i,s){switch(t.tag){case 26:zs(t,i,s),t.flags&cl&&t.memoizedState!==null&&XM(s,Vi,t.memoizedState,t.memoizedProps);break;case 5:zs(t,i,s);break;case 3:case 4:var o=Vi;Vi=qc(t.stateNode.containerInfo),zs(t,i,s),Vi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=cl,cl=16777216,zs(t,i,s),cl=o):zs(t,i,s));break;default:zs(t,i,s)}}function lv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ul(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Ln=o,uv(o,t)}lv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cv(t),t=t.sibling}function cv(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&cr(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Pc(t)):ul(t);break;default:ul(t)}}function Pc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Ln=o,uv(o,t)}lv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:cr(8,i,i.return),Pc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Pc(i));break;default:Pc(i)}t=t.sibling}}function uv(t,i){for(;Ln!==null;){var s=Ln;switch(s.tag){case 0:case 11:case 15:cr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Ln=o;else e:for(s=t;Ln!==null;){o=Ln;var u=o.sibling,d=o.return;if(ev(o),o===s){Ln=null;break e}if(u!==null){u.return=d,Ln=u;break e}Ln=d}}}var rM={getCacheForType:function(t){var i=zn(yn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return zn(yn).controller.signal}},sM=typeof WeakMap=="function"?WeakMap:Map,Gt=0,tn=null,Et=null,Rt=0,Yt=0,Si=null,ur=!1,Hs=!1,Pd=!1,Ca=0,dn=0,fr=0,Jr=0,Od=0,bi=0,Gs=0,fl=null,oi=null,Id=!1,Oc=0,fv=0,Ic=1/0,Fc=null,dr=null,Cn=0,hr=null,Vs=null,wa=0,Fd=0,Bd=null,dv=null,dl=0,zd=null;function yi(){return(Gt&2)!==0&&Rt!==0?Rt&-Rt:U.T!==null?Wd():No()}function hv(){if(bi===0)if((Rt&536870912)===0||wt){var t=yt;yt<<=1,(yt&3932160)===0&&(yt=262144),bi=t}else bi=536870912;return t=_i.current,t!==null&&(t.flags|=32),bi}function li(t,i,s){(t===tn&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(ks(t,0),pr(t,Rt,bi,!1)),at(t,s),((Gt&2)===0||t!==tn)&&(t===tn&&((Gt&2)===0&&(Jr|=s),dn===4&&pr(t,Rt,bi,!1)),na(t))}function pv(t,i,s){if((Gt&6)!==0)throw Error(r(327));var o=!s&&(i&127)===0&&(i&t.expiredLanes)===0||He(t,i),u=o?cM(t,i):Gd(t,i,!0),d=o;do{if(u===0){Hs&&!o&&pr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!oM(s)){u=Gd(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var R=t;u=fl;var W=R.current.memoizedState.isDehydrated;if(W&&(ks(R,x).flags|=256),x=Gd(R,x,!1),x!==2){if(Pd&&!W){R.errorRecoveryDisabledLanes|=d,Jr|=d,u=4;break e}d=oi,oi=u,d!==null&&(oi===null?oi=d:oi.push.apply(oi,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){ks(t,0),pr(t,i,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:pr(o,i,bi,!ur);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Oc+300-we(),10<u)){if(pr(o,i,bi,!ur),ve(o,0,!0)!==0)break e;wa=i,o.timeoutHandle=Wv(mv.bind(null,o,s,oi,Fc,Id,i,bi,Jr,Gs,ur,d,"Throttled",-0,0),u);break e}mv(o,s,oi,Fc,Id,i,bi,Jr,Gs,ur,d,null,-0,0)}}break}while(!0);na(t)}function mv(t,i,s,o,u,d,x,R,W,ie,me,be,le,ue){if(t.timeoutHandle=-1,be=i.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},ov(i,d,be);var qe=(d&62914560)===d?Oc-we():(d&4194048)===d?fv-we():0;if(qe=WM(be,qe),qe!==null){wa=d,t.cancelPendingCommit=qe(Mv.bind(null,t,i,d,s,o,u,x,R,W,me,be,null,le,ue)),pr(t,d,x,!ie);return}}Mv(t,i,d,s,o,u,x,R,W)}function oM(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!gi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i,s,o){i&=~Od,i&=~Jr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var d=31-Ie(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&Ht(t,s,i)}function Bc(){return(Gt&6)===0?(hl(0),!1):!0}function Hd(){if(Et!==null){if(Yt===0)var t=Et.return;else t=Et,_a=Xr=null,nd(t),Ls=null,jo=0,t=Et;for(;t!==null;)$0(t.alternate,t),t=t.return;Et=null}}function ks(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,RM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),wa=0,Hd(),tn=t,Et=s=ga(t.current,null),Rt=i,Yt=0,Si=null,ur=!1,Hs=He(t,i),Pd=!1,Gs=bi=Od=Jr=fr=dn=0,oi=fl=null,Id=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ie(o),d=1<<u;i|=t[u],o&=~d}return Ca=i,rc(),s}function gv(t,i){pt=null,U.H=il,i===Ns||i===hc?(i=Ng(),Yt=3):i===Xf?(i=Ng(),Yt=4):Yt=i===_d?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Si=i,Et===null&&(dn=1,Rc(t,wi(i,t.current)))}function vv(){var t=_i.current;return t===null?!0:(Rt&4194048)===Rt?Li===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===Li:!1}function _v(){var t=U.H;return U.H=il,t===null?il:t}function xv(){var t=U.A;return U.A=rM,t}function zc(){dn=4,ur||(Rt&4194048)!==Rt&&_i.current!==null||(Hs=!0),(fr&134217727)===0&&(Jr&134217727)===0||tn===null||pr(tn,Rt,bi,!1)}function Gd(t,i,s){var o=Gt;Gt|=2;var u=_v(),d=xv();(tn!==t||Rt!==i)&&(Fc=null,ks(t,i)),i=!1;var x=dn;e:do try{if(Yt!==0&&Et!==null){var R=Et,W=Si;switch(Yt){case 8:Hd(),x=6;break e;case 3:case 2:case 9:case 6:_i.current===null&&(i=!0);var ie=Yt;if(Yt=0,Si=null,Xs(t,R,W,ie),s&&Hs){x=0;break e}break;default:ie=Yt,Yt=0,Si=null,Xs(t,R,W,ie)}}lM(),x=dn;break}catch(me){gv(t,me)}while(!0);return i&&t.shellSuspendCounter++,_a=Xr=null,Gt=o,U.H=u,U.A=d,Et===null&&(tn=null,Rt=0,rc()),x}function lM(){for(;Et!==null;)Sv(Et)}function cM(t,i){var s=Gt;Gt|=2;var o=_v(),u=xv();tn!==t||Rt!==i?(Fc=null,Ic=we()+500,ks(t,i)):Hs=He(t,i);e:do try{if(Yt!==0&&Et!==null){i=Et;var d=Si;t:switch(Yt){case 1:Yt=0,Si=null,Xs(t,i,d,1);break;case 2:case 9:if(Dg(d)){Yt=0,Si=null,bv(i);break}i=function(){Yt!==2&&Yt!==9||tn!==t||(Yt=7),na(t)},d.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:Dg(d)?(Yt=0,Si=null,bv(i)):(Yt=0,Si=null,Xs(t,i,d,7));break;case 5:var x=null;switch(Et.tag){case 26:x=Et.memoizedState;case 5:case 27:var R=Et;if(x?s_(x):R.stateNode.complete){Yt=0,Si=null;var W=R.sibling;if(W!==null)Et=W;else{var ie=R.return;ie!==null?(Et=ie,Hc(ie)):Et=null}break t}}Yt=0,Si=null,Xs(t,i,d,5);break;case 6:Yt=0,Si=null,Xs(t,i,d,6);break;case 8:Hd(),dn=6;break e;default:throw Error(r(462))}}uM();break}catch(me){gv(t,me)}while(!0);return _a=Xr=null,U.H=o,U.A=u,Gt=s,Et!==null?0:(tn=null,Rt=0,rc(),dn)}function uM(){for(;Et!==null&&!it();)Sv(Et)}function Sv(t){var i=X0(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,i===null?Hc(t):Et=i}function bv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=B0(s,i,i.pendingProps,i.type,void 0,Rt);break;case 11:i=B0(s,i,i.pendingProps,i.type.render,i.ref,Rt);break;case 5:nd(i);default:$0(s,i),i=Et=xg(i,Ca),i=X0(s,i,Ca)}t.memoizedProps=t.pendingProps,i===null?Hc(t):Et=i}function Xs(t,i,s,o){_a=Xr=null,nd(i),Ls=null,jo=0;var u=i.return;try{if(Qy(t,u,i,s,Rt)){dn=1,Rc(t,wi(s,t.current)),Et=null;return}}catch(d){if(u!==null)throw Et=u,d;dn=1,Rc(t,wi(s,t.current)),Et=null;return}i.flags&32768?(wt||o===1?t=!0:Hs||(Rt&536870912)!==0?t=!1:(ur=t=!0,(o===2||o===9||o===3||o===6)&&(o=_i.current,o!==null&&o.tag===13&&(o.flags|=16384))),yv(i,t)):Hc(i)}function Hc(t){var i=t;do{if((i.flags&32768)!==0){yv(i,ur);return}t=i.return;var s=tM(i.alternate,i,Ca);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);dn===0&&(dn=5)}function yv(t,i){do{var s=nM(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);dn=6,Et=null}function Mv(t,i,s,o,u,d,x,R,W){t.cancelPendingCommit=null;do Gc();while(Cn!==0);if((Gt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=wf,un(t,s,d,x,R,W),t===tn&&(Et=tn=null,Rt=0),Vs=i,hr=t,wa=s,Fd=d,Bd=u,dv=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pM(ee,function(){return Cv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=D.p,D.p=2,x=Gt,Gt|=4;try{iM(t,i,s)}finally{Gt=x,D.p=u,U.T=o}}Cn=1,Ev(),Tv(),Av()}}function Ev(){if(Cn===1){Cn=0;var t=hr,i=Vs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var o=D.p;D.p=2;var u=Gt;Gt|=4;try{av(i,t);var d=Jd,x=ug(t.containerInfo),R=d.focusedElem,W=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&cg(R.ownerDocument.documentElement,R)){if(W!==null&&Ef(R)){var ie=W.start,me=W.end;if(me===void 0&&(me=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(me,R.value.length);else{var be=R.ownerDocument||document,le=be&&be.defaultView||window;if(le.getSelection){var ue=le.getSelection(),qe=R.textContent.length,nt=Math.min(W.start,qe),Jt=W.end===void 0?nt:Math.min(W.end,qe);!ue.extend&&nt>Jt&&(x=Jt,Jt=nt,nt=x);var Q=lg(R,nt),j=lg(R,Jt);if(Q&&j&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==j.node||ue.focusOffset!==j.offset)){var ne=be.createRange();ne.setStart(Q.node,Q.offset),ue.removeAllRanges(),nt>Jt?(ue.addRange(ne),ue.extend(j.node,j.offset)):(ne.setEnd(j.node,j.offset),ue.addRange(ne))}}}}for(be=[],ue=R;ue=ue.parentNode;)ue.nodeType===1&&be.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var xe=be[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Jc=!!Qd,Jd=Qd=null}finally{Gt=u,D.p=o,U.T=s}}t.current=i,Cn=2}}function Tv(){if(Cn===2){Cn=0;var t=hr,i=Vs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var o=D.p;D.p=2;var u=Gt;Gt|=4;try{J0(t,i.alternate,i)}finally{Gt=u,D.p=o,U.T=s}}Cn=3}}function Av(){if(Cn===4||Cn===3){Cn=0,St();var t=hr,i=Vs,s=wa,o=dv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,Vs=hr=null,Rv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(dr=null),Uo(s),i=i.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(he,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=U.T,u=D.p,D.p=2,U.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{U.T=i,D.p=u}}(wa&3)!==0&&Gc(),na(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===zd?dl++:(dl=0,zd=t):dl=0,hl(0)}}function Rv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,qo(i)))}function Gc(){return Ev(),Tv(),Av(),Cv()}function Cv(){if(Cn!==5)return!1;var t=hr,i=Fd;Fd=0;var s=Uo(wa),o=U.T,u=D.p;try{D.p=32>s?32:s,U.T=null,s=Bd,Bd=null;var d=hr,x=wa;if(Cn=0,Vs=hr=null,wa=0,(Gt&6)!==0)throw Error(r(331));var R=Gt;if(Gt|=4,cv(d.current),sv(d,d.current,x,s),Gt=R,hl(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(he,d)}catch{}return!0}finally{D.p=u,U.T=o,Rv(t,i)}}function wv(t,i,s){i=wi(s,i),i=vd(t.stateNode,i,2),t=sr(t,i,2),t!==null&&(at(t,2),na(t))}function jt(t,i,s){if(t.tag===3)wv(t,t,s);else for(;i!==null;){if(i.tag===3){wv(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(dr===null||!dr.has(o))){t=wi(s,t),s=D0(2),o=sr(i,s,2),o!==null&&(U0(s,o,i,t),at(o,2),na(o));break}}i=i.return}}function Vd(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new sM;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Pd=!0,u.add(s),t=fM.bind(null,t,i,s),i.then(t,t))}function fM(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,tn===t&&(Rt&s)===s&&(dn===4||dn===3&&(Rt&62914560)===Rt&&300>we()-Oc?(Gt&2)===0&&ks(t,0):Od|=s,Gs===Rt&&(Gs=0)),na(t)}function Dv(t,i){i===0&&(i=Ee()),t=Gr(t,i),t!==null&&(at(t,i),na(t))}function dM(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Dv(t,s)}function hM(t,i){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),Dv(t,s)}function pM(t,i){return $(t,i)}var Vc=null,Ws=null,kd=!1,kc=!1,Xd=!1,mr=0;function na(t){t!==Ws&&t.next===null&&(Ws===null?Vc=Ws=t:Ws=Ws.next=t),kc=!0,kd||(kd=!0,gM())}function hl(t,i){if(!Xd&&kc){Xd=!0;do for(var s=!1,o=Vc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Pv(o,d))}else d=Rt,d=ve(o,o===tn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(s=!0,Pv(o,d));o=o.next}while(s);Xd=!1}}function mM(){Uv()}function Uv(){kc=kd=!1;var t=0;mr!==0&&AM()&&(t=mr);for(var i=we(),s=null,o=Vc;o!==null;){var u=o.next,d=Nv(o,i);d===0?(o.next=null,s===null?Vc=u:s.next=u,u===null&&(Ws=s)):(s=o,(t!==0||(d&3)!==0)&&(kc=!0)),o=u}Cn!==0&&Cn!==5||hl(t),mr!==0&&(mr=0)}function Nv(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ie(d),R=1<<x,W=u[x];W===-1?((R&s)===0||(R&o)!==0)&&(u[x]=Le(R,i)):W<=i&&(t.expiredLanes|=R),d&=~R}if(i=tn,s=Rt,s=ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&At(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||He(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&At(o),Uo(s)){case 2:case 8:s=E;break;case 32:s=ee;break;case 268435456:s=Ae;break;default:s=ee}return o=Lv.bind(null,t),s=$(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&At(o),t.callbackPriority=2,t.callbackNode=null,2}function Lv(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Gc()&&t.callbackNode!==s)return null;var o=Rt;return o=ve(t,t===tn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(pv(t,o,i),Nv(t,we()),t.callbackNode!=null&&t.callbackNode===s?Lv.bind(null,t):null)}function Pv(t,i){if(Gc())return null;pv(t,i,!0)}function gM(){CM(function(){(Gt&6)!==0?$(L,mM):Uv()})}function Wd(){if(mr===0){var t=Ds;t===0&&(t=ot,ot<<=1,(ot&261888)===0&&(ot=256)),mr=t}return mr}function Ov(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fr(""+t)}function Iv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function vM(t,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=Ov((u[Fn]||null).action),x=o.submitter;x&&(i=(i=x[Fn]||null)?Ov(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var R=new tc("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var W=x?Iv(u,x):new FormData(u);fd(s,{pending:!0,data:W,method:u.method,action:d},null,W)}}else typeof d=="function"&&(R.preventDefault(),W=x?Iv(u,x):new FormData(u),fd(s,{pending:!0,data:W,method:u.method,action:d},d,W))},currentTarget:u}]})}}for(var $d=0;$d<Cf.length;$d++){var qd=Cf[$d],_M=qd.toLowerCase(),xM=qd[0].toUpperCase()+qd.slice(1);Gi(_M,"on"+xM)}Gi(hg,"onAnimationEnd"),Gi(pg,"onAnimationIteration"),Gi(mg,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(Oy,"onTransitionRun"),Gi(Iy,"onTransitionStart"),Gi(Fy,"onTransitionCancel"),Gi(gg,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Fv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var x=o.length-1;0<=x;x--){var R=o[x],W=R.instance,ie=R.currentTarget;if(R=R.listener,W!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ie;try{d(u)}catch(me){ac(me)}u.currentTarget=null,d=W}else for(x=0;x<o.length;x++){if(R=o[x],W=R.instance,ie=R.currentTarget,R=R.listener,W!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ie;try{d(u)}catch(me){ac(me)}u.currentTarget=null,d=W}}}}function Tt(t,i){var s=i[qa];s===void 0&&(s=i[qa]=new Set);var o=t+"__bubble";s.has(o)||(Bv(i,t,2,!1),s.add(o))}function Yd(t,i,s){var o=0;i&&(o|=4),Bv(s,t,o,i)}var Xc="_reactListening"+Math.random().toString(36).slice(2);function jd(t){if(!t[Xc]){t[Xc]=!0,Zl.forEach(function(s){s!=="selectionchange"&&(SM.has(s)||Yd(s,!1,t),Yd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Xc]||(i[Xc]=!0,Yd("selectionchange",!1,i))}}function Bv(t,i,s,o){switch(h_(i)){case 2:var u=YM;break;case 8:u=jM;break;default:u=uh}s=u.bind(null,i,s,t),u=void 0,!mf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function Kd(t,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var W=x.tag;if((W===3||W===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=ja(R),x===null)return;if(W=x.tag,W===5||W===6||W===26||W===27){o=d=x;continue e}R=R.parentNode}}o=o.return}km(function(){var ie=d,me=hf(s),be=[];e:{var le=vg.get(t);if(le!==void 0){var ue=tc,qe=t;switch(t){case"keypress":if(Jl(s)===0)break e;case"keydown":case"keyup":ue=hy;break;case"focusin":qe="focus",ue=xf;break;case"focusout":qe="blur",ue=xf;break;case"beforeblur":case"afterblur":ue=xf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=gy;break;case hg:case pg:case mg:ue=ay;break;case gg:ue=_y;break;case"scroll":case"scrollend":ue=Jb;break;case"wheel":ue=Sy;break;case"copy":case"cut":case"paste":ue=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Ym;break;case"toggle":case"beforetoggle":ue=yy}var nt=(i&4)!==0,Jt=!nt&&(t==="scroll"||t==="scrollend"),Q=nt?le!==null?le+"Capture":null:le;nt=[];for(var j=ie,ne;j!==null;){var xe=j;if(ne=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ne===null||Q===null||(xe=Io(j,Q),xe!=null&&nt.push(ml(j,xe,ne))),Jt)break;j=j.return}0<nt.length&&(le=new ue(le,qe,null,s,me),be.push({event:le,listeners:nt}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&s!==df&&(qe=s.relatedTarget||s.fromElement)&&(ja(qe)||qe[ha]))break e;if((ue||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(qe=s.relatedTarget||s.toElement,ue=ie,qe=qe?ja(qe):null,qe!==null&&(Jt=c(qe),nt=qe.tag,qe!==Jt||nt!==5&&nt!==27&&nt!==6)&&(qe=null)):(ue=null,qe=ie),ue!==qe)){if(nt=$m,xe="onMouseLeave",Q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Ym,xe="onPointerLeave",Q="onPointerEnter",j="pointer"),Jt=ue==null?le:Ir(ue),ne=qe==null?le:Ir(qe),le=new nt(xe,j+"leave",ue,s,me),le.target=Jt,le.relatedTarget=ne,xe=null,ja(me)===ie&&(nt=new nt(Q,j+"enter",qe,s,me),nt.target=ne,nt.relatedTarget=Jt,xe=nt),Jt=xe,ue&&qe)t:{for(nt=bM,Q=ue,j=qe,ne=0,xe=Q;xe;xe=nt(xe))ne++;xe=0;for(var tt=j;tt;tt=nt(tt))xe++;for(;0<ne-xe;)Q=nt(Q),ne--;for(;0<xe-ne;)j=nt(j),xe--;for(;ne--;){if(Q===j||j!==null&&Q===j.alternate){nt=Q;break t}Q=nt(Q),j=nt(j)}nt=null}else nt=null;ue!==null&&zv(be,le,ue,nt,!1),qe!==null&&Jt!==null&&zv(be,Jt,qe,nt,!0)}}e:{if(le=ie?Ir(ie):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var It=ng;else if(eg(le))if(ig)It=Ny;else{It=Dy;var Ze=wy}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&kt(ie.elementType)&&(It=ng):It=Uy;if(It&&(It=It(t,ie))){tg(be,It,s,me);break e}Ze&&Ze(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&Mt(le,"number",le.value)}switch(Ze=ie?Ir(ie):window,t){case"focusin":(eg(Ze)||Ze.contentEditable==="true")&&(ys=Ze,Tf=ie,Xo=null);break;case"focusout":Xo=Tf=ys=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,fg(be,s,me);break;case"selectionchange":if(Py)break;case"keydown":case"keyup":fg(be,s,me)}var gt;if(bf)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else bs?Qm(t,s)&&(Ct="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ct="onCompositionStart");Ct&&(jm&&s.locale!=="ko"&&(bs||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&bs&&(gt=Xm()):(Ja=me,gf="value"in Ja?Ja.value:Ja.textContent,bs=!0)),Ze=Wc(ie,Ct),0<Ze.length&&(Ct=new qm(Ct,t,null,s,me),be.push({event:Ct,listeners:Ze}),gt?Ct.data=gt:(gt=Jm(s),gt!==null&&(Ct.data=gt)))),(gt=Ey?Ty(t,s):Ay(t,s))&&(Ct=Wc(ie,"onBeforeInput"),0<Ct.length&&(Ze=new qm("onBeforeInput","beforeinput",null,s,me),be.push({event:Ze,listeners:Ct}),Ze.data=gt)),vM(be,t,ie,s,me)}Fv(be,i)})}function ml(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Wc(t,i){for(var s=i+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Io(t,s),u!=null&&o.unshift(ml(t,u,d)),u=Io(t,i),u!=null&&o.push(ml(t,u,d))),t.tag===3)return o;t=t.return}return[]}function bM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zv(t,i,s,o,u){for(var d=i._reactName,x=[];s!==null&&s!==o;){var R=s,W=R.alternate,ie=R.stateNode;if(R=R.tag,W!==null&&W===o)break;R!==5&&R!==26&&R!==27||ie===null||(W=ie,u?(ie=Io(s,d),ie!=null&&x.unshift(ml(s,ie,W))):u||(ie=Io(s,d),ie!=null&&x.push(ml(s,ie,W)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var yM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(yM,`
`).replace(MM,"")}function Gv(t,i){return i=Hv(i),Hv(t)===i}function Qt(t,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||mi(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&mi(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,s,o);break;case"style":Hi(t,o,d);break;case"data":if(i!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Fr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Qt(t,i,"name",u.name,u,null),Qt(t,i,"formEncType",u.formEncType,u,null),Qt(t,i,"formMethod",u.formMethod,u,null),Qt(t,i,"formTarget",u.formTarget,u,null)):(Qt(t,i,"encType",u.encType,u,null),Qt(t,i,"method",u.method,u,null),Qt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Fr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=pa);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Fr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Fe(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Qi.get(s)||s,Fe(t,s,o))}}function Zd(t,i,s,o,u,d){switch(s){case"style":Hi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof o=="string"?mi(t,o):(typeof o=="number"||typeof o=="bigint")&&mi(t,""+o);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Fn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Fe(t,s,o)}}}function Gn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qt(t,i,d,x,s,null)}}u&&Qt(t,i,"srcSet",s.srcSet,s,null),o&&Qt(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var R=d=x=u=null,W=null,ie=null;for(o in s)if(s.hasOwnProperty(o)){var me=s[o];if(me!=null)switch(o){case"name":u=me;break;case"type":x=me;break;case"checked":W=me;break;case"defaultChecked":ie=me;break;case"value":d=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:Qt(t,i,o,me,s,null)}}qn(t,d,R,W,ie,x,u,!1);return;case"select":Tt("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Qt(t,i,u,R,s,null)}i=d,s=x,t.multiple=!!o,i!=null?Rn(t,!!o,i,!1):s!=null&&Rn(t,!!o,s,!0);return;case"textarea":Tt("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Qt(t,i,x,R,s,null)}zi(t,o,u,d);return;case"option":for(W in s)if(s.hasOwnProperty(W)&&(o=s[W],o!=null))switch(W){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qt(t,i,W,o,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(o=0;o<pl.length;o++)Tt(pl[o],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in s)if(s.hasOwnProperty(ie)&&(o=s[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qt(t,i,ie,o,s,null)}return;default:if(kt(i)){for(me in s)s.hasOwnProperty(me)&&(o=s[me],o!==void 0&&Zd(t,i,me,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Qt(t,i,R,o,s,null))}function EM(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,R=null,W=null,ie=null,me=null;for(ue in s){var be=s[ue];if(s.hasOwnProperty(ue)&&be!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":W=be;default:o.hasOwnProperty(ue)||Qt(t,i,ue,null,o,be)}}for(var le in o){var ue=o[le];if(be=s[le],o.hasOwnProperty(le)&&(ue!=null||be!=null))switch(le){case"type":d=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":me=ue;break;case"value":x=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,i));break;default:ue!==be&&Qt(t,i,le,ue,o,be)}}ke(t,x,R,W,ie,me,d,u);return;case"select":ue=x=R=le=null;for(d in s)if(W=s[d],s.hasOwnProperty(d)&&W!=null)switch(d){case"value":break;case"multiple":ue=W;default:o.hasOwnProperty(d)||Qt(t,i,d,null,o,W)}for(u in o)if(d=o[u],W=s[u],o.hasOwnProperty(u)&&(d!=null||W!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==W&&Qt(t,i,u,d,o,W)}i=R,s=x,o=ue,le!=null?Rn(t,!!s,le,!1):!!o!=!!s&&(i!=null?Rn(t,!!s,i,!0):Rn(t,!!s,s?[]:"",!1));return;case"textarea":ue=le=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qt(t,i,R,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Qt(t,i,x,u,o,d)}pi(t,le,ue);return;case"option":for(var qe in s)if(le=s[qe],s.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Qt(t,i,qe,null,o,le)}for(W in o)if(le=o[W],ue=s[W],o.hasOwnProperty(W)&&le!==ue&&(le!=null||ue!=null))switch(W){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Qt(t,i,W,le,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in s)le=s[nt],s.hasOwnProperty(nt)&&le!=null&&!o.hasOwnProperty(nt)&&Qt(t,i,nt,null,o,le);for(ie in o)if(le=o[ie],ue=s[ie],o.hasOwnProperty(ie)&&le!==ue&&(le!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,i));break;default:Qt(t,i,ie,le,o,ue)}return;default:if(kt(i)){for(var Jt in s)le=s[Jt],s.hasOwnProperty(Jt)&&le!==void 0&&!o.hasOwnProperty(Jt)&&Zd(t,i,Jt,void 0,o,le);for(me in o)le=o[me],ue=s[me],!o.hasOwnProperty(me)||le===ue||le===void 0&&ue===void 0||Zd(t,i,me,le,o,ue);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&Qt(t,i,Q,null,o,le);for(be in o)le=o[be],ue=s[be],!o.hasOwnProperty(be)||le===ue||le==null&&ue==null||Qt(t,i,be,le,o,ue)}function Vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,R=u.duration;if(d&&R&&Vv(x)){for(x=0,R=u.responseEnd,o+=1;o<s.length;o++){var W=s[o],ie=W.startTime;if(ie>R)break;var me=W.transferSize,be=W.initiatorType;me&&Vv(be)&&(W=W.responseEnd,x+=me*(W<R?1:(R-ie)/(W-ie)))}if(--o,i+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qd=null,Jd=null;function $c(t){return t.nodeType===9?t:t.ownerDocument}function kv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function eh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var th=null;function AM(){var t=window.event;return t&&t.type==="popstate"?t===th?!1:(th=t,!0):(th=null,!1)}var Wv=typeof setTimeout=="function"?setTimeout:void 0,RM=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(wM)}:Wv;function wM(t){setTimeout(function(){throw t})}function gr(t){return t==="head"}function qv(t,i){var s=i,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),js(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")gl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,gl(s);for(var d=s.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Ya]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&gl(t.ownerDocument.body);s=u}while(s);js(i)}function Yv(t,i){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function nh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":nh(s),Oo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function DM(t,i,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ya])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Pi(t.nextSibling),t===null)break}return null}function UM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Pi(t.nextSibling),t===null))return null;return t}function jv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Pi(t.nextSibling),t===null))return null;return t}function ih(t){return t.data==="$?"||t.data==="$~"}function ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Pi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var rh=null;function Kv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Pi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Zv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Qv(t,i,s){switch(i=$c(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Oo(t)}var Oi=new Map,Jv=new Set;function qc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Da=D.d;D.d={f:LM,r:PM,D:OM,C:IM,L:FM,m:BM,X:HM,S:zM,M:GM};function LM(){var t=Da.f(),i=Bc();return t||i}function PM(t){var i=Ka(t);i!==null&&i.tag===5&&i.type==="form"?g0(i):Da.r(t)}var $s=typeof document>"u"?null:document;function e_(t,i,s){var o=$s;if(o&&typeof i=="string"&&i){var u=$t(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Jv.has(u)||(Jv.add(u),t={rel:t,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Gn(i,"link",t),bn(i),o.head.appendChild(i)))}}function OM(t){Da.D(t),e_("dns-prefetch",t,null)}function IM(t,i){Da.C(t,i),e_("preconnect",t,i)}function FM(t,i,s){Da.L(t,i,s);var o=$s;if(o&&t&&i){var u='link[rel="preload"][as="'+$t(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+$t(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+$t(s.imageSizes)+'"]')):u+='[href="'+$t(t)+'"]';var d=u;switch(i){case"style":d=qs(t);break;case"script":d=Ys(t)}Oi.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Oi.set(d,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(vl(d))||i==="script"&&o.querySelector(_l(d))||(i=o.createElement("link"),Gn(i,"link",t),bn(i),o.head.appendChild(i)))}}function BM(t,i){Da.m(t,i);var s=$s;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+$t(o)+'"][href="'+$t(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ys(t)}if(!Oi.has(d)&&(t=v({rel:"modulepreload",href:t},i),Oi.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(d)))return}o=s.createElement("link"),Gn(o,"link",t),bn(o),s.head.appendChild(o)}}}function zM(t,i,s){Da.S(t,i,s);var o=$s;if(o&&t){var u=Za(o).hoistableStyles,d=qs(t);i=i||"default";var x=u.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(vl(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Oi.get(d))&&sh(t,s);var W=x=o.createElement("link");bn(W),Gn(W,"link",t),W._p=new Promise(function(ie,me){W.onload=ie,W.onerror=me}),W.addEventListener("load",function(){R.loading|=1}),W.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Yc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(d,x)}}}function HM(t,i){Da.X(t,i);var s=$s;if(s&&t){var o=Za(s).hoistableScripts,u=Ys(t),d=o.get(u);d||(d=s.querySelector(_l(u)),d||(t=v({src:t,async:!0},i),(i=Oi.get(u))&&oh(t,i),d=s.createElement("script"),bn(d),Gn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function GM(t,i){Da.M(t,i);var s=$s;if(s&&t){var o=Za(s).hoistableScripts,u=Ys(t),d=o.get(u);d||(d=s.querySelector(_l(u)),d||(t=v({src:t,async:!0,type:"module"},i),(i=Oi.get(u))&&oh(t,i),d=s.createElement("script"),bn(d),Gn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function t_(t,i,s,o){var u=(u=te.current)?qc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qs(s.href),s=Za(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=qs(s.href);var d=Za(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(vl(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Oi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Oi.set(t,s),d||VM(u,t,s,x.state))),i&&o===null)throw Error(r(528,""));return x}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ys(s),s=Za(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function qs(t){return'href="'+$t(t)+'"'}function vl(t){return'link[rel="stylesheet"]['+t+"]"}function n_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function VM(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Gn(i,"link",s),bn(i),t.head.appendChild(i))}function Ys(t){return'[src="'+$t(t)+'"]'}function _l(t){return"script[async]"+t}function i_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+$t(s.href)+'"]');if(o)return i.instance=o,bn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),bn(o),Gn(o,"style",u),Yc(o,s.precedence,t),i.instance=o;case"stylesheet":u=qs(s.href);var d=t.querySelector(vl(u));if(d)return i.state.loading|=4,i.instance=d,bn(d),d;o=n_(s),(u=Oi.get(u))&&sh(o,u),d=(t.ownerDocument||t).createElement("link"),bn(d);var x=d;return x._p=new Promise(function(R,W){x.onload=R,x.onerror=W}),Gn(d,"link",o),i.state.loading|=4,Yc(d,s.precedence,t),i.instance=d;case"script":return d=Ys(s.src),(u=t.querySelector(_l(d)))?(i.instance=u,bn(u),u):(o=s,(u=Oi.get(d))&&(o=v({},s),oh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),bn(u),Gn(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Yc(o,s.precedence,t));return i.instance}function Yc(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===i)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function sh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function oh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var jc=null;function a_(t,i,s){if(jc===null){var o=new Map,u=jc=new Map;u.set(s,o)}else u=jc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ya]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function r_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function kM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function s_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function XM(t,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=qs(o.href),d=i.querySelector(vl(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Kc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,bn(d);return}d=i.ownerDocument||i,o=n_(o),(u=Oi.get(u))&&sh(o,u),d=d.createElement("link"),bn(d);var x=d;x._p=new Promise(function(R,W){x.onload=R,x.onerror=W}),Gn(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Kc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var lh=0;function WM(t,i){return t.stylesheets&&t.count===0&&Qc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Qc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&lh===0&&(lh=62500*TM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>lh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Kc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zc=null;function Qc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zc=new Map,i.forEach($M,t),Zc=null,Kc.call(t))}function $M(t,i){if(!(i.state.loading&4)){var s=Zc.get(t);if(s)var o=s.get(null);else{s=new Map,Zc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=Kc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var xl={$$typeof:N,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function qM(t,i,s,o,u,d,x,R,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function o_(t,i,s,o,u,d,x,R,W,ie,me,be){return t=new qM(t,i,s,x,W,ie,me,be,R),i=1,d===!0&&(i|=24),d=vi(3,null,null,i),t.current=d,d.stateNode=t,i=Gf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Wf(d),t}function l_(t){return t?(t=Ts,t):Ts}function c_(t,i,s,o,u,d){u=l_(u),o.context===null?o.context=u:o.pendingContext=u,o=rr(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=sr(t,o,i),s!==null&&(li(s,t,i),Zo(s,t,i))}function u_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ch(t,i){u_(t,i),(t=t.alternate)&&u_(t,i)}function f_(t){if(t.tag===13||t.tag===31){var i=Gr(t,67108864);i!==null&&li(i,t,67108864),ch(t,67108864)}}function d_(t){if(t.tag===13||t.tag===31){var i=yi();i=Or(i);var s=Gr(t,i);s!==null&&li(s,t,i),ch(t,i)}}var Jc=!0;function YM(t,i,s,o){var u=U.T;U.T=null;var d=D.p;try{D.p=2,uh(t,i,s,o)}finally{D.p=d,U.T=u}}function jM(t,i,s,o){var u=U.T;U.T=null;var d=D.p;try{D.p=8,uh(t,i,s,o)}finally{D.p=d,U.T=u}}function uh(t,i,s,o){if(Jc){var u=fh(o);if(u===null)Kd(t,i,o,eu,s),p_(t,o);else if(ZM(u,t,i,s,o))o.stopPropagation();else if(p_(t,o),i&4&&-1<KM.indexOf(t)){for(;u!==null;){var d=Ka(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ce(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var W=1<<31-Ie(x);R.entanglements[1]|=W,x&=~W}na(d),(Gt&6)===0&&(Ic=we()+500,hl(0))}}break;case 31:case 13:R=Gr(d,2),R!==null&&li(R,d,2),Bc(),ch(d,2)}if(d=fh(o),d===null&&Kd(t,i,o,eu,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Kd(t,i,o,null,s)}}function fh(t){return t=hf(t),dh(t)}var eu=null;function dh(t){if(eu=null,t=ja(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return eu=t,null}function h_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sn()){case L:return 2;case E:return 8;case ee:case Se:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var hh=!1,vr=null,_r=null,xr=null,Sl=new Map,bl=new Map,Sr=[],KM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(t,i){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(i.pointerId)}}function yl(t,i,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Ka(i),i!==null&&f_(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function ZM(t,i,s,o,u){switch(i){case"focusin":return vr=yl(vr,t,i,s,o,u),!0;case"dragenter":return _r=yl(_r,t,i,s,o,u),!0;case"mouseover":return xr=yl(xr,t,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return Sl.set(d,yl(Sl.get(d)||null,t,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,bl.set(d,yl(bl.get(d)||null,t,i,s,o,u)),!0}return!1}function m_(t){var i=ja(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,Lo(t.priority,function(){d_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,Lo(t.priority,function(){d_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=fh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);df=o,s.target.dispatchEvent(o),df=null}else return i=Ka(s),i!==null&&f_(i),t.blockedOn=s,!1;i.shift()}return!0}function g_(t,i,s){tu(t)&&s.delete(i)}function QM(){hh=!1,vr!==null&&tu(vr)&&(vr=null),_r!==null&&tu(_r)&&(_r=null),xr!==null&&tu(xr)&&(xr=null),Sl.forEach(g_),bl.forEach(g_)}function nu(t,i){t.blockedOn===i&&(t.blockedOn=null,hh||(hh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,QM)))}var iu=null;function v_(t){iu!==t&&(iu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){iu===t&&(iu=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(dh(o||s)===null)continue;break}var d=Ka(s);d!==null&&(t.splice(i,3),i-=3,fd(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function js(t){function i(W){return nu(W,t)}vr!==null&&nu(vr,t),_r!==null&&nu(_r,t),xr!==null&&nu(xr,t),Sl.forEach(i),bl.forEach(i);for(var s=0;s<Sr.length;s++){var o=Sr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Sr.length&&(s=Sr[0],s.blockedOn===null);)m_(s),s.blockedOn===null&&Sr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[Fn]||null;if(typeof d=="function")x||v_(s);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Fn]||null)R=x.formAction;else if(dh(u)!==null)continue}else R=x.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),v_(s)}}}function __(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function ph(t){this._internalRoot=t}au.prototype.render=ph.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=yi();c_(s,o,t,i,null,null)},au.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;c_(t.current,2,null,t,null,null),Bc(),i[ha]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var i=No();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Sr.length&&i!==0&&i<Sr[s].priority;s++);Sr.splice(s,0,t),s===0&&m_(t)}};var x_=e.version;if(x_!=="19.2.6")throw Error(r(527,x_,"19.2.6"));D.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var JM={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{he=ru.inject(JM),pe=ru}catch{}}return El.createRoot=function(t,i){if(!l(t))throw Error(r(299));var s=!1,o="",u=A0,d=R0,x=C0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=o_(t,1,!1,null,null,s,o,null,u,d,x,__),t[ha]=i.current,jd(t),new ph(i)},El.hydrateRoot=function(t,i,s){if(!l(t))throw Error(r(299));var o=!1,u="",d=A0,x=R0,R=C0,W=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(W=s.formState)),i=o_(t,1,!0,i,s??null,o,u,W,d,x,R,__),i.context=l_(null),s=i.current,o=yi(),o=Or(o),u=rr(o),u.callback=null,sr(s,u,o),s=o,i.current.lanes=s,at(i,s),na(i),t[ha]=i.current,jd(t),new au(i)},El.version="19.2.6",El}var L_;function cE(){if(L_)return _h.exports;L_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),_h.exports=lE(),_h.exports}var uE=cE();function nf(a){var n;if(typeof window>"u"||window.navigator==null)return!1;let e=(n=window.navigator.userAgentData)==null?void 0:n.brands;return Array.isArray(e)&&e.some(r=>a.test(r.brand))||a.test(window.navigator.userAgent)}function Sm(a){var e;return typeof window<"u"&&window.navigator!=null?a.test(((e=window.navigator.userAgentData)==null?void 0:e.platform)||window.navigator.platform):!1}function Lr(a){let e=null;return()=>(e==null&&(e=a()),e)}const zl=Lr(function(){return Sm(/^Mac/i)}),fE=Lr(function(){return Sm(/^iPhone/i)}),mS=Lr(function(){return Sm(/^iPad/i)||zl()&&navigator.maxTouchPoints>1}),gS=Lr(function(){return fE()||mS()}),dE=Lr(function(){return nf(/AppleWebKit/i)&&!hE()}),hE=Lr(function(){return nf(/Chrome/i)}),vS=Lr(function(){return nf(/Android/i)}),pE=Lr(function(){return nf(/Firefox/i)});function _o(a){if(mE())a.focus({preventScroll:!0});else{let e=gE(a);a.focus(),vE(e)}}let su=null;function mE(){if(su==null){su=!1;try{document.createElement("div").focus({get preventScroll(){return su=!0,!0}})}catch{}}return su}function gE(a){let e=a.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==r;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&n.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function vE(a){for(let{element:e,scrollTop:n,scrollLeft:r}of a)e.scrollTop=n,e.scrollLeft=r}function fs(a,e,n=!0){var p,m;let{metaKey:r,ctrlKey:l,altKey:c,shiftKey:f}=e;pE()&&((m=(p=window.event)==null?void 0:p.type)!=null&&m.startsWith("key"))&&a.target==="_blank"&&(zl()?r=!0:l=!0);let h=dE()&&zl()&&!mS()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:r,ctrlKey:l,altKey:c,shiftKey:f}):new MouseEvent("click",{metaKey:r,ctrlKey:l,altKey:c,shiftKey:f,detail:1,bubbles:!0,cancelable:!0});fs.isOpening=n,_o(a),a.dispatchEvent(h),fs.isOpening=!1}fs.isOpening=!1;const vs=typeof document<"u"?pn.useLayoutEffect:()=>{},_S={prefix:String(Math.round(Math.random()*1e10)),current:0},xS=pn.createContext(_S),_E=pn.createContext(!1);let yh=new WeakMap;function xE(a=!1){var r,l;let e=_e.useContext(xS),n=_e.useRef(null);if(n.current===null&&!a){let c=(l=(r=pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:r.ReactCurrentOwner)==null?void 0:l.current;if(c){let f=yh.get(c);f==null?yh.set(c,{id:e.current,state:c.memoizedState}):c.memoizedState!==f.state&&(e.current=f.id,yh.delete(c))}n.current=++e.current}return n.current}function SE(a){let e=_e.useContext(xS),n=xE(!!a),r=`react-aria${e.prefix}`;return a||`${r}-${n}`}function bE(a){let e=pn.useId(),[n]=_e.useState(SS()),r=n?"react-aria":`react-aria${_S.prefix}`;return a||`${r}-${e}`}const yE=typeof pn.useId=="function"?bE:SE;function ME(){return!1}function EE(){return!0}function TE(a){return()=>{}}function SS(){return typeof pn.useSyncExternalStore=="function"?pn.useSyncExternalStore(TE,ME,EE):_e.useContext(_E)}let AE=!!(typeof window<"u"&&window.document&&window.document.createElement),ho=new Map,Ll;typeof FinalizationRegistry<"u"&&(Ll=new FinalizationRegistry(a=>{ho.delete(a)}));function Hl(a){let[e,n]=_e.useState(a),r=_e.useRef(null),l=yE(e),c=_e.useRef(null);if(Ll&&Ll.register(c,l),AE){const f=ho.get(l);f&&!f.includes(r)?f.push(r):ho.set(l,[r])}return vs(()=>{let f=l;return()=>{Ll&&Ll.unregister(c),ho.delete(f)}},[l]),_e.useEffect(()=>{let f=r.current;return f&&n(f),()=>{f&&(r.current=null)}}),l}function RE(a,e){if(a===e)return a;let n=ho.get(a);if(n)return n.forEach(l=>l.current=e),e;let r=ho.get(e);return r?(r.forEach(l=>l.current=a),a):e}function bS(...a){return(...e)=>{for(let n of a)typeof n=="function"&&n(...e)}}const Xn=a=>(a==null?void 0:a.ownerDocument)??document,Ga=a=>a&&"window"in a&&a.window===a?a:Xn(a).defaultView||window;function CE(a){return a!==null&&typeof a=="object"&&"nodeType"in a&&typeof a.nodeType=="number"}function wE(a){return CE(a)&&a.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in a}let DE=!1;function bm(){return DE}function kn(a,e){if(!bm())return e&&a?a.contains(e):!1;if(!a||!e)return!1;let n=e;for(;n!==null;){if(n===a)return!0;n.tagName==="SLOT"&&n.assignedSlot?n=n.assignedSlot.parentNode:wE(n)?n=n.host:n=n.parentNode}return!1}const Nr=(a=document)=>{var n;if(!bm())return a.activeElement;let e=a.activeElement;for(;e&&"shadowRoot"in e&&((n=e.shadowRoot)!=null&&n.activeElement);)e=e.shadowRoot.activeElement;return e};function Lt(a){if(bm()&&a.target instanceof Element&&a.target.shadowRoot){if("composedPath"in a)return a.composedPath()[0]??null;if("composedPath"in a.nativeEvent)return a.nativeEvent.composedPath()[0]??null}return a.target}function af(...a){return a.length===1&&a[0]?a[0]:e=>{let n=!1;const r=a.map(l=>{const c=P_(l,e);return n||(n=typeof c=="function"),c});if(n)return()=>{r.forEach((l,c)=>{typeof l=="function"?l():P_(a[c],null)})}}}function P_(a,e){if(typeof a=="function")return a(e);a!=null&&(a.current=e)}function yS(a){var e,n,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(e=0;e<l;e++)a[e]&&(n=yS(a[e]))&&(r&&(r+=" "),r+=n)}else for(n in a)a[n]&&(r&&(r+=" "),r+=n);return r}function UE(){for(var a,e,n=0,r="",l=arguments.length;n<l;n++)(a=arguments[n])&&(e=yS(a))&&(r&&(r+=" "),r+=e);return r}function ua(...a){let e={...a[0]};for(let n=1;n<a.length;n++){let r=a[n];for(let l in r){let c=e[l],f=r[l];typeof c=="function"&&typeof f=="function"&&l[0]==="o"&&l[1]==="n"&&l.charCodeAt(2)>=65&&l.charCodeAt(2)<=90?e[l]=bS(c,f):(l==="className"||l==="UNSAFE_className")&&typeof c=="string"&&typeof f=="string"?e[l]=UE(c,f):l==="id"&&c&&f?e.id=RE(c,f):l==="ref"&&c&&f?e.ref=af(c,f):e[l]=f!==void 0?f:c}}return e}const NE=new Set(["id"]),LE=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),PE=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),OE=new Set(["dir","lang","hidden","inert","translate"]),O_=new Set(["onClick","onAuxClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onGotPointerCapture","onLostPointerCapture","onScroll","onWheel","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionCancel","onTransitionEnd","onTransitionRun","onTransitionStart"]),IE=/^(data-.*)$/;function rf(a,e={}){let{labelable:n,isLink:r,global:l,events:c=l,propNames:f}=e,h={};for(const p in a)Object.prototype.hasOwnProperty.call(a,p)&&(NE.has(p)||n&&LE.has(p)||r&&PE.has(p)||l&&OE.has(p)||c&&(O_.has(p)||p.endsWith("Capture")&&O_.has(p.slice(0,-7)))||f!=null&&f.has(p)||IE.test(p))&&(h[p]=a[p]);return h}let wr=new Map,dp=new Set;function I_(){if(typeof window>"u")return;function a(r){return"propertyName"in r}let e=r=>{let l=Lt(r);if(!a(r)||!l)return;let c=wr.get(l);c||(c=new Set,wr.set(l,c),l.addEventListener("transitioncancel",n,{once:!0})),c.add(r.propertyName)},n=r=>{let l=Lt(r);if(!a(r)||!l)return;let c=wr.get(l);if(c&&(c.delete(r.propertyName),c.size===0&&(l.removeEventListener("transitioncancel",n),wr.delete(l)),wr.size===0)){for(let f of dp)f();dp.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",n)}typeof document<"u"&&(document.readyState!=="loading"?I_():document.addEventListener("DOMContentLoaded",I_));function FE(){for(const[a]of wr)"isConnected"in a&&!a.isConnected&&wr.delete(a)}function MS(a){requestAnimationFrame(()=>{FE(),wr.size===0?a():dp.add(a)})}function ym(){let a=_e.useRef(new Map),e=_e.useCallback((l,c,f,h)=>{let p=h!=null&&h.once?(...m)=>{a.current.delete(f),f(...m)}:f;a.current.set(f,{type:c,eventTarget:l,fn:p,options:h}),l.addEventListener(c,p,h)},[]),n=_e.useCallback((l,c,f,h)=>{var m;let p=((m=a.current.get(f))==null?void 0:m.fn)||f;l.removeEventListener(c,p,h),a.current.delete(f)},[]),r=_e.useCallback(()=>{a.current.forEach((l,c)=>{n(l.eventTarget,l.type,c,l.options)})},[n]);return _e.useEffect(()=>r,[r]),{addGlobalListener:e,removeGlobalListener:n,removeAllGlobalListeners:r}}function BE(a,e){let{id:n,"aria-label":r,"aria-labelledby":l}=a;return n=Hl(n),l&&r?l=[...new Set([n,...l.trim().split(/\s+/)])].join(" "):l&&(l=l.trim().split(/\s+/).join(" ")),!r&&!l&&e&&(r=e),{id:n,"aria-label":r,"aria-labelledby":l}}function zE(a){const e=_e.useRef(null),n=_e.useRef(void 0),r=_e.useCallback(l=>{if(typeof a=="function"){const c=a,f=c(l);return()=>{typeof f=="function"?f():c(null)}}else if(a)return a.current=l,()=>{a.current=null}},[a]);return _e.useMemo(()=>({get current(){return e.current},set current(l){e.current=l,n.current&&(n.current(),n.current=void 0),l!=null&&(n.current=r(l))}}),[r])}const HE=pn.useInsertionEffect??vs;function Mh(a){const e=_e.useRef(null);return HE(()=>{e.current=a},[a]),_e.useCallback((...n)=>{const r=e.current;return r==null?void 0:r(...n)},[])}function ES(a,e){vs(()=>{if(a&&a.ref&&e)return a.ref.current=e.current,()=>{a.ref&&(a.ref.current=null)}})}function TS(a){return a.pointerType===""&&a.isTrusted?!0:vS()&&a.pointerType?a.type==="click"&&a.buttons===1:a.detail===0&&!a.pointerType}function GE(a){return!vS()&&a.width===0&&a.height===0||a.width===1&&a.height===1&&a.pressure===0&&a.detail===0&&a.pointerType==="mouse"}pS();const VE=typeof Element<"u"&&"checkVisibility"in Element.prototype;function kE(a){const e=Ga(a);if(!(a instanceof e.HTMLElement)&&!(a instanceof e.SVGElement))return!1;let{display:n,visibility:r}=a.style,l=n!=="none"&&r!=="hidden"&&r!=="collapse";if(l){const{getComputedStyle:c}=a.ownerDocument.defaultView;let{display:f,visibility:h}=c(a);l=f!=="none"&&h!=="hidden"&&h!=="collapse"}return l}function XE(a,e){return!a.hasAttribute("hidden")&&!a.hasAttribute("data-react-aria-prevent-focus")&&(a.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?a.hasAttribute("open"):!0)}function AS(a,e){return VE?a.checkVisibility({visibilityProperty:!0})&&!a.closest("[data-react-aria-prevent-focus]"):a.nodeName!=="#comment"&&kE(a)&&XE(a,e)&&(!a.parentElement||AS(a.parentElement,a))}const RS=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])',"permission"],WE=RS.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";RS.push('[tabindex]:not([tabindex="-1"]):not([disabled])');function $E(a,e){return a.matches(WE)&&!qE(a)&&((e==null?void 0:e.skipVisibilityCheck)||AS(a))}function qE(a){let e=a;for(;e!=null;){if(e instanceof e.ownerDocument.defaultView.HTMLElement&&e.inert)return!0;e=e.parentElement}return!1}function F_(a){let e=a==null?void 0:a.defaultView;return(e==null?void 0:e.__webpack_nonce__)||globalThis.__webpack_nonce__||void 0}let Eh=new WeakMap;function YE(a){let e=a??(typeof document<"u"?document:void 0);if(!e)return F_(e);if(Eh.has(e))return Eh.get(e);let n=e.querySelector('meta[property="csp-nonce"]'),r=n&&n instanceof Ga(n).HTMLMetaElement&&(n.nonce||n.content)||F_(e)||void 0;return r!==void 0&&Eh.set(e,r),r}function CS(a,e=-1/0,n=1/0){return Math.min(Math.max(a,e),n)}function jE(a,e,n){const{render:r,...l}=e,c=_e.useRef(null),f=_e.useMemo(()=>af(n,c),[n,c]);vs(()=>{},[a,r]);const h={...l,ref:f};return r?r(h,void 0):Re.jsx(a,{...h})}const B_={},Qn=new Proxy({},{get(a,e){if(typeof e!="string")return;let n=B_[e];return n||(n=_e.forwardRef(jE.bind(null,e)),B_[e]=n),n}});var KE=/\s+/g,ZE=a=>typeof a!="string"||!a?a:a.replace(KE," ").trim(),Gl=(...a)=>{const e=[],n=r=>{if(!r&&r!==0&&r!==0n)return;if(Array.isArray(r)){for(let c=0,f=r.length;c<f;c++)n(r[c]);return}const l=typeof r;if(l==="string"||l==="number"||l==="bigint"){if(l==="number"&&r!==r)return;e.push(String(r))}else if(l==="object"){const c=Object.keys(r);for(let f=0,h=c.length;f<h;f++){const p=c[f];r[p]&&e.push(p)}}};for(let r=0,l=a.length;r<l;r++){const c=a[r];c!=null&&n(c)}return e.length>0?ZE(e.join(" ")):void 0},z_=a=>a===!1?"false":a===!0?"true":a===0?"0":a,ui=a=>{if(!a||typeof a!="object")return!0;for(const e in a)return!1;return!0},QE=(a,e)=>{if(a===e)return!0;if(!a||!e)return!1;const n=Object.keys(a),r=Object.keys(e);if(n.length!==r.length)return!1;for(let l=0;l<n.length;l++){const c=n[l];if(!r.includes(c)||a[c]!==e[c])return!1}return!0},JE=(a,e)=>{for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const r=e[n];n in a?a[n]=Gl(a[n],r):a[n]=r}return a},wS=(a,e)=>{for(let n=0;n<a.length;n++){const r=a[n];Array.isArray(r)?wS(r,e):r&&e.push(r)}},DS=(...a)=>{const e=[];wS(a,e);const n=[];for(let r=0;r<e.length;r++)e[r]&&n.push(e[r]);return n},hp=(a,e)=>{const n={};for(const r in a){const l=a[r];if(r in e){const c=e[r];Array.isArray(l)||Array.isArray(c)?n[r]=DS(c,l):typeof l=="object"&&typeof c=="object"&&l&&c?n[r]=hp(l,c):n[r]=c+" "+l}else n[r]=l}for(const r in e)r in a||(n[r]=e[r]);return n},eT={twMerge:!0,twMergeConfig:{}};function tT(){let a=null,e={},n=!1;return{get cachedTwMerge(){return a},set cachedTwMerge(r){a=r},get cachedTwMergeConfig(){return e},set cachedTwMergeConfig(r){e=r},get didTwMergeConfigChange(){return n},set didTwMergeConfigChange(r){n=r},reset(){a=null,e={},n=!1}}}var Fa=tT(),nT=a=>{const e=(r,l)=>{const{extend:c=null,slots:f={},variants:h={},compoundVariants:p=[],compoundSlots:m=[],defaultVariants:_={}}=r,v={...eT,...l},g=c!=null&&c.base?Gl(c.base,r==null?void 0:r.base):r==null?void 0:r.base,y=c!=null&&c.variants&&!ui(c.variants)?hp(h,c.variants):h,T=c!=null&&c.defaultVariants&&!ui(c.defaultVariants)?{...c.defaultVariants,..._}:_;!ui(v.twMergeConfig)&&!QE(v.twMergeConfig,Fa.cachedTwMergeConfig)&&(Fa.didTwMergeConfigChange=!0,Fa.cachedTwMergeConfig=v.twMergeConfig);const w=ui(c==null?void 0:c.slots),b=ui(f)?{}:{base:Gl(r==null?void 0:r.base,w&&(c==null?void 0:c.base)),...f},S=w?b:JE({...c==null?void 0:c.slots},ui(b)?{base:r==null?void 0:r.base}:b),C=ui(c==null?void 0:c.compoundVariants)?p:DS(c==null?void 0:c.compoundVariants,p),N=X=>{if(ui(y)&&ui(f)&&w)return a(g,X==null?void 0:X.class,X==null?void 0:X.className)(v);if(C&&!Array.isArray(C))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);if(m&&!Array.isArray(m))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof m}`);const z=(H,B=y,U=null,D=null)=>{const I=B[H];if(!I||ui(I))return null;const V=(D==null?void 0:D[H])??(X==null?void 0:X[H]);if(V===null)return null;const se=z_(V);if(typeof se=="object")return null;const O=T==null?void 0:T[H],Y=se??z_(O);return I[Y||"false"]},G=()=>{if(!y)return null;const H=Object.keys(y),B=[];for(let U=0;U<H.length;U++){const D=z(H[U],y);D&&B.push(D)}return B},M=(H,B)=>{if(!y||typeof y!="object")return null;const U=[];for(const D in y){const I=z(D,y,H,B),V=H==="base"&&typeof I=="string"?I:I&&I[H];V&&U.push(V)}return U},F={};for(const H in X){const B=X[H];B!==void 0&&(F[H]=B)}const Z=(H,B)=>{var D;const U=typeof(X==null?void 0:X[H])=="object"?{[H]:(D=X[H])==null?void 0:D.initial}:{};return{...T,...F,...U,...B}},k=(H=[],B)=>{const U=[],D=H.length;for(let I=0;I<D;I++){const{class:V,className:se,...O}=H[I];let Y=!0;const de=Z(null,B);for(const ye in O){const Te=O[ye],te=de[ye];if(Array.isArray(Te)){if(!Te.includes(te)){Y=!1;break}}else{if((Te==null||Te===!1)&&(te==null||te===!1))continue;if(te!==Te){Y=!1;break}}}Y&&(V&&U.push(V),se&&U.push(se))}return U},J=H=>{const B=k(C,H);if(!Array.isArray(B))return B;const U={},D=a;for(let I=0;I<B.length;I++){const V=B[I];if(typeof V=="string")U.base=D(U.base,V)(v);else if(typeof V=="object")for(const se in V)U[se]=D(U[se],V[se])(v)}return U},fe=H=>{if(m.length<1)return null;const B={},U=Z(null,H);for(let D=0;D<m.length;D++){const{slots:I=[],class:V,className:se,...O}=m[D];if(!ui(O)){let Y=!0;for(const de in O){const ye=U[de],Te=O[de];if(ye===void 0||(Array.isArray(Te)?!Te.includes(ye):Te!==ye)){Y=!1;break}}if(!Y)continue}for(let Y=0;Y<I.length;Y++){const de=I[Y];B[de]||(B[de]=[]),B[de].push([V,se])}}return B};if(!ui(f)||!w){const H={};if(typeof S=="object"&&!ui(S)){const B=a;for(const U in S)H[U]=D=>{const I=J(D),V=fe(D);return B(S[U],M(U,D),I?I[U]:void 0,V?V[U]:void 0,D==null?void 0:D.class,D==null?void 0:D.className)(v)}}return H}return a(g,G(),k(C),X==null?void 0:X.class,X==null?void 0:X.className)(v)},P=()=>{if(!(!y||typeof y!="object"))return Object.keys(y)};return N.variantKeys=P(),N.extend=c,N.base=g,N.slots=S,N.variants=y,N.defaultVariants=T,N.compoundSlots=m,N.compoundVariants=C,N};return{tv:e,createTV:r=>(l,c)=>e(l,c?hp(r,c):r)}};const iT=(a,e)=>{const n=new Array(a.length+e.length);for(let r=0;r<a.length;r++)n[r]=a[r];for(let r=0;r<e.length;r++)n[a.length+r]=e[r];return n},aT=(a,e)=>({classGroupId:a,validator:e}),US=(a=new Map,e=null,n)=>({nextPart:a,validators:e,classGroupId:n}),Wu="-",H_=[],rT="arbitrary..",sT=a=>{const e=lT(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=a;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return oT(f);const h=f.split(Wu),p=h[0]===""&&h.length>1?1:0;return NS(h,p,e)},getConflictingClassGroupIds:(f,h)=>{if(h){const p=r[f],m=n[f];return p?m?iT(m,p):p:m||H_}return n[f]||H_}}},NS=(a,e,n)=>{if(a.length-e===0)return n.classGroupId;const l=a[e],c=n.nextPart.get(l);if(c){const m=NS(a,e+1,c);if(m)return m}const f=n.validators;if(f===null)return;const h=e===0?a.join(Wu):a.slice(e).join(Wu),p=f.length;for(let m=0;m<p;m++){const _=f[m];if(_.validator(h))return _.classGroupId}},oT=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=a.slice(1,-1),n=e.indexOf(":"),r=e.slice(0,n);return r?rT+r:void 0})(),lT=a=>{const{theme:e,classGroups:n}=a;return cT(n,e)},cT=(a,e)=>{const n=US();for(const r in a){const l=a[r];Mm(l,n,r,e)}return n},Mm=(a,e,n,r)=>{const l=a.length;for(let c=0;c<l;c++){const f=a[c];uT(f,e,n,r)}},uT=(a,e,n,r)=>{if(typeof a=="string"){fT(a,e,n);return}if(typeof a=="function"){dT(a,e,n,r);return}hT(a,e,n,r)},fT=(a,e,n)=>{const r=a===""?e:LS(e,a);r.classGroupId=n},dT=(a,e,n,r)=>{if(pT(a)){Mm(a(r),e,n,r);return}e.validators===null&&(e.validators=[]),e.validators.push(aT(n,a))},hT=(a,e,n,r)=>{const l=Object.entries(a),c=l.length;for(let f=0;f<c;f++){const[h,p]=l[f];Mm(p,LS(e,h),n,r)}},LS=(a,e)=>{let n=a;const r=e.split(Wu),l=r.length;for(let c=0;c<l;c++){const f=r[c];let h=n.nextPart.get(f);h||(h=US(),n.nextPart.set(f,h)),n=h}return n},pT=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,mT=a=>{if(a<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),r=Object.create(null);const l=(c,f)=>{n[c]=f,e++,e>a&&(e=0,r=n,n=Object.create(null))};return{get(c){let f=n[c];if(f!==void 0)return f;if((f=r[c])!==void 0)return l(c,f),f},set(c,f){c in n?n[c]=f:l(c,f)}}},pp="!",G_=":",gT=[],V_=(a,e,n,r,l)=>({modifiers:a,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:r,isExternal:l}),vT=a=>{const{prefix:e,experimentalParseClassName:n}=a;let r=l=>{const c=[];let f=0,h=0,p=0,m;const _=l.length;for(let w=0;w<_;w++){const b=l[w];if(f===0&&h===0){if(b===G_){c.push(l.slice(p,w)),p=w+1;continue}if(b==="/"){m=w;continue}}b==="["?f++:b==="]"?f--:b==="("?h++:b===")"&&h--}const v=c.length===0?l:l.slice(p);let g=v,y=!1;v.endsWith(pp)?(g=v.slice(0,-1),y=!0):v.startsWith(pp)&&(g=v.slice(1),y=!0);const T=m&&m>p?m-p:void 0;return V_(c,y,g,T)};if(e){const l=e+G_,c=r;r=f=>f.startsWith(l)?c(f.slice(l.length)):V_(gT,!1,f,void 0,!0)}if(n){const l=r;r=c=>n({className:c,parseClassName:l})}return r},_T=a=>{const e=new Map;return a.orderSensitiveModifiers.forEach((n,r)=>{e.set(n,1e6+r)}),n=>{const r=[];let l=[];for(let c=0;c<n.length;c++){const f=n[c],h=f[0]==="[",p=e.has(f);h||p?(l.length>0&&(l.sort(),r.push(...l),l=[]),r.push(f)):l.push(f)}return l.length>0&&(l.sort(),r.push(...l)),r}},xT=a=>({cache:mT(a.cacheSize),parseClassName:vT(a),sortModifiers:_T(a),...sT(a)}),ST=/\s+/,bT=(a,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=e,f=[],h=a.trim().split(ST);let p="";for(let m=h.length-1;m>=0;m-=1){const _=h[m],{isExternal:v,modifiers:g,hasImportantModifier:y,baseClassName:T,maybePostfixModifierPosition:w}=n(_);if(v){p=_+(p.length>0?" "+p:p);continue}let b=!!w,S=r(b?T.substring(0,w):T);if(!S){if(!b){p=_+(p.length>0?" "+p:p);continue}if(S=r(T),!S){p=_+(p.length>0?" "+p:p);continue}b=!1}const C=g.length===0?"":g.length===1?g[0]:c(g).join(":"),N=y?C+pp:C,P=N+S;if(f.indexOf(P)>-1)continue;f.push(P);const X=l(S,b);for(let z=0;z<X.length;++z){const G=X[z];f.push(N+G)}p=_+(p.length>0?" "+p:p)}return p},yT=(...a)=>{let e=0,n,r,l="";for(;e<a.length;)(n=a[e++])&&(r=PS(n))&&(l&&(l+=" "),l+=r);return l},PS=a=>{if(typeof a=="string")return a;let e,n="";for(let r=0;r<a.length;r++)a[r]&&(e=PS(a[r]))&&(n&&(n+=" "),n+=e);return n},mp=(a,...e)=>{let n,r,l,c;const f=p=>{const m=e.reduce((_,v)=>v(_),a());return n=xT(m),r=n.cache.get,l=n.cache.set,c=h,h(p)},h=p=>{const m=r(p);if(m)return m;const _=bT(p,n);return l(p,_),_};return c=f,(...p)=>c(yT(...p))},MT=[],wn=a=>{const e=n=>n[a]||MT;return e.isThemeGetter=!0,e},OS=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,IS=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ET=/^\d+\/\d+$/,TT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,AT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,RT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,CT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ks=a=>ET.test(a),xt=a=>!!a&&!Number.isNaN(Number(a)),yr=a=>!!a&&Number.isInteger(Number(a)),Th=a=>a.endsWith("%")&&xt(a.slice(0,-1)),Ua=a=>TT.test(a),DT=()=>!0,UT=a=>AT.test(a)&&!RT.test(a),FS=()=>!1,NT=a=>CT.test(a),LT=a=>wT.test(a),PT=a=>!Ye(a)&&!je(a),OT=a=>Eo(a,HS,FS),Ye=a=>OS.test(a),es=a=>Eo(a,GS,UT),Ah=a=>Eo(a,HT,xt),k_=a=>Eo(a,BS,FS),IT=a=>Eo(a,zS,LT),ou=a=>Eo(a,VS,NT),je=a=>IS.test(a),Tl=a=>To(a,GS),FT=a=>To(a,GT),X_=a=>To(a,BS),BT=a=>To(a,HS),zT=a=>To(a,zS),lu=a=>To(a,VS,!0),Eo=(a,e,n)=>{const r=OS.exec(a);return r?r[1]?e(r[1]):n(r[2]):!1},To=(a,e,n=!1)=>{const r=IS.exec(a);return r?r[1]?e(r[1]):n:!1},BS=a=>a==="position"||a==="percentage",zS=a=>a==="image"||a==="url",HS=a=>a==="length"||a==="size"||a==="bg-size",GS=a=>a==="length",HT=a=>a==="number",GT=a=>a==="family-name",VS=a=>a==="shadow",gp=()=>{const a=wn("color"),e=wn("font"),n=wn("text"),r=wn("font-weight"),l=wn("tracking"),c=wn("leading"),f=wn("breakpoint"),h=wn("container"),p=wn("spacing"),m=wn("radius"),_=wn("shadow"),v=wn("inset-shadow"),g=wn("text-shadow"),y=wn("drop-shadow"),T=wn("blur"),w=wn("perspective"),b=wn("aspect"),S=wn("ease"),C=wn("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],X=()=>[...P(),je,Ye],z=()=>["auto","hidden","clip","visible","scroll"],G=()=>["auto","contain","none"],M=()=>[je,Ye,p],F=()=>[Ks,"full","auto",...M()],Z=()=>[yr,"none","subgrid",je,Ye],k=()=>["auto",{span:["full",yr,je,Ye]},yr,je,Ye],J=()=>[yr,"auto",je,Ye],fe=()=>["auto","min","max","fr",je,Ye],H=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],B=()=>["start","end","center","stretch","center-safe","end-safe"],U=()=>["auto",...M()],D=()=>[Ks,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...M()],I=()=>[a,je,Ye],V=()=>[...P(),X_,k_,{position:[je,Ye]}],se=()=>["no-repeat",{repeat:["","x","y","space","round"]}],O=()=>["auto","cover","contain",BT,OT,{size:[je,Ye]}],Y=()=>[Th,Tl,es],de=()=>["","none","full",m,je,Ye],ye=()=>["",xt,Tl,es],Te=()=>["solid","dashed","dotted","double"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>[xt,Th,X_,k_],Me=()=>["","none",T,je,Ye],Be=()=>["none",xt,je,Ye],Je=()=>["none",xt,je,Ye],Ve=()=>[xt,je,Ye],mt=()=>[Ks,"full",...M()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ua],breakpoint:[Ua],color:[DT],container:[Ua],"drop-shadow":[Ua],ease:["in","out","in-out"],font:[PT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ua],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ua],shadow:[Ua],spacing:["px",xt],text:[Ua],"text-shadow":[Ua],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ks,Ye,je,b]}],container:["container"],columns:[{columns:[xt,Ye,je,h]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:X()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:G()}],"overscroll-x":[{"overscroll-x":G()}],"overscroll-y":[{"overscroll-y":G()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:F()}],"inset-x":[{"inset-x":F()}],"inset-y":[{"inset-y":F()}],start:[{start:F()}],end:[{end:F()}],top:[{top:F()}],right:[{right:F()}],bottom:[{bottom:F()}],left:[{left:F()}],visibility:["visible","invisible","collapse"],z:[{z:[yr,"auto",je,Ye]}],basis:[{basis:[Ks,"full","auto",h,...M()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[xt,Ks,"auto","initial","none",Ye]}],grow:[{grow:["",xt,je,Ye]}],shrink:[{shrink:["",xt,je,Ye]}],order:[{order:[yr,"first","last","none",je,Ye]}],"grid-cols":[{"grid-cols":Z()}],"col-start-end":[{col:k()}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":Z()}],"row-start-end":[{row:k()}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":fe()}],"auto-rows":[{"auto-rows":fe()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...H(),"normal"]}],"justify-items":[{"justify-items":[...B(),"normal"]}],"justify-self":[{"justify-self":["auto",...B()]}],"align-content":[{content:["normal",...H()]}],"align-items":[{items:[...B(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...B(),{baseline:["","last"]}]}],"place-content":[{"place-content":H()}],"place-items":[{"place-items":[...B(),"baseline"]}],"place-self":[{"place-self":["auto",...B()]}],p:[{p:M()}],px:[{px:M()}],py:[{py:M()}],ps:[{ps:M()}],pe:[{pe:M()}],pt:[{pt:M()}],pr:[{pr:M()}],pb:[{pb:M()}],pl:[{pl:M()}],m:[{m:U()}],mx:[{mx:U()}],my:[{my:U()}],ms:[{ms:U()}],me:[{me:U()}],mt:[{mt:U()}],mr:[{mr:U()}],mb:[{mb:U()}],ml:[{ml:U()}],"space-x":[{"space-x":M()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":M()}],"space-y-reverse":["space-y-reverse"],size:[{size:D()}],w:[{w:[h,"screen",...D()]}],"min-w":[{"min-w":[h,"screen","none",...D()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...D()]}],h:[{h:["screen","lh",...D()]}],"min-h":[{"min-h":["screen","lh","none",...D()]}],"max-h":[{"max-h":["screen","lh",...D()]}],"font-size":[{text:["base",n,Tl,es]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,je,Ah]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Th,Ye]}],"font-family":[{font:[FT,Ye,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,je,Ye]}],"line-clamp":[{"line-clamp":[xt,"none",je,Ah]}],leading:[{leading:[c,...M()]}],"list-image":[{"list-image":["none",je,Ye]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",je,Ye]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Te(),"wavy"]}],"text-decoration-thickness":[{decoration:[xt,"from-font","auto",je,es]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[xt,"auto",je,Ye]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je,Ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je,Ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:V()}],"bg-repeat":[{bg:se()}],"bg-size":[{bg:O()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},yr,je,Ye],radial:["",je,Ye],conic:[yr,je,Ye]},zT,IT]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:Y()}],"gradient-via-pos":[{via:Y()}],"gradient-to-pos":[{to:Y()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:de()}],"rounded-s":[{"rounded-s":de()}],"rounded-e":[{"rounded-e":de()}],"rounded-t":[{"rounded-t":de()}],"rounded-r":[{"rounded-r":de()}],"rounded-b":[{"rounded-b":de()}],"rounded-l":[{"rounded-l":de()}],"rounded-ss":[{"rounded-ss":de()}],"rounded-se":[{"rounded-se":de()}],"rounded-ee":[{"rounded-ee":de()}],"rounded-es":[{"rounded-es":de()}],"rounded-tl":[{"rounded-tl":de()}],"rounded-tr":[{"rounded-tr":de()}],"rounded-br":[{"rounded-br":de()}],"rounded-bl":[{"rounded-bl":de()}],"border-w":[{border:ye()}],"border-w-x":[{"border-x":ye()}],"border-w-y":[{"border-y":ye()}],"border-w-s":[{"border-s":ye()}],"border-w-e":[{"border-e":ye()}],"border-w-t":[{"border-t":ye()}],"border-w-r":[{"border-r":ye()}],"border-w-b":[{"border-b":ye()}],"border-w-l":[{"border-l":ye()}],"divide-x":[{"divide-x":ye()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ye()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Te(),"hidden","none"]}],"divide-style":[{divide:[...Te(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...Te(),"none","hidden"]}],"outline-offset":[{"outline-offset":[xt,je,Ye]}],"outline-w":[{outline:["",xt,Tl,es]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",_,lu,ou]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",v,lu,ou]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:ye()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[xt,es]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":ye()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",g,lu,ou]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[xt,je,Ye]}],"mix-blend":[{"mix-blend":[...te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[xt]}],"mask-image-linear-from-pos":[{"mask-linear-from":ge()}],"mask-image-linear-to-pos":[{"mask-linear-to":ge()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":ge()}],"mask-image-t-to-pos":[{"mask-t-to":ge()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":ge()}],"mask-image-r-to-pos":[{"mask-r-to":ge()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":ge()}],"mask-image-b-to-pos":[{"mask-b-to":ge()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":ge()}],"mask-image-l-to-pos":[{"mask-l-to":ge()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":ge()}],"mask-image-x-to-pos":[{"mask-x-to":ge()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":ge()}],"mask-image-y-to-pos":[{"mask-y-to":ge()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[je,Ye]}],"mask-image-radial-from-pos":[{"mask-radial-from":ge()}],"mask-image-radial-to-pos":[{"mask-radial-to":ge()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":P()}],"mask-image-conic-pos":[{"mask-conic":[xt]}],"mask-image-conic-from-pos":[{"mask-conic-from":ge()}],"mask-image-conic-to-pos":[{"mask-conic-to":ge()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:V()}],"mask-repeat":[{mask:se()}],"mask-size":[{mask:O()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",je,Ye]}],filter:[{filter:["","none",je,Ye]}],blur:[{blur:Me()}],brightness:[{brightness:[xt,je,Ye]}],contrast:[{contrast:[xt,je,Ye]}],"drop-shadow":[{"drop-shadow":["","none",y,lu,ou]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",xt,je,Ye]}],"hue-rotate":[{"hue-rotate":[xt,je,Ye]}],invert:[{invert:["",xt,je,Ye]}],saturate:[{saturate:[xt,je,Ye]}],sepia:[{sepia:["",xt,je,Ye]}],"backdrop-filter":[{"backdrop-filter":["","none",je,Ye]}],"backdrop-blur":[{"backdrop-blur":Me()}],"backdrop-brightness":[{"backdrop-brightness":[xt,je,Ye]}],"backdrop-contrast":[{"backdrop-contrast":[xt,je,Ye]}],"backdrop-grayscale":[{"backdrop-grayscale":["",xt,je,Ye]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[xt,je,Ye]}],"backdrop-invert":[{"backdrop-invert":["",xt,je,Ye]}],"backdrop-opacity":[{"backdrop-opacity":[xt,je,Ye]}],"backdrop-saturate":[{"backdrop-saturate":[xt,je,Ye]}],"backdrop-sepia":[{"backdrop-sepia":["",xt,je,Ye]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":M()}],"border-spacing-x":[{"border-spacing-x":M()}],"border-spacing-y":[{"border-spacing-y":M()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",je,Ye]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[xt,"initial",je,Ye]}],ease:[{ease:["linear","initial",S,je,Ye]}],delay:[{delay:[xt,je,Ye]}],animate:[{animate:["none",C,je,Ye]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,je,Ye]}],"perspective-origin":[{"perspective-origin":X()}],rotate:[{rotate:Be()}],"rotate-x":[{"rotate-x":Be()}],"rotate-y":[{"rotate-y":Be()}],"rotate-z":[{"rotate-z":Be()}],scale:[{scale:Je()}],"scale-x":[{"scale-x":Je()}],"scale-y":[{"scale-y":Je()}],"scale-z":[{"scale-z":Je()}],"scale-3d":["scale-3d"],skew:[{skew:Ve()}],"skew-x":[{"skew-x":Ve()}],"skew-y":[{"skew-y":Ve()}],transform:[{transform:[je,Ye,"","none","gpu","cpu"]}],"transform-origin":[{origin:X()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:mt()}],"translate-x":[{"translate-x":mt()}],"translate-y":[{"translate-y":mt()}],"translate-z":[{"translate-z":mt()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je,Ye]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je,Ye]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[xt,Tl,es,Ah]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},VT=(a,{cacheSize:e,prefix:n,experimentalParseClassName:r,extend:l={},override:c={}})=>(Pl(a,"cacheSize",e),Pl(a,"prefix",n),Pl(a,"experimentalParseClassName",r),cu(a.theme,c.theme),cu(a.classGroups,c.classGroups),cu(a.conflictingClassGroups,c.conflictingClassGroups),cu(a.conflictingClassGroupModifiers,c.conflictingClassGroupModifiers),Pl(a,"orderSensitiveModifiers",c.orderSensitiveModifiers),uu(a.theme,l.theme),uu(a.classGroups,l.classGroups),uu(a.conflictingClassGroups,l.conflictingClassGroups),uu(a.conflictingClassGroupModifiers,l.conflictingClassGroupModifiers),kS(a,l,"orderSensitiveModifiers"),a),Pl=(a,e,n)=>{n!==void 0&&(a[e]=n)},cu=(a,e)=>{if(e)for(const n in e)Pl(a,n,e[n])},uu=(a,e)=>{if(e)for(const n in e)kS(a,e,n)},kS=(a,e,n)=>{const r=e[n];r!==void 0&&(a[n]=a[n]?a[n].concat(r):r)},kT=(a,...e)=>typeof a=="function"?mp(gp,a,...e):mp(()=>VT(gp(),a),...e),XT=mp(gp);var WT=a=>ui(a)?XT:kT({...a,extend:{theme:a.theme,classGroups:a.classGroups,conflictingClassGroupModifiers:a.conflictingClassGroupModifiers,conflictingClassGroups:a.conflictingClassGroups,...a.extend}}),$T=(a,e)=>{const n=Gl(a);return!n||!((e==null?void 0:e.twMerge)??!0)?n:((!Fa.cachedTwMerge||Fa.didTwMergeConfigChange)&&(Fa.didTwMergeConfigChange=!1,Fa.cachedTwMerge=WT(Fa.cachedTwMergeConfig)),Fa.cachedTwMerge(n)||void 0)},qT=(...a)=>e=>$T(a,e),{tv:kl}=nT(qT);const YT=kl({defaultVariants:{status:"default"},slots:{base:"alert",content:"alert__content",description:"alert__description",indicator:"alert__indicator",title:"alert__title"},variants:{status:{accent:{base:"alert--accent"},danger:{base:"alert--danger"},default:{base:"alert--default"},success:{base:"alert--success"},warning:{base:"alert--warning"}}}}),jT=kl({base:"button",defaultVariants:{fullWidth:!1,isIconOnly:!1,size:"md",variant:"primary"},variants:{fullWidth:{false:"",true:"button--full-width"},isIconOnly:{true:"button--icon-only"},size:{lg:"button--lg",md:"button--md",sm:"button--sm"},variant:{danger:"button--danger","danger-soft":"button--danger-soft",ghost:"button--ghost",outline:"button--outline",primary:"button--primary",secondary:"button--secondary",tertiary:"button--tertiary"}}}),KT=kl({defaultVariants:{variant:"default"},slots:{base:"card",content:"card__content",description:"card__description",footer:"card__footer",header:"card__header",title:"card__title"},variants:{variant:{default:{base:"card--default"},secondary:{base:"card--secondary"},tertiary:{base:"card--tertiary"},transparent:{base:"card--transparent"}}}}),ZT=kl({defaultVariants:{color:"default",variant:"secondary"},slots:{base:"chip",label:"chip__label"},variants:{color:{accent:{base:"chip--accent"},danger:{base:"chip--danger"},default:{base:"chip--default"},success:{base:"chip--success"},warning:{base:"chip--warning"}},size:{lg:{base:"chip--lg"},md:{base:"chip--md"},sm:{base:"chip--sm"}},variant:{primary:{base:"chip--primary"},secondary:{base:"chip--secondary"},soft:{base:"chip--soft"},tertiary:{base:"chip--tertiary"}}}}),QT=kl({defaultVariants:{color:"accent",size:"md"},slots:{base:"progress-bar",fill:"progress-bar__fill",output:"progress-bar__output",track:"progress-bar__track"},variants:{color:{accent:{base:"progress-bar--accent"},danger:{base:"progress-bar--danger"},default:{base:"progress-bar--default"},success:{base:"progress-bar--success"},warning:{base:"progress-bar--warning"}},size:{lg:{base:"progress-bar--lg"},md:{base:"progress-bar--md"},sm:{base:"progress-bar--sm"}}}}),JT=Symbol("default");function XS(a){let{className:e,style:n,children:r,defaultClassName:l,defaultChildren:c,defaultStyle:f,values:h,render:p}=a;return _e.useMemo(()=>{let m,_,v;return typeof e=="function"?m=e({...h,defaultClassName:l}):m=e,typeof n=="function"?_=n({...h,defaultStyle:f||{}}):_=n,typeof r=="function"?v=r({...h,defaultChildren:c}):r==null?v=c:v=r,{className:m??l,style:_||f?{...f,..._}:void 0,children:v??c,"data-rac":"",render:p?g=>p(g,h):void 0}},[e,n,r,l,c,f,h,p])}function e1(a,e){return n=>e(typeof a=="function"?a(n):a,n)}function t1(a,e){let n=_e.useContext(a);if(e===null)return null;if(n&&typeof n=="object"&&"slots"in n&&n.slots){let r=e||JT;if(!n.slots[r]){let l=new Intl.ListFormat().format(Object.keys(n.slots).map(f=>`"${f}"`)),c=e?`Invalid slot "${e}".`:"A slot prop is required.";throw new Error(`${c} Valid slot names are ${l}.`)}return n.slots[r]}return n}function WS(a,e,n){let r=t1(n,a.slot)||{},{ref:l,...c}=r,f=zE(_e.useMemo(()=>af(e,l),[e,l])),h=ua(c,a);return"style"in c&&c.style&&"style"in a&&a.style&&(typeof c.style=="function"||typeof a.style=="function"?h.style=p=>{let m=typeof c.style=="function"?c.style(p):c.style,_={...p.defaultStyle,...m},v=typeof a.style=="function"?a.style({...p,defaultStyle:_}):a.style;return{..._,...v}}:h.style={...c.style,...a.style}),[h,f]}function n1(a=!0){let[e,n]=_e.useState(a),r=_e.useRef(!1),l=_e.useCallback(c=>{r.current=!0,n(!!c)},[]);return vs(()=>{r.current||n(!1)},[]),[l,e]}function i1(a,e,n){let{render:r,...l}=e,c=_e.useRef(null),f=_e.useMemo(()=>af(n,c),[n,c]);vs(()=>{},[a,r]);let h={...l,ref:f};return r?r(h,void 0):pn.createElement(a,h)}const W_={},$S=new Proxy({},{get(a,e){if(typeof e!="string")return;let n=W_[e];return n||(n=_e.forwardRef(i1.bind(null,e)),W_[e]=n),n}});typeof HTMLTemplateElement<"u"&&(Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.content.firstChild}}),Object.defineProperty(HTMLTemplateElement.prototype,"appendChild",{configurable:!0,enumerable:!0,value:function(a){return this.content.appendChild(a)}}),Object.defineProperty(HTMLTemplateElement.prototype,"removeChild",{configurable:!0,enumerable:!0,value:function(a){return this.content.removeChild(a)}}),Object.defineProperty(HTMLTemplateElement.prototype,"insertBefore",{configurable:!0,enumerable:!0,value:function(a,e){return this.content.insertBefore(a,e)}}));const a1=_e.createContext(!1);function r1(a){let e=(n,r)=>_e.useContext(a1)?null:a(n,r);return e.displayName=a.displayName||a.name,_e.forwardRef(e)}const s1=_e.createContext({});function o1(a){let{id:e,label:n,"aria-labelledby":r,"aria-label":l,labelElementType:c="label"}=a;e=Hl(e);let f=Hl(),h={};n&&(r=r?`${f} ${r}`:f,h={id:f,htmlFor:c==="label"?e:void 0});let p=BE({id:e,"aria-label":l,"aria-labelledby":r});return{labelProps:h,fieldProps:p}}const l1=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),c1=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function u1(a){if(Intl.Locale){let n=new Intl.Locale(a).maximize(),r=typeof n.getTextInfo=="function"?n.getTextInfo():n.textInfo;if(r)return r.direction==="rtl";if(n.script)return l1.has(n.script)}let e=a.split("-")[0];return c1.has(e)}const qS=Symbol.for("react-aria.i18n.locale");function YS(){let a=typeof window<"u"&&window[qS]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([a])}catch{a="en-US"}return{locale:a,direction:u1(a)?"rtl":"ltr"}}let vp=YS(),Ol=new Set;function $_(){vp=YS();for(let a of Ol)a(vp)}function f1(){let a=SS(),[e,n]=_e.useState(vp);return _e.useEffect(()=>(Ol.size===0&&window.addEventListener("languagechange",$_),Ol.add(n),()=>{Ol.delete(n),Ol.size===0&&window.removeEventListener("languagechange",$_)}),[]),a?{locale:typeof window<"u"&&window[qS]||"en-US",direction:"ltr"}:e}const d1=pn.createContext(null);function h1(){let a=f1();return _e.useContext(d1)||a}let Rh=new Map,_p=!1;try{_p=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let $u=!1;try{$u=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const jS={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class p1{constructor(e,n={}){this.numberFormatter=m1(e,n),this.options=n}format(e){var r;let n="";if(!_p&&this.options.signDisplay!=null?n=g1(this.numberFormatter,this.options.signDisplay,e):n=this.numberFormatter.format(e),this.options.style==="unit"&&!$u){let{unit:l,unitDisplay:c="short",locale:f}=this.resolvedOptions();if(!l)return n;let h=(r=jS[l])==null?void 0:r[c];n+=h[f]||h.default}return n}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,n){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,n);if(n<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} – ${this.format(n)}`}formatRangeToParts(e,n){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,n);if(n<e)throw new RangeError("End date must be >= start date");let r=this.numberFormatter.formatToParts(e),l=this.numberFormatter.formatToParts(n);return[...r.map(c=>({...c,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...l.map(c=>({...c,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!_p&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!$u&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}}function m1(a,e={}){var c;let{numberingSystem:n}=e;if(n&&a.includes("-nu-")&&(a.includes("-u-")||(a+="-u-"),a+=`-nu-${n}`),e.style==="unit"&&!$u){let{unit:f,unitDisplay:h="short"}=e;if(!f)throw new Error('unit option must be provided with style: "unit"');if(!((c=jS[f])!=null&&c[h]))throw new Error(`Unsupported unit ${f} with unitDisplay = ${h}`);e={...e,style:"decimal"}}let r=a+(e?Object.entries(e).sort((f,h)=>f[0]<h[0]?-1:1).join():"");if(Rh.has(r))return Rh.get(r);let l=new Intl.NumberFormat(a,e);return Rh.set(r,l),l}function g1(a,e,n){if(e==="auto")return a.format(n);if(e==="never")return a.format(Math.abs(n));{let r=!1;if(e==="always"?r=n>0||Object.is(n,0):e==="exceptZero"&&(Object.is(n,-0)||Object.is(n,0)?n=Math.abs(n):r=n>0),r){let l=a.format(-n),c=a.format(n),f=l.replace(c,"").replace(/\u200e|\u061C/,"");return[...f].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),l.replace(c,"!!!").replace(f,"+").replace("!!!",c)}else return a.format(n)}}function v1(a={}){let{locale:e}=h1();return _e.useMemo(()=>new p1(e,a),[e,a])}function _1(a){let{value:e=0,minValue:n=0,maxValue:r=100,valueLabel:l,isIndeterminate:c,formatOptions:f={style:"percent"}}=a,h=rf(a,{labelable:!0}),{labelProps:p,fieldProps:m}=o1({...a,labelElementType:"span"});e=CS(e,n,r);let _=(e-n)/(r-n),v=v1(f);if(!c&&!l){let g=f.style==="percent"?_:e;l=v.format(g)}return{progressBarProps:ua(h,{...m,"aria-valuenow":c?void 0:e,"aria-valuemin":n,"aria-valuemax":r,"aria-valuetext":c?void 0:l,role:"progressbar"}),labelProps:p}}const KS=_e.createContext(null),x1=_e.forwardRef(function(e,n){[e,n]=WS(e,n,KS);let{value:r=0,minValue:l=0,maxValue:c=100,isIndeterminate:f=!1}=e;r=CS(r,l,c);let[h,p]=n1(!e["aria-label"]&&!e["aria-labelledby"]),{progressBarProps:m,labelProps:_}=_1({...e,label:p}),v=f?void 0:(r-l)/(c-l)*100,g=XS({...e,defaultClassName:"react-aria-ProgressBar",values:{percentage:v,valueText:m["aria-valuetext"],isIndeterminate:f}}),y=rf(e,{global:!0});return pn.createElement($S.div,{...ua(y,g,m),ref:n,slot:e.slot||void 0},pn.createElement(s1.Provider,{value:{..._,ref:h,elementType:"span"}},g.children))}),ZS=7e3;let ia=null;function q_(a,e="assertive",n=ZS){ia?ia.announce(a,e,n):(ia=new S1,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?ia.announce(a,e,n):setTimeout(()=>{ia!=null&&ia.isAttached()&&(ia==null||ia.announce(a,e,n))},100))}class S1{constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}isAttached(){var e;return(e=this.node)==null?void 0:e.isConnected}createLog(e){let n=document.createElement("div");return n.setAttribute("role","log"),n.setAttribute("aria-live",e),n.setAttribute("aria-relevant","additions"),n}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(e,n="assertive",r=ZS){var c,f;if(!this.node)return;let l=document.createElement("div");typeof e=="object"?(l.setAttribute("role","img"),l.setAttribute("aria-labelledby",e["aria-labelledby"])):l.textContent=e,n==="assertive"?(c=this.assertiveLog)==null||c.appendChild(l):(f=this.politeLog)==null||f.appendChild(l),e!==""&&setTimeout(()=>{l.remove()},r)}clear(e){this.node&&((!e||e==="assertive")&&this.assertiveLog&&(this.assertiveLog.innerHTML=""),(!e||e==="polite")&&this.politeLog&&(this.politeLog.innerHTML=""))}}function Em(a){let e=a;return e.nativeEvent=a,e.isDefaultPrevented=()=>e.defaultPrevented,e.isPropagationStopped=()=>e.cancelBubble,e.persist=()=>{},e}function QS(a,e){Object.defineProperty(a,"target",{value:e}),Object.defineProperty(a,"currentTarget",{value:e})}function JS(a){let e=_e.useRef({isFocused:!1,observer:null});return vs(()=>{const n=e.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]),_e.useCallback(n=>{let r=Lt(n);if(r instanceof HTMLButtonElement||r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement){e.current.isFocused=!0;let l=r,c=f=>{if(e.current.isFocused=!1,l.disabled){let h=Em(f);a==null||a(h)}e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};l.addEventListener("focusout",c,{once:!0}),e.current.observer=new MutationObserver(()=>{var f;if(e.current.isFocused&&l.disabled){(f=e.current.observer)==null||f.disconnect();let h=l===Nr()?null:Nr();l.dispatchEvent(new FocusEvent("blur",{relatedTarget:h})),l.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:h}))}}),e.current.observer.observe(l,{attributes:!0,attributeFilter:["disabled"]})}},[a])}let qu=!1;function b1(a){for(;a&&!$E(a,{skipVisibilityCheck:!0});)a=a.parentElement;let e=Ga(a),n=e.document.activeElement;if(!n||n===a)return;qu=!0;let r=!1,l=_=>{(Lt(_)===n||r)&&_.stopImmediatePropagation()},c=_=>{(Lt(_)===n||r)&&(_.stopImmediatePropagation(),!a&&!r&&(r=!0,_o(n),p()))},f=_=>{(Lt(_)===a||r)&&_.stopImmediatePropagation()},h=_=>{(Lt(_)===a||r)&&(_.stopImmediatePropagation(),r||(r=!0,_o(n),p()))};e.addEventListener("blur",l,!0),e.addEventListener("focusout",c,!0),e.addEventListener("focusin",h,!0),e.addEventListener("focus",f,!0);let p=()=>{cancelAnimationFrame(m),e.removeEventListener("blur",l,!0),e.removeEventListener("focusout",c,!0),e.removeEventListener("focusin",h,!0),e.removeEventListener("focus",f,!0),qu=!1,r=!1},m=requestAnimationFrame(p);return p}let Ao=null;const xp=new Set;let Bl=new Map,ds=!1,Sp=!1;const y1={Tab:!0,Escape:!0};function Tm(a,e){for(let n of xp)n(a,e)}function M1(a){return!(a.metaKey||!zl()&&a.altKey||a.ctrlKey||a.key==="Control"||a.key==="Shift"||a.key==="Meta")}function Yu(a){ds=!0,!fs.isOpening&&M1(a)&&(Ao="keyboard",Tm("keyboard",a))}function po(a){Ao="pointer","pointerType"in a&&a.pointerType,(a.type==="mousedown"||a.type==="pointerdown")&&(ds=!0,Tm("pointer",a))}function eb(a){!fs.isOpening&&TS(a)&&(ds=!0,Ao="virtual")}function tb(a){let e=Ga(Lt(a)),n=Xn(Lt(a));Lt(a)===e||Lt(a)===n||qu||!a.isTrusted||(!ds&&!Sp&&(Ao="virtual",Tm("virtual",a)),ds=!1,Sp=!1)}function nb(){qu||(ds=!1,Sp=!0)}function bp(a){if(typeof window>"u"||typeof document>"u")return;const e=Ga(a),n=Xn(a);if(Bl.get(e))return;let r=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){ds=!0,r.apply(this,arguments)},n.addEventListener("keydown",Yu,!0),n.addEventListener("keyup",Yu,!0),n.addEventListener("click",eb,!0),e.addEventListener("focus",tb,!0),e.addEventListener("blur",nb,!1),typeof PointerEvent<"u"&&(n.addEventListener("pointerdown",po,!0),n.addEventListener("pointermove",po,!0),n.addEventListener("pointerup",po,!0)),e.addEventListener("beforeunload",()=>{ib(a)},{once:!0}),Bl.set(e,{focus:r})}const ib=(a,e)=>{const n=Ga(a),r=Xn(a);e&&r.removeEventListener("DOMContentLoaded",e),Bl.has(n)&&(n.HTMLElement.prototype.focus=Bl.get(n).focus,r.removeEventListener("keydown",Yu,!0),r.removeEventListener("keyup",Yu,!0),r.removeEventListener("click",eb,!0),n.removeEventListener("focus",tb,!0),n.removeEventListener("blur",nb,!1),typeof PointerEvent<"u"&&(r.removeEventListener("pointerdown",po,!0),r.removeEventListener("pointermove",po,!0),r.removeEventListener("pointerup",po,!0)),Bl.delete(n))};function E1(a){const e=Xn(a);let n;return e.readyState!=="loading"?bp(a):(n=()=>{bp(a)},e.addEventListener("DOMContentLoaded",n)),()=>ib(a,n)}typeof document<"u"&&E1();function yp(){return Ao!=="pointer"}function T1(){return Ao}const A1=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function R1(a,e,n){let r=n?Lt(n):void 0,l=Xn(r),c=Ga(r);const f=typeof c<"u"?c.HTMLInputElement:HTMLInputElement,h=typeof c<"u"?c.HTMLTextAreaElement:HTMLTextAreaElement,p=typeof c<"u"?c.HTMLElement:HTMLElement,m=typeof c<"u"?c.KeyboardEvent:KeyboardEvent;let _=Nr(l);return a=a||_ instanceof f&&!A1.has(_.type)||_ instanceof h||_ instanceof p&&_.isContentEditable,!(a&&e==="keyboard"&&n instanceof m&&!y1[n.key])}function C1(a,e,n){bp(),_e.useEffect(()=>{if((n==null?void 0:n.enabled)===!1)return;let r=(l,c)=>{R1(!!(n!=null&&n.isTextInput),l,c)&&a(yp())};return xp.add(r),()=>{xp.delete(r)}},e)}function w1(a){if(!a.isConnected)return;const e=Xn(a);if(T1()==="virtual"){let n=Nr(e);MS(()=>{const r=Nr(e);(r===n||r===e.body)&&a.isConnected&&_o(a)})}else _o(a)}function ab(a){let{isDisabled:e,onFocus:n,onBlur:r,onFocusChange:l}=a;const c=_e.useCallback(p=>{if(Lt(p)===p.currentTarget)return r&&r(p),l&&l(!1),!0},[r,l]),f=JS(c),h=_e.useCallback(p=>{let m=Lt(p);const _=Xn(m),v=_?Nr(_):Nr();m===p.currentTarget&&m===v&&(n&&n(p),l&&l(!0),f(p))},[l,n,f]);return{focusProps:{onFocus:!e&&(n||l||r)?h:void 0,onBlur:!e&&(r||l)?c:void 0}}}function Y_(a){if(!a)return;let e=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented(){return n.isDefaultPrevented()},stopPropagation(){e=!0},continuePropagation(){e=!1},isPropagationStopped(){return e}};a(r),e&&n.stopPropagation()}}function D1(a){return{keyboardProps:a.isDisabled?{}:{onKeyDown:Y_(a.onKeyDown),onKeyUp:Y_(a.onKeyUp)}}}let U1=pn.createContext(null);function N1(a){let e=_e.useContext(U1)||{};ES(e,a);let{ref:n,...r}=e;return r}function L1(a,e){let{focusProps:n}=ab(a),{keyboardProps:r}=D1(a),l=ua(n,r),c=N1(e),f=a.isDisabled?{}:c,h=_e.useRef(a.autoFocus);_e.useEffect(()=>{h.current&&e.current&&w1(e.current),h.current=!1},[e]);let p=a.excludeFromTabOrder?-1:0;return a.isDisabled&&(p=void 0),{focusableProps:ua({...l,tabIndex:p},f)}}let fo="default",Mp="",Bu=new WeakMap;function P1(a){if(gS()){if(fo==="default"){const e=Xn(a);Mp=e.documentElement.style.webkitUserSelect,e.documentElement.style.webkitUserSelect="none"}fo="disabled"}else if(a instanceof HTMLElement||a instanceof SVGElement){let e="userSelect"in a.style?"userSelect":"webkitUserSelect";Bu.set(a,a.style[e]),a.style[e]="none"}}function j_(a){if(gS()){if(fo!=="disabled")return;fo="restoring",setTimeout(()=>{MS(()=>{if(fo==="restoring"){const e=Xn(a);e.documentElement.style.webkitUserSelect==="none"&&(e.documentElement.style.webkitUserSelect=Mp||""),Mp="",fo="default"}})},300)}else if((a instanceof HTMLElement||a instanceof SVGElement)&&a&&Bu.has(a)){let e=Bu.get(a),n="userSelect"in a.style?"userSelect":"webkitUserSelect";a.style[n]==="none"&&(a.style[n]=e),a.getAttribute("style")===""&&a.removeAttribute("style"),Bu.delete(a)}}const rb=pn.createContext({register:()=>{}});rb.displayName="PressResponderContext";function O1(a){let e=_e.useContext(rb);if(e){let{register:n,ref:r,...l}=e;a=ua(l,a),n()}return ES(e,a.ref),a}var vo;class fu{constructor(e,n,r,l){M_(this,vo);mh(this,vo,!0);let c=(l==null?void 0:l.target)??r.currentTarget;const f=c==null?void 0:c.getBoundingClientRect();let h,p=0,m,_=null;r.clientX!=null&&r.clientY!=null&&(m=r.clientX,_=r.clientY),f&&(m!=null&&_!=null?(h=m-f.left,p=_-f.top):(h=f.width/2,p=f.height/2)),this.type=e,this.pointerType=n,this.target=r.currentTarget,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.x=h,this.y=p,this.key=r.key}continuePropagation(){mh(this,vo,!1)}get shouldStopPropagation(){return y_(this,vo)}}vo=new WeakMap;const K_=Symbol("linkClicked"),Z_="react-aria-pressable-style",Q_="data-react-aria-pressable";function I1(a){let{onPress:e,onPressChange:n,onPressStart:r,onPressEnd:l,onPressUp:c,onClick:f,isDisabled:h,isPressed:p,preventFocusOnPress:m,shouldCancelOnPointerExit:_,allowTextSelectionOnPress:v,ref:g,...y}=O1(a),[T,w]=_e.useState(!1),b=_e.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:S,removeAllGlobalListeners:C}=ym(),N=_e.useCallback((H,B)=>{let U=b.current;if(h||U.didFirePressStart)return!1;let D=!0;if(U.isTriggeringEvent=!0,r){let I=new fu("pressstart",B,H);r(I),D=I.shouldStopPropagation}return n&&n(!0),U.isTriggeringEvent=!1,U.didFirePressStart=!0,w(!0),D},[h,r,n]),P=_e.useCallback((H,B,U=!0)=>{let D=b.current;if(!D.didFirePressStart)return!1;D.didFirePressStart=!1,D.isTriggeringEvent=!0;let I=!0;if(l){let V=new fu("pressend",B,H);l(V),I=V.shouldStopPropagation}if(n&&n(!1),w(!1),e&&U&&!h){let V=new fu("press",B,H);e(V),I&&(I=V.shouldStopPropagation)}return D.isTriggeringEvent=!1,I},[h,l,n,e]),X=Mh(P),z=_e.useCallback((H,B)=>{let U=b.current;if(h)return!1;if(c){U.isTriggeringEvent=!0;let D=new fu("pressup",B,H);return c(D),U.isTriggeringEvent=!1,D.shouldStopPropagation}return!0},[h,c]),G=Mh(z),M=_e.useCallback(H=>{let B=b.current;if(B.isPressed&&B.target){B.didFirePressStart&&B.pointerType!=null&&P(ts(B.target,H),B.pointerType,!1),B.isPressed=!1,B.isOverTarget=!1,B.activePointerId=null,B.pointerType=null,C(),v||j_(B.target);for(let U of B.disposables)U();B.disposables=[]}},[v,C,P]),F=Mh(M),Z=_e.useCallback(H=>{_&&M(H)},[_,M]),k=_e.useCallback(H=>{h||f==null||f(H)},[h,f]),J=_e.useCallback((H,B)=>{if(!h&&f){let U=new MouseEvent("click",H);QS(U,B),f(Em(U))}},[h,f]),fe=_e.useMemo(()=>{let H=b.current,B={onKeyDown(D){var I;if(Ch(D.nativeEvent,D.currentTarget)&&kn(D.currentTarget,Lt(D))){J_(Lt(D),D.key)&&D.preventDefault();let V=!0;!H.isPressed&&!D.repeat&&(H.target=D.currentTarget,H.isPressed=!0,H.pointerType="keyboard",V=N(D,"keyboard"));let se=D.currentTarget,O=Y=>{Ch(Y,se)&&!Y.repeat&&kn(se,Lt(Y))&&H.target&&G(ts(H.target,Y),"keyboard")};S(Xn(D.currentTarget),"keyup",bS(O,U),!0),V&&D.stopPropagation(),D.metaKey&&zl()&&((I=H.metaKeyEvents)==null||I.set(D.key,D.nativeEvent))}else D.key==="Meta"&&(H.metaKeyEvents=new Map)},onClick(D){if(!(D&&!kn(D.currentTarget,Lt(D)))&&D&&D.button===0&&!H.isTriggeringEvent&&!fs.isOpening){let I=!0;if(h&&D.preventDefault(),!H.ignoreEmulatedMouseEvents&&!H.isPressed&&(H.pointerType==="virtual"||TS(D.nativeEvent))){let V=N(D,"virtual"),se=G(D,"virtual"),O=X(D,"virtual");k(D),I=V&&se&&O}else if(H.isPressed&&H.pointerType!=="keyboard"){let V=H.pointerType||D.nativeEvent.pointerType||"virtual",se=G(ts(D.currentTarget,D),V),O=X(ts(D.currentTarget,D),V,!0);I=se&&O,H.isOverTarget=!1,k(D),F(D)}H.ignoreEmulatedMouseEvents=!1,I&&D.stopPropagation()}}},U=D=>{var I,V,se;if(H.isPressed&&H.target&&Ch(D,H.target)){J_(Lt(D),D.key)&&D.preventDefault();let O=Lt(D),Y=kn(H.target,O);X(ts(H.target,D),"keyboard",Y),Y&&J(D,H.target),C(),D.key!=="Enter"&&Am(H.target)&&kn(H.target,O)&&!D[K_]&&(D[K_]=!0,fs(H.target,D,!1)),H.isPressed=!1,(I=H.metaKeyEvents)==null||I.delete(D.key)}else if(D.key==="Meta"&&((V=H.metaKeyEvents)!=null&&V.size)){let O=H.metaKeyEvents;H.metaKeyEvents=void 0;for(let Y of O.values())(se=H.target)==null||se.dispatchEvent(new KeyboardEvent("keyup",Y))}};if(typeof PointerEvent<"u"){B.onPointerDown=V=>{if(V.button!==0||!kn(V.currentTarget,Lt(V)))return;if(GE(V.nativeEvent)){H.pointerType="virtual";return}H.pointerType=V.pointerType;let se=!0;if(!H.isPressed){H.isPressed=!0,H.isOverTarget=!0,H.activePointerId=V.pointerId,H.target=V.currentTarget,v||P1(H.target),se=N(V,H.pointerType);let O=Lt(V);"releasePointerCapture"in O&&("hasPointerCapture"in O?O.hasPointerCapture(V.pointerId)&&O.releasePointerCapture(V.pointerId):O.releasePointerCapture(V.pointerId)),S(Xn(V.currentTarget),"pointerup",D,!1),S(Xn(V.currentTarget),"pointercancel",I,!1)}se&&V.stopPropagation()},B.onMouseDown=V=>{if(kn(V.currentTarget,Lt(V))&&V.button===0){if(m){let se=b1(V.target);se&&H.disposables.push(se)}V.stopPropagation()}},B.onPointerUp=V=>{!kn(V.currentTarget,Lt(V))||H.pointerType==="virtual"||V.button===0&&!H.isPressed&&G(V,H.pointerType||V.pointerType)},B.onPointerEnter=V=>{V.pointerId===H.activePointerId&&H.target&&!H.isOverTarget&&H.pointerType!=null&&(H.isOverTarget=!0,N(ts(H.target,V),H.pointerType))},B.onPointerLeave=V=>{V.pointerId===H.activePointerId&&H.target&&H.isOverTarget&&H.pointerType!=null&&(H.isOverTarget=!1,X(ts(H.target,V),H.pointerType,!1),Z(V))};let D=V=>{if(V.pointerId===H.activePointerId&&H.isPressed&&V.button===0&&H.target){if(kn(H.target,Lt(V))&&H.pointerType!=null){let se=!1,O=setTimeout(()=>{H.isPressed&&H.target instanceof HTMLElement&&(se?F(V):(_o(H.target),H.target.click()))},80);S(V.currentTarget,"click",()=>se=!0,!0),H.disposables.push(()=>clearTimeout(O))}else F(V);H.isOverTarget=!1}},I=V=>{F(V)};B.onDragStart=V=>{kn(V.currentTarget,Lt(V))&&F(V)}}return B},[S,h,m,C,v,Z,N,k,J]);return _e.useEffect(()=>{if(!g)return;const H=Xn(g.current);if(!H||!H.head||H.getElementById(Z_))return;const B=H.createElement("style");B.id=Z_;let U=YE(H);U&&(B.nonce=U),B.textContent=`
@layer {
  [${Q_}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),H.head.prepend(B)},[g]),_e.useEffect(()=>{let H=b.current;return()=>{v||j_(H.target??void 0);for(let B of H.disposables)B();H.disposables=[]}},[v]),{isPressed:p||T,pressProps:ua(y,fe,{[Q_]:!0})}}function Am(a){return a.tagName==="A"&&a.hasAttribute("href")}function Ch(a,e){const{key:n,code:r}=a,l=e,c=l.getAttribute("role");return(n==="Enter"||n===" "||n==="Spacebar"||r==="Space")&&!(l instanceof Ga(l).HTMLInputElement&&!sb(l,n)||l instanceof Ga(l).HTMLTextAreaElement||l.isContentEditable)&&!((c==="link"||!c&&Am(l))&&n!=="Enter")}function ts(a,e){let n=e.clientX,r=e.clientY;return{currentTarget:a,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey,clientX:n,clientY:r,key:e.key}}function F1(a){return a instanceof HTMLInputElement?!1:a instanceof HTMLButtonElement?a.type!=="submit"&&a.type!=="reset":!Am(a)}function J_(a,e){return a instanceof HTMLInputElement?!sb(a,e):F1(a)}const B1=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function sb(a,e){return a.type==="checkbox"||a.type==="radio"?e===" ":B1.has(a.type)}function z1(a,e){let{elementType:n="button",isDisabled:r,onPress:l,onPressStart:c,onPressEnd:f,onPressUp:h,onPressChange:p,preventFocusOnPress:m,allowFocusWhenDisabled:_,onClick:v,href:g,target:y,rel:T,type:w="button"}=a,b;n==="button"?b={type:w,disabled:r,form:a.form,formAction:a.formAction,formEncType:a.formEncType,formMethod:a.formMethod,formNoValidate:a.formNoValidate,formTarget:a.formTarget,name:a.name,value:a.value}:b={role:"button",href:n==="a"&&!r?g:void 0,target:n==="a"?y:void 0,type:n==="input"?w:void 0,disabled:n==="input"?r:void 0,"aria-disabled":!r||n==="input"?void 0:r,rel:n==="a"?T:void 0};let{pressProps:S,isPressed:C}=I1({onPressStart:c,onPressEnd:f,onPressChange:p,onPress:l,onPressUp:h,onClick:v,isDisabled:r,preventFocusOnPress:m,ref:e}),{focusableProps:N}=L1(a,e);_&&(N.tabIndex=r?-1:N.tabIndex);let P=ua(N,S,rf(a,{labelable:!0}));return{isPressed:C,buttonProps:ua(b,P,{"aria-haspopup":a["aria-haspopup"],"aria-expanded":a["aria-expanded"],"aria-controls":a["aria-controls"],"aria-pressed":a["aria-pressed"],"aria-current":a["aria-current"],"aria-disabled":a["aria-disabled"]})}}function H1(a){let{isDisabled:e,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:l}=a,c=_e.useRef({isFocusWithin:!1}),{addGlobalListener:f,removeAllGlobalListeners:h}=ym(),p=_e.useCallback(v=>{kn(v.currentTarget,Lt(v))&&c.current.isFocusWithin&&!kn(v.currentTarget,v.relatedTarget)&&(c.current.isFocusWithin=!1,h(),n&&n(v),l&&l(!1))},[n,l,c,h]),m=JS(p),_=_e.useCallback(v=>{if(!kn(v.currentTarget,Lt(v)))return;let g=Lt(v);const y=Xn(g),T=Nr(y);if(!c.current.isFocusWithin&&T===g){r&&r(v),l&&l(!0),c.current.isFocusWithin=!0,m(v);let w=v.currentTarget;f(y,"focus",b=>{let S=Lt(b);if(c.current.isFocusWithin&&!kn(w,S)){let C=new y.defaultView.FocusEvent("blur",{relatedTarget:S});QS(C,w);let N=Em(C);p(N)}},{capture:!0})}},[r,l,m,f,p]);return e?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:_,onBlur:p}}}function G1(a={}){let{autoFocus:e=!1,isTextInput:n,within:r}=a,l=_e.useRef({isFocused:!1,isFocusVisible:e||yp()}),[c,f]=_e.useState(!1),[h,p]=_e.useState(()=>l.current.isFocused&&l.current.isFocusVisible),m=_e.useCallback(()=>p(l.current.isFocused&&l.current.isFocusVisible),[]),_=_e.useCallback(y=>{l.current.isFocused=y,l.current.isFocusVisible=yp(),f(y),m()},[m]);C1(y=>{l.current.isFocusVisible=y,m()},[n,c],{enabled:c,isTextInput:n});let{focusProps:v}=ab({isDisabled:r,onFocusChange:_}),{focusWithinProps:g}=H1({isDisabled:!r,onFocusWithinChange:_});return{isFocused:c,isFocusVisible:h,focusProps:r?g:v}}let Ep=!1,du=0;function V1(){Ep=!0,setTimeout(()=>{Ep=!1},500)}function ex(a){a.pointerType==="touch"&&V1()}function k1(){let a=Xn(null);if(!(typeof a>"u"))return du===0&&typeof PointerEvent<"u"&&a.addEventListener("pointerup",ex),du++,()=>{du--,!(du>0)&&typeof PointerEvent<"u"&&a.removeEventListener("pointerup",ex)}}function X1(a){let{onHoverStart:e,onHoverChange:n,onHoverEnd:r,isDisabled:l}=a,[c,f]=_e.useState(!1),h=_e.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;_e.useEffect(k1,[]);let{addGlobalListener:p,removeAllGlobalListeners:m}=ym(),{hoverProps:_,triggerHoverEnd:v}=_e.useMemo(()=>{let g=(w,b)=>{if(h.pointerType=b,l||b==="touch"||h.isHovered||!kn(w.currentTarget,Lt(w)))return;h.isHovered=!0;let S=w.currentTarget;h.target=S,p(Xn(Lt(w)),"pointerover",C=>{h.isHovered&&h.target&&!kn(h.target,Lt(C))&&y(C,C.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:S,pointerType:b}),n&&n(!0),f(!0)},y=(w,b)=>{let S=h.target;h.pointerType="",h.target=null,!(b==="touch"||!h.isHovered||!S)&&(h.isHovered=!1,m(),r&&r({type:"hoverend",target:S,pointerType:b}),n&&n(!1),f(!1))},T={};return typeof PointerEvent<"u"&&(T.onPointerEnter=w=>{Ep&&w.pointerType==="mouse"||g(w,w.pointerType)},T.onPointerLeave=w=>{!l&&kn(w.currentTarget,Lt(w))&&y(w,w.pointerType)}),{hoverProps:T,triggerHoverEnd:y}},[e,n,r,l,h,p,m]);return _e.useEffect(()=>{l&&v({currentTarget:h.target},h.pointerType)},[l]),{hoverProps:_,isHovered:c}}const W1=_e.createContext({}),$1=r1(function(e,n){[e,n]=WS(e,n,W1);let r=e,{isPending:l}=r,{buttonProps:c,isPressed:f}=z1(e,n);c=Y1(c,l);let{focusProps:h,isFocused:p,isFocusVisible:m}=G1(e),{hoverProps:_,isHovered:v}=X1({...e,isDisabled:e.isDisabled||l}),g={isHovered:v,isPressed:(r.isPressed||f)&&!l,isFocused:p,isFocusVisible:m,isDisabled:e.isDisabled||!1,isPending:l??!1},y=XS({...e,values:g,defaultClassName:"react-aria-Button"}),T=Hl(c.id),w=Hl(),b=c["aria-labelledby"];l&&(b?b=`${b} ${w}`:c["aria-label"]&&(b=`${T} ${w}`));let S=_e.useRef(l);_e.useEffect(()=>{let N={"aria-labelledby":b||T};(!S.current&&p&&l||S.current&&p&&!l)&&q_(N,"assertive"),S.current=l},[l,p,b,T]);let C=rf(e,{global:!0});return delete C.onClick,pn.createElement($S.button,{...ua(C,y,c,h,_),type:c.type==="submit"&&l?"button":c.type,id:T,ref:n,"aria-labelledby":b,slot:e.slot||void 0,"aria-disabled":l?"true":c["aria-disabled"],"data-disabled":e.isDisabled||void 0,"data-pressed":g.isPressed||void 0,"data-hovered":v||void 0,"data-focused":p||void 0,"data-pending":l||void 0,"data-focus-visible":m||void 0},pn.createElement(KS.Provider,{value:{id:w}},y.children))}),q1=/Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;function Y1(a,e){if(e){for(const n in a)n.startsWith("on")&&!q1.test(n)&&(a[n]=void 0);a.href=void 0,a.target=void 0}return a}function ob(a,e){return e1(a,(n,r)=>{const l=typeof e=="function"?e(r)??"":e??"";return Gl(l,n??"")??""})}const di=(a,e,n)=>typeof a=="function"?a({className:e}):e,tx=a=>Re.jsx("svg",{"aria-hidden":"true","aria-label":"Info icon",fill:"none",height:16,role:"presentation",viewBox:"0 0 16 16",width:16,xmlns:"http://www.w3.org/2000/svg",...a,children:Re.jsx("path",{clipRule:"evenodd",d:"M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z",fill:"currentColor",fillRule:"evenodd"})}),j1=a=>Re.jsx("svg",{"aria-hidden":"true","aria-label":"Warning icon",fill:"none",height:16,role:"presentation",viewBox:"0 0 16 16",width:16,xmlns:"http://www.w3.org/2000/svg",...a,children:Re.jsx("path",{clipRule:"evenodd",d:"M7.134 2.994L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0",fill:"currentColor",fillRule:"evenodd"})}),K1=a=>Re.jsx("svg",{"aria-hidden":"true","aria-label":"Danger icon",fill:"none",height:16,role:"presentation",viewBox:"0 0 16 16",width:16,xmlns:"http://www.w3.org/2000/svg",...a,children:Re.jsx("path",{clipRule:"evenodd",d:"M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z",fill:"currentColor",fillRule:"evenodd"})}),Z1=a=>Re.jsx("svg",{"aria-hidden":"true","aria-label":"Success icon",fill:"none",height:16,role:"presentation",viewBox:"0 0 16 16",width:16,xmlns:"http://www.w3.org/2000/svg",...a,children:Re.jsx("path",{clipRule:"evenodd",d:"M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.9-1.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z",fill:"currentColor",fillRule:"evenodd"})}),lb=_e.createContext({}),Q1=_e.createContext({}),J1="__button_group_child",nx=({children:a,className:e,fullWidth:n,isDisabled:r,isIconOnly:l,size:c,slot:f,style:h,variant:p,[J1]:m,..._})=>{const v=_e.useContext(Q1),g=m===!0,y=c??(g?v==null?void 0:v.size:void 0),T=p??(g?v==null?void 0:v.variant:void 0),w=r??(g?v==null?void 0:v.isDisabled:void 0),b=n??(g?v==null?void 0:v.fullWidth:void 0),S=jT({fullWidth:b,isIconOnly:l,size:y,variant:T});return Re.jsx($1,{className:ob(e,S),"data-slot":"button",isDisabled:w,slot:f,style:h,..._,children:C=>typeof a=="function"?a(C):a})},hu=Object.assign(nx,{Root:nx}),Ro=_e.createContext({}),ix=({children:a,className:e,variant:n="default",...r})=>{const l=pn.useMemo(()=>KT({variant:n}),[n]),c=Re.jsx(Qn.div,{className:l.base({className:e}),"data-slot":"card",...r,children:a});return Re.jsx(Ro,{value:{slots:l},children:n==="transparent"?c:Re.jsx(lb,{value:{variant:n},children:c})})},eA=({className:a,...e})=>{const{slots:n}=_e.useContext(Ro);return Re.jsx(Qn.div,{className:di(n==null?void 0:n.header,a),"data-slot":"card-header",...e})},tA=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(Ro);return Re.jsx(Qn.h3,{className:di(r==null?void 0:r.title,e),"data-slot":"card-title",...n,children:a})},nA=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(Ro);return Re.jsx(Qn.p,{className:di(r==null?void 0:r.description,e),"data-slot":"card-description",...n,children:a})},iA=({className:a,...e})=>{const{slots:n}=_e.useContext(Ro);return Re.jsx(Qn.div,{className:di(n==null?void 0:n.content,a),"data-slot":"card-content",...e})},aA=({className:a,...e})=>{const{slots:n}=_e.useContext(Ro);return Re.jsx(Qn.div,{className:di(n==null?void 0:n.footer,a),"data-slot":"card-footer",...e})},ax=Object.assign(ix,{Root:ix,Header:eA,Title:tA,Description:nA,Content:iA,Footer:aA}),cb=_e.createContext({}),rx=({children:a,className:e,color:n,size:r,variant:l,...c})=>{const f=pn.useMemo(()=>ZT({color:n,size:r,variant:l}),[n,r,l]),h=pn.useMemo(()=>typeof a=="string"||typeof a=="number"?Re.jsx(ub,{children:a}):a,[a]);return Re.jsx(cb,{value:{slots:f},children:Re.jsx(Qn.span,{...c,className:di(f.base,e),"data-slot":"chip",children:h})})},ub=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(cb);return Re.jsx(Qn.span,{className:di(r==null?void 0:r.label,e),"data-slot":"chip-label",...n,children:a})},sx=Object.assign(rx,{Root:rx,Label:ub}),sf=_e.createContext({}),Tp=({children:a,className:e,color:n,size:r,...l})=>{const c=pn.useMemo(()=>QT({color:n,size:r}),[n,r]);return Re.jsx(x1,{"data-slot":"progress-bar",...l,className:ob(e,c.base()),children:f=>Re.jsx(sf,{value:{slots:c,state:f},children:typeof a=="function"?a(f):a})})};Tp.displayName="HeroUI.ProgressBar";const fb=({children:a,className:e,...n})=>{const{slots:r,state:l}=_e.useContext(sf);return Re.jsx(Qn.span,{className:di(r==null?void 0:r.output,e),"data-slot":"progress-bar-output",...n,children:a??(l==null?void 0:l.valueText)})};fb.displayName="HeroUI.ProgressBar.Output";const db=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(sf);return Re.jsx(Qn.div,{className:di(r==null?void 0:r.track,e),"data-slot":"progress-bar-track",...n,children:a})};db.displayName="HeroUI.ProgressBar.Track";const hb=({className:a,style:e,...n})=>{const{slots:r,state:l}=_e.useContext(sf);return Re.jsx(Qn.div,{className:di(r==null?void 0:r.fill,a),"data-slot":"progress-bar-fill",style:{...e,width:l!=null&&l.isIndeterminate?void 0:`${(l==null?void 0:l.percentage)??0}%`},...n})};hb.displayName="HeroUI.ProgressBar.Fill";const wh=Object.assign(Tp,{Root:Tp,Output:fb,Track:db,Fill:hb}),Xl=_e.createContext({}),ox=({children:a,className:e,status:n,...r})=>{const l=pn.useMemo(()=>YT({status:n}),[n]);return Re.jsx(Xl,{value:{slots:l,status:n},children:Re.jsx(lb,{value:{variant:"default"},children:Re.jsx(Qn.div,{className:l==null?void 0:l.base({className:e}),"data-slot":"alert-root",...r,children:a})})})},rA=({children:a,className:e,...n})=>{const{slots:r,status:l}=_e.useContext(Xl),c=()=>{switch(l){case"accent":return Re.jsx(tx,{"data-slot":"alert-default-icon"});case"success":return Re.jsx(Z1,{"data-slot":"alert-default-icon"});case"warning":return Re.jsx(j1,{"data-slot":"alert-default-icon"});case"danger":return Re.jsx(K1,{"data-slot":"alert-default-icon"});default:return Re.jsx(tx,{"data-slot":"alert-default-icon"})}};return Re.jsx(Qn.div,{className:di(r==null?void 0:r.indicator,e),"data-slot":"alert-indicator",...n,children:a??c()})},sA=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(Xl);return Re.jsx(Qn.div,{className:di(r==null?void 0:r.content,e),"data-slot":"alert-content",...n,children:a})},oA=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(Xl);return Re.jsx(Qn.p,{className:di(r==null?void 0:r.title,e),"data-slot":"alert-title",...n,children:a})},lA=({children:a,className:e,...n})=>{const{slots:r}=_e.useContext(Xl);return Re.jsx(Qn.span,{className:di(r==null?void 0:r.description,e),"data-slot":"alert-description",...n,children:a})},ei=Object.assign(ox,{Root:ox,Indicator:rA,Content:sA,Title:oA,Description:lA});/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pb=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=_e.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},p)=>_e.createElement("svg",{ref:p,...uA,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:pb("lucide",l),...h},[...f.map(([m,_])=>_e.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=(a,e)=>{const n=_e.forwardRef(({className:r,...l},c)=>_e.createElement(fA,{ref:c,iconNode:e,className:pb(`lucide-${cA(a)}`,r),...l}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],hA=Wa("CircleCheck",dA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],mA=Wa("Clapperboard",pA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],vA=Wa("Film",gA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],xA=Wa("FolderOpen",_A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]],bA=Wa("FolderSearch",SA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],lx=Wa("LoaderCircle",yA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],EA=Wa("RotateCcw",MA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],AA=Wa("Sparkles",TA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],cx=Wa("TriangleAlert",RA);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="184",CA=0,ux=1,wA=2,zu=1,DA=2,Il=3,Va=0,On=1,Ti=2,Ki=0,mo=1,fx=2,dx=3,hx=4,UA=5,os=100,NA=101,LA=102,PA=103,OA=104,IA=200,FA=201,BA=202,zA=203,Ap=204,Rp=205,HA=206,GA=207,VA=208,kA=209,XA=210,WA=211,$A=212,qA=213,YA=214,Cp=0,ju=1,wp=2,xo=3,Dp=4,Up=5,Np=6,Lp=7,mb=0,jA=1,KA=2,ca=0,gb=1,vb=2,_b=3,xb=4,Sb=5,bb=6,yb=7,Mb=300,hs=301,So=302,Dh=303,Uh=304,lf=306,Pp=1e3,Ba=1001,Op=1002,Wn=1003,ZA=1004,pu=1005,hn=1006,Nh=1007,cs=1008,Zn=1009,Eb=1010,Tb=1011,Vl=1012,Rm=1013,fa=1014,Yi=1015,ka=1016,Cm=1017,wm=1018,bo=1020,Ab=35902,Rb=35899,Cb=1021,wb=1022,ji=1023,Xa=1026,Dr=1027,Db=1028,Dm=1029,ps=1030,Um=1031,Nm=1033,Hu=33776,Gu=33777,Vu=33778,ku=33779,Ip=35840,Fp=35841,Bp=35842,zp=35843,Hp=36196,Gp=37492,Vp=37496,kp=37488,Xp=37489,Ku=37490,Wp=37491,$p=37808,qp=37809,Yp=37810,jp=37811,Kp=37812,Zp=37813,Qp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,am=37820,rm=37821,sm=36492,om=36494,lm=36495,cm=36283,um=36284,Zu=36285,fm=36286,Wl=3200,px=0,QA=1,oa="",xn="srgb",yo="srgb-linear",Qu="linear",Kt="srgb",Zs=7680,mx=519,JA=512,eR=513,tR=514,Lm=515,nR=516,iR=517,Pm=518,aR=519,gx=35044,dm="300 es",la=2e3,Ju=2001;function rR(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ef(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sR(){const a=ef("canvas");return a.style.display="block",a}const vx={};function _x(...a){const e="THREE."+a.shift();console.log(e,...a)}function Ub(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=Ub(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Pt(...a){a=Ub(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function hm(...a){const e=a.join(" ");e in vx||(vx[e]=!0,rt(...a))}function oR(a,e,n){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const lR={[Cp]:ju,[wp]:Np,[Dp]:Lp,[xo]:Up,[ju]:Cp,[Np]:wp,[Lp]:Dp,[Up]:xo};class $a{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=Math.PI/180,pm=180/Math.PI;function $l(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[a&255]+jn[a>>8&255]+jn[a>>16&255]+jn[a>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[n&63|128]+jn[n>>8&255]+"-"+jn[n>>16&255]+jn[n>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Nt(a,e,n){return Math.max(e,Math.min(n,a))}function cR(a,e){return(a%e+e)%e}function Ph(a,e,n){return(1-n)*a+n*e}function Al(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ci(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Fm=class Fm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fm.prototype.isVector2=!0;let bt=Fm;class Co{constructor(e=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=l}static slerpFlat(e,n,r,l,c,f,h){let p=r[l+0],m=r[l+1],_=r[l+2],v=r[l+3],g=c[f+0],y=c[f+1],T=c[f+2],w=c[f+3];if(v!==w||p!==g||m!==y||_!==T){let b=p*g+m*y+_*T+v*w;b<0&&(g=-g,y=-y,T=-T,w=-w,b=-b);let S=1-h;if(b<.9995){const C=Math.acos(b),N=Math.sin(C);S=Math.sin(S*C)/N,h=Math.sin(h*C)/N,p=p*S+g*h,m=m*S+y*h,_=_*S+T*h,v=v*S+w*h}else{p=p*S+g*h,m=m*S+y*h,_=_*S+T*h,v=v*S+w*h;const C=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=C,m*=C,_*=C,v*=C}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],v=c[f],g=c[f+1],y=c[f+2],T=c[f+3];return e[n]=h*T+_*v+p*y-m*g,e[n+1]=p*T+_*g+m*v-h*y,e[n+2]=m*T+_*y+h*g-p*v,e[n+3]=_*T-h*v-p*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,l){return this._x=e,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),v=h(c/2),g=p(r/2),y=p(l/2),T=p(c/2);switch(f){case"XYZ":this._x=g*_*v+m*y*T,this._y=m*y*v-g*_*T,this._z=m*_*T+g*y*v,this._w=m*_*v-g*y*T;break;case"YXZ":this._x=g*_*v+m*y*T,this._y=m*y*v-g*_*T,this._z=m*_*T-g*y*v,this._w=m*_*v+g*y*T;break;case"ZXY":this._x=g*_*v-m*y*T,this._y=m*y*v+g*_*T,this._z=m*_*T+g*y*v,this._w=m*_*v-g*y*T;break;case"ZYX":this._x=g*_*v-m*y*T,this._y=m*y*v+g*_*T,this._z=m*_*T-g*y*v,this._w=m*_*v+g*y*T;break;case"YZX":this._x=g*_*v+m*y*T,this._y=m*y*v+g*_*T,this._z=m*_*T-g*y*v,this._w=m*_*v-g*y*T;break;case"XZY":this._x=g*_*v-m*y*T,this._y=m*y*v-g*_*T,this._z=m*_*T+g*y*v,this._w=m*_*v+g*y*T;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],_=n[6],v=n[10],g=r+h+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,l=e._y,c=e._z,f=e._w,h=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*h+l*m-c*p,this._y=l*_+f*p+c*h-r*m,this._z=c*_+f*m+r*p-l*h,this._w=f*_-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let p=1-n;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,n=Math.sin(n*m)/_,this._x=this._x*p+r*n,this._y=this._y*p+l*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+l*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bm=class Bm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*r),_=2*(h*n-c*l),v=2*(c*r-f*n);return this.x=n+p*m+f*v-h*_,this.y=r+p*_+h*m-c*v,this.z=l+p*v+c*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,l=e.y,c=e.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return n*n+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const l=Math.sin(n)*e;return this.x=l*Math.sin(r),this.y=Math.cos(n)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bm.prototype.isVector3=!0;let ce=Bm;const Oh=new ce,xx=new Co,zm=class zm{constructor(e,n,r,l,c,f,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,l,c,f,h,p,m)}set(e,n,r,l,c,f,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],_=r[4],v=r[7],g=r[2],y=r[5],T=r[8],w=l[0],b=l[3],S=l[6],C=l[1],N=l[4],P=l[7],X=l[2],z=l[5],G=l[8];return c[0]=f*w+h*C+p*X,c[3]=f*b+h*N+p*z,c[6]=f*S+h*P+p*G,c[1]=m*w+_*C+v*X,c[4]=m*b+_*N+v*z,c[7]=m*S+_*P+v*G,c[2]=g*w+y*C+T*X,c[5]=g*b+y*N+T*z,c[8]=g*S+y*P+T*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*h*m-r*c*_+r*h*p+l*c*m-l*f*p}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=_*f-h*m,g=h*p-_*c,y=m*c-f*p,T=n*v+r*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(l*m-_*r)*w,e[2]=(h*r-l*f)*w,e[3]=g*w,e[4]=(_*n-l*p)*w,e[5]=(l*c-h*n)*w,e[6]=y*w,e[7]=(r*p-m*n)*w,e[8]=(f*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Ih.makeScale(e,n)),this}rotate(e){return this.premultiply(Ih.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ih.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zm.prototype.isMatrix3=!0;let dt=zm;const Ih=new dt,Sx=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uR(){const a={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Kt&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Kt&&(l.r=go(l.r),l.g=go(l.g),l.b=go(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===oa?Qu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return hm("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return hm("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[yo]:{primaries:e,whitePoint:r,transfer:Qu,toXYZ:Sx,fromXYZ:bx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:Sx,fromXYZ:bx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),a}const Ut=uR();function za(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function go(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Qs;class fR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=ef("canvas")),Qs.width=e.width,Qs.height=e.height;const l=Qs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ef("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=za(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(za(n[r]/255)*255):n[r]=za(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dR=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=$l(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Fh(l[f].image)):c.push(Fh(l[f]))}else c=Fh(l);r.url=c}return n||(e.images[this.uuid]=r),r}}function Fh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?fR.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let hR=0;const Bh=new ce;class In extends $a{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,r=Ba,l=Ba,c=hn,f=cs,h=ji,p=Zn,m=In.DEFAULT_ANISOTROPY,_=oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=$l(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pp:e.x=e.x-Math.floor(e.x);break;case Ba:e.x=e.x<0?0:1;break;case Op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pp:e.y=e.y-Math.floor(e.y);break;case Ba:e.y=e.y<0?0:1;break;case Op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Mb;In.DEFAULT_ANISOTROPY=1;const Hm=class Hm{constructor(e=0,n=0,r=0,l=1){this.x=e,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,l){return this.x=e,this.y=n,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,l,c;const p=e.elements,m=p[0],_=p[4],v=p[8],g=p[1],y=p[5],T=p[9],w=p[2],b=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+b)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,P=(y+1)/2,X=(S+1)/2,z=(_+g)/4,G=(v+w)/4,M=(T+b)/4;return N>P&&N>X?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=z/r,c=G/r):P>X?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=z/l,c=M/l):X<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),r=G/c,l=M/c),this.set(r,l,c,n),this}let C=Math.sqrt((b-T)*(b-T)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(b-T)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this.w=Nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this.w=Nt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;let Sn=Hm;class pR extends $a{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Sn(0,0,e,n),this.scissorTest=!1,this.viewport=new Sn(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:r.depth},c=new In(l),f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new Om(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends pR{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Nb extends In{constructor(e=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mR extends In{constructor(e=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tf=class tf{constructor(e,n,r,l,c,f,h,p,m,_,v,g,y,T,w,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,l,c,f,h,p,m,_,v,g,y,T,w,b)}set(e,n,r,l,c,f,h,p,m,_,v,g,y,T,w,b){const S=this.elements;return S[0]=e,S[4]=n,S[8]=r,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=p,S[2]=m,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=T,S[11]=w,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tf().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,l=1/Js.setFromMatrixColumn(e,0).length(),c=1/Js.setFromMatrixColumn(e,1).length(),f=1/Js.setFromMatrixColumn(e,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,y=f*v,T=h*_,w=h*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=y+T*m,n[5]=g-w*m,n[9]=-h*p,n[2]=w-g*m,n[6]=T+y*m,n[10]=f*p}else if(e.order==="YXZ"){const g=p*_,y=p*v,T=m*_,w=m*v;n[0]=g+w*h,n[4]=T*h-y,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-h,n[2]=y*h-T,n[6]=w+g*h,n[10]=f*p}else if(e.order==="ZXY"){const g=p*_,y=p*v,T=m*_,w=m*v;n[0]=g-w*h,n[4]=-f*v,n[8]=T+y*h,n[1]=y+T*h,n[5]=f*_,n[9]=w-g*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(e.order==="ZYX"){const g=f*_,y=f*v,T=h*_,w=h*v;n[0]=p*_,n[4]=T*m-y,n[8]=g*m+w,n[1]=p*v,n[5]=w*m+g,n[9]=y*m-T,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(e.order==="YZX"){const g=f*p,y=f*m,T=h*p,w=h*m;n[0]=p*_,n[4]=w-g*v,n[8]=T*v+y,n[1]=v,n[5]=f*_,n[9]=-h*_,n[2]=-m*_,n[6]=y*v+T,n[10]=g-w*v}else if(e.order==="XZY"){const g=f*p,y=f*m,T=h*p,w=h*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=g*v+w,n[5]=f*_,n[9]=y*v-T,n[2]=T*v-y,n[6]=h*_,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gR,e,vR)}lookAt(e,n,r){const l=this.elements;return Mi.subVectors(e,n),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Mr.crossVectors(r,Mi),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Mr.crossVectors(r,Mi)),Mr.normalize(),mu.crossVectors(Mi,Mr),l[0]=Mr.x,l[4]=mu.x,l[8]=Mi.x,l[1]=Mr.y,l[5]=mu.y,l[9]=Mi.y,l[2]=Mr.z,l[6]=mu.z,l[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],_=r[1],v=r[5],g=r[9],y=r[13],T=r[2],w=r[6],b=r[10],S=r[14],C=r[3],N=r[7],P=r[11],X=r[15],z=l[0],G=l[4],M=l[8],F=l[12],Z=l[1],k=l[5],J=l[9],fe=l[13],H=l[2],B=l[6],U=l[10],D=l[14],I=l[3],V=l[7],se=l[11],O=l[15];return c[0]=f*z+h*Z+p*H+m*I,c[4]=f*G+h*k+p*B+m*V,c[8]=f*M+h*J+p*U+m*se,c[12]=f*F+h*fe+p*D+m*O,c[1]=_*z+v*Z+g*H+y*I,c[5]=_*G+v*k+g*B+y*V,c[9]=_*M+v*J+g*U+y*se,c[13]=_*F+v*fe+g*D+y*O,c[2]=T*z+w*Z+b*H+S*I,c[6]=T*G+w*k+b*B+S*V,c[10]=T*M+w*J+b*U+S*se,c[14]=T*F+w*fe+b*D+S*O,c[3]=C*z+N*Z+P*H+X*I,c[7]=C*G+N*k+P*B+X*V,c[11]=C*M+N*J+P*U+X*se,c[15]=C*F+N*fe+P*D+X*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],_=e[2],v=e[6],g=e[10],y=e[14],T=e[3],w=e[7],b=e[11],S=e[15],C=p*y-m*g,N=h*y-m*v,P=h*g-p*v,X=f*y-m*_,z=f*g-p*_,G=f*v-h*_;return n*(w*C-b*N+S*P)-r*(T*C-b*X+S*z)+l*(T*N-w*X+S*G)-c*(T*P-w*z+b*G)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=e[9],g=e[10],y=e[11],T=e[12],w=e[13],b=e[14],S=e[15],C=n*h-r*f,N=n*p-l*f,P=n*m-c*f,X=r*p-l*h,z=r*m-c*h,G=l*m-c*p,M=_*w-v*T,F=_*b-g*T,Z=_*S-y*T,k=v*b-g*w,J=v*S-y*w,fe=g*S-y*b,H=C*fe-N*J+P*k+X*Z-z*F+G*M;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=(h*fe-p*J+m*k)*B,e[1]=(l*J-r*fe-c*k)*B,e[2]=(w*G-b*z+S*X)*B,e[3]=(g*z-v*G-y*X)*B,e[4]=(p*Z-f*fe-m*F)*B,e[5]=(n*fe-l*Z+c*F)*B,e[6]=(b*P-T*G-S*N)*B,e[7]=(_*G-g*P+y*N)*B,e[8]=(f*J-h*Z+m*M)*B,e[9]=(r*Z-n*J-c*M)*B,e[10]=(T*z-w*P+S*C)*B,e[11]=(v*P-_*z-y*C)*B,e[12]=(h*F-f*k-p*M)*B,e[13]=(n*k-r*F+l*M)*B,e[14]=(w*N-T*X-b*C)*B,e[15]=(_*X-v*N+g*C)*B,this}scale(e){const n=this.elements,r=e.x,l=e.y,c=e.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=e.x,h=e.y,p=e.z,m=c*f,_=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*f,0,m*p-l*h,_*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,_=f+f,v=h+h,g=c*m,y=c*_,T=c*v,w=f*_,b=f*v,S=h*v,C=p*m,N=p*_,P=p*v,X=r.x,z=r.y,G=r.z;return l[0]=(1-(w+S))*X,l[1]=(y+P)*X,l[2]=(T-N)*X,l[3]=0,l[4]=(y-P)*z,l[5]=(1-(g+S))*z,l[6]=(b+C)*z,l[7]=0,l[8]=(T+N)*G,l[9]=(b-C)*G,l[10]=(1-(g+w))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Js.set(l[0],l[1],l[2]).length();const h=Js.set(l[4],l[5],l[6]).length(),p=Js.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Xi.copy(this);const m=1/f,_=1/h,v=1/p;return Xi.elements[0]*=m,Xi.elements[1]*=m,Xi.elements[2]*=m,Xi.elements[4]*=_,Xi.elements[5]*=_,Xi.elements[6]*=_,Xi.elements[8]*=v,Xi.elements[9]*=v,Xi.elements[10]*=v,n.setFromRotationMatrix(Xi),r.x=f,r.y=h,r.z=p,this}makePerspective(e,n,r,l,c,f,h=la,p=!1){const m=this.elements,_=2*c/(n-e),v=2*c/(r-l),g=(n+e)/(n-e),y=(r+l)/(r-l);let T,w;if(p)T=c/(f-c),w=f*c/(f-c);else if(h===la)T=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===Ju)T=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,l,c,f,h=la,p=!1){const m=this.elements,_=2/(n-e),v=2/(r-l),g=-(n+e)/(n-e),y=-(r+l)/(r-l);let T,w;if(p)T=1/(f-c),w=f/(f-c);else if(h===la)T=-2/(f-c),w=-(f+c)/(f-c);else if(h===Ju)T=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};tf.prototype.isMatrix4=!0;let Dn=tf;const Js=new ce,Xi=new Dn,gR=new ce(0,0,0),vR=new ce(1,1,1),Mr=new ce,mu=new ce,Mi=new ce,yx=new Dn,Mx=new Co;class ms{constructor(e=0,n=0,r=0,l=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,l=this._order){return this._x=e,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return yx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yx,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mx.setFromEuler(this),this.setFromQuaternion(Mx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class Lb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _R=0;const Ex=new ce,eo=new Co,Na=new Dn,gu=new ce,Rl=new ce,xR=new ce,SR=new Co,Tx=new ce(1,0,0),Ax=new ce(0,1,0),Rx=new ce(0,0,1),Cx={type:"added"},bR={type:"removed"},to={type:"childadded",child:null},zh={type:"childremoved",child:null};class Ai extends $a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=$l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const e=new ce,n=new ms,r=new Co,l=new ce(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Dn},normalMatrix:{value:new dt}}),this.matrix=new Dn,this.matrixWorld=new Dn,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Tx,e)}rotateY(e){return this.rotateOnAxis(Ax,e)}rotateZ(e){return this.rotateOnAxis(Rx,e)}translateOnAxis(e,n){return Ex.copy(e).applyQuaternion(this.quaternion),this.position.add(Ex.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tx,e)}translateY(e){return this.translateOnAxis(Ax,e)}translateZ(e){return this.translateOnAxis(Rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gu.copy(e):gu.set(e,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(Rl,gu,this.up):Na.lookAt(gu,Rl,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),eo.setFromRotationMatrix(Na),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cx),to.child=e,this.dispatchEvent(to),to.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bR),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cx),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,xR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,SR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*l,c[13]+=r-c[1]*n-c[5]*r-c[9]*l,c[14]+=l-c[2]*n-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(n){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),y=f(e.animations),T=f(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Ai.DEFAULT_UP=new ce(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vu extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yR={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const b=n.getJointPose(w,r),S=this._getHandJoint(m,w);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&g>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=n.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yR)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Pb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Gh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,n),this}setRGB(e,n,r,l=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(e,n,r,l=Ut.workingColorSpace){if(e=cR(e,1),n=Nt(n,0,1),r=Nt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Gh(f,c,e+1/3),this.g=Gh(f,c,e),this.b=Gh(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,n=xn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const r=Pb[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Ut.workingToColorSpace(Kn.copy(this),e),Math.round(Nt(Kn.r*255,0,255))*65536+Math.round(Nt(Kn.g*255,0,255))*256+Math.round(Nt(Kn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.workingToColorSpace(Kn.copy(this),n);const r=Kn.r,l=Kn.g,c=Kn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const _=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=_<=.5?v/(f+h):v/(2-f-h),f){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Ut.workingColorSpace){return Ut.workingToColorSpace(Kn.copy(this),n),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=xn){Ut.workingToColorSpace(Kn.copy(this),e);const n=Kn.r,r=Kn.g,l=Kn.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(_u);const r=Ph(Er.h,_u.h,n),l=Ph(Er.s,_u.s,n),c=Ph(Er.l,_u.l,n);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Xt;Xt.NAMES=Pb;class mm extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wi=new ce,La=new ce,Vh=new ce,Pa=new ce,no=new ce,io=new ce,wx=new ce,kh=new ce,Xh=new ce,Wh=new ce,$h=new Sn,qh=new Sn,Yh=new Sn;class qi{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,l){l.subVectors(r,n),Wi.subVectors(e,n),l.cross(Wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,r,l,c){Wi.subVectors(l,n),La.subVectors(r,n),Vh.subVectors(e,n);const f=Wi.dot(Wi),h=Wi.dot(La),p=Wi.dot(Vh),m=La.dot(La),_=La.dot(Vh),v=f*m-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(m*p-h*_)*g,T=(f*_-h*p)*g;return c.set(1-y-T,T,y)}static containsPoint(e,n,r,l){return this.getBarycoord(e,n,r,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(e,n,r,l,c,f,h,p){return this.getBarycoord(e,n,r,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Pa.x),p.addScaledVector(f,Pa.y),p.addScaledVector(h,Pa.z),p)}static getInterpolatedAttribute(e,n,r,l,c,f){return $h.setScalar(0),qh.setScalar(0),Yh.setScalar(0),$h.fromBufferAttribute(e,n),qh.fromBufferAttribute(e,r),Yh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector($h,c.x),f.addScaledVector(qh,c.y),f.addScaledVector(Yh,c.z),f}static isFrontFacing(e,n,r,l){return Wi.subVectors(r,n),La.subVectors(e,n),Wi.cross(La).dot(l)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,l){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,r,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Wi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,l,c){return qi.getInterpolation(e,this.a,this.b,this.c,n,r,l,c)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,l=this.b,c=this.c;let f,h;no.subVectors(l,r),io.subVectors(c,r),kh.subVectors(e,r);const p=no.dot(kh),m=io.dot(kh);if(p<=0&&m<=0)return n.copy(r);Xh.subVectors(e,l);const _=no.dot(Xh),v=io.dot(Xh);if(_>=0&&v<=_)return n.copy(l);const g=p*v-_*m;if(g<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(no,f);Wh.subVectors(e,c);const y=no.dot(Wh),T=io.dot(Wh);if(T>=0&&y<=T)return n.copy(c);const w=y*m-p*T;if(w<=0&&m>=0&&T<=0)return h=m/(m-T),n.copy(r).addScaledVector(io,h);const b=_*T-y*v;if(b<=0&&v-_>=0&&y-T>=0)return wx.subVectors(c,l),h=(v-_)/(v-_+(y-T)),n.copy(l).addScaledVector(wx,h);const S=1/(b+w+g);return f=w*S,h=g*S,n.copy(r).addScaledVector(no,f).addScaledVector(io,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ql{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint($i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint($i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=$i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,$i):$i.fromBufferAttribute(c,f),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xu.copy(r.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),Su.subVectors(this.max,Cl),ao.subVectors(e.a,Cl),ro.subVectors(e.b,Cl),so.subVectors(e.c,Cl),Tr.subVectors(ro,ao),Ar.subVectors(so,ro),ns.subVectors(ao,so);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-ns.z,ns.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,ns.z,0,-ns.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-ns.y,ns.x,0];return!jh(n,ao,ro,so,Su)||(n=[1,0,0,0,1,0,0,0,1],!jh(n,ao,ro,so,Su))?!1:(bu.crossVectors(Tr,Ar),n=[bu.x,bu.y,bu.z],jh(n,ao,ro,so,Su))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],$i=new ce,xu=new ql,ao=new ce,ro=new ce,so=new ce,Tr=new ce,Ar=new ce,ns=new ce,Cl=new ce,Su=new ce,bu=new ce,is=new ce;function jh(a,e,n,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){is.fromArray(a,c);const h=l.x*Math.abs(is.x)+l.y*Math.abs(is.y)+l.z*Math.abs(is.z),p=e.dot(is),m=n.dot(is),_=r.dot(is);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const An=new ce,yu=new bt;let MR=0;class Bi extends $a{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=gx,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)yu.fromBufferAttribute(this,n),yu.applyMatrix3(e),this.setXY(n,yu.x,yu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)An.fromBufferAttribute(this,n),An.applyMatrix3(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)An.fromBufferAttribute(this,n),An.applyMatrix4(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)An.fromBufferAttribute(this,n),An.applyNormalMatrix(e),this.setXYZ(n,An.x,An.y,An.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)An.fromBufferAttribute(this,n),An.transformDirection(e),this.setXYZ(n,An.x,An.y,An.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Al(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Al(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Al(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Al(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Al(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,l){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),l=ci(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,n,r,l,c){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ob extends Bi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ib extends Bi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ha extends Bi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const ER=new ql,wl=new ce,Kh=new ce;class Im{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ER.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const n=wl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(wl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(Kh)),this.expandByPoint(wl.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let TR=0;const Ii=new Dn,Zh=new Ai,oo=new ce,Ei=new ql,Dl=new ql,Pn=new ce;class da extends $a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TR++}),this.uuid=$l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rR(e)?Ib:Ob)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,n,r){return Ii.makeTranslation(e,n,r),this.applyMatrix4(Ii),this}scale(e,n,r){return Ii.makeScale(e,n,r),this.applyMatrix4(Ii),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ha(r,3))}else{const r=Math.min(e.length,n.count);for(let l=0;l<r;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];Ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Im);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Pn.addVectors(Ei.min,Dl.min),Ei.expandByPoint(Pn),Pn.addVectors(Ei.max,Dl.max),Ei.expandByPoint(Pn)):(Ei.expandByPoint(Dl.min),Ei.expandByPoint(Dl.max))}Ei.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Pn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Pn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)Pn.fromBufferAttribute(h,m),p&&(oo.fromBufferAttribute(e,m),Pn.add(oo)),l=Math.max(l,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let M=0;M<r.count;M++)h[M]=new ce,p[M]=new ce;const m=new ce,_=new ce,v=new ce,g=new bt,y=new bt,T=new bt,w=new ce,b=new ce;function S(M,F,Z){m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,F),v.fromBufferAttribute(r,Z),g.fromBufferAttribute(c,M),y.fromBufferAttribute(c,F),T.fromBufferAttribute(c,Z),_.sub(m),v.sub(m),y.sub(g),T.sub(g);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(k),b.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(k),h[M].add(w),h[F].add(w),h[Z].add(w),p[M].add(b),p[F].add(b),p[Z].add(b))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let M=0,F=C.length;M<F;++M){const Z=C[M],k=Z.start,J=Z.count;for(let fe=k,H=k+J;fe<H;fe+=3)S(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const N=new ce,P=new ce,X=new ce,z=new ce;function G(M){X.fromBufferAttribute(l,M),z.copy(X);const F=h[M];N.copy(F),N.sub(X.multiplyScalar(X.dot(F))).normalize(),P.crossVectors(z,F);const k=P.dot(p[M])<0?-1:1;f.setXYZW(M,N.x,N.y,N.z,k)}for(let M=0,F=C.length;M<F;++M){const Z=C[M],k=Z.start,J=Z.count;for(let fe=k,H=k+J;fe<H;fe+=3)G(e.getX(fe+0)),G(e.getX(fe+1)),G(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const l=new ce,c=new ce,f=new ce,h=new ce,p=new ce,m=new ce,_=new ce,v=new ce;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),w=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.add(_),p.add(_),m.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(b,m.x,m.y,m.z)}else for(let g=0,y=n.count;g<y;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,v=h.normalized,g=new m.constructor(p.length*_);let y=0,T=0;for(let w=0,b=p.length;w<b;w++){h.isInterleavedBufferAttribute?y=p[w]*h.data.stride+h.offset:y=p[w]*_;for(let S=0;S<_;S++)g[T++]=m[y++]}return new Bi(g,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new da,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,v=m.length;_<v;_++){const g=m[_],y=e(g,r);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,g=m.length;v<g;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let AR=0;class wo extends $a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=$l(),this.name="",this.type="Material",this.blending=mo,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ap&&(r.blendSrc=this.blendSrc),this.blendDst!==Rp&&(r.blendDst=this.blendDst),this.blendEquation!==os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ia=new ce,Qh=new ce,Mu=new ce,Rr=new ce,Jh=new ce,Eu=new ce,ep=new ce;class RR{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ia)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ia.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ia.copy(this.origin).addScaledVector(this.direction,n),Ia.distanceToSquared(e))}distanceSqToSegment(e,n,r,l){Qh.copy(e).add(n).multiplyScalar(.5),Mu.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Qh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Mu),h=Rr.dot(this.direction),p=-Rr.dot(Mu),m=Rr.lengthSq(),_=Math.abs(1-f*f);let v,g,y,T;if(_>0)if(v=f*p-h,g=f*h-p,T=c*_,v>=0)if(g>=-T)if(g<=T){const w=1/_;v*=w,g*=w,y=v*(v+f*g+2*h)+g*(f*v+g+2*p)+m}else g=c,v=Math.max(0,-(f*g+h)),y=-v*v+g*(g+2*p)+m;else g=-c,v=Math.max(0,-(f*g+h)),y=-v*v+g*(g+2*p)+m;else g<=-T?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+g*(g+2*p)+m):g<=T?(v=0,g=Math.min(Math.max(-c,-p),c),y=g*(g+2*p)+m):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+g*(g+2*p)+m);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),y=-v*v+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qh).addScaledVector(Mu,g),y}intersectSphere(e,n){Ia.subVectors(e.center,this.origin);const r=Ia.dot(this.direction),l=Ia.dot(Ia)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,l,c,f,h,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,l=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,l=(e.min.x-g.x)*m),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,p=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,p=(e.min.z-g.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(e){return this.intersectBox(e,Ia)!==null}intersectTriangle(e,n,r,l,c){Jh.subVectors(n,e),Eu.subVectors(r,e),ep.crossVectors(Jh,Eu);let f=this.direction.dot(ep),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Rr.subVectors(this.origin,e);const p=h*this.direction.dot(Eu.crossVectors(Rr,Eu));if(p<0)return null;const m=h*this.direction.dot(Jh.cross(Rr));if(m<0||p+m>f)return null;const _=-h*Rr.dot(ep);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fb extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=mb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dx=new Dn,as=new RR,Tu=new Im,Ux=new ce,Au=new ce,Ru=new ce,Cu=new ce,tp=new ce,wu=new ce,Nx=new ce,Du=new ce;class Zi extends Ai{constructor(e=new da,n=new Fb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){wu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],v=c[p];_!==0&&(tp.fromBufferAttribute(v,e),f?wu.addScaledVector(tp,_):wu.addScaledVector(tp.sub(n),_))}n.add(wu)}return n}raycast(e,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(c),as.copy(e.ray).recast(e.near),!(Tu.containsPoint(as.origin)===!1&&(as.intersectSphere(Tu,Ux)===null||as.origin.distanceToSquared(Ux)>(e.far-e.near)**2))&&(Dx.copy(c).invert(),as.copy(e.ray).applyMatrix4(Dx),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const b=g[T],S=f[b.materialIndex],C=Math.max(b.start,y.start),N=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let P=C,X=N;P<X;P+=3){const z=h.getX(P),G=h.getX(P+1),M=h.getX(P+2);l=Uu(this,S,e,r,m,_,v,z,G,M),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let b=T,S=w;b<S;b+=3){const C=h.getX(b),N=h.getX(b+1),P=h.getX(b+2);l=Uu(this,f,e,r,m,_,v,C,N,P),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const b=g[T],S=f[b.materialIndex],C=Math.max(b.start,y.start),N=Math.min(p.count,Math.min(b.start+b.count,y.start+y.count));for(let P=C,X=N;P<X;P+=3){const z=P,G=P+1,M=P+2;l=Uu(this,S,e,r,m,_,v,z,G,M),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let b=T,S=w;b<S;b+=3){const C=b,N=b+1,P=b+2;l=Uu(this,f,e,r,m,_,v,C,N,P),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}}}function CR(a,e,n,r,l,c,f,h){let p;if(e.side===On?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,e.side===Va,h),p===null)return null;Du.copy(h),Du.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(Du);return m<n.near||m>n.far?null:{distance:m,point:Du.clone(),object:a}}function Uu(a,e,n,r,l,c,f,h,p,m){a.getVertexPosition(h,Au),a.getVertexPosition(p,Ru),a.getVertexPosition(m,Cu);const _=CR(a,e,n,r,Au,Ru,Cu,Nx);if(_){const v=new ce;qi.getBarycoord(Nx,Au,Ru,Cu,v),l&&(_.uv=qi.getInterpolatedAttribute(l,h,p,m,v,new bt)),c&&(_.uv1=qi.getInterpolatedAttribute(c,h,p,m,v,new bt)),f&&(_.normal=qi.getInterpolatedAttribute(f,h,p,m,v,new ce),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new ce,materialIndex:0};qi.getNormal(Au,Ru,Cu,g.normal),_.face=g,_.barycoord=v}return _}class wR extends In{constructor(e=null,n=1,r=1,l,c,f,h,p,m=Wn,_=Wn,v,g){super(null,f,h,p,m,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const np=new ce,DR=new ce,UR=new dt;class ss{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,l){return this.normal.set(e,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const l=np.subVectors(r,n).cross(DR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const l=e.delta(np),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||UR.getNormalMatrix(e),l=this.coplanarPoint(np).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Im,NR=new bt(.5,.5),Nu=new ce;class Bb{constructor(e=new ss,n=new ss,r=new ss,l=new ss,c=new ss,f=new ss){this.planes=[e,n,r,l,c,f]}set(e,n,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=la,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],p=c[2],m=c[3],_=c[4],v=c[5],g=c[6],y=c[7],T=c[8],w=c[9],b=c[10],S=c[11],C=c[12],N=c[13],P=c[14],X=c[15];if(l[0].setComponents(m-f,y-_,S-T,X-C).normalize(),l[1].setComponents(m+f,y+_,S+T,X+C).normalize(),l[2].setComponents(m+h,y+v,S+w,X+N).normalize(),l[3].setComponents(m-h,y-v,S-w,X-N).normalize(),r)l[4].setComponents(p,g,b,P).normalize(),l[5].setComponents(m-p,y-g,S-b,X-P).normalize();else if(l[4].setComponents(m-p,y-g,S-b,X-P).normalize(),n===la)l[5].setComponents(m+p,y+g,S+b,X+P).normalize();else if(n===Ju)l[5].setComponents(p,g,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const n=NR.distanceTo(e.center);return rs.radius=.7071067811865476+n,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const n=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zb extends In{constructor(e=[],n=hs,r,l,c,f,h,p,m,_){super(e,n,r,l,c,f,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gs extends In{constructor(e,n,r=fa,l,c,f,h=Wn,p=Wn,m,_=Xa,v=1){if(_!==Xa&&_!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,l,c,f,h,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LR extends gs{constructor(e,n=fa,r=hs,l,c,f=Wn,h=Wn,p,m=Xa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,r,l,c,f,h,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hb extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends da{constructor(e=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],v=[];let g=0,y=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,l,f,2),T("x","z","y",1,-1,e,r,-n,l,f,3),T("x","y","z",1,-1,e,n,r,l,c,4),T("x","y","z",-1,-1,e,n,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Ha(m,3)),this.setAttribute("normal",new Ha(_,3)),this.setAttribute("uv",new Ha(v,2));function T(w,b,S,C,N,P,X,z,G,M,F){const Z=P/G,k=X/M,J=P/2,fe=X/2,H=z/2,B=G+1,U=M+1;let D=0,I=0;const V=new ce;for(let se=0;se<U;se++){const O=se*k-fe;for(let Y=0;Y<B;Y++){const de=Y*Z-J;V[w]=de*C,V[b]=O*N,V[S]=H,m.push(V.x,V.y,V.z),V[w]=0,V[b]=0,V[S]=z>0?1:-1,_.push(V.x,V.y,V.z),v.push(Y/G),v.push(1-se/M),D+=1}}for(let se=0;se<M;se++)for(let O=0;O<G;O++){const Y=g+O+B*se,de=g+O+B*(se+1),ye=g+(O+1)+B*(se+1),Te=g+(O+1)+B*se;p.push(Y,de,Te),p.push(de,ye,Te),I+=6}h.addGroup(y,I,F),y+=I,g+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jl extends da{constructor(e=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:l};const c=e/2,f=n/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,v=e/h,g=n/p,y=[],T=[],w=[],b=[];for(let S=0;S<_;S++){const C=S*g-f;for(let N=0;N<m;N++){const P=N*v-c;T.push(P,-C,0),w.push(0,0,1),b.push(N/h),b.push(1-S/p)}}for(let S=0;S<p;S++)for(let C=0;C<h;C++){const N=C+m*S,P=C+m*(S+1),X=C+1+m*(S+1),z=C+1+m*S;y.push(N,P,z),y.push(P,X,z)}this.setIndex(y),this.setAttribute("position",new Ha(T,3)),this.setAttribute("normal",new Ha(w,3)),this.setAttribute("uv",new Ha(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Mo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const l=a[n][r];if(Lx(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=l.clone();else if(Array.isArray(l))if(Lx(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[n][r]=c}else e[n][r]=l.slice();else e[n][r]=l}}return e}function ti(a){const e={};for(let n=0;n<a.length;n++){const r=Mo(a[n]);for(const l in r)e[l]=r[l]}return e}function Lx(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function PR(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Gb(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const OR={clone:Mo,merge:ti};var IR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IR,this.fragmentShader=FR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=PR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class BR extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zR extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HR extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lu=new ce,Pu=new Co,aa=new ce;class Vb extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dn,this.projectionMatrix=new Dn,this.projectionMatrixInverse=new Dn,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lu,Pu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Pu,aa.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Lu,Pu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Pu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ce,Px=new bt,Ox=new bt;class Fi extends Vb{constructor(e=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pm*2*Math.atan(Math.tan(Lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Px,Ox),n.subVectors(Ox,Px)}setViewOffset(e,n,r,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lh*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cf extends Vb{constructor(e=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const lo=-90,co=1;class GR extends Ai{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Fi(lo,co,e,n);l.layers=this.layers,this.add(l);const c=new Fi(lo,co,e,n);c.layers=this.layers,this.add(c);const f=new Fi(lo,co,e,n);f.layers=this.layers,this.add(f);const h=new Fi(lo,co,e,n);h.layers=this.layers,this.add(h);const p=new Fi(lo,co,e,n);p.layers=this.layers,this.add(p);const m=new Fi(lo,co,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(e===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class VR extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _n{constructor(e){this.value=e}clone(){return new _n(this.value.clone===void 0?this.value:this.value.clone())}}class kR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Gm=class Gm{constructor(e,n,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,l){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=l,this}};Gm.prototype.isMatrix2=!0;let Ix=Gm;function Fx(a,e,n,r){const l=XR(r);switch(n){case Cb:return a*e;case Db:return a*e/l.components*l.byteLength;case Dm:return a*e/l.components*l.byteLength;case ps:return a*e*2/l.components*l.byteLength;case Um:return a*e*2/l.components*l.byteLength;case wb:return a*e*3/l.components*l.byteLength;case ji:return a*e*4/l.components*l.byteLength;case Nm:return a*e*4/l.components*l.byteLength;case Hu:case Gu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Vu:case ku:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fp:case zp:return Math.max(a,16)*Math.max(e,8)/4;case Ip:case Bp:return Math.max(a,8)*Math.max(e,8)/2;case Hp:case Gp:case kp:case Xp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Vp:case Ku:case Wp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case am:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case rm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case sm:case om:case lm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case cm:case um:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Zu:case fm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XR(a){switch(a){case Zn:case Eb:return{byteLength:1,components:1};case Vl:case Tb:case ka:return{byteLength:2,components:1};case Cm:case wm:return{byteLength:2,components:4};case fa:case Rm:case Yi:return{byteLength:4,components:1};case Ab:case Rb:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kb(){let a=null,e=!1,n=null,r=null;function l(c,f){n(c,f),r=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(l),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function WR(a){const e=new WeakMap;function n(h,p){const m=h.array,_=h.usage,v=m.byteLength,g=a.createBuffer();a.bindBuffer(p,g),a.bufferData(p,m,_),h.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const _=p.array,v=p.updateRanges;if(a.bindBuffer(m,h),v.length===0)a.bufferSubData(m,0,_);else{v.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<v.length;y++){const T=v[g],w=v[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,T=v.length;y<T;y++){const w=v[y];a.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var $R=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,t2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y2="gl_FragColor = linearToOutputTexel( gl_FragColor );",M2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,B2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_C=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $C=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:$R,alphahash_pars_fragment:qR,alphamap_fragment:YR,alphamap_pars_fragment:jR,alphatest_fragment:KR,alphatest_pars_fragment:ZR,aomap_fragment:QR,aomap_pars_fragment:JR,batching_pars_vertex:e2,batching_vertex:t2,begin_vertex:n2,beginnormal_vertex:i2,bsdfs:a2,iridescence_fragment:r2,bumpmap_pars_fragment:s2,clipping_planes_fragment:o2,clipping_planes_pars_fragment:l2,clipping_planes_pars_vertex:c2,clipping_planes_vertex:u2,color_fragment:f2,color_pars_fragment:d2,color_pars_vertex:h2,color_vertex:p2,common:m2,cube_uv_reflection_fragment:g2,defaultnormal_vertex:v2,displacementmap_pars_vertex:_2,displacementmap_vertex:x2,emissivemap_fragment:S2,emissivemap_pars_fragment:b2,colorspace_fragment:y2,colorspace_pars_fragment:M2,envmap_fragment:E2,envmap_common_pars_fragment:T2,envmap_pars_fragment:A2,envmap_pars_vertex:R2,envmap_physical_pars_fragment:B2,envmap_vertex:C2,fog_vertex:w2,fog_pars_vertex:D2,fog_fragment:U2,fog_pars_fragment:N2,gradientmap_pars_fragment:L2,lightmap_pars_fragment:P2,lights_lambert_fragment:O2,lights_lambert_pars_fragment:I2,lights_pars_begin:F2,lights_toon_fragment:z2,lights_toon_pars_fragment:H2,lights_phong_fragment:G2,lights_phong_pars_fragment:V2,lights_physical_fragment:k2,lights_physical_pars_fragment:X2,lights_fragment_begin:W2,lights_fragment_maps:$2,lights_fragment_end:q2,lightprobes_pars_fragment:Y2,logdepthbuf_fragment:j2,logdepthbuf_pars_fragment:K2,logdepthbuf_pars_vertex:Z2,logdepthbuf_vertex:Q2,map_fragment:J2,map_pars_fragment:eC,map_particle_fragment:tC,map_particle_pars_fragment:nC,metalnessmap_fragment:iC,metalnessmap_pars_fragment:aC,morphinstance_vertex:rC,morphcolor_vertex:sC,morphnormal_vertex:oC,morphtarget_pars_vertex:lC,morphtarget_vertex:cC,normal_fragment_begin:uC,normal_fragment_maps:fC,normal_pars_fragment:dC,normal_pars_vertex:hC,normal_vertex:pC,normalmap_pars_fragment:mC,clearcoat_normal_fragment_begin:gC,clearcoat_normal_fragment_maps:vC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:xC,opaque_fragment:SC,packing:bC,premultiplied_alpha_fragment:yC,project_vertex:MC,dithering_fragment:EC,dithering_pars_fragment:TC,roughnessmap_fragment:AC,roughnessmap_pars_fragment:RC,shadowmap_pars_fragment:CC,shadowmap_pars_vertex:wC,shadowmap_vertex:DC,shadowmask_pars_fragment:UC,skinbase_vertex:NC,skinning_pars_vertex:LC,skinning_vertex:PC,skinnormal_vertex:OC,specularmap_fragment:IC,specularmap_pars_fragment:FC,tonemapping_fragment:BC,tonemapping_pars_fragment:zC,transmission_fragment:HC,transmission_pars_fragment:GC,uv_pars_fragment:VC,uv_pars_vertex:kC,uv_vertex:XC,worldpos_vertex:WC,background_vert:$C,background_frag:qC,backgroundCube_vert:YC,backgroundCube_frag:jC,cube_vert:KC,cube_frag:ZC,depth_vert:QC,depth_frag:JC,distance_vert:e3,distance_frag:t3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:a3,linedashed_frag:r3,meshbasic_vert:s3,meshbasic_frag:o3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:f3,meshnormal_vert:d3,meshnormal_frag:h3,meshphong_vert:p3,meshphong_frag:m3,meshphysical_vert:g3,meshphysical_frag:v3,meshtoon_vert:_3,meshtoon_frag:x3,points_vert:S3,points_frag:b3,shadow_vert:y3,shadow_frag:M3,sprite_vert:E3,sprite_frag:T3},Ge={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},sa={basic:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:ti([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:ti([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Xt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:ti([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:ti([Ge.points,Ge.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:ti([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:ti([Ge.common,Ge.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:ti([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:ti([Ge.sprite,Ge.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:ti([Ge.common,Ge.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:ti([Ge.lights,Ge.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};sa.physical={uniforms:ti([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ou={r:0,b:0,g:0},A3=new Dn,Xb=new dt;Xb.set(-1,0,0,0,1,0,0,0,1);function R3(a,e,n,r,l,c){const f=new Xt(0);let h=l===!0?0:1,p,m,_=null,v=0,g=null;function y(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const P=C.backgroundBlurriness>0;N=e.get(N,P)}return N}function T(C){let N=!1;const P=y(C);P===null?b(f,h):P&&P.isColor&&(b(P,1),N=!0);const X=a.xr.getEnvironmentBlendMode();X==="additive"?n.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(C,N){const P=y(N);P&&(P.isCubeTexture||P.mapping===lf)?(m===void 0&&(m=new Zi(new Yl(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Mo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(X,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(A3.makeRotationFromEuler(N.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Xb),m.material.toneMapped=Ut.getTransfer(P.colorSpace)!==Kt,(_!==P||v!==P.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,g=a.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Zi(new jl(2,2),new fi({name:"BackgroundMaterial",uniforms:Mo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(P.colorSpace)!==Kt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=P,v=P.version,g=a.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function b(C,N){C.getRGB(Ou,Gb(a)),n.buffers.color.setClear(Ou.r,Ou.g,Ou.b,N,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,N=1){f.set(C),h=N,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,b(f,h)},render:T,addToRenderList:w,dispose:S}}function C3(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function h(k,J,fe,H,B){let U=!1;const D=v(k,H,fe,J);c!==D&&(c=D,m(c.object)),U=y(k,H,fe,B),U&&T(k,H,fe,B),B!==null&&e.update(B,a.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,P(k,J,fe,H),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function p(){return a.createVertexArray()}function m(k){return a.bindVertexArray(k)}function _(k){return a.deleteVertexArray(k)}function v(k,J,fe,H){const B=H.wireframe===!0;let U=r[J.id];U===void 0&&(U={},r[J.id]=U);const D=k.isInstancedMesh===!0?k.id:0;let I=U[D];I===void 0&&(I={},U[D]=I);let V=I[fe.id];V===void 0&&(V={},I[fe.id]=V);let se=V[B];return se===void 0&&(se=g(p()),V[B]=se),se}function g(k){const J=[],fe=[],H=[];for(let B=0;B<n;B++)J[B]=0,fe[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:fe,attributeDivisors:H,object:k,attributes:{},index:null}}function y(k,J,fe,H){const B=c.attributes,U=J.attributes;let D=0;const I=fe.getAttributes();for(const V in I)if(I[V].location>=0){const O=B[V];let Y=U[V];if(Y===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(Y=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(Y=k.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;D++}return c.attributesNum!==D||c.index!==H}function T(k,J,fe,H){const B={},U=J.attributes;let D=0;const I=fe.getAttributes();for(const V in I)if(I[V].location>=0){let O=U[V];O===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),B[V]=Y,D++}c.attributes=B,c.attributesNum=D,c.index=H}function w(){const k=c.newAttributes;for(let J=0,fe=k.length;J<fe;J++)k[J]=0}function b(k){S(k,0)}function S(k,J){const fe=c.newAttributes,H=c.enabledAttributes,B=c.attributeDivisors;fe[k]=1,H[k]===0&&(a.enableVertexAttribArray(k),H[k]=1),B[k]!==J&&(a.vertexAttribDivisor(k,J),B[k]=J)}function C(){const k=c.newAttributes,J=c.enabledAttributes;for(let fe=0,H=J.length;fe<H;fe++)J[fe]!==k[fe]&&(a.disableVertexAttribArray(fe),J[fe]=0)}function N(k,J,fe,H,B,U,D){D===!0?a.vertexAttribIPointer(k,J,fe,B,U):a.vertexAttribPointer(k,J,fe,H,B,U)}function P(k,J,fe,H){w();const B=H.attributes,U=fe.getAttributes(),D=J.defaultAttributeValues;for(const I in U){const V=U[I];if(V.location>=0){let se=B[I];if(se===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),se!==void 0){const O=se.normalized,Y=se.itemSize,de=e.get(se);if(de===void 0)continue;const ye=de.buffer,Te=de.type,te=de.bytesPerElement,ge=Te===a.INT||Te===a.UNSIGNED_INT||se.gpuType===Rm;if(se.isInterleavedBufferAttribute){const Me=se.data,Be=Me.stride,Je=se.offset;if(Me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve,Me.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)b(V.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let Ve=0;Ve<V.locationSize;Ve++)N(V.location+Ve,Y/V.locationSize,Te,O,Be*te,(Je+Y/V.locationSize*Ve)*te,ge)}else{if(se.isInstancedBufferAttribute){for(let Me=0;Me<V.locationSize;Me++)S(V.location+Me,se.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Me=0;Me<V.locationSize;Me++)b(V.location+Me);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let Me=0;Me<V.locationSize;Me++)N(V.location+Me,Y/V.locationSize,Te,O,Y*te,Y/V.locationSize*Me*te,ge)}}else if(D!==void 0){const O=D[I];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(V.location,O);break;case 3:a.vertexAttrib3fv(V.location,O);break;case 4:a.vertexAttrib4fv(V.location,O);break;default:a.vertexAttrib1fv(V.location,O)}}}}C()}function X(){F();for(const k in r){const J=r[k];for(const fe in J){const H=J[fe];for(const B in H){const U=H[B];for(const D in U)_(U[D].object),delete U[D];delete H[B]}}delete r[k]}}function z(k){if(r[k.id]===void 0)return;const J=r[k.id];for(const fe in J){const H=J[fe];for(const B in H){const U=H[B];for(const D in U)_(U[D].object),delete U[D];delete H[B]}}delete r[k.id]}function G(k){for(const J in r){const fe=r[J];for(const H in fe){const B=fe[H];if(B[k.id]===void 0)continue;const U=B[k.id];for(const D in U)_(U[D].object),delete U[D];delete B[k.id]}}}function M(k){for(const J in r){const fe=r[J],H=k.isInstancedMesh===!0?k.id:0,B=fe[H];if(B!==void 0){for(const U in B){const D=B[U];for(const I in D)_(D[I].object),delete D[I];delete B[U]}delete fe[H],Object.keys(fe).length===0&&delete r[J]}}}function F(){Z(),f=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:Z,dispose:X,releaseStatesOfGeometry:z,releaseStatesOfObject:M,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:b,disableUnusedAttributes:C}}function w3(a,e,n){let r;function l(p){r=p}function c(p,m){a.drawArrays(r,p,m),n.update(m,r,1)}function f(p,m,_){_!==0&&(a.drawArraysInstanced(r,p,m,_),n.update(m,r,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let g=0;for(let y=0;y<_;y++)g+=m[y];n.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function D3(a,e,n,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(G){return!(G!==ji&&r.convert(G)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const M=G===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==Zn&&r.convert(G)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Yi&&!M)}function p(G){if(G==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(rt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),C=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),P=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),X=a.getParameter(a.MAX_SAMPLES),z=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:P,maxSamples:X,samples:z}}function U3(a){const e=this;let n=null,r=0,l=!1,c=!1;const f=new ss,h=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||r!==0||l;return l=g,r=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,y){const T=v.clippingPlanes,w=v.clipIntersection,b=v.clipShadows,S=a.get(v);if(!l||T===null||T.length===0||c&&!b)c?_(null):m();else{const C=c?0:r,N=C*4;let P=S.clippingState||null;p.value=P,P=_(T,g,N,y);for(let X=0;X!==N;++X)P[X]=n[X];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,y,T){const w=v!==null?v.length:0;let b=null;if(w!==0){if(b=p.value,T!==!0||b===null){const S=y+w*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(b===null||b.length<S)&&(b=new Float32Array(S));for(let N=0,P=y;N!==w;++N,P+=4)f.copy(v[N]).applyMatrix4(C,h),f.normal.toArray(b,P),b[P+3]=f.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,b}}const Ur=4,Bx=[.125,.215,.35,.446,.526,.582],ls=20,N3=256,Ul=new cf,zx=new Xt;let ip=null,ap=0,rp=0,sp=!1;const L3=new ce;class Hx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,l=100,c={}){const{size:f=256,position:h=L3}=c;ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,ap,rp),this._renderer.xr.enabled=sp,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hs||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ka,format:ji,colorSpace:yo,depthBuffer:!1},l=Gx(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gx(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P3(c)),this._blurMaterial=I3(c,e,n),this._ggxMaterial=O3(c,e,n)}return l}_compileMaterial(e){const n=new Zi(new da,e);this._renderer.compile(n,Ul)}_sceneToCubeUV(e,n,r,l,c){const p=new Fi(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(zx),v.toneMapping=ca,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zi(new Yl,new Fb({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,b=w.material;let S=!1;const C=e.background;C?C.isColor&&(b.color.copy(C),e.background=null,S=!0):(b.color.copy(zx),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):P===1?(p.up.set(0,0,m[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const X=this._cubeSize;uo(l,P*X,N>2?X:0,X,X),v.setRenderTarget(l),S&&v.render(w,p),v.render(e,p)}v.toneMapping=y,v.autoClear=g,e.background=C}_textureToCubeUV(e,n){const r=this._renderer,l=e.mapping===hs||e.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;uo(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Ul)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const p=f.uniforms,m=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(m*m-_*_),g=0+m*1.25,y=v*g,{_lodMax:T}=this,w=this._sizeLods[r],b=3*w*(r>T-Ur?r-T+Ur:0),S=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=T-n,uo(c,b,S,3*w,2*w),l.setRenderTarget(c),l.render(h,Ul),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,uo(e,b,S,3*w,2*w),l.setRenderTarget(e),l.render(h,Ul)}_blur(e,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,n,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=m;const g=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ls-1),w=c/T,b=isFinite(c)?1+Math.floor(_*w):ls;b>ls&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ls}`);const S=[];let C=0;for(let G=0;G<ls;++G){const M=G/w,F=Math.exp(-M*M/2);S.push(F),G===0?C+=F:G<b&&(C+=2*F)}for(let G=0;G<S.length;G++)S[G]=S[G]/C;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-r;const P=this._sizeLods[l],X=3*P*(l>N-Ur?l-N+Ur:0),z=4*(this._cubeSize-P);uo(n,X,z,3*P,2*P),p.setRenderTarget(n),p.render(v,Ul)}}function P3(a){const e=[],n=[],r=[];let l=a;const c=a-Ur+1+Bx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let p=1/h;f>a-Ur?p=Bx[f-a+Ur-1]:f===0&&(p=0),n.push(p);const m=1/(h-2),_=-m,v=1+m,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,w=3,b=2,S=1,C=new Float32Array(w*T*y),N=new Float32Array(b*T*y),P=new Float32Array(S*T*y);for(let z=0;z<y;z++){const G=z%3*2/3-1,M=z>2?0:-1,F=[G,M,0,G+2/3,M,0,G+2/3,M+1,0,G,M,0,G+2/3,M+1,0,G,M+1,0];C.set(F,w*T*z),N.set(g,b*T*z);const Z=[z,z,z,z,z,z];P.set(Z,S*T*z)}const X=new da;X.setAttribute("position",new Bi(C,w)),X.setAttribute("uv",new Bi(N,b)),X.setAttribute("faceIndex",new Bi(P,S)),r.push(new Zi(X,null)),l>Ur&&l--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Gx(a,e,n){const r=new ni(a,e,n);return r.texture.mapping=lf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uo(a,e,n,r,l){a.viewport.set(e,n,r,l),a.scissor.set(e,n,r,l)}function O3(a,e,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function I3(a,e,n){const r=new Float32Array(ls),l=new ce(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vx(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function kx(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wb extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new zb(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yl(5,5,5),c=new fi({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Ki});c.uniforms.tEquirect.value=n;const f=new Zi(l,c),h=n.minFilter;return n.minFilter===cs&&(n.minFilter=hn),new GR(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,l);e.setRenderTarget(c)}}function F3(a){let e=new WeakMap,n=new WeakMap,r=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Dh||y===Uh)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Wb(T.height);return w.fromEquirectangularTexture(a,g),e.set(g,w),g.addEventListener("dispose",m),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,T=y===Dh||y===Uh,w=y===hs||y===So;if(T||w){let b=n.get(g);const S=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new Hx(a)),b=T?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),b.texture;if(b!==void 0)return b.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&p(C)?(r===null&&(r=new Hx(a)),b=T?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,y){return y===Dh?g.mapping=hs:y===Uh&&(g.mapping=So),g}function p(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function m(g){const y=g.target;y.removeEventListener("dispose",m);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=n.get(y);T!==void 0&&(n.delete(y),T.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function B3(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const l=a.getExtension(r);return e[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&hm("WebGLRenderer: "+r+" extension not supported."),l}}}function z3(a,e,n,r){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const y in g)e.update(g[y],a.ARRAY_BUFFER)}function m(v){const g=[],y=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let N=0,P=C.length;N<P;N+=3){const X=C[N+0],z=C[N+1],G=C[N+2];g.push(X,z,z,G,G,X)}}else{const C=T.array;w=T.version;for(let N=0,P=C.length/3-1;N<P;N+=3){const X=N+0,z=N+1,G=N+2;g.push(X,z,z,G,G,X)}}const b=new(T.count>=65535?Ib:Ob)(g,1);b.version=w;const S=c.get(v);S&&e.remove(S),c.set(v,b)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function H3(a,e,n){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,g){a.drawElements(r,g,c,v*f),n.update(g,r,1)}function m(v,g,y){y!==0&&(a.drawElementsInstanced(r,g,c,v*f,y),n.update(g,r,y))}function _(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,y);let w=0;for(let b=0;b<y;b++)w+=g[b];n.update(w,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function G3(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Pt("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:r}}function V3(a,e,n){const r=new WeakMap,l=new Sn;function c(f,h,p){const m=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let Z=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",Z)};var y=Z;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let P=0;T===!0&&(P=1),w===!0&&(P=2),b===!0&&(P=3);let X=h.attributes.position.count*P,z=1;X>e.maxTextureSize&&(z=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const G=new Float32Array(X*z*4*v),M=new Nb(G,X,z,v);M.type=Yi,M.needsUpdate=!0;const F=P*4;for(let k=0;k<v;k++){const J=S[k],fe=C[k],H=N[k],B=X*z*4*k;for(let U=0;U<J.count;U++){const D=U*F;T===!0&&(l.fromBufferAttribute(J,U),G[B+D+0]=l.x,G[B+D+1]=l.y,G[B+D+2]=l.z,G[B+D+3]=0),w===!0&&(l.fromBufferAttribute(fe,U),G[B+D+4]=l.x,G[B+D+5]=l.y,G[B+D+6]=l.z,G[B+D+7]=0),b===!0&&(l.fromBufferAttribute(H,U),G[B+D+8]=l.x,G[B+D+9]=l.y,G[B+D+10]=l.z,G[B+D+11]=H.itemSize===4?l.w:1)}}g={count:v,texture:M,size:new bt(X,z)},r.set(h,g),h.addEventListener("dispose",Z)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let T=0;for(let b=0;b<m.length;b++)T+=m[b];const w=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(a,"morphTargetBaseInfluence",w),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function k3(a,e,n,r,l){let c=new WeakMap;function f(m){const _=l.render.frame,v=m.geometry,g=e.get(m,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function h(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:h}}const X3={[gb]:"LINEAR_TONE_MAPPING",[vb]:"REINHARD_TONE_MAPPING",[_b]:"CINEON_TONE_MAPPING",[xb]:"ACES_FILMIC_TONE_MAPPING",[bb]:"AGX_TONE_MAPPING",[yb]:"NEUTRAL_TONE_MAPPING",[Sb]:"CUSTOM_TONE_MAPPING"};function W3(a,e,n,r,l){const c=new ni(e,n,{type:a,depthBuffer:r,stencilBuffer:l,depthTexture:r?new gs(e,n):void 0}),f=new ni(e,n,{type:ka,depthBuffer:!1,stencilBuffer:!1}),h=new da;h.setAttribute("position",new Ha([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ha([0,2,0,0,2,0],2));const p=new BR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Zi(h,p),_=new cf(-1,1,1,-1,0,1);let v=null,g=null,y=!1,T,w=null,b=[],S=!1;this.setSize=function(C,N){c.setSize(C,N),f.setSize(C,N);for(let P=0;P<b.length;P++){const X=b[P];X.setSize&&X.setSize(C,N)}},this.setEffects=function(C){b=C,S=b.length>0&&b[0].isRenderPass===!0;const N=c.width,P=c.height;for(let X=0;X<b.length;X++){const z=b[X];z.setSize&&z.setSize(N,P)}},this.begin=function(C,N){if(y||C.toneMapping===ca&&b.length===0)return!1;if(w=N,N!==null){const P=N.width,X=N.height;(c.width!==P||c.height!==X)&&this.setSize(P,X)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=ca,!0},this.hasRenderPass=function(){return S},this.end=function(C,N){C.toneMapping=T,y=!0;let P=c,X=f;for(let z=0;z<b.length;z++){const G=b[z];if(G.enabled!==!1&&(G.render(C,X,P,N),G.needsSwap!==!1)){const M=P;P=X,X=M}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,p.defines={},Ut.getTransfer(v)===Kt&&(p.defines.SRGB_TRANSFER="");const z=X3[g];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(w),C.render(m,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),p.dispose()}}const $b=new In,gm=new gs(1,1),qb=new Nb,Yb=new mR,jb=new zb,Xx=[],Wx=[],$x=new Float32Array(16),qx=new Float32Array(9),Yx=new Float32Array(4);function Do(a,e,n){const r=a[0];if(r<=0||r>0)return a;const l=e*n;let c=Xx[l];if(c===void 0&&(c=new Float32Array(l),Xx[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,a[f].toArray(c,h)}return c}function Un(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Nn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function ff(a,e){let n=Wx[e];n===void 0&&(n=new Int32Array(e),Wx[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function $3(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function q3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;a.uniform2fv(this.addr,e),Nn(n,e)}}function Y3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Un(n,e))return;a.uniform3fv(this.addr,e),Nn(n,e)}}function j3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;a.uniform4fv(this.addr,e),Nn(n,e)}}function K3(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Un(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Un(n,r))return;Yx.set(r),a.uniformMatrix2fv(this.addr,!1,Yx),Nn(n,r)}}function Z3(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Un(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Un(n,r))return;qx.set(r),a.uniformMatrix3fv(this.addr,!1,qx),Nn(n,r)}}function Q3(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Un(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Un(n,r))return;$x.set(r),a.uniformMatrix4fv(this.addr,!1,$x),Nn(n,r)}}function J3(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function ew(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;a.uniform2iv(this.addr,e),Nn(n,e)}}function tw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;a.uniform3iv(this.addr,e),Nn(n,e)}}function nw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;a.uniform4iv(this.addr,e),Nn(n,e)}}function iw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function aw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;a.uniform2uiv(this.addr,e),Nn(n,e)}}function rw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;a.uniform3uiv(this.addr,e),Nn(n,e)}}function sw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;a.uniform4uiv(this.addr,e),Nn(n,e)}}function ow(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(gm.compareFunction=n.isReversedDepthBuffer()?Pm:Lm,c=gm):c=$b,n.setTexture2D(e||c,l)}function lw(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(e||Yb,l)}function cw(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(e||jb,l)}function uw(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(e||qb,l)}function fw(a){switch(a){case 5126:return $3;case 35664:return q3;case 35665:return Y3;case 35666:return j3;case 35674:return K3;case 35675:return Z3;case 35676:return Q3;case 5124:case 35670:return J3;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return aw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function dw(a,e){a.uniform1fv(this.addr,e)}function hw(a,e){const n=Do(e,this.size,2);a.uniform2fv(this.addr,n)}function pw(a,e){const n=Do(e,this.size,3);a.uniform3fv(this.addr,n)}function mw(a,e){const n=Do(e,this.size,4);a.uniform4fv(this.addr,n)}function gw(a,e){const n=Do(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function vw(a,e){const n=Do(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function _w(a,e){const n=Do(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function xw(a,e){a.uniform1iv(this.addr,e)}function Sw(a,e){a.uniform2iv(this.addr,e)}function bw(a,e){a.uniform3iv(this.addr,e)}function yw(a,e){a.uniform4iv(this.addr,e)}function Mw(a,e){a.uniform1uiv(this.addr,e)}function Ew(a,e){a.uniform2uiv(this.addr,e)}function Tw(a,e){a.uniform3uiv(this.addr,e)}function Aw(a,e){a.uniform4uiv(this.addr,e)}function Rw(a,e,n){const r=this.cache,l=e.length,c=ff(n,l);Un(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=gm:f=$b;for(let h=0;h!==l;++h)n.setTexture2D(e[h]||f,c[h])}function Cw(a,e,n){const r=this.cache,l=e.length,c=ff(n,l);Un(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||Yb,c[f])}function ww(a,e,n){const r=this.cache,l=e.length,c=ff(n,l);Un(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||jb,c[f])}function Dw(a,e,n){const r=this.cache,l=e.length,c=ff(n,l);Un(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||qb,c[f])}function Uw(a){switch(a){case 5126:return dw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return Sw;case 35668:case 35672:return bw;case 35669:case 35673:return yw;case 5125:return Mw;case 36294:return Ew;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Dw}}class Nw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=fw(n.type)}}class Lw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Uw(n.type)}}class Pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,n[h.id],r)}}}const op=/(\w+)(\])?(\[|\.)?/g;function jx(a,e){a.seq.push(e),a.map[e.id]=e}function Ow(a,e,n){const r=a.name,l=r.length;for(op.lastIndex=0;;){const c=op.exec(r),f=op.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){jx(n,m===void 0?new Nw(h,a,e):new Lw(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new Pw(h),jx(n,v)),n=v}}}class Xu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(n,f),p=e.getUniformLocation(n,h.name);Ow(h,p,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(e,r,l)}setOptional(e,n,r){const l=n[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,n){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&r.push(f)}return r}}function Kx(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const Iw=37297;let Fw=0;function Bw(a,e){const n=a.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const Zx=new dt;function zw(a){Ut._getMatrix(Zx,Ut.workingColorSpace,a);const e=`mat3( ${Zx.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(a)){case Qu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Qx(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+Bw(a.getShaderSource(e),h)}else return c}function Hw(a,e){const n=zw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Gw={[gb]:"Linear",[vb]:"Reinhard",[_b]:"Cineon",[xb]:"ACESFilmic",[bb]:"AgX",[yb]:"Neutral",[Sb]:"Custom"};function Vw(a,e){const n=Gw[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Iu=new ce;function kw(){Ut.getLuminanceCoefficients(Iu);const a=Iu.x.toFixed(4),e=Iu.y.toFixed(4),n=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function Ww(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function $w(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(e,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:h}}return n}function Fl(a){return a!==""}function Jx(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eS(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vm(a){return a.replace(qw,jw)}const Yw=new Map;function jw(a,e){let n=vt[e];if(n===void 0){const r=Yw.get(e);if(r!==void 0)n=vt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return vm(n)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tS(a){return a.replace(Kw,Zw)}function Zw(a,e,n,r){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function nS(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qw={[zu]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function Jw(a){return Qw[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eD={[hs]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[lf]:"ENVMAP_TYPE_CUBE_UV"};function tD(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":eD[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const nD={[So]:"ENVMAP_MODE_REFRACTION"};function iD(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":nD[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aD={[mb]:"ENVMAP_BLENDING_MULTIPLY",[jA]:"ENVMAP_BLENDING_MIX",[KA]:"ENVMAP_BLENDING_ADD"};function rD(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":aD[a.combine]||"ENVMAP_BLENDING_NONE"}function sD(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function oD(a,e,n,r){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=Jw(n),m=tD(n),_=iD(n),v=rD(n),g=sD(n),y=Xw(n),T=Ww(c),w=l.createProgram();let b,S,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fl).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fl).join(`
`),S.length>0&&(S+=`
`)):(b=[nS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),S=[nS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ca?"#define TONE_MAPPING":"",n.toneMapping!==ca?vt.tonemapping_pars_fragment:"",n.toneMapping!==ca?Vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Hw("linearToOutputTexel",n.outputColorSpace),kw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),f=vm(f),f=Jx(f,n),f=eS(f,n),h=vm(h),h=Jx(h,n),h=eS(h,n),f=tS(f),h=tS(h),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+b+f,P=C+S+h,X=Kx(l,l.VERTEX_SHADER,N),z=Kx(l,l.FRAGMENT_SHADER,P);l.attachShader(w,X),l.attachShader(w,z),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function G(k){if(a.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",fe=l.getShaderInfoLog(X)||"",H=l.getShaderInfoLog(z)||"",B=J.trim(),U=fe.trim(),D=H.trim();let I=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(I=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,w,X,z);else{const se=Qx(l,X,"vertex"),O=Qx(l,z,"fragment");Pt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+se+`
`+O)}else B!==""?rt("WebGLProgram: Program Info Log:",B):(U===""||D==="")&&(V=!1);V&&(k.diagnostics={runnable:I,programLog:B,vertexShader:{log:U,prefix:b},fragmentShader:{log:D,prefix:S}})}l.deleteShader(X),l.deleteShader(z),M=new Xu(l,w),F=$w(l,w)}let M;this.getUniforms=function(){return M===void 0&&G(this),M};let F;this.getAttributes=function(){return F===void 0&&G(this),F};let Z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(w,Iw)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=z,this}let lD=0;class cD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new uD(e),n.set(e,r)),r}}class uD{constructor(e){this.id=lD++,this.code=e,this.usedTimes=0}}function fD(a){return a===ps||a===Ku||a===Zu}function dD(a,e,n,r,l,c){const f=new Lb,h=new cD,p=new Set,m=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(M){return p.add(M),M===0?"uv":`uv${M}`}function w(M,F,Z,k,J,fe){const H=k.fog,B=J.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,D=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,I=e.get(M.envMap||U,D),V=I&&I.mapping===lf?I.image.height:null,se=y[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&rt("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Y=O!==void 0?O.length:0;let de=0;B.morphAttributes.position!==void 0&&(de=1),B.morphAttributes.normal!==void 0&&(de=2),B.morphAttributes.color!==void 0&&(de=3);let ye,Te,te,ge;if(se){const at=sa[se];ye=at.vertexShader,Te=at.fragmentShader}else ye=M.vertexShader,Te=M.fragmentShader,h.update(M),te=h.getVertexShaderID(M),ge=h.getFragmentShaderID(M);const Me=a.getRenderTarget(),Be=a.state.buffers.depth.getReversed(),Je=J.isInstancedMesh===!0,Ve=J.isBatchedMesh===!0,mt=!!M.map,lt=!!M.matcap,_t=!!I,zt=!!M.aoMap,ft=!!M.lightMap,nn=!!M.bumpMap,Vt=!!M.normalMap,ct=!!M.displacementMap,$=!!M.emissiveMap,At=!!M.metalnessMap,it=!!M.roughnessMap,St=M.anisotropy>0,we=M.clearcoat>0,sn=M.dispersion>0,L=M.iridescence>0,E=M.sheen>0,ee=M.transmission>0,Se=St&&!!M.anisotropyMap,Ae=we&&!!M.clearcoatMap,De=we&&!!M.clearcoatNormalMap,Pe=we&&!!M.clearcoatRoughnessMap,he=L&&!!M.iridescenceMap,pe=L&&!!M.iridescenceThicknessMap,Oe=E&&!!M.sheenColorMap,Ie=E&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Ue=!!M.specularColorMap,st=!!M.specularIntensityMap,ot=ee&&!!M.transmissionMap,yt=ee&&!!M.thicknessMap,q=!!M.gradientMap,Ce=!!M.alphaMap,ve=M.alphaTest>0,He=!!M.alphaHash,Le=!!M.extensions;let Ee=ca;M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const Ke={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:Te,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&J._colorsTexture!==null,instancing:Je,instancingColor:Je&&J.instanceColor!==null,instancingMorph:Je&&J.morphTexture!==null,outputColorSpace:Me===null?a.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:mt,matcap:lt,envMap:_t,envMapMode:_t&&I.mapping,envMapCubeUVHeight:V,aoMap:zt,lightMap:ft,bumpMap:nn,normalMap:Vt,displacementMap:ct,emissiveMap:$,normalMapObjectSpace:Vt&&M.normalMapType===QA,normalMapTangentSpace:Vt&&M.normalMapType===px,packedNormalMap:Vt&&M.normalMapType===px&&fD(M.normalMap.format),metalnessMap:At,roughnessMap:it,anisotropy:St,anisotropyMap:Se,clearcoat:we,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:Pe,dispersion:sn,iridescence:L,iridescenceMap:he,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:st,transmission:ee,transmissionMap:ot,thicknessMap:yt,gradientMap:q,opaque:M.transparent===!1&&M.blending===mo&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ve,alphaHash:He,combine:M.combine,mapUv:mt&&T(M.map.channel),aoMapUv:zt&&T(M.aoMap.channel),lightMapUv:ft&&T(M.lightMap.channel),bumpMapUv:nn&&T(M.bumpMap.channel),normalMapUv:Vt&&T(M.normalMap.channel),displacementMapUv:ct&&T(M.displacementMap.channel),emissiveMapUv:$&&T(M.emissiveMap.channel),metalnessMapUv:At&&T(M.metalnessMap.channel),roughnessMapUv:it&&T(M.roughnessMap.channel),anisotropyMapUv:Se&&T(M.anisotropyMap.channel),clearcoatMapUv:Ae&&T(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&T(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&T(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&T(M.sheenRoughnessMap.channel),specularMapUv:Ne&&T(M.specularMap.channel),specularColorMapUv:Ue&&T(M.specularColorMap.channel),specularIntensityMapUv:st&&T(M.specularIntensityMap.channel),transmissionMapUv:ot&&T(M.transmissionMap.channel),thicknessMapUv:yt&&T(M.thicknessMap.channel),alphaMapUv:Ce&&T(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Vt||St),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!B.attributes.uv&&(mt||Ce),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&Vt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Be,skinning:J.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:de,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&Z.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:mt&&M.map.isVideoTexture===!0&&Ut.getTransfer(M.map.colorSpace)===Kt,decodeVideoTextureEmissive:$&&M.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(M.emissiveMap.colorSpace)===Kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ti,flipSided:M.side===On,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ke.vertexUv1s=p.has(1),Ke.vertexUv2s=p.has(2),Ke.vertexUv3s=p.has(3),p.clear(),Ke}function b(M){const F=[];if(M.shaderID?F.push(M.shaderID):(F.push(M.customVertexShaderID),F.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)F.push(Z),F.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(S(F,M),C(F,M),F.push(a.outputColorSpace)),F.push(M.customProgramCacheKey),F.join()}function S(M,F){M.push(F.precision),M.push(F.outputColorSpace),M.push(F.envMapMode),M.push(F.envMapCubeUVHeight),M.push(F.mapUv),M.push(F.alphaMapUv),M.push(F.lightMapUv),M.push(F.aoMapUv),M.push(F.bumpMapUv),M.push(F.normalMapUv),M.push(F.displacementMapUv),M.push(F.emissiveMapUv),M.push(F.metalnessMapUv),M.push(F.roughnessMapUv),M.push(F.anisotropyMapUv),M.push(F.clearcoatMapUv),M.push(F.clearcoatNormalMapUv),M.push(F.clearcoatRoughnessMapUv),M.push(F.iridescenceMapUv),M.push(F.iridescenceThicknessMapUv),M.push(F.sheenColorMapUv),M.push(F.sheenRoughnessMapUv),M.push(F.specularMapUv),M.push(F.specularColorMapUv),M.push(F.specularIntensityMapUv),M.push(F.transmissionMapUv),M.push(F.thicknessMapUv),M.push(F.combine),M.push(F.fogExp2),M.push(F.sizeAttenuation),M.push(F.morphTargetsCount),M.push(F.morphAttributeCount),M.push(F.numDirLights),M.push(F.numPointLights),M.push(F.numSpotLights),M.push(F.numSpotLightMaps),M.push(F.numHemiLights),M.push(F.numRectAreaLights),M.push(F.numDirLightShadows),M.push(F.numPointLightShadows),M.push(F.numSpotLightShadows),M.push(F.numSpotLightShadowsWithMaps),M.push(F.numLightProbes),M.push(F.shadowMapType),M.push(F.toneMapping),M.push(F.numClippingPlanes),M.push(F.numClipIntersection),M.push(F.depthPacking)}function C(M,F){f.disableAll(),F.instancing&&f.enable(0),F.instancingColor&&f.enable(1),F.instancingMorph&&f.enable(2),F.matcap&&f.enable(3),F.envMap&&f.enable(4),F.normalMapObjectSpace&&f.enable(5),F.normalMapTangentSpace&&f.enable(6),F.clearcoat&&f.enable(7),F.iridescence&&f.enable(8),F.alphaTest&&f.enable(9),F.vertexColors&&f.enable(10),F.vertexAlphas&&f.enable(11),F.vertexUv1s&&f.enable(12),F.vertexUv2s&&f.enable(13),F.vertexUv3s&&f.enable(14),F.vertexTangents&&f.enable(15),F.anisotropy&&f.enable(16),F.alphaHash&&f.enable(17),F.batching&&f.enable(18),F.dispersion&&f.enable(19),F.batchingColor&&f.enable(20),F.gradientMap&&f.enable(21),F.packedNormalMap&&f.enable(22),F.vertexNormals&&f.enable(23),M.push(f.mask),f.disableAll(),F.fog&&f.enable(0),F.useFog&&f.enable(1),F.flatShading&&f.enable(2),F.logarithmicDepthBuffer&&f.enable(3),F.reversedDepthBuffer&&f.enable(4),F.skinning&&f.enable(5),F.morphTargets&&f.enable(6),F.morphNormals&&f.enable(7),F.morphColors&&f.enable(8),F.premultipliedAlpha&&f.enable(9),F.shadowMapEnabled&&f.enable(10),F.doubleSided&&f.enable(11),F.flipSided&&f.enable(12),F.useDepthPacking&&f.enable(13),F.dithering&&f.enable(14),F.transmission&&f.enable(15),F.sheen&&f.enable(16),F.opaque&&f.enable(17),F.pointsUvs&&f.enable(18),F.decodeVideoTexture&&f.enable(19),F.decodeVideoTextureEmissive&&f.enable(20),F.alphaToCoverage&&f.enable(21),F.numLightProbeGrids>0&&f.enable(22),M.push(f.mask)}function N(M){const F=y[M.type];let Z;if(F){const k=sa[F];Z=OR.clone(k.uniforms)}else Z=M.uniforms;return Z}function P(M,F){let Z=_.get(F);return Z!==void 0?++Z.usedTimes:(Z=new oD(a,F,M,l),m.push(Z),_.set(F,Z)),Z}function X(M){if(--M.usedTimes===0){const F=m.indexOf(M);m[F]=m[m.length-1],m.pop(),_.delete(M.cacheKey),M.destroy()}}function z(M){h.remove(M)}function G(){h.dispose()}return{getParameters:w,getProgramCacheKey:b,getUniforms:N,acquireProgram:P,releaseProgram:X,releaseShaderCache:z,programs:m,dispose:G}}function hD(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:l,dispose:c}}function pD(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function iS(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function aS(){const a=[];let e=0;const n=[],r=[],l=[];function c(){e=0,n.length=0,r.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function h(g,y,T,w,b,S){let C=a[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:b,group:S},a[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=b,C.group=S),e++,C}function p(g,y,T,w,b,S){const C=h(g,y,T,w,b,S);T.transmission>0?r.push(C):T.transparent===!0?l.push(C):n.push(C)}function m(g,y,T,w,b,S){const C=h(g,y,T,w,b,S);T.transmission>0?r.unshift(C):T.transparent===!0?l.unshift(C):n.unshift(C)}function _(g,y){n.length>1&&n.sort(g||pD),r.length>1&&r.sort(y||iS),l.length>1&&l.sort(y||iS)}function v(){for(let g=e,y=a.length;g<y;g++){const T=a[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:v,sort:_}}function mD(){let a=new WeakMap;function e(r,l){const c=a.get(r);let f;return c===void 0?(f=new aS,a.set(r,[f])):l>=c.length?(f=new aS,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function gD(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Xt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return a[e.id]=n,n}}}function vD(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let _D=0;function xD(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function SD(a){const e=new gD,n=vD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ce);const l=new ce,c=new Dn,f=new Dn;function h(m){let _=0,v=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,T=0,w=0,b=0,S=0,C=0,N=0,P=0,X=0,z=0,G=0;m.sort(xD);for(let F=0,Z=m.length;F<Z;F++){const k=m[F],J=k.color,fe=k.intensity,H=k.distance;let B=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ps?B=k.shadow.map.texture:B=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=J.r*fe,v+=J.g*fe,g+=J.b*fe;else if(k.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(k.sh.coefficients[U],fe);G++}else if(k.isDirectionalLight){const U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const D=k.shadow,I=n.get(k);I.shadowIntensity=D.intensity,I.shadowBias=D.bias,I.shadowNormalBias=D.normalBias,I.shadowRadius=D.radius,I.shadowMapSize=D.mapSize,r.directionalShadow[y]=I,r.directionalShadowMap[y]=B,r.directionalShadowMatrix[y]=k.shadow.matrix,C++}r.directional[y]=U,y++}else if(k.isSpotLight){const U=e.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(J).multiplyScalar(fe),U.distance=H,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,r.spot[w]=U;const D=k.shadow;if(k.map&&(r.spotLightMap[X]=k.map,X++,D.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[w]=D.matrix,k.castShadow){const I=n.get(k);I.shadowIntensity=D.intensity,I.shadowBias=D.bias,I.shadowNormalBias=D.normalBias,I.shadowRadius=D.radius,I.shadowMapSize=D.mapSize,r.spotShadow[w]=I,r.spotShadowMap[w]=B,P++}w++}else if(k.isRectAreaLight){const U=e.get(k);U.color.copy(J).multiplyScalar(fe),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=U,b++}else if(k.isPointLight){const U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),U.distance=k.distance,U.decay=k.decay,k.castShadow){const D=k.shadow,I=n.get(k);I.shadowIntensity=D.intensity,I.shadowBias=D.bias,I.shadowNormalBias=D.normalBias,I.shadowRadius=D.radius,I.shadowMapSize=D.mapSize,I.shadowCameraNear=D.camera.near,I.shadowCameraFar=D.camera.far,r.pointShadow[T]=I,r.pointShadowMap[T]=B,r.pointShadowMatrix[T]=k.shadow.matrix,N++}r.point[T]=U,T++}else if(k.isHemisphereLight){const U=e.get(k);U.skyColor.copy(k.color).multiplyScalar(fe),U.groundColor.copy(k.groundColor).multiplyScalar(fe),r.hemi[S]=U,S++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==y||M.pointLength!==T||M.spotLength!==w||M.rectAreaLength!==b||M.hemiLength!==S||M.numDirectionalShadows!==C||M.numPointShadows!==N||M.numSpotShadows!==P||M.numSpotMaps!==X||M.numLightProbes!==G)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=b,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+X-z,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=G,M.directionalLength=y,M.pointLength=T,M.spotLength=w,M.rectAreaLength=b,M.hemiLength=S,M.numDirectionalShadows=C,M.numPointShadows=N,M.numSpotShadows=P,M.numSpotMaps=X,M.numLightProbes=G,r.version=_D++)}function p(m,_){let v=0,g=0,y=0,T=0,w=0;const b=_.matrixWorldInverse;for(let S=0,C=m.length;S<C;S++){const N=m[S];if(N.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),v++}else if(N.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(b),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),y++}else if(N.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(b),f.identity(),c.copy(N.matrixWorld),c.premultiply(b),f.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),T++}else if(N.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(b),g++}else if(N.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(b),w++}}}return{setup:h,setupView:p,state:r}}function rS(a){const e=new SD(a),n=[],r=[],l=[];function c(g){v.camera=g,n.length=0,r.length=0,l.length=0}function f(g){n.push(g)}function h(g){r.push(g)}function p(g){l.push(g)}function m(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:p}}function bD(a){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new rS(a),e.set(l,[h])):c>=f.length?(h=new rS(a),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const yD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ED=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],TD=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],sS=new Dn,Nl=new ce,lp=new ce;function AD(a,e,n){let r=new Bb;const l=new bt,c=new bt,f=new Sn,h=new zR,p=new HR,m={},_=n.maxTextureSize,v={[Va]:On,[On]:Va,[Ti]:Ti},g=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:yD,fragmentShader:MD}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new da;T.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Zi(T,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let S=this.type;this.render=function(z,G,M){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||z.length===0)return;this.type===DA&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zu);const F=a.getRenderTarget(),Z=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),J=a.state;J.setBlending(Ki),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const fe=S!==this.type;fe&&G.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=z.length;H<B;H++){const U=z[H],D=U.shadow;if(D===void 0){rt("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;l.copy(D.mapSize);const I=D.getFrameExtents();l.multiply(I),c.copy(D.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/I.x),l.x=c.x*I.x,D.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/I.y),l.y=c.y*I.y,D.mapSize.y=c.y));const V=a.state.buffers.depth.getReversed();if(D.camera._reversedDepth=V,D.map===null||fe===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Il){if(U.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ni(l.x,l.y,{format:ps,type:ka,minFilter:hn,magFilter:hn,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new gs(l.x,l.y,Yi),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=Xa,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Wn,D.map.depthTexture.magFilter=Wn}else U.isPointLight?(D.map=new Wb(l.x),D.map.depthTexture=new LR(l.x,fa)):(D.map=new ni(l.x,l.y),D.map.depthTexture=new gs(l.x,l.y,fa)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=Xa,this.type===zu?(D.map.depthTexture.compareFunction=V?Pm:Lm,D.map.depthTexture.minFilter=hn,D.map.depthTexture.magFilter=hn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Wn,D.map.depthTexture.magFilter=Wn);D.camera.updateProjectionMatrix()}const se=D.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<se;O++){if(D.map.isWebGLCubeRenderTarget)a.setRenderTarget(D.map,O),a.clear();else{O===0&&(a.setRenderTarget(D.map),a.clear());const Y=D.getViewport(O);f.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),J.viewport(f)}if(U.isPointLight){const Y=D.camera,de=D.matrix,ye=U.distance||Y.far;ye!==Y.far&&(Y.far=ye,Y.updateProjectionMatrix()),Nl.setFromMatrixPosition(U.matrixWorld),Y.position.copy(Nl),lp.copy(Y.position),lp.add(ED[O]),Y.up.copy(TD[O]),Y.lookAt(lp),Y.updateMatrixWorld(),de.makeTranslation(-Nl.x,-Nl.y,-Nl.z),sS.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),D._frustum.setFromProjectionMatrix(sS,Y.coordinateSystem,Y.reversedDepth)}else D.updateMatrices(U);r=D.getFrustum(),P(G,M,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===Il&&C(D,M),D.needsUpdate=!1}S=this.type,b.needsUpdate=!1,a.setRenderTarget(F,Z,k)};function C(z,G){const M=e.update(w);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ni(l.x,l.y,{format:ps,type:ka})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(G,null,M,g,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(G,null,M,y,w,null)}function N(z,G,M,F){let Z=null;const k=M.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)Z=k;else if(Z=M.isPointLight===!0?p:h,a.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const J=Z.uuid,fe=G.uuid;let H=m[J];H===void 0&&(H={},m[J]=H);let B=H[fe];B===void 0&&(B=Z.clone(),H[fe]=B,G.addEventListener("dispose",X)),Z=B}if(Z.visible=G.visible,Z.wireframe=G.wireframe,F===Il?Z.side=G.shadowSide!==null?G.shadowSide:G.side:Z.side=G.shadowSide!==null?G.shadowSide:v[G.side],Z.alphaMap=G.alphaMap,Z.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,Z.map=G.map,Z.clipShadows=G.clipShadows,Z.clippingPlanes=G.clippingPlanes,Z.clipIntersection=G.clipIntersection,Z.displacementMap=G.displacementMap,Z.displacementScale=G.displacementScale,Z.displacementBias=G.displacementBias,Z.wireframeLinewidth=G.wireframeLinewidth,Z.linewidth=G.linewidth,M.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const J=a.properties.get(Z);J.light=M}return Z}function P(z,G,M,F,Z){if(z.visible===!1)return;if(z.layers.test(G.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&Z===Il)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,z.matrixWorld);const fe=e.update(z),H=z.material;if(Array.isArray(H)){const B=fe.groups;for(let U=0,D=B.length;U<D;U++){const I=B[U],V=H[I.materialIndex];if(V&&V.visible){const se=N(z,V,F,Z);z.onBeforeShadow(a,z,G,M,fe,se,I),a.renderBufferDirect(M,null,fe,se,z,I),z.onAfterShadow(a,z,G,M,fe,se,I)}}}else if(H.visible){const B=N(z,H,F,Z);z.onBeforeShadow(a,z,G,M,fe,B,null),a.renderBufferDirect(M,null,fe,B,z,null),z.onAfterShadow(a,z,G,M,fe,B,null)}}const J=z.children;for(let fe=0,H=J.length;fe<H;fe++)P(J[fe],G,M,F,Z)}function X(z){z.target.removeEventListener("dispose",X);for(const M in m){const F=m[M],Z=z.target.uuid;Z in F&&(F[Z].dispose(),delete F[Z])}}}function RD(a,e){function n(){let q=!1;const Ce=new Sn;let ve=null;const He=new Sn(0,0,0,0);return{setMask:function(Le){ve!==Le&&!q&&(a.colorMask(Le,Le,Le,Le),ve=Le)},setLocked:function(Le){q=Le},setClear:function(Le,Ee,Ke,at,un){un===!0&&(Le*=at,Ee*=at,Ke*=at),Ce.set(Le,Ee,Ke,at),He.equals(Ce)===!1&&(a.clearColor(Le,Ee,Ke,at),He.copy(Ce))},reset:function(){q=!1,ve=null,He.set(-1,0,0,0)}}}function r(){let q=!1,Ce=!1,ve=null,He=null,Le=null;return{setReversed:function(Ee){if(Ce!==Ee){const Ke=e.get("EXT_clip_control");Ee?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const at=Le;Le=null,this.setClear(at)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?Me(a.DEPTH_TEST):Be(a.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!q&&(a.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(Ce&&(Ee=lR[Ee]),He!==Ee){switch(Ee){case Cp:a.depthFunc(a.NEVER);break;case ju:a.depthFunc(a.ALWAYS);break;case wp:a.depthFunc(a.LESS);break;case xo:a.depthFunc(a.LEQUAL);break;case Dp:a.depthFunc(a.EQUAL);break;case Up:a.depthFunc(a.GEQUAL);break;case Np:a.depthFunc(a.GREATER);break;case Lp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}He=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){Le!==Ee&&(Le=Ee,Ce&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){q=!1,ve=null,He=null,Le=null,Ce=!1}}}function l(){let q=!1,Ce=null,ve=null,He=null,Le=null,Ee=null,Ke=null,at=null,un=null;return{setTest:function(Ht){q||(Ht?Me(a.STENCIL_TEST):Be(a.STENCIL_TEST))},setMask:function(Ht){Ce!==Ht&&!q&&(a.stencilMask(Ht),Ce=Ht)},setFunc:function(Ht,Ri,hi){(ve!==Ht||He!==Ri||Le!==hi)&&(a.stencilFunc(Ht,Ri,hi),ve=Ht,He=Ri,Le=hi)},setOp:function(Ht,Ri,hi){(Ee!==Ht||Ke!==Ri||at!==hi)&&(a.stencilOp(Ht,Ri,hi),Ee=Ht,Ke=Ri,at=hi)},setLocked:function(Ht){q=Ht},setClear:function(Ht){un!==Ht&&(a.clearStencil(Ht),un=Ht)},reset:function(){q=!1,Ce=null,ve=null,He=null,Le=null,Ee=null,Ke=null,at=null,un=null}}}const c=new n,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},v={},g={},y=new WeakMap,T=[],w=null,b=!1,S=null,C=null,N=null,P=null,X=null,z=null,G=null,M=new Xt(0,0,0),F=0,Z=!1,k=null,J=null,fe=null,H=null,B=null;const U=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,I=0;const V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=I>=1):V.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=I>=2);let se=null,O={};const Y=a.getParameter(a.SCISSOR_BOX),de=a.getParameter(a.VIEWPORT),ye=new Sn().fromArray(Y),Te=new Sn().fromArray(de);function te(q,Ce,ve,He){const Le=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(q,Ee),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ke=0;Ke<ve;Ke++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ce,0,a.RGBA,1,1,He,0,a.RGBA,a.UNSIGNED_BYTE,Le):a.texImage2D(Ce+Ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Le);return Ee}const ge={};ge[a.TEXTURE_2D]=te(a.TEXTURE_2D,a.TEXTURE_2D,1),ge[a.TEXTURE_CUBE_MAP]=te(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[a.TEXTURE_2D_ARRAY]=te(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ge[a.TEXTURE_3D]=te(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Me(a.DEPTH_TEST),f.setFunc(xo),nn(!1),Vt(ux),Me(a.CULL_FACE),zt(Ki);function Me(q){_[q]!==!0&&(a.enable(q),_[q]=!0)}function Be(q){_[q]!==!1&&(a.disable(q),_[q]=!1)}function Je(q,Ce){return g[q]!==Ce?(a.bindFramebuffer(q,Ce),g[q]=Ce,q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ce),q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ve(q,Ce){let ve=T,He=!1;if(q){ve=y.get(Ce),ve===void 0&&(ve=[],y.set(Ce,ve));const Le=q.textures;if(ve.length!==Le.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Ke=Le.length;Ee<Ke;Ee++)ve[Ee]=a.COLOR_ATTACHMENT0+Ee;ve.length=Le.length,He=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,He=!0);He&&a.drawBuffers(ve)}function mt(q){return w!==q?(a.useProgram(q),w=q,!0):!1}const lt={[os]:a.FUNC_ADD,[NA]:a.FUNC_SUBTRACT,[LA]:a.FUNC_REVERSE_SUBTRACT};lt[PA]=a.MIN,lt[OA]=a.MAX;const _t={[IA]:a.ZERO,[FA]:a.ONE,[BA]:a.SRC_COLOR,[Ap]:a.SRC_ALPHA,[XA]:a.SRC_ALPHA_SATURATE,[VA]:a.DST_COLOR,[HA]:a.DST_ALPHA,[zA]:a.ONE_MINUS_SRC_COLOR,[Rp]:a.ONE_MINUS_SRC_ALPHA,[kA]:a.ONE_MINUS_DST_COLOR,[GA]:a.ONE_MINUS_DST_ALPHA,[WA]:a.CONSTANT_COLOR,[$A]:a.ONE_MINUS_CONSTANT_COLOR,[qA]:a.CONSTANT_ALPHA,[YA]:a.ONE_MINUS_CONSTANT_ALPHA};function zt(q,Ce,ve,He,Le,Ee,Ke,at,un,Ht){if(q===Ki){b===!0&&(Be(a.BLEND),b=!1);return}if(b===!1&&(Me(a.BLEND),b=!0),q!==UA){if(q!==S||Ht!==Z){if((C!==os||X!==os)&&(a.blendEquation(a.FUNC_ADD),C=os,X=os),Ht)switch(q){case mo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fx:a.blendFunc(a.ONE,a.ONE);break;case dx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case hx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Pt("WebGLState: Invalid blending: ",q);break}else switch(q){case mo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fx:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case dx:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",q);break}N=null,P=null,z=null,G=null,M.set(0,0,0),F=0,S=q,Z=Ht}return}Le=Le||Ce,Ee=Ee||ve,Ke=Ke||He,(Ce!==C||Le!==X)&&(a.blendEquationSeparate(lt[Ce],lt[Le]),C=Ce,X=Le),(ve!==N||He!==P||Ee!==z||Ke!==G)&&(a.blendFuncSeparate(_t[ve],_t[He],_t[Ee],_t[Ke]),N=ve,P=He,z=Ee,G=Ke),(at.equals(M)===!1||un!==F)&&(a.blendColor(at.r,at.g,at.b,un),M.copy(at),F=un),S=q,Z=!1}function ft(q,Ce){q.side===Ti?Be(a.CULL_FACE):Me(a.CULL_FACE);let ve=q.side===On;Ce&&(ve=!ve),nn(ve),q.blending===mo&&q.transparent===!1?zt(Ki):zt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const He=q.stencilWrite;h.setTest(He),He&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),$(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Me(a.SAMPLE_ALPHA_TO_COVERAGE):Be(a.SAMPLE_ALPHA_TO_COVERAGE)}function nn(q){k!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),k=q)}function Vt(q){q!==CA?(Me(a.CULL_FACE),q!==J&&(q===ux?a.cullFace(a.BACK):q===wA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Be(a.CULL_FACE),J=q}function ct(q){q!==fe&&(D&&a.lineWidth(q),fe=q)}function $(q,Ce,ve){q?(Me(a.POLYGON_OFFSET_FILL),(H!==Ce||B!==ve)&&(H=Ce,B=ve,f.getReversed()&&(Ce=-Ce),a.polygonOffset(Ce,ve))):Be(a.POLYGON_OFFSET_FILL)}function At(q){q?Me(a.SCISSOR_TEST):Be(a.SCISSOR_TEST)}function it(q){q===void 0&&(q=a.TEXTURE0+U-1),se!==q&&(a.activeTexture(q),se=q)}function St(q,Ce,ve){ve===void 0&&(se===null?ve=a.TEXTURE0+U-1:ve=se);let He=O[ve];He===void 0&&(He={type:void 0,texture:void 0},O[ve]=He),(He.type!==q||He.texture!==Ce)&&(se!==ve&&(a.activeTexture(ve),se=ve),a.bindTexture(q,Ce||ge[q]),He.type=q,He.texture=Ce)}function we(){const q=O[se];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function sn(){try{a.compressedTexImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function L(){try{a.compressedTexImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function E(){try{a.texSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function ee(){try{a.texSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Se(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ae(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function De(){try{a.texStorage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Pe(){try{a.texStorage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function he(){try{a.texImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function pe(){try{a.texImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Oe(q){return v[q]!==void 0?v[q]:a.getParameter(q)}function Ie(q,Ce){v[q]!==Ce&&(a.pixelStorei(q,Ce),v[q]=Ce)}function Ne(q){ye.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),ye.copy(q))}function Ue(q){Te.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Te.copy(q))}function st(q,Ce){let ve=m.get(Ce);ve===void 0&&(ve=new WeakMap,m.set(Ce,ve));let He=ve.get(q);He===void 0&&(He=a.getUniformBlockIndex(Ce,q.name),ve.set(q,He))}function ot(q,Ce){const He=m.get(Ce).get(q);p.get(Ce)!==He&&(a.uniformBlockBinding(Ce,He,q.__bindingPointIndex),p.set(Ce,He))}function yt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},se=null,O={},g={},y=new WeakMap,T=[],w=null,b=!1,S=null,C=null,N=null,P=null,X=null,z=null,G=null,M=new Xt(0,0,0),F=0,Z=!1,k=null,J=null,fe=null,H=null,B=null,ye.set(0,0,a.canvas.width,a.canvas.height),Te.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Me,disable:Be,bindFramebuffer:Je,drawBuffers:Ve,useProgram:mt,setBlending:zt,setMaterial:ft,setFlipSided:nn,setCullFace:Vt,setLineWidth:ct,setPolygonOffset:$,setScissorTest:At,activeTexture:it,bindTexture:St,unbindTexture:we,compressedTexImage2D:sn,compressedTexImage3D:L,texImage2D:he,texImage3D:pe,pixelStorei:Ie,getParameter:Oe,updateUBOMapping:st,uniformBlockBinding:ot,texStorage2D:De,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ae,scissor:Ne,viewport:Ue,reset:yt}}function CD(a,e,n,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new bt,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,E){return T?new OffscreenCanvas(L,E):ef("canvas")}function b(L,E,ee){let Se=1;const Ae=sn(L);if((Ae.width>ee||Ae.height>ee)&&(Se=ee/Math.max(Ae.width,Ae.height)),Se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const De=Math.floor(Se*Ae.width),Pe=Math.floor(Se*Ae.height);g===void 0&&(g=w(De,Pe));const he=E?w(De,Pe):g;return he.width=De,he.height=Pe,he.getContext("2d").drawImage(L,0,0,De,Pe),rt("WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+De+"x"+Pe+")."),he}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),L;return L}function S(L){return L.generateMipmaps}function C(L){a.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function P(L,E,ee,Se,Ae,De=!1){if(L!==null){if(a[L]!==void 0)return a[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;Se&&(Pe=e.get("EXT_texture_norm16"),Pe||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===a.RED&&(ee===a.FLOAT&&(he=a.R32F),ee===a.HALF_FLOAT&&(he=a.R16F),ee===a.UNSIGNED_BYTE&&(he=a.R8),ee===a.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),ee===a.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),E===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.R8UI),ee===a.UNSIGNED_SHORT&&(he=a.R16UI),ee===a.UNSIGNED_INT&&(he=a.R32UI),ee===a.BYTE&&(he=a.R8I),ee===a.SHORT&&(he=a.R16I),ee===a.INT&&(he=a.R32I)),E===a.RG&&(ee===a.FLOAT&&(he=a.RG32F),ee===a.HALF_FLOAT&&(he=a.RG16F),ee===a.UNSIGNED_BYTE&&(he=a.RG8),ee===a.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),ee===a.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.RG8UI),ee===a.UNSIGNED_SHORT&&(he=a.RG16UI),ee===a.UNSIGNED_INT&&(he=a.RG32UI),ee===a.BYTE&&(he=a.RG8I),ee===a.SHORT&&(he=a.RG16I),ee===a.INT&&(he=a.RG32I)),E===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(he=a.RGB16UI),ee===a.UNSIGNED_INT&&(he=a.RGB32UI),ee===a.BYTE&&(he=a.RGB8I),ee===a.SHORT&&(he=a.RGB16I),ee===a.INT&&(he=a.RGB32I)),E===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),ee===a.UNSIGNED_INT&&(he=a.RGBA32UI),ee===a.BYTE&&(he=a.RGBA8I),ee===a.SHORT&&(he=a.RGBA16I),ee===a.INT&&(he=a.RGBA32I)),E===a.RGB&&(ee===a.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),ee===a.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),E===a.RGBA){const pe=De?Qu:Ut.getTransfer(Ae);ee===a.FLOAT&&(he=a.RGBA32F),ee===a.HALF_FLOAT&&(he=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(he=pe===Kt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),ee===a.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function X(L,E){let ee;return L?E===null||E===fa||E===bo?ee=a.DEPTH24_STENCIL8:E===Yi?ee=a.DEPTH32F_STENCIL8:E===Vl&&(ee=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fa||E===bo?ee=a.DEPTH_COMPONENT24:E===Yi?ee=a.DEPTH_COMPONENT32F:E===Vl&&(ee=a.DEPTH_COMPONENT16),ee}function z(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Wn&&L.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),F(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function M(L){const E=L.target;E.removeEventListener("dispose",M),k(E)}function F(L){const E=r.get(L);if(E.__webglInit===void 0)return;const ee=L.source,Se=y.get(ee);if(Se){const Ae=Se[E.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&Z(L),Object.keys(Se).length===0&&y.delete(ee)}r.remove(L)}function Z(L){const E=r.get(L);a.deleteTexture(E.__webglTexture);const ee=L.source,Se=y.get(ee);delete Se[E.__cacheKey],f.memory.textures--}function k(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(E.__webglFramebuffer[Se]))for(let Ae=0;Ae<E.__webglFramebuffer[Se].length;Ae++)a.deleteFramebuffer(E.__webglFramebuffer[Se][Ae]);else a.deleteFramebuffer(E.__webglFramebuffer[Se]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[Se])}else{if(Array.isArray(E.__webglFramebuffer))for(let Se=0;Se<E.__webglFramebuffer.length;Se++)a.deleteFramebuffer(E.__webglFramebuffer[Se]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Se=0;Se<E.__webglColorRenderbuffer.length;Se++)E.__webglColorRenderbuffer[Se]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[Se]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=L.textures;for(let Se=0,Ae=ee.length;Se<Ae;Se++){const De=r.get(ee[Se]);De.__webglTexture&&(a.deleteTexture(De.__webglTexture),f.memory.textures--),r.remove(ee[Se])}r.remove(L)}let J=0;function fe(){J=0}function H(){return J}function B(L){J=L}function U(){const L=J;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),J+=1,L}function D(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function I(L,E){const ee=r.get(L);if(L.isVideoTexture&&St(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ee.__version!==L.version){const Se=L.image;if(Se===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(ee,L,E);return}}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+E)}function V(L,E){const ee=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){Be(ee,L,E);return}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+E)}function se(L,E){const ee=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){Be(ee,L,E);return}n.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+E)}function O(L,E){const ee=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ee.__version!==L.version){Je(ee,L,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+E)}const Y={[Pp]:a.REPEAT,[Ba]:a.CLAMP_TO_EDGE,[Op]:a.MIRRORED_REPEAT},de={[Wn]:a.NEAREST,[ZA]:a.NEAREST_MIPMAP_NEAREST,[pu]:a.NEAREST_MIPMAP_LINEAR,[hn]:a.LINEAR,[Nh]:a.LINEAR_MIPMAP_NEAREST,[cs]:a.LINEAR_MIPMAP_LINEAR},ye={[JA]:a.NEVER,[aR]:a.ALWAYS,[eR]:a.LESS,[Lm]:a.LEQUAL,[tR]:a.EQUAL,[Pm]:a.GEQUAL,[nR]:a.GREATER,[iR]:a.NOTEQUAL};function Te(L,E){if(E.type===Yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hn||E.magFilter===Nh||E.magFilter===pu||E.magFilter===cs||E.minFilter===hn||E.minFilter===Nh||E.minFilter===pu||E.minFilter===cs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,Y[E.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,Y[E.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,Y[E.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,de[E.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wn||E.minFilter!==pu&&E.minFilter!==cs||E.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function te(L,E){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const Se=E.source;let Ae=y.get(Se);Ae===void 0&&(Ae={},y.set(Se,Ae));const De=D(E);if(De!==L.__cacheKey){Ae[De]===void 0&&(Ae[De]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),Ae[De].usedTimes++;const Pe=Ae[L.__cacheKey];Pe!==void 0&&(Ae[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&Z(E)),L.__cacheKey=De,L.__webglTexture=Ae[De].texture}return ee}function ge(L,E,ee){return Math.floor(Math.floor(L/ee)/E)}function Me(L,E,ee,Se){const De=L.updateRanges;if(De.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,ee,Se,E.data);else{De.sort((Ie,Ne)=>Ie.start-Ne.start);let Pe=0;for(let Ie=1;Ie<De.length;Ie++){const Ne=De[Pe],Ue=De[Ie],st=Ne.start+Ne.count,ot=ge(Ue.start,E.width,4),yt=ge(Ne.start,E.width,4);Ue.start<=st+1&&ot===yt&&ge(Ue.start+Ue.count-1,E.width,4)===ot?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++Pe,De[Pe]=Ue)}De.length=Pe+1;const he=n.getParameter(a.UNPACK_ROW_LENGTH),pe=n.getParameter(a.UNPACK_SKIP_PIXELS),Oe=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ie=0,Ne=De.length;Ie<Ne;Ie++){const Ue=De[Ie],st=Math.floor(Ue.start/4),ot=Math.ceil(Ue.count/4),yt=st%E.width,q=Math.floor(st/E.width),Ce=ot,ve=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,yt,q,Ce,ve,ee,Se,E.data)}L.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,he),n.pixelStorei(a.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(a.UNPACK_SKIP_ROWS,Oe)}}function Be(L,E,ee){let Se=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Se=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Se=a.TEXTURE_3D);const Ae=te(L,E),De=E.source;n.bindTexture(Se,L.__webglTexture,a.TEXTURE0+ee);const Pe=r.get(De);if(De.version!==Pe.__version||Ae===!0){if(n.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Ut.getPrimaries(Ut.workingColorSpace),He=E.colorSpace===oa?null:Ut.getPrimaries(E.colorSpace),Le=E.colorSpace===oa||ve===He?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=b(E.image,!1,l.maxTextureSize);pe=we(E,pe);const Oe=c.convert(E.format,E.colorSpace),Ie=c.convert(E.type);let Ne=P(E.internalFormat,Oe,Ie,E.normalized,E.colorSpace,E.isVideoTexture);Te(Se,E);let Ue;const st=E.mipmaps,ot=E.isVideoTexture!==!0,yt=Pe.__version===void 0||Ae===!0,q=De.dataReady,Ce=z(E,pe);if(E.isDepthTexture)Ne=X(E.format===Dr,E.type),yt&&(ot?n.texStorage2D(a.TEXTURE_2D,1,Ne,pe.width,pe.height):n.texImage2D(a.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Oe,Ie,null));else if(E.isDataTexture)if(st.length>0){ot&&yt&&n.texStorage2D(a.TEXTURE_2D,Ce,Ne,st[0].width,st[0].height);for(let ve=0,He=st.length;ve<He;ve++)Ue=st[ve],ot?q&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Oe,Ie,Ue.data):n.texImage2D(a.TEXTURE_2D,ve,Ne,Ue.width,Ue.height,0,Oe,Ie,Ue.data);E.generateMipmaps=!1}else ot?(yt&&n.texStorage2D(a.TEXTURE_2D,Ce,Ne,pe.width,pe.height),q&&Me(E,pe,Oe,Ie)):n.texImage2D(a.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Oe,Ie,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&yt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,Ne,st[0].width,st[0].height,pe.depth);for(let ve=0,He=st.length;ve<He;ve++)if(Ue=st[ve],E.format!==ji)if(Oe!==null)if(ot){if(q)if(E.layerUpdates.size>0){const Le=Fx(Ue.width,Ue.height,E.format,E.type);for(const Ee of E.layerUpdates){const Ke=Ue.data.subarray(Ee*Le/Ue.data.BYTES_PER_ELEMENT,(Ee+1)*Le/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Ee,Ue.width,Ue.height,1,Oe,Ke)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,pe.depth,Oe,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Ne,Ue.width,Ue.height,pe.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?q&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,pe.depth,Oe,Ie,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ve,Ne,Ue.width,Ue.height,pe.depth,0,Oe,Ie,Ue.data)}else{ot&&yt&&n.texStorage2D(a.TEXTURE_2D,Ce,Ne,st[0].width,st[0].height);for(let ve=0,He=st.length;ve<He;ve++)Ue=st[ve],E.format!==ji?Oe!==null?ot?q&&n.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Oe,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,ve,Ne,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?q&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Oe,Ie,Ue.data):n.texImage2D(a.TEXTURE_2D,ve,Ne,Ue.width,Ue.height,0,Oe,Ie,Ue.data)}else if(E.isDataArrayTexture)if(ot){if(yt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,Ne,pe.width,pe.height,pe.depth),q)if(E.layerUpdates.size>0){const ve=Fx(pe.width,pe.height,E.format,E.type);for(const He of E.layerUpdates){const Le=pe.data.subarray(He*ve/pe.data.BYTES_PER_ELEMENT,(He+1)*ve/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,He,pe.width,pe.height,1,Oe,Ie,Le)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ie,pe.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,Oe,Ie,pe.data);else if(E.isData3DTexture)ot?(yt&&n.texStorage3D(a.TEXTURE_3D,Ce,Ne,pe.width,pe.height,pe.depth),q&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ie,pe.data)):n.texImage3D(a.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,Oe,Ie,pe.data);else if(E.isFramebufferTexture){if(yt)if(ot)n.texStorage2D(a.TEXTURE_2D,Ce,Ne,pe.width,pe.height);else{let ve=pe.width,He=pe.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(a.TEXTURE_2D,Le,Ne,ve,He,0,Oe,Ie,null),ve>>=1,He>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),pe.parentNode!==ve){ve.appendChild(pe),v.add(E),ve.onpaint=at=>{const un=at.changedElements;for(const Ht of v)un.includes(Ht.image)&&(Ht.needsUpdate=!0)},ve.requestPaint();return}const He=0,Le=a.RGBA,Ee=a.RGBA,Ke=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,He,Le,Ee,Ke,pe),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(st.length>0){if(ot&&yt){const ve=sn(st[0]);n.texStorage2D(a.TEXTURE_2D,Ce,Ne,ve.width,ve.height)}for(let ve=0,He=st.length;ve<He;ve++)Ue=st[ve],ot?q&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Oe,Ie,Ue):n.texImage2D(a.TEXTURE_2D,ve,Ne,Oe,Ie,Ue);E.generateMipmaps=!1}else if(ot){if(yt){const ve=sn(pe);n.texStorage2D(a.TEXTURE_2D,Ce,Ne,ve.width,ve.height)}q&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Oe,Ie,pe)}else n.texImage2D(a.TEXTURE_2D,0,Ne,Oe,Ie,pe);S(E)&&C(Se),Pe.__version=De.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Je(L,E,ee){if(E.image.length!==6)return;const Se=te(L,E),Ae=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+ee);const De=r.get(Ae);if(Ae.version!==De.__version||Se===!0){n.activeTexture(a.TEXTURE0+ee);const Pe=Ut.getPrimaries(Ut.workingColorSpace),he=E.colorSpace===oa?null:Ut.getPrimaries(E.colorSpace),pe=E.colorSpace===oa||Pe===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let Ee=0;Ee<6;Ee++)!Oe&&!Ie?Ne[Ee]=b(E.image[Ee],!0,l.maxCubemapSize):Ne[Ee]=Ie?E.image[Ee].image:E.image[Ee],Ne[Ee]=we(E,Ne[Ee]);const Ue=Ne[0],st=c.convert(E.format,E.colorSpace),ot=c.convert(E.type),yt=P(E.internalFormat,st,ot,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ce=De.__version===void 0||Se===!0,ve=Ae.dataReady;let He=z(E,Ue);Te(a.TEXTURE_CUBE_MAP,E);let Le;if(Oe){q&&Ce&&n.texStorage2D(a.TEXTURE_CUBE_MAP,He,yt,Ue.width,Ue.height);for(let Ee=0;Ee<6;Ee++){Le=Ne[Ee].mipmaps;for(let Ke=0;Ke<Le.length;Ke++){const at=Le[Ke];E.format!==ji?st!==null?q?ve&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,at.width,at.height,st,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,yt,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,at.width,at.height,st,ot,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,yt,at.width,at.height,0,st,ot,at.data)}}}else{if(Le=E.mipmaps,q&&Ce){Le.length>0&&He++;const Ee=sn(Ne[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,He,yt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ie){q?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ne[Ee].width,Ne[Ee].height,st,ot,Ne[Ee].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,yt,Ne[Ee].width,Ne[Ee].height,0,st,ot,Ne[Ee].data);for(let Ke=0;Ke<Le.length;Ke++){const un=Le[Ke].image[Ee].image;q?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,un.width,un.height,st,ot,un.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,yt,un.width,un.height,0,st,ot,un.data)}}else{q?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,st,ot,Ne[Ee]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,yt,st,ot,Ne[Ee]);for(let Ke=0;Ke<Le.length;Ke++){const at=Le[Ke];q?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,st,ot,at.image[Ee]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,yt,st,ot,at.image[Ee])}}}S(E)&&C(a.TEXTURE_CUBE_MAP),De.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ve(L,E,ee,Se,Ae,De){const Pe=c.convert(ee.format,ee.colorSpace),he=c.convert(ee.type),pe=P(ee.internalFormat,Pe,he,ee.normalized,ee.colorSpace),Oe=r.get(E),Ie=r.get(ee);if(Ie.__renderTarget=E,!Oe.__hasExternalTextures){const Ne=Math.max(1,E.width>>De),Ue=Math.max(1,E.height>>De);Ae===a.TEXTURE_3D||Ae===a.TEXTURE_2D_ARRAY?n.texImage3D(Ae,De,pe,Ne,Ue,E.depth,0,Pe,he,null):n.texImage2D(Ae,De,pe,Ne,Ue,0,Pe,he,null)}n.bindFramebuffer(a.FRAMEBUFFER,L),it(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,Ae,Ie.__webglTexture,0,At(E)):(Ae===a.TEXTURE_2D||Ae>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Se,Ae,Ie.__webglTexture,De),n.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(L,E,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,L),E.depthBuffer){const Se=E.depthTexture,Ae=Se&&Se.isDepthTexture?Se.type:null,De=X(E.stencilBuffer,Ae),Pe=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;it(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,At(E),De,E.width,E.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,At(E),De,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,De,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,L)}else{const Se=E.textures;for(let Ae=0;Ae<Se.length;Ae++){const De=Se[Ae],Pe=c.convert(De.format,De.colorSpace),he=c.convert(De.type),pe=P(De.internalFormat,Pe,he,De.normalized,De.colorSpace);it(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,At(E),pe,E.width,E.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,At(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function lt(L,E,ee){const Se=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ae=r.get(E.depthTexture);if(Ae.__renderTarget=E,(!Ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Se){if(Ae.__webglInit===void 0&&(Ae.__webglInit=!0,E.depthTexture.addEventListener("dispose",G)),Ae.__webglTexture===void 0){Ae.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,Ae.__webglTexture),Te(a.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),Ie=c.convert(E.depthTexture.type);let Ne;E.depthTexture.format===Xa?Ne=a.DEPTH_COMPONENT24:E.depthTexture.format===Dr&&(Ne=a.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,E.width,E.height,0,Oe,Ie,null)}}else I(E.depthTexture,0);const De=Ae.__webglTexture,Pe=At(E),he=Se?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,pe=E.depthTexture.format===Dr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xa)it(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,he,De,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,pe,he,De,0);else if(E.depthTexture.format===Dr)it(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,he,De,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,pe,he,De,0);else throw new Error("Unknown depthTexture format")}function _t(L){const E=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const Se=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Se){const Ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Se.removeEventListener("dispose",Ae)};Se.addEventListener("dispose",Ae),E.__depthDisposeCallback=Ae}E.__boundDepthTexture=Se}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let Se=0;Se<6;Se++)lt(E.__webglFramebuffer[Se],L,Se);else{const Se=L.texture.mipmaps;Se&&Se.length>0?lt(E.__webglFramebuffer[0],L,0):lt(E.__webglFramebuffer,L,0)}else if(ee){E.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[Se]),E.__webglDepthbuffer[Se]===void 0)E.__webglDepthbuffer[Se]=a.createRenderbuffer(),mt(E.__webglDepthbuffer[Se],L,!1);else{const Ae=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer[Se];a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ae,a.RENDERBUFFER,De)}}else{const Se=L.texture.mipmaps;if(Se&&Se.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),mt(E.__webglDepthbuffer,L,!1);else{const Ae=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ae,a.RENDERBUFFER,De)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function zt(L,E,ee){const Se=r.get(L);E!==void 0&&Ve(Se.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&_t(L)}function ft(L){const E=L.texture,ee=r.get(L),Se=r.get(E);L.addEventListener("dispose",M);const Ae=L.textures,De=L.isWebGLCubeRenderTarget===!0,Pe=Ae.length>1;if(Pe||(Se.__webglTexture===void 0&&(Se.__webglTexture=a.createTexture()),Se.__version=E.version,f.memory.textures++),De){ee.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[he]=[];for(let pe=0;pe<E.mipmaps.length;pe++)ee.__webglFramebuffer[he][pe]=a.createFramebuffer()}else ee.__webglFramebuffer[he]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)ee.__webglFramebuffer[he]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let he=0,pe=Ae.length;he<pe;he++){const Oe=r.get(Ae[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=a.createTexture(),f.memory.textures++)}if(L.samples>0&&it(L)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let he=0;he<Ae.length;he++){const pe=Ae[he];ee.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);const Oe=c.convert(pe.format,pe.colorSpace),Ie=c.convert(pe.type),Ne=P(pe.internalFormat,Oe,Ie,pe.normalized,pe.colorSpace,L.isXRRenderTarget===!0),Ue=At(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Ne,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,ee.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),mt(ee.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(De){n.bindTexture(a.TEXTURE_CUBE_MAP,Se.__webglTexture),Te(a.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ve(ee.__webglFramebuffer[he][pe],L,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else Ve(ee.__webglFramebuffer[he],L,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(E)&&C(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let he=0,pe=Ae.length;he<pe;he++){const Oe=Ae[he],Ie=r.get(Oe);let Ne=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Ie.__webglTexture),Te(Ne,Oe),Ve(ee.__webglFramebuffer,L,Oe,a.COLOR_ATTACHMENT0+he,Ne,0),S(Oe)&&C(Ne)}n.unbindTexture()}else{let he=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(he,Se.__webglTexture),Te(he,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ve(ee.__webglFramebuffer[pe],L,E,a.COLOR_ATTACHMENT0,he,pe);else Ve(ee.__webglFramebuffer,L,E,a.COLOR_ATTACHMENT0,he,0);S(E)&&C(he),n.unbindTexture()}L.depthBuffer&&_t(L)}function nn(L){const E=L.textures;for(let ee=0,Se=E.length;ee<Se;ee++){const Ae=E[ee];if(S(Ae)){const De=N(L),Pe=r.get(Ae).__webglTexture;n.bindTexture(De,Pe),C(De),n.unbindTexture()}}}const Vt=[],ct=[];function $(L){if(L.samples>0){if(it(L)===!1){const E=L.textures,ee=L.width,Se=L.height;let Ae=a.COLOR_BUFFER_BIT;const De=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=r.get(L),he=E.length>1;if(he)for(let Oe=0;Oe<E.length;Oe++)n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=L.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ae|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ae|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);const Ie=r.get(E[Oe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ie,0)}a.blitFramebuffer(0,0,ee,Se,0,0,ee,Se,Ae,a.NEAREST),p===!0&&(Vt.length=0,ct.length=0,Vt.push(a.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Vt.push(De),ct.push(De),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ct)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Vt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Oe=0;Oe<E.length;Oe++){n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);const Ie=r.get(E[Oe]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,Ie,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function At(L){return Math.min(l.maxSamples,L.samples)}function it(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function St(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function we(L,E){const ee=L.colorSpace,Se=L.format,Ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==yo&&ee!==oa&&(Ut.getTransfer(ee)===Kt?(Se!==ji||Ae!==Zn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ee)),E}function sn(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=U,this.resetTextureUnits=fe,this.getTextureUnits=H,this.setTextureUnits=B,this.setTexture2D=I,this.setTexture2DArray=V,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=zt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wD(a,e){function n(r,l=oa){let c;const f=Ut.getTransfer(l);if(r===Zn)return a.UNSIGNED_BYTE;if(r===Cm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===wm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Ab)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Rb)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Eb)return a.BYTE;if(r===Tb)return a.SHORT;if(r===Vl)return a.UNSIGNED_SHORT;if(r===Rm)return a.INT;if(r===fa)return a.UNSIGNED_INT;if(r===Yi)return a.FLOAT;if(r===ka)return a.HALF_FLOAT;if(r===Cb)return a.ALPHA;if(r===wb)return a.RGB;if(r===ji)return a.RGBA;if(r===Xa)return a.DEPTH_COMPONENT;if(r===Dr)return a.DEPTH_STENCIL;if(r===Db)return a.RED;if(r===Dm)return a.RED_INTEGER;if(r===ps)return a.RG;if(r===Um)return a.RG_INTEGER;if(r===Nm)return a.RGBA_INTEGER;if(r===Hu||r===Gu||r===Vu||r===ku)if(f===Kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ku)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ip||r===Fp||r===Bp||r===zp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ip)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Ku||r===Wp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Hp||r===Gp)return f===Kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Vp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===kp)return c.COMPRESSED_R11_EAC;if(r===Xp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ku)return c.COMPRESSED_RG11_EAC;if(r===Wp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$p||r===qp||r===Yp||r===jp||r===Kp||r===Zp||r===Qp||r===Jp||r===em||r===tm||r===nm||r===im||r===am||r===rm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===$p)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jp)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===em)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tm)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nm)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===im)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===am)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rm)return f===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sm||r===om||r===lm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===sm)return f===Kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===om)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cm||r===um||r===Zu||r===fm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===cm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===um)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const DD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ND{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Hb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new fi({vertexShader:DD,fragmentShader:UD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LD extends $a{constructor(e,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,_=null,v=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",b=new ND,S={},C=n.getContextAttributes();let N=null,P=null;const X=[],z=[],G=new bt;let M=null;const F=new Fi;F.viewport=new Sn;const Z=new Fi;Z.viewport=new Sn;const k=[F,Z],J=new VR;let fe=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=X[te];return ge===void 0&&(ge=new Hh,X[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=X[te];return ge===void 0&&(ge=new Hh,X[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=X[te];return ge===void 0&&(ge=new Hh,X[te]=ge),ge.getHandSpace()};function B(te){const ge=z.indexOf(te.inputSource);if(ge===-1)return;const Me=X[ge];Me!==void 0&&(Me.update(te.inputSource,te.frame,m||f),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function U(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",D);for(let te=0;te<X.length;te++){const ge=z[te];ge!==null&&(z[te]=null,X[te].disconnect(ge))}fe=null,H=null,b.reset();for(const te in S)delete S[te];e.setRenderTarget(N),y=null,g=null,v=null,l=null,P=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",U),l.addEventListener("inputsourceschange",D),C.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(G),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Be=null,Je=null;C.depth&&(Je=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=C.stencil?Dr:Xa,Be=C.stencil?bo:fa);const Ve={colorFormat:n.RGBA8,depthFormat:Je,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ve),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new ni(g.textureWidth,g.textureHeight,{format:ji,type:Zn,depthTexture:new gs(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Me),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new ni(y.framebufferWidth,y.framebufferHeight,{format:ji,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Te.setContext(l),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function D(te){for(let ge=0;ge<te.removed.length;ge++){const Me=te.removed[ge],Be=z.indexOf(Me);Be>=0&&(z[Be]=null,X[Be].disconnect(Me))}for(let ge=0;ge<te.added.length;ge++){const Me=te.added[ge];let Be=z.indexOf(Me);if(Be===-1){for(let Ve=0;Ve<X.length;Ve++)if(Ve>=z.length){z.push(Me),Be=Ve;break}else if(z[Ve]===null){z[Ve]=Me,Be=Ve;break}if(Be===-1)break}const Je=X[Be];Je&&Je.connect(Me)}}const I=new ce,V=new ce;function se(te,ge,Me){I.setFromMatrixPosition(ge.matrixWorld),V.setFromMatrixPosition(Me.matrixWorld);const Be=I.distanceTo(V),Je=ge.projectionMatrix.elements,Ve=Me.projectionMatrix.elements,mt=Je[14]/(Je[10]-1),lt=Je[14]/(Je[10]+1),_t=(Je[9]+1)/Je[5],zt=(Je[9]-1)/Je[5],ft=(Je[8]-1)/Je[0],nn=(Ve[8]+1)/Ve[0],Vt=mt*ft,ct=mt*nn,$=Be/(-ft+nn),At=$*-ft;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(At),te.translateZ($),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Je[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const it=mt+$,St=lt+$,we=Vt-At,sn=ct+(Be-At),L=_t*lt/St*it,E=zt*lt/St*it;te.projectionMatrix.makePerspective(we,sn,L,E,it,St),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function O(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ge=te.near,Me=te.far;b.texture!==null&&(b.depthNear>0&&(ge=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),J.near=Z.near=F.near=ge,J.far=Z.far=F.far=Me,(fe!==J.near||H!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),fe=J.near,H=J.far),J.layers.mask=te.layers.mask|6,F.layers.mask=J.layers.mask&-5,Z.layers.mask=J.layers.mask&-3;const Be=te.parent,Je=J.cameras;O(J,Be);for(let Ve=0;Ve<Je.length;Ve++)O(Je[Ve],Be);Je.length===2?se(J,F,Z):J.projectionMatrix.copy(F.projectionMatrix),Y(te,J,Be)};function Y(te,ge,Me){Me===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=pm*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&y===null))return p},this.setFoveation=function(te){p=te,g!==null&&(g.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(J)},this.getCameraTexture=function(te){return S[te]};let de=null;function ye(te,ge){if(_=ge.getViewerPose(m||f),T=ge,_!==null){const Me=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Be=!1;Me.length!==J.cameras.length&&(J.cameras.length=0,Be=!0);for(let lt=0;lt<Me.length;lt++){const _t=Me[lt];let zt=null;if(y!==null)zt=y.getViewport(_t);else{const nn=v.getViewSubImage(g,_t);zt=nn.viewport,lt===0&&(e.setRenderTargetTextures(P,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(P))}let ft=k[lt];ft===void 0&&(ft=new Fi,ft.layers.enable(lt),ft.viewport=new Sn,k[lt]=ft),ft.matrix.fromArray(_t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(_t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(zt.x,zt.y,zt.width,zt.height),lt===0&&(J.matrix.copy(ft.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Be===!0&&J.cameras.push(ft)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const lt=v.getDepthInformation(Me[0]);lt&&lt.isValid&&lt.texture&&b.init(lt,l.renderState)}if(Je&&Je.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let lt=0;lt<Me.length;lt++){const _t=Me[lt].camera;if(_t){let zt=S[_t];zt||(zt=new Hb,S[_t]=zt);const ft=v.getCameraImage(_t);zt.sourceTexture=ft}}}}for(let Me=0;Me<X.length;Me++){const Be=z[Me],Je=X[Me];Be!==null&&Je!==void 0&&Je.update(Be,ge,m||f)}de&&de(te,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),T=null}const Te=new kb;Te.setAnimationLoop(ye),this.setAnimationLoop=function(te){de=te},this.dispose=function(){}}}const PD=new Dn,Kb=new dt;Kb.set(-1,0,0,0,1,0,0,0,1);function OD(a,e){function n(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function r(b,S){S.color.getRGB(b.fogColor.value,Gb(a)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function l(b,S,C,N,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(b,S):S.isMeshLambertMaterial?(c(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(b,S),v(b,S)):S.isMeshPhongMaterial?(c(b,S),_(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(b,S),g(b,S),S.isMeshPhysicalMaterial&&y(b,S,P)):S.isMeshMatcapMaterial?(c(b,S),T(b,S)):S.isMeshDepthMaterial?c(b,S):S.isMeshDistanceMaterial?(c(b,S),w(b,S)):S.isMeshNormalMaterial?c(b,S):S.isLineBasicMaterial?(f(b,S),S.isLineDashedMaterial&&h(b,S)):S.isPointsMaterial?p(b,S,C,N):S.isSpriteMaterial?m(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,n(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,n(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,n(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===On&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,n(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===On&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,n(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,n(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const C=e.get(S),N=C.envMap,P=C.envMapRotation;N&&(b.envMap.value=N,b.envMapRotation.value.setFromMatrix4(PD.makeRotationFromEuler(P)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Kb),b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,b.aoMapTransform))}function f(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,n(S.map,b.mapTransform))}function h(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function p(b,S,C,N){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*C,b.scale.value=N*.5,S.map&&(b.map.value=S.map,n(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,n(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function m(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,n(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,n(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function _(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function v(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function g(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function y(b,S,C){b.ior.value=S.ior,S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===On&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=C.texture,b.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,S){S.matcap&&(b.matcap.value=S.matcap)}function w(b,S){const C=e.get(S).light;b.referencePosition.value.setFromMatrixPosition(C.matrixWorld),b.nearDistance.value=C.shadow.camera.near,b.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ID(a,e,n,r){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const P=N.program;r.uniformBlockBinding(C,P)}function m(C,N){let P=l[C.id];P===void 0&&(T(C),P=_(C),l[C.id]=P,C.addEventListener("dispose",b));const X=N.program;r.updateUBOMapping(C,X);const z=e.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const N=v();C.__bindingPointIndex=N;const P=a.createBuffer(),X=C.__size,z=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,X,z),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,P),P}function v(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],P=C.uniforms,X=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let z=0,G=P.length;z<G;z++){const M=Array.isArray(P[z])?P[z]:[P[z]];for(let F=0,Z=M.length;F<Z;F++){const k=M[F];if(y(k,z,F,X)===!0){const J=k.__offset,fe=Array.isArray(k.value)?k.value:[k.value];let H=0;for(let B=0;B<fe.length;B++){const U=fe[B],D=w(U);typeof U=="number"||typeof U=="boolean"?(k.__data[0]=U,a.bufferSubData(a.UNIFORM_BUFFER,J+H,k.__data)):U.isMatrix3?(k.__data[0]=U.elements[0],k.__data[1]=U.elements[1],k.__data[2]=U.elements[2],k.__data[3]=0,k.__data[4]=U.elements[3],k.__data[5]=U.elements[4],k.__data[6]=U.elements[5],k.__data[7]=0,k.__data[8]=U.elements[6],k.__data[9]=U.elements[7],k.__data[10]=U.elements[8],k.__data[11]=0):ArrayBuffer.isView(U)?k.__data.set(new U.constructor(U.buffer,U.byteOffset,k.__data.length)):(U.toArray(k.__data,H),H+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,J,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(C,N,P,X){const z=C.value,G=N+"_"+P;if(X[G]===void 0)return typeof z=="number"||typeof z=="boolean"?X[G]=z:ArrayBuffer.isView(z)?X[G]=z.slice():X[G]=z.clone(),!0;{const M=X[G];if(typeof z=="number"||typeof z=="boolean"){if(M!==z)return X[G]=z,!0}else{if(ArrayBuffer.isView(z))return!0;if(M.equals(z)===!1)return M.copy(z),!0}}return!1}function T(C){const N=C.uniforms;let P=0;const X=16;for(let G=0,M=N.length;G<M;G++){const F=Array.isArray(N[G])?N[G]:[N[G]];for(let Z=0,k=F.length;Z<k;Z++){const J=F[Z],fe=Array.isArray(J.value)?J.value:[J.value];for(let H=0,B=fe.length;H<B;H++){const U=fe[H],D=w(U),I=P%X,V=I%D.boundary,se=I+V;P+=V,se!==0&&X-se<D.storage&&(P+=X-se),J.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=D.storage}}}const z=P%X;return z>0&&(P+=X-z),C.__size=P,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),N}function b(C){const N=C.target;N.removeEventListener("dispose",b);const P=f.indexOf(N.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const C in l)a.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:p,update:m,dispose:S}}const FD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function BD(){return ra===null&&(ra=new wR(FD,16,16,ps,ka),ra.name="DFG_LUT",ra.minFilter=hn,ra.magFilter=hn,ra.wrapS=Ba,ra.wrapT=Ba,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class zD{constructor(e={}){const{canvas:n=sR(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Zn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const w=y,b=new Set([Nm,Um,Dm]),S=new Set([Zn,fa,Vl,bo,Cm,wm]),C=new Uint32Array(4),N=new Int32Array(4),P=new ce;let X=null,z=null;const G=[],M=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let k=!1,J=null;this._outputColorSpace=xn;let fe=0,H=0,B=null,U=-1,D=null;const I=new Sn,V=new Sn;let se=null;const O=new Xt(0);let Y=0,de=n.width,ye=n.height,Te=1,te=null,ge=null;const Me=new Sn(0,0,de,ye),Be=new Sn(0,0,de,ye);let Je=!1;const Ve=new Bb;let mt=!1,lt=!1;const _t=new Dn,zt=new ce,ft=new Sn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ct(){return B===null?Te:1}let $=r;function At(A,K){return n.getContext(A,K)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${of}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",at,!1),$===null){const K="webgl2";if($=At(K,A),$===null)throw At(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Pt("WebGLRenderer: "+A.message),A}let it,St,we,sn,L,E,ee,Se,Ae,De,Pe,he,pe,Oe,Ie,Ne,Ue,st,ot,yt,q,Ce,ve;function He(){it=new B3($),it.init(),q=new wD($,it),St=new D3($,it,e,q),we=new RD($,it),St.reversedDepthBuffer&&g&&we.buffers.depth.setReversed(!0),sn=new G3($),L=new hD,E=new CD($,it,we,L,St,q,sn),ee=new F3(Z),Se=new WR($),Ce=new C3($,Se),Ae=new z3($,Se,sn,Ce),De=new k3($,Ae,Se,Ce,sn),st=new V3($,St,E),Ie=new U3(L),Pe=new dD(Z,ee,it,St,Ce,Ie),he=new OD(Z,L),pe=new mD,Oe=new bD(it),Ue=new R3(Z,ee,we,De,T,p),Ne=new AD(Z,De,St),ve=new ID($,sn,St,we),ot=new w3($,it,sn),yt=new H3($,it,sn),sn.programs=Pe.programs,Z.capabilities=St,Z.extensions=it,Z.properties=L,Z.renderLists=pe,Z.shadowMap=Ne,Z.state=we,Z.info=sn}He(),w!==Zn&&(F=new W3(w,n.width,n.height,l,c));const Le=new LD(Z,$);this.xr=Le,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(de,ye,!1))},this.getSize=function(A){return A.set(de,ye)},this.setSize=function(A,K,oe=!0){if(Le.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=A,ye=K,n.width=Math.floor(A*Te),n.height=Math.floor(K*Te),oe===!0&&(n.style.width=A+"px",n.style.height=K+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(de*Te,ye*Te).floor()},this.setDrawingBufferSize=function(A,K,oe){de=A,ye=K,Te=oe,n.width=Math.floor(A*oe),n.height=Math.floor(K*oe),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(w===Zn){Pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,K,oe,ae){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,K,oe,ae),we.viewport(I.copy(Me).multiplyScalar(Te).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,K,oe,ae){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,K,oe,ae),we.scissor(V.copy(Be).multiplyScalar(Te).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){we.setScissorTest(Je=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,oe=!0){let ae=0;if(A){let re=!1;if(B!==null){const ze=B.texture.format;re=b.has(ze)}if(re){const ze=B.texture.type,Xe=S.has(ze),Fe=Ue.getClearColor(),$e=Ue.getClearAlpha(),We=Fe.r,et=Fe.g,ht=Fe.b;Xe?(C[0]=We,C[1]=et,C[2]=ht,C[3]=$e,$.clearBufferuiv($.COLOR,0,C)):(N[0]=We,N[1]=et,N[2]=ht,N[3]=$e,$.clearBufferiv($.COLOR,0,N))}else ae|=$.COLOR_BUFFER_BIT}K&&(ae|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&$.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",at,!1),Ue.dispose(),pe.dispose(),Oe.dispose(),L.dispose(),ee.dispose(),De.dispose(),Ce.dispose(),ve.dispose(),Pe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",No),Le.removeEventListener("sessionend",Lo),$n.stop()};function Ee(A){A.preventDefault(),_x("WebGLRenderer: Context Lost."),k=!0}function Ke(){_x("WebGLRenderer: Context Restored."),k=!1;const A=sn.autoReset,K=Ne.enabled,oe=Ne.autoUpdate,ae=Ne.needsUpdate,re=Ne.type;He(),sn.autoReset=A,Ne.enabled=K,Ne.autoUpdate=oe,Ne.needsUpdate=ae,Ne.type=re}function at(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function un(A){const K=A.target;K.removeEventListener("dispose",un),Ht(K)}function Ht(A){Ri(A),L.remove(A)}function Ri(A){const K=L.get(A).programs;K!==void 0&&(K.forEach(function(oe){Pe.releaseProgram(oe)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,oe,ae,re,ze){K===null&&(K=nn);const Xe=re.isMesh&&re.matrixWorld.determinant()<0,Fe=ja(A,K,oe,ae,re);we.setMaterial(ae,Xe);let $e=oe.index,We=1;if(ae.wireframe===!0){if($e=Ae.getWireframeAttribute(oe),$e===void 0)return;We=2}const et=oe.drawRange,ht=oe.attributes.position;let Qe=et.start*We,Ot=(et.start+et.count)*We;ze!==null&&(Qe=Math.max(Qe,ze.start*We),Ot=Math.min(Ot,(ze.start+ze.count)*We)),$e!==null?(Qe=Math.max(Qe,0),Ot=Math.min(Ot,$e.count)):ht!=null&&(Qe=Math.max(Qe,0),Ot=Math.min(Ot,ht.count));const on=Ot-Qe;if(on<0||on===1/0)return;Ce.setup(re,ae,Fe,oe,$e);let en,Wt=ot;if($e!==null&&(en=Se.get($e),Wt=yt,Wt.setIndex(en)),re.isMesh)ae.wireframe===!0?(we.setLineWidth(ae.wireframeLinewidth*ct()),Wt.setMode($.LINES)):Wt.setMode($.TRIANGLES);else if(re.isLine){let $t=ae.linewidth;$t===void 0&&($t=1),we.setLineWidth($t*ct()),re.isLineSegments?Wt.setMode($.LINES):re.isLineLoop?Wt.setMode($.LINE_LOOP):Wt.setMode($.LINE_STRIP)}else re.isPoints?Wt.setMode($.POINTS):re.isSprite&&Wt.setMode($.TRIANGLES);if(re.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Wt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const $t=re._multiDrawStarts,ke=re._multiDrawCounts,qn=re._multiDrawCount,Mt=$e?Se.get($e).bytesPerElement:1,Rn=L.get(ae).currentProgram.getUniforms();for(let pi=0;pi<qn;pi++)Rn.setValue($,"_gl_DrawID",pi),Wt.render($t[pi]/Mt,ke[pi])}else if(re.isInstancedMesh)Wt.renderInstances(Qe,on,re.count);else if(oe.isInstancedBufferGeometry){const $t=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,$t);Wt.renderInstances(Qe,on,ke)}else Wt.render(Qe,on)};function hi(A,K,oe){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,_s(A,K,oe),A.side=Va,A.needsUpdate=!0,_s(A,K,oe),A.side=Ti):_s(A,K,oe)}this.compile=function(A,K,oe=null){oe===null&&(oe=A),z=Oe.get(oe),z.init(K),M.push(z),oe.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(z.pushLight(re),re.castShadow&&z.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(z.pushLight(re),re.castShadow&&z.pushShadow(re))}),z.setupLights();const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ze=re.material;if(ze)if(Array.isArray(ze))for(let Xe=0;Xe<ze.length;Xe++){const Fe=ze[Xe];hi(Fe,oe,re),ae.add(Fe)}else hi(ze,oe,re),ae.add(ze)}),z=M.pop(),ae},this.compileAsync=function(A,K,oe=null){const ae=this.compile(A,K,oe);return new Promise(re=>{function ze(){if(ae.forEach(function(Xe){L.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){re(A);return}setTimeout(ze,10)}it.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Or=null;function Uo(A){Or&&Or(A)}function No(){$n.stop()}function Lo(){$n.start()}const $n=new kb;$n.setAnimationLoop(Uo),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(A){Or=A,Le.setAnimationLoop(A),A===null?$n.stop():$n.start()},Le.addEventListener("sessionstart",No),Le.addEventListener("sessionend",Lo),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;J!==null&&J.renderStart(A,K);const oe=Le.enabled===!0&&Le.isPresenting===!0,ae=F!==null&&(B===null||oe)&&F.begin(Z,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(K),K=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,K,B),z=Oe.get(A,M.length),z.init(K),z.state.textureUnits=E.getTextureUnits(),M.push(z),_t.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ve.setFromProjectionMatrix(_t,la,K.reversedDepth),lt=this.localClippingEnabled,mt=Ie.init(this.clippingPlanes,lt),X=pe.get(A,G.length),X.init(),G.push(X),Le.enabled===!0&&Le.isPresenting===!0){const Xe=Z.xr.getDepthSensingMesh();Xe!==null&&mn(Xe,K,-1/0,Z.sortObjects)}mn(A,K,0,Z.sortObjects),X.finish(),Z.sortObjects===!0&&X.sort(te,ge),Vt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Vt&&Ue.addToRenderList(X,A),this.info.render.frame++,mt===!0&&Ie.beginShadows();const re=z.state.shadowsArray;if(Ne.render(re,A,K),mt===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&F.hasRenderPass())===!1){const Xe=X.opaque,Fe=X.transmissive;if(z.setupLights(),K.isArrayCamera){const $e=K.cameras;if(Fe.length>0)for(let We=0,et=$e.length;We<et;We++){const ht=$e[We];ha(Xe,Fe,A,ht)}Vt&&Ue.render(A);for(let We=0,et=$e.length;We<et;We++){const ht=$e[We];Fn(X,A,ht,ht.viewport)}}else Fe.length>0&&ha(Xe,Fe,A,K),Vt&&Ue.render(A),Fn(X,A,K)}B!==null&&H===0&&(E.updateMultisampleRenderTarget(B),E.updateRenderTargetMipmap(B)),ae&&F.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,K),Ce.resetDefaultState(),U=-1,D=null,M.pop(),M.length>0?(z=M[M.length-1],E.setTextureUnits(z.state.textureUnits),mt===!0&&Ie.setGlobalState(Z.clippingPlanes,z.state.camera)):z=null,G.pop(),G.length>0?X=G[G.length-1]:X=null,J!==null&&J.renderEnd()};function mn(A,K,oe,ae){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)z.pushLightProbeGrid(A);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){ae&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const Xe=De.update(A),Fe=A.material;Fe.visible&&X.push(A,Xe,Fe,oe,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const Xe=De.update(A),Fe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ft.copy(Xe.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Fe)){const $e=Xe.groups;for(let We=0,et=$e.length;We<et;We++){const ht=$e[We],Qe=Fe[ht.materialIndex];Qe&&Qe.visible&&X.push(A,Xe,Qe,oe,ft.z,ht)}}else Fe.visible&&X.push(A,Xe,Fe,oe,ft.z,null)}}const ze=A.children;for(let Xe=0,Fe=ze.length;Xe<Fe;Xe++)mn(ze[Xe],K,oe,ae)}function Fn(A,K,oe,ae){const{opaque:re,transmissive:ze,transparent:Xe}=A;z.setupLightsView(oe),mt===!0&&Ie.setGlobalState(Z.clippingPlanes,oe),ae&&we.viewport(I.copy(ae)),re.length>0&&qa(re,K,oe),ze.length>0&&qa(ze,K,oe),Xe.length>0&&qa(Xe,K,oe),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ha(A,K,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ae.id]===void 0){const Qe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ae.id]=new ni(1,1,{generateMipmaps:!0,type:Qe?ka:Zn,minFilter:cs,samples:Math.max(4,St.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const ze=z.state.transmissionRenderTarget[ae.id],Xe=ae.viewport||I;ze.setSize(Xe.z*Z.transmissionResolutionScale,Xe.w*Z.transmissionResolutionScale);const Fe=Z.getRenderTarget(),$e=Z.getActiveCubeFace(),We=Z.getActiveMipmapLevel();Z.setRenderTarget(ze),Z.getClearColor(O),Y=Z.getClearAlpha(),Y<1&&Z.setClearColor(16777215,.5),Z.clear(),Vt&&Ue.render(oe);const et=Z.toneMapping;Z.toneMapping=ca;const ht=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),z.setupLightsView(ae),mt===!0&&Ie.setGlobalState(Z.clippingPlanes,ae),qa(A,oe,ae),E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze),it.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ot=0,on=K.length;Ot<on;Ot++){const en=K[Ot],{object:Wt,geometry:$t,material:ke,group:qn}=en;if(ke.side===Ti&&Wt.layers.test(ae.layers)){const Mt=ke.side;ke.side=On,ke.needsUpdate=!0,Kl(Wt,oe,ae,$t,ke,qn),ke.side=Mt,ke.needsUpdate=!0,Qe=!0}}Qe===!0&&(E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze))}Z.setRenderTarget(Fe,$e,We),Z.setClearColor(O,Y),ht!==void 0&&(ae.viewport=ht),Z.toneMapping=et}function qa(A,K,oe){const ae=K.isScene===!0?K.overrideMaterial:null;for(let re=0,ze=A.length;re<ze;re++){const Xe=A[re],{object:Fe,geometry:$e,group:We}=Xe;let et=Xe.material;et.allowOverride===!0&&ae!==null&&(et=ae),Fe.layers.test(oe.layers)&&Kl(Fe,K,oe,$e,et,We)}}function Kl(A,K,oe,ae,re,ze){A.onBeforeRender(Z,K,oe,ae,re,ze),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(Z,K,oe,ae,A,ze),re.transparent===!0&&re.side===Ti&&re.forceSinglePass===!1?(re.side=On,re.needsUpdate=!0,Z.renderBufferDirect(oe,K,ae,re,A,ze),re.side=Va,re.needsUpdate=!0,Z.renderBufferDirect(oe,K,ae,re,A,ze),re.side=Ti):Z.renderBufferDirect(oe,K,ae,re,A,ze),A.onAfterRender(Z,K,oe,ae,re,ze)}function _s(A,K,oe){K.isScene!==!0&&(K=nn);const ae=L.get(A),re=z.state.lights,ze=z.state.shadowsArray,Xe=re.state.version,Fe=Pe.getParameters(A,re.state,ze,K,oe,z.state.lightProbeGridArray),$e=Pe.getProgramCacheKey(Fe);let We=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,ae.fog=K.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=ee.get(A.envMap||ae.environment,et),ae.envMapRotation=ae.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",un),We=new Map,ae.programs=We);let ht=We.get($e);if(ht!==void 0){if(ae.currentProgram===ht&&ae.lightsStateVersion===Xe)return Ya(A,Fe),ht}else Fe.uniforms=Pe.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,oe,Fe),A.onBeforeCompile(Fe,Z),ht=Pe.acquireProgram(Fe,$e),We.set($e,ht),ae.uniforms=Fe.uniforms;const Qe=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Ie.uniform),Ya(A,Fe),ae.needsLights=Ir(A),ae.lightsStateVersion=Xe,ae.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=z.state.lightProbeGridArray.length>0,ae.currentProgram=ht,ae.uniformsList=null,ht}function Po(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Xu.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Ya(A,K){const oe=L.get(A);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function Oo(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(K.matrixWorld);for(let oe=0,ae=A.length;oe<ae;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(P))return re}return null}function ja(A,K,oe,ae,re){K.isScene!==!0&&(K=nn),E.resetTextureUnits();const ze=K.fog,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?K.environment:null,Fe=B===null?Z.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ut.workingColorSpace,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,We=ee.get(ae.envMap||Xe,$e),et=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ht=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!oe.morphAttributes.position,Ot=!!oe.morphAttributes.normal,on=!!oe.morphAttributes.color;let en=ca;ae.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(en=Z.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,$t=Wt!==void 0?Wt.length:0,ke=L.get(ae),qn=z.state.lights;if(mt===!0&&(lt===!0||A!==D)){const kt=A===D&&ae.id===U;Ie.setState(ae,A,kt)}let Mt=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==qn.state.version||ke.outputColorSpace!==Fe||re.isBatchedMesh&&ke.batching===!1||!re.isBatchedMesh&&ke.batching===!0||re.isBatchedMesh&&ke.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&ke.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||re.isInstancedMesh&&ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ke.instancingMorph===!1&&re.morphTexture!==null||ke.envMap!==We||ae.fog===!0&&ke.fog!==ze||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ie.numPlanes||ke.numIntersection!==Ie.numIntersection)||ke.vertexAlphas!==et||ke.vertexTangents!==ht||ke.morphTargets!==Qe||ke.morphNormals!==Ot||ke.morphColors!==on||ke.toneMapping!==en||ke.morphTargetsCount!==$t||!!ke.lightProbeGrid!=z.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=ae.version);let Rn=ke.currentProgram;Mt===!0&&(Rn=_s(ae,K,re),J&&ae.isNodeMaterial&&J.onUpdateProgram(ae,Rn,ke));let pi=!1,zi=!1,mi=!1;const qt=Rn.getUniforms(),ln=ke.uniforms;if(we.useProgram(Rn.program)&&(pi=!0,zi=!0,mi=!0),ae.id!==U&&(U=ae.id,zi=!0),ke.needsLights){const kt=Oo(z.state.lightProbeGridArray,re);ke.lightProbeGrid!==kt&&(ke.lightProbeGrid=kt,zi=!0)}if(pi||D!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),qt.setValue($,"projectionMatrix",A.projectionMatrix),qt.setValue($,"viewMatrix",A.matrixWorldInverse);const Qi=qt.map.cameraPosition;Qi!==void 0&&Qi.setValue($,zt.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&qt.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&qt.setValue($,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,zi=!0,mi=!0)}if(ke.needsLights&&(qn.state.directionalShadowMap.length>0&&qt.setValue($,"directionalShadowMap",qn.state.directionalShadowMap,E),qn.state.spotShadowMap.length>0&&qt.setValue($,"spotShadowMap",qn.state.spotShadowMap,E),qn.state.pointShadowMap.length>0&&qt.setValue($,"pointShadowMap",qn.state.pointShadowMap,E)),re.isSkinnedMesh){qt.setOptional($,re,"bindMatrix"),qt.setOptional($,re,"bindMatrixInverse");const kt=re.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),qt.setValue($,"boneTexture",kt.boneTexture,E))}re.isBatchedMesh&&(qt.setOptional($,re,"batchingTexture"),qt.setValue($,"batchingTexture",re._matricesTexture,E),qt.setOptional($,re,"batchingIdTexture"),qt.setValue($,"batchingIdTexture",re._indirectTexture,E),qt.setOptional($,re,"batchingColorTexture"),re._colorsTexture!==null&&qt.setValue($,"batchingColorTexture",re._colorsTexture,E));const Hi=oe.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&st.update(re,oe,Rn),(zi||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,qt.setValue($,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&K.environment!==null&&(ln.envMapIntensity.value=K.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=BD()),zi){if(qt.setValue($,"toneMappingExposure",Z.toneMappingExposure),ke.needsLights&&Ka(ln,mi),ze&&ae.fog===!0&&he.refreshFogUniforms(ln,ze),he.refreshMaterialUniforms(ln,ae,Te,ye,z.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const kt=ke.lightProbeGrid;ln.probesSH.value=kt.texture,ln.probesMin.value.copy(kt.boundingBox.min),ln.probesMax.value.copy(kt.boundingBox.max),ln.probesResolution.value.copy(kt.resolution)}Xu.upload($,Po(ke),ln,E)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Xu.upload($,Po(ke),ln,E),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&qt.setValue($,"center",re.center),qt.setValue($,"modelViewMatrix",re.modelViewMatrix),qt.setValue($,"normalMatrix",re.normalMatrix),qt.setValue($,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const kt=ae.uniformsGroups;for(let Qi=0,Qa=kt.length;Qi<Qa;Qi++){const Fr=kt[Qi];ve.update(Fr,Rn),ve.bind(Fr,Rn)}}return Rn}function Ka(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Ir(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,K,oe){const ae=L.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),L.get(A.texture).__webglTexture=K,L.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const oe=L.get(A);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0};const Za=$.createFramebuffer();this.setRenderTarget=function(A,K=0,oe=0){B=A,fe=K,H=oe;let ae=null,re=!1,ze=!1;if(A){const Fe=L.get(A);if(Fe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer($.FRAMEBUFFER,Fe.__webglFramebuffer),I.copy(A.viewport),V.copy(A.scissor),se=A.scissorTest,we.viewport(I),we.scissor(V),we.setScissorTest(se),U=-1;return}else if(Fe.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Fe.__hasExternalTextures)E.rebindTextures(A,L.get(A.texture).__webglTexture,L.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Fe.__boundDepthTexture!==et){if(et!==null&&L.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ze=!0);const We=L.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[K])?ae=We[K][oe]:ae=We[K],re=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?ae=L.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?ae=We[oe]:ae=We,I.copy(A.viewport),V.copy(A.scissor),se=A.scissorTest}else I.copy(Me).multiplyScalar(Te).floor(),V.copy(Be).multiplyScalar(Te).floor(),se=Je;if(oe!==0&&(ae=Za),we.bindFramebuffer($.FRAMEBUFFER,ae)&&we.drawBuffers(A,ae),we.viewport(I),we.scissor(V),we.setScissorTest(se),re){const Fe=L.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,oe)}else if(ze){const Fe=K;for(let $e=0;$e<A.textures.length;$e++){const We=L.get(A.textures[$e]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+$e,We.__webglTexture,oe,Fe)}}else if(A!==null&&oe!==0){const Fe=L.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Fe.__webglTexture,oe)}U=-1},this.readRenderTargetPixels=function(A,K,oe,ae,re,ze,Xe,Fe=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e){we.bindFramebuffer($.FRAMEBUFFER,$e);try{const We=A.textures[Fe],et=We.format,ht=We.type;if(A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Fe),!St.textureFormatReadable(et)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(ht)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ae&&oe>=0&&oe<=A.height-re&&$.readPixels(K,oe,ae,re,q.convert(et),q.convert(ht),ze)}finally{const We=B!==null?L.get(B).__webglFramebuffer:null;we.bindFramebuffer($.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,K,oe,ae,re,ze,Xe,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e)if(K>=0&&K<=A.width-ae&&oe>=0&&oe<=A.height-re){we.bindFramebuffer($.FRAMEBUFFER,$e);const We=A.textures[Fe],et=We.format,ht=We.type;if(A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Fe),!St.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Qe),$.bufferData($.PIXEL_PACK_BUFFER,ze.byteLength,$.STREAM_READ),$.readPixels(K,oe,ae,re,q.convert(et),q.convert(ht),0);const Ot=B!==null?L.get(B).__webglFramebuffer:null;we.bindFramebuffer($.FRAMEBUFFER,Ot);const on=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await oR($,on,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Qe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,ze),$.deleteBuffer(Qe),$.deleteSync(on),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(A.image.width*ae),ze=Math.floor(A.image.height*ae),Xe=K!==null?K.x:0,Fe=K!==null?K.y:0;E.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,oe,0,0,Xe,Fe,re,ze),we.unbindTexture()};const bn=$.createFramebuffer(),Zl=$.createFramebuffer();this.copyTextureToTexture=function(A,K,oe=null,ae=null,re=0,ze=0){let Xe,Fe,$e,We,et,ht,Qe,Ot,on;const en=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(oe!==null)Xe=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,$e=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,et=oe.min.y,ht=oe.isBox3?oe.min.z:0;else{const ln=Math.pow(2,-re);Xe=Math.floor(en.width*ln),Fe=Math.floor(en.height*ln),A.isDataArrayTexture?$e=en.depth:A.isData3DTexture?$e=Math.floor(en.depth*ln):$e=1,We=0,et=0,ht=0}ae!==null?(Qe=ae.x,Ot=ae.y,on=ae.z):(Qe=0,Ot=0,on=0);const Wt=q.convert(K.format),$t=q.convert(K.type);let ke;K.isData3DTexture?(E.setTexture3D(K,0),ke=$.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(E.setTexture2DArray(K,0),ke=$.TEXTURE_2D_ARRAY):(E.setTexture2D(K,0),ke=$.TEXTURE_2D),we.activeTexture($.TEXTURE0),we.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipY),we.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),we.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment);const qn=we.getParameter($.UNPACK_ROW_LENGTH),Mt=we.getParameter($.UNPACK_IMAGE_HEIGHT),Rn=we.getParameter($.UNPACK_SKIP_PIXELS),pi=we.getParameter($.UNPACK_SKIP_ROWS),zi=we.getParameter($.UNPACK_SKIP_IMAGES);we.pixelStorei($.UNPACK_ROW_LENGTH,en.width),we.pixelStorei($.UNPACK_IMAGE_HEIGHT,en.height),we.pixelStorei($.UNPACK_SKIP_PIXELS,We),we.pixelStorei($.UNPACK_SKIP_ROWS,et),we.pixelStorei($.UNPACK_SKIP_IMAGES,ht);const mi=A.isDataArrayTexture||A.isData3DTexture,qt=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const ln=L.get(A),Hi=L.get(K),kt=L.get(ln.__renderTarget),Qi=L.get(Hi.__renderTarget);we.bindFramebuffer($.READ_FRAMEBUFFER,kt.__webglFramebuffer),we.bindFramebuffer($.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let Qa=0;Qa<$e;Qa++)mi&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,L.get(A).__webglTexture,re,ht+Qa),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,L.get(K).__webglTexture,ze,on+Qa)),$.blitFramebuffer(We,et,Xe,Fe,Qe,Ot,Xe,Fe,$.DEPTH_BUFFER_BIT,$.NEAREST);we.bindFramebuffer($.READ_FRAMEBUFFER,null),we.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||L.has(A)){const ln=L.get(A),Hi=L.get(K);we.bindFramebuffer($.READ_FRAMEBUFFER,bn),we.bindFramebuffer($.DRAW_FRAMEBUFFER,Zl);for(let kt=0;kt<$e;kt++)mi?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ln.__webglTexture,re,ht+kt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ln.__webglTexture,re),qt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Hi.__webglTexture,ze,on+kt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Hi.__webglTexture,ze),re!==0?$.blitFramebuffer(We,et,Xe,Fe,Qe,Ot,Xe,Fe,$.COLOR_BUFFER_BIT,$.NEAREST):qt?$.copyTexSubImage3D(ke,ze,Qe,Ot,on+kt,We,et,Xe,Fe):$.copyTexSubImage2D(ke,ze,Qe,Ot,We,et,Xe,Fe);we.bindFramebuffer($.READ_FRAMEBUFFER,null),we.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else qt?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(ke,ze,Qe,Ot,on,Xe,Fe,$e,Wt,$t,en.data):K.isCompressedArrayTexture?$.compressedTexSubImage3D(ke,ze,Qe,Ot,on,Xe,Fe,$e,Wt,en.data):$.texSubImage3D(ke,ze,Qe,Ot,on,Xe,Fe,$e,Wt,$t,en):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ze,Qe,Ot,Xe,Fe,Wt,$t,en.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ze,Qe,Ot,en.width,en.height,Wt,en.data):$.texSubImage2D($.TEXTURE_2D,ze,Qe,Ot,Xe,Fe,Wt,$t,en);we.pixelStorei($.UNPACK_ROW_LENGTH,qn),we.pixelStorei($.UNPACK_IMAGE_HEIGHT,Mt),we.pixelStorei($.UNPACK_SKIP_PIXELS,Rn),we.pixelStorei($.UNPACK_SKIP_ROWS,pi),we.pixelStorei($.UNPACK_SKIP_IMAGES,zi),ze===0&&K.generateMipmaps&&$.generateMipmap(ke),we.unbindTexture()},this.initRenderTarget=function(A){L.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){fe=0,H=0,B=null,we.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var HD=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new da;return n.setAttribute("position",new Bi(a,3)),n.setAttribute("uv",new Bi(e,2)),n})(),Pr=class _m{static get fullscreenGeometry(){return HD}constructor(e="Pass",n=new mm,r=new cf){this.name=e,this.renderer=null,this.scene=n,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Zi(_m.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new mm),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Wl){}render(e,n,r,l,c){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,r){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof ni||n instanceof wo||n instanceof In||n instanceof _m)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},GD=class extends Pr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,n,r,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},VD=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,kD="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",XD=class extends fi{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new _n(null),depthBuffer:new _n(null),channelWeights:new _n(null),opacity:new _n(1)},blending:Ki,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:VD,vertexShader:kD}),this.depthFunc=ju}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(a){this.colorSpaceConversion!==a&&(a?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},WD=class extends Pr{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new XD,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new ni(1,1,{minFilter:hn,magFilter:hn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,n,r,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Zn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===xn&&(this.renderTarget.texture.colorSpace=xn))}},oS=new Xt,Zb=class extends Pr{constructor(a=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,n){this.color=a,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,n,r,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,h=a.getClearAlpha(),p=c!==null,m=f>=0;p?(a.getClearColor(oS),a.setClearColor(c,m?f:h)):m&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(oS,h):m&&a.setClearAlpha(h)}},$D=class extends Pr{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Zb(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,n,r,l){const c=a.getContext(),f=a.state.buffers,h=this.scene,p=this.camera,m=this.clearPass,_=this.inverted?0:1,v=1-_;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,_,4294967295),f.stencil.setClear(v),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,n))),this.renderToScreen?(a.setRenderTarget(null),a.render(h,p)):(a.setRenderTarget(e),a.render(h,p),a.setRenderTarget(n),a.render(h,p)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},cp=1/1e3,qD=1e3,YD=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*cp}get fixedDelta(){return this._fixedDelta*cp}set fixedDelta(a){this._fixedDelta=a*qD}get elapsed(){return this._elapsed*cp}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},lS=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,l,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new WD,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new YD,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples}set multisampling(a){const e=this.inputBuffer,n=this.multisampling;n>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new bt),n=a.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Zn&&a.outputColorSpace===xn&&(this.inputBuffer.texture.colorSpace=xn,this.outputBuffer.texture.colorSpace=xn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,n,r)}}replaceRenderer(a,e=!0){const n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(a),e&&r!==null&&(r.removeChild(n.domElement),r.appendChild(a.domElement)),n}createDepthTexture(){const a=this.inputBuffer,e=new gs;this.depthTexture=e,a.stencilBuffer?(e.format=Dr,e.type=bo):e.type=Yi;const n=e.clone();return n.name="EffectComposer.StableDepth",this.depthRenderTarget=new ni(a.width,a.height,{depthBuffer:!0,stencilBuffer:a.stencilBuffer,depthTexture:n}),n}blitDepthBuffer(a){const e=this.renderer,n=this.depthRenderTarget,r=e.properties,l=e.getContext();e.setRenderTarget(n);const c=r.get(a).__webglFramebuffer,f=r.get(n).__webglFramebuffer,h=a.stencilBuffer?l.DEPTH_BUFFER_BIT|l.STENCIL_BUFFER_BIT:l.DEPTH_BUFFER_BIT;l.bindFramebuffer(l.READ_FRAMEBUFFER,c),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,f),l.blitFramebuffer(0,0,a.width,a.height,0,0,n.width,n.height,h,l.NEAREST),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,n,r){const l=this.renderer,c=l===null?new bt:l.getDrawingBufferSize(new bt),f={minFilter:hn,magFilter:hn,stencilBuffer:e,depthBuffer:a,type:n},h=new ni(c.width,c.height,f);return r>0&&(h.samples=r),n===Zn&&l!==null&&l.outputColorSpace===xn&&(h.texture.colorSpace=xn),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const n=this.passes,r=this.renderer,l=r.getDrawingBufferSize(new bt),c=r.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.renderer=r,a.setSize(l.width,l.height),a.initialize(r,c,f),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,a):n.push(a),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(a of n)a.setDepthTexture(h)}else{const h=this.depthRenderTarget.depthTexture;a.setDepthTexture(h)}}removePass(a){const e=this.passes,n=e.indexOf(a);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const c=(h,p)=>h||p.needsDepthTexture;if(!e.reduce(c,!1)){const h=this.depthRenderTarget.depthTexture;a.getDepthTexture()===h&&a.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&n===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,n=this.copyPass;let r=this.inputBuffer,l=this.outputBuffer,c,f=!1;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const h of this.passes)if(h.enabled){if(r.depthTexture=this.depthTexture,l.depthTexture=null,h.render(e,r,l,a,f),h.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),h.needsSwap){if(f){n.renderToScreen=h.renderToScreen;const p=e.getContext(),m=e.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),n.render(e,r,l,a,f),m.setFunc(p.EQUAL,1,4294967295)}c=r,r=l,l=c}h instanceof $D?f=!0:h instanceof GD&&(f=!1)}}setSize(a,e,n){const r=this.renderer,l=r.getSize(new bt);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&r.setSize(a,e,n);const c=r.getDrawingBufferSize(new bt);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Pr.fullscreenGeometry.dispose()}},us={NONE:0,DEPTH:1,CONVOLUTION:2},Bt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},jD=class{constructor(){this.shaderParts=new Map([[Bt.FRAGMENT_HEAD,null],[Bt.FRAGMENT_MAIN_UV,null],[Bt.FRAGMENT_MAIN_IMAGE,null],[Bt.VERTEX_HEAD,null],[Bt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=us.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=yo}},up=!1,cS=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Ti:n=this.materialsFlatShadedDoubleSide;break;case On:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Ti:n=this.materialsDoubleSide;break;case On:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof fi))return a.clone();const e=a.uniforms,n=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,n.set(l,c))}const r=a.clone();for(const l of n)e[l[0]].value=l[1],r.uniforms[l[0]].value=l[1];return r}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const n of e)n.uniforms=Object.assign({},a.uniforms),n.side=Va;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.side=On,r}),this.materialsDoubleSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.side=Ti,r}),this.materialsFlatShaded=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r.side=On,r}),this.materialsFlatShadedDoubleSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r.side=Ti,r})}}render(a,e,n){const r=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,up){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,n);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,n),e.overrideMaterial=l}a.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return up}static set workaroundEnabled(a){up=a}},Dt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},KD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",QD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_U="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",xU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",AU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CU=new Map([[Dt.ADD,KD],[Dt.ALPHA,ZD],[Dt.AVERAGE,QD],[Dt.COLOR,JD],[Dt.COLOR_BURN,eU],[Dt.COLOR_DODGE,tU],[Dt.DARKEN,nU],[Dt.DIFFERENCE,iU],[Dt.DIVIDE,aU],[Dt.DST,null],[Dt.EXCLUSION,rU],[Dt.HARD_LIGHT,sU],[Dt.HARD_MIX,oU],[Dt.HUE,lU],[Dt.INVERT,cU],[Dt.INVERT_RGB,uU],[Dt.LIGHTEN,fU],[Dt.LINEAR_BURN,dU],[Dt.LINEAR_DODGE,hU],[Dt.LINEAR_LIGHT,pU],[Dt.LUMINOSITY,mU],[Dt.MULTIPLY,gU],[Dt.NEGATION,vU],[Dt.NORMAL,_U],[Dt.OVERLAY,xU],[Dt.PIN_LIGHT,SU],[Dt.REFLECT,bU],[Dt.SATURATION,yU],[Dt.SCREEN,MU],[Dt.SOFT_LIGHT,EU],[Dt.SRC,TU],[Dt.SUBTRACT,AU],[Dt.VIVID_LIGHT,RU]]),wU=class extends $a{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new _n(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return CU.get(this.blendFunction)}},Qb=class extends $a{constructor(a,e,{attributes:n=us.NONE,blendFunction:r=Dt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=a,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new wU(r),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=yo,this._outputColorSpace=oa}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Wl){}update(a,e,n){}setSize(a,e){}initialize(a,e,n){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof ni||e instanceof wo||e instanceof In||e instanceof Pr)&&this[a].dispose()}}},uS=class extends Pr{constructor(a,e,n=null){super("RenderPass",a,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Zb,this.overrideMaterialManager=n===null?null:new cS(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new cS(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,n,r,l){const c=this.scene,f=this.camera,h=this.selection,p=f.layers.mask,m=c.background,_=a.shadowMap.autoUpdate,v=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,f):a.render(c,f),f.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=_}},DU=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,UU="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",NU=class extends fi{constructor(a,e,n,r,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:of.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new _n(null),depthBuffer:new _n(null),resolution:new _n(new bt),texelSize:new _n(new bt),cameraNear:new _n(.3),cameraFar:new _n(1e3),aspect:new _n(1),time:new _n(0)},blending:Ki,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(r)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Wl){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=DU.replace(Bt.FRAGMENT_HEAD,a.get(Bt.FRAGMENT_HEAD)||"").replace(Bt.FRAGMENT_MAIN_UV,a.get(Bt.FRAGMENT_MAIN_UV)||"").replace(Bt.FRAGMENT_MAIN_IMAGE,a.get(Bt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=UU.replace(Bt.VERTEX_HEAD,a.get(Bt.VERTEX_HEAD)||"").replace(Bt.VERTEX_MAIN_SUPPORT,a.get(Bt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof Fi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const n=this.uniforms;n.resolution.value.set(a,e),n.texelSize.value.set(1/a,1/e),n.aspect.value=a/e}static get Section(){return Bt}};function fS(a,e,n){for(const r of e){const l="$1"+a+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const f of n.entries())f[1]!==null&&n.set(f[0],f[1].replace(c,l))}}function LU(a,e,n){let r=e.getFragmentShader(),l=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),f=r!==void 0&&/mainUv/.test(r);if(n.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(n.attributes&us.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let m=p.get(Bt.FRAGMENT_HEAD)||"",_=p.get(Bt.FRAGMENT_MAIN_UV)||"",v=p.get(Bt.FRAGMENT_MAIN_IMAGE)||"",g=p.get(Bt.VERTEX_HEAD)||"",y=p.get(Bt.VERTEX_MAIN_SUPPORT)||"";const T=new Set,w=new Set;if(f&&(_+=`	${a}MainUv(UV);
`,n.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const C=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${a}MainSupport(`,y+=C?`vUv);
`:`);
`;for(const N of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const P of N[1].split(/\s*,\s*/))n.varyings.add(P),T.add(P),w.add(P);for(const N of l.matchAll(h))w.add(N[1])}for(const C of r.matchAll(h))w.add(C[1]);for(const C of e.defines.keys())w.add(C.replace(/\([\w\s,]*\)/g,""));for(const C of e.uniforms.keys())w.add(C);w.delete("while"),w.delete("for"),w.delete("if"),e.uniforms.forEach((C,N)=>n.uniforms.set(a+N.charAt(0).toUpperCase()+N.slice(1),C)),e.defines.forEach((C,N)=>n.defines.set(a+N.charAt(0).toUpperCase()+N.slice(1),C));const b=new Map([["fragment",r],["vertex",l]]);fS(a,w,n.defines),fS(a,w,b),r=b.get("fragment"),l=b.get("vertex");const S=e.blendMode;if(n.blendModes.set(S.blendFunction,S),c){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(v+=e.inputColorSpace===xn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==oa?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const C=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${a}MainImage(color0, UV, `,(n.attributes&us.DEPTH)!==0&&C.test(r)&&(v+="depth, ",n.readDepth=!0),v+=`color1);
	`;const N=a+"BlendOpacity";n.uniforms.set(N,S.opacity),v+=`color0 = blend${S.blendFunction}(color0, color1, ${N});

	`,m+=`uniform float ${N};

`}if(m+=r+`
`,l!==null&&(g+=l+`
`),p.set(Bt.FRAGMENT_HEAD,m),p.set(Bt.FRAGMENT_MAIN_UV,_),p.set(Bt.FRAGMENT_MAIN_IMAGE,v),p.set(Bt.VERTEX_HEAD,g),p.set(Bt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const C of e.extensions)n.extensions.add(C)}}var dS=class extends Pr{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new NU(null,null,null,a),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new jD;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===Dt.DST)a.attributes|=f.getAttributes()&us.DEPTH;else{if((a.attributes&f.getAttributes()&us.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);LU("e"+e++,f,a)}let n=a.shaderParts.get(Bt.FRAGMENT_HEAD),r=a.shaderParts.get(Bt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Bt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of a.blendModes.values())n+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(a.attributes&us.DEPTH)!==0?(a.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===xn&&(r+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Bt.FRAGMENT_HEAD,n),a.shaderParts.set(Bt.FRAGMENT_MAIN_IMAGE,r),a.shaderParts.set(Bt.FRAGMENT_MAIN_UV,l);for(const[f,h]of a.shaderParts)h!==null&&a.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Wl){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(a,e)}render(a,e,n,r,l){for(const c of this.effects)c.update(a,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const n of this.effects)n.setSize(a,e)}initialize(a,e,n){this.renderer=a;for(const r of this.effects)r.initialize(a,e,n);this.updateMaterial(),n!==void 0&&n!==Zn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const PU=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);const r=new In(e);r.minFilter=hn,r.magFilter=hn,r.generateMipmaps=!1;const l=[];let c=null;const f=64;let h=.1*64;const p=1/f,m=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},_=y=>{const T={x:y.x*64,y:(1-y.y)*64};let w=1;const b=P=>Math.sin(P*Math.PI/2),S=P=>-P*(P-2);y.age<f*.3?w=b(y.age/(f*.3)):w=S(1-(y.age-f*.3)/(f*.7))||0,w*=y.force;const C=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${w*255}`,N=320;n.shadowOffsetX=N,n.shadowOffsetY=N,n.shadowBlur=h,n.shadowColor=`rgba(${C},${.22*w})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(T.x-N,T.y-N,h,0,Math.PI*2),n.fill()};return{canvas:e,texture:r,addTouch:y=>{let T=0,w=0,b=0;if(c){const S=y.x-c.x,C=y.y-c.y;if(S===0&&C===0)return;const N=S*S+C*C,P=Math.sqrt(N);w=S/(P||1),b=C/(P||1),T=Math.min(N*1e4,1)}c={x:y.x,y:y.y},l.push({x:y.x,y:y.y,age:0,force:T,vx:w,vy:b})},update:()=>{m();for(let y=l.length-1;y>=0;y--){const T=l[y],w=T.force*p*(1-T.age/f);T.x+=T.vx*w,T.y+=T.vy*w,T.age++,T.age>f&&l.splice(y,1)}for(let y=0;y<l.length;y++)_(l[y]);r.needsUpdate=!0},set radiusScale(y){h=.1*64*y},get radiusScale(){return h/(.1*64)},size:64}},OU=(a,e)=>{const n=`
  uniform sampler2D uTexture;
  uniform float uStrength;
  uniform float uTime;
  uniform float uFreq;

  void mainUv(inout vec2 uv) {
    vec4 tex = texture2D(uTexture, uv);
    float vx = tex.r * 2.0 - 1.0;
    float vy = tex.g * 2.0 - 1.0;
    float intensity = tex.b;

    float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

    float amt = uStrength * intensity * wave;

    uv += vec2(vx, vy) * amt;
  }
  `;return new Qb("LiquidEffect",n,{uniforms:new Map([["uTexture",new _n(a)],["uStrength",new _n((e==null?void 0:e.strength)??.025)],["uTime",new _n(0)],["uFreq",new _n((e==null?void 0:e.freq)??4.5)]])})},hS={square:0,circle:1,triangle:2,diamond:3},IU=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,FU=`
precision highp float;

uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int uShapeType;
const int SHAPE_SQUARE = 0;
const int SHAPE_CIRCLE = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND = 3;

const int MAX_CLICKS = 10;

uniform vec2 uClickPos [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES 5
#define FBM_LACUNARITY 1.25
#define FBM_GAIN 1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0 = mix(x00, x10, w.y);
  float y1 = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT = 1.0;
  const float dampR = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if (uShapeType == SHAPE_CIRCLE) M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND) M = maskDiamond(pixelUV, coverage);
  else M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,fp=10,BU=({variant:a="square",pixelSize:e=3,color:n="#B497CF",className:r,style:l,antialias:c=!0,patternScale:f=2,patternDensity:h=1,liquid:p=!1,liquidStrength:m=.1,liquidRadius:_=1,pixelSizeJitter:v=0,enableRipples:g=!0,rippleIntensityScale:y=1,rippleThickness:T=.1,rippleSpeed:w=.3,liquidWobbleSpeed:b=4.5,autoPauseOffscreen:S=!0,speed:C=.5,transparent:N=!0,edgeFade:P=.5,noiseAmount:X=0})=>{const z=_e.useRef(null),G=_e.useRef({visible:!0}),M=_e.useRef(C),F=_e.useRef(null),Z=_e.useRef(null);return _e.useEffect(()=>{var B,U,D;const k=z.current;if(!k)return;M.current=C;const J=["antialias","liquid","noiseAmount"],fe={antialias:c,liquid:p,noiseAmount:X};let H=!1;if(!F.current)H=!0;else if(Z.current){for(const I of J)if(Z.current[I]!==fe[I]){H=!0;break}}if(H){if(F.current){const ct=F.current;(B=ct.resizeObserver)==null||B.disconnect(),cancelAnimationFrame(ct.raf),(U=ct.quad)==null||U.geometry.dispose(),ct.material.dispose(),(D=ct.composer)==null||D.dispose(),ct.renderer.dispose(),ct.renderer.forceContextLoss(),ct.renderer.domElement.parentElement===k&&k.removeChild(ct.renderer.domElement),F.current=null}const I=document.createElement("canvas"),V=new zD({canvas:I,antialias:c,alpha:!0,powerPreference:"high-performance"});V.domElement.style.width="100%",V.domElement.style.height="100%",V.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),k.appendChild(V.domElement),N?V.setClearAlpha(0):V.setClearColor(0,1);const se={uResolution:{value:new bt(0,0)},uTime:{value:0},uColor:{value:new Xt(n)},uClickPos:{value:Array.from({length:fp},()=>new bt(-1,-1))},uClickTimes:{value:new Float32Array(fp)},uShapeType:{value:hS[a]??0},uPixelSize:{value:e*V.getPixelRatio()},uScale:{value:f},uDensity:{value:h},uPixelJitter:{value:v},uEnableRipples:{value:g?1:0},uRippleSpeed:{value:w},uRippleThickness:{value:T},uRippleIntensity:{value:y},uEdgeFade:{value:P}},O=new mm,Y=new cf(-1,1,1,-1,0,1),de=new fi({vertexShader:IU,fragmentShader:FU,uniforms:se,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:dm}),ye=new jl(2,2),Te=new Zi(ye,de);O.add(Te);const te=new kR,ge=()=>{var At;const ct=k.clientWidth||1,$=k.clientHeight||1;V.setSize(ct,$,!1),se.uResolution.value.set(V.domElement.width,V.domElement.height),(At=F.current)!=null&&At.composer&&F.current.composer.setSize(V.domElement.width,V.domElement.height),se.uPixelSize.value=e*V.getPixelRatio()};ge();const Me=new ResizeObserver(ge);Me.observe(k);const Je=(()=>{var ct;if(typeof window<"u"&&((ct=window.crypto)!=null&&ct.getRandomValues)){const $=new Uint32Array(1);return window.crypto.getRandomValues($),$[0]/4294967295}return Math.random()})()*1e3;let Ve,mt,lt;if(p){mt=PU(),mt.radiusScale=_,Ve=new lS(V);const ct=new uS(O,Y);lt=OU(mt.texture,{strength:m,freq:b});const $=new dS(Y,lt);$.renderToScreen=!0,Ve.addPass(ct),Ve.addPass($)}if(X>0){Ve||(Ve=new lS(V),Ve.addPass(new uS(O,Y)));const ct=new Qb("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new _n(0)],["uAmount",new _n(X)]])}),$=new dS(Y,ct);$.renderToScreen=!0,Ve&&Ve.passes.length>0&&Ve.passes.forEach(At=>At.renderToScreen=!1),Ve.addPass($)}Ve&&Ve.setSize(V.domElement.width,V.domElement.height);const _t=ct=>{const $=V.domElement.getBoundingClientRect(),At=V.domElement.width/$.width,it=V.domElement.height/$.height,St=(ct.clientX-$.left)*At,we=($.height-(ct.clientY-$.top))*it;return{fx:St,fy:we,w:V.domElement.width,h:V.domElement.height}},zt=ct=>{var St;const{fx:$,fy:At}=_t(ct),it=((St=F.current)==null?void 0:St.clickIx)??0;se.uClickPos.value[it].set($,At),se.uClickTimes.value[it]=se.uTime.value,F.current&&(F.current.clickIx=(it+1)%fp)},ft=ct=>{if(!mt)return;const{fx:$,fy:At,w:it,h:St}=_t(ct);mt.addTouch({x:$/it,y:At/St})};V.domElement.addEventListener("pointerdown",zt,{passive:!0}),V.domElement.addEventListener("pointermove",ft,{passive:!0});let nn=0;const Vt=()=>{if(S&&!G.current.visible){nn=requestAnimationFrame(Vt);return}se.uTime.value=Je+te.getElapsedTime()*M.current,lt&&(lt.uniforms.get("uTime").value=se.uTime.value),Ve?(mt&&mt.update(),Ve.passes.forEach(ct=>{const $=ct.effects;$&&$.forEach(At=>{var St;const it=(St=At.uniforms)==null?void 0:St.get("uTime");it&&(it.value=se.uTime.value)})}),Ve.render()):V.render(O,Y),nn=requestAnimationFrame(Vt)};nn=requestAnimationFrame(Vt),F.current={renderer:V,scene:O,camera:Y,material:de,clock:te,clickIx:0,uniforms:se,resizeObserver:Me,raf:nn,quad:Te,timeOffset:Je,composer:Ve,touch:mt,liquidEffect:lt}}else{const I=F.current;if(I.uniforms.uShapeType.value=hS[a]??0,I.uniforms.uPixelSize.value=e*I.renderer.getPixelRatio(),I.uniforms.uColor.value.set(n),I.uniforms.uScale.value=f,I.uniforms.uDensity.value=h,I.uniforms.uPixelJitter.value=v,I.uniforms.uEnableRipples.value=g?1:0,I.uniforms.uRippleIntensity.value=y,I.uniforms.uRippleThickness.value=T,I.uniforms.uRippleSpeed.value=w,I.uniforms.uEdgeFade.value=P,N?I.renderer.setClearAlpha(0):I.renderer.setClearColor(0,1),I.liquidEffect){const V=I.liquidEffect.uniforms.get("uStrength");V&&(V.value=m);const se=I.liquidEffect.uniforms.get("uFreq");se&&(se.value=b)}I.touch&&(I.touch.radiusScale=_)}return Z.current=fe,()=>{var V,se,O;if(F.current&&H||!F.current)return;const I=F.current;(V=I.resizeObserver)==null||V.disconnect(),cancelAnimationFrame(I.raf),(se=I.quad)==null||se.geometry.dispose(),I.material.dispose(),(O=I.composer)==null||O.dispose(),I.renderer.dispose(),I.renderer.forceContextLoss(),I.renderer.domElement.parentElement===k&&k.removeChild(I.renderer.domElement),F.current=null}},[c,p,X,e,f,h,g,y,T,w,v,P,N,m,_,b,S,a,n,C]),Re.jsx("div",{ref:z,className:`pixelblast-canvas ${r??""}`,style:l})};function zU({children:a,className:e="",colors:n=["#6366f1","#38bdf8","#a78bfa","#38bdf8","#6366f1"],animationSpeed:r=9,as:l="span"}){const c={backgroundImage:`linear-gradient(to right, ${n.join(", ")})`,backgroundSize:"300% 100%",animationDuration:`${r}s`};return Re.jsx(l,{className:`gradient-text ${e}`,style:c,children:a})}const HU=["#6366f1","#38bdf8","#a78bfa"],Vn={IDLE:"idle",PICKING:"picking",COMBINING:"combining",DONE:"done",ERROR:"error"};async function Fu(a,e){const n=await fetch(a,e),r=await n.json().catch(()=>({}));if(!n.ok||r.error)throw new Error(r.error||`Request failed (${n.status})`);return r}function GU(){const[a,e]=_e.useState(null),[n,r]=_e.useState(Vn.IDLE),[l,c]=_e.useState(0),[f,h]=_e.useState(""),[p,m]=_e.useState(""),[_,v]=_e.useState(""),g=_e.useRef(null);_e.useEffect(()=>()=>clearInterval(g.current),[]);const y=()=>{r(Vn.IDLE),c(0),h(""),m(""),v("")};async function T(){v(""),r(Vn.PICKING);try{const P=await Fu("/api/choose-folder");if(P.cancelled){r(Vn.IDLE);return}e({path:P.path,name:P.name,count:P.count}),r(Vn.IDLE),c(0),m("")}catch(P){v(P.message),r(Vn.ERROR)}}function w(){clearInterval(g.current),g.current=setInterval(async()=>{try{const P=await Fu("/api/progress");c(P.percent??0),P.message&&h(P.message),P.state==="done"?(clearInterval(g.current),c(100),m(P.output||""),r(Vn.DONE)):P.state==="error"&&(clearInterval(g.current),v(P.message||"Something went wrong while combining."),r(Vn.ERROR))}catch(P){clearInterval(g.current),v(P.message),r(Vn.ERROR)}},500)}async function b(){if(a){v(""),c(0),h("Preparing…"),r(Vn.COMBINING);try{await Fu("/api/combine",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folder:a.path})}),w()}catch(P){v(P.message),r(Vn.ERROR)}}}async function S(){try{await Fu(`/api/reveal?path=${encodeURIComponent(p)}`)}catch(P){v(P.message)}}const C=n===Vn.COMBINING,N=a&&a.count>0&&!C;return Re.jsxs("div",{className:"relative min-h-full overflow-hidden flex items-center justify-center p-6",children:[Re.jsx("div",{className:"pixelblast-bg","aria-hidden":"true",children:Re.jsx(BU,{variant:"square",pixelSize:4,color:"#818cf8",patternScale:2.4,patternDensity:1.1,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.4,edgeFade:.6,speed:.6})}),Re.jsxs("main",{className:"relative z-10 w-full max-w-xl",children:[Re.jsxs("header",{className:"reveal flex flex-col items-center text-center gap-5 mb-9",style:{animationDelay:"0.05s"},children:[Re.jsx("div",{className:"size-16 rounded-2xl bg-white/5 backdrop-blur ring-1 ring-accent/25 text-accent flex items-center justify-center shadow-lg",children:Re.jsx(mA,{className:"size-8",strokeWidth:1.6})}),Re.jsxs("div",{className:"space-y-2",children:[Re.jsx(zU,{as:"h1",colors:[...HU,"#38bdf8","#6366f1"],animationSpeed:9,className:"font-display text-[3rem] leading-[1.05] font-extrabold tracking-tight",children:"Video Combiner"}),Re.jsx("p",{className:"text-muted text-lg",children:"Merge a folder of clips into one video."})]})]}),Re.jsx(ax,{className:"glass-card reveal rounded-3xl overflow-hidden",style:{animationDelay:"0.18s"},children:Re.jsxs(ax.Content,{className:"flex flex-col gap-5 p-7",children:[Re.jsxs("div",{className:"flex gap-3",children:[Re.jsxs(hu,{variant:"outline",size:"lg",onPress:T,isDisabled:C||n===Vn.PICKING,className:"flex-1 justify-start min-w-0",title:a?a.path:void 0,children:[n===Vn.PICKING?Re.jsx(lx,{className:"size-5 shrink-0 animate-spin text-accent"}):Re.jsx(xA,{className:"size-5 shrink-0 text-accent"}),Re.jsx("span",{className:"truncate font-medium",children:a?a.name:"Select folder"})]}),Re.jsxs(hu,{variant:"primary",size:"lg",onPress:b,isDisabled:!N,className:"btn-glow shrink-0 font-semibold",children:[C?Re.jsx(lx,{className:"size-5 animate-spin"}):Re.jsx(AA,{className:"size-5"}),C?"Combining…":"Combine videos"]})]}),a&&a.count>0&&!C&&n!==Vn.DONE&&Re.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[Re.jsxs(sx,{color:"success",variant:"soft",size:"sm",children:[Re.jsx(vA,{className:"size-3.5"}),Re.jsxs(sx.Label,{className:"font-mono tracking-wide",children:[a.count," clip",a.count===1?"":"s"]})]}),Re.jsx("span",{className:"font-mono text-xs text-muted truncate",children:a.path})]}),a&&a.count===0&&Re.jsxs(ei,{status:"warning",children:[Re.jsx(ei.Indicator,{children:Re.jsx(cx,{className:"size-4"})}),Re.jsxs(ei.Content,{children:[Re.jsx(ei.Title,{children:"No videos in this folder"}),Re.jsx(ei.Description,{children:"Choose a folder that contains .mp4 files."})]})]}),C&&Re.jsxs("div",{className:"flex flex-col gap-3",children:[Re.jsxs("div",{className:"flex items-end justify-between",children:[Re.jsx("span",{className:"text-sm text-muted",children:f||"Working…"}),Re.jsxs("span",{className:"font-mono text-2xl font-semibold tabular-nums text-accent leading-none",children:[String(Math.round(l)).padStart(2,"0"),Re.jsx("span",{className:"text-base text-muted",children:"%"})]})]}),Re.jsx(wh,{value:l,"aria-label":"Combining progress",children:Re.jsx(wh.Track,{className:"vc-track",children:Re.jsx(wh.Fill,{className:"vc-fill"})})})]}),n===Vn.DONE&&Re.jsxs("div",{className:"flex flex-col gap-4",children:[Re.jsxs(ei,{status:"success",children:[Re.jsx(ei.Indicator,{children:Re.jsx(hA,{className:"size-4"})}),Re.jsxs(ei.Content,{children:[Re.jsx(ei.Title,{children:"Your video is ready"}),Re.jsx(ei.Description,{className:"font-mono text-xs break-all",children:p})]})]}),Re.jsxs("div",{className:"flex gap-3",children:[Re.jsxs(hu,{variant:"primary",size:"lg",onPress:S,className:"btn-glow flex-1",children:[Re.jsx(bA,{className:"size-5"}),"Show in Finder"]}),Re.jsxs(hu,{variant:"outline",size:"lg",onPress:y,children:[Re.jsx(EA,{className:"size-5"}),"Start over"]})]})]}),n===Vn.ERROR&&_&&Re.jsxs(ei,{status:"danger",children:[Re.jsx(ei.Indicator,{children:Re.jsx(cx,{className:"size-4"})}),Re.jsxs(ei.Content,{children:[Re.jsx(ei.Title,{children:"Couldn’t finish"}),Re.jsx(ei.Description,{className:"break-words",children:_})]})]})]})}),Re.jsx("p",{className:"reveal text-center text-xs text-muted/70 mt-6",style:{animationDelay:"0.3s"},children:"Clips are joined in filename order and saved beside the originals."})]})]})}uE.createRoot(document.getElementById("root")).render(Re.jsx(_e.StrictMode,{children:Re.jsx(GU,{})}));
