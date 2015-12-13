#! /usr/bin/env node
module.exports =  ren;
var program  = require('commander');
var open = require('open');
var npmRoot = require('npm-root');
var slash = require('slash');
var fs = require('fs-extra');

var log = require( "my-log" );
var livereload = require( "./lib/watch" );

//var cheerio = require('cheerio');

var express = require('express');

var port = 8080;
var browser = 'chrome';
var __cwd = slash(process.cwd());

var ren = {
	init:function(env){
	npmRoot({global:true},function(err,path){
		if(err){
			console.error(err);
		}
		else{
			var game_tpl = "\\renjs-cli\\game_template\\";
			var tplPath = slash(path+game_tpl);
			fs.copy(tplPath, __cwd,function(err){
				if(err){
					console.error(err);
				}
				else{
					log.debug('Project has been created');
				}
			});
		}
	});

	},

	run:function(env){
		livereload.run();

	var app = express();
	var index = fs.readFileSync( __cwd+"/index.html");
		app.use('/', express.static(__cwd));
		app.use('/devTools',express.static(__dirname+'/devTools'));

		app.get("/", function(req, res){
			res.send(index);
		});

		app.listen(port,function(){
				open('http://localhost:'+port,browser);
				log.debug('localhost:'+port.toString());	
		});
	},
	build:function(env){
		/*
			Собирать буду просто html project
			Потому что нормальный пользователь
			может исспользовать cordova,phonegap
			для мобильных приложений, а так же
			 nw или electon. SmartBox
		*/
		console.log('html project');
	},

};

program.arguments('<cmd> [env]')
  			.action(function (cmd, env) {
						ren[cmd](env);
  			});
 
program.parse(process.argv);

