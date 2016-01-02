#! /usr/bin/env node


var __ = require('./lib/__');
var program  = require('commander');
var fs = require('fs-extra');
var log = require( "my-log" );
var exeCute = require('exe');



var ren = {
	init:function(env){
	/*npmRoot({global:true},function(err,path){
		if(err){
			console.error(err);
		}
		else{
			var game_tpl = "\\renjs-cli\\game_template\\";
			var tplPath = slash(path+game_tpl);
			fs.copy(tplPath, __cwd,function(err){
				if(err){
					console.error(err);
				}
				else{
					log.debug('Project has been created');
				}
			});
		}
	});
	*/
	},

	run:function(env){
	//log.data(nw_app);
	//exeCute(nwpath+" "+nw_app);
	
		/*livereload.run();*/

	},
	build:function(env){
		/**
			nw.builder()
			html.project
		*/
		//log.debug(__.nw);
		//log.success(__.cwd);
		//var p = exeCute("%APPDATA%")
		//var pathOfRen = modulePath('renjs-cli');
		log.warn(__.root);
	},

};

program.arguments('<cmd> [env]')
  			.action(function (cmd, env){
						ren[cmd](env);
  			});
 
program.parse(process.argv);

module.exports =  ren;