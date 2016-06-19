'use strict'
var express = require('express');
var fs = require('fs-extra');
var __ = require('./__');
var log = require('my-log');
var open = require("open");

var msg = require('./messages');

module.exports.start = function(){
let indexPath = __.build +'/index.html';	
require('./index_tpl.js').compile(indexPath);//index.mustache=>index.html
var conf = require(__.conf);

var url = `http://localhost:${conf.port}`;

	var app = express();
	var index = fs.readFileSync(indexPath);
	app.use('/', express.static(__.build));
	app.get("/", function(req, res){
		res.send(index);
	});

	if(conf.debug){
		app.get("/debug.js", function(req, res){
			res.sendfile(__.root+"/debug/debug.js");
		});
	}
	app.listen(conf.port,function(){
			if(conf.browser===""){
				log.info(msg["url"]);
				log.warn(url);
				log.data(msg.replExit);
			}else{
				open(url,conf.browser);
				log.debug(url);
				log.data(msg.replExit);
			}
	});

};

