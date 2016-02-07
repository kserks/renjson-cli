var slash = require('slash');
//tmp// C:/User/.rensjoncli
var root = slash(process.env.APPDATA)+"/npm/node_modules/renjson-cli";
var yaml_tpl = root + '/YAML_tpl/';
var vn_tpl = root + '/vn_tpl/';
var projectDir = "F:/ren_PROJECTS/game";//process.cwd();
var build = projectDir+"/build";

var __ = {
		projectDir:projectDir,
		root:root,
		yaml_tpl:yaml_tpl,
		vn_tpl:vn_tpl,
		build:build
};

module.exports = __;
