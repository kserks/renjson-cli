const
  YAML                                 = require('yamljs'),
  gulp                                 = require('gulp'),
  fs                                   = require('fs-extra');



function copyPaste(){
	/*
	 * @config.yml to init.json
	 */
	fs.writeJson(build.init, YAML.load(src.config));	
	/*
	 * @package.yml to package.json
	 */
	fs.writeJson(build.package, YAML.load(src.package));
	/*copy static*/
	fs.copySync(src.layers, build.layers);
	fs.copySync(src.style,build.style);
	fs.copySync(__root+'/src/images', __root+'/tmp/images');
};






function prebuild(__root, statusReporter){

var srcDir = __root+"/"+"src";
var tmpDir = __root+"/"+"tmp";

const src = {
	package: srcDir+'/package.yml',
	config: srcDir+'/config.yml',
	layers: srcDir+"/layers.html",
	style: srcDir+"/style.css",
	scenes: srcDir+"/scenes"
};

const build = {
	init: tmpDir +"/game/init.json",
	layers: tmpDir +"/game/layers.html",
	style:  tmpDir +"/game/style.css",
	scenes: tmpDir +"/game/scenes/",
	package: tmpDir +"/package.json",
};


copyPaste();
//statusReporter('prebuid');
}



	



module.exports = prebuild;