<template>
  <div class="container-fluid"> 
    <!-- <router-view></router-view> -->
    <PageLogin/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPersonajes from '@/components/ListPersonajes'
import PageLogin from './components/PageLogin.vue'
import PageComics from './components/PageComics.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: PageLogin },
  { path: '/personajes', component: ListPersonajes },
  { path: '/comics', component: PageComics }
]

const router = new VueRouter({
  routes
})

export default {
  name: 'App',
  router,
  components: {
    ListPersonajes,
    PageLogin,
    PageComics
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-whithe: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
</style>
