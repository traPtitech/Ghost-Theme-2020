const { join, resolve } = require("path");
const { readdirSync } = require('fs');
const md5File = require('md5-file');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

// generate source-code-pro-hash
const sourceCodeProHash = (() => {
	const dir = 'node_modules/@openfonts/source-code-pro_latin/files'
	const files = readdirSync(dir)
	return Object.fromEntries(files.map(
		file => [file, '"' + md5File.sync(`${dir}/${file}`).slice(0, 7) + '"']
	))
})();
// ---


module.exports = {
	mode: "production",
	entry: {
		app: "./assets/js/app.js",
		critical: "./assets/css/critical.scss"
	},
	output: {
		filename: "[name].[chunkhash].js",
		path: join(__dirname, "assets", "built"),
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
						configFile: resolve("babel.config.json")
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
				loader: "file-loader",
				options: {
					name: '[name].[contenthash:7].[ext]',
				},
			}
		],
	},
	plugins: [
		new DefinePlugin({
			'webpackDefined.sourceCodeProHash': sourceCodeProHash
		}),
		new CopyPlugin([
			{
				from: 'node_modules/@openfonts/source-code-pro_latin/files',
				to: './fonts/[name].[contenthash:7].[ext]',
        toType: 'template'
			},
		]),
		new HtmlWebpackPlugin({
			chunks: "app",
			filename: "../../default.hbs",
			template: "default.src.hbs",
			inject: "head"
		}),
		new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
		new StyleExtHtmlWebpackPlugin({
			cssRegExp: /critical\..+\.css/i,
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
			fileBlacklist: [/^critical\..+\.css$/, /^(?=.*(?:KaTeX|source-code-pro)).*$|\.(?:eot|svg|[ot]tf|woff)$/]
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
			new OptimizeCSSAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: [
						'advanced',
						{
							cssDeclarationSorter : {
								order: 'alphabetically',
								keepOverrides: true
							},
							discardUnused: false,
							mergeIdents: false,
							reduceIdents: false,
							zindex: false
						}
					],
				}
			}),
			new BrotliPlugin({
				asset: "[path].br[query]",
				test: /\.(js|css|svg)$/,
				threshold: 1024,
				minRatio: 0.9
			})
		]
	}
};
