"use strict";

    module.exports = {
    "rules": [
      {
        "test": /\.vue$/,
        "loader": "vue-loader",
        "exclude": /node_modules/,
        "options": {
          "esModule": false
        }
      },

/*      {
        "test": /\.(js|vue)$/,
        "loader": "eslint-loader",
        "enforce": "pre",
        "exclude": /node_modules/,
        "options": {
          "formatter": require ("eslint-friendly-formatter")
        }
      },*/

      {
        "test": /\.js$/,
        "loader": "babel-loader",
        "exclude": /node_modules/
      }
    ]
  };
