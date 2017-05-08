const 
  path                          = require('path'),
  fs                            = require('fs-extra'),
  npmRoot                       = require('../modules/npm-root/index');
  


function init(options){

npmRoot(options.scope)
    .then(function(__npmroot){
      let __gameTpl = path.join(__npmroot,'vnjson-cli','game-tpl');
          try {
                fs.copySync(path.join(__gameTpl,'/game'), options.path);
                options.notify(null, "Шаблон [ game ] скопирован");
          }catch (err) {
                
                options.notify(err);
          }

          try {
                fs.copySync(path.join(__gameTpl,'/html'), path.join(options.path, 'build/local'));
                options.notify(null, "Шаблон [ html ] скопирован");
          }catch (err) {
                
                options.notify(err);
          }
    })
    .catch(options.notify)

};


module.exports = init;