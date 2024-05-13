<template>
  <button v-bind="$attrs" :type="type" :class="['w-full flex justify-center px-3 py-1.5 rounded-md text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', classes]">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  type: {
    type: String,
    default: "button",
  }
})

const colors = {
  default: "bg-indigo-500 hover:bg-indigo-400 text-white focus-visible:outline-indigo-500"
}

const sizes = {
  default: "px-3 py-1.5"
}

const classes = computed(() => `${colors[props.color]} ${sizes[props.size]}`)
</script>
