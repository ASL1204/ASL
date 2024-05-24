<template>
  <div>
    <!-- Header -->
    <header>
      <img src="./images/6.jpg" alt="图标">
      <h1>农业外来入侵物种防控与管理平台</h1>
    </header>

    <!-- Main navigation -->
    <nav class="main-navigation">
      <ul>
        <li><a href="/">首页</a></li>
        <li class="dropdown">
          <a class="dropbtn">项目概况</a>
            <div class="dropdown-content">
                <router-link to="/PI">项目介绍</router-link>
                <router-link to="/PD">项目动态</router-link>
            </div>
        </li>
        <li><router-link to="/popsci">科普知识</router-link></li>
        <li><router-link to="/PR">政策法规</router-link></li>
        <li><router-link to="/TW">招标公告</router-link></li>
        <li><router-link to="/ID">行业动态</router-link></li>
        <li><router-link to="/TC">培训课程</router-link></li>
        <li><router-link to="/links">相关链接</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>
/* 头部样式 */
        header {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        header img {
            width: 50px; /* 根据需要调整 */
            margin-right: 10px; /* 图标和标题之间添加一些空间 */
        }

        header {
            background-color: white;
            color: black;
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }

        /* 导航栏样式 */
        .main-navigation {
            background-color: #16407A; /* 导航栏背景色 */
            text-align: center;
            padding: 15px 0; /* 调整上下边距 */
            max-width: 1800px; /* 导航栏最大宽度 */
            margin: 0 auto; /* 水平居中 */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
        }

        .main-navigation ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex; /* 使用弹性盒子布局 */
            justify-content: space-around; /* 平均分布导航项 */
            position: relative; /* 相对定位 */
        }

        .main-navigation ul li {
            position: relative; /* 相对定位 */
        }

        .main-navigation ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            padding: 10px 15px; /* 调整内边距 */
            position: relative; /* 相对定位 */
            transition: color 0.3s; /* 添加颜色过渡效果 */
        }

        .main-navigation ul li a:hover {
            color: #F9A825; /* 悬停时修改文字颜色 */
        }

        .main-navigation ul li::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background-color: #F9A825;
            transition: width 0.3s ease;
        }

        .main-navigation ul li:hover::after {
            width: 100%;
        }

        /* 下拉框样式 */
        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #16407A; /* 与导航栏相同的背景色 */
            min-width: 160px;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            z-index: 1;
            font-size: 18px; /* 与导航栏项目概况的字体大小一致 */
            top: calc(100% + 5px); /* 相对于父元素（li）底部对齐，并略微向下偏移一点 */
            left: 50%; /* 相对于父元素居中对齐 */
            transform: translateX(-50%); /* 使用transform属性偏移位置 */
        }

        .dropdown-content a {
            color: white; /* 修改文字颜色为白色 */
            padding: 10px 15px; /* 调整文字与边框的间距 */
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #333; /* 鼠标悬停时的背景色 */
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }
</style>
