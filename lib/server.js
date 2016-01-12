var express = require('express');
var fs = require('fs-extra');
var __ = require('./__');
var log = require('my-log');
var open = require("open");
var config = require('./config');
var url = config.protocol.concat(config.host,config.port);



module.exports.start = function(){
	var app = express();
	var index = fs.readFileSync(__.tmp +'/index.html');
	app.use('/', express.static(__.tmp));
	app.get("/", function(req, res){
		res.send(index);
	});

	app.listen(config.port,function(){

		log.success(url);
		open(url,config.brouser);
	});
};