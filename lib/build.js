'use strict'
var YAML = require('yamljs');
var fs = require('fs-extra');
var __ = require('./__');
var log = require('my-log');
var msg = require('./messages');
var dirTree = require('directory-tree');
var path = require('path');
var _ = require('underscore');
var slash = require('slash');

//init.json
function initToJSON(){
var init = {
			config:YAML.load(__.projectDir+'/config.yml'),
			characters:YAML.load(__.projectDir+'/characters.yml'),
			package:YAML.load(__.projectDir+'/package.yml')
		};
	fs.writeJson(__.build+"/game"+"/init.json",init);	
	fs.copySync(__.projectDir+"/layers.html", __.build+"/game/layers.html");
	fs.copySync(__.projectDir+"/style.css", __.build+"/game/style.css");
}

//scene.json
var Scenes = {};
function sceneToJSON(){
	var scenesDir = dirTree.directoryTree(__.projectDir+"/scenes");
		scenesDir.children.map(function(item){
			Scenes[item.name] = {};
			Scenes[item.name] = item.children;
			
		});
//Склеиваю label'ы в один файл сцены
var Obj = {};

_.mapObject(Scenes,function(val, scene){
var preload = [];
	_.each(val,function(item){

	var name = path.basename(item.name,path.extname(item.name) );
	var file = __.projectDir+"/scenes/"+scene+"/"+ item.name;	
		if(path.extname(item.name)===".yml"){
			var label = name;
			Obj[scene] = Obj[scene]||{};
			Obj[scene][label] = Obj[scene][label]||{};
			Obj[scene][label] = YAML.load(file);
		}else{
			/**
			 * @assets
			 */
			var from = __.projectDir+"/scenes/"+scene+"/"+slash(item.name);
			var to = __.build+"/game/assets/"+slash(item.name);
			preload.push("/assets/"+slash(item.name));
			//log.debug(slash(item.name));
			fs.copySync(from,to);
		}
	});
	var concat = Object.assign(Obj[scene],{preload:preload});
	fs.writeJson(__.build+"/game/scenes/"+scene+".json",concat);	
});

}//sceneToJSON
module.exports.build = function(){
		fs.removeSync(__.build);
		fs.copySync(__.vn_tpl, __.build);
		fs.ensureDir(__.build+"/game/scenes");
		initToJSON();
		sceneToJSON();
		log.data(msg.build);
};

