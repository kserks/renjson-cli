'use strict'
const build = require('./build');
const __ = require('./__');
const server = require('./server');
const fs = require('fs-extra');
const log = require( "my-log" );
const msg = require('./messages');
const pkg = require('../package');
const NwBuilder = require('nw-builder');
const $b = require('./config').build;
const exec = require('child_process').exec;

//const current = require('./current');

module.exports = {
	init:function(env){
		fs.copy(__.yaml_tpl, __.projectDir,function(err){
				if(err){
					log.error(err);
				}else{
					log.success(msg.created);
				}
			});
	},
	"run":function(platform){
			build.build(); /**build www*/
			if(!platform){
				server.start();
			}else{
			let path = `${__.projectDir}/build/${platform}/${$b.appName}.exe `;
				exec(path,(error,stdout,stderr)=>{
					if(error){
						log.error(stderr);
					}else{
						log.data(platform);
					}
				});
			};
	},
	"rm":function(){
		fs.remove(__.projectDir+"/*", function (err) {
  			if (err){
  				log.error(err);
  			}else{
  				
  				log.warn(msg['vn_rm']);
  			}
		});
		log.error();
		
	},
	build:function(platforms){
		
		if(!platforms){
			build.build(); //html project
		}else{
			build.build();
			var nw = new NwBuilder({
    			files: __.build+"/**", 
    			version: $b.version,
    			platforms: platforms,
    			appName:$b.appName,
    			appVersion: $b.appVersion,
    			buildDir:$b.buildDir,
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
	/*"version":function(){
		log.info(pkg.version);
	},
	"help":function(){
		log.data("help - help");
		log.data("version - vnjson-cli version");
		log.data("init - initialize project");
		log.data("rm - remove current project");
		log.data(". - app run");
		log.data("build - build html project");
		log.info("build --win32 --linux32 --osx32 --win64 --linux64 --osx64");
	},
*/
};
module.exports.__ = __;
module.exports.test = function(){

}
