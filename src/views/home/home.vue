<script setup lang="ts">
const test1 = () => {
  console.log("aaaaaaaaaaaaaaaaa")
}
test1()
</script>

<template>
<div class="home">
  <div class="home-nav">首页</div>
</div>
</template>

<style scoped lang="scss">
.home {
  &-nav {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #007aff;
  }
}
</style>