import { createApp } from 'vue'
import './style.css'
// import App from './components/knowledge.vue'
import App from './App.vue'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router.js'
const app = createApp(App)
app.use(router)
app.use(AntDesignVue)
app.mount('#app')
