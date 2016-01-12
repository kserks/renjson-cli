var gulp = require('gulp');
/**var dist = "build";
gulp.task('concat',function(){
gulp.src("tmp/scene/.json")
	//.pipe(concat('vendors.js'))
	.pipe(gulp.dest(dist))
});

 		gulp.task('log', function() {
 				log.error('livereload:');

 		});
 		gulp.task('watch', function() {
 			livereload.listen({
 				basePath:__.cwd,
 				port:35729,
 				reloadPage:__.www+"/index.html",
 				//start:true
 			});
 		 	gulp.watch("/*.yml", ['log']);
		});
		gulp.run('watch');
/**

gulp.watch(['src/*.js'],function(){
	gulp.run('renjs');
	gulp.run('vendors');
});

*/
module.exports = {
	build:function(){
		/**
		 *@todo html project.
		 		- сжать изображения
		 		- минифицировать плагины
		 		- *?
		 */
		return "Проект собран";
	},
	preBuild:function(){
		/*
		 * @todo Просто преобразовать в json и склеить.
		 */
		fs.copy(__.vn_tpl, __.tmp,function(err){
			if(!err){
				fs.copy(__.cwd, __.tmp+"/game/",function(err){
					if(err){
						console.error(err);
					}
				});
			}else{
				console.error(err);
			}
		});
	}
}