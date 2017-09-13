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
          { "path": "/backend", "name": "3" },
          { "path": "/frontend", "name": "4" },
          { "path": "/bad-access", "name": "5" },
          { "path": "/good-access", "name": "6" }
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
