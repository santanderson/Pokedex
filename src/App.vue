<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia';
import { usePkmStore } from './store/pkmStore';

const pkmStore = usePkmStore()

const {pokemons} = storeToRefs(pkmStore)
const {url} = storeToRefs(pkmStore)
const {page} = storeToRefs(pkmStore)
const {details} = storeToRefs(pkmStore)
const {search} = storeToRefs(pkmStore)
</script>

<template>
  <RouterView :pokemons="pokemons" :url="url" :page="page" :details="details" :search="search"/>
</template>
