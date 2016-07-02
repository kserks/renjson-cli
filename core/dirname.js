/*
var path = require('path');
const 


const yaml_tpl = root + '/YAML_tpl/';


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
*/
const
  pkgDir         = require('pkg-dir'),
  slash          = require('slash');

let package_root = slash(pkgDir.sync(__dirname));
let project = slash(process.cwd());
module.exports = {
			package_root : package_root,
	            deploy : `${package_root}/deploy`,
	             project : project
}