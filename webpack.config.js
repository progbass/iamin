const path = require("path");
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});


module.exports = {
	//externals: nodeModules,
	context: path.resolve(__dirname, 'app'),
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.js'
	},
    devtool: "source-map", // any "source-map"-like devtool is possible
    plugins: [
    	new ExtractTextPlugin("./styles.css"),
    	new HtmlWebpackPlugin({ template: './index.html' }),
    	new CopyWebpackPlugin([{ from: './projects.json' }])
    ],
	module: {
		loaders: [ {
			test: /\.js|.jsx?$/,
			exclude: /node_modules/,
			loader: ['react-hot-loader/webpack', 'babel-loader']
		}, {
			test: /\.(css|scss)$/,
	        use: ExtractTextPlugin.extract({
	          fallback: 'style-loader',
	          //resolve-url-loader may be chained before sass-loader if necessary
	          use: ['css-loader', 'sass-loader']
	        })

		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
	        loader: ['file-loader?name=[path][name].[ext]'
	        /*, {
		      loader: 'image-webpack-loader',
		      options: {
		        query: {
		          mozjpeg: {
		            progressive: true,
		          },
		          gifsicle: {
		            interlaced: true,
		          },
		          optipng: {
		            optimizationLevel: 7,
		          }
		        }
		      }
		    }*/]
		}]
	}
}


