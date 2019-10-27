const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')
const { resolve } = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = resolve(__dirname, 'dist')
const mode = 'development'
const isDev = mode === 'development'

const plugins = [new HtmlWebpackPlugin()]

if (isDev) {
    plugins.push(
        new Serve({
            hmr: true,
            historyFallback: true,
            static: [outputPath]
        })
    )
} else {
    plugins.push(new MiniCssExtractPlugin())
}
module.exports = {
    // an example entry definition
    entry: ['./src/index.js', 'webpack-plugin-serve/client'],
    mode: mode,
    devtool: 'cheap-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: !isDev ? [MiniCssExtractPlugin.loader, 'css-loader'] : ['style-loader', 'css-loader']
            },
            {
                test: /\.woff(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff'
                    }
                }
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff2'
                    }
                }
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff2'
                    }
                }
            },
            {
                test: /\.(otf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.ttf(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/octet-stream'
                    }
                }
            },
            {
                test: /\.svg(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        mimetype: 'image/svg+xml'
                    }
                }
            },
            {
                test: /\.(png|jpg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins,
    output: {
        path: outputPath,
        publicPath: '/',
        filename: !isDev ? '[name].[contenthash].js' : '[name].[hash].js'
    },
    // important: webpack and the server
    // will continue to run in watch mode
    watch: isDev
}
