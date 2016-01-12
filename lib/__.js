var slash = require('slash');

var root = slash(process.env.APPDATA)+"/npm/node_modules/renjson-cli/";
var scenes_tpl = root + 'scenes_tpl/';
var vn_tpl = root + 'vn_tpl/';
var projectDir = "F:/ren_PROJECTS/game";//process.cwd();
var build = projectDir+"/build";


var __ = {
		projectDir:projectDir,
		root:root,
		scenes_tpl:scenes_tpl,
		vn_tpl:vn_tpl,
		build:build

};

module.exports = __;
