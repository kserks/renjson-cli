var YAML = require('yamljs');
var fs = require('fs-extra');
var __ = require('./__');
var path = require('path');
var log = require('my-log');
var msg = require('./messages');


function YAML2JSON(){
var init = {
			global:YAML.load(__.projectDir+'/global.yml'),
			config:YAML.load(__.projectDir+'/config.yml'),
			layers:YAML.load(__.projectDir+'/layers.yml'),
			package:YAML.load(__.projectDir+'/package.yml')
		};
	fs.writeJson(__.build+"/game"+"/init.json",init);	
}

module.exports.build = function(){

		fs.removeSync(__.build);
		//fs.copySync(__.projectDir, __.root+'/tmp');
		//fs.copySync(__.root+'/tmp', __.build+'/game');
		
		fs.copySync(__.vn_tpl, __.build);

		YAML2JSON();
		log.data(msg.build);
		//fs.removeSync(__.root+'/tmp');

}

