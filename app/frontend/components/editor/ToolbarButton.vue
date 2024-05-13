<template>
  <button type="button" :class="['size-10 flex items-center justify-center backdrop-blur font-semibold', { 'bg-black/50 text-slate-400': !active, 'bg-black/20 text-indigo-500': active }]">
    <slot />
  </button>
</template>

<script setup>
defineProps({ active: Boolean })
</script>
