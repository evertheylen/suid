var bt=Object.defineProperty;var l=(e,t)=>bt(e,"name",{value:t,configurable:!0});const y={};function H(e){y.context=e}l(H,"setHydrateContext");function vt(){return{...y.context,id:`${y.context.id}${y.context.count++}-`,count:0}}l(vt,"nextHydrateContext");const St=l((e,t)=>e===t,"equalFn"),$=Symbol("solid-proxy"),fe={equals:St};let ze=tt;const W={},M=1,de=2,Xe={owned:null,cleanups:null,context:null,owner:null},[Pt,kn]=_(!1);var m=null;let re=null,b=null,Z=null,L=null,D=null,Te=0;function V(e,t){const n=b,r=m,o=e.length===0?Xe:{owned:null,cleanups:null,context:null,owner:t||r};m=o,b=null;try{return we(()=>e(()=>ke(o)),!0)}finally{b=n,m=r}}l(V,"createRoot");function _(e,t){t=t?Object.assign({},fe,t):fe;const n={value:e,observers:null,observerSlots:null,pending:W,comparator:t.equals||void 0},r=l(o=>(typeof o=="function"&&(o=o(n.pending!==W?n.pending:n.value)),Re(n,o)),"setter");return[et.bind(n),r]}l(_,"createSignal");function Ae(e,t,n){const r=me(e,t,!0,M);J(r)}l(Ae,"createComputed");function I(e,t,n){const r=me(e,t,!1,M);J(r)}l(I,"createRenderEffect");function Et(e,t,n){ze=Tt;const r=me(e,t,!1,M),o=xe&&De(m,xe.id);o&&(r.suspense=o),r.user=!0,D?D.push(r):queueMicrotask(()=>J(r))}l(Et,"createEffect");function E(e,t,n){n=n?Object.assign({},fe,n):fe;const r=me(e,t,!0,0);return r.pending=W,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,J(r),et.bind(r)}l(E,"createMemo");function At(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={}),n.globalRefetch!==!1&&(se||(se=new Set),se.add(j),m&&z(()=>se.delete(j)));const r=new Set,[o,i]=_(n.initialValue),[c,s]=_(void 0,{equals:!1}),[a,f]=_(!1),[u,w]=_();let h,d=null,P=null,C=null,T=!1,R=typeof e=="function";y.context&&(C=`${y.context.id}${y.context.count++}`,y.load&&(P=y.load(C)));function S(x,g,p,v){return d===x&&(d=null,P&&x===P&&n.onHydrated&&n.onHydrated(v,{value:g}),P=null,w(h=p),A(g)),g}l(S,"loadEnd");function A(x){ne(()=>{i(()=>x),f(!1);for(const g of r.keys())g.decrement();r.clear()})}l(A,"completeLoad");function O(){const x=xe,g=o();if(h)throw h;return b&&!b.user&&x&&Ae(()=>{c(),d&&(x.resolved||r.has(x)||(x.increment(),r.add(x)))}),g}l(O,"read");function j(x=!0){if(x&&T)return;T=!1,w(h=void 0);const g=R?e():e;if(g==null||g===!1){S(d,N(o));return}const p=P||N(()=>t(g,{value:o(),refetching:x}));return typeof p!="object"||!("then"in p)?(S(d,p),p):(d=p,T=!0,queueMicrotask(()=>T=!1),ne(()=>{f(!0),s()}),p.then(v=>S(p,v,void 0,g),v=>S(p,v,v)))}return l(j,"load"),Object.defineProperties(O,{loading:{get(){return a()}},error:{get(){return u()}}}),R?Ae(()=>j(!1)):j(!1),[O,{refetch:j,mutate:i}]}l(At,"createResource");let se;function ne(e){if(Z)return e();let t;const n=Z=[];try{t=e()}finally{Z=null}return we(()=>{for(let r=0;r<n.length;r+=1){const o=n[r];if(o.pending!==W){const i=o.pending;o.pending=W,Re(o,i)}}},!1),t}l(ne,"batch");function N(e){let t,n=b;return b=null,t=e(),b=n,t}l(N,"untrack");function Je(e,t,n){const r=Array.isArray(e);let o,i=n&&n.defer;return c=>{let s;if(r){s=[];for(let f=0;f<e.length;f++)s.push(e[f]())}else s=e();if(i){i=!1;return}const a=N(()=>t(s,o,c));return o=s,a}}l(Je,"on");function Dn(e){Et(()=>N(e))}l(Dn,"onMount");function z(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}l(z,"onCleanup");function Ye(){return b}l(Ye,"getListener");function xt(){return m}l(xt,"getOwner");function Ct(e,t){const n=m;m=e;try{return we(t,!0)}finally{m=n}}l(Ct,"runWithOwner");function Ot(e){const t=b,n=m;return Promise.resolve().then(()=>{b=t,m=n;let r;return ne(e),r?r.done:void 0})}l(Ot,"startTransition");function jt(){return[Pt,Ot]}l(jt,"useTransition");function Qe(e){const t=Symbol("context");return{id:t,Provider:_t(t),defaultValue:e}}l(Qe,"createContext");function _e(e){let t;return(t=De(m,e.id))!==void 0?t:e.defaultValue}l(_e,"useContext");function Ze(e){const t=E(e);return E(()=>Ce(t()))}l(Ze,"children");let xe;function et(){const e=re;if(this.sources&&(this.state||e)){const t=L;L=null,this.state===M||e?J(this):he(this),L=t}if(b){const t=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(t)):(b.sources=[this],b.sourceSlots=[t]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}l(et,"readSignal");function Re(e,t,n){if(Z)return e.pending===W&&Z.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&we(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o];r&&re.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?L.push(i):D.push(i),i.observers&&nt(i)),r||(i.state=M)}if(L.length>1e6)throw L=[],new Error},!1),t}l(Re,"writeSignal");function J(e){if(!e.fn)return;ke(e);const t=m,n=b,r=Te;b=m=e,Lt(e,e.value,r),b=n,m=t}l(J,"updateComputation");function Lt(e,t,n){let r;try{r=e.fn(t)}catch(o){rt(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Re(e,r):e.value=r,e.updatedAt=n)}l(Lt,"runComputation");function me(e,t,n,r=M,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Xe&&(m.owned?m.owned.push(i):m.owned=[i]),i}l(me,"createComputation");function ee(e){const t=re;if(e.state===0||t)return;if(e.state===de||t)return he(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Te);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===M||t)J(e);else if(e.state===de||t){const o=L;L=null,he(e,n[0]),L=o}}l(ee,"runTop");function we(e,t){if(L)return e();let n=!1;t||(L=[]),D?n=!0:D=[],Te++;try{return e()}catch(r){rt(r)}finally{Nt(n)}}l(we,"runUpdates");function Nt(e){L&&(tt(L),L=null),!e&&(D.length?ne(()=>{ze(D),D=null}):D=null)}l(Nt,"completeUpdates");function tt(e){for(let t=0;t<e.length;t++)ee(e[t])}l(tt,"runQueue");function Tt(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:ee(o)}const r=e.length;for(t=0;t<n;t++)ee(e[t]);for(t=r;t<e.length;t++)ee(e[t])}l(Tt,"runUserEffects");function he(e,t){const n=re;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===M||n?o!==t&&ee(o):(o.state===de||n)&&he(o,t))}}l(he,"lookDownstream");function nt(e){const t=re;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=de,r.pure?L.push(r):D.push(r),r.observers&&nt(r))}}l(nt,"markUpstream");function ke(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),c=n.observerSlots.pop();r<o.length&&(i.sourceSlots[c]=r,o[r]=i,n.observerSlots[r]=c)}}if(e.owned){for(t=0;t<e.owned.length;t++)ke(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}l(ke,"cleanNode");function rt(e){throw e}l(rt,"handleError");function De(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:De(e.owner,t):void 0}l(De,"lookup");function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ce(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}l(Ce,"resolveChildren");function _t(e){return l(function(n){let r;return Ae(()=>r=N(()=>(m.context={[e]:n.value},Ze(()=>n.children)))),r},"provider")}l(_t,"createProvider");const Rt=Symbol("fallback");function Fe(e){for(let t=0;t<e.length;t++)e[t]()}l(Fe,"dispose");function Mn(e,t,n={}){let r=[],o=[],i=[],c=0,s=t.length>1?[]:null;return z(()=>Fe(i)),()=>{let a=e()||[],f,u;return N(()=>{let h=a.length,d,P,C,T,R,S,A,O,j;if(h===0)c!==0&&(Fe(i),i=[],r=[],o=[],c=0,s&&(s=[])),n.fallback&&(r=[Rt],o[0]=V(x=>(i[0]=x,n.fallback())),c=1);else if(c===0){for(o=new Array(h),u=0;u<h;u++)r[u]=a[u],o[u]=V(w);c=h}else{for(C=new Array(h),T=new Array(h),s&&(R=new Array(h)),S=0,A=Math.min(c,h);S<A&&r[S]===a[S];S++);for(A=c-1,O=h-1;A>=S&&O>=S&&r[A]===a[O];A--,O--)C[O]=o[A],T[O]=i[A],s&&(R[O]=s[A]);for(d=new Map,P=new Array(O+1),u=O;u>=S;u--)j=a[u],f=d.get(j),P[u]=f===void 0?-1:f,d.set(j,u);for(f=S;f<=A;f++)j=r[f],u=d.get(j),u!==void 0&&u!==-1?(C[u]=o[f],T[u]=i[f],s&&(R[u]=s[f]),u=P[u],d.set(j,u)):i[f]();for(u=S;u<h;u++)u in C?(o[u]=C[u],i[u]=T[u],s&&(s[u]=R[u],s[u](u))):o[u]=V(w);o=o.slice(0,c=h),r=a.slice(0)}return o});function w(h){if(i[u]=h,s){const[d,P]=_(u);return s[u]=P,t(a[u],d)}return t(a[u])}}}l(Mn,"mapArray");let kt=!1;function F(e,t){if(kt&&y.context){const n=y.context;H(vt());const r=N(()=>e(t));return H(n),r}return N(()=>e(t))}l(F,"createComponent");function le(){return!0}l(le,"trueFn");const ot={get(e,t,n){return t===$?n:e.get(t)},has(e,t){return e.has(t)},set:le,deleteProperty:le,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:le,deleteProperty:le}},ownKeys(e){return e.keys()}};function ve(e){return typeof e=="function"?e():e}l(ve,"resolveSource");function $n(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=ve(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ve(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ve(e[n])));return[...new Set(t)]}},ot)}l($n,"mergeProps");function Dt(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),o=t.map(i=>{const c={};for(let s=0;s<i.length;s++){const a=i[s];Object.defineProperty(c,a,r[a]?r[a]:{get(){return e[a]},set(){return!0}})}return c});return o.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},ot)),o}l(Dt,"splitProps");function In(e){let t,n;const r=l(o=>{const i=y.context;if(i){const[s,a]=_();(n||(n=e())).then(f=>{H(i),a(()=>f.default),H()}),t=s}else if(t){const s=t();if(s)return s(o)}else{const[s]=At(()=>(n||(n=e())).then(a=>a.default),{globalRefetch:!1});t=s}let c;return E(()=>(c=t())&&N(()=>{if(!i)return c(o);const s=y.context;H(i);const a=c(o);return H(s),a}))},"wrap");return r.preload=()=>n||((n=e()).then(o=>t=l(()=>o.default,"comp")),n),r}l(In,"lazy");function it(e){let t=!1;const n=E(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return E(()=>{const r=n();if(r){const o=e.children;return(t=typeof o=="function"&&o.length>0)?N(()=>o(r)):o}return e.fallback})}l(it,"Show");function Fn(e){let t=!1;const n=Ze(()=>e.children),r=E(()=>{let o=n();Array.isArray(o)||(o=[o]);for(let i=0;i<o.length;i++){const c=o[i].when;if(c)return[i,c,o[i]]}return[-1]},void 0,{equals:(o,i)=>o[0]===i[0]&&(t?o[1]===i[1]:!o[1]==!i[1])&&o[2]===i[2]});return E(()=>{const[o,i,c]=r();if(o<0)return e.fallback;const s=c.children;return(t=typeof s=="function"&&s.length>0)?N(()=>s(i)):s})}l(Fn,"Switch");function qn(e){return e}l(qn,"Match");const Mt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$t=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Mt]),It=new Set(["innerHTML","textContent","innerText","children"]),Ft={className:"class",htmlFor:"for"},qe={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},qt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Bt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Kt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Bn(e,t){return E(e,void 0,t?void 0:{equals:t})}l(Bn,"memo");function Ht(e,t,n){let r=n.length,o=t.length,i=r,c=0,s=0,a=t[o-1].nextSibling,f=null;for(;c<o||s<i;){if(t[c]===n[s]){c++,s++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===c){const u=i<r?s?n[s-1].nextSibling:n[i-s]:a;for(;s<i;)e.insertBefore(n[s++],u)}else if(i===s)for(;c<o;)(!f||!f.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[i-1]&&n[s]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[s++],t[c++].nextSibling),e.insertBefore(n[--i],u),t[o]=n[i]}else{if(!f){f=new Map;let w=s;for(;w<i;)f.set(n[w],w++)}const u=f.get(t[c]);if(u!=null)if(s<u&&u<i){let w=c,h=1,d;for(;++w<o&&w<i&&!((d=f.get(t[w]))==null||d!==u+h);)h++;if(h>u-s){const P=t[c];for(;s<u;)e.insertBefore(n[s++],P)}else e.replaceChild(n[s++],t[c++])}else c++;else t[c++].remove()}}}l(Ht,"reconcileArrays");const Be="_$DX_DELEGATE";function Kn(e,t,n){let r;return V(o=>{r=o,t===document?e():Oe(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}l(Kn,"render");function Hn(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}l(Hn,"template");function Gt(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,en))}}l(Gt,"delegateEvents");function Ut(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}l(Ut,"setAttribute");function Vt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}l(Vt,"setAttributeNS");function Wt(e,t,n,r){r?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,o=>n[0](n[1],o)):e.addEventListener(t,n)}l(Wt,"addEventListener");function zt(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,c;for(i=0,c=o.length;i<c;i++){const s=o[i];!s||s==="undefined"||t[s]||(Ke(e,s,!1),delete n[s])}for(i=0,c=r.length;i<c;i++){const s=r[i],a=!!t[s];!s||s==="undefined"||n[s]===a||!a||(Ke(e,s,!0),n[s]=a)}return n}l(zt,"classList");function Xt(e,t,n={}){const r=e.style;if(t==null||typeof t=="string")return r.cssText=t;typeof n=="string"&&(n={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}l(Xt,"style");function Jt(e,t,n,r){typeof t=="function"?I(o=>Ge(e,t(),o,n,r)):Ge(e,t,void 0,n,r)}l(Jt,"spread");function Oe(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return X(e,t,r,n);I(o=>X(e,t(),o,n),r)}l(Oe,"insert");function Yt(e,t,n,r,o={}){for(const i in o)if(!(i in t)){if(i==="children")continue;He(e,i,null,o[i],n)}for(const i in t){if(i==="children"){r||X(e,t.children);continue}const c=t[i];o[i]=He(e,i,c,o[i],n)}}l(Yt,"assign");function Qt(e){let t,n;return!y.context||!(t=y.registry.get(n=tn()))?e.cloneNode(!0):(y.completed&&y.completed.add(t),y.registry.delete(n),t)}l(Qt,"getNextElement");function Zt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}l(Zt,"toPropertyName");function Ke(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}l(Ke,"toggleClassKey");function He(e,t,n,r,o){let i,c,s;if(t==="style")return Xt(e,n,r);if(t==="classList")return zt(e,n,r);if(n===r)return r;if(t==="ref")n(e);else if(t.slice(0,3)==="on:")e.addEventListener(t.slice(3),n);else if(t.slice(0,10)==="oncapture:")e.addEventListener(t.slice(10),n,!0);else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),f=qt.has(a);Wt(e,a,n,f),f&&Gt([a])}else if((s=It.has(t))||!o&&(qe[t]||(c=$t.has(t)))||(i=e.nodeName.includes("-")))i&&!c&&!s?e[Zt(t)]=n:e[qe[t]||t]=n;else{const a=o&&t.indexOf(":")>-1&&Kt[t.split(":")[0]];a?Vt(e,a,t,n):Ut(e,Ft[t]||t,n)}return n}l(He,"assignProp");function en(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n!==null;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}l(en,"eventHandler");function Ge(e,t,n={},r,o){return!o&&"children"in t&&I(()=>n.children=X(e,t.children,n.children)),I(()=>Yt(e,t,r,!0,n)),n}l(Ge,"spreadExpression");function X(e,t,n,r,o){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,c=r!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(y.context)return n;if(i==="number"&&(t=t.toString()),c){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=B(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(y.context)return n;n=B(e,n,r)}else{if(i==="function")return I(()=>{let s=t();for(;typeof s=="function";)s=s();n=X(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[];if(je(s,t,o))return I(()=>n=X(e,s,n,r,!0)),()=>n;if(y.context){for(let a=0;a<s.length;a++)if(s[a].parentNode)return n=s}if(s.length===0){if(n=B(e,n,r),c)return n}else Array.isArray(n)?n.length===0?Ue(e,s,r):Ht(e,n,s):(n&&B(e),Ue(e,s));n=s}else if(t instanceof Node){if(y.context&&t.parentNode)return n=c?[t]:t;if(Array.isArray(n)){if(c)return n=B(e,n,r,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}l(X,"insertExpression");function je(e,t,n){let r=!1;for(let o=0,i=t.length;o<i;o++){let c=t[o],s;if(c instanceof Node)e.push(c);else if(!(c==null||c===!0||c===!1))if(Array.isArray(c))r=je(e,c)||r;else if((s=typeof c)=="string")e.push(document.createTextNode(c));else if(s==="function")if(n){for(;typeof c=="function";)c=c();r=je(e,Array.isArray(c)?c:[c])||r}else e.push(c),r=!0;else e.push(document.createTextNode(c.toString()))}return r}l(je,"normalizeIncomingArray");function Ue(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}l(Ue,"appendNodes");function B(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let c=t.length-1;c>=0;c--){const s=t[c];if(o!==s){const a=s.parentNode===e;!i&&!c?a?e.replaceChild(o,s):e.insertBefore(o,n):a&&s.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}l(B,"cleanChildren");function tn(){const e=y.context;return`${e.id}${e.count++}`}l(tn,"getHydrationKey");const nn="http://www.w3.org/2000/svg";function st(e,t=!1){return t?document.createElementNS(nn,e):document.createElement(e)}l(st,"createElement");function Gn(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function o(){if(y.context){const[i,c]=_(!1);return queueMicrotask(()=>c(!0)),()=>i()&&e.children}else return()=>e.children}if(l(o,"renderPortal"),r instanceof HTMLHeadElement){const[i,c]=_(!1),s=l(()=>c(!0),"cleanup");V(a=>Oe(r,()=>i()?a():o()(),null)),z(()=>{y.context?queueMicrotask(s):s()})}else{const i=st(e.isSVG?"g":"div",e.isSVG),c=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"host",{get(){return n.parentNode}}),Oe(c,o()),r.appendChild(i),e.ref&&e.ref(i),z(()=>r.removeChild(i))}return n}l(Gn,"Portal");function Un(e){const[t,n]=Dt(e,["component"]);return E(()=>{const r=t.component;switch(typeof r){case"function":return N(()=>r(n));case"string":const o=Bt.has(r),i=y.context?Qt():st(r,o);return Jt(i,n,o),i}})}l(Un,"Dynamic");function rn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}l(rn,"bindEvent");function on([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}l(on,"intercept");function sn(e,t,n,r){let o=!1;const i=l(s=>typeof s=="string"?{value:s}:s,"wrap"),c=on(_(i(e()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!o&&t(s),s));return n&&z(n((s=e())=>{o=!0,c[1](i(s)),o=!1})),{signal:c,utils:r}}l(sn,"createIntegration");function ln(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:_({value:""})};return e}l(ln,"normalizeIntegration");function cn(){return sn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),n&&window.scrollTo(0,0)},e=>rn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}l(cn,"pathIntegration");const an=/^(?:[a-z0-9]+:)?\/\//i,un=/^\/+|\/+$|\s+/g;function te(e){const t=e.replace(un,"");return t?t.startsWith("?")?t:"/"+t:""}l(te,"normalize");function ce(e,t,n){if(an.test(t))return;const r=te(e),o=n&&te(n);let i="";return!o||t.charAt(0)==="/"?i=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+o:i=o,i+te(t)||"/"}l(ce,"resolvePath");function fn(e,t){if(e==null)throw new Error(t);return e}l(fn,"invariant");function lt(e,t){return te(e).replace(/\/*(\*.*)?$/g,"")+te(t)}l(lt,"joinPaths");function dn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}l(dn,"extractSearchParams");function hn(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),i=o.length;return c=>{const s=c.split("/").filter(Boolean),a=s.length-i;if(a<0||a>0&&r===void 0&&!t)return null;const f={path:i?"":"/",params:{}};for(let u=0;u<i;u++){const w=o[u],h=s[u];if(w[0]===":")f.params[w.slice(1)]=h;else if(w.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;f.path+=`/${h}`}return r&&(f.params[r]=a?s.slice(-a).join("/"):""),f}}l(hn,"createMatcher");function pn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,i)=>o+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}l(pn,"scoreRoute");function ct(e){const t=new Map,n=xt();return new Proxy({},{get(r,o){return t.has(o)||Ct(n,()=>t.set(o,E(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}l(ct,"createMemoObject");const gn=100,at=Qe(),be=Qe(),Me=l(()=>fn(_e(at),"Make sure your app is wrapped in a <Router />"),"useRouter"),ut=l(()=>_e(be)||Me().base,"useRoute"),Vn=l(()=>Me().location,"useLocation");function yn(e,t="",n){const{path:r,component:o,data:i,children:c}=e,s=!c||Array.isArray(c)&&!c.length,a=lt(t,r),f=s?a:a.split("/*",1)[0];return{originalPath:r,pattern:f,element:o?()=>F(o,{}):()=>{const{element:u}=e;return u===void 0&&n?F(n,{}):u},preload:e.component?o.preload:e.preload,data:i,matcher:hn(f,!s)}}l(yn,"createRoute");function mn(e,t=0){return{routes:e,score:pn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const i=e[o],c=i.matcher(n);if(!c)return null;r.unshift({...c,route:i})}return r}}}l(mn,"createBranch");function ft(e,t="",n,r=[],o=[]){const i=Array.isArray(e)?e:[e];for(let c=0,s=i.length;c<s;c++){const a=i[c];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const f=yn(a,t,n);if(r.push(f),a.children)ft(a.children,f.pattern,n,r,o);else{const u=mn([...r],o.length);o.push(u)}r.pop()}}return r.length?o:o.sort((c,s)=>s.score-c.score)}l(ft,"createBranches");function wn(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}l(wn,"getRouteMatches");function bn(e,t){const n=new URL("http://sar"),r=E(a=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),a}},n,{equals:(a,f)=>a.href===f.href}),o=E(()=>r().pathname),i=E(()=>r().search.slice(1)),c=E(()=>r().hash.slice(1)),s=E(()=>"");return{get pathname(){return o()},get search(){return i()},get hash(){return c()},get state(){return t()},get key(){return s()},query:ct(Je(i,()=>dn(r())))}}l(bn,"createLocation");function vn(e,t="",n,r){const{signal:[o,i],utils:c={}}=ln(e),s=c.parsePath||(g=>g),a=c.renderPath||(g=>g),f=ce("",t),u=void 0;if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!o().value&&i({value:f,replace:!0,scroll:!1});const[w,h]=jt(),[d,P]=_(o().value),[C,T]=_(o().state),R=bn(d,C),S=[],A={pattern:f,params:{},path:()=>f,outlet:()=>null,resolvePath(g){return ce(f,g)}};A.data=n&&n({data:void 0,params:{},location:R,navigate:j(A)});function O(g,p,v){N(()=>{if(typeof p=="number"){p&&(c.go?c.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:Y,resolve:Q,scroll:$e,state:q}={replace:!1,resolve:!0,scroll:!0,...v},k=Q?g.resolvePath(p):ce("",p);if(k===void 0)throw new Error(`Path '${p}' is not a routable path`);if(S.length>=gn)throw new Error("Too many redirects");const oe=d();if(k!==oe||q!==C()){const ie=S.push({value:oe,replace:Y,scroll:$e,state:C});h(()=>{P(k),T(q)}).then(()=>{S.length===ie&&x({value:k,state:q})})}})}l(O,"navigateFromRoute");function j(g){return g=g||_e(be)||A,(p,v)=>O(g,p,v)}l(j,"navigatorFactory");function x(g){const p=S[0];p&&((g.value!==p.value||g.state!==p.state)&&i({...g,replace:p.replace,scroll:p.scroll}),S.length=0)}l(x,"navigateEnd"),I(()=>{const{value:g,state:p}=o();g!==N(d)&&h(()=>{P(g),T(p)})});{let g=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const v=p.composedPath().find(Ie=>Ie instanceof Node&&Ie.nodeName.toUpperCase()==="A");if(!v)return;const Y=v instanceof SVGAElement,Q=Y?v.href.baseVal:v.href;if((Y?v.target.baseVal:v.target)||!Q&&!v.hasAttribute("state"))return;const q=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||q&&q.includes("external"))return;const k=Y?new URL(Q,document.baseURI):new URL(Q);if(k.origin!==window.location.origin||f&&k.pathname&&!k.pathname.toLowerCase().startsWith(f.toLowerCase()))return;const oe=s(k.pathname+k.search+k.hash),ie=v.getAttribute("state");p.preventDefault(),O(A,oe,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:ie&&JSON.parse(ie)})};l(g,"handleAnchorClick"),document.addEventListener("click",g),z(()=>document.removeEventListener("click",g))}return{base:A,out:u,location:R,isRouting:w,renderPath:a,parsePath:s,navigatorFactory:j}}l(vn,"createRouterContext");function Sn(e,t,n,r){const{base:o,location:i,navigatorFactory:c}=e,{pattern:s,element:a,preload:f,data:u}=r().route,w=E(()=>r().path),h=ct(()=>r().params);f&&f();const d={parent:t,pattern:s,get child(){return n()},path:w,params:h,outlet:a,resolvePath(P){return ce(o.path(),P,w())}};return d.data=u?u({data:t.data,params:h,location:i,navigate:c(d)}):t.data,d}l(Sn,"createRouteContext");const Wn=l(e=>{const{source:t,url:n,base:r,data:o,out:i}=e,c=t||cn(),s=vn(c,r,o);return F(at.Provider,{value:s,get children(){return e.children}})},"Router"),zn=l(e=>{const t=Me(),n=ut(),r=E(()=>ft(e.children,lt(n.pattern,e.base||""),Pn)),o=E(()=>wn(r(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:a,path:f,params:u})=>({originalPath:a.originalPath,pattern:a.pattern,path:f,params:u})));const i=[];let c;const s=E(Je(o,(a,f,u)=>{let w=f&&a.length===f.length;const h=[];for(let d=0,P=a.length;d<P;d++){const C=f&&f[d],T=a[d];u&&C&&T.route.pattern===C.route.pattern?h[d]=u[d]:(w=!1,i[d]&&i[d](),V(R=>{i[d]=R,h[d]=Sn(t,h[d-1]||n,()=>s()[d+1],()=>o()[d])}))}return i.splice(a.length).forEach(d=>d()),u&&w?u:(c=h[0],h)}));return F(it,{get when(){return s()&&c},children:a=>F(be.Provider,{value:a,get children(){return a.outlet()}})})},"Routes"),Xn=l(e=>e,"Route"),Pn=l(()=>{const e=ut();return F(it,{get when(){return e.child},children:t=>F(be.Provider,{value:t,get children(){return t.outlet()}})})},"Outlet"),dt=Symbol("store-raw"),pe=Symbol("store-node"),En=Symbol("store-name");function ht(e){return e!=null&&typeof e=="object"&&(e[$]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}l(ht,"isWrappable");function ge(e,t=new Set){let n,r,o,i;if(n=e!=null&&e[dt])return n;if(!ht(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let c=0,s=e.length;c<s;c++)o=e[c],(r=ge(o,t))!==o&&(e[c]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const c=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let a=0,f=c.length;a<f;a++)i=c[a],!s[i].get&&(o=e[i],(r=ge(o,t))!==o&&(e[i]=r))}return e}l(ge,"unwrap");function ye(e){let t=e[pe];return t||Object.defineProperty(e,pe,{value:t={}}),t}l(ye,"getDataNodes");function An(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===$||t===pe||t===En||(delete n.value,delete n.writable,n.get=()=>e[$][t]),n}l(An,"proxyDescriptor");function xn(e){if(Ye()){const t=ye(e);(t._||(t._=Le()))()}return Reflect.ownKeys(e)}l(xn,"ownKeys");function Le(){const[e,t]=_(void 0,{equals:!1,internal:!0});return e.$=t,e}l(Le,"createDataNode");function Ve(e,t,n){if(e[t]===n)return;const r=Array.isArray(e),o=e.length,i=n===void 0,c=r||i===t in e;i?delete e[t]:e[t]=n;let s=ye(e),a;(a=s[t])&&a.$(),r&&e.length!==o&&(a=s.length)&&a.$(),c&&(a=s._)&&a.$()}l(Ve,"setProperty");const Cn={get(e,t,n){if(t===dt)return e;if(t===$)return n;const r=e[t];if(t===pe||t==="__proto__")return r;const o=ht(r);if(Ye()&&(typeof r!="function"||e.hasOwnProperty(t))){let i,c;o&&(i=ye(r))&&(c=i._||(i._=Le()),c()),i=ye(e),c=i[t]||(i[t]=Le()),c()}return o?pt(r):r},set(e,t,n){return Ve(e,t,ge(n)),!0},deleteProperty(e,t){return Ve(e,t,void 0),!0},ownKeys:xn,getOwnPropertyDescriptor:An};function pt(e,t){let n=e[$];if(!n){Object.defineProperty(e,$,{value:n=new Proxy(e,Cn)});const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,c=r.length;i<c;i++){const s=r[i];if(o[s].get){const a=o[s].get.bind(n);Object.defineProperty(e,s,{get:a})}if(o[s].set){const a=o[s].set;Object.defineProperty(e,s,{set:l(u=>ne(()=>a.call(n,u)),"set")})}}}return n}l(pt,"wrap");function Jn(e,t){const n=ge(e||{});return pt(n)}l(Jn,"createMutable");function gt(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=gt(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}l(gt,"toVal");function Yn(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=gt(t))&&(r&&(r+=" "),r+=n);return r}l(Yn,"clsx");function G(e){return e&&e.origin?e.origin:"https://stackblitz.com"}l(G,"e");var On="300";function yt(){return Math.random().toString(36).substring(7)}l(yt,"n");function U(e){var t=[];return e&&(e.forceEmbedLayout&&t.push("embed=1"),e.clickToLoad&&t.push("ctl=1"),typeof e.openFile=="string"&&t.push("file="+e.openFile),Array.isArray(e.openFile)&&e.openFile.forEach(function(n){typeof n=="string"&&t.push("file="+n)}),e.view!=="preview"&&e.view!=="editor"||t.push("view="+e.view),e.theme!=="light"&&e.theme!=="dark"||t.push("theme="+e.theme),e.hideExplorer&&t.push("hideExplorer=1"),e.hideNavigation&&t.push("hideNavigation=1"),e.hideDevTools&&t.push("hidedevtools=1"),typeof e.devToolsHeight=="number"&&e.devToolsHeight>=0&&e.devToolsHeight<=100&&t.push("devtoolsheight="+Math.round(e.devToolsHeight))),t.length?"?"+t.join("&"):""}l(U,"i");function Se(e,t,n){if(e.parentNode===null)throw new Error("Invalid Element");t.id=e.id,jn(t,n),e.parentNode.replaceChild(t,e)}l(Se,"o");function Pe(e){if(typeof e=="string"){var t=document.getElementById(e);if(t!==null)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}l(Pe,"r");function Ne(e){return e&&e.newWindow===!1?"_self":"_blank"}l(Ne,"a");function jn(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height=On),e.width||e.setAttribute("style","width:100%;")}l(jn,"d");var mt=l(function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(n){if(n.data.payload.__reqid){var r=n.data.payload.__reqid,o=n.data.payload.__success;if(t.pending[r]){if(delete n.data.payload.__reqid,delete n.data.payload.__success,o){var i=Object.keys(n.data.payload).length===0&&n.data.payload.constructor===Object?null:n.data.payload;t.pending[r].resolve(i)}else{var c=n.data.payload.error?n.data.type+": "+n.data.payload.error:n.data.type;t.pending[r].reject(c)}delete t.pending[r]}}}},"c");mt.prototype.request=function(e){var t=this,n=yt();return new Promise(function(r,o){t.pending[n]={resolve:r,reject:o},e.payload.__reqid=n,t.port.postMessage(e)})};var ae=l(function(e,t){var n=this;this.rdc=new mt(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(r){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}})}}},"p");ae.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},ae.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},ae.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var ue=[],Ln=l(function(e){var t=this;this.id=yt(),this.element=e,this.pending=new Promise(function(n,r){var o=l(function(f){f.data.action&&f.data.action==="SDK_INIT_SUCCESS"&&f.data.id===t.id&&(t.vm=new ae(f.ports[0],f.data.payload),n(t.vm),c())},"i"),i=l(function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")},"o");function c(){window.clearInterval(a),window.removeEventListener("message",o)}l(c,"r"),window.addEventListener("message",o),i();var s=0,a=window.setInterval(function(){if(t.vm)c();else{if(s>=20)return c(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),void ue.forEach(function(f,u){f.id===t.id&&ue.splice(u,1)});s++,i()}},500)}),ue.push(this)},"u"),Nn=l(function(e){var t=e instanceof Element?"element":"id",n=ue.find(function(r){return r[t]===e});return n||null},"l"),We=["angular-cli","create-react-app","javascript","node","polymer","html","typescript","vue"];function K(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}l(K,"f");function wt(e){We.indexOf(e.template)===-1&&console.warn("Unsupported project template, must be one of: "+We.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none!important;"),t.appendChild(K("project[title]",e.title)),t.appendChild(K("project[description]",e.description)),t.appendChild(K("project[template]",e.template)),e.dependencies&&t.appendChild(K("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(K("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach(function(n){t.appendChild(K("project[files]["+n+"]",e.files[n]))}),t}l(wt,"m");function Tn(e,t){var n=wt(e);return n.action=G(t)+"/run"+U(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}l(Tn,"v");function _n(e,t){var n=wt(e);n.action=G(t)+"/run"+U(t),n.target=Ne(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}l(_n,"y");var Ee={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=Nn(e);return t?t.pending:new Ln(e).pending},openGithubProject:function(e,t){window.open(G(t)+"/github/"+e+U(t),Ne(t))},openProject:function(e,t){_n(e,t)},openProjectId:function(e,t){window.open(G(t)+"/edit/"+e+U(t),Ne(t))},embedGithubProject:function(e,t,n){var r=Pe(e),o=document.createElement("iframe");return o.src=G(n)+"/github/"+t+U(n),Se(r,o,n),Ee.connect(o)},embedProject:function(e,t,n){var r=Pe(e),o=Tn(t,n),i=document.createElement("iframe");return Se(r,i,n),i.contentDocument&&i.contentDocument.write(o),Ee.connect(i)},embedProjectId:function(e,t,n){var r=Pe(e),o=document.createElement("iframe");return o.src=G(n)+"/edit/"+t+U(n),Se(r,o,n),Ee.connect(o)}};export{Gt as A,Jt as B,Ut as C,Un as D,qn as M,Gn as P,Xn as R,it as S,F as a,Jn as b,Qe as c,Et as d,_ as e,I as f,E as g,Yn as h,Bn as i,N as j,Ze as k,Dn as l,$n as m,Fn as n,z as o,In as p,zn as q,Oe as r,Dt as s,Hn as t,_e as u,Mn as v,Vn as w,Ee as x,Kn as y,Wn as z};
