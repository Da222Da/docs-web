const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: "production",
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./index.html"
	})],
	performance: {
		maxEntrypointSize: 5 * 1024 * 1024,
		maxAssetSize: 1024 * 1024 * 5
	}
};
