<template>

  <div role="navigation">

    <div class="menu" role="list">

      <div class="menu_item" role="listitem" v-for="item in menu">
        <router-link :to="item.path"> {{ item.name }} </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    "data": function () {
      return {
        "menu": [
          { "path": "/home", "name": "1" },
          { "path": "/sight", "name": "2" },
          { "path": "/programmer", "name": "3" },
          { "path": "/backend", "name": "4" },
          { "path": "/technology-base", "name": "5" },
          { "path": "/technology-development", "name": "6" },
          { "path": "/frontend", "name": "7" },
          { "path": "/i-accessibility", "name": "8" },
          { "path": "/accessibility", "name": "9" },
          { "path": "/is-accessibility", "name": "10" },
          { "path": "/accessibility1", "name": "11" },
          { "path": "/accessibility2", "name": "12" },
          { "path": "/accessibility3", "name": "13" },
          { "path": "/accessibility4", "name": "14" },
          { "path": "/accessibility5", "name": "15" },
          { "path": "/accessibility6", "name": "16" },
          { "path": "/why-accessibility", "name": "17" },
          { "path": "/bad-access", "name": "18" },
          { "path": "/good-access", "name": "19" },
          { "path": "/companys", "name": "20" },
          { "path": "/conclusion", "name": "21" },
          { "path": "/links", "name": "22" }
        ]
      };
    }
  };
</script>


<style scoped>
  .menu {
    display: flex;
    justify-content: space-between;
  }
</style>
