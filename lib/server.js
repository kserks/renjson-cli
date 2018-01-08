
var { join } = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const scenesBuild  = require('./scenes-build');
var gaze = require('gaze');

function run(dir, port=9090, projectDir){

app.use( express.static(dir));

app.use(express.static(join(__dirname, '../static')));
app.get('/', function(req, res){
  res.sendFile(dir + '/index.html');
});

io.on('connection', function(socket){
  console.log('Browser is opened');

});

/*
 *
 */


gaze(projectDir+'/src/scenes/**/*.yaml', function(){
  this.on('all', function(event, filepath) {
   // console.log('Изменение!!')
	scenesBuild(projectDir/*,local*/);
	io.emit('reload');
  });

});

//gaze([
//		projectDir+'/src/plugins/**/*.html',
//		projectDir+'/src/plugins/**/*.css',
//		projectDir+'/src/plugins/**/*.js',
/*	], function(){
		this.on('all', function(event, filepath){

			io.emit('reload')
		})
	});
*/


http.listen(port);


}

module.exports = {
	run
};