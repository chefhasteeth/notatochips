<template>
  <div class="max-w-5xl mx-auto relative py-28">
    <NoteEditor v-model="note.contents" />
  </div>
</template>

<script setup>
import NoteEditor from '@/components/editor/NoteEditor.vue'

defineProps({ user: Object, note: Object })
</script>
