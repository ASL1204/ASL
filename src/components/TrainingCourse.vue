<template>
  <NavbarHeader></NavbarHeader>
    <div>
      <!-- 培训课程部分 -->
      <section class="training-section">
        <h2>培训课程</h2>
        <div class="course-list">
          <div class="course-item">
            <h3>外来入侵物种防控基础知识</h3>
            <p>本课程将介绍外来入侵物种的基本概念、特征及其对农业生产的影响，以及相应的防控措施。</p>
          </div>
          <div class="course-item">
            <h3>实用防控技能培训</h3>
            <p>本课程将重点培训农业从业者应对各种外来入侵物种的实用防控技能，包括识别、监测和应急处置。</p>
          </div>
          <!-- 添加更多课程 -->
        </div>
      </section>
  
      <!-- 底部 -->
      
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
  
  /* 培训课程部分样式 */
  .training-section {
    margin: 20px auto;
    max-width: 800px;
    padding: 0 20px;
    margin-left: 100px; /* 调整左边距离 */
  }
  
  .training-section h2 {
    color: #16407A;
    margin-bottom: 10px;
  }
  
  .training-section .course-item {
    margin-bottom: 20px;
  }
  
  .training-section h3 {
    color: #16407A;
  }
  
  .training-section p {
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
  