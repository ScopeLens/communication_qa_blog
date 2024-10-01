import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from "axios"
import {createPinia} from 'pinia'
import CookieTool from './utils/cookie.js'

const pinia=createPinia()
const app = createApp(App);
app.use(router)
app.use(pinia)
app.config.globalProperties.$CookieTool = CookieTool;// cookie处理
app.mount('#app')

