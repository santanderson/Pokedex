<script setup>
import { RouterLink } from 'vue-router'
import router from '@/router'

const props = defineProps({
    pokemons: Array
})


</script>

<template>
    <button @click="router.push('/previous')">Previous</button>
    <button @click="router.push('/next')">Next</button>

    <main>
        <ul>
            <li v-for="pkm in props.pokemons">
                <RouterLink to="/pokemon">
                    <span>{{ pkm.name }}</span>
                </RouterLink>
            </li>
        </ul>
    </main>
</template>