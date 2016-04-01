'use strict'
const fs = require('fs');
const Mustache = require('mustache');
const __ = require('./__');

module.exports.compile = function(index){
let conf = require(__.conf);
let tpl  = fs.readFileSync(__.root+'/index.mustache',"utf-8");	
let data = {
	charset:"utf-8",
	"debug?":conf.debug,
	//livereload:false,
	name:"vnjson",
	port:conf.port
}


var output = Mustache.render(tpl, data);
	
fs.writeFileSync(index, output);
}
