"use strict";

let dirBuild = "public";
//dirBuild = "private";
//dirBuild = "admin";


let NODE_ENV = (process.env.NODE_ENV = "development");
//NODE_ENV = process.env.NODE_ENV = "production";


const path = require ("path");
const pathFile = DirBuild => path.resolve(__dirname + DirBuild);


module.exports = {
  "entry": {
    "bundle": pathFile ("/start/" + dirBuild + "/index.js")
  },

  "output": {
    "filename": "[name].js",
    "path": pathFile ("/finish/" + dirBuild),
    "publicPath": "/"
  },

  "resolve": {
    "extensions": [".js", ".json", ".vue"],
//    "alias": {
//      "vue$": "vue/dist/vue.runtime.esm.js",
//      "@": "/www/test/start"
//    }
  },


  "module": require ("./webpack/module.js"),


  "devServer": require ("./webpack/devServer.js"),

  "devtool": "#cheap-module-eval-source-map",


  "watch": true,

  "watchOptions": {
    "aggregateTimeout": 100
  },


  "plugins": require ("./webpack/plugins.js")
};
