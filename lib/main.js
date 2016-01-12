var gulpfile = require('./gulpfile');
//var livereload = require('gulp-livereload');
var __ = require('./__');

var fs = require('fs-extra');
var log = require( "my-log" );
var server = require('./server');

module.exports = {
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

	run:function(env){
		gulpfile.preBuild();
		
 		log.data('Enter Ctrl+C for the exit in the repl');
 		server.start();


	},

	build:function(env){
		log.success(gulpfile.build());	

	}
};