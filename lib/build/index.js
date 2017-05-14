const
 local              = require('./platforms/local/index'),
 www                = require('./platforms/www');


/*
 * @type String
 */


var platformHandler = {
      local,//local
      www
};

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
  local(options);
     
}

