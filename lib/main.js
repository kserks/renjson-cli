'use strict'
let build = require('./build');
let __ = require('./__');
let server = require('./server');
let fs = require('fs-extra');
let log = require( "my-log" );
let msg = require('./messages');
let pkg = require('../package');
module.exports = {
	init:function(env){
		fs.copy(__.yaml_tpl, __.projectDir,function(err){
				if(err){
					log.error(err);
				}else{
					log.debug(msg.created);
				}
			});
	},

	".":function(env){
		build.build();
 		server.start(env);
	},
	"rm":function(){
		fs.remove(__.projectDir, function (err) {
  			if (err){
  				log.error(err);
  			}
  			else{
  				log.info('success!')
  			}
		});
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
module.exports.__ = __;