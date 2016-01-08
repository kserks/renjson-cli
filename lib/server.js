var express = require('express');
var fs = require('fs-extra');
var __ = require('./__');
var log = require('my-log');
var open = require("open");
var config = require('./config');

var url = "http://localhost:"+ config.port;
var app = express();
	var index = fs.readFileSync(__.tmp +'/index.html');
	
		//app.use('/devTools',express.static(__dirname+'/devTools'));
	app.use('/', express.static(__.tmp));
	app.get("/", function(req, res){
		res.send(index+"hello");
	});

app.listen(config.port,function(){

	log.success(url);
	open(url,config.brouser);
});