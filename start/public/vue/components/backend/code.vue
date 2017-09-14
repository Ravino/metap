<template>

  <div>

    <pre>
//backend
"use strict";

const app = require ("express");
const conf = require ("./configs/http.js");
const api = require ("./api/http.js")
const pg = require ("./configs/pg.js");


pg.connect ().then( (db) => {
  const passport = conf.passport (db);

  app.use( conf.cookieParser () );
  app.use( conf.expressSession () );
  app.use( conf.bodyParser () );
  app.use( conf.serveStatic () );

  app.use( passport.initialize () );
  app.use( passport.session () );

  app.get( "/", api.index () );

  app.listen( 10000 );
},

(error) => {
  console.log(err);
});

    </pre>
  </div>
</template>

<script>
  module.exports = {};
</script>
