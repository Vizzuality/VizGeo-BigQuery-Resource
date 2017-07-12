var webpack = require('webpack');
var path = require('path');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
	entry: [
		'./src/index.js',
	],
	output: {
		publicPath: './',
		library: 'VizGeo',
		path: path.join(__dirname, 'dist'),
		filename: 'vizgeo.min.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules\/)/,
			loader: "babel-loader"
		}]
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin()
	]
};
