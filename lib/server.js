
const { join }                       = require('path');
const express                        = require('express');
const app                            = express();
const http                           = require('http').Server(app);
const io                             = require('socket.io')(http);
const gaze                           = require('gaze');
const scenesBuild                    = require('./scenes-build');
const pluginsBuilder                 = require('./plugins-builder');

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
var config = require(join(projectDir, '/vn.json'));

gaze(projectDir+'/src/scenes/**/*.yaml', function(){
  this.on('all', function(event, filepath) {
   // console.log('change')
	scenesBuild(projectDir, config.local);
	io.emit('reload');
  });

});


gaze(projectDir+'/src/plugins/**/*.html', function(){
this.on('all', function(event, filepath) {	
	pluginsBuilder(projectDir, 'html');
	io.emit('reload');
})
});
gaze(projectDir+'/src/plugins/**/*.css', function(){
this.on('all', function(event, filepath) {
	pluginsBuilder(projectDir, 'style');
	io.emit('reload');
})
});
gaze(projectDir+'/src/plugins/**/*.js', function(){
this.on('all', function(event, filepath) {	
	pluginsBuilder(projectDir, 'script');
	io.emit('reload');
})
});


http.listen(port);


};

module.exports = {
	run
};