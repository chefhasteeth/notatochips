<template>
  <TransitionRoot
    :show="welcomeIn"
    enter="transition-all duration-1000"
    enter-from="translate-y-8 opacity-25"
    enter-to="translate-y-0 opacity-100"
  >
    <h1 class="flex text-4xl font-extrabold tracking-widest">
      Hey <div class="animate-handwavy [animation-delay:500ms]">👋</div>
    </h1>
    <p class="mt-6 tracking-wide">
        It looks like there's nothing here yet. That's great. <span class="font-semibold">Welcome!</span> This is <span class="font-semibold text-indigo-300">NotatoChips</span>.
    </p>
    <p class="mt-4 tracking-wide">
        To open the command menu, press <Chip>ctrl + /</Chip>.
    </p>
    <p class="mt-4 tracking-wide">
        You can also just press <Chip>N</Chip> from this page to start a new note.
    </p>
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot } from '@headlessui/vue'
import { Chip } from '@/components'
import { ref, onMounted } from 'vue'

const welcomeIn = ref(false)

onMounted(() => {
  welcomeIn.value = true
})
</script>
