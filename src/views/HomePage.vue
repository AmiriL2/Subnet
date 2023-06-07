<script setup>
import {ref} from "vue"

let output = ref()
let name = ref("")

async function dnsLook() {
    let result = await fetch("https://networkcalc.com/api/security/certificate/" + name.value)
    output.value = await result.json()
}
</script> 

<template>
<div class="TLS">
    <h1>TLS Certificate Checker</h1>
</div>

<v-text-field label="Insert IP Address" variant="solo-filled" id="input" v-model="name"></v-text-field>
<v-btn @click="dnsLook">Search</v-btn>
<h4>Meta</h4>
<div>Protocol: {{ output?.meta.protocol }}</div>
<div>Hostname: {{ output?.meta.hostname }}</div>
<div>Port{{ output?.meta.port }}</div>
<h4>Certificate</h4>
<div>Protocol: {{ output?.certificate.protocol }}</div>
<div>Hostnames: {{ output?.certificate.hostname }}</div>
<div>Port: {{ output?.certificate.port }}</div>
<div>Issued To: {{ output?.certificate.issued_to }}</div>
<div>Certified By: {{ output?.certificate.by }}</div>
<div>Valid From: {{ output?.certificate.valid_from }}</div>
<div>Valid To: {{ output?.certificate.valid_to }}</div>
<div>Alternative Name: {{ output?.certificate.alternates_names }}</div>
</template>

<style>
.TLS{
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>