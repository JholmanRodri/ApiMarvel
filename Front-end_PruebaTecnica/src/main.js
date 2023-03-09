import * as Vue from 'vue';
import { store } from './store/store.js'
import { routes } from './routes/routes.js'
import axios from 'axios'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8081/';

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = Vue.createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
