'use strict'
const build = require('./build');
const __ = require('./__');
const server = require('./server');
const fs = require('fs-extra');
const log = require( "my-log" );
const msg = require('./messages');
const pkg = require('../package');
const NwBuilder = require('nw-builder');

const exec = require('child_process').exec;
const _ = require('underscore');
//const current = require('./current');

module.exports = {
	init:function(name){
		if(name){
			fs.copySync(__.yaml_tpl,`${__.cwd}/${name}`);
		}else{
			fs.copySync(__.yaml_tpl,__.projectDir);
		}
	},
	"run":function(platform){
			//build.build(); /**build www*/
			server.start();
			/*if(platform){	
				let path = `${__.projectDir}/build/${platform}/${$b.appName}.exe `;
				exec(path,(error,stdout,stderr)=>{
					if(error){
						log.error(stderr);
					}
				});
			
			}else{
				
			};*/
	},
	"rm":function(path){
		if(path){
		fs.remove(`${__.projectDir}/${path}`, function (err) {
  			if (err){
  				log.error(err);
  			}else{
  				
  				log.warn(msg['vn_rm']);
  			}
		});
		}else{
		fs.remove(__.projectDir+"/*", function (err) {
  			if (err){
  				log.error(err);
  			}else{
  				
  				log.warn(msg['vn_rm']);
  			}
		});
		}
		
	},
	build:function(platforms){
			build.build();
		if(platforms.length!==0){	
			let $b = require(__.conf).build;
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
			nw.build().then(function(){
   				log.debug('all done!');
			}).catch(function (error) {
    			log.error(error);
			});
		}//if
	}
};

module.exports.test = function(){



}
