var gulpfile = require('./gulpfile');
//var livereload = require('gulp-livereload');
var __ = require('./__');

var fs = require('fs-extra');
var log = require( "my-log" );

var msg = require('./messages');

module.exports = {
	init:function(env){
		if(env==="yaml"){
			fs.copy(__.scenes_tpl+"YAML", __.projectDir,function(err){
				if(err){
					console.error(err);
				}else{
					log.debug(msg.created);
				}
			});
		}else if(env==="json5"){
			fs.copy(__.scenes_tpl+"JSON5", __.projectDir,function(err){
				if(err){
					console.error(err);
				}else{
					log.debug(msg.created);
				}
			});
		}else{
			log.warn('Enter the params');
		}
	},

	run:function(env){
		gulpfile.preBuild();
		
 		log.data(msg.repl);
 		
	},

	build:function(env){
			gulpfile.build();	
	}
};