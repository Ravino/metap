<template>

  <div class="container">

    <div class="row">
      <div class="left">
      </div>


      <div class="center">
        <menu-page />
      </div>


      <div class="right">
      </div>
    </div>

    <div class="row">
      <div class="left">
      </div>


      <div class="center">
        <header-page :text="header" />
      </div>


      <div class="right">
      </div>
    </div>



  </div>
</template>


<script>
  module.exports = {
    "data": function () {
      return {
        "header": "Как ты стал заниматься доступностью?"
      };
    },

    "components": {
      "header-page": require ("./base/header.vue"),
      "menu-page": require ("./base/menu.vue")
    }
  };
</script>
