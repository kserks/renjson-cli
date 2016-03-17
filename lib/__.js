'use strict'
var slash = require('slash');
var root = slash(process.env.APPDATA)+"/npm/node_modules/vnjson-cli";
var yaml_tpl = root + '/YAML_tpl/';
var vn_tpl = root + '/vn_tpl/';
var projectDir = slash(process.cwd());
var build = projectDir+"/build/www";


module.exports = {
		projectDir:projectDir,
		root:root,
		yaml_tpl:yaml_tpl,
		vn_tpl:vn_tpl,
		build:build
};
