<template>
  <NavbarHeader></NavbarHeader>
    <div>
      <!-- 行业动态部分 -->
      <section class="industry-section">
        <h2>行业动态</h2>
        <div class="industry-news">
          <div class="news-item">
            <h3>行业新趋势</h3>
            <p>近期行业内出现了新的趋势，对我们的项目有着重要的影响。</p>
          </div>
          <div class="news-item">
            <h3>技术创新</h3>
            <p>一家领先的公司刚刚发布了一项技术创新，将进一步推动行业的发展。</p>
          </div>
          <!-- 添加更多动态内容 -->
        </div>
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
  .industry-section {
    margin: 20px auto;
    max-width: 800px;
    padding: 0 20px;
    margin-left: 100px; /* 调整左边距离 */
  }
  
  .industry-section h2 {
    color: #16407A;
    margin-bottom: 10px;
  }
  
  .industry-section .news-item {
    margin-bottom: 20px;
  }
  
  .industry-section h3 {
    color: #16407A;
  }
  
  .industry-section p {
    margin-bottom: 10px;
    text-align: justify;
    color: #16407A;
  }
  
  /* 底部样式 */
  .footer {
    background-color: #16407A;
    color: white;
    text-align: center;
    padding: 20px;
    position: fixed; /* 更改为固定定位 */
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
  