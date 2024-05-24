<template>
  <NavbarHeader></NavbarHeader>
    <div>
      <!-- Project Dynamics Section -->
      <section class="project-section">
        <h2>项目动态</h2>
        <p>最新项目动态内容...</p>
        <p>更多项目动态内容...</p>
      </section>
    </div>
    <FooterComponent></FooterComponent>
  </template>
  
<script setup>
  import NavbarHeader from './subHeader.vue';
  import FooterComponent from './Footer.vue';

</script>
  
  <style scoped>
  /* CSS样式 */
  /* 通用样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: white; /* 修改整个页面背景颜色为白色 */
    color: #333;
    line-height: 1.6;
  }
  
  /* 项目概况部分样式 */
  .project-section {
    margin: 20px auto;
    max-width: 800px;
    padding: 0 20px;
    margin-left: 100px; /* 调整左边距离 */
  }
  
  .project-section h2 {
    color: #16407A;
    margin-bottom: 10px;
  }
  
  .project-section p {
    margin-bottom: 20px;
    text-align: justify;
  }
  
  /* 底部样式 */
  .footer {
    background-color: #16407A;
    color: white;
    text-align: center;
    padding: 20px;
    position: absolute; /* 绝对定位 */
    left: 0;
    bottom: 0;
    width: 100%;
  }
  
  .footer p {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .footer a {
    color: white;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>
  