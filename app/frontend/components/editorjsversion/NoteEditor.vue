<template>
  <div id="editor" class="prose prose-slate prose-invert max-w-full h-full" ref="element" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import EditorJS from '@editorjs/editorjs'

const element = ref()
const model = defineModel()
let editor = null
let modelUpdating = false

onMounted(() => {
  editor = new EditorJS({
    autofocus: true,
    holder: element.value.id,
    onReady: renderInitialContent,
    onChange: renderToModel,
  })
})

function renderInitialContent() {
  if (!model.value) {
    return
  }

  if (typeof model.value === 'string') {
    return editor.blocks.renderFromHTML(model.value)
  }

  editor.render(model.value)
}

function renderToModel() {
  if (modelUpdating) return

  modelUpdating = true

  editor.save()
    .then(data => { model.value = data })
    .finally(() => { modelUpdating = false })
}
</script>

<style>
:root {
  --color-selection: theme('colors.white/15%')
}

.ce-popover {
  --color-background: theme('colors.black/15%');
  --color-border: theme('colors.white/10%');
  --color-border-icon: theme('colors.white/10%');
  --color-text-primary: theme('colors.slate.300');
  --color-background-item-hover: theme('colors.black/30%');
  --width: 230px;
}

.ce-block--selected .ce-block__content,
.ce-paragraph::selection {
  background: var(--color-selection);
}

.ce-toolbar__plus:hover,
.ce-toolbar__settings-btn:hover {
  @apply ml-2 bg-slate-950 text-slate-500;
}

.ce-popover {
  @apply backdrop-blur;
}

.ce-inline-toolbar {
  background-color: var(--color-background);
  @apply p-1 flex gap-2 border border-white/10 backdrop-blur rounded-lg shadow;

  .ce-inline-toolbar__toggler-and-button-wrapper {
    @apply p-0;
  }

  button {
    @apply size-8 flex items-center justify-center backdrop-blur font-semibold rounded-md;
  }
}

.cdx-search-field {
  @apply border border-white/10 bg-white/5 focus-within:ring-1 focus-within:ring-indigo-500;

  input {
    @apply focus:outline-none focus:ring-0;
  }
}

.ce-popover-item__icon {
  @apply border border-white/10 bg-white/5 text-slate-300 shadow-none;
}

.cdx-notify--error {
  background: theme('colors.red.500');
}

.cdx-notify__cross::after,
.cdx-notify__cross::before {
  background: theme('colors.white');
}
</style>
