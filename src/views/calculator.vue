<script setup>
import {ref} from 'vue'

let valueofIP = ref('')
let NewInput = ref()


async function Retreat() {
    const result = await fetch('https://networkcalc.com/api/ip/' + NewInput.value)
    console.log(result);
    valueofIP.value = result

let jsonValue = await result.json();
valueofIP.value = jsonValue
}

NewInput.value = ''


</script>

<template>
    <v-text-field v-model="NewInput" class="IPtext" placeholder="Enter IP Address"></v-text-field>
    <p>{{ valueofIP }}</p>
<v-btn @click="Retreat">Retrieve Data</v-btn>
</template>

<style>
.IPtext {
    padding-top: 20px;
}
</style>