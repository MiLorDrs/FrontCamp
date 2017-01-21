"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './index.js'],
    output: {
        filename: "public/app.js"
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'source-map' : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js'],
        alias: {
            'json-changer-loader': __dirname + '/json-changer.js'
        }
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass!autoprefixer?browsers=last 2 versions'
        }, {
            test: /\.json$/,
            loader: 'json!json-changer-loader'
        }, {
            test: /\.png$/,
            loader: 'url?limit=10000'
        }]
    },

    devServer: {
        host: 'localhost',
        port: 8080
    }


};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}