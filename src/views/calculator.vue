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
    <div class="Name">
     <h1>Subnet Caculator</h1>
    </div>
    <v-text-field label="Insert IP Address" variant="solo-filled" id="input" v-model="NewInput"></v-text-field>
<v-btn @click="Retreat">Retrieve Data</v-btn>
   <div>Status: {{ valueofIP?.status }}</div>
   <div>CIDR Notification: {{ valueofIP?.address?.cidr_notation }}</div>
   <div>Subnet Bits: {{ valueofIP?.address?.subnet_bits }}</div>
   <div>Subnet Mask: {{ valueofIP?.address?.subnet_mask }}</div>
   <div>Wildcard Mask: {{ valueofIP?.address?.wildcard_mask }}</div>
   <div>Network Address: {{ valueofIP?.address?.network_address }}</div>
   <div>Broadcast Address: {{ valueofIP?.address?.broadcast_address }}</div>
   <div>Assignable Hosts: {{ valueofIP?.address?.assignable_hosts }}</div>
   <div>First Assignable Host: {{ valueofIP?.address?.first_assignable_host }}</div>
   <div>Last Assignable Host: {{ valueofIP?.address?.last_assignable_host }}</div>
</template>

<style>

.Name{
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>