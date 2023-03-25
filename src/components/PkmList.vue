<script setup>
import { RouterLink } from 'vue-router'
import router from '@/router'
import { ref } from 'vue';

const props = defineProps({
    pokemons: Array,
    url: Object,
    search: Object
})

const pkmName = ref(null)

if(!props.pokemons[0]) router.push('/')

function showDetails(e) {
    const pokemonLink = e.target.parentNode.classList[0]
    props.url.pokemonUrl = pokemonLink
    router.push('/loadpkm')
}

function searchPokemon(e) {
    e.preventDefault()
    props.search.pkmName = pkmName.value

    router.push('/')
}

</script>

<template>

    <main>
        <form>
            <input placeholder="search by name or id" v-model="pkmName" type="name"/>
            <button @click="searchPokemon">Search</button>
        </form>

        <ul>
            <li v-for="pkm in props.pokemons">

                <a @click="showDetails" :class="pkm.url">

                    <span v-if="pkm.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].split('/')[0].length === 1">
                        00{{ pkm.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].split('/')[0] }}
                    </span>

                    <span v-if="pkm.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].split('/')[0].length === 2">
                        0{{ pkm.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].split('/')[0] }}
                    </span>

                    <span v-if="pkm.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].split('/')[0].length === 3">
                        {{  pkm.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].split('/')[0] }}
                    </span>

                    <span>{{ pkm.name }}</span>
                </a>
            </li>
        </ul>
    </main>

    <footer>
        <div>
            <button v-if="props.url.previousUrl" @click="router.push('/previous')">Previous</button>
            <button v-if="props.url.nextUrl" @click="router.push('/next')">Next</button>
        </div>
    </footer>
</template>