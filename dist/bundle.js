!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!g[e])return;for(var t in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--m&&0===b&&O()}(e,t),n&&n(e,t)};var t,r=!0,o="dbd9a2b700f74e8aad11",i={},a=[],c=[];function d(e){var n=M[e];if(!n)return H;var r=function(r){return n.hot.active?(M[r]?-1===M[r].parents.indexOf(e)&&M[r].parents.push(e):(a=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),H(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&u("prepare"),b++,H.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===p&&(y[e]||j(e),0===b&&0===m&&O())}},r.t=function(e,n){return 1&n&&(e=r(e)),H.t(e,-2&n)},r}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:E,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return t=void 0,n}var l=[],p="idle";function u(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,v,m=0,b=0,y={},g={},w={};function x(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,u("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=H.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return u("idle"),null;g={},y={},w=e.c,v=e.h,u("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));h={};return j(0),"prepare"===p&&0===b&&0===m&&O(),n}));var n}function j(e){w[e]?(g[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):y[e]=!0}function O(){u("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return E(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(x(t));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,c,d,s;function l(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((d=M[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],l=M[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),f(t[s],[i])):(delete t[s],n.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var m={},b=[],y={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var j;s=x(_);var O=!1,E=!1,D=!1,T="";switch((j=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(T="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+j.moduleId+T));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+T));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(O)return u("abort"),Promise.reject(O);if(E)for(s in y[s]=h[s],f(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(m[s]||(m[s]=[]),f(m[s],j.outdatedDependencies[s]));D&&(f(b,[j.moduleId]),y[s]=g)}var k,I=[];for(r=0;r<b.length;r++)s=b[r],M[s]&&M[s].hot._selfAccepted&&y[s]!==g&&I.push({module:s,errorHandler:M[s].hot._selfAccepted});u("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));for(var C,L,P=b.slice();P.length>0;)if(s=P.pop(),d=M[s]){var S={},A=d.hot._disposeHandlers;for(c=0;c<A.length;c++)(t=A[c])(S);for(i[s]=S,d.hot.active=!1,delete M[s],delete m[s],c=0;c<d.children.length;c++){var U=M[d.children[c]];U&&((k=U.parents.indexOf(s))>=0&&U.parents.splice(k,1))}}for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(d=M[s]))for(L=m[s],c=0;c<L.length;c++)C=L[c],(k=d.children.indexOf(C))>=0&&d.children.splice(k,1);for(s in u("apply"),o=v,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var R=null;for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(d=M[s])){L=m[s];var N=[];for(r=0;r<L.length;r++)if(C=L[r],t=d.hot._acceptedDependencies[C]){if(-1!==N.indexOf(t))continue;N.push(t)}for(r=0;r<N.length;r++){t=N[r];try{t(L)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:L[r],error:e}),n.ignoreErrored||R||(R=e)}}}for(r=0;r<I.length;r++){var B=I[r];s=B.module,a=[s];try{H(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||R||(R=e)}}return R?(u("fail"),Promise.reject(R)):(u("idle"),new Promise((function(e){e(b)})))}var M={};function H(n){if(M[n])return M[n].exports;var t=M[n]={i:n,l:!1,exports:{},hot:s(n),parents:(c=a,a=[],c),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}H.m=e,H.c=M,H.d=function(e,n,t){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(H.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)H.d(t,r,function(n){return e[n]}.bind(null,r));return t},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/",H.h=function(){return o},d(1)(H.s=1)}([function(e,n,t){(n=t(4)(!1)).push([e.i,"*{margin:0;padding:0;outline:0;font-family:'Nunito', sans-serif}.wrapper{width:80%;position:absolute;left:50%;transform:translateX(-50%)}.statistic{width:100%}.total_case_box{background-color:#fafafa;box-shadow:2px 2px 8px rgba(30,30,30,0.2);margin:10px 15px;padding:15px 0;text-align:center;text-transform:uppercase}.total_case_box p{font-size:3rem}.wrapper .box_wrapper{display:flex;flex-wrap:nowrap;flex-direction:row}.box_wrapper .box{background-color:#fafafa;box-shadow:2px 2px 8px rgba(30,30,30,0.2);margin:10px 15px;width:25%;text-align:center;padding:15px 0;border-radius:8px;text-transform:uppercase}.box_wrapper .box:first-child,.box_wrapper .box:last-child{background-color:red;color:#fff}.box_wrapper .box p{font-size:2.5rem}table{width:100%;padding:15px 10px;margin:10px 0;text-align:center;border-spacing:0}tr:first-child{background-color:#37474f;color:#fafafa;text-transform:uppercase}th{padding:15px 0;border:none;border-spacing:0}tr:nth-child(even){background-color:#fafafa}tr:nth-child(odd){background-color:#FFEEAA;color:grey}tr td{padding:15px 0}tr th{font-weight:bold;color:black}tr td:nth-child(3),td:nth-child(5){background-color:red;color:#fff;font-weight:bold;border:1px solid;padding-right:5px}tr td:nth-child(3):before,td:nth-child(5):before{content:\"+\";padding:5px}\n",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);t(2);document.addEventListener("DOMContentLoaded",(function(){fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"9a234295f4msh7754bbf6c7eedd0p1a39d2jsnb6097b10e994"}}).then((function(e){return e.json().then((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var e=document.getElementById("new_case"),n=document.getElementById("new_death"),t=document.getElementById("total_death"),r=document.getElementById("total_recovered"),o=document.getElementById("total_cases"),i=document.getElementById("countries_stat");fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"9a234295f4msh7754bbf6c7eedd0p1a39d2jsnb6097b10e994"}}).then((function(i){return i.json().then((function(i){console.log(i),o.innerHTML=i.total_cases,e.innerHTML=i.new_cases,n.innerHTML=i.new_deaths,t.innerHTML=i.total_deaths,r.innerHTML=i.total_recovered}))})).catch((function(e){console.log(e)})),fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"9a234295f4msh7754bbf6c7eedd0p1a39d2jsnb6097b10e994"}}).then((function(e){return e.json().then((function(e){console.log(e);for(var n=e.countries_stat,t=0;t<n.length;t++){console.log(n[t]);var r=i.insertRow(t+1),o=r.insertCell(0),a=r.insertCell(1),c=r.insertCell(2),d=r.insertCell(3),s=r.insertCell(4),l=r.insertCell(5),p=r.insertCell(6),u=r.insertCell(7);o.innerHTML=n[t].country_name,a.innerHTML=n[t].cases,c.innerHTML=n[t].new_cases,d.innerHTML=n[t].deaths,s.innerHTML=n[t].new_deaths,l.innerHTML=n[t].total_recovered,p.innerHTML=n[t].active_cases,u.innerHTML=n[t].serious_critical}}))})).catch((function(e){console.log(e)}))}))},function(e,n,t){var r=t(3),o=t(0);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=r(o,i),c=o.locals?o.locals:{};o.locals||e.hot.accept(0,(function(){var n=t(0);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()})),e.exports=c},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],d=n.base?i[0]+n.base:i[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=c(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:m(u,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,p=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,n){var t,r,o;if(n.singleton){var i=v++;t=h||(h=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=d(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}}]);