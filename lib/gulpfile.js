var gulp = require('gulp');
var fs = require('fs-extra');
var __ = require('./__');
var server = require('./server');
var log = require('my-log');
var msg = require('./messages');

module.exports = {
	build:function(){
		/*
		 * @todo Просто преобразовать в json и склеить.
		 */
		 //Удаляем папку tmp что бы не было рекурсии
		fs.removeSync(__.build);
			/*fs.copy(__.vn_tpl, __.build,function(error){
				if(!error){
					
				}else{
					console.error(err);
				}
			});*/
			fs.copy(__.projectDir, __.build,function(err){
						if(err){
							console.error(err);
						}else{
							//server.start();
						}
			});
}
}


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