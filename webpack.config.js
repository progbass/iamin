module.exports = function(env) {
	var config_file = (env == 'prod') ? 'webpack.prod.js' : 'webpack.common.js';
	return require(`./${config_file}`);
}
