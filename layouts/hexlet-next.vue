<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const style = computed(() => handleBackground('/assets/hexlet-next.png'))
</script>

<template>
  <div :style="style" class="slidev-layout hexlet-next p-25"></div>
</template>
