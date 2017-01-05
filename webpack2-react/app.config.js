/**
 * @author Bilal Cinarli
 */

'use strict';

const path            = require('path');
const pkg             = require('./package.json');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {};

config.name = pkg.name;

config.source = path.resolve(__dirname, 'source');

config.paths = {
    app:     path.resolve(__dirname, 'app'),
    public:  '/',
    content: './app/',
    assets:  './assets/',
    scripts: './assets/scripts/',
    styles:  './assets/styles/',
    images:  './assets/images/',
    fonts:   './assets/fonts/'
};

config.relativePaths = {
    fonts:  '../fonts/',
    images: '../images/'
};

config.filenames = {
    js:  config.paths.scripts + config.name + '.[name]',
    lib: config.paths.scripts + config.name + '.lib.js',
    css: config.paths.styles + config.name + '.css'
};

config.libs = [];

Object.keys(pkg.dependencies).forEach(item => {
    return config.libs.push(item);
});

config.extractCSS = new ExtractTextPlugin(config.filenames.css);

config.rules = {
    fontUrl:  {
        test:    /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:  'url-loader',
        options: {
            name:       '[name].[ext]',
            limit:      5000,
            mimetype:   'application/font-woff',
            outputPath: config.paths.fonts,
            publicPath: config.relativePaths.fonts
        }
    },
    fontFile: {
        test:    /\.ttf$|\.eot$/,
        loader:  'file-loader',
        options: {
            name:       '[name].[ext]',
            outputPath: config.paths.fonts,
            publicPath: config.relativePaths.fonts
        }
    },
    images:   {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use:  [
            {
                loader: 'file-loader',
                query:  {
                    name:       '[name].[ext]',
                    outputPath: config.paths.images,
                    publicPath: config.relativePaths.images
                }
            },
            {
                loader: 'image-webpack-loader',
                query:  {
                    progressive:       true,
                    optimizationLevel: 7,
                    interlaced:        false,
                    pngquant:          {
                        quality: '65-90',
                        speed:   4
                    }
                }
            }
        ]
    },
    html:     {
        test:    /\.tpl?$/i,
        loader:  'html-loader',
        options: {
            attrs: ["img:src", "link:href"]
        }
    },
    eslint:   {
        test:    /\.(js|jsx)?$/i,
        enforce: 'pre',
        loader:  'eslint-loader'
    },
    babel:    {
        test:   /\.(js|jsx)?$/i,
        loader: 'babel-loader'
    },
    extract:  {
        test:   /\.scss?$/i,
        loader: config.extractCSS.extract({
            loader: [
                {loader: 'css-loader', query: {sourceMap: true}},
                {loader: 'resolve-url-loader', query: {keepQuery: true}},
                {loader: 'sass-loader', query: {sourceMap: true}}
            ]
        })
    }
};

module.exports = config;