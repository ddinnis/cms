<template>
  <div class="list">
    <PageContent
      :contentConfig="contentConfig"
      :permission="false"
    ></PageContent>
  </div>
</template>

<script setup lang="ts" name="list">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
</script>
