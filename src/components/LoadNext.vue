<script setup>
import axios from 'axios'
import router from '@/router'

const props = defineProps({
    pokemons: Array,
    page: Number,
    url: Object
})


async function next() {

    if(!props.url.nextUrl) return router.push('/pokemon')

    axios.get(props.url.nextUrl).then(
        (res) => {

            props.url.nextUrl = res.data.next
            props.url.previousUrl = res.data.previous

            props.pokemons.splice(0, props.pokemons.length)

            for (let item of res.data.results) {
                props.pokemons.push(item)
            }

            props.page++
            router.push('/pokemon')
        }
    )

}
next()
</script>

<template>
    <main>
        <form>
            <input placeholder="search by name or id" v-model="pkmName" type="name"/>
            <button @click="searchPokemon">Search</button>
        </form>

        loading
    </main>

    <footer>
        <div>
            <button v-if="props.url.previousUrl" @click="router.push('/previous')">Previous</button>
            <button v-if="props.url.nextUrl" @click="router.push('/next')">Next</button>
        </div>
    </footer>
</template>