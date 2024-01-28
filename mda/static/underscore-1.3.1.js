(function(){function n(t,r,e){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return t===r;if(t._chain&&(t=t._wrapped),r._chain&&(r=r._wrapped),t.isEqual&&A.isFunction(t.isEqual))return t.isEqual(r);if(r.isEqual&&A.isFunction(r.isEqual))return r.isEqual(t);var i=l.call(t);if(i!=l.call(r))return!1;switch(i){case"[object String]":return t==String(r);case"[object Number]":return t!=+t?r!=+r:0==t?1/t==1/r:t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object RegExp]":return t.source==r.source&&t.global==r.global&&t.multiline==r.multiline&&t.ignoreCase==r.ignoreCase}if("object"!=typeof t||"object"!=typeof r)return!1;for(var u=e.length;u--;)if(e[u]==t)return!0;e.push(t);var c=0,a=!0;if("[object Array]"==i){if(a=(c=t.length)==r.length)for(;c--&&(a=c in t==c in r&&n(t[c],r[c],e)););}else{if("constructor"in t!="constructor"in r||t.constructor!=r.constructor)return!1;for(var o in t)if(A.has(t,o)&&(c++,!(a=A.has(r,o)&&n(t[o],r[o],e))))break;if(a){for(o in r)if(A.has(r,o)&&!c--)break;a=!c}}return e.pop(),a}var t=this,r=t._,e={},i=Array.prototype,u=Object.prototype,c=Function.prototype,a=i.slice,o=i.unshift,l=u.toString,f=u.hasOwnProperty,p=i.forEach,s=i.map,h=i.reduce,v=i.reduceRight,d=i.filter,y=i.every,g=i.some,m=i.indexOf,b=i.lastIndexOf,x=Array.isArray,_=Object.keys,j=c.bind,A=function(n){return new F(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=A),exports._=A):t._=A,A.VERSION="1.3.1";var w=A.each=A.forEach=function(n,t,r){if(null!=n)if(p&&n.forEach===p)n.forEach(t,r);else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++)if(i in n&&t.call(r,n[i],i,n)===e)return}else for(var c in n)if(A.has(n,c)&&t.call(r,n[c],c,n)===e)return};A.map=A.collect=function(n,t,r){var e=[];return null==n?e:s&&n.map===s?n.map(t,r):(w(n,function(n,i,u){e[e.length]=t.call(r,n,i,u)}),n.length===+n.length&&(e.length=n.length),e)},A.reduce=A.foldl=A.inject=function(n,t,r,e){var i=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=A.bind(t,e)),i?n.reduce(t,r):n.reduce(t);if(w(n,function(n,u,c){i?r=t.call(e,r,n,u,c):(r=n,i=!0)}),!i)throw new TypeError("Reduce of empty array with no initial value");return r},A.reduceRight=A.foldr=function(n,t,r,e){var i=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=A.bind(t,e)),i?n.reduceRight(t,r):n.reduceRight(t);var u=A.toArray(n).reverse();return e&&!i&&(t=A.bind(t,e)),i?A.reduce(u,t,r,e):A.reduce(u,t)},A.find=A.detect=function(n,t,r){var e;return E(n,function(n,i,u){if(t.call(r,n,i,u))return e=n,!0}),e},A.filter=A.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(w(n,function(n,i,u){t.call(r,n,i,u)&&(e[e.length]=n)}),e)},A.reject=function(n,t,r){var e=[];return null==n?e:(w(n,function(n,i,u){t.call(r,n,i,u)||(e[e.length]=n)}),e)},A.every=A.all=function(n,t,r){var i=!0;return null==n?i:y&&n.every===y?n.every(t,r):(w(n,function(n,u,c){if(!(i=i&&t.call(r,n,u,c)))return e}),i)};var E=A.some=A.any=function(n,t,r){t||(t=A.identity);var i=!1;return null==n?i:g&&n.some===g?n.some(t,r):(w(n,function(n,u,c){if(i||(i=t.call(r,n,u,c)))return e}),!!i)};A.include=A.contains=function(n,t){var r=!1;return null==n?r:m&&n.indexOf===m?-1!=n.indexOf(t):r=E(n,function(n){return n===t})},A.invoke=function(n,t){var r=a.call(arguments,2);return A.map(n,function(n){return(A.isFunction(t)?t||n:n[t]).apply(n,r)})},A.pluck=function(n,t){return A.map(n,function(n){return n[t]})},A.max=function(n,t,r){if(!t&&A.isArray(n))return Math.max.apply(Math,n);if(!t&&A.isEmpty(n))return-Infinity;var e={computed:-Infinity};return w(n,function(n,i,u){var c=t?t.call(r,n,i,u):n;c>=e.computed&&(e={value:n,computed:c})}),e.value},A.min=function(n,t,r){if(!t&&A.isArray(n))return Math.min.apply(Math,n);if(!t&&A.isEmpty(n))return Infinity;var e={computed:Infinity};return w(n,function(n,i,u){var c=t?t.call(r,n,i,u):n;c<e.computed&&(e={value:n,computed:c})}),e.value},A.shuffle=function(n){var t,r=[];return w(n,function(n,e){0==e?r[0]=n:(t=Math.floor(Math.random()*(e+1)),r[e]=r[t],r[t]=n)}),r},A.sortBy=function(n,t,r){return A.pluck(A.map(n,function(n,e,i){return{value:n,criteria:t.call(r,n,e,i)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;return r<e?-1:r>e?1:0}),"value")},A.groupBy=function(n,t){var r={},e=A.isFunction(t)?t:function(n){return n[t]};return w(n,function(n,t){var i=e(n,t);(r[i]||(r[i]=[])).push(n)}),r},A.sortedIndex=function(n,t,r){r||(r=A.identity);for(var e=0,i=n.length;e<i;){var u=e+i>>1;r(n[u])<r(t)?e=u+1:i=u}return e},A.toArray=function(n){return n?n.toArray?n.toArray():A.isArray(n)?a.call(n):A.isArguments(n)?a.call(n):A.values(n):[]},A.size=function(n){return A.toArray(n).length},A.first=A.head=function(n,t,r){return null==t||r?n[0]:a.call(n,0,t)},A.initial=function(n,t,r){return a.call(n,0,n.length-(null==t||r?1:t))},A.last=function(n,t,r){return null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},A.rest=A.tail=function(n,t,r){return a.call(n,null==t||r?1:t)},A.compact=function(n){return A.filter(n,function(n){return!!n})},A.flatten=function(n,t){return A.reduce(n,function(n,r){return A.isArray(r)?n.concat(t?r:A.flatten(r)):(n[n.length]=r,n)},[])},A.without=function(n){return A.difference(n,a.call(arguments,1))},A.uniq=A.unique=function(n,t,r){var e=r?A.map(n,r):n,i=[];return A.reduce(e,function(r,e,u){return 0!=u&&(!0===t?A.last(r)==e:A.include(r,e))||(r[r.length]=e,i[i.length]=n[u]),r},[]),i},A.union=function(){return A.uniq(A.flatten(arguments,!0))},A.intersection=A.intersect=function(n){var t=a.call(arguments,1);return A.filter(A.uniq(n),function(n){return A.every(t,function(t){return A.indexOf(t,n)>=0})})},A.difference=function(n){var t=A.flatten(a.call(arguments,1));return A.filter(n,function(n){return!A.include(t,n)})},A.zip=function(){for(var n=a.call(arguments),t=A.max(A.pluck(n,"length")),r=new Array(t),e=0;e<t;e++)r[e]=A.pluck(n,""+e);return r},A.indexOf=function(n,t,r){if(null==n)return-1;var e,i;if(r)return n[e=A.sortedIndex(n,t)]===t?e:-1;if(m&&n.indexOf===m)return n.indexOf(t);for(e=0,i=n.length;e<i;e++)if(e in n&&n[e]===t)return e;return-1},A.lastIndexOf=function(n,t){if(null==n)return-1;if(b&&n.lastIndexOf===b)return n.lastIndexOf(t);for(var r=n.length;r--;)if(r in n&&n[r]===t)return r;return-1},A.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),i=0,u=new Array(e);i<e;)u[i++]=n,n+=r;return u};var O=function(){};A.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,a.call(arguments,1));if(!A.isFunction(n))throw new TypeError;return e=a.call(arguments,2),r=function(){if(!(this instanceof r))return n.apply(t,e.concat(a.call(arguments)));O.prototype=n.prototype;var i=new O,u=n.apply(i,e.concat(a.call(arguments)));return Object(u)===u?u:i}},A.bindAll=function(n){var t=a.call(arguments,1);return 0==t.length&&(t=A.functions(n)),w(t,function(t){n[t]=A.bind(n[t],n)}),n},A.memoize=function(n,t){var r={};return t||(t=A.identity),function(){var e=t.apply(this,arguments);return A.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},A.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(n,r)},t)},A.defer=function(n){return A.delay.apply(A,[n,1].concat(a.call(arguments,1)))},A.throttle=function(n,t){var r,e,i,u,c,a=A.debounce(function(){c=u=!1},t);return function(){r=this,e=arguments;var o=function(){i=null,c&&n.apply(r,e),a()};i||(i=setTimeout(o,t)),u?c=!0:n.apply(r,e),a(),u=!0}},A.debounce=function(n,t){var r;return function(){var e=this,i=arguments,u=function(){r=null,n.apply(e,i)};clearTimeout(r),r=setTimeout(u,t)}},A.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments))}},A.wrap=function(n,t){return function(){var r=[n].concat(a.call(arguments,0));return t.apply(this,r)}},A.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},A.after=function(n,t){return n<=0?t():function(){if(--n<1)return t.apply(this,arguments)}},A.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)A.has(n,r)&&(t[t.length]=r);return t},A.values=function(n){return A.map(n,A.identity)},A.functions=A.methods=function(n){var t=[];for(var r in n)A.isFunction(n[r])&&t.push(r);return t.sort()},A.extend=function(n){return w(a.call(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n},A.defaults=function(n){return w(a.call(arguments,1),function(t){for(var r in t)null==n[r]&&(n[r]=t[r])}),n},A.clone=function(n){return A.isObject(n)?A.isArray(n)?n.slice():A.extend({},n):n},A.tap=function(n,t){return t(n),n},A.isEqual=function(t,r){return n(t,r,[])},A.isEmpty=function(n){if(A.isArray(n)||A.isString(n))return 0===n.length;for(var t in n)if(A.has(n,t))return!1;return!0},A.isElement=function(n){return!(!n||1!=n.nodeType)},A.isArray=x||function(n){return"[object Array]"==l.call(n)},A.isObject=function(n){return n===Object(n)},A.isArguments=function(n){return"[object Arguments]"==l.call(n)},A.isArguments(arguments)||(A.isArguments=function(n){return!(!n||!A.has(n,"callee"))}),A.isFunction=function(n){return"[object Function]"==l.call(n)},A.isString=function(n){return"[object String]"==l.call(n)},A.isNumber=function(n){return"[object Number]"==l.call(n)},A.isNaN=function(n){return n!=n},A.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"==l.call(n)},A.isDate=function(n){return"[object Date]"==l.call(n)},A.isRegExp=function(n){return"[object RegExp]"==l.call(n)},A.isNull=function(n){return null===n},A.isUndefined=function(n){return void 0===n},A.has=function(n,t){return f.call(n,t)},A.noConflict=function(){return t._=r,this},A.identity=function(n){return n},A.times=function(n,t,r){for(var e=0;e<n;e++)t.call(r,e)},A.escape=function(n){return(""+n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},A.mixin=function(n){w(A.functions(n),function(t){k(t,A[t]=n[t])})};var q=0;A.uniqueId=function(n){var t=q++;return n?n+t:t},A.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/.^/,S=function(n){return n.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};A.template=function(n,t){var r=A.templateSettings,e="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+n.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(r.escape||I,function(n,t){return"',_.escape("+S(t)+"),'"}).replace(r.interpolate||I,function(n,t){return"',"+S(t)+",'"}).replace(r.evaluate||I,function(n,t){return"');"+S(t).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",i=new Function("obj","_",e);return t?i(t,A):function(n){return i.call(this,n,A)}},A.chain=function(n){return A(n).chain()};var F=function(n){this._wrapped=n};A.prototype=F.prototype;var R=function(n,t){return t?A(n).chain():n},k=function(n,t){F.prototype[n]=function(){var n=a.call(arguments);return o.call(n,this._wrapped),R(t.apply(A,n),this._chain)}};A.mixin(A),w(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=i[n];F.prototype[n]=function(){var r=this._wrapped;t.apply(r,arguments);var e=r.length;return"shift"!=n&&"splice"!=n||0!==e||delete r[0],R(r,this._chain)}}),w(["concat","join","slice"],function(n){var t=i[n];F.prototype[n]=function(){return R(t.apply(this._wrapped,arguments),this._chain)}}),F.prototype.chain=function(){return this._chain=!0,this},F.prototype.value=function(){return this._wrapped}}).call(this);