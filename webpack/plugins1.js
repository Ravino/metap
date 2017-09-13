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
    "skipFirstNotification": true
  }),

  new webpack.optimize.CommonsChunkPlugin({
    "name": "commons",
    "filename": "commons.js",
    "children": true
//    "async": true
  }),

//  new extractTextWebpackPlugin("style.css"),

//  new webpack.optimize.AggressiveSplittingPlugin(),

  new webpack.HotModuleReplacementPlugin(),

//  new webpack.optimize.ModuleConcatenationPlugin(),

//  new webpack.NamedModulesPlugin(),

  new webpack.NoEmitOnErrorsPlugin(),

  new htmlWebpackPlugin(/*{
    "template": "index.html",
    "inject": true,
    "cache": true,
    "showErrors": true,
    "xhtml": true
  }*/)


];
