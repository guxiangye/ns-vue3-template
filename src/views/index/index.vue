<script setup lang="ts">
import HelloWorld from "../../components/HelloWorld.vue";
</script>

<template>
  <div class="index">
    <div class="index-nav">index</div>
  </div>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
  <van-button type="primary">vant 按钮</van-button>
  <hello-world msg="Hello World" />"
</template>

<style scoped lang="scss">
.index {
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