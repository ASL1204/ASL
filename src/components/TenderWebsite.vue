<template>
   <NavbarHeader></NavbarHeader>
    <div class="container">
        <div class="tenderNotice">
            <ul class="tenderBar">
                <li v-for="(item, index) in listData" :key="index">
                    <span v-if="index === 0" class="todayNotice">{{ item.title }}</span>
                    <span v-else-if="index !== listData.length - 1" class="detailNotice">
                        {{ item.title }}
                        <a href="#">{{ item.number }}</a>
                    </span>
                    <span v-else class="totalNotice">
                        <span>总<a href="#">{{ item.number }}条</a></span>
                    </span>
                </li>
            </ul>
        </div>
        <div v-for="(page, index) in paginatedData" :key="index" v-show="index + 1 === currentPage">
            <table>
                <thead>
                    <tr>
                        <th>招标公告名称</th>
                        <th>所属行业</th>
                        <th>所属地区</th>
                        <th>来源渠道</th>
                        <th>公告发布时间</th>
                        <th>距离开标时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, itemIndex) in page" :key="itemIndex">
                        <td><a href="" style="color: blue;">{{ item.name }}</a></td>
                        <td>{{ item.industry }}</td>
                        <td>{{ item.region }}</td>
                        <td>{{ item.channel }}</td>
                        <td>{{ item.publishTime }}</td>
                        <td>{{ item.daysToOpening }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination">
            <span>共 {{ totalPages }}页</span>
            <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
            <span>当前页是第{{ currentPage }}页</span>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>

<script>
import NavbarHeader from './subHeader.vue';
import FooterComponent from './Footer.vue';
export default {
    name: "TenderWebsite",
    components:{
        NavbarHeader,
        FooterComponent
    },
    data() {
        return {
            itemsPerPage: 16,
            currentPage: 1,
            listData: [
                { index: 1, title: '今日发布:' }, { index: 2, title: '资格预审公告', number: 200 }, { index: 3, title: '招标公告', number: 2050 },
                { index: 4, title: '中标候选人公示', number: 1114 }, { index: 5, title: '中标结果公示', number: 1422 }, { index: 6, title: '更正公告公示', number: 522 },
                { index: 7, number: 5308 }
            ],
            tenderNotices: [
                { name: "广东农垦建设农场有限公司2024年水利灌溉工程建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: "2024-01-01", daysToOpening: 10 },
                { name: "广东省江门市市属国有林场国家储备林建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: "2024-01-05", daysToOpening: 6 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "发布工具", publishTime: " 2024-04-30", daysToOpening: 4 },
                { name: "惠东县一二三产融合油茶产业园（2024年度）项目施工（第一标段）竞争性磋商公告", industry: "农林牧渔", region: "广东", channel: "粤招优采电子招标采购交易平台", publishTime: " 2024-04-30", daysToOpening: 14 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "广东省招标投标监管网", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "连山壮族瑶族自治县2024年松材线虫病巩固镇（小三江镇、上帅镇）防治作业项目竞争性磋商公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 1 },
                { name: "惠东县2024年森林质量精准提升林分优化提升建设工程项目施工招标公告", industry: "农林牧渔", region: "广东", channel: "发布工具", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "连山壮族瑶族自治县2024年松材线虫病防治作业（吉田、永和、太保、福堂、和洞）采购项目竞争性磋商公告", industry: "农林牧渔", region: "广东", channel: "国信招标集团电子交易平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "2024年榄核镇农田排涝站维护管养服务项目竞争性磋商公告", industry: "农林牧渔", region: "广东", channel: "广东省招标投标监管网", publishTime: " 2024-04-30", daysToOpening: 3 },
                { name: "广东省江门市市属国有林场国家储备林建设项目（一期）2024年度营造林工程（四堡林场）竞争性磋商公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "农业外来入侵物种普查竞争性磋商采购公告", industry: "农林牧渔", region: "广东", channel: "发布工具", publishTime: " 2024-04-30", daysToOpening: 12 },
                { name: "山亭区农业外来入侵物种普查技术服务项目公告", industry: "农林牧渔", region: "广东", channel: "国信招标集团电子交易平台", publishTime: " 2024-04-30", daysToOpening: 4 },
                { name: "郑州经济技术开发区农业外来入侵物种普查项目成交公告", industry: "农林牧渔", region: "广东", channel: "粤招优采电子招标采购交易平台", publishTime: " 2024-04-30", daysToOpening: 5 },
                { name: "郑州经济技术开发区农业外来入侵物种普查项目谈判公告", industry: "农林牧渔", region: "广东", channel: "发布工具", publishTime: " 2024-04-30", daysToOpening: 9 },
                { name: "2023年广东省农业外来入侵物种普查项目竞争性磋商公告", industry: "农林牧渔", region: "广东", channel: "广东省招标投标监管网", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 8 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "发布工具", publishTime: " 2024-04-30", daysToOpening: 3 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 10 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "发布工具", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "粤招优采电子招标采购交易平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "广东省招标投标监管网", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "广东省招标投标监管网", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 2 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
                { name: "广东农垦平岗农场对虾小棚养殖基地尾水处理及配套设施建设项目公告", industry: "农林牧渔", region: "广东", channel: "国义招标采购平台", publishTime: " 2024-04-30", daysToOpening: 0 },
            ],
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.tenderNotices.length / this.itemsPerPage);
        },
        paginatedData() {
            const result = [];
            for (let i = 0; i < this.tenderNotices.length; i += this.itemsPerPage) {
                result.push(this.tenderNotices.slice(i, i + this.itemsPerPage));
            }
            return result;
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
}
</script>

<style scoped>
* {
    text-decoration: none;
    box-sizing: border-box;
}

.container {
    width: 1400px;
    height: 590px;
    margin: 0 auto;
    /* background-color: pink; */
}

.tenderNotice .tenderBar {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
}

.tenderBar .todayNotice {
    color: red;
    font-weight: 800
}

.tenderBar .infoNotice a {
    color: blue;
}

.tenderBar .totalNotice a {
    color: red;
    font-weight: 800;
}

table {
    width: 100%;
    /* 设置表格宽度为100% */
    table-layout: auto;
    /* 使用固定表格布局 */
}

td,
th {
    text-align: center;
    white-space: nowrap;
    /* 防止单元格内容换行 */
    overflow: hidden;
    /* 隐藏溢出内容 */
    text-overflow: ellipsis;
    /* 显示省略号来代替溢出内容 */

}

.pagination {
    display: flex;
    /* 父级使用flex布局 */
    justify-content: flex-end;
    /* 设置主轴方向的对齐方式为末尾，使按钮移到右侧 */
    align-items: flex-end;
    /* 设置交叉轴方向的对齐方式为末尾，使按钮移到下方 */
    margin-top: 20px;
}

.pagination button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #0056b3;
}
</style>