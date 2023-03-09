<template>
    <section>
        <div class="Personajes">
            <div class="Personaje_item" v-for="personaje in personajes" :key="personaje.id">
                <CartaPersonaje :personaje="personaje" />
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CartaPersonaje from './CartaPersonaje.vue'

export default {
    components: {
        CartaPersonaje
    },
    setup() {
        const store = useStore()
        const personajes = computed(() => {
            return store.state.PersonajesFiltro
        })
        onMounted(() => {
            store.dispatch('getPersonajes')
        })
        return {
            personajes
        }
    }
}
</script>
<style scoped>
.Personajes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem;
}

@media screen and (max-width: 1024px) {
    .Personajes {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 768px) {
    .Personajes {
        grid-template-columns: 1fr;
    }
}
</style>