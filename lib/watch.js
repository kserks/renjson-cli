var livereload = require('livereload');
var __ = require('./__');
module.exports.run = function(){

var server = livereload.createServer();
	server.watch('./');
};