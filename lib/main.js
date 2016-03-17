'use strict'
const build = require('./build');
const __ = require('./__');
const server = require('./server');
const fs = require('fs-extra');
const log = require( "my-log" );
const msg = require('./messages');
const pkg = require('../package');
const NwBuilder = require('nw-builder');



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
	/*
	"rm":function(){
		fs.remove(__.projectDir, function (err) {
  			if (err){
  				log.error(err);
  			}
  			else{
  				log.info('success!')
  			}
		});
	},*/
	build:function(platforms){
		
		if(!platforms){
			build.build(); //html project
		}else{
			build.build();
			var nw = new NwBuilder({
    			files: __.build+"/**", 
    			version: '0.12.2',
    			platforms: platforms,
    			appName:"redrenrel",
    			appVersion: "0.0.7",
    			buildDir:'./build',
    			cacheDir:`${__.root}/cache`
			});
			nw.on('log',  log.info);
			nw.build().then(function () {
   				log.debug('all done!');
			}).catch(function (error) {
    			log.error(error);
			});

		}
	},
	"-v":function(){
		log.info(pkg.version);
	}
};
module.exports.__ = __;
module.exports.test = function(){
	log.error(process.platform);
}