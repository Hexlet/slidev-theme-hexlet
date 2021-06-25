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
  <div :style="style" class="slidev-layout two-columns w-full h-full grid p-0 grid-cols-2">
    <div class="col-left pl-14 pt-10" :class="props.class">
      <slot />
    </div>
    <div class="col-right flex" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>

