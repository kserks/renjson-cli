
const { join } = require('path');
const vnjs = require('../vnjs');
const log = require('hexo-log')();

function pluginsBuilder(projectDir){


const data = {
	src: join(projectDir, "/src/plugins"),
	dest: join(projectDir, "/build/tmp/game"),
	options: {
		prefix: "vnjson__",
		defaultTag: "section",
	},
	notify: (err)=>{
		if(err){
			log.error(err);
			throw err;
		}
		log.info('Plugins building');
	}
}
vnjs.emit('pluginsBuild', data);
}








module.exports = pluginsBuilder;