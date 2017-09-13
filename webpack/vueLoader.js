"use strict";

const extractTextWebpackPlugin = require ("extract-text-webpack-plugin");


module.exports = {
  "options": {

    "optimizeSSR": false,


/*    "loaders": {
      "css": extractTextWebpackPlugin.extract({
        "use": "css-loader",
        "fallback": "vue-style-loader"
      })
    }*/
  }
};
