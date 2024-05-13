<template>
  <Label v-if="showLabel" :for="name">
    {{ label }}
    <slot />
  </Label>
  <div :class="['mt-2 relative border', { 'border-red-500 rounded-md': hasIssue, 'border-transparent': !hasIssue }]">
    <input
      v-model="model"
      :id="name"
      :type="type"
      :name="name"
      :autocomplete="name"
      :class="['block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 transition-all duration-300', {
        'pl-3': !hasIssue,
        'pl-11': hasIssue,
      }]"
    />

    <ExclamationCircleIcon :class="['absolute top-1.5 left-1.5 size-6 text-red-400 transition-all duration-500', { '-translate-x-3 opacity-0': !hasIssue, 'translate-x-0 opacity-100': hasIssue }]" />
  </div>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/solid'
import { computed, inject } from 'vue'
import Label from './Label.vue'

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  label: { type: [String, Boolean], default: false }
})

const model = defineModel()
const form = inject('form')
const showLabel = computed(() => props.label !== false)
const hasIssue = computed(() => form.errors?.hasOwnProperty?.(props.name))
</script>
