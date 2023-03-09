import login from '../components/PageLogin.vue';
import listPersonajes from '../components/ListPersonajes.vue';

export const routes = [
    {path: '/', component: login},
    {path: '/Home', component: listPersonajes},
]