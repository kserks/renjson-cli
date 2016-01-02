var livereload = require('livereload');

var slash = require('slash');
var log = require('my-log');
module.exports.run = function(){
var __cwd = slash(process.cwd());

var server = livereload.createServer();
server.watch(__cwd);
log.info(__cwd);

};