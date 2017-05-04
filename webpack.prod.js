const webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
	devtool: "cheap-module-source-map",

	plugins: [
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
	      }
	    }),
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
	    	warnings: false,
			sourceMap: false
	    }),
		new webpack.optimize.AggressiveMergingPlugin(),
		
		new CopyWebpackPlugin([{ from: './projects.json' }]),
	    new tinyPngWebpackPlugin({
	        key: "VP0wHgHCjlLCs7D6uOEJ-NnNS6nm7CQ_",
	        relativePath: "./images/"
	    }),
		new CompressionPlugin({
	      asset: "[path].gz[query]",
	      algorithm: "gzip",
	      test: /\.js$|\.css$|\.html$/,
	      threshold: 10240,
	      minRatio: 0.8
	    })
	]
});
