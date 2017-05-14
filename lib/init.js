const 
  path                          = require('path'),
  fs                            = require('fs-extra'),
  npmRoot                       = require('npm-root');

/* @type Object
 *   @param path String
 *   @param global Boolean
 *   @param notify Function
 */  
function init(options){

let param = { global: options.global };

function handler(err, __npmroot){

      let __gameTplRoot = path.join(__npmroot,'vnjson-cli','game-tpl');
          try {
                fs.copySync(path.join(__gameTplRoot,'/game'), options.path);
                fs.copySync(path.join(__gameTplRoot,'/html'), path.join(options.path, 'build/local'));
               // options.notify(null, "Шаблон [ html ] скопирован");
                options.notify(null, __npmroot);

          }catch (err) {
                
                options.notify(err);
          }
};

npmRoot(param, handler);  


};

module.exports = init;