var gulp = require('gulp');
var fs = require('fs-extra');
var __ = require('./__');

var log = require('my-log');
var msg = require('./messages');

module.exports.build = function(callback){

		fs.removeSync(__.build);
		fs.copySync(__.projectDir, __.root+'/tmp');

		fs.copySync(__.root+'/tmp', __.build+'/game');
		fs.copySync(__.vn_tpl, __.build);
		fs.removeSync(__.root+'/tmp');

		callback();
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