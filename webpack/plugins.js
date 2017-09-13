"use strict";


const webpack = require ("webpack");
const htmlWebpackPlugin = require ("html-webpack-plugin");
const extractTextWebpackPlugin = require ("extract-text-webpack-plugin");
const webpackNotifier = require ("webpack-notifier");
const componentWebpackPlugin = require ("component-webpack-plugin");
const npmInstallWebpackPlugin = require ("npm-install-webpack-plugin");


module.exports = [
  new webpackNotifier({
    "alwaysNotify": true,
//    "skipFirstNotification": true
  }),

//  new webpack.DefinePlugin({
//    "process.env": process.env.NODE_ENV
//  }),

  new webpack.optimize.CommonsChunkPlugin({
    "name": "commons",
    "filename": "commons.js",
    "children": true
//    "async": true
  }),

  new htmlWebpackPlugin({
    "template": "./index.html",
    "inject": true,
    "cache": true,
    "showErrors": true,
    "xhtml": true
  }),

  new webpack.HashedModuleIdsPlugin({
    "hashFunction": "sha256",
    "hashDigest": "hex",
    "hashDigestLength": 20
  }),

  new webpack.LoaderOptionsPlugin({
    "minimize": true,
    "debug": false
  }),

  new npmInstallWebpackPlugin({
    "dev": true,
    "peerDependencies": true,
    "quiet": false
  }),



//  new extractTextWebpackPlugin("style.css"),

//  new webpack.optimize.AggressiveSplittingPlugin(),

  new webpack.HotModuleReplacementPlugin(),

  new webpack.optimize.ModuleConcatenationPlugin(),

  new webpack.NamedModulesPlugin(),

  new webpack.NoEmitOnErrorsPlugin()
];
