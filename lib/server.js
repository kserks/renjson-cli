'use strict'
var express = require('express');
var fs = require('fs-extra');
var __ = require('./__');
var log = require('my-log');
var open = require("open");
var $ = require('./config');
var url = `${$.protocol}${$.host}:${$.port}`;

var msg = require('./messages');

module.exports.start = function(winOpen){
	var app = express();
	var index = fs.readFileSync(__.build +'/index.html');
	app.use('/', express.static(__.build));
	app.get("/", function(req, res){
		res.send(index);
	});
	
	app.listen($.port,function(){
		if($.browser==="nw"){
			log.info("NW BROWSER");
		
				winOpen(url);
			/**
				win.open(`${$.protocol}${$.host}:$.port`);
			*/
		}else{
			open(url,$.browser);
			log.debug(url);
			log.data(msg.repl);
		}
		
	});

};