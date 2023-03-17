<script setup>
import { RouterLink } from 'vue-router';

const pkms = [
    {
        name: "bulbassaur",
        id: '001',
        desc: "lorem",
        url: "www"
    },
    {
        name: "ivyssaur",
        id: '002',
        desc: "lorem",
        url: "www"
    },
    {
        name: "venussaur",
        id: '003',
        desc: "lorem",
        url: "www"
    }
]

</script>

<template>
    <main>
        <ul>
            <li v-for="pkm in pkms">
                <RouterLink to="/pokemon">
                    <span>{{ pkm.id }}</span>
                    <span>{{ pkm.name }}</span>
                </RouterLink>
            </li>
        </ul>
    </main>
</template>