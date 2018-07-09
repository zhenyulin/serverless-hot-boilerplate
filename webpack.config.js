const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
	entry: slsw.lib.entries,
	mode: 'development',
	target: 'node',
	externals: [nodeExternals()],
	resolve: {
		modules: [path.resolve('./src'), 'node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};
