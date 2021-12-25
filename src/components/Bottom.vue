<!--
 * @Author: zhilutianji
 * @Date: 2021-12-25 20:29:37
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-26 00:41:28
 * @Description: file content
 * @FilePath: \starlib_vue2_version\src\components\Bottom.vue
-->
<template>
  <div class="bottomRow">
    <div>
      <div><i class="el-icon-date"></i></div>
      <div>
        <span style="font-size: 2vmin; color: white">后台</span>
      </div>
    </div>
    <div>
      <div><i class="el-icon-folder-opened"></i></div>
      <div>
        <span style="font-size: 2vmin; color: white">分类</span>
      </div>
    </div>
    <div>
      <div><i class="el-icon-star-off"></i></div>
      <div>
        <span style="font-size: 2vmin; color: white">推荐</span>
      </div>
    </div>
    <div>
      <div><i class="el-icon-picture-outline-round"></i></div>
      <div>
        <span style="font-size: 2vmin; color: white">壁纸</span>
      </div>
    </div>
    <div>
      <div><i class="el-icon-bell"></i></div>
      <div>
        <span style="font-size: 2vmin; color: white">消息</span>
      </div>
    </div>
    <div>
      <el-tooltip
        class="item"
        effect="dark"
        content="每日新知发生错误，请您欣赏风景图"
        placement="top">
        <div><i class="el-icon-info"></i></div>
      </el-tooltip>
      <div>
        <span style="font-size: 2vmin; color: white">详细</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
};
</script>

<style scoped>
.bottomRow {
  width: 80%;
  height: 18vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottomRow > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
i {
  text-align: center;
  font-size: 27px;
  color: white;
  margin-bottom: 2vmin;
}
</style>
