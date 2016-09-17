var gulp = require('gulp'),
	concat = require('gulp-concat');

gulp.task('default',function(){
return gulp.src('deploy/source/plugins/**/*.js')
	.pipe(concat('plugins.js'))
	.pipe(gulp.dest('deploy/www/scripts'))
});




gulp.task('libs',function(){
return gulp.src('./deploy/source/libs/*.js')
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('deploy/www/scripts'))
});

gulp.watch(['./deploy/source/libs/*.js','./deploy/source/plugins/**/*.js'],function(){
	gulp.run('default');
	gulp.run('libs');
});