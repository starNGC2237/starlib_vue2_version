<!--
 * @Author: zhilutianji
 * @Date: 2021-12-25 18:50:22
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-25 20:39:19
 * @Description: file content
 * @FilePath: \starlib_vue2_version\src\App.vue
-->
<template>
  <div id="app">
    <!--
      <p @click="aaa()">{{this.$store.state.a}}</p>
    -->
    <el-row type="flex" class="row">
      <FullWindow/>
    </el-row>
    <el-row type="flex" style="background-color: blueviolet;" class="row"></el-row>
    <el-row type="flex" style="background-color: yellow;" class="row"></el-row>
    <el-row type="flex" style="background-color:black;" class="bottom"></el-row>
    
  </div>
</template>

<script>
import FullWindow from './components/FullWindow.vue'

export default {
  name: 'App',
  components: {
    FullWindow
  },

}
</script>

<style>
  .row{
    width: 100%;
    height: 100vh;
    
  }
  .bottom{
    width: 100%;
    height: 40vh;
  }
</style>
