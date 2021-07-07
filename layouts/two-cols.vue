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
  <div :style="style" class="slidev-layout">
    <h1>Wow{{ props.title }}</h1>
    <div class="two-columns w-full h-full grid grid-cols-2">
      <div class="col-left" :class="props.class">
        <slot />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>


