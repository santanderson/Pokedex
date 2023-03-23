<script setup>
import axios from 'axios'
import router from '@/router'


const props = defineProps({
    pokemons: Array,
    url: Object
})

async function loading() {

    axios.get('https://pokeapi.co/api/v2/pokemon-species/').then(
        (res) => {

            props.url.nextUrl = res.data.next;

            if(props.pokemons) props.pokemons.splice(0, props.pokemons.length)

            for (let item of res.data.results) {
                props.pokemons.push(item)
            }
            
            router.push('/pokemon')

        }
    )
}
loading()
</script>

<template>

</template>