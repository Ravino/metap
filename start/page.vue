<template>
<div class="page">
<router-view></router-view>
</div>
</template>

<script>
module.exports = {};
</script>


<style>
  .container {
    font-family: sans-serif;
    font-size: 170%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
</style>
