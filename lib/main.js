var build = require('./build');
//var livereload = require('gulp-livereload');
var __ = require('./__');
var server = require('./server');
var fs = require('fs-extra');
var log = require( "my-log" );
var msg = require('./messages');

module.exports = {
	init:function(env){
		fs.copy(__.yaml_tpl, __.projectDir,function(err){
				if(err){
					console.error(err);
				}else{
					log.debug(msg.created);
				}
			});
	},

	run:function(env){
		build.build();	
 		server.start();
	},

	build:function(env){
		build.build();	
	}
};
module.exports.test = function(){
	log.error('test');
}