const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                publicPath: '/build',
                use: [
                    'css-loader',
                    'sass-loader'
                ],
                // use style-loader in development
                fallback: 'style-loader',
                publicPath: '/'
            })
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    name: '[hash].[ext]'
                }
            }, {
                loader: 'image-webpack-loader',
                options: {
                    gifsicle: {
                        interlaced: false
                    },
                    optipng: {
                        optimizationLevel: 4
                    },
                    mozjpeg: {
                        progressive: true
                    }
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            use: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        }]
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `v${require('./package.json').version}`,
            raw: false,
            entryOnly: true
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            disable: process.env.NODE_ENV === 'development'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};
