<template>
  <NavbarHeader></NavbarHeader>
    <div class="child-div">
      <aside class="aside-navs">
        <div class="navs_1">
          <h3> &bull; 法规资讯</h3>
        </div>
        <div class="navs_2">
          <img src="./images/icons8-plant-50.png" alt="Plant" style="width: 20px; height: 20px;">
          <router-link to="/plant-quarantine">植物检疫</router-link>
        </div>
        <div class="nav_3">
          <img src="./images/icons8-animal-50.png" alt="Animal" style="width: 20px; height: 20px;">
          <router-link to="/animal-quarantine">动物检疫</router-link>
        </div>
      </aside>
      <div class="plant_quarantine" style="float: right; text-align: center">
        <h2 class="plant_quarantine_title" style="letter-spacing: 3px">植物检疫</h2>
        <hr>
        <div class="table-container">
          <form class="search-form" @submit.prevent="handleSearch">
            <input type="text" class="search-input" placeholder="输入关键词查询...." v-model="searchTerm">
            <button type="submit" class="search-btn" style="letter-spacing: 3px">查询</button>
          </form>
          <table>
            <thead>
              <tr style="background-color: #f2f2f2;">
                <th>序号</th>
                <th>标题</th>
                <th>发布时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filteredRegulations" :key="index">
                <td>{{ item.id }}</td>
                <td><a :href="item.url" target="_blank">{{ item.title }}</a></td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  import NavbarHeader from './subHeader.vue';
  import FooterComponent from './Footer.vue';

  export default {
    components:{
        NavbarHeader,
        FooterComponent
    },
    name: 'PlantQuarantineComponent',
    data() {
      return {
        searchTerm: '',
        regulations: [
          {
            id: 1,
            title: '欧盟发布对中国等国家特定商品木质包装检疫的规定',
            url: 'url_to_eu_wood_packing_regulations',
            date: '2024-05-09'
          },
          {
            id: 2,
            title: '新西兰修订进口苗木的检疫要求',
            url: 'url_to_new_zealand_nursery_stock_regulations',
            date: '2024-05-09'
          },
          {
            id: 3,
            title: '巴西发布关于进口六出花属植物繁殖材料的植物检疫要求',
            url: 'url_to_brazil_plant_materials_quarantine',
            date: '2024-05-09'
          },
          {
            id: 4,
            title: '新西兰发布并修订的供人食用新鲜生姜进口卫生标准',
            url: 'url_to_new_zealand_ginger_import_standards',
            date: '2024-05-09'
          },
          {
            id: 5,
            title: '巴西发布关于进口番木瓜种子的植物检疫要求',
            url: 'url_to_brazil_papaya_seeds_quarantine',
            date: '2024-05-09'
          },
          {
            id: 6,
            title: '爱沙尼亚发布从欧盟以外国家进口植物及其种子的检疫要求',
            url: 'url_to_estonia_plant_import_requirements',
            date: '2024-05-09'
          },
          {
            id: 7,
            title: '巴西发布关于进口莴苣属种子的植物检疫要求',
            url: 'url_to_brazil_lettuce_seeds_quarantine',
            date: '2024-05-09'
          },
          {
            id: 8,
            title: '荷兰发布适用于进口的植物检疫证书的要求',
            url: 'url_to_netherlands_phytosanitary_certificate',
            date: '2024-05-09'
          },
          {
            id: 9,
            title: '欧盟修订关于对植物、植物产品和其他物品进行身份检查和实物检查的频率的实施条例',
            url: 'url_to_eu_inspection_frequency_regulations',
            date: '2024-05-09'
          },
          {
            id: 10,
            title: '新西兰更新供食用的新鲜菠萝进口要求',
            url: 'url_to_new_zealand_pineapple_import_requirements',
            date: '2024-05-09'
          }
        ]
      };
    },
    computed: {
      filteredRegulations() {
        return this.regulations.filter(item => {
          return item.title.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      }
    },
    methods: {
      handleSearch() {
        // 这里可以添加搜索逻辑，例如调用API或更新状态
      }
    }
  };
  </script>
  
  <style scoped>
          body {
              margin: 0;
              font-family: Arial, sans-serif;
          }
          .header {
              padding: 20px;
          }
          .section {
              background-color: gray; /* 设置背景颜色为灰色 */
              padding: 20px; /* 添加一些内边距 */
              position: absolute; /* 设置为绝对定位 */
              bottom: 0; /* 放置在页面底部 */
              width: 100%; /* 占满整个页面宽度 */
          }
          .section p {
              display: flex;
              justify-content: center;
              align-content: center;
          }
          .section img {
              width: 12%;
              height: auto;
          }
          .child-div {
              /* width: 80%; */
              margin-left: auto;
              margin-right: auto;
          }
          .aside-navs {
              width: 20%;
              padding-left: 0.5rem;
              margin-left: 0.5rem;
              float: left;
              box-shadow: inset 0 5px 5px -5px #29627e;
              font-style: italic;
              color: #29627e;
              display: flex;
              flex-direction: column;
          }
          .aside-navs div {
              margin-bottom: 10px;
              display: flex;
              align-items: center;
          }
          .aside-navs a {
              text-decoration: none; /* 移除下划线 */
              color: #333;          /* 文字颜色 */
              padding: 10px;        /* 内边距 */
              border-radius: 5px;   /* 边框圆角 */
              display: block;      /* 使链接填充整个区块 */
          }
          .aside-navs a:hover,
          .aside-navs a.active {
          color: skyblue; /* 鼠标悬停或激活时的文字颜色 */
          }
          .plant_quarantine {
              width: calc(80% - 1.5rem); /* 减去.aside-navs的外边距和自身的padding */
              padding-left: 0.5rem;
              margin-left: 0; /* 清除左边距 */
              /* 其他样式保持不变 */
          }
          table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              text-align: center;
          }
          table a {
              cursor: pointer; /* 鼠标悬停时显示手形光标 */
              text-decoration: none; /* 移除下划线，使链接看起来更像普通文本 */
              color: blue; /* 保持链接的颜色与周围文本一致 */
          }
          td {
              padding: 15px; /* 增加内边距 */
              text-align: left;
          }
          th, td {
              border: none;
              text-align: center;
          }
          tbody tr {
              border-bottom: 1px solid #ddd;
          }
          tbody tr:hover {
              background-color: #f2f2f2;
          }
          thead {
              background-color: #f2f2f2;
          }
          thead th {
              border: 1px solid #ddd;
              padding: 8px;
          }
          .search-form {
              display: flex;
              margin-bottom: 10px;
              width: 100%; /* 使搜索表单宽度填满其父容器 */
              max-width: 500px; /* 可以设置最大宽度限制，根据需要调整 */
          }
          .search-input {
              padding: 10px; /* 增加输入框内边距 */
              border: 1px solid #ddd;
              border-radius: 5px;
              margin-right: 10px; /* 保持输入框与按钮之间的间距 */
              width: 200px;
              /* 如果需要，可以设置一个宽度，如 width: 100%; */
          }
          .search-btn {
              padding: 10px 20px; /* 增加按钮内边距 */
              border: none;
              border-radius: 5px;
              background-color: #007bff;
              color: white;
              cursor: pointer;
              width: 80px;
              height: 42px; /* 可以设置一个具体的高度，以匹配输入框的高度 */
          }
          .search-btn:hover {
              background-color: #0056b3;
          }
          hr {
              border-bottom: 1px solid #000; /* 黑色横线，1px粗细 */
              margin: 20px 0; /* 上下边距 */
          }
      </style>