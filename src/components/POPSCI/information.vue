<template>
    <h2>入侵物种信息</h2>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      bordered
      :pagination="false">
      
    <template #name="{ text, record }">
        <a :href="generateSpeciesLink(text)" target="_blank">
            {{ text }}
        </a>
    </template>

    </a-table>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
},
{
    title: '完整学名',
    dataIndex: 'name',
    key: 'name',
},
{
    title: '中文名称',
    dataIndex: 'chineseName',
    key: 'chineseName',
},
{
    title: '英文名称',
    dataIndex: 'englishName',
    key: 'englishName',
},
{
    title: '分类地位',
    dataIndex: 'category',
    key: 'category',
},
{
    title: '上级名称',
    dataIndex: 'superiorName',
    key: 'superiorName',
},
];
  
//   const dataSource = ref([
//     // Add your data here...
//   ]);

const dataSource =[
    {
        key: '1',
        name: 'Rumex obtusifolius L.',
        chineseName: '钝叶酸模，苦酸模',
        englishName: 'broad-leaved dock',
        category: '种',
        superiorName: 'Rumex',
    },
    {
        key: '2',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '3',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '4',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '5',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '6',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '7',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '8',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '9',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },
    {
        key: '10',
        name: 'Cuscuta approximata Bab.',
        chineseName: '杯花菟丝子，苜蓿菟丝子',
        englishName: 'smallseed alfalfa dodder',
        category: '种',
        superiorName: 'Cuscuta'
    },

]

  const onSearch = (e) => {
    searchText.value = e;
    };
  
  const generateSpeciesLink = (speciesName) => {
    // 这里根据speciesName生成具体的链接地址
    // 假设有一个API可以提供关于物种的详细信息页面，那么可以构造如下的URL
    return `https://example.com/species/details/${encodeURIComponent(speciesName)}`;
    };

</script>
<style scoped>
h2{
    text-align: center;
    font-size: 23px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>