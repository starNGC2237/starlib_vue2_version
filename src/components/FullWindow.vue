<!--
 * @Author: zhilutianji
 * @Date: 2021-12-25 19:32:57
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-25 21:48:03
 * @Description: file content
 * @FilePath: \starlib_vue2_version\src\components\FullWindow.vue
-->
<template>
  <el-container class="fullPic">
    <el-header>
        <Header/>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>
        <Bottom/>
    </el-footer>
  </el-container>
</template>

<script>
import Header from './Header.vue'
import Bottom from './Bottom.vue'
export default {
  name: "FullWindow",
  components:{
      Header,
      Bottom
  }
};
</script>

<style scoped>
    .fullPic{
        background-image:url("https://lib.starlibrary.online/api/image/123.jpg");
        background-repeat: no-repeat; 
        background-size: cover; 
        background-position: center center; 
        background-color: rgb(58, 163, 249);
    }
    .el-header{
        color: #333;
        width: 100%;
        height: 12vh !important;
        padding: 0;
    }
    .el-footer{
        color: #333;
        height: 18vh !important;
        padding: 0;

    }
    .el-main {
      color: #333;
      text-align: center;
      line-height: 160px;
    }
</style>
