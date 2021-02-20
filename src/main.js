import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/normalise.css'
import './assets/base.css'
import './assets/flex.css'
import './assets/theme.css'

createApp(App).use(router).mount('#app')
