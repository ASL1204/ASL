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
export default {
  mounted() {
    // 获取所有导航项
    var navItems = document.querySelectorAll('.main-navigation ul li');

    // 为每个导航项添加点击事件监听器
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // 先移除所有导航项的 active 类
        navItems.forEach(function(navItem) {
          navItem.classList.remove('active');
        });
        // 然后将 active 类添加到被点击的导航项上
        this.classList.add('active');
      });
    });
  }
};
</script>

<style scoped>
        /* 头部样式 */
        header {
            display: flex;
            align-items: center;
            padding: 20px 20px 20px 100px; /* 调整左边距离 */
            background-color: white;
        }

        header img {
            width: 50px;
            margin-right: 10px;
        }

        header h1 {
            font-size: 36px;
            margin-bottom: 10px;
            text-align: left; /* 左对齐 */
        }

        /* 导航栏样式 */
        .main-navigation {
            background-color: #16407A; /* 导航栏背景色 */
            text-align: center;
            padding: 15px 0; /* 调整上下边距 */
            max-width: 100%; /* 导航栏最大宽度 */
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
