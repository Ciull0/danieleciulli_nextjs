(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{1132:function(e,t,n){"use strict";let r=g();const o=e=>y(e,r);let a=g();o.write=e=>y(e,a);let l=g();o.onStart=e=>y(e,l);let u=g();o.onFrame=e=>y(e,u);let c=g();o.onFinish=e=>y(e,c);let i=[];o.setTimeout=(e,t)=>{let n=o.now()+t,r=()=>{let e=i.findIndex((e=>e.cancel==r));~e&&i.splice(e,1),p-=~e?1:0},a={time:n,handler:e,cancel:r};return i.splice(f(n),0,a),p+=1,m(),a};let f=e=>~(~i.findIndex((t=>t.time>e))||~i.length);o.cancel=e=>{l.delete(e),u.delete(e),r.delete(e),a.delete(e),c.delete(e)},o.sync=e=>{h=!0,o.batchedUpdates(e),h=!1},o.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,o.onStart(n)}return r.handler=e,r.cancel=()=>{l.delete(n),t=null},r};let s="undefined"!=typeof window?window.requestAnimationFrame:()=>{};o.use=e=>s=e,o.now="undefined"!=typeof performance?()=>performance.now():Date.now,o.batchedUpdates=e=>e(),o.catch=console.error,o.frameLoop="always",o.advance=()=>{"demand"!==o.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):w()};let d=-1,p=0,h=!1;function y(e,t){h?(t.delete(e),e(0)):(t.add(e),m())}function m(){d<0&&(d=0,"demand"!==o.frameLoop&&s(v))}function v(){~d&&(s(v),o.batchedUpdates(w))}function w(){let e=d;d=o.now();let t=f(d);t&&(b(i.splice(0,t),(e=>e.handler())),p-=t),l.flush(),r.flush(e?Math.min(64,d-e):16.667),u.flush(),a.flush(),c.flush(),p||(d=-1)}function g(){let e=new Set,t=e;return{add(n){p+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(p-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,p-=t.size,b(t,(t=>t(n)&&e.add(t))),p+=e.size,t=e)}}}function b(e,t){e.forEach((e=>{try{t(e)}catch(n){o.catch(n)}}))}var E=n(7294);Array.isArray;new Set;const S="[-+]?\\d*\\.?\\d+",L=S+"%";function A(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}new RegExp("rgb"+A(S,S,S)),new RegExp("rgba"+A(S,S,S,S)),new RegExp("hsl"+A(S,L,L)),new RegExp("hsla"+A(S,L,L,S));Symbol.for("FluidValue.get"),Symbol.for("FluidValue.observers");const I=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;new RegExp(`(${I.source})(%|[a-z]+)`,"i");const M="react-spring: ",C=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${M}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}};C(console.warn);C(console.warn);"undefined"!==typeof window&&window.document&&window.document.createElement?E.useLayoutEffect:E.useEffect},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},u=n(6273),c=n(387),i=n(7190);var f={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=l.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,h=e.children,y=e.replace,m=e.shallow,v=e.scroll,w=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,b=o(i.useIntersection({rootMargin:"200px"}),2),E=b[0],S=b[1],L=l.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);l.default.useEffect((function(){var e=S&&n&&u.isLocalURL(d),t="undefined"!==typeof w?w:r&&r.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(r,d,p,{locale:t})}),[p,d,S,w,n,r]);var A={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,r,d,p,y,m,v,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof w?w:r&&r.locale,M=r&&r.isLocaleDomain&&u.getDomainLocale(p,I,r&&r.locales,r&&r.domainLocales);A.href=M||u.addBasePath(u.addLocale(p,I,r&&r.defaultLocale))}return l.default.cloneElement(t,A)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(t?t.current:null),2),y=h[0],m=h[1],v=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),i.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:n}))}),[r,y,n,d]);return a.useEffect((function(){if(!u&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&m(t.current)}),[t]),[v,d]};var a=n(7294),l=n(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,i=[]},1664:function(e,t,n){e.exports=n(8418)}}]);