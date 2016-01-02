//var modulePath = require('module-path');
var slash = require('slash');
var npmRoot = require('npm-root');
var findpath = require('nw').findpath;

//var __cwd = process.cwd();

//var nw_app = slash(__cwd+"\\nw_app\\");
var __ = {
		cwd:process.cwd(),
		nw:findpath(),
		root:null,

	};



//var game_tpl = "\\game_template\\";
//var tplPath = slash(__cwd+game_tpl);
//var game_tpl = "\\game_template\\";
npmRoot({global:true},function(err,root){
if(err){
	console.log(err);
}else{
	__.root = root;
}


});



module.exports = __;
