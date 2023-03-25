<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    details: Object
})

const order = props.details.order

if(order.toString().length === 1) props.details.order = `00${props.details.order}`
if(order.toString().length === 2) props.details.order = `0${props.details.order}`

console.log(props.details)

</script>

<template>
    <main class="info">
        <div class="infoContainer">
            <div class="pkmView">
                <img :src="props.details.sprite"/>
            </div>
            <div class="details">
                <div>
                    <span>. {{ props.details.order }}</span>
                    <span>{{ props.details.name }}</span>
                </div>
                <div class="types">
                    <span v-for="types in props.details.types">{{ types }} </span>
                </div>
            </div>
        </div>

        <div class="flavorText">
            <p>{{ props.details.flavorText }}</p>
        </div>
    </main>

    <footer>
        <RouterLink to="/pokemon">
            Back
        </RouterLink>
    </footer>
</template>