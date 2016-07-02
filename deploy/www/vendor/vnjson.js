var marmottajax=function(){var t=function(t,e){for(var s=t.length;s--;)if(t[s]===e)return!0;return!1},e=function(t,e){for(var s in e)t[s]=e[s]},s=function(t,e){var i,h=[];for(i in t)if(t.hasOwnProperty(i)){var a=t[i],r="object"==typeof a,n=e?e+"["+(isNaN(+i)||r?i:"")+"]":i;h.push(r?s(a,n):encodeURIComponent(n)+"="+encodeURIComponent(a))}return h.join("&")},i=function(){if(this.self)return new i(i.normalize(arguments));var t=i.normalize(arguments);if(null===t)throw"Invalid arguments";e(this,t),"GET"!=this.method.toUpperCase()?this.postData=s(this.parameters):this.url+=("?"==this.url.slice(-1)?"":"?")+s(this.parameters),this.setXhr(),this.setWatcher()};return i.defaultData={method:"get",json:!1,watch:-1,parameters:{}},i.validMethods=["get","post","put","update","delete"],i.okStatusCodes=[200,201,202,203,204,205,206],i.normalize=function(t){if(0===t.length)return null;var e={};return 1===t.length&&"object"==typeof t[0]?e=t[0]:1===t.length&&"string"==typeof t[0]?e={url:t[0]}:2===t.length&&"string"==typeof t[0]&&"object"==typeof t[1]&&(t[1].url=t[0],e=t[1]),"string"!=typeof e.method||-1==i.validMethods.indexOf(e.method.toLowerCase())?e.method=i.defaultData.method:e.method=e.method.toLowerCase(),"boolean"!=typeof e.json&&(e.json=i.defaultData.json),"number"!=typeof e.watch&&(e.watch=i.defaultData.watch),"object"!=typeof e.parameters&&(e.parameters=i.defaultData.parameters),"object"!=typeof e.headers&&(e.headers=i.defaultData.headers),e},i.prototype.setWatcher=function(){-1!==this.watch&&(this.watchIntervalFunction=function(){4===this.xhr.readyState&&t(i.okStatusCodes,this.xhr.status)&&this.updateXhr(),this.watcherTimeout()},this.watcherTimeout(),this.stop=function(){this.changeTime(-1)},this.changeTime=function(t){clearTimeout(this.changeTimeout),this.watch="number"==typeof t?t:this.watch,this.watcherTimeout()})},i.prototype.setXhr=function(){this.xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),this.xhr.lastResult=null,this.xhr.json=this.json,this.xhr.binding=null,this.bind=function(t){return this.xhr.binding=t,this},this.cancel=function(t){return this.xhr.abort(),this},this.xhr.callbacks={then:[],change:[],error:[]};for(var e in this.xhr.callbacks)this.xhr.callbacks.hasOwnProperty(e)&&(this[e]=function(t){return function(e){return this.xhr.callbacks[t].push(e),this}}(e));if(this.xhr.call=function(t,e){for(var s=0;s<this.callbacks[t].length;s++)"function"==typeof this.callbacks[t][s]&&(this.binding?this.callbacks[t][s].call(this.binding,e):this.callbacks[t][s](e))},this.xhr.onreadystatechange=function(){if(4===this.readyState&&t(i.okStatusCodes,this.status)){var e=this.responseText;if(this.json)try{e=JSON.parse(e)}catch(s){return this.call("error","invalid json"),!1}this.lastResult=e,this.call("then",e)}else 4===this.readyState&&404==this.status?this.call("error","404"):4===this.readyState&&this.call("error","unknow")},this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.headers)for(header in this.headers)this.headers.hasOwnProperty(header)&&this.xhr.setRequestHeader(header,this.headers[header]);this.xhr.send("undefined"!=typeof this.postData?this.postData:null)},i.prototype.updateXhr=function(){var e={lastResult:this.xhr.lastResult,json:this.xhr.json,binding:this.xhr.binding,callbacks:{then:this.xhr.callbacks.then,change:this.xhr.callbacks.change,error:this.xhr.callbacks.error}};this.xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),this.xhr.lastResult=e.lastResult,this.xhr.json=e.json,this.xhr.binding=e.binding,this.xhr.callbacks={then:e.callbacks.then,change:e.callbacks.change,error:e.callbacks.error},this.xhr.call=function(t,e){for(var s=0;s<this.callbacks[t].length;s++)"function"==typeof this.callbacks[t][s]&&(this.binding?this.callbacks[t][s].call(this.binding,e):this.callbacks[t][s](e))},this.xhr.onreadystatechange=function(){if(4===this.readyState&&t(i.okStatusCodes,this.status)){var e=this.responseText;if(this.json)try{e=JSON.parse(e)}catch(s){return this.call("error","invalid json"),!1}isDifferent=this.lastResult!=e;try{isDifferent=("string"!=typeof this.lastResult?JSON.stringify(this.lastResult):this.lastResult)!=("string"!=typeof e?JSON.stringify(e):e)}catch(s){}isDifferent&&this.call("change",e),this.lastResult=e}else 4===this.readyState&&404==this.status?this.call("error","404"):4===this.readyState&&this.call("error","unknow")},this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xhr.send("undefined"!=typeof postData?postData:null)},i.prototype.watcherTimeout=function(){-1!==this.watch&&(this.changeTimeout=setTimeout(function(t){return function(){t.watchIntervalFunction()}}(this),this.watch))},i}();
/* Copyright (c) 2010-2013 Marcus Westin */
"use strict";(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof exports=="object"?module.exports=t():e.store=t()})(this,function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=typeof window!="undefined"?window:global,n=t.document,r="localStorage",i="script",s;e.disabled=!1,e.version="1.3.20",e.set=function(e,t){},e.get=function(e,t){},e.has=function(t){return e.get(t)!==undefined},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){r==null&&(r=n,n=null),n==null&&(n={});var i=e.get(t,n);r(i),e.set(t,i)},e.getAll=function(){},e.forEach=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t,n){var r=e.deserialize(s.getItem(t));return r===undefined?n:r},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};return e.forEach(function(e,n){t[e]=n}),t},e.forEach=function(t){for(var n=0;n<s.length;n++){var r=s.key(n);t(r,e.get(r))}};else if(n&&n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}var l=function(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),h=function(e){return e.replace(/^d/,"___$&").replace(c,"___")};e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n,r){n=h(n);var i=e.deserialize(t.getAttribute(n));return i===undefined?r:i}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(r)}),e.getAll=function(t){var n={};return e.forEach(function(e,t){n[e]=t}),n},e.forEach=l(function(t,n){var r=t.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,e.deserialize(t.getAttribute(s.name)))})}try{var p="__storejs__";e.set(p,p),e.get(p)!=p&&(e.disabled=!0),e.remove(p)}catch(f){e.disabled=!0}return e.enabled=!e.disabled,e});
/**
 * @vnjson.js
 * @author kserks
 * @version 0.4.0.
 *
 */

var vnjson = {

};


vnjson.parse = function(){
	this.render();

	for(var key in this.keys){
		this.keys[key]();
	}

}
vnjson.render = function(){

this.canvas = document.getElementById('game');
this.ctx = this.canvas.getContext('2d');
this.canvas.width = 600;
this.canvas.height = 400;
this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);


}


vnjson.keys = {
	'alert':function(text){
		console.info('alert');
	},
	'reply':function(text){
		console.warn("reply")
	},

	'warn':function(text){
		console.warn('warn')
	}
}
vnjson.keys.scene = function(){

var img = new Image();      
img.onload = function() { 
	vnjson.ctx.drawImage(img,0,0);
}
img.src = './game/assets/background.png'; 

}


vnjson.keys.dialogBox = function(){

var dialogBox = new Image();      
dialogBox.onload = function() { 
	vnjson.ctx.drawImage(dialogBox,0,300,600,100);
}
dialogBox.src = './game/assets/dBox.png';
}

vnjson.init = function(){
marmottajax({
    url: "./game/scenes/ru-RU/start.json",
    json: true
}).then(function(result){
	console.log(result);
  //  vnjson.parse();
})
	
};
//# sourceMappingURL=vnjson.js.map
