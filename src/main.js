import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'



import '@/assets/style/normalise.css'
import '@/assets/style/base.css'
import '@/assets/style/flex.css'
import '@/assets/style/theme.css'



// let app = createApp(App)
// app.use(router)
// app.mount("#app")

let app

projectAuth.onAuthStateChanged(() => {
  // mount the app when the user logs in but enable to the route guard to work.
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})
