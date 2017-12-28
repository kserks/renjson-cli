
'-------------------vendors-----------------------------'
const { join } 					= require('path');
const log 						= require('hexo-log')();

'-------------------userdeps----------------------------'
const vnjs 						= require('./vnjs');
const projectDir 				= process.cwd();
const scenesBuild               = require('./lib/scenes-build');



/**
 * Подключение модулей
 */
require('./modules.json').map( m=>require(m) );

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
	scenesBuild(projectDir/*,local*/);

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
	init
}

