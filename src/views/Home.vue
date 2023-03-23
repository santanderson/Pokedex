<script setup>
import PkmList from '../components/PkmList.vue';
import Load from '../components/Load.vue'
</script>

<template>
  <header>
    <div>
      <h1>POKÉDEX</h1>
    </div>
  </header>

  <Load/>

</template>

<style scoped>
header {
  height: 110px;
  background-color: white;
}

header div {
  background-color: black;
  border-bottom: 6px solid yellow;
  box-shadow: 1px 4px 3px black;
  color: white;
  height: 50px;
}
</style>