<script setup>
import { RouterLink } from 'vue-router'
import router from '@/router'
import { ref } from 'vue';

const props = defineProps({
    pokemons: Array,
    url: Object
})

if(!props.pokemons[0]) router.push('/')

function showDetails(e) {
    const pokemonLink = e.target.parentNode.classList[0]
    props.url.pokemonUrl = pokemonLink
    console.log(props.url.pokemonUrl)
    router.push('/loadpkm')
}

</script>

<template>
    <button @click="router.push('/previous')">Previous</button>
    <button @click="router.push('/next')">Next</button>

    <main>
        <ul>
            <li v-for="pkm in props.pokemons">
                <a @click="showDetails" :class="pkm.url">
                    <span>{{ pkm.name }}</span>
                </a>
            </li>
        </ul>
    </main>
</template>