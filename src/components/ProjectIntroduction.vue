<template>
  <NavbarHeader></NavbarHeader>
    <div>
      <!-- Project Overview Section -->
      <section class="project-section">
        <h2>背景</h2>
        <p>在农业生产中，外来入侵物种可能会对农作物生长、生态系统平衡等方面造成不良影响。为了有效防控这些入侵物种，我们开发了农业外来入侵物种防控与管理平台。</p>
  
        <h2>目标</h2>
        <p>我们的目标是提供一个集信息获取、交流、预警、防治等功能于一体的综合平台，帮助农业从业者及时了解外来入侵物种的动态，采取有效措施进行防控。</p>
  
        <h2>功能</h2>
        <p>1. 提供外来入侵物种的相关资讯和科普知识，增强农业从业者的防控意识。</p>
        <p>2. 实时更新外来入侵物种的动态信息和相关政策法规，提供预警和指导。</p>
        <p>3. 提供在线培训课程，提升农业从业者的防控技能。</p>
        <p>4. 开设专栏分享行业动态，促进信息交流与合作。</p>
        <p>5. 发布招标公告，支持防控相关技术设备的采购。</p>
        <p>6. 提供相关链接，方便用户获取更多相关资源。</p>
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
  