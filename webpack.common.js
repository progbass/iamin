const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const fs = require('fs');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.js'
	},	

    devtool: "source-map",

	module: {
		loaders: [ {
			test: /\.js|.jsx?$/,
			exclude: /node_modules/,
			loader: ['react-hot-loader/webpack', 'babel-loader']
		}, {
			test: /\.(css|scss)$/,
			//use: ['style-loader', 'css-loader', 'sass-loader']
	        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])

		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
	        loader: ['file-loader?name=[path][name].[ext]']
		}, {
          test: /\.(webm|mp4)$/,
          loader: 'file-loader'
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			//inject: false,
			//minify: true
		}),
    	new CopyWebpackPlugin([{ from: './projects.json' }]),
		new ExtractTextPlugin({
		    filename: "./styles.css",
		}),
	]
}
