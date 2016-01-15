var YAML = require('yamljs');
var fs = require('fs-extra');
var __ = require('./__');
var path = require('path');
var log = require('my-log');
var msg = require('./messages');
var walk = require('walk-folder-tree');
var glob = require('glob');
var path = require('path');
function initToJSON(){
var init = {
			global:YAML.load(__.projectDir+'/global.yml'),
			config:YAML.load(__.projectDir+'/config.yml'),
			layers:YAML.load(__.projectDir+'/layers.yml'),
			package:YAML.load(__.projectDir+'/package.yml')
		};
	fs.writeJson(__.build+"/game"+"/init.json",init);	
}
var scenes = [];
function callback(){

	var scene = {
			characters:YAML.load(__.projectDir+"/scenes/"+scenes[1]+'/characters.yml'),
			preload:require(__.projectDir+"/scenes/"+scenes[1]+'/preload.json')
	};
		fs.writeJson(__.build+"/game/scenes/"+scenes[1]+".json",scene);	

}
function sceneToJSON(){
	

	glob(__.projectDir+"/scenes/*",function(err,item){
		item.forEach(function(dir){
			scenes.push(path.basename(dir) );
		});
		callback();
	});

	/*
var tree = [];
walk(__.projectDir+"/scenes",  function(params, cb) {
   // console.log('Found file: ', params.path);
    tree.push(params);

    cb();
}).then(function(){
   tree.map(function(item){
   	//if(item.directory)
   		log.warn(item.path)
   })

*/
  // log.debug(Object.keys(tree[0].stat))

//});
	
}
module.exports.build = function(){
		fs.removeSync(__.build);
		fs.copySync(__.vn_tpl, __.build);
		fs.ensureDir(__.build+"/game/scenes");
		initToJSON();
		sceneToJSON()
		log.data(msg.build);
}

