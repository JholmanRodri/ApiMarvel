import login from '../components/PageLogin.vue';
import listPersonajes from '../components/listPersonajes.vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';

export const routes = [
    {path: '/', component: login},
    {path: '/Home', component: listPersonajes},
    {path: '/agregarusuario', component: AgregarUsuario},
]