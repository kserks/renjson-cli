#! /usr/bin/env node

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var __ = require('./lib/__');
var program  = require('commander');
var fs = require('fs-extra');
var slash = require('slash');
var log = require( "my-log" );
var EM = require('exclusion-manager');
var toIgnore = [
		__.cwd+'/node_modules'
	];

var ren = {
	init:function(env){
		if(env==="yaml"){
			fs.copy(__.scenes_tpl+"YAML", __.cwd,function(err){
				if(err){
					console.error(err);
				}else{
					log.debug('Project has been created');
				}
			});
		}else if(env==="json5"){
			fs.copy(__.scenes_tpl+"JSON5", __.cwd,function(err){
				if(err){
					console.error(err);
				}else{
					log.debug('Project has been created');
				}
			});
		}else{
			log.warn('Enter the params');
		}
	},
//'less/*.less'
	run:function(env){
		this.build();
		
 		log.data('Enter Ctrl+C for the exit in the repl');
 		log.debug(__.www);
 		require('./lib/server');
 		gulp.task('log', function() {
 				log.error('livereload:');

 		});
 		gulp.task('watch', function() {
 			livereload.listen({
 				basePath:__.cwd,
 				port:35729,
 				reloadPage:__.www+"/index.html",
 				//start:true
 			});
 		 	gulp.watch("/*.yml", ['log']);
		});
		gulp.run('watch');

	},

	build:function(env){
		var emanager = new EM(toIgnore);
var items = [];		
fs.walk(__.cwd)
  .on('data', function (item) {
  	//var item = slash(item);
  	if(emanager.shouldIgnore(slash(item.path) )){

  	}else{
  		items.push(item.path);
  		
  	}
    
  })
  .on('end', function () {
    console.dir(items);
  
  });
	/*	fs.copy(__.vn_tpl, __.www,function(err){
			if(!err){
				fs.copy(__.cwd, __.www+"/game/",function(err){
					if(err){
						console.log(err);
					}
				});
			}else{
				console.error(err);
			}
			});*/
	
	
	//console.log(emanager.shouldIgnore('node_modules'));
	}
};


var cmdValue;
var cmdEnv;

program
	.arguments('<cmd> [env]')
  	.action(function (cmd, env){
  			cmdValue = cmd;
  			cmdEnv = env;
  	})
   	.parse(process.argv);
if(typeof cmdValue === 'undefined'){
   log.warn('Enter the command');
   process.exit(1);
}else{
	ren[cmdValue](cmdEnv);
}
module.exports =  ren;