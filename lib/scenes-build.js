const { join } = require('path');
const vnjs = require('../vnjs');
const log = require('hexo-log')();

function scenesBuild (projectDir, local='ru-RU'){
 
const data = {
		src:  join(projectDir, '/src/scenes'),
		dist: join(projectDir, `/build/tmp/game/scenes/${local}`),
		notify: err=>{
		           if(err){
			         log.error(err);
			         throw err;
		           }
		           log.info('Scenes has been building');
		}		
};//data

	vnjs.emit('scenesToJson', data);
};


module.exports = scenesBuild;