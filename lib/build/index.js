const
 local              = require('./platforms/local/index'),
 www                = require('./platforms/www');

var platformHandler = {
      local,
      www
};

module.exports = function(options){
  let { platforms } = options;
    /*  if(typeof platforms==="object"){
        platforms.forEach(function(item){
             _platformHandler[item](options);
        });
      }else if(typeof platforms==="string"){
         _platformHandler[platforms](options);
      }*/
   platformHandler["local"](options);
     
}

