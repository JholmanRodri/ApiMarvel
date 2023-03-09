import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import axios from 'axios'
 
axios.defaults.baseURL = 'http://localhost:8081/api/usuarios';

createApp(App).use(store).mount('#app') 