<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
})


const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div :style="style" class="slidev-layout flex flex-col">
    <slot />
  </div>
</template>
