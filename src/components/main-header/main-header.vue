<template>
  <div class="main-header" id="main">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-crumb />
      <header-info />
    </div>
    <SvgIcon
      :iconName="isFullScreen ? 'close-fullscreen' : 'fullscreen'"
      @click="handleFullScreen"
    ></SvgIcon>
    <div @click="handleSizeChange">size</div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeaderInfo from './c-cpns/header-info.vue'
import HeaderCrumb from './c-cpns/header-crumb.vue'

import screenfull from 'screenfull'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)
const isFullScreen = ref(false)
function handleMenuIconClick() {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const handleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value

  if (!screenfull.isEnabled) {
    ElMessage({
      message: 'you browser can not work',
      type: 'warning'
    })
    return false
  }
  screenfull.toggle()
}

const change = () => {
  isFullScreen.value = screenfull.isFullscreen
}

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change)
  }
})
onBeforeUnmount(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', change)
  }
})

const handleSizeChange = () => {
  console.log(Element)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}

.svg-icon {
  font-size: 25px;
}
</style>
