<script setup>
import axios from 'axios'
import router from '@/router'

const props = defineProps({
    pokemons: Array,
    page: Number,
    details: Object,
    url: Object
})

async function load() {

    axios.get(props.url.pokemonUrl).then(
        res => {
            const data = res.data

            props.details.name = data.name

            if(data.flavor_text_entries[3]) {
                props.details.flavorText = data.flavor_text_entries[3].flavor_text
            } else if (data.flavor_text_entries[0]) {
                props.details.flavorText = data.flavor_text_entries[0].flavor_text
            } else {
                props.details.flavorText = 'Pokemon data not yet registered!'
            }

            props.details.order = data.id

            loadDetails()
        }
    ).catch(error => {
        window.alert('Non-existent pokémon, please try again!')
        router.push('/pokemon')
    })

}

async function loadDetails() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.details.order}`).then(
                (res) => {
                
                if(!res.data.sprites.versions['generation-v']['black-white'].animated.front_default) {
                    props.details.sprite = res.data.sprites.other['official-artwork'].front_default
                } else if(res.data.sprites.versions['generation-v']['black-white'].animated.front_default) { 
                    props.details.sprite = res.data.sprites.versions['generation-v']['black-white'].animated.front_default
                }
                else {
                    props.details.sprite = res.data.sprites.front_default
                }


                props.details.types.splice(0, props.details.types.length)

                for( let types of res.data.types) {
                    props.details.types.push(types.type.name)
                }

                console.log(props.details.types)

                    router.push('/pokemon/details')
                }

            )
}
load()
</script>

<template>
loading
</template>