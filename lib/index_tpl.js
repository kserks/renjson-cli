'use strict'
const fs = require('fs');
const Mustache = require('mustache');
const __ = require('./__');
/*
module.exports.compile = function(){
let tpl  = fs.readFileSync('../index.mustache',"utf-8");	
let data = {
	charset:"utf-8",
	//debug:true,
	//livereload:false,
	name:"Red Ren Rel"
}


var output = Mustache.render(tpl, data);
	
fs.writeFileSync('../vn_tpl/index.html', output);
}
this.compile()*/
/*
fs.readdir(__.projectDir, function(err, list) {
	console.log(list)
})*/

console.log(__.projectDir)