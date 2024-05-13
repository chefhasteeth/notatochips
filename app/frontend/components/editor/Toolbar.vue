<template>
  <div ref="toolbar">
    <BubbleMenu v-if="editor" :editor="editor" :shouldShow="showToolbar">
      <div class="p-1 flex gap-2 border border-white/10 bg-slate-500/5 backdrop-blur rounded-lg shadow">
        <ButtonGroup>
          <ToolbarButton @click="editor.chain().focus().toggleBold().run()" :active="editor.isActive('bold')">
            B
          </ToolbarButton>
          <ToolbarButton @click="editor.chain().focus().toggleItalic().run()" :active="editor.isActive('italic')">
            I
          </ToolbarButton>
          <ToolbarButton @click="editor.chain().focus().toggleStrike().run()" :active="editor.isActive('strike')">
            S
          </ToolbarButton>
        </ButtonGroup>

        <ButtonGroup>
          <ToolbarButton @click="editor.chain().focus().toggleBulletList().run()" :active="editor.isActive('bulletList')">
            <ListBulletIcon class="size-5" />
          </ToolbarButton>
          <ToolbarButton @click="editor.chain().focus().toggleOrderedList().run()" :active="editor.isActive('orderedList')">
            <QueueListIcon class="size-5" />
          </ToolbarButton>
        </ButtonGroup>
      </div>
    </BubbleMenu>
  </div>
</template>

<script setup>
import { ButtonGroup } from '@/components'
import { BubbleMenu } from '@tiptap/vue-3'
import { ListBulletIcon, QueueListIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import ToolbarButton from './ToolbarButton.vue'

defineProps({ editor: Object })

const toolbar = ref()

function showToolbar({ state }) {
  return !state.selection.empty || toolbar.value.matches(':hover')
}
</script>
