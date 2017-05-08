//const gulp = require('gulp');
const sceneToJson        = require('./sceneToJson');
const { join }                = require('path');

module.exports = function(options){
  let { local, path, notify} = options;
  let __src = join(path,"src/scenes");
  let __dist = join(path,`build/local/game/scenes/${local}`);
  let __assetsDist = join(path,`build/local/game/assets/`);
  sceneToJson(__src, __dist, notify, __assetsDist);
 
}