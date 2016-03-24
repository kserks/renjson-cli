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
var copy = require('gently-copy');

var src = {
	package:__.projectDir+'/package.yml',
	config:__.projectDir+'/config.yml',
	characters:__.projectDir+'/characters.yml',
	layers:__.projectDir+"/layers.html",
	style:__.projectDir+"/style.css",
	scenes:__.projectDir+"/scenes"
}
var build = {
	init:__.build+"/game/init.json",
	layers:__.build+"/game/layers.html",
	style: __.build+"/game/style.css",
	scenes:__.build+"/game/scenes/",
	package:__.build+"/package.json",
}


/**
 * !ignore
 * !compile
 * index.html, style.css, /icons, etc...
 */
function copyNotCompile(){
	let ignore1 = require(__.conf).ignore;
	let ignore2 = [
			'characters.yml',
			'package.yml',
			'config.yml',
			'layers.yml',
			'vn.json',
			'scenes'
		];
	let ignoreUnion = _.union(ignore1,ignore2);
	let projectDirArray = fs.readdirSync(__.projectDir);
	let difference = _.difference(projectDirArray,ignoreUnion);
	copy(difference,__.game);
}
/**
 * package.json
 */
function filePackageJSON(){
	let packageVN = YAML.load(src.package);
	fs.writeJson(build.package, packageVN);	
}

//init.json
function initToJSON(){
var init = {
			config:YAML.load(src.config),
			characters:YAML.load(src.characters),
		};
	fs.writeJson(build.init,init);	
	fs.copySync(src.layers, build.layers);
	fs.copySync(src.style,build.style);
}

//scene.json
var Scenes = {};
function sceneToJSON(){
	var scenesDir = dirTree.directoryTree(src.scenes);
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
	fs.writeJson(build.scenes+scene+".json",concat);	
});

}//sceneToJSON

module.exports.build = function(){
		copyNotCompile();//layers.html,style.css
		filePackageJSON(); //package.json
		initToJSON();//game/inin.json
		sceneToJSON();//game/scenes/*.json
		log.info(msg.build);
};