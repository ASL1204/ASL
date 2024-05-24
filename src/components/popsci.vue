<template>
  <Header />
  <a-layout>
    <!-- <a-layout-header class="header">
      <h1 align="center" :style="{ color:'#fff'}">农业外来入侵物种防控与管理</h1>
    </a-layout-header> -->
    <a-layout-content>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff;">
          <Sider />
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px', color:'#666', background: '#fff' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
  <Footer />
</template>
  
<script setup>
  // import Header from './POPSCI/Header.vue'
  import Header from './subHeader.vue'
  import Sider from './POPSCI/Sider.vue'
  import Footer from './Footer.vue'
  
</script>
  
<style>
body #app {
  width: 100%;
  height: 100%;
  color: #fff;
}
#app {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
.ant-layout {
  height: 100%;
  width: 100%;
}

</style>