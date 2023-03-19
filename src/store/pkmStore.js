import { defineStore } from "pinia";

export const usePkmStore = defineStore('pkm', {
    state: () => ({
        pokemons: [],
        url: {
            nextUrl: '',
            previousUrl: ''
        },
        page: 0
    })
})