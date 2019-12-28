const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");

module.exports = {
	entry: "./assets/js/app.js",
	output: {
		filename: "app.js",
		path: path.join(__dirname, "assets", "built"),
		publicPath: "/assets/built/",
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {presets: ["env"]},
		}, {
			test: /critical\.css$/,
			loader: ExtractTextWebpackPlugin.extract("css-loader"),
		}, {
			test: /\.css$/,
			exclude: /critical\.css$/,
			loader: "style-loader!css-loader",
		}, {
			test: /\.svg$/,
			loader: "file-loader!svgo-loader",
		}, {
			test: /\.(eot|ttf|otf|woff2?)$/,
			loader: "file-loader",
		}],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			filename: "../../default.hbs",
			template: "default.src.hbs",
			hash: true,
		}),
		new ExtractTextWebpackPlugin("critical.css"),
		new StyleExtHtmlWebpackPlugin({minify: true}),
	],
};
