<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia';
import { usePkmStore } from './store/pkmStore';

const pkmStore = usePkmStore()

const {pokemons} = storeToRefs(pkmStore)
const {url} = storeToRefs(pkmStore)
const {page} = storeToRefs(pkmStore)
</script>

<template>
  <RouterView :pokemons="pokemons" :url="url" :page="page"/>
</template>
