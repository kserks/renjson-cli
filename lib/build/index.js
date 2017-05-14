const
 localBuild              = require('vnjson-local-builder');

//localBuild = require('./platforms/local/index')

module.exports = function(options){

 // Object.assign(options, { local })
 // let { platforms } = options;
    /*  if(typeof platforms==="object"){
        platforms.forEach(function(item){
             _platformHandler[item](options);
        });
      }else if(typeof platforms==="string"){
         _platformHandler[platforms](options);
      }*/
 localBuild(options);
     
}

