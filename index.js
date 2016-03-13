#! /usr/bin/env node

var main = require('./lib/main');
//var program  = require('commander');
var log = require( "my-log" );
//if(!module.parent){}
/**
* if('--nw'){
	exec(nw ./path)
	ren . --default //nw 
	ren . --firefox
	ren . --chrome
	}

if(module.parent){
	//ren . --nw
}else{
	ren . --chrome
}

*/
/*
var cmdValue;
var cmdEnv;

program
	.arguments('<cmd> [env]')
  	.action(function (cmd, env){
  			cmdValue = cmd;
  			cmdEnv = env;
  	})
   	.parse(process.argv);
if(typeof cmdValue === 'undefined'){
   log.warn('Enter the command');
   process.exit(1);
}else{
	main[cmdValue](cmdEnv);
}*/


if(module.parent){
	module.exports =  main;
}else{
let args = process.argv.slice(2);
let config = require('./config');
let __ = require('./__');

const cmd = {
	'help':function(){
		log.data('help - Помощь');
		log.debug('init - Инициализация проекта');
		log.info('. - Запустить проект; [--firefox,--chrome]');
		log.error('version - Версия текущего проекта')
	},
	'init':function(){
		log.error('-- init --')
		/**
		 * init === www
		 */
	},
	'version':function(){
		
		log.error(__.pkg.version);
	},
	'.':function(){
		server.run();
	},
	'--firefox':function(){
		config.browser = "firefox";
	},
	'--chrome':function(){
		config.browser = "chrome";
	},
	//'--port':()=>{config.port=}

}
args.map(function(key){
		cmd[key]();	
});
}
