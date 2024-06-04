<template>
  <NavbarHeader></NavbarHeader>
  <div class="child-div">
    <aside class="aside-navs">
      <div class="navs_1">
        <h3>&bull; 法规资讯</h3>
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
            <tr v-for="(item, index) in paginatedRegulations" :key="index">
              <td>{{ item.id }}</td>
              <td><a :href="item.url" target="_blank">{{ item.title }}</a></td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
          <span class="page-info">当前页码：{{ currentPage }} / {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import { ref, computed } from 'vue';
import NavbarHeader from './subHeader.vue';
import FooterComponent from './Footer.vue';
import { getPlantAPI } from './apis/homeAPI.js';

export default {
  components: {
    NavbarHeader,
    FooterComponent
  },
  name: 'PlantQuarantineComponent',
  setup() {
    const searchTerm = ref('');
    const regulations = ref([]);
    const itemsPerPage = ref(10);
    const currentPage = ref(1);

    const getPlant = async () => {
      try {
        const res = await getPlantAPI();
        const { data } = res;
        const formattedData = data.map(item => ({
          id: item.number,
          title: item.attributes.title,
          date: item.attributes.time,
        }));
        regulations.value = formattedData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPlant();

    const filteredRegulations = computed(() => {
      return regulations.value.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredRegulations.value.length / itemsPerPage.value);
    });

    const paginatedRegulations = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredRegulations.value.slice(start, end);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const handleSearch = () => {
      currentPage.value = 1;
    };

    return {
      searchTerm,
      filteredRegulations,
      paginatedRegulations,
      currentPage,
      totalPages,
      itemsPerPage,
      prevPage,
      nextPage,
      handleSearch,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
.header {
    padding: 20px;
}
.section {
    background-color: gray;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
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
    width: 80%;
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
    text-decoration: none;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    display: block;
}
.aside-navs a:hover,
.aside-navs a.active {
    color: skyblue;
}
.plant_quarantine {
    width: calc(80% - 1.5rem);
    padding-left: 0.5rem;
    margin-left: 0;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;
}
table a {
    cursor: pointer;
    text-decoration: none;
    color: blue;
}
td {
    padding: 15px;
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
    width: 100%;
    max-width: 500px;
}
.search-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    width: 200px;
}
.search-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    width: 80px;
    height: 42px;
}
.search-btn:hover {
    background-color: #0056b3;
}
hr {
    border-bottom: 1px solid #000;
    margin: 20px 0;
}
.pagination {
    margin-top: 20px;
    text-align: center;
}
.pagination button {
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    cursor: pointer;
}
.pagination span {
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #ddd;
    background-color: #f8f8f8;
}
.page-info {
    margin: 0 10px;
    font-size: 16px;
}
</style>
