'use strict'
var path = require('path');
const slash = require('slash');
const pkgDir = require('pkg-dir');
const root = slash(pkgDir.sync(__dirname));
const yaml_tpl = root + '/YAML_tpl/';
const projectDir = slash(process.cwd());

const build = `${projectDir}/build/www`;
module.exports = {
		projectDir:projectDir,
		      root:root,
		  yaml_tpl:yaml_tpl,
	           cwd:projectDir,
	          game:build+"/game",
             build:build,
             cache:`${root}/cache`,
              conf:`${projectDir}/vn.json`
};
