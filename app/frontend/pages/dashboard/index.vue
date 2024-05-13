<template>
  <div class="mx-auto h-[80vh] flex items-center max-w-4xl">
    <Welcome />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { router } from '@inertiajs/vue3'
import Welcome from './partials/Welcome.vue'

function attemptToStartNote(event) {
  if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) {
    return
  }

  if (event.key.toLowerCase() === 'n') {
    router.visit("/notes/new")
  }
}

onMounted(() => window.addEventListener("keypress", attemptToStartNote))
onBeforeUnmount(() => window.removeEventListener("keypress", attemptToStartNote))
</script>
