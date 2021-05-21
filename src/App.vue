<template>
  <div>
    <el-col>
      <router-view></router-view>
    </el-col>
    <el-col class="logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </el-col>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="less">
.logo {
  padding: 20px;
  img {
    max-width: 200px;
  }
}
</style>
