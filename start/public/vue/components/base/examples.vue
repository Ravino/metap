<template>

  <div role="main">
    <div role="list">
      <div role="listitem" v-for="item in arrExamples">
        <a :href="item.path"> {{ item.name }} </a>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    "props": ["arrExamples"]
  };
</script>
