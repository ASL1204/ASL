<template>
  <a-layout-header>
    <div class="logo"><img id="sxx" src="../../assets/sxx.png" alt=""></div>
    <a-menu
      v-model:selectedKeys="selectedKeys1"
      theme="light"
      mode="horizontal"
      :style="{ lineHeight: '64px'}"
    >
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">概况</a-menu-item>
      <a-menu-item key="3">政策法规</a-menu-item>
      <a-menu-item key="4">招标公告</a-menu-item>
      <a-menu-item key="5">行业动态</a-menu-item>
      <a-menu-item key="6">培训课程</a-menu-item>
      <a-menu-item key="7">相关链接</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script setup>
import { ref } from 'vue'
const selectedKeys1 = ref(['1'])
</script>

<style>
.ant-layout-header .logo {
  float: left;
  width: 140px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0);
  line-height: 31px;
  font-weight: bold;
  color: #fff;
}

.ant-layout-header {
  color: #fff !important;
}
.logout {
  float: right;
  margin-top: -49px;
}
#sxx{
  width: 130px;
  height: 40px;
}
</style>
