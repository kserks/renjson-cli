'use strict'
var express = require('express');
var fs = require('fs-extra');
var dir = require('./dirname');


module.exports.start = function(port,callback){



var url = `http://localhost:9090`;

	var app = express();
	var index = fs.readFileSync(`${dir['deploy']}/www/index.html`);
	app.use('/', express.static(dir['deploy']+'/www'));
	app.get("/", function(req, res){
		res.send(index);
	});

	if(port&&callback){
		app.listen(port,callback);
	}else{
		app.listen(9090);
		console.log(`open: ${url}`);
	}
	
};

