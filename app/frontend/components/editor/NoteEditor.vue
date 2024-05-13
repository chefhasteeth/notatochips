<template>
  <Toolbar :editor="editor" />

  <div class="prose prose-slate prose-invert max-w-full h-full">
    <EditorContent :editor="editor" />
  </div>
</template>

<style>
.ProseMirror {
  @apply min-h-[calc(100vh-16rem)] focus:outline-none;
}
</style>

<script setup>
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Toolbar from './Toolbar.vue'

const model = defineModel()

const editor = useEditor({
  autofocus: true,
  content: model.value,
  extensions: [
    StarterKit,
    TaskItem,
    TaskList,
  ],
})
</script>
