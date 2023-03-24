<script setup>
import axios from 'axios'
import router from '@/router'

const props = defineProps({
    pokemons: Array,
    page: Number,
    url: Object
})


async function previous() {

    if(!props.url.previousUrl) return router.push('/pokemon')

    axios.get(props.url.previousUrl).then(
        (res) => {

            props.url.nextUrl = res.data.next
            props.url.previousUrl = res.data.previous

            props.pokemons.splice(0, props.pokemons.length)

            for (let item of res.data.results) {
                props.pokemons.push(item)
            }

            props.page--
            router.push('/pokemon')
        }
    )

}
previous()
</script>

<template>

</template>