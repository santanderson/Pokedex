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
        (res) => {
            const data = res.data

            props.details.name = data.name
            props.details.flavorText = data.flavor_text_entries[0].flavor_text
            props.details.order = data.id

            loadDetails()
        }
    )

}

async function loadDetails() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.details.order}`).then(
                (res) => {
                    props.details.sprite = res.data.sprites.versions['generation-iv'].platinum.front_default

                    router.push('/pokemon/details')
                }
            )
}
load()
</script>

<template>
ss
</template>