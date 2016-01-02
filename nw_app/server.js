var express = require('express');
var fs = require('fs-extra');
var port = 8080;
var __cwd = process.cwd();
var app = express();
	//var index = fs.readFileSync(__cwd +"/game_template/index.html");
	
		//app.use('/devTools',express.static(__dirname+'/devTools'));
	app.use('/', express.static(__cwd +'/game_template/'));
	app.get("/", function(req, res){
		res.sendfile(__cwd +'/game_template/');
			
	});

app.listen(port);