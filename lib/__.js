'use strict'
const slash = require('slash');
const pkgDir = require('pkg-dir');
const root = slash(pkgDir.sync(__dirname));
const yaml_tpl = root + '/YAML_tpl/';
const vn_tpl = root + '/vn_tpl/';
const projectDir = slash(process.cwd());
const build = projectDir+"/build/www";

module.exports = {
		projectDir:projectDir,
		      root:root,
		  yaml_tpl:yaml_tpl,
		    vn_tpl:vn_tpl,
             build:build,
             cache:`${root}/cache`
};
