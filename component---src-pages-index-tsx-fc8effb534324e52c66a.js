(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3038:function(e,t,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var s=u[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],u=e[i];(o?-1!==t.indexOf(i):t(i,u,e))&&(r[i]=u)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r(8936),s=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function g(e){return Array.isArray(e)?e.sort():"object"==typeof e?g(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&m(r,e).includes(e.arrayFormatSeparator);r=a?m(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,u=i(e.split("&"));try{for(u.s();!(a=u.n()).done;){var c=a.value;if(""!==c){var s=l(t.decode?c.replace(/\+/g," "):c,"="),f=o(s,2),p=f[0],y=f[1];y=void 0===y?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?y:m(y,t),r(m(p,t),y,n)}}}catch(O){u.e(O)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],t)}else n[h]=b(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=g(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(t,e),"[",o,"]"].join("")]:[[y(t,e),"[",y(o,e),"]=",y(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(t,e),"[]"].join("")]:[[y(t,e),"[]=",y(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[y(r,e),t,y(o,e)].join("")]:[[n,y(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[y(t,e)]:[[y(t,e),"=",y(n,e)].join("")])}}}}(t),o={},i=0,u=Object.keys(e);i<u.length;i++){var c=u[i];r(c)||(o[c]=e[c])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var o=e[r];return void 0===o?"":null===o?y(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?y(r,t)+"[]":o.reduce(n(r),[]).join("&"):y(r,t)+"="+y(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=x(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),u=Object.assign(i,e.query),c=t.stringify(u,r);c&&(c="?".concat(c));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[p]?y(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(c).concat(s)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(e,o),i=a.url,u=a.query,c=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:c},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},9362:function(e,t,r){"use strict";var n=r(6771),o=(r(7294),r(3431));var a=(0,n.Z)("div",{target:"eikws6z2"})({name:"1snu9sd",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;max-width:768px;margin:30px auto 0"}),i=(0,n.Z)("p",{target:"eikws6z1"})({name:"ju0gm5",styles:"font-size:2rem;line-height:1.25;@media (max-width: 768px){font-size:1.3rem;}"}),u=(0,n.Z)("div",{target:"eikws6z0"})({name:"1samkqc",styles:"overflow:hidden;display:flex;align-items:center;justify-content:center;width:100px;height:100px;border-radius:50%;background-color:#ffdc4e;user-select:none;>span{position:relative;display:block;margin-top:5px;font-size:2rem;line-height:1;font-weight:bold;color:#000;}@media (max-width: 768px){width:70px;height:70px;>span{font-size:1rem;}}"});t.Z=function(){return(0,o.tZ)(a,null,(0,o.tZ)(i,null,"안녕하세요. ",(0,o.tZ)("br",null),"Frontend Developer 김민철입니다."),(0,o.tZ)(u,{"aria-hidden":!0},(0,o.tZ)("span",null,"$","{MC}")))}},6755:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(7294),o=r(2203),a=r(7462);var i=r(6771),u=r(5444),c=r(3431),s=["active","to"];var l=(0,i.Z)("ul",{target:"e17k3mfk2"})({name:"jde59q",styles:"display:flex;flex-wrap:wrap;justify-content:center;width:768px;margin:100px auto 0"}),f=(0,i.Z)("li",{target:"e17k3mfk1"})({name:"1d3wo51",styles:"position:relative;min-width:100px;text-align:center;&+&{margin-left:20px;}"}),p=(0,i.Z)((function(e){e.active;var t=e.to,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,s);return(0,c.tZ)(u.rU,(0,a.Z)({to:t},r))}),{target:"e17k3mfk0"})("padding:5px 0;font-weight:",(function(e){return e.active?"bold":"normal"}),";font-size:18px;text-decoration:none;"),d=function(e){var t=e.selectedCategory,r=e.categoryList;return(0,c.tZ)(l,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return(0,c.tZ)(f,{key:r},(0,c.tZ)(p,{to:"/?category="+r,active:r===t},"#",r,"(",n,")"))})))};var y=(0,i.Z)("article",{target:"e2uwb2x5"})({name:"1dw5qsd",styles:"padding:1em 0 1.25rem;border-bottom:1px solid rgba(214, 209, 230, 0.5)"}),m=(0,i.Z)("h4",{target:"e2uwb2x4"})({name:"2iotzs",styles:"font-size:1.5rem;>a{display:block;color:#ffdc4e;}"}),g=(0,i.Z)("p",{target:"e2uwb2x3"})({name:"1qhmzig",styles:"overflow:hidden;display:-webkit-box;display:-moz-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:10px;line-height:1.45;max-height:2.9em;font-size:1rem;color:#fff;text-overflow:ellipsis"}),x=(0,i.Z)("div",{target:"e2uwb2x2"})({name:"1ck5c0d",styles:"display:flex;margin-top:5px;color:#c6d8e0;>span{display:inline-flex;}"}),v=(0,i.Z)("ul",{target:"e2uwb2x1"})({name:"1x7zfzp",styles:"display:inline-flex;margin-left:10px;li>button{&:hover{text-decoration:underline;}}>li+li{margin-left:5px;&::before{content:', ';}}"}),b=(0,i.Z)(u.rU,{target:"e2uwb2x0"})({name:"9napfi",styles:"display:flex;margin-top:1rem;justify-content:center;font-size:0.75rem;letter-spacing:2px"}),h=function(e){var t=e.title,r=e.date,n=e.categories,o=e.summary,a=e.link;return(0,c.tZ)(y,null,(0,c.tZ)(m,null,(0,c.tZ)(u.rU,{to:a},t)),(0,c.tZ)(g,null,o),(0,c.tZ)(x,null,(0,c.tZ)("time",{dateTime:r},r),(0,c.tZ)(v,null,n.map((function(e){return(0,c.tZ)("li",{key:e},(0,c.tZ)("button",{type:"button"},"#",e))})))),(0,c.tZ)(b,{to:a},"READ POST"))},w=function(e,t){var r=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useState)(1),i=a[0],u=a[1],c=(0,n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,n.useEffect)((function(){o.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(u((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[e]),(0,n.useEffect)((function(){10*i>=c.length||null===r.current||0===r.current.children.length||null===o.current||o.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:c.slice(0,10*i)}};var k=(0,i.Z)("ul",{target:"exkcd9n0"})({name:"nvfeu6",styles:"display:flex;flex-direction:column;max-width:768px;margin:50px auto"}),j=function(e){var t=e.selectedCategory,r=e.posts,n=w(t,r),o=n.containerRef,i=n.postList;return(0,c.tZ)(k,{ref:o},i.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,o=Object.assign({},t.frontmatter);return(0,c.tZ)(h,(0,a.Z)({link:n,key:r},o))})))},Z=r(8098),O=r(9362),A=function(e){var t=e.location,r=t.search,a=t.pathname,i=e.data,u=i.site.siteMetadata,s=u.title,l=u.description,f=u.siteUrl,p=i.allMarkdownRemark.edges,y=o.parse(r),m="string"==typeof y.category&&y.category?y.category:"All",g=(0,n.useMemo)((function(){return p.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,c.tZ)(Z.Z,{title:s,description:l,url:f,pathname:a},(0,c.tZ)(O.Z,null),(0,c.tZ)(d,{selectedCategory:m,categoryList:g}),(0,c.tZ)(j,{selectedCategory:m,posts:p}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fc8effb534324e52c66a.js.map