<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const imgUrl = ''
const style = computed(() => handleBackground('hexlet'))
</script>

<template>
  <div :style="style" class="slidev-layout hexlet-next p-25"></div>
</template>
