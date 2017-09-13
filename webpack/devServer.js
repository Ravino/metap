"use strict";

module.exports = {
  "historyApiFallback": true,
  "noInfo": true,
  "compress": true,
  "hot": true,
//  "hotOnly": true,
  "inline": true,
  "open": true,
//  "overlay": true,
  "port": 3000,
  "publicPath": "/",
  "proxy": {
    "/api": "http://localhost:3010"
  }
  };
