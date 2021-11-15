<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  class: {
    type: String,
  },
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div :style="style" class="slidev-layout two-columns w-full h-full grid grid-cols-2 p-0">
    <div class="py-10 pl-14 pr-4 col-left flex flex-col" :class="props.class">
      <slot />
    </div>
    <div class="col-right flex flex-col p-2" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>
