#! /usr/bin/env node


var main = require('./lib/main');
var program  = require('commander');
var log = require( "my-log" );

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
}
module.exports =  main;