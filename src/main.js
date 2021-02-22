import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vPlugin from './plugins/plugin'

import './assets/normalise.css'
import './assets/base.css'
import './assets/flex.css'
import './assets/theme.css'




const app = createApp(App)
app.use(router)
app.mount("#app")

app.config.globalProperties.$plugin = vPlugin

console.log(app.config.globalProperties)



// createApp(App)
// .use(router)
// .mount('#app')
