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



    <div class="row">
      <div class="left">
      </div>


      <div class="center">
        <examples-page :arrExamples="examples" />
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
        "header": "Примеры недоступных веб-интерфейсов",

        "examples": [
          { "path": "http://rbc.ru", "name": "РБК" },
          { "path": "http://vk.com", "name": "В Контакте" }
        ]
      };
    },

    "components": {
      "header-page": require ("./base/header.vue"),
      "menu-page": require ("./base/menu.vue"),
      "examples-page": require ("./base/examples.vue"),
    }
  };
</script>
