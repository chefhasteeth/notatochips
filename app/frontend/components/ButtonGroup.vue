<template>
  <span :class="['isolate inline-flex rounded-md overflow-hidden', $attrs.class]" role="group">
    <slot />
  </span>
</template>
