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
module.exports.test = function(){
var nw = new NwBuilder({
    files: __.build+"/**", // use the glob format
  //  platforms: ['osx32', 'osx64', 'win32', 'win64'],
    version: '0.12.2',
    platforms:['win32']
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
}