
'-------------------vendors-----------------------------'
const { join } 					= require('path');
const log 						= require('hexo-log')();

'-------------------userdeps----------------------------'
const vnjs 						= require('./vnjs');
const projectDir 				= process.cwd();
const scenesBuild               = require('./lib/scenes-build');
const pluginsBuilder =  require('./lib/plugins-builder');
const staticServer = require('./lib/server');

const del = require('del');




/**
 * Подключение модулей
 */
//------------node_modules - сделать чтоб устанавливалось
// в эту директорию
//npm install <github username>/<github project>' 
//--------------read-package-tree
//--------------npmlog
require('./modules.json').map( m=>require(m) );

function run(){
	var tmpBuild = join(projectDir, './build/tmp/game');
		del.sync([tmpBuild, '!icons']);
	
	//=>server
	var config = require(join(projectDir, '/vn.json'));
	const PORT = config.port;
const LOCAL = config.local;
	/*
		Запускаем сервер, собираем сцены и плагины

	*/
	 scenesBuild(projectDir, LOCAL);
	 pluginsBuilder(projectDir, 'all');
	 staticServer.run(join(projectDir, './build/tmp' ), PORT, projectDir);
	 log.warn(`Open in your browser - http://localhost:${PORT}`);
	 log.warn('Press Ctrl+C for kill process');	
}

/*
    todo - очищать папку перед копированием, что бы мусора небыло
*/
function init(){

/*
 * Копирование бойлерплэйта
 */
vnjs.emit('project-init', projectDir, function (err){
	if(err){
		log.error(err)
		throw err;
	}

	log.info('Files copied');
	/*
	 * Первая сборка плагинов и сцены
	 */

	//buildPlugins();
	/*
	 * Событие сборки проекта
	 */
	//vnjs.emit('project-created', { port: 9192, /*browser: 'firefox'*/ });
	/*
 	 * Сообщение
	 */

	 log.info('Project has been created');
	
});//emit


};






module.exports = {
	init,
	run
}

