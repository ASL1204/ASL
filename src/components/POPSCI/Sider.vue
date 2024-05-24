<template>
  <a-layout-sider width="200" style="overflow: auto;">
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="inline"
      style="height: 100%">
      <a-sub-menu key="sub1">
        <template #title>
          <span><BugOutlined />  入侵物种</span>
        </template>
        <router-link to="/popsci/information"><a-menu-item key="1">入侵物种信息</a-menu-item></router-link>
        <router-link to="/popsci/directory"><a-menu-item key="2">入侵物种名录</a-menu-item></router-link>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { BugOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
const selectedKeys2 = ref(['1'])
const openKeys = ref(['sub1'])
</script>

<style scoped>

</style>
