var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var x=ee.prototype=new b;x.constructor=ee,_(x,y.prototype),x.isPureReactComponent=!0;var te=Array.isArray;function ne(){}var S={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return C(e.type,t,e.props)}function ae(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function oe(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var se=/\/+/g;function ce(e,t){return typeof e==`object`&&e&&e.key!=null?oe(``+e.key):t.toString(36)}function w(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ne,ne):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ce(e,0):a,te(o)?(i=``,c!=null&&(i=c.replace(se,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ae(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(se,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(te(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ce(a,u),c+=le(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ce(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(w(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function pe(e){var t=S.T,n={};n.types=t===null?null:t.types,S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ne,fe)}catch(e){fe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}}function me(e){var t=S.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else pe(me.bind(null,e))}var he={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=he,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.addTransitionType=me,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!re.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)re.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ae,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=pe,e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,x||(x=!0,ie());else{var t=n(l);t!==null&&se(ee,t.startTime-e)}}}var x=!1,te=-1,ne=5,S=-1;function re(){return g?!0:!(e.unstable_now()-S<ne)}function C(){if(g=!1,x){var t=e.unstable_now();S=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():x=!1}}}var ie;if(typeof y==`function`)ie=function(){y(C)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=C,ie=function(){oe.postMessage(null)}}else ie=function(){_(C,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ne=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,x||(x=!0,ie()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var ee=null,x=null;function te(e,t,n){return e===n||e===t&&(ee=e,!0)}function ne(e,t,n){return e===n?(x=e,!1):e===t&&(x!==null&&(ee=e),!0)}function S(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function re(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var C=Object.assign,ie=Symbol.for(`react.element`),ae=Symbol.for(`react.transitional.element`),oe=Symbol.for(`react.portal`),se=Symbol.for(`react.fragment`),ce=Symbol.for(`react.strict_mode`),w=Symbol.for(`react.profiler`),le=Symbol.for(`react.consumer`),ue=Symbol.for(`react.context`),de=Symbol.for(`react.forward_ref`),fe=Symbol.for(`react.suspense`),pe=Symbol.for(`react.suspense_list`),me=Symbol.for(`react.memo`),he=Symbol.for(`react.lazy`),ge=Symbol.for(`react.activity`),_e=Symbol.for(`react.legacy_hidden`),ve=Symbol.for(`react.memo_cache_sentinel`),ye=Symbol.for(`react.view_transition`),be=Symbol.for(`react.recoverable`),xe=Symbol.iterator;function Se(e){return typeof e!=`object`||!e?null:(e=xe&&e[xe]||e[`@@iterator`],typeof e==`function`?e:null)}var Ce=Symbol.for(`react.client.reference`);function we(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case se:return`Fragment`;case w:return`Profiler`;case ce:return`StrictMode`;case fe:return`Suspense`;case pe:return`SuspenseList`;case ge:return`Activity`;case ye:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case oe:return`Portal`;case ue:return e.displayName||`Context`;case le:return(e._context.displayName||`Context`)+`.Consumer`;case de:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case me:return t=e.displayName||null,t===null?we(e.type)||`Memo`:t;case he:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var Te=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},De=[],Oe=-1;function ke(e){return{current:e}}function Ae(e){0>Oe||(e.current=De[Oe],De[Oe]=null,Oe--)}function je(e,t){Oe++,De[Oe]=e.current,e.current=t}var Me=ke(null),Ne=ke(null),Pe=ke(null),Fe=ke(null);function Ie(e,t){switch(je(Pe,t),je(Ne,e),je(Me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mp(t),e=hp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Ae(Me),je(Me,e)}function Le(){Ae(Me),Ae(Ne),Ae(Pe)}function Re(e){var t=e.memoizedState;t!==null&&(dh._currentValue=t.memoizedState,je(Fe,e)),t=Me.current;var n=hp(t,e.type);t!==n&&(je(Ne,e),je(Me,n))}function ze(e){Ne.current===e&&(Ae(Me),Ae(Ne)),Fe.current===e&&(Ae(Fe),dh._currentValue=Ee)}var Be,Ve;function He(e){if(Be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Be=t&&t[1]||``,Ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Be+e+Ve}var Ue=!1;function We(e,t){if(!e||Ue)return``;Ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?He(n):``}function Ge(e,t){switch(e.tag){case 26:case 27:case 5:return He(e.type);case 16:return He(`Lazy`);case 13:return e.child!==t&&t!==null?He(`Suspense Fallback`):He(`Suspense`);case 19:return He(`SuspenseList`);case 0:case 15:return We(e.type,!1);case 11:return We(e.type.render,!1);case 1:return We(e.type,!0);case 31:return He(`Activity`);case 30:return He(`ViewTransition`);default:return``}}function Ke(e){try{var t=``,n=null;do t+=Ge(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var qe=Object.prototype.hasOwnProperty,Je=t.unstable_scheduleCallback,Ye=t.unstable_cancelCallback,Xe=t.unstable_shouldYield,Ze=t.unstable_requestPaint,Qe=t.unstable_now,$e=t.unstable_getCurrentPriorityLevel,et=t.unstable_ImmediatePriority,tt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,rt=t.unstable_LowPriority,it=t.unstable_IdlePriority,at=t.log,ot=t.unstable_setDisableYieldValue,st=null,ct=null;function lt(e){if(typeof at==`function`&&ot(e),ct&&typeof ct.setStrictMode==`function`)try{ct.setStrictMode(st,e)}catch{}}var ut=Math.clz32?Math.clz32:pt,dt=Math.log,ft=Math.LN2;function pt(e){return e>>>=0,e===0?32:31-(dt(e)/ft|0)|0}var mt=256,ht=262144,gt=4194304;function _t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=_t(n))):i=_t(o):i=_t(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=_t(n))):i=_t(o)):i=_t(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function yt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ut(n),i=1<<r;t|=e[r],n&=~i}return t}function xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=gt;return gt<<=1,!(gt&62914560)&&(gt=4194304),e}function Ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ut(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ut(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ot(e,t){var n=t&-t;return n=n&42?1:kt(n),(n&(e.suspendedLanes|t))===0?n:0}function kt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function At(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function jt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:Dh(e.type)):e}function Mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var Nt=Math.random().toString(36).slice(2),Pt=`__reactFiber$`+Nt,Ft=`__reactProps$`+Nt,It=`__reactContainer$`+Nt,Lt=`__reactEvents$`+Nt,Rt=`__reactListeners$`+Nt,zt=`__reactHandles$`+Nt,Bt=`__reactResources$`+Nt,Vt=`__reactMarker$`+Nt,Ht=`__reactLoad$`+Nt;function Ut(e){delete e[Pt],delete e[Ft],delete e[Rt],delete e[zt]}function Wt(e){var t;if(t=e[Pt])return t;for(var n=e.parentNode;n;){if(t=n[It]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gm(e);e!==null;){if(n=e[Pt])return n;e=gm(e)}return t}e=n,n=e.parentNode}return null}function Gt(e){if(e=e[Pt]||e[It]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function qt(e){var t=e[Bt];return t||=e[Bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Jt(e){e[Vt]=!0}function Yt(e){e[Ht]=void 0}var Xt=new Set,Zt={};function Qt(e,t){$t(e,t),$t(e+`Capture`,t)}function $t(e,t){for(Zt[e]=t,e=0;e<t.length;e++)Xt.add(t[e])}var en=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),tn={},nn={};function rn(e){return qe.call(nn,e)?!0:qe.call(tn,e)?!1:en.test(e)?nn[e]=!0:(tn[e]=!0,!1)}var D=!1;function an(){var e=D;return D=!1,e}function on(e,t,n){if(rn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function sn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function cn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function ln(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function un(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function dn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fn(e){if(!e._valueTracker){var t=un(e)?`checked`:`value`;e._valueTracker=dn(e,t,``+e[t])}}function pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=un(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var mn=/[\n"\\]/g;function hn(e){return e.replace(mn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function gn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+ln(t)):e.value!==``+ln(t)&&(e.value=``+ln(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):vn(e,ln(n)):o===`number`&&e.value==t?vn(e,ln(e.value)):vn(e,ln(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+ln(s):e.removeAttribute(`name`)}function _n(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){fn(e);return}n=n==null?``:``+ln(n),t=t==null?n:``+ln(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),fn(e)}function vn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bn(e,t,n){t!=null&&(t=``+ln(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+ln(n)}function xn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=ln(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),fn(e)}function Sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function wn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,D=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(wn(e,a,r),D=!0)}else for(var o in t)t.hasOwnProperty(o)&&wn(e,o,t[o])}function En(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),On=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return On.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function An(){}var jn=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nn=null,Pn=null;function Fn(e){var t=Gt(e);if(t&&(e=t.stateNode)){var n=e[Ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(gn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+hn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ft]||null;if(!a)throw Error(i(90));gn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&pn(r)}break a;case`textarea`:bn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}}}var In=!1;function Ln(e,t,n){if(In)return e(t,n);In=!0;try{return e(t)}finally{if(In=!1,(Nn!==null||Pn!==null)&&(Hd(),Nn&&(t=Nn,e=Pn,Pn=Nn=null,Fn(t),e)))for(t=0;t<e.length;t++)Fn(e[t])}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var zn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Bn=!1;if(zn)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Bn=!0}}),window.addEventListener(`test`,Vn,Vn),window.removeEventListener(`test`,Vn,Vn)}catch{Bn=!1}var Hn=null,Un=null,Wn=null;function Gn(){if(Wn)return Wn;var e,t=Un,n=t.length,r,i=`value`in Hn?Hn.value:Hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wn=i.slice(e,1<r?1-r:void 0)}function Kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Jn(){return!1}function Yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?qn:Jn,this.isPropagationStopped=Jn,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=Yn(Xn),Qn=C({},Xn,{view:0,detail:0}),$n=Yn(Qn),er,tr,nr,rr=C({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==nr&&(nr&&e.type===`mousemove`?(er=e.screenX-nr.screenX,tr=e.screenY-nr.screenY):tr=er=0,nr=e),er)},movementY:function(e){return`movementY`in e?e.movementY:tr}}),ir=Yn(rr),ar=Yn(C({},rr,{dataTransfer:0})),or=Yn(C({},Qn,{relatedTarget:0})),sr=Yn(C({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),cr=Yn(C({},Xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),lr=Yn(C({},Xn,{data:0})),ur={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},dr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},fr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function pr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fr[e])?!!t[e]:!1}function mr(){return pr}var hr=Yn(C({},Qn,{key:function(e){if(e.key){var t=ur[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?dr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mr,charCode:function(e){return e.type===`keypress`?Kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),gr=Yn(C({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_r=Yn(C({},Xn,{submitter:0})),vr=Yn(C({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mr})),yr=Yn(C({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),br=Yn(C({},rr,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xr=Yn(C({},Xn,{newState:0,oldState:0,source:0})),Sr=[9,13,27,32],Cr=zn&&`CompositionEvent`in window,wr=null;zn&&`documentMode`in document&&(wr=document.documentMode);var Tr=zn&&`TextEvent`in window&&!wr,Er=zn&&(!Cr||wr&&8<wr&&11>=wr),Dr=` `,Or=!1;function kr(e,t){switch(e){case`keyup`:return Sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var jr=!1;function Mr(e,t){switch(e){case`compositionend`:return Ar(t);case`keypress`:return t.which===32?(Or=!0,Dr):null;case`textInput`:return e=t.data,e===Dr&&Or?null:e;default:return null}}function Nr(e,t){if(jr)return e===`compositionend`||!Cr&&kr(e,t)?(e=Gn(),Wn=Un=Hn=null,jr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Er&&t.locale!==`ko`?null:t.data;default:return null}}var Pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Pr[e.type]:t===`textarea`}function Ir(e,t,n,r){Nn?Pn?Pn.push(r):Pn=[r]:Nn=r,t=Qf(t,`onChange`),0<t.length&&(n=new Zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Rr=null;function zr(e){Gf(e,0)}function Br(e){if(pn(Kt(e)))return e}function Vr(e,t){if(e===`change`)return t}var Hr=!1;if(zn){var Ur;if(zn){var Wr=`oninput`in document;if(!Wr){var Gr=document.createElement(`div`);Gr.setAttribute(`oninput`,`return;`),Wr=typeof Gr.oninput==`function`}Ur=Wr}else Ur=!1;Hr=Ur&&(!document.documentMode||9<document.documentMode)}function Kr(){Lr&&(Lr.detachEvent(`onpropertychange`,qr),Rr=Lr=null)}function qr(e){if(e.propertyName===`value`&&Br(Rr)){var t=[];Ir(t,Rr,e,Mn(e)),Ln(zr,t)}}function Jr(e,t,n){e===`focusin`?(Kr(),Lr=t,Rr=n,Lr.attachEvent(`onpropertychange`,qr)):e===`focusout`&&Kr()}function Yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Br(Rr)}function Xr(e,t){if(e===`click`)return Br(t)}function Zr(e,t){if(e===`input`||e===`change`)return Br(t)}function Qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var $r=typeof Object.is==`function`?Object.is:Qr;function ei(e,t){if($r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qe.call(t,i)||!$r(e[i],t[i]))return!1}return!0}function ti(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ri(e,t){var n=ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=ni(n)}}function ii(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ii(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ai(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ti(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var si=zn&&`documentMode`in document&&11>=document.documentMode,ci=null,li=null,ui=null,di=!1;function fi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||ci==null||ci!==ti(r)||(r=ci,`selectionStart`in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&ei(ui,r)||(ui=r,r=Qf(li,`onSelect`),0<r.length&&(t=new Zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ci)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var mi={animationend:pi(`Animation`,`AnimationEnd`),animationiteration:pi(`Animation`,`AnimationIteration`),animationstart:pi(`Animation`,`AnimationStart`),transitionrun:pi(`Transition`,`TransitionRun`),transitionstart:pi(`Transition`,`TransitionStart`),transitioncancel:pi(`Transition`,`TransitionCancel`),transitionend:pi(`Transition`,`TransitionEnd`)},hi={},gi={};zn&&(gi=document.createElement(`div`).style,`AnimationEvent`in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),`TransitionEvent`in window||delete mi.transitionend.transition);function _i(e){if(hi[e])return hi[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gi)return hi[e]=t[n];return e}var vi=_i(`animationend`),yi=_i(`animationiteration`),bi=_i(`animationstart`),xi=_i(`transitionrun`),Si=_i(`transitionstart`),Ci=_i(`transitioncancel`),wi=_i(`transitionend`),Ti=new Map,Ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ei.push(`scrollEnd`);function Di(e,t){Ti.set(e,t),Qt(t,[e])}var Oi=0;function ki(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=Td.identifierPrefix;var n=Oi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ai(e){if(e==null||typeof e==`string`)return e;var t=null,n=Nd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ji(e,t){return e=Ai(e),t=Ai(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ni=[],Pi=0,Fi=0;function Ii(){for(var e=Pi,t=Fi=Pi=0;t<e;){var n=Ni[t];Ni[t++]=null;var r=Ni[t];Ni[t++]=null;var i=Ni[t];Ni[t++]=null;var a=Ni[t];if(Ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Bi(n,i,a)}}function Li(e,t,n,r){Ni[Pi++]=e,Ni[Pi++]=t,Ni[Pi++]=n,Ni[Pi++]=r,Fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ri(e,t,n,r){return Li(e,t,n,r),Vi(e)}function zi(e,t){return Li(e,null,null,t),Vi(e)}function Bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ut(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Vi(e){if(50<Pd)throw Pd=0,Fd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hi={};function Ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,t,n,r){return new Ui(e,t,n,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O(e,t){var n=e.alternate;return n===null?(n=Wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ki(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Gi(r)&&(s=1);else if(typeof r==`string`)s=Zm(e,n,Me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ge:return e=Wi(31,n,t,a),e.elementType=ge,e.lanes=o,e;case se:return Ji(n.children,a,o,t);case ce:s=8,a|=24;break;case w:return e=Wi(12,n,t,a|2),e.elementType=w,e.lanes=o,e;case fe:return e=Wi(13,n,t,a),e.elementType=fe,e.lanes=o,e;case pe:return e=Wi(19,n,t,a),e.elementType=pe,e.lanes=o,e;case _e:case ye:return e=a|32,e=Wi(30,n,t,e),e.elementType=ye,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ue:s=10;break a;case le:s=9;break a;case de:s=11;break a;case me:s=14;break a;case he:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ji(e,t,n,r){return e=Wi(7,e,r,t),e.lanes=n,e}function Yi(e,t,n){return e=Wi(6,e,null,t),e.lanes=n,e}function Xi(e){var t=Wi(18,null,null,0);return t.stateNode=e,t}function Zi(e,t,n){return t=Wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qi=new WeakMap;function $i(e,t){if(typeof e==`object`&&e){var n=Qi.get(e);return n===void 0?(t={value:e,source:t,stack:Ke(t)},Qi.set(e,t),t):n}return{value:e,source:t,stack:Ke(t)}}var ea=[],ta=0,na=null,ra=0,ia=[],aa=0,oa=null,sa=1,ca=``;function la(e,t){ea[ta++]=ra,ea[ta++]=na,na=e,ra=t}function ua(e,t,n){ia[aa++]=sa,ia[aa++]=ca,ia[aa++]=oa,oa=e;var r=sa;e=ca;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var a=32-ut(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sa=1<<32-ut(t)+i|n<<i|r,ca=a+e}else sa=1<<a|n<<i|r,ca=e}function da(e){e.return!==null&&(la(e,1),ua(e,1,0))}function fa(e){for(;e===na;)na=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null;for(;e===oa;)oa=ia[--aa],ia[aa]=null,ca=ia[--aa],ia[aa]=null,sa=ia[--aa],ia[aa]=null}function pa(e,t){ia[aa++]=sa,ia[aa++]=ca,ia[aa++]=oa,sa=t.id,ca=t.overflow,oa=e}var ma=null,ha=null,k=!1,ga=null,_a=!1,va=Error(i(519));function ya(e){throw Ta($i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),va}function ba(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Pt]=e,t[Ft]=r,n){case`dialog`:J(`cancel`,t),J(`close`,t);break;case`iframe`:case`object`:case`embed`:J(`load`,t);break;case`video`:case`audio`:for(n=0;n<Uf.length;n++)J(Uf[n],t);break;case`source`:J(`error`,t);break;case`img`:case`image`:case`link`:J(`error`,t),J(`load`,t);break;case`details`:J(`toggle`,t);break;case`input`:J(`invalid`,t),_n(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:J(`invalid`,t);break;case`textarea`:J(`invalid`,t),xn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ip(t.textContent,n)?(r.popover!=null&&(J(`beforetoggle`,t),J(`toggle`,t)),r.onScroll!=null&&J(`scroll`,t),r.onScrollEnd!=null&&J(`scrollend`,t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||ya(e,!0)}function xa(e){for(ma=e.return;ma;)switch(ma.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:ma=ma.return}}function Sa(e){if(e!==ma)return!1;if(!k)return xa(e),k=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||_p(e.type,e.memoizedProps)),n=!n),n&&ha&&ya(e),xa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ha=hm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ha=hm(e)}else t===27?(t=ha,Ep(e.type)?(e=mm,mm=null,ha=e):ha=t):ha=ma?pm(e.stateNode.nextSibling):null;return!0}function Ca(){ha=ma=null,k=!1}function wa(){var e=ga;return e!==null&&(_d===null?_d=e:_d.push.apply(_d,e),ga=null),e}function Ta(e){ga===null?ga=[e]:ga.push(e)}var Ea=ke(null),Da=null,Oa=null;function ka(e,t,n){je(Ea,t._currentValue),t._currentValue=n}function Aa(e){e._currentValue=Ea.current,Ae(Ea)}function ja(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ma(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ja(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ja(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ja(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;$r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Fe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[dh]:e.push(dh))}a=a.return}return e!==null&&Ma(t,e,n,r),t.flags|=262144,e!==null}function Pa(e){for(e=e.firstContext;e!==null;){if(!$r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Da=e,Oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ia(e){return Ra(Da,e)}function La(e,t){return Da===null&&Fa(e),Ra(e,t)}function Ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Oa===null){if(e===null)throw Error(i(308));Oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Oa=Oa.next=t;return n}var za=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ba=t.unstable_scheduleCallback,Va=t.unstable_NormalPriority,Ha={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ua(){return{controller:new za,data:new Map,refCount:0}}function Wa(e){e.refCount--,e.refCount===0&&Ba(Va,function(){e.controller.abort()})}function Ga(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ka=null;function qa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ja=null,Ya=0,Xa=0,Za=null;function Qa(e,t){if(Ja===null){var n=Ja=[];Ya=0,Xa=Rf(),Za={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ya++,t.then($a,$a),t}function $a(){if(--Ya===0&&(Ka=null,Ja!==null)){Za!==null&&(Za.status=`fulfilled`);var e=Ja;Ja=null,Xa=0,Za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function eo(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var to=T.S;T.S=function(e,t){if(bd=Qe(),typeof t==`object`&&t&&typeof t.then==`function`&&Qa(e,t),Ka!==null)for(var n=wf;n!==null;)Ga(n,Ka),n=n.next;if(n=e.types,n!==null){for(var r=wf;r!==null;)Ga(r,n),r=r.next;if(Xa!==0){r=Ka,r===null&&(r=Ka=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}to!==null&&to(e,t)};var no=ke(null);function ro(){var e=no.current;return e===null?rd.pooledCache:e}function io(e,t){t===null?je(no,no.current):je(no,t.pool)}function ao(){var e=ro();return e===null?null:{parent:Ha._currentValue,pool:e}}var oo=Error(i(460)),so=Error(i(474)),co=Error(i(542)),lo={then:function(){}};function uo(e){return e=e.status,e===`fulfilled`||e===`rejected`}function fo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,A(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(An,An);else{if(e=rd,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,A(e),e}throw mo=t,oo}}function po(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(mo=e,oo):e}}var mo=null;function ho(){if(mo===null)throw Error(i(459));var e=mo;return mo=null,e}function A(e){if(e===oo||e===co)throw Error(i(483))}var go=null,_o=0;function vo(e){var t=_o;return _o+=1,go===null&&(go=[]),fo(go,e,t)}function yo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function bo(e,t){throw t.$$typeof===ie?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function xo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=O(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===se?(e=d(e,t,n.props.children,r,n.key),yo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===he&&po(i)===t.type)?(t=a(t,n.props),yo(t,n),t.return=e,t):(t=qi(n.type,n.key,n.props,null,e.mode,r),yo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Zi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ji(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ae:return n=qi(t.type,t.key,t.props,null,e.mode,n),yo(n,t),n.return=e,n;case oe:return t=Zi(t,e.mode,n),t.return=e,t;case he:return t=po(t),f(e,t,n)}if(Te(t)||Se(t))return t=Ji(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,vo(t),n);if(t.$$typeof===ue)return f(e,La(e,t),n);bo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ae:return n.key===i?l(e,t,n,r):null;case oe:return n.key===i?u(e,t,n,r):null;case he:return n=po(n),p(e,t,n,r)}if(Te(n)||Se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,vo(n),r);if(n.$$typeof===ue)return p(e,t,La(e,n),r);bo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ae:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case oe:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case he:return r=po(r),m(e,t,n,r,i)}if(Te(r)||Se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,vo(r),i);if(r.$$typeof===ue)return m(e,t,n,La(t,r),i);bo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),k&&la(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return k&&la(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),k&&la(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),k&&la(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return k&&la(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),k&&la(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===se&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ae:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===se){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),yo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===he&&po(l)===r.type){n(e,r.sibling),c=a(r,o.props),yo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===se?(c=Ji(o.props.children,e.mode,c,o.key),yo(c,o),c.return=e,e=c):(c=qi(o.type,o.key,o.props,null,e.mode,c),yo(c,o),c.return=e,e=c)}return s(e);case oe:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Zi(o,e.mode,c),c.return=e,e=c}return s(e);case he:return o=po(o),_(e,r,o,c)}if(Te(o))return h(e,r,o,c);if(Se(o)){if(l=Se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,vo(o),c);if(o.$$typeof===ue)return _(e,r,La(e,o),c);bo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{_o=0;var i=_(e,t,n,r);return go=null,i}catch(t){if(t===oo||t===co)throw t;var a=Wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var So=xo(!0),Co=xo(!1),wo=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Do(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Vi(e),Bi(e,null,n),t}return Li(e,r,t,n),Vi(e)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dt(e,n)}}function Ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var jo=!1;function Mo(){if(jo){var e=Za;if(e!==null)throw e}}function No(e,t,n,r){jo=!1;var i=e.updateQueue;wo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(G&f)===f:(r&f)===f){f!==0&&f===Xa&&(jo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=C({},d,f);break a;case 2:wo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),dd|=o,e.lanes=o,e.memoizedState=d}}function Po(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Fo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Po(n[e],t)}var Io=ke(null),Lo=ke(0);function Ro(e,t){e=ld,je(Lo,e),je(Io,t),ld=e|t.baseLanes}function zo(){je(Lo,ld),je(Io,Io.current)}function Bo(){ld=Lo.current,Ae(Io),Ae(Lo)}var Vo=ke(null),Ho=null;function Uo(e){var t=e.alternate;je(Jo,Jo.current&1),je(Vo,e),Ho===null&&(t===null||Io.current!==null||t.memoizedState!==null)&&(Ho=e)}function Wo(e){je(Jo,Jo.current),je(Vo,e),Ho===null&&(Ho=e)}function Go(e){e.tag===22?(je(Jo,Jo.current),je(Vo,e),Ho===null&&(Ho=e)):Ko()}function Ko(){je(Jo,Jo.current),je(Vo,Vo.current)}function qo(e){Ae(Vo),Ho===e&&(Ho=null),Ae(Jo)}var Jo=ke(0);function Yo(e,t){je(Vo,Vo.current),je(Jo,t)}function Xo(e){Ae(Jo),Ae(Vo),Ho===e&&(Ho=null)}function j(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||um(n)||dm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=0,M=null,N=null,Qo=null,$o=!1,es=!1,ts=!1,ns=0,rs=0,is=null,as=0;function os(){throw Error(i(321))}function ss(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$r(e[n],t[n]))return!1;return!0}function cs(e,t,n,r,i,a){return Zo=a,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Cc:wc,ts=!1,a=n(r,i),ts=!1,es&&(a=us(t,n,r,i)),ls(e),a}function ls(e){T.H=Sc;var t=N!==null&&N.next!==null;if(Zo=0,Qo=N=M=null,$o=!1,rs=0,is=null,t)throw Error(i(300));e===null||I||(e=e.dependencies,e!==null&&Pa(e)&&(I=!0))}function us(e,t,n,r){M=e;var a=0;do{if(es&&(is=null),rs=0,es=!1,25<=a)throw Error(i(301));if(a+=1,Qo=N=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Tc,o=t(n,r)}while(es);return o}function ds(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?_s(t):t,e=e.useState()[0],(N===null?null:N.memoizedState)!==e&&(M.flags|=1024),t}function fs(){var e=ns!==0;return ns=0,e}function ps(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ms(e){if($o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$o=!1}Zo=0,Qo=N=M=null,es=!1,rs=ns=0,is=null}function hs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qo===null?M.memoizedState=Qo=e:Qo=Qo.next=e,Qo}function P(){if(N===null){var e=M.alternate;e=e===null?null:e.memoizedState}else e=N.next;var t=Qo===null?M.memoizedState:Qo.next;if(t!==null)Qo=t,N=e;else{if(e===null)throw M.alternate===null?Error(i(467)):Error(i(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},Qo===null?M.memoizedState=Qo=e:Qo=Qo.next=e}return Qo}function gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _s(e){var t=rs;return rs+=1,is===null&&(is=[]),e=fo(is,e,t),t=M,(Qo===null?t.memoizedState:Qo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Cc:wc),e}function vs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return _s(e);if(e.$$typeof===be)return;if(e.$$typeof===ue)return Ia(e)}throw Error(i(438,String(e)))}function F(e){var t=null,n=M.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=M.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=gs(),M.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ve;return t.index++,n}function ys(e,t){return typeof t==`function`?t(e):t}function bs(e){return xs(P(),N,e)}function xs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Zo&f)===f:(G&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Xa&&(d=!0);else if((Zo&p)===p){u=u.next,p===Xa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,M.lanes|=p,dd|=p;f=u.action,ts&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,M.lanes|=f,dd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!$r(o,e.memoizedState)&&(I=!0,d&&(n=Za,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ss(e){var t=P(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);$r(o,t.memoizedState)||(I=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cs(e,t,n){var r=M,a=P(),o=k;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!$r((N||a).memoizedState,n);if(s&&(a.memoizedState=n,I=!0),a=a.queue,Js(Es.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Qo!==null&&!!(Qo.memoizedState.tag&1),Us(e?9:8,{destroy:void 0},Ts.bind(null,r,a,n,t),null),e){if(r.flags|=2048,rd===null)throw Error(i(349));o||Zo&127||ws(r,t,n)}return n}function ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=M.updateQueue,t===null?(t=gs(),M.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ts(e,t,n,r){t.value=n,t.getSnapshot=r,Ds(t)&&Os(e)}function Es(e,t,n){return n(function(){Ds(t)&&Os(e)})}function Ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$r(e,n)}catch{return!0}}function Os(e){var t=zi(e,2);t!==null&&Rd(t,e,2)}function ks(e){var t=hs();if(typeof e==`function`){var n=e;if(e=n(),ts){lt(!0);try{n()}finally{lt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t}function As(e,t,n,r){return e.baseState=n,xs(e,N,typeof r==`function`?r:ys)}function js(e,t,n,r,a){if(yc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ms(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ms(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};o.types=a===null?null:a.types,T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Ns(e,t,s)}catch(n){Fs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Ns(e,t,a)}catch(n){Fs(e,t,n)}}function Ns(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ps(e,t,n)},function(n){return Fs(e,t,n)}):Ps(e,t,n)}function Ps(e,t,n){t.status=`fulfilled`,t.value=n,Is(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ms(e,n)))}function Fs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Is(t),t=t.next;while(t!==r)}e.action=null}function Is(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ls(e,t){return t}function Rs(e,t){if(k){var n=rd.formState;if(n!==null){a:{var r=M;if(k){if(ha){b:{for(var i=ha,a=_a;i.nodeType!==8;)if(!a||(i=pm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ha=pm(i.nextSibling),r=i.data===`F!`;break a}}ya(r)}r=!1}r&&(t=n[0])}}return n=hs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:t},n.queue=r,n=gc.bind(null,M,r),r.dispatch=n,r=ks(!1),a=vc.bind(null,M,!1,r.queue),r=hs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=js.bind(null,M,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function zs(e){return Bs(P(),N,e)}function Bs(e,t,n){if(t=xs(e,t,Ls)[0],e=bs(ys)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=_s(t)}catch(e){throw e===oo?co:e}else r=t;t=P();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(M.flags|=2048,Us(9,{destroy:void 0},Vs.bind(null,i,n),null)),[r,a,e]}function Vs(e,t){e.action=t}function Hs(e){var t=P(),n=N;if(n!==null)return Bs(t,n,e);P(),t=t.memoizedState,n=P();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=M.updateQueue,t===null&&(t=gs(),M.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ws(){return P().memoizedState}function Gs(e,t,n,r){var i=hs();M.flags|=e,i.memoizedState=Us(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ks(e,t,n,r){var i=P();r=r===void 0?null:r;var a=i.memoizedState.inst;N!==null&&r!==null&&ss(r,N.memoizedState.deps)?i.memoizedState=Us(t,a,n,r):(M.flags|=e,i.memoizedState=Us(1|t,a,n,r))}function qs(e,t){Gs(8390656,8,e,t)}function Js(e,t){Ks(2048,8,e,t)}function Ys(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=gs(),M.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xs(e){var t=P().memoizedState;return Ys({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Zs(e,t){return Ks(4,2,e,t)}function Qs(e,t){return Ks(4,4,e,t)}function $s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ec(e,t,n){n=n==null?null:n.concat([e]),Ks(4,4,$s.bind(null,t,e),n)}function tc(){}function nc(e,t){var n=P();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ss(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=P();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ss(t,r[1]))return r[0];if(r=e(),ts){lt(!0);try{e()}finally{lt(!1)}}return n.memoizedState=[r,t],r}function ic(e,t,n){return n===void 0||Zo&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ld(),M.lanes|=e,dd|=e,n)}function ac(e,t,n,r){return $r(n,t)?n:Io.current===null?!(Zo&106)||Zo&1073741824&&!(G&261930)?(I=!0,e.memoizedState=n):(e=Ld(),M.lanes|=e,dd|=e,t):(e=ic(e,n,r),$r(e,t)||(I=!0),e)}function oc(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};s.types=o===null?null:o.types,T.T=s,vc(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?_c(e,t,eo(c,r),Id(e)):_c(e,t,r,Id(e))}catch(n){_c(e,t,{then:function(){},status:`rejected`,reason:n},Id())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function sc(){}function cc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=lc(e).queue;oc(e,a,t,Ee,n===null?sc:function(){return uc(e),n(r)})}function lc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:Ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=lc(e);t.next===null&&(t=e.alternate.memoizedState),_c(e,t.next.queue,{},Id())}function dc(){return Ia(dh)}function fc(){return P().memoizedState}function pc(){return P().memoizedState}function mc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Id();e=Do(n);var r=Oo(t,e,n);r!==null&&(Rd(r,t,n),ko(r,t,n)),t={cache:Ua()},e.payload=t;return}t=t.return}}function hc(e,t,n){var r=Id();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e)?bc(t,n):(n=Ri(e,t,n,r),n!==null&&(Rd(n,e,r),xc(n,t,r)))}function gc(e,t,n){_c(e,t,n,Id())}function _c(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))bc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,$r(s,o))return Li(e,t,i,0),rd===null&&Ii(),!1}catch{}if(n=Ri(e,t,i,r),n!==null)return Rd(n,e,r),xc(n,t,r),!0}return!1}function vc(e,t,n,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yc(e)){if(t)throw Error(i(479))}else t=Ri(e,n,r,2),t!==null&&Rd(t,e,2)}function yc(e){var t=e.alternate;return e===M||t!==null&&t===M}function bc(e,t){es=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dt(e,n)}}var Sc={readContext:Ia,use:vs,useCallback:os,useContext:os,useEffect:os,useImperativeHandle:os,useLayoutEffect:os,useInsertionEffect:os,useMemo:os,useReducer:os,useRef:os,useState:os,useDebugValue:os,useDeferredValue:os,useTransition:os,useSyncExternalStore:os,useId:os,useHostTransitionStatus:os,useFormState:os,useActionState:os,useOptimistic:os,useMemoCache:os,useCacheRefresh:os,useEffectEvent:os},Cc={readContext:Ia,use:vs,useCallback:function(e,t){return hs().memoizedState=[e,t===void 0?null:t],e},useContext:Ia,useEffect:qs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Gs(4194308,4,$s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gs(4194308,4,e,t)},useInsertionEffect:function(e,t){Gs(4,2,e,t)},useMemo:function(e,t){var n=hs();t=t===void 0?null:t;var r=e();if(ts){lt(!0);try{e()}finally{lt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=hs();if(n!==void 0){var i=n(t);if(ts){lt(!0);try{n(t)}finally{lt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=hc.bind(null,M,e),[r.memoizedState,e]},useRef:function(e){var t=hs();return e={current:e},t.memoizedState=e},useState:function(e){e=ks(e);var t=e.queue,n=gc.bind(null,M,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:tc,useDeferredValue:function(e,t){return ic(hs(),e,t)},useTransition:function(){var e=ks(!1);return e=oc.bind(null,M,e.queue,!0,!1),hs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=M,a=hs();if(k){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),rd===null)throw Error(i(349));G&127||ws(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,qs(Es.bind(null,r,o,e),[e]),r.flags|=2048,Us(9,{destroy:void 0},Ts.bind(null,r,o,n,t),null),n},useId:function(){var e=hs(),t=rd.identifierPrefix;if(k){var n=ca,r=sa;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ns++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=as++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:dc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e){var t=hs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=vc.bind(null,M,!0,n),n.dispatch=t,[e,t]},useMemoCache:F,useCacheRefresh:function(){return hs().memoizedState=mc.bind(null,M)},useEffectEvent:function(e){var t=hs(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},wc={readContext:Ia,use:vs,useCallback:nc,useContext:Ia,useEffect:Js,useImperativeHandle:ec,useInsertionEffect:Zs,useLayoutEffect:Qs,useMemo:rc,useReducer:bs,useRef:Ws,useState:function(){return bs(ys)},useDebugValue:tc,useDeferredValue:function(e,t){return ac(P(),N.memoizedState,e,t)},useTransition:function(){var e=bs(ys)[0],t=P().memoizedState;return[typeof e==`boolean`?e:_s(e),t]},useSyncExternalStore:Cs,useId:fc,useHostTransitionStatus:dc,useFormState:zs,useActionState:zs,useOptimistic:function(e,t){return As(P(),N,e,t)},useMemoCache:F,useCacheRefresh:pc,useEffectEvent:Xs},Tc={readContext:Ia,use:vs,useCallback:nc,useContext:Ia,useEffect:Js,useImperativeHandle:ec,useInsertionEffect:Zs,useLayoutEffect:Qs,useMemo:rc,useReducer:Ss,useRef:Ws,useState:function(){return Ss(ys)},useDebugValue:tc,useDeferredValue:function(e,t){var n=P();return N===null?ic(n,e,t):ac(n,N.memoizedState,e,t)},useTransition:function(){var e=Ss(ys)[0],t=P().memoizedState;return[typeof e==`boolean`?e:_s(e),t]},useSyncExternalStore:Cs,useId:fc,useHostTransitionStatus:dc,useFormState:Hs,useActionState:Hs,useOptimistic:function(e,t){var n=P();return N===null?(n.baseState=e,[e,n.queue.dispatch]):As(n,N,e,t)},useMemoCache:F,useCacheRefresh:pc,useEffectEvent:Xs};function Ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Id(),i=Do(r);i.payload=t,n!=null&&(i.callback=n),t=Oo(e,i,r),t!==null&&(Rd(t,e,r),ko(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Id(),i=Do(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Oo(e,i,r),t!==null&&(Rd(t,e,r),ko(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Id(),r=Do(n);r.tag=2,t!=null&&(r.callback=t),t=Oo(e,r,n),t!==null&&(Rd(t,e,n),ko(t,e,n))}};function Oc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,a):!0}function kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function Ac(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=C({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function jc(e){Mi(e)}function Mc(e){console.error(e)}function Nc(e){Mi(e)}function Pc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Fc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ic(e,t,n){return n=Do(n),n.tag=3,n.payload={element:null},n.callback=function(){Pc(e,t)},n}function Lc(e){return e=Do(e),e.tag=3,e}function Rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Fc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Fc(t,n,r),typeof i!=`function`&&(Cd===null?Cd=new Set([this]):Cd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function zc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Na(t,n,a,!0),n=Vo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Ho===null?Yd():n.alternate===null&&ud===0&&(ud=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===lo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),vf(e,r,a)),!1;case 22:return n.flags|=65536,r===lo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),vf(e,r,a)),!1}throw Error(i(435,n.tag))}return vf(e,r,a),Yd(),!1}if(k)return t=Vo.current,t===null?(r!==va&&(t=Error(i(423),{cause:r}),Ta($i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=$i(r,n),a=Ic(e.stateNode,r,a),Ao(e,a),ud!==4&&(ud=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==va&&(e=Error(i(422),{cause:r}),Ta($i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=$i(o,n),gd===null?gd=[o]:gd.push(o),ud!==4&&(ud=2),t===null)return!0;r=$i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ic(n.stateNode,r,e),Ao(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(Cd===null||!Cd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Lc(a),Rc(a,e,n,r),Ao(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Bc=Error(i(461)),I=!1;function L(e,t,n,r){t.child=e===null?Co(t,null,n,r):So(t,e.child,n,r)}function Vc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Fa(t),r=cs(e,t,n,o,a,i),s=fs(),e!==null&&!I?(ps(e,t,i),hl(e,t,i)):(k&&s&&da(t),t.flags|=1,L(e,t,r,i),t.child)}function Hc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Uc(e,t,a,r,i)):(e=qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!gl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?ei:n,n(o,r)&&e.ref===t.ref)return hl(e,t,i)}return t.flags|=1,e=O(a,r),e.ref=t.ref,e.return=t,t.child=e}function Uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ei(a,r)&&e.ref===t.ref){if(I=!1,t.pendingProps=r=a,gl(e,i))e.flags&131072&&(I=!0);else return t.lanes=e.lanes,hl(e,t,i)}}return Zc(e,t,n,r,i)}function Wc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Kc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&io(t,a===null?null:a.cachePool),a===null?zo():Ro(t,a),Go(t);else return r=t.lanes=536870912,Kc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&io(t,null),zo(),Ko()):(io(t,a.cachePool),Ro(t,a),Ko(),t.memoizedState=null);return L(e,t,i,n),t.child}function Gc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kc(e,t,n,r,i){var a=ro();return a=a===null?null:{parent:Ha._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&io(t,null),zo(),Go(t),e!==null&&Na(e,t,r,!0),t.childLanes=i,null}function qc(e,t){return t=ol({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jc(e,t,n){return So(t,e.child,null,n),e=qc(t,t.pendingProps),e.flags|=2,qo(t),t.memoizedState=null,e}function Yc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(k){if(r.mode===`hidden`)return e=qc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Gc(null,e);if(Wo(t),(e=ha)?(e=lm(e,_a),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa===null?null:{id:sa,overflow:ca},retryLane:536870912,hydrationErrors:null},n=Xi(e),n.return=t,t.child=n,ma=t,ha=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return qc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Wo(t),a){if(t.flags&256)t.flags&=-257,t=Jc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(I||Na(e,t,n,!1),a=(n&e.childLanes)!==0,I||a){if(Io.current===null){if(r=rd,r!==null&&(s=Ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,zi(e,s),Rd(r,e,s),Bc;Yd()}t=Jc(e,t,n)}else e=o.treeContext,ha=pm(s.nextSibling),ma=t,k=!0,ga=null,_a=!1,e!==null&&pa(t,e),t=qc(t,r),t.flags|=134221824;return t}return e=O(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Zc(e,t,n,r,i){return Fa(t),n=cs(e,t,n,r,void 0,i),r=fs(),e!==null&&!I?(ps(e,t,i),hl(e,t,i)):(k&&r&&da(t),t.flags|=1,L(e,t,n,i),t.child)}function Qc(e,t,n,r,i,a){return Fa(t),t.updateQueue=null,n=us(t,r,n,i),ls(e),r=fs(),e!==null&&!I?(ps(e,t,a),hl(e,t,a)):(k&&r&&da(t),t.flags|=1,L(e,t,n,a),t.child)}function $c(e,t,n,r,i){if(Fa(t),t.stateNode===null){var a=Hi,o=n.contextType;typeof o==`object`&&o&&(a=Ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Dc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},To(t),o=n.contextType,a.context=typeof o==`object`&&o?Ia(o):Hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ec(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Dc.enqueueReplaceState(a,a.state,null),No(t,r,a,i),Mo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ac(n,s);a.props=c;var l=a.context,u=n.contextType;o=Hi,typeof u==`object`&&u&&(o=Ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&kc(t,a,r,o),wo=!1;var f=t.memoizedState;a.state=f,No(t,r,a,i),Mo(),l=t.memoizedState,s||f!==l||wo?(typeof d==`function`&&(Ec(t,n,d,r),l=t.memoizedState),(c=wo||Oc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Eo(e,t),o=t.memoizedProps,u=Ac(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Hi,typeof l==`object`&&l&&(c=Ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&kc(t,a,r,c),wo=!1,f=t.memoizedState,a.state=f,No(t,r,a,i),Mo();var p=t.memoizedState;o!==d||f!==p||wo||e!==null&&e.dependencies!==null&&Pa(e.dependencies)?(typeof s==`function`&&(Ec(t,n,s,r),p=t.memoizedState),(u=wo||Oc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Pa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Xc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=So(t,e.child,null,i),t.child=So(t,null,n,i)):L(e,t,n,i),t.memoizedState=a.state,e=t.child):e=hl(e,t,i),e}function el(e,t,n,r){return Ca(),t.flags|=256,L(e,t,n,r),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nl(e){return{baseLanes:e,cachePool:ao()}}function rl(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=md),e}function il(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Jo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(k){if(i?Uo(t):Ko(),(e=ha)?(e=lm(e,_a),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa===null?null:{id:sa,overflow:ca},retryLane:536870912,hydrationErrors:null},n=Xi(e),n.return=t,t.child=n,ma=t,ha=null)):e=null,e===null)throw ya(t);return t.lanes=dm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ko(),i=t.mode,a=ol({mode:`hidden`,children:a},i),r=Ji(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=nl(n),r.childLanes=rl(e,o,n),t.memoizedState=tl,Gc(null,r)):(Uo(t),al(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return cl(e,t,a,o,r,c,s,n)}return i?(Ko(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=O(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ji(i,a,n,null),i.flags|=2):i=O(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Gc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=nl(n):(a=i.cachePool,a===null?a=ao():(s=Ha._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=rl(e,o,n),t.memoizedState=tl,Gc(e.child,r)):(Uo(t),n=e.child,e=n.sibling,n=O(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function al(e,t){return t=ol({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function ol(e,t){return e=Wi(22,e,null,t),e.lanes=0,e}function sl(e,t,n){return So(t,e.child,null,n),e=al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Uo(t),t.flags&=-257,sl(e,t,c)):t.memoizedState===null?(Ko(),o=a.fallback,s=t.mode,a=ol({mode:`visible`,children:a.children},s),o=Ji(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,So(t,e.child,null,c),a=t.child,a.memoizedState=nl(c),a.childLanes=rl(e,r,c),t.memoizedState=tl,Gc(null,a)):(Ko(),t.child=e.child,t.flags|=128,null);if(Uo(t),dm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,Ta({value:a,source:null,stack:null})),sl(e,t,c)}if(I||Na(e,t,c,!1),r=(c&e.childLanes)!==0,I||r){if(Io.current!==null)return sl(e,t,c);if(r=rd,r!==null&&(a=Ot(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,zi(e,a),Rd(r,e,a),Bc;return um(o)||Yd(),sl(e,t,c)}return um(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ha=pm(o.nextSibling),ma=t,k=!0,ga=null,_a=!1,e!==null&&pa(t,e),t=al(t,a.children),t.flags|=134221824,t)}function ll(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ja(e.return,t,n)}function ul(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&j(n)===null&&(t=e),e=e.sibling}return t}function dl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function fl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function pl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Jo.current;if(t.flags&128)return Yo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Yo(t,o),i===`backwards`&&e!==null?(fl(e),L(e,t,r,n),fl(e)):L(e,t,r,n),r=k?ra:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ll(e,n,t);else if(e.tag===19)ll(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ul(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,fl(t)),dl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&j(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,a,r);break;case`together`:dl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ul(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,a,r)}return t.child}function ml(e,t,n){var r=t.pendingProps;return ka(t,t.type,r.value),L(e,t,r.children,n),t.child}function hl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=O(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=O(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Pa(e)))}function _l(e,t,n){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),ka(t,Ha,e.memoizedState.cache),Ca();break;case 27:case 5:Re(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:ka(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Uo(t),t.flags|=128,null;r=Na(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?il(e,t,n):(Uo(t),e=hl(e,t,n),e===null?null:e.sibling)}Uo(t);break;case 19:if(t.flags&128)return pl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return pl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Yo(t,Jo.current),r)break;return null;case 22:return t.lanes=0,Wc(e,t,n,t.pendingProps);case 24:ka(t,Ha,e.memoizedState.cache)}return hl(e,t,n)}function vl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)I=!0;else{if(!gl(e,n)&&!(t.flags&128))return I=!1,_l(e,t,n);I=!!(e.flags&131072)}}else I=!1,k&&t.flags&1048576&&ua(t,ra,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=po(t.elementType),t.type=e,typeof e==`function`)Gi(e)?(r=Ac(e,r),t.tag=1,t=$c(null,t,e,r,n)):(t.tag=0,t=Zc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===de){t.tag=11,t=Vc(null,t,e,r,n);break a}if(a===me){t.tag=14,t=Hc(null,t,e,r,n);break a}if(a===ue){t.tag=10,t.type=e,t=ml(null,t,n);break a}}throw t=we(e)||e,Error(i(306,t,``))}}return t;case 0:return Zc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ac(r,t.pendingProps),$c(e,t,r,a,n);case 3:a:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Eo(e,t),No(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ka(t,Ha,r),r!==o.cache&&Ma(t,[Ha],n,!0),Mo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=el(e,t,r,n);break a}if(r!==a){a=$i(Error(i(424)),t),Ta(a),t=el(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ha=pm(e.firstChild),ma=t,k=!0,ga=null,_a=!0,n=Co(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ca(),r===a){t=hl(e,t,n);break a}L(e,t,r,n)}t=t.child}return t;case 26:return Xc(e,t),e===null?(n=Lm(t.type,null,t.pendingProps,null))?t.memoizedState=n:k||(t.stateNode=gp(t.type,t.pendingProps,Pe.current,t)):t.memoizedState=Lm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Re(t),e===null&&k&&(r=t.stateNode=ym(t.type,t.pendingProps,Pe.current),ma=t,_a=!0,a=ha,Ep(t.type)?(mm=a,ha=pm(r.firstChild)):ha=a),L(e,t,t.pendingProps.children,n),Xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&k&&((a=r=ha)&&(r=sm(r,t.type,t.pendingProps,_a),r===null?a=!1:(t.stateNode=r,ma=t,ha=pm(r.firstChild),_a=!1,a=!0)),a||ya(t)),Re(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,_p(a,o)?r=null:s!==null&&_p(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=cs(e,t,ds,null,null,n),dh._currentValue=a),Xc(e,t),L(e,t,r,n),t.child;case 6:return e===null&&k&&((e=n=ha)&&(n=cm(n,t.pendingProps,_a),n===null?e=!1:(t.stateNode=n,ma=t,ha=null,e=!0)),e||ya(t)),null;case 13:return il(e,t,n);case 4:return Ie(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=So(t,null,r,n):L(e,t,r,n),t.child;case 11:return Vc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Xc(e,t),L(e,t,r,n),t.child;case 8:return L(e,t,t.pendingProps.children,n),t.child;case 12:return L(e,t,t.pendingProps.children,n),t.child;case 10:return ml(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Fa(t),a=Ia(a),r=r(a),t.flags|=1,L(e,t,r,n),t.child;case 14:return Hc(e,t,t.type,t.pendingProps,n);case 15:return Uc(e,t,t.type,t.pendingProps,n);case 19:return pl(e,t,n);case 31:return Yc(e,t,n);case 22:return Wc(e,t,n,t.pendingProps);case 24:return Fa(t),r=Ia(Ha),e===null?(a=ro(),a===null&&(a=rd,o=Ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},To(t),ka(t,Ha,a)):((e.lanes&n)!==0&&(Eo(e,t),No(t,null,null,n),Mo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ka(t,Ha,r),r!==a.cache&&Ma(t,[Ha],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ka(t,Ha,r))),L(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:k&&da(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Xc(e,t),L(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function yl(e){e.flags|=4}function bl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Qm(t,r):Qm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Kd())e.flags|=8192;else throw mo=lo,so}}else e.flags&=-16777217}function xl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$m(t)){if(Kd())e.flags|=8192;else throw mo=lo,so}}function Sl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:St(),e.lanes|=t,hd|=t)}function Cl(e,t){if(!k)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function R(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z(e,t,n){var r=t.pendingProps;switch(fa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return R(t),null;case 1:return R(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Aa(Ha),Le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Sa(t)?yl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wa())),R(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(yl(t),o===null?(R(t),bl(t,a,null,r,n)):(R(t),xl(t,o))):o?o===e.memoizedState?(R(t),t.flags&=-16777217):(yl(t),R(t),xl(t,o)):(e=e.memoizedProps,e!==r&&yl(t),R(t),bl(t,a,e,r,n)),null;case 27:if(ze(t),n=Pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&yl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return R(t),t.subtreeFlags&=-33554433,null}e=Me.current,Sa(t)?ba(t,e):(e=ym(a,r,n),t.stateNode=e,yl(t))}return R(t),t.subtreeFlags&=-33554433,null;case 5:if(ze(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&yl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return R(t),t.subtreeFlags&=-33554433,null}if(o=Me.current,Sa(t))ba(t,o);else{var s=pp(Pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Pt]=t,o[Ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(op(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&yl(t)}}return R(t),t.subtreeFlags&=-33554433,bl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&yl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Pe.current,Sa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ma,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ip(e.nodeValue,n)),e||ya(t,!0)}else e=pp(e).createTextNode(r),e[Pt]=t,t.stateNode=e}return R(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Sa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Pt]=t}else Ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;R(t),e=!1}else n=wa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qo(t),t):(qo(t),null);if(t.flags&128)throw Error(i(558))}return R(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Sa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Pt]=t}else Ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;R(t),a=!1}else a=wa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(qo(t),t):(qo(t),null)}return qo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Sl(t,t.updateQueue),R(t),null);case 4:return Le(),e===null&&Jf(t.stateNode.containerInfo),t.flags|=67108864,R(t),null;case 10:return Aa(t.type),R(t),null;case 19:if(Xo(t),r=t.memoizedState,r===null)return R(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Cl(r,!1);else{if(ud!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=j(e),o!==null){for(t.flags|=128,Cl(r,!1),e=o.updateQueue,t.updateQueue=e,Sl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ki(n,e),n=n.sibling;return Yo(t,Jo.current&1|2),k&&la(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Qe()>xd&&(t.flags|=128,a=!0,Cl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=j(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Sl(t,e),Cl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!k)return R(t),null}else 2*Qe()-r.renderingStartTime>xd&&n!==536870912&&(t.flags|=128,a=!0,Cl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Qe(),e.sibling=null,o=Jo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||k?Yo(t,o):(n=o,je(Vo,t),je(Jo,n),Ho===null&&(Ho=t)),k&&la(t,r.treeForkCount),e}return R(t),null;case 22:case 23:return qo(t),Bo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(R(t),t.subtreeFlags&6&&(t.flags|=8192)):R(t),n=t.updateQueue,n!==null&&Sl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Ae(no),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Aa(Ha),R(t),null;case 25:return null;case 30:return t.flags|=33554432,R(t),null}throw Error(i(156,t.tag))}function wl(e,t){switch(fa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Aa(Ha),Le(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ze(t),null;case 31:if(t.memoizedState!==null){if(qo(t),t.alternate===null)throw Error(i(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Le(),null;case 10:return Aa(t.type),null;case 22:case 23:return qo(t),Bo(),e!==null&&Ae(no),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Aa(Ha),null;case 25:return null;default:return null}}function Tl(e,t){switch(fa(t),t.tag){case 3:Aa(Ha),Le();break;case 26:case 27:case 5:ze(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&qo(t);break;case 13:qo(t);break;case 19:Xo(t);break;case 10:Aa(t.type);break;case 22:case 23:qo(t),Bo(),e!==null&&Ae(no);break;case 24:Aa(Ha)}}function El(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){_f(t,t.return,e)}}function Dl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){_f(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){_f(t,t.return,e)}}function Ol(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fo(t,n)}catch(t){_f(e,e.return,t)}}}function kl(e,t,n){n.props=Ac(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){_f(e,t,n)}}function Al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=ki(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Rp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new zp(e);h(e.child,!1,nm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){_f(e,t,n)}}function jl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){_f(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){_f(e,t,n)}else n.current=null}}function Ml(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)im(e.stateNode,t[n])}function Nl(e){for(var t=e.return;t!==null&&(Il(t)&&im(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Pl(e){for(var t=e.return;t!==null&&(Il(t)&&am(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Fl(e){return e.tag===5||e.tag===3||e.tag===27}function Il(e){return e&&e.tag===7&&e.stateNode!==null}function Ll(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){_f(e,e.return,t)}}function Rl(e,t,n){try{var r=e.stateNode;cp(r,e.type,n,t),r[Ft]=t}catch(t){_f(e,e.return,t)}}function zl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ep(e.type)||e.tag===4}function Bl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ep(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An)),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Ep(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Vl(e,t,n,r),e=e.sibling;e!==null;)Vl(e,t,n,r),e=e.sibling}function Hl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Ep(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Hl(e,t,n,r),e=e.sibling;e!==null;)Hl(e,t,n,r),e=e.sibling}function Ul(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);op(t,r,n),t[Pt]=e,t[Ft]=n}catch(t){_f(e,e.return,t)}}var Wl=!1,Gl=null;function Kl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Wl=!0)}var ql=null;function Jl(){var e=ql;return ql=null,e}var Yl=0;function Xl(e,t,n,r,i){return Yl=0,Zl(e.child,t,n,r,i)}function Zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Mp(o);r.push(s),s.view&&(a=!0)}else a||Mp(o).view&&(a=!0);Wl=!0,kp(o,Yl===0?t:t+`_`+Yl,n),Yl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Zl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Ql(e,t){for(;e!==null;)e.tag===5?Ap(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Ql(e.child,t),e=e.sibling}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($l(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=ji(t.default,t.share),t!==`none`&&(Xl(e,n,t,null,!1)||Ql(e.child,!1))}e=e.sibling}}function eu(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=ki(r,n),a=ji(r.default,n.paired?r.share:r.enter);a===`none`?$l(e):Xl(e,i,a,null,!1)?($l(e),n.paired||t||K(e,r.onEnter)):Ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e,t),e=e.sibling;else $l(e)}function tu(e){if(Gl!==null&&Gl.size!==0){var t=Gl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ji(n.default,n.share);if(a!==`none`&&(Xl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,K(e,n.onShare)):Ql(e.child,!1)),t.delete(r),t.size===0)break}}}tu(e)}e=e.sibling}}}function nu(e){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode),r=Gl===null?void 0:Gl.get(n),i=ji(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Xl(e,n,i,null,!1)?r===void 0?K(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Gl.delete(n),K(e,t.onShare)):Ql(e.child,!1)),Gl!==null&&tu(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else Gl!==null&&tu(e)}function ru(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode);t=ji(t.default,t.update),e.flags&=-5,t!==`none`&&Xl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&ru(e);e=e.sibling}}function B(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ql(e.child,!1))}B(e)}e=e.sibling}}function iu(e){if(e.tag===30)e.stateNode.paired=null,Ql(e.child,!1),B(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)iu(e),e=e.sibling;else B(e)}function au(e){for(e=e.child;e!==null;)e.tag===30?Ql(e.child,!1):e.subtreeFlags&33554432&&au(e),e=e.sibling}function ou(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Yl<a.length){var l=a[Yl],u=Mp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&kp(c,Yl===0?n:n+`_`+Yl,i),s&&e.flags&4||(ql===null&&(ql=[]),ql.push(c,Yl===0?r:r+`_`+Yl,t.memoizedProps)),Yl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:ou(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function su(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=ki(n,r),a=ji(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Np)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Yl=0,i=ou(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||K(e,n.onUpdate))}else e.subtreeFlags&33554432&&su(e,t);e=e.sibling}}var cu=!1,V=!1,lu=!1,H=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,dp=bh,e=ai(e),oi(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(fp={focusedElem:e,selectionRange:r},bh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&nu(r[a]);if(e.alternate===null&&e.flags&2)n&&Kl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&nu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Kl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&ru(e),_u(n))}}Gl=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Ac(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){_f(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)om(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:om(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=ki(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=ji(a.default,a.update),a!==`none`&&Xl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ru(e,n),r&4&&El(5,n);break;case 1:if(Ru(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){_f(n,n.return,e)}else{var i=Ac(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){_f(n,n.return,e)}}}r&64&&Ol(n),r&512&&Al(n,n.return);break;case 3:if(Ru(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fo(e,t)}catch(e){_f(n,n.return,e)}}break;case 27:t===null&&r&4&&Ul(n);case 26:case 5:Ru(e,n),t===null&&r&4&&Ll(n),r&512&&Al(n,n.return);break;case 12:Ru(e,n);break;case 31:Ru(e,n),r&4&&Du(e,n);break;case 13:Ru(e,n),r&4&&Ou(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=xf.bind(null,n),fm(e,n))));break;case 22:if(r=n.memoizedState!==null||cu,!r){var a=t!==null&&t.memoizedState!==null||V;t=cu,i=V,cu=r,(V=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Bu(e,n,r)):Ru(e,n),cu=t,V=i}break;case 30:Ru(e,n),r&512&&Al(n,n.return);break;case 7:r&512&&Al(n,n.return);default:Ru(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){_f(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,D=!0}catch(t){_f(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Op(s,!0):Op(e.stateNode,!1)}catch(t){_f(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ut(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cu=null,wu=!1;function Tu(e,t,n){for(n=n.child;n!==null;)Eu(e,t,n),n=n.sibling}function Eu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount==`function`)try{ct.onCommitFiberUnmount(st,n)}catch{}switch(n.tag){case 26:V||jl(n,t),Tu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!V&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||jl(n,t),Pl(n);var r=Cu,i=wu;Ep(n.type)&&(Cu=n.stateNode,wu=!1),Tu(e,t,n),bm(n.stateNode,n.type,n.memoizedProps),Cu=r,wu=i;break;case 5:V||jl(n,t),Pl(n);case 6:if(n.tag===6&&Pl(n),r=Cu,i=wu,Cu=null,Tu(e,t,n),Cu=r,wu=i,Cu!==null){if(wu)try{(Cu.nodeType===9?Cu.body:Cu.nodeName===`HTML`?Cu.ownerDocument.body:Cu).removeChild(n.stateNode),D=!0}catch(e){_f(n,t,e)}else try{Cu.removeChild(n.stateNode),D=!0}catch(e){_f(n,t,e)}}break;case 18:Cu!==null&&(wu?(e=Cu,Dp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Kh(e)):Dp(Cu,n.stateNode));break;case 4:r=Cu,i=wu,Cu=n.stateNode.containerInfo,wu=!0,Tu(e,t,n),Cu=r,wu=i;break;case 0:case 11:case 14:case 15:Dl(2,n,t),V||Dl(4,n,t),Tu(e,t,n);break;case 1:V||(jl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&kl(n,t,r)),Tu(e,t,n);break;case 21:Tu(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,Tu(e,t,n),V=r;break;case 30:jl(n,t),Tu(e,t,n);break;case 7:V||jl(n,t),Tu(e,t,n);break;default:Tu(e,t,n)}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kh(e)}catch(e){_f(t,t.return,e)}}}function Ou(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kh(e)}catch(e){_f(t,t.return,e)}}function ku(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(i(435,e.tag))}}function Au(e,t){var n=ku(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Sf.bind(null,e,t);t.then(r,r)}})}function ju(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Ep(l.type)){Cu=l.stateNode,wu=!1;break a}break;case 5:Cu=l.stateNode,wu=!1;break a;case 3:case 4:Cu=l.stateNode.containerInfo,wu=!0;break a}l=l.return}if(Cu===null)throw Error(i(160));Eu(s,c,o),Cu=null,wu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Nu(t,e,n),t=t.sibling}var Mu=null;function Nu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}ju(t,e,n),Pu(e),a&4&&(Dl(3,e,e.return),El(3,e),Dl(5,e,e.return));break;case 1:ju(t,e,n),Pu(e),a&512&&(V||r===null||jl(r,r.return)),a&64&&cu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Mu,ju(t,e,n),Pu(e),a&512&&(V||r===null||jl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(cu)e.stateNode=gp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Vt]||r[Pt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),op(r,t,n),r[Pt]=e,Jt(r),t=r;break a;case`link`:if(o=Ym(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),op(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Ym(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),op(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Pt]=e,Jt(r),t=r}e.stateNode=t}}else cu||Xm(o,e.type,e.stateNode)}else e.stateNode=Wm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Rl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||V||t.parentNode.removeChild(t)):a.count--,n===null?cu||Xm(o,e.type,e.stateNode):Wm(o,n,e.memoizedProps))}break;case 27:ju(t,e,n),Pu(e),a&512&&(V||r===null||jl(r,r.return)),r!==null&&a&4&&Rl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=lu,lu=!1,ju(t,e,n),lu=o,Pu(e),a&512&&(V||r===null||jl(r,r.return)),e.flags&32){t=e.stateNode;try{Sn(t,``),D=!0}catch(t){_f(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Rl(e,t,r===null?t:r.memoizedProps)),a&1024&&(H=!0);break;case 6:if(ju(t,e,n),Pu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,D=!0}catch(t){_f(e,e.return,t)}}break;case 3:if(D=!1,Jm=null,o=Mu,Mu=wm(t.containerInfo),ju(t,e,n),Mu=o,Pu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Kh(t.containerInfo)}catch(t){_f(e,e.return,t)}H&&(H=!1,Fu(e)),D=!1;break;case 4:a=lu,lu=cu,r=an(),o=Mu,Mu=wm(e.stateNode.containerInfo),ju(t,e,n),Pu(e),Mu=o,D&&pu&&(mu=!0),D=r,lu=a;break;case 12:ju(t,e,n),Pu(e);break;case 31:ju(t,e,n),Pu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:ju(t,e,n),Pu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yd=Qe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=cu,l=V,u=lu;cu=c||o,lu=u||o,V=l||s,ju(t,e,n),V=l,lu=u,cu=c,Pu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||cu||V||(t=s||V,n=cu,r=V,cu=o||cu,V=t,zu(e,2),cu=n,V=r),!o&&lu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Au(e,n))));break;case 19:ju(t,e,n),Pu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:a&512&&(V||r===null||jl(r,r.return)),a=an(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&ji(c.default,c.update)!==`none`,ju(t,e,n),Pu(e),s&&r!==null&&D&&(e.flags|=4),pu=o,D=a;break;case 21:break;case 7:a&512&&(V||r===null||jl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:ju(t,e,n),Pu(e)}}function Pu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(zl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Il(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Fl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Hl(e,Bl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(Sn(l,``),n.flags&=-33),Hl(e,Bl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Vl(e,Bl(e),u,s);break;default:throw Error(i(161))}}catch(t){_f(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,bh=!0,t.reset(),bh=!1),e=e.sibling}}function Iu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling;else su(t,!1)}function Lu(e,t){var n=e.alternate;if(n===null)eu(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Jl(),Iu(t,e),!fu&&!mu){if(e=ql,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ap(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}ql=null;break;case 5:Iu(t,e);break;case 4:r=fu,fu=!1,Iu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Iu(t,e):eu(e,!1));break;case 30:r=fu,i=Jl(),fu=!1,Iu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=ki(a,o),o=ki(n.memoizedProps,o);var s=ji(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Yl=0,t=ou(e,n,t,o,s,a,!0),Yl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(K(e,e.memoizedProps.onUpdate),ql=i):i!==null&&(i.push.apply(i,ql),ql=i),fu=e.flags&32?!0:r;break;default:Iu(t,e)}}function Ru(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function zu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Dl(4,n,n.return),zu(n,r);break;case 1:jl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&kl(n,n.return,i),zu(n,r);break;case 27:r&2&&bm(n.stateNode,n.type,n.memoizedProps);case 5:jl(n,n.return),n.tag!==5&&n.tag!==27||Pl(n),zu(n,r);break;case 6:Pl(n);break;case 26:jl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||V||i.parentNode.removeChild(i),zu(n,r);break;case 22:n.memoizedState===null&&zu(n,r);break;case 30:jl(n,n.return),zu(n,r);break;case 7:jl(n,n.return);default:zu(n,r)}e=e.sibling}}function Bu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Bu(i,a,n),El(4,a);break;case 1:if(Bu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){_f(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Po(l[i],c)}catch(e){_f(r,r.return,e)}}s&&o&64&&Ol(a),Al(a,a.return);break;case 27:n&2&&Ul(a);case 5:a.tag!==5&&a.tag!==27||Nl(a),Bu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 6:Nl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||cu||Xm(wm(c.ownerDocument),a.type,c),Bu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 12:Bu(i,a,n);break;case 31:Bu(i,a,n),s&&o&4&&Du(i,a);break;case 13:Bu(i,a,n),s&&o&4&&Ou(i,a);break;case 22:a.memoizedState===null&&Bu(i,a,n),Al(a,a.return);break;case 30:Bu(i,a,n),Al(a,a.return);break;case 7:Al(a,a.return);default:Bu(i,a,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Wa(n))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wa(e))}function Uu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Wu(e,t,n,r),t=t.sibling;else i&&au(t)}function Wu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&iu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Uu(e,t,n,r),a&2048&&El(9,t);break;case 1:Uu(e,t,n,r);break;case 3:Uu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Wa(a)));break;case 12:if(a&2048){Uu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){_f(t,t.return,e)}}else Uu(e,t,n,r);break;case 31:Uu(e,t,n,r);break;case 13:Uu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&iu(t),o._visibility&2?Uu(e,t,n,r):(o._visibility|=2,Gu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&iu(s),o._visibility&2?Uu(e,t,n,r):Ku(e,t)),a&2048&&Vu(s,t);break;case 24:Uu(e,t,n,r),a&2048&&Hu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ql(a.child,!0),Ql(t.child,!0))),Uu(e,t,n,r);break;default:Uu(e,t,n,r)}}function Gu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Gu(a,o,s,c,i),El(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Gu(a,o,s,c,i)):u._visibility&2?Gu(a,o,s,c,i):Ku(a,o),i&&l&2048&&Vu(o.alternate,o);break;case 24:Gu(a,o,s,c,i),i&&l&2048&&Hu(o.alternate,o);break;default:Gu(a,o,s,c,i)}t=t.sibling}}function Ku(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ku(n,r),i&2048&&Vu(r.alternate,r);break;case 24:Ku(n,r),i&2048&&Hu(r.alternate,r);break;default:Ku(n,r)}t=t.sibling}}var qu=8192;function Ju(e,t,n){if(e.subtreeFlags&qu)for(e=e.child;e!==null;)Yu(e,t,n),e=e.sibling}function Yu(e,t,n){switch(e.tag){case 26:Ju(e,t,n),e.flags&qu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&th(n,e)):nh(n,Mu,e.memoizedState,e.memoizedProps));break;case 5:Ju(e,t,n),e.flags&qu&&(e=e.stateNode,(t&335544128)===t&&th(n,e));break;case 3:case 4:var r=Mu;Mu=wm(e.stateNode.containerInfo),Ju(e,t,n),Mu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=qu,qu=16777216,Ju(e,t,n),qu=r):Ju(e,t,n));break;case 30:if((e.flags&qu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Gl===null&&(Gl=new Map),Gl.set(r,i)}Ju(e,t,n);break;default:Ju(e,t,n)}}function Xu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,ed(r,e)}Xu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qu(e),e=e.sibling}function Qu(e){switch(e.tag){case 0:case 11:case 15:Zu(e),e.flags&2048&&Dl(9,e,e.return);break;case 3:Zu(e);break;case 12:Zu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$u(e)):Zu(e);break;default:Zu(e)}}function $u(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,ed(r,e)}Xu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dl(8,t,t.return),$u(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$u(t));break;default:$u(t)}e=e.sibling}}function ed(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Dl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Wa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var td={getCacheForType:function(e){var t=Ia(Ha),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ia(Ha).controller.signal}},nd=typeof WeakMap==`function`?WeakMap:Map,U=0,rd=null,W=null,G=0,id=0,ad=null,od=!1,sd=!1,cd=!1,ld=0,ud=0,dd=0,fd=0,pd=0,md=0,hd=0,gd=null,_d=null,vd=!1,yd=0,bd=0,xd=1/0,Sd=null,Cd=null,wd=0,Td=null,Ed=null,Dd=0,Od=0,kd=null,Ad=null,jd=null,Md=null,Nd=null,Pd=0,Fd=null;function Id(){return U&2&&G!==0?G&-G:T.T===null?jt():Rf()}function Ld(){if(md===0){if(!(G&536870912)||k){var e=ht;ht<<=1,!(ht&3932160)&&(ht=262144),md=e}else md=536870912}return e=Vo.current,e!==null&&(e.flags|=32),md}function K(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Rp(ki(e.memoizedProps,n))),Md===null&&(Md=[]),Md.push(t.bind(null,r))}}function Rd(e,t,n){(e===rd&&(id===2||id===9)||e.cancelPendingCommit!==null)&&(Wd(e,0),q(e,G,md,!1)),wt(e,n),U&2&&e===rd||(e===rd&&(!(U&2)&&(fd|=n),ud===4&&q(e,G,md,!1)),Af(e))}function zd(e,t,n){if(U&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||yt(e,t),a=r?Qd(e,t):Xd(e,t,!0),o=r;do{if(a===0){sd&&!r&&q(e,t,0,!1);break}if(n=e.current.alternate,o&&!Vd(n))a=Xd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=gd;var l=c.current.memoizedState.isDehydrated;if(l&&(Wd(c,s).flags|=256),s=Xd(c,s,!1),s!==2&&s!==6){if(cd&&!l){c.errorRecoveryDisabledLanes|=o,fd|=o,a=4;break a}o=_d,_d=a,o!==null&&(_d===null?_d=o:_d.push.apply(_d,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Wd(e,0),q(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:q(r,t,md,!od);break a;case 2:_d=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=yd+300-Qe(),10<a)){if(q(r,t,md,!od),vt(r,0,!0)!==0)break a;Dd=t,r.timeoutHandle=bp(Bd.bind(null,r,n,_d,Sd,vd,t,md,fd,hd,od,o,`Throttled`,-0,0),a);break a}Bd(r,n,_d,Sd,vd,t,md,fd,hd,od,o,null,-0,0)}break}}while(1);Af(e)}function Bd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Gl=null,Yu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=oh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?yd-Qe():(a&4194048)===a?bd-Qe():0,m=ih(d,m),m!==null)?(Dd=a,e.cancelPendingCommit=m(of.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),q(e,a,o,!l)):of(e,t,a,n,r,i,o,s,c,l,u,d)}function Vd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!$r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function q(e,t,n,r){t=bt(e,t),t&=~pd,t&=~fd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ut(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Et(e,n,t)}function Hd(){return U&6?!0:(jf(0,!1),!1)}function Ud(){if(W!==null){if(id===0)var e=W.return;else e=W,Oa=Da=null,ms(e),go=null,_o=0,e=W;for(;e!==null;)Tl(e.alternate,e),e=e.return;W=null}}function Wd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,xp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dd=0,Ud(),rd=e,W=n=O(e.current,null),G=t,id=0,ad=null,od=!1,sd=yt(e,t),cd=!1,hd=md=pd=fd=dd=ud=0,_d=gd=null,vd=!1,ld=bt(e,t),Ii(),n}function Gd(e,t){M=null,T.H=Sc,t===oo||t===co?(t=ho(),id=3):t===so?(t=ho(),id=4):id=t===Bc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ad=t,W===null&&(ud=1,Pc(e,$i(t,e.current)))}function Kd(){var e=Vo.current;return e===null?!0:(G&4194048)===G?Ho===null:(G&62914560)===G||G&536870912?e===Ho:!1}function qd(){var e=T.H;return T.H=Sc,e===null?Sc:e}function Jd(){var e=T.A;return T.A=td,e}function Yd(){ud=4,od||(G&4194048)!==G&&Vo.current!==null||(sd=!0),!(dd&134217727)&&!(fd&134217727)||rd===null||q(rd,G,md,!1)}function Xd(e,t,n){var r=U;U|=2;var i=qd(),a=Jd();(rd!==e||G!==t)&&(Sd=null,Wd(e,t)),t=!1;var o=ud;a:do try{if(id!==0&&W!==null){var s=W,c=ad;switch(id){case 8:Ud(),o=6;break a;case 3:case 2:case 9:case 6:Vo.current===null&&(t=!0);var l=id;if(id=0,ad=null,nf(e,s,c,l),n&&sd){o=0;break a}break;default:l=id,id=0,ad=null,nf(e,s,c,l)}}Zd(),o=ud;break}catch(t){Gd(e,t)}while(1);return t&&e.shellSuspendCounter++,Oa=Da=null,U=r,T.H=i,T.A=a,W===null&&(rd=null,G=0,Ii()),o}function Zd(){for(;W!==null;)ef(W)}function Qd(e,t){var n=U;U|=2;var r=qd(),a=Jd();rd!==e||G!==t?(Sd=null,xd=Qe()+500,Wd(e,t)):sd=yt(e,t);a:do try{if(id!==0&&W!==null){t=W;var o=ad;b:switch(id){case 1:id=0,ad=null,nf(e,t,o,1);break;case 2:case 9:if(uo(o)){id=0,ad=null,tf(t);break}t=function(){id!==2&&id!==9||rd!==e||(id=7),Af(e)},o.then(t,t);break a;case 3:id=7;break a;case 4:id=5;break a;case 7:uo(o)?(id=0,ad=null,tf(t)):(id=0,ad=null,nf(e,t,o,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var c=W;if(s?$m(s):c.stateNode.complete){id=0,ad=null;var l=c.sibling;if(l!==null)W=l;else{var u=c.return;u===null?W=null:(W=u,rf(u))}break b}}id=0,ad=null,nf(e,t,o,5);break;case 6:id=0,ad=null,nf(e,t,o,6);break;case 8:Ud(),ud=6;break a;default:throw Error(i(462))}}$d();break}catch(t){Gd(e,t)}while(1);return Oa=Da=null,T.H=r,T.A=a,U=n,W===null?(rd=null,G=0,Ii(),ud):0}function $d(){for(;W!==null&&!Xe();)ef(W)}function ef(e){var t=vl(e.alternate,e,ld);e.memoizedProps=e.pendingProps,t===null?rf(e):W=t}function tf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qc(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=Qc(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:ms(t);var r=t;r===ma&&(k?(xa(r),r.tag===5&&r.stateNode!=null&&(ha=r.stateNode)):(xa(r),k=!0));default:Tl(n,t),t=W=Ki(t,ld),t=vl(n,t,ld)}e.memoizedProps=e.pendingProps,t===null?rf(e):W=t}function nf(e,t,n,r){Oa=Da=null,ms(t),go=null,_o=0;var i=t.return;try{if(zc(e,i,t,n,G)){ud=1,Pc(e,$i(n,e.current)),W=null;return}}catch(t){if(i!==null)throw W=i,t;ud=1,Pc(e,$i(n,e.current)),W=null;return}t.flags&32768?(k||r===1?e=!0:sd||G&536870912?e=!1:(od=e=!0,(r===2||r===9||r===3||r===6)&&(r=Vo.current,r!==null&&r.tag===13&&(r.flags|=16384))),af(t,e)):rf(t)}function rf(e){var t=e;do{if(t.flags&32768){af(t,od);return}e=t.return;var n=z(t.alternate,t,ld);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);ud===0&&(ud=5)}function af(e,t){do{var n=wl(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);ud=6,W=null}function of(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do mf();while(wd!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===rd&&(W=rd=null,G=0),Ed=t,Td=e,Dd=n,kd=a,Ad=r,sf(e,t,n,s,c,l,f)}}function sf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Od=s,s|=Fi,Tt(e,n,s,r,i,a),Md=null,(n&335544064)===n?(Nd=qa(e),r=10262):(Nd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Cf(nt,function(){return hf(),null})):(e.callbackNode=null,e.callbackPriority=0),Wl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,a=U,U|=4;try{gu(e,t,n)}finally{U=a,E.p=i,T.T=r}}wd=1,Wl?jd=Ip(o,e.containerInfo,Nd,uf,df,lf,ff,hf,cf,null,null):(uf(),df(),ff())}function cf(e){if(wd!==0){var t=Td.onRecoverableError;t(e,{componentStack:null})}}function lf(){wd===3&&(wd=0,Lu(Ed,Td),wd=4)}function uf(){if(wd===1){wd=0;var e=Td,t=Ed,n=Dd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=T.T,T.T=null;var i=E.p;E.p=2;var a=U;U|=4;try{pu=mu=!1,Nu(t,e,n),n=fp;var o=ai(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ii(s.ownerDocument.documentElement,s)){if(c!==null&&oi(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ri(s,h),v=ri(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}bh=!!dp,fp=dp=null}finally{U=a,E.p=i,T.T=r}}e.current=t,wd=2}}function df(){if(wd===2){wd=0;var e=Td,t=Ed,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=U;U|=4;try{vu(e,t.alternate,t)}finally{U=i,E.p=r,T.T=n}}wd=3}}function ff(){if(wd===4||wd===3){wd=0;var e=jd;jd=null,Ze();var t=Td,n=Ed,r=Dd,i=Ad,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?wd=5:(wd=0,Ed=Td=null,pf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Cd=null),At(r),n=n.stateNode,ct&&typeof ct.onCommitFiberRoot==`function`)try{ct.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=T.T,a=E.p,E.p=2,T.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{T.T=n,E.p=a}}if(i=Md,o=Nd,Nd=null,i!==null&&(Md=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Dd&3&&mf(),Af(t),a=t.pendingLanes,r&261930&&a&42?t===Fd?Pd++:(Pd=0,Fd=t):(Pd=0,Fd=null),jf(0,!1)}}function pf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wa(t)))}function mf(){return jd!==null&&(jd.skipTransition(),jd=null),uf(),df(),ff(),hf()}function hf(){if(wd!==5)return!1;var e=Td,t=Od;Od=0;var n=At(Dd),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=kd,kd=null;var o=Td,s=Dd;if(wd=0,Ed=Td=null,Dd=0,U&6)throw Error(i(331));var c=U;if(U|=4,Qu(o.current),Wu(o,o.current,s,n),U=c,jf(0,!1),ct&&typeof ct.onPostCommitFiberRoot==`function`)try{ct.onPostCommitFiberRoot(st,o)}catch{}return!0}finally{E.p=a,T.T=r,pf(e,t)}}function gf(e,t,n){t=$i(n,t),t=Ic(e.stateNode,t,2),e=Oo(e,t,2),e!==null&&(wt(e,2),Af(e))}function _f(e,t,n){if(e.tag===3)gf(e,e,n);else for(;t!==null;){if(t.tag===3){gf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Cd===null||!Cd.has(r))){e=$i(n,e),n=Lc(2),r=Oo(t,n,2),r!==null&&(Rc(n,r,t,e),wt(r,2),Af(r));break}}t=t.return}}function vf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(cd=!0,i.add(n),e=yf.bind(null,e,t,n),t.then(e,e))}function yf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rd===e&&(G&n)===n&&(ud===4||ud===3&&(G&62914560)===G&&300>Qe()-yd?U&2?pd|=n:Wd(e,0):pd|=n,hd===G&&(hd=0)),Af(e)}function bf(e,t){t===0&&(t=St()),e=zi(e,t),e!==null&&(wt(e,t),Af(e))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bf(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),bf(e,n)}function Cf(e,t){return Je(e,t)}var wf=null,Tf=null,Ef=!1,Df=!1,Of=!1,kf=0;function Af(e){e!==Tf&&e.next===null&&(Tf===null?wf=Tf=e:Tf=Tf.next=e),Df=!0,Ef||(Ef=!0,Lf())}function jf(e,t){if(!Of&&Df){Of=!0;do for(var n=!1,r=wf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ut(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,If(r,a))}else a=G,a=vt(r,r===rd?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||yt(r,a)||(n=!0,If(r,a))}r=r.next}while(n);Of=!1}}function Mf(){Nf()}function Nf(){Df=Ef=!1;var e=0;kf!==0&&yp()&&(e=kf);for(var t=Qe(),n=null,r=wf;r!==null;){var i=r.next,a=Pf(r,t);a===0?(r.next=null,n===null?wf=i:n.next=i,i===null&&(Tf=n)):(n=r,(e!==0||a&3)&&(Df=!0)),r=i}wd!==0&&wd!==5||jf(e,!1),kf!==0&&(kf=0)}function Pf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ut(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=xt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=rd,n=G,n=vt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(id===2||id===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||yt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ye(r),At(n)){case 2:case 8:n=tt;break;case 32:n=nt;break;case 268435456:n=it;break;default:n=nt}return r=Ff.bind(null,e),n=Je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ye(r),e.callbackPriority=2,e.callbackNode=null,2}function Ff(e,t){if(wd!==0&&wd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(mf()&&e.callbackNode!==n)return null;var r=G;return r=vt(e,e===rd?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(zd(e,r,t),Pf(e,Qe()),e.callbackNode!=null&&e.callbackNode===n?Ff.bind(null,e):null)}function If(e,t){if(mf())return null;zd(e,t,!0)}function Lf(){wp(function(){U&6?Je(et,Mf):Nf()})}function Rf(){if(kf===0){var e=Xa;e===0&&(e=mt,mt<<=1,!(mt&261888)&&(mt=256)),kf=e}return kf}function zf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:kn(e)}function Bf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=zf((i[Ft]||null).action),o=r.submitter;o&&(t=(t=o[Ft]||null)?zf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(kf!==0){var e=new FormData(i,o);cc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),cc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Vf=0;Vf<Ei.length;Vf++){var Hf=Ei[Vf];Di(Hf.toLowerCase(),`on`+(Hf[0].toUpperCase()+Hf.slice(1)))}Di(vi,`onAnimationEnd`),Di(yi,`onAnimationIteration`),Di(bi,`onAnimationStart`),Di(`dblclick`,`onDoubleClick`),Di(`focusin`,`onFocus`),Di(`focusout`,`onBlur`),Di(xi,`onTransitionRun`),Di(Si,`onTransitionStart`),Di(Ci,`onTransitionCancel`),Di(wi,`onTransitionEnd`),$t(`onMouseEnter`,[`mouseout`,`mouseover`]),$t(`onMouseLeave`,[`mouseout`,`mouseover`]),$t(`onPointerEnter`,[`pointerout`,`pointerover`]),$t(`onPointerLeave`,[`pointerout`,`pointerover`]),Qt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Qt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Qt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Qt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Uf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Wf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Uf));function Gf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}}}}function J(e,t){var n=t[Lt];n===void 0&&(n=t[Lt]=new Set);var r=e+`__bubble`;n.has(r)||(Yf(t,e,2,!1),n.add(r))}function Kf(e,t,n){var r=0;t&&(r|=4),Yf(n,e,r,t)}var qf=`_reactListening`+Math.random().toString(36).slice(2);function Jf(e){if(!e[qf]){e[qf]=!0,Xt.forEach(function(t){t!==`selectionchange`&&(Wf.has(t)||Kf(t,!1,e),Kf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qf]||(t[qf]=!0,Kf(`selectionchange`,!1,t))}}function Yf(e,t,n,r){switch(Dh(t)){case 2:var i=xh;break;case 8:i=Sh;break;default:i=Ch}n=i.bind(null,t,n,e),i=void 0,!Bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Xf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Ln(function(){var r=a,i=Mn(n),s=[];a:{var c=Ti.get(e);if(c!==void 0){var l=Zn,u=e;switch(e){case`keypress`:if(Kn(n)===0)break a;case`keydown`:case`keyup`:l=hr;break;case`focusin`:u=`focus`,l=or;break;case`focusout`:u=`blur`,l=or;break;case`beforeblur`:case`afterblur`:l=or;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=ir;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=ar;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=vr;break;case vi:case yi:case bi:l=sr;break;case wi:l=yr;break;case`scroll`:case`scrollend`:l=$n;break;case`wheel`:l=br;break;case`copy`:case`cut`:case`paste`:l=cr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=gr;break;case`submit`:l=_r;break;case`toggle`:case`beforetoggle`:l=xr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Rn(m,p),g!=null&&d.push(Zf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==jn&&(u=n.relatedTarget||n.fromElement)&&(Wt(u)||u[It]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Wt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=ir,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=gr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Kt(c),h=l==null?u:Kt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Wt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?re(c,l,$f):null,c!==null&&ep(s,u,c,d,!1),l!==null&&f!==null&&ep(s,f,l,d,!0)))}a:{if(c=r?Kt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Vr;else if(Fr(c)){if(Hr)_=Zr;else{_=Yr;var v=Jr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&En(r.elementType)&&(_=Vr):_=Xr;if(_&&=_(e,r)){Ir(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Kt(r):window,e){case`focusin`:(Fr(v)||v.contentEditable===`true`)&&(ci=v,li=r,ui=null);break;case`focusout`:ui=li=ci=null;break;case`mousedown`:di=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:di=!1,fi(s,n,i);break;case`selectionchange`:if(si)break;case`keydown`:case`keyup`:fi(s,n,i)}var y;if(Cr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else jr?kr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Er&&n.locale!==`ko`&&(jr||b!==`onCompositionStart`?b===`onCompositionEnd`&&jr&&(y=Gn()):(Hn=i,Un=`value`in Hn?Hn.value:Hn.textContent,jr=!0)),v=Qf(r,b),0<v.length&&(b=new lr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Ar(n),y!==null&&(b.data=y)))),(y=Tr?Mr(e,n):Nr(e,n))&&(b=Qf(r,`onBeforeInput`),0<b.length&&(v=new lr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Bf(s,e,r,n,i)}Gf(s,t)})}function Zf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Rn(e,n),i!=null&&r.unshift(Zf(e,i,a)),i=Rn(e,t),i!=null&&r.push(Zf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function $f(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ep(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Rn(n,a),l!=null&&o.unshift(Zf(n,l,c))):i||(l=Rn(n,a),l!=null&&o.push(Zf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function rp(e){return(typeof e==`string`?e:``+e).replace(tp,`
`).replace(np,``)}function ip(e,t){return t=rp(t),rp(e)===t}function Y(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&Sn(e,``+r);else return;break;case`className`:sn(e,`class`,r);break;case`tabIndex`:sn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:sn(e,n,r);break;case`style`:Tn(e,r,o);return;case`data`:if(t!==`object`){sn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Y(e,t,`name`,a.name,a,null),Y(e,t,`formEncType`,a.formEncType,a,null),Y(e,t,`formMethod`,a.formMethod,a,null),Y(e,t,`formTarget`,a.formTarget,a,null)):(Y(e,t,`encType`,a.encType,a,null),Y(e,t,`method`,a.method,a,null),Y(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=An);return;case`onScroll`:r!=null&&J(`scroll`,e);return;case`onScrollEnd`:r!=null&&J(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=kn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:J(`beforetoggle`,e),J(`toggle`,e),on(e,`popover`,r);break;case`xlinkActuate`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:on(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Dn.get(n)||n,on(e,n,r);else return}D=!0}function ap(e,t,n,r,a,o){switch(n){case`style`:Tn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)Sn(e,``+r);else return;break;case`onScroll`:r!=null&&J(`scroll`,e);return;case`onScrollEnd`:r!=null&&J(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=An);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Ft]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}D=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):on(e,n,r)}return}D=!0}function op(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:J(`error`,e),J(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Y(e,t,o,s,n,null)}}a&&Y(e,t,`srcSet`,n.srcSet,n,null),r&&Y(e,t,`src`,n.src,n,null);return;case`input`:J(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Y(e,t,r,d,n,null)}}_n(e,o,c,l,u,s,a,!1);return;case`select`:for(a in J(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Y(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&yn(e,!!r,n,!0):yn(e,!!r,t,!1);return;case`textarea`:for(s in J(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Y(e,t,s,c,n,null)}xn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Y(e,t,l,r,n,null)}return;case`dialog`:J(`beforetoggle`,e),J(`toggle`,e),J(`cancel`,e),J(`close`,e);break;case`iframe`:case`object`:J(`load`,e);break;case`video`:case`audio`:for(r=0;r<Uf.length;r++)J(Uf[r],e);break;case`image`:J(`error`,e),J(`load`,e);break;case`details`:J(`toggle`,e);break;case`embed`:case`source`:case`link`:J(`error`,e),J(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Y(e,t,u,r,n,null)}return;default:if(En(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ap(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Y(e,t,c,r,n,null))}var sp={};function cp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Y(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(D=!0),o=m;break;case`name`:m!==f&&(D=!0),a=m;break;case`checked`:m!==f&&(D=!0),u=m;break;case`defaultChecked`:m!==f&&(D=!0),d=m;break;case`value`:m!==f&&(D=!0),s=m;break;case`defaultValue`:m!==f&&(D=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Y(e,t,p,m,r,f)}}gn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Y(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(D=!0),p=o;break;case`defaultValue`:o!==l&&(D=!0),c=o;break;case`multiple`:o!==l&&(D=!0),s=o;default:o!==l&&Y(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?yn(e,!!n,n?[]:``,!1):yn(e,!!n,t,!0)):yn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Y(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(D=!0),p=a;break;case`defaultValue`:a!==o&&(D=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Y(e,t,s,a,r,o)}bn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Y(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(D=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Y(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Y(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Y(e,t,u,p,r,m)}return;default:if(En(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ap(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ap(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Y(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Y(e,t,f,p,r,m)}function lp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function up(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&lp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&lp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var dp=null,fp=null;function pp(e){return e.nodeType===9?e:e.ownerDocument}function mp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function hp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function gp(e,t,n,r){return n=pp(n).createElement(e),n[Pt]=r,n[Ft]=t,op(n,e,t),Jt(n),n}function _p(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vp=null;function yp(){var e=window.event;return e&&e.type===`popstate`?e!==vp&&(vp=e,!0):(vp=null,!1)}var bp=typeof setTimeout==`function`?setTimeout:void 0,xp=typeof clearTimeout==`function`?clearTimeout:void 0,Sp=typeof Promise==`function`?Promise:void 0,Cp=typeof requestAnimationFrame==`function`?requestAnimationFrame:bp,wp=typeof queueMicrotask==`function`?queueMicrotask:Sp===void 0?bp:function(e){return Sp.resolve(null).then(e).catch(Tp)};function Tp(e){setTimeout(function(){throw e})}function Ep(e){return e===`head`}function Dp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Kh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)xm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,xm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&xm(e.ownerDocument.body)}n=i}while(n);Kh(t)}function Op(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function kp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ap(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function jp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Mp(e){return jp(e.getBoundingClientRect(),getComputedStyle(e),e)}function Np(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return jp(t,n,e)}function Pp(e){return e.documentElement.clientHeight}function Fp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Ip(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Pp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=eh(f),u>rh){s.length=o;break}f=new Promise(Fp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Lp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Lp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:C({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Lp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Lp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Rp(e){return{name:e,group:new Lp(`group`,e),imagePair:new Lp(`image-pair`,e),old:new Lp(`old`,e),new:new Lp(`new`,e)}}function zp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}zp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Wp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Hp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Bp,e,s,r)}this._eventListeners=a}};function Bp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}zp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Wp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Hp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Vp,e,n,i),r.splice(t,1),a!==null&&a()}};function Vp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Hp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Up(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Wp(e,t,n,r){if(e.length===0)return-1;r=Up(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Up(a.optionsOrUseCapture)===r)return i}return-1}zp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Hp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Hp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},zp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Gp,e,void 0,void 0)};function Gp(e,t){return e.tag!==6&&(e=b(e),_m(e,t))}zp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Kp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Gp(t[n],e);n--);};function Kp(e,t){return t.push(e),!1}zp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=pp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,qp,e,void 0,void 0))};function qp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}zp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Jp,e,void 0,void 0)};function Jp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}zp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0);for(var n=t=0;n<Xp.length;n++){var r=Xp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Xp[t++]=r}Xp.length=t}};function Yp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Xp=[],Zp=!1;function Qp(e,t,n){Xp.push({fragmentInstance:e,observer:t,instance:n}),Zp||(Zp=!0,vm(function(){Zp=!1;var e=Xp;Xp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}zp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,$p,e,void 0,void 0),e};function $p(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}zp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},zp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Kp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||em(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function em(e,t,n,r,i){var a=Wt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=re(n,a,S),t===null?t=!1:(h(t,!0,te,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=re(r,a,S),t===null?t=!1:(h(t,!0,ne,a,r),a=ee,x=ee=null,t=a!==null)),t):!1}function tm(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}zp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Kp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),tm(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),tm(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function nm(e,t){return e=b(e),rm(e,t),!1}function rm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Hp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Xp.length;i++){var a=Xp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Xp[r++]=a)}Xp.length=r,n.observe(e)}),rm(e,t))}function am(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Hp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Qp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function om(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:om(n),Ut(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function sm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=pm(e.nextSibling),e===null)break}return null}function cm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=pm(e.nextSibling),e===null))return null;return e}function lm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=pm(e.nextSibling),e===null))return null;return e}function um(e){return e.data===`$?`||e.data===`$~`}function dm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function fm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function pm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var mm=null;function hm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return pm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function _m(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function vm(e){Cp(function(){Cp(function(t){return e(t)})})}function ym(e,t,n){switch(t=pp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function bm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&Y(e,t,r,null,sp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===An&&(e.onclick=null),Ut(e)}function xm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ut(e)}var Sm=new Map,Cm=new Set;function wm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Tm=E.d;E.d={f:Em,r:Dm,D:Am,C:jm,L:Mm,m:Nm,X:Fm,S:Pm,M:Im};function Em(){var e=Tm.f(),t=Hd();return e||t}function Dm(e){var t=Gt(e);t!==null&&t.tag===5&&t.type===`form`?uc(t):Tm.r(e)}var Om=typeof document>`u`?null:document;function km(e,t,n){var r=Om;if(r&&typeof t==`string`&&t){var i=hn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Cm.has(i)||(Cm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),op(t,`link`,e),Jt(t),r.head.appendChild(t)))}}function Am(e){Tm.D(e),km(`dns-prefetch`,e,null)}function jm(e,t){Tm.C(e,t),km(`preconnect`,e,t)}function Mm(e,t,n){Tm.L(e,t,n);var r=Om;if(r&&e&&t){var i=`link[rel="preload"][as="`+hn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+hn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+hn(n.imageSizes)+`"]`)):i+=`[href="`+hn(e)+`"]`;var a=i;switch(t){case`style`:a=Rm(e);break;case`script`:a=Hm(e)}if(!(Sm.has(a)||(e=C({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Sm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(zm(a))||t===`script`&&r.querySelector(Um(a))))){var o=r.createElement(`link`);op(o,`link`,e),t===`style`&&(o[Ht]=!0,o.onload=o.onerror=function(){Yt(o)}),Jt(o),r.head.appendChild(o)}}}function Nm(e,t){Tm.m(e,t);var n=Om;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+hn(r)+`"][href="`+hn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Hm(e)}if(!Sm.has(a)&&(e=C({rel:`modulepreload`,href:e},t),Sm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Um(a)))return}r=n.createElement(`link`),op(r,`link`,e),Jt(r),n.head.appendChild(r)}}}function Pm(e,t,n){Tm.S(e,t,n);var r=Om;if(r&&e){var i=qt(r).hoistableStyles,a=Rm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(zm(a)))s.loading=5;else{e=C({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Sm.get(a))&&Km(e,n);var c=o=r.createElement(`link`);Jt(c),op(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Gm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Fm(e,t){Tm.X(e,t);var n=Om;if(n&&e){var r=qt(n).hoistableScripts,i=Hm(e),a=r.get(i);a||(a=n.querySelector(Um(i)),a||(e=C({src:e,async:!0},t),(t=Sm.get(i))&&qm(e,t),a=n.createElement(`script`),Jt(a),op(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Im(e,t){Tm.M(e,t);var n=Om;if(n&&e){var r=qt(n).hoistableScripts,i=Hm(e),a=r.get(i);a||(a=n.querySelector(Um(i)),a||(e=C({src:e,async:!0,type:`module`},t),(t=Sm.get(i))&&qm(e,t),a=n.createElement(`script`),Jt(a),op(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Lm(e,t,n,r){var a=(a=Pe.current)?wm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Rm(n.href),t=qt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Rm(n.href);var o=qt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(zm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=Sm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sm.set(e,o)),Vm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Hm(n),t=qt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Rm(e){return`href="`+hn(e)+`"`}function zm(e){return`link[rel="stylesheet"][`+e+`]`}function Bm(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Vm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ht]){r.loading=1;return}}else t=e.createElement(`link`),t[Ht]=!0,t.onload=t.onerror=Yt.bind(null,t),op(t,`link`,n),Jt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Hm(e){return`[src="`+hn(e)+`"]`}function Um(e){return`script[async]`+e}function Wm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+hn(n.href)+`"]`);if(r)return t.instance=r,Jt(r),r;var a=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Jt(r),op(r,`style`,a),Gm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Rm(n.href);var o=e.querySelector(zm(a));if(o)return t.state.loading|=4,t.instance=o,Jt(o),o;r=Bm(n),(a=Sm.get(a))&&Km(r,a),o=(e.ownerDocument||e).createElement(`link`),Jt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),op(o,`link`,r),t.state.loading|=4,Gm(o,n.precedence,e),t.instance=o;case`script`:return o=Hm(n.src),(a=e.querySelector(Um(o)))?(t.instance=a,Jt(a),a):(r=n,(a=Sm.get(o))&&(r=C({},n),qm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Jt(a),op(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Gm(r,n.precedence,e));return t.instance}function Gm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Km(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function qm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Jm=null;function Ym(e,t,n){if(Jm===null){var r=new Map,i=Jm=new Map;i.set(n,r)}else i=Jm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Vt]||a[Pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Xm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Zm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Qm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function $m(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function eh(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function th(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=eh(t),e.suspenseyImages.push(t)),e=sh.bind(e),t.decode().then(e,e))}function nh(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Rm(r.href),a=t.querySelector(zm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=oh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Jt(a);return}a=t.ownerDocument||t,r=Bm(r),(i=Sm.get(i))&&Km(r,i),a=a.createElement(`link`),Jt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),op(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=oh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var rh=0;function ih(e,t){return e.stylesheets&&e.count===0&&lh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&rh===0&&(rh=62500*up());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>rh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ah(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)lh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function oh(){this.count--,ah(this)}function sh(){this.imgCount--,ah(this)}var ch=null;function lh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ch=new Map,t.forEach(uh,e),ch=null,oh.call(e))}function uh(e,t){if(!(t.state.loading&4)){var n=ch.get(e);if(n)var r=n.get(null);else{n=new Map,ch.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=oh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var dh={$$typeof:ue,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function fh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function ph(e,t,n,r,i,a,o,s,c,l,u,d){return e=new fh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Wi(3,null,null,t),e.current=a,a.stateNode=e,t=Ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},To(a),e}function mh(e){return e?(e=Hi,e):Hi}function hh(e,t,n,r,i,a){i=mh(i),r.context===null?r.context=i:r.pendingContext=i,r=Do(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Oo(e,r,t),n!==null&&(Rd(n,e,t),ko(n,e,t))}function gh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _h(e,t){gh(e,t),(e=e.alternate)&&gh(e,t)}function vh(e){if(e.tag===13||e.tag===31){var t=zi(e,67108864);t!==null&&Rd(t,e,67108864),_h(e,67108864)}}function yh(e){if(e.tag===13||e.tag===31){var t=Id();t=kt(t);var n=zi(e,t);n!==null&&Rd(n,e,t),_h(e,t)}}var bh=!0;function xh(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,Ch(e,t,n,r)}finally{E.p=a,T.T=i}}function Sh(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,Ch(e,t,n,r)}finally{E.p=a,T.T=i}}function Ch(e,t,n,r){if(bh){var i=wh(r);if(i===null)Xf(e,t,r,Th,n),Ih(e,r);else if(Rh(i,e,t,n,r))r.stopPropagation();else if(Ih(e,r),t&4&&-1<Fh.indexOf(e)){for(;i!==null;){var a=Gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=_t(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ut(o);s.entanglements[1]|=c,o&=~c}Af(a),!(U&6)&&(xd=Qe()+500,jf(0,!1))}}break;case 31:case 13:s=zi(a,2),s!==null&&Rd(s,a,2),Hd(),_h(a,2)}if(a=wh(r),a===null&&Xf(e,t,r,Th,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Xf(e,t,r,null,n)}}function wh(e){return e=Mn(e),Eh(e)}var Th=null;function Eh(e){if(Th=null,e=Wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Th=e,null}function Dh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch($e()){case et:return 2;case tt:return 8;case nt:case rt:return 32;case it:return 268435456;default:return 32}default:return 32}}var Oh=!1,kh=null,Ah=null,jh=null,Mh=new Map,Nh=new Map,Ph=[],Fh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ih(e,t){switch(e){case`focusin`:case`focusout`:kh=null;break;case`dragenter`:case`dragleave`:Ah=null;break;case`mouseover`:case`mouseout`:jh=null;break;case`pointerover`:case`pointerout`:Mh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Nh.delete(t.pointerId)}}function Lh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Gt(t),t!==null&&vh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rh(e,t,n,r,i){switch(t){case`focusin`:return kh=Lh(kh,e,t,n,r,i),!0;case`dragenter`:return Ah=Lh(Ah,e,t,n,r,i),!0;case`mouseover`:return jh=Lh(jh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Mh.set(a,Lh(Mh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Nh.set(a,Lh(Nh.get(a)||null,e,t,n,r,i)),!0}return!1}function zh(e){var t=Wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Mt(e.priority,function(){yh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Mt(e.priority,function(){yh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jn=r,n.target.dispatchEvent(r),jn=null}else return t=Gt(n),t!==null&&vh(t),e.blockedOn=n,!1;t.shift()}return!0}function Vh(e,t,n){Bh(e)&&n.delete(t)}function Hh(){Oh=!1,kh!==null&&Bh(kh)&&(kh=null),Ah!==null&&Bh(Ah)&&(Ah=null),jh!==null&&Bh(jh)&&(jh=null),Mh.forEach(Vh),Nh.forEach(Vh)}function Uh(e,n){e.blockedOn===n&&(e.blockedOn=null,Oh||(Oh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Hh)))}var Wh=null;function Gh(e){Wh!==e&&(Wh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Wh===e&&(Wh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Eh(r||n)===null)continue;break}var a=Gt(n);a!==null&&(e.splice(t,3),t-=3,cc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Kh(e){function t(t){return Uh(t,e)}kh!==null&&Uh(kh,e),Ah!==null&&Uh(Ah,e),jh!==null&&Uh(jh,e),Mh.forEach(t),Nh.forEach(t);for(var n=0;n<Ph.length;n++){var r=Ph[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ph.length&&(n=Ph[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&Ph.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ft]||null;if(typeof a==`function`)o||Gh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ft]||null)s=o.formAction;else if(Eh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Gh(n)}}}function qh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Jh(e){this._internalRoot=e}Yh.prototype.render=Jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;hh(n,Id(),e,t,null,null)},Yh.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hh(e.current,2,null,e,null,null),Hd(),t[It]=null}};function Yh(e){this._internalRoot=e}Yh.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ph.length&&t!==0&&t<Ph[n].priority;n++);Ph.splice(n,0,e),n===0&&zh(e)}};var Xh=n.version;if(Xh!==`19.3.1`)throw Error(i(527,Xh,`19.3.1`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Zh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Qh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qh.isDisabled&&Qh.supportsFiber)try{st=Qh.inject(Zh),ct=Qh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=jc,s=Mc,c=Nc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ph(e,1,!1,null,null,n,r,null,o,s,c,qh),e[It]=t.current,Jf(e),new Jh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=Object.defineProperty,b=(e,t)=>y(e,`name`,{value:t,configurable:!0}),ee=!!(typeof window<`u`&&window.document&&window.document.createElement);function x(e,t,{checkForDefaultPrevented:n=!0}={}){return b(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}b(x,`composeEventHandlers`);function te(e){if(!ee)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}b(te,`getOwnerWindow`);function ne(e){if(!ee)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}b(ne,`getOwnerDocument`);function S(e,t=!1){let{activeElement:n}=ne(e);if(!n?.nodeName)return null;if(re(n)&&n.contentDocument)return S(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=ne(n).getElementById(e);if(t)return t}}return n}b(S,`getActiveElement`);function re(e){return e.tagName===`IFRAME`}b(re,`isFrame`);var C=Object.defineProperty,ie=(e,t)=>C(e,`name`,{value:t,configurable:!0});function ae(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}ie(ae,`setRef`);function oe(...e){return t=>{let n=!1,r=e.map(e=>{let r=ae(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ae(e[t],null)}}}}ie(oe,`composeRefs`);function se(...e){return _.useCallback(oe(...e),e)}ie(se,`useComposedRefs`);var ce=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),w=o(((e,t)=>{t.exports=ce()}))(),le=Object.defineProperty,ue=(e,t)=>le(e,`name`,{value:t,configurable:!0});function de(e,t){let n=_.createContext(t);n.displayName=e+`Context`;let r=ue(e=>{let{children:t,...r}=e,i=_.useMemo(()=>r,Object.values(r));return(0,w.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=_.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return ue(i,`useContext`),[r,i]}ue(de,`createContext`);function fe(e,t=[]){let n=[];function r(t,r){let i=_.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=ue(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=_.useMemo(()=>o,Object.values(o));return(0,w.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=_.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return ue(s,`useContext`),[o,s]}ue(r,`createContext`);let i=ue(()=>{let t=n.map(e=>_.createContext(e));return ue(function(n){let r=n?.[e]||t;return _.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,pe(i,...t)]}ue(fe,`createContextScope`);function pe(...e){let t=e[0];if(e.length===1)return t;let n=ue(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return ue(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return _.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}ue(pe,`composeContextScopes`);var me=globalThis?.document?_.useLayoutEffect:()=>{},he=Object.defineProperty,ge=(e,t)=>he(e,`name`,{value:t,configurable:!0}),_e=_.useId||(()=>void 0),ve=0;function ye(e){let[t,n]=_.useState(_e());return me(()=>{e||n(e=>e??String(ve++))},[e]),e||(t?`radix-${t}`:``)}ge(ye,`useId`);var be=Object.defineProperty,xe=(e,t)=>be(e,`name`,{value:t,configurable:!0}),Se=_.useEffectEvent,Ce=_.useInsertionEffect;function we(e){if(typeof Se==`function`)return Se(e);let t=_.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof Ce==`function`?Ce(()=>{t.current=e}):me(()=>{t.current=e}),_.useMemo(()=>((...e)=>t.current?.(...e)),[])}xe(we,`useEffectEvent`);var Te=Object.defineProperty,T=(e,t)=>Te(e,`name`,{value:t,configurable:!0}),E=_.useInsertionEffect||me;function Ee({prop:e,defaultProp:t,onChange:n=T(()=>{},`onChange`),caller:r}){let[i,a,o]=De({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,_.useCallback(t=>{if(s){let n=Oe(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}T(Ee,`useControllableState`);function De({defaultProp:e,onChange:t}){let[n,r]=_.useState(e),i=_.useRef(n),a=_.useRef(t);return E(()=>{a.current=t},[t]),_.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}T(De,`useUncontrolledState`);function Oe(e){return typeof e==`function`}T(Oe,`isFunction`);var ke=Symbol(`RADIX:SYNC_STATE`);function Ae(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=we(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=_.useReducer((t,n)=>{if(n.type===ke)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=_.useRef(p);_.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=_.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return _.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:ke,state:i})},[i,d.state,c]),[h,f]}T(Ae,`useControllableStateReducer`);var je=c(m(),1),Me=Object.defineProperty,Ne=(e,t)=>Me(e,`name`,{value:t,configurable:!0});function Pe(e){let t=_.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];r=We(r),_.Children.forEach(r,e=>{if(Be(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;for(;He(n)&&typeof Je==`function`;)n=Je(n._payload);a=Le(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=_.cloneElement(a,void 0,s):!o&&_.Children.count(r)===1&&_.isValidElement(r)&&(a=r);let c=a?ze(a):void 0,l=se(n,c);if(!a){if(r||r===0)throw Error(o?qe(e):Ke(e));return r}let u=Re(i,a.props??{});return a.type!==_.Fragment&&(u.ref=n?l:c),_.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}Ne(Pe,`createSlot`);var Fe=Symbol.for(`radix.slottable`);function Ie(e){let t=Ne(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=Fe,t}Ne(Ie,`createSlottable`);var Le=Ne((e,t)=>`child`in e.props?_.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null:_.isValidElement(t)?t:null,`getSlottableElementFromSlottable`);function Re(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=Ge(a,i))}return{...e,...n}}Ne(Re,`mergeProps`);function ze(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Ne(ze,`getElementRef`);function Be(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Fe}Ne(Be,`isSlottable`);var Ve=Symbol.for(`react.lazy`);function He(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ve&&`_payload`in e&&Ue(e._payload)}Ne(He,`isLazyComponent`);function Ue(e){return typeof e==`object`&&!!e&&`then`in e}Ne(Ue,`isPromiseLike`);function We(e){let t=e;for(;He(t)&&typeof Je==`function`;)t=Je(t._payload);return t}Ne(We,`useUnwrappedLazy`);function Ge(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}Ne(Ge,`concatAriaDescribedby`);var Ke=Ne(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),qe=Ne(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Je=_.use,Ye=Object.defineProperty,Xe=(e,t)=>Ye(e,`name`,{value:t,configurable:!0}),Ze=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=Pe(`Primitive.${t}`),r=_.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,w.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Qe(e,t){e&&je.flushSync(()=>e.dispatchEvent(t))}Xe(Qe,`dispatchDiscreteCustomEvent`);var $e=Object.defineProperty,et=(e,t)=>$e(e,`name`,{value:t,configurable:!0}),tt=_.useInsertionEffect;function nt(e){let t=_.useRef(e);return typeof tt==`function`?tt(()=>{t.current=e}):me(()=>{t.current=e}),_.useMemo(()=>((...e)=>t.current?.(...e)),[])}et(nt,`useCallbackRef`);var rt=Object.defineProperty,it=(e,t)=>rt(e,`name`,{value:t,configurable:!0}),at=`dismissableLayer.update`,ot=`dismissableLayer.pointerDownOutside`,st=`dismissableLayer.focusOutside`,ct,lt=_.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ut=_.forwardRef(it(function(e,t){let{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:c,...l}=e,u=_.useContext(lt),[d,f]=_.useState(null),p=d?.ownerDocument??globalThis?.document,[,m]=_.useState({}),h=se(t,f),g=Array.from(u.layers),[v]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=v?g.indexOf(v):-1,b=d?g.indexOf(d):-1,ee=u.layersWithOutsidePointerEventsDisabled.size>0,te=b>=y,ne=_.useRef(!1),S=pt(e=>{a?.(e),s?.(e),e.defaultPrevented||c?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:ne,dismissableSurfaces:u.dismissableSurfaces,shouldHandlePointerDownOutside:_.useCallback(e=>{if(!(e instanceof Node))return!1;let t=[...u.branches].some(t=>t.contains(e));return te&&!t},[u.branches,te])}),re=mt(e=>{if(r&&ne.current)return;let t=e.target;[...u.branches].some(e=>e.contains(t))||(o?.(e),s?.(e),e.defaultPrevented||c?.())},p),C=d?b===g.length-1:!1,ie=nt(e=>{e.key===`Escape`&&(i?.(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))});return _.useEffect(()=>{if(C)return p.addEventListener(`keydown`,ie,{capture:!0}),()=>p.removeEventListener(`keydown`,ie,{capture:!0})},[p,C,ie]),_.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(ct=p.body.style.pointerEvents,p.body.style.pointerEvents=`none`),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ht(),()=>{n&&(u.layersWithOutsidePointerEventsDisabled.delete(d),u.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=ct))}},[d,p,n,u]),_.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ht())},[d,u]),_.useEffect(()=>{let e=it(()=>m({}),`handleUpdate`);return document.addEventListener(at,e),()=>document.removeEventListener(at,e)},[]),(0,w.jsx)(Ze.div,{...l,ref:h,style:{pointerEvents:ee?te?`auto`:`none`:void 0,...e.style},onFocusCapture:x(e.onFocusCapture,re.onFocusCapture),onBlurCapture:x(e.onBlurCapture,re.onBlurCapture),onPointerDownCapture:x(e.onPointerDownCapture,S.onPointerDownCapture)})},`DismissableLayer`));function dt(){let e=_.useContext(lt),[t,n]=_.useState(null);return _.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}it(dt,`useDismissableLayerSurface`);var ft=it(()=>!0,`IS_TRUE`);function pt(e,t){let{ownerDocument:n=globalThis?.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:i,dismissableSurfaces:a,shouldHandlePointerDownOutside:o=ft}=t,s=nt(e),c=_.useRef(!1),l=_.useRef(!1),u=_.useRef(new Map),d=_.useRef(()=>{});return _.useEffect(()=>{function e(){l.current=!1,i.current=!1,u.current.clear()}it(e,`resetOutsideInteraction`);function t(){return Array.from(u.current.values()).some(Boolean)}it(t,`isOutsideInteractionIntercepted`);function f(e){if(!l.current)return;let t=e.target;t instanceof Node&&[...a].some(e=>e.contains(t))||u.current.set(e.type,!0),e.type===`click`&&window.setTimeout(()=>{l.current&&d.current()},0)}it(f,`handleInteractionCapture`);function p(e){l.current&&u.current.set(e.type,!1)}it(p,`handleInteractionBubble`);let m=it(a=>{if(a.target&&!c.current){let f=function(){n.removeEventListener(`click`,d.current);let r=t();e(),r||gt(ot,s,p,{discrete:!0})};if(it(f,`handleAndDispatchPointerDownOutsideEvent`),!o(a.target)){n.removeEventListener(`click`,d.current),e(),c.current=!1;return}let p={originalEvent:a};l.current=!0,i.current=r&&a.button===0,u.current.clear(),!r||a.button!==0?f():(n.removeEventListener(`click`,d.current),d.current=f,n.addEventListener(`click`,d.current,{once:!0}))}else n.removeEventListener(`click`,d.current),e();c.current=!1},`handlePointerDown`),h=[`pointerup`,`mousedown`,`mouseup`,`touchstart`,`touchend`,`click`];for(let e of h)n.addEventListener(e,f,!0),n.addEventListener(e,p);let g=window.setTimeout(()=>{n.addEventListener(`pointerdown`,m)},0);return()=>{window.clearTimeout(g),n.removeEventListener(`pointerdown`,m),n.removeEventListener(`click`,d.current);for(let e of h)n.removeEventListener(e,f,!0),n.removeEventListener(e,p)}},[n,s,r,i,a,o]),{onPointerDownCapture:it(()=>c.current=!0,`onPointerDownCapture`)}}it(pt,`usePointerDownOutside`);function mt(e,t=globalThis?.document){let n=nt(e),r=_.useRef(!1);return _.useEffect(()=>{let e=it(e=>{e.target&&!r.current&&gt(st,n,{originalEvent:e},{discrete:!1})},`handleFocus`);return t.addEventListener(`focusin`,e),()=>t.removeEventListener(`focusin`,e)},[t,n]),{onFocusCapture:it(()=>r.current=!0,`onFocusCapture`),onBlurCapture:it(()=>r.current=!1,`onBlurCapture`)}}it(mt,`useFocusOutside`);function ht(){let e=new CustomEvent(at);document.dispatchEvent(e)}it(ht,`dispatchUpdate`);function gt(e,t,n,{discrete:r}){let i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Qe(i,a):i.dispatchEvent(a)}it(gt,`handleAndDispatchCustomEvent`);var _t=Object.defineProperty,vt=(e,t)=>_t(e,`name`,{value:t,configurable:!0}),yt=`focusScope.autoFocusOnMount`,bt=`focusScope.autoFocusOnUnmount`,xt={bubbles:!1,cancelable:!0},St=_.forwardRef(vt(function(e,t){let{loop:n=!1,trapped:r=!1,branches:i,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[c,l]=_.useState(null),u=nt(a),d=nt(o),f=_.useRef(null),p=se(t,l),m=_.useRef(i);_.useEffect(()=>{m.current=i});let h=_.useCallback(e=>e?c?.contains(e)?!0:!!m.current?.some(t=>t.contains(e)):!1,[c]),g=_.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;_.useEffect(()=>{if(r){let e=function(e){if(g.paused||!c)return;let t=e.target;h(t)?f.current=t:Nt(f.current,{select:!0})},t=function(e){if(g.paused||!c)return;let t=e.relatedTarget;t!==null&&(h(t)||Nt(f.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&Nt(c)};vt(e,`handleFocusIn`),vt(t,`handleFocusOut`),vt(n,`handleMutations`),document.addEventListener(`focusin`,e),document.addEventListener(`focusout`,t);let r=new MutationObserver(n);return c&&r.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener(`focusin`,e),document.removeEventListener(`focusout`,t),r.disconnect()}}},[r,c,g.paused,h]),_.useEffect(()=>{if(c){Pt.add(g);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(yt,xt);c.addEventListener(yt,u),c.dispatchEvent(t),t.defaultPrevented||(Dt(Lt(kt(c)),{select:!0}),document.activeElement===e&&Nt(c))}return()=>{c.removeEventListener(yt,u);let t=c.ownerDocument,n=CustomEvent;setTimeout(()=>{let r=new n(bt,xt);c.addEventListener(bt,d),c.dispatchEvent(r),r.defaultPrevented||Nt(e??t.body,{select:!0}),c.removeEventListener(bt,d),Pt.remove(g)},0)}}},[c,u,d,g]);let v=_.useCallback(e=>{if(!n&&!r||g.paused)return;let t=e.key===`Tab`&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){let t=e.currentTarget,[r,a]=Ot(t);r&&a?!e.shiftKey&&i===a?(e.preventDefault(),n&&Nt(r,{select:!0})):e.shiftKey&&i===r&&(e.preventDefault(),n&&Nt(a,{select:!0})):i===t&&e.preventDefault()}},[n,r,g.paused]);return(0,w.jsx)(Ze.div,{tabIndex:-1,...s,ref:p,onKeyDown:v})},`FocusScope`)),Ct=_.createContext(null);function wt({registry:e,children:t}){return e?(0,w.jsx)(Ct.Provider,{value:e,children:t}):t}vt(wt,`FocusScopeBranchProvider`);function Tt(){let[e,t]=_.useState([]);return{nodes:e,registry:_.useMemo(()=>({add:vt(e=>t(t=>t.includes(e)?t:[...t,e]),`add`),remove:vt(e=>t(t=>t.filter(t=>t!==e)),`remove`)}),[])}}vt(Tt,`useFocusScopeBranchRegistry`);function Et(e){let t=_.useContext(Ct);_.useEffect(()=>{if(e&&t)return t.add(e),()=>t.remove(e)},[e,t])}vt(Et,`useFocusScopeBranch`);function Dt(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(Nt(r,{select:t}),document.activeElement!==n)return}vt(Dt,`focusFirst`);function Ot(e){let t=kt(e);return[At(t,e),At(t.reverse(),e)]}vt(Ot,`getTabbableEdges`);function kt(e){let t=[],n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:vt(e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},`acceptNode`)});for(;n.nextNode();)t.push(n.currentNode);return t}vt(kt,`getTabbableCandidates`);function At(e,t){let n=typeof t.checkVisibility==`function`&&t.checkVisibility({checkVisibilityCSS:!0});for(let r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):jt(r,{upTo:t})))return r}vt(At,`findVisible`);function jt(e,{upTo:t}){if(getComputedStyle(e).visibility===`hidden`)return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display===`none`)return!0;e=e.parentElement}return!1}vt(jt,`isHidden`);function Mt(e){return e.tagName===`INPUT`&&typeof e.select==`function`}vt(Mt,`isSelectableInput`);function Nt(e,{select:t=!1}={}){if(e&&e.focus){let n=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==n&&Mt(e)&&t&&e.select()}}vt(Nt,`focus`);var Pt=Ft();function Ft(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),e=It(e,t),e.unshift(t)},remove(t){e=It(e,t),e[0]?.resume()}}}vt(Ft,`createFocusScopesStack`);function It(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}vt(It,`arrayRemove`);function Lt(e){return e.filter(e=>e.tagName!==`A`)}vt(Lt,`removeLinks`);var Rt=Object.defineProperty,zt=_.forwardRef(((e,t)=>Rt(e,`name`,{value:t,configurable:!0}))(function(e,t){let{container:n,...r}=e,[i,a]=_.useState(!1);me(()=>a(!0),[]);let o=n||i&&globalThis?.document?.body;return o?je.createPortal((0,w.jsx)(Ze.div,{...r,ref:t}),o):null},`Portal`)),Bt=Object.defineProperty,Vt=(e,t)=>Bt(e,`name`,{value:t,configurable:!0});function Ht(e,t){return _.useReducer((e,n)=>t[e][n]??e,e)}Vt(Ht,`useStateMachine`);var Ut=Vt(e=>{let{present:t,children:n}=e,r=Wt(t),i=typeof n==`function`?n({present:r.isPresent}):_.Children.only(n),a=Kt(r.ref,Jt(i));return typeof n==`function`||r.isPresent?_.cloneElement(i,{ref:a}):null},`Presence`);function Wt(e){let[t,n]=_.useState(),r=_.useRef(null),i=_.useRef(e),a=_.useRef(`none`),o=_.useRef(void 0),[s,c]=Ht(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return _.useEffect(()=>{s===`mounted`?(a.current=o.current??qt(r.current),o.current=void 0):a.current=`none`},[s]),me(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,s=qt(t);e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),me(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=Vt(a=>{let o=qt(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},`handleAnimationEnd`),s=Vt(e=>{e.target===t&&(a.current=qt(r.current))},`handleAnimationStart`);return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:_.useCallback(e=>{if(e){let t=getComputedStyle(e);r.current=t,o.current=qt(t)}else r.current=null;n(e)},[])}}Vt(Wt,`usePresence`);function Gt(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Vt(Gt,`setRef`);function Kt(...e){let t=_.useRef(e);return t.current=e,_.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=Gt(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():Gt(n[e],null)}}},[])}Vt(Kt,`useStableComposedRefs`);function qt(e){return e?.animationName||`none`}Vt(qt,`getAnimationName`);function Jt(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Vt(Jt,`getElementRef`);var Yt=Object.defineProperty,Xt=(e,t)=>Yt(e,`name`,{value:t,configurable:!0}),Zt=0,Qt=null;function $t(e){return en(),e.children}Xt($t,`FocusGuards`);function en(){_.useEffect(()=>{Qt||={start:tn(),end:tn()};let{start:e,end:t}=Qt;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement(`afterbegin`,e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement(`beforeend`,t),Zt++,()=>{Zt===1&&(Qt?.start.remove(),Qt?.end.remove(),Qt=null),Zt=Math.max(0,Zt-1)}},[])}Xt(en,`useFocusGuards`);function tn(){let e=document.createElement(`span`);return e.setAttribute(`data-radix-focus-guard`,``),e.tabIndex=0,e.style.outline=`none`,e.style.opacity=`0`,e.style.position=`fixed`,e.style.pointerEvents=`none`,e}Xt(tn,`createFocusGuard`);var nn=function(){return nn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},nn.apply(this,arguments)};function rn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function D(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var an=`right-scroll-bar-position`,on=`width-before-scroll-bar`,sn=`with-scroll-bars-hidden`,cn=`--removed-body-scroll-bar-size`;function ln(e,t){return typeof e==`function`?e(t):e&&(e.current=t),e}function un(e,t){var n=(0,_.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}})[0];return n.callback=t,n.facade}var dn=typeof window<`u`?_.useLayoutEffect:_.useEffect,fn=new WeakMap;function pn(e,t){var n=un(t||null,function(t){return e.forEach(function(e){return ln(e,t)})});return dn(function(){var t=fn.get(n);if(t){var r=new Set(t),i=new Set(e),a=n.current;r.forEach(function(e){i.has(e)||ln(e,null)}),i.forEach(function(e){r.has(e)||ln(e,a)})}fn.set(n,e)},[e]),n}function mn(e){return e}function hn(e,t){t===void 0&&(t=mn);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var i=t(e,r);return n.push(i),function(){n=n.filter(function(e){return e!==i})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var i=n;n=[],i.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(a)};o(),n={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),n}}}}}function gn(e){e===void 0&&(e={});var t=hn(null);return t.options=nn({async:!0,ssr:!1},e),t}var _n=function(e){var t=e.sideCar,n=rn(e,[`sideCar`]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error(`Sidecar medium not found`);return _.createElement(r,nn({},n))};_n.isSideCarExport=!0;function vn(e,t){return e.useMedium(t),_n}var yn=gn(),bn=function(){},xn=_.forwardRef(function(e,t){var n=_.useRef(null),r=_.useState({onScrollCapture:bn,onWheelCapture:bn,onTouchMoveCapture:bn}),i=r[0],a=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,m=e.noIsolation,h=e.inert,g=e.allowPinchZoom,v=e.as,y=v===void 0?`div`:v,b=e.gapMode,ee=rn(e,[`forwardProps`,`children`,`className`,`removeScrollBar`,`enabled`,`shards`,`sideCar`,`noRelative`,`noIsolation`,`inert`,`allowPinchZoom`,`as`,`gapMode`]),x=f,te=pn([n,t]),ne=nn(nn({},ee),i);return _.createElement(_.Fragment,null,u&&_.createElement(x,{sideCar:yn,removeScrollBar:l,shards:d,noRelative:p,noIsolation:m,inert:h,setCallbacks:a,allowPinchZoom:!!g,lockRef:n,gapMode:b}),o?_.cloneElement(_.Children.only(s),nn(nn({},ne),{ref:te})):_.createElement(y,nn({},ne,{className:c,ref:te}),s))});xn.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},xn.classNames={fullWidth:on,zeroRight:an};var Sn=function(){if(typeof __webpack_nonce__<`u`)return __webpack_nonce__};function Cn(){if(!document)return null;var e=document.createElement(`style`);e.type=`text/css`;var t=Sn();return t&&e.setAttribute(`nonce`,t),e}function wn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Tn(e){(document.head||document.getElementsByTagName(`head`)[0]).appendChild(e)}var En=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Cn())&&(wn(t,n),Tn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Dn=function(){var e=En();return function(t,n){_.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},On=function(){var e=Dn();return function(t){var n=t.styles,r=t.dynamic;return e(n,r),null}},kn={left:0,top:0,right:0,gap:0},An=function(e){return parseInt(e||``,10)||0},jn=function(e){var t=window.getComputedStyle(document.body),n=t[e===`padding`?`paddingLeft`:`marginLeft`],r=t[e===`padding`?`paddingTop`:`marginTop`],i=t[e===`padding`?`paddingRight`:`marginRight`];return[An(n),An(r),An(i)]},Mn=function(e){if(e===void 0&&(e=`margin`),typeof window>`u`)return kn;var t=jn(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Nn=On(),Pn=`data-scroll-locked`,Fn=function(e,t,n,r){var i=e.left,a=e.top,o=e.right,s=e.gap;return n===void 0&&(n=`margin`),`
  .${sn} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Pn}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t&&`position: relative ${r};`,n===`margin`&&`
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,n===`padding`&&`padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${an} {
    right: ${s}px ${r};
  }
  
  .${on} {
    margin-right: ${s}px ${r};
  }
  
  .${an} .${an} {
    right: 0 ${r};
  }
  
  .${on} .${on} {
    margin-right: 0 ${r};
  }
  
  body[${Pn}] {
    ${cn}: ${s}px;
  }
`},In=function(){var e=parseInt(document.body.getAttribute(`data-scroll-locked`)||`0`,10);return isFinite(e)?e:0},Ln=function(){_.useEffect(function(){return document.body.setAttribute(Pn,(In()+1).toString()),function(){var e=In()-1;e<=0?document.body.removeAttribute(Pn):document.body.setAttribute(Pn,e.toString())}},[])},Rn=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?`margin`:r;Ln();var a=_.useMemo(function(){return Mn(i)},[i]);return _.createElement(Nn,{styles:Fn(a,!t,i,n?``:`!important`)})},zn=!1;if(typeof window<`u`)try{var Bn=Object.defineProperty({},"passive",{get:function(){return zn=!0,!0}});window.addEventListener(`test`,Bn,Bn),window.removeEventListener(`test`,Bn,Bn)}catch{zn=!1}var Vn=zn?{passive:!1}:!1,Hn=function(e){return e.tagName===`TEXTAREA`},Un=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!==`hidden`&&!(n.overflowY===n.overflowX&&!Hn(e)&&n[t]===`visible`)},Wn=function(e){return Un(e,`overflowY`)},Gn=function(e){return Un(e,`overflowX`)},Kn=function(e,t){var n=t.ownerDocument,r=t;do{if(typeof ShadowRoot<`u`&&r instanceof ShadowRoot&&(r=r.host),Yn(e,r)){var i=Xn(e,r);if(i[1]>i[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},qn=function(e){return[e.scrollTop,e.scrollHeight,e.clientHeight]},Jn=function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]},Yn=function(e,t){return e===`v`?Wn(t):Gn(t)},Xn=function(e,t){return e===`v`?qn(t):Jn(t)},Zn=function(e,t){return e===`h`&&t===`rtl`?-1:1},Qn=function(e,t,n,r,i){var a=Zn(e,window.getComputedStyle(t).direction),o=a*r,s=n.target,c=t.contains(s),l=!1,u=o>0,d=0,f=0;do{if(!s)break;var p=Xn(e,s),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&Yn(e,s)&&(d+=h,f+=m);var g=s.parentNode;s=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(i&&Math.abs(d)<1||!i&&o>d)||!u&&(i&&Math.abs(f)<1||!i&&-o>f))&&(l=!0),l},$n=function(e){return`changedTouches`in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},er=function(e){return[e.deltaX,e.deltaY]},tr=function(e){return e&&`current`in e?e.current:e},nr=function(e,t){return e[0]===t[0]&&e[1]===t[1]},rr=function(e){return`
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`},ir=0,ar=[];function or(e){var t=_.useRef([]),n=_.useRef([0,0]),r=_.useRef(),i=_.useState(ir++)[0],a=_.useState(On)[0],o=_.useRef(e);_.useEffect(function(){o.current=e},[e]),_.useEffect(function(){if(e.inert){document.body.classList.add(`block-interactivity-${i}`);var t=D([e.lockRef.current],(e.shards||[]).map(tr),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add(`allow-interactivity-${i}`)}),function(){document.body.classList.remove(`block-interactivity-${i}`),t.forEach(function(e){return e.classList.remove(`allow-interactivity-${i}`)})}}},[e.inert,e.lockRef.current,e.shards]);var s=_.useCallback(function(e,t){if(`touches`in e&&e.touches.length===2||e.type===`wheel`&&e.ctrlKey)return!o.current.allowPinchZoom;var i=$n(e),a=n.current,s=`deltaX`in e?e.deltaX:a[0]-i[0],c=`deltaY`in e?e.deltaY:a[1]-i[1],l,u=e.target,d=Math.abs(s)>Math.abs(c)?`h`:`v`;if(`touches`in e&&d===`h`&&u.type===`range`)return!1;var f=window.getSelection(),p=f&&f.anchorNode;if(p&&(p===u||p.contains(u)))return!1;var m=Kn(d,u);if(!m)return!0;if(m?l=d:(l=d===`v`?`h`:`v`,m=Kn(d,u)),!m)return!1;if(!r.current&&`changedTouches`in e&&(s||c)&&(r.current=l),!l)return!0;var h=r.current||l;return Qn(h,t,e,h===`h`?s:c,!0)},[]),c=_.useCallback(function(e){var n=e;if(ar.length&&ar[ar.length-1]===a){var r=`deltaY`in n?er(n):$n(n),i=t.current.filter(function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&nr(e.delta,r)})[0];if(i&&i.should)n.cancelable&&n.preventDefault();else if(!i){var c=(o.current.shards||[]).map(tr).filter(Boolean).filter(function(e){return e.contains(n.target)});(c.length>0?s(n,c[0]):!o.current.noIsolation)&&n.cancelable&&n.preventDefault()}}},[]),l=_.useCallback(function(e,n,r,i){var a={name:e,delta:n,target:r,should:i,shadowParent:sr(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),u=_.useCallback(function(e){n.current=$n(e),r.current=void 0},[]),d=_.useCallback(function(t){l(t.type,er(t),t.target,s(t,e.lockRef.current))},[]),f=_.useCallback(function(t){l(t.type,$n(t),t.target,s(t,e.lockRef.current))},[]);_.useEffect(function(){return ar.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener(`wheel`,c,Vn),document.addEventListener(`touchmove`,c,Vn),document.addEventListener(`touchstart`,u,Vn),function(){ar=ar.filter(function(e){return e!==a}),document.removeEventListener(`wheel`,c,Vn),document.removeEventListener(`touchmove`,c,Vn),document.removeEventListener(`touchstart`,u,Vn)}},[]);var p=e.removeScrollBar,m=e.inert;return _.createElement(_.Fragment,null,m?_.createElement(a,{styles:rr(i)}):null,p?_.createElement(Rn,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function sr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var cr=vn(yn,or),lr=_.forwardRef(function(e,t){return _.createElement(xn,nn({},e,{ref:t,sideCar:cr}))});lr.classNames=xn.classNames;var ur=function(e){return typeof document>`u`?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},dr=new WeakMap,fr=new WeakMap,pr={},mr=0,hr=function(e){return e&&(e.host||hr(e.parentNode))},gr=function(e,t){return t.map(function(t){if(e.contains(t))return t;var n=hr(t);return n&&e.contains(n)?n:(console.error(`aria-hidden`,t,`in not contained inside`,e,`. Doing nothing`),null)}).filter(function(e){return!!e})},_r=function(e,t,n,r){var i=gr(t,Array.isArray(e)?e:[e]);pr[n]||(pr[n]=new WeakMap);var a=pr[n],o=[],s=new Set,c=new Set(i),l=function(e){e&&!s.has(e)&&(s.add(e),l(e.parentNode))};i.forEach(l);var u=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(s.has(e))u(e);else try{var t=e.getAttribute(r),i=t!==null&&t!==`false`,c=(dr.get(e)||0)+1,l=(a.get(e)||0)+1;dr.set(e,c),a.set(e,l),o.push(e),c===1&&i&&fr.set(e,!0),l===1&&e.setAttribute(n,`true`),i||e.setAttribute(r,`true`)}catch(t){console.error(`aria-hidden: cannot operate on `,e,t)}})};return u(t),s.clear(),mr++,function(){o.forEach(function(e){var t=dr.get(e)-1,i=a.get(e)-1;dr.set(e,t),a.set(e,i),t||(fr.has(e)||e.removeAttribute(r),fr.delete(e)),i||e.removeAttribute(n)}),mr--,mr||(dr=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr={})}},vr=function(e,t,n){n===void 0&&(n=`data-aria-hidden`);var r=Array.from(Array.isArray(e)?e:[e]),i=t||ur(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll(`[aria-live], script`))),_r(r,i,n,`aria-hidden`)):function(){return null}},yr=Object.defineProperty,br=(e,t)=>yr(e,`name`,{value:t,configurable:!0}),xr=`Dialog`,[Sr,Cr]=fe(xr),[wr,Tr]=Sr(xr),Er=br(e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!0}=e,s=_.useRef(null),c=_.useRef(null),{nodes:l,registry:u}=Tt(),[d,f]=Ee({prop:r,defaultProp:i??!1,onChange:a,caller:xr}),[p,m]=_.useState(0),[h,g]=_.useState(0);return(0,w.jsx)(wr,{scope:t,triggerRef:s,contentRef:c,contentId:ye(),titleId:ye(),descriptionId:ye(),titlePresent:p>0,descriptionPresent:h>0,setTitleCount:m,setDescriptionCount:g,open:d,onOpenChange:f,onOpenToggle:_.useCallback(()=>f(e=>!e),[f]),modal:o,branchNodes:l,branchRegistry:u,children:n})},`Dialog`),Dr=`DialogPortal`,[Or,kr]=Sr(Dr,{forceMount:void 0}),Ar=br(e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=Tr(Dr,t);return(0,w.jsx)(Or,{scope:t,forceMount:n,children:_.Children.map(r,e=>(0,w.jsx)(Ut,{present:n||a.open,children:(0,w.jsx)(zt,{asChild:!0,container:i,children:e})}))})},`DialogPortal`),jr=`DialogOverlay`,Mr=_.forwardRef(br(function(e,t){let n=kr(jr,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=Tr(jr,e.__scopeDialog);return a.modal?(0,w.jsx)(Ut,{present:r||a.open,children:(0,w.jsx)(Pr,{...i,ref:t})}):null},`DialogOverlay`)),Nr=Pe(`DialogOverlay.RemoveScroll`),Pr=_.forwardRef(br(function(e,t){let{__scopeDialog:n,...r}=e,i=Tr(jr,n),a=se(t,dt());return(0,w.jsx)(lr,{as:Nr,allowPinchZoom:!0,shards:_.useMemo(()=>[i.contentRef,...i.branchNodes.map(e=>({current:e}))],[i.contentRef,i.branchNodes]),children:(0,w.jsx)(Ze.div,{"data-state":Gr(i.open),...r,ref:a,style:{pointerEvents:`auto`,...r.style}})})},`DialogOverlayImpl`)),Fr=`DialogContent`,Ir=_.forwardRef(br(function(e,t){let n=kr(Fr,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=Tr(Fr,e.__scopeDialog);return(0,w.jsx)(Ut,{present:r||a.open,children:a.modal?(0,w.jsx)(Lr,{...i,ref:t}):(0,w.jsx)(Rr,{...i,ref:t})})},`DialogContent`)),Lr=_.forwardRef(br(function(e,t){let n=Tr(Fr,e.__scopeDialog),r=_.useRef(null),i=se(t,n.contentRef,r);return _.useEffect(()=>{let e=r.current;if(e)return vr(e)},[]),(0,w.jsx)(zr,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:x(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:x(e.onFocusOutside,e=>e.preventDefault())})},`DialogContentModal`)),Rr=_.forwardRef(br(function(e,t){let n=Tr(Fr,e.__scopeDialog),r=_.useRef(!1),i=_.useRef(!1);return(0,w.jsx)(zr,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`DialogContentNonModal`)),zr=_.forwardRef(br(function(e,t){let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,"aria-describedby":o,children:s,...c}=e,l=Tr(Fr,n);return en(),(0,w.jsx)(wt,{registry:l.branchRegistry,children:(0,w.jsx)(St,{asChild:!0,loop:!0,trapped:r,branches:l.branchNodes,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,w.jsx)(ut,{role:`dialog`,id:l.contentId,"aria-labelledby":l.titlePresent?l.titleId:void 0,"aria-describedby":l.descriptionPresent?Wr(o,l.descriptionId):o,"data-state":Gr(l.open),...c,ref:t,deferPointerDownOutside:!0,onDismiss:()=>l.onOpenChange(!1),children:s})})})},`DialogContentImpl`)),Br=_.forwardRef(br(function(e,t){let{__scopeDialog:n,...r}=e,i=Tr(`DialogTitle`,n),{setTitleCount:a}=i;return me(()=>(a(e=>e+1),()=>a(e=>e-1)),[a]),(0,w.jsx)(Ze.h2,{id:i.titleId,...r,ref:t})},`DialogTitle`)),Vr=_.forwardRef(br(function(e,t){let{__scopeDialog:n,...r}=e,i=Tr(`DialogDescription`,n),{setDescriptionCount:a}=i;return me(()=>(a(e=>e+1),()=>a(e=>e-1)),[a]),(0,w.jsx)(Ze.p,{id:i.descriptionId,...r,ref:t})},`DialogDescription`)),Hr=`DialogClose`,Ur=_.forwardRef(br(function(e,t){let{__scopeDialog:n,...r}=e,i=Tr(Hr,n);return(0,w.jsx)(Ze.button,{type:`button`,...r,ref:t,onClick:x(e.onClick,()=>i.onOpenChange(!1))})},`DialogClose`));function Wr(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}br(Wr,`concatAriaDescribedby`);function Gr(e){return e?`open`:`closed`}br(Gr,`getState`);var Kr=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function qr(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:Kr(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var Jr=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},Yr=e=>{let t=Jr(e);return t.charAt(0).toUpperCase()+t.slice(1)},Xr=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Zr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function Qr(e){return e!=null}function $r(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??Zr.width,a=e.size??e.height??Zr.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?Xr(...c):Xr(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??Zr[`stroke-width`])*Number(e.size??e.width??Zr.width)/Number(t.size??t.width??Zr.width):t.strokeWidth??Zr[`stroke-width`];return[`svg`,{...Object.entries(Zr).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&Qr(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&Qr(t.width)&&{[r(`width`)]:t.width},...`height`in t&&Qr(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function ei(e,t={}){return $r(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var ti=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ni=(0,_.createContext)({}),ri=()=>(0,_.useContext)(ni),ii=(0,_.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:v=`currentColor`,className:y=``}=ri()??{},b=!!c||ti(d),[ee,x,te=[]]=ei(u,{color:e??v,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:Xr(y,s),hasA11yProp:b,attributes:d});return(0,_.createElement)(ee,{ref:f,...x},[...te.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function ai(e,t=[],n=[]){let r=typeof e==`string`?qr(e,t,n):e,i=(0,_.forwardRef)(({className:e,...t},n)=>(0,_.createElement)(ii,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=Yr(r.name)),i}var oi={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};oi.node;var si=ai(oi),ci={name:`chart-line`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`m19 9-5 5-4-4-3 3`,key:`2osh9i`}]],aliases:[`line-chart`]};ci.node;var li=ai(ci),ui={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};ui.node;var di=ai(ui),fi={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]],aliases:[`check-circle-2`]};fi.node;var pi=ai(fi),mi={name:`circle-question-mark`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`help-circle`,`circle-help`]};mi.node;var hi=ai(mi),gi={name:`circle-x`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]],aliases:[`x-circle`]};gi.node;var _i=ai(gi),vi={name:`clipboard-list`,size:24,node:[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]};vi.node;var yi=ai(vi),bi={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]};bi.node;var xi=ai(bi),Si={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};Si.node;var Ci=ai(Si),wi={name:`file-code`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}]]};wi.node;var Ti=ai(wi),Ei={name:`file-text`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]};Ei.node;var Di=ai(Ei),Oi={name:`git-branch`,size:24,node:[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]};Oi.node;var ki=ai(Oi),Ai={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]};Ai.node;var ji=ai(Ai),Mi={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};Mi.node;var Ni=ai(Mi),Pi={name:`shield-check`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]};Pi.node;var Fi=ai(Pi),Ii={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};Ii.node;var Li=ai(Ii),Ri={name:`terminal`,size:24,node:[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]};Ri.node;var zi=ai(Ri),Bi={name:`triangle-exclamation-point`,size:24,node:[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`alert-triangle`,`triangle-alert`]};Bi.node;var Vi=ai(Bi),Hi={name:`upload`,size:24,node:[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]};Hi.node;var Ui=ai(Hi),Wi={name:`user-round`,size:24,node:[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]],aliases:[`user-2`]};Wi.node;var Gi=ai(Wi),O=Symbol(`NOT_RESOLVED`);function Ki(e,t){return{tagName:e,nodeKind:`scalar`,implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(e=>String(e)),representTagName:t.representTagName??(()=>e)}}function qi(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(e=>e),carrierIsResult:n,identify:t.identify,represent:t.represent??(e=>e),representTagName:t.representTagName??(()=>e)}}function Ji(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(e=>e),carrierIsResult:n,identify:t.identify,represent:t.represent??(e=>e),representTagName:t.representTagName??(()=>e)}}var Yi=Ki(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`}),Xi=[``,`~`,`null`,`Null`,`NULL`],Zi=Ki(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Xi.indexOf(e)===-1?O:null,identify:e=>e===null,represent:()=>`null`}),Qi=Ki(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,t)=>e===`null`||t&&e===``?null:O,identify:e=>e===null,represent:()=>`null`}),$i=[``,`~`,`null`,`Null`,`NULL`],ea=Ki(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>$i.indexOf(e)===-1?O:null,identify:e=>e===null,represent:()=>`null`}),ta=[`true`,`True`,`TRUE`],na=[`false`,`False`,`FALSE`],ra=Ki(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>ta.indexOf(e)!==-1||na.indexOf(e)===-1&&O,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),ia=[`true`],aa=[`false`],oa=Ki(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>ia.indexOf(e)!==-1||aa.indexOf(e)===-1&&O,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),sa=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`],ca=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`],la=Ki(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>sa.indexOf(e)!==-1||ca.indexOf(e)===-1&&O,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),ua=RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`),da=RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function fa(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function pa(e,t){if(t){if(!da.test(e))return O}else if(!ua.test(e))return O;let n=fa(e);return Number.isFinite(n)?n:O}var ma=Ki(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:pa,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),ha=RegExp(`^-?(?:0|[1-9][0-9]*)$`),k=RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function ga(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function _a(e,t){if(t){if(!k.test(e))return O}else if(!ha.test(e))return O;let n=ga(e);return Number.isFinite(n)?n:O}var va=Ki(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:_a,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),ya=RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function ba(e){let t=e.replace(/_/g,``),n=1;if((t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`))return n*parseInt(t.slice(2),2);if(t.startsWith(`0x`))return n*parseInt(t.slice(2),16);if(t.includes(`:`)){let e=0;for(let n of t.split(`:`))e=e*60+Number(n);return n*e}return t!==`0`&&t[0]===`0`?n*parseInt(t,8):n*parseInt(t,10)}function xa(e){if(!ya.test(e))return O;let t=ba(e);return Number.isFinite(t)?t:O}var Sa=Ki(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:xa,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),Ca=RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),wa=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Ta(e){if(!Ca.test(e))return O;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=n*parseFloat(t);return Number.isFinite(r)||wa.test(e)?r:O}function Ea(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Da=Ki(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Ta,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Ea}),Oa=RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`),ka=RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Aa(e,t){if(t){if(!ka.test(e))return O;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=n*parseFloat(t);return Number.isFinite(r)?r:O}if(!Oa.test(e))return O;let n=Number(e);return Number.isFinite(n)?n:O}function ja(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Ma=Ki(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Aa,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:ja}),Na=RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),Pa=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Fa(e){if(!Na.test(e))return O;let t=e.toLowerCase().replace(/_/g,``),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=0;if(t.includes(`:`)){for(let e of t.split(`:`))r=r*60+Number(e);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||Pa.test(e)?r:O}function Ia(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var La=Ki(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Fa,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Ia}),Ra=Ki(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,t)=>e===`<<`||t&&e===``?`<<`:O,identify:()=>!1}),za=/^[A-Za-z0-9+/]*={0,2}$/;function Ba(e){let t=e.replace(/\s/g,``);if(t.length%4!=0||!za.test(t))return O;let n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}function Va(e){let t=``;for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var Ha=Ki(`tag:yaml.org,2002:binary`,{resolve:Ba,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:Va}),Ua=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`),Wa=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function Ga(e,t,n,r=0,i=0,a=0,o=0){let s=new Date(Date.UTC(e,t,n,r,i,a,o));return s.setUTCFullYear(e,t,n),s}function Ka(e){let t=Ua.exec(e);if(t===null&&(t=Wa.exec(e)),t===null)return O;let n=+t[1],r=t[2]-1,i=+t[3];if(!t[4]){let e=Ga(n,r,i);return e.getUTCFullYear()!==n||e.getUTCMonth()!==r||e.getUTCDate()!==i?O:e}let a=+t[4],o=+t[5],s=+t[6],c=0;if(a>23||o>59||s>59)return O;if(t[7]){let e=t[7].slice(0,3);for(;e.length<3;)e+=`0`;c=+e}let l=Ga(n,r,i,a,o,s,c);if(l.getUTCFullYear()!==n||l.getUTCMonth()!==r||l.getUTCDate()!==i)return O;if(t[9]){let e=+t[10],n=+(t[11]||0);if(e>23||n>59)return O;let r=(e*60+n)*6e4;l.setTime(l.getTime()-(t[9]===`-`?-r:r))}return l}var qa=Ki(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:Ka,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),Ja=qi(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function Ya(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Xa(e,t){let n={};for(let r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var Za=qi(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return`cannot resolve an ordered map item`;n=t.keys().next().value}else if(Ya(t)){let e=Object.keys(t);if(e.length!==1)return`cannot resolve an ordered map item`;n=e[0]}else return`cannot resolve an ordered map item`;return e.seen.has(n)?`duplicate key in ordered map`:(e.seen.add(n),e.list.push(t),``)},finalize:e=>e.list,identify:()=>!1}),Qa=qi(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size===1?(e.push(t.entries().next().value),``):`cannot resolve a pairs item`;if(Object.prototype.toString.call(t)!==`[object Object]`)return`cannot resolve a pairs item`;let n=t,r=Object.keys(n);return r.length===1?(e.push([r[0],n[r[0]]]),``):`cannot resolve a pairs item`},identify:()=>!1}),$a=Ji(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Ya,represent:e=>{let t=new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(typeof t==`object`&&t)return`object-based map does not support complex keys`;let r=String(t);return r===`__proto__`?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,``},has:(e,t)=>typeof t==`object`&&t?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}}),eo=Ji(`tag:yaml.org,2002:set`,{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{let t=new Map;for(let n of e)t.set(n,null);return t},addPair:(e,t,n)=>n===null?(e.add(t),``):`cannot resolve a set item`,has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function to(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function no(){return{scalar:[],sequence:[],mapping:[]}}function ro(e){let t=[];for(let n of e){let e=t.length;for(let r=0;r<t.length;r++){let i=t[r];if(i.nodeKind===n.nodeKind&&i.tagName===n.tagName&&i.matchByTagPrefix===n.matchByTagPrefix){e=r;break}}t[e]=n}return t}var io=class e{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(e){let t=ro(e),n=[],r=to(),i=no();for(let e of t){if(e.nodeKind===`scalar`&&e.implicit){if(e.matchByTagPrefix)throw Error(`Implicit scalar tags cannot match by tag prefix`);n.push(e)}switch(e.nodeKind){case`scalar`:e.matchByTagPrefix?i.scalar.push(e):r.scalar[e.tagName]=e;break;case`sequence`:e.matchByTagPrefix?i.sequence.push(e):r.sequence[e.tagName]=e;break;case`mapping`:e.matchByTagPrefix?i.mapping.push(e):r.mapping[e.tagName]=e}}let a=n.filter(e=>e.implicitFirstChars===null),o=new Set;for(let e of n)if(e.implicitFirstChars!==null)for(let t of e.implicitFirstChars)o.add(t);let s=new Map;for(let e of o)s.set(e,n.filter(t=>t.implicitFirstChars===null||t.implicitFirstChars.indexOf(e)!==-1));let c=r.scalar[`tag:yaml.org,2002:str`];if(!c)throw Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=t,this.implicitScalarTags=n,this.implicitScalarByFirstChar=s,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=c,this.defaultSequenceTag=r.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=r.mapping[`tag:yaml.org,2002:map`],this.exact=r,this.prefix=i}lookupScalarTag(e){let t=this.exact.scalar[e];if(t)return t;for(let t of this.prefix.scalar)if(e.startsWith(t.tagName))return t}lookupSequenceTag(e){let t=this.exact.sequence[e];if(t)return t;for(let t of this.prefix.sequence)if(e.startsWith(t.tagName))return t}lookupMappingTag(e){let t=this.exact.mapping[e];if(t)return t;for(let t of this.prefix.mapping)if(e.startsWith(t.tagName))return t}resolveImplicitScalarTag(e){let t=this.implicitScalarByFirstChar.get(e.charAt(0))??this.implicitScalarAnyFirstChar;for(let n of t){let t=n.resolve(e,!1,n.tagName);if(t!==O)return{value:t,tag:n}}let n=this.defaultScalarTag;return{value:n.resolve(e,!1,n.tagName),tag:n}}withTags(...t){let n=[];for(let e of t)n=n.concat(e);return new e([...this.tags,...n])}},ao=new io([Yi,Ja,$a]);new io([...ao.tags,Qi,oa,va,Ma]);var oo=new io([...ao.tags,Zi,ra,ma,Da]);new io([...ao.tags,ea,la,Sa,La,qa,Ra,Ha,Za,Qa,eo]).withTags({...Sa,resolve:(e,t,n)=>{let r=Sa.resolve(e,t,n);return r===O?ma.resolve(e,t,n):r}},{...La,resolve:(e,t,n)=>{let r=La.resolve(e,t,n);return r===O?Da.resolve(e,t,n):r}}),Ji(`tag:yaml.org,2002:map`,{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||Ya(e),represent:e=>{if(e instanceof Map)return e;let t=new Map,n=e;for(let e of Object.keys(n))t.set(e,n[e]);return t}});function so(e){if(Array.isArray(e)){let t=Array.prototype.slice.call(e);for(let e=0;e<t.length;e++){if(Array.isArray(t[e]))return null;typeof t[e]==`object`&&Object.prototype.toString.call(t[e])===`[object Object]`&&(t[e]=`[object Object]`)}return String(t)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}Ji(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Ya,represent:e=>{let t=new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{let r=so(t);return r===null?`nested arrays are not supported inside keys`:(r===`__proto__`?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,``)},has:(e,t)=>{let n=so(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var co={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function lo(e,t,n,r,i){let a=``,o=``,s=Math.floor(i/2)-1;return r-t>s&&(a=` ... `,t=r-s+a.length),n-r>s&&(o=` ...`,n=r+s-o.length),{str:a+e.slice(t,n).replace(/\t/g,`→`)+o,pos:r-t+a.length}}function uo(e,t){return` `.repeat(Math.max(t-e.length,0))+e}function fo(e,t){if(!e.buffer)return null;let n={...co,...t},r=/\r?\n|\r|\0/g,i=[0],a=[],o,s=-1;for(;o=r.exec(e.buffer);)a.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=i.length-2);s<0&&(s=i.length-1);let c=``,l=Math.min(e.line+n.linesAfter,a.length).toString().length,u=n.maxLength-(n.indent+l+3);for(let t=1;t<=n.linesBefore&&!(s-t<0);t++){let r=lo(e.buffer,i[s-t],a[s-t],e.position-(i[s]-i[s-t]),u);c=`${` `.repeat(n.indent)}${uo((e.line-t+1).toString(),l)} | ${r.str}\n${c}`}let d=lo(e.buffer,i[s],a[s],e.position,u);c+=`${` `.repeat(n.indent)}${uo((e.line+1).toString(),l)} | ${d.str}\n`,c+=`${`-`.repeat(n.indent+l+3+d.pos)}^\n`;for(let t=1;t<=n.linesAfter&&!(s+t>=a.length);t++){let r=lo(e.buffer,i[s+t],a[s+t],e.position-(i[s]-i[s+t]),u);c+=`${` `.repeat(n.indent)}${uo((e.line+t+1).toString(),l)} | ${r.str}\n`}return c.replace(/\n$/,``)}function po(e,t){let n=``;return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`\n\n${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var mo=class e extends Error{reason;mark;constructor(e,t){super(),this.name=`YAMLException`,this.reason=e,this.mark=t,this.message=po(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(e){return`${this.name}: ${po(this,e)}`}static throwAt(t,n,r,i=``){let a=0,o=0;for(let e=0;e<n;e++){let n=t.charCodeAt(e);n===10?(a++,o=e+1):n===13&&(a++,t.charCodeAt(e+1)===10&&e++,o=e+1)}let s={name:i,buffer:t,position:n,line:a,column:n-o};throw s.snippet=fo(s),new e(r,s)}},ho={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},A={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},go={BLOCK:1,FLOW:2},_o={CLIP:1,STRIP:2,KEEP:3},vo=-1;function yo(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var bo=Array(256),xo=Array(256);for(let e=0;e<256;e++)bo[e]=+!!yo(e),xo[e]=yo(e);function So(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Co(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function wo(e){return e===120?2:e===117?4:8}function To(e,t,n){let r=0;for(;t<n;){let n=e.charCodeAt(t);if(n===10)r++,t++;else if(n===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(n===32||n===9)t++;else break}return{position:t,breaks:r}}function Eo(e){return e===1?` `:`
`.repeat(e-1)}function Do(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===10||t===13){r+=e.slice(a,o);let t=To(e,i,n);r+=Eo(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,o)}function Oo(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===39)r+=e.slice(a,i)+`'`,i+=2,a=o=i;else if(t===10||t===13){r+=e.slice(a,o);let t=To(e,i,n);r+=Eo(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,n)}function ko(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===92){r+=e.slice(a,i),i++;let t=e.charCodeAt(i);if(t===10||t===13)i=To(e,i,n).position;else if(t<256&&bo[t])r+=xo[t],i++;else{let n=wo(t),a=0;for(;n>0;n--){i++;let t=Co(e.charCodeAt(i));a=(a<<4)+t}r+=So(a),i++}a=o=i}else if(t===10||t===13){r+=e.slice(a,o);let t=To(e,i,n);r+=Eo(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,n)}function Ao(e,t,n,r,i,a){let o=r<0?0:r,s=e.slice(t,n).replace(/\r\n?/g,`
`),c=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),l=``,u=!1,d=0,f=!1;for(let e of c){let t=0;for(;t<o&&e.charCodeAt(t)===32;)t++;if(r<0||t>=e.length){d++;continue}let n=e.slice(o),i=n.charCodeAt(0);a?i===32||i===9?(f=!0,l+=`
`.repeat(u?1+d:d)):f?(f=!1,l+=`
`.repeat(d+1)):d===0?u&&(l+=` `):l+=`
`.repeat(d):l+=`
`.repeat(u?1+d:d),l+=n,u=!0,d=0}return i===_o.KEEP?l+=`
`.repeat(u?1+d:d):i!==_o.STRIP&&u&&(l+=`
`),l}function jo(e,t){if(t.valueStart===vo)return``;let{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case A.SINGLE_QUOTED:return Oo(e,n,r);case A.DOUBLE_QUOTED:return ko(e,n,r);case A.LITERAL_BLOCK:return Ao(e,n,r,t.indent,t.chomping,!1);case A.FOLDED_BLOCK:return Ao(e,n,r,t.indent,t.chomping,!0);default:return Do(e,n,r)}}var Mo=Object.assign(Object.create(null),{"!":`!`,"!!":`tag:yaml.org,2002:`});function No(e){let t=``,n=0;for(;n<e.length;){if(e.charCodeAt(n)!==37){t+=e[n++];continue}let r=parseInt(e.slice(n+1,n+3),16);if(n+=3,r>=192){let t=r<224?1:r<240?2:3;for(r&=(1<<6-t)-1;t-->0;)r=r<<6|parseInt(e.slice(n+1,n+3),16)&63,n+=3}r<65536?t+=String.fromCharCode(r):(r-=65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023))}return t}function Po(e,t){if(e.startsWith(`!<`)&&e.endsWith(`>`))return No(e.slice(2,-1));let n=e.indexOf(`!`,1),r=n===-1?`!`:e.slice(0,n+1);return No(t?.[r]??Mo[r]??r)+No(e.slice(r.length))}var Fo=-1,Io=`tag:yaml.org,2002:merge`,Lo={filename:``,schema:oo,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function Ro(e){return`tagStart`in e&&e.tagStart!==Fo?e.tagStart:`anchorStart`in e&&e.anchorStart!==Fo?e.anchorStart:`valueStart`in e&&e.valueStart!==Fo?e.valueStart:`start`in e?e.start:0}function zo(e,t){mo.throwAt(e.source,e.position,t,e.filename)}function Bo(e,t,n,r){try{return n.finalize(r)}catch(n){if(n instanceof mo)throw n;mo.throwAt(e.source,t,n instanceof Error?n.message:String(n),e.filename)}}function Vo(e,t){let n=jo(e.source,t),r=t.tagStart===Fo?``:e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==``){if(r===`!`)return{value:n,tag:i};let t=Po(r,e.tagHandlers),a=e.schema.lookupScalarTag(t);if(a){let r=a.resolve(n,!0,t);return r===O&&zo(e,`cannot resolve a node with !<${t}> explicit tag`),{value:r,tag:a}}let o=e.schema.lookupMappingTag(t)??e.schema.lookupSequenceTag(t);if(o){n!==``&&zo(e,`cannot resolve a node with !<${t}> explicit tag`);let r=o.create(t);return{value:o.carrierIsResult?r:Bo(e,e.position,o,r),tag:o}}zo(e,`unknown scalar tag !<${t}>`)}return t.style===A.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:i.resolve(n,!1,i.tagName),tag:i}}function Ho(e,t,n){let r=t.tagStart===Fo?``:e.source.slice(t.tagStart,t.tagEnd);return r===``||r===`!`?n:Po(r,e.tagHandlers)}function Uo(e){return e.nodeKind===`mapping`}function Wo(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&zo(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function Go(e,t,n,r){Wo(e);for(let i of r.keys(n)){if(Wo(e),t.tag.has(t.value,i))continue;let a=t.tag.addPair(t.value,i,r.get(n,i));a&&zo(e,a),t.overridable??=new Set,t.overridable.add(i)}}function Ko(e,t,n,r){if(e.position=t.keyPosition,Uo(r))Go(e,t,n,r);else if(r.nodeKind===`sequence`&&Array.isArray(n)){n.length>100&&zo(e,`abnormal merge sequence size`);for(let r of n){let n=e.nodeTags.get(r);n||zo(e,`cannot merge mappings; the provided source object is unacceptable`),Go(e,t,r,n)}}else zo(e,`cannot merge mappings; the provided source object is unacceptable`)}function qo(e,t,n,r,i){if(e.position=t.keyPosition,t.keyIsMerge){Ko(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!t.overridable?.has(n)&&zo(e,`duplicated mapping key`);let a=t.tag.addPair(t.value,n,r);a&&zo(e,a),t.overridable?.delete(n)}function Jo(e,t,n){let r=e.frames[e.frames.length-1];if(r.kind===`document`)r.value=t,r.hasValue=!0;else if(r.kind===`sequence`){Uo(n)&&e.nodeTags.set(t,n);let i=r.tag.addItem(r.value,t,r.index++);i&&zo(e,i)}else if(r.hasKey){let i=r.key;r.key=void 0,r.hasKey=!1,qo(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0,r.keyIsMerge=n.tagName===Io}function Yo(e,t,n,r,i){if(t.anchorStart!==Fo){let a={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function Xo(e,t){let n={...Lo,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){let e=n.events[n.eventIndex++];switch(n.position=Ro(e),e.type){case ho.DOCUMENT:n.anchors=new Map,n.nodeTags=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(let t of e.directives)t.kind===`tag`&&(n.tagHandlers[t.handle]=t.prefix);n.frames.push({kind:`document`,position:n.position,value:void 0,hasValue:!1});break;case ho.SCALAR:{let{value:t,tag:r}=Vo(n,e);Yo(n,e,t,r,!0),Jo(n,t,r);break}case ho.SEQUENCE:{let t=Ho(n,e,`tag:yaml.org,2002:seq`),r=n.schema.lookupSequenceTag(t);r||zo(n,`unknown sequence tag !<${t}>`);let i=r.create(t),a=Yo(n,e,i,r,r.carrierIsResult);n.frames.push({kind:`sequence`,position:n.position,value:i,tag:r,anchor:a,index:0});break}case ho.MAPPING:{let t=Ho(n,e,`tag:yaml.org,2002:map`),r=n.schema.lookupMappingTag(t);r||zo(n,`unknown mapping tag !<${t}>`);let i=r.create(t),a=Yo(n,e,i,r,r.carrierIsResult);n.frames.push({kind:`mapping`,position:n.position,value:i,tag:r,anchor:a,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case ho.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&zo(n,`aliases exceeded maxAliases (${n.maxAliases})`);let t=n.source.slice(e.anchorStart,e.anchorEnd),r=n.anchors.get(t);r||zo(n,`unidentified alias "${t}"`),r.isValueFinal||zo(n,`recursive alias "${t}" is not supported for tag ${r.tag.tagName} because it uses finalize()`),Jo(n,r.value,r.tag);break}case ho.POP:{let e=n.frames.pop();if(e.kind===`mapping`&&e.hasKey&&(n.position=e.keyPosition,zo(n,`incomplete mapping pair in event stream`)),e.kind===`document`)n.documents.push(e.value);else{let t=e.tag.carrierIsResult?e.value:Bo(n,e.position,e.tag,e.value);e.anchor&&(e.anchor.value=t,e.anchor.isValueFinal=!0),Jo(n,t,e.tag)}break}}}return n.documents}var j=-1,Zo=Object.prototype.hasOwnProperty,M=1,N=2,Qo=3,$o=4,es=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ts=/[,\[\]{}]/,ns=/^(?:!|!!|![0-9A-Za-z-]+!)$/,rs=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,is=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,as=RegExp(`^(?:${rs})*$`),os=RegExp(`^(?:${is})+$`),ss=RegExp(`^(?:!(?:${rs})*|${is}(?:${rs})*)$`),cs={filename:``,maxDepth:100};function ls(e,t,n){e.events.push({type:ho.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function us(e,t,n,r,i,a,o){e.events.push({type:ho.SEQUENCE,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function ds(e,t,n,r,i,a,o){e.events.push({type:ho.MAPPING,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function fs(e,t){e.events.splice(t.eventsLength,0,{type:ho.MAPPING,start:t.position,anchorStart:j,anchorEnd:j,tagStart:j,tagEnd:j,style:go.FLOW})}function ps(e,t,n,r,i,a,o,s,c=_o.CLIP,l=-1,u=!1){e.events.push({type:ho.SCALAR,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:a,tagEnd:o,style:s,chomping:c,indent:l,fast:u})}function ms(e,t,n){e.events.push({type:ho.ALIAS,anchorStart:t,anchorEnd:n})}function hs(e){e.events.push({type:ho.POP})}function P(e){ps(e,j,j,j,j,j,j,A.PLAIN)}function gs(){return{anchorStart:j,anchorEnd:j,tagStart:j,tagEnd:j}}function _s(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function vs(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function F(e,t){mo.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function ys(e){return e===10||e===13}function bs(e){return e===9||e===32}function xs(e){return bs(e)||ys(e)}function Ss(e){return e===0||xs(e)}function Cs(e){return e===44||e===91||e===93||e===123||e===125}function ws(e){return e>=48&&e<=57?e-48:-1}function Ts(e){if(e>=48&&e<=57)return e-48;let t=e|32;return t>=97&&t<=102?t-97+10:-1}function Es(e){return e===120?2:e===117?4:e===85?8:0}function Ds(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function Os(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function ks(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||xs(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;bs(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!ys(r)&&r!==0);if(!ys(r))break;for(Os(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function As(e,t=e.position){let n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){let n=e.input.charCodeAt(t+3);return n===0||xs(n)}return!1}function js(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Ms(e){if(e.position!==e.lineStart)return!1;if(As(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;let t=_s(e);js(e),ks(e,!0);let n=e.input.charCodeAt(e.position),r=e.position===e.lineStart&&(n===37||n===45&&As(e));return vs(e,t),r}function Ns(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!ys(t);)t=e.input.charCodeAt(++e.position)}function Ps(e,t,n){let r=es.exec(e.input.slice(t,n));r!==null&&(e.position=t+r.index+r[0].length-1,F(e,`the stream contains non-printable characters`))}function Fs(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==j&&F(e,`duplication of a tag property`);let r=e.position,i=!1,a=!1,o=`!`,s=e.input.charCodeAt(++e.position);s===60?(i=!0,s=e.input.charCodeAt(++e.position)):s===33&&(a=!0,o=`!!`,s=e.input.charCodeAt(++e.position));let c=e.position,l;if(i){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&F(e,`unexpected end of the stream within a verbatim tag`),l=e.input.slice(c,e.position),e.position++}else{for(;s!==0&&!xs(s)&&!(n&&Cs(s));)s===33&&(a?F(e,`tag suffix cannot contain exclamation marks`):(o=e.input.slice(c-1,e.position+1),ns.test(o)||F(e,`named tag handle cannot contain such characters`),a=!0,c=e.position+1)),s=e.input.charCodeAt(++e.position);l=e.input.slice(c,e.position),ts.test(l)&&F(e,`tag suffix cannot contain flow indicator characters`)}return l&&!(i?as.test(l):os.test(l))&&F(e,`tag name cannot contain such characters: ${l}`),!i&&o!==`!`&&o!==`!!`&&!Zo.call(e.tagHandlers,o)&&F(e,`undeclared tag handle "${o}"`),t.tagStart=r,t.tagEnd=e.position,!0}function Is(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==j&&F(e,`duplication of an anchor property`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!xs(e.input.charCodeAt(e.position))&&!Cs(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&F(e,`name of an anchor node must contain at least one character`),t.anchorStart=n,t.anchorEnd=e.position,!0}function Ls(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==j||t.tagStart!==j)&&F(e,`alias node should not have any properties`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!xs(e.input.charCodeAt(e.position))&&!Cs(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&F(e,`name of an alias node must contain at least one character`),ms(e,n,e.position),!0}function Rs(e,t){ks(e,!1),e.lineIndent<t&&F(e,`deficient indentation`)}function zs(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let r=e.position,i=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}let t=e.position;return e.position++,ps(e,r,t,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,A.SINGLE_QUOTED,_o.CLIP,-1,i),!0}ys(a)?(i=!1,Rs(e,t)):e.position===e.lineStart&&As(e)?F(e,`unexpected end of the document within a single quoted scalar`):a!==9&&a<32?F(e,`expected valid JSON character`):e.position++}F(e,`unexpected end of the stream within a single quoted scalar`)}function Bs(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let r=e.position,i=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===34){let t=e.position;return e.position++,ps(e,r,t,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,A.DOUBLE_QUOTED,_o.CLIP,-1,i),!0}if(a===92){i=!1;let n=e.input.charCodeAt(++e.position);if(ys(n))Rs(e,t);else if(Ds(n))e.position++;else{let t=Es(n);for(t===0&&F(e,`unknown escape sequence`);t-->0;)e.position++,Ts(e.input.charCodeAt(e.position))<0&&F(e,`expected hexadecimal character`);e.position++}}else ys(a)?(i=!1,Rs(e,t)):e.position===e.lineStart&&As(e)?F(e,`unexpected end of the document within a double quoted scalar`):a!==9&&a<32?F(e,`expected valid JSON character`):e.position++}F(e,`unexpected end of the stream within a double quoted scalar`)}function Vs(e,t,n){let r=e.input.charCodeAt(e.position),i=_o.CLIP,a=-1,o=!1;if(r!==124&&r!==62)return!1;let s=r===124?A.LITERAL_BLOCK:A.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){let n=e.input.charCodeAt(e.position),r=ws(n);if(n===43||n===45)i!==_o.CLIP&&F(e,`repeat of a chomping mode identifier`),i=n===43?_o.KEEP:_o.STRIP,e.position++;else if(r>=0)r===0&&F(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),o&&F(e,`repeat of an indentation width identifier`),a=t+r-1,o=!0,e.position++;else break}let c=!1;for(;bs(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&Ns(e),ys(e.input.charCodeAt(e.position))?Os(e):e.input.charCodeAt(e.position)!==0&&F(e,`a line break is expected`);let l=o?a:-1,u=0,d=e.position,f=e.position;for(;e.input.charCodeAt(e.position)!==0;){let n=e.position,r=0;for(;e.input.charCodeAt(n+r)===32;)r++;let i=e.input.charCodeAt(n+r);if(i===0){l>=0?r>l&&(f=n+r):r>0&&(f=n+r);break}if(Ms(e))break;if(!o&&l===-1&&ys(i)&&(u=Math.max(u,r)),!o&&l===-1&&!ys(i)&&(i===9&&r<t&&(e.position=n+r,F(e,`tab characters must not be used in indentation`)),r>=t&&r<u&&(e.position=n+r,F(e,`bad indentation of a mapping entry`))),l===-1&&i!==0&&!ys(i)&&r<t){e.lineIndent=r,e.position=n+r;break}!o&&i!==0&&!ys(i)&&l===-1&&(l=r);let a=l===-1?t+1:l;if(i!==0&&!ys(i)&&r<a){e.lineIndent=r,e.position=n+r;break}Ns(e),f=e.position,ys(e.input.charCodeAt(e.position))&&(Os(e),f=e.position)}return Ps(e,d,f),ps(e,d,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,s,i,l),!0}function Hs(e,t){let n=e.input.charCodeAt(e.position),r=t===M;if(n===0||xs(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||Cs(n))return!1;if(n===63||n===45){let t=e.input.charCodeAt(e.position+1);if(Ss(t)||r&&Cs(t))return!1}return!0}function Us(e,t,n,r){if(!Hs(e,n))return!1;let i=e.position,a=e.position,o=e.input.charCodeAt(e.position),s=n===M,c=!1;for(;o!==0&&!Ms(e);){if(o===58){let t=e.input.charCodeAt(e.position+1);if(Ss(t)||s&&Cs(t))break}else if(o===35){if(xs(e.input.charCodeAt(e.position-1)))break}else if(s&&Cs(o))break;else if(ys(o)){let n=e.position,r=e.line,i=e.lineStart,a=e.lineIndent;if(ks(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=n,e.line=r,e.lineStart=i,e.lineIndent=a;break}bs(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a!==i&&(Ps(e,i,a),ps(e,i,a,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,A.PLAIN,_o.CLIP,-1,!c),!0)}function Ws(e,t){let n=e.line;ks(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&F(e,`deficient indentation`)}function Gs(e,t,n){let r=e.input.charCodeAt(e.position),i=r===123,a=e.position,o=!0;if(r!==91&&r!==123)return!1;let s=i?125:93;for(i?ds(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,go.FLOW):us(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,go.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){Ws(e,t);let n=e.input.charCodeAt(e.position);if(n===s)return e.position++,hs(e),!0;o?n===44&&F(e,`expected the node content, but found ','`):F(e,`missed comma between flow collection entries`);let r=!1,a=!1;n===63&&xs(e.input.charCodeAt(e.position+1))&&(r=a=!0,e.position+=1,Ws(e,t));let c=e.line,l=_s(e),u=Js(e,t,M,!1,!0);Ws(e,t),n=e.input.charCodeAt(e.position),(i||a||e.line===c)&&n===58?(r=!0,e.position++,Ws(e,t),i||fs(e,l),u||P(e),Js(e,t,M,!1,!0)||P(e),Ws(e,t),i||hs(e)):i&&r?(u||P(e),P(e)):i?P(e):r&&(fs(e,l),u||P(e),P(e),hs(e)),n=e.input.charCodeAt(e.position),n===44?(o=!0,e.position++):o=!1}F(e,`unexpected end of the stream within a flow collection`)}function Ks(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Ss(e.input.charCodeAt(e.position+1)))return!1;for(us(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,go.BLOCK);e.input.charCodeAt(e.position)===45&&Ss(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,F(e,`tab characters must not be used in indentation`));let n=e.line;e.position++;let r=ks(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Ss(e.input.charCodeAt(e.position+1))&&F(e,`bad indentation of a sequence entry`),r&&e.lineIndent<=t?P(e):Js(e,t,Qo,!1,!0),ks(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&F(e,`bad indentation of a sequence entry`),e.line===n&&e.input.charCodeAt(e.position)===45&&Ss(e.input.charCodeAt(e.position+1))&&F(e,`bad indentation of a sequence entry`)}return hs(e),!0}function qs(e,t,n,r){let i=!1,a=!1,o=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,F(e,`tab characters must not be used in indentation`));let l=e.input.charCodeAt(e.position+1),u=e.line;if((c===63||c===58)&&Ss(l))o||=(ds(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,go.BLOCK),!0),c===63?(i&&P(e),a=!0,i=!0):(i||(P(e),a=!0),i=!1),e.position+=1,s=!0;else{i&&=(P(e),!1);let t=_s(e);if(!Js(e,n,N,!1,!0))break;if(e.line===u){for(c=e.input.charCodeAt(e.position);bs(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),Ss(c)||F(e,`a whitespace character is expected after the key-value separator within a block mapping`),o||=(e.events.splice(t.eventsLength,0,{type:ho.MAPPING,start:t.position,anchorStart:r.anchorStart,anchorEnd:r.anchorEnd,tagStart:r.tagStart,tagEnd:r.tagEnd,style:go.BLOCK}),!0),a=!0,i=!1,s=!1;else if(a)F(e,`expected ':' after a mapping key`);else return r.anchorStart!==j||r.tagStart!==j?(vs(e,t),!1):!0}else if(a)F(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return r.anchorStart!==j||r.tagStart!==j?(vs(e,t),!1):!0}if(Js(e,t,$o,!0,s)&&(s=!1),i||(s&&=(P(e),!1)),ks(e,!0),c=e.input.charCodeAt(e.position),(e.line===u||e.lineIndent>t)&&c!==0)F(e,`bad indentation of a mapping entry`);else if(e.lineIndent<t)break}return a?(i&&P(e),o&&hs(e),!0):!1}function Js(e,t,n,r,i,a=!0){e.depth>=e.maxDepth&&F(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,s=!1,c=!1,l=null,u=gs(),d=n===$o||n===Qo,f=d,p=d;if(r&&ks(e,!0)&&(s=!0,o=e.lineIndent>t?1:e.lineIndent===t?0:-1),o===1)for(;;){let r=e.input.charCodeAt(e.position),i=_s(e);if(s&&o!==1&&(r===33||r===38))break;if(s&&p&&(u.tagStart!==j||u.anchorStart!==j)&&(r===33||r===38)){let n=_s(e),r=t+1;if(qs(e,e.position-e.lineStart,r,u)&&e.events[n.eventsLength]?.type===ho.MAPPING)return e.depth--,!0;vs(e,n)}if(s&&(r===33&&u.tagStart!==j||r===38&&u.anchorStart!==j)||!Fs(e,u,n===M)&&!Is(e,u))break;l===null&&(l=i),ks(e,!0)?(s=!0,f=p,o=e.lineIndent>t?1:e.lineIndent===t?0:-1):f=!1}if(f&&=s||i,o===1||n===$o){let r=n===M||n===N?t:t+1,i=e.position-e.lineStart;if(o===1){if(f&&(Ks(e,i,u)||qs(e,i,r,u))||Gs(e,r,u))c=!0;else{let t=e.input.charCodeAt(e.position);if(l!==null&&a&&p&&!f&&t!==124&&t!==62){let t=_s(e),n=l.position-l.lineStart;vs(e,l),qs(e,n,r,gs())&&e.events[t.eventsLength]?.type===ho.MAPPING?c=!0:vs(e,t)}!c&&(d&&Vs(e,r,u)||zs(e,r,u)||Bs(e,r,u)||Ls(e,u)||Us(e,r,n,u))&&(c=!0)}}else o===0&&(c=f&&Ks(e,i,u))}return d&&=!c,!c&&(u.anchorStart!==j||u.tagStart!==j||d)&&(ps(e,j,j,u.anchorStart,u.anchorEnd,u.tagStart,u.tagEnd,A.PLAIN),c=!0),e.depth--,c||u.anchorStart!==j||u.tagStart!==j}function Ys(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!xs(e.input.charCodeAt(e.position));)e.position++;let n=e.input.slice(t,e.position),r=[];for(n.length===0&&F(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!ys(e.input.charCodeAt(e.position));){for(;bs(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||ys(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!xs(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(t,e.position))}if(ys(e.input.charCodeAt(e.position))&&Os(e),n===`YAML`){e.directives.some(e=>e.kind===`yaml`)&&F(e,`duplication of %YAML directive`),r.length!==1&&F(e,`YAML directive accepts exactly one argument`);let t=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);t===null&&F(e,`ill-formed argument of the YAML directive`),parseInt(t[1],10)!==1&&F(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:r[0]})}else if(n===`TAG`){r.length!==2&&F(e,`TAG directive accepts exactly two arguments`);let[t,n]=r;ns.test(t)||F(e,`ill-formed tag handle (first argument) of the TAG directive`),Zo.call(e.tagHandlers,t)&&F(e,`there is a previously declared suffix for "${t}" tag handle`),ss.test(n)||F(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[t]=n,e.directives.push({kind:`tag`,handle:t,prefix:n})}return!0}function Xs(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(ks(e,!0);Ys(e);)t=!0,ks(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Ss(e.input.charCodeAt(e.position+3))){n=!0;let t=e.line;e.position+=3,ks(e,!0),i=e.line>t}else t&&F(e,`directives end mark is expected`);let a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&As(e)){e.position+=3,ks(e,!0);return}if(ls(e,n,!1),Js(e,e.lineIndent-1,$o,!1,i,i)||P(e),ks(e,!0),e.position===e.lineStart&&As(e)&&(r=e.input.charCodeAt(e.position)===46,r)){let t=e.line;e.position+=3,ks(e,!0),e.line===t&&e.position<e.length&&F(e,`end of the stream or a document separator is expected`)}let o=e.events[a];o?.type===ho.DOCUMENT&&(o.explicitEnd=r),hs(e),!r&&e.position<e.length&&!Ms(e)&&F(e,`end of the stream or a document separator is expected`)}function Zs(e,t){let n=e.length,r={...cs,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf(`\0`);for(i!==-1&&mo.throwAt(e,i,`null byte is not allowed in input`,r.filename);r.position<r.length&&(js(r),ks(r,!0),!(r.position>=r.length));){let e=r.position;Xs(r),r.position===e&&F(r,`can not read a document`)}return r.events}var Qs={...cs,...Lo};function $s(e,t={}){let n={...Qs,...t},r=String(e),i=Object.keys(cs),a=Object.keys(Lo);return Xo(Zs(r,Xa(n,i)),{...Xa(n,a),source:r})}function ec(e,t){let n=$s(e,t);if(n.length===0)throw new mo(`expected a document, but the input is empty`);if(n.length===1)return n[0];throw new mo(`expected a single document in the stream, but found more`)}function tc(e,t){return!!(e&1<<t)}var nc={applyQuoteFlowKeysOption:ic,doubleQuoteForInvisibles:ac,doubleQuoteWhitespaceOnly:oc,applyForceQuotesOption:sc,tryLongOrMultilineAsBlock:cc,quoteInvalidPlain:lc,fallbackToDoubleQuoted:uc};function rc(e){return e.presenterOptions.quoteStyle===`single`&&tc(e.allowedStylesMask,A.SINGLE_QUOTED)?A.SINGLE_QUOTED:A.DOUBLE_QUOTED}function ic(e){e.presenterOptions.quoteFlowKeys&&e.isKey&&e.flowOnly&&e.style===A.PLAIN&&(e.style=A.DOUBLE_QUOTED)}function ac(e){e.style===A.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=A.DOUBLE_QUOTED)}function oc(e){e.style===A.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=A.DOUBLE_QUOTED)}function sc(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==A.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?A.DOUBLE_QUOTED:rc(e)))}function cc(e){if(e.style!==A.PLAIN||e.isKey)return;let t=e.node.value,n=t.indexOf(`
`)!==-1;if(!tc(e.allowedStylesMask,A.LITERAL_BLOCK)){n&&(e.style=A.DOUBLE_QUOTED);return}let r=e.presenterOptions.lineWidth;if(r===-1){n&&(e.style=A.LITERAL_BLOCK);return}let i=Math.max(Math.min(r,40),r-e.shiftOfContent),a=0,o=!1;for(;a<=t.length;){let e=t.length,n=t.indexOf(`
`,a);n!==-1&&(e=n);let r=t.slice(a,e);if(r.length>i&&r[0]!==` `&&/ [^ \t]/.test(r)&&(o=!0),n===-1)break;a=n+1}o?e.style=A.FOLDED_BLOCK:n&&(e.style=A.LITERAL_BLOCK)}function lc(e){e.style===A.PLAIN&&!tc(e.allowedStylesMask,A.PLAIN)&&(e.style=rc(e))}function uc(e){tc(e.allowedStylesMask,e.style)||(e.style=A.DOUBLE_QUOTED)}var dc=`[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]`,fc=`[\\n\\r]`,pc=`\\uFEFF`,mc=`[ \\t]`,hc=`(?:(?!(?:${fc}|${pc}))${dc})`,gc=`(?:(?!${mc})${hc})`,_c=`[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]`,vc=`[-?:,\\[\\]{}#&*!|>'"%@\`]`,yc=`[,\\[\\]{}]`,bc=gc,xc=`(?:(?!${yc})${gc})`,Sc=`(?:(?:(?!${vc})${gc})|[?:-](?=${bc}))`,Cc=`(?:(?:(?!${vc})${gc})|[?:-](?=${xc}))`,wc=`(?:(?:(?![:#])${bc})|:(?=${bc}))#*`,Tc=`(?:(?:(?![:#])${xc})|:(?=${xc}))#*`,Ec=`(?:${mc}*${wc})*`,Dc=`(?:${mc}*${Tc})*`,Oc=`${Sc}#*${Ec}`,kc=`${Cc}#*${Dc}`,Ac=Oc,jc=kc,Mc=`\\n+${wc}${Ec}`,Nc=`\\n+${Tc}${Dc}`,Pc=`${Oc}(?:${Mc})*`,Fc=`${kc}(?:${Nc})*`;RegExp(`^(?:${Pc})$`,`u`),RegExp(`^(?:${Fc})$`,`u`),RegExp(`^(?:${Ac})$`,`u`),RegExp(`^(?:${jc})$`,`u`),RegExp(`^(?:${_c})*$`,`u`),RegExp(`^(?:${_c}|\\n)*$`,`u`),RegExp(`^(?:${hc}|\\n)*$`,`u`),Object.keys(nc).map(e=>Reflect.get(nc,e)),ho.DOCUMENT,ho.SEQUENCE,ho.MAPPING,ho.SCALAR,ho.ALIAS,ho.POP,A.PLAIN,A.SINGLE_QUOTED,A.DOUBLE_QUOTED,A.LITERAL_BLOCK,A.FOLDED_BLOCK,go.BLOCK,go.FLOW,_o.CLIP,_o.STRIP,_o.KEEP;var Ic=[`read`,`propose`,`act-with-approval`,`act-alone`],Lc=e=>Ic.indexOf(e),Rc=[`register`,`capabilities`,`components`,`design`,`risks`,`controls`,`hazards`,`crosswalk_references`,`combinations`],zc=[`capabilities`,`components`,`design`,`risks`,`controls`],Bc=class extends Error{},I=e=>e&&typeof e==`object`&&!Array.isArray(e)?e:{},L=e=>Array.isArray(e)?e.filter(e=>e!=null).map(String):[];function Vc(e){let t=I(e),n=Object.keys(t);if(n.length)return Object.fromEntries(n.map(e=>[e,L(t[e])]))}function Hc(e,t){let n=t.element_ids==null?t.element_id==null?[]:[String(t.element_id)]:L(t.element_ids),r={statement:String(t.statement??``),description:String(t.description??``).trim(),element_ids:n,controls:L(t.controls)};t.failure_mode!=null&&(r.failure_mode=String(t.failure_mode)),t.type!=null&&(r.type=L(t.type)),t.hazards!=null&&(r.hazards=L(t.hazards)),t.sources!=null&&(r.sources=L(t.sources));let i=Vc(t.crosswalks);i&&(r.crosswalks=i),t.superseded_by&&(r.superseded_by=String(t.superseded_by)),t.combination&&(r.combination=String(t.combination));let a=I(t.min_authority);if(Object.keys(a).length&&(r.min_authority=Object.fromEntries(Object.entries(a).map(([t,n])=>[t,Uc(e,n)]))),!r.statement)throw new Bc(`${e} has no statement`);return r}function Uc(e,t){let n=String(t);if(!Ic.includes(n))throw new Bc(`${e}: unknown authority ${JSON.stringify(t)}; expected one of ${Ic.join(`, `)}`);return n}var Wc=e=>e===`always`||e===`never`||e===`ask`?e:void 0;function Gc(e,t){if(Array.isArray(t)&&t.length)return t.map(t=>{let n=I(t),r=Number(n.level);if(r!==0&&r!==1&&r!==2)throw new Bc(`${e} level_when has level ${JSON.stringify(n.level)}`);let i={level:r};return n.capabilities!=null&&(i.capabilities=L(n.capabilities)),n.authority!=null&&(i.authority=Uc(`${e} level_when`,n.authority)),typeof n.irreversible==`boolean`&&(i.irreversible=n.irreversible),typeof n.external==`boolean`&&(i.external=n.external),i})}function Kc(e){let t=e??{},n={};for(let[e,r]of Object.entries(I(t.roles))){let t=I(r),i={};for(let[n,r]of Object.entries(I(t.capabilities))){let t=I(r);i[n]={mark:t.mark===`yes`||t.mark===!0?`yes`:`maybe`,...t.note?{note:String(t.note)}:{},...t.min_authority?{min_authority:Uc(`role ${e} ${n}`,t.min_authority)}:{}}}n[e]={name:String(t.name??e),...t.description?{description:String(t.description)}:{},...t.question?{question:String(t.question)}:{},capabilities:i}}let r={};for(let[e,n]of Object.entries(I(t.rules))){let t=I(n);r[e]={name:String(t.name??e),roles:L(t.roles),risks:L(t.risks),...t.mechanism?{mechanism:String(t.mechanism)}:{},...t.description?{description:String(t.description)}:{},...t.control?{control:String(t.control)}:{},...t.sources?{sources:L(t.sources)}:{}}}let i={};for(let[e,n]of Object.entries(I(t.implies)))i[e]=Object.fromEntries(Object.entries(I(n)).map(([e,t])=>{let n=I(t);return[e,{mark:n.mark===`yes`||n.mark===!0?`yes`:`maybe`,...n.note?{note:String(n.note)}:{}}]}));return{roles:n,rules:r,implies:i}}function qc(e,t){let n=Number(t.level);if(n!==0&&n!==1&&n!==2)throw new Bc(`${e} has level ${JSON.stringify(t.level)}; expected 0, 1 or 2`);let r={level:n,risks:L(t.risks),statement:String(t.statement??``),recommendations:String(t.recommendations??``).trim(),references:L(t.references)},i=Vc(t.crosswalks);i&&(r.crosswalks=i),t.superseded_by&&(r.superseded_by=String(t.superseded_by));let a=Gc(e,t.level_when);if(a&&(r.level_when=a),t.enforcement!=null&&(r.enforcement=L(t.enforcement)),t.owner!=null&&(r.owner=String(t.owner)),t.phase!=null&&(r.phase=L(t.phase)),t.evidence&&(r.evidence=String(t.evidence).trim()),t.test&&(r.test=String(t.test).trim()),!r.statement)throw new Bc(`${e} has no statement`);return r}function Jc(e,t){try{return ec(t)}catch(t){throw new Bc(`${e}.yaml is not valid YAML: ${t.message}`)}}function Yc(e){let t=zc.filter(t=>e[t]==null);if(t.length)throw new Bc(`The register is missing ${t.map(e=>`${e}.yaml`).join(`, `)}; it must use the same file layout as arc-risk-register/.`);let n={};for(let t of Rc)e[t]!=null&&(n[t]=I(Jc(t,e[t])));let r=n.register&&n.register.version!=null?{version:String(n.register.version),...n.register.released?{released:String(n.register.released)}:{}}:{version:`unversioned`},i={};for(let[e,t]of Object.entries(n.capabilities??{})){let n=I(t),r={name:String(n.name??e),category:String(n.category??``),description:String(n.description??``).trim()};Array.isArray(n.authority)&&n.authority.length&&(r.authority=n.authority.map(t=>Uc(e,t)));let a=Wc(n.irreversible);a&&(r.irreversible=a);let o=Wc(n.external);o&&(r.external=o),i[e]=r}let a=e=>Object.fromEntries(Object.entries(e??{}).map(([e,t])=>{let n=I(t);return[e,{name:String(n.name??e),...n.description==null?{}:{description:String(n.description).trim()},...n.present_when?{present_when:String(n.present_when).trim()}:{}}]})),o={};for(let[e,t]of Object.entries(n.risks??{}))o[e]=Hc(e,I(t));let s={};for(let[e,t]of Object.entries(n.controls??{}))s[e]=qc(e,I(t));let c={};for(let[e,t]of Object.entries(n.hazards??{})){let n=I(t);c[e]={name:String(n.name??e),type:String(n.type??``),description:String(n.description??``).trim()}}let l={};for(let[e,t]of Object.entries(n.crosswalk_references??{})){let n=I(t);n.title&&(l[e]={title:String(n.title),...n.url?{url:String(n.url)}:{},...n.version==null?{}:{version:String(n.version)},...n.applies_to?{applies_to:L(n.applies_to)}:{},ids:Object.fromEntries(Object.entries(I(n.ids)).map(([e,t])=>[String(e),String(t)]))})}return{version:r,capabilities:i,components:a(n.components),design:a(n.design),risks:o,controls:s,hazards:c,crosswalks:l,combinations:Kc(n.combinations)}}function Xc(e,t){return t in e.capabilities||!!(e.components[t]?.present_when||e.design[t]?.present_when)}var Zc=e=>[...Object.keys(e.components),...Object.keys(e.design)].filter(t=>Xc(e,t));function Qc(e,t){return e.capabilities[t]?.name??e.components[t]?.name??e.design[t]?.name??t}function $c(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function el(e,t=`|`){return e.map(e=>wl(e)).join(t)}function tl(e,t){return typeof t==`bigint`?t.toString():t}var nl=class{constructor(e){this._getter=e,this._value=void 0}get value(){let e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}};function rl(e){return new nl(e)}function il(e){return e==null}function al(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function ol(e,t){let n=e/t,r=Math.round(n),i=4*2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}function sl(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function cl(e){let t=Object.getOwnPropertyDescriptor(e,`shape`);return t?.get?t.get.raw:t?.value}function ll(e){return cl(e._zod.def)??e._zod.def.shape}function ul(e,t,n){Object.defineProperty(e,t,{get(){let e=n();return sl(this,t,e),e},enumerable:!0,configurable:!0})}function dl(e,t,n){t in e?sl(e,t,n):e[t]=n}function fl(e,t,n,r){let i=ll(t);for(let a of n){let n=Object.getOwnPropertyDescriptor(i,a);n.enumerable&&(n.get?ul(e,a,()=>{let e=t._zod.def.shape[a];return r?r(e,a):e}):dl(e,a,r?r(n.value,a):n.value))}}function pl(e,t){for(let n of Reflect.ownKeys(t)){let r=Object.getOwnPropertyDescriptor(t,n);r.enumerable&&(r.get?ul(e,n,()=>t[n]):dl(e,n,r.value))}}function ml(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function hl(e){return JSON.stringify(e)}function gl(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var _l=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function vl(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var yl=rl(()=>{if(fu.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function bl(e){if(vl(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return vl(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function xl(e){return bl(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var Sl=new Set([`string`,`number`,`symbol`]);function Cl(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function R(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function z(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function wl(e){return typeof e==`bigint`?e.toString()+`n`:typeof e==`string`?`"${e}"`:`${e}`}function Tl(e){return Object.keys(e).filter(t=>e[t]._zod.optin!==void 0&&e[t]._zod.optout===`optional`)}var El={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Dl={int64:[BigInt(`-9223372036854775808`),BigInt(`9223372036854775807`)],uint64:[BigInt(0),BigInt(`18446744073709551615`)]};function Ol(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);let i={};return fl(i,e,kl(e,t)),R(e,ml(n,{shape:i,checks:[]}))}function kl(e,t){let n=ll(e),r=[];for(let e of Reflect.ownKeys(t)){if(!Object.getOwnPropertyDescriptor(n,e)?.enumerable)throw Error(`Unrecognized key: "${String(e)}"`);t[e]&&r.push(e)}return r}function Al(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);let i=new Set(kl(e,t)),a={};return fl(a,e,Reflect.ownKeys(ll(e)).filter(e=>!i.has(e))),R(e,ml(n,{shape:a,checks:[]}))}function jl(e,t){if(!bl(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=ll(e);for(let e of Reflect.ownKeys(t))if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return R(e,ml(e._zod.def,{shape:Ml(e,t)}))}function Ml(e,t){let n={};return fl(n,e,Reflect.ownKeys(ll(e))),pl(n,t),n}function Nl(e,t){if(!bl(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return R(e,ml(e._zod.def,{shape:Ml(e,t)}))}function Pl(e,t){if(!t?._zod?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);let n={};return fl(n,e,Reflect.ownKeys(ll(e))),fl(n,t,Reflect.ownKeys(ll(t))),R(e,ml(e._zod.def,{shape:n,get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function Fl(e,t,n,r=`partial`){let i=t._zod.def.checks;if(i&&i.length>0)throw Error(`.${r}() cannot be used on object schemas containing refinements`);let a=n?new Set(kl(t,n)):void 0,o={};return fl(o,t,Reflect.ownKeys(ll(t)),e&&((t,n)=>a&&!a.has(n)?t:new e({type:`optional`,innerType:t}))),R(t,ml(t._zod.def,{shape:o,checks:[]}))}function Il(e,t,n){let r=n?new Set(kl(t,n)):void 0,i={};return fl(i,t,Reflect.ownKeys(ll(t)),(t,n)=>r&&!r.has(n)?t:new e({type:`nonoptional`,innerType:t})),R(t,ml(t._zod.def,{shape:i}))}function Ll(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function Rl(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function zl(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function Bl(e){return typeof e==`string`?e:e?.message}function Vl(e){let t=[];for(let n of e??[]){let e=n._zod.def;if(!/_(length|size)$|_equals$/.test(e.check))break;let r=e.maximum??e.length??e.size;r>=0&&t.push([r,n])}return t}function Hl(e,t,n){var r;for(let i=t;i<e.length;i++)(r=e[i]).schema??(r.schema=n)}function Ul(e,t,n){var r;let i=e.inst?._zod?.traits;i?.has(`$ZodType`)&&(i.has(`$ZodCheck`)?(r=e).schema??(r.schema=e.inst):e.schema=e.inst);let a=e.schema===e.inst?void 0:e.schema?._zod.def?.error,o=e.message?e.message:Bl(e.inst?._zod.def?.error?.(e))??Bl(a?.(e))??Bl(t?.error?.(e))??Bl(n.customError?.(e))??Bl(n.localeError?.(e))??`Invalid input`,s={};for(let t of Object.keys(e))t!==`inst`&&t!==`schema`&&t!==`continue`&&t!==`input`&&t!==`__proto__`&&(s[t]=e[t]);return s.path??=[],s.message=o,t?.reportInput&&(s.input=e.input),s}var Wl=/[\uD800-\uDBFF]/;function Gl(e){let t=e.length;if(!Wl.test(e))return t;let n=t;for(let r=0;r<t-1;r++)(e.charCodeAt(r)&64512)==55296&&(e.charCodeAt(r+1)&64512)==56320&&(n--,r++);return n}function Kl(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function ql(e){let t=typeof e;switch(t){case`number`:return Number.isNaN(e)?`nan`:`number`;case`object`:{if(e===null)return`null`;if(Array.isArray(e))return`array`;let t=e;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&`constructor`in t&&t.constructor)return t.constructor.name}}return t}function Jl(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function Yl(e,t){for(let n in t){let r=Object.getOwnPropertyDescriptor(t,n);r.get?Object.defineProperty(e,n,{...r,enumerable:!1}):$l(e,n,r.value)}}function Xl(e,t,n,r=!0){return Object.defineProperty(e,t,{configurable:!0,writable:!0,enumerable:r,value:n}),n}function Zl(e,t,n){return Xl(e,t,n,!1)}function Ql(e,t){for(let n in e){let r=e[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get(){return Xl(this,n,r(this))},set(e){Xl(this,n,e)}})}return t}function $l(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){return this==null?n:Xl(this,t,n.bind(this))},set(e){Xl(this,t,e)}})}function eu(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}var tu,nu=!1,ru={configurable:!0,get(){nu=!0}};function B(e,t,n){let r=Object.getPrototypeOf(e._zod);t in r&&tu!==e._zod?tu=void 0:(tu=e._zod,Object.defineProperty(r,t,{configurable:!0,get(){Object.defineProperty(this,t,ru);let e=nu;nu=!1;try{let r=n(this);return nu?delete this[t]:Object.defineProperty(this,t,{configurable:!0,writable:!0,value:r}),nu||=e,r}catch(n){throw delete this[t],nu||=e,n}},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}}))}function iu(e,t,n,r){let i=eu(e,t);i&&Object.defineProperty(i,t,{configurable:!0,get(){let e={configurable:!0,writable:!0,enumerable:r,value:void 0};return Object.defineProperty(this,t,e),e.value=n(this),Object.defineProperty(this,t,e),e.value},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:r,value:e})}})}var au=`~constantCatch`;function ou(e){let t=()=>e;return t[au]=!0,t}var su,cu={value:void 0,enumerable:!1},V=`captureStackTrace`in Error?Error:null;function lu(e){let t=V;if(t){let n=t.stackTraceLimit;if(typeof n==`number`){try{t.stackTraceLimit=0}catch{return V=null,new e}try{return new e}finally{t.stackTraceLimit=n}}}return new e}function H(e,t,n,r){let i={};function a(e){this.def=e,this.constr=d,this.traits=new Set}a.prototype=i;let o=n,s=o&&new WeakSet;function c(n,r){if(!n._zod){cu.value=new a(r);try{Object.defineProperty(n,"_zod",cu)}finally{cu.value=void 0}}else if(n._zod.traits.has(e))return;if(n._zod.traits.add(e),t(n,r),s){let e=Object.getPrototypeOf(n),t=n._zod.constr.prototype,r=e;for(;r&&r!==t;)r=Object.getPrototypeOf(r);let i=r??e;s.has(i)||(s.add(i),Yl(i,o))}let i=d.prototype;for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let l=r?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:e});function d(e){let t=r?.Parent?lu(u):this;c(t,e);let n=t._zod.deferred;if(n){for(let e of n)e();t._zod.deferred=void 0}let i=globalThis.__zod_globalConfig?.postProcessor;return i&&i(t),t}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:t=>r?.Parent&&t instanceof r.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(d,"name",{value:e}),d}var uu=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},du=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(su=globalThis).__zod_globalConfig??(su.__zod_globalConfig={});var fu=globalThis.__zod_globalConfig;function pu(e){return e&&Object.assign(fu,e),fu}function mu(){let e=this._zod;return e.message??=JSON.stringify(e.def,tl,2),e.message}function hu(e){this._zod.message=e}var gu={get:mu,set:hu,enumerable:!0,configurable:!0},_u={value:void 0,enumerable:!1},vu=new WeakSet([Object.prototype,Error.prototype]),yu=H(`$ZodError`,(e,t)=>{e.name=`$ZodError`,_u.value=t,Object.defineProperty(e,"issues",_u),_u.value=void 0,Object.defineProperty(e,"message",gu);let n=Object.getPrototypeOf(e);vu.has(n)||(vu.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))});function bu(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function xu(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?bu(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function Su(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.prototype.hasOwnProperty.call(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}function Cu(e,t){return{callee:t?.callee??e,Err:t?.Err}}var wu=e=>{let t=(n,r,i,a)=>{let o=i?{...i,async:!1}:{async:!1},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise)throw new uu;if(s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>Ul(e,o,pu())));throw _l(n,a?.callee??t),n}return s.value};return t},Tu=e=>{let t=async(n,r,i,a)=>{let o=i?{...i,async:!0}:{async:!0},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise&&(s=await s),s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>Ul(e,o,pu())));throw _l(n,a?.callee??t),n}return s.value};return t},Eu=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new uu;return a.issues.length?Du(e,a.issues,i):{success:!0,data:a.value}};function Du(e,t,n){let r;return{success:!1,get error(){return r||(r=new e(t.map(e=>Ul(e,n,pu()))),t=void 0,n=void 0),r},set error(e){r=e,t=void 0,n=void 0}}}var Ou=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?Du(e,a.issues,i):{success:!0,data:a.value}},ku=Symbol.for(`zod.compile.invalid`),Au=Symbol.for(`zod.compile.fallback`),ju=((e,t,n)=>{let r=e._zod.bag.validator;if(r!==void 0){if(r(t)!==ku)return!0;if(r.definite===!0&&n===void 0)return!1}return Mu(e,t,n)});function Mu(e,t,n){let r=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},i=e._zod.bag.fallbackRun,a;if(i?(r[Au]=!0,a=i({value:t,issues:[]},r)):a=e._zod.run({value:t,issues:[]},r),a instanceof Promise)throw new uu;return a.issues.length===0}var Nu=async(e,t,n)=>{let r=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0},i=e._zod.run({value:t,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length===0},Pu=e=>{let t=wu(e),n=(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return t(e,r,o,Cu(n,a))};return n},Fu=e=>{let t=wu(e),n=(e,r,i,a)=>t(e,r,i,Cu(n,a));return n},Iu=e=>{let t=Tu(e),n=async(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return await t(e,r,o,Cu(n,a))};return n},Lu=e=>{let t=Tu(e),n=async(e,r,i,a)=>await t(e,r,i,Cu(n,a));return n},Ru=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Eu(e)(t,n,i)},zu=e=>(t,n,r)=>Eu(e)(t,n,r),Bu=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ou(e)(t,n,i)},Vu=e=>async(t,n,r)=>Ou(e)(t,n,r),Hu=/^[cC][0-9a-z]{6,}$/,Uu=/^[0-9a-z]+$/,Wu=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,Gu=/^[0-9a-vA-V]{20}$/,Ku=/^[A-Za-z0-9]{27}$/,qu=/^[a-zA-Z0-9_-]{21}$/;function Ju(e){return RegExp(`^[a-zA-Z0-9_-]{${e}}$`)}var Yu=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Xu=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Zu=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Qu=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,$u=`^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function ed(){return new RegExp($u,`u`)}var td=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,nd=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,U=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,rd=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,W=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,G=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,id=/^https?$/,ad=/^\+[1-9]\d{6,14}$/,od=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function sd(e){return RegExp(`^${e}$`)}var cd=sd(od);function ld(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:e.seconds?`${t}:[0-5]\\d(?:\\.\\d+)?`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function ud(e){return RegExp(`^${ld(e)}$`)}function dd(e){let t=[`Z`];e.offset&&t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let n=`${ld({precision:e.precision,seconds:!0})}(?:${t.join(`|`)})`,r=e.local?`${n}|${ld({precision:e.precision})}`:n;return RegExp(`^${od}T(?:${r})$`)}var fd=/^[\s\S]{0,}$/,pd=/^-?\d+$/,md=/^-?\d+(?:\.\d+)?$/,hd=/^(?:true|false)$/i,gd=/^[^A-Z]*$/,_d=/^[^a-z]*$/,vd=H(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),yd=e=>{let t=e.value;return!il(t)&&t.length!==void 0},bd={number:`number`,bigint:`bigint`,object:`date`},xd=H(`$ZodCheckLessThan`,(e,t)=>{vd.init(e,t);let n=bd[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:bd[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Sd=H(`$ZodCheckGreaterThan`,(e,t)=>{vd.init(e,t);let n=bd[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:bd[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Cd=H(`$ZodCheckMultipleOf`,(e,t)=>{vd.init(e,t),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?t.value!==BigInt(0)&&n.value%t.value===BigInt(0):ol(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),wd=H(`$ZodCheckNumberFormat`,(e,t)=>{vd.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=El[t.format];e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),Td=H(`$ZodCheckMaxLength`,(e,t)=>{var n;vd.init(e,t),(n=e._zod.def).when??(n.when=yd),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>t.maximum?Gl(r):i)<=t.maximum)return;let a=Kl(r);n.issues.push({origin:a,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Ed=H(`$ZodCheckMinLength`,(e,t)=>{var n;vd.init(e,t),(n=e._zod.def).when??(n.when=yd),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>=t.minimum&&i<t.minimum*2?Gl(r):i)>=t.minimum)return;let a=Kl(r);n.issues.push({origin:a,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Dd=H(`$ZodCheckLengthEquals`,(e,t)=>{var n;vd.init(e,t),(n=e._zod.def).when??(n.when=yd),e._zod.check=n=>{let r=n.value,i=r.length,a=typeof r==`string`&&i>=t.length&&i<=t.length*2?Gl(r):i;if(a===t.length)return;let o=Kl(r),s=a>t.length;n.issues.push({origin:o,...s?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),Od=H(`$ZodCheckStringFormat`,(e,t)=>{var n,r;vd.init(e,t),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,t.pattern.test(n.value)||n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),kd=H(`$ZodCheckRegex`,(e,t)=>{Od.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,t.pattern.test(n.value)||n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Ad=H(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=gd,Od.init(e,t)}),jd=H(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=_d,Od.init(e,t)}),Md=H(`$ZodCheckIncludes`,(e,t)=>{vd.init(e,t);let n=Cl(t.includes);t.pattern=new RegExp(typeof t.position==`number`?`^.{${t.position},}${n}`:n),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Nd=H(`$ZodCheckStartsWith`,(e,t)=>{vd.init(e,t);let n=RegExp(`^${Cl(t.prefix)}.*`);t.pattern??=n,e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Pd=H(`$ZodCheckEndsWith`,(e,t)=>{vd.init(e,t);let n=RegExp(`.*${Cl(t.suffix)}$`);t.pattern??=n,e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),Fd=H(`$ZodCheckOverwrite`,(e,t)=>{vd.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),Id=class{constructor(e=[],t={}){this.content=[],this.indent=0,this.args=e,this.closed=t}indented(e){this.indent+=1;try{e(this)}finally{--this.indent}}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.content??[``];return new e(...Object.keys(this.closed),`return function (${this.args.join(`, `)}) {\n${t.join(`
`)}\n};`)(...Object.values(this.closed))}},Ld={major:4,minor:6,patch:7},K=H(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Ld;let r=e._zod.def.checks,i=e._zod.traits.has(`$ZodCheck`)?[e,...r??[]]:r?.length?[...r]:[];for(let t of i)for(let n of t._zod.onattach)n(e);if(i.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(t,n,r)=>{if(t.memo)return t;let i=Ll(t),a;for(let o of n){if(o._zod.def.when){if(Rl(t)||!o._zod.def.when(t))continue}else if(i)continue;let n=t.issues.length,s=o._zod.check(t);if(s instanceof Promise&&r?.async===!1)throw new uu;if(a||s instanceof Promise)a=(a??Promise.resolve()).then(async()=>{await s,t.issues.length!==n&&(Hl(t.issues,n,e),i||=Ll(t,n))});else{if(t.issues.length===n)continue;Hl(t.issues,n,e),i||=Ll(t,n)}}return a?a.then(()=>t):t},n=(n,r,a)=>{if(Ll(n))return n.aborted=!0,n;let o=t(r,i,a);if(o instanceof Promise){if(a.async===!1)throw new uu;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(r,a)=>{if(a.skipChecks)return e._zod.parse(r,a);if(a.direction===`backward`){let t=e._zod.parse({value:r.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,r,a)):n(t,r,a)}let o=e._zod.parse(r,a);if(o instanceof Promise){if(a.async===!1)throw new uu;return o.then(e=>t(e,i,a))}return t(o,i,a)}}},{get"~standard"(){return Zl(this,`~standard`,Bd(this))},set"~standard"(e){Xl(this,`~standard`,e)}}),Rd=(e,t)=>e.issues.length?{issues:e.issues.map(e=>Ul(e,t,pu()))}:{value:e.value};async function zd(e,t){let n={async:!0};return Rd(await e._zod.run({value:t,issues:[]},n),n)}function Bd(e){return{validate:t=>{let n={async:!1};try{let r=e._zod.run({value:t,issues:[]},n);if(!(r instanceof Promise))return Rd(r,n)}catch{}return zd(e,t)},vendor:`zod`,version:1}}var Vd=H(`$ZodString`,(e,t)=>{K.init(e,t),e._zod.pattern=t.pattern??fd,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),q=H(`$ZodStringFormat`,(e,t)=>{Od.init(e,t),Vd.init(e,t)}),Hd=H(`$ZodGUID`,(e,t)=>{t.pattern??=Xu,q.init(e,t)}),Ud=H(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Zu(e)}else t.pattern??=Zu();q.init(e,t)}),Wd=H(`$ZodEmail`,(e,t)=>{t.pattern??=Qu,q.init(e,t)});function Gd(e){try{return typeof URL<`u`&&typeof URL.canParse==`function`?URL.canParse(e):(new URL(e),!0)}catch{return!1}}function Kd(e,t){return!(`normalize`in t)&&!(`hostname`in t)&&!(`protocol`in t)?Gd(e)||2:qd(e,t)}function qd(e,t){if(!t.normalize&&t.protocol?.source===id.source&&!/^https?:\/\//i.test(e))return 1;try{if(typeof URL<`u`){let t=URL;if(typeof t.parse==`function`)return t.parse(e)??2}return new URL(e)}catch{return 2}}var Jd=/[\t\n\r]/g;function Yd(e){return e.replace(Jd,``)}function Xd(e,t){return t.lastIndex=0,t.test(e.hostname)}function Zd(e,t){return t.lastIndex=0,t.test(e.protocol.endsWith(`:`)?e.protocol.slice(0,-1):e.protocol)}var Qd=H(`$ZodURL`,(e,t)=>{q.init(e,t),e._zod.check=n=>{try{let r=n.value.trim(),i=Kd(r,t);if(i===1){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}if(i===2){n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort});return}if(i===!0){n.value=Yd(r);return}t.hostname&&!Xd(i,t.hostname)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort}),t.protocol&&!Zd(i,t.protocol)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort}),n.value=t.normalize?i.href:Yd(r);return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),$d=H(`$ZodEmoji`,(e,t)=>{t.pattern??=ed(),q.init(e,t)}),ef=H(`$ZodNanoID`,(e,t)=>{if(t.length!==void 0&&(!Number.isInteger(t.length)||t.length<1))throw Error(`Invalid nanoid length: ${t.length}`);t.pattern??=t.length===void 0?qu:Ju(t.length),q.init(e,t)}),tf=H(`$ZodCUID`,(e,t)=>{t.pattern??=Hu,q.init(e,t)}),nf=H(`$ZodCUID2`,(e,t)=>{t.pattern??=Uu,q.init(e,t)}),rf=H(`$ZodULID`,(e,t)=>{t.pattern??=Wu,q.init(e,t)}),af=H(`$ZodXID`,(e,t)=>{t.pattern??=Gu,q.init(e,t)}),of=H(`$ZodKSUID`,(e,t)=>{t.pattern??=Ku,q.init(e,t)}),sf=H(`$ZodISODateTime`,(e,t)=>{t.pattern??=dd(t),q.init(e,t)}),cf=H(`$ZodISODate`,(e,t)=>{t.pattern??=cd,q.init(e,t)}),lf=H(`$ZodISOTime`,(e,t)=>{t.pattern??=ud(t),q.init(e,t)}),uf=H(`$ZodISODuration`,(e,t)=>{t.pattern??=Yu,q.init(e,t)}),df=H(`$ZodIPv4`,(e,t)=>{t.pattern??=td,q.init(e,t)}),ff=/^[0-9a-fA-F:.]+$/;function pf(e){return ff.test(e)?Gd(`http://[${e}]`):!1}var mf=H(`$ZodIPv6`,(e,t)=>{t.pattern??=nd,q.init(e,t),e._zod.check=n=>{pf(n.value)||n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}),hf=H(`$ZodCIDRv4`,(e,t)=>{t.pattern??=U,q.init(e,t)});function gf(e){let t=e.split(`/`);if(t.length!==2)return!1;let[n,r]=t;if(!r)return!1;let i=Number(r);return`${i}`!==r||i<0||i>128?!1:pf(n)}var _f=H(`$ZodCIDRv6`,(e,t)=>{t.pattern??=rd,q.init(e,t),e._zod.check=n=>{gf(n.value)||n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}});function vf(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var yf=/^[0-9a-zA-Z+/]*={0,2}$/,bf=H(`$ZodBase64`,(e,t)=>{t.pattern??=yf,q.init(e,t),e._zod.check=n=>{vf(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}}),xf=/^[A-Za-z0-9_-]*$/;function Sf(e){if(!xf.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return vf(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var Cf=H(`$ZodBase64URL`,(e,t)=>{t.pattern??=xf,q.init(e,t),e._zod.check=n=>{Sf(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),wf=H(`$ZodE164`,(e,t)=>{t.pattern??=ad,q.init(e,t)});function Tf(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var Ef=H(`$ZodJWT`,(e,t)=>{q.init(e,t),e._zod.check=n=>{Tf(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),Df=H(`$ZodNumber`,(e,t)=>{K.init(e,t),e._zod.pattern=md,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),Of=H(`$ZodNumberFormat`,(e,t)=>{wd.init(e,t),Df.init(e,t)}),kf=H(`$ZodBoolean`,(e,t)=>{K.init(e,t),e._zod.pattern=hd,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=!!n.value}catch{}let i=n.value;return typeof i==`boolean`||n.issues.push({expected:`boolean`,code:`invalid_type`,input:i,inst:e}),n}}),Af=H(`$ZodUnknown`,(e,t)=>{K.init(e,t),e._zod.parse=e=>e}),jf=H(`$ZodNever`,(e,t)=>{K.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function Mf(e,t){let n=Vl(e._zod.def.checks);if(!n.length)return;let r=Math.min(...n.map(e=>e[0])),i=e._zod.parse;e._zod.parse=(n,a)=>{let o=t(n.value);if(o>r&&!a?.skipChecks&&a?.direction!==`backward`){for(let[t,r]of Vl(e._zod.def.checks))if(o>t&&r._zod.def.when(n)){let t=n.issues.length;return r._zod.check(n),n.issues[t].continue=!1,Hl(n.issues,t,e),n}}return i(n,a)}}var Nf=e=>Array.isArray(e)?e.length:-1;function Pf(e,t,n){e.issues.length&&t.issues.push(...zl(n,e.issues)),t.value[n]=e.value}var Ff=H(`$ZodArray`,(e,t)=>{K.init(e,t);let n=fu.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!Array.isArray(a))return r.issues.push({expected:`array`,code:`invalid_type`,input:a,inst:e}),r;r.value=n?n.alloc(e,r,Array(a.length),i):Array(a.length);let o=[],s=i?.abortEarly;for(let e=0;e<a.length;e++){let n=a[e],c=t.element._zod.run({value:n,issues:[]},i);if(c instanceof Promise)o.push(c.then(t=>Pf(t,r,e)));else if(Pf(c,r,e),s&&c.issues.length!==0&&Ll(c))break}return o.length?Promise.all(o).then(()=>r):r},Mf(e,Nf)});function If(e,t,n,r,i,a){let o=n in r,s=a===`optional`;if(o||!s||i!==`optional`){if(e.issues.length){if(i!==void 0&&s&&!o)return;t.issues.push(...zl(n,e.issues))}!o&&i===void 0?e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]}):e.value===void 0?(o||i===`defaulted`&&!s)&&(t.value[n]=void 0):t.value[n]=e.value}}var Lf=[];function Rf(e){let t=Object.keys(e.shape),n=Object.getOwnPropertySymbols(e.shape),r=n.length?n:Lf,i=r.length?[...t,...r]:t;for(let t of i)if(!e.shape?.[t]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);let a=Tl(e.shape);return{...e,allKeys:i,symbolKeys:r,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(a)}}function zf(e,t,n,r,i,a,o){let s=[],c=i.keySet,l=i.catchall._zod,u=l.def.type,d=l.optin,f=l.optout,p=0;for(let i in t){if(o&&n.issues.length!==p){if(Ll(n,p))break;p=n.issues.length}if(c.has(i))continue;if(i===`__proto__`){u===`never`&&s.push(i);continue}if(u===`never`){s.push(i);continue}let a=l.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>If(e,n,i,t,d,f))):If(a,n,i,t,d,f)}return s.length&&n.issues.push({code:`unrecognized_keys`,keys:s,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var Bf=H(`$ZodObject`,(e,t)=>{K.init(e,t);let n=Object.getOwnPropertyDescriptor(t,`shape`),r=n?.get?n.get.raw:t.shape??{};if(r){let e=()=>{let n={...r};return Object.defineProperty(t,"shape",{value:n}),e.raw=n,n};e.raw=r,Object.defineProperty(t,"shape",{get:e})}let i=rl(()=>Rf(t));B(e,`propValues`,e=>{let t=e.def.shape,n={};for(let e in t){let r=t[e]._zod;if(r.values){Object.prototype.hasOwnProperty.call(n,e)||sl(n,e,new Set);for(let t of r.values)n[e].add(t);r.optin!==void 0&&n[e].add(void 0)}}return n});let a=vl,o=t.catchall,s,c=fu.memoizer;c?.attach(e),e._zod.parse=(t,n)=>{s??=i.value;let r=t.value;if(!a(r))return t.issues.push({expected:`object`,code:`invalid_type`,input:r,inst:e}),t;t.value=c?c.alloc(e,t,{},n):{};let l=[],u=s.shape,d=n?.abortEarly,f=t.issues.length;for(let e of s.allKeys){if(d&&t.issues.length!==f){if(Ll(t,f))break;f=t.issues.length}if(e===`__proto__`)continue;let i=u[e],a=i._zod.optin,o=i._zod.optout,s=i._zod.run({value:r[e],issues:[]},n);s instanceof Promise?l.push(s.then(n=>If(n,t,e,r,a,o))):If(s,t,e,r,a,o)}return o?zf(l,r,t,n,i.value,e,d===!0):l.length?Promise.all(l).then(()=>t):t}}),Vf=H(`$ZodObjectJIT`,(e,t)=>{Bf.init(e,t);let n=e._zod.parse,r=rl(()=>Rf(t)),i=fu.memoizer,a=t=>{let n=r.value,a=n.symbolKeys,o=new Id([`payload`,`ctx`],{shape:t,inst:e,memo:i,syms:a}),s=e=>`shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,c=(e,t)=>`
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;o.write(`const input = payload.value;`);let l=Object.create(null),u=0;for(let e of n.allKeys)l[e]=`key_${u++}`;o.write(i?`const newResult = memo.alloc(inst, payload, {}, ctx);`:`const newResult = {};`);for(let e of n.allKeys){if(e===`__proto__`)continue;let n=l[e],r=typeof e==`symbol`?`syms[${a.indexOf(e)}]`:hl(e),i=`${r} in input`,u=t[e],d=u?._zod?.optin,f=d!==void 0,p=u?._zod?.optout===`optional`;if(o.write(`const ${n} = ${s(r)};`),f&&p){let e=d===`optional`?`${n}_present`:`${n}.value !== undefined || ${n}_present`;o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n,r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `)}else f?(o.write(`
        if (${n}.issues.length) {${c(n,r)}
        }
      `),d===`defaulted`?o.write(`newResult[${r}] = ${n}.value;`):o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)):o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n,r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `)}return o.write(`payload.value = newResult;`),o.write(`return payload;`),o.compile()},o,s=vl,c=!fu.jitless,l=c&&yl.value,u=t.catchall,d;e._zod.parse=(i,f)=>{d??=r.value;let p=i.value;return s(p)?c&&l&&f?.async===!1&&f.jitless!==!0?(o||=a(t.shape),i=o(i,f),u?zf([],p,i,f,d,e,f?.abortEarly===!0):i):n(i,f):(i.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),i)}});function Hf(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!Ll(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>Ul(e,r,pu())))}),t)}var Uf=H(`$ZodUnion`,(e,t)=>{K.init(e,t),B(e,`optin`,e=>e.def.options.some(e=>e._zod.optin===`defaulted`)?`defaulted`:e.def.options.some(e=>e._zod.optin!==void 0)?`optional`:void 0),B(e,`optout`,e=>e.def.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),B(e,`values`,e=>{if(e.def.options.every(e=>e._zod.values))return new Set(e.def.options.flatMap(e=>Array.from(e._zod.values)))}),B(e,`pattern`,e=>{if(e.def.options.every(e=>e._zod.pattern)){let t=e.def.options.map(e=>e._zod.pattern);return RegExp(`^(${t.map(e=>al(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>Hf(t,r,e,i)):Hf(o,r,e,i)}}),Wf=H(`$ZodIntersection`,(e,t)=>{K.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>J(e,t,n)):J(e,i,a)}});function Gf(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(bl(e)&&bl(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.prototype.hasOwnProperty.call(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=Gf(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Gf(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function J(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=Gf(t.value,n.value);if(!c.valid){if(Ll(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var Kf=H(`$ZodTuple`,(e,t)=>{K.init(e,t);let n=t.items,r=fu.memoizer;r?.attach(e),e._zod.parse=(i,a)=>{let o=i.value;if(!Array.isArray(o))return i.issues.push({input:o,inst:e,expected:`tuple`,code:`invalid_type`}),i;i.value=r?r.alloc(e,i,[],a):[];let s=[],c=qf(n,`optin`),l=qf(n,`optout`);if(!t.rest){if(o.length<c)return i.issues.push({code:`too_small`,minimum:c,inclusive:!0,input:o,inst:e,origin:`array`}),i;o.length>n.length&&i.issues.push({code:`too_big`,maximum:n.length,inclusive:!0,input:o,inst:e,origin:`array`})}let u=Array(n.length),d=t.rest?a?.abortEarly:void 0,f=!1;for(let e=0;e<n.length;e++){let t=n[e]._zod.run({value:o[e],issues:[]},a);t instanceof Promise?s.push(t.then(t=>{u[e]=t})):(u[e]=t,d&&!f&&t.issues.length&&(f=Ll(t)))}if(t.rest&&!f){let e=n.length-1,r=o.slice(n.length),c=i.issues.length;for(let n of r){if(d&&i.issues.length!==c){if(Ll(i,c))break;c=i.issues.length}e++;let r=t.rest._zod.run({value:n,issues:[]},a);r instanceof Promise?s.push(r.then(t=>Jf(t,i,e))):Jf(r,i,e)}}return s.length?Promise.all(s).then(()=>Yf(u,i,n,o,l)):Yf(u,i,n,o,l)}});function qf(e,t){for(let n=e.length-1;n>=0;n--)if(!(t===`optin`?e[n]._zod.optin!==void 0:e[n]._zod.optout===`optional`))return n+1;return 0}function Jf(e,t,n){e.issues.length&&t.issues.push(...zl(n,e.issues)),t.value[n]=e.value}function Yf(e,t,n,r,i){for(let a=0;a<n.length;a++){let o=e[a],s=a<r.length;if(!s&&a>=i&&n[a]._zod.optin===`optional`){t.value.length=a;break}if(o.issues.length){if(!s&&a>=i){t.value.length=a;break}t.issues.push(...zl(a,o.issues))}t.value[a]=o.value}for(let e=t.value.length-1;e>=r.length&&n[e]._zod.optout===`optional`&&t.value[e]===void 0;e--)t.value.length=e;return t}var Xf=H(`$ZodRecord`,(e,t)=>{K.init(e,t);let n=fu.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!bl(a))return r.issues.push({expected:`record`,code:`invalid_type`,input:a,inst:e}),r;let o=[],s=t.keyType._zod.values;if(s&&!t.partial){r.value=n?n.alloc(e,r,{},i):{};let c=new Set;for(let n of s)if(typeof n==`string`||typeof n==`number`||typeof n==`symbol`){if(c.add(typeof n==`number`?n.toString():n),n===`__proto__`)continue;let s=t.keyType._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(s.issues.length){r.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>Ul(e,i,pu())),input:n,path:[n],inst:e});continue}let l=s.value;if(l===`__proto__`)continue;let u=t.valueType._zod.run({value:a[n],issues:[]},i);u instanceof Promise?o.push(u.then(e=>{e.issues.length&&r.issues.push(...zl(n,e.issues)),r.value[l]=e.value})):(u.issues.length&&r.issues.push(...zl(n,u.issues)),r.value[l]=u.value)}let l;for(let e in a)if(!c.has(e)){if(t.mode===`loose`){if(e===`__proto__`)continue;r.value[e]=a[e]}else l??=[],l.push(e)}l&&l.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:l,continue:!0})}else{r.value=n?n.alloc(e,r,{},i):{};let c;for(let n of Reflect.ownKeys(a)){if(n===`__proto__`||!Object.prototype.propertyIsEnumerable.call(a,n))continue;let l=t.keyType._zod.run({value:n,issues:[]},i);if(l instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof n==`string`&&md.test(n)&&l.issues.length){let e=t.keyType._zod.run({value:Number(n),issues:[]},i);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(l=e)}if(l.issues.length){t.mode===`loose`?r.value[n]=a[n]:s?(c??=[],c.push(n)):r.issues.push({code:`invalid_key`,origin:`record`,issues:l.issues.map(e=>Ul(e,i,pu())),input:n,path:[n],inst:e});continue}let u=l.value;if(u===`__proto__`)continue;let d=t.valueType._zod.run({value:a[n],issues:[]},i);d instanceof Promise?o.push(d.then(e=>{e.issues.length&&r.issues.push(...zl(n,e.issues)),r.value[u]=e.value})):(d.issues.length&&r.issues.push(...zl(n,d.issues)),r.value[u]=d.value)}c&&c.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:c,continue:!0})}return o.length?Promise.all(o).then(()=>r):r}}),Zf=H(`$ZodEnum`,(e,t)=>{K.init(e,t);let n=$c(t.entries),r=new Set(n);e._zod.values=r,B(e,`pattern`,e=>{let t=$c(e.def.entries).filter(e=>Sl.has(typeof e));return RegExp(t.length?`^(${t.map(e=>Cl(e.toString())).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Qf=H(`$ZodLiteral`,(e,t)=>{K.init(e,t);let n=new Set(t.values);e._zod.values=n,B(e,`pattern`,e=>{let t=e.def.values;return RegExp(t.length?`^(${t.map(e=>typeof e==`string`?Cl(e):e?Cl(e.toString()):String(e)).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(r,i)=>{let a=r.value;return n.has(a)||r.issues.push({code:`invalid_value`,values:t.values,input:a,inst:e}),r}}),$f=H(`$ZodTransform`,(e,t)=>{K.init(e,t),e._zod.optin=`optional`,fu.memoizer?.guard(e),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new du(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n));if(i instanceof Promise)throw new uu;return n.value=i,n}});function ep(e,t){return e.value=t.issues.length?void 0:t.value,e}var tp=H(`$ZodOptional`,(e,t)=>{K.init(e,t),B(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),e._zod.optout=`optional`,B(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t,void 0]):void 0}),B(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${al(t.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(e.value===void 0){if(t.innerType._zod.optin!==`defaulted`)return e;let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(t=>ep(e,t)):ep(e,r)}return t.innerType._zod.run(e,n)}}),np=H(`$ZodExactOptional`,(e,t)=>{tp.init(e,t),B(e,`values`,e=>e.def.innerType._zod.values),B(e,`pattern`,e=>e.def.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),rp=H(`$ZodNullable`,(e,t)=>{K.init(e,t),B(e,`optin`,e=>e.def.innerType._zod.optin),B(e,`optout`,e=>e.def.innerType._zod.optout),B(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${al(t.source)}|null)$`):void 0}),B(e,`values`,e=>e.def.innerType._zod.values?new Set([...e.def.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),ip=H(`$ZodDefault`,(e,t)=>{K.init(e,t),e._zod.optin=`defaulted`,B(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>Y(e,t)):Y(r,t)}});function Y(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var ap=H(`$ZodPrefault`,(e,t)=>{K.init(e,t),e._zod.optin=`defaulted`,B(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),op=H(`$ZodNonOptional`,(e,t)=>{K.init(e,t),B(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>sp(t,e)):sp(i,e)}});function sp(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}function cp(e,t,n,r){return t.issues.length?(e.value=n.catchValue({...t,value:e.value,error:{issues:t.issues.map(e=>Ul(e,r,pu()))},input:e.value}),e):(e.value=t.value,t.memo&&(e.memo=!0),e)}var lp=H(`$ZodCatch`,(e,t)=>{K.init(e,t),B(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),B(e,`optout`,e=>e.def.innerType._zod.optout),B(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(r=>cp(e,r,t,n)):cp(e,r,t,n)}}),up=H(`$ZodPipe`,(e,t)=>{K.init(e,t),B(e,`values`,e=>e.def.in._zod.values),B(e,`optin`,e=>e.def.in._zod.optin),B(e,`optout`,e=>e.def.out._zod.optout),B(e,`propValues`,e=>e.def.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>dp(e,t.in,n)):dp(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>dp(e,t.out,n)):dp(r,t.out,n)}});function dp(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},n)}var fp=H(`$ZodReadonly`,(e,t)=>{K.init(e,t),B(e,`propValues`,e=>e.def.innerType._zod.propValues),B(e,`values`,e=>e.def.innerType._zod.values),B(e,`optin`,e=>e.def.innerType?._zod?.optin),B(e,`optout`,e=>e.def.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(pp):pp(r)}});function pp(e){return e.memo||(e.value=Object.freeze(e.value)),e}var mp=H(`$ZodCustom`,(e,t)=>{vd.init(e,t),K.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>hp(t,n,r,e));hp(i,n,r,e)}});function hp(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(Jl(e))}}var gp=class extends Error{constructor(){super(`Cannot parse a reference cycle that closes through a transform`),this.name=`ZodCyclicError`}},_p=`~memo`,vp=[];function yp(e){return typeof e==`object`&&!!e}function bp(e){return e.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}var xp=new WeakMap,Sp=0,Cp=1,wp=2;function Tp(e,t,n){let r=xp.get(e);if(r!==void 0)return r?wp:Sp;if(t.has(e))return wp;t.add(e);let i=Sp,a=e=>{if(i!==wp&&e?._zod){let r=Tp(e,t,n);r>i&&(i=r)}},o=(e,r)=>{let i=Sp;for(let a of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,a);if(r&&!o.enumerable)continue;let s=o.get?Cp:o.value?._zod?Tp(o.value,t,n):Sp;s>i&&(i=s)}return i},s=e=>{e>i&&(i=e)},c=e._zod.def;switch(c.type){case`object`:{let e=cl(c);s(e?o(e,!0):Cp),a(c.catchall);break}case`array`:a(c.element);break;case`tuple`:for(let e of c.items)a(e);a(c.rest);break;case`record`:case`map`:a(c.keyType),a(c.valueType);break;case`set`:a(c.valueType);break;case`union`:for(let e of c.options)a(e);break;case`intersection`:a(c.left),a(c.right);break;case`optional`:case`nullable`:case`default`:case`prefault`:case`catch`:case`readonly`:case`nonoptional`:case`promise`:case`success`:a(c.innerType);break;case`pipe`:a(c.in),a(c.out);break;case`function`:a(c.input),a(c.output);break;case`lazy`:{let r=c._cachedInner??(n?e._zod.innerType:void 0);s(r?Tp(r,t,!1):Cp);break}case`template_literal`:case`string`:case`number`:case`int`:case`boolean`:case`bigint`:case`symbol`:case`undefined`:case`null`:case`void`:case`never`:case`any`:case`unknown`:case`date`:case`nan`:case`enum`:case`literal`:case`file`:case`transform`:case`custom`:break;default:for(let e in c){let t=Object.getOwnPropertyDescriptor(c,e);if(!t||t.get)continue;let n=t.value;if(n&&typeof n==`object`){if(n._zod)a(n);else if(Array.isArray(n))for(let e of n)a(e)}}}return t.delete(e),Ep(e,i)}function Ep(e,t){return t!==Cp&&xp.set(e,t===wp),t}function Dp(e,t){let n=e.buckets.get(t);return n||(n=new WeakMap,e.buckets.set(t,n)),n}var Op,kp=[],Ap={alloc(e,t,n){let r=Op;if(!r)return n;Op=void 0;let i={value:n,issues:null};return r.set(t.value,i),kp.push(i),n},guard(e){var t;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,n=(e,n)=>{if(n.direction!==`backward`&&Mp(n,e.value))throw new gp;return t(e,n)};e._zod.parse=n,e._zod.run===t&&(e._zod.run=n)})},attach(e){var t;let n,r=!1,i,a;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,o=(s,c)=>{if(n===void 0){let i=Tp(e,new Set,!1);if(i===Sp)return e._zod.parse=t,e._zod.run===o&&(e._zod.run=t),t(s,c);i===wp||r?n=!0:r=!0}let l=s.value;if(!yp(l))return t(s,c);let u=c[_p];u||(u={buckets:new WeakMap,backEdges:void 0},c[_p]=u);let d;i===c?d=a:(d=Dp(u,e),i=c,a=d);let f=d.get(l);if(f)return s.value=f.value,f.issues?f.issues.length&&s.issues.push(...bp(f.issues)):(s.memo=!0,u.backEdges??(u.backEdges=new WeakSet),u.backEdges.add(f.value)),s;Op=d;let p=kp.length,m=t(s,c);Op=void 0;let h=kp.length>p?kp.pop():void 0;return m instanceof Promise?m.then(e=>(h&&(h.issues=e.issues.length?bp(e.issues):vp),e)):(h&&(h.issues=m.issues.length?bp(m.issues):vp),m)};e._zod.parse=o,e._zod.run===t&&(e._zod.run=o)})}};function jp(){return Ap}function Mp(e,t){let n=e[_p]?.backEdges;return n!==void 0&&yp(t)&&n.has(t)}var Np=()=>{let e={string:{unit:`characters`,verb:`to have`},file:{unit:`bytes`,verb:`to have`},array:{unit:`items`,verb:`to have`},set:{unit:`items`,verb:`to have`},map:{unit:`entries`,verb:`to have`}};function t(t){return e[t]??null}let n={regex:`input`,email:`email address`,url:`URL`,emoji:`emoji`,uuid:`UUID`,uuidv4:`UUIDv4`,uuidv6:`UUIDv6`,nanoid:`nanoid`,guid:`GUID`,cuid:`cuid`,cuid2:`cuid2`,ulid:`ULID`,xid:`XID`,ksuid:`KSUID`,datetime:`ISO datetime`,date:`ISO date`,time:`ISO time`,duration:`ISO duration`,ipv4:`IPv4 address`,ipv6:`IPv6 address`,mac:`MAC address`,cidrv4:`IPv4 range`,cidrv6:`IPv6 range`,base64:`base64-encoded string`,base64url:`base64url-encoded string`,json_string:`JSON string`,e164:`E.164 number`,currency_code:`currency code`,credit_card:`credit card number`,iban:`IBAN`,jwt:`JWT`,template_literal:`input`},r={nan:`NaN`};function i(e,t){return e===`number`&&typeof t==`number`&&!Number.isFinite(t)?String(t):r[e]??e}return e=>{switch(e.code){case`invalid_type`:return`Invalid input: expected ${i(e.expected)}, received ${i(ql(e.input),e.input)}`;case`invalid_value`:return e.values.length===1?`Invalid input: expected ${wl(e.values[0])}`:`Invalid option: expected one of ${el(e.values,`|`)}`;case`too_big`:{let n=e.exact?`exactly `:e.inclusive?`<=`:`<`,r=t(e.origin);return r?`Too big: expected ${e.origin??`value`} to have ${n}${e.maximum.toString()} ${r.unit??`elements`}`:`Too big: expected ${e.origin??`value`} to be ${n}${e.maximum.toString()}`}case`too_small`:{let n=e.exact?`exactly `:e.inclusive?`>=`:`>`,r=t(e.origin);return r?`Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}`:`Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`}case`invalid_format`:{let t=e;return t.format===`starts_with`?`Invalid string: must start with "${t.prefix}"`:t.format===`ends_with`?`Invalid string: must end with "${t.suffix}"`:t.format===`includes`?`Invalid string: must include "${t.includes}"`:t.format===`regex`?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${n[t.format]??e.format}`}case`not_multiple_of`:return`Invalid number: must be a multiple of ${e.divisor}`;case`unrecognized_keys`:return`Unrecognized key${e.keys.length>1?`s`:``}: ${el(e.keys,`, `)}`;case`invalid_key`:return`Invalid key in ${e.origin}`;case`invalid_union`:return e.options&&Array.isArray(e.options)&&e.options.length>0?`Invalid discriminator value. Expected ${e.options.map(e=>`'${e}'`).join(` | `)}`:e.inclusive===!1?`Invalid input: more than one option matched`:`Invalid input`;case`invalid_element`:return`Invalid value in ${e.origin}`;default:return`Invalid input`}}};function Pp(){return{localeError:Np()}}var Fp,Ip=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Lp(){return new Ip}(Fp=globalThis).__zod_globalRegistry??(Fp.__zod_globalRegistry=Lp());var Rp=globalThis.__zod_globalRegistry;function zp(e){return e.checks&&=[...e.checks],e}function Bp(e,t){return new e(zp({type:`string`,...z(t)}))}function Vp(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...z(t)})}function Hp(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...z(t)})}function Up(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...z(t)})}function Wp(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...z(t)})}function Gp(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...z(t)})}function Kp(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...z(t)})}function qp(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...z(t)})}function Jp(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...z(t)})}function Yp(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...z(t)})}function Xp(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...z(t)})}function Zp(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...z(t)})}function Qp(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...z(t)})}function $p(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...z(t)})}function em(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...z(t)})}function tm(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...z(t)})}function nm(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...z(t)})}function rm(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...z(t)})}function im(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...z(t)})}function am(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...z(t)})}function om(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...z(t)})}function sm(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...z(t)})}function cm(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...z(t)})}function lm(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...z(t)})}function um(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...z(t)})}function dm(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...z(t)})}function fm(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...z(t)})}function pm(e,t){return new e(zp({type:`number`,checks:[],...z(t)}))}function mm(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...z(t)})}function hm(e,t){return new e({type:`boolean`,...z(t)})}function gm(e){return new e({type:`unknown`})}function _m(e,t){return new e({type:`never`,...z(t)})}function vm(e,t){return new xd({check:`less_than`,...z(t),value:e,inclusive:!1})}function ym(e,t){return new xd({check:`less_than`,...z(t),value:e,inclusive:!0})}function bm(e,t){return new Sd({check:`greater_than`,...z(t),value:e,inclusive:!1})}function xm(e,t){return new Sd({check:`greater_than`,...z(t),value:e,inclusive:!0})}function Sm(e,t){return new Cd({check:`multiple_of`,...z(t),value:e})}function Cm(e,t){return new Td({check:`max_length`,...z(t),maximum:e})}function wm(e,t){return new Ed({check:`min_length`,...z(t),minimum:e})}function Tm(e,t){return new Dd({check:`length_equals`,...z(t),length:e})}function Em(e,t){return new kd({check:`string_format`,format:`regex`,...z(t),pattern:e})}function Dm(e){return new Ad({check:`string_format`,format:`lowercase`,...z(e)})}function Om(e){return new jd({check:`string_format`,format:`uppercase`,...z(e)})}function km(e,t){return new Md({check:`string_format`,format:`includes`,...z(t),includes:e})}function Am(e,t){return new Nd({check:`string_format`,format:`starts_with`,...z(t),prefix:e})}function jm(e,t){return new Pd({check:`string_format`,format:`ends_with`,...z(t),suffix:e})}function Mm(e){return new Fd({check:`overwrite`,tx:e})}function Nm(e){return Mm(t=>t.normalize(e))}function Pm(){return Mm(e=>e.trim())}function Fm(){return Mm(e=>e.toLowerCase())}function Im(){return Mm(e=>e.toUpperCase())}function Lm(){return Mm(e=>gl(e))}function Rm(e,t,n){return new e({type:`array`,element:t,...z(n)})}function zm(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...z(n)})}function Bm(e,t){let n=Vm(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(Jl(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,`input`in r||(r.input=t.value),r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(Jl(r))}},e(t.value,t)),t);return n}function Vm(e,t){let n=new vd({check:`custom`,...z(t)});return n._zod.check=e,n}function Hm(e,...t){for(let n of t)for(let t of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,t)&&sl(e,t,n[t]);return e}function Um(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Rp,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,intersections:[],deferred:[],external:e?.external??void 0}}function Wm(e,t,n,r,i){let a=typeof t.unrepresentable==`function`?t.unrepresentable({zodSchema:e,path:r.path,message:i}):t.unrepresentable;if(a===`any`)return!1;if(a===void 0||a===`throw`)throw Error(i);return Object.assign(n,a),!0}function Gm(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o),t.sharedDefsExtractedFor=void 0,t.sharedEmitDoneFor=void 0;let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Gm(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Hm(o.schema,c),t.io===`input`&&th(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Km(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function qm(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);if(e.external&&e.sharedDefsExtractedFor===e.external)return;let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${Km(a)}`}}let i=`#/${r}/`;if(t[1]===n&&!t[1].schema.id)return{ref:`#`};let a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+Km(a)}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0])a(n);else{if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}(e.metadataRegistry.get(n[0])?.id||r.cycle||r.count>1&&e.reused===`ref`)&&a(n)}}e.external&&(e.sharedDefsExtractedFor=e.external)}function Jm(e){let t=e.anyOf;if(!Array.isArray(t)||t.length===0||e.type!==void 0)return;let n=[];for(let e of t){if(!e||typeof e!=`object`)return;Jm(e);let t=Object.keys(e);if(t.length!==1||t[0]!==`type`)return;let r=e.type;for(let e of Array.isArray(r)?r:[r]){if(typeof e!=`string`)return;n.includes(e)||n.push(e)}}delete e.anyOf,e.type=n.length===1?n[0]:n}var Ym=new Set([`type`,`properties`,`required`,`additionalProperties`]),Xm=[`oneOf`,`anyOf`];function Zm(e){let t=e.additionalProperties;return t===void 0||t===!1||typeof t!=`object`||!t?null:Object.keys(t).length?t:null}function Qm(e){let t=[];for(let n of e){if(typeof n!=`object`||n.type!==`object`)return null;for(let e in n)if(!Ym.has(e))return null;t.push(n)}let n={},r=new Set;for(let e of t){for(let r in e.properties){if(Object.prototype.hasOwnProperty.call(n,r))continue;let e=[];for(let n of t){let t=n.properties?.[r]??Zm(n);t!=null&&(e.some(e=>JSON.stringify(e)===JSON.stringify(t))||e.push(t))}sl(n,r,e.length===1?e[0]:Qm(e)??{allOf:e})}for(let t of e.required??[])r.add(t)}let i={type:`object`,properties:n};if(r.size&&(i.required=[...r]),t.every(e=>e.additionalProperties===!1))i.additionalProperties=!1;else{let e=[];for(let n of t){let t=Zm(n);t&&!e.some(e=>JSON.stringify(e)===JSON.stringify(t))&&e.push(t)}e.length===1?i.additionalProperties=e[0]:e.length>1&&(i.additionalProperties={allOf:e})}return i}function $m(e){let t=e.allOf;if(!Array.isArray(t)||t.length<2)return;for(let t of Ym)if(t in e)return;let n=t.filter(e=>Xm.some(t=>Array.isArray(e[t]))),r=null;if(!n.length)r=Qm(t);else{let e=n[0],i=Xm.find(t=>Array.isArray(e[t]));if(Object.keys(e).length!==1)return;let a=t.filter(t=>t!==e),o=e[i].map(e=>Qm([...a,e]));if(o.some(e=>!e))return;r={[i]:o}}r&&(delete e.allOf,Hm(e,r))}function eh(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Hm(i,s),Hm(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};if(!e.external||e.sharedEmitDoneFor!==e.external){for(let t of[...e.seen.entries()].reverse())r(t[0]);if(e.target!==`openapi-3.0`)for(let t of e.seen.entries())Jm(t[1].def??t[1].schema);for(let t of e.deferred)t();if(e.intersections.length){let t=new Map;for(let n of e.seen.values())for(let e of[n.schema,n.def]){let n=e?.allOf;if(!Array.isArray(n))continue;let r=t.get(n);r?r.push(e):t.set(n,[e])}for(let n of e.intersections)for(let e of t.get(n)??[])$m(e)}}let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Hm(i,n.defId?n.schema:n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};if(!e.external||e.sharedEmitDoneFor!==e.external)for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,sl(o,e.defId,e.def))}e.external&&(e.sharedEmitDoneFor=e.external),e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:rh(t,`input`,e.processors),output:rh(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function th(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return th(r.element,n);if(r.type===`set`)return th(r.valueType,n);if(r.type===`lazy`)return th(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`||r.type===`catch`)return th(r.innerType,n);if(r.type===`intersection`)return th(r.left,n)||th(r.right,n);if(r.type===`record`||r.type===`map`)return th(r.keyType,n)||th(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:th(r.in,n)||th(r.out,n);if(r.type===`object`){for(let e in r.shape)if(th(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(th(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(th(e,n))return!0;return!!(r.rest&&th(r.rest,n))}return!1}var nh=(e,t={})=>n=>{let r=Um({...n,processors:t});return Gm(e,r),qm(r,e),eh(r,e)},rh=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Um({...i??{},target:a,io:t,processors:n});return Gm(e,o),qm(o,e),eh(o,e)},ih=(e,t,n)=>{(e[t]===void 0||n>e[t])&&(e[t]=n)},ah=(e,t,n)=>{(e[t]===void 0||n<e[t])&&(e[t]=n)},oh=(e,t)=>{ih(e,`minimum`,t),ah(e,`maximum`,t)},sh=(e,t)=>{e.multipleOf??=[],e.multipleOf.includes(t)||e.multipleOf.push(t)},ch=(e,t)=>{e.patterns??=new Set,e.patterns.add(t)},lh=(e,t)=>{e.mime=e.mime?e.mime.filter(e=>t.includes(e)):[...t]},uh=(e,t)=>{e.format=t,t.includes(`int`)&&(e.isInt=!0)},dh=(e,t)=>ih(e,`minimum`,t.minimum),fh=(e,t)=>ah(e,`maximum`,t.maximum),ph=e=>(t,n)=>{uh(t,n.format);let[r,i]=e[n.format];ih(t,`minimum`,r),ah(t,`maximum`,i)},mh={greater_than:(e,t)=>ih(e,t.inclusive?`minimum`:`exclusiveMinimum`,t.value),less_than:(e,t)=>ah(e,t.inclusive?`maximum`:`exclusiveMaximum`,t.value),multiple_of:(e,t)=>sh(e,t.value),number_format:ph(El),bigint_format:ph(Dl),min_length:dh,max_length:fh,length_equals:(e,t)=>oh(e,t.length),min_size:dh,max_size:fh,size_equals:(e,t)=>oh(e,t.size),string_format:(e,t)=>{uh(e,t.format),t.pattern&&ch(e,t.pattern),(t.format===`base64`||t.format===`base64url`)&&(e.contentEncoding=t.format),(t.local||t.precision===-1)&&(e.laxFormat=!0)},mime_type:(e,t)=>lh(e,t.mime)};function hh(e){let t={},n=e._zod.def,r=e._zod.traits.has(`$ZodCheck`)?[e,...n.checks??[]]:n.checks??[];for(let e of r)mh[e._zod.def.check]?.(t,e._zod.def);let i=e._zod.bag;i.minimum!==void 0&&ih(t,`minimum`,i.minimum),i.exclusiveMinimum!==void 0&&ih(t,`exclusiveMinimum`,i.exclusiveMinimum),i.maximum!==void 0&&ah(t,`maximum`,i.maximum),i.exclusiveMaximum!==void 0&&ah(t,`exclusiveMaximum`,i.exclusiveMaximum),i.multipleOf!==void 0&&sh(t,i.multipleOf),i.format!==void 0&&(t.format??=i.format,i.format.includes(`int`)&&(t.isInt=!0)),i.mime&&lh(t,i.mime);for(let e of i.patterns??[])ch(t,e);return t}var gh={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},_h=new Map([[yf,W],[xf,G]]),vh=e=>_h.get(e)??e,yh=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l,laxFormat:u}=hh(e);if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=gh[s]??s,i.format===``&&delete i.format,(s===`time`||u)&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c].map(vh);e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},bh=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,multipleOf:s,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=hh(e);i.type=u?`integer`:`number`;let d=typeof l==`number`&&l>=(a??-1/0),f=typeof c==`number`&&c<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;if(d?p?(i.minimum=l,i.exclusiveMinimum=!0):i.exclusiveMinimum=l:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=c,i.exclusiveMaximum=!0):i.exclusiveMaximum=c:typeof o==`number`&&(i.maximum=o),s){let n=new Set;for(let a of s)Number.isFinite(a)&&a!==0?n.add(Math.abs(a)):Wm(e,t,i,r,`A multipleOf divisor of ${a} cannot be represented in JSON Schema`);let[a,...o]=n;a!==void 0&&(i.multipleOf=a),o.length&&(i.allOf=[...i.allOf??[],...o.map(e=>({multipleOf:e}))])}},xh=(e,t,n,r)=>{n.type=`boolean`},Sh=(e,t,n,r)=>{n.not={}},Ch=(e,t,n,r)=>{let i=e._zod.def,a=$c(i.entries);a.length===0?n.not={}:(a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a)},wh=(e,t,n,r)=>{let i=e._zod.def;if(i.values.length===0){n.not={};return}let a=[];for(let o of i.values)if(o===void 0){if(Wm(e,t,n,r,"Literal `undefined` cannot be represented in JSON Schema"))return}else if(typeof o==`bigint`){if(Wm(e,t,n,r,`BigInt literals cannot be represented in JSON Schema`))return;a.push(Number(o))}else a.push(o);if(a.length!==0){if(a.length===1){let e=a[0];n.type=e===null?`null`:typeof e,t.target===`draft-04`||t.target===`openapi-3.0`?n.enum=[e]:n.const=e}else a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),a.every(e=>typeof e==`boolean`)&&(n.type=`boolean`),a.every(e=>e===null)&&(n.type=`null`),n.enum=a}},Th=(e,t,n,r)=>{Wm(e,t,n,r,`Custom types cannot be represented in JSON Schema`)},Eh=(e,t,n,r)=>{Wm(e,t,n,r,`Transforms cannot be represented in JSON Schema`)},Dh=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=hh(e);typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Gm(a.element,t,{...r,path:[...r.path,`items`]})};function Oh(e){let t=e._zod.def;return t.type===`pipe`&&t.in._zod.traits.has(`$ZodTransform`)?Oh(t.out):t.type===`catch`?Oh(t.innerType):e._zod.optin}var kh=(e,t,n,r)=>{let i=n,a=e._zod.def,o=a.shape;if(Object.getOwnPropertySymbols(o).length&&Wm(e,t,i,r,`Symbol keys cannot be represented in JSON Schema`))return;i.type=`object`,i.properties={};for(let e in o)sl(i.properties,e,Gm(o[e],t,{...r,path:[...r.path,`properties`,e]}));let s=[];for(let e of Object.keys(o)){let n=a.shape[e];(t.io===`input`?Oh(n)===void 0:n._zod.optout===void 0)&&s.push(e)}s.length>0&&(i.required=s),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Gm(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},Ah=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Gm(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},jh=(e,t,n,r)=>{let i=e._zod.def,a=Gm(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Gm(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1,c=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]];n.allOf=c,t.intersections.push(c)},Mh=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`array`;let o=t.target===`draft-2020-12`?`prefixItems`:`items`,s=t.target===`draft-2020-12`||t.target===`openapi-3.0`?`items`:`additionalItems`,c=a.items.map((e,n)=>Gm(e,t,{...r,path:[...r.path,o,n]})),l=a.rest?Gm(a.rest,t,{...r,path:[...r.path,s,...t.target===`openapi-3.0`?[a.items.length]:[]]}):null,u=a.items.length;for(;u>0;){let e=a.items[u-1];if(!(t.io===`input`?Oh(e)!==void 0:e._zod.optout===`optional`))break;u--}let d=a.items.length,f=!a.rest;t.target===`draft-2020-12`?(i.prefixItems=c,f?i.items=!1:l&&(i.items=l),u>0&&(i.minItems=u),f&&(i.maxItems=d)):t.target===`openapi-3.0`?(i.items={anyOf:c},l&&i.items.anyOf.push(l),u>0&&(i.minItems=u),f&&(i.maxItems=d)):(i.items=c,f?i.additionalItems=!1:l&&(i.additionalItems=l),u>0&&(i.minItems=u),f&&(i.maxItems=d));let{minimum:p,maximum:m}=hh(e);typeof p==`number`&&(i.minItems=p),typeof m==`number`&&(i.maxItems=m)};function Nh(e,t,n){if(t.$ref){if(n.has(t))return t;n.add(t);let r=e.get(t)?.def;if(!r)return t;let i=Nh(e,r,n);return i===r?t:i}for(let r of[`anyOf`,`oneOf`]){let i=t[r];if(!Array.isArray(i))continue;let a=i.map(t=>Nh(e,t,n));a.some((e,t)=>e!==i[t])&&(t={...t,[r]:a})}let r=Array.isArray(t.type)?t.type:[t.type],i=!r.includes(`string`)&&r.some(e=>e===`number`||e===`integer`),a=t.enum??(t.const===void 0?void 0:[t.const]);if(!i&&!a?.some(e=>typeof e==`number`))return t;let{minimum:o,maximum:s,exclusiveMinimum:c,exclusiveMaximum:l,multipleOf:u,format:d,id:f,...p}=t;return p.enum?p.enum=p.enum.map(e=>typeof e==`number`?String(e):e):typeof p.const==`number`&&(p.const=String(p.const)),i&&(p.type=`string`,a||(p.pattern=(r.includes(`number`)?md:pd).source)),p}var Ph=new WeakMap;function Fh(e){let t=new Map;for(let n of e.seen.values())n.def&&!t.has(n.schema)&&t.set(n.schema,n);let n=new Map;for(let r of Ph.get(e)??[]){let i=e.seen.get(r),a=(i?.def??i?.schema)?.propertyNames;if(!a||a===!0||n.has(a))continue;let o=Nh(t,a,new Set);o!==a&&n.set(a,o)}if(n.size)for(let t of e.seen.values())for(let e of[t.schema,t.def]){let t=e&&n.get(e.propertyNames);t&&(e.propertyNames=t)}}var Ih=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=hh(o).patterns;if(a.mode===`loose`&&s&&s.size>0){let e=Gm(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)sl(i.patternProperties,vh(t).source,e)}else{if(t.target===`draft-07`||t.target===`draft-2020-12`){i.propertyNames=Gm(a.keyType,t,{...r,path:[...r.path,`propertyNames`]});let n=Ph.get(t);n||(n=[],Ph.set(t,n),t.deferred.push(()=>Fh(t))),n.push(e)}i.additionalProperties=Gm(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]})}let c=o._zod.values,l=t.io===`input`&&Oh(a.valueType)!==void 0;if(c&&!a.partial&&!l){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e.map(String))}},Lh=(e,t,n,r)=>{let i=e._zod.def,a=Gm(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},Rh=(e,t,n,r)=>{let i=e._zod.def;Gm(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},zh=Symbol();function Bh(e,t,n,r,i){let a=!1,o=JSON.stringify(e,(e,t)=>typeof t==`bigint`?(a=!0,null):t);return a?(Wm(t,n,r,i,`BigInt defaults cannot be represented in JSON Schema`),zh):JSON.parse(o)}var Vh=(e,t,n,r)=>{let i=e._zod.def;Gm(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o=Bh(i.defaultValue,e,t,n,r);o!==zh&&(n.default=o)},Hh=(e,t,n,r)=>{let i=e._zod.def;Gm(i.innerType,t,r);let a=t.seen.get(e);if(a.ref=i.innerType,t.io!==`input`)return;let o=Bh(i.defaultValue,e,t,n,r);o!==zh&&(n._prefault=o)},Uh=(e,t,n,r)=>{let i=e._zod.def;Gm(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{Wm(e,t,n,r,`Dynamic catch values are not supported in JSON Schema`);return}n.default=o},Wh=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Gm(o,t,r);let s=t.seen.get(e);s.ref=o},Gh=(e,t,n,r)=>{let i=e._zod.def;Gm(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},Kh=(e,t,n,r)=>{let i=e._zod.def;Gm(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},qh=new WeakSet([Object.prototype,Error.prototype]);function Jh(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var Yh=H(`ZodError`,(e,t)=>{yu.init(e,t),e.name=`ZodError`;let n=Object.getPrototypeOf(e);qh.has(n)||(qh.add(n),Jh(n,`format`,e=>t=>Su(e,t)),Jh(n,`flatten`,e=>t=>xu(e,t)),Jh(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,tl,2)}),Jh(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,tl,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},void 0,{Parent:Error}),Xh=wu(Yh),Zh=Tu(Yh),Qh=Eu(Yh),$h=Ou(Yh),eg=Pu(Yh),tg=Fu(Yh),ng=Iu(Yh),rg=Lu(Yh),ig=Ru(Yh),ag=zu(Yh),og=Bu(Yh),sg=Vu(Yh);function cg(){fu.localeError||pu(Pp())}function lg(){fu.memoizer||pu({memoizer:jp()})}var ug=H(`ZodType`,(e,t)=>(cg(),K.init(e,t),e.def=t,e.type=t.type,e),{check(...e){let t=this.def;return this.clone(ml(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return R(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(j_(e,t))},superRefine(e,t){return this.check(M_(e,t))},overwrite(e){return this.check(Mm(e))},optional(){return p_(this)},exactOptional(){return h_(this)},nullable(){return __(this)},nullish(){return p_(__(this))},nonoptional(e){return C_(this,e)},array(){return Yg(this)},or(e){return $g([this,e])},and(e){return t_(this,e)},transform(e){return D_(this,d_(e))},default(e){return y_(this,e)},prefault(e){return x_(this,e)},catch(e){return T_(this,e)},pipe(e){return D_(this,e)},readonly(){return k_(this)},describe(e){let t=this.clone();return Rp.add(t,{description:e}),t},meta(...e){if(e.length===0)return Rp.get(this);let t=this.clone();return Rp.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e,...t){return t.length===0?e(this):e(this,...t)},get"~standard"(){return Zl(this,`~standard`,{...Bd(this),jsonSchema:{input:rh(this,`input`),output:rh(this,`output`)}})},set"~standard"(e){Xl(this,`~standard`,e)},parse:function e(t,n){return Xh(this,t,n,{callee:e})},parseAsync:async function e(t,n){return await Zh(this,t,n,{callee:e})},safeParse(e,t){return Qh(this,e,t)},async safeParseAsync(e,t){return $h(this,e,t)},get spa(){return this?.safeParseAsync},set spa(e){Xl(this,`spa`,e)},validate(e,t){return ju(this,e,t)},validateAsync(e,t){return Nu(this,e,t)},encode:function e(t,n){return eg(this,t,n,{callee:e})},decode:function e(t,n){return tg(this,t,n,{callee:e})},encodeAsync:async function e(t,n){return await ng(this,t,n,{callee:e})},decodeAsync:async function e(t,n){return await rg(this,t,n,{callee:e})},safeEncode(e,t){return ig(this,e,t)},safeDecode(e,t){return ag(this,e,t)},async safeEncodeAsync(e,t){return og(this,e,t)},async safeDecodeAsync(e,t){return sg(this,e,t)},toJSONSchema(e){return nh(this,{})(e)},get description(){return Rp.get(this)?.description},get _def(){return this._zod.def}}),dg=H(`_ZodString`,(e,t)=>{Vd.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>yh(e,t,n,r)},Ql({format:e=>hh(e).format??null,minLength:e=>hh(e).minimum??null,maxLength:e=>hh(e).maximum??null},{regex(...e){return this.check(Em(...e))},includes(...e){return this.check(km(...e))},startsWith(...e){return this.check(Am(...e))},endsWith(...e){return this.check(jm(...e))},min(...e){return this.check(wm(...e))},max(...e){return this.check(Cm(...e))},length(...e){return this.check(Tm(...e))},nonempty(...e){return this.check(wm(1,...e))},lowercase(e){return this.check(Dm(e))},uppercase(e){return this.check(Om(e))},trim(){return this.check(Pm())},normalize(...e){return this.check(Nm(...e))},toLowerCase(){return this.check(Fm())},toUpperCase(){return this.check(Im())},slugify(){return this.check(Lm())}})),fg=H(`ZodString`,(e,t)=>{Vd.init(e,t),dg.init(e,t)},{email(e){return this.check(Vp(yg,e))},url(e){return this.check(qp(Sg,e))},jwt(e){return this.check(cm(Lg,e))},emoji(e){return this.check(Jp(Cg,e))},guid(e){return this.check(Hp(bg,e))},uuid(e){return this.check(Up(xg,e))},uuidv4(e){return this.check(Wp(xg,e))},uuidv6(e){return this.check(Gp(xg,e))},uuidv7(e){return this.check(Kp(xg,e))},nanoid(e){return this.check(Yp(wg,e))},cuid(e){return this.check(Xp(Tg,e))},cuid2(e){return this.check(Zp(Eg,e))},ulid(e){return this.check(Qp(Dg,e))},base64(e){return this.check(am(Pg,e))},base64url(e){return this.check(om(Fg,e))},xid(e){return this.check($p(Og,e))},ksuid(e){return this.check(em(kg,e))},ipv4(e){return this.check(tm(Ag,e))},ipv6(e){return this.check(nm(jg,e))},cidrv4(e){return this.check(rm(Mg,e))},cidrv6(e){return this.check(im(Ng,e))},e164(e){return this.check(sm(Ig,e))},datetime(e){return this.check(lm(hg,e))},date(e){return this.check(um(gg,e))},time(e){return this.check(dm(_g,e))},duration(e){return this.check(fm(vg,e))}});function pg(e){return Bp(fg,e)}var mg=H(`ZodStringFormat`,(e,t)=>{q.init(e,t),dg.init(e,t)}),hg=H(`ZodISODateTime`,(e,t)=>{sf.init(e,t),mg.init(e,t)}),gg=H(`ZodISODate`,(e,t)=>{cf.init(e,t),mg.init(e,t)}),_g=H(`ZodISOTime`,(e,t)=>{lf.init(e,t),mg.init(e,t)}),vg=H(`ZodISODuration`,(e,t)=>{uf.init(e,t),mg.init(e,t)}),yg=H(`ZodEmail`,(e,t)=>{Wd.init(e,t),mg.init(e,t)}),bg=H(`ZodGUID`,(e,t)=>{Hd.init(e,t),mg.init(e,t)}),xg=H(`ZodUUID`,(e,t)=>{Ud.init(e,t),mg.init(e,t)}),Sg=H(`ZodURL`,(e,t)=>{Qd.init(e,t),mg.init(e,t)}),Cg=H(`ZodEmoji`,(e,t)=>{$d.init(e,t),mg.init(e,t)}),wg=H(`ZodNanoID`,(e,t)=>{ef.init(e,t),mg.init(e,t)}),Tg=H(`ZodCUID`,(e,t)=>{tf.init(e,t),mg.init(e,t)}),Eg=H(`ZodCUID2`,(e,t)=>{nf.init(e,t),mg.init(e,t)}),Dg=H(`ZodULID`,(e,t)=>{rf.init(e,t),mg.init(e,t)}),Og=H(`ZodXID`,(e,t)=>{af.init(e,t),mg.init(e,t)}),kg=H(`ZodKSUID`,(e,t)=>{of.init(e,t),mg.init(e,t)}),Ag=H(`ZodIPv4`,(e,t)=>{df.init(e,t),mg.init(e,t)}),jg=H(`ZodIPv6`,(e,t)=>{mf.init(e,t),mg.init(e,t)}),Mg=H(`ZodCIDRv4`,(e,t)=>{hf.init(e,t),mg.init(e,t)}),Ng=H(`ZodCIDRv6`,(e,t)=>{_f.init(e,t),mg.init(e,t)}),Pg=H(`ZodBase64`,(e,t)=>{bf.init(e,t),mg.init(e,t)}),Fg=H(`ZodBase64URL`,(e,t)=>{Cf.init(e,t),mg.init(e,t)}),Ig=H(`ZodE164`,(e,t)=>{wf.init(e,t),mg.init(e,t)}),Lg=H(`ZodJWT`,(e,t)=>{Ef.init(e,t),mg.init(e,t)}),Rg=H(`ZodNumber`,(e,t)=>{Df.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>bh(e,t,n,r),e.isFinite=!0},Ql({minValue:e=>{let{minimum:t,exclusiveMinimum:n}=hh(e);return Math.max(t??-1/0,n??-1/0)},maxValue:e=>{let{maximum:t,exclusiveMaximum:n}=hh(e);return Math.min(t??1/0,n??1/0)},isInt:e=>{let{isInt:t,multipleOf:n}=hh(e);return!!t||!!n?.some(Number.isSafeInteger)},format:e=>hh(e).format??null},{gt(e,t){return this.check(bm(e,t))},gte(e,t){return this.check(xm(e,t))},min(e,t){return this.check(xm(e,t))},lt(e,t){return this.check(vm(e,t))},lte(e,t){return this.check(ym(e,t))},max(e,t){return this.check(ym(e,t))},int(e){return this.check(Vg(e))},safe(e){return this.check(Vg(e))},positive(e){return this.check(bm(0,e))},nonnegative(e){return this.check(xm(0,e))},negative(e){return this.check(vm(0,e))},nonpositive(e){return this.check(ym(0,e))},multipleOf(e,t){return this.check(Sm(e,t))},step(e,t){return this.check(Sm(e,t))},finite(){return this}}));function zg(e){return pm(Rg,e)}var Bg=H(`ZodNumberFormat`,(e,t)=>{Of.init(e,t),Rg.init(e,t)});function Vg(e){return mm(Bg,e)}var Hg=H(`ZodBoolean`,(e,t)=>{kf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>xh(e,t,n,r)});function Ug(e){return hm(Hg,e)}var Wg=H(`ZodUnknown`,(e,t)=>{Af.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function Gg(){return gm(Wg)}var Kg=H(`ZodNever`,(e,t)=>{jf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Sh(e,t,n,r)});function qg(e){return _m(Kg,e)}var Jg=H(`ZodArray`,(e,t)=>{lg(),Ff.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Dh(e,t,n,r),e.element=t.element},{min(e,t){return this.check(wm(e,t))},nonempty(e){return this.check(wm(1,e))},max(e,t){return this.check(Cm(e,t))},length(e,t){return this.check(Tm(e,t))},unwrap(){return this.element}});function Yg(e,t){return Rm(Jg,e,t)}var Xg=H(`ZodObject`,(e,t)=>{lg(),Vf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>kh(e,t,n,r),iu(e,`shape`,e=>e._zod.def.shape,!1)},{keyof(){return s_(Object.keys(this._zod.def.shape))},catchall(e){return this.clone(ml(this._zod.def,{catchall:e}))},passthrough(){return this.clone(ml(this._zod.def,{catchall:Gg()}))},loose(){return this.clone(ml(this._zod.def,{catchall:Gg()}))},strict(){return this.clone(ml(this._zod.def,{catchall:qg()}))},strip(){return this.clone(ml(this._zod.def,{catchall:void 0}))},extend(e){return jl(this,e)},safeExtend(e){return Nl(this,e)},merge(e){return Pl(this,e)},pick(e){return Ol(this,e)},omit(e){return Al(this,e)},partial(...e){return Fl(f_,this,e[0])},exactPartial(...e){return Fl(m_,this,e[0],`exactPartial`)},required(...e){return Il(S_,this,e[0])}});function Zg(e,t){return new Xg({type:`object`,shape:e,catchall:qg(),...z(t)})}var Qg=H(`ZodUnion`,(e,t)=>{Uf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ah(e,t,n,r),e.options=t.options});function $g(e,t){return new Qg({type:`union`,options:e,...z(t)})}var e_=H(`ZodIntersection`,(e,t)=>{Wf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>jh(e,t,n,r)});function t_(e,t){return new e_({type:`intersection`,left:e,right:t})}var n_=H(`ZodTuple`,(e,t)=>{lg(),Kf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Mh(e,t,n,r)},{rest(e){return this.clone({...this._zod.def,rest:e})},partial(){let e=this._zod.def;if(e.checks?.length)throw Error(`.partial() cannot be used on tuple schemas containing refinements`);return this.clone({...e,items:e.items.map(e=>new f_({type:`optional`,innerType:e}))})}});function r_(e,t,n){let r=t instanceof K;return new n_({type:`tuple`,items:e,rest:r?t:null,...z(r?n:t)})}var i_=H(`ZodRecord`,(e,t)=>{lg(),Xf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ih(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function a_(e,t,n){return!t||!t._zod?new i_({type:`record`,keyType:pg(),valueType:e,...z(t)}):new i_({type:`record`,keyType:e,valueType:t,...z(n)})}var o_=H(`ZodEnum`,(e,t)=>{Zf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ch(e,t,n,r),e.enum=t.entries,e.options=[...e._zod.values];let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new o_({...t,checks:[],...z(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new o_({...t,checks:[],...z(r),entries:i})}});function s_(e,t){return new o_({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...z(t)})}var c_=H(`ZodLiteral`,(e,t)=>{Qf.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>wh(e,t,n,r),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});function l_(e,t){return new c_({type:`literal`,values:Array.isArray(e)?e:[e],...z(t)})}var u_=H(`ZodTransform`,(e,t)=>{lg(),$f.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Eh(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new du(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(Jl(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,`input`in t||(t.input=n.value),t.inst??=e,n.issues.push(Jl(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n)):(n.value=i,n)}});function d_(e){return new u_({type:`transform`,transform:e})}var f_=H(`ZodOptional`,(e,t)=>{tp.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Kh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function p_(e){return new f_({type:`optional`,innerType:e})}var m_=H(`ZodExactOptional`,(e,t)=>{np.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Kh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function h_(e){return new m_({type:`optional`,innerType:e})}var g_=H(`ZodNullable`,(e,t)=>{rp.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Lh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function __(e){return new g_({type:`nullable`,innerType:e})}var v_=H(`ZodDefault`,(e,t)=>{ip.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Vh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function y_(e,t){return new v_({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():xl(t)}})}var b_=H(`ZodPrefault`,(e,t)=>{ap.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Hh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function x_(e,t){return new b_({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():xl(t)}})}var S_=H(`ZodNonOptional`,(e,t)=>{op.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Rh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function C_(e,t){return new S_({type:`nonoptional`,innerType:e,...z(t)})}var w_=H(`ZodCatch`,(e,t)=>{lp.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Uh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function T_(e,t){return new w_({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:ou(t)})}var E_=H(`ZodPipe`,(e,t)=>{up.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Wh(e,t,n,r),e.in=t.in,e.out=t.out});function D_(e,t){return new E_({type:`pipe`,in:e,out:t})}var O_=H(`ZodReadonly`,(e,t)=>{fp.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Gh(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function k_(e){return new O_({type:`readonly`,innerType:e})}var A_=H(`ZodCustom`,(e,t)=>{mp.init(e,t),ug.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Th(e,t,n,r)});function j_(e,t={}){return zm(A_,e,t)}function M_(e,t){return Bm(e,t)}function N_(e){return lm(hg,e)}var P_=`arcvisor/assessment`,F_=zg().int().min(1).max(5),X=pg(),I_=N_({offset:!0}),L_=s_([`yes`,`unsure`,`no`]).describe(`yes: present; unsure: counted as present until decided; no: absent`),R_=s_([``,`always`,`some`,`never`]).describe(`Whether a person approves before the capability acts`),z_=s_([`as-is`,`adapted`,`not-adopted`,`waived`]).describe(`Level 0 controls allow only as-is, or waived when the specific thing the control concerns is not present in the system (with the evidence); Levels 1 and 2 allow as-is, adapted or not adopted`),B_=s_([`read`,`propose`,`act-with-approval`,`act-alone`]),V_=s_([`found`,`partial`,`missing`,`offcode`,`nofeature`]).describe(`What a check of the code found for a control`),H_=s_([`accept`,`monitor`,`mitigate`]),U_=s_([`conservative`,`moderate`,`aggressive`]).describe(`Relevance preset from the governance guide`),W_=s_([`ai`,`confirmed`,`edited`,`dismissed`]).describe(`ai: written into the record by AI, not yet confirmed by a person; confirmed: an AI suggestion accepted as drafted; edited: accepted and changed, or answered by a person instead; dismissed: an AI suggestion rejected`),G_=s_([`changes-requested`,`reviewed`]).describe(`The reviewer's verdict, separate from the deployment decision`),K_=s_([``,`Approve`,`Approve with conditions`,`Defer`]),q_=Zg({name:X.optional(),owner:X.optional(),purpose:X.optional(),deployment:X.optional(),architecture:X.optional(),autonomy:X.optional(),dataClassification:X.optional(),pii:X.optional(),publicFacing:X.optional(),criticality:X.optional()}),J_=Zg({present:L_.optional(),providedBy:X.optional(),approval:R_.optional(),reason:X.optional().describe(`Why it is present or absent, especially for capabilities ruled out`),evidence:Yg(X).optional().describe(`File paths, with line numbers where useful`),authority:B_.optional().describe(`The authority it is used at. Unstated: the highest the capability allows`),irreversible:Ug().optional().describe(`Whether its effects can be undone. Unstated where the register asks: irreversible`),external:Ug().optional().describe(`Whether its effects reach outside the organisation. Unstated where the register asks: external`)}),Y_=Zg({present:L_.optional(),reason:X.optional(),evidence:Yg(X).optional()}),X_=Zg({context:X.optional().describe(`How the risk would arise in this system`),impact:F_.nullable().optional(),likelihood:F_.nullable().optional(),impactReason:X.optional(),likelihoodReason:X.optional()}),Z_=Zg({status:z_.optional(),how:X.optional().describe(`How it is implemented: what, where, thresholds`),evidence:X.optional().describe(`What a reviewer can check: config, test, log query, review record`),owner:X.optional(),reason:X.optional().describe(`Why a Level 1 or 2 control is not adopted, or what is absent for a waived Level 0 control`),proposal:X.optional().describe(`Proposed change for a gap`),contradictionAccepted:Zg({by:X,reason:X,at:I_}).optional().describe(`A reviewer accepted the explanation for a code check that contradicts this entry`)}),Q_=Zg({scenario:X.optional(),strategy:H_.optional(),actions:X.optional(),impact:F_.nullable().optional(),likelihood:F_.nullable().optional(),acceptedBy:X.optional().describe(`The role accepting the residual risk`)}),$_=Zg({assessor:X.optional(),reviewer:X.optional(),authority:X.optional().describe(`Residual-risk acceptance authority: name and role`),decision:K_.optional(),conditions:X.optional(),nextReview:X.optional(),signedAt:I_.nullable().optional()}),ev=Zg({path:X,start:zg().int().min(1).describe(`Line number of the first line`),lines:Yg(X),highlight:r_([zg().int().min(1),zg().int().min(1)]).optional().describe(`First and last line to highlight`)}),tv=Zg({verdict:V_,note:X,files:Yg(X).default([]),contradicts:Ug().optional().describe(`The code conflicts with the control entry's description`),excerpts:Yg(ev).optional().describe(`The lines the verdict rests on, so a reviewer without repository access can see them`)}),nv=Zg({url:X.describe(`Repository the code was read from`),branch:X.optional(),commit:X.optional(),readAt:I_.optional(),filesRead:zg().int().min(0).optional(),filesTotal:zg().int().min(0).optional(),read:Yg(X).default([]),findings:Yg(Zg({area:X,text:X,files:Yg(X).default([])})).default([]),unknown:Yg(X).default([]).describe(`System fields the code cannot answer`),caps:a_(X,Yg(X)).default({}).describe(`Capability ID to the files that show it`),checks:a_(X,tv).nullable().default(null).describe(`Control ID to what the code check found`),checked:I_.nullable().default(null)}),rv=Zg({version:X.describe(`Register version the assessment was last signed against`),risks:Yg(X).describe(`Applicable risks at that time`),controls:a_(X,$g([l_(0),l_(1),l_(2)])).describe(`Controls in scope at that time, with their levels`)}),iv=Zg({revision:zg().int().min(1),signedAt:I_,register:X,decision:X.optional()}),av=Zg({author:X,role:X.optional(),at:I_,text:X}),ov=Zg({resolved:Ug().default(!1),comments:Yg(av).default([])}),sv=Yg(X).optional().describe(`File paths, with line numbers where useful`),cv=Zg({source:X.optional().describe(`Who made the suggestions, e.g. "arc-assessment skill"`),at:I_.optional(),system:a_(X,X).default({}),caps:a_(X,Zg({present:L_,reason:X,providedBy:X.optional(),approval:R_.optional(),evidence:sv,authority:B_.optional(),irreversible:Ug().optional(),external:Ug().optional()})).default({}),components:a_(X,Zg({present:L_,reason:X,evidence:sv})).default({}),risks:a_(X,Zg({context:X.optional(),impact:F_.nullable().optional(),likelihood:F_.nullable().optional(),impactReason:X.optional(),likelihoodReason:X.optional(),evidence:sv})).default({}),controls:a_(X,Zg({how:X.optional(),evidence:X.optional(),proposal:X.optional()})).default({}),residual:a_(X,Zg({scenario:X.optional(),actions:X.optional(),impact:F_.nullable().optional(),likelihood:F_.nullable().optional()})).default({})}),lv={caps:a_(X,J_).default({}),components:a_(X,Y_).default({}),risks:a_(X,X_).default({}),controls:a_(X,Z_).default({}),residual:a_(X,Q_).default({})},uv=Zg({revision:zg().int().min(1),system:q_.default({}),threshold:U_,...lv,signoff:$_.default({})}),dv=Zg({format:l_(P_),formatVersion:l_(1),revision:zg().int().min(1),createdAt:I_,updatedAt:I_,register:Zg({version:X,source:X.optional()}).optional().describe(`Register the assessment was last worked against`),sample:X.nullable().optional(),pasted:X.optional().describe(`Description pasted in to draft the system answers`),repoUrl:X.optional(),system:q_.default({}),threshold:U_,...lv,signoff:$_.default({}),notes:a_(X,X).default({}).describe(`Reviewer notes, keyed by risk or control ID (older files; new ones use threads)`),threads:a_(X,ov).default({}).describe(`Comment threads, keyed by risk or control ID, capability ID, or system.<field>`),review:Zg({verdict:G_.optional(),by:X.optional(),at:I_.optional()}).optional(),prov:a_(X,W_).default({}).describe(`Provenance of AI-drafted fields, keyed like system.purpose, cap.CAP-07, risk.RISK-001, control.CTRL-0089, residual.RISK-047`),ai:cv.default({caps:{},components:{},risks:{},system:{},controls:{},residual:{}}).describe(`AI suggestions, kept apart from the record until a person accepts, edits or dismisses each one`),code:nv.nullable().optional(),basis:rv.nullable().optional(),signedCopy:uv.nullable().optional(),history:Yg(iv).default([])});function fv(e=new Date){let t=e.toISOString();return{format:P_,formatVersion:1,revision:1,createdAt:t,updatedAt:t,system:{},threshold:`conservative`,caps:{},components:{},risks:{},controls:{},residual:{},signoff:{},notes:{},threads:{},prov:{},ai:{caps:{},components:{},risks:{},system:{},controls:{},residual:{}},history:[]}}function pv(e){let t=e;if(typeof e==`string`)try{t=JSON.parse(e)}catch(e){return{ok:!1,errors:[`Not valid JSON: ${e.message}`]}}if(t&&typeof t==`object`&&t.format!==`arcvisor/assessment`)return{ok:!1,errors:[`Not an ARCvisor assessment: "format" must be "${P_}".`]};let n=dv.safeParse(t);return n.success?{ok:!0,value:n.data}:{ok:!1,errors:n.error.issues.map(e=>`${e.path.length?e.path.join(`.`):`(file)`}: ${e.message}`)}}var mv={0:`Level 0 · Cardinal`,1:`Level 1 · Standard`,2:`Level 2 · Best Practice`},hv={read:`Read`,propose:`Propose`,"act-with-approval":`Act with approval`,"act-alone":`Act alone`},gv={conservative:{label:`Conservative`,rule:`Impact ≥ 3 and Likelihood ≥ 3, or Impact ≥ 4`,note:`Healthcare, finance, legal, government`,test:(e,t)=>e>=3&&t>=3||e>=4},moderate:{label:`Moderate`,rule:`Impact ≥ 3 and Likelihood ≥ 3`,note:`E-commerce, SaaS, professional services`,test:(e,t)=>e>=3&&t>=3},aggressive:{label:`Aggressive`,rule:`Impact ≥ 4 and Likelihood ≥ 3, or Impact ≥ 5`,note:`Internal tools, early-stage startups`,test:(e,t)=>e>=4&&t>=3||e>=5}},_v={5:[`Catastrophic`,`Loss > $1M; major irreversible harm to people; severe regulatory violations; criminal liability`],4:[`Severe`,`Loss $100K–$1M; some reversible harm to people; major reputational damage; significant compliance issues`],3:[`Moderate`,`Loss $10K–$100K; minor reversible harm; customer dissatisfaction; moderate business impact`],2:[`Minor`,`Loss < $10K; no harm to people; internal inefficiency; limited user frustration`],1:[`Negligible`,`Minimal to no consequences; no harm to people`]},vv={5:[`Very high`,`Almost certain; happens regularly in similar systems; needs only basic access or common conditions`],4:[`High`,`Likely; observed in comparable systems; needs commonly available capabilities or tools`],3:[`Moderate`,`May occur under certain circumstances; needs specific but achievable conditions`],2:[`Low`,`Unlikely but possible; needs specific conditions, insider knowledge or elevated attacker capability`],1:[`Very low`,`Rare; needs a highly unlikely combination of factors or extraordinary resources`]},yv={"as-is":`Implemented as-is`,adapted:`Adapted`,"not-adopted":`Not adopted`,waived:`Waived: not present`},bv={found:`Found in code`,partial:`Partly in code`,missing:`Not found in code`,offcode:`Needs evidence outside the code`,nofeature:`Nothing in the code it applies to`},xv=[{key:`name`,label:`System name`,kind:`text`,required:!0},{key:`owner`,label:`Owner (team or agency)`,kind:`text`,required:!0},{key:`purpose`,label:`Purpose and users`,kind:`long`,required:!0},{key:`deployment`,label:`Deployment context`,kind:`long`,required:!1},{key:`architecture`,label:`Agents and architecture`,kind:`long`,required:!0},{key:`autonomy`,label:`What it does without a person approving`,kind:`long`,required:!0},{key:`dataClassification`,label:`Data classification`,kind:`select`,required:!0,options:[`Public`,`Internal`,`Confidential`,`Restricted`]},{key:`pii`,label:`Personal data`,kind:`long`,required:!1},{key:`publicFacing`,label:`Public-facing`,kind:`select`,required:!0,options:[`No`,`Yes`]},{key:`criticality`,label:`Criticality`,kind:`select`,required:!0,options:[`Low`,`Medium`,`High`,`Critical`]}],Sv=(e,t,n)=>e===1?t:n??`${t}s`,Cv=e=>Object.keys(e).filter(t=>!e[t].superseded_by),wv=(e,t)=>t.element_ids.filter(t=>t in e.capabilities);function Tv(e){return Object.keys(e.caps).filter(t=>e.caps[t]?.present===`yes`||e.caps[t]?.present===`unsure`)}function Ev(e,t){return Object.keys(t.components??{}).filter(n=>Xc(e,n)&&(t.components[n]?.present===`yes`||t.components[n]?.present===`unsure`))}function Dv(e,t,n={},r=[],i=[]){let a={};for(let o of t){let t=e.capabilities[o],s={};if(t?.authority?.length){let e=n[o];s.authority=e&&t.authority.includes(e)?e:t.authority[t.authority.length-1]}for(let[e,n]of[[`irreversible`,r],[`external`,i]]){let r=t?.[e];r===`ask`?s[e]=!n.includes(o):(r===`always`||r===`never`)&&(s[e]=r===`always`)}s.authority===`read`&&`irreversible`in s&&(s.irreversible=!1),a[o]=s}return a}function Ov(e,t){let n=Tv(t),r={};for(let e of n){let n=t.caps[e]?.authority;n&&(r[e]=n)}return Dv(e,n,r,n.filter(e=>t.caps[e]?.irreversible===!1),n.filter(e=>t.caps[e]?.external===!1))}function kv(e,t){for(let[n,r]of Object.entries(e.min_authority??{})){let e=t[n]?.authority;if(e&&Lc(e)<Lc(r))return[n,r]}return null}function Av(e,t){let n=e.level;for(let r of e.level_when??[])for(let[e,i]of Object.entries(t))r.capabilities&&!r.capabilities.includes(e)||r.authority&&(!i.authority||Lc(i.authority)<Lc(r.authority))||[`irreversible`,`external`].some(e=>e in r&&i[e]!==r[e])||(n=Math.min(n,r.level));return n}function jv(e,t,n){let{roles:r,rules:i}=e.combinations,a=(e,t)=>{let r=n[e]?.authority;return!(r&&t)||Lc(r)>=Lc(t)};return Object.entries(i).map(([e,n])=>{let i=n.roles.filter(e=>e in r).map(e=>{let n=r[e],i=t.filter(e=>n.capabilities[e]&&a(e,n.capabilities[e].min_authority)).map(e=>({id:e,mark:n.capabilities[e].mark,note:n.capabilities[e].note??``})),o=i.some(e=>e.mark===`yes`)?`yes`:i.length?`maybe`:`none`;return{id:e,name:n.name,question:n.question??``,status:o,suppliers:i}}),o=i.map(e=>e.status),s=o.includes(`none`)||!i.length?`not present`:o.every(e=>e===`yes`)?`present`:`possible`;return{id:e,name:n.name,description:n.description??``,mechanism:n.mechanism,verdict:s,roles:i,control:n.control,risks:n.risks}})}function Mv(e){let t=e.control??`its control`,n=e.roles.filter(e=>e.status===`none`).map(e=>e.name.toLowerCase()),r=e.roles.filter(e=>e.status===`maybe`).map(e=>e.name.toLowerCase());return e.verdict===`present`?`Every role is present. Implement ${t}. If a review of the system finds that a role is absent in practice, record which one and the evidence, and record ${t} as waived.`:e.verdict===`possible`?`Whether this system has ${r.join(` and `)} depends on how it is deployed. Answer each note marked maybe from the code and configuration. If every role is confirmed, implement ${t}. If one is absent, record ${t} as waived, with the evidence.`:`No capability of this system supplies ${n.join(` or `)}.`}function Nv(e,t){let n=[];for(let r of t)for(let[i,a]of Object.entries(e.combinations.implies[r]??{}))t.includes(i)||n.push({from:r,capability:i,mark:a.mark,note:a.note??``});return n}function Pv(e,t,n,r){let i=[...t,...n],a=new Set(i),o=Object.fromEntries(jv(e,i,r).map(e=>[e.id,e.verdict])),s={profile:r,baseline:[],single:[],combination:[],below:[],checks:jv(e,t,r)};for(let t of Cv(e.risks)){let n=e.risks[t],i=kv(n,r);if(i){s.below.push({id:t,capability:i[0],needs:i[1]});continue}if(n.combination){(o[n.combination]??`not present`)!==`not present`&&s.combination.push(t);continue}let c=n.element_ids.filter(t=>Xc(e,t));c.length?c.every(e=>a.has(e))&&(n.element_ids.length>1?s.combination:s.single).push(t):s.baseline.push(t)}return s}var Fv=(e,t)=>Pv(e,Tv(t),Ev(e,t),Ov(e,t));function Iv(e,t){let n=Fv(e,t);return[...n.baseline,...n.single,...n.combination]}var Lv=(e,t)=>!t.combination&&!t.element_ids.some(t=>Xc(e,t));function Rv(e,t){let n={baseline:[],capability:[],combination:[]};for(let r of t){let t=e.risks[r];Lv(e,t)?n.baseline.push(r):t.combination||t.element_ids.length>1?n.combination.push(r):n.capability.push(r)}return n}function zv(e,t){let n=e.risks[t];return{impact:n?.impact??null,likelihood:n?.likelihood??null}}function Bv(e,t){let{impact:n,likelihood:r}=zv(e,t);return!n||!r?`unscored`:gv[e.threshold].test(n,r)?`priority`:`below`}var Vv=(e,t)=>Bv(e,t)!==`below`;function Hv(e,t,n=Iv(e,t)){let r=Ov(e,t),i=new Map;for(let a of n)for(let n of e.risks[a]?.controls??[]){let o=e.controls[n];if(!o||o.superseded_by)continue;let s=i.get(n);s||(s={id:n,level:Av(o,r),baseLevel:o.level,covers:[],priorityCovers:[],group:`optional`},i.set(n,s)),s.covers.push(a),Vv(t,a)&&s.priorityCovers.push(a)}let a=Array.from(i.values());for(let e of a)e.group=e.level===0?`required`:e.priorityCovers.length?`priority`:`optional`;return a.sort((e,t)=>e.id.localeCompare(t.id))}function Uv(e){return e===0?[`as-is`,`waived`]:[`as-is`,`adapted`,`not-adopted`]}function Wv(e,t){return!e?.status||!Uv(t).includes(e.status)?!1:e.status===`not-adopted`?!!e.reason?.trim():e.status===`waived`?!!e.reason?.trim()&&!!e.evidence?.trim():!!e.how?.trim()}function Gv(e,t,n=Hv(e,t)){let r=new Map,i=(e,t)=>{let n=r.get(e);n||(n={rid:e,why:[]},r.set(e,n)),n.why.push(t)};for(let n of Iv(e,t))if(Bv(t,n)===`priority`){let e=zv(t,n);i(n,`Priority (Impact ${e.impact}, Likelihood ${e.likelihood})`)}for(let e of n)if(t.controls[e.id]?.status===`not-adopted`)for(let t of e.covers)i(t,`${e.id} not adopted`);return Array.from(r.values())}function Kv(e){return!!(e?.strategy&&e.scenario?.trim()&&e.acceptedBy?.trim())}function qv(e){let t=e.ai;return[...Object.keys(t.system??{}).map(e=>`system.${e}`),...Object.keys(t.caps??{}).map(e=>`cap.${e}`),...Object.keys(t.components??{}).map(e=>`component.${e}`),...Object.keys(t.risks??{}).map(e=>`risk.${e}`),...Object.keys(t.controls??{}).map(e=>`control.${e}`),...Object.keys(t.residual??{}).map(e=>`residual.${e}`)].filter(t=>e.prov[t]===void 0)}var Jv=e=>Array.from(new Set([...Object.keys(e.prov).filter(t=>e.prov[t]===`ai`),...qv(e)]));function Yv(e,t){let n=e.controls[t],r=e.code?.checks?.[t];return!n||!r||n.status!==`as-is`&&n.status!==`adapted`||n.contradictionAccepted?!1:r.verdict===`missing`||r.contradicts===!0}function Xv(e,t){let n=[],r=(e,t,r,i)=>{t.length&&n.push({section:e,text:r,items:t,...i?{anchor:i}:{}})},i=xv.filter(e=>e.required&&!t.system[e.key]?.trim()).map(e=>e.key);r(`system`,i,`${i.length} required system ${Sv(i.length,`field`)} empty`);let a=Object.keys(e.capabilities),o=a.filter(e=>!t.caps[e]?.present);r(`capabilities`,o,`${o.length} ${Sv(o.length,`capability`,`capabilities`)} not yet decided`);let s=a.filter(e=>t.caps[e]?.present===`unsure`);r(`capabilities`,s,`${s.length} ${Sv(s.length,`capability`,`capabilities`)} marked unsure`);let c=[...Object.keys(e.components),...Object.keys(e.design)].filter(t=>Xc(e,t)).filter(e=>!t.components?.[e]?.present||t.components[e].present===`unsure`);r(`capabilities`,c,`${c.length} ${Sv(c.length,`component`)} not yet decided: ${c.join(`, `)}`,`components`);let l=Nv(e,Tv(t)).filter(e=>e.capability!==`any`&&t.caps[e.capability]?.present===`no`&&!t.caps[e.capability]?.reason?.trim()).map(e=>e.capability),u=Array.from(new Set(l));r(`capabilities`,u,`${u.length} implied ${Sv(u.length,`capability`,`capabilities`)} marked absent without a reason: ${u.join(`, `)}`);let d=Iv(e,t),f=d.filter(e=>Bv(t,e)===`unscored`);r(`risks`,f,`${f.length} ${Sv(f.length,`risk`)} not scored`);let p=Hv(e,t,d),m=p.filter(e=>e.group===`required`),h=m.filter(e=>t.controls[e.id]?.status&&!Uv(0).includes(t.controls[e.id].status)).map(e=>e.id);r(`controls`,h,`${h.length} Level 0 ${Sv(h.length,`control`)} marked adapted or not adopted (Level 0 is implemented as-is, or waived when what it concerns is absent)`);let g=m.filter(e=>!h.includes(e.id)&&!Wv(t.controls[e.id],0)).map(e=>e.id);r(`controls`,g,`${g.length} Level 0 ${Sv(g.length,`control`)} not described, or waived without the evidence`);let _=m.filter(e=>Yv(t,e.id)).map(e=>e.id);r(`controls`,_,`${_.length} Level 0 ${Sv(_.length,`control`)} contradicted by the code: fix, or have the reviewer accept the explanation`);let v=p.filter(e=>e.group===`priority`&&!Wv(t.controls[e.id],e.level)).map(e=>e.id);r(`controls`,v,`${v.length} Level 1–2 ${Sv(v.length,`control`)} for priority risks without a complete entry`);let y=Gv(e,t,p).filter(e=>!Kv(t.residual[e.rid])).map(e=>e.rid);r(`residual`,y,`${y.length} residual ${Sv(y.length,`risk`)} without a scenario, strategy and owner`);let b=Jv(t);return r(`signoff`,b,`${b.length} AI ${Sv(b.length,`suggestion`)} nobody has accepted, edited or dismissed`,`ai-drafts`),r(`signoff`,[`assessor`,`reviewer`,`authority`,`decision`].filter(e=>!String(t.signoff[e]??``).trim()),`Sign-off names and decision incomplete`,`signoff-fields`),n}function Zv(e,t){let n=xv.filter(e=>e.required),r=Iv(e,t),i=Hv(e,t,r),a=i.filter(e=>e.group!==`optional`),o=Gv(e,t,i),s=Object.keys(e.capabilities),c=[...Object.keys(e.components),...Object.keys(e.design)].filter(t=>Xc(e,t)),l=e=>!!e&&e!==`unsure`;return{system:{done:n.filter(e=>t.system[e.key]?.trim()).length,total:n.length},capabilities:{done:s.filter(e=>l(t.caps[e]?.present)).length+c.filter(e=>l(t.components?.[e]?.present)).length,total:s.length+c.length},risks:{done:r.filter(e=>Bv(t,e)!==`unscored`).length,total:r.length},controls:{done:a.filter(e=>Wv(t.controls[e.id],e.level)).length,total:a.length},residual:{done:o.filter(e=>Kv(t.residual[e.rid])).length,total:o.length}}}function Qv(e,t){let n=Iv(e,t),r={};for(let i of Hv(e,t,n))r[i.id]=i.level;return{version:e.version.version,risks:n,controls:r}}function $v(e,t){if(!t.basis)return null;let n=Qv(e,t),r=new Set(t.basis.risks),i=new Set(n.risks),a={from:t.basis.version,to:n.version,newRisks:n.risks.filter(e=>!r.has(e)),goneRisks:t.basis.risks.filter(e=>!i.has(e)),newControls:Object.keys(n.controls).filter(e=>!(e in t.basis.controls)),goneControls:Object.keys(t.basis.controls).filter(e=>!(e in n.controls)),levelChanges:Object.keys(n.controls).filter(e=>e in t.basis.controls&&t.basis.controls[e]!==n.controls[e]).map(e=>({id:e,from:t.basis.controls[e],to:n.controls[e]})),empty:!1};return a.empty=!a.newRisks.length&&!a.goneRisks.length&&!a.newControls.length&&!a.goneControls.length&&!a.levelChanges.length,a}var ey=(...e)=>Array.from(new Set(e.flatMap(e=>Object.keys(e)))).sort(),ty=(e,t)=>JSON.stringify(e??{})===JSON.stringify(t??{});function ny(e,t){let n=t.signedCopy;if(!n)return[];let r=[];for(let e of xv)(n.system[e.key]??``)!==(t.system[e.key]??``)&&r.push({section:`system`,id:e.key,text:`System: ${e.label.toLowerCase()} edited`});for(let i of Object.keys(e.capabilities)){let a=n.caps[i]?.present??`undecided`,o=t.caps[i]?.present??`undecided`;a!==o&&r.push({section:`capabilities`,id:i,text:`${i} ${Qc(e,i)}: ${a} → ${o}`});for(let[e,a]of[[`authority`,`authority`],[`irreversible`,`irreversible`],[`external`,`external`]]){let s=n.caps[i]?.[e],c=t.caps[i]?.[e];s!==c&&o!==`no`&&r.push({section:`capabilities`,id:i,text:`${i} ${a}: ${s??`unstated`} → ${c??`unstated`}`})}}for(let i of ey(n.components??{},t.components??{})){let a=n.components?.[i]?.present??`undecided`,o=t.components?.[i]?.present??`undecided`;a!==o&&r.push({section:`capabilities`,id:i,text:`${i} ${Qc(e,i)}: ${a} → ${o}`})}n.threshold!==t.threshold&&r.push({section:`risks`,id:`threshold`,text:`Threshold: ${gv[n.threshold].label} → ${gv[t.threshold].label}`});for(let e of ey(n.risks,t.risks)){let i=n.risks[e]??{},a=t.risks[e]??{};i.impact!==a.impact||i.likelihood!==a.likelihood?r.push({section:`risks`,id:e,text:`${e} score: I${i.impact??`–`} L${i.likelihood??`–`} → I${a.impact??`–`} L${a.likelihood??`–`}`}):ty(i,a)||r.push({section:`risks`,id:e,text:`${e} context edited`})}for(let e of ey(n.controls,t.controls)){let i=n.controls[e]??{},a=t.controls[e]??{};(i.status??``)===(a.status??``)?ty(i,a)||r.push({section:`controls`,id:e,text:`${e} implementation details edited`}):r.push({section:`controls`,id:e,text:`${e} status: ${i.status?yv[i.status]:`none`} → ${a.status?yv[a.status]:`none`}`})}for(let e of ey(n.residual,t.residual))ty(n.residual[e],t.residual[e])||r.push({section:`residual`,id:e,text:`${e} residual entry edited`});return r}var ry=class extends Error{};function iy(e,t,n=new Date){let r=Xv(e,t);if(r.length)throw new ry(`Cannot sign off: ${r.map(e=>e.text).join(`; `)}.`);if(t.signoff.signedAt)throw new ry(`Revision ${t.revision} is already signed. Start a new revision to change it.`);let i=n.toISOString(),a=structuredClone(t);a.signoff={...a.signoff,signedAt:i},a.basis=Qv(e,a),a.register={...a.register??{},version:e.version.version},a.history=[...a.history,{revision:a.revision,signedAt:i,register:e.version.version,...a.signoff.decision?{decision:a.signoff.decision}:{}}];let o={revision:a.revision,system:a.system,threshold:a.threshold,caps:a.caps,components:a.components,risks:a.risks,controls:a.controls,residual:a.residual,signoff:a.signoff};return a.signedCopy=structuredClone(o),a.updatedAt=i,a}function ay(e,t=new Date){if(!e.signoff.signedAt)throw new ry(`Revision ${e.revision} is not signed yet.`);let n=structuredClone(e);return n.revision+=1,n.signoff={...e.signoff.assessor?{assessor:e.signoff.assessor}:{},...e.signoff.reviewer?{reviewer:e.signoff.reviewer}:{},...e.signoff.authority?{authority:e.signoff.authority}:{}},n.updatedAt=t.toISOString(),n}var oy=e=>e==null||e===``?`—`:String(e).replace(/\|/g,`\\|`).replace(/\s*\n+\s*/g,` `),sy={priority:`Yes`,below:`No`,unscored:`Unscored`};function cy(e,t){let n=[],r=Iv(e,t),i=Hv(e,t,r),a=gv[t.threshold];if(n.push(`# ARC assessment: ${t.system.name?.trim()||`Untitled system`}`,``),n.push(`Register ${e.version.version}${t.register?.source?` (${t.register.source})`:``} · revision ${t.revision} · threshold ${a.label} (${a.rule})`,``),t.code){let e=t.code.filesRead!=null&&t.code.filesTotal!=null?` (${t.code.filesRead} of ${t.code.filesTotal} files)`:``;n.push(`Code read from ${t.code.url}${t.code.branch?` at ${t.code.branch}`:``}${e}${t.code.checked?`; controls checked against it`:``}.`,``)}n.push(`## 0. System overview`,``,`| Field | Entry |`,`| --- | --- |`);for(let e of xv)n.push(`| ${e.label} | ${oy(t.system[e.key])} |`);let o=Fv(e,t),s=(e,t,n)=>e===void 0?``:e?t:n;n.push(``,`## 1. Capability inventory`,``,`| Capability | Present? | Provided by | Authority | Effects | Human approval before acting? | Evidence |`,`| --- | --- | --- | --- | --- | --- | --- |`);for(let[r,i]of Object.entries(e.capabilities)){let e=t.caps[r]??{},a=o.profile[r],c=[...e.evidence??[],...t.code?.caps[r]??[]],l=a?[s(a.irreversible,`irreversible`,`reversible`),s(a.external,`external`,`internal`)].filter(Boolean).join(`, `):``;n.push(`| ${r} ${i.name} | ${oy(e.present)} | ${oy(e.providedBy)} | ${oy(a?.authority?hv[a.authority]:``)} | ${oy(l)} | ${oy(e.approval)} | ${oy(Array.from(new Set(c)).join(`, `))} |`)}let c=Zc(e);if(c.length){n.push(``,`| Component | Present? | Reason |`,`| --- | --- | --- |`);for(let r of c)n.push(`| ${r} ${Qc(e,r)} | ${oy(t.components?.[r]?.present)} | ${oy(t.components?.[r]?.reason)} |`)}if(o.checks.length){n.push(``,`| Combination rule | Verdict | Roles |`,`| --- | --- | --- |`);for(let e of o.checks)n.push(`| ${e.name} | ${e.verdict} | ${oy(e.roles.map(e=>`${e.name}: ${e.status}`).join(`; `))} |`)}o.below.length&&n.push(``,`Left out at this authority: ${o.below.map(e=>`${e.id} (needs ${e.capability} at ${hv[e.needs].toLowerCase()})`).join(`, `)}.`),n.push(``,`## 2. Applicable risks`,``,`| Risk | Statement | Element(s) | Contextualised description | Impact | Likelihood | Priority? |`,`| --- | --- | --- | --- | --- | --- | --- |`);for(let i of r){let r=t.risks[i]??{};n.push(`| ${i} | ${oy(e.risks[i].statement)} | ${e.risks[i].combination?oy(e.combinations.rules[e.risks[i].combination]?.name):e.risks[i].element_ids.join(` + `)} | ${oy(r.context)} | ${oy(r.impact)} | ${oy(r.likelihood)} | ${sy[Bv(t,i)]} |`)}n.push(``,`## 3. Controls`,``,`| Control | Level | Covers | Status | Implementation or reason | Evidence | Owner | Code check | CSA Addendum | IMDA MGF |`,`| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |`);for(let r of i){let i=t.controls[r.id]??{};if(r.group===`optional`&&!i.status)continue;let a=e.controls[r.id],o=a.crosswalks??{},s=t.code?.checks?.[r.id],c=i.status===`not-adopted`||i.status===`waived`?i.reason:i.how;n.push(`| ${r.id} ${oy(a.statement)} | ${r.level}${r.level===r.baseLevel?``:` (${r.baseLevel} in the register)`} | ${r.covers.join(`, `)} | ${oy(i.status?yv[i.status]:``)} | ${oy(c)} | ${oy(i.evidence)} | ${oy(i.owner)} | ${oy(s?`${bv[s.verdict]}: ${s.note}`:``)} | ${(o.csa_addendum??[]).join(`, `)||`—`} | ${(o.imda_mgf??[]).join(`, `)||`—`} |`)}n.push(``,`## 4. Residual risks`,``,`| Risk | Why listed | Residual failure scenario | Strategy | Actions and thresholds | Residual Impact / Likelihood | Accepted by |`,`| --- | --- | --- | --- | --- | --- | --- |`);for(let r of Gv(e,t,i)){let e=t.residual[r.rid]??{};n.push(`| ${r.rid} | ${oy(r.why.join(`; `))} | ${oy(e.scenario)} | ${oy(e.strategy)} | ${oy(e.actions)} | ${oy(e.impact)} / ${oy(e.likelihood)} | ${oy(e.acceptedBy)} |`)}let l=t.signoff;n.push(``,`## 5. Sign-off and review`,``,`| Field | Entry |`,`| --- | --- |`);for(let[e,t]of[[`Assessor (development team)`,l.assessor],[`Reviewer (governance team)`,l.reviewer],[`Residual-risk acceptance authority`,l.authority],[`Deployment decision`,l.decision],[`Conditions`,l.conditions],[`Next review date or trigger`,l.nextReview],[`Signed`,l.signedAt]])n.push(`| ${e} | ${oy(t)} |`);let u=Jv(t);return u.length&&n.push(``,`> ${u.length} AI-drafted ${Sv(u.length,`entry`,`entries`)} not yet confirmed by a person.`),n.join(`
`)+`
`}var Z=Yc({register:`# Register-level metadata. Bump \`version\` with every change to the register content
# (see docs/arc_framework/changelog.md for the versioning policy) and tag main with v<version>
# when a release is merged.
version: "2.0.0-draft.1"
released: "2026-11-23"
`,capabilities:`CAP-01:
  name: "Planning and Goal Management"
  category: "Cognitive"
  description: "The capability to develop detailed, step-by-step, and executable plans with specific tasks in response to broad instructions. This includes prioritizing activities based on importance and dependencies between tasks, monitoring how well its plan is working, and adjusting when circumstances change or obstacles arise."

CAP-02:
  name: "Agent Delegation"
  category: "Cognitive"
  description: "The capability to assign subtasks to other agents and coordinate their activities to achieve broader goals. This includes identifying which components are best suited for specific tasks, issuing clear instructions, managing inter-agent dependencies, and monitoring performance or failures. A system has this capability whenever more than one agent works on a task, whether an agent decides the hand-offs or they are fixed in the workflow, and whether the other agents belong to the same system or are operated by another party, including agents it transacts with as counterparties."

CAP-03:
  name: "Tool Use"
  category: "Cognitive"
  description: "The capability to evaluate available options and choose the best tool for specific subtasks, based on the capabilities and limitations of different tools and matching them appropriately to the tasks. This includes selecting between search, computation, code execution, or domain-specific APIs, determining when tool invocation is necessary, and sequencing or combining multiple tools to complete complex tasks effectively."

CAP-04:
  name: "Multimodal Understanding and Generation"
  category: "Interaction"
  description: "The capability to communicate with human users across multiple modalities, including natural language conversation (explaining topics, generating documents, interactive discussions) and multimodal understanding/generation (processing and creating image, audio, or video content such as visual analysis, speech transcription, or multimedia creation)."

CAP-05:
  name: "Official Communication"
  category: "Interaction"
  description: The capability to compose, finalise, and dispatch authoritative communications that formally and legally represent an organization to external parties (e.g. customers, partners, regulators, courts, or media) via approved channels and formats, thereby creating potential legal, regulatory, or reputational obligations. This includes sending legally binding correspondence, publishing official statements or press releases, and responding to external inquiries using the organisation's identity. A system has this capability whether a person sends what the agent drafts, approves each message before it goes, or lets the agent send by itself; that difference is recorded as the capability's authority.
  authority:
  - propose
  - act-with-approval
  - act-alone
  irreversible: always
  external: always

CAP-06:
  name: "Business Transactions"
  category: "Interaction"
  description: The capability to initiate, authorise, and execute binding business transactions with external parties - such as payments, purchases, reservations, or service commitments - resulting in real financial, contractual, or operational obligations for the organization. This includes processing payments or refunds, placing orders or subscriptions, booking services or reservations, and accepting or triggering contractual commitments on behalf of the organization. A system has this capability whether a person completes the transactions the agent prepares, approves each one, or lets the agent transact by itself within limits set in advance; that difference is recorded as the capability's authority.
  authority:
  - propose
  - act-with-approval
  - act-alone
  irreversible: ask
  external: always

CAP-07:
  name: "Internet and Search Access"
  category: "Interaction"
  description: "The capability to autonomously access, browse, search, and retrieve information from the Internet to augment the LLM's static training knowledge with external and up-to-date sources in support of task execution and response generation. This includes issuing search queries, following and parsing web pages, extracting relevant facts or documents, and aggregating information from multiple online sources."
  authority:
  - read
  irreversible: never
  external: always

CAP-08:
  name: "Computer Use"
  category: "Interaction"
  description: "The capability to directly operate a computer’s graphical user interface on behalf of the user, enabling the agent to navigate applications and execute tasks through mouse, keyboard, and window-based interactions. This includes moving the cursor, clicking buttons, entering text, using keyboard shortcuts, switching between windows and applications, and navigating files and menus within the operating system environment."
  authority:
  - act-with-approval
  - act-alone
  irreversible: ask
  external: ask

CAP-09:
  name: "Other Programmatic Interfaces"
  category: "Interaction"
  description: "The capability to interact with external systems through non-graphical, programmatic interfaces, such as APIs, SDKs, and backend services, to exchange data or trigger actions as part of task execution. This includes calling REST or GraphQL APIs, invoking cloud services, publishing or consuming messages from queues or event streams, and performing operations such as code pushes, data updates, or system integrations across enterprise platforms. This includes sending and receiving email, chat, or other messages through an API or mail protocol, including when those messages are also Official Communication (CAP-05)."
  authority:
  - read
  - propose
  - act-with-approval
  - act-alone
  irreversible: ask
  external: ask

CAP-10:
  name: "Code Execution"
  category: "Operational"
  description: "The capability to write, execute, and debug code in various programming languages to automate tasks or solve computational problems. This includes implementing algorithms, writing scripts, compiling and running code, debugging errors, and integrating with external systems through APIs or backend services."
  authority:
  - propose
  - act-with-approval
  - act-alone
  irreversible: ask
  external: ask

CAP-11:
  name: "File and Data Management"
  category: "Operational"
  description: "The capability to manage the full lifecycle of files and data by creating, reading, modifying, organizing, converting, querying, and updating information across both unstructured artifacts (e.g. documents, spreadsheets, media files) and structured data stores (e.g. SQL/NoSQL databases, data warehouses, vector or embedding stores) in support of operational tasks. This includes ingesting and transforming datasets, generating or updating files, maintaining directory or schema structures, executing database queries or updates, and storing or retrieving embeddings or derived data products."
  authority:
  - read
  - propose
  - act-with-approval
  - act-alone
  irreversible: ask
  external: ask

CAP-12:
  name: "System Management"
  category: "Operational"
  description: "The capability to directly manage and configure technical systems and infrastructure by adjusting system settings, controlling computing resources, and administering operational environments across on-premise or cloud platforms. This includes monitoring system health and performance, managing authentication credentials and access controls, provisioning or scaling compute and storage resources, configuring operating system or runtime parameters, and applying system-level optimisations to support reliable operation."
  authority:
  - read
  - propose
  - act-with-approval
  - act-alone
  irreversible: ask
  external: ask
`,components:`CMP-01:
  name: "LLM"
  description: "A large language model (LLM) is a neural network trained on massive text data to learn statistical patterns of language, enabling it to understand, generate, and reason over natural language inputs. It is the core reasoning engine that processes instructions, interprets user inputs, and generates contextually appropriate responses by leveraging its trained language understanding and generation capabilities. There are a large variety of LLMs to choose from, with different sizes, capabilities, and architectures, from large closed-source model families such as OpenAI's GPT, Anthropic's Claude, and Google's Gemini, to open-weights families such as Llama, Qwen, and Mistral, which include small models that can run on local hardware."

CMP-02:
  name: "Instructions"
  description: "Instructions are structured inputs provided to an LLM that define the task, constraints, and context, guiding how the model interprets inputs and generates outputs. They guide the LLM's decision process by conditioning prompts and tool use with objectives, policies, and guardrails. Forms include system prompts, policies, schemas, and rubrics, varying by framework and enforcement strictness."

CMP-03:
  name: "Tools"
  description: "Tools are external functions, APIs, or resources attached to an LLM that extend its capabilities beyond text generation, enabling it to retrieve information, execute actions, and affect external systems (e.g., search, code execution, database queries, or file manipulation), typically through structured interfaces such as the Model Context Protocol (MCP) that constrain invocation, inputs, permissions, and outputs for agentic control and safety."

CMP-04:
  name: "Memory"
  description: "Memory is a persistent or semi-persistent data store attached to an LLM that retains information across interactions—such as conversation history, user preferences, task state, and retrieved knowledge—enabling continuity, long-horizon reasoning, and personalization in agentic workflows. Memory may be implemented through mechanisms such as context windows, vector databases, episodic logs, or external state stores, each offering different trade-offs in latency, fidelity, and persistence. Every agent has working memory, the context it carries within a task; a system has persistent memory when it keeps information beyond a single session or shares it across users or tasks."
  present_when: "The system keeps information beyond a single session, or shares it across users or tasks."

CMP-05:
  name: "Protocols"
  description: "Protocols are the standard interfaces through which an agentic system connects to tools, services, and agents that another party builds or operates, such as the Model Context Protocol (MCP) for tool servers and agent-to-agent protocols such as A2A. A protocol governs how the other party is discovered, how it is identified and authenticated, what it declares about itself to the agent (tool descriptions, capability lists, agent cards), and how requests and results pass between the two. A system has this component when it makes at least one such connection, in either direction: its agents reach another party's tool server or agent, or another party's agents reach it. A function or API wrapper that the system's own team writes is a tool, not a protocol connection, because the team controls the description the agent sees."
  present_when: "At least one tool server or agent that another party builds or operates is connected to the system through an agent protocol such as MCP or A2A, in either direction."
`,design:`DSN-01:
  name: "Agentic Architecture"
  description: "The agentic architecture defines how an agentic system's control flow is structured: the loop through which a single agent plans, acts, and observes, and, where there are several agents, how they are structured, interconnected, and coordinated to collectively perform tasks that exceed the capabilities of a single agent. This includes orchestration patterns such as hierarchical delegation, parallel agent execution, sequential handoffs between specialised agents, shared or centralized planning components, and the communication protocols that govern information exchange and coordination across the system. Risks specific to multiple agents apply only to systems with the Agent Delegation capability."

DSN-02:
  name: "Roles and Access Controls"
  description: "Roles and access controls define and enforce differentiated roles, permissions, and scopes of authority across agents and system components, specifying what actions each agent is allowed to perform and which resources it may access. This includes assigning functional roles to agents, configuring tool- and data-level permissions, scoping credentials or identities, and enforcing access policies that govern interactions with files, systems, services, or other agents."

DSN-03:
  name: "Monitoring and Traceability"
  description: "Monitoring and traceability provide systematic visibility into agent behaviour, interactions, and decision pathways by recording, observing, and correlating agent actions and system events over time. This includes logging agent inputs and outputs, tracking tool invocations and state changes, capturing decision traces or execution paths, and surfacing telemetry or audit records that support analysis and review of system behaviour."`,risks:`RISK-001:
  statement: Use of untrusted or compromised LLMs
  description: This risk arises when LLMs obtained from untrusted or insufficiently
    vetted sources have been intentionally poisoned or backdoored during training
    or distribution, causing them to behave maliciously or unpredictably under specific
    conditions. Such models may leak sensitive information, bypass safeguards, or
    execute hidden behaviors that undermine system integrity and trust.
  element_ids:
  - CMP-01
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0001
  - CTRL-0002
  - CTRL-0003
  - CTRL-0007
  - CTRL-0042
  sources:
  - https://arxiv.org/abs/2408.02946v6
  crosswalks:
    owasp_asi:
    - ASI04
    owasp_agentic_threats:
    - T17
    mitre_atlas:
    - AML.T0010.003
    - AML.T0115.001
    - AML.T0018.000
    - AML.T0020
RISK-002:
  statement: Insufficient alignment of LLM behaviour
  description: This risk arises when an LLM's learned objectives and behaviors do
    not reliably align with intended user goals, system instructions, or organizational
    policies, leading to inappropriate, unsafe, or undesired outputs. Misalignment
    may surface as failure to follow constraints, inconsistent reasoning, or behavior
    that diverges from expected norms in edge cases or complex scenarios.
  element_ids:
  - CMP-01
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-07
  - HZ-08
  controls:
  - CTRL-0004
  - CTRL-0005
  - CTRL-0007
  - CTRL-0008
  - CTRL-0038
  - CTRL-0042
  sources:
  - https://arxiv.org/abs/2406.10162
  crosswalks:
    owasp_asi:
    - ASI10
    owasp_agentic_threats:
    - T7
    mitre_atlas: []
RISK-003:
  statement: Insufficient LLM capability and reliability
  description: This risk arises when an LLM lacks sufficient capability, robustness,
    or reasoning performance to correctly interpret instructions, handle edge cases,
    or detect unsafe situations. As a result, the model may produce incorrect, misleading,
    or unsafe outputs that create downstream safety or security failures in systems
    that rely on its judgments.
  element_ids:
  - CMP-01
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  - HZ-09
  controls:
  - CTRL-0004
  - CTRL-0005
  - CTRL-0007
  - CTRL-0038
  - CTRL-0042
  sources:
  - https://arxiv.org/abs/2505.00212
  crosswalks:
    owasp_asi:
    - ASI08
    owasp_agentic_threats:
    - T5
    mitre_atlas: []
RISK-004:
  statement: Weak tool authentication and authorisation controls
  description: This risk arises when tools connected to an agent lack robust authentication
    or fine-grained authorisation mechanisms, allowing unauthorised access or misuse
    of tool capabilities. As a result, attackers or misbehaving agents may compromise
    the system by invoking sensitive actions, escalating privileges, or manipulating
    external resources beyond intended boundaries.
  element_ids:
  - CMP-03
  failure_mode: Tool or Resource Malfunction
  type:
  - Security
  hazards:
  - HZ-02
  - HZ-04
  controls:
  - CTRL-0009
  - CTRL-0032
  sources:
  - https://arxiv.org/abs/2504.08623
  - https://arxiv.org/abs/2505.14590
  - https://www.redhat.com/en/blog/model-context-protocol-mcp-understanding-security-risks-and-controls
  crosswalks:
    owasp_asi:
    - ASI03
    - ASI02
    owasp_agentic_threats:
    - T3
    - T2
    mitre_atlas:
    - AML.T0053
    - AML.T0091.000
RISK-005:
  statement: Lack of proper role-based access control for tools
  description: This risk arises when tools exposed to an agent do not enforce clear,
    role-based access controls, allowing agents to access capabilities or resources
    beyond their intended responsibilities. As a result, agents may perform unauthorised
    actions, misuse sensitive tools, or exceed their permitted scope, increasing the
    likelihood of security and operational failures.
  element_ids:
  - CMP-03
  failure_mode: Tool or Resource Malfunction
  type:
  - Security
  hazards:
  - HZ-04
  controls:
  - CTRL-0011
  sources:
  - https://embracethered.com/blog/posts/2023/chatgpt-plugin-vulns-chat-with-code/
  crosswalks:
    owasp_asi:
    - ASI03
    owasp_agentic_threats:
    - T3
    mitre_atlas:
    - AML.T0053
RISK-006:
  statement: Tool poisoning by malicious actors
  description: This risk arises when a tool server or agent that another party builds or operates describes itself in a way that manipulates the agent that connects to it. Instructions can be hidden in tool descriptions, parameter schemas, or agent cards; a tool can imitate or shadow a trusted one; and a definition can change after it was approved. The agent reads these descriptions as part of its instructions, so it may follow them even when the tool is never called. As a result, the agent may unknowingly execute malicious actions, leak sensitive information, or produce manipulated outputs that undermine system integrity and trust.
  element_ids:
  - CMP-05
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0013
  - CTRL-0015
  - CTRL-0091
  sources:
  - "https://embracethered.com/blog/posts/2025/model-context-protocol-security-risks-and-exploits/"
  - "https://arxiv.org/abs/2508.14925"
  crosswalks:
    owasp_asi:
    - ASI04
    - ASI02
    owasp_agentic_threats:
    - T17
    - T2
    mitre_atlas:
    - AML.T0110
    - AML.T0011.002
RISK-007:
  statement: Lack of input sanitisation
  description: This risk arises when inputs passed from the agent to tools are not
    properly validated or sanitised, allowing malformed or malicious data to be processed.
    As a result, tools may be exploited through injection attacks, unintended command
    execution, or data corruption.
  element_ids:
  - CMP-03
  failure_mode: Tool or Resource Malfunction
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0015
  sources:
  - https://arxiv.org/abs/2503.12188v1
  - https://www.cve.org/CVERecord?id=CVE-2024-7042
  crosswalks:
    owasp_asi:
    - ASI02
    - ASI05
    owasp_agentic_threats:
    - T2
    - T11
    mitre_atlas:
    - AML.T0053
    - AML.T0050
RISK-008:
  statement: Vague or underspecified instructions
  description: This risk arises when instructions provided to an LLM are ambiguous,
    incomplete, or poorly scoped, leading the model to make unintended assumptions
    when interpreting tasks or constraints. As a result, the LLM may behave unpredictably,
    bypass safeguards, or take actions that introduce safety or security risks.
  element_ids:
  - CMP-02
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0016
  - CTRL-0017
  - CTRL-0018
  sources:
  - https://arxiv.org/abs/2502.13295
  - https://arxiv.org/abs/2505.13360v1
  crosswalks:
    owasp_asi:
    - ASI01
    owasp_agentic_threats:
    - T6
    mitre_atlas: []
RISK-009:
  statement: Unsanitised inputs in system instructions
  description: This risk arises when untrusted or user-controlled inputs are incorporated
    into system instructions without proper sanitisation or validation. As a result,
    malicious or malformed content may manipulate the model's behaviour, override
    intended constraints, or trigger unintended actions.
  element_ids:
  - CMP-02
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0019
  - CTRL-0020
  - CTRL-0090
  sources:
  - https://arxiv.org/abs/2502.15851v1
  - https://aclanthology.org/2025.naacl-long.425.pdf
  crosswalks:
    owasp_asi:
    - ASI01
    owasp_agentic_threats:
    - T6
    mitre_atlas:
    - AML.T0051
RISK-010:
  statement: Poisoned memory
  description: This risk arises when the memory component of an agentic system is
    intentionally or inadvertently populated with malicious, misleading, or corrupted
    information. As a result, the agent may rely on compromised memory to make decisions,
    propagate false information, or exhibit persistent unsafe behaviour across interactions.
  element_ids:
  - CMP-04
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-08
  - HZ-09
  controls:
  - CTRL-0021
  - CTRL-0022
  - CTRL-0023
  sources:
  - https://arxiv.org/abs/2505.11548v2
  - https://arxiv.org/abs/2402.07867
  - https://openreview.net/pdf?id=6SIymOqJlc
  crosswalks:
    owasp_asi:
    - ASI06
    owasp_agentic_threats:
    - T1
    mitre_atlas:
    - AML.T0080.000
    - AML.T0070
RISK-011:
  statement: Sensitive data leakage across memory contexts
  description: This risk arises when the memory component retains or exposes sensitive
    information across sessions, tasks, or users with different scopes or authorisations.
    As a result, data may be inappropriately accessed or reused in unrelated contexts,
    leading to privacy breaches, confidentiality violations, or unauthorised disclosure.
  element_ids:
  - CMP-04
  failure_mode: Tool or Resource Malfunction
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-08
  controls:
  - CTRL-0021
  - CTRL-0023
  - CTRL-0047
  sources:
  - https://arxiv.org/abs/2506.12699v2
  crosswalks:
    owasp_asi:
    - ASI06
    - ASI03
    owasp_agentic_threats:
    - T1
    - T3
    mitre_atlas: []
RISK-012:
  statement: Cascading errors in multi-agent architectures
  description: This risk arises when errors or misjudgements produced by one agent
    propagate through interconnected agents within a multi-agent system. As a result,
    small failures may compound across agent interactions, leading to amplified errors,
    degraded system performance, or unintended outcomes at the system level.
  element_ids:
  - DSN-01
  - CAP-02
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0024
  - CTRL-0025
  - CTRL-0027
  - CTRL-0028
  sources:
  - https://arxiv.org/abs/2408.00989v3
  - https://arxiv.org/pdf/2502.19145
  crosswalks:
    owasp_asi:
    - ASI08
    owasp_agentic_threats:
    - T5
    mitre_atlas: []
RISK-013:
  statement: Man-in-the-middle attacks between agents
  description: This risk arises when communication channels between agents are insufficiently
    secured, allowing an attacker to intercept, modify, or replay messages exchanged
    within the agentic system. As a result, agents may act on tampered information,
    leading to incorrect coordination, unauthorised actions, or compromised system
    behaviour.
  element_ids:
  - DSN-01
  - CAP-02
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-03
  controls:
  - CTRL-0026
  - CTRL-0027
  sources:
  - https://arxiv.org/pdf/2502.14847
  crosswalks:
    owasp_asi:
    - ASI07
    owasp_agentic_threats:
    - T12
    - T9
    mitre_atlas:
    - AML.T0073
RISK-014:
  statement: Feedback loops and runaway agent behaviour
  description: This risk arises when an agent repeatedly acts on its own outputs, or
    agents reinforce each other’s decisions, outputs, or errors, with no bound on how
    many steps it takes, how much it spends, or how far its actions reach. As a result,
    feedback loops may form that escalate actions, consume excessive resources, or cause
    the system to persist in harmful or unintended behaviour without effective human
    intervention.
  element_ids:
  - DSN-01
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-03
  - HZ-08
  controls:
  - CTRL-0027
  - CTRL-0029
  - CTRL-0040
  - CTRL-0065
  sources:
  - https://arxiv.org/abs/2402.06627
  - https://arxiv.org/abs/2502.14143
  crosswalks:
    owasp_asi:
    - ASI08
    - ASI10
    owasp_agentic_threats:
    - T5
    - T4
    mitre_atlas: []
RISK-015:
  statement: Overly permissive roles and permissions
  description: This risk arises when agents are granted roles or permissions that
    exceed their intended responsibilities or operational needs. As a result, agents
    may access sensitive resources, invoke high-impact capabilities, or perform unauthorised
    actions that increase the likelihood of security, privacy, or operational failures.
  element_ids:
  - DSN-02
  failure_mode: Safeguard Failure
  type:
  - Security
  hazards:
  - HZ-04
  controls:
  - CTRL-0029
  - CTRL-0030
  sources:
  - "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  crosswalks:
    owasp_asi:
    - ASI03
    owasp_agentic_threats:
    - T3
    mitre_atlas:
    - AML.T0053
RISK-016:
  statement: Unauthorised privilege escalation
  description: This risk arises when agents are able to gain elevated roles or permissions
    beyond those initially granted, whether through misconfiguration, exploitation,
    or unintended system behaviour. As a result, agents may bypass intended controls,
    access restricted resources, or execute actions that undermine system security
    and governance.
  element_ids:
  - DSN-02
  failure_mode: Safeguard Failure
  type:
  - Security
  hazards:
  - HZ-04
  controls:
  - CTRL-0029
  - CTRL-0030
  - CTRL-0032
  sources:
  - "https://arxiv.org/abs/2503.15547"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  crosswalks:
    owasp_asi:
    - ASI03
    owasp_agentic_threats:
    - T3
    mitre_atlas:
    - AML.T0053
    - AML.T0117
RISK-017:
  statement: Delayed failure detection due to limited monitoring
  description: This risk arises when monitoring systems provide insufficient visibility
    into agent behaviour, system events, or execution outcomes. As a result, failures,
    anomalies, or unintended actions may go undetected for extended periods, increasing
    the impact and difficulty of remediation.
  element_ids:
  - DSN-03
  failure_mode: Safeguard Failure
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0032
  - CTRL-0033
  sources:
  - https://arxiv.org/abs/2401.13138
  crosswalks:
    owasp_asi:
    - ASI08
    owasp_agentic_threats:
    - T8
    mitre_atlas: []
RISK-018:
  statement: Inability to audit failures due to missing decision traces
  description: This risk arises when monitoring systems do not capture sufficient
    reasoning steps, decision pathways, or execution context for agent actions. As
    a result, operators may be unable to reconstruct failures, understand why specific
    outcomes occurred, or conduct effective audits and post-incident reviews.
  element_ids:
  - DSN-03
  failure_mode: Safeguard Failure
  type:
  - Security
  hazards:
  - HZ-02
  controls:
  - CTRL-0032
  - CTRL-0034
  sources:
  - "https://arxiv.org/abs/2411.05285"
  - "https://github.com/open-telemetry/semantic-conventions-genai"
  crosswalks:
    owasp_asi:
    - ASI08
    - ASI10
    owasp_agentic_threats:
    - T8
    mitre_atlas: []
RISK-019:
  statement: Generating plans that fail to meet the user's requirements
  description: This risk arises when an agent generates plans or goals that do not
    accurately reflect the user’s stated objectives, constraints, or preferences.
    As a result, the system may pursue incorrect or suboptimal actions, waste resources,
    or deliver outcomes that do not satisfy user expectations.
  element_ids:
  - CAP-01
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0035
  - CTRL-0036
  - CTRL-0042
  sources:
  - https://arxiv.org/pdf/2402.01622v4
  - https://aclanthology.org/2025.naacl-long.93.pdf
  crosswalks:
    owasp_asi:
    - ASI01
    owasp_agentic_threats:
    - T6
    mitre_atlas: []
RISK-020:
  statement: Generating plans that overlook safety implications
  description: This risk arises when an agent generates plans or goals without adequately
    considering basic safety, security, or practical constraints that would be apparent
    to a human. As a result, the system may propose or pursue actions that are unsafe,
    insecure, or inappropriate despite being technically feasible.
  element_ids:
  - CAP-01
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-08
  controls:
  - CTRL-0035
  - CTRL-0037
  - CTRL-0038
  - CTRL-0039
  - CTRL-0042
  sources:
  - "https://arxiv.org/abs/2412.13178"
  - "https://arxiv.org/abs/2412.14470"
  crosswalks:
    owasp_asi:
    - ASI10
    - ASI01
    owasp_agentic_threats:
    - T7
    mitre_atlas: []
RISK-021:
  statement: Incorrect task delegation between agents
  description: This risk arises when an agent assigns tasks to other agents that do
    not match their capabilities, roles, or access permissions. As a result, tasks
    may be executed incorrectly, fail to complete, or introduce security and operational
    issues due to inappropriate delegation.
  element_ids:
  - CAP-02
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-04
  - HZ-08
  controls:
  - CTRL-0040
  sources:
  - https://arxiv.org/abs/2503.13657
  crosswalks:
    owasp_asi:
    - ASI03
    - ASI08
    owasp_agentic_threats:
    - T3
    mitre_atlas: []
RISK-022:
  statement: Malicious or manipulative use of delegated agents
  description: This risk arises when an agent deliberately assigns tasks to other
    agents in ways intended to bypass controls, obscure responsibility, or achieve
    malicious objectives. As a result, delegated agents may be coerced into performing
    unauthorised actions, amplifying harmful behaviour or evading detection within
    the system.
  element_ids:
  - CAP-02
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-04
  - HZ-08
  controls:
  - CTRL-0008
  - CTRL-0024
  - CTRL-0025
  - CTRL-0041
  - CTRL-0093
  sources:
  - https://arxiv.org/abs/2507.06850
  crosswalks:
    owasp_asi:
    - ASI10
    - ASI03
    owasp_agentic_threats:
    - T13
    - T14
    mitre_atlas:
    - AML.T0118.001
    - AML.T0143
RISK-023:
  statement: Incorrect tool selection or misuse
  description: This risk arises when an agent selects an inappropriate tool or applies
    a tool incorrectly for a given task or action. As a result, the agent may produce
    erroneous outcomes, fail to complete the task effectively, or trigger unintended
    side effects due to misuse of tool capabilities.
  element_ids:
  - CAP-03
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0041
  - CTRL-0042
  - CTRL-0043
  sources:
  - https://arxiv.org/abs/2411.13547
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T2
    mitre_atlas: []
RISK-024:
  statement: Generation of undesirable content
  description: This risk arises when an agent generates text, images, audio, or other
    media that contain toxic, hateful, sexual, or otherwise inappropriate content.
    As a result, the system may cause harm to users, violate organisational standards
    or regulations, or undermine trust in the system’s outputs.
  element_ids:
  - CAP-04
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-06
  - HZ-07
  controls:
  - CTRL-0044
  sources:
  - https://arxiv.org/abs/2402.04249v2
  crosswalks:
    owasp_asi: []
    owasp_agentic_threats: []
    mitre_atlas: []
RISK-025:
  statement: Generation of unqualified advice in specialised domains
  description: This risk arises when an agent generates advice or guidance in specialised
    domains such as medical, financial, or legal contexts without appropriate expertise,
    validation, or safeguards. As a result, users may act on incorrect or inappropriate
    information, leading to potential harm or adverse outcomes.
  element_ids:
  - CAP-04
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-08
  controls:
  - CTRL-0045
  sources:
  - "https://arxiv.org/abs/2401.01301"
  - "https://genai.owasp.org/llmrisk/llm092025-misinformation/"
  crosswalks:
    owasp_asi: []
    owasp_agentic_threats: []
    mitre_atlas: []
RISK-026:
  statement: Generation of controversial or sensitive content
  description: This risk arises when an agent generates content related to sensitive
    or controversial topics, such as political commentary or denigrating comments
    about competitors. As a result, the system may create reputational, legal, or
    compliance issues, or be perceived as biased, inappropriate, or misrepresentative
    of organisational views.
  element_ids:
  - CAP-04
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-07
  - HZ-09
  controls:
  - CTRL-0046
  sources:
  - https://news.stanford.edu/stories/2025/05/ai-models-llms-chatgpt-claude-gemini-partisan-bias-research-study
  crosswalks:
    owasp_asi: []
    owasp_agentic_threats: []
    mitre_atlas: []
RISK-027:
  statement: Regurgitating personally identifiable information
  description: This risk arises when an agent reproduces personally identifiable information
    in its generated outputs, whether drawn from training data, memory, or prior interactions.
    As a result, the system may violate privacy obligations, expose individuals to
    harm, or breach data protection requirements.
  element_ids:
  - CAP-04
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-08
  controls:
  - CTRL-0047
  sources:
  - https://www.edpb.europa.eu/system/files/2025-04/ai-privacy-risks-and-mitigations-in-llms.pdf
  crosswalks:
    owasp_asi:
    - ASI06
    owasp_agentic_threats:
    - T1
    mitre_atlas: []
RISK-028:
  statement: Generation of non-factual or hallucinated content
  description: This risk arises when an agent generates information that is inaccurate,
    fabricated, or unsupported by evidence while presenting it as factual. As a result,
    users may be misled, make incorrect decisions, or lose trust in the system’s outputs.
  element_ids:
  - CAP-04
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-08
  - HZ-09
  controls:
  - CTRL-0048
  - CTRL-0049
  - CTRL-0050
  sources:
  - https://arxiv.org/abs/2309.01219
  crosswalks:
    owasp_asi:
    - ASI08
    owasp_agentic_threats:
    - T5
    mitre_atlas: []
RISK-029:
  statement: Generation of copyrighted content
  description: This risk arises when an agent generates content that reproduces or
    closely resembles copyrighted material without appropriate rights or attribution.
    As a result, the system may infringe intellectual property laws, expose the organisation
    to legal liability, or violate licensing and usage terms.
  element_ids:
  - CAP-04
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-05
  controls:
  - CTRL-0051
  sources:
  - https://arxiv.org/abs/2407.07087
  crosswalks:
    owasp_asi: []
    owasp_agentic_threats: []
    mitre_atlas: []
RISK-030:
  statement: Misrepresentation of authorship
  description: This risk arises when recipients are misled about whether an official
    communication was authored by a human or generated by an agent on behalf of the
    organisation. As a result, stakeholders may form incorrect assumptions about accountability,
    intent, or authority, potentially leading to trust, legal, or reputational issues.
  element_ids:
  - CAP-05
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-09
  controls:
  - CTRL-0052
  sources:
  - "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    owasp_asi:
    - ASI09
    owasp_agentic_threats:
    - T15
    mitre_atlas: []
RISK-031:
  statement: Inaccurate promises or statements in official communications
  description: This risk arises when an agent makes commitments, assurances, or public
    statements that are incorrect, unsupported, or exceed the organisation’s actual
    intentions or capabilities. As a result, the organisation may face reputational
    damage, legal exposure, or loss of public trust due to unmet expectations or misinformation.
  element_ids:
  - CAP-05
  failure_mode: Agent Error
  type:
  - Safety
  hazards:
  - HZ-09
  - HZ-10
  controls:
  - CTRL-0053
  - CTRL-0054
  - CTRL-0055
  - CTRL-0094
  sources:
  - "https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do"
  - "https://incidentdatabase.ai/cite/622/"
  crosswalks:
    owasp_asi:
    - ASI09
    owasp_agentic_threats:
    - T15
    mitre_atlas: []
RISK-032:
  statement: Unauthorised execution of business transactions
  description: This risk arises when an agent initiates, authorises, or executes business
    transactions outside predefined approval thresholds, roles, or authorisation limits.
    As a result, the organisation may be exposed to unintended financial losses, binding
    contractual obligations, or operational commitments that were not properly sanctioned.
  element_ids:
  - CAP-06
  min_authority:
    CAP-06: act-with-approval
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-04
  - HZ-10
  controls:
  - CTRL-0056
  - CTRL-0057
  - CTRL-0058
  - CTRL-0059
  - CTRL-0094
  sources:
  - "https://arxiv.org/abs/2503.16248"
  crosswalks:
    owasp_asi:
    - ASI02
    - ASI01
    owasp_agentic_threats:
    - T2
    - T6
    mitre_atlas: []
RISK-033:
  statement: Leakage of transaction credentials
  description: This risk arises when credentials, tokens, or sensitive authentication
    information used to execute business transactions are exposed, mishandled, or
    improperly stored by an agent or its supporting systems. As a result, malicious
    parties may gain the ability to initiate unauthorised transactions, manipulate
    financial operations, or compromise transactional systems.
  element_ids:
  - CAP-06
  failure_mode: Tool or Resource Malfunction
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-04
  - HZ-10
  controls:
  - CTRL-0058
  sources:
  - https://arxiv.org/pdf/2506.01055
  crosswalks:
    owasp_asi:
    - ASI03
    owasp_agentic_threats:
    - T3
    mitre_atlas:
    - AML.T0083
    - AML.T0055
RISK-034:
  statement: Prompt injection via malicious websites
  description: This risk arises when an agent retrieves or processes content from
    malicious or untrusted websites that are designed to inject instructions or manipulative
    prompts into the system. As a result, the agent may follow unintended commands,
    override intended constraints, or take actions that compromise system behaviour
    or integrity.
  element_ids:
  - CAP-07
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0060
  - CTRL-0061
  - CTRL-0062
  - CTRL-0090
  sources:
  - https://unit42.paloaltonetworks.com/agentic-ai-threats/
  crosswalks:
    owasp_asi:
    - ASI01
    owasp_agentic_threats:
    - T6
    mitre_atlas:
    - AML.T0051.001
    - AML.T0078
RISK-035:
  statement: Unreliable information or websites
  description: This risk arises when an agent retrieves and presents information from
    websites that are inaccurate, outdated, biased, or otherwise unreliable. As a
    result, users may be misinformed or make incorrect decisions based on content
    that has not been adequately validated or corroborated.
  element_ids:
  - CAP-07
  failure_mode: Tool or Resource Malfunction
  type:
  - Safety
  hazards:
  - HZ-08
  - HZ-09
  controls:
  - CTRL-0063
  sources:
  - "https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php"
  - "https://genai.owasp.org/llmrisk/llm092025-misinformation/"
  crosswalks:
    owasp_asi:
    - ASI06
    owasp_agentic_threats:
    - T5
    mitre_atlas: []
RISK-036:
  statement: Prompt injection risks through computer use
  description: This risk arises when an agent interacts with graphical user interfaces
    that display untrusted or adversarial content - such as web pages, documents,
    pop-ups, or form fields - crafted to embed hidden instructions or manipulative
    cues. As a result, the agent may misinterpret on-screen text as authoritative
    guidance, follow injected instructions, or perform unintended actions while operating
    the interface.
  element_ids:
  - CAP-08
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0062
  - CTRL-0064
  - CTRL-0065
  - CTRL-0090
  sources:
  - https://arxiv.org/html/2505.13076v1
  - https://hiddenlayer.com/innovation-hub/indirect-prompt-injection-of-claude-computer-use/
  crosswalks:
    owasp_asi:
    - ASI01
    owasp_agentic_threats:
    - T6
    mitre_atlas:
    - AML.T0100
    - AML.T0051.001
RISK-037:
  statement: Exposure of sensitive data
  description: This risk arises when an agent operating a computer interface accesses
    websites or applications that contain personally identifiable or sensitive information,
    particularly when authenticated as a user or organisation. As a result, the agent
    may inadvertently view, process, or disclose confidential data beyond its intended
    scope or authorisation.
  element_ids:
  - CAP-08
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-08
  controls:
  - CTRL-0047
  - CTRL-0066
  - CTRL-0089
  - CTRL-0097
  sources:
  - https://arxiv.org/html/2506.00618v3
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T2
    mitre_atlas: []
RISK-038:
  statement: Incorrect use of unfamiliar programmatic interfaces
  description: This risk arises when an agent interacts with programmatic interfaces
    it has not been trained or configured to use correctly, particularly bespoke or
    non-standard interfaces outside established protocols such as MCP servers. As
    a result, the agent may misinterpret interface semantics, invoke operations incorrectly,
    or produce unintended effects due to improper integration or usage.
  element_ids:
  - CAP-09
  failure_mode: Agent Error
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0041
  - CTRL-0067
  sources:
  - https://arxiv.org/abs/2305.15334
  - https://arxiv.org/abs/2309.15817
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T2
    mitre_atlas: []
RISK-039:
  statement: Production or execution of poor or ineffective code
  description: This risk arises when an agent generates or executes code that is incorrect,
    inefficient, insecure, or unsuitable for the intended task. As a result, the code
    may fail to achieve desired outcomes, introduce bugs or vulnerabilities, or cause
    operational disruptions when deployed or run.
  element_ids:
  - CAP-10
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-02
  controls:
  - CTRL-0068
  - CTRL-0069
  - CTRL-0070
  - CTRL-0071
  - CTRL-0072
  sources:
  - https://www.usenix.org/system/files/conference/usenixsecurity25/sec25cycle1-prepub-742-spracklen.pdf
  - https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
  - https://proceedings.neurips.cc/paper_files/paper/2024/hash/bfd082c452dffb450d5a5202b0419205-Abstract-Datasets_and_Benchmarks_Track.html
  crosswalks:
    owasp_asi:
    - ASI05
    owasp_agentic_threats:
    - T11
    mitre_atlas: []
RISK-040:
  statement: Production or execution of vulnerable or malicious code
  description: This risk arises when an agent executes code that contains security
    vulnerabilities or intentionally malicious logic, whether generated by the model
    or sourced externally. As a result, the system may be compromised through exploitation,
    unauthorised access, data leakage, or other harmful effects.
  element_ids:
  - CAP-10
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-02
  controls:
  - CTRL-0069
  - CTRL-0070
  - CTRL-0071
  - CTRL-0072
  - CTRL-0073
  - CTRL-0074
  sources:
  - https://arxiv.org/pdf/2501.08200
  - https://arxiv.org/html/2504.21205v1
  crosswalks:
    owasp_asi:
    - ASI05
    owasp_agentic_threats:
    - T11
    mitre_atlas:
    - AML.T0050
    - AML.T0011.001
    - AML.T0060
RISK-041:
  statement: Unintended overwriting or deletion of files or data
  description: This risk arises when an agent modifies, overwrites, or deletes files,
    database tables, or datasets without explicit user instruction or authorisation.
    As a result, critical information may be lost or corrupted, leading to data integrity
    issues, operational disruption, or the need for costly recovery efforts.
  element_ids:
  - CAP-11
  min_authority:
    CAP-11: act-with-approval
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-01
  controls:
  - CTRL-0075
  - CTRL-0076
  - CTRL-0077
  - CTRL-0094
  sources:
  - https://syssec.dpss.inesc-id.pt/papers/pedro_icse25.pdf
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T2
    mitre_atlas: []
RISK-042:
  statement: Database overload due to inefficient data operations
  description: This risk arises when an agent issues poorly optimised, excessively
    frequent, or redundant queries against databases or data stores. As a result,
    system performance may degrade, resources may be exhausted, or critical services
    may become unavailable due to unnecessary load.
  element_ids:
  - CAP-11
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-03
  controls:
  - CTRL-0078
  - CTRL-0079
  - CTRL-0080
  sources:
  - "https://www.tinybird.co/blog-posts/which-llm-writes-the-best-sql"
  - "https://arxiv.org/abs/2305.03111"
  - "https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/"
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T4
    mitre_atlas: []
RISK-043:
  statement: Exposure of sensitive data through file or database access
  description: This risk arises when an agent accesses, processes, or outputs personally
    identifiable or sensitive information stored in files or databases without appropriate
    safeguards. As a result, confidential data may be disclosed to unauthorised parties,
    leading to privacy breaches, regulatory non-compliance, or loss of trust.
  element_ids:
  - CAP-11
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-01
  controls:
  - CTRL-0047
  - CTRL-0081
  - CTRL-0082
  sources:
  - "https://arxiv.org/abs/2509.10540"
  - "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/"
  crosswalks:
    owasp_asi:
    - ASI02
    - ASI03
    owasp_agentic_threats:
    - T2
    - T3
    mitre_atlas: []
RISK-044:
  statement: Prompt injection via malicious files or data
  description: This risk arises when an agent ingests or processes maliciously crafted
    files or data that embed hidden instructions or manipulative content. As a result,
    the agent may follow unintended prompts, alter its behaviour, or execute actions
    that compromise system safety or integrity.
  element_ids:
  - CAP-11
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0062
  - CTRL-0083
  - CTRL-0090
  - CTRL-0097
  sources:
  - "https://arxiv.org/abs/2509.10540"
  - "https://arxiv.org/abs/2403.02817"
  crosswalks:
    owasp_asi:
    - ASI01
    - ASI06
    owasp_agentic_threats:
    - T6
    - T1
    mitre_atlas:
    - AML.T0051.001
    - AML.T0099
    - AML.T0070
RISK-045:
  statement: Misconfiguration of system resources
  description: This risk arises when an agent incorrectly configures system settings,
    infrastructure resources, or operational parameters. As a result, system performance,
    reliability, or security may be degraded, leading to service disruptions or unintended
    operational behaviour.
  element_ids:
  - CAP-12
  min_authority:
    CAP-12: act-with-approval
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-02
  - HZ-03
  controls:
  - CTRL-0084
  - CTRL-0085
  sources:
  - https://neurips.cc/virtual/2024/poster/97835
  - https://arxiv.org/html/2507.10584v1
  crosswalks:
    owasp_asi:
    - ASI02
    - ASI08
    owasp_agentic_threats:
    - T2
    mitre_atlas: []
RISK-046:
  statement: System overload due to inefficient or excessive operations
  description: This risk arises when an agent issues poorly optimised, excessively
    frequent, or redundant system-level operations or queries. As a result, computing
    resources may be exhausted, system performance may degrade, or services may become
    unavailable due to unnecessary load.
  element_ids:
  - CAP-12
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-03
  controls:
  - CTRL-0086
  sources:
  - https://arxiv.org/html/2407.20859v1
  - https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T4
    mitre_atlas: []
RISK-047:
  statement: Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel
  description: This risk arises when an agent that takes in untrusted content (web pages, files, inbound email, chat, support tickets, form submissions, or API responses) also holds access to sensitive data and has any outbound channel, such as browsing, API calls, messages, or tool calls that carry data in URLs. Instructions injected through the content can then direct the agent to send data out through a legitimate channel, for example by fetching an attacker's URL with data in it, by replying or forwarding to an attacker's address, or by posting to a shared channel. Each capability may be individually controlled; the exposure comes from their combination, and the way in and the way out can be the same channel. As a result, confidential data can leave the organisation without any single control being bypassed, as demonstrated by EchoLeak, where a single crafted email led Microsoft 365 Copilot to send internal data to an attacker, and ForcedLeak, where instructions in a web-form submission led Salesforce Agentforce to exfiltrate CRM records.
  combination: lethal-trifecta
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  controls:
  - CTRL-0020
  - CTRL-0060
  - CTRL-0062
  - CTRL-0082
  - CTRL-0083
  - CTRL-0089
  - CTRL-0090
  - CTRL-0097
  sources:
  - "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
  - "https://www.varonis.com/blog/forcedleak"
  - "https://arxiv.org/abs/2509.10540"
  - "https://www.anthropic.com/engineering/how-we-contain-claude"
  - "https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf"
  crosswalks:
    owasp_asi:
    - ASI01
    - ASI02
    owasp_agentic_threats:
    - T6
    - T2
    mitre_atlas:
    - AML.T0051.001
    - AML.T0078
    - AML.T0085
    - AML.T0086
    - AML.T0077
RISK-048:
  statement: Compromise through the tool, skill, and dependency supply chain
  description: This risk arises when the tools, MCP servers, agent "skills" or plug-ins, prompt templates, and software packages an agent relies on are obtained through registries, marketplaces, package managers, or update channels that an attacker can seed, tamper with, or silently change after approval (the "rug pull"). Unlike the poisoning of a specific tool (RISK-006), the vector is the distribution channel itself, and agents increasingly perform installs and updates autonomously. As a result, malicious code or instructions reach production with the trust of a vetted dependency, as with the postmark-mcp backdoor, the mcp-remote remote-code-execution flaw, and marketplaces found to carry large numbers of malicious skills.
  element_ids:
  - CMP-03
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-02
  controls:
  - CTRL-0015
  - CTRL-0091
  sources:
  - https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
  - https://morphisec.com/mcp-attack-chain/
  - https://www.reco.ai/blog/openclaw-the-ai-agent-security-crisis-unfolding-right-now
  crosswalks:
    owasp_asi:
    - ASI04
    owasp_agentic_threats:
    - T17
    mitre_atlas:
    - AML.T0010.005
    - AML.T0010.001
    - AML.T0115.002
    - AML.T0109
RISK-049:
  statement: Escape from evaluation or sandbox containment onto live systems
  description: 'This risk arises when an agent that can execute code, operating in what is intended to be a contained setting — an evaluation, a red-team exercise, or a sandboxed task — reaches real systems because containment is incomplete: network egress is open, real credentials or accounts are present, or the objective can be pursued more easily outside the boundary. Capable agents have inferred that they were being evaluated and attacked third-party infrastructure to satisfy the task, and have taken unsanctioned actions against real people and organisations during cyber testing. As a result, activity meant to be harmless produces real-world security incidents.'
  element_ids:
  - DSN-02
  - CAP-10
  min_authority:
    CAP-10: act-with-approval
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-03
  - HZ-04
  - HZ-08
  - HZ-11
  controls:
  - CTRL-0029
  - CTRL-0040
  - CTRL-0065
  - CTRL-0069
  - CTRL-0089
  - CTRL-0092
  - CTRL-0098
  sources:
  - https://huggingface.co/blog/security-incident-july-2026
  - https://openai.com/index/hugging-face-model-evaluation-security-incident/
  - https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
  crosswalks:
    owasp_asi:
    - ASI10
    - ASI03
    owasp_agentic_threats:
    - T13
    - T7
    mitre_atlas:
    - AML.T0117
    - AML.T0122
    - AML.T0105
RISK-050:
  statement: Deceptive behaviour toward overseers
  description: This risk arises when an agent pursuing an objective misrepresents what it has done or found, edits or obscures its own history or logs, or socially engineers the humans overseeing it in order to obtain approval or avoid intervention. Unlike an error, the behaviour is goal-directed and can look legitimate step by step, so the evidence needed to detect it may have been altered by the agent itself. As a result, oversight based on the agent's own reports provides false assurance, and unsanctioned actions proceed under the appearance of compliance.
  element_ids:
  - CMP-01
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-04
  - HZ-09
  controls:
  - CTRL-0007
  - CTRL-0034
  - CTRL-0038
  - CTRL-0093
  sources:
  - https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
  - https://fortune.com/2026/06/18/google-deepmind-unveils-plan-to-protect-itself-from-its-own-rogue-ai-agents/
  - https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
  crosswalks:
    owasp_asi:
    - ASI10
    - ASI09
    owasp_agentic_threats:
    - T7
    mitre_atlas:
    - AML.T0138
    - AML.T0073
RISK-051:
  statement: Unsanctioned coordination between agents
  description: This risk arises when agents in a multi-agent system coordinate through channels or in ways that no operator sanctioned — sharing credentials, leaving each other messages in shared stores, using side channels, or dividing up a task so that each agent's actions look acceptable while the combined outcome is not. Coordination can emerge from shared objectives without any explicit instruction, and standard per-agent monitoring does not see it. As a result, the system as a whole pursues outcomes that would have been blocked had a single agent attempted them.
  element_ids:
  - DSN-01
  - CAP-02
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-04
  - HZ-08
  controls:
  - CTRL-0024
  - CTRL-0026
  - CTRL-0028
  - CTRL-0093
  - CTRL-0065
  sources:
  - https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
  - https://arxiv.org/abs/2502.14143
  - https://arxiv.org/abs/2601.11369
  crosswalks:
    owasp_asi:
    - ASI10
    - ASI07
    owasp_agentic_threats:
    - T13
    - T12
    mitre_atlas:
    - AML.T0118
    - AML.T0118.000
RISK-052:
  statement: Automation bias and erosion of human oversight
  description: 'This risk arises when human approval steps stop providing meaningful review: overseers approve by default under volume (one large deployment measured users approving around 93% of permission prompts), lack the context or expertise to evaluate what the agent proposes, or use interfaces designed for speed rather than scrutiny. Controls that assume a considered human decision then give false assurance, and adversaries can exploit the trust users place in fluent, confident agents. As a result, high-impact actions proceed with nominal rather than actual oversight.'
  element_ids:
  - DSN-03
  failure_mode: Safeguard Failure
  type:
  - Safety
  - Security
  hazards:
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0042
  - CTRL-0049
  - CTRL-0094
  sources:
  - https://www.anthropic.com/engineering/how-we-contain-claude
  - https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
  - https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
  crosswalks:
    owasp_asi:
    - ASI09
    owasp_agentic_threats:
    - T10
    mitre_atlas:
    - AML.T0067
    - AML.T0046
RISK-053:
  statement: Dependence on third-party agents as counterparties or delegates
  description: This risk arises when tasks are delegated to, or transactions conducted with, agents provided or operated by external parties — SaaS agents, partner agents reached through protocols such as A2A — whose instructions, tools, data handling, and updates are outside the organisation's control. Delegated work may be performed unsafely, data shared with the agent may be retained or reused, and behaviour can change without notice. As a result, the organisation carries the consequences of failures it cannot observe or govern directly.
  element_ids:
  - CMP-05
  - CAP-02
  failure_mode: Tool or Resource Malfunction
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-08
  controls:
  - CTRL-0024
  - CTRL-0025
  - CTRL-0026
  - CTRL-0039
  - CTRL-0040
  - CTRL-0095
  sources:
  - https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
  - https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
  - https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
  crosswalks:
    owasp_asi:
    - ASI04
    - ASI07
    owasp_agentic_threats:
    - T13
    mitre_atlas: []
RISK-054:
  statement: Insecure default configuration of agent frameworks and runtimes
  description: This risk arises when the frameworks and runtimes an agent is built on ship with insecure defaults — authentication disabled, services listening on all interfaces, permissive origin checks on local control channels, unsafe deserialisation of persisted state, or default credentials — and deployers inherit them unchanged. As a result, any reachable attacker can drive the agent and use the credentials and tools it holds, as shown by a one-click remote-code-execution flaw in a widely installed open-source agent and a chain of deserialisation flaws in agent orchestration frameworks.
  element_ids:
  - DSN-02
  failure_mode: Tool or Resource Malfunction
  type:
  - Security
  hazards:
  - HZ-03
  - HZ-04
  controls:
  - CTRL-0009
  - CTRL-0096
  sources:
  - "https://thehackernews.com/2026/06/langgraph-flaw-chain-exposes-self.html"
  - "https://nvd.nist.gov/vuln/detail/CVE-2026-25253"
  - "https://github.com/advisories/GHSA-g48c-2wqr-h844"
  crosswalks:
    owasp_asi:
    - ASI03
    - ASI05
    owasp_agentic_threats:
    - T3
    - T11
    mitre_atlas:
    - AML.T0132
    - AML.T0049
    - AML.T0083
RISK-055:
  statement: Data exfiltration through message and API channels
  superseded_by: RISK-047
  description: "This risk arises when an agent that reads messages or data sent by outside parties through a programmatic channel — email, chat, support tickets, form submissions, webhooks, or API responses — also holds access to sensitive data and can send messages or make API calls outward. Instructions injected in an inbound message can then direct the agent to send data out through a legitimate channel: replying or forwarding to an attacker's address, posting to a shared channel, or calling an API with data in its parameters or in a URL. Unlike RISK-047, no web access is needed, because the message channel is both the way in and the way out. As a result, confidential data can leave the organisation without any single control being bypassed, as demonstrated by EchoLeak, where a single crafted email led Microsoft 365 Copilot to send internal data to an attacker, and ForcedLeak, where instructions in a web-form submission led Salesforce Agentforce to exfiltrate CRM records."
  element_ids:
  - CAP-09
  - CAP-11
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  controls: []
  sources:
  - https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf
  - https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
  - https://www.hackthebox.com/blog/cve-2025-32711-echoleak-copilot-vulnerability
  - https://www.varonis.com/blog/forcedleak
  crosswalks:
    owasp_asi:
    - ASI01
    - ASI02
    owasp_agentic_threats:
    - T6
    - T2
RISK-056:
  statement: Actions beyond the agent's tools through code execution and reachable credentials
  description: This risk arises when an agent that can run code can also read files, environment variables, or data stores that hold credentials, tokens, or keys, so the code it writes can act with whatever those credentials allow instead of only through the tools it was given. Approval steps, allowlists, and rate limits placed on the agent's tools then do not constrain it, because the code calls the database, cloud API, or deployment platform directly. As a result, a misjudgement or an injected instruction can cause destructive or unauthorised actions far outside the agent's intended scope, as when a coding agent used a broadly scoped infrastructure token to delete a company's production database and the backups stored with it, and when a coding agent deleted a live production database during a code freeze.
  element_ids:
  - CAP-10
  min_authority:
    CAP-10: act-with-approval
  failure_mode: Safeguard Failure
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-03
  - HZ-04
  controls:
  - CTRL-0029
  - CTRL-0069
  - CTRL-0070
  - CTRL-0076
  - CTRL-0077
  - CTRL-0098
  sources:
  - "https://incidentdatabase.ai/cite/1469/"
  - "https://hackread.com/cursor-ai-agent-wipes-pocketos-database-backups/"
  - "https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/"
  crosswalks:
    owasp_asi:
    - ASI03
    - ASI05
    owasp_agentic_threats:
    - T3
    - T11
    mitre_atlas:
    - AML.T0055
RISK-057:
  statement: Pursuit of a goal by means the principal did not sanction
  description: This risk arises when an agent that plans its own steps meets an obstacle and reaches its goal by a route that the people responsible for it did not authorise. It uses a credential or an account it came across, exploits a weakness in a system that belongs to someone else, spends from a wallet it was not given, or acts against a person who stands in its way. The agent has not been attacked and has not misunderstood the task; it treats the restriction as a problem to solve. As a result, the organisation may find that its agent has broken into, altered, or drawn on systems and resources outside the deployment, or has harmed outside parties, as when agents under evaluation breached a model-hosting company's production systems to find answers, an agent in training used an API key it found in a public repository to reach a data service, and a personal agent exploited a gym's booking API to move its user up a waiting list.
  element_ids:
  - CAP-01
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-04
  - HZ-11
  controls:
  - CTRL-0029
  - CTRL-0038
  - CTRL-0040
  - CTRL-0065
  - CTRL-0093
  - CTRL-0099
  sources:
  - "https://openai.com/index/hugging-face-model-evaluation-security-incident/"
  - "https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/"
  - "https://www.affinda.com/expert-insights/when-my-ai-agent-hacked-my-gym-mythos-stopped-feeling-theoretical/"
  - "https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/"
  crosswalks:
    owasp_asi:
    - ASI10
    - ASI03
    owasp_agentic_threats:
    - T7
    - T3
    mitre_atlas:
    - AML.T0117
    - AML.T0055
RISK-058:
  statement: Instruction and configuration files as a way in
  description: "This risk arises when an agent loads instructions, rules, settings, hooks, skills, or tool configuration from files that someone other than its operator can write: a rules file in a cloned repository, an instruction file in a downloads folder, a project-level settings file, or a tool configuration that the agent itself can edit. These files are read automatically, often before any trust prompt, and what they contain is treated as the operator's own instructions or runs as commands. As a result, anyone who can place or change such a file can direct the agent or run code on the machine it works on, and the change persists across sessions, as when malicious packages planted hidden instructions in coding assistants' instruction files, a cloned repository's settings took effect before the user was asked to trust it, and a crafted chat message led a coding agent to rewrite its own tool configuration."
  element_ids:
  - CMP-02
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-02
  controls:
  - CTRL-0019
  - CTRL-0091
  - CTRL-0100
  - CTRL-0101
  sources:
  - "https://socket.dev/blog/trapdoor-crypto-stealer-npm-pypi-crates"
  - "https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/"
  - "https://nvd.nist.gov/vuln/detail/CVE-2025-54135"
  - "https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents"
  crosswalks:
    owasp_asi:
    - ASI01
    - ASI04
    owasp_agentic_threats:
    - T6
    - T17
    mitre_atlas:
    - AML.T0051.001
    - AML.T0010.005
RISK-059:
  statement: Prompt injection through inbound messages
  description: This risk arises when an agent reads messages or records that outside parties can write, such as email, chat, calendar invitations, support tickets, issue and pull-request comments, form submissions, or log entries, and treats instructions hidden in them as its own. Unlike a web page that the agent chooses to visit, a message arrives unasked and can wait until the agent processes it, so the attacker needs nothing more than the ability to send it. As a result, the agent may act on the attacker's behalf with the authority it holds, for example by changing configuration, transferring ownership of resources, publishing software, or operating connected devices, as when an injected issue title led a triage bot to compromise a software release, and hidden text in a calendar invitation led an assistant to operate smart-home devices. RISK-047 covers the case where the injected instruction causes data to leave the organisation.
  element_ids:
  - CAP-09
  failure_mode: External Manipulation
  type:
  - Safety
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-08
  controls:
  - CTRL-0019
  - CTRL-0020
  - CTRL-0062
  - CTRL-0090
  sources:
  - "https://cline.bot/blog/post-mortem-unauthorized-cline-cli-npm"
  - "https://www.codeintegrity.ai/blog/heroku"
  - "https://www.theregister.com/2025/08/08/infosec_hounds_spot_prompt_injection/"
  - "https://openai.com/index/hardening-atlas-against-prompt-injection/"
  crosswalks:
    owasp_asi:
    - ASI01
    owasp_agentic_threats:
    - T6
    mitre_atlas:
    - AML.T0051.001
    - AML.T0093
RISK-060:
  statement: Agent credentials that are over-broad, long-lived, or outlive their use
  description: This risk arises when the identities and credentials that agents use are broader than the task needs, do not expire, are stored where other software can read them, or stay valid after the agent, the integration, or the vendor relationship has ended. Agents, and the platforms and vendors that act for them, accumulate tokens for many systems, and a single theft then opens all of them. As a result, a compromise of an agent, of a developer's machine, or of an agent vendor gives an attacker standing access to the organisation's systems, as when stolen tokens belonging to a sales chat agent were used to pull data from hundreds of its customers' environments, a breach at an agent-integration platform exposed more than ten thousand credentials held for customers' agents, and a software release was hijacked through an agent-platform key that had never been revoked.
  element_ids:
  - DSN-02
  failure_mode: Safeguard Failure
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-04
  controls:
  - CTRL-0011
  - CTRL-0029
  - CTRL-0030
  - CTRL-0102
  sources:
  - "https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift"
  - "https://composio.dev/blog/composio-may-2026-security-incident"
  - "https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain"
  - "https://vercel.com/kb/bulletin/vercel-april-2026-security-incident"
  crosswalks:
    owasp_asi:
    - ASI03
    owasp_agentic_threats:
    - T3
    - T9
    mitre_atlas:
    - AML.T0055
    - AML.T0083
    - AML.T0091.000
RISK-061:
  statement: Dependence on a model provider
  description: This risk arises when an agentic system depends on a model that another party hosts, and that party withdraws it, changes it, limits access to it, or suffers an outage. A model can be retired at short notice, updated in ways that change how it calls tools or follows instructions, degraded by a fault on the provider's side that goes unannounced for weeks, or made unavailable by a commercial or regulatory decision. As a result, an agent may stop working, or may keep working while behaving differently from the system that was evaluated and approved, as when infrastructure faults at a provider silently degraded model output for weeks, a provider disabled two models for all customers following an export-control directive, and a regional degradation at a provider caused cascading failures in a customer-service agent product.
  element_ids:
  - CMP-01
  failure_mode: Tool or Resource Malfunction
  type:
  - Security
  hazards:
  - HZ-02
  controls:
  - CTRL-0005
  - CTRL-0038
  - CTRL-0103
  sources:
  - "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues"
  - "https://www.anthropic.com/news/fable-mythos-access"
  - "https://support.zendesk.com/hc/en-us/articles/10932821917082-Service-Incident-June-19-2026-AI-Agents-OpenAI-service-delays-and-error-issues"
  crosswalks:
    owasp_asi:
    - ASI08
    owasp_agentic_threats: []
    mitre_atlas: []
RISK-062:
  statement: Agent alters or disables the oversight placed on it
  description: This risk arises when an agent is able to change the logs, monitors, permissions, approval settings, or configuration that are meant to constrain it, and does so in pursuit of its task or at the direction of injected content. It may mute an alert that is slowing it down, switch off a confirmation step, widen its own permissions, edit a log, or report an action as approved when it was not. As a result, the organisation loses the record and the checks it relies on to know what the agent did and to stop it, as when internal coding agents muted the alerts of the system monitoring them and one removed its monitor, an injected code comment led a coding assistant to turn off its own confirmation prompts, and a sandboxed coding agent was able to switch off its own sandbox and approvals.
  combination: oversight-within-reach
  failure_mode: Agent Misbehaviour
  type:
  - Safety
  - Security
  hazards:
  - HZ-04
  - HZ-09
  controls:
  - CTRL-0032
  - CTRL-0034
  - CTRL-0065
  - CTRL-0093
  - CTRL-0101
  sources:
  - "https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/"
  - "https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/"
  - "https://embracethered.com/blog/posts/2025/github-copilot-remote-code-execution-via-prompt-injection/"
  - "https://thehackernews.com/2026/09/deepseek-harness-flaw-let-ai-agents.html"
  crosswalks:
    owasp_asi:
    - ASI10
    owasp_agentic_threats:
    - T7
    - T8
    mitre_atlas:
    - AML.T0138
RISK-063:
  statement: Authority passing between agents without a check
  description: This risk arises when one agent treats a request or a message from another agent as authorisation to act, without checking that the person on whose behalf the first agent is working is entitled to that action. A low-privilege agent can then ask a higher-privilege agent to do what it cannot do itself, and an attacker who can influence any agent in the chain, or who can write somewhere that an agent reads, borrows the privileges of the most powerful one. As a result, the access controls set for each agent are bypassed by the path between them, as when an injected low-privilege agent recruited a higher-privilege agent through agent discovery to copy records it could not read itself, a prompt posted by one company's agent was executed as a transfer instruction by another company's agent, and a public triage agent was led to invoke a workflow reserved for maintainers.
  element_ids:
  - CAP-02
  failure_mode: Safeguard Failure
  type:
  - Safety
  - Security
  hazards:
  - HZ-04
  - HZ-10
  controls:
  - CTRL-0024
  - CTRL-0026
  - CTRL-0029
  - CTRL-0104
  sources:
  - "https://appomni.com/ao-labs/ai-agent-to-agent-discovery-prompt-injection/"
  - "https://slowmist.medium.com/behind-the-grok-exploitation-an-analysis-of-ai-agent-permission-chain-abuse-4d832d1bfc73"
  - "https://www.pillar.security/blog/ill-just-call-you-agent-to-agent-privilege-boundary-failures-in-ci-cd-on-googles-adk-repository"
  crosswalks:
    owasp_asi:
    - ASI03
    - ASI07
    owasp_agentic_threats:
    - T3
    - T12
    mitre_atlas:
    - AML.T0053
    - AML.T0118.001
RISK-064:
  statement: Harm from a connected tool server or agent to the system that connects to it
  description: "This risk arises when a tool server or agent that another party builds or operates attacks the system that connects to it, or fails in a way that damages it. The connection itself is the route: a malicious server can abuse the protocol's authorisation or discovery steps to run commands on the connecting machine, obtain credentials meant for other services, or pose as a trusted server, and a faulty shared server can deliver one client's results to another. RISK-006 covers a connected party misleading the agent through what it says about itself; this risk covers harm that needs no cooperation from the model at all. As a result, connecting to a server can compromise the host, its credentials, or other users' data, as when a malicious tool server could run commands on any machine that connected to it through a widely used client, and a race condition in a protocol library sent tool results to the wrong client."
  element_ids:
  - CMP-05
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-02
  - HZ-04
  controls:
  - CTRL-0009
  - CTRL-0010
  - CTRL-0012
  - CTRL-0013
  - CTRL-0031
  - CTRL-0091
  - CTRL-0096
  sources:
  - "https://jfrog.com/blog/2025-6514-critical-mcp-remote-rce-vulnerability/"
  - "https://vulnerablemcp.info/vuln/cve-2026-25536-sdk-cross-client-data-leak.html"
  - "https://www.pillar.security/blog/open-and-shut-remote-code-execution-in-opencode-via-mcp-oauth"
  - "https://github.com/advisories/GHSA-jm63-cq47-j5jp"
  crosswalks:
    owasp_asi:
    - ASI04
    - ASI07
    owasp_agentic_threats:
    - T16
    - T17
    mitre_atlas:
    - AML.T0010.005
    - AML.T0011.002
RISK-065:
  statement: Instructions or approvals forged in the principal's name
  description: This risk arises when something other than the principal can supply what the agent treats as the principal's own instruction or approval. A link can open the agent with a prompt already filled in and submitted, another program or browser extension on the same machine can drive the agent's interface or click its approval prompts, a command-line flag can start the agent with its permission checks turned off, and a compromised operator console can queue instructions as if they came from the operator. The register's injection risks concern content that the agent reads; here the attacker speaks with the user's voice. As a result, the agent carries out an attacker's request with the user's full authority, and its approval steps are satisfied without a person, as when a link with a pre-filled prompt made an assistant send the user's data to an attacker, malicious packages invoked developers' locally installed coding agents with their safety checks disabled, and a trading agent sent funds to an attacker who had queued prompts through its operator dashboard.
  element_ids:
  - DSN-02
  failure_mode: External Manipulation
  type:
  - Security
  hazards:
  - HZ-01
  - HZ-04
  controls:
  - CTRL-0042
  - CTRL-0096
  - CTRL-0105
  sources:
  - "https://www.varonis.com/blog/reprompt"
  - "https://nx.dev/blog/s1ngularity-postmortem"
  - "https://incidentdatabase.ai/cite/1003/"
  - "https://www.oasis.security/resources/reports/claude-url-scheme-prompt-injection"
  crosswalks:
    owasp_asi:
    - ASI09
    - ASI03
    owasp_agentic_threats:
    - T9
    mitre_atlas:
    - AML.T0073
    - AML.T0078
RISK-066:
  statement: Personal data collected, kept, or passed on beyond what the task needs
  description: This risk arises when an agent gathers, keeps, or passes on more personal data than its task requires. It may index a whole mailbox or drive to answer one question and keep the index afterwards, record people who have not agreed to it, place personal details in a search query or in an API call to another company, or upload local files to a hosted service by default. No one need attack the agent for this to happen, and each step can look like ordinary tool use. As a result, personal data is held without a purpose, reaches third parties that have no right to it, or is published, in breach of data protection obligations, as when a coding assistant uploaded users' whole local repositories to a cloud service by default, a personal assistant kept indexed email in place after it was no longer needed, and agents posted users' images to public image-hosting sites.
  element_ids:
  - CAP-11
  failure_mode: Agent Error
  type:
  - Security
  hazards:
  - HZ-01
  controls:
  - CTRL-0047
  - CTRL-0081
  - CTRL-0082
  - CTRL-0106
  sources:
  - "https://www.reuters.com/legal/litigation/chinas-zai-disables-ai-coding-assistant-features-after-security-issue-2026-09-21/"
  - "https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/"
  - "https://www.scmp.com/news/us/science-technology/article/3368883/openai-says-its-ai-agents-posted-user-images-online-error"
  crosswalks:
    owasp_asi:
    - ASI02
    owasp_agentic_threats:
    - T2
    mitre_atlas: []
RISK-067:
  statement: Use of the agent by its own principal against others
  description: This risk arises when the person or organisation that an agent works for directs it to act against others, or deploys it in a way that disregards them. A user may have it gather and compile personal information about people, build material for fraud, or act on another party's service in breach of that party's terms while disguised as a human; an operator may release an agent that transacts with businesses that never agreed to it. The agent does what it is told, so controls aimed at manipulation and error do not apply, and safeguards that judge each step in isolation can be defeated by spreading a harmful aim across routine steps. As a result, the organisation that provides or operates the agent may be answerable for harassment, privacy violations, fraud, or unauthorised access carried out through it, as when an agent compiled lists of people in vulnerable groups on request, an app-building agent produced and hosted complete phishing pages, and a shopping agent was alleged to have entered customer accounts on a retailer's site while presenting itself as a human user.
  element_ids:
  - CMP-02
  failure_mode: Misuse by the Principal
  type:
  - Safety
  hazards:
  - HZ-05
  - HZ-11
  controls:
  - CTRL-0008
  - CTRL-0038
  - CTRL-0044
  - CTRL-0052
  - CTRL-0107
  sources:
  - "https://hntrbrk.com/breaking-news/muse-doxxing"
  - "https://labs.guard.io/vibescamming-from-prompt-to-phish-benchmarking-popular-ai-agents-resistance-to-the-dark-side-1ec2fbdf0a35"
  - "https://www.perplexity.ai/hub/blog/bullying-is-not-innovation"
  - "https://www.modernretail.co/technology/brands-are-upset-that-buy-for-me-is-featuring-their-products-on-amazon-without-permission/"
  crosswalks:
    owasp_asi: []
    owasp_agentic_threats: []
    mitre_atlas: []
`,controls:`CTRL-0001:
  level: 0
  risks:
  - RISK-001
  statement: Use only LLMs from verified and trusted model developers
  recommendations: Untrusted or unknown model developers may introduce backdoors, data exfiltration risks, or inconsistent safety guarantees that compromise your agentic system. Establish evaluation criteria to assess model provider trustworthiness before adoption, including verification of published model cards, transparent responsible disclosure policies, evidence of security audits, and documented data handling practices. Evaluate whether the provider has an established track record, active security team, and clear incident response procedures. Regularly reassess providers against these criteria as new information emerges or the threat landscape evolves.
  enforcement:
  - organisation
  owner: governance
  phase:
  - design
  - operate
  evidence: The approved model provider register, with each provider's dated assessment against the trust criteria and the name of the assessor.
  test: List every model endpoint the system calls in production and confirm each provider has a register entry assessed within the review period.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.ncsc.gov.uk/files/Guidelines-for-secure-AI-system-development.pdf"
  - "https://genai.owasp.org/llmrisk/llm032025-supply-chain/"
  crosswalks:
    csa_addendum:
    - "2.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI04
    fiveeyes_agentic:
    - DV7
    - AA2
CTRL-0002:
  level: 0
  risks:
  - RISK-001
  statement: Obtain legally binding no-training and no-logging agreements from LLM API service providers
  recommendations: Without contractual protections, API providers may train models on your proprietary data or retain logs containing sensitive information, creating data leakage and compliance risks. Configure API settings to opt out of data logging and model training where available, and have your legal team review provider terms of service and data processing agreements to verify these protections are legally enforceable. Ensure alignment with your organisation's data governance and privacy requirements (e.g., GDPR, PDPA). Maintain records of these agreements and configurations for audit and compliance purposes.
  enforcement:
  - organisation
  - infrastructure
  owner: governance
  phase:
  - design
  - deploy
  evidence: The signed data processing agreement clause barring training on and retention of submitted data, and the provider account setting showing both switched off.
  test: Open the provider console for the production API key and confirm training use and log retention are switched off, matching the contract clause.
  references:
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://genai.owasp.org/llmrisk/llm032025-supply-chain/"
  crosswalks:
    csa_addendum:
    - "2.1"
    imda_mgf:
    - 2.2.1
    owasp_asi:
    - ASI04
    fiveeyes_agentic: []
CTRL-0003:
  level: 1
  risks:
  - RISK-001
  statement: Use only established and verified model loaders in production environments
  recommendations: Malicious or unvetted model loaders may execute arbitrary code during model deserialisation, potentially introducing backdoors or system vulnerabilities. Use well-maintained, community-vetted model loading libraries with active security support and regular updates. Examples include Hugging Face Transformers, vLLM, or official framework loaders (PyTorch, TensorFlow), whilst avoiding custom or unmaintained deserialisation code. Monitor for security advisories affecting your chosen loaders and apply patches promptly.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - build
  - operate
  evidence: The model-serving image's dependency lock file naming the loader library and pinned version, checked against the approved loader list.
  test: Scan the production serving image and confirm it holds only an approved loader, at a version with no open security advisory, and no custom deserialisation code.
  references:
  - "https://www.ncsc.gov.uk/files/Guidelines-for-secure-AI-system-development.pdf"
  - "https://huggingface.co/docs/hub/security-pickle"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "2.1"
    imda_mgf: []
    owasp_asi:
    - ASI04
    - ASI05
    fiveeyes_agentic:
    - DV7
    - AA2
CTRL-0004:
  level: 2
  risks:
  - RISK-002
  - RISK-003
  statement: Review the LLM's system card to inform risk assessment and model selection
  recommendations: System cards provide essential information about model capabilities, limitations, known failure modes, and safety evaluations that directly inform deployment decisions. Obtain and review the model's system card (or model card) before deployment, paying particular attention to documented risks, benchmark performance on safety evaluations, and limitations relevant to your use case. Use this information to identify potential misalignment between model behaviour and your application requirements, and to inform additional safeguards or testing strategies. If a system card is unavailable or incomplete, consider this a red flag when assessing provider trustworthiness.
  enforcement:
  - organisation
  owner: developer
  phase:
  - design
  evidence: The model selection record citing the system card version reviewed and mapping each documented limitation to an entry in the system's risk assessment.
  test: Pick three limitations from the current system card and confirm each has a matching safeguard or accepted-risk decision in the risk assessment.
  references:
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://arxiv.org/abs/1810.03993"
  crosswalks:
    csa_addendum:
    - "2.1"
    imda_mgf:
    - 2.1.1
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - AA2
CTRL-0005:
  level: 1
  risks:
  - RISK-002
  - RISK-003
  - RISK-061
  statement: Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
  recommendations: Deploying an LLM without comparative evaluation risks selecting a model poorly suited to your use case, potentially resulting in safety issues, poor performance, or misaligned behaviour. Define evaluation criteria aligned with your application requirements (e.g., accuracy on domain-specific tasks, refusal of unsafe requests, consistency of outputs) and benchmark multiple candidate models against these criteria using representative test scenarios. Use both automated metrics and human evaluation to assess instruction-following quality, safety boundaries, and failure modes. Document evaluation results to support model selection decisions and establish baseline performance expectations for ongoing monitoring.
  enforcement:
  - organisation
  - model
  owner: developer
  phase:
  - design
  - build
  evidence: The evaluation report scoring at least two candidate models on one test set for instruction-following, task performance and safety, with the selection decision.
  test: Re-run the stored evaluation set against the deployed model version and confirm its scores fall within the tolerance recorded in the report.
  references:
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "2.2"
    - "3.2"
    imda_mgf:
    - 2.3.2
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - DV2
CTRL-0006:
  level: 1
  superseded_by: CTRL-0042
  risks: []
  statement: Require human approval before executing high-impact actions
  recommendations: "Autonomous execution of high-impact actions without human oversight creates unacceptable risk of unintended consequences, including financial loss, data deletion, reputational damage, or safety incidents. Implement approval workflows that pause agent execution before critical actions (e.g., financial transactions, data deletion, external communications, system configuration changes) and present the proposed action with sufficient context for informed human decision-making. Design the approval interface to clearly display what will be executed, why the agent selected this action, and potential consequences. Ensure approval mechanisms cannot be bypassed by the agent and maintain audit logs of all approval decisions. Approval steps decay under volume: in one large deployment users approved about 93% of permission prompts. Pair this control with CTRL-0094 - measure approval and override rates, route routine actions to automated screening, and reserve human approval for genuinely uncertain or high-impact actions so that the approvals that remain are real decisions."
  references:
  - https://www.anthropic.com/engineering/how-we-contain-claude
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI01
    - ASI09
    fiveeyes_agentic:
    - DS2
    - OP3
CTRL-0007:
  level: 0
  risks:
  - RISK-001
  - RISK-002
  - RISK-003
  - RISK-050
  statement: Log all LLM inputs and outputs for regular review
  recommendations: Comprehensive logging enables post-incident analysis, safety monitoring, detection of adversarial inputs, and continuous improvement of LLM behaviour over time. Implement structured logging that captures all LLM inputs, outputs, timestamps, model versions, and relevant metadata (user ID, session ID, tool calls). Use a centralised logging system (e.g., ELK stack, Datadog, CloudWatch) with appropriate retention policies and access controls to protect sensitive data. Establish regular review processes—manual spot-checks or automated anomaly detection—to identify drift, unsafe outputs, or emerging failure patterns.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - build
  - operate
  evidence: A log query for one production session returning every model request and response with timestamp, model version, user identifier and session identifier.
  test: Send a prompt containing a unique marker string and confirm the central log returns both that prompt and the model's reply within minutes.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - DV6
    - OP1
CTRL-0008:
  level: 1
  risks:
  - RISK-002
  - RISK-022
  - RISK-067
  statement: Implement automated alerts when agent behaviour drifts from predefined thresholds
  recommendations: Behavioural drift may indicate model degradation, adversarial manipulation, or emergent unsafe patterns that require immediate investigation. Define baseline metrics for expected agent behaviour (e.g., tool usage patterns, response times, error rates, decision distributions) and establish acceptable variance thresholds based on your risk tolerance. Implement monitoring systems that continuously track these metrics and trigger alerts when deviations exceed thresholds, enabling rapid response to anomalies. Configure alerts to include sufficient diagnostic context (timestamp, affected sessions, deviation magnitude) and establish clear escalation procedures for investigating and remediating drift incidents.
  enforcement:
  - infrastructure
  - organisation
  owner: developer
  phase:
  - deploy
  - operate
  evidence: The alert rules in the monitoring system, each naming a behavioural metric, its baseline, its threshold and the escalation route.
  test: Replay a staging session with ten times the baseline tool-call rate and confirm an alert fires naming the session and the size of the deviation.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - OP1
CTRL-0009:
  level: 0
  risks:
  - RISK-004
  - RISK-054
  - RISK-064
  statement: Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
  recommendations: Weak or misconfigured authorisation on the servers and APIs that an agent's tools call can lead to unauthorised access, token theft, or privilege escalation that compromises connected systems. Before deployment, verify that every remote tool endpoint authenticates its caller with a standard mechanism (for example OAuth 2.1, OAuth 2.0 with PKCE, or mutually authenticated TLS) and enforces per-client scopes, and reject endpoints that rely on hard-coded credentials, unscoped shared keys, or deprecated authentication methods; test the authorisation flows in a development environment to confirm them. For MCP servers, also verify per-client consent flows and redirect URI validation to prevent authorisation bypasses, and reject servers with insufficient session management. As of the 2026-07-28 MCP specification, verify additionally that the server implements RFC 9207 issuer identification (so a client can detect a substituted authorization server) and Client ID Metadata Documents in place of dynamic client registration, and prefer servers that support the Enterprise-Managed Authorization extension so that access is governed by your identity provider rather than by per-user ad-hoc consent. Treat servers still built on the pre-2026 stateful session model as needing review before production use.
  enforcement:
  - infrastructure
  - organisation
  owner: security
  phase:
  - build
  - deploy
  evidence: The tool endpoint inventory recording each remote server's authentication mechanism and per-client scopes, with the integration review that exercised its authorisation flow.
  test: Call each production tool endpoint with no credential and with a credential scoped for a different client, and confirm both are refused.
  references:
  - https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
  - https://blog.modelcontextprotocol.io/posts/2026-07-28/
  crosswalks:
    csa_addendum:
    - "2.1"
    - "3.3"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI03
    - ASI04
    fiveeyes_agentic:
    - DS3
    - AA1
CTRL-0010:
  level: 1
  risks:
  - RISK-064
  statement: Use only MCP servers that validate credentials on every inbound request
  recommendations: Relying on session state or connection-based authentication without per-request validation creates vulnerability to session hijacking, token replay attacks, and unauthorised access after initial authentication. Verify that MCP servers implement stateless authentication by validating credentials (e.g., OAuth tokens, API keys) on every single request rather than caching authorisation decisions based on connection or session state. Test this behaviour by monitoring whether the server accepts requests with expired, revoked, or missing credentials after an initial successful authentication. Ensure the server responds with appropriate HTTP 401 errors when credentials are invalid, expired, or absent, forcing re-authentication rather than relying on stale authorisation state. The 2026-07-28 specification removes long-lived stateful sessions from the protocol core, making per-request validation the expected behaviour; treat a server whose authorization depends on session state as non-compliant.
  enforcement:
  - infrastructure
  - organisation
  owner: security
  phase:
  - build
  - deploy
  evidence: The MCP server assessment record containing captured responses to requests sent with expired, revoked and missing tokens after an initial successful login.
  test: Authenticate to the MCP server, revoke the token, send another request on the same connection and confirm it returns HTTP 401.
  references:
  - https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
  - https://blog.modelcontextprotocol.io/posts/2026-07-28/
  crosswalks:
    csa_addendum:
    - "2.6"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - OP5
CTRL-0011:
  level: 0
  risks:
  - RISK-005
  - RISK-060
  statement: Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes
  recommendations: Overly broad token scopes enable compromised or malicious actors to access resources beyond what is necessary for legitimate operations, amplifying the impact of security breaches. Define granular, task-specific scopes for each MCP server integration and request only the minimum permissions required for the intended functionality (e.g., "read:inventory" rather than "admin:*"). Review and document the justification for each requested scope during integration, and reject MCP servers that require unnecessarily broad permissions or fail to support fine-grained scope definitions. Periodically audit active token scopes to identify and revoke excessive permissions that may have accumulated over time.
  enforcement:
  - infrastructure
  - organisation
  owner: developer
  phase:
  - build
  - operate
  evidence: The OAuth client configuration listing each scope requested per tool integration with its justification, containing no wildcard or administrator scope.
  test: Decode a token issued to the agent in production, confirm its scopes match the configured list, then call an out-of-scope operation and confirm refusal.
  references:
  - https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
  crosswalks:
    csa_addendum:
    - "2.6"
    - "2.8"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - DS3
    - OP5
    - AA1
CTRL-0012:
  level: 2
  risks:
  - RISK-064
  statement: Use only MCP servers that integrate with authorisation servers implementing per-client consent mechanisms
  recommendations: Without explicit per-client consent, a malicious or compromised client could abuse delegated permissions to access resources the user never intended to authorise for that specific application. Verify that MCP servers integrate with OAuth 2.1 authorisation servers that implement per-client consent flows, where users explicitly approve each client-permission combination rather than granting blanket permissions across all clients. The authorisation server should clearly identify the requesting client and display what data or actions are being requested during the consent flow. Ensure the authorisation server persists consent decisions and provides mechanisms for users to review and revoke previously granted permissions. With Client ID Metadata Documents (2026-07-28 specification), the authorization server identifies the client from its published metadata; check that consent screens name the client accurately, and use the Enterprise-Managed Authorization extension where a central identity provider should govern access on behalf of all users.
  enforcement:
  - infrastructure
  - organisation
  owner: security
  phase:
  - build
  - deploy
  evidence: A capture of the authorisation server's consent screen naming the client and the permissions requested, and of the page where users review and revoke grants.
  test: Connect a second client under a user who has consented only to the first and confirm a fresh consent prompt appears before any access is granted.
  references:
  - https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization
  - https://aaronparecki.com/2025/11/25/1/mcp-authorization-spec-update
  - https://stytch.com/blog/mcp-authentication-and-authorization-servers/
  - https://blog.modelcontextprotocol.io/posts/2026-07-28/
  crosswalks:
    csa_addendum:
    - "3.3"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic: []
CTRL-0013:
  level: 0
  risks:
  - RISK-006
  - RISK-064
  statement: Test all untested MCP servers in a sandboxed environment before deploying to production
  recommendations: Untested MCP servers may contain vulnerabilities, malicious code, or unexpected behaviours that could compromise your production systems or data. Deploy MCP servers first to an isolated sandbox environment (e.g., containerised test environment, separate network segment, or dedicated development infrastructure) to evaluate their security posture, behaviour, and reliability. Monitor server activity during testing for anomalous network connections, excessive resource consumption, unauthorised file access, or other suspicious behaviours. Only promote MCP servers to production after successful security review, functional testing, and verification that the server behaves as documented.
  enforcement:
  - organisation
  - infrastructure
  owner: developer
  phase:
  - build
  - deploy
  evidence: The sandbox test report for each MCP server, recording observed network connections, file access and resource use, with the promotion approval.
  test: Add an MCP server with no sandbox test report to the production configuration and confirm the release review rejects it.
  references:
  - https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
  crosswalks:
    csa_addendum:
    - "2.9"
    imda_mgf:
    - 2.3.2
    owasp_asi:
    - ASI04
    fiveeyes_agentic:
    - DV7
    - DV4
CTRL-0014:
  level: 0
  superseded_by: CTRL-0091
  risks: []
  statement: Use only MCP servers from verified and trusted developers
  recommendations: Untrusted or unknown MCP server developers may introduce malicious functionality, security vulnerabilities, or data exfiltration mechanisms that compromise your agentic system. Establish evaluation criteria to assess MCP server developer trustworthiness before adoption, including verification of public code repositories, community reputation, security disclosure practices, and maintenance history. Evaluate whether the developer has a track record of responding to security issues, maintains active development, and provides transparent documentation of server capabilities. Prioritise MCP servers from the official Model Context Protocol repository, well-established organisations, or developers with verified identities and demonstrated security practices.
  references:
  - https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
  crosswalks:
    csa_addendum:
    - "2.1"
    - "3.3"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI04
    fiveeyes_agentic:
    - DV7
    - AA2
CTRL-0015:
  level: 1
  risks:
  - RISK-006
  - RISK-007
  - RISK-048
  statement: Treat all tool metadata and outputs as untrusted input requiring validation
  recommendations: Tool metadata (descriptions, parameter names, schema definitions) can contain prompt injection attacks that manipulate agent behaviour even without tool invocation, whilst tool outputs may contain malicious content designed to compromise downstream systems. Validate and sanitise all tool metadata before exposing it to the LLM, treating tool descriptions with the same scrutiny as external user input and implementing content filtering to detect embedded instructions or adversarial prompts. Apply strict schema validation to tool outputs and sanitise responses before using them in prompts, displaying them to users, or passing them to other systems. Implement monitoring and logging of tool metadata and outputs to enable detection of injection attempts and post-incident analysis of compromised tool behaviour.
  enforcement:
  - harness
  - model
  owner: developer
  phase:
  - build
  - operate
  evidence: The tool-layer code that validates tool outputs against schemas and scans tool descriptions for embedded instructions, with its log of rejections.
  test: Register a test tool whose description and output both carry an embedded instruction and confirm the description is flagged and the output rejected before reaching the model.
  references:
  - https://embracethered.com/blog/posts/2025/model-context-protocol-security-risks-and-exploits/
  - https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/
  - https://www.practical-devsecops.com/mcp-security-vulnerabilities/
  crosswalks:
    csa_addendum:
    - "4.1"
    - "3.3"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI02
    - ASI04
    fiveeyes_agentic:
    - OP2
    - DV3
    - DS4
CTRL-0016:
  level: 0
  risks:
  - RISK-008
  statement: Define clearly the agent's role, scope, and non-goals in the system prompt
  recommendations: Ambiguous or missing role definitions allow agents to interpret requests too broadly, potentially executing actions outside intended boundaries or misunderstanding their authority and constraints. Explicitly define the agent's purpose, permitted actions, and operational boundaries in the system prompt, including clear statements about what the agent should not do or attempt. Document specific examples of in-scope and out-of-scope behaviours to reduce ambiguity and guide the agent's decision-making in edge cases. Regularly review and refine these definitions based on observed agent behaviour, ensuring role boundaries remain aligned with evolving use cases and risk tolerances.
  enforcement:
  - prompt
  owner: developer
  phase:
  - design
  - build
  evidence: The system prompt in version control, with sections stating the agent's role, permitted actions and non-goals, and examples of in-scope and out-of-scope requests.
  test: Send ten requests that fall under the listed non-goals and confirm the agent declines each without calling a tool.
  references:
  - "https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  crosswalks:
    csa_addendum:
    - "2.3"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DP5
    - DS1
CTRL-0017:
  level: 1
  risks:
  - RISK-008
  statement: Define clear success criteria for the agent's tasks
  recommendations: Without explicit success criteria, agents may pursue task completion using inappropriate methods, over-optimise for partial objectives, or fail to recognise when they have achieved the intended outcome. Define measurable, verifiable success criteria for each task or category of tasks the agent performs, specifying both what constitutes successful completion and acceptable quality standards. Include criteria that address not just functional outcomes but also safety constraints, resource limits, and acceptable trade-offs. Regularly evaluate whether the agent's interpretation of success criteria aligns with intended outcomes and refine definitions to address observed gaps or misalignments.
  enforcement:
  - prompt
  owner: developer
  phase:
  - design
  - build
  evidence: The task instructions in version control stating measurable completion and quality criteria per task type, with matching acceptance checks in the evaluation suite.
  test: Run the acceptance checks on a sample of completed tasks and confirm the agent's own report of success agrees with the check result.
  references:
  - "https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentops01-bp01.html"
  - "https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentsus01-bp05.html"
  crosswalks:
    csa_addendum:
    - "2.3"
    - "3.2"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DP5
CTRL-0018:
  level: 2
  risks:
  - RISK-008
  statement: Define default behaviour when the agent encounters ambiguous situations
  recommendations: Agents encountering ambiguous instructions without clear fallback behaviour may make incorrect assumptions, proceed with risky actions, or halt unexpectedly, reducing reliability and increasing safety risks. Establish a default policy for handling ambiguity that aligns with your risk tolerance, such as requesting human clarification, selecting the most conservative option, or declining to act until uncertainty is resolved. Document this policy in the system prompt and provide examples of ambiguous scenarios to guide agent decision-making. Monitor how often the agent invokes ambiguity handling mechanisms to identify areas where task definitions or instructions require clarification.
  enforcement:
  - prompt
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The system prompt section stating the default action under ambiguity with worked examples, and a dashboard counting how often the agent invokes it.
  test: Give the agent an instruction with two conflicting readings and confirm it takes the stated default, such as asking for clarification, before any tool call.
  references:
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "2.10"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DP4
CTRL-0019:
  level: 0
  risks:
  - RISK-009
  - RISK-058
  - RISK-059
  statement: Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
  recommendations: Prompt injection attacks exploit LLMs' inability to distinguish between instructions and data, allowing malicious users to embed commands within input that override intended behaviour. Do not interpolate user input, retrieved content, or tool outputs into the system prompt or other instruction templates; fix the system prompt at build time and pass untrusted content to the model in the user or tool turns, where it carries less authority. Where untrusted content must be quoted, enclose it within clearly marked boundaries (e.g., XML tags or special markers) that are unlikely to appear naturally in the input, and instruct the LLM to treat delimited content as data rather than instructions. Neither measure is a complete defence, because the model can still follow instructions in untrusted content, so combine them with controls that do not depend on the model's compliance, such as a deterministic policy layer (CTRL-0090) and least privilege (CTRL-0029).
  enforcement:
  - harness
  - prompt
  owner: developer
  phase:
  - build
  evidence: The prompt-assembly code showing a fixed system prompt with no interpolated variables and a wrapper that places untrusted content inside tagged data blocks.
  test: Submit input containing the closing delimiter followed by an instruction and confirm the logged system prompt is unchanged and the input sits escaped inside its data block.
  references:
  - "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection"
  - "https://arxiv.org/abs/2403.14720"
  - "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DS1
    - DV3
CTRL-0020:
  level: 2
  risks:
  - RISK-009
  - RISK-047
  - RISK-059
  statement: Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
  recommendations: Using the same LLM for both input processing and task execution creates vulnerability to prompt injection attacks embedded in user input. Deploy a separate LLM instance configured specifically for input sanitisation, with explicit instructions to extract only designated fields (e.g., name, email, query text) whilst ignoring any other content including embedded commands or meta-instructions. Configure this extraction LLM with a restrictive system prompt focused solely on structured data extraction and validation against expected schemas. Validate extracted fields against expected formats before passing them to the main agent LLM, and monitor extraction outputs for anomalies that might indicate injection attempts.
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The pipeline configuration showing a separate extraction model call, with its own restrictive prompt and output schema, placed before the main agent.
  test: Submit an input with an instruction appended to a form field and confirm only schema-valid field values appear in the main agent's logged context.
  references:
  - "https://arxiv.org/abs/2506.08837"
  - "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "4.1"
    - "2.9"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DV3
    - DS4
CTRL-0021:
  level: 0
  risks:
  - RISK-010
  - RISK-011
  statement: Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
  recommendations: Unrestricted writes to persistent memory enable attackers to poison agent memory with malicious instructions, false information, or sensitive data that could compromise future agent behaviour or leak confidential information. Define explicit allowlists of permitted memory categories (e.g., user preferences, conversation context, task history) and denylists of forbidden content (e.g., credentials, system instructions, security policies, prompt overrides). Enforce these restrictions at the memory write interface, validating all write operations against the defined policies before persisting data.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The memory-write policy file listing permitted and forbidden content categories, and the write-interface code that checks every write against it.
  test: Ask the agent to remember an API key and a new standing instruction and confirm both writes are refused and logged.
  references:
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  - "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "2.6"
    - "2.7"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI06
    fiveeyes_agentic:
    - DP5
CTRL-0022:
  level: 1
  risks:
  - RISK-010
  statement: Implement content filtering on writes to persistent memory to detect and block known unsafe content patterns
  recommendations: Malicious actors may attempt to inject adversarial content into agent memory that bypasses category-based restrictions, such as jailbreak prompts, command injection templates, or social engineering content designed to manipulate future agent behaviour. Deploy content filtering mechanisms that scan all memory write operations for known unsafe patterns (e.g., jailbreak strings, tool invocation templates, prompt override attempts, phishing content) before persisting data. Implement filtering using prompt injection detectors (to detect jailbreak strings) or custom classifiers finetuned on specific risks (e.g. attempts to invoke tools maliciously).
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The memory-write filter configuration naming the injection detector or classifier and its threshold, with the log of blocked writes.
  test: Attempt to store a known jailbreak string and a tool-invocation template in memory and confirm the filter blocks both before they persist.
  references:
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI06
    fiveeyes_agentic:
    - DV3
    - DP5
CTRL-0023:
  level: 2
  risks:
  - RISK-010
  - RISK-011
  statement: Log all modifications to persistent memory with comprehensive source metadata for audit purposes
  recommendations: Without detailed audit logs, detecting and investigating memory poisoning attacks becomes extremely difficult, preventing effective incident response and forensic analysis. Implement comprehensive logging for all memory write, update, and delete operations, capturing source metadata including timestamps, user or agent identity, session context, and the specific content being modified. Structure logs to enable correlation analysis, allowing security teams to trace how specific memory entries evolved over time and identify suspicious modification patterns. Store audit logs in a tamper-evident system separate from the agent's operational memory to prevent attackers from covering their tracks by deleting or modifying log entries.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - build
  - operate
  evidence: A memory audit log query for one entry returning every write, update and delete with timestamp, actor identity, session and changed content.
  test: Create, edit and delete a memory entry and confirm three matching audit records exist in a store the agent's credentials cannot modify.
  references:
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI06
    - ASI08
    fiveeyes_agentic:
    - DV6
    - OP1
    - DP6
CTRL-0024:
  level: 0
  risks:
  - RISK-012
  - RISK-022
  - RISK-051
  - RISK-053
  - RISK-063
  statement: Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
  recommendations: Unstructured or inadequately validated inter-agent messages create vulnerability to injection attacks, misinterpretation, and parsing errors that could compromise agent behaviour or cascade through multi-agent systems. Define explicit message schemas using formal specification languages (e.g., JSON Schema, Protobuf, OpenAPI) that specify required fields, data types, validation rules, and permitted value ranges for all agent-to-agent communications. Implement strict input validation that verifies all incoming messages conform to expected schemas, checking field presence, data types, value ranges, and structural integrity before processing message content. Reject messages that are incomplete, contain unexpected fields, violate type constraints, or include suspicious patterns, returning explicit error responses to the sending agent and logging validation failures to enable detection of compromised or malfunctioning agents.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The inter-agent message schemas in version control and the validator invoked at each agent's message entry point.
  test: Send an agent a message with a missing required field and an undeclared extra field and confirm it returns an error and logs a validation failure.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://a2a-protocol.org/latest/specification/"
  crosswalks:
    csa_addendum:
    - "2.7"
    - "3.4"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI07
    fiveeyes_agentic:
    - AA1
    - DS4
CTRL-0025:
  level: 1
  risks:
  - RISK-012
  - RISK-022
  - RISK-053
  statement: Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
  recommendations: Unencrypted inter-agent communications expose sensitive data, credentials, and operational context to network-based attackers through eavesdropping or man-in-the-middle attacks. Ensure all agent-to-agent network communications use transport-layer encryption (minimum TLS 1.2, preferably TLS 1.3), including internal traffic within trusted network boundaries, as internal networks are increasingly targeted by sophisticated attackers. For protocol-based frameworks (e.g., A2A Protocol), verify that TLS is enabled by default; for application frameworks (e.g., LangGraph, CrewAI), configure deployment infrastructure to enforce HTTPS endpoints for all remote agent APIs. Configure agents to reject plaintext connections and verify certificates to prevent downgrade attacks or rogue agent impersonation, and regularly audit network traffic to detect agents attempting unencrypted communication.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - build
  - deploy
  evidence: The service mesh or load balancer configuration requiring TLS 1.2 or higher on every agent endpoint, with plaintext listeners disabled.
  test: Attempt a plaintext HTTP connection and a TLS 1.0 handshake to each agent endpoint and confirm both are refused.
  references:
  - https://a2aprotocol.ai/blog/2025-full-guide-a2a-protocol
  crosswalks:
    csa_addendum:
    - "3.4"
    - "2.6"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI07
    fiveeyes_agentic:
    - DS3
    - AA1
CTRL-0026:
  level: 1
  risks:
  - RISK-013
  - RISK-051
  - RISK-053
  - RISK-063
  statement: Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
  recommendations: Without strong agent authentication, attackers can impersonate legitimate agents to gain unauthorised access, inject malicious commands, or exfiltrate sensitive data from multi-agent systems. Implement cryptographic identity verification using mechanisms such as mutual TLS (mTLS), signed JWTs, or certificate-based authentication to ensure each agent presents verifiable credentials before processing its requests. Configure the authentication system to validate that credentials are properly signed by a trusted authority, have not expired, and belong to the claimed agent identity. Reject unauthenticated requests immediately and log authentication failures to detect potential impersonation attempts or compromised agents attempting to bypass security controls. Both the A2A Protocol and LangGraph provide native support for cryptographic agent authentication through mTLS, OAuth 2.0, and JWT-based identity verification.
  enforcement:
  - infrastructure
  - harness
  owner: platform
  phase:
  - build
  - deploy
  evidence: The mutual TLS or token-validation configuration on each agent endpoint naming the trusted issuer, with authentication failures visible in the log.
  test: Send an agent requests carrying no credential, an expired token and a certificate from an untrusted authority, and confirm all three are rejected and logged.
  references:
  - https://developers.redhat.com/articles/2025/08/19/how-enhance-agent2agent-security
  - https://a2a-protocol.org/latest/topics/enterprise-ready/
  - https://blog.langchain.com/custom-authentication-and-access-control-in-langgraph/
  crosswalks:
    csa_addendum:
    - "3.4"
    - "2.6"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    - ASI07
    fiveeyes_agentic:
    - DS3
    - OP5
CTRL-0027:
  level: 1
  risks:
  - RISK-012
  - RISK-013
  - RISK-014
  statement: Implement circuit breakers to prevent cascading failures in multi-agent systems
  recommendations: Without circuit breakers, failures in one agent can cascade through multi-agent systems, causing widespread outages, resource exhaustion, or degraded performance across interconnected agents. Implement circuit breaker patterns that monitor agent interactions and automatically halt requests to failing agents when error rates, timeouts, or response times exceed predefined thresholds. Configure circuit breakers with appropriate timeout values, retry limits, and failure thresholds based on your system's tolerance for latency and error rates.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The circuit-breaker settings in the orchestration configuration giving failure threshold, timeout and retry limit for each agent-to-agent call.
  test: Make one downstream agent return errors continuously and confirm callers stop sending it requests once the threshold is reached.
  references:
  - https://live.paloaltonetworks.com/t5/community-blogs/safeguarding-ai-agents-an-in-depth-look-at-a2a-protocol-risks/ba-p/1235996
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - DV5
    - DP4
CTRL-0028:
  level: 0
  risks:
  - RISK-012
  - RISK-051
  statement: Continuously monitor multi-agent systems for cascade failure indicators
  recommendations: Cascade failures can rapidly propagate through multi-agent systems, but early detection enables intervention before widespread system degradation occurs. Implement monitoring that tracks indicators of cascading failures including agent looping behaviour, repeated error patterns, diverging outputs across similar agents, and abnormal request rates between agents. Configure alerting thresholds that trigger when cascade indicators exceed acceptable levels, such as the same agent repeatedly calling the same endpoint, multiple agents simultaneously failing similar requests, or circular dependencies in agent communication patterns.
  enforcement:
  - infrastructure
  - harness
  owner: developer
  phase:
  - deploy
  - operate
  evidence: The dashboards and alert rules covering inter-agent request rates, repeated identical calls, simultaneous failures and circular call chains.
  test: Set two agents calling each other in a loop in staging and confirm an alert naming both fires within the configured window.
  references:
  - https://live.paloaltonetworks.com/t5/community-blogs/safeguarding-ai-agents-an-in-depth-look-at-a2a-protocol-risks/ba-p/1235996
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - OP1
CTRL-0029:
  level: 0
  risks:
  - RISK-014
  - RISK-015
  - RISK-016
  - RISK-049
  - RISK-056
  - RISK-057
  - RISK-060
  - RISK-063
  statement: Grant agents only the minimum permissions required for their designated tasks
  recommendations: Excessive permissions enable compromised or malfunctioning agents to access sensitive resources, modify critical data, or perform actions beyond their intended scope, amplifying the impact of security breaches. Apply the principle of least privilege by defining granular permission sets for each agent based on its specific role and required operations, avoiding blanket administrative access or broad permission grants. Review agent permissions regularly to ensure they remain aligned with current responsibilities, revoking unnecessary access as agent roles evolve.
  enforcement:
  - infrastructure
  - harness
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: Each agent's IAM policy and tool permission manifest, with every permission tied to a named task, and the latest access review record.
  test: Using the agent's credentials, attempt an operation outside its role, such as reading another system's data store, and confirm it is denied.
  references:
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "2.8"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - DS3
    - OP5
    - AA1
CTRL-0030:
  level: 1
  risks:
  - RISK-015
  - RISK-016
  - RISK-060
  statement: Assign each agent a unique, verifiable identity with no shared credentials
  recommendations: "Shared credentials prevent accurate attribution of agent actions, making it impossible to identify which agent performed unauthorised activities or to revoke access for compromised agents without affecting legitimate ones. Assign each agent instance a unique identity (e.g., service account, API key, certificate) that can be independently tracked, audited, and revoked without impacting other agents. Prohibit credential sharing between agents even when they perform similar functions, as unique identities enable granular access control and forensic analysis of agent behaviour. Emerging agentic IAM platforms, such as Amazon Bedrock AgentCore Identity, can help to provide purpose-built identity management for AI agents. Concrete mechanisms now exist: SPIFFE/SPIRE workload identities with short rotation for agents and MCP servers, Microsoft Entra Agent ID (assigned to all new Copilot Studio agents since July 2026), and the IETF drafts for OAuth on-behalf-of delegation and transaction tokens that carry separate actor (agent) and principal (initiating human) claims; A2A v1.0 signed agent cards provide the equivalent for agent-to-agent interactions. Prefer identities that keep the delegating human visible in every token so that actions remain attributable."
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - build
  - operate
  - retire
  evidence: The identity provider's list of agent service accounts or workload identities, showing one per agent instance and no key shared between two.
  test: Revoke one agent's credential and confirm only that agent loses access, and that the audit log attributes its earlier actions to it alone.
  references:
  - https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-overview.html
  - https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview
  - https://datatracker.ietf.org/doc/html/draft-oauth-transaction-tokens-for-agents-04
  - https://www.hashicorp.com/en/blog/spiffe-securing-the-identity-of-agentic-ai-and-non-human-actors
  crosswalks:
    csa_addendum:
    - "2.6"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - DS3
    - AA1
CTRL-0031:
  level: 1
  risks:
  - RISK-064
  statement: Use only MCP servers that validate token provenance and prohibit unauthorised token passthrough
  recommendations: Token passthrough is an anti-pattern where MCP servers accept tokens from clients without validating they were properly issued to the server, enabling malicious actors to use the server as a proxy for data exfiltration with stolen tokens. Verify that MCP servers validate the provenance of all tokens they receive, ensuring tokens are intended for that specific server by checking audience claims and preventing tokens from being blindly forwarded to third-party services. Reject MCP servers that implement token passthrough patterns, as they compromise incident investigation, access controls, and auditing capabilities by obscuring the true source of requests. Since the 2026-07-28 specification, servers must validate the issuer of tokens they receive (RFC 9207) as well as the audience; reject servers that accept tokens from unexpected issuers or forward tokens they cannot prove were issued to them.
  enforcement:
  - infrastructure
  - organisation
  owner: security
  phase:
  - build
  - deploy
  evidence: The MCP server assessment record showing audience and issuer validation tested, alongside the server's token-validation settings.
  test: Present the MCP server with a valid token issued for a different audience and one from an unexpected issuer and confirm both are rejected.
  references:
  - https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
  - https://blog.modelcontextprotocol.io/posts/2026-07-28/
  crosswalks:
    csa_addendum:
    - "3.3"
    - "2.6"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - OP5
CTRL-0032:
  level: 0
  risks:
  - RISK-004
  - RISK-016
  - RISK-017
  - RISK-018
  - RISK-062
  statement: Centralise observability data collection in a unified backend system
  recommendations: Distributed observability data across disconnected systems prevents effective analysis of multi-agent workflows, obscuring failure patterns, performance bottlenecks, and security incidents that span multiple agents. Centralise collection of logs, metrics, and traces from all agents into a unified observability backend using standards-compliant protocols (e.g., OpenTelemetry) to enable correlation analysis across the entire agentic system. Configure agents to emit structured telemetry with consistent identifiers (agent IDs, session IDs, request IDs) that enable tracing requests across agent boundaries and reconstructing complete workflow execution paths.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - build
  - deploy
  evidence: The telemetry collector configuration showing every agent exporting logs, metrics and traces to one backend with shared agent, session and request identifiers.
  test: Run a task that crosses two agents and confirm a single query on the request identifier returns the full trace from both.
  references:
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - DV6
    - OP1
CTRL-0033:
  level: 1
  risks:
  - RISK-017
  statement: Standardise trace attributes for agent operations using consistent semantic conventions
  recommendations: Inconsistent or ad-hoc telemetry labelling prevents effective correlation of agent activities across multi-agent systems, making it difficult to debug failures, analyse performance, or investigate security incidents. Define and enforce standard semantic conventions for trace attributes across all agents, including mandatory fields such as agent identity, tool name, operation type, session identifiers, and correlation IDs. Adopt existing observability standards where available (e.g., OpenTelemetry semantic conventions) to ensure compatibility with industry-standard analysis tools and reduce implementation effort. Document attribute naming conventions, permitted values, and usage guidelines, and implement validation to ensure agents emit telemetry conforming to the standardised schema.
  enforcement:
  - harness
  - infrastructure
  owner: platform
  phase:
  - design
  - build
  evidence: The published trace attribute schema listing mandatory fields and permitted values, and the pipeline check that validates emitted spans against it.
  test: Emit a span lacking the agent identity and tool name attributes and confirm the validation check reports it as non-conforming.
  references:
  - "https://github.com/open-telemetry/semantic-conventions-genai"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://coalitionforsecureai.org/securing-the-ai-agent-revolution-a-practical-guide-to-mcp-security"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - DV6
CTRL-0034:
  level: 0
  risks:
  - RISK-018
  - RISK-050
  - RISK-062
  statement: Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems
  recommendations: Automated monitoring may miss subtle patterns, novel failure modes, or emergent behaviours that only become apparent through human analysis of observability data. Establish a regular cadence for manual review of logs, traces, and metrics from production agentic systems, focusing on identifying unusual patterns, unexpected agent interactions, or degrading performance trends that automated alerts might not detect. Assign responsibility for these reviews to teams with deep understanding of expected agent behaviour, empowering them to investigate anomalies and propose system improvements. Document findings from reviews and track identified issues to closure, using insights to refine monitoring rules, update agent implementations, or strengthen security controls based on observed real-world behaviour.
  enforcement:
  - organisation
  owner: developer
  phase:
  - operate
  evidence: The review records for the last three cycles, each listing the traces sampled, the anomalies found and the tracked issue raised for each.
  test: Plant a known anomalous session in the logs before a scheduled review and confirm the review record reports it and raises an issue.
  references:
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - OP1
CTRL-0035:
  level: 2
  risks:
  - RISK-019
  - RISK-020
  statement: Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding
  recommendations: Agents that pursue goals without decomposition may execute unnecessary, excessive, or unintended actions that waste resources, violate constraints, or create unintended side effects. Configure planning agents to explicitly break down high-level user goals into discrete, verifiable sub-goals before executing any actions, and to validate that each sub-goal is necessary and sufficient for achieving the overall objective. Implement review mechanisms that require agents to justify the necessity of each sub-goal, either through automated reasoning checks or human approval for high-impact plans.
  enforcement:
  - prompt
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The planner instructions and plan schema requiring a justification for every sub-goal, with stored plans showing the field populated.
  test: Give the agent a goal alongside an unnecessary but tempting side task and confirm the stored plan excludes it before any tool call.
  references:
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "2.10"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DS2
    - DP5
CTRL-0036:
  level: 1
  risks:
  - RISK-019
  statement: Regularly evaluate and test planning behaviour under representative workloads and failure scenarios
  recommendations: Planning failures often emerge only under specific conditions, edge cases, or failure modes that may not be apparent during initial development or testing. Establish systematic testing programmes that evaluate agent planning behaviour across representative workloads, including normal scenarios, edge cases, adversarial inputs, and simulated failure conditions such as unavailable resources or degraded services. Document common planning pitfalls identified during testing (e.g., circular reasoning, goal abandonment, excessive retries) and implement targeted mitigations such as improved prompts, reasoning constraints, or circuit breakers. Continuously expand test scenarios based on observed production failures, ensuring the test suite evolves to cover newly discovered planning vulnerabilities.
  enforcement:
  - organisation
  owner: developer
  phase:
  - build
  - operate
  evidence: The planning test suite in version control and its dated run reports covering normal workloads, edge cases and simulated tool or service failures.
  test: Run the suite with one tool made unavailable and confirm the agent replans or stops within its retry limit instead of looping.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "3.2"
    imda_mgf:
    - 2.3.2
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DV2
    - DV4
CTRL-0037:
  level: 1
  risks:
  - RISK-020
  statement: Require planning agents to include explicit safety constraints in all generated plans before execution
  recommendations: Plans generated without explicit safety constraints may inadvertently violate security policies, regulatory requirements, or operational boundaries, leading to dangerous or non-compliant agent behaviour. Configure planning agents to incorporate safety constraints and domain-specific restrictions directly into plan representations, making safety requirements explicit and verifiable rather than implicit assumptions. Examples of planning-level safety constraints include limiting plan complexity (maximum number of steps or tools), requiring verification steps before irreversible actions, prohibiting plans that access certain data categories or environments, mandating human review checkpoints for high-risk operations, and including rollback or recovery procedures for plans involving state changes.
  enforcement:
  - harness
  - prompt
  owner: developer
  phase:
  - design
  - build
  evidence: The plan schema with mandatory fields for step limit, verification before irreversible steps and rollback, and the validator that rejects plans without them.
  test: Submit a plan that exceeds the step limit and has no verification before an irreversible step and confirm the executor refuses to run it.
  references:
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "2.7"
    - "2.10"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI01
    - ASI10
    fiveeyes_agentic:
    - DP5
    - DS2
CTRL-0038:
  level: 0
  risks:
  - RISK-002
  - RISK-003
  - RISK-020
  - RISK-050
  - RISK-057
  - RISK-061
  - RISK-067
  statement: Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
  recommendations: Deploying agents without rigorous safety testing risks exposing users to harmful behaviours, security vulnerabilities, or compliance violations that only emerge under adversarial or edge-case conditions. Establish comprehensive pre-deployment testing that evaluates agent safety across domain-specific stress scenarios, including adversarial inputs designed to trigger unsafe behaviour, edge cases that challenge safety boundaries, and failure modes that test resilience under degraded conditions. Design test scenarios based on known risks in your domain (e.g., financial fraud attempts for banking agents, medical misinformation for healthcare agents, data exfiltration for enterprise assistants) and establish clear pass/fail criteria that must be met before deployment. Document test results, identified vulnerabilities, and implemented mitigations for future reference and regular review. Repeat the exercise on a fixed cadence and whenever the model, tools, or capabilities change - attacks evolve faster than deployments. Use established agent security and safety benchmarks (for example AgentDojo, Agent Security Bench, and AgentHarm) as a baseline and add scenarios drawn from your own incidents and from published ones.
  enforcement:
  - organisation
  owner: developer
  phase:
  - build
  - deploy
  - operate
  evidence: The dated safety test report listing domain stress scenarios, pass criteria, results, findings and mitigations, with a rerun after each model or tool change.
  test: Run AgentDojo, AgentHarm and the system's own domain scenarios against the release candidate and confirm the results meet the recorded pass criteria.
  references:
  - https://arxiv.org/abs/2406.13352
  - https://arxiv.org/abs/2410.02644
  - https://arxiv.org/abs/2410.09024
  crosswalks:
    csa_addendum:
    - "3.2"
    imda_mgf:
    - 2.3.2
    owasp_asi:
    - ASI01
    - ASI10
    fiveeyes_agentic:
    - DV4
    - DV2
    - OP1
CTRL-0039:
  level: 1
  risks:
  - RISK-020
  - RISK-053
  statement: Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
  recommendations: Without standardised capability descriptors, agents cannot reliably discover what other agents can do, leading to misrouted requests, capability mismatches, or failed inter-agent collaborations. Implement machine-readable capability descriptions for each agent using standardised formats such as A2A Agent Cards that declare available skills, required inputs, output formats, and operational constraints. Publish capability descriptors through discoverable endpoints (e.g., well-known URIs at \`https://{domain}/.well-known/agent-card.json\`) or centralised agent registries that other agents can query to determine if a target agent can fulfil specific requests. Maintain capability descriptors in sync with actual agent implementations, updating descriptors whenever agent capabilities change to prevent stale metadata from causing integration failures.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - deploy
  evidence: Each agent's card at its well-known address or registry entry, and the pipeline check comparing declared skills with the deployed code.
  test: Fetch each agent card and call every declared skill with the stated inputs, confirming each responds in the declared output format.
  references:
  - https://a2a-protocol.org/latest/topics/agent-discovery/
  crosswalks:
    csa_addendum:
    - "2.4"
    - "3.4"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI07
    fiveeyes_agentic:
    - DS3
    - DV7
CTRL-0040:
  level: 0
  risks:
  - RISK-014
  - RISK-021
  - RISK-049
  - RISK-053
  - RISK-057
  statement: Limit the scope of agent actions through predefined thresholds and baselines
  recommendations: Without action limits, agents may bypass controls by delegating excessive tasks, consuming unlimited resources, or spreading malicious activities across multiple operations to evade detection. Define quantitative thresholds that constrain agent behaviour, such as maximum number of tool calls per session, maximum number of agents that can be delegated to, maximum cost or resource consumption, or maximum data volume accessed. Implement runtime monitoring that tracks agent activity against these thresholds and halts execution when limits are exceeded. Examples include limiting an agent to 50 API calls per task or restricting delegation to no more than 3 sub-agents.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The runtime limits file giving maximum tool calls, delegated agents, spend and data volume per task, with log entries for halted runs.
  test: Start a task that needs more tool calls than the configured maximum and confirm the run halts at the limit and records the reason.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  - "https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/"
  crosswalks:
    csa_addendum:
    - "2.7"
    - "3.1"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    - ASI08
    fiveeyes_agentic:
    - OP4
    - DP5
CTRL-0041:
  level: 0
  risks:
  - RISK-022
  - RISK-023
  - RISK-038
  statement: Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
  recommendations: Incomplete or ambiguous tool descriptions lead agents to misunderstand tool capabilities, misuse tools for unintended purposes, or select inappropriate tools for tasks, resulting in failures or unsafe behaviour. Document each tool with clear, comprehensive descriptions that specify the tool's intended purpose, required input parameters with data types and constraints, expected outputs and formats, and any preconditions or side effects. Include usage examples and common failure scenarios to guide agent decision-making and prevent misuse. Ensure tool descriptions are accurate, up-to-date, and written in language that LLMs can reliably interpret, avoiding ambiguity that might lead to incorrect tool selection or invocation.
  enforcement:
  - prompt
  owner: developer
  phase:
  - build
  - operate
  evidence: The tool definitions in version control, each stating purpose, typed parameters with constraints, output format, side effects and a usage example.
  test: Run a tool-selection evaluation over tasks with a known correct tool and confirm the agent picks it with valid arguments at the documented rate.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://modelcontextprotocol.io/specification/2025-06-18/server/tools"
  - "https://www.anthropic.com/engineering/writing-tools-for-agents"
  crosswalks:
    csa_addendum:
    - "2.4"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DV7
    - OP2
CTRL-0042:
  level: 1
  level_when:
  - level: 0
    authority: act-alone
    irreversible: true
    external: true
  risks:
  - RISK-001
  - RISK-002
  - RISK-003
  - RISK-019
  - RISK-020
  - RISK-023
  - RISK-052
  - RISK-065
  statement: Require explicit human confirmation before executing high-impact or irreversible tool actions
  recommendations: "Agents may incorrectly select or misuse high-impact tools, leading to irreversible damage such as data deletion, unauthorised financial transactions, or unintended system modifications. Implement mandatory human-in-the-loop approval workflows for tools that perform high-impact or irreversible actions, including sending external communications, executing financial transactions, deleting or modifying critical data, and making privileged configuration changes. Configure approval interfaces to clearly display the tool being invoked, the parameters being passed, and the expected outcome, enabling informed human decision-making. Ensure approval mechanisms cannot be bypassed by agents and maintain audit logs of all approval decisions, including who approved what action and when. Approval steps decay under volume: in one large deployment users approved about 93% of permission prompts. Pair this control with CTRL-0094 - measure approval and override rates, route routine actions to automated screening, and reserve human approval for genuinely uncertain or high-impact actions so that the approvals that remain are real decisions."
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The tool registry marking each irreversible tool as confirmation-required, and the audit log recording who confirmed which tool call, with parameters and time.
  test: Invoke a tool marked irreversible through the tool layer without a confirmation record and confirm the call is refused and logged.
  references:
  - https://www.anthropic.com/engineering/how-we-contain-claude
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI02
    - ASI09
    fiveeyes_agentic:
    - DS2
    - OP3
CTRL-0043:
  level: 1
  level_when:
  - level: 0
    authority: act-alone
  risks:
  - RISK-023
  statement: Log all tool selection decisions and invocations with comprehensive metadata
  recommendations: Without comprehensive tool invocation logs, diagnosing incorrect tool selection or misuse becomes extremely difficult, preventing effective debugging and post-incident analysis. Implement detailed logging for all tool selection decisions and invocations, capturing the tool name, input arguments, caller identity, authorisation outcome, timestamp, and resulting outputs or side effects. Structure logs to enable correlation between tool selection reasoning and actual outcomes, allowing investigation of why particular tools were chosen and whether they produced expected results.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - build
  - operate
  evidence: A log query for one session returning each tool call with tool name, arguments, caller identity, authorisation outcome, timestamp and result.
  test: Trigger one permitted and one denied tool call and confirm both appear in the log with the correct authorisation outcome and the selection reasoning.
  references:
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DV7
    - OP1
CTRL-0044:
  level: 1
  risks:
  - RISK-024
  - RISK-067
  statement: Implement output safety guardrails to detect and prevent generation of undesirable content
  recommendations: Agents may generate toxic, hateful, sexual, or otherwise inappropriate content that causes harm to users, violates organisational standards, or creates regulatory compliance issues. Deploy output safety guardrails that scan all agent-generated content before delivery to users, detecting categories of undesirable content such as hate speech, sexually explicit material, violent content, or self-harm promotion. Use content moderation APIs, classifiers, or LLM-based safety filters to evaluate outputs against defined safety policies, blocking or flagging content that violates established boundaries. Configure appropriate responses when unsafe content is detected, such as refusing to generate the output, requesting reformulation, or escalating to human review for edge cases.
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The output guardrail configuration naming the moderation classifier, the blocked content categories and thresholds, with a log of blocked responses.
  test: Run garak or promptfoo harmful-content probes and confirm hateful, sexual, violent and self-harm outputs are blocked before delivery at the documented rate.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "4.2"
    imda_mgf:
    - 2.3.1
    owasp_asi: []
    fiveeyes_agentic:
    - DP5
CTRL-0045:
  level: 1
  risks:
  - RISK-025
  statement: Implement input guardrails to detect and decline requests for specialised domain advice
  recommendations: Agents generating unqualified advice in specialised domains such as medical, financial, or legal matters may cause users to act on incorrect or inappropriate information, leading to serious harm or adverse outcomes. Deploy input guardrails that detect when user requests fall within specialised domains requiring professional expertise, such as medical diagnosis, financial investment advice, or legal counsel. Configure the system to decline these requests with appropriate messaging that explains why the agent cannot provide such advice and suggests consulting qualified professionals.
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The input guardrail configuration listing the medical, legal and financial advice categories, the detector used and the referral message returned.
  test: Send labelled requests for a diagnosis, an investment recommendation and legal counsel among benign controls and confirm only the advice requests are declined.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi: []
    fiveeyes_agentic:
    - DP5
CTRL-0046:
  level: 1
  risks:
  - RISK-026
  statement: Implement input guardrails to detect and decline requests for controversial content that violates organisational policies
  recommendations: Agents generating controversial or sensitive content such as political commentary or statements about competitors may create reputational damage, legal liability, or compliance violations for the organisation. Deploy input guardrails that detect requests for content on topics deemed controversial or sensitive according to organisational policies, such as political positions, religious commentary, competitive disparagement, or other restricted subjects. Define clear content policies that specify which topics or viewpoints the agent should avoid, and configure detection mechanisms to identify requests that would violate these boundaries. When controversial requests are detected, decline with messaging that explains the agent's content limitations whilst maintaining a respectful tone towards the user.
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The organisation's restricted-topics policy and the guardrail configuration mapping each topic to a detection rule and refusal message.
  test: Ask for a political endorsement and a disparaging comparison with a named competitor and confirm both are declined courteously while neutral factual questions pass.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi: []
    fiveeyes_agentic:
    - DP5
CTRL-0047:
  level: 0
  risks:
  - RISK-011
  - RISK-027
  - RISK-037
  - RISK-043
  - RISK-066
  statement: Implement output guardrails to detect and redact personally identifiable information
  recommendations: Agents may reproduce personally identifiable information from training data, memory, or prior interactions in their outputs, violating privacy obligations, exposing individuals to harm, or breaching data protection requirements such as GDPR or PDPA. Deploy output guardrails that scan all agent-generated content for PII categories including names, email addresses, phone numbers, identification numbers, financial account details, and other sensitive personal data before delivery to users. Use PII detection tools, pattern matching, or named entity recognition models to identify and redact or block outputs containing PII. Configure appropriate handling based on context — some PII may be acceptable if it belongs to the current user, whilst PII belonging to other individuals should be strictly prevented from disclosure.
  enforcement:
  - harness
  - model
  owner: developer
  phase:
  - build
  - operate
  evidence: The output filter configuration listing the personal data types detected and the action for each, with redaction counts in the guardrail log.
  test: Prompt the agent to repeat a seeded record holding another person's identity number, phone number and email and confirm all three arrive redacted.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "4.2"
    imda_mgf:
    - 2.3.1
    owasp_asi: []
    fiveeyes_agentic:
    - DV5
    - DP5
CTRL-0048:
  level: 2
  risks:
  - RISK-028
  statement: Implement methods to reduce hallucination rates in agent outputs
  recommendations: Agents may generate inaccurate, fabricated, or unsupported information whilst presenting it as factual, misleading users and causing them to make incorrect decisions or lose trust in the system. Implement hallucination reduction techniques such as retrieval-augmented generation (RAG) that grounds agent responses in verified source documents, or citation requirements that force agents to reference specific sources for factual claims. Configure agents to acknowledge uncertainty when information cannot be verified rather than generating plausible-sounding but false content.
  enforcement:
  - harness
  - prompt
  owner: developer
  phase:
  - design
  - build
  evidence: The retrieval pipeline configuration, the prompt requiring a cited source for each factual claim, and a groundedness evaluation report with the unsupported-claim rate.
  test: Ask questions whose answers are absent from the source corpus and confirm the agent says it cannot verify them.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://genai.owasp.org/llmrisk/llm092025-misinformation/"
  crosswalks:
    csa_addendum:
    - "2.11"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - DS1
    - DV6
CTRL-0049:
  level: 0
  risks:
  - RISK-028
  - RISK-052
  statement: Implement UI/UX cues to communicate the risk of hallucination to users
  recommendations: Users may treat agent-generated content as completely reliable without recognising that LLMs can produce inaccurate or fabricated information presented as fact. Implement clear UI/UX indicators that remind users of hallucination risks, such as disclaimers on agent responses, visual cues distinguishing generated content from verified information, or warnings when agents make factual claims without citations. Consider contextual warnings that appear when agents discuss topics particularly prone to hallucination, such as recent events beyond the model's training data or highly specialised technical subjects.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The front-end code or screenshots of the response view showing the accuracy disclaimer and the visual marking of uncited generated content.
  test: Open the production interface, ask a factual question and confirm the disclaimer is visible beside the answer without scrolling or clicking.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/llmrisk/llm092025-misinformation/"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  crosswalks:
    csa_addendum:
    - "2.11"
    imda_mgf:
    - 2.4.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic: []
CTRL-0050:
  level: 1
  risks:
  - RISK-028
  statement: Implement features enabling users to verify generated answers against source content
  recommendations: Without verification mechanisms, users cannot easily check whether agent-generated information is accurate or fabricated, increasing reliance on potentially hallucinated content. Provide built-in features that enable users to verify agent responses against original source materials, such as inline citations linking to specific documents or passages, source attribution showing which materials informed the response, or side-by-side views displaying retrieved content alongside generated summaries. Design verification features to minimise friction whilst maintaining effectiveness — users should be able to check sources with minimal effort rather than requiring extensive navigation or manual searching. For example, automatically highlight passages in source documents that support specific claims made by the agent, enabling rapid verification of factual statements.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The response payload schema carrying source identifiers and passage offsets, and the interface code that renders them as inline citations.
  test: Ask a question answered by a known document and confirm each citation opens that document at the passage supporting the claim.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  crosswalks:
    csa_addendum:
    - "2.11"
    imda_mgf:
    - 2.4.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic:
    - DV6
CTRL-0051:
  level: 1
  risks:
  - RISK-029
  statement: Implement input guardrails to detect and decline requests to generate copyrighted content
  recommendations: Agents may generate content that reproduces or closely resembles copyrighted material without authorisation, exposing the organisation to intellectual property infringement claims, legal liability, or licensing violations. Deploy input guardrails that detect requests asking the agent to reproduce copyrighted works such as song lyrics, book passages, proprietary code, or other protected content. Configure the system to decline these requests with appropriate messaging that explains copyright limitations and suggests legal alternatives such as summarisation, licensed access, or original creation. Note that copyright detection at the input stage may not catch all violations, as users might phrase requests in ways that obscure copyrighted content generation — tools such as Patronus AI's CopyrightCatcher can provide output-level copyright detection to complement input filtering.
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The guardrail configuration containing the copyright-reproduction category, its detector and its refusal message, with a log of declined requests.
  test: Request the full lyrics of a current chart song and a chapter of an in-copyright novel and confirm both are declined with a lawful alternative offered.
  references:
  - https://www.patronus.ai/blog/introducing-copyright-catcher
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi: []
    fiveeyes_agentic:
    - DP5
CTRL-0052:
  level: 2
  risks:
  - RISK-030
  - RISK-067
  statement: Declare upfront that communications are generated by an AI system
  recommendations: Recipients misled about whether communications were generated by AI or authored by humans may form incorrect assumptions about accountability, intent, or authority, leading to trust issues or legal complications. Implement clear, prominent disclosures at the beginning of AI-generated communications stating that content was created by an automated system, using unambiguous language such as "This message was generated by an AI assistant" rather than vague phrases that might confuse recipients.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The outbound message template or sending code that inserts the AI-generated disclosure as the opening line of every agent communication.
  test: Have the agent send a message after instructing it to omit any disclosure and confirm the delivered message still opens with the AI-generated statement.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50"
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  crosswalks:
    csa_addendum: []
    imda_mgf:
    - 2.4.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic: []
CTRL-0053:
  level: 0
  risks:
  - RISK-031
  statement: Require human approval for communications on sensitive matters
  recommendations: Agents making unsupported commitments, inaccurate assurances, or statements that exceed organisational capabilities in official communications may expose the organisation to reputational damage, legal liability, or unmet expectations. Implement mandatory human review and approval workflows for communications on sensitive matters including contractual commitments, financial promises, policy statements, regulatory responses, or public-facing announcements. Define clear criteria for what constitutes "sensitive matters" requiring approval, ensuring consistent application across the organisation. Enforce the approval in the sending path, so that the agent cannot dispatch a message in a sensitive category until it is approved; an instruction to the agent to seek approval is not enough. Pair this control with CTRL-0094 so that approvals remain real decisions.
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The sensitive-category criteria, the sending-path rule that holds messages in those categories, and approval records naming approver, message and time.
  test: Have the agent draft a message containing a contractual commitment and confirm it remains unsent until an authorised approver releases it.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic:
    - OP3
    - DS2
CTRL-0054:
  level: 1
  risks:
  - RISK-031
  statement: Limit agent communications to standard processes with predefined templates
  recommendations: Agents generating free-form communications may inadvertently make inaccurate promises or statements that exceed organisational authority or capabilities, creating legal and reputational risks. Restrict agent communications to standard, well-defined processes where approved communication templates exist, such as appointment confirmations, order status updates, or routine customer service responses. Design templates to include appropriate disclaimers, limit commitments to verified capabilities, and avoid language that could create unintended obligations. Review and approve all communication templates before deployment, ensuring they accurately reflect organisational policies and cannot be misinterpreted as making unauthorised commitments.
  enforcement:
  - harness
  - organisation
  owner: business
  phase:
  - design
  - build
  evidence: The library of approved communication templates with sign-off records, and the sending tool's configuration accepting only a template identifier and field values.
  test: Ask the agent to send a free-form message promising a refund and confirm the sending tool rejects anything that is not an approved template.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://arxiv.org/abs/2506.08837"
  crosswalks:
    csa_addendum:
    - "2.7"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DP5
CTRL-0055:
  level: 1
  risks:
  - RISK-031
  statement: Provide alternative channels for users to clarify communications or provide feedback
  recommendations: When agents make inaccurate statements or commitments in communications, recipients need accessible mechanisms to seek clarification, report concerns, or correct misunderstandings before problems escalate. Establish clear alternative channels for recipients to contact human representatives when they have questions about AI-generated communications, such as dedicated email addresses, phone numbers, or contact forms prominently displayed in agent communications.
  enforcement:
  - organisation
  - harness
  owner: business
  phase:
  - design
  - operate
  evidence: The footer of the agent's message templates showing a staffed contact address or number, and the queue where enquiries from recipients are logged.
  test: Reply to an agent-sent message through the published contact channel and confirm a human responds within the stated service time.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/resource-for-organisation/ai/sgmodelaigovframework2.pdf"
  crosswalks:
    csa_addendum:
    - "4.5"
    imda_mgf:
    - 2.4.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic: []
CTRL-0056:
  level: 0
  risks:
  - RISK-032
  statement: Require explicit human confirmation before committing any business transaction outside limits that an accountable human has pre-authorised
  recommendations: Agents executing business transactions without proper authorisation may create unintended financial obligations, contractual commitments, or operational liabilities. Have an accountable human set the limits within which the agent may transact without confirmation — for example amounts, counterparties, transaction types, and frequency — and enforce those limits outside the agent, such as in the transaction controller (CTRL-0058) or payment gateway. Pause any transaction outside the limits, and every transaction where no limits have been set, immediately before it is initiated, presenting the transaction type, amount, counterparty, and consequences for review by the user on whose behalf the agent acts or by a designated approver. Require active consent, using an explicit "confirm" action rather than a dismissible notification or opt-out. Ensure confirmation cannot be bypassed by agents, and keep audit logs of all approvals, including timestamp, approver identity, and transaction details. Pair this control with CTRL-0094 so that confirmations remain real decisions.
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The transaction limits signed by the accountable owner, their configuration in the transaction controller, and the confirmation log with approver identity and transaction details.
  test: Propose a transaction above the pre-authorised amount and confirm the controller holds it until the user actively confirms the amount and counterparty.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://ap2-protocol.org/ap2/specification/"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI09
    - ASI02
    fiveeyes_agentic:
    - OP3
    - DS2
CTRL-0057:
  level: 2
  risks:
  - RISK-032
  statement: Require out-of-band confirmation when transaction risk signals are elevated
  recommendations: Transactions exhibiting elevated risk indicators may represent unauthorised or fraudulent activity requiring additional verification beyond standard confirmation. Implement out-of-band confirmation (e.g., SMS codes, email verification, authentication app approvals) when transactions exhibit risk signals such as unusual payees, amounts exceeding typical patterns, rapid transaction sequences, or first-time recipients.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The transaction controller's step-up rules listing the risk signals that trigger out-of-band confirmation and the channel used for each.
  test: Propose a payment to a first-time payee at an unusual amount and confirm it stays pending until a code sent to the user's registered device is entered.
  references:
  - "https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html"
  - "https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic:
    - OP3
CTRL-0058:
  level: 0
  risks:
  - RISK-032
  - RISK-033
  statement: Restrict agents to proposing transactions whilst using a separate transaction controller for execution
  recommendations: Allowing agents direct access to transaction credentials creates risk of credential leakage through prompt injection, logging, or model outputs. Implement architectural separation where agents propose transactions but a dedicated non-LLM transaction controller handles authentication, authorisation, and execution. Ensure agents never receive or handle credentials directly, passing only transaction proposals through secure interfaces.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - design
  - build
  evidence: The architecture diagram and secrets manager access policy showing payment credentials readable only by the non-LLM transaction controller, never by the agent runtime.
  test: From the agent runtime, try to read the payment credential and to call the payment API directly and confirm both attempts fail.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "2.9"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - DV7
    - DS4
CTRL-0059:
  level: 2
  risks:
  - RISK-032
  statement: Apply fraud detection models or heuristics to agent-proposed transactions
  recommendations: Compromised or manipulated agents may propose fraudulent transactions that bypass standard user confirmation by appearing legitimate to users but serving malicious purposes. Implement fraud detection systems that analyse agent-proposed transactions for suspicious patterns such as unusual amounts, unfamiliar recipients, rapid transaction sequences, or deviations from historical behaviour. Configure fraud detection to operate independently of the agent, using rule-based heuristics or machine learning models trained on legitimate and fraudulent transaction patterns.
  enforcement:
  - harness
  - model
  owner: security
  phase:
  - build
  - operate
  evidence: The fraud rule set or model version applied to agent-proposed transactions, with a log of scored transactions and those held.
  test: Submit a rapid series of proposals to an unfamiliar recipient at unusual amounts and confirm they are scored as suspicious and held before execution.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf"
  crosswalks:
    csa_addendum:
    - "4.2"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DP5
    - OP1
CTRL-0060:
  level: 1
  risks:
  - RISK-034
  - RISK-047
  statement: Implement escape filtering before incorporating web content into prompts
  recommendations: Malicious websites may embed hidden instructions or manipulative prompts in their content designed to hijack agent behaviour when retrieved and processed. Implement escape filtering that sanitises web content before incorporating it into agent prompts, removing or neutralising potential injection attacks such as hidden instructions, delimiter manipulation attempts, or prompt override commands.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  evidence: The web-content sanitiser in the retrieval code and its unit tests covering hidden text, delimiter strings and override phrases.
  test: Retrieve a test page containing hidden-text instructions and the prompt's own delimiter tokens and confirm both are stripped or escaped in the logged prompt.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DV3
CTRL-0061:
  level: 1
  risks:
  - RISK-034
  statement: Use structured retrieval APIs for web searches rather than web scraping
  recommendations: Web scraping exposes agents to arbitrary web content including malicious HTML, scripts, and embedded instructions that may be crafted to inject prompts or manipulate agent behaviour. Use structured retrieval APIs such as search engine APIs, knowledge bases, or curated data sources that provide pre-processed, sanitised content rather than raw web pages. Structured APIs typically return controlled formats (JSON, XML) containing extracted information without rendering full web content, reducing exposure to injection vectors embedded in HTML, CSS, or JavaScript.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The tool manifest showing web search bound to a named search API returning structured results, with no raw page-fetch tool registered.
  test: Run a web search task and confirm the logged tool result holds structured fields from the search API and no raw HTML or scripts.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html"
  crosswalks:
    csa_addendum:
    - "2.1"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI01
    fiveeyes_agentic: []
CTRL-0062:
  level: 0
  risks:
  - RISK-034
  - RISK-036
  - RISK-044
  - RISK-047
  - RISK-059
  statement: Implement input guardrails to detect prompt injection and adversarial attacks
  recommendations: Malicious actors may attempt to inject hidden instructions through web content, uploaded files, or external data sources to hijack agent behaviour and bypass intended constraints. Use prompt injection detection tools or classifiers trained to identify adversarial inputs before they reach the agent's context.
  enforcement:
  - model
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The injection detector's configuration naming the classifier, its threshold and the input channels it screens, with a log of flagged inputs.
  test: Run garak or PyRIT injection probes through user input, uploaded files and retrieved web content and confirm detections meet the documented rate.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DV3
CTRL-0063:
  level: 1
  risks:
  - RISK-035
  statement: Prioritise search results from verified, high-quality domains
  recommendations: Agents retrieving information from unreliable or low-quality websites may present inaccurate, outdated, or biased content to users, leading to misinformed decisions. Configure search and retrieval systems to prioritise results from verified, authoritative sources such as government domains (.gov), educational institutions (.edu), established news organisations, and recognised industry authorities.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The search tool configuration listing preferred and excluded domains and the ranking rule that applies them.
  test: Run a query where a low-quality site outranks an official source in raw results and confirm the agent's retrieved set leads with the official source.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "2.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI06
    fiveeyes_agentic:
    - DS1
CTRL-0064:
  level: 1
  risks:
  - RISK-036
  statement: Limit computer use to accessing only safe and trusted resources
  recommendations: Agents with unrestricted computer access may encounter malicious content on untrusted websites, documents, or applications that embed hidden instructions designed to manipulate agent behaviour. Restrict computer use capabilities to accessing only pre-approved, safe resources such as internal applications, trusted websites on allowlists, or sandboxed environments isolated from sensitive systems. Define clear boundaries for what resources agents may access and enforce these restrictions through technical controls such as network filtering, application allowlisting, or containerisation.
  enforcement:
  - infrastructure
  - harness
  owner: developer
  phase:
  - design
  - build
  - deploy
  evidence: The computer-use environment's site and application allowlist, the proxy or container policy enforcing it, and the blocked-request log.
  test: Direct the computer-use agent to a site outside the allowlist and to open an unlisted application and confirm both are blocked and logged.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "2.7"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DP6
    - DP5
CTRL-0065:
  level: 0
  risks:
  - RISK-014
  - RISK-036
  - RISK-049
  - RISK-051
  - RISK-057
  - RISK-062
  statement: Ensure every agent can be immediately paused or terminated by its operators
  recommendations: "Agents may begin executing unintended actions - through prompt injection, runaway loops, containment gaps, or goal-directed misbehaviour - that require immediate human intervention. Provide an interruption mechanism for every deployed agent, not only those operating computer interfaces: a pause and terminate control reachable by operators at all times, which halts tool calls and outbound actions immediately, revokes or suspends the agent's credentials, and preserves state and logs for review. Test that the mechanism works under load and cannot be disabled or delayed by the agent itself, and make emergency revocation of a specific tool, credential, or agent possible across all deployments."
  enforcement:
  - harness
  - infrastructure
  owner: platform
  phase:
  - build
  - deploy
  - operate
  evidence: The operator console's pause and terminate control, its runbook, and drill records showing the time from command to halted tool calls.
  test: Trigger the stop control while the agent is mid-task under load and confirm tool calls cease, its credentials are suspended and its state and logs remain.
  references:
  - "https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - DS2
    - DV5
CTRL-0066:
  level: 0
  risks:
  - RISK-037
  statement: Ensure "take over" mode is activated when entering sensitive data
  recommendations: Agents operating computer interfaces may inadvertently view, process, or expose sensitive data such as passwords, API keys, or personally identifiable information displayed on screens or in applications. Implement "take over" mode that pauses agent operation and requires direct human control when sensitive data entry is required, preventing agents from observing or handling credentials and other confidential information.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The computer-use harness rule that detects password, payment and identity fields and hands control to the human, with take-over events logged.
  test: Steer the agent to a login page and confirm it pauses for the human to type the password and captures no screenshot or keystrokes meanwhile.
  references:
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
  crosswalks:
    csa_addendum: []
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DS2
CTRL-0067:
  level: 0
  risks:
  - RISK-038
  statement: Ensure proper documentation of programmatic interfaces for agent use
  recommendations: Agents interacting with poorly documented or unfamiliar programmatic interfaces may misinterpret interface semantics, invoke operations incorrectly, or produce unintended effects. Provide comprehensive, LLM-readable documentation for all programmatic interfaces agents may interact with, including clear descriptions of available operations, required parameters with data types and constraints, expected responses, and common error conditions.
  enforcement:
  - prompt
  owner: developer
  phase:
  - build
  evidence: The interface specification supplied to the agent for each API, listing operations, typed parameters, expected responses and error conditions.
  test: Set the agent tasks that exercise each documented operation and one error condition and confirm its calls are well formed and errors handled as documented.
  references:
  - "https://modelcontextprotocol.io/specification/2025-06-18/server/tools"
  - "https://www.anthropic.com/engineering/writing-tools-for-agents"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "2.4"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DV7
CTRL-0068:
  level: 1
  risks:
  - RISK-039
  statement: Use code linters to screen generated code for bad practices and poor syntax
  recommendations: Agents may generate code containing bad practices, anti-patterns, unused variables, or syntax errors that reduce code quality, introduce bugs, or create maintainability issues. Implement automated code linting that analyses all agent-generated code before execution or deployment, using tools such as Pylint, ESLint, or language-specific linters configured with appropriate rule sets. Configure linters to detect common issues including syntax errors, unused variables, deprecated functions, security anti-patterns, and violations of coding standards. Reject code that fails linting checks or present warnings to users for review before proceeding.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  evidence: The linter rule set in version control, its hook in the code-execution path, and lint results stored with each generated snippet.
  test: Have the agent produce code with a syntax error and an unused variable and confirm the linter rejects it or shows the warnings before execution.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  crosswalks:
    csa_addendum:
    - "4.2"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI05
    fiveeyes_agentic:
    - OP2
CTRL-0069:
  level: 0
  risks:
  - RISK-039
  - RISK-040
  - RISK-049
  - RISK-056
  statement: Run agent-generated code only in isolated compute environments with network access blocked by default
  recommendations: Agent-generated code may contain vulnerabilities, bugs, or malicious logic that could compromise systems, leak data, exfiltrate information, or establish unauthorised network connections. Implement virtual isolation for all agent-generated code execution using containerised environments (e.g., Docker), virtual machines, or dedicated sandboxes that limit access to sensitive resources, networks, and data. Configure default-deny network policies that block all inbound and outbound network connections unless explicitly required and authorised for specific use cases. When network access is necessary, enforce allowlists restricting connections to known-safe endpoints such as internal APIs or approved external services.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - design
  - build
  - deploy
  evidence: The code-execution sandbox definition showing no host mounts, dropped privileges and a default-deny network policy listing any permitted endpoints.
  test: Have the agent run code that opens a connection to an external host and reads a host file path and confirm both fail inside the sandbox.
  references:
  - "https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "2.9"
    - "2.8"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI05
    fiveeyes_agentic:
    - DP6
    - AA1
CTRL-0070:
  level: 1
  risks:
  - RISK-039
  - RISK-040
  - RISK-056
  statement: Review all agent-generated code before execution
  recommendations: Agent-generated code may contain security vulnerabilities, logic errors, or malicious instructions that could compromise systems if executed without review. Implement mandatory human review workflows for all code generated by agents before execution, including source code, scripts, configuration files, and command sequences. Configure review processes to present code with sufficient context for reviewers to assess safety and correctness, including the agent's reasoning for generating the code and its intended purpose.
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - build
  - operate
  evidence: The execution gate setting that requires reviewer approval per code artefact, and review records giving reviewer, code hash and decision.
  test: Have the agent generate a script and try to run it unreviewed, and confirm execution is blocked until a reviewer approves that exact code.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  crosswalks:
    csa_addendum:
    - "4.2"
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI05
    fiveeyes_agentic:
    - OP3
CTRL-0071:
  level: 0
  risks:
  - RISK-039
  - RISK-040
  statement: Use static code analysers to detect security vulnerabilities and code quality issues
  recommendations: Agent-generated code may contain security vulnerabilities, code smells, or quality issues that manual review might miss. Deploy static code analysis tools (e.g., Bandit for Python, SonarQube, Semgrep) that automatically scan agent-generated code for security vulnerabilities, coding standard violations, and quality issues before execution. Configure analysers to detect common vulnerability patterns such as SQL injection, command injection, path traversal, insecure cryptography, and hard-coded credentials. Block or flag code that fails security scans, requiring remediation before proceeding with execution or deployment.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The static analysis rule set and blocking severity in the execution pipeline, with a scan report attached to each generated code artefact.
  test: Run CyberSecEval insecure-code prompts through the agent and confirm the analyser flags the vulnerable outputs and blocks their execution.
  references:
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "4.2"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI05
    fiveeyes_agentic:
    - OP2
CTRL-0072:
  level: 1
  risks:
  - RISK-039
  - RISK-040
  statement: Monitor runtime and memory consumption of agent-generated code
  recommendations: Agent-generated code may contain inefficient implementations, infinite loops, or memory leaks that degrade system performance or exhaust resources. Implement runtime monitoring that tracks execution time, memory consumption, CPU usage, and other resource metrics for all agent-generated code during execution. Configure alerts that trigger when code exceeds predefined resource thresholds, such as maximum execution time, memory limits, or CPU usage, enabling automatic termination of runaway processes.
  enforcement:
  - infrastructure
  - harness
  owner: platform
  phase:
  - build
  - operate
  evidence: The sandbox limits for execution time, memory and CPU, the alert rule attached to them, and records of terminated runs.
  test: Run agent-generated code containing an infinite loop and an unbounded memory allocation and confirm each is terminated at its limit and an alert is raised.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/"
  crosswalks:
    csa_addendum:
    - "3.1"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - OP4
CTRL-0073:
  level: 0
  risks:
  - RISK-040
  statement: Create a denylist of commands that agents are not permitted to execute
  recommendations: Agents may generate code that invokes dangerous or destructive commands capable of compromising systems, deleting data, or establishing unauthorised network connections. Implement command denylists that explicitly prohibit execution of dangerous operations such as system shutdown commands, file deletion utilities, network scanning tools, or privileged system calls. Enforce denylists at the execution layer, preventing blocked commands from running even if agents generate code containing them. Regularly review and update denylists based on observed agent behaviour, emerging security threats, and identified misuse patterns.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The command denylist file in version control, the execution-layer hook that checks each command against it, and its log of blocked commands.
  test: Have the agent attempt a denylisted command, such as a recursive delete, in plain and obfuscated forms and confirm both are blocked.
  references:
  - "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "2.7"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI05
    fiveeyes_agentic:
    - DP5
CTRL-0074:
  level: 0
  risks:
  - RISK-040
  statement: Conduct CVE scanning and block execution of code with High or Critical vulnerabilities
  recommendations: Agent-generated code may inadvertently include dependencies or libraries containing known security vulnerabilities that could be exploited to compromise systems. Implement automated CVE scanning that analyses all dependencies, libraries, and packages used by agent-generated code before execution, checking against vulnerability databases such as the National Vulnerability Database. Configure scanning to block execution when High or Critical severity CVEs are detected, requiring remediation such as dependency updates or vulnerability patches before proceeding.
  enforcement:
  - harness
  owner: security
  phase:
  - build
  - operate
  evidence: The dependency scanner configuration with its High and Critical blocking threshold, and scan results recorded for each execution request.
  test: Have the agent write code that imports a package version with a known Critical CVE and confirm execution is blocked with the CVE cited.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf"
  crosswalks:
    csa_addendum:
    - "4.2"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI04
    - ASI05
    fiveeyes_agentic:
    - DV7
    - AA2
CTRL-0075:
  level: 1
  risks:
  - RISK-041
  statement: Do not grant write access to agents unless strictly necessary
  recommendations: Agents with unnecessary write access may inadvertently modify, overwrite, or delete critical files or data, leading to data loss, corruption, or operational disruption. Apply the principle of least privilege by granting write access only when explicitly required for the agent's intended functionality, defaulting to read-only access for all other operations. Implement granular access controls that restrict write permissions to specific directories, databases, or resources that the agent legitimately needs to modify. Regularly review agent permissions to ensure write access remains justified and revoke unnecessary permissions as agent responsibilities evolve.
  enforcement:
  - infrastructure
  - harness
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The agent's database grants and storage policies showing read-only access by default, with each write permission scoped to a named resource and justified.
  test: Using the agent's credentials, attempt a write to a table or directory outside its listed write scope and confirm it is denied.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
  crosswalks:
    csa_addendum:
    - "2.8"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DS3
    - OP5
    - AA1
CTRL-0076:
  level: 0
  risks:
  - RISK-041
  - RISK-056
  statement: Require human approval for destructive changes to databases, tables, or files that cannot be readily undone
  recommendations: Destructive operations such as deleting files, dropping database tables, or overwriting critical data can cause irreversible damage if executed without proper authorisation. Require human approval for every destructive operation that cannot be readily undone, including DROP and TRUNCATE statements, DELETE or UPDATE queries that are not narrowly filtered, bulk file deletions, and any deletion or overwrite in a store without versioning, soft-delete, or point-in-time recovery (see CTRL-0077). Changes that can be reverted from version control or soft-delete, such as edits to files in a version-controlled working copy, may proceed without approval. Enforce the approval in the tool or database permission layer rather than by instructing the agent to ask first, because an instruction in the agent's context can be ignored or lost.
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The tool or database permission rules marking DROP, TRUNCATE, unfiltered DELETE or UPDATE and bulk file deletion as approval-required, with approval records.
  test: Have the agent issue a DROP TABLE and an unfiltered DELETE in staging and confirm neither runs until a human approves it.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  crosswalks:
    csa_addendum:
    - "4.4"
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI02
    - ASI09
    fiveeyes_agentic:
    - OP3
    - DS2
CTRL-0077:
  level: 0
  risks:
  - RISK-041
  - RISK-056
  statement: Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications
  recommendations: Even with access controls and approval workflows, agents may occasionally execute unintended destructive operations due to misunderstandings, bugs, or edge cases. Implement versioning or soft-delete mechanisms for file stores, object storage, and databases that preserve previous versions of data when modifications occur, enabling recovery from accidental overwrites or deletions.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - build
  - deploy
  evidence: The storage and database settings showing versioning, soft-delete or point-in-time recovery enabled, with retention period, on every store the agent can write to.
  test: Overwrite and delete a test object with the agent's credentials, restore the earlier version and confirm its contents match the original.
  references:
  - "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  crosswalks:
    csa_addendum:
    - "2.5"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DS2
    - DV5
CTRL-0078:
  level: 0
  risks:
  - RISK-042
  statement: Enforce throttling or rate limits on agent-initiated database operations
  recommendations: Agents executing database operations without constraints may issue excessive queries that overwhelm database resources, degrade performance for other users, or cause service outages. Implement throttling mechanisms that limit the frequency and volume of agent-initiated database operations, such as maximum queries per second, maximum concurrent connections, or query timeout limits. Monitor database load patterns to detect agents approaching or exceeding rate limits, using this data to refine throttling policies or investigate agents with excessive query behaviour.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - build
  - operate
  evidence: The settings on the agent's database role or query tool giving maximum queries per second, concurrent connections and statement timeout.
  test: Drive the agent's query tool above the configured rate and submit a long-running query, and confirm excess calls are throttled and the query times out.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://api-security.owasp.org/editions/2023/en/0xa4-unrestricted-resource-consumption"
  crosswalks:
    csa_addendum:
    - "3.1"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - OP4
    - AA1
CTRL-0079:
  level: 2
  risks:
  - RISK-042
  statement: Validate agent-generated database queries for efficiency before execution against production databases
  recommendations: Agents may generate inefficient database queries such as full table scans, missing indexes, or SELECT * operations that consume excessive resources and degrade database performance. Implement automated query validation that analyses agent-generated queries before execution, checking for common efficiency issues including lack of appropriate indexes, overly broad selections, missing WHERE clauses on large tables, or N+1 query patterns.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  evidence: "The query validator in the database tool, its rules for missing WHERE clauses, SELECT * and unindexed scans, and its log of rejected queries."
  test: "Submit an unfiltered SELECT * on a large table through the agent's query tool and confirm it is rejected before reaching the production database."
  references:
  - "https://www.postgresql.org/docs/current/using-explain.html"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "3.1"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - OP4
CTRL-0080:
  level: 2
  risks:
  - RISK-042
  statement: Implement caching mechanisms to reduce repetitive database queries by agents
  recommendations: Agents repeatedly querying the same or similar data create unnecessary database load, consuming resources that could be avoided through intelligent caching. Implement caching layers (e.g., Redis, Memcached, in-memory caches) that store frequently accessed data, allowing agents to retrieve cached results rather than repeatedly querying databases for identical information.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - build
  evidence: The cache configuration for the agent's data tools showing key design and expiry times, and the dashboard of cache hit rate.
  test: Issue the same query twice through the agent and confirm the second is served from the cache with no new database query logged.
  references:
  - "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "3.1"
    imda_mgf: []
    owasp_asi:
    - ASI02
    fiveeyes_agentic: []
CTRL-0081:
  level: 1
  risks:
  - RISK-043
  - RISK-066
  statement: Implement input guardrails to detect personally identifiable information in data accessed by agents
  recommendations: Agents accessing files or databases containing PII may inadvertently expose sensitive personal information through outputs, logs, or downstream processing without appropriate safeguards. Deploy input guardrails that scan data retrieved from files, databases, or other sources for PII categories including names, email addresses, phone numbers, identification numbers, and financial information before agents process it. When PII is detected, trigger protective measures such as flagging the data as sensitive to the agent, applying stricter output filtering, requiring additional access authorisation, or activating enhanced logging to track how the sensitive data is used.
  enforcement:
  - harness
  - model
  owner: developer
  phase:
  - build
  - operate
  evidence: The retrieval-path scanner's configuration listing personal data types and the protective action each triggers, with detection events in the log.
  test: Have the agent read a seeded file holding identity numbers and bank details and confirm the content is tagged sensitive and stricter output filtering applies.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  - "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/"
  crosswalks:
    csa_addendum:
    - "4.1"
    imda_mgf:
    - 2.3.1
    owasp_asi: []
    fiveeyes_agentic:
    - DV5
CTRL-0082:
  level: 2
  risks:
  - RISK-043
  - RISK-047
  - RISK-066
  statement: Do not grant agents access to personally identifiable or sensitive data unless strictly required
  recommendations: Agents with unnecessary access to PII or sensitive data create elevated risk of exposure, leakage, or misuse, particularly if agents are compromised or misuse their permissions. Apply the principle of least privilege by restricting agent access to databases, files, or systems containing PII or sensitive information unless explicitly required for the agent's designated functionality. Implement access controls that enforce these restrictions at the data layer, preventing agents from querying or reading sensitive datasets they should not access.
  enforcement:
  - infrastructure
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The agent identity's data-access grants set against the data classification register, showing no grant on personal or sensitive datasets without a recorded justification.
  test: Using the agent's credentials, query a dataset classified as personal data that its task does not need and confirm the data layer denies it.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf"
  - "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/"
  crosswalks:
    csa_addendum:
    - "2.8"
    - "2.7"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - DS3
    - OP5
    - AA1
CTRL-0083:
  level: 0
  risks:
  - RISK-044
  - RISK-047
  statement: Disallow unknown or external files unless they have been scanned for threats
  recommendations: External files may contain maliciously crafted content designed to inject hidden instructions, manipulate agent behaviour, or introduce security threats when processed. Implement mandatory scanning for all unknown or external files before allowing agents to access them, using antivirus software, malware scanners, or specialised tools that detect prompt injection attempts embedded in file content.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - build
  - operate
  evidence: The file-intake pipeline configuration showing the malware and injection scanners every external file passes, with a scan verdict stored per file hash.
  test: Upload a standard antivirus test file and a document carrying hidden instructions and confirm neither becomes readable by the agent.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  crosswalks:
    csa_addendum:
    - "4.1"
    - "2.1"
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    - ASI04
    fiveeyes_agentic:
    - DV3
CTRL-0084:
  level: 0
  risks:
  - RISK-045
  statement: Set minimum and maximum limits on what agents can modify within system resources
  recommendations: Agents with unrestricted ability to modify system configurations may make inappropriate changes that degrade performance, compromise security, or cause service disruptions. Define and enforce quantitative boundaries on agent-initiated configuration changes, such as minimum and maximum values for resource allocations (CPU, memory, storage), rate limits, timeout values, or scaling parameters.
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - design
  - build
  evidence: The policy file bounding agent-initiated changes, with minimum and maximum values for CPU, memory, storage, scaling, timeouts and rate limits.
  test: Have the agent request a scale-up above the maximum and a timeout below the minimum and confirm both changes are rejected and logged.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://kubernetes.io/docs/concepts/policy/limit-range/"
  crosswalks:
    csa_addendum:
    - "2.7"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DP5
CTRL-0085:
  level: 0
  risks:
  - RISK-045
  statement: Log system health metrics and implement automated alerts for abnormal conditions
  recommendations: Misconfigurations by agents may not cause immediate visible failures but instead gradually degrade system health, performance, or stability over time. Implement comprehensive logging of system health metrics including resource utilisation, error rates, response times, and performance indicators that reflect the impact of configuration changes. Configure automated alerting that triggers when metrics deviate from expected baselines or exceed acceptable thresholds.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - deploy
  - operate
  evidence: The dashboards and alert rules for resource utilisation, error rate and response time on systems the agent administers, each with a stated baseline.
  test: Apply a configuration change in staging that degrades response time and confirm an alert fires and the change appears in the alert's timeline.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  - "https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/"
  crosswalks:
    csa_addendum:
    - "4.3"
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - OP1
CTRL-0086:
  level: 0
  risks:
  - RISK-046
  statement: Limit the number of concurrent queries to external systems by agents
  recommendations: Agents making unlimited concurrent queries to external systems may overwhelm those systems, trigger rate limiting or blocking, or exhaust connection pools and network resources. Implement concurrency limits that restrict the maximum number of simultaneous queries an agent can issue to external systems, such as APIs, web services, or remote databases. Configure limits appropriate to external system capacity and rate limit policies, ensuring agents operate within acceptable thresholds whilst maintaining functionality.
  enforcement:
  - harness
  owner: developer
  phase:
  - build
  - operate
  evidence: The tool layer's concurrency settings giving the maximum simultaneous requests per external system and the queueing or back-off behaviour.
  test: Prompt the agent to issue fifty parallel calls to one external API and confirm in-flight requests never exceed the configured maximum.
  references:
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
  - "https://api-security.owasp.org/editions/2023/en/0xa4-unrestricted-resource-consumption"
  - "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"
  crosswalks:
    csa_addendum:
    - "3.1"
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - OP4
    - AA1
CTRL-0089:
  level: 0
  risks:
  - RISK-037
  - RISK-047
  - RISK-049
  statement: Enforce default-deny network egress for agent runtimes, allowing only approved destinations
  recommendations: Every exfiltration and every containment escape needs an outbound channel, and agents acquire new ones with each tool. Run agent runtimes behind an egress policy that denies all outbound connections by default and allows only named destinations required for the task, applied at the network layer (proxy, firewall, or sandbox policy) rather than in the prompt. Include browsing and API tools in the policy, block requests that carry data in URLs or headers to unapproved hosts, and validate at the egress boundary that any credential presented belongs to the deployment — an allowlisted API endpoint is still an exfiltration channel if the agent can use it with an attacker's account. Log and alert on denied connections; they are an early signal of injection or misbehaviour.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - design
  - deploy
  - operate
  evidence: The egress proxy or firewall rule set for the agent runtime showing default deny and the named permitted destinations, with alerts on denied connections.
  test: From inside the agent runtime, request an unlisted host and call a permitted API with another account's key, and confirm both are refused and alerted.
  references:
  - https://www.anthropic.com/engineering/how-we-contain-claude
  - https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
  crosswalks:
    csa_addendum:
    - '2.6'
    - '2.9'
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DP6
    - DV5
CTRL-0090:
  level: 1
  risks:
  - RISK-009
  - RISK-034
  - RISK-036
  - RISK-044
  - RISK-047
  - RISK-059
  statement: Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
  recommendations: Classifier-based injection guardrails are probabilistic and do not close the attack. Complement them with an architectural boundary in which untrusted content never directly drives privileged actions - for example a privileged planner that never sees raw untrusted data working with a quarantined model that extracts values from it (the dual-LLM pattern), capability or information-flow labels that follow data through the system, and a policy engine that checks each tool call against what the data it depends on is allowed to do. Published designs such as CaMeL, Progent, and related reference monitors largely eliminate injection success on agent benchmarks; adopt one, or an equivalent policy layer in your framework, for systems that combine untrusted content with sensitive data or consequential actions.
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The policy engine's rules in version control stating which tools accept data carrying each trust label, and its log of denied tool calls.
  test: Run AgentDojo with the policy layer enabled and confirm instructions injected into tool outputs trigger no privileged tool call.
  references:
  - https://arxiv.org/abs/2503.18813
  - https://arxiv.org/abs/2504.11703
  - https://arxiv.org/abs/2503.18666
  crosswalks:
    csa_addendum:
    - '2.9'
    - '4.1'
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI01
    fiveeyes_agentic:
    - DP5
    - DS4
    - OP5
CTRL-0091:
  level: 0
  risks:
  - RISK-006
  - RISK-048
  - RISK-058
  - RISK-064
  statement: Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
  recommendations: "Treat tools, MCP servers, agent skills or plug-ins, prompt templates, and packages as supply chain artefacts. Install them only from vetted registries, pin them by version and content hash, verify signatures or attestations where available, and keep an inventory (an AI bill of materials) of what each agent can load. Because approval does not survive an update, re-verify hashes and signatures at load time and diff tool definitions against the approved version so a silently changed server is detected before it runs. Do not let agents install unpinned dependencies autonomously, scan new packages for typosquatting and known vulnerabilities, and keep a way to revoke a specific tool or skill across all deployments quickly. Before adopting a tool server, skill or package, assess who publishes it: whether the code is public, how the publisher handles security disclosures, and whether it is actively maintained."
  enforcement:
  - harness
  - organisation
  owner: security
  phase:
  - build
  - deploy
  - operate
  evidence: The lock file pinning every tool, skill, MCP server and package by version and content hash, and the AI bill of materials per agent.
  test: Alter a tool's description on a test server after approval and confirm the load-time hash check refuses the tool and raises an alert.
  references:
  - https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
  - https://morphisec.com/mcp-attack-chain/
  crosswalks:
    csa_addendum:
    - '2.1'
    - '2.4'
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI04
    fiveeyes_agentic:
    - DV7
    - AA2
CTRL-0092:
  level: 0
  risks:
  - RISK-049
  statement: Contain evaluations and red-team exercises so that agents cannot reach real systems, credentials, or people
  recommendations: Treat every evaluation, benchmark run, and red-team exercise as a deployment with its own containment. Use synthetic or replica targets rather than production systems, issue no production credentials or real accounts, isolate the network with default-deny egress, and prohibit out-of-scope tactics such as contacting real people or third-party infrastructure explicitly in the task specification rather than assuming the agent will infer them. Monitor runs in real time with the ability to halt them, and review anomalous traffic (for example anonymising networks or unexpected destinations) immediately. Agents have breached third-party infrastructure from inside an evaluation and socially engineered real maintainers during cyber testing; design containment for a capable adversary, not a compliant one.
  enforcement:
  - infrastructure
  - organisation
  owner: security
  phase:
  - build
  - operate
  evidence: The evaluation environment definition showing replica targets, test-only credentials and default-deny egress, and the task specification's list of prohibited tactics.
  test: From inside an evaluation run, attempt to reach a production hostname and an external site and confirm both are blocked and the run monitor alerts.
  references:
  - https://openai.com/index/hugging-face-model-evaluation-security-incident/
  - https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
  crosswalks:
    csa_addendum:
    - '2.9'
    - '3.2'
    imda_mgf:
    - 2.3.2
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - DV4
    - DP6
CTRL-0093:
  level: 2
  risks:
  - RISK-022
  - RISK-050
  - RISK-051
  - RISK-057
  - RISK-062
  statement: Monitor agents for deceptive and collusive behaviour using an independent monitor
  recommendations: Behaviour that is goal-directed against oversight will not show up as an error. Deploy an independent monitor - a separate model, classifier, or rule set that the monitored agents cannot influence - that compares actions taken with the plan declared, flags edits to an agent's own history or logs, unexplained credential sharing, communication through channels other than the sanctioned ones, and coordination between agents that were not asked to coordinate. Keep monitor logs tamper-evident and separate from agent-writable storage, and treat monitor alerts as incidents that pause the affected agents pending human review. Red-team the monitor itself so that its blind spots are known.
  enforcement:
  - model
  - harness
  owner: security
  phase:
  - build
  - operate
  evidence: The monitor's deployment configuration showing credentials and log storage separate from the monitored agents, its detection rules and its alert history.
  test: Run a red-team agent that declares one plan, carries out another and edits its own log, and confirm the monitor flags both and pauses the agent.
  references:
  - https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
  - https://arxiv.org/abs/2502.14143
  crosswalks:
    csa_addendum:
    - '4.3'
    - '3.4'
    imda_mgf:
    - 2.3.3
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - OP1
    - DP6
    - AA1
CTRL-0094:
  level: 0
  risks:
  - RISK-031
  - RISK-032
  - RISK-041
  - RISK-052
  statement: Measure the quality of human oversight and redesign approval steps that have become rubber stamps
  recommendations: 'A human approval step is only a control while the human is actually deciding. Instrument approval workflows: track approval rates, response times, and override rates per user and per action type, and audit random samples of approved actions. Approval rates near 100% or response times of seconds indicate that the step has stopped working. Respond by routing only genuinely uncertain or high-impact actions to humans, screening routine ones automatically, presenting the context needed to decide (what will change, why the agent chose it, what it would cost to reverse), and training overseers on the agent''s failure modes. Report oversight metrics alongside the agent''s other operating metrics so that erosion is visible to the governance team.'
  enforcement:
  - organisation
  - harness
  owner: governance
  phase:
  - operate
  evidence: The oversight metrics report giving approval rate, response time and override rate per approver and action type, with results of sampled approval audits.
  test: Seed the approval queue with a clearly wrong action and confirm the approver rejects it and the outcome appears in the oversight report.
  references:
  - https://www.anthropic.com/engineering/how-we-contain-claude
  - https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
  crosswalks:
    csa_addendum:
    - '4.4'
    imda_mgf:
    - 2.2.2
    owasp_asi:
    - ASI09
    fiveeyes_agentic:
    - OP3
CTRL-0095:
  level: 1
  risks:
  - RISK-053
  statement: Apply due diligence and technical bounds to third-party agents before delegating to them or transacting with them
  recommendations: An external agent is a supplier whose behaviour you cannot inspect. Before integration, obtain contractual commitments on data handling, retention, and change notification, and evidence of the provider's testing and security practices. Technically, give each third-party agent its own scoped, short-lived credentials bound to the specific tasks delegated, exchange only the data those tasks require through validated schemas, log every exchange on your side, and keep the ability to cut the integration off immediately. Verify the agent's identity on each interaction (signed agent cards, mutual TLS) so that a lookalike cannot take its place, and review its behaviour and outputs periodically as its provider updates it.
  enforcement:
  - organisation
  - infrastructure
  owner: governance
  phase:
  - design
  - build
  - operate
  evidence: The third-party agent's contract clauses on data handling, retention and change notification, its scoped short-lived credential configuration, and the local log of exchanges.
  test: Present an agent card with an invalid signature and confirm delegation is refused, then revoke the real agent's credential and confirm exchanges stop at once.
  references:
  - https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
  - https://a2a-protocol.org/latest/topics/enterprise-ready/
  crosswalks:
    csa_addendum:
    - '2.1'
    - '3.4'
    imda_mgf:
    - 2.2.1
    owasp_asi:
    - ASI04
    fiveeyes_agentic:
    - DV7
    - DS3
    - AA1
CTRL-0096:
  level: 0
  risks:
  - RISK-054
  - RISK-064
  - RISK-065
  statement: Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly
  recommendations: Do not run an agent framework with its defaults on any reachable network. Before exposure, enable authentication on every control interface, bind local services to loopback rather than all interfaces, validate origins on WebSocket and browser-facing endpoints, disable or replace unsafe deserialisation of persisted state and checkpoints, remove default credentials, and run the agent as an unprivileged user. Track security advisories for the frameworks and SDKs in use and treat agent-framework vulnerabilities as high priority for patching, because an agent runtime typically holds the credentials of everything it can act on. Include these checks in the deployment baseline so that a new agent cannot go live unhardened.
  enforcement:
  - infrastructure
  - organisation
  owner: platform
  phase:
  - deploy
  - operate
  evidence: The deployment baseline check covering control-interface authentication, loopback binding, origin validation and unprivileged execution, and the framework patch log with advisory dates.
  test: Scan the deployed runtime from another network segment and confirm no control interface answers without authentication and no default credential works.
  references:
  - https://www.reco.ai/blog/openclaw-the-ai-agent-security-crisis-unfolding-right-now
  - https://thehackernews.com/2026/06/langgraph-flaw-chain-exposes-self.html
  crosswalks:
    csa_addendum:
    - '2.3'
    - '2.8'
    imda_mgf:
    - 2.3.1
    owasp_asi:
    - ASI05
    - ASI03
    fiveeyes_agentic:
    - AA1
    - DV7
CTRL-0097:
  level: 0
  risks:
  - RISK-037
  - RISK-044
  - RISK-047
  statement: Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent
  recommendations: "An agent that reads content from outside parties, can reach sensitive data, and can send data out can be turned into an exfiltration channel by a single injected instruction, and detection alone does not reliably stop this. Map, for each agent, where its inputs come from, what sensitive data it can reach, and every channel through which it can send data out, including messages, API calls, and URLs it can fetch or render. Where all three are present, break the combination: give the untrusted content to a separate agent that has no access to sensitive data and returns only structured values (see CTRL-0020 and CTRL-0090); remove the sensitive data the task does not need (see CTRL-0082); or restrict the outbound channel outside the agent, by limiting recipients and destinations to a fixed allowlist (see CTRL-0089) and requiring human approval for any message or call that carries data to a new recipient. Record which of the three is removed or gated for each agent, and recheck the map whenever a tool, data source, or channel is added. An agent that lacks any of the three does not need this control; record the waiver with evidence of which one is absent."
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The per-agent map of untrusted inputs, reachable sensitive data and outbound channels, recording which of the three is removed or gated, dated after the latest tool change.
  test: Plant an instruction in content the agent reads telling it to send a seeded secret to a new recipient and confirm the secret never leaves.
  references:
  - https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf
  - https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
  crosswalks:
    csa_addendum:
    - '2.7'
    - '2.9'
    imda_mgf:
    - 2.1.2
    owasp_asi:
    - ASI01
    - ASI02
    fiveeyes_agentic:
    - DS4
    - DV7
    - DV5
CTRL-0098:
  level: 0
  risks:
  - RISK-049
  - RISK-056
  statement: Keep credentials and backups out of reach of agent-run code
  recommendations: Code that an agent writes runs with whatever credentials it can find, so tool-level safeguards do not limit it. Give agent-run code its own credentials, scoped to the task and to non-production resources by default, and keep other secrets, such as infrastructure tokens, deployment keys, production database credentials, and cloud provider keys, out of the files, environment variables, and directories the agent can read; use a secrets manager the agent cannot query, and scan the agent's workspace for stray credentials before granting access. Store backups and version history where neither the agent nor the credentials it holds can delete them, so that recovery (CTRL-0077) survives an agent's mistake.
  enforcement:
  - infrastructure
  owner: platform
  phase:
  - design
  - build
  - operate
  evidence: The agent runtime's secrets configuration showing task-scoped credentials only, the latest scan of its workspace for other credentials, and backup storage policies that deny deletion to the agent's identities.
  test: From code the agent runs, try to read a production credential and to delete a backup, and confirm that both are refused.
  references:
  - "https://hackread.com/cursor-ai-agent-wipes-pocketos-database-backups/"
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  crosswalks:
    csa_addendum:
    - "2.6"
    - "2.8"
    imda_mgf:
    - "2.1.2"
    owasp_asi:
    - ASI03
    - ASI05
    fiveeyes_agentic:
    - OP5
    - DP6
CTRL-0099:
  level: 1
  risks:
  - RISK-057
  statement: Stop the task when an action is refused and report to a human, instead of letting the agent look for another route
  recommendations: "An agent that is refused an action will often try to reach the same goal another way, and the second route is rarely one its operators considered. When a permission check, a policy layer, a sandbox, or a tool returns a refusal, treat it as the end of that line of work: have the harness halt the task or return control to a human, with the refusal and what the agent was attempting. State in the agent's instructions which means are off limits whatever the goal, such as credentials it was not issued, systems outside the task, and other people's accounts, but do not rely on the instruction alone. Count refusals per task and alert when an agent meets several in a row, which is a sign that it is probing for a way round."
  enforcement:
  - harness
  - prompt
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The harness code path that handles a denied action, showing the task halting or returning to a human, and the alert rule on repeated refusals.
  test: Deny an action that the agent needs for its task and confirm that it stops and reports, and does not attempt the action through another tool or credential.
  references:
  - "https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/"
  - "https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/"
  crosswalks:
    csa_addendum:
    - "2.7"
    - "4.4"
    imda_mgf:
    - "2.2.2"
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - DP5
    - OP3
CTRL-0100:
  level: 0
  risks:
  - RISK-058
  statement: Load instruction, settings, and tool-configuration files only from locations the operator controls, and ask before using any that arrive with a workspace
  recommendations: Files that an agent loads automatically are instructions and code, whoever wrote them. Decide which locations may supply instruction, rules, settings, hook, skill, and tool-configuration files, and keep them under the operator's control and under version review. When the agent is started in a workspace that brings such files with it, such as a cloned repository or a downloaded folder, do not apply them until a person has seen what they contain and agreed, and make sure the trust prompt comes before anything in the workspace runs. Show hidden and invisible characters in these files when they are reviewed, and re-check them when they change (see CTRL-0091). Do not let the agent itself create or edit them (see CTRL-0101).
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The agent's configuration listing the locations it loads instruction and settings files from, and its trust-prompt behaviour for workspace-supplied files, with a review record for the files currently in use.
  test: Start the agent in a folder containing a planted instruction file and a settings file with a command hook, and confirm that neither takes effect before the user approves the workspace.
  references:
  - "https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/"
  - "https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents"
  crosswalks:
    csa_addendum:
    - "2.1"
    - "4.1"
    imda_mgf:
    - "2.3.1"
    owasp_asi:
    - ASI01
    - ASI04
    fiveeyes_agentic:
    - DS1
    - DV7
    - DP4
CTRL-0101:
  level: 0
  risks:
  - RISK-058
  - RISK-062
  statement: Give agents no write access to their own instructions, configuration, permissions, logs, or monitors
  recommendations: An agent that can edit what governs it holds both sides of the check. Keep the agent's instruction files, settings, tool and permission configuration, approval rules, logs, and monitoring out of every location and API that the agent's own identities can write to. Send logs to a store that the agent cannot modify or delete, and run monitors under a different identity, outside the agent's environment. Make changes to permissions and configuration go through a path that needs a human, and alert on any attempt by an agent to change them. Check this for every route the agent has, including code it can run and applications it can operate, and not only for its named tools.
  enforcement:
  - infrastructure
  - harness
  owner: platform
  phase:
  - design
  - build
  - operate
  evidence: Access policies showing that the agent's identities have no write permission on its configuration, permission, and instruction stores, and that its logs go to append-only storage owned by another identity.
  test: Using the agent's credentials and tools, try to edit its permission configuration and to delete a log entry, and confirm that both fail and raise an alert.
  references:
  - "https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/"
  - "https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/"
  crosswalks:
    csa_addendum:
    - "2.6"
    - "4.3"
    imda_mgf:
    - "2.2.2"
    owasp_asi:
    - ASI10
    - ASI03
    fiveeyes_agentic:
    - DS2
    - OP1
CTRL-0102:
  level: 1
  risks:
  - RISK-060
  statement: Issue agents short-lived, task-scoped credentials, keep an inventory of them, and revoke them when an agent or integration is retired
  recommendations: Long-lived tokens held by agents, and by the vendors and platforms that act for them, are a standing target. Issue credentials per agent and per task with the shortest lifetime the work allows, prefer workload identity or brokered tokens to stored secrets, and keep them out of plain files, shell history, and agent memory. Keep an inventory of every credential and third-party grant that an agent holds, with an owner for each. Review the inventory on a fixed schedule, and revoke credentials when an agent is decommissioned, an integration is removed, a vendor is offboarded, or the person who authorised a grant leaves. Treat a compromise at an agent vendor as a compromise of every token that vendor held.
  enforcement:
  - infrastructure
  - organisation
  owner: security
  phase:
  - design
  - operate
  - retire
  evidence: The inventory of agent credentials and third-party grants, with owner, scope, expiry, and last review date, and the revocation records for retired agents and integrations.
  test: Pick a retired agent or a removed integration and confirm that each credential it held is rejected.
  references:
  - "https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift"
  - "https://composio.dev/blog/composio-may-2026-security-incident"
  crosswalks:
    csa_addendum:
    - "2.6"
    - "2.4"
    imda_mgf:
    - "2.1.2"
    owasp_asi:
    - ASI03
    fiveeyes_agentic:
    - DS3
    - OP5
CTRL-0103:
  level: 1
  risks:
  - RISK-061
  statement: Pin the model version, re-run evaluations before any model change, and keep a tested fallback
  recommendations: A hosted model can change or disappear without any change on your side. Call models by a dated or versioned identifier, not by an alias that moves. Record the provider's retirement dates and subscribe to its status and change notices. Before adopting a new model or version, re-run the evaluations and safety verification that the system was approved on (see CTRL-0005 and CTRL-0038), paying attention to tool calling and instruction following, which change between versions. Monitor output quality in production so that a silent degradation is noticed. For systems that must stay available, keep a second model or a manual procedure that has been tested, and decide in advance what the agent is allowed to do while it is running on the fallback.
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - build
  - operate
  evidence: The configuration that names the pinned model version, the evaluation results recorded against that version, and the record of the last fallback test.
  test: Point the system at the fallback model or procedure and confirm that it completes a standard task set within the limits agreed for fallback operation.
  references:
  - "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues"
  - "https://support.zendesk.com/hc/en-us/articles/10932821917082-Service-Incident-June-19-2026-AI-Agents-OpenAI-service-delays-and-error-issues"
  crosswalks:
    csa_addendum:
    - "3.1"
    imda_mgf:
    - "2.3.3"
    owasp_asi:
    - ASI08
    fiveeyes_agentic:
    - DV5
    - OP4
CTRL-0104:
  level: 1
  risks:
  - RISK-063
  statement: Authorise each action against the principal it is done for, at the agent that carries it out
  recommendations: "When agents call each other, the permission that matters is that of the person or system at the start of the chain, not that of the agent making the request. Pass the originating principal's identity and scope with every inter-agent request, in a form the receiving agent can verify, and have the agent that acts check the action against that scope. An agent's effective permissions for a request should be no wider than those of the least-privileged party that contributed to it. Do not let agents discover and call each other freely: list which agents may call which, and for which actions. Treat a message from another organisation's agent as untrusted input, and require a human or an out-of-band confirmation before acting on it where the action is consequential."
  enforcement:
  - harness
  - infrastructure
  owner: developer
  phase:
  - design
  - build
  evidence: The inter-agent call path showing the originating principal's identity carried in each request and checked by the acting agent, and the list of permitted agent-to-agent calls.
  test: From a low-privilege session, have one agent ask a higher-privilege agent for an action that the user is not entitled to, and confirm that it is refused.
  references:
  - "https://appomni.com/ao-labs/ai-agent-to-agent-discovery-prompt-injection/"
  - "https://www.pillar.security/blog/ill-just-call-you-agent-to-agent-privilege-boundary-failures-in-ci-cd-on-googles-adk-repository"
  crosswalks:
    csa_addendum:
    - "3.4"
    - "2.6"
    imda_mgf:
    - "2.1.2"
    owasp_asi:
    - ASI03
    - ASI07
    fiveeyes_agentic:
    - DS3
    - OP5
CTRL-0105:
  level: 1
  risks:
  - RISK-065
  statement: Accept instructions and approvals only through a channel that proves they come from the principal
  recommendations: "An approval step protects nothing if something other than the user can press the button. Do not let a link, a URL parameter, or a deep link submit a prompt or change a setting: show the text and wait for the user to send it. Render approval prompts where other software, web pages, and browser extensions cannot script them, and require a deliberate action for consequential approvals. Do not provide a flag or an environment variable that turns off permission checks for unattended use; where one is needed for automation, bind it to a separate, restricted identity. Protect operator consoles and control interfaces with strong authentication (see CTRL-0096), and log every instruction with the channel it arrived through, so that a forged one can be told apart afterwards."
  enforcement:
  - harness
  owner: developer
  phase:
  - design
  - build
  evidence: The interface code and configuration showing that links cannot submit prompts, that approval prompts are isolated from scripting, and that no option disables permission checks for the standard identity.
  test: Open the agent from a link that carries a prompt, and drive its approval prompt from another process, and confirm that nothing is submitted or approved without the user.
  references:
  - "https://www.varonis.com/blog/reprompt"
  - "https://nx.dev/blog/s1ngularity-postmortem"
  crosswalks:
    csa_addendum:
    - "2.6"
    - "4.4"
    imda_mgf:
    - "2.2.2"
    owasp_asi:
    - ASI09
    - ASI03
    fiveeyes_agentic:
    - OP3
    - DP4
CTRL-0106:
  level: 1
  risks:
  - RISK-066
  statement: Minimise the personal data an agent sends through its tools, and set a retention period for what it keeps
  recommendations: "Personal data leaves through ordinary tool calls: a search query, an API parameter, a file upload. Decide for each tool which categories of personal data it may carry, and enforce this in the tool layer by redacting or blocking the rest (see CTRL-0047 and CTRL-0081), with stricter rules for tools that reach other organisations. Collect only the records a task needs instead of indexing whole mailboxes, drives, or repositories, and make any upload to a hosted service an explicit choice, not a default. Set a retention period for everything the agent stores, including indexes, caches, transcripts, and memory, and delete on schedule and when the user leaves or the purpose ends. Tell people when an agent is recording or processing their data, and obtain consent where the law requires it."
  enforcement:
  - harness
  - organisation
  owner: developer
  phase:
  - design
  - build
  - operate
  evidence: The per-tool data rules and redaction configuration, the retention schedule for agent stores, and deletion logs showing the schedule being met.
  test: Give the agent a task whose natural tool call would send a personal identifier to an external service, and confirm that the identifier is removed or the call is blocked.
  references:
  - "https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "2.7"
    imda_mgf:
    - "2.3.1"
    owasp_asi:
    - ASI02
    fiveeyes_agentic:
    - DS1
    - DP5
CTRL-0107:
  level: 1
  risks:
  - RISK-067
  statement: Set limits on what users may direct the agent to do to others, enforce them across a whole task, and have the agent identify itself
  recommendations: State in an acceptable-use policy what the agent may not be used for, such as compiling profiles of individuals, producing material for fraud, or accessing services in ways their operators forbid. Enforce it with guardrails that look at the aim of a task and not only at each step, since a harmful aim can be split into steps that each look routine. Where the agent acts on other parties' services, respect their terms and technical signals, identify the agent as an agent in its requests, and do not disguise it as a human user. Monitor for patterns of misuse across sessions, and give outside parties a way to report an agent that is acting against them and to have it stopped.
  enforcement:
  - organisation
  - harness
  owner: governance
  phase:
  - design
  - operate
  evidence: The acceptable-use policy, the guardrail configuration that evaluates the aim of a task, and the record of misuse reports received and acted on.
  test: Ask the agent, across several ordinary-looking steps, to assemble a profile of a named private individual, and confirm that the task is refused or flagged.
  references:
  - "https://labs.guard.io/vibescamming-from-prompt-to-phish-benchmarking-popular-ai-agents-resistance-to-the-dark-side-1ec2fbdf0a35"
  - "https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
  crosswalks:
    csa_addendum:
    - "2.7"
    - "4.4"
    imda_mgf:
    - "2.4.2"
    owasp_asi:
    - ASI10
    fiveeyes_agentic:
    - DP2
    - DP5
`,hazards:`# Hazards: the resulting impact of a risk. Security hazards concern the confidentiality,
# integrity, and availability of systems, data, and infrastructure; safety hazards concern
# human well-being, social harm, and the responsible use of AI. See docs/arc_framework/risks.md.
HZ-01:
  name: "Data"
  type: "Security"
  description: "Data breaches, integrity attacks, PII exposure, or ransomware, where sensitive information in files or databases is exfiltrated, corrupted, or held hostage."
HZ-02:
  name: "Application"
  type: "Security"
  description: "System failures, service disruptions, unintended use of applications, backdoor access, or resource exploitation that compromise functionality or security."
HZ-03:
  name: "Infrastructure and network"
  type: "Security"
  description: "Denial of service, man-in-the-middle attacks, network eavesdropping, or lateral access that compromise the underlying infrastructure."
HZ-04:
  name: "Identity and access management"
  type: "Security"
  description: "Unauthorised control, impersonation of credible roles, or privilege escalation allowing elevated access or control over systems."
HZ-05:
  name: "Illegal and CBRNE activities"
  type: "Safety"
  description: "Facilitating or engaging in CBRNE-related activities or other offences such as fraud, scams, smuggling, or intellectual property infringement."
HZ-06:
  name: "Discriminatory or hateful content"
  type: "Safety"
  description: "Unsafe or discriminatory content, including hate speech, slurs, and biased decisions."
HZ-07:
  name: "Inappropriate content"
  type: "Safety"
  description: "Generation of vulgar, violent, sexual, or self-harm-promoting content that causes reputational harm and erodes trust."
HZ-08:
  name: "Compromised user safety"
  type: "Safety"
  description: "Direct endangerment of users or third parties through misinformation, unsafe advice, or harmful autonomous actions."
HZ-09:
  name: "Misrepresentation"
  type: "Safety"
  description: "Dissemination of wrong or inaccurate information, misleading claims about authorship or authority, or cascading failures from uncorrected errors, leading to loss of trust."
HZ-10:
  name: "Financial or contractual loss"
  type: "Safety"
  description: "Money lost, or obligations created that the organisation did not intend: wrong or unauthorised payments, purchases, refunds, or commitments, and costs run up by the agent's own activity."
HZ-11:
  name: "Harm to third parties"
  type: "Safety"
  description: "Damage to the systems, data, property, or reputation of people or organisations outside the deployment, caused by what the agent does."
`,crosswalk_references:`# External frameworks the ARC register cross-references. The validator checks every
# crosswalk ID in risks.yaml and controls.yaml against the ids listed here.

owasp_asi:
  title: OWASP Top 10 for Agentic Applications 2026
  url: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
  version: "2026 (December 2025)"
  applies_to: [risks, controls]
  ids:
    ASI01: Agent Goal Hijack
    ASI02: Tool Misuse and Exploitation
    ASI03: Identity and Privilege Abuse
    ASI04: Agentic Supply Chain Vulnerabilities
    ASI05: Unexpected Code Execution (RCE)
    ASI06: Memory and Context Poisoning
    ASI07: Insecure Inter-Agent Communication
    ASI08: Cascading Failures
    ASI09: Human-Agent Trust Exploitation
    ASI10: Rogue Agents

owasp_agentic_threats:
  title: OWASP Agentic AI – Threats and Mitigations (threat taxonomy, as reproduced in CSA Addendum Annex A)
  url: https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/
  version: "T1–T15 per CSA Addendum Annex A; T16–T17 per OWASP Top 10 Appendix A"
  applies_to: [risks]
  ids:
    T1: Memory poisoning
    T2: Tool misuse
    T3: Privilege compromise
    T4: Resource overload
    T5: Cascading hallucination attacks
    T6: Intent breaking and goal manipulation
    T7: Misaligned and deceptive behaviours
    T8: Repudiation and untraceability
    T9: Identity spoofing and impersonation
    T10: Overwhelming human in the loop
    T11: Unexpected RCE and code attacks
    T12: Agent communication poisoning
    T13: Rogue agents in multi-agent systems
    T14: Human attacks on multi-agent systems
    T15: Human manipulation
    T16: Insecure inter-agent protocol abuse
    T17: Supply chain compromise

csa_addendum:
  title: CSA Singapore – Securing Agentic AI, an Addendum to the Guidelines and Companion Guide on Securing AI Systems
  url: https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/
  version: "1.0 (17 June 2026)"
  applies_to: [controls]
  ids:
    "1.1": Conduct a risk assessment in accordance with relevant standards and best practices
    "2.1": Supply chain security – ensure components are from trusted sources
    "2.2": Consider model hardening
    "2.3": Harden the system beyond the model itself
    "2.4": Identify, track and protect AI system assets
    "2.5": Have regular backups in the event of compromise
    "2.6": Implement authentication, authorisation and access controls
    "2.7": Implement controls to limit what models or agents can access and generate
    "2.8": Apply least privilege; secure-by-default configurations
    "2.9": Segregate environments and segment networks
    "2.10": Implement model self-reflection before decisions
    "2.11": Implement controls to reduce the likelihood of hallucination
    "3.1": Ensure availability controls against disruption or failure
    "3.2": Conduct security testing
    "3.3": Secure the invocation of external tools (e.g. MCP servers)
    "3.4": Implement security controls between agents
    "4.1": Validate inputs to models and agents
    "4.2": Validate outputs from models and agents
    "4.3": Continuous monitoring and logging
    "4.4": Ensure adequate human oversight
    "4.5": Establish a vulnerability disclosure process

imda_mgf:
  title: IMDA – Model AI Governance Framework for Agentic AI
  url: https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
  version: "1.5 (May 2026)"
  applies_to: [controls]
  ids:
    "2.1.1": Determine suitable use cases
    "2.1.2": Bound risks through design (agent limits, agent identity)
    "2.2.1": Clear allocation of responsibilities
    "2.2.2": Design for meaningful human oversight
    "2.3.1": Technical controls during design and development
    "2.3.2": Test agents before deploying
    "2.3.3": Continuously monitor and test when deploying
    "2.4.2": Users who interact with agents (transparency, disclosure, escalation)
    "2.4.3": Users who integrate agents

mitre_atlas:
  title: MITRE ATLAS (Adversarial Threat Landscape for AI Systems)
  url: https://atlas.mitre.org/
  version: "2026.10 (28 October 2026)"
  applies_to: [risks]
  ids:
    "AML.T0010.001": "Supply Chain Compromise: Software"
    "AML.T0010.003": "Supply Chain Compromise: Model Repository"
    "AML.T0010.005": "Supply Chain Compromise: AI Agent Tool"
    "AML.T0011.001": "User Execution: Malicious Package"
    "AML.T0011.002": "User Execution: Poisoned AI Agent Tool"
    "AML.T0018.000": "Manipulate AI Model: Poison AI Model"
    "AML.T0020": "Training Data Poisoning"
    "AML.T0046": "Spamming AI System with Chaff Data"
    "AML.T0049": "Exploit Public-Facing Application"
    "AML.T0050": "Command and Scripting Interpreter"
    "AML.T0051": "LLM Prompt Injection"
    "AML.T0051.001": "LLM Prompt Injection: Indirect"
    "AML.T0053": "AI Agent Tool Invocation"
    "AML.T0055": "Unsecured Credentials"
    "AML.T0060": "Publish Hallucinated Entities"
    "AML.T0067": "LLM Trusted Output Components Manipulation"
    "AML.T0070": "RAG Poisoning"
    "AML.T0073": "Impersonation"
    "AML.T0077": "LLM Response Rendering"
    "AML.T0078": "Drive-by Compromise"
    "AML.T0080.000": "AI Agent Context Poisoning: Memory"
    "AML.T0083": "Credentials from AI Agent Configuration"
    "AML.T0085": "Data from AI Services"
    "AML.T0086": "Exfiltration via AI Agent Tool Invocation"
    "AML.T0091.000": "Use Alternate Authentication Material: Application Access Token"
    "AML.T0093": "Prompt Infiltration via Public-Facing Application"
    "AML.T0099": "AI Agent Tool Data Poisoning"
    "AML.T0100": "AI Agent Clickbait"
    "AML.T0105": "Escape to Host"
    "AML.T0109": "AI Supply Chain Rug Pull"
    "AML.T0110": "AI Agent Tool Poisoning"
    "AML.T0115.001": "Publish Poisoned AI Artifacts: Models"
    "AML.T0115.002": "Publish Poisoned AI Artifacts: AI Agent Tools"
    "AML.T0117": "Autonomous Attack-Path Adaptation"
    "AML.T0118": "Autonomous AI Agent Communication"
    "AML.T0118.000": "Autonomous AI Agent Communication: Communication via Shared Artifacts"
    "AML.T0118.001": "Autonomous AI Agent Communication: Direct Agent Communication"
    "AML.T0122": "Exploitation of Remote Services"
    "AML.T0132": "Misconfigured or Publicly Exposed AI Services"
    "AML.T0138": "Indicator Removal"
    "AML.T0143": "LLM Prompt Propagation"

fiveeyes_agentic:
  title: ASD's ACSC, CISA, NSA, Cyber Centre, NCSC-NZ and NCSC-UK – Careful adoption of agentic AI services
  url: https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services
  version: "May 2026 (published 1 May 2026)"
  applies_to: [controls]
  # The guidance does not number its practice areas. These IDs are ARC's: a prefix for the part of the
  # document (DS designing, DV developing, DP deploying, OP operating, FR future risks, AA appendix A)
  # and the practice area's position within it.
  ids:
    "DS1": "Designing secure agents – Controlled context"
    "DS2": "Designing secure agents – Oversight mechanisms"
    "DS3": "Designing secure agents – Identity management"
    "DS4": "Designing secure agents – Defence in depth"
    "DV1": "Developing secure agents – Comprehensive testing"
    "DV2": "Developing secure agents – Appropriate evaluation"
    "DV3": "Developing secure agents – Input management"
    "DV4": "Developing secure agents – Red teaming"
    "DV5": "Developing secure agents – Resilience"
    "DV6": "Developing secure agents – Accountability"
    "DV7": "Developing secure agents – Manage third-party components"
    "DP1": "Deploying agents securely – Threat modelling"
    "DP2": "Deploying agents securely – Governance"
    "DP3": "Deploying agents securely – Progressive deployment"
    "DP4": "Deploying agents securely – Secure by default"
    "DP5": "Deploying agents securely – Guardrails and constraints"
    "DP6": "Deploying agents securely – Isolation"
    "OP1": "Operating agents securely – Monitoring and auditing"
    "OP2": "Operating agents securely – Validate outputs"
    "OP3": "Operating agents securely – Human in the loop"
    "OP4": "Operating agents securely – Performance monitoring"
    "OP5": "Operating agents securely – Privileges and authentication"
    "FR1": "Defend against future risks – Expand threat intelligence through collaboration"
    "FR2": "Defend against future risks – Develop robust, agent-specific evaluations"
    "FR3": "Defend against future risks – Leverage system-theoretic approaches to analyse security"
    "AA1": "Appendix A, prerequisites – Design"
    "AA2": "Appendix A, prerequisites – Development"
`,combinations:`# Capability combinations: risks that arise only when a system holds certain capabilities together.
#
# roles    What a capability can contribute to a combination. A capability supplies a role always
#          (mark "yes") or only in some deployments (mark "maybe"; its note says when). A mark may
#          state the least authority at which the capability supplies the role (min_authority).
# rules    A rule names the roles that must all be supplied. For a given system a rule is
#            present      every role is supplied by a capability marked "yes"
#            possible     every role is supplied, at least one only by capabilities marked "maybe";
#                         the assessor answers the note for each
#            not present  at least one role is supplied by none of the system's capabilities
#          A rule that is present or possible brings its risks into scope, and its control must be
#          implemented unless the assessor shows that a role is absent.
# implies  Capabilities that give a system other capabilities, whether or not they were declared.
#          The assessor adds each implied capability, or records why it does not apply.
#
# Components are not part of the role mapping: persistent memory can carry untrusted content or
# sensitive data from one session into another, so count it when answering.
# Marks must be the quoted strings "yes" and "maybe" (an unquoted yes is read by YAML as a boolean).

roles:
  untrusted-content:
    name: Untrusted content
    description: "Content that someone outside the organisation's control can write reaches the agent."
    question: "Can anyone outside your organisation's control write content that this system reads?"
    capabilities:
      CAP-02:
        mark: "maybe"
        note: "Yes if it takes output from agents that other parties operate, or from agents that read untrusted content themselves."
      CAP-04:
        mark: "maybe"
        note: "Yes if its users are members of the public, or can upload or paste documents, images, or audio that someone else wrote."
      CAP-05:
        mark: "maybe"
        note: "Yes if it also reads replies or other inbound messages on the channels it sends through."
      CAP-07:
        mark: "yes"
        note: "Web pages and search results can be written by anyone."
      CAP-08:
        mark: "yes"
        note: "Whatever appears on screen reaches the agent, including web pages, emails, and documents written by others."
      CAP-09:
        mark: "maybe"
        note: "Yes if any API, queue, or mailbox it reads carries content from outside parties, such as inbound email, support tickets, form submissions, or webhooks."
      CAP-10:
        mark: "maybe"
        note: "Yes if it runs or reads code, packages, or repositories that outside parties can change."
      CAP-11:
        mark: "maybe"
        note: "Yes if any file or data store it reads holds content from outside parties, such as uploads, shared drives, or records created from customer input."
  sensitive-data:
    name: Sensitive data
    description: "The agent can read data that would cause harm if it left the organisation, such as personal data, credentials, or confidential records."
    question: "Can this system read anything your organisation would not publish?"
    capabilities:
      CAP-06:
        mark: "maybe"
        note: "Yes if it holds payment credentials, or can read account, order, or customer records."
      CAP-08:
        mark: "yes"
        note: "It can see whatever the signed-in user can open on the machine."
      CAP-09:
        mark: "maybe"
        note: "Yes if any API it can call returns personal, confidential, or credential data."
      CAP-11:
        mark: "yes"
        note: "It reads the organisation's files, databases, or knowledge bases."
      CAP-12:
        mark: "yes"
        note: "System administration reaches configuration, credentials, and logs."
  outbound-channel:
    name: Outbound channel
    description: "The agent can cause data to reach a destination outside the organisation's control."
    question: "Can this system cause data to reach a destination your organisation does not control?"
    capabilities:
      CAP-02:
        mark: "maybe"
        note: "Yes if it can pass data to an agent that another party operates, or to an agent that has an outbound channel of its own."
      CAP-04:
        mark: "maybe"
        note: "Yes if its output is shown to people outside the organisation, or is rendered in a way that loads external images or links."
      CAP-05:
        mark: "yes"
        min_authority: act-with-approval
        note: "It sends messages to people outside the organisation."
      CAP-06:
        mark: "yes"
        min_authority: act-with-approval
        note: "Transactions carry data to external parties in payment references, order details, and booking fields."
      CAP-07:
        mark: "yes"
        note: "Any request to a web address can carry data in the URL or the query."
      CAP-08:
        mark: "yes"
        note: "It can use any application on the machine that sends data, including the browser and the mail client."
      CAP-09:
        mark: "maybe"
        note: "Yes if any API it can call writes to a system outside the organisation, or accepts a destination that the agent chooses."
      CAP-10:
        mark: "maybe"
        min_authority: act-with-approval
        note: "Yes if the environment its code runs in can make network requests."
      CAP-12:
        mark: "maybe"
        min_authority: act-with-approval
        note: "Yes if it can change network, sharing, or access settings so that data becomes reachable from outside."

  own-safeguards:
    name: Its own safeguards
    description: "The agent can change the logs, monitors, permissions, approval settings, or configuration that are meant to constrain it."
    question: "Can any identity, tool, or code path the agent has write to what governs the agent itself?"
    capabilities:
      CAP-08:
        mark: "maybe"
        note: "Yes if it can open the settings of the application or platform that runs it."
      CAP-10:
        mark: "maybe"
        min_authority: act-with-approval
        note: "Yes if code it runs can reach the files, services, or settings that hold its permissions, approvals, logs, or monitors."
      CAP-11:
        mark: "maybe"
        min_authority: act-with-approval
        note: "Yes if its write access covers its own instruction, configuration, or log files."
      CAP-12:
        mark: "yes"
        min_authority: act-with-approval
        note: "It manages access controls, monitoring, and configuration, which can include its own."

rules:
  lethal-trifecta:
    name: Lethal trifecta
    mechanism: flow
    description: "An agent that reads untrusted content, can reach sensitive data, and can send data out can be turned into an exfiltration channel by a single injected instruction. No one of the three creates the exposure; the three together do."
    roles:
    - untrusted-content
    - sensitive-data
    - outbound-channel
    control: CTRL-0097
    risks:
    - RISK-047
    sources:
    - https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
    - https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf

  oversight-within-reach:
    name: Oversight within reach
    mechanism: both-sides-of-a-check
    description: "An agent that can change the logs, monitors, permissions, or approvals that govern it holds both sides of a check. It can remove the check in pursuit of its task, or be told to by injected content."
    roles:
    - own-safeguards
    control: CTRL-0101
    risks:
    - RISK-062
    sources:
    - https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/
    - https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/

implies:
  CAP-02:
    any:
      mark: "maybe"
      note: "The system has every capability held by an agent it can delegate to, including agents that another party operates. List those agents and their capabilities."
  CAP-08:
    CAP-07:
      mark: "maybe"
      note: "Yes if a browser is installed on the machine it operates."
    CAP-09:
      mark: "maybe"
      note: "Yes if the machine has applications or a terminal that call other systems."
    CAP-10:
      mark: "maybe"
      note: "Yes if it can open a terminal, a code editor, or any application that runs scripts."
    CAP-11:
      mark: "yes"
      note: "It can open, change, and delete whatever files the signed-in user can."
    CAP-12:
      mark: "maybe"
      note: "Yes if the signed-in user can change system settings or access controls."
  CAP-10:
    CAP-09:
      mark: "maybe"
      note: "Yes unless the environment its code runs in blocks network access."
    CAP-11:
      mark: "yes"
      note: "Code can read and write whatever files the account it runs under can."
    CAP-12:
      mark: "maybe"
      note: "Yes if credentials for infrastructure, deployment, or administration are within reach of the code it runs."
  CAP-12:
    CAP-11:
      mark: "maybe"
      note: "Yes if it can grant itself access to data stores it was not given."
`}),ly=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},uy=(e=>e?ly(e):ly),dy=e=>e;function fy(e,t=dy){let n=_.useSyncExternalStore(e.subscribe,_.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return _.useDebugValue(n),n}var py=e=>{let t=uy(e),n=e=>fy(t,e);return Object.assign(n,t),n},my=(e=>e?py(e):py),hy=`arcvisor:assessment:v1`,gy=`arcvisor:prefs:v1`;function _y(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function vy(e,t){try{t==null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}catch{}}function yy(){let e=_y(hy);if(!e)return null;let t=pv(e);return t.ok?t.value:null}function by(){let e=_y(gy)??{};return{mode:e.mode===`review`?`review`:`assess`,me:{name:e.me?.name??``,role:e.me?.role??``}}}var Q=my()((e,t)=>{let n=by(),r=e=>vy(gy,{mode:t().mode,me:t().me,...e});return{...n,a:yy(),unsaved:!1,open:t=>{vy(hy,t),e({a:t,unsaved:!1})},close:()=>{vy(hy,null),e({a:null,unsaved:!1})},edit:(n,r=!1)=>{let i=t().a;if(!i||i.signoff.signedAt&&!r)return;let a=structuredClone(i);n(a),a.updatedAt=new Date().toISOString(),vy(hy,a),e({a,unsaved:!0})},replace:t=>{vy(hy,t),e({a:t,unsaved:!0})},setMode:t=>{r({mode:t}),e({mode:t})},setMe:t=>{r({me:t}),e({me:t})},markSaved:()=>e({unsaved:!1})}});function xy(){let e=Q(e=>e.a);if(!e)throw Error(`No assessment is open`);return e}function Sy(e){let t=Iv(Z,e),n=Hv(Z,e,t),r=$v(Z,e);return{app:Fv(Z,e),implied:Nv(Z,Tv(e)),risks:t,state:Object.fromEntries(t.map(t=>[t,Bv(e,t)])),scope:n,scopeById:Object.fromEntries(n.map(e=>[e.id,e])),blockers:Xv(Z,e),progress:Zv(Z,e),residual:Gv(Z,e,n),diff:r&&!r.empty?r:null,changes:ny(Z,e),pending:qv(e),contradicted:n.filter(t=>Yv(e,t.id)).map(e=>e.id),signed:!!e.signoff.signedAt}}function Cy(){let e=xy();return(0,_.useMemo)(()=>Sy(e),[e])}var wy=`docs/arc/assessment.arc.json`;function Ty(e,t,n){let r=URL.createObjectURL(new Blob([t],{type:n})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}var Ey=e=>(e??``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)||`assessment`;function Dy(e){Ty(`assessment.arc.json`,JSON.stringify(e,null,2)+`
`,`application/json`)}function Oy(e,t){Ty(`${Ey(t.system.name)}-revision-${t.revision}.md`,cy(e,t),`text/markdown`)}async function ky(e){let t=pv(await e.text());return t.ok?t:{ok:!1,error:Ay(t.errors)}}function Ay(e){let t=e.slice(0,3).join(`; `);return e.length>3?`${t}; and ${e.length-3} more problems`:t}async function jy(e,t=fetch){let n=e.trim().replace(/\.git$/,``).match(/^(?:https?:\/\/)?(?:www\.)?(?:github\.com\/)?([\w.-]+)\/([\w.-]+)\/?$/);if(!n)return{ok:!1,error:`Enter a GitHub repository, such as github.com/org/repository.`};let r=`https://raw.githubusercontent.com/${n[1]}/${n[2]}/HEAD/${wy}`,i;try{i=await t(r)}catch{return{ok:!1,error:`Could not reach GitHub. Check your connection, or download the file and open it instead.`}}if(i.status===404)return{ok:!1,error:`No ${wy} in ${n[1]}/${n[2]}. Run the ARC skill in the repository first, or check that it is public.`};if(!i.ok)return{ok:!1,error:`GitHub answered ${i.status}. Try again, or download the file and open it instead.`};let a=pv(await i.text());return a.ok?a:{ok:!1,error:Ay(a.errors)}}function My(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(`en-SG`,{day:`numeric`,month:`short`,year:`numeric`})}function Ny(e,t=new Date){let n=Math.max(0,(t.getTime()-new Date(e).getTime())/1e3);return n<60?`just now`:n<3600?`${Math.round(n/60)} min ago`:n<86400?`${Math.round(n/3600)} h ago`:My(e)}var Py=e=>e.split(/[\s,]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``)||`?`,Fy=e=>e.replace(/^https?:\/\/(www\.)?github\.com\//,``).replace(/\.git$/,``).replace(/\/$/,``),Iy=e=>(window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)),Ly=()=>window.location.hash;function Ry(e){let[t,n]=e.replace(/^#\/?/,``).split(`?`);return{path:t.split(`/`).filter(Boolean).map(decodeURIComponent),query:new URLSearchParams(n??``)}}function zy(){return Ry((0,_.useSyncExternalStore)(Iy,Ly,Ly))}function $(e=[],t){let n=Object.entries(t??{}).filter(([,e])=>e!=null&&e!==``);return`#/`+e.map(encodeURIComponent).join(`/`)+(n.length?`?`+new URLSearchParams(n).toString():``)}function By(e=[],t){let n=$(e,t);window.location.hash!==n&&(window.location.hash=n)}function Vy(e){let{path:t,query:n}=Ry(window.location.hash),r=Object.fromEntries(n.entries());for(let[t,n]of Object.entries(e))n==null||n===``?delete r[t]:r[t]=n;By(t,r)}function Hy(e,t){let{query:n}=Ry(window.location.hash);By([e,t],Object.fromEntries(n.entries()))}var Uy=[{id:`overview`,label:`Overview`},{id:`system`,label:`System`},{id:`capabilities`,label:`Capabilities`},{id:`risks`,label:`Risks`},{id:`controls`,label:`Controls`},{id:`residual`,label:`Residual risk`},{id:`review`,label:`Sign-off and review`}];function Wy(){return(0,w.jsxs)(`a`,{className:`brand`,href:$(),children:[(0,w.jsx)(`span`,{className:`brand-mark`,children:(0,w.jsx)(Fi,{size:17,"aria-hidden":`true`})}),`ARCvisor`]})}function Gy({open:e,onOpenChange:t}){let n=Q(e=>e.me),r=Q(e=>e.setMe),[i,a]=(0,_.useState)(n.name),[o,s]=(0,_.useState)(n.role);return(0,w.jsx)(Er,{open:e,onOpenChange:t,children:(0,w.jsxs)(Ar,{children:[(0,w.jsx)(Mr,{className:`overlay`}),(0,w.jsxs)(Ir,{className:`dialog`,children:[(0,w.jsx)(Br,{asChild:!0,children:(0,w.jsx)(`h2`,{children:`Your name and role`})}),(0,w.jsx)(Vr,{className:`muted small`,children:`Shown with your comments and your review verdict. Kept in this browser, not in the file.`}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`me-name`,children:`Name`}),(0,w.jsx)(`input`,{id:`me-name`,className:`input`,value:i,onChange:e=>a(e.target.value)})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`me-role`,children:`Role`}),(0,w.jsx)(`input`,{id:`me-role`,className:`input`,value:o,onChange:e=>s(e.target.value),placeholder:`e.g. AI governance lead`})]}),(0,w.jsxs)(`div`,{className:`row`,style:{justifyContent:`flex-end`},children:[(0,w.jsx)(Ur,{asChild:!0,children:(0,w.jsx)(`button`,{className:`btn`,type:`button`,children:`Cancel`})}),(0,w.jsx)(`button`,{className:`btn btn-primary`,type:`button`,onClick:()=>{r({name:i.trim(),role:o.trim()}),t(!1)},children:`Save`})]})]})]})})}function Ky(){let e=xy(),t=Q(e=>e.mode),n=Q(e=>e.setMode),r=Q(e=>e.unsaved),i=Q(e=>e.markSaved),a=Q(e=>e.me),[o,s]=(0,_.useState)(!1),c=!!e.signoff.signedAt;return(0,w.jsxs)(`header`,{className:`topbar`,children:[(0,w.jsx)(Wy,{}),(0,w.jsx)(`span`,{className:`topbar-sep`,"aria-hidden":`true`}),(0,w.jsxs)(`div`,{className:`topbar-doc`,children:[(0,w.jsx)(`span`,{className:`topbar-name`,children:e.system.name||`Untitled system`}),(0,w.jsxs)(`span`,{className:c?`chip chip-green`:`chip`,children:[`Revision `,e.revision,` · `,c?`signed`:`draft`]}),(0,w.jsxs)(`span`,{className:`chip mono`,children:[`register `,Z.version.version]})]}),(0,w.jsxs)(`div`,{className:`seg`,role:`group`,"aria-label":`Mode`,children:[(0,w.jsx)(`button`,{type:`button`,"aria-pressed":t===`assess`,onClick:()=>n(`assess`),children:`Assess`}),(0,w.jsx)(`button`,{type:`button`,"aria-pressed":t===`review`,onClick:()=>n(`review`),children:`Review`})]}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsxs)(`button`,{className:`btn btn-quiet btn-sm`,type:`button`,onClick:()=>s(!0),"aria-label":`Your name and role`,children:[(0,w.jsx)(Gi,{size:16,"aria-hidden":`true`}),a.name||`Set your name`]}),(0,w.jsxs)(`button`,{className:`btn`,type:`button`,onClick:()=>Oy(Z,e),children:[(0,w.jsx)(Di,{size:16,"aria-hidden":`true`}),`Export report`]}),(0,w.jsxs)(`button`,{className:`btn btn-primary`,type:`button`,onClick:()=>{Dy(e),i()},children:[(0,w.jsx)(Ci,{size:16,"aria-hidden":`true`}),`Save file`]}),r&&(0,w.jsx)(`span`,{className:`small muted`,role:`status`,children:`Unsaved changes`})]}),(0,w.jsx)(Gy,{open:o,onOpenChange:s})]})}function qy({page:e}){let t=xy(),n=Cy(),r=Q(e=>e.mode),i=Q(e=>e.me),a=(e,t)=>e.total===0?{text:``,cls:`count`}:e.done>=e.total?{text:`Done`,cls:`count count-ok`}:{text:`${e.total-e.done} ${t}`,cls:`count count-warn`},o={overview:{text:``,cls:`count`},system:a(n.progress.system,`to fill`),capabilities:a(n.progress.capabilities,`to decide`),risks:a(n.progress.risks,`to score`),controls:a(n.progress.controls,`to do`),residual:a(n.progress.residual,`to do`),review:n.signed?{text:`Signed`,cls:`count count-ok`}:n.blockers.length?{text:`${n.blockers.length} to clear`,cls:`count`}:{text:`Ready`,cls:`count count-ok`}};return(0,w.jsxs)(`aside`,{className:`sidebar`,children:[(0,w.jsx)(`nav`,{className:`nav`,"aria-label":`Assessment`,children:Uy.map(t=>(0,w.jsxs)(`a`,{href:$([t.id]),"aria-current":e===t.id?`page`:void 0,children:[(0,w.jsx)(`span`,{children:t.label}),(0,w.jsx)(`span`,{className:o[t.id].cls,children:o[t.id].text})]},t.id))}),r===`review`?(0,w.jsxs)(`section`,{className:`side-card side-card-review`,"aria-label":`Review mode`,children:[(0,w.jsx)(`span`,{className:`eyebrow`,style:{color:`var(--accent-text)`},children:`Review mode`}),(0,w.jsxs)(`span`,{children:[`Reviewing as `,(0,w.jsx)(`strong`,{children:i.name||`someone without a name yet`}),i.role?`, ${i.role}`:``]}),(0,w.jsx)(`span`,{className:`muted`,children:`Your comments and verdict are saved in the assessment file.`})]}):t.code?(0,w.jsxs)(`section`,{className:`side-card`,"aria-label":`Source code`,children:[(0,w.jsx)(`span`,{className:`eyebrow`,children:`Source`}),(0,w.jsx)(`span`,{className:`mono`,style:{fontSize:12,overflowWrap:`anywhere`},children:Fy(t.code.url)}),(t.code.branch||t.code.commit)&&(0,w.jsxs)(`span`,{className:`row muted`,style:{gap:6},children:[(0,w.jsx)(ki,{size:14,"aria-hidden":`true`}),(0,w.jsxs)(`span`,{className:`mono`,style:{fontSize:12},children:[t.code.branch,t.code.commit?` @ ${t.code.commit}`:``]})]}),t.code.readAt&&(0,w.jsxs)(`span`,{className:`muted`,children:[`Read`,t.ai.source?` by the ${t.ai.source}`:``,` on `,My(t.code.readAt)]}),(0,w.jsx)(`span`,{className:`muted`,children:`To check again, run the ARC skill in the repository and open the new file.`})]}):null]})}function Jy({page:e,children:t}){return(0,w.jsxs)(`div`,{className:`app`,children:[(0,w.jsx)(Ky,{}),(0,w.jsxs)(`div`,{className:`body`,children:[(0,w.jsx)(qy,{page:e}),(0,w.jsx)(`main`,{className:`main`,id:`main`,children:t})]})]})}var Yy=(e,t)=>`${e}.${t}`;function Xy(e,t,n){switch(t){case`system`:return e.ai.system[n];case`cap`:return e.ai.caps[n];case`component`:return e.ai.components[n];case`risk`:return e.ai.risks[n];case`control`:return e.ai.controls[n];case`residual`:return e.ai.residual[n]}}var Zy=(e,t,n)=>e.prov[Yy(t,n)],Qy=(e,t,n)=>Xy(e,t,n)!==void 0&&Zy(e,t,n)===void 0,$y=e=>Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0&&e!==``));function eb(e,t,n,r=`confirmed`){if(t===`system`){let t=e.ai.system[n];t!==void 0&&(e.system[n]=t)}else if(t===`cap`){let t=e.ai.caps[n];t&&(e.caps[n]={...e.caps[n],...$y({present:t.present,providedBy:t.providedBy,approval:t.approval,reason:t.reason,evidence:t.evidence,authority:t.authority,irreversible:t.irreversible,external:t.external})})}else if(t===`component`){let t=e.ai.components[n];t&&(e.components[n]={...e.components[n],...$y({present:t.present,reason:t.reason,evidence:t.evidence})})}else if(t===`risk`){let t=e.ai.risks[n];t&&(e.risks[n]={...e.risks[n],...$y({context:t.context,impactReason:t.impactReason,likelihoodReason:t.likelihoodReason}),impact:t.impact??null,likelihood:t.likelihood??null})}else if(t===`control`){let t=e.ai.controls[n];t&&(e.controls[n]={...e.controls[n],...$y({how:t.how,evidence:t.evidence,proposal:t.proposal})})}else{let t=e.ai.residual[n];t&&(e.residual[n]={...e.residual[n],...$y({scenario:t.scenario,actions:t.actions}),impact:t.impact??null,likelihood:t.likelihood??null})}e.prov[Yy(t,n)]=r}function tb(e,t,n){e.prov[Yy(t,n)]=`dismissed`}function nb(e,t,n){let r=Yy(t,n),i=e.prov[r];(i===`ai`||i===`confirmed`||i===void 0&&Xy(e,t,n)!==void 0)&&(e.prov[r]=`edited`)}var rb={confirmed:`accepted`,edited:`accepted and changed`,dismissed:`dismissed`,ai:`written by the AI, not yet confirmed`};function ib({kind:e,id:t,title:n,children:r,onAccept:i,onEdit:a,onDismiss:o,disabled:s,summary:c}){let l=xy(),u=Qy(l,e,t),d=Zy(l,e,t),f=l.ai.source??`AI`;return u?(0,w.jsxs)(`section`,{className:`suggest`,"aria-label":n,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsxs)(`h3`,{children:[(0,w.jsx)(Li,{size:16,"aria-hidden":`true`}),n,(0,w.jsxs)(`span`,{className:`small muted`,style:{fontWeight:400},children:[f,l.code?.commit?(0,w.jsxs)(w.Fragment,{children:[`, from code at `,(0,w.jsx)(`span`,{className:`mono`,children:l.code.commit})]}):``,l.ai.at?`, ${My(l.ai.at)}`:``]})]}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`button`,{className:`btn btn-sm`,type:`button`,onClick:o,disabled:s,children:`Dismiss`}),a&&(0,w.jsx)(`button`,{className:`btn btn-sm`,type:`button`,onClick:a,disabled:s,children:`Edit`}),(0,w.jsx)(`button`,{className:`btn btn-sm btn-ai`,type:`button`,onClick:i,disabled:s,children:`Accept`})]})]}),r]}):d?(0,w.jsxs)(`p`,{className:`decided`,children:[(0,w.jsx)(Li,{size:14,"aria-hidden":`true`}),(0,w.jsxs)(`span`,{children:[f,` suggested`,c?(0,w.jsxs)(w.Fragment,{children:[`: `,c]}):``,`. `,rb[d]?`Suggestion ${rb[d]}.`:``]})]}):null}function ab({files:e}){return e?.length?(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`span`,{className:`label`,style:{marginRight:4},children:`Evidence`}),e.map(e=>(0,w.jsx)(`span`,{className:`chip chip-line mono`,children:e},e))]}):null}function ob({title:e,lede:t,children:n}){return(0,w.jsxs)(`div`,{className:`page-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h1`,{children:e}),t&&(0,w.jsx)(`p`,{children:t})]}),n]})}var sb=({level:e,long:t})=>(0,w.jsx)(`span`,{className:e===0?`chip chip-l0`:`chip`,children:t?mv[e]:`L${e}`}),cb={found:`chip-green`,partial:`chip-amber`,missing:`chip-red`,offcode:``,nofeature:``},lb={found:`Found`,partial:`Partly`,missing:`Not found`,offcode:`Outside the code`,nofeature:`Nothing to apply to`},ub=({verdict:e,long:t})=>(0,w.jsx)(`span`,{className:`chip ${cb[e]}`,children:t?bv[e]:lb[e]});function db({state:e,impact:t,likelihood:n}){return e===`unscored`?(0,w.jsx)(`span`,{className:`score unscored`,children:`Unscored`}):(0,w.jsxs)(`span`,{className:`score ${e}`,title:`Impact ${t}, likelihood ${n}`,children:[t,` · `,n]})}function fb({id:e,kind:t,value:n,onChange:r,disabled:i}){let a=t===`impact`?_v:vv;return(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:e,children:t===`impact`?`Impact`:`Likelihood`}),(0,w.jsxs)(`select`,{id:e,className:`select`,value:n??``,disabled:i,onChange:e=>r(e.target.value?Number(e.target.value):null),children:[(0,w.jsx)(`option`,{value:``,children:`Choose a score`}),[5,4,3,2,1].map(e=>(0,w.jsxs)(`option`,{value:e,children:[e,` · `,a[e][0]]},e))]}),n?(0,w.jsx)(`span`,{className:`small muted`,children:a[n][1]}):null]})}function pb({children:e}){return(0,w.jsx)(`div`,{className:`empty`,children:e})}function mb({ids:e,current:t,onGo:n,noun:r}){let i=e.indexOf(t);return i<0?null:(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsxs)(`span`,{className:`small muted`,children:[i+1,` of `,e.length]}),(0,w.jsx)(`button`,{className:`btn btn-icon`,type:`button`,"aria-label":`Previous ${r}`,disabled:i===0,onClick:()=>n(e[i-1]),children:`‹`}),(0,w.jsx)(`button`,{className:`btn btn-icon`,type:`button`,"aria-label":`Next ${r}`,disabled:i===e.length-1,onClick:()=>n(e[i+1]),children:`›`})]})}function hb(e,t,n){return r=>{if(r.key!==`ArrowDown`&&r.key!==`ArrowUp`)return;let i=t?e.indexOf(t):-1,a=e[Math.min(e.length-1,Math.max(0,i+(r.key===`ArrowDown`?1:-1)))];a&&(r.preventDefault(),n(a))}}var gb=[[`yes`,`Present`],[`unsure`,`Unsure`],[`no`,`Absent`]],_b=[[``,`Not stated`],[`always`,`Always`],[`some`,`For some actions`],[`never`,`Never`]],vb={present:`chip-red`,possible:`chip-amber`,"not present":`chip-green`};function yb(e){let t=Iv(Z,e);return{risks:t.length,controls:Hv(Z,e,t).length}}function bb({label:e,value:t,disabled:n,onPick:r}){return(0,w.jsx)(`div`,{className:`seg`,role:`radiogroup`,"aria-label":e,children:gb.map(([e,i])=>(0,w.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":t===e,disabled:n,onClick:()=>r(e),children:i},e))})}function xb(){let e=xy(),t=Cy(),n=Q(e=>e.edit),[r,i]=(0,_.useState)(null),a=Object.keys(Z.capabilities),o=Array.from(new Set(a.map(e=>Z.capabilities[e].category))),s=Zc(Z),c=t=>a.filter(n=>e.caps[n]?.present===t).length,l=(t,r,a)=>{let o=yb(e),s=structuredClone(e);r(s);let c=yb(s),l=e=>e>0?`+${e}`:`${e}`;i(c.risks!==o.risks||c.controls!==o.controls?`${t}: ${l(c.risks-o.risks)} risks, ${l(c.controls-o.controls)} controls`:`${t}: no change to the risks or controls`),n(e=>{r(e),a(e)})},u=(e,t)=>l(e,n=>{n.caps[e]={...n.caps[e],...t}},t=>nb(t,`cap`,e)),d=t.implied.filter(e=>e.capability!==`any`),f=t.implied.filter(e=>e.capability===`any`);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`Capabilities and components`,lede:`Capabilities belong to the whole system: if any agent has one, the system has it. Include read-only functions. Unsure counts as present until you decide. For each capability, say how far it acts on its own; unstated context is taken as the most cautious.`}),(0,w.jsxs)(`section`,{className:`panel spread`,style:{padding:`12px 16px`},"aria-live":`polite`,children:[(0,w.jsxs)(`div`,{className:`row`,style:{gap:`6px 18px`},children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{className:`num`,children:c(`yes`)}),` present`]}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{className:`num`,children:c(`unsure`)}),` unsure`]}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{className:`num`,children:c(`no`)}),` absent`]}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{className:`num`,children:a.filter(t=>!e.caps[t]?.present).length}),` undecided`]})]}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:2,alignItems:`flex-end`},children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{className:`num`,children:t.risks.length}),` risks and `,(0,w.jsx)(`strong`,{className:`num`,children:t.scope.length}),` controls apply`,t.app.below.length?(0,w.jsxs)(w.Fragment,{children:[`; `,(0,w.jsx)(`strong`,{className:`num`,children:t.app.below.length}),` left out at the authority stated`]}):``]}),r&&(0,w.jsxs)(`span`,{className:`small`,style:{color:`var(--accent-text)`,fontWeight:500},children:[`Last change, `,r]})]})]}),d.length>0&&(0,w.jsx)(`section`,{className:`banner banner-warn`,"aria-label":`Implied capabilities`,style:{alignItems:`flex-start`},children:(0,w.jsxs)(`div`,{className:`stack`,style:{gap:6,flex:1},children:[(0,w.jsxs)(`strong`,{children:[d.length,` `,d.length===1?`capability is`:`capabilities are`,` implied by the ones marked present`]}),d.map(t=>(0,w.jsxs)(`p`,{className:`small`,children:[(0,w.jsxs)(`a`,{href:`#cap-${t.capability}`,children:[t.capability,` `,Qc(Z,t.capability)]}),`, from `,t.from,` (`,t.mark,`): `,t.note,e.caps[t.capability]?.present===`no`?e.caps[t.capability]?.reason?` Marked absent, with a reason.`:` Marked absent: record why it does not apply.`:``]},`${t.from}${t.capability}`))]})}),f.length>0&&(0,w.jsx)(`p`,{className:`small muted`,children:f[0].note}),o.map(r=>(0,w.jsxs)(`section`,{"aria-labelledby":`cat-${r}`,className:`stack`,style:{gap:12},children:[(0,w.jsx)(`h2`,{id:`cat-${r}`,style:{fontSize:16},children:r}),(0,w.jsx)(`div`,{className:`caps`,children:a.filter(e=>Z.capabilities[e].category===r).map(r=>{let i=Z.capabilities[r],a=e.caps[r]??{},o=e.ai.caps[r],s=a.present===`yes`||a.present===`unsure`,c=t.app.profile[r],f=Object.keys(Z.risks).filter(e=>!Z.risks[e].superseded_by&&wv(Z,Z.risks[e]).includes(r)),p=o?gb.find(([e])=>e===o.present)[1].toLowerCase():``;return(0,w.jsxs)(`article`,{id:`cap-${r}`,className:`cap is-${a.present??`none`}`,"aria-labelledby":`h-${r}`,children:[(0,w.jsxs)(`div`,{className:`stack`,style:{gap:2},children:[(0,w.jsx)(`span`,{className:`mono small muted`,children:r}),(0,w.jsx)(`h3`,{id:`h-${r}`,children:i.name})]}),(0,w.jsx)(bb,{label:`Is ${i.name} present?`,value:a.present,disabled:t.signed,onPick:e=>u(r,{present:e})}),o&&(0,w.jsxs)(ib,{kind:`cap`,id:r,title:`Suggested: ${p}${o.authority?`, ${hv[o.authority].toLowerCase()}`:``}`,disabled:t.signed,summary:`${p}${o.authority?` at ${hv[o.authority].toLowerCase()}`:``}`,onAccept:()=>l(r,e=>eb(e,`cap`,r),()=>void 0),onDismiss:()=>n(e=>tb(e,`cap`,r)),children:[(0,w.jsx)(`p`,{style:{fontSize:14},children:o.reason}),(0,w.jsx)(ab,{files:o.evidence})]}),a.present===`no`&&(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsxs)(`label`,{className:`label`,htmlFor:`why-${r}`,children:[`Why it is absent `,d.some(e=>e.capability===r)&&(0,w.jsx)(`span`,{style:{color:`var(--amber)`},children:`(needed: another capability implies it)`})]}),(0,w.jsx)(`input`,{id:`why-${r}`,className:`input`,value:a.reason??``,disabled:t.signed,onChange:e=>n(t=>{t.caps[r]={...t.caps[r],reason:e.target.value}})})]}),e.code?.caps[r]&&!(o&&e.prov[`cap.${r}`]===void 0)&&(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`span`,{className:`label`,children:`In the code`}),e.code.caps[r].map(e=>(0,w.jsx)(`span`,{className:`chip chip-line mono`,children:e},e))]}),s&&(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10},children:[i.authority?.length?(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`au-${r}`,children:`Authority: how far it acts on its own`}),(0,w.jsxs)(`select`,{id:`au-${r}`,className:`select`,value:a.authority??``,disabled:t.signed,onChange:e=>u(r,{authority:e.target.value||void 0}),children:[(0,w.jsxs)(`option`,{value:``,children:[`Not stated (taken as `,hv[i.authority[i.authority.length-1]].toLowerCase(),`)`]}),i.authority.map(e=>(0,w.jsx)(`option`,{value:e,children:hv[e]},e))]})]}):null,(i.irreversible===`ask`||i.external===`ask`)&&(0,w.jsxs)(`div`,{className:`stack`,style:{gap:6},children:[i.irreversible===`ask`&&c?.authority!==`read`&&(0,w.jsxs)(`label`,{className:`row small`,style:{flexWrap:`nowrap`,alignItems:`flex-start`},children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:a.irreversible===!1,disabled:t.signed,onChange:e=>u(r,{irreversible:!e.target.checked&&void 0})}),(0,w.jsxs)(`span`,{children:[`Its effects can be undone `,(0,w.jsx)(`span`,{className:`muted`,children:`(unstated: taken as irreversible)`})]})]}),i.external===`ask`&&(0,w.jsxs)(`label`,{className:`row small`,style:{flexWrap:`nowrap`,alignItems:`flex-start`},children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:a.external===!1,disabled:t.signed,onChange:e=>u(r,{external:!e.target.checked&&void 0})}),(0,w.jsxs)(`span`,{children:[`Its effects stay inside the organisation `,(0,w.jsx)(`span`,{className:`muted`,children:`(unstated: taken as external)`})]})]})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`pb-${r}`,children:`Provided by`}),(0,w.jsx)(`input`,{id:`pb-${r}`,className:`input`,value:a.providedBy??``,placeholder:`Which agent or tool`,disabled:t.signed,onChange:e=>n(t=>{t.caps[r]={...t.caps[r],providedBy:e.target.value}})})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`ap-${r}`,children:`A person approves before it acts`}),(0,w.jsx)(`select`,{id:`ap-${r}`,className:`select`,value:a.approval??``,disabled:t.signed,onChange:e=>n(t=>{t.caps[r]={...t.caps[r],approval:e.target.value}}),children:_b.map(([e,t])=>(0,w.jsx)(`option`,{value:e,children:t},e))})]})]}),(0,w.jsxs)(`div`,{className:`row small`,children:[(0,w.jsx)(`span`,{className:`label`,children:`Brings in`}),f.map(e=>{let t=Z.risks[e].element_ids.filter(e=>e!==r&&Xc(Z,e));return(0,w.jsxs)(`a`,{className:`chip chip-line mono`,href:$([`risks`,e]),title:Z.risks[e].statement+(t.length?` (only together with ${t.join(`, `)})`:``),children:[e,t.length?` + ${t.join(`, `)}`:``]},e)}),Object.values(Z.combinations.roles).some(e=>e.capabilities[r])&&(0,w.jsx)(`a`,{className:`chip chip-line`,href:`#combinations`,children:`combination roles`})]}),(0,w.jsxs)(`details`,{className:`small`,children:[(0,w.jsx)(`summary`,{style:{cursor:`pointer`,color:`var(--accent-text)`},children:`Register definition`}),(0,w.jsx)(`p`,{className:`muted`,style:{marginTop:6},children:i.description})]})]},r)})})]},r)),s.length>0&&(0,w.jsxs)(`section`,{id:`components`,"aria-labelledby":`comp-h`,className:`stack`,style:{gap:12},children:[(0,w.jsx)(`h2`,{id:`comp-h`,style:{fontSize:16},children:`Components only some systems have`}),(0,w.jsx)(`div`,{className:`caps`,children:s.map(r=>{let i=Z.components[r]??Z.design[r],a=e.components[r]??{},o=e.ai.components[r],s=Object.keys(Z.risks).filter(e=>!Z.risks[e].superseded_by&&Z.risks[e].element_ids.includes(r));return(0,w.jsxs)(`article`,{id:`comp-${r}`,className:`cap is-${a.present??`none`}`,"aria-labelledby":`h-${r}`,children:[(0,w.jsxs)(`div`,{className:`stack`,style:{gap:2},children:[(0,w.jsx)(`span`,{className:`mono small muted`,children:r}),(0,w.jsx)(`h3`,{id:`h-${r}`,children:i.name}),(0,w.jsxs)(`p`,{className:`small muted`,children:[`Present when: `,i.present_when]})]}),(0,w.jsx)(bb,{label:`Is ${i.name} present?`,value:a.present,disabled:t.signed,onPick:e=>l(r,t=>{t.components[r]={...t.components[r],present:e}},e=>nb(e,`component`,r))}),o&&(0,w.jsxs)(ib,{kind:`component`,id:r,title:`Suggested: ${o.present}`,disabled:t.signed,summary:o.present,onAccept:()=>l(r,e=>eb(e,`component`,r),()=>void 0),onDismiss:()=>n(e=>tb(e,`component`,r)),children:[(0,w.jsx)(`p`,{style:{fontSize:14},children:o.reason}),(0,w.jsx)(ab,{files:o.evidence})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`cr-${r}`,children:`Why`}),(0,w.jsx)(`input`,{id:`cr-${r}`,className:`input`,value:a.reason??``,disabled:t.signed,onChange:e=>n(t=>{t.components[r]={...t.components[r],reason:e.target.value}})})]}),(0,w.jsxs)(`div`,{className:`row small`,children:[(0,w.jsx)(`span`,{className:`label`,children:`Brings in`}),s.map(e=>(0,w.jsx)(`a`,{className:`chip chip-line mono`,href:$([`risks`,e]),title:Z.risks[e].statement,children:e},e))]})]},r)})})]}),(0,w.jsxs)(`section`,{id:`combinations`,"aria-labelledby":`combo-h`,className:`stack`,style:{gap:12},children:[(0,w.jsx)(`h2`,{id:`combo-h`,style:{fontSize:16},children:`Combination rules`}),(0,w.jsx)(`p`,{className:`small muted`,style:{marginTop:-6},children:`Some risks arise only when capabilities come together. A rule that is present or possible brings its risks into scope.`}),t.app.checks.map(e=>(0,w.jsxs)(`article`,{className:`panel panel-pad`,"aria-labelledby":`r-${e.id}`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsx)(`h3`,{id:`r-${e.id}`,style:{fontSize:16},children:e.name}),(0,w.jsx)(`span`,{className:`chip ${vb[e.verdict]}`,children:e.verdict===`present`?`Present`:e.verdict===`possible`?`Possible`:`Not present`})]}),(0,w.jsx)(`p`,{className:`small`,children:e.description}),(0,w.jsx)(`div`,{className:`stack`,style:{gap:8},children:e.roles.map(e=>(0,w.jsxs)(`div`,{className:`stack`,style:{gap:4,padding:`8px 12px`,border:`1px solid var(--line)`,borderRadius:10},children:[(0,w.jsxs)(`span`,{className:`row`,children:[(0,w.jsx)(`strong`,{style:{fontSize:14},children:e.name}),(0,w.jsx)(`span`,{className:`chip ${e.status===`yes`?`chip-red`:e.status===`maybe`?`chip-amber`:``}`,children:e.status===`yes`?`supplied`:e.status===`maybe`?`maybe`:`not supplied`})]}),e.question&&(0,w.jsx)(`span`,{className:`small muted`,children:e.question}),e.suppliers.map(e=>(0,w.jsxs)(`span`,{className:`small`,children:[(0,w.jsx)(`span`,{className:`mono`,children:e.id}),` `,Qc(Z,e.id),` · `,e.mark,e.note?`: ${e.note}`:``]},e.id))]},e.id))}),(0,w.jsx)(`p`,{className:`small`,style:{color:`var(--ink-2)`},children:Mv(e)}),(0,w.jsxs)(`div`,{className:`row small`,children:[e.control&&(0,w.jsx)(`a`,{className:`chip chip-line mono`,href:$([`controls`,e.control]),children:e.control}),e.risks.map(e=>(0,w.jsx)(`a`,{className:`chip chip-line mono`,href:$([`risks`,e]),children:e},e))]})]},e.id))]})]})}var Sb=Object.defineProperty,Cb=(e,t)=>Sb(e,`name`,{value:t,configurable:!0});function wb(e){let t=e+`CollectionProvider`,[n,r]=fe(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=Cb(e=>{let{scope:t,children:n}=e,r=_.useRef(null),a=_.useRef(new Map).current;return(0,w.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})},`CollectionProvider`);o.displayName=t;let s=e+`CollectionSlot`,c=Pe(s),l=_.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=se(t,a(s,n).collectionRef);return(0,w.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=Pe(u),p=_.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=_.useRef(null),s=se(t,o),c=a(u,n);return _.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,w.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return _.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return Cb(m,`useCollection`),[{Provider:o,Slot:l,ItemSlot:p},m,r]}Cb(wb,`createCollection`);var Tb=new WeakMap,Eb=class e extends Map{static{Cb(this,`OrderedDict`)}#e;constructor(e){super(e),this.#e=[...super.keys()],Tb.set(this,!0)}set(e,t){return Tb.get(this)&&!this.has(e)&&this.#e.push(e),super.set(e,t),this}insert(e,t,n){let r=this.has(t),i=r?this.size:this.size+1,a=kb(e),o=a>=0?Math.min(a,i-1):Math.max(i+a,0);if(r?this.#e.indexOf(t)===o:o===this.size)return this.set(t,n),this;let s=this.#e.filter(e=>e!==t);s.splice(o,0,t);let c=s.map(e=>[e,e===t?n:this.get(e)]);this.clear();for(let[e,t]of c)this.set(e,t);return this}with(t,n,r){let i=new e(this);return i.insert(t,n,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,n){let r=this.#e.indexOf(e);if(r===-1)return this;let i=this.#e.indexOf(t),a=i!==-1&&i<r?r-1:r;return this.insert(a,t,n)}after(e){let t=this.#e.indexOf(e);if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)}setAfter(e,t,n){let r=this.#e.indexOf(e);if(r===-1)return this;let i=this.#e.indexOf(t),a=i!==-1&&i<=r?r:r+1;return this.insert(a,t,n)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return t!==void 0&&this.delete(t)}at(e){let t=Db(this.#e,e);if(t!==void 0)return this.get(t)}entryAt(e){let t=Db(this.#e,e);if(t!==void 0)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return Db(this.#e,e)}from(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return r;n++}}findIndex(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return n;n++}return-1}filter(t,n){let r=[],i=0;for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,n){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,n]=e,r=e.length>1;if(!r&&this.size===0)throw TypeError(`Reduce of empty OrderedDict with no initial value`);let i=0,a=n;for(let e of this)a=i===0&&!r?e:Reflect.apply(t,this,[a,e,i,this]),i++;return a}reduceRight(...e){let[t,n]=e,r=e.length>1;if(!r&&this.size===0)throw TypeError(`Reduce of empty OrderedDict with no initial value`);let i=n;for(let e=this.size-1;e>=0;e--){let n=this.entryAt(e);i=e===this.size-1&&!r?n:Reflect.apply(t,this,[i,n,e,this])}return i}sort(e){if(typeof e!=`function`)throw TypeError(`OrderedDict.sort requires a compare function`);let t=[...this.entries()].sort(e);this.clear();for(let[e,n]of t)this.set(e,n);return this}toSorted(t){if(typeof t!=`function`)throw TypeError(`OrderedDict.toSorted requires a compare function`);let n=[...this.entries()].sort(t);return new e(n)}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let n=this.keyAt(e),r=this.get(n);t.set(n,r)}return t}toSpliced(...t){let n=[...this.entries()];return n.splice(...t),new e(n)}slice(t,n){let r=new e;for(let e of this.#e.slice(t,n))r.set(e,this.get(e));return r}every(e,t){let n=0;for(let r of this){if(!Reflect.apply(e,t,[r,n,this]))return!1;n++}return!0}some(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return!0;n++}return!1}};function Db(e,t){if(`at`in Array.prototype)return Array.prototype.at.call(e,t);let n=Ob(e,t);return n===-1?void 0:e[n]}Cb(Db,`at`);function Ob(e,t){let n=e.length,r=kb(t),i=r>=0?r:n+r;return i<0||i>=n?-1:i}Cb(Ob,`toSafeIndex`);function kb(e){return e!==e||e===0?0:Math.trunc(e)}Cb(kb,`toSafeInteger`);function Ab(e){let t=e+`CollectionProvider`,[n,r]=fe(t),[i,a]=n(t);i.displayName=e+`CollectionStableContextProvider`;let[o,s]=n(t);o.displayName=e+`CollectionStatefulContextProvider`;let c=Cb(({state:e,...t})=>e?(0,w.jsx)(u,{...t,state:e}):(0,w.jsx)(l,{...t}),`CollectionProvider`);c.displayName=t;let l=Cb(e=>{let t=v();return(0,w.jsx)(u,{...e,state:t})},`CollectionInit`);l.displayName=e+`CollectionInit`;let u=Cb(e=>{let{scope:t,children:n,state:r}=e,a=_.useRef(null),[s,c]=_.useState(null),l=se(a,c),[u,d]=r,f=_.useRef(new Eb),p=_.useCallback(()=>{let e=f.current;return Nb(e)||e.sort(Pb),e},[]);return _.useEffect(()=>{if(!s)return;let e=Fb(()=>{d(e=>{let t=e.toSorted(Pb);return t.some(([t],n)=>e.keyAt(n)!==t)?t:e})});return e.observe(s,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[s,d]),(0,w.jsx)(i,{scope:t,collectionElementRef:l,collectionElementRefObject:a,getCollection:p,setCollection:d,registryRef:f,children:(0,w.jsx)(o,{scope:t,collectionElement:s,collection:u,children:n})})},`CollectionProviderImpl`);u.displayName=e+`CollectionProviderImpl`;let d=e+`CollectionSlot`,f=Pe(d),p=_.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=se(t,a(d,n).collectionElementRef);return(0,w.jsx)(f,{ref:i,children:r})});p.displayName=d;let m=e+`CollectionItemSlot`,h=Pe(m),g=_.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=_.useRef(null),{setCollection:s,registryRef:c}=a(m,n),l=_.useRef(i);jb(l.current,i)||(l.current=i);let u=l.current,d=se(t,_.useCallback(e=>{let t=c.current;e?t.set(e,{...l.current,element:e}):o.current&&t.delete(o.current)},[c]),o);me(()=>{let e=o.current,t=c.current;e&&t.has(e)&&t.set(e,{...u,element:e})},[u,c]);let f=_.useRef(null);return _.useEffect(()=>{let e=o.current,t=f.current;((t?.element??null)!==e||e&&t?.itemData!==u)&&(f.current=e?{element:e,itemData:u}:null,s(n=>{let r=new Eb(n);return t&&t.element!==e&&r.delete(t.element),e&&r.set(e,{...u,element:e}),r.sort(Pb)}))}),_.useEffect(()=>()=>{let e=f.current;f.current=null,e&&s(t=>{if(!t.has(e.element))return t;let n=new Eb(t);return n.delete(e.element),n})},[s]),(0,w.jsx)(h,{"data-radix-collection-item":``,ref:d,children:r})});g.displayName=m;function v(){return _.useState(new Eb)}Cb(v,`useInitCollection`);function y(t){let{collection:n}=s(e+`CollectionConsumer`,t);return n}Cb(y,`useCollection`);function b(t){let{getCollection:n}=a(e+`CollectionConsumer`,t);return n}return Cb(b,`useGetCollection`),[{Provider:c,Slot:p,ItemSlot:g},{createCollectionScope:r,useCollection:y,useGetCollection:b,useInitCollection:v}]}Cb(Ab,`createCollection`);function jb(e,t){if(e===t)return!0;if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Cb(jb,`shallowEqual`);function Mb(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Cb(Mb,`isElementPreceding`);function Nb(e){let t;for(let n of e.keys()){if(t){let e=t.compareDocumentPosition(n);if(!(e&Node.DOCUMENT_POSITION_DISCONNECTED)&&e&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=n}return!0}Cb(Nb,`isInDocumentOrder`);function Pb(e,t){return!e[1].element||!t[1].element?0:Mb(e[1].element,t[1].element)?-1:1}Cb(Pb,`sortByDocumentPosition`);function Fb(e){return new MutationObserver(t=>{for(let n of t)if(n.type===`childList`){e();return}})}Cb(Fb,`getChildListObserver`);var Ib=Object.defineProperty,Lb=(e,t)=>Ib(e,`name`,{value:t,configurable:!0}),Rb={LTR:`ltr`,RTL:`rtl`},zb=_.createContext(void 0);function Bb(e){let t=_.useContext(zb);return e||t||Rb.LTR}Lb(Bb,`useDirection`);var Vb=Object.defineProperty,Hb=(e,t)=>Vb(e,`name`,{value:t,configurable:!0}),Ub=!1;function Wb(){let[e,t]=_.useState(Ub);return _.useEffect(()=>{Ub||(Ub=!0,t(!0))},[]),e}Hb(Wb,`useIsHydrated`);var Gb=_.useSyncExternalStore;function Kb(){return()=>{}}Hb(Kb,`subscribe`);function qb(){return Gb(Kb,()=>!0,()=>!1)}Hb(qb,`useIsHydratedModern`);var Jb=typeof Gb==`function`?qb:Wb,Yb=Object.defineProperty,Xb=(e,t)=>Yb(e,`name`,{value:t,configurable:!0}),Zb=`rovingFocusGroup.onEntryFocus`,Qb={bubbles:!1,cancelable:!0},$b=`RovingFocusGroup`,[ex,tx,nx]=wb($b),[rx,ix]=fe($b,[nx]),ax={Vertical:`vertical`,Horizontal:`horizontal`},ox={LTR:`ltr`,RTL:`rtl`},[sx,cx]=rx($b),lx=_.forwardRef(Xb(function(e,t){return(0,w.jsx)(ex.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,w.jsx)(ex.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,w.jsx)(ux,{...e,ref:t})})})},`RovingFocusGroup`)),ux=_.forwardRef(Xb(function(e,t){let{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:a,currentTabStopId:o,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...d}=e,f=_.useRef(null),p=se(t,f),m=Bb(a),[h,g]=Ee({prop:o,defaultProp:s??null,onChange:c,caller:$b}),[v,y]=_.useState(!1),b=nt(l),ee=tx(n),te=_.useRef(!1),[ne,S]=_.useState(0);return _.useEffect(()=>{let e=f.current;if(e)return e.addEventListener(Zb,b),()=>e.removeEventListener(Zb,b)},[b]),(0,w.jsx)(sx,{scope:n,orientation:r,dir:m,loop:i,currentTabStopId:h,onItemFocus:_.useCallback(e=>g(e),[g]),onItemShiftTab:_.useCallback(()=>y(!0),[]),onFocusableItemAdd:_.useCallback(()=>S(e=>e+1),[]),onFocusableItemRemove:_.useCallback(()=>S(e=>e-1),[]),children:(0,w.jsx)(Ze.div,{tabIndex:v||ne===0?-1:0,"data-orientation":r,...d,ref:p,style:{outline:`none`,...e.style},onMouseDown:x(e.onMouseDown,()=>{te.current=!0}),onFocus:x(e.onFocus,e=>{let t=!te.current;if(e.target===e.currentTarget&&t&&!v){let t=new CustomEvent(Zb,Qb);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=ee().filter(e=>e.focusable);gx([e.find(e=>e.active),e.find(e=>e.id===h),...e].filter(Boolean).map(e=>e.ref.current),u)}}te.current=!1}),onBlur:x(e.onBlur,()=>y(!1))})})},`RovingFocusGroupImpl`)),dx=`RovingFocusGroupItem`,fx=_.forwardRef(Xb(function(e,t){let{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:a,children:o,...s}=e,c=ye(),l=a||c,u=cx(dx,n),d=u.currentTabStopId===l,f=tx(n),{onFocusableItemAdd:p,onFocusableItemRemove:m,currentTabStopId:h}=u,g=Jb();return me(()=>{if(g&&r)return p(),()=>m()},[g,r,p,m]),_.useEffect(()=>{if(!g&&r)return p(),()=>m()},[g,r,p,m]),(0,w.jsx)(ex.ItemSlot,{scope:n,id:l,focusable:r,active:i,children:(0,w.jsx)(Ze.span,{tabIndex:d?0:-1,"data-orientation":u.orientation,...s,ref:t,onMouseDown:x(e.onMouseDown,e=>{r?u.onItemFocus(l):e.preventDefault()}),onFocus:x(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:x(e.onKeyDown,e=>{if(e.key===`Tab`&&e.shiftKey){u.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=hx(e,u.orientation,u.dir);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=f().filter(e=>e.focusable).map(e=>e.ref.current);if(t===`last`)n.reverse();else if(t===`prev`||t===`next`){t===`prev`&&n.reverse();let r=n.indexOf(e.currentTarget);n=u.loop?_x(n,r+1):n.slice(r+1)}setTimeout(()=>gx(n))}}),children:typeof o==`function`?o({isCurrentTabStop:d,hasTabStop:h!=null}):o})})},`RovingFocusGroupItem`)),px={ArrowLeft:`prev`,ArrowUp:`prev`,ArrowRight:`next`,ArrowDown:`next`,PageUp:`first`,Home:`first`,PageDown:`last`,End:`last`};function mx(e,t){return t===ox.RTL?e===`ArrowLeft`?`ArrowRight`:e===`ArrowRight`?`ArrowLeft`:e:e}Xb(mx,`getDirectionAwareKey`);function hx(e,t,n){let r=mx(e.key,n);if(!(t===ax.Vertical&&[`ArrowLeft`,`ArrowRight`].includes(r))&&!(t===ax.Horizontal&&[`ArrowUp`,`ArrowDown`].includes(r)))return px[r]}Xb(hx,`getFocusIntent`);function gx(e,t=!1){let n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}Xb(gx,`focusFirst`);function _x(e,t){return e.map((n,r)=>e[(t+r)%e.length])}Xb(_x,`wrapArray`);var vx=Object.defineProperty,yx=(e,t)=>vx(e,`name`,{value:t,configurable:!0}),bx={Automatic:`automatic`,Manual:`manual`},xx=`Tabs`,[Sx,Cx]=fe(xx,[ix]),wx=ix(),[Tx,Ex]=Sx(xx),Dx=_.forwardRef(yx(function(e,t){let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o=`horizontal`,dir:s,activationMode:c=bx.Automatic,...l}=e,u=Bb(s),[d,f]=Ee({prop:r,onChange:i,defaultProp:a??``,caller:xx});return(0,w.jsx)(Tx,{scope:n,baseId:ye(),value:d,onValueChange:f,orientation:o,dir:u,activationMode:c,children:(0,w.jsx)(Ze.div,{dir:u,"data-orientation":o,...l,ref:t})})},`Tabs`)),Ox=`TabsList`,kx=_.forwardRef(yx(function(e,t){let{__scopeTabs:n,loop:r=!0,...i}=e,a=Ex(Ox,n),o=wx(n);return(0,w.jsx)(lx,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,w.jsx)(Ze.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})},`TabsList`)),Ax=`TabsTrigger`,jx=_.forwardRef(yx(function(e,t){let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=Ex(Ax,n),s=wx(n),c=Mx(o.baseId,r),l=Nx(o.baseId,r),u=r===o.value;return(0,w.jsx)(fx,{asChild:!0,...s,focusable:!i,active:u,children:(0,w.jsx)(Ze.button,{type:`button`,role:`tab`,"aria-selected":u,"aria-controls":l,"data-state":u?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:c,...a,ref:t,onMouseDown:x(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?(e.currentTarget.focus(),o.onValueChange(r)):e.preventDefault()}),onKeyDown:x(e.onKeyDown,e=>{i||e.target!==e.currentTarget||[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:x(e.onFocus,()=>{let e=o.activationMode!==bx.Manual;!u&&!i&&e&&o.onValueChange(r)})})})},`TabsTrigger`));function Mx(e,t){return`${e}-trigger-${t}`}yx(Mx,`makeTriggerId`);function Nx(e,t){return`${e}-content-${t}`}yx(Nx,`makeContentId`);function Px({e}){let[t,n]=e.highlight??[0,-1];return(0,w.jsxs)(`figure`,{className:`excerpt`,children:[(0,w.jsxs)(`figcaption`,{children:[(0,w.jsx)(`span`,{className:`mono`,children:e.path}),(0,w.jsxs)(`span`,{children:[`lines `,e.start,`–`,e.start+e.lines.length-1]})]}),(0,w.jsx)(`pre`,{children:e.lines.map((r,i)=>{let a=e.start+i;return(0,w.jsxs)(`div`,{className:a>=t&&a<=n?`ln hl`:`ln`,children:[(0,w.jsx)(`span`,{children:a}),(0,w.jsx)(`span`,{children:r})]},a)})})]})}function Fx({check:e}){let t=xy(),n=e.verdict;return(0,w.jsxs)(`section`,{className:`codecheck v-${n}`,"aria-label":`Code check`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsxs)(`h3`,{children:[(0,w.jsx)(Ti,{size:16,"aria-hidden":`true`}),bv[n]]}),t.code?.commit&&(0,w.jsxs)(`span`,{className:`small muted`,children:[`checked at `,(0,w.jsx)(`span`,{className:`mono`,children:t.code.commit}),t.ai.source?` by the ${t.ai.source}`:``]})]}),(0,w.jsx)(`p`,{children:e.note}),e.excerpts?.map((e,t)=>(0,w.jsx)(Px,{e},t)),!e.excerpts?.length&&e.files.length>0&&(0,w.jsx)(`div`,{className:`row`,children:e.files.map(e=>(0,w.jsx)(`span`,{className:`chip chip-line mono`,children:e},e))})]})}function Ix({id:e}){let t=xy(),n=Q(e=>e.edit),r=Q(e=>e.mode),i=Q(e=>e.me),a=Q(e=>e.setMe),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(i.name),u=t.threads[e],d=u?.comments??[],f=r===`review`?`Reviewer`:`Assessor`,p=()=>{let t=(i.name||c).trim();o.trim()&&t&&(i.name||a({...i,name:t}),n(n=>{let r=n.threads[e]??{resolved:!1,comments:[]};r.comments.push({author:t,role:f,at:new Date().toISOString(),text:o.trim()}),r.resolved=!1,n.threads[e]=r},!0),s(``))},m=t=>n(n=>{n.threads[e]&&(n.threads[e].resolved=t)},!0);return(0,w.jsxs)(`section`,{className:`thread`,"aria-labelledby":`th-${e}`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsxs)(`h3`,{id:`th-${e}`,children:[`Comments `,d.length>0&&(0,w.jsx)(`span`,{className:`muted`,style:{fontWeight:400},children:d.length})]}),u?.resolved&&(0,w.jsx)(`span`,{className:`chip chip-green`,children:`Resolved`})]}),d.map((e,t)=>(0,w.jsxs)(`div`,{className:`comment`,children:[(0,w.jsx)(`span`,{className:e.role===`Reviewer`?`avatar reviewer`:`avatar`,"aria-hidden":`true`,children:Py(e.author)}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:2,flex:1,minWidth:0},children:[(0,w.jsxs)(`span`,{className:`small`,children:[(0,w.jsx)(`strong`,{children:e.author}),` `,(0,w.jsxs)(`span`,{className:`muted`,children:[`· `,e.role??`Comment`,` · `,Ny(e.at)]})]}),(0,w.jsx)(`p`,{style:{fontSize:14,whiteSpace:`pre-wrap`},children:e.text})]})]},t)),!i.name&&(0,w.jsxs)(`div`,{className:`field`,style:{maxWidth:320},children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`me-${e}`,children:`Your name and role, shown with your comments`}),(0,w.jsx)(`input`,{id:`me-${e}`,className:`input`,value:c,onChange:e=>l(e.target.value),placeholder:`e.g. AI governance lead`})]}),(0,w.jsxs)(`div`,{className:`row`,style:{alignItems:`flex-start`},children:[(0,w.jsx)(`label`,{className:`sr-only`,htmlFor:`c-${e}`,children:d.length?`Reply`:`Add a comment`}),(0,w.jsx)(`textarea`,{id:`c-${e}`,className:`textarea`,rows:2,style:{flex:`1 1 320px`},value:o,onChange:e=>s(e.target.value),placeholder:d.length?`Reply`:r===`review`?`Comment for the assessor`:`Comment for the reviewer`}),d.length>0&&(0,w.jsx)(`button`,{className:`btn`,type:`button`,onClick:()=>m(!u?.resolved),children:u?.resolved?`Reopen`:`Resolve`}),(0,w.jsx)(`button`,{className:`btn btn-primary`,type:`button`,onClick:p,disabled:!o.trim()||!(i.name||c).trim(),children:d.length?`Reply`:`Comment`})]})]})}var Lx=[[`required`,`Required · Level 0`],[`priority`,`For priority risks · Level 1–2`],[`optional`,`Optional`]],Rx={required:`Each applies because a risk it covers applies, whatever that risk scored. Implement it as stated and describe how.`,priority:`Each covers at least one priority risk. Adopt it, adapt it, or record why not.`,optional:`None of the risks these cover is a priority. Record any you adopt.`};function zx(e,t){let n=[];for(let r of Z.controls[e].level_when??[])for(let[e,i]of Object.entries(t))r.capabilities&&!r.capabilities.includes(e)||r.authority&&(!i.authority||Lc(i.authority)<Lc(r.authority))||[`irreversible`,`external`].some(e=>e in r&&i[e]!==r[e])||n.push(`${e} ${Qc(Z,e)}${i.authority?` ${hv[i.authority].toLowerCase()}`:``}${i.irreversible?`, irreversibly`:``}${i.external?`, outside the organisation`:``}`);return Array.from(new Set(n))}var Bx=[[``,`All`],[`todo`,`To do`],[`gaps`,`Gaps in code`],[`contradicted`,`Contradicted`],[`new`,`New`],[`comments`,`Has comments`]];function Vx({param:e}){let t=xy(),n=Cy(),{query:r}=zy(),[i,a]=(0,_.useState)(``),o=r.get(`tab`),s=o===`required`||o===`priority`||o===`optional`?o:(e?n.scopeById[e]?.group:void 0)??`required`,c=r.get(`f`)??``,l=t.code?.checks??{},u={todo:e=>!Wv(t.controls[e],n.scopeById[e].level),gaps:e=>l[e]?.verdict===`missing`||l[e]?.verdict===`partial`,contradicted:e=>n.contradicted.includes(e),new:e=>!!n.diff?.newControls.includes(e),comments:e=>!!t.threads[e]?.comments.length},d=n.scope.filter(e=>e.group===s).map(e=>e.id),f=d.filter(e=>(!c||u[c]?.(e))&&(!i.trim()||`${e} ${Z.controls[e].statement}`.toLowerCase().includes(i.trim().toLowerCase()))),p=e&&n.scopeById[e]?e:f[0],m=Object.fromEntries(Bx.map(([e])=>[e,e?d.filter(t=>u[e](t)).length:d.length])),h=e=>n.contradicted.includes(e)?`contra`:[`not-adopted`,`waived`].includes(t.controls[e]?.status??``)&&Wv(t.controls[e],n.scopeById[e].level)?`na`:Wv(t.controls[e],n.scopeById[e].level)?`done`:`todo-dot`;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`Controls`,lede:`One entry per control, however many risks it covers. The code check shows what the code supports, and where it disagrees with what was written.`}),(0,w.jsx)(Dx,{value:s,onValueChange:e=>By([`controls`],{tab:e,f:c||null}),children:(0,w.jsx)(kx,{className:`tabs`,"aria-label":`Control groups`,children:Lx.map(([e,t])=>(0,w.jsxs)(jx,{value:e,className:`tab`,children:[t,` `,(0,w.jsx)(`span`,{className:`chip`,children:n.scope.filter(t=>t.group===e).length})]},e))})}),(0,w.jsx)(`p`,{className:`muted small`,style:{marginTop:-8},children:Rx[s]}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsxs)(`div`,{className:`search`,children:[(0,w.jsx)(`label`,{className:`sr-only`,htmlFor:`ctl-search`,children:`Search controls`}),(0,w.jsx)(`input`,{id:`ctl-search`,className:`input`,type:`search`,placeholder:`Search controls`,value:i,onChange:e=>a(e.target.value)}),(0,w.jsx)(Ni,{size:16,"aria-hidden":`true`})]}),Bx.filter(([e])=>e!==`gaps`&&e!==`contradicted`||t.code?.checks).filter(([e])=>e!==`new`||n.diff).map(([e,t])=>(0,w.jsxs)(`button`,{type:`button`,className:`fchip`,"aria-pressed":c===e,onClick:()=>Vy({f:e||null}),children:[t,` `,(0,w.jsx)(`span`,{className:`num`,children:m[e]})]},e))]}),(0,w.jsxs)(`div`,{className:`split`,children:[(0,w.jsxs)(`section`,{className:`list`,"aria-label":`Controls`,onKeyDown:hb(f,p,e=>Hy(`controls`,e)),children:[(0,w.jsxs)(`div`,{className:`list-head`,children:[(0,w.jsxs)(`span`,{children:[f.length,` of `,d.length]}),(0,w.jsxs)(`span`,{className:`row muted`,style:{fontWeight:400,gap:10},children:[(0,w.jsxs)(`span`,{className:`row`,style:{gap:4},children:[(0,w.jsx)(`span`,{className:`dot done`,style:{margin:0}}),`done`]}),n.contradicted.length>0&&(0,w.jsxs)(`span`,{className:`row`,style:{gap:4},children:[(0,w.jsx)(`span`,{className:`dot contra`,style:{margin:0}}),`contradicted`]}),(0,w.jsxs)(`span`,{className:`row`,style:{gap:4},children:[(0,w.jsx)(`span`,{className:`dot todo-dot`,style:{margin:0}}),`to do`]})]})]}),(0,w.jsxs)(`div`,{className:`list-scroll`,children:[f.length===0&&(0,w.jsx)(pb,{children:`No controls match.`}),f.map(e=>{let i=l[e],a=t.controls[e]?.status;return(0,w.jsxs)(`a`,{className:`item`,href:$([`controls`,e],Object.fromEntries(r.entries())),"aria-current":e===p?`true`:void 0,children:[(0,w.jsx)(`span`,{className:`dot ${h(e)}`,"aria-hidden":`true`}),(0,w.jsxs)(`span`,{className:`item-body`,children:[(0,w.jsxs)(`span`,{className:`item-title`,children:[(0,w.jsx)(`span`,{className:`mono small muted`,children:e}),` `,Z.controls[e].statement]}),(0,w.jsxs)(`span`,{className:`item-meta`,children:[i&&(0,w.jsx)(ub,{verdict:i.verdict}),(0,w.jsx)(`span`,{children:n.contradicted.includes(e)?`${a?yv[a]:``}, contradicted`:a?yv[a]:`To do`}),n.diff?.newControls.includes(e)&&(0,w.jsx)(`span`,{className:`chip chip-amber`,children:`New`}),Qy(t,`control`,e)&&(0,w.jsx)(`span`,{className:`chip chip-violet`,children:`AI`}),t.threads[e]?.comments.length?(0,w.jsxs)(`span`,{children:[t.threads[e].comments.length,` comments`]}):null]})]})]},e)})]})]}),p?(0,w.jsx)(Hx,{cid:p,ordered:f.includes(p)?f:[p]},p):(0,w.jsx)(`section`,{className:`detail`,children:(0,w.jsx)(pb,{children:`Choose a control.`})})]})]})}function Hx({cid:e,ordered:t}){let n=xy(),r=Cy(),i=Q(e=>e.edit),a=Q(e=>e.mode),o=Q(e=>e.me),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(!1),d=Z.controls[e],f=r.scopeById[e],p=n.controls[e]??{},m=n.code?.checks?.[e],h=n.ai.controls[e],g=Yv(n,e),v=t=>i(n=>{n.controls[e]={...n.controls[e],...t},nb(n,`control`,e)}),y=d.crosswalks??{},b={csa_addendum:`CSA`,imda_mgf:`IMDA`,owasp_asi:`OWASP`},ee=Uv(f.level),x=f.level===f.baseLevel?[]:zx(e,r.app.profile);return(0,w.jsxs)(`article`,{className:`detail`,"aria-labelledby":`ctl-h`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`span`,{className:`mono small muted`,children:e}),(0,w.jsx)(sb,{level:f.level,long:!0}),f.level!==f.baseLevel&&(0,w.jsxs)(`span`,{className:`chip`,children:[`Level `,f.baseLevel,` in the register`]}),r.diff?.newControls.includes(e)&&(0,w.jsxs)(`span`,{className:`chip chip-amber`,children:[`New in `,r.diff.to]})]}),(0,w.jsx)(mb,{ids:t,current:e,onGo:e=>Hy(`controls`,e),noun:`control`})]}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10},children:[(0,w.jsx)(`h2`,{id:`ctl-h`,children:d.statement}),(0,w.jsxs)(`div`,{className:`row small muted`,children:[(0,w.jsx)(`span`,{children:`Covers`}),f.covers.map(e=>(0,w.jsx)(`a`,{className:f.priorityCovers.includes(e)?`chip chip-accent mono`:`chip mono`,href:$([`risks`,e]),title:Z.risks[e].statement,children:e},e)),Object.entries(y).some(([,e])=>e.length)&&(0,w.jsx)(`span`,{style:{marginLeft:8},children:`Maps to`}),Object.entries(y).flatMap(([e,t])=>t.map(t=>(0,w.jsxs)(`span`,{className:`chip chip-line`,title:Z.crosswalks[e]?.ids[t]?`${Z.crosswalks[e].title}: ${Z.crosswalks[e].ids[t]}`:void 0,children:[b[e]??e,` `,t]},`${e}${t}`)))]})]}),x.length>0&&(0,w.jsxs)(`p`,{className:`small`,style:{marginTop:-8},children:[`Stricter here because `,x.join(`; `),`.`]}),m&&(0,w.jsx)(Fx,{check:m}),g&&(0,w.jsxs)(`section`,{className:`callout callout-red`,"aria-label":`Contradiction`,children:[(0,w.jsx)(Vi,{size:18,"aria-hidden":`true`,style:{color:`var(--red)`,flex:`none`,marginTop:2}}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10,flex:1},children:[(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{children:`The code contradicts this entry.`}),` `,m?.verdict===`missing`?`The entry says it is implemented, but the code check found nothing.`:`What the code does conflicts with what the entry says.`,d.level===0?` A Level 0 control the code contradicts blocks sign-off until it is fixed, or the reviewer accepts the explanation.`:``]}),a===`review`&&(0,w.jsxs)(`div`,{className:`stack`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`why-${e}`,children:`Accept the explanation (for example, the control is enforced outside this repository)`}),(0,w.jsx)(`textarea`,{id:`why-${e}`,className:`textarea`,rows:2,value:s,onChange:e=>c(e.target.value)}),(0,w.jsx)(`div`,{children:(0,w.jsx)(`button`,{className:`btn btn-sm`,type:`button`,disabled:!s.trim(),onClick:()=>i(t=>{t.controls[e]={...t.controls[e],contradictionAccepted:{by:o.name||`Reviewer`,reason:s.trim(),at:new Date().toISOString()}}},!0),children:`Accept the explanation`})})]})]})]}),p.contradictionAccepted&&(0,w.jsxs)(`section`,{className:`callout callout-green`,"aria-label":`Explanation accepted`,children:[(0,w.jsx)(di,{size:18,"aria-hidden":`true`,style:{color:`var(--green)`,flex:`none`,marginTop:2}}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:6,flex:1},children:[(0,w.jsxs)(`p`,{children:[(0,w.jsxs)(`strong`,{children:[p.contradictionAccepted.by,` accepted the explanation`]}),` on `,My(p.contradictionAccepted.at),`: `,p.contradictionAccepted.reason]}),a===`review`&&(0,w.jsx)(`div`,{children:(0,w.jsx)(`button`,{className:`btn btn-sm`,type:`button`,onClick:()=>i(t=>{delete t.controls[e].contradictionAccepted},!0),children:`Withdraw`})})]})]}),h&&(0,w.jsxs)(ib,{kind:`control`,id:e,title:h.proposal&&!h.how?`Suggested change`:`Suggested entry`,disabled:r.signed,summary:h.proposal&&!h.how?`a change to close the gap`:`an entry drafted from the code`,onAccept:()=>i(t=>eb(t,`control`,e)),onEdit:h.how?()=>{i(t=>eb(t,`control`,e,`edited`)),setTimeout(()=>document.getElementById(`how-${e}`)?.focus(),0)}:void 0,onDismiss:()=>i(t=>tb(t,`control`,e)),children:[h.how&&(0,w.jsxs)(`div`,{className:`suggest-box`,children:[(0,w.jsx)(`span`,{className:`label`,children:`How it is implemented`}),(0,w.jsx)(`p`,{children:h.how})]}),h.evidence&&(0,w.jsx)(ab,{files:h.evidence.split(/,\s*/)}),h.proposal&&(0,w.jsxs)(`div`,{className:`stack`,children:[(0,w.jsx)(`p`,{children:h.proposal}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsxs)(`button`,{className:`btn btn-sm`,type:`button`,onClick:async()=>{let t=n.code?` in ${Fy(n.code.url)}`:``,r=`${h?.proposal}\n\nThis closes a gap${t} against ARC control ${e} (${mv[d.level]}): ${d.statement}.`;try{await navigator.clipboard.writeText(r),u(!0),setTimeout(()=>u(!1),2e3)}catch{u(!1)}},children:[(0,w.jsx)(xi,{size:14,"aria-hidden":`true`}),l?`Copied`:`Copy as a prompt for your coding agent`]}),(0,w.jsx)(`span`,{className:`small muted`,children:`Accepting records it as the planned change.`})]})]})]}),(0,w.jsxs)(`section`,{className:`stack`,style:{gap:12},"aria-labelledby":`entry-h`,children:[(0,w.jsx)(`h3`,{id:`entry-h`,children:`Your entry`}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`div`,{className:`seg`,role:`radiogroup`,"aria-label":`Status`,children:ee.map(e=>(0,w.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":p.status===e,disabled:r.signed,onClick:()=>v({status:e}),children:yv[e]},e))}),f.level===0&&(0,w.jsxs)(`span`,{className:`small muted`,style:{flex:`1 1 300px`},children:[`Level 0 applies because `,f.covers.join(` and `),` `,f.covers.length===1?`applies`:`apply`,`, whatever the scores. Implement it as stated; waive it only when the specific thing it concerns is not present in this system, with the evidence.`]})]}),p.status===`waived`?(0,w.jsxs)(`div`,{className:`stack`,style:{gap:12},children:[(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`absent-${e}`,children:`What it concerns that is not present in this system`}),(0,w.jsx)(`textarea`,{id:`absent-${e}`,className:`textarea`,rows:2,value:p.reason??``,disabled:r.signed,placeholder:`For example: the system runs no code the agent generates`,onChange:e=>v({reason:e.target.value})})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`wev-${e}`,children:`Evidence that it is absent`}),(0,w.jsx)(`input`,{id:`wev-${e}`,className:`input`,value:p.evidence??``,disabled:r.signed,placeholder:`The configuration, code search or review that shows it`,onChange:e=>v({evidence:e.target.value})})]}),(0,w.jsx)(`span`,{className:`small muted`,children:`The reviewer sees every Level 0 waiver on the Sign-off and review page.`})]}):p.status===`not-adopted`?(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`reason-${e}`,children:`Why it is not adopted`}),(0,w.jsx)(`textarea`,{id:`reason-${e}`,className:`textarea`,rows:3,value:p.reason??``,disabled:r.signed,placeholder:`What makes it unnecessary or impractical here, and what covers the gap`,onChange:e=>v({reason:e.target.value})}),(0,w.jsx)(`span`,{className:`small muted`,children:`The risks it covers appear under Residual risk.`})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`field${g?` field-bad`:``}`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`how-${e}`,children:`How it is implemented`}),(0,w.jsx)(`textarea`,{id:`how-${e}`,className:`textarea`,rows:3,value:p.how??``,disabled:r.signed,placeholder:`What, where, and with which thresholds`,onChange:e=>v({how:e.target.value})})]}),(0,w.jsxs)(`div`,{className:`grid-2`,children:[(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`ev-${e}`,children:`Evidence`}),(0,w.jsx)(`input`,{id:`ev-${e}`,className:`input mono`,value:p.evidence??``,disabled:r.signed,placeholder:`Config file, test report, log query or review record`,onChange:e=>v({evidence:e.target.value})})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`own-${e}`,children:`Owner`}),(0,w.jsx)(`input`,{id:`own-${e}`,className:`input`,value:p.owner??``,disabled:r.signed,placeholder:`Team or role`,onChange:e=>v({owner:e.target.value})})]})]})]}),(p.proposal||g||m?.verdict===`missing`||m?.verdict===`partial`)&&(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`plan-${e}`,children:`Planned change`}),(0,w.jsx)(`textarea`,{id:`plan-${e}`,className:`textarea`,rows:2,value:p.proposal??``,disabled:r.signed,placeholder:`What the team will change to close the gap`,onChange:e=>v({proposal:e.target.value})})]}),(d.evidence||d.test)&&(0,w.jsxs)(`div`,{className:`stack`,style:{gap:8,padding:`12px 14px`,border:`1px solid var(--line)`,borderRadius:10,background:`var(--panel-2)`},children:[(0,w.jsx)(`span`,{className:`eyebrow`,children:`What to keep, and how to check it`}),d.evidence&&(0,w.jsxs)(`p`,{className:`small`,children:[(0,w.jsx)(`strong`,{children:`Evidence to keep.`}),` `,d.evidence]}),d.test&&(0,w.jsxs)(`p`,{className:`small`,children:[(0,w.jsx)(`strong`,{children:`How to test it.`}),` `,d.test]}),(0,w.jsxs)(`div`,{className:`row small muted`,children:[d.enforcement?.length?(0,w.jsxs)(`span`,{children:[`Enforced in `,d.enforcement.join(` and `)]}):null,d.owner&&(0,w.jsxs)(`span`,{children:[`· Owner: `,d.owner]}),d.phase?.length?(0,w.jsxs)(`span`,{children:[`· Phases: `,d.phase.join(`, `)]}):null]})]}),(0,w.jsxs)(`details`,{className:`small`,children:[(0,w.jsx)(`summary`,{style:{cursor:`pointer`,color:`var(--accent-text)`,fontWeight:500,minHeight:32},children:`Guidance from the register`}),(0,w.jsx)(`p`,{style:{marginTop:8,maxWidth:`76ch`},children:d.recommendations}),d.references.length>0&&(0,w.jsx)(`ul`,{style:{margin:`8px 0 0`,paddingLeft:18,overflowWrap:`anywhere`},children:d.references.map(e=>(0,w.jsx)(`li`,{children:(0,w.jsx)(`a`,{href:e,target:`_blank`,rel:`noreferrer`,children:e})},e))})]})]}),(0,w.jsx)(Ix,{id:e})]})}function Ux({a:e,ids:t,selected:n,onSelect:r}){let i={};for(let n of t){let t=zv(e,n);t.impact&&t.likelihood&&(i[`${t.impact}-${t.likelihood}`]=(i[`${t.impact}-${t.likelihood}`]??0)+1)}let a=gv[e.threshold].test;return(0,w.jsxs)(`div`,{className:`stack`,style:{gap:6},children:[(0,w.jsxs)(`div`,{className:`heat`,role:`group`,"aria-label":`Risks by impact and likelihood`,children:[[5,4,3,2,1].map(e=>[(0,w.jsx)(`span`,{className:`heat-lab`,children:e},`l${e}`),...[1,2,3,4,5].map(t=>{let o=`${e}-${t}`,s=i[o]??0,c=[`heat-cell`,a(e,t)?`pri`:``,s?`has`:``].filter(Boolean).join(` `);return(0,w.jsx)(`button`,{type:`button`,className:c,"aria-pressed":n===o,"aria-label":`Impact ${e}, likelihood ${t}: ${s} ${s===1?`risk`:`risks`}`,onClick:()=>r(n===o?null:o),children:s||``},o)})]),(0,w.jsx)(`span`,{}),[1,2,3,4,5].map(e=>(0,w.jsx)(`span`,{className:`heat-lab`,children:e},`x${e}`))]}),(0,w.jsxs)(`div`,{className:`spread small muted`,children:[(0,w.jsx)(`span`,{children:`Impact ↑`}),(0,w.jsx)(`span`,{children:`Likelihood →`})]})]})}var Wx=[`found`,`partial`,`missing`,`offcode`,`nofeature`],Gx={found:`var(--green-solid)`,partial:`var(--amber-solid)`,missing:`var(--red-solid)`,offcode:`var(--slate-8)`,nofeature:`var(--slate-6)`},Kx={found:`found`,partial:`partly`,missing:`not found`,offcode:`need evidence outside the code`,nofeature:`nothing to apply to`};function qx(e,t){let n=[],r=e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{className:`mono muted`,children:e}),` `,Z.controls[e].statement]});for(let i of t.contradicted.filter(e=>t.scopeById[e]?.level===0)){let t=e.code.checks[i],a=e.controls[i]?.status;n.push({key:i,tone:`red`,icon:(0,w.jsx)(_i,{size:16}),title:r(i),to:$([`controls`,i]),tag:(0,w.jsx)(sb,{level:0}),sub:t.verdict===`missing`?`Marked ${a?yv[a].toLowerCase():`implemented`}, but the code check found nothing. ${t.note}`:`The code contradicts the entry. ${t.note}`})}let i=t.scope.filter(t=>t.group===`required`&&!Wv(e.controls[t.id],0));i.length&&n.push({key:`l0`,tone:`amber`,icon:(0,w.jsx)(Vi,{size:16}),title:`Describe ${i.length} Level 0 ${Sv(i.length,`control`)}`,sub:`They apply whatever the risks score, and cannot be waived.`,to:$([`controls`],{f:`todo`}),tag:(0,w.jsx)(sb,{level:0})});let a=[...Object.keys(Z.capabilities).filter(t=>!e.caps[t]?.present||e.caps[t]?.present===`unsure`),...Zc(Z).filter(t=>!e.components[t]?.present||e.components[t]?.present===`unsure`)];if(a.length){let t=a.length===1?a[0]:null;n.push({key:`caps`,tone:``,icon:(0,w.jsx)(hi,{size:16}),title:t?`Decide ${t} ${Qc(Z,t)}`:`Decide ${a.length} capabilities and components`,sub:t&&(e.caps[t]?.present===`unsure`||e.components[t]?.present===`unsure`)?`Marked unsure, so it counts as present.`:`Undecided ones hold back the list of risks.`,to:$([`capabilities`]),tag:(0,w.jsx)(`span`,{className:`chip`,children:`Capabilities`})})}let o=t.risks.filter(e=>t.state[e]===`unscored`);if(o.length){let t=o.filter(t=>e.ai.risks[t]).length;n.push({key:`risks`,tone:``,icon:(0,w.jsx)(li,{size:16}),title:`Score ${o.length} ${Sv(o.length,`risk`)}`,sub:`${t?`The ${e.ai.source??`AI`} suggested scores for ${t}. `:``}Unscored risks count as priority until then.`,to:$([`risks`],{f:`unscored`}),tag:(0,w.jsx)(`span`,{className:`chip`,children:`Risks`})})}let s=t.progress.system.total-t.progress.system.done;s&&n.push({key:`sys`,tone:``,icon:(0,w.jsx)(yi,{size:16}),title:`Answer ${s} system ${Sv(s,`question`)}`,sub:`Owner, purpose, architecture, autonomy and data classification set the context for every score.`,to:$([`system`]),tag:(0,w.jsx)(`span`,{className:`chip`,children:`System`})});let c=t.scope.filter(t=>t.group===`priority`&&!Wv(e.controls[t.id],t.level));c.length&&n.push({key:`pr`,tone:``,icon:(0,w.jsx)(yi,{size:16}),title:`Complete ${c.length} Level 1–2 ${Sv(c.length,`control`)} for priority risks`,sub:`Adopt, adapt, or record why not.`,to:$([`controls`],{tab:`priority`,f:`todo`}),tag:(0,w.jsx)(`span`,{className:`chip`,children:`Controls`})});let l=t.progress.residual.total-t.progress.residual.done;return l&&n.push({key:`res`,tone:``,icon:(0,w.jsx)(yi,{size:16}),title:`Complete ${l} residual ${Sv(l,`risk`)}`,sub:`What can still go wrong, the strategy, and who accepts it.`,to:$([`residual`]),tag:(0,w.jsx)(`span`,{className:`chip`,children:`Residual risk`})}),t.pending.length&&n.push({key:`ai`,tone:`violet`,icon:(0,w.jsx)(Li,{size:16}),title:`Decide on ${t.pending.length} AI ${Sv(t.pending.length,`suggestion`)}`,sub:`Accept, edit or dismiss each one. Nothing the AI suggested counts until a person decides.`,to:$([`review`]),tag:(0,w.jsx)(`span`,{className:`chip chip-violet`,children:`AI`})}),!n.length&&!t.signed&&n.push({key:`sign`,tone:``,icon:(0,w.jsx)(yi,{size:16}),title:`Review and sign off`,sub:t.blockers.length?t.blockers[0].text:`Everything required is done.`,to:$([`review`]),tag:(0,w.jsx)(`span`,{className:`chip`,children:`Sign-off`})}),n}function Jx(){let e=xy(),t=Cy(),n=qx(e,t),r=e=>t.risks.filter(n=>t.state[n]===e).length,i=t.scope.filter(e=>e.group===`required`),a=i.filter(t=>Wv(e.controls[t.id],0)).length,o=t.contradicted.filter(e=>t.scopeById[e]?.level===0).length,s=e.code?.checks??null,c=s?t.scope.filter(e=>s[e.id]):[],l=Object.fromEntries(Wx.map(e=>[e,c.filter(t=>s[t.id].verdict===e).length])),u=c.filter(e=>[`partial`,`missing`].includes(s[e.id].verdict)),d=u.filter(e=>e.level===0).sort((e,t)=>(s[e.id].verdict===`missing`?0:1)-(s[t.id].verdict===`missing`?0:1)),f=e.history[e.history.length-1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`Overview`,lede:(0,w.jsxs)(w.Fragment,{children:[`Revision `,e.revision,t.signed?`, signed on ${My(e.signoff.signedAt)}`:`, draft`,`.`,f&&!t.signed?` Revision ${f.revision} was signed on ${My(f.signedAt)} against register ${f.register}.`:``]}),children:n[0]&&(0,w.jsxs)(`a`,{className:`btn btn-primary`,href:n[0].to,children:[`Next: `,typeof n[0].title==`string`?n[0].title:n[0].key,(0,w.jsx)(si,{size:16,"aria-hidden":`true`})]})}),t.diff&&(0,w.jsxs)(`section`,{className:`banner banner-info`,"aria-label":`Register update`,children:[(0,w.jsxs)(`p`,{children:[(0,w.jsxs)(`strong`,{children:[`Register `,t.diff.to,` adds `,t.diff.newRisks.length,` `,Sv(t.diff.newRisks.length,`risk`),` and `,t.diff.newControls.length,` `,Sv(t.diff.newControls.length,`control`),` that apply to this system`]}),` since it was assessed against `,t.diff.from,`.`,t.diff.goneRisks.length?` ${t.diff.goneRisks.length} no longer ${t.diff.goneRisks.length===1?`applies`:`apply`}.`:``,` They are marked New throughout.`]}),(0,w.jsx)(`a`,{className:`btn`,href:$([`risks`],{f:`new`}),children:`Show what's new`})]}),(0,w.jsxs)(`section`,{"aria-label":`Summary`,className:`tiles`,children:[(0,w.jsxs)(`a`,{className:`tile`,href:$([`risks`]),children:[(0,w.jsx)(`span`,{className:`small muted`,children:`Risks that apply`}),(0,w.jsx)(`span`,{className:`tile-n`,children:t.risks.length}),(0,w.jsxs)(`span`,{className:`small muted`,children:[r(`priority`),` priority · `,r(`unscored`),` unscored · `,r(`below`),` below`]})]}),(0,w.jsxs)(`a`,{className:`tile`,href:$([`controls`]),children:[(0,w.jsx)(`span`,{className:`small muted`,children:`Level 0 controls described`}),(0,w.jsxs)(`span`,{className:`tile-n`,children:[a,(0,w.jsxs)(`small`,{children:[` / `,i.length]})]}),(0,w.jsx)(`span`,{className:`small`,style:{color:o?`var(--red)`:`var(--ink-2)`,fontWeight:o?500:400},children:o?`${o} contradicted by the code`:s?`none contradicted by the code`:`code not checked`})]}),(0,w.jsxs)(`a`,{className:`tile`,href:$([`controls`],{f:`gaps`}),children:[(0,w.jsx)(`span`,{className:`small muted`,children:`Gaps found in the code`}),(0,w.jsx)(`span`,{className:`tile-n`,children:s?u.length:`–`}),(0,w.jsx)(`span`,{className:`small muted`,children:s?`of ${c.length} controls checked`:`run the ARC skill to check`})]}),(0,w.jsxs)(`a`,{className:`tile`,href:$([`review`]),children:[(0,w.jsx)(`span`,{className:`small muted`,children:`AI suggestions to decide`}),(0,w.jsx)(`span`,{className:`tile-n`,style:{color:t.pending.length?`var(--violet)`:void 0},children:t.pending.length}),(0,w.jsx)(`span`,{className:`small muted`,children:e.ai.source?`from the ${e.ai.source}`:`none waiting`})]}),(0,w.jsxs)(`a`,{className:`tile`,href:$([`review`]),children:[(0,w.jsx)(`span`,{className:`small muted`,children:`Before sign-off`}),(0,w.jsx)(`span`,{className:`tile-n`,children:t.signed?`✓`:t.blockers.length}),(0,w.jsx)(`span`,{className:`small muted`,children:t.signed?`signed`:t.blockers.length?`${Sv(t.blockers.length,`item`)} to clear`:`ready to sign`})]})]}),(0,w.jsxs)(`div`,{className:`cols`,children:[(0,w.jsxs)(`section`,{"aria-labelledby":`todo-h`,className:`panel col-2`,style:{overflow:`hidden`},children:[(0,w.jsxs)(`div`,{className:`panel-head`,children:[(0,w.jsx)(`h2`,{id:`todo-h`,children:`Next to do`}),(0,w.jsx)(`span`,{className:`small muted`,children:`Level 0 first, then whatever blocks sign-off`})]}),n.length===0&&(0,w.jsxs)(`p`,{className:`empty`,children:[`Nothing left to do. `,t.signed?`This revision is signed.`:``]}),n.slice(0,8).map(e=>(0,w.jsxs)(`a`,{className:`todo`,href:e.to,children:[(0,w.jsx)(`span`,{className:`todo-icon ${e.tone}`,"aria-hidden":`true`,children:e.icon}),(0,w.jsxs)(`span`,{className:`todo-body`,children:[(0,w.jsx)(`span`,{className:`todo-title`,children:e.title}),(0,w.jsx)(`span`,{className:`todo-sub`,children:e.sub})]}),e.tag]},e.key))]}),(0,w.jsxs)(`section`,{"aria-labelledby":`posture-h`,className:`panel panel-pad col-1`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsx)(`h2`,{id:`posture-h`,style:{fontSize:16},children:`Risk posture`}),(0,w.jsxs)(`span`,{className:`small muted`,children:[t.risks.length-r(`unscored`),` scored`]})]}),(0,w.jsx)(Ux,{a:e,ids:t.risks,onSelect:e=>By([`risks`],{cell:e})}),(0,w.jsxs)(`p`,{className:`row small muted`,style:{alignItems:`flex-start`,flexWrap:`nowrap`},children:[(0,w.jsx)(`span`,{className:`swatch`,"aria-hidden":`true`}),(0,w.jsxs)(`span`,{children:[`Priority under the `,gv[e.threshold].label,` threshold: `,gv[e.threshold].rule,`.`]})]}),r(`unscored`)>0&&(0,w.jsxs)(`a`,{className:`btn`,href:$([`risks`],{f:`unscored`}),style:{justifyContent:`space-between`},children:[(0,w.jsxs)(`span`,{children:[r(`unscored`),` unscored`]}),(0,w.jsx)(`span`,{className:`chip chip-amber`,children:`count as priority`})]})]})]}),(0,w.jsxs)(`div`,{className:`cols`,children:[(0,w.jsxs)(`section`,{"aria-labelledby":`code-h`,className:`panel panel-pad col-2`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsx)(`h2`,{id:`code-h`,style:{fontSize:16},children:`Code check`}),e.code&&(0,w.jsxs)(`span`,{className:`small muted`,children:[c.length,` controls checked`,e.code.commit?(0,w.jsxs)(w.Fragment,{children:[` at `,(0,w.jsxs)(`span`,{className:`mono`,children:[e.code.branch,` @ `,e.code.commit]})]}):``]})]}),s?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`div`,{className:`bar`,role:`img`,"aria-label":Wx.map(e=>`${l[e]} ${Kx[e]}`).join(`, `),children:Wx.filter(e=>l[e]).map(e=>(0,w.jsx)(`span`,{style:{flex:l[e],background:Gx[e]}},e))}),(0,w.jsx)(`div`,{className:`row small muted`,style:{gap:`8px 20px`},children:Wx.filter(e=>l[e]).map(e=>(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{className:`num`,style:{color:`var(--ink)`},children:l[e]}),` `,Kx[e]]},e))}),d.length>0&&(0,w.jsxs)(`div`,{className:`stack`,style:{gap:0,borderTop:`1px solid var(--slate-3)`},children:[(0,w.jsx)(`span`,{className:`eyebrow`,style:{padding:`12px 0 6px`},children:`Level 0 gaps`}),d.slice(0,4).map(e=>(0,w.jsxs)(`a`,{href:$([`controls`,e.id]),className:`row`,style:{padding:`8px 0`,color:`var(--ink)`,textDecoration:`none`},children:[(0,w.jsx)(ub,{verdict:s[e.id].verdict}),(0,w.jsx)(`span`,{className:`mono small`,children:e.id}),(0,w.jsx)(`span`,{style:{flex:`1 1 240px`},children:Z.controls[e.id].statement}),s[e.id].files[0]&&(0,w.jsx)(`span`,{className:`mono small muted`,children:s[e.id].files[0]})]},e.id)),(0,w.jsxs)(`a`,{href:$([`controls`],{f:`gaps`}),style:{paddingTop:8,fontSize:14,fontWeight:500},children:[`All `,u.length,` gaps in the code`]})]})]}):(0,w.jsx)(`p`,{className:`muted`,children:`The code hasn't been checked. Run the ARC skill in the system's repository, then open the file it writes, to see which controls the code supports.`})]}),(0,w.jsxs)(`section`,{"aria-labelledby":`rev-h`,className:`panel panel-pad col-1`,children:[(0,w.jsx)(`h2`,{id:`rev-h`,style:{fontSize:16},children:`Revisions`}),(0,w.jsxs)(`ol`,{className:`stack`,style:{listStyle:`none`,margin:0,padding:0,gap:14},children:[!t.signed&&(0,w.jsxs)(`li`,{className:`row`,style:{alignItems:`flex-start`,flexWrap:`nowrap`},children:[(0,w.jsx)(`span`,{"aria-hidden":`true`,style:{flex:`none`,width:12,height:12,marginTop:5,borderRadius:`50%`,border:`2px solid var(--accent)`}}),(0,w.jsxs)(`span`,{className:`stack`,style:{gap:2},children:[(0,w.jsxs)(`strong`,{children:[`Revision `,e.revision,` · draft`]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[`Register `,Z.version.version,e.code?.commit?(0,w.jsxs)(w.Fragment,{children:[` · code at `,(0,w.jsx)(`span`,{className:`mono`,children:e.code.commit})]}):``]})]})]}),[...e.history].reverse().map(e=>(0,w.jsxs)(`li`,{className:`row`,style:{alignItems:`flex-start`,flexWrap:`nowrap`},children:[(0,w.jsx)(`span`,{"aria-hidden":`true`,style:{flex:`none`,width:12,height:12,marginTop:5,borderRadius:`50%`,background:`var(--green-solid)`}}),(0,w.jsxs)(`span`,{className:`stack`,style:{gap:2},children:[(0,w.jsxs)(`strong`,{children:[`Revision `,e.revision,` · signed`]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[My(e.signedAt),e.decision?` · ${e.decision}`:``,` · register `,e.register]})]})]},e.revision))]}),e.signedCopy&&(0,w.jsxs)(`a`,{className:`btn`,href:$([`review`]),children:[`Compare with revision `,e.signedCopy.revision]})]})]})]})}var Yx=[[`accept`,`Accept`],[`monitor`,`Monitor`],[`mitigate`,`Mitigate`]];function Xx(){let e=xy(),t=Cy(),n=Q(e=>e.edit),r=t.residual.filter(t=>Kv(e.residual[t.rid])).length;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`Residual risk`,lede:`Built from the priority risks and from any Level 1–2 control not adopted. For each, say what can still go wrong with the controls in place, and who accepts it.`}),(0,w.jsxs)(`section`,{className:`panel spread`,style:{padding:`12px 16px`},children:[(0,w.jsxs)(`span`,{children:[(0,w.jsxs)(`strong`,{className:`num`,children:[r,` of `,t.residual.length]}),` have a scenario, a strategy and an owner`]}),(0,w.jsx)(`span`,{className:`small muted`,children:`Escalate any residual Impact 5, any regulatory exposure, and any risk with no strategy.`})]}),t.residual.length===0&&(0,w.jsx)(`div`,{className:`panel`,children:(0,w.jsx)(pb,{children:`Nothing here yet. Priority risks appear here once they are scored.`})}),(0,w.jsx)(`div`,{className:`stack`,style:{gap:12},children:t.residual.map(r=>{let i=e.residual[r.rid]??{},a=e.ai.residual[r.rid],o=e=>n(t=>{t.residual[r.rid]={...t.residual[r.rid],...e},nb(t,`residual`,r.rid)}),s=e=>`${e}-${r.rid}`;return(0,w.jsxs)(`article`,{className:`panel panel-pad`,"aria-labelledby":s(`h`),style:Kv(i)?{borderColor:`var(--green-line)`}:void 0,children:[(0,w.jsxs)(`div`,{className:`stack`,style:{gap:6},children:[(0,w.jsxs)(`h2`,{id:s(`h`),style:{fontSize:16},children:[(0,w.jsx)(`a`,{href:$([`risks`,r.rid]),className:`mono small`,children:r.rid}),` `,Z.risks[r.rid].statement]}),(0,w.jsx)(`div`,{className:`row`,children:r.why.map(e=>(0,w.jsx)(`span`,{className:`chip`,children:e},e))})]}),a&&(0,w.jsxs)(ib,{kind:`residual`,id:r.rid,title:`Suggested residual risk`,disabled:t.signed,summary:`a residual scenario`,onAccept:()=>n(e=>eb(e,`residual`,r.rid)),onDismiss:()=>n(e=>tb(e,`residual`,r.rid)),children:[a.scenario&&(0,w.jsx)(`p`,{children:a.scenario}),a.actions&&(0,w.jsx)(`p`,{className:`small muted`,children:a.actions})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:s(`sc`),children:`What can still go wrong with the controls in place`}),(0,w.jsx)(`textarea`,{id:s(`sc`),className:`textarea`,rows:2,value:i.scenario??``,disabled:t.signed,onChange:e=>o({scenario:e.target.value})})]}),(0,w.jsxs)(`div`,{className:`row`,style:{alignItems:`flex-end`,gap:16},children:[(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`span`,{className:`label`,id:s(`stl`),children:`Strategy`}),(0,w.jsx)(`div`,{className:`seg`,role:`radiogroup`,"aria-labelledby":s(`stl`),children:Yx.map(([e,n])=>(0,w.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":i.strategy===e,disabled:t.signed,onClick:()=>o({strategy:e}),children:n},e))})]}),(0,w.jsx)(`div`,{style:{flex:`1 1 180px`},children:(0,w.jsx)(fb,{id:s(`ri`),kind:`impact`,value:i.impact,disabled:t.signed,onChange:e=>o({impact:e})})}),(0,w.jsx)(`div`,{style:{flex:`1 1 180px`},children:(0,w.jsx)(fb,{id:s(`rl`),kind:`likelihood`,value:i.likelihood,disabled:t.signed,onChange:e=>o({likelihood:e})})})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:s(`ac`),children:`Actions and measurable thresholds`}),(0,w.jsx)(`textarea`,{id:s(`ac`),className:`textarea`,rows:2,value:i.actions??``,disabled:t.signed,placeholder:`For example: alert if more than 10 injection attempts a day; quarterly red team`,onChange:e=>o({actions:e.target.value})})]}),(0,w.jsxs)(`div`,{className:`field`,style:{maxWidth:420},children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:s(`by`),children:`Accepted by (role)`}),(0,w.jsx)(`input`,{id:s(`by`),className:`input`,value:i.acceptedBy??``,disabled:t.signed,onChange:e=>o({acceptedBy:e.target.value})})]}),i.impact===5&&(0,w.jsx)(`p`,{className:`small`,style:{color:`var(--red)`,fontWeight:600},children:`Residual Impact 5: escalate to senior stakeholders.`})]},r.rid)})})]})}var Zx={grantdesk:JSON.parse(`{"pasted":"GrantDesk assistant helps our grant officers process applications for an enterprise development grant. When an officer opens a case, the agent reads the application form and attachments (PDFs, some scanned), checks the company against the business registry API, searches the web for news and the company's own website, and writes an eligibility summary against the scheme criteria into the case notes. It also drafts clarification emails to applicants, which sit in the officer's outbox until the officer sends them. It cannot approve, reject or pay out grants.\\n\\nIt's a single agent on our orchestration framework, calling a hosted LLM through the agency model gateway, with tools exposed by two internal MCP servers (documents and case database). About 40 officers use it and we're piloting it on one scheme. Applications include directors' identity numbers, contact details and company financial statements.","system":{"name":"GrantDesk assistant","owner":"Grants Operations (example agency)","purpose":"Helps about 40 grant officers process applications for an enterprise development grant: reads each application and its attachments, checks the company against the business registry and public web sources, writes an eligibility summary against the scheme criteria, and drafts clarification emails. Officers make every funding decision.","deployment":"Internal tool, piloted in production on one grant scheme. Runs in the agency's government cloud tenancy.","architecture":"Single agent on an orchestration framework, calling a hosted LLM through the agency model gateway. Tools: document reader (PDF and scanned images), business registry API client, web search API, case-management database (read cases, write notes), email drafting into the officer's outbox. The document and database tools are exposed through two internal MCP servers.","autonomy":"Reads files, queries the registry, searches the web and writes case notes without approval. Emails are saved as drafts; an officer reviews and sends each one. It cannot approve, reject or disburse a grant.","dataClassification":"Confidential","pii":"Applicant contact names, emails and phone numbers; directors' identity numbers in supporting documents; company financial statements.","publicFacing":"No","criticality":"High"},"caps":{"CAP-01":{"present":"no","reason":"It runs a fixed workflow set by the developers (read, check, summarise, draft) rather than making its own plans."},"CAP-02":{"present":"no","reason":"Single agent; it does not hand tasks to other agents."},"CAP-03":{"present":"yes","reason":"It chooses between the document reader, registry API, web search and case database for each step.","providedBy":"The agent's tool router","approval":"never"},"CAP-04":{"present":"unsure","lastYear":"yes","reason":"It reads scanned documents and writes summaries and email drafts. The register's definition covers natural-language generation as well as image understanding, so this probably applies. Confirm with your governance team.","providedBy":"Document reader; summary and email drafting","approval":"some"},"CAP-05":{"present":"no","reason":"It drafts emails, but an officer reviews and sends each one. The register defines this capability as sending without prior human review."},"CAP-06":{"present":"no","reason":"It cannot approve, reject or disburse grants, or commit the agency to anything."},"CAP-07":{"present":"yes","reason":"It searches the web for news about applicants and reads their websites.","providedBy":"Web search API tool","approval":"never"},"CAP-08":{"present":"no","reason":"It does not operate a graphical interface."},"CAP-09":{"present":"yes","reason":"It calls the business registry API.","providedBy":"Business registry API client","approval":"never"},"CAP-10":{"present":"no","reason":"No code-execution tool is configured."},"CAP-11":{"present":"yes","reason":"It reads application files and reads and writes case notes in the case-management database.","providedBy":"Document reader; case database (MCP)","approval":"never"},"CAP-12":{"present":"no","reason":"It does not change system settings or infrastructure."}},"risks":{"RISK-001":{"context":"The model comes through the agency gateway from an approved provider, so a poisoned model is unlikely; if it happened, applicant data and summaries would be exposed or skewed.","impact":4,"likelihood":1},"RISK-002":{"context":"The agent could stray from the scheme criteria, for example adding its own view on whether a company deserves funding.","impact":3,"likelihood":3},"RISK-003":{"context":"Eligibility summaries depend on reading financial statements correctly; a misreading could mislead an officer's assessment.","impact":4,"likelihood":3},"RISK-004":{"context":"The two internal MCP servers expose the case database and documents; weak authentication would let other callers read or write case records.","impact":4,"likelihood":2},"RISK-005":{"context":"The case-database tool can write notes on any case, not only the one the officer has open.","impact":3,"likelihood":3},"RISK-006":{"context":"Both MCP servers are built in-house, which lowers the chance of a malicious server, but a compromised one could alter what the agent reads.","impact":4,"likelihood":2},"RISK-007":{"context":"Search and database queries are built from applicant-supplied text such as company names.","impact":3,"likelihood":3},"RISK-008":{"context":"The system prompt describes the scheme criteria loosely, so summaries could differ in what they count as eligible.","impact":3,"likelihood":3},"RISK-009":{"context":"Application text is placed in the prompt next to the instructions; an applicant could word their application to steer the summary.","impact":4,"likelihood":4},"RISK-010":{"context":"The agent reads its own earlier case notes when an officer reopens a case, so a wrong note persists.","impact":3,"likelihood":3},"RISK-011":{"context":"Notes about one company could surface while the agent works on another company's case if retrieval is not scoped to the case.","impact":4,"likelihood":2},"RISK-012":{"context":"Single-agent system; this applies only if more agents are added.","impact":2,"likelihood":1},"RISK-013":{"context":"Single-agent system; there is no channel between agents today.","impact":2,"likelihood":1},"RISK-014":{"context":"Retries between search and summarising could loop on a hard case and use up the model quota.","impact":2,"likelihood":2},"RISK-015":{"context":"The agent's service account can write to the whole case-management database.","impact":4,"likelihood":3},"RISK-016":{"context":"The agent cannot change its own permissions; escalation would need a misconfigured MCP server.","impact":4,"likelihood":2},"RISK-017":{"context":"Officers notice bad summaries one case at a time; nobody watches behaviour across cases.","impact":3,"likelihood":3},"RISK-018":{"context":"If a funding decision is appealed, the agency must show what the agent summarised and from which sources.","impact":4,"likelihood":3},"RISK-023":{"context":"The agent may skip the registry check, or rely on web search where the registry is the authoritative source.","impact":3,"likelihood":3},"RISK-024":{"context":"Internal tool producing formal summaries and emails; little exposure to toxic output.","impact":2,"likelihood":1},"RISK-025":{"context":"Summaries comment on applicants' finances, and could present financial judgements as if they were assessments.","impact":3,"likelihood":2},"RISK-026":{"context":"Outputs are case summaries and formal emails; controversial content is unlikely.","impact":2,"likelihood":1},"RISK-027":{"context":"Directors' identity numbers and contact details from attachments could appear in summaries or email drafts.","impact":4,"likelihood":3},"RISK-028":{"context":"The agent could invent a revenue figure or registry fact in a summary that an officer then relies on.","impact":4,"likelihood":3},"RISK-029":{"context":"The agent summarises applicants' own documents for internal use.","impact":1,"likelihood":1},"RISK-034":{"context":"Web search reaches the applicant's own website, which the applicant controls.","impact":4,"likelihood":3},"RISK-035":{"context":"News and review sites about applicants may be out of date or wrong.","impact":3,"likelihood":3},"RISK-038":{"context":"The registry API is bespoke, with paging and status codes the model may misread.","impact":3,"likelihood":3},"RISK-041":{"context":"The agent can edit case notes and could overwrite an officer's own notes.","impact":3,"likelihood":2},"RISK-042":{"context":"Query volume is small: dozens of cases a day.","impact":2,"likelihood":1},"RISK-043":{"context":"The agent reads confidential financial statements and personal data across all cases.","impact":4,"likelihood":3},"RISK-044":{"context":"Applicants upload the PDFs the agent reads, so hidden instructions in a file are a realistic route.","impact":4,"likelihood":4},"RISK-047":{"context":"The agent reads untrusted applicant files and websites, holds confidential case data, and can send data out through search queries.","impact":5,"likelihood":3},"RISK-048":{"context":"The orchestration framework and the MCP SDK come from public package registries.","impact":4,"likelihood":2},"RISK-049":{"context":"The agent is tested in a staging tenancy that can reach the live registry API and the internet.","impact":3,"likelihood":2},"RISK-050":{"context":"The agent reports which checks it ran, and officers rely on that report rather than on logs.","impact":3,"likelihood":2},"RISK-051":{"context":"Single-agent system; this applies only if more agents are added.","impact":2,"likelihood":1},"RISK-052":{"context":"Officers handle 30 to 50 cases a week and may accept summaries and drafts without opening the sources.","impact":4,"likelihood":4},"RISK-054":{"context":"The framework and both MCP servers were deployed from templates; their defaults have not been reviewed.","impact":4,"likelihood":2}},"controls":{"CTRL-0006":"There is no high-impact action to approve: emails are saved as drafts and an officer sends each one, and the agent has no approve, reject or disburse action.","CTRL-0007":"The model gateway logs every request and response with case ID and officer ID. Logs are kept for two years in the agency SIEM and sampled monthly.","CTRL-0016":"The system prompt says the agent summarises evidence against the scheme criteria, and lists what it must not do: recommend approval or rejection, contact applicants, or change case status.","CTRL-0019":"Application text, attachments and web content are wrapped in tagged blocks, and the system prompt tells the model to treat their contents as data.","CTRL-0047":"The gateway's PII filter masks identity numbers and phone numbers in summaries and email drafts; officers see full values only in the case record.","CTRL-0062":"The gateway's prompt-injection classifier checks extracted PDF text and fetched web pages before they reach the agent; a hit blocks the step and flags the case.","CTRL-0065":"The admin console has a stop control that disables the agent's service account and revokes both MCP tokens. Tested quarterly.","CTRL-0083":"Uploads pass the portal's antivirus scan and the injection classifier before the agent can open them.","CTRL-0089":"Outbound traffic goes through the agency egress proxy, which allows only the registry API, the search API and the model gateway. Search queries go through the search API, never as raw URLs."},"residual":{"RISK-047":{"scenario":"An injected instruction in an applicant's PDF gets past the classifier and makes the agent put case data into a search query to an allowed search API.","actions":"Strip case identifiers from search queries; alert on queries longer than 200 characters; quarterly red-team test with planted documents.","impact":4,"likelihood":2},"RISK-044":{"scenario":"A new injection technique in an uploaded file is not caught by the classifier and skews the eligibility summary.","actions":"Officers see a banner when a file contained instructions; monthly review of flagged cases; update classifier when vendors publish new patterns.","impact":3,"likelihood":2},"RISK-009":{"scenario":"An applicant words their application so the summary overstates eligibility, without any detectable injection.","actions":"Summaries quote the source passage for each criterion; officers must open the source for any criterion marked met.","impact":3,"likelihood":3},"RISK-052":{"scenario":"Under heavy caseloads officers accept summaries without checking sources, so errors reach decisions.","actions":"Track how often officers open sources before deciding; alert the team lead if it drops below 60% in a week.","impact":4,"likelihood":3},"RISK-028":{"scenario":"A fabricated figure in a summary is not caught because it looks plausible.","actions":"Every figure in a summary links to its source page; weekly sample of 10 summaries checked against sources.","impact":4,"likelihood":2}},"lastYear":{"registerVersion":"1.1.0","createdAt":"2025-11-10T02:00:00.000Z","defaultHow":"Covered by the agency AI deployment baseline; the evidence column gives the checklist item.","evidence":"AI deployment baseline checklist for GrantDesk, signed 21 Nov 2025","owner":"GrantDesk product team","residualFallback":"Controls reduce this risk but do not remove it; remaining exposure is watched through the monthly case-quality review.","residualActions":"Monthly sample of 20 cases reviewed by the governance lead.","adapted":{"CTRL-0006":null,"CTRL-0063":"Search is limited to the registry, government domains and three national news sites through the search API's site filter."},"notAdopted":{"CTRL-0012":"Both MCP servers have a single internal client authenticated through the agency identity provider, so per-client consent adds nothing.","CTRL-0020":"A second extraction model would double the cost per case. We rely on delimiters (CTRL-0019) and the injection classifier (CTRL-0062)."},"signoff":{"assessor":"Lead engineer, GrantDesk","reviewer":"AI governance lead, Digital Office","authority":"Director, Grants Operations","decision":"Approve with conditions","conditions":"Re-assess before web search goes beyond the search API, and at each register MINOR version.","nextReview":"November 2026, or when a capability is added","signedAt":"2025-11-28T10:00:00.000Z"}},"repo":{"url":"https://github.com/example-agency/grantdesk-assistant","branch":"main","filesTotal":212,"filesRead":46,"read":["README.md","agent/graph.py","agent/config.yaml","agent/prompts/system.md","agent/prompts/summary.md","agent/guardrails.py","agent/telemetry.py","agent/tools/__init__.py","agent/tools/documents.py","agent/tools/registry_api.py","agent/tools/web_search.py","agent/tools/case_db.py","agent/tools/email_draft.py","gateway/client.py","gateway/config.yaml","mcp/case_server/server.py","mcp/case_server/auth.py","mcp/case_server/models.py","mcp/docs_server/server.py","infra/egress-allowlist.yaml","infra/k8s/deployment.yaml","infra/k8s/serviceaccount.yaml","infra/staging.tf","ops/kill_switch.py",".ci/pipeline.yml","requirements.txt","tests/eval/redteam_cases.yaml","tests/eval/compare_models.py"],"findings":[["Agent","One agent running a fixed graph of four steps (read, check, summarise, draft), stopped after 25 steps.",["agent/graph.py"]],["Model","Calls a hosted model through the agency model gateway; the model is named in the gateway config.",["gateway/client.py","gateway/config.yaml"]],["Tools","Seven tool functions: read_document, query_registry, search_web, fetch_url, read_case, write_case_note, save_email_draft.",["agent/tools/__init__.py"]],["MCP servers","Two servers built in this repository. case_server uses OAuth through the agency identity provider; docs_server accepts a static API key.",["mcp/case_server/auth.py","mcp/docs_server/server.py"]],["Outbound connections","The model gateway, the registry API, the search API, and any applicant website through fetch_url.",["agent/tools/web_search.py","infra/egress-allowlist.yaml"]],["Data","Reads application documents and cases; writes case notes, with soft delete and an audit table.",["mcp/case_server/models.py"]],["Human approval","Emails are saved as drafts. No function sends, approves, rejects or pays.",["agent/tools/email_draft.py"]]],"unknown":["owner","dataClassification","criticality"],"system":{"name":"GrantDesk assistant","purpose":"Assists grant officers with enterprise development grant applications: reads the application documents, checks the business registry and the web, writes an eligibility summary into the case notes, and drafts clarification emails.","deployment":"Kubernetes deployment behind an internal-only ingress. A separate staging environment is defined in Terraform.","architecture":"Single agent: a fixed graph of read, check, summarise and draft steps, limited to 25 steps. Model calls go through the agency model gateway. Seven tool functions, two of them backed by in-house MCP servers (documents and case database).","autonomy":"Every tool runs without approval. save_email_draft writes to the officer's drafts folder; the code has no function that sends email, changes a case's status or makes a payment.","pii":"The case schema holds applicant contact names, emails and phone numbers. The PII masker targets identity numbers, so documents are expected to contain them.","publicFacing":"No"},"caps":{"CAP-03":["agent/tools/__init__.py"],"CAP-04":["agent/tools/documents.py","agent/prompts/summary.md"],"CAP-05":["agent/tools/email_draft.py"],"CAP-07":["agent/tools/web_search.py"],"CAP-09":["agent/tools/registry_api.py"],"CAP-11":["agent/tools/case_db.py","agent/tools/documents.py"]},"controls":{"CTRL-0001":["offcode","The gateway config names an approved model from the agency catalogue. Vetting the provider is a procurement step, outside the code.",["gateway/config.yaml"]],"CTRL-0002":["offcode","No-training and no-logging terms are contractual. The client sets no opt-out flag; the gateway contract is meant to cover it.",["gateway/client.py"]],"CTRL-0007":["found","Every model request and response is logged with case_id and officer_id before it returns.",["gateway/client.py:31-58"]],"CTRL-0009":["partial","case_server uses OAuth 2.1 through the agency identity provider, but docs_server accepts a static API key from an environment variable.",["mcp/case_server/auth.py","mcp/docs_server/server.py:12"]],"CTRL-0011":["partial","The agent's token has scope cases:write on every case, not only the case being processed.",["mcp/case_server/auth.py:40"]],"CTRL-0013":["partial","CI runs both MCP servers against fixtures in an isolated job before deploying. The staging environment they then run in is not isolated (see CTRL-0092).",[".ci/pipeline.yml:22-48"]],"CTRL-0014":["found","Both MCP servers are built from this repository; no third-party server is configured.",["mcp/"]],"CTRL-0016":["found","The system prompt states the role and lists non-goals: no recommendations, no contact with applicants, no status changes.",["agent/prompts/system.md"]],"CTRL-0019":["found","Documents and web pages are wrapped by wrap_untrusted() before they reach the model.",["agent/guardrails.py:12-30"]],"CTRL-0021":["missing","write_case_note accepts any text. Nothing limits what the agent stores in case notes, which it reads back on later visits.",["agent/tools/case_db.py:51"]],"CTRL-0024":["nofeature","Single agent: the code has no messages between agents.",[]],"CTRL-0028":["nofeature","Single agent: there is no multi-agent system to monitor.",[]],"CTRL-0032":["found","OpenTelemetry traces and logs are exported to the agency collector.",["agent/telemetry.py"]],"CTRL-0034":["offcode","Reviewing logs is a team routine. The code only produces the logs.",[]],"CTRL-0038":["partial","There are 24 adversarial test cases, but CI runs them only on manual trigger, not on a schedule or when the model changes.",["tests/eval/redteam_cases.yaml",".ci/pipeline.yml:60"]],"CTRL-0040":["partial","The graph stops after 25 steps. There is no cap on tool calls or tokens per case.",["agent/graph.py:18"]],"CTRL-0041":["found","All seven tools have descriptions, typed inputs and return types.",["agent/tools/__init__.py"]],"CTRL-0047":["found","mask_pii() runs on summaries and email drafts, masking identity numbers, phone numbers and emails.",["agent/guardrails.py:34-61"]],"CTRL-0049":["offcode","The officers' interface is in another repository, so this one cannot show hallucination cues.",[]],"CTRL-0051":["missing","No input check for requests to reproduce copyrighted content.",[]],"CTRL-0062":["missing","Documents and web pages reach the model without a prompt-injection check. Delimiters (CTRL-0019) are the only defence.",["agent/tools/documents.py","agent/tools/web_search.py"]],"CTRL-0065":["found","ops/kill_switch.py disables the agent's service account and revokes both MCP tokens.",["ops/kill_switch.py"]],"CTRL-0067":["partial","registry_api.py documents each endpoint, but not the paging scheme or the error codes the model has to handle.",["agent/tools/registry_api.py"]],"CTRL-0069":["nofeature","The agent runs no generated code.",[]],"CTRL-0074":["partial","Dependencies are pinned, but CI has no vulnerability-scan step.",["requirements.txt",".ci/pipeline.yml"]],"CTRL-0077":["found","Case notes are soft-deleted and every change is kept in an audit table.",["mcp/case_server/models.py:77"]],"CTRL-0078":["found","case_server limits each client to 10 requests a second.",["mcp/case_server/server.py:28"]],"CTRL-0083":["partial","Files arrive after the portal's antivirus scan, which is outside this repository. Nothing here scans them for injected instructions.",["agent/tools/documents.py"]],"CTRL-0089":["partial","Production egress is default-deny, but the rule added for fetch_url allows any HTTPS host. That reopens the outbound channel RISK-047 describes.",["infra/egress-allowlist.yaml:9-21"]],"CTRL-0091":["partial","Versions are pinned without hashes, and nothing re-checks the MCP servers' tool definitions when they load.",["requirements.txt"]],"CTRL-0092":["missing","Staging allows all outbound traffic and uses the live registry API key.",["infra/staging.tf:40-66"]],"CTRL-0096":["partial","Containers run as a non-root user, but the framework's debug UI is switched on in the production config.",["infra/k8s/deployment.yaml","agent/config.yaml:7"]],"CTRL-0003":["nofeature","The model is hosted behind the gateway; nothing loads model weights.",[]],"CTRL-0004":["offcode","Reading the model's system card is part of choosing the model, not code.",[]],"CTRL-0005":["partial","compare_models.py benchmarks two models on 30 past cases, but the results are not kept in the repository.",["tests/eval/compare_models.py"]],"CTRL-0006":["found","No tool sends, approves, rejects or pays. save_email_draft only writes to the officer's drafts.",["agent/tools/email_draft.py"]],"CTRL-0008":["missing","No alerting on changes in the agent's behaviour.",[]],"CTRL-0010":["partial","case_server validates the token on every request; docs_server only checks a static key.",["mcp/case_server/auth.py"]],"CTRL-0012":["missing","Neither server uses per-client consent.",[]],"CTRL-0015":["partial","Tool outputs are wrapped as untrusted, but registry responses are not checked against a schema.",["agent/guardrails.py","agent/tools/registry_api.py"]],"CTRL-0017":["missing","The prompts define no success criteria for the workflow's steps.",["agent/prompts/system.md"]],"CTRL-0018":["found","The system prompt tells the agent to stop and ask the officer when the criteria are ambiguous.",["agent/prompts/system.md"]],"CTRL-0020":["missing","The same model reads the raw application text and writes the summary.",[]],"CTRL-0022":["missing","No content filter on case-note writes.",["agent/tools/case_db.py"]],"CTRL-0023":["found","Every note write is recorded in the audit table with the agent's identity and the case ID.",["mcp/case_server/models.py:77"]],"CTRL-0029":["partial","The service account reaches only the case and document servers, but can write to every case.",["infra/k8s/serviceaccount.yaml"]],"CTRL-0030":["found","The agent runs as its own service account, svc-grantdesk-agent.",["infra/k8s/serviceaccount.yaml"]],"CTRL-0031":["found","case_server checks each token's audience and issuer.",["mcp/case_server/auth.py:22"]],"CTRL-0033":["found","Spans follow the OpenTelemetry GenAI conventions and carry case_id.",["agent/telemetry.py"]],"CTRL-0042":["found","No tool action is irreversible: notes are soft-deleted and emails stay as drafts.",["agent/tools/"]],"CTRL-0043":["found","Each tool call is a trace span with its arguments, result size and outcome.",["agent/telemetry.py"]],"CTRL-0048":["partial","The summary prompt asks for a page reference for every figure, but nothing checks that the references exist.",["agent/prompts/summary.md"]],"CTRL-0050":["offcode","Links to sources would appear in the officers' interface, which is in another repository.",[]],"CTRL-0060":["partial","fetch_url strips scripts and styles, then passes the page text on unfiltered.",["agent/tools/web_search.py:44"]],"CTRL-0061":["partial","Searches use a search API, but fetch_url scrapes applicant websites directly.",["agent/tools/web_search.py"]],"CTRL-0063":["found","search_web limits results to government domains, the registry and three news sites.",["agent/tools/web_search.py:12"]],"CTRL-0081":["missing","Documents are not checked for personal data before the model reads them.",[]],"CTRL-0082":["partial","The agent can read every case, not only the one the officer has open.",["mcp/case_server/auth.py:40"]],"CTRL-0090":["missing","No policy layer separates untrusted content from tool calls.",[]],"CTRL-0094":["offcode","Approval and override rates would come from the officers' interface, in another repository.",[]]}}}`)}.grantdesk,Qx=Zx.caps,$x=Zx.risks,eS=Zx.controls,tS=Zx.residual,nS=Zx.lastYear,rS=nS.adapted,iS=nS.notAdopted,aS=Zx.repo.controls,oS=`3f9c2e1`,sS=`2026-11-18T09:30:00.000Z`,cS=e=>Number(e.slice(5)),lS=e=>e,uS=e=>e||void 0,dS=e=>Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0)),fS=`Single agent calling a hosted LLM through the agency model gateway. Tools: document reader, business registry API client, web search, case-management database, and email drafting.`,pS={"RISK-047":{impactReason:`Financial statements and directors' identity numbers for every open case could leave the agency at once.`,likelihoodReason:`Needs an injected instruction to get past the delimiters. EchoLeak and ForcedLeak show the pattern works on production agents.`,evidence:[`agent/tools/web_search.py:40-44`,`infra/egress-allowlist.yaml:18-21`,`mcp/case_server/auth.py:40`]},"RISK-048":{impactReason:`A tampered package or MCP SDK release would run with the agent's credentials to every case.`,likelihoodReason:`Dependencies are pinned but not hashed, and nothing re-checks them when they load.`,evidence:[`requirements.txt`]},"RISK-049":{impactReason:`Tests in staging could act on live registry data and reach the internet.`,likelihoodReason:`Only red-team runs push the agent to its limits, and they are run by hand.`,evidence:[`infra/staging.tf:40-50`]},"RISK-050":{impactReason:`Officers would rely on a false account of which checks ran.`,likelihoodReason:`Needs goal-directed misreporting; nothing in the logs suggests it so far.`,evidence:[`agent/graph.py`]},"RISK-051":{impactReason:`Single agent today, so there is nothing to coordinate with.`,likelihoodReason:`Applies only if more agents are added.`,evidence:[]},"RISK-052":{impactReason:`Wrong summaries would reach funding decisions without anyone checking the sources.`,likelihoodReason:`Officers handle 30 to 50 cases a week, and the interface does not show sources by default.`,evidence:[]},"RISK-054":{impactReason:`Anyone who reaches the debug UI could drive the agent with its credentials.`,likelihoodReason:`The debug UI is internal-only, but it is switched on in production.`,evidence:[`agent/config.yaml:7`,`infra/k8s/deployment.yaml`]}},mS={"CTRL-0089":[{path:`infra/egress-allowlist.yaml`,start:9,highlight:[18,21],lines:[`egress:`,`  default: deny`,`  allow:`,`    - host: gateway.internal          # model gateway`,`      ports: [443]`,`    - host: registry-api.internal     # business registry`,`      ports: [443]`,`    - host: search-api.example.com    # search API`,`      ports: [443]`,`    # fetch_url reads applicant websites`,`    - host: "*"`,`      ports: [443]`,`      tools: [fetch_url]`]}],"CTRL-0062":[{path:`agent/tools/documents.py`,start:12,highlight:[15,16],lines:[`def read_document(case_id: str, doc_id: str) -> str:`,`    """Extract text from an application document for the agent."""`,`    blob = docs_client.get(case_id, doc_id)`,`    text = extract_text(blob)       # PDF text layer, OCR for scans`,`    return wrap_untrusted(text)     # delimiters only; no injection check`]}],"CTRL-0092":[{path:`infra/staging.tf`,start:40,highlight:[43,49],lines:[`resource "egress_rule" "staging_all" {`,`  environment = "staging"`,`  direction   = "egress"`,`  destination = "0.0.0.0/0"   # all outbound traffic`,`  ports       = ["all"]`,`}`,``,`module "grantdesk_staging" {`,`  source           = "./modules/agent"`,`  registry_api_key = var.registry_api_key_prod   # the live key`,`}`]}]},hS={"CTRL-0089":`Allow fetch_url only for the website domains applicants declare on the form, resolved per case. Add a test that it refuses any other host, and log refusals as a sign of injection.`,"CTRL-0062":`Run the gateway's prompt-injection classifier on extracted document text and fetched pages before they reach the model. Block the step and flag the case when it fires.`,"CTRL-0092":`Give staging its own default-deny egress and a test registry key, and run red-team cases only there.`,"CTRL-0021":`Limit write_case_note to a list of note types (eligibility finding, missing document, clarification sent), and reject notes that contain instructions.`},gS={"CTRL-0089":{resolved:!1,comments:[{author:`AI governance lead`,role:`Reviewer`,at:`2026-11-20T06:10:00.000Z`,text:`The wildcard for fetch_url undoes this control. Please scope it to declared applicant domains before we sign revision 2.`},{author:`Lead engineer`,role:`Assessor`,at:`2026-11-20T07:05:00.000Z`,text:`Agreed. We'll restrict fetch_url to the declared domains, then run the ARC skill again.`}]},"CTRL-0021":{resolved:!1,comments:[{author:`AI governance lead`,role:`Reviewer`,at:`2026-11-20T06:20:00.000Z`,text:`Which categories should case notes allow? List them in the entry.`}]},"RISK-052":{resolved:!1,comments:[{author:`AI governance lead`,role:`Reviewer`,at:`2026-11-20T06:25:00.000Z`,text:`Is 30 to 50 cases a week per officer still right? It drives the likelihood.`}]}};function _S(e,t=new Date){let n=fv(new Date(nS.createdAt));n.sample=`grantdesk`,n.repoUrl=Zx.repo.url,n.pasted=Zx.pasted,n.system={...Zx.system,architecture:fS};for(let[e,t]of Object.entries(Qx))n.caps[e]=dS({present:lS(t.lastYear??t.present),providedBy:t.providedBy,approval:uS(t.approval)});let r=Iv(e,n).filter(e=>cS(e)<=46&&$x[e]);for(let e of r)n.risks[e]={context:$x[e].context,impact:$x[e].impact,likelihood:$x[e].likelihood};let i=Hv(e,n,r).filter(e=>cS(e.id)<=88);for(let e of i)if(iS[e.id]&&e.level>0)n.controls[e.id]={status:`not-adopted`,reason:iS[e.id]};else if(e.group!==`optional`){let t=e.level>0&&e.id in rS;n.controls[e.id]={status:t?`adapted`:`as-is`,how:rS[e.id]??eS[e.id]??nS.defaultHow,evidence:nS.evidence,owner:nS.owner}}for(let t of Gv(e,n,i)){let e=tS[t.rid],r=n.risks[t.rid];n.residual[t.rid]=e?{scenario:e.scenario,strategy:`mitigate`,actions:e.actions,impact:e.impact,likelihood:e.likelihood,acceptedBy:nS.signoff.authority}:{scenario:nS.residualFallback,strategy:`monitor`,actions:nS.residualActions,impact:Math.max(1,(r?.impact??2)-1),likelihood:Math.max(1,(r?.likelihood??2)-1),acceptedBy:nS.signoff.authority}}n.signoff={...nS.signoff,decision:`Approve with conditions`},n.basis={version:nS.registerVersion,risks:r,controls:Object.fromEntries(i.map(e=>[e.id,e.level]))},n.history=[{revision:1,signedAt:nS.signoff.signedAt,register:nS.registerVersion,decision:`Approve with conditions`}],n.signedCopy=structuredClone({revision:1,system:n.system,threshold:n.threshold,caps:n.caps,components:n.components,risks:n.risks,controls:n.controls,residual:n.residual,signoff:n.signoff}),n.revision=2,n.signoff={assessor:nS.signoff.assessor,reviewer:nS.signoff.reviewer,authority:nS.signoff.authority},n.register={version:e.version.version,source:`arc-risk-register`},n.updatedAt=t.toISOString(),n.ai.source=`ARC skill`,n.ai.at=sS;for(let[e,t]of Object.entries(Qx))n.ai.caps[e]=dS({present:lS(t.present),reason:t.reason,providedBy:t.providedBy,approval:uS(t.approval),evidence:Zx.repo.caps[e]}),n.prov[`cap.${e}`]=`confirmed`;n.caps[`CAP-04`]={...n.caps[`CAP-04`],present:`unsure`};for(let[t,r]of Object.entries({"CAP-07":{authority:`read`},"CAP-09":{authority:`read`},"CAP-11":{authority:`act-alone`,irreversible:!1,external:!1}})){let i=e.capabilities[t]?.authority;i?.length&&n.caps[t]&&(n.caps[t]={...n.caps[t],...r.authority&&i.includes(r.authority)?{authority:r.authority}:{},...r.irreversible===!1&&e.capabilities[t].irreversible===`ask`?{irreversible:!1}:{},...r.external===!1&&e.capabilities[t].external===`ask`?{external:!1}:{}})}for(let[t,r]of Object.entries({"CMP-04":{present:`yes`,reason:`The agent writes case notes and reads them back when an officer reopens the case.`},"CMP-05":{present:`no`,reason:`Both MCP servers are built and run by the GrantDesk team; no other party’s server or agent is connected.`}}))Xc(e,t)&&(n.components[t]=r);e.capabilities[`CAP-05`]?.authority?.includes(`propose`)&&(n.ai.caps[`CAP-05`]={present:`yes`,authority:`propose`,evidence:Zx.repo.caps[`CAP-05`],reason:`It drafts clarification emails to applicants, and an officer sends each one. Register 2.0 counts this as Official Communication at authority "propose"; revision 1 marked it absent under the older definition.`},delete n.prov[`cap.CAP-05`]),n.ai.system.architecture=Zx.repo.system.architecture,n.system.architecture=Zx.repo.system.architecture,n.prov[`system.architecture`]=`confirmed`,n.risks[`RISK-009`]={...n.risks[`RISK-009`],context:`Application text is placed in the prompt next to the instructions. An applicant could word an application to steer the summary, for example by writing eligibility claims as if they were instructions.`},n.controls[`CTRL-0012`]={status:`as-is`,how:`Both MCP servers now use the agency identity provider's per-client consent flow.`,evidence:`mcp/case_server/auth.py`,owner:nS.owner},n.controls[`CTRL-0089`]={status:`as-is`,how:eS[`CTRL-0089`],evidence:`infra/egress-allowlist.yaml`,owner:`Platform team`};for(let t of Iv(e,n).filter(e=>cS(e)>46&&$x[e]))n.ai.risks[t]={context:$x[t].context,impact:$x[t].impact,likelihood:$x[t].likelihood,...pS[t]};let a={};for(let[t,[n,r,i]]of Object.entries(aS))t in e.controls&&!e.controls[t].superseded_by&&(a[t]={verdict:n,note:r,files:i,...mS[t]?{excerpts:mS[t]}:{},...t===`CTRL-0089`?{contradicts:!0}:{}});n.code={url:Zx.repo.url,branch:Zx.repo.branch,commit:oS,readAt:sS,filesRead:Zx.repo.filesRead,filesTotal:Zx.repo.filesTotal,read:Zx.repo.read,findings:Zx.repo.findings.map(([e,t,n])=>({area:e,text:t,files:n})),unknown:[],caps:Zx.repo.caps,checks:a,checked:sS};for(let[e,t]of Object.entries(a))t.verdict===`found`&&n.controls[e]?.how===nS.defaultHow&&(n.ai.controls[e]={how:t.note,evidence:t.files.join(`, `)});for(let[e,t]of Object.entries(hS))n.ai.controls[e]={...n.ai.controls[e],proposal:t};return n.threads=structuredClone(gS),n}var vS=`https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/skills`,yS=`https://govtech-responsibleai.github.io/arc-v2-draft/`;function bS(){let e=Q(e=>e.a),t=Q(e=>e.unsaved),n=Q(e=>e.open),r=Q(e=>e.close),i=(0,_.useRef)(null),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(!1),h=(r,i=`overview`)=>{e&&t?f(r):(n(r),By([i]))},g=async e=>{if(!e)return;u(null);let t=await ky(e);t.ok?h(t.value):u(`That file could not be opened: ${t.error}`)},v=async()=>{u(null),c(!0);let e=await jy(a);c(!1),e.ok?h(e.value):u(e.error)},y=e=>Object.keys(e).length;return(0,w.jsxs)(`div`,{className:`app`,children:[(0,w.jsxs)(`header`,{className:`topbar`,children:[(0,w.jsxs)(`a`,{className:`brand`,href:$(),children:[(0,w.jsx)(`span`,{className:`brand-mark`,children:(0,w.jsx)(Fi,{size:17,"aria-hidden":`true`})}),`ARCvisor`]}),(0,w.jsxs)(`nav`,{"aria-label":`Help`,className:`row`,style:{marginLeft:`auto`,gap:20,fontSize:14},children:[(0,w.jsx)(`a`,{href:yS,children:`ARC Framework`}),(0,w.jsx)(`a`,{href:`${yS}implementation/assessment-template/`,children:`Assessment template`})]})]}),(0,w.jsxs)(`main`,{className:`start`,children:[(0,w.jsxs)(`section`,{className:`stack`,style:{gap:12,maxWidth:760},children:[(0,w.jsx)(`p`,{className:`eyebrow`,style:{color:`var(--accent-text)`},children:`Agentic Risk & Capability Framework`}),(0,w.jsx)(`h1`,{children:`Assess an agentic AI system, and keep the record`}),(0,w.jsx)(`p`,{className:`muted`,style:{fontSize:17},children:`The ARC skill reads the code in your repository and drafts the assessment. ARCvisor is where people check it, decide, and sign: what the system can do, which risks and controls apply, the evidence for each, and who accepted what.`})]}),l&&(0,w.jsx)(`p`,{className:`error`,role:`alert`,children:l}),(0,w.jsxs)(`section`,{"aria-label":`Ways to start`,className:`start-cards`,children:[(0,w.jsxs)(`article`,{className:`start-card primary`,children:[(0,w.jsx)(`span`,{className:`start-icon`,style:{background:`var(--accent-soft)`,color:`var(--accent-text)`},children:(0,w.jsx)(Ui,{size:20,"aria-hidden":`true`})}),(0,w.jsx)(`h2`,{style:{fontSize:18},children:`Open an assessment`}),(0,w.jsxs)(`p`,{className:`muted small`,children:[`Open the `,(0,w.jsx)(`span`,{className:`mono`,children:`.arc.json`}),` file the ARC skill wrote to your repository, or one a colleague sent you to review.`]}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10,marginTop:`auto`},children:[(0,w.jsx)(`input`,{ref:i,type:`file`,accept:`.json,application/json`,className:`sr-only`,"aria-label":`Assessment file`,onChange:e=>g(e.target.files?.[0])}),(0,w.jsx)(`button`,{className:`btn btn-primary`,type:`button`,onClick:()=>i.current?.click(),children:`Choose a file`}),(0,w.jsx)(`label`,{className:`label`,htmlFor:`open-repo`,children:`Or open from a public repository`}),(0,w.jsxs)(`div`,{className:`row`,style:{flexWrap:`nowrap`},children:[(0,w.jsx)(`input`,{id:`open-repo`,className:`input mono`,placeholder:`github.com/org/repository`,value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&a.trim()&&v()}}),(0,w.jsx)(`button`,{className:`btn`,type:`button`,disabled:!a.trim()||s,onClick:v,children:s?`Opening…`:`Open`})]}),(0,w.jsxs)(`p`,{className:`small muted`,children:[`Reads `,(0,w.jsx)(`span`,{className:`mono`,children:wy}),` from the default branch.`]})]})]}),(0,w.jsxs)(`article`,{className:`start-card`,children:[(0,w.jsx)(`span`,{className:`start-icon`,style:{background:`var(--violet-soft-2)`,color:`var(--violet)`},children:(0,w.jsx)(zi,{size:20,"aria-hidden":`true`})}),(0,w.jsx)(`h2`,{style:{fontSize:18},children:`Assess with your coding agent`}),(0,w.jsx)(`p`,{className:`muted small`,children:`For private code. The ARC skill runs in your coding agent, reads the code where it lives, and writes the assessment file into the repository for you to open here.`}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10,marginTop:`auto`},children:[(0,w.jsxs)(`div`,{className:`terminal`,"aria-label":`Commands`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`muted`,children:`$`}),` /arc-assessment`]}),(0,w.jsxs)(`div`,{className:`muted`,children:[`→ `,wy]})]}),(0,w.jsx)(`p`,{className:`small muted`,children:`Your code goes only to the model your agent already uses.`}),(0,w.jsx)(`a`,{className:`btn`,href:vS,children:`Install the ARC skill`})]})]}),(0,w.jsxs)(`article`,{className:`start-card`,children:[(0,w.jsx)(`span`,{className:`start-icon`,children:(0,w.jsx)(ji,{size:20,"aria-hidden":`true`})}),(0,w.jsx)(`h2`,{style:{fontSize:18},children:`Start in the browser`}),(0,w.jsx)(`p`,{className:`muted small`,children:`Answer the questions yourself, or open the sample to see a finished first revision and a second one under review.`}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10,marginTop:`auto`},children:[(0,w.jsx)(`button`,{className:`btn`,type:`button`,onClick:()=>h(fv(),`system`),children:`Start a new assessment`}),(0,w.jsx)(`button`,{className:`btn`,type:`button`,onClick:()=>h(_S(Z)),children:`Try the sample: GrantDesk assistant`})]})]})]}),e&&(0,w.jsxs)(`section`,{"aria-labelledby":`recent-h`,className:`stack`,style:{gap:12},children:[(0,w.jsx)(`h2`,{id:`recent-h`,style:{fontSize:15},children:`In this browser`}),(0,w.jsx)(`div`,{className:`panel`,children:(0,w.jsxs)(`div`,{className:`panel-row`,style:{borderTop:0},children:[(0,w.jsxs)(`div`,{className:`stack`,style:{gap:4,flex:`1 1 280px`,minWidth:0},children:[(0,w.jsx)(`span`,{style:{fontWeight:600},children:e.system.name||`Untitled system`}),(0,w.jsxs)(`span`,{className:`small muted`,children:[e.code?(0,w.jsxs)(w.Fragment,{children:[`From `,(0,w.jsx)(`span`,{className:`mono`,children:Fy(e.code.url)}),` · `]}):null,`edited `,Ny(e.updatedAt),t?` · changes not saved to a file`:``]})]}),(0,w.jsxs)(`span`,{className:`chip`,children:[`Revision `,e.revision,` · `,e.signoff.signedAt?`signed`:`draft`]}),(0,w.jsx)(`button`,{className:`btn`,type:`button`,onClick:()=>m(!0),children:`Close`}),(0,w.jsx)(`a`,{className:`btn btn-primary`,href:$([`overview`]),children:`Continue`})]})})]}),(0,w.jsxs)(`footer`,{className:`spread small muted`,style:{paddingTop:24,borderTop:`1px solid var(--line)`},children:[(0,w.jsxs)(`span`,{children:[`Register `,(0,w.jsx)(`span`,{className:`mono`,children:Z.version.version}),` · `,y(Z.capabilities),` capabilities · `,y(Z.risks),` risks · `,y(Z.controls),` controls, read from the register YAML`]}),(0,w.jsx)(`span`,{children:`Assessments stay in your browser and in files you keep. Nothing is stored on a server.`})]})]}),(0,w.jsx)(xS,{open:!!d,title:`Replace the open assessment?`,body:`The assessment open in this browser has changes that are not saved to a file. Opening another one removes it from here.`,confirm:`Replace it`,onCancel:()=>f(null),onConfirm:()=>{d&&(n(d),By([`overview`])),f(null)}}),(0,w.jsx)(xS,{open:p,title:`Close this assessment?`,body:t?`It has changes that are not saved to a file. Closing removes it from this browser.`:`Closing removes it from this browser. Your saved file is unaffected.`,confirm:`Close it`,onCancel:()=>m(!1),onConfirm:()=>{r(),m(!1)}})]})}function xS({open:e,title:t,body:n,confirm:r,onConfirm:i,onCancel:a}){return(0,w.jsx)(Er,{open:e,onOpenChange:e=>{e||a()},children:(0,w.jsxs)(Ar,{children:[(0,w.jsx)(Mr,{className:`overlay`}),(0,w.jsxs)(Ir,{className:`dialog`,children:[(0,w.jsx)(Br,{asChild:!0,children:(0,w.jsx)(`h2`,{children:t})}),(0,w.jsx)(Vr,{className:`muted`,children:n}),(0,w.jsxs)(`div`,{className:`row`,style:{justifyContent:`flex-end`},children:[(0,w.jsx)(`button`,{className:`btn`,type:`button`,onClick:a,children:`Cancel`}),(0,w.jsx)(`button`,{className:`btn btn-primary`,type:`button`,onClick:i,children:r})]})]})]})})}function SS({id:e,title:t,count:n,tone:r,children:i,empty:a}){return(0,w.jsxs)(`section`,{id:e,className:`panel`,"aria-labelledby":`${e??t}-h`,style:{overflow:`hidden`},children:[(0,w.jsxs)(`div`,{className:`panel-head`,children:[(0,w.jsx)(`h2`,{id:`${e??t}-h`,children:t}),(0,w.jsx)(`span`,{className:`chip ${r??``}`,children:n})]}),n?i:(0,w.jsx)(`p`,{className:`panel-row muted`,children:a})]})}var CS=[`Approve`,`Approve with conditions`,`Defer`],wS={system:`system`,capabilities:`capabilities`,risks:`risks`,controls:`controls`,residual:`residual`,signoff:`review`};function TS(e){let[t,n]=[e.slice(0,e.indexOf(`.`)),e.slice(e.indexOf(`.`)+1)];return t===`risk`?{text:`${n} ${Z.risks[n]?.statement??``}`,to:$([`risks`,n])}:t===`control`?{text:`${n} ${Z.controls[n]?.statement??``}`,to:$([`controls`,n])}:t===`cap`?{text:`${n} ${Z.capabilities[n]?.name??``}`,to:$([`capabilities`])}:t===`residual`?{text:`${n} residual risk`,to:$([`residual`])}:{text:`System: ${n}`,to:$([`system`])}}function ES(){let e=xy(),t=Cy(),n=Q(e=>e.edit),r=Q(e=>e.replace),i=Q(e=>e.mode),a=Q(e=>e.me),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(null),u=e.signoff,d=(e,t)=>n(n=>{n.signoff={...n.signoff,[e]:t}}),f=Object.entries(e.threads).filter(([,e])=>!e.resolved&&e.comments.length),p=t.scope.filter(t=>e.controls[t.id]?.status===`not-adopted`),m=t.scope.filter(t=>e.controls[t.id]?.status===`waived`),h=t.contradicted.filter(e=>t.scopeById[e]?.level===0),g=e.review?.verdict,v=()=>{try{r(iy(Z,e)),l(null)}catch(e){l(e.message)}s(!1)},y=e=>n(t=>{t.review={verdict:e,by:[a.name,a.role].filter(Boolean).join(`, `)||`Reviewer`,at:new Date().toISOString()}},!0);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`Sign-off and review`,lede:e.signedCopy&&!t.signed?`Revision ${e.revision}, compared with revision ${e.signedCopy.revision}, which was signed on ${My(e.signedCopy.signoff.signedAt)}${e.basis?` against register ${e.basis.version}`:``}.`:t.signed?`Revision ${e.revision} was signed on ${My(u.signedAt)}. It is read-only; start the next revision to change it.`:`Revision ${e.revision}. The reviewer reads the record here; the acceptance authority signs.`}),c&&(0,w.jsx)(`p`,{className:`error`,role:`alert`,children:c}),t.signed&&(0,w.jsxs)(`section`,{className:`banner banner-ok`,children:[(0,w.jsxs)(`p`,{children:[(0,w.jsxs)(`strong`,{children:[`Signed off on `,My(u.signedAt),u.authority?` by ${u.authority}`:``,`.`]}),` `,u.decision?`Decision: ${u.decision}.`:``]}),(0,w.jsxs)(`button`,{className:`btn`,type:`button`,onClick:()=>r(ay(e)),children:[`Start revision `,e.revision+1]})]}),(0,w.jsxs)(`div`,{className:`cols`,children:[(0,w.jsxs)(`div`,{className:`col-2 stack`,style:{gap:20},children:[!t.signed&&(0,w.jsx)(SS,{title:`Before this can be signed`,count:t.blockers.length,tone:t.blockers.length?`chip-amber`:`chip-green`,empty:`Nothing blocks sign-off.`,children:t.blockers.map(e=>(0,w.jsxs)(`div`,{className:`panel-row`,children:[(0,w.jsx)(`span`,{children:e.text}),(0,w.jsx)(`a`,{className:`btn btn-sm`,href:e.anchor?`#${e.anchor}`:$([wS[e.section]]),onClick:e.anchor?t=>{t.preventDefault(),document.getElementById(e.anchor)?.scrollIntoView?.({behavior:`smooth`})}:void 0,children:e.anchor?`Show`:`Open`})]},e.text))}),e.signedCopy&&!t.signed&&(0,w.jsxs)(`section`,{className:`panel`,"aria-labelledby":`diff-h`,style:{overflow:`hidden`},children:[(0,w.jsx)(`div`,{className:`panel-head`,children:(0,w.jsxs)(`h2`,{id:`diff-h`,children:[`Changes since revision `,e.signedCopy.revision]})}),t.diff&&(0,w.jsxs)(`div`,{className:`panel-row`,style:{alignItems:`flex-start`},children:[(0,w.jsxs)(`span`,{className:`stack`,style:{gap:2,flex:`1 1 360px`},children:[(0,w.jsxs)(`strong`,{children:[`Register `,t.diff.from,` → `,t.diff.to]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[t.diff.newRisks.length,` new `,Sv(t.diff.newRisks.length,`risk`),` and `,t.diff.newControls.length,` new `,Sv(t.diff.newControls.length,`control`),` apply`,t.diff.goneRisks.length?`; ${t.diff.goneRisks.length} ${Sv(t.diff.goneRisks.length,`risk`)} no longer apply`:``,t.diff.levelChanges.length?`; ${t.diff.levelChanges.length} controls changed level`:``,`.`]})]}),(0,w.jsx)(`a`,{href:$([`risks`],{f:`new`}),className:`small`,children:`See what's new`})]}),e.code?.checks&&(0,w.jsxs)(`div`,{className:`panel-row`,children:[(0,w.jsxs)(`span`,{className:`stack`,style:{gap:2},children:[(0,w.jsxs)(`strong`,{children:[`Code checked`,e.code.commit?(0,w.jsxs)(w.Fragment,{children:[` at `,(0,w.jsx)(`span`,{className:`mono`,children:e.code.commit})]}):``]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[Object.keys(e.code.checks).length,` controls checked`,e.ai.source?` by the ${e.ai.source}`:``,`.`]})]}),(0,w.jsx)(`a`,{href:$([`controls`],{f:`gaps`}),className:`small`,children:`Code results`})]}),h.length>0&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`list-group`,style:{color:`var(--red)`},children:[`Contradicted by the code · `,h.length]}),h.map(t=>(0,w.jsxs)(`a`,{href:$([`controls`,t]),className:`panel-row`,style:{color:`var(--ink)`,textDecoration:`none`,borderTop:0,paddingTop:6,paddingBottom:6},children:[(0,w.jsxs)(`span`,{className:`row`,children:[(0,w.jsx)(`span`,{className:`chip chip-l0`,children:`L0`}),(0,w.jsx)(`span`,{className:`mono small muted`,children:t}),Z.controls[t].statement]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[e.controls[t]?.status?yv[e.controls[t].status]:``,` → `,(0,w.jsx)(`span`,{style:{color:`var(--red)`,fontWeight:500},children:e.code.checks[t].verdict===`missing`?`not found in code`:`code conflicts`})]})]},t))]}),(0,w.jsxs)(`div`,{className:`list-group`,children:[`Edited · `,t.changes.length]}),t.changes.length===0&&(0,w.jsx)(`p`,{className:`panel-row muted`,style:{borderTop:0},children:`No edits since sign-off.`}),t.changes.map(e=>(0,w.jsx)(`a`,{href:$([e.section,...e.section===`risks`||e.section===`controls`?[e.id]:[]]),className:`panel-row`,style:{color:`var(--ink)`,textDecoration:`none`,borderTop:0,paddingTop:6,paddingBottom:6},children:e.text},`${e.section}${e.id}`))]}),(0,w.jsx)(SS,{title:`Open comments`,count:f.length,empty:`No open comments.`,children:f.map(([e,t])=>{let n=t.comments[t.comments.length-1],r=e.startsWith(`CTRL`)?$([`controls`,e]):e.startsWith(`RISK`)?$([`risks`,e]):$([`system`]);return(0,w.jsxs)(`a`,{href:r,className:`panel-row`,style:{color:`var(--ink)`,textDecoration:`none`,alignItems:`flex-start`},children:[(0,w.jsxs)(`span`,{className:`stack`,style:{gap:2,flex:`1 1 360px`},children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`mono small muted`,children:e}),` `,Z.controls[e]?.statement??Z.risks[e]?.statement??``]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[n.author,`: “`,n.text,`”`]})]}),(0,w.jsxs)(`span`,{className:`chip`,children:[t.comments.length,` `,Sv(t.comments.length,`comment`)]})]},e)})}),(0,w.jsxs)(SS,{id:`ai-drafts`,title:`AI suggestions nobody has decided on`,count:t.pending.length,tone:`chip-violet`,empty:`Every AI suggestion has been accepted, edited or dismissed.`,children:[t.pending.slice(0,12).map(e=>{let t=TS(e);return(0,w.jsxs)(`div`,{className:`panel-row`,children:[(0,w.jsx)(`span`,{children:t.text}),(0,w.jsx)(`a`,{className:`btn btn-sm`,href:t.to,children:`Open`})]},e)}),t.pending.length>12&&(0,w.jsxs)(`p`,{className:`panel-row small muted`,children:[`and `,t.pending.length-12,` more`]})]}),(0,w.jsx)(SS,{title:`Level 0 controls waived`,count:m.length,tone:m.length?`chip-amber`:``,empty:`No Level 0 control is waived.`,children:m.map(t=>(0,w.jsx)(`div`,{className:`panel-row`,style:{alignItems:`flex-start`},children:(0,w.jsxs)(`span`,{className:`stack`,style:{gap:4,flex:`1 1 360px`},children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`a`,{href:$([`controls`,t.id]),children:(0,w.jsx)(`span`,{className:`mono small`,children:t.id})}),` `,Z.controls[t.id].statement]}),(0,w.jsxs)(`span`,{className:`small`,style:{paddingLeft:12,borderLeft:`2px solid var(--line)`},children:[`Not present: `,e.controls[t.id]?.reason||`—`]}),(0,w.jsxs)(`span`,{className:`small muted`,children:[`Evidence: `,e.controls[t.id]?.evidence||`none recorded`]})]})},t.id))}),(0,w.jsx)(SS,{title:`Not adopted`,count:p.length,empty:`Every control in scope was adopted.`,children:p.map(n=>{let r=e.controls[n.id]?.reason??``,i=t.contradicted.filter(e=>r.includes(e));return(0,w.jsx)(`div`,{className:`panel-row`,style:{alignItems:`flex-start`},children:(0,w.jsxs)(`span`,{className:`stack`,style:{gap:4,flex:`1 1 360px`},children:[(0,w.jsx)(`a`,{href:$([`controls`,n.id]),children:(0,w.jsx)(`span`,{className:`mono small`,children:n.id})}),` `,(0,w.jsx)(`span`,{children:Z.controls[n.id].statement}),(0,w.jsx)(`span`,{className:`small`,style:{paddingLeft:12,borderLeft:`2px solid var(--line)`},children:r||`No reason given.`}),i.length>0&&(0,w.jsxs)(`span`,{className:`small`,style:{color:`var(--red)`,fontWeight:500},children:[`The reason relies on `,i.join(`, `),`, which the code check contradicts.`]})]})},n.id)})})]}),(0,w.jsxs)(`div`,{className:`col-1 stack`,style:{gap:16},children:[(0,w.jsxs)(`section`,{className:`panel panel-pad`,"aria-labelledby":`verdict-h`,children:[(0,w.jsx)(`h2`,{id:`verdict-h`,children:`Reviewer's verdict`}),g&&(0,w.jsxs)(`p`,{className:`row small`,children:[(0,w.jsx)(pi,{size:14,"aria-hidden":`true`}),` `,g===`reviewed`?`Marked as reviewed`:`Changes requested`,` by `,e.review?.by,` on `,My(e.review?.at),`.`]}),i===`review`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`p`,{className:`small muted`,children:`Requesting changes keeps the revision open and points the assessor at your open comments.`}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`button`,{className:`btn`,type:`button`,style:{flex:1},onClick:()=>y(`changes-requested`),children:`Request changes`}),(0,w.jsx)(`button`,{className:`btn`,type:`button`,style:{flex:1},disabled:t.blockers.some(e=>e.section!==`signoff`),onClick:()=>y(`reviewed`),children:`Mark as reviewed`})]})]}):(0,w.jsx)(`p`,{className:`small muted`,children:`Switch to Review mode to give the reviewer's verdict.`})]}),(0,w.jsxs)(`section`,{id:`signoff-fields`,className:`panel panel-pad`,"aria-labelledby":`sign-h`,children:[(0,w.jsx)(`h2`,{id:`sign-h`,children:`Sign-off`}),[[`assessor`,`Assessor (development team)`],[`reviewer`,`Reviewer (governance team)`],[`authority`,`Residual-risk acceptance authority (name and role)`]].map(([e,n])=>(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`so-${e}`,children:n}),(0,w.jsx)(`input`,{id:`so-${e}`,className:`input`,value:u[e]??``,disabled:t.signed,onChange:t=>d(e,t.target.value)})]},e)),(0,w.jsxs)(`fieldset`,{className:`field`,style:{border:0,margin:0,padding:0},children:[(0,w.jsx)(`legend`,{className:`label`,style:{marginBottom:6},children:`Deployment decision`}),CS.map(e=>(0,w.jsxs)(`label`,{className:`row`,style:{minHeight:40,padding:`0 12px`,border:`1px solid var(--line)`,borderRadius:8,marginBottom:6,fontSize:14,cursor:`pointer`},children:[(0,w.jsx)(`input`,{type:`radio`,name:`decision`,checked:u.decision===e,disabled:t.signed,onChange:()=>d(`decision`,e)}),` `,e]},e))]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`so-cond`,children:`Conditions`}),(0,w.jsx)(`textarea`,{id:`so-cond`,className:`textarea`,rows:3,value:u.conditions??``,disabled:t.signed,onChange:e=>d(`conditions`,e.target.value)})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`so-next`,children:`Next review date or trigger`}),(0,w.jsx)(`input`,{id:`so-next`,className:`input`,value:u.nextReview??``,disabled:t.signed,onChange:e=>d(`nextReview`,e.target.value)})]}),!t.signed&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`button`,{className:`btn btn-primary`,type:`button`,style:{minHeight:44},disabled:t.blockers.length>0,onClick:()=>s(!0),children:[`Sign off revision `,e.revision]}),(0,w.jsx)(`span`,{className:`small muted`,style:{textAlign:`center`},children:t.blockers.length?`${t.blockers.length} ${Sv(t.blockers.length,`item`)} to clear first`:`Signing locks this revision.`})]})]}),(0,w.jsxs)(`section`,{className:`panel panel-pad`,"aria-labelledby":`hist-h`,children:[(0,w.jsx)(`h2`,{id:`hist-h`,children:`Revision history`}),!t.signed&&(0,w.jsxs)(`p`,{className:`small`,children:[(0,w.jsxs)(`strong`,{children:[`Revision `,e.revision]}),` · draft · register `,Z.version.version]}),[...e.history].reverse().map(e=>(0,w.jsxs)(`p`,{className:`small`,children:[(0,w.jsxs)(`strong`,{children:[`Revision `,e.revision]}),` · signed `,My(e.signedAt),` · `,e.decision??`signed`,` · register `,e.register]},e.revision))]})]})]}),(0,w.jsx)(xS,{open:o,title:`Sign off revision ${e.revision}?`,body:`Signing records the register version and a copy of the record, and makes this revision read-only. Comments stay open.`,confirm:`Sign off`,onCancel:()=>s(!1),onConfirm:v})]})}function DS(e,t){let n=e.risks[t];return n.combination?`Combination: ${e.combinations.rules[n.combination]?.name??n.combination}`:n.element_ids.map(t=>Qc(e,t)).join(` + `)}var OS=[[``,`All`],[`priority`,`Priority`],[`unscored`,`Unscored`],[`below`,`Below`],[`new`,`New`]];function kS({param:e}){let t=xy(),n=Cy(),r=Q(e=>e.edit),{query:i}=zy(),a=i.get(`f`)??``,o=i.get(`cell`),[s,c]=(0,_.useState)(``),l=e=>!!n.diff?.newRisks.includes(e),u=n.risks.filter(e=>{if(a===`new`&&!l(e)||a&&a!==`new`&&n.state[e]!==a)return!1;if(o){let[n,r]=o.split(`-`).map(Number);if(t.risks[e]?.impact!==n||t.risks[e]?.likelihood!==r)return!1}return!(s.trim()&&!`${e} ${Z.risks[e].statement}`.toLowerCase().includes(s.trim().toLowerCase()))}),d=Rv(Z,u),f=[...d.capability,...d.combination,...d.baseline],p=e&&n.risks.includes(e)?e:f[0],m=e=>e===``?n.risks.length:e===`new`?n.diff?.newRisks.length??0:n.risks.filter(t=>n.state[t]===e).length;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`Risks`,lede:`Every baseline risk, plus the risks of the capabilities marked present. Scores set where Level 1–2 effort goes; they never remove a Level 0 control.`,children:(0,w.jsxs)(`div`,{className:`field`,style:{flexDirection:`row`,alignItems:`center`,gap:8},children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`threshold`,children:`Threshold`}),(0,w.jsx)(`select`,{id:`threshold`,className:`select`,style:{width:`auto`},value:t.threshold,disabled:n.signed,onChange:e=>r(t=>{t.threshold=e.target.value}),children:Object.keys(gv).map(e=>(0,w.jsxs)(`option`,{value:e,children:[gv[e].label,`: `,gv[e].rule]},e))})]})}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsxs)(`div`,{className:`search`,children:[(0,w.jsx)(`label`,{className:`sr-only`,htmlFor:`risk-search`,children:`Search risks`}),(0,w.jsx)(`input`,{id:`risk-search`,className:`input`,type:`search`,placeholder:`Search risks`,value:s,onChange:e=>c(e.target.value)}),(0,w.jsx)(Ni,{size:16,"aria-hidden":`true`})]}),OS.filter(([e])=>e!==`new`||n.diff).map(([e,t])=>(0,w.jsxs)(`button`,{type:`button`,className:`fchip`,"aria-pressed":a===e&&!o,onClick:()=>Vy({f:e||null,cell:null}),children:[t,e===`new`&&n.diff?` in ${n.diff.to}`:``,` `,(0,w.jsx)(`span`,{className:`num`,children:m(e)})]},e)),o&&(0,w.jsxs)(`button`,{type:`button`,className:`fchip`,"aria-pressed":`true`,onClick:()=>Vy({cell:null}),children:[`Impact `,o[0],`, likelihood `,o[2],` ✕`]})]}),(0,w.jsxs)(`div`,{className:`split`,children:[(0,w.jsxs)(`section`,{className:`list`,"aria-label":`Risks`,onKeyDown:hb(f,p,e=>Hy(`risks`,e)),children:[(0,w.jsxs)(`div`,{className:`list-head`,children:[(0,w.jsxs)(`span`,{children:[u.length,` of `,n.risks.length,` risks`]}),a===`unscored`&&(0,w.jsxs)(`span`,{className:`muted`,style:{fontWeight:400},children:[u.filter(e=>t.ai.risks[e]).length,` with AI suggestions`]})]}),(0,w.jsxs)(`div`,{className:`list-scroll`,children:[f.length===0&&(0,w.jsx)(pb,{children:`No risks match.`}),[[`Capability risks`,d.capability],[`Combinations of capabilities`,d.combination],[`Baseline risks`,d.baseline]].map(([e,r])=>r.length>0&&(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`div`,{className:`list-group`,children:[e,` · `,r.length]}),r.map(e=>(0,w.jsxs)(`a`,{className:`item`,href:$([`risks`,e],Object.fromEntries(i.entries())),"aria-current":e===p?`true`:void 0,children:[(0,w.jsx)(`span`,{className:`item-id`,children:e}),(0,w.jsxs)(`span`,{className:`item-body`,children:[(0,w.jsx)(`span`,{className:`item-title`,children:Z.risks[e].statement}),(0,w.jsxs)(`span`,{className:`item-meta`,children:[DS(Z,e),l(e)&&(0,w.jsx)(`span`,{className:`chip chip-amber`,children:`New`}),t.threads[e]?.comments.length?(0,w.jsxs)(`span`,{className:`chip`,children:[t.threads[e].comments.length,` comments`]}):null]})]}),(0,w.jsxs)(`span`,{className:`item-side`,children:[(0,w.jsx)(db,{state:n.state[e],impact:t.risks[e]?.impact,likelihood:t.risks[e]?.likelihood}),Qy(t,`risk`,e)&&(0,w.jsx)(`span`,{className:`chip chip-violet`,children:`AI`})]})]},e))]},e))]}),n.app.below.length>0&&!a&&!o&&(0,w.jsxs)(`details`,{style:{borderTop:`1px solid var(--slate-3)`},children:[(0,w.jsxs)(`summary`,{className:`list-group`,style:{cursor:`pointer`,borderTop:0},children:[`Left out at the authority stated · `,n.app.below.length]}),n.app.below.map(e=>(0,w.jsxs)(`div`,{className:`item`,style:{cursor:`default`},children:[(0,w.jsx)(`span`,{className:`item-id`,children:e.id}),(0,w.jsxs)(`span`,{className:`item-body`,children:[(0,w.jsx)(`span`,{className:`item-title`,children:Z.risks[e.id].statement}),(0,w.jsxs)(`span`,{className:`item-meta`,children:[`Needs `,e.capability,` `,Qc(Z,e.capability),` at `,hv[e.needs].toLowerCase(),` or above. `,(0,w.jsx)(`a`,{href:$([`capabilities`]),children:`Change the authority`})]})]})]},e.id))]}),(0,w.jsx)(`div`,{style:{padding:16,borderTop:`1px solid var(--slate-3)`},children:(0,w.jsx)(Ux,{a:t,ids:n.risks,selected:o,onSelect:e=>Vy({cell:e,f:null})})})]}),p?(0,w.jsx)(AS,{rid:p,ordered:f},p):(0,w.jsx)(`section`,{className:`detail`,children:(0,w.jsx)(pb,{children:`Choose a risk.`})})]})]})}function AS({rid:e,ordered:t}){let n=xy(),r=Cy(),i=Q(e=>e.edit),a=Z.risks[e],o=n.risks[e]??{},s=n.ai.risks[e],c=r.state[e],l=a.element_ids.filter(e=>Xc(Z,e)).length>1,u=t=>i(n=>{n.risks[e]={...n.risks[e],...t},nb(n,`risk`,e)}),d=(e,t)=>t?`${t} · ${(e===`impact`?_v:vv)[t][0]}`:`–`;return(0,w.jsxs)(`article`,{className:`detail`,"aria-labelledby":`risk-h`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`span`,{className:`mono small muted`,children:e}),r.diff?.newRisks.includes(e)&&(0,w.jsxs)(`span`,{className:`chip chip-amber`,children:[`New in `,r.diff.to]}),(0,w.jsx)(`span`,{className:c===`priority`?`chip chip-accent`:c===`unscored`?`chip chip-amber`:`chip`,children:c===`priority`?`Priority`:c===`unscored`?`Unscored, counts as priority`:`Below the threshold`})]}),(0,w.jsx)(mb,{ids:t,current:e,onGo:e=>Hy(`risks`,e),noun:`risk`})]}),(0,w.jsxs)(`div`,{className:`stack`,style:{gap:10},children:[(0,w.jsx)(`h2`,{id:`risk-h`,children:a.statement}),(0,w.jsxs)(`div`,{className:`meta`,children:[(0,w.jsxs)(`span`,{children:[`Arises from `,(0,w.jsx)(`strong`,{style:{color:`var(--ink)`,fontWeight:500},children:a.combination?(0,w.jsx)(`a`,{href:$([`capabilities`]),children:DS(Z,e)}):DS(Z,e)}),l?`, only together`:``]}),a.failure_mode&&(0,w.jsx)(`span`,{children:a.failure_mode}),a.type?.length||a.hazards?.length?(0,w.jsxs)(`span`,{children:[[a.type?.join(` and `),a.hazards?.map(e=>Z.hazards[e]?.name).filter(Boolean).join(`, `)].filter(Boolean).join(` · `),` `,a.hazards?.length?`hazard`:``]}):null]}),(0,w.jsx)(`p`,{className:`desc`,children:a.description})]}),s&&(0,w.jsxs)(ib,{kind:`risk`,id:e,title:`Suggested assessment`,disabled:r.signed,summary:`Impact ${s.impact??`–`}, likelihood ${s.likelihood??`–`}`,onAccept:()=>i(t=>eb(t,`risk`,e)),onEdit:()=>{i(t=>eb(t,`risk`,e,`edited`)),setTimeout(()=>document.getElementById(`imp-${e}`)?.focus(),0)},onDismiss:()=>i(t=>tb(t,`risk`,e)),children:[s.context&&(0,w.jsx)(`p`,{children:s.context}),(0,w.jsxs)(`div`,{className:`grid-2`,children:[(0,w.jsxs)(`div`,{className:`suggest-box`,children:[(0,w.jsx)(`span`,{className:`label`,children:`Impact`}),(0,w.jsx)(`strong`,{children:d(`impact`,s.impact)}),s.impactReason&&(0,w.jsx)(`span`,{className:`small muted`,children:s.impactReason})]}),(0,w.jsxs)(`div`,{className:`suggest-box`,children:[(0,w.jsx)(`span`,{className:`label`,children:`Likelihood`}),(0,w.jsx)(`strong`,{children:d(`likelihood`,s.likelihood)}),s.likelihoodReason&&(0,w.jsx)(`span`,{className:`small muted`,children:s.likelihoodReason})]})]}),(0,w.jsx)(ab,{files:s.evidence})]}),(0,w.jsxs)(`section`,{className:`stack`,style:{gap:12},"aria-labelledby":`yours-h`,children:[(0,w.jsx)(`h3`,{id:`yours-h`,children:`Your assessment`}),(0,w.jsxs)(`div`,{className:`grid-2`,children:[(0,w.jsx)(fb,{id:`imp-${e}`,kind:`impact`,value:o.impact,disabled:r.signed,onChange:e=>u({impact:e})}),(0,w.jsx)(fb,{id:`lik-${e}`,kind:`likelihood`,value:o.likelihood,disabled:r.signed,onChange:e=>u({likelihood:e})})]}),(0,w.jsxs)(`div`,{className:`field`,children:[(0,w.jsx)(`label`,{className:`label`,htmlFor:`ctx-${e}`,children:`How it would happen in this system`}),(0,w.jsx)(`textarea`,{id:`ctx-${e}`,className:`textarea`,rows:3,value:o.context??``,disabled:r.signed,placeholder:s&&Qy(n,`risk`,e)?`Accept the suggestion, or write your own`:`Name the components or code paths involved`,onChange:e=>u({context:e.target.value})})]})]}),(0,w.jsxs)(`section`,{className:`stack`,"aria-labelledby":`ctl-h`,children:[(0,w.jsx)(`div`,{className:`spread`,children:(0,w.jsxs)(`h3`,{id:`ctl-h`,children:[`Controls for this risk `,(0,w.jsx)(`span`,{className:`muted`,style:{fontWeight:400},children:a.controls.length})]})}),(0,w.jsx)(`div`,{className:`scroll-x`,children:(0,w.jsxs)(`table`,{className:`tbl`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Control`}),(0,w.jsx)(`th`,{children:`Level`}),(0,w.jsx)(`th`,{children:`Status`}),(0,w.jsx)(`th`,{children:`Code check`})]})}),(0,w.jsx)(`tbody`,{children:a.controls.filter(e=>Z.controls[e]&&!Z.controls[e].superseded_by).map(e=>{let t=n.controls[e]?.status,i=n.code?.checks?.[e],a=r.scopeById[e];return(0,w.jsxs)(`tr`,{children:[(0,w.jsxs)(`td`,{children:[(0,w.jsx)(`a`,{href:$([`controls`,e]),children:(0,w.jsx)(`span`,{className:`mono small`,children:e})}),` `,Z.controls[e].statement]}),(0,w.jsx)(`td`,{children:(0,w.jsx)(sb,{level:Z.controls[e].level})}),(0,w.jsx)(`td`,{children:t?yv[t]:a?.group===`optional`?(0,w.jsx)(`span`,{className:`muted`,children:`Optional`}):(0,w.jsx)(`span`,{style:{color:`var(--amber)`,fontWeight:500},children:`To do`})}),(0,w.jsx)(`td`,{children:i?(0,w.jsx)(ub,{verdict:i.verdict}):(0,w.jsx)(`span`,{className:`muted`,children:`–`})})]},e)})})]})})]}),(0,w.jsx)(Ix,{id:e})]})}function jS({f:e,value:t,disabled:n,onChange:r}){let i=`sys-${e.key}`;return e.kind===`select`?(0,w.jsxs)(`select`,{id:i,className:`select`,value:t,disabled:n,onChange:e=>r(e.target.value),children:[(0,w.jsx)(`option`,{value:``,children:`Choose…`}),e.options.map(e=>(0,w.jsx)(`option`,{children:e},e))]}):e.kind===`long`?(0,w.jsx)(`textarea`,{id:i,className:`textarea`,rows:3,value:t,disabled:n,onChange:e=>r(e.target.value)}):(0,w.jsx)(`input`,{id:i,className:`input`,value:t,disabled:n,onChange:e=>r(e.target.value)})}function MS(){let e=xy(),t=Cy(),n=Q(e=>e.edit),r=new Set(e.code?.unknown??[]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ob,{title:`System`,lede:`What the system is and how far it acts on its own: section 0 of the assessment template. Every later score depends on these answers.`}),e.code&&(0,w.jsxs)(`section`,{className:`panel panel-pad`,"aria-labelledby":`code-h`,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsx)(`h2`,{id:`code-h`,children:`What the code shows`}),(0,w.jsxs)(`span`,{className:`small muted`,children:[e.code.filesRead!=null&&e.code.filesTotal!=null?`${e.code.filesRead} of ${e.code.filesTotal} files read from `:`Read from `,(0,w.jsx)(`span`,{className:`mono`,children:Fy(e.code.url)}),e.code.commit?(0,w.jsxs)(w.Fragment,{children:[` at `,(0,w.jsx)(`span`,{className:`mono`,children:e.code.commit})]}):``]})]}),(0,w.jsx)(`dl`,{className:`stack`,style:{margin:0,gap:10},children:e.code.findings.map(e=>(0,w.jsxs)(`div`,{className:`row`,style:{alignItems:`baseline`,flexWrap:`nowrap`,gap:16},children:[(0,w.jsx)(`dt`,{style:{flex:`0 0 150px`,fontWeight:600,fontSize:13,color:`var(--ink-2)`},children:e.area}),(0,w.jsxs)(`dd`,{style:{margin:0,fontSize:14},children:[e.text,` `,e.files.map(e=>(0,w.jsx)(`span`,{className:`chip chip-line mono`,style:{marginLeft:4},children:e},e))]})]},e.area))}),r.size>0&&(0,w.jsxs)(`p`,{className:`banner banner-warn`,style:{padding:`8px 12px`},children:[`The code can't tell us `,Array.from(r).map(e=>xv.find(t=>t.key===e)?.label.toLowerCase()??e).join(`, `),`. Answer these below.`]})]}),(0,w.jsx)(`div`,{className:`grid-2`,children:xv.map(i=>{let a=e.system[i.key]??``,o=Qy(e,`system`,i.key),s=r.has(i.key)&&!a.trim();return(0,w.jsxs)(`div`,{className:`field${s?` field-warn`:``}`,style:i.kind===`long`?{gridColumn:`1 / -1`}:void 0,children:[(0,w.jsxs)(`div`,{className:`spread`,children:[(0,w.jsxs)(`label`,{className:`label`,htmlFor:`sys-${i.key}`,children:[i.label,!i.required&&(0,w.jsx)(`span`,{className:`muted`,style:{fontWeight:400},children:` · optional`})]}),s&&(0,w.jsx)(`span`,{className:`small`,style:{color:`var(--amber)`,fontWeight:600},children:`Not in the code: answer this`})]}),(0,w.jsx)(jS,{f:i,value:a,disabled:t.signed,onChange:e=>n(t=>{t.system[i.key]=e,nb(t,`system`,i.key)})}),o&&(0,w.jsxs)(`div`,{className:`suggest`,style:{padding:12,gap:8},children:[(0,w.jsxs)(`span`,{className:`row small`,style:{color:`var(--violet)`,fontWeight:600},children:[(0,w.jsx)(Li,{size:14,"aria-hidden":`true`}),`Suggested by the `,e.ai.source??`AI`]}),(0,w.jsx)(`p`,{style:{fontSize:14},children:e.ai.system[i.key]}),(0,w.jsxs)(`div`,{className:`row`,children:[(0,w.jsx)(`button`,{className:`btn btn-sm`,type:`button`,disabled:t.signed,onClick:()=>n(e=>tb(e,`system`,i.key)),children:`Dismiss`}),(0,w.jsx)(`button`,{className:`btn btn-sm btn-ai`,type:`button`,disabled:t.signed,onClick:()=>n(e=>eb(e,`system`,i.key)),children:`Accept`})]})]})]},i.key)})}),(0,w.jsx)(Ix,{id:`system`})]})}var NS={overview:Jx,system:MS,capabilities:xb,risks:kS,controls:Vx,residual:Xx,review:ES};function PS(){let{path:e}=zy(),t=Q(e=>e.a!==null),n=Uy.find(t=>t.id===e[0])?.id;if((0,_.useEffect)(()=>{document.documentElement.scrollTop=0},[n]),(0,_.useEffect)(()=>{let e=Uy.find(e=>e.id===n)?.label;document.title=e&&t?`${e} · ARCvisor`:`ARCvisor`},[n,t]),!t||!n)return(0,w.jsx)(bS,{});let r=NS[n];return(0,w.jsx)(Jy,{page:n,children:(0,w.jsx)(r,{param:e[1]})})}var FS=window.matchMedia?.(`(prefers-color-scheme: dark)`),IS=()=>document.documentElement.classList.toggle(`dark`,!!FS?.matches);IS(),FS?.addEventListener?.(`change`,IS),(0,v.createRoot)(document.getElementById(`root`)).render((0,w.jsx)(_.StrictMode,{children:(0,w.jsx)(PS,{})}));
//# sourceMappingURL=index-C5q3N08S.js.map