const
  gulp                        = require('gulp'),
  posthtml                    = require('gulp-posthtml'),
  concat                      = require('gulp-concat'),
  postcss                     = require('gulp-postcss'),
  autoprefixer                = require('autoprefixer'),
  runTask                     = require('run-sequence'),
  postcssTagPrefixer          = require('postcss-tag-prefixer'),

  babel                       = require('gulp-babel'),
  sourcemaps                  = require('gulp-sourcemaps'),
  yamlToJSON                  = require('gulp-yaml'),
  rename                      = require('gulp-rename');
const sceneToJson = require('./lib/build/platforms/local/index'); 

const __PROJECT = "E:/sandbox/gamevn/";

const __BUILD = __PROJECT+'build/local/game/';
const __buildRoot = __PROJECT+'build/local/';
const __jssrc = [
        __PROJECT+'src/screens/**/*.js', 
        __PROJECT+'src/modules/**/*.js', 
        __PROJECT+'src/plugins/**/*.js', 
        ];
const __libs = __PROJECT+'src/lib/*.js';
const __style = [
        __PROJECT+'/src/screens/**/*.css', 
        __PROJECT+'/src/screens/*.css'
        ];
const __html = __PROJECT+'src/screens/**/*.html';

gulp.task('html', () => {
  const plugins = [ 
              require('posthtml-vnjson-screen')({ defaultTag: 'section', prefix: "vnjson__" }),         
              //require('posthtml-alt-always')({ /* options */ }),        
              //require('posthtml-script-to-file')({ path: __BUILD +'screens.js' }), 
              //require('posthtml-style-to-file')({ path: __BUILD +'style.css' }),
              //require('./modules/posthtml-remove-tags/src')({tags: ['style','script']}),     
            ];


  gulp.src(__PROJECT+'src/screens/**/*.html')
    .pipe(posthtml(plugins))
    .pipe(concat('screens.html'))
   
    .pipe(gulp.dest(__BUILD))
     console.log('/screens.html'); 
});

gulp.task('style', function () {
   let plugins = [
        //autoprefixer({browsers: ['last 5 version']}),
        //postcssTagPrefixer({prefix: _prefix_}),
     // require('postcss-css-reset')({ /* options */ }),
        require('postcss-tag-to-id')({prefix: "#vnjson__"})
       
    ];
    gulp.src(__style)
      .pipe(postcss(plugins))
      .pipe(concat('style.css'))
      .pipe(gulp.dest(__BUILD))
    console.log('style.css');
});

gulp.task('scripts', function(){
  gulp.src(__jssrc)
      //.pipe(sourcemaps.init())
      
     /* .pipe(babel({
            presets: ['env']
        }))*/
      .pipe(concat('bundle.js'))
      //.pipe(sourcemaps.write('.'))
      //.pipe(gulp.dest('./dest'))
      .pipe(gulp.dest(__BUILD));
       console.log('bundle.js');
});

gulp.task('lib', function(){

  gulp.src(__libs)
  .pipe(babel())
  .pipe(concat('lib.js'))
  .pipe(gulp.dest(__BUILD))
console.log('/lib.js'); 
});

/*
runTask(['html', 'scripts', 'lib', 'style'], function(){
  console.log('--Проект собран--')
});*/


gulp.watch(__html, ['html']);
gulp.watch(__jssrc, ['scripts']);
gulp.watch(__libs, ['lib']);
gulp.watch(__style, ['style']);
let sceneTo = gulp.watch([__PROJECT+"src/scenes/**/*.yaml",__PROJECT+"src/scenes/**/labels/*.yaml"],function(){
sceneToJson({
      path: __PROJECT,
      notify: (err, data)=>console.log(err, data),
      local: 'ru-RU'
    })
});
var {basename} = require('path')
sceneTo.on('change', function(ev, stat){
  console.dir(`[ ${ev.type} ]: ${basename(ev.path)}`);
  console.log('Enter Ctrl+C for the exit')
});

