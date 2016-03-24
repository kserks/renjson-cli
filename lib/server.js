'use strict'
var express = require('express');
var fs = require('fs-extra');
var __ = require('./__');
var log = require('my-log');
var open = require("open");


var msg = require('./messages');

module.exports.start = function(){
var $ = require(__.conf);
var url = `${$.protocol}${$.host}:${$.port}`;

	var app = express();
	var index = fs.readFileSync(__.build +'/index.html');
	app.use('/', express.static(__.build));
	app.get("/", function(req, res){
		res.send(index);
	});
	
	app.listen($.port,function(){
			if($.browser===""){
				log.info(msg["url"]);
				log.warn(url);
				log.data(msg.replExit);
			}else{
				open(url,$.browser);
				log.debug(url);
				log.data(msg.replExit);
			}
	});

};

