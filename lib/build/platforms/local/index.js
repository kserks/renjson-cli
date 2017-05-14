
const 
  scenesToJson            = require('scenes-to-json'),
  buildHTML               = require('./html'),
  { join }                = require('path');

module.exports = function(options){
//const __project = "E:/sandbox/gamevn/";

/*
const __BUILD = __project+'build/local/game/';
const __buildRoot = __project+'build/local/';
*/

  let { local, path, notify } = options;
  let dest = join(path,'build/local/game');

  let __src = join(path,"src/scenes");
  let __dist = join(dest,`scenes/${local}`);
  

scenesToJson(__src, __dist, notify);

 buildHTML({
        src: join(path,'src/screens/**/*.html'), 
        dest,
      })
}