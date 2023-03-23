import { defineStore } from "pinia";

export const usePkmStore = defineStore('pkm', {
    state: () => ({
        pokemons: [],
        url: {
            nextUrl: '',
            previousUrl: '',
            pokemonUrl: ''
        },
        details: {
            name: '',
            flavorText: '',
            order: '',
            sprite: ''
        },
        page: 0
    })
})