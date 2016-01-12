var gulpfile = require('./gulpfile');
//var livereload = require('gulp-livereload');
var __ = require('./__');
var server = require('./server');
var fs = require('fs-extra');
var log = require( "my-log" );

var msg = require('./messages');
var YAML = require('yamljs');
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
		gulpfile.build(function(){
			server.start();
		});	
 		
	},

	build:function(env){
		gulpfile.build();	
	},
	test:function(){
		var init = {
			global:YAML.load(__.projectDir+'/global.yml'),
			config:YAML.load(__.projectDir+'/config.yml'),
			layers:YAML.load(__.projectDir+'/layers.yml'),
			package:YAML.load(__.projectDir+'/package.yml')
		};
		//var nativeObject = YAML.load(__.projectDir+'/config.yml');

		fs.writeJson(__.projectDir+"/init.json",init);

	}
};