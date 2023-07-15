const {join, resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HTMLInlineCSSWebpackPlugin =
    require('html-inline-css-webpack-plugin').default;

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './assets/js/src/app.js',
        critical: './assets/scss/critical.scss'
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: join(__dirname, 'assets'),
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: resolve('babel.config.json')
                    }
                }
            },
            {
                test: /critical\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.scss$/,
                exclude: /critical\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svgo-loader',
                type: 'asset/resource'
            },
            {
                test: /\.(eot|ttf|otf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: 'app',
            filename: '../default.hbs',
            template: 'default.src.hbs',
            minify: false
        }),
        new MiniCssExtractPlugin({filename: 'css/[name].[chunkhash].css'}),
        new HTMLInlineCSSWebpackPlugin({
            filter: name => /.*\.hbs|critical\..+\.css/i.test(name)
        }),
        new PreloadWebpackPlugin({
            chunks: 'app',
            rel: 'preload',
            include: 'allAssets',
            fileBlacklist: [
                /^critical\..+\.css$/,
                /^(?!crit-).*\.woff2$|\.(?:eot|svg|[ot]tf|woff)$/,
                /\.(?:LICENSE\.txt|map)$/
            ]
        }),
        new RemoveEmptyScriptsPlugin()
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
                extractComments: 'some'
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'advanced',
                        {
                            cssDeclarationSorter: {
                                order: 'alphabetical',
                                keepOverrides: true
                            },
                            discardUnused: false,
                            mergeIdents: false,
                            reduceIdents: false,
                            zindex: false
                        }
                    ]
                }
            }),
            new CompressionPlugin({
                test: /\.(js|css|svg)$/,
                algorithm: 'brotliCompress',
                threshold: 1024,
                minRatio: 0.9,
                filename: '[path][base].br'
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    }
};
