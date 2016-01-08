var slash = require('slash');

var root = slash(process.env.APPDATA)+"/npm/node_modules/renjson-cli/";
var scenes_tpl = root + 'scenes_tpl/';
var vn_tpl = root + 'vn_tpl/';
var tmp = slash(process.env.TEMP)+"/renjson";

var __ = {
		cwd:process.cwd(),
		root:root,
		scenes_tpl:scenes_tpl,
		vn_tpl:vn_tpl,
		tmp:tmp
};

module.exports = __;
