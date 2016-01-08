var gulp = require('gulp');
var dist = "build";
gulp.task('concat',function(){
gulp.src("tmp/scene/.json")
	//.pipe(concat('vendors.js'))
	.pipe(gulp.dest(dist))
});


/**

gulp.watch(['src/*.js'],function(){
	gulp.run('renjs');
	gulp.run('vendors');
});

*/