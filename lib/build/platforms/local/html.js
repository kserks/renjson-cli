const
  gulp                        = require('gulp'),
  posthtml                    = require('gulp-posthtml'),
  vnjsonScreens               = require('posthtml-vnjson-screen'),
  runTask                     = require('run-sequence'),
 // alt                         = require('posthtml-alt-always'),
  concat                      = require('gulp-concat');

const plugins = [ 
              vnjsonScreens({ defaultTag: 'section', prefix: "vnjson__" }),         
             // alt({ /* options */ }),        
              //require('posthtml-script-to-file')({ path: __BUILD +'screens.js' }), 
              //require('posthtml-style-to-file')({ path: __BUILD +'style.css' }),
              require('posthtml-remove-tags')({tags: ['style','script']}),     
            ];

function html(options){
  let { src, dest } = options;
  gulp.task('html', function(){

    gulp.src(src)
    .pipe(posthtml(plugins))
    .pipe(concat('screens.html'))
    
    .pipe(gulp.dest(dest))
});

runTask(['html'], function(){
  console.log('--/html--')
});

gulp.watch(src, ['html']);

};//html



module.exports = html;