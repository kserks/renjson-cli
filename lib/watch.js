/**var livereload = require('livereload');
var __ = require('./__');
var log = require('my-log');
module.exports.run = function(){

var server = livereload.createServer();
	log.warn(__.cwd);
	server.watch(__.cwd+"/");
};*/