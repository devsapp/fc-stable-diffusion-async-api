"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[180],{25864:function(A,y,a){a.d(y,{E:function(){return z}});var E=a(97857),_=a.n(E),c=a(92380),f=a(85504),d=a(53371),P=a(90105),m=a(18629),R=a(42075),M=a(82424),Z=a(83062),G=a(69814),p=a(71577),j=a(29209),B=a(62435),h=a(86074);function w(I){var g=I.task,N=I.onRemove,T=g.getFileName(),H=Math.round(g.getProgress()*1e4)/100,W=g.getCurrent(),V=g.getTotal(),b=g.getError(),L=g.isFinished();return(0,h.jsxs)(R.Z,{direction:"vertical",style:{width:"100%"},size:0,children:[(0,h.jsxs)(R.Z,{style:{width:"100%",justifyContent:"space-between"},children:[(0,h.jsx)(M.Z.Text,{strong:!0,children:(0,h.jsx)(Z.Z,{title:T,children:(0,d.Us)(T)})}),(0,h.jsxs)("span",{children:[(0,c.t)(W)," / ",(0,c.t)(V)]})]}),(0,h.jsx)(G.Z,{percent:H,status:b?"exception":L?"success":void 0}),!!b&&(0,h.jsx)("span",{style:{color:"red"},children:b}),(0,h.jsxs)(R.Z,{style:{justifyContent:"flex-end",width:"100%"},children:[(0,h.jsx)(p.ZP,{size:"small",onClick:function(){N()},children:"\u5220\u9664\u8BB0\u5F55"}),(0,h.jsx)(p.ZP,{size:"small",danger:!0,onClick:function(){g.stop()},disabled:!!b||!!L,children:"\u53D6\u6D88\u4E0A\u4F20"}),(0,h.jsx)(p.ZP,{size:"small",disabled:!b,onClick:function(){g.run()},children:"\u91CD\u65B0\u4E0A\u4F20"})]})]})}function z(){var I=B.useContext(f._),g=I.tasks,N=I.setCtx,T=P.Z();return m.Z(T,200),(0,h.jsx)(j.Z,{header:(0,h.jsx)("span",{style:{color:"#ed7075"},children:"\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u8BF7\u52FF\u5237\u65B0\u9875\u9762"}),dataSource:g,renderItem:function(W){return(0,h.jsx)(j.Z.Item,{children:(0,h.jsx)(w,{task:W,onRemove:function(){N(function(b){var L;return _()(_()({},b),{},{tasks:b==null||(L=b.tasks)===null||L===void 0?void 0:L.filter(function(F){return F.key!==W.key})})})}})})},locale:{emptyText:"\u6682\u65E0\u4E0A\u4F20\u4EFB\u52A1"}})}},80943:function(A,y,a){a.r(y),a.d(y,{default:function(){return d}});var E=a(25864),_=a(55617),c=a(4393),f=a(86074);function d(){return(0,_.Q4)(_.Zl.PAGE_UPLOAD),(0,f.jsx)(c.Z,{style:{margin:20},children:(0,f.jsx)(E.E,{})})}},70507:function(A,y,a){var E=a(50942),_=a(6154);_.Z.interceptors.response.use(function(c){return c},function(c){return c.response&&(c.response.status===401&&E.m8.push("/login"),c.response.status!==200)?c.response:Promise.reject(c)}),y.Z=_.Z},55617:function(A,y,a){a.d(y,{Q4:function(){return Z},Zl:function(){return m},_2:function(){return R},fX:function(){return G}});var E=a(15009),_=a.n(E),c=a(99289),f=a.n(c),d=a(62435),P=a(70507),m;(function(p){p.PAGE_INFO="page_info",p.PAGE_SD="page_sd",p.PAGE_FILEMGR="page_filemgr",p.PAGE_MODEL="page_model",p.PAGE_TERMINAL="page_terminal",p.PAGE_LORA="page_lora",p.PAGE_DOCUMENT="page_document",p.PAGE_UPLOAD="page_upload",p.CHANGE_SIDEMENU="change_sidemenu",p.TRY_MODEL="try_model",p.DOWNLOAD_MODEL="download_model",p.UPLOAD_ERROR="upload_error"})(m||(m={}));function R(p,j){return M.apply(this,arguments)}function M(){return M=f()(_()().mark(function p(j,B){return _()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(!window.ENABLE_COLLECT){w.next=3;break}return w.next=3,P.Z.post("/collect/tracker",[{key:j,payload:B,ts:Date.now(),source:"filemgr"}]);case 3:case"end":return w.stop()}},p)})),M.apply(this,arguments)}function Z(p,j){d.useEffect(function(){R(p,j)},[])}function G(p){var j=p.key,B=p.payload;Z(j,B)}},92380:function(A,y,a){a.d(y,{t:function(){return E}});function E(_){for(var c=["B","KB","MB","GB","TB"],f=0;_>1024;)_/=1024,f++;return"".concat(_.toFixed(2)," ").concat(c[f])}},85504:function(A,y,a){a.d(y,{_:function(){return c},i:function(){return _}});var E=a(62435),_={info:void 0,tasks:[],setCtx:function(){}},c=E.createContext(_)},53371:function(A,y,a){a.d(y,{Dy:function(){return c},Us:function(){return _},XP:function(){return E}});function E(f){var d=f.lastIndexOf("/");return d===-1?"/":f.substring(0,d)}function _(f){var d=f.lastIndexOf("/");return d===-1?f:f.substring(d+1)}function c(){for(var f=arguments.length,d=new Array(f),P=0;P<f;P++)d[P]=arguments[P];return d.join("/").replace(/\/+/g,"/")}},22638:function(A,y,a){var E=a(62435),_=a(92770),c=a(31663);function f(d){c.Z&&((0,_.mf)(d)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof d)));var P=(0,E.useRef)(d);P.current=(0,E.useMemo)(function(){return d},[d]);var m=(0,E.useRef)();return m.current||(m.current=function(){for(var R=[],M=0;M<arguments.length;M++)R[M]=arguments[M];return P.current.apply(this,R)}),m.current}y.Z=f},90105:function(A,y,a){var E=a(97582),_=a(62435),c=function(){var f=(0,E.__read)((0,_.useState)({}),2),d=f[1];return(0,_.useCallback)(function(){return d({})},[])};y.Z=c},92770:function(A,y,a){a.d(y,{G7:function(){return P},hj:function(){return d},mf:function(){return _}});var E=function(m){return m!==null&&typeof m=="object"},_=function(m){return typeof m=="function"},c=function(m){return typeof m=="string"},f=function(m){return typeof m=="boolean"},d=function(m){return typeof m=="number"},P=function(m){return typeof m=="undefined"}},31663:function(A,y){var a=!1;y.Z=a},97582:function(A,y,a){a.r(y),a.d(y,{__assign:function(){return c},__asyncDelegator:function(){return W},__asyncGenerator:function(){return H},__asyncValues:function(){return V},__await:function(){return T},__awaiter:function(){return p},__classPrivateFieldGet:function(){return $},__classPrivateFieldIn:function(){return Y},__classPrivateFieldSet:function(){return J},__createBinding:function(){return B},__decorate:function(){return d},__esDecorate:function(){return m},__exportStar:function(){return h},__extends:function(){return _},__generator:function(){return j},__importDefault:function(){return X},__importStar:function(){return F},__makeTemplateObject:function(){return b},__metadata:function(){return G},__param:function(){return P},__propKey:function(){return M},__read:function(){return z},__rest:function(){return f},__runInitializers:function(){return R},__setFunctionName:function(){return Z},__spread:function(){return I},__spreadArray:function(){return N},__spreadArrays:function(){return g},__values:function(){return w}});var E=function(n,t){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])},E(n,t)};function _(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");E(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var c=function(){return c=Object.assign||function(t){for(var e,r=1,u=arguments.length;r<u;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},c.apply(this,arguments)};function f(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(n);u<r.length;u++)t.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(e[r[u]]=n[r[u]]);return e}function d(n,t,e,r){var u=arguments.length,o=u<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(i=n[l])&&(o=(u<3?i(o):u>3?i(t,e,o):i(t,e))||o);return u>3&&o&&Object.defineProperty(t,e,o),o}function P(n,t){return function(e,r){t(e,r,n)}}function m(n,t,e,r,u,o){function i(Q){if(Q!==void 0&&typeof Q!="function")throw new TypeError("Function expected");return Q}for(var l=r.kind,C=l==="getter"?"get":l==="setter"?"set":"value",s=!t&&n?r.static?n:n.prototype:null,v=t||(s?Object.getOwnPropertyDescriptor(s,r.name):{}),D,O=!1,x=e.length-1;x>=0;x--){var U={};for(var S in r)U[S]=S==="access"?{}:r[S];for(var S in r.access)U.access[S]=r.access[S];U.addInitializer=function(Q){if(O)throw new TypeError("Cannot add initializers after decoration has completed");o.push(i(Q||null))};var K=(0,e[x])(l==="accessor"?{get:v.get,set:v.set}:v[C],U);if(l==="accessor"){if(K===void 0)continue;if(K===null||typeof K!="object")throw new TypeError("Object expected");(D=i(K.get))&&(v.get=D),(D=i(K.set))&&(v.set=D),(D=i(K.init))&&u.unshift(D)}else(D=i(K))&&(l==="field"?u.unshift(D):v[C]=D)}s&&Object.defineProperty(s,r.name,v),O=!0}function R(n,t,e){for(var r=arguments.length>2,u=0;u<t.length;u++)e=r?t[u].call(n,e):t[u].call(n);return r?e:void 0}function M(n){return typeof n=="symbol"?n:"".concat(n)}function Z(n,t,e){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:e?"".concat(e," ",t):t})}function G(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)}function p(n,t,e,r){function u(o){return o instanceof e?o:new e(function(i){i(o)})}return new(e||(e=Promise))(function(o,i){function l(v){try{s(r.next(v))}catch(D){i(D)}}function C(v){try{s(r.throw(v))}catch(D){i(D)}}function s(v){v.done?o(v.value):u(v.value).then(l,C)}s((r=r.apply(n,t||[])).next())})}function j(n,t){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,u,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(s){return function(v){return C([s,v])}}function C(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(e=0)),e;)try{if(r=1,u&&(o=s[0]&2?u.return:s[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,s[1])).done)return o;switch(u=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,u=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){e.label=s[1];break}if(s[0]===6&&e.label<o[1]){e.label=o[1],o=s;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(s);break}o[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(n,e)}catch(v){s=[6,v],u=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}var B=Object.create?function(n,t,e,r){r===void 0&&(r=e);var u=Object.getOwnPropertyDescriptor(t,e);(!u||("get"in u?!t.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(n,r,u)}:function(n,t,e,r){r===void 0&&(r=e),n[r]=t[e]};function h(n,t){for(var e in n)e!=="default"&&!Object.prototype.hasOwnProperty.call(t,e)&&B(t,n,e)}function w(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],r=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function z(n,t){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var r=e.call(n),u,o=[],i;try{for(;(t===void 0||t-- >0)&&!(u=r.next()).done;)o.push(u.value)}catch(l){i={error:l}}finally{try{u&&!u.done&&(e=r.return)&&e.call(r)}finally{if(i)throw i.error}}return o}function I(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(z(arguments[t]));return n}function g(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var r=Array(n),u=0,t=0;t<e;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,u++)r[u]=o[i];return r}function N(n,t,e){if(e||arguments.length===2)for(var r=0,u=t.length,o;r<u;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return n.concat(o||Array.prototype.slice.call(t))}function T(n){return this instanceof T?(this.v=n,this):new T(n)}function H(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(n,t||[]),u,o=[];return u={},i("next"),i("throw"),i("return"),u[Symbol.asyncIterator]=function(){return this},u;function i(O){r[O]&&(u[O]=function(x){return new Promise(function(U,S){o.push([O,x,U,S])>1||l(O,x)})})}function l(O,x){try{C(r[O](x))}catch(U){D(o[0][3],U)}}function C(O){O.value instanceof T?Promise.resolve(O.value.v).then(s,v):D(o[0][2],O)}function s(O){l("next",O)}function v(O){l("throw",O)}function D(O,x){O(x),o.shift(),o.length&&l(o[0][0],o[0][1])}}function W(n){var t,e;return t={},r("next"),r("throw",function(u){throw u}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(u,o){t[u]=n[u]?function(i){return(e=!e)?{value:T(n[u](i)),done:!1}:o?o(i):i}:o}}function V(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof w=="function"?w(n):n[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=n[o]&&function(i){return new Promise(function(l,C){i=n[o](i),u(l,C,i.done,i.value)})}}function u(o,i,l,C){Promise.resolve(C).then(function(s){o({value:s,done:l})},i)}}function b(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var L=Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t};function F(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var e in n)e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)&&B(t,n,e);return L(t,n),t}function X(n){return n&&n.__esModule?n:{default:n}}function $(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)}function J(n,t,e,r,u){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!u)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!u:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?u.call(n,e):u?u.value=e:t.set(n,e),e}function Y(n,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?t===n:n.has(t)}y.default={__extends:_,__assign:c,__rest:f,__decorate:d,__param:P,__metadata:G,__awaiter:p,__generator:j,__createBinding:B,__exportStar:h,__values:w,__read:z,__spread:I,__spreadArrays:g,__spreadArray:N,__await:T,__asyncGenerator:H,__asyncDelegator:W,__asyncValues:V,__makeTemplateObject:b,__importStar:F,__importDefault:X,__classPrivateFieldGet:$,__classPrivateFieldSet:J,__classPrivateFieldIn:Y}}}]);