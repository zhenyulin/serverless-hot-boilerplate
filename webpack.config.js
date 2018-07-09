const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
	entry: slsw.lib.entries,
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	target: 'node',
	externals: [nodeExternals()],
	resolve: {
		modules: [path.resolve('./src'), 'node_modules'],
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					fix: true,
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};
