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
					}
				});
			};
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
		
		if(!platforms){
			build.build(); //html project
		}else{
			let $b = require(__.conf).build;
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
	}
};

module.exports.test = function(){
let ignore = require(__.conf).ignore;
let dir = fs.readdirSync(__.projectDir);
/*
dir.map(function(item){
	if(!/build/.test(item)){
		log.info(item);
	}
	ignore.map(function(){})
	
});*/
let files = _.difference(dir,ignore)
log.debug(files)
/*
copy.each(['foo.txt', 'bar.txt', 'baz.txt'], 'dist', function(err, files) {
  // exposes the vinyl `files` created when the files are copied 
});*/

}
