<!--
 * @Author: zhilutianji
 * @Date: 2021-12-25 20:15:54
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-26 00:29:32
 * @Description: file content
 * @FilePath: \starlib_vue2_version\src\components\Header.vue
-->
<template>
  <el-row class="headerRow">
    <div class="div">
      <el-link type="primary" :underline="false" href="#" class="sl">
        StarLibrary
      </el-link>
      <div class="buttonLinks">
        <el-link
          :underline="false"
          class="infos"
          type="primary"
          icon="el-icon-location-information"
        >
          English
        </el-link>
        <el-link
          :underline="false"
          class="infos"
          type="primary"
          icon="el-icon-timer"
        >
          {{timeNow}}
        </el-link>
        <el-link
          :underline="false"
          class="infos"
          type="primary"
          icon="el-icon-user"
        >
          登录
        </el-link>
        <el-link
          :underline="false"
          class="infos"
          type="primary"
          icon="el-icon-finished"
        >
          反馈
        </el-link>
        <el-link :underline="false" class="infos" type="primary">
          <i class="el-icon-search"></i>
        </el-link>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      year:0,
      month:0,
      day:0,
      hours:0,
      minutes:0,
      timer:null,
    }
  },
  computed:{
    timeNow(){
      return this.year+"年"+this.month+"月"+this.day+"日"+this.hours+":"+this.minutes
    }
  },
  mounted(){
    var today=new Date();
    this.year=today.getFullYear();
    this.month=today.getMonth()+1;
    this.day=today.getDate();
    this.hours=today.getHours();
    this.minutes=today.getMinutes();
    this.timer=setInterval(() => {
      var today=new Date();
      this.year=today.getFullYear();
      this.month=today.getMonth()+1;
      this.day=today.getDate();
      this.hours=today.getHours();
      this.minutes=today.getMinutes();
    }, 60000);
  },
  beforeDestroy(){
    clearInterval(this.timer);// 清除定时器
    this.timer = null;
  }
};
</script>

<style scoped>
.headerRow {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
}
.sl {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 5vmin;
}
.infos {
  margin-left: 10px;
}
</style>