#! /usr/bin/env node
'use strict'
const main = require('./lib/main');
const $ = require('./lib/config');
if(module.parent){
	$.browser = "nw";
	module.exports =  main;
}else{

let args = process.argv.slice(2);

args.map(function(key){
		main[key]();	
});
}
