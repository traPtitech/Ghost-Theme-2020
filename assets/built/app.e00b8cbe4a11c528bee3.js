/*! For license information please see app.e00b8cbe4a11c528bee3.js.LICENSE.txt */
(()=>{var t={59:function(t){t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,n={rootMargin:"0px",threshold:0,load:function(n){if("picture"===n.nodeName.toLowerCase()){var e=n.querySelector("img"),o=!1;null===e&&(e=document.createElement("img"),o=!0),t&&n.getAttribute("data-iesrc")&&(e.src=n.getAttribute("data-iesrc")),n.getAttribute("data-alt")&&(e.alt=n.getAttribute("data-alt")),o&&n.append(e)}if("video"===n.nodeName.toLowerCase()&&!n.getAttribute("data-src")&&n.children){for(var i=n.children,r=void 0,s=0;s<=i.length-1;s++)(r=i[s].getAttribute("data-src"))&&(i[s].src=r);n.load()}n.getAttribute("data-poster")&&(n.poster=n.getAttribute("data-poster")),n.getAttribute("data-src")&&(n.src=n.getAttribute("data-src")),n.getAttribute("data-srcset")&&n.setAttribute("srcset",n.getAttribute("data-srcset"));var c=",";if(n.getAttribute("data-background-delimiter")&&(c=n.getAttribute("data-background-delimiter")),n.getAttribute("data-background-image"))n.style.backgroundImage="url('"+n.getAttribute("data-background-image").split(c).join("'),url('")+"')";else if(n.getAttribute("data-background-image-set")){var a=n.getAttribute("data-background-image-set").split(c),u=a[0].substr(0,a[0].indexOf(" "))||a[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===a.length?n.style.backgroundImage=u:n.setAttribute("style",(n.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+a+"); background-image: image-set("+a+")")}n.getAttribute("data-toggle-class")&&n.classList.toggle(n.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var o=function(t){return"true"===t.getAttribute("data-loaded")},i=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:n.querySelectorAll(t)};return function(){var t,r,s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=Object.assign({},n,c),u=a.root,l=a.rootMargin,d=a.threshold,f=a.load,p=a.loaded,g=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((t=f,r=p,function(n,i){n.forEach((function(n){(0<n.intersectionRatio||n.isIntersecting)&&(i.unobserve(n.target),o(n.target)||(t(n.target),e(n.target),r(n.target)))}))}),{root:u,rootMargin:l,threshold:d}));for(var h,m=i(s,u),y=0;y<m.length;y++)(h=m[y]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=i(s,u),n=0;n<t.length;n++)o(t[n])||(g?g.observe(t[n]):(f(t[n]),e(t[n]),p(t[n])))},triggerLoad:function(t){o(t)||(f(t),e(t),p(t))},observer:g}}}()}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return t[o].call(r.exports,r,r.exports,e),r.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";var t=e(59),n=e.n(t);const o="splide",i="data-splide",r={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5};function s(t){t.length=0}function c(t){return!d(t)&&"object"==typeof t}function a(t){return Array.isArray(t)}function u(t){return"string"==typeof t}function l(t){return void 0===t}function d(t){return null===t}function f(t){return t instanceof HTMLElement}function p(t){return a(t)?t:[t]}function g(t,n){p(t).forEach(n)}function h(t,n){return t.indexOf(n)>-1}function m(t,n){return t.push(...p(n)),t}const y=Array.prototype;function v(t,n,e){return y.slice.call(t,n,e)}function b(t,n,e){t&&g(n,(n=>{n&&t.classList[e?"add":"remove"](n)}))}function w(t,n){b(t,u(n)?n.split(" "):n,!0)}function _(t,n){g(n,t.appendChild.bind(t))}function x(t,n){g(t,(t=>{const e=n.parentNode;e&&e.insertBefore(t,n)}))}function E(t,n){return f(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function k(t,n){return t?v(t.children).filter((t=>E(t,n))):[]}function S(t,n){return n?k(t,n)[0]:t.firstElementChild}function A(t,n,e){if(t){let o=Object.keys(t);o=e?o.reverse():o;for(let e=0;e<o.length;e++){const i=o[e];if("__proto__"!==i&&!1===n(t[i],i))break}}return t}function L(t){return v(arguments,1).forEach((n=>{A(n,((e,o)=>{t[o]=n[o]}))})),t}function $(t,n){return A(n,((n,e)=>{a(n)?t[e]=n.slice():c(n)?t[e]=$(c(t[e])?t[e]:{},n):t[e]=n})),t}function C(t,n){t&&g(n,(n=>{t.removeAttribute(n)}))}function P(t,n,e){c(n)?A(n,((n,e)=>{P(t,e,n)})):d(e)?C(t,n):t.setAttribute(n,String(e))}function z(t,n,e){const o=document.createElement(t);return n&&(u(n)?w(o,n):P(o,n)),e&&_(e,o),o}function M(t,n,e){if(l(e))return getComputedStyle(t)[n];if(!d(e)){const{style:o}=t;e=`${e}`,o[n]!==e&&(o[n]=e)}}function N(t,n){M(t,"display",n)}function D(t,n){return t.getAttribute(n)}function O(t,n){return t&&t.classList.contains(n)}function T(t){return t.getBoundingClientRect()}function I(t){g(t,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)}))}function j(t){return S((new DOMParser).parseFromString(t,"text/html").body)}function q(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function F(t,n){return t&&t.querySelector(n)}function R(t,n){return v(t.querySelectorAll(n))}function W(t,n){b(t,n,!1)}function B(t){return u(t)?t:t?`${t}px`:""}function H(t,n=""){if(!t)throw new Error(`[splide] ${n}`)}function V(t){setTimeout(t)}const X=()=>{};function Y(t){return requestAnimationFrame(t)}const{min:G,max:U,floor:J,ceil:K,abs:Q}=Math;function Z(t,n,e,o){const i=G(n,e),r=U(n,e);return o?i<t&&t<r:i<=t&&t<=r}function tt(t,n,e){const o=G(n,e),i=U(n,e);return G(U(o,t),i)}function nt(t){return+(t>0)-+(t<0)}function et(t,n){return g(n,(n=>{t=t.replace("%s",`${n}`)})),t}function ot(t){return t<10?`0${t}`:`${t}`}const it={};function rt(t){return`${t}${ot(it[t]=(it[t]||0)+1)}`}const st="mounted",ct="ready",at="move",ut="moved",lt="shifted",dt="click",ft="visible",pt="hidden",gt="slide:keydown",ht="refresh",mt="updated",yt="resize",vt="resized",bt="repositioned",wt="scroll",_t="scrolled",xt="destroy",Et="navigation:mounted",kt="lazyload:loaded";function St(t){const{event:n}=t,e={};let o=[];function i(t,n,e){r(t,n,((t,n)=>{o=o.filter((o=>!!(o[0]!==t||o[1]!==n||e&&o[2]!==e)||(t.removeEventListener(n,o[2],o[3]),!1)))}))}function r(t,n,e){g(t,(t=>{t&&n.split(" ").forEach(e.bind(null,t))}))}function s(){o=o.filter((t=>i(t[0],t[1]))),n.offBy(e)}return n.on(xt,s,e),{on:function(t,o,i){n.on(t,o,e,i)},off:function(t){n.off(t,e)},emit:n.emit,bind:function(t,n,e,i){r(t,n,((t,n)=>{o.push([t,n,e,i]),t.addEventListener(n,e,i)}))},unbind:i,destroy:s}}function At(t,n,e,o){const{now:i}=Date;let r,s,c=0,a=!0,u=0;function l(){if(!a){const s=i()-r;if(s>=t?(c=1,r=i()):c=s/t,e&&e(c),1===c&&(n(),o&&++u>=o))return d();Y(l)}}function d(){a=!0}function f(){cancelAnimationFrame(s),c=0,s=0,a=!0}return{start:function(n){!n&&f(),r=i()-(n?c*t:0),a=!1,Y(l)},rewind:function(){r=i(),c=0,e&&e(c)},pause:d,cancel:f,set:function(n){t=n},isPaused:function(){return a}}}function Lt(t,n){let e;return function(){e||(e=At(n||0,(()=>{t.apply(this,arguments),e=null}),null,1),e.start())}}const $t="ttb",Ct={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function Pt(t,n,e){return{resolve:function(t,n){const{direction:o}=e;return Ct[t]["rtl"!==o||n?o===$t?0:-1:1]||t},orient:function(t){return t*("rtl"===e.direction?1:-1)}}}const zt=o,Mt="splide__slide",Nt="splide__slide--clone",Dt="splide__arrows",Ot="splide__arrow",Tt="splide__arrow--prev",It="splide__arrow--next",jt="splide__pagination",qt="is-active",Ft="is-prev",Rt="is-next",Wt="is-visible",Bt="is-loading",Ht=[qt,Wt,Ft,Rt,Bt],Vt={slide:Mt,clone:Nt,arrows:Dt,arrow:Ot,prev:Tt,next:It,pagination:jt,page:"splide__pagination__page",spinner:"splide__spinner"};const Xt="role",Yt="aria-controls",Gt="aria-current",Ut="aria-label",Jt="aria-hidden",Kt="tabindex",Qt="aria-orientation",Zt=[Xt,Yt,Gt,Ut,Jt,Qt,Kt,"disabled"],tn="slide",nn="loop",en="fade";function on(t,n,e,o){const{on:i,emit:r,bind:s,destroy:c}=St(t),{Components:a,root:u,options:l}=t,{isNavigation:d,updateOnMove:f}=l,{resolve:p}=a.Direction,g=D(o,"style"),h=e>-1,m=S(o,".splide__slide__container"),y=l.focusableNodes&&R(o,l.focusableNodes);let v;function w(){const i=h?e:n,r=et(l.i18n.slideX,i+1),s=t.splides.map((t=>t.splide.root.id)).join(" ");P(o,Ut,r),P(o,Yt,s),P(o,Xt,"menuitem"),E(k())}function _(){v||x()}function x(){if(!v){const{index:e}=t;E(k()),function(t){const n=!t&&(!k()||h);P(o,Jt,n||null),P(o,Kt,!n&&l.slideFocus?0:null),y&&y.forEach((t=>{P(t,Kt,n?-1:null)}));t!==O(o,Wt)&&(b(o,Wt,t),r(t?ft:pt,A))}(function(){if(t.is(en))return k();const n=T(a.Elements.track),e=T(o),i=p("left"),r=p("right");return J(n[i])<=K(e[i])&&J(e[r])<=K(n[r])}()),b(o,Ft,n===e-1),b(o,Rt,n===e+1)}}function E(t){t!==O(o,qt)&&(b(o,qt,t),d&&P(o,Gt,t||null),r(t?"active":"inactive",A))}function k(){const{index:o}=t;return o===n||l.cloneStatus&&o===e}const A={index:n,slideIndex:e,slide:o,container:m,isClone:h,mount:function(){h||(o.id=`${u.id}-slide${ot(n+1)}`),s(o,"click keydown",(t=>{r("click"===t.type?dt:gt,A,t)})),i([ht,bt,lt,ut,_t],x),i(Et,w),f&&i(at,_)},destroy:function(){v=!0,c(),W(o,Ht),C(o,Zt),P(o,"style",g)},update:x,style:function(t,n,e){M(e&&m||o,t,n)},isWithin:function(e,o){let i=Q(e-n);return h||!l.rewind&&!t.is(nn)||(i=G(i,t.length-i)),i<=o}};return A}const rn="http://www.w3.org/2000/svg",sn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";const cn={passive:!1,capture:!0},an="touchmove mousemove",un="touchend touchcancel mouseup";const ln=["Left","Right","Up","Down"],dn="keydown";const fn="data-splide-lazy",pn="data-splide-lazy-srcset";const gn=[" ","Enter","Spacebar"];var hn=Object.freeze({__proto__:null,Options:function(t,n,e){const o=Lt(u);let r,s,c;function a(t){t&&removeEventListener("resize",o)}function u(){const n=(o=t=>t[1].matches,v(s).filter(o)[0]||[]);var o;n[0]!==c&&function(n){const o=e.breakpoints[n]||r;o.destroy?(t.options=r,t.destroy("completely"===o.destroy)):(t.state.is(5)&&(a(!0),t.mount()),t.options=o)}(c=n[0])}return{setup:function(){try{$(e,JSON.parse(D(t.root,i)))}catch(t){H(!1,t.message)}r=$({},e);const{breakpoints:n}=e;if(n){const t="min"===e.mediaQuery;s=Object.keys(n).sort(((n,e)=>t?+e-+n:+n-+e)).map((n=>[n,matchMedia(`(${t?"min":"max"}-width:${n}px)`)])),u()}},mount:function(){s&&addEventListener("resize",o)},destroy:a}},Direction:Pt,Elements:function(t,n,e){const{on:i}=St(t),{root:r}=t,c={},a=[];let u,l,d,f;function p(){!function(){l=S(r,".splide__slider"),d=F(r,".splide__track"),f=S(d,".splide__list"),H(d&&f,"A track/list element is missing."),m(a,k(f,`.splide__slide:not(.${Nt})`));const t=v(".splide__autoplay"),n=v(".splide__arrows");L(c,{root:r,slider:l,track:d,list:f,slides:a,arrows:n,autoplay:t,prev:F(n,".splide__arrow--prev"),next:F(n,".splide__arrow--next"),bar:F(v(".splide__progress"),".splide__progress__bar"),play:F(t,".splide__play"),pause:F(t,".splide__pause")})}(),function(){const t=r.id||rt(o);r.id=t,d.id=d.id||`${t}-track`,f.id=f.id||`${t}-list`}(),w(r,u=b())}function g(){[r,d,f].forEach((t=>{C(t,"style")})),s(a),W(r,u)}function h(){g(),p()}function y(){W(r,u),w(r,u=b())}function v(t){return S(r,t)||S(l,t)}function b(){return[`${zt}--${e.type}`,`${zt}--${e.direction}`,e.drag&&`${zt}--draggable`,e.isNavigation&&`${zt}--nav`,qt]}return L(c,{setup:p,mount:function(){i(ht,h,8),i(mt,y)},destroy:g})},Slides:function(t,n,e){const{on:o,emit:i,bind:r}=St(t),{slides:c,list:a}=n.Elements,l=[];function d(){c.forEach(((t,n)=>{v(t,n,-1)}))}function m(){k((t=>{t.destroy()})),s(l)}function y(){m(),d()}function v(n,e,o){const i=on(t,e,o,n);i.mount(),l.push(i)}function b(t){return t?S((t=>!t.isClone)):l}function k(t,n){b(n).forEach(t)}function S(t){return l.filter("function"==typeof t?t:n=>u(t)?E(n.slide,t):h(p(t),n.index))}return{mount:function(){d(),o(ht,y),o([st,ht],(()=>{l.sort(((t,n)=>t.index-n.index))}))},destroy:m,update:function(){k((t=>{t.update()}))},register:v,get:b,getIn:function(t){const{Controller:o}=n,i=o.toIndex(t),r=o.hasFocus()?1:e.perPage;return S((t=>Z(t.index,i,i+r-1)))},getAt:function(t){return S(t)[0]},add:function(t,n){g(t,(t=>{if(u(t)&&(t=j(t)),f(t)){const o=c[n];o?x(t,o):_(a,t),w(t,e.classes.slide),function(t,n){const e=R(t,"img");let{length:o}=e;o?e.forEach((t=>{r(t,"load error",(()=>{--o||n()}))})):n()}(t,i.bind(null,yt))}})),i(ht)},remove:function(t){I(S(t).map((t=>t.slide))),i(ht)},forEach:k,filter:S,style:function(t,n,e){k((o=>{o.style(t,n,e)}))},getLength:function(t){return t?c.length:l.length},isEnough:function(){return l.length>e.perPage}}},Layout:function(t,n,e){const{on:o,bind:i,emit:r}=St(t),{Slides:s}=n,{resolve:a}=n.Direction,{root:u,track:l,list:d}=n.Elements,{getAt:f}=s;let p,g;function h(){g=null,p=e.direction===$t,M(u,"maxWidth",B(e.width)),M(l,a("paddingLeft"),y(!1)),M(l,a("paddingRight"),y(!0)),m()}function m(){const t=T(u);g&&g.width===t.width&&g.height===t.height||(M(l,"height",function(){let t="";p&&(t=v(),H(t,"height or heightRatio is missing."),t=`calc(${t} - ${y(!1)} - ${y(!0)})`);return t}()),s.style(a("marginRight"),B(e.gap)),s.style("width",(e.autoWidth?"":B(e.fixedWidth)||(p?"":b()))||null),s.style("height",B(e.fixedHeight)||(p?e.autoHeight?"":b():v())||null,!0),g=t,r(vt))}function y(t){const{padding:n}=e,o=a(t?"right":"left");return n&&B(n[o]||(c(n)?0:n))||"0px"}function v(){return B(e.height||T(d).width*e.heightRatio)}function b(){const t=B(e.gap);return`calc((100%${t&&` + ${t}`})/${e.perPage||1}${t&&` - ${t}`})`}function w(t,n){const e=f(t);if(e){const t=T(e.slide)[a("right")],o=T(d)[a("left")];return Q(t-o)+(n?0:_())}return 0}function _(){const t=f(0);return t&&parseFloat(M(t.slide,a("marginRight")))||0}return{mount:function(){h(),i(window,"resize load",Lt(r.bind(this,yt))),o([mt,ht],h),o(yt,m)},listSize:function(){return T(d)[a("width")]},slideSize:function(t,n){const e=f(t||0);return e?T(e.slide)[a("width")]+(n?0:_()):0},sliderSize:function(){return w(t.length-1,!0)-w(-1,!0)},totalSize:w,getPadding:function(t){return parseFloat(M(l,a("padding"+(t?"Right":"Left"))))||0}}},Clones:function(t,n,e){const{on:o,emit:i}=St(t),{Elements:r,Slides:c}=n,{resolve:a}=n.Direction,l=[];let d;function f(){(d=y())&&(!function(n){const o=c.get().slice(),{length:i}=o;if(i){for(;o.length<n;)m(o,o);m(o.slice(-n),o.slice(0,n)).forEach(((s,a)=>{const u=a<n,d=function(n,o){const i=n.cloneNode(!0);return w(i,e.classes.clone),i.id=`${t.root.id}-clone${ot(o+1)}`,i}(s.slide,a);u?x(d,o[0].slide):_(r.list,d),m(l,d),c.register(d,a-n+(u?0:i),s.index)}))}}(d),i(yt))}function p(){I(l),s(l)}function g(){p(),f()}function h(){d<y()&&i(ht)}function y(){let{clones:n}=e;if(t.is(nn)){if(!n){const o=function(t,n){if(u(n)){const e=z("div",{style:`width: ${n}; position: absolute;`},t);n=T(e).width,I(e)}return n}(r.list,e[a("fixedWidth")]);n=(o&&K(T(r.track)[a("width")]/o)||e[a("autoWidth")]&&t.length||e.perPage)*(e.drag?(e.flickMaxPages||1)+1:2)}}else n=0;return n}return{mount:function(){f(),o(ht,g),o([mt,yt],h)},destroy:p}},Move:function(t,n,e){const{on:o,emit:i}=St(t),{slideSize:r,getPadding:s,totalSize:c,listSize:a,sliderSize:u}=n.Layout,{resolve:d,orient:f}=n.Direction,{list:p,track:g}=n.Elements;let h;function m(){E()||(n.Scroll.cancel(),y(t.index),i(bt))}function y(t){v(w(t,!0))}function v(n,e){if(!t.is(en)){const o=e?n:function(n){if(t.is(nn)){const t=f(n-_()),e=k(!1,n)&&t<0,o=k(!0,n)&&t>0;(e||o)&&(n=b(n,o))}return n}(n);p.style.transform=`translate${d("X")}(${o}px)`,n!==o&&i(lt)}}function b(t,n){const e=t-x(n),o=u();return t-=f(o*(K(Q(e)/o)||1))*(n?1:-1)}function w(n,o){const i=f(c(n-1)-function(t){const{focus:n}=e;return"center"===n?(a()-r(t,!0))/2:+n*r(t)||0}(n));return o?function(n){e.trimSpace&&t.is(tn)&&(n=tt(n,0,f(u()-a())));return n}(i):i}function _(){const t=d("left");return T(p)[t]-T(g)[t]+f(s(!1))}function x(t){return w(t?n.Controller.getEnd():0,!!e.trimSpace)}function E(){return t.state.is(4)&&e.waitForTransition}function k(t,n){n=l(n)?_():n;const e=!0!==t&&f(n)<f(x(!1)),o=!1!==t&&f(n)>f(x(!0));return e||o}return{mount:function(){h=n.Transition,o([st,vt,mt,ht],m)},destroy:function(){C(p,"style")},move:function(o,r,s,c){if(!E()){const{set:a}=t.state,u=_();o!==r&&(h.cancel(),v(b(u,o>r),!0)),a(4),i(at,r,s,o),h.start(r,(()=>{a(3),i(ut,r,s,o),"move"===e.trimSpace&&o!==s&&u===_()?n.Controller.go(o>s?">":"<",!1,c):c&&c()}))}},jump:y,translate:v,shift:b,cancel:function(){v(_()),h.cancel()},toIndex:function(t){const e=n.Slides.get();let o=0,i=1/0;for(let n=0;n<e.length;n++){const r=e[n].index,s=Q(w(r,!0)-t);if(!(s<=i))break;i=s,o=r}return o},toPosition:w,getPosition:_,getLimit:x,isBusy:E,exceededLimit:k}},Controller:function(t,n,e){const{on:o}=St(t),{Move:i}=n,{getPosition:r,getLimit:s}=i,{isEnough:c,getLength:a}=n.Slides,d=t.is(nn),f=t.is(tn);let p,g,h,m=e.start||0,y=m;function v(){p=a(!0),g=e.perMove,h=e.perPage,m=tt(m,0,p-1)}function b(t,e,o,r,s){const c=e?t:$(t);n.Scroll.scroll(e||o?i.toPosition(c,!0):t,r,(()=>{C(i.toIndex(i.getPosition())),s&&s()}))}function w(t){return x(!1,t)}function _(t){return x(!0,t)}function x(t,n){const e=g||(P()?1:h),o=E(m+e*(t?-1:1),m);return-1!==o||!f||(i=r(),c=s(!t),a=1,Q(i-c)<a)?n?o:S(o):t?0:k();var i,c,a}function E(t,n,o){if(c()){const i=k();t<0||t>i?t=Z(0,t,n,!0)||Z(i,n,t,!0)?A(L(t)):d?g||P()?t:t<0?-(p%h||h):p:e.rewind?t<0?i:0:-1:o||t===n||(t=g?t:A(L(n)+(t<n?-1:1)))}else t=-1;return t}function k(){let t=p-h;return(P()||d&&g)&&(t=p-1),U(t,0)}function S(t){return d?c()?t%p+(t<0?p:0):-1:t}function A(t){return tt(P()?t:h*t,0,k())}function L(t){return P()||(t=Z(t,p-h,p-1)?p-1:t,t=J(t/h)),t}function $(t){const n=i.toIndex(t);return f?tt(n,0,k()):n}function C(t){t!==m&&(y=m,m=t)}function P(){return!l(e.focus)||e.isNavigation}return{mount:function(){v(),o([mt,ht],v,9)},go:function(t,n,o){const r=function(t){let n=m;if(u(t)){const[,e,o]=t.match(/([+\-<>])(\d+)?/)||[];"+"===e||"-"===e?n=E(m+ +`${e}${+o||1}`,m,!0):">"===e?n=o?A(+o):w(!0):"<"===e&&(n=_(!0))}else n=d?t:tt(t,0,k());return n}(t);if(e.useScroll)b(r,!0,!0,e.speed,o);else{const t=S(r);t>-1&&!i.isBusy()&&(n||t!==m)&&(C(t),i.move(r,t,y,o))}},scroll:b,getNext:w,getPrev:_,getAdjacent:x,getEnd:k,setIndex:C,getIndex:function(t){return t?y:m},toIndex:A,toPage:L,toDest:$,hasFocus:P}},Arrows:function(t,n,e){const{on:o,bind:i,emit:r}=St(t),{classes:s,i18n:c}=e,{Elements:a,Controller:u}=n;let l,d=a.arrows,f=a.prev,p=a.next;const g={};function h(){if(e.arrows&&(f&&p||(d=z("div",s.arrows),f=m(!0),p=m(!1),l=!0,_(d,[f,p]),x(d,S("slider"===e.arrows&&a.slider||t.root)))),f&&p)if(g.prev)N(d,!1===e.arrows?"none":"");else{const{id:t}=a.track;P(f,Yt,t),P(p,Yt,t),g.prev=f,g.next=p,function(){const{go:t}=u;o([st,ut,mt,ht,_t],y),i(p,"click",(()=>{t(">",!0)})),i(f,"click",(()=>{t("<",!0)}))}(),r("arrows:mounted",f,p)}}function m(t){return j(`<button class="${s.arrow} ${t?s.prev:s.next}" type="button"><svg xmlns="${rn}" viewBox="0 0 40 40" width="40" height="40"><path d="${e.arrowPath||sn}" />`)}function y(){const n=t.index,e=u.getPrev(),o=u.getNext(),i=e>-1&&n<e?c.last:c.prev,s=o>-1&&n>o?c.first:c.next;f.disabled=e<0,p.disabled=o<0,P(f,Ut,i),P(p,Ut,s),r("arrows:updated",f,p,e,o)}return{arrows:g,mount:function(){h(),o(mt,h)},destroy:function(){l?I(d):(C(f,Zt),C(p,Zt))}}},Autoplay:function(t,n,e){const{on:o,bind:i,emit:r}=St(t),s=At(e.interval,t.go.bind(t,">"),(function(t){const{bar:n}=a;n&&M(n,"width",100*t+"%"),r("autoplay:playing",t)})),{isPaused:c}=s,{Elements:a}=n;let u,l,d;function f(t){const n=t?"pause":"play",o=a[n];o&&(P(o,Yt,a.track.id),P(o,Ut,e.i18n[n]),i(o,"click",t?g:p))}function p(){c()&&n.Slides.isEnough()&&(s.start(!e.resetProgress),l=u=d=!1,r("autoplay:play"))}function g(t=!0){c()||(s.pause(),r("autoplay:pause")),d=t}function h(){d||(u||l?g(!1):p())}function m(){const o=n.Slides.getAt(t.index);s.set(o&&+D(o.slide,"data-splide-interval")||e.interval)}return{mount:function(){const{autoplay:t}=e;t&&(f(!0),f(!1),function(){const{root:t}=a;e.pauseOnHover&&i(t,"mouseenter mouseleave",(t=>{u="mouseenter"===t.type,h()}));e.pauseOnFocus&&i(t,"focusin focusout",(t=>{l="focusin"===t.type,h()}));o([at,wt,ht],s.rewind),o(at,m)}(),"pause"!==t&&p())},destroy:s.cancel,play:p,pause:g,isPaused:c}},Cover:function(t,n,e){const{on:o}=St(t);function i(t){n.Slides.forEach((n=>{const e=S(n.container||n.slide,"img");e&&e.src&&r(t,e,n)}))}function r(t,n,e){e.style("background",t?`center/cover no-repeat url("${n.src}")`:"",!0),N(n,t?"none":"")}return{mount:function(){e.cover&&(o(kt,((t,n)=>{r(!0,t,n)})),o([st,mt,ht],i.bind(null,!0)))},destroy:function(){i(!1)}}},Scroll:function(t,n,e){const{on:o,emit:i}=St(t),{Move:r}=n,{getPosition:s,getLimit:c,exceededLimit:a}=r;let u,l;function d(n,o,g,h){const m=s();let y=1;var v;o=o||(v=Q(n-m),U(v/1.5,800)),l=g,p(),u=At(o,f,(o=>{const i=s(),u=(m+(n-m)*function(t){const{easingFunc:n}=e;return n?n(t):1-Math.pow(1-t,4)}(o)-s())*y;var l;r.translate(i+u),t.is(tn)&&!h&&a()&&(y*=.6,Q(u)<10&&(l=a(!1),d(c(!l),600,null,!0)))}),1),i(wt),u.start()}function f(){const n=s(),e=r.toIndex(n);Z(e,0,t.length-1)||r.translate(r.shift(n,e>0),!0),l&&l(),i(_t)}function p(){u&&u.cancel()}function g(){u&&!u.isPaused()&&(p(),f())}return{mount:function(){o(at,p),o([mt,ht],g)},destroy:p,scroll:d,cancel:g}},Drag:function(t,n,e){const{on:o,emit:i,bind:r,unbind:s}=St(t),{Move:a,Scroll:u,Controller:l}=n,{track:d}=n.Elements,{resolve:f,orient:p}=n.Direction,{getPosition:g,exceededLimit:h}=a;let m,y,v,b,w,_,x,k,S,A=!1;function L(){const{drag:t}=e;I(!t),w="free"===t}function $(t){if(!k){const{noDrag:n}=e,o=T(t),i=!n||!E(t.target,n);x=!1,!i||!o&&t.button||(a.isBusy()?q(t,!0):(S=o?d:window,v=null,b=null,r(S,an,C,cn),r(S,un,P,cn),a.cancel(),u.cancel(),z(t)))}}function C(n){if(b||i("drag"),b=n,n.cancelable){const o=D(n)-D(y);if(_){a.translate(m+function(n){return n/(A&&t.is(tn)?5:1)}(o));const e=O(n)-O(y)>200,r=A!==(A=h());(e||r)&&z(n),i("dragging"),x=!0,q(n)}else{let{dragMinThreshold:t}=e;t=c(t)?t:{mouse:0,touch:+t||10},_=Q(o)>(T(n)?t.touch:t.mouse),N()&&q(n)}}}function P(o){s(S,an,C),s(S,un,P);const{index:r}=t;if(b){if(_||o.cancelable&&N()){const i=function(n){if(t.is(nn)||!A){const t=y===b&&v||y,e=D(b)-D(t),o=O(n)-O(t),i=O(n)-O(b)<200;if(o&&i)return e/o}return 0}(o),s=function(t){return g()+nt(t)*G(Q(t)*(e.flickPower||600),w?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(i);w?l.scroll(s):t.is(en)?l.go(r+p(nt(i))):l.go(l.toDest(s),!0),q(o)}i("dragged")}else w||g()===a.toPosition(r)||l.go(r,!0);_=!1}function z(t){v=y,y=t,m=g()}function M(t){!k&&x&&q(t,!0)}function N(){return Q(D(b)-D(y))>Q(D(b,!0)-D(y,!0))}function D(t,n){return(T(t)?t.touches[0]:t)[`page${f(n?"Y":"X")}`]}function O(t){return t.timeStamp}function T(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function I(t){k=t}return{mount:function(){r(d,an,X,cn),r(d,un,X,cn),r(d,"touchstart mousedown",$,cn),r(d,"click",M,{capture:!0}),r(d,"dragstart",q),o([st,mt],L)},disable:I,isDragging:function(){return _}}},Keyboard:function(t,n,e){const{on:o,bind:i,unbind:r}=St(t),{root:s}=t,{resolve:c}=n.Direction;let a,u;function l(){const{keyboard:t}=e;t&&("focused"===t?(a=s,P(s,Kt,0)):a=window,i(a,dn,m))}function d(){r(a,dn),f(a)&&C(a,Kt)}function p(){const t=u;u=!0,V((()=>{u=t}))}function g(){d(),l()}function m(n){if(!u){const{key:e}=n,o=h(ln,e)?`Arrow${e}`:e;o===c("ArrowLeft")?t.go("<"):o===c("ArrowRight")&&t.go(">")}}return{mount:function(){l(),o(mt,g),o(at,p)},destroy:d,disable:function(t){u=t}}},LazyLoad:function(t,n,e){const{on:o,off:i,bind:r,emit:s}=St(t),c="sequential"===e.lazyLoad;let a=[],u=0;function l(){f(),d()}function d(){n.Slides.forEach((t=>{R(t.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((n=>{const o=D(n,fn),i=D(n,pn);if(o!==n.src||i!==n.srcset){const r=e.classes.spinner,s=n.parentElement,c=S(s,`.${r}`)||z("span",r,s);P(c,Xt,"presentation"),a.push({_img:n,_Slide:t,src:o,srcset:i,_spinner:c}),!n.src&&N(n,"none")}}))})),c&&h()}function f(){u=0,a=[]}function p(){a=a.filter((n=>{const o=e.perPage*((e.preloadPages||1)+1)-1;return!n._Slide.isWithin(t.index,o)||g(n)})),a.length||i(ut)}function g(t){const{_img:n}=t;w(t._Slide.slide,Bt),r(n,"load error",(n=>{!function(t,n){const{_Slide:e}=t;W(e.slide,Bt),n||(I(t._spinner),N(t._img,""),s(kt,t._img,e),s(yt));c&&h()}(t,"error"===n.type)})),["src","srcset"].forEach((e=>{t[e]&&(P(n,e,t[e]),C(n,"src"===e?fn:pn))}))}function h(){u<a.length&&g(a[u++])}return{mount:function(){e.lazyLoad&&(d(),o(ht,l),c||o([st,ht,ut,_t],p))},destroy:f}},Pagination:function(t,n,e){const{on:o,emit:i,bind:r,unbind:c}=St(t),{Slides:a,Elements:u,Controller:l}=n,{hasFocus:d,getIndex:f}=l,p=[];let g;function h(){m(),e.pagination&&a.isEnough()&&(!function(){const{length:n}=t,{classes:o,i18n:i,perPage:s}=e,c="slider"===e.pagination&&u.slider||u.root,l=d()?n:K(n/s);g=z("ul",o.pagination,c);for(let t=0;t<l;t++){const n=z("li",null,g),e=z("button",{class:o.page,type:"button"},n),c=a.getIn(t).map((t=>t.slide.id)),u=!d()&&s>1?i.pageX:i.slideX;r(e,"click",y.bind(null,t)),P(e,Yt,c.join(" ")),P(e,Ut,et(u,t+1)),p.push({li:n,button:e,page:t})}}(),i("pagination:mounted",{list:g,items:p},v(t.index)),b())}function m(){g&&(I(g),p.forEach((t=>{c(t.button,"click")})),s(p),g=null)}function y(t){l.go(`>${t}`,!0,(()=>{const n=a.getAt(l.toIndex(t));var e;n&&((e=n.slide).setActive&&e.setActive()||e.focus({preventScroll:!0}))}))}function v(t){return p[l.toPage(t)]}function b(){const t=v(f(!0)),n=v(f());t&&(W(t.button,qt),C(t.button,Gt)),n&&(w(n.button,qt),P(n.button,Gt,!0)),i("pagination:updated",{list:g,items:p},t,n)}return{items:p,mount:function(){h(),o([mt,ht],h),o([at,_t],b)},destroy:m,getAt:v,update:b}},Sync:function(t,n,e){const{list:o}=n.Elements,i=[];function r(){t.splides.forEach((n=>{var e;!n.isParent&&(e=n.splide,[t,e].forEach((n=>{const o=St(n),r=n===t?e:t;o.on(at,((t,n,e)=>{r.go(r.is(nn)?e:t)})),i.push(o)})))})),e.isNavigation&&function(){const n=St(t),{on:e}=n;e(dt,u),e(gt,l),e([st,mt],a),P(o,Xt,"menu"),i.push(n),n.emit(Et,t.splides)}()}function c(){C(o,Zt),i.forEach((t=>{t.destroy()})),s(i)}function a(){P(o,Qt,e.direction!==$t?"horizontal":null)}function u(n){t.go(n.index)}function l(t,n){h(gn,n.key)&&(u(t),q(n))}return{mount:r,destroy:c,remount:function(){c(),r()}}},Wheel:function(t,n,e){const{bind:o}=St(t);function i(o){if(o.cancelable){const{deltaY:i}=o;if(i){const r=i<0;t.go(r?"<":">"),function(o){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(o)}(r)&&q(o)}}}return{mount:function(){e.wheel&&o(n.Elements.track,"wheel",i,cn)}}}});const mn={type:"slide",speed:400,waitForTransition:!0,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,keyboard:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:Vt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function yn(t,n,e){const{on:o}=St(t);return{mount:function(){o([st,ht],(()=>{V((()=>{n.Slides.style("transition",`opacity ${e.speed}ms ${e.easing}`)}))}))},start:function(t,e){const{track:o}=n.Elements;M(o,"height",B(T(o).height)),V((()=>{e(),M(o,"height","")}))},cancel:X}}function vn(t,n,e){const{bind:o}=St(t),{Move:i,Controller:r}=n,{list:s}=n.Elements;let c;function a(){u("")}function u(t){M(s,"transition",t)}return{mount:function(){o(s,"transitionend",(t=>{t.target===s&&c&&(a(),c())}))},start:function(n,o){const s=i.toPosition(n,!0),a=i.getPosition(),l=function(n){const{rewindSpeed:o}=e;if(t.is(tn)&&o){const t=r.getIndex(!0),e=r.getEnd();if(0===t&&n>=e||t>=e&&0===n)return o}return e.speed}(n);Q(s-a)>=1&&l>=1?(u(`transform ${l}ms ${e.easing}`),i.translate(s,!0),c=o):(i.jump(n),o())},cancel:a}}const bn=class{constructor(t,n){this.event=function(){let t={};function n(n,o){e(n,((n,e)=>{const i=t[n];t[n]=i&&i.filter((t=>t._key?t._key!==o:o||t._namespace!==e))}))}function e(t,n){p(t).join(" ").split(" ").forEach((t=>{const e=t.split(".");n(e[0],e[1])}))}return{on:function(n,o,i,r=10){e(n,((n,e)=>{t[n]=t[n]||[],m(t[n],{_event:n,_callback:o,_namespace:e,_priority:r,_key:i}).sort(((t,n)=>t._priority-n._priority))}))},off:n,offBy:function(e){A(t,((t,o)=>{n(o,e)}))},emit:function(n){(t[n]||[]).forEach((t=>{t._callback.apply(t,v(arguments,1))}))},destroy:function(){t={}}}}(),this.Components={},this.state=function(t){let n=t;return{set:function(t){n=t},is:function(t){return h(p(t),n)}}}(1),this.splides=[],this._options={},this._Extensions={};const e=u(t)?F(document,t):t;H(e,`${e} is invalid.`),this.root=e,$(mn,bn.defaults),$($(this._options,mn),n||{})}mount(t,n){const{state:e,Components:o}=this;H(e.is([1,5]),"Already mounted!"),e.set(1),this._Components=o,this._Transition=n||this._Transition||(this.is(en)?yn:vn),this._Extensions=t||this._Extensions;return A(L({},hn,this._Extensions,{Transition:this._Transition}),((t,n)=>{const e=t(this,o,this._options);o[n]=e,e.setup&&e.setup()})),A(o,(t=>{t.mount&&t.mount()})),this.emit(st),w(this.root,"is-initialized"),e.set(3),this.emit(ct),this}sync(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._Components.Sync.remount(),t.Components.Sync.remount()),this}go(t){return this._Components.Controller.go(t),this}on(t,n){return this.event.on(t,n,null,20),this}off(t){return this.event.off(t),this}emit(t){return this.event.emit(t,...v(arguments,1)),this}add(t,n){return this._Components.Slides.add(t,n),this}remove(t){return this._Components.Slides.remove(t),this}is(t){return this._options.type===t}refresh(){return this.emit(ht),this}destroy(t=!0){const{event:n,state:e}=this;return e.is(1)?n.on(ct,this.destroy.bind(this,t),this):(A(this._Components,(n=>{n.destroy&&n.destroy(t)}),!0),n.emit(xt),n.destroy(),t&&s(this.splides),e.set(5)),this}get options(){return this._options}set options(t){const{_options:n}=this;$(n,t),this.state.is(1)||this.emit(mt,n)}get length(){return this._Components.Slides.getLength(!0)}get index(){return this._Components.Controller.getIndex()}};let wn=bn;wn.defaults={},wn.STATES=r;const _n=()=>{const t=document.querySelector("#featured");t&&(t=>{new wn(t,{type:"loop",padding:"25%",focus:"center",gap:10,breakpoints:{840:{padding:0,gap:0}}}).mount()})(t)};function xn(t,n,e,o){var i,r=!1,s=0;function c(){i&&clearTimeout(i)}function a(){for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];var d=this,f=Date.now()-s;function p(){s=Date.now(),e.apply(d,u)}function g(){i=void 0}r||(o&&!i&&p(),c(),void 0===o&&f>t?p():!0!==n&&(i=setTimeout(o?g:p,void 0===o?t-f:t)))}return"boolean"!=typeof n&&(o=e,e=n,n=void 0),a.cancel=function(){c(),r=!0},a}const En=t=>{const n=getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)},kn=()=>{window.removeEventListener("scroll",kn),window.removeEventListener("click",kn),window.removeEventListener("touchstart",kn);const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.head.appendChild(t)},Sn=t=>{new IntersectionObserver(((t,n)=>{t.some((t=>t.isIntersecting))&&((()=>{const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.head.appendChild(t);const n=document.createElement("script");n.async=!0,n.src="https://b.st-hatena.com/js/bookmark_button.js",n.charset="utf-8",document.head.appendChild(n);const e=document.createElement("script");e.async=!0,e.defer=!0,e.crossOrigin="anonymous",e.src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v5.0",document.head.appendChild(e)})(),n.disconnect())}),{root:document.body,rootMargin:"100px"}).observe(t)};var An={prefix:"fas",iconName:"exclamation-triangle",icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]},Ln={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},$n={prefix:"fas",iconName:"share-alt",icon:[448,512,[],"f1e0","M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"]},Cn={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]},Pn={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},zn={prefix:"fab",iconName:"youtube",icon:[576,512,[],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Mn=[Ln,$n,Pn,Cn,zn,An],Nn=()=>{document.querySelector(".post-head")&&document.querySelector("article").querySelectorAll("img[src], video[src], iframe[src]").forEach((t=>{t.dataset.src=t.src,t.removeAttribute("src"),t.classList.add("lozad")})),_n();n()().observe(),document.querySelectorAll(".icon-fa").forEach((t=>{const n=t.getAttribute("data-name"),e=Mn.find((t=>t.iconName===n));if(e){const n=t.className;t.outerHTML=((t,n)=>{const[e,o,,,i]=t.icon;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="${n}" focusable="false" role="img" width="1.13em" height="1em" viewBox="0 0 ${e} ${o}"><path d="${i}" fill="currentColor" /></svg>`})(e,n)}})),(()=>{const t=En(6),n=En(3.5),e=document.getElementsByTagName("header")[0];window.addEventListener("scroll",xn(100,(()=>{document.body.scrollTop>t||document.documentElement.scrollTop>t?e.classList.add("thin"):document.body.scrollTop<n&&document.documentElement.scrollTop<n&&e.classList.remove("thin")})))})(),(()=>{const t=document.querySelector("#hyakkiyagyo");if(!t)return;const n="https://hyakkiyagyo.trap.jp";window.addEventListener("message",(e=>{e.origin===n&&(t.style.height=e.data+"px")})),t.addEventListener("load",(()=>{t.src.startsWith(n)&&t.contentWindow.postMessage(document.querySelector("link[rel=stylesheet][href*=\\/app]").href,n)}))})(),document.querySelectorAll("article p > img, article .kg-image-card > img, article .kg-gallery-image > img").forEach((t=>{const n=document.createElement("a");n.target="_blank",n.href=`${t.src||t.dataset.src}?original=1`,n.className="orig-link",t.replaceWith(n),n.appendChild(t)})),(()=>{const t=document.querySelector("#web-share");t&&navigator.share&&(t.classList.remove("disabled"),t.addEventListener("click",(()=>{navigator.share({title:document.title,url:location.href}).catch((t=>{console.error("failed to share",t)}))})))})();document.querySelector("#lazy-load-twitter")&&(window.addEventListener("scroll",kn),window.addEventListener("click",kn),window.addEventListener("touchstart",kn));const t=document.querySelector("#share");t&&Sn(t),document.querySelector(".copy span").textContent=(new Date).getFullYear()};"loading"!==document.readyState?Nn():window.addEventListener("DOMContentLoaded",Nn)})()})();