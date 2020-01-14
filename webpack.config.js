const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./assets/js/app.js",
	output: {
		filename: "app.js",
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
				test: /critical\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},{
				test: /\.css$/,
				exclude: /critical\.css$/,
				use: ["style-loader", "css-loader"]
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
			filename: "../../default.hbs",
			template: "default.src.hbs",
			hash: true,
		}),
		new MiniCssExtractPlugin({ filename: "critical.css" }),
		new StyleExtHtmlWebpackPlugin({ minify: true }),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
};
