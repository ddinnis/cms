<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  iconName: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.iconName}`)
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
