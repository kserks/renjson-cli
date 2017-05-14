const
  path                          = require('path'),
  express                       = require('express'),
  fs                            = require('fs-extra'),
  app                           = express();




/*
 * @type object
 *  @param path String
 *  @param port Number
 *  @param scope String [ -g ]
 *  @param notify Function
 */
function start(options){

let __local = path.join(options.path,'build/local');
let index = fs.readFileSync(path.join(__local,'/index.html'));
  /*
   * @app block
   */
  app.use('/', express.static(__local));
  app.get('/',(req, res)=>res.send(index));

  app.listen(options.port, function(){
        options.notify(null);
  });

};//start


module.exports = start;