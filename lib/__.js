var slash = require('slash');

var root = slash(process.env.APPDATA)+"/npm/node_modules/renjson-cli/";
var scenes_tpl = root + 'scenes_tpl/';
var vn_tpl = root + 'vn_tpl/';
var cwd = process.cwd();
var www = cwd+"/build/www";

var __ = {
		cwd:cwd,
		root:root,
		scenes_tpl:scenes_tpl,
		vn_tpl:vn_tpl,
		www:www
};

module.exports = __;
