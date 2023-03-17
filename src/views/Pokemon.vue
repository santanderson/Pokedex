<script setup>

const pokemon = {
    name: "Zekrom",
    id: "644",
    common: "Deep Black Pokémon",
    description: "lorem",
    types: ["dragon", "electric"]
}
</script>

<template>
    <main>
        <div>
            <div class="pkmView">
                <img/>
            </div>
            <div class="details">
                <div>
                    {{ pokemon.id }}
                    {{ pokemon.name }}
                </div>
                {{ pokemon.common }}
                <div class="types">
                    {{ pokemon.types[0] }}
                    {{ pokemon.types[1] }}
                </div>
            </div>
        </div>

        <div class="description">
            <p>{{ pokemon.description }}</p>
        </div>
    </main>

    <footer>
        <button>Back</button>
    </footer>
</template>