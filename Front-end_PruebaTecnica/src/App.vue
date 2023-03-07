<template>
  <div>
    <h1>
      Marvel Studio
    </h1>
    <PageLogin/>
    <!-- <PageComics/> -->
    <ListPersonajes/>
  
  </div>
</template>

<script>
import ListPersonajes from '@/components/ListPersonajes'
import PageLogin from './components/PageLogin.vue'
// import PageComics from './components/PageComics.vue'

export default {
  name: 'App',
  components: {
    ListPersonajes,
    PageLogin,
    // PageComics
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F --background-card: #3C3E44 --text-whithe: #FFFFFF --text-gray: #c0c0c0 --text-orange: #FF9800
}
</style>
