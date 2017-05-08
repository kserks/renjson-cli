/*
 * @type String
 */
const local = 'ru-RU';
/*
 * Load deps
 */
const
  builder                       = require('./build/index'),
  init                          = require('./init'),
  server                        = require('./server');

var command = command||{};


/*
 * @type object
 *  @param path String
 *  @param scope String [ -g ]
 *  @param notify Function
 */
command.init = init;
/*
 * @type object
 *  @param path String
 *  @param port Number
 *  @param scope String [ -g ]
 *  @param notify Function
 */
command.start = function(options){
  server(options);
  require('../gulpfile');
};
/* 
 * @param Array [ "local", "www" ]
 * @param String "local"
 */
command.build =function (options){
      builder(Object.assign(options, { local }));
      /* Так же во время сборки можно обновить статику из би

      шаблона game-tpl/html в process.cwd() с игрой */
};



module.exports = function(cmd, param){
        command[cmd](param);
};