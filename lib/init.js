
const
  pkgDir                         = require('pkg-dir'),
  slash                          = require('slash'),
  fs                             = require('fs-extra');


let package_root = slash(pkgDir.sync(__dirname));
const __deploy = `${package_root}/deploy`;

function init (pathToProjectsDir, callback){

	fs.copy(__deploy, pathToProjectsDir,(err)=>{
		if(err){
			callback("fail", err);
		}else{
			callback("done");
		}
					
	});
};

module.exports = init;