<template>
  <a-layout-sider width="290" style="overflow: auto;">
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="inline"
      style="height: 100%">
      <a-sub-menu key="sub1">
        <template #title>
          <span><LinkOutlined />  相关链接</span>
        </template>
        <router-link to="/links/about1"><a-menu-item key="1">国门生物安全基础数据信息资源平台</a-menu-item></router-link>
        <router-link to="/links/about2"><a-menu-item key="2">中国植物外来入侵物种信息系统</a-menu-item></router-link>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { LinkOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
const selectedKeys2 = ref(['1'])
const openKeys = ref(['sub1'])
</script>

<style scoped>

</style>
