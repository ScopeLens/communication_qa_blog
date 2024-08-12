import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import CookieTool from './utils/cookie'

const app = createApp(App);
app.use(router)
app.config.globalProperties.$CookieTool = CookieTool;// cookie处理
app.mount('#app')

