<template>
  <NavbarHeader></NavbarHeader>
  <div>
    <!-- 轮播图 -->
    <div class="slideshow-container">
      <div class="mySlides fade" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt">
      </div>
      <button class="prev" @click="plusSlides(-1)">&#10094;</button>
      <button class="next" @click="plusSlides(1)">&#10095;</button>
    </div>

    <!-- 圆点导航 -->
    <ul class="el-carousel__indicators el-carousel__indicators--horizontal">
      <li class="el-carousel__indicator el-carousel__indicator--horizontal" v-for="(image, index) in images" :key="index">
        <button class="el-carousel__button" @click="currentSlide(index + 1)"></button>
      </li>
    </ul>

    <!-- Main content -->
    <div class="container">
      <h2>欢迎访问农业外来入侵物种防控与管理平台</h2>
      <p>我们致力于提供最新的外来入侵物种防控与管理信息，助力农业生态系统保护。</p>
      <p>请浏览我们的网站以了解更多相关信息。</p>
    </div>

    <!-- 分类块 -->
    <div class="category-wrapper">
      <div class="category-content">
        <h3>关于外来入侵物种</h3>
        <p>外来入侵物种是指被引入到非原生栖息地，并对生态系统、人类健康或经济造成负面影响的物种。</p>
        <p>我们提供全面的信息和资源，帮助您了解和管理这些入侵物种。</p>
      </div>
      <div class="category-block">
        <a href="#">
          <img src="./images/4.jpg" alt="植物类" width="300px" height="300px">
          <p>植物类</p>
        </a>
        <a href="#">
          <img src="./images/5.jpg" alt="动物类" width="300px" height="300px">
          <p>动物类</p>
        </a>
      </div>
    </div>

  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarHeader from './Header.vue';
import FooterComponent from './Footer.vue';
import image1 from './images/7.jpg';
import image2 from './images/2.jpg';
import image3 from './images/1.jpg';
import image4 from './images/3.jpg';

export default {
  components :{
    NavbarHeader,
    FooterComponent
  },
  data() {
    return {
      slideIndex: 1,
      images: [
        { src: image1, alt: '农业图片1' },
        { src: image2, alt: '农业图片2' },
        { src: image3, alt: '农业图片3' },
        { src: image4, alt: '农业图片4' }
      ]
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
    setInterval(() => {
      this.plusSlides(1);
    }, 3000);
  },
  methods: {
    showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("el-carousel__button");
      if (n > slides.length) { this.slideIndex = 1; }
      if (n < 1) { this.slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("is-active");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].classList.add("is-active");
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    }
  }
};
</script>

<style>
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
        
        /* 轮播图样式 */
        .slideshow-container {
            position: relative;
            max-width: 1200px;
            height: 500px;
            margin: 20px auto;
            overflow: hidden;
            border-radius: 10px;
        }

        .mySlides {
            display: none;
            height: 100%;
        }

        .slideshow-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        .prev,
        .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            font-size: 24px;
            padding: 15px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .prev:hover,
        .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        .prev {
            left: 0;
        }

        .next {
            right: 0;
        }

        .el-carousel__indicators {
            display: flex;
            justify-content: center;
            margin-top: 10px;
        }

        .el-carousel__indicator {
            list-style: none;
            margin: 0 5px;
        }

        .el-carousel__button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #fff;
            border: none;
            cursor: pointer;
        }

        .is-active .el-carousel__button {
            background-color: #333;
        }

        /* 主内容样式 */
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .container h2 {
            font-size: 32px;
            margin-bottom: 20px;
            color: #333;
            text-align: center;
        }

        .container p {
            margin-bottom: 20px;
            text-align: justify;
        }

        /* 分类块样式 */
        .category-wrapper {
            max-width: 1200px;
            margin: 20px auto;
            display: flex;
            justify-content: space-between;
            overflow-x: auto;
            padding: 0 20px;
        }

        .category-block,
        .category-content {
            flex: 0 0 calc(50% - 20px);
            background-color: #f5f5f5;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .category-block img {
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
            margin-bottom: 10px;
            cursor: pointer; /* 鼠标悬停时显示指针 */
            transition: transform 0.3s, box-shadow 0.3s; /* 添加过渡效果 */
        }

        .category-block img:hover {
            transform: scale(1.05); /* 鼠标悬停时略微放大图片 */
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
        }

        .category-block {
            background-color: white; /* 设置背景色为白色 */
        }

        .category-block a {
            display: block; /* 使链接元素占据整个块的空间 */
            text-align: center; /* 文本居中 */
            text-decoration: none; /* 移除链接的下划线 */
            color: #333; /* 设置链接颜色 */
        }

        .category-block p {
            margin-top: 5px; /* 调整段落与图片之间的间距 */
        }

        .category-content h3 {
            font-size: 24px;
            margin-bottom: 15px;
            text-align: center;
            color: #333; /* 修改标题颜色 */
        }

        .category-content p {
            font-size: 16px;
            margin-bottom: 10px;
            text-align: justify;
            color: #666; /* 修改文本颜色 */
        }
    </style>
