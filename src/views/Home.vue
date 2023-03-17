<script setup>
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <header>
    <div>
      <h1>POKÉDEX</h1>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
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