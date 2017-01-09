/**
 * @author Bilal Cinarli
 */

'use strict';

const webpack           = require('webpack');
const config            = require('./app.config');
const StyleLintPlugin   = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    context:     config.source,
    entry:       {
        'js':  [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/only-dev-server',
            './scripts/index.js'
        ],
        'lib': config.libs
    },
    output:      {
        filename:   config.filenames.js,
        path:       config.paths.app,
        publicPath: config.paths.public
    },
    module:      {
        rules: [
            config.rules.html,
            config.rules.inlineFont,
            config.rules.eslint,
            config.rules.babel,
            config.rules.sass
        ]
    },
    resolve:     {
        modules:    [
            'node_modules',
            'bower_components',
            config.source
        ],
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    devtool:     'eval-source-map',
    performance: {
        hints: false
    },
    devServer:   {
        publicPath:         config.paths.public,
        contentBase:        config.paths.content,
        hot:                true,
        historyApiFallback: true
    },
    plugins:     [
        new HtmlWebpackPlugin({
            template: config.source + '/templates/static/index.tpl'
        }),
        new StyleLintPlugin(),
        new webpack.DefinePlugin({
            '__DEV__':     true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:      'lib',
            filename:  config.filenames.lib,
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = devConfig;
