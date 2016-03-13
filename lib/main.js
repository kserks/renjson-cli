'use strict'
var build = require('./build');
var __ = require('./__');
var server = require('./server');
var fs = require('fs-extra');
var log = require( "my-log" );
var msg = require('./messages');
var pkg = require('../package')
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

	".":function(env){
		build.build();	
 		server.start();
	},

	build:function(env){
		build.build();	
	},
	"-v":function(){
		log.debug(pkg.version);
	},
	"--version":function(){
		log.info(pkg.version);
	}
};
module.exports.test = function(){
	log.error('test');
}