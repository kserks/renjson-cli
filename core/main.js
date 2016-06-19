
const
  dir              = require('./dirname'),
  gutil            = require('gulp-util'),
  msg              = require('../data/messages.json'),
  fs               = require('fs-extra');

module.exports = {
	init:(name,projects_dir,callback)=>{

		if(projects_dir&&name&&callback){
			fs.copy(dir['init_tpl'],`${projects_dir}/${name}`,(err)=>{
					callback(err);
			});
			
		}else{
			if(name){
				fs.copy(dir['init_tpl'], `${dir['project']}/${name}`,(err)=>{
					if(err){
						gutil.log(gutil.colors.red(err));
					}else{
						gutil.log(gutil.colors.cyan(msg['created']));
					}
				});
			}else{
				fs.copy(dir['init_tpl'], dir['project'],(err)=>{
					if(err){
						gutil.log(gutil.colors.red(err));
					}else{
						gutil.log(gutil.colors.cyan(msg['created']));
					}
				});
			}
			
		}
	},
	remove:(path,callback)=>{
	fs.remove(path,(err)=>{
  	if(err){
  		if(callback){
  			callback(err);
  		}else{
  			gutil.log(gutil.colors.magenta(msg['err_rm']));
  		}
  	}else{
  		
  		if(callback){
  			callback();
  		}else{
  			 gutil.log(gutil.colors.red("removed"));
  		}
  	}

	});


	},
	run:()=>{

			//build.build(); /**build www*/
			//server.start();
			gutil.log(gutil.colors.magenta("run"));
	},

	build:()=>{
			//build.build();
			gutil.log(gutil.colors.cyan("building"));
	}
};

module.exports.test = ()=>{

console.log('test');

}
