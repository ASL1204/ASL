<template>
    <h2>入侵物种名录</h2>
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
    title: '国家/地区/组织国家',
    dataIndex: 'region',
    key: 'region',
},
{
    title: '类型',
    dataIndex: 'type',
    key: 'type',
},
{
    title: '参考文献',
    dataIndex: 'references',
    key: 'references',
},
];
  
//   const dataSource = ref([
//     // Add your data here...
//   ]);

const dataSource =[
    {
        key: '1',
        name: 'Pterygoplichthys pardalis ',
        chineseName: '豹纹翼甲鲶',
        region: '中国',
        type: '',
        references: '农业农村部 自然资源部 生态环境部 住房和城乡建设部 海关总署 国家林草局公告第567号（重点管理外来入侵物种名录）'
    },
    {
        key: '2',
        name: 'Pomacea canaliculata ',
        chineseName: '福寿螺',
        region: '中国',
        type: '',
        references: '农业农村部 自然资源部 生态环境部 住房和城乡建设部 海关总署 国家林草局公告第567号（重点管理外来入侵物种名录）'
    },
]

  const onSearch = (e) => {
    searchText.value = e;
    };
  
  const generateSpeciesLink = (speciesName) => {
    // 这里根据speciesName生成具体的链接地址，例如：
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