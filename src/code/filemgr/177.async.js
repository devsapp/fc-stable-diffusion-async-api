"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{68996:function(G,C,e){e.d(C,{r:function(){return s}});var R=e(97857),n=e.n(R),f=e(86074);function s(_){var P=_.disabled,W=_.children,A=_.message;return(0,f.jsxs)("div",{style:n()({position:"relative"},P?{cursor:"not-allowed",display:"block",maxHeight:"100vh",overflow:"hidden"}:{}),children:[P&&(0,f.jsx)("div",{style:{position:"absolute",fontWeight:"bold",zIndex:1,transform:"translate(0, -50%)",top:"50%",left:0,right:0,textAlign:"center"},children:A||"\u60A8\u672A\u6302\u8F7D NAS\uFF0C\u65E0\u6CD5\u5F00\u542F\u6587\u4EF6\u7BA1\u7406\u529F\u80FD\u3002"}),(0,f.jsx)("div",{style:P?{pointerEvents:"none",filter:"opacity(0.5) grayscale(1)"}:{},children:W})]})}},68797:function(G,C,e){e.d(C,{Q:function(){return I}});var R=e(97857),n=e.n(R),f=e(15009),s=e.n(f),_=e(99289),P=e.n(_),W=e(5574),A=e.n(W),z=e(36147),Z=e(71577),$=e(62435),l=e(86074);function I(k){var M=k.modalProps,B=k.buttonProps,x=k.children,L=k.beforeRequest,D=k.afterRequest,h=k.request,F=k.setVisibleCallback,N=$.useState(!1),S=A()(N,2),Q=S[0],r=S[1];return $.useEffect(function(){F&&F(r)},[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(z.Z,n()(n()({open:Q,onCancel:function(){return r(!1)},maskClosable:!0,destroyOnClose:!0,onOk:P()(s()().mark(function u(){var o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}return t.abrupt("return");case 2:return L&&L(),t.prev=3,t.next=6,h();case 6:o=t.sent,o.success?(D&&D(!0),r(!1)):D&&D(!1,"".concat(o.errMsg)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),D&&D(!1,"".concat(t.t0));case 13:case"end":return t.stop()}},u,null,[[3,10]])})),okButtonProps:h?{}:{style:{display:"none"}}},M),{},{children:Q&&x})),(0,l.jsx)(Z.ZP,n()({onClick:function(){return r(!0)}},B))]})}},25864:function(G,C,e){e.d(C,{E:function(){return x}});var R=e(97857),n=e.n(R),f=e(92380),s=e(85504),_=e(53371),P=e(90105),W=e(18629),A=e(42075),z=e(82424),Z=e(83062),$=e(69814),l=e(71577),I=e(29209),k=e(62435),M=e(86074);function B(L){var D=L.task,h=L.onRemove,F=D.getFileName(),N=Math.round(D.getProgress()*1e4)/100,S=D.getCurrent(),Q=D.getTotal(),r=D.getError(),u=D.isFinished();return(0,M.jsxs)(A.Z,{direction:"vertical",style:{width:"100%"},size:0,children:[(0,M.jsxs)(A.Z,{style:{width:"100%",justifyContent:"space-between"},children:[(0,M.jsx)(z.Z.Text,{strong:!0,children:(0,M.jsx)(Z.Z,{title:F,children:(0,_.Us)(F)})}),(0,M.jsxs)("span",{children:[(0,f.t)(S)," / ",(0,f.t)(Q)]})]}),(0,M.jsx)($.Z,{percent:N,status:r?"exception":u?"success":void 0}),r&&(0,M.jsx)("span",{style:{color:"red"},children:r}),(0,M.jsxs)(A.Z,{style:{justifyContent:"flex-end",width:"100%"},children:[(0,M.jsx)(l.ZP,{size:"small",onClick:function(){h()},children:"\u5220\u9664\u8BB0\u5F55"}),(0,M.jsx)(l.ZP,{size:"small",danger:!0,onClick:function(){D.stop()},disabled:!!r||!!u,children:"\u53D6\u6D88\u4E0A\u4F20"}),(0,M.jsx)(l.ZP,{size:"small",disabled:!r,onClick:function(){D.run()},children:"\u91CD\u65B0\u4E0A\u4F20"})]})]})}function x(){var L=k.useContext(s._),D=L.tasks,h=L.setCtx,F=P.Z();return W.Z(F,200),(0,M.jsx)(I.Z,{header:(0,M.jsx)("span",{style:{color:"#ed7075"},children:"\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u8BF7\u52FF\u5237\u65B0\u9875\u9762"}),dataSource:D,renderItem:function(S){return(0,M.jsx)(I.Z.Item,{children:(0,M.jsx)(B,{task:S,onRemove:function(){h(function(r){var u;return n()(n()({},r),{},{tasks:r==null||(u=r.tasks)===null||u===void 0?void 0:u.filter(function(o){return o.key!==S.key})})})}})})},locale:{emptyText:"\u6682\u65E0\u4E0A\u4F20\u4EFB\u52A1"}})}},70507:function(G,C,e){var R=e(50942),n=e(6154);n.Z.interceptors.response.use(function(f){return f},function(f){return f.response&&(f.response.status===401&&R.m8.push("/login"),f.response.status!==200)?f.response:Promise.reject(f)}),C.Z=n.Z},55617:function(G,C,e){e.d(C,{Q4:function(){return Z},Zl:function(){return W},_2:function(){return A},fX:function(){return $}});var R=e(15009),n=e.n(R),f=e(99289),s=e.n(f),_=e(62435),P=e(70507),W;(function(l){l.PAGE_INFO="page_info",l.PAGE_SD="page_sd",l.PAGE_FILEMGR="page_filemgr",l.PAGE_MODEL="page_model",l.PAGE_TERMINAL="page_terminal",l.PAGE_LORA="page_lora",l.PAGE_DOCUMENT="page_document",l.PAGE_UPLOAD="page_upload",l.CHANGE_SIDEMENU="change_sidemenu",l.TRY_MODEL="try_model",l.DOWNLOAD_MODEL="download_model"})(W||(W={}));function A(l,I){return z.apply(this,arguments)}function z(){return z=s()(n()().mark(function l(I,k){return n()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!window.ENABLE_COLLECT){B.next=3;break}return B.next=3,P.Z.post("/collect/tracker",[{key:I,payload:k,ts:Date.now(),source:"filemgr"}]);case 3:case"end":return B.stop()}},l)})),z.apply(this,arguments)}function Z(l,I){_.useEffect(function(){A(l,I)},[])}function $(l){var I=l.key,k=l.payload;Z(I,k)}},61039:function(G,C,e){e.d(C,{$R:function(){return L},C7:function(){return P},L6:function(){return Z},MB:function(){return Q},RN:function(){return N},Ri:function(){return h},Yd:function(){return A},ap:function(){return B},cy:function(){return k},jW:function(){return l}});var R=e(15009),n=e.n(R),f=e(99289),s=e.n(f),_=e(70507);function P(r,u){return W.apply(this,arguments)}function W(){return W=s()(n()().mark(function r(u,o){var y;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.Z.get("/api/file/list",{params:{path:u,dir_size:o}});case 2:return y=i.sent,i.abrupt("return",y.data);case 4:case"end":return i.stop()}},r)})),W.apply(this,arguments)}function A(r){return z.apply(this,arguments)}function z(){return z=s()(n()().mark(function r(u){var o;return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.Z.delete("/api/file?path=".concat(u));case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}},r)})),z.apply(this,arguments)}function Z(r){return $.apply(this,arguments)}function $(){return $=s()(n()().mark(function r(u){var o;return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.Z.put("/api/folder",null,{params:{path:u}});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}},r)})),$.apply(this,arguments)}function l(r,u){return I.apply(this,arguments)}function I(){return I=s()(n()().mark(function r(u,o){var y;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.Z.post("/api/file/move",null,{params:{src:u,dst:o}});case 2:return y=i.sent,i.abrupt("return",y.data);case 4:case"end":return i.stop()}},r)})),I.apply(this,arguments)}function k(r,u){return M.apply(this,arguments)}function M(){return M=s()(n()().mark(function r(u,o){var y;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.Z.post("/api/file/copy",null,{params:{src:u,dst:o}});case 2:return y=i.sent,i.abrupt("return",y.data);case 4:case"end":return i.stop()}},r)})),M.apply(this,arguments)}function B(r){return x.apply(this,arguments)}function x(){return x=s()(n()().mark(function r(u){var o;return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.Z.get("/api/file/size",{params:{path:u}});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}},r)})),x.apply(this,arguments)}function L(r,u){return D.apply(this,arguments)}function D(){return D=s()(n()().mark(function r(u,o){var y;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.Z.post("/api/file/zip",{files:u,dst:o});case 2:return y=i.sent,i.abrupt("return",y.data);case 4:case"end":return i.stop()}},r)})),D.apply(this,arguments)}function h(r,u){return F.apply(this,arguments)}function F(){return F=s()(n()().mark(function r(u,o){var y;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.Z.post("/api/file/unzip",null,{params:{src:u,dst:o}});case 2:return y=i.sent,i.abrupt("return",y.data);case 4:case"end":return i.stop()}},r)})),F.apply(this,arguments)}function N(r){return S.apply(this,arguments)}function S(){return S=s()(n()().mark(function r(u){var o;return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.Z.get("/api/file/preview",{params:{path:u}});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}},r)})),S.apply(this,arguments)}function Q(r){return"/api/file?path=".concat(encodeURIComponent(r))}},43331:function(G,C,e){e.d(C,{Vz:function(){return i},qU:function(){return se},tw:function(){return te}});var R=e(15009),n=e.n(R),f=e(99289),s=e.n(f),_=e(25098),P=e.n(_),W=e(28785),A=e.n(W),z=e(48374),Z=e.n(z),$=e(31996),l=e.n($),I=e(26037),k=e.n(I),M=e(12444),B=e.n(M),x=e(72004),L=e.n(x),D=e(9783),h=e.n(D),F=function(){function T(m){B()(this,T),h()(this,"maxRunning",void 0),h()(this,"running",void 0),this.maxRunning=m,this.running=0}return L()(T,[{key:"getToken",value:function(){var m=s()(n()().mark(function g(){var v=this;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(this.running>=this.maxRunning)){a.next=3;break}return a.next=3,new Promise(function(E){var w=setInterval(function(){v.running<v.maxRunning&&(clearInterval(w),E(void 0))},100)});case 3:this.running++;case 4:case"end":return a.stop()}},g,this)}));function d(){return m.apply(this,arguments)}return d}()},{key:"releaseToken",value:function(){this.running--}}]),T}(),N=e(61039),S=e(70507);function Q(T,m,d,g){return r.apply(this,arguments)}function r(){return r=s()(n()().mark(function T(m,d,g,v){var c;return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,S.Z.post("/api/upload/chunk?filename=".concat(encodeURIComponent(m),"&start=").concat(encodeURIComponent(d)),g,{timeout:v});case 2:return c=E.sent,E.abrupt("return",c.data);case 4:case"end":return E.stop()}},T)})),r.apply(this,arguments)}function u(T,m,d,g,v){return o.apply(this,arguments)}function o(){return o=s()(n()().mark(function T(m,d,g,v,c){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,new Promise(function(w,j){var b=new WebSocket("".concat(location.protocol.replace("http","ws"),"//").concat(location.hostname,":").concat(location.port,"/api/upload/url?filename=").concat(encodeURIComponent(m),"&url=").concat(encodeURIComponent(d)));c&&c(b),b.onerror=j,b.onopen=function(){b.send("client send hi")};var O=!1,K="";b.onmessage=function(ee){try{var U=JSON.parse(ee.data),ne=U.current,Y=U.total,H=U.success,J=U.errMsg;H===!0?O=!0:H===!1?(O=!1,K=J):g(ne,Y)}catch(q){console.error(q),console.log(ee)}},b.onclose=function(){w(void 0),b.close(),console.log("ws closed",K),v(O,K)}});case 2:return E.abrupt("return",{success:!0});case 3:case"end":return E.stop()}},T)})),o.apply(this,arguments)}var y=new F(32),t=function(){function T(){B()(this,T),h()(this,"key",""),h()(this,"type","unknown"),h()(this,"target",""),h()(this,"current",0),h()(this,"total",0),h()(this,"finished",!1),h()(this,"error",""),h()(this,"cancel",!1),this.key=Math.random().toString(36).substr(2,8)}return L()(T,[{key:"getKey",value:function(){return this.key}},{key:"getCurrent",value:function(){return this.current}},{key:"getTotal",value:function(){return this.total}},{key:"getProgress",value:function(){return this.total===0?0:this.current/this.total}},{key:"getFileName",value:function(){return this.target}},{key:"isFinished",value:function(){return this.finished}},{key:"getError",value:function(){return this.error}},{key:"run",value:function(){this.cancel=!1,this.error=""}},{key:"stop",value:function(){this.cancel=!0,this.error="\u7528\u6237\u53D6\u6D88"}}]),T}(),i=function(T){l()(d,T);var m=k()(d);function d(g,v){var c;return B()(this,d),c=m.call(this),h()(P()(c),"type","chunk"),h()(P()(c),"chunkSize",1024*1024),h()(P()(c),"file",void 0),c.file=g,c.target=v,c}return L()(d,[{key:"uploadWithRetry",value:function(){var g=s()(n()().mark(function c(a,E,w){var j,b,O;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:j=5,b="";case 2:if(!(j>0)){p.next=23;break}return p.prev=3,p.next=6,Q(a,E,w,this.chunkSize/20480*1e3);case 6:if(O=p.sent,O.success){p.next=13;break}return j--,b=O.errMsg,p.abrupt("continue",2);case 13:return p.abrupt("return",{success:!0});case 14:p.next=21;break;case 16:return p.prev=16,p.t0=p.catch(3),j--,b=p.t0.toString(),p.abrupt("continue",2);case 21:p.next=2;break;case 23:return p.abrupt("return",{success:!1,errMsg:"retry times exceed, still got error ".concat(b)});case 24:case"end":return p.stop()}},c,this,[[3,16]])}));function v(c,a,E){return g.apply(this,arguments)}return v}()},{key:"run",value:function(){var g=s()(n()().mark(function c(){var a=this,E,w,j,b,O,K,p;return n()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,A()(Z()(d.prototype),"run",this).call(this);case 2:E=this.file,w=this.target,this.total=E.size,j=Math.ceil(this.file.size/this.chunkSize),b=[],O=n()().mark(function ne(){var Y,H,J,q;return n()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(!a.cancel){V.next=2;break}return V.abrupt("return","break");case 2:return Y=K*a.chunkSize,H=Math.min(Y+a.chunkSize,E.size),J=E.slice(Y,H),q=H-Y,V.next=8,y.getToken();case 8:if(b.push(s()(n()().mark(function ae(){var re;return n()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,a.uploadWithRetry(w,Y,J);case 2:re=X.sent,a.current+=q,y.releaseToken(),!re.success&&!a.cancel&&(a.error=re.errMsg);case 6:case"end":return X.stop()}},ae)}))()),!(a.error||a.cancel)){V.next=11;break}return V.abrupt("return","break");case 11:case"end":return V.stop()}},ne)}),K=0;case 9:if(!(K<j)){U.next=17;break}return U.delegateYield(O(),"t0",11);case 11:if(p=U.t0,p!=="break"){U.next=14;break}return U.abrupt("break",17);case 14:K++,U.next=9;break;case 17:return U.next=19,Promise.all(b);case 19:if(!this.cancel){U.next=21;break}return U.abrupt("return");case 21:this.error||(this.finished=!0);case 22:case"end":return U.stop()}},c,this)}));function v(){return g.apply(this,arguments)}return v}()},{key:"stop",value:function(){A()(Z()(d.prototype),"stop",this).call(this)}}]),d}(t),te=function(T){l()(d,T);var m=k()(d);function d(g,v){var c;return B()(this,d),c=m.call(this),h()(P()(c),"type","url"),h()(P()(c),"url",void 0),h()(P()(c),"ws",void 0),c.url=g,c.target=v,c}return L()(d,[{key:"run",value:function(){var g=s()(n()().mark(function c(){var a=this;return n()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,A()(Z()(d.prototype),"run",this).call(this);case 2:return w.next=4,u(this.target,this.url,function(j,b){a.current=j,a.total=b},function(j,b){a.finished=j,!a.cancel&&(a.error=b||"")},function(j){return a.ws=j});case 4:case"end":return w.stop()}},c,this)}));function v(){return g.apply(this,arguments)}return v}()},{key:"stop",value:function(){var v;A()(Z()(d.prototype),"stop",this).call(this),this===null||this===void 0||(v=this.ws)===null||v===void 0||v.close()}}]),d}(t),se=function(T){l()(d,T);var m=k()(d);function d(){var g;B()(this,d);for(var v=arguments.length,c=new Array(v),a=0;a<v;a++)c[a]=arguments[a];return g=m.call.apply(m,[this].concat(c)),h()(P()(g),"type","url_unzip"),g}return L()(d,[{key:"run",value:function(){var g=s()(n()().mark(function c(){var a=this,E,w,j;return n()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return this.cancel=!1,this.error="",O.next=4,u(this.target,this.url,function(K,p){a.current=K,a.total=p},function(K,p){a.finished=K,!a.cancel&&(a.error=p||"")},function(K){return a.ws=K});case 4:if(E=O.sent,w=E.success,!(w&&!this.cancel)){O.next=17;break}return O.next=9,(0,N.Ri)(this.target,this.target.slice(0,-4));case 9:if(j=O.sent,j.success){O.next=14;break}this.error=j.errMsg,O.next=17;break;case 14:return O.next=16,(0,N.Yd)(this.target);case 16:this.finished=!0;case 17:case"end":return O.stop()}},c,this)}));function v(){return g.apply(this,arguments)}return v}()}]),d}(te)},92380:function(G,C,e){e.d(C,{t:function(){return R}});function R(n){for(var f=["B","KB","MB","GB","TB"],s=0;n>1024;)n/=1024,s++;return"".concat(n.toFixed(2)," ").concat(f[s])}},85504:function(G,C,e){e.d(C,{_:function(){return f},i:function(){return n}});var R=e(62435),n={info:void 0,tasks:[],setCtx:function(){}},f=R.createContext(n)},53371:function(G,C,e){e.d(C,{Dy:function(){return f},Us:function(){return n},XP:function(){return R}});function R(s){var _=s.lastIndexOf("/");return _===-1?"/":s.substring(0,_)}function n(s){var _=s.lastIndexOf("/");return _===-1?s:s.substring(_+1)}function f(){for(var s=arguments.length,_=new Array(s),P=0;P<s;P++)_[P]=arguments[P];return _.join("/").replace(/\/+/g,"/")}}}]);