const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: './src/js/main.js',
	devtool: 'inline-source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: '[name][ext]'
	},
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					"style-loader",
					"css-loader",
					"less-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Adobe CEP Starter',
			template: 'src/index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: 'public', to: 'public'},
				{from: '*.js', to: 'extendscript', context: 'src/extendscript/'}
			],
		}),
	],
	devServer: {
		static: './dist',
		headers: {
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Embedder-Policy': 'require-corp',
		}
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
