<template>
  <div class="menu">
    <page-content :content-config="contentConfig">
      <template #iconSlot="scope">
        <el-icon size="large">
          <component
            :is="scope.row.icon ? scope.row.icon.split('-icon-')[1] : ''"
          />
        </el-icon>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
</script>
