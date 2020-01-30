const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: "./assets/js/app.js",
		critical: "./assets/css/critical.scss"
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "assets", "built"),
		publicPath: "/assets/built/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}, {
				test: /critical\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: 'sass-loader',
						options: { implementation: require('sass') }
					}
				],
			}, {
				test: /\.scss$/,
				exclude: /critical\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: 'sass-loader',
						options: { implementation: require('sass') }
					}
				]
			}, {
				test: /\.svg$/,
				use: ["file-loader", "svgo-loader"]
			}, {
				test: /\.(eot|ttf|otf|woff2?)$/,
				use: "file-loader",
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: "app",
			filename: "../../default.hbs",
			template: "default.src.hbs",
			hash: true,
			inject: "head"
		}),
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new StyleExtHtmlWebpackPlugin("critical.css", {
			chunks: "app",
			minify: true
		}),
		new ScriptExtHtmlWebpackPlugin({
			chunks: "app",
			defaultAttribute: "async"
		}),
		new PreloadWebpackPlugin({
			chunks: "app",
			rel: "preload",
			include: "allAssets",
			fileBlacklist: [/^critical\.css$/, /\.(?:eot|svg|[ot]tf|woff)$/]
		}),
		new FixStyleOnlyEntriesPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					ecma: 2015,
					output: {
						beautify: false
					}
				},
				extractComments: "some"
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
};
