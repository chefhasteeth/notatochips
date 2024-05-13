<template>
  <form v-bind="$attrs" @submit.prevent="form[method.toLowerCase()](action)">
    <slot />
  </form>
</template>

<script setup>
import { provide } from 'vue'

const props = defineProps({
  action: { type: String },
  method: { type: String, default: "post" }
})

const form = defineModel();
form.value.authenticity_token = document.head.querySelector('[name="csrf-token"]').content

provide('form', form.value)
</script>
