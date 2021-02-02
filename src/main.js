import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

createApp(App)
.use(router)
.mount('#app');

// const app = Vue.createApp({
//     data() {
//         return {
//             user: 'user'
//         }
//     }
// });

// app.use(router).mount('#app');