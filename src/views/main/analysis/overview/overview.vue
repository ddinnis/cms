<template>
  <div class="overview">
    <el-collapse v-model="activeName">
      <el-collapse-item title="关于" name="1">
        <div>
          Vue-Ts-CMS 是基于Vue3、Vuex、VueRouter、VueCLI、 ElementPlus
          、TypeScript、Echart5 等后台系统解决方案。
        </div>
      </el-collapse-item>
      <el-collapse-item title="技术栈" name="2">
        <el-descriptions :column="3" border>
          <template v-for="item in tech" :key="item.label">
            <el-descriptions-item
              :label="item.label"
              label-align="right"
              align="center"
              label-class-name="my-label"
              class-name="my-content"
              width="150px"
            >
              <el-tag size="small">{{ item.data }}</el-tag>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </el-collapse-item>
      <el-collapse-item title="项目解构" name="3">
        <pre>{{ tree }}</pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tree from './config/tree'

const activeName = ref('1')

const tech = [
  { label: '开发工具', data: 'Visual Studio Code' },
  { label: '编程语言', data: 'TypeScript 4.x + JavaScript' },
  { label: '构建工具', data: 'Vite 2.x' },
  { label: '前端框架', data: 'Vue 3.x' },
  { label: '路由工具', data: 'Vue Router 4.x' },
  { label: '状态管理', data: 'pinia' },

  { label: 'UI 框架', data: 'Element Plus' },
  { label: '可视化', data: 'Echart5.x' },

  { label: '富文本', data: ' WangEditor' },
  { label: '工具库', data: 'dayjs + countup.js' },

  { label: 'CSS 预编译', data: ' Less' },
  { label: 'HTTP 工具', data: 'Axios' },

  { label: '代码规范', data: 'EditorConfig + Prettier + ESLint' }
]
</script>

<style lang="less" scoped>
.overview {
  ::v-deep {
    .el-collapse {
      box-sizing: border-box;
      padding-left: 25px;
      border: none;
      .el-collapse-item__header {
        padding-left: 10px;
        font-weight: 800;
        font-size: large;
      }
      .el-collapse-item__wrap {
        .el-collapse-item__content {
          padding-left: 10px;
          padding-top: 0;
        }
      }
    }
  }
}
</style>
