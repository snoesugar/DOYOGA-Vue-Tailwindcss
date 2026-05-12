import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 導入剛才封裝的函式
import { setupVeeValidate } from './plugins/vee-validate'

const app = createApp(App)

setupVeeValidate() // 執行驗證設定
app.use(createPinia())
app.use(router)
app.mount('#app')
