<script setup>
import axios from 'axios'
import router from '@/router'


const props = defineProps({
    pokemons: Array,
    url: Object,
    search: Object
})

async function loading() {

    if (!props.search.pkmName) {
        const url = 'https://pokeapi.co/api/v2/pokemon-species/'

        axios.get(url).then(
            (res) => {

                props.url.nextUrl = res.data.next;
                props.url.previousUrl = res.data.previous;

                if (props.pokemons) props.pokemons.splice(0, props.pokemons.length)

                for (let item of res.data.results) {
                    props.pokemons.push(item)
                }

                router.push('/pokemon')

            }
        )
    } else if (props.search.pkmName) {
        const pkm = props.search.pkmName.toLowerCase()

        props.url.pokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${pkm}`
        router.push('/loadpkm')
    }
}

loading()
</script>

<template>
    loading
</template>