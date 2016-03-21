#! /usr/bin/env node
'use strict'
process.title = 'vnjson-cli';

const log = require('my-log');
const main = require('../lib/main.js');
const dirTree = require('walk-dir-tree');
const co = require('co');


const program = require('commander');
program
  .command('*')
  .action(function(env){
    log.warn('Неверная команда', env);
  });

program
	.command('init')
	.description('initialize project')
	.action(()=>{
		main['init']();
	});
program
	.command('tree')
	.description('file structure project')
	.action(()=>{
		co(dirTree(process.cwd()))
			.then(function(str) {
  				console.log(str.join('\n'))
			})
			.catch(function(err) {
  				console.error(err.stack)
			});
	})
program
	.command('help')
	.description('list commands')
	.action(()=>{
		program.outputHelp();
	});
program
	.command('rm <param>')
	.description('remove projects')
	.action(function(param){
		if(param){

		}else{
		
		}
	})
 
program.parse(process.argv);

/*

if(args[0]==="build"){
	if(args.length>1){
		let platforms = [];
		args.slice(1).map(function(p){
			platforms.push( p.match(/\w+/gi)[0] );

		});
		main['build'](platforms);
	}else{
		main['build']();
	}
}else if(args[0]==="run"){
	if(args.length>1){
	let platform = args[1].match(/\w+/gi)[0]
		main['run'](platform);
	}else{
		main['run']();
	}

}else{
	main[args[0]]();
}*/
/*
args.map(function(key){
if(key==="build"){
	main[key]();
}else{
	main[key]();
}
			
});*/